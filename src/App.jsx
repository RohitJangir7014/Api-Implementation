

import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState('')

  const getTodos =()=>{
    fetch('http://localhost:7000/gettodos',{
      method:"GET"
    })
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTodos(result);
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  const AddTodo = ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    fetch('http://localhost:7000/addtodos',{
      method:"POST",
      body:JSON.stringify({
        name:todo
      }),
      headers:myHeaders
    })

    .then((response)=>{return response.json()})
    .then((result)=>{
      if(result.status==="001"){
        toast.success("todo added successfully");
        getTodos();
        handleClose();
      }else{
        toast.error("todo not added")
        handleClose()
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <>

<ToastContainer />
    <div className='p-2 d-flex justify-content-end' >
      <button className='btn btn-primary' onClick={handleShow} >Add todo</button>
    </div>
        {
          todos.map((data,value)=>{
            return(
              <div>
                {/* <h3>{data._id}</h3> */}
                <h3>{data.name}</h3>
                <hr/>
              </div>
            )
          })
        }




<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' placeholder='enter todo name' onChange={(e)=>setTodo(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-warning' onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-primary' onClick={AddTodo}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App