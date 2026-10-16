const shopName = "Bracelet Abode";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

const prices = [130, 190, 160];

for (let i = 0; i < prices.length; i++) {
    runningTotal = runningTotal + prices[i];
}

document.getElementById("shop-name").textContent = shopName;

document.getElementById("copyright").textContent =
    "© " + currentYear + " " + shopName;

const summary = document.getElementById("product-summary");
if (summary) {
    summary.textContent =
        "We have " + prices.length + " products. Buy one of each for ₱" + runningTotal + ".";
}

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total:", runningTotal);