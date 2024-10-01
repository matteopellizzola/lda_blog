function SingleBoxComponent(props) {
  return (
    <>
      {props.image && (
        <div className="mono-box">
          <div className="box-container" onClick={() => handleClick("about")}>
            <img src={props.image} alt={props.title + "_image"} />
            {props.title && <span className="cta-box">{props.title}</span>}
          </div>
        </div>
      )}
    </>
  );
}

export default SingleBoxComponent;
