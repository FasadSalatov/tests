<script setup>
import { inject, reactive } from "vue";
const { navigationStation, trueNavigation, falseNavigation } =
  inject("navigationStation");

const { settingsStation } = inject("settingsStation");

const { UserProfileStation } = inject("UserProfileStation");
const buttonStation = reactive({
  homeButton: true,
  friendsButton: false,
});

const homeButtonClick = () => {
  buttonStation.homeButton = true;
  buttonStation.friendsButton = false;
  trueNavigation();
};

const friendsButtonClick = () => {
  buttonStation.homeButton = false;
  buttonStation.friendsButton = true;
  falseNavigation();
};
</script>

<template>
  <!-- <div class="gradient-block"></div> -->
  <div class="navigation-color"></div>
  <nav class="navigation" v-if="!settingsStation && !UserProfileStation">
    <button
      class="navigation-btn"
      @click="homeButtonClick"
      :class="{ active: buttonStation.homeButton }"
    >
      Home
    </button>
    <button
      class="navigation-btn"
      @click="friendsButtonClick"
      :class="{ active: buttonStation.friendsButton }"
    >
      Friends
    </button>
  </nav>
  <nav class="navigation" v-else>
    <button class="navigation-btn">Home</button>
    <button class="navigation-btn">Friends</button>
  </nav>
</template>

<style scoped>
.navigation {
  border-radius: 40px 40px 0 0;
  width: 100%;
  height: 110px;
  background: rgba(4, 7, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 0;
  z-index: 60;
}

.navigation-color {
  border-radius: 40px 40px 0 0;
  width: 100%;
  height: 110px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%),
    rgba(4, 7, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 0;
  z-index: 40;
}

.gradient-block {
  width: 100%;
  height: 210px;
  background: linear-gradient(180deg, rgba(4, 7, 32, 0) 0%, #040720 49.93%);
  position: fixed;
  bottom: 0;
  z-index: 30;
}

.navigation-btn {
  border-radius: 30px;
  width: 190px;
  height: 40px;
  background: linear-gradient(
    180deg,
    rgba(51, 149, 255, 0.1) 0%,
    rgba(0, 83, 173, 0.1) 100%
  );
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  cursor: pointer; /* Добавляем курсор, чтобы показать, что элемент кликабельный */
}

.navigation-btn.active {
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
}

@media screen and (max-width: 400px) {
  .navigation-btn {
    width: 180px;
    height: 40px;
    font-size: 14px;
  }
}

@media screen and (max-width: 370px) {
  .navigation-btn {
    width: 160px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
