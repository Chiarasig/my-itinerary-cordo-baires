import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import "../../index.css";
import Comments from "../Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../../redux/actions/commentsAction";

export default function HotelShows(props) {
  const { idHotel } = props;
  const [shows, setShows] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const comments = useSelector((state) => state.commentsReducers.comments);
  const dispatch = useDispatch();
  const { idUser: userId, token } = useSelector((state) => state.usersReducers);
  const [data, setData] = useState({
    comment: "",
    id: "",
  });

  React.useEffect(() => {
    axios.get(`${BASE_URL}/shows?hotelId=${idHotel}`).then((res) => {
      setShows(res.data.response);
    });
  }, [idHotel]);

  const viewCommentForId = (id) => {
    setOpen(true);
    dispatch(commentsAction.getComments(id));
  };

  const handledChange = (event) => {
    setData({
      ...data,
      comment: event.target.value,
    });
  };

  const editComment = (id_comment) => {
    setEdit(true);
    setData({
      ...data,
      id: id_comment,
    });
    console.log(data);
  };

  const sendEditData = () => {
    var info = Object.assign({}, data, { token: token });
    dispatch(commentsAction.editComments(info));
    setEdit(false);
  };

  /*   const deleteComment = (id_comment) => {
    window.alert("estás segura");
    var info = Object.assign({}, { id: id_comment }, { token: token });
    dispatch(commentsAction.deleteComments(info));
  }; */

  return (
    <div className="cardsShows">
      {shows.length !== 0 ? (
        shows.map((show) => (
          <div className="containerShowDetails">
            <img className="cardImgShow" src={show.photo} alt={show.name} />
            <div className="containerShowDetailsDescription">
              <h3 className="subtittleCardDetail">Event: {show.name}</h3>
              <h3 className="subtittleCardDetail">Price: {show.price}</h3>
              <h3 className="subtittleCardDetail">
                Description: {show.description}
              </h3>
              <h3 className="subtittleCardDetail">Date: {show.date}</h3>

              {open === true ? (
                <button
                  onClick={() => setOpen(false)}
                  className="buttonComment"
                >
                  Hide comments
                </button>
              ) : (
                <button
                  onClick={() => viewCommentForId(show._id)}
                  className="buttonComment"
                >
                  View comments
                </button>
              )}
            </div>
            <Comments id={show._id} />
            {open === true ? (
              <div className="containerComments">
                {comments?.map((comment) => {
                  if (comment?.showId?._id === show._id) {
                    return (
                      <div key={comment._id} className="comments">
                        <p className="subttitleComment">
                          {comment.userId.name}
                        </p>
                        <img
                          className="photoComment"
                          src={comment.userId.photo}
                          alt={comment.userId.name}
                        />

                        {edit === false && <p>{comment.comment}</p>}
                        {edit === true && data.id === comment._id ? (
                          <input
                            type="text"
                            defaultValue={comment.comment}
                            onChange={handledChange}
                            name="comment"
                            className="subttitleComment"
                          />
                        ) : (
                          <div></div>
                        )}
                        {userId === comment.userId._id && (
                          <>
                            {edit === true ? (
                              <button
                                className="buttonComment"
                                onClick={sendEditData}
                              >
                                Save changes
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => editComment(comment._id)}
                                  type="submit"
                                  className="buttonComment"
                                >
                                  Edit
                                </button>
                                <button
                                  className="buttonComment" /* onClick={deleteComment(comment._id)} */
                                >
                                  Delete
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))
      ) : (
        <h3>No shows found</h3>
      )}
    </div>
  );
}
