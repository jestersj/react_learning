import React, {useEffect, useRef, useState} from "react";
import '../styles/app.css'
import {getPagesCount} from "../Components/utils/pages";
import {useFetch} from "../Components/hooks/useFetch";
import {usePosts} from "../Components/hooks/usePosts";
import MyModal from "../Components/UI/Modals/MyModal";
import PostForm from "../Components/PostForm";
import Loader from "../Components/UI/Loader/Loader";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import Pagination from "../Components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import MyButton from "../Components/UI/Buttons/MyButton";
import {useObserver} from "../Components/hooks/useObserver";
import MySelect from "../Components/UI/Selects/MySelect";


function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false)

    const [totalPages, setTotalPages] = useState(0)

    const [limit, setLimit] = useState(10)

    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()


    const [fetchPosts, isPostsLoading, postError] = useFetch(async ()=> {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, page<totalPages, isPostsLoading, ()=> {
        setPage(page+1)
    })

    useEffect(()=> {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost)=> {
        setPosts([
            ...posts,
            newPost
        ])
        setModal(false)
    }



    //Getting post from child element
    const removePost = (post)=> {
        setPosts(posts.filter(el => el.id !== post.id))

    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            {/*<button onClick={fetchPosts}>Posts</button>*/}
            <MyButton
                style={{marginTop: '30px'}}
                onClick={()=>setModal(true)}>Create post</MyButton>
            <MyModal visible={modal}
                     setVisible={setModal}
            >
                <PostForm
                    create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue='Amount of elements on page'
                      options={[
                          {value: 5, name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'All'}
                      ]}
            />
            {postError && <h1>The error ${postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'PostItem list 1'}/>
            <div style={{height: 20, background: 'red'}}
                 ref={lastElement}
            />
            {isPostsLoading &&
                 <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>}

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>

        </div>
    );
}

export default Posts;