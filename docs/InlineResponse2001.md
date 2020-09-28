# MailHubApi.InlineResponse2001

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] [readonly] 
**purpose** | **String** |  | [optional] [readonly] 
**expireOn** | **Date** | Expiration time tells, that starting from this time no more mails  will be accepted for the domain.  | [optional] [readonly] 
**createBefore** | **Date** | All objects based on this domain allowed to be created before this  date.  | [optional] [readonly] 



## Enum: PurposeEnum


* `subdomain` (value: `"subdomain"`)

* `mailbox` (value: `"mailbox"`)




