import React from "react";
import { Advert } from "./Adverts";

interface IPropsContext {
  children: React.ReactNode;
}

const Context = ({ children }: IPropsContext) => <Advert>{children}</Advert>;

export default Context;
