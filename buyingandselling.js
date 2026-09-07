function addProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let condition = document.getElementById("condition").value;
    let location = document.getElementById("location").value;
    let image = document.getElementById("image").value;
    if (name === "" || price === "") {
        alert("Please enter Product Name and Price!");
        return;
    }
    if (description === "") {
        description = "No description available.";
    }
    if (condition === "") {
        condition = "Not specified";
    }
    if (location === "") {
        location = "Not specified";
    }
    if (image === "") {
        image = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80";
    }
    let productHTML =
        "<div class='product'>" +
        "<img src='" + image + "' alt='" + name + "'>" +
        "<h3>" + name + "</h3>" +
        "<p class='description'>" + description + "</p>" +
        "<p class='price'>₹" + price + "</p>" +
        "<p><b>Condition:</b> " + condition + "</p>" +
        "<p><b>Location:</b> " + location + "</p>" +
        "<button onclick=\"buyProduct('" + name + "')\">" +
        "Buy Now</button>" +
        "</div>";
    document.getElementById("productList").innerHTML += productHTML;
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("condition").value = "";
    document.getElementById("location").value = "";
    document.getElementById("image").value = "";
    alert("Your product has been added successfully!");
}
function buyProduct(name) {
    alert(
        "You selected: " + name +
        "\n\nThank you for choosing Reuse Mart!"
    );
}
function searchProduct() {
    let input = document
        .getElementById("search")
        .value
        .toLowerCase();
    let products =
        document.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        let productName =
            products[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}