# sendx.ContactApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactApi.md#createContact) | **POST** /contact | Create a contact
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /contact/{contactId} | Delete Contact
[**getAllContacts**](ContactApi.md#getAllContacts) | **GET** /contact | Get All Contacts
[**getContactById**](ContactApi.md#getContactById) | **GET** /contact/{contactId} | Get Contact by ID
[**unsubscribeContact**](ContactApi.md#unsubscribeContact) | **POST** /contact/unsubscribe/{contactId} | Unsubscribe Contact
[**updateContact**](ContactApi.md#updateContact) | **PUT** /contact/{contactId} | Update Contact



## createContact

> Response createContact(contactRequest)

Create a contact

Create Contact with given data

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let contactRequest = new sendx.ContactRequest(); // ContactRequest | 
apiInstance.createContact(contactRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactRequest** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> Response deleteContact(contactId)

Delete Contact

Deletes Contact

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let contactId = "contactId_example"; // String | The Contact ID to delete
apiInstance.deleteContact(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| The Contact ID to delete | 

### Return type

[**Response**](Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllContacts

> [Contact] getAllContacts(opts)

Get All Contacts

Find all contacts with optional filters

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let opts = {
  'offset': 0, // Number | Offset for pagination
  'limit': 10, // Number | Limit for pagination
  'contactType': "contactType_example", // String | Filter contacts by type
  'search': "search_example" // String | Search term to filter contacts
};
apiInstance.getAllContacts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Offset for pagination | [optional] [default to 0]
 **limit** | **Number**| Limit for pagination | [optional] [default to 10]
 **contactType** | **String**| Filter contacts by type | [optional] 
 **search** | **String**| Search term to filter contacts | [optional] 

### Return type

[**[Contact]**](Contact.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactById

> Contact getContactById(contactId)

Get Contact by ID

Retrieve a specific contact by its contactId.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let contactId = "sendxid123"; // String | The ID of the contact to retrieve.
apiInstance.getContactById(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| The ID of the contact to retrieve. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unsubscribeContact

> Response unsubscribeContact(contactId)

Unsubscribe Contact

Unsubscribe a globally existing contact

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let contactId = "sendx123"; // String | The Contact ID to unsubscribe
apiInstance.unsubscribeContact(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| The Contact ID to unsubscribe | 

### Return type

[**Response**](Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContact

> Contact updateContact(contactRequest, contactId)

Update Contact

Update Contact with given data

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ContactApi();
let contactRequest = new sendx.ContactRequest(); // ContactRequest | 
let contactId = "sendxid123"; // String | The ID of the Contact to update
apiInstance.updateContact(contactRequest, contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactRequest** | [**ContactRequest**](ContactRequest.md)|  | 
 **contactId** | **String**| The ID of the Contact to update | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

