/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SendBirdGroupChannel } from './SendBirdGroupChannel';
import { HttpFile } from '../http/http';

export class JoinChannelsResponse {
    'channels'?: Array<SendBirdGroupChannel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<SendBirdGroupChannel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JoinChannelsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

