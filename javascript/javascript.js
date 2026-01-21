function enviarParaWhatsApp() {
    // 1. INSIRA SEU NÚMERO AQUI (Apenas números: código do país + DDD + número)
    const meuNumero = "5521980754767"; 

    // 2. Coleta os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('tel').value;
    const mensagem = document.getElementById('msg').value;

    // 3. Validação básica de campos obrigatórios
    if (nome === "" || telefone === "") {
        alert("Por favor, preencha seu nome e telefone.");
        return;
    }

    // 4. Monta o texto da mensagem
    // O %0A serve para pular linha no WhatsApp
    const texto = `*NOVO ORÇAMENTO - SITE*%0A%0A` +
                  `*Nome:* ${nome}%0A` +
                  `*E-mail:* ${email}%0A` +
                  `*Telefone:* ${telefone}%0A` +
                  `*Mensagem:* ${mensagem}`;

    // 5. Cria o link final
    const url = `https://wa.me/${meuNumero}?text=${texto}`;

    // 6. Abre o WhatsApp em uma nova aba
    window.open(url, '_blank').focus();
}