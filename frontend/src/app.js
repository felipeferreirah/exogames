import React from 'react';  
  //Router imports
import { Route, Switch } from 'react-router-dom'

//Chamando todas as pages 
  import Explorar from './pages/explorar/explorar';
  import Search from './pages/search/search';  
  import Messenger from './pages/messenger/messenger'; 
  import Notification from './pages/notification/notification'; 

  //Chamando todos os elements
  import TabTop from './components/tab-top/tab-top'; 
  import TabBottom from './components/tab-bottom/tab-bottom';  

export default function App() {
  return (
  <>
    <TabTop className="container__tab-top"/>
    <Switch> 
      <Route path={["/home", "/"]} exact component={Explorar} /> 
      <Route path="/search"              component={Search} /> 
      <Route path="/messenger"     exact component={Messenger}      /> 
      <Route path="/notification"  exact component={Notification}      /> 
    </Switch>
  </>
    )
}
     
   
 
 
