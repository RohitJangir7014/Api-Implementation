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

        fetch('hhttp://localhost:7000/addtodos',requestOptions)
    }catch(e){
        console.log(e)
    }
}
```
## also send the body and headers with the api
```
const addTodos = ()=>{
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");

        const raw = JSON.stringify({
            name:todo
        })

        const requestOptions = {
            method:"POST",
            body:raw,
            headers:myHeaders
        }

        fetch('http://localhost:7000/addtodos',requestOptions)
    }catch(e){
        console.log(e)
    }
}
```
## after this use the .then method
```
const addTodos = ()=>{
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");

        const raw = JSON.stringify({
            name:todo
        })

        const requestOptions = {
            method:"POST",
            body:raw,
            headers:myHeaders
        }

        fetch('http://localhost:7000/addtodos',requestOptions)
        .then((response)=>{return response.json()})
    .then((result)=>{
      if(result.status==="001"){
        getTodos();
      }
    })
    }catch(e){
        console.log(e)
    }
}
```


