<template>
    <div class="login-method">
        <a href="javascript:;"  class="login-weixin pop-box">微信登录</a>
        <a href="javascript:;" class="login-qq pop-box">QQ登录</a>
        <a href="javascript:;" class="login-phone">手机短信快捷登录</a>
    </div>
</template>

<script>
    export default {
        name:"lrFoot"
    }
</script>

<style scoped>
.login-method {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 50px;
    text-align: center;
}
.login-method a {
    display: inline-block;
    color: #4dbcff;
    font-size: 16px;
    line-height: 26px;
    padding-left: 25px;
    background-position: left center;
    background-repeat: no-repeat;
}
.login-method .login-weixin {
    background-image: url(https://w1.hoopchina.com.cn/passport/pc/images/wechat-logo.png);
    padding-right: 15px;
    padding-left: 37px;
    border-right: 1px dotted #999;
    margin-right: 13px;
}
.login-method .login-qq {
    background-image: url(https://w1.hoopchina.com.cn/passport/pc/images/qq-logo.png);
    padding-right: 15px;
    border-right: 1px dotted #999;
    margin-right: 13px;
}
.login-method .login-phone {
    background-image: url(https://w1.hoopchina.com.cn/passport/pc/images/phone-logo.png);
}
</style>