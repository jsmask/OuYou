<template>
    <div class="main" @scroll="scroll">
        <div class="container">
            <div class="content">
                <h1 :style="{'background-position-x':rate+'%'}">Hello World</h1>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                rate:100
            }
        },
        mounted() {
            
        },
        methods: {
            scroll(e){
                let scrolled = e.target.scrollTop / (e.target.scrollHeight-e.target.clientHeight);
                this.rate = 100*(1-scrolled);
            }
        },
    }
</script>

<style lang="scss" scoped>
$h:calc(100vh - 64px);
.main{
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
    // &::-webkit-scrollbar-track{
    // }
    // &::-webkit-scrollbar-thumb{
    // }
    // &::-webkit-scrollbar-thumb:hover{
    // }
    // &::-webkit-scrollbar-corner{
    // }
}
.container{
    width: 100%;
    height:calc(#{$h}*3);
    background-color: black;
    .content{
        width: 100%;
        height:$h;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top:0;

        h1{
            text-align: center;
            font-size: 10vh;
            background-image: linear-gradient(90deg,rgba(255,255,255,1) 0%rgba(255,255,255,1) 33.3%, rgba(255,255,255,0) 66.7%, rgba(255,255,255,0) 100%);
            background-size: 300% 100%;
            // background-position-x:100%;
            // transition: 2s ease-in-out;
            background-clip: text;
            color: transparent;
        }
    }
}    
</style>