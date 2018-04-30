import React, {Component} from 'react';
import TodoList from '../containers/TodoList';
import Header from "./Header";
import '../styles/_app.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <div className="app-content">
               <div className="wrapper">
                  <TodoList />
               </div>
            </div>
         </div>
      );
   }
}

export default App;
