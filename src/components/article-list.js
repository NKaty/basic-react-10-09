import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      articleId: null
    }
  }
  /*
    state = {
        articleId: null
    }
*/

  render() {
    return <ul>{this.body}</ul>
  }

  toggleOpenArticle = (articleId) => () => this.setState({ articleId })

  get body() {
    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.state.articleId === article.id}
          toggleOpen={this.toggleOpenArticle(article.id)}
        />
      </li>
    ))
  }
}

export default ArticleList
