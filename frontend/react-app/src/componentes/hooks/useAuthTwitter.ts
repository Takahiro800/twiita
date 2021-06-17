import { Axios } from "../../Axios";

export const useAuthTwitter = () => {
  const authTwitter = () => {
    Axios.get("/api/v1/get_oauth_twitter_url", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        window.location.href = res.data.oauth_url;
      })
      .catch((err) => {
        console.log("error!!!!!!!!!!!!");
        console.log(err);
      });
  };

  return { authTwitter };
};
