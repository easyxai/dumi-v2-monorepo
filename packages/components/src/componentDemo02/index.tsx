import React, { FC } from 'react';

const Demo02: FC<{
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}> = ({ title }) => {
  return <h4>componentDemo02:{title}</h4>;
};

export default Demo02;
