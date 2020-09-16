# Philippides Client
SPA application built in React.js and TypeScript. Namesake owed the historical figure who inspired the Marathon sporting event, as he raced to deliver news of the Greek victory at Marathon.

### Installation
```
clone or fork repo
npm install
npm run start

optional:
install Prettier extension for automatic formatting.
install Better Comments extension to view the comments in a better format.
```

### Testing
Jest is used for all the test suites.
```
npm run test
```

### Linting & Type safety
All formatting is handled by Prettier. Additionally, (almost) all the strict TS rules are enabled in order to leverage the full might of TypeScript.

### Assumptions

**Redux vs. useContext + useReducer**

A lot can be said in regards to this debate. There is no doubt that a proven state management library such as Redux (or similar) should be utilized in every instance when the project is expected to grow. It can also be said that Redux tends to be used gratuitously, seeing as small web apps rarely require the bulk and verbose clutter of Redux. Thus, with such a simple program at hand, I have opted for using useContext + useReducer (in order to achieve a similar yet distinctly different pattern to Redux).

**Dataflow**

I've approached the problem by considering both sockets and traditional http requests (1 in total).
The socket connection is established only once you enter the chat page. The flow (as conveyed in the screenshot below) follows:

```
1. user attempts to login (a post request is issued to the server) with the designated name.
2. the server either accepts or rejects the request, storing the user in the user table and sending back the unique id associated with said user.
3. user is redirected to the chat window.
4. the client attempts to invoke a socket connection using the unique id issued previously by the server.
5A. (in case of failure), the client clears the auth records and redirects back to the login page
5B. (in case of success), the connection is established and any subsequent calls are processed per usual.
```

![Alt text](/screenshots/data-flow-chart.PNG?raw=true "Data flowchart")

**Styling**

Styling is entirely done with SASS as well as leveraging certain components from Ant Design.
Additionally, all design is approached from a mobile-first perspective.

### Screenshots

Login

![Alt text](/screenshots/login.PNG?raw=true "Login")

Login mobile

![Alt text](/screenshots/login-mobile.PNG?raw=true "Login mobile")

Login alert

![Alt text](/screenshots/login-alert.PNG?raw=true "Login alert")

Chat

![Alt text](/screenshots/chat.PNG?raw=true "Chat")

Chat mobile

![Alt text](/screenshots/chat-mobile.PNG?raw=true "Chat mobile")

Chat filter

![Alt text](/screenshots/chat-filter.PNG?raw=true "Chat mobile")
