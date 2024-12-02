import React, { useEffect } from 'react';
import './styles/Toast.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return '#26D336';
      case 'error':
        return 'red';
      case 'warning':
        return '#FBBF24'; 
      case 'info':
        return '#3B82F6';
      default:
        return '#374151'; 
    }
  };

  return (
    <div
      className="toast"
      style={{
        color: getBackgroundColor(type),
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
