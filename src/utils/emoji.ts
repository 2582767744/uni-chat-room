import type { EmojiCategory } from '../types'

// 完整的 204 个表情中文名映射
export const emojiNameMap: Record<string, string> = {
  // 笑脸 (80个)
  '1f600': '微笑', '1f601': '嘻嘻', '1f602': '笑哭', '1f603': '开心',
  '1f604': '大笑', '1f605': '苦笑', '1f606': '斜眼笑', '1f609': '眨眼',
  '1f60a': '害羞', '1f60b': '馋', '1f60c': '得意', '1f60d': '花痴',
  '1f60e': '墨镜', '1f60f': '坏笑', '1f610': '无语', '1f612': '不屑',
  '1f613': '汗', '1f614': '沉思', '1f616': '纠结', '1f618': '飞吻',
  '1f61a': '亲亲', '1f61c': '吐舌', '1f61d': '鬼脸', '1f61e': '失望',
  '1f620': '生气', '1f621': '愤怒', '1f622': '流泪', '1f623': '痛苦',
  '1f624': '怒火', '1f625': '委屈', '1f628': '害怕', '1f629': '疲惫',
  '1f62a': '困', '1f62b': '累', '1f62d': '大哭', '1f62e': '惊讶',
  '1f62f': '目瞪口呆', '1f630': '冷汗', '1f631': '尖叫', '1f632': '震惊',
  '1f633': '脸红', '1f634': '睡觉', '1f635': '晕', '1f636': '沉默',
  '1f637': '口罩', '1f641': '微微不满', '1f642': '呵呵', '1f643': '倒脸',
  '1f644': '翻白眼', '1f910': '闭嘴', '1f911': '发财', '1f912': '生病',
  '1f913': '书呆子', '1f914': '思考', '1f915': '受伤', '1f917': '拥抱',
  '1f920': '牛仔', '1f921': '小丑', '1f922': '恶心', '1f923': '笑翻',
  '1f924': '流口水', '1f925': '说谎', '1f927': '打喷嚏', '1f928': '挑眉',
  '1f929': '星星眼', '1f92a': '疯狂', '1f92b': '嘘', '1f92c': '骂人',
  '1f92d': '捂嘴笑', '1f92e': '呕吐', '1f92f': '爆炸头', '1f970': '喜欢',
  '1f971': '哈欠', '1f972': '含泪微笑', '1f973': '派对', '1f974': '醉了',
  '1f975': '热', '1f976': '冷', '1f979': '感动', '1f97a': '可怜',
  // 手势 (26个)
  '1f44d': '赞', '1f44e': '踩', '1f44a': '拳头', '270a': '握拳',
  '1f91b': '左拳', '1f91c': '右拳', '1f44f': '鼓掌', '1f64c': '举手',
  '1f450': '双手', '1f91d': '握手', '1f64f': '祈祷', '270c': '耶',
  '1f91e': '交叉手指', '1f91f': '爱你', '1f918': '摇滚', '1f44c': 'OK',
  '1f448': '向左', '1f449': '向右', '1f446': '向上', '1f447': '向下',
  '261d': '食指', '270b': '手掌', '1f91a': '手背', '1f590': '张开手',
  '1f44b': '挥手', '1f4aa': '加油',
  // 爱心 (15个)
  '2764': '爱心', '1f495': '两颗心', '1f496': '闪亮的心', '1f497': '心跳',
  '1f498': '丘比特', '1f499': '蓝心', '1f49a': '绿心', '1f49b': '黄心',
  '1f49c': '紫心', '1f5a4': '黑心', '1f90d': '白心', '1f90e': '棕心',
  '1f494': '心碎', '2763': '心叹号', '1f48b': '亲吻',
  // 符号 (20个)
  '1f525': '火', '2b50': '星星', '1f31f': '闪星', '2728': '闪光',
  '1f4a5': '爆炸', '1f4af': '100分', '1f389': '庆祝', '1f38a': '彩带',
  '1f381': '礼物', '1f3c6': '奖杯', '1f4a1': '灯泡', '1f4a4': '睡眠',
  '1f4ac': '对话', '1f4ad': '想法', '1f440': '眼睛', '1f4f7': '相机',
  '1f3b5': '音符', '1f3b6': '音乐', '1f4e2': '喇叭', '1f514': '铃铛',
  // 动物 (15个)
  '1f436': '狗', '1f431': '猫', '1f42d': '老鼠', '1f430': '兔子',
  '1f43b': '熊', '1f43c': '熊猫', '1f428': '考拉', '1f42f': '老虎',
  '1f981': '狮子', '1f437': '猪', '1f438': '青蛙', '1f412': '猴子',
  '1f414': '鸡', '1f427': '企鹅', '1f426': '鸟',
  // 食物 (15个)
  '1f34e': '苹果', '1f34a': '橘子', '1f34b': '柠檬', '1f34c': '香蕉',
  '1f349': '西瓜', '1f353': '草莓', '1f370': '蛋糕', '1f382': '生日蛋糕',
  '1f354': '汉堡', '1f355': '披萨', '1f35c': '面条', '1f35e': '面包',
  '1f37a': '啤酒', '1f377': '红酒', '2615': '咖啡',
  // 自然 (15个)
  '2600': '太阳', '1f324': '晴间多云', '26c5': '多云', '1f327': '下雨',
  '26c8': '雷阵雨', '1f308': '彩虹', '1f319': '月亮', '1f31e': '太阳脸',
  '1f33b': '向日葵', '1f337': '郁金香', '1f339': '玫瑰', '1f33a': '木槿',
  '1f340': '四叶草', '1f332': '松树', '1f334': '棕榈树',
  // 物品 (18个)
  '1f697': '汽车', '1f695': '出租车', '1f68c': '公交车', '1f691': '救护车',
  '1f692': '消防车', '2708': '飞机', '1f680': '火箭', '1f6b2': '自行车',
  '1f4f1': '手机', '1f4bb': '电脑', '1f4fa': '电视', '1f4f0': '报纸',
  '1f4d6': '书', '270f': '铅笔', '1f4dd': '备忘录', '1f4b0': '钱袋',
  '1f4b5': '美元', '1f48e': '钻石',
}

