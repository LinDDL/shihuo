<template>
  <div class="content-all">
    <ln-head></ln-head>

    <div class="content-box">
      <div class="bread-area">
        <a target="_blank" href>首页</a>
        &gt;
        <a target="_blank" href>团购首页</a>
        &gt;
        <a target="_blank" href>全部团购</a>
        &gt;
        <a href>AIR JORDAN B. FLY 男子实战篮球鞋 910209-004-600</a>
      </div>

      <div class="clearfix">
        <div class="content-box-left">
          <div class="goods-info clearfix">
            <div class="area-main">
              <div class="middle">
                <img
                  class="js-show-img"
                  width="365"
                  :src="goods.img_path|imgs"
                >
              </div>

              <div
                class="choose-img-block"
                style="margin-top: 20px;text-align: center;height: 50px"
              >
                <img
                  class="js-select-img"
                  v-for="(item,index) in goods.style_imgs" :key="index"
                  style="width: 48px;height: 48px;display: inline-block;border: 1px solid #ccc; margin-right: 10px; cursor: pointer"
                  :src="item"
                >
              </div>

              <div class="share">
                <div class="b1">
                  <span class="tag" id="chaozan">
                    <i class="i1"></i>

                    超赞
                  </span>

                   0
                </div>

                <div class="b1">
                  <div
                    class="bdsharebuttonbox bdshare-button-style0-16"
                    data-tag="share_1"
                    data-bd-bind="1549848863562"
                  >
                    <a class="bds_more" data-cmd="more">分享</a>
                    
                    <a class="bds_count" data-cmd="count" title="累计分享0次" style="color:#666">0</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="area-sub" style="position:relative;">
              <h1>{{goods.title}}</h1>

              <div class="goods-font" style="margin-top: 20px" _hover-ignore="1">
                <span class="f1">
                  品牌
                  <s>
                    <a href target="_blank">{{goods.title | brand}}</a>
                  </s>
                </span>
                
                <span class="f1">
                  类型
                  <s>
                    <a href target="_blank">篮球鞋</a>
                  </s>
                </span>
              </div>

              <div class="ljtg-box" style="margin-top: 20px;">
                <div class="price-list clearfix">
                  <span class="f1" _hover-ignore="1">
                    识货团购专享价
                    <s>
                      <i>¥</i>

                      {{goods.price}}
                    </s>
                  </span>
                  
                  <span class="f2">
                    市场价
                      
                    <s>¥{{goods.original_price}}</s>
                  </span>
                  
                  <span class="f3">
                    折扣
                    <s>{{goods.discount}}</s>

                    折
                  </span>
                </div>

                <div class="last-time clearfix">
                  <div class="f1">
                    <s></s>
                    
                    <span atr="347145">
                      还剩：
                      <span>3天23小时34分</span>
                    </span>
                  </div>

                  <div class="f2">
                    <s>{{goods.attend_count}}</s>

                    人关注
                  </div>
                </div>

                <a
                  isconvert="1"
                  href="javascript:;"
                  class="groupon-btn"
                  rel="nofollow"
                  id="go_lick"
                  @click="addCart(id)"
                >立即团购</a>

                <div class="anhao">
                  【识货团购价购买暗号 shihuo116276 】
                  <a
                    href="javascript:void(0);"
                    id="copyAh"
                    style="color:#23468e; text-decoration: underline;"
                    data-anhao="shihuo116276"
                  >复制</a>

                  <div
                    class="zclip"
                    id="zclip-ZeroClipboardMovie_1"
                    style="position: absolute; left: 260px; top: 247px; width: 30px; height: 20px; z-index: 99;"
                  >
                    <embed
                      id="ZeroClipboardMovie_1"
                      src="/js/trade/groupon/ZeroClipboard.swf"
                      loop="false"
                      menu="false"
                      quality="best"
                      bgcolor="#ffffff"
                      width="30"
                      height="20"
                      name="ZeroClipboardMovie_1"
                      align="middle"
                      allowscriptaccess="always"
                      allowfullscreen="false"
                      type="application/x-shockwave-flash"
                      pluginspage="http://www.macromedia.com/go/getflashplayer"
                      flashvars="id=1&amp;width=30&amp;height=20"
                      wmode="transparent"
                    >
                  </div>
                </div>
              </div>

              <div class="sanbu">
                <img src="http://www.shihuo.cn/images/trade/groupon/step-new.jpg">
              </div>
            </div>
          </div>

          <div class="content-2 clearfix">
            <div class="area-sub">
              <div class="groupon-right">
                <div class="title-1">团购推荐</div>

                <ul>
                  <li v-for="(item,index) in detailSuggests" :key="index">
                    <div class="imgs">
                      <a href>
                        <img width="140" :src="item.imgSrc" alt="item.titleD">
                      </a>
                    </div>

                    <h2>
                      <span>{{item.title}}</span>
                    </h2>

                    <div class="price clearfix">
                      <div class="t1">{{item.rebate}} 折</div>

                      <div class="t2">
                        <i>¥</i>
                        {{item.newPrice}}
                        <s>¥ {{item.oldPrice}}</s>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="area-main">
              <div class="title-content-txt">
                <div class="in">
                  <span class="on" style="cursor: pointer;" id="goods_id">商品详情</span>
                  <span style="cursor: pointer;" id="ques_id" class>常见问题</span>
                </div>
              </div>

              <div class="text-inner-padding">
                <div class="title_js_box">
                  <span class="base-title">
                    <i></i>
                    <span class="font">商品介绍</span>
                  </span>
                </div>

                <div class="txt">
                  <img :src="item" alt v-for="(item,index) in goods.style_imgs" :key="index">
                </div>

                <div class="title_js_box" id="ques_js">
                  <span class="base-title">
                    <i></i>
                    <span class="font">常见问题</span>
                  </span>
                </div>

                <div class="txt" style="font-size:14px;">
                  <b style="display:inline-block;margin-bottom:10px;">1、什么是识货团购?</b>
                  <br>

                  用户下单识货团购是以为用户和卖家提供更直接、便捷的交易渠道为初衷，以为双方提供良好、诚信、互惠互利的网上购物 体验为目标的专业运动类正品导购平台。通过对卖家资质、产品质量、价格优势三个维度严格的要求和筛选，为用户提供更 专业、直接的导购服务，满足用户足不出户就可以在网上放心购物的需求。
                  <br>
                  <br>

                  <b style="display:inline-block;margin-bottom:10px;">2、识货团购购买流程是怎样的？</b>
                  <br>

                  在识货团购页面挑选自己喜欢的商品进入对应淘宝店家，拍下相应商品后，向店家旺旺客服报上团购暗号（shihuoXXXXXX 或者识货团购），待客服改价后完成付款。 如果用户通过上述流程得到的最终价格与团购页面标注价格不符，欢迎反应给识货团购，识货团购将从用户利益出发核实情 况并给予用户最终答复。
                  <br>
                  <br>

                  <b
                    style="display:inline-block;margin-bottom:10px;"
                  >3、识货团购的商品是否保证是正品？在识货团购买了商品后发现商品有瑕疵，或者不喜欢，想申请退换货，该如何操作？</b>
                  <br>

                  识货团购的商品都是经过专人经过严谨的审核流程允许上线；每一家参与团购的卖家，识货都经由专人进行过资质审核； 识货团购也欢迎且建议用户在收到球鞋后前往虎扑体育装备论坛进行鉴定来维护自己应有的权益。 如若出现残、次、假等问题，欢迎用户尽快向淘宝和识货官方进行反馈，识货君将第一时间站在维护用户利益的角度交涉并解决问题，尽力给双方一个满意的答复。
                  <br>
                  <br>

                  <b
                    style="display:inline-block;margin-bottom:10px;"
                  >4、我在识货团购看中一款商品，但是进入淘宝店铺后发现商品已经没有我的码数或者提示已经下线，我该怎么办？</b>
                  <br>

                  对于一些识货团购中的热门商品，由于用户的热情很高或商品数量有限，可能会出现团购商品下线前商品断码或者售罄的情 况。在此建议用户多关注团购页面中“预览”一栏，当明确自己喜欢的商品的确切上线时间后，待商品上线后第一时间前往
                  淘宝店家购买，这样会增加商品的购得几率。 如若发现团购商品实际已经售罄，或者产品内容与团购内容不符，欢迎用户及时向团购官方反馈。
                  <br>
                  <br>

                  <b style="display:inline-block;margin-bottom:10px;">5、我在识货团购上并没有发现自己喜欢的商品。</b>
                  <br>

                  识货团购正在尽全力为用户提供价格实惠，品质优秀，种类多样的正品商品，不过识货团购也将努力在未来做到更好，满足 更多用户的需求。希望用户朋友们可以支持我们！
                  <br>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-box-right">
            <div class="h2">猜你喜欢</div>
            <div class="list">
                <ul id='right_slide'>
                    <li v-for="(item,index) in likes" :key="index">
                        <a href="">
                            <img :src="item.title">
                            <div class="price">¥{{item.price}}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>

    <ln-foot></ln-foot>

    <ln-foots></ln-foots>

    <ln-footf></ln-footf>
  </div>
