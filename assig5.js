var storeObject = function(location, minCustomer, maxCustomer, avgCS, id) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCS = avgCS;
    this.id = id;
    this.randomCustomerPerHour = function(maxCustomer, minCustomer) {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    };
    this.cookiesNeed = function(rcpH, avgCS) {
        var cNeed = this.randomCustomerPerHour() * this.avgCS;
        return Math.ceil(cNeed);
    };
    this.thirdFunction = function() {
        var storeRow = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.innerText = this.location;
        storeRow.appendChild(nameCell);
        var arrayCells = document.createElement("td");
        var listValues = new Array(8);
        for (var i = 0; i < listValues.length; i++) {
            var arrayCells = document.createElement("td" + i);
            listValues[i] = this.cookiesNeed();
            listValuesCell("td", listValues[i]);
        }

        function listValuesCell(id, value) {
            var newCell = document.createElement(id);
            var cellContent = document.createTextNode(value);
            newCell.appendChild(cellContent);
            storeRow.appendChild(newCell);
        }


        var totalCell = document.createElement("td")
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        totalCell.innerText = total;
        storeRow.appendChild(totalCell);
        var table = document.getElementById("shops")
        table.appendChild(storeRow)
    }
}

var store = [
    new storeObject("Pioneer Square", 17, 88, 5.2, "psq"),
    new storeObject("Portland Airport", 6, 24, 1.2, "pdx"),
    new storeObject("Washington Square", 11, 38, 1.9, "wsq"),
    new storeObject("Sellwood", 20, 48, 3.3, "sw"),
    new storeObject("Pearl District", 3, 24, 2.6, "pd"),
]

for (var index = 0; index < store.length; index++) {
    currentStore = store[index];
    currentStore.thirdFunction()
}
