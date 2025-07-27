let indexe = 0;
const limiteporvez = 1;
const resultado = document.getElementById('video');
const botao = document.getElementById('btn');
let contador = 0;
const videos = [
  // seus links de vídeos aqui
'https://www.youtube.com/embed/K4kJSpG1cGk',
'https://www.youtube.com/embed/0JJJag_uO2Y',
'https://www.youtube.com/embed/quIz-hPO0NM',
'https://www.youtube.com/embed/yIEPr4saZ38',
'https://www.youtube.com/embed/-m3O588GZGg',
'https://www.youtube.com/embed/QE957grj-sg',
'https://www.youtube.com/embed/cyKU9EUCWJo',
'https://www.youtube.com/embed/rYmOCi1vV24',
'https://www.youtube.com/embed/l34n7znwQ0A',
'https://www.youtube.com/embed/cyiRhKDFSmA',
'https://www.youtube.com/embed/-mXYZCWVJUo',
'https://www.youtube.com/embed/VSGyBUcV54o',
'https://www.youtube.com/embed/ctDnyGR2QvQ',
'https://www.youtube.com/embed/TzwfDrlW3pA',
'https://www.youtube.com/embed/0RSAENGBUnE',
'https://www.youtube.com/embed/m1SGWLlZHUw',
'https://www.youtube.com/embed/6mjVfPp-7SU',
'https://www.youtube.com/embed/8d8Kcsxx1n4',
'https://www.youtube.com/embed/MSF1uqbs9MM',
'https://www.youtube.com/embed/QZ0bKLcO_JY',
'https://www.youtube.com/embed/Qj0YcznpMb8',
'https://www.youtube.com/embed/lmgRNgUb7Dg',
'https://www.youtube.com/embed/gkyUWybbYr4',
'https://www.youtube.com/embed/L8-cqfnUgQM',
'https://www.youtube.com/embed/BBYLEUxY2rk',
'https://www.youtube.com/embed/oRadVZPTs64',
'https://www.youtube.com/embed/NNOiacSQoxg',
'https://www.youtube.com/embed/nmNMX6f5wVU',
'https://www.youtube.com/embed/tS6sRTYtAbM',
'https://www.youtube.com/embed/pxqnqWvHuPA',
'https://www.youtube.com/embed/tmOL_nXOo7Q',
'https://www.youtube.com/embed/n0K9MXPk4UY',
'https://www.youtube.com/embed/cyKU9EUCWJo',
'https://www.youtube.com/embed/6a0Gcha2X9c',
'https://www.youtube.com/embed/L8-cqfnUgQM',
'https://www.youtube.com/embed/BBYLEUxY2rk',
'https://www.youtube.com/embed/NNOiacSQoxg',
'https://www.youtube.com/embed/Q4R4vL4iEps',
'https://www.youtube.com/embed/zL_XxBJ1A0g',
'https://www.youtube.com/embed/7g99rR0313A',
'https://www.youtube.com/embed/Axif92bdeQo',
'https://www.youtube.com/embed/Blfu3F_TqE0',
'https://www.youtube.com/embed/ToB_aGcmP1A',
'https://www.youtube.com/embed/2KnnlHhiN9Y',
'https://www.youtube.com/embed/nmNMX6f5wVU',
'https://www.youtube.com/embed/NNOiacSQoxg',
'https://www.youtube.com/embed/9uxT06wqDq0',
'https://www.youtube.com/embed/tmOL_nXOo7Q',
'https://www.youtube.com/embed/n0K9MXPk4UY',
'https://www.youtube.com/embed/b5CQ-w0egPc',
'https://www.youtube.com/embed/9ZX9YY4CM1g',
'https://www.youtube.com/embed/LtQodOovhtY',
'https://www.youtube.com/embed/9-KKuzaHIPI',
'https://www.youtube.com/embed/n0K9MXPk4UY',
'https://www.youtube.com/embed/ytpzp1A_UhU',
'https://www.youtube.com/embed/5650fSPORjA',
'https://www.youtube.com/embed/gQ3fBCqAf84',
'https://www.youtube.com/embed/NTShFmZhmbI',
'https://www.youtube.com/embed/mMGHD7LuhUg',
'https://www.youtube.com/embed/N04KYA0Dej0',
'https://www.youtube.com/embed/OjfUsw-f6v8',
'https://www.youtube.com/embed/DodcPiGNdSc',
'https://www.youtube.com/embed/XXtqVBHbqMM',
'https://www.youtube.com/embed/73Nfd3J_BIk',
'https://www.youtube.com/embed/QE957grj-sg',
'https://www.youtube.com/embed/CiwRJzSQXT0',
'https://www.youtube.com/embed/GOTHeiJ5lUM',
'https://www.youtube.com/embed/Ty2C_uJc1Oc',
'https://www.youtube.com/embed/bjvefBwG_-Y',
'https://www.youtube.com/embed/j2POnBUUr50',
'https://www.youtube.com/embed/SF2E_lMyqh4',
'https://www.youtube.com/embed/BaqwY4DJlE0',
'https://www.youtube.com/embed/cWos6azHH20',
'https://www.youtube.com/embed/mEQI73Jmcv0',
'https://www.youtube.com/embed/PIDRplRguGg',
'https://www.youtube.com/embed/_DNRAhd-2io',
'https://www.youtube.com/embed/wCRuy1OeXGE',
'https://www.youtube.com/embed/L_lArNFFU2w',
'https://www.youtube.com/embed/JwLc_hbyzWA',
'https://www.youtube.com/embed/kzEv1ZO-3Yw',
'https://www.youtube.com/embed/e-0I1Nm1Lp4',
'https://www.youtube.com/embed/GwK9r0jF_CY',
'https://www.youtube.com/embed/n4bauDEAKx0',
'https://www.youtube.com/embed/qisgLLYlHYg',
'https://www.youtube.com/embed/ZYxaSuKDIt8',
'https://www.youtube.com/embed/ExXpJudMNg0',
'https://www.youtube.com/embed/jPg9uQjJzpA',
'https://www.youtube.com/embed/i9C4IMvbtwA',
'https://www.youtube.com/embed/J_grDyvIYgk',
'https://www.youtube.com/embed/505Nqd5REJo',
'https://www.youtube.com/embed/YY46T-U-SiU',
'https://www.youtube.com/embed/jo8wBLcqxf0',
'https://www.youtube.com/embed/psJGf9dRfHM',
'https://www.youtube.com/embed/ErT6UgTEEbI',
'https://www.youtube.com/embed/abBtw8GRqmw',
'https://www.youtube.com/embed/BXAN081Kzpk',
'https://www.youtube.com/embed/uiwte0k15yA',
'https://www.youtube.com/embed/w7be6lcGW0Q',
'https://www.youtube.com/embed/CDMnJu246t0',
'https://www.youtube.com/embed/h_vC2cN1eR4',
'https://www.youtube.com/embed/irEWww_mrFo',
'https://www.youtube.com/embed/aGVew5i9oH0',
'https://www.youtube.com/embed/WVFaDPRy_Dg',
'https://www.youtube.com/embed/ljPvPoq_V4s',
'https://www.youtube.com/embed/3LEf2YHnUbs',
'https://www.youtube.com/embed/hB9Ptw0fPig',
'https://www.youtube.com/embed/xl_z3DWVapU',
'https://www.youtube.com/embed/byXXgitCmIA',
'https://www.youtube.com/embed/0BnvYk7C7PU',
'https://www.youtube.com/embed/BQ0HFEfgacQ',
'https://www.youtube.com/embed/QIcT-71KbDU',
'https://www.youtube.com/embed/bUGLv0cL-oc',
'https://www.youtube.com/embed/RWgqpudA1AA',
'https://www.youtube.com/embed/EUg3091xzp8',
'https://www.youtube.com/embed/rGFTG0aogHE',
'https://www.youtube.com/embed/JApXgvWde1Y',
'https://www.youtube.com/embed/FxNetAh1Odw',
'https://www.youtube.com/embed/8pwBNmEUfLU',
'https://www.youtube.com/embed/ovc-dR5HD3M',
'https://www.youtube.com/embed/jNgV6ME8vgE',
'https://www.youtube.com/embed/em_CA6TS7-k',
'https://www.youtube.com/embed/wPs0LoxrXsU',
'https://www.youtube.com/embed/bo0df2-ZMt8',
'https://www.youtube.com/embed/rFZtn4HsGLs',
'https://www.youtube.com/embed/E7dL6guyRsQ',
'https://www.youtube.com/embed/Aoi-LLxYbL8',
'https://www.youtube.com/embed/AORwzsQEQuo',
'https://www.youtube.com/embed/jpUu1LNovQk',
'https://www.youtube.com/embed/Pvq957BzziI',
'https://www.youtube.com/embed/Ua4O6wDiSbw',
'https://www.youtube.com/embed/trL__RLHZFY',
'https://www.youtube.com/embed/cbdXjJW8D9k',
'https://www.youtube.com/embed/9A5rLA_y3jU',
'https://www.youtube.com/embed/JGYdcdWkZGg',
'https://www.youtube.com/embed/6ai2a29ENAE',
'https://www.youtube.com/embed/_cWVu4VSctQ',
'https://www.youtube.com/embed/2T1QPCBMjQM',
'https://www.youtube.com/embed/evjPMisI4l0',
'https://www.youtube.com/embed/v2UTNGCv3ow',
'https://www.youtube.com/embed/e2rRDb49c_4',
'https://www.youtube.com/embed/q037NuJp-e8',
'https://www.youtube.com/embed/4WE55JbaSZc',
'https://www.youtube.com/embed/QcD0XMSWYU4',
'https://www.youtube.com/embed/nHY_OufmRKs',
'https://www.youtube.com/embed/xJ-UbBBRArA',
'https://www.youtube.com/embed/JnVhhOCVs-o',
'https://www.youtube.com/embed/BNvaX4Cv8Rg',
'https://www.youtube.com/embed/qhKztlT1nGU',
'https://www.youtube.com/embed/e0Zp8AVbKqI',
'https://www.youtube.com/embed/QS1AfLRcHpw',
'https://www.youtube.com/embed/Gev2NVDrgoI',
'https://www.youtube.com/embed/iSSgPghQ6zw',
'https://www.youtube.com/embed/7Fm0ZKheXAo',
'https://www.youtube.com/embed/F_VpjqqamA8',
'https://www.youtube.com/embed/Mb4skCkbmXU',
'https://www.youtube.com/embed/vQEKS2FJ7ic',
'https://www.youtube.com/embed/YNlczhSgT0I',
'https://www.youtube.com/embed/KlcyF2v4UOw',
'https://www.youtube.com/embed/Liy8wnUzD1o',
'https://www.youtube.com/embed/TpLJ1wn0zDk',
'https://www.youtube.com/embed/ooYIroltryM',
'https://www.youtube.com/embed/RtbBATnz3XM',
'https://www.youtube.com/embed/BED4ElLQx_U',
'https://www.youtube.com/embed/S8ebeakpxoo',
'https://www.youtube.com/embed/9wtILWee40M',
'https://www.youtube.com/embed/VFvgvfYgcIQ',
'https://www.youtube.com/embed/FLJ1zoaO-44',
'https://www.youtube.com/embed/ICegl1EEY2A',
'https://www.youtube.com/embed/I8OYcnRYY8c',
'https://www.youtube.com/embed/Jj6HLuyx_lA',
'https://www.youtube.com/embed/ULFXz3W2roA',
'https://www.youtube.com/embed/6T1F9yPJowc',
'https://www.youtube.com/embed/eW-x9el9I08',
'https://www.youtube.com/embed/OEr409Sr4hQ',
'https://www.youtube.com/embed/ZGUazHXOugY',
'https://www.youtube.com/embed/i32MQnIahSw',
'https://www.youtube.com/embed/-OHqf0-nGAI',
'https://www.youtube.com/embed/RZI8XxQgLCc',
'https://www.youtube.com/embed/dsxLMBDOZLI',
'https://www.youtube.com/embed/gC76iw6WW6A',
'https://www.youtube.com/embed/GGmOGXukQBE',
'https://www.youtube.com/embed/7TKb-2VLmcE',
'https://www.youtube.com/embed/wXqxxUxdcW0',
'https://www.youtube.com/embed/B0RHrR37PrQ',
'https://www.youtube.com/embed/1J0CHBVdkl8',
'https://www.youtube.com/embed/UbYO50sDQ38',
'https://www.youtube.com/embed/wd-oCQbbz1s',
'https://www.youtube.com/embed/1GxPGcHtq5o',
'https://www.youtube.com/embed/_54M5libP00',
'https://www.youtube.com/embed/OCwCWKHoFlM',
'https://www.youtube.com/embed/xIYwzwCM2g0',
'https://www.youtube.com/embed/CXlKDuJRbwU',
'https://www.youtube.com/embed/JktkYErjoPY',
'https://www.youtube.com/embed/0ONzJ-pVkXU',
'https://www.youtube.com/embed/A0IxsTVMBeI',
'https://www.youtube.com/embed/5K3ryOiKWZU',
'https://www.youtube.com/embed/FU5H8mq3Kd4',
'https://www.youtube.com/embed/Qh59DhCeoC0',
'https://www.youtube.com/embed/rJX5X7R7N8M',
'https://www.youtube.com/embed/FunWB70rBJM',
'https://www.youtube.com/embed/l46IIupLmX8',
'https://www.youtube.com/embed/o5dsClRxk0g',
'https://www.youtube.com/embed/E6ms7WtsXp4',
'https://www.youtube.com/embed/lxhLyR9hy3s',
'https://www.youtube.com/embed/oI6xz7cSQfs',
'https://www.youtube.com/embed/35bV2eyeS6Y',
'https://www.youtube.com/embed/KL1wR-H7qHg',
'https://www.youtube.com/embed/Ay2Q6wQgJxE',
'https://www.youtube.com/embed/OGp3IZUlzgQ',
'https://www.youtube.com/embed/fnSBl46w82g',
'https://www.youtube.com/embed/PW8X1qrTa78',
'https://www.youtube.com/embed/755kWRHhvlQ',
'https://www.youtube.com/embed/SE3NwRRBtCc',
'https://www.youtube.com/embed/kU4OCCwXMlA',
'https://www.youtube.com/embed/NU2Ulah6Rs8',
'https://www.youtube.com/embed/--u0w7Ew46k',
'https://www.youtube.com/embed/W39KlSl-wAY',
'https://www.youtube.com/embed/AXbR3QotVK4',
'https://www.youtube.com/embed/-e30MYoA7ng',
'https://www.youtube.com/embed/xkOksQr0n6A',
'https://www.youtube.com/embed/o8EGptKLVFM',
'https://www.youtube.com/embed/B7xhIVkY84k',
'https://www.youtube.com/embed/qD22TG8v4r4',
'https://www.youtube.com/embed/t8qusojJzYw',
'https://www.youtube.com/embed/W7dPZMTG-Fo',
'https://www.youtube.com/embed/j2zbVcoJd1I',
'https://www.youtube.com/embed/Kb_LnBMHuwg',
'https://www.youtube.com/embed/g_hfIhnv0b4'
];

