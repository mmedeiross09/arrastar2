const respostas = {
    1: 'identificar',
    2: 'dados',
    3: 'tomar',
    4: 'imitam',
    5: 'ramificação'
};

let palavrasUsadas = new Set();
let dropZonesPreenchidas = new Set();

const palavras = document.querySelectorAll('.palavra');
const dropZones = document.querySelectorAll('.drop-zone');
const resultadoDiv = document.getElementById('resultado');

palavras.forEach(palavra => {
    palavra.addEventListener('dragstart', handleDragStart);
    palavra.addEventListener('dragend', handleDragEnd);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragleave', handleDragLeave);
});

let draggedElement = null;

function handleDragStart(e) {
    if (!e.target.classList.contains('usado')) {
        draggedElement = e.target;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    } else {
        e.preventDefault();
    }
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.target.style.background = '#e0e7ff';
    e.target.style.transform = 'scale(1.1)';
}

function handleDragLeave(e) {
    e.target.style.background = '';
    e.target.style.transform = '';
}

function handleDrop(e) {
    e.preventDefault();
    e.target.style.background = '';
    e.target.style.transform = '';

    if (draggedElement) {
        const zoneId = e.target.dataset.id;
        const palavraCorreta = respostas[zoneId];
        const palavraSelecionada = draggedElement.dataset.palavra;

        if (palavraSelecionada === palavraCorreta) {
            // Resposta correta
            e.target.textContent = palavraSelecionada;
            e.target.classList.add('filled');
            draggedElement.classList.add('usado');
            palavrasUsadas.add(palavraSelecionada);
            dropZonesPreenchidas.add(zoneId);

            mostrarMensagem(`✅ Correto! "${palavraSelecionada}" foi colocada no lugar certo.`, 'sucesso');
        } else {
            // Resposta incorreta
            mostrarMensagem(`❌ Incorreto! A palavra "${palavraSelecionada}" não é a correta para esta frase.`, 'erro');
        }

        verificarConclusao();
        draggedElement = null;
    }
}

function mostrarMensagem(mensagem, tipo) {
    resultadoDiv.textContent = mensagem;
    resultadoDiv.className = 'resultado ' + tipo;

    setTimeout(() => {
        resultadoDiv.textContent = '';
        resultadoDiv.className = 'resultado';
    }, 3000);
}

function verificarConclusao() {
    if (dropZonesPreenchidas.size === Object.keys(respostas).length) {
        setTimeout(() => {
            mostrarMensagem('🎉 Parabéns! Você completou todas as frases corretamente!', 'sucesso');
        }, 500);
    }
}

function resetarJogo() {
    // Limpar todas as drop zones
    dropZones.forEach(zone => {
        zone.textContent = '';
        zone.classList.remove('filled');
    });

    // Limpar todas as palavras
    palavras.forEach(palavra => {
        palavra.classList.remove('usado');
    });

    // Resetar variáveis
    palavrasUsadas.clear();
    dropZonesPreenchidas.clear();
    resultadoDiv.textContent = '';
    resultadoDiv.className = 'resultado';
    draggedElement = null;

    console.log('Jogo reiniciado!');
}