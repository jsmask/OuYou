<template>
  <div class="main" ref="pool">
    <div
      class="fish"
      ref="fish"
      v-for="(item,index) in fishList"
      :key="index"
      :class="{'left':item.direction==-1,[item.type]:true}"
      :style="{'transform':'translate('+item.x+'px,'+item.y+'px)'}"
    >
      <div class="fish-main" :style="{'transform':'scale('+(1+item.level*0.025)+')'}">
        <div class="fish-body">
          <div class="fish-fins"></div>
        </div>
      </div>
    </div>
    <div
      class="bubble"
      :key="item.index"
      v-for="item in bubbleList"
      :style="{'left':item.x +'px','top':item.y+'px'}"
    >
      <div class="bubble-body"></div>
    </div>
    <div
      class="food"
      v-for="item in foodList"
      :key="item.index"
      :style="{'left':item.x +'px','top':item.y+'px'}"
    >
      <div class="food-body"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fishNum: 7,
      fishList: [],
      bubbleList: [],
      foodList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.width = this.$refs.pool.clientWidth;
      this.height = this.$refs.pool.clientHeight;
      for (let i = 0; i < this.fishNum; i++) {
        let fish = this.addFish(i);
      }
      this.move();
      this.foodMove();
      this.throw();
    },
    addFish(i) {
      let obj = {
        index: `fish_${i}`,
        x: this.random(0, this.width - 60),
        y: this.random(15, this.height - 30),
        direction: this.random(0, 1) > 0.5 ? 1 : -1,
        type: "fish-type" + ~~this.random(1, 6),
        speed: this.random(1, 3),
        bTime: this.random(1, 3) * 100,
        bMax: this.random(3, 10) * 100,
        sy: Math.random(0, 10),
        level: ~~this.random(0, 2)
      };
      this.fishList.push(obj);
      return obj;
    },
    addBubble(fish) {
      const { index, x, y } = fish;
      this.bubbleList.push({
        x,
        y,
        index: index + "_" + ~~(Math.random() * Math.pow(10, 6))
      });
    },
    foodMove() {
      window.requestAnimationFrame(() => {
        this.foodList.forEach((food, index) => {
          food.y++;
          if (food.y > this.height) {
            this.foodList.splice(index, 1);
          }
        });
        this.foodMove();
      });
    },
    move() {
      window.requestAnimationFrame(() => {
        this.fishList.forEach(fish => {
          if (++fish.bTime > fish.bMax) {
            fish.bTime = 0;
            this.addBubble(fish);
          }

          if (this.foodList.length > 0) {
            let foodIndex = 0;

            if (this.foodList.length > 1) {
              for (let i = 0, sub = null; i < this.foodList.length; i++) {
                let num = Math.abs(this.foodList[i].x - fish.x);
                if (sub == null) sub = num;
                if (num < sub) {
                  sub = num;
                  foodIndex = i;
                }
              }
            }

            let food = this.foodList[foodIndex];

            let dx = food.x - fish.x;
            let dy = food.y - fish.y;
            if (dx >= 0) {
              fish.direction = 1;
            } else {
              fish.direction = -1;
            }

            let angle = Math.atan2(dy, dx);

            if (dx < 10 && dx > -10 && dy < 10 && dy > -10) {
              fish.level++;
              this.foodList.splice(foodIndex, 1);
              fish.direction = Math.random() > 0.5 ? 1 : -1;
            } else {
              let vx = fish.speed * 1.2 * Math.cos(angle);
              let vy = fish.speed * 1.2 * Math.sin(angle);
              fish.x += vx;
              fish.y += vy;
            }
          } else {
            fish.x += fish.speed * fish.direction;
            fish.sy += 0.01;
            fish.y += Math.cos(fish.sy) * 2;
          }

          if (fish.x < -60) {
            fish.x = -60;
            fish.direction *= -1;
            fish.speed = this.random(1, 3);
          }
          if (fish.x > this.width + 30) {
            fish.x = this.width + 30;
            fish.direction *= -1;
            fish.speed = this.random(1, 3);
          }
          if (fish.y < 0) {
            fish.y = 0;
          }
          if (fish.y > this.height - 30) {
            fish.y = this.height - 30;
          }
        });

        this.move();
      });
    },
    throw() {
      this.$refs.pool.addEventListener("click", e => {
        let food = {
          x: e.layerX,
          y: e.layerY
        };
        let index = this.foodList.push(food);
      });
    },
    random(min, max) {
      return min + Math.random() * max;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: lightblue;
  overflow: hidden;
  position: relative;
}
.fish {
  width: 60px;
  height: 30px;
  position: absolute;
}

.fish.left .fish-body {
  transform: scaleX(-1);
}
.fish.fish-type1 .fish-body {
  --main-skin: rgb(230, 136, 72);
}
.fish.fish-type2 .fish-body {
  --main-skin: rgb(230, 90, 72);
}
.fish.fish-type3 .fish-body {
  --main-skin: rgb(72, 127, 230);
}
.fish.fish-type4 .fish-body {
  --main-skin: rgb(241, 207, 94);
}
.fish.fish-type5 .fish-body {
  --main-skin: rgb(82, 151, 100);
}
.fish.fish-type6 .fish-body {
  --main-skin: rgb(82, 120, 151);
}
.fish-main {
  transition: 0.3s all;
}
.fish-body {
  position: relative;
  margin-left: 6px;
  width: 50px;
  height: 30px;
  border-radius: 50% 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background-color: var(--main-skin);
  transition: 1s all;
  transform-origin: 50% 50%;
}
.fish-body::before {
  content: "";
  display: block;
  position: absolute;
  left: -11px;
  width: 0;
  height: 0;
  border-left: solid 25px var(--main-skin);
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  animation: move2 0.24s linear infinite;
}
.fish-body::after {
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  left: 34px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 0px 0px 0 2px white;
}
.fish-fins {
  width: 0;
  height: 0;
  border-left: solid 6px var(--main-skin);
  border-top: solid 3px transparent;
  border-bottom: solid 3px transparent;
  position: absolute;
  top: 17px;
  left: 20px;
  filter: brightness(5.5);
  opacity: 0.1;
  animation: move 0.24s linear infinite;
  transform-origin: 100% 100%;
}
.bubble {
  width: 5px;
  height: 5px;
  position: absolute;
  animation: up 5s linear;
  animation-fill-mode: forwards;
}
.bubble-body {
  width: 5px;
  height: 5px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
  left: 60px;
  top: 10px;
  opacity: 1;
  animation: sway 3s linear infinite;
}
.food {
  width: 10px;
  height: 7px;
  position: absolute;
  opacity: 1;
}
.food-body {
  position: absolute;
  width: 10px;
  height: 7px;
  border-radius: 45% 42%;
  background: rgb(82, 57, 43);
  animation: sway 3s linear infinite;
}
@keyframes move {
  0% {
    opacity: 0.1;
    transform: scaleX(1);
  }

  50% {
    opacity: 0.15;
    transform: scaleX(1.3);
  }

  100% {
    opacity: 0.1;
    transform: scaleX(1);
  }
}
@keyframes move2 {
  0% {
    opacity: 0.9;
    transform: scaleX(1);
  }

  50% {
    opacity: 1;
    transform: scaleX(1.3);
  }

  100% {
    opacity: 0.9;
    transform: scaleX(1);
  }
}
@keyframes up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-600px);
  }
}
@keyframes sway {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    transform: translateX(0px) rotate(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px) rotate(30deg);
  }
}
</style>