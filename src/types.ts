// 消息类型
export interface ChatMessage {
  id: string | number
  type: 'text' | 'image' | 'video' | 'voice' | 'card' | 'tip'
  content: string
  sender: 'self' | 'other'
  avatar?: string
  nickname?: string
  timestamp?: number
  status?: 'sending' | 'sent' | 'failed'
  // 图片/视频消息
  mediaUrl?: string
  mediaThumbnail?: string
  // 语音消息
  voiceDuration?: number
  // 卡片消息
  card?: {
    title: string
    status: string
    statusType?: string
    days?: string
    range?: string
    actionText?: string
  }
}

// ChatRoom 组件 Props
export interface ChatRoomProps {
  // 消息列表
  messages: ChatMessage[]
  // 当前用户信息
  currentUser?: {
    id: string | number
    avatar?: string
    nickname?: string
  }
  // 对方用户信息
  targetUser?: {
    id: string | number
    avatar?: string
    nickname?: string
  }
  // 是否显示表情面板
  showEmoji?: boolean
  // 是否显示更多功能面板
  showPlus?: boolean
  // 是否支持语音输入
  enableVoice?: boolean
  // 占位文字
  placeholder?: string
  // 表情资源路径前缀
  emojiBasePath?: string
  // 最大输入行数
  maxLines?: number
}

// ChatRoom 组件 Emits
export interface ChatRoomEmits {
  // 发送文本消息
  (e: 'send', message: { type: 'text'; content: string; html: string }): void
  // 发送图片
  (e: 'sendImage', file: { url: string; type: string }): void
  // 发送视频
  (e: 'sendVideo', file: { url: string; type: string; thumbnail?: string }): void
  // 发送语音
  (e: 'sendVoice', voice: { url: string; duration: number }): void
  // 点击消息
  (e: 'messageClick', message: ChatMessage): void
  // 长按消息
  (e: 'messageLongPress', message: ChatMessage): void
  // 点击卡片操作
  (e: 'cardAction', message: ChatMessage): void
  // 输入内容变化
  (e: 'inputChange', content: string): void
}

// 表情项
export interface EmojiItem {
  code: string
  name: string
}

// 表情分类
export interface EmojiCategory {
  name: string
  icon?: string
  emojis: EmojiItem[]
}

// EmojiPicker Props
export interface EmojiPickerProps {
  // 表情分类列表
  categories?: EmojiCategory[]
  // 表情资源路径前缀
  basePath?: string
  // 每行显示数量
  columns?: number
}

// EmojiPicker Emits
export interface EmojiPickerEmits {
  (e: 'select', emoji: EmojiItem): void
}
