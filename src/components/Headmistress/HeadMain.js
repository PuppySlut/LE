import FirstVisit from "./FirstVisit";

const HeadMain = (props) => {
  const { variables } = props;
  const { headOp } = variables;
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);

  if (headOp === 0) {
    return (
      <FirstVisit
        {...props}
        next={() => {
          props.setHeadOp(headOp + 1);
          props.setArea("evening");
          props.setNN("Mommy's bimbo");
        }}
      />
    );
  }
};

export default HeadMain;
