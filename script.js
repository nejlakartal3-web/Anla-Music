async function createSong() {
  const title = document.getElementById("title").value.trim();
  const topic = document.getElementById("topic").value.trim();
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  if (!title || !topic) {
    alert("Lütfen şarkı adı ve konusunu girin.");
    return;
  }

  document.getElementById("result").innerHTML = "⏳ Şarkı oluşturuluyor...";

  try {
    const response = await fetch("BURAYA_WORKER_URLİNİ_YAPIŞTIR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        topic,
        genre,
        mood
      })
    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h3>🎵 ${title}</h3>
      <pre>${data.lyrics || JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (e) {
    document.getElementById("result").innerHTML =
      "❌ Hata: " + e.message;
  }
}