import React from 'react';
import useUrlParam from './useUrlParam';
import Link from '@docusaurus/Link';

export default function ParamLink({ template, paramName, defaultValue, children }) {
  const paramValue = useUrlParam(paramName, defaultValue);
  const to = template.replace(`{${paramName}}`, paramValue);
  return <Link to={to}>{children}</Link>;
}
