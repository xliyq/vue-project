<template>
    <el-card class="login-card">
        <div slot="header">
            <img :src="logo" class="logo-img">
            <span class="logo-text">登录</span>
        </div>
        <el-form class="login" :rules="rules" ref="ruleForm" :model="ruleForm" label-width="100px">
            <el-form-item label="手机号" prop="phone">
                <el-input placeholder="请输入手机号" icon="my-phone" v-model="ruleForm.phone" type="tel"
                          :maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" icon="my-password" v-model="ruleForm.password"
                          type="password" @keyup.enter="login"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="ruleForm.is_remember">记住账号</el-checkbox>
                <el-checkbox v-model="ruleForm.is_auto_login">自动登录</el-checkbox>

            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login" @keyup.enter="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import logoSrc from '../assets/logo.png'
    export default{
        data () {
            return {
                logo: logoSrc,
                ruleForm: {
                    phone: '',
                    password: '',
                    is_remember: false,
                    is_auto_login: false
                },
                rules: {
                    phone: [
                        {required: true, message: '手机号必填', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码必填', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            login () {
            }
        }
    }
</script>

<style>
    .login-card {
        width: 800px;
        margin: 100px auto;
    }

    .login {
        display: block;
        width: 400px;
        margin: 100px auto;
    }

    .logo-img {
        width: 20px;
        height: 20px;
    }

    .logo-text {
        margin-left: 20px;
    }
</style>
