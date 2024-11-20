# sendx.EventApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRevenueEvent**](EventApi.md#createRevenueEvent) | **POST** /events/revenue | Record a revenue event for a specific contact
[**pushCustomEvent**](EventApi.md#pushCustomEvent) | **POST** /events/custom | Push a custom event associated with a contact



## createRevenueEvent

> EventResponse createRevenueEvent(revenueEventRequest)

Record a revenue event for a specific contact

Records a revenue event, which can be attributed to campaigns, drips, workflows, or other sources of user interaction.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventApi();
let revenueEventRequest = new sendx.RevenueEventRequest(); // RevenueEventRequest | 
apiInstance.createRevenueEvent(revenueEventRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revenueEventRequest** | [**RevenueEventRequest**](RevenueEventRequest.md)|  | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pushCustomEvent

> EventResponse pushCustomEvent(customEventRequest)

Push a custom event associated with a contact

Pushes a custom event with properties and values for a specified contact.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventApi();
let customEventRequest = new sendx.CustomEventRequest(); // CustomEventRequest | 
apiInstance.pushCustomEvent(customEventRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customEventRequest** | [**CustomEventRequest**](CustomEventRequest.md)|  | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

