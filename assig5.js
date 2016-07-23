var storeObject = function(location,minCustomer,maxCustomer,avgCS, id) {
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
        var listValues = new Array(0);
        for (var i = 0; listValues.length < 9; i++) {
            listValues.push(this.cookiesNeed());
            document.getElementById(id).innerHTML += "<td>" + listValues[i] + "</td>";
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById(id).innerHTML += "<td> Total =" + total + "</td>";
    }
}

var store = [
  new storeObject("Pioneer Square",17, 88,5.2,"psq");
  new storeObject("Portland Airport",6,24,1.2,"pdx");
  new storeObject("Washington Square",11,38,1.9,"wsq");
  new storeObject("Sellwood",20,48,3.3,"sw");
]

store[0].thirdFunction();

var sellwood = {
    minCustomer: 20,
    maxCustomer: 48,
    avgCS: 3.3,

    randomCustomerPerHour: function(maxCustomer, minCustomer) {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    },

    cookiesNeed: function(rcpH, avgCS) {
        var cNeed = this.randomCustomerPerHour() * this.avgCS;
        return Math.ceil(cNeed)
    },

    thirdFunction: function() {
        var listValues = new Array(0);
        for (var i = 0; listValues.length < 9; i++) {
            listValues.push(this.cookiesNeed());
            document.getElementById("sw").innerHTML += "<td>" + listValues[i] + "</td>"
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById("sw").innerHTML += "<td> Total =" + total + "</td>"

    }
}
sellwood.thirdFunction()

var pearlDistrict = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCS: 2.6,

    randomCustomerPerHour: function(maxCustomer, minCustomer) {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
    },

    cookiesNeed: function(rcpH, avgCS) {
        var cNeed = this.randomCustomerPerHour() * this.avgCS;
        return Math.ceil(cNeed)
    },

    thirdFunction: function() {
        var listValues = new Array(0);
        for (var i = 0; listValues.length < 9; i++) {
            listValues.push(this.cookiesNeed());
            document.getElementById("pd").innerHTML += "<td>" + listValues[i] + "</td>"
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById("pd").innerHTML += "<td> Total =" + total + "</td>"

    }
}
pearlDistrict.thirdFunction()
