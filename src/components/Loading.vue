<template>
    <div class="load" data-msg="Loading..."></div>
</template>

<script>
    export default {
        name:"loading"
    }
</script>

<style scoped>
.load {
  width: 100%;
  background: #ffffff;
  position: absolute;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 30px;
  box-sizing: border-box;
}
.load::before {
  content: attr(data-msg);
  animation: show 1s infinite linear;
  font-size: 32px;
  font-weight: 700;
  color: #333333;
}
@keyframes show {
  0% {
    opacity: 1;
  }

  10%,
  30% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}
</style>