import { Axios } from "../../Axios";

export const useAuthTwitter = () => {
  const authTwitter = () => {
    Axios.get("/omniauth/twitter", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error!!!!!!!!!!!!");
        console.log(err);
      });
  };

  return { authTwitter };
};
