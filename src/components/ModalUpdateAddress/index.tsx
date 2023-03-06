import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { IAdress, useUser } from "../../Contexts/User";
import { FormStyled } from "./styles";
import ModalGlobal from "../ModalGlobal";

const ModalUpdateAddress = () => {

  const { closeModalUpdate, setCloseModalUpdate } = useUser();

  const formSchema = yup.object().shape({
    zip_code: yup.string(),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdress>({ resolver: yupResolver(formSchema) });


    function addressUpdate(data: IAdress){

    const id = localStorage.getItem('@addressId')

    api
      .patch(`/address/${id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem(id!)
      });
  }


  return (
    <ModalGlobal
      title="Editar Endereço"
      closeModal={closeModalUpdate}
      setCloseModal={setCloseModalUpdate}
    >
      <FormStyled onSubmit={handleSubmit(addressUpdate)}>
        <div className="containerAddressInfo">
          <p> Informações de Endereço</p>
          <Input
            label="CEP"
            placeholder="00000.000"
            type="text"
            register={register}
            registerName="zip_code"
          />
          <div className="addressInfo2">
            <Input
              label="Estado"
              placeholder="Digitar Estado"
              type="text"
              register={register}
              registerName="state"
            />
            <Input
              label="Cidade"
              placeholder="Digitar cidade"
              type="text"
              register={register}
              registerName="city"
            />
          </div>
          <Input
            label="Rua"
            placeholder="Digitar rua"
            type="text"
            register={register}
            registerName="street"
          />
          <div className="addressInfo2">
            <Input
              label="Número"
              placeholder="Digitar número"
              type="text"
              register={register}
              registerName="house_number"
            />
            <Input
              label="Complemento"
              placeholder="Ex: apart 307"
              type="text"
              register={register}
              registerName="complement"
            />
          </div>
        </div>
        <div className="finalButton">
          <Button
            type="button"
            background=" #DEE2E6"
            borderColor="#DEE2E6"
            backgroundHover="#CED4DA"
            borderColorHover="#CED4DA"
            width="100px"
            fontSize="16px"
            color="#495057"
            minButton={true}
            onClick={() => setCloseModalUpdate(true)}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            background=" #B0A6F0"
            backgroundHover="#B0A6F0"
            borderColorHover="#B0A6F0"
            borderColor="#EDEAFD"
            width="196px"
            fontSize="16px"
            color="#EDEAFD"
            minButton={true}
          >
            Salvar alterações
          </Button>
        </div>
      </FormStyled>
    </ModalGlobal>
  );
};

export default ModalUpdateAddress;
