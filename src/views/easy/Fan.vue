<template>
  <div class="main">
    <div class="fan">
      <div class="fan-body">
        <div class="fan-logo">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="fan-logo">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
        <span class="fan-circle"></span>
      </div>
      <div class="fan-bottom">
        <div class="fan-part"></div>
        <div class="fan-part"></div>
        <div class="fan-part"></div>
        <div class="fan-part"></div>
        <div class="fan-part"></div>
      </div>
      <div class="fan-wood"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  --bg-color: rgb(245, 231, 171);
  --skin-color: rgb(219, 65, 67);
  --wood-color: rgb(62, 61, 59);
  --border-color: rgb(218, 197, 132);
  --circle-color: white;

  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.fan {
  position: relative;
  transform: translateY(-25%);
}
.fan-body {
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--skin-color);
  position: relative;
  border: 3px solid var(--border-color);
  clip-path: ellipse(250% 100% at 50% -20%);
  box-sizing: border-box;
}
.fan-circle {
  position: absolute;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--skin-color);
  border: 1px solid var(--circle-color);
}
.fan-circle::before,
.fan-circle::after {
  content: "";
  width: 80%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid var(--circle-color);
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.fan-circle::after {
  width: 60%;
  height: 60%;
}
.fan-bottom {
  border: 10px solid var(--wood-color);
  width: 356px;
  height: 356px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(-1);
  clip-path: ellipse(100% 100% at 50% -70%);
  background-color: var(--bg-color);
}
.fan-circle:nth-of-type(1) {
  left: -15px;
  bottom: 15px;
  z-index: 1;
}
.fan-circle:nth-of-type(2) {
  left: -45px;
  bottom: 45px;
}
.fan-circle:nth-of-type(3) {
  left: 20px;
  bottom: 35px;
}
.fan-circle:nth-of-type(4) {
  left: 90px;
  bottom: 35px;
}
.fan-circle:nth-of-type(5) {
  left: 90px;
  bottom: 35px;
}
.fan-circle:nth-of-type(6) {
  left: 160px;
  bottom: 40px;
}
.fan-circle:nth-of-type(7) {
  left: 220px;
  bottom: 30px;
}
.fan-circle:nth-of-type(8) {
  left: 310px;
  bottom: 50px;
}
.fan-circle:nth-of-type(9) {
  left: 275px;
  bottom: 20px;
}
.fan-circle:nth-of-type(10) {
  left: 120px;
  bottom: 15px;
}
.fan-wood {
  width: 50px;
  height: 200px;
  background-color: var(--wood-color);
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: -150px;
  border-radius: 0 0 60px 60px;
}
.fan-part {
  width: 15px;
  height: 360px;
  background-color: var(--wood-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.fan-part:nth-of-type(2) {
  margin-left: 70px;
  width: 15px;
  margin-top: -10px;
  transform: translate(-50%, -50%) rotate(-25deg);
}
.fan-part:nth-of-type(3) {
  margin-left: -70px;
  width: 15px;
  margin-top: -10px;
  transform: translate(-50%, -50%) rotate(25deg);
}
.fan-part:nth-of-type(4) {
  margin-left: 150px;
  width: 15px;
  margin-top: -30px;
  transform: translate(-50%, -50%) rotate(-50deg);
}
.fan-part:nth-of-type(5) {
  margin-left: -150px;
  width: 15px;
  margin-top: -30px;
  transform: translate(-50%, -50%) rotate(50deg);
}

.fan-body::after {
  content: "祭";
  width: 100%;
  height: 180px;
  top: 50%;
  transform: translateY(-80%);
  font-weight: bolder;
  font-size: 180px;
  color: var(--wood-color);
  position: absolute;
  font-family: cursive;
  z-index: 99;
  text-shadow: var(--circle-color) 1px 0 0, var(--circle-color) 0 1px 0,
    var(--circle-color) -1px 0 0, var(--circle-color) 0 -1px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fan-logo {
  width: 136px;
  height: 136px;
  border-radius: 50%;
  border: 2px solid var(--circle-color);
  position: absolute;
  top: 60px;
  opacity: 0.9;
}
.fan-logo:nth-of-type(1) {
  left: 30px;
}
.fan-logo:nth-of-type(2) {
  right: 30px;
}
.fan-logo > span {
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--circle-color);
  left: 50%;
  top: 50%;
}
.fan-logo > span::before {
  content: "";
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: absolute;
  border-top: 13px solid var(--circle-color);
  border-right: 10px solid transparent;
  transform: rotate(-120deg);
  top: -12px;
  right: -25px;
}
.fan-logo > span:nth-of-type(1) {
  margin-top: -52px;
  margin-left: -16px;
  transform: scale(1.2) rotate(90deg);
}
.fan-logo > span:nth-of-type(2) {
  margin-top: 8px;
  margin-left: -40px;
  transform: scale(1.2) rotate(-30deg);
}
.fan-logo > span:nth-of-type(3) {
  margin-top: -2px;
  margin-left: 20px;
  transform: scale(1.2) rotate(-150deg);
}
</style>