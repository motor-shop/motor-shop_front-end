import React, { createContext, useContext } from "react";

interface IContextAdvert {}

interface IPropsAdvert {
  children: React.ReactNode;
}

const AdvertContext = createContext<IContextAdvert>({} as IContextAdvert);

export const Advert = ({ children }: IPropsAdvert) => {
  return <AdvertContext.Provider value={{}}>{children}</AdvertContext.Provider>;
};

export const useAdvert = () => useContext(AdvertContext);
