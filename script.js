// Carregar carrinho do localStorage
function obterCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

// Salvar carrinho no localStorage
function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Adicionar item ao carrinho
function adicionarCarrinho(nome, preco) {
  let carrinho = obterCarrinho();
  carrinho.push({ nome, preco });
  salvarCarrinho(carrinho);
  alert(`${nome} foi adicionado ao carrinho!`);
}

// Mostrar carrinho na página carrinho.html
function exibirCarrinho() {
  let carrinho = obterCarrinho();
  let lista = document.getElementById("lista-carrinho");
  let totalEl = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} 
      <button onclick="removerItem(${index})">❌</button>`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Remover item do carrinho
function removerItem(index) {
  let carrinho = obterCarrinho();
  carrinho.splice(index, 1);
  salvarCarrinho(carrinho);
  exibirCarrinho();
}
