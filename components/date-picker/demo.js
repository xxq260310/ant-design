webpackJsonp([5,211],{

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法，在浮层中可以选择或者输入日期。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic use case. Users can select or input a date in panel."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/date-picker/demo/basic.md",
	    "id": "components-date-picker-demo-basic"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { MonthPicker<span class=\"token punctuation\">,</span> RangePicker } <span class=\"token operator\">=</span> DatePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DatePicker onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>MonthPicker onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var MonthPicker = _antd.DatePicker.MonthPicker,
	      RangePicker = _antd.DatePicker.RangePicker;

	  function onChange(date, dateString) {
	    console.log(date, dateString);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.DatePicker, {
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(MonthPicker, {
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      onChange: onChange
	    })
	  );
	}
	};

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可用 ",
	        [
	          "code",
	          "disabledDate"
	        ],
	        " 和 ",
	        [
	          "code",
	          "disabledTime"
	        ],
	        " 分别禁止选择部分日期和时间，其中 ",
	        [
	          "code",
	          "disabledTime"
	        ],
	        " 需要和 ",
	        [
	          "code",
	          "showTime"
	        ],
	        " 一起使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Disabled part of dates and time by ",
	        [
	          "code",
	          "disabledDate"
	        ],
	        " and ",
	        [
	          "code",
	          "disabledTime"
	        ],
	        " respectively, and ",
	        [
	          "code",
	          "disabledTime"
	        ],
	        " only works with ",
	        [
	          "code",
	          "showTime"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "不可选择日期和时间",
	      "en-US": "Disabled Date & Time"
	    },
	    "filename": "components/date-picker/demo/disabled-date.md",
	    "id": "components-date-picker-demo-disabled-date"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">range</span><span class=\"token punctuation\">(</span>start<span class=\"token punctuation\">,</span> end<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> start<span class=\"token comment\" spellcheck=\"true\">; i &lt; end; i++) {</span>\n    result<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return result<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">disabledDate</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> {\n  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> can <span class=\"token operator\">not</span> <span class=\"token keyword\">select</span> days before today <span class=\"token operator\">and</span> today\n  return current <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> current<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;</span> Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">disabledDateTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  return {\n    disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">24</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">disabledRangeTime</span><span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>type <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'start'</span><span class=\"token punctuation\">)</span> {\n    return {\n      disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return {\n    disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">31</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DatePicker\n      format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n      disabledDate<span class=\"token operator\">=</span>{disabledDate}\n      disabledTime<span class=\"token operator\">=</span>{disabledDateTime}\n      showTime\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      disabledDate<span class=\"token operator\">=</span>{disabledDate}\n      disabledTime<span class=\"token operator\">=</span>{disabledRangeTime}\n      showTime<span class=\"token operator\">=</span>{{ hideDisabledOptions<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }}\n      format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RangePicker = _antd.DatePicker.RangePicker;

	  function range(start, end) {
	    var result = [];

	    for (var i = start; i < end; i++) {
	      result.push(i);
	    }

	    return result;
	  }

	  function disabledDate(current) {
	    // can not select days before today and today
	    return current && current.valueOf() < Date.now();
	  }

	  function disabledDateTime() {
	    return {
	      disabledHours: function disabledHours() {
	        return range(0, 24).splice(4, 20);
	      },
	      disabledMinutes: function disabledMinutes() {
	        return range(30, 60);
	      },
	      disabledSeconds: function disabledSeconds() {
	        return [55, 56];
	      }
	    };
	  }

	  function disabledRangeTime(_, type) {
	    if (type === 'start') {
	      return {
	        disabledHours: function disabledHours() {
	          return range(0, 60).splice(4, 20);
	        },
	        disabledMinutes: function disabledMinutes() {
	          return range(30, 60);
	        },
	        disabledSeconds: function disabledSeconds() {
	          return [55, 56];
	        }
	      };
	    }

	    return {
	      disabledHours: function disabledHours() {
	        return range(0, 60).splice(20, 4);
	      },
	      disabledMinutes: function disabledMinutes() {
	        return range(0, 31);
	      },
	      disabledSeconds: function disabledSeconds() {
	        return [55, 56];
	      }
	    };
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.DatePicker, {
	      format: "YYYY-MM-DD HH:mm:ss",
	      disabledDate: disabledDate,
	      disabledTime: disabledDateTime,
	      showTime: true
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      disabledDate: disabledDate,
	      disabledTime: disabledRangeTime,
	      showTime: {
	        hideDisabledOptions: true
	      },
	      format: "YYYY-MM-DD HH:mm:ss"
	    })
	  );
	}
	};

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "选择框的不可用状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A disabled state of the ",
	        [
	          "code",
	          "DatePicker"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "禁用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/date-picker/demo/disabled.md",
	    "id": "components-date-picker-demo-disabled"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { MonthPicker<span class=\"token punctuation\">,</span> RangePicker } <span class=\"token operator\">=</span> DatePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> dateFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DatePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span>} disabled <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>MonthPicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span>} disabled <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span>}\n      disabled\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(23);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var MonthPicker = _antd.DatePicker.MonthPicker,
	      RangePicker = _antd.DatePicker.RangePicker;
	  var dateFormat = 'YYYY-MM-DD';
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.DatePicker, {
	      defaultValue: (0, _moment2.default)('2015-06-06', dateFormat),
	      disabled: true
	    }),
	    React.createElement("br", null),
	    React.createElement(MonthPicker, {
	      defaultValue: (0, _moment2.default)('2015-06', 'YYYY-MM'),
	      disabled: true
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      defaultValue: [(0, _moment2.default)('2015-06-06', dateFormat), (0, _moment2.default)('2015-06-06', dateFormat)],
	      disabled: true
	    })
	  );
	}
	};

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "format"
	        ],
	        " 属性，可以自定义日期显示格式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "We can set the date format by ",
	        [
	          "code",
	          "format"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "日期格式",
	      "en-US": "Date Format"
	    },
	    "filename": "components/date-picker/demo/format.md",
	    "id": "components-date-picker-demo-format"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { MonthPicker<span class=\"token punctuation\">,</span> RangePicker } <span class=\"token operator\">=</span> DatePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> dateFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY/MM/DD'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> monthFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY/MM'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DatePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span>} format<span class=\"token operator\">=</span>{dateFormat} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>MonthPicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01'</span><span class=\"token punctuation\">,</span> monthFormat<span class=\"token punctuation\">)</span>} format<span class=\"token operator\">=</span>{monthFormat} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span>}\n      format<span class=\"token operator\">=</span>{dateFormat}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(23);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var MonthPicker = _antd.DatePicker.MonthPicker,
	      RangePicker = _antd.DatePicker.RangePicker;
	  var dateFormat = 'YYYY/MM/DD';
	  var monthFormat = 'YYYY/MM';
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.DatePicker, {
	      defaultValue: (0, _moment2.default)('2015/01/01', dateFormat),
	      format: dateFormat
	    }),
	    React.createElement("br", null),
	    React.createElement(MonthPicker, {
	      defaultValue: (0, _moment2.default)('2015/01', monthFormat),
	      format: monthFormat
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      defaultValue: [(0, _moment2.default)('2015/01/01', dateFormat), (0, _moment2.default)('2015/01/01', dateFormat)],
	      format: dateFormat
	    })
	  );
	}
	};

