const searchInput = document.getElementById("search");
const productsDom = document.getElementById("products");

let products = [];

searchInput.addEventListener("input", function (e) {
  const kw = this.value;
  initializeApplication(kw);
});

const initializeApplication = async function (key = "") {
  await axios
    .get("http://localhost:3000/products")
    .then(function (response) {
      const data = response.data.filter((products) =>
        products.title.toLowerCase().match(`${key.toLowerCase()}`)
      );
      products = data;
      renderProduct();
    })
    .catch((error) => {
      console.log(error);
    });
};

initializeApplication();


const renderProduct = () => {
  productsDom.innerHTML = ``;
  products.forEach((product) => {
    productsDom.innerHTML += `
     <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="card product_item">
              <div class="body">
                <div class="cp_img ">
                  <img
                   src=${product.image}
                    alt="Product"
                    class="img-fluid"
                  />
                  <div class="hover"></div>
                </div>
                <div class="product_details">
                  <h5>
                    <a href="#">${product.title}</a>
                  </h5>
                  <ul class="product_price list-unstyled">
                    <li class="old_price">$${product.price}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    `;
  });
};


//!copy right 2020 reference Bung Sa 