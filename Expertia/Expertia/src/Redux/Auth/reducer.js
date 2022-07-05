import { LOGIN } from "./action";
import { REGISTER } from "./action";
const init = { user: undefined };

export const AuthReducer = (store = init, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return {
                ...store, user: payload
            }
        case REGISTER:
            return {
                ...store, user: payload
            }
        default: return store

    }
}