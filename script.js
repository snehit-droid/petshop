var Available = /** @class */ (function () {
    function Available(obj) {
        this.available = obj;
        this.matchcount = 0;
    }
    Available.prototype.availablePets = function () {
        console.log('');
        console.log("Pets available for adaption: ");
        for (var _i = 0, _a = this.available; _i < _a.length; _i++) {
            var pets = _a[_i];
            console.log(pets.count + " " + pets.animal + " of age " + pets.age + ", breed: " + pets.breed + ".");
        }
    };
    Available.prototype.check = function (list) {
        console.log(" ");
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var ele = list_1[_i];
            var ar = ele.split(',');
            for (var j = 0; j < this.available.length; j++) {
                if (ar[0] == this.available[j].animal && +(ar[1]) == this.available[j].age && ar[2] == this.available[j].breed) {
                    console.log(ar[0] + " of " + ar[1] + " and " + ar[2] + " breed is available");
                    this.matchcount += 1;
                    break;
                }
            }
            if (this.matchcount == 1) {
                this.matchcount = 0;
            }
            else {
                console.log(ar[0] + " of " + ar[1] + " and " + ar[2] + " breed is not available");
            }
        }
    };
    return Available;
}());
var request = /** @class */ (function () {
    function request() {
        this.reqlist = [];
    }
    request.prototype.add = function (requ) {
        this.reqlist.push(requ); // The string is in the form of animal, age, breed seperated by ',' .
    };
    request.prototype.dispRequest = function () {
        console.log("");
        console.log("All the Requests recieved: ");
        for (var _i = 0, _a = this.reqlist; _i < _a.length; _i++) {
            var requ = _a[_i];
            console.log(requ);
        }
    };
    return request;
}());
var Availablepets = new Available([
    { animal: 'Dog', age: 5, breed: "Huskey", count: 4 },
    { animal: 'Cat', age: 3, breed: "Birman" },
    { animal: 'Parrot', age: 1, breed: "Macaw", count: 3 },
    { animal: 'Dog', age: 10, breed: "Labardor Retreiver", count: 8 }
]);
var requestList = new request();
Availablepets.availablePets();
requestList.add("Dog,5,Huskey");
requestList.add("Dog,5,Golden Retreiver");
requestList.add("Parrot,1,Macaw");
requestList.add("Guinea Pig,1,Cuy");
requestList.dispRequest();
Availablepets.check(requestList.reqlist);
