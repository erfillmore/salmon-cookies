var pioneerSquare = {
        minCustomer: 17,
        maxCustomer: 88,
        avgCS: 5.2,

        randomCustomerPerHour: function(maxCustomer, minCustomer) {
            return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
        },

        cookiesNeed: function(rcpH, avgCS) {
            var cNeed = this.randomCustomerPerHour() * this.avgCS;
            return Math.ceil(cNeed)
        },

        lastFunction: function() {
            var listValues = new Array(0)
            for (i = 10; i < 19; i++) {
                listValues.push(this.cookiesNeed())
            }
          return listValues
        }
    }
    // var pdx = {
    //     minCustomer: 6;maxCustomer: 24;avgCS: 1.2
    // }
    // var washingtonSq = {
    //     minCustomer: 11;maxCustomer: 3.8;avgCS: 1.9
    // }
    // var sellwood = {
    //     minCustomer: 20;maxCustomer: 48;avgCS: 3.3
    // }
    // var pearlDistrict = {
    //     minCustomer: 3;maxCustomer: 24;avgCS: 2.6
    // }
