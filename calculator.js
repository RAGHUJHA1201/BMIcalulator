const express=require("express");
const bodyParser=require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended: true})) // extended allows t o post neesses=ry object, we must write it as bodyParser require it.
app.get("/", function(req, res){
res.sendFile(__dirname+"/calculator.html");
})
app.post("/",function(req, res){
 console.log(req.body)   //


 var num1=Number(req.body.num1)
 var num2=Number(req.body.num2) // Number will convert it number ... else it will passed as text..
 var result= num1+num2; // without using Number output will be 45 and with using the Number it will be 9
res.send("Result is " + result);
})


app.get("/bmical", function(req, res){
   res.sendFile(__dirname+"/BMI.html");
   })
   app.post("/bmical",function(req, res){
    console.log(req.body)   //
   
   //Create your function below this line.
   //The first parameter should be the weight and the second should be the height.
   
   
   
   
   /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
   
   var bmi = bmiCalculator(65, 1.8); 
   
   bmi should equal 20 when it's rounded to the nearest whole number.
    var num2=Number(req.body.num2) // Number will convert it number ... else it will passed as text..
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2) 
   */ 
   var height=Number(req.body.height);
   var weight=Number(req.body.weight);;
   var BMI= Math.floor(weight/(height*height));
     
    res.send("BMI is " + BMI) })
       
app.listen(3008, function(){
   console.log("Server started on Port");
})
// body parcer allows to go into any of the route and we can tap into body
// body parcer help us pass the http request and urlecoded link we getaccess to form data