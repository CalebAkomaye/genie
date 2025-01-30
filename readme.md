# Audio-to-Text API

## Tech Stack

- Node.js with Express for the backend
- Speech synthesis engine for text-to-speech conversion
- Flask-CORS for handling cross-origin requests

## Features

- Convert text input into high-quality speech output
- Support for multiple languages and voice options
- RESTful API endpoints for easy integration
- Scalable and consistently available deployment

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/CalebAkomaye/genie.git
   cd audio-to-text-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory with:
     ```
     DATABASE_URL=your_awesome_connection_string
     SECRET_KEY=your_secret_key
     ```
4. Run the application:
   ```
   npm start
   ```

## Deployment

- The API is deployed on Render for scalability and reliable hosting.
- Can be integrated with other applications via RESTful endpoints.
