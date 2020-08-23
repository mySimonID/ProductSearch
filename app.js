//
// app.js
//
//

showProducts(products);
showColours(products);
//

//
// Search methods
// - searchText
// - facetSearch
// - searchColours
//
function searchText() {
  //
  var inputBox = document.getElementById('search')
  var text = inputBox.value.toUpperCase();

  var newProductList = [];

  products.forEach(product => {
    const item = document.getElementById("xx" + product.id);
    if (product.name.toUpperCase().includes(text)) {
      newProductList.push(product);
    }
  })
  searchFacets(newProductList);
  //console.log(text)
}

//
function searchFacets(products) {

  var newProductList = [];
  const item = document.getElementById('stockAll');

  products.forEach(product => {

    if (item.checked) {
      newProductList.push(product);
    } else {
      if (product.stockLevel > 0) {
        newProductList.push(product);
      }
    }
  })
  searchColours(newProductList);
}

//
function searchColours(products) {

  var colourSelected = false;
  var newProductList = [];

  var lis = document.getElementById("colours").querySelectorAll("input");

  lis.forEach(item => {
    if (item.checked) {
      colourSelected = true;
      products.forEach(product => {
        if (product.colour === item.id) {
          newProductList.push(product);
        }
      })
    }
  })
  //
  if (colourSelected) {
    showProducts(newProductList);
  } else {
    showProducts(products);
  }
  //
  
}

//
// Calls from UI
//
function searchByFacet(e) {
  searchText();
}

//
function searchByColour() {
  searchText();
}


//
// UI update methods
// - showProducts
// - showColours
//
function showProducts(products) {

  var html = "";

  products.forEach(product => {
    // html += `<li id=xx${product.id}>${product.name}</li>`
    html += productCard(product)
  })

  const ulList = document.querySelector('.products');
  ulList.innerHTML = html;
}

//
function showColours(products) {
  const colourList = document.getElementById('colours');

  var colours = [];

  products.forEach(product => {
    if (!colours.includes(product.colour)) {
      colours.push(product.colour)
    }
  })
  //
  var html = "";
  colours.forEach(colour => {
    html += colourOption(colour)
  })

  colourList.innerHTML = html;
}

//
// UI Formats
// - productCard
// - colourOption
//
function productCard(product) {

  const html = `<li id=${product.id}>
                  <div class='card'>
                    <div class='card-image'></div>
                    <div class='card-text'>
                    <p class='card-heading'>${product.name}</p>
                    <p class='card-desc'>${product.desc}</p>
                    <p class='card-desc'>${product.colour}</p>
                    <p class='card-desc'>Stock level: ${product.stockLevel}</p>
                    </div>
                  </div>
                </li>`

  return html
}

//
function colourOption(colour) {

  const html = `<li id=${colour} class='class-item'>
                  <input type="checkbox" id=${colour} name="colour" onClick="searchByColour()">
                  <label for=${colour}>${colour}</label>
                
               </li>`;

  return html;
}