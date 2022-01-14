// pages/home-music/index.js
import {
  getBanner,
  getMusicTop,
  getPlayList,
  getPlayListHot,
  getMusicDetail,
} from "../../service/api_music"
// 查询组件矩形信息
import queryRect from "../../utils/query-rect"
// 节流函数
import throttle from "../../utils/throttle"
// 节流后的函数
const throttleQueryRect = throttle(queryRect)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // swiper组件的高度
    swiperHeightLoaded: 50,
    // 轮播图列表
    bannerList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求页面的数据
    this.getPageData()
  },

  // 获取网络请求
  getPageData: function () {
    // 获取轮播图数据
    getBanner().then((res) => {
      this.setData({ bannerList: res.banners })
    })
  },

  /**
   * 事件处理，点击搜索框，跳转搜索详情
   */
  handleSearchClick: function () {
    wx.navigateTo({
      url: "/pages/search-detail/index",
    })
  },

  /**
   * 图片组件加载完成事件，将图片组件的高度赋值给swiper容器的高度
   */
  handleImgLoaded: function () {
    // 获取图片组件矩形信息
    throttleQueryRect(".swiper-image").then(res => {
      const rect = res[0]
      this.setData({ swiperHeightLoaded: rect.height, })
    })

  },
})
