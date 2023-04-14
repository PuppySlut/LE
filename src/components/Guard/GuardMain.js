import { useState } from "react";

const GuardMain = (props) => {
  const { variables } = props;
  const { guard } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  if (guard === 0) {
    
    }
  }
};

export default GuardMain;
