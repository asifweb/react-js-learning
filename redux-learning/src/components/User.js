import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {UserAction} from "../actions/user-action";

const User = () => {
    const dispatch = useDispatch();
   
    const handleUser = () => {
        dispatch(UserAction.UserSendData());
    }
    const fetchUser = async() => {
        let user = await UserAction.UserFetchData()
        dispatch(user)
    }

    useEffect(() => {
        fetchUser()
    }, []);
   
    const user = useSelector(state => state.UserReducer)

    if(user === null) {
        return 'Loading...';
    }
        return (
            <div>
                <h1>Name: <b> {user.name.title} {user.name.first}</b></h1>
                <h2>Email: <b> {user.email}</b></h2>
                <h3>Picture: <img src={user.picture.thumbnail}/></h3>
                <button onClick={() => handleUser()}>Click Me!</button>
            </div>
        );
}

export default User
