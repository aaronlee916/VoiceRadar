// pages/search/index.ts
import { trendingCV, trendingStaff } from '../../assets/data/trendingdata'
import { UserData } from '../../assets/data/userdata'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    trendingCV,
    currentValue: [0, 50],
    //currentlySearching字段代表当前tab页，0为找CV功能，1为找STAFF功能
    currentlySearching: 0,
    trendingStaff,
    UserData,
    active: 0,
    voiceAgeShow: false,
    sexFieldValue: null,
    sexSelectionShow: false,
    filterOptions: [],
    sexOptions: [
      {
        text: '男',
        value: '男'
      },
      {
        text: '女',
        value: '女'
      }
    ],
    voicePressureOptions: [
      {
        text: '大嗓',
        value: '大嗓'
      },
      {
        text: '小嗓',
        value: '小嗓'
      }
    ],
    voicePressureShow: false,
    voicePressureValue:null
  },
  onVoiceAgeClick() {
    this.setData({ voiceAgeShow: true })
  },
  onChange(event) {
    this.setData({ currentlySearching: event.detail.index })
  },
  onDrag(event) {
    this.setData({
      currentValue: event.detail.value,
    });
  },
  onSexClose() {

  },
  onSexFinish(event) {
    this.setData({sexFieldValue:event.detail.value,sexSelectionShow:false})
  },
  onVoicePressureClick() {
    this.setData({ voicePressureShow: true })
  },
  onSexClick() {
    this.setData({ sexSelectionShow: true })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  onVoicePressureClose() {
    this.setData({voicePressureShow:false})
  },
  onVoicePressureFinish(event){
    this.setData({voicePressureValue:event.detail.value,voicePressureShow:false})
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})