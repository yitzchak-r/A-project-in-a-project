import { CSSProperties } from "react";
import { usePage } from "../providers/RouterProvider";
const buttonStyele: CSSProperties = {
  marginTop: "7px",
};
const titlStyele: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  color: "green",
};
const HomePage = () => {
  const page = usePage();
  return (
    <div style={{ display: "grid" }}>
      <h1 style={{ ...titlStyele, fontSize: "69px" }}>Your trip</h1>
      <h3 style={titlStyele}>חברתנו מתמחה באירגון טיולים בארץ ובחו"ל</h3>
      <button
        onClick={() => page.setPage("AllTrips")}
        style={{ ...buttonStyele, height: "35px" }}
      >
        מעבר לכל הטיולים
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => page.setPage("UserRegistration")}
          style={{
            ...buttonStyele,
            height: "32PX",
            margin: "7px",
            borderRadius: "39%",
            padding: "5px",
            backgroundColor: "chartreuse",
            widows: "116px",
          }}
        >
          מעבר לרישום
        </button>
        <button
          onClick={() => page.setPage("UserLogIn")}
          style={{
            ...buttonStyele,
            backgroundColor: "chartreuse",
            width: "116px",
            margin: "7px",
            borderRadius: "39%",
            padding: "5px",
          }}
        >
          מעבר להתחברות
        </button>
      </div>
      <img
        style={{
          height: "360px",
          width: "97%",
          border: "solid",
          margin: "5px",
        }}
        src="https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_640.jpg"
        alt="תמונה של עמוד הבית של האתר"
      />
      <hr
        style={{
          border: "10px solid green",
          borderRadius: "5px",
          marginTop: "15px",
        }}
      ></hr>
    </div>
  );
};

export default HomePage;
