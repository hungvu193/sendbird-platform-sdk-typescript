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

import { InlineResponse2001PushConfigurations } from './InlineResponse2001PushConfigurations';
import { HttpFile } from '../http/http';

export class InlineResponse2001 {
    'pushConfigurations'?: Array<InlineResponse2001PushConfigurations>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pushConfigurations",
            "baseName": "push_configurations",
            "type": "Array<InlineResponse2001PushConfigurations>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001.attributeTypeMap;
    }

    public constructor() {
    }
}

