import React from 'react';
import './Dialogs.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path ="/Dialogs" + props.id;

    return <div className={'Dialogs'}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={'Dialogs'}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={'Dialogs'}>
           <div className={'Dialogs'}>
                <DialogItem name='Tom' id='1' />
                <DialogItem name='Jerry' id='2' />
           </div>
           <div className={'Message'}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Fine' />
           </div>
        </div>
    )
}

export default Dialogs;