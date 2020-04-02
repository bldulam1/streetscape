# Data Analytics Autonomous Visualization System

This is a visualization tool for lidar, camera, and vehicle CAN (radar) data. AVS is a new standard for describing and visualizing autonomous vehicle perception, motion, and planning data, offering a powerful web-based toolkit to build applications for exploring, interacting and, most critically, making important development decisions with that data.

## Installation

* Clone

  `git clone http://de01-gitlab01.corp.int/data-analytics/streetscape.git`

* Install Packages

  `yarn`

* Development/ Making modifications

  `yarn develop`

* Formatting source code

  It is advised to format the source code before pushing changes to git. This will significantly minimize merge conflicts with other branches.

  `yarn format`

* Deployment

  `yarn build && yarn serve`

## User Guide

### StreetscapeGL

StreetscapeGL is a visualization toolkit for autonomy and robotics data encoded in the XVIZ protocol. It offers a collection of composable React components that let users visualize and interact with XVIZ data.

https://avs.auto/#/streetscape.gl/overview/introduction

#### Features
  - Load XVIZ data from static files or a stream server
  - Visualize dynamic XVIZ data in a fully interactive 3D context.
    - Overlay with base map - put your data in the real world context
    - Navigate the viewport: pan, rotate, zoom
    - Select objects to display additional annotation
    - Turn on/off primitive streams
    - Customize camera modes: top down, perspective, driver, etc.
  - Playback logs of unlimited length, seek forwards and backwards in time.
  - Render XVIZ declarative UI, allowing your backend or on-robot systems define UI components for debugging, such as interactive tables, plots, and videos.
  - Prioritize performance and memory efficiency.
  - All components are highly stylable.