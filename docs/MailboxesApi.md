# MailHubApi.MailboxesApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailboxesGet**](MailboxesApi.md#mailboxesGet) | **GET** /mailboxes | Get all mailboxes



## mailboxesGet

> [String] mailboxesGet()

Get all mailboxes

Get all mailboxes

### Example

```javascript
import MailHubApi from 'mail_hub_api';
let defaultClient = MailHubApi.ApiClient.instance;
// Configure Bearer (uuid) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MailHubApi.MailboxesApi();
apiInstance.mailboxesGet((error, data, response) => {
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

**[String]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

