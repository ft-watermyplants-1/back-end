# <p align="center">Water My Plants API</p>

## <p align="center">https://ft-watermyplants-1.herokuapp.com/</p>

## <p align="center">---------- REGISTER / LOGIN ----------</p>

### [POST] /api/auth/register

- Register a new user
  - _username required (must be between 3 and 30 characters)_
  - _password required (must be between 6 and 30 characters)_
  - _phone number required_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "abc123",
  "phone_number": "555-555-5555"
}
```

_What you receive:_

```json
{
  "message": "Account successfully created. Welcome NewUser!",
  "newUser": {
    "user_id": 5,
    "username": "SampleUser",
    "phone_number": "555-555-5555"
  }
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "abc123"
}
```

_What you receive:_

```json
{
  "message": "Welcome back SampleUser",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Ik5ld1VzZXIiLCJpYXQiOjE2MjcyNjY4MDYsImV4cCI6MTYyNzM1MzIwNn0.J1dFd3ghUPYVTodsaAU3Bg2RRcmYM_1oOe-96nvLLUg"
}
```
