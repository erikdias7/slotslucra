document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    // Gerar horário aleatório
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const time = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    // Escolher jogo aleatório
    const games = ["Fortune Dragon", "Fortune Tiger", "Fortune Ox"];
    const randomGame = games[Math.floor(Math.random() * games.length)];

    // Definir com ou sem bug
    const bugStatus = Math.random() > 0.5 ? "Com bug" : "Sem bug";

    // Atualizar resultados
    document.getElementById("timeResult").textContent = `Horário: ${time}`;
    document.getElementById("gameResult").textContent = `Jogo: ${randomGame}`;
    document.getElementById(
      "bugResult"
    ).textContent = `Com ou sem bug: ${bugStatus}`;
  });
