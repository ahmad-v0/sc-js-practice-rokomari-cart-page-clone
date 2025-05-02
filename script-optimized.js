// databse of books stored as object in a array
const itemOnDbase = [
    {
        source: "./assets/sepiens.jpg",
        bookTitle : "Sepiens - A Brief History of Humankind ",
        authorName: "Yuval Noah Harari",
        copiesAvailable: 3,
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
        copiesAvailable: 4,
        finalPrice: 180,
        basePrice: 200
    },
    {
        source: "./assets/1984.jpg",
        bookTitle : "1984",
        authorName: "George Orwell",
        copiesAvailable: 2,
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

let allItemSelector = document.querySelector('.all-selector');                      // targets the all-selector button of the page
let allSelCount = document.querySelector('#total-selected-items');                  // a variable to show the number of selected items
let basePriceTotal = document.querySelector('#purchase-total-base');                // a variable to show the total base price of selected items
let finalPriceTotal = document.querySelector('#purchase-total-final');              // a variable to show the total final price of selected items
let warningClose = document.querySelector('#warning-close');                        // a variable to access the close button of warning pannel
let bookList = document.querySelector('.book-list');                                // a variable for booklist database
let selectAll = document.querySelector('.all-selector');                            // a variable for the checkbox to select all items on the list
let selItemTotal = document.querySelector('#total-selected-items');                 // a variable to show the number of selected items
let baseSubtotal = document.querySelector('#base-subtotal');                        // a variable to show the total of all items base price
let finalSubtotal = document.querySelector('#final-subtotal');                      // a variable to show the total of all items final price
let subTotal = document.querySelector('#subtotal');                                 // a variable to show the subtotal of selected items
let onlineFee = document.querySelector('#online-fee');                              // a variable to show the online fee incurred on subtotal
let total = document.querySelector('#total');                                       // a variable to show the total price
let payableTotal = document.querySelector('#payable-total');                        // a variable to show the payable total

let loadItems = (items) => {                                                        // a function to load all the items from the database
    items.forEach((elem, index) => {
        let itemHolder = document.createElement('div');                             
        itemHolder.className = "list-item p-1rem border-bottom-solid d-flex space-between align-center";
        itemHolder.innerHTML = `
                                <div class="list-item-details w-60 d-flex gap-1rem">
                                <input type="checkbox" name="item-selector" class="item-selector" id="item-selector${index}">
                                <div class="item-img w-5rem">
                                    <img src="${elem.source}" alt="${elem.bookTitle}" class="w-100" id="item-source${index}">
                                </div>
                                <div class="item-txt d-flex flex-column space-between align-start">
                                    <p class="item-title fs-1-25rem" id="item-title${index}">
                                    ${elem.bookTitle}
                                    </p>
                                    <p class="item-author fs-1-125rem" id="item-author${index}">
                                    ${elem.authorName}
                                    </p>
                                    <img src="./assets/icon-trash.svg" alt="trash" class="svg-icon item-bin">
                                    <p class="copies-available color-red">
                                        Only <span class="copies-available-number" id="copies-availabe${index}">${elem.copiesAvailable}</span> copies available
                                    </p>
                                </div>
                                </div>
                                <div class="list-item-btns w-30">
                                    <button type="button" class="del-item p-1rem fs-1-25rem p-relative" id="delItem${index}" warning-text = "Please enter a value greater than or equal to 1">&minus;</button>
                                    <span class="item-on-cart p-1rem fs-1-25rem" id="item-on-cart${index}">1</span>
                                    <button type="button" class="add-item p-1rem fs-1-25rem p-relative" id="addItem${index}" warning-text ="You can purchase maximum ${elem.copiesAvailable} of this item"
                                    >&plus;</button>
                                </div>
                                <div class="list-item-price w-10">
                                    <p><span class="final-price fs-1-25rem" id="final-price${index}">${elem.finalPrice}</span> Tk.</p>
                                    <p><s class="color-red"><span class="base-price fs-1-125rem" id="base-price${index}">${elem.basePrice}</span> Tk.</s></p>
                                </div>
            `;
        bookList.appendChild(itemHolder);
    });
}

loadItems(itemOnDbase);
allItemSelector.checked = false;                                                    // uncheck the all item selector

let itemSelectors = bookList.querySelectorAll('.item-selector');                    // returns all the checkbox input available on booklist
let moveToBin = bookList.querySelectorAll('.item-bin');                             // return all the trash icons from the list

moveToBin.forEach(i => {                                                            
    i.addEventListener('click', e => {                                              // eventlistener added to the all trash icons
        let itemToMove = e.target.parentNode.parentNode.parentNode;                 // a variable to select the target item
        let itemCheck = e.target.parentNode.parentNode.firstElementChild;           // a variable to select the checkbox of target item
        itemCheck.checked = false;                                                  // uncheck the target item
        itemToMove.classList.add('trashed');                                        // a class added to the target item to distinguish it from the others
        itemToMove.remove();                                                        // removes the target item from the list
        subtotalCal();                                                              // calculates the total price of existing items
    })
})

let addItem = e => {                                                                // a function when invoked, adds items on the cart
    let iOnCart = Number(e.target.previousElementSibling.innerText);                // takes the current number of items on cart
    let availableCopies = Number(e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText);   // target the number of copies available to purchase
    if (iOnCart < 5 && availableCopies > 0) {                                       // ensure maximum 5 items on cart, if any product remains availabel
        iOnCart++;                                                                  // adds one more item on the cart
        availableCopies--;                                                          // reduce the number of copies by one
        e.target.previousElementSibling.innerText = iOnCart;                        // update the number of items on cart
        e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;       // updates the number of copies available
        itemPriceCal(e, iOnCart);                                                   // update total final price and base price of the added items
    }
}

let delItem = e => {                                                                //  a function when invoked, deletes an item from the cart
    let iOnCart = Number(e.target.nextElementSibling.innerText);                    // takes the current number of items on cart
    let availableCopies = Number(e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText);   // target the number of copies available to purchase
    if (iOnCart >= 2) {
        iOnCart--;                                                                  // deletes one item from the cart
        availableCopies++;                                                          // increase the number of copies available
        e.target.nextElementSibling.innerText = iOnCart;                            // update the number of items on cart
        e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;       // updates the number of copies available
        itemPriceCal(e, iOnCart);                                                   // update total final price and base price of the added items
    }
}

let itemPriceCal = (e, n) => {                                                      // a function to calculate to the total final price and total base price of added items on cart, using the event and number of item as variable
    let item = itemOnDbase[e.target.id.slice(-1)];                                  // collects the index number of the item as per event target to track final price and base price form database
    let itemFp = item.finalPrice;                                                   // takes the items final price
    let itemBp = item.basePrice;                                                    // takes the items base price
    let itemTfp = e.target.parentNode.nextElementSibling.firstElementChild.firstElementChild;                           // targets the element to show the total final price
    let itemTbp = e.target.parentNode.nextElementSibling.lastElementChild.firstElementChild.firstElementChild;          // targets the element to show the total base price
    itemTfp.innerText = itemFp * n;                                                 // updates the total final price
    itemTbp.innerText = itemBp * n;                                                 // updates the total base price
}

let subtotalCal = () => {                                                           // a function to calculate the total base price and total final price of all selected items
    let baseTotal = 0;
    let finalTotal = 0;
    let count = 0;
    itemSelectors.forEach((e) => {
        if (e.checked) {
            count++;
            let totalB = Number(e.parentNode.parentNode.querySelector('.base-price').innerText);
            let totalF = Number(e.parentNode.parentNode.querySelector('.final-price').innerText);
            baseTotal = baseTotal + totalB;
            finalTotal = finalTotal + totalF;
        }
    });
    selItemTotal.innerText = `${count}`;
    baseSubtotal.innerText = `${baseTotal} Tk.`;
    finalSubtotal.innerText = `${finalTotal} Tk.`;
    subTotal.innerText = `${finalTotal} Tk.`;
    onlineFee.innerText = `${Math.round(finalTotal * 0.025)} Tk.`;
    total.innerText = `${finalTotal + Math.round(finalTotal * 0.025)} Tk.`;
    payableTotal.innerText = `${finalTotal + Math.round(finalTotal * 0.025)} Tk.`;
}   

let tooltip = (e) => {
    let pNode = e.target;
    let cNode = document.createElement('div');
    cNode.className = "tooltip p-absolute fs-1rem p-1rem";
    cNode.innerHTML = e.target.getAttribute("warning-text");
    pNode.appendChild(cNode);
    let tooltipRemove = () => {
        cNode.remove();
    }
    setTimeout(tooltipRemove, 3000);
}

bookList.addEventListener('click', e => {                                           // add event listner to booklist to check for click events
    if(e.target.classList.contains("add-item")) {                                   // check for click events on add-item btns
        tooltip(e);
        addItem(e);                                                                 // increase the number of that item on cart
        subtotalCal();
    };
    if (e.target.classList.contains("del-item")) {                                  // checks for click events on del-item btns
        tooltip(e);
        delItem(e);                                                                 // reduce the number of items on cart
        subtotalCal();
    };
});

itemSelectors.forEach((item) => item.addEventListener('change', e => {              // eventlistener for each checkbox for every items on the list
    if (Array.from(itemSelectors).every(e => e.checked)) allItemSelector.checked = true;        // checks of checkboxes for every item is checked; turn on the all item selector checkbox if true
    if (!e.target.checked) allItemSelector.checked = false;                         // turn off the all item selector if an item is unchecked
    subtotalCal();
}))

allItemSelector.addEventListener('change', e => {                                   // event listener to all item selector checkbox to check for changes
    if (e.target.checked) {         
        itemSelectors.forEach(i => {                                    
            if (!i.parentNode.parentNode.classList.contains('trashed')) i.checked = true;       // if turned on, turns on the checkboxes for item that is on the list, not moved to trash
        });
    };
    if (!e.target.checked) {
        itemSelectors.forEach(e => e.checked = false);                              // if uncheckd, turns off the checkboxes for all item
        
    };
    subtotalCal();                                                                  // calculates the total price of existing items on the list
})

/*

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
    itemToLoad.className = 
    itemToLoad.innerHTML = ``;
    bookList.appendChild(itemToLoad);
}

loadCart();                                                                         // all the items are loaded as per array, dynamically

var allItemDiscard = document.querySelectorAll('.item-discard');                    // returns nodelist of all item-discard icons
var addItemBtns = document.querySelectorAll('.add-item');                           // returns nodelist of all add-item btns
var delItemBtns = document.querySelectorAll('.del-item');                           // returns nodelist of all del-item btns
var checkboxes = document.querySelectorAll('.item-selector');                       // returns nodelist of all checkboxes for items on cart
var subtotalFinal = document.querySelector('#purchase-total-final');
var subtotalBase = document.querySelector('#purchase-total-base');
var subTotal = document.querySelector('#subtotal');
var onlineFee = document.querySelector('#online-fee');
var total = document.querySelector('#total');
var payableTotal = document.querySelector('#payable-total');

allItemSelector.checked = false;                                                    // unchecked the all-selector checkbox

allItemSelector.addEventListener('change', function(event) {                        // a event listener to all item selector
    if (event.target.checked) {                                                     // if the all item selector is checked, turns all the individual item selector status into checked
        var selectedItems = 0;
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].classList.contains('removed')){
                checkboxes[i].checked = true;
                selectedItems++;
                totalPriceCal();
                document.querySelector('#total-selected-items').innerText = selectedItems;      // shows the number of items selected
            }
        }
    }
    if (!event.target.checked) {                                                     // if the all item selector is unchecked, turns all the individual item selector status into unchecked
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
            totalPriceCal();
            document.querySelector('#total-selected-items').innerText = 0;                      // shows the number of items selected
        }
    }
});


for (let i = 0; i < allItemDiscard.length; i++) {                                     // loops the nodelist of item-discard icons
    allItemDiscard[i].addEventListener('click', function(event) {                     // add eventlistener to every icon of the nodelist  
    var itemToDiscard = event.target.parentNode.parentNode.parentNode;                // target the ultimate parent element for that item
    event.target.parentNode.parentNode.querySelector('.item-selector').checked = false;         // unchecked the items for correct calculation of total price
    event.target.parentNode.parentNode.querySelector('.item-selector').classList.add('removed');
    itemToDiscard.remove();                                                           // remove the item from the cart, thus from the list
    totalPriceCal();                                                                  // calculates the total price again
    });
}

*/


// for (let i = 0; i < allItemDiscard.length; i++) {                                     // loops the nodelist of item-discard icons
//     allItemDiscard[i].addEventListener('click', function(event) {                     // add eventlistener to every icon of the nodelist
//         bookshop[i].remove();
//     /*  
//     var itemToDiscard = event.target.parentNode.parentNode.parentNode;                // target the ultimate parent element for that item
//     event.target.parentNode.parentNode.querySelector('.item-selector').checked = false;         // unchecked the items for correct calculation of total price
//     event.target.parentNode.parentNode.querySelector('.item-selector').classList.add('removed');
//     itemToDiscard.remove();                                                           // remove the item from the cart, thus from the list
//     */
//     totalPriceCal();                                                                  // calculates the total price again
//     });
// }

/*
for (let i = 0; i < addItemBtns.length; i++) {
    addItemBtns[i].addEventListener('click', function(event){                        // An event listener to check for click event on add-item button
        var itemToBuy = Number(event.target.previousElementSibling.innerText);       // targets the value of the closest item-on-cart class
        
        if (itemToBuy < 5 && availableCopies > 0 ) {                                                         // checks if there is already 5 copies of that item on cart    
            itemToBuy++;                                                             // increase the number of item by one
            availableCopies--;                                                       // decrease the number of copies available by one   
            event.target.previousElementSibling.innerText = itemToBuy;               // show the number of item
            event.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;           // shows the number of copies remaining to purchase
            unitPriceCal(event, i, itemToBuy);                                       // calculate total price of added units of that item
            if (event.target.parentNode.parentNode.querySelector('.item-selector').checked){        // checks if the item-selector is checked, invokes totalPriceCal funtion if true
                totalPriceCal();
            }
        }
    });
}

for (let i = 0; i < delItemBtns.length; i++) {
    delItemBtns[i].addEventListener('click', function(event){                        // An event listener to check for click event on add-item button
        var itemToBuy = Number(event.target.nextElementSibling.innerText);           // targets the value of the closest item-on-cart class
        var availableCopies = Number(event.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText);   // target the number of copies available to purchase 
        if (itemToBuy >= 2) {                                                        // ensure atleast 1 copies of that item on cart    
            itemToBuy--;
            availableCopies++;                                                       // increse the number of copies available by one
            event.target.nextElementSibling.innerText = itemToBuy;
            event.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;           // shows the number of copies remaining to purchase
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
    var totalItemsSelected = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            totalPriceF = totalPriceF + Number(checkboxes[i].parentNode.parentNode.querySelector('.final-price').innerText);
            totalPriceB = totalPriceB + Number(checkboxes[i].parentNode.parentNode.querySelector('.base-price').innerText);
            totalItemsSelected++;
        }
    }

    document.querySelector('#total-selected-items').innerText = totalItemsSelected;      // shows the number of items selected
    subtotalFinal.innerText = `${totalPriceF} Tk.`;
    subtotalBase.innerText = `${totalPriceB} Tk.`;
    subTotal.innerText = `${totalPriceF} Tk.`;
    onlineFee.innerText = `${Math.round(totalPriceF * 0.03)} Tk.`;
    total.innerText = `${Math.round(totalPriceF + (totalPriceF * 0.03))} Tk.`;
    payableTotal.innerText = `${Math.round(totalPriceF + (totalPriceF * 0.03))} Tk.`;

}
*/
