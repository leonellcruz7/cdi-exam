import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function ImageView() {
    const nav = useNavigate()
    const { id } = useSelector((state) => state.id)
    return (
        <motion.div className='view'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, bounce: .3 }}>
            <img src={require(`../img/i.jpg`)} alt="" />
            <motion.button onClick={() => nav('/')}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, bounce: .3, delay: .1 }}>back</motion.button>
        </motion.div>
    )
}
