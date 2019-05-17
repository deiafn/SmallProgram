// pages/accounts/accounts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      img: e.img,
      num: e.num,
      shop: e.shop,
      price: e.price,
      sum: e.price * e.num
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // wx.reLaunch({
    //   url: '../see/see?id=' + 1 + '&img=' + this.data.img + "&shop=" + this.data.shop + "&num=" + this.data.num + "&price=" + this.data.price
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})