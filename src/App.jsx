import "./App.css";
import { useGetPostsQuery } from "./services/GetPostsAPI/getPostsAPI";

function App() {
  const data = useGetPostsQuery();
  console.log(data);
  return (
    <>
      <h2>RTK Starter Template</h2>
    </>
  );
}

export default App;