// 反向映射：中文名 -> 码点
const nameToCodeMap: Record<string, string> = {}
Object.entries(emojiNameMap).forEach(([code, name]) => {
  nameToCodeMap[name] = code
})

// 默认表情分类
export const defaultEmojiCategories: EmojiCategory[] = [
  {
    name: '笑脸',
    emojis: [
      '1f600', '1f601', '1f602', '1f603', '1f604', '1f605', '1f606', '1f609',
      '1f60a', '1f60b', '1f60c', '1f60d', '1f60e', '1f60f', '1f610', '1f612',
      '1f613', '1f614', '1f616', '1f618', '1f61a', '1f61c', '1f61d', '1f61e',
      '1f620', '1f621', '1f622', '1f623', '1f624', '1f625', '1f628', '1f629',
      '1f62a', '1f62b', '1f62d', '1f62e', '1f62f', '1f630', '1f631', '1f632',
      '1f633', '1f634', '1f635', '1f636', '1f637', '1f641', '1f642', '1f643',
      '1f644', '1f910', '1f911', '1f912', '1f913', '1f914', '1f915', '1f917',
      '1f920', '1f921', '1f922', '1f923', '1f924', '1f925', '1f927', '1f928',
      '1f929', '1f92a', '1f92b', '1f92c', '1f92d', '1f92e', '1f92f', '1f970',
      '1f971', '1f972', '1f973', '1f974', '1f975', '1f976', '1f979', '1f97a',
    ].map(code => ({ code, name: emojiNameMap[code] }))
  },
  {
    name: '手势',
    emojis: [
      '1f44d', '1f44e', '1f44a', '270a', '1f91b', '1f91c', '1f44f', '1f64c',
      '1f450', '1f91d', '1f64f', '270c', '1f91e', '1f91f', '1f918', '1f44c',
      '1f448', '1f449', '1f446', '1f447', '261d', '270b', '1f91a', '1f590',
      '1f44b', '1f4aa',
    ].map(code => ({ code, name: emojiNameMap[code] }))
  },
  {
    name: '爱心',
    emojis: [
      '2764', '1f495', '1f496', '1f497', '1f498', '1f499', '1f49a', '1f49b',
      '1f49c', '1f5a4', '1f90d', '1f90e', '1f494', '2763', '1f48b',
    ].map(code => ({ code, name: emojiNameMap[code] }))
  },
  {
    name: '符号',
    emojis: [
      '1f525', '2b50', '1f31f', '2728', '1f4a5', '1f4af', '1f389', '1f38a',
      '1f381', '1f3c6', '1f4a1', '1f4a4', '1f4ac', '1f4ad', '1f440', '1f4f7',
      '1f3b5', '1f3b6', '1f4e2', '1f514',
    ].map(code => ({ code, name: emojiNameMap[code] }))
  },
]

// 获取表情图片路径
export function getEmojiUrl(code: string, basePath = '/static/emoji'): string {
  return `${basePath}/${code}.png`
}

// 获取表情名称
export function getEmojiName(code: string): string {
  return emojiNameMap[code] || code
}

// 获取表情码点
export function getEmojiCode(name: string): string | undefined {
  return nameToCodeMap[name]
}

// 将文本中的 [表情名] 解析为结构化数据
export function parseEmojiText(text: string): { type: 'text' | 'emoji'; content: string; code?: string }[] {
  const result: { type: 'text' | 'emoji'; content: string; code?: string }[] = []
  const regex = /\[([^\]]+)\]/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }
    
    const emojiName = match[1]
    const code = nameToCodeMap[emojiName]
    
    if (code) {
      result.push({ type: 'emoji', content: emojiName, code })
    } else {
      result.push({ type: 'text', content: match[0] })
    }
    
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    result.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return result
}

// 将 HTML 内容转换为纯文本（表情图片转为 [表情名]）
export function htmlToText(html: string): string {
  const div = document.createElement('div')
  div.innerHTML = html
  
  const walk = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || ''
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      if (el.tagName === 'IMG') {
        return el.getAttribute('alt') || ''
      }
      if (el.tagName === 'BR') {
        return '\n'
      }
      return Array.from(el.childNodes).map(walk).join('')
    }
    return ''
  }
  
  return walk(div).trim()
}
