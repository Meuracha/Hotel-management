import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Loader from "../components/Loader";
import Error from '../components/Error';

function Bookingscreen() {
  const { roomid } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rooms, setrooms] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        console.log(response);
        setrooms(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchRoom();
  }, [roomid]);

  return (
    <div className="m-5"> 
      {loading ? (
        <Loader/>
      )
       : rooms ?(
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{rooms?.name}</h1>
              {rooms?.imageurls && rooms?.imageurls.length > 0 && (
                <img src={rooms.imageurls[0]} className="big-img" />
              )}
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details </h1>
                <hr />
                <b>
                  <p>Name :</p>
                  <p>From Date : </p>
                  <p>To Date : </p>
                  <p>Max Count : {rooms.maxcount}</p>

                </b>
              </div>

              <div style={{ textAlign: "right" }}>
             
                <b>
                <h1>Amount </h1>
                <hr />
                  <p>Total days : </p>
                  <p>Rent per day {rooms.rentperday}</p>
                  <p>Total Amount</p>
                </b>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now </button>

              </div>

              
            </div>
          </div>
        </div>) : (<Error/> )}
    </div>
  );
}

export default Bookingscreen;
