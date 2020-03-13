import { ThemeProvider } from '@streetscape.gl/monochrome'
import { setXVIZConfig } from '@xviz/parser'
// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* global document */
import React, { PureComponent } from 'react'
import { XVIZFileLoader } from 'streetscape.gl'

import { LOGS } from './constants'
// import CameraPanel from './camera-panel'
// import ControlPanel from './control-panel'
// import { UI_THEME } from './custom-styles'
// import HUD from './hud'
import MapView from './map-view'
// import NotificationPanel from './notification-panel'
import Timeline from './timeline'
// import Toolbar from './toolbar'

import './stylesheets/main.scss'


export default class AVSAutoWS extends PureComponent {
  state = {
    ...this._loadLog(LOGS[0]),
    settings: {
      viewMode: 'PERSPECTIVE',
      showTooltip: false,
    },
  }

  _loadLog(logSettings) {
    if (logSettings.xvizConfig) {
      setXVIZConfig(logSettings.xvizConfig)
    }
    const url =
      'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync'

    const loader = new XVIZFileLoader({
      timingsFilePath: `${url}/0-frame.json`,
      getFilePath: index => `${url}/${index + 1}-frame.glb`,
      worker: true,
      maxConcurrency: 4,
    })
      .on('ready', () =>
        loader.updateStreamSettings({
          '/tracklets/label': false,
        })
      )
      .on('error', console.error) // eslint-disable-line

    loader.connect()

    return { selectedLog: logSettings, log: loader }
  }

  _onLogChange = selectedLog => {
    this.state.log.close()
    this.setState(this._loadLog(selectedLog))
  }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: { ...this.state.settings, ...changedSettings },
    })
  }

  render() {
    const { log, selectedLog, settings } = this.state

    return (
      <div id="container">
        <MapView
          log={log}
          settings={settings}
          onSettingsChange={this._onSettingsChange}
        />
        <Timeline log={log} />

        {/* <ControlPanel
          selectedLog={selectedLog}
          onLogChange={this._onLogChange}
          log={log}
        />

        <HUD log={log} />


        <Toolbar
          settings={settings}
          onSettingsChange={this._onSettingsChange}
        />

        <CameraPanel
          log={log}
          videoAspectRatio={selectedLog.videoAspectRatio}
        /> */}
      </div>
    )
  }
}
