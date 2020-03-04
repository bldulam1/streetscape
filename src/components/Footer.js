import PropTypes from 'prop-types'
import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Veoneer | Global Data Factory |
      <a href="https://html5up.net">Data Analytics</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
