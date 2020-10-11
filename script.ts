interface availablePet{
    animal : String;
    age : Number;
    breed: String;
    count?: Number;
}


class Available{
   available:Array<availablePet>;
   matchcount;

   constructor(obj: Array<availablePet>){
       this.available = obj;
       this.matchcount = 0;
   }
   availablePets(){
       console.log('');
       console.log("Pets available for adaption: ");
       for(const pets of this.available){
           console.log(`${pets.count} ${pets.animal} of ${pets.age}, breed: ${pets.breed}.`);
       }
   }
   check(list: Array<String>){
        console.log(" ");
        for(const ele of list){
            let ar = ele.split(',');
            for(let j=0;j<this.available.length;j++){
                if(ar[0] == this.available[j].animal && +(ar[1]) == this.available[j].age && ar[2] == this.available[j].breed){
                    console.log(`${ar[0]} of ${ar[1]} and ${ar[2]} breed is available`);
                    this.matchcount += 1;
                    break;
                }
            }
            if(this.matchcount == 1){
                this.matchcount = 0;
            }
            else{
                console.log(`${ar[0]} of ${ar[1]} and ${ar[2]} breed is not available`);
            }
        }
   }
}

class request {
    reqlist;
    constructor(){
        this.reqlist = [];
    }
    add(requ: String){
        this.reqlist.push(requ);   // The string is in the form of animal, age, breed seperated by ',' .
    }
    dispRequest(){
        console.log("");
        console.log("All the Requests recieved: ");
        for(let requ of this.reqlist){
            console.log(requ);
        }
    }
}

var Availablepets = new Available([
    {animal:'Dog', age:5, breed:"Huskey", count:4},
    {animal:'Cat', age:3, breed:"Birman"},
    {animal:'Parrot', age:1, breed:"Macaw", count:3},
    {animal:'Dog', age:10, breed:"Labardor Retreiver", count:8}
]);

var requestList = new request();

Availablepets.availablePets();

requestList.add("Dog,5,Huskey");
requestList.add("Dog,5,Golden Retreiver");
requestList.add("Parrot,1,Macaw");
requestList.add("Guinea Pig,1,Cuy");

requestList.dispRequest();

Availablepets.check(requestList.reqlist)