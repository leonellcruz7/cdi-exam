import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ImageView() {

    const { id } = useSelector((state) => state.id)
    return (
        <div className='view'>
            <img src={require('../img/i.jpg')} alt="" />
        </div>
    )
}
