<template>
  <view class="chat-room">
    <!-- 消息列表 -->
    <scroll-view 
      class="message-list" 
      scroll-y 
      :scroll-top="scrollTop"
      :scroll-with-animation="true"
      @scrolltoupper="onScrollToUpper"
    >
      <view class="message-container">
        <view 
          v-for="message in messages" 
          :key="message.id"
          class="message-row"
          :class="message.sender"
        >
          <!-- 时间提示 -->
          <view v-if="message.type === 'tip'" class="tip-line">
            <text class="tip">{{ message.content }}</text>
          </view>
          
          <!-- 普通消息 -->
          <template v-else>
            <!-- 头像 -->
            <image 
              v-if="message.sender === 'other'"
              :src="message.avatar || targetUser?.avatar || defaultAvatar"
              class="avatar"
            />
            
            <!-- 消息气泡 -->
            <MessageBubble 
              :message="message"
              :emoji-base-path="emojiBasePath"
              @image-click="onImageClick"
              @voice-click="onVoiceClick"
              @card-action="onCardAction"
              @retry="onRetry"
            />
            
            <!-- 自己的头像 -->
            <image 
              v-if="message.sender === 'self'"
              :src="currentUser?.avatar || defaultAvatar"
              class="avatar"
            />
          </template>
        </view>
      </view>
    </scroll-view>
    
    <!-- 输入区域 -->
    <view class="input-area">
      <view class="input-container">
        <!-- 语音按钮 -->
        <button v-if="enableVoice" class="icon-btn" @click="toggleVoice">
          <image class="btn-icon" :src="voiceIcon" />
        </button>
        
        <!-- 输入框 -->
        <view class="input-box">
          <view v-if="!isVoiceMode" class="input-wrapper">
            <editor
              v-show="editorReady"
              :id="editorId"
              class="chat-editor"
              :placeholder="placeholder"
              @ready="onEditorReady"
              @input="onEditorInput"
              @focus="onEditorFocus"
              @blur="onEditorBlur"
            />
            <view v-if="!editorReady" class="editor-placeholder">
              <text>{{ placeholder }}</text>
            </view>
          </view>
          <view v-else class="voice-input" @touchstart="onVoiceStart" @touchend="onVoiceEnd">
            <text>按住说话</text>
          </view>
        </view>
        
        <!-- 表情按钮 -->
        <button v-if="showEmoji" class="icon-btn" @click="toggleEmojiPanel">
          <image class="btn-icon" :src="emojiIcon" />
        </button>
        
        <!-- 更多/发送按钮 -->
        <button v-if="hasContent" class="icon-btn send-btn" @click="onSend">
          <text>发送</text>
        </button>
        <button v-else-if="showPlus" class="icon-btn" @click="togglePlusPanel">
          <image class="btn-icon" :src="plusIcon" />
        </button>
      </view>
      
      <!-- 表情面板 -->
      <EmojiPicker 
        v-if="showEmojiPanel"
        :categories="emojiCategories"
        :base-path="emojiBasePath"
        @select="onEmojiSelect"
      />
      
      <!-- 更多功能面板 -->
      <view v-if="showPlusPanel" class="plus-panel">
        <slot name="plus-panel">
          <view class="plus-grid">
            <view class="plus-item" @click="onSelectImage">
              <view class="plus-icon">
                <text>📷</text>
              </view>
              <text class="plus-label">相册</text>
            </view>
            <view class="plus-item" @click="onTakePhoto">
              <view class="plus-icon">
                <text>📸</text>
              </view>
              <text class="plus-label">拍摄</text>
            </view>
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import type { ChatMessage, ChatRoomProps, EmojiCategory, EmojiItem } from '../types'
import { defaultEmojiCategories, htmlToText } from '../utils/emoji'
import EmojiPicker from './EmojiPicker.vue'
import MessageBubble from './MessageBubble.vue'

// 声明 uni 全局变量
declare const uni: any

const props = withDefaults(defineProps<ChatRoomProps>(), {
  messages: () => [],
  showEmoji: true,
  showPlus: true,
  enableVoice: false,
  placeholder: '请输入消息...',
  emojiBasePath: '/static/emoji',
  maxLines: 10
})

const emit = defineEmits<{
  (e: 'send', message: { type: 'text'; content: string; html: string }): void
  (e: 'sendImage', file: { url: string; type: string }): void
  (e: 'sendVideo', file: { url: string; type: string; thumbnail?: string }): void
  (e: 'sendVoice', voice: { url: string; duration: number }): void
  (e: 'messageClick', message: ChatMessage): void
  (e: 'messageLongPress', message: ChatMessage): void
  (e: 'cardAction', message: ChatMessage): void
  (e: 'inputChange', content: string): void
  (e: 'loadMore'): void
}>()

