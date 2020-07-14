<template>
  <div class="main">
    <canvas id="canvas" ref="canvas"></canvas>
    <loading v-if="!isLoaded" />
  </div>
</template>

<script>
import loading from "../../components/Loading";
export default {
  name: "researcher",
  data() {
    return {
      images: [],
      pos: 0,
      scale: 0.8,
      isLoaded: false
    };
  },
  components:{
    [loading.name]:loading
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      for (let i = 0; i < 36; i++) {
        this.loadImg(
          require(`../../assets/images/role/researcher/${i + 1}.webp`),
          i
        );
      }
    },
    loadImg(src, index) {
      let img = new Image();
      img.onload = () => {
        this.images[index] = img;
        if (Object.keys(this.images).length >= 36) {
          this.render();
        }
      };
      img.src = src;
    },
    render() {
      this.w = this.canvas.width = this.images[this.pos].width * this.scale;
      this.h = this.canvas.height = this.images[this.pos].height * this.scale;
      this.is_active = false;
      this.isLoaded = true;
      if (this.ismobile()) {
        this.canvas.addEventListener("touchstart", this.touchStart);
      } else {
        this.canvas.addEventListener("mousedown", this.touchStart);
      }
      this.draw();
    },
    draw() {
      const { ctx, w, h, images, pos, render } = this;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(images[pos], 0, 0, w, h);
      window.requestAnimationFrame(render);
    },
    touchStart(e) {
      if (!this.is_active) {
        if (e.changedTouches) e = e.changedTouches[0];
        this.startX = e.clientX;
        this.is_active = true;
        if (this.ismobile()) {
          this.canvas.addEventListener("touchmove", this.touchMove, false);
          this.canvas.addEventListener("touchend", this.touchEnd, false);
        } else {
          this.canvas.addEventListener("mousemove", this.touchMove, false);
          this.canvas.addEventListener("mouseup", this.touchEnd, false);
          this.canvas.addEventListener("mouseover", this.touchEnd, false);
        }
      }
    },
    touchMove(e) {
      if (e.changedTouches) e = e.changedTouches[0];

      if (this.startX > e.clientX) {
        this.pos--;
      }
      if (this.startX < e.clientX) {
        this.pos++;
      }
      if (this.pos < 0) this.pos += 36;
      this.pos %= 36;
      this.startX = e.clientX;
    },
    touchEnd(e) {
      this.canvas.removeEventListener("mousemove", this.touchMove, false);
      this.canvas.removeEventListener("mouseup", this.touchEnd, false);
      this.canvas.removeEventListener("touchmove", this.touchMove, false);
      this.canvas.removeEventListener("touchend", this.touchEnd, false);
      this.is_active = false;
    },
    ismobile() {
      let mobileArry = [
        "iPhone",
        "iPad",
        "Android",
        "Windows Phone",
        "BB10; Touch",
        "BB10; Touch",
        "PlayBook",
        "Nokia"
      ];
      let ua = navigator.userAgent;
      let res = mobileArry.filter(arr => {
        return ua.indexOf(arr) > 0;
      });
      return res.length > 0;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  background: #ffffff;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  background: transparent;
  cursor: grab;
}

</style>