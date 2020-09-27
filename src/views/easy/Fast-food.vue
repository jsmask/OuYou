<template>
    <div class="main">
        <div class="stage">

            <div class="coke">
                <div class="coke-circle circle"></div>
                <div class="coke-content">
                    <div class="coke-head"></div>
                    <div class="coke-body"></div>
                </div>   
            </div>

            <div class="hamburger">
                <div class="hamburger-circle circle"></div>
                <div class="hamburger-content">
                    <div class="hamburger-head"></div>
                    <div class="hamburger-body">
                        <div class="hamburger-part1"></div>
                        <div class="hamburger-part2"></div>
                        <div class="hamburger-part3"></div>
                        <div class="hamburger-part4"></div>
                        <div class="hamburger-part5"></div>
                        <div class="hamburger-part6"></div>
                    </div>
                    <div class="hamburger-foot"></div>
                </div>   
            </div>

        </div>
    </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  overflow: hidden;
  background: rgb(16, 16, 32);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stage{
    width: 360px;
    height: 360px;
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items: center;
    --coke-color:rgb(65,137,243);
    --hamburger-color:rgb(253,183,82);
    --lettuce-color:rgb(59,193,93);
    --beef-color:rgb(192,74,56);
}
.stage::after{
    content: '';
    display: block;
    width: 280px;
    position: absolute;
    height: 10px;
    border-radius: 5px;
    background:rgb(138,37,247);
    left: 50%;
    margin-left: -140px;
    bottom: 110px;
    animation: up .6s 3s linear;
    animation-fill-mode:backwards;
}
.coke,.hamburger{
    width: 120px;
    height: 120px;
    position: relative;
}
.coke{
    animation: right .6s 3s ease-out;
    animation-fill-mode:forwards;
}
.hamburger{
    animation: left .6s 3s ease-out;
    animation-fill-mode:forwards;
}

.circle{
    width: 60px;
    height: 60px;
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-left: -30px;
    margin-top: -30px;
    opacity: 0;
     z-index: 9;
}

.coke-circle{
    background-color: var(--coke-color);
    animation: hide 1s linear;
    animation-fill-mode:forwards;
}
.hamburger-circle{
    background-color: var(--hamburger-color);
    margin-top: -10px;  
    animation: hide 1s 1.5s linear;
    animation-fill-mode:forwards;
}
.hamburger-content{
   width: 90px;
   height: 90px;
   position: absolute;
   left: 50%;
   margin-left: -45px;
   top: 50%;
   margin-top: -30px;
   animation: show 1s 2s ease-in-out;
   animation-fill-mode:backwards;
}

.hamburger-head{
    height: 50px;
    width: 200px;
    clip-path: circle(30% at 50% 140%);
    position:relative;
    top: -1px;
    left: 50%;
    margin-left: -100px;
    background-color: var(--hamburger-color);
}
.hamburger-head::before{
    content: '';
    display: block;
    width: 2px;
    height: 2px;
    position: absolute;
    background: white;
    border-radius: 50%;
    left: 50%;
    bottom: 10px;
    box-shadow: 10px -6px 0 white
    ,-10px -3px 0 white
    ,-20px -6px 0 white
    ,-27px 6px 0 white
    ,19px 7px 0 white;
}
.hamburger-foot{
    width: 80px;
    height: 12px;
    border-radius: 15% 15% 25% 25%;
    background-color: var(--hamburger-color);
    position: absolute;
    left: 50%;
    margin-left: -40px;
    bottom: 0;
}
.hamburger-part1{
    width: 100%;
    height: 5px;
    background-color: var(--lettuce-color);
    position: absolute;
    bottom: 36px;
    border-radius: 10px;
    z-index: 6;
    left: 50%;
    transform: translateX(-50%);
}

.hamburger-part2{
    width: 100%;
    height: 9px;
    background-color: var(--beef-color);
    position: absolute;
    bottom: 29px;
    border-radius: 4px;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
}
.hamburger-part3{
    width: 92%;
    height: 7px;
    background-color: var(--hamburger-color);
    position: absolute;
    bottom: 22px;
    border-radius: 2px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
}
.hamburger-part4{
    width: 84%;
    height: 6px;
    background-color: rgb(250, 255, 208);
    position: absolute;
    bottom: 16px;
    border-radius: 2px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
}
.hamburger-part5{
    width: 92%;
    height: 6px;
    background-color: var(--beef-color);
    position: absolute;
    bottom: 10px;
    border-radius: 2px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.hamburger-part6{
    width: 95%;
    height: 5px;
    background-color: var(--lettuce-color);
    position: absolute;
    bottom: 5px;
    border-radius: 2px;
    left: 50%;
    transform: translateX(-50%);
    z-index:1;
}
.hamburger-part1::before{
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color:var(--lettuce-color);
    border-radius: 45%;
    position: absolute;
    left: 3px;
    bottom: -3px;
    box-shadow: 9px 0 0 var(--lettuce-color)
    ,18px 0 0 var(--lettuce-color)
    ,27px 0 0 var(--lettuce-color)
    ,36px 0 0 var(--lettuce-color)
    ,45px 0 0 var(--lettuce-color)
    ,54px 0 0 var(--lettuce-color)
    ,63px 0 0 var(--lettuce-color)
    ,73px 0 0 var(--lettuce-color);
}

.coke-content{
   width: 60px;
   height: 120px;
   position: absolute;
   left: 50%;
   top: 50%;
   margin-left: -30px;
   margin-top: -60px;
   animation: show 1s .5s ease-in-out;
   animation-fill-mode:backwards;
}
.coke-head{
    width: 60px;
    height: 8px;
    background-color: white;
    position: relative;
    margin-top: 22px;
}
.coke-head::before{
    content: '';
    display: block;
    width: 21px;
    height: 15px;
    border-radius: 2px;
    background-color: transparent;
    border-style: solid;
    border-color:white;
    border-width: 0 0 3px 3px;
    z-index: 1;
    position: absolute;
    transform: rotate(85deg);
    right: 3px;
    top: -18px;
}
.coke-body{
    position: relative;
    width: 56px;
    height: 90px;
    background-color: var(--coke-color);
    clip-path: polygon(0% 0, 100% 0%, 85% 100%, 15% 100%);
    left: 2px;
}
.coke-body::after{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-70%);
    width: 28px;
    height: 28px;
    border: 3px solid white;
    background-color: rgb(243, 75, 135);
    border-radius: 50%;
}

.stage::before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    background-color: rgb(94,24,209);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    animation: showBg 2.2s 2.9s ease-in-out;
    animation-fill-mode:forwards;
}

@keyframes left{
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-80px);
    }
}


@keyframes right{
     0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(80px);
    }
}

@keyframes up{
     0%{
        transform: translateY(30px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
         opacity: 1;
    }
}


@keyframes show{
    0%{
        transform: scale(0);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes hide{
   0%{
        transform: scale(0);
        opacity: 0;
    }
    30%,60%{
        transform: scale(1);
        opacity: 1;
    }
    100%{
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes showBg{
    0%{
        width: 0;
        height: 0;
    }
    30%,70%{
        width: 120%;
        height: 120%;
    }
    100%{
        width: 240vw;
        height: 240vw;
    }
}

</style>