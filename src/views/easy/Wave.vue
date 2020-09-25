<template>
    <div class="main">
        <div class="wave"></div>
    </div>
</template>

<style scoped>
.main{
    width: 100%;
    min-height: 100%;
    padding: 0px;
    font-size: 14px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-color);

    --skin-color: rgb(132, 170, 252,1);
    --bg-color:rgb(251, 252, 228);
}

.wave{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--skin-color);
    border:5px solid var(--bg-color);
    box-shadow: 0 0 0 5px var(--skin-color), 0 0 15px inset rgba(255, 255, 255,.8);
    position: relative;
    overflow: hidden;
}

.wave::before,
.wave::after{
   content:"";
   box-sizing: border-box;
   display: block;
   position: absolute;
   top: -165%;
   left: -50%;
   width: 200%;
   height: 200%;
}
.wave::before{
    background: var(--bg-color);
    border-radius: 45%;
    animation: move 6s linear infinite;
}
.wave::after{
    background:var(--bg-color);
    opacity: .5;
    border-radius: 38%;
    animation: move 9s linear infinite;
}
@keyframes move{
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(-360deg);
    }
}
</style>