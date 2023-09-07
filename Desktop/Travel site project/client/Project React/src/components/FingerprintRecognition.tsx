import { usePage } from "../providers/RouterProvider";

const FingerprintRecognition = () => {
  const { setPage } = usePage();

  return (
    <>
      <p style={{ fontSize: "45px" }}>
        לצערינו אנו לא מזהים במכשירך חישן טביעת אצבע{" "}
        <p style={{ fontSize: "45px" }}></p> יש לנסות להכנס דרך סיסמה או זיהוי
        קולי
      </p>
      <p style={{ color: "red" }}>שגיאה מספר 68473#</p>
      <button onClick={() => setPage("UserLogIn")}>
        {" "}
        <i className="material-icons">arrow_forward</i>{" "}
      </button>
    </>
  );
};

export default FingerprintRecognition;
