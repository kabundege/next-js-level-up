const { REACT_APP_API_URL } = process.env;

export const controller = new AbortController()

export const Fetcher = async (url, method, Body) => {

  const { signal } = controller
  // const token = localStorage.getItem("user-token")
    
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${token}`
  }

  /** 
   * If there's no token in the cache
   * Remove the auth header 
   * */
  // if(!token)
  // delete headers.Authorization

  const response = await fetch( url, {
    headers,
    method,
    signal,
    body:JSON.stringify(Body),
  });
  
  return response.json();
};
