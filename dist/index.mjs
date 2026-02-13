import { defineComponent as z, toRefs as me, computed as F, ref as k, resolveComponent as L, openBlock as t, createElementBlock as s, createVNode as V, withCtx as O, Fragment as A, renderList as U, normalizeClass as M, toDisplayString as p, createElementVNode as o, normalizeStyle as ge, unref as ve, createCommentVNode as d, watch as he, onMounted as ye, withDirectives as be, vShow as ke, createBlock as pe, renderSlot as we, nextTick as X } from "vue";
const N = {
  // 笑脸 (80个)
  "1f600": "微笑",
  "1f601": "嘻嘻",
  "1f602": "笑哭",
  "1f603": "开心",
  "1f604": "大笑",
  "1f605": "苦笑",
  "1f606": "斜眼笑",
  "1f609": "眨眼",
  "1f60a": "害羞",
  "1f60b": "馋",
  "1f60c": "得意",
  "1f60d": "花痴",
  "1f60e": "墨镜",
  "1f60f": "坏笑",
  "1f610": "无语",
  "1f612": "不屑",
  "1f613": "汗",
  "1f614": "沉思",
  "1f616": "纠结",
  "1f618": "飞吻",
  "1f61a": "亲亲",
  "1f61c": "吐舌",
  "1f61d": "鬼脸",
  "1f61e": "失望",
  "1f620": "生气",
  "1f621": "愤怒",
  "1f622": "流泪",
  "1f623": "痛苦",
  "1f624": "怒火",
  "1f625": "委屈",
  "1f628": "害怕",
  "1f629": "疲惫",
  "1f62a": "困",
  "1f62b": "累",
  "1f62d": "大哭",
  "1f62e": "惊讶",
  "1f62f": "目瞪口呆",
  "1f630": "冷汗",
  "1f631": "尖叫",
  "1f632": "震惊",
  "1f633": "脸红",
  "1f634": "睡觉",
  "1f635": "晕",
  "1f636": "沉默",
  "1f637": "口罩",
  "1f641": "微微不满",
  "1f642": "呵呵",
  "1f643": "倒脸",
  "1f644": "翻白眼",
  "1f910": "闭嘴",
  "1f911": "发财",
  "1f912": "生病",
  "1f913": "书呆子",
  "1f914": "思考",
  "1f915": "受伤",
  "1f917": "拥抱",
  "1f920": "牛仔",
  "1f921": "小丑",
  "1f922": "恶心",
  "1f923": "笑翻",
  "1f924": "流口水",
  "1f925": "说谎",
  "1f927": "打喷嚏",
  "1f928": "挑眉",
  "1f929": "星星眼",
  "1f92a": "疯狂",
  "1f92b": "嘘",
  "1f92c": "骂人",
  "1f92d": "捂嘴笑",
  "1f92e": "呕吐",
  "1f92f": "爆炸头",
  "1f970": "喜欢",
  "1f971": "哈欠",
  "1f972": "含泪微笑",
  "1f973": "派对",
  "1f974": "醉了",
  "1f975": "热",
  "1f976": "冷",
  "1f979": "感动",
  "1f97a": "可怜",
  // 手势 (26个)
  "1f44d": "赞",
  "1f44e": "踩",
  "1f44a": "拳头",
  "270a": "握拳",
  "1f91b": "左拳",
  "1f91c": "右拳",
  "1f44f": "鼓掌",
  "1f64c": "举手",
  "1f450": "双手",
  "1f91d": "握手",
  "1f64f": "祈祷",
  "270c": "耶",
  "1f91e": "交叉手指",
  "1f91f": "爱你",
  "1f918": "摇滚",
  "1f44c": "OK",
  "1f448": "向左",
  "1f449": "向右",
  "1f446": "向上",
  "1f447": "向下",
  "261d": "食指",
  "270b": "手掌",
  "1f91a": "手背",
  "1f590": "张开手",
  "1f44b": "挥手",
  "1f4aa": "加油",
  // 爱心 (15个)
  2764: "爱心",
  "1f495": "两颗心",
  "1f496": "闪亮的心",
  "1f497": "心跳",
  "1f498": "丘比特",
  "1f499": "蓝心",
  "1f49a": "绿心",
  "1f49b": "黄心",
  "1f49c": "紫心",
  "1f5a4": "黑心",
  "1f90d": "白心",
  "1f90e": "棕心",
  "1f494": "心碎",
  2763: "心叹号",
  "1f48b": "亲吻",
  // 符号 (20个)
  "1f525": "火",
  "2b50": "星星",
  "1f31f": "闪星",
  2728: "闪光",
  "1f4a5": "爆炸",
  "1f4af": "100分",
  "1f389": "庆祝",
  "1f38a": "彩带",
  "1f381": "礼物",
  "1f3c6": "奖杯",
  "1f4a1": "灯泡",
  "1f4a4": "睡眠",
  "1f4ac": "对话",
  "1f4ad": "想法",
  "1f440": "眼睛",
  "1f4f7": "相机",
  "1f3b5": "音符",
  "1f3b6": "音乐",
  "1f4e2": "喇叭",
  "1f514": "铃铛",
  // 动物 (15个)
  "1f436": "狗",
  "1f431": "猫",
  "1f42d": "老鼠",
  "1f430": "兔子",
  "1f43b": "熊",
  "1f43c": "熊猫",
  "1f428": "考拉",
  "1f42f": "老虎",
  "1f981": "狮子",
  "1f437": "猪",
  "1f438": "青蛙",
  "1f412": "猴子",
  "1f414": "鸡",
  "1f427": "企鹅",
  "1f426": "鸟",
  // 食物 (15个)
  "1f34e": "苹果",
  "1f34a": "橘子",
  "1f34b": "柠檬",
  "1f34c": "香蕉",
  "1f349": "西瓜",
  "1f353": "草莓",
  "1f370": "蛋糕",
  "1f382": "生日蛋糕",
  "1f354": "汉堡",
  "1f355": "披萨",
  "1f35c": "面条",
  "1f35e": "面包",
  "1f37a": "啤酒",
  "1f377": "红酒",
  2615: "咖啡",
  // 自然 (15个)
  2600: "太阳",
  "1f324": "晴间多云",
  "26c5": "多云",
  "1f327": "下雨",
  "26c8": "雷阵雨",
  "1f308": "彩虹",
  "1f319": "月亮",
  "1f31e": "太阳脸",
  "1f33b": "向日葵",
  "1f337": "郁金香",
  "1f339": "玫瑰",
  "1f33a": "木槿",
  "1f340": "四叶草",
  "1f332": "松树",
  "1f334": "棕榈树",
  // 物品 (18个)
  "1f697": "汽车",
  "1f695": "出租车",
  "1f68c": "公交车",
  "1f691": "救护车",
  "1f692": "消防车",
  2708: "飞机",
  "1f680": "火箭",
  "1f6b2": "自行车",
  "1f4f1": "手机",
  "1f4bb": "电脑",
  "1f4fa": "电视",
  "1f4f0": "报纸",
  "1f4d6": "书",
  "270f": "铅笔",
  "1f4dd": "备忘录",
  "1f4b0": "钱袋",
  "1f4b5": "美元",
  "1f48e": "钻石"
}, G = {};
Object.entries(N).forEach(([e, f]) => {
  G[f] = e;
});
const H = [
  {
    name: "笑脸",
    emojis: [
      "1f600",
      "1f601",
      "1f602",
      "1f603",
      "1f604",
      "1f605",
      "1f606",
      "1f609",
      "1f60a",
      "1f60b",
      "1f60c",
      "1f60d",
      "1f60e",
      "1f60f",
      "1f610",
      "1f612",
      "1f613",
      "1f614",
      "1f616",
      "1f618",
      "1f61a",
      "1f61c",
      "1f61d",
      "1f61e",
      "1f620",
      "1f621",
      "1f622",
      "1f623",
      "1f624",
      "1f625",
      "1f628",
      "1f629",
      "1f62a",
      "1f62b",
      "1f62d",
      "1f62e",
      "1f62f",
      "1f630",
      "1f631",
      "1f632",
      "1f633",
      "1f634",
      "1f635",
      "1f636",
      "1f637",
      "1f641",
      "1f642",
      "1f643",
      "1f644",
      "1f910",
      "1f911",
      "1f912",
      "1f913",
      "1f914",
      "1f915",
      "1f917",
      "1f920",
      "1f921",
      "1f922",
      "1f923",
      "1f924",
      "1f925",
      "1f927",
      "1f928",
      "1f929",
      "1f92a",
      "1f92b",
      "1f92c",
      "1f92d",
      "1f92e",
      "1f92f",
      "1f970",
      "1f971",
      "1f972",
      "1f973",
      "1f974",
      "1f975",
      "1f976",
      "1f979",
      "1f97a"
    ].map((e) => ({ code: e, name: N[e] }))
  },
  {
    name: "手势",
    emojis: [
      "1f44d",
      "1f44e",
      "1f44a",
      "270a",
      "1f91b",
      "1f91c",
      "1f44f",
      "1f64c",
      "1f450",
      "1f91d",
      "1f64f",
      "270c",
      "1f91e",
      "1f91f",
      "1f918",
      "1f44c",
      "1f448",
      "1f449",
      "1f446",
      "1f447",
      "261d",
      "270b",
      "1f91a",
      "1f590",
      "1f44b",
      "1f4aa"
    ].map((e) => ({ code: e, name: N[e] }))
  },
  {
    name: "爱心",
    emojis: [
      "2764",
      "1f495",
      "1f496",
      "1f497",
      "1f498",
      "1f499",
      "1f49a",
      "1f49b",
      "1f49c",
      "1f5a4",
      "1f90d",
      "1f90e",
      "1f494",
      "2763",
      "1f48b"
    ].map((e) => ({ code: e, name: N[e] }))
  },
  {
    name: "符号",
    emojis: [
      "1f525",
      "2b50",
      "1f31f",
      "2728",
      "1f4a5",
      "1f4af",
      "1f389",
      "1f38a",
      "1f381",
      "1f3c6",
      "1f4a1",
      "1f4a4",
      "1f4ac",
      "1f4ad",
      "1f440",
      "1f4f7",
      "1f3b5",
      "1f3b6",
      "1f4e2",
      "1f514"
    ].map((e) => ({ code: e, name: N[e] }))
  }
];
function W(e, f = "/static/emoji") {
  return `${f}/${e}.png`;
}
function mt(e) {
  return N[e] || e;
}
function gt(e) {
  return G[e];
}
function xe(e) {
  const f = [], l = /\[([^\]]+)\]/g;
  let n = 0, c;
  for (; (c = l.exec(e)) !== null; ) {
    c.index > n && f.push({ type: "text", content: e.slice(n, c.index) });
    const w = c[1], y = G[w];
    y ? f.push({ type: "emoji", content: w, code: y }) : f.push({ type: "text", content: c[0] }), n = l.lastIndex;
  }
  return n < e.length && f.push({ type: "text", content: e.slice(n) }), f;
}
function D(e) {
  const f = document.createElement("div");
  f.innerHTML = e;
  const l = (n) => {
    if (n.nodeType === Node.TEXT_NODE)
      return n.textContent || "";
    if (n.nodeType === Node.ELEMENT_NODE) {
      const c = n;
      return c.tagName === "IMG" ? c.getAttribute("alt") || "" : c.tagName === "BR" ? `
` : Array.from(c.childNodes).map(l).join("");
    }
    return "";
  };
  return l(f).trim();
}
const Ce = { class: "emoji-picker" }, je = ["onClick"], Ee = ["src", "onError"], $e = {
  key: 1,
  class: "tab-fallback"
}, _e = ["onClick"], Se = ["src", "onError"], Te = {
  key: 1,
  class: "emoji-fallback"
}, Pe = /* @__PURE__ */ z({
  __name: "EmojiPicker",
  props: {
    categories: { default: () => H },
    basePath: { default: "/static/emoji" },
    columns: { default: 8 }
  },
  emits: ["select"],
  setup(e, { emit: f }) {
    const l = e, n = f, { categories: c, basePath: w, columns: y } = me(l), x = F(() => c.value || H), $ = k(0), C = k(/* @__PURE__ */ new Set()), j = F(() => {
      var v;
      return ((v = x.value[$.value]) == null ? void 0 : v.emojis) || [];
    }), m = (v) => W(v, w.value), g = (v) => {
      n("select", v);
    }, T = (v) => {
      C.value = /* @__PURE__ */ new Set([...C.value, v]);
    };
    return (v, R) => {
      const P = L("scroll-view");
      return t(), s("view", Ce, [
        V(P, {
          class: "category-tabs",
          "scroll-x": ""
        }, {
          default: O(() => [
            (t(!0), s(A, null, U(x.value, (r, E) => (t(), s("view", {
              key: E,
              class: M(["tab-item", { active: $.value === E }]),
              onClick: (_) => $.value = E
            }, [
              r.emojis[0] && !C.value.has(r.emojis[0].code) ? (t(), s("image", {
                key: 0,
                src: m(r.emojis[0].code),
                class: "tab-icon",
                onError: () => T(r.emojis[0].code)
              }, null, 40, Ee)) : (t(), s("text", $e, p(r.name.charAt(0)), 1))
            ], 10, je))), 128))
          ]),
          _: 1
        }),
        V(P, {
          class: "emoji-grid-wrapper",
          "scroll-y": ""
        }, {
          default: O(() => [
            o("view", {
              class: "emoji-grid",
              style: ge({ "--columns": ve(y) })
            }, [
              (t(!0), s(A, null, U(j.value, (r) => (t(), s("view", {
                key: r.code,
                class: "emoji-item",
                onClick: (E) => g(r)
              }, [
                C.value.has(r.code) ? (t(), s("text", Te, p(r.name), 1)) : (t(), s("image", {
                  key: 0,
                  src: m(r.code),
                  class: "emoji-img",
                  mode: "aspectFit",
                  onError: () => T(r.code)
                }, null, 40, Se))
              ], 8, _e))), 128))
            ], 4)
          ]),
          _: 1
        })
      ]);
    };
  }
}), K = (e, f) => {
  const l = e.__vccOpts || e;
  for (const [n, c] of f)
    l[n] = c;
  return l;
}, Ie = /* @__PURE__ */ K(Pe, [["__scopeId", "data-v-7a233710"]]), Be = {
  key: 0,
  class: "text-content"
}, Re = { key: 0 }, Ne = ["src"], Ae = ["src"], Ve = {
  key: 2,
  class: "video-content"
}, Me = ["src", "poster"], Fe = { class: "voice-duration" }, Ue = {
  key: 4,
  class: "card-content"
}, qe = { class: "card-title" }, De = { class: "name" }, Le = { class: "card-body" }, Oe = {
  key: 0,
  class: "card-row"
}, He = {
  key: 1,
  class: "card-row"
}, ze = {
  key: 0,
  class: "card-footer"
}, Ge = {
  key: 5,
  class: "message-status"
}, Ke = {
  key: 0,
  class: "status-sending"
}, Qe = /* @__PURE__ */ z({
  __name: "MessageBubble",
  props: {
    message: {},
    emojiBasePath: { default: "/static/emoji" }
  },
  emits: ["imageClick", "voiceClick", "cardAction", "retry"],
  setup(e, { emit: f }) {
    const l = e, n = f, c = k(!1), w = F(() => l.message.type !== "text" ? [] : xe(l.message.content)), y = (m) => W(m, l.emojiBasePath), x = () => {
      n("imageClick", l.message);
    }, $ = () => {
      n("voiceClick", l.message);
    }, C = () => {
      n("cardAction", l.message);
    }, j = () => {
      n("retry", l.message);
    };
    return (m, g) => {
      var T, v, R, P, r, E;
      return t(), s("view", {
        class: M(["message-bubble", [e.message.sender, e.message.type]])
      }, [
        e.message.type === "text" ? (t(), s("view", Be, [
          (t(!0), s(A, null, U(w.value, (_) => (t(), s(A, {
            key: _.content
          }, [
            _.type === "text" ? (t(), s("text", Re, p(_.content), 1)) : _.type === "emoji" ? (t(), s("image", {
              key: 1,
              src: y(_.code),
              class: "emoji-inline",
              mode: "aspectFit"
            }, null, 8, Ne)) : d("", !0)
          ], 64))), 128))
        ])) : e.message.type === "image" ? (t(), s("view", {
          key: 1,
          class: "image-content",
          onClick: x
        }, [
          o("image", {
            src: e.message.mediaUrl,
            mode: "widthFix",
            class: "message-image"
          }, null, 8, Ae)
        ])) : e.message.type === "video" ? (t(), s("view", Ve, [
          o("video", {
            src: e.message.mediaUrl,
            poster: e.message.mediaThumbnail,
            class: "message-video",
            controls: ""
          }, null, 8, Me)
        ])) : e.message.type === "voice" ? (t(), s("view", {
          key: 3,
          class: "voice-content",
          onClick: $
        }, [
          o("image", {
            src: "",
            class: M(["voice-icon", { playing: c.value }])
          }, null, 2),
          o("text", Fe, p(e.message.voiceDuration) + "''", 1)
        ])) : e.message.type === "card" ? (t(), s("view", Ue, [
          o("view", qe, [
            o("text", De, p((T = e.message.card) == null ? void 0 : T.title), 1),
            o("text", {
              class: M(["status", (v = e.message.card) == null ? void 0 : v.statusType])
            }, p((R = e.message.card) == null ? void 0 : R.status), 3)
          ]),
          o("view", Le, [
            (P = e.message.card) != null && P.days ? (t(), s("view", Oe, [
              g[0] || (g[0] = o("text", { class: "label" }, "时长：", -1)),
              o("text", null, p(e.message.card.days), 1)
            ])) : d("", !0),
            (r = e.message.card) != null && r.range ? (t(), s("view", He, [
              g[1] || (g[1] = o("text", { class: "label" }, "时间：", -1)),
              o("text", null, p(e.message.card.range), 1)
            ])) : d("", !0)
          ]),
          (E = e.message.card) != null && E.actionText ? (t(), s("view", ze, [
            o("button", {
              class: "card-btn",
              onClick: C
            }, p(e.message.card.actionText), 1)
          ])) : d("", !0)
        ])) : d("", !0),
        e.message.sender === "self" && e.message.status ? (t(), s("view", Ge, [
          e.message.status === "sending" ? (t(), s("text", Ke, "发送中...")) : e.message.status === "failed" ? (t(), s("text", {
            key: 1,
            class: "status-failed",
            onClick: j
          }, "发送失败")) : d("", !0)
        ])) : d("", !0)
      ], 2);
    };
  }
}), Xe = /* @__PURE__ */ K(Qe, [["__scopeId", "data-v-aaa107c3"]]), Je = { class: "chat-room" }, We = { class: "message-container" }, Ye = {
  key: 0,
  class: "tip-line"
}, Ze = { class: "tip" }, et = ["src"], tt = ["src"], st = { class: "input-area" }, at = { class: "input-container" }, ot = { class: "input-box" }, nt = {
  key: 0,
  class: "input-wrapper"
}, ct = {
  key: 0,
  class: "editor-placeholder"
}, lt = {
  key: 1,
  class: "plus-panel"
}, J = "data:image/svg+xml,...", ft = "data:image/svg+xml,...", it = "data:image/svg+xml,...", rt = "data:image/svg+xml,...", ut = /* @__PURE__ */ z({
  __name: "ChatRoom",
  props: {
    messages: { default: () => [] },
    currentUser: {},
    targetUser: {},
    showEmoji: { type: Boolean, default: !0 },
    showPlus: { type: Boolean, default: !0 },
    enableVoice: { type: Boolean, default: !1 },
    placeholder: { default: "请输入消息..." },
    emojiBasePath: { default: "/static/emoji" },
    maxLines: { default: 10 }
  },
  emits: ["send", "sendImage", "sendVideo", "sendVoice", "messageClick", "messageLongPress", "cardAction", "inputChange", "loadMore"],
  setup(e, { emit: f }) {
    const l = e, n = f, c = `chat-editor-${Date.now()}`, w = k(!1), y = k(null), x = k(""), $ = k(0), C = k(!1), j = k(!1), m = k(!1), g = k(null), T = F(() => H), v = F(() => D(x.value).length > 0), R = () => {
      X(() => {
        $.value = 99999;
      });
    };
    he(() => l.messages.length, () => {
      R();
    }), ye(() => {
      R();
    });
    const P = () => {
      w.value = !0, X(() => {
        const a = document.querySelector(`#${c}`);
        a && (y.value = a);
      }), uni.createSelectorQuery().select(`#${c}`).context((a) => {
        a != null && a.context && (y.value = a.context);
      }).exec();
    }, r = (a) => {
      var i;
      x.value = ((i = a.detail) == null ? void 0 : i.html) || "", n("inputChange", D(x.value));
    }, E = () => {
      j.value = !1, m.value = !1;
    }, _ = () => {
      Q();
    }, Q = () => {
      const a = window.getSelection();
      a && a.rangeCount > 0 && (g.value = a.getRangeAt(0).cloneRange());
    }, Y = () => {
      C.value = !C.value;
    }, Z = () => {
      j.value ? j.value = !1 : (Q(), m.value = !1, j.value = !0);
    }, ee = () => {
      m.value ? m.value = !1 : (j.value = !1, m.value = !0);
    }, te = (a) => {
      se(a.code, a.name);
    }, se = (a, i) => {
      const I = `${l.emojiBasePath}/${a}.png`, B = `[${i}]`;
      try {
        const u = document.querySelector(`#${c} .ql-editor`);
        if (!u) return;
        const b = document.createElement("img");
        if (b.src = I, b.alt = B, b.className = "emoji-inline", b.style.cssText = "width:20px;height:20px;vertical-align:middle;display:inline;", g.value && u.contains(g.value.commonAncestorContainer)) {
          const h = window.getSelection();
          h == null || h.removeAllRanges(), h == null || h.addRange(g.value);
          const S = g.value;
          S.deleteContents(), S.insertNode(b), S.setStartAfter(b), S.collapse(!0), g.value = S.cloneRange();
        } else {
          const h = u.querySelector("p");
          if (h) {
            const S = h.querySelector("br");
            S && h.textContent === "" && S.remove(), h.appendChild(b);
            const q = document.createRange();
            q.setStartAfter(b), q.collapse(!0), g.value = q.cloneRange();
          } else
            u.appendChild(b);
        }
        u.dispatchEvent(new Event("input", { bubbles: !0 }));
      } catch (u) {
        console.error("[ChatRoom] 插入表情失败:", u);
      }
      y.value && y.value.insertImage({
        src: I,
        alt: B,
        width: "20px",
        height: "20px",
        extClass: "emoji-inline"
      });
    }, ae = () => {
      var B;
      const a = x.value, i = D(a);
      if (!i.trim()) return;
      n("send", { type: "text", content: i, html: a }), x.value = "";
      const I = document.querySelector(`#${c} .ql-editor`);
      I && (I.innerHTML = "<p><br></p>"), (B = y.value) != null && B.setContents && y.value.setContents({ html: "" });
    }, oe = () => {
    }, ne = () => {
    }, ce = (a) => {
      n("messageClick", a);
    }, le = (a) => {
      n("messageClick", a);
    }, fe = (a) => {
      n("cardAction", a);
    }, ie = (a) => {
    }, re = () => {
      n("loadMore");
    }, ue = () => {
      uni.chooseImage({
        count: 9,
        success: (a) => {
          a.tempFilePaths.forEach((i) => {
            n("sendImage", { url: i, type: "image" });
          });
        }
      }), m.value = !1;
    }, de = () => {
      uni.chooseImage({
        count: 1,
        sourceType: ["camera"],
        success: (a) => {
          n("sendImage", { url: a.tempFilePaths[0], type: "image" });
        }
      }), m.value = !1;
    };
    return (a, i) => {
      const I = L("scroll-view"), B = L("editor");
      return t(), s("view", Je, [
        V(I, {
          class: "message-list",
          "scroll-y": "",
          "scroll-top": $.value,
          "scroll-with-animation": !0,
          onScrolltoupper: re
        }, {
          default: O(() => [
            o("view", We, [
              (t(!0), s(A, null, U(e.messages, (u) => {
                var b, h;
                return t(), s("view", {
                  key: u.id,
                  class: M(["message-row", u.sender])
                }, [
                  u.type === "tip" ? (t(), s("view", Ye, [
                    o("text", Ze, p(u.content), 1)
                  ])) : (t(), s(A, { key: 1 }, [
                    u.sender === "other" ? (t(), s("image", {
                      key: 0,
                      src: u.avatar || ((b = e.targetUser) == null ? void 0 : b.avatar) || J,
                      class: "avatar"
                    }, null, 8, et)) : d("", !0),
                    V(Xe, {
                      message: u,
                      "emoji-base-path": e.emojiBasePath,
                      onImageClick: ce,
                      onVoiceClick: le,
                      onCardAction: fe,
                      onRetry: ie
                    }, null, 8, ["message", "emoji-base-path"]),
                    u.sender === "self" ? (t(), s("image", {
                      key: 1,
                      src: ((h = e.currentUser) == null ? void 0 : h.avatar) || J,
                      class: "avatar"
                    }, null, 8, tt)) : d("", !0)
                  ], 64))
                ], 2);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["scroll-top"]),
        o("view", st, [
          o("view", at, [
            e.enableVoice ? (t(), s("button", {
              key: 0,
              class: "icon-btn",
              onClick: Y
            }, [
              o("image", {
                class: "btn-icon",
                src: ft
              })
            ])) : d("", !0),
            o("view", ot, [
              C.value ? (t(), s("view", {
                key: 1,
                class: "voice-input",
                onTouchstart: oe,
                onTouchend: ne
              }, [...i[0] || (i[0] = [
                o("text", null, "按住说话", -1)
              ])], 32)) : (t(), s("view", nt, [
                be(V(B, {
                  id: c,
                  class: "chat-editor",
                  placeholder: e.placeholder,
                  onReady: P,
                  onInput: r,
                  onFocus: E,
                  onBlur: _
                }, null, 8, ["placeholder"]), [
                  [ke, w.value]
                ]),
                w.value ? d("", !0) : (t(), s("view", ct, [
                  o("text", null, p(e.placeholder), 1)
                ]))
              ]))
            ]),
            e.showEmoji ? (t(), s("button", {
              key: 1,
              class: "icon-btn",
              onClick: Z
            }, [
              o("image", {
                class: "btn-icon",
                src: it
              })
            ])) : d("", !0),
            v.value ? (t(), s("button", {
              key: 2,
              class: "icon-btn send-btn",
              onClick: ae
            }, [...i[1] || (i[1] = [
              o("text", null, "发送", -1)
            ])])) : e.showPlus ? (t(), s("button", {
              key: 3,
              class: "icon-btn",
              onClick: ee
            }, [
              o("image", {
                class: "btn-icon",
                src: rt
              })
            ])) : d("", !0)
          ]),
          j.value ? (t(), pe(Ie, {
            key: 0,
            categories: T.value,
            "base-path": e.emojiBasePath,
            onSelect: te
          }, null, 8, ["categories", "base-path"])) : d("", !0),
          m.value ? (t(), s("view", lt, [
            we(a.$slots, "plus-panel", {}, () => [
              o("view", { class: "plus-grid" }, [
                o("view", {
                  class: "plus-item",
                  onClick: ue
                }, [...i[2] || (i[2] = [
                  o("view", { class: "plus-icon" }, [
                    o("text", null, "📷")
                  ], -1),
                  o("text", { class: "plus-label" }, "相册", -1)
                ])]),
                o("view", {
                  class: "plus-item",
                  onClick: de
                }, [...i[3] || (i[3] = [
                  o("view", { class: "plus-icon" }, [
                    o("text", null, "📸")
                  ], -1),
                  o("text", { class: "plus-label" }, "拍摄", -1)
                ])])
              ])
            ], !0)
          ])) : d("", !0)
        ])
      ]);
    };
  }
}), vt = /* @__PURE__ */ K(ut, [["__scopeId", "data-v-d3d7d09e"]]);
export {
  vt as ChatRoom,
  Ie as EmojiPicker,
  Xe as MessageBubble,
  H as defaultEmojiCategories,
  N as emojiNameMap,
  gt as getEmojiCode,
  mt as getEmojiName,
  W as getEmojiUrl,
  D as htmlToText,
  xe as parseEmojiText
};
