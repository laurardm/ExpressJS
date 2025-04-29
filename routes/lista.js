var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Item Alfa', descricao: 'Primeira letra do alfabeto grego; simboliza começo ou origem.' },
      { id: 2, nome: 'Item Beta', descricao: 'Segunda letra; usada em expressões como "versão beta", ou para indicar segundo lugar.' },
      { id: 3, nome: 'Item Gama', descricao: 'Terceira letra; frequentemente usada para representar ângulos ou radiação gama.' },
      { id: 4, nome: 'Item Delta', descricao: 'Delta representa mudança ou diferença em matemática (&#916;).' },
      { id: 5, nome: 'Item Épsilon', descricao: 'Usada para representar uma quantidade muito pequena em matemática.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Usada em funções matemáticas como a função zeta de Riemann.' },
      { id: 7, nome: 'Item Eta', descricao: 'Pode representar eficiência em física e engenharia.' },
      { id: 8, nome: 'Item Theta', descricao: 'Frequentemente usada para representar ângulos em trigonometria.' },
      { id: 9, nome: 'Item Iota', descricao: 'Simboliza algo muito pequeno ("um iota de diferença").' },
      { id: 10, nome: 'Item Kappa', descricao: 'Usada em estatística (coeficiente de Kappa) e física.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Representa comprimento de onda em física e funções anônimas em programação.' },
      { id: 12, nome: 'Item Mu', descricao: 'Representa "micro" (&#956;) ou média em estatística.' },
      { id: 13, nome: 'Item Nu', descricao: 'Usada para representar frequência em física.' },
      { id: 14, nome: 'Item Xi', descricao: 'Letra menos comum, usada em contextos matemáticos avançados.' },
      { id: 15, nome: 'Item Omicron', descricao: 'Letra O simples, pouco utilizada em contextos técnicos.' },
      { id: 16, nome: 'Item Pi', descricao: 'Símbolo do número &#960; (3,1415...), muito usado em matemática.' },
      { id: 17, nome: 'Item Rho', descricao: 'Representa densidade em física (&#961;).' },
      { id: 18, nome: 'Item Sigma', descricao: '&#931; representa somatório, &#963; o desvio padrão em estatística.' },
      { id: 19, nome: 'Item Tau', descricao: 'Usado para representar tempo e torque em física.' },
      { id: 20, nome: 'Item Upsilon', descricao: 'Letra pouco comum, aparece em física de partículas.' },
      { id: 21, nome: 'Item Phi', descricao: 'Representa a razão áurea (&#966; &#8776; 1.618) ou fluxo magnético.' },
      { id: 22, nome: 'Item Chi', descricao: 'Usada em estatística para o teste Qui-quadrado (&#967;²).' },
      { id: 23, nome: 'Item Psi', descricao: 'Representa função de onda na mecânica quântica (&#968;).' },
      { id: 24, nome: 'Item Omega', descricao: 'Última letra; &#937; representa resistência elétrica, &#969; velocidade angular.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
