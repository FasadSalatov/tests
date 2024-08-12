<script setup>
import { inject } from "vue";
const { SupportSendMessageOff } = inject("SupportSendMessage");
</script>

<template>
  <section class="support-send-cont">
    <article class="message">
      <h1>
        Your message has been sent to<br />
        support!
      </h1>
      <h2>A reply will be sent to your email</h2>
      <button @click="SupportSendMessageOff">Ok</button>
    </article>
  </section>
</template>

<script></script>

<style scoped>
.support-send-cont {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 926px;
  backdrop-filter: blur(5px);
  background: rgba(4, 7, 32, 0.3);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.message {
  border-radius: 20px;
  width: 388px;
  height: 195px;
  background: #040720;
}

.message h1 {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: rgb(255, 255, 255);
}

.message h2 {
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: rgb(255, 255, 255);
}

.message button {
  border: 1px solid #040720;
  border-radius: 30px;
  width: 332px;
  height: 35px;
  box-shadow: 0 4px 0 0 #040720;
  background: linear-gradient(180deg, #b266ff 0%, #5900b2 100%);
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 390px) {
  .message {
    border-radius: 20px;
    width: 360px;
    height: 195px;
    background: #040720;
  }
}

@media screen and (max-width: 360px) {
  .message {
    border-radius: 20px;
    width: 340px;
    height: 195px;
    background: #040720;
  }

  .message button {
    width: 310px;
    height: 35px;
    font-size: 16px;
  }

  .message h1 {
    font-size: 20px;
  }

  .message h2 {
    font-size: 16epx;
  }
}

@media screen and (max-width: 340px) {
  .message {
    border-radius: 20px;
    width: 320px;
    height: 180px;
    background: #040720;
  }

  .message button {
    width: 290px;
    height: 35px;
    font-size: 16px;
  }

  .message h1 {
    font-size: 18px;
  }

  .message h2 {
    font-size: 14px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 320px) {
  .message {
    border-radius: 20px;
    width: 300px;
    height: 180px;
    background: #040720;
  }

  .message button {
    width: 270px;
    height: 35px;
    font-size: 16px;
  }

  .message h1 {
    font-size: 18px;
  }

  .message h2 {
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