</template>

<script>
import lnHead from "../components/lnHead";

import lnFoot from "../components/lnFoot";

import lnFoots from "../components/lnFoots";

import lnFootf from "../components/lnFootf";

import { mapState } from "vuex";

export default {
  name: "detail",

  mounted() {
    this.id = this.goods.id
  },

  components: {
    lnHead,
    lnFoot,
    lnFoots,
    lnFootf
  },
  data() {
    return {
      imgs: [
        {
          imgSrc:
            "http://shihuo.hupucdn.com/groupon.admin.check/20181222/4d70088f4b312726c5edd1c689f49c821545463795.jpg"
        },

        {
          imgSrc:
            "http://shihuo.hupucdn.com/groupon.admin.check/20181222/dff37fa78fb1cd223b260ba234548ecb1545463798.jpg"
        },

        {
          imgSrc:
            "http://shihuo.hupucdn.com/groupon.admin.check/20181222/a632083cc2ba4b0a3752f837e0f9441b1545463830.jpg"
        },

        {
          imgSrc:
            "http://shihuo.hupucdn.com/trade/reposition/2018-08-06/e19ddee666cc5a668336b09089de7046.png"
        },

        {
          imgSrc:
            "http://shihuo.hupucdn.com/def/20171001/3d7e9a1f2fe873a07ba634f68ec661ea1506866200.jpg"
        }
      ],
      goods:JSON.parse(sessionStorage.getItem("goods"))||[],
      carts:JSON.parse(localStorage.getItem("carts")) || [],
      id:0
    };
  },
  methods:{
    addCart(id){
      if(this.hasId(this.carts,id)){
          localStorage.setItem('carts',JSON.stringify(this.carts));
          return ;
      }
      this.carts = this.carts.concat(this.goods)
      localStorage.setItem('carts',JSON.stringify(this.carts))
    },
    hasId(carts,id){
      for(var i = 0;i < carts.length;i++){
        if(Number(carts[i].id) === Number(id)){
          carts[i].status++;
          return true;
        }
      }
      return false;
    }
  },
  computed: mapState(["detailSuggests","likes"]),
  filters:{
      'imgs':function(value){
          return `http:${value}?imageView2/1/w/365/h/365`
      },
      'brand':function(value){
          return value.slice(0,2)
      }
  }
};
</script>

