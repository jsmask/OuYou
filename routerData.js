function Queue(data){
    this.list = [];
    this.add = obj => {
        this.list.push(obj);
        return this;
    }
};

let queue = new Queue();

queue.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201912/30/16201_1577688838.jpg",
    title: "圆环倒计时",
    desc: "svg css js",
    path: "/circle"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202004/29/90730_1588098209.jpg",
    title: "聚光灯效果",
    desc: "css",
    path: "/spotlight"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201909/16/124469_1568632555.jpg",
    title: "翻牌效果",
    desc: "css",
    path: "/turncard"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202003/24/31496_1585013160.jpg",
    title: "滚动计数器",
    desc: "css js",
    path: "/counter"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/22/87756_1566450714.jpg",
    title: "打勾效果",
    desc: "svg css",
    path: "/tick"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201909/4/111789_1567573757.jpg",
    title: "食物卡片",
    desc: "css js",
    path: "/foodcard"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/25/83815_1566712590.jpg",
    title: "折线动画",
    desc: "svg css js",
    path: "/brokenline"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201908/22/113157_1566462721.jpg",
    title: "柴犬动画",
    desc: "css",
    path: "/dog"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/201905/16/78664_1557969786.jpg",
    title: "发光的404",
    desc: "css",
    path: "/notfount"
})
.add({
    pic:
      "http://static.gamemm.com/upload/avatar/202003/3/193807_1583172948.jpg",
    title: "伪3D研究员",
    desc: "canvas",
    path: "/researcher"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/202003/12/205351_1584022332.jpg",
  title: "关键词轮播效果",
  desc: "css js",
  path: "/rotateinput"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/201812/11/43606_1544501375.jpg",
  title: "平面头像[男]",
  desc: "css",
  path: "/man"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/201908/28/110667_1566991919.jpg",
  title: "水滴充电效果",
  desc: "css",
  path: "/drop"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/202007/13/275322_1594647296.jpg",
  title: "信封",
  desc: "css",
  path: "/envelope"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/201910/20/150593_1571567562.jpg",
  title: "小熊",
  desc: "css",
  path: "/bear"
})
.add({
  pic:
    "https://ucavatar2.tuwan.com/data/avatar/003/03/74/79_avatar_large.jpg",
  title: "太阳加载效果",
  desc: "css",
  path: "/sunload"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/202003/10/203822_1583825955.jpg",
  title: "像素大白",
  desc: "css",
  path: "/baymax"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/202003/27/201646_1585247588.jpg",
  title: "日系圆扇",
  desc: "css",
  path: "/fan"
})
.add({
  pic:
    "http://static.gamemm.com/upload/avatar/202004/13/26026_1586725021.jpg",
  title: "狮子",
  desc: "css",
  path: "/lion"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/201910/9/142582_1570632475.jpg",
  title:"眨眼密码框",
  desc:"svg css js",
  path:"/eyepassword"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/201908/29/116589_1567064613.jpg",
  title:"龙珠雷达",
  desc:"css",
  path:"/dragon-ball-radar"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/202006/5/269117_1591337435.jpg",
  title:"龙蛋",
  desc:"css",
  path:"/dragon-egg"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/201909/22/131367_1569134371.jpg",
  title:"鱼塘",
  desc:"css js",
  path:"/fish",
  dir:"normal"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/201909/17/95309_1568653821.jpg",
  title:"波纹",
  desc:"scss",
  path:"/moire"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/202002/28/190165_1582873619.jpg",
  title:"超级喷火龙Y[卡牌]",
  desc:"scss",
  path:"/super-dragon-y"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/201910/22/74801_1571736628.jpg",
  title:"波浪",
  desc:"css",
  path:"/wave"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/202008/19/110154_1597769728.jpg",
  title:"快餐动画",
  desc:"css",
  path:"/fast-food"
})
.add({
  pic:"http://static.gamemm.com/upload/avatar/202005/12/228568_1589270529.jpg",
  title:"红心动画",
  desc:"css svg",
  path:"/heart"
})




export default queue.list;
