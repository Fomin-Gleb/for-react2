
import axios from 'axios';

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    // withCredentials:true,
    // headers:{
    //     "API-KEY":"jjkjk-mclkcld"
    // }
})

export const postsApi={
      getPosts(){
        return  instance.get('/posts')
      },
      addPost(post){
        return instance.post('/posts', {post})
      },
      removePost(id){
        return instance.delete(`/posts/${id}`)
      }

}

