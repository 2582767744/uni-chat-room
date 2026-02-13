import { ChatMessage } from '../types';

interface Props {
    message: ChatMessage;
    emojiBasePath?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    emojiBasePath: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    imageClick: (message: ChatMessage) => void;
    voiceClick: (message: ChatMessage) => void;
    cardAction: (message: ChatMessage) => void;
    retry: (message: ChatMessage) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    emojiBasePath: string;
}>>> & Readonly<{
    onCardAction?: ((message: ChatMessage) => any) | undefined;
    onImageClick?: ((message: ChatMessage) => any) | undefined;
    onVoiceClick?: ((message: ChatMessage) => any) | undefined;
    onRetry?: ((message: ChatMessage) => any) | undefined;
}>, {
    emojiBasePath: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
