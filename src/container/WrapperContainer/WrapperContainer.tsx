import { MainWrapperProps } from '@/container/WrapperContainer/MainWrapperProps';
import React, { FC } from 'react';

const WrapperContainer: FC<MainWrapperProps> = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

export default WrapperContainer;
