import React from "react";
import notification_icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

interface NotificationButtonProps {}

export const NotificationButton: React.FC<NotificationButtonProps> = ({}) => {
  return (
    <div className="dsmeta-red-btn">
      <img src={notification_icon} alt="Notificar" />
    </div>
  );
};
