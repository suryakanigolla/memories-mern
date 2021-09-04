import React from "react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "./Toast.scss"

export const TYPE_SUCCESS = "success"
export const TYPE_ERROR = "error"

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
  )
}

export const toastMessage = (message, type) => {
  const toastConfig = {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    position: "bottom-center",
    progress: undefined,
  }
  if (type === TYPE_ERROR) {
    toast.error(message, toastConfig)
  } else if (type === TYPE_SUCCESS) {
    toast.success(message, toastConfig)
  }
}

export default Toast
