import React from 'react';
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-amber-600 px-3 py-2 text-xl">
      {children}
    </button>
  );
};
