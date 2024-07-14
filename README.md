# Dice Roll Project

This is a simple web-based dice rolling application that displays the result of rolling two dice. When the "Roll Dice" button is clicked, the dice roll results are generated and displayed, along with a message indicating the winner.

## Features

- Roll two dice and display the result.
- Show a message indicating whether Player 1, Player 2 wins, or if it is a draw.
- Simple and intuitive user interface.

## Technologies Used

- HTML
- CSS
- JavaScript
- AWS S3 for hosting

## Setup and Deployment

### Prerequisites

- An AWS account (for deployment)

### Steps to Deploy on AWS S3

1. **Create an S3 Bucket**:
   - Go to the Amazon S3 console and create a new bucket.
   - Make sure the bucket name is unique and select the appropriate region.

2. **Upload Files**:
   - Upload all your project files (HTML, CSS, JavaScript, images) to the bucket.

3. **Configure Bucket for Static Website Hosting**:
   - Go to the bucket properties.
   - Enable static website hosting.
   - Set the index document to `index.html`.

4. **Set Permissions**:
   - Update the bucket policy to make the contents publicly accessible.
   - Use the following policy (replace `YOUR_BUCKET_NAME` with your bucket name):

     ```json
     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Sid": "PublicReadGetObject",
                 "Effect": "Allow",
                 "Principal": "*",
                 "Action": "s3:GetObject",
                 "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
             }
         ]
     }
     ```

5. **Access Your Website**:
   - Use the S3 bucket URL to access your deployed site.

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Roll Dice" button.
3. See the result of the dice roll and the winner message.

## Files

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file containing the dice roll logic.
- `images/`: Directory containing the dice images.

## Example

Here’s a preview of what the web page looks like:

![Dice Roll Example]([images/dice-example.png](https://gmkdicerollbucket.s3.eu-west-1.amazonaws.com/Dice+game/dicee.html))

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Goutham MK
