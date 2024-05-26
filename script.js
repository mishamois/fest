
    function getCard(data) {
        let womenProducts = '', menProducts = '', childProducts = '';
        const womenBlock = document.getElementById('women-products')
        const menBlock = document.getElementById('men-products')
        const childBlock = document.getElementById('child-products')

        data.map((element, index) => {
            if(element.gender == "women"){
                womenProducts+=`<div id="${element.id}" class="">
                                    <div class="product-images">
                                        <img src="images/${element.imageUrl1}" alt="">
                                        <img src="images/${element.imageUrl2}" alt="">
                                    </div>
                                    <h3> ${element.name} </h3>
                                    <p class="price">${element.cost}</p>
                                    <button class="add-to-cart">Добавить в корзину</button>
                                </div>`;
            } else if(element.gender == "men") {
                menProducts+=`<div id="${element.id}" class="">
                                    <div class="product-images">
                                        <img src="images/${element.imageUrl1}" alt="">
                                        <img src="images/${element.imageUrl2}" alt="">
                                    </div>
                                    <h3> ${element.name} </h3>
                                    <p class="price">${element.cost}</p>
                                    <button class="add-to-cart">Добавить в корзину</button>
                                </div>`;
            } else {
                childProducts+=`<div id="${element.id}" class="">
                                    <div class="product-images">
                                        <img src="images/${element.imageUrl1}" alt="">
                                        <img src="images/${element.imageUrl2}" alt="">
                                    </div>
                                    <h3> ${element.name} </h3>
                                    <p class="price">${element.cost}</p>
                                    <button class="add-to-cart">Добавить в корзину</button>
                                </div>`;
            }

            
        })
        menBlock.insertAdjacentHTML("afterbegin",menProducts)
        womenBlock.insertAdjacentHTML("afterbegin",womenProducts)
        childBlock.insertAdjacentHTML("afterbegin",childProducts)

        
    }
    getCard(library);

    var cartCounter = 0;
    var cartDisplay = document.querySelector('#cart span');

    function addToCart() {
        cartCounter++;
        cartDisplay.textContent = cartCounter;
    }

    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', addToCart);
    });


