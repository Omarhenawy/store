const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
const userApi = `https://afternoon-falls-30227.herokuapp.com/api/v1/products/${id}`;
const xhr = new XMLHttpRequest();
xhr.open('GET', userApi);
xhr.send();

xhr.onload = function() {
    if (xhr.status == 200) {
        const products = JSON.parse(xhr.response).data;
        console.log(products);
        const divElement = document.getElementById(`blog-card`);
        const imgElement = document.createElement('img');
        let category = document.getElementById('category');
        category.innerHTML = products.Category;
        let model = document.getElementById('model')
        model.innerHTML = ` product ${products.Name}`
        let price = document.getElementById('price');
        price.innerHTML=`price : ${products.Price}$`
        let name = document.getElementById('name');
        name.innerHTML=`status : ${products.Status}`;
        let description = document.getElementById('description');
        description.innerHTML=`Description: ${products.Description}`
        imgElement.src = products.ProductPicUrl;
        divElement.appendChild(imgElement);






    }
}