function criaIframe(src, width = 300, height = 300) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.width = width;
  iframe.height = height;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  return iframe;
}

botao.onclick = function () {
  let final = indexe + limiteporvez;

  for (; indexe < final && indexe < videos.length; indexe++) {
    contador++;

    // cria e adiciona o vídeo
    let iframe = criaIframe(videos[indexe]);
    resultado.appendChild(iframe);

    if (contador === 4) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://sistema01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://sistema01.pages.dev/" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
      
    } 

    if (contador === 5) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://conteudo01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://conteudo01.pages.dev/" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
      
    } 
    
    if (contador === 6) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://uteis01.pages.dev/net" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://uteis01.pages.dev/net" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      
      resultado.appendChild(div);
      
    } 
    if (contador === 7) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://airbnbn3.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
          <a href="https://airbnbn3.pages.dev/" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      contador=0;
      resultado.appendChild(div);
      
    } 

    if (contador === 1) {
      // Anúncio para contador 1
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://uteis01.pages.dev/servicobancario" width="350" height="250" frameborder="0" allowfullscreen></iframe>
        <a href="https://uteis01.pages.dev/servicobancario" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          ABRIR TELA CHEIA
        </a> 
      `;
      resultado.appendChild(div);
    
    } 
    
    else if (contador === 2) {
      // Anúncio para contador 2 (diferente do 1)
      const div = document.createElement('div');
      div.innerHTML = `
        <iframe src="https://encurtadorko.pages.dev/" width="350" height="500" frameborder="0" allowfullscreen></iframe>
        <a href="http://www.espiritosanto-es.com.br/cloudflare" 
          style="display: inline-block; background-color: blue; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
          CONFERIR 2
        </a>

      `;
      resultado.appendChild(div);
       // reseta contador depois do 2
    }
  }

  if (indexe >= videos.length) {
    botao.disabled = true;
    botao.textContent = 'Chegamos no limite já';
  }
};
