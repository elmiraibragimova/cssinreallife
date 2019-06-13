import React, {Component} from 'react';
import tags from '../../data/tags';

class TagsPage extends Component {
  render() {
    const tagList = tags.map((tag, index) => 
      <li className="tags__item" key={tag.id}>
        <a className="tags__link" href={`/tags/${tag.id}`}>{tag.title}</a> <span>({tag.amount} posts)</span>
      </li>
    )

    return (
      [
        <h2 className="title" key="tagTitle">Tags</h2>,
        <ul className="tags" key="tagList">{tagList}</ul>
      ]
      
    )
  }
}

export default TagsPage;