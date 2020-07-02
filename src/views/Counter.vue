<template>
  <div class="main">
    <div class="counter" :class="{'before':isBefore,'after':isAfter}" ref="counter">
      <button :disabled="isRun" @click="onSub">
        <a-icon type="minus" class="minus" />
      </button>
      <span :data-before="countBefore" :data-after="countAfter">{{count}}</span>
      <button :disabled="isRun" @click="onAdd">
        <a-icon type="plus" class="plus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      isBefore: false,
      isAfter: false
    };
  },
  computed: {
    countBefore() {
      return this.count - 1;
    },
    countAfter() {
      return this.count + 1;
    },
    isRun() {
      return false;
    }
  },
  mounted() {
    this.$refs.counter.addEventListener("transitionend", () => {
      if (this.isBefore) {
        this.count--;
        this.isBefore = false;
      }
      if (this.isAfter) {
        this.count++;
        this.isAfter = false;
      }
    });
  },
  methods: {
    onSub() {
      console.log("sub");
      this.isBefore = true;
    },
    onAdd() {
      this.isAfter = true;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 120px 0;
  text-align: center;
  background-image: linear-gradient(
    99.6deg,
    rgba(112, 128, 152, 1) 10.6%,
    rgba(242, 227, 234, 1) 32.9%,
    rgba(234, 202, 213, 1) 52.7%,
    rgba(220, 227, 239, 1) 72.8%,
    rgba(185, 205, 227, 1) 81.1%,
    rgba(154, 180, 212, 1) 102.4%
  );
  overflow: hidden;
}
.counter {
  width: 240px;
  height: 60px;
  border-radius: 6px;
  background-color: rgba(33, 33, 33);
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px auto;
  position: relative;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 10px 0;
}
.counter button {
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  z-index: 9;
  cursor: pointer;
}
.counter::after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.9) 0%,
    rgba(33, 33, 33, 0) 30%,
    rgba(33, 33, 33, 0) 70%,
    rgba(33, 33, 33, 0.9) 100%
  );
  width: 100%;
  height: 100%;
  border-radius: 6px;
  z-index: 2;
}

.plus,
.minus {
  font-size: 20px;
  color: #ffffff;
  margin: 0 20px;
}
.counter > span {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  flex: 1;
  transform: translateY(0px);
  display: block;
  font-family: fantasy;
}
.counter > span::before {
  content: attr(data-after);
  display: block;
  transform: scale(0.85);
}
.counter > span::after {
  content: attr(data-before);
  display: block;
  transform: scale(0.85);
}
.counter.before > span {
  transform: translateY(-30px);
  transition: transform 0.2s ease-in;
}
.counter.after > span {
  transform: translateY(30px);
  transition: transform 0.2s ease-in;
}
</style>