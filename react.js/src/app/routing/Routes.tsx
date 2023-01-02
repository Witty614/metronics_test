/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import { Switch, Route } from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {MasterInit} from '../../_metronic/layout/MasterInit'

const Routes: FC = () => {

  return (
    <>
      <Switch>
        <Route>
          <MasterLayout>
            <PrivateRoutes />
          </MasterLayout>
        </Route>
        <Route path='/error' component={ErrorsPage} />
        <Route path='/logout' component={Logout} />
       </Switch>
       <MasterInit />
    </>
  )
}

export {Routes}
