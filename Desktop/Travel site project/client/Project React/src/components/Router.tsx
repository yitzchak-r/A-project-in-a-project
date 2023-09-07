import HomePage from "./Home";
import NewTripForm from "./NewTripForm";
import Trips from "./Trips";
import UpdateTripForm from "./UpdateTripForm";
import UserLogIn from "./UserLogIn";
import UserRegistration from "./UserRegistration";
import { usePage } from "../providers/RouterProvider";
import TripDetail from "./TripDetail";
import FingerprintRecognition from "./FingerprintRecognition";
import VoicePassword from "./VoicePassword";
import UserLogInpassword from "./UserLogInpassword";




const Router = () => {
  const { page } = usePage();
  if (page === "HomePage") return <HomePage />;
  if (page === "AllTrips") return <Trips />;
  if (page === "UserLogIn") return <UserLogIn />;
  if (page === "UserRegistration") return <UserRegistration />;
  if (page === "TripDetail") return <TripDetail />;
  if (page === "Trips") return <Trips />;
  if (page === "FingerprintRecognition") return <FingerprintRecognition />;
  if (page === "VoicePassword") return <VoicePassword />;
  if (page === "UserLogInpassword") return <UserLogInpassword />;

  if (page === "NewTripForm") return <NewTripForm />;
  if (page === "UpdateTripForm") return <UpdateTripForm />;
  return <>page not fined</>;
};

export default Router;
