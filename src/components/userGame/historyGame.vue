<script setup>
import cardAtiveGame from "./historyGameCardActive/historyGameCardListAcitve.vue";
import CardCompleded from "./historyGameCardCompleted/historyGameCardListCompleted.vue";
import { reactive } from "vue";

const completed = reactive([
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloWin: 150,
    eloOpponent: 1750,
    battleStation: false,
    scoreUser: 0,
    scoreOpponent: 10,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
  {
    id: 1,
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloLost: 100,
    eloOpponent: 1750,
    battleStation: true,
    eloWin: 190,
    scoreUser: 10,
    scoreOpponent: 0,
  },
]);

const items = reactive([
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: false,
    scoreUser: 3,
    scoreOpponent: 6,
  },

  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
  {
    id: 1,
    iconUser: "/main/activeGame/you.svg",
    iconOpponent: "/main/activeGame/user.svg",
    nameOpponent: "Username",
    eloUser: 1500,
    eloOpponent: 1750,
    enemyStation: true,
    scoreUser: 3,
    scoreOpponent: 6,
  },
]);
</script>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      buttonClick: {
        activeButton: true,
        completedButton: false,
      },
      gamePageStation: true,
    };
  },
  methods: {
    activeButtonClick() {
      this.buttonClick.activeButton = true;
      this.buttonClick.completedButton = false;
      this.gamePageStation = true;
    },
    completedButtonClick() {
      this.buttonClick.activeButton = false;
      this.buttonClick.completedButton = true;
      this.gamePageStation = false;
    },
  },
};
</script>

<template>
  <div class="user-game-info"></div>
  <section class="user-game-info-cont">
    <div class="user-game-title-cont">
      <h2 class="user-game-title">Game history</h2>
    </div>
    <div class="user-game-button-cont" v-bind="$attrs">
      <button
        class="user-game-button"
        @click="activeButtonClick"
        :class="{ active: buttonClick.activeButton }"
      >
        Active
      </button>
      <button
        class="user-game-button"
        @click="completedButtonClick"
        :class="{ active: buttonClick.completedButton }"
      >
        Completed
      </button>
    </div>
    <section class="card-cont">
      <cardAtiveGame v-if="gamePageStation" :items="items" />
      <CardCompleded v-else :completed="completed" />
    </section>
  </section>
</template>

<style scoped>
.user-game-info-cont {
  position: fixed;
  z-index: 30;
  bottom: 0;
  width: 100%;
  height: 628px;
}

.user-game-title-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
}

.user-game-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: rgb(255, 255, 255);
  width: 388px;
  text-align: left;
}

.user-game-button-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.user-game-button {
  border-radius: 80px;
  width: 190px;
  height: 29px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.user-game-button.active {
  border: 2px solid #3395ff;
  background: transparent;
}

.card-cont {
  width: 100%;
  height: 420px;
  overflow-x: hidden;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
}

@media screen and (max-width: 400px) {
  .user-game-button {
    width: 180px;
    height: 29px;
    font-size: 14px;
  }

  .user-game-title {
    font-size: 32px;
    width: 370px;
  }
}

@media screen and (max-width: 370px) {
  .user-game-button {
    width: 170px;
    height: 29px;
    font-size: 14px;
  }

  .user-game-title {
    font-size: 30px;
    width: 350px;
  }
}

@media screen and (max-width: 350px) {
  .user-game-button {
    width: 160px;
    height: 29px;
    font-size: 14px;
  }

  .user-game-title {
    font-size: 28px;
    width: 330px;
  }
}

@media screen and (max-height: 900px) {
  .user-game-title {
    margin-top: 40px;
    margin-bottom: 10px;
  }
}

@media screen and (max-height: 880px) {
  .user-game-title {
    margin-top: 65px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }
}

@media screen and (max-height: 870px) {
  .user-game-title {
    margin-top: 100px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 370px;
    margin-top: 20px;
  }
}

@media screen and (max-height: 830px) {
  .user-game-title {
    margin-top: 145px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 320px;
    margin-top: 20px;
  }
}

@media screen and (max-height: 780px) {
  .user-game-title {
    margin-top: 195px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 275px;
    margin-top: 20px;
  }
}

@media screen and (max-height: 730px) {
  .user-game-title {
    margin-top: 240px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 230px;
    margin-top: 20px;
  }
}

@media screen and (max-height: 680px) {
  .user-game-title {
    margin-top: 290px;
    margin-bottom: 10px;
  }

  .card-cont {
    width: 100%;
    height: 180px;
    margin-top: 20px;
  }
}
</style>
