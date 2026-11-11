import app from "../app/app.js"
import connectDb from "../config/db.js";

const port = 3000;

 await connectDb()
app.listen(port , ()=>{
  console.log(`server is running at ${port}`);
  
})