<script setup lang="ts">
import {useFetchStore} from "~/stores/fetch-store";
const fetch_store = useFetchStore()
const response = await useAsyncData(() => fetch_store.get_users())
</script>
<template>
  <div>
    <div v-for="user in response.data.value" :key="user.id">{{user.name}}</div>
  </div>
</template>
