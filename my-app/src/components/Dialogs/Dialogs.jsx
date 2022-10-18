import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom'

const DiаalogItem = (props) => {
    let path = "/Dialogs" + props.id;

    return <div className={'Dialogs'}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={'Dialogs'}>{props.message}</div>
}

let DialogsData = [
    { id: 0, name: 'Tom' },
    { id: 1, name: 'Jerry' }
]

let MessagesData = [
    { id: 0, message: 'Hi' },
    { id: 1, message: 'How are you?' }
]

let DialogsElements = DialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
let MessagesElements = MessagesData.map((message) => <Message message={message.message} />);

const Dialogs = (props) => {
    return (
        <div className={'Dialogs'}>
            <div className={'DialogsItems'}>
                {DialogsElements}
            </div>
            <div className={'Message'}>
                {MessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;