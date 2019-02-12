<template>
    <div class="ss-screen">
       <div class="bg-img">
            <img src="https://w1.hoopchina.com.cn/passport/pc/images/bg.jpg" alt="">
        </div>
        <div class="user-login">
            <div class="back-title">
	            <a href="javascript:;"> <b>&lt;</b> 返回上页</a>
	        </div>
            <div class="login-wrap">
                <div class="logo">
                    <img src="https://w1.hoopchina.com.cn/passport/pc/images/logo-shihuo.png" alt="">
                </div>
               <div  class="common-form register-form"  id="rigester" autocomplete="off">
                   <ul>
                       <li class="clearfix error">
                            <div class="ipt-wrap">
                                <input autocomplete="off"  type="text" placeholder="请输入大陆地区的手机号" maxlength="11" id="username" class="mobile"><p class="error-tips" style="display:none">请输入手机号</p>
                            </div>
                        </li>
                        <li class="clearfix">
                            <div id="float-captcha" class="hide"><div id="SM_BTN_WRAPPER_1" class="sm-btn-wrapper"><div id="SM_BTN_1" class="sm-btn sm-btn-default" style="width: 380px; height: 44px; line-height: 44px;">
                            <div class="sm-ico">
                            <div class="right-tick">
                                <div class="right-tick-left"></div>
                                <div class="right-tick-right"></div>
                            </div>
                            <div class="wrong-cross">
                                <div class="wrong-cross-left"></div>
                                <div class="wrong-cross-right"></div>
                            </div>
                            <div class="shield">
                                <svg width="12px" height="14px" viewBox="0 0 200 255">
                                <g id="Page3" stroke="#eeeeee" strokewidth="1" fill="none" fillrule="evenodd">
                                    <g id="Group3" fill="#ffffff" fillrule="nonzero">
                                    <path d="M192.215987,31.5402031 C190.026012,31.619176 187.868479,31.6497744 185.757709,31.6497744 L185.748648,31.6497744 C130.221833,31.6497744 105.760339,6.2755772 105.556627,6.05672609 L100.008184,0 L94.4518488,6.05672609 C94.2095573,6.32191195 68.3980713,33.5987437 7.78430533,31.5402029 L2.8561292e-07,31.2753086 L0,146.302981 C0,176.418758 10.0841737,220.345176 97.2848165,253.952079 L100.000584,255 L102.715183,253.952079 C189.915826,220.345176 200,176.418467 200,146.302981 L200,31.2753086 L192.215987,31.5402031 Z" id="Shape3"></path>
                                    </g>
                                </g>
                                </svg>
                            </div>
                            <div class="sm-ico-wave"></div>
                            <div class="out-silder-circle"></div>
                            </div>
                            <span id="SM_TXT_1" class="sm-txt">点击按钮开始智能验证</span>
                            <div id="rectMask" style="width: 382px; height: 46px; line-height: 46px;">
                            <div class="rect-top" id="rectTop" style="width: 380px; height: 22px; line-height: 44px;"></div>
                            <div class="rect-bottom" id="rectBottom" style="width: 380px; height: 22px; line-height: 44px; top: 23px;"></div>
                            </div>
                        </div>
                        <div id="sm-btn-bg" style="width: 380px; height: 44px; line-height: 44px;">
                        </div></div></div>
                    </li>
                    <li class="clearfix">
                        <div class="ipt-wrap authcode-wrap fl">
                            <input autocomplete="off" type="text" class="msgcode" name="authcode" placeholder="输入短信验证码" id="password" >
                        </div>
                        <button type="button" class="get-vercode fl" data-btn="短信发送中">获取短信验证码</button>
                    </li>
                    <li>
                        <div class="protocol">我已经阅读并同意
                            <a href="javascript:;" target="_blank">虎扑识货用户协议（含隐私政策）</a></div>
                    </li>
                    <li><input type="submit" class="reg-btn" id="J_register" value="注册" @click="register"></li>
                   </ul>
               </div>
                <lr-foot></lr-foot>
            </div>
        </div>
    </div>
</template>

<script>
import lrFoot from "../components/lrFoot"
import axios from 'axios';
    export default {
        name:"login",
        components:{lrFoot},
        methods:{
           async register(){
                var username = document.getElementById('username').value
                var password = document.getElementById('password').value
                let data = await axios({
                    url:"http://localhost:3000/register",
                    method:"POST",
                    data:{
                        username,
                        password
                    }
                });
                if(data.data.status===0){
                    this.$router.push('/login')
                }
            }
        }
    }
</script>

