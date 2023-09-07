import { useState } from "react";
import { TripInterface } from "../providers/DataProvider";
import { useData } from "../providers/DataProvider";
const NewTripForm = () => {
  const [tripData, setTripData] = useState<TripInterface>({
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    image: "",
    price: 0,
    description: "",
    activities: [],
  });
  const { setData } = useData();
  return (
    <div>
      <h1>New Trip</h1>
      <form>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={tripData.name}
          onChange={(e) => setTripData({ ...tripData, name: e.target.value })}
        />
        <p>Destination</p>
        <input
          type="text"
          name="destination"
          value={tripData.destination}
          onChange={(e) =>
            setTripData({
              ...tripData,
              destination: e.target.value,
            })
          }
        />
        <p>Start Date</p>
        <input
          type="text"
          name="startDate"
          value={tripData.startDate}
          onChange={(e) =>
            setTripData({ ...tripData, startDate: e.target.value })
          }
        />
        <p>End Date</p>
        <input
          type="text"
          name="endDate"
          value={tripData.endDate}
          onChange={(e) =>
            setTripData({ ...tripData, endDate: e.target.value })
          }
        />
        <p>Image</p>
        <input
          type="text"
          name="image"
          value={tripData.image}
          onChange={(e) => setTripData({ ...tripData, image: e.target.value })}
        />
        <p>Price</p>
        <input
          type="number"
          name="price"
          value={tripData.price}
          onChange={(e) =>
            setTripData({
              ...tripData,
              price: parseFloat(e.target.value),
            })
          }
        />
        <p>Description</p>
        <input
          type="text"
          name="description"
          value={tripData.description}
          onChange={(e) =>
            setTripData({
              ...tripData,
              description: e.target.value,
            })
          }
        />
        <p>Activities</p>
        <input
          type="text"
          name="activities"
          value={tripData.activities}
          onChange={(e) =>
            setTripData((prev) => {
              const temp = [...prev.activities, e.target.value];
              return {
                ...prev,
                activities: temp,
              };
            })
          }
        />
        <button
          type="submit"
          onClick={() => {
            setData((prevData) => [...prevData!, tripData]);
            const toJson = JSON.stringify(tripData);
            fetch("http://localhost:3000/api/trips", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: "test-token",
              },
              body: toJson,
            });
          }}
        >
            <i className="material-icons">check_box</i>

        </button>
      </form>
    </div>
  );
};
export default NewTripForm;
