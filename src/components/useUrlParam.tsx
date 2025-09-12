export default function useUrlParam(paramName, defaultValue) {
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get(paramName) || defaultValue;
  return paramValue;
}
