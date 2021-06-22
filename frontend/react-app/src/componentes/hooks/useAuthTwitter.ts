import { useHistory } from "react-router-dom";
import { Axios } from "../../Axios";

export const useAuthTwitter = () => {
  const history = useHistory();

  const CheckLoginStatusTwitter = (window: Window | null) => {
    if (window!.closed) {
      alert("test");
    } else {
      setTimeout(function () {
        CheckLoginStatusTwitter(window);
      }, 1000);
    }
  };

  const authTwitter = () => {
    Axios.get("/api/v1/get_oauth_twitter_url", {
      withCredentials: true,
    })
      .then((res) => {
        const windowLogin = window.open(res.data.oauth_url);
        CheckLoginStatusTwitter(windowLogin);

        window.focus();
      })
      .catch((err) => {
        console.log("error!!!!!!!!!!!!");
        console.log(err);
      })
      .finally(() => {
        history.push("/home");
      });
  };

  return { authTwitter };
};
