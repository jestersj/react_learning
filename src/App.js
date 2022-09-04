import React, {useRef, useState} from "react";
import './styles/app.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Selects/MySelect";
import MyInput from "./Components/UI/Inputs/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Use"},
        {id: 2, title: "PHP", body: "Dont use"},
        {id: 3, title: "Ruby", body: "Dont use"}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log('aaaaaaaaa')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else return posts
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost)=> {
        setPosts([
            ...posts,
            newPost
        ])
    }
    //Getting post from child element
    const removePost = (post)=> {
        setPosts(posts.filter(el => el.id !== post.id))

    }

    const sortPosts = (sort)=> {
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <PostForm
            create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput
                placeholder='Search'
                value={searchQuery}
                onChange={ e=> setSearchQuery(e.target.value)}
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sort'
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
        {posts.length !== 0
        ?
            <PostList remove={removePost} posts={sortedPosts} title={'PostItem list 1'}/>
        :
            <div>
                <h1 style={{textAlign: 'center'}}> Posts not found</h1>
            </div>
        }
    </div>
  );
}

export default App;
