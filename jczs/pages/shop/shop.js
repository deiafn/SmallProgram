// pages/shop/shop.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    CheckAll: true,
    shopping: [],
    total:0
  },
  //全选 
  select: function () {
    var CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll
    this.setData({
      CheckAll: CheckAll
    })
  },
  //清空
  empty: function () {
    this.setData({
      shopping: []
    });
    this.getsumTotal()
  },
  onShow: function () {
    this.data.shopping = app.data.s.concat(this.data.shopping);
    this.setData({
      shopping: this.data.shopping
    });
    this.getsumTotal()
  },
  onUnload: function () {
  //改返回上一页
    wx.reLaunch({
      url: '../index/index'
    })
  },
  //减
  reduce: function (e) {
    var shopping = this.data.shopping  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    var num = shopping[index].num  //获取购物车每件商品数量
    if (num == 1) {
      num--
      shopping[index].num = 1
    } else {
      num--
      shopping[index].num = num;
    }
    this.setData({
      shopping: shopping
    });
    this.getsumTotal()
  },
  //加
  plus: function (e) {
    console.log(e)
    var shopping = this.data.shopping
    var index = e.currentTarget.dataset.index
    var num = shopping[index].num
    num++
    shopping[index].num = num;
    this.setData({
      shopping: shopping
    });
    this.getsumTotal()
  },
  //合计
  getsumTotal: function () {
    var sum = 0
    for (var i = 0; i < this.data.shopping.length; i++) {
      sum += this.data.shopping[i].num * this.data.shopping[i].price
    }
    //更新数据
    this.setData({
      total: sum
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})