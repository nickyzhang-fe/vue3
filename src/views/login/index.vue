<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img
          src="../../assets/login_left.png"
          alt="login"
        >
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img
            class="login-icon"
            src="../../assets/logo.svg"
            alt=""
          >
          <p class="logo-text">
            nickyzhang
          </p>
        </div>
        <LoginForm
          ref="loginRef"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { reactive } from "vue";
import LoginForm from "./LoginForm.vue";
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>