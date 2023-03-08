import { api } from "../../services/api";
import jwt_decode from "jwt-decode";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IAdress {
  zip_code: string;
  state: string;
  city: string;
  street: string;
  house_number: number;
  complement: string;
}

export interface IUser {
  id: string;
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

export interface IUserResponse {
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

export interface IUserUpdate {
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
  closeModalUpdate: boolean;
  setCloseModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  closeModalSuccess: boolean;
  setCloseModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  user: IUser;
  closeModalUpdateProfile: boolean;
  setCloseModalUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [closeModalUpdate, setCloseModalUpdate] = useState<boolean>(true);
  const [closeModalSuccess, setCloseModalSuccess] = useState<boolean>(true);
  const [closeModalUpdateProfile, setCloseModalUpdateProfile] =
    useState<boolean>(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState<boolean>(false);

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
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@TOKEN", res.data.data.token);
        const token = res.data.data.token;
        let decode: any = jwt_decode(token);
        localStorage.setItem("@id", decode.sub);
        localStorage.setItem("@addressId", res.data.data.userExists.adress.id);
        setUser(res.data.data.userExists);
        setIsLogged(true);
        navigate("/allAdverts", { replace: true });
      })
      .catch((err) => {});
  }

  return (
    <UserContext.Provider
      value={{
        userMocked,
        loginUser,
        closeModalUpdate,
        setCloseModalUpdate,
        closeModalSuccess,
        setCloseModalSuccess,
        isLogged,
        user,
        closeModalUpdateProfile,
        setCloseModalUpdateProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
