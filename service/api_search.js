import request from "./request"

/**
 * 获取热门搜索列表
 */
export function searchHot() {
  return request.get("/search/hot")
}

/**
 * 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * @param {string} keywords 关键词
 * @param {string} type 如果传 'mobile' 则返回移动端数据
 */
export function getSearchSuggest(keywords, type = "mobile") {
  return request.get("/search/suggest", {
    keywords: keywords,
    type: type,
  })
}

/**
 *
 * @param {string} keywords 关键词
 * @param {number} limit 返回数量 , 默认为 30
 * @param {number} offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {number} type 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV,
 * 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
export function search(keywords, limit = 10, offset = 0, type = 1) {
  return request.get("/search", {
    keywords: keywords,
    limit: limit,
    offset: offset,
    type: type,
  })
}
