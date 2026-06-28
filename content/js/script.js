function calculateDiscountedPrice(price, discount) {
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    console.log(`Original Price: $${price}`);
    console.log(`Discount: ${discount}%`);
    console.log(`Discount Amount: $${discountAmount}`);
    console.log(`Final Price: $${finalPrice}`);
}

calculateDiscountedPrice(1200, 20);

function showWelcomeMessage() {
    alert("Welcome to our Online Tech Shop!");
}

