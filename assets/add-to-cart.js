const drawer = document.querySelector(".drawer.active");
const cartDrawerContainer = document.getElementById("cart-itens-drawer");


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente carregado.");

  // Listener para todos os botões "Add to Cart"
  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart-button")) {
      event.preventDefault();
      event.stopPropagation();

      const button = event.target;
      const variantId = button.getAttribute("data-variant-id");

      console.log("Produto sendo adicionado ao carrinho. Variant ID:", variantId);

      if (!variantId) {
        console.error("Erro: Variant ID está ausente.");
        return;
      }

      // Adiciona o produto ao carrinho e atualiza o drawer
      addToCart(variantId)
        .then(() => {
          removerClasseVaziaDoCarrinho(); //Remove a classe de carrinho vazio visto que será adicionado um item
          updateCartDrawer();
        })
        .catch(error => {
          console.error("Erro ao adicionar o produto ao carrinho:", error);
        });
    }
  });
});


function addToCart(variantId) {
  console.log("Tentando adicionar ao carrinho. Variant ID:", variantId);

  return fetch("/cart/add.js", {
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
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Erro ao adicionar ao carrinho. Status: ${response.status}`);
    }
    return response.json();
  });
}


//Função pra abrir o 'Cart Drawer'
function abrirDrawer(){
  const drawer = document.querySelector(".drawer");
  drawer.classList.add("active");
}
  
// Função para atualizar a exibição do carrinho
function updateCartDrawer() {
  // Faz uma requisição para obter o HTML atualizado do Cart Drawer
  fetch('/?section_id=cart-drawer')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter o Cart Drawer.');
      }
      return response.text();
    })
    .then(html => {
      // Parse do HTML retornado
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const updatedDrawerContent = doc.querySelector('#CartDrawer .drawer__inner');
      const cartDrawerInner = document.querySelector('#CartDrawer .drawer__inner');

      if (updatedDrawerContent && cartDrawerInner) {
        // Substitui o conteúdo do Cart Drawer pelo conteúdo atualizado
        cartDrawerInner.innerHTML = updatedDrawerContent.innerHTML;
      }

      // Abre o Cart Drawer (se necessário)
      abrirDrawer();
    })
    .catch(error => {
      console.error('Erro ao atualizar o Cart Drawer:', error);
    });
}

//Ao adicionar o primeiro item ao carrinho, por algum motivo ele ainda estava com a classe 'is-empty'. Por isso foi criada essa função, para garantir a correção desse comportamento
function removerClasseVaziaDoCarrinho() {
  cartDrawerContainer.classList.remove("is-empty");
}




