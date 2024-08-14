<script setup>
import Header from "./headerInfo.vue";
import Question from "./question.vue";

import { inject, ref } from "vue";

const { youWinStationOn } = inject("youWinStation");
</script>

<script>
export default {
  data() {
    return {
      timer: 30, // таймер на 30 секунд
      interval: null,
      showButton: false, // Переменная для управления видимостью кнопки
    };
  },
  computed: {
    timerStyle() {
      const grayValue = Math.floor((this.timer / 30) * 100); // процент оставшегося времени
      return {
        background: `linear-gradient(to right, #1A9D90 ${grayValue}%, #1A655E ${grayValue}%)`, // градиент от серого к зеленому
        transition: "background 0.1s", // анимация изменения цвета
      };
    },
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.timer -= 1;
        } else {
          clearInterval(this.interval);
          this.showButton = true; // Показываем кнопку по завершении таймера
        }
      }, 1000);
    },
    resetTimer() {
      this.timer = 30;
      this.showButton = false; // Скрываем кнопку при сбросе таймера
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.startTimer(); // Запускаем таймер заново
    },
    onButtonClick() {
      alert("Timer finished!"); // Логика обработки нажатия на кнопку
    },
  },
  mounted() {
    this.startTimer(); // Автоматически запускаем таймер при загрузке компонента
  },
  beforeDestroy() {
    // Очищаем интервал, если компонент уничтожается
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
};
</script>

<template>
  <section>
    <Header />
    <Question />
    <div class="answer-variations-cont"></div>
    <section>
      <section class="answer-variations">
        <div class="line-time" :style="timerStyle"></div>
        <section class="answer-variations-card-cont">
          <article class="answer-variations-card-lose">
            <h1 class="answer-title">42</h1>
          </article>
          <article class="answer-variations-card-good">
            <h1 class="answer-title">42</h1>
          </article>
          <article class="answer-variations-card">
            <h1 class="answer-title">42</h1>
            <img
              class="enemy-img"
              src="/main/duel/correctAnswer/enemy.svg"
              alt="enemy"
            />
          </article>
          <article class="answer-variations-card">
            <h1 class="answer-title">42</h1>
          </article>
        </section>
        <button @click="youWinStationOn" class="next-button" v-if="showButton">
          NEXT <img src="/main/duel/correctAnswer/NEXT.svg" alt="next" />
        </button>
      </section>
    </section>
  </section>
</template>

<style scoped>
.answer-variations-cont {
  border-radius: 28px 28px 0 0;
  width: 100%;
  height: 425px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  opacity: 60%;
  background-color: #040720;
}

.line-time {
  border-radius: 30px;
  width: 362px;
  height: 12px;
  background-color: #19645d;
  margin-top: -360px;
  position: fixed;
  bottom: 375px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.answer-variations-card-lose {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 110px;
  box-shadow: 0 4px 0 0 #040720;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #f66 0%, #f33 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 100%;
}

.answer-variations-card {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 110px;
  box-shadow: 0 4px 0 0 #040720;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #2c3580 0%, #153659 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 100%;
}

.answer-variations-card-good {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 110px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #3ccdbe 0%, #1a655e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 100%;
}

.answer-variations-card-color {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 110px;
  opacity: 60%;
  background-color: #040720;
}

.answer-variations {
  border-radius: 28px 28px 0 0;
  width: 428px;
  height: 516px;
  position: fixed;
  bottom: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.answer-variations-card-cont {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 30px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.answer-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: white;
}

.enemy-img {
  position: absolute;
  top: 70px;
  left: 15px;
}

.next-button {
  border-radius: 80px;
  width: 388px;
  height: 65px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  border: none;
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  gap: 240px;
}

@media screen and (max-width: 390px) {
  .answer-variations-card {
    width: 170px;
    height: 110px;
  }

  .answer-variations-card-good {
    width: 170px;
    height: 110px;
  }

  .answer-variations-card-lose {
    width: 170px;
    height: 110px;
  }

  .next-button {
    width: 360px;
    height: 65px;
    font-size: 22px;
  }
}

@media screen and (max-width: 375px) {
  .line-time {
    width: 340px;
  }
}

@media screen and (max-width: 360px) {
  .answer-variations-card {
    width: 150px;
    height: 100px;
  }
  .answer-variations-card-good {
    width: 150px;
    height: 100px;
  }

  .answer-variations-card-lose {
    width: 150px;
    height: 100px;
  }

  .next-button {
    width: 340px;
    height: 65px;
    font-size: 20px;
  }

  .line-time {
    width: 320px;
  }
}

@media screen and (max-width: 320px) {
  .answer-variations-card {
    width: 130px;
    height: 100px;
  }

  .answer-variations-card-good {
    width: 130px;
    height: 100px;
  }

  .answer-variations-card-lose {
    width: 130px;
    height: 100px;
  }

  .next-button {
    width: 300px;
    height: 55px;
    font-size: 20px;
    gap: 190px;
  }

  .line-time {
    width: 280px;
  }
}

@media screen and (max-height: 780px) {
  .line-time {
    bottom: 315px;
  }

  .answer-variations-cont {
    width: 100%;
    height: 350px;
  }

  .answer-variations-card {
    width: 150px;
    height: 90px;
  }

  .answer-variations-card-good {
    width: 150px;
    height: 90px;
  }

  .answer-variations-card-lose {
    width: 150px;
    height: 90px;
  }

  .answer-variations-card-cont {
    gap: 10px;
    margin-top: 30px;
    bottom: 20px;
  }

  .enemy-img {
    position: absolute;
    top: 55px;
    left: 15px;
  }
}
</style>
