import React from 'react'

export const BasicTypes = () => {

  //Basic
  const name:string = 'Jesus'
  const age:number = 35
  const isActive:boolean = true

  //Array
  const powers:string[] = ['Velocity','Fly','Water Breath']


  return (
    <>
      <div>Basic Types</div>
      {name}, {age}, {isActive?'active':'inactive'}
      <br/>
      {powers.join(', ')}
    </>
  )
}
