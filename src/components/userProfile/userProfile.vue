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

const friendStation = reactive({
  inFriends: false,
});

const imgStation = reactive({
  imgStation: false,
});

const imgStationOn = () => {
  imgStation.imgStation = true;
};

const imgStationOff = () => {
  imgStation.imgStation = false;
};

const addToFriend = () => {
  friendStation.inFriends = true;
};

const removeToFriend = () => {
  friendStation.inFriends = false;
};
</script>

<template>
  <section class="img-check-cont" v-if="imgStation.imgStation">
    <img
      @click="imgStationOff"
      src="/main/userProfile/left.svg"
      class="out-check-img"
      alt="out"
    />
    <img
      class="img-check"
      src="/main/userProfile/userIcon.svg"
      alt="userIcon"
    />
  </section>
  <section class="user-profile-cont">
    <section class="user-nav-cont">
      <article class="user-img-cont">
        <img
          src="/main/userProfile/left.svg"
          @click="UserProfileStationOff"
          alt="out"
        />
        <div class="username-user-cont">
          <img
            @click="imgStationOn"
            class="user-icon"
            src="/main/userProfile/userIcon.svg"
            alt="userIcon"
          />
          <h2 class="user-name">@username</h2>
        </div>
        <img
          v-if="friendStation.inFriends"
          @click="removeToFriend"
          src="/main/userProfile/delete.svg"
          alt="delete"
        />
        <article v-if="!friendStation.inFriends" class="delete"></article>
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
      <button
        v-if="!friendStation.inFriends"
        @click="addToFriend"
        class="add-friend-button"
      >
        Add to friend
      </button>
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
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-check-cont {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background: rgba(4, 7, 32, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.out-check-img {
  position: absolute;
  top: 65px;
  left: 25px;
}

.img-check {
  width: 300px;
}

.user-img-cont {
  display: flex;
  align-items: center;
  gap: 94px;
}

.delete {
  width: 40px;
  height: 40px;
  background-color: transparent;
}

.user-icon {
  width: 80px;
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
  height: 320px;
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
  margin-top: 8px;
}

.user-history-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: white;
  margin-bottom: -5%;
  margin-top: 1%;
}

.user-nav-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.user-history {
  position: absolute;
  top: 580px;
  left: 50%;
  transform: translate(-50%, -50%);
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

@media screen and (max-height: 890px) {
  .card-cont {
    height: 400px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 580px;
  }

  .user-history-title {
    font-size: 28px;
    margin-bottom: -5%;
    margin-top: 1%;
  }
}

@media screen and (max-height: 870px) {
  .card-cont {
    height: 400px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 570px;
  }

  .user-history-title {
    font-size: 28px;
    margin-bottom: -5%;
    margin-top: 1%;
  }
}

@media screen and (max-height: 855px) {
  .card-cont {
    height: 350px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 540px;
  }

  .user-history-title {
    font-size: 26px;
    margin-bottom: -5%;
    margin-top: 1%;
  }
}

@media screen and (max-height: 830px) {
  .card-cont {
    height: 300px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 520px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -5%;
    margin-top: 1%;
  }
}

@media screen and (max-height: 810px) {
  .card-cont {
    height: 300px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 520px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 800px) {
  .card-cont {
    height: 300px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 520px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 770px) {
  .card-cont {
    height: 300px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 500px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 750px) {
  .card-cont {
    height: 250px;
  }

  .user-nav-cont {
    top: 180px;
  }

  .user-history {
    top: 500px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 730px) {
  .card-cont {
    height: 270px;
  }

  .user-nav-cont {
    top: 160px;
  }

  .user-history {
    top: 465px;
  }

  .user-history-title {
    font-size: 24px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 700px) {
  .card-cont {
    height: 250px;
  }

  .user-nav-cont {
    top: 160px;
  }

  .user-history {
    top: 455px;
  }

  .user-history-title {
    font-size: 22px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}

@media screen and (max-height: 680px) {
  .card-cont {
    height: 220px;
  }

  .user-nav-cont {
    top: 160px;
  }

  .user-history {
    top: 455px;
  }

  .user-history-title {
    font-size: 22px;
    margin-bottom: -45px;
    margin-top: 1%;
  }
}
</style>
