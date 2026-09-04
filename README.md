# 🤖 Frases sobre IA - Arrastar para Completar

Um site interativo e divertido onde você pode praticar seus conhecimentos sobre Inteligência Artificial arrastando palavras para completar frases!

## 🎮 Como Jogar

1. Leia as frases incompletas no lado esquerdo
2. Arraste as palavras disponíveis no lado direito
3. Coloque as palavras nos espaços em branco para completar as frases
4. Receba feedback instantâneo se a resposta está correta ou incorreta
5. Complete todas as frases para ganhar! 🎉

## 🌟 Características

- ✨ Interface moderna e intuitiva
- 🎨 Design responsivo (funciona em desktop e mobile)
- 🎯  5 frases sobre IA para completar
- ✅ Validação instantânea de respostas
- 🔄 Botão para reiniciar o jogo
- 🎵 Feedback visual e de cores

## 📝 Frases Incluídas

1. A inteligência artificial é capaz de **identificar** padrões nos dados.
2. Os algoritmos de machine learning precisam de **dados** para funcionar bem.
3. A IA pode **tomar** decisões importantes em segundos.
4. As redes neurais **imitam** o funcionamento do cérebro humano.
5. O deep learning é uma **ramificação** da inteligência artificial.

## 🚀 Como Usar

1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` no seu navegador
3. Comece a jogar!

## 📁 Estrutura de Arquivos

```
arrastar2/
├── index.html      # Estrutura HTML
├── style.css       # Estilos e design
├── script.js       # Lógica do jogo
└── README.md       # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (Drag and Drop API)

## 💡 Como Adicionar Mais Frases

Para adicionar mais frases, edite o arquivo `index.html`:

1. Adicione uma nova `<div class="frase-item">` com a frase
2. Use `<span class="drop-zone" data-id="X"></span>` onde X é um novo número
3. Edite o arquivo `script.js` e adicione a resposta correta no objeto `respostas`:

```javascript
const respostas = {
    // ... respostas existentes ...
    6: 'sua-palavra-aqui'
};
```

4. Adicione a nova palavra à `palavras-container` no HTML

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop (telas grandes)
- Tablet
- Mobile (smartphones)

## 🎨 Customização

Você pode customizar as cores editando as variáveis de cor no `style.css`. As cores principais são:

- Primária: `#667eea` e `#764ba2` (gradiente roxo)
- Sucesso: `#84fab0` e `#8fd3f4` (gradiente verde-azul)
- Erro: `#fa709a` e `#fee140` (gradiente rosa-amarelo)

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

## 👤 Autor

Criado com ❤️ para fins educacionais.

---

**Aproveite o jogo e divirta-se aprendendo sobre IA!** 🤖✨