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

    <h4>📝 Anla AI Taslağı</h4>

    <p>
    Bu şarkı <strong>${topic}</strong> konusu üzerine,
    <strong>${genre}</strong> tarzında ve
    <strong>${mood}</strong> duygusunda oluşturulacak.
    </p>
  `;
}console.log("Anla-Music hazır!");function createSong() {

  const title = document.getElementById("title").value;
  const topic = document.getElementById("topic").value;
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  document.getElementById("result").innerHTML = `
    <h3>${title}</h3>

    <p><b>Konu:</b> ${topic}</p>

    <p><b>Tür:</b> ${genre}</p>

    <p><b>Duygu:</b> ${mood}</p>

    <br>

    <h4>🎶 Anla AI hazırlanıyor...</h4>

    <p>Yakında bu bilgilerle tamamen kendi yapay zekâmız şarkı oluşturacak.</p>
  `;

}.                          console.log("Anla-Music hazır!");

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

    <h4>📝 Anla AI Taslağı</h4>

    <p>
    Bu şarkı <strong>${topic}</strong> konusu üzerine,
    <strong>${genre}</strong> tarzında ve
    <strong>${mood}</strong> duygusunda oluşturulacak.
    </p>
  `;
}   