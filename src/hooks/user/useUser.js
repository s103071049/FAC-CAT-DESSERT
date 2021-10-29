import { useContext } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";

import { removeAuthToken } from "../../utils";
import { AuthContexts, AuthLoadingContext } from "../../context";

export default function useUser() {
  let location = useLocation();
  let { path, url } = useRouteMatch();
  const { user, setUser } = useContext(AuthContexts);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const history = useHistory();
  // 登出
  const handleLogout = () => {
    removeAuthToken();
    setUser(null);
    history.push("/");
  };
  return {
    location,
    path,
    url,
    user,
    setUser,
    loading,
    setLoading,
    handleLogout,
  };
}
