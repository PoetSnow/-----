// pages/kuaidi/index.js
const kuaidBase = getApp();

Page({

data:{
  ResultData:[],
  LogisticCode:"",
  ShipperCode:""
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  //输入值
  LogisticCodeInput:function(e)
  {
    this.setData({
      LogisticCode: e.detail.value,
    })  
  },
  //输入值
  ShipperCodeInput:function(e)
  {
    this.setData({
      ShipperCode: e.detail.value,
    })  
  },
  click:function(e)
  {
    var that = this;
    var sendata = that.SendData;//实例化数据    
    sendata.type = that.data.ShipperCode;
    sendata.postid = that.data.LogisticCode;
console.log(sendata);
    wx.request({
      url: kuaidBase.globalData.kuaidiBae,
      data: sendata,
      method: "get",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"  //post
      },
      complete: function (res) {       
        if (res == null || res.data == null) {
          reject(new Error('网络请求失败'))
        }
      },
      success: function (res) {
        console.log(res);
        if (res.data.message =="ok" ) {  
          that.setData({
            ResultData: res.data.data,
          })     
        }
      }
    })
  },



  //请求的结果
  SendData:{  
    type: "",  //快递码
    postid: "",  //快递单号
    id: "" , //
    valicode:"",
    temp:""
  }
})