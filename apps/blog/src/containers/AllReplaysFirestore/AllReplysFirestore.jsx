// import React from "react";
// import { useState, useEffect } from "react";
// import Firebase from "../../firebase";
// import { getDoc, doc } from "@firebase/firestore";

// /**
//  * @author
//  * @function AllReplaysFirestore
//  **/

// export const AllReplaysFirestore = ({ commentId }) => {
//   const [replyComm, setReplyComm] = useState([]);
//   console.log(commentId);

//   const handleComment = async (e) => {
//     const instance = Firebase.getInstance();
//     const db = instance.db;

//     const docRef = doc(db, "comments", commentId);
//     const querySnapshot = await getDoc(docRef);

//     console.log(querySnapshot);

//     setReplyComm(
//       querySnapshot._document.data.value.mapValue.fields.comments.arrayValue
//         .values
//     );
//     // console.log(
//     //   replyComm
//   //   );
//   };

//   useEffect(() => {
//     handleComment();
//   }, []);

//     // return (
//     //     <div>
//     // {replyComm.map((reply) => (
//     //     <div key={reply}>{reply.stringValue}</div>
//     // ))}
//     // </div>
//     // );
  


// return <div>{JSON.stringify(replyComm)}</div>;

// //   return (
// //     <div>
// //       <h2>Replies</h2>
// //       {/* {displayReplies} */}
// //     </div>
// //   );
// };

// export default AllReplaysFirestore;


import React from "react";
import { useState, useEffect } from "react";
import Firebase from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";

/**
 * @author
 * @function AllReplaysFirestore
 **/

export const AllReplaysFirestore = ({ commentId }) => {
  const [replyComm, setReplyComm] = useState([]);
  console.log(commentId);

  const handleReply = async () => {
    const instance = Firebase.getInstance();
    const db = instance.db;

    const docRef = doc(db, "comments", commentId);
    const querySnapshot = await getDoc(docRef);

    if (
      !(
        querySnapshot._document.data.value.mapValue.fields.comments
          .arrayValue === []
      )
    ) {
      setReplyComm(
        querySnapshot._document.data.value.mapValue.fields.comments.arrayValue.values
      );
    } else {
      console.log("there is no comments");
    }
console.log(replyComm);
  };

  useEffect(() => {
    handleReply();
  }, []);

  return (
    <div>
      {replyComm.map((reply) => (
        <div>{reply.stringValue}</div>
      ))}
    </div>
  );

  // return <div>{JSON.stringify(replyComm)}</div>;

  //     return (
  //       <div>
  //         <h2>Replies</h2>
  //         {/* {displayReplies} */}
  //       </div>
  //     );
};

export default AllReplaysFirestore;