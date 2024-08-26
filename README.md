# CRUD Application API Documentation

## CREATE - POST API

To **create** or **insert** new data, use the following endpoint:

**Endpoint:**  
`localhost:3030/create`

**Request Body:**
```json
{
  "publisher": "Penguin Random House",
  "title": "The Great Gatsby",
  "date": "2024-06-21"
}"""


```
## READ - GET API

To **fetch** or **read** data, use the following endpoint:

**Endpoint:**  
`localhost:3030`

**Response:**
```json
[
  {
    "date": "Thu, 01 Aug 2024 00:00:00 GMT",
    "id": 6,
    "title": "To Kill a Mockingbird",
    "publisher": "HarperCollins"
  },
  {
    "date": "Fri, 21 Jun 2024 00:00:00 GMT",
    "id": 10,
    "title": "The Great Gatsby",
    "publisher": "Penguin Random House"
  }
] 

```
## UPDATE - PUT API

To **update** existing data, use the following endpoint:

**Endpoint:**  
`localhost:3030/update/5`  
`5` - **ID** of the entry to update

**Request Body:**
```json
{
  "publisher": "Scribner",
  "title": "The Great Gatsby (Revised Edition)",
  "date": "2024-07-01"
}

```
## DELETE - DELETE API

To **delete** a specific entry, use the following endpoint:

**Endpoint:**  
`localhost:3030/delete/7`  
`7` - **ID** of the entry to delete

