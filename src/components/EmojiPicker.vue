<template>
  <view class="emoji-picker">
    <!-- 分类 Tab -->
    <scroll-view class="category-tabs" scroll-x>
      <view 
        v-for="(cat, index) in emojiCategories" 
        :key="index"
        class="tab-item"
        :class="{ active: activeCategory === index }"
        @click="activeCategory = index"
      >
        <image 
          v-if="cat.emojis[0] && !failedImages.has(cat.emojis[0].code)"
          :src="getEmojiSrc(cat.emojis[0].code)" 
          class="tab-icon"
          @error="() => onImageError(cat.emojis[0].code)"
        />
        <text v-else class="tab-fallback">{{ cat.name.charAt(0) }}</text>
      </view>
    </scroll-view>
    
    <!-- 表情网格 -->
    <scroll-view class="emoji-grid-wrapper" scroll-y>
      <view class="emoji-grid" :style="{ '--columns': columns }">
        <view 
          v-for="emoji in currentEmojis" 
          :key="emoji.code"
          class="emoji-item"
          @click="onSelect(emoji)"
        >
          <image 
            v-if="!failedImages.has(emoji.code)"
            :src="getEmojiSrc(emoji.code)" 
            class="emoji-img" 
            mode="aspectFit"
            @error="() => onImageError(emoji.code)"
          />
          <text v-else class="emoji-fallback">{{ emoji.name }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'
import type { EmojiItem, EmojiPickerProps, EmojiPickerEmits } from '../types'
import { defaultEmojiCategories, getEmojiUrl } from '../utils/emoji'

const props = withDefaults(defineProps<EmojiPickerProps>(), {
  categories: () => defaultEmojiCategories,
  basePath: '/static/emoji',
  columns: 8
})

const emit = defineEmits<EmojiPickerEmits>()

const { categories, basePath, columns } = toRefs(props)

const emojiCategories = computed(() => categories.value || defaultEmojiCategories)
const activeCategory = ref(0)
const failedImages = ref(new Set<string>())

const currentEmojis = computed(() => {
  return emojiCategories.value[activeCategory.value]?.emojis || []
})

const getEmojiSrc = (code: string) => {
  return getEmojiUrl(code, basePath.value)
}

const onSelect = (emoji: EmojiItem) => {
  emit('select', emoji)
}

const onImageError = (code: string) => {
  failedImages.value = new Set([...failedImages.value, code])
}
</script>

<style lang="scss" scoped>
.emoji-picker {
  background: #fff;
  border-top: 1rpx solid #e5e5e5;
}

.category-tabs {
  display: flex;
  padding: 16rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
  white-space: nowrap;
  
  .tab-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80rpx;
    height: 60rpx;
    
    &.active {
      background: #f0f0f0;
      border-radius: 8rpx;
    }
  }
  
  .tab-icon {
    width: 40rpx;
    height: 40rpx;
  }
  
  .tab-fallback {
    font-size: 24rpx;
    color: #666;
  }
}

.emoji-grid-wrapper {
  height: 400rpx;
}

.emoji-grid {
  display: flex;
  flex-wrap: wrap;
  padding: 16rpx;
}

.emoji-item {
  width: calc(100% / var(--columns, 8));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rpx 0;
  
  &:active {
    background: #f0f0f0;
    border-radius: 8rpx;
  }
}

.emoji-img {
  width: 48rpx;
  height: 48rpx;
}

.emoji-fallback {
  font-size: 24rpx;
  color: #999;
}
</style>
