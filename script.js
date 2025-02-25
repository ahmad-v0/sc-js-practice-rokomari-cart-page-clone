function addItem() {
    var item = Number((document.getElementById("itemOnCart-1")).innerText);
    console.log(item);
    if (item < 5) {
        item++;
        document.getElementById("itemOnCart-1").innerText = item;
    } else {
        console.log('Max 5 item can be added to the cart');
    }
}

function delItem(){
    var item = Number((document.getElementById("itemOnCart-1")).innerText);
    console.log(item);
    if (item >= 2) {
        item--;
        document.getElementById("itemOnCart-1").innerText = item;
    } else {
        console.log("You have to purchase minimum 1 item.")
    }
}