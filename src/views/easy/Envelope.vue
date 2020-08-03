<template>
    <div class="main">
        <div class="envelope" :class="{'active':active}">
            <div class="card" ref="card" :style="{'animationDelay':carddelay+'s'}">
                <p>Love..</p>
            </div>
            <div class="heart" @click="open"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            end:false,
            active:false,
            carddelay:1,
        }
    },
    mounted() {
        this.$refs.card.addEventListener("animationend", ()=>{
            this.end = true;
            this.carddelay = 0;
        });
    },
    methods: {
        open(){
            if(this.end){
                this.active= false;
                this.end = false; 
            }
            else{
                this.active = true;
                this.carddelay = 1;
            }
            
        }
    },
}
</script>


<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(163,175,243,1) 0%, rgba(220,182,232,1) 100.2% );
  display: flex;
  justify-content: center;
  align-items: center;
}
.envelope{
    width: 280px;
    height: 160px;
    --envelope-color:rgb(252, 240, 175);
    --top-color:rgb(255, 254, 195);
    --heart-color:rgb(248, 82, 82);
    background: var(--top-color);
    position: relative;
    box-shadow: 2px 2px 10px rgba(0,0,0,.2);
}
.heart{
    position: absolute;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    z-index: 8;
    background-color: var(--heart-color);
    left: 50%;
    margin-left: -7.5px;
    top:70px;
    transition: .3s all;
    transform-origin: 50% 0%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
    cursor: pointer;
}
.heart::before{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background-color: var(--heart-color);
    left: -8px;
    top: 0px;
}
.heart::after{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background-color: var(--heart-color);
    right: 0px;
    top: -8px;
}
.envelope::before{
    content: '';
    display: block;
    position: absolute;
    border-width: 80px 140px 80px;
    top: 0;
    border-style: solid;
    border-color:var(--top-color) transparent  transparent transparent;
    transition: .5s all;
    transform:rotateX(0deg);
    transform-origin: 50% 0%;
    z-index: 2;
}
.envelope::after{
    content: '';
    display: block;
    position: absolute;
    border-width: 80px 140px 80px;
    top: 0;
    border-style: solid;
    border-color:transparent var(--envelope-color) var(--envelope-color) var(--envelope-color);
    transition: .3s all;
    transform:rotateX(0deg);
    transform-origin: 50% 0%;
    z-index: 6;
}
.card{
    /* display: none; */
    width:240px;
    height: 180px;
    background: white;
    position: absolute;
    z-index: 5;
    left: 50%;
    margin-left: -120px;
    bottom: 20px;
    transition: .2s .1s all;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    opacity: 0;
    box-sizing: border-box;
    padding: 50px 20px;
}

.card p{
    font-size: 36px;
    color: var(--heart-color);
    font-family: fantasy;
}
.envelope.active::before{
    transform:rotateX(180deg);
    transition-delay: .6s;
}
.envelope.active .card{
    animation-delay: 1s;
    animation: show .6s ease-out;
    animation-fill-mode:forwards;
}
.envelope.active .heart{
    animation: heartBeat 1s;
    animation-fill-mode: forwards;
}

@keyframes show{
    0%{
        transform: scaleY(.2) translateY(0);
        opacity: .7;
    }
    100%{
        transform: scaleY(1) translateY(-80px);
        opacity: 1;
    }
}

@keyframes heartBeat {
    0% {
        transform: rotate(45deg) scale(1);
    }

    14% {
        transform: rotate(45deg) scale(1.3);
    }

    28% {
        transform: rotate(45deg) scale(1);
    }

    42% {
        transform: rotate(45deg) scale(1.3);
    }

    70% {
        transform: rotate(45deg) scale(1);
    }
    100%{
        transform: rotate(0deg) translateY(5px);
    }
}

</style>