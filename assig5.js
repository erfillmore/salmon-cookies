var constructor = function(location,minCustomer,maxCustomer,avgCS, id) {
this.location = location
this.minCustomer = minCustomer
this.maxCustomer = maxCustomer
this.avgCS = avgCS
this.id = id
}

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
            document.getElementById(id).innerHTML += "<td>" + listValues[i] + "</td>"
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById(id).innerHTML += "<td> Total =" + total + "</td>"

    }
}

var pioneerSquare = {
    minCustomer: 17,
    maxCustomer: 88,
    avgCS: 5.2,
pioneerSquare.thirdFunction()

var pDX = {
    minCustomer: 6,
    maxCustomer: 24,
    avgCS: 1.2,

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
            document.getElementById("pdx").innerHTML += "<td>" + listValues[i] + "</td>"
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById("pdx").innerHTML += "<td> Total =" + total + "</td>"

    }
}
pDX.thirdFunction()

var washingtonSq = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCS: 1.9,

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
            document.getElementById("wsq").innerHTML += "<td>" + listValues[i] + "</td>"
        }
        var total = listValues.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        document.getElementById("wsq").innerHTML += "<td> Total =" + total + "</td>"

    }
}
washingtonSq.thirdFunction()

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
