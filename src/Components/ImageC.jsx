import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ImageView() {
    const nav = useNavigate()
    const { id } = useSelector((state) => state.id)
    return (
        <div className='view'>
            <img src={require(`../img/c.jpg`)} alt="" />
            <button onClick={() => nav('/')}>back</button>
        </div>
    )
}
