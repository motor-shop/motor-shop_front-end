import { api } from "../../services/api";
import jwt_decode from "jwt-decode";
import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface IAdress {
  zip_code: string;
  state: string;
  city: string;
  street: string;
  house_number: number;
  complement: string;
}

interface IUserMocked {
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_at: string;
  description: string;
  password: string;
  confirm_password: string;
  is_seller: boolean;
  adress: IAdress;
}

export interface IUserRequest {
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_at: string;
  description: string;
  password: string;
  confirm_password: string;
  is_seller: boolean;
  adress: IAdress;
}

export interface IUserUpdate{
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_at: string;
  description: string;
}

interface IContextUser {
  loginUser: (data: ILoginFunction) => void;
  userMocked: IUserMocked;
}

interface IPropsUser {
  children: React.ReactNode;
}

export interface ILoginFunction {
  username: string;
  password: string;
}

interface ILoginResponse {
  data: string;
}

export const UserContext = createContext<IContextUser>({} as IContextUser);

export const User = ({ children }: IPropsUser) => {
  const navigate = useNavigate();

  const userMocked = {
    username: "Rodrigo Tavares",
    email: "rodrigo@gmail.com",
    cpf: "1234567891235",
    cellphone: "123123123128",
    birth_at: "29-07-1997",
    description: "Vendendor de uma pequena concessionária",
    password: "1234",
    confirm_password: "1234",
    is_seller: true,
    adress: {
      zip_code: "123456787",
      state: "São Paulo",
      city: "São Paulo",
      street: "Avenida 9 de Julho",
      house_number: 150,
      complement: "Bloco E",
    },
  };

  function loginUser(data: ILoginFunction) {
    api
      .post<ILoginResponse>("/login", data)
      .then((res) => {
        localStorage.setItem("@TOKEN", res.data.data);
        const token = res.data.data;
        let decode: any = jwt_decode(token);
        localStorage.setItem("@id", decode.sub);
        navigate("/home", { replace: true });
      })
      .catch((err) => {});
  }
  return (
    <UserContext.Provider value={{ userMocked, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
