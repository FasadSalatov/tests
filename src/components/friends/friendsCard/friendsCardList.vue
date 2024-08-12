<script setup>
import Card from "./friendsCard.vue";

defineProps({
  friends: Array,
});
</script>

<template>
  <Card
    v-for="item in friends"
    :key="item.id"
    :id="item.id"
    :icon="item.icon"
    :name="item.name"
    :elo="item.elo"
  />
</template>

<style></style>
