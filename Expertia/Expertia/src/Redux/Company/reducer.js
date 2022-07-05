import { COMPANY } from "./action";
const init = { company: undefined };

export const CompanyReducer = (store = init, { type, payload }) => {
    switch (type) {
        case COMPANY:
            return {
                ...store, user: payload
            }
        default: return store

    }
}