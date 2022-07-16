const dbConnect=require('./db')
console.log(dbConnect)

async function deleteData(){
    const collection=await dbConnect();
     let  data= await collection.deleteOne({name:"max 5"})
      console.log(data)



}
deleteData();