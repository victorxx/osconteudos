let indexe = 0;
const limiteporvez = 1;
const resultado = document.getElementById('video');
const botao = document.getElementById('btn');
let contador = 0;
const videos = [
  // seus links de vídeos aqui
  'https://www.youtube.com/embed/9cGkhlIhu0Y',
'https://www.youtube.com/embed/3EHu2ajIt8k',
'https://www.youtube.com/embed/xbdc9EWSSEY',
'https://www.youtube.com/embed/Z6DxwnMKUhk',
'https://www.youtube.com/embed/DTJBTrhjQwk',
'https://www.youtube.com/embed/zeIc61Z7690',
'https://www.youtube.com/embed/5WDawUdQoWo',
'https://www.youtube.com/embed/dG0zyxIjJEU',
'https://www.youtube.com/embed/XXPgsMtpNKM',
'https://www.youtube.com/embed/PMvy6nPjhOA',
'https://www.youtube.com/embed/G8C5-IT8QO8',
'https://www.youtube.com/embed/kmSibAyhD4c',
'https://www.youtube.com/embed/8MXoFqbBYns',
'https://www.youtube.com/embed/nLMUdehb0iE',
'https://www.youtube.com/embed/HGugfrmktDQ',
'https://www.youtube.com/embed/ZAioDhcDEkU',
'https://www.youtube.com/embed/XNBayHI_F-U',
'https://www.youtube.com/embed/J6WhzQHHZGg',
'https://www.youtube.com/embed/wFcnI-Q1mSs',
'https://www.youtube.com/embed/AbdWuCKVbgk',
'https://www.youtube.com/embed/CpGUbUEkpzk',
'https://www.youtube.com/embed/E-5J1RfIUv0',
'https://www.youtube.com/embed/9gynQNOxRZc',
'https://www.youtube.com/embed/XHX8_Rlp46I',
'https://www.youtube.com/embed/Q5oy3xYb-FM',
'https://www.youtube.com/embed/PFFAu5hojGE',
'https://www.youtube.com/embed/XhLPLK-YJGg',
'https://www.youtube.com/embed/CNe6kIhA6dE',
'https://www.youtube.com/embed/qYMFP4w_ul4',
'https://www.youtube.com/embed/jWefDPF5wjo',
'https://www.youtube.com/embed/-M98qe3ijWo',
'https://www.youtube.com/embed/HNElTWNleWg',
'https://www.youtube.com/embed/BNqnSNQ01pI',
'https://www.youtube.com/embed/dfcPigbyx_I',
'https://www.youtube.com/embed/o70Mwpl3mUY',
'https://www.youtube.com/embed/DDLY1Bq_DY8',
'https://www.youtube.com/embed/bcRKtg4ovJg',
'https://www.youtube.com/embed/ZhrlUWGhHU8',
'https://www.youtube.com/embed/DsSpkLjG31Q',
'https://www.youtube.com/embed/h2F0XoDYOvw',
'https://www.youtube.com/embed/AwA0Mrxjot0',
'https://www.youtube.com/embed/elyHtoAMDNA',
'https://www.youtube.com/embed/DI2Bhl7dagY',
'https://www.youtube.com/embed/4Xk1WHedsEM',
'https://www.youtube.com/embed/t9Ad2BcvwIk',
'https://www.youtube.com/embed/5hYmn3JSSKw',
'https://www.youtube.com/embed/Lyqnjkt7EVo',
'https://www.youtube.com/embed/AwA0Mrxjot0',
'https://www.youtube.com/embed/oM0IWyD5DDU',
'https://www.youtube.com/embed/COAyZgr7LRc',
'https://www.youtube.com/embed/Kj0eaT2lLNI',
'https://www.youtube.com/embed/anRm8qZerdc',
'https://www.youtube.com/embed/iviHzYgw4xg',
'https://www.youtube.com/embed/7Eojcvw_1OA',
'https://www.youtube.com/embed/AwA0Mrxjot0',
'https://www.youtube.com/embed/uzU7NNFMBuQ',
'https://www.youtube.com/embed/lhx4j2v4DXw',
'https://www.youtube.com/embed/_0EOnV53BgM',
'https://www.youtube.com/embed/Z-OcZ5yFtlU',
'https://www.youtube.com/embed/Edz480YMHY4',
'https://www.youtube.com/embed/txpiWJmmMt4',
'https://www.youtube.com/embed/B2RnQiLLbnQ',
'https://www.youtube.com/embed/uPH7e2-0EBI',
'https://www.youtube.com/embed/wRrnQGd2u98',
'https://www.youtube.com/embed/nNB-O2kS-C8',
'https://www.youtube.com/embed/8gUW4HxMJoU',
'https://www.youtube.com/embed/WdbKSrcoHa0',
'https://www.youtube.com/embed/igUYNHLKqWg',
'https://www.youtube.com/embed/FW4RDHvHEpY',
'https://www.youtube.com/embed/6Ws-aTupa0s',
'https://www.youtube.com/embed/jrGLkJGXy-Q',
'https://www.youtube.com/embed/54xSQzpSGbg',
'https://www.youtube.com/embed/7QAQgAv6hwk',
'https://www.youtube.com/embed/m0aXJ1N7dhs',
'https://www.youtube.com/embed/QIusCN3X-WY',
'https://www.youtube.com/embed/ir57BvvJIPs',
'https://www.youtube.com/embed/HHejuNo9Pws',
'https://www.youtube.com/embed/Ll-ig0bq1G4',
'https://www.youtube.com/embed/fFHahu4th_s',
'https://www.youtube.com/embed/Fe1uDn8msjE',
'https://www.youtube.com/embed/idZUGg9wDIw',
    "https://www.youtube.com/embed/Z6DxwnMKUhk",
    "https://www.youtube.com/embed/IakKjumw3Yo",
    "https://www.youtube.com/embed/8MXoFqbBYns",
    "https://www.youtube.com/embed/kfHsbeKnQHs",
    "https://www.youtube.com/embed/-M98qe3ijWo",
    "https://www.youtube.com/embed/TqWvndxPH4A",
    "https://www.youtube.com/embed/7xLQFJ3t-Yw",
    "https://www.youtube.com/embed/qgPIy3RiYTU",
    "https://www.youtube.com/embed/YCY0YuqpjZs",
    "https://www.youtube.com/embed/dNeT_4R2IhY",
    "https://www.youtube.com/embed/Edz480YMHY4",
    "https://www.youtube.com/embed/vsgr3HGgTK0",
    "https://www.youtube.com/embed/qMZuH7IPKwY",
    "https://www.youtube.com/embed/HGugfrmktDQ",
    "https://www.youtube.com/embed/fxZVYCcDDu8",
    "https://www.youtube.com/embed/vvoweQeT_fI",
    "https://www.youtube.com/embed/MkJ3BiMXulY",
    "https://www.youtube.com/embed/QYSH8W53x94",
    "https://www.youtube.com/embed/uCZ25X1KxgM",
    "https://www.youtube.com/embed/M3JaiqwOkWY",
    "https://www.youtube.com/embed/PFFAu5hojGE",
    "https://www.youtube.com/embed/o70Mwpl3mUY",
    "https://www.youtube.com/embed/rADp36rwnKk",
    "https://www.youtube.com/embed/8F3Buml0riM",
    "https://www.youtube.com/embed/ex1HQ82OdCg",
    "https://www.youtube.com/embed/CNe6kIhA6dE",
    "https://www.youtube.com/embed/Xr_zu4vGvvM",
    "https://www.youtube.com/embed/-CKpiYVuUQo",
    "https://www.youtube.com/embed/q4Zv-hRbdN8",
    "https://www.youtube.com/embed/oM0IWyD5DDU",
    "https://www.youtube.com/embed/6G_clD0BhQo",
    "https://www.youtube.com/embed/DefB8RmAeUs",
    "https://www.youtube.com/embed/G-2ynNugHHo",
    "https://www.youtube.com/embed/ZhrlUWGhHU8",
    "https://www.youtube.com/embed/IQpdNteZDuU",
    "https://www.youtube.com/embed/40MBx3XV8e0",
    "https://www.youtube.com/embed/8tSU1sKt_LQ",
    "https://www.youtube.com/embed/XNBayHI_F-U",
    "https://www.youtube.com/embed/nLMUdehb0iE",
    "https://www.youtube.com/embed/aQlQ49_StJc",
    "https://www.youtube.com/embed/HHejuNo9Pws",
    "https://www.youtube.com/embed/Rg5p7tVVO-o",
    "https://www.youtube.com/embed/o-B4ODuVHaQ",
    "https://www.youtube.com/embed/TXN_r4Bwd6k",
    "https://www.youtube.com/embed/txpiWJmmMt4",
    "https://www.youtube.com/embed/0R6-zkdHu6s",
    "https://www.youtube.com/embed/rXGQP3KonfY",
    "https://www.youtube.com/embed/NiclMO5jt4o",
    "https://www.youtube.com/embed/pSGD-QpNJkM",
    "https://www.youtube.com/embed/fCLoGMQuXZo",
    "https://www.youtube.com/embed/uOVqozQWCW4",
    "https://www.youtube.com/embed/fs7JoMcNqo8",
    "https://www.youtube.com/embed/UfLb5ZIoGaE",
    "https://www.youtube.com/embed/RXSJDj2Q6sQ",
    "https://www.youtube.com/embed/ZA8odhpKMRY",
    "https://www.youtube.com/embed/6bhy1_OrL2A",
    "https://www.youtube.com/embed/QYhtr6ym_mw",
    "https://www.youtube.com/embed/PtchqDQdfK4",
    "https://www.youtube.com/embed/U0oQoSZy09E",
    "https://www.youtube.com/embed/HNbi3FAqYVM",
    "https://www.youtube.com/embed/uVRERL0t5ZE",
    "https://www.youtube.com/embed/DBUX3Q9xc_k",
    "https://www.youtube.com/embed/54xSQzpSGbg",
    "https://www.youtube.com/embed/eQV5fYmyeiU",
    "https://www.youtube.com/embed/ugWuZ7RCV-g",
    "https://www.youtube.com/embed/EhacUDcchIs",
    "https://www.youtube.com/embed/tnlzekfxftk",
    "https://www.youtube.com/embed/NPI2_GJgzm4",
    "https://www.youtube.com/embed/mxjLadywznQ",
    "https://www.youtube.com/embed/UIRH5TRNk-A",
    "https://www.youtube.com/embed/ibpXARfLIj8",
    "https://www.youtube.com/embed/eSRgRVx9ZjQ",
    "https://www.youtube.com/embed/xq1UFrh0p-Q",
    "https://www.youtube.com/embed/qg8d-M64lgc",
    "https://www.youtube.com/embed/8gUW4HxMJoU",
    "https://www.youtube.com/embed/yP5pYR-2taU",
    "https://www.youtube.com/embed/jMVFLG-zUKM",
    "https://www.youtube.com/embed/ePAE_HAzXBQ",
    "https://www.youtube.com/embed/E-5J1RfIUv0",
    "https://www.youtube.com/embed/9gynQNOxRZc",
    "https://www.youtube.com/embed/vQmbXh_OPaY",
    "https://www.youtube.com/embed/BFYouBT7TmA",
    "https://www.youtube.com/embed/cHLsgk7J-yo",
    "https://www.youtube.com/embed/17D8AlzwKgE",
    "https://www.youtube.com/embed/VPBaPorlNtM",
    "https://www.youtube.com/embed/_AOhb6YCRlA",
    "https://www.youtube.com/embed/suZxmFreQ-k",
    "https://www.youtube.com/embed/l3bsUmm3vFk",
    "https://www.youtube.com/embed/3oVxi_Q2MJI",
    "https://www.youtube.com/embed/9BNJdU0sO90",
    "https://www.youtube.com/embed/_YWs4UXWTUw",
    "https://www.youtube.com/embed/az7p7_Wysa0",
    "https://www.youtube.com/embed/Dvdg33xGYBQ",
    "https://www.youtube.com/embed/FpJVIdYMwcI",
    "https://www.youtube.com/embed/KjVfAPtNZZQ",
    "https://www.youtube.com/embed/IdTMaFdw1GI",
    "https://www.youtube.com/embed/geCuSnyv7Sg",
    "https://www.youtube.com/embed/97CHl3s91TU",
    "https://www.youtube.com/embed/jlwdwpzZCLk",
    "https://www.youtube.com/embed/0fXtPQymFzQ",
    "https://www.youtube.com/embed/1oZ2dRciocM",
    "https://www.youtube.com/embed/qV_lSkh97_c",
    "https://www.youtube.com/embed/wFcnI-Q1mSs",
    "https://www.youtube.com/embed/LHU57ast4l4",
    "https://www.youtube.com/embed/yRKZR1bKb6A",
    "https://www.youtube.com/embed/YcjmD9YiDjY",
    "https://www.youtube.com/embed/gCCwr0IXMPs",
    "https://www.youtube.com/embed/rOTS1jS2aWg",
    "https://www.youtube.com/embed/P70kSOsdkkQ",
    "https://www.youtube.com/embed/3YbUAzcuVBw",
    "https://www.youtube.com/embed/3IL9xpfLxLY",
    "https://www.youtube.com/embed/8cChZWHbp2Q",
    "https://www.youtube.com/embed/2EtsPNLu9pw",
    "https://www.youtube.com/embed/d-czZIFPqKw",
    "https://www.youtube.com/embed/d8Vhjw4VaRE",
    "https://www.youtube.com/embed/bVooTMWzR5U"


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
