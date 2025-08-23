function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(nome + " adicionado ao carrinho!");
}

function carregarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let lista = document.getElementById('lista-carrinho');
  let total = 0;

  if (lista) {
    lista.innerHTML = '';
    carrinho.forEach((item, index) => {
      let li = document.createElement('li');
      li.textContent = item.nome + " - R$ " + item.preco.toFixed(2);
      lista.appendChild(li);
      total += item.preco;
    });
    document.getElementById('total').textContent = "Total: R$ " + total.toFixed(2);
  }
}

window.onload = carregarCarrinho;
