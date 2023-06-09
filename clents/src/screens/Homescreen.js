import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from '../components/Error';

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const  response  = await axios.get("/api/rooms/getallrooms");

        setrooms(response.data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error.message);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row-justify-content-center mt-5">
        {loading ? (
          <Loader/>
        ) : rooms.length>1 ? (
          rooms.map((room) => {
            return <div className="com-md-9 mt-3">
                  <Room room={room} />
            </div>;
          })
        ) : (
        <Error/>
        )}
      </div>
    </div>
  );
}

export default Homescreen;
