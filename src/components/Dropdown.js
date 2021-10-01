import React from "react"
import styled from 'styled-components'
import { CartButton } from "./Style/style"

export const DropdownWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
`
export const StyledSelect = styled.select`
  max-width: 60%;
  height: 60%;
  padding: 10px;
  margin: 10px;
`
export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`
export const StyledLabel = styled.label`
  margin: 10px;
  font-size: 1.2rem;
`

export function Dropdown(props) {
  return (
    <React.Fragment>
      <DropdownWrapper
        action={props.action}
        onChange={props.onChange}
      >
        <StyledLabel htmlFor="services">
          {props.formLabel}
        </StyledLabel>
        <StyledSelect id="services" name="services">
          {props.children}
        </StyledSelect>
      </DropdownWrapper>
      <CartButton>
        {props.buttonText}
      </CartButton>
    </React.Fragment> 
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}
