import { add_cart_fail, add_cart_request, add_cart_reset, add_cart_sucess, clear_errors, delete_cart_fail, delete_cart_request, delete_cart_reset, delete_cart_sucess, delete_task_fail, delete_task_request, delete_task_reset, delete_task_sucess, getall_cart_fail, getall_cart_request, getall_cart_sucess, getallnews_fail, getallnews_request, getallnews_sucess, getalltask_fail, getalltask_request, getalltask_sucess, gettask_fail, gettask_request, gettask_sucess, register_task_fail, register_task_request, register_task_reset, register_task_sucess, update_task_fail, update_task_request, update_task_reset, update_task_sucess } from "./taskConstants";


export const taskReducer = (state = { task: {} }, action) => {

    switch (action.type) {
        case register_task_request:
        case delete_task_request:
        case update_task_request:
            return {
                loading: true,
            }

        case register_task_sucess:

            return {
                ...state,
                loading: false,
                sucess: action.payload

            }
        case update_task_sucess:
            return {
                ...state,
                loading: false,
                isUpdated: true
            }
        case delete_task_sucess:
            return {
                ...state,
                loading: false,
                isDeleted: true
            }
        case register_task_fail:
        case delete_task_fail:
        case update_task_fail:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case register_task_reset:
        case delete_task_reset:
        case update_task_reset:

            return {
                ...state,
                sucess: false,
                isDeleted: false,
                isUpdated: false
            }
        case clear_errors:
            return {
                ...state,
                error: null
            }
        default:
            return {
                ...state,
                error: null,
            }
    }

}


export const taskdetail = (state = { task: {} }, action) => {

    switch (action.type) {
        case gettask_request:
            return {
                loading: true,
            }

        case gettask_sucess:
            return {
                ...state,
                loading: false,
                task: action.payload
            }
        case gettask_fail:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case clear_errors:
            return {
                ...state,
                error: null
            }
        default:
            return {
                ...state,
                error: null,

            }

    }


}

export const alltasks = (state = { alltask: {} }, action) => {

    switch (action.type) {
        case getalltask_request:
            return {
                ...state,
                loading: true
            }

        case getalltask_sucess:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case getalltask_fail:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case clear_errors:
            return {
                ...state,
                error: null,

            }
        default:
            return {
                ...state,
                error: null,

            }
    }


}

export const allnews = (state = { allnews: {} }, action) => {

    switch (action.type) {
        case getallnews_request:
            return {
                ...state,
                loading: true
            }

        case getallnews_sucess:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case getallnews_fail:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case clear_errors:
            return {
                ...state,
                error: null,

            }
        default:
            return {
                ...state,
                error: null,

            }
    }


}

export const allcarts = (state = { allcarts: {} }, action) => {

    switch (action.type) {
        case getall_cart_request:
            return {
                ...state,
                loading: true
            }

        case getall_cart_sucess:
            return {
                ...state,
                loading: false,
                carts: action.payload
            }
        case getall_cart_fail:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case clear_errors:
            return {
                ...state,
                error: null,

            }
        default:
            return {
                ...state,
                error: null,

            }
    }
}

export const cart = (state = { cart: {} }, action) => {

    switch (action.type) {
        case add_cart_request:
        case delete_cart_request:
            return {
                ...state,
                loading: true
            }

        case add_cart_sucess:
            return {
                ...state,
                loading: false,
                isAdded: action.payload
            }

        case delete_cart_sucess:
            return {
                ...state,
                loading: false,
                isCartDeleted: action.payload
            }
        case add_cart_fail:
        case delete_cart_fail:
            return {
                ...state,
                error: action.payload,
                loading: false,

            }
        case add_cart_reset:
        case delete_cart_reset:
            return {
                ...state,
                loading: false,
                isCartDeleted: false,
                isAdded: false
            }

        case clear_errors:
            return {
                ...state,
                error: null,

            }
        default:
            return {
                ...state,
                error: null,

            }
    }
}