import React from 'react';

const Settings = (props)=>{
    let user = props.function();
    return(<div>
                <h1>Настройки страницы</h1>
                <p>Статус: <span>{user.lastname}</span> <span>[изменить]</span></p>
                <p>Имя: <span>{user.name}</span> <span>[изменить]</span></p>
                <p>[изменить пароль]</p>
    </div>
    )
}


export default Settings;