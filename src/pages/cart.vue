<template>
    <div>
        <div class="haitaodashi-top-wrap">
            <div class="haitaodashi-top-area">
                <div class="fleft">
                    <span>海淘大师欢迎你！</span>
                        <span id="haitaodashi_user_name" class="user-info">
                        <a target="_blank" href="javascript:void(0);">{{username}}</a>,<a class="logout" href="javascript:void(0);">退出</a>
                    </span>
                    </div>
                <div class="fright">
                    <ul class="clearfix">
                        <li>
                            <a target="_blank" href="javascript:void(0);">识货</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a id="my_order" href="javascript:void(0);">我的订单</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a target="_blank" href="javascript:void(0);">联系我们</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a target="_blank" href="javascript:void(0);">帮助中心</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id='shihuo-nav-area'>
            <div class="logos-box clearfix">
                <div class="logo">
                    <a href="javascript:;">
                        <img src="http://sh1.hoopchina.com.cn/images/haitaodashi/logo.png">
                    </a>
                </div>
                <div class="search clearfix">
                    <div class="input">
                        <input id="submit_nav" type="text" value="" onfocus="this.style.color='#333';" onblur="this.style.color='#333';" autocomplete="off" name="w" placeholder="" style="color: rgb(51, 51, 51);">
                    </div>
                    <div class="btn" id="seach_sub"></div>
                </div>
            </div>
        </div>
         
        <div class="shihuo-content-wrap">
            <div class="cart-title">购物车</div>
            <div class="pay-top clearfix">
                <i class="pay-top-redborder"></i>
                <div class="area-main">
                    <b>全部商品</b><a class="qq-kefu" href="javascript:void(0);" rel="nofollow"><span class="kefu"><i></i>联系客服</span></a>
                </div>
                <div class="area-sub"><a href="javascript:;">继续购物&nbsp;&gt;</a></div>
            </div>
            <div class="list-all-title clearfix">
                <div class="t1">
                    <input 
                    type="checkbox" 
                    name="check-all" 
                    autocomplete="off" 
                    class="check_all"
                    v-model="checkAll"
                    @click="checkAlls"
                    > 全选
                </div>
                <div class="t2">
                    商品详情
                </div>
                <div class="t3">
                    商品数量
                </div>
                <div class="t4">
                    商品价格
                </div>
                <div class="t5">
                    操作
                </div>
            </div>
            <div class="good-from">
                <div class="goods-shops">
                    <input type="checkbox" autocomplete="off" name="check-shop" v-model="checkAll">
                    <i></i>
                    <span class="name">
                    </span>
                    国内直发<span class="youhui-msg"></span></div>
                </div>
                <div class="goods-list shops-id-7">
                    <ul>
                        <li class="clearfix refeshLi" v-for="(item,index) in carts" :key="index">
                            <div class="t1">
                                <input class="t1Input" type="checkbox" autocomplete="off" name="check-goods" @click="checkedOne"> 
                                <span class="shixiao">失效</span>
                                <a href="javascript:;" style="display:inline-block">
                                    <img :src="item.img_path | imgs">
                                </a>
                            </div>
                            <div class="t2">
                                <p><s>名称：</s><a href="javascript::" target="_blank">{{item.title}}</a></p>
                                <p><s>规格：</s>
                                        Size：37&nbsp;&nbsp;                                                                                        Color：深蓝&nbsp;&nbsp;                                                                                    </p>
                                <p class="activity-grid" data-onactivity="0">
                                </p>
                                <div class="commodity-supply">商品提供：ZTC球鞋正品仓</div>
                            </div>
                            <div class="t3 goods-add-btn" gid="3649987">
                                <div class="n1">
                                    <span class="a1 bgs" @click="reduceNum(item.id)">-</span><span class="a2" max="1">{{item.status}}</span><span class="a3 bgs" @click="addNum(item.id)">+</span>
                                </div>
                            </div>
                            <div class="t4">
                                <div class="price" style="line-height:35px;">
                                    <p class="prices" :price="item.price * item.status">金额：￥{{item.price * item.status}}</p>
                                        <p></p>
                                        <div class="change" style="display:none;">
                                        <span>
                                            价格变动  <s>(+￥15)</s>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="t5">
                                <span class="delete" gid="3649987" @click="del(item.id)">
                                    <img src="http://www.haitaodashi.cn/images/trade/haitao/dele.jpg">
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="go-buy clearfix fixed-post" style="left: 286px;">
                    <div class="area-left clearfix">
                        <div class="area-main">
                            <div class="fleft">
                                <input type="checkbox" autocomplete="off" name="check-all" 
                                class="check_all" 
                                v-model="checkAll"
                                @click="checkAlls"> 全选 | <span id="delete_id">删除</span> 
                            </div>
                            <div class="fleft border-left">
                                <p>
                                    <i>商品总价格：</i><s class="price-id-1">￥{{totalPrice}}</s>
                                    <i>当地运费：</i><s class="price-id-7">￥0</s>
                                    <i>国际运费：</i><s class="price-id-2">￥0</s>
                                </p>
                                <p class="gray">海淘存在被税风险，若产生税费需额外补交，点击了解<a href="javascript:;" target="_blank" class="rul-haitao">“关税规则”</a></p>
                            </div>

                        </div>
                        <div class="total-right">
                            <p>总计<s class="price-id-6">￥{{totalPrice}}</s>&nbsp;<span class="activity-salebox" style="display:none;">-&nbsp;活动优惠<i id="activity-sale" class="red-border">￥0</i>&nbsp;</span>-&nbsp;节省运费<span class="red-border price-id-5">￥0</span></p>
                            <p><s class="price-id-3">{{goodsCount}}</s>件商品&nbsp;&nbsp;|&nbsp;&nbsp;实付款：<b class="price-id-4">￥{{totalPrice}}</b></p>
                        </div>
                    </div>
                    <div class="area-right">    
                        <div class="jiesuan">
                            <input type="submit" id="submit-all"
                             value="去结算"
                            >
                        </div>
                    </div>
                </div>
                <div class="relatePro">
                    <h3>猜你喜欢</h3>
                    <ul>
                        <li v-for="(item,index) in maybeLike" :key="index">
                            <a href="javascript:;">
                                <div class="img">
                                    <img :alt="item.title" :src="item.imgSrc">
                                </div>
                                <p class="title">{{item.title}}</p>
                                <p class="price">¥{{item.price}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        <div class="foot-tips-box">
            <p><img src="http://www.haitaodashi.cn/images/footer/haitao-icon.jpg?v=20180518"></p>
        </div>
        <ln-footf></ln-footf>
    </div>
</template>

<script>

import lnFootf from "../components/lnFootf";
import { mapState } from 'vuex';
    export default {
        name:"cart",
         components: {
            lnFootf
        },
        computed:mapState(['maybeLike']),
        mounted(){
            let inputAll = document.getElementsByTagName('input');
            for(var i = 0;i<inputAll.length;i++){
                if(inputAll[i].type==='checkbox'){
                    this.inputList = this.inputList.concat(inputAll[i]);
                }
            } 
             
        },
        updated(){
           
        },
        data(){
            return {
                carts:JSON.parse(localStorage.getItem("carts")) || [],
                checkAll:false,
                checked:false,
                checkList: [],
                inputList:[],
                totalPrice:0,
                goodsCount:0,
                username:sessionStorage.getItem('username') || ''
            }
        },
        methods:{
            reduceNum(id){
                for(var i=0;i<this.carts.length;i++){
                    if(this.carts[i].id === id){
                        this.carts[i].status--;
                        if(this.carts[i].status >= 1){
                            localStorage.setItem("carts",JSON.stringify(this.carts));
                        }
                    }
                } 
            },
            addNum(id){
                if(this.hasId(this.carts,id)){
                    localStorage.setItem('carts',JSON.stringify(this.carts));
                }
            },
            del(id){
                this.carts.map((item,index)=>{
                    if(item.id === id){
                        this.carts.splice(index,1);
                    }
                });

            },
            hasId(carts,id){
                for(var i = 0;i < carts.length;i++){
                    if(Number(carts[i].id) === Number(id)){
                    carts[i].status++;
                    return true;
                    }
                }
                return false;
            },
            checkAlls(){
             let input = document.getElementsByTagName('input');
             let p = document.getElementsByClassName('prices');
               if(this.checkAll){
                   this.checkAll = false;
                   for(var i = 0;i<input.length;i++){
                       if(input[i].type==='checkbox'){
                            input[i].checked = false;
                            this.checkList = [];
                            this.goodsCount =0;
                            this.totalPrice=0
                        }
                   }
               }else{
                   this.checkAll=true;
                   this.checkList =[];
                    this.goodsCount = input.length-5;
                   for(var i = 0;i<input.length;i++){
                       if(input[i].type==='checkbox'){
                            input[i].checked = true;
                            this.checkList = this.checkList.concat(input[i]);
                        }
                   };
                   for(var i = 0;i<p.length;i++){
                       this.totalPrice += Number(p[i].getAttribute("price"))
                   }
               };
              
            },
            checkedOne(e){
                e.target.checked === true?false:true;
                let inputs = document.getElementsByTagName('input');
                this.checkList =[]
                for(var i = 0;i<inputs.length;i++){
                    if(inputs[i].type==='checkbox' && inputs[i].checked===true){
                        this.checkList = this.checkList.concat(inputs[i]);
                    }
                    this.goodsCount = this.checkList.length;
                }
                if(this.checkList.length === this.inputList.length-3){
                    this.checkAll = true;
                }else{
                    this.checkAll = false;
                }
            }
            

        },
        filters:{
            //图片过滤器
            imgs: function(value) {
                value = "http:" + value + "?imageView2/1/w/100/h/100";
                return value;
            },
        }

    }
</script>

<style scoped>
a:hover {
    color: #a41f24;
    text-decoration: underline;
}
.haitaodashi-top-wrap {
    height: 32px;
    background-color: #ebebeb;
    min-width: 1080px;
}
.haitaodashi-top-area {
    width: 1080px;
    margin: 0 auto;
}
.haitaodashi-top-area .fleft {
    float: left;
    line-height: 32px;
}
.haitaodashi-top-area .fleft {
    float: left;
    line-height: 32px;
}
.haitaodashi-top-wrap .user-info {
    margin-left: 10px;
}
.haitaodashi-top-area .fright {
    float: right;
    line-height: 32px;
}
.haitaodashi-top-area ul {
    display: inline-block;
    vertical-align: top;
    margin-left: 3px;
}
.haitaodashi-top-area li {
    float: left;
    cursor: pointer;
}
.haitaodashi-top-area .fright li {
    margin-left: 6px;
}
a, body {
    color: #444;
    font-size: 12px;
    font-family: "lucida grande",tahoma,verdana,arial,\5b8b\4f53,sans-serif;
}
.shihuo-nav-area a:hover, .haitaodashi-top-wrap a:hover {
    color: #a700ff;
    text-decoration: underline;
}
#shihuo-nav-area {
    border-bottom: 2px solid #333;
    min-width: 1080px;
}
#shihuo-nav-area {
    margin-bottom: 20px;
}
.logos-box {
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    height: 44px;
    margin: 0 auto;
    padding: 19px 0 15px 0;
    position: relative;
    width: 1080px;
    z-index: 59;
}
.logos-box .logo {
    float: left;
    width: 130px;
    height: 44px;
    overflow: hidden;
    margin-right: 150px;
}
.logos-box .search {
    position: relative;
    float: left;
    height: 39px;
    margin-top: 2px;
    width: 536px;
    background: url(http://sh1.hoopchina.com.cn/images/haitaodashi/input-border.png) no-repeat scroll left top transparent;
    padding: 1px;
}
div#shihuo-nav-area .search {
    float: right;
    background-color: white;
}
.logos-box .search .input {
    position: relative;
    float: left;
    height: 37px;
    width: 380px;
}
.logos-box .search .input input {
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    outline: none;
    border: 0 none;
    color: #9c9c9c;
    height: 37px;
    padding-left: 10px;
    width: 340px;
    line-height: 37px;
}
.logos-box .search .btn {
    background: url(http://sh1.hoopchina.com.cn/images/haitaodashi/icon-search-btn.png) no-repeat center center transparent;
    color: #fff;
    cursor: pointer;
    float: right;
    font-size: 16px;
    height: 39px;
    line-height: 39px;
    margin-top: -1px;
    text-align: center;
    width: 64px;
}
.shihuo-content-wrap {
    width: 1080px;
    margin: -5px auto 0;
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    position: relative;
}
.shihuo-content-wrap .cart-title {
    font-size: 22px;
    font-weight: bold;
    line-height: 70px;
    position: absolute;
    top: -95px;
    left: 150px;
}
.pay-top {
    padding-bottom: 10px;
    border-bottom: 2px solid #e5e5e5;
    position: relative;
}
.pay-top>i.pay-top-redborder {
    content: "";
    display: block;
    position: absolute;
    width: 80px;
    height: 2px;
    top: 100%;
    left: 0px;
    background-color: #b4080f;
}
.pay-top .area-main {
    float: left;
    position: relative;
}
.pay-top .area-main b {
    font-weight: normal;
    font-size: 18px;
}
.pay-top .area-main .kefu {
    margin-left: 20px;
    color: #666666;
    font-size: 14px;
}
.pay-top .area-main .kefu i {
    background: url(http://www.haitaodashi.cn/images/trade/haitao/icons.png) no-repeat -7px -42px;
    display: inline-block;
    height: 22px;
    margin-right: 5px;
    position: relative;
    top: -3px;
    vertical-align: middle;
    width: 22px;
}
.pay-top .area-sub {
    float: right;
    line-height: 26px;
}
.pay-top .area-sub a {
    font-size: 14px;
    color: #4069ad;
}
.list-all-title {
    padding: 10px;
    font-size: 14px;
}
.list-all-title .t1 {
    width: 130px;
}
body, button, input, select, textarea {
    font-size: 12px;
    font-family: "lucida grande",tahoma,verdana,arial,\5b8b\4f53,sans-serif;
}
.list-all-title .t2 {
    width: 495px;
}
.list-all-title .t3 {
    width: 120px;
}
.list-all-title .t4 {
    width: 235px;
    text-align: center;
}
.list-all-title .t5 {
    width: 75px;
    text-align: center;
}
.list-all-title .t1, .list-all-title .t2, .list-all-title .t3, .list-all-title .t4, .list-all-title .t5 {
    float: left;
    color: #333333;
}
input {
    border: 0 none;
    outline: none;
    vertical-align: middle;
}
.goods-shops {
    margin-top: 5px;
    font-size: 14px;
    color: #333333;
    padding: 10px;
    border-bottom: 2px solid #b9b9b9;
}
.goods-shops>i {
    width: 18px;
    height: 19px;
    background: url(http://www.haitaodashi.cn/images/trade/haitao/ellipse-icon.jpg) center center no-repeat transparent;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    margin: 0 10px;
}
.goods-shops .name {
    color: #666666;
}
.goods-shops .youhui-msg {
    margin-left: 20px;
}
.goods-list {
    border: 1px #e5e5e5 solid;
    border-top: none;
}
.goods-list li {
    padding: 20px 10px;
    border-bottom: 1px #c1c1c1 dashed;
    position: relative;
}
.goods-list li:last-child {
    border-bottom: none;
}
.goods-list li .t1, .goods-list li .t2, .goods-list li .t3, .goods-list li .t4, .goods-list li .t5 {
    float: left;
    color: #333333;
}
.goods-list li .t1 {
    width: 130px;
}
.goods-list li .t1 .shixiao {
    display: none;
    vertical-align: middle;
    background-color: #dbdbdb;
    padding: 2px 5px;
    border-radius: 3px;
    color: #5f5e5e;
}
.goods-list li .t1 img {
    width: 78px;
    height: 78px;
    margin-left: 18px;
}
.goods-list li .t2 {
    width: 495px;
    font-size: 14px;
    line-height: 24px;
}
.goods-list li .t2 s {
    color: #666666;
    text-decoration: none;
}
.goods-list li .activity-grid {
    position: relative;
    text-align: left;
    margin-top: 10px;
}
.commodity-supply {
    color: #999;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-indent: 20px;
    background: url(http://sh1.hoopchina.com.cn/images/trademobile/icon/supplier-icon.png) no-repeat left center;
    background-size: 13.8px 15px;
}
.goods-list li .t3 {
    width: 120px;
    margin-top: 15px;
}
.goods-list li .t3 span {
    display: inline-block;
    vertical-align: middle;
}
.goods-list li .t3 .a1 {
    width: 16px;
    height: 25px;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
.goods-list li .t3 .a2, .goods-list li .t3 .number {
    width: 33px;
    height: 23px;
    border: 1px #d5d5d5 solid;
    text-align: center;
    line-height: 23px;
}
.goods-list li .t3 .a3 {
    width: 16px;
    height: 25px;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
.goods-list li .t3 span {
    display: inline-block;
    vertical-align: middle;
}
.goods-list li .t3 .a3.bgs {
    color: #ccc;
    cursor: auto;
}
.goods-list li .t4 {
    width: 235px;
    text-align: center;
    position: relative;
}
.goods-list li .t4 .price {
    margin-top: 10px;
}
.goods-list li .t4 p {
    color: #ad0007;
    font-size: 14px;
}
.goods-list li .t4 .change {
    color: #333333;
    text-align: center;
    margin-top: 5px;
}
.goods-list li .t5 {
    width: 75px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
.go-buy {
    margin-top: 20px;
    background-color: #f9f9fb;
    font-size: 14px;
    z-index: 90;
}
.go-buy .area-left {
    float: left;
    width: 937px;
    padding: 0 10px;
    margin: 10px 0;
    font-size: 14px;
}
.go-buy .area-left .area-main {
    float: left;
}
.go-buy .area-left .area-main .fleft {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
}
.go-buy #delete_id {
    cursor: pointer;
}
.go-buy .area-left .area-main .fleft.border-left {
    border-left: 1px solid #e1e1e1;
    padding: 0 0 0 15px;
    margin-left: 15px;
}
.go-buy .area-left .area-main .fleft p {
    line-height: 33px;
    width: 455px;
    white-space: nowrap;
}
.go-buy i {
    color: #666666;
    font-style: normal;
}
a{
    cursor: pointer;
}
.go-buy .area-left .area-main .fleft p s {
    margin-right: 10px;
}
.go-buy s {
    color: #da1d26;
    text-decoration: none;
}
.go-buy .area-left .area-main .fleft p.gray {
    color: #939393;
    font-size: 12px;
}
.go-buy .area-left .area-main .fleft p.gray .rul-haitao {
    color: #ad0007;
    text-decoration: underline;
}
.go-buy .area-left .total-right {
    float: right;
}
.go-buy .area-left .total-right p {
    text-align: right;
    line-height: 33px;
}
.go-buy s {
    color: #da1d26;
}
.go-buy .area-left .total-right p .red-border {
    border: 1px solid #ad0007;
    border-radius: 15px;
    color: #ad0007;
    padding: 0 5px;
    line-height: 18px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    margin: 0 0 3px 5px;
}
.go-buy s.price-id-3 {
    margin-right: 5px;
}
.go-buy .area-left .total-right p b {
    font-size: 22px;
    color: #da1d26;
}
.go-buy .area-right {
    float: right;
}
.go-buy .area-right input {
    width: 120px;
    height: 90px;
    background-color: #da1d26;
    color: #fff;
    border: 0px;
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    font-size: 22px;
    cursor: pointer;
}
.relatePro {
    width: 1038px;
    margin: 20px auto 0;
    border: 1px solid #e5e5e5;
    padding: 18px 20px 10px 20px;
}
.relatePro h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
}
.relatePro ul {
    width: 1000px;
    display: block;
    overflow: hidden;
    text-align: left;
    margin: 20px auto 0;
}
.relatePro ul li {
    width: 170px;
    margin: 0 15px;
    float: left;
}
.relatePro ul li .img {
    width: 160px;
    height: 160px;
    margin: 0 auto;
}
.relatePro ul li .img img {
    height: 160px;
    display: block;
    margin: 0 auto;
}
.relatePro ul li .title {
    margin-top: 15px;
    height: 35px;
    overflow: hidden;
}
.relatePro ul li p {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
}
.relatePro ul li .price {
    margin-top: 5px;
    font-weight: bold;
}


.foot-tips-box {
    border-top: 1px #dbdbdb dotted;
    text-align: center;
    padding-top: 20px;
    margin-top: 10px;
}
.foot-tips-box img{
    margin:auto;
}
</style>