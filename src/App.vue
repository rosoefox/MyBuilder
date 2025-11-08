<script setup lang="ts">
import { ref } from 'vue';
import { UserConfiguration } from './models/UserConfiguration';
import { DefaultUserConfigBuilder } from './builders/DefaultUserConfigBuilder';

const basicUser = ref<UserConfiguration | null>(null);
const adminUser = ref<UserConfiguration | null>(null);

const builder = new DefaultUserConfigBuilder();

// 1. 최소 설정 객체 생성
basicUser.value = builder
  .setUsername('Basic Member')
  .setEmail('basic@example.com')
  .build();

// 2. 복잡하고 커스텀된 객체 생성 (전화번호, 관리자, 다크 테마 설정)
adminUser.value = builder
  .setUsername('Super Admin')
  .setEmail('super@corp.com')
  .setPhone('010-9876-5432')
  .setIsAdmin(true)
  .setTheme('dark')
  .build();
</script>

<template>
  <h1>🏗️ 디자인 패턴 구현: Builder (빌더) 패턴</h1>

  <h2>기본 사용자 설정</h2>
  <pre>{{ basicUser?.displayConfig() }}</pre>

  <h2>관리자 사용자 설정</h2>
  <pre>{{ adminUser?.displayConfig() }}</pre>

</template>

<style scoped>
h1 { color: #42b883; }
pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
</style>
