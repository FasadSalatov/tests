<script setup>
import { inject } from "vue";
const { correctAnswerOn } = inject("correctAnswer");
</script>

<template>
  <section class="">
    <section class="answer-variations">
      <div class="line-time"></div>
      <section class="answer-variations-card-cont">
        <article @click="correctAnswerOn" class="answer-variations-card">
          <h1 class="answer-title">46</h1>
        </article>
        <article @click="correctAnswerOn" class="answer-variations-card">
          <h1 class="answer-title">47</h1>
        </article>
        <article @click="correctAnswerOn" class="answer-variations-card">
          <h1 class="answer-title">23</h1>
        </article>
        <article @click="correctAnswerOn" class="answer-variations-card">
          <h1 class="answer-title">0</h1>
        </article>
      </section>
    </section>
  </section>
</template>

<style scoped>
.answer-variations-cont {
  border-radius: 28px 28px 0 0;
  width: 100%;
  height: 516px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  opacity: 60%;
  background-color: #040720;
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
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.answer-variations-card-cont {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 30px;
}

.answer-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: white;
}

.line-time {
  border-radius: 30px;
  width: 362px;
  height: 12px;
  background: linear-gradient(180deg, #3ccdbe 0%, #1a655e 100%);
  margin-top: 40px;
}

@media screen and (max-width: 390px) {
  .answer-variations-card {
    width: 170px;
    height: 110px;
  }
}

@media screen and (max-width: 370px) {
  .line-time {
    width: 340px;
    margin-top: 40px;
  }
}

@media screen and (max-width: 360px) {
  .answer-variations-card {
    width: 150px;
    height: 100px;
  }
}

@media screen and (max-width: 340px) {
  .line-time {
    width: 320px;
    margin-top: 40px;
  }
}

@media screen and (max-width: 320px) {
  .answer-variations-card {
    width: 130px;
    height: 100px;
  }

  .line-time {
    width: 280px;
    margin-top: 40px;
  }
}

@media screen and (max-height: 890px) {
  .line-time {
    margin-top: 90px;
  }
}

@media screen and (max-height: 840px) {
  .line-time {
    margin-top: 120px;
  }
}

@media screen and (max-height: 780px) {
  .line-time {
    margin-top: 160px;
  }
}

@media screen and (max-height: 730px) {
  .line-time {
    margin-top: 185px;
  }
}

@media screen and (max-height: 680px) {
  .line-time {
    margin-top: 200px;
    margin-bottom: -15px;
  }
  .answer-variations-card {
    width: 130px;
    height: 90px;
  }
}
</style>
