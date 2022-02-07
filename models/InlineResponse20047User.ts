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

import { InlineResponse20047UserMetadata } from './InlineResponse20047UserMetadata';
import { HttpFile } from '../http/http';

export class InlineResponse20047User {
    'userId'?: string;
    'nickname'?: string;
    'profileUrl'?: string;
    'metadata'?: InlineResponse20047UserMetadata;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "InlineResponse20047UserMetadata",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20047User.attributeTypeMap;
    }

    public constructor() {
    }
}

