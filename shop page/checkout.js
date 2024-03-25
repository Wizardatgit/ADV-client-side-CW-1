// Product data array containing various items
const product = [  
    {
        id: 0,
        image: 'images/conch-48531.png',
        title: 'Turbinella Conch',
        price: 200,
        quantity: 0,
    },
    {
        id: 1,
        image: 'images/woodenelephant.jpg',
        title: 'Handcrafted Wodden Elephant',
        price: 15,
        quantity: 0,
    },
    {
        id: 2,
        image: 'images/tea1.jpg',
        title: 'English Breakfast Tea',
        price: 10,
        quantity: 0,
    },
    {
        id: 3,
        image: 'images/tea2.jpg',
        title: 'Earl Grey tea',
        price: 10,
        quantity: 0,
    },
    {
        id: 4,
        image: 'images/sltee.jpeg',
        title: 'Sri Lankan T-shirt',
        price: 40,
        quantity: 0,
    },
    {
        id: 5,
        image: 'images/yaka.jpg',
        title: 'Gara Yaka Wooden Mask',
        price: 70,
        quantity: 0,
    },
    {
        id: 6,
        image: 'images/claypot.jpg',
        title: 'Handmade Clay Pot',
        price: 20,
        quantity: 0,
    },
    {
        id: 7,
        image: 'images/pendant.jpg',
        title: 'Gold Pendant - Sri Lanka',
        price: 150,
        quantity: 0,
    },
];
// Copying the product data array into the categories array
const categories = [...product];
    document.getElementById('root').innerHTML = categories.map((item) => // Dynamically generate the HTML content for displaying the products in the
    {
        var { image, title, price, quantity } = item; 
        // Generate HTML for each item with its details
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <div class = 'quantity'>
                        <label for = "quantity">Quantity: </label>
                        <input type="number" id = 'quantity${item.id}' min='1' value='1'/>
                    </div>
                    <h2>$${price}.00</h2>
                    <button onclick='addtocart(${item.id})'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('')
    
// Array to store the items added to the shopping cart
    var cart = [];
// Function to add an item to the shopping cart 
    function addtocart(id) {
        var quantity = parseInt(document.getElementById('quantity' + id).value);
        product[id].quantity = quantity
        cart.push({...product[id]})
        displaycart();
        document.getElementById("quantity" + id).value = 1;
           
    }
// Function to remove an item from the shopping cart
    function delElement(a) {
        cart.splice(a, 1);
        displaycart();
    }
// Function to update the display of the shopping cart
    function displaycart() {
        let j = 0, total = 0;
        document.getElementById("count").innerHTML = cart.length;
        if (cart.length == 0) {
            document.getElementById('cartitem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        } else {
            document.getElementById("cartitem").innerHTML = cart.map((items) => 
            {
                var { image, title, price, quantity } = items;
                total = total + price * quantity;
                document.getElementById("total").innerHTML = "$ " + total + ".00";
                return (
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:12px;'>${title} x ${quantity}</p>
                        <h2 style='font-size: 15px;'>$ ${price * quantity}.00</h2>
                        <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                    </div>`
                )
            }).join('');
        }
    }
// Function to proceed to checkout and redirect to the payment page
    function proceedbutton() {
        document.getElementById("count").innerHTML=cart.length;
        var tot = document.getElementById("total").innerHTML;
        if (cart.length == "0") {
            alert ("Cannot Proceed, Your Cart is Empty !!!");
            return false;

        }else if (cart.length != 0) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                localStorage.setItem("ekathuwa", tot);
                window.location.href = "cardpayment.html";
            });
        }
    }














   