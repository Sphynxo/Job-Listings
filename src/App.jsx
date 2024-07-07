import Header from "./Components/Header";
import JobList from "./Components/JobList";
import jobs from "./Data/data.json";
import { useState } from "react";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  const handleTag = (tag) => {
    setActiveTags((prevTags) => (!prevTags.includes(tag) ? [...prevTags, tag] : prevTags));
  };

  return (
    <>
      <Header activeTags={activeTags} setActiveTags={setActiveTags} />
      <JobList jobs={jobs} activeTags={activeTags} handleTag={handleTag} />
    </>
  );
}

export default App;
