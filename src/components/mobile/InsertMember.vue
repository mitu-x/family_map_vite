<script lang="ts" setup>

import {ref} from "vue";

let generationInput = ref<null | number>(null)
let nameInput = ref("")
let genderInput = ref<null | '1' | '2'>()
let father = ref()
let fatherOptions = ref([])
let mother = ref()
let motherOptions = ref([])
let spouse = ref()
let spouseOptions = ref([])
let homeTown = ref()
let ethnic = ref()
let profession = ref()
let degree = ref()
let politicsStatus = ref()
let personalProfile = ref()


const fatherHandleChange = () => {
//加载母亲选项
  
}
const nameInputBlur = () => {
  //加载父亲选项


  //加载配偶选项

}

const submit = () => {
  let param = {
    name: nameInput.value,
    generation: generationInput.value,
    gender: genderInput.value,
    uuidFather: father.value,
    uuidMother: mother.value,
    spouse: spouse.value,
    homeTown: homeTown.value,
    ethnic: ethnic.value,
    profession: profession.value,
    degree: degree.value,
    politicsStatus: politicsStatus.value,
    personalProfile: personalProfile.value
  }
  console.log(param)
  // send(param)

}
</script>

<template>
  <h3>新增成员信息</h3>
  <div class="form-box">
    <div class="form-item">
      <a-input-number v-model:value="generationInput">
        <template #addonBefore>
          代数：
        </template>
      </a-input-number>
    </div>
    <div v-if="generationInput" class="form-item" @blur="nameInputBlur">
      <a-input v-model:value="nameInput">
        <template #addonBefore>
          姓名：
        </template>
      </a-input>
    </div>
    <div v-if="nameInput" class="form-item">
      <span>
        性别：
      </span>
      <a-radio-group v-model:value="genderInput">
        <a-radio-button value="1">男</a-radio-button>
        <a-radio-button value="2">女</a-radio-button>
      </a-radio-group>
    </div>
    <div v-if="genderInput" class="form-item">
      <a-space>
        <span>父母：</span>
        <a-select v-model:value="father" :options="fatherOptions" style="width: 6rem" @change="fatherHandleChange">
        </a-select>
        <a-select
            v-model:value="mother"
            :options="motherOptions"
            style="width: 6rem"
        ></a-select>
      </a-space>
    </div>
    <div v-if="genderInput" class="form-item">
      <span>配偶：</span>
      <a-select
          v-model:value="spouse"
          :options="spouseOptions"
          mode="multiple"
          placeholder="Please select"
          style="min-width: 13rem"
      >

      </a-select>

    </div>
    <template v-if="genderInput">
      <div class="form-item">
        <a-input v-model:value="homeTown">
          <template #addonBefore>
            籍贯：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input v-model:value="ethnic">
          <template #addonBefore>
            民族：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input v-model:value="profession">
          <template #addonBefore>
            职业：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input v-model:value="degree">
          <template #addonBefore>
            学历：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input v-model:value="politicsStatus">
          <template #addonBefore>
            政治面貌：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input v-model:value="personalProfile">
          <template #addonBefore>
            个人简介：
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-button-group>
          <a-space>
            <a-button type="primary" @click="submit">提交</a-button>
            <a-button>重置</a-button>
          </a-space>

        </a-button-group>
      </div>
    </template>

  </div>
</template>

<style lang="less" scoped>
h3 {
  text-align: center
}

.form-box {
  width: 70vw;
  margin-top: 2rem;

  .form-item {
    margin-top: 1rem;
  }
}

</style>
