import { useHistory } from "react-router-dom";
import { Axios } from "../../Axios";
import { useMessage } from "./useMessage";

export const useLogout = () => {
  const { showMessage } = useMessage();
  const history = useHistory();

  const logout = () => {
    Axios.delete<string>("/api/v1/logout", {
      withCredentials: true,
    })
      .then((res) => {
        const data = res.data;
        if (data === "ログアウト完了しました") {
          showMessage({ title: data, status: "success" });
          history.push("/");
        } else {
          showMessage({ title: "ログアウトできませんでした", status: "warning" });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  return { logout };
};
