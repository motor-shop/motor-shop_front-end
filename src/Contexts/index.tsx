import React from "react";
import { Advert } from "./Adverts";
import { User } from "./User";

interface IPropsContext {
  children: React.ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <User>
    <Advert>{children}</Advert>
  </User>
);

export default Context;
