<script setup></script>

<template>
  <header>
    <section class="header-section">
      <article class="info-cont">
        <img src="/main/headerFinush/uer.svg" alt="user" />
        <div>
          <p class="user-name">You</p>
          <h2 class="user-elo">1500 <span class="elo-title">elo</span></h2>
        </div>
      </article>
      <article class="result">
        <h2 class="chet">2</h2>
        <img src="/main/headerFinush/fight.svg" alt="fight" />
        <h2 class="chet">1</h2>
      </article>
      <article class="info-cont">
        <div>
          <p class="oponent-name">username</p>
          <h2 class="user-elo">1500 <span class="elo-title">elo</span></h2>
        </div>
        <img src="/main/headerFinush/enmy.svg" alt="user" />
      </article>
    </section>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  border-radius: 0 0 28px 28px;
  width: 100%;
  height: 113px;
  background-color: #040720;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-top: 20px;
}

.info-cont {
  display: flex;
  align-items: center;
  gap: 6px;
}

.user-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  opacity: 0.6;
}

.oponent-name {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  text-align: right;
  opacity: 0.6;
}

.user-elo {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: -10px;
  display: flex;
  align-items: center;
}

.elo-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: white;
  margin-top: -10px;
}

.chet {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: white;
}

.result {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 420px) {
  .header-section {
    gap: 40px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 400px) {
  .header-section {
    gap: 30px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 380px) {
  .header-section {
    gap: 30px;
    margin-top: 20px;
  }
  .user-name {
    font-size: 12px;
  }

  .oponent-name {
    font-size: 12px;
  }

  .user-elo {
    font-size: 18px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 14px;
    margin-top: -10px;
  }
}

@media screen and (max-width: 350px) {
  .header-section {
    gap: 30px;
    margin-top: 25px;
  }
  .user-name {
    font-size: 10px;
  }

  .oponent-name {
    font-size: 10px;
  }

  .user-elo {
    font-size: 16px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 12px;
    margin-top: -10px;
  }
}

@media screen and (max-width: 320px) {
  .header-section {
    gap: 20px;
    margin-top: 25px;
  }
  .user-name {
    font-size: 10px;
  }

  .oponent-name {
    font-size: 10px;
  }

  .user-elo {
    font-size: 16px;
    margin-top: -10px;
  }

  .elo-title {
    font-size: 12px;
    margin-top: -10px;
  }

  .chet {
    font-size: 24px;
  }
}
</style>
