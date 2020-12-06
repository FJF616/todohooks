Basic todo app using react hooks.  There are three branches.  The master branch uses the useState hook. The useReducer branch implements the useReducer hook. The authentication branch uses Auth0 for authentication.

The authentication branch also allows the user to save the todolist and will load previously saved todolists at each logon.  It does this by saving the data to the Auth0 database as user metadata.  While logged in the todolist is also temporarily saved in localStorage until the user logs out.

