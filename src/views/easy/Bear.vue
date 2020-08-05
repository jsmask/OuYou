<template>
    <div class="main">
         <div class="bear">
             <div class="body">
                 <div class="ear left"></div>
                 <div class="ear right"></div>

                 <div class="eye left"></div>
                 <div class="eye right"></div>

                 <div class="face">
                     <div class="mouse"></div>
                     <div class="cheek"></div>
                     <div class="nose"></div>
                 </div>
                 <div class="leg left"></div>
                 <div class="leg right"></div>

                 <div class="hat">
                     <div class="hat-body"></div>
                     <div class="hat-bottom"></div>
                     <div class="bow">
                         <div class="petal left"></div>
                         <div class="petal right"></div>
                     </div>
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
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-image: radial-gradient( circle 755px at 10.1% 95.3%,  rgba(242,188,141,1) 0%, rgba(242,159,141,1) 100.2% );
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.bear{
    --skin-color:rgb(98, 188, 245);
    --border-color:white;
    --mouse-color:rgb(235, 104, 165);
    --eye-color:#000;
    width: 375px;
    height: 350px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.body{
   width: 100%;
   height: 100%;
   position: relative;
   background-color: var(--skin-color);
   border:15px solid var(--border-color);
   border-radius: 50%  50%;
   z-index: 6;
}
.face{
    width: 125px;
    height: 125px;
    background-color: var(--border-color);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.eye{
    width: 36px;
    height: 48px;
    position: absolute;
    background-color: var(--eye-color);
    border-radius: 50%;
    top: 90px;
}
.eye::before{
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    top: 10px;
}
.eye::after{
    content: '';
    display: block;
    width: 35px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    bottom: -40px;
    background-color: var(--mouse-color);
}
.eye.left{
    left: 70px;
}
.eye.left::before{
    left: 10px;
}
.eye.left::after{
    left: -10px;
}
.eye.right{
    right: 70px;
}
.eye.right::before{
    right: 10px;
}
.eye.right::after{
    right: -10px;
}
.nose{
    width: 24px;
    height: 16px;
    background-color:#000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-150%);
}
.cheek{
    width: 30px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-150%);
}
.cheek::before,.cheek::after{
    content: '';
    display: block;
    width: 32px;
    height: 36px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 0 5px 0 #000;
    position: absolute;
    top: 0px;
    background-color: var(--border-color);
}
.cheek::before{
    left: -17px;
}
.cheek::after{
    right: -17px;
}
.mouse{
    border:5px solid #000;
    width: 40px;
    height: 50px;
    background-color: var(--mouse-color);
    position: absolute;
    border-radius: 0 0 45% 45%;
    left: 50%;
    margin-left: -20px;
    top: 50px;
}
.leg{
    width: 100px;
    height: 100px;
    border:15px solid;
    bottom: -1px;
    background-color: var(--skin-color);
    position: absolute;
    border-radius: 50%;
}
.leg.left{
    left: 10px;
    border-color: transparent transparent var(--border-color) var(--border-color);
    transform: rotate(-3deg);
}
.leg.right{
    right: 10px;
    border-color: transparent var(--border-color) var(--border-color) transparent ;
    transform: rotate(3deg);
}
.ear{
    width: 160px;
    border:15px solid;
    height: 140px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--skin-color);
    top:-10px;
}
.ear.left{
    left: -18px;
    border-color: var(--border-color)  transparent  transparent var(--border-color);
    transform: rotate(-4deg);
}

.ear.right{
    right: -18px;
    border-color: var(--border-color) var(--border-color) transparent transparent ;
    transform: rotate(4deg);
}
.ear::before{
    content: "";
    display: block;
    width: 80px;
    height: 60px;
    background-color: var(--border-color);
    border-radius: 50%;
    position: absolute;
    top:25px;
}
.ear::after{
    content: "";
    display: block;
    width: 100px;
    height: 50px;
    background-color: var(--skin-color);
    border-radius: 50%;
    position: absolute;
    top:40px;
}

.ear.left::before{
    left: 20px;
    transform: rotate(-32deg);
}
.ear.left::after{
    left: 25px;
    transform: rotate(-32deg);
}

.ear.right::before{
    right: 20px;
    transform: rotate(32deg);
}
.ear.right::after{
    right: 25px;
    transform: rotate(32deg);
}

.hat{
    width: 70px;
    height: 40px;
    position: absolute;
    z-index: 3;
    left: 172px;
    transform: rotate(17deg);
    top: -10px;
}
.hat-body{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--eye-color);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
.hat-bottom{
    position: absolute;
    bottom: -10px;
    background-color: var(--eye-color);
    border-radius: 30px 30px 15px 15px;
    width: 100px;
    height: 30px;
    left: 50%;
    margin-left: -50px;
    overflow: hidden;
    z-index: 3;
}
.hat-bottom::before{
    content: '';
    width: 50px;
    height: 10px;
    background-color: var(--mouse-color);
    position: absolute;
    left: 0;
    top: 0px;
    transform: skew(10deg, 10deg);
}
.bow::after{
    content: '';
    width: 18px;
    height: 20px;
    background-color: var(--mouse-color);
    position: absolute;
    z-index: 7;
    right: 5px;
    top:20px;
    border:2px solid var(--eye-color);
    border-radius: 50%;
    transform: rotate(-10deg);
}
.petal{
    width: 21px;
    height: 22px;
    background-color: var(--mouse-color);
    position: absolute;
    z-index: 6;
}
.petal.left{
    width: 23px;
    height: 25px;
    border-radius: 20px 30px 30px 20px;
    border:2px solid var(--eye-color);
    transform: rotate(-5deg);
    top: 18px;
    left: 32px;
}
.petal.right{
    border-radius: 30px 20px 20px 30px;
    transform: rotate(-5deg);
    right: -10px;
    top: 18px;
}

.hat::before{
    content: '';
    display: block;
    width: 80px;
    height: 30px;
    background-color:var(--border-color);
    position: absolute;
    z-index: 1;
    top: -8px;
    left: -8px;
    border-radius:10px;
}
</style>