<style scoped>
.content-box .bread-area {
  color: #999999;

  font-size: 12px;
}

.content-box .bread-area a {
  color: #999999;
}

a,
button {
  cursor: pointer;
}

.content-box .content-box-left {
  float: left;

  width: 923px;
}

.content-box .goods-info {
  background-color: #fff;

  margin-top: 12px;
}

.content-box .goods-info .area-main {
  width: 365px;

  float: left;
}

.content-box .goods-info .area-main .middle {
  width: 365px;

  height: 365px;

  display: table-cell;

  vertical-align: middle;

  text-align: center;

  overflow: hidden;

  border: 1px #f1f1f1 solid;
}

.choose-mig-block {
  margin-top: 20px;

  text-align: center;

  height: 50px;
}

.share .b1 {
  display: inline-block;

  margin-right: 15px;

  color: #666666;

  vertical-align: middle;
}

.b1 .tag {
  display: inline-block;

  padding: 3px;

  margin-right: 5px;

  cursor: pointer;
}

.share {
  margin-top: 30px;

  text-align: center;
}

.content-all {
  font: 12px \5fae\8f6f\96c5\9ed1, Arial, sans-serif;

  margin-top: 10px;
}

.b1 .tag .i1 {
  background: url(http://www.shihuo.cn/images/trade/groupon/detail/icons.jpg)
    no-repeat -2px -88px;

  width: 15px;

  height: 12px;

  display: inline-block;

  overflow: hidden;

  position: relative;

  top: 1px;

  margin-right: 5px;
}

.bds_more {
  color: #333;

  float: left;
}

.share a.bds_more {
  background: url(http://www.shihuo.cn/images/trade/groupon/tuangou20151207/sh.jpg)
    no-repeat left center !important;

  padding-left: 23px !important;

  color: #666 !important;
}

.tag .i1 {
  background: url(http://www.shihuo.cn/images/trade/groupon/detail/icons.jpg)
    no-repeat -2px -88px;

  width: 15px;

  height: 12px;

  display: inline-block;

  overflow: hidden;

  position: relative;

  top: 1px;

  margin-right: 5px;
}

.content-box {
  width: 1080px;

  margin: 0 auto;
}

.area-main {
  width: 365px;

  float: left;
}

.content-box .goods-info .area-sub {
  float: right;

  width: 520px;

  padding-right: 20px;
}

.area-sub h1 {
  overflow: hidden;

  display: block;

  font-size: 20px;

  line-height: 24px;
}

.area-sub .goods-font {
  font-size: 14px;

  margin-top: 15px;
}

.area-sub .goods-font {
  font-size: 14px;

  margin-top: 15px;
}

.goods-font .f1 {
  display: inline-block;

  margin-right: 30px;

  color: #999999;
}

.f1 s a {
  color: #444444;

  margin-left: 10px;

  font-style: normal;
}

.f1 s {
  text-decoration: none;
}

cite,
em,
i,
s {
  font-style: normal;
}

.area-sub {
  float: right;

  width: 520px;

  padding-right: 20px;
}

.content-box .goods-info .area-sub .ljtg-box .price-list .f1,
.content-box .goods-info .area-sub .ljtg-box .price-list .f2,
.content-box .goods-info .area-sub .ljtg-box .price-list .f3 {
  font-size: 14px;

  margin-right: 20px;

  color: #333;

  display: inline-block;

  vertical-align: bottom;
}

.ljtg-box .price-list .f1 s {
  font-size: 44px;

  color: #da1d26;

  text-decoration: none;
}

.ljtg-box .price-list .f1 s i {
  font-size: 28px;

  margin-right: 10px;
}

.ljtg-box .price-list .f2 {
  padding-bottom: 5px;
}

.price-list .f2 s {
  text-decoration: line-through;
}

.ljtg-box .price-list .f3 {
  padding-bottom: 5px;
}

.ljtg-box .last-time {
  font-size: 14px;

  color: #666666;

  margin-top: 10px;
}

.ljtg-box .last-time .f1 {
  float: left;
}

.ljtg-box .last-time .f1 s {
  display: inline-block;

  background: url(http://www.shihuo.cn/images/trade/groupon/tuangou20151207/stime.jpg)
    no-repeat;

  width: 16px;

  height: 16px;

  vertical-align: middle;

  margin-right: 5px;

  position: relative;

  top: -2px;
}

.ljtg-box .last-time {
  font-size: 14px;

  color: #666666;

  margin-top: 10px;
}

.ljtg-box .last-time .f2 s {
  color: #f33632;

  text-decoration: none;
}

.ljtg-box .last-time .f2 {
  float: left;

  margin-left: 50px;
}

.ljtg-box .groupon-btn {
  display: block;

  width: 310px;

  padding: 8px 0px;

  border-radius: 5px;

  font-size: 24px;

  color: #fff;

  text-align: center;

  background: #d81313;

  cursor: pointer;

  margin-top: 25px;
}

.ljtg-box .anhao {
  font-size: 14px;

  color: #666666;

  float: left;

  text-align: center;

  margin-top: 10px;

  margin-bottom: 10px;
}

embed {
  width: 30px;

  height: 20px;

  vertical-align: -webkit-baseline-middle;
}

.area-sub .sanbu {
  margin-top: 30px;
}

.content-box .content-2 {
  padding: 40px 0;
}

.content-box .content-2 .area-sub {
  width: 195px;

  float: left;
}

.content-box .content-2 .area-sub .groupon-right {
  background-color: #fff;

  border: 1px #e5e5e5 solid;
}

.content-box .content-2 .title-1 {
  padding: 10px;

  color: #444444;

  font-size: 18px;

  background-color: #f5f5f5;

  padding-bottom: 12px;
}

.content-box .content-2 .area-sub .groupon-right ul {
  padding: 0 3px;
}

.content-box .content-2 .area-sub .groupon-right ul li {
  padding: 18px 10px;

  border-bottom: 1px #efefef solid;
}

.groupon-right ul li .imgs {
  width: 200px;
txt
  height: 200px;

  overflow: hidden;

  display: table-cell;

  vertical-align: middle;

  text-align: center;

  overflow: hidden;
}

.groupon-right ul li h2 {
  margin-top: 10px;

  height: 36px;

  line-height: 18px;

  color: #444444;

  font-weight: normal;

  overflow: hidden;
}

.groupon-right ul li .price {
  margin-top: 10px;
}

.groupon-right ul li .price .t1 {
  float: right;

  height: 20px;

  font-size: 14px;

  color: #fff;

  line-height: 20px;

  text-align: center;

  border: 1px #f33631 solid;

  color: #f33631;

  padding: 0 3px;

  border-radius: 5px;

  font-weight: bold;
}

.groupon-right ul li .price .t2 {
  float: left;

  font-size: 20px;

  color: #eb252a;

  line-height: 18px;
}

.groupon-right ul li .price .t2 i {
  font-size: 14px;
}

.groupon-right ul li .price .t2 s {
  color: #999999;

  text-decoration: line-through;

  font-size: 14px;

  margin-left: 5px;
}

.content-2 .area-main {
  background-color: #fff;

  width: 705px;

  float: right;

  border: 1px #e5e5e5 solid;
}

.area-main .title-content-txt {
  border-bottom: 1px #e5e5e5 solid;

  height: 48px;

  position: relative;
}

.title-content-txt .in {
  position: absolute;

  left: 0px;

  top: 0px;
}

.title-content-txt span {
  display: inline-block;

  padding: 13px 20px;

  font-size: 16px;

  position: relative;

  z-index: 10;
}

.title-content-txt span.on {
  border-bottom: 2px #eb4300 solid;

  background-color: #fff;

  color: #f33632;
}

.area-main .text-inner-padding {
  padding: 20px;
}

.title_js_box {
  margin: 18px 0;

  border-bottom: 1px solid #333333;
}

.area-main .base-title {
  display: inline-block;

  font-size: 18px;

  color: #444444;

  position: relative;

  margin-left: 15px;

  padding: 0 5px;
}

.base-title i {
  height: 1px;

  background-color: #333333;

  border: 1px solid #333333;

  border-radius: 2px;

  position: absolute;

  bottom: -2px;

  left: 0px;

  z-index: 10;

  width: 100%;

  margin-left: -1px;
}

.content-box .content-2 .area-main .base-title {
  display: inline-block;

  font-size: 18px;

  color: #444444;

  position: relative;

  margin-left: 15px;

  padding: 0 5px;
}

.base-title .font {
  display: inline-block;

  background-color: #fff;

  opacity: 0.8;

  filter: alpha(opacity=80);

  vertical-align: middle;

  line-height: 30px;
}

.content-box .content-2 .area-main .txt {
  margin-top: 15px;

  overflow: hidden;
}

.content-2 .area-main .text-inner-padding img {
  width: 100%;
}

.area-main .txt {
  margin-top: 15px;

  overflow: hidden;
}
.content-box .content-box-right {
    float: right;
    width: 138px;
    overflow: hidden;
    padding-left: 17px;
    padding-bottom: 10px;
    border-left: 1px #eaeaea solid;
    position: relative;
    left: -2px;
}
.content-box .content-box-right .h2 {
    font-size: 16px;
}
.content-box .content-box-right .list {
    overflow: hidden;
    position: relative;
}
.content-box .content-box-right ul {
    position: relative;
}
.content-box .content-box-right ul li {
    margin-top: 15px;
    text-align: center;
}
.content-box .content-box-right ul li a{
    position: relative;
    display:block;
    color:#333;
}
.content-box .content-box-right ul li a img{
    width:100%;
}
.content-box-right ul li .price {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 20px;
    background-color: #f2f2f2;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    width: 100%;
}
</style>