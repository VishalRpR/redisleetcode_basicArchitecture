import express from 'express'
import { createClient } from "redis"


const client = createClient();
const app = express();
app.use(express.json());



app.post("/submin",async (req,res)=>{
    const{userId,language,problemId,code}=req.body;

    //some operation
    try {
        console.log(req.body)
        await client.lPush("submission", JSON.stringify({ userId, language, problemId, code }));

        res.json({
            message: "submission successfull"
        })
        
    } catch (error) {
        res.json({
            message:"submission failed"
        })
    }

   
})

async function startserver() {
    await client.connect();


    app.listen(3000, () => {
        console.log("listening on port 3000")
    })
}

startserver();



