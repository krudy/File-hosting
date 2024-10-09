# File Upload Application

This project is a simple image upload web application built with **Node.js**, **Express**, **Multer**, and **EJS**. It allows users to upload image files (JPG, JPEG, PNG) to the server. After successful upload, a direct download link is generated and displayed for the user.

## Features

- **File Upload**: Allows users to upload images from their local machine.
- **Supported Formats**: Accepts only `JPG`, `JPEG`, and `PNG` formats.
- **Error Handling**: Displays an error message if the file type is not supported.
- **Dynamic Links**: Generates a unique URL for each uploaded file.
- **Templating with EJS**: Simple and clean interface with real-time feedback on the upload process.

## Prerequisites

To run this application locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (Node Package Manager)

## Installation

Follow these steps to get the application running on your local machine:

1. Clone this repository:

   ```bash
   git clone https://github.com/krudy/File-hosting.git
   cd File-hosting

2. Install all dependencies:

    ```bash
    npm install

3. Start the server:

    ```bash
    node app.js

4. Open your browser and navigate to http://localhost:9999. You will see the file upload form.

## Usage

- **Upload an image**: Select an image file (.jpg, .jpeg, or .png) from your device using the provided form.
- **Submit**: After selecting the file, click the "Upload" button.
- **Download link**: Upon successful upload, a direct link to download the image will be displayed on the page.

## Example

![screenshot with generated link](public/screenshots/example.JPG)

## Code Overview

### app.js:

- The main server file.
- Uses Express to handle HTTP requests, serve static files, and render views.
- Implements Multer middleware for handling multipart/form-data (file uploads).
- Defines the storage location for uploaded files and the file naming convention.

### multer:

- Configured with a diskStorage engine to save files on the server in the `public/uploads/` directory.
- Files are named using the current timestamp and the original file name to ensure uniqueness.

### File Filtering:

- A `fileFilter` function checks the file's MIME type before upload.
- Only `image/jpg`, `image/jpeg`, and `image/png` are allowed. Unsupported formats trigger an error.

## How It Works

- Express is used to create the web server and handle routing.
- Multer is configured to manage file uploads, specifying the destination and file naming logic.
- When a file is uploaded via the form, Multer saves the file to the `public/uploads/` folder.
- The server responds with the direct URL to the uploaded file, allowing the user to download or view the file.
- EJS (Embedded JavaScript) is used as the templating engine to dynamically render the upload form and feedback messages (error or success) on the front-end.

## File Upload Process

 **Step 1**: User selects a file and submits the form. <br>
 **Step 2**: The file is processed by Multer and saved on the server.<br>
 **Step 3**: If the upload is successful, a download link is generated and displayed.<br>
 **Step 4**: If the file type is invalid, an error message is shown.<br>
