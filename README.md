# ScholarFind API
## Overview
This is a RESTful web service designed to manage and access academic researcher information. It supports creating, updating, retrieving and deleting researcher data. This API can be integrated with front-end applications or used for batch processing tasks such as data import.

## Features
* **CRUD Operations**: Create, read, update, and delete researcher records.
* **Data Validation**: Uses Joi for validating incoming data for consistency and integrity.
* **Error Handling**: Robust error responses for client and server-side issues.
* **Mongoose ODM**: Interacts with MongoDB using Mongoose for modeling.

## Installation
To set up and run the API locally, follow these steps:

1. Clone the repository:
   ``` bash
   git clone https://github.com/yourusername/researcher-api.git
   ```
2. Navigate into the directory:
   ``` bash
   cd scholarfind-backend
   ```
3. Install dependencies:
   ``` bash
   npm install
   ```
4. Set up environment variables:
   * Create an `.env` file
   * Set MONGODB_URI to your MongoDB connection string
5. Run the application:
   ``` bash
   npm start
   ```
6. Access:
   * The API runs by default on `http://localhost:6003/`
   * Access various endpoints such as `/api/researchers`

## API Endpoints
   * Create Researcher
      `POST /api/researchers/add`
      Create a new researcher record.

  * Retrieve All Researchers
      `GET /api/researchers`
      Fetch a list of all researchers.

  *  Update Researcher By Criteria
      `PUT /api/researchers/update`
      Update a researcher's information based on `firstName`, `lastName`, and `university`.
      Information to be updated needs to go in `fieldsToUpdate` in the JSON request body.
      Request Body Example:
      ``` json
      {
        "firstName": "John",
        "lastName": "Smith",
        "university": "Some State University",
        "fieldsToUpdate": {
            "title": "Professor & Director",
            "details": {
                "qualifications": "PhD in Computer Science"
              },
            "socials": {
                "linkedin": "https://linkedin.com/in/john"
              },
        "fundingAvailable": true
        }
      }
      ```
      Notes: Only include fields within `fieldsToUpdate` that you want to change. Nested objects like details and socials can be partially updated by including only the specific keys to change. Omitting a key will leave it unchanged.
     

  * Delete Researcher
      `DELETE /api/researchers/delete`
      Remove a researcher record by name and university.

## Data Model
### Researcher
* `firstName` (String, required)
* `lastName` (String, required)
* `university` (String, required)
* `title` (String, optional)
* `email` (String, optional)
* `details` (Object, nested)
* `qualifications` (String, optional)
* `researchGroups` (Array, optional)
* `biography` (String, optional)
* `socials` (Object, nested)
* `linkedin` (String, optional)
* `researchgate` (String, optional)

## Contribution
Contributions are welcome! Feel free to submit a pull request or file an issue.

## License
This project is licensed under MIT License.

## Authors
Nuha Nishat - [nuhanishat](https://github.com/nuhanishat)


  
   
   
