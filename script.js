function obterCarrinho() {
  return JSON.parse(localStorage.getItem('carrinho')) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(nome, preco) {
  const carrinho = obterCarrinho();
  carrinho.push({ nome, preco });
  salvarCarrinho(carrinho);
  alert(`${nome} adicionado ao carrinho!`);
}

function removerItem(index) {
  const carrinho = obterCarrinho();
  carrinho.splice(index, 1);
  salvarCarrinho(carrinho);
  carregarCarrinho();
}

function limparCarrinho() {
  salvarCarrinho([]);
  carregarCarrinho();
}

function finalizarCompra() {
  const carrinho = obterCarrinho();
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio. Adicione itens antes de finalizar.');
    return;
  }

  alert('Compra finalizada com sucesso! Obrigado por comprar na Elegance Store.');
  limparCarrinho();
}

function carregarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalElement = document.getElementById('total');
  const mensagemVazia = document.getElementById('mensagem-vazia');
  if (!lista || !totalElement || !mensagemVazia) return;

  const carrinho = obterCarrinho();
  lista.innerHTML = '';

  if (carrinho.length === 0) {
    mensagemVazia.style.display = 'block';
    totalElement.textContent = 'Total: R$ 0,00';
    return;
  }

  mensagemVazia.style.display = 'none';

  let total = 0;
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item-carrinho';

    const texto = document.createElement('span');
    texto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => removerItem(index);

    li.appendChild(texto);
    li.appendChild(botaoRemover);
    lista.appendChild(li);

    total += item.preco;
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

window.onload = carregarCarrinho;
