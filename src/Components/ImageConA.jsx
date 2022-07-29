import React from 'react'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ImageCon() {

    const nav = useNavigate()

    const a = (id) => {


        nav('/a')

    }
    const b = (id) => {


        nav('/b')

    }
    const c = (id) => {


        nav('/c')

    }
    const d = (id) => {


        nav('/d')

    }
    const e = (id) => {

        nav('/e')

    }
    const f = (id) => {

        nav('/f')

    }
    const g = (id) => {


        nav('/g')

    }
    const h = (id) => {


        nav('/h')

    }
    const i = (id) => {


        nav('/i')

    }
    return (
        <motion.div className="imageCon"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, bounce: .3 }}>
            <img src={require('../img/a.jpg')} alt="" onClick={a} />
            <img src={require('../img/b.jpg')} alt="" onClick={b} />
            <img src={require('../img/c.jpg')} alt="" onClick={c} />
            <img src={require('../img/d.jpg')} alt="" onClick={d} />
            <img src={require('../img/e.jpg')} alt="" onClick={e} />
            <img src={require('../img/f.jpg')} alt="" onClick={f} />
            <img src={require('../img/g.jpg')} alt="" onClick={g} />
            <img src={require('../img/h.jpg')} alt="" onClick={h} />
            <img src={require('../img/i.jpg')} alt="" onClick={i} />
        </motion.div>
    )
}
