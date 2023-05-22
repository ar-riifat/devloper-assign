import express from "express";
import cors from "cors";

const app= express();
app.use(cors());
app.get("/getData",(req,res)=>{
    res.send("HLorem ipsum dolor sit amet, Nullam vel pharetra tortor, Vestibulum eget risus pulvinar, finibus enim vel, blandit augue.");
});

app.listen(4000,()=>console.log("app is running"));