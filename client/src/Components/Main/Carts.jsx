import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsItem from './NewsItem';
import { useAlert } from 'react-alert';
import { Clear_Errors, getall_carts } from '../../redux/taskAction';
import { delete_cart_reset } from '../../redux/taskConstants';

const Carts = () => {


    const { carts } = useSelector(state => state.allcarts)
    const {  error, isCartDeleted } = useSelector(s => s.cart);


    const alert = useAlert();
const dispatch=useDispatch();

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(Clear_Errors());
        }

        if (isCartDeleted) {
            alert.success("cart removed successfully!")
            dispatch({type:delete_cart_reset})
            dispatch(getall_carts())
        }

    }, [dispatch, error, isCartDeleted,alert])



    return (
        <div className='main2_container'>
            {carts && carts.length===0 && <h3>You Have No Cart Item</h3>}
            {carts && carts.map(e => {
                return <NewsItem key={e.urlToImage} add={"Remove"} newsitem={e} />
            })}
        </div>
    )
}

export default Carts