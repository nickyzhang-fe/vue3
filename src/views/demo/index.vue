<script setup lang="ts">
import _ from 'lodash'
import { ref } from 'vue'
import { desc } from './demo.json'

const arrL = ref([1,2,3,4])
const arrR = ref([1,2,4])
const mergeArr = ref(_.concat(arrL.value, arrR.value))

</script>
<template>
  <div class="flex flex-col p-30px items-center demo">
    <img
      alt="Vue logo"
      class="w-100px"
      src="../../assets/logo.png"
    >
    <div class="font-bold black text-size-20px my-10px">
      ①测试外部依赖
    </div>
    <div class="flex justify-between">
      <div class="w-500px text font-500">
        lodash数组合并: {{ mergeArr }}
      </div>
    </div>
    <div class="font-bold black text-size-20px my-10px">
      ②测试SCSS
    </div>
    <div class="font-bold black text-size-20px my-10px">
      ③测试JSON
    </div>
    <div class="flex justify-between">
      <div class="w-500px text font-500">
        JSON: {{ desc }}
      </div>
    </div>
    <div class="font-bold black text-size-20px my-10px">
      ④测试SVG
    </div>
    <div class="flex justify-between">
      <div class="w-500px text font-500">
        <img
          src="../../assets/logo.svg"
          class="w-50px"
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.demo {
  background: white;
  .text {
    font-size: 16px;
  }
}
</style>
