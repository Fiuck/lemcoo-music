// 查询组件矩形信息
export default function (selector) {
  return new Promise((resolve) => {
    // 创建一个查询器对象
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    // 执行查询
    query.exec((res) => {
      resolve(res)
    })
  })
}