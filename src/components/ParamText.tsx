import React from 'react';
import useUrlParam from './useUrlParam';

export default function ParamText({ paramName, defaultValue }) {
  const paramValue = useUrlParam(paramName, defaultValue);
  return <>{paramValue}</>;
}
