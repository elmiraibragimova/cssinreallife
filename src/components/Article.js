import React, {Component} from 'react';

class Article extends Component {
  render() {
    const {article} = this.props;

    return (
      <a href={article.id}>
        <section>
          <h2 className="article__title">
            <span>{article.title}</span>
          </h2>
          <time dateTime={article.time}>{article.time}</time>
          <p>{article.intro}</p>
        </section>
      </a>
    )
  }
}

export default Article;