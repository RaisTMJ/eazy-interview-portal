import axios from "axios";

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
};

const api = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "application/json",
  },
});

// 3. Create the multipart/form-data instance for file uploads
const apiMultipart = axios.create({
  ...baseConfig,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// 4. Define the shared error handling logic in a single function
const responseErrorHandler = (error: any) => {
  if (error.response) {
    const { status } = error.response;

    if (status === 401) {
      console.log("Unauthorized request. Logging out.");
      return new Promise(() => {});
    }
  }

  // For all other errors, pass them along so the calling component can handle them
  return Promise.reject(error);
};

// 5. Apply the same interceptor to BOTH instances
api.interceptors.response.use(
  (response) => response,
  responseErrorHandler
);

apiMultipart.interceptors.response.use(
  (response) => response,
  responseErrorHandler
);


export default api;
export { apiMultipart };

