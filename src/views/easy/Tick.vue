<template>
  <div class="main">
    <!-- <a-button @click="onStart" class="btn">Start</a-button> -->
    <svg :width="size" :height="size" class="box" :style="'transform:scale('+scale+')'">
      <circle 
        class="circle"
        fill="transparent"
        :r="radius"
        :cx="size/2"
        :cy="size/2"
        stroke="#8c2"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
      />
      <polyline 
         fill="none"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke="#8c2"
         stroke-width="12"
         points="44,107 87,142 152,69"
         class="tick"
      />
    </svg>
    <h5 class="msg">Payment Success</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale:0.8,
      size: 200,
      strokeWidth: 10,
      progress:0
    };
  },
  computed: {
    radius() {
      return (this.size - this.strokeWidth) / 2;
    },
    dasharray() {
      console.log(2 * Math.PI * this.radius)
      return 2 * Math.PI * this.radius;
    },
    dashoffset(){
      return this.dasharray * (this.progress/100-1)
    }
  },
  mounted() {
    this.onStart()
  },
  methods: {
    onStart(){
      this.run();
    },
    run() {
      if(this.progress>=100) {
        return;
      }
      this.progress+=1;
      window.requestAnimationFrame(this.run);
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
  background-image: linear-gradient(
    109.6deg,
    rgba(223, 234, 247, 1) 11.2%,
    rgba(244, 248, 252, 1) 91.1%
  );
  overflow: hidden;
}
.box{
  display: block;
  margin: 0 auto;
}
.circle{
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: 597;
  animation: circleAni .5s linear forwards;
}
.btn {
  margin: 30px auto;
  display: block;
}
.msg{
  font-size: 28px;
  font-family: fantasy,Verdana, Geneva, Tahoma, sans-serif;
  margin: 15px auto;
  animation: fadeInDown .5s .6s backwards;
}
.tick{
  stroke-dasharray: 160;
  stroke-dashoffset: 160;
  animation: tickAni .3s .5s ease-out forwards;
}

@keyframes circleAni{
  0%{
    stroke-dashoffset: 597;
  }
  100%{
    stroke-dashoffset: 1194;
  }
}

@keyframes tickAni{
  0%{
    stroke-dashoffset: 160;
  }
  100%{
    stroke-dashoffset: 0;
  }
}

@keyframes fadeInDown{
  0%{
    transform: translateY(30px);
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>