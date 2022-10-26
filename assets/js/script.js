const productData = [
    {
        name: "PC Gamer Void",
        description:
            "i3-12100F, RTX 3050, RAM 8GB(16x8), SSD 480GB, 600w, W11 Home",
        src: "assets/img/pc1.png",
        ram: 16,
        precio: 733,
    },
    {
        name: "PC Gamer Odín",
        description:
            "RTX 3070, AMD Ryzen 5600X, RAM RGB 16GB, SSD 1TB, 700w, W10H",
        src: "assets/img/pc2.png",
        ram: 16,
        precio: 1679,
    },
    {
        name: "PC Gamer Ward",
        description:
            "Ryzen Pro 4650G, Radeon RX Vega 7, RAM 4GB 3200Mhz, SSD 480GB, W10H",
        src: "assets/img/pc3.png",
        ram: 8,
        precio: 629,
    },
    {
        name: "PC Gamer Nemesis",
        description:
            "K - GTX 1660 Super, i5-11400, RAM (2X8) 16GB, SSD 500GB, Windows 10 Home",
        src: "assets/img/pc4.png",
        ram: 16,
        precio: 944,
    },
    {
        name: "PC Gamer Quantum",
        description:
            "RTX 2060, i5-10400, RAM RGB 8GB, SSD 512 GB, 650w , Wi-Fi, W10H",
        src: "assets/img/pc5.png",
        ram: 8,
        precio: 1231,
    },
    {
        name: "PC ELITE",
        description:
            "Intel i9 10900KF + Z590 WIFI+BT + 32GB + SSD 1TB M.2 + WATER 360 + RTX 3070 Ti",
        src: "assets/img/pc6.png",
        ram: 32,
        precio: 2759,
    },
];

const ramInput = document.querySelector("#ramInput");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const productContainer = document.querySelector("#productContainer");
const form = document.querySelector("#form");


let html = "";
for (product of productData) {
    html += `<div class="card">
    <img src="${product.src}" alt="">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>US$ ${product.precio}</p>
    <button>Comprar</button>
</div>`;
}

productContainer.innerHTML = html;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!max.value || !min.value) {
        alert("debes llenar los campos");
        return;
    }
    productContainer.innerHTML = "";
    for (product of productData) {
        if (
            product.precio >= min.value &&
            product.precio <= max.value &&
            ramInput.value == product.ram
        ) {
            productContainer.innerHTML += `<div class="card">
        <img src="${product.src}" alt="">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$ ${product.precio}</p>
        <button>Comprar</button>
    </div>`;
        }
    }
});
