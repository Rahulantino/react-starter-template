import "./App.css";
import { useFetchPostsQuery } from "./services/GetPostsAPI/getPostsAPI";

function App() {
const {data} =  useFetchPostsQuery();
console.log(data,"data");
  return (
    <>
      <h2>Hello!</h2>
    </>
  );
}

export default App;
