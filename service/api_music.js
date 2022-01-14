import request from "./request"

/**
 * 获取轮播图数据
 * @param {number} type 资源类型，默认为0,0-pc,1-android,2-iphone,3-ipad
 */
export function getBanner(type = 0) {
  return request.get("/banner", {
    type: type,
  })
}

/**
 * 获取不同排行榜的数据
 * @param {*} idx 榜单id，0-飙升，1-热门，2-新歌，3-原创
 */
export function getMusicTop(idx = 0) {
  return request.get("/top/list", {
    idx: idx,
  })
}

/**
 * 获取网友精选歌单
 * @param {string} cat 标签，比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param {number} limit 取出歌单数量 , 默认为 50
 * @param {number} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 */
export function getPlayList(cat = "全部", limit = 10, offset = 0) {
  return request.get("/top/playlist", {
    cat: cat,
    limit: limit,
    offset: offset,
  })
}

/**
 * 获取热门歌单分类，包含 category 信息
 */
export function getPlayListHot() {
  return request.get("/playlist/hot")
}

/**
 * 获取歌单详情动态部分，如评论数，是否收藏，播放数
 * @param {number} id
 */
export function getMusicDetail(id) {
  return request.get("/playlist/detail/dynamic", {
    id: id,
  })
}