// 默认图标
const defaultAvatar = 'data:image/svg+xml,...'
const voiceIcon = 'data:image/svg+xml,...'
const emojiIcon = 'data:image/svg+xml,...'
const plusIcon = 'data:image/svg+xml,...'

// 状态
const editorId = `chat-editor-${Date.now()}`
const editorReady = ref(false)
const editorCtx = ref<any>(null)
const editorHtml = ref('')
const scrollTop = ref(0)
const isVoiceMode = ref(false)
const showEmojiPanel = ref(false)
const showPlusPanel = ref(false)
const savedRange = ref<Range | null>(null)

// 表情分类
const emojiCategories = computed<EmojiCategory[]>(() => defaultEmojiCategories)

// 是否有内容
const hasContent = computed(() => {
  const text = htmlToText(editorHtml.value)
  return text.length > 0
})

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    scrollTop.value = 99999
  })
}

// 监听消息变化，自动滚动
watch(() => props.messages.length, () => {
  scrollToBottom()
})

onMounted(() => {
  scrollToBottom()
})

// Editor 事件
const onEditorReady = () => {
  editorReady.value = true
  // #ifdef H5
  nextTick(() => {
    const el = document.querySelector(`#${editorId}`)
    if (el) {
      editorCtx.value = el
    }
  })
  // #endif
  // #ifndef H5
  uni.createSelectorQuery()
    .select(`#${editorId}`)
    .context((res: any) => {
      if (res?.context) {
        editorCtx.value = res.context
      }
    })
    .exec()
  // #endif
}

const onEditorInput = (e: any) => {
  editorHtml.value = e.detail?.html || ''
  emit('inputChange', htmlToText(editorHtml.value))
}

const onEditorFocus = () => {
  showEmojiPanel.value = false
  showPlusPanel.value = false
}

const onEditorBlur = () => {
  // 保存光标位置
  saveSelection()
}

// 保存光标位置
const saveSelection = () => {
  // #ifdef H5
  const selection = window.getSelection()
  if (selection && selection.rangeCount > 0) {
    savedRange.value = selection.getRangeAt(0).cloneRange()
  }
  // #endif
}

// 切换语音模式
const toggleVoice = () => {
  isVoiceMode.value = !isVoiceMode.value
}

// 切换表情面板
const toggleEmojiPanel = () => {
  if (showEmojiPanel.value) {
    showEmojiPanel.value = false
  } else {
    saveSelection()
    showPlusPanel.value = false
    showEmojiPanel.value = true
  }
}

// 切换更多面板
const togglePlusPanel = () => {
  if (showPlusPanel.value) {
    showPlusPanel.value = false
  } else {
    showEmojiPanel.value = false
    showPlusPanel.value = true
  }
}

// 选择表情
const onEmojiSelect = (emoji: EmojiItem) => {
  insertEmoji(emoji.code, emoji.name)
}

// 插入表情
const insertEmoji = (code: string, name: string) => {
  const imgSrc = `${props.emojiBasePath}/${code}.png`
  const altText = `[${name}]`
  
  // #ifdef H5
  try {
    const editorEl = document.querySelector(`#${editorId} .ql-editor`) as HTMLElement
    if (!editorEl) return
    
    const img = document.createElement('img')
    img.src = imgSrc
    img.alt = altText
    img.className = 'emoji-inline'
    img.style.cssText = 'width:20px;height:20px;vertical-align:middle;display:inline;'
    
    if (savedRange.value && editorEl.contains(savedRange.value.commonAncestorContainer)) {
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(savedRange.value)
      
      const range = savedRange.value
      range.deleteContents()
      range.insertNode(img)
      range.setStartAfter(img)
      range.collapse(true)
      savedRange.value = range.cloneRange()
    } else {
      const firstP = editorEl.querySelector('p')
      if (firstP) {
        const br = firstP.querySelector('br')
        if (br && firstP.textContent === '') br.remove()
        firstP.appendChild(img)
        
        const range = document.createRange()
        range.setStartAfter(img)
        range.collapse(true)
        savedRange.value = range.cloneRange()
      } else {
        editorEl.appendChild(img)
      }
    }
    
    editorEl.dispatchEvent(new Event('input', { bubbles: true }))
  } catch (e) {
    console.error('[ChatRoom] 插入表情失败:', e)
  }
  // #endif
  
  // #ifndef H5
  if (editorCtx.value) {
    editorCtx.value.insertImage({
      src: imgSrc,
      alt: altText,
      width: '20px',
      height: '20px',
      extClass: 'emoji-inline'
    })
  }
  // #endif
}

