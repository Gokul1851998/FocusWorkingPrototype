import React, { useEffect, useState } from 'react'
import PasswordSummery from './PasswordSummery'
import PasswordDetails from './PasswordDetails'


export default function PasswordPolicy({key1,initialPage}) {
    const [page, setpage] = useState(null)
    const [detailPageId, setdetailPageId] = useState(null)
    useEffect(() => {
      setpage(initialPage)
    }, [initialPage,key1])
  return (
    <div >{page && (
        page === "summary" ? <PasswordSummery setPage={setpage}  setdetailPageId={setdetailPageId}/> :
        page === "detailed" ? <PasswordDetails setPage={setpage} detailPageId={detailPageId}/> :
        null
      )}</div>
  )
}
