// databse of books stored as object in a array
var bookshop = [
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100
    },
    {
        source: "./assets/homo-deus.jpg",
        bookTitle : "Homo Deus - A Brief History of Tomorrow",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 12,
        finalPrice: 130,
        basePrice: 150
    },
    {
        source: "./assets/the-shinning.jpg",
        bookTitle : "The Shinning",
        authorName: "Stephen King",
        copiesAvailable: 8,
        finalPrice: 180,
        basePrice: 200
    },
    {
        source: "./assets/1984.jpg",
        bookTitle : "1984",
        authorName: "George Orwell",
        copiesAvailable: 12,
        finalPrice: 230,
        basePrice: 250
    },
    {   
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "The Da Vinci Code",
        authorName: "Dan Brown",
        copiesAvailable: 14,
        finalPrice: 280,
        basePrice: 300
    },
    {
        source: "./assets/da-vinci-code.jpg",
        bookTitle : "Inferno",
        authorName: "Dan Brown",
        copiesAvailable: 5,
        finalPrice: 210,
        basePrice: 240
    },
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 8,
        finalPrice: 80,
        basePrice: 100
    }
]
// console.log("This is an automatically generated message");
var bookList = document.querySelector('.book-list');

//an event listener that check the following function should run once the contents loaded
// document.addEventListener("DOMContentLoaded", function() {
function loadCart (){
    for (i = 0; i < bookshop.length; i++) {
        var bookshopItem = bookshop[i];
        loadItems(bookshopItem);
    }
// });
}

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
                                <button type="button" class="del-item p-1rem fs-1-25rem">&minus;</button>
                                <span class="item-on-cart p-1rem fs-1-25rem" id="item-on-cart${i}">1</span>
                                <button type="button" class="add-item p-1rem fs-1-25rem">&plus;</button>
                            </div>
                            <div class="list-item-price w-10">
                                <p><span class="final-price fs-1-25rem" id="final-price${i}">${item.finalPrice}</span> Tk.</p>
                                <p><s class="color-red"><span class="base-price fs-1-125rem" id="base-price${i}">${item.basePrice}</span> Tk.</s></p>
                            </div>`;
    bookList.appendChild(itemToLoad);
}

loadCart();                                                                         // all the items are loaded as per array, dynamically

var addItemBtns = document.querySelectorAll('.add-item');                           // returns nodelist of all add-item btns
var delItemBtns = document.querySelectorAll('.del-item');                           // returns nodelist of all del-item btns
var checkboxes = document.querySelectorAll('.item-selector');                       // returns nodelist of all checkboxes for items on cart
var subtotalFinal = document.querySelector('#purchase-total-final');
var subtotalBase = document.querySelector('#purchase-total-base');
var subTotal = document.querySelector('#subtotal');
var onlineFee = document.querySelector('#online-fee');
var total = document.querySelector('#total');
var payableTotal = document.querySelector('#payable-total');

for (let i = 0; i < addItemBtns.length; i++) {
    addItemBtns[i].addEventListener('click', function(event){                        // An event listener to check for click event on add-item button
        var itemToBuy = Number(event.target.previousElementSibling.innerText);       // targets the value of the colsest item-on-cart class 
        if (itemToBuy < 5) {                                                         // checks if there is already 5 copies of that item on cart    
            itemToBuy++;                                                             // increase the number of item by one
            event.target.previousElementSibling.innerText = itemToBuy;               // show the number of item
            unitPriceCal(event, i, itemToBuy);                                       // calculate total price of added units of that item
            if (event.target.parentNode.parentNode.querySelector('.item-selector').checked){        // checks if the item-selector is checked, invokes totalPriceCal funtion if true
                totalPriceCal();
            }
        }
    });
}

for (let i = 0; i < delItemBtns.length; i++) {
    delItemBtns[i].addEventListener('click', function(event){                        // An event listener to check for click event on add-item button
        var itemToBuy = Number(event.target.nextElementSibling.innerText);           // targets the value of the colsest item-on-cart class 
        if (itemToBuy >= 2) {                                                        // ensure atleast 1 copies of that item on cart    
            itemToBuy--;
            event.target.nextElementSibling.innerText = itemToBuy;
            unitPriceCal(event, i, itemToBuy);
            if (event.target.parentNode.parentNode.querySelector('.item-selector').checked){
                totalPriceCal();
            }
        }
    });
}

document.addEventListener('change', function(event) {                                 // a event listener to checkbox on every item to check if the item is selected or not
    if (event.target.classList.contains('item-selector')) {
        totalPriceCal();
    }
});


// a function to calculate the total price of added units 
function unitPriceCal(event, i, itemToBuy) {
    var unitLinker = bookshop[i];                                                    // links the specefic object in the array
    var totalUnitFinalPrice = 0;                                                    
    var totalUnitBasePrice = 0;
    var unitFinalPrice = Number(unitLinker.finalPrice);
    var unitBasePrice = Number(unitLinker.basePrice);
    totalUnitFinalPrice = itemToBuy * unitFinalPrice;
    totalUnitBasePrice = itemToBuy * unitBasePrice;
    event.target.parentNode.nextElementSibling.querySelector('.final-price').innerText = totalUnitFinalPrice;
    event.target.parentNode.nextElementSibling.querySelector('.base-price').innerText = totalUnitBasePrice;
}
 
// a function to calculate the total price of all the selected items of the items on cart
function totalPriceCal() {
    var totalPriceF = 0;
    var totalPriceB = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            totalPriceF = totalPriceF + Number(checkboxes[i].parentNode.parentNode.querySelector('.final-price').innerText);
            totalPriceB = totalPriceB + Number(checkboxes[i].parentNode.parentNode.querySelector('.base-price').innerText);
        }
    }
    subtotalFinal.innerText = `${totalPriceF} Tk.`;
    subtotalBase.innerText = `${totalPriceB} Tk.`;
    subTotal.innerText = `${totalPriceF} Tk.`;
    onlineFee.innerText = `${Math.round(totalPriceF * 0.03)} Tk.`;
    total.innerText = `${Math.round(totalPriceF + (totalPriceF * 0.03))} Tk.`;
    payableTotal.innerText = `${Math.round(totalPriceF + (totalPriceF * 0.03))} Tk.`;

}