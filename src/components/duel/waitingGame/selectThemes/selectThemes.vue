<script setup>
import { inject } from "vue";
const { roundStationOn } = inject("roundStation");
</script>

<script>
export default {
  data() {
    return {
      cards: [
        {
          selected: false,
          name: "Science",
          img: "/main/selectThemes/Science.svg",
        },
        {
          selected: false,
          name: "In a healthy body",
          img: "/main/selectThemes/In_a_healthy_body.svg",
        },
        {
          selected: false,
          name: "In the world of cinema",
          img: "/main/selectThemes/In_the_world_of_cinema.svg",
        },
        {
          selected: false,
          name: "Games and video games",
          img: "/main/selectThemes/Games_and_video_games.svg",
        },
        {
          selected: false,
          name: "History",
          img: "/main/selectThemes/history.svg",
        },
        { selected: false, name: "Music", img: "/main/selectThemes/Music.svg" },
        {
          selected: false,
          name: "Geography",
          img: "/main/selectThemes/Geography.svg",
        },
        {
          selected: false,
          name: "TV series",
          img: "/main/selectThemes/TV_series.svg",
        },
      ],
    };
  },
  computed: {
    disableUnselectedCards() {
      return this.cards.filter((card) => card.selected).length === 2;
    },
    showButton() {
      return this.cards.filter((card) => card.selected).length === 2;
    },
  },
  methods: {
    selectCard(index) {
      if (!this.cards[index].selected && this.disableUnselectedCards) {
        return;
      }
      this.cards[index].selected = !this.cards[index].selected;
    },
  },
};
</script>

<template>
  <section class="theme-cont">
    <h2 class="theme-title">
      Choose 2 out of 6 themes<br />
      for the questions
    </h2>
    <section class="there-card-cont">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'card',
          { selected: card.selected, disabled: disableUnselectedCards },
        ]"
        @click="selectCard(index)"
      >
        <img class="card-img" :src="card.img" alt="" />
        <h1 class="card-name">{{ card.name }}</h1>
      </div>
    </section>
    <button
      :class="['next-button', { active: showButton }]"
      :disabled="!showButton"
      @click="showButton ? roundStationOn() : null"
    >
      NEXT <img src="/main/settings/right.svg" alt="" />
    </button>
  </section>
</template>

<style scoped>
.theme-cont {
  position: fixed;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.theme-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: white;
}

.there-card-cont {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.card-container {
  display: flex;
  gap: 10px;
  position: fixed;
  top: 0;
}

.next-button {
  position: fixed;
  top: 125%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 80px;
  width: 388px;
  height: 65px;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 260px;
  opacity: 60%;
  cursor: not-allowed;
}

.next-button.active {
  opacity: 100%;
}

.card-img {
  position: absolute;
  top: 15px;
  width: 60px;
  height: 60px;
}

.card-name {
  position: absolute;
  top: 80px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: white;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 117px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #2c3580 0%, #153659 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  opacity: 100%;
}

.card.selected {
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%),
    rgba(4, 7, 32, 0.6);
}

.card.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.theme-card-color {
  border: 1px solid #040720;
  border-radius: 27px;
  width: 190px;
  height: 117px;
  opacity: 60%;
  background-color: #040720;
}

@media screen and (max-width: 400px) {
  .theme-title {
    font-size: 30px;
  }

  .card {
    width: 170px;
    height: 117px;
  }

  .next-button {
    top: 125%;
    width: 360px;
    height: 65px;
    font-size: 22px;
    gap: 240px;
  }
}

@media screen and (max-width: 360px) {
  .card {
    width: 150px;
    height: 117px;
  }

  .theme-title {
    font-size: 28px;
  }

  .card-name {
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }

  .next-button {
    top: 125%;
    width: 330px;
    height: 65px;
    font-size: 22px;
    gap: 220px;
  }
}

@media screen and (max-width: 320px) {
  .card-img {
    position: absolute;
    top: 0px;
    width: 40px;
    height: 60px;
  }

  .card {
    width: 130px;
    height: 90px;
  }

  .card-name {
    top: 60px;
    font-size: 10px;
  }

  .theme-title {
    font-size: 24px;
  }

  .next-button {
    top: 125%;
    width: 300px;
    height: 65px;
    font-size: 22px;
    gap: 200px;
  }
}

@media screen and (max-height: 870px) {
  .next-button {
    top: 110%;
  }
}

@media screen and (max-height: 770px) {
  .theme-title {
    font-size: 22px;
    margin-top: -40px;
  }
}

@media screen and (max-height: 650px) {
  .theme-title {
    font-size: 22px;
    margin-top: -120px;
  }

  .next-button {
    top: 115%;
  }

  .card {
    width: 130px;
    height: 90px;
  }

  .theme-title {
    font-size: 24px;
  }

  .card-img {
    position: absolute;
    top: 0px;
    width: 40px;
    height: 60px;
  }

  .card-name {
    top: 60px;
    font-size: 10px;
  }
}
</style>
