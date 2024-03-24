<script lang="ts" setup>

interface P {
  uuid: string,
  name: string
}

const props = defineProps({
  title: String,
  list: Array<P>,
})
const emit = defineEmits(['FatherClick'])
const handle = (uuid) => {
  emit('FatherClick', uuid)
}

// const {title,list} = toRefs(props)
</script>

<template>
  <div v-if="list.length !== 0" class="box">
    <div class="title">
      {{ title }}
    </div>
    <div class="result">
      <div v-for="(item,index) in list" :key="index" class="parent person-box" @click="handle(item.uuid)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

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
</style>