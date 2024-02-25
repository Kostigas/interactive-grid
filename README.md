# interactive-grid
This project creates an animated grid of colorful rectangles using p5.js. As the mouse moves across the canvas, the rectangles change color and size dynamically.

# How It Works

- ## Canvas Setup:
  - The canvas is created to match the user’s screen dimensions using createCanvas(windowWidth, windowHeight).
  - The rectMode(CENTER) ensures that rectangles are drawn from their centers.
- ## Grid Generation:
  - The grid is created by dividing the canvas into a specified number of rows and columns (resolution).
  - Each cell in the grid corresponds to a rectangle.
- ## Color and Size Variation:
  - The color of each rectangle is determined by mapping the row index (i) to the green channel (g) and the column index (j) to the red channel (r).
  - The blue channel (b) changes based on the mouse’s X position (mouseX).
  - The alpha channel (a) also changes with the mouse’s X position.
  - The up variable controls the scaling of the rectangles based on the distance from the mouse.
- ## Animation:
  - The rectangles rotate based on the distance from the mouse (angle).
  - The push() and pop() functions ensure that transformations (rotation and scaling) affect only individual rectangles.

# Customization

- Adjust the resolution variable to change the grid size.
- Experiment with different color mappings and scaling factors.
- Add more interactive elements or modify the animation behavior.

# Running the Animation

1. Clone the repository and navigate to the project directory.
2. Open index.html in a web browser.
3. Move your mouse across the canvas to see the colorful rectangles in action!

