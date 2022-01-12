import React from "react";
import axios from "axios";
import { tv } from "../../api";
import { useEffect, useState } from "react";
import { tv as tvApi } from "../../api";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
  addTvShows, 
  addSingleTvShowDetail, 
  setSelectedTvShow, 
  selectTvShows, 
  selectTvDetails, 
  selectedTvShow 
} from "../TV Shows/tvShowsSlice";

export default function TvShows() {
  const allTvShows = useSelector(selectTvShows);
  const singleTvShowDetails = useSelector(selectTvDetails);
  const selectedTvShowDetails = useSelector(selectedTvShow);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!dispatch) return;

    // if tvShows are fetched, don't fetch
    if (allTvShows.fetched) return;
    const getTvShows = async () => {
      const { url } = tv.get.discover;
      const response = await axios.get(url);
      dispatch(addTvShows(response.data.results));
    };

    getTvShows();
  }, [allTvShows, dispatch]);

  const getDetails = async (tv) => {
    if (Object.keys(singleTvShowDetails).includes(tv.id.toString())) {
      dispatch(setSelectedTvShow(singleTvShowDetails[tv.id]));
      return;
    }

    // Perform fetch to get the tvShow details
    const { url } = tvApi.get.single;
    const { data: response } = await axios.get(url(tv.id));

    // Store in redux tvShow details and set selected tvShow
    // to be the one we just click on
    dispatch(addSingleTvShowDetail(response));
    dispatch(setSelectedTvShow(response));
  };


  return (
    <div className="d-flex d-flex-start p-5">
      <div style={{ minWidth: 400 }}>
        <NavLink to="/">Back</NavLink>
        <div>
          {allTvShows.tvShows.length > 0 &&
            allTvShows.tvShows.map((tvShow) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => getDetails(tvShow)}
              >
                {tvShow.name}
              </div>
            ))}
          {allTvShows.tvShows.length === 0 ? <div>Loading</div> : null}
        </div>
      </div>
      <div className="row ms-5">
        {!selectedTvShowDetails ? (
          "Click on a tvShow to see details"
        ) : (
          <div>
            <h2>{selectedTvShowDetails.name}</h2>
            <div>{JSON.stringify(selectedTvShowDetails.overview, null, 4)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

  
//   return (
//     <div className="d-flex d-flex-start p-5">
//       <div style={{ minWidth: 400 }}>
//         <NavLink to="/">Back</NavLink>
//         <div>
//           {tvShows.map((tv) => (
//             <div style={{ cursor: "pointer" }} onClick={() => getDetails(tv)}>
//               {tv.name}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="row ms-5">
//         {!tvShowDetail ? (
//           "Click on a TvShow to see details"
//         ) : (
//           <div>
//             <h2>{tvShowDetail.name}</h2>
//             <div>{JSON.stringify(tvShowDetail, null, 4)}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

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