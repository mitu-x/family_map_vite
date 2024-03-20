<script lang="ts" setup>
import Footer from './Footer.vue'
import {ref} from "vue";
import {getListByName} from '../api/emotion.ts'
import {message} from 'ant-design-vue';

type Res = {
  name: string,
  cash: string,
  bookName: string
}
let inputString = ref("")
let hasResult = ref(0)
let resMap = ref<null | Res>(null)
// 搜索按钮
const search = () => {

  // 向后端发送请求
  // ...
  if (inputString.value === "") {
    message.error("请输入姓名")
    return
  }
  getListByName(inputString.value).then((res: any) => {
    if (res.errorCode !== '200') {
      message.error("未查询到数据");
      return
    }
    message.info("查询成功");
    resMap.value = res.result as Res
    hasResult.value = 1
  }).catch(() => {
    message.error("未查询到数据");
  })
}

</script>

<template>
  <div class="search-container">
    <transition-group name="list">
      <div key="sear" class="search-box">
        <select>
          <option selected> 人名</option>
          <!--        <option>表名</option>-->
        </select>
        <input v-model="inputString" type="text">
        <img alt="搜索" src="@/assets/images/search.png" @click="search">
      </div>


      <div v-show="hasResult===1" key="li" class="list-box">
        <table class="table">
          <tr>
            <td>姓名：</td>
            <td>{{ resMap?.name }}</td>
          </tr>
          <tr>
            <td>金额：</td>
            <td>{{ resMap?.cash }}</td>
          </tr>
          <tr>
            <td>表名：</td>
            <td>{{ resMap?.bookName }}</td>
          </tr>
        </table>
      </div>

    </transition-group>


  </div>

  <Footer></Footer>
</template>

<style lang="less" scoped>
.list-move,
.list-leave-active,
.list-enter-active {
  transition: opacity 0.5s cubic-bezier(.16, .67, .28, 1.46);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate(2rem, 0);
}


.search-container {
  @width: 19rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .search-box {
    @height: 2.5rem;

    @select-width: 5rem;
    @img-width: 1.5rem;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    background-color: #fff;
    padding-right: 0.5rem;
    box-shadow: 0 0px 8px -1px #666;

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

  .list-box {
    width: @width;
    min-height: 10rem;
    //border: 1px solid #213547;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0 #666;
    margin-top: 5rem;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  .list-scroll {
    width: @width;
    min-height: 20rem;
    //border: 1px solid #213547;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0 #666;
    margin-top: 5rem;
    border-radius: 0.5rem;
  }

}


</style>