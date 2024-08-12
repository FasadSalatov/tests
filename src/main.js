import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import QRCode from 'qrcode'

createApp({
  components: { App },
  mounted() {
    if (window.innerWidth > 768) { // Проверка на десктопную версию
      QRCode.toCanvas(
        document.getElementById('qrcode'),
        'https://t.me/battle_iq_test_bot/battleiqtestapp',
        function (error) {
          if (error) console.error(error)
          console.log('QR код успешно создан!')
        }
      )
    }
  },
  template: `
    <div>
      <App />
      <canvas id="qrcode" style="margin-top: 20px;"></canvas>
    </div>
  `,
}).mount('#app')
