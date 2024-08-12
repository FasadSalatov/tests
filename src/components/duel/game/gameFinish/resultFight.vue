<script></script>

<template>
  <section>
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

@media screen and (max-width: 360px) {
  .theme-win {
    gap: 20px;
    margin-top: 20px;
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
}

@media screen and (max-height: 860px) {
  .theme {
    width: 90px;
    height: 90px;
  }

  .theme-title-game {
    font-size: 10px;
  }

  .theme-icon {
    width: 30px;
  }
}

@media screen and (max-height: 860px) {
  .theme {
    width: 90px;
    height: 90px;
  }

  .theme-title-game {
    font-size: 10px;
  }

  .theme-icon {
    width: 30px;
  }
}

@media screen and (max-height: 840px) {
  .theme {
    width: 80px;
    height: 80px;
  }

  .theme-title-game {
    font-size: 10px;
  }

  .theme-icon {
    width: 25px;
  }
}

@media screen and (max-height: 840px) {
  .theme {
    width: 80px;
    height: 80px;
  }

  .theme-title-game {
    font-size: 10px;
  }

  .theme-icon {
    width: 25px;
  }

  .color {
    width: 23px;
  }
}

@media screen and (max-height: 730px) {
  .theme {
    width: 70px;
    height: 70px;
  }

  .theme-title-game {
    font-size: 10px;
  }

  .theme-icon {
    width: 20px;
  }

  .color {
    width: 20px;
  }
}

@media screen and (max-height: 680px) {
  .theme {
    width: 65px;
    height: 65px;
  }

  .theme-title-game {
    font-size: 7px;
  }

  .theme-icon {
    width: 20px;
  }

  .color {
    width: 20px;
  }
}
</style>
