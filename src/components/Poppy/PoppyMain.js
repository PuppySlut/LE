import { useState } from "react";

const PoppyMain = (props) => {
  const { variables } = props;
  const { Poppy } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  if (Poppy === 0) {
    
    }
  }
};

export default PoppyMain;
