import ReactLoading from "react-loading";
import { LoadingType } from "react-loading";

interface IPropsLoanding {
  type: LoadingType;
  color: string;
}

const LoadingPage = ({ type, color }: IPropsLoanding) => (
  <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
);

export default LoadingPage;
