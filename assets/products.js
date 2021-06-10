const userApi = "https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
const xhr = new XMLHttpRequest();
xhr.open('GET', userApi);
xhr.send();

xhr.onload = function() {
    if (xhr.status == 200) {
        const products = JSON.parse(xhr.response).data;
        console.log(products)



        products.forEach((product) => {
            //first page
            const DivContainer = document.getElementById('design-content')
            const DivElement = document.createElement('div');
            const DivImage = document.createElement('div');
            const imgElement = document.createElement('img');
            const pEl = document.createElement('p');
            const price = document.createElement('figcaption');
            const link = document.createElement(`a`);

            const id = product.ProductId;

            DivElement.classList.add('design-item');
            DivImage.classList.add('design-img');
            imgElement.src = product.ProductPicUrl;
            pEl.style.color = 'blue';
            price.innerText = `${product.Price}${product.CurrencyCode}`;
            pEl.innerText = `${product.Name}`;
            link.href = `pages/product.html?id=${id}`
            link.innerText = 'click link';
            DivContainer.appendChild(DivElement);
            DivElement.appendChild(DivImage);
            DivImage.appendChild(imgElement);
            DivImage.appendChild(price);
            DivImage.appendChild(pEl);
            DivImage.appendChild(link);

            link.addEventListener('click', () => {
                console.log(id);




            })
        })


    }
}
const contactApi = "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us";

// select Form
const contactUsForm = document.getElementById('contactUsForm');

// add submit Event listener
contactUsForm.addEventListener("submit", (ev) => {
    // prevent default
    ev.preventDefault();
    // Get form data
    let firstName = document.getElementById('firstName');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    const dataToBeSent = {
            name: firstName.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        }
        // Send request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', contactApi);
    console.log(`test`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(dataToBeSent));
    console.log(`omar`);

    // Recieve Response and reset the form
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log('post success')
            firstName.value = email.value = subject.value = message.value = '';
        }
    }
    console.log(`success`);

});