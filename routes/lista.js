var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
  { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
  { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
  { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
  { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
  { id: 5, nome: 'Item Épsilon', descricao: 'O quinto item da lista, continuando o alfabeto grego.' },
  { id: 6, nome: 'Item Zeta', descricao: 'Mais um item para ilustrar a lista dinâmica.' },
  { id: 7, nome: 'Item Eta', descricao: 'Seguindo com mais um item da sequência grega.' },
  { id: 8, nome: 'Item Teta', descricao: 'Um item com nome baseado na letra Teta.' },
  { id: 9, nome: 'Item Iota', descricao: 'O nono item, com nome curto mas grego.' },
  { id: 10, nome: 'Item Capa', descricao: 'Capa é a décima letra do alfabeto grego.' },
  { id: 11, nome: 'Item Lambda', descricao: 'Mais um item com nome grego tradicional.' },
  { id: 12, nome: 'Item Mi', descricao: 'O item número doze da lista grega.' },
  { id: 13, nome: 'Item Ni', descricao: 'Ni continua a sequência do alfabeto grego.' },
  { id: 14, nome: 'Item Xi', descricao: 'Completando a série com mais letras gregas.' },
  { id: 15, nome: 'Item Ômicron', descricao: 'Pequeno mas importante: o Ômicron.' },
  { id: 16, nome: 'Item Pi', descricao: 'Um clássico da matemática, agora na sua lista.' },
  { id: 17, nome: 'Item Rô', descricao: 'Rô, seguindo o curso do alfabeto.' },
  { id: 18, nome: 'Item Sigma', descricao: 'Item com nome da letra Sigma.' },
  { id: 19, nome: 'Item Tau', descricao: 'Item número 19, letra Tau.' },
  { id: 20, nome: 'Item Upsilon', descricao: 'Nome estiloso para o vigésimo item.' },
  { id: 21, nome: 'Item Fi', descricao: 'Um item com nome filosófico.' },
  { id: 22, nome: 'Item Chi', descricao: 'Chi, letra com cara de variável matemática.' },
  { id: 23, nome: 'Item Psi', descricao: 'Item Psi, quase no fim da lista.' },
  { id: 24, nome: 'Item Ômega', descricao: 'O último do alfabeto, mas não menos importante.' }
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
