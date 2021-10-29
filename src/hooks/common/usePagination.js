import { useState, useCallback, useEffect } from "react"

const usePagination = (apiData, pageSize) => {
  const [pageDetail, setPageDetail] = useState({
      indexList:[],//當前渲染的頁面數據
      pageSize:pageSize, //每頁顯示的條數
      totalPage:0//總頁數
  })

  const setPage = useCallback((num)=>{
    setPageDetail(prevState => {
          return {
            ...prevState,
            indexList:apiData.slice(num,num+pageDetail.pageSize)
          }
    })

  },[pageDetail.pageSize,apiData])

  const pageNext = useCallback((num) => {
      setPage(num)
  }, [setPage])
  
  useEffect(()=>{
    setPageDetail(prevState=>{
      return {
        ...prevState,
        indexList:apiData.slice(0,pageDetail.pageSize),
        totalPage:Math.ceil( apiData.length/prevState.pageSize)
      }
    })
  }, [apiData,pageDetail.pageSize])

  return {
    pageNext,
    pageDetail
  }
}

export default usePagination
