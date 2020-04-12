# ARTmarket API

Backend API for the ARTmarket application to manage the items on sale, the app's users and their comments.

## Indices

- [Users](#users)

  - [Get All Users](#1-get-all-users)
  - [Get Single User](#2-get-single-user)
  - [Create User](#3-create-user)
  - [Update User](#4-update-user)
  - [Update User Rating](#5-update-user-rating)
  - [Delete User](#6-delete-user)

- [Items](#items)

  - [Get All Items](#1-get-all-items)
  - [Get Single Item](#2-get-single-item)
  - [Create Item](#3-create-item)
  - [Update Item](#4-update-item)
  - [Delete Item](#5-delete-item)
  - [Get Items More Expensive Than](#6-get-items-more-expensive-than)
  - [Get Items Less Expensive Than](#7-get-items-less-expensive-than)

- [Comments](#comments)

  - [Get All Comments](#1-get-all-comments)
  - [Add a Comment](#2-add-a-comment)
  - [Update a Comment](#3-update-a-comment)
  - [Delete Comment](#4-delete-comment)

---

## Users

Create, read, update and delete users.
Also lets customers rate artists on a scale of 1 to 5.

### 1. Get All Users

Get all users in the database.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users
```

### 2. Get Single User

Get a single user by their id.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 3. Create User

Add a user to the database.

**_Endpoint:_**

```bash
Method: POST
Type:
URL: {{URL}}/api/v1/users
```

### 4. Update User

Update a user by their id.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/users/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 5. Update User Rating

Update the rating an artist has on the database.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/users/:id/rating
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 6. Delete User

Delete a user from the database.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/users/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

## Items

Create, read, update and delete items.

### 1. Get All Items

Get all items in the database.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/items
```

### 2. Get Single Item

Get a single item by its id.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/items/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 3. Create Item

Create a new item.

**_Endpoint:_**

```bash
Method: POST
Type:
URL: {{URL}}/api/v1/items
```

### 4. Update Item

Update an item by its id.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/items/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 5. Delete Item

Delete an item by its id.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/items/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 6. Get Items More Expensive Than

Get all items in the database that cost more than the dollar value sent to this endpoint.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/items/minprice/:price
```

**_URL variables:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| price |       |             |

### 7. Get Items Less Expensive Than

Get all items in the database that cost less than the dollar value sent to this endpoint.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/items/maxprice/:price
```

**_URL variables:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| price |       |             |

## Comments

Create, read, update and delete comments.

### 1. Get All Comments

Get all comments about an item.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/items/:itemId/comments
```

**_URL variables:_**

| Key    | Value | Description |
| ------ | ----- | ----------- |
| itemId |       |             |

### 2. Add a Comment

Add a comment about an item.

**_Endpoint:_**

```bash
Method: POST
Type:
URL: {{URL}}/api/v1/items/:itemId/comments
```

**_URL variables:_**

| Key    | Value | Description |
| ------ | ----- | ----------- |
| itemId |       |             |

### 3. Update a Comment

Update a comment by its id.

**_Endpoint:_**

```bash
Method: PUT
Type:
URL: {{URL}}/api/v1/comments/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

### 4. Delete Comment

Delete a comment by its id.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/comments/:id
```

**_URL variables:_**

| Key | Value | Description |
| --- | ----- | ----------- |
| id  |       |             |

**_Available Variables:_**

| Key | Value                 | Type   |
| --- | --------------------- | ------ |
| URL | http://localhost:3000 | string |

---

[Back to top](#artmarket-api)
