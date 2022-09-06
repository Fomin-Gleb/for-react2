import Main from "../components/Main";
import { useLocation } from "react-router-dom";
const PostsPage = () => {

  const location=useLocation();
     console.log(location)
  return (
    <div>
      <div>Its PostsPage page</div>
      <Main />
    </div>
  );
};
export default PostsPage;
