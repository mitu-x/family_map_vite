<script lang="ts" setup>
const tmp = sessionStorage.getItem('authority') || '0'
const authority = parseInt(tmp, 2)
const emotionAuth = (authority & 8)
const familyAuth = (authority & 4)
const unknownAuth = (authority & 2)
const undefinedAuth = (authority & 1)
const noAuthString = '无权限'
</script>

<template>
  <div class="container">
    <router-link :to="emotionAuth ? '/emotion' : '/'">
      <div class="box emotion">
        <img alt="" src="@/assets/images/本子图.png" srcset="">
        <div>{{ emotionAuth ? '人情簿' : noAuthString }}</div>
      </div>
    </router-link>

    <router-link :to="familyAuth ? '/family' : '/'">
      <div class="box family">
        <img alt="" src="@/assets/images/关系图.png" srcset="">
        <div>{{ familyAuth ? '族家系' : noAuthString }}</div>
      </div>
    </router-link>

    <router-link :to="unknownAuth ? '/' : '/'">
      <div class="box unknown">
        <img alt="" src="@/assets/images/疑问图.png" srcset="">
        <div>{{ unknownAuth ? '不知道' : noAuthString }}</div>
      </div>
    </router-link>

    <router-link :to="undefinedAuth ? '/' : '/'">
      <div class="box undefined">
        <img alt="" src="@/assets/images/敬请期待.png" srcset="">
        <div>{{ undefinedAuth ? '...' : noAuthString }}</div>
      </div>
    </router-link>

  </div>


</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 0 0 0;

  .box {
    width: min(30vw, 200px);
    height: min(30vw, 200px);
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px -0px #666;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
  }

  .undefined {
    padding: 0 0 1rem 0;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
}


.emotion {
  background-color: @emotion-color;
}

.family {
  background-color: @family-color;
}

.unknown {
  background-color: @unknown-color;
}

.undefined {
  background-color: @undefined-color;
}

@media screen and (min-width: 675px) {
  .container .box {
    img {
      width: 55px;
      height: 55px;
    }
  }

  .container .undefined img {
    width: 100px;
    height: 100px;
  }
}
</style>
