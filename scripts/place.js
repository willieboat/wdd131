document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temperature").textContent = "26°C";
    document.getElementById("conditions").textContent = "Sunny";
    document.getElementById("wind").textContent = "15 km/h";
    document.getElementById("wind-chill").textContent = "9.8°C";

    document.getElementById("lastModified").textContent = new Date().toLocaleString();
});