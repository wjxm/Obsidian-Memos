export default {
  // setting.ts
  welcome: '欢迎使用 Memos ',
  ribbonIconTitle: 'Memos',
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthsShort: [null, null, null, null, null, null, null, null, null, null, null, null],
  weekDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  weekDaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  to: '至',
  year: '年',
  month: '月',
  'Basic Options': '基础选项',
  'User name in Memos': '在 Memos 中显示的用户名',
  "Set your user name here. 'Memos 😏' By default": "在这里设置你喜欢的用户名。 默认为 'Memos 😏'",
  'Insert after heading': '在指定标题后插入 Memo',
  'You should set the same heading below if you want to insert and process memos below the same heading.':
    '你如果想要插入标题的同时显示对应标题下的 Memo，你必须保证当前设置与下方的解析设置是一致的。当为空时插入到文末',
  'Process Memos below': '解析指定标题后的 Memo',
  'Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.':
    '只有在设置的标题后的 Memo 才会被解析。当为空时解析全文的 Memo',
  'Save Memo button label': '保存按钮上的文本',
  "The text shown on the save Memo button in the UI. 'NOTEIT' by default.": "在保存按钮上展示的文本。默认为 'NOTEIT'",
  'Focus on editor when open memos': '自动聚焦到 Memos 输入框',
  'Focus on editor when open memos. Focus by default.': '当打开 Memos 的时候自动聚焦到 Memos 输入框。默认开启',
  'Open daily memos with open memos': '打开每日 Memo 的时候打开 Memos 界面',
  'Open daily memos with open memos. Open by default.': '打开每日 Memo 的时候打开 Memos 界面。默认开启',
  'Open Memos when obsidian opens': '当开启 Obsidian 的时候自动打开 Memos',
  'When enable this, Memos will open when Obsidian opens. False by default.':
    '当开启该选项, Memos 会在 Obsidian 打开时自动打开。默认不开启。',
  'Hide done tasks in Memo list': '在 memo 列表中隐藏已完成 memo',
  'Hide all done tasks in Memo list. Show done tasks by default.': '在 memo 列表中隐藏已完成 memo。默认不开启',
  'Advanced Options': '进阶选项',
  'UI language for date': '针对日期展示的语言界面',
  "Translates the date UI language. Only 'en' and 'zh' are available.":
    "对日期的不同翻译。目前只能选择 'en' 和 'zh'（未来会废置）",
  'Default prefix': '默认前缀',
  "Set the default prefix when create memo, 'List' by default.": '设置默认的前缀样式。默认为列表',
  'Default insert date format': '插入日期附带的样式',
  "Set the default date format when insert date by @, 'Tasks' by default.":
    "当使用 @ 来快速插入日期时，插入日期附带的样式，默认为 'Tasks' 样式",
  'Default editor position on mobile': '在移动端上的默认编辑器位置',
  "Set the default editor position on Mobile, 'Top' by default.": '设置在移动端上的默认编辑器位置，默认在顶部。',
  'Use button to show editor on mobile': '当编辑器位置在底部时，用按钮来唤出编辑器',
  'Set a float button to call editor on mobile. Only when editor located at the bottom works.':
    '设置一个浮动按钮来唤出编辑器。当在移动端上启用该选项才会生效',
  'Show Time When Copy Results': '当复制检索结果时附带时间',
  'Show time when you copy results, like 12:00. Copy time by default.':
    '在复制检索结果时附带其时间，例如 12:00 。默认开启',
  'Show Date When Copy Results': '当复制检索结果时附带日期',
  'Show date when you copy results, like [[2022-01-01]]. Copy date by default.':
    '在复制检索结果时附带其日期，例如 [[2022-01-01]]。默认开启',
  'Add Blank Line Between Different Date': '在复制日期的时候加上空行',
  'Add blank line when copy result with date. No blank line by default.':
    '在复制日期的时候在相邻的日期之间加上空行。默认无空行',
  'Share Options': '分享选项',
  'Share Memos Image Footer Start': '分享 memo 图片的左边页脚',
  "Set anything you want here, use {MemosNum} to display Number of memos, {UsedDay} for days. '{MemosNum} Memos {UsedDay} Days' By default":
    "你可以在这里设置你想要的任意文本，用 {MemosNum} 来展示你记录的 memo 数量，{UsedDay} 来展示使用日期。默认为'{MemosNum} Memos {UsedDay} Days'",
  'Share Memos Image Footer End': '分享 memo 图片的右边页脚',
  "Set anything you want here, use {UserName} as your username. '✍️ By {UserName}' By default":
    "你可以在这里设置你想要的任意文本，用 {UserName} 来展示你的用户名。默认为 '✍️ By {UserName}'",
  'Save Shared Image To Folder For Mobile': '当在移动端上时保存图片到文件夹',
  'Save image to folder for mobile. False by Default': '当在移动端上时，保存生成的图片到文件夹',
  'Say Thank You': '感谢开发',
  Donate: '捐赠',
  'If you like this plugin, consider donating to support continued development:':
    '如果你喜欢这个插件，而且也希望给我买鸡腿，那么可以考虑 Github 页面右边的 Sponsor~',
  'File Name of Recycle Bin': '回收站的文件名',
  "Set the filename for recycle bin. 'delete' By default": "给回收站设置一个文件名。默认为'delete'",
  'File Name of Query File': '检索文件的文件名',
  "Set the filename for query file. 'query' By default": "设置存放检索式的文件的文件名。默认为'query'",
  'Use Tags In Vault': '使用在库内的所有标签',
  'Use tags in vault rather than only in Memos. False by default.': '使用在库内的而不是 Memos 内的标签。默认关闭',
  "Don't support web image yet, please input image path in vault": '暂不支持网络图片，请使用本地图片',
  'Ready to convert image into background': '正在将图片转换为背景图',
  List: '列表',
  Task: '任务',
  Top: '顶部',
  Bottom: '底部',
  TAG: '标签',
  DAY: '天',
  QUERY: '检索式',
  EDIT: '编辑',
  PIN: '置顶',
  UNPIN: '取消置顶',
  DELETE: '删除',
  'CONFIRM！': '确定删除',
  'CREATE FILTER': '创建检索式',
  Settings: '设置',
  'Recycle bin': '回收站',
  'About Me': '关于',
  'Fetching data...': '获取数据中...',
  'Here is No Zettels.': '没有找到 memo',
  'Frequently Used Tags': '常用标签',
  'What do you think now...': '你现在在想什么？',
  READ: '阅读',
  MARK: '引用',
  SHARE: '分享',
  SOURCE: '来源',
  RESTORE: '恢复',
  'DELETE AT': '删除于',
  'Noooop!': '啥都没有！',
  'All Data is Loaded 🎉': '所有数据都加载好啦 🎉',
  'Quick filter': '快速筛选',
  TYPE: '类型',
  LINKED: '有链接',
  'NO TAGS': '无标签',
  'HAS LINKS': '有超链接',
  'HAS IMAGES': '有图片',
  INCLUDE: '包括',
  EXCLUDE: '排除',
  TEXT: '文本',
  IS: '是',
  ISNOT: '不是',
  SELECT: '选择',
  'ADD FILTER TERMS': '添加检索条件',
  FILTER: '检索器',
  TITLE: '标题',
  'CREATE QUERY': '创建检索式',
  'EDIT QUERY': '编辑检索式',
  MATCH: '匹配',
  TIMES: '次',
  'Share Memo Image': '分享 Memo 图片',
  '↗Click the button to save': '↗点击右上角的按钮来保存',
  'Image is generating...': '图片正在生成中...',
  'Image is loading...': '图片正在加载中...',
  '😟 Cannot load image, image link maybe broken': '😟 无法加载图片，图片链接也许不存在',
  'Loading...': '努力加载中...',
  'Daily Memos': '每日 Memos',
  'CANCEL EDIT': '取消编辑',
  'LINK TO THE': '链接到',
  'Mobile Options': '移动端选项',
  'Experimental Options': '实验性选项',
  'Background Image in Dark Theme': '深色主题的背景图',
  'Background Image in Light Theme': '浅色主题的背景图',
  'Set background image in dark theme. Set something like "Daily/one.png"':
    '设置深色主题的背景图。请设置类似"Daily/one.png"的路径',
  'Set background image in light theme. Set something like "Daily/one.png"':
    '设置浅色主题的背景图。请设置类似"Daily/one.png"的路径',
  'Set default memo composition, you should use {TIME} as "HH:mm" and {CONTENT} as content. "{TIME} {CONTENT}" by default':
    '设置默认 Memo 组成，你必须要使用 {TIME} 作为 "HH:mm" 而且要设置 {CONTENT} 作为内容识别。默认情况下， Memo 基于 "{TIME} {CONTENT}" 识别',
  'Default Memo Composition': '默认 Memo 组成',
};