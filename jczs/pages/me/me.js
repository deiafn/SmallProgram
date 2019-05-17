// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
  },
  balance: function () {
    wx.navigateTo({
      url: '../balance/balance',
    })
  },
  collection: function () {
    wx.navigateTo({
      url: '../collection/collection',
    })
  },
  coupon: function () {
    wx.navigateTo({
      url: '../coupon/coupon',
    })
  },
  vip: function () {
    wx.navigateTo({
      url: '../vip/vip',
    })
  },
  integral: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  gift: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  reservation: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  evaluate: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  distributor: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  assemble: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  hotel: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  restaurant: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  subcard: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  automobile: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  supplydemand: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  live: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  customer: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  telephone: function () {
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  see: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../see/see?id=' + id,
    })
  },
  refund: function () {
    wx.navigateTo({
      url: '../refund/refund',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})