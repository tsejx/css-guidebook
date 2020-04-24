import { ApplyPluginsType } from '/Users/mrsingsing/mrsingsing/CSS-GuideBook/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"CSS Guidebook - 构建 CSS 知识体系","meta":{"order":10}},{"path":"/index.html","title":"CSS Guidebook - 构建 CSS 知识体系","meta":{"order":10}}],"/concept":[{"title":"概念","path":"/concept/basement","meta":{"order":1},"children":[{"path":"/concept/basement/selector","title":"选择符","meta":{"order":1}},{"path":"/concept/basement/specificity","title":"优先级","meta":{"order":2}},{"path":"/concept/basement/values-and-units","title":"取值与单位","meta":{"order":3}},{"path":"/concept/basement/structure","title":"结构","meta":{"order":4}}]},{"title":"属性","path":"/concept/properties","meta":{"order":2},"children":[{"path":"/concept/properties/location","title":"定位","meta":{"order":1}},{"path":"/concept/properties/box","title":"盒子","meta":{"order":2}},{"path":"/concept/properties/decoration","title":"修饰","meta":{"order":3}},{"path":"/concept/properties/content","title":"内容","meta":{"order":4}},{"path":"/concept/properties/background","title":"背景","meta":{"order":5}},{"path":"/concept/properties/transform","title":"变形","meta":{"order":6}},{"path":"/concept/properties/animation","title":"动画","meta":{"order":7}},{"path":"/concept/properties/transition","title":"过渡","meta":{"order":8}},{"path":"/concept/properties/hack","title":"HACK","meta":{"order":10}}]},{"title":"规则","path":"/concept/rules","meta":{"order":3},"children":[{"path":"/concept/rules/font-face","title":"@font-face","meta":{"order":1}},{"path":"/concept/rules/import","title":"@import","meta":{"order":2}},{"path":"/concept/rules/keyframes","title":"@keyframes","meta":{"order":3}},{"path":"/concept/rules/media","title":"@media","meta":{"order":4}}]}],"/engineering":[{"title":"预编译","path":"/engineering/precompilation","meta":{"order":2},"children":[{"path":"/engineering/precompilation/less","title":"Less","meta":{"order":1}},{"path":"/engineering/precompilation/sass","title":"Sass","meta":{"order":2}}]}],"/layout":[{"path":"/layout/box-model","title":"盒模型","meta":{"order":1}},{"path":"/layout/bfc","title":"BFC","meta":{"order":2}},{"title":"基础布局","path":"/layout/base","meta":{"order":5},"children":[{"path":"/layout/base/inline-block","title":"内联块级布局","meta":{"order":1}},{"path":"/layout/base/clear-float","title":"清除浮动","meta":{"order":5}},{"path":"/layout/base/flex-box","title":"弹性布局","meta":{"order":6}}]},{"title":"居中布局","path":"/layout/centered","meta":{"order":6},"children":[{"path":"/layout/centered/center-horizontally","title":"水平居中","meta":{"order":10}},{"path":"/layout/centered/center-vertically","title":"垂直居中","meta":{"order":11}},{"path":"/layout/centered/center-both-vertically-and-horizontally","title":"水平垂直居中","meta":{"order":12}}]},{"title":"多栏布局","path":"/layout/multi-columns","meta":{"order":7},"children":[{"path":"/layout/multi-columns/double-columns-layout","title":"双栏布局","meta":{"order":13}},{"path":"/layout/multi-columns/three-columns-layout","title":"三栏布局","meta":{"order":14}},{"path":"/layout/multi-columns/multi-columns-layout","title":"多栏布局","meta":{"order":15}}]},{"title":"网格布局","path":"/layout/grid","meta":{"order":8},"children":[{"path":"/layout/grid/grid","title":"网格布局","meta":{"order":1}},{"path":"/layout/grid/explicit","title":"显式网格属性","meta":{"order":2}},{"path":"/layout/grid/implicit","title":"隐式网格属性","meta":{"order":3}},{"path":"/layout/grid/terminology","title":"网格布局术语","meta":{"order":4}},{"path":"/layout/grid/application","title":"网格布局应用","meta":{"order":5}}]},{"path":"/layout/responsive-layout","title":"响应式设计和布局","meta":{"order":20}}]}},"locales":[],"navs":{"*":[{"title":"基础","order":1,"path":"/concept"},{"title":"布局","order":2,"path":"/layout"},{"title":"工程化","order":3,"path":"/engineering"},{"title":"Github","path":"https://github.com/tsejx/css-guidebook"}]},"title":"CSS Guidebook","logo":"./favicon.svg","desc":"CSS 完全知识体系","mode":"site","repoUrl":"https://github.com/tsejx/css-guidebook"},
      ...props,
    }),
    "routes": [
      {
        "path": "/index.html",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
          "title": "CSS Guidebook - 构建 CSS 知识体系",
          "order": 10,
          "hero": {
            "title": "CSS Guidebook",
            "desc": "<div class=\"markdown\"><p>构建 CSS 完全知识图谱</p></div>",
            "actions": [
              {
                "text": "立即开始",
                "link": "/concept/basement/selector"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "高性能",
              "desc": "<div class=\"markdown\"><p>有强大的 Umi 做底座，天生高性能、可扩展，且可使用 Umi 生态中的大部分插件</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "为组件开发而生",
              "desc": "<div class=\"markdown\"><p>独特的 Markdown 扩展，可嵌入 Demo、可导入外部 Demo 甚至插入自定义 React 组件，使得组件的文档不仅能看，还好用</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by tsejx</p></div>",
          "slugs": []
        },
        "title": "CSS Guidebook - 构建 CSS 知识体系"
      },
      {
        "path": "/",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
          "title": "CSS Guidebook - 构建 CSS 知识体系",
          "order": 10,
          "hero": {
            "title": "CSS Guidebook",
            "desc": "<div class=\"markdown\"><p>构建 CSS 完全知识图谱</p></div>",
            "actions": [
              {
                "text": "立即开始",
                "link": "/concept/basement/selector"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "高性能",
              "desc": "<div class=\"markdown\"><p>有强大的 Umi 做底座，天生高性能、可扩展，且可使用 Umi 生态中的大部分插件</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "为组件开发而生",
              "desc": "<div class=\"markdown\"><p>独特的 Markdown 扩展，可嵌入 Demo、可导入外部 Demo 甚至插入自定义 React 组件，使得组件的文档不仅能看，还好用</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by tsejx</p></div>",
          "slugs": []
        },
        "title": "CSS Guidebook - 构建 CSS 知识体系"
      },
      {
        "path": "/concept/basement/selector",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/basement/selector.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/basement/selector.md",
          "updatedTime": null,
          "title": "选择符",
          "order": 1,
          "group": {
            "title": "概念",
            "order": 1,
            "path": "/concept/basement"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "选择符",
              "heading": "选择符"
            },
            {
              "depth": 2,
              "value": "元素选择符",
              "heading": "元素选择符"
            },
            {
              "depth": 2,
              "value": "关系选择符",
              "heading": "关系选择符"
            },
            {
              "depth": 2,
              "value": "属性选择符",
              "heading": "属性选择符"
            },
            {
              "depth": 2,
              "value": "伪类选择符",
              "heading": "伪类选择符"
            },
            {
              "depth": 2,
              "value": "伪元素选择符",
              "heading": "伪元素选择符"
            }
          ]
        },
        "title": "选择符"
      },
      {
        "path": "/concept/basement/specificity",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/basement/specificity.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/basement/specificity.md",
          "updatedTime": null,
          "title": "优先级",
          "order": 2,
          "group": {
            "title": "概念",
            "order": 1,
            "path": "/concept/basement"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "优先级",
              "heading": "优先级"
            },
            {
              "depth": 2,
              "value": "计算方式",
              "heading": "计算方式"
            },
            {
              "depth": 2,
              "value": "优先级顺序",
              "heading": "优先级顺序"
            },
            {
              "depth": 2,
              "value": "权重值比较规则",
              "heading": "权重值比较规则"
            },
            {
              "depth": 2,
              "value": "!important",
              "heading": "important"
            }
          ]
        },
        "title": "优先级"
      },
      {
        "path": "/concept/basement/structure",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/basement/structure.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/basement/structure.md",
          "updatedTime": null,
          "title": "结构",
          "order": 4,
          "group": {
            "title": "概念",
            "order": 1,
            "path": "/concept/basement"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "结构",
              "heading": "结构"
            }
          ]
        },
        "title": "结构"
      },
      {
        "path": "/concept/basement/values-and-units",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/basement/values-and-units.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/basement/values-and-units.md",
          "updatedTime": null,
          "title": "取值与单位",
          "order": 3,
          "group": {
            "title": "概念",
            "order": 1,
            "path": "/concept/basement"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "取值与单位",
              "heading": "取值与单位"
            },
            {
              "depth": 2,
              "value": "长度",
              "heading": "长度"
            },
            {
              "depth": 3,
              "value": "相对长度单位",
              "heading": "相对长度单位"
            },
            {
              "depth": 4,
              "value": "文本相对长度单位",
              "heading": "文本相对长度单位"
            },
            {
              "depth": 4,
              "value": "视口相对长度单位",
              "heading": "视口相对长度单位"
            },
            {
              "depth": 3,
              "value": "绝对长度单位",
              "heading": "绝对长度单位"
            },
            {
              "depth": 2,
              "value": "角度",
              "heading": "角度"
            },
            {
              "depth": 2,
              "value": "时间",
              "heading": "时间"
            },
            {
              "depth": 2,
              "value": "颜色",
              "heading": "颜色"
            },
            {
              "depth": 2,
              "value": "文本",
              "heading": "文本"
            },
            {
              "depth": 2,
              "value": "图像",
              "heading": "图像"
            },
            {
              "depth": 2,
              "value": "数字",
              "heading": "数字"
            }
          ]
        },
        "title": "取值与单位"
      },
      {
        "path": "/concept/properties/animation",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/animation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/animation.md",
          "updatedTime": null,
          "title": "动画",
          "order": 7,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "动画",
              "heading": "动画"
            }
          ]
        },
        "title": "动画"
      },
      {
        "path": "/concept/properties/background",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/background.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/background.md",
          "updatedTime": null,
          "title": "背景",
          "order": 5,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "背景",
              "heading": "背景"
            },
            {
              "depth": 2,
              "value": "背景颜色",
              "heading": "背景颜色"
            },
            {
              "depth": 2,
              "value": "雪碧图",
              "heading": "雪碧图"
            },
            {
              "depth": 2,
              "value": "base64",
              "heading": "base64"
            }
          ]
        },
        "title": "背景"
      },
      {
        "path": "/concept/properties/box",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/box.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/box.md",
          "updatedTime": null,
          "title": "盒子",
          "order": 2,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "盒子",
              "heading": "盒子"
            },
            {
              "depth": 2,
              "value": "display",
              "heading": "display"
            },
            {
              "depth": 2,
              "value": "width/height",
              "heading": "widthheight"
            },
            {
              "depth": 3,
              "value": "外部尺寸与流体特性",
              "heading": "外部尺寸与流体特性"
            },
            {
              "depth": 4,
              "value": "正常流宽度",
              "heading": "正常流宽度"
            },
            {
              "depth": 4,
              "value": "格式化宽度",
              "heading": "格式化宽度"
            },
            {
              "depth": 3,
              "value": "内部尺寸与流体特性",
              "heading": "内部尺寸与流体特性"
            },
            {
              "depth": 4,
              "value": "包裹性",
              "heading": "包裹性"
            },
            {
              "depth": 4,
              "value": "首选最小宽度",
              "heading": "首选最小宽度"
            },
            {
              "depth": 2,
              "value": "border",
              "heading": "border"
            },
            {
              "depth": 3,
              "value": "画三角形",
              "heading": "画三角形"
            }
          ]
        },
        "title": "盒子"
      },
      {
        "path": "/concept/properties/content",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/content.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/content.md",
          "updatedTime": null,
          "title": "内容",
          "order": 4,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "内容",
              "heading": "内容"
            },
            {
              "depth": 2,
              "value": "字体族",
              "heading": "字体族"
            },
            {
              "depth": 2,
              "value": "多字体反馈机制",
              "heading": "多字体反馈机制"
            },
            {
              "depth": 2,
              "value": "自定义字体",
              "heading": "自定义字体"
            },
            {
              "depth": 1,
              "value": "Text",
              "heading": "text"
            },
            {
              "depth": 1,
              "value": "LineHeight",
              "heading": "lineheight"
            },
            {
              "depth": 2,
              "value": "构成",
              "heading": "构成"
            },
            {
              "depth": 2,
              "value": "现象",
              "heading": "现象"
            },
            {
              "depth": 2,
              "value": "图片间隙问题",
              "heading": "图片间隙问题"
            }
          ]
        },
        "title": "内容"
      },
      {
        "path": "/concept/properties/decoration",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/decoration.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/decoration.md",
          "updatedTime": null,
          "title": "修饰",
          "order": 3,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "修饰",
              "heading": "修饰"
            },
            {
              "depth": 1,
              "value": "BoxShadow",
              "heading": "boxshadow"
            }
          ]
        },
        "title": "修饰"
      },
      {
        "path": "/concept/properties/hack",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/hack.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/hack.md",
          "updatedTime": null,
          "title": "HACK",
          "order": 10,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Hack",
              "heading": "hack"
            },
            {
              "depth": 2,
              "value": "默认标签边距",
              "heading": "默认标签边距"
            },
            {
              "depth": 2,
              "value": "双边距问题",
              "heading": "双边距问题"
            },
            {
              "depth": 2,
              "value": "小高度标签",
              "heading": "小高度标签"
            },
            {
              "depth": 2,
              "value": "获取自定义属性",
              "heading": "获取自定义属性"
            },
            {
              "depth": 2,
              "value": "12 像素文本限制",
              "heading": "12-像素文本限制"
            },
            {
              "depth": 2,
              "value": "超链接样式",
              "heading": "超链接样式"
            },
            {
              "depth": 2,
              "value": "事件对象",
              "heading": "事件对象"
            },
            {
              "depth": 2,
              "value": "PNG 图片兼容性",
              "heading": "png-图片兼容性"
            },
            {
              "depth": 2,
              "value": "IE6 BUG",
              "heading": "ie6-bug"
            },
            {
              "depth": 2,
              "value": "为什么要初始化 CSS 样式",
              "heading": "为什么要初始化-css-样式"
            }
          ]
        },
        "title": "HACK"
      },
      {
        "path": "/concept/properties/location",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/location.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/location.md",
          "updatedTime": null,
          "title": "定位",
          "order": 1,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "定位",
              "heading": "定位"
            },
            {
              "depth": 2,
              "value": "position",
              "heading": "position"
            }
          ]
        },
        "title": "定位"
      },
      {
        "path": "/concept/properties/transform",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/transform.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/transform.md",
          "updatedTime": null,
          "title": "变形",
          "order": 6,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "变形",
              "heading": "变形"
            }
          ]
        },
        "title": "变形"
      },
      {
        "path": "/concept/properties/transition",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/properties/transition.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/properties/transition.md",
          "updatedTime": null,
          "title": "过渡",
          "order": 8,
          "group": {
            "title": "属性",
            "order": 2,
            "path": "/concept/properties"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "过渡",
              "heading": "过渡"
            }
          ]
        },
        "title": "过渡"
      },
      {
        "path": "/concept/rules/font-face",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/rules/font-face.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/rules/font-face.md",
          "updatedTime": null,
          "title": "@font-face",
          "order": 1,
          "group": {
            "title": "规则",
            "order": 3,
            "path": "/concept/rules"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "@font-face",
              "heading": "font-face"
            },
            {
              "depth": 2,
              "value": "语法",
              "heading": "语法"
            },
            {
              "depth": 2,
              "value": "取值",
              "heading": "取值"
            },
            {
              "depth": 2,
              "value": "字体分类",
              "heading": "字体分类"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            }
          ]
        },
        "title": "@font-face"
      },
      {
        "path": "/concept/rules/import",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/rules/import.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/rules/import.md",
          "updatedTime": null,
          "title": "@import",
          "order": 2,
          "group": {
            "title": "规则",
            "order": 3,
            "path": "/concept/rules"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "@import",
              "heading": "import"
            },
            {
              "depth": 2,
              "value": "语法",
              "heading": "语法"
            }
          ]
        },
        "title": "@import"
      },
      {
        "path": "/concept/rules/keyframes",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/rules/keyframes.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/rules/keyframes.md",
          "updatedTime": null,
          "title": "@keyframes",
          "order": 3,
          "group": {
            "title": "规则",
            "order": 3,
            "path": "/concept/rules"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "@keyframes",
              "heading": "keyframes"
            }
          ]
        },
        "title": "@keyframes"
      },
      {
        "path": "/concept/rules/media",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/concept/rules/media.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/concept/rules/media.md",
          "updatedTime": null,
          "title": "@media",
          "order": 4,
          "group": {
            "title": "规则",
            "order": 3,
            "path": "/concept/rules"
          },
          "nav": {
            "title": "基础",
            "order": 1,
            "path": "/concept"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "@media",
              "heading": "media"
            },
            {
              "depth": 2,
              "value": "规范",
              "heading": "规范"
            },
            {
              "depth": 3,
              "value": "Media Queries Level 2",
              "heading": "media-queries-level-2"
            },
            {
              "depth": 3,
              "value": "Media Queries Level 3",
              "heading": "media-queries-level-3"
            },
            {
              "depth": 3,
              "value": "Media Queries Level 4",
              "heading": "media-queries-level-4"
            },
            {
              "depth": 2,
              "value": "使用形式",
              "heading": "使用形式"
            },
            {
              "depth": 3,
              "value": "基本语法",
              "heading": "基本语法"
            },
            {
              "depth": 3,
              "value": "嵌套",
              "heading": "嵌套"
            },
            {
              "depth": 3,
              "value": "否定式查询",
              "heading": "否定式查询"
            },
            {
              "depth": 2,
              "value": "媒体特征",
              "heading": "媒体特征"
            },
            {
              "depth": 3,
              "value": "根据媒体特性的范围查询",
              "heading": "根据媒体特性的范围查询"
            },
            {
              "depth": 3,
              "value": "选项式的媒体特性查询",
              "heading": "选项式的媒体特性查询"
            },
            {
              "depth": 2,
              "value": "其他适配",
              "heading": "其他适配"
            },
            {
              "depth": 3,
              "value": "针对高分屏的媒体查询",
              "heading": "针对高分屏的媒体查询"
            },
            {
              "depth": 3,
              "value": "引入外部文件时的媒体查询",
              "heading": "引入外部文件时的媒体查询"
            },
            {
              "depth": 3,
              "value": "在 style 标签上的媒体查询",
              "heading": "在-style-标签上的媒体查询"
            },
            {
              "depth": 3,
              "value": "利用媒体查询实现图片自适应",
              "heading": "利用媒体查询实现图片自适应"
            },
            {
              "depth": 3,
              "value": "扩展阅读：用 srcset 和 sizes 实现更好的图片自适应",
              "heading": "扩展阅读：用-srcset-和-sizes-实现更好的图片自适应"
            },
            {
              "depth": 3,
              "value": "扩展阅读：用 image-set() 设置响应式的背景图片",
              "heading": "扩展阅读：用-image-set-设置响应式的背景图片"
            },
            {
              "depth": 3,
              "value": "在 Javascript 中使用媒体查询",
              "heading": "在-javascript-中使用媒体查询"
            },
            {
              "depth": 3,
              "value": "在常见框架中的应用",
              "heading": "在常见框架中的应用"
            },
            {
              "depth": 3,
              "value": "在 Chrome DevTools 中模拟不同尺寸设备",
              "heading": "在-chrome-devtools-中模拟不同尺寸设备"
            },
            {
              "depth": 2,
              "value": "设备自适应相关参数",
              "heading": "设备自适应相关参数"
            }
          ]
        },
        "title": "@media"
      },
      {
        "path": "/engineering/precompilation/less",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/engineering/precompilation/less.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/engineering/precompilation/less.md",
          "updatedTime": null,
          "title": "Less",
          "order": 1,
          "group": {
            "title": "预编译",
            "order": 2,
            "path": "/engineering/precompilation"
          },
          "nav": {
            "title": "工程化",
            "order": 3,
            "path": "/engineering"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Less",
              "heading": "less"
            },
            {
              "depth": 2,
              "value": "变量",
              "heading": "变量"
            },
            {
              "depth": 2,
              "value": "混合",
              "heading": "混合"
            },
            {
              "depth": 2,
              "value": "嵌套",
              "heading": "嵌套"
            },
            {
              "depth": 2,
              "value": "函数",
              "heading": "函数"
            },
            {
              "depth": 2,
              "value": "作用域",
              "heading": "作用域"
            }
          ]
        },
        "title": "Less"
      },
      {
        "path": "/engineering/precompilation/sass",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/engineering/precompilation/sass.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/engineering/precompilation/sass.md",
          "updatedTime": null,
          "title": "Sass",
          "order": 2,
          "group": {
            "title": "预编译",
            "order": 2,
            "path": "/engineering/precompilation"
          },
          "nav": {
            "title": "工程化",
            "order": 3,
            "path": "/engineering"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Sass",
              "heading": "sass"
            },
            {
              "depth": 2,
              "value": "功能拓展",
              "heading": "功能拓展"
            },
            {
              "depth": 3,
              "value": "嵌套规则",
              "heading": "嵌套规则"
            },
            {
              "depth": 3,
              "value": "父选择器 &",
              "heading": "父选择器-"
            },
            {
              "depth": 3,
              "value": "属性嵌套",
              "heading": "属性嵌套"
            },
            {
              "depth": 2,
              "value": "SassScript",
              "heading": "sassscript"
            },
            {
              "depth": 2,
              "value": "变量 $",
              "heading": "变量-"
            },
            {
              "depth": 3,
              "value": "数据类型",
              "heading": "数据类型"
            },
            {
              "depth": 3,
              "value": "插值语句",
              "heading": "插值语句"
            },
            {
              "depth": 2,
              "value": "@-Rules 与指令",
              "heading": "-rules-与指令"
            },
            {
              "depth": 3,
              "value": "@import",
              "heading": "import"
            },
            {
              "depth": 3,
              "value": "@media",
              "heading": "media"
            },
            {
              "depth": 3,
              "value": "@extend",
              "heading": "extend"
            },
            {
              "depth": 4,
              "value": "延伸复杂的选择器",
              "heading": "延伸复杂的选择器"
            },
            {
              "depth": 4,
              "value": "多重延伸",
              "heading": "多重延伸"
            },
            {
              "depth": 4,
              "value": "继续延伸",
              "heading": "继续延伸"
            },
            {
              "depth": 2,
              "value": "混合指令",
              "heading": "混合指令"
            },
            {
              "depth": 3,
              "value": "定义混合指令 @mixin",
              "heading": "定义混合指令-mixin"
            },
            {
              "depth": 3,
              "value": "引用混合指令 @include",
              "heading": "引用混合指令-include"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 2,
              "value": "函数指令",
              "heading": "函数指令"
            }
          ]
        },
        "title": "Sass"
      },
      {
        "path": "/layout/bfc",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/bfc.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/bfc.md",
          "updatedTime": null,
          "title": "BFC",
          "order": 2,
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "BFC",
              "heading": "bfc"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 2,
              "value": "实现方法",
              "heading": "实现方法"
            },
            {
              "depth": 2,
              "value": "使用场景",
              "heading": "使用场景"
            },
            {
              "depth": 3,
              "value": "解决边距重叠问题",
              "heading": "解决边距重叠问题"
            },
            {
              "depth": 3,
              "value": "清除浮动",
              "heading": "清除浮动"
            },
            {
              "depth": 3,
              "value": "侵占浮动元素的位置",
              "heading": "侵占浮动元素的位置"
            },
            {
              "depth": 3,
              "value": "避免文字环绕",
              "heading": "避免文字环绕"
            },
            {
              "depth": 3,
              "value": "多列布局设定",
              "heading": "多列布局设定"
            }
          ]
        },
        "title": "BFC"
      },
      {
        "path": "/layout/box-model",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/box-model.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/box-model.md",
          "updatedTime": null,
          "title": "盒模型",
          "order": 1,
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "盒模型",
              "heading": "盒模型"
            },
            {
              "depth": 2,
              "value": "相关术语阐述",
              "heading": "相关术语阐述"
            },
            {
              "depth": 3,
              "value": "包含块",
              "heading": "包含块"
            },
            {
              "depth": 3,
              "value": "正常流",
              "heading": "正常流"
            },
            {
              "depth": 2,
              "value": "盒模型分类",
              "heading": "盒模型分类"
            },
            {
              "depth": 3,
              "value": "标准盒模型",
              "heading": "标准盒模型"
            },
            {
              "depth": 3,
              "value": "怪异盒模型",
              "heading": "怪异盒模型"
            },
            {
              "depth": 2,
              "value": "box-sizing",
              "heading": "box-sizing"
            },
            {
              "depth": 3,
              "value": "content-box",
              "heading": "content-box"
            },
            {
              "depth": 3,
              "value": "border-box",
              "heading": "border-box"
            },
            {
              "depth": 2,
              "value": "获取盒模型宽高",
              "heading": "获取盒模型宽高"
            }
          ]
        },
        "title": "盒模型"
      },
      {
        "path": "/layout/responsive-layout",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/responsive-layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/responsive-layout.md",
          "updatedTime": null,
          "title": "响应式设计和布局",
          "order": 20,
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "响应式设计和布局",
              "heading": "响应式设计和布局"
            },
            {
              "depth": 2,
              "value": "viewport",
              "heading": "viewport"
            },
            {
              "depth": 2,
              "value": "媒体查询",
              "heading": "媒体查询"
            },
            {
              "depth": 2,
              "value": "rem",
              "heading": "rem"
            }
          ]
        },
        "title": "响应式设计和布局"
      },
      {
        "path": "/layout/base/clear-float",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/base/clear-float.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/base/clear-float.md",
          "updatedTime": null,
          "title": "清除浮动",
          "order": 5,
          "group": {
            "title": "基础布局",
            "order": 5,
            "path": "/layout/base"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "清除浮动",
              "heading": "清除浮动"
            },
            {
              "depth": 2,
              "value": "1.父级 div 定义 height",
              "heading": "1父级-div-定义-height"
            },
            {
              "depth": 2,
              "value": "2.结尾处加空 div 标签 clear:both ",
              "heading": "2结尾处加空-div-标签-clearboth"
            },
            {
              "depth": 2,
              "value": "3.父级 div 定义 伪类:after 和 zoom ",
              "heading": "3父级-div-定义-伪类after-和-zoom"
            },
            {
              "depth": 2,
              "value": "4.父级 div 定义 overflow:hidden ",
              "heading": "4父级-div-定义-overflowhidden"
            },
            {
              "depth": 2,
              "value": "5.父级 div 定义 overflow:auto ",
              "heading": "5父级-div-定义-overflowauto"
            },
            {
              "depth": 2,
              "value": "6.父级 div 也一起浮动  ",
              "heading": "6父级-div-也一起浮动"
            },
            {
              "depth": 2,
              "value": "7.父级 div 定义 display:table ",
              "heading": "7父级-div-定义-displaytable"
            },
            {
              "depth": 2,
              "value": "8.结尾处加 br 标签 clear:both ",
              "heading": "8结尾处加-br-标签-clearboth"
            }
          ]
        },
        "title": "清除浮动"
      },
      {
        "path": "/layout/base/flex-box",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/base/flex-box.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/base/flex-box.md",
          "updatedTime": null,
          "title": "弹性布局",
          "order": 6,
          "group": {
            "title": "基础布局",
            "order": 5,
            "path": "/layout/base"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "弹性布局",
              "heading": "弹性布局"
            },
            {
              "depth": 2,
              "value": "弹性盒子的轴",
              "heading": "弹性盒子的轴"
            },
            {
              "depth": 2,
              "value": "容器属性",
              "heading": "容器属性"
            },
            {
              "depth": 3,
              "value": "flex-direction",
              "heading": "flex-direction"
            },
            {
              "depth": 3,
              "value": "flex-wrap",
              "heading": "flex-wrap"
            },
            {
              "depth": 4,
              "value": "### flex-flow",
              "heading": "-flex-flow"
            },
            {
              "depth": 3,
              "value": "justify-content",
              "heading": "justify-content"
            },
            {
              "depth": 3,
              "value": "align-items",
              "heading": "align-items"
            },
            {
              "depth": 3,
              "value": "align-content",
              "heading": "align-content"
            },
            {
              "depth": 2,
              "value": "子容器属性",
              "heading": "子容器属性"
            },
            {
              "depth": 3,
              "value": "order",
              "heading": "order"
            },
            {
              "depth": 3,
              "value": "flex-grow",
              "heading": "flex-grow"
            },
            {
              "depth": 3,
              "value": "flex-shrink",
              "heading": "flex-shrink"
            },
            {
              "depth": 3,
              "value": "flex-basis",
              "heading": "flex-basis"
            },
            {
              "depth": 3,
              "value": "flex",
              "heading": "flex"
            },
            {
              "depth": 3,
              "value": "align-self",
              "heading": "align-self"
            },
            {
              "depth": 2,
              "value": "兼容性",
              "heading": "兼容性"
            },
            {
              "depth": 2,
              "value": "总结",
              "heading": "总结"
            },
            {
              "depth": 3,
              "value": "定义容器为弹性布局",
              "heading": "定义容器为弹性布局"
            },
            {
              "depth": 3,
              "value": "容器样式",
              "heading": "容器样式"
            },
            {
              "depth": 3,
              "value": "子元素样式",
              "heading": "子元素样式"
            }
          ]
        },
        "title": "弹性布局"
      },
      {
        "path": "/layout/base/inline-block",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/base/inline-block.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/base/inline-block.md",
          "updatedTime": null,
          "title": "内联块级布局",
          "order": 1,
          "group": {
            "title": "基础布局",
            "order": 5,
            "path": "/layout/base"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "内联块级布局",
              "heading": "内联块级布局"
            },
            {
              "depth": 2,
              "value": "处理间隙",
              "heading": "处理间隙"
            }
          ]
        },
        "title": "内联块级布局"
      },
      {
        "path": "/layout/centered/center-both-vertically-and-horizontally",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/centered/center-both-vertically-and-horizontally.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/centered/center-both-vertically-and-horizontally.md",
          "updatedTime": null,
          "title": "水平垂直居中",
          "order": 12,
          "group": {
            "title": "居中布局",
            "order": 6,
            "path": "/layout/centered"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "水平垂直居中",
              "heading": "水平垂直居中"
            },
            {
              "depth": 2,
              "value": "固定宽高元素",
              "heading": "固定宽高元素"
            },
            {
              "depth": 2,
              "value": "未知宽高元素",
              "heading": "未知宽高元素"
            },
            {
              "depth": 2,
              "value": "弹性布局",
              "heading": "弹性布局"
            },
            {
              "depth": 2,
              "value": "网格布局",
              "heading": "网格布局"
            },
            {
              "depth": 2,
              "value": "可视窗口水平垂直居中",
              "heading": "可视窗口水平垂直居中"
            }
          ]
        },
        "title": "水平垂直居中"
      },
      {
        "path": "/layout/centered/center-horizontally",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/centered/center-horizontally.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/centered/center-horizontally.md",
          "updatedTime": null,
          "title": "水平居中",
          "order": 10,
          "group": {
            "title": "居中布局",
            "order": 6,
            "path": "/layout/centered"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "水平居中",
              "heading": "水平居中"
            },
            {
              "depth": 2,
              "value": "内联元素",
              "heading": "内联元素"
            },
            {
              "depth": 2,
              "value": "块级元素",
              "heading": "块级元素"
            },
            {
              "depth": 2,
              "value": "多块级元素",
              "heading": "多块级元素"
            },
            {
              "depth": 3,
              "value": "inline-block",
              "heading": "inline-block"
            },
            {
              "depth": 3,
              "value": "flexbox",
              "heading": "flexbox"
            },
            {
              "depth": 3,
              "value": "absolute - transform",
              "heading": "absolute---transform"
            },
            {
              "depth": 3,
              "value": "absolute - margin",
              "heading": "absolute---margin"
            },
            {
              "depth": 3,
              "value": "absolute - direction",
              "heading": "absolute---direction"
            }
          ]
        },
        "title": "水平居中"
      },
      {
        "path": "/layout/centered/center-vertically",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/centered/center-vertically.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/centered/center-vertically.md",
          "updatedTime": null,
          "title": "垂直居中",
          "order": 11,
          "group": {
            "title": "居中布局",
            "order": 6,
            "path": "/layout/centered"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "垂直居中",
              "heading": "垂直居中"
            },
            {
              "depth": 2,
              "value": "单行内联元素",
              "heading": "单行内联元素"
            },
            {
              "depth": 2,
              "value": "多行元素",
              "heading": "多行元素"
            },
            {
              "depth": 3,
              "value": "表格布局",
              "heading": "表格布局"
            },
            {
              "depth": 3,
              "value": "弹性布局",
              "heading": "弹性布局"
            },
            {
              "depth": 3,
              "value": "精灵元素",
              "heading": "精灵元素"
            },
            {
              "depth": 2,
              "value": "块级元素",
              "heading": "块级元素"
            },
            {
              "depth": 3,
              "value": "固定高度的块级元素",
              "heading": "固定高度的块级元素"
            },
            {
              "depth": 4,
              "value": "有滚动条",
              "heading": "有滚动条"
            },
            {
              "depth": 4,
              "value": "无滚动条",
              "heading": "无滚动条"
            },
            {
              "depth": 3,
              "value": "未知高度的块级元素",
              "heading": "未知高度的块级元素"
            },
            {
              "depth": 2,
              "value": "图片垂直居中",
              "heading": "图片垂直居中"
            }
          ]
        },
        "title": "垂直居中"
      },
      {
        "path": "/layout/grid/application",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/grid/application.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/grid/application.md",
          "updatedTime": null,
          "title": "网格布局应用",
          "order": 5,
          "group": {
            "title": "网格布局",
            "order": 8,
            "path": "/layout/grid"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "网格布局应用",
              "heading": "网格布局应用"
            }
          ]
        },
        "title": "网格布局应用"
      },
      {
        "path": "/layout/grid/explicit",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/grid/explicit.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/grid/explicit.md",
          "updatedTime": null,
          "title": "显式网格属性",
          "order": 2,
          "group": {
            "title": "网格布局",
            "order": 8,
            "path": "/layout/grid"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "显式网格属性",
              "heading": "显式网格属性"
            },
            {
              "depth": 2,
              "value": "网格容器",
              "heading": "网格容器"
            },
            {
              "depth": 2,
              "value": "网格模版",
              "heading": "网格模版"
            },
            {
              "depth": 3,
              "value": "网格轨道",
              "heading": "网格轨道"
            },
            {
              "depth": 3,
              "value": "网格轨道最值尺寸",
              "heading": "网格轨道最值尺寸"
            },
            {
              "depth": 3,
              "value": "重复的网格轨道",
              "heading": "重复的网格轨道"
            },
            {
              "depth": 2,
              "value": "网格线",
              "heading": "网格线"
            },
            {
              "depth": 3,
              "value": "网格项目跨越行列",
              "heading": "网格项目跨越行列"
            },
            {
              "depth": 3,
              "value": "网格线命名",
              "heading": "网格线命名"
            },
            {
              "depth": 3,
              "value": "网格线名定位项目",
              "heading": "网格线名定位项目"
            },
            {
              "depth": 3,
              "value": "同名网格线命名和定位项目",
              "heading": "同名网格线命名和定位项目"
            },
            {
              "depth": 3,
              "value": "网格线区域命名和定位项目",
              "heading": "网格线区域命名和定位项目"
            },
            {
              "depth": 2,
              "value": "网格间隙",
              "heading": "网格间隙"
            }
          ]
        },
        "title": "显式网格属性"
      },
      {
        "path": "/layout/grid/grid",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/grid/grid.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/grid/grid.md",
          "updatedTime": null,
          "title": "网格布局",
          "order": 1,
          "group": {
            "title": "网格布局",
            "order": 8,
            "path": "/layout/grid"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "网格布局",
              "heading": "网格布局"
            },
            {
              "depth": 2,
              "value": "参照系",
              "heading": "参照系"
            },
            {
              "depth": 2,
              "value": "指导",
              "heading": "指导"
            },
            {
              "depth": 2,
              "value": "相关资料",
              "heading": "相关资料"
            }
          ]
        },
        "title": "网格布局"
      },
      {
        "path": "/layout/grid/implicit",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/grid/implicit.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/grid/implicit.md",
          "updatedTime": null,
          "title": "隐式网格属性",
          "order": 3,
          "group": {
            "title": "网格布局",
            "order": 8,
            "path": "/layout/grid"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "隐式网格属性",
              "heading": "隐式网格属性"
            },
            {
              "depth": 2,
              "value": "隐式网格",
              "heading": "隐式网格"
            },
            {
              "depth": 2,
              "value": "隐式命名的网格区域",
              "heading": "隐式命名的网格区域"
            },
            {
              "depth": 2,
              "value": "隐式命名网格线",
              "heading": "隐式命名网格线"
            },
            {
              "depth": 2,
              "value": "层叠网格项目",
              "heading": "层叠网格项目"
            },
            {
              "depth": 2,
              "value": "网格项目的对齐方式",
              "heading": "网格项目的对齐方式"
            },
            {
              "depth": 2,
              "value": "网格轨道的对齐方式",
              "heading": "网格轨道的对齐方式"
            }
          ]
        },
        "title": "隐式网格属性"
      },
      {
        "path": "/layout/grid/terminology",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/grid/terminology.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/grid/terminology.md",
          "updatedTime": null,
          "title": "网格布局术语",
          "order": 4,
          "group": {
            "title": "网格布局",
            "order": 8,
            "path": "/layout/grid"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "网格布局术语",
              "heading": "网格布局术语"
            },
            {
              "depth": 2,
              "value": "网格容器 Grid Container",
              "heading": "网格容器-grid-container"
            },
            {
              "depth": 2,
              "value": "网格项 Grid Item",
              "heading": "网格项-grid-item"
            },
            {
              "depth": 2,
              "value": "网格线 Grid Line",
              "heading": "网格线-grid-line"
            },
            {
              "depth": 2,
              "value": "网格轨道 Grid Tracks",
              "heading": "网格轨道-grid-tracks"
            },
            {
              "depth": 2,
              "value": "网格单元格 Grid Cell",
              "heading": "网格单元格-grid-cell"
            },
            {
              "depth": 2,
              "value": "网格区域 Grid Areas",
              "heading": "网格区域-grid-areas"
            },
            {
              "depth": 2,
              "value": "排水沟 Gutter",
              "heading": "排水沟-gutter"
            }
          ]
        },
        "title": "网格布局术语"
      },
      {
        "path": "/layout/multi-columns/double-columns-layout",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/multi-columns/double-columns-layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/multi-columns/double-columns-layout.md",
          "updatedTime": null,
          "title": "双栏布局",
          "order": 13,
          "group": {
            "title": "多栏布局",
            "order": 7,
            "path": "/layout/multi-columns"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "双栏布局",
              "heading": "双栏布局"
            },
            {
              "depth": 2,
              "value": "左固定右适应",
              "heading": "左固定右适应"
            },
            {
              "depth": 3,
              "value": "float + margin",
              "heading": "float--margin"
            },
            {
              "depth": 3,
              "value": "float + margin(fix)",
              "heading": "float--marginfix"
            },
            {
              "depth": 3,
              "value": "float + overflow",
              "heading": "float--overflow"
            },
            {
              "depth": 3,
              "value": "table",
              "heading": "table"
            },
            {
              "depth": 3,
              "value": "position",
              "heading": "position"
            },
            {
              "depth": 3,
              "value": "flex",
              "heading": "flex"
            },
            {
              "depth": 3,
              "value": "grid",
              "heading": "grid"
            },
            {
              "depth": 2,
              "value": "左适应右固定",
              "heading": "左适应右固定"
            },
            {
              "depth": 3,
              "value": "float + margin",
              "heading": "float--margin-1"
            },
            {
              "depth": 3,
              "value": "float + overflow",
              "heading": "float--overflow-1"
            },
            {
              "depth": 3,
              "value": "table",
              "heading": "table-1"
            },
            {
              "depth": 3,
              "value": "flex",
              "heading": "flex-1"
            },
            {
              "depth": 3,
              "value": "grid",
              "heading": "grid-1"
            }
          ]
        },
        "title": "双栏布局"
      },
      {
        "path": "/layout/multi-columns/multi-columns-layout",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/multi-columns/multi-columns-layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/multi-columns/multi-columns-layout.md",
          "updatedTime": null,
          "title": "多栏布局",
          "order": 15,
          "group": {
            "title": "多栏布局",
            "order": 7,
            "path": "/layout/multi-columns"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "多栏布局",
              "heading": "多栏布局"
            }
          ]
        },
        "title": "多栏布局"
      },
      {
        "path": "/layout/multi-columns/three-columns-layout",
        "component": require('/Users/mrsingsing/mrsingsing/CSS-GuideBook/docs/layout/multi-columns/three-columns-layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/layout/multi-columns/three-columns-layout.md",
          "updatedTime": null,
          "title": "三栏布局",
          "order": 14,
          "group": {
            "title": "多栏布局",
            "order": 7,
            "path": "/layout/multi-columns"
          },
          "nav": {
            "title": "布局",
            "order": 2,
            "path": "/layout"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "三栏布局",
              "heading": "三栏布局"
            },
            {
              "depth": 2,
              "value": "实现方式",
              "heading": "实现方式"
            },
            {
              "depth": 3,
              "value": "浮动布局",
              "heading": "浮动布局"
            },
            {
              "depth": 3,
              "value": "绝对定位",
              "heading": "绝对定位"
            },
            {
              "depth": 3,
              "value": "弹性布局",
              "heading": "弹性布局"
            },
            {
              "depth": 3,
              "value": "表格布局",
              "heading": "表格布局"
            },
            {
              "depth": 3,
              "value": "网格布局",
              "heading": "网格布局"
            },
            {
              "depth": 2,
              "value": "圣杯布局",
              "heading": "圣杯布局"
            },
            {
              "depth": 3,
              "value": "浮动布局",
              "heading": "浮动布局-1"
            },
            {
              "depth": 3,
              "value": "弹性布局",
              "heading": "弹性布局-1"
            },
            {
              "depth": 3,
              "value": "网格布局",
              "heading": "网格布局-1"
            },
            {
              "depth": 2,
              "value": "双飞翼布局",
              "heading": "双飞翼布局"
            }
          ]
        },
        "title": "三栏布局"
      },
      {
        "path": "/concept/basement",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/concept/basement/selector"
      },
      {
        "path": "/concept",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/concept/basement"
      },
      {
        "path": "/concept/properties",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/concept/properties/location"
      },
      {
        "path": "/concept/rules",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/concept/rules/font-face"
      },
      {
        "path": "/engineering/precompilation",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/engineering/precompilation/less"
      },
      {
        "path": "/engineering",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/engineering/precompilation/less"
      },
      {
        "path": "/layout",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/layout/base/inline-block"
      },
      {
        "path": "/layout/base",
        "meta": {
          "order": 5
        },
        "exact": true,
        "redirect": "/layout/base/inline-block"
      },
      {
        "path": "/layout/centered",
        "meta": {
          "order": 6
        },
        "exact": true,
        "redirect": "/layout/centered/center-horizontally"
      },
      {
        "path": "/layout/grid",
        "meta": {
          "order": 8
        },
        "exact": true,
        "redirect": "/layout/grid/grid"
      },
      {
        "path": "/layout/multi-columns",
        "meta": {
          "order": 7
        },
        "exact": true,
        "redirect": "/layout/multi-columns/double-columns-layout"
      }
    ],
    "title": "CSS Guidebook"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
