import {useState} from 'react'

const usePagination = (dataAmount, showDataIndex, setShowDataIndex) => {
  const [currentPageNum, setCurrentPageNum] = useState(1)
  const eachPageAmount = 10

  const handleClickDecrementBtn = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1)
      setShowDataIndex(showDataIndex - eachPageAmount)

    }
  }

  const handleClickIncrementBtn = () => {
    setCurrentPageNum(currentPageNum + 1)
    setShowDataIndex(showDataIndex + eachPageAmount)
  }

  return {
    currentPageNum,
    handleClickDecrementBtn,
    handleClickIncrementBtn,
    eachPageAmount
  }
}

export default usePagination