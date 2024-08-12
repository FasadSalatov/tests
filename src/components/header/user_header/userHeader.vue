<script setup>
import { inject } from "vue";
const { trueSettings } = inject("settingsStation");
</script>

<template>
  <header class="">
    <section class="user-info">
      <section class="user-info-cont">
        <img class="user-icon" src="/header/user/user_icon.svg" alt="user" />
        <article class="user-statistics">
          <div class="statistics-block">
            <p class="statistics-title">Rank</p>
            <h2 class="statistics-quantity">1500</h2>
          </div>
          <img src="/header/user/line.svg" alt="" />
          <div class="statistics-block">
            <p class="statistics-title">Games</p>
            <h2 class="statistics-quantity">250</h2>
          </div>
          <img src="/header/user/line.svg" alt="" />
          <div class="statistics-block">
            <p class="statistics-title">Wins</p>
            <h2 class="statistics-quantity">200</h2>
          </div>
        </article>
      </section>
      <img src="/header/user/settings.svg" @click="trueSettings" alt="" />
    </section>
  </header>
</template>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
}

header {
  /* position: fixed; */
}

.user-info-cont {
  display: flex;
  align-items: center;
  gap: 14px;
}

.user-statistics {
  border-radius: 90px;
  width: 260px;
  height: 66px;
  background: linear-gradient(
    180deg,
    rgba(50, 195, 180, 0.6) 0%,
    rgba(29, 114, 105, 0.6) 100%
  );
}

.statistics-quantity {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  margin-top: -9px;
}

.statistics-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: white;
  margin-top: 20px;
}

.user-statistics {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

@media screen and (max-width: 400px) {
  .user-statistics {
    width: 240px;
    height: 60px;
  }
}

@media screen and (max-width: 370px) {
  .user-statistics {
    width: 220px;
    height: 60px;
  }
  .statistics-quantity {
    font-size: 20px;
    margin-top: -9px;
  }

  .statistics-title {
    font-size: 10px;
    margin-top: 20px;
  }

  .user-statistics {
    gap: 15px;
  }
}

@media screen and (max-width: 350px) {
  .user-statistics {
    width: 200px;
    height: 50px;
  }

  .user-info {
    gap: 28px;
  }

  .statistics-quantity {
    font-size: 18px;
    margin-top: -9px;
  }

  .statistics-title {
    font-size: 10px;
    margin-top: 15px;
  }

  .user-statistics {
    gap: 15px;
  }
}
</style>
