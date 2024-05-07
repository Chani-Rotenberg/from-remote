let arr = [
    {id:1, name:"avi", count:4}, 
    {id:2, name:"yohai", count:18}, 
    {id:3, name:"moshe", count:5}, 
    {id:4, name:"meir", count:1}, 
  ]
   const remove=(name) =>{
    arr=arr.filter(person=>person.name!=name)
    return arr}
  
   const add=(item) =>{arr.push(item)
    return arr}
  //1 action from local

   const update=(name)=>{
    arr=arr.map(person=>{if(person.name==name){person.count++};return person})
    return arr}
   
    module.exports={remove,add,update}