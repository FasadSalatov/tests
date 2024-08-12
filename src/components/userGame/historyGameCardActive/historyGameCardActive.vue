<script setup>
defineProps({
  iconUser: String,
  iconOpponent: String,
  nameOpponent: String,
  eloUser: Number,
  eloOpponent: Number,
  enemyStation: Boolean,
  scoreUser: Number,
  scoreOpponent: Number,
});
</script>

<template>
  <article class="active-game-card">
    <div class="player-statistics-сont">
      <div class="user-info-cont">
        <img :src="iconUser" alt="your-icon" />
        <div class="user-info">
          <p class="user-name">You</p>
          <h2 class="user-elo">
            {{ eloUser }} <span class="elo-title">elo</span>
          </h2>
        </div>
      </div>
      <div class="battle-score">
        <h2 class="score-title">{{ scoreUser }}</h2>
        <img src="/main/activeGame/fight.svg" alt="fight" />
        <h2 class="score-title">{{ scoreOpponent }}</h2>
      </div>
      <div class="user-info-cont">
        <div class="user-info">
          <p class="user-name">{{ nameOpponent }}</p>
          <h2 class="user-elo">
            {{ eloOpponent }}<span class="elo-title">elo</span>
          </h2>
        </div>
        <img :src="iconOpponent" alt="your-icon" />
      </div>
    </div>
    <div class="line-active-game-cont">
      <div class="line-active-game"></div>
    </div>
    <div v-if="enemyStation" class="fight-station">
      <div class="fight-station-title">
        <img src="/main/activeGame/sword.svg" alt="sword" />
        <div>
          <h2 class="turn-title">Your turn</h2>
          <p class="time-title">2h left</p>
        </div>
      </div>
      <button class="play-button">Play</button>
    </div>
    <div v-else class="fight-station-opponent">
      <div class="fight-station-title">
        <img src="/main/activeGame/shield.svg" alt="sword" />
        <div>
          <h2 class="turn-title">The enemy’s turn</h2>
          <p class="time-title">12h left</p>
        </div>
      </div>
      <button class="play-button-opponent">
        Wait for the<br />
        enemy's move
      </button>
    </div>
  </article>
</template>

<style scoped>
.active-game-card {
  border: 1px solid #040720;
  border-radius: 24px;
  width: 388px;
  height: 115px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
}

.player-statistics-сont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: -10px;
}

.user-info-cont {
  display: flex;
  align-items: center;
  gap: 6px;
}

.line-active-game-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.line-active-game {
  width: 360px;
  height: 1px;
  background-color: #0053ad;
}

.user-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  opacity: 0.6;
}

.user-elo {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-top: -10px;
  text-align: right;
  display: flex;
  align-items: center;
}

.elo-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: white;
  margin-top: -5px;
}

.battle-score {
  display: flex;
  align-items: center;
}

.score-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: white;
}

.fight-station {
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 145px;
}

.fight-station-opponent {
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
}

.fight-station-title {
  display: flex;
  align-items: center;
  gap: 5px;
}

.turn-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
}

.time-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin-top: -10px;
}

.play-button {
  border-radius: 60px;
  width: 120px;
  height: 35px;
  background: linear-gradient(180deg, #3ccdbe 0%, #1a655e 100%);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
}

.play-button-opponent {
  border-radius: 30px;
  width: 116px;
  height: 35px;
  background: linear-gradient(180deg, #adadad 0%, #7a7a7a 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: white;
  text-align: center;
  border: none;
}

@media screen and (max-width: 400px) {
  .active-game-card {
    width: 368px;
    height: 115px;
  }

  .user-name {
    font-size: 13px;
  }

  .user-elo {
    font-size: 16px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 10px;
  }

  .player-statistics-сont {
    gap: 40px;
  }

  .turn-title {
    font-family: "Inter Tight", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
  }

  .time-title {
    font-size: 11px;
    margin-top: -10px;
  }

  .fight-station {
    margin-top: -5px;
    gap: 130px;
  }

  .fight-station-opponent {
    gap: 80px;
  }
}

@media screen and (max-width: 390px) {
  .fight-station-opponent {
    gap: 90px;
    margin-top: -0px;
  }

  .turn-title {
    font-family: "Inter Tight", sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: white;
  }

  .play-button-opponent {
    width: 100px;
    height: 32px;
    font-size: 9px;
  }
}

@media screen and (max-width: 370px) {
  .active-game-card {
    width: 350px;
    height: 115px;
  }

  .user-name {
    font-size: 12px;
  }

  .user-elo {
    font-size: 15px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 10px;
  }

  .player-statistics-сont {
    gap: 35px;
  }

  .turn-title {
    font-family: "Inter Tight", sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: white;
  }

  .time-title {
    font-size: 11px;
    margin-top: -10px;
  }

  .fight-station {
    margin-top: -5px;
    gap: 120px;
  }

  .fight-station-opponent {
    gap: 70px;
  }
}

@media screen and (max-width: 350px) {
  .active-game-card {
    width: 330px;
    height: 115px;
  }

  .user-name {
    font-size: 11px;
  }

  .user-elo {
    font-size: 14px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 9px;
  }

  .player-statistics-сont {
    gap: 25px;
  }

  .turn-title {
    font-size: 11px;
    color: white;
  }

  .time-title {
    font-size: 11px;
    margin-top: -10px;
  }

  .fight-station {
    margin-top: -5px;
    gap: 100px;
  }

  .fight-station-opponent {
    gap: 60px;
    margin-top: -2px;
  }
}
</style>
