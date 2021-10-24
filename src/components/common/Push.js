import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Push() {
  const history = useHistory();
  useState(() => {
    return history.push("/");
  }, []);
  return null;
}
