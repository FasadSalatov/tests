<script setup>
import UserIcon from "./userIconWaiting.vue";
import EnemyFound from "./enemyFound.vue";
import { inject } from "vue";
const { enemyFoundStation, enemyFoundStationOn } = inject("enemyFoundStation");
</script>

<template>
  <section>
    <article class="game-timer-cont">
      <p class="subtitle-timer">waiting game...</p>
      <h2 class="timer">15</h2>
    </article>
    <UserIcon />
    <article>
      <button class="cansel-button" @click="duelStationOff">CANCEL</button>
    </article>
    <button class="next" @click="enemyFoundStationOn">Далее</button>
  </section>
</template>

<style scoped>
.game-timer-cont {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.subtitle-timer {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: rgb(255, 255, 255);
  margin-bottom: -30px;
}

.timer {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 48px;
  color: #3ccdbe;
}

.cansel-button {
  position: fixed;
  top: 780px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 80px;
  width: 388px;
  height: 65px;
  background: linear-gradient(180deg, #f66 0%, #f33 100%);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
}

.next {
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  color: rgb(223, 167, 167);
  border: none;
  color: black;
  border-radius: 5px;
}

@media screen and (max-width: 400px) {
  .cansel-button {
    width: 360px;
    height: 65px;
    background: linear-gradient(180deg, #f66 0%, #f33 100%);
    font-size: 22px;
  }
}

@media screen and (max-width: 360px) {
  .cansel-button {
    width: 340px;
    height: 60px;
    background: linear-gradient(180deg, #f66 0%, #f33 100%);
    font-size: 22px;
  }
}

@media screen and (max-width: 340px) {
  .cansel-button {
    width: 320px;
    height: 60px;
    background: linear-gradient(180deg, #f66 0%, #f33 100%);
    font-size: 22px;
  }
}

@media screen and (max-width: 320px) {
  .cansel-button {
    width: 290px;
    height: 50px;
    background: linear-gradient(180deg, #f66 0%, #f33 100%);
    font-size: 20px;
  }
}

@media screen and (max-height: 800px) {
  .cansel-button {
    top: 700px;
  }
}

@media screen and (max-height: 730px) {
  .cansel-button {
    top: 600px;
  }
}

@media screen and (max-height: 630px) {
  .cansel-button {
    top: 500px;
  }
}
</style>
