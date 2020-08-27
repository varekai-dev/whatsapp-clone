import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
  return (
    <div className="app">
      {user ? (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/test">
                <h1>test</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
