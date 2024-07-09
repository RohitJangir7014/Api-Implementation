# Create a funtion (ex : addTodos)
```
const addTodos = ()=>{
    
}
```
## add try catch for error handling in the addTodos function
```
const addTodos = ()=>{
    try{

    }catch(e){
        console.log(e)
    }
}
```
## create code for headers
```
const addTodos = ()=>{
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
    }catch(e){
        console.log(e)
    }
}
```
## now use the fetch method (note : fetch method accept 2 parameters ('url',{additional information}))
```
const addTodos = ()=>{
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");

        const requestOptions = {
            method:"POST"
        }

        fetch('http://localhost:3000',requestOptions)
    }catch(e){
        console.log(e)
    }
}
```

