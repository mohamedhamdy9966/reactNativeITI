let originalOrder = [];

// Wait for products to be loaded and originalOrder to be filled
window.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById("productList");
  const minPriceCheckbox = document.getElementById("minPrice");
  const maxPriceCheckbox = document.getElementById("maxPrice");
  const wearTypeSelect = document.getElementById("wearType");

  // Helper to get filtered/sorted products
  function getFilteredProducts() {
    let products = [...originalOrder];
    // Filter by type
    const selectedType = wearTypeSelect.value;
    if (selectedType) {
      products = products.filter(product => product.dataset.type === selectedType);
    }
    // Sort by price
    if (minPriceCheckbox.checked) {
      products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (maxPriceCheckbox.checked) {
      products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    }
    return products;
  }

  function renderProducts() {
    productList.innerHTML = "";
    getFilteredProducts().forEach(product => {
      productList.appendChild(product.cloneNode(true));
    });
  }

  minPriceCheckbox.addEventListener("change", renderProducts);
  maxPriceCheckbox.addEventListener("change", renderProducts);
  wearTypeSelect.addEventListener("change", renderProducts);

  // Listen for products being loaded and originalOrder being filled
  const observer = new MutationObserver(() => {
    if (originalOrder.length > 0) {
      renderProducts();
      observer.disconnect();
    }
  });
  observer.observe(productList, { childList: true });
});