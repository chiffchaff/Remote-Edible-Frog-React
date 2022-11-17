import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import CodatConnect3 from './views/codat-connect-3'
import CodatConnect2 from './views/codat-connect-2'
import CodatLoginToXero4 from './views/codat-login-to-xero-4'
import Home1 from './views/home-1'
import CodatLoanApplicationInProgress52 from './views/codat-loan-application-in-progress-52'
import CodatConsentForAccess5 from './views/codat-consent-for-access-5'
import CodatEnhancedOffer6 from './views/codat-enhanced-offer-6'
import CodatFetchProgress51 from './views/codat-fetch-progress-51'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={CodatConnect3} exact path="/codat-connect-3" />
        <Route component={CodatConnect2} exact path="/codat-connect-2" />
        <Route
          component={CodatLoginToXero4}
          exact
          path="/codat-login-to-xero-4"
        />
        <Route component={Home1} exact path="/" />
        <Route
          component={CodatLoanApplicationInProgress52}
          exact
          path="/codat-loan-application-in-progress-52"
        />
        <Route
          component={CodatConsentForAccess5}
          exact
          path="/codat-consent-for-access-5"
        />
        <Route
          component={CodatEnhancedOffer6}
          exact
          path="/codat-enhanced-offer-6"
        />
        <Route
          component={CodatFetchProgress51}
          exact
          path="/codat-fetch-progress-51"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
