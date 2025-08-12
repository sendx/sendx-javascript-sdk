# sendx.CampaignApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignApi.md#createCampaign) | **POST** /campaign | Create campaign
[**deleteCampaign**](CampaignApi.md#deleteCampaign) | **DELETE** /campaign/{identifier} | Delete campaign
[**getAllCampaigns**](CampaignApi.md#getAllCampaigns) | **GET** /campaign | Get all campaigns
[**getCampaign**](CampaignApi.md#getCampaign) | **GET** /campaign/{identifier} | Get campaign by ID



## createCampaign

> RestRCampaign createCampaign(restECampaign)

Create campaign

Creates a new email campaign. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let restECampaign = {"name":"Flash Sale Announcement","subject":"⚡ 24-Hour Flash Sale - {{contact.firstName}}, Save 50%!","sender":"sender_4vK3WFhMgvOwUNyaL4QxCD","previewText":"Limited time offer - Today only!","htmlCode":"<html><body><h1>Flash Sale!</h1><p>Hi {{contact.firstName}},</p><p>Don't miss our 24-hour flash sale!</p><a href='{{sale.url}}'>Shop Now</a></body></html>","plainText":"Flash Sale!\n\nHi {{contact.firstName}},\n\nDon't miss our 24-hour flash sale!\n\nShop now: {{sale.url}}","scheduleType":1,"includedLists":["list_0tOFLp5RgV7s3LNiHrjGYs","list_vUCjsUmrVXtSppS8rD0Ssq"],"excludedTags":["tag_unengaged"]}; // RestECampaign | 
apiInstance.createCampaign(restECampaign).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restECampaign** | [**RestECampaign**](RestECampaign.md)|  | 

### Return type

[**RestRCampaign**](RestRCampaign.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaign

> DeleteResponse deleteCampaign(identifier)

Delete campaign

Deletes a campaign. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let identifier = "identifier_example"; // String | Campaign identifier to delete
apiInstance.deleteCampaign(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Campaign identifier to delete | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCampaigns

> [RestRCampaign] getAllCampaigns(opts)

Get all campaigns

Retrieves a paginated list of all campaigns. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let opts = {
  'offset': 0, // Number | Number of campaigns to skip
  'limit': 10, // Number | Maximum number of campaigns to return
  'campaignType': "'all'" // String | Filter by campaign type
};
apiInstance.getAllCampaigns(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Number of campaigns to skip | [optional] [default to 0]
 **limit** | **Number**| Maximum number of campaigns to return | [optional] [default to 10]
 **campaignType** | **String**| Filter by campaign type | [optional] [default to &#39;all&#39;]

### Return type

[**[RestRCampaign]**](RestRCampaign.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaign

> RestRCampaign getCampaign(identifier)

Get campaign by ID

Retrieves detailed information about a specific campaign. 

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: TeamApiKey
let TeamApiKey = defaultClient.authentications['TeamApiKey'];
TeamApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TeamApiKey.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let identifier = "identifier_example"; // String | Campaign identifier - `campaign_IMBoxK2iB5sUdgiNOjqAMA` 
apiInstance.getCampaign(identifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| Campaign identifier - &#x60;campaign_IMBoxK2iB5sUdgiNOjqAMA&#x60;  | 

### Return type

[**RestRCampaign**](RestRCampaign.md)

### Authorization

[TeamApiKey](../README.md#TeamApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

