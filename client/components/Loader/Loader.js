import React from 'react'
import styles from "./Loader.module.scss"


const Loader =(props)=>{
	return(
		<div className={`loader ${styles.Loader}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
	)
}


export default Loader