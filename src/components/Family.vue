<script lang="ts" setup>
import FamilyPerson from "./FamilyPerson.vue";
import {ref} from 'vue'

interface Person {
  uuid: string,
  name: string,
}

interface ResPersonInfo extends Person {
  gender: '男' | '女' | '未知',
  dateOfBAD: string,
  homeTown: string,
  ethnic: string,
  profession: string,
  degree: string,
  politicsStatus: string,
  personalProfile: string,
  parent: Person[],
  spouse: Person[],
  siblings: Person[],
  children: Person[]
}

const selectAll = ref(false)
const inputString = ref('')
const selectRes = ref<'1' | '2'>('1')
const searchResult = ref<ResPersonInfo | null>(null)
const titleTo = ['父母', '配偶', '兄弟姐妹', '子女']
// 测试数据
const data: ResPersonInfo = {
  uuid: '1',
  name: '陈家安',
  gender: '男',
  dateOfBAD: '不详',
  homeTown: '不详',
  ethnic: '土家族',
  profession: '不详',
  degree: '不详',
  politicsStatus: '不详',
  personalProfile: '1990年出生于广东省广州市，2010年考入中山大学，2014年本科\n' +
      '          毕业并获得学士学位。2014年9月考入中山大学软件学院，2017年保研至\n' +
      '          中山大学软件学院攻读硕士学位。',
  parent: [],
  spouse: [{uuid: "uuid", name: '冉氏'}],
  children: [{uuid: "uuid", name: '陈芝茂'}, {uuid: "uuid", name: '陈芝顺'}],
  siblings: [{uuid: "uuid", name: '陈芝茂'}, {uuid: "uuid", name: '陈芝顺'}, {
    uuid: "uuid",
    name: '陈芝茂'
  }, {uuid: "uuid", name: '陈芝顺'}, {uuid: "uuid", name: '陈芝茂'}, {uuid: "uuid", name: '陈芝顺'}, {
    uuid: "uuid",
    name: '陈芝茂'
  }, {uuid: "uuid", name: '陈芝顺'}, {uuid: "uuid", name: '陈芝茂'}, {uuid: "uuid", name: '陈芝顺'}, {
    uuid: "uuid",
    name: '陈芝茂'
  }, {uuid: "uuid", name: '陈芝顺'}]
}

const dataList: Person[][] = [
  [{uuid: '1', name: '陈家安'}, {uuid: '2', name: '冉氏'}],
  [{uuid: '3', name: '陈芝茂'}, {uuid: '4', name: '陈芝顺'}],
  [{uuid: '5', name: '陈珍福'}, {uuid: '6', name: '陈珍凡'}, {uuid: '5', name: '陈珍福'}, {
    uuid: '6',
    name: '陈珍凡'
  }, {uuid: '5', name: '陈珍福'}, {uuid: '6', name: '陈珍凡'}, {uuid: '5', name: '陈珍福'}, {
    uuid: '6',
    name: '陈珍凡'
  }],
]
const searchByUUID = (uuid: string | undefined) => {
  console.log(uuid)
  selectRes.value = '1'
  selectAll.value = false
  searchResult.value = data;
  // searchByUUID()
}
const search = () => {
  // 调用搜索方法
  selectRes.value = '1'
  selectAll.value = false
  console.log(inputString.value)
  searchResult.value = data;
}
const changeHandle = () => {
  selectAll.value = selectRes.value === '2'
}
</script>

<template>
  <div key="sear" class="search-box">
    <select v-model="selectRes" class="name" title="选择" @change="changeHandle">
      <option value="1">搜索</option>
      <option value="2">全部</option>
    </select>
    <input v-model="inputString" placeholder="请输入姓名" type="text"/>
    <img alt="搜索" src="../assets/images/search-family.png" @click="search"/>
  </div>
  <div v-if="!selectAll && searchResult " class="search-result">
    <div class="desc">
      <div class="title">{{ searchResult.name }}-生平简介</div>
      <div class="con">
        <p>
          性别：
          <span>{{ searchResult.gender }}</span>
        </p>
        <p>
          生卒年：
          <span>{{ searchResult.dateOfBAD }}</span>
        </p>
        <p>
          籍贯：
          <span>{{ searchResult.homeTown }}</span>
        </p>
        <p>
          民族：
          <span>{{ searchResult.ethnic }}</span>
        </p>
        <p>
          政治面貌：
          <span>{{ searchResult.politicsStatus }}</span>
        </p>
        <p>
          个人简介：
          <span>{{ searchResult.name }}，{{ searchResult.personalProfile }}</span>
        </p>
      </div>
    </div>
    <div class="pic">
      <FamilyPerson :list="searchResult.parent" :title="titleTo[0]" @FatherClick="searchByUUID"></FamilyPerson>
      <FamilyPerson :list="searchResult.spouse" :title="titleTo[1]" @FatherClick="searchByUUID"></FamilyPerson>
      <FamilyPerson :list="searchResult.siblings" :title="titleTo[2]" @FatherClick="searchByUUID"></FamilyPerson>
      <FamilyPerson :list="searchResult.children" :title="titleTo[3]" @FatherClick="searchByUUID"></FamilyPerson>
    </div>
  </div>
  <div v-if="selectAll" class="all-result">

    <FamilyPerson v-for="(item,index) in dataList" :key="index" :list="item" :title="(index+1)+'代'"
                  @FatherClick="searchByUUID"></FamilyPerson>
  </div>

</template>

<style lang="less" scoped>
a {
  color: #fff;
}

.search-box {
  display: flex;
  align-items: center;
  height: 2.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding-right: 0.5rem;

  .name {
    background-color: @family-color;
    height: 2.5rem;
    line-height: 2.5;
    color: #fff;
    width: 4rem;
    text-align: center;
    border: 0;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    &:focus-visible {
      outline: 0;
      border: 0;
    }
  }

  input {
    height: 30px;
    border: none;
    outline: none;
    padding: 0 1rem;
    color: #666;
    flex: 1;
  }

  img {
    width: 1.5rem;
  }
}

.desc {
  position: relative;
  min-height: 10rem;
  //max-height: 20vh;
  background-color: #fff;
  border-radius: 00.5rem;
  margin-top: 1rem;

  .title {
    background-color: @family-color;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    padding: 0 1rem;
    color: #fff;
    top: -1rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .con {
    padding: 1rem;

    p {
      font-size: 14px;

    }
  }
}

</style>