<script setup lang="ts">
import { ref } from 'vue';
import { UserConfiguration } from './models/UserConfiguration';
import { DefaultUserConfigBuilder } from './builders/DefaultUserConfigBuilder';

const basicUser = ref<UserConfiguration | null>(null);
const adminUser = ref<UserConfiguration | null>(null);

const builder = new DefaultUserConfigBuilder();

// 학생 객체 생성
basicUser.value = builder
  .setUsername('김가현')
  .setEmail('kgh_olivia@naver.com')
  .build();

// 교수님 객체 생성
adminUser.value = builder
  .setUsername('이경수')
  .setEmail('ksl(at)jbnu.ac.kr')
  .setIsAdmin(true)
  .setTheme('dark')
  .build();
</script>

<template>
  <h1>❤️ 초급프로젝트 빌더 패턴 구현 ❤️ </h1>

  <h2>✏️ 학생 정보 ✏️</h2>
  <pre>{{ basicUser?.displayConfig() }}</pre>

  <h2>🖥️ 교수님 정보 🖥️</h2>
  <pre>{{ adminUser?.displayConfig() }}</pre>

</template>

<style scoped>
h1 { color: #EE82EE; }
pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
</style>
