# MailHubApi.VerificationsApi

All URIs are relative to *https://api.mail-hub.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verificationsCodeGet**](VerificationsApi.md#verificationsCodeGet) | **GET** /verifications/{code} | Verify operation
[**verificationsPut**](VerificationsApi.md#verificationsPut) | **PUT** /verifications | Resend email address verification



## verificationsCodeGet

> InlineResponse200 verificationsCodeGet(code)

Verify operation

Verify operation using verification code. &lt;/br&gt; Example of operations that require verification: create/change user email address, create/change forwarding address, delete organization, etc. 

### Example

```javascript
import MailHubApi from 'mail_hub_api';

let apiInstance = new MailHubApi.VerificationsApi();
let code = "code_example"; // String | Verification code
apiInstance.verificationsCodeGet(code, (error, data, response) => {
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
 **code** | **String**| Verification code | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verificationsPut

> InlineResponse200 verificationsPut(opts)

Resend email address verification

Resend verification mail for specified email address 

### Example

```javascript
import MailHubApi from 'mail_hub_api';

let apiInstance = new MailHubApi.VerificationsApi();
let opts = {
  'inlineObject4': new MailHubApi.InlineObject4() // InlineObject4 | 
};
apiInstance.verificationsPut(opts, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

