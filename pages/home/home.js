// pages/home/home.js
import {
  Storage
} from '../../utils/storage.js'

const app = getApp();
const storage = new Storage()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    alone:'waterbang',//每个人的匹配码
  },
/**
 * 发布list更新消息
 */
  addCache(){
    app.globalData.listState = true
  },
  /**
   * header动画
   */
  trigger(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
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
    console.log("下拉")
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