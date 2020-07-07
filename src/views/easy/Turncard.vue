<template>
  <div class="main">
    <div class="my-card">
      <div class="back">BACK</div>
      <div class="cover">COVER</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "TurnCard"
    };
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 120px 0;
  text-align: center;
  background-image: radial-gradient(
    circle 513px at 52.1% 52.6%,
    rgba(240, 241, 163, 1) 0%,
    rgba(236, 135, 135, 1) 90%
  );
}
.my-card {
  user-select: none;
  width: 240px;
  height: 360px;
  position: relative;
  margin: 0 auto;
  perspective: 1000px;
}
.my-card .back,
.my-card .cover {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 12px;
  font-size: 45px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  color: #fff;
  letter-spacing: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
  text-shadow: 0 10px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease-in-out;
  font-family: fantasy;
}
.cover {
  background-image: url("../../assets/images/role/role_0_0.png"),
    radial-gradient(
      circle farthest-corner at 108.9% 51.2%,
      rgba(255, 124, 0, 1) 0%,
      rgba(255, 124, 0, 1) 15.9%,
      rgba(255, 163, 77, 1) 15.9%,
      rgba(255, 163, 77, 1) 24.4%,
      rgba(19, 30, 37, 1) 24.5%,
      rgba(19, 30, 37, 1) 66%
    );
  backface-visibility: hidden;
  background-position: 55% 65%;
  background-repeat: no-repeat;
  background-size: 80% auto, 100% 100%;
  transform: rotatey(-180deg);
}
.back {
  background-image: radial-gradient(
    circle farthest-corner at -8.9% 51.2%,
    rgba(255, 124, 0, 1) 0%,
    rgba(255, 124, 0, 1) 15.9%,
    rgba(255, 163, 77, 1) 15.9%,
    rgba(255, 163, 77, 1) 24.4%,
    rgba(19, 30, 37, 1) 24.5%,
    rgba(19, 30, 37, 1) 66%
  );
  transform: rotatey(0deg);
}

.my-card:hover .cover {
  transform: rotatey(0deg);
}
.my-card:hover .back {
  transform: rotatey(180deg);
}
</style>
