
// fetch data process

mainSection = document.getElementById('products')

function fetchData(){
    fetch('http://localhost:3000/snowes')
      .then((res) => res.json())
      .then((data) => {
         show(data)
      })
      .catch((err) => console.log(err));
  }
  
  fetchData();


  function show(data){

    const store = data.map((ele) =>
      showData( ele.id,ele.product_name, ele.images,ele.image,ele.price)
  );
  mainSection.innerHTML = store.join('');

  }

  function showData(id,product_name,images,image,price){

    return `
      <div class="product" data-id="${id}">
             <a href="description.html?image=${encodeURIComponent(image)}&product_name=${encodeURIComponent(product_name)}&price=${encodeURIComponent(price.sale)}">   
                <div id="image">
                  <img src=${images||image} alt="">
                </div></a>
                <div id="texts">
                  <p>${product_name}</p>
                  <div class="price">
                    <p class="res_p" style="padding-right: 15px;text-decoration: line-through;">${price.original}</p>
                    <p>${price.sale}</p>
                  </div>
                </div>
              </div>
    `
  }




