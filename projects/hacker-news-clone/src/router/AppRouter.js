import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import PageNotFound from '../components/PageNotFound'
import ShowStories from '../components/ShowStories'


const AppRouter = () => {
  return (
    <>
    <Router>
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/:type" component={ShowStories} />
                <Route path="/*" component={PageNotFound} />
            </Switch>
        </div>
    </Router>
    </>
  )
}

export default AppRouter