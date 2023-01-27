/**
 * Application wide event bus. Currently used to track the actions on the view
 * under review and to emit those events so that the other videos stay in
 * sync with the main video.
 */

import EventEmitter2 from "eventemitter2";
export default new EventEmitter2();
