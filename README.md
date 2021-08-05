
### Task 2: Minimum Viable Product

- Write four custom middleware functions detailed below, in `api/middleware/middleware.js`.
- Use the custom middlewares in their appropriate places in the application (specific endpoints, entire routes or globally).
- There are endpoints in `users-router.js` to retrieve the list of `posts` by a `user` and to store a new `post` for a `user`.

#### Custom Middleware Requirements

- `logger()`

  - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
  - this middleware runs on every request made to the API

- `validateUserId()`

  - this middleware will be used for all user endpoints that include an `id` parameter in the url (ex: `/api/users/:id` and it should check the database to make sure there is a user with that id.
  - if the `id` parameter is valid, store the user object as `req.user` and allow the request to continue
  - if the `id` parameter does not match any user id in the database, respond with status `404` and `{ message: "user not found" }`

- `validateUser()`

  - `validateUser` validates the `body` on a request to create or update a user
  - if the request `body` lacks the required `name` field, respond with status `400` and `{ message: "missing required name field" }`

- `validatePost()`

  - `validatePost` validates the `body` on a request to create a new post
  - if the request `body` lacks the required `text` field, respond with status `400` and `{ message: "missing required text field" }`

### Database Persistence Helpers

There are two helper files that you can use to manage the persistence of _users_ and _posts_ data. These files are `api/users/users-model.js` and `api/posts/posts-model.js`. Both files publish the following api:

- `get()`: calling find returns a promise that resolves to an array of all the resources contained in the database.
- `getById()`: takes an `id` as the argument and returns a promise that resolves to the resource with that id if found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the new resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update and the second is an object with the `changes` to apply. On success it returns the updated record.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the `resource` from the database, returns the number of records deleted.

The `users-model.js` includes an extra method called `getUserPosts()` that when passed a user's `id`, returns a list of all the `posts` for the `user`.

**All helper methods return a promise.**

#### Database Schemas

The _Database Schemas_ for the `users` and `posts` resources are:

##### Users

| field | data type        | metadata                                              |
| ----- | ---------------- | ----------------------------------------------------- |
| id    | unsigned integer | primary key, auto-increments, generated by database   |
| name  | string           | required, unique                                      |

##### Posts

| field   | data type        | metadata                                            |
| ------- | ---------------- | --------------------------------------------------- |
| id      | unsigned integer | primary key, auto-increments, generated by database |
| text    | text             | required                                            |
| user_id | unsigned integer | required, must be the `id` of an existing user      |

We have provided test data for the resources.

#### Important Notes

- Run tests locally executing `npm test`.
- Reset the database by executing `npm run resetdb`.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install additional libraries or add additional scripts.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

### Task 3: Stretch Goals

- Create a React App
  - Use `create-react-app` to create an application inside the root folder, name it `client`.
  - From the React application connect to the `/api/users` endpoint in the API and show the list of users.
  - Add functionality to show the details of a user, including their posts, when clicking a user name in the list. Use React Router to navigate to a `/users/:id` route to show the user details.
  - Add styling!
