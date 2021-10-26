import { useReducer } from "react";
import cameraIcon from "../../components/img/icon/camera.svg";
import { imgurApi } from "../../API/imgurAPI";
import {useState, useRef} from 'react'
import formReducer from "./formReducer";

const initFormErrorState = {
  name:null,
  desc:null,
  price:null,
  limited:null,
  category:null
}

const initFormState = {
  name:"",
  desc:"",
  price:"",
  limited:"",
  category:""
}

const useAddProducts = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [ImgSrc, setImgSrc] = useState(cameraIcon);
  const [uploadImg, setUploadImg] = useState(null);
  const [error, setError] = useReducer((state, action)=> ({...state, ...action}), initFormErrorState)
  
  const [formValue, setFormValue] = useReducer(formReducer, initFormState)

  const {
    name,
    desc,
    price,
    limited,
    category
  } = formValue
  
  const handleSubmmit = (e) => {
    e.preventDefault()
    if(
      !name ||
      !desc ||
      !price ||
      !limited ||
      !category
    ){
      setError({
        name:name ? null: '*請填寫',
        desc:desc ? null: '*請填寫',
        price:price ? null: '*請填寫' ,
        limited:limited ? null: '*請填寫',
        category:category? null: '*請選擇'
      })
    }
  }

  const inputFileRef = useRef();
  
  const handleInputChange = (e) => {
    setFormValue({
      type: "HANDLE_INPUT_VALUE",
      title: e.target.name,
      payload: e.target.value
    })
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
      alert("尚未選取上傳圖片");
    }
    if (selectedFile) {
      imgurApi(formData)
        .then((result) => {
          setUploadImg(result.data.link); // 拿到上傳圖片的 url
          alert("上傳成功");
        })
        .catch((error) => {
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
    setUploadImg,
    inputFileRef,
    fileSelectorHandler,
    inputFileRefHandler,
    fileUploadHandler,
    handleInputChange,
    error,
    handleSubmmit,
    name,
    desc,
    price,
    limited,
    category
  }
}

export default useAddProducts