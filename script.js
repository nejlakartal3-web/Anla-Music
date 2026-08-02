console.log("Anla-Music hazır!");

function createSong() {

  const title = document.getElementById("title").value.trim();
  const topic = document.getElementById("topic").value.trim();
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  if (!title || !topic) {
    alert("Lütfen şarkı adı ve konusunu girin.");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>🎵 ${title}</h3>

    <p><strong>Konu:</strong> ${topic}</p>

    <p><strong>Tür:</strong> ${genre}</p>

    <p><strong>Duygu:</strong> ${mood}</p>

    <hr>

    <h4>🎶 Anla AI Şarkı Taslağı</h4>

    <p>
    "${topic}" hakkında,
    ${genre} tarzında,
    ${mood} duygusunu taşıyan bir şarkı hazırlanıyor.
    </p>

    <p>
    🎤 Yakında Anla AI gerçek şarkı sözleri,
    melodi ve ses oluşturma özellikleriyle gelişecek.
    </p>
  `;
}