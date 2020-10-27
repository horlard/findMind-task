import React,{useState,createContext} from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import History from './components/history'


import Login from './pages/login';
import Signup from './pages/signup';
import TaskPage from './pages/taskPage';
import Modal from './components/Modal'



function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  return (
    <div className="App">
      
      <Router history={History}>
      <appContext.Provider
        value={{
          openModal: component => {
            setModalComponent(component);
            setShowModal(true);
          },
          closeModal: () => setShowModal(false)
        }}
      >
        {showModal ? <Modal>{modalComponent}</Modal> : null}
        <Switch>
          <Route path='/taskPage'>
            <TaskPage/>
          </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route exact path='/'>
          <Login/>
        </Route>
        </Switch>
      </appContext.Provider>
      </Router>
        
        
     
    </div>
  );
}
export const appContext = createContext();
export default App;
