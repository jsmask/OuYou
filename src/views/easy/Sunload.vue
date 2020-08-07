<template>
    <div class="main">
        <div class="loading">
            <div class="sun">
                 <div class="sun-body">
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                   <span class="sun-spot"></span>
                 </div>
                 <div class="sun-eye"></div>
            </div>
            <div class="ground">
              <p class="text">loading...</p>
            </div>    
        </div>
    </div>
</template>

<style scoped>
.main{
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background: var(--skin-color);
  display: flex;
  justify-content: center;
  align-items: center;

  --skin-color:rgb(255,190,50);
  --border-color:rgb(92, 67, 13);
}
.loading{
  width: 240px;
  height: 180px;
  position: relative;
  background: transparent;
}
.ground{
  width:100%;
  position: absolute;
  background: var(--skin-color);
  height: 100px;
  bottom: 0;
  z-index: 2;
}
.ground::before{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  height: 5px;
  border-radius: 10px;
  background: var(--border-color);
}
.text{
  color: var(--border-color);
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin: 25px auto;
  font-family: fantasy;
  letter-spacing: 2px;
  animation: show 2.7s infinite linear;
}
.sun{
  width: 70px;
  height: 70px;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  top: 56px;
  animation: move 2.7s infinite linear;
  
}
.sun-body{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border:4px solid var(--border-color);
  position: relative;
  animation: spin 2.7s infinite linear;
}
.sun-eye{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--border-color);
  position: absolute;
  top: 28px;
  left: 16px;
  box-shadow: 15px 0px 0 var(--border-color);
  animation: see 2.7s infinite ease-out;
}
.sun-spot{
  width: 4px;
  height: 8px;
  background: var(--border-color);
  position: absolute;
  border-radius: 40%;
  opacity: .85;
  left: 50%;
  top: 50%;
  margin-left: -2px;
  margin-top: -5px;
}
.sun-spot:nth-of-type(1){
  transform:translate(0,-50px) rotate(0);
}

.sun-spot:nth-of-type(2){
  transform:translate(35px,-35px) rotate(45deg);
}
.sun-spot:nth-of-type(3){
  transform:translate(50px,0px) rotate(90deg);
}

.sun-spot:nth-of-type(4){
  transform:translate(35px,35px) rotate(135deg);
}

.sun-spot:nth-of-type(5){
  transform:translate(0,50px) rotate(180deg);
}
.sun-spot:nth-of-type(6){
  transform:translate(-35px,35px) rotate(225deg);
}
.sun-spot:nth-of-type(7){
  transform:translate(-50px,0px) rotate(270deg);
}
.sun-spot:nth-of-type(8){
  transform:translate(-35px,-35px) rotate(315deg);
}
@keyframes move{
  40%,70%{
    transform: translateY(-50%);
  }
  0%,10%,100%{
     transform: translateY(0%);
  }
}
@keyframes spin{
  0%,10%,100%{
    transform: rotate(0deg);
  }
  40%,70%{
    transform: rotate(-90deg);
  }
}
@keyframes see{
  0%,40%{
    transform: translateX(0) scaleY(1);
  }
  45%{
    transform: translateX(0) scaleY(.1);
  }
  50%{
    transform: translateX(0) scaleY(1);
  }
  70%,100%{
    transform: translateX(16px) scaleY(1);
  }
}

@keyframes show{
  0%,40%,100%{
    opacity: 1;
  }
  45%{
    opacity: .2;
  }
  50%{
    opacity: 1;
  }
}
</style>