import { FC } from 'react';

type iconProps = {
  width?: string;
  height?: string;
  active: boolean;
}

const LogInIcon:FC<iconProps> = ({width, height, active}) => {
  return (
    <svg
      width={ width || "32" }
      height={ height || "32"  }
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M21.3334 26H12.0001V28H21.3334C23.5426 28 25.3334 26.2091 25.3334 24V8C25.3334 5.79086 23.5426 4 21.3334 4L12.0001 4V6L21.3334 6C22.438 6 23.3334 6.89543 23.3334 8V24C23.3334 25.1046 22.438 26 21.3334 26ZM13.4834 20.2449L14.8955 21.6569L16.3097 20.2427L19.6096 16.9429C20.1303 16.4222 20.1303 15.578 19.6096 15.0573L16.3097 11.7574L14.8955 10.3432L13.4834 11.7553L16.7282 15.0001L6.66675 15.0001V17.0001L16.7282 17.0001L13.4834 20.2449Z"
            fill={ active ?  "#FEFF04" : "#E8E9EA"}
      />
    </svg>

  );
};

export default LogInIcon;