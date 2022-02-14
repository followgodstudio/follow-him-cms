import { Store } from "react-notifications-component";

export const NotificationType = {
  SUCCESS: "success",
  DANGER: "danger",
  INFO: "info",
  DEFAULT: "default",
  WARNING: "warning",
};

export const sendNotification = (
  type,
  title,
  message = null,
  duration = null
) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: duration || type === "success" ? 3000 : 10000,
      onScreen: true,
      pauseOnHover: true,
      showIcon: true,
    },
  });
};
