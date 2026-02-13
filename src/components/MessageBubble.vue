<template>
  <view class="message-bubble" :class="[message.sender, message.type]">
    <!-- 文本消息 -->
    <view v-if="message.type === 'text'" class="text-content">
      <template v-for="part in parsedContent" :key="part.content">
        <text v-if="part.type === 'text'">{{ part.content }}</text>
        <image 
          v-else-if="part.type === 'emoji'" 
          :src="getEmojiSrc(part.code!)"
          class="emoji-inline"
          mode="aspectFit"
        />
      </template>
    </view>
    
    <!-- 图片消息 -->
    <view v-else-if="message.type === 'image'" class="image-content" @click="onImageClick">
      <image :src="message.mediaUrl" mode="widthFix" class="message-image" />
    </view>
    
    <!-- 视频消息 -->
    <view v-else-if="message.type === 'video'" class="video-content">
      <video 
        :src="message.mediaUrl" 
        :poster="message.mediaThumbnail"
        class="message-video"
        controls
      />
    </view>
    
    <!-- 语音消息 -->
    <view v-else-if="message.type === 'voice'" class="voice-content" @click="onVoiceClick">
      <image src="" class="voice-icon" :class="{ playing: isPlaying }" />
      <text class="voice-duration">{{ message.voiceDuration }}''</text>
    </view>
    
    <!-- 卡片消息 -->
    <view v-else-if="message.type === 'card'" class="card-content">
      <view class="card-title">
        <text class="name">{{ message.card?.title }}</text>
        <text class="status" :class="message.card?.statusType">{{ message.card?.status }}</text>
      </view>
      <view class="card-body">
        <view v-if="message.card?.days" class="card-row">
          <text class="label">时长：</text>
          <text>{{ message.card.days }}</text>
        </view>
        <view v-if="message.card?.range" class="card-row">
          <text class="label">时间：</text>
          <text>{{ message.card.range }}</text>
        </view>
      </view>
      <view v-if="message.card?.actionText" class="card-footer">
        <button class="card-btn" @click="onCardAction">{{ message.card.actionText }}</button>
      </view>
    </view>
    
    <!-- 发送状态 -->
    <view v-if="message.sender === 'self' && message.status" class="message-status">
      <text v-if="message.status === 'sending'" class="status-sending">发送中...</text>
      <text v-else-if="message.status === 'failed'" class="status-failed" @click="onRetry">发送失败</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ChatMessage } from '../types'
import { parseEmojiText, getEmojiUrl } from '../utils/emoji'

interface Props {
  message: ChatMessage
  emojiBasePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  emojiBasePath: '/static/emoji'
})

const emit = defineEmits<{
  (e: 'imageClick', message: ChatMessage): void
  (e: 'voiceClick', message: ChatMessage): void
  (e: 'cardAction', message: ChatMessage): void
  (e: 'retry', message: ChatMessage): void
}>()

const isPlaying = ref(false)

const parsedContent = computed(() => {
  if (props.message.type !== 'text') return []
  return parseEmojiText(props.message.content)
})

const getEmojiSrc = (code: string) => {
  return getEmojiUrl(code, props.emojiBasePath)
}

const onImageClick = () => {
  emit('imageClick', props.message)
}

const onVoiceClick = () => {
  emit('voiceClick', props.message)
}

const onCardAction = () => {
  emit('cardAction', props.message)
}

const onRetry = () => {
  emit('retry', props.message)
}
</script>

<style lang="scss" scoped>
.message-bubble {
  max-width: 70%;
  padding: 16rpx 24rpx;
  border-radius: 16rpx;
  word-break: break-all;
  
  &.self {
    background: #95ec69;
    margin-left: auto;
  }
  
  &.other {
    background: #fff;
  }
}

.text-content {
  font-size: 28rpx;
  line-height: 1.5;
  
  .emoji-inline {
    width: 40rpx;
    height: 40rpx;
    vertical-align: middle;
    display: inline-block;
  }
}

.image-content {
  .message-image {
    max-width: 400rpx;
    border-radius: 8rpx;
  }
}

.video-content {
  .message-video {
    max-width: 400rpx;
    border-radius: 8rpx;
  }
}

.voice-content {
  display: flex;
  align-items: center;
  gap: 8rpx;
  min-width: 120rpx;
  
  .voice-icon {
    width: 32rpx;
    height: 32rpx;
  }
  
  .voice-duration {
    font-size: 24rpx;
    color: #666;
  }
}

.card-content {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  min-width: 400rpx;
  
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16rpx;
    
    .name {
      font-size: 28rpx;
      font-weight: 500;
    }
    
    .status {
      font-size: 24rpx;
      padding: 4rpx 12rpx;
      border-radius: 4rpx;
      
      &.pending { background: #fff3e0; color: #ff9800; }
      &.approved { background: #e8f5e9; color: #4caf50; }
      &.rejected { background: #ffebee; color: #f44336; }
    }
  }
  
  .card-body {
    .card-row {
      font-size: 24rpx;
      color: #666;
      margin-bottom: 8rpx;
      
      .label {
        color: #999;
      }
    }
  }
  
  .card-footer {
    margin-top: 16rpx;
    padding-top: 16rpx;
    border-top: 1rpx solid #f0f0f0;
    
    .card-btn {
      font-size: 24rpx;
      color: #1890ff;
      background: none;
      padding: 0;
      
      &::after {
        border: none;
      }
    }
  }
}

.message-status {
  margin-top: 8rpx;
  font-size: 20rpx;
  text-align: right;
  
  .status-sending {
    color: #999;
  }
  
  .status-failed {
    color: #f44336;
  }
}
</style>
