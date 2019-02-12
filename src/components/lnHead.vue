<template>
    <div class="shihuo-nav-area">
        <div class="logos-box clearfix">
            <div class="logo">
                <img src="//sh1.hoopchina.com.cn/images/trade/logo_sh.png?20160304">
            </div>
            <div class="hupu-logo-class icon-link">
              <img width="124" height="43" alt="虎扑旗下购物平台" src="//sh1.hoopchina.com.cn/images/trade/common/header_t.png">
            </div>
            <div class="search clearfix">
                <div class="input">
                    <input id="submit_nav" type="text" value="" onfocus="this.style.color='#333';" onblur="this.style.color='#333';" autocomplete="off" name="w" placeholder="" style="color: rgb(51, 51, 51);">
                </div>
                <div class="tags">
                    <a href="javascript:;" v-for="(item,index) in tags" :key="index">{{item.title}}</a>
                </div>
                <div class="btn" id="seach_sub"></div>
            </div>
            <div class="imgs fr">
                <a href="javascript:;" ><img alt="下载识货APP" src="//sh1.hoopchina.com.cn/images/trade/common/header_d.png"></a>
            </div>
        </div>
        <div class="nav-area">
            <div class="area-min clearfix">
                <ul class="menu_nav">
                    <li v-for="(item,index) in navs" :key='index'><a href="javascript:;" :class="{on:showIndex===index}">{{item.title}}</a></li>
                </ul>
                <div class="nav-area-right">
                    <router-link to="cart" class="cart" href="javascript:;">
                        <i class="icon-cart"></i>&nbsp;x&nbsp;<b>0</b>
                    </router-link>
                    <div class="unsign">
                      <router-link to='login'>登录</router-link><span>|</span><router-link to="register">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-nva-list-small">
            <dl>
                <dt>分类导航</dt>
                <dd v-for="(item,index) in classes" :key="index"  :class="item.className"> 
                    <a href="javascript::">
                        <s></s>
                        {{item.title}}
                    </a>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name:"lnHead",
        data(){
            return {
                tags:[
                    {
                        title:"Nike"
                    },
                    {
                        title:"AJ"
                    },
                    {
                        title:"篮球鞋"
                    },
                    {
                        title:"阿迪"
                    },
                    {
                        title:"一键购教程"
                    }
                ],
                navs:[
                    {title:"首页"},
                    {title:"优惠"},
                    {title:"团购"},
                    {title:"海淘"},
                    {title:"识物"},
                    {title:"晒物"},
                    {title:"推荐店铺"},
                    {title:"兑换中心"},
                ],
                showIndex:2,
                classes:[
                    {title:"篮球",className:"d1"},
                    {title:"潮流",className:"d2"},
                    {title:"跑步",className:"d3"},
                    {title:"数码",className:"d4"},
                    {title:"理容",className:"d5"},
                ]
            }
        }
    }
</script>

<style scoped>
#shihuo-nav-area {
    position: relative;
}
.logos-box {
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    height: 50px;
    margin: 0 auto;
    padding: 19px 0 15px 0;
    position: relative;
    width: 1080px;
    z-index: 59;
}
.logos-box .logo {
    float: left;
    width: 86px;
    height: 50px;
    overflow: hidden;
}
.hupu-logo-class {
    float: left;
    border-left: 1px solid #d17980;
    float: left;
    padding: 5px 70px 5px 5px;
    margin-right: 40px;
}
.logos-box .search {
    position: relative;
    border: 2px solid #b50000;
    float: left;
    height: 33px;
    margin-top: 8px;
    width: 500px;
}
.logos-box .search .input {
    position: relative;
    float: left;
    height: 33px;
    width: 360px;
}
.logos-box .search .input input {
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    outline: none;
    border: 0 none;
    color: #9c9c9c;
    height: 33px;
    padding-left: 10px;
    width: 320px;
    line-height: 33px;
}
.search .tags {
    position: absolute;
    height: 28px;
    right: 65px;
    top: 6px;
}
.search .tags a {
    display: inline-block;
    vertical-align: middle;
    background-color: #f3f3f3;
    border-radius: 10px;
    line-height: 20px;
    padding: 0 8px;
    margin-left: 10px;
    color: #666666;
}
.search .tags a:last-child {
    color: #b50000;
    background-color: transparent;
}
.logos-box .search .btn {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/search.png) no-repeat center center #b50000;
    color: #fff;
    cursor: pointer;
    float: right;
    font-size: 16px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    width: 54px;
}
.fr {
    float: right;
}
.fl, .fr {
    display: inline;
}
.logos-box .imgs {
    margin-top: -8px;
    margin-left: 50px;
    position: relative;
    z-index: 88;
}
.nav-area {
    background-color: #b50000;
    font: 12px \5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    min-width: 1080px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    z-index: 58;
}
.nav-area .area-min {
    margin: 0 auto;
    position: relative;
    width: 1080px;
}
.nav-area .area-min .menu_nav {
    cursor: pointer;
    height: 40px;
    float: left;
}
.nav-area .area-min .menu_nav > li {
    float: left;
}

