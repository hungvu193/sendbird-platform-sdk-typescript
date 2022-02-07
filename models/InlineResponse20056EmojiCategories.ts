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

import { InlineResponse20056Emojis } from './InlineResponse20056Emojis';
import { HttpFile } from '../http/http';

export class InlineResponse20056EmojiCategories {
    'id'?: number;
    'name'?: string;
    'url'?: string;
    'emojis'?: Array<InlineResponse20056Emojis>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<InlineResponse20056Emojis>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20056EmojiCategories.attributeTypeMap;
    }

    public constructor() {
    }
}

