import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../API/reqRes'
import { ReqResList, User } from '../interfaces/reqRes.interface'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const pageRef = useRef(1)
  console.log("🚀 ~ file: useUsers.tsx ~ line 8 ~ useUsers ~ pageRef", pageRef)

  useEffect(() => {
    loadUsers()
  }, [])
  
  const loadUsers = async ()=>{
    const res = await reqResApi.get<ReqResList>('/users',{
      params:{
        page:pageRef.current
      }
    })
    if(res.data.data.length > 0){
      setUsers(res.data.data)
    } else {
      pageRef.current--
      alert('No more registries')
    }
  }

  const previousPage = ()=>{
    if(pageRef.current > 1){
      pageRef.current--
      loadUsers()
    }
  }

  const nextPage = ()=>{
    pageRef.current++
    loadUsers()
  }

  return {
    users,
    previousPage,
    nextPage
  }
}
