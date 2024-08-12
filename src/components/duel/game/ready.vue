<script setup>
import Header from "./gameFinish/gameFinishHeader.vue";
import ResultGame from "./gameFinish/resultFight.vue";
</script>

<template>
  <Header />
  <section class="theme-contanier">
    <article class="theme-win">
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="red" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
      </div>
      <article class="theme">
        <img class="theme-icon" src="/main/selectThemes/Science.svg" alt="" />
        <h2 class="theme-title">Science</h2>
      </article>
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
      </div>
    </article>
    <article class="theme-win">
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="red" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
      </div>
      <article class="theme">
        <img class="theme-icon" src="/main/selectThemes/Science.svg" alt="" />
        <h2 class="theme-title-game">
          Games and<br />
          video games
        </h2>
      </article>
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
      </div>
    </article>
    <article class="theme-win">
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/green.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="red" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="green" />
      </div>
      <article class="theme">
        <img class="theme-icon" src="/main/selectThemes/Science.svg" alt="" />
        <h2 class="theme-title">Science</h2>
      </article>
      <div class="color-cont">
        <img class="color" src="/main/duel/round/color/red.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="green" />
        <img class="color" src="/main/duel/round/color/red.svg" alt="green" />
      </div>
    </article>
    <article class="theme-win">
      <div class="color-cont">
        <img class="color" src="/main/gray.svg" alt="green" />
        <img class="color" src="/main/gray.svg" alt="red" />
        <img class="color" src="/main/gray.svg" alt="green" />
      </div>
      <article class="theme">
        <h2 class="theme-title-secret">?</h2>
      </article>
      <div class="color-cont">
        <img class="color" src="/main/gray.svg" alt="green" />
        <img class="color" src="/main/gray.svg" alt="green" />
        <img class="color" src="/main/gray.svg" alt="green" />
      </div>
    </article>
  </section>
  <section>
    <div class="button-cont"></div>
    <article class="buttons">
      <h1 class="oponent">The opponent is ready</h1>
      <button class="ready">I'm ready</button>
      <button class="home">Home</button>
    </article>
  </section>
</template>

<style scoped>
.win-cont {
  position: fixed;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.theme-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: white;
}

.theme-title-secret {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: #3395ff;
}

.theme-title-game {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: white;
}

.theme {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 100px;
  height: 100px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #2c3580 0%, #153659 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.win-title {
  margin-top: 100px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  color: #3ccdbe;
}

.theme-win {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.color-cont {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-contanier {
  position: fixed;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.buttons {
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

.button-cont {
  border-radius: 28px 28px 0 0;
  width: 100%;
  height: 261px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  opacity: 60%;
  background-color: #040720;
}

.oponent {
  border-radius: 80px;
  width: 388px;
  height: 40px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%),
    rgba(4, 7, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #3ccdbe;
  margin-top: -90px;
}

.ready {
  border-radius: 80px;
  width: 388px;
  height: 65px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-bottom: 12px;
  margin-top: 24px;
}

.home {
  border-radius: 80px;
  width: 388px;
  height: 50px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  border: none;
}

@media screen and (max-width: 390px) {
  .oponent {
    width: 360px;
    height: 40px;
    font-size: 18px;
    margin-top: -90px;
  }

  .ready {
    width: 360px;
    height: 65px;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  .home {
    width: 360px;
    height: 50px;
    font-size: 22px;
  }
}

@media screen and (max-width: 360px) {
  .theme-win {
    gap: 20px;
    margin-top: 20px;
  }

  .oponent {
    width: 340px;
    height: 40px;
    font-size: 18px;
    margin-top: -90px;
  }

  .ready {
    width: 340px;
    height: 65px;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  .home {
    width: 340px;
    height: 50px;
    font-size: 22px;
  }
}

@media screen and (max-width: 340px) {
  .theme-win {
    gap: 20px;
    margin-top: 20px;
  }

  .color {
    width: 23px;
  }

  .theme {
    width: 90px;
    height: 90px;
  }

  .oponent {
    width: 320px;
    height: 40px;
    font-size: 18px;
    margin-top: -90px;
  }

  .ready {
    width: 320px;
    height: 65px;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  .home {
    width: 320px;
    height: 50px;
    font-size: 22px;
  }
}

@media screen and (max-width: 320px) {
  .theme-win {
    gap: 15px;
    margin-top: 20px;
  }

  .color {
    width: 23px;
  }

  .theme {
    width: 80px;
    height: 80px;
  }

  .theme-icon {
    width: 30px;
  }

  .theme-title {
    font-size: 10px;
  }

  .theme-title-game {
    margin-top: 3px;
    font-size: 10px;
  }

  .oponent {
    width: 300px;
    height: 40px;
    font-size: 18px;
    margin-top: -90px;
  }

  .ready {
    width: 300px;
    height: 65px;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 24px;
  }

  .home {
    width: 300px;
    height: 50px;
    font-size: 22px;
  }
}
</style>
