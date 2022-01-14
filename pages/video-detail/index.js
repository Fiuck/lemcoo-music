// pages/video-detail/index.js
// 引入api接口
import { getMvDetail, getMvUrl, getAllVideo } from "../../service/api_video"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    // mv详情
    detail: {},
    // mv参数信息
    mvInfo: {},
    // 相关视频列表
    videoList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取路由携带的id
    let id = options.id
    // 获取请求数据
    this.getPageData(id)
  },

  /**
   * 获取请求数据
   * @param {number} id
   */
  getPageData: function (id) {
    // 请求视频信息
    getMvDetail(id).then((res) => {
      this.setData({ detail: res.data })
    })
    // 获取MV地址
    getMvUrl(id).then((res) => {
      this.setData({ mvInfo: res.data })
    })
    // 获取相关视频
    getAllVideo(id).then((res) => {
      this.setData({ videoList: res.data })
    })
  },

  /**
   * 点击视频事件
   * @param {*} event
   */
  clickVideo: function (event) {
    console.log(event)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
