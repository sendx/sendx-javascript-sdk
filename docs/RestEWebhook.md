# sendx.RestEWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | Webhook endpoint URL | 
**enabled** | **Boolean** | Whether webhook is enabled | [default to true]
**unsubscribed** | **Boolean** | Trigger webhook when a contact unsubscribes | [optional] [default to false]
**dropped** | **Boolean** | Trigger webhook when an email is dropped | [optional] [default to false]
**bounced** | **Boolean** | Trigger webhook when an email bounces | [optional] [default to false]
**markedSpam** | **Boolean** | Trigger webhook when an email is marked as spam | [optional] [default to false]
**clicked** | **Boolean** | Trigger webhook when a link in the email is clicked | [optional] [default to false]
**opened** | **Boolean** | Trigger webhook when an email is opened | [optional] [default to false]
**contactCreated** | **Boolean** | Trigger webhook when a new contact is created | [optional] [default to false]


