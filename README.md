# projectLogin

A starter boilerplate for node applications with ES6 support which includes  authenticating a user by his phone Number using twilio apis & JWT.

<h1>Getting Started</h1>

 1. <h2>Clone the repo using</h2>
   * git clone https://github.com/MAb540/projectLogin


 2. <h2>Installation</h2>
  * Run npm install to install all project dependencies available in package.json file.

 3. <h2>Add your credentials in .env file at root directory</h2>
  * In .env file 
     1.  PORT =         // Server will listen at this PORT
     2.  DB_HOST =     // Add your mongodb database connection URL here
     3.  SALT =       // Add salt  to be used in hashing passwords before saving them to Database.
     4.  ENC_KEY =   // Add encryption key to be used in encrypting phone Numbers before saving them to Database.
     5.  TWILIO_SERVICE_ID =    // Add your Twilio client id here process is defined below
     6.  TWILIO_ACCOUNT_SID =  // Add your Twilio Account id here process is defined below
     7.  TWILIO_AUTH_TOKEN =  // Add your Twilio Auth token here process is defined below
   
  

 4. <h2>Development mode</h2>
  * Having everything installed run "npm run dev". This command will start your server using nodemon.json as included in the package.json file.


 5. <h2>Twilio App</h2>
   * Steps
     1. To get TWILIO_SERVICE_ID, TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN you need to go to https://www.twilio.com/, first register yourself then login.
     2. Go to Verify by clicking  verify icon shown on left side menu, from there go to Learn and Build section.  
     3. Now Create a servie by putting any Name and click on Create Service, you can also test the service there by sending a code on any mobile number.
     4. Head over to Services tab you shoud see your servie there along with your TWILIO SERVICE ID.
     5. Head over to Main Dashboard you will see your  TWILIO ACCOUNT SID and TWILIO AUTH TOKEN there.


 6. <h2>Features</h2>
  1. You can Signup a user using username, Phone Number and Password. Confirm Password is also added for validation.
  2. You can Login a user using username and password and after that user will receive the verification code on his number, the user will have to put the code to get   authenticated. 
  3. The app ensures the username and phone Number is Unique.

