import React from "react"
import styled from "styled-components"
import OrderPopup from "../../components/popup/OrderPopup"
import OrderRejectPopup from "../../components/popup/OrederRejectPopup"
// import { Link } from "react-router-dom"




export default function ProductsPage() {
  return (
    <div>
      <OrderPopup/>
      <hr/>
      <OrderRejectPopup/>
    </div>
  )
}