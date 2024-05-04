import React, { useEffect, useState } from 'react'
import ProfileSummary from './ProfileSummary'
import ProfileNew from './ProfileNew';

function CreateProfile({key1,initialPage}) {
    const [page, setpage] = useState(null)
    useEffect(() => {
      setpage(initialPage)
    }, [initialPage,key1])
   
    
  return (
    <div >{page && (
        //page === "summary" ? <ProfileSummary setPage={setpage} /> :
        page === "summary" ? <ProfileNew setPage={setpage} /> :null
      )}</div>
  )
}

export default CreateProfile