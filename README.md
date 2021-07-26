# Water My Plants API

## https://ft-watermyplants-1.herokuapp.com/

## ---------- REGISTER / LOGIN ----------

### [POST] /api/auth/register

Register a new user

_What you send:_

```json
{
  "username": "NewUser",
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
    "username": "NewUser",
    "phone_number": "555-555-5555"
  }
}
```
