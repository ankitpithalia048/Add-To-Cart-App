(function () {
    var i;
    if (localStorage.getItem("item") == null) {
        localStorage.setItem("item", "0");
        i = 0;
    }
    else {
        i = parseInt(localStorage.getItem("item"));
    }
})();
function addItem(service) {
    var c = service.split("+");

    alert(c[0] + " Service added to cart");
    var i = parseInt(localStorage.getItem("item"));
    localStorage.setItem("service" + i, service);
    i = i + 1;
    localStorage.setItem("item", i.toString());
    console.log(localStorage.length);
}

