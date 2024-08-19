import "./App.css";
import ApplicationList from "./ApplicationList";
import EmployeeList from "./EmployeeList";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <EmployeeList />
      <ApplicationList />
      <PostList />
    </div>
  );
}

export default App;