.menu_nav li {
    position: relative;
}
.nav-area .area-min .menu_nav > li > a {
    font-size: 16px;
    color: #fff;
    display: inline-block;
    height: 35px;
    line-height: 40px;
    padding: 0 28px;
    border-bottom: 5px solid transparent;
}
.nav-area .area-min .menu_nav > li > a.on {
    background-color: #da1d26;
    color: #fff;
    line-height: 40px;
    text-decoration: none;
    font-weight: bold;
}
.nav-area-right {
    float: right;
    background-color: #da1d26;
    padding-left: 5px;
}
.nav-area-right .cart {
    display: inline-block;
    text-align: center;
    height: 22px;
    line-height: 22px;
    padding: 0 10px;
    border-radius: 10px;
    vertical-align: middle;
    float: left;
    margin-top: 8px;
    font-weight: bold;
    color: #fff;
}
.nav-area-right .cart .icon-cart {
    width: 24px;
    height: 21px;
    display: inline-block;
    vertical-align: top;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/cart.png) no-repeat center top transparent;
}
.unsign {
    margin-left: 10px;
    display: inline-block;
    line-height: 40px;
    height: 40px;
    padding-right: 18px;
    float: left;
}
.unsign a, .signed .name >a {
    font-size: 14px;
    color: #fff;
}
.unsign {
    margin-left: 10px;
    display: inline-block;
    line-height: 40px;
    height: 40px;
    padding-right: 18px;
    float: left;
}
.unsign span {
    margin: 0 5px;
    color: #fff;
}
.top-nva-list-small {
    background-color: #ffffff;
    height: 40px;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0,0,0,.05);
    position: relative;
    z-index: 28;
}
.top-nva-list-small dl {
    width: 1080px;
    margin: 0 auto;
    padding-top: 12px;
}
.top-nva-list-small dl dt {
    float: left;
    border-left: 2px #b70000 solid;
    font-size: 16px;
    padding-left: 10px;
    position: relative;
    top: -2px;
}
.top-nva-list-small dl dd {
    float: left;
    padding: 0 30px;
    border-right: 1px #e5e5e5 solid;
    color: #666666;
    position: relative;
}
.top-nva-list-small dl a {
    display: block;
    color: #666666;
}
.top-nva-list-small dl dd.d1 s {
    display: inline-block;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon1.png) no-repeat;
    width: 14px;
    height: 19px;
    position: relative;
    top: -2px;
    margin-right: 5px;
    vertical-align: middle;
}
.top-nva-list-small dl dd.d2 s {
    display: inline-block;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon3.png) no-repeat;
    width: 16px;
    height: 16px;
    position: relative;
    top: -1px;
    margin-right: 5px;
    vertical-align: middle;
}
.top-nva-list-small dl dd.d3 s {
    display: inline-block;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon2.png) no-repeat;
    width: 24px;
    height: 9px;
    position: relative;
    top: -2px;
    margin-right: 5px;
    vertical-align: middle;
}
.top-nva-list-small dl dd.d4 s {
    display: inline-block;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon6.png) no-repeat;
    width: 16px;
    height: 14px;
    position: relative;
    top: -1px;
    margin-right: 5px;
    vertical-align: middle;
}
.top-nva-list-small dl dd.d5 s {
    display: inline-block;
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon7.png) no-repeat;
    width: 11px;
    height: 17px;
    position: relative;
    top: -1px;
    margin-right: 5px;
    vertical-align: middle;
}
.top-nva-list-small dl .d1.on s, .top-nva-list-small dl .d1:hover s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon1-on.png) no-repeat;
}

.top-nva-list-small dl .d2.on s, .top-nva-list-small dl .d2:hover s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon3-on.png) no-repeat;
}
.top-nva-list-small dl .d3.on s, .top-nva-list-small dl .d3:hover s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon2-on.png) no-repeat;
}
.top-nva-list-small dl .d4.on s, .top-nva-list-small dl .d4:hover s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon6-on.png) no-repeat;
}
.top-nva-list-small dl .d5.on s, .top-nva-list-small dl .d5:hover s {
    background: url(http://sh1.hoopchina.com.cn/images/trade/common/icon7-on.png) no-repeat;
}
.top-nva-list-small dl a:hover{
    color:#b50000;
}
</style>