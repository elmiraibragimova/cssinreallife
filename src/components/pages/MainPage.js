import React, {Component} from 'react';
import Article from '../Article';
import articles from '../../data/articles';

class MainPage extends Component {
  render() {
    const articleList = articles.map((article, index) => 
      <li className="article" key={article.id}>
        <Article article = {article} />
      </li>
    )

    return(
      [
        <header className="content-header" key="header">
            <h4 className="content-header__heading">39 Posts</h4>
            <div>
                <a className="content-header__link" href="">Search by tag →</a>
            </div>
        </header>,

        <ul className="articles" key="articles">
            {articleList}
        </ul>,

        <footer className="content-footer" key="footer">
          <a className="content-footer__link" href="">← Previous Page</a>
          <a className="content-footer__link" href="">Next Page →</a>
        </footer>
      ]
    )
  }
}

export default MainPage;