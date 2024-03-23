<script lang="ts" setup>

import {ref} from 'vue'

const selectAll = ref(true)
const inputString = ref('')
const search = () => {
  // 调用搜索方法
  console.log('搜索', inputString.value)
}
const self = "陈家安"
</script>

<template>
  <div key="sear" class="search-box">
    <div class="name">
      <span>姓名</span>
    </div>
    <input v-model="inputString" placeholder="请输入姓名" type="text"/>
    <img alt="搜索" src="../assets/images/search-family.png" @click="search"/>
  </div>
  <div v-if="!selectAll" class="search-result">
    <div class="desc">
      <div class="title">{{ self }}-生平简介</div>
      <div class="con">
        <p>
          生卒年：
          <span>1990-2020</span>
        </p>
        <p>
          籍贯：
          <span>广东省广州市</span>
        </p>
        <p>
          民族：
          <span>汉</span>
        </p>
        <p>
          职业：
          <span>工程师</span>
        </p>
        <p>
          学历：
          <span>本科</span>
        </p>
        <p>
          政治面貌：
          <span>党员</span>
        </p>
        <p>
          个人简介：
          <span>{{ self }}，1990年出生于广东省广州市，2010年考入中山大学，2014年本科
          毕业并获得学士学位。2014年9月考入中山大学软件学院，2017年保研至
          中山大学软件学院攻读硕士学位。</span>
        </p>
      </div>
    </div>
    <div class="pic">
      <div class="box">
        <div class="title">
          父母
        </div>
        <div class="result">
          <div class="father person-box">父亲父亲父亲</div>
          <div class="mother person-box">母亲</div>
        </div>
      </div>
      <div class="box">
        <div class="title">
          配偶
        </div>
        <div class="result">
          <div class="wife person-box">
            妻子
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">
          兄弟姊妹
        </div>
        <div class="result">
          <div class="brother person-box">
            兄弟1
          </div>
          <div class="brother person-box">
            兄弟2
          </div>
          <div class="brother person-box">
            兄弟3
          </div>
          <div class="brother person-box">
            兄弟4
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">
          儿女
        </div>
        <div class="result">
          <div class="son person-box">儿子1</div>
          <div class="daughter person-box">女儿1</div>
          <div class="son person-box">儿子2</div>
          <div class="daughter person-box">女儿2</div>
          <div class="son person-box">儿子1</div>
          <div class="daughter person-box">女儿1</div>
          <div class="son person-box">儿子2</div>
          <div class="daughter person-box">女儿2</div>
          <div class="son person-box">儿子1</div>
          <div class="daughter person-box">女儿1</div>
          <div class="son person-box">儿子2</div>
          <div class="daughter person-box">女儿2</div>
          <div class="son person-box">儿子1</div>
          <div class="daughter person-box">女儿1</div>
          <div class="son person-box">儿子2</div>
          <div class="daughter person-box">女儿2</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectAll" class="all-result">
    <div class="box">
      <div class="title">
        1
      </div>
      <div class="result">
        <div class="grandpa person-box">
          爷爷
        </div>
        <div class="grandma person-box">
          奶奶
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        2
      </div>
      <div class="result">
        <div class="father person-box">父亲</div>
        <div class="mother person-box">母亲</div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <div class="num">3</div>
      </div>
      <div class="result">
        <div class="brother person-box">
          兄弟1
        </div>
        <div class="brother person-box">
          兄弟2
        </div>
        <div class="brother person-box">
          兄弟3
        </div>
        <div class="brother person-box">
          兄弟4
        </div>
        <div class="sister person-box">
          姐妹1
        </div>
        <div class="sister person-box">
          姐妹2
        </div>
        <div class="sister person-box">
          姐妹3
        </div>
        <div class="sister person-box">
          姐妹4
        </div>
      </div>
    </div>
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
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
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

.box {
  display: flex;
  margin-top: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  min-height: 2.5rem;

  .title {
    background-color: @family-color;
    width: 3rem;
    padding: 0.5rem;
    //min-height: 2.5rem;
    line-height: 2rem;
    text-align: center;
    //border-radius: 0.5rem 0 0 0.5rem;

  }

  .result {
    flex: 1;
    background-color: #fff;

    padding: 0 0.5rem 0.5rem 0;


    .person-box {
      float: left;
      min-width: 3rem;
      height: 2.2rem;
      line-height: 2.2rem;
      //background-color: @family-color;
      border-radius: 0.5rem;
      padding: 0 0.5rem;
      text-align: center;
      margin: 0.5rem 0 0 0.5rem;
      font-size: 14px;
      color: #111;
      border: 1px solid @family-color;

    }
  }
}

.all-result {
  .box {
    .title {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;

    }
  }
}
</style>