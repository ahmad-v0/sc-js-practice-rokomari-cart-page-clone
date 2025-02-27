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

// an array to store each book item as object, containing base price and final price along with respectice id

// (function () {
//     console.log("This is an automatically generated message");
// })();
// bookshop2 = [
//     {
//         bookTitle : "amar fashi chai",
//         authorName: "Delowar Jahan Jhantu",
//         copiesAvailable: "8",
//         finalPrice0: 155,
//         basePrice0: 175
//     }
// ]
bookshop = [
    {
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100,
        finalPriceId: "final-price-0",
        basePriceId: "base-price-0" 
    },
    {
        bookTitle : "Homo Deus - A Brief History of Tomorrow",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 12,
        finalPrice: 130,
        basePrice: 150,
        finalPriceId: "final-price-1",
        basePriceId: "base-price-1" 
    },
    {
        bookTitle : "The Shinning",
        authorName: "Stephen King",
        copiesAvailable: 8,
        finalPrice: 180,
        basePrice: 200,
        finalPriceId: "final-price-2",
        basePriceId: "base-price-2" 
    },
    {
        bookTitle : "1984",
        authorName: "George Orwell",
        copiesAvailable: 12,
        finalPrice: 230,
        basePrice: 250,
        finalPriceId: "final-price-3",
        basePriceId: "base-price-3" 
    },
    {
        bookTitle : "The Da Vinci Code",
        authorName: "Dan Brown",
        copiesAvailable: 14,
        finalPrice: 280,
        basePrice: 300,
        finalPriceId: "final-price-4",
        basePriceId: "base-price-4" 
    }
]
console.log("This is an automatically generated message");
(function () {
    console.log("This is an automatically generated message");
    for (index = 0; index < 5; index++) {
        var bookshopItem = bookshop[index];
        document.getElementById(`itemTitle${index}`).innerText = bookshopItem.bookTitle;
        document.getElementById(`authorName${index}`).innerText = bookshopItem.authorName;
        document.getElementById(`copiesAvailable${index}`).innerText = bookshopItem.copiesAvailable;
        document.getElementById(`final-price-${index}`).innerText = bookshopItem.finalPrice;
        document.getElementById(`base-price-${index}`).innerText = bookshopItem.basePrice;
    }
})();


// a function that adds item to the cart whenever add button is clicked, and also calculate and show the total final and total base price of that item
function addItem (itemOnCart, bookShopIndex) {                      // functionName (elementId, indexPosition)
    var item = Number(document.getElementById(itemOnCart).innerText);   // convert the text of itemOnCart into number
    var bookshopItem = bookshop[bookShopIndex];                         // map the object inside array
    if (item < 5) {                                                     // checks whether number of item on the cart does exceed 5 items
        item++;
        document.getElementById(itemOnCart).innerText = item;           // update the value of item on the cart
        document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);    // updates the total final price of the selected item
        document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);      // updates the total base price of the selected item
    
        // for (index=0; index < 5; index++) {                          // an attempt to calculate total price of all the item on the cart, but aborted (requires more analysis)
        //     itemToCount = bookshop[index];
    
        // }
    } else {
        console.log("Max 5 items can be purchased with this deal.");    // error message to check, will be commented and replaced with a notice
    }
    }
    
    
    // a function that deletes item from the cart whenever delete button is clicked, and also calculate and show the total final and total base price of that item
    function delItem (itemOnCart, bookShopIndex) {                      // all are nearly simillar to the addItem function
    var item = Number(document.getElementById(itemOnCart).innerText);
    var bookshopItem = bookshop[bookShopIndex];
    if (item >= 2) {                                                    // to check that minimum 1 items remains on the cart
        item--;
        document.getElementById(itemOnCart).innerText = item;
        document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);
        document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);
    } else {
        console.log("You have to purchase minimum 1 item.");
    }
    }
    
    //     console.log("This is a automatically generated message");
    // }) ();
    

// console.log("before bookshop2");

// bookshop2 = [
//     {
//         bookTitle : "amar fashi chai",
//         authorName: "Delowar Jahan Jhantu",
//         copiesAvailable: "8",
//         finalPrice0: 155,
//         basePrice0: 175
//     }
// ]
// console.log("after bookshop2");
// (function () {

// bookshop = [
//     {
//         finalPriceId: "final-price-1", 
//         finalPrice: 80,                 // final price and base price should be dynamic, but for now static values are being used (for practice)
//         basePriceId: "base-price-1",
//         basePrice: 100
//     }, {
//         finalPriceId: "final-price-2",
//         finalPrice: 130,
//         basePriceId: "base-price-2",
//         basePrice: 150
//     }, {
//         finalPriceId: "final-price-3",
//         finalPrice: 180,
//         basePriceId: "base-price-3",
//         basePrice: 200
//     }, {
//         finalPriceId: "final-price-4",
//         finalPrice: 230,
//         basePriceId: "base-price-4",
//         basePrice: 250
//     }, {
//         finalPriceId: "final-price-5",
//         finalPrice: 280,
//         basePriceId: "base-price-5",
//         basePrice: 300
//     }
// ]

// console.log(document.getElementsByClassName("final-price"))


// // a function that adds item to the cart whenever add button is clicked, and also calculate and show the total final and total base price of that item
// function addItem (itemOnCart, bookShopIndex) {                      // functionName (elementId, indexPosition)
// var item = Number(document.getElementById(itemOnCart).innerText);   // convert the text of itemOnCart into number
// var bookshopItem = bookshop[bookShopIndex];                         // map the object inside array
// if (item < 5) {                                                     // checks whether number of item on the cart does exceed 5 items
//     item++;
//     document.getElementById(itemOnCart).innerText = item;           // update the value of item on the cart
//     document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);    // updates the total final price of the selected item
//     document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);      // updates the total base price of the selected item

//     // for (index=0; index < 5; index++) {                          // an attempt to calculate total price of all the item on the cart, but aborted (requires more analysis)
//     //     itemToCount = bookshop[index];

//     // }
// } else {
//     console.log("Max 5 items can be purchased with this deal.");    // error message to check, will be commented and replaced with a notice
// }
// }


// // a function that deletes item from the cart whenever delete button is clicked, and also calculate and show the total final and total base price of that item
// function delItem (itemOnCart, bookShopIndex) {                      // all are nearly simillar to the addItem function
// var item = Number(document.getElementById(itemOnCart).innerText);
// var bookshopItem = bookshop[bookShopIndex];
// if (item >= 2) {                                                    // to check that minimum 1 items remains on the cart
//     item--;
//     document.getElementById(itemOnCart).innerText = item;
//     document.getElementById(bookshopItem.finalPriceId).innerText = item * (bookshopItem.finalPrice);
//     document.getElementById(bookshopItem.basePriceId).innerText = item * (bookshopItem.basePrice);
// } else {
//     console.log("You have to purchase minimum 1 item.");
// }
// }

// //     console.log("This is a automatically generated message");
// // }) ();


