const getToPreviousId=()=>{
 const Book_list= localStorage.getItem('book_list');
 if(Book_list){
    //convert to Object --> Book_list  
    const book_Storage_list= JSON.parse(Book_list);
    return book_Storage_list;
 }
 else{
    return []
 }

}
const addToLocalStorage=(id)=>{
  
 const StorageId=getToPreviousId()
 
 if(StorageId.includes(id)){
   console.log('your id alread storage')
   
 }
 else{
    StorageId.push(id);
    const book_Storage_list= JSON.stringify(StorageId);
    localStorage.setItem('book_list',book_Storage_list)
 }
}

export {addToLocalStorage,getToPreviousId}