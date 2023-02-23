import React, { createContext, useContext } from "react";

export interface IVehicle {
  description: string;
  vehicleImg: string;
  title: string;
  tags: Array<string>;
  value: string;
  advertiserImage: string | null;
  advertiserName: string;
}

interface IContextAdvert {
  vehiclesMocked: Array<IVehicle>;
  imagesCar: Array<string>;
}

interface IPropsAdvert {
  children: React.ReactNode;
}

const AdvertContext = createContext<IContextAdvert>({} as IContextAdvert);

export const Advert = ({ children }: IPropsAdvert) => {
  const vehiclesMocked = [
    {
      vehicleImg:
        "https://uploaddeimagens.com.br/images/004/357/232/full/car-auction.png?1676645670",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing",
      title: "Product title stays here - max 1 line",
      tags: ["0 KM", "2019"],
      value: "00.000,00",
      advertiserName: "Victor",
      advertiserImage: "https://cdn-icons-png.flaticon.com/512/20/20863.png",
    },
    {
      vehicleImg:
        "https://uploaddeimagens.com.br/images/004/357/226/full/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview_1.png?1676645603",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing",
      title: "Product title stays here - max 1 line",
      tags: ["0 KM", "2019"],
      value: "00.000,00",
      advertiserName: "Victor",
      advertiserImage: "https://cdn-icons-png.flaticon.com/512/20/20863.png",
    },
    {
      vehicleImg:
        "https://uploaddeimagens.com.br/images/004/357/221/full/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview_1_%281%29.png?1676645317",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing",
      title: "Product title stays here - max 1 line",
      tags: ["0 KM", "2019"],
      value: "00.000,00",
      advertiserName: "Victor",
      advertiserImage: "https://cdn-icons-png.flaticon.com/512/20/20863.png",
    },
  ];

  const imagesCar = [
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
  ];

  return (
    <AdvertContext.Provider value={{ vehiclesMocked, imagesCar }}>
      {children}
    </AdvertContext.Provider>
  );
};

export const useAdvert = () => useContext(AdvertContext);
