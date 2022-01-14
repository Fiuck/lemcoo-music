// pages/home-video/index.js
// 引入视频api接口
import { getTopMvs } from "../../service/api_video"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMvs: [],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载(created)
   */
  onLoad: function (options) {
    // 获取首页视频排行榜信息
    this.getTopMvData(0)
  },

  /**
   * 获取视频排行数据
   * @param {number} offset 偏移量
   */
  getTopMvData: async function (offset) {
    // 判断是否还有数据返回
    if (!this.data.hasMore && offset !== 0) return

    // 获取数据
    const res = await getTopMvs(offset)
    let list = this.data.topMvs
    if (offset === 0) {
      list = res.data
    } else {
      list = list.concat(res.data)
    }
    // 设置数据
    this.setData({ topMvs: list })
    this.setData({ hasMore: res.hasMore })

    // 关闭上拉刷新
    if (offset === 0) {
      wx.stopPullDownRefresh()
    }
  },

  /**
   * mv点击事件
   * @param {event} event
   */
  handleVideoClickItem: function (event) {
    // 获取id
    let id = event.currentTarget.dataset.item.id
    // 跳转路由
    wx.navigateTo({
      url: `/pages/video-detail/index?id=${id}`,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getTopMvData(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getTopMvData(this.data.topMvs.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
