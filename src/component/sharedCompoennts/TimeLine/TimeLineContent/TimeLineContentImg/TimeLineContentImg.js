import React, { useEffect, useState } from "react";
import "./style.css";

export default function TimeLineContentImg({ TimeLineItem }) {
  let [numLike, setNumLike] = useState(0);
  let [numComment, setNumComment] = useState(0);
  let [clicklike, setClicklike] = useState(false);
  let [clickcomment, setClickcomment] = useState(false);

  useEffect(() => {
    if (clicklike) {
      setNumLike(numLike + 1);
    } else {
      setNumLike(0);
    }

    if (clickcomment) {
      setNumComment(numComment + 1);
    } else {
      setClickcomment(0);
    }
  }, [clickcomment, clicklike])

  function incLike() {
    setClicklike(!clicklike);
   
  }
  function incComment() {
    setClickcomment(!clickcomment);
  
  }
  return (
    <>
      <div className="TimeLineContentImg">
        <div className="itemContent">
          <div className="itemContent-img">
            <img src={TimeLineItem.coverImg} />
          </div>
          <div className="itemContent-desc">
            <div className="userProfile">
              <img src={TimeLineItem.profileImg} />
              <span>
                {TimeLineItem.firstName + " " + TimeLineItem.firstName}
              </span>
            </div>
            <div className="userActivity">
              <span className="likes">
                <button onClick={incLike}>
                  <i
                    className={`fa-solid fa-heart ${
                      clicklike ?  "active-like" : "" }
                    }`
                  }
                  ></i>
                </button>
                {numLike}
              </span>
              <span className="comments">
                <button onClick={incComment}>
                  <i class="fa-solid fa-comment-dots"></i>
                </button>
                {numComment}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
