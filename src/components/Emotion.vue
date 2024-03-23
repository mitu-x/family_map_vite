<script lang="ts" setup>
import {ref} from "vue";
import {getListByName} from '../api/emotion.ts'
import {message} from 'ant-design-vue';

type Res = [{
  name: string,
  cash: string,
  bookName: string
}]
let inputString = ref("")
let hasResult = ref(0)
let total = ref(0)
let resList = ref<null | Res>(null)
let columns = [
  {
    title: '名字',
    align: 'center',
    dataIndex: 'name',
    key: 'name',
  },
  {
    align: 'center',
    title: '金额',
    dataIndex: 'cash',
    key: 'cash',
  },
  // {
  //   align: 'center',
  //   title: '表名',
  //   dataIndex: 'bookName',
  //   key: 'bookName',
  //   ellipsis: true
  // }
]
// 搜索按钮
const search = () => {

  // 向后端发送请求
  getListByName(inputString.value).then((res: any) => {
    if (!res.success) {
      message.error("查询失败");
      return
    }
    if (res.result.total === 0) {
      message.info("没有查询到结果");
      return
    }
    message.info("查询成功");
    total.value = res.result.total as number
    resList.value = res.result.data as Res
    // 判断是否超过10条
    if (total.value < 10) {
      hasResult.value = 1
    } else {
      hasResult.value = 2
    }


  }).catch(() => {
    message.error("网络连接错误");
  })
}

</script>

<template>
  <div class="search-container">

    <div key="sear" class="search-box">
      <select title="name">
        <option selected> 人名</option>
        <!--        <option>表名</option>-->
      </select>
      <input v-model="inputString" placeholder="请输入姓名" type="text">
      <img alt="搜索" src="../assets/images/search-emotion.png" @click="search">
    </div>

    <div v-if="hasResult===1" key="res" class="result-box">
      <div v-for="(item,index) in resList" :key="index" class="list-box">
        <table class="table">
          <tr>
            <td>姓名：</td>
            <td>{{ item.name }}</td>
          </tr>
          <tr>
            <td>金额：</td>
            <td>{{ item.cash }}</td>
          </tr>
          <tr>
            <td>表名：</td>
            <td>{{ item.bookName.replace('.xlsx', '') }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="hasResult===2" key="table-list" class="table-list">
      <a-table :columns="columns" :dataSource="resList" :pagination="{ pageSize: 5,simple:true }"/>
    </div>


  </div>


</template>

<style lang="less" scoped>


.search-container {
  @width: 19rem;
  height: 60vh;
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
    box-shadow: 0 0 8px -1px #666;

    select {

      width: @select-width;
      height: @height;
      border: 1px solid #ccc;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      background-color: @emotion-color;
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

  .result-box {
    width: @width;
    margin-top: 2rem;
    border-radius: 1rem;
    overflow: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 35rem;


    .list-box {
      width: @width - 2rem;
      min-height: 8rem;
      //border: 1px solid #213547;
      background-color: #fff;
      //box-shadow: 0 0 8px 0 #666;
      margin-top: 1rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1.5rem;
    }


  }

  .table-list {
    margin-top: 2rem;
    max-height: 40vh;
    width: 20rem;
  }
}


</style>