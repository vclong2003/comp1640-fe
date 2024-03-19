export const buildQueryString = (params: {
  [key: string]: unknown;
}): string => {
  let query = "";
  for (const key in params) {
    if (params[key]) {
      query += `${key}=${params[key]}&`;
    }
  }
  return encodeURI("?" + query.slice(0, -1));
};
