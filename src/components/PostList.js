import Post from './Post'

const PostList =({posts ,remove})=>{ 
    return (
    <div>
         {posts.map((post) => {
        return <Post post={post} key={post.id} remove={remove} />;
      })}
    </div>
    )
}
export  default PostList