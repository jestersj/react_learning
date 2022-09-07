import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../Components/hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetch(async ()=> {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetch(async ()=> {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(()=> {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>Page with ID = {params.id} opened</h1>
            {isLoading
            ? <Loader/>
            : <div>{post.id}. {post.title}</div>
            }
            <h1>Comment</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(el=>
                        <div style={{marginTop: 15}}>
                            <h5>{el.email}</h5>
                            <div>{el.body}</div>
                        </div>

                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;