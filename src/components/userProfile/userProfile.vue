<script setup>
import { reactive, inject } from "vue";
import UserProfileCardList from "./userProfileCard/userProfileCardList.vue";
const { UserProfileStationOff } = inject("UserProfileStation");
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
]);
</script>

<template>
  <section class="user-profile-cont">
    <section class="user-nav-cont">
      <article class="user-img-cont">
        <img
          src="/main/userProfile/left.svg"
          @click="UserProfileStationOff"
          alt="out"
        />
        <div class="username-user-cont">
          <img src="/main/userProfile/userIcon.svg" alt="userIcon" />
          <h2 class="user-name">@username</h2>
        </div>
        <img src="/main/userProfile/delete.svg" alt="out" />
      </article>
      <article class="user-statistic-cont">
        <div class="cont-info">
          <p class="user-perk">Rank</p>
          <h2 class="user-rank">1500 <span class="elo-title">elo</span></h2>
        </div>
        <img src="/main/userProfile/line.svg" alt="" />
        <div class="cont-info">
          <p class="user-perk">Games</p>
          <h2 class="user-rank">250</h2>
        </div>
        <img src="/main/userProfile/line.svg" alt="" />
        <div class="cont-info">
          <p class="user-perk">Wins</p>
          <h2 class="user-rank">1500</h2>
        </div>
      </article>
      <button class="add-friend-button">Add to friend</button>
      <button class="duel-button">
        <img src="/main/userProfile/swod.svg" alt="" />
        Duel
        <img src="/main/userProfile/swod.svg" alt="" />
      </button>
    </section>
    <section class="user-history">
      <h2 class="user-history-title">User’s game history</h2>
      <section class="card-cont">
        <UserProfileCardList :completed="completed" />
      </section>
    </section>
  </section>
</template>

<style scoped>
.user-profile-cont {
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.user-img-cont {
  display: flex;
  align-items: center;
  gap: 94px;
}

.user-nav-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.username-user-cont {
  text-align: center;
}

.user-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-top: -5px;
}

.user-statistic-cont {
  border-radius: 90px;
  width: 388px;
  height: 55px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.cont-info {
  text-align: center;
}

.card-cont {
  width: 100%;
  height: 250px;
  overflow-x: hidden;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
}

.user-perk {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: white;
}

.user-rank {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: -10px;
}

.elo-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: white;
  margin-top: -10px;
}

.add-friend-button {
  border-radius: 80px;
  width: 388px;
  height: 52px;
  background: linear-gradient(180deg, #3ccdbe 0%, #1a655e 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 8px;
}

.duel-button {
  border-radius: 80px;
  width: 388px;
  height: 52px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 135px;
}

.user-history-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: white;
}

@media screen and (max-width: 390px) {
  .add-friend-button {
    width: 340px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .duel-button {
    width: 340px;
    height: 52px;
    font-size: 16px;
    gap: 110px;
  }

  .user-statistic-cont {
    width: 340px;
    height: 55px;
    gap: 35px;
  }

  .user-img-cont {
    gap: 65px;
  }
}

@media screen and (max-width: 360px) {
  .add-friend-button {
    width: 320px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .duel-button {
    width: 320px;
    height: 52px;
    font-size: 16px;
    gap: 100px;
  }

  .user-statistic-cont {
    width: 320px;
    height: 55px;
    gap: 30px;
  }

  .user-img-cont {
    gap: 50px;
  }
}

@media screen and (max-width: 340px) {
  .add-friend-button {
    width: 300px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .duel-button {
    width: 300px;
    height: 52px;
    font-size: 16px;
    gap: 90px;
  }

  .user-statistic-cont {
    width: 300px;
    height: 55px;
    gap: 25px;
  }

  .user-img-cont {
    gap: 40px;
  }
}

@media screen and (max-width: 320px) {
  .add-friend-button {
    width: 300px;
    height: 52px;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .duel-button {
    width: 300px;
    height: 52px;
    font-size: 16px;
    gap: 90px;
  }

  .user-statistic-cont {
    width: 300px;
    height: 55px;
    gap: 25px;
  }

  .user-img-cont {
    gap: 40px;
  }
}

@media screen and (max-height: 850px) {
  .card-cont {
    width: 100%;
    height: 230px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 830px) {
  .card-cont {
    width: 100%;
    height: 200px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 800px) {
  .card-cont {
    width: 100%;
    height: 180px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 780px) {
  .card-cont {
    width: 100%;
    height: 160px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 760px) {
  .card-cont {
    width: 100%;
    height: 140px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 740px) {
  .card-cont {
    width: 100%;
    height: 120px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 720px) {
  .card-cont {
    width: 100%;
    height: 100px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}
@media screen and (max-height: 700px) {
  .card-cont {
    width: 100%;
    height: 80px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 680px) {
  .card-cont {
    width: 100%;
    height: 60px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}

@media screen and (max-height: 660px) {
  .card-cont {
    width: 100%;
    height: 40px;
    overflow-x: hidden;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
