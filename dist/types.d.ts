export interface ChatMessage {
    id: string | number;
    type: 'text' | 'image' | 'video' | 'voice' | 'card' | 'tip';
    content: string;
    sender: 'self' | 'other';
    avatar?: string;
    nickname?: string;
    timestamp?: number;
    status?: 'sending' | 'sent' | 'failed';
    mediaUrl?: string;
    mediaThumbnail?: string;
    voiceDuration?: number;
    card?: {
        title: string;
        status: string;
        statusType?: string;
        days?: string;
        range?: string;
        actionText?: string;
    };
}
export interface ChatRoomProps {
    messages: ChatMessage[];
    currentUser?: {
        id: string | number;
        avatar?: string;
        nickname?: string;
    };
    targetUser?: {
        id: string | number;
        avatar?: string;
        nickname?: string;
    };
    showEmoji?: boolean;
    showPlus?: boolean;
    enableVoice?: boolean;
    placeholder?: string;
    emojiBasePath?: string;
    maxLines?: number;
}
export interface ChatRoomEmits {
    (e: 'send', message: {
        type: 'text';
        content: string;
        html: string;
    }): void;
    (e: 'sendImage', file: {
        url: string;
        type: string;
    }): void;
    (e: 'sendVideo', file: {
        url: string;
        type: string;
        thumbnail?: string;
    }): void;
    (e: 'sendVoice', voice: {
        url: string;
        duration: number;
    }): void;
    (e: 'messageClick', message: ChatMessage): void;
    (e: 'messageLongPress', message: ChatMessage): void;
    (e: 'cardAction', message: ChatMessage): void;
    (e: 'inputChange', content: string): void;
}
export interface EmojiItem {
    code: string;
    name: string;
}
export interface EmojiCategory {
    name: string;
    icon?: string;
    emojis: EmojiItem[];
}
export interface EmojiPickerProps {
    categories?: EmojiCategory[];
    basePath?: string;
    columns?: number;
}
export interface EmojiPickerEmits {
    (e: 'select', emoji: EmojiItem): void;
}
