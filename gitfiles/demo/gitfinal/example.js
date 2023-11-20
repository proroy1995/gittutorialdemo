let capacity = 200;
let reservedRooms = 0;
let users = [];

let rsBox = document.getElementById('reservebox');

class Reserver {
    constructor(name , lastName , nCode , rooms){
        this.name = name ;
        this.lastName = lastName ;
        this.nCode = nCode ;
        this.rooms = rooms ;
    }

    saveUser(){
        if(this.rooms > capacity){
            console.log('more than capacity');
        }else{
            users.push({
                name : this.name ,
                lastName : this.lastName ,
                id : this.nCode ,
                rooms : this.rooms
            });
            capacity -= this.rooms ;
            reservedRooms += this.rooms ;
        }
    }

    saveData(){
        localStorage.setItem('list',JSON.stringify(users));
    }



}


rsBox.addEventListener('submit',function(e){

    let rsName = document.getElementById('name').value;
    let rsLastName = document.getElementById('lastname').value;
    let rsNationalCode = Number(document.getElementById('nationalcode').value);
    let rooms = Number(document.getElementById('rooms').value);

    //Save the user data
    let sign = new Reserver(rsName , rsLastName , rsNationalCode , rooms);
    sign.saveUser();
    sign.saveData();





    e.preventDefault();
});