<script setup>
import Card from "./historyGameCardActive.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <Card
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    :iconUser="item.iconUser"
    :iconOpponent="item.iconOpponent"
    :nameOpponent="item.nameOpponent"
    :eloUser="item.eloUser"
    :eloOpponent="item.eloOpponent"
    :enemyStation="item.enemyStation"
    :scoreUser="item.scoreUser"
    :scoreOpponent="item.scoreOpponent"
  />
</template>

<style scoped></style>
