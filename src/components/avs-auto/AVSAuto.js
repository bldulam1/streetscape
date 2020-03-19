import { ThemeProvider } from '@streetscape.gl/monochrome'
import { setXVIZConfig } from '@xviz/parser'
import React, { PureComponent } from 'react'
import { isMobile } from 'react-device-detect'
import { XVIZFileLoader } from 'streetscape.gl'

import CameraPanel from './camera-panel'
import { LOGS, MOBILE_NOTIFICATION } from './constants'
import ControlPanel from './control-panel'
import { UI_THEME } from './custom-styles'
import HUD from './hud'
import MapView from './map-view'
import NotificationPanel from './notification-panel'
import Timeline from './timeline'
import Toolbar from './toolbar'

import './stylesheets/main.scss'

const logLoader = logSettings => {
  if (logSettings.xvizConfig) {
    setXVIZConfig(logSettings.xvizConfig)
  }

  const loader = new XVIZFileLoader({
    timingsFilePath: `${logSettings.path}/0-frame.json`,
    getFilePath: index => `${logSettings.path}/${index + 1}-frame.glb`,
    worker: true,
    maxConcurrency: 4,
  })
    .on('ready', () =>
      loader.updateStreamSettings({
        '/tracklets/label': false,
      })
    )
    .on('error', console.error)

  loader.connect()

  return { selectedLog: logSettings, log: loader }
}

export default class AVSAuto extends PureComponent {
  state = {
    ...(!isMobile && logLoader(LOGS[0])),
    settings: {
      viewMode: 'PERSPECTIVE',
      showTooltip: false,
    },
  }

  _onLogChange = selectedLog => {
    this.state.log.close()
    this.setState(logLoader(selectedLog))
  }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: { ...this.state.settings, ...changedSettings },
    })
  }

  render() {
    if (isMobile) {
      return <NotificationPanel notification={MOBILE_NOTIFICATION} />
    }

    const { log, selectedLog, settings } = this.state

    return (
      <ThemeProvider theme={UI_THEME}>
        <div id="container">
          <MapView
            log={log}
            settings={settings}
            onSettingsChange={this._onSettingsChange}
          />

          <ControlPanel
            selectedLog={selectedLog}
            onLogChange={this._onLogChange}
            log={log}
          />

          <HUD log={log} />

          <Timeline log={log} />

          <Toolbar
            settings={settings}
            onSettingsChange={this._onSettingsChange}
          />

          <CameraPanel
            log={log}
            videoAspectRatio={selectedLog.videoAspectRatio}
          />
        </div>
      </ThemeProvider>
    )
  }
}
