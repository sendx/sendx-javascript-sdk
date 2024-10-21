# sendx.CampaignApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignApi.md#createCampaign) | **POST** /campaign | Create Campaign
[**deleteCampaign**](CampaignApi.md#deleteCampaign) | **DELETE** /campaign/{campaignId} | Delete Campaign
[**editCampaign**](CampaignApi.md#editCampaign) | **PUT** /campaign/{campaignId} | Edit Campaign
[**getAllCampaigns**](CampaignApi.md#getAllCampaigns) | **GET** /campaign | Get All Campaigns
[**getCampaignById**](CampaignApi.md#getCampaignById) | **GET** /campaign/{campaignId} | Get Campaign By Id



## createCampaign

> CreateResponse createCampaign(campaignRequest)

Create Campaign

Create a new email campaign

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let campaignRequest = new sendx.CampaignRequest(); // CampaignRequest | The campaign content
apiInstance.createCampaign(campaignRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignRequest** | [**CampaignRequest**](CampaignRequest.md)| The campaign content | 

### Return type

[**CreateResponse**](CreateResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaign

> DeleteCampaign200Response deleteCampaign(campaignId)

Delete Campaign

Deletes a specific campaign by its campaignId.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let campaignId = "campaignId_example"; // String | The ID of the campaign to delete
apiInstance.deleteCampaign(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| The ID of the campaign to delete | 

### Return type

[**DeleteCampaign200Response**](DeleteCampaign200Response.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editCampaign

> Campaign editCampaign(campaignRequest, campaignId)

Edit Campaign

Submit edited content for a specific campaign.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let campaignRequest = new sendx.CampaignRequest(); // CampaignRequest | 
let campaignId = "campaignId_example"; // String | The ID of the campaign to edit
apiInstance.editCampaign(campaignRequest, campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignRequest** | [**CampaignRequest**](CampaignRequest.md)|  | 
 **campaignId** | **String**| The ID of the campaign to edit | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllCampaigns

> [Campaign] getAllCampaigns(opts)

Get All Campaigns

Retrieve a list of all campaigns.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let opts = {
  'offset': 0, // Number | Offset for pagination
  'limit': 20, // Number | Limit for pagination
  'search': "search_example" // String | Search term to filter campaigns
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
 **offset** | **Number**| Offset for pagination | [optional] [default to 0]
 **limit** | **Number**| Limit for pagination | [optional] [default to 20]
 **search** | **String**| Search term to filter campaigns | [optional] 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignById

> Campaign getCampaignById(campaignId)

Get Campaign By Id

Retrieve a specific campaign using its ID.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.CampaignApi();
let campaignId = "campaignId_example"; // String | The ID of the campaign to retrieve.
apiInstance.getCampaignById(campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| The ID of the campaign to retrieve. | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

