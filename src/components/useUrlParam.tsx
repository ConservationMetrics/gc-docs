import { useLocation } from '@docusaurus/router';
export default function useUrlParam(paramName, defaultValue) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get(paramName) || defaultValue;
  return paramValue;
}
