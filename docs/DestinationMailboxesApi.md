# MailHubApi.DestinationMailboxesApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**destinationsMailboxesGet**](DestinationMailboxesApi.md#destinationsMailboxesGet) | **GET** /destinations/mailboxes | Get all destination mailboxes
[**destinationsMailboxesIdDelete**](DestinationMailboxesApi.md#destinationsMailboxesIdDelete) | **DELETE** /destinations/mailboxes/{id} | Delete destination mailbox
[**destinationsMailboxesPost**](DestinationMailboxesApi.md#destinationsMailboxesPost) | **POST** /destinations/mailboxes | Add one destination mailbox



## destinationsMailboxesGet

> [DestinationMailbox] destinationsMailboxesGet()

Get all destination mailboxes

List destination mailboxes.&lt;/br&gt;  Destination mailboxes are 3rd party mailboxes that may receive mails from Mail-Hub.&lt;/br&gt; E.g. one can configure to forward incoming mails to destination mailboxes. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DestinationMailboxesApi();
apiInstance.destinationsMailboxesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[DestinationMailbox]**](DestinationMailbox.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## destinationsMailboxesIdDelete

> InlineResponse200 destinationsMailboxesIdDelete(id)

Delete destination mailbox

Delete destination mailbox

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DestinationMailboxesApi();
let id = 10; // Number | ID of destination mailbox
apiInstance.destinationsMailboxesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of destination mailbox | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## destinationsMailboxesPost

> InlineResponse200 destinationsMailboxesPost(opts)

Add one destination mailbox

Add single destination mailbox that can be used as destination for forwarding. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.DestinationMailboxesApi();
let opts = {
  'inlineObject': new MailHubApi.InlineObject() // InlineObject | 
};
apiInstance.destinationsMailboxesPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

