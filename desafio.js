let confirmacaoUsuario = confirm(
   'Boas vindas ao jogo de BlackJack! \nQuer iniciar uma nova rodada?'
);
const iniciando = () => {
   // Gerando as mensagens de exibição do confirm e alert:
   const gerandoMensagemComprarMaisCartas = (
       arrayUsuario,
       arrayComputador
   ) => {
       let textoAntecedenteAosValores = `As suas cartas são `;
       let valoresDeTextoUsuario = '';
       let valoresDeTextoComputador = '';
       for (let item of arrayUsuario) {
           valoresDeTextoUsuario += `${item.texto} `;
       }
       valoresDeTextoComputador = `. A carta revelada do computador é ${arrayComputador[0].texto}. \n Deseja comprar mais cartas?`;

       return (
           textoAntecedenteAosValores +
           valoresDeTextoUsuario +
           valoresDeTextoComputador
       );
   };

   const gerandoMensagemFinal = (
       arrayUsuario,
       arrayComputador,
       pontosUsuario,
       pontosComputador
   ) => {
       let textoAntecedenteAosValoresUsuario = `Usuário - Cartas: `;
       let textoAntecedenteAosValoresComputador = `\nComputador - Cartas: `;
       let textoPontuacaoParaAmbos = ` - Pontuação: `;
       let valoresDeTextoUsuario = '';
       let valoresDeTextoComputador = '';
       for (let item of arrayUsuario) {
           valoresDeTextoUsuario += `${item.texto} `;
       }
       for (let item of arrayComputador) {
           valoresDeTextoComputador += `${item.texto} `;
       }
       return (
           textoAntecedenteAosValoresUsuario +
           valoresDeTextoUsuario +
           textoPontuacaoParaAmbos +
           pontosUsuario +
           textoAntecedenteAosValoresComputador +
           valoresDeTextoComputador +
           textoPontuacaoParaAmbos +
           pontosComputador
       );
   };

   // Iniciando o primeiro sorteio:
   let cartasUsuario = [];
   let cartasComputador = [];
   let totalUsuario = 0;
   let totalComputador = 0;

   const sorteioInicial = () => {
       cartasUsuario.push(comprarCarta());
       cartasUsuario.push(comprarCarta());
       while (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) {
           cartasUsuario[0] = comprarCarta();
           cartasUsuario[1] = comprarCarta();
       }

       cartasComputador.push(comprarCarta());
       cartasComputador.push(comprarCarta());
       while (
           cartasComputador[0].valor === 11 &&
           cartasComputador[1].valor === 11
       ) {
           cartasComputador[0] = comprarCarta();
           cartasComputador[1] = comprarCarta();
       }
   };
   sorteioInicial();

   // Calculando pontuação:
   const somaPontuacaoUsuario = () => {
       let pontuacaoUsuario = 0;
       for (let i = 0; i < cartasUsuario.length; i++) {
           pontuacaoUsuario += cartasUsuario[i].valor;
       }
       return pontuacaoUsuario;
   };

   const somaPontuacaoComputador = () => {
       let pontuacaoComputador = 0;
       for (let i = 0; i < cartasComputador.length; i++) {
           pontuacaoComputador += cartasComputador[i].valor;
       }
       return pontuacaoComputador;
   };

   let valoresDeTexto = gerandoMensagemComprarMaisCartas(
       cartasUsuario,
       cartasComputador
   );

   const verificaEstouroInicial = () => {
       totalUsuario = somaPontuacaoUsuario();
       totalComputador = somaPontuacaoComputador();

       let mensagemFinal = gerandoMensagemFinal(
           cartasUsuario,
           cartasComputador,
           totalUsuario,
           totalComputador
       );

       if (totalUsuario === 21 && totalComputador === 21) {
           confirmacaoUsuario = false;
           alert(`${mensagemFinal} \nEmpate!`);
       } else if (totalUsuario === 21 && totalComputador < 21) {
           confirmacaoUsuario = false;
           alert(`${mensagemFinal} \nO usuário ganhou!`);
       } else if (totalComputador === 21 && totalUsuario < 21) {
           confirmacaoUsuario = false;
           alert(`${mensagemFinal} \nO computador ganhou!`);
       } else {
           confirmacaoUsuario = confirm(valoresDeTexto);
           if (!confirmacaoUsuario) {
               confirmacaoUsuario = false;
               let pontosUsuario = totalUsuario;
               let pontosComputador = totalComputador;
               if (pontosUsuario > pontosComputador) {
                   alert(`${mensagemFinal} \nO usuário ganhou!`);
               } else {
                   alert(`${mensagemFinal} \nO computador ganhou!`);
               }
           }
       }
   };
   verificaEstouroInicial();

   // Laço para repetição de sorteio até alguém vencer ou estourar:
   while (confirmacaoUsuario) {
       // Sorteando e contando pontuação do USUÁRIO
       const sortearCartasUsuario = () => {
           cartasUsuario.push(comprarCarta());
       };
       sortearCartasUsuario();

       totalUsuario = somaPontuacaoUsuario();
       mensagemFinal = gerandoMensagemFinal(
           cartasUsuario,
           cartasComputador,
           totalUsuario,
           totalComputador
       );

       const verificaVitoriaUsuario = () => {
           if (totalUsuario === 21) {
               alert(`${mensagemFinal} \nO usuário ganhou!`);
               confirmacaoUsuario = false;
           } else if (totalUsuario > 21) {
               alert(`${mensagemFinal} \nO computador ganhou!`);
               confirmacaoUsuario = false;
           }
       };
       verificaVitoriaUsuario();

       if (!confirmacaoUsuario) {
           break;
       }

       // Sorteando e contando pontuação do COMPUTADOR
       const sortearCartasComputador = () => {
           cartasComputador.push(comprarCarta());
       };

       sortearCartasComputador();

       totalComputador = somaPontuacaoComputador();
       mensagemFinal = gerandoMensagemFinal(
           cartasUsuario,
           cartasComputador,
           totalUsuario,
           totalComputador
       );

       const verificaVitoriaComputador = () => {
           if (totalComputador === 21) {
               alert(`${mensagemFinal} \nO computador ganhou!`);
               confirmacaoUsuario = false;
           } else if (totalComputador > 21) {
               alert(`${mensagemFinal} \nO usuário ganhou!`);
               confirmacaoUsuario = false;
           }
       };
       verificaVitoriaComputador();

       valoresDeTexto = gerandoMensagemComprarMaisCartas(
           cartasUsuario,
           cartasComputador
       );

       if (!confirmacaoUsuario) {
           break;
       } else {
           confirmacaoUsuario = confirm(valoresDeTexto);
           if (!confirmacaoUsuario) {
               let pontosUsuario = totalUsuario;
               let pontosComputador = totalComputador;
               if (pontosUsuario > pontosComputador) {
                   alert(`${mensagemFinal} \nO usuário ganhou!`);
               } else {
                   alert(`${mensagemFinal} \nO computador ganhou!`);
               }
           }
       }
       if (!confirmacaoUsuario) {
           break;
       }
   }
};

confirmacaoUsuario ? iniciando() : alert('O jogo acabou.');
