<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in cardList" :key="index" @click.stop="onLink(item)">
        <a-card hoverable style="width: 150px;border-radius: 10px;">
          <img slot="cover" :src="item.pic" class="card-img" />
          <a-card-meta :title="item.title">
            <template slot="description">{{item.msg}}</template>
          </a-card-meta>
        </a-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cardList: [
        {
          pic:
            "http://static.gamemm.com/upload/avatar/201912/30/16201_1577688838.jpg",
          title: "圆环倒计时",
          msg: "svg css js",
          path: "/circle"
        },
        {
          pic:
            "http://static.gamemm.com/upload/avatar/202004/29/90730_1588098209.jpg",
          title: "聚光灯效果",
          msg: "css",
          path: "/spotlight"
        },{
          pic:"http://static.gamemm.com/upload/avatar/201909/16/124469_1568632555.jpg",
          title: "翻牌效果",
          msg: "css",
          path: "/turncard"
        },{
          pic:"http://static.gamemm.com/upload/avatar/202003/24/31496_1585013160.jpg",
          title: "滚动计数器",
          msg: "css js",
          path: "/counter"
        },
        {
          pic:"http://static.gamemm.com/upload/avatar/201908/22/87756_1566450714.jpg",
          title:"打勾效果",
          msg: "svg css",
          path:'/tick'
        },
        {
          pic:"http://static.gamemm.com/upload/avatar/201909/4/111789_1567573757.jpg",
          title:"食物卡片",
          msg: "css js",
          path:'/foodcard'
        }]
    };
  },
  components: {},
  methods: {
    onLink(obj) {
      this.$store
      .dispatch('setTitle',obj.title)
      .then(()=>{});
      this.$router.push(obj.path);
    }
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
.card-img{
  width: 150px;
  height:150px;
  object-fit: cover;
  transition: .2s all;
}
ul li:hover .card-img{
  filter: brightness(1.1);
}
</style>
