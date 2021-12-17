import React from "react";
import { useState, useEffect } from "react";
import Firebase from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";

/**
 * @author
 * @function AllReplaysFirestore
 **/

export const AllReplaysFirestore = ({ commentId }) => {
  const [replayComm, setReplayComm] = useState([]);
  console.log(commentId);

  const handleComment = async (e) => {
    const instance = Firebase.getInstance();
    const db = instance.db;

    const docRef = doc(db, "comments", commentId);
    const querySnapshot = await getDoc(docRef);

    if (
      querySnapshot._document.data.value.mapValue.fields.comments.arrayValue == ![]
    ) {
      setReplayComm(
        querySnapshot._document.data.value.mapValue.fields.comments.arrayValue
          .values
      );} else {
          console.log("there is no comments")
      }


    console.log(
      querySnapshot._document.data.value.mapValue.fields.comments.arrayValue
        .values
    );
  };

  useEffect(() => {
    handleComment();
  }, []);

  return (
    <div>
      {replayComm.map((replay, index) => (
        <div key={index}>{replay.stringValue}</div>
      ))}
    </div>
  );

  // return <div>{JSON.stringify(replayComm)}</div>;

  //   return (
  //     <div>
  //       <h2>Replies</h2>
  //       {/* {displayReplies} */}
  //     </div>
  //   );
};

export default AllReplaysFirestore;
