import { TripInterface } from "../providers/DataProvider";
type Props = { trip: TripInterface };
const Trip = (Props: Props) => {
  return (
    <div
      style={{
        background: "ghostwhite",
        padding: "10px",
        margin: "12px",
        borderStyle: "groove",
        borderColor: "darkseagreen",
      }}
    >
      {Props.trip.name}
    </div>
  );
};
export default Trip;
