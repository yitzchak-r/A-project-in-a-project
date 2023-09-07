import { usePage } from "../providers/RouterProvider";
import Trip from "./Trip";
import { useData } from "../providers/DataProvider";
import { useId } from "../providers/IdProvider";

const Trips = () => {
  const { setPage } = usePage();
  const { data } = useData();
  const { setId } = useId();
  return (
    <div>
      <button onClick={() => setPage("HomePage")}>
        {" "}
        <i className="material-icons">home</i>
      </button>
      <button onClick={() => setPage("NewTripForm")}>
        {" "}
        <i className="material-icons">fiber_new</i>{" "}
        <i className="material-icons">border_color</i>
      </button>
      <h2>כל הטיולים</h2>
      {data &&
        data.map((trip, index) => (
          <div
            key={index}
            onClick={() => {
              setId(trip.id);
              setPage("TripDetail");
            }}
          >
            <Trip trip={trip} />
            <button
              onClick={(event) => {
                event.stopPropagation();
                fetch(`http://localhost:3000/api/trips/${trip.id}`, {
                  method: "DELETE",
                  headers: {
                    authorization: "test-token",
                  },
                });
              }}
            >
              <i className="material-icons">delete_forever</i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Trips;
