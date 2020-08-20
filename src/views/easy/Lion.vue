<template>
  <div class="main">
    <div class="lion">
      <div class="head">
        <div class="hair"></div>
        <div class="face">
          <div class="hair"></div>
          <div class="ear left"></div>
          <div class="ear right"></div>
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="nose"></div>
          <div class="mouth">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="tail"></div>
      <div class="body">
        <div class="hand"></div>
        <div class="hand"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgb(182, 248, 228) 0%,
    rgba(219, 249, 203, 1) 72.9%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.lion {
  --hair-color: rgb(109, 81, 80);
  --skin-color: rgb(247, 190, 123);
  --tail-color: rgb(248, 210, 163);
  --body-color: rgb(189, 146, 93);
  --foot-color: rgb(228, 174, 112);
  --eye-color: rgb(89, 60, 62);
  --other-color: rgb(219, 169, 108);

  position: relative;
  top: -80px;
}

.head {
  width: 375px;
  height: 375px;
  position: relative;
  z-index: 99;
}

.hair {
  width: 360px;
  height: 360px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--hair-color);
  border-radius: 50%;
}
.face {
  background-color: var(--skin-color);
  width: 160px;
  height: 220px;
  border-radius: 65px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.eye {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 35%;
  animation: 4s blinking infinite forwards;
  overflow: hidden;
}
.eye::before {
  content: "";
  width: 20px;
  height: 20px;
  background-color: var(--eye-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.eye.left {
  left: 15px;
}
.eye.right {
  right: 15px;
}
.face .hair {
  width: 120px;
  height: 100px;
  border-radius: 40px;
  margin-top: -100px;
  margin-left: -60px;
  box-shadow: 120px 0 0 var(--hair-color);
}
.nose {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  border-width: 20px 30px;
  border-style: solid;
  border-color: var(--eye-color) transparent transparent transparent;
  margin-top: 40px;
  z-index: 3;
}
.mouth {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 65px;
  width: 50px;
  height: 50px;
}
.mouth::before {
  content: "";
  width: 46px;
  height: 50px;
  border-radius: 50%;
  left: -21px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent var(--eye-color) var(--eye-color) transparent;
  position: absolute;
  top: -26px;
}
.mouth::after {
  content: "";
  width: 46px;
  height: 50px;
  border-radius: 50%;
  right: -21px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent transparent var(--eye-color) var(--eye-color);
  position: absolute;
  top: -26px;
}
.mouth > span {
  width: 36px;
  height: 3px;
  background-color: var(--eye-color);
  position: absolute;
}
.mouth > span:nth-of-type(1) {
  left: -40px;
  top: -8px;
  transform: rotate(8deg);
}
.mouth > span:nth-of-type(2) {
  right: -40px;
  top: -8px;
  transform: rotate(-8deg);
}
.mouth > span:nth-of-type(3) {
  left: -42px;
  top: 5px;
  transform: rotate(-2deg);
  width: 40px;
}
.mouth > span:nth-of-type(4) {
  right: -42px;
  top: 5px;
  transform: rotate(2deg);
  width: 40px;
}
.ear {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 10px;
  background-color: var(--skin-color);
  z-index: 9;
  border-radius: 40px;
  clip-path: ellipse(100% 100% at -20% -10%);
}
.ear.left {
  left: -52px;
}
.ear.right {
  right: -52px;
  transform: rotate(90deg);
}
.body {
  width: 340px;
  height: 280px;
  position: absolute;
  border-radius: 150px;
  background-color: var(--body-color);
  left: 50%;
  transform: translateX(-50%);
  top: 340px;
  clip-path: ellipse(200% 60% at 50% 0%);
}
.body::before {
  content: "";
  position: absolute;
  background-color: var(--other-color);
  width: 90px;
  height: 200px;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}
.hand {
  position: absolute;
  height: 280px;
  width: 55px;
  background-color: var(--tail-color);
}
.hand::before {
  content: "";
  width: 90px;
  height: 90px;
  background-color: var(--skin-color);
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.hand::after {
  content: "";
  width: 90px;
  height: 90px;
  background-color: var(--foot-color);
  border-radius: 50%;
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
}
.hand:nth-of-type(1) {
  left: 75px;
  top: -50px;
}
.hand:nth-of-type(1)::after {
  margin-left: -95px;
}
.hand:nth-of-type(2) {
  right: 75px;
  top: -50px;
}
.hand:nth-of-type(2)::after {
  margin-left: 95px;
}
.tail {
  width: 320px;
  height: 320px;
  position: absolute;
  top: -137px;
  border-style: solid;
  border-width: 30px;
  border-radius: 40% 50%;
  border-color: transparent var(--tail-color) transparent transparent;
  -webkit-transform: rotate(125deg);
  transform: rotate(125deg);
  left: -180px;
  animation: 1s wagging ease-in-out infinite alternate forwards;
  transform-origin: 50% 100%;
}
.tail::before {
  content: "";
  width: 45px;
  height: 49px;
  background-color: var(--hair-color);
  border-radius: 50%;
  position: absolute;
  top: 204px;
  left: 231px;
}
.tail::after {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 28px 34px;
  border-color: transparent var(--hair-color) transparent transparent;
  border-radius: 50%;
  position: absolute;
  top: 230px;
  left: 205px;
  transform: rotate(-62deg);
}
@keyframes blinking {
  0%,
  40%,
  80% {
    clip-path: ellipse(100% 100% at 50% 48%);
  }
  60%,
  100% {
    clip-path: ellipse(100% 2% at 50% 48%);
  }
}
@keyframes wagging {
  0% {
    transform: rotate(125deg) translateX(0) translateY(0px);
  }
  100% {
    transform: rotate(130deg) translateX(15px) translateY(-15px);
  }
}
</style>