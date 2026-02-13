# API Documentation / API 文档

## Table of Contents / 目录

- [Components / 组件](#components--组件)
  - [ChatRoom](#chatroom)
  - [EmojiPicker](#emojipicker)
  - [MessageBubble](#messagebubble)
- [Types / 类型](#types--类型)
- [Utilities / 工具函数](#utilities--工具函数)

---

## Components / 组件

### ChatRoom

The main chat room component. / 主聊天室组件。

#### Props

| Prop | Type | Default | Description (EN) | 说明 (中文) |
|------|------|---------|------------------|-------------|
| `messages` | `ChatMessage[]` | `[]` | Array of messages to display | 要显示的消息数组 |
| `currentUser` | `Object` | `undefined` | Current user info `{ id, avatar?, nickname? }` | 当前用户信息 |
| `targetUser` | `Object` | `undefined` | Target user info `{ id, avatar?, nickname? }` | 对方用户信息 |
| `showEmoji` | `boolean` | `true` | Whether to show emoji button | 是否显示表情按钮 |
| `showPlus` | `boolean` | `true` | Whether to show plus/more button | 是否显示更多功能按钮 |
| `enableVoice` | `boolean` | `false` | Whether to enable voice input | 是否启用语音输入 |
| `placeholder` | `string` | `'请输入消息...'` | Input placeholder text | 输入框占位文字 |
| `emojiBasePath` | `string` | `'/static/emoji'` | Base path for emoji images | 表情图片基础路径 |
| `maxLines` | `number` | `10` | Maximum lines for input box | 输入框最大行数 |

#### Events

| Event | Payload | Description (EN) | 说明 (中文) |
|-------|---------|------------------|-------------|
| `send` | `{ type: 'text', content: string, html: string }` | Fired when sending text message | 发送文本消息时触发 |
| `sendImage` | `{ url: string, type: string }` | Fired when sending image | 发送图片时触发 |
| `sendVideo` | `{ url: string, type: string, thumbnail?: string }` | Fired when sending video | 发送视频时触发 |
| `sendVoice` | `{ url: string, duration: number }` | Fired when sending voice | 发送语音时触发 |
| `messageClick` | `ChatMessage` | Fired when message is clicked | 点击消息时触发 |
| `messageLongPress` | `ChatMessage` | Fired when message is long pressed | 长按消息时触发 |
| `cardAction` | `ChatMessage` | Fired when card action is clicked | 点击卡片操作时触发 |
| `inputChange` | `string` | Fired when input content changes | 输入内容变化时触发 |
| `loadMore` | - | Fired when scrolling to top (load more) | 滚动到顶部时触发（加载更多） |

#### Slots

| Slot | Description (EN) | 说明 (中文) |
|------|------------------|-------------|
| `plus-panel` | Custom content for plus panel | 自定义更多功能面板内容 |

#### Example / 示例

```vue
<template>
  <ChatRoom
    :messages="messages"
    :current-user="currentUser"
    :target-user="targetUser"
    placeholder="Type a message..."
    emoji-base-path="/assets/emoji"
    @send="handleSend"
    @send-image="handleSendImage"
    @load-more="loadMoreMessages"
  >
    <template #plus-panel>
      <div class="custom-panel">
        <button @click="sendLocation">📍 Location</button>
        <button @click="sendFile">📎 File</button>
      </div>
    </template>
  </ChatRoom>
</template>
```

---

### EmojiPicker

Emoji selection panel component. / 表情选择面板组件。

#### Props

| Prop | Type | Default | Description (EN) | 说明 (中文) |
|------|------|---------|------------------|-------------|
| `categories` | `EmojiCategory[]` | `defaultEmojiCategories` | Emoji categories to display | 要显示的表情分类 |
| `basePath` | `string` | `'/static/emoji'` | Base path for emoji images | 表情图片基础路径 |
| `columns` | `number` | `8` | Number of columns in grid | 每行显示的表情数量 |

#### Events

| Event | Payload | Description (EN) | 说明 (中文) |
|-------|---------|------------------|-------------|
| `select` | `{ code: string, name: string }` | Fired when emoji is selected | 选择表情时触发 |

#### Example / 示例

```vue
<template>
  <EmojiPicker
    :columns="10"
    base-path="/my-emoji"
    @select="onEmojiSelect"
  />
</template>

<script setup>
const onEmojiSelect = ({ code, name }) => {
  console.log(`Selected: ${name} (${code})`)
}
</script>
```

---

### MessageBubble

Single message bubble component. / 单条消息气泡组件。

#### Props

| Prop | Type | Required | Description (EN) | 说明 (中文) |
|------|------|----------|------------------|-------------|
| `message` | `ChatMessage` | Yes | Message object to display | 要显示的消息对象 |
| `emojiBasePath` | `string` | No | Base path for emoji images | 表情图片基础路径 |

#### Events

| Event | Payload | Description (EN) | 说明 (中文) |
|-------|---------|------------------|-------------|
| `imageClick` | `ChatMessage` | Fired when image is clicked | 点击图片时触发 |
| `voiceClick` | `ChatMessage` | Fired when voice is clicked | 点击语音时触发 |
| `cardAction` | `ChatMessage` | Fired when card action is clicked | 点击卡片操作时触发 |
| `retry` | `ChatMessage` | Fired when retry is clicked | 点击重试时触发 |

#### Example / 示例

```vue
<template>
  <MessageBubble
    :message="message"
    @image-click="previewImage"
    @voice-click="playVoice"
  />
</template>
```

---

## Types / 类型

### ChatMessage

```typescript
interface ChatMessage {
  /** Unique message ID / 消息唯一ID */
  id: string | number
  
  /** Message type / 消息类型 */
  type: 'text' | 'image' | 'video' | 'voice' | 'card' | 'tip'
  
  /** Message content (text or description) / 消息内容 */
  content: string
  
  /** Message sender / 发送者 */
  sender: 'self' | 'other'
  
  /** Sender avatar URL / 发送者头像 */
  avatar?: string
  
  /** Sender nickname / 发送者昵称 */
  nickname?: string
  
  /** Message timestamp (ms) / 消息时间戳 */
  timestamp?: number
  
  /** Send status / 发送状态 */
  status?: 'sending' | 'sent' | 'failed'
  
  /** Media URL (for image/video) / 媒体URL */
  mediaUrl?: string
  
  /** Media thumbnail URL / 媒体缩略图 */
  mediaThumbnail?: string
  
  /** Voice duration in seconds / 语音时长(秒) */
  voiceDuration?: number
  
  /** Card message data / 卡片消息数据 */
  card?: {
    title: string
    status: string
    statusType?: 'pending' | 'approved' | 'rejected'
    days?: string
    range?: string
    actionText?: string
  }
}
```

### EmojiItem

```typescript
interface EmojiItem {
  /** Emoji code (e.g., '1f600') / 表情码 */
  code: string
  
  /** Emoji name / 表情名称 */
  name: string
}
```

### EmojiCategory

```typescript
interface EmojiCategory {
  /** Category name / 分类名称 */
  name: string
  
  /** Category icon (emoji code) / 分类图标 */
  icon?: string
  
  /** Emojis in this category / 该分类下的表情 */
  emojis: EmojiItem[]
}
```

---

## Utilities / 工具函数

### parseEmojiText

Parse text containing emoji placeholders into structured parts.

解析包含表情占位符的文本为结构化数据。

```typescript
function parseEmojiText(text: string): Array<{
  type: 'text' | 'emoji'
  content: string
  code?: string
}>
```

**Example / 示例:**

```typescript
import { parseEmojiText } from 'uni-chat-room'

const parts = parseEmojiText('Hello [微笑] World [大笑]')
// Result:
// [
//   { type: 'text', content: 'Hello ' },
//   { type: 'emoji', content: '微笑', code: '1f600' },
//   { type: 'text', content: ' World ' },
//   { type: 'emoji', content: '大笑', code: '1f604' }
// ]
```

---

### getEmojiUrl

Get the URL for an emoji image.

获取表情图片的 URL。

```typescript
function getEmojiUrl(code: string, basePath?: string): string
```

**Example / 示例:**

```typescript
import { getEmojiUrl } from 'uni-chat-room'

const url = getEmojiUrl('1f600')
// Result: '/static/emoji/1f600.png'

const customUrl = getEmojiUrl('1f600', '/assets/emoji')
// Result: '/assets/emoji/1f600.png'
```

---

### getEmojiName

Get the Chinese name for an emoji code.

获取表情码对应的中文名称。

```typescript
function getEmojiName(code: string): string
```

**Example / 示例:**

```typescript
import { getEmojiName } from 'uni-chat-room'

const name = getEmojiName('1f600')
// Result: '微笑'
```

---

### getEmojiCode

Get the emoji code for a Chinese name.

获取中文名称对应的表情码。

```typescript
function getEmojiCode(name: string): string | undefined
```

**Example / 示例:**

```typescript
import { getEmojiCode } from 'uni-chat-room'

const code = getEmojiCode('微笑')
// Result: '1f600'
```

---

### htmlToText

Convert HTML content to plain text (emoji images become `[name]`).

将 HTML 内容转换为纯文本（表情图片转为 `[名称]`）。

```typescript
function htmlToText(html: string): string
```

**Example / 示例:**

```typescript
import { htmlToText } from 'uni-chat-room'

const text = htmlToText('<p>Hello <img alt="[微笑]"> World</p>')
// Result: 'Hello [微笑] World'
```

---

### defaultEmojiCategories

Default emoji categories with 200+ emojis.

默认表情分类，包含 200+ 表情。

```typescript
const defaultEmojiCategories: EmojiCategory[]
```

**Categories / 分类:**

| Category | Count | Description |
|----------|-------|-------------|
| 笑脸 (Faces) | 80 | Facial expressions |
| 手势 (Gestures) | 26 | Hand gestures |
| 爱心 (Hearts) | 15 | Heart symbols |
| 符号 (Symbols) | 20 | Various symbols |

---

## CSS Variables / CSS 变量

You can customize the appearance using CSS variables:

可以通过 CSS 变量自定义外观：

```css
.chat-room {
  --chat-bg: #f5f5f5;
  --bubble-self: #95ec69;
  --bubble-other: #ffffff;
  --input-bg: #ffffff;
  --text-color: #333333;
  --text-secondary: #999999;
}
```
