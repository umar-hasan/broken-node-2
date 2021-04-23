### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  - Token that contains/stores information that can be securely transmitted. 

- What is the signature portion of the JWT?  What does it do?
  - Signs the token to validate information to ensure that it can be sent or handled by the same application.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - It is possible to see what is inside the payload, if there is no secret key.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
   - When a user signs in with their credentials, a JWT will be created, which will have a payload containing the user's information
   such as their username. Afterwards, it will be signed with a secret key to ensure that the JWT is validated.

- Compare and contrast unit, integration and end-to-end tests.
  - Unit - Tests small pieces of code, such as particular methods.
  - Integration - Ensuring that multiple parts of the code combined are able to work together.
  - End-to-end - Tests an entire application's flow.

- What is a mock? What are some things you would mock?
  - A test for a piece of code that may be complex or dependent on another objects.
  - APIs that require a response

- What is continuous integration?
  - Constantly merging pieces of code frequently to ensure multiple parts can run together.

- What is an environment variable and what are they used for?
  - Stores important information such as an API key, credentials, and other config settings necessary for an application to work.

- What is TDD? What are some benefits and drawbacks?
  - Writing tests mainly on important features of your application.
  - It may ensure that your application will run well, but may be very time consuming to come up with tests.

- What is the value of using JSONSchema for validation?
  - JSONSchema makes it easier for data to conform to a specific format to ensure the proper type(s) of data is passed such as emails, phone numbers, etc.

- What are some ways to decide which code to test?
  - Only write tests that cover the main features of an application
  - Keep testing as you add more code and features to continuously ensure that the app is running well
  - Mock any complex API or operation

- What are some differences between Web Sockets and HTTP?
  - HTTP is stateless, web sockets are stateful between client and server.
  - HTTP is uni-directional, terminating after a request/response. Web sockets are bi-directional, where connection stays open between client and server.
  - Web sockets are much faster than HTTP connections and are more frequently updated.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
