<script setup>
import { reactive, inject } from "vue";

const { UserProfileStationOn } = inject("UserProfileStation");
defineProps({
  icon: String,
  name: String,
  elo: Number,
});
</script>

<template>
  <article @click="UserProfileStationOn" class="friend-card">
    <div class="image-name-friends-cont">
      <img :src="icon" alt="friend" />
      <h2 class="friend-name">{{ name }}</h2>
    </div>
    <h2 class="friend-elo">{{ elo }}</h2>
  </article>
</template>

<style scoped>
.friend-card {
  margin-bottom: 8px;
  border: 1px solid #040720;
  border-radius: 30px;
  width: 388px;
  height: 56px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;
}

.image-name-friends-cont {
  display: flex;
  align-items: center;
  gap: 10px;
}

.friend-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.friend-elo {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  width: 110px;
  height: 40px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%),
    rgba(4, 7, 32, 0.6);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 390px) {
  .friend-card {
    width: 360px;
    height: 56px;
    gap: 120px;
  }
}

@media screen and (max-width: 360px) {
  .friend-card {
    width: 340px;
    height: 56px;
    gap: 100px;
  }
}
</style>
