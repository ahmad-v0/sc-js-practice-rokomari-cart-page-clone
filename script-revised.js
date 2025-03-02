// databse of books stored as object in a array
var bookshop = [
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100,
        finalPriceId: "final-price-0",
        basePriceId: "base-price-0" 
    },
    {
        source: "./assets/homo-deus.jpg",
        bookTitle : "Homo Deus - A Brief History of Tomorrow",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 12,
        finalPrice: 130,
        basePrice: 150,
        finalPriceId: "final-price-1",
        basePriceId: "base-price-1" 
    },
    {
        source: "./assets/the-shinning.jpg",
        bookTitle : "The Shinning",
        authorName: "Stephen King",
        copiesAvailable: 8,
        finalPrice: 180,
        basePrice: 200,
        finalPriceId: "final-price-2",
        basePriceId: "base-price-2" 
    },
    {
        source: "./assets/1984.jpg",
        bookTitle : "1984",
        authorName: "George Orwell",
        copiesAvailable: 12,
        finalPrice: 230,
        basePrice: 250,
        finalPriceId: "final-price-3",
        basePriceId: "base-price-3" 
    },
    {   
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "The Da Vinci Code",
        authorName: "Dan Brown",
        copiesAvailable: 14,
        finalPrice: 280,
        basePrice: 300,
        finalPriceId: "final-price-4",
        basePriceId: "base-price-4" 
    },
    {
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "Inferno",
        authorName: "Dan Brown",
        copiesAvailable: 5,
        finalPrice: 210,
        basePrice: 240,
        finalPriceId: "final-price-5",
        basePriceId: "base-price-5" 
    }
]
// console.log("This is an automatically generated message");

document.addEventListener("DOMContentLoaded", function () {                                                 // an event listner, that ensures that the following function runs only after the html is loaded
    // a anonymous function, which is called automatically whenever the page loads and updates the values in html accordingly
    (function () {
        // console.log("This is an automatically generated message");
        for (var index = 0; index < bookshop.length; index++) {                                                           // function loops for five times, as there are five objects in the array
            var bookshopItem = bookshop[index];                                                             // assign the index to array items
            document.getElementById(`item-source${index}`).src = bookshopItem.source;                       // updates source link of item image on html
            document.getElementById(`item-source${index}`).alt = bookshopItem.bookTitle;                    // updates alternative text for the item on html
            document.getElementById(`itemTitle${index}`).innerText = bookshopItem.bookTitle;                // updates book title on html
            document.getElementById(`authorName${index}`).innerText = bookshopItem.authorName;              // updates author name on html
            document.getElementById(`copiesAvailable${index}`).innerText = bookshopItem.copiesAvailable;    // updates the number of copies available on html
            document.getElementById(`final-price-${index}`).innerText = bookshopItem.finalPrice;            // updates the final price of the item on html
            document.getElementById(`base-price-${index}`).innerText = bookshopItem.basePrice;              // updates the base price of the item on html
        }
    })();
});

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
        totalPriceCalculation();
        
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
        totalPriceCalculation();
    } else {
        console.log("You have to purchase minimum 1 item.");
    }
    }

    function totalPriceCalculation() {
        var totalPriceFinal = 0;                                        // each time the function is called, set the total final price to zero
        var totalPriceBase = 0;                                         // each time the function is called, set the total base price to zero
        // a for loop that counts the total final price and total base price each time a copy of item is added to the cart
        for (var index = 0; index < bookshop.length; index++) {
            totalPriceFinal = totalPriceFinal + Number(document.getElementById(`final-price-${index}`).innerText);
            totalPriceBase = totalPriceBase + Number(document.getElementById(`base-price-${index}`).innerText);
        }
        document.getElementById("purchase-total-final").innerText = totalPriceFinal +" Tk.";
        document.getElementById("purchase-total-base").innerText = totalPriceBase +" Tk.";
        document.getElementById("subtotal").innerText = totalPriceFinal +" Tk.";
        document.getElementById("online-fee").innerText = (totalPriceFinal * 0.02) +" Tk.";
        document.getElementById("total").innerText = Number(document.getElementById("subtotal").innerText.slice(0, -4)) + Number(document.getElementById("online-fee").innerText.slice(0, -4)) +" Tk.";
        document.getElementById("payable-total").innerText = document.getElementById("total").innerText;
    }
    