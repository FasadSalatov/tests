<script setup>
import { inject } from "vue";
const { supportOff } = inject("supportActive");
const { SupportSendMessageOn, SupportSendMessage } =
  inject("SupportSendMessage");
import SupportSend from "./supportSend.vue";
</script>

<template>
  <section class="support-cont-block"></section>
  <section class="support-cont">
    <article @click="supportOff" class="support-title-cont">
      <img src="/main/settings/left.svg" alt="out" />
      <h2 class="title-support">Support</h2>
    </article>
    <h1 class="support-cont-title">
      If you are dissatisfied with something,<br />
      write to us, we will fix the error
    </h1>
    <div class="messgage-support-cont"></div>
    <section class="messgage-support-cont-color">
      <input class="input-support" placeholder="Name" type="text" />
      <input class="input-support" placeholder="E-mail" type="email" />
      <textarea
        placeholder="Your suggestion"
        class="textarea-message"
        name=""
        id=""
      ></textarea>
      <button @click="SupportSendMessageOn" class="send-message-button">
        Send
      </button>
    </section>
  </section>
  <SupportSend v-if="SupportSendMessage" />
</template>

<style scoped>
.support-cont {
  position: fixed;
  bottom: 0;
  z-index: 30;
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

.support-cont-block {
  border-radius: 28px 28px 0 0;
  width: 100%;
  height: 750px;
  position: fixed;
  bottom: 0;
  z-index: 20;
  background-color: #040720;
  opacity: 60%;
}

.support-cont-title {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: rgb(255, 255, 255);
  text-align: left;
  width: 380px;
}

.messgage-support-cont {
  border-radius: 30px;
  width: 388px;
  height: 237px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%),
    rgba(4, 7, 32, 0.6);
}

.messgage-support-cont-color {
  position: absolute;
  border-radius: 30px;
  width: 388px;
  height: 237px;
  top: 112px;
  background: rgba(4, 7, 32, 0.6);
  text-align: center;
}

.input-support {
  border-radius: 20px;
  width: 354px;
  height: 44px;
  background: rgba(51, 149, 255, 0.1);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 10px;
  margin-top: 10px;
  outline: none;
}

.textarea-message {
  border-radius: 20px;
  margin-top: 10px;
  width: 354px;
  height: 100px;
  background: rgba(51, 149, 255, 0.1);
  border: none;
  outline: none;
  padding: 10px 0px 0px 10px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.send-message-button {
  border-radius: 80px;
  width: 388px;
  height: 50px;
  background: linear-gradient(180deg, #3395ff 0%, #0053ad 100%);
  border: none;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: rgb(255, 255, 255);
  margin-top: 25px;
}

.support-title-cont {
  position: absolute;
  top: -80px;
  left: 20px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 16px;
}

.title-support {
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 390px) {
  .messgage-support-cont {
    width: 360px;
    height: 237px;
  }

  .messgage-support-cont-color {
    width: 360px;
    height: 237px;
    top: 112px;
  }

  .input-support {
    width: 340px;
    height: 44px;
    font-size: 14px;
  }

  .textarea-message {
    width: 340px;
    height: 100px;
    font-size: 14px;
  }

  .send-message-button {
    width: 360px;
    height: 50px;
    font-size: 22px;
  }

  .support-cont-title {
    font-size: 20px;
    width: 340px;
  }
}

@media screen and (max-width: 360px) {
  .messgage-support-cont {
    width: 340px;
    height: 237px;
  }

  .messgage-support-cont-color {
    width: 340px;
    height: 237px;
    top: 102px;
  }

  .input-support {
    width: 320px;
    height: 44px;
    font-size: 14px;
  }

  .textarea-message {
    width: 320px;
    height: 100px;
    font-size: 14px;
  }

  .send-message-button {
    width: 340px;
    height: 50px;
    font-size: 22px;
  }

  .support-cont-title {
    font-size: 18px;
    width: 340px;
  }
}

@media screen and (max-width: 340px) {
  .messgage-support-cont {
    width: 300px;
    height: 237px;
  }

  .messgage-support-cont-color {
    width: 300px;
    height: 237px;
    top: 96px;
  }

  .input-support {
    width: 280px;
    height: 44px;
    font-size: 14px;
  }

  .textarea-message {
    width: 280px;
    height: 100px;
    font-size: 14px;
  }

  .support-cont-title {
    font-size: 16px;
    width: 340px;
  }

  .send-message-button {
    width: 300px;
    height: 50px;
    font-size: 22px;
  }
  .support-cont-title {
    width: 280px;
  }
}

@media screen and (max-width: 320px) {
  .support-cont-title {
    font-size: 16px;
    width: 290px;
  }
}

@media screen and (max-height: 820px) {
  .support-cont-block {
    width: 100%;
    height: 650px;
  }

  .support-cont-title {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-align: left;
    width: 380px;
    margin-top: 130px;
  }

  .support-title-cont {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 40;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .messgage-support-cont {
    width: 388px;
    height: 237px;
    margin-top: -20px;
  }

  .messgage-support-cont-color {
    width: 388px;
    height: 237px;
    top: 202px;
  }
}

@media screen and (max-height: 720px) {
  .support-cont-block {
    width: 100%;
    height: 550px;
  }

  .support-cont-title {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-align: left;
    width: 380px;
    margin-top: 220px;
  }

  .support-title-cont {
    position: absolute;
    top: 120px;
    left: 20px;
    z-index: 40;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .messgage-support-cont {
    width: 388px;
    height: 237px;
    margin-top: -20px;
  }

  .messgage-support-cont-color {
    width: 388px;
    height: 237px;
    top: 292px;
  }
}
</style>
