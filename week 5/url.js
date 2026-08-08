const express=require('express');
const app=express()
const PORT=3000;
//route parameters
app.get('/user/:id',(req,res)=>{
    const userid=req.params.id;
    res.send(`<h1>MY PROFILE</h1><p> i am viewing the profile for User ID: <strong>${userid}</strong></p>`);
});
//multiple parameters
app.get('/flights/:from/:to',(req,res)=>{
    const {from,to}=req.params;
    res.send(`searching for flights departing from <b>${from}</b>arriving at<b>${to}</b>`);
});
//query parameter
app.get('/search/',(req,res)=>{
    const category =req.query.category;
    const sort=req.query.sort;
    res.json({
       message:"Search Results",
       filteringBy:category||"None",
       sortingBy:sort||"Default"
    });
});
app.listen(PORT,()=>{
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});