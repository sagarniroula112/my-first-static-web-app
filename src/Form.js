import { useState } from "react";

export function Form({ handleShowCards }) {
  const [urea, setUrea] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (
      urea === "" ||
      phosphorus === "" ||
      potassium === "" ||
      ph === "" ||
      temperature === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }
    console.log("form submitted!"); // test

    const data = {
      urea,
      phosphorus,
      potassium,
      ph,
      temperature,
      id: Date.now(),
    };
    console.log(data);

    setUrea("");
    setPhosphorus("");
    setPotassium("");
    setPh("");
    setTemperature("");

    alert("Your data has been submitted successfully!");
  }

  return (
    <div className="recommendation-content-box">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <h3>Please provide us your details...</h3>
        <label>Urea</label>
        <input
          type="text"
          placeholder="Urea..."
          value={urea}
          onChange={(e) => setUrea(e.target.value)}
        />
        <label>Phosphorus</label>
        <input
          type="text"
          placeholder="Phosphorus..."
          value={phosphorus}
          onChange={(e) => setPhosphorus(e.target.value)}
        />
        <label>Potassium</label>
        <input
          type="text"
          placeholder="Potassium..."
          value={potassium}
          onChange={(e) => setPotassium(e.target.value)}
        />
        <label>Ph</label>
        <input
          type="text"
          placeholder="Ph..."
          value={ph}
          onChange={(e) => setPh(e.target.value)}
        />
        <label>Temperature</label>
        <input
          type="text"
          placeholder="Temperature..."
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <div className="form-buttons" style={{ display: "flex" }}>
          <button
            style={{
              width: "50%",
              marginLeft: "0px",
              marginTop: "0vh",
            }}
            className="button"
          >
            Submit
          </button>
          <button
            className="button"
            style={{
              width: "50%",
              marginLeft: "-2vw",

              marginTop: "0vh",
            }}
            onClick={handleShowCards}
          >
            Return
          </button>
        </div>
      </form>
    </div>
  );
}
