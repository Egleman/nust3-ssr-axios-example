<script setup lang="ts">
import {useFetchStore} from "~/stores/fetch-store";
const fetch_store = useFetchStore()
await useAsyncData(() => fetch_store.get_users())
</script>
<template>
  <div>
    <div v-for="user in fetch_store.users" :key="user.id">{{user.name}}</div>
  </div>
</template>
