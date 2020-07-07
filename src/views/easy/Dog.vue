<template>
  <div class="main">
    <div id="my-dog">
      <div class="ears"></div>
      <div class="face"></div>
      <div class="brows"></div>
      <div class="eye left"></div>
      <div class="eye right"></div>
      <div class="mouth">
        <span class="left"></span>
        <span class="right"></span>
        <p class="tongue"></p>
      </div>
      <div class="nose"></div>
      <div class="blush"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0;
  text-align: center;
  overflow: hidden;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(186, 190, 245, 1) 0%,
    rgba(192, 192, 245, 1) 33.1%,
    rgba(218, 203, 246, 1) 90%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
}

.title {
  text-align: center;
  display: block;
  width: 100%;
}

#my-dog {
  width: 280px;
  height: 230px;
  margin: 0 auto;
  position: relative;

  --main-color: #f0cf65;
  --ears-color: #f3d4d4;
  --brows-color: #ffffff;
  --eye-color: #221b1b;
  --mouth-color: #ffffff;
  --nose-color: #221b1b;
  --eye-while: #ffffff;
  --mouth-red:#e98c8c;
}
.ears,
.brows,
.mouth,
.nose {
  display: block;
  width: 100%;
  position: absolute;
}
.ears::before,
.ears::after {
  content: "";
  display: block;
  top: -5px;
      width: 80px;
    height: 100px;
  border-radius: 20px;
  position: absolute;
  border: 8px solid var(--main-color);
  background-color: var(--ears-color);
}
.ears::before {
  left:10px;
  transform: rotate(10deg);;
}
.ears::after {
  right: 10px;
  transform: rotate(-10deg);
}
.face {
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  position: relative;
  border-radius: 50% 50% 40% 40%;
  z-index: 2;
}
.brows {
  top: 75px;
  z-index: 3;
}
.brows::before,
.brows::after {
  content: "";
  display: block;
  width: 50px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--brows-color);
  position: absolute;
}
.brows::before {
  transform: rotate(-30deg);
  left: 55px;
}
.brows::after {
  transform: rotate(30deg);
  right: 55px;
}
.eye {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--eye-color);
  position: absolute;
  top: 115px;
  z-index: 3;
  animation: 4s blinking infinite;
}
.eye::after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;

  background-color: var(--eye-while);
  position: absolute;
  top: 1px;
}
.eye.left::after {
  left: 0;
}
.eye.right::after {
  right: 0;
}
.eye.left {
  left: 76px;
}
.eye.right {
  right: 76px;
}
.mouth {
  top: 118px;
  z-index: 3;
}
.mouth::before,
.mouth::after {
  content: "";
  background-color: var(--mouth-color);
  position: absolute;
  width: 100px;
  height: 70px;
  left: 50%;
  margin-left: -50px;
  border-radius: 50%;
}
.mouth::after {
  width: 200px;
  height: 80px;
  margin-left: -100px;
  top: 15px;
}
.nose {
  width: 36px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--nose-color);
  left: 50%;
  margin-left: -18px;
  z-index: 4;
  top: 149px;
}
.mouth > span {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--mouth-color);
  box-shadow: 0 3px 0 var(--nose-color);
  position: absolute;
  display: block;
  z-index: 2;
  top: 20px;
}
.mouth > span.left {
  left: 100px;
}
.mouth > span.right {
  right: 100px;
}

.mouth > span::after {
  content: "";
  width: 2px;
  height: 2px;
  border-radius: 2px;
  background-color: #000000;
  position: absolute;
  bottom: 10px;
  box-shadow: -4px 4px #000000, 4px 4px #000000, 8px -2px #000000,
    -8px -2px #000000;
}

.tongue {
  width: 30px;
  background-color: var(--mouth-red);
  height: 36px;
  border-radius: 50% 50% 36% 36%;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 50px;
  z-index: 1;
}

.tongue::before {
  content: "";
  display: block;
  position: absolute;
  top: 12px;
  width: 2px;
  height: 15px;
  margin-left: -1px;
  background: rgba(255, 255, 255, 0.1);
  left: 50%;
}

.blush{
  width: 28px;
  height: 16px;
  background-color: var(--mouth-red);
  border-radius: 50%;
  position: absolute;
  opacity: .8;
  top:140px;
  z-index: 5;
  left: 36px;
  box-shadow: 180px 0 var(--mouth-red);
}

@keyframes blinking {
  0%,
  50%,
  80% {
    background: linear-gradient(var(--eye-color) 100%, transparent 100%);
    --eye-while: #ffffff;
  }
  60%,
  100% {
    background: linear-gradient(
      transparent 18%,
      var(--eye-color) 25%,
      transparent 30%
    );
    --eye-while: transparent;
  }
}
</style>