// databse of books stored as object in a array
var bookshop = [
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100,
        // finalPriceId: "final-price-0",
        // basePriceId: "base-price-0" 
    },
    {
        source: "./assets/homo-deus.jpg",
        bookTitle : "Homo Deus - A Brief History of Tomorrow",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 12,
        finalPrice: 130,
        basePrice: 150,
        // finalPriceId: "final-price-1",
        // basePriceId: "base-price-1" 
    },
    {
        source: "./assets/the-shinning.jpg",
        bookTitle : "The Shinning",
        authorName: "Stephen King",
        copiesAvailable: 8,
        finalPrice: 180,
        basePrice: 200,
        // finalPriceId: "final-price-2",
        // basePriceId: "base-price-2" 
    },
    {
        source: "./assets/1984.jpg",
        bookTitle : "1984",
        authorName: "George Orwell",
        copiesAvailable: 12,
        finalPrice: 230,
        basePrice: 250,
        // finalPriceId: "final-price-3",
        // basePriceId: "base-price-3" 
    },
    {   
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "The Da Vinci Code",
        authorName: "Dan Brown",
        copiesAvailable: 14,
        finalPrice: 280,
        basePrice: 300,
        // finalPriceId: "final-price-4",
        // basePriceId: "base-price-4" 
    },
    {
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "Inferno",
        authorName: "Dan Brown",
        copiesAvailable: 5,
        finalPrice: 210,
        basePrice: 240,
        // finalPriceId: "final-price-5",
        // basePriceId: "base-price-5" 
    },
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100,
        // finalPriceId: "final-price-0",
        // basePriceId: "base-price-0" 
    }
]
// console.log("This is an automatically generated message");
var bookList = document.querySelector('.book-list');

//an event listener that check the following function should run once the contents loaded
document.addEventListener("DOMContentLoaded", function() {
    for (i = 0; i < bookshop.length; i++) {
        bookshopItem = bookshop[i];
        loadItems(bookshopItem);
        console.log('test');
    }
    console.log('test');
});

// a function to inject items on itemlist as per array, fetched from database
function loadItems(item) {
    var itemToLoad = document.createElement('div');
    itemToLoad.className = "list-item p-1rem border-bottom-solid d-flex space-between align-center";
    itemToLoad.innerHTML = `<div class="list-item-details w-60 d-flex gap-1rem">
                                <input type="checkbox" name="item-selector" class="item-selector" id="item-selector${i}">
                                <div class="item-img w-5rem">
                                    <img src="${item.source}" alt="${item.bookTitle}" class="w-100" id="item-source${i}">
                                </div>
                                <div class="item-txt d-flex flex-column space-between">
                                    <p class="item-title fs-1-25rem" id="item-title${i}">
                                    ${item.bookTitle}
                                    </p>
                                    <p class="item-author fs-1-125rem" id="item-author${i}">
                                    ${item.authorName}
                                    </p>
                                    <img src="./assets/trash-solid.svg" alt="Remove from Cart" class="item-discard w-1rem">
                                    <p class="copies-available color-red">
                                        Only <span class="copies-available-number" id="copies-availabe${i}">${item.copiesAvailable}</span> copies available
                                    </p>
                                </div>
                            </div>
                            <div class="list-item-btns w-30">
                                <button type="button" class="delet-item p-1rem fs-1-25rem">&minus;</button>
                                <span class="item-on-cart p-1rem fs-1-25rem" id="item-on-cart${i}">1</span>
                                <button type="button" class="add-item p-1rem fs-1-25rem">&plus;</button>
                            </div>
                            <div class="list-item-price w-10">
                                <p><span class="final-price fs-1-25rem" id="final-price${i}">${item.finalPrice}</span> Tk.</p>
                                <p><s class="color-red"><span class="base-price fs-1-125rem" id="base-price${i}">${item.basePrice}</span> Tk.</s></p>
                            </div>`;
    bookList.appendChild(itemToLoad);
}

var addItemBtns = document.querySelectorAll('.add-item')
for (i = 0; i < addItemBtns.length; i++) {
    addItemBtns[i].addEventListener('click', function(event){                        // An event listener to check for click event on add-item button
        var itemToBuy = Number(event.target.closest('.item-on-cart').innerText)     // targets the value of the colsest item-on-cart class    
        if (itemToBuy > 5) {                                                        // checks if there is already 5 copies of that item on cart    
            itemToBuy++;
            event.target.closest('.item-on-cart').innerText = itemToBuy;
            console.log("te4st");
        }
    })
}
 

function oneMoreItem (){                                                // A function that increase to number of item on cart by one

}

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
    