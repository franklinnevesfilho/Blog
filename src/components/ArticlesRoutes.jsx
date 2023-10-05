import {Route, Routes} from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import Article from "./pages/Article.jsx";
import ArticleForm from "./pages/ArticleForm.jsx";

function ArticlesRoutes() {
  return (
      <Routes>
          <Route index element={<ArticlesPage />} />
          <Route path={":id"} element={<Article />} />
          <Route path={"new"} element={<ArticleForm />} />
      </Routes>
  );
}
export default ArticlesRoutes;