// import { usePage } from "../providers/RouterProvider";

// const UserLogIn = () => {
//   const { setPage } = usePage();

//   return (
//     <div>
//       <button onClick={() => setPage("HomePage")}>
//         <i className="material-icons">home</i>
//       </button>
//       <br />
//       <h1>אנא בחר שיטת הזדהות</h1>
//       <button
//         style={{ margin: "12px" }}
//         onClick={() => setPage("FingerprintRecognition")}
//       >
//         <i className="material-icons">fingerprint</i>
//       </button>
//       <button
//         style={{ margin: "12px" }}
//         onClick={() => setPage("UserLogInpassword")}
//       >
//         <i className="material-icons">lock_outline</i>
//       </button>
//       <button
//         style={{ margin: "12px" }}
//         onClick={() => setPage("VoicePassword")}
//       >
//         <i className="material-icons">mic_none</i>
//       </button>
//     </div>
//   );
// };

// export default UserLogIn;
import React, { useState } from "react";
import { usePage } from "../providers/RouterProvider";

const UserLogIn = () => {
  const { setPage } = usePage();

  // State to control tooltip visibility
  const [showFingerprintTooltip, setShowFingerprintTooltip] = useState(false);
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
  const [showVoiceTooltip, setShowVoiceTooltip] = useState(false);

  return (
    <div style={{ display: "grid" }}>
      <button onClick={() => setPage("HomePage")} title="Home">
        <i className="material-icons">home</i>
      </button>
      <br />
      <h1>אנא בחר שיטת הזדהות</h1>
      <button
        style={{ margin: "50PX" }}
        onClick={() => setPage("FingerprintRecognition")}
        onMouseEnter={() => setShowFingerprintTooltip(true)}
        onMouseLeave={() => setShowFingerprintTooltip(false)}
      >
        <i className="material-icons">fingerprint </i>
      </button>
      {showFingerprintTooltip && (
        <div className="tooltip">כניסה באמצעות טביעת אצבע</div>
      )}
      <button
        style={{ margin: "50PX" }}
        onClick={() => setPage("UserLogInpassword")}
        onMouseEnter={() => setShowPasswordTooltip(true)}
        onMouseLeave={() => setShowPasswordTooltip(false)}
      >
        <i className="material-icons">lock_outline</i>
      </button>
      {showPasswordTooltip && (
        <div className="tooltip">כניסה באמצעות שם משתמש וסיסמה</div>
      )}
      <button
        style={{ margin: "50PX" }}
        onClick={() => setPage("VoicePassword")}
        onMouseEnter={() => setShowVoiceTooltip(true)}
        onMouseLeave={() => setShowVoiceTooltip(false)}
      >
        <i className="material-icons">mic_none</i>
      </button>
      {showVoiceTooltip && (
        <div className="tooltip">כניסה באמצעות זיהוי קולי</div>
      )}
    </div>
  );
};

export default UserLogIn;