<style scoped>
.bg-img {
    position: fixed;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    z-index: -1;
    *display: none;
}
.bg-img img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
}
.s-screen .user-login, .ss-screen .user-login {
    padding-top: 30px;
}
.user-login {
    padding-top: 60px;
    width: 540px;
    margin: 0 auto;
}
.back-title a {
    display: block;
    font-size: 14px;
    line-height: 28px;
    color: #fff;
}
.back-title a b {
    font-family: 'simsun';
    font-weight: 700;
}
.login-wrap {
    background-color: #fff;
    min-height: 510px;
    padding: 40px 80px 30px;
    position: relative;
}
.login-wrap .logo {
    margin-bottom: 40px;
    text-align: center;
}
.login-wrap .logo img{
    margin:auto;
}
.common-form li {
    margin-bottom: 20px;
    position: relative;
}
.common-form input {
    padding: 0;
    display: block;
    width: 363px;
    height: 44px;
    vertical-align: middle;
    border: 1px solid #CCC;
    padding-left: 15px;
    line-height: 44px\9;
}
.error-tips {
    color: #f36c79;
    /* line-height: 24px; */
    padding: 5px 0 5px 15px;
    /* height: 14px; */
    border: 1px solid #f36c79;
    background-color: #f5d7d7;
    clear: both;
    *margin-top: -1px;
}
.common-form .sp-item {
    margin: -5px 0 10px;
}
.common-form .sp-item a {
    font: 14px/18px 'microsoft yahei';
}
.common-form .forget-btn {
    color: #575757;
}

.common-form .register-btn {
    color: #4dbcff;
    float:right;
}
input[type="submit"], input[type="button"] {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
}
.common-form .submit-btn, .common-form .reg-btn {
    border: none;
    background-color: #e42837;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    width: 380px;
    padding: 0;
}
#float-captcha {
    margin: 0 auto;
    display: inline-block;
    height: auto;
    outline: 0;
    color: #989797;
}
.hide {
    display: none;
}
.sm-btn-wrapper {
    position: relative;
}
.sm-btn {
    line-height: 42px;
    border: 1px solid #ddd;
    cursor: pointer;
    overflow: hidden;
}
.sm-btn-default .sm-ico, .sm-btn-fail .sm-ico, .sm-btn-loading .sm-ico, .sm-btn-success .sm-ico {
    position: relative;
    background: none;
    display: inline-block;
    margin-top: -3px;
    margin-left: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
    vertical-align: middle;
}
.sm-btn-default .right-tick, .sm-btn-default .wrong-cross, .sm-btn-loading .right-tick, .sm-btn-loading .wrong-cross, .sm-btn-success .wrong-cross {
    display: none;
}
.sm-btn-default .shield, .sm-btn-fail .shield, .sm-btn-loading .shield, .sm-btn-success .shield {
    width: 12px;
    height: 14px;
    line-height: 38px;
    left: 12px;
    position: absolute;
    z-index: 1000;
    top: -1px;
}
.sm-btn-default .shield {
    animation: shieldanimation 1.5s infinite;
}
.sm-btn-default .out-silder-circle {
    animation: defaultOutsideWave 1.5s ease infinite;
}
.sm-btn-default .out-silder-circle, .sm-btn-loading .out-silder-circle {
    position: absolute;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    top: 0;
}
.sm-btn-default .out-silder-circle {
    background: #c3efe8;
}
.sm-btn-default .sm-ico-wave, .sm-btn-loading .sm-ico-wave, .sm-btn-success .sm-ico-wave {
    background-image: linear-gradient(0deg,#3a9afa,#00de76);
}
.sm-btn-default .sm-ico-wave, .sm-btn-fail .sm-ico-wave, .sm-btn-loading .sm-ico-wave, .sm-btn-success .sm-ico-wave {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    position: relative;
    z-index: 800;
    left: 5px;
    top: 5px;
}
.sm-btn-default .sm-ico-wave {
    animation: defaultWave 1.5s ease infinite;
}
.sm-txt {
    margin-left: 20px;
    font-size: 14px;
    vertical-align: middle;
    color: #3c3c3c;
    white-space: pre-wrap;
}
#rectMask, #sm-btn-bg {
    overflow: hidden;
    position: absolute;
}
#rectMask {
    top: 0;
    left: 0;
}
#sm-btn-bg {
    background-image: linear-gradient(0deg,#ededed,#fff);
    cursor: pointer;
    z-index: -1;
    top: 1px;
    left: 1px;
}
#rectMask, #sm-btn-bg {
    overflow: hidden;
    position: absolute;
}
.authcode-wrap {
    width: 165px;
    margin-right: 25px;
}
.authcode-wrap input {
    width: 148px;
}
.common-form input {
    padding: 0;
    display: block;
    width: 363px;
    height: 44px;
    vertical-align: middle;
    border: 1px solid #CCC;
    padding-left: 15px;
    line-height: 44px\9;
}
.get-vercode {
    width: 188px;
    border: 1px solid #e42837;
    text-align: center;
    line-height: 44px;
    color: #e42837;
    background-color: #f0f0f0;
    cursor: pointer;
}
.get-vercode {
    float: left;
    width: 180px;
    height: 42px;
    background-color: #e42837;
    text-align: center;
    font: 14px/42px 'simsun';
    color: #fff;
}
.protocol {
    background: url(https://w1.hoopchina.com.cn/passport/pc/images/tick.jpg) left center no-repeat;
    padding-left: 25px;
    font-size: 14px;
}
.protocol a {
    color: #4dbcff;
}
.common-form .submit-btn, .common-form .reg-btn {
    border: none;
    background-color: #e42837;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    width: 380px;
    padding: 0;
}
.fl {
    float: left;
}
.authcode-wrap input {
    width: 148px;
}
</style>