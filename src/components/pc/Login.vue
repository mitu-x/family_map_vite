<script lang="ts" setup>

import {ref} from "vue";
import {message} from "ant-design-vue";
import router from "@/router/index.ts";

let username = ref("");
let password = ref("");

const signIn = ()=>{
  console.log(username.value,password.value)
  if (password.value === 'cool') {
    sessionStorage.setItem('token', 'cool')
    sessionStorage.setItem('authority', '1111')
    router.push('/')
  } else if (password.value === '1234') {
    sessionStorage.setItem('token', '1234')
    sessionStorage.setItem('authority', '0111')
    router.push('/')
  } else {
    message.error('密码错误')
  }
}
const register= ()=>{
  router.push('/register')
}

</script>

<template>
  <div class="container">
    <div class="cc">
      <div class="right">
        <div class="inputs">
          <div class="logo">登录</div>
          <div class="username input">
            <a-input v-model:value="username" placeholder="账号"/>
          </div>
          <div class="password input">
            <a-input-password v-model:value="password" placeholder="密码" @keyup.enter="signIn"/>
          </div>
          <div class="btn">
            <a-button class="signIn" @click="signIn">登录</a-button>
            <a-button class="signUp" @click="register">注册</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  background-color: #0c162a;
  padding: 100px;
}

.right {
  margin: auto;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  box-shadow: 0 0 45px 0 #fff;
  background-color: #0c162a;
  display: flex;
  justify-content: center;
  align-items: center;

  & .inputs {
    width: 300px;
    height: 300px;
    padding: 0 50px;

    & .logo {
      color: #ffffff;
      font-size: 40px;
      height: 80px;
      text-align: center;
    }

    & .input {
      margin-bottom: 30px;
    }

    & .btn {
      display: flex;
      justify-content: space-between;

      & .signIn {
        background-color: #0c162a;
      }

      & .signUp {
        background-color: #0c162a;
      }

      & button {
        color: #fff;
        width: 80px;
      }
    }
  }
}
</style>