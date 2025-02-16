import generateContent from "../services/ai.service.js";

const content=async (req,res)=>{
 
    const code=req.body.code;
    if(!code){
       return res.send("Prompt is Required")
    }

    const response = await generateContent(code);
    return res.send(response)
}

export default content