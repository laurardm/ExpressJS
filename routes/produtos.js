var express = require('express');
var router = express.Router();

// Rota principal para exibir a lista de produtos com imagens online
router.get('/', (req, res) => {
  const produtos = [
    { id: 1, nome: 'carrie bradshaw', descricao: 'a carrie é meio louquinha', imagem: 'https://cabidedasdondocas.com/wp-content/uploads/2024/05/looks-carrie-bradshaw-como-usar-personagens-series-sex-and-the-city-20240508154144.png' },
    { id: 2, nome: 'charlotte york', descricao: 'fé na monogamia', imagem: 'https://i.pinimg.com/236x/c5/ae/fc/c5aefcdbb489eb30e7493853fde59927.jpg' },
    { id: 3, nome: 'miranda hobbes', descricao: 'ela é meio grossa, mas é um amor', imagem: 'https://preview.redd.it/lduu00kao5pe1.jpeg?auto=webp&s=a37c41aab3ac3ecc59317771d55728da89309c5c' },
    { id: 4, nome: 'samantha jones', descricao: 'ela é feliz e livre', imagem: 'https://forbes.com.br/wp-content/uploads/2023/06/Life_Samantha-Jones-sex-and-the-city-2.jpg' },
    { id: 5, nome: 'mr. big', descricao: 'chamar ele de desgraçado é pouco', imagem: 'https://assets.vogue.com/photos/60f6ceca9d2ff0bb3535b048/master/pass/MCDSEAN_EC175.jpg' },
    { id: 6, nome: 'aidan', descricao: 'carrie você me paga!', imagem: 'https://preview.redd.it/xjps01nbccwc1.jpeg?width=1080&crop=smart&auto=webp&s=713bc0d841663a4a429d3ff51d6a766ca3c905cc' },
  ];

  res.render('produtos', {
    titulo: 'Lista de Produtos',
    produtosParaView: produtos
  });
});

module.exports = router;
