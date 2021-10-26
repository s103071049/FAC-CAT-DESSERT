import { useReducer } from "react";
import cameraIcon from "../../components/img/icon/camera.svg";
import { imgurApi } from "../../API/imgurAPI";
import {useState, useRef} from 'react'
import formReducer from "./formReducer";


const initFormState = {
  name:"",
  desc:"",
  price:"",
  category:""
}

const useAddProducts = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [ImgSrc, setImgSrc] = useState(cameraIcon);
  const [uploadImg, setUploadImg] = useState(null);
  
  const [formValue, setFormValue] = useReducer(formReducer, initFormState)

  const {
    name,
    desc,
    price,
    category
  } = formValue
  
  const handleSubmmit = (e) => {
    e.preventDefault()
    if(
      !name ||
      !desc ||
      !price ||
      !category
    ){
      return alert('請輸入完整資料')
    }
    console.log(uploadImg)
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
     return alert("尚未選取上傳圖片");
    }
    if (selectedFile) {
      console.log(formData.get('image'))
      imgurApi(formData.get('image'))
        .then((result) => {
          setUploadImg(result.data.link); // 拿到上傳圖片的 url
          alert("上傳成功");
          console.log(result)
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
    setUploadImg,
    inputFileRef,
    fileSelectorHandler,
    inputFileRefHandler,
    fileUploadHandler,
    handleInputChange,
    handleSubmmit,
    name,
    desc,
    price,
    category
  }
}

export default useAddProducts