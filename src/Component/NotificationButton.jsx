import React from 'react'
import addNotification, { Notifications } from 'react-push-notification';
import Logo from '../assets/logo.svg'


const NotificationButton = () => {

    const handleOnClick = () =>{
        const hello = "hello Babe!"
        addNotification({
            title:'New Notification',
            message: 'You have a medication dose due to see detalis click here',
            theme: 'dark',
            native: false,
            duration:10000,
            
           
        })
    }
  return (
    <>
    <button onClick ={handleOnClick}>Push Notification</button>
    </>
  )
}

export default NotificationButton