/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过 ",
	        [
	          "code",
	          "locale"
	        ],
	        " 设置语言, 默认支持 ",
	        [
	          "code",
	          "en_US"
	        ],
	        "，",
	        [
	          "code",
	          "zh_CN"
	        ],
	        "。"
	      ],
	      [
	        "p",
	        "moment 会自动使用当前时区，如果需要使用别的时区，则需要自行设置，设置方法请参考示例代码中的注释。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use locale to set the language. ",
	        [
	          "code",
	          "en_US"
	        ],
	        ", ",
	        [
	          "code",
	          "zh_CN"
	        ],
	        " are supported by default."
	      ],
	      [
	        "p",
	        "moment will use your time zone automatically. If you want to set other time zone, please set it by yourself."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "国际化",
	      "en-US": "Locale"
	    },
	    "filename": "components/date-picker/demo/locale.md",
	    "id": "components-date-picker-demo-locale"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport enUS from <span class=\"token string\">'antd/lib/date-picker/locale/en_US'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment-timezone/moment-timezone'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> It's recommended <span class=\"token keyword\">to</span> set moment locale <span class=\"token operator\">and</span> time zone globally <span class=\"token keyword\">in</span> entry file<span class=\"token punctuation\">,</span>\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> otherwise<span class=\"token punctuation\">,</span> you need <span class=\"token keyword\">to</span> set it by `value` <span class=\"token operator\">or</span> `defaultValue`<span class=\"token punctuation\">.</span>\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> The following data is copied from https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>github<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>moment<span class=\"token operator\">/</span>moment<span class=\"token operator\">-</span>timezone<span class=\"token operator\">/</span>blob<span class=\"token operator\">/</span>develop<span class=\"token operator\">/</span>data<span class=\"token operator\">/</span>packed<span class=\"token operator\">/</span>latest<span class=\"token punctuation\">.</span>json\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> moment<span class=\"token punctuation\">.</span>tz<span class=\"token punctuation\">.</span><span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> moment<span class=\"token punctuation\">.</span>tz<span class=\"token punctuation\">.</span><span class=\"token function\">setDefault</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Europe/London'</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">const</span> log <span class=\"token operator\">=</span> console<span class=\"token punctuation\">.</span>log<span class=\"token punctuation\">.</span><span class=\"token function\">bind</span><span class=\"token punctuation\">(</span>console<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>DatePicker\n    defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">utcOffset</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span>}\n    locale<span class=\"token operator\">=</span>{enUS}\n    showTime\n    onChange<span class=\"token operator\">=</span>{log}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _en_US = __webpack_require__(219);

	  var _en_US2 = _interopRequireDefault(_en_US);

	  var _momentTimezone = __webpack_require__(1668);

	  var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  // It's recommended to set moment locale and time zone globally in entry file,
	  // otherwise, you need to set it by `value` or `defaultValue`.
	  // moment.locale('en');
	  // The following data is copied from https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json
	  // moment.tz.add('Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6');
	  // moment.tz.setDefault('Europe/London')
	  var log = console.log.bind(console);
	  return React.createElement(_antd.DatePicker, {
	    defaultValue: (0, _momentTimezone2.default)().locale('en').utcOffset(0),
	    locale: _en_US2.default,
	    showTime: true,
	    onChange: log
	  });
	}
	};

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "RangePicker 可以设置常用的 预设范围 提高用户体验。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "We can set presetted ranges to RangePicker to improve user experience."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "预设范围",
	      "en-US": "Presetted Ranges"
	    },
	    "filename": "components/date-picker/demo/presetted-ranges.md",
	    "id": "components-date-picker-demo-presetted-ranges"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>dates<span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'From: '</span><span class=\"token punctuation\">,</span> dates<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">', to: '</span><span class=\"token punctuation\">,</span> dates<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'From: '</span><span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">', to: '</span><span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      ranges<span class=\"token operator\">=</span>{{ Today<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'This Month'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span> }}\n      onChange<span class=\"token operator\">=</span>{onChange}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      ranges<span class=\"token operator\">=</span>{{ Today<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'This Month'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span> }}\n      showTime format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY/MM/DD HH:mm:ss\"</span> onChange<span class=\"token operator\">=</span>{onChange}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(23);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var RangePicker = _antd.DatePicker.RangePicker;

	  function onChange(dates, dateStrings) {
	    console.log('From: ', dates[0], ', to: ', dates[1]);
	    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(RangePicker, {
	      ranges: {
	        Today: [(0, _moment2.default)(), (0, _moment2.default)()],
	        'This Month': [(0, _moment2.default)(), (0, _moment2.default)().endOf('month')]
	      },
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      ranges: {
	        Today: [(0, _moment2.default)(), (0, _moment2.default)()],
	        'This Month': [(0, _moment2.default)(), (0, _moment2.default)().endOf('month')]
	      },
	      showTime: true,
	      format: "YYYY/MM/DD HH:mm:ss",
	      onChange: onChange
	    })
	  );
	}
	};

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "三种大小的输入框，若不设置，则为 ",
	        [
	          "code",
	          "default"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The input box comes in three sizes. ",
	        [
	          "code",
	          "default"
	        ],
	        " will be used if ",
	        [
	          "code",
	          "size"
	        ],
	        " is omitted."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three Sizes"
	    },
	    "filename": "components/date-picker/demo/size.md",
	    "id": "components-date-picker-demo-size"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker<span class=\"token punctuation\">,</span> Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { MonthPicker<span class=\"token punctuation\">,</span> RangePicker } <span class=\"token operator\">=</span> DatePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass PickerSizesDemo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { size } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group value<span class=\"token operator\">=</span>{size} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSizeChange}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Large<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span><span class=\"token operator\">></span><span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span><span class=\"token operator\">></span>Small<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>DatePicker size<span class=\"token operator\">=</span>{size} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>MonthPicker size<span class=\"token operator\">=</span>{size} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>RangePicker size<span class=\"token operator\">=</span>{size} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>PickerSizesDemo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var MonthPicker = _antd.DatePicker.MonthPicker,
	      RangePicker = _antd.DatePicker.RangePicker;

	  var PickerSizesDemo = function (_React$Component) {
	    _inherits(PickerSizesDemo, _React$Component);

	    function PickerSizesDemo() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, PickerSizesDemo);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        size: 'default'
	      }, _this.handleSizeChange = function (e) {
	        _this.setState({
	          size: e.target.value
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    PickerSizesDemo.prototype.render = function render() {
	      var size = this.state.size;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Radio.Group,
	          {
	            value: size,
	            onChange: this.handleSizeChange
	          },
	          React.createElement(
	            _antd.Radio.Button,
	            {
	              value: "large"
	            },
	            "Large"
	          ),
	          React.createElement(
	            _antd.Radio.Button,
	            {
	              value: "default"
	            },
	            "Default"
	          ),
	          React.createElement(
	            _antd.Radio.Button,
	            {
	              value: "small"
	            },
	            "Small"
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(_antd.DatePicker, {
	          size: size
	        }),
	        React.createElement("br", null),
	        React.createElement(MonthPicker, {
	          size: size
	        }),
	        React.createElement("br", null),
	        React.createElement(RangePicker, {
	          size: size
	        })
	      );
	    };

	    return PickerSizesDemo;
	  }(React.Component);

	  return React.createElement(PickerSizesDemo, null);
	}
	};

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "当 ",
	        [
	          "code",
	          "RangePicker"
	        ],
	        " 无法满足业务需求时，可以使用两个 ",
	        [
	          "code",
	          "DatePicker"
	        ],
	        " 实现类似的功能。"
	      ],
	      [
	        "blockquote",
	        [
	          "ul",
	          [
	            "li",
	            [
	              "p",
	              "通过设置 ",
	              [
	                "code",
	                "disabledDate"
	              ],
	              " 方法，来约束开始和结束日期。"
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "通过 ",
	              [
	                "code",
	                "open"
	              ],
	              " ",
	              [
	                "code",
	                "onOpenChange"
	              ],
	              " 来优化交互。"
	            ]
	          ]
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "When ",
	        [
	          "code",
	          "RangePicker"
	        ],
	        " is not satisfied your requirements, try to implement similar functionality with two ",
	        [
	          "code",
	          "DatePicker"
	        ],
	        "."
	      ],
	      [
	        "blockquote",
	        [
	          "ul",
	          [
	            "li",
	            [
	              "p",
	              "Use the ",
	              [
	                "code",
	                "disabledDate"
	              ],
	              " property to limit the start and end dates."
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "Imporve user experience with ",
	              [
	                "code",
	                "open"
	              ],
	              " ",
	              [
	                "code",
	                "onOpenChange"
	              ],
	              "."
	            ]
	          ]
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "自定义日期范围选择",
	      "en-US": "Customized Range Picker"
	    },
	    "filename": "components/date-picker/demo/start-end.md",
	    "id": "components-date-picker-demo-start-end"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass DateRange extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    startValue<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    endValue<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    endOpen<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  disabledStartDate <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>startValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> endValue <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>endValue<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!startValue || !endValue<span class=\"token punctuation\">)</span> {\n      return <span class=\"token boolean\">false</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return startValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> endValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  disabledEndDate <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>endValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> startValue <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>startValue<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!endValue || !startValue<span class=\"token punctuation\">)</span> {\n      return <span class=\"token boolean\">false</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return endValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;=</span> startValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>field<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      <span class=\"token punctuation\">[</span>field<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  onStartChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token string\">'startValue'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  onEndChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token string\">'endValue'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleStartOpenChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!open<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ endOpen<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n\n  handleEndOpenChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ endOpen<span class=\"token punctuation\">:</span> open }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { startValue<span class=\"token punctuation\">,</span> endValue<span class=\"token punctuation\">,</span> endOpen } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>DatePicker\n          disabledDate<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>disabledStartDate}\n          showTime\n          format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n          value<span class=\"token operator\">=</span>{startValue}\n          placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Start\"</span>\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onStartChange}\n          onOpenChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleStartOpenChange}\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>DatePicker\n          disabledDate<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>disabledEndDate}\n          showTime\n          format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n          value<span class=\"token operator\">=</span>{endValue}\n          placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"End\"</span>\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onEndChange}\n          open<span class=\"token operator\">=</span>{endOpen}\n          onOpenChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleEndOpenChange}\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>DateRange <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var DateRange = function (_React$Component) {
	    _inherits(DateRange, _React$Component);

	    function DateRange() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, DateRange);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        startValue: null,
	        endValue: null,
	        endOpen: false
	      }, _this.disabledStartDate = function (startValue) {
	        var endValue = _this.state.endValue;

	        if (!startValue || !endValue) {
	          return false;
	        }

	        return startValue.valueOf() > endValue.valueOf();
	      }, _this.disabledEndDate = function (endValue) {
	        var startValue = _this.state.startValue;

	        if (!endValue || !startValue) {
	          return false;
	        }

	        return endValue.valueOf() <= startValue.valueOf();
	      }, _this.onChange = function (field, value) {
	        _this.setState(_defineProperty({}, field, value));
	      }, _this.onStartChange = function (value) {
	        _this.onChange('startValue', value);
	      }, _this.onEndChange = function (value) {
	        _this.onChange('endValue', value);
	      }, _this.handleStartOpenChange = function (open) {
	        if (!open) {
	          _this.setState({
	            endOpen: true
	          });
	        }
	      }, _this.handleEndOpenChange = function (open) {
	        _this.setState({
	          endOpen: open
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    DateRange.prototype.render = function render() {
	      var _state = this.state,
	          startValue = _state.startValue,
	          endValue = _state.endValue,
	          endOpen = _state.endOpen;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.DatePicker, {
	          disabledDate: this.disabledStartDate,
	          showTime: true,
	          format: "YYYY-MM-DD HH:mm:ss",
	          value: startValue,
	          placeholder: "Start",
	          onChange: this.onStartChange,
	          onOpenChange: this.handleStartOpenChange
	        }),
	        React.createElement(_antd.DatePicker, {
	          disabledDate: this.disabledEndDate,
	          showTime: true,
	          format: "YYYY-MM-DD HH:mm:ss",
	          value: endValue,
	          placeholder: "End",
	          onChange: this.onEndChange,
	          open: endOpen,
	          onOpenChange: this.handleEndOpenChange
	        })
	      );
	    };

	    return DateRange;
	  }(React.Component);

	  return React.createElement(DateRange, null);
	}
	};

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "增加选择时间功能，当 ",
	        [
	          "code",
	          "showTime"
	        ],
	        " 为一个对象时，其属性会传递给内建的 ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "This property provide an additional time selection. When ",
	        [
	          "code",
	          "showTime"
	        ],
	        " is an Object, its properties will be passed on to built-in ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "日期时间选择",
	      "en-US": "Choose Time"
	    },
	    "filename": "components/date-picker/demo/time.md",
	    "id": "components-date-picker-demo-time"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { RangePicker } <span class=\"token operator\">=</span> DatePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Selected Time: '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Formatted Selected Time: '</span><span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DatePicker\n      showTime\n      format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n      placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Select Time\"</span>\n      onChange<span class=\"token operator\">=</span>{onChange}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RangePicker\n      showTime\n      format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span>\n      placeholder<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'Start Time'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'End Time'</span><span class=\"token punctuation\">]</span>}\n      onChange<span class=\"token operator\">=</span>{onChange}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RangePicker = _antd.DatePicker.RangePicker;

	  function onChange(value, dateString) {
	    console.log('Selected Time: ', value);
	    console.log('Formatted Selected Time: ', dateString);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.DatePicker, {
	      showTime: true,
	      format: "YYYY-MM-DD HH:mm:ss",
	      placeholder: "Select Time",
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(RangePicker, {
	      showTime: true,
	      format: "YYYY-MM-DD HH:mm:ss",
	      placeholder: ['Start Time', 'End Time'],
	      onChange: onChange
	    })
	  );
	}
	};

