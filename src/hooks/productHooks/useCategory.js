import { useState } from "react"

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部品項')
  const handleCategoryClick = (code) => {
    setSelectedCategory(code)
  }

  return {
    selectedCategory,
    handleCategoryClick
  }
}

export default useCategory