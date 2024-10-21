# sendx.ReportsApi

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCampaignReport**](ReportsApi.md#getCampaignReport) | **GET** /report/campaign/{campaignId} | Get CampaignReport Data



## getCampaignReport

> ReportData getCampaignReport(campaignId, opts)

Get CampaignReport Data

Retrieve the campaign report data based on the provided campaign id.

### Example

```javascript
import sendx from 'sendx-javascript-sdk';
let defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new sendx.ReportsApi();
let campaignId = "campaignId_example"; // String | The ID of the campaign to retrieve the report data for
let opts = {
  'integrationType': "integrationType_example" // String | Type of integration for the report data (optional)
};
apiInstance.getCampaignReport(campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| The ID of the campaign to retrieve the report data for | 
 **integrationType** | **String**| Type of integration for the report data (optional) | [optional] 

### Return type

[**ReportData**](ReportData.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

