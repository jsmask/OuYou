<template>
    <div class="main">
        <div class="egg-container">
            <div class="dragon">
                <div class="dragon-eye left"></div>
                <div class="dragon-eye right"></div>
                <div class="dragon-nose"></div>
                <div class="dragon-mouse">
                    <div class="dragon-tooth left"></div>
                    <div class="dragon-tooth right"></div>
                </div>
            </div>
            <div class="egg-wrapper"></div>
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
  background-image: radial-gradient(circle at center center, transparent 0%,rgb(0,0,0) 85%),linear-gradient(78deg, rgba(192, 192, 192,0.05) 0%, rgba(192, 192, 192,0.05) 50%,rgba(60, 60, 60,0.05) 50%, rgba(60, 60, 60,0.05) 100%),linear-gradient(227deg, rgba(97, 97, 97,0.05) 0%, rgba(97, 97, 97,0.05) 50%,rgba(52, 52, 52,0.05) 50%, rgba(52, 52, 52,0.05) 100%),linear-gradient(240deg, rgba(98, 98, 98,0.05) 0%, rgba(98, 98, 98,0.05) 50%,rgba(249, 249, 249,0.05) 50%, rgba(249, 249, 249,0.05) 100%),linear-gradient(187deg, rgba(1, 1, 1,0.05) 0%, rgba(1, 1, 1,0.05) 50%,rgba(202, 202, 202,0.05) 50%, rgba(202, 202, 202,0.05) 100%),linear-gradient(101deg, rgba(61, 61, 61,0.05) 0%, rgba(61, 61, 61,0.05) 50%,rgba(254, 254, 254,0.05) 50%, rgba(254, 254, 254,0.05) 100%),linear-gradient(176deg, rgba(237, 237, 237,0.05) 0%, rgba(237, 237, 237,0.05) 50%,rgba(147, 147, 147,0.05) 50%, rgba(147, 147, 147,0.05) 100%),linear-gradient(304deg, rgba(183, 183, 183,0.05) 0%, rgba(183, 183, 183,0.05) 50%,rgba(57, 57, 57,0.05) 50%, rgba(57, 57, 57,0.05) 100%),radial-gradient(circle at center center, rgb(222,199,242),rgb(222,199,242));
  display: flex;
  justify-content: center;
  align-items: center;
}
.egg-container{
    position: relative;
    width: 320px;
    height:320px;
    margin-top: 80px;
}
.egg-wrapper{
    position: absolute;
    width: 320px;
    height: 320px;
    transform: rotate(-45deg);
    top: 0;
    cursor: pointer;
    z-index: 9;
}
.egg-wrapper::before,
.egg-wrapper::after{
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    position: absolute;
    border:1px solid #000;
    border-radius: 80% 20% 55% 50%/55% 20% 80% 50%;
    background-image: radial-gradient(circle at center center, rgba(231,179,248, 0.1) 0%, rgba(231,179,248, 0.1) 48%,transparent 48%, transparent 56%,rgba(242,189,255, 0.89) 56%, rgba(242,189,255, 0.89) 100%),linear-gradient(90deg, rgb(255,207,255),rgb(255,207,255));
    background-size: 128px 128px;
    box-shadow: inset 1em 1em 2em #ffd6ff;
    overflow: hidden;
}
.egg-wrapper::before{
    clip-path: polygon(27.84% -22.62%,123.57% -5.52%,108.11% 49.6%,76.11% 57.69%,71.33% 37.01%,44.85% 22.33%,32.41% -13.39%);
    transition: .3s all cubic-bezier(.5,-.15,.2,1.8);
}
.egg-wrapper::after{
    clip-path: polygon(-35.87% 83.08%,244% 155.05%,108.11% 49.6%,76.11% 57.69%,71.33% 37.01%,44.85% 22.33%,32.41% -13.39%);  
}

.egg-container:hover .egg-wrapper::before{
    transform: translateX(80px) translateY(-80px);
}
.egg-container:hover .dragon{
    transform: translateY(-80px);
}
.dragon{
    position: relative;
    height: 180px;
    width: 230px;
    background: rgb(247,120,52);
    margin: 40px auto 0;
    border: 3px solid #333;
    border-radius: 50% 50% 40% 40%;
    box-shadow: inset 0em 1em .65em rgb(255,173,65),
    inset 0em -2em 1em rgb(248, 117, 30);
    transition: .3s all cubic-bezier(.5,-.15,.2,1.2);
}
.dragon-eye{
    position: absolute;
    border: 3px solid #333;
    height: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #444;
    overflow: hidden;
    animation: 4.2s blinking infinite backwards ease-out;
}
.dragon-eye::before{
    content: '';
    display: block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 5px;
    background: #fff;
    z-index: 1;
}
.dragon-eye::after{
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: #fff;
    background: rgb(17,93,169);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    clip-path: ellipse(200% 15px at 10% 110%);
}
.dragon-eye.left{
    top:40px;
    left: 35px;
}
.dragon-eye.right{
    top:40px;
    right: 35px;
}
.dragon-eye.right::before{
    left: inherit;
    right: 5px;
}
.dragon-nose{
    position: absolute;
    width: 30px;
    height: 10px;
    background: rgba(255,173,65,.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-70%);
    border-radius:50% 50% 50% 50% / 20% 20% 50% 50%;
}
.dragon-nose::before{
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: #333;
    width: 5px;
    height: 12px;
    border-radius: 35%;
    transform: rotate(-25deg);
    top: 15px;
    left: 5px;
}
.dragon-nose::after{
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: #333;
    width: 5px;
    height: 12px;
    border-radius: 45%;
    transform: rotate(25deg);
    top: 15px;
    right: 5px;
}
.dragon-mouse{
    width: 100px;
    height: 90px;
    border-radius: 45% 45%;
    border: 4px solid #333;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-64%);
    clip-path: ellipse(200% 28px at 50% 100%);
}
.dragon-tooth{
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-width: 5px 3px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
    z-index: 9;
}
.dragon-tooth.left{
    top: 73px;
    left: 3px;
    transform: rotate(36deg);
}
.dragon-tooth.right{
    top: 73px;
    right: 3px;
    transform: rotate(-36deg);
}

.dragon-mouse::before,
.dragon-mouse::after{
    content: '';
    display: block;
    box-sizing: border-box;
    width: 0;
    height: 0;
    border-width: 8px 6px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
    position: absolute;
    z-index: 1;
}
.dragon-mouse::before{
    top: 72px;
    left: -1px;
    transform: rotate(36deg);
}
.dragon-mouse::after{
    top: 72px;
    right: -1px;
    transform: rotate(-36deg);
}

@keyframes blinking {
  0%,
  30%,
  80% {
    clip-path: ellipse(100% 100% at 50% 48%);
  }
  60%,
  100% {
    clip-path: ellipse(100% 2% at 50% 48%);
  }
}
</style>