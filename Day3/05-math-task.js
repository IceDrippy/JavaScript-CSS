const shopName = "Spice Route Bistro";
const customerName = "  ragav kumar  ";
const billNo = "inv-108";

// items
const item1 = "Paneer Tikka";
const qty1 = 2;
const price1 = 2_50.5;

const item2 = "Butter Naan";
const qty2 = 3;
const price2 = 45.75;

// tax
const taxPercent = 5;

const BORDER_COUNT = 40;
const billBorder = "=".repeat(BORDER_COUNT);
const dashBorder = "-".repeat(BORDER_COUNT);

const bill = `
${billBorder}
${shopName.toUpperCase()}
${billBorder}
Bill No   :  ${billNo.toUpperCase()}
Customer  :  ${customerName.trim().toLowerCase()}
${dashBorder}
${item1.padEnd(15)} ${qty1} x ${price1.toFixed(2).padEnd(15)}${(qty1 * price1).toFixed(2)}

`;

console.log(bill);
