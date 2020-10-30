<template>
    <div class="main">
        <div class="stage">
            <div class="ghost">
                <div class="eye left"></div>
                <div class="eye right"></div>
                <div class="cheek"></div>
                <div class="eat">
                    <div class="sugar"></div>
                    <div class="left hand"></div>
                </div>
                <div class="right hand"></div>
                <div class="mouth"></div>
                <div class="skirt">
                    <div class="pleat down"></div>
                    <div class="pleat up"></div>
                    <div class="pleat down"></div>
                    <div class="pleat up"></div>
                    <div class="pleat down"></div>
                </div>
            </div>
            <div class="ghost-shadow"></div>
            <div class="stars">
                <div class="star"><div class="star-element"></div></div>
                <div class="star"><div class="star-element"></div></div>
                <div class="star"><div class="star-element"></div></div>
                <div class="star"><div class="star-element"></div></div>
                <div class="star circle"><div class="star-element"></div></div>
                <div class="star circle"><div class="star-element"></div></div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
$skin:rgb(240,239,218);
$bg:rgb(130,95,163);
$red:rgb(247,118,116);
$line:rgb(255,178,61);

.main {
  width: 100%;
  min-height: 100%;
  padding: 0;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-color: $bg;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.stage{
    width:20em;
    height: 20em;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;

    .ghost-shadow{
        background-color: $bg;
        position: absolute;
        width: 9em;
        left: 50%;
        margin-left: -4.5em;
        bottom:1.5em;
        background-color: #343534;
        border-radius: 50%;
        height: .5em;
        animation: shadow .8s ease-in-out infinite alternate;
        z-index: 9;
    }
}


.ghost{
    width: 8em;
    height: 10.5em;
    background-color: $skin;
    border-radius: 45% 45% 0% 0%;
    position: relative;
    animation: move .8s ease-in-out infinite alternate;
    z-index: 9;

    .skirt{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        transform: translateY(50%);
        .pleat {
            flex: 1;
            height: .9em;
            border-radius: 100%;
        }
        .pleat.up {
            background-color: $bg;
            position: relative;
            top: 1px;
        }
        .pleat.down {
            background-color: $skin;
        }
    }

    .eye{
        width: .9em;
        height: 1.4em;
        background: black;
        border-radius: 44%;
        position:absolute;
        top: 3em;
        animation: blinking 7.5s linear infinite alternate;  
    }
    .eye.left{
        left: 1.8em;
    }
    .eye.right{
        right: 1.8em;
    }
    .cheek{
        width: 1.2em;
        height: .5em;
        border-radius: 45%;
        background-color: $red;
        position:absolute;
        top: 4.8em;
        left: 1em;
        box-shadow:  4.9em 0 0 $red;
    }
    .eat{
        transform-origin: 50% 50%;
        animation: eat 2s linear infinite alternate;
    }
    .left.hand{
        width: 2.1em;
        height:1.4em;
        position: absolute;
        border-width: 3px;
        border-style: solid;
        top: 6.5em;
        left: 1.3em;
        background-color: $skin;
        border-radius:25% 50% 50% 25%;
        border-color: $bg $bg $bg transparent;
        transform: rotate(30deg);
        
    }
    .right.hand{
        width: 2.1em;
        height:1.4em;
        position: absolute;
        border-width: 3px;
        border-style: solid;
        top: 6.5em;
        right: .3em;
        background-color: $skin;
        border-radius:25% 50% 50% 25%;
        border-color: $bg $bg $bg transparent;
        transform: rotate(70deg); 
    }
    .sugar{
        width: 2px;
        height: 3em;
        background-color: $line;
        position: absolute;
        transform: rotate(32deg);
        top: 5.9em;
        left: 2.7em;
        animation: sugar 2s linear infinite alternate;
    }
    .sugar::before{
        content: '';
        display: block;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        position: absolute;
        top: 0;
        margin-top: -1.6em;
        left:50%;
        margin-left: -.9em;
        background-image: radial-gradient( circle farthest-corner at 50% 50%,  rgb(240,173,45) 0%,rgb(240,173,45) 20%,rgb(40,181,70) 30%,rgb(40,181,70) 50%,rgb(79,65,150) 60%,rgb(79,65,150) 90%);
    }
    .mouth {
        position: absolute;
        top: 4.5em;
        left: 50%;
        margin-left: -1.5em;
        width: 3em;
        height:1.2em;
    }
    .mouth::before{
        left: -.2em;
        border:3px solid;
        border-color: transparent transparent black transparent;
        border-radius: 50%;
        transform: rotate(-15deg);
    }
    .mouth::after{
        right: -.2em;
        border:3px solid;
        border-color: transparent transparent black transparent;
        border-radius: 50%;
        transform: rotate(15deg);
    }
    .mouth::before,
    .mouth::after {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
        background-color: $skin;
        width: 2em;
        height: 1.2em;
    }
}

.stars{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;

    .star.circle{
        position: absolute;
        animation: twinkle 2s infinite linear;
        
        .star-element{
            width: 10px;
            height: 10px;
            border-radius: 50%;

            &::before,&::after {
                content: '';
                display: none;
            }
        }
    }
    .star {
        position: absolute;
        animation: twinkle 2s infinite linear;
        &:nth-of-type(1){
            background: rgb(238, 182, 78);
            animation-delay: -.2s;
            left: 18%;
            top: 51%;
        }
         &:nth-of-type(2){
            background: rgb(243, 201, 124);
            animation-delay: -.8s;
            left: 64%;
            top: 15%;
            .star-element{
                transform: scale(1.4);
            }
        }
         &:nth-of-type(3){
            background:  rgb(252, 147, 133);
            animation-delay: -3.2s;
            left: 39%;
            top: 16%;
            .star-element{
                transform: scale(1.2);
            }
        }
         &:nth-of-type(4){
            background: rgb(255, 118, 100);
            animation-delay: -1.2s;
            left: 77%;
            top: 31%;
            .star-element{
                transform: scale(1.1);
            }
        }
        &:nth-of-type(5){
            left: 18%;
            top: 32%;
            border-radius: 50%;
            background-color: #83d0d0;
            animation-delay: -.8s;
            .star-element{
                transform: scale(1.2);
            }
        }
        &:nth-of-type(6){
            left: 80%;
            top: 48%;
            border-radius: 50%;
            background-color: #83a4d0;
            animation-delay: -1.8s;
        }
        .star-element{
            width: 6px;
            height: 6px;
            background-color:inherit;
            &::before,&::after {
                content: '';
                display: block;
                background-color: inherit;
                position: absolute;
                left: 50%;
                top: 50%;
                border-radius: 6px;
            }
            &::before{
                height: 6px;
                width: 8px;
                transform:translate(-50%,-50%) skewX(60deg);
            }
            &::after{
                height: 6px;
                width: 8px;
                transform:translate(-50%,-50%) skewY(-60deg);
            }
        }
    }
}


@keyframes twinkle {
  0% {
       transform: rotate(0deg) scale(1, 1);
  }
  25% {
      transform: rotate(10deg) scale(0.8, 0.8);
  }
  50% {
        transform: rotate(0deg) scale(0.9, 0.9);
  }
  75% {
        transform: rotate(-20deg) scale(0.6, 0.6);
  }
  100% {
        transform: rotate(0deg) scale(1, 1);
  }
}

@keyframes blinking {
  0%,
  40%,
  50% {
    clip-path: ellipse(100% 100% at 50% 48%);
  }
  60%,
  100% {
    clip-path: ellipse(100% 5% at 50% 48%);
  }
}

@keyframes eat {
  0% {
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(5deg) translateX(8px) translateY(5px);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes move {
  0% {
    top: 0;
  }
  50%{
      top: .5em;
  }
  100% {
    top: 0;
  }
}
@keyframes shadow {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(.93);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>