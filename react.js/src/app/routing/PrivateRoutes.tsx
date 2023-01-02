import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import CommissionPage from '../pages/commission/Commission'
import {MenuTestPage} from '../pages/MenuTestPage'

export function PrivateRoutes() {
  const VolumeHistory = lazy(() => import('../pages/volumehistory/VolumeHistory'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/volumehistory' component={VolumeHistory} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Route path='/' component={CommissionPage} />
        <Redirect from='/auth' to='/commission' />
        <Redirect exact from='/' to='/commission' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
