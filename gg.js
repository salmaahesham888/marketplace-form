
var productname = document.getElementById("productname");
var productprice = document.getElementById("productprice");
var productcategory = document.getElementById("productcategory");
var productdesc = document.getElementById("productdesc");

var productscontainer = [];

function addProduct() {
  if (checkinputs()) {
    var product = {
      name: productname.value,
      price: productprice.value,
      category: productcategory.value,
      desc: productdesc.value
    };

    productscontainer.push(product);
    console.log(productscontainer);
    displayproducts();//callfunction
    clearForm();//callfunction
  } else {
    window.alert("Sorry, all fields are required.");
  }
}

function clearForm() {
  productname.value = "";
  productprice.value = "";
  productcategory.value = "";
  productdesc.value = "";
}

function checkinputs() {
  if (
    productname.value !== "" &&
    productprice.value !== "" &&
    productcategory.value !== "" &&
    productdesc.value !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

function displayproducts() {
  var cartoona = ``;

  for (var i = 0; i < productscontainer.length; i++) {
    cartoona += `<tr>
      <td>${i}</td>
      <td>${productscontainer[i].name}</td>
      <td>${productscontainer[i].price}</td>
      <td>${productscontainer[i].category}</td>
      <td>${productscontainer[i].desc}</td>
      <td><button onclick="updateProduct(${i})">Update</button></td>
      <td><button onclick="deleteProduct(${i})">Delete</button></td>
    </tr>`;
  }

  document.getElementById("tablebody").innerHTML = cartoona;
}

function deleteProduct(index) {
  productscontainer.splice(index, 1);
  displayproducts();//call
}

function updateProduct(index) {
  var product = productscontainer[index];
  productname.value = product.name;
  productprice.value = product.price;
  productcategory.value = product.category;
  productdesc.value = product.desc;

  
}

function searchproduct(searchterm) {
  let cartoona = ``;
  for (let i = 0; i < productscontainer.length; i++) {
    if (productscontainer[i].name.toLowerCase().includes(searchterm.toLowerCase())) {
      cartoona += `
        <tr>
          <td>${i}</td>
          <td>${productscontainer[i].name}</td>
          <td>${productscontainer[i].price}</td>
          <td>${productscontainer[i].category}</td>
          <td>${productscontainer[i].desc}</td>
          <td><button onclick="updateProduct(${i})">Update</button></td>
          <td><button onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`;
    }
  } 
} 


function searchproduct(searchterm)//ELKELMA ELY KATBTHA FEL SEARCH 
{
  let cartoona = ``;
  for (let i = 0; i < productscontainer.length; i++) {
    if (productscontainer[i].name.toLowerCase().includes(searchterm.toLowerCase())) {
      cartoona += `
        <tr>
          <td>${i}</td>
          <td>${productscontainer[i].name}</td>
          <td>${productscontainer[i].price}</td>
          <td>${productscontainer[i].category}</td>
          <td>${productscontainer[i].desc}</td>
          <td><button onclick="updateProduct(${i})">Update</button></td>
          <td><button onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`; 
        // elcartoona contain the products onlyyyy i search for it
    } 
  else 
  {
    console.log("notfound")
  }
  }
  document.getElementById("tablebody").innerHTML = cartoona; 
  //put this cartoona in the table
}
