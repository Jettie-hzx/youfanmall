import { request } from "./request";
export function getDetail(iid){
    return request({
        method:"get",
        url:'/detail/',
        params:{
            iid
        }
    })
}
export function getRecommend () {
  return request({
    url: '/recommend'
  })
}
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;
    }
  }
 
export class Shop {
  constructor(shopInfo){
    this.name=shopInfo.name;
    this.score=shopInfo.score;
    this.shopLogo=shopInfo.shopLogo;
    this.cFans=shopInfo.cFans;
    this.cSells=shopInfo.cSells
  }
}
  export class GoodsParam {
    constructor(info, rule) {
      // 注：images可能没有值(某些商品优质，某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }