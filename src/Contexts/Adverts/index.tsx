import React, { createContext, useContext, useEffect, useState } from "react";
import { api, config } from "../../services/api";

export interface IVehicle {
  description: string;
  vehicleImg: string;
  title: string;
  tags: Array<string>;
  value: string;
  advertiserImage: string | null;
  advertiserName: string;
}

export interface IVehicleDinamico {
  vehicleImg: string;
  description: string;
  title: string;
  tags: number[];
  value: number;
  advertiserName: any;
  advertiserImage: string;
  isCar: boolean;
  id: string;
}

export interface IAdvert {
  id: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  is_car: boolean;
  cover_image: string;
  is_active: boolean;
  images: Array<string>;
  is_selling: boolean;
  user: any;
}

export interface IAdvertRequest {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  is_car: boolean;
  cover_image: string;
  is_active: boolean;
  image1: string
  images: Array<string>;
  is_selling: boolean;
}

export interface IAdvertResponse {
  title: string;
  year: number;
  km: number;
  price: string;
  description: string;
  is_car: boolean;
  cover_image: string;
  is_active: boolean;
  images: Array<IImage>;
  is_selling: boolean;
}

export interface IImage {
  id: string;
  url: string;
}

interface IContextAdvert {
  vehiclesMocked: Array<IVehicle>;
  advertMocked: IAdvertResponse;
  deleteAdvertById: (advertId: string) => void;
  closeModalCreateAdvert: boolean;
  setCloseModalCreateAdvert: React.Dispatch<React.SetStateAction<boolean>>;
  vehicles: Array<IVehicleDinamico>;
}

interface IPropsAdvert {
  children: React.ReactNode;
}

const AdvertContext = createContext<IContextAdvert>({} as IContextAdvert);

export const Advert = ({ children }: IPropsAdvert) => {
  const [closeModalCreateAdvert, setCloseModalCreateAdvert] =
    useState<boolean>(true);

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

  const deleteAdvertById = (advertId: string) => {
    api.delete(`/adverts/${advertId}`, config()).then(({ data }) => data);
  };

  const advertMocked = {
    id: "6fbfc6d7-3ff8-45f3-a030-9f6c8ae67b46",
    is_selling: true,
    title: "Gol g5",
    year: 2017,
    km: 75000,
    price: "49.80",
    description: "Carro de garagem",
    is_car: true,
    cover_image:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
    is_active: true,
    images: [
      {
        id: "d29f265c-f40a-4121-b190-a0cdb4be6804",
        url: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=1200&h=675&crop=1",
      },
    ],
  };

  const [allAdverts, setAllAdverts] = useState<IAdvert[]>([]);

  useEffect(() => {
    async function allAdverts() {
      try {
        await api.get("/adverts").then((response) => {
          console.log("response", response.data);
          setAllAdverts(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    }

    allAdverts();
  }, []);

  let vehicleAdvert = {};

  let vehicles: Array<IVehicleDinamico> = allAdverts.map(
    (advert) =>
      (vehicleAdvert = {
        vehicleImg: advert.cover_image,
        description: advert.description,
        title: advert.title,
        tags: [advert.km, advert.year],
        value: advert.price,
        advertiserName: advert.user.username,
        advertiserImage: "https://cdn-icons-png.flaticon.com/512/20/20863.png",
        isCar: advert.is_car,
        id: advert.id,
      })
  );

  return (
    <AdvertContext.Provider
      value={{
        vehiclesMocked,
        deleteAdvertById,
        advertMocked,
        closeModalCreateAdvert,
        setCloseModalCreateAdvert,
        vehicles,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export const useAdvert = () => useContext(AdvertContext);
