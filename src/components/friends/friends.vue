<script setup>
import FriendCard from "./friendsCard/friendsCardList.vue";
import { reactive, inject } from "vue";

const friends = reactive([
  {
    id: 1,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 2,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 3,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 4,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 1,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 2,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 3,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 4,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 1,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 2,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 3,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
  {
    id: 4,
    icon: "/main/friends/user.svg",
    name: "username",
    elo: 1400,
  },
]);
</script>

<template>
  <section class="friends-cont">
    <h1 class="friends-title">Friends in game</h1>
    <article class="search-cont">
      <input class="search-friends" placeholder="Search" type="text" />
      <img class="search" src="/main/friends/search.svg" alt="search" />
    </article>
    <article class="friends-buttom-cont">
      <button class="invite-link-button">Copy invite link</button>
      <button class="duel-link-button">Duel link</button>
    </article>
    <section class="friends-card-cont">
      <FriendCard :friends="friends" />
    </section>
  </section>
</template>

<style scoped>
.friends-cont {
  position: fixed;
  z-index: 30;
  bottom: 0;
  width: 100%;
  height: 673px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.friends-title {
  width: 388px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: rgb(255, 255, 255);
  margin-left: 20px;
  text-align: left;
}

.search-friends {
  border-radius: 30px;
  width: 358px;
  height: 30px;
  background: linear-gradient(
    180deg,
    rgba(51, 149, 255, 0.2) 0%,
    rgba(0, 83, 173, 0.2) 100%
  );
  border: none;
  outline: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(255, 255, 255);
  padding: 5px 10px 5px 10px;
  border: 2px solid #3395ff;
  position: relative;
}

.search-cont {
  position: relative;
}

.search {
  position: absolute;
  top: 12px;
  right: 15px;
}

.friends-buttom-cont {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.invite-link-button {
  border-radius: 80px;
  border: none;
  width: 188px;
  height: 43px;
  background: linear-gradient(180deg, #3ccdbe 0%, #1a655e 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.duel-link-button {
  border-radius: 80px;
  width: 188px;
  height: 43px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
  border: none;
}

.friends-card-cont {
  margin-top: 24px;
  width: 100%;
  height: 420px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 390px) {
  .search-friends {
    width: 340px;
    height: 30px;
    font-size: 14px;
  }

  .friends-buttom-cont {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
  }

  .invite-link-button {
    width: 175px;
    height: 43px;
    font-size: 16px;
  }

  .duel-link-button {
    width: 175px;
    height: 43px;
    font-size: 16px;
  }
  .friends-title {
    width: 370px;
    font-size: 32px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 360px) {
  .search-friends {
    width: 315px;
    height: 30px;
    font-size: 14px;
  }

  .friends-buttom-cont {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
  }

  .invite-link-button {
    width: 165px;
    height: 43px;
    font-size: 16px;
  }

  .duel-link-button {
    width: 165px;
    height: 43px;
    font-size: 16px;
  }
}

@media screen and (max-height: 880px) {
  .friends-card-cont {
    height: 360px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 70px;
  }
}

@media screen and (max-height: 870px) {
  .friends-card-cont {
    height: 340px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 90px;
  }
}

@media screen and (max-height: 830px) {
  .friends-card-cont {
    height: 300px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 140px;
  }
}

@media screen and (max-height: 780px) {
  .friends-card-cont {
    height: 250px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 190px;
  }
}

@media screen and (max-height: 730px) {
  .friends-card-cont {
    height: 220px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 240px;
    margin-bottom: 10px;
  }
}

@media screen and (max-height: 680px) {
  .friends-card-cont {
    height: 100px;
  }

  .friends-title {
    font-size: 32px;
    text-align: left;
    margin-top: 290px;
    margin-bottom: 10px;
  }
}
</style>
