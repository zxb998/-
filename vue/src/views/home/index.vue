<template>
    <div id="loginBox">
        <div class="loginContent">
            <div class="title animate__fadeOut">welcome to mySystem</div>
            <div class="userContent">
                <el-form label-position="left" :rules="rules" label-width="80px" :model="formLabelAlign"
                    style="max-width: 460px">
                    <el-form-item label="用户名" prop="username">
                        <el-input style="width: 200px;" placeholder="请输入用户名" v-model="formLabelAlign.username" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input style="width: 200px;" placeholder="请输入密码" show-password type='password'
                            v-model="formLabelAlign.password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitLogin()" type="primary">Login</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

interface RuleForm {
    username: string,
    password: string

}

const formLabelAlign = reactive<RuleForm>({
    username: '',
    password: '',
})


const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入用户名！', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '请输入密码！',
            trigger: 'blur',
        },
    ],
})

const submitLogin = () => {
    console.log()
}


</script>

<style scoped lang="less">
#loginBox {
    height: 100vh;
    background: url(../../assets/img/loginBg.jpg) no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .loginContent {
        width: 440px;
        height: 300px;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 20px;

        .title {
            font-size: 22px;
            height: 70px;
            line-height: 70px;
            text-align: center;
            margin-bottom: 20px;
        }

        .userContent {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .login_btn {
            display: flex;
            justify-content: right;
            padding-right: 30px;
            margin-top: 25px;
        }

        /deep/.el-form-item__label {
            color: black;
            font-size: 14px;
        }
    }
}
</style>