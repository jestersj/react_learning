import React, {useState} from 'react';
import MyButton from "./UI/Buttons/MyButton";

const PostItem = (props) => {
    return (
            <div className="post">
                <div className="post__content">
                    <div>
                        <strong>{props.number} {props.post.title}</strong>
                        <p>{props.post.body}</p>
                    </div>
                    <div className="post__btns">
                        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;