import Lifeguard from "../Introduction/Lifeguard";
import CosplayClassFirst from "./CosplayClassFirst";

const CosplayMain = (props) => {
  const { variables } = props;
  const { cosplay } = variables;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  console.log(props);

  if (cosplay === 0) {
    return (
      <Lifeguard
        {...props}
        next={() => {
          props.setCosplay(variables.cosplay + 1);
          props.setArea("evening");
        }}
      />
    );
  } else if (cosplay === 1) {
    return (
      <CosplayClassFirst
        {...props}
        next={() => {
          props.setCosplay(variables.cosplay + 1);
          props.setArea("evening");
        }}
      />
    );
  }
};

export default CosplayMain;
