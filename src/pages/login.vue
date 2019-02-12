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
                <div class="common-form login-form" id="J_loginForm">
                    <ul>
                        <li class="error">
                            <div class="ipt-wrap">
                                <input id="username" autocomplete="off" type="text" name="username" placeholder="登录名/手机号/邮箱" data-rule="empty" data-name="帐号"  tabindex="1"><p class="error-tips" style="display:none">请输入帐号</p>
                            </div>
                        </li>
                        <li id="J_insertVali">
                            <div class="ipt-wrap">
                                <input id="password" autocomplete="off" type="password" name="password" placeholder="密码" data-rule="empty" data-name="密码"  tabindex="2">
                            </div>
                        </li>
                        <li class="clearfix sp-item">
                            <a href="javascript:;" class="forget-btn fl">忘记密码？</a>
                            <router-link to="register" class="register-btn fr" >没有帐号，立即注册 <b>&gt;</b></router-link>
                        </li>
                        <li><input type="submit" class="submit-btn" id="J_submit" value="登录" @click="login"></li>
                    </ul>
                </div>
                <lr-foot></lr-foot>
            </div>
        </div>
    </div>
</template>

<script>
import lrFoot from "../components/lrFoot"
import axios from "axios"
    export default {
        name:"login",
        components:{lrFoot},
        methods:{
           async login(){
                var username = document.getElementById('username').value
                var password = document.getElementById('password').value
                let data = await axios({
                    url:"http://localhost:3000/login",
                    method:"POST",
                    data:{
                        username,
                        password
                    }
                });

                if(data.data.status===0){
                    sessionStorage.setItem('username',data.data.user.username)
                    this.$router.push("/")
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

</style>