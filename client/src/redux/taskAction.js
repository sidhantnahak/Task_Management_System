
import axios from 'axios'
import { add_cart_fail, add_cart_request, add_cart_sucess, clear_errors, delete_cart_fail, delete_cart_request, delete_cart_sucess, delete_task_fail, delete_task_request, delete_task_sucess, getall_cart_fail, getall_cart_request, getall_cart_sucess, getallnews_fail, getallnews_request, getallnews_sucess, getalltask_fail, getalltask_request, getalltask_sucess, gettask_fail, gettask_request, gettask_sucess, register_task_fail, register_task_request, register_task_sucess, update_task_fail, update_task_request, update_task_sucess } from './taskConstants'

const backend_url = "https://task-management-system-atpl.onrender.com"

// const backend_url = "http://localhost:4000"

export const register_task = (data) => async (dispatch) => {
    const { title, description, status } = data;

    try {
        dispatch({ type: register_task_request })


        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`${backend_url}/api/v1/addtask`, { title, description, status }, config)
        dispatch({ type: register_task_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: register_task_fail, payload: error.response.data.message });

    }
}
export const get_task = (id) => async (dispatch) => {
    try {

        dispatch({ type: gettask_request })
        const { data } = await axios.get(`${backend_url}/api/v1/task/${id}`)
        dispatch({ type: gettask_sucess, payload: data.task });

    } catch (error) {
        dispatch({ type: gettask_fail, payload: error.response.data.message });

    }
}


export const update_task = (id,data) => async (dispatch) => {
    const { etitle, edescription, estatus } = data;

    try {
        dispatch({ type: update_task_request })


        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.put(`${backend_url}/api/v1/task/${id}`, { title:etitle, description:edescription, status:estatus }, config)
        dispatch({ type:update_task_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: update_task_fail, payload: error.response.data.message });

    }
}
export const delete_task = (id) => async (dispatch) => {
    try {

        dispatch({ type: delete_task_request })
        const { data } = await axios.delete(`${backend_url}/api/v1/task/${id}`)
        dispatch({ type: delete_task_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: delete_task_fail, payload: error.response.data.message });

    }
}

export const getall_task = () => async (dispatch) => {
    try {

        dispatch({ type: getalltask_request })
        const { data } = await axios.get(`${backend_url}/api/v1/getalltask`)
        dispatch({ type: getalltask_sucess, payload: data.tasks });

    } catch (error) {
        dispatch({ type: getalltask_fail, payload: error.response.data.message });

    }
}

export const getall_news = () => async (dispatch) => {
    try {

        dispatch({ type: getallnews_request })
        const { data } = await axios.get(`${backend_url}/api/v1/getallnews`)
        dispatch({ type: getallnews_sucess, payload: data.news });

    } catch (error) {
        dispatch({ type: getallnews_fail, payload: error.response.data.message });

    }
}

export const getall_carts = () => async (dispatch) => {
    try {

        dispatch({ type: getall_cart_request })
        const { data } = await axios.get(`${backend_url}/api/v1/getallcarts`)
        dispatch({ type: getall_cart_sucess, payload: data.carts });

    } catch (error) {
        dispatch({ type: getall_cart_fail, payload: error.response.data.message });

    }
}


export const add_cart = (data) => async (dispatch) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = data

    try {

        dispatch({ type:add_cart_request })
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`${backend_url}/api/v1/cart/add`,{source, author, title, description, url, urlToImage, publishedAt, content},config)
        dispatch({ type: add_cart_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: add_cart_fail, payload: error.response.data.message });

    }
}

export const delete_cart = (id) => async (dispatch) => {

    try {

        dispatch({ type:delete_cart_request })

        const { data } = await axios.delete(`${backend_url}/api/v1/cart/delete/${id}`)
        dispatch({ type:delete_cart_sucess, payload: data.sucess });

    } catch (error) {
        dispatch({ type: delete_cart_fail, payload: error.response.data.message });

    }
}

export const Clear_Errors = () => async (dispatch) => {
    dispatch({ type: clear_errors })
}