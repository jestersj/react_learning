import React, {useState} from 'react';
import MyButton from "./UI/Buttons/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()
    function transitToPost(id) {
        navigate(`/posts/${id}`, {replace:true})
    }
    return (
            <div className="post">
                <div className="post__content">
                    <div>
                        <strong>{props.post.id} {props.post.title}</strong>
                        <p>{props.post.body}</p>
                    </div>
                    <div className="post__btns">
                        <MyButton onClick={() => transitToPost(props.post.id)}>Open</MyButton>
                        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;