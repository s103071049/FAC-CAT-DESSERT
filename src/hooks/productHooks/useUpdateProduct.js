import { useReducer, useContext, useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import { AuthLoadingContext } from "../../context";
import cameraIcon from "../../components/img/icon/camera.svg";
import { imgurApi } from "../../API/imgurAPI";
import { updateProducts, getProduct } from "../../API/WEBAPI";

const initFormState = {
  name: "",
  desc: "",
  price: "",
  category: "",
  img_url: "",
};

const useAddProducts = () => {
  const { setLoading } = useContext(AuthLoadingContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ImgSrc, setImgSrc] = useState(cameraIcon);
  const history = useHistory();
  const { id } = useParams();

  const [formValue, setFormValue] = useReducer(
    (currentValues, newValues) => ({ ...currentValues, ...newValues }),
    initFormState
  );

  const inputFileRef = useRef();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const result = await getProduct(id);
      try {
        if (!result.success) {
          setLoading(false);
          return history.goBack();
        }
        setLoading(false);
        setFormValue(result.product);
      } catch (err) {
        setLoading(false);
        return history.goBack();
      }
    };
    fetchProduct();
  }, [history, id, setLoading]);

  const { name, desc, price, category, img_url } = formValue;

  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (!name || !desc || !price || !category || !img_url || !id) {
      return alert("請輸入完整資料");
    }
    const result = await updateProducts(
      name,
      desc,
      img_url,
      price,
      category,
      id
    );
    try {
      if (!result.success) {
        return history.goBack();
      }
      history.push("/admin/products");
    } catch (err) {
      return history.goBack();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ [name]: value });
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
          setFormValue({ img_url: result.data.link });
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
  };
};

export default useAddProducts;
