// components/CVCard/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    user: {
      type: Object,
      value: {
        name: '',
        linkedUserId: -1,
        isCV: false,
        isStaff: false,
        sex: '',
        voiceType: '',
        soundPressure: '',
        voiceAge: -1,
        demoLink: '',
        description: '',
        genre: [],
        functionType: ['']
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    userId:-1,
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
    description: '',
    genre: [],
    functionType: ['']
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
          userId:this.properties.user.id,
          avatarSrc: this.properties.user.avatarLink,
          name: this.properties.user.name,
          linkedUserId: this.properties.user.linkedUserId,
          isCV: this.properties.user.isCV,
          isStaff: this.properties.user.isStaff,
          sex: this.properties.user.sex,
          voiceType: this.properties.user.voiceType,
          soundPressure: this.properties.user.soundPressure,
          demoLink: this.properties.user.demoLink,
          description: this.properties.user.description,
          genre: this.properties.user.genre,
          functionType: this.properties.user.functionType
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