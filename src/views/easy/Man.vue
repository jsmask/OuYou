<template>
  <div class="main">
    <div class="box-canvas">
      <div class="body"></div>
      <div class="tshirt">
          <div class="content"></div>
      </div>
      <div class="neck"></div>
      <div class="ear"></div>
      <div class="hair"></div>
      <div class="head">
        <div class="brow left"></div>
        <div class="brow right"></div>
        <div class="eye"></div>
        <div class="nose"></div>
        <div class="rouge"></div>
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background: rgba(164,231,192,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-canvas {
  --border-color: rgb(108, 166, 236);
  --hair-color: rgb(37, 35, 35);
  --eye-color: rgb(37, 35, 35);
  --ear-color: rgb(236, 196, 176);
  --skin-color: rgb(252, 215, 196);
  --nose-color: rgb(236, 201, 183);
  --rouge-color: rgb(245, 166, 156);
  --mouth-color: rgb(61, 55, 55);
}
.box-canvas {
  width: 240px;
  height: 240px;
  position: relative;
}
.box-canvas::after {
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  border: 10px solid var(--border-color);
}
.hair {
  width: 122px;
  height: 100px;
  background-color: var(--hair-color);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 50% 25% 25%;
  top: -24px;
  z-index: 3;
}
.head::before {
  content: "";
  display: block;
  width: 56px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--hair-color);
  position: absolute;
  left: 50%;
  top: -12px;
  transform: translateX(-50%);
  z-index: 3;
}
.head {
  width: 118px;
  height: 110px;
  position: absolute;
  background-color: var(--skin-color);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 42% 42% 48% 48%;
  z-index: 6;
}
.eye {
  background-color: var(--eye-color);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 30px;
  box-shadow: 50px 0 0 var(--eye-color);
}
.ear {
  position: absolute;
  width: 150px;
  height: 50px;
  left: 50%;
  top: 36px;
  transform: translateX(-50%);
}
.ear::before {
  content: "";
  width: 24px;
  height: 32px;
  position: absolute;
  background-color: var(--ear-color);
  border-radius: 50%;
  left: 0; 
}
.ear::after {
  content: "";
  width: 24px;
  height: 32px;
  position: absolute;
  background-color: var(--ear-color);
  border-radius: 50%;
  right: 0;
}
.brow.left {
  position: absolute;
  z-index: 2;
  width: 25px;
  height: 10px;
  top: 33px;
  border-radius: 50%;
  left: 20px;
  transform: rotate(180deg);
  box-shadow: 0 3px 0 var(--hair-color);
}
.brow.right {
  position: absolute;
  z-index: 2;
  width: 25px;
  height: 10px;
  top: 33px;
  border-radius: 50%;
  right: 20px;
  transform: rotate(180deg);
  box-shadow: 0 3px 0 var(--hair-color);
}
.nose {
  width: 16px;
  height: 10px;
  background-color: var(--nose-color);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 56%;
  border-radius: 50%;
}
.rouge {
  width: 18px;
  height: 16px;
  position: absolute;
  top: 63px;
  left: 12px;
  background-color: var(--rouge-color);
  border-radius: 50%;
  box-shadow: 75px 0 0 var(--rouge-color);
}
.mouth {
  width: 36px;
  height: 15px;
  border-radius: 20% 20% 50% 50%;
  position: absolute;
  background: var(--mouth-color);
  top: 80px;
  left: 50%;
  margin-left: -18px;
  transform: scale(1) scaleY(1);
  overflow: hidden;
  transition: .2s all;
}
.mouth::before {
  content: "";
  display: block;
  width: 32px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: -2px;
  height: 5px;
  background-color: white;
  border-radius: 20% 20% 50% 50%;
}
.mouth::after {
  content: "";
  display: block;
  background-color: rgb(233, 86, 86);
  border-radius: 45%;
  width: 28px;
  height: 20px;
  left: 50%;
  margin-left: -14px;
  bottom: -16px;
  position: absolute;
}
.body {
  position: absolute;
  background-color: var(--skin-color);
  top: 110px;
  width: 130px;
  height: 110px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 50% 10% 10%;
}
.neck {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background: var(--skin-color);
  top: 100px;
  width: 50px;
  height: 20px;
  border-radius: 0 0 50% 50%;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  z-index: 1;
}
.tshirt {
    position: absolute;
    z-index: 1;
    top: 110px;
    width: 140px;
    height: 30px;
    left: 50%;
    transform: translateX(-50%);
}
.tshirt::after{
  content: "";
  position: absolute;
  width: 76px;
  transform:skew(-10deg, -20deg);
  height: 75px;
  background: white;
  border-radius: 30% 10px 10px 10px;
  left: 0px;
  top:0px;
}
.tshirt::before {
  content: "";
  position: absolute;
  width: 76px;
  transform: skew(10deg, 20deg);
  height: 75px;
  background: white;
  border-radius: 10px 30% 10px 10px;
  right: 0px;
  top: 0px;
}
.tshirt .content{
    background-color: white;
    width: 90px;
    height: 120px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    border-radius: 50% 50% 10% 10%;
}
.content::after{
    content: 'Mask';
    font-family:fantasy,sans-serif;
    font-size: 16px;
    color: rgb(37, 35, 35);
    -webkit-text-stroke: 1px rgb(241, 78, 78);
    letter-spacing: 2px;
    position: relative;
    top:40px
}
.box-canvas:hover .mouth{
    transform: scaleX(1.1) scaleY(1.5); 
}

</style>