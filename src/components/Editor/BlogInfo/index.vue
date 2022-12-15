<template>
  <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="auto"
      class="Article_Form"
      label-position="right"
      size="default"
      status-icon
  >
    <el-form-item label="博客标题" prop="title">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <el-form-item label="博客标签" prop="tags">
      <el-select v-model="formData.tags" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai"/>
        <el-option label="Zone two" value="beijing"/>
      </el-select>
    </el-form-item>

    <el-form-item label="博客分类" prop="type">
      <el-checkbox-group v-model="formData.type">
        <el-checkbox label="Online activities" name="type"/>
        <el-checkbox label="Promotion activities" name="type"/>
        <el-checkbox label="Offline activities" name="type"/>
        <el-checkbox label="Simple brand exposure" name="type"/>
      </el-checkbox-group>
    </el-form-item>
<!--            <el-form-item prop="desc">-->
<!--        <el-input v-model="mainStore.blogContent" type="hidden" @change="change"/>-->
<!--            </el-form-item>-->
    <el-form-item label="是否置顶" prop="setTop">
      <el-switch v-model="formData.setTop"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Create
      </el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {useMainStore} from "@/store";
// import { RouterLink, RouterView } from "vue-router";

import type {FormInstance, FormRules} from 'element-plus'

const mainStore = useMainStore();

// const change = () => {
//   ruleForm.detail = mainStore.blogContent;
//   console.log(111)
// }

const ruleFormRef = ref<FormInstance>()
const formData = reactive({
  title: 'Hello',
  tags: '',
  setTop: false,
  type: [],
  detail: ''
})
//
// formData.detail = computed(() => {
//   return mainStore.blogContent;
// }).value;

const rules = reactive<FormRules>({
  title: [
    {required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
  ],
  tags: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  detail: [
    {required: true, message: 'Please input activity form', trigger: 'blur'},
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {

  formData.detail = mainStore.blogContent
  // console.log(formData)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      // 执行提交
    } else {
      console.log('error submit!', fields)
      // 验证未通过
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({length: 10000}).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style lang="less" scoped>
.Article_Form {
  position: relative;
}
</style>
