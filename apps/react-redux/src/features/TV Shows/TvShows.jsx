import React from "react";
import axios from "axios";
import { tv } from "../../api";
import { useEffect, useState } from "react";
import { tv as tvApi } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTvShows } from "../TV Shows/tvShowsSlice";

export default function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [tvShowDetail, setTvShowDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
        const getTvShows = async () => {
          const { url } = tv.get.discover;
          const responseTv = await axios.get(url);
          setTvShows(responseTv.data.results);
          dispatch(addTvShows(responseTv.data.results))
          console.log(responseTv.data.results)
        };
    
        getTvShows();
      }, [dispatch]);

  const getDetails = async (tv) => {
    const { url } = tvApi.get.single;
    const { data: responseTv } = await axios.get(url(tv.id));
    setTvShowDetail(responseTv);
    console.log(responseTv)
  };

  
  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/">Back</NavLink>
        <div>
          {tvShows.map((tv) => (
            <div style={{ cursor: "pointer" }} onClick={() => getDetails(tv)}>
              {tv.name}
            </div>
          ))}
        </div>
      </div>
      <div className="row ms-5">
        {!tvShowDetail ? (
          "Click on a TvShow to see details"
        ) : (
          <div>
            <h2>{tvShowDetail.name}</h2>
            <div>{JSON.stringify(tvShowDetail, null, 4)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// useEffect(() => {
    //     const getTvShows = async () => {
    //       const { url } = tv.get.discover;
    //       const responseTv = await axios.get(url);
    //       dispatch(addTvShows(responseTv.data.results))
    //     };
    
    //     getTvShows();
    //   }, []);

    // const fetchData = async () => {
    //     const { url } = tvApi.get.discover;
    //     const { data } = await axios.get(url);
    //     setTvShows(data.results);
    //   };