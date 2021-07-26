# <p align="center">Water My Plants API</p>

## <p align="center">https://ft-watermyplants-1.herokuapp.com</p>

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

##

## <p align="center">---------- USERS ----------</p>

### [GET] /api/users/

**_RESTRICTED ENDPOINT_**

- Get an array of users
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "user_id": 1,
    "username": "jeff",
    "phone_number": "555-837-2847"
  },
  {
    "user_id": 2,
    "username": "troy",
    "phone_number": "555-738-1198"
  },
  {
    "user_id": 3,
    "username": "abed",
    "phone_number": "555-166-2367"
  },
  {
    "user_id": 4,
    "username": "britta",
    "phone_number": "555-455-2801"
  },
  {
    "user_id": 5,
    "username": "NewUser",
    "phone_number": "555-555-5555"
  }
]
```

### [GET] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Get information on a specific user
  - _requires valid token in authorization header to access_
  - _(example uses "1" for :user_id in URL)_

_What you receive:_

```json
{
  "user_id": 1,
  "username": "jeff",
  "phone_number": "555-837-2847",
  "plants": [
    {
      "plant_id": 1,
      "nickname": "Bob",
      "species": "Sunflower",
      "days_between_watering": 1,
      "notes": "Make sure to use clear water",
      "img_url": null
    },
    {
      "plant_id": 2,
      "nickname": "Rufus",
      "species": "Petunia",
      "days_between_watering": 3,
      "notes": null,
      "img_url": null
    }
  ]
}
```

### [PUT] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Update an existing user
  - _requires valid token in authorization header to send_
  - _can be used to update username or phone number_
  - _(example uses "5" for :user_id in URL)_

_What you send:_

```json
{
  "username": "UpdatedUser",
  "phone_number": "555-555-6666"
}
```

_What you receive:_

```json
{
  "user_id": 5,
  "username": "UpdatedUser",
  "phone_number": "555-555-6666"
}
```

### [DELETE] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Delete an existing user
  - _requires valid token in authorization header to delete_
  - _(example uses "6" for :user_id in URL)_

_What you receive:_

```json
{
  "user_id": 6,
  "username": "DeletedUser"
}
```

##

## <p align="center">---------- PLANTS ----------</p>

### [GET] /api/users/:user_id/plants

**_RESTRICTED ENDPOINT_**

- Get an array of plants for a specific user
  - _requires valid token in authorization header to access_
  - _(example uses "1" for :user_id in URL)_

_What you receive:_

```json
[
  {
    "plant_id": 1,
    "nickname": "Bob",
    "species": "Sunflower",
    "days_between_watering": 1,
    "notes": "Make sure to use clear water",
    "img_url": null,
    "user_id": 1
  },
  {
    "plant_id": 2,
    "nickname": "Rufus",
    "species": "Petunia",
    "days_between_watering": 3,
    "notes": null,
    "img_url": null,
    "user_id": 1
  }
]
```

### [GET] /api/users/:user_id/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Get information for a specific plant
  - _requires valid token in authorization header to access_
  - _(example uses "1" for :user_id and "1" for :plant_id in URL)_

_What you receive:_

```json
{
  "plant_id": 1,
  "nickname": "Bob",
  "species": "Sunflower",
  "days_between_watering": 1,
  "notes": "Make sure to use clear water",
  "img_url": null,
  "user_id": 1
}
```

### [POST] /api/users/:user_id/plants/

**_RESTRICTED ENDPOINT_**

- Add a new plant for a user
  - _requires valid token in authorization header to send_
  - _(example uses "1" for :user_id in URL)_
  - _required information:_
    - _nickname (string)_
    - _species (string)_
    - _days_between_watering (number)_
  - _optional information:_
    - _notes (string)_
    - _img_url (string)_

_What you send:_

```json
{
  "nickname": "Ted",
  "species": "Daffodil",
  "days_between_watering": 3,
  "notes": "Optional notes",
  "user_id": 1
}
```

_What you receive:_

```json
{
  "plant_id": 8,
  "nickname": "Ted",
  "species": "Daffodil",
  "days_between_watering": 3,
  "notes": "Optional notes",
  "img_url": null,
  "user_id": 1
}
```

### [PUT] /api/users/:user_id/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Update an existing plant
  - _requires valid token in authorization header to send_
  - _(example uses "1" for :user_id and "8" for :plant_id in URL)_

_What you send:_

```json
{
  "nickname": "Updated Plant Nickname!!!",
  "species": "Updated species!!!",
  "days_between_watering": 6
}
```

_What you receive:_

```json
{
  "plant_id": 8,
  "nickname": "Updated Plant Nickname!!!",
  "species": "Updated species!!!",
  "days_between_watering": 6,
  "notes": "Optional notes",
  "img_url": null,
  "user_id": 1
}
```

### [DELETE] /api/users/:user_id/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Delete a plant
  - _requires valid token in authorization header to delete_
  - _(example uses "1" for :user_id in URL)_

_What you receive:_

```json
{
  "plant_id": 1,
  "nickname": "Bob",
  "species": "Sunflower",
  "user_id": 1
}
```
