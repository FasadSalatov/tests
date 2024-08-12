<script setup>
import Card from "./userProfileCard.vue";
defineProps({
  completed: Array,
});
</script>

<template>
  <Card
    v-for="item in completed"
    :key="item.id"
    :id="item.id"
    :iconOpponent="item.iconOpponent"
    :nameOpponent="item.nameOpponent"
    :eloLost="item.eloLost"
    :eloOpponent="item.eloOpponent"
    :battleStation="item.battleStation"
    :scoreUser="item.scoreUser"
    :scoreOpponent="item.scoreOpponent"
    :eloWin="item.eloWin"
  />
</template>

<style scoped></style>
