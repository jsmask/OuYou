<template>
    <div class="main">
        <div class="card" @click="active=!active" :class="{'active':active}">
            <div class="role-box">
                <img class="role-pic" src="https://static01.imgkr.com/temp/cc3c421b5df34541930d4788fddfc13e.png" alt="surper-dragon-y">
            </div>
            <div class="role-name">超级喷火龙Y</div>
            <div class="role-args">
                <div class="role-bar"><span>HP:78</span></div>
                <div class="role-bar"><span>物攻:104</span></div>
                <div class="role-bar"><span>物防:78</span></div>
                <div class="role-bar"><span>特攻:159</span></div>
                <div class="role-bar"><span>特防:115</span></div>
                <div class="role-bar"><span>速度:100</span></div>
            </div>
            <div class="role-type">
                <div class="type fly">飞行</div>
                <div class="type fire">火</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:false
        }
    }
}
</script>

<style lang="scss" scoped>
$bg_path:"https://static01.imgkr.com/temp/dc918b93d6c641c3aa618b64fd08a6a3.jpg";
$card_path:"https://static01.imgkr.com/temp/59e3bfa1f62f4c6fb736422002a3b2c3.png";
$circle_path:"https://static01.imgkr.com/temp/1732602293354bbcbb05c7c449b30427.png";
$circle_bg_path:"https://static01.imgkr.com/temp/5cacbd4cdd0d4c65b6fd13e04f01ce8e.png";
$HP:78;
$AT:104;
$DEF:78;
$SPD:100;
$SAT:159;
$SDF:115;
$v:1px;

