# sendx.ListApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createList**](ListApi.md#createList) | **POST** /list | Create List
[**deleteList**](ListApi.md#deleteList) | **DELETE** /list/{listId} | Delete List
[**getAllLists**](ListApi.md#getAllLists) | **GET** /list | Get All Lists
[**getListById**](ListApi.md#getListById) | **GET** /list/{listId} | Get List
[**updateList**](ListApi.md#updateList) | **PUT** /list/{listId} | Update List



## createList

> CreateResponse createList(listRequest)

Create List

Create a new list.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let listRequest = new sendx.ListRequest(); // ListRequest | 
apiInstance.createList(listRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listRequest** | [**ListRequest**](ListRequest.md)|  | 

### Return type

[**CreateResponse**](CreateResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteList

> DeleteResponse deleteList(listId)

Delete List

Deletes a specific list by its ID.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let listId = "sendx123"; // String | The ID of the list you want to delete
apiInstance.deleteList(listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The ID of the list you want to delete | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllLists

> [ListModel] getAllLists(opts)

Get All Lists

Retrieve all lists for the account.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let opts = {
  'offset': 0, // Number | Offset for pagination.
  'limit': 10, // Number | Limit the number of results returned.
  'search': "Marketing" // String | Search term to filter lists.
};
apiInstance.getAllLists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Offset for pagination. | [optional] 
 **limit** | **Number**| Limit the number of results returned. | [optional] 
 **search** | **String**| Search term to filter lists. | [optional] 

### Return type

[**[ListModel]**](ListModel.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListById

> ListModel getListById(listId)

Get List

Retrieve a specific list by its ID.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let listId = "sendx123"; // String | The ID of the list you want to retrieve
apiInstance.getListById(listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The ID of the list you want to retrieve | 

### Return type

[**ListModel**](ListModel.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateList

> Response updateList(listRequest, listId)

Update List

Update an existing list by its ID.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ListApi();
let listRequest = new sendx.ListRequest(); // ListRequest | 
let listId = "listId_example"; // String | The ID of the list to be updated.
apiInstance.updateList(listRequest, listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listRequest** | [**ListRequest**](ListRequest.md)|  | 
 **listId** | **String**| The ID of the list to be updated. | 

### Return type

[**Response**](Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

