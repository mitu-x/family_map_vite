<script lang="ts" setup>

</script>

<template>
<div class="container">
  <div class="cc">
    <div class="right">
      <div class="inputs">
        <div class="logo">登录</div>
        <a-input v-model:value="userName" placeholder="账号">
        </a-input>

        <a-input-password/>

        <a-button>登录</a-button>
      </div>
    </div>
  </div>

</div>
</template>

<style lang="less" scoped>
.container{
  min-height: 100vh;
  background-color: #0c162a;
}
  .right{
    margin:auto;
    border-radius: 50%;
    //float: right;
    width: 500px;
    height: 500px;
    box-shadow:  0 0 45px 0 #fff;
    background-color: #0c162a;
    display: flex;
    justify-content: center;
    align-items: center;

    & .inputs{
      width: 300px;
      height: 300px;
      padding: 0 50px;
      & .logo{
        color: #ffffff;
        font-size: 40px;
        height:80px;
        text-align: center;
      }
    }
  }
</style>