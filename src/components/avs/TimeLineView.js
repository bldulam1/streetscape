// import { MeterWidget, PlaybackControl } from "streetscape.gl"
// import React, { useState } from "react"

// import { getXVIZConfig } from "@xviz/parser"

// const TIMEFORMAT_SCALE =
//   getXVIZConfig().TIMESTAMP_FORMAT === "seconds" ? 1000 : 1

// export default ({ log }) => {
//   const [state, setstate] = useState({ isPlaying: false })

//   return (
//     <div id="timeline">
//       <PlaybackControl
//         width="100%"
//         log={log}
//         formatTimestamp={x => new Date(x * TIMEFORMAT_SCALE).toUTCString()}
//       />
//     </div>
//   )
// }

import { MeterWidget, PlaybackControl } from "streetscape.gl"
import React, { PureComponent } from "react"

import { PLAYBACK_CONTROL_STYLE } from "./custom-styles"

const formatTimestamp = x => new Date(x * 1000).toUTCString()

export default class Timeline extends PureComponent {
  state = {
    isPlaying: false,
  }

  componentDidMount() {
    document.addEventListener("keydown", this._onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._onKeyDown)
  }

  _seek(delta) {
    const { log } = this.props
    const startTime = log.getLogStartTime()
    const endTime = log.getLogEndTime()
    let timestamp = log.getCurrentTime()

    if (Number.isFinite(timestamp)) {
      timestamp += delta
      if (timestamp < startTime) {
        timestamp = startTime
      }
      if (timestamp > endTime) {
        timestamp = endTime
      }
      log.seek(timestamp)
    }
  }

  _onPlay = () => this.setState({ isPlaying: true })
  _onPause = () => this.setState({ isPlaying: false })

  _onKeyDown = evt => {
    switch (evt.keyCode) {
      case 32: // space
        if (this.state.isPlaying) {
          this._onPause()
        } else {
          this._onPlay()
        }
        break

      case 37: // left
        this._seek(-0.1)
        break

      case 39: // right
        this._seek(0.1)
        break

      default:
    }
  }

  render() {
    const { log } = this.props
    const { isPlaying } = this.state

    return (
      <div id="timeline">
        <MeterWidget
          log={log}
          streamName="/vehicle/acceleration"
          label="Acceleration"
          min={-4}
          max={4}
        />
        <MeterWidget
          log={log}
          streamName="/vehicle/velocity"
          label="Speed"
          getWarning={x => (x > 6 ? "FAST" : "")}
          min={0}
          max={20}
        />
        <PlaybackControl
          compact={true}
          style={PLAYBACK_CONTROL_STYLE}
          isPlaying={isPlaying}
          onPlay={this._onPlay}
          onPause={this._onPause}
          onSeek={this._onSeek}
          width="100%"
          log={log}
          formatTimestamp={formatTimestamp}
        />
      </div>
    )
  }
}
