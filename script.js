function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(nome + " foi adicionado ao carrinho!");
}

// Exibir no carrinho
if (document.getElementById('lista-carrinho')) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let lista = document.getElementById('lista-carrinho');
  let total = 0;

  carrinho.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  document.getElementById('total').textContent = "Total: R$ " + total.toFixed(2);
}
