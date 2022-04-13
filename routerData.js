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
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png",
    title: "圆环倒计时",
    desc: "svg css js",
    path: "/circle"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png",
    title: "聚光灯效果",
    desc: "css",
    path: "/spotlight"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png",
    title: "翻牌效果",
    desc: "css",
    path: "/turncard"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/6b55babb3825ef9fa9e5d9ff44a14bdb8406ce97.png",
    title: "滚动计数器",
    desc: "css js",
    path: "/counter"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png",
    title: "打勾效果",
    desc: "svg css",
    path: "/tick"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png",
    title: "食物卡片",
    desc: "css js",
    path: "/foodcard"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png",
    title: "折线动画",
    desc: "svg css js",
    path: "/brokenline"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/ca3db4aad5c85a525d9be86852b26db1db7a22c0.png",
    title: "柴犬动画",
    desc: "css",
    path: "/dog"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png",
    title: "发光的404",
    desc: "css",
    path: "/notfount"
})
.add({
    pic:
      "https://www.pokemon.cn/play/resources/pokedex/img/pm/2fd12098f15628cce80d411e090189aeb7d758ff.png",
    title: "伪3D研究员",
    desc: "canvas",
    path: "/researcher"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png",
  title: "关键词轮播效果",
  desc: "css js",
  path: "/rotateinput"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png",
  title: "平面头像[男]",
  desc: "css",
  path: "/man"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png",
  title: "水滴充电效果",
  desc: "css",
  path: "/drop"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/00186af714a048895ba8116e71b08671c3cfb8f5.png",
  title: "信封",
  desc: "css",
  path: "/envelope"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/50eba0f85c4e9a039be078e7de0b10acc7323264.png",
  title: "小熊",
  desc: "css",
  path: "/bear"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/68f0cec6bcba20a0c53db3d8cfce81bd319d2c82.png",
  title: "太阳加载效果",
  desc: "css",
  path: "/sunload"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/05fd4676fa4a4b58288510a97a5211e066e02464.png",
  title: "像素大白",
  desc: "css",
  path: "/baymax"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/eacd20285cb634ba9fea41fc0fa13871c2fcbc66.png",
  title: "日系圆扇",
  desc: "css",
  path: "/fan"
})
.add({
  pic:
    "https://www.pokemon.cn/play/resources/pokedex/img/pm/b76026363e301dbd8ac3f084e7d242232c46c95f.png",
  title: "狮子",
  desc: "css",
  path: "/lion"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/5ae74d403ec682eaf13e066850afd4b0c20d85f7.png",
  title:"眨眼密码框",
  desc:"svg css js",
  path:"/eyepassword"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/dd41f31a3c97f1f9d998361b125362584873157b.png",
  title:"龙珠雷达",
  desc:"css",
  path:"/dragon-ball-radar"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/70f4206271b72492c9ba71d708d6183a80ba0e96.png",
  title:"龙蛋",
  desc:"css",
  path:"/dragon-egg"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/e12ce48ab99b2df6fbbc1e97038c4f6e192d09d7.png",
  title:"鱼塘",
  desc:"css js",
  path:"/fish",
  dir:"normal"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/0e7c6e616404c683f00701b591eeab56e465641a.png",
  title:"波纹",
  desc:"scss",
  path:"/moire"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/a2935587b7c61e6e6da88da3578d700c133246e5.png",
  title:"超级喷火龙Y[卡牌]",
  desc:"scss",
  path:"/super-dragon-y"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/01e13954dff668c1420407c98b308c81b83f6dda.png",
  title:"波浪",
  desc:"css",
  path:"/wave"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/dd6ab4ce8e7d05fb74e50cf66764e3ed8e11a097.png",
  title:"快餐动画",
  desc:"css",
  path:"/fast-food"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/3e4b38ab7545ebd938154d9aed9502cb068569d6.png",
  title:"红心动画",
  desc:"css svg",
  path:"/heart"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/3567693e3479fb0cf15b9ec84ee8a033aa7b4310.png",
  title:"滑动渐变",
  desc:"scss vue",
  path:"/fadingtext"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/e97c62e4e4b46017be60806d00f4d389d003f115.png",
  title:"鬼吃糖动画",
  desc:"scss",
  path:"/halloween"
})
.add({
  pic:"https://www.pokemon.cn/play/resources/pokedex/img/pm/a30454b7040a4a517bfe0914777e2e7c045f6c65.png",
  title:"流行盒子",
  desc:"scss svg",
  path:"/flybox"
})



export default queue.list;
