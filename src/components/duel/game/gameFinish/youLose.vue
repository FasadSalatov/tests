<script setup>
import Header from "./gameFinishHeader.vue";
import ResultGame from "./resultFight.vue";
import { inject } from "vue";
const { duelStationOff } = inject("duelStation");
</script>

<template>
  <Header />
  <section class="win-cont">
    <h2 class="win-title">You lose</h2>
    <ResultGame />
  </section>
  <div class="button-color-cont"></div>
  <div class="button-cont">
    <h1 class="elo-win-title">-15 <span class="elo-title">elo</span></h1>
    <button @click="duelStationOff" class="home-button">HOME</button>
  </div>
</template>

<style scoped>
.lose-cont {
  position: fixed;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lose-title {
  margin-top: 100px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #ff6666;
  text-transform: uppercase;
  text-align: center;
}

.button-color-cont {
  border-radius: 28px 28px 0 0;
  width: 100%;
  height: 193px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  opacity: 60%;
  background-color: #040720;
}

.button-cont {
  position: fixed;
  bottom: 0;
  z-index: 30;
  width: 100%;
  height: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.elo-lose-title {
  border-radius: 80px;
  width: 388px;
  height: 42px;
  background: #0053ad;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.elo-title {
  font-size: 18px;
  margin-top: -10px;
}

.home-button {
  border-radius: 80px;
  width: 388px;
  height: 65px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  border: none;
}

@media screen and (max-width: 390px) {
  .home-button {
    width: 360px;
    height: 65px;
    font-size: 22px;
  }

  .elo-win-title {
    width: 360px;
    height: 42px;
    font-size: 28px;
  }
}

@media screen and (max-width: 360px) {
  .home-button {
    width: 340px;
    height: 55px;
    font-size: 22px;
  }

  .elo-win-title {
    width: 340px;
    height: 42px;
    font-size: 28px;
  }
}

@media screen and (max-width: 340px) {
  .home-button {
    width: 320px;
    height: 55px;
    font-size: 22px;
  }

  .elo-win-title {
    width: 320px;
    height: 42px;
    font-size: 28px;
  }
}

@media screen and (max-height: 820px) {
  .button-color-cont {
    width: 100%;
    height: 150px;
  }

  .button-cont {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 100%;
    height: 150px;
  }

  .elo-win-title {
    width: 388px;
    height: 35px;
    font-size: 25px;
  }

  .elo-title {
    font-size: 14px;
    margin-top: -10px;
  }

  .home-button {
    width: 388px;
    height: 55px;
    font-size: 22px;
  }
}

@media screen and (max-height: 780px) {
  .button-color-cont {
    width: 100%;
    height: 150px;
  }

  .button-cont {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 100%;
    height: 150px;
  }

  .elo-win-title {
    width: 388px;
    height: 35px;
    font-size: 25px;
  }

  .elo-title {
    font-size: 14px;
    margin-top: -10px;
  }

  .home-button {
    width: 388px;
    height: 55px;
    font-size: 22px;
  }

  .win-cont {
    position: fixed;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-height: 710px) {
  .button-color-cont {
    width: 100%;
    height: 130px;
  }

  .button-cont {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 100%;
    height: 150px;
  }

  .elo-win-title {
    width: 388px;
    height: 30px;
    font-size: 20px;
  }

  .elo-title {
    font-size: 12px;
    margin-top: -10px;
  }

  .home-button {
    width: 388px;
    height: 40px;
    font-size: 20px;
  }

  .win-cont {
    position: fixed;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-height: 690px) {
  .button-color-cont {
    width: 100%;
    height: 120px;
  }

  .button-cont {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 100%;
    height: 150px;
  }

  .elo-win-title {
    width: 388px;
    height: 30px;
    font-size: 20px;
  }

  .elo-title {
    font-size: 12px;
    margin-top: -10px;
  }

  .home-button {
    width: 388px;
    height: 35px;
    font-size: 18px;
  }

  .win-cont {
    position: fixed;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-height: 670px) {
  .button-color-cont {
    width: 100%;
    height: 120px;
  }

  .button-cont {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 100%;
    height: 150px;
  }

  .elo-win-title {
    width: 388px;
    height: 30px;
    font-size: 20px;
  }

  .elo-title {
    font-size: 12px;
    margin-top: -10px;
  }

  .home-button {
    width: 388px;
    height: 35px;
    font-size: 18px;
  }

  .win-cont {
    position: fixed;
    top: 270px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
