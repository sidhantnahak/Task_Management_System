import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { add_cart, delete_cart } from '../../redux/taskAction';

const NewsItem = ({ newsitem,add }) => {
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])


    return (
        <div className="card shadow-lg" style={{ width: "20rem" }} >
            <img className="card-img-top" src={newsitem.urlToImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link style={{ marginRight: "1rem" }} target='blank' to={newsitem.url} className="btn btn-primary">Read More...</Link>
                <Link onClick={() =>{add==="Add In Cart"? dispatch(add_cart(newsitem)):dispatch(delete_cart(newsitem._id))}} className="btn btn-primary">{add}</Link>
            </div>
        </div>
    )
}

export default NewsItem