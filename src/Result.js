export function Result() {
  return (
    <div id="wrap" style={{ display: "flex" }}>
      {/* <div
        className="add-form"
        style={{ width: "20vw", marginLeft: "4vw", height: "50vh" }}
      >
        <div>
          <h3 style={{ marginTop: "2vh" }}>Results</h3>
          <p>According to provided data, the suitable crop is,</p>
          {/* <button
              key="1"
              className={"button-1"}
              onClick={(e) => handleClick(e)}
            ></button> */}
      {/* DATA TO BE FETCHED FROM BACKEND HERE! */}
      {/* <h1>"Carrot"</h1>
        </div>
      // </div> */}{" "}
      <iframe
        id="scaled-frame"
        src="https://croprecommendationsystem.azurewebsites.net"
        width="100%"
        height="100%"
      ></iframe>
      ;
    </div>
  );
}
