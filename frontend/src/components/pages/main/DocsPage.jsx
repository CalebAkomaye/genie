import Layout from "./layout";

function DocsPage() {
  return (
    <Layout>
      <div className="hero block bg-base-200 min-h-screen mx-auto">
        <div className="w-[48rem] mx-auto pt-10 px-4">
          <h1 className="text-4xl mx-1 font-bold mb-4">
            Auth&apos;fy Textual Operations API
          </h1>
          <p className="text-lg mb-6">
            Auth&apos;fy provides endpoints for transcribing audio files to text
            and converting text to speech using various voice options.
            Seamlessly integrate these features into your applications to
            enhance user interactions.
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl mb-2 font-semibold">Introduction</h2>
            <p className="mb-4">
              The Textual Operations API offers robust functionalities for:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Transcribing Audio Files:</strong> Upload and convert
                audio files into text using AssemblyAI&apos;s transcription
                service.
              </li>
              <li>
                <strong>Retrieving Available Voices:</strong> Fetch a list of
                available voices for text-to-speech conversion.
              </li>
              <li>
                <strong>Converting Text to Speech:</strong> Generate audio from
                text using selected voice parameters.
              </li>
            </ul>
            <p>
              This documentation covers the available routes, their usage, and
              examples to help you integrate these features into your
              applications seamlessly.
            </p>
          </section>

          {/* API Endpoints */}
          <section className="mb-8">
            <h2 className="text-2xl mb-4 font-semibold">API Endpoints</h2>

            {/* 1. Transcribe Audio */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">
                1. Transcribe Audio
              </h3>
              <p className="mb-2">
                <strong>Endpoint:</strong> <code>/transcribe</code>
              </p>
              <p className="mb-2">
                <strong>Method:</strong> <code>POST</code>
              </p>
              <p className="mb-4">
                <strong>Description:</strong> Uploads an audio file and returns
                its transcription.
              </p>

              <h4 className="text-lg mb-2 font-semibold">Request</h4>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Headers:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      <code>Content-Type: multipart/form-data</code>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Body:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      <code>audio</code> (file): The audio file to be
                      transcribed.
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-lg mb-2 font-semibold">Response</h4>
              <p className="mb-2">
                <strong>Success (200):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`"text": "Transcribed text from the audio file."`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (400):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "No audio file uploaded." `}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (500):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "Internal server error",`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "details": "Error message detailing what went wrong."`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "details": "Error message detailing what went wrong."`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`}`}</code>
                </pre>
              </div>

              <h4 className="text-lg mb-2 font-semibold">Example Request</h4>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`const formData = new FormData();`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`formData.append('audio', fileInput.files[0]); // Assume \`fileInput\` is an <input type="file" />`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{``}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`fetch('http://yourapi.com/transcribe', {`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`  method: 'POST',`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`  body: formData,`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`  if (data.text) {`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`    console.log('Transcription:', data.text);`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`  } else {`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`    console.error('Error:', data.error);`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="17">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="18">
                  <code>{`});`}</code>
                </pre>
              </div>
            </div>

            {/* 2. Get All Voices */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">2. Get All Voices</h3>
              <p className="mb-2">
                <strong>Endpoint:</strong> <code>/voices</code>
              </p>
              <p className="mb-2">
                <strong>Method:</strong> <code>GET</code>
              </p>
              <p className="mb-4">
                <strong>Description:</strong> Retrieves a list of all available
                voices for text-to-speech conversion.
              </p>

              <h4 className="text-lg mb-2 font-semibold">Request</h4>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Headers:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      <code>Content-Type: application/json</code>
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-lg mb-2 font-semibold">Response</h4>
              <p className="mb-2">
                <strong>Success (200):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`[`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  {`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`    "id": "voice_id_1",`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    "voice_id": "v1",`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`    "gender": "female",`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`    "language_code": "en-US",`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`    "language_name": "English (US)",`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`    "voice_name": "Emma",`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`    "sample_text": "Hello, nice to meet you, hope you are having a good day!",`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`    "sample_audio_url": "https://sampleaudio.url/emma.mp3",`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`    "status": "active",`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`    "rank": 1,`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`    "type": "standard"`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`  {`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`    "id": "voice_id_2",`}</code>
                </pre>
                <pre data-prefix="17">
                  <code>{`    "voice_id": "v2",`}</code>
                </pre>
                <pre data-prefix="18">
                  <code>{`    "gender": "male",`}</code>
                </pre>
                <pre data-prefix="19">
                  <code>{`    "language_code": "en-GB",`}</code>
                </pre>
                <pre data-prefix="20">
                  <code>{`    "language_name": "English (UK)",`}</code>
                </pre>
                <pre data-prefix="21">
                  <code>{`    "voice_name": "Liam",`}</code>
                </pre>
                <pre data-prefix="22">
                  <code>{`    "sample_text": "Hello, nice to meet you, hope you are having a good day!",`}</code>
                </pre>
                <pre data-prefix="23">
                  <code>{`    "sample_audio_url": "https://sampleaudio.url/liam.mp3",`}</code>
                </pre>
                <pre data-prefix="24">
                  <code>{`    "status": "active",`}</code>
                </pre>
                <pre data-prefix="25">
                  <code>{`    "rank": 2,`}</code>
                </pre>
                <pre data-prefix="26">
                  <code>{`    "type": "standard"`}</code>
                </pre>
                <pre data-prefix="27">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="28">
                  <code>{`  // ... more voices`}</code>
                </pre>
                <pre data-prefix="29">
                  <code>{`]`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (500):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "Error message detailing what went wrong."`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>

              <h4 className="text-lg mb-2 font-semibold">Example Request</h4>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`fetch('http://yourapi.com/voices', {`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  method: 'GET',`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  headers: {`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    'Content-Type': 'application/json',`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`  console.log('Available Voices:', data);`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`});`}</code>
                </pre>
              </div>
            </div>

            {/* 3. Convert Text to Speech */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">
                3. Convert Text to Speech
              </h3>
              <p className="mb-2">
                <strong>Endpoint:</strong> <code>/tts</code>
              </p>
              <p className="mb-2">
                <strong>Method:</strong> <code>POST</code>
              </p>
              <p className="mb-4">
                <strong>Description:</strong> Converts provided text into speech
                using a selected voice.
              </p>

              <h4 className="text-lg mb-2 font-semibold">Request</h4>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Headers:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      <code>Content-Type: application/json</code>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Body:</strong>
                  <div className="mockup-code">
                    <pre data-prefix="1">
                      <code>{`{`}</code>
                    </pre>
                    <pre data-prefix="2">
                      <code>{`  "text": "Your text to convert to speech.",`}</code>
                    </pre>
                    <pre data-prefix="3">
                      <code>{`  "gender": "female",`}</code>
                    </pre>
                    <pre data-prefix="4">
                      <code>{`  "voice": "Emma" // Optional`}</code>
                    </pre>
                    <pre data-prefix="5">
                      <code>{`}`}</code>
                    </pre>
                  </div>
                  <ul className="list-disc list-inside ml-5 mt-2">
                    <li>
                      <code>text</code> (string, required): The text to be
                      converted to speech.
                    </li>
                    <li>
                      <code>gender</code> (string, required): Desired gender of
                      the voice (<code>male</code> or <code>female</code>).
                    </li>
                    <li>
                      <code>voice</code> (string, optional): Specific voice name
                      to use. If not provided, the first matching voice is
                      selected.
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-lg mb-2 font-semibold">Response</h4>
              <p className="mb-2">
                <strong>Success (200):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "audio_url": "https://generatedaudio.url/audio.mp3",`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  "voice_details": {`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    "id": "voice_id_1",`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`    "voice_name": "Emma",`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`    // ... other voice details`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`}`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (400):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "Missing required fields"`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (404):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "No matching voices found."`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>

              <p className="mt-2 mb-2">
                <strong>Error (500):</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "error": "Internal server error",`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  "details": "Error message detailing what went wrong."`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`}`}</code>
                </pre>
              </div>

              <h4 className="text-lg mb-2 font-semibold">Example Request</h4>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`const requestBody = {`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  text: "Hello, world!",`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  gender: "female",`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`  voice: "Emma" // Optional`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`};`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{``}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`fetch('http://yourapi.com/tts', {`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`  method: 'POST',`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`  headers: {`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`    'Content-Type': 'application/json',`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`  body: JSON.stringify(requestBody),`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`  if (data.audio_url) {`}</code>
                </pre>
                <pre data-prefix="17">
                  <code>{`    console.log('Audio URL:', data.audio_url);`}</code>
                </pre>
                <pre data-prefix="18">
                  <code>{`    // You can play the audio or provide a download link`}</code>
                </pre>
                <pre data-prefix="19">
                  <code>{`    const audio = new Audio(data.audio_url);`}</code>
                </pre>
                <pre data-prefix="20">
                  <code>{`    audio.play();`}</code>
                </pre>
                <pre data-prefix="21">
                  <code>{`  } else {`}</code>
                </pre>
                <pre data-prefix="22">
                  <code>{`    console.error('Error:', data.error);`}</code>
                </pre>
                <pre data-prefix="23">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="24">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="25">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="26">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="27">
                  <code>{`});`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-8">
            <h2 className="text-2xl mb-4 font-semibold">Use Cases</h2>

            {/* Use Case 1 */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">
                Use Case 1: Transcribing an Audio File
              </h3>
              <p className="mb-4">
                <strong>Scenario:</strong> You have an audio recording of a
                meeting and need to convert it into text for documentation
                purposes.
              </p>
              <p className="mb-2">
                <strong>Steps:</strong>
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>
                  <strong>Upload the Audio File:</strong> Send a{" "}
                  <code>POST</code> request to <code>/transcribe</code> with the
                  audio file.
                </li>
                <li>
                  <strong>Receive Transcription:</strong> Upon successful
                  processing, receive the transcribed text in the response.
                </li>
              </ol>
              <p className="mb-2">
                <strong>Example:</strong>
              </p>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`const fileInput = document.querySelector('input[type="file"]'); // Assume an <input type="file" />`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{``}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`const formData = new FormData();`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`formData.append('audio', fileInput.files[0]);`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{``}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`fetch('http://yourapi.com/transcribe', {`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`  method: 'POST',`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`  body: formData,`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`  if (data.text) {`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`    console.log('Transcription:', data.text);`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`    // You can display the transcription in your UI`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`  } else {`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`    console.error('Error:', data.error);`}</code>
                </pre>
                <pre data-prefix="17">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="18">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="19">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="20">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="21">
                  <code>{`});`}</code>
                </pre>
              </div>
              <p className="mt-4">
                <strong>Response:</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "text": "Transcribed text from the meeting recording."`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`}`}</code>
                </pre>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">
                Use Case 2: Retrieving Available Voices
              </h3>
              <p className="mb-4">
                <strong>Scenario:</strong> Before converting text to speech, you
                want to present users with available voice options to choose
                from.
              </p>
              <p className="mb-2">
                <strong>Steps:</strong>
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>
                  <strong>Fetch Voices:</strong> Send a <code>GET</code> request
                  to <code>/voices</code> to retrieve all available voices.
                </li>
                <li>
                  <strong>Display Options:</strong> Use the received list to
                  display voice options in your application&apos;s UI.
                </li>
              </ol>
              <p className="mb-2">
                <strong>Example:</strong>
              </p>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`fetch('http://yourapi.com/voices', {`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  method: 'GET',`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  headers: {`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    'Content-Type': 'application/json',`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`  console.log('Available Voices:', data);`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`  // Populate a dropdown or selection list with the voices`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`});`}</code>
                </pre>
              </div>
              <p className="mt-4">
                <strong>Response:</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`[`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  {`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`    "id": "voice_id_1",`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    "voice_id": "v1",`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`    "gender": "female",`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`    "language_code": "en-US",`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`    "language_name": "English (US)",`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`    "voice_name": "Emma",`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`    "sample_text": "Hello, nice to meet you, hope you are having a good day!",`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`    "sample_audio_url": "https://sampleaudio.url/emma.mp3",`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`    "status": "active",`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`    "rank": 1,`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`    "type": "standard"`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`  // ... more voices`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`]`}</code>
                </pre>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="mb-6">
              <h3 className="text-xl mb-2 font-semibold">
                Use Case 3: Converting Text to Speech
              </h3>
              <p className="mb-4">
                <strong>Scenario:</strong> You want to generate an audio
                narration for an e-learning module using a female voice named
                Emma.
              </p>
              <p className="mb-2">
                <strong>Steps:</strong>
              </p>
              <ol className="list-decimal list-inside mb-4">
                <li>
                  <strong>Prepare Text and Voice Details:</strong> Define the
                  text to convert and specify the desired voice parameters.
                </li>
                <li>
                  <strong>Send Conversion Request:</strong> Send a{" "}
                  <code>POST</code> request to <code>/tts</code> with the text
                  and voice details.
                </li>
                <li>
                  <strong>Receive Audio URL:</strong> Get the URL to the
                  generated audio file in the response.
                </li>
              </ol>
              <p className="mb-2">
                <strong>Example:</strong>
              </p>
              <p className="mb-2">
                Using <code>fetch</code> in JavaScript:
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`const requestBody = {`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  text: "Welcome to the advanced calculus course.",`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  gender: "female",`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`  voice: "Emma"`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`};`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{``}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`fetch('http://yourapi.com/tts', {`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`  method: 'POST',`}</code>
                </pre>
                <pre data-prefix="9">
                  <code>{`  headers: {`}</code>
                </pre>
                <pre data-prefix="10">
                  <code>{`    'Content-Type': 'application/json',`}</code>
                </pre>
                <pre data-prefix="11">
                  <code>{`  },`}</code>
                </pre>
                <pre data-prefix="12">
                  <code>{`  body: JSON.stringify(requestBody),`}</code>
                </pre>
                <pre data-prefix="13">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="14">
                  <code>{`.then(response => response.json())`}</code>
                </pre>
                <pre data-prefix="15">
                  <code>{`.then(data => {`}</code>
                </pre>
                <pre data-prefix="16">
                  <code>{`  if (data.audio_url) {`}</code>
                </pre>
                <pre data-prefix="17">
                  <code>{`    console.log('Audio URL:', data.audio_url);`}</code>
                </pre>
                <pre data-prefix="18">
                  <code>{`    // You can play the audio or provide a download link`}</code>
                </pre>
                <pre data-prefix="19">
                  <code>{`    const audio = new Audio(data.audio_url);`}</code>
                </pre>
                <pre data-prefix="20">
                  <code>{`    audio.play();`}</code>
                </pre>
                <pre data-prefix="21">
                  <code>{`  } else {`}</code>
                </pre>
                <pre data-prefix="22">
                  <code>{`    console.error('Error:', data.error);`}</code>
                </pre>
                <pre data-prefix="23">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="24">
                  <code>{`})`}</code>
                </pre>
                <pre data-prefix="25">
                  <code>{`.catch(error => {`}</code>
                </pre>
                <pre data-prefix="26">
                  <code>{`  console.error('Error:', error);`}</code>
                </pre>
                <pre data-prefix="27">
                  <code>{`});`}</code>
                </pre>
              </div>
              <p className="mt-4">
                <strong>Response:</strong>
              </p>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code>{`{`}</code>
                </pre>
                <pre data-prefix="2">
                  <code>{`  "audio_url": "https://generatedaudio.url/audio123.mp3",`}</code>
                </pre>
                <pre data-prefix="3">
                  <code>{`  "voice_details": {`}</code>
                </pre>
                <pre data-prefix="4">
                  <code>{`    "id": "voice_id_1",`}</code>
                </pre>
                <pre data-prefix="5">
                  <code>{`    "voice_name": "Emma",`}</code>
                </pre>
                <pre data-prefix="6">
                  <code>{`    // ... other voice details`}</code>
                </pre>
                <pre data-prefix="7">
                  <code>{`  }`}</code>
                </pre>
                <pre data-prefix="8">
                  <code>{`}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-8">
            <h2 className="text-2xl mb-4 font-semibold">Error Handling</h2>
            <p className="mb-4">
              The API uses standard HTTP status codes to indicate the success or
              failure of requests:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>200 OK:</strong> The request was successful.
              </li>
              <li>
                <strong>400 Bad Request:</strong> The request was invalid or
                missing required parameters.
              </li>
              <li>
                <strong>404 Not Found:</strong> The requested resource was not
                found.
              </li>
              <li>
                <strong>500 Internal Server Error:</strong> An unexpected error
                occurred on the server.
              </li>
            </ul>
            <p>
              <strong>Error Response Structure:</strong>
            </p>
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>{`{`}</code>
              </pre>
              <pre data-prefix="2">
                <code>{`  "error": "Error message detailing what went wrong."`}</code>
              </pre>
              <pre data-prefix="3">
                <code>{`}`}</code>
              </pre>
            </div>
            <p className="mt-4">
              <strong>Example Error Response:</strong>
            </p>
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>{`{`}</code>
              </pre>
              <pre data-prefix="2">
                <code>{`  "error": "No audio file uploaded."`}</code>
              </pre>
              <pre data-prefix="3">
                <code>{`}`}</code>
              </pre>
            </div>
          </section>

          {/* Contact & Support */}
          <section className="">
            <p>
              Thank you for choosing the Textual Operations API! We hope it
              serves your needs effectively. Happy coding!
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default DocsPage;
