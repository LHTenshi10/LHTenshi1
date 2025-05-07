function verificarFilhoFavorito() {
    // Define o nome correto do filho favorito (substitua pelo nome real)
    const nomeFilhoFavorito = "Luiz";
    // Pergunta o nome do filho favorito usando window.prompt
    const nomeDigitado = window.prompt("Qual é o nome do seu filho favorito?");
  
    // Verifica a resposta
    if (nomeDigitado !== null && nomeDigitado.trim() !== "") {
      if (nomeDigitado.trim().toLowerCase() === nomeFilhoFavorito.toLowerCase()) {
        // Resposta correta
        window.alert("Resposta certa!");
      } else {
        // Resposta errada
        window.alert("Resposta errada! Todos nós sabemos que sou Eu, Saia do meu Site e tente denovo!");
        // Redireciona o usuário para outro site (substitua pela URL desejada)
        window.location.href = "https://www.google.com"; // Exemplo: Redireciona para o Google
      }
    } else {
      // Caso o usuário cancele ou não insira um nome
      window.alert("Você não inseriu um nome.");
    }
  }
  
  // Chama a função para executar o código
  verificarFilhoFavorito();
  