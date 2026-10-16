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


// ---- Decision 1: Stock status ----
const stockCount = 7;
let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

// ---- Decision 2: Free delivery (&& and ternary) ----
const orderTotal = 520;
const isMember = true;
const freeDeliveryMinimum = 500;

const qualifiesForFreeDelivery =
    isMember === true && orderTotal >= freeDeliveryMinimum;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

// ---- Decision 3: Open or closed (boolean and ternary) ----
const isOpenToday = true;
const openMessage = isOpenToday === true ? "Open today" : "Closed today";

// ---- Show the results on the page (only index.html has these) ----
const stockSpot = document.getElementById("stock-status");
if (stockSpot) {
    stockSpot.textContent = "Custom Engraving Bracelet: " + stockMessage;
}

const deliverySpot = document.getElementById("delivery-summary");
if (deliverySpot) {
    deliverySpot.textContent =
        "Order ₱" + orderTotal + " + delivery ₱" + deliveryFee +
        " = ₱" + finalTotal + (qualifiesForFreeDelivery ? " (free delivery!)" : "");
}

const openSpot = document.getElementById("open-status");
if (openSpot) {
    openSpot.textContent = openMessage;
}

// Labelled logs
console.log("Stock message:", stockMessage);
console.log("Delivery fee:", deliveryFee);
console.log("Final total:", finalTotal);
console.log("Open message:", openMessage);