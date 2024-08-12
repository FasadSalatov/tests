<!-- src/components/QRCodeDisplay.vue -->
<template>
  <div class="qr-container">
    <canvas ref="qrCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

const qrCanvas = ref(null);

onMounted(() => {
  QRCode.toCanvas(
    qrCanvas.value,
    "https://t.me/battle_iq_test_bot/battleiqtestapp",
    function (error) {
      if (error) console.error(error);
      console.log("QR код успешно создан!");
    }
  );
});
</script>

<style scoped>
.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* высота контейнера */
  width: 100%; /* ширина контейнера */
}

canvas {
  max-width: 100%; /* Ограничение ширины QR-кода */
  max-height: 100%; /* Ограничение высоты QR-кода */
}
</style>
