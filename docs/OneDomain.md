# MailHubApi.OneDomain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**catchAll** | **Boolean** |  | [optional] 
**defaultFwdThreshold** | **Number** |  | [optional] [default to 10]
**status** | **String** |  | [optional] [readonly] 
**enabled** | **Boolean** |  | [optional] [readonly] 
**domainForwards** | [**[OneDomainAllOfDomainForwards]**](OneDomainAllOfDomainForwards.md) | Short information of domain dest addresses | [optional] 



## Enum: TypeEnum


* `parked` (value: `"parked"`)

* `subdomain` (value: `"subdomain"`)




