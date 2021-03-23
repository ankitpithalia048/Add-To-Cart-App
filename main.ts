(() => {
  var i: number;
  if (localStorage.getItem("item") == null) {
    localStorage.setItem("item", "0");

    i = 0;
  } else {
    i = parseInt(localStorage.getItem("item"));
  }
})();

function addItem(service: string) {
 
  var i = parseInt(localStorage.getItem("item"));
  localStorage.setItem("service" + i, service);

  i = i + 1;
  localStorage.setItem("item", i.toString());
  console.log(localStorage.length);
}
