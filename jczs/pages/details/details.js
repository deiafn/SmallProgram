//5 pages/details/details.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inHide:true,
    num: 1,
    sid: app.data.sid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      img: e.img,
      name: e.name,
      shop: e.shop,
      sold: e.sold,
      price: e.price
    });
  },
  shoppingCart: function () {
    this.setData({
      inHide: false
    })
  },
  shoppingClose: function () {
    this.setData({
      inHide: true
    })
  },
  shoppingDete: function (e) {
    app.numbers = this.data.num
    wx.showToast({
      title: "加入购物车成功！",
      duration: 1000
    })
    this.setData({
      inHide: true,
    })
    app.data.s[app.data.sid] = {
      id: app.data.sid,
      img: this.data.img,
      name: this.data.name,
      shop: this.data.shop,
      sold: this.data.sold,
      price: this.data.price,
      num: this.data.num
    }
    console.log(app.data.s)
    app.data.sid++;
  },
  reduce: function (){
    var num = this.data.num;
    if (num > 1) {
      num--; 
    }
    this.setData({
      num: num
    });
  },
  plus: function () {
    var num = this.data.num;
    num++;
    this.setData({
      num: num
    }); 
  },
  purchase:function(){
    wx.navigateTo({
      url: '../accounts/accounts?img=' + this.data.img + "&shop=" + this.data.shop + "&num=" + this.data.num + "&price=" + this.data.price,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})