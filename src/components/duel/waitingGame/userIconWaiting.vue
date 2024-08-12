<script>

</script>

<template>
    <article class="icon-waititng-cont">
    <img src="/main/duel/user-icon-waiting.svg" alt="">
    <div class="outer-circle"></div>
    <div class="outer-circle-two"></div>
    <div class="outer-circle-three"></div>
    <div class="outer-circle-four"></div>
    <div class="outer-circle-five"></div>
    </article>
</template>

<style scoped>

    .icon-waititng-cont {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

  .center-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #3395FF;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);

  }
  
  .outer-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #3395FF;
    border-radius: 50%;
    animation: pulse-outer 2s linear infinite;
  }
  
  .outer-circle-two {
    position: absolute;
    width: 120px;
    height: 120px;
    border: 1px solid #3395FF;
    border-radius: 50%;
    animation: pulse-outer 2s linear infinite;
    opacity: 80%;
  }

  .outer-circle-three {
    position: absolute;
    width: 140px;
    height: 140px;
    border: 1px solid #3395FF;
    border-radius: 50%;
    animation: pulse-outer 2s linear infinite;
    opacity: 70%;
  }

  .outer-circle-four {
    position: absolute;
    width: 160px;
    height: 160px;
    border: 1px solid #3395FF;
    border-radius: 50%;
    animation: pulse-outer 2s linear infinite;
    opacity: 60%;
  }

  .outer-circle-five {
    position: absolute;
    width: 180px;
    height: 180px;
    border: 1px solid #3395FF;
    border-radius: 50%;
    animation: pulse-outer 2s linear infinite;
    opacity: 50%;
  }
  
  @keyframes pulse-outer {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  
</style>