.main{
    width: 100%;
    min-height: 100%;
    padding: 0px;
    background-color: #0c0c0c;
    overflow: hidden;
    font-size: 14px;
    background:url($bg_path) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;

    .card{
        width:328px;
        height: 501px;
        background: url($card_path) no-repeat;
        background-size:100% auto;
        position: relative;
        top:30px;
        transition: .36s all;
        transform-style: preserve-3d;
        perspective: 2000px;
        user-select:none;
        cursor: pointer;


        &::after,
        &::before{
            content: '';
            display: block;
            box-sizing: border-box;
            width:328px;
            height: 501px;
            background: url($card_path) no-repeat;
            background-size:100% auto;
            transition: .36s all;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }

        // &:hover,
        &.active{
            transform: translateY(60px) rotateX(60deg);
            &::before{
                transform:translateZ(-5px) translateY(5px);
                opacity: .3;
            }
            &::after{
                transform:translateZ(-10px) translateY(10px);
                opacity: .15;
            }
            .role-name{
                transform: translateZ(345px) translateY(10px) rotateX(-90deg) translateX(-50%);
                text-shadow: #000 2px 0 0, #000 0 2px 0, #000 -2px 0 0, #000 0 -2px 0;
            }
            .role-type{
                transform: translateZ(320px) translateY(-90px) rotateX(-90deg);
                width: 50px;
                display: block;
                .type{
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    font-size: 12px;
                    margin-bottom: 12px;
                }
            }
            .role-args{
                transform: translateZ(20px) translateY(80px);
                .role-bar{
                    &::after,
                    &::before{
                        opacity: 1;
                    }
                    span{
                        animation-name: show;
                        animation-fill-mode: forwards;
                        animation-duration: .7s;
                    }

                    &:nth-child(1){
                        width: $HP*$v;
                    }
                    &:nth-child(2){
                        width: $AT*$v;
                    }
                    &:nth-child(3){
                        width: $DEF*$v;
                    }
                    &:nth-child(4){
                        width: $SAT*$v;
                    }
                    &:nth-child(5){
                        width: $SDF*$v;
                    }
                    &:nth-child(6){                   
                        width: $SPD*$v;
                    }

                    @for $i from 1 through 6 {
                        &:nth-child(#{$i}){
                            transition-delay:calc(#{$i*.1}s);
                        }
                    }

                }
                
            }
            .role-box{
                transform: translateZ(160px) rotateX(-90deg);
                &::before,
                &::after{
                    opacity: 1;
                }
                .role-pic{
                    transform:scale(1.2) translateZ(10px);
                    animation: tada 1.2s .5s linear forwards;
                }
            }
        }

        .role-box{
            width: 280px;
            height: 280px;
            position: relative;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .36s all;
            transform-style: preserve-3d;
            perspective: 2000px;

            &::before{
                content: '';
                box-sizing: border-box;
                display: block;
                opacity: 0;
                position: absolute;
                width: 280px;
                height: 280px;
                left: 0;
                top: 0;
                background: url($circle_path) no-repeat;
                background-size:100% auto;
                animation: circle 2s linear infinite both;
            }
            &::after{
                content: '';
                box-sizing: border-box;
                display: block;
                opacity: 0;
                position: absolute;
                background: url($circle_bg_path) no-repeat;
                background-size:100% auto;
                width: 180px;
                height: 180px;
                left: 50%;
                top: 50%;
                margin-left: -90px;
                margin-top: -90px;
                position: absolute;
            }
            
            .role-pic{
                width: 180px;
                height: 180px;
                object-fit: cover;
                position: relative;
                z-index: 99;
                transition: .36s all;
            }
        }

        .role-name{
            font-size:28px;
            color: white;
            padding: 0 35px;
            box-sizing: border-box;
            position: absolute;
            text-align: left;
            display: inline-block;
            top: 300px;
            left: 50%;
            transform:translateX(-70%);
            transition: .5s all;
            white-space: nowrap;
            word-break:break-all;
        }
        .role-args{
            display: flex;
            align-items: center;
            position: absolute;
            top: 350px;
            height: 60px;
            padding: 0 30px;
            box-sizing: border-box;
            width: 300px;
            transition: .5s all;
            transform-style: preserve-3d;
            perspective: 2000px;
            transform: translateZ(21px);
            
            .role-bar{
                position: absolute;
                perspective: 2000px;
                transform-style: preserve-3d;
                transform-origin: left;
                transition: 1s all;
                width: 0;
                height: 20px;
                background-color: #FFF;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15));
                transform: translateX(0px) rotateY(-90deg) rotateX(-45deg);

                --color1:rgb(119,219,45);
                --color2:rgb(242,232,50);
                --color3:rgb(239,119,59);
                --color4:rgb(241,72,40);
                --color5:rgb(46,145,225);
                --color6:rgb(78,82,198);

                @for $i from 1 through 6 {
                    &:nth-child(#{$i}){
                        left: calc(#{$i}*45px);
                        background-color:var(--color#{$i});
                        &::before,
                        &::after{
                            background-color:var(--color#{$i});
                        }
                    }
                    span{
                        animation-delay: calc(#{$i*.2}s);
                    }
                }

                span{
                    padding-right: 10px;
                    font-size: 12px;
                    color: white;
                    opacity: 0;
                    transition: 1s;
                    overflow: hidden;
                    position: absolute;
                    left: 10px;
                    top:3px;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 20px;
                    background-color: #FFF;
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15));
                    transform-origin: top;
                    transform: rotateX(-90deg);
                    opacity: 0;
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 100%;
                    width: 20px;
                    height: 20px;
                    background-color: #FFF;
                    background-image: linear-gradient(to left top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.05));
                    transform-origin: left;
                    transform: rotateY(90deg);
                    transition: 1s;
                }


            }

        }
        .role-type{
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 10px;
            height: 80px;
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            transition: .52s all;
            .type{
                width: 105px;
                height: 28px;
                color: white;
                border-radius: 28px;
                display: flex;
                align-items: center;
                justify-content:center;
                margin-left: 25px;
                transition: 1s all;
            }
        }
    }
    
}



.type.fly{
   border-color: #78dcff;
   background-color: #79bcd7;
   box-shadow: 0 0 3px 1px #79bcd7;
}
.type.fire{
    border-color: #ff6900;
    background-color: #ff3700;
    box-shadow: 0 0 3px 1px #ff3700;
}

@keyframes tada {
    0% {
        transform: scale(1.2) translateZ(10px);
    }

    10%,20% {
        transform: scale(1.15) rotate(-3deg) translateZ(10px);
    }

    30%,50%,70%,90% {
        transform: scale(1.25) rotate(3deg) translateZ(10px);
    }

    40%,60%,80% {
        transform: scale(1.25) rotate(-3deg) translateZ(10px);
    }

    to {
        transform: scale(1.2) translateZ(10px);
    }
}

@keyframes circle{
    0%{
        transform: rotate(0);
    }

    100%{
         transform: rotate(360deg);
    }
}
@keyframes show{
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}
</style>