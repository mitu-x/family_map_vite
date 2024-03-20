<script lang="ts" setup></script>

<template>
  <div class="container">
    <router-link to="/emotion">
      <div class="box emotion">
        <img alt="" src="@/assets/images/本子图.png" srcset="">
        <div>人情簿</div>
      </div>
    </router-link>

    <router-link to="/family">
      <div class="box family">
        <img alt="" src="@/assets/images/关系图.png" srcset="">
        <div>族家系</div>
      </div>
    </router-link>

    <router-link to="login">
      <div class="box unknown">
        <img alt="" src="@/assets/images/疑问图.png" srcset="">
        <div>不知道</div>
      </div>
    </router-link>

    <router-link to="">
      <div class="box undefined">
        <img alt="" src="@/assets/images/敬请期待.png" srcset="">
        <div>...</div>
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
  background-color: #D96666;
}

.family {
  background-color: #66BDD9;
}

.unknown {
  background-color: #68D966;
}

.undefined {
  background-color: #6672D9;
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
