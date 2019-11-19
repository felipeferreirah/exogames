  import React from 'react';

  //Router imports
  import { spring, AnimatedSwitch,AnimatedRoute } from 'react-router-transition'
  import { BrowserRouter as Router, Route } from 'react-router-dom'

  //Chamando todas as pages
  import Explorar from './pages/explorar/explorar';
  import Search from './pages/search/search'; 
  import Plus from './components/plus/plus';
  import Messenger from './pages/messenger/messenger'; 
  import Notification from './pages/notification/notification'; 
  //Chamando todos os elements
  import TabTop from './components/tab-top/tab-top';
  import TabBottom from './components/tab-bottom/tab-bottom';  

  //Chamando todos os helpers
  // import ScrollToTop from './elements/helper/ScrollToTop.js';


  //style para troca de Page
  function mapStyles(styles) {
    return{
      position: styles.transitionIndex <= 1 ? 'relative' : 'absolute',
      width: '100%',
      height: '100%',
      transform:`translateX(${styles.offset}px`,
      opacity: styles.opacity,
      }
    }

    // Helper para o efeito de transição
    function glide(val) {
      return spring(val, {
        stiffness: 174,
        damping: 19,
      });
    }

    // Tipo de transição do AnimatedSwitch
    const glideTransition = {
      //Primeiro estado - atEnter
      atEnter: {
        offset: 200,
        opacity: 0,
        transitionIndex: 0,
      },
      //Segundo estado - atLeave
      atLeave: {
        offset: glide(-100),
        opacity: glide(0),
        transitionIndex: 2,
      },
      //Terceito estado - atActive
      atActive: {
        offset: glide(0),
        opacity: glide(1),
        transitionIndex: 1,
      },
    };
    //style para troca do Topo (tab bottom)
    function mapStylesBar(styles) {
      return {
        opacity: styles.opacity,
        transform: `translateY(${styles.offset}px)`,
        zIndex:  styles.opacity,
   
      };
    }


    // Helper para o efeito de transição bounce
    function bounce(val) {
      return spring(val, {
        stiffness: 330,
        damping: 22,
      });
    }
    // Tipo de transição do AnimatedRoute Topo (Search / Back)
    const bounceTransitions = {
      atEnter: {
        opacity: 0,
        offset: 200,
      },
      atLeave: {
        opacity: bounce(0),
        offset: glide(-100),
      },
      atActive: {
        opacity: bounce(1),
        offset: glide(0),
      },
    };

  // ******************************************************************************
  // ************************* Explicando o Router ********************************
  //
  // <Route> ************* Passando os props para serem acessados pelos components.
  // <Route> -> <div> **** Div que engloba todas as divs para (n) ultilidades.
  // <ScrollToTop> ******* Helper para dar scroll depois da simulação do DOM.
  // <AnimatedRoute> ***** Mostra ou esconde o component dependendo do path (url).
  // <AnimatedSwitch> **** Responsavel pela troca de pages.
  // basename={process.env.PUBLIC_URL}

export default function App() { 

     return (<Router>
        <Route render={props => (
            <div className="container"> 
               
              <AnimatedRoute  className="container__tab-top"    path={["/asd"]}  component={TabTop}    {...bounceTransitions} mapStyles={mapStylesBar} />
              <AnimatedRoute  className="container__plus"       path= {["/*/plus"]}  exact  component={Plus}      {...bounceTransitions} mapStyles={mapStylesBar} />

              <AnimatedSwitch className={"container__wrapper "} {...glideTransition} mapStyles={mapStyles}>
                <Route path={["/home", "/"]} exact component={Explorar}  />
                <Route path="/search" exact component={Search}      /> 
                <Route path="/messenger" exact component={Messenger}      /> 
                <Route path="/notification" exact component={Notification}      /> 
                
              </AnimatedSwitch>

              <AnimatedRoute  className="container__tab-bottom" path={["/*", "/"]}  component={TabBottom} {...bounceTransitions} mapStyles={mapStylesBar} />
            </div>

          )} />
        </Router>)
      
      };
 