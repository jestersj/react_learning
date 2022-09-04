import React, {useState} from 'react';
import MyInput from "./UI/Inputs/MyInput";
import MyButton from "./UI/Buttons/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form action="">
            {/*Managed component*/}
            <MyInput value={post.title}
                     placeholder={'Some input shit'}
                     onChange={e => setPost({...post, title: e.target.value})}
            />
            {/*Unmanaged component*/}
            <MyInput value={post.body}
                     placeholder={'Other input shit'}
                     onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Push it</MyButton>
        </form>
    );
};

export default PostForm;