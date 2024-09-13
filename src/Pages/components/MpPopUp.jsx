function MpPopUp({ values, setPopUp }) {
  return (
    <div className="mp-popup">
      <div className="veil" onClick={() => setPopUp(false)}>
        <div className="popup">
          <div className="close" onClick={() => setPopUp(false)}>
            X
          </div>
          <div className="body">
            {values.map((v) => {
              return <div>{v}</div>;
            })}
          </div>
          <div className="footer">
            <button onClick={() => setPopUp(false)}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MpPopUp;
