import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { REQUEST_STATUS } from "../../utils/constants";
import { getArticles, getArticles2 } from "../../store/articles/action";


export const Articles = () => {
  const articles = useSelector((state) => state.articles.articlesList);
  const articlesStatus = useSelector((state) => state.articles.request.status);
  const articlesError = useSelector((state) => state.articles.request.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles2());
  }, []);

  if (articlesStatus === REQUEST_STATUS.PENDING) {
    return <h3>LOADING...</h3>;
  }

  if (articlesError) {
    return <h3>ERROR: {articlesError}</h3>;
  }

  return (
    <>
      <div>ARTICLES PAGE</div>
      {articles.map((article) => (
        <div key={article.id}>
          <h4>{article.title}</h4>
          <div>{article.summary}</div>
          <br />
        </div>
      ))}
    </>
  );
};
