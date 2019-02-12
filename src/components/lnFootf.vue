<template>
    <div>
        <div class="friendly-link clearfix">
			<div class="securityPic">
                <p>虎扑（上海）文化传播股份有限公司 沪B2-20120042  <a href="javascript:;" target="_blank">沪ICP备05037078号-17</a></p>
                <a href="javascript:;" target="_blank"><img src="http://www.shihuo.cn/images/trade/shanghaiGSicon.gif" alt="上海工商"></a>
                <span></span>
                <a href="javascript:;" target="_blank"><img src="http://sh1.hoopchina.com.cn/images/trade/wangbei2.jpg"></a>
                <span></span>
                <a href="javascript:;" target="_blank"><img src="http://b3.hoopchina.com.cn/images/wl_wljga.png" alt="金华市公安局网络报警"></a>
                <span></span>
                <a href="javascript:;" target="_blank"><img src="http://b3.hoopchina.com.cn/images/wl_wlshzxw.png" alt="网络社会征信网"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"lnFootf"
    }
</script>

<style scoped>
.friendly-link {
    margin: 0 auto;
    margin-top: 5px;
    padding: 10px 40px;
    width: 900px;
    color: #999;
    font-size: 12px;
    font-family: "Microsoft YaHei";
}
.securityPic {
    text-align: center;
    margin-bottom: 30px;
}
.friendly-link p {
    line-height: 2em;
    vertical-align: top;
    text-align: center;
}
.securityPic p {
    margin-bottom: 8px;
}
.friendly-link p a {
    border-right: 1px solid #f2f2f2;
    color: #999;
    font-size: 12px;
    font-family: "Microsoft YaHei"!important;
    padding: 0 5px;
}
.securityPic a{
    display: inline-block;
}
.friendly-link p a:last-child {
    border: medium none;
}

.securityPic span {
    padding: 0 5px;
}
</style>