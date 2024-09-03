// components/CVCard/index.ts
import { data } from '../../assets/data/cvdata'
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    userId: {
      type: Number,
      value: 0
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
          avatarSrc: data[this.properties.userId].avatarLink,
          name: data[this.properties.userId].name,
          linkedUserId: data[this.properties.userId].linkedUserId,
          isCV: data[this.properties.userId].isCV,
          isStaff: data[this.properties.userId].isStaff,
          sex: data[this.properties.userId].sex,
          voiceType: data[this.properties.userId].voiceType,
          soundPressure: data[this.properties.userId].soundPressure,
          voiceAge: data[this.properties.userId].voiceAge,
          demoLink: data[this.properties.userId].demoLink,
          description: data[this.properties.userId].description
        }
      )
    }
  }
})