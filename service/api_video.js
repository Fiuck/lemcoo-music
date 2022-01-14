// 引入请求对象
import request from "./request"

/**
 * 获取视频MV排行榜接口
 * @param {number} offset 偏移量
 * @param {string} area 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @param {number} limit 条数
 */
export function getTopMvs(offset, area = "", limit = 10) {
  return request.get("/top/mv", {
    offset: offset,
    area: area,
    limit: limit,
  })
}

/**
 * 获取视频MV的详情信息
 * @param {string} id MV的id
 */
export function getMvDetail(id) {
  return request.get("/mv/detail", {
    mvid: id,
  })
}

/**
 * 获取MV播放地址
 * @param {string} id mv id
 * @param {string} r 分辨率，默认为1080
 */
export function getMvUrl(id, r = 1080) {
  return request.get("/mv/url", {
    id: id,
    r: r,
  })
}

/**
 * 获取该视频的相关视频
 * @param {number} id
 */
export function getAllVideo(id) {
  return request.get("/related/allvideo", {
    id: id,
  })
}
