import React from 'react';


const Profile = (props)=>{
    let userId = window.location.pathname.split("/")[2];
    let user = props.function(userId);
    return(<div className="row">
            <div className="col-sm-3">
                <img src={user.avatar} width="95%" alt=""/>
            </div>
            <div className="col-sm-9">
                <h1>{user.lastname} {user.name}</h1>
                <h3>О себе</h3>
                <p>{user.about}</p>
            </div>
    </div>
    )
}

export default Profile;