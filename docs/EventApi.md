# sendx.EventApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsCustomPostbackGet**](EventApi.md#eventsCustomPostbackGet) | **GET** /events/custom/postback | Custom Event Postback URL
[**eventsRevenuePostbackGet**](EventApi.md#eventsRevenuePostbackGet) | **GET** /events/revenue/postback | Revenue Event Postback URL



## eventsCustomPostbackGet

> EventsRevenuePostbackGet200Response eventsCustomPostbackGet(teamId, id, event, anyKey)

Custom Event Postback URL

Register a custom event for a specific team and event.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventApi();
let teamId = "teamId_example"; // String | The unique identifier for the team.
let id = "id_example"; // String | The unique sendx identifier for the contact/customer.
let event = "event_example"; // String | The custom event name.
let anyKey = "24.43"; // String | Arbitrary custom data as key-value pairs. Add custom parameters directly to the query string.  For example, `amount=24.43` or `currency=USD`. 
apiInstance.eventsCustomPostbackGet(teamId, id, event, anyKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The unique identifier for the team. | 
 **id** | **String**| The unique sendx identifier for the contact/customer. | 
 **event** | **String**| The custom event name. | 
 **anyKey** | **String**| Arbitrary custom data as key-value pairs. Add custom parameters directly to the query string.  For example, &#x60;amount&#x3D;24.43&#x60; or &#x60;currency&#x3D;USD&#x60;.  | 

### Return type

[**EventsRevenuePostbackGet200Response**](EventsRevenuePostbackGet200Response.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsRevenuePostbackGet

> EventsRevenuePostbackGet200Response eventsRevenuePostbackGet(teamId, id, amount, campaignId)

Revenue Event Postback URL

Trigger a revenue postback for a specific team and event.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.EventApi();
let teamId = "teamId_example"; // String | The unique identifier for the team.
let id = "id_example"; // String | The unique sendx identifier for the contact/customer.
let amount = 3.4; // Number | The revenue amount to be posted back.
let campaignId = "campaignId_example"; // String | The unique identifier for the campaign.
apiInstance.eventsRevenuePostbackGet(teamId, id, amount, campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The unique identifier for the team. | 
 **id** | **String**| The unique sendx identifier for the contact/customer. | 
 **amount** | **Number**| The revenue amount to be posted back. | 
 **campaignId** | **String**| The unique identifier for the campaign. | 

### Return type

[**EventsRevenuePostbackGet200Response**](EventsRevenuePostbackGet200Response.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

