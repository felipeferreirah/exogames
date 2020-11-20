import React from 'react';

//Router imports
import { Route, Switch, Redirect } from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition';

//Chamando todas as pages
import Home from './pages/website/home/home';
import Jobs from './pages/website/jobs/jobs';
import Reports from './pages/website/reports/reports';
import JobDetail from './pages/website/job-detail/job-detail';
import HomeAdmin from './pages/admin/home/home-admin';
import Login from './pages/admin/login/login';
import NovoReport from './pages/admin/novo-report/novo-report';
import NovoJobs from './pages/admin/novo-jobs/novo-jobs';

// components
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeaderMin from './components/header-min/header-min';
import FooterAdmin from './components/footer-admin/footer-admin';

//tanslate
import Language from "./services/translate/language";

//auth login
import {isAuthenticated} from './services/auth/auth';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{pathname: '/home/login', state: {from: props.location} }} />
    )
  )}/>
)

export default function App() {

  const subdomain = window.location.hostname.split('.')[0];
  const selectLanguage = subdomain === 'en' ? 'english' : 'portugues';
  const lang = Language[selectLanguage];

  return (
  <>
    <AnimatedRoute
    path={["*/login"]}
    exact
    component={Login}
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
      <Route path="/jobs" exact component={Jobs} />
      <Route path="/reports" exact component={Reports} />
      <Route path="/jobs/detail/:idJob?"   component={JobDetail} />
      <PrivateRoute path="/admin" exact component={HomeAdmin} />
      <PrivateRoute path="/admin/jobs/novo/" component={NovoJobs} />
      <PrivateRoute path="/admin/jobs/editar/:idJob?" component={NovoJobs} />
      <PrivateRoute path="/admin/reports/novo" component={NovoReport} />
    </Switch>
    <Route path={["/home","/jobs*", "/", "/home/*","/reports"]} exact component={Footer} />
    <Route path={["/admin*"]} exact component={FooterAdmin} />
  </>
    )
}


