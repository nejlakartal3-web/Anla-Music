console.log("Anla-Music hazır!");                function createVideo(){

const song = document.getElementById("videoSong").value.trim();
const topic = document.getElementById("videoTopic").value.trim();
const style = document.getElementById("videoStyle").value;
const desc = document.getElementById("videoDesc").value.trim();


if(!song || !topic){

alert("Lütfen şarkı adı ve video konusu girin.");
return;

}


document.getElementById("videoResult").innerHTML = `

<hr>

<h3>🎬 ${song}</h3>

<p><b>Konu:</b> ${topic}</p>

<p><b>Stil:</b> ${style}</p>

<p><b>Açıklama:</b> ${desc}</p>

<h4>✨ Anla AI Klip Taslağı</h4>

<p>
${style} tarzında,
duyguyu yansıtan sahnelerle
yapay zekâ destekli müzik klibi hazırlanıyor.
</p>

`;

}console.log("Anla-Music hazır!");

function createSong() {

  const title = document.getElementById("title").value.trim();
  const topic = document.getElementById("topic").value.trim();
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

 function createSong() {

  const title = document.getElementById("title").value.trim();
  const topic = document.getElementById("topic").value.trim();
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  if (!title || !topic) {
    alert("Lütfen şarkı adı ve konusunu girin.");
    return;
  }

  let lyrics = "";

  if (genre === "Arabesk") {

    lyrics = `
🎶 Kıta 1:

${topic} düştü yine kalbime,
Sessiz geceler şahit derdime.
Kader çizmiş yollarımı,
Arıyorum eski günlerimi.

🎤 Nakarat:

Ah ne kader, neden böyle yazıldın?
Yarım kalan hayallerimi aldın.
Bir umut kaldı içimde,
Seni bekler bu kalp yine.
`;

  } else if (genre === "Pop") {

    lyrics = `
🎶 Kıta:

Yeni bir gün doğuyor içimde,
Umutlarım saklı kalbimde.

🎤 Nakarat:

Hayallerimle yürürüm ileri,
Bırakmam asla güzel yarınları.
`;

  } else if (genre === "Slow") {

    lyrics = `
🎶 Kıta 1:

Beni güzel anla, kalbimi duy,
Sessiz gecelerde adını bul.
Sevgiyle yazılmış her bir sözüm,
Sana kalan en güzel duygum.

🎤 Nakarat:

Beni güzel anla ve sev,
Kalbimde saklı olanı gör.
Bir ömür yanımda kal,
Sevgimiz olsun sonsuz bir yol.
`;

  } else {

    lyrics = `
🎶 Anla AI Şarkı Sözü:

${topic} üzerine yazılmış,
${mood} duygularını taşıyan
özel bir şarkı hazırlanıyor.
`;

  }


  document.getElementById("result").innerHTML = `

<h3>🎵 ${title}</h3>

<p><strong>Konu:</strong> ${topic}</p>

<p><strong>Tür:</strong> ${genre}</p>

<p><strong>Duygu:</strong> ${mood}</p>

<hr>

<h4>🎤 Şarkı Sözleri</h4>

<p>${lyrics.replace(/\n/g,"<br>")}</p>

<hr>

<p>✨ Anla-Music AI ile oluşturuldu.</p>

`;

}