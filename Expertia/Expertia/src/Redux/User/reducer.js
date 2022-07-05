import { USER } from "./action";
const init = { User: undefined };

export const CompanyReducer = (store = init, { type, payload }) => {
    switch (type) {
        case USER:
            return {
                ...store, user: payload
            }
        default: return store

    }
}