import React from 'react'

const Shelf =(props)=>{
    console.log(props.width)
    return(
        <div className="shelf" style={{width:props.width, position:'absolute', top:props.top, left:props.left}}>

        </div>
    )
}
export default Shelf