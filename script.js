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
    const response = await fetch("https://anla-music-ai.nejlakartal3.workers.dev", {
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

    if (!response.ok) {
      throw new Error("Sunucu hatası: " + response.status);
    }

    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h3>🎵 ${title}</h3>
      <pre>${data.lyrics || JSON.stringify(data, null, 2)}</pre>
    `;

  } catch (err) {
    document.getElementById("result").innerHTML =
      `<p style="color:red;">❌ ${err.message}</p>`;
  }
}