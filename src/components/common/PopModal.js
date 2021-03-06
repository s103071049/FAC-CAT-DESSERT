import { useState } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from '../Style/style';

// modal button
const ModalContainer = styled.div``

const ModalBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid #c9ba98;
  border-radius: 8px;
  font-size: 16px;
  background:#fff;
  cursor:pointer;
  &:hover {
    background: #60373e;
    color: #fff;
  }
   ${MEDIA_QUERY_MD} {
    display: inline-block;
  }
`

// modal 內容 css
const ModalBox = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ModalWrapper = styled.div`
    position: relative;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    width:100%;
    max-width:800px;

`

const ModalTItle = styled.div`
    font-weight: bold;
    font-size: 22px
`
const ModalInfoContent = styled.div`
  margin-top:40px;  
  display:flex;
  width:100%;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    align-items:center;
  }
`

const ModalImgWrap = styled.div`
  min-width:200px;
`
const Photo = styled.div`
  background-image: url(${(props) => props.$img});
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  ${MEDIA_QUERY_MD} {
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
  ${MEDIA_QUERY_SD} {
    width:70%;
    padding-bottom: 70%;
  }
`

const ModalDesc = styled.div`
  font-size: 16px;
  padding:0 10px;
  align-self:center;
  word-break: break-word;
  ${MEDIA_QUERY_MD} {
    margin-top:20px;
  }
`

const ModalFooter = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:40px;
`


const ModalActionBtn = styled.button`
    padding: 5px 10px;
    border: 1px solid #c9ba98;
    border-radius: 8px;
    font-size: 16px;
    background:#fff;
    cursor:pointer;
    &:hover {
      background: #60373e;
      color: #fff;
  }
    cursor: pointer;
`


const PopModal = ({desc, img_url, btnTitle, title}) => {
  const [modalDetail, setModalDetail] = useState({})
  const openModal = () => {
    setModalDetail({
      visible:true
    })
  }
  const onOk = () => {
    setModalDetail({
      visible:false
    })
  }
  const onCancel = () => {
    setModalDetail({
      visible:false
    })
  }


  const Modal = ({opacity,visible,titleClass, title,width, height, img_url, contentClass, content, footerClass, onOk, okClass, conFirmText, onCancel, cancelClass, cancelText}) => {
    return visible ? (
      <ModalBox style={{backgroundColor:`rgba(0, 0, 0, ${opacity})`}}>
        <ModalWrapper style={{width:width}}>
            <ModalTItle>{title}</ModalTItle>
            <ModalInfoContent>
              <ModalImgWrap> <Photo $img={img_url}/></ModalImgWrap>
              <ModalDesc>{content}</ModalDesc>
            </ModalInfoContent>
            <ModalFooter>
                <ModalActionBtn onClick={onOk} className={okClass}>close</ModalActionBtn>
            </ModalFooter>
        </ModalWrapper>
      </ModalBox>
    ): null
  }

  const noop = _=> undefined

  Modal.defaultProps = {
      onOk: noop,
      onCancel: noop,
      conFirmText: '确定',
      cancelText: '取消',
      titleClass: 'modal-title',
      contentClass: 'modal-text',
      footerClass: 'modal-footer',
      okClass: 'modal-confirm',
      cancelClass: 'modal-cancel',
      height:'auto',
      width:'400px',
      opacity: 0.6
  }
  
  return (
    <ModalContainer>
      <ModalBtn onClick={openModal}>{btnTitle}</ModalBtn>
      <Modal 
        width={'80%'}
        visible={modalDetail.visible}
        title={title} 
        content={desc}
        img_url={img_url}
        onOk={onOk} 
        opacit={0.66}
        onCancel={onCancel}/>
    </ModalContainer>
  )
}


export default PopModal;
