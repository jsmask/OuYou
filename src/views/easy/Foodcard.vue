<template>
  <div class="main" @click="activeIndex=-1">
    <div
      class="food-card"
      :class="{'active':activeIndex === index}"
      @click.stop="activeIndex= ((activeIndex===index)?-1:index)"
      v-for="(item,index) in cardList"
      :key="index"
    >
      <div class="card-pic">
        <img :src="item.pic" alt />
      </div>
      <div class="card-info">
        <h5>
          <span class="food-name">{{item.name}}</span>
          <span class="food-price" v-html="showPrice(item.price)"></span>
        </h5>
        <p>
          <span class="food-desc">{{item.desc}}</span>
          <span class="food-stars">
            <a-icon
              type="star"
              class="food-star"
              theme="filled"
              v-for="(s,i) in item.star"
              :key="i"
            />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1,
      cardList: [
        {
          name: "抹茶慕斯",
          desc: "Matcha Mousse",
          star: 5,
          price: "120",
          pic: require("../../assets/images/food/food_0_0.jpg")
        },
        {
          name: "寿司",
          desc: "Sushi",
          star: 4,
          price: "56",
          pic: require("../../assets/images/food/food_0_1.jpg")
        },
        {
          name: "麻辣小龙虾",
          desc: "Spicy crayfish",
          star: 5,
          price: "88",
          pic: require("../../assets/images/food/food_0_2.jpg")
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showPrice(price) {
      let _price = (price + "").split(".");
      if (_price.length == 1) _price[1] = "00";
      return `￥${_price[0]}<em style="font-size:14px;">.${_price[1]}</em>`;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 80px 0 80px;
  text-align: center;
  background-image: radial-gradient(
    circle 943px at 3.2% 53%,
    rgba(237, 150, 78, 0.75) 0%,
    rgba(238, 93, 123, 0.75) 90%
  );
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1600px;
}
.food-card {
  width: 300px;
  height: 240px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  box-shadow: -30px 70px 150px -20px rgba(51, 51, 51, 0.25);
  transform-style: preserve-3d;
  transition: 0.35s all;
  left: 50%;
  margin-left: -150px;
  user-select: none;
  cursor: pointer;
}
.card-pic {
  width: 300px;
  height: 170px;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}
.card-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* transform: rotate(8deg) scale(1.2) translate(-10px, -36px); 
  border-radius: 0 0 10px 0;*/
  background-color: #f2f2f2;
}

.food-card:nth-of-type(1) {
  top: 34%;
  --z: 0px;
  --rx: 60deg;
  --ry: 2deg;
  --r: -45deg;
  --x: -100px;
  --y: -20px;
  transform: rotateX(var(--rx)) rotate(var(--r)) rotateY(var(--ry))
    translateX(var(--x)) translateY(var(--y)) translateZ(var(--z));
  z-index: 1;
}

.food-card:nth-of-type(2) {
  top: 34%;
  --z: 1px;
  --rx: 60deg;
  --ry: 0deg;
  --r: -15deg;
  --x: -15px;
  --y: -30px;
  transform: rotateX(var(--rx)) rotate(var(--r)) rotateY(var(--ry))
    translateX(var(--x)) translateY(var(--y)) translateZ(var(--z));
  z-index: 2;
}

.food-card:nth-of-type(3) {
  top: 34%;
  --z: 2px;
  --rx: 60deg;
  --ry: 6deg;
  --r: 15deg;
  --x: 50px;
  --y: -10px;
  transform: rotateX(var(--rx)) rotate(var(--r)) rotateY(var(--ry))
    translateX(var(--x)) translateY(var(--y)) translateZ(var(--z));
  z-index: 3;
}

.food-card.active {
  z-index: 99;
  --rx: 0;
  --r: 0;
  --z: 150px;
  --x: calc(50%-150px);
  top: 20%;
  --y: 0;
}

.card-info {
  padding: 5px 15px;
}
.card-info > h5,
.card-info > p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  line-height: 24px;
}
.food-name {
  font-size: 18px;
  font-weight: bold;
  color: #11313c;
}
.food-price {
  font-size: 18px;
  font-weight: bold;
  color: #f16f6f;
  text-align: right;
}
.food-desc {
  font-size: 14px;
  font-weight: 500;
  color: #949a98;
  font-family: -webkit-pictograph;
}
.food-stars {
  display: block;
  text-align: right;
}
.food-star {
  color: #e5c522;
  font-size: 12px;
  margin: 0 2px;
}
</style>