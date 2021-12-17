import React, { useState } from "react";
import Firebase from "../../firebase";
import { doc, updateDoc, arrayUnion } from "@firebase/firestore";

const instance = Firebase.getInstance();
const database = instance.db;

export default function ReplyForm({ commentId }) {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [replyComm, setReplyComm] = useState("");

  const handleSubmitReply = async (replyComm, commentId) => {
    const commentRef = doc(database, "comments", commentId);
    console.log(commentRef);

    await updateDoc(commentRef, {
      comments: arrayUnion(replyComm),
    });
  };

  return (
    <>
      {openReplyForm ? (
        <div>
          <div className="formGroup">
            <textarea
              placeholder="Enter Reply..."
              value={replyComm}
              onChange={(e) => setReplyComm(e.target.value)}
            ></textarea>
          </div>
          <div className="formGroup">
            <button
              onClick={handleSubmitReply(replyComm, commentId)}
              type="button"
            >
              Reply
            </button>
            <button onClick={() => setOpenReplyForm(false)} type="button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpenReplyForm(true)} type="submit">
          Reply
        </button>
      )}
    </>
  );
}
