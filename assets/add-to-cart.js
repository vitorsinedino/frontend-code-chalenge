const drawer = document.querySelector(".drawer.active");


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente carregado.");

  // Adiciona um listener ao container pai que contém os produtos relacionados
  document.body.addEventListener("click", function (event) {
    // Verifica se o clique foi em um botão de adicionar ao carrinho
    if (event.target.classList.contains("add-to-cart-button")) {
      event.preventDefault();
      event.stopPropagation();

      const button = event.target;
      const productId = button.getAttribute("data-product-id");
      const variantId = button.getAttribute("data-variant-id");

      console.log("Botão clicado. Produto ID:", productId, "Variant ID:", variantId);

      if (!variantId) {
        console.error("Erro: Variant ID está ausente.");
        return;
      }

      // Adiciona o produto ao carrinho
      addToCart(variantId);
      updateCart();
      abrirDrawer();
    }
  });
});

function addToCart(variantId) {
  console.log("Tentando adicionar ao carrinho. Variant ID:", variantId);

  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: 1,
        },
      ],
    }),
  })
    .then(response => {
      console.log("Resposta da API:", response);
      if (!response.ok) {
        throw new Error(`Erro ao adicionar ao carrinho. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Produto adicionado com sucesso:", data);
      alert("Produto adicionado ao carrinho!");
    })
    .catch(error => {
      console.error("Erro ao adicionar ao carrinho:", error.message);
      alert("Ocorreu um erro ao adicionar o produto ao carrinho.");
    });
}

//Função pra abrir o 'Cart Drawer'
function abrirDrawer(){
  const drawer = document.querySelector(".drawer");
  drawer.classList.add("active");
}
  
// Função para atualizar a exibição do carrinho
function updateCart() {
  fetch("/cart.js", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao obter o carrinho");
      }
      return response.json();
    })
    .then(cart => {
      renderCart(cart);
    })
    .catch(error => {
      console.error("Erro:", error);
    });
}




