import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoaderComponent(props) {
    return (
        <Loader
          type={props.type}
          color="crimson"
          height={100}
          width={100}
          timeout={props.timeout} //3 secs
        />
      )
}

export default LoaderComponent
