import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Axios } from "../../Axios";
import { UserContext } from "../../providers/UserProvider";

export const useAuthTwitter = () => {
  const history = useHistory();
  const loginStatus = useContext(UserContext);

  const CheckLoginStatusTwitter = (window: Window | null, text: string) => {
    if (window!.closed) {
      alert(text);
      history.push("/home");
    } else {
      setTimeout(function () {
        CheckLoginStatusTwitter(window, text);
      }, 1000);
    }
  };

  const authTwitter = () => {
    Axios.get("/api/v1/get_oauth_twitter_url", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        const windowLogin = window.open(res.data.oauth_url);
        CheckLoginStatusTwitter(windowLogin, "ログインしました");
      })
      .catch((err) => {
        console.log("error!!!!!!!!!!!!");
        console.log(err);
      })
      .finally(() => {
        window.focus();
      });
  };

  return { authTwitter };
};
