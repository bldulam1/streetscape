import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-line-chart"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Data Analytics</h1>
        <p>
          A platform to help users make data-driven decisions for product
          development, testing and management ​
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Info
          </button>
        </li>
        <li>
          <Link to="/avs">
            <button>AVS</button>
          </Link>
        </li>
        <li>
          <Link to="/stats">
            <button>Power BI</button>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Our Team
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
