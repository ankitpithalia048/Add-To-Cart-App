class Item{
    service : string;
    price : number;
    
    public get Service() : string {
        return this.service;
    }
    
    public set Service(Service : string) {
        this.service = Service;
    }
    
    public set Price(Price : number) {
        this.price = Price;
    }
    
    public get Price() : number {
        return this.price;
    }
    
    
}

function cart(){
  
   var i : any;
   var total = 0;
   console.log(localStorage.length);
   var j=0;
   
   
   var items:Item;
   for(i in localStorage)
   {
    if(i== "item") break;
     
     items = new Item();
     var itemInStorage = localStorage[i];
     console.log(itemInStorage);
    var itemSplit = itemInStorage.split("+");
    items.service = itemSplit[0];
    items.price = parseInt(itemSplit[1]);
    total+=parseInt(itemSplit[1]);
     //console.log(it);
     var table = document.getElementById("table") as HTMLTableElement;
     var row = table.insertRow(j+1);
     
     var cell1 = row.insertCell(0);
     var cell2  =row.insertCell(1);
     
     cell1.innerHTML = items.Service;
     cell2.innerHTML = items.Price.toString();
     j+=1;
    
      }
var table = document.getElementById("table") as HTMLTableElement;
var row = table.insertRow(j+1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

cell1.innerHTML = "Total Price";
cell2.innerHTML = "Rs "+ total;
}