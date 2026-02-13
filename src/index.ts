// 组件导出
export { default as ChatRoom } from './components/ChatRoom.vue'
export { default as EmojiPicker } from './components/EmojiPicker.vue'
export { default as MessageBubble } from './components/MessageBubble.vue'

// 工具函数导出
export * from './utils/emoji'

// 类型导出
export type {
  ChatMessage,
  ChatRoomProps,
  ChatRoomEmits,
  EmojiItem,
  EmojiCategory
} from './types'
