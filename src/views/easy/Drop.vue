<template>
  <div class="main">
    <div class="container">
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>

      <div class="collection"></div>
      <span class="progress">75%</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  flex-direction: column;
  filter: contrast(30);
  --drop-color: rgb(181, 249, 252);
}
.drop {
  width: 80px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--drop-color);
  filter: blur(20px);
  position: absolute;
  animation: 3.2s down linear infinite;
  animation-fill-mode: backwards;
}
.drop:nth-of-type(1) {
  animation-delay: 0s;
}
.drop:nth-of-type(2) {
  animation-delay: 0.5s;
}

.drop:nth-of-type(3) {
  animation-delay: 0.7s;
}

.collection {
  width: 120px;
  height: 120px;
  background-color: var(--drop-color);
  filter: blur(20px);
  animation: 8s spin linear infinite;
  border-radius: 50%;
  position: relative;
}
.progress {
  position: absolute;
  font-size: 32px;
  font-family: fantasy;
  color: #333;
}

@keyframes down {
  0% {
    opacity: 0;
    transform: translateY(-600%) scale(0.7);
  }
  50% {
    opacity: 1;
    transform: translateY(-100%) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translateY(0%) scale(0.45);
  }
}

@keyframes spin {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.15) rotate(180deg);
    border-radius: 40% 10% 50% 45%;
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>