// pages/shopping/shopping.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    onSrc:"../image/1.gif",
    onText: "更多服务登录后即可体验",
    inS1: false
  },
  navBtn:function(){
    this.setData({
      onSrc: "../image/2.gif",
      onText: "购物车中暂无商品",
      inShow: true
    })
  },
  onShow: function () {
    if (app.numbers != null) {
      this.setData({
        inS1: true
      }),
      wx.navigateTo({
        url: '../shop/shop',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})