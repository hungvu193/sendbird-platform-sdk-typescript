# .MetadataApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewChannelMetacounter**](MetadataApi.md#viewChannelMetacounter) | **GET** /v3/{channel_type}/{channel_url}/metacounter | View a channel metacounter - When retrieving all items of a channel metacounter
[**viewChannelMetacounterByKey**](MetadataApi.md#viewChannelMetacounterByKey) | **GET** /v3/{channel_type}/{channel_url}/metacounter/{key} | View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
[**viewChannelMetadata**](MetadataApi.md#viewChannelMetadata) | **GET** /v3/{channel_type}/{channel_url}/metadata | View a channel metadata - When retrieving all items of a channel metadata
[**viewChannelMetadataByKey**](MetadataApi.md#viewChannelMetadataByKey) | **GET** /v3/{channel_type}/{channel_url}/metadata/{key} | View a channel metadata - When retrieving a specific item of a channel metadata by its key
[**viewUserMetadata**](MetadataApi.md#viewUserMetadata) | **GET** /v3/users/{user_id}/metadata | View a user metadata - When retrieving all items of a user metadata
[**viewUserMetadataByKey**](MetadataApi.md#viewUserMetadataByKey) | **GET** /v3/users/{user_id}/metadata/{key} | View a user metadata - When retrieving a specific item of a user metadata by its key


# **viewChannelMetacounter**
> { [key: string]: SendBirdAdditionalProperties; } viewChannelMetacounter()

## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewChannelMetacounterRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  key: "key_example",
  // Array<string> (optional)
  keys: [
    "keys_example",
  ],
};

apiInstance.viewChannelMetacounter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
 **keys** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**{ [key: string]: SendBirdAdditionalProperties; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewChannelMetacounterByKey**
> { [key: string]: SendBirdAdditionalProperties; } viewChannelMetacounterByKey()

## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewChannelMetacounterByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  key: "key_example",
};

apiInstance.viewChannelMetacounterByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | defaults to undefined


### Return type

**{ [key: string]: SendBirdAdditionalProperties; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewChannelMetadata**
> { [key: string]: string; } viewChannelMetadata()

## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewChannelMetadataRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  key: "key_example",
  // Array<string> (optional)
  keys: [
    "keys_example",
  ],
};

apiInstance.viewChannelMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
 **keys** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewChannelMetadataByKey**
> { [key: string]: string; } viewChannelMetadataByKey()

## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewChannelMetadataByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  key: "key_example",
};

apiInstance.viewChannelMetadataByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | defaults to undefined


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewUserMetadata**
> ViewUserMetadataResponse viewUserMetadata()

## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewUserMetadataRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string (optional)
  key: "key_example",
  // Array<string> (optional)
  keys: [
    "keys_example",
  ],
};

apiInstance.viewUserMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
 **keys** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**ViewUserMetadataResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewUserMetadataByKey**
> { [key: string]: string; } viewUserMetadataByKey()

## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetadataApi(configuration);

let body:.MetadataApiViewUserMetadataByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string
  key: "key_example",
};

apiInstance.viewUserMetadataByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | defaults to undefined


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

