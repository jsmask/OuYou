<template>
  <div class="main">
    <div class="eye-password-box" :class="{'active':!status}">
      <input :type="type" v-model="val" />
      <svg viewBox="0 0 100 100" class="eye-box" @click="status=!status">
        <path class="eye-top" :d="eyeNow" />
        <path class="eye-bottom" :d="eye.bottom" />
        <circle class="eye-center" cx="50" cy="50" r="15" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 123456,
      status: true,
      type:"text",
      eye: {
        top: "M10,50  Q50,10 90,50",
        bottom: "M10,50  Q50,90 90,50"
      }
    };
  },
  computed: {
    eyeNow() {
      return this.status ? this.eye.top : this.eye.bottom;
    }
  },
  watch: {
      status(v){
          setTimeout(()=>{
              this.type = v?"text":"password";
          },200)
      }
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0px 0 0px;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  background-image: linear-gradient(
      158deg,
      rgba(84, 84, 84, 0.03) 0%,
      rgba(84, 84, 84, 0.03) 20%,
      rgba(219, 219, 219, 0.03) 20%,
      rgba(219, 219, 219, 0.03) 40%,
      rgba(54, 54, 54, 0.03) 40%,
      rgba(54, 54, 54, 0.03) 60%,
      rgba(99, 99, 99, 0.03) 60%,
      rgba(99, 99, 99, 0.03) 80%,
      rgba(92, 92, 92, 0.03) 80%,
      rgba(92, 92, 92, 0.03) 100%
    ),
    linear-gradient(
      45deg,
      rgba(221, 221, 221, 0.02) 0%,
      rgba(221, 221, 221, 0.02) 14.286%,
      rgba(8, 8, 8, 0.02) 14.286%,
      rgba(8, 8, 8, 0.02) 28.572%,
      rgba(52, 52, 52, 0.02) 28.572%,
      rgba(52, 52, 52, 0.02) 42.858%,
      rgba(234, 234, 234, 0.02) 42.858%,
      rgba(234, 234, 234, 0.02) 57.144%,
      rgba(81, 81, 81, 0.02) 57.144%,
      rgba(81, 81, 81, 0.02) 71.42999999999999%,
      rgba(239, 239, 239, 0.02) 71.43%,
      rgba(239, 239, 239, 0.02) 85.71600000000001%,
      rgba(187, 187, 187, 0.02) 85.716%,
      rgba(187, 187, 187, 0.02) 100.002%
    ),
    linear-gradient(
      109deg,
      rgba(33, 33, 33, 0.03) 0%,
      rgba(33, 33, 33, 0.03) 12.5%,
      rgba(147, 147, 147, 0.03) 12.5%,
      rgba(147, 147, 147, 0.03) 25%,
      rgba(131, 131, 131, 0.03) 25%,
      rgba(131, 131, 131, 0.03) 37.5%,
      rgba(151, 151, 151, 0.03) 37.5%,
      rgba(151, 151, 151, 0.03) 50%,
      rgba(211, 211, 211, 0.03) 50%,
      rgba(211, 211, 211, 0.03) 62.5%,
      rgba(39, 39, 39, 0.03) 62.5%,
      rgba(39, 39, 39, 0.03) 75%,
      rgba(55, 55, 55, 0.03) 75%,
      rgba(55, 55, 55, 0.03) 87.5%,
      rgba(82, 82, 82, 0.03) 87.5%,
      rgba(82, 82, 82, 0.03) 100%
    ),
    linear-gradient(
      348deg,
      rgba(42, 42, 42, 0.02) 0%,
      rgba(42, 42, 42, 0.02) 20%,
      rgba(8, 8, 8, 0.02) 20%,
      rgba(8, 8, 8, 0.02) 40%,
      rgba(242, 242, 242, 0.02) 40%,
      rgba(242, 242, 242, 0.02) 60%,
      rgba(42, 42, 42, 0.02) 60%,
      rgba(42, 42, 42, 0.02) 80%,
      rgba(80, 80, 80, 0.02) 80%,
      rgba(80, 80, 80, 0.02) 100%
    ),
    linear-gradient(
      120deg,
      rgba(106, 106, 106, 0.03) 0%,
      rgba(106, 106, 106, 0.03) 14.286%,
      rgba(67, 67, 67, 0.03) 14.286%,
      rgba(67, 67, 67, 0.03) 28.572%,
      rgba(134, 134, 134, 0.03) 28.572%,
      rgba(134, 134, 134, 0.03) 42.858%,
      rgba(19, 19, 19, 0.03) 42.858%,
      rgba(19, 19, 19, 0.03) 57.144%,
      rgba(101, 101, 101, 0.03) 57.144%,
      rgba(101, 101, 101, 0.03) 71.42999999999999%,
      rgba(205, 205, 205, 0.03) 71.43%,
      rgba(205, 205, 205, 0.03) 85.71600000000001%,
      rgba(53, 53, 53, 0.03) 85.716%,
      rgba(53, 53, 53, 0.03) 100.002%
    ),
    linear-gradient(
      45deg,
      rgba(214, 214, 214, 0.03) 0%,
      rgba(214, 214, 214, 0.03) 16.667%,
      rgba(255, 255, 255, 0.03) 16.667%,
      rgba(255, 255, 255, 0.03) 33.334%,
      rgba(250, 250, 250, 0.03) 33.334%,
      rgba(250, 250, 250, 0.03) 50.001000000000005%,
      rgba(231, 231, 231, 0.03) 50.001%,
      rgba(231, 231, 231, 0.03) 66.668%,
      rgba(241, 241, 241, 0.03) 66.668%,
      rgba(241, 241, 241, 0.03) 83.33500000000001%,
      rgba(31, 31, 31, 0.03) 83.335%,
      rgba(31, 31, 31, 0.03) 100.002%
    ),
    linear-gradient(
      59deg,
      rgba(224, 224, 224, 0.03) 0%,
      rgba(224, 224, 224, 0.03) 12.5%,
      rgba(97, 97, 97, 0.03) 12.5%,
      rgba(97, 97, 97, 0.03) 25%,
      rgba(143, 143, 143, 0.03) 25%,
      rgba(143, 143, 143, 0.03) 37.5%,
      rgba(110, 110, 110, 0.03) 37.5%,
      rgba(110, 110, 110, 0.03) 50%,
      rgba(34, 34, 34, 0.03) 50%,
      rgba(34, 34, 34, 0.03) 62.5%,
      rgba(155, 155, 155, 0.03) 62.5%,
      rgba(155, 155, 155, 0.03) 75%,
      rgba(249, 249, 249, 0.03) 75%,
      rgba(249, 249, 249, 0.03) 87.5%,
      rgba(179, 179, 179, 0.03) 87.5%,
      rgba(179, 179, 179, 0.03) 100%
    ),
    linear-gradient(
      241deg,
      rgba(58, 58, 58, 0.02) 0%,
      rgba(58, 58, 58, 0.02) 25%,
      rgba(124, 124, 124, 0.02) 25%,
      rgba(124, 124, 124, 0.02) 50%,
      rgba(254, 254, 254, 0.02) 50%,
      rgba(254, 254, 254, 0.02) 75%,
      rgba(52, 52, 52, 0.02) 75%,
      rgba(52, 52, 52, 0.02) 100%
    ),
    linear-gradient(90deg, #ffffff, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;

  --main-color: rgb(106, 157, 252);
  --active-color: rgb(190, 212, 253);
  --active-font-color: white;
}
.eye-password-box {
  width: 320px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.eye-password-box input {
  border: 0;
  outline: none;
  background-image: linear-gradient(
    0deg,
    white 0%,
    white 50%,
    var(--active-color) 50%,
    var(--active-color) 100%
  );
  background-size: 100% 200%;
  background-position: 0% 100%;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 0 70px 0 15px;
  font-size: 24px;
  border: 2px solid var(--main-color);
  transition: 0.3s all ease-in;
  transition-delay: 0.1s;
  letter-spacing: .5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.eye-top,
.eye-bottom,
.eye-center {
  stroke: var(--main-color);
  stroke-linecap: round;
  stroke-width: 7px;
  fill: none;
  transition: 0.3s all ease-in-out;
}
.eye-box {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
}

.eye-center {
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  transition-delay: 0.1s;
  transform-origin: 50% 50%;
  transform: rotate(90deg);
}

.eye-password-box.active .eye-top {
  transition-delay: 0.2s;
}

.eye-password-box.active .eye-center {
  stroke-dashoffset: 100;
  transition-delay: 0s;
}
.eye-password-box.active input {
  background-position: 0% 0%;
  color: var(--active-font-color);
}
</style>