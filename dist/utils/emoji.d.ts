import { EmojiCategory } from '../types';

export declare const emojiNameMap: Record<string, string>;
export declare const defaultEmojiCategories: EmojiCategory[];
export declare function getEmojiUrl(code: string, basePath?: string): string;
export declare function getEmojiName(code: string): string;
export declare function getEmojiCode(name: string): string | undefined;
export declare function parseEmojiText(text: string): {
    type: 'text' | 'emoji';
    content: string;
    code?: string;
}[];
export declare function htmlToText(html: string): string;
