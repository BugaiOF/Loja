
  
  let products = [
    { id: 1, name: 'Produto 1', price: 19.99 },
    { id: 2, name: 'Produto 2', price: 29.99 }
  ];
  
  let cart = [];
  let total = 0;
  
  function addToCart(productId) {
    // Procura o produto pelo ID
    let product = products.find(p => p.id === productId);
  
    // Adiciona o produto ao carrinho
    cart.push(product);
  
    // Atualiza o valor total
    total += product.price;
  
    // Atualiza a interface do usuário
    updateCart();
  }
  
  function updateCart() {
    let cartDiv = document.getElementById('cart');
    let cartContent = '';
  
    // Gera o HTML para exibir o conteúdo do carrinho
    for (let i = 0; i < cart.length; i++) {
      let product = cart[i];
      cartContent += `<p>${product.name} - R$ ${product.price.toFixed(2)} <button onclick="removeFromCart(${i})">Remover</button></p>`;
    }
  
    // Adiciona o valor total do carrinho
    cartContent += `<p>Total: R$ ${total.toFixed(2)}</p>`;
  
    // Atualiza o conteúdo do elemento div
    cartDiv.innerHTML = cartContent;
  }
  
  function removeFromCart(index) {
    // Remove o item do carrinho
    let product = cart[index];
    cart.splice(index, 1);
  
    // Atualiza o valor total
    total -= product.price;
  
    // Atualiza a interface do usuário
    updateCart();
  }
  
  function toggleCart() {
    let cartDiv = document.getElementById('cart');
    if (cartDiv.style.display === 'none') {
      cartDiv.style.display = 'block';
    } else {
      cartDiv.style.display = 'none';
    }
  }
  