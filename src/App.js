import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TAREAS} from './todos.json';
import Formulario from './components/Formulario';
class App extends Component {
  constructor(){
    super();
    this.state={
      title:"Aplicacion de Tareas",
    TAREAS
    }
  }
  render() {
    const todos=this.state.TAREAS.map((todo,i)=>{
      return(
        <div  className="col-md-4">
          <div className="card mt-5">
              <div className="shadow-lg p-3 mb-5 bg-black rounded card-header ">
                  <h3>{todo.title}</h3>
                  <span className="badge badge-info ml-1">
                  {todo.prority}
                  </span>
              </div>
              <div className="card-body">
                  <p className="text-primary shadow-lg p-3 mb-5">{todo.description}</p>
                  <p>{todo.responsible}</p>
              </div>
              </div>
        </div>
      )
    })
    return (
      <div className="App">
          <nav className="alert alert-secondary" role="alert">
              <a className="text-blue">
                <h5>T A R E A S <h5>
                  </h5> P E N D I E N T E S</h5>
                 <span className=" badge badge-secondary ml-2">
                 <h5>{this.state.TAREAS.length}</h5>
                 </span>
              </a>
          </nav>
          <div className="container">
              <div className="row mt-5">
              {todos}

              </div>
          </div>

                  <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