/***/ },

/***/ 1221:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(817),
	    'disabled-date': __webpack_require__(818),
	    'disabled': __webpack_require__(819),
	    'format': __webpack_require__(820),
	    'locale': __webpack_require__(821),
	    'presetted-ranges': __webpack_require__(822),
	    'size': __webpack_require__(823),
	    'start-end': __webpack_require__(824),
	    'time': __webpack_require__(825),
	}

/***/ },

/***/ 1668:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
	//! version : 0.5.11
	//! Copyright (c) JS Foundation and other contributors
	//! license : MIT
	//! github.com/moment/moment-timezone

	(function (root, factory) {
		"use strict";

		/*global define*/
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));                 // AMD
		} else if (typeof module === 'object' && module.exports) {
			module.exports = factory(require('moment')); // Node
		} else {
			factory(root.moment);                        // Browser
		}
	}(this, function (moment) {
		"use strict";

		// Do not load moment-timezone a second time.
		// if (moment.tz !== undefined) {
		// 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
		// 	return moment;
		// }

		var VERSION = "0.5.11",
			zones = {},
			links = {},
			names = {},
			guesses = {},
			cachedGuess,

			momentVersion = moment.version.split('.'),
			major = +momentVersion[0],
			minor = +momentVersion[1];

		// Moment.js version check
		if (major < 2 || (major === 2 && minor < 6)) {
			logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
		}

		/************************************
			Unpacking
		************************************/

		function charCodeToInt(charCode) {
			if (charCode > 96) {
				return charCode - 87;
			} else if (charCode > 64) {
				return charCode - 29;
			}
			return charCode - 48;
		}

		function unpackBase60(string) {
			var i = 0,
				parts = string.split('.'),
				whole = parts[0],
				fractional = parts[1] || '',
				multiplier = 1,
				num,
				out = 0,
				sign = 1;

			// handle negative numbers
			if (string.charCodeAt(0) === 45) {
				i = 1;
				sign = -1;
			}

			// handle digits before the decimal
			for (i; i < whole.length; i++) {
				num = charCodeToInt(whole.charCodeAt(i));
				out = 60 * out + num;
			}

			// handle digits after the decimal
			for (i = 0; i < fractional.length; i++) {
				multiplier = multiplier / 60;
				num = charCodeToInt(fractional.charCodeAt(i));
				out += num * multiplier;
			}

			return out * sign;
		}

		function arrayToInt (array) {
			for (var i = 0; i < array.length; i++) {
				array[i] = unpackBase60(array[i]);
			}
		}

		function intToUntil (array, length) {
			for (var i = 0; i < length; i++) {
				array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
			}

			array[length - 1] = Infinity;
		}

		function mapIndices (source, indices) {
			var out = [], i;

			for (i = 0; i < indices.length; i++) {
				out[i] = source[indices[i]];
			}

			return out;
		}

		function unpack (string) {
			var data = string.split('|'),
				offsets = data[2].split(' '),
				indices = data[3].split(''),
				untils  = data[4].split(' ');

			arrayToInt(offsets);
			arrayToInt(indices);
			arrayToInt(untils);

			intToUntil(untils, indices.length);

			return {
				name       : data[0],
				abbrs      : mapIndices(data[1].split(' '), indices),
				offsets    : mapIndices(offsets, indices),
				untils     : untils,
				population : data[5] | 0
			};
		}

		/************************************
			Zone object
		************************************/

		function Zone (packedString) {
			if (packedString) {
				this._set(unpack(packedString));
			}
		}

		Zone.prototype = {
			_set : function (unpacked) {
				this.name       = unpacked.name;
				this.abbrs      = unpacked.abbrs;
				this.untils     = unpacked.untils;
				this.offsets    = unpacked.offsets;
				this.population = unpacked.population;
			},

			_index : function (timestamp) {
				var target = +timestamp,
					untils = this.untils,
					i;

				for (i = 0; i < untils.length; i++) {
					if (target < untils[i]) {
						return i;
					}
				}
			},

			parse : function (timestamp) {
				var target  = +timestamp,
					offsets = this.offsets,
					untils  = this.untils,
					max     = untils.length - 1,
					offset, offsetNext, offsetPrev, i;

				for (i = 0; i < max; i++) {
					offset     = offsets[i];
					offsetNext = offsets[i + 1];
					offsetPrev = offsets[i ? i - 1 : i];

					if (offset < offsetNext && tz.moveAmbiguousForward) {
						offset = offsetNext;
					} else if (offset > offsetPrev && tz.moveInvalidForward) {
						offset = offsetPrev;
					}

					if (target < untils[i] - (offset * 60000)) {
						return offsets[i];
					}
				}

				return offsets[max];
			},

			abbr : function (mom) {
				return this.abbrs[this._index(mom)];
			},

			offset : function (mom) {
				return this.offsets[this._index(mom)];
			}
		};

		/************************************
			Current Timezone
		************************************/

		function OffsetAt(at) {
			var timeString = at.toTimeString();
			var abbr = timeString.match(/\([a-z ]+\)/i);
			if (abbr && abbr[0]) {
				// 17:56:31 GMT-0600 (CST)
				// 17:56:31 GMT-0600 (Central Standard Time)
				abbr = abbr[0].match(/[A-Z]/g);
				abbr = abbr ? abbr.join('') : undefined;
			} else {
				// 17:56:31 CST
				// 17:56:31 GMT+0800 (台北標準時間)
				abbr = timeString.match(/[A-Z]{3,5}/g);
				abbr = abbr ? abbr[0] : undefined;
			}

			if (abbr === 'GMT') {
				abbr = undefined;
			}

			this.at = +at;
			this.abbr = abbr;
			this.offset = at.getTimezoneOffset();
		}

		function ZoneScore(zone) {
			this.zone = zone;
			this.offsetScore = 0;
			this.abbrScore = 0;
		}

		ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
			this.offsetScore += Math.abs(this.zone.offset(offsetAt.at) - offsetAt.offset);
			if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
				this.abbrScore++;
			}
		};

		function findChange(low, high) {
			var mid, diff;

			while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
				mid = new OffsetAt(new Date(low.at + diff));
				if (mid.offset === low.offset) {
					low = mid;
				} else {
					high = mid;
				}
			}

			return low;
		}

		function userOffsets() {
			var startYear = new Date().getFullYear() - 2,
				last = new OffsetAt(new Date(startYear, 0, 1)),
				offsets = [last],
				change, next, i;

			for (i = 1; i < 48; i++) {
				next = new OffsetAt(new Date(startYear, i, 1));
				if (next.offset !== last.offset) {
					change = findChange(last, next);
					offsets.push(change);
					offsets.push(new OffsetAt(new Date(change.at + 6e4)));
				}
				last = next;
			}

			for (i = 0; i < 4; i++) {
				offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
				offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
			}

			return offsets;
		}

		function sortZoneScores (a, b) {
			if (a.offsetScore !== b.offsetScore) {
				return a.offsetScore - b.offsetScore;
			}
			if (a.abbrScore !== b.abbrScore) {
				return a.abbrScore - b.abbrScore;
			}
			return b.zone.population - a.zone.population;
		}

		function addToGuesses (name, offsets) {
			var i, offset;
			arrayToInt(offsets);
			for (i = 0; i < offsets.length; i++) {
				offset = offsets[i];
				guesses[offset] = guesses[offset] || {};
				guesses[offset][name] = true;
			}
		}

		function guessesForUserOffsets (offsets) {
			var offsetsLength = offsets.length,
				filteredGuesses = {},
				out = [],
				i, j, guessesOffset;

			for (i = 0; i < offsetsLength; i++) {
				guessesOffset = guesses[offsets[i].offset] || {};
				for (j in guessesOffset) {
					if (guessesOffset.hasOwnProperty(j)) {
						filteredGuesses[j] = true;
					}
				}
			}

			for (i in filteredGuesses) {
				if (filteredGuesses.hasOwnProperty(i)) {
					out.push(names[i]);
				}
			}

			return out;
		}

		function rebuildGuess () {

			// use Intl API when available and returning valid time zone
			try {
				var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
				if (intlName){
					var name = names[normalizeName(intlName)];
					if (name) {
						return name;
					}
					logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
				}
			} catch (e) {
				// Intl unavailable, fall back to manual guessing.
			}

			var offsets = userOffsets(),
				offsetsLength = offsets.length,
				guesses = guessesForUserOffsets(offsets),
				zoneScores = [],
				zoneScore, i, j;

			for (i = 0; i < guesses.length; i++) {
				zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
				for (j = 0; j < offsetsLength; j++) {
					zoneScore.scoreOffsetAt(offsets[j]);
				}
				zoneScores.push(zoneScore);
			}

			zoneScores.sort(sortZoneScores);

			return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
		}

		function guess (ignoreCache) {
			if (!cachedGuess || ignoreCache) {
				cachedGuess = rebuildGuess();
			}
			return cachedGuess;
		}

		/************************************
			Global Methods
		************************************/

		function normalizeName (name) {
			return (name || '').toLowerCase().replace(/\//g, '_');
		}

		function addZone (packed) {
			var i, name, split, normalized;

			if (typeof packed === "string") {
				packed = [packed];
			}

			for (i = 0; i < packed.length; i++) {
				split = packed[i].split('|');
				name = split[0];
				normalized = normalizeName(name);
				zones[normalized] = packed[i];
				names[normalized] = name;
				if (split[5]) {
					addToGuesses(normalized, split[2].split(' '));
				}
			}
		}

		function getZone (name, caller) {
			name = normalizeName(name);

			var zone = zones[name];
			var link;

			if (zone instanceof Zone) {
				return zone;
			}

			if (typeof zone === 'string') {
				zone = new Zone(zone);
				zones[name] = zone;
				return zone;
			}

			// Pass getZone to prevent recursion more than 1 level deep
			if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
				zone = zones[name] = new Zone();
				zone._set(link);
				zone.name = names[name];
				return zone;
			}

			return null;
		}

		function getNames () {
			var i, out = [];

			for (i in names) {
				if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
					out.push(names[i]);
				}
			}

			return out.sort();
		}

		function addLink (aliases) {
			var i, alias, normal0, normal1;

			if (typeof aliases === "string") {
				aliases = [aliases];
			}

			for (i = 0; i < aliases.length; i++) {
				alias = aliases[i].split('|');

				normal0 = normalizeName(alias[0]);
				normal1 = normalizeName(alias[1]);

				links[normal0] = normal1;
				names[normal0] = alias[0];

				links[normal1] = normal0;
				names[normal1] = alias[1];
			}
		}

		function loadData (data) {
			addZone(data.zones);
			addLink(data.links);
			tz.dataVersion = data.version;
		}

		function zoneExists (name) {
			if (!zoneExists.didShowError) {
				zoneExists.didShowError = true;
					logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
			}
			return !!getZone(name);
		}

		function needsOffset (m) {
			return !!(m._a && (m._tzm === undefined));
		}

		function logError (message) {
			if (typeof console !== 'undefined' && typeof console.error === 'function') {
				console.error(message);
			}
		}

		/************************************
			moment.tz namespace
		************************************/

		function tz (input) {
			var args = Array.prototype.slice.call(arguments, 0, -1),
				name = arguments[arguments.length - 1],
				zone = getZone(name),
				out  = moment.utc.apply(null, args);

			if (zone && !moment.isMoment(input) && needsOffset(out)) {
				out.add(zone.parse(out), 'minutes');
			}

			out.tz(name);

			return out;
		}

		tz.version      = VERSION;
		tz.dataVersion  = '';
		tz._zones       = zones;
		tz._links       = links;
		tz._names       = names;
		tz.add          = addZone;
		tz.link         = addLink;
		tz.load         = loadData;
		tz.zone         = getZone;
		tz.zoneExists   = zoneExists; // deprecated in 0.1.0
		tz.guess        = guess;
		tz.names        = getNames;
		tz.Zone         = Zone;
		tz.unpack       = unpack;
		tz.unpackBase60 = unpackBase60;
		tz.needsOffset  = needsOffset;
		tz.moveInvalidForward   = true;
		tz.moveAmbiguousForward = false;

		/************************************
			Interface with Moment.js
		************************************/

		var fn = moment.fn;

		moment.tz = tz;

		moment.defaultZone = null;

		moment.updateOffset = function (mom, keepTime) {
			var zone = moment.defaultZone,
				offset;

			if (mom._z === undefined) {
				if (zone && needsOffset(mom) && !mom._isUTC) {
					mom._d = moment.utc(mom._a)._d;
					mom.utc().add(zone.parse(mom), 'minutes');
				}
				mom._z = zone;
			}
			if (mom._z) {
				offset = mom._z.offset(mom);
				if (Math.abs(offset) < 16) {
					offset = offset / 60;
				}
				if (mom.utcOffset !== undefined) {
					mom.utcOffset(-offset, keepTime);
				} else {
					mom.zone(offset, keepTime);
				}
			}
		};

		fn.tz = function (name) {
			if (name) {
				this._z = getZone(name);
				if (this._z) {
					moment.updateOffset(this);
				} else {
					logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
				}
				return this;
			}
			if (this._z) { return this._z.name; }
		};

		function abbrWrap (old) {
			return function () {
				if (this._z) { return this._z.abbr(this); }
				return old.call(this);
			};
		}

		function resetZoneWrap (old) {
			return function () {
				this._z = null;
				return old.apply(this, arguments);
			};
		}

		fn.zoneName = abbrWrap(fn.zoneName);
		fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
		fn.utc      = resetZoneWrap(fn.utc);

		moment.tz.setDefault = function(name) {
			if (major < 2 || (major === 2 && minor < 9)) {
				logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
			}
			moment.defaultZone = name ? getZone(name) : null;
			return moment;
		};

		// Cloning a moment should include the _z property.
		var momentProperties = moment.momentProperties;
		if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
			// moment 2.8.1+
			momentProperties.push('_z');
			momentProperties.push('_a');
		} else if (momentProperties) {
			// moment 2.7.0
			momentProperties._z = null;
		}

		// INJECT DATA

		return moment;
	}));


/***/ }

});