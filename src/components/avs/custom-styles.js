export const PLAYBACK_CONTROL_STYLE = {
  wrapper: {
    paddingTop: 44
  },
  slider: {
    wrapper: {
      background: 'none'
    },
    track: {
      height: 8,
      background: '#4b4b4b',
      borderRadius: 4
    },
    knobSize: 24,
    trackFill: {
      display: 'none'
    },
    knob: props => ({
      width: 2,
      borderRadius: 0,
      borderColor: props.theme.controlColorActive,
      marginLeft: -1,
      borderWidth: 1
    })
  },
  tick: {
    color: '#D0D0D1'
  },
  buffer: {
    background: '#111',
    borderRadius: 4
  },
  lookAheadSlider: {
    knobSize: 8,
    track: {
      height: 4,
      background: '#111',
      borderRadius: 2
    },
    trackFill: {
      background: '#858586',
      borderRadius: 2
    },
    knob: {
      borderWidth: 4
    }
  },
  lookAheadMarker: props => ({
    borderTopColor: props.theme.controlColorActive
  }),
  playPauseButton: {
    width: 24,
    height: 24,
    marginLeft: 12,
    marginBottom: 4
  },
  controls: {
    borderTop: 'solid 1px #404042',
    marginTop: 4,
    padding: '12px 24px'
  },
  timestamp: {
    color: '#fff',
    position: 'absolute',
    left: 12,
    top: 12
  }
};