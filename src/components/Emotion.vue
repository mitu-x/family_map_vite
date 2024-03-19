<script lang="ts" setup>
import Footer from './Footer.vue'
import {ref} from "vue";
import {getListByName} from '../api/emotion.ts'

let inputString = ref("")
// 搜索按钮
const search = () => {

  // 向后端发送请求
  // ...
  inputString.value && getListByName(inputString.value).then((res: any) => {
    console.log(res)
  }).catch(() => {
    console.log("失败")
  })
}

</script>

<template>
  <div class="search-container">
    <div class="search-box">
      <select>
        <option selected> 人名</option>
        <!--        <option>表名</option>-->
      </select>
      <input v-model="inputString" type="text">
      <img alt="搜索" src="@/assets/images/search.png" @click="search">
    </div>
  </div>

  <Footer></Footer>
</template>

<style lang="less" scoped>
.search-container {
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .search-box {
    //border: 1px solid #fc0000;
    @height: 2.5rem;
    @width: 19rem;
    @select-width: 5rem;
    @img-width: 1.5rem;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    background-color: #fff;
    padding-right: 0.5rem;
    box-shadow: inset 0 1px 4px -1px #666;

    select {

      width: @select-width;
      height: @height;
      border: 1px solid #ccc;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      background-color: #D96666;
      color: #fff;
      font-size: 1rem;
      text-align: center;


      &:focus-visible {
        outline: 0;
        border: 0;
      }


      option {
        border-radius: 0.5rem;

        &[selected] {
          background-color: #fff;
          color: #000;
        }
      }
    }

    input {
      width: @width - @select-width -@img-width;
      height: @height;
      background-color: transparent;
      border: 0;
      padding: 0 1rem;
      color: #888;
      //padding: 0.5rem;
      font-size: 1rem;


      &:focus-visible {
        outline: 0;
        border: 0;
      }
    }

    img {
      width: @img-width;
      height: @img-width;

      &:hover {
        cursor: pointer;
        //transform: scale(1.2);
      }
    }

  }
}

</style>