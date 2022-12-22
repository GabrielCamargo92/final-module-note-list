// const handleCreate = () => {
//   const users = JSON.parse(localStorage.getItem("users") || "[]");
//   if (users.length > 0 && users.some((user: MainUserType) => user.username === username)) {
//     alert("Usuário já cadastrado");
//     return;
//   }
//   localStorage.setItem("users", JSON.stringify([...users, { username, password, notes }]));
//   alert("Conta criada com sucesso!");
//   navigate("/");
//   if (inputPassword === inputPassword2) {
//     alert("Confira a senha");
//     return;
//   }

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { useAppSelector } from "../store/hooks";
import { selectUsers } from "../store/modules/UserSlice";

const Login: React.FC = () => {
  const usersRedux = useAppSelector(selectUsers);
  const userLogged = usersRedux.find((user) => user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged) {
      navigate("/home");
    }
  }, [navigate, userLogged, usersRedux]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export { Login };

// function addAccount(newUser: MainUserType): any {
//   throw new Error("Function not implemented.");
// }
