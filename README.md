# SendX JavaScript SDK [![npm version](https://img.shields.io/npm/v/sendx-javascript-sdk.svg?style=flat)](https://www.npmjs.com/package/sendx-javascript-sdk)
## Introduction
SendX is an email marketing product. It helps you convert website visitors to customers, send them promotional emails, engage with them using drip sequences and craft custom journeys using powerful but simple automations.

The SendX API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
The SendX Rest API doesn’t support bulk updates. You can work on only one object per request. <br>

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via npm:

```shell
npm install sendx-javascript-sdk --save
```



To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your sendx-javascript-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var sendx = require('sendx-javascript-sdk');

var defaultClient = sendx.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
var apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix['X-Team-ApiKey'] = "Token"

var api = new sendx.CampaignApi()
var campaignRequest = new sendx.CampaignRequest(); // {CampaignRequest} The campaign content
api.createCampaign(campaignRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendx.io/api/v1/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*sendx.CampaignApi* | [**createCampaign**](docs/CampaignApi.md#createCampaign) | **POST** /campaign | Create Campaign
*sendx.CampaignApi* | [**deleteCampaign**](docs/CampaignApi.md#deleteCampaign) | **DELETE** /campaign/{campaignId} | Delete Campaign
*sendx.CampaignApi* | [**editCampaign**](docs/CampaignApi.md#editCampaign) | **PUT** /campaign/{campaignId} | Edit Campaign
*sendx.CampaignApi* | [**getAllCampaigns**](docs/CampaignApi.md#getAllCampaigns) | **GET** /campaign | Get All Campaigns
*sendx.CampaignApi* | [**getCampaignById**](docs/CampaignApi.md#getCampaignById) | **GET** /campaign/{campaignId} | Get Campaign By Id
*sendx.ContactApi* | [**createContact**](docs/ContactApi.md#createContact) | **POST** /contact | Create a contact
*sendx.ContactApi* | [**deleteContact**](docs/ContactApi.md#deleteContact) | **DELETE** /contact/{contactId} | Delete Contact
*sendx.ContactApi* | [**getAllContacts**](docs/ContactApi.md#getAllContacts) | **GET** /contact | Get All Contacts
*sendx.ContactApi* | [**getContactById**](docs/ContactApi.md#getContactById) | **GET** /contact/{contactId} | Get Contact by ID
*sendx.ContactApi* | [**unsubscribeContact**](docs/ContactApi.md#unsubscribeContact) | **POST** /contact/unsubscribe/{contactId} | Unsubscribe Contact
*sendx.ContactApi* | [**updateContact**](docs/ContactApi.md#updateContact) | **PUT** /contact/{contactId} | Update Contact
*sendx.ListApi* | [**createList**](docs/ListApi.md#createList) | **POST** /list | Create List
*sendx.ListApi* | [**deleteList**](docs/ListApi.md#deleteList) | **DELETE** /list/{listId} | Delete List
*sendx.ListApi* | [**getAllLists**](docs/ListApi.md#getAllLists) | **GET** /list | Get All Lists
*sendx.ListApi* | [**getListById**](docs/ListApi.md#getListById) | **GET** /list/{listId} | Get List
*sendx.ListApi* | [**updateList**](docs/ListApi.md#updateList) | **PUT** /list/{listId} | Update List
*sendx.ReportsApi* | [**getCampaignReport**](docs/ReportsApi.md#getCampaignReport) | **GET** /report/campaign/{campaignId} | Get CampaignReport Data
*sendx.SenderApi* | [**createSender**](docs/SenderApi.md#createSender) | **POST** /sender | Create Sender
*sendx.SenderApi* | [**getAllSenders**](docs/SenderApi.md#getAllSenders) | **GET** /sender | Get All Senders
*sendx.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tag | Create a Tag
*sendx.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tag/{tagId} | Delete a Tag
*sendx.TagsApi* | [**getAllTags**](docs/TagsApi.md#getAllTags) | **GET** /tag | Get All Tags
*sendx.TagsApi* | [**getTagById**](docs/TagsApi.md#getTagById) | **GET** /tag/{tagId} | Get a Tag by ID
*sendx.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tag/{tagId} | Update a Tag


## Documentation for Models

 - [sendx.Campaign](docs/Campaign.md)
 - [sendx.CampaignDashboardData](docs/CampaignDashboardData.md)
 - [sendx.CampaignRequest](docs/CampaignRequest.md)
 - [sendx.Contact](docs/Contact.md)
 - [sendx.ContactRequest](docs/ContactRequest.md)
 - [sendx.CreateResponse](docs/CreateResponse.md)
 - [sendx.DashboardStats](docs/DashboardStats.md)
 - [sendx.DeleteCampaign200Response](docs/DeleteCampaign200Response.md)
 - [sendx.DeleteRequest](docs/DeleteRequest.md)
 - [sendx.DeleteResponse](docs/DeleteResponse.md)
 - [sendx.LastSentCampaignStat](docs/LastSentCampaignStat.md)
 - [sendx.ListModel](docs/ListModel.md)
 - [sendx.ListRequest](docs/ListRequest.md)
 - [sendx.ReportData](docs/ReportData.md)
 - [sendx.Response](docs/Response.md)
 - [sendx.Sender](docs/Sender.md)
 - [sendx.SenderRequest](docs/SenderRequest.md)
 - [sendx.SenderResponse](docs/SenderResponse.md)
 - [sendx.Tag](docs/Tag.md)
 - [sendx.TagRequest](docs/TagRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### apiKeyAuth


- **Type**: API key
- **API key parameter name**: X-Team-ApiKey
- **Location**: HTTP header

