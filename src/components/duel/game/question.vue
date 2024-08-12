<script></script>

<template>
  <article class="question-cont">
    <div class="theme-cont">
      <h2 class="theme-title">Science</h2>
    </div>
    <h1 class="question-title">
      How many chromosomes does<br />
      your opponent have?
    </h1>
  </article>
</template>

<style scoped>
.question-cont {
  position: fixed;
  top: 280px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  width: 388px;
  height: 190px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.theme-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  width: 308px;
  height: 25px;
  background: #0053ad;
  margin-top: -30px;
  margin-bottom: 30px;
}

.theme-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
}

.question-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: white;
  text-align: center;
}

@media screen and (max-width: 390px) {
  .question-cont {
    width: 360px;
    height: 190px;
  }

  .theme-cont {
    width: 308px;
    height: 25px;
    margin-top: -40px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 360px) {
  .question-cont {
    width: 340px;
    height: 190px;
  }

  .theme-cont {
    width: 308px;
    height: 25px;
    margin-top: -46px;
    margin-bottom: 30px;
  }

  .question-title {
    font-size: 22px;
  }
}

@media screen and (max-width: 340px) {
  .question-cont {
    width: 320px;
    height: 190px;
  }

  .theme-cont {
    width: 250px;
    height: 25px;
    margin-top: -46px;
    margin-bottom: 30px;
  }

  .question-title {
    font-size: 22px;
  }
}

@media screen and (max-width: 320px) {
  .question-cont {
    width: 300px;
    height: 190px;
  }

  .theme-cont {
    width: 250px;
    height: 25px;
    margin-top: -52px;
    margin-bottom: 30px;
  }

  .question-title {
    font-size: 20px;
  }
}

@media screen and (max-width: 300px) {
  .question-cont {
    width: 280px;
    height: 190px;
  }

  .theme-cont {
    width: 250px;
    height: 25px;
    margin-top: -63px;
    margin-bottom: 30px;
  }

  .question-title {
    font-size: 18px;
  }
}
</style>
