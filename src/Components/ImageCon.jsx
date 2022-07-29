import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setId } from '../redux/id'
import { useNavigate } from 'react-router-dom'

export default function ImageCon() {
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.id)
    const nav = useNavigate()

    const view = (id) => {

        dispatch(setId(id))
        nav('/view')


    }
    return (
        <div className="imageCon">
            <img src={require('../img/a.jpg')} alt="" onClick={(a) => view(a)} />
            <img src={require('../img/b.jpg')} alt="" />
            <img src={require('../img/c.jpg')} alt="" />
            <img src={require('../img/d.jpg')} alt="" />
            <img src={require('../img/e.jpg')} alt="" />
            <img src={require('../img/f.jpg')} alt="" />
            <img src={require('../img/g.jpg')} alt="" />
            <img src={require('../img/h.jpg')} alt="" />
            <img src={require('../img/i.jpg')} alt="" />
        </div>
    )
}
