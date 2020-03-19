import Bowser from 'bowser';

/* global window */
const browser = Bowser.getParser(window.navigator.userAgent);
const platform = browser.parsePlatform();

export default platform && platform.type === 'mobile';
