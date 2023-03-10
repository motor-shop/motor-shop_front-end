import * as yup from "yup";

const UpdateAdvertSchema = () => {
  return yup.object().shape({
    title: yup.string().notRequired(),
    year: yup.string().notRequired(),
    km: yup.string().notRequired(),
    price: yup.string().notRequired(),
    description: yup.string().notRequired(),
    cover_image: yup.string().notRequired(),
    images: yup.array().notRequired(),
  });
};

export default UpdateAdvertSchema;
