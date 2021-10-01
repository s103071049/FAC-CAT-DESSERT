import styled from 'styled-components'

export const MEDIA_QUERY_MD = '@media screen and (max-width: 768px)'
export const MEDIA_QUERY_SD = '@media screen and (max-width: 375px)'
export const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
`
export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
  width: 100%;
`
export const CartButton = styled.div`
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  white-space: nowrap;
`