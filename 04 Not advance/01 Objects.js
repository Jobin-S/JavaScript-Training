var user = function(firstname, age){
    this.firstname = firstname.toUpperCase()
    this.age = age
    this.getDetails = ()=>{
        console.log(`${this.firstname} is ${this.age} years old.`);
    }

}

user.prototype.getUserName = function(){
    console.log(`Your name is ${this.firstname}`);
}

let jobin = new user('JOBIN', 17)
jobin.getDetails()
if (jobin.hasOwnProperty('firstname')) {
    jobin.getUserName()
}

let stephin = new user('Stephin', 9)
stephin.getDetails()