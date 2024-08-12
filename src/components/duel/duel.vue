<script setup>
import WaitingGame from "./waitingGame/waitingGame.vue";
import SelectThemes from "./waitingGame/selectThemes/selectThemes.vue";
import Round from "./game/round.vue";
import CorrectAnswer from "./game/correctAnswer.vue";
import WrongAnswer from "./game/wrongAnswer.vue";
import YouWin from "./game/gameFinish/youWin.vue";
import EnemyFound from "./waitingGame/enemyFound.vue";
import YouLose from "./game/gameFinish/youLose.vue";
import Ready from "./game/ready.vue";
import { inject } from "vue";
const { enemyFoundStation, enemyFoundStationOn } = inject("enemyFoundStation");
const { selectThemesStation, selectThemesStationOn } = inject(
  "selectThemesStation"
);
const { answerVariantStation, answerVariantStationOn } = inject(
  "answerVariantStation"
);
const { SearchOponentOn, SearchOponent } = inject("SearchOponent");
const { roundStation } = inject("roundStation");
const { correctAnswer } = inject("correctAnswer");
const { wrongAnswer } = inject("wrongAnswer");
const { youWinStation } = inject("youWinStation");
const { youLoseStation } = inject("youLoseStation");
</script>

<template>
  <WaitingGame v-if="SearchOponent" />
  <EnemyFound v-if="!SearchOponent && enemyFoundStation" />
  <SelectThemes v-if="selectThemesStation" />
  <Round v-if="roundStation" />
  <CorrectAnswer v-if="correctAnswer" />
  <WrongAnswer v-if="wrongAnswer" />
  <YouWin v-if="youWinStation" />
  <YouLose v-if="youLoseStation" />
  <!-- <YouWin /> -->
  <!-- <Ready /> -->
</template>

<style scoped></style>
