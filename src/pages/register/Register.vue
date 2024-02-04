<script setup lang="ts">
import { isEmail } from 'class-validator'
import useLogin from './useRegister'

const emailInputRef = ref()

const {
  leftSeconds,
  sendEmailCodeHandler,
  isSendEmailCodeLoading,
  //
  registerForm,
  isRegisterLoading,
  registerHandler
} = useLogin({ emailInputRef })
</script>

<template>
  <div _flex="~">
    <q-form _m="auto" _w="80vw max-350px" _space="y-10px" @submit="registerHandler">
      <template v-if="true">
        <q-input
          ref="emailInputRef"
          v-model="registerForm.email"
          :label="$t('邮箱地址')"
          maxlength="255"
          outlined
          lazy-rules
          :rules="[v => isEmail(v) || $t('请输入您的邮箱地址')]"
        />
        <div _flex="~">
          <div _flex="1">
            <q-input
              v-model="registerForm.captcha"
              :label="$t('验证码')"
              outlined
              maxlength="6"
              lazy-rules
              :rules="[v => /\d{6}/.test(v) || $t('请输入6位数字的验证码')]"
            />
          </div>

          <q-btn
            _w="170px"
            _m="l-20px"
            _h="56px"
            color="primary"
            icon="email"
            :loading="leftSeconds > 0 || isSendEmailCodeLoading"
            @click="sendEmailCodeHandler"
          >
            <div _m="l-10px">{{ $t('发送邮箱验证码') }}</div>
            <template v-if="leftSeconds > 0" v-slot:loading>
              <q-spinner-hourglass />
              <div _m="l-10px">{{ leftSeconds }}</div>
            </template>
          </q-btn>
        </div>

        <q-input
          v-model="registerForm.psd"
          :label="$t('密码')"
          maxlength="20"
          outlined
          lazy-rules
          type="password"
          :rules="[v => v.length >= 6 || $t('请输入至少6个字符的密码')]"
        />
      </template>

      <q-btn
        :loading="isRegisterLoading"
        :label="$t('注册')"
        icon="person"
        color="primary"
        _m="!t-20px"
        _w="full"
        _h="54px"
        type="submit"
      />
    </q-form>
  </div>
</template>

