//index.js 
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    imgUrls: ["../image/mmexport1555635790356.jpg", "../image/mmexport1555635802266.jpg", "../image/mmexport1555635810842.jpg", "../image/mmexport1555635815502.jpg", "../image/mmexport1555635824094.jpg"],
    navs:[],
    inst:[],
    city:"岳阳市",
    num:1
  },
  changeOil: function (e) {
    console.log(e)
    this.setData({
      num: e.target.dataset.num
    })
  },
  onLoad: function () {
    var page = this;
    var navs = this.loadNavData();
    page.setData({ navs: navs });
    var inst = this.instData();
    page.setData({ inst: inst });
  },
  detailsBtn: function (e) {
    wx.navigateTo({
      url: '../details/details?img=' + this.data.inst[e.currentTarget.id].img + "&name=" + this.data.inst[e.currentTarget.id].name + "&shop=" + this.data.inst[e.currentTarget.id].shop + "&sold=" + this.data.inst[e.currentTarget.id].sold + "&price=" + this.data.inst[e.currentTarget.id].price
    })
  },
  navBtn: function () {
    wx.navigateTo({
      url: '../hansy/hansy'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '建材装饰',
      desc: '这里有好的板材',
      path: '/index/index'
    }
  },
  ss:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  bindBeginCityView: function () {
    wx.navigateTo({
      url: '../citys/citys?cityType=begin',
    })
  },
  onShow: function () {
    console.log(this.data.city)
    this.setData({ city: app.globalData.trainBeginCity })
  },
  instData: function () {
    var inst = [];
    var inst0 = new Object();
    inst0.img = '../image/in/15.jpg';
    inst0.name = '12公分大理石线条 石塑线条 背景墙线条';
    inst0.shop = '洞庭木业';//店名
    inst0.sold = 0;//已售件数
    inst0.price = 20;//价格
    inst0.evaluate = 0;//评价数
    inst0.praise = 0;//好评
    inst[0] = inst0;

    var inst1 = new Object();
    inst1.img = '../image/in/16.jpg';
    inst1.name = '铝扣板-青云紫瑞';
    inst1.shop = '洞庭木业';
    inst1.sold = 0;
    inst1.price = 55;
    inst1.evaluate = 0;
    inst1.praise = 0;
    inst[1] = inst1;

    var inst2 = new Object();
    inst2.img = '../image/in/17.jpg';
    inst2.name = '铝扣板-紫露凝香';
    inst2.shop = '洞庭木业';
    inst2.sold = 0;
    inst2.price = 55;
    inst2.evaluate = 0;
    inst2.praise = 0;
    inst[2] = inst2;

    var inst3 = new Object();
    inst3.img = '../image/in/18.jpg';
    inst3.name = '铝扣板-兰桂齐芳';
    inst3.shop = '洞庭木业';
    inst3.sold = 0;
    inst3.price = 55;
    inst3.evaluate = 0;
    inst3.praise = 0;
    inst[3] = inst3;

    var inst4 = new Object();
    inst4.img = '../image/in/19.jpg';
    inst4.name = '铝扣板-金星四射';
    inst4.shop = '洞庭木业';
    inst4.sold = 0;
    inst4.price = 55;
    inst4.evaluate = 0;
    inst4.praise = 0;
    inst[4] = inst4;

    var inst5 = new Object();
    inst5.img = '../image/in/20.jpg';
    inst5.name = '铝扣板-田园风光';
    inst5.shop = '洞庭木业';
    inst5.sold = 0;
    inst5.price = 55;
    inst5.evaluate = 0;
    inst5.praise = 0;
    inst[5] = inst5;

    var inst6 = new Object();
    inst6.img = '../image/in/21.jpg';
    inst6.name = '铝扣板-江山如画';
    inst6.shop = '洞庭木业';
    inst6.sold = 0;
    inst6.price = 55;
    inst6.evaluate = 0;
    inst6.praise = 0;
    inst[6] = inst6;

    var inst7 = new Object();
    inst7.img = '../image/in/22.jpg';
    inst7.name = '铝扣板-西雅图';
    inst7.shop = '洞庭木业';
    inst7.sold = 0;
    inst7.price = 55;
    inst7.evaluate = 0;
    inst7.praise = 0;
    inst[7] = inst7;

    var inst8 = new Object();
    inst8.img = '../image/in/23.jpg';
    inst8.name = '铝扣板-日出东方';
    inst8.shop = '洞庭木业';
    inst8.sold = 0;
    inst8.price = 55;
    inst8.evaluate = 0;
    inst8.praise = 0;
    inst[8] = inst8;

    var inst9 = new Object();
    inst9.img = '../image/in/24.jpg';
    inst9.name = '铝扣板-万象格林';
    inst9.shop = '洞庭木业';
    inst9.sold = 0;
    inst9.price = 55;
    inst9.evaluate = 0;
    inst9.praise = 0;
    inst[9] = inst9;

    var inst10 = new Object();
    inst10.img = '../image/in/25.jpg';
    inst10.name = '铝扣板-水月洞天';
    inst10.shop = '洞庭木业';
    inst10.sold = 0;
    inst10.price = 55;
    inst10.evaluate = 0;
    inst10.praise = 0;
    inst[10] = inst10;

    var inst11 = new Object();
    inst11.img = '../image/in/26.jpg';
    inst11.name = '铝扣板-芳菲伊人';
    inst11.shop = '洞庭木业';
    inst11.sold = 0;
    inst11.price = 55;
    inst11.evaluate = 0;
    inst11.praise = 0;
    inst[11] = inst11;

    var inst12 = new Object();
    inst12.img = '../image/in/27.jpg';
    inst12.name = '铝扣板-紫气东来';
    inst12.shop = '洞庭木业';
    inst12.sold = 0;
    inst12.price = 55;
    inst12.evaluate = 0;
    inst12.praise = 0;
    inst[12] = inst12;

    var inst13 = new Object();
    inst13.img = '../image/in/28.jpg';
    inst13.name = '铝扣板-鸿运当头';
    inst13.shop = '洞庭木业';
    inst13.sold = 0;
    inst13.price = 55;
    inst13.evaluate = 0;
    inst13.praise = 0;
    inst[13] = inst13;
    return inst;
  },
  loadNavData: function () {
    var navs = [];
    var nav0 = new Object();
    nav0.img = '../image/3.jpg';
    nav0.name = '板材';
    navs[0] = nav0;

    var nav1 = new Object();
    nav1.img = '../image/4.jpg';
    nav1.name = '五金配件';
    navs[1] = nav1;

    var nav2 = new Object();
    nav2.img = '../image/5.jpg';
    nav2.name = '生态线条';
    navs[2] = nav2;

    var nav3 = new Object();
    nav3.img = '../image/6.jpg';
    nav3.name = '木线条';
    navs[3] = nav3;

    var nav4 = new Object();
    nav4.img = '../image/7.jpg';
    nav4.name = '胶类';
    navs[4] = nav4;
    return navs;
  }
})
