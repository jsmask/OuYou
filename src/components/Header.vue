<template>
  <div class="hd-box">
    <img src="../assets/logo.png" v-show="!isBack" style="height:30px;margin-left:-30px" />

    <div class="hd-back" @click.stop="onBack" v-show="isBack">
      <a-icon type="left" />
      <span>返回</span>
    </div>

    <div class="hd-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "m-header",
  data() {
    return {
      isBack: false,
      title:""
    };
  },
  created() {
    
    if (this.$route.path === "/") {
      this.isBack = false;
    } else {
      this.isBack = true;
    }  
  },
  mounted() {
    
  },
  methods: {
    onBack() {
      this.$router.replace("/");
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
.hd-title{
  color:#ffffff;
  position: relative;
  right: -30px;
}
</style>