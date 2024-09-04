// pages/search/index.ts
import { trendingCV, trendingStaff } from '../../assets/data/trendingdata'
import { UserData } from '../../assets/data/userdata'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    trendingCV,
    //currentlySearching字段代表当前tab页，0为找CV功能，1为找STAFF功能
    currentlySearching: 0,
    trendingStaff,
    UserData,
    active: 0,
    voiceAgeShow: false,
    ageFieldValue: [20, 80],
    sexFieldValue: null,
    functionTypeValue: null,
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
    functionTypeOptions: [
      {
        text: '策划',
        value: '策划',
        children: [
          {
            text: '歌策',
            value: '歌策',
          },
          {
            text: '剧策',
            value: '剧策',
          }
        ]
      },
      {
        text: '编剧',
        value: '编剧',
      },
      {
        text: '导演',
        value: '导演'
      },
      {
        text: '后期',
        value: '后期',
        children: [
          {
            text: '歌后',
            value: '歌后',
          },
          {
            text: '剧后',
            value: '剧后',
          }
        ]
      },
      {
        text: '题字',
        value: '题字'
      },
      {
        text: '曲作',
        value: '曲作'
      },
      {
        text: '词作',
        value: '词作'
      },
    ],
    functionTypeShow: false,
    voicePressureShow: false,
    voicePressureValue: null,
    genreShow: false,
    genreValue: null,
    genreOptions: [
      {
        text: '纯爱',
        value: '纯爱',
        children: [
          {
            text: '古风纯爱',
            value: '古风纯爱',
          },
          {
            text: '现代纯爱',
            value: '现代纯爱',
          }
        ]
      },
      {
        text: '双女主',
        value: '双女主',
        children: [
          {
            text: '古风双女主',
            value: '古风双女主',
          },
          {
            text: '现代双女主',
            value: '现代双女主',
          }
        ]
      },
      {
        text: '言情',
        value: '言情',
        children: [
          {
            text: '古风言情',
            value: '古风言情',
          },
          {
            text: '现代言情',
            value: '现代言情',
          }
        ]
      },
      {
        text: '全年龄',
        value: '全年龄',
        children: [
          {
            text: '古风全年龄',
            value: '古风全年龄',
          },
          {
            text: '现代全年龄',
            value: '现代全年龄',
          }
        ]
      }
    ]
  },
  onGenreFinish(event){
    this.setData({genreValue:event.detail.value,genreShow:false})
  },
  onFunctionTypeClick() {
    this.setData({ functionTypeShow: true })
  },
  onFunctionTypeFinish(event) {
    this.setData({ functionTypeShow: false, functionTypeValue: event.detail.value })
  },
  onVoiceAgeClick() {
    this.setData({ voiceAgeShow: true })
  },
  onVoiceAgeClose() {
    this.setData({ voiceAgeShow: false })
  },
  onTabChange(event) {
    this.setData({ currentlySearching: event.detail.index })
  },
  onAgeChange(event) {
    console.log(event)
    this.setData({ ageFieldValue: event.detail })
  },
  onDrag(event) {
    this.setData({
      currentValue: event.detail.value,
    });
  },
  onSexClose() {

  },
  onSexFinish(event) {
    this.setData({ sexFieldValue: event.detail.value, sexSelectionShow: false })
  },
  onGenreClick() {
    this.setData({ genreShow: true })
  },
  onVoicePressureClick() {
    this.setData({ voicePressureShow: true })
  },
  onSexClick() {
    this.setData({ sexSelectionShow: true })
  },
  onSelectTrending(event) {
    wx.setStorageSync('routeToUserId', event.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/detail/index`,
    })
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
    this.setData({ voicePressureShow: false })
  },
  onVoicePressureFinish(event) {
    this.setData({ voicePressureValue: event.detail.value, voicePressureShow: false })
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