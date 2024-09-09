import React from 'react'

const Input = ({value}:{value:any}) => {
  return (
    <div>
        <input type="text" name="mat1" value={value} className=" hidden" />
    </div>
  )
}

export default Input