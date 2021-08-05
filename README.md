# projectLogin

This is simple backend for authenticatoin system using phone Number written in Node js using Express and MongoDb.



<h1>Node-base-auth-boilerplate</h1>
A starter boilerplate for node applications with ES6 support which includes  authenticating a user by his phone Number using twilio apis & JWT.

<h1>Getting Started</h1>
<h2>Clone the repo using</h2>
  git clone https://github.com/MAb540/projectLogin


Installation
Run npm install to install all project dependencies available in package.json file.
Add your credentials in .env file at root directory

In .env file 
PORT =         // Server will listen at this PORT
DB_HOST =     // Add your mongodb database connection URL here
SALT =       // Add salt  to be used in hashing passwords before saving them to Database.
ENC_KEY =   // Add encryption key to be used in encrypting phone Numbers before saving them to Database.
TWILIO_SERVICE_ID =    // Add your Twilio client id here process is defined below
TWILIO_ACCOUNT_SID =  // Add your Twilio Account id here process is defined below
TWILIO_AUTH_TOKEN =  // Add your Twilio Auth token here process is defined below
   
  

Development mode
Having everything installed run "npm run dev". This command will start your server using nodemon.json as included in the package.json file.
