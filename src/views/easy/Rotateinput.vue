<template>
  <div class="main">
    <label
      :data-before="before"
      :data-after="after"
      :class="{animate: shouldAnimate}"
      @animationend="animationEnded"
    >
      <input type="text" v-model="value" :placeholder="placeholder" @focus="onFocus" @blur="onBlur" @keydown="onSearch" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      keywords: ["iPhone","iPad","Android","Windows Phone"],
      isFocusing: false,
      currentIndex: 0,
      animationTriggerFlag: false,
      duration: 3000
    };
  },
  mounted() {
    this.play();
  },
  computed: {
    before() {
      let keyword = this.keywords[this.currentIndex];
      return this.value != "" || this.isFocusing ? "" : keyword;
    },
    after() {
      let keyword =
        typeof this.keywords[this.currentIndex + 1] === "undefined"
          ? this.keywords[0]
          : this.keywords[this.currentIndex + 1];
      return this.value != "" || this.isFocusing ? "" : keyword;
    },
    placeholder() {
      let keyword = this.keywords[this.currentIndex];
      return !(this.value != "" || this.isFocusing) ? "" : keyword;
    },
    shouldAnimate() {
      return (
        !(this.value != "" || this.isFocusing) && this.animationTriggerFlag
      );
    }
  },
  methods: {
    play() {
      this.timer = setTimeout(() => {
        this.animationTriggerFlag = true;
      }, this.duration);
    },
    onFocus() {
      this.isFocusing = true;
      clearTimeout(this.timer);
      this.timer = null;
    },
    onBlur() {
      this.isFocusing = false;
      this.play();
    },
    animationEnded(e) {
      if (e.pseudoElement === "::after") {
        this.animationTriggerFlag = false;
        let newIndex =
          typeof this.keywords[this.currentIndex + 1] === "undefined"
            ? 0
            : this.currentIndex + 1;
        this.currentIndex = newIndex;
        this.play();
      }
    },
    onSearch(e){
      if(e.keyCode == 13){
          let keyword = this.value == ""?this.keywords[this.currentIndex]:this.value;
          this.$notification.success({
            message:keyword
          })
          
      }
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
  overflow: hidden;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 249, 255, 1) 11.1%,
    rgba(255, 241, 255, 1) 90%
  );
}
label {
  height: 48px;
  width: 320px;
  position: relative;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  font-family: Helvetica, Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  border: 3px solid #333333;
  box-sizing: border-box;
  border-radius: 7px;
  overflow: hidden;
}
input {
  width: 100%;
  height: 43px;
  outline: none;
  border: 0;
  padding: 0 0.5em;
  border-radius: 7px;
  box-sizing: border-box;
  font-family: initial;
  font-size: initial;
  color: #333;
  display: flex;
  align-items: center;
  margin-top: -1px;
}

input::placeholder {
  color: #999;
  font-family: initial;
  font-size: initial;
}

label::before,
label::after {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: initial;
  font-size: initial;
  box-sizing: border-box;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
  color: #999;
}

label::before {
  content: attr(data-before);
}

label::after {
  content: attr(data-after);
}

@keyframes placeholder-before {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes placeholder-after {
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
}

.animate::before {
  animation: 0.25s placeholder-before ease-in-out;
}

.animate::after {
  animation: 0.25s placeholder-after ease-in-out;
}

.animate::before,
.animate::after {
  animation-fill-mode: forwards;
}
</style>