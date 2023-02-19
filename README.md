### Simple Hotel API
This API allows you to reserve a hotel accommodation.

- The API is available at https://github.com/iwarimie/rest_api_to_perform_CRUD

## Endpoints
Status
GET /status

Returns the status of the API.

# List of hotels
GET /api/v1/hotel

Returns a list of hotels.

# Optional query parameters:

category:  small or medium or large or ensuite
limit: a number between 1 and 20.

# Get a single hotel
GET /api/v1/hotel/:hotelId

Retrieve detailed information about a hotel.

# Submit an order
POST /api/v1/hotel/

Allows you to submit a new order. Requires authentication.

The request body needs to be in JSON format and include the following properties:

hotelId - Is automatically generated - not required
Name - String - Required
price - Number - Required
category - Array - Required

POST /api/v1/hotel/
Authorization: Bearer <YOUR TOKEN>

{
  "name": "Single Room",
  "price": 15000,
  "category": "medium"
}
The response body would not contain the order Id.

# Get all hotels
GET /api/v1/hotel/

Allows you to view all orders. Requires authentication.

# Get a hotel
GET /api/v1/hotel/:hotelId

Allows you to view an existing hotel. Requires authentication.

# Update an order
PATCH /api/v1/hotel/:hotelId

Update an existing hotel. Requires authentication.

The request body needs to be in JSON format and allows you to update the following properties:

name - String
Example

PATCH /hotel/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

{
  "name": "Single Room"
}
# Delete a hotel
DELETE /api/v1/hotel/:hotelId

Delete an existing hotel. Requires authentication.

The request body needs to be empty.

Example

DELETE /api/v1/hotel/PF6MflPDcuhWobZcgmJy5
Authorization: Bearer <YOUR TOKEN>

##Validation For POST Request
Added Validation for POST request using JOI library