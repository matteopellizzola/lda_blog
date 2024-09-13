function DualBoxesComponent(props) {
  return (
    <>
      <div className="dual-boxes">
        <div
          className="box-container"
          onClick={() => props.handleClick(props.leftLink)}
        >
          <img src={props.leftImage} alt="slide-img" />
          <span className="cta-box">{props.leftTitle}</span>
        </div>

        <div
          className="box-container"
          onClick={() => props.handleClick(props.rightLink)}
        >
          <img src={props.rightImage} alt="slide-img" />
          <span className="cta-box">{props.rightTitle}</span>
        </div>
      </div>
    </>
  );
}

export default DualBoxesComponent;
