
let addbtn = document.getElementById('addbtn');


addbtn.addEventListener("click", function(e){

        e.preventDefault();
        const param = new URLSearchParams(window.location.search);
        

        let image = param.get("image")
        let product_name = param.get("product_name")
        let price = param.get("price")

        storeData(image,product_name,price);
})


function storeData(image,product_name,price){

    console.log(image,product_name,price)

    const items = {
        image,
        product_name,
        price
    }

    let cart = JSON.parse(localStorage.getItem("cartItem")) || [];

    cart.push(items);

    localStorage.setItem("cartItem", JSON.stringify(cart));

    alert(`${product_name} has been added to you cart!`);

}