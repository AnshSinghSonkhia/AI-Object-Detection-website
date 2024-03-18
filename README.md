

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Integrating Webcam in our app

- Installation

```shell
npm i react-webcam
```

## Using Object Detection Model (coco-ssd)

Refer: https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd

> This model is a TensorFlow.js port of the COCO-SSD model.

## Installation

```shell
npm i @tensorflow-models/coco-ssd @tensorflow/tfjs
```

## Usage of COCO-SSD via NPM

```js
import { load as cocoSSDload } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
```

## Read about `clearRect()`

refer: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)

```js
clearRect(x, y, width, height)
```

The clearRect() method sets the pixels in a rectangular area to transparent black (rgb(0 0 0 / 0%)). The rectangle's top-left corner is at (x, y), and its size is specified by width and height.

## ToDo: Add a sound alert when a person is detected

34:09