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

let selectionPanel = document.querySelector(".selection-panel");                    // a variable to target the selection panel
let allItemSelector = document.querySelector('.all-selector');                      // targets the all-selector button of the page
let allSelCount = document.querySelector('#total-selected-items');                  // a variable to show the number of selected items
let basePriceTotal = document.querySelector('#purchase-total-base');                // a variable to show the total base price of selected items
let finalPriceTotal = document.querySelector('#purchase-total-final');              // a variable to show the total final price of selected items
let warningPanel = document.querySelector('.warning-panel');                        // a variable to control the warning panel
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
warningShow();                                                                      // shows the warning panel

let itemSelectors = bookList.querySelectorAll('.item-selector');                    // returns all the checkbox input available on booklist
let moveToBin = bookList.querySelectorAll('.item-bin');                             // return all the trash icons from the list

// let closure = (e) => {
//     if (e.propertyName === 'height') {
//         warningPanel.style.display = "none";
//         warningPanel.removeEventListener('transitionend', closure);
//     }
// }

function closure(e) {                                                               // a function to check if the transition event completed 
    if (e.propertyName === 'height') {                                              // checks if the event to cause transition is height, beacuse it is longer than other
        warningPanel.style.display = "none";                                        // hides the display
        warningPanel.removeEventListener('transitionend', closure);                 // removes the event listener from warning panel, for smooth functioning
    }
}

// let warningShow = () => {
//     warningPanel.removeEventListener('transitionend', closure);
//     warningPanel.children[0].children[1].textContent = 'Please select at least 1 product';
//     warningPanel.style.display = "flex";
//     warningPanel.offsetHeight;
//     warningPanel.style.height = "3rem";
//     warningPanel.style.padding = "1rem";
//     warningPanel.style.marginBottom = "1rem";
    
// }

function warningShow() {                                                            // a function to show notify the user to select atleast one product
    warningPanel.removeEventListener('transitionend', closure);                     // removes if any previous transitionend event present
    warningPanel.children[0].children[1].textContent = 'Please select at least 1 product';          // set the innerText of the target element
    warningPanel.style.display = "flex";                                            // make the warning panel visible
    warningPanel.offsetHeight;                                                      // checks for layout recalculation, before transition to take place,
                                                                                    // if not invoked, the element present itself hidden to visible in a abrupt way, no gradual appearance
    warningPanel.style.height = "3rem";                                             // set the height of the warning panel
    warningPanel.style.padding = "1rem";                                            // set the padding of the warning panel
    warningPanel.style.marginBottom = "1rem";                                       // set the bottom margin of the warning panel
}

let warningHide =()=> {                                                             // a function to hide the warning panel when invoked
    warningPanel.children[0].children[1].textContent = '';                          // removes the textContent of the target element for smooth transition
    warningPanel.style.height = "0";                                                // set the elements height
    warningPanel.style.padding = "0";                                               // sets the elements padding
    warningPanel.addEventListener('transitionend', closure);                        // an eventlistener to the warning panel, which checks if the transition event completed
                                                                                    // once the event is completed, it will call the closure function
                                                                                    // that is why the closure function is declared as reference, where closure() invokes the function immeadiately
}

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
    let i = e.target.id.slice(-1);                                                  // identify the index value of the item on the database
    let maxQty = itemOnDbase[i].copiesAvailable;                                    // takes the value of copies available of the target product
    let iOnCart = Number(e.target.previousElementSibling.innerText);                // takes the current number of items on cart
    let availableCopies = Number(e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText);   // target the number of copies available to purchase
    if (iOnCart <= maxQty && availableCopies > 0) {                                 // ensure maximum quantity of items on cart, if any product remains available
        iOnCart++;                                                                  // adds one more item on the cart
        availableCopies--;                                                          // reduce the number of copies by one
        e.target.previousElementSibling.innerText = iOnCart;                        // update the number of items on cart
        e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;           // updates the number of copies available
        itemPriceCal(e, iOnCart);                                                   // update total final price and base price of the added items
    }
    if (iOnCart > maxQty) {
        tooltip(e);                                                                 // shows warning if the number of item on cart exceeds the number of copies available
    }
}

let delItem = e => {                                                                //  a function when invoked, deletes an item from the cart
    let iOnCart = Number(e.target.nextElementSibling.innerText);                    // takes the current number of items on cart
    let availableCopies = Number(e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText);   // target the number of copies available to purchase
    if (iOnCart >= 2) {
        iOnCart--;                                                                  // deletes one item from the cart
        availableCopies++;                                                          // increase the number of copies available
        e.target.nextElementSibling.innerText = iOnCart;                            // update the number of items on cart
        e.target.parentNode.previousElementSibling.querySelector('.copies-available-number').innerText = availableCopies;            // updates the number of copies available
        itemPriceCal(e, iOnCart);                                                   // update total final price and base price of the added items
    }
    if (iOnCart == 1) {                                                         
        tooltip(e);                                                                 // ensure atleast one product placed on the cart
    }
}

let itemPriceCal = (e, n) => {                                                      // a function to calculate to the total final price and total base price of added items on cart, using the event and number of item as variable
    let item = itemOnDbase[e.target.id.slice(-1)];                                  // collects the index number of the item as per event target to track final price and base price form database
    let itemFp = item.finalPrice;                                                   // takes the items final price
    let itemBp = item.basePrice;                                                    // takes the items base price
    let itemTfp = e.target.parentNode.nextElementSibling.firstElementChild.firstElementChild;                                       // targets the element to show the total final price
    let itemTbp = e.target.parentNode.nextElementSibling.lastElementChild.firstElementChild.firstElementChild;                      // targets the element to show the total base price
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

let tooltip = (e) => {                                                              // a function to show tooltip when required
    let pNode = e.target;                                                           // targets the parent node for the tooltip to show
    let cNode = document.createElement('div');                                      // create a blank div
    cNode.className = "tooltip p-absolute fs-1rem p-1rem";                          // add class to the newly created div
    cNode.innerHTML = e.target.getAttribute("warning-text");                        // get the warning text from the target node's attribute
    pNode.appendChild(cNode);                                                       // append the div to the parent node
    let tooltipRemove = () => {                                                     // a function to remove the tooltip
        cNode.remove();
    }
    setTimeout(tooltipRemove, 3000);                                                // set timeout function to remove the tooltip after 3s
}

bookList.addEventListener('click', e => {                                           // add event listner to booklist to check for click events
    if(e.target.classList.contains("add-item")) {                                   // check for click events on add-item btns
        addItem(e);                                                                 // increase the number of that item on cart
        subtotalCal();
    };
    if (e.target.classList.contains("del-item")) {                                  // checks for click events on del-item btns
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
        warningHide();    
        itemSelectors.forEach(i => {                                    
            if (!i.parentNode.parentNode.classList.contains('trashed')) i.checked = true;       // if turned on, turns on the checkboxes for item that is on the list, not moved to trash
        });
    };
    if (!e.target.checked) {
        itemSelectors.forEach(e => e.checked = false);                              // if uncheckd, turns off the checkboxes for all item
        warningShow();
    };
    subtotalCal();                                                                  // calculates the total price of existing items on the list
})

warningClose.addEventListener('click', ()=> warningHide());