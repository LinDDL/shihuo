<template>
    <div>
        <div class="foot-aboutus-bg">
	<div class="foot-aboutus clearfix" style="position:relative;">
		<ul style="text-align: center;padding: 0 30px;">
			<li>
				<dl>
					<dt>关于我们</dt>
					<dd><a href="javascript:;" target="_blank">关于识货</a></dd>
					<dd><a href="javascript:;" target="_blank">联系我们</a></dd>
					<dd><a href="javascript:;" target="_blank">加入我们</a></dd>
                    <dd><a href="javascript:;" target="_blank">意见反馈</a></dd>
                    <dd><a href="javascript:;" target="_blank">用户协议</a></dd>
				</dl>
			</li>
			<li class="sjzx">
				<dl>
					<dt>商家服务</dt>
                    <dd><a href="javascript:;" target="_blank">商家中心</a></dd>
					<dd><a href="javascript:;" target="_blank">团购入驻</a></dd>
					<dd><a href="javascript:;" target="_blank">商家合作</a></dd>
				</dl>
			</li>

			<li class="sjyy">
				<dl>
					<dt>手机应用</dt>
					<dd><a href="javascript:;" target="_blank">iPhone 客户端</a></dd>
					<dd><a href="javascript:;" target="_blank">Android 客户端</a></dd>
				</dl>
			</li>
			<li class="gzwm">
				<dl>
					<dt>关注我们</dt>
					<dd><a href="javascript:;" class="ewm_show">微信</a></dd>
					<dd><a href="javascript:;" target="_blank">新浪微博</a></dd>
				</dl>
			</li>
		</ul>
		<div class="ewm" style="position:absolute;right:40px; top:5px; display:none;">
			<img src="//sh1.hoopchina.com.cn/images/trade/menu/shihuoweixin.jpg?v=201901171900" alt="识货微信" width="106">
		</div>
	</div>
</div>
    </div>
</template>

<script>
    export default {
        name:"lnFoots"
    }
</script>

<style scoped>
.foot-aboutus-bg {
    background-color: #f6f6f6;
    padding: 15px 0;
    margin-top: 20px;
}
.foot-aboutus {
    margin: 0 auto;
    width: 1050px;
    padding-left: 30px;
}
.foot-aboutus-bg .foot-aboutus ul {
    text-align: center;
    padding: 0 30px;
}
.foot-aboutus ul li {
    background: url(http://www.shihuo.cn/images/footer/foot-gywm.png) no-repeat scroll 0 0 rgba(0,0,0,0);
    float: left;
    font-family: "Microsoft YaHei";
    line-height: 2em;
    margin-left: 60px;
    padding-left: 50px;
    padding-top: 5px;
}
.foot-aboutus-bg .foot-aboutus ul li {
    display: inline-block;
    margin: 0 30px;
    vertical-align: top;
    float: none;
}
.foot-aboutus-bg .foot-aboutus ul li {
    display: inline-block;
    margin: 0 30px;
    vertical-align: top;
    float: none;
}
.foot-aboutus ul li dt {
    color: #222;
    font-size: 16px;
    margin-bottom: 5px;
}
.foot-aboutus ul li dd a {
    color: #666;
    font-size: 12px;
}
.foot-aboutus ul li.sjzx {
    background: url(http://www.shihuo.cn/images/footer/foot-sjzx.png) no-repeat scroll 0 0 rgba(0,0,0,0);
}
.foot-aboutus ul li.sjyy {
    background: url(http://www.shihuo.cn/images/footer/foot-sjyy.png) no-repeat scroll 0 0 rgba(0,0,0,0);
}
.foot-aboutus ul li.gzwm {
    background: url(http://www.shihuo.cn/images/footer/foot-gzwm.png) no-repeat scroll 0 0 rgba(0,0,0,0);
}
</style>