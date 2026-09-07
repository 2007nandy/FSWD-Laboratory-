let cart = [];
function addToCart(name, price) {
    let food = cart.find(
        item => item.name === name
    );
    if (food) {
        food.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    updateCart();
    alert(name + " added to cart!");
}
function updateCart() {
    let cartItems =
        document.getElementById("cartItems");
    let totalAmount =
        document.getElementById("totalAmount");
    let paymentAmount =
        document.getElementById("paymentAmount");
    let summaryAmount =
        document.getElementById("summaryAmount");
    let cartCount =
        document.getElementById("cartCount");
    let summaryItems =
        document.getElementById("summaryItems");
    cartItems.innerHTML = "";
    summaryItems.innerHTML = "";
    let total = 0;
    let totalItems = 0;
    if (cart.length === 0) {
        cartItems.innerHTML =
            "<p class='empty-cart'>Your cart is empty. Add something delicious! 🍔</p>";
        summaryItems.innerHTML =
            "No food added yet.";
    } else {
        cart.forEach((food, index) => {
            let itemTotal =
                food.price * food.quantity;
            total += itemTotal;
            totalItems += food.quantity;
            cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${food.name}</h3>
                    <p>
                        ₹${food.price} ×
                        ${food.quantity}
                        = ₹${itemTotal}
                    </p>
                </div>
                <div class="quantity">
                    <button onclick="changeQuantity(${index}, -1)">
                        -
                    </button>
                    <span>${food.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">
                        +
                    </button>
                </div>
                <button class="remove-btn"
                onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
            `:
            summaryItems.innerHTML += `
            <div class="summary-item">
                <span>
                    ${food.name} ×
                    ${food.quantity}
                </span>
                <span>
                    ₹${itemTotal}
                </span>
        </div>
           `;
        });
    }
    totalAmount.innerText = total;
    paymentAmount.innerText = total;
    summaryAmount.innerText = total;
    cartCount.innerText = totalItems;
}
function changeQuantity(index, value) {
    cart[index].quantity += value;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
function showCart() {
    document.getElementById("cart")
        .scrollIntoView({
            behavior: "smooth"
        });
}
function goToMenu() {
    document.getElementById("foods")
        .scrollIntoView({
            behavior: "smooth"
        });
}
function saveDetails() {
    let name =
        document.getElementById("customerName").value;
    let mobile =
        document.getElementById("mobileNumber").value;
    let address =
        document.getElementById("address").value;
    if (
        name === "" ||
        mobile === "" ||
        address === ""
    ) {
        alert(
            "Please enter all customer details!"
        );
        return;
    }
    if (mobile.length !== 10) {
        alert(
            "Please enter a valid 10-digit mobile number!"
        );
        return;
    }
    document.getElementById("savedMessage")
        .innerText =
        "✓ Delivery details saved successfully!";
}
function searchFood() {
    let input =
        document.getElementById("searchFood")
        .value.toLowerCase();
    let foods =
        document.querySelectorAll(".food-card");
    foods.forEach(function(food) {
        let name =
            food.querySelector("h3")
            .innerText.toLowerCase();
        if (name.includes(input)) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }
    });
}
function placeOrder() {
    let name =
        document.getElementById("customerName").value;
    let mobile =
        document.getElementById("mobileNumber").value;
    let address =
        document.getElementById("address").value;
    if (cart.length === 0) {
        alert(
            "Your cart is empty! Please add food."
        );
        return;
    }
    if (
        name === "" ||
        mobile === "" ||
        address === ""
    ) {
        alert(
            "Please enter your delivery details!"
        );
        document.getElementById("details")
            .scrollIntoView({
                behavior: "smooth"
            });
        return;
    }
    if (mobile.length !== 10) {
        alert(
            "Please enter a valid mobile number!"
        );
        return;
    }
    let total = 0;
    cart.forEach(function(food) {
        total +=
            food.price * food.quantity;
    });
    alert(
        "🎉 ORDER PLACED SUCCESSFULLY! 🎉\n\n" +
        "Customer: " + name + "\n" +
        "Mobile: " + mobile + "\n\n" +
        "Delivery Address:\n" +
        address + "\n\n" +
        "Total Amount: ₹" +
        total + "\n\n" +
        "Thank you for ordering from ZESTORA! 🍱\n" +
        "Your food will arrive soon! 🚚"
    );
    cart = [];
    updateCart();
    document.getElementById(
        "customerName"
    ).value = "";
    document.getElementById(
        "mobileNumber"
    ).value = "";
    document.getElementById(
        "address"
    ).value = "";
    document.getElementById(
        "savedMessage"
    ).innerText = "";
}