// 发送消息
const onSend = () => {
  const html = editorHtml.value
  const text = htmlToText(html)
  
  if (!text.trim()) return
  
  emit('send', { type: 'text', content: text, html })
  
  // 清空编辑器
  editorHtml.value = ''
  // #ifdef H5
  const editorEl = document.querySelector(`#${editorId} .ql-editor`) as HTMLElement
  if (editorEl) {
    editorEl.innerHTML = '<p><br></p>'
  }
  // #endif
  // #ifndef H5
  if (editorCtx.value?.setContents) {
    editorCtx.value.setContents({ html: '' })
  }
  // #endif
}

// 语音相关
const onVoiceStart = () => {
  // 开始录音
}

const onVoiceEnd = () => {
  // 结束录音
}

// 消息事件
const onImageClick = (message: ChatMessage) => {
  emit('messageClick', message)
}

const onVoiceClick = (message: ChatMessage) => {
  emit('messageClick', message)
}

const onCardAction = (message: ChatMessage) => {
  emit('cardAction', message)
}

const onRetry = (_message: ChatMessage) => {
  // 重试发送
}

// 加载更多
const onScrollToUpper = () => {
  emit('loadMore')
}

// 选择图片
const onSelectImage = () => {
  uni.chooseImage({
    count: 9,
    success: (res: any) => {
      res.tempFilePaths.forEach((url: string) => {
        emit('sendImage', { url, type: 'image' })
      })
    }
  })
  showPlusPanel.value = false
}

// 拍照
const onTakePhoto = () => {
  uni.chooseImage({
    count: 1,
    sourceType: ['camera'],
    success: (res: any) => {
      emit('sendImage', { url: res.tempFilePaths[0], type: 'image' })
    }
  })
  showPlusPanel.value = false
}
</script>

<style lang="scss" scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f5f5f5;
}

.message-list {
  flex: 1;
  overflow: hidden;
}

.message-container {
  padding: 20rpx;
}

.message-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24rpx;
  
  &.self {
    flex-direction: row-reverse;
  }
  
  .avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 8rpx;
    flex-shrink: 0;
    margin: 0 16rpx;
  }
}

.tip-line {
  width: 100%;
  text-align: center;
  
  .tip {
    font-size: 24rpx;
    color: #999;
    background: rgba(0, 0, 0, 0.05);
    padding: 8rpx 20rpx;
    border-radius: 8rpx;
  }
}

.input-area {
  background: #f1f2f3;
  padding-bottom: env(safe-area-inset-bottom);
}

.input-container {
  display: flex;
  align-items: flex-end;
  gap: 8rpx;
  padding: 20rpx;
  border-top: 2rpx solid #e5e5e5;
}

.icon-btn {
  width: 50rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  
  &::after {
    border: none;
  }
  
  .btn-icon {
    width: 50rpx;
    height: 50rpx;
  }
}

.send-btn {
  width: auto;
  padding: 0 20rpx;
  background: #07c160;
  border-radius: 8rpx;
  
  text {
    color: #fff;
    font-size: 28rpx;
  }
}

.input-box {
  flex: 1;
  background: #fff;
  border-radius: 8rpx;
  padding: 14rpx 20rpx;
}

.input-wrapper {
  width: 100%;
  position: relative;
}

.chat-editor {
  width: 100%;
  min-height: 36rpx;
  max-height: 300rpx;
  font-size: 28rpx;
  line-height: 1.4;
  overflow-y: auto;
  
  :deep(.ql-editor) {
    height: auto !important;
    min-height: 36rpx !important;
    max-height: 300rpx !important;
    padding: 0 !important;
    overflow-y: auto;
  }
}

.editor-placeholder {
  color: #999;
  font-size: 28rpx;
}

.voice-input {
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 8rpx;
  
  text {
    font-size: 28rpx;
    color: #333;
  }
}

.plus-panel {
  padding: 30rpx;
  background: #fff;
}

.plus-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30rpx;
}

.plus-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120rpx;
  
  .plus-icon {
    width: 100rpx;
    height: 100rpx;
    background: #f5f5f5;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48rpx;
  }
  
  .plus-label {
    margin-top: 12rpx;
    font-size: 24rpx;
    color: #666;
  }
}
</style>
