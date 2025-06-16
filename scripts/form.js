const products = [
    {
        id: "fc-1888",
        name: "Television",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Refrigerator",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Sound System",
        averagerating: 3.5
    },
    {
        id: "fs-2020",
        name: "Aircondition",
        avragerating: 3.9
    },
    {
        id: "xc-2022",
        name: "Ceiling Fan",
        averagerating: 4.6
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("counter").textContent = `Total reviews submitted: ${count}`;
});
  

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
