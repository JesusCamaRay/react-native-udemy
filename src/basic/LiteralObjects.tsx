import React from 'react'
//type,class,interface are almost the same

interface Address {
  country: string;
  homeNo:number
}

interface Person {
  fullName:string;
  age:number;
  address:Address
}

export const LiteralObjects = () => {
  const person:Person = {
    fullName:'Fernando',
    age:35,
    address:{
      country:'Canada',
      homeNo:35
    }
  }
  
  return (
    <>
      <h3>Literal Objects</h3>
      {JSON.stringify(person,null,2)}
    </>
  )
}
