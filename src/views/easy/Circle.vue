<template>
  <div class="main">
    <div class="circle-main-box" :style="[{ 'width': size+'px','height': size+'px'}]">
      <svg :width="size" :height="size" class="circle">
        <circle
          :r="radius"
          :cx="cx"
          :cy="cy"
          fill="transparent"
          stroke="rgba(153,202,251,.2)"
          :stroke-width="strokeWidth"
        />
        <circle
          :r="radius"
          :cx="cx"
          :cy="cy"
          fill="transparent"
          stroke="rgba(153,202,251,1)"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
        />
      </svg>
      <span class="count-num">{{countDown}}</span>
    </div>
    <a-button @click="run" class="btn" :disabled="disabled">Run</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5,
      strokeWidth: 10,
      size: 120,
      percentage: 100,
      disabled: false
    };
  },
  computed: {
    cx() {
      return this.size / 2;
    },
    cy() {
      return this.size / 2;
    },
    radius() {
      return (this.size - this.strokeWidth) / 2;
    },
    countDown() {
      return Math.ceil((this.num * this.percentage) / 100);
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    progress() {
      return (1 - this.percentage / 100) * this.circumference;
    }
  },
  methods: {
    run() {
      this.disabled = true;
      this.timer = setInterval(() => {
        this.percentage -= 1 / 10;
        if (this.percentage <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.disabled = false;
          this.percentage = 100;
        }
      }, (this.num * 1000) / 100 / 10);
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 120px 0;
  text-align: center;
  background-image: radial-gradient(
    circle 1224px at 10.6% 8.8%,
    rgba(255, 255, 255, 1) 0%,
    rgba(153, 202, 251, 1) 100.2%
  );
}
.circle-main-box {
  width: 120px;
  height: 120px;
  position: relative;
  display: block;
  margin: 0 auto;
}
.circle {
  transform: rotate(-90deg);
}
.count-num {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: fantasy;
  font-size: 80px;
  color: rgba(153, 202, 251, 1);
  user-select: none;
}
.btn {
  margin-top: 30px;
}
</style>
