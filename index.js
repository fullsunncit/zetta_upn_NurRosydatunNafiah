function bookPurchasing({title, price, category, author, status, stock}, discount, tax, amountPurchased) {
    let jumlah = 0;
    for (let i=1; i<=amountPurchased; i++){
        if(amountPurchased <= stock){
            const amountOfDiscount = price * (discount / 100);
            const priceAfterDiscount = price - amountOfDiscount;
            const amountOfTax = priceAfterDiscount * (tax / 100);
            const priceAfterTax = priceAfterDiscount + amountOfTax;
            console.log("Buku ke-" + i);
            console.log("- Title : " + title);
            console.log("- Price : " + price);
            console.log("- Category : " + category);
            console.log("- Author : " + author);
            console.log("- Price : " + price);
            console.log("- Amount of discount : " + amountOfDiscount);
            console.log("- Price after discount : " + priceAfterDiscount);
            console.log("- Amount of tax : " + amountOfTax);
            console.log("- Price after tax and discount : " + priceAfterTax);
            jumlah = jumlah + priceAfterTax;
        }
        else{
            console.log("Maaf, stok buku tidak memenuhi");
        }
    }
    console.log(" ");
    console.log("==> Total harga semua buku : " + jumlah);
}
        
let book = {
    "title": "Tulisan Sastra",
    "price": 100000,
    "category" : "Novel",
    "author" : "Tenderlova",
    "status" : true,
    "stock" : 10
}

bookPurchasing(book, 20, 5, 3);