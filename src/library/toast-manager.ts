import toast from "react-hot-toast";

type ToastType = "success" | "error";
type ToastIcon = string;

export const displayToast = (
  type: ToastType,
  message: string,
  icon?: ToastIcon
) => {
  const options = {
    icon: icon,
  };

  if (type === "success") {
    return toast.success(message, options);
  } else if (type === "error") {
    return toast.error(message, options);
  }
};
