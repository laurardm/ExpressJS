var express = require('express');
var router = express.Router();

// Rota principal para exibir a lista de usuários com imagens online
router.get('/', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Luísa França', descricao: 'mimosa & pomposa & queen & amiga da rubia', imagem: 'https://disneyplusbrasil.com.br/wp-content/uploads/2023/10/Princesa-Tiana-com-cabelos-soltos.jpg' },
    { id: 2, nome: 'Rubia Mezzari', descricao: 'querida & sorridente & melhor amiga de todas as horas global da luísa', imagem: 'https://i.pinimg.com/736x/d7/2a/f6/d72af6ee2942b220c41e4c6638898adb.jpg' },
    { id: 3, nome: 'Kamili Bozello', descricao: 'comk & bos & amór & miga rubia também', imagem: 'https://pm1.aminoapps.com/6389/f779271f548ec386b0bcef0979d7eb594d8d9f4f_00.jpg' },
    { id: 4, nome: 'Brenda Arceno', descricao: 'cabelos rosas & tesoureira & gu & marco antonio & sotério', imagem: 'https://i.ytimg.com/vi/Pir5j9x4ij4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHM8r9ygdxA-FK9PRDY3lAjfctBQ' },
    { id: 5, nome: 'Maria Paganini', descricao: 'diamante da temporada & paganini & gênia % jardel', imagem: 'https://preview.redd.it/which-of-rapunzels-hairstyles-is-the-best-long-hair-braid-w-v0-u5kl0apw1esd1.jpg?width=500&format=pjpg&auto=webp&s=4d96d7f9d7b7aa448afe197aff5416c6d8cbf294' },
    { id: 6, nome: 'Maria Steckert', descricao: 'melhor amiga da lu e da ru, stuck, queen divisões de lado', imagem: 'https://www.nicelembrancinhas.com.br/image/cache/webp/catalog/meninas_super_poderosas/docinho_9cm-500x500.webp' },
    { id: 7, nome: 'Camily Com C', descricao: 'carro com c, casa com c, música com c, crente com c', imagem: 'https://diariodorn.com.br/wp-content/uploads/2023/08/margot-robbie-barbie.webp' },
    { id: 8, nome: 'Ana Lu', descricao: 'querida & amiga & MELHOR amiga & melhor de todas', imagem: 'https://pm1.aminoapps.com/6793/6a586d6f5f3188f07773349fd1e40eca9266e18dv2_hq.jpg' },
    { id: 9, nome: 'Joédio', descricao: 'professor & desenvolvimento web & developer', imagem: 'https://http2.mlstatic.com/D_NQ_NP_673265-MLB76986728323_062024-O-boneca-professor-snape-harry-potter-personagem-fandom-box.webp' },
    { id: 10, nome: 'Bernardo', descricao: 'dupla de tcc da lu & miguissimo & criativo & mestre ber', imagem: 'https://static.casapino.com.br/casapino/2018/06/201806/edna-moda-edith-head-498ca240.jpg' },
  ];

  res.render('users', {
    titulo: 'Lista de Usuários',
    usuariosParaView: usuarios
  });
});

module.exports = router;
