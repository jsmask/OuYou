<template>
    <div class="main">
        <ul class="circle">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    $r:12px;
    .main {
        width: 100%;
        min-height: 100%;
        padding: 0px 0 0px;
        text-align: center;
        background-color: #0c0c0c;
        overflow: hidden;
        font-size: 14px;
        background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgb(51, 66, 73) 0.3%, rgba(30,33,48,1) 90.2% );
        display: flex;
        justify-content: center;
        align-items: center;

        .circle{
            width: 320px;
            height: 320px;
            position: relative;
            perspective: 800px;
            transform-style: preserve-3d;
            transform: rotateX(60deg);
           li {
             position: absolute;
             border: 3px solid white;
             border-radius: 50%;
             box-shadow: 0 2px 0 #c9c5c5,inset 0 2px 0 #c9c5c5;
             top: 0;
             left: 0;
             @for $i from 1 through 12 {
                    &:nth-child(#{$i}) {
                       left:calc(#{$i*$r});
                       top:calc(#{$i*$r});
                       right:calc(#{$i*$r});
                       bottom:calc(#{$i*$r});
                       animation: move 3.2s cubic-bezier(.5,-.25,.2,1) infinite both;
                       animation-delay: calc(#{$i*0.1}s);
                    }
                }
           }
        }
    }

    @keyframes move{
        0%{
            transform: translateZ(-120px) scale(1) skew(0deg);
            opacity: .25;
        }
        50%{
            transform: translateZ(120px) scale(-1);
            opacity: .75;
        }
        100%{
            transform: translateZ(-120px) scale(1) skew(0deg);
            opacity: .25;
        }
    }

    
</style>