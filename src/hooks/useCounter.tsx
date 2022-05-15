import {useState} from 'react'

export const useCounter = (initialValue?:number) => {
  const [value, setValue] = useState<number>(initialValue||0)
  
  const accumulate = (number:number):void=>{
    setValue(value + number)
  }
  return {
    value,
    accumulate
  }
}
