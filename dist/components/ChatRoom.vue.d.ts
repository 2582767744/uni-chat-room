import { ChatMessage, ChatRoomProps } from '../types';

declare function __VLS_template(): {
    "plus-panel"?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ChatRoomProps>, {
    messages: () => never[];
    showEmoji: boolean;
    showPlus: boolean;
    enableVoice: boolean;
    placeholder: string;
    emojiBasePath: string;
    maxLines: number;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (message: {
        type: "text";
        content: string;
        html: string;
    }) => void;
    sendImage: (file: {
        url: string;
        type: string;
    }) => void;
    sendVideo: (file: {
        url: string;
        type: string;
        thumbnail?: string;
    }) => void;
    sendVoice: (voice: {
        url: string;
        duration: number;
    }) => void;
    messageClick: (message: ChatMessage) => void;
    messageLongPress: (message: ChatMessage) => void;
    cardAction: (message: ChatMessage) => void;
    inputChange: (content: string) => void;
    loadMore: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ChatRoomProps>, {
    messages: () => never[];
    showEmoji: boolean;
    showPlus: boolean;
    enableVoice: boolean;
    placeholder: string;
    emojiBasePath: string;
    maxLines: number;
}>>> & Readonly<{
    onSend?: ((message: {
        type: "text";
        content: string;
        html: string;
    }) => any) | undefined;
    onSendImage?: ((file: {
        url: string;
        type: string;
    }) => any) | undefined;
    onSendVideo?: ((file: {
        url: string;
        type: string;
        thumbnail?: string;
    }) => any) | undefined;
    onSendVoice?: ((voice: {
        url: string;
        duration: number;
    }) => any) | undefined;
    onMessageClick?: ((message: ChatMessage) => any) | undefined;
    onMessageLongPress?: ((message: ChatMessage) => any) | undefined;
    onCardAction?: ((message: ChatMessage) => any) | undefined;
    onInputChange?: ((content: string) => any) | undefined;
    onLoadMore?: (() => any) | undefined;
}>, {
    emojiBasePath: string;
    messages: ChatMessage[];
    showEmoji: boolean;
    showPlus: boolean;
    enableVoice: boolean;
    placeholder: string;
    maxLines: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
