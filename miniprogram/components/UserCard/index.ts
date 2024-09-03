// components/CVCard/index.ts
import { UserData } from '../../assets/data/userdata'
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    userId: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatarSrc: '',
    name: '',
    linkedUserId: -1,
    isCV: false,
    isStaff: false,
    sex: '',
    voiceType: '',
    soundPressure: '',
    voiceAge: -1,
    demoLink: '',
    description: ''
  },
  ready() {
    this.setAttr()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setAttr() {
      this.setData(
        {
          avatarSrc: UserData[this.properties.userId].avatarLink,
          name: UserData[this.properties.userId].name,
          linkedUserId: UserData[this.properties.userId].linkedUserId,
          isCV: UserData[this.properties.userId].isCV,
          isStaff: UserData[this.properties.userId].isStaff,
          sex: UserData[this.properties.userId].sex,
          voiceType: UserData[this.properties.userId].voiceType,
          soundPressure: UserData[this.properties.userId].soundPressure,
          voiceAge: UserData[this.properties.userId].voiceAge,
          demoLink: UserData[this.properties.userId].demoLink,
          description: UserData[this.properties.userId].description
        }
      )
    },
    getUserDetails() {
      wx.setStorageSync("routeToUserId", this.properties.userId);
      wx.navigateTo({
        url: '/pages/detail/index',
      })
    }
  }
})