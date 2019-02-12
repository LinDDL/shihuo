<template>
    <div class="index-box">
        <ln-head></ln-head>
        <div class="groupon-area-box">
            <div class="groupon-top-slid clearfix">
                <div class="groupon-top-slid-mian">
                    <div class="swiper-container J_ui_picSwitch">
                        <div class="swiper-wrapper J_ui_post J_ui_postFloat">
                            <div class="swiper-slide" v-for="(item,index) in banners" :key="index"><img :src="item.imgSrc" alt=""></div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="groupon-top-slid-sub">
                        <ul class="clearfix">
                            <li v-for="(item,index) in subImg" :key="index"><img :src="item.imgSrc" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="vip-goods-area clearfix">
                <div class="vip-goods-area-sub">
                    <div class="vip-title">
                        <ul class="clearfix" id="vip_tag">
                            <li class="on"><span class="tag">精品推荐</span><s></s></li>
                        </ul>
                    </div>
                    <div class="vip-list-box jinpin__js">
                        <div class="swiper-container vip-list-box-slid" id="swiper1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide li" v-for="(item,index) in suggests" :key="index">
                                    <div class="images">
                                        <a href="javascript:;">
                                            <img width="150" :src="item.imgSrc" :alt="item.title">
                                        </a>
                                    </div>
                                    <div class="h2"><a href="javascript:;" :alt="item.title" :title="item.title">{{item.title}}</a></div>
                                    <div class="price clearfix">
                                        <div class="t1 clearfix">
                                            <div class="num"><s>¥</s>{{item.newPrice}}</div>
                                            <div class="zhe">
                                                <div class="z1">5折</div>
                                                <div class="z2">¥{{item.oldPrice}}</div>
                                            </div>
                                        </div>
                                        <div class="t2"><a href="javascript:;">抢购</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-prev prev"></div>
                            <div class="swiper-button-next next"></div>
                        </div>
                    </div>
                </div>
                <div class="vip-goods-area-main">
                    <div class="title">镇团之宝专场</div>
                        <div class="inner">
                            <div class="bottom-txt">
                            <p>Nike LeBron LBJ 16代 詹姆斯 篮球鞋 AO2595-006</p>
                            <div class="price">
                                <s><span>¥</span>1098.00</s><i>6.9折</i>
                            </div>
                        </div>
                        <div class="imgs">
                            <a target="_blank" href="javascriopt:;"><img src="http://shihuo.hupucdn.com/Fj7_U0-966W2myYlTOzsaF6o2A6W"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="groupon-brands">
                <div class="brands-title">推荐品牌</div>
                <div class="brands-box">
                    <div class="brands-img-b">
                        <a href="javascript:;"><img src="http://www.shihuo.cn/images/trade/groupon/tuangou20151207/brand-1.jpg" alt=""></a>
                        <a href="javascript:;"><img src="http://www.shihuo.cn/images/trade/groupon/tuangou20151207/brand-2.jpg" alt=""></a>
                        <a href="javascript:;"><img src="http://www.shihuo.cn/images/trade/groupon/tuangou20151207/brand-3.jpg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="groupon-goods-list-area">
                <div class="groupon-goods-title clearfix">
                    <div class="f1">热门团购</div>
                    <div class="f2"><a target="_blank" href="javascript:;">更多 &gt;&gt;</a></div>
                </div>
                <div class="goods-screen-box">
                    <ol>
                        <li class="clearfix" id="sex_list">
                            <div class="t1">适用人群</div>
                            <div class="t2">
                                <a href="javascript:void(0);" dace_tag="tag_common">通用<s></s></a>
                                <a href="javascript:void(0);" dace_tag="tag_man">男生<s></s></a>
                                <a href="javascript:void(0);" dace_tag="tag_woman">女生<s></s></a>
                                <a href="javascript:void(0);" dace_tag="tag_chidren">儿童<s></s></a>
                            </div>
                        </li>
                        <li class="clearfix" id="type_list">
                            <div class="t1">分类</div>
                            <div class="t2">
                                <a datat-value="篮球鞋, 跑鞋, 休闲鞋" href="javascript:void(0);" dace_tag="type_篮球鞋, 跑鞋, 休闲鞋">鞋类<s></s></a>
                                <a datat-value="T恤, 外套" href="javascript:void(0);" dace_tag="type_T恤, 外套">上衣<s></s></a>
                                <a datat-value="短裤, 长裤" href="javascript:void(0);" dace_tag="type_短裤, 长裤">裤装<s></s></a>
                                <a datat-value="护具配件, 其他, 包类, 球衣紧身衣" href="javascript:void(0);" dace_tag="type_护具配件, 其他, 包类, 球衣紧身衣">装备<s></s></a>
                            </div>
                        </li>
                        <li class="clearfix" id="brand_list">
                            <div class="t1">品牌</div>
                            <div class="t2" style="width: 90%">
                                <a href="javascript:void(0);" dace_tag="brand_1">Nike/耐克<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_2">Jordan Brand/乔丹<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_3">adidas/阿迪达斯<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_4">adidas Originals/三叶草<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_5">Reebok/锐步<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_6">Converse/匡威<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_7">New Balance/新百伦<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_8">Under Armour/安德玛<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_9">Li Ning/李宁<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_10">Anta/安踏<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_11">Peak/匹克<s></s></a>
                                <a href="javascript:void(0);" dace_tag="brand_12">Asics/亚瑟士<s></s></a>
                        </div>
                    </li>
                </ol>
                <div class="inner">
                    <div class="inner-width">
                        <div class="goods-screen clearfix">
                            <div class="t2" id="order_list">
                                <a href="javascript:void(0);" class="on" atr="default" dace_tag="sort_default">默认</a><a href="javascript:void(0);" atr="hot" dace_tag="sort_hot">人气<s></s></a><a href="javascript:void(0);" atr="price" dace_tag="sort_price">价格<s class="onClass"></s></a><a href="javascript:void(0);" atr="discount" dace_tag="sort_discount">折扣<s class="onClass"></s></a><a class="order-type today-new" href="javascript:void(0);" atr="new" dace_tag="sort_new">今日最新</a><a class="order-type" href="javascript:void(0);" atr="end" dace_tag="sort_end">即将结束</a><a class="order-type green" href="javascript:void(0);" atr="coming" dace_tag="sort_coming">预告</a>
                            </div>
                            <div class="t3">
                                <input id="seach_input" class="input" type="text" placeholder="输入你想搜索的商品"><span class="ic" id="seach_js"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="groupon-goods-list-ul clearfix" id="groupon_goods_list">
                <li v-for="(item,index) in goodsData" 
                :key="index" 
                :class="{on:showIndex===index}" 
                @mouseenter="showIndexs(index)"
                
                >
                    <div class="inner">
                        <div class="img">
                            <a target="_blank" href="javascript::">
                                <img :src=' item.img_path | imgs' width="224" height="224" @click="toDetail(item.id)">
                                <div class="small-img-box"  style="display:none">
                                    <img v-for="(item1,index1) in item.style_imgs" :key="index1" :src="item1" alt="">
                                </div>
                            </a>                              
                        </div>                              
                        <div class="h2">
                            <a target="_blank" :title="item.title" :alt="item.title" href="javascript::">{{item.title}}</a>
                        </div>                              
                        <div class="price clearfix">
                            <div class="t1">3折</div>
                            <a href="javascript:;" class="t3">立即抢购</a>                                  
                            <div class="t2">
                                <span class="s2"><s>¥</s>{{item.price}}</span><span class="s1">¥{{item.original_price}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="time-pop clearfix">
                        <div class="t1" ><s></s>{{time}}</div>
                        <div class="t2">已有{{item.attend_count}}关注</div>     
                    </div>
                </li>
            </div>
        </div>
        </div>
        <ln-foot></ln-foot> 
        <ln-foots></ln-foots>  
        <ln-footf></ln-footf>        
    </div>
</template>

<script>
    import lnHead from "../components/lnHead"
    import lnFoot from "../components/lnFoot"
    import lnFoots from "../components/lnFoots"
    import lnFootf from "../components/lnFootf"
    import Swiper from "swiper";
    import {mapState,mapActions} from 'vuex';
    export default {
        name:'index',
        components:{lnHead,lnFoot,lnFoots,lnFootf},
        async mounted(){
            //轮播图
            var mySwiper=new Swiper(".J_ui_picSwitch",{
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            var swiper1 = new Swiper('#swiper1', {
                loop:true,
                slidesPerView: 4,
                freeMode: true,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev',
                },
            });
            this.datas = await this.getData();
            this.goodsData = this.datas.data.data;
            window.addEventListener('scroll', this.handleScroll)
        },
        data(){
            return {
                banners:[
                    {imgSrc:"http://shihuo.hupucdn.com/tuangouIndex/201901/0210/86d9c37dea16030fd473abda318f7da0.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangouIndex/201902/0110/4a7d1c63bef4433a35cdec578e9df2df.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangouIndex/201901/2917/03a986aabd82646365f6722797d5a729.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangouIndex/201901/1615/c5a8bacb3094ecea9b8a1dff8c8f190e.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangouIndex/201901/2917/128386ae9dbbf7c5f72e1f694550f256.png"},
                ],
                subImg:[
                    {imgSrc:"http://shihuo.hupucdn.com/tuangoufocus/201901/2917/aec677a5bbfbfbafe7b8bd98592f81b5.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangoufocus/201901/2917/02b8a937d5594418911840ca74842f44.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangoufocus/201901/1614/66cacd5d665f5356b614f1bb1a7543a0.png"},
                    {imgSrc:"http://shihuo.hupucdn.com/tuangoufocus/201901/1011/5e7a98ca3fed17d3f9421d515667a426.png"},
                ],
                showIndex:0,
                goodsData:[],
                time:0,
                d:0,
                h:0,
                m:0,
                s:0,
                datas:[],
                flag:false
            }
        },
        computed: mapState([
            'suggests'
        ]),
        methods:{
            ...mapActions(["getData","changePage"]),
            showIndexs(index){
                this.showIndex=index;
            },
            //时间过滤器
            countTime(value) {
                var date = new Date();
                var now = date.getTime();
                var endDate = new Date(value);
                var end = endDate.getTime();
                var leftTime = end - now;
                if (leftTime >= 0) {
                   this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                   this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                   this.m = Math.floor(leftTime / 1000 / 60 % 60);
                   this.s = Math.floor(leftTime / 1000 % 60);
                }
                this.time =`剩余${ this.d }天${this.h}小时${this.m}分` ;
                setTimeout(this.countTime, 1000);
            },
            async handleScroll () {
                let self = this;
                var ch = document.body.clientHeight||document.documentElement.clientHeight;
                var sh = document.body.scrollTop||document.documentElement.scrollTop;
                var mh =document.getElementById("groupon_goods_list").offsetTop + document.getElementById("groupon_goods_list").offsetHeight;
                if(this.$store.state.pages < 5){
                    this.flag=true;
                }else{
                    this.flag=false;
                    return ;
                }
                if(ch + sh > mh-150){
                    if(this.$store.state.pages < 5){
                        self.changePage();
                        this.flag = false
                        self.datas = await self.getData();
                        self.goodsData = self.goodsData.concat(self.datas.data.data);
                    }
                }
            },
            //详情页跳转
            toDetail(id){
               this.goodsData.map((item,index)=>{
                    if(item.id===id){
                        sessionStorage.setItem("goods",JSON.stringify(item));
                        return item;
                    }
                })
                this.$router.push("/detail")
            },

        },
        filters:{
            //图片过滤器
            imgs: function(value) {
                value = "http:" + value + "?imageView2/1/w/330/h/330";
                return value;
            },
        }
    }
</script>

<style scoped>
.index-box{
    width:100%;
    
}
.groupon-area-box {
    width: 1081px;
    margin: 0 auto;
    font-family: "MicroSoft YaHei" !important;
    line-height: 18px !important;
    font-size: 14px;
}
.groupon-top-slid .groupon-top-slid-main {
    width: 606px;
    height: 275px;
    float: left;
}
.J_ui_picSwitch {
    width: 606px;
    height: 275px;
    overflow: hidden;
    position: relative;
    float: left;
}
.J_ui_picSwitch .J_ui_post {
    position: relative;
    left: 0px;
    top: 0px;
}
.J_ui_picSwitch .J_ui_post  img {
    width: 606px;
    height: 275px;
}
.groupon-top-slid .groupon-top-slid-sub {
    width: 474px;
    height: 275px;
    float: left;
    margin: 1px 0 0 1px;
    overflow: hidden;
}
.groupon-top-slid .groupon-top-slid-sub li {
    float: left;
    width: 225px;
    height: 131px;
    overflow: hidden;
    margin: 0 0 11px 12px;
}
.vip-goods-area {
    margin-top: 20px;
}
.vip-goods-area .vip-goods-area-sub {
    width: 860px;
    float: left;
}
.vip-goods-area .vip-goods-area-sub .vip-title {
    border-bottom: 3px #d92830 solid;
}
.vip-goods-area .vip-goods-area-sub .vip-title li {
    float: left;
}
.vip-goods-area .vip-goods-area-sub .vip-title li .tag {
    display: inline-block;
    padding: 10px 22px;
    font-size: 20px;
    cursor: pointer;
}
.vip-goods-area .vip-goods-area-sub .vip-title li.on .tag {
    color: #fff;
    background-color: #d92830;
}
.vip-goods-area .vip-goods-area-sub .vip-title li s {
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: #e5e5e5;
    overflow: hidden;
    position: relative;
    top: 5px;
}
.vip-goods-area .vip-goods-area-main {
    float: right;
    width: 210px;
    overflow: hidden;
}
.vip-goods-area .vip-goods-area-main .title {
    margin-top: 13px;
    font-size: 20px;
}
.vip-goods-area .vip-goods-area-main .inner {
    background-color: #d92830;
    height: 268px;
}
.vip-goods-area .vip-goods-area-main .bottom-txt {
    padding: 8px 3px;
    text-align: center;
    color: #fff;
    margin-top: 8px;
    font-size: 14px;
    padding-top: 15px;
}
.vip-goods-area .vip-goods-area-main .bottom-txt p {
    height: 20px;
    overflow: hidden;
}
.vip-goods-area .vip-goods-area-main .bottom-txt .price {
    margin-top: 5px;
}
.vip-goods-area .vip-goods-area-main .bottom-txt .price s {
    font-size: 26px;
    color: #fff;
    font-family: Arial;
    font-weight: bold;
    line-height: 22px;
    vertical-align: middle;
    display: inline-block;
}
.vip-goods-area .vip-goods-area-main .bottom-txt .price i {
    font-style: normal;
    color: #fff;
    padding: 0px 5px;
    border: 1px #fff solid;
    display: inline-block;
    margin-left: 10px;
    border-radius: 5px;
}
.vip-goods-area .vip-goods-area-main .bottom-txt .price s {
    font-size: 26px;
    color: #fff;
    font-family: Arial;
    font-weight: bold;
    line-height: 22px;
    vertical-align: middle;
    display: inline-block;
    text-decoration: none;
}
.vip-goods-area .vip-goods-area-main .bottom-txt .price s span {
    font-size: 16px;
}
.vip-goods-area .vip-goods-area-main .imgs {
    width: 145px;
    height: 145px;
    margin: 0 auto;
    overflow: hidden;
}
.vip-goods-area .vip-goods-area-main .imgs a {
    display: block;
    width: 145px;
    height: 145px;
}
.vip-goods-area .vip-goods-area-main .imgs img {
    width: 145px;
    height: 145px;
    border-radius: 8px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box {
    height: 264px;
    border: 1px #e2e2e2 solid;
    overflow: hidden;
    position: relative;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .images {
    text-align: center;
    width: 150px;
    height: 150px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 10px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .h2 {
    margin-top: 5px;
    color: #000000;
    text-align: left;
    color: 666;
    height: 46px;
    overflow: hidden;
    padding: 0 10px;
    line-height: 24px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .h2 a {
    color: #000000;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price {
    padding: 0 7px;
    margin-top: 10px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 {
    float: left;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 .num {
    float: left;
    font-size: 28px;
    color: #d92830;
    font-weight: bold;
    margin-top: 3px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 .num s {
    font-size: 20px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 .zhe {
    float: left;
    margin-left: 3px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 .zhe .z1 {
    color: #d92830;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    padding-left: 8px;
    border: 1px #d92830 solid;
    padding: 0px 3px;
    border-radius: 5px;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t1 .zhe .z2 {
    color: #999999;
    font-size: 12px;
    text-decoration: line-through;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t2 {
    float: right;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box  .price .t2 a {
    display: inline-block;
    padding: 6px 12px;
    color: #fff;
    background-color: #d92830;
}
.vip-goods-area .vip-goods-area-sub .vip-list-box .li {
    float: left;
    width: 214px;
    height: 264px;
    border-right: 1px #f3f3f3 solid;
    position: relative;
}
.vip-list-box-slid{
    position: relative;
}
.prev{
    background: url(http://sh1.hoopchina.com.cn/images/trade/groupon/tuangou20151207/slide3.png) no-repeat;
    width: 22px;
    height: 46px;
    position: absolute;
    left: 0px;
    top: 98px;
    cursor: pointer;
    z-index: 10;
}
.next{
    background: url(http://sh1.hoopchina.com.cn/images/trade/groupon/tuangou20151207/slide4.png) no-repeat;
    width: 22px;
    height: 46px;
    position: absolute;
    right: 0px;
    top: 98px;
    cursor: pointer;
    z-index: 10;
}
.groupon-brands {
    margin-top: 25px;
}
.groupon-brands .brands-title {
    font-size: 20px;
    color: #333333;
    padding-bottom: 8px;
    border-bottom: 3px #e5e5e5 solid;
}
.groupon-brands .brands-box {
    border: 1px #e5e5e5 solid;
    padding-bottom: 10px;
}
.groupon-brands .brands-box .brands-img-b a {
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
}
.groupon-goods-list-area {
    margin-top: 20px;
}
.groupon-goods-list-area .groupon-goods-title .f1 {
    float: left;
    font-size: 20px;
    color: #333333;
}
.groupon-goods-list-area .groupon-goods-title .f2 {
    float: right;
    color: #333333;
}
a, button {
    cursor: pointer;
    color: #333333;
}
.groupon-goods-list-area .goods-screen-box {
    position: relative;
    margin-top: 10px;
    z-index: 50;
}
.groupon-goods-list-area .goods-screen-box ol {
    background-color: #f9f9fb;
    border-top: 3px #e5e5e5 solid;
    padding: 0 10px;
}
.groupon-goods-list-area .goods-screen-box ol li {
    border-bottom: 1px #e5e5e5 solid;
    padding: 8px 5px;
    color: #000000;
}
.groupon-goods-list-area .goods-screen-box ol li .t1 {
    float: left;
    color: #333333;
    font-weight: bold;
}
.groupon-goods-list-area .goods-screen-box ol li .t2 {
    float: left;
}
.groupon-goods-list-area .goods-screen-box ol li .t2 a {
    display: inline-block;
    margin-left: 25px;
    vertical-align: middle;
    padding: 3px 5px;
    margin-top: -2px;
    border: 1px #f9f9fb solid;
}
a:hover {
    color: #a41f24;
    /* text-decoration: underline; */
}
.groupon-goods-list-area .goods-screen-box .inner-width {
    width: 1080px;
    margin: 0 auto;
}
.groupon-goods-list-area .goods-screen-box .goods-screen {
    height: 40px;
    margin-top: -1px;
    position: relative;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 {
    float: left;
    margin-top: 10px;
    padding-left: 17px;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a {
    display: inline-block;
    margin-right: 30px;
    color: #666666;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a.on {
    color: #d92830;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a.order-type {
    color: #333;
}

.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a.today-new {
    margin-left: 375px;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a {
    display: inline-block;
    margin-right: 30px;
    color: #666666;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/groupon/tuangou20151207/sj1.png) no-repeat;
    width: 12px;
    height: 8px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 3px;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t2 a.green {
    color: #0ea16e;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t3 {
    float: right;
    margin-top: 7px;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t3 .input {
    width: 135px;
    height: 24px;
    border: 1px #e8e8e8 solid;
    background-color: #fff;
    border-right: 0px;
    vertical-align: middle;
    padding-left: 5px;
}
.groupon-goods-list-area .goods-screen-box .goods-screen .t3 .ic {
    background: url(http://sh1.hoopchina.com.cn/images/trade/groupon/tuangou20151207/fangda.jpg) no-repeat;
    display: inline-block;
    width: 37px;
    height: 24px;
    vertical-align: middle;
    border: 1px #e8e8e8 solid;
    border-left: 0px;
    cursor: pointer;
}
.groupon-goods-list-area .groupon-goods-list-ul {
    margin-left: 1px;
    min-height: 370px;
    padding-bottom: 20px;
}
.groupon-goods-list-area .groupon-goods-list-ul li {
    float: left;
    width: 269px;
    height: 366px;
    border: 1px #e2e2e2 solid;
    margin: -1px 0 0 -1px;
    position: relative;
}
.groupon-goods-list-area .groupon-goods-list-ul li .inner {
    padding: 12px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .img {
    width: 224px;
    height: 224px;
    margin: 0 auto;
    margin-top: 10px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .img a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
}
.groupon-goods-list-area .groupon-goods-list-ul li .img a .small-img-box {
    height: 45px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    text-align: center;
    overflow: hidden;
}
.groupon-goods-list-area .groupon-goods-list-ul li .img a .small-img-box img {
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 3px;
    margin-right: 5px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .img a .small-img-box img:last-child {
    margin-right: 0px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .h2 {
    color: #333333;
    font-weight: bold;
    margin-top: 15px;
    height: 20px;
    overflow: hidden;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price {
    margin-top: 10px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t1 {
    float: right;
    display: inline-block;
    color: #fff;
    border-radius: 5px;
    padding: 2px 5px;
    border: 1px #d92830 solid;
    color: #d92830;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t3 {
    display: inline-block;
    float: right;
    padding: 4px 8px;
    color: #fff;
    background-color: #d92830;
    display: none;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t2 {
    float: left;
    margin-top: 5px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t2 .s2 {
    font-size: 30px;
    color: #d92830;
    font-family: Arial;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t2 .s2 s {
    font-size: 18px;
}
.groupon-goods-list-area .groupon-goods-list-ul li .price .t2 .s1 {
    font-size: 14px;
    margin-left: 5px;
    color: #999999;
    text-decoration: line-through;
}
.groupon-goods-list-area .groupon-goods-list-ul li .time-pop {
    padding: 8px 10px;
    color: #3b3b3b;
    font-size: 12px;
    background-color: #f9f9fb;
}
.groupon-goods-list-area .groupon-goods-list-ul li .time-pop .t1 {
    float: left;
}
.groupon-goods-list-area .groupon-goods-list-ul li .time-pop .t1 s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/groupon/tuangou20151207/tim.jpg) no-repeat;
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-top: -2px;
}
groupon-goods-list-area .groupon-goods-list-ul li .time-pop .t2 {
    float: right;
}
.groupon-goods-list-area .groupon-goods-list-ul li.on {
    border: 1px #d92830 solid;
    z-index: 10;
}
</style>