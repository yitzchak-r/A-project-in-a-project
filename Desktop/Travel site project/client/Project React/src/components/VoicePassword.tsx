import { usePage } from "../providers/RouterProvider";

const VoicePassword = () => {
  const { setPage } = usePage();

  return (
    <>
      <p style={{ fontSize: "45px" }}>
        לצערינו המיקרפון במכשירך אינו תומך בזיהוי קולי{" "}
        <p style={{ fontSize: "45px" }}></p> יש לנסות להכנס דרך סיסמה או טביעת
        אצבע
      </p>
      <h1 style={{ color: "red" }}>שגיאה מספר 68462#</h1>

      <button onClick={() => setPage("UserLogIn")}>
        {" "}
        <i className="material-icons">arrow_forward</i>{" "}
      </button>
    </>
  );
};

export default VoicePassword;
