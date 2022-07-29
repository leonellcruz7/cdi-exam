import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setId } from '../redux/id'
import { useNavigate } from 'react-router-dom'

export default function ImageCon() {
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.id)
    const nav = useNavigate()

    const a = (id) => {

        dispatch(setId(id))
        nav('/a')

    }
    const b = (id) => {

        dispatch(setId(id))
        nav('/b')

    }
    const c = (id) => {

        dispatch(setId(id))
        nav('/c')

    }
    const d = (id) => {

        dispatch(setId(id))
        nav('/d')

    }
    const e = (id) => {

        dispatch(setId(id))
        nav('/e')

    }
    const f = (id) => {

        dispatch(setId(id))
        nav('/f')

    }
    const g = (id) => {

        dispatch(setId(id))
        nav('/g')

    }
    const h = (id) => {

        dispatch(setId(id))
        nav('/h')

    }
    const i = (id) => {

        dispatch(setId(id))
        nav('/i')

    }
    return (
        <div className="imageCon">
            <img src={require('../img/a.jpg')} alt="" onClick={a} />
            <img src={require('../img/b.jpg')} alt="" onClick={b} />
            <img src={require('../img/c.jpg')} alt="" onClick={c} />
            <img src={require('../img/d.jpg')} alt="" onClick={d} />
            <img src={require('../img/e.jpg')} alt="" onClick={e} />
            <img src={require('../img/f.jpg')} alt="" onClick={f} />
            <img src={require('../img/g.jpg')} alt="" onClick={g} />
            <img src={require('../img/h.jpg')} alt="" onClick={h} />
            <img src={require('../img/i.jpg')} alt="" onClick={i} />
        </div>
    )
}
