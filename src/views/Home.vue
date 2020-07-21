<template>
  <div class="home" ref="home">
    <ul>
      <li v-for="(item,index) in cardList" :key="index" @click.stop="onLink(item)">
        <a-card hoverable style="width: 150px;border-radius: 10px;">
          <img slot="cover" :src="item.pic" class="card-img" />
          <a-card-meta :title="item.title">
            <template slot="description">{{item.desc}}</template>
          </a-card-meta>
        </a-card>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "../../routerData";

export default {
  name: "home",
  data() {
    return {
      cardList: [...data],
      scrollTop:0
    };
  },
  components: {},
  methods: {
    onLink(obj) {
      this.$store.dispatch("setTitle", obj.title).then(() => {});
      this.$router.push(obj.path);
    },
    onScroll(){
      this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    }
  },
  activated() {
    document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop;
    document.addEventListener("scroll",this.onScroll);
  },
  deactivated() {
    document.removeEventListener("scroll",this.onScroll);
  }
};
</script>

<style scoped>
ul {
  display: flex;
  padding: 10px 16px;
  flex-flow: row wrap;
}
ul li {
  break-inside: avoid;
  margin: 10px 10px;
}
.card-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  transition: 0.2s all;
}
ul li:hover .card-img {
  filter: brightness(1.1);
}
</style>
