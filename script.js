// // function addItem() {
// //     var item = Number((document.getElementById("itemOnCart-1")).innerText);
// //     console.log(item);
// //     if (item < 5) {
// //         item++;
// //         document.getElementById("itemOnCart-1").innerText = item;
// //     } else {
// //         console.log('Max 5 item can be added to the cart');
// //     }
// // }

// // function delItem(){
// //     var item = Number((document.getElementById("itemOnCart-1")).innerText);
// //     console.log(item);
// //     if (item >= 2) {
// //         item--;
// //         document.getElementById("itemOnCart-1").innerText = item;
// //     } else {
// //         console.log("You have to purchase minimum 1 item.")
// //     }
// // }


// // function addItem() {
// //         // var item = Number((document.getElementsByClassName("item-on-cart")).innerText);
// //         var item = (document.getElementsByClassName("item-on-cart")).innerText;
// //         console.log(item);
// //         if (item < 5) {
// //             item++;
// //             document.getElementsByClassName("item-on-cart").innerText = item;
// //         } else {
// //             console.log('Max 5 item can be added to the cart');
// //         }
// //     }


// // var item = Number((document.getElementById(itemId)).innerText);
// var bookOne = {
//     finalPrice: 80,
//     basePrice:100
// }
// var itemFinal = bookOne.finalPrice;
// var itemBase = bookOne.basePrice; 

// // var itemFinal = Number((document.getElementById(finalPrice)).innerText);
// // var itemBase = Number((document.getElementById(basePrice)).innerText);



// function addItem(itemId, finalPrice, basePrice) {
//     var item = Number((document.getElementById(itemId)).innerText);
//     // var itemFinal = Number((document.getElementById(finalPrice)).innerText);
//     // var itemBase = Number((document.getElementById(basePrice)).innerText);
//     console.log(item);
//     if (item < 5) {
//         item++;
//         document.getElementById(itemId).innerText = item;
//         document.getElementById(finalPrice).innerText = item * itemFinal;
//         document.getElementById(basePrice).innerText = item * itemBase;
//         console.log(document.getElementById(finalPrice).innerText);
//     } else {
//         console.log('Max 5 item can be added to the cart');
//     }
// }

// function delItem(itemId, finalPrice, basePrice){
//     var item = Number((document.getElementById(itemId)).innerText);
//     // var itemFinal = Number((document.getElementById(finalPrice)).innerText);
//     // var itemBase = Number((document.getElementById(basePrice)).innerText);
//     console.log(item);
//     if (item >= 2) {
//         item--;
//         document.getElementById(itemId).innerText = item;
//         document.getElementById(finalPrice).innerText = item * itemFinal;
//         document.getElementById(basePrice).innerText = item * itemBase;
//         console.log(document.getElementById(finalPrice).innerText);
//     } else {
//         console.log("You have to purchase minimum 1 item.")
//     }
// }

bookshop = [
    {
        finalPriceId: "final-price-1",
        finalPrice: 80,
        basePriceId: "base-price-1",
        basePrice: 100
    }, {
        finalPriceId: "final-price-2",
        finalPrice: 130,
        basePriceId: "base-price-2",
        basePrice: 150
    }, {
        finalPriceId: "final-price-3",
        finalPrice: 180,
        basePriceId: "base-price-3",
        basePrice: 200
    }, {
        finalPriceId: "final-price-4",
        finalPrice: 230,
        basePriceId: "base-price-4",
        basePrice: 250
    }, {
        finalPriceId: "final-price-5",
        finalPrice: 280,
        basePriceId: "base-price-5",
        basePrice: 300
    }
]


function addItem (itemOnCart, bookShopIndex) {
var item = Number(document.getElementById(itemOnCart).innerText);
var bookshopItem = bookshop[bookShopIndex];
if (item < 5) {
    item++;
    document.getElementById(itemOnCart).innerText = item;
    document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);
    document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);
} else {
    console.log("Max 5 items can be purchased with this deal.");
}
}

function delItem (itemOnCart, bookShopIndex) {
var item = Number(document.getElementById(itemOnCart).innerText);
var bookshopItem = bookshop[bookShopIndex];
if (item >= 2) {
    item--;
    document.getElementById(itemOnCart).innerText = item;
    document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);
    document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);
} else {
    console.log("You have to purchase minimum 1 item.");
}
}