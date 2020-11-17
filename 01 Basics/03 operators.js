// declaring values price

var sellingPrice = 249;
var listingPrice = 799;

// finding percentage
var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;
console.log("Discount percent is: " + discountPercent);

// rounding percentage
var displayPercent = Math.round(discountPercent)
console.log("Rounded Price: " + displayPercent)