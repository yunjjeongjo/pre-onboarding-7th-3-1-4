import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/Pages/NotFound";
import Search from "@/Pages/Search";
import SearchResult from "@/Pages/SearchResult";
import Layout from "./Components/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/result/:id" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
