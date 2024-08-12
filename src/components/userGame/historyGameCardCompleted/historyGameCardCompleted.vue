<script setup>
defineProps({
  iconOpponent: String,
  nameOpponent: String,
  eloLost: Number,
  eloOpponent: Number,
  battleStation: Boolean,
  scoreUser: Number,
  scoreOpponent: Number,
  eloWin: Number,
});
</script>

<template>
  <article class="completed-game-card">
    <div class="defeat-info-cont" v-if="battleStation">
      <div class="win-info">
        <p class="result-bittle">WIN</p>
        <h2 class="result-bittle">+{{ eloWin }}</h2>
      </div>
      <h1 class="score-battle">{{ scoreUser }}:{{ scoreOpponent }}</h1>
    </div>
    <div class="defeat-info-cont" v-else>
      <div class="defeat-info">
        <p class="result-bittle">Defeat</p>
        <h2 class="result-bittle">-{{ eloLost }}</h2>
      </div>
      <h1 class="score-battle">{{ scoreUser }}:{{ scoreOpponent }}</h1>
    </div>
    <div class="opponent-info">
      <div class="opponent-info-result">
        <p class="username-result">{{ nameOpponent }}</p>
        <h1 class="user-elo-result">
          {{ eloOpponent }} <span class="elo-title">elo</span>
        </h1>
      </div>
      <img :src="iconOpponent" alt="" />
    </div>
  </article>
</template>

<style scoped>
.completed-game-card {
  border: 1px solid #040720;
  border-radius: 30px;
  width: 388px;
  height: 60px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
}

.defeat-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 60px;
  width: 120px;
  height: 35px;
  background: linear-gradient(180deg, #f29e5a 0%, #8e460b 100%);
}

.win-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  border-radius: 60px;
  width: 120px;
  height: 35px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
}

.defeat-info-cont {
  display: flex;
  align-items: center;
  gap: 20px;
}

.result-bittle {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.score-battle {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: rgb(255, 255, 255);
}

.opponent-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.username-result {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(255, 255, 255);
  opacity: 0.6;
  margin-top: 30px;
}

.user-elo-result {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: rgb(255, 255, 255);
  margin-top: -10px;
  display: flex;
  align-items: center;
}

.elo-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin-top: -10px;
}

@media screen and (max-width: 390px) {
  .completed-game-card {
  width: 370px;
  height: 60px;
  gap: 60px;
}
}

@media screen and (max-width: 370px) {
  .completed-game-card {
  width: 350px;
  height: 60px;
  gap: 50px;
}

.defeat-info-cont {
  gap: 10px;
}

.win-info {
  gap: 27px;
  width: 110px;
  height: 35px;
}


.defeat-info {
  gap: 15px;
  width: 110px;
  height: 35px;
}
}

@media screen and (max-width: 350px) {
  .completed-game-card {
  width: 330px;
  height: 60px;
  gap: 50px;
}

.defeat-info-cont {
  gap: 10px;
}

.win-info {
  gap: 27px;
  width: 100px;
  height: 35px;
}


.defeat-info {
  gap: 15px;
  width: 100px;
  height: 35px;
}

.result-bittle {
  font-size: 13px;
  color: rgb(255, 255, 255);
}
}
</style>
