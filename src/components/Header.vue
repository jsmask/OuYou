<template>
  <div class="hd-box">
    <img src="../assets/logo.png" v-show="!isBack" style="height:30px;margin-left:-30px" />

    <div class="hd-back" @click.stop="onBack" v-show="isBack">
      <a-icon type="left" />
      <span>返回</span>
    </div>

    
    <div class="hd-info">
      <div v-if="!isIos" class="full-btn" @click.stop="onFullScreen">全屏模式</div>
      <div class="hd-title" v-if="title">{{title}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "m-header",
  data() {
    return {
      isBack: false,
      title:"",
      isIos:false
    };
  },
  created() {
    if (this.$route.path === "/") {
      this.isBack = false;
    } else {
      this.isBack = true;
    }
    if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) {
      this.isIos = true
    }
  },
  mounted() {
    
  },
  methods: {
    onFullScreen(){
      this.$emit('full');
    },
    onBack() {
      if(window.history.length===1)
        this.$router.push("/");
      else 
        this.$router.back();
    }
  },
  watch: {
    "$route.path"(newVal, oldVal) {
      if (newVal === "/") {
        this.isBack = false;
        this.title = "";
      } else {
        this.isBack = true;
        this.title = this.$store.state.title;
        if(this.title == "") this.title = document.title;
      }
    }
  }
};
</script>

<style scoped>
.hd-back {
  position: relative;
  left: -30px;
  color: #ffffff;
  cursor: pointer;
}
.hd-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.hd-info{
  position: relative;
  right: -30px;
  display: flex;
  align-items: center;
}
.hd-title{
  color:#ffffff;
  margin-left: 20px;
  font-size: 12px;
}
.full-btn{
  cursor: pointer;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 3px;
  height: 32px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 12px;
}
</style>