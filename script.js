console.log("Anla-Music hazır!");function createSong() {

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

}