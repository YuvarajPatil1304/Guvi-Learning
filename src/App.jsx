import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState('');
  const [todo, setTodo] = useState([]);
  const [input2, setInput2] = useState('');
  const [status,setstatus] = useState("Not Completed");


  const addtodo = (todo1,todo2) => {
    const newtodo = {
      id: Math.random(),
      todo1: todo1,
      todo2: todo2, 
      status: status,
    };
    setTodo([...todo,newtodo]);
    setInput1("");
    setInput2("");
  }

  const deletetodo = (id) => {
    const newList = todo.filter((data) => data.id !== id);
    setTodo(newList);
  };
  
  const completed_filter = (value) => {
    const newList = [...todo].filter((data) => data.status == value);
    console.log(newList);
    newList.map((data) => data.status == value);
  }
  const notcompleted_filter = (value) => {
    const newList = [...todo].filter((data) => data.status == value);
    console.log(newList);
    newList.map((data) => data.status == value);
  }

  const click_completed = (id) => {
    const newList = [...todo];
    setTodo(
    newList.map((data) => 
    {
      if(data.id === id)
      {
        data.status = "Completed"
      }
      return data;
    }
    )
    );
  };

  const click_notcompleted = (id) => {
    const newList = [...todo];
    setTodo(
    newList.map((data) => 
    {
      if(data.id === id)
      {
        data.status = "Not Completed"
      }
      return data;
    }
    )
    );
  };


  const changehandler1 = (e) => {
      setInput1(e.target.value);
    }
  const changehandler2 = (e) => {
      setInput2(e.target.value);
    }

  return (
    <>
      <div className='container'>
        <h2>My todo</h2>
        <div className="row rowgap">
          <div className="col">
            <input className="todoinput" type='text' name='Todo Name' placeholder='Todo Name' size="40" value={input1} onChange={changehandler1} />
          </div>
          <div className="col">
            <input className="todoinput" type='text' name='Todo Name' placeholder='Todo Description' size="40" value={input2} onChange={changehandler2}/>
          </div>
          <div className="col">
            <button className='AddTodo_button btn btn-success' onClick={() => addtodo(input1,input2)}>Add Todo</button>
          </div>
        </div>
        <div className="row rowgap">
          <div className="col-8 text-start">
            <h4>My Todos</h4>
          </div>
          <div className="col-4 text-end">
            <div className="row">
              <div className="col text-end">
                <h4>Status Filter :</h4>
              </div>
              <div className="col-auto">
              <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => completed_filter("Completed")}>Completed</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => notcompleted_filter("Not Completed")}>Not Completed</a></li>
                </ul>
              </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
        {todo.map((data) => 
        <div className="col-4 box-col">
        <div className="task_box text-start">
          <p>Name : {data.todo1}</p>
          <p> Description : {data.todo2} </p>
          <div className="row">
            <div className="col-auto">
              <p>Status : </p>
            </div>
            <div className="col">
              <div class="dropdown">
                <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {data.status}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" onClick={() => click_completed(data.id)}>Completed</a></li>
                  <li><a class="dropdown-item" href="#" onClick={() => click_notcompleted(data.id)}>Not Completed</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row rowgap">
            <div className="col text-end">
              <button type="button" class="btn btn-success">Edit</button>
            </div>
            <div className="col-auto">
              <button type="button" class="btn btn-danger" onClick={() => deletetodo(data.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
        )} 

        </div>
      </div>
    </>
  )
}

export default App
