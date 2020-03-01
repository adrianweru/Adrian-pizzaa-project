$("document").ready(function(){
  function person (name,phone,email){
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  person.prototype.profile = function(){
    $("#name").text("Your name is "+this.name)
    $("#email").text("Your Email address is" +this.email)
    $("#phone").text("Your Phone number is "+this.phone)
  }
  $("#profile").click(function(){
    let name = $(".name").val();
    let email= $(".Email").val();
    let phone= $(".phone").val();
    let location= $(".location").val();
    let user = new person(name,email,phone,location)

    user.profile()
  })
  function ordering(size,toppings,delivery,type,number){
    this.size = size;
    this.toppings= toppings;
    this.delivery = delivery;
    this.type = type;
    this.number = number;
  }
  ordering.prototype.price = function(){
    let price=0;
    let Total=0;
    if (this.size === "Large"){
      price=1000;
      Total = price + 400;
      Total = Total * this.number;
    }
    else if (this.size === "Medium"){
         price = 750;
         Total = price + 400;
         Total =Total * this.number;
     }
     else if(this.size ==="small"){
         price=450;
         Total = price + 400;
         Total = Total * this.number;
  }
  else alert("Enter your preferences in the appropriate manner")
  var delivery=prompt("Would you like to be delivered to or come to our restaurant ?")
  if(delivery === "delivered"){
    alert("your meal is on your way but you have to pay 350 for the delivery expense")
    Total = Total + 350;
    var location=prompt("please enter your residence sir or madam")
    $("#location").text("Your location is" +location)
  }
  else if (delivery === "come to our restaurant"){
    alert("we are expecting you soon and welcome in advance");
  }
  else alert("enter your details correctly")
  $("#details").text("Your pizza will be ready soon, the total price is " +Total +"Your order is "+this.type +" And your pizza size is " this.size);
})
