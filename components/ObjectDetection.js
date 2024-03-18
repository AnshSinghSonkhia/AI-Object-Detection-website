"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDload } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import {renderPredictions} from "@/utils/render-predictions";


let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    setIsLoading(true);
    const net = await cocoSSDload();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10); // So, this will run Object Detection every 10ms
  };

    async function runObjectDetection(net) {
    // Check data is available
        if (
        canvasRef.current &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
        ) {
        // Get Video Properties
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            // find all detected objects
            const detectedObjects = await net.detect(
                webcamRef.current.video,
                undefined,
                0.6
            );

            //console.log(detectedObjects);

            const context = canvasRef.current.getContext("2d");
            renderPredictions(detectedObjects, context);
        }
    };

  const showmyVideo = () => {
    if (
      webcamRef.current != null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.videoWidth = myVideoWidth;
      webcamRef.current.video.videoHeight = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showmyVideo();
  }, []);

  return (
    <div className="mt-8">
      {isLoading ? (
        <div className="flex items-center justify-center gradient-text">
          <p className="text-xl font-bold tracking-tighter text-center md:text-4xl gradient-title">
            Loading AI Model...
          </p>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center gradient p-1.5 rounded-md ">
          {/* webcam*/}

          <Webcam
            ref={webcamRef}
            className="rounded-md md:w-[720px] md:h-[480px] w-full h-full object-cover"
            muted={true}
            audio={false}
            // height={480}
            // width={854}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
            }}
          />

          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-99999 rounded-md md:w-[720px] md:h-[480px] w-full h-full object-cover"/>
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
