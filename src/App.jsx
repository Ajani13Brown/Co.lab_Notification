import React from 'react'
import NotificationButton from './Component/NotificationButton'
import { Notifications } from 'react-push-notification'

const App = () => {
  return (
    <>
    <Notifications/>
    <NotificationButton/>
    </>
  )
}

export default App