<script setup>
import Header from "./headerInfo.vue";
import Question from "./question.vue";
import answerVariations from "./answerVariations.vue";
</script>

<template>
  <section>
    <Header />
    <Question />
    <div class="answer-variations-cont"></div>
    <section class="answer-variations">
      <answerVariations />
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

.next {
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  color: rgb(223, 167, 167);
  border: none;
  color: black;
  border-radius: 5px;
  z-index: 100;
}

@media screen and (max-height: 890px) {
  .answer-variations-cont {
    height: 460px;
  }
}

@media screen and (max-height: 840px) {
  .answer-variations-cont {
    height: 400px;
  }
}

@media screen and (max-height: 780px) {
  .answer-variations-cont {
    height: 350px;
  }
}

@media screen and (max-height: 780px) {
  .answer-variations-cont {
    height: 350px;
  }
}

@media screen and (max-height: 730px) {
  .answer-variations-cont {
    height: 300px;
  }
}

@media screen and (max-height: 680px) {
  .answer-variations-cont {
    height: 280px;
  }
}
</style>
