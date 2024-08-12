<script></script>

<template>
  <header class="round-header">
    <section class="user-info-cont">
      <article class="">
        <div class="user-info">
          <img src="/main/duel/round/user.svg" alt="user" />
          <div>
            <p class="user-name">You</p>
            <h2 class="user-elo">1500 <span class="elo-title">elo</span></h2>
          </div>
        </div>
        <div class="color-cont">
          <img
            class="color"
            src="/main/duel/round/color/green.svg"
            alt="color"
          />
          <img class="color" src="/main/duel/round/color/red.svg" alt="color" />
          <img
            class="color"
            src="/main/duel/round/color/blue.svg"
            alt="color"
          />
        </div>
      </article>
    </section>
    <img src="/main/duel/round/sciencs.svg" alt="theme" />
    <article class="">
      <div class="user-info">
        <div>
          <p class="oponent-name">username</p>
          <h2 class="user-elo">1750 <span class="elo-title">elo</span></h2>
        </div>
        <img src="/main/duel/round/enemy.svg" alt="user" />
      </div>
      <div class="color-cont-enemy">
        <img class="color" src="/main/duel/round/color/green.svg" alt="color" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="color" />
        <img class="color" src="/main/duel/round/color/blue.svg" alt="color" />
      </div>
    </article>
  </header>
</template>

<style scoped>
.round-header {
  position: fixed;
  top: 0;
  border-radius: 0 0 28px 28px;
  width: 100%;
  height: 150px;
  background-color: #040720;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.elo-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: white;
}

.color-cont-enemy {
  margin-left: 10px;
  display: flex;
  gap: 12px;
}

.color-cont {
  display: flex;
  gap: 12px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.user-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
}

.oponent-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  text-align: right;
}

.user-elo {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: -12px;
}

@media screen and (max-width: 390px) {
  .round-header {
    width: 100%;
    height: 150px;
    gap: 40px;
  }
}

@media screen and (max-width: 360px) {
  .round-header {
    width: 100%;
    height: 150px;
    gap: 30px;
  }
  .user-name {
    font-size: 12px;
  }

  .oponent-name {
    font-size: 12px;
  }

  .user-elo {
    font-size: 18px;
    margin-top: -12px;
  }
}

@media screen and (max-width: 340px) {
  .round-header {
    width: 100%;
    height: 150px;
    gap: 20px;
  }
  .user-name {
    font-size: 10px;
  }

  .oponent-name {
    font-size: 10px;
  }

  .user-elo {
    font-size: 16px;
    margin-top: -12px;
  }

  .color {
    width: 20px;
  }

  .color-cont-enemy {
    margin-left: 20px;
    display: flex;
    gap: 10px;
  }

  .color-cont {
    margin-left: 0px;
    display: flex;
    gap: 10px;
  }
}

@media screen and (max-height: 680px) {
  .answer-variations-card {
    width: 130px;
    height: 90px;
  }
}
</style>
