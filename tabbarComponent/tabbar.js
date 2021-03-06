// tabBarComponent/tabBar.js


import {
  Storage
} from '../utils/storage.js'
const app = getApp();

const storage = new Storage()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "pages/list/list",
            "iconPath": "/tabbarComponent/icon/icon_home.png",
            "selectedIconPath": "/tabbarComponent/icon/icon_home_HL.png",
            "text": "信列"
          },
          {
            "pagePath": "pages/add/add",
            "iconPath": "/tabbarComponent/icon/icon_release.png",
            "isSpecial": true,
            "text": "添加"
          },
          {
            "pagePath": "pages/home/home",
            "iconPath": "/tabbarComponent/icon/icon_mine.png",
            "selectedIconPath": "/tabbarComponent/icon/icon_mine_HL.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showF: false,
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
 
    /**
 * 打开添加信条
 */
    showForm(event) {
      if(!storage.all('lover')){
        this._showError("请先到我的页面，初始化匹配码")
        return
      }
      this.setData({
        showF: !this.data.showF
      })
    },

    /**
     * 把信息给list
     */
    informList(){
      this.triggerEvent('formList')
    },
    _showError(content) {
      wx.lin.showMessage({
        type: 'warning',
        content: content,
        duration: 2000,
        icon: 'warning'
      })
    },

  }
})
