import PropTypes from 'prop-types'
import React from 'react'

// import pic01 from '../images/pic01.jpg'
// import pic03 from '../images/pic03.jpg'
import pic02 from '../images/pic02.jpg'

function Contact(info) {
  const ind = info.indexOf('<')
  return {
    email: info.slice(ind + 1, info.length - 1),
    name: info.slice(0, ind),
  }
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    let contacts = 'Daniel Danch <daniel.danch@veoneer.com>; Sebastian Franz <sebastian.franz@veoneer.com>; Isaac Alonso-Fernandez <isaac.alonso-fernandez@veoneer.com>; Sandeep Pandey <sandeep.pandey@veoneer.com>; Maruthi Nanjegowda <maruthi.nanjegowda@veoneer.com>; Siddaramu Shankar <siddaramu.shankar@veoneer.com>; Anupama Marigowda <anupama.marigowda@veoneer.com>; Ravi Soni <ravi.soni@veoneer.com>; Bhanu Prasad <bhanu.prasad.external@veoneer.com>; Aniket Kumar <aniket.kumar.external@veoneer.com>; Praveena Balakrishna <praveena.balakrishna@veoneer.com>; Martin Dahl <martin.dahl@veoneer.com>; Ludwig Ring <ludwig.ring@veoneer.com>; Dimitrios Felekidis <dimitrios.felekidis@veoneer.com>; Linus Blomquist <linus.blomquist.external@veoneer.com>; Robert Wingren <robert.wingren@veoneer.com>; Christopher Burdett <christopher.burdett@veoneer.com>; Brendon Dulam <brendon.dulam@veoneer.com>; Rafael Trailescu <rafael.trailescu@veoneer.com>'
      .split(';')
      .map(Contact)

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mission Statement</h2>
          <p>
            Data Analytics will develop a platform to provide a wide variety of
            information with low-latency allowing users to make data-driven
            decisions for product development, testing and management
          </p>
          <p>
            Data Analytics will create and maintain a qualified analysis toolkit
            for product verification and validation​
          </p>
          <p>
            Data Analytics will provide product performance metrics based on
            standardized and qualified solutions​ ​ ​
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Team</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <ul>
            {contacts.map(({ name, email }, index) => (
              <div>
                <a key={`${email}`} href={`mailto: ${email}`}>
                  {name}
                </a>
              </div>
            ))}
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
