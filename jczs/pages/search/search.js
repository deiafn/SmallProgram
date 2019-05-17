// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    isT: true,
    inst: [],
    num: 1
  },
  changeOil: function (e) {
    console.log(e)
    this.setData({
      num: e.target.dataset.num
    })
  },

  ss: function () {
    this.setData({
      isT:false
    })
  },

  detailsBtn: function (e) {
    wx.navigateTo({
      url: '../details/details?img=' + this.data.inst[e.currentTarget.id].img + "&name=" + this.data.inst[e.currentTarget.id].name + "&shop=" + this.data.inst[e.currentTarget.id].shop + "&sold=" + this.data.inst[e.currentTarget.id].sold + "&price=" + this.data.inst[e.currentTarget.id].price
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    var inst = this.instData();
    page.setData({ inst: inst });
  },
  instData: function () {
    var inst = [];
    var inst0 = new Object();
    inst0.img = '../image/in/1.jpg';
    inst0.name = '朝氏板材环保E0级17mm杂木芯生态板免漆板红豆香思';
    inst0.shop = '洞庭木业';//店名
    inst0.sold = 0;//已售件数
    inst0.price = 248;//价格
    inst0.evaluate = 0;//评价数
    inst0.praise = 0;//好评
    inst[0] = inst0;

    var inst1 = new Object();
    inst1.img = '../image/in/2.jpg';
    inst1.name = '韩氏板材环保E0级17mm杉木芯生态板免漆板碧玉兰';
    inst1.shop = '洞庭木业';
    inst1.sold = 0;
    inst1.price = 220;
    inst1.evaluate = 0;
    inst1.praise = 0;
    inst[1] = inst1;

    var inst2 = new Object();
    inst2.img = '../image/in/3.jpg';
    inst2.name = '韩氏板材环保E0级17mm杂木芯生态板免漆板白檀';
    inst2.shop = '洞庭木业';
    inst2.sold = 0;
    inst2.price = 220;
    inst2.evaluate = 0;
    inst2.praise = 0;
    inst[2] = inst2;

    var inst3 = new Object();
    inst3.img = '../image/in/4.jpg';
    inst3.name = '韩氏板材环保E0级17mm杉木芯生态板免漆板美国白橡';
    inst3.shop = '洞庭木业';
    inst3.sold = 0;
    inst3.price = 220;
    inst3.evaluate = 0;
    inst3.praise = 0;
    inst[3] = inst3;

    var inst4 = new Object();
    inst4.img = '../image/in/5.jpg';
    inst4.name = '龙牌纸面石膏板吊顶隔墙石膏板9.5mm';
    inst4.shop = '洞庭木业';
    inst4.sold = 0;
    inst4.price = 30;
    inst4.evaluate = 0;
    inst4.praise = 0;
    inst[4] = inst4;

    var inst5 = new Object();
    inst5.img = '../image/in/6.jpg';
    inst5.name = '龙牌耐水石膏板9.5mm吊顶别墅装修隔墙材料环保';
    inst5.shop = '洞庭木业';
    inst5.sold = 0;
    inst5.price = 38;
    inst5.evaluate = 0;
    inst5.praise = 0;
    inst[5] = inst5;

    var inst6 = new Object();
    inst6.img = '../image/in/7.jpg';
    inst6.name = '湘福庭杉木18mm免漆板生态板奥运象木';
    inst6.shop = '洞庭木业';
    inst6.sold = 0;
    inst6.price = 155;
    inst6.evaluate = 0;
    inst6.praise = 0;
    inst[6] = inst6;

    var inst7 = new Object();
    inst7.img = '../image/in/8.jpg';
    inst7.name = '湘福庭杉木18mm免漆板生态板雨丝银象';
    inst7.shop = '洞庭木业';
    inst7.sold = 0;
    inst7.price = 155;
    inst7.evaluate = 0;
    inst7.praise = 0;
    inst[7] = inst7;

    var inst8 = new Object();
    inst8.img = '../image/in/9.jpg';
    inst8.name = '湘福庭杉木18mm免漆板生态板木克布纹';
    inst8.shop = '洞庭木业';
    inst8.sold = 0;
    inst8.price = 155;
    inst8.evaluate = 0;
    inst8.praise = 0;
    inst[8] = inst8;

    var inst9 = new Object();
    inst9.img = '../image/in/10.jpg';
    inst9.name = '湘福庭杉木18mm免漆板生态板金秋送爽';
    inst9.shop = '洞庭木业';
    inst9.sold = 0;
    inst9.price = 155;
    inst9.evaluate = 0;
    inst9.praise = 0;
    inst[9] = inst9;
    return inst;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})