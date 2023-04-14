import { useState } from "react";

const MaryMain = (props) => {
  const { variables } = props;
  const { Mary } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  if (Mary === 0) {
    
    }
  }
};

export default MaryMain;
