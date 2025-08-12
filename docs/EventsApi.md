# sendx.EventsApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackCustomEvent**](EventsApi.md#trackCustomEvent) | **POST** /events/custom | Track custom event
[**trackRevenueEvent**](EventsApi.md#trackRevenueEvent) | **POST** /events/revenue | Track revenue event



## trackCustomEvent

> EventResponse trackCustomEvent(customEventRequest)

Track custom event

Records custom events for advanced tracking. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventsApi();
let customEventRequest = {"identifier":"user@example.com","name":"video_watched","data":{"video_id":"12345","duration":"120","completed":"true"},"time":1669990400}; // CustomEventRequest | 
apiInstance.trackCustomEvent(customEventRequest).then((data) => {
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

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trackRevenueEvent

> EventResponse trackRevenueEvent(revenueEventRequest)

Track revenue event

Records revenue events for analytics and attribution. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventsApi();
let revenueEventRequest = new sendx.RevenueEventRequest(); // RevenueEventRequest | 
apiInstance.trackRevenueEvent(revenueEventRequest).then((data) => {
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

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

