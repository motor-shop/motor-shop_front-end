import { api, config } from "../../services/api";
import jwt_decode from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  zip_code: string;
  state: string;
  city: string;
  street: string;
  house_number: number;
  complement: string;
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
  loginUser: (data: ILoginFunction) => Promise<unknown>;
  userMocked: IUserMocked;
  closeModalUpdate: boolean;
  setCloseModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  closeConfirmDeleteUser: boolean;
  setCloseConfirmDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUserById: (userId: string) => Promise<void>;
  closeModalSuccess: boolean;
  setCloseModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  closeModalUpdateProfile: boolean;
  setCloseModalUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>;
  registerUser: (data: IUserRequest) => Promise<unknown>;
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
  const [closeConfirmDeleteUser, setCloseConfirmDeleteUser] =
    useState<boolean>(true);
  const [closeModalSuccess, setCloseModalSuccess] = useState<boolean>(true);
  const [closeModalUpdateProfile, setCloseModalUpdateProfile] = useState<boolean>(true);
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

  const loginUser = async (data: ILoginFunction) => {
    return new Promise((resolve, reject) => {
      api
        .post("/login", data)
        .then((res) => {
          localStorage.setItem("@motors-shop:Token", res.data.data.token);
          const token = res.data.data.token;
          let decode: any = jwt_decode(token);
          localStorage.setItem("@motors-shop:id", decode.sub);
          localStorage.setItem(
            "@addressId",
            res.data.data.userExists.adress.id
          );
          setUser(res.data.data.userExists);
          setIsLogged(true);
          navigate("/allAdverts", { replace: true });
          resolve("Login realizado com sucesso!");
        })
        .catch((err) => {
          reject(new Error("Ocorreu um erro ao realizar o login!"));
        });
    });
  };

  const registerUser = (data: IUserRequest) => {
    return new Promise((resolve, reject) => {
      api
        .post("/users", data)
        .then((response) => {
          console.log(response);
          setCloseModalSuccess(false);
          resolve("registro realizado com sucesso!");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          reject(new Error("Ocorreu um erro ao realizar o registro!"));
        });
    });
  };

  const deleteUserById = async (userId: string) => {
    await api.delete(`/users/${userId}`, config())
    .then(() => {
      localStorage.removeItem("@motors-shop:Token")
    localStorage.removeItem("@motors-shop:id")
    localStorage.removeItem("@addressId")
    navigate("/login", { replace: true })
    window.location.reload()
    })
    
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@motors-shop:Token");
      const userId = localStorage.getItem("@motors-shop:id");
      if (token) {
        try {
          setIsLogged(true);
          const { data } = await api.get(`/users/${userId}`, config());
          setUser(data);
        } catch (err) {
          console.log(err);
          localStorage.removeItem(token);
          localStorage.removeItem(userId!);
        }
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userMocked,
        loginUser,
        closeModalUpdate,
        setCloseModalUpdate,
        closeConfirmDeleteUser,
        setCloseConfirmDeleteUser,
        deleteUserById,
        closeModalSuccess,
        setCloseModalSuccess,
        isLogged,
        setIsLogged,
        user,
        closeModalUpdateProfile,
        setCloseModalUpdateProfile,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
