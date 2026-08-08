//importing express 
const express =require('express')
//intializing the app
const app=express();
//setting the port
const Port=3000;
//Home routr
app.get('/',(req,res)=>{
    res.send("Welcome to express server");
});
//About route
app.get('/about',(req,res)=>{
res.send("This is about the page");
}
);
//student route
app.get('/student',(req,res)=>{
    res.send("student name : Kavyanjali");
});
//start server
app.listen(Port,()=>{
    console.log(`server running at host http://localhost:${Port} `);
});