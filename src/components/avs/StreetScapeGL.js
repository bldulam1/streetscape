import { setXVIZConfig } from '@xviz/parser'
import React, { PureComponent } from 'react'
import { LogViewer, StreamSettingsPanel, VIEW_MODE, XVIZPanel } from 'streetscape.gl'

import { CAR, MAP_STYLE, MAPBOX_TOKEN, XVIZ_CONFIG, XVIZ_STYLE } from './constants'
import TimeLineView from './TimeLineView'

import './maps.css'

setXVIZConfig(XVIZ_CONFIG)

const exampleLog = require('./log-from-file').default

class StreetScapeGL extends PureComponent {
  state = {
    log: exampleLog,
    settings: {
      viewMode: 'PERSPECTIVE',
      showTooltip: false,
    },
  }

  componentDidMount() {
    this.state.log.on('error', console.error).connect()
  }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: { ...this.state.settings, ...changedSettings },
    })
  }

  render() {
    const { log, settings } = this.state

    return (
      <div id="container">
        <div id="control-panel">
          <XVIZPanel log={log} name="Metrics" />
          <StreamSettingsPanel log={log} />
        </div>
        <LogViewer
          log={log}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={MAP_STYLE}
          car={CAR}
          xvizStyles={XVIZ_STYLE}
          showTooltip={settings.showTooltip}
          viewMode={VIEW_MODE[settings.viewMode]}
        />
        <XVIZPanel log={log} name="Camera" />
        <TimeLineView log={log} />
      </div>
    )
  }
}

export default StreetScapeGL
