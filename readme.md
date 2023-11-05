# Bowling Scorecard App

The Bowling Scorecard App is a simple JavaScript program that allows you to keep track of a game of bowling and calculate the final score. It's designed to mimic the traditional way of scoring a game of bowling, including strikes and spares.

## Features

- **Scoring**: The app keeps track of your bowling score as you input each frame's rolls. It calculates the score based on standard bowling rules.

- **Final Frame Handling**: The app correctly handles the special conditions of the final frame, where you can have up to three rolls if you get a strike or a spare.

- **Viewing the Scorecard**: You can view the rolls made in each frame as you progress through the game to ensure accuracy.

## Usage

1. Create an instance of the `Bowling` class.

2. Add frames using the `addFrame` method. You can provide the pins knocked down in the first and second rolls of the frame, and optionally, the pins knocked down in the third roll for the final frame. For example:
   - `game.addFrame(6, 4)` for a frame with a spare.
   - `game.addFrame(10)` for a frame with a strike.
   - `game.addFrame(2, 7, 1)` for a frame with a spare in the final frame.

3. Calculate the score by running `calculateScore()`. The app will process the rolls and provide the final score.

## How It Works

The app processes the rolls frame by frame, considering strikes, spares, and the special conditions of the final frame. It correctly calculates the score based on standard bowling rules, including counting additional rolls for strikes and spares in the final frame.

Please note that this app is a simple console-based tool, and you can further integrate it into a user interface or a larger project as needed.

Feel free to explore and modify the code to suit your requirements and expand its functionality.

Happy bowling!