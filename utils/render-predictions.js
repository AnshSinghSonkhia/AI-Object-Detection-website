//import {throttle} from "lodash";

export const renderPredictions = (predictions, ctx) => {
    // Clear the canvas for new predictions. Rectangle is drawn on the canvas. and the label is added to the rectangle.

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Fonts for canvas

    const font = "16px sans-serif";
    ctx.font = font;

    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;

        const isPerson = prediction.class === "person";

        // Draw the bounding box
        ctx.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);

        // fill the color
        ctx.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`;
        ctx.fillRect(x, y, width, height);

        // Draw the label background
        ctx.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
        const textWidth = ctx.measureText(prediction.class).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(prediction.class, x, y);

        // ToDo: Add a sound alert when a person is detected
    });
};