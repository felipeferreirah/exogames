import React from 'react';

//Router imports
import { Route, Switch } from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition';

//Chamando todas as pages
import Home from './pages/home/home';
import Download from './pages/Download/Download';

// components
import Footer from './components/footer/footer';
import Header from './components/header/header';

//tanslate
import Language from "./services/translate/language";


export default function App() {

  const subdomain = window.location.hostname.split('.')[0];
  const selectLanguage = subdomain === 'en' ? 'english' : 'portugues';
  const lang = Language[selectLanguage];

  return (
  <>
    <AnimatedRoute
    path={["*/download"]}
    exact
    component={Download}
    atEnter={{ offset: 100,opacity:0 }}
    atActive={{ offset: 0,opacity:90 }}
    atLeave={{ offset: 100,opacity:0 }}

    mapStyles={(styles) => ({
      transform: `translateY(${styles.offset}%)`,
      position: 'fixed',
      zIndex:3,width:'100%'
    })}
    />

    <Route path={["/home","/jobs", "/", "/home/*","/reports"]} exact component={Header} />
    <Switch>
      <Route path={["/home", "/", "/home/*"]} exact  render={() => <Home {...lang} language={lang}/>} />

    </Switch>
    <Route path={["/home","/jobs*", "/", "/home/*","/reports"]} exact component={Footer} />
  </>
    )
}


