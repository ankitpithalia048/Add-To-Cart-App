var Item = /** @class */ (function () {
    function Item() {
    }
    Object.defineProperty(Item.prototype, "Service", {
        get: function () {
            return this.service;
        },
        set: function (Service) {
            this.service = Service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Price", {
        get: function () {
            return this.price;
        },
        set: function (Price) {
            this.price = Price;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
function cart() {
    var i;
    var total = 0;
    console.log(localStorage.length);
    var j = 0;
    var items;
    for (i in localStorage) {
        if (i == "item")
            break;
        items = new Item();
        var itemInStorage = localStorage[i];
        console.log(itemInStorage);
        var itemSplit = itemInStorage.split("+");
        items.service = itemSplit[0];
        items.price = parseInt(itemSplit[1]);
        total += parseInt(itemSplit[1]);
        //console.log(it);
        var table = document.getElementById("table");
        var row = table.insertRow(j + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = items.Service;
        cell2.innerHTML = items.Price.toString();
        j += 1;
    }
    var table = document.getElementById("table");
    var row = table.insertRow(j + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Total Price";
    cell2.innerHTML = "Rs " + total;
}
