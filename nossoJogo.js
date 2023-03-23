console.log('Boas vindas ao jogo de BlackJack!');

const confirmacaoUsuario = confirm('Quer iniciar uma nova rodada?');

confirmacaoUsuario ? iniciandoJogo() : console.log('O jogo acabou');

function iniciandoJogo() {
    // Chamando a função para SORTEAR:
    const cartaUsuarioI = comprarCarta();
    const cartaUsuarioII = comprarCarta();
    const cartaComputadorI = comprarCarta();
    const cartaComputadorII = comprarCarta();

    // Salvando VALORES das cartas sorteadas:
    const valorCartaUsuarioI = cartaUsuarioI.valor;
    const valorCartaUsuarioII = cartaUsuarioII.valor;
    const valorCartaComputadorI = cartaComputadorI.valor;
    const valorCartaComputadorII = cartaComputadorII.valor;

    // Salvando TEXTO das cartas sorteadas
    const textoCartaUsuarioI = cartaUsuarioI.texto;
    const textoCartaUsuarioII = cartaUsuarioII.texto;
    const textoCartaComputadorI = cartaComputadorI.texto;
    const textoCartaComputadorII = cartaComputadorII.texto;

    // Calculando a PONTUAÇÃO dos jogadores:
    const pontuacaoUsuario = valorCartaUsuarioI + valorCartaUsuarioII;
    const pontuacaoComputador = valorCartaComputadorI + valorCartaComputadorII;

    // MOSTRANDO as cartas no console:
    console.log(
        `Usuário - cartas: ${textoCartaUsuarioI} ${textoCartaUsuarioII} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${textoCartaComputadorI} ${textoCartaComputadorII} - pontuação ${pontuacaoComputador}`
    );

    // Condicional da informação do VENCEDOR:
    if (pontuacaoUsuario === pontuacaoComputador) {
        console.log('Empate!');
    } else if (pontuacaoUsuario > pontuacaoComputador) {
        console.log('O usuário ganhou!');
    } else {
        console.log('O computador ganhou');
    }
}
