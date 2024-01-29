import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      closeOnClick
      theme="dark"
      transition={Slide}
    />
  );
}
