import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: 'primary' | 'danger' | 'default';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant, disabled }) => {
  let backgroundColor;
  let textColor;

  switch (variant) {
    case 'primary':
      backgroundColor = 'bg-blue-500';
      textColor = 'text-white';
      break;
    case 'danger':
      backgroundColor = 'bg-red-500';
      textColor = 'text-white';
      break;
    case 'default':
      backgroundColor = 'bg-gray-300';
      textColor = 'text-gray-800';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded focus:outline-none focus:ring transition ${backgroundColor} ${textColor} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;