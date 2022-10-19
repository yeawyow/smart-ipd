import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IpdList from "./component/IpdList";
import PostsList from "./features/posts/PostsList";
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello, React Router!</h1>
        <Routes>
          <Route path="/" element={<IpdList />} />
          <Route path="/plist" element={<PostsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
