<template>
  <div class="main">
    <span class="spot-word" :data-txt="txt">{{txt}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "SpotLight"
    };
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
  background-color: #333;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-attachment: fixed;
}
.spot-word {
  font-size: 80px;
  color: #444444;
  font-family: fantasy;
  position: relative;
  line-height: 120px;
  letter-spacing: 6px;
  height: 120px;
  display: inline-block;
  font-weight: bolder;
}
.spot-word::after {
  content: attr(data-txt);
  position: absolute;
  color: transparent;
  font-size: 80px;
  height: 120px;
  line-height: 120px;
  left: 0;
  top: 0;
  letter-spacing: 6px;
  clip-path: ellipse(50px 50px at 0% 50%);
  animation: spotlight 5s infinite ease-in-out;
  background-image: radial-gradient(
    circle 1173px at -3.5% -4.8%,
    rgba(255, 140, 16, 1) 8.4%,
    rgba(255, 26, 26, 1) 20.6%,
    rgba(0, 64, 249, 1) 46.7%,
    rgba(131, 201, 8, 1) 69.6%,
    rgba(255, 230, 28, 1) 84.7%
  );
  background-size: 150%;
  background-position: center center;
  background-clip: text;
  font-weight: bolder;
}

@keyframes spotlight {
  0% {
    clip-path: ellipse(50px 50px at 0% 50%);
  }

  50% {
    clip-path: ellipse(50px 50px at 100% 50%);
  }

  100% {
    clip-path: ellipse(50px 50px at 0% 50%);
  }
}
</style>
