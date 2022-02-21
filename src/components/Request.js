import { useState } from "react";

const Request = ({ onRequest }) => {
  const [zip, setZip] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!zip) {
      alert("Please enter a US zip code");
      return;
    }

    onRequest({ zip });

    setZip("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          placeholder="95192"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Get Weather"></input>
      </div>
    </form>
  );
};

export default Request;
