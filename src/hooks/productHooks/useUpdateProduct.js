import { useReducer } from "react";
import { useHistory } from "react-router-dom";

import cameraIcon from "../../components/img/icon/camera.svg";
import { imgurApi } from "../../API/imgurAPI";
import {useState, useRef} from 'react'
import { getProduct } from "../../WEBAPI";
import { useEffect } from "react/cjs/react.development";

const initFormState = {
  name:"",
  desc:"",
  price:"",
  category:"",
  img_url:""
}


const useAddProducts = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [ImgSrc, setImgSrc] = useState(cameraIcon);
  const history = useHistory();
  
  const [formValue, setFormValue] = useReducer((currentValues, newValues)=>({...currentValues, ...newValues}), initFormState)

  const inputFileRef = useRef();
  const currentDBimage = useRef()

  useEffect(()=>{
    const fetchProduct = async () => {
     const result = await getProduct('95680cbe-8b11-43fa-9af7-cb1493fd1485')
     try {
       if(!result.success){
         console.log(result)
         return history.goBack()
       }
       console.log(result.product)
       setFormValue(result.product)
        currentDBimage.current = result.product.img_url
     } catch(err) {
       console.log(err)
        return history.goBack()
     }
    }
    fetchProduct()
  },[history])

  const {
    name,
    desc,
    price,
    category,
    img_url
  } = formValue
  
  const handleSubmmit = (e) => {
    e.preventDefault()
    if(
      !name ||
      !desc ||
      !price ||
      !category||
      !img_url
    ){
      return alert('請輸入完整資料')
    }
    console.log(name, desc, img_url, price,category)
    //createProduct(name, desc, img_url, price,category)
    //  .then(result => {
    //    console.log(result)
    //  })
    //  .catch(err => console.log(err))
  }

  
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormValue({[name]:value})
  };

  const fileSelectorHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImgSrc(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const inputFileRefHandler = () => {
    inputFileRef.current.click();
  };
  const fileUploadHandler = (e) => {
    let formData = new FormData();
    formData.append("image", selectedFile);
    if (!selectedFile) {
     return alert("尚未選取上傳圖片");
    }
    if (selectedFile) {
      imgurApi(formData)
        .then((result) => {
          alert("上傳成功");
          // 拿到上傳圖片的 url
          setFormValue({img_url:result.data.link})
        })
        .catch((error) => {
          console.log(error)
          alert("圖片處理異常，請稍後再試!");
          return;
        });
    }
  };

  return {
    selectedFile,
    setSelectedFile,
    ImgSrc, 
    setImgSrc,
    inputFileRef,
    fileSelectorHandler,
    inputFileRefHandler,
    fileUploadHandler,
    handleInputChange,
    handleSubmmit,
    name,
    desc,
    price,
    category,
    img_url,
    currentDBimage
  }
}

export default useAddProducts