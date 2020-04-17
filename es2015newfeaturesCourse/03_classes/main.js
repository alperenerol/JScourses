"use strict"

class User{
  constructor(username, email, password){
      this.username = username; // passed in properties
      this.email = email;
      this.password = password;
  }

  static countUsers(){ //static always same no matter what happens, it just echos There are 50 users
    console.log('There are 50 users');
  }

  register(){
    console.log(this.username+' is now registered');
  }
}

//let bob = new User('bob', 'bob@email.com', '12345');
//bob.register();
//User.countUsers();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password);
   /*  // jobs of super is  
    this.username = username; // passed in properties
    this.email = email;
    this.password = password; */
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username+' is subscribed to the '+this.package+' package');
  }
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Standard');

mike.getPackage();
mike.register();
