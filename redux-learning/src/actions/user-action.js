import { UserApi } from "../api/user-api";
import { FETCH_USER, SEND_USER } from "./user-action.type";

const UserFetchData = async () => {
    const randomUser = await UserApi.getRandomUser();
    return {
        type: FETCH_USER,
        payload: randomUser
    }
}

const UserSendData = () => {
    const user = {
        'name' : 'Asif',
        'email': 'asif@gmail.com',
        'address': 'Loni Addres coming from action'
    }
    return {
        type: SEND_USER,
        payload: user
    }
}
export const UserAction = {
    UserFetchData,
    UserSendData
};
