// import { useData } from "../providers/DataProvider";
// import { usePage } from "../providers/RouterProvider";
// import { useId } from "../providers/IdProvider";
// import { useEffect } from "react";

// const TripDetail = () => {
//   const { setPage } = usePage();
//   const { id } = useId();
//   useEffect(() => {
//     fetch(`http://localhost:3000/api/trips/${id}`)}

//   const { data } = useData();
//   const tripInfo = data && data?.find((trip) => trip.id === id);
//   if (!tripInfo) return <p>עמוד לא נמצע</p>;
//   const {
//     activities,
//     description,
//     destination,
//     endDate,

//     image,
//     name,
//     price,
//     startDate,
//   } = tripInfo;
//   return (
//     <>
//       <button onClick={() => setPage("HomePage")}>
//         {" "}
//         <i className="material-icons">home</i>
//       </button>
//       <button onClick={() => setPage("Trips")}>
//         {" "}
//         <i className="material-icons">arrow_forward</i>
//       </button>

//       <div>
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <img
//           style={{ height: "180px", width: "190px" }}
//           src={image}
//           alt="תמונה של הטיול"
//         ></img>
//         <p>{activities}</p>
//         <p>{destination}</p>
//         <p>{startDate}</p>
//         <p>{endDate}</p>
//         <p>{price}</p>
//       </div>
//       <button onClick={() => setPage("UpdateTripForm")}>
//         <i className="material-icons">border_color</i>
//       </button>
//     </>
//   );
// };

// export default TripDetail;
import { useData } from "../providers/DataProvider";
import { useId } from "../providers/IdProvider";
import { usePage } from "../providers/RouterProvider";
import { useEffect, useState } from "react";
const TripDetail = () => {
  const { setData } = useData();
  const { id } = useId();
  const { setPage } = usePage();
  const [thisTrip, setThisTrip] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/api/trips/${id}`)
      .then((response) => response.json())
      .then((data) => setThisTrip(data))
      .catch((error) => console.log(error));
  }, []);
  if (!thisTrip) return <p>page not fount</p>;
  const {
    activities,
    description,
    destination,
    endDate,
    image,
    name,
    price,
    startDate,
  } = thisTrip;
  const handleDelete = async (tripId: string) => {
    try {
      // Make the DELETE request to the server
      await fetch(`http://localhost:3000/api/trips/${tripId}`, {
        method: "DELETE",
        headers: {
          authorization: "test-token",
        },
      });
      // Update the component's state by filtering out the deleted trip
      setData((prevData) => prevData!.filter((trip) => trip.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };
  return (
    <div className="trip-container">
      <button onClick={() => setPage("HomePage")}>Home</button>
      <button onClick={() => setPage("Trips")}>All Trips</button>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={"Picture of " + name} />
      <p>Activities: {activities}</p>
      <p>Destination {destination}</p>
      <p>
        Starting {startDate} Ending {endDate}
      </p>
      <p>Price: {price}</p>
      <button
        onClick={(event) => {
          event.stopPropagation();
          handleDelete(id!); // Call the handleDelete function with trip ID
        }}
      >
        delete
      </button>{" "}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPage("UpdateTripForm");
        }}
      >
        update
      </button>
    </div>
  );
};
export default TripDetail;
