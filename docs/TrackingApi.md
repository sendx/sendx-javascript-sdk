# sendx.TrackingApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identifyContact**](TrackingApi.md#identifyContact) | **POST** /contact/identify | Identify contact
[**trackContact**](TrackingApi.md#trackContact) | **POST** /contact/track | Track contact



## identifyContact

> IdentifyResponse identifyContact(identifyRequest)

Identify contact

Legacy endpoint for identifying contacts. Creates or updates a contact.   **🎯 Key Features:** - Creates contact if doesn&#39;t exist - Updates if email already exists - Supports custom fields and tags 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TrackingApi();
let identifyRequest = {"email":"john.doe@example.com"}; // IdentifyRequest | 
apiInstance.identifyContact(identifyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifyRequest** | [**IdentifyRequest**](IdentifyRequest.md)|  | 

### Return type

[**IdentifyResponse**](IdentifyResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackContact

> TrackResponse trackContact(trackRequest)

Track contact

Legacy endpoint for tracking contact behavior through tags.   **🎯 Key Features:** - Add or remove tags - Trigger automations - Track user behavior 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.TrackingApi();
let trackRequest = {"email":"test@example.com","addTags":["new","cool"],"removeTags":["old","bad"]}; // TrackRequest | 
apiInstance.trackContact(trackRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackRequest** | [**TrackRequest**](TrackRequest.md)|  | 

### Return type

[**TrackResponse**](TrackResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

