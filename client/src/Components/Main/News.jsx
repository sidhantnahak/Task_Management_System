import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsItem from './NewsItem'
import './news.css'
import { useAlert } from 'react-alert'
import { Clear_Errors, getall_carts } from '../../redux/taskAction'
import { add_cart_reset, delete_cart_reset } from '../../redux/taskConstants'

const News = () => {

    const { news } = useSelector(state => state.allnews)
    const { isAdded, error, isCartDeleted } = useSelector(s => s.cart);


    const alert = useAlert();
const dispatch=useDispatch();

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(Clear_Errors());
        }
        if (isAdded) {
            alert.success("cart added successfully!")
            dispatch({type:add_cart_reset})
            dispatch(getall_carts())
        }
        if (isCartDeleted) {
            alert.success("cart removed successfully!")
            dispatch({type:delete_cart_reset})
            dispatch(getall_carts())
        }

    }, [dispatch,isAdded, error, isCartDeleted,alert])
    return (
        <div className='main2_container'>

            {news && news.map(e => {
                return <NewsItem add={"Add In Cart"} newsitem={e} />
            })}
        </div>
    )
}

export default News