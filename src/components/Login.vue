<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

let passwd = ref("")

const router = useRouter()


const loginTo = () => {
  if (passwd.value === '1234') {

    router.push('/')
  }
}
</script>

<template>
  <div class="box">
    <input v-model="passwd" placeholder="请输入密码..." type="password">
    <a-button class="btn" type="primary" @click="loginTo">登录</a-button>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {

    width: 10rem;
    height: 3rem;
    border: 0;
    padding: 0 2rem;
    color: #888;
    font-size: 1rem;
    border-radius: 0.5rem;

    &:focus-visible {
      outline: 0;
      border: 0;
    }
  }

  .btn {
    margin-top: 1rem;
    width: 6rem;
  }
}


</style>