window.TILE_VERSION = {
  ditu: {
    normal: { version: '088', updateDate: '20210316' },
    satellite: { version: '009', updateDate: '20210316' },
    normalTraffic: { version: '081', updateDate: '20210316' },
    satelliteTraffic: { version: '083', updateDate: '20210316' },
    mapJS: { version: '104', updateDate: '20210316' },
    satelliteStreet: { version: '083', updateDate: '20210316' },
    earthVector: { version: '001', updateDate: '20210316' }
  },
  webapp: {
    high_normal: { version: '001', updateDate: '20210316' },
    lower_normal: { version: '002', updateDate: '20210316' }
  },
  api_for_mobile: {
    vector: { version: '002', updateDate: '20210316' },
    vectorIcon: { version: '002', updateDate: '20210316' }
  }
}
window.BMAP_AUTHENTIC_KEY = 'rXEWhxDjgbhoLBrRgCWptx08MUpFyaIP'
;(function() {
  function ca(a) {
    throw a
  }
  var j = void 0,
    o = !0,
    p = null,
    q = !1
  function t() {
    return function() {}
  }
  function da(a) {
    return function(b) {
      this[a] = b
    }
  }
  function v(a) {
    return function() {
      return this[a]
    }
  }
  function ea(a) {
    return function() {
      return a
    }
  }
  var fa,
    ga = []
  function ha(a) {
    return function() {
      return ga[a].apply(this, arguments)
    }
  }
  function ia(a, b) {
    return (ga[a] = b)
  }
  var ja,
    x = (ja = x || { version: '1.3.4' })
  x.ba = '$BAIDU$'
  window[x.ba] = window[x.ba] || {}
  x.object = x.object || {}
  x.extend = x.object.extend = function(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    return a
  }
  x.K = x.K || {}
  x.K.$ = function(a) {
    return 'string' == typeof a || a instanceof String
      ? document.getElementById(a)
      : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType)
      ? a
      : p
  }
  x.$ = x.Ec = x.K.$
  x.K.U = function(a) {
    a = x.K.$(a)
    if (a === p) return a
    a.style.display = 'none'
    return a
  }
  x.U = x.K.U
  x.lang = x.lang || {}
  x.lang.tg = function(a) {
    return '[object String]' == Object.prototype.toString.call(a)
  }
  x.tg = x.lang.tg
  x.K.Uj = function(a) {
    return x.lang.tg(a) ? document.getElementById(a) : a
  }
  x.Uj = x.K.Uj
  x.K.getElementsByClassName = function(a, b) {
    var c
    if (a.getElementsByClassName) c = a.getElementsByClassName(b)
    else {
      var d = a
      d == p && (d = document)
      c = []
      var d = d.getElementsByTagName('*'),
        e = d.length,
        f = RegExp('(^|\\s)' + b + '(\\s|$)'),
        g,
        i
      for (i = g = 0; g < e; g++) f.test(d[g].className) && ((c[i] = d[g]), i++)
    }
    return c
  }
  x.getElementsByClassName = x.K.getElementsByClassName
  x.K.contains = function(a, b) {
    var c = x.K.Uj,
      a = c(a),
      b = c(b)
    return a.contains
      ? a != b && a.contains(b)
      : !!(a.compareDocumentPosition(b) & 16)
  }
  x.da = x.da || {}
  ;/msie (\d+\.\d)/i.test(navigator.userAgent) &&
    (x.da.ma = x.ma = document.documentMode || +RegExp.$1)
  var ka = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    valign: 'vAlign',
    usemap: 'useMap',
    frameborder: 'frameBorder'
  }
  8 > x.da.ma
    ? ((ka['for'] = 'htmlFor'), (ka['class'] = 'className'))
    : ((ka.htmlFor = 'for'), (ka.className = 'class'))
  x.K.SG = ka
  x.K.EF = function(a, b, c) {
    a = x.K.$(a)
    if (a === p) return a
    if ('style' == b) a.style.cssText = c
    else {
      b = x.K.SG[b] || b
      a.setAttribute(b, c)
    }
    return a
  }
  x.EF = x.K.EF
  x.K.FF = function(a, b) {
    a = x.K.$(a)
    if (a === p) return a
    for (var c in b) x.K.EF(a, c, b[c])
    return a
  }
  x.FF = x.K.FF
  x.Yk = x.Yk || {}
  ;(function() {
    var a = RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)', 'g')
    x.Yk.trim = function(b) {
      return ('' + b).replace(a, '')
    }
  })()
  x.trim = x.Yk.trim
  x.Yk.ap = function(a, b) {
    var a = '' + a,
      c = Array.prototype.slice.call(arguments, 1),
      d = Object.prototype.toString
    if (c.length) {
      c =
        c.length == 1
          ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b))
            ? b
            : c
          : c
      return a.replace(/#\{(.+?)\}/g, function(a, b) {
        var g = c[b]
        '[object Function]' == d.call(g) && (g = g(b))
        return 'undefined' == typeof g ? '' : g
      })
    }
    return a
  }
  x.ap = x.Yk.ap
  x.K.Tb = function(a, b) {
    a = x.K.$(a)
    if (a === p) return a
    for (
      var c = a.className.split(/\s+/),
        d = b.split(/\s+/),
        e,
        f = d.length,
        g,
        i = 0;
      i < f;
      ++i
    ) {
      g = 0
      for (e = c.length; g < e; ++g)
        if (c[g] == d[i]) {
          c.splice(g, 1)
          break
        }
    }
    a.className = c.join(' ')
    return a
  }
  x.Tb = x.K.Tb
  x.K.Wx = function(a, b, c) {
    a = x.K.$(a)
    if (a === p) return a
    var d
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c)
    else {
      d = a.ownerDocument.createRange()
      b = b.toUpperCase()
      if (b == 'AFTERBEGIN' || b == 'BEFOREEND') {
        d.selectNodeContents(a)
        d.collapse(b == 'AFTERBEGIN')
      } else {
        b = b == 'BEFOREBEGIN'
        d[b ? 'setStartBefore' : 'setEndAfter'](a)
        d.collapse(b)
      }
      d.insertNode(d.createContextualFragment(c))
    }
    return a
  }
  x.Wx = x.K.Wx
  x.K.show = function(a) {
    a = x.K.$(a)
    if (a === p) return a
    a.style.display = ''
    return a
  }
  x.show = x.K.show
  x.K.WD = function(a) {
    a = x.K.$(a)
    return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
  }
  x.K.Ta = function(a, b) {
    a = x.K.$(a)
    if (a === p) return a
    for (
      var c = b.split(/\s+/),
        d = a.className,
        e = ' ' + d + ' ',
        f = 0,
        g = c.length;
      f < g;
      f++
    )
      e.indexOf(' ' + c[f] + ' ') < 0 && (d = d + (' ' + c[f]))
    a.className = d
    return a
  }
  x.Ta = x.K.Ta
  x.K.TB = x.K.TB || {}
  x.K.Tl = x.K.Tl || []
  x.K.Tl.filter = function(a, b, c) {
    for (var d = 0, e = x.K.Tl, f; (f = e[d]); d++) if ((f = f[c])) b = f(a, b)
    return b
  }
  x.Yk.KO = function(a) {
    return a.indexOf('-') < 0 && a.indexOf('_') < 0
      ? a
      : a.replace(/[-_][^-_]/g, function(a) {
          return a.charAt(1).toUpperCase()
        })
  }
  x.K.Y_ = function(a) {
    x.K.kt(a, 'expand') ? x.K.Tb(a, 'expand') : x.K.Ta(a, 'expand')
  }
  x.K.kt = function(a) {
    if (arguments.length <= 0 || typeof a === 'function') return this
    if (this.size() <= 0) return q
    var a = a
        .replace(/^\s+/g, '')
        .replace(/\s+$/g, '')
        .replace(/\s+/g, ' '),
      b = a.split(' '),
      c
    x.forEach(this, function(a) {
      for (var a = a.className, e = 0; e < b.length; e++)
        if (!~(' ' + a + ' ').indexOf(' ' + b[e] + ' ')) {
          c = q
          return
        }
      c !== q && (c = o)
    })
    return c
  }
  x.K.wj = function(a, b) {
    var c = x.K,
      a = c.$(a)
    if (a === p) return a
    var b = x.Yk.KO(b),
      d = a.style[b]
    if (!d)
      var e = c.TB[b],
        d = a.currentStyle || (x.da.ma ? a.style : getComputedStyle(a, p)),
        d = e && e.get ? e.get(a, d) : d[e || b]
    if ((e = c.Tl)) d = e.filter(b, d, 'get')
    return d
  }
  x.wj = x.K.wj
  ;/opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1)
  x.da.CM = /webkit/i.test(navigator.userAgent)
  x.da.FY =
    /gecko/i.test(navigator.userAgent) &&
    !/like gecko/i.test(navigator.userAgent)
  x.da.IE = 'CSS1Compat' == document.compatMode
  x.K.ia = function(a) {
    a = x.K.$(a)
    if (a === p) return a
    var b = x.K.WD(a),
      c = x.da,
      d = x.K.wj
    c.FY > 0 && b.getBoxObjectFor && d(a, 'position')
    var e = { left: 0, top: 0 },
      f
    if (a == (c.ma && !c.IE ? b.body : b.documentElement)) return e
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect()
      e.left =
        Math.floor(a.left) +
        Math.max(b.documentElement.scrollLeft, b.body.scrollLeft)
      e.top =
        Math.floor(a.top) +
        Math.max(b.documentElement.scrollTop, b.body.scrollTop)
      e.left = e.left - b.documentElement.clientLeft
      e.top = e.top - b.documentElement.clientTop
      a = b.body
      b = parseInt(d(a, 'borderLeftWidth'))
      d = parseInt(d(a, 'borderTopWidth'))
      if (c.ma && !c.IE) {
        e.left = e.left - (isNaN(b) ? 2 : b)
        e.top = e.top - (isNaN(d) ? 2 : d)
      }
    } else {
      f = a
      do {
        e.left = e.left + f.offsetLeft
        e.top = e.top + f.offsetTop
        if (c.CM > 0 && d(f, 'position') == 'fixed') {
          e.left = e.left + b.body.scrollLeft
          e.top = e.top + b.body.scrollTop
          break
        }
        f = f.offsetParent
      } while (f && f != a)
      if (c.opera > 0 || (c.CM > 0 && d(a, 'position') == 'absolute'))
        e.top = e.top - b.body.offsetTop
      for (f = a.offsetParent; f && f != b.body; ) {
        e.left = e.left - f.scrollLeft
        if (!c.opera || f.tagName != 'TR') e.top = e.top - f.scrollTop
        f = f.offsetParent
      }
    }
    return e
  }
  ;/firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Te = +RegExp.$1)
  ;/BIDUBrowser/i.test(navigator.userAgent) && (x.da.Q1 = o)
  var la = navigator.userAgent
  ;/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) &&
    !/chrome/i.test(la) &&
    (x.da.yF = +(RegExp.$1 || RegExp.$2))
  ;/chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Pw = +RegExp.$1)
  x.jc = x.jc || {}
  x.jc.Fb = function(a, b) {
    var c,
      d,
      e = a.length
    if ('function' == typeof b)
      for (d = 0; d < e; d++) {
        c = a[d]
        c = b.call(a, c, d)
        if (c === q) break
      }
    return a
  }
  x.Fb = x.jc.Fb
  x.lang.ba = function() {
    return 'TANGRAM__' + (window[x.ba]._counter++).toString(36)
  }
  window[x.ba]._counter = window[x.ba]._counter || 1
  window[x.ba]._instances = window[x.ba]._instances || {}
  x.lang.At = function(a) {
    return '[object Function]' == Object.prototype.toString.call(a)
  }
  x.lang.Da = function(a) {
    this.ba = a || x.lang.ba()
    window[x.ba]._instances[this.ba] = this
  }
  window[x.ba]._instances = window[x.ba]._instances || {}
  x.lang.Da.prototype.ki = ha(0)
  x.lang.Da.prototype.toString = function() {
    return '[object ' + (this.PQ || 'Object') + ']'
  }
  x.lang.qz = function(a, b) {
    this.type = a
    this.returnValue = o
    this.target = b || p
    this.currentTarget = p
  }
  x.lang.Da.prototype.addEventListener = function(a, b, c) {
    if (x.lang.At(b)) {
      !b.Lj && (b.Lj = {})
      !this.Ki && (this.Ki = {})
      var d = this.Ki,
        e
      if (typeof c == 'string' && c) {
        ;/[^\w\-]/.test(c) && ca('nonstandard key:' + c)
        e = b.lt = c
      }
      a.indexOf('on') != 0 && (a = 'on' + a)
      typeof d[a] != 'object' && (d[a] = {})
      typeof b.Lj[a] != 'object' && (b.Lj[a] = {})
      e = e || x.lang.ba()
      !b.Lj[a].lt && (b.Lj[a].lt = e)
      d[a][e] = b
    }
  }
  x.lang.Da.prototype.removeEventListener = function(a, b) {
    a.indexOf('on') != 0 && (a = 'on' + a)
    if (x.lang.At(b)) {
      if (!b.Lj || !b.Lj[a]) return
      b = b.Lj[a].lt
    } else if (!x.lang.tg(b)) return
    !this.Ki && (this.Ki = {})
    var c = this.Ki
    c[a] && c[a][b] && delete c[a][b]
  }
  x.lang.Da.prototype.dispatchEvent = function(a, b) {
    x.lang.tg(a) && (a = new x.lang.qz(a))
    !this.Ki && (this.Ki = {})
    var b = b || {},
      c
    for (c in b) a[c] = b[c]
    var d = this.Ki,
      e = a.type
    a.target = a.target || this
    a.currentTarget = this
    e.indexOf('on') != 0 && (e = 'on' + e)
    x.lang.At(this[e]) && this[e].apply(this, arguments)
    if (typeof d[e] == 'object') for (c in d[e]) d[e][c].apply(this, arguments)
    return a.returnValue
  }
  x.lang.ua = function(a, b, c) {
    var d,
      e,
      f = a.prototype
    e = new Function()
    e.prototype = b.prototype
    e = a.prototype = new e()
    for (d in f) e[d] = f[d]
    a.prototype.constructor = a
    a.P_ = b.prototype
    if ('string' == typeof c) e.PQ = c
  }
  x.ua = x.lang.ua
  x.lang.Lc = function(a) {
    return window[x.ba]._instances[a] || p
  }
  x.platform = x.platform || {}
  x.platform.vM = /macintosh/i.test(navigator.userAgent)
  x.platform.D3 = /MicroMessenger/i.test(navigator.userAgent)
  x.platform.DM = /windows/i.test(navigator.userAgent)
  x.platform.NY = /x11/i.test(navigator.userAgent)
  x.platform.Qm = /android/i.test(navigator.userAgent)
  ;/android (\d+(\.\d)?)/i.test(navigator.userAgent) &&
    (x.platform.fK = x.fK = RegExp.$1)
  x.platform.HY = /ipad/i.test(navigator.userAgent)
  x.platform.EE = /iphone/i.test(navigator.userAgent)
  function ma(a, b) {
    a.domEvent = b = window.event || b
    a.clientX = b.clientX || b.pageX
    a.clientY = b.clientY || b.pageY
    a.offsetX = b.offsetX || b.layerX
    a.offsetY = b.offsetY || b.layerY
    a.screenX = b.screenX
    a.screenY = b.screenY
    a.ctrlKey = b.ctrlKey || b.metaKey
    a.shiftKey = b.shiftKey
    a.altKey = b.altKey
    if (b.touches) {
      a.touches = []
      for (var c = 0; c < b.touches.length; c++)
        a.touches.push({
          clientX: b.touches[c].clientX,
          clientY: b.touches[c].clientY,
          screenX: b.touches[c].screenX,
          screenY: b.touches[c].screenY,
          pageX: b.touches[c].pageX,
          pageY: b.touches[c].pageY,
          target: b.touches[c].target,
          identifier: b.touches[c].identifier
        })
    }
    if (b.changedTouches) {
      a.changedTouches = []
      for (c = 0; c < b.changedTouches.length; c++)
        a.changedTouches.push({
          clientX: b.changedTouches[c].clientX,
          clientY: b.changedTouches[c].clientY,
          screenX: b.changedTouches[c].screenX,
          screenY: b.changedTouches[c].screenY,
          pageX: b.changedTouches[c].pageX,
          pageY: b.changedTouches[c].pageY,
          target: b.changedTouches[c].target,
          identifier: b.changedTouches[c].identifier
        })
    }
    if (b.targetTouches) {
      a.targetTouches = []
      for (c = 0; c < b.targetTouches.length; c++)
        a.targetTouches.push({
          clientX: b.targetTouches[c].clientX,
          clientY: b.targetTouches[c].clientY,
          screenX: b.targetTouches[c].screenX,
          screenY: b.targetTouches[c].screenY,
          pageX: b.targetTouches[c].pageX,
          pageY: b.targetTouches[c].pageY,
          target: b.targetTouches[c].target,
          identifier: b.targetTouches[c].identifier
        })
    }
    a.rotation = b.rotation
    a.scale = b.scale
    return a
  }
  x.lang.hx = function(a) {
    var b = window[x.ba]
    b.$S && delete b.$S[a]
  }
  x.event = {}
  x.M = x.event.M = function(a, b, c) {
    if (!(a = x.$(a))) return a
    b = b.replace(/^on/, '')
    a.addEventListener
      ? a.addEventListener(b, c, q)
      : a.attachEvent && a.attachEvent('on' + b, c)
    return a
  }
  x.bd = x.event.bd = function(a, b, c) {
    if (!(a = x.$(a))) return a
    b = b.replace(/^on/, '')
    a.removeEventListener
      ? a.removeEventListener(b, c, q)
      : a.detachEvent && a.detachEvent('on' + b, c)
    return a
  }
  x.K.kt = function(a, b) {
    if (!a || !a.className || typeof a.className != 'string') return q
    var c = -1
    try {
      c =
        a.className == b ||
        a.className.search(RegExp('(\\s|^)' + b + '(\\s|$)'))
    } catch (d) {
      return q
    }
    return c > -1
  }
  x.kL = (function() {
    function a(a) {
      document.addEventListener &&
        ((this.element = a),
        (this.nL = this.Ek ? 'touchstart' : 'mousedown'),
        (this.DD = this.Ek ? 'touchmove' : 'mousemove'),
        (this.CD = this.Ek ? 'touchend' : 'mouseup'),
        (this.th = q),
        (this.qu = this.pu = 0),
        this.element.addEventListener(this.nL, this, q),
        ja.M(this.element, 'mousedown', t()),
        this.handleEvent(p))
    }
    a.prototype = {
      Ek: 'ontouchstart' in window || 'createTouch' in document,
      start: function(a) {
        na(a)
        this.th = q
        this.pu = this.Ek ? a.touches[0].clientX : a.clientX
        this.qu = this.Ek ? a.touches[0].clientY : a.clientY
        this.element.addEventListener(this.DD, this, q)
        this.element.addEventListener(this.CD, this, q)
      },
      move: function(a) {
        oa(a)
        var c = this.Ek ? a.touches[0].clientY : a.clientY
        if (
          10 <
            Math.abs((this.Ek ? a.touches[0].clientX : a.clientX) - this.pu) ||
          10 < Math.abs(c - this.qu)
        )
          this.th = o
      },
      end: function(a) {
        oa(a)
        this.th ||
          ((a = document.createEvent('Event')),
          a.initEvent('tap', q, o),
          this.element.dispatchEvent(a))
        this.element.removeEventListener(this.DD, this, q)
        this.element.removeEventListener(this.CD, this, q)
      },
      handleEvent: function(a) {
        if (a)
          switch (a.type) {
            case this.nL:
              this.start(a)
              break
            case this.DD:
              this.move(a)
              break
            case this.CD:
              this.end(a)
          }
      }
    }
    return function(b) {
      return new a(b)
    }
  })()
  var z = window.BMap || {}
  z.version = '2.0'
  var pa = window.BMAP_SECKEY
  window.BMAP_SECKEY = p
  z.$U = 0.34 > Math.random()
  0 <= z.version.indexOf('#') && (z.version = '2.0')
  z.Mr = []
  z.Xe = function(a) {
    this.Mr.push(a)
  }
  z.Cr = []
  z.an = function(a) {
    this.Cr.push(a)
  }
  z.nV =
    z.apiLoad ||
    function() {
      if (z.version && z.version >= 1.5) {
        qa(z.oc + '?qt=verify&v=2.1&ak=' + ra, function(a) {
          if (a && a.error !== 0) {
            if (typeof map !== 'undefined') {
              map.Ka().innerHTML = ''
              map.Ki = {}
            }
            z = p
            var c =
              '\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
            switch (a.error) {
              case 101:
                c =
                  '\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
                break
              case 102:
                c =
                  '\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
            }
            alert(c)
          }
        })
        window.__abbaidu_2063_cb = function(a) {
          pa = JSON.parse(a).data || p
        }
        var a = F('script', { type: 'text/javascript', async: '' })
        a.charset = 'utf-8'
        a.src = 'https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js'
        a.addEventListener
          ? a.addEventListener(
              'load',
              function(a) {
                a = a.target
                a.parentNode.removeChild(a)
              },
              q
            )
          : a.attachEvent &&
            a.attachEvent('onreadystatechange', function() {
              var a = window.event.srcElement
              a &&
                (a.readyState == 'loaded' || a.readyState == 'complete') &&
                a.parentNode.removeChild(a)
            })
        setTimeout(function() {
          document.getElementsByTagName('head')[0].appendChild(a)
          a = p
        }, 1)
      }
    }
  var ra = window.BMAP_AUTHENTIC_KEY
  window.BMAP_AUTHENTIC_KEY = p
  var sa = window.BMap_loadScriptTime,
    ta = new Date().getTime(),
    ua = p,
    va = o,
    wa = 5042,
    xa = 5002,
    ya = 5003,
    za = 'load_mapclick',
    Aa = 5038,
    Ba = 5041,
    Da = 5047,
    Ea = 5036,
    Fa = 5039,
    Ga = 5037,
    Ha = 5040,
    Ia = 5011,
    Ja = 7e3
  var Ka = 0
  window.BMAP_COORD_BD09 = 5
  window.BMAP_COORD_GCJ02 = 3
  function Ma(a, b) {
    if ((a = x.$(a))) {
      var c = this
      x.lang.Da.call(c)
      b = b || {}
      c.B = {
        wk: b.fixedZoomCenter || q,
        yC: 200,
        Gb: o,
        ox: q,
        vD: o,
        Yo: o,
        Zo: b.enableWheelZoom || q,
        iL: o,
        xD: o,
        um: o,
        Ps: o,
        vm: o,
        Wo: b.enable3DBuilding || q,
        Hc: 25,
        H0: 240,
        bV: 450,
        Xb: G.Xb,
        Gd: G.Gd,
        Zx: !!b.Zx,
        fc: Math.round(b.minZoom) || 1,
        Zb: Math.round(b.maxZoom) || 19,
        xb: b.mapType || Na,
        u4: q,
        dL: b.drawer || Ka,
        nx: o,
        lx: 500,
        PW: b.enableHighResolution !== q,
        pj: b.enableMapClick !== q,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        iG: 99,
        ze: b.mapStyle || p,
        VY: b.logoControl === q ? q : o,
        uV: [],
        Iw: b.beforeClickIcon || p,
        rD: b.enableBizAuthLogo === q ? q : o,
        Xw: b.coordsType || 5
      }
      window.GCJMAP = this
      c.B.ze && (this.wY(c.B.ze.controls), this.qM(c.B.ze.geotableId))
      c.B.ze && c.B.ze.styleId && c.n3(c.B.ze.styleId)
      c.B.mm = {
        dark: { backColor: '#2D2D2D', textColor: '#bfbfbf', iconUrl: 'dicons' },
        normal: {
          backColor: '#F3F1EC',
          textColor: '#c61b1b',
          iconUrl: 'icons'
        },
        light: { backColor: '#EBF8FC', textColor: '#017fb4', iconUrl: 'licons' }
      }
      b.enableAutoResize && (c.B.Ps = b.enableAutoResize)
      b.enableStreetEntrance === q && (c.B.vm = b.enableStreetEntrance)
      b.enableDeepZoom === q && (c.B.iL = b.enableDeepZoom)
      var d = c.B.uV
      if (H())
        for (var e = 0, f = d.length; e < f; e++)
          if (x.da[d[e]]) {
            c.B.devicePixelRatio = 1
            break
          }
      d = -1 < navigator.userAgent.toLowerCase().indexOf('android')
      e = -1 < navigator.userAgent.toLowerCase().indexOf('mqqbrowser')
      if (
        -1 < navigator.userAgent.toLowerCase().indexOf('UCBrowser') ||
        (d && e)
      )
        c.B.iG = 99
      c.Ua = a
      c.MB(a)
      a.unselectable = 'on'
      a.innerHTML = ''
      a.appendChild(c.va())
      b.size && this.Ce(b.size)
      d = c.vb()
      c.width = d.width
      c.height = d.height
      c.offsetX = 0
      c.offsetY = 0
      c.platform = a.firstChild
      c.Ae = c.platform.firstChild
      c.Ae.style.width = c.width + 'px'
      c.Ae.style.height = c.height + 'px'
      c.Yd = {}
      c.re = new I(0, 0)
      c.dc = new I(0, 0)
      c.Na = 3
      c.Mc = 0
      c.QC = p
      c.PC = p
      c.Sb = ''
      c.Qw = ''
      c.Sh = {}
      c.Sh.custom = {}
      c.Sa = 0
      b.useWebGL === q && Oa(q)
      c.P = new Pa(a, { of: 'api', eT: o })
      c.P.U()
      c.P.Ny(c)
      b = b || {}
      d = c.xb = c.B.xb
      c.Ld = d.Fm()
      c.B.xb && this.oa().LF(this)
      d === Qa && Sa(xa)
      d === Ta && Sa(ya)
      d = c.B
      d.bP = Math.round(b.minZoom)
      d.aP = Math.round(b.maxZoom)
      c.cv()
      c.R = { Ic: q, kc: 0, Ap: 0, HM: 0, H3: 0, qC: q, qF: -1, Re: [] }
      c.platform.style.cursor = c.B.Xb
      for (e = 0; e < z.Mr.length; e++) z.Mr[e](c)
      c.R.qF = e
      c.ca()
      K.load('map', function() {
        c.Ab()
      })
      c.B.pj &&
        (setTimeout(function() {
          Sa(za)
        }, 1e3),
        K.load(
          'mapclick',
          function() {
            window.MPC_Mgr = window.MPC_Mgr || {}
            window.MPC_Mgr[c.ba] = new Va(c)
          },
          o
        ))
      Wa() &&
        K.load('oppc', function() {
          c.Jz()
        })
      H() &&
        K.load('opmb', function() {
          c.Jz()
        })
      a = p
      c.$B = []
    }
  }
  x.lang.ua(Ma, x.lang.Da, 'Map')
  x.extend(Ma.prototype, {
    va: function() {
      var a = F('div'),
        b = a.style
      b.overflow = 'visible'
      b.position = 'absolute'
      b.zIndex = '0'
      b.top = b.left = '0px'
      var b = F('div', { class: 'BMap_mask' }),
        c = b.style
      c.position = 'absolute'
      c.top = c.left = '0px'
      c.zIndex = '9'
      c.overflow = 'hidden'
      c.WebkitUserSelect = 'none'
      a.appendChild(b)
      return a
    },
    MB: function(a) {
      var b = a.style
      b.overflow = 'hidden'
      'absolute' !== Xa(a).position &&
        ((b.position = 'relative'), (b.zIndex = 0))
      b.backgroundColor = '#F3F1EC'
      b.color = '#000'
      b.textAlign = 'left'
    },
    ca: function() {
      var a = this
      a.Bo = function() {
        var b = a.vb()
        if (a.width !== b.width || a.height !== b.height) {
          var c = new L(a.width, a.height),
            d = new M('onbeforeresize')
          d.size = c
          a.dispatchEvent(d)
          a.mk((b.width - a.width) / 2, (b.height - a.height) / 2)
          a.Ae.style.width = (a.width = b.width) + 'px'
          a.Ae.style.height = (a.height = b.height) + 'px'
          c = new M('onresize')
          c.size = b
          a.dispatchEvent(c)
        }
      }
      a.B.Ps && (a.R.em = setInterval(a.Bo, 80))
    },
    mk: function(a, b, c, d) {
      var e = this.oa().yc(this.ga()),
        f = this.Ld,
        g = o
      c && N.DE(c) && ((this.re = new I(c.lng, c.lat)), (g = q))
      if ((c = c && d ? f.Hk(c, this.Sb) : this.dc))
        if (
          ((this.dc = new I(c.lng + a * e, c.lat - b * e)),
          (a = f.rh(this.dc, this.Sb)) && g)
        )
          this.re = a
    },
    Hg: function(a, b) {
      if (
        Ya(a) &&
        (this.cv(),
        this.dispatchEvent(new M('onzoomstart')),
        (a = this.eo(a).zoom),
        a !== this.Na)
      ) {
        this.Mc = this.Na
        this.Na = a
        var c
        b
          ? (c = new I(Za(cp, me).lng, Za(b, me).lat))
          : this.lh() && (c = this.lh().ia())
        c &&
          ((c = this.Cc(c, this.Mc)),
          this.mk(
            this.width / 2 - c.x,
            this.height / 2 - c.y,
            this.Rb(c, this.Mc),
            o
          ))
        this.dispatchEvent(new M('onzoomstartcode'))
      }
    },
    Oc: function(a) {
      this.Hg(a)
    },
    mG: function(a) {
      this.Hg(this.Na + 1, a)
    },
    nG: function(a) {
      this.Hg(this.Na - 1, a)
    },
    yi: function(a) {
      if (a instanceof N || a instanceof I)
        (a = Za(a, this)),
          (this.dc = this.Ld.Hk(a, this.Sb)),
          (this.re = I.DE(a)
            ? new I(a.lng, a.lat)
            : this.Ld.rh(this.dc, this.Sb))
    },
    yg: function(a, b) {
      a = Math.round(a) || 0
      b = Math.round(b) || 0
      this.mk(-a, -b)
    },
    gs: function(a) {
      a &&
        $a(a.Ie) &&
        (a.Ie(this), this.dispatchEvent(new M('onaddcontrol', a)))
    },
    SN: function(a) {
      a &&
        $a(a.remove) &&
        (a.remove(), this.dispatchEvent(new M('onremovecontrol', a)))
    },
    Eo: function(a) {
      a &&
        $a(a.ra) &&
        (a.ra(this), this.dispatchEvent(new M('onaddcontextmenu', a)))
    },
    Mp: function(a) {
      a &&
        $a(a.remove) &&
        (this.dispatchEvent(new M('onremovecontextmenu', a)), a.remove())
    },
    Ja: function(a) {
      a &&
        $a(a.Ie) &&
        (a.Ie(this), this.dispatchEvent(new M('onaddoverlay', a)))
    },
    Ub: function(a) {
      a &&
        $a(a.remove) &&
        (a.remove(), this.dispatchEvent(new M('onremoveoverlay', a)))
    },
    zK: function() {
      this.dispatchEvent(new M('onclearoverlays'))
    },
    $g: function(a) {
      a && this.dispatchEvent(new M('onaddtilelayer', a))
    },
    Ah: function(a) {
      a && this.dispatchEvent(new M('onremovetilelayer', a))
    },
    Eg: function(a) {
      if (this.xb !== a) {
        var b = new M('onsetmaptype')
        b.l4 = this.xb
        this.xb = this.B.xb = a
        this.Ld = this.xb.Fm()
        this.mk(0, 0, this.wc(), o)
        this.xb.LF(this)
        this.cv()
        var c = this.eo(this.ga()).zoom
        this.Hg(c)
        this.dispatchEvent(b)
        b = new M('onmaptypechange')
        b.Na = c
        b.xb = a
        this.dispatchEvent(b)
        ;(a === ab || a === Ta) && Sa(ya)
      }
    },
    Wf: function(a) {
      var b = this
      if (a instanceof N || a instanceof I)
        (a = new I(Za(a, b).lng, Za(a, b).lat)), b.yi(a, { noAnimation: o })
      else if (bb(a))
        if (b.xb === Qa) {
          var c = G.uC[a]
          c && ((pt = c.m), b.Wf(pt))
        } else {
          var d = this.ZH()
          d.MF(function(c) {
            0 === d.Gm() &&
              2 === d.Ga.result.type &&
              (b.Wf(c.Ck(0).point), Qa.yk(a) && b.GF(a))
          })
          d.search(a, { log: 'center' })
        }
    },
    Ed: function(a, b) {
      '[object Undefined]' !== Object.prototype.toString.call(b) &&
        (b = parseInt(b))
      z.Kn('cus.fire', 'time', { z_loadscripttime: ta - sa })
      var c = this
      if (bb(a))
        if (c.xb === Qa) {
          var d = G.uC[a]
          d && ((pt = d.m), c.Ed(pt, b))
        } else {
          var e = c.ZH()
          e.MF(function(d) {
            if (
              0 === e.Gm() &&
              (2 === e.Ga.result.type || 11 === e.Ga.result.type)
            ) {
              var d = d.Ck(0).point,
                f = b || Q.tx(e.Ga.content.level, c)
              c.Ed(d, f)
              Qa.yk(a) && c.GF(a)
            }
          })
          e.search(a, { log: 'center' })
        }
      else if ((a instanceof I || a instanceof N) && b) {
        var b = c.eo(b).zoom,
          f = Za(a, c)
        c.Mc = c.Na || b
        c.Na = b
        d = c.re
        c.re = new I(f.lng, f.lat)
        c.dc = c.Ld.Hk(c.re, c.Sb)
        c.QC = c.QC || c.Na
        c.PC = c.PC || c.re
        var g = new M('onload'),
          i = new M('onloadcode')
        g.point = new I(f.lng, f.lat)
        g.pixel = c.Cc(c.re, c.Na)
        g.zoom = b
        c.loaded || ((c.loaded = o), c.dispatchEvent(g), ua || (ua = cb()))
        c.dispatchEvent(i)
        f = new M('onmoveend')
        f.BH = 'centerAndZoom'
        d.ab(c.re) || c.dispatchEvent(f)
        c.dispatchEvent(new M('onmoveend'))
        c.Mc !== c.Na &&
          ((d = new M('onzoomend')),
          (d.BH = 'centerAndZoom'),
          c.dispatchEvent(d))
        c.B.Wo && c.Wo()
      }
    },
    ZH: function() {
      this.R.RM || (this.R.RM = new db(1))
      return this.R.RM
    },
    reset: function() {
      this.Ed(this.PC, this.QC, o)
    },
    enableDragging: function() {
      this.B.Gb = o
    },
    disableDragging: function() {
      this.B.Gb = q
    },
    enableInertialDragging: function() {
      this.B.nx = o
    },
    disableInertialDragging: function() {
      this.B.nx = q
    },
    enableScrollWheelZoom: function() {
      this.B.Zo = o
    },
    disableScrollWheelZoom: function() {
      this.B.Zo = q
    },
    enableContinuousZoom: function() {
      this.B.Yo = o
    },
    disableContinuousZoom: function() {
      this.B.Yo = q
    },
    enableDoubleClickZoom: function() {
      this.B.vD = o
    },
    disableDoubleClickZoom: function() {
      this.B.vD = q
    },
    enableKeyboard: function() {
      this.B.ox = o
    },
    disableKeyboard: function() {
      this.B.ox = q
    },
    enablePinchToZoom: function() {
      this.B.um = o
    },
    disablePinchToZoom: function() {
      this.B.um = q
    },
    enableAutoResize: function() {
      this.B.Ps = o
      this.Bo()
      this.R.em || (this.R.em = setInterval(this.Bo, 80))
    },
    disableAutoResize: function() {
      this.B.Ps = q
      this.R.em && (clearInterval(this.R.em), (this.R.em = p))
    },
    enableBizAuthLogo: function() {
      this.B.rD = o
      this.Jw && this.Jw.show()
    },
    disableBizAuthLogo: function() {
      this.B.rD = q
      this.Jw && this.Jw.U()
    },
    Wo: function() {
      this.B.Wo = o
      this.Sn || ((this.Sn = new eb({ rL: o })), this.$g(this.Sn))
    },
    yW: function() {
      this.B.Wo = q
      this.Sn && (this.Ah(this.Sn), (this.Sn = p), delete this.Sn)
    },
    vb: function() {
      return this.As && this.As instanceof L
        ? new L(this.As.width, this.As.height)
        : new L(this.Ua.clientWidth, this.Ua.clientHeight)
    },
    Ce: function(a) {
      a && a instanceof L
        ? ((this.As = a),
          (this.Ua.style.width = a.width + 'px'),
          (this.Ua.style.height = a.height + 'px'))
        : (this.As = p)
    },
    wc: v('re'),
    pc: function() {
      return fb(this.re, this)
    },
    ga: v('Na'),
    PV: function() {
      this.Bo()
    },
    eo: function(a) {
      var b = this.B.fc,
        c = this.B.Zb,
        d = q,
        a = Math.round(a)
      a < b && ((d = o), (a = b))
      a > c && ((d = o), (a = c))
      return { zoom: a, ED: d }
    },
    Ka: v('Ua'),
    Cc: function(a, b) {
      b = b || this.ga()
      return this.Ld.Kp(a, b, this.dc, this.vb(), this.Sb)
    },
    Kp: function(a, b) {
      b = b || this.ga()
      if (a && (a instanceof N || a instanceof I))
        return (a = Za(a, this)), this.Ld.Kp(a, b, this.dc, this.vb(), this.Sb)
    },
    Rb: function(a, b) {
      b = b || this.ga()
      return this.Ld.zg(a, b, this.dc, this.vb(), this.Sb)
    },
    zg: function(a, b) {
      b = b || this.ga()
      return fb(this.Rb(a, b), this)
    },
    We: function(a, b) {
      if (a) {
        var a = Za(a, this),
          c = this.Cc(new I(a.lng, a.lat), b)
        c.x -= this.offsetX
        c.y -= this.offsetY
        return c
      }
    },
    GT: function(a, b) {
      if (a) {
        var c = new S(a.x, a.y)
        c.x += this.offsetX
        c.y += this.offsetY
        return this.Rb(c, b)
      }
    },
    FN: function(a, b) {
      if (a) {
        var c = new S(a.x, a.y)
        c.x += this.offsetX
        c.y += this.offsetY
        return this.zg(c, b)
      }
    },
    pointToPixelFor3D: function(a, b) {
      var c = map.Sb
      this.xb === Qa && c && gb.FK(a, this, b)
    },
    f4: function(a, b) {
      var c = map.Sb
      this.xb === Qa && c && gb.EK(a, this, b)
    },
    g4: function(a, b) {
      var c = this,
        d = map.Sb
      c.xb === Qa &&
        d &&
        gb.FK(a, c, function(a) {
          a.x -= c.offsetX
          a.y -= c.offsetY
          b && b(a)
        })
    },
    d4: function(a, b) {
      var c = map.Sb
      this.xb === Qa &&
        c &&
        ((a.x += this.offsetX), (a.y += this.offsetY), gb.EK(a, this, b))
    },
    Id: function(a) {
      if (!this.Yx()) return new hb()
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || p,
        b = this.zg({ x: a[3], y: this.height - a[2] }, c),
        a = this.zg({ x: this.width - a[1], y: a[0] }, c)
      return new hb(b, a)
    },
    Yx: function() {
      return !!this.loaded
    },
    gS: function(a, b) {
      for (
        var c = this.oa(),
          d = b.margins || [10, 10, 10, 10],
          e = b.zoomFactor || 0,
          f = d[1] + d[3],
          d = d[0] + d[2],
          g = c.gp(),
          i = (c = c.Bm());
        i >= g;
        i--
      ) {
        var k = this.oa().yc(i)
        if (a.aG().lng / k < this.width - f && a.aG().lat / k < this.height - d)
          break
      }
      i += e
      i < g && (i = g)
      i > c && (i = c)
      return i
    },
    jt: function(a, b) {
      var c = { center: this.wc(), zoom: this.ga() }
      if (
        !a ||
        (!a instanceof hb && 0 === a.length) ||
        (a instanceof hb && a.Bj())
      )
        return c
      var d = []
      a instanceof hb
        ? (d.push(Za(a.pf(), this)), d.push(Za(a.xe(), this)))
        : (d = a.slice(0))
      for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)
        e.push(this.Ld.Hk(Za(d[f], this), this.Sb))
      d = new hb()
      for (f = e.length - 1; 0 <= f; f--) d.extend(e[f])
      if (d.Bj()) return c
      c = d.pc()
      e = this.gS(d, b)
      b.margins &&
        ((d = b.margins),
        (f = (d[1] - d[3]) / 2),
        (d = (d[0] - d[2]) / 2),
        (g = this.oa().yc(e)),
        b.offset && ((f = b.offset.width), (d = b.offset.height)),
        (c.lng += g * f),
        (c.lat += g * d))
      c = this.Ld.rh(c, this.Sb)
      return { center: fb(c, this), zoom: e }
    },
    Dh: function(a, b) {
      var c
      c = a && a.center ? a : this.jt(a, b)
      var b = b || {},
        d = b.delay || 200
      if (c.zoom === this.Na && b.enableAnimation !== q) {
        var e = this
        setTimeout(function() {
          e.yi(c.center, { duration: 210 })
        }, d)
      } else this.Ed(c.center, c.zoom)
    },
    Rf: v('Yd'),
    lh: function() {
      return this.R.ob && this.R.ob.Va() ? this.R.ob : p
    },
    getDistance: function(a, b) {
      if (a && b) {
        if (a.ab(b)) return 0
        var a = Za(a, this),
          b = Za(b, this),
          c = 0,
          c = T.ep(a, b)
        if (c === p || c === j) c = 0
        return c
      }
    },
    Ix: function() {
      var a = [],
        b = this.wa,
        c = this.Fe
      if (b) for (var d in b) b[d] instanceof ib && a.push(b[d])
      if (c) {
        d = 0
        for (b = c.length; d < b; d++) a.push(c[d])
      }
      return a
    },
    oa: function() {
      this.xb.LF(this)
      return this.xb
    },
    Jz: function() {
      for (var a = this.R.qF; a < z.Mr.length; a++) z.Mr[a](this)
      this.R.qF = a
    },
    GF: function(a) {
      this.Sb = Qa.yk(a)
      this.Qw = Qa.DL(this.Sb)
      this.xb === Qa && this.Ld instanceof jb && (this.Ld.ij = this.Sb)
    },
    setDefaultCursor: function(a) {
      this.B.Xb = a
      this.platform && (this.platform.style.cursor = this.B.Xb)
    },
    getDefaultCursor: function() {
      return this.B.Xb
    },
    setDraggingCursor: function(a) {
      this.B.Gd = a
    },
    getDraggingCursor: function() {
      return this.B.Gd
    },
    Tx: function() {
      return this.B.PW && 1.5 <= this.B.devicePixelRatio
    },
    Aw: function(a, b) {
      b ? this.Sh[b] || (this.Sh[b] = {}) : (b = 'custom')
      a.tag = b
      a instanceof kb && ((this.Sh[b][a.ba] = a), a.ra(this))
      var c = this
      K.load(
        'hotspot',
        function() {
          c.Jz()
        },
        o
      )
    },
    GZ: function(a, b) {
      b || (b = 'custom')
      this.Sh[b][a.ba] && delete this.Sh[b][a.ba]
    },
    km: function(a) {
      a || (a = 'custom')
      this.Sh[a] = {}
    },
    cv: function() {
      var a = this.xb.gp(),
        b = this.xb.Bm(),
        c = this.B
      c.fc = c.bP || a
      c.Zb = c.aP || b
      c.fc < a && (c.fc = a)
      c.Zb > b && (c.Zb = b)
    },
    setMinZoom: function(a) {
      a = Math.round(a)
      a > this.B.Zb && (a = this.B.Zb)
      this.B.bP = a
      this.IJ()
    },
    setMaxZoom: function(a) {
      a = Math.round(a)
      a < this.B.fc && (a = this.B.fc)
      this.B.aP = a
      this.IJ()
    },
    IJ: function() {
      this.cv()
      var a = this.B
      this.Na < a.fc ? this.Oc(a.fc) : this.Na > a.Zb && this.Oc(a.Zb)
      var b = new M('onzoomspanchange')
      b.fc = a.fc
      b.Zb = a.Zb
      this.dispatchEvent(b)
    },
    p3: v('$B'),
    getKey: function() {
      return ra
    },
    au: function(a) {
      var b = this
      window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close()
      b.B.pj = q
      z.Kn('cus.fire', 'count', 'z_setmapstylecount')
      if (a) {
        b = this
        a.styleJson && (a.styleStr = b.M_(a.styleJson))
        H() && x.da.yF
          ? setTimeout(function() {
              b.B.ze = a
              b.dispatchEvent(new M('onsetcustomstyles', a))
            }, 50)
          : ((this.B.ze = a),
            this.dispatchEvent(new M('onsetcustomstyles', a)),
            this.qM(b.B.ze.geotableId))
        var c = { style: a.style }
        a.features && 0 < a.features.length && (c.features = o)
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = o)
        Sa(5050, c)
        a.style &&
          (c = b.B.mm[a.style]
            ? b.B.mm[a.style].backColor
            : b.B.mm.normal.backColor) &&
          (this.Ka().style.backgroundColor = c)
      }
    },
    wY: function(a) {
      this.controls ||
        (this.controls = {
          navigationControl: new lb(),
          scaleControl: new mb(),
          overviewMapControl: new nb(),
          mapTypeControl: new ob()
        })
      var b = this,
        c
      for (c in this.controls) b.SN(b.controls[c])
      a = a || []
      x.jc.Fb(a, function(a) {
        b.gs(b.controls[a])
      })
    },
    qM: function(a) {
      a
        ? (this.ys && this.ys.Bf === a) ||
          (this.Ah(this.ys),
          (this.ys = new pb({ geotableId: a })),
          this.$g(this.ys))
        : this.Ah(this.ys)
    },
    Wb: function() {
      var a = this.ga() >= this.B.iG && this.oa() === Na && 18 >= this.ga(),
        b = q
      try {
        document.createElement('canvas').getContext('2d'), (b = o)
      } catch (c) {
        b = q
      }
      return a && b
    },
    getCurrentCity: function() {
      return { name: this.bh, code: this.js }
    },
    Cm: function() {
      this.P.ko()
      return this.P
    },
    setPanorama: function(a) {
      this.P = a
      this.P.Ny(this)
    },
    M_: function(a) {
      for (
        var b = {
            featureType: 't',
            elementType: 'e',
            visibility: 'v',
            color: 'c',
            lightness: 'l',
            saturation: 's',
            weight: 'w',
            zoom: 'z',
            hue: 'h'
          },
          c = {
            all: 'all',
            geometry: 'g',
            'geometry.fill': 'g.f',
            'geometry.stroke': 'g.s',
            labels: 'l',
            'labels.text.fill': 'l.t.f',
            'labels.text.stroke': 'l.t.s',
            'lables.text': 'l.t',
            'labels.icon': 'l.i'
          },
          d = [],
          e = 0,
          f;
        (f = a[e]);
        e++
      ) {
        var g = f.stylers
        delete f.stylers
        x.extend(f, g)
        var g = [],
          i
        for (i in b)
          if (f[i])
            if ('elementType' === i) g.push(b[i] + ':' + c[f[i]])
            else {
              switch (f[i]) {
                case 'poilabel':
                  f[i] = 'poi'
                  break
                case 'districtlabel':
                  f[i] = 'label'
              }
              g.push(b[i] + ':' + f[i])
            }
        2 < g.length && d.push(g.join('|'))
      }
      return d.join(',')
    },
    f_: function(a) {
      this.B.hL = a
    }
  })
  function Sa(a, b) {
    if (a) {
      var b = b || {},
        c = '',
        d
      for (d in b) c = c + '&' + d + '=' + encodeURIComponent(b[d])
      var e = function(a) {
          a &&
            ((qb = o),
            setTimeout(function() {
              rb.src = z.oc + 'images/blank.gif?' + a.src
            }, 50))
        },
        f = function() {
          var a = sb.shift()
          a && e(a)
        }
      d = (1e8 * Math.random()).toFixed(0)
      qb
        ? sb.push({
            src:
              'product=jsapi&sub_product=jsapi&v=' +
              z.version +
              '&sub_product_v=' +
              z.version +
              '&t=' +
              d +
              '&code=' +
              a +
              '&da_src=' +
              a +
              c
          })
        : e({
            src:
              'product=jsapi&sub_product=jsapi&v=' +
              z.version +
              '&sub_product_v=' +
              z.version +
              '&t=' +
              d +
              '&code=' +
              a +
              '&da_src=' +
              a +
              c
          })
      tb ||
        (x.M(rb, 'load', function() {
          qb = q
          f()
        }),
        x.M(rb, 'error', function() {
          qb = q
          f()
        }),
        (tb = o))
    }
  }
  var qb,
    tb,
    sb = [],
    rb = new Image()
  Sa(5e3, {
    device_pixel_ratio: window.devicePixelRatio,
    platform: navigator.platform
  })
  z.kM = {
    TILE_BASE_URLS: [
      'gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu'
    ],
    TILE_ONLINE_URLS: [
      'maponline0.bdimg.com',
      'maponline1.bdimg.com',
      'maponline2.bdimg.com',
      'maponline3.bdimg.com'
    ],
    TIlE_PERSPECT_URLS: [
      'gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a'
    ],
    geolocControl: 'gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3',
    TILES_YUN_HOST: [
      'gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy'
    ],
    traffic: 'its.map.baidu.com',
    iw_pano: 'gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_',
    message: 'gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K',
    baidumap: 'gsp0.baidu.com/80MWsjip0QIZ8tyhnq',
    wuxian: 'gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a',
    pano: [
      'gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_',
      'gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_',
      'gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_'
    ],
    main_domain_nocdn: {
      baidu: 'gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3',
      other: 'api.map.baidu.com'
    },
    main_domain_cdn: {
      baidu: [
        'gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv',
        'gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv',
        'gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv'
      ],
      other: ['api.map.baidu.com'],
      webmap: ['gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv']
    },
    map_click: 'gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK',
    vector_traffic: 'gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a'
  }
  z.qY = {
    TILE_BASE_URLS: [
      'shangetu0.map.bdimg.com',
      'shangetu1.map.bdimg.com',
      'shangetu2.map.bdimg.com',
      'shangetu3.map.bdimg.com',
      'shangetu4.map.bdimg.com'
    ],
    TILE_ONLINE_URLS: [
      'maponline0.bdimg.com',
      'maponline1.bdimg.com',
      'maponline2.bdimg.com',
      'maponline3.bdimg.com'
    ],
    TIlE_PERSPECT_URLS: [
      'd0.map.baidu.com',
      'd1.map.baidu.com',
      'd2.map.baidu.com',
      'd3.map.baidu.com'
    ],
    geolocControl: 'loc.map.baidu.com',
    TILES_YUN_HOST: [
      'g0.api.map.baidu.com',
      'g1.api.map.baidu.com',
      'g2.api.map.baidu.com',
      'g3.api.map.baidu.com'
    ],
    traffic: 'its.map.baidu.com',
    iw_pano: 'pcsv0.map.bdimg.com',
    message: 'j.map.baidu.com',
    baidumap: 'map.baidu.com',
    wuxian: 'wuxian.baidu.com',
    pano: ['pcsv0.map.bdimg.com', 'pcsv1.map.bdimg.com', 'pcsv2.map.bdimg.com'],
    main_domain_nocdn: { baidu: 'api.map.baidu.com' },
    main_domain_cdn: {
      baidu: ['api0.map.bdimg.com', 'api1.map.bdimg.com', 'api2.map.bdimg.com'],
      webmap: ['webmap0.map.bdimg.com']
    },
    map_click: 'mapclick.map.baidu.com',
    vector_traffic: 'or.map.bdimg.com'
  }
  z.o0 = {
    '0': { proto: 'http://', domain: z.qY },
    1: { proto: 'https://', domain: z.kM },
    2: { proto: 'https://', domain: z.kM }
  }
  z.fz = window.HOST_TYPE || '0'
  z.url = z.o0[z.fz]
  z.Dp = z.url.proto + z.url.domain.baidumap + '/'
  z.oc =
    z.url.proto +
    ('2' == z.fz
      ? z.url.domain.main_domain_nocdn.other
      : z.url.domain.main_domain_nocdn.baidu) +
    '/'
  z.la =
    z.url.proto +
    ('2' == z.fz
      ? z.url.domain.main_domain_cdn.other[0]
      : z.url.domain.main_domain_cdn.baidu[0]) +
    '/'
  z.gj = ''
  z.sg = function(a, b) {
    var c,
      d,
      b = b || ''
    switch (a) {
      case 'main_domain_nocdn':
        c = z.oc + b
        break
      case 'main_domain_cdn':
        c = z.la + b
        break
      default:
        ;(d = z.url.domain[a]),
          '[object Array]' == Object.prototype.toString.call(d)
            ? ((c = []),
              x.jc.Fb(d, function(a, d) {
                c[d] = z.url.proto + a + '/' + b
              }))
            : (c = z.url.proto + z.url.domain[a] + '/' + b)
    }
    return c
  }
  function ub(a) {
    var b = { duration: 1e3, Hc: 30, So: 0, hc: vb.PM, Mt: t() }
    this.Zf = []
    if (a) for (var c in a) b[c] = a[c]
    this.k = b
    if (Ya(b.So)) {
      var d = this
      setTimeout(function() {
        d.start()
      }, b.So)
    } else b.So != wb && this.start()
  }
  var wb = 'INFINITE'
  ub.prototype.start = function() {
    this.Uu = cb()
    this.mA = this.Uu + this.k.duration
    xb(this)
  }
  ub.prototype.add = function(a) {
    this.Zf.push(a)
  }
  function xb(a) {
    var b = cb()
    b >= a.mA
      ? ($a(a.k.va) && a.k.va(a.k.hc(1)),
        $a(a.k.finish) && a.k.finish(),
        0 < a.Zf.length &&
          ((b = a.Zf[0]), (b.Zf = [].concat(a.Zf.slice(1))), b.start()))
      : ((a.Ky = a.k.hc((b - a.Uu) / a.k.duration)),
        $a(a.k.va) && a.k.va(a.Ky),
        a.VF ||
          (a.cs = setTimeout(function() {
            xb(a)
          }, 1e3 / a.k.Hc)))
  }
  ub.prototype.stop = function(a) {
    this.VF = o
    for (var b = 0; b < this.Zf.length; b++) this.Zf[b].stop(), (this.Zf[b] = p)
    this.Zf.length = 0
    this.cs && (clearTimeout(this.cs), (this.cs = p))
    this.k.Mt(this.Ky)
    a && ((this.mA = this.Uu), xb(this))
  }
  ub.prototype.cancel = ha(1)
  var vb = {
    PM: function(a) {
      return a
    },
    reverse: function(a) {
      return 1 - a
    },
    pD: function(a) {
      return a * a
    },
    oD: function(a) {
      return Math.pow(a, 3)
    },
    Ns: function(a) {
      return -(a * (a - 2))
    },
    fL: function(a) {
      return Math.pow(a - 1, 3) + 1
    },
    eL: function(a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
    },
    r2: function(a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
    },
    s2: function(a) {
      return (1 - Math.cos(Math.PI * a)) / 2
    }
  }
  vb['ease-in'] = vb.pD
  vb['ease-out'] = vb.Ns
  var G = {
    qG: 34,
    rG: 21,
    sG: new L(21, 32),
    sP: new L(10, 32),
    rP: new L(24, 36),
    qP: new L(12, 36),
    oG: new L(13, 1),
    qa: z.la + 'images/',
    y3: 'http://api0.map.bdimg.com/images/',
    pG: z.la + 'images/markers_new.png',
    oP: 24,
    pP: 73,
    uC: {
      北京: { By: 'bj', m: new I(116.403874, 39.914889) },
      上海: { By: 'sh', m: new I(121.487899, 31.249162) },
      深圳: { By: 'sz', m: new I(114.025974, 22.546054) },
      广州: { By: 'gz', m: new I(113.30765, 23.120049) }
    },
    fontFamily: 'arial,sans-serif'
  }
  x.da.Te
    ? (x.extend(G, {
        UK: 'url(' + G.qa + 'ruler.cur),crosshair',
        Xb: '-moz-grab',
        Gd: '-moz-grabbing'
      }),
      x.platform.DM && (G.fontFamily = 'arial,simsun,sans-serif'))
    : x.da.Pw || x.da.yF
    ? x.extend(G, {
        UK: 'url(' + G.qa + 'ruler.cur) 2 6,crosshair',
        Xb: 'url(' + G.qa + 'openhand.cur) 8 8,default',
        Gd: 'url(' + G.qa + 'closedhand.cur) 8 8,move'
      })
    : x.extend(G, {
        UK: 'url(' + G.qa + 'ruler.cur),crosshair',
        Xb: 'url(' + G.qa + 'openhand.cur),default',
        Gd: 'url(' + G.qa + 'closedhand.cur),move'
      })
  function yb(a, b) {
    var c = a.style
    c.left = b[0] + 'px'
    c.top = b[1] + 'px'
  }
  function zb(a) {
    0 < x.da.ma ? (a.unselectable = 'on') : (a.style.MozUserSelect = 'none')
  }
  function Ab(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType
  }
  function Bb(a, b) {
    x.K.Wx(a, 'beforeEnd', b)
    return a.lastChild
  }
  function Cb(a) {
    for (var b = { left: 0, top: 0 }; a && a.offsetParent; )
      (b.left += a.offsetLeft), (b.top += a.offsetTop), (a = a.offsetParent)
    return b
  }
  function na(a) {
    a = window.event || a
    a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = o)
  }
  function Db(a) {
    a = window.event || a
    a.preventDefault ? a.preventDefault() : (a.returnValue = q)
    return q
  }
  function oa(a) {
    na(a)
    return Db(a)
  }
  function Fb() {
    var a = document.documentElement,
      b = document.body
    return a && (a.scrollTop || a.scrollLeft)
      ? [a.scrollTop, a.scrollLeft]
      : b
      ? [b.scrollTop, b.scrollLeft]
      : [0, 0]
  }
  function Gb(a, b) {
    if (a && b)
      return Math.round(
        Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      )
  }
  function Hb(a, b) {
    var c = [],
      b =
        b ||
        function(a) {
          return a
        },
      d
    for (d in a) c.push(d + '=' + b(a[d]))
    return c.join('&')
  }
  function F(a, b, c) {
    var d = document.createElement(a)
    c && (d = document.createElementNS(c, a))
    return x.K.FF(d, b || {})
  }
  function Xa(a) {
    if (a.currentStyle) return a.currentStyle
    if (a.ownerDocument && a.ownerDocument.defaultView)
      return a.ownerDocument.defaultView.getComputedStyle(a, p)
  }
  function $a(a) {
    return 'function' === typeof a
  }
  function Ya(a) {
    return 'number' === typeof a
  }
  function bb(a) {
    return 'string' == typeof a
  }
  function Ib(a) {
    return 'undefined' != typeof a
  }
  function Jb(a) {
    return 'object' == typeof a
  }
  var Kb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  function Lb(a) {
    var b = '',
      c,
      d,
      e = '',
      f,
      g = '',
      i = 0
    f = /[^A-Za-z0-9\+\/\=]/g
    if (!a || f.exec(a)) return a
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, '')
    do
      (c = Kb.indexOf(a.charAt(i++))),
        (d = Kb.indexOf(a.charAt(i++))),
        (f = Kb.indexOf(a.charAt(i++))),
        (g = Kb.indexOf(a.charAt(i++))),
        (c = (c << 2) | (d >> 4)),
        (d = ((d & 15) << 4) | (f >> 2)),
        (e = ((f & 3) << 6) | g),
        (b += String.fromCharCode(c)),
        64 != f && (b += String.fromCharCode(d)),
        64 != g && (b += String.fromCharCode(e))
    while (i < a.length)
    return b
  }
  var M = x.lang.qz
  function H() {
    return !(!x.platform.EE && !x.platform.HY && !x.platform.Qm)
  }
  function Wa() {
    return !(!x.platform.DM && !x.platform.vM && !x.platform.NY)
  }
  function cb() {
    return new Date().getTime()
  }
  function Mb() {
    var a = document.body.appendChild(F('div'))
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />'
    var b = a.firstChild
    if (!b.style) return q
    b.style.behavior = 'url(#default#VML)'
    b = b ? 'object' === typeof b.adj : o
    a.parentNode.removeChild(a)
    return b
  }
  function Nb() {
    return !!document.implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#Shape',
      '1.1'
    )
  }
  function Ob() {
    return !!F('canvas').getContext
  }
  function Pb(a) {
    return (a * Math.PI) / 180
  }
  z.UY = (function() {
    var a = o,
      b = o,
      c = o,
      d = o,
      e = 0,
      f = 0,
      g = 0,
      i = 0
    return {
      $Q: function() {
        e += 1
        a &&
          ((a = q),
          setTimeout(function() {
            Sa(5054, { pic: e })
            a = o
            e = 0
          }, 1e4))
      },
      a1: function() {
        f += 1
        b &&
          ((b = q),
          setTimeout(function() {
            Sa(5055, { move: f })
            b = o
            f = 0
          }, 1e4))
      },
      c1: function() {
        g += 1
        c &&
          ((c = q),
          setTimeout(function() {
            Sa(5056, { zoom: g })
            c = o
            g = 0
          }, 1e4))
      },
      b1: function(a) {
        i += a
        d &&
          ((d = q),
          setTimeout(function() {
            Sa(5057, { tile: i })
            d = o
            i = 0
          }, 5e3))
      }
    }
  })()
  z.pq = { EG: '#83a1ff', rq: '#808080' }
  function Sb(a, b, c) {
    b.Vm || ((b.Vm = []), (b.handle = {}))
    b.Vm.push({ filter: c, wm: a })
    b.addEventListener ||
      (b.addEventListener = function(a, c) {
        b.attachEvent('on' + a, c)
      })
    b.handle.click ||
      (b.addEventListener(
        'click',
        function(a) {
          for (var c = a.target || a.srcElement; c != b; ) {
            Tb(b.Vm, function(b, g) {
              RegExp(g.filter).test(c.getAttribute('filter')) &&
                g.wm.call(c, a, c.getAttribute('filter'))
            })
            c = c.parentNode
          }
        },
        q
      ),
      (b.handle.click = o))
  }
  function Tb(a, b) {
    for (var c = 0, d = a.length; c < d; c++) b(c, a[c])
  }
  void (function(a, b, c) {
    void (function(a, b, c) {
      function g(a) {
        if (!a.Ro) {
          for (var c = o, d = [], f = a.KZ, i = 0; f && i < f.length; i++) {
            var k = f[i],
              l = (aa[k] = aa[k] || {})
            if (l.Ro || l == a) d.push(l.Lc)
            else {
              c = q
              if (
                !l.rW &&
                ((k = (La.get('alias') || {})[k] || k + '.js'), !J[k])
              ) {
                J[k] = o
                var m = b.createElement('script'),
                  n = b.getElementsByTagName('script')[0]
                m.async = o
                m.src = k
                n.parentNode.insertBefore(m, n)
              }
              l.hz = l.hz || {}
              l.hz[a.name] = a
            }
          }
          if (c) {
            a.Ro = o
            a.MK && (a.Lc = a.MK.apply(a, d))
            for (var s in a.hz) g(a.hz[s])
          }
        }
      }
      function i(a) {
        return (a || new Date()) - E
      }
      function k(a, b, c) {
        if (a) {
          'string' == typeof a && ((c = b), (b = a), (a = O))
          try {
            a == O
              ? ((P[b] = P[b] || []), P[b].unshift(c))
              : a.addEventListener
              ? a.addEventListener(b, c, q)
              : a.attachEvent && a.attachEvent('on' + b, c)
          } catch (d) {}
        }
      }
      function l(a, b, c) {
        if (a) {
          'string' == typeof a && ((c = b), (b = a), (a = O))
          try {
            if (a == O) {
              var d = P[b]
              if (d) for (var e = d.length; e--; ) d[e] === c && d.splice(e, 1)
            } else
              a.removeEventListener
                ? a.removeEventListener(b, c, q)
                : a.detachEvent && a.detachEvent('on' + b, c)
          } catch (f) {}
        }
      }
      function m(a) {
        var b = P[a],
          c = 0
        if (b) {
          for (var d = [], e = arguments, f = 1; f < e.length; f++) d.push(e[f])
          for (f = b.length; f--; ) b[f].apply(this, d) && c++
          return c
        }
      }
      function n(a, b) {
        if (a && b) {
          var c = new Image(1, 1),
            d = [],
            e = 'img_' + +new Date(),
            f
          for (f in b) b[f] && d.push(f + '=' + encodeURIComponent(b[f]))
          O[e] = c
          c.onload = c.onerror = function() {
            O[e] = c = c.onload = c.onerror = p
            delete O[e]
          }
          c.src = a + '?' + d.join('&')
        }
      }
      function s() {
        var a = arguments,
          b = a[0]
        if (this.LK || /^(on|un|set|get|create)$/.test(b)) {
          for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++)
            c.push(a[d])
          'function' == typeof b && b.apply(this, c)
        } else this.kK.push(a)
      }
      function u(a, b) {
        var c = {},
          d
        for (d in a) a.hasOwnProperty(d) && (c[d] = a[d])
        for (d in b) b.hasOwnProperty(d) && (c[d] = b[d])
        return c
      }
      function w(a) {
        this.name = a
        this.Ss = { protocolParameter: { postUrl: p, protocolParameter: p } }
        this.kK = []
        this.alog = O
      }
      function y(a) {
        a = a || 'default'
        if ('*' == a) {
          var a = [],
            b
          for (b in R) a.push(R[b])
          return a
        }
        ;(b = R[a]) || (b = R[a] = new w(a))
        return b
      }
      var B = c.alog
      if (!B || !B.Ro) {
        var A = b.all && a.attachEvent,
          E = (B && B.NE) || +new Date(),
          C =
            a.K3 ||
            (+new Date()).toString(36) +
              Math.random()
                .toString(36)
                .substr(2, 3),
          D = 0,
          J = {},
          O = function(a) {
            var b = arguments,
              c,
              d,
              e,
              f
            if ('define' == a || 'require' == a) {
              for (d = 1; d < b.length; d++)
                switch (typeof b[d]) {
                  case 'string':
                    c = b[d]
                    break
                  case 'object':
                    e = b[d]
                    break
                  case 'function':
                    f = b[d]
                }
              'require' == a && (c && !e && (e = [c]), (c = p))
              c = !c ? '#' + D++ : c
              d = aa[c] = aa[c] || {}
              d.Ro ||
                ((d.name = c),
                (d.KZ = e),
                (d.MK = f),
                'define' == a && (d.rW = o),
                g(d))
            } else
              'function' == typeof a
                ? a(O)
                : ('' + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(
                    a,
                    c,
                    d
                  ) {
                    b[0] = d
                    s.apply(O.dG(c), b)
                  })
          },
          P = {},
          R = {},
          aa = { L1: { name: 'alog', Ro: o, Lc: O } }
        w.prototype.start = w.prototype.create = function(a) {
          if (!this.LK) {
            'object' == typeof a && this.set(a)
            this.LK = new Date()
            for (this.Ts('create', this); (a = this.kK.shift()); )
              s.apply(this, a)
          }
        }
        w.prototype.send = function(a, b) {
          var c = u({ ts: i().toString(36), t: a, sid: C }, this.Ss)
          if ('object' == typeof b) c = u(c, b)
          else {
            var d = arguments
            switch (a) {
              case 'pageview':
                d[1] && (c.page = d[1])
                d[2] && (c.title = d[2])
                break
              case 'event':
                d[1] && (c.eventCategory = d[1])
                d[2] && (c.eventAction = d[2])
                d[3] && (c.eventLabel = d[3])
                d[4] && (c.eventValue = d[4])
                break
              case 'timing':
                d[1] && (c.timingCategory = d[1])
                d[2] && (c.timingVar = d[2])
                d[3] && (c.timingValue = d[3])
                d[4] && (c.timingLabel = d[4])
                break
              case 'exception':
                d[1] && (c.exDescription = d[1])
                d[2] && (c.exFatal = d[2])
                break
              default:
                return
            }
          }
          this.Ts('send', c)
          var e
          if ((d = this.Ss.protocolParameter)) {
            var f = {}
            for (e in c) d[e] !== p && (f[d[e] || e] = c[e])
            e = f
          } else e = c
          n(this.Ss.postUrl, e)
        }
        w.prototype.set = function(a, b) {
          if ('string' == typeof a)
            'protocolParameter' == a &&
              (b = u({ postUrl: p, protocolParameter: p }, b)),
              (this.Ss[a] = b)
          else if ('object' == typeof a) for (var c in a) this.set(c, a[c])
        }
        w.prototype.get = function(a, b) {
          var c = this.Ss[a]
          'function' == typeof b && b(c)
          return c
        }
        w.prototype.Ts = function(a, b) {
          return O.Ts(this.name + '.' + a, b)
        }
        w.prototype.M = function(a, b) {
          O.M(this.name + '.' + a, b)
        }
        w.prototype.bd = function(a, b) {
          O.bd(this.name + '.' + a, b)
        }
        O.name = 'alog'
        O.uO = C
        O.Ro = o
        O.timestamp = i
        O.bd = l
        O.M = k
        O.Ts = m
        O.dG = y
        O('init')
        var ba = w.prototype
        U(ba, {
          start: ba.start,
          create: ba.create,
          send: ba.send,
          set: ba.set,
          get: ba.get,
          on: ba.M,
          un: ba.bd,
          fire: ba.Ts
        })
        var La = y()
        La.set('protocolParameter', { K1: p })
        if (B) {
          ba = [].concat(B.yb || [], B.gn || [])
          B.yb = B.gn = p
          for (var Ra in O) O.hasOwnProperty(Ra) && (B[Ra] = O[Ra])
          O.yb = O.gn = {
            push: function(a) {
              O.apply(O, a)
            }
          }
          for (B = 0; B < ba.length; B++) O.apply(O, ba[B])
        }
        c.alog = O
        A &&
          k(b, 'mouseup', function(a) {
            a = a.target || a.srcElement
            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
          })
        var Ua = q
        a.onerror = function(a, b, d, e) {
          var g = o
          !b && /^script error/i.test(a) && (Ua ? (g = q) : (Ua = o))
          g &&
            c.alog('exception.send', 'exception', {
              Jt: a,
              ME: b,
              Ft: d,
              ls: e
            })
          return q
        }
        c.alog('exception.on', 'catch', function(a) {
          c.alog('exception.send', 'exception', {
            Jt: a.Jt,
            ME: a.path,
            Ft: a.Ft,
            method: a.method,
            tL: 'catch'
          })
        })
      }
    })(a, b, c)
    void (function(a, b, c) {
      var g = '18_1'
      H() && (g = '18_2')
      var i = 'http://static.tieba.baidu.com'
      'https:' === a.location.protocol &&
        (i = 'https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK')
      var k = Math.random,
        i = i + '/tb/pms/img/st.gif',
        l = { Bh: '0.1' },
        m = { Bh: '0.1' },
        n = { Bh: '0.1' },
        s = { Bh: '0' }
      if (l && l.Bh && k() < l.Bh) {
        var u = c.alog.dG('monkey'),
          w,
          l = a.screen,
          y = b.referrer
        u.set('ver', 5)
        u.set('pid', 241)
        l && u.set('px', l.width + '*' + l.height)
        u.set('ref', y)
        c.alog('monkey.on', 'create', function() {
          w = c.alog.timestamp
          u.set('protocolParameter', { reports: p })
        })
        c.alog('monkey.on', 'send', function(a) {
          'pageview' == a.t && (a.cmd = 'open')
          a.now && ((a.ts = w(a.now).toString(36)), (a.now = ''))
        })
        c.alog('monkey.create', {
          page: g,
          pid: '241',
          p: '18',
          dv: 6,
          postUrl: i,
          reports: { refer: 1 }
        })
        c.alog('monkey.send', 'pageview', { now: +new Date() })
      }
      if (m && m.Bh && k() < m.Bh) {
        var B = q
        a.onerror = function(a, b, d, e) {
          var g = o
          !b && /^script error/i.test(a) && (B ? (g = q) : (B = o))
          g &&
            c.alog('exception.send', 'exception', {
              Jt: a,
              ME: b,
              Ft: d,
              ls: e
            })
          return q
        }
        c.alog('exception.on', 'catch', function(a) {
          c.alog('exception.send', 'exception', {
            Jt: a.Jt,
            ME: a.path,
            Ft: a.Ft,
            method: a.method,
            tL: 'catch'
          })
        })
        c.alog('exception.create', {
          postUrl: i,
          dv: 7,
          page: g,
          pid: '170',
          p: '18'
        })
      }
      n &&
        n.Bh &&
        k() < n.Bh &&
        (c.alog('cus.on', 'time', function(a) {
          var b = {},
            d = q,
            e
          if ('[object Object]' === a.toString()) {
            for (var g in a)
              'page' == g
                ? (b.page = a[g])
                : ((e = parseInt(a[g])),
                  0 < e && /^z_/.test(g) && ((d = o), (b[g] = e)))
            d && c.alog('cus.send', 'time', b)
          }
        }),
        c.alog('cus.on', 'count', function(a) {
          var b = {},
            d = q
          'string' === typeof a && (a = [a])
          if (a instanceof Array)
            for (var e = 0; e < a.length; e++)
              /^z_/.test(a[e])
                ? ((d = o), (b[a[e]] = 1))
                : /^page:/.test(a[e]) && (b.page = a[e].substring(5))
          d && c.alog('cus.send', 'count', b)
        }),
        c.alog('cus.create', { dv: 3, postUrl: i, page: g, p: '18' }))
      if (s && s.Bh && k() < s.Bh) {
        var A = ['Moz', 'O', 'ms', 'Webkit'],
          E = ['-webkit-', '-moz-', '-o-', '-ms-'],
          C = function() {
            return typeof b.createElement !== 'function'
              ? b.createElement(arguments[0])
              : b.createElement.apply(b, arguments)
          },
          D = C('dpFeatureTest').style,
          J = function(a) {
            return O(a, j, j)
          },
          O = function(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
              e = (a + ' ' + A.join(d + ' ') + d).split(' ')
            if (typeof b === 'string' || typeof b === 'undefined')
              return P(e, b)
            e = (a + ' ' + A.join(d + ' ') + d).split(' ')
            a: {
              var a = e,
                f
              for (f in a)
                if (a[f] in b) {
                  if (c === q) {
                    b = a[f]
                    break a
                  }
                  f = b[a[f]]
                  b = typeof f === 'function' ? fnBind(f, c || b) : f
                  break a
                }
              b = q
            }
            return b
          },
          P = function(a, b) {
            var c, d, e
            d = a.length
            for (c = 0; c < d; c++) {
              e = a[c]
              ~('' + e).indexOf('-') && (e = R(e))
              if (D[e] !== j) return b == 'pfx' ? e : o
            }
            return q
          },
          R = function(a) {
            return a
              .replace(/([a-z])-([a-z])/g, function(a, b, c) {
                return b + c.toUpperCase()
              })
              .replace(/^-/, '')
          },
          aa = function(a, b, c) {
            if (a.indexOf('@') === 0) return atRule(a)
            a.indexOf('-') != -1 && (a = R(a))
            return !b ? O(a, 'pfx') : O(a, b, c)
          },
          ba = function() {
            var a = C('canvas')
            return !(!a.getContext || !a.getContext('2d'))
          },
          La = function() {
            var a = C('div')
            return 'draggable' in a || ('ondragstart' in a && 'ondrop' in a)
          },
          Ra = function() {
            try {
              localStorage.setItem('localStorage', 'localStorage')
              localStorage.removeItem('localStorage')
              return o
            } catch (a) {
              return q
            }
          },
          Ua = function() {
            return 'content' in b.createElement('template')
          },
          Ca = function() {
            return 'createShadowRoot' in b.createElement('a')
          },
          uc = function() {
            return 'registerElement' in b
          },
          Ce = function() {
            return 'import' in b.createElement('link')
          },
          Ef = function() {
            return 'getItems' in b
          },
          md = function() {
            return 'EventSource' in window
          },
          Qb = function(a, b) {
            var c = new Image()
            c.onload = function() {
              b(a, c.width > 0 && c.height > 0)
            }
            c.onerror = function() {
              b(a, q)
            }
            c.src =
              'data:image/webp;base64,' +
              {
                N3: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
                M3: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
                alpha:
                  'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
                ok:
                  'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
              }[a]
          },
          vc = function(a, b) {
            return (Rb.mi['WebP-' + a] = b)
          },
          De = function() {
            return 'openDatabase' in a
          },
          Ee = function() {
            return 'performance' in a && 'timing' in a.performance
          },
          Tc = function() {
            return 'performance' in a && 'mark' in a.performance
          },
          nd = function() {
            return !(
              !Array.prototype ||
              !Array.prototype.every ||
              !Array.prototype.filter ||
              !Array.prototype.forEach ||
              !Array.prototype.indexOf ||
              !Array.prototype.lastIndexOf ||
              !Array.prototype.map ||
              !Array.prototype.some ||
              !Array.prototype.reduce ||
              !Array.prototype.reduceRight ||
              !Array.isArray
            )
          },
          Fe = function() {
            return (
              'Promise' in a &&
              'cast' in a.tq &&
              'resolve' in a.tq &&
              'reject' in a.tq &&
              'all' in a.tq &&
              'race' in a.tq &&
              (function() {
                var b
                new a.tq(function(a) {
                  b = a
                })
                return typeof b === 'function'
              })()
            )
          },
          od = function() {
            var b = !!a.O0,
              c = a.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
            return !!a.R0 && b && c
          },
          Ff = function() {
            return 'geolocation' in navigator
          },
          Ge = function() {
            var b = C('canvas'),
              c =
                'probablySupportsContext' in b
                  ? 'probablySupportsContext'
                  : 'supportsContext'
            return c in b
              ? b[c]('webgl') || b[c]('experimental-webgl')
              : 'WebGLRenderingContext' in a
          },
          Li = function() {
            return (
              !!b.createElementNS &&
              !!b.createElementNS('http://www.w3.org/2000/svg', 'svg').d2
            )
          },
          Mi = function() {
            return !!a.Y0
          },
          Ni = function() {
            return 'WebSocket' in a && a.V0.L0 === 2
          },
          Oi = function() {
            return !!b.createElement('video').canPlayType
          },
          Pi = function() {
            return !!b.createElement('audio').canPlayType
          },
          Qi = function() {
            return !!(a.history && 'pushState' in a.history)
          },
          Ri = function() {
            return !(!a.M0 || !a.N0)
          },
          Si = function() {
            return 'postMessage' in window
          },
          Ti = function() {
            return (
              !!a.webkitNotifications ||
              ('Notification' in a &&
                'permission' in a.LP &&
                'requestPermission' in a.LP)
            )
          },
          Ui = function() {
            for (
              var b = ['webkit', 'moz', 'o', 'ms'],
                c = a.requestAnimationFrame,
                e = 0;
              e < b.length && !c;
              ++e
            )
              c = a[b[e] + 'RequestAnimationFrame']
            return !!c
          },
          Vi = function() {
            return 'JSON' in a && 'parse' in JSON && 'stringify' in JSON
          },
          Wi = function() {
            return !(
              !aa('exitFullscreen', b, q) && !aa('cancelFullScreen', b, q)
            )
          },
          Xi = function() {
            return !!aa('Intl', a)
          },
          Yi = function() {
            return J('flexBasis')
          },
          Zi = function() {
            return !!J('perspective')
          },
          $i = function() {
            return J('shapeOutside')
          },
          aj = function() {
            var a = C('div')
            a.style.cssText = E.join('filter:blur(2px); ')
            return (
              !!a.style.length && (b.documentMode === j || b.documentMode > 9)
            )
          },
          bj = function() {
            return (
              'XMLHttpRequest' in a && 'withCredentials' in new XMLHttpRequest()
            )
          },
          cj = function() {
            return C('progress').max !== j
          },
          dj = function() {
            return C('meter').max !== j
          },
          ej = function() {
            return 'sendBeacon' in navigator
          },
          fj = function() {
            return J('borderRadius')
          },
          gj = function() {
            return J('boxShadow')
          },
          hj = function() {
            var a = C('div').style
            a.cssText = E.join('opacity:.55;')
            return /^0.55$/.test(a.opacity)
          },
          ij = function() {
            return P(['textShadow'], j)
          },
          jj = function() {
            return J('animationName')
          },
          kj = function() {
            return J('transition')
          },
          lj = function() {
            return (
              navigator.userAgent.indexOf('Android 2.') === -1 && J('transform')
            )
          },
          Rb = {
            mi: {},
            pa: function(a, b, c) {
              this.mi[a] = b.apply(this, [].slice.call(arguments, 2))
            },
            Dd: function(a, b) {
              a.apply(this, [].slice.call(arguments, 1))
            },
            RZ: function() {
              this.pa('bdrs', fj)
              this.pa('bxsd', gj)
              this.pa('opat', hj)
              this.pa('txsd', ij)
              this.pa('anim', jj)
              this.pa('trsi', kj)
              this.pa('trfm', lj)
              this.pa('flex', Yi)
              this.pa('3dtr', Zi)
              this.pa('shpe', $i)
              this.pa('fltr', aj)
              this.pa('cavs', ba)
              this.pa('dgdp', La)
              this.pa('locs', Ra)
              this.pa('wctem', Ua)
              this.pa('wcsdd', Ca)
              this.pa('wccse', uc)
              this.pa('wchti', Ce)
              this.Dd(Qb, 'lossy', vc)
              this.Dd(Qb, 'lossless', vc)
              this.Dd(Qb, 'alpha', vc)
              this.Dd(Qb, 'animation', vc)
              this.pa('wsql', De)
              this.pa('natm', Ee)
              this.pa('ustm', Tc)
              this.pa('arra', nd)
              this.pa('prms', Fe)
              this.pa('xhr2', od)
              this.pa('wbgl', Ge)
              this.pa('geol', Ff)
              this.pa('svg', Li)
              this.pa('work', Mi)
              this.pa('wbsk', Ni)
              this.pa('vido', Oi)
              this.pa('audo', Pi)
              this.pa('hsty', Qi)
              this.pa('file', Ri)
              this.pa('psmg', Si)
              this.pa('wknf', Ti)
              this.pa('rqaf', Ui)
              this.pa('json', Vi)
              this.pa('flsc', Wi)
              this.pa('i18n', Xi)
              this.pa('cors', bj)
              this.pa('prog', cj)
              this.pa('metr', dj)
              this.pa('becn', ej)
              this.pa('mcrd', Ef)
              this.pa('esrc', md)
            }
          },
          u = c.alog.dG('feature')
        u.M('commit', function() {
          Rb.RZ()
          var a = setInterval(function() {
            if (
              'WebP-lossy' in Rb.mi &&
              'WebP-lossless' in Rb.mi &&
              'WebP-alpha' in Rb.mi &&
              'WebP-animation' in Rb.mi
            ) {
              for (var b in Rb.mi) Rb.mi[b] = Rb.mi[b] ? 'y' : 'n'
              u.send('feature', Rb.mi)
              clearInterval(a)
            }
          }, 500)
        })
        c.alog('feature.create', { o2: 4, h4: i, page: g, yb: '18' })
        c.alog('feature.fire', 'commit')
      }
    })(a, b, c)
  })(window, document, z)
  z.Kn = z.alog || t()
  z.alog('cus.fire', 'count', 'z_loadscriptcount')
  'https:' === location.protocol && z.alog('cus.fire', 'count', 'z_httpscount')
  function Ub(a) {
    var b = window.TILE_VERSION,
      c = '20170927'
    b &&
      b.ditu &&
      ((b = b.ditu), b[a] && b[a].updateDate && (c = b[a].updateDate))
    return c
  }
  var Vb = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
    Wb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
    Xb = 158,
    Yb = [
      98.795985,
      122.960792,
      107.867379,
      118.093451,
      119.139658,
      128.035888,
      79.948212,
      99.029524,
      119.923388,
      122.094977,
      127.918527,
      130.94789,
      106.50606,
      108.076783,
      119.8329,
      126.382207,
      111.803567,
      119.324928,
      100.749858,
      102.227985,
      99.860885,
      100.788921,
      97.529435,
      98.841564,
      99.100017,
      99.90035,
      122.917416,
      123.774367,
      123.728314,
      125.507211,
      123.736065,
      124.767299,
      125.488463,
      126.410675,
      125.484326,
      126.07764,
      130.830784,
      133.620042,
      127.912178,
      128.668957,
      128.658937,
      129.638599,
      132.894179,
      134.119086,
      117.379378,
      119.244569,
      116.086736,
      117.431212,
      114.420233,
      116.137458,
      116.492775,
      119.605527,
      110.579401,
      111.86488,
      74.468228,
      80.001908,
      82.867432,
      91.353788,
      85.721075,
      98.976964,
      127.664757,
      129.546833,
      129.476893,
      130.22449,
      133.730358,
      134.745235,
      134.381034,
      135.1178,
      130.868117,
      131.34409,
      115.513245,
      117.544751,
      115.779271,
      116.748045,
      108.536254,
      110.614326,
      121.365534,
      124.626434,
      126.165992,
      127.347013,
      91.281869,
      95.611754,
      79.879648,
      82.945041,
      76.413314,
      78.345207,
      78.275229,
      80.002329,
      83.956612,
      85.734098,
      85.510186,
      89.356499,
      97.997001,
      98.948845,
      106.653208,
      108.610811,
      111.400183,
      111.824179,
      111.592224,
      111.817136,
      116.00682,
      117.024631,
      116.258574,
      116.689291,
      119.436876,
      119.922961,
      120.659806,
      121.395479,
      120.349116,
      120.676014,
      124.59389,
      125.787788,
      126.221756,
      126.788962,
      95.572955,
      102.046581,
      95.583772,
      96.165551,
      95.564318,
      97.806095,
      91.30446,
      93.356438,
      93.330319,
      94.698145,
      89.349129,
      90.548677,
      82.268802,
      82.892025,
      78.335615,
      80.032266,
      76.625755,
      78.361413,
      73.498248,
      74.490992,
      74.846872,
      76.488771,
      91.563521,
      94.878444,
      88.768214,
      89.244787,
      83.247076,
      83.974127,
      82.29595,
      83.256003,
      81.885315,
      83.26249,
      80.760619,
      81.472404,
      86.470983,
      88.276988,
      102.207537,
      104.234614,
      112.164795,
      116.833667,
      108.965663,
      113.032246,
      111.166575,
      117.983363
    ],
    Zb = [
      22.551183,
      42.284787,
      17.227969,
      22.738314,
      41.300981,
      50.749638,
      30.368087,
      42.332701,
      21.705055,
      22.696452,
      42.426047,
      48.944674,
      21.432184,
      22.651387,
      50.657409,
      52.92296,
      42.212192,
      45.206905,
      21.137031,
      22.57186,
      21.444502,
      22.586566,
      23.741571,
      25.301472,
      22.006806,
      22.56637,
      38.985114,
      41.346531,
      40.295617,
      41.338581,
      39.740021,
      40.351012,
      40.974644,
      41.331562,
      40.726852,
      41.067192,
      44.877158,
      48.018285,
      41.344597,
      42.451798,
      42.016305,
      42.443235,
      45.880906,
      48.214001,
      45.140027,
      46.792775,
      45.141083,
      46.400433,
      45.156418,
      45.748281,
      47.485889,
      50.071879,
      42.223667,
      43.469487,
      37.019867,
      40.668675,
      42.226823,
      47.321605,
      27.72944,
      30.469853,
      48.919002,
      49.650614,
      48.840188,
      49.443166,
      46.949801,
      48.382798,
      47.660603,
      48.472692,
      42.859946,
      44.913298,
      47.605896,
      48.445914,
      48.41698,
      48.909667,
      42.23507,
      42.914193,
      52.8281,
      53.585952,
      50.709311,
      51.662219,
      42.29968,
      44.399225,
      42.302746,
      45.391958,
      34.680866,
      37.03377,
      30.743515,
      37.07228,
      28.245649,
      30.408935,
      47.277693,
      48.504255,
      25.241528,
      27.780726,
      42.223363,
      42.548418,
      43.435888,
      44.696952,
      44.693193,
      45.00187,
      48.886267,
      49.326755,
      49.288642,
      49.632304,
      50.717486,
      51.314369,
      52.914204,
      53.33964,
      52.910094,
      53.115926,
      52.908382,
      53.258095,
      51.64533,
      52.408305,
      42.236825,
      42.699126,
      43.068466,
      43.898632,
      42.670403,
      43.082219,
      44.379045,
      45.187742,
      44.382336,
      44.981379,
      47.310362,
      48.06019,
      45.359099,
      46.814439,
      40.569751,
      42.047741,
      40.587956,
      41.41263,
      38.519192,
      40.185033,
      35.790476,
      37.029005,
      26.825605,
      27.763896,
      27.199658,
      27.751649,
      29.150192,
      30.381073,
      29.573886,
      30.065162,
      30.047775,
      30.384089,
      30.001277,
      30.388525,
      48.494118,
      49.173841,
      22.398528,
      22.601198,
      7.441114,
      11.505968,
      3.767491,
      9.005209,
      12.642067,
      17.410886
    ],
    $b = 95,
    ac = [
      110.3961374,
      105.0743788,
      96.8991824,
      95.61810411,
      93.82412598,
      91.3892353,
      91.38931858,
      89.08325955,
      87.22469808,
      86.26278402,
      85.17353,
      85.23741211,
      82.86627441,
      81.90481038,
      79.59687147,
      80.39829237,
      79.93319363,
      77.80279948,
      75.2557704,
      73.49357829,
      73.1892532,
      73.87758816,
      74.4064738,
      74.10215224,
      75.46409695,
      76.77739692,
      78.28299615,
      78.15499485,
      78.37920654,
      78.89145345,
      79.69282199,
      81.19938178,
      81.80830295,
      83.89093424,
      85.94149523,
      87.86447266,
      89.03414958,
      90.05918132,
      91.10026937,
      92.15733832,
      93.74361735,
      95.82597331,
      97.95655545,
      97.12363037,
      98.2129739,
      99.2068571,
      101.6587874,
      102.5239084,
      102.2356106,
      105.0249238,
      106.0992342,
      107.8617093,
      111.6439372,
      109.591869,
      112.284586,
      117.7961157,
      118.9495128,
      114.2076584,
      118.693565,
      123.1475225,
      122.730705,
      120.9361393,
      123.4207441,
      122.3787782,
      122.1385425,
      121.5904281,
      121.1773763,
      120.6805404,
      120.2483355,
      122.795807,
      122.8759077,
      121.3060262,
      122.1392177,
      123.7418799,
      126.4177599,
      128.5647409,
      129.7194884,
      131.2259136,
      131.9950494,
      133.6289931,
      135.6168614,
      131.3875545,
      130.8743365,
      128.6303223,
      126.0997773,
      124.4015375,
      122.22161,
      119.6586483,
      119.7866827,
      118.5685878,
      116.5177976,
      114.819101,
      119.0812964,
      116.453265,
      111.7431171
    ],
    bc = [
      43.2190351,
      42.38053385,
      43.17417589,
      44.42226915,
      45.09863634,
      45.56708116,
      47.33599718,
      48.68832709,
      49.62448486,
      48.9482175,
      48.4800472,
      47.33564399,
      47.43948676,
      46.03452067,
      45.20221788,
      43.34563043,
      42.32965739,
      41.39690972,
      40.82972331,
      39.95567654,
      39.25892877,
      38.36098768,
      38.05441569,
      37.16878445,
      36.38899414,
      35.36126817,
      34.30953451,
      32.58503879,
      31.56975694,
      30.77800266,
      30.43559814,
      29.7744892,
      30.0931977,
      28.71103299,
      27.70739665,
      27.5775472,
      27.01096137,
      27.77857883,
      27.50707954,
      26.50328315,
      26.70387804,
      27.95548557,
      27.29428901,
      23.64685493,
      23.62310601,
      21.67493381,
      20.77751465,
      21.32070991,
      22.1824113,
      22.31232964,
      22.51316054,
      16.80037679,
      13.19749864,
      0.6939743381,
      1.541660428,
      10.50208252,
      15.58926975,
      17.89090007,
      19.94928467,
      22.18490153,
      25.37285292,
      25.61456434,
      30.62532552,
      31.08099284,
      31.89238173,
      32.50092692,
      32.80325765,
      34.25546956,
      35.15486138,
      36.90170139,
      37.8348272,
      37.941604,
      38.6480797,
      38.96797201,
      40.98146918,
      41.25573296,
      42.07218153,
      42.49132813,
      44.65259766,
      44.69330702,
      48.62286865,
      48.09383952,
      49.19628499,
      50.03402317,
      53.27678901,
      53.62976345,
      53.89420546,
      52.98933322,
      52.01872884,
      50.23210259,
      50.18807048,
      47.49769857,
      47.34362712,
      46.50502143,
      45.24770128
    ],
    cc = [
      98.7895,
      122.954182,
      107.860913,
      118.087007,
      119.133165,
      128.029533,
      79.941749,
      99.023087,
      119.916883,
      122.08841,
      127.912143,
      130.941471,
      106.499502,
      108.070244,
      119.826245,
      126.375818,
      111.797006,
      119.318387,
      100.743285,
      102.221517,
      99.854448,
      100.782445,
      97.522928,
      98.835028,
      99.093518,
      99.893783,
      122.910927,
      123.767769,
      123.721954,
      125.50077,
      123.729657,
      124.760724,
      125.481902,
      126.404079,
      125.477737,
      126.071019,
      130.824331,
      133.613395,
      127.905767,
      128.662524,
      128.652527,
      129.6321,
      132.887552,
      134.11249,
      117.37297,
      119.237999,
      116.080154,
      117.424589,
      114.413586,
      116.130948,
      116.486264,
      119.598927,
      110.5728,
      111.858437,
      74.465162,
      79.995337,
      82.860821,
      91.347291,
      85.716024,
      98.970481,
      127.658331,
      129.540202,
      129.470528,
      130.21808,
      133.723748,
      134.738785,
      134.374555,
      135.111443,
      130.861475,
      131.337438,
      115.506627,
      117.538123,
      115.772783,
      116.741632,
      108.529656,
      110.60782,
      121.358945,
      124.619773,
      126.159424,
      127.340582,
      91.275275,
      95.605228,
      79.874427,
      82.938601,
      76.413314,
      78.338763,
      78.275229,
      79.995765,
      83.956612,
      85.727511,
      85.503554,
      89.349858,
      97.990418,
      98.942257,
      106.646704,
      108.604437,
      111.393667,
      111.817723,
      111.585811,
      111.810645,
      116.000232,
      117.018216,
      116.252108,
      116.682705,
      119.430384,
      119.916417,
      120.653168,
      121.38883,
      120.342727,
      120.669383,
      124.587426,
      125.781376,
      126.215282,
      126.782323,
      95.566367,
      102.040026,
      95.577158,
      96.159009,
      95.557772,
      97.799728,
      91.298032,
      93.350057,
      93.323794,
      94.691771,
      89.342471,
      90.542019,
      82.264229,
      82.885485,
      78.335615,
      80.025844,
      76.623947,
      78.355027,
      73.495149,
      74.484473,
      74.846872,
      76.482208,
      91.560117,
      94.871859,
      88.761692,
      89.23822,
      83.240549,
      83.967602,
      82.292367,
      83.2495,
      81.878825,
      83.256003,
      80.75421,
      81.465955,
      86.465421,
      88.270356,
      102.201019,
      104.228033,
      112.158282,
      116.827153,
      108.965663,
      113.025767,
      111.166575,
      117.97687
    ],
    dc = [
      22.545421,
      42.279053,
      17.226272,
      22.731982,
      41.294917,
      50.743316,
      30.361986,
      42.326603,
      21.699185,
      22.690751,
      42.419757,
      48.938435,
      21.426505,
      22.64567,
      50.651745,
      52.916705,
      42.20641,
      45.201064,
      21.131326,
      22.565685,
      21.438288,
      22.580379,
      23.735785,
      25.295582,
      22.001087,
      22.560315,
      38.979333,
      41.340757,
      40.28938,
      41.332289,
      39.734164,
      40.344718,
      40.968803,
      41.325813,
      40.721073,
      41.061503,
      44.871533,
      48.012179,
      41.338366,
      42.445601,
      42.010343,
      42.436934,
      45.875217,
      48.208327,
      45.134237,
      46.786509,
      45.135376,
      46.394665,
      45.150734,
      45.742257,
      47.480099,
      50.065931,
      42.217982,
      43.46329,
      37.014057,
      40.662848,
      42.221079,
      47.315558,
      27.723432,
      30.46385,
      48.913298,
      49.644555,
      48.83396,
      49.436824,
      46.944059,
      48.376613,
      47.654503,
      48.466331,
      42.854333,
      44.907682,
      47.600253,
      48.440245,
      48.410926,
      48.903468,
      42.229292,
      42.908294,
      52.822466,
      53.58012,
      50.703491,
      51.656037,
      42.29378,
      44.393379,
      42.296912,
      45.385809,
      34.679282,
      37.027699,
      30.740622,
      37.066377,
      28.241967,
      30.403134,
      47.271949,
      48.49848,
      25.235818,
      27.774976,
      42.217425,
      42.542102,
      43.429763,
      44.691016,
      44.687044,
      44.995758,
      48.880431,
      49.320551,
      49.282865,
      49.626267,
      50.711607,
      51.308382,
      52.908547,
      53.333963,
      52.904419,
      53.109706,
      52.902338,
      53.251938,
      51.639701,
      52.402205,
      42.231045,
      42.693581,
      43.062756,
      43.892771,
      42.664519,
      43.075927,
      44.372942,
      45.1815,
      44.376327,
      44.975476,
      47.304623,
      48.054453,
      45.353174,
      46.808493,
      40.563653,
      42.041556,
      40.582164,
      41.4064,
      38.51618,
      40.179105,
      35.789745,
      37.023144,
      26.825402,
      27.757641,
      27.193806,
      27.745766,
      29.144229,
      30.375186,
      29.567889,
      30.059102,
      30.041938,
      30.378006,
      29.995047,
      30.382338,
      48.48834,
      49.169021,
      22.392816,
      22.595333,
      7.439914,
      11.500161,
      3.766676,
      9.000793,
      12.640512,
      17.406563
    ],
    ec = 3e3,
    fc = 2.0e-5,
    gc = 3.0e-6,
    hc = 0.0174532925194,
    ic = 0.0065,
    jc = 0.006,
    kc = 4e4,
    lc = 0,
    mc = 3,
    nc = 1.0e-10,
    oc = 6370996.81,
    pc = 1e8
  function qc(a, b, c) {
    for (var d = Xb, e = 0; e < d; e += 2)
      if (
        a.lng >= b[e] &&
        a.lng <= b[e + 1] &&
        a.lat >= c[e] &&
        a.lat <= c[e + 1]
      )
        return o
    return q
  }
  function rc(a) {
    var b = a.lng,
      c = a.lat,
      a = Math.sqrt(b * b + c * c) + Math.sin(c * ec * hc) * fc,
      b = Math.atan2(c, b) + Math.cos(b * ec * hc) * gc
    return { lng: a * Math.cos(b) + ic, lat: a * Math.sin(b) + jc }
  }
  function sc(a) {
    var b = tc,
      c = {},
      d = a.lng,
      e = a.lat,
      f = 1,
      g = a.lng,
      i = a.lat,
      k = d - f,
      l = 0,
      m = e + f,
      n = 0,
      s = d - f,
      u = 0,
      w = e - f,
      y = 0,
      B = d + f,
      A = 0,
      E = e - f,
      C = 0,
      D = d + f,
      J = 0,
      O = e + f,
      P = 0,
      m = (k = 0),
      m = wc(b, d, e),
      k = m.lng,
      m = m.lat
    if (1.0e-6 >= xc(k, m, g, i)) return (c.lng = d), (c.lat = e), c
    for (;;) {
      k = d - f
      m = e + f
      s = d - f
      w = e - f
      B = d + f
      E = e - f
      D = d + f
      O = e + f
      d = wc(b, k, m)
      l = d.lng
      n = d.lat
      d = wc(b, s, w)
      u = d.lng
      y = d.lat
      d = wc(b, B, E)
      A = d.lng
      C = d.lat
      d = wc(b, D, O)
      J = d.lng
      P = d.lat
      d = xc(l, n, g, i)
      l = xc(u, y, g, i)
      u = xc(A, C, g, i)
      J = xc(J, P, g, i)
      if (1.0e-6 > d) return (c.lng = k), (c.lat = m), c
      if (1.0e-6 > l) return (c.lng = s), (c.lat = w), c
      if (1.0e-6 > u) return (c.lng = B), (c.lat = E), c
      if (1.0e-6 > J) return (c.lng = D), (c.lat = O), c
      A = 1 / d
      l = 1 / l
      u = 1 / u
      J = 1 / J
      d = (k * A + s * l + B * u + D * J) / (A + l + u + J)
      e = (m * A + w * l + E * u + O * J) / (A + l + u + J)
      m = wc(b, d, e)
      k = m.lng
      m = m.lat
      if (1.0e-6 >= xc(k, m, g, i)) return (c.lng = d), (c.lat = e), c
      f *= 0.6
      if (1.0e-6 > f) {
        a: {
          c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0e-4 + 0.5
          f = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0e-4 + 0.5
          g = a.lng * pc
          i = a.lat * pc
          w = 1.0e-4 * pc
          k = g - w
          m = g + w
          s = i - w
          B = i + w
          A = l = u = J = j
          D = l = w = E = u = J = 0
          b(a)
          A = j
          for (O = 0; O <= c; O++) {
            for (d = 0; d <= f; d++)
              if (
                ((A = b(j)),
                (J = j.lng * pc),
                (u = j.lat * pc),
                (l = A.lng * pc),
                (A = A.lat * pc),
                !(l < k || A < s || l > m || A > B))
              ) {
                J -= l
                u -= A
                l = Math.sqrt((g - l) * (g - l) + (i - A) * (i - A))
                if (1 > l) {
                  c = {}
                  c.lng = j.lng
                  c.lat = j.lat
                  break a
                }
                E += (1 * J) / l
                w += (1 * u) / l
                D += 1 / l
              }
            E /= D * pc
            w /= D * pc
          }
          b = (E * pc) / pc
          f = (w * pc) / pc
          c = {}
          c.lng = a.lng + b
          c.lat = a.lat + f
        }
        return c
      }
    }
  }
  function wc(a, b, c) {
    a = a({ lng: b, lat: c })
    b = {}
    b.lng = a.lng
    b.lat = a.lat
    return b
  }
  function yc(a, b, c, d) {
    var e = arguments.length
    this.vg = {}
    this.Dg = {}
    0 !== e && 4 === e && this.normalize(a, b, c, d)
  }
  yc.prototype.contains = function(a) {
    return a.lng > this.vg.lng &&
      a.lng < this.Dg.lng &&
      a.lat > this.vg.lat &&
      a.lat < this.Dg.lat
      ? mc
      : Math.abs(a.lng - this.vg.lng) < nc ||
        Math.abs(a.lng - this.Dg.lng) < nc ||
        Math.abs(a.lat - this.vg.lat) < nc ||
        Math.abs(a.y - this.Dg.lat) > nc
      ? 2
      : lc
  }
  yc.prototype.normalize = function(a, b, c, d) {
    a > c
      ? ((this.vg.lng = c), (this.Dg.lng = a))
      : ((this.vg.lng = a), (this.Dg.lng = c))
    b > d
      ? ((this.vg.lat = d), (this.Dg.lat = b))
      : ((this.vg.lat = b), (this.Dg.lat = d))
  }
  function zc(a, b, c, d) {
    this.mu = { lng: a, lat: b }
    this.qx = { lng: c, lat: d }
    this.ky = new yc(a, b, c, d)
  }
  function Ac(a, b) {
    var c = a.lat * hc,
      d = b.lat * hc,
      e = c - d,
      f = a.lng * hc - b.lng * hc
    return (
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin(e / 2) * Math.sin(e / 2) +
            Math.cos(c) * Math.cos(d) * Math.sin(f / 2) * Math.sin(f / 2)
        )
      ) *
      oc
    )
  }
  function xc(a, b, c, d) {
    return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
  }
  function Bc(a, b, c) {
    return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
  }
  function tc(a) {
    var b = {}
    if (
      a.lng < Vb[0] - 0.4 ||
      a.lat < Vb[1] - 0.4 ||
      a.lng > Vb[2] + 0.4 ||
      a.lat > Vb[3] + 0.4
    )
      return (b.lng = a.lng), (b.lat = a.lat), b
    if (qc(a, cc, dc)) return (b = rc(a))
    for (var b = 0, c = kc, d = 0, e = new yc(), f = 0, d = 0; d < $b; ++d)
      bc[d] <= a.lat
        ? bc[(d + 1) % $b] > a.lat &&
          0 <
            Bc(
              { lng: ac[d], lat: bc[d] },
              { lng: ac[(d + 1) % $b], lat: bc[(d + 1) % $b] },
              a
            ) &&
          ++f
        : bc[(d + 1) % $b] <= a.lat &&
          0 >
            Bc(
              { lng: ac[d], lat: bc[d] },
              { lng: ac[(d + 1) % $b], lat: bc[(d + 1) % $b] },
              a
            ) &&
          --f
    if ((0 === f ? lc : mc) === lc) {
      for (f = 0; f < $b; ++f)
        if (
          ((d = new zc(ac[f], bc[f], ac[(f + 1) % $b], bc[(f + 1) % $b])),
          (e.vg.lng = d.ky.vg.lng - 0.5),
          (e.vg.lat = d.ky.vg.lat - 0.5),
          (e.Dg.lng = d.ky.Dg.lng + 0.5),
          (e.Dg.lat = d.ky.Dg.lat + 0.5),
          e.contains(a) !== lc)
        ) {
          var g
          var i = d.mu.lng,
            k = d.mu.lat,
            l = d.qx.lng,
            m = d.qx.lat
          g = m - k
          var n = i - l
          !(Math.abs(g - 0) > nc) && !(Math.abs(n - 0) > nc)
            ? (g = d.mu)
            : ((i = l * k - i * m),
              (k = n * a.lng - g * a.lat),
              (l = g * g - n * n),
              (g = { lng: (n * k - g * i) / l, lat: -(g * k + n * i) / l }))
          n = 180
          i = 90
          k = -180
          l = -90
          l = d.mu
          m = d.qx
          n = l.lng < m.lng ? l.lng : m.lng
          i = l.lat < m.lat ? l.lat : m.lat
          k = l.lng < m.lng ? l.lng : m.lng
          l = l.lat < m.lat ? l.lat : m.lat
          g.lng <= k && g.lng >= n && g.lng <= l && g.lat >= i
            ? ((d = a.lat * hc),
              (n = a.lng * hc),
              (i = g.lat * hc),
              (g = g.lng * hc),
              (k = Math.cos(d) * Math.cos(i)),
              (d =
                k * Math.cos(n) * Math.cos(g) +
                k * Math.sin(n) * Math.sin(g) +
                Math.sin(d) * Math.sin(i)),
              -1 > d ? (d = -1) : 1 < d && (d = 1),
              (d = Math.acos(d) * oc))
            : ((g = Ac(a, d.mu)), (d = Ac(a, d.qx)), (d = g < d ? g : d))
          d < c && (c = d)
        }
      c < kc && (b = (kc - c) / kc)
    } else b = 1
    c = rc(a)
    return (b = {
      lng: a.lng + (c.lng - a.lng) * b,
      lat: a.lat + (c.lat - a.lat) * b
    })
  }
  function Cc(a) {
    var b = {}
    if (
      a.lng < Wb[0] - 0.4 ||
      a.lat < Wb[1] - 0.4 ||
      a.lng > Wb[2] + 0.4 ||
      a.lat > Wb[3] + 0.4
    )
      return (b.lng = a.lng), (b.lat = a.lat), b
    if (qc(a, Yb, Zb)) {
      var b = a.lng - ic,
        c = a.lat - jc,
        a = Math.sqrt(b * b + c * c) - Math.sin(c * ec * hc) * fc,
        b = Math.atan2(c, b) - Math.cos(b * ec * hc) * gc
      return (b = { lng: a * Math.cos(b), lat: a * Math.sin(b) })
    }
    c = tc(a)
    return a.lng === c.lng && a.lat === c.lng
      ? ((b.lng = a.lng), (b.lat = a.lat), b)
      : sc(a)
  }
  function Za(a, b) {
    if (b && b.B && b.B.Xw && 3 === b.B.Xw && a instanceof N) {
      var c = tc(a)
      return new I(c.lng, c.lat)
    }
    return a
  }
  function fb(a, b) {
    if (b && b.B && 3 === b.B.Xw && a instanceof I) {
      var c = Cc(a)
      return new N(c.lng, c.lat)
    }
    return b && b.B && 5 === b.B.Xw && a instanceof I ? new N(a.lng, a.lat) : a
  }
  function qa(a, b) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (/^http/.test(a)) return // ！！！！！这里加判断，如果是调用外部资源就退出去
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (b) {
      var c = (1e5 * Math.random()).toFixed(0)
      z._rd['_cbk' + c] = function(a) {
        b && b(a)
        delete z._rd['_cbk' + c]
      }
      a += '&callback=BMap._rd._cbk' + c
    }
    var d = F('script', { type: 'text/javascript' })
    d.charset = 'utf-8'
    d.src = a + '&seckey=' + pa
    d.addEventListener
      ? d.addEventListener(
          'load',
          function(a) {
            a = a.target
            a.parentNode.removeChild(a)
          },
          q
        )
      : d.attachEvent &&
        d.attachEvent('onreadystatechange', function() {
          var a = window.event.srcElement
          a &&
            ('loaded' == a.readyState || 'complete' == a.readyState) &&
            a.parentNode.removeChild(a)
        })
    setTimeout(function() {
      document.getElementsByTagName('head')[0].appendChild(d)
      d = p
    }, 1)
  }
  var Dc = {
    map: 'r3ao04',
    common: 'w154ak',
    style: 'vvp0qr',
    tile: 'jl3f30',
    vectordrawlib: 'yn0vnf',
    newvectordrawlib: 'aof2ij',
    groundoverlay: 'w2w0bj',
    pointcollection: '4uznox',
    marker: 'srsoal',
    symbol: 'xob1zz',
    canvablepath: 'yt25r0',
    vmlcontext: 'm24fqu',
    markeranimation: 'tp5re4',
    poly: 'rj0r2t',
    draw: 'fxsziq',
    drawbysvg: 'ftqpca',
    drawbyvml: 'czhxia',
    drawbycanvas: 'gd5uah',
    infowindow: '5jlbgg',
    oppc: 'q3ood3',
    opmb: 'q5rpu3',
    menu: 'f24vjd',
    control: 'tm2p4w',
    navictrl: '0wpk5v',
    geoctrl: 'vor2o4',
    copyrightctrl: 'jgthtd',
    citylistcontrol: 'fvezrt',
    scommon: 'urfqpa',
    local: 'kvu5tm',
    route: 'ctmdcb',
    othersearch: 'vdkdbf',
    mapclick: 'kuda1r',
    buslinesearch: 'qh2c5h',
    hotspot: 'sxrwof',
    autocomplete: 'lmjsld',
    coordtrans: 'engo12',
    coordtransutils: '52chpz',
    convertor: '0pmerq',
    clayer: 'u2e45v',
    pservice: 'y4ktk3',
    pcommon: 'lpb5i4',
    panorama: '0bttxz',
    panoramaflash: 'p4hhz4',
    vector: '2h4vbz'
  }
  x.$y = (function() {
    function a(a) {
      return d && !!c[b + a + '_' + Dc[a]]
    }
    var b = 'BMap_',
      c = window.localStorage,
      d = 'localStorage' in window && c !== p && c !== j
    return {
      JY: d,
      set: function(a, f) {
        if (d) {
          for (var g = b + a + '_', i = c.length, k; i--; )
            (k = c.key(i)), -1 < k.indexOf(g) && c.removeItem(k)
          try {
            c.setItem(b + a + '_' + Dc[a], f)
          } catch (l) {
            c.clear()
          }
        }
      },
      get: function(e) {
        return d && a(e) ? c.getItem(b + e + '_' + Dc[e]) : q
      },
      vK: a
    }
  })()
  function K() {}
  x.object.extend(K, {
    Jj: { FG: -1, ZP: 0, kq: 1 },
    HL: function() {
      var a = 'canvablepath',
        b = z.$U ? 'newvectordrawlib' : 'vectordrawlib'
      if (!H() || !Ob()) Nb() || (Mb() ? (a = 'vmlcontext') : Ob())
      return {
        tile: [b, 'style'],
        control: [],
        marker: ['symbol'],
        symbol: ['canvablepath', 'common'],
        canvablepath: 'canvablepath' === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ['marker', 'drawbycanvas', 'drawbysvg', 'drawbyvml'],
        drawbysvg: ['draw'],
        drawbyvml: ['draw'],
        drawbycanvas: ['draw'],
        infowindow: ['common', 'marker'],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ['scommon'],
        route: ['scommon'],
        othersearch: ['scommon'],
        autocomplete: ['scommon'],
        citylistcontrol: ['autocomplete'],
        mapclick: ['scommon'],
        buslinesearch: ['route'],
        hotspot: [],
        coordtransutils: ['coordtrans'],
        convertor: [],
        clayer: ['tile'],
        pservice: [],
        pcommon: ['style', 'pservice'],
        panorama: ['pcommon'],
        panoramaflash: ['pcommon']
      }
    },
    k4: {},
    yG: { pQ: z.la + 'getmodules?v=2.0&t=20140707', RU: 5e3 },
    RC: q,
    Rd: { Al: {}, Mn: [], bw: [] },
    load: function(a, b, c) {
      var d = this.kb(a)
      if (d.Cd == this.Jj.kq) c && b()
      else {
        if (d.Cd == this.Jj.FG) {
          this.BK(a)
          this.PN(a)
          var e = this
          e.RC == q &&
            ((e.RC = o),
            setTimeout(function() {
              for (var a = [], b = 0, c = e.Rd.Mn.length; b < c; b++) {
                var d = e.Rd.Mn[b],
                  l = ''
                ja.$y.vK(d)
                  ? (l = ja.$y.get(d))
                  : ((l = ''), a.push(d + '_' + Dc[d]))
                e.Rd.bw.push({ hN: d, $E: l })
              }
              e.RC = q
              e.Rd.Mn.length = 0
              //!!!!!!!!!!!!!!!!!!!!
              console.log(a) //！！！！！打印所需模块，这很重要
              //!!!!!!!!!!!!!!!!!!!!
              // 0 == a.length ? e.mL() : qa(e.yG.pQ + '&mod=' + a.join(','))
              //!!!!!!!!!!!!!!!!!!!!!!!!引用本地下载好的模块文件资源
              if (a.length > 0) {
                for (let i = 0; i < a.length; i++) {
                  let mf = bmapcfg.home + 'modules/' + a[i] + '.js'
                  oa(mf)
                  console.log('加载模块文件:' + mf) //IE error
                }
              } else {
                e.mL()
              }
            }, 1))
          d.Cd = this.Jj.ZP
        }
        d.Zu.push(b)
      }
    },
    BK: function(a) {
      if (a && this.HL()[a])
        for (var a = this.HL()[a], b = 0; b < a.length; b++)
          this.BK(a[b]), this.Rd.Al[a[b]] || this.PN(a[b])
    },
    PN: function(a) {
      for (var b = 0; b < this.Rd.Mn.length; b++) if (this.Rd.Mn[b] == a) return
      this.Rd.Mn.push(a)
    },
    QZ: function(a, b) {
      var c = this.kb(a)
      try {
        eval(b)
      } catch (d) {
        return
      }
      c.Cd = this.Jj.kq
      for (var e = 0, f = c.Zu.length; e < f; e++) c.Zu[e]()
      c.Zu.length = 0
    },
    vK: function(a, b) {
      var c = this
      c.timeout = setTimeout(function() {
        c.Rd.Al[a].Cd != c.Jj.kq
          ? (c.remove(a), c.load(a, b))
          : clearTimeout(c.timeout)
      }, c.yG.RU)
    },
    kb: function(a) {
      this.Rd.Al[a] ||
        ((this.Rd.Al[a] = {}),
        (this.Rd.Al[a].Cd = this.Jj.FG),
        (this.Rd.Al[a].Zu = []))
      return this.Rd.Al[a]
    },
    remove: function(a) {
      delete this.kb(a)
    },
    MV: function(a, b) {
      for (var c = this.Rd.bw, d = o, e = 0, f = c.length; e < f; e++)
        '' == c[e].$E && (c[e].hN == a ? (c[e].$E = b) : (d = q))
      d && this.mL()
    },
    mL: function() {
      for (var a = this.Rd.bw, b = 0, c = a.length; b < c; b++)
        this.QZ(a[b].hN, a[b].$E)
      this.Rd.bw.length = 0
    }
  })
  function S(a, b) {
    this.x = a || 0
    this.y = b || 0
    this.x = this.x
    this.y = this.y
  }
  S.prototype.ab = function(a) {
    return a && a.x == this.x && a.y == this.y
  }
  function L(a, b) {
    this.width = a || 0
    this.height = b || 0
  }
  L.prototype.ab = function(a) {
    return a && this.width == a.width && this.height == a.height
  }
  function kb(a, b) {
    a &&
      ((this.Kb = a),
      (this.ba = 'spot' + kb.ba++),
      (b = b || {}),
      (this.Xg = b.text || ''),
      (this.Iv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5]),
      (this.KJ = b.userData || p),
      (this.Uh = b.minZoom || p),
      (this.Gf = b.maxZoom || p))
  }
  kb.ba = 0
  x.extend(kb.prototype, {
    ra: function(a) {
      this.Uh == p && (this.Uh = a.B.fc)
      this.Gf == p && (this.Gf = a.B.Zb)
    },
    ta: function(a) {
      if (a instanceof N || a instanceof I) this.Kb = a
    },
    ia: v('Kb'),
    eu: da('Xg'),
    kE: v('Xg'),
    setUserData: da('KJ'),
    getUserData: v('KJ')
  })
  function Ec() {
    this.D = p
    this.Lb = 'control'
    this.Pa = this.oK = o
  }
  x.lang.ua(Ec, x.lang.Da, 'Control')
  x.extend(Ec.prototype, {
    initialize: function(a) {
      this.D = a
      if (this.C) return a.Ua.appendChild(this.C), this.C
    },
    Ie: function(a) {
      !this.C &&
        this.initialize &&
        $a(this.initialize) &&
        (this.C = this.initialize(a))
      this.k = this.k || { Cg: q }
      this.MB()
      this.Ur()
      this.C && (this.C.tr = this)
    },
    MB: function() {
      var a = this.C
      if (a) {
        var b = a.style
        b.position = 'absolute'
        b.zIndex = this.Wu || '10'
        b.MozUserSelect = 'none'
        b.WebkitTextSizeAdjust = 'none'
        this.k.Cg || x.K.Ta(a, 'BMap_noprint')
        H() || x.M(a, 'contextmenu', oa)
      }
    },
    remove: function() {
      this.D = p
      this.C &&
        (this.C.parentNode && this.C.parentNode.removeChild(this.C),
        (this.C = this.C.tr = p))
    },
    Ba: function() {
      this.C = Bb(this.D.Ua, "<div unselectable='on'></div>")
      this.Pa == q && x.K.U(this.C)
      return this.C
    },
    Ur: function() {
      this.qc(this.k.anchor)
    },
    qc: function(a) {
      if (this.M1 || !Ya(a) || isNaN(a) || a < Fc || 3 < a)
        a = this.defaultAnchor
      this.k = this.k || { Cg: q }
      this.k.Aa = this.k.Aa || this.defaultOffset
      var b = this.k.anchor
      this.k.anchor = a
      if (this.C) {
        var c = this.C,
          d = this.k.Aa.width,
          e = this.k.Aa.height
        c.style.left = c.style.top = c.style.right = c.style.bottom = 'auto'
        switch (a) {
          case Fc:
            c.style.top = e + 'px'
            c.style.left = d + 'px'
            break
          case Gc:
            c.style.top = e + 'px'
            c.style.right = d + 'px'
            break
          case Hc:
            c.style.bottom = e + 'px'
            c.style.left = d + 'px'
            break
          case 3:
            ;(c.style.bottom = e + 'px'), (c.style.right = d + 'px')
        }
        c = ['TL', 'TR', 'BL', 'BR']
        x.K.Tb(this.C, 'anchor' + c[b])
        x.K.Ta(this.C, 'anchor' + c[a])
      }
    },
    OD: function() {
      return this.k.anchor
    },
    getContainer: v('C'),
    Ye: function(a) {
      a instanceof L &&
        ((this.k = this.k || { Cg: q }),
        (this.k.Aa = new L(a.width, a.height)),
        this.C && this.qc(this.k.anchor))
    },
    Qf: function() {
      return this.k.Aa
    },
    Jd: v('C'),
    show: function() {
      this.Pa != o && ((this.Pa = o), this.C && x.K.show(this.C))
    },
    U: function() {
      this.Pa != q && ((this.Pa = q), this.C && x.K.U(this.C))
    },
    isPrintable: function() {
      return !!this.k.Cg
    },
    oh: function() {
      return !this.C && !this.D ? q : !!this.Pa
    }
  })
  var Fc = 0,
    Gc = 1,
    Hc = 2
  function lb(a) {
    Ec.call(this)
    a = a || {}
    this.k = {
      Cg: q,
      RF: a.showZoomInfo || o,
      anchor: a.anchor,
      Aa: a.offset,
      type: a.type,
      OW: a.enableGeolocation || q
    }
    this.defaultAnchor = H() ? 3 : Fc
    this.defaultOffset = new L(10, 10)
    this.qc(a.anchor)
    this.vn(a.type)
    this.Ee()
  }
  x.lang.ua(lb, Ec, 'NavigationControl')
  x.extend(lb.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    vn: function(a) {
      this.k.type = Ya(a) && 0 <= a && 3 >= a ? a : 0
    },
    op: function() {
      return this.k.type
    },
    Ee: function() {
      var a = this
      K.load('navictrl', function() {
        a.yf()
      })
    }
  })
  function Ic(a) {
    Ec.call(this)
    a = a || {}
    this.k = {
      anchor: a.anchor || Hc,
      Aa: a.offset || new L(10, 30),
      C_: a.showAddressBar !== q,
      u2: a.enableAutoLocation || q,
      WM: a.locationIcon || p
    }
    var b = this
    this.Wu = 1200
    b.q0 = []
    this.pe = []
    K.load('geoctrl', function() {
      ;(function d() {
        if (0 !== b.pe.length) {
          var a = b.pe.shift()
          b[a.method].apply(b, a.arguments)
          d()
        }
      })()
      b.oQ()
    })
    Sa(Ja)
  }
  x.lang.ua(Ic, Ec, 'GeolocationControl')
  x.extend(Ic.prototype, {
    location: function() {
      this.pe.push({ method: 'location', arguments: arguments })
    },
    getAddressComponent: ea(p)
  })
  function Jc(a) {
    Ec.call(this)
    a = a || {}
    this.k = { Cg: q, anchor: a.anchor, Aa: a.offset }
    this.bc = []
    this.defaultAnchor = Hc
    this.defaultOffset = new L(5, 2)
    this.qc(a.anchor)
    this.oK = q
    this.Ee()
  }
  x.lang.ua(Jc, Ec, 'CopyrightControl')
  x.object.extend(Jc.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    zw: function(a) {
      if (a && Ya(a.id) && !isNaN(a.id)) {
        var b = { bounds: p, content: '' },
          c
        for (c in a) b[c] = a[c]
        if ((a = this.ym(a.id))) for (var d in b) a[d] = b[d]
        else this.bc.push(b)
      }
    },
    ym: function(a) {
      for (var b = 0, c = this.bc.length; b < c; b++)
        if (this.bc[b].id == a) return this.bc[b]
    },
    VD: v('bc'),
    rF: function(a) {
      for (var b = 0, c = this.bc.length; b < c; b++)
        this.bc[b].id == a &&
          ((r = this.bc.splice(b, 1)), b--, (c = this.bc.length))
    },
    Ee: function() {
      var a = this
      K.load('copyrightctrl', function() {
        a.yf()
      })
    }
  })
  function nb(a) {
    Ec.call(this)
    a = a || {}
    this.k = {
      Cg: q,
      size: a.size || new L(150, 150),
      padding: 5,
      Va: a.isOpen === o ? o : q,
      F0: 4,
      Aa: a.offset,
      anchor: a.anchor
    }
    this.defaultAnchor = 3
    this.defaultOffset = new L(0, 0)
    this.Iq = this.Jq = 13
    this.qc(a.anchor)
    this.Ce(this.k.size)
    this.Ee()
  }
  x.lang.ua(nb, Ec, 'OverviewMapControl')
  x.extend(nb.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    qc: function(a) {
      Ec.prototype.qc.call(this, a)
    },
    se: function() {
      this.se.so = o
      this.k.Va = !this.k.Va
      this.C || (this.se.so = q)
    },
    Ce: function(a) {
      a instanceof L || (a = new L(150, 150))
      a.width = 0 < a.width ? a.width : 150
      a.height = 0 < a.height ? a.height : 150
      this.k.size = a
    },
    vb: function() {
      return this.k.size
    },
    Va: function() {
      return this.k.Va
    },
    Ee: function() {
      var a = this
      K.load('control', function() {
        a.yf()
      })
    }
  })
  function Kc(a) {
    Ec.call(this)
    a = a || {}
    this.defaultAnchor = Fc
    this.JV = a.canCheckSize === q ? q : o
    this.ij = ''
    this.defaultOffset = new L(10, 10)
    this.onChangeBefore = []
    this.onChangeAfter = []
    this.onChangeSuccess = []
    this.k = {
      Cg: q,
      Aa: a.offset || this.defaultOffset,
      anchor: a.anchor || this.defaultAnchor,
      expand: !!a.expand
    }
    a.onChangeBefore &&
      $a(a.onChangeBefore) &&
      this.onChangeBefore.push(a.onChangeBefore)
    a.onChangeAfter &&
      $a(a.onChangeAfter) &&
      this.onChangeAfter.push(a.onChangeAfter)
    a.onChangeSuccess &&
      $a(a.onChangeSuccess) &&
      this.onChangeSuccess.push(a.onChangeSuccess)
    this.qc(a.anchor)
    this.Ee()
  }
  x.lang.ua(Kc, Ec, 'CityListControl')
  x.object.extend(Kc.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    Ee: function() {
      var a = this
      K.load(
        'citylistcontrol',
        function() {
          a.yf()
        },
        o
      )
    }
  })
  function mb(a) {
    Ec.call(this)
    a = a || {}
    this.k = { Cg: q, color: 'black', cd: 'metric', Aa: a.offset }
    this.defaultAnchor = Hc
    this.defaultOffset = new L(81, 18)
    this.qc(a.anchor)
    this.ci = {
      metric: {
        name: 'metric',
        DK: 1,
        pM: 1e3,
        VO: '\u7c73',
        WO: '\u516c\u91cc'
      },
      us: {
        name: 'us',
        DK: 3.2808,
        pM: 5280,
        VO: '\u82f1\u5c3a',
        WO: '\u82f1\u91cc'
      }
    }
    this.ci[this.k.cd] || (this.k.cd = 'metric')
    this.iJ = p
    this.II = {}
    this.Ee()
  }
  x.lang.ua(mb, Ec, 'ScaleControl')
  x.object.extend(mb.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    Qk: function(a) {
      this.k.color = a + ''
    },
    L2: function() {
      return this.k.color
    },
    OF: function(a) {
      this.k.cd = (this.ci[a] && this.ci[a].name) || this.k.cd
    },
    fY: function() {
      return this.k.cd
    },
    Ee: function() {
      var a = this
      K.load('control', function() {
        a.yf()
      })
    }
  })
  var Lc = 0
  function ob(a) {
    Ec.call(this)
    a = a || {}
    this.defaultAnchor = Gc
    this.defaultOffset = new L(10, 10)
    this.k = {
      Cg: q,
      qh: [Na, ab, Ta, Qa],
      qW: ['B_DIMENSIONAL_MAP', 'B_SATELLITE_MAP', 'B_NORMAL_MAP'],
      type: a.type || Lc,
      Aa: a.offset || this.defaultOffset,
      SW: o
    }
    this.qc(a.anchor)
    '[object Array]' == Object.prototype.toString.call(a.mapTypes) &&
      (this.k.qh = a.mapTypes.slice(0))
    this.Ee()
  }
  x.lang.ua(ob, Ec, 'MapTypeControl')
  x.object.extend(ob.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    az: function(a) {
      this.D.io = a
    },
    Ee: function() {
      var a = this
      K.load(
        'control',
        function() {
          a.yf()
        },
        o
      )
    }
  })
  function Mc(a) {
    Ec.call(this)
    a = a || {}
    this.k = { Cg: q, Aa: a.offset, anchor: a.anchor }
    this.Ui = q
    this.gw = p
    this.SI = new Nc({ of: 'api' })
    this.TI = new Oc(p, { of: 'api' })
    this.defaultAnchor = Gc
    this.defaultOffset = new L(10, 10)
    this.qc(a.anchor)
    this.Ee()
    Sa(wa)
  }
  x.lang.ua(Mc, Ec, 'PanoramaControl')
  x.extend(Mc.prototype, {
    initialize: function(a) {
      this.D = a
      return this.C
    },
    Ee: function() {
      var a = this
      K.load('control', function() {
        a.yf()
      })
    }
  })
  function Pc(a) {
    x.lang.Da.call(this)
    this.k = { Ua: p, cursor: 'default' }
    this.k = x.extend(this.k, a)
    this.Lb = 'contextmenu'
    this.D = p
    this.ya = []
    this.Jf = []
    this.Ge = []
    this.fx = this.vs = p
    this.Th = q
    var b = this
    K.load('menu', function() {
      b.Ab()
    })
  }
  x.lang.ua(Pc, x.lang.Da, 'ContextMenu')
  x.object.extend(Pc.prototype, {
    ra: function(a, b) {
      this.D = a
      this.Fl = b || p
    },
    remove: function() {
      this.D = this.Fl = p
    },
    Bw: function(a) {
      if (a && !('menuitem' != a.Lb || '' == a.Xg || 0 >= a.dj)) {
        for (var b = 0, c = this.ya.length; b < c; b++)
          if (this.ya[b] === a) return
        this.ya.push(a)
        this.Jf.push(a)
      }
    },
    removeItem: function(a) {
      if (a && 'menuitem' == a.Lb) {
        for (var b = 0, c = this.ya.length; b < c; b++)
          this.ya[b] === a && (this.ya[b].remove(), this.ya.splice(b, 1), c--)
        b = 0
        for (c = this.Jf.length; b < c; b++)
          this.Jf[b] === a && (this.Jf[b].remove(), this.Jf.splice(b, 1), c--)
      }
    },
    fC: function() {
      this.ya.push({ Lb: 'divider', Sj: this.Ge.length })
      this.Ge.push({ K: p })
    },
    tF: function(a) {
      if (this.Ge[a]) {
        for (var b = 0, c = this.ya.length; b < c; b++)
          this.ya[b] &&
            'divider' == this.ya[b].Lb &&
            this.ya[b].Sj == a &&
            (this.ya.splice(b, 1), c--),
            this.ya[b] &&
              'divider' == this.ya[b].Lb &&
              this.ya[b].Sj > a &&
              this.ya[b].Sj--
        this.Ge.splice(a, 1)
      }
    },
    Jd: v('C'),
    show: function() {
      this.Th != o && (this.Th = o)
    },
    U: function() {
      this.Th != q && (this.Th = q)
    },
    h_: function(a) {
      a && (this.k.cursor = a)
    },
    getItem: function(a) {
      return this.Jf[a]
    }
  })
  var Qc = G.qa + 'menu_zoom_in.png',
    Rc = G.qa + 'menu_zoom_out.png'
  function Sc(a, b, c) {
    if (a && $a(b)) {
      x.lang.Da.call(this)
      this.k = { width: 100, id: '', Nm: '' }
      c = c || {}
      this.k.width = 1 * c.width ? c.width : 100
      this.k.id = c.id ? c.id : ''
      this.k.Nm = c.iconUrl ? c.iconUrl : ''
      this.Xg = a + ''
      this.Pz = b
      this.D = p
      this.Lb = 'menuitem'
      this.as = this.wv = this.C = this.Lh = p
      this.Ph = o
      var d = this
      K.load('menu', function() {
        d.Ab()
      })
    }
  }
  x.lang.ua(Sc, x.lang.Da, 'MenuItem')
  x.object.extend(Sc.prototype, {
    ra: function(a, b) {
      this.D = a
      this.Lh = b
    },
    remove: function() {
      this.D = this.Lh = p
    },
    eu: function(a) {
      a && (this.Xg = a + '')
    },
    Vb: function(a) {
      a && (this.k.Nm = a)
    },
    Jd: v('C'),
    enable: function() {
      this.Ph = o
    },
    disable: function() {
      this.Ph = q
    }
  })
  function hb(a, b) {
    a && !b && (b = a)
    this.Je = this.Xd = this.Ne = this.Zd = this.Ul = this.Dl = p
    a &&
      ((this.Ul = new N(a.lng, a.lat)),
      (this.Dl = new N(b.lng, b.lat)),
      (this.Ne = a.lng),
      (this.Zd = a.lat),
      (this.Je = b.lng),
      (this.Xd = b.lat))
  }
  x.object.extend(hb.prototype, {
    Bj: function() {
      return !this.Ul || !this.Dl
    },
    ab: function(a) {
      return !(a instanceof hb) || this.Bj()
        ? q
        : this.xe().ab(a.xe()) && this.pf().ab(a.pf())
    },
    xe: v('Ul'),
    pf: v('Dl'),
    $V: function(a) {
      return !(a instanceof hb) || this.Bj() || a.Bj()
        ? q
        : a.Ne > this.Ne && a.Je < this.Je && a.Zd > this.Zd && a.Xd < this.Xd
    },
    pc: function() {
      return this.Bj()
        ? p
        : new N((this.Ne + this.Je) / 2, (this.Zd + this.Xd) / 2)
    },
    xt: function(a) {
      if (
        !(a instanceof hb) ||
        Math.max(a.Ne, a.Je) < Math.min(this.Ne, this.Je) ||
        Math.min(a.Ne, a.Je) > Math.max(this.Ne, this.Je) ||
        Math.max(a.Zd, a.Xd) < Math.min(this.Zd, this.Xd) ||
        Math.min(a.Zd, a.Xd) > Math.max(this.Zd, this.Xd)
      )
        return p
      var b = Math.max(this.Ne, a.Ne),
        c = Math.min(this.Je, a.Je),
        d = Math.max(this.Zd, a.Zd),
        a = Math.min(this.Xd, a.Xd)
      return new hb(new N(b, d), new N(c, a))
    },
    Vw: function(a) {
      return !(a instanceof N || a instanceof I) || this.Bj()
        ? q
        : a.lng >= this.Ne &&
            a.lng <= this.Je &&
            a.lat >= this.Zd &&
            a.lat <= this.Xd
    },
    extend: function(a) {
      if (a instanceof N || a instanceof I) {
        var b = a.lng,
          a = a.lat
        this.Ul || (this.Ul = new N(0, 0))
        this.Dl || (this.Dl = new N(0, 0))
        if (!this.Ne || this.Ne > b) this.Ul.lng = this.Ne = b
        if (!this.Je || this.Je < b) this.Dl.lng = this.Je = b
        if (!this.Zd || this.Zd > a) this.Ul.lat = this.Zd = a
        if (!this.Xd || this.Xd < a) this.Dl.lat = this.Xd = a
      }
    },
    aG: function() {
      return this.Bj()
        ? new N(0, 0)
        : new N(Math.abs(this.Je - this.Ne), Math.abs(this.Xd - this.Zd))
    }
  })
  function N(a, b) {
    isNaN(a) && ((a = Lb(a)), (a = isNaN(a) ? 0 : a))
    bb(a) && (a = parseFloat(a))
    isNaN(b) && ((b = Lb(b)), (b = isNaN(b) ? 0 : b))
    bb(b) && (b = parseFloat(b))
    this.lng = a
    this.lat = b
  }
  N.DE = function(a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  }
  N.prototype.ab = function(a) {
    return a && this.lat == a.lat && this.lng == a.lng
  }
  function I(a, b) {
    isNaN(a) && ((a = Lb(a)), (a = isNaN(a) ? 0 : a))
    bb(a) && (a = parseFloat(a))
    isNaN(b) && ((b = Lb(b)), (b = isNaN(b) ? 0 : b))
    bb(b) && (b = parseFloat(b))
    this.lng = a
    this.lat = b
    this.of = 'inner'
  }
  I.DE = function(a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  }
  I.prototype.ab = function(a) {
    return a && this.lat == a.lat && this.lng == a.lng
  }
  function Uc() {}
  Uc.prototype.fy = function() {
    ca('lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0')
  }
  Uc.prototype.Dj = function() {
    ca('pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0')
  }
  function Vc() {}
  var gb = {
    FK: function(a, b, c) {
      K.load(
        'coordtransutils',
        function() {
          gb.sV(a, b, c)
        },
        o
      )
    },
    EK: function(a, b, c) {
      K.load(
        'coordtransutils',
        function() {
          gb.rV(a, b, c)
        },
        o
      )
    }
  }
  function Wc() {
    this.Oa = []
    var a = this
    K.load('convertor', function() {
      a.mQ()
    })
  }
  x.ua(Wc, x.lang.Da, 'Convertor')
  x.extend(Wc.prototype, {
    translate: function(a, b, c, d) {
      this.Oa.push({ method: 'translate', arguments: [a, b, c, d] })
    }
  })
  U(Wc.prototype, { translate: Wc.prototype.translate })
  function T() {}
  T.prototype = new Uc()
  x.extend(T, {
    CP: 6370996.81,
    JG: [1.289059486e7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    Lu: [75, 60, 45, 30, 15, 0],
    IP: [
      [
        1.410526172116255e-8,
        8.98305509648872e-6,
        -1.9939833816331,
        200.9824383106796,
        -187.2403703815547,
        91.6087516669843,
        -23.38765649603339,
        2.57121317296198,
        -0.03801003308653,
        1.73379812e7
      ],
      [
        -7.435856389565537e-9,
        8.983055097726239e-6,
        -0.78625201886289,
        96.32687599759846,
        -1.85204757529826,
        -59.36935905485877,
        47.40033549296737,
        -16.50741931063887,
        2.28786674699375,
        1.026014486e7
      ],
      [
        -3.030883460898826e-8,
        8.98305509983578e-6,
        0.30071316287616,
        59.74293618442277,
        7.357984074871,
        -25.38371002664745,
        13.45380521110908,
        -3.29883767235584,
        0.32710905363475,
        6856817.37
      ],
      [
        -1.981981304930552e-8,
        8.983055099779535e-6,
        0.03278182852591,
        40.31678527705744,
        0.65659298677277,
        -4.44255534477492,
        0.85341911805263,
        0.12923347998204,
        -0.04625736007561,
        4482777.06
      ],
      [
        3.09191371068437e-9,
        8.983055096812155e-6,
        6.995724062e-5,
        23.10934304144901,
        -2.3663490511e-4,
        -0.6321817810242,
        -0.00663494467273,
        0.03430082397953,
        -0.00466043876332,
        2555164.4
      ],
      [
        2.890871144776878e-9,
        8.983055095805407e-6,
        -3.068298e-8,
        7.47137025468032,
        -3.53937994e-6,
        -0.02145144861037,
        -1.234426596e-5,
        1.0322952773e-4,
        -3.23890364e-6,
        826088.5
      ]
    ],
    GG: [
      [
        -0.0015702102444,
        111320.7020616939,
        1704480524535203,
        -10338987376042340,
        26112667856603880,
        -35149669176653700,
        26595700718403920,
        -10725012454188240,
        1800819912950474,
        82.5
      ],
      [
        8.277824516172526e-4,
        111320.7020463578,
        6.477955746671607e8,
        -4.082003173641316e9,
        1.077490566351142e10,
        -1.517187553151559e10,
        1.205306533862167e10,
        -5.124939663577472e9,
        9.133119359512032e8,
        67.5
      ],
      [
        0.00337398766765,
        111320.7020202162,
        4481351.045890365,
        -2.339375119931662e7,
        7.968221547186455e7,
        -1.159649932797253e8,
        9.723671115602145e7,
        -4.366194633752821e7,
        8477230.501135234,
        52.5
      ],
      [
        0.00220636496208,
        111320.7020209128,
        51751.86112841131,
        3796837.749470245,
        992013.7397791013,
        -1221952.21711287,
        1340652.697009075,
        -620943.6990984312,
        144416.9293806241,
        37.5
      ],
      [
        -3.441963504368392e-4,
        111320.7020576856,
        278.2353980772752,
        2485758.690035394,
        6070.750963243378,
        54821.18345352118,
        9540.606633304236,
        -2710.55326746645,
        1405.483844121726,
        22.5
      ],
      [
        -3.218135878613132e-4,
        111320.7020701615,
        0.00369383431289,
        823725.6402795718,
        0.46104986909093,
        2351.343141331292,
        1.58060784298199,
        8.77738589078284,
        0.37238884252424,
        7.45
      ]
    ],
    Q2: function(a, b) {
      if (!a || !b) return 0
      var c,
        d,
        a = this.ub(a)
      if (!a) return 0
      c = this.Zk(a.lng)
      d = this.Zk(a.lat)
      b = this.ub(b)
      return !b ? 0 : this.Ue(c, this.Zk(b.lng), d, this.Zk(b.lat))
    },
    ep: function(a, b) {
      if (!a || !b) return 0
      a.lng = this.cE(a.lng, -180, 180)
      a.lat = this.gE(a.lat, -74, 74)
      b.lng = this.cE(b.lng, -180, 180)
      b.lat = this.gE(b.lat, -74, 74)
      return this.Ue(
        this.Zk(a.lng),
        this.Zk(b.lng),
        this.Zk(a.lat),
        this.Zk(b.lat)
      )
    },
    ub: function(a) {
      if (a === p || a === j) return new I(0, 0)
      var b, c
      b = new I(Math.abs(a.lng), Math.abs(a.lat))
      for (var d = 0; d < this.JG.length; d++)
        if (b.lat >= this.JG[d]) {
          c = this.IP[d]
          break
        }
      a = this.GK(a, c)
      return (a = new I(a.lng.toFixed(6), a.lat.toFixed(6)))
    },
    tb: function(a) {
      if (
        a === p ||
        a === j ||
        180 < a.lng ||
        -180 > a.lng ||
        90 < a.lat ||
        -90 > a.lat
      )
        return new I(0, 0)
      var b, c
      a.lng = this.cE(a.lng, -180, 180)
      a.lat = this.gE(a.lat, -74, 74)
      b = new I(a.lng, a.lat)
      for (var d = 0; d < this.Lu.length; d++)
        if (b.lat >= this.Lu[d]) {
          c = this.GG[d]
          break
        }
      if (!c)
        for (d = 0; d < this.Lu.length; d++)
          if (b.lat <= -this.Lu[d]) {
            c = this.GG[d]
            break
          }
      a = this.GK(a, c)
      return (a = new I(a.lng.toFixed(2), a.lat.toFixed(2)))
    },
    GK: function(a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng),
          d = Math.abs(a.lat) / b[9],
          d =
            b[2] +
            b[3] * d +
            b[4] * d * d +
            b[5] * d * d * d +
            b[6] * d * d * d * d +
            b[7] * d * d * d * d * d +
            b[8] * d * d * d * d * d * d,
          c = c * (0 > a.lng ? -1 : 1),
          d = d * (0 > a.lat ? -1 : 1)
        return new I(c, d)
      }
    },
    Ue: function(a, b, c, d) {
      return (
        this.CP *
        Math.acos(
          Math.sin(c) * Math.sin(d) +
            Math.cos(c) * Math.cos(d) * Math.cos(b - a)
        )
      )
    },
    Zk: function(a) {
      return (Math.PI * a) / 180
    },
    P4: function(a) {
      return (180 * a) / Math.PI
    },
    gE: function(a, b, c) {
      b != p && (a = Math.max(a, b))
      c != p && (a = Math.min(a, c))
      return a
    },
    cE: function(a, b, c) {
      for (; a > c; ) a -= c - b
      for (; a < b; ) a += c - b
      return a
    }
  })
  x.extend(T.prototype, {
    Hk: function(a) {
      return T.tb(a)
    },
    fy: function(a) {
      a = Za(a, this.map)
      a = T.tb(a)
      return new S(a.lng, a.lat)
    },
    yl: function(a) {
      a = T.tb(a)
      return new S(a.lng, a.lat)
    },
    rh: function(a) {
      return T.ub(a)
    },
    Dj: function(a) {
      a = new I(a.x, a.y)
      return fb(T.ub(a), this.map)
    },
    v1: function(a) {
      a = new I(a.x, a.y)
      return T.ub(a)
    },
    Kp: function(a, b, c, d, e) {
      if (a)
        return (
          (a = this.Hk(a, e)),
          (b = this.yc(b)),
          new S(
            Math.round((a.lng - c.lng) / b + d.width / 2),
            Math.round((c.lat - a.lat) / b + d.height / 2)
          )
        )
    },
    zg: function(a, b, c, d, e) {
      if (a)
        return (
          (b = this.yc(b)),
          this.rh(
            new I(
              c.lng + b * (a.x - d.width / 2),
              c.lat - b * (a.y - d.height / 2)
            ),
            e
          )
        )
    },
    yc: function(a) {
      return Math.pow(2, 18 - a)
    },
    g_: da('map')
  })
  function jb() {
    this.ij = 'bj'
  }
  jb.prototype = new T()
  x.extend(jb.prototype, {
    Hk: function(a, b) {
      return this.XQ(b, T.tb(a))
    },
    rh: function(a, b) {
      return T.ub(this.YQ(b, a))
    },
    lngLatToPointFor3D: function(a, b) {
      var c = this,
        d = T.tb(a)
      K.load(
        'coordtrans',
        function() {
          var a = Vc.eE(c.ij || 'bj', d),
            a = new S(a.x, a.y)
          b && b(a)
        },
        o
      )
    },
    pointToLngLatFor3D: function(a, b) {
      var c = this,
        d = new I(a.x, a.y)
      K.load(
        'coordtrans',
        function() {
          var a = Vc.dE(c.ij || 'bj', d),
            a = new I(a.lng, a.lat),
            a = T.ub(a)
          b && b(a)
        },
        o
      )
    },
    XQ: function(a, b) {
      if (K.kb('coordtrans').Cd == K.Jj.kq) {
        var c = Vc.eE(a || 'bj', b)
        return new I(c.x, c.y)
      }
      K.load('coordtrans', t())
      return new I(0, 0)
    },
    YQ: function(a, b) {
      if (K.kb('coordtrans').Cd == K.Jj.kq) {
        var c = Vc.dE(a || 'bj', b)
        return new I(c.lng, c.lat)
      }
      K.load('coordtrans', t())
      return new I(0, 0)
    },
    yc: function(a) {
      return Math.pow(2, 20 - a)
    },
    Ny: da('map')
  })
  function Xc() {
    this.Lb = 'overlay'
  }
  x.lang.ua(Xc, x.lang.Da, 'Overlay')
  Xc.Km = function(a) {
    a *= 1
    return !a ? 0 : (-1e5 * a) << 1
  }
  x.extend(Xc.prototype, {
    Ie: function(a) {
      if (!this.V && $a(this.initialize) && (this.V = this.initialize(a)))
        this.V.style.WebkitUserSelect = 'none'
      this.draw()
    },
    initialize: function() {
      ca('initialize\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    draw: function() {
      ca('draw\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    remove: function() {
      this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V)
      this.V = p
      this.dispatchEvent(new M('onremove'))
    },
    U: function() {
      this.V && x.K.U(this.V)
    },
    show: function() {
      this.V && x.K.show(this.V)
    },
    oh: function() {
      return !this.V ||
        'none' == this.V.style.display ||
        'hidden' == this.V.style.visibility
        ? q
        : o
    }
  })
  z.Xe(function(a) {
    function b(a, b) {
      var c = F('div'),
        g = c.style
      g.position = 'absolute'
      g.top = g.left = g.width = g.height = '0'
      g.zIndex = b
      a.appendChild(c)
      return c
    }
    var c = a.R
    c.qd = a.qd = b(a.platform, 200)
    a.Yd.HD = b(c.qd, 800)
    a.Yd.WE = b(c.qd, 700)
    a.Yd.uL = b(c.qd, 600)
    a.Yd.OE = b(c.qd, 500)
    a.Yd.$M = b(c.qd, 400)
    a.Yd.aN = b(c.qd, 300)
    a.Yd.hP = b(c.qd, 201)
    a.Yd.Gt = b(c.qd, 200)
  })
  function ib() {
    x.lang.Da.call(this)
    Xc.call(this)
    this.map = p
    this.Pa = o
    this.Bb = p
    this.wH = 0
  }
  x.lang.ua(ib, Xc, 'OverlayInternal')
  x.extend(ib.prototype, {
    initialize: function(a) {
      this.map = a
      x.lang.Da.call(this, this.ba)
      return p
    },
    Dx: v('map'),
    draw: t(),
    Mj: t(),
    remove: function() {
      this.map = p
      x.lang.hx(this.ba)
      Xc.prototype.remove.call(this)
    },
    U: function() {
      this.Pa !== q && (this.Pa = q)
    },
    show: function() {
      this.Pa !== o && (this.Pa = o)
    },
    oh: function() {
      return !this.V ? q : !!this.Pa
    },
    Ka: v('V'),
    gO: function(a) {
      var a = a || {},
        b
      for (b in a) this.z[b] = a[b]
    },
    fu: da('zIndex'),
    qj: function() {
      this.z.qj = o
    },
    AW: function() {
      this.z.qj = q
    },
    Eo: da('hg'),
    Mp: function() {
      this.hg = p
    }
  })
  function Yc() {
    this.map = p
    this.wa = {}
    this.Fe = []
  }
  z.Xe(function(a) {
    var b = new Yc()
    b.map = a
    a.wa = b.wa
    a.Fe = b.Fe
    a.addEventListener('load', function(a) {
      b.draw(a)
    })
    a.addEventListener('moveend', function(a) {
      b.draw(a)
    })
    ;(x.da.ma && 8 > x.da.ma) || 'BackCompat' === document.compatMode
      ? a.addEventListener('zoomend', function(a) {
          setTimeout(function() {
            b.draw(a)
          }, 20)
        })
      : a.addEventListener('zoomend', function(a) {
          b.draw(a)
        })
    a.addEventListener('maptypechange', function(a) {
      b.draw(a)
    })
    a.addEventListener('addoverlay', function(a) {
      a = a.target
      if (a instanceof ib) b.wa[a.ba] || (b.wa[a.ba] = a)
      else {
        for (var d = q, e = 0, f = b.Fe.length; e < f; e++)
          if (b.Fe[e] === a) {
            d = o
            break
          }
        d || b.Fe.push(a)
      }
    })
    a.addEventListener('removeoverlay', function(a) {
      a = a.target
      if (a instanceof ib) delete b.wa[a.ba]
      else
        for (var d = 0, e = b.Fe.length; d < e; d++)
          if (b.Fe[d] === a) {
            b.Fe.splice(d, 1)
            break
          }
    })
    a.addEventListener('clearoverlays', function() {
      this.Wc()
      for (var a in b.wa) b.wa[a].z.qj && (b.wa[a].remove(), delete b.wa[a])
      a = 0
      for (var d = b.Fe.length; a < d; a++)
        b.Fe[a].enableMassClear !== q &&
          (b.Fe[a].remove(), (b.Fe[a] = p), b.Fe.splice(a, 1), a--, d--)
    })
    a.addEventListener('infowindowopen', function() {
      var a = this.Bb
      a && (x.K.U(a.zc), x.K.U(a.ac))
    })
    a.addEventListener('movestart', function() {
      this.lh() && this.lh().oJ()
    })
    a.addEventListener('moveend', function() {
      this.lh() && this.lh().eJ()
    })
  })
  Yc.prototype.draw = function(a) {
    if (z.oq) {
      var b = z.oq.Zs(this.map)
      'canvas' === b.Lb && b.canvas && b.SQ(b.canvas.getContext('2d'))
    }
    for (var c in this.wa) this.wa[c].draw(a)
    x.jc.Fb(this.Fe, function(a) {
      a.draw()
    })
    this.map.R.ob && this.map.R.ob.ta()
    z.oq && b.KF()
  }
  function Zc(a) {
    ib.call(this)
    a = a || {}
    this.z = {
      strokeColor: a.strokeColor || '#3a6bdb',
      lc: a.strokeWeight || 5,
      sd: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || 'solid',
      qj: a.enableMassClear === q ? q : o,
      Bk: p,
      Dm: p,
      mf: a.enableEditing === o ? o : q,
      iN: 5,
      p0: q,
      jf: a.enableClicking === q ? q : o,
      ri: a.icons && 0 < a.icons.length ? a.icons : p
    }
    0 >= this.z.lc && (this.z.lc = 5)
    if (0 > this.z.sd || 1 < this.z.sd) this.z.sd = 0.65
    if (0 > this.z.qg || 1 < this.z.qg) this.z.qg = 0.65
    'solid' != this.z.strokeStyle &&
      'dashed' != this.z.strokeStyle &&
      (this.z.strokeStyle = 'solid')
    this.V = p
    this.Vu = new hb(0, 0)
    this.gf = []
    this.mc = []
    this.Qa = {}
  }
  x.lang.ua(Zc, ib, 'Graph')
  Zc.yx = function(a) {
    var b = []
    if (!a) return b
    bb(a) &&
      x.jc.Fb(a.split(';'), function(a) {
        a = a.split(',')
        b.push(new N(a[0], a[1]))
      })
    '[object Array]' == Object.prototype.toString.apply(a) &&
      0 < a.length &&
      (b = a)
    return b
  }
  Zc.fF = [0.09, 0.005, 1.0e-4, 1.0e-5]
  x.extend(Zc.prototype, {
    initialize: function(a) {
      this.map = a
      return p
    },
    draw: t(),
    Tr: function(a) {
      this.gf.length = 0
      this.ha = Zc.yx(a).slice(0)
      this.Ih()
    },
    le: function(a) {
      this.Tr(a)
    },
    Ih: function() {
      if (this.ha) {
        var a = this
        a.Vu = new hb()
        x.jc.Fb(this.ha, function(b) {
          a.Vu.extend(b)
        })
      }
    },
    ve: v('ha'),
    tn: function(a, b) {
      b &&
        this.ha[a] &&
        ((this.gf.length = 0), (this.ha[a] = new I(b.lng, b.lat)), this.Ih())
    },
    setStrokeColor: function(a) {
      this.z.strokeColor = a
    },
    XX: function() {
      return this.z.strokeColor
    },
    $p: function(a) {
      0 < a && (this.z.lc = a)
    },
    VL: function() {
      return this.z.lc
    },
    Yp: function(a) {
      a == j || 1 < a || 0 > a || (this.z.sd = a)
    },
    YX: function() {
      return this.z.sd
    },
    Zt: function(a) {
      1 < a || 0 > a || (this.z.qg = a)
    },
    uX: function() {
      return this.z.qg
    },
    Zp: function(a) {
      ;('solid' != a && 'dashed' != a) || (this.z.strokeStyle = a)
    },
    UL: function() {
      return this.z.strokeStyle
    },
    setFillColor: function(a) {
      this.z.fillColor = a || ''
    },
    tX: function() {
      return this.z.fillColor
    },
    Id: v('Vu'),
    remove: function() {
      this.map && this.map.removeEventListener('onmousemove', this.tv)
      ib.prototype.remove.call(this)
      this.gf.length = 0
    },
    mf: function() {
      if (!(2 > this.ha.length)) {
        this.z.mf = o
        var a = this
        K.load(
          'poly',
          function() {
            a.$l()
          },
          o
        )
      }
    },
    zW: function() {
      this.z.mf = q
      var a = this
      K.load(
        'poly',
        function() {
          a.rk()
        },
        o
      )
    },
    qX: function() {
      return this.z.mf
    }
  })
  function $c(a) {
    ib.call(this)
    this.V = this.map = p
    this.z = {
      width: 0,
      height: 0,
      Aa: new L(0, 0),
      opacity: 1,
      background: 'transparent',
      ey: 1,
      NM: '#000',
      SY: 'solid',
      point: p
    }
    this.gO(a)
    this.point = this.z.point
  }
  x.lang.ua($c, ib, 'Division')
  x.extend($c.prototype, {
    Mj: function() {
      var a = this.z,
        b = this.content,
        c = ['<div class="BMap_Division" style="position:absolute;']
      c.push('width:' + a.width + 'px;display:block;')
      c.push('overflow:hidden;')
      'none' != a.borderColor &&
        c.push('border:' + a.ey + 'px ' + a.SY + ' ' + a.NM + ';')
      c.push(
        'opacity:' + a.opacity + '; filter:(opacity=' + 100 * a.opacity + ')'
      )
      c.push('background:' + a.background + ';')
      c.push('z-index:60;">')
      c.push(b)
      c.push('</div>')
      this.V = Bb(this.map.Rf().WE, c.join(''))
    },
    initialize: function(a) {
      this.map = a
      this.Mj()
      this.V &&
        x.M(this.V, H() ? 'touchstart' : 'mousedown', function(a) {
          na(a)
        })
      return this.V
    },
    draw: function() {
      var a = this.map.We(this.z.point)
      this.z.Aa = new L(
        -Math.round(this.z.width / 2) - Math.round(this.z.ey),
        -Math.round(this.z.height / 2) - Math.round(this.z.ey)
      )
      this.V.style.left = a.x + this.z.Aa.width + 'px'
      this.V.style.top = a.y + this.z.Aa.height + 'px'
    },
    ia: function() {
      return this.z.point
    },
    o1: function() {
      return this.map.Cc(this.ia())
    },
    ta: function(a) {
      this.z.point = a
      this.draw()
    },
    i_: function(a, b) {
      this.z.width = Math.round(a)
      this.z.height = Math.round(b)
      this.V &&
        ((this.V.style.width = this.z.width + 'px'),
        (this.V.style.height = this.z.height + 'px'),
        this.draw())
    }
  })
  function ad(a, b, c) {
    a &&
      b &&
      ((this.imageUrl = a),
      (this.size = b),
      (a = new L(Math.floor(b.width / 2), Math.floor(b.height / 2))),
      (c = c || {}),
      (a = c.anchor || a),
      (b = c.imageOffset || new L(0, 0)),
      (this.imageSize = c.imageSize),
      (this.anchor = a),
      (this.imageOffset = b),
      (this.infoWindowAnchor = c.infoWindowAnchor || this.anchor),
      (this.printImageUrl = c.printImageUrl || ''))
  }
  x.extend(ad.prototype, {
    hO: function(a) {
      a && (this.imageUrl = a)
    },
    y_: function(a) {
      a && (this.printImageUrl = a)
    },
    Ce: function(a) {
      a && (this.size = new L(a.width, a.height))
    },
    qc: function(a) {
      a && (this.anchor = new L(a.width, a.height))
    },
    $t: function(a) {
      a && (this.imageOffset = new L(a.width, a.height))
    },
    o_: function(a) {
      a && (this.infoWindowAnchor = new L(a.width, a.height))
    },
    l_: function(a) {
      a && (this.imageSize = new L(a.width, a.height))
    },
    toString: ea('Icon')
  })
  function bd(a, b) {
    if (a) {
      b = b || {}
      this.style = {
        anchor: b.anchor || new L(0, 0),
        fillColor: b.fillColor || '#000',
        qg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || '#000',
        sd: b.strokeOpacity || 1,
        lc: b.strokeWeight
      }
      this.Lb = 'number' === typeof a ? a : 'UserDefined'
      this.Li = this.style.anchor
      this.zr = new L(0, 0)
      this.anchor = p
      this.zB = a
      var c = this
      K.load(
        'symbol',
        function() {
          c.Rn()
        },
        o
      )
    }
  }
  x.extend(bd.prototype, {
    setPath: da('zB'),
    setAnchor: function(a) {
      this.Li = this.style.anchor = a
    },
    setRotation: function(a) {
      this.style.rotation = a
    },
    setScale: function(a) {
      this.style.scale = a
    },
    setStrokeWeight: function(a) {
      this.style.lc = a
    },
    setStrokeColor: function(a) {
      a = x.ns.FC(a, this.style.sd)
      this.style.strokeColor = a
    },
    setStrokeOpacity: function(a) {
      this.style.sd = a
    },
    setFillOpacity: function(a) {
      this.style.qg = a
    },
    setFillColor: function(a) {
      this.style.fillColor = a
    }
  })
  function cd(a, b, c, d) {
    a &&
      ((this.Nv = {}),
      (this.sL = d ? !!d : q),
      (this.hd = []),
      (this.Q_ = a instanceof bd ? a : p),
      (this.YI = b === j ? o : !!(b.indexOf('%') + 1)),
      (this.ek = isNaN(parseFloat(b))
        ? 1
        : this.YI
        ? parseFloat(b) / 100
        : parseFloat(b)),
      (this.ZI = !!(c.indexOf('%') + 1)),
      (this.repeat =
        c != j ? (this.ZI ? parseFloat(c) / 100 : parseFloat(c)) : 0))
  }
  function dd(a, b) {
    x.lang.Da.call(this)
    this.content = a
    this.map = p
    b = b || {}
    this.z = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      Aa: b.offset || new L(0, 0),
      title: b.title || '',
      XE: b.maxContent || '',
      fh: b.enableMaximize || q,
      Os: b.enableAutoPan === q ? q : o,
      tD: b.enableCloseOnClick === q ? q : o,
      margin: b.margin || [10, 10, 40, 10],
      AC: b.collisions || [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10]
      ],
      rY: q,
      mZ: b.onClosing || ea(o),
      jL: q,
      yD: b.enableParano === o ? o : q,
      message: b.message,
      AD: b.enableSearchTool === o ? o : q,
      Px: b.headerContent || '',
      uD: b.enableContentScroll || q
    }
    if (
      0 != this.z.width &&
      (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)
    )
      this.z.width = 730
    if (
      0 != this.z.height &&
      (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)
    )
      this.z.height = 650
    if (
      0 != this.z.maxWidth &&
      (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)
    )
      this.z.maxWidth = 730
    this.fe = q
    this.Hi = G.qa
    this.cb = p
    var c = this
    K.load('infowindow', function() {
      c.Ab()
    })
  }
  x.lang.ua(dd, x.lang.Da, 'InfoWindow')
  x.extend(dd.prototype, {
    setWidth: function(a) {
      ;(!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.z.width = a))
    },
    setHeight: function(a) {
      ;(!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)),
        (this.z.height = a))
    },
    kO: function(a) {
      ;(!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.z.maxWidth = a))
    },
    Dc: function(a) {
      this.z.title = a
    },
    getTitle: function() {
      return this.z.title
    },
    ad: da('content'),
    zk: v('content'),
    bu: function(a) {
      this.z.XE = a + ''
    },
    ke: t(),
    Os: function() {
      this.z.Os = o
    },
    disableAutoPan: function() {
      this.z.Os = q
    },
    enableCloseOnClick: function() {
      this.z.tD = o
    },
    disableCloseOnClick: function() {
      this.z.tD = q
    },
    fh: function() {
      this.z.fh = o
    },
    kx: function() {
      this.z.fh = q
    },
    show: function() {
      this.Pa = o
    },
    U: function() {
      this.Pa = q
    },
    close: function() {
      this.U()
    },
    jy: function() {
      this.fe = o
    },
    restore: function() {
      this.fe = q
    },
    oh: function() {
      return this.Va()
    },
    Va: ea(q),
    ia: function() {
      if (this.cb && this.cb.ia) return this.cb.ia()
    },
    Qf: function() {
      return this.z.Aa
    }
  })
  Ma.prototype.Mb = function(a, b) {
    if (a instanceof dd && (b instanceof N || b instanceof I)) {
      var c = this.R
      c.Um
        ? c.Um.ta(b)
        : ((c.Um = new V(b, {
            icon: new ad(G.qa + 'blank.gif', { width: 1, height: 1 }),
            offset: new L(0, 0),
            clickable: q
          })),
          (c.Um.VR = 1))
      this.Ja(c.Um)
      c.Um.Mb(a)
    }
  }
  Ma.prototype.Wc = function() {
    var a = this.R.ob || this.R.tl
    a && a.cb && a.cb.Wc()
  }
  ib.prototype.Mb = function(a) {
    this.map &&
      (this.map.Wc(),
      (a.Pa = o),
      (this.map.R.tl = a),
      (a.cb = this),
      x.lang.Da.call(a, a.ba))
  }
  ib.prototype.Wc = function() {
    this.map &&
      this.map.R.tl &&
      ((this.map.R.tl.Pa = q), x.lang.hx(this.map.R.tl.ba), (this.map.R.tl = p))
  }
  function ed(a, b) {
    ib.call(this)
    this.content = a
    this.V = this.map = p
    b = b || {}
    this.z = {
      width: 0,
      Aa: b.offset || new L(0, 0),
      cq: {
        backgroundColor: '#fff',
        border: '1px solid #f00',
        padding: '1px',
        whiteSpace: 'nowrap',
        font: '12px ' + G.fontFamily,
        zIndex: '80',
        MozUserSelect: 'none'
      },
      position: b.position || p,
      qj: b.enableMassClear === q ? q : o,
      jf: o
    }
    0 > this.z.width && (this.z.width = 0)
    Ib(b.enableClicking) && (this.z.jf = b.enableClicking)
    this.point = this.z.position
    var c = this
    K.load('marker', function() {
      c.Ab()
    })
  }
  x.lang.ua(ed, ib, 'Label')
  x.extend(ed.prototype, {
    ia: function() {
      return this.Cv ? this.Cv.ia() : this.point
    },
    ta: function(a) {
      if ((a instanceof N || a instanceof I) && !this.Ex())
        this.point = this.z.position = new I(a.lng, a.lat)
    },
    ad: da('content'),
    JF: function(a) {
      0 <= a && 1 >= a && (this.z.opacity = a)
    },
    Ye: function(a) {
      a instanceof L && (this.z.Aa = new L(a.width, a.height))
    },
    Qf: function() {
      return this.z.Aa
    },
    Nd: function(a) {
      a = a || {}
      this.z.cq = x.extend(this.z.cq, a)
    },
    Bi: function(a) {
      return this.Nd(a)
    },
    Dc: function(a) {
      this.z.title = a || ''
    },
    getTitle: function() {
      return this.z.title
    },
    jO: function(a) {
      this.point = (this.Cv = a)
        ? (this.z.position = a.ia())
        : (this.z.position = p)
    },
    Ex: function() {
      return this.Cv || p
    },
    zk: v('content')
  })
  function fd(a, b) {
    if (0 !== arguments.length) {
      ib.apply(this, arguments)
      b = b || {}
      this.z = {
        $a: a,
        opacity: b.opacity || 1,
        up: b.imageURL || '',
        Es: b.displayOnMinLevel || 1,
        qj: b.enableMassClear === q ? q : o,
        Ds: b.displayOnMaxLevel || 19,
        K_: b.stretch || q
      }
      0 === b.opacity && (this.z.opacity = 0)
      var c = this
      K.load('groundoverlay', function() {
        c.Ab()
      })
    }
  }
  x.lang.ua(fd, ib, 'GroundOverlay')
  x.extend(fd.prototype, {
    setBounds: function(a) {
      this.z.$a = a
    },
    getBounds: function() {
      return this.z.$a
    },
    setOpacity: function(a) {
      this.z.opacity = a
    },
    getOpacity: function() {
      return this.z.opacity
    },
    setImageURL: function(a) {
      this.z.up = a
    },
    getImageURL: function() {
      return this.z.up
    },
    setDisplayOnMinLevel: function(a) {
      this.z.Es = a
    },
    getDisplayOnMinLevel: function() {
      return this.z.Es
    },
    setDisplayOnMaxLevel: function(a) {
      this.z.Ds = a
    },
    getDisplayOnMaxLevel: function() {
      return this.z.Ds
    }
  })
  var gd = 3,
    hd = 4
  function id() {
    var a = document.createElement('canvas')
    return !(!a.getContext || !a.getContext('2d'))
  }
  function jd(a, b) {
    var c = this
    id() &&
      (a === j && ca(Error('\u6ca1\u6709\u4f20\u5165points\u6570\u636e')),
      '[object Array]' !== Object.prototype.toString.call(a) &&
        ca(Error('points\u6570\u636e\u4e0d\u662f\u6570\u7ec4')),
      (b = b || {}),
      ib.apply(c, arguments),
      (c.ea = { ha: a }),
      (c.z = {
        shape: b.shape || gd,
        size: b.size || hd,
        color: b.color || '#fa937e',
        qj: o
      }),
      (this.wB = []),
      (this.pe = []),
      K.load('pointcollection', function() {
        for (var a = 0, b; (b = c.wB[a]); a++) c[b.method].apply(c, b.arguments)
        for (a = 0; (b = c.pe[a]); a++) c[b.method].apply(c, b.arguments)
      }))
  }
  x.lang.ua(jd, ib, 'PointCollection')
  x.extend(jd.prototype, {
    initialize: function(a) {
      this.wB && this.wB.push({ method: 'initialize', arguments: arguments })
    },
    setPoints: function(a) {
      this.pe && this.pe.push({ method: 'setPoints', arguments: arguments })
    },
    setStyles: function(a) {
      this.pe && this.pe.push({ method: 'setStyles', arguments: arguments })
    },
    clear: function() {
      this.pe && this.pe.push({ method: 'clear', arguments: arguments })
    },
    remove: function() {
      this.pe && this.pe.push({ method: 'remove', arguments: arguments })
    }
  })
  var kd = new ad(G.qa + 'marker_red_sprite.png', new L(19, 25), {
      anchor: new L(10, 25),
      infoWindowAnchor: new L(10, 0)
    }),
    ld = new ad(G.qa + 'marker_red_sprite.png', new L(20, 11), {
      anchor: new L(6, 11),
      imageOffset: new L(-19, -13)
    })
  function V(a, b) {
    ib.call(this)
    b = b || {}
    this.point = a
    this.Eq = this.map = p
    this.z = {
      Aa: b.offset || new L(0, 0),
      yj: b.icon || kd,
      Tk: ld,
      title: b.title || '',
      label: p,
      nK: b.baseZIndex || 0,
      jf: o,
      j5: q,
      JE: q,
      qj: b.enableMassClear === q ? q : o,
      Gb: q,
      RN: b.raiseOnDrag === o ? o : q,
      YN: q,
      Gd: b.draggingCursor || G.Gd,
      rotation: b.rotation || 0
    }
    b.icon && !b.shadow && (this.z.Tk = p)
    b.enableDragging && (this.z.Gb = b.enableDragging)
    Ib(b.enableClicking) && (this.z.jf = b.enableClicking)
    var c = this
    K.load('marker', function() {
      c.Ab()
    })
  }
  V.Qu = Xc.Km(-90) + 1e6
  V.CG = V.Qu + 1e6
  x.lang.ua(V, ib, 'Marker')
  x.extend(V.prototype, {
    Vb: function(a) {
      if (a instanceof ad || a instanceof bd) this.z.yj = a
    },
    fp: function() {
      return this.z.yj
    },
    Ry: function(a) {
      a instanceof ad && (this.z.Tk = a)
    },
    getShadow: function() {
      return this.z.Tk
    },
    nn: function(a) {
      this.z.label = a || p
    },
    aE: function() {
      return this.z.label
    },
    Gb: function() {
      this.z.Gb = o
    },
    YC: function() {
      this.z.Gb = q
    },
    co: v('point'),
    ia: function() {
      return this.point instanceof N || this.point instanceof I
        ? this.map
          ? fb(this.point, this.map)
          : new N(this.point.lng, this.point.lat)
        : this.point
    },
    ta: function(a) {
      this.point = this.map ? Za(a, this.map) : a
    },
    Ci: function(a, b) {
      this.z.JE = !!a
      a && (this.YG = b || 0)
    },
    Dc: function(a) {
      this.z.title = a + ''
    },
    getTitle: function() {
      return this.z.title
    },
    Ye: function(a) {
      a instanceof L && (this.z.Aa = a)
    },
    Qf: function() {
      return this.z.Aa
    },
    mn: da('Eq'),
    Py: function(a) {
      this.z.rotation = a
    },
    SL: function() {
      return this.z.rotation
    }
  })
  function pd(a, b) {
    Zc.call(this, b)
    b = b || {}
    this.z.qg = b.fillOpacity ? b.fillOpacity : 0.65
    this.z.fillColor =
      '' == b.fillColor ? '' : b.fillColor ? b.fillColor : '#fff'
    this.le(a)
    var c = this
    K.load('poly', function() {
      c.Ab()
    })
  }
  x.lang.ua(pd, Zc, 'Polygon')
  x.extend(pd.prototype, {
    le: function(a, b) {
      this.Ao = Zc.yx(a).slice(0)
      var c = Zc.yx(a).slice(0)
      1 < c.length && c.push(new N(c[0].lng, c[0].lat))
      Zc.prototype.le.call(this, c, b)
    },
    tn: function(a, b) {
      this.Ao[a] &&
        ((this.Ao[a] = new N(b.lng, b.lat)),
        (this.ha[a] = new N(b.lng, b.lat)),
        0 == a &&
          !this.ha[0].ab(this.ha[this.ha.length - 1]) &&
          (this.ha[this.ha.length - 1] = new N(b.lng, b.lat)),
        this.Ih())
    },
    ve: function() {
      var a = this.Ao
      0 == a.length && (a = this.ha)
      return a
    }
  })
  function qd(a, b) {
    Zc.call(this, b)
    this.Tr(a)
    var c = this
    K.load('poly', function() {
      c.Ab()
    })
  }
  x.lang.ua(qd, Zc, 'Polyline')
  function rd(a, b, c) {
    this.point = a
    this.xa = Math.abs(b)
    pd.call(this, [], c)
  }
  rd.fF = [0.01, 1.0e-4, 1.0e-5, 4.0e-6]
  x.lang.ua(rd, pd, 'Circle')
  x.extend(rd.prototype, {
    initialize: function(a) {
      this.map = a
      this.ha = this.pv(this.point, this.xa)
      this.Ih()
      return p
    },
    pc: function() {
      return fb(this.point, this.map)
    },
    wc: v('point'),
    Wf: function(a) {
      a && (this.point = a)
    },
    QL: v('xa'),
    wf: function(a) {
      this.xa = Math.abs(a)
    },
    pv: function(a, b) {
      if (!a || !b || !this.map) return []
      for (
        var c = [],
          d = b / 6378800,
          e = (Math.PI / 180) * a.lat,
          f = (Math.PI / 180) * a.lng,
          g = 0;
        360 > g;
        g += 9
      ) {
        var i = (Math.PI / 180) * g,
          k = Math.asin(
            Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)
          ),
          i = new N(
            (((f -
              Math.atan2(
                Math.sin(i) * Math.sin(d) * Math.cos(e),
                Math.cos(d) - Math.sin(e) * Math.sin(k)
              ) +
              Math.PI) %
              (2 * Math.PI)) -
              Math.PI) *
              (180 / Math.PI),
            k * (180 / Math.PI)
          )
        c.push(i)
      }
      d = c[0]
      c.push(new N(d.lng, d.lat))
      return c
    }
  })
  var sd = {}
  function td(a) {
    this.map = a
    this.Tm = []
    this.Xf = []
    this.Gg = []
    this.FV = 300
    this.pF = 0
    this.wg = {}
    this.hj = {}
    this.uh = 0
    this.CE = o
    this.OK = {}
    this.lo = this.Un(1)
    this.md = this.Un(2)
    this.El = this.Un(3)
    a.platform.appendChild(this.lo)
    a.platform.appendChild(this.md)
    a.platform.appendChild(this.El)
    var b = 256 * Math.pow(2, 15),
      c = 3 * b,
      a = T.tb(new I(180, 0)).lng,
      c = c - a,
      b = -3 * b,
      d = T.tb(new I(-180, 0)).lng
    this.AI = a
    this.BI = d
    this.cB = c + (d - b)
    this.CI = a - d
  }
  z.Xe(function(a) {
    var b = new td(a)
    b.ra()
    a.gb = b
  })
  x.extend(td.prototype, {
    ra: function() {
      var a = this,
        b = a.map
      b.addEventListener('loadcode', function() {
        a.gy()
      })
      b.addEventListener('addtilelayer', function(b) {
        a.$g(b)
      })
      b.addEventListener('removetilelayer', function(b) {
        a.Ah(b)
      })
      b.addEventListener('setmaptype', function(b) {
        a.Eg(b)
      })
      b.addEventListener('zoomstartcode', function(b) {
        a.Kc(b)
      })
      b.addEventListener('setcustomstyles', function(b) {
        a.au(b.target)
        a.Uf(o)
      })
    },
    gy: function() {
      var a = this
      if (x.da.ma)
        try {
          document.execCommand('BackgroundImageCache', q, o)
        } catch (b) {}
      this.loaded || a.Vx()
      a.Uf()
      this.loaded ||
        ((this.loaded = o),
        K.load('tile', function() {
          a.nQ()
        }))
    },
    Vx: function() {
      for (var a = this.map.oa().ur, b = 0; b < a.length; b++) {
        var c = new ud()
        x.extend(c, a[b])
        this.Tm.push(c)
        c.ra(this.map, this.lo)
      }
      this.au()
    },
    Un: function(a) {
      var b = F('div')
      b.style.position = 'absolute'
      b.style.overflow = 'visible'
      b.style.left = b.style.top = '0'
      b.style.zIndex = a
      return b
    },
    zf: function() {
      this.uh--
      var a = this
      this.CE &&
        (this.map.dispatchEvent(new M('onfirsttileloaded')), (this.CE = q))
      0 == this.uh &&
        (this.Pi && (clearTimeout(this.Pi), (this.Pi = p)),
        (this.Pi = setTimeout(function() {
          if (a.uh == 0) {
            a.map.dispatchEvent(new M('ontilesloaded'))
            a.CE = o
          }
          a.Pi = p
        }, 80)))
    },
    lE: function(a, b) {
      return 'TILE-' + b.ba + '-' + a[0] + '-' + a[1] + '-' + a[2]
    },
    Sx: function(a) {
      var b = a.Hb
      b && Ab(b) && b.parentNode.removeChild(b)
      delete this.wg[a.name]
      a.loaded || (vd(a), (a.Hb = p), (a.Wm = p))
    },
    Jm: function(a, b, c) {
      var d = this.map,
        e = d.oa(),
        f = d.Na,
        g = d.dc,
        i = e.yc(f),
        k = this.FL(),
        l = k[0],
        m = k[1],
        n = k[2],
        s = k[3],
        u = k[4],
        c = 'undefined' != typeof c ? c : 0,
        e = e.k.Ob,
        k = d.ba.replace(/^TANGRAM_/, '')
      for (this.Rc ? (this.Rc.length = 0) : (this.Rc = []); l < n; l++)
        for (var w = m; w < s; w++) {
          var y = l,
            B = w
          this.Rc.push([y, B])
          y = k + '_' + b + '_' + y + '_' + B + '_' + f
          this.OK[y] = y
        }
      this.Rc.sort(
        (function(a) {
          return function(b, c) {
            return (
              0.4 * Math.abs(b[0] - a[0]) +
              0.6 * Math.abs(b[1] - a[1]) -
              (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            )
          }
        })([u[0] - 1, u[1] - 1])
      )
      g = [Math.round(-g.lng / i), Math.round(g.lat / i)]
      l = -d.offsetY + d.height / 2
      a.style.left = -d.offsetX + d.width / 2 + 'px'
      a.style.top = l + 'px'
      this.Oe ? (this.Oe.length = 0) : (this.Oe = [])
      l = 0
      for (d = a.childNodes.length; l < d; l++)
        (w = a.childNodes[l]), (w.qr = q), this.Oe.push(w)
      if ((l = this.Zm)) for (var A in l) delete l[A]
      else this.Zm = {}
      this.Pe ? (this.Pe.length = 0) : (this.Pe = [])
      l = 0
      for (d = this.Rc.length; l < d; l++) {
        A = this.Rc[l][0]
        i = this.Rc[l][1]
        w = 0
        for (m = this.Oe.length; w < m; w++)
          if (
            ((n = this.Oe[w]),
            n.id == k + '_' + b + '_' + A + '_' + i + '_' + f)
          ) {
            n.qr = o
            this.Zm[n.id] = n
            break
          }
      }
      l = 0
      for (d = this.Oe.length; l < d; l++)
        (n = this.Oe[l]), n.qr || this.Pe.push(n)
      this.zn = []
      w = (e + c) * this.map.B.devicePixelRatio
      l = 0
      for (d = this.Rc.length; l < d; l++)
        (A = this.Rc[l][0]),
          (i = this.Rc[l][1]),
          (s = A * e + g[0] - c / 2),
          (u = (-1 - i) * e + g[1] - c / 2),
          (y = k + '_' + b + '_' + A + '_' + i + '_' + f),
          (m = this.Zm[y]),
          (n = p),
          m
            ? ((n = m.style),
              (n.left = s + 'px'),
              (n.top = u + 'px'),
              m.af || this.zn.push([A, i, m]))
            : (0 < this.Pe.length
                ? ((m = this.Pe.shift()),
                  m.getContext('2d').clearRect(-c / 2, -c / 2, w, w),
                  (n = m.style))
                : ((m = document.createElement('canvas')),
                  (n = m.style),
                  (n.position = 'absolute'),
                  (n.width = e + c + 'px'),
                  (n.height = e + c + 'px'),
                  this.$x() && (n.WebkitTransform = 'scale(1.001)'),
                  m.setAttribute('width', w),
                  m.setAttribute('height', w),
                  a.appendChild(m)),
              (m.id = y),
              (n.left = s + 'px'),
              (n.top = u + 'px'),
              -1 < y.indexOf('bg') &&
                ((s = '#F3F1EC'),
                this.map.B.Jo && (s = this.map.B.Jo),
                (n.background = s ? s : '')),
              this.zn.push([A, i, m])),
          (m.style.visibility = '')
      l = 0
      for (d = this.Pe.length; l < d; l++)
        this.Pe[l].style.visibility = 'hidden'
      return this.zn
    },
    $x: function() {
      return /M040/i.test(navigator.userAgent)
    },
    FL: function() {
      var a = this.map,
        b = a.oa(),
        c = b.qE(a.Na),
        d = a.dc,
        e = Math.ceil(d.lng / c),
        f = Math.ceil(d.lat / c),
        b = b.k.Ob,
        c = [e, f, ((d.lng - e * c) / c) * b, ((d.lat - f * c) / c) * b]
      return [
        c[0] - Math.ceil((a.width / 2 - c[2]) / b),
        c[1] - Math.ceil((a.height / 2 - c[3]) / b),
        c[0] + Math.ceil((a.width / 2 + c[2]) / b),
        c[1] + Math.ceil((a.height / 2 + c[3]) / b),
        c
      ]
    },
    F_: function(a, b, c, d) {
      var e = this
      e.X1 = b
      var f = this.map.oa(),
        g = e.lE(a, c),
        i = f.k.Ob,
        b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]],
        k = this.wg[g]
      if (this.map.oa() !== ab && this.map.oa() !== Ta) {
        var l = this.Kw(a[0], a[2]).offsetX
        b[0] += l
        b.s1 = l
      }
      k && k.Hb
        ? (yb(k.Hb, b),
          d &&
            ((d = new S(a[0], a[1])),
            (f = this.map.B.ze ? this.map.B.ze.style : 'normal'),
            (d = c.getTilesUrl(d, a[2], f)),
            (k.loaded = q),
            wd(k, d)),
          k.loaded
            ? this.zf()
            : xd(k, function() {
                e.zf()
              }))
        : (k = this.hj[g]) && k.Hb
        ? (c.Pb.insertBefore(k.Hb, c.Pb.lastChild),
          (this.wg[g] = k),
          yb(k.Hb, b),
          d &&
            ((d = new S(a[0], a[1])),
            (f = this.map.B.ze ? this.map.B.ze.style : 'normal'),
            (d = c.getTilesUrl(d, a[2], f)),
            (k.loaded = q),
            wd(k, d)),
          k.loaded
            ? this.zf()
            : xd(k, function() {
                e.zf()
              }))
        : ((k = i * Math.pow(2, f.Bm() - a[2])),
          new I(a[0] * k, a[1] * k),
          (d = new S(a[0], a[1])),
          (f = this.map.B.ze ? this.map.B.ze.style : 'normal'),
          (d = c.getTilesUrl(d, a[2], f)),
          (k = new yd(this, d, b, a, c)),
          xd(k, function() {
            e.zf()
          }),
          k.ko(),
          (this.wg[g] = k))
    },
    zf: function() {
      this.uh--
      var a = this
      0 == this.uh &&
        (this.Pi && (clearTimeout(this.Pi), (this.Pi = p)),
        (this.Pi = setTimeout(function() {
          if (a.uh == 0) {
            a.map.dispatchEvent(new M('ontilesloaded'))
            if (va) {
              if (sa && ta && ua) {
                var b = cb(),
                  c = a.map.vb()
                setTimeout(function() {
                  Sa(5030, {
                    load_script_time: ta - sa,
                    load_tiles_time: b - ua,
                    map_width: c.width,
                    map_height: c.height,
                    map_size: c.width * c.height
                  })
                }, 1e4)
                z.Kn('cus.fire', 'time', { z_imgfirstloaded: b - ua })
              }
              va = q
            }
          }
          a.Pi = p
        }, 80)))
    },
    lE: function(a, b) {
      return this.map.oa() === Qa
        ? 'TILE-' +
            b.ba +
            '-' +
            this.map.Qw +
            '-' +
            a[0] +
            '-' +
            a[1] +
            '-' +
            a[2]
        : 'TILE-' + b.ba + '-' + a[0] + '-' + a[1] + '-' + a[2]
    },
    Sx: function(a) {
      var b = a.Hb
      b && (zd(b), Ab(b) && b.parentNode.removeChild(b))
      delete this.wg[a.name]
      a.loaded || (zd(b), vd(a), (a.Hb = p), (a.Wm = p))
    },
    Kw: function(a, b) {
      for (
        var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2;
        a > e;

      )
        (a -= d), (c -= this.cB)
      for (; a < f; ) (a += d), (c += this.cB)
      c = Math.round(c / Math.pow(2, 18 - b))
      return { offsetX: c, ls: a }
    },
    HV: function(a) {
      for (var b = a.lng; b > this.AI; ) b -= this.CI
      for (; b < this.BI; ) b += this.CI
      a.lng = b
      return a
    },
    IV: function(a, b) {
      for (
        var c = 256 * Math.pow(2, 18 - b),
          d = Math.floor(this.AI / c),
          e = Math.floor(this.BI / c),
          c = Math.floor(this.cB / c),
          f = [],
          g = 0;
        g < a.length;
        g++
      ) {
        var i = a[g],
          k = i[0],
          i = i[1]
        if (k >= d) {
          var k = k + c,
            l = 'id_' + k + '_' + i + '_' + b
          a[l] || ((a[l] = o), f.push([k, i]))
        } else
          k <= e &&
            ((k -= c),
            (l = 'id_' + k + '_' + i + '_' + b),
            a[l] || ((a[l] = o), f.push([k, i])))
      }
      for (g = 0; g < f.length; g++) a.push(f[g])
      return a
    },
    Uf: function(a) {
      var b = this
      if (b.map.oa() == Qa)
        K.load(
          'coordtrans',
          function() {
            b.map.Sb ||
              ((b.map.Sb = Qa.yk(b.map.bh)), (b.map.Qw = Qa.DL(b.map.Sb)))
            b.EI()
          },
          o
        )
      else {
        if (a && a) for (var c in this.hj) delete this.hj[c]
        b.EI(a)
      }
    },
    EI: function(a) {
      var b = this.Tm.concat(this.Xf),
        c = b.length,
        d = this.map,
        e = d.oa(),
        f = d.dc
      this.map.oa() !== ab && this.map.oa() !== Ta && (f = this.HV(f))
      for (var g = 0; g < c; g++) {
        var i = b[g]
        if (i.fc && d.Na < i.fc) break
        if (i.Hw) {
          var k = (this.Pb = i.Pb)
          if (a) {
            var l = k
            if (l && l.childNodes)
              for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--)
                (m = l.childNodes[n]), l.removeChild(m), (m = p)
          }
          if (this.map.Wb()) {
            this.md.style.display = 'block'
            k.style.display = 'none'
            this.map.dispatchEvent(new M('vectorchanged'), { isvector: o })
            continue
          } else
            (k.style.display = 'block'),
              (this.md.style.display = 'none'),
              this.map.dispatchEvent(new M('vectorchanged'), { isvector: q })
        }
        if (!i.rI && !((i.yp && !this.map.Wb()) || (i.BM && this.map.Wb()))) {
          d = this.map
          e = d.oa()
          k = e.Fm()
          m = d.Na
          f = d.dc
          e == Qa && f.ab(new I(0, 0)) && (f = d.dc = k.Hk(d.re, d.Sb))
          var s = e.yc(m),
            k = e.qE(m),
            l = Math.ceil(f.lng / k),
            u = Math.ceil(f.lat / k),
            w = e.k.Ob,
            k = [l, u, ((f.lng - l * k) / k) * w, ((f.lat - u * k) / k) * w],
            n = k[0] - Math.ceil((d.width / 2 - k[2]) / w),
            l = k[1] - Math.ceil((d.height / 2 - k[3]) / w),
            u = k[0] + Math.ceil((d.width / 2 + k[2]) / w),
            y = 0
          e === Qa && 15 == d.ga() && (y = 1)
          e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y
          this.iK = new I(f.lng, f.lat)
          var B = this.wg,
            w = -this.iK.lng / s,
            y = this.iK.lat / s,
            s = [Math.ceil(w), Math.ceil(y)],
            f = d.ga(),
            A
          for (A in B) {
            var E = B[A],
              C = E.info
            ;(C[2] != f ||
              (C[2] == f &&
                (n > C[0] || u <= C[0] || l > C[1] || e <= C[1]))) &&
              this.Sx(E)
          }
          B = -d.offsetX + d.width / 2
          E = -d.offsetY + d.height / 2
          i.Pb &&
            ((i.Pb.style.left = Math.ceil(w + B) - s[0] + 'px'),
            (i.Pb.style.top = Math.ceil(y + E) - s[1] + 'px'),
            (i.Pb.style.WebkitTransform = 'translate3d(0,0,0)'))
          w = []
          for (d.$B = []; n < u; n++)
            for (y = l; y < e; y++) w.push([n, y]), d.$B.push({ x: n, y: y })
          this.map.oa() !== ab && this.map.oa() !== Ta && (w = this.IV(w, m))
          w.sort(
            (function(a) {
              return function(b, c) {
                return (
                  0.4 * Math.abs(b[0] - a[0]) +
                  0.6 * Math.abs(b[1] - a[1]) -
                  (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                )
              }
            })([k[0] - 1, k[1] - 1])
          )
          m = w.length
          this.uh += m
          for (n = 0; n < m; n++) this.F_([w[n][0], w[n][1], f], s, i, a)
        }
      }
    },
    $g: function(a) {
      var b = this,
        c = a.target,
        a = b.map.Wb()
      if (c instanceof eb) a && !c.Pm && (c.ra(this.map, this.md), (c.Pm = o))
      else if ((c.Gh && this.map.$g(c.Gh), c.yp)) {
        for (a = 0; a < b.Gg.length; a++) if (b.Gg[a] == c) return
        K.load(
          'vector',
          function() {
            c.ra(b.map, b.md)
            b.Gg.push(c)
          },
          o
        )
      } else {
        for (a = 0; a < b.Xf.length; a++) if (b.Xf[a] == c) return
        c.ra(this.map, this.El)
        b.Xf.push(c)
      }
    },
    Ah: function(a) {
      var a = a.target,
        b = this.map.Wb()
      if (a instanceof eb) b && a.Pm && (a.remove(), (a.Pm = q))
      else {
        a.Gh && this.map.Ah(a.Gh)
        if (a.yp)
          for (var b = 0, c = this.Gg.length; b < c; b++)
            a == this.Gg[b] && this.Gg.splice(b, 1)
        else {
          b = 0
          for (c = this.Xf.length; b < c; b++)
            a == this.Xf[b] && this.Xf.splice(b, 1)
        }
        a.remove()
      }
    },
    Eg: function() {
      for (var a = this.Tm, b = 0, c = a.length; b < c; b++) a[b].remove()
      delete this.Pb
      this.Tm = []
      this.hj = this.wg = {}
      this.Vx()
      this.Uf()
    },
    Kc: function() {
      var a = this
      a.ud && x.K.U(a.ud)
      setTimeout(function() {
        a.Uf()
        a.map.dispatchEvent(new M('onzoomend'))
      }, 10)
    },
    Z4: t(),
    au: function(a) {
      var b = this.map.oa()
      if (!this.map.Wb() && (a ? (this.map.B.N_ = a) : (a = this.map.B.N_), a))
        for (
          var c = p,
            c =
              '2' == z.fz
                ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + '/']
                : [
                    z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + '/',
                    z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + '/',
                    z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + '/'
                  ],
            d = 0,
            e;
          (e = this.Tm[d]);
          d++
        )
          if (e.A_ == o) {
            b.k.Zb = 18
            // e.getTilesUrl = function(b, d) {
            //   var e = b.x,
            //     e = this.map.gb.Kw(e, d).ls,
            //     k = b.y,
            //     l = Ub('normal'),
            //     m = 1
            //   this.map.Tx() && (m = 2)
            //   l =
            //     'customimage/tile?&x=' +
            //     e +
            //     '&y=' +
            //     k +
            //     '&z=' +
            //     d +
            //     '&udt=' +
            //     l +
            //     '&scale=' +
            //     m +
            //     '&ak=' +
            //     ra
            //   l = a.styleStr
            //     ? l + ('&styles=' + encodeURIComponent(a.styleStr))
            //     : l + ('&customid=' + a.style)
            //   return c[Math.abs(e + k) % c.length] + l
            // }
            // break
            let tdir =
              bmapcfg.tiles_dir.length > 0
                ? bmapcfg.tiles_dir
                : bmapcfg.home + 'tiles'
            console.log(tdir + '/' + b + '/' + d + '/' + a + bmapcfg.imgext)
            return tdir + '/' + b + '/' + d + '/' + a + bmapcfg.imgext // 使用本地的瓦片
          }
    }
  })
  function yd(a, b, c, d, e) {
    this.Wm = a
    this.position = c
    this.av = []
    this.name = a.lE(d, e)
    this.info = d
    this.HJ = e.Dt()
    d = F('img')
    zb(d)
    d.wL = q
    var f = d.style,
      a = a.map.oa()
    f.position = 'absolute'
    f.border = 'none'
    f.width = a.k.Ob + 'px'
    f.height = a.k.Ob + 'px'
    f.left = c[0] + 'px'
    f.top = c[1] + 'px'
    f.maxWidth = 'none'
    this.Hb = d
    this.src = b
    Ad && (this.Hb.style.opacity = 0)
    var g = this
    this.Hb.onload = function() {
      z.UY.$Q()
      g.loaded = o
      if (g.Wm) {
        var a = g.Wm,
          b = a.hj
        if (!b[g.name]) {
          a.pF++
          b[g.name] = g
        }
        if (g.Hb && !Ab(g.Hb) && e.Pb) {
          e.Pb.appendChild(g.Hb)
          if (x.da.ma <= 6 && x.da.ma > 0 && g.HJ)
            g.Hb.style.cssText =
              g.Hb.style.cssText +
              (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                g.src +
                '",sizingMethod=scale);')
        }
        var c = a.pF - a.FV,
          d
        for (d in b) {
          if (c <= 0) break
          if (!a.wg[d]) {
            b[d].Wm = p
            var f = b[d].Hb
            if (f && f.parentNode) {
              f.parentNode.removeChild(f)
              zd(f)
            }
            f = p
            b[d].Hb = p
            delete b[d]
            a.pF--
            c--
          }
        }
        Ad &&
          new ub({
            Hc: 20,
            duration: 200,
            va: function(a) {
              if (g.Hb && g.Hb.style) g.Hb.style.opacity = a * 1
            },
            finish: function() {
              g.Hb && g.Hb.style && delete g.Hb.style.opacity
            }
          })
        vd(g)
      }
    }
    this.Hb.onerror = function() {
      vd(g)
      if (g.Wm) {
        var a = g.Wm.map.oa()
        if (a.k.BD) {
          g.error = o
          g.Hb.src = a.k.BD
          g.Hb && !Ab(g.Hb) && e.Pb.appendChild(g.Hb)
        }
      }
    }
    d = p
  }
  function xd(a, b) {
    a.av.push(b)
  }
  yd.prototype.ko = function() {
    this.Hb.src =
      0 < x.da.ma && 6 >= x.da.ma && this.HJ
        ? G.qa + 'blank.gif'
        : '' !== this.src && this.Hb.src == this.src
        ? this.src + '&t = ' + Date.now()
        : this.src
  }
  function vd(a) {
    for (var b = 0; b < a.av.length; b++) a.av[b]()
    a.av.length = 0
  }
  function zd(a) {
    if (a) {
      a.onload = a.onerror = p
      var b = a.attributes,
        c,
        d,
        e
      if (b) {
        d = b.length
        for (c = 0; c < d; c += 1)
          (e = b[c].name), 'unknown' !== typeof a[e] && $a(a[e]) && (a[e] = p)
      }
      if ((b = a.children)) {
        d = b.length
        for (c = 0; c < d; c += 1) zd(a.children[c])
      }
    }
  }
  function wd(a, b) {
    a.src = b
    a.ko()
  }
  var Ad = !x.da.ma || 8 < x.da.ma
  function ud(a) {
    this.vh = a || {}
    this.bW = this.vh.copyright || p
    this.l0 = this.vh.transparentPng || q
    this.Hw = this.vh.baseLayer || q
    this.zIndex = this.vh.zIndex || 0
    this.ba = ud.OS++
  }
  ud.OS = 0
  x.lang.ua(ud, x.lang.Da, 'TileLayer')
  x.extend(ud.prototype, {
    ra: function(a, b) {
      this.Hw && (this.zIndex = -100)
      this.map = a
      if (!this.Pb) {
        var c = F('div'),
          d = c.style
        d.position = 'absolute'
        d.overflow = 'visible'
        d.zIndex = this.zIndex
        d.left = Math.ceil(-a.offsetX + a.width / 2) + 'px'
        d.top = Math.ceil(-a.offsetY + a.height / 2) + 'px'
        b.appendChild(c)
        this.Pb = c
      }
    },
    remove: function() {
      this.Pb &&
        this.Pb.parentNode &&
        ((this.Pb.innerHTML = ''), this.Pb.parentNode.removeChild(this.Pb))
      delete this.Pb
    },
    Dt: v('l0'),
    getTilesUrl: function(a, b) {
      if (this.map.oa() !== ab && this.map.oa() !== Ta)
        var c = this.map.gb.Kw(a.x, b).ls
      var d = ''
      this.vh.tileUrlTemplate &&
        ((d = this.vh.tileUrlTemplate.replace(/\{X\}/, c)),
        (d = d.replace(/\{Y\}/, a.y)),
        (d = d.replace(/\{Z\}/, b)))
      return d
    },
    ym: v('bW'),
    oa: function() {
      return this.xb || Na
    }
  })
  function Bd(a, b) {
    Jb(a) ? (b = a || {}) : ((b = b || {}), (b.databoxId = a))
    this.k = {
      PK: b.databoxId,
      hh: b.geotableId,
      gn: b.q || '',
      cz: b.tags || '',
      filter: b.filter || '',
      Yy: b.sortby || '',
      L_: b.styleId || '',
      am: b.ak || ra,
      Ew: b.age || 36e5,
      zIndex: 11,
      QY: 'VectorCloudLayer',
      Gk: b.hotspotName || 'vector_md_' + (1e5 * Math.random()).toFixed(0),
      mV: 'LBS\u4e91\u9ebb\u70b9\u5c42'
    }
    this.yp = o
    ud.call(this, this.k)
    this.uW = z.oc + 'geosearch/detail/'
    this.vW = z.oc + 'geosearch/v2/detail/'
    this.rp = {}
  }
  x.ua(Bd, ud, 'VectorCloudLayer')
  function Cd(a) {
    a = a || {}
    this.k = x.extend(a, {
      zIndex: 1,
      QY: 'VectorTrafficLayer',
      mV: '\u77e2\u91cf\u8def\u51b5\u5c42'
    })
    this.yp = o
    ud.call(this, this.k)
    this.h0 =
      z.url.proto +
      z.url.domain.vector_traffic +
      '/gvd/?qt=lgvd&styles=pl&layers=tf'
    this.Eb = {
      '0': [2, 1354709503, 2, 2, 0, [], 0, 0],
      1: [2, 1354709503, 3, 2, 0, [], 0, 0],
      10: [2, -231722753, 2, 2, 0, [], 0, 0],
      11: [2, -231722753, 3, 2, 0, [], 0, 0],
      12: [2, -231722753, 4, 2, 0, [], 0, 0],
      13: [2, -231722753, 5, 2, 0, [], 0, 0],
      14: [2, -231722753, 6, 2, 0, [], 0, 0],
      15: [2, -1, 4, 0, 0, [], 0, 0],
      16: [2, -1, 5.5, 0, 0, [], 0, 0],
      17: [2, -1, 7, 0, 0, [], 0, 0],
      18: [2, -1, 8.5, 0, 0, [], 0, 0],
      19: [2, -1, 10, 0, 0, [], 0, 0],
      2: [2, 1354709503, 4, 2, 0, [], 0, 0],
      3: [2, 1354709503, 5, 2, 0, [], 0, 0],
      4: [2, 1354709503, 6, 2, 0, [], 0, 0],
      5: [2, -6350337, 2, 2, 0, [], 0, 0],
      6: [2, -6350337, 3, 2, 0, [], 0, 0],
      7: [2, -6350337, 4, 2, 0, [], 0, 0],
      8: [2, -6350337, 5, 2, 0, [], 0, 0],
      9: [2, -6350337, 6, 2, 0, [], 0, 0]
    }
  }
  x.ua(Cd, ud, 'VectorTrafficLayer')
  function eb(a) {
    this.GV = [
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + '/gvd/?',
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + '/gvd/?',
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + '/gvd/?'
    ]
    this.k = { rL: q }
    for (var b in a) this.k[b] = a[b]
    this.bi = this.Mh = this.Xa = this.C = this.D = p
    this.GM = 0
    var c = this
    K.load('vector', function() {
      c.Ee()
    })
  }
  x.extend(eb.prototype, {
    ra: function(a, b) {
      this.D = a
      this.C = b
    },
    remove: function() {
      this.C = this.D = p
    }
  })
  function Dd(a) {
    ud.call(this, a)
    this.k = a || {}
    this.BM = o
    if (this.k.predictDate) {
      if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)
        this.k.predictDate = 1
      if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)
        this.k.predictDate.hour = 0
    }
    this.QU = z.url.proto + z.url.domain.traffic + '/traffic/'
  }
  Dd.prototype = new ud()
  Dd.prototype.ra = function(a, b) {
    ud.prototype.ra.call(this, a, b)
    this.D = a
  }
  Dd.prototype.Dt = ea(o)
  Dd.prototype.getTilesUrl = function(a, b) {
    var c = ''
    this.k.predictDate
      ? (c =
          'HistoryService?day=' +
          (this.k.predictDate.weekday - 1) +
          '&hour=' +
          this.k.predictDate.hour +
          '&t=' +
          new Date().getTime() +
          '&')
      : ((c = 'TrafficTileService?time=' + new Date().getTime() + '&'),
        (c += 'label=web2D&v=016&'))
    var c = this.QU + c + 'level=' + b + '&x=' + a.x + '&y=' + a.y,
      d = 1
    this.D.Tx() && (d = 2)
    return (c + '&scaler=' + d).replace(/-(\d+)/gi, 'M$1')
  }
  var Ed = [
      z.url.proto + z.url.domain.TILES_YUN_HOST[0] + '/georender/gss',
      z.url.proto + z.url.domain.TILES_YUN_HOST[1] + '/georender/gss',
      z.url.proto + z.url.domain.TILES_YUN_HOST[2] + '/georender/gss',
      z.url.proto + z.url.domain.TILES_YUN_HOST[3] + '/georender/gss'
    ],
    Fd =
      z.url.proto +
      z.url.domain.main_domain_nocdn.baidu +
      '/style/poi/rangestyle',
    Gd = 100
  function pb(a, b) {
    ud.call(this)
    var c = this
    this.BM = o
    var d = q
    try {
      document.createElement('canvas').getContext('2d'), (d = o)
    } catch (e) {
      d = q
    }
    d && ((this.Gh = new Bd(a, b)), (this.Gh.YF = this))
    Jb(a) ? (b = a || {}) : ((c.Xn = a), (b = b || {}))
    b.geotableId && (c.Bf = b.geotableId)
    b.databoxId && (c.Xn = b.databoxId)
    d = z.oc + 'geosearch'
    c.nc = {
      MN: b.pointDensity || Gd,
      oY: d + '/detail/',
      pY: d + '/v2/detail/',
      Ew: b.age || 36e5,
      gn: b.q || '',
      V_: 'png',
      w3: [5, 5, 5, 5],
      PY: { backgroundColor: '#FFFFD5', borderColor: '#808080' },
      am: b.ak || ra,
      cz: b.tags || '',
      filter: b.filter || '',
      Yy: b.sortby || '',
      Gk: b.hotspotName || 'tile_md_' + (1e5 * Math.random()).toFixed(0),
      gG: o
    }
    K.load('clayer', function() {
      c.Sd()
    })
  }
  pb.prototype = new ud()
  pb.prototype.ra = function(a, b) {
    ud.prototype.ra.call(this, a, b)
    this.D = a
  }
  pb.prototype.getTilesUrl = function(a, b) {
    var c = a.x,
      d = a.y,
      e = this.nc,
      c =
        Ed[Math.abs(c + d) % Ed.length] +
        '/image?grids=' +
        c +
        '_' +
        d +
        '_' +
        b +
        '&q=' +
        e.gn +
        '&tags=' +
        e.cz +
        '&filter=' +
        e.filter +
        '&sortby=' +
        e.Yy +
        '&ak=' +
        this.nc.am +
        '&age=' +
        e.Ew +
        '&page_size=' +
        e.MN +
        '&format=' +
        e.V_
    e.gG || ((e = (1e5 * Math.random()).toFixed(0)), (c += '&timeStamp=' + e))
    this.Bf
      ? (c += '&geotable_id=' + this.Bf)
      : this.Xn && (c += '&databox_id=' + this.Xn)
    return c
  }
  pb.prototype.enableUseCache = function() {
    this.nc.gG = o
  }
  pb.prototype.disableUseCache = function() {
    this.nc.gG = q
  }
  pb.nU = /^point\(|\)$/gi
  pb.oU = /\s+/
  pb.qU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  function Hd(a, b, c) {
    this.ff = a
    this.ur = b instanceof ud ? [b] : b.slice(0)
    c = c || {}
    this.k = {
      W_: c.tips || '',
      PE: '',
      fc: c.minZoom || 4,
      Zb: c.maxZoom || 18,
      v3: c.minZoom || 4,
      u3: c.maxZoom || 18,
      Ob: 256,
      WF: c.textColor || 'black',
      BD: c.errorImageUrl || '',
      $a: new hb(new I(-21364736, -16023552), new I(23855104, 19431424)),
      Ld: c.projection || new T()
    }
    1 <= this.ur.length && (this.ur[0].Hw = o)
    x.extend(this.k, c)
  }
  x.extend(Hd.prototype, {
    getName: v('ff'),
    it: function() {
      return this.k.W_
    },
    a3: function() {
      return this.k.PE
    },
    bY: function() {
      return this.ur[0]
    },
    o3: v('ur'),
    cY: function() {
      return this.k.Ob
    },
    gp: function() {
      return this.k.fc
    },
    Bm: function() {
      return this.k.Zb
    },
    setMaxZoom: function(a) {
      this.k.Zb = a
    },
    Im: function() {
      return this.k.WF
    },
    Fm: function() {
      return this.k.Ld
    },
    R2: function() {
      return this.k.BD
    },
    cY: function() {
      return this.k.Ob
    },
    yc: function(a) {
      return Math.pow(2, 18 - a)
    },
    qE: function(a) {
      return this.yc(a) * this.k.Ob
    },
    LF: function(a) {
      this.Fm().g_(a)
    }
  })
  var Id = [
      z.url.proto + z.url.domain.TILE_BASE_URLS[0] + '/it/',
      z.url.proto + z.url.domain.TILE_BASE_URLS[1] + '/it/',
      z.url.proto + z.url.domain.TILE_BASE_URLS[2] + '/it/',
      z.url.proto + z.url.domain.TILE_BASE_URLS[3] + '/it/',
      z.url.proto + z.url.domain.TILE_BASE_URLS[4] + '/it/'
    ],
    Jd = [
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + '/tile/',
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + '/tile/',
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + '/tile/',
      z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + '/tile/'
    ],
    Kd = { dark: 'dl', light: 'll', normal: 'pl' },
    Ld = new ud()
  Ld.A_ = o
  Ld.getTilesUrl = function(a, b, c) {
    var d = a.x,
      a = a.y,
      e = Ub('normal'),
      f = 1,
      c = Kd[c]
    // this.map.Tx() && (f = 2)
    // d = this.map.gb.Kw(d, b).ls
    // return (
    //   Jd[Math.abs(d + a) % Jd.length] +
    //   '?qt=vtile&x=' +
    //   (d + '').replace(/-/gi, 'M') +
    //   '&y=' +
    //   (a + '').replace(/-/gi, 'M') +
    //   '&z=' +
    //   b +
    //   '&styles=' +
    //   c +
    //   '&scaler=' +
    //   f +
    //   (6 == x.da.ma ? '&color_dep=32&colors=50' : '') +
    //   '&udt=' +
    //   e +
    //   '&from=jsapi2_0'customimage/tile
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let tdir =
      bmapcfg.tiles_dir.length > 0 ? bmapcfg.tiles_dir : bmapcfg.home + 'tiles'
    console.log(tdir + '/' + b + '/' + d + '/' + a + bmapcfg.imgext)
    return tdir + '/' + b + '/' + d + '/' + a + bmapcfg.imgext // 使用本地的瓦片
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }
  var Na = new Hd('\u5730\u56fe', Ld, {
      tips: '\u663e\u793a\u666e\u901a\u5730\u56fe',
      maxZoom: 19
    }),
    Md = new ud()
  Md.HO = [
    z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + '/resource/mappic/',
    z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + '/resource/mappic/',
    z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + '/resource/mappic/',
    z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + '/resource/mappic/'
  ]
  Md.getTilesUrl = function(a, b) {
    var c = a.x,
      d = a.y,
      e = 256 * Math.pow(2, 20 - b),
      d = Math.round((9998336 - e * d) / e) - 1
    return (url =
      this.HO[Math.abs(c + d) % this.HO.length] +
      this.map.Sb +
      '/' +
      this.map.Qw +
      '/3/lv' +
      (21 - b) +
      '/' +
      c +
      ',' +
      d +
      '.jpg')
  }
  var Qa = new Hd('\u4e09\u7ef4', Md, {
    tips: '\u663e\u793a\u4e09\u7ef4\u5730\u56fe',
    minZoom: 15,
    maxZoom: 20,
    textColor: 'white',
    projection: new jb()
  })
  Qa.yc = function(a) {
    return Math.pow(2, 20 - a)
  }
  Qa.yk = function(a) {
    if (!a) return ''
    var b = G.uC,
      c
    for (c in b) if (-1 < a.search(c)) return b[c].By
    return ''
  }
  Qa.DL = function(a) {
    return { bj: 2, gz: 1, sz: 14, sh: 4 }[a]
  }
  var Nd = new ud({ Hw: o })
  Nd.getTilesUrl = function(a, b) {
    var c = a.x,
      d = a.y
    return (
      Id[Math.abs(c + d) % Id.length] +
      'u=x=' +
      c +
      ';y=' +
      d +
      ';z=' +
      b +
      ';v=009;type=sate&fm=46&udt=' +
      Ub('satellite')
    ).replace(/-(\d+)/gi, 'M$1')
  }
  var ab = new Hd('\u536b\u661f', Nd, {
      tips: '\u663e\u793a\u536b\u661f\u5f71\u50cf',
      minZoom: 4,
      maxZoom: 19,
      textColor: 'white'
    }),
    Od = new ud({ transparentPng: o })
  Od.getTilesUrl = function(a, b) {
    var c = a.x,
      d = a.y,
      e = Ub('satelliteStreet')
    return (
      Jd[Math.abs(c + d) % Jd.length] +
      '?qt=vtile&x=' +
      (c + '').replace(/-/gi, 'M') +
      '&y=' +
      (d + '').replace(/-/gi, 'M') +
      '&z=' +
      b +
      '&styles=sl' +
      (6 == x.da.ma ? '&color_dep=32&colors=50' : '') +
      '&udt=' +
      e
    ).replace(/-(\d+)/gi, 'M$1')
  }
  var Ta = new Hd('\u6df7\u5408', [Nd, Od], {
    tips: '\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf',
    labelText: '\u8def\u7f51',
    minZoom: 4,
    maxZoom: 19,
    textColor: 'white'
  })
  var Pd = 1,
    W = {}
  window.I0 = W
  function X(a, b) {
    x.lang.Da.call(this)
    this.zd = {}
    this.qn(a)
    b = b || {}
    b.ja = b.renderOptions || {}
    this.k = {
      ja: {
        Ha: b.ja.panel || p,
        map: b.ja.map || p,
        ah: b.ja.autoViewport || o,
        Wt: b.ja.selectFirstResult,
        nt: b.ja.highlightMode,
        Gb: b.ja.enableDragging || q
      },
      uy: b.onSearchComplete || t(),
      xN: b.onMarkersSet || t(),
      wN: b.onInfoHtmlSet || t(),
      zN: b.onResultsHtmlSet || t(),
      vN: b.onGetBusListComplete || t(),
      uN: b.onGetBusLineComplete || t(),
      sN: b.onBusListHtmlSet || t(),
      rN: b.onBusLineHtmlSet || t(),
      cF: b.onPolylinesSet || t(),
      Np: b.reqFrom || ''
    }
    this.map = b.ja.map || window.GCJMAP
    this.k.ja.ah =
      'undefined' != typeof b &&
      'undefined' != typeof b.renderOptions &&
      'undefined' != typeof b.renderOptions.autoViewport
        ? b.renderOptions.autoViewport
        : o
    this.k.ja.Ha = x.Ec(this.k.ja.Ha)
  }
  x.ua(X, x.lang.Da)
  x.extend(X.prototype, {
    getResults: function() {
      return this.Gc ? this.Mi : this.ka
    },
    enableAutoViewport: function() {
      this.k.ja.ah = o
    },
    disableAutoViewport: function() {
      this.k.ja.ah = q
    },
    qn: function(a) {
      a && (this.zd.src = a)
    },
    MF: function(a) {
      this.k.uy = a || t()
    },
    setMarkersSetCallback: function(a) {
      this.k.xN = a || t()
    },
    setPolylinesSetCallback: function(a) {
      this.k.cF = a || t()
    },
    setInfoHtmlSetCallback: function(a) {
      this.k.wN = a || t()
    },
    setResultsHtmlSetCallback: function(a) {
      this.k.zN = a || t()
    },
    Gm: v('Cd')
  })
  var Qd = {
    LG: z.oc,
    fb: function(a, b, c, d, e) {
      this.DZ(b)
      var f = (1e5 * Math.random()).toFixed(0)
      z._rd['_cbk' + f] = function(b) {
        b.result && b.result.error && 202 === b.result.error
          ? alert(
              '\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01'
            )
          : ((c = c || {}), a && a(b, c), delete z._rd['_cbk' + f])
      }
      d = d || ''
      b = c && c.ZO ? Hb(b, encodeURI) : Hb(b, encodeURIComponent)
      this.LG = c && c.Qs ? (c.XN ? c.XN : z.Dp) : z.oc
      d = this.LG + d + '?' + b + '&ie=utf-8&oue=1&fromproduct=jsapi&v=2.1'
      e || (d += '&res=api')
      d = d + ('&callback=BMap._rd._cbk' + f) + ('&ak=' + ra)
      qa(d)
    },
    DZ: function(a) {
      if (a.qt) {
        var b = ''
        switch (a.qt) {
          case 'bt':
            b = 'z_qt|bt'
            break
          case 'nav':
            b = 'z_qt|nav'
            break
          case 'walk':
            b = 'z_qt|walk'
            break
          case 'bse':
            b = 'z_qt|bse'
            break
          case 'nse':
            b = 'z_qt|nse'
            break
          case 'drag':
            b = 'z_qt|drag'
            break
          case 's':
            b = 'z_qt|s'
            break
          case 'ext':
            b = 'z_qt|ext'
            break
          case 'gc':
            b = 'z_qt|gc'
            break
          case 'rgc':
            b = 'z_qt|rgc'
            break
          case 'bl':
            b = 'z_qt|bl'
            break
          case 'bsl':
            b = 'z_qt|bsl'
            break
          case 'con':
            b = 'z_qt|con'
            break
          case 'bd':
            b = 'z_qt|bd'
            break
          case 'nb':
            b = 'z_qt|nb'
            break
          case 'bda':
            b = 'z_qt|bda'
            break
          case 'sa':
            b = 'z_qt|sa'
            break
          case 'nba':
            b = 'z_qt|nba'
            break
          case 'dec':
            b = 'z_qt|dec'
        }
        '' !== b && z.alog('cus.fire', 'count', b)
      }
    }
  }
  window.U0 = Qd
  z._rd = {}
  var Q = {}
  window.T0 = Q
  Q.TN = function(a) {
    a = a.replace(/<\/?[^>]*>/g, '')
    return (a = a.replace(/[ | ]* /g, ' '))
  }
  Q.uZ = function(a) {
    return a.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      '$1,$2;'
    )
  }
  Q.vZ = function(a, b) {
    return a.replace(
      RegExp(
        '(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){' +
          b +
          '}',
        'ig'
      ),
      '$1'
    )
  }
  var Rd = 2,
    Sd = 3,
    Td = 0,
    Ud = 'bt',
    Vd = 'nav',
    Wd = 'walk',
    Xd = 'bl',
    Yd = 'bsl',
    Zd = 14,
    $d = 15,
    ae = 18,
    be = 20,
    ce = 31
  z.I = window.Instance = x.lang.Lc
  function de(a, b, c) {
    x.lang.Da.call(this)
    if (a) {
      this.Ua = 'object' == typeof a ? a : x.Ec(a)
      this.page = 1
      this.Kd = 100
      this.jK = 'pg'
      this.Vf = 4
      this.rK = b
      this.update = o
      a = { page: 1, Ze: 100, Kd: 100, Vf: 4, jK: 'pg', update: o }
      c || (c = a)
      for (var d in c) 'undefined' != typeof c[d] && (this[d] = c[d])
      this.va()
    }
  }
  x.extend(de.prototype, {
    va: function() {
      this.ra()
    },
    ra: function() {
      this.OV()
      this.Ua.innerHTML = this.jW()
    },
    OV: function() {
      isNaN(parseInt(this.page)) && (this.page = 1)
      isNaN(parseInt(this.Kd)) && (this.Kd = 1)
      1 > this.page && (this.page = 1)
      1 > this.Kd && (this.Kd = 1)
      this.page > this.Kd && (this.page = this.Kd)
      this.page = parseInt(this.page)
      this.Kd = parseInt(this.Kd)
    },
    f3: function() {
      location.search.match(RegExp('[?&]?' + this.jK + '=([^&]*)[&$]?', 'gi'))
      this.page = RegExp.$1
    },
    jW: function() {
      var a = [],
        b = this.page - 1,
        c = this.page + 1
      a.push('<p style="margin:0;padding:0;white-space:nowrap">')
      if (!(1 > b)) {
        if (this.page >= this.Vf) {
          var d
          a.push(
            '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace(
              '{temp1}',
              "BMap.I('" + this.ba + "').toPage(1);"
            )
          )
        }
        a.push(
          '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace(
            '{temp2}',
            "BMap.I('" + this.ba + "').toPage(" + b + ');'
          )
        )
      }
      if (this.page < this.Vf)
        (d =
          0 == this.page % this.Vf
            ? this.page - this.Vf - 1
            : this.page - (this.page % this.Vf) + 1),
          (b = d + this.Vf - 1)
      else {
        d = Math.floor(this.Vf / 2)
        var e = (this.Vf % 2) - 1,
          b = this.Kd > this.page + d ? this.page + d : this.Kd
        d = this.page - d - e
      }
      this.page > this.Kd - this.Vf &&
        this.page >= this.Vf &&
        ((d = this.Kd - this.Vf + 1), (b = this.Kd))
      for (e = d; e <= b; e++)
        0 < e &&
          (e == this.page
            ? a.push('<span style="margin-right:3px">' + e + '</span>')
            : 1 <= e &&
              e <= this.Kd &&
              ((d =
                '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' +
                e +
                ']</a></span>'),
              a.push(
                d.replace(
                  '{temp3}',
                  "BMap.I('" + this.ba + "').toPage(" + e + ');'
                )
              )))
      c > this.Kd ||
        a.push(
          '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace(
            '{temp4}',
            "BMap.I('" + this.ba + "').toPage(" + c + ');'
          )
        )
      a.push('</p>')
      return a.join('')
    },
    toPage: function(a) {
      a = a ? a : 1
      'function' == typeof this.rK && (this.rK(a), (this.page = a))
      this.update && this.va()
    }
  })
  function db(a, b) {
    X.call(this, a, b)
    b = b || {}
    b.renderOptions = b.renderOptions || {}
    this.Xp(b.pageCapacity)
    'undefined' != typeof b.renderOptions.selectFirstResult &&
    !b.renderOptions.selectFirstResult
      ? this.ZC()
      : this.wD()
    this.wa = []
    this.xf = []
    this.lb = -1
    this.Oa = []
    var c = this
    K.load(
      'local',
      function() {
        c.Sz()
      },
      o
    )
  }
  x.ua(db, X, 'LocalSearch')
  db.mq = 10
  db.Q0 = 1
  db.Jn = 100
  db.BG = 2e3
  db.IG = 1e5
  x.extend(db.prototype, {
    search: function(a, b) {
      this.Oa.push({ method: 'search', arguments: [a, b] })
    },
    ln: function(a, b, c) {
      this.Oa.push({ method: 'searchInBounds', arguments: [a, b, c] })
    },
    Tp: function(a, b, c, d) {
      this.Oa.push({ method: 'searchNearby', arguments: [a, b, c, d] })
    },
    Qe: function() {
      delete this.Ga
      delete this.Cd
      delete this.ka
      delete this.fa
      this.lb = -1
      this.sb()
      this.k.ja.Ha && (this.k.ja.Ha.innerHTML = '')
    },
    Lm: t(),
    wD: function() {
      this.k.ja.Wt = o
    },
    ZC: function() {
      this.k.ja.Wt = q
    },
    Xp: function(a) {
      this.k.Lk =
        'number' == typeof a && !isNaN(a)
          ? 1 > a
            ? db.mq
            : a > db.Jn
            ? db.mq
            : a
          : db.mq
    },
    qf: function() {
      return this.k.Lk
    },
    toString: ea('LocalSearch')
  })
  var ee = db.prototype
  U(ee, {
    clearResults: ee.Qe,
    setPageCapacity: ee.Xp,
    getPageCapacity: ee.qf,
    gotoPage: ee.Lm,
    searchNearby: ee.Tp,
    searchInBounds: ee.ln,
    search: ee.search,
    enableFirstResultSelection: ee.wD,
    disableFirstResultSelection: ee.ZC
  })
  function fe(a, b) {
    X.call(this, a, b)
  }
  x.ua(fe, X, 'BaseRoute')
  x.extend(fe.prototype, { Qe: t() })
  function ge(a, b) {
    X.call(this, a, b)
    b = b || {}
    this.du(b.policy)
    this.Xp(b.pageCapacity)
    this.vd = Ud
    this.Mu = Zd
    this.Nu = Pd
    this.wa = []
    this.lb = -1
    this.k.ed = b.enableTraffic || q
    this.Oa = []
    var c = this
    K.load('route', function() {
      c.Sd()
    })
  }
  ge.Jn = 100
  ge.EP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1]
  x.ua(ge, fe, 'TransitRoute')
  x.extend(ge.prototype, {
    du: function(a) {
      this.k.$c = 0 <= a && 4 >= a ? a : 0
    },
    SA: function(a, b) {
      this.Oa.push({ method: '_internalSearch', arguments: [a, b] })
    },
    search: function(a, b) {
      this.Oa.push({ method: 'search', arguments: [a, b] })
    },
    Xp: function(a) {
      if ('string' === typeof a && ((a = parseInt(a, 10)), isNaN(a))) {
        this.k.Lk = ge.Jn
        return
      }
      this.k.Lk =
        'number' !== typeof a
          ? ge.Jn
          : 1 <= a && a <= ge.Jn
          ? Math.round(a)
          : ge.Jn
    },
    toString: ea('TransitRoute'),
    CU: function(a) {
      return a.replace(/\(.*\)/, '')
    }
  })
  var he = ge.prototype
  U(he, { _internalSearch: he.SA })
  function ie(a, b) {
    X.call(this, a, b)
    this.wa = []
    this.lb = -1
    this.Oa = []
    var c = this,
      d = this.k.ja
    1 !== d.nt && 2 !== d.nt && (d.nt = 1)
    this.lA = this.k.ja.Gb ? o : q
    K.load('route', function() {
      c.Sd()
    })
    this.zE && this.zE()
  }
  ie.SP = ' \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053'.split(
    ' '
  )
  x.ua(ie, fe, 'DWRoute')
  x.extend(ie.prototype, {
    search: function(a, b, c) {
      this.Oa.push({ method: 'search', arguments: [a, b, c] })
    }
  })
  function je(a, b) {
    ie.call(this, a, b)
    b = b || {}
    this.k.ed = b.enableTraffic || q
    this.du(b.policy)
    this.vd = Vd
    this.Mu = be
    this.Nu = Sd
  }
  x.ua(je, ie, 'DrivingRoute')
  je.prototype.du = function(a) {
    this.k.$c = 0 <= a && 2 >= a ? a : 0
  }
  function ke(a, b) {
    ie.call(this, a, b)
    this.vd = Wd
    this.Mu = ce
    this.Nu = Rd
    this.lA = q
  }
  x.ua(ke, ie, 'WalkingRoute')
  function le(a, b) {
    x.lang.Da.call(this)
    this.Tf = []
    this.bn = []
    this.k = b
    this.cc = a
    this.map = this.k.ja.map || p
    this.Jy = this.k.Jy
    this.Bb = p
    this.jj = 0
    this.Zy = ''
    this.ee = 1
    this.px = ''
    this.Op = [0, 0, 0, 0, 0, 0, 0]
    this.SE = []
    this.ss = [1, 1, 1, 1, 1, 1, 1]
    this.PO = [1, 1, 1, 1, 1, 1, 1]
    this.Ut = [0, 0, 0, 0, 0, 0, 0]
    this.Pp = [0, 0, 0, 0, 0, 0, 0]
    this.Ma = [
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 },
      { o: '', Dd: 0, Bn: 0, x: 0, y: 0, pa: -1 }
    ]
    this.ji = -1
    this.tu = []
    this.uu = []
    K.load('route', t())
  }
  x.lang.ua(le, x.lang.Da, 'RouteAddr')
  var ne = navigator.userAgent
  ;/ipad|iphone|ipod|iph/i.test(ne)
  var oe = /android/i.test(ne)
  function pe(a) {
    this.vh = a || {}
  }
  x.extend(pe.prototype, {
    cO: function(a, b, c) {
      var d = this
      K.load('route', function() {
        d.Sd(a, b, c)
      })
    }
  })
  function qe(a) {
    this.k = {}
    x.extend(this.k, a)
    this.Oa = []
    var b = this
    K.load('othersearch', function() {
      b.Sd()
    })
  }
  x.ua(qe, x.lang.Da, 'Geocoder')
  x.extend(qe.prototype, {
    Em: function(a, b, c) {
      this.Oa.push({ method: 'getPoint', arguments: [a, b, c] })
    },
    Am: function(a, b, c) {
      this.Oa.push({ method: 'getLocation', arguments: [a, b, c] })
    },
    toString: ea('Geocoder')
  })
  var re = qe.prototype
  U(re, { getPoint: re.Em, getLocation: re.Am })
  function Geolocation(a) {
    a = a || {}
    this.B = {
      timeout: a.timeout || 1e4,
      maximumAge: a.maximumAge || 6e5,
      hl: q
    }
    this.pe = []
    var b = this
    K.load('othersearch', function() {
      for (var a = 0, d; (d = b.pe[a]); a++) b[d.method].apply(b, d.arguments)
    })
  }
  x.extend(Geolocation.prototype, {
    getCurrentPosition: function(a, b) {
      this.pe.push({ method: 'getCurrentPosition', arguments: arguments })
    },
    getStatus: ea(2),
    enableSDKLocation: function() {
      H() && (this.B.hl = o)
    },
    disableSDKLocation: function() {
      this.B.hl = q
    }
  })
  function se(a) {
    a = a || {}
    a.ja = a.renderOptions || {}
    this.k = { ja: { map: a.ja.map || p } }
    this.Oa = []
    var b = this
    K.load('othersearch', function() {
      b.Sd()
    })
  }
  x.ua(se, x.lang.Da, 'LocalCity')
  x.extend(se.prototype, {
    get: function(a) {
      this.Oa.push({ method: 'get', arguments: [a] })
    },
    toString: ea('LocalCity')
  })
  function te() {
    this.Oa = []
    var a = this
    K.load('othersearch', function() {
      a.Sd()
    })
  }
  x.ua(te, x.lang.Da, 'Boundary')
  x.extend(te.prototype, {
    get: function(a, b) {
      this.Oa.push({ method: 'get', arguments: [a, b] })
    },
    toString: ea('Boundary')
  })
  function ue(a, b) {
    X.call(this, a, b)
    this.PP = Xd
    this.RP = $d
    this.OP = Yd
    this.QP = ae
    this.Oa = []
    var c = this
    K.load('buslinesearch', function() {
      c.Sd()
    })
  }
  ue.xv = G.qa + 'iw_plus.gif'
  ue.US = G.qa + 'iw_minus.gif'
  ue.MU = G.qa + 'stop_icon.png'
  x.ua(ue, X)
  x.extend(ue.prototype, {
    getBusList: function(a) {
      this.Oa.push({ method: 'getBusList', arguments: [a] })
    },
    getBusLine: function(a) {
      this.Oa.push({ method: 'getBusLine', arguments: [a] })
    },
    setGetBusListCompleteCallback: function(a) {
      this.k.vN = a || t()
    },
    setGetBusLineCompleteCallback: function(a) {
      this.k.uN = a || t()
    },
    setBusListHtmlSetCallback: function(a) {
      this.k.sN = a || t()
    },
    setBusLineHtmlSetCallback: function(a) {
      this.k.rN = a || t()
    },
    setPolylinesSetCallback: function(a) {
      this.k.cF = a || t()
    }
  })
  function ve(a) {
    X.call(this, a)
    a = a || {}
    this.nc = {
      input: a.input || p,
      kC: a.baseDom || p,
      types: a.types || [],
      uy: a.onSearchComplete || t()
    }
    this.zd.src = a.location || '\u5168\u56fd'
    this.ej = ''
    this.mg = p
    this.nI = ''
    this.Ti()
    Sa(Ia)
    var b = this
    K.load('autocomplete', function() {
      b.Sd()
    })
  }
  x.ua(ve, X, 'Autocomplete')
  x.extend(ve.prototype, {
    Ti: t(),
    show: t(),
    U: t(),
    NF: function(a) {
      this.nc.types = a
    },
    qn: function(a) {
      this.zd.src = a
    },
    search: da('ej'),
    My: da('nI')
  })
  var Va
  function Pa(a, b) {
    function c() {
      e.k.visible
        ? ('inter' === e.Le && e.k.haveBreakId && e.k.indoorExitControl === o
            ? x.K.show(e.LA)
            : x.K.U(e.LA),
          this.k.closeControl && this.Af && this.D && this.D.Ka() === this.C
            ? x.K.show(e.Af)
            : x.K.U(e.Af),
          this.k.forceCloseControl && x.K.show(e.Af))
        : (x.K.U(e.Af), x.K.U(e.LA))
    }
    this.C = 'string' == typeof a ? x.$(a) : a
    this.ba = we++
    this.k = {
      enableScrollWheelZoom: o,
      panoramaRenderer: 'flash',
      swfSrc: z.sg('main_domain_nocdn', 'res/swf/') + 'APILoader.swf',
      visible: o,
      indoorExitControl: o,
      indoorFloorControl: q,
      linksControl: o,
      clickOnRoad: o,
      navigationControl: o,
      closeControl: o,
      indoorSceneSwitchControl: o,
      albumsControl: q,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: q,
      haveBreakId: q
    }
    var b = b || {},
      d
    for (d in b) this.k[d] = b[d]
    b.closeControl === o && (this.k.forceCloseControl = o)
    b.useWebGL === q && Oa(q)
    this.Ea = { heading: 0, pitch: 0 }
    this.jo = []
    this.Kb = this.Ya = p
    this.hk = this.kr()
    this.wa = []
    this.Kc = 1
    this.Le = this.rT = this.ll = ''
    this.Ke = {}
    this.Nf = p
    this.Tg = []
    this.Fr = []
    'cvsRender' == this.hk || Oa()
      ? ((this.$j = 90), (this.ck = -90))
      : 'cssRender' == this.hk && ((this.$j = 45), (this.ck = -45))
    this.Jr = q
    var e = this
    this.ko = function() {
      this.hk === 'flashRender'
        ? K.load(
            'panoramaflash',
            function() {
              e.Ti()
            },
            o
          )
        : K.load(
            'panorama',
            function() {
              e.Ab()
            },
            o
          )
      b.of == 'api' ? Sa(Ea) : Sa(Fa)
      this.ko = t()
    }
    this.k.eT !== o &&
      (this.ko(), z.Kn('cus.fire', 'count', 'z_loadpanoramacount'))
    this.WT(this.C)
    this.addEventListener('id_changed', function() {
      Sa(Da, { from: b.of })
    })
    this.iQ()
    this.addEventListener('indoorexit_options_changed', c)
    this.addEventListener('scene_type_changed', c)
    this.addEventListener('onclose_options_changed', c)
    this.addEventListener('onvisible_changed', c)
  }
  var xe = 4,
    ye = 1,
    we = 0
  x.lang.ua(Pa, x.lang.Da, 'Panorama')
  x.extend(Pa.prototype, {
    iQ: function() {
      var a = this,
        b = (this.Af = F('div'))
      b.className = 'pano_close'
      b.style.cssText = 'z-index: 1201;display: none'
      b.title = '\u9000\u51fa\u5168\u666f'
      b.onclick = function() {
        a.U()
      }
      this.C.appendChild(b)
      var c = (this.LA = F('a'))
      c.className = 'pano_pc_indoor_exit'
      c.style.cssText = 'z-index: 1201;display: none'
      c.innerHTML =
        '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>'
      c.title = '\u9000\u51fa\u5ba4\u5185\u666f'
      c.onclick = function() {
        a.$o()
      }
      this.C.appendChild(c)
      window.ActiveXObject &&
        !document.addEventListener &&
        ((b.style.backgroundColor = 'rgb(37,37,37)'),
        (c.style.backgroundColor = 'rgb(37,37,37)'))
    },
    $o: t(),
    WT: function(a) {
      var b, c
      b = a.style
      c = Xa(a).position
      'absolute' != c &&
        'relative' != c &&
        ((b.position = 'relative'), (b.zIndex = 0))
      if ('absolute' === c || 'relative' === c)
        if (((a = Xa(a).zIndex), !a || 'auto' === a)) b.zIndex = 0
    },
    CX: v('jo'),
    Yb: v('Ya'),
    dY: v('hw'),
    rO: v('hw'),
    ia: v('Kb'),
    Fa: v('Ea'),
    ga: v('Kc'),
    jh: v('ll'),
    h3: function() {
      return this.y1 || []
    },
    c3: v('rT'),
    ht: v('Le'),
    Qy: function(a) {
      a !== this.Le &&
        ((this.Le = a), this.dispatchEvent(new M('onscene_type_changed')))
    },
    rc: function(a, b, c) {
      'object' === typeof b && ((c = b), (b = j))
      a != this.Ya &&
        ((this.wl = this.Ya),
        (this.xl = this.Kb),
        (this.Ya = a),
        (this.Le = b || 'street'),
        (this.Kb = p),
        c && c.pov && this.Nc(c.pov))
    },
    ta: function(a) {
      a.ab(this.Kb) ||
        ((this.wl = this.Ya), (this.xl = this.Kb), (this.Kb = a), (this.Ya = p))
    },
    Nc: function(a) {
      a &&
        ((this.Ea = a),
        (a = this.Ea.pitch),
        a > this.$j ? (a = this.$j) : a < this.ck && (a = this.ck),
        (this.Jr = o),
        (this.Ea.pitch = a))
    },
    v_: function(a, b) {
      this.ck = 0 <= a ? 0 : a
      this.$j = 0 >= b ? 0 : b
    },
    Oc: function(a) {
      a != this.Kc &&
        (a > xe && (a = xe),
        a < ye && (a = ye),
        a != this.Kc && (this.Kc = a),
        'cssRender' === this.hk && this.Nc(this.Ea))
    },
    KB: function() {
      if (this.D)
        for (var a = this.D.Ix(), b = 0; b < a.length; b++)
          (a[b] instanceof V || a[b] instanceof ed) &&
            a[b].point &&
            this.wa.push(a[b])
    },
    Ny: da('D'),
    cu: function(a) {
      this.Nf = a || 'none'
    },
    Rk: function(a) {
      for (var b in a) {
        if ('object' == typeof a[b]) for (var c in a[b]) this.k[b][c] = a[b][c]
        else this.k[b] = a[b]
        a.closeControl === o && (this.k.forceCloseControl = o)
        a.closeControl === q && (this.k.forceCloseControl = q)
        switch (b) {
          case 'linksControl':
            this.dispatchEvent(new M('onlinks_visible_changed'))
            break
          case 'clickOnRoad':
            this.dispatchEvent(new M('onclickonroad_changed'))
            break
          case 'navigationControl':
            this.dispatchEvent(new M('onnavigation_visible_changed'))
            break
          case 'indoorSceneSwitchControl':
            this.dispatchEvent(new M('onindoor_default_switch_mode_changed'))
            break
          case 'albumsControl':
            this.dispatchEvent(new M('onalbums_visible_changed'))
            break
          case 'albumsControlOptions':
            this.dispatchEvent(new M('onalbums_options_changed'))
            break
          case 'copyrightControlOptions':
            this.dispatchEvent(new M('oncopyright_options_changed'))
            break
          case 'closeControl':
            this.dispatchEvent(new M('onclose_options_changed'))
            break
          case 'indoorExitControl':
            this.dispatchEvent(new M('onindoorexit_options_changed'))
            break
          case 'indoorFloorControl':
            this.dispatchEvent(new M('onindoorfloor_options_changed'))
        }
      }
    },
    Fk: function() {
      this.Gl.style.visibility = 'hidden'
    },
    Uy: function() {
      this.Gl.style.visibility = 'visible'
    },
    RW: function() {
      this.k.enableScrollWheelZoom = o
    },
    BW: function() {
      this.k.enableScrollWheelZoom = q
    },
    show: function() {
      this.k.visible = o
    },
    U: function() {
      this.k.visible = q
    },
    kr: function() {
      return Wa() && !H() && 'javascript' !== this.k.panoramaRenderer
        ? 'flashRender'
        : !H() && Ob()
        ? 'cvsRender'
        : 'cssRender'
    },
    Ja: function(a) {
      this.Ke[a.jd] = a
    },
    Ub: function(a) {
      delete this.Ke[a]
    },
    oE: function() {
      return this.k.visible
    },
    ih: function() {
      return new L(this.C.clientWidth, this.C.clientHeight)
    },
    Ka: v('C'),
    zL: function() {
      var a = z.sg('baidumap', '?'),
        b = this.Yb()
      if (b) {
        var b = {
            panotype: this.ht(),
            heading: this.Fa().heading,
            pitch: this.Fa().pitch,
            pid: b,
            panoid: b,
            from: 'api'
          },
          c
        for (c in b) a += c + '=' + b[c] + '&'
      }
      return a.slice(0, -1)
    },
    Qx: function() {
      this.Rk({ copyrightControlOptions: { logoVisible: q } })
    },
    QF: function() {
      this.Rk({ copyrightControlOptions: { logoVisible: o } })
    },
    eC: function(a) {
      function b(a, b) {
        return function() {
          a.Fr.push({ eN: b, dN: arguments })
        }
      }
      for (
        var c = a.getPanoMethodList(), d = '', e = 0, f = c.length;
        e < f;
        e++
      )
        (d = c[e]), (this[d] = b(this, d))
      this.Tg.push(a)
    },
    sF: function(a) {
      for (var b = this.Tg.length; b--; )
        this.Tg[b] === a && this.Tg.splice(b, 1)
    },
    IF: t()
  })
  var ze = Pa.prototype
  U(ze, {
    setId: ze.rc,
    setPosition: ze.ta,
    setPov: ze.Nc,
    setZoom: ze.Oc,
    setOptions: ze.Rk,
    getId: ze.Yb,
    getPosition: ze.ia,
    getPov: ze.Fa,
    getZoom: ze.ga,
    getLinks: ze.CX,
    getBaiduMapUrl: ze.zL,
    hideMapLogo: ze.Qx,
    showMapLogo: ze.QF,
    enableDoubleClickZoom: ze.w2,
    disableDoubleClickZoom: ze.k2,
    enableScrollWheelZoom: ze.RW,
    disableScrollWheelZoom: ze.BW,
    show: ze.show,
    hide: ze.U,
    addPlugin: ze.eC,
    removePlugin: ze.sF,
    getVisible: ze.oE,
    addOverlay: ze.Ja,
    removeOverlay: ze.Ub,
    getSceneType: ze.ht,
    setPanoramaPOIType: ze.cu,
    exitInter: ze.$o,
    setInteractiveState: ze.IF
  })
  U(window, {
    BMAP_PANORAMA_POI_HOTEL: 'hotel',
    BMAP_PANORAMA_POI_CATERING: 'catering',
    BMAP_PANORAMA_POI_MOVIE: 'movie',
    BMAP_PANORAMA_POI_TRANSIT: 'transit',
    BMAP_PANORAMA_POI_INDOOR_SCENE: 'indoor_scene',
    BMAP_PANORAMA_POI_NONE: 'none',
    BMAP_PANORAMA_INDOOR_SCENE: 'inter',
    BMAP_PANORAMA_STREET_SCENE: 'street'
  })
  function Ae() {
    x.lang.Da.call(this)
    this.jd = 'PanoramaOverlay_' + this.ba
    this.P = p
    this.Pa = o
  }
  x.lang.ua(Ae, x.lang.Da, 'PanoramaOverlayBase')
  x.extend(Ae.prototype, {
    d3: v('jd'),
    ra: function() {
      ca('initialize\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    remove: function() {
      ca('remove\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    Mf: function() {
      ca('_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0')
    }
  })
  function Be(a, b) {
    Ae.call(this)
    var c = { position: p, altitude: 2, displayDistance: o },
      b = b || {},
      d
    for (d in b) c[d] = b[d]
    this.Kb = c.position
    this.Qj = a
    this.Dq = c.altitude
    this.uR = c.displayDistance
    this.WF = c.color
    this.iM = c.hoverColor
    this.backgroundColor = c.backgroundColor
    this.lK = c.backgroundHoverColor
    this.borderColor = c.borderColor
    this.pK = c.borderHoverColor
    this.fontSize = c.fontSize
    this.padding = c.padding
    this.uE = c.imageUrl
    this.size = c.size
    this.ye = c.image
    this.width = c.width
    this.height = c.height
    this.sY = c.imageData
    this.borderWidth = c.borderWidth
  }
  x.lang.ua(Be, Ae, 'PanoramaLabel')
  x.extend(Be.prototype, {
    I2: v('borderWidth'),
    getImageData: v('sY'),
    Im: v('WF'),
    W2: v('iM'),
    E2: v('backgroundColor'),
    F2: v('lK'),
    G2: v('borderColor'),
    H2: v('pK'),
    T2: v('fontSize'),
    e3: v('padding'),
    X2: v('uE'),
    vb: v('size'),
    zx: v('ye'),
    ta: function(a) {
      this.Kb = a
      this.Mf('position', a)
    },
    ia: v('Kb'),
    ad: function(a) {
      this.Qj = a
      this.Mf('content', a)
    },
    zk: v('Qj'),
    DF: function(a) {
      this.Dq = a
      this.Mf('altitude', a)
    },
    cp: v('Dq'),
    Fa: function() {
      var a = this.ia(),
        b = p,
        c = p
      this.P && (c = this.P.ia())
      if (a && c)
        if (a.ab(c)) b = this.P.Fa()
        else {
          b = {}
          b.heading = He(a.lng - c.lng, a.lat - c.lat) || 0
          var a = b,
            c = this.cp(),
            d = this.bo()
          a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
        }
      return b
    },
    bo: function() {
      var a = 0,
        b,
        c
      this.P &&
        ((b = this.P.ia()), (c = this.ia()) && !c.ab(b) && (a = T.ep(b, c)))
      return a
    },
    U: function() {
      ca('hide\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    show: function() {
      ca('show\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    Mf: t()
  })
  var Ie = Be.prototype
  U(Ie, {
    setPosition: Ie.ta,
    getPosition: Ie.ia,
    setContent: Ie.ad,
    getContent: Ie.zk,
    setAltitude: Ie.DF,
    getAltitude: Ie.cp,
    getPov: Ie.Fa,
    show: Ie.show,
    hide: Ie.U
  })
  function Je(a, b) {
    Ae.call(this)
    var c = { icon: '', title: '', panoInfo: p, altitude: 2 },
      b = b || {},
      d
    for (d in b) c[d] = b[d]
    this.Kb = a
    this.iI = c.icon
    this.FJ = c.title
    this.Dq = c.altitude
    this.JT = c.panoInfo
    this.Ea = { heading: 0, pitch: 0 }
  }
  x.lang.ua(Je, Ae, 'PanoramaMarker')
  x.extend(Je.prototype, {
    ta: function(a) {
      this.Kb = a
      this.Mf('position', a)
    },
    ia: v('Kb'),
    Dc: function(a) {
      this.FJ = a
      this.Mf('title', a)
    },
    mp: v('FJ'),
    Vb: function(a) {
      this.iI = icon
      this.Mf('icon', a)
    },
    fp: v('iI'),
    DF: function(a) {
      this.Dq = a
      this.Mf('altitude', a)
    },
    cp: v('Dq'),
    fE: v('JT'),
    Fa: function() {
      var a = p
      if (this.P) {
        var a = this.P.ia(),
          b = this.ia(),
          a = He(b.lng - a.lng, b.lat - a.lat)
        isNaN(a) && (a = 0)
        a = { heading: a, pitch: 0 }
      } else a = this.Ea
      return a
    },
    Mf: t()
  })
  var Ke = Je.prototype
  U(Ke, {
    setPosition: Ke.ta,
    getPosition: Ke.ia,
    setTitle: Ke.Dc,
    getTitle: Ke.mp,
    setAltitude: Ke.DF,
    getAltitude: Ke.cp,
    getPanoInfo: Ke.fE,
    getIcon: Ke.fp,
    setIcon: Ke.Vb,
    getPov: Ke.Fa
  })
  function He(a, b) {
    var c = 0
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI),
        d = 0
      0 < a && 0 > b && (d = 90)
      0 > a && 0 > b && (d = 180)
      0 > a && 0 < b && (d = 270)
      c = ((c + 90) % 90) + d
    } else 0 === a ? (c = 0 > b ? 180 : 0) : 0 === b && (c = 0 < a ? 90 : 270)
    return Math.round(c)
  }
  function Oa(a) {
    if ('boolean' === typeof Le) return Le
    if (a === q || !window.WebGLRenderingContext) return (Le = q)
    if (x.platform.Qm) {
      a = 0
      try {
        a = navigator.userAgent.split('Android ')[1].charAt(0)
      } catch (b) {}
      if (5 > a) return (Le = q)
    }
    var a = document.createElement('canvas'),
      c = p
    try {
      c = a.getContext('webgl')
    } catch (d) {
      Le = q
    }
    return (Le = c === p ? q : o)
  }
  var Le
  function Me() {
    if ('boolean' === typeof Ne) return Ne
    Ne = o
    if (x.platform.EE) return o
    var a = navigator.userAgent
    return -1 < a.indexOf('Chrome') || -1 < a.indexOf('SAMSUNG-GT-I9508')
      ? o
      : (Ne = q)
  }
  var Ne
  function Oc(a, b) {
    this.P = a || p
    var c = this
    c.P && c.ca()
    K.load('pservice', function() {
      c.NQ()
    })
    'api' == (b || {}).of ? Sa(Ga) : Sa(Ha)
    this.xd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: []
    }
  }
  z.an(function(a) {
    'flashRender' !== a.kr() && new Oc(a, { of: 'api' })
  })
  x.extend(Oc.prototype, {
    ca: function() {
      function a(a) {
        if (a) {
          if (a.id != b.hw) {
            b.rO(a.id)
            b.ea = a
            Me() || b.dispatchEvent(new M('onthumbnail_complete'))
            b.Ya != p && (b.xl = b._position)
            for (var c in a)
              if (a.hasOwnProperty(c))
                switch (((b['_' + c] = a[c]), c)) {
                  case 'position':
                    b.Kb = a[c]
                    break
                  case 'id':
                    b.Ya = a[c]
                    break
                  case 'links':
                    b.jo = a[c]
                    break
                  case 'zoom':
                    b.Kc = a[c]
                }
            if (b.xl) {
              var f = b.xl,
                g = b._position
              c = f.lat
              var i = g.lat,
                k = Pb(i - c),
                f = Pb(g.lng - f.lng)
              c =
                Math.sin(k / 2) * Math.sin(k / 2) +
                Math.cos(Pb(c)) *
                  Math.cos(Pb(i)) *
                  Math.sin(f / 2) *
                  Math.sin(f / 2)
              b.xH = 6371e3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
            }
            c = new M('ondataload')
            c.data = a
            b.dispatchEvent(c)
            b.dispatchEvent(new M('onposition_changed'))
            b.dispatchEvent(new M('onlinks_changed'))
            b.dispatchEvent(new M('oncopyright_changed'), {
              copyright: a.copyright
            })
            a.im && b.k.closeControl ? x.K.show(b.QR) : x.K.U(b.QR)
          }
        } else
          (b.Ya = b.wl), (b.Kb = b.xl), b.dispatchEvent(new M('onnoresult'))
      }
      var b = this.P,
        c = this
      b.addEventListener('id_changed', function() {
        c.jp(b.Yb(), a)
      })
      b.addEventListener('iid_changed', function() {
        c.Ug(Oc.il + 'qt=idata&iid=' + b.HA + '&fn=', function(b) {
          if (b && b.result && 0 == b.result.error) {
            var b = b.content[0].interinfo,
              e = {}
            e.im = b.BreakID
            for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
              if (b.Floors[i].Floor == f) {
                g = b.Floors[i]
                break
              }
            e.id = g.StartID || g.Points[0].PID
            c.jp(e.id, a, e)
          }
        })
      })
      b.addEventListener('position_changed_inner', function() {
        c.tj(b.ia(), a)
      })
    },
    jp: function(a, b) {
      this.xd.getPanoramaById.push(arguments)
    },
    tj: function(a, b, c) {
      this.xd.getPanoramaByLocation.push(arguments)
    },
    pE: function(a, b, c, d) {
      this.xd.getVisiblePOIs.push(arguments)
    },
    Lx: function(a, b) {
      this.xd.getRecommendPanosById.push(arguments)
    },
    Kx: function(a) {
      this.xd.getPanoramaVersions.push(arguments)
    },
    sC: function(a, b) {
      this.xd.checkPanoSupportByCityCode.push(arguments)
    },
    Jx: function(a, b) {
      this.xd.getPanoramaByPOIId.push(arguments)
    },
    EL: function(a) {
      this.xd.getCopyrightProviders.push(arguments)
    }
  })
  var Oe = Oc.prototype
  U(Oe, {
    getPanoramaById: Oe.jp,
    getPanoramaByLocation: Oe.tj,
    getPanoramaByPOIId: Oe.Jx
  })
  function Nc(a) {
    ud.call(this)
    'api' == (a || {}).of ? Sa(Aa) : Sa(Ba)
  }
  Nc.PG = z.sg('pano', 'tile/')
  Nc.prototype = new ud()
  Nc.prototype.getTilesUrl = function(a, b) {
    var c =
      Nc.PG[(a.x + a.y) % Nc.PG.length] +
      '?udt=20150114&qt=tile&styles=pl&x=' +
      a.x +
      '&y=' +
      a.y +
      '&z=' +
      b
    x.da.ma && 6 >= x.da.ma && (c += '&color_dep=32')
    return c
  }
  Nc.prototype.Dt = ea(o)
  Pe.Wd = new T()
  function Pe() {}
  x.extend(Pe, {
    DW: function(a, b, c) {
      c = x.lang.Lc(c)
      b = { data: b }
      'position_changed' == a &&
        (b.data = Pe.Wd.Dj(new S(b.data.mercatorX, b.data.mercatorY)))
      c.dispatchEvent(new M('on' + a), b)
    }
  })
  var Qe = Pe
  U(Qe, { dispatchFlashEvent: Qe.DW })
  var Re = { GP: 50 }
  Re.Ou = z.sg('pano')[0]
  Re.Ku = { width: 220, height: 60 }
  x.extend(Re, {
    vp: function(a, b, c, d) {
      if (!b || !c || !c.lngLat || !c.panoInstance) d()
      else {
        this.po === j && (this.po = new Oc(p, { of: 'api' }))
        var e = this
        this.po.sC(b, function(b) {
          b
            ? e.po.tj(c.lngLat, Re.GP, function(b) {
                if (b && b.id) {
                  var f = b.id,
                    k = b.wh,
                    b = b.xh,
                    l = Oc.Wd.yl(c.lngLat),
                    m = e.vS(l, { x: k, y: b }),
                    k = e.OL(f, m, 0, Re.Ku.width, Re.Ku.height)
                  a.content = e.wS(a.content, k, c.titleTip, c.beforeDomId)
                  a.addEventListener('open', function() {
                    ja.M(x.Ec('infoWndPano'), 'click', function() {
                      c.panoInstance.rc(f)
                      c.panoInstance.show()
                      c.panoInstance.Nc({ heading: m, pitch: 0 })
                    })
                  })
                }
                d()
              })
            : d()
        })
      }
    },
    wS: function(a, b, c, d) {
      var c = c || '',
        e
      !d || !a.split(d)[0]
        ? ((d = a), (a = ''))
        : ((d = a.split(d)[0]),
          (e = d.lastIndexOf('<')),
          (d = a.substring(0, e)),
          (a = a.substring(e)))
      e = []
      var f = Re.Ku.width,
        g = Re.Ku.height
      e.push(d)
      e.push(
        "<div id='infoWndPano' class='panoInfoBox' style='height:" +
          g +
          'px;width:' +
          f +
          "px; margin-top: -19px;'>"
      )
      e.push(
        "<img class='pano_thumnail_img' width='" +
          f +
          "' height='" +
          g +
          "' border='0' alt='" +
          c +
          "\u5916\u666f' title='" +
          c +
          "\u5916\u666f' src='" +
          b +
          "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " +
          f +
          ', ' +
          g +
          ");' />"
      )
      e.push(
        "<div class='panoInfoBoxTitleBg' style='width:" +
          f +
          "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>"
      )
      e.push('</div>')
      e.push(a)
      return e.join('')
    },
    vS: function(a, b) {
      var c = 90 - (180 * Math.atan2(a.y - b.y, a.x - b.x)) / Math.PI
      0 > c && (c += 360)
      return c
    },
    OL: function(a, b, c, d, e) {
      var f = {
        panoId: a,
        panoHeading: b || 0,
        panoPitch: c || 0,
        width: d,
        height: e
      }
      return (
        Re.Ou +
        '?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}'
      ).replace(/\{(.*?)\}/g, function(a, b) {
        return f[b]
      })
    }
  })
  var Se = document,
    Te = Math,
    Ue = Se.createElement('div').style,
    Ve
  a: {
    for (
      var We = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
        Xe,
        Ye = 0,
        Ze = We.length;
      Ye < Ze;
      Ye++
    )
      if (((Xe = We[Ye] + 'ransform'), Xe in Ue)) {
        Ve = We[Ye].substr(0, We[Ye].length - 1)
        break a
      }
    Ve = q
  }
  var $e = Ve ? '-' + Ve.toLowerCase() + '-' : '',
    bf = af('transform'),
    cf = af('transitionProperty'),
    df = af('transitionDuration'),
    ef = af('transformOrigin'),
    ff = af('transitionTimingFunction'),
    gf = af('transitionDelay'),
    oe = /android/gi.test(navigator.appVersion),
    hf = /iphone|ipad/gi.test(navigator.appVersion),
    jf = /hp-tablet/gi.test(navigator.appVersion),
    kf = af('perspective') in Ue,
    lf = 'ontouchstart' in window && !jf,
    mf = Ve !== q,
    nf = af('transition') in Ue,
    of = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    pf = lf ? 'touchstart' : 'mousedown',
    qf = lf ? 'touchmove' : 'mousemove',
    rf = lf ? 'touchend' : 'mouseup',
    sf = lf ? 'touchcancel' : 'mouseup',
    tf =
      Ve === q
        ? q
        : {
            '': 'transitionend',
            webkit: 'webkitTransitionEnd',
            Moz: 'transitionend',
            O: 'otransitionend',
            ms: 'MSTransitionEnd'
          }[Ve],
    uf =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(a) {
        return setTimeout(a, 1)
      },
    vf =
      window.cancelRequestAnimationFrame ||
      window.g5 ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout,
    wf = kf ? ' translateZ(0)' : ''
  function xf(a, b) {
    var c = this,
      d
    c.En = 'object' == typeof a ? a : Se.getElementById(a)
    c.En.style.overflow = 'hidden'
    c.Nb = c.En.children[0]
    c.options = {
      qp: o,
      Cn: o,
      x: 0,
      y: 0,
      Lo: o,
      CV: q,
      ly: o,
      TE: o,
      $k: o,
      Ei: q,
      Z_: 0,
      Ow: q,
      Ox: o,
      qi: o,
      Fi: o,
      GD: oe,
      Rx: hf,
      XW: hf && kf,
      AF: '',
      zoom: q,
      bl: 1,
      iq: 4,
      FW: 2,
      lP: 'scroll',
      lu: q,
      Xy: 1,
      yN: p,
      qN: function(a) {
        a.preventDefault()
      },
      BN: p,
      pN: p,
      AN: p,
      oN: p,
      ty: p,
      CN: p,
      tN: p,
      Hp: p,
      DN: p,
      Gp: p
    }
    for (d in b) c.options[d] = b[d]
    c.x = c.options.x
    c.y = c.options.y
    c.options.$k = mf && c.options.$k
    c.options.qi = c.options.qp && c.options.qi
    c.options.Fi = c.options.Cn && c.options.Fi
    c.options.zoom = c.options.$k && c.options.zoom
    c.options.Ei = nf && c.options.Ei
    c.options.zoom && oe && (wf = '')
    c.Nb.style[cf] = c.options.$k ? $e + 'transform' : 'top left'
    c.Nb.style[df] = '0'
    c.Nb.style[ef] = '0 0'
    c.options.Ei && (c.Nb.style[ff] = 'cubic-bezier(0.33,0.66,0.66,1)')
    c.options.$k
      ? (c.Nb.style[bf] = 'translate(' + c.x + 'px,' + c.y + 'px)' + wf)
      : (c.Nb.style.cssText +=
          ';position:absolute;top:' + c.y + 'px;left:' + c.x + 'px')
    c.options.Ei && (c.options.GD = o)
    c.refresh()
    c.ca(of, window)
    c.ca(pf)
    !lf &&
      'none' != c.options.lP &&
      (c.ca('DOMMouseScroll'), c.ca('mousewheel'))
    c.options.Ow &&
      (c.NV = setInterval(function() {
        c.KQ()
      }, 500))
    this.options.Ox &&
      (Event.prototype.stopImmediatePropagation ||
        ((document.body.removeEventListener = function(a, b, c) {
          var d = Node.prototype.removeEventListener
          a === 'click'
            ? d.call(document.body, a, b.gM || b, c)
            : d.call(document.body, a, b, c)
        }),
        (document.body.addEventListener = function(a, b, c) {
          var d = Node.prototype.addEventListener
          a === 'click'
            ? d.call(
                document.body,
                a,
                b.gM ||
                  (b.gM = function(a) {
                    a.CZ || b(a)
                  }),
                c
              )
            : d.call(document.body, a, b, c)
        })),
      c.ca('click', document.body, o))
  }
  xf.prototype = {
    enabled: o,
    x: 0,
    y: 0,
    Ej: [],
    scale: 1,
    MC: 0,
    NC: 0,
    Ve: [],
    vf: [],
    jC: p,
    iz: 0,
    handleEvent: function(a) {
      switch (a.type) {
        case pf:
          if (!lf && 0 !== a.button) break
          this.$v(a)
          break
        case qf:
          this.tT(a)
          break
        case rf:
        case sf:
          this.lv(a)
          break
        case of:
          this.DB()
          break
        case 'DOMMouseScroll':
        case 'mousewheel':
          this.YU(a)
          break
        case tf:
          this.UU(a)
          break
        case 'click':
          this.VQ(a)
      }
    },
    KQ: function() {
      !this.th &&
        !this.cl &&
        !(
          this.dm ||
          (this.Ly == this.Nb.offsetWidth * this.scale &&
            this.Sp == this.Nb.offsetHeight * this.scale)
        ) &&
        this.refresh()
    },
    Rv: function(a) {
      var b
      this[a + 'Scrollbar']
        ? (this[a + 'ScrollbarWrapper'] ||
            ((b = Se.createElement('div')),
            this.options.AF
              ? (b.className = this.options.AF + a.toUpperCase())
              : (b.style.cssText =
                  'position:absolute;z-index:100;' +
                  ('h' == a
                    ? 'height:7px;bottom:1px;left:2px;right:' +
                      (this.Fi ? '7' : '2') +
                      'px'
                    : 'width:7px;bottom:' +
                      (this.qi ? '7' : '2') +
                      'px;top:2px;right:1px')),
            (b.style.cssText +=
              ';pointer-events:none;' +
              $e +
              'transition-property:opacity;' +
              $e +
              'transition-duration:' +
              (this.options.XW ? '350ms' : '0') +
              ';overflow:hidden;opacity:' +
              (this.options.Rx ? '0' : '1')),
            this.En.appendChild(b),
            (this[a + 'ScrollbarWrapper'] = b),
            (b = Se.createElement('div')),
            this.options.AF ||
              (b.style.cssText =
                'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' +
                $e +
                'background-clip:padding-box;' +
                $e +
                'box-sizing:border-box;' +
                ('h' == a ? 'height:100%' : 'width:100%') +
                ';' +
                $e +
                'border-radius:3px;border-radius:3px'),
            (b.style.cssText +=
              ';pointer-events:none;' +
              $e +
              'transition-property:' +
              $e +
              'transform;' +
              $e +
              'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' +
              $e +
              'transition-duration:0;' +
              $e +
              'transform: translate(0,0)' +
              wf),
            this.options.Ei &&
              (b.style.cssText +=
                ';' +
                $e +
                'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)'),
            this[a + 'ScrollbarWrapper'].appendChild(b),
            (this[a + 'ScrollbarIndicator'] = b)),
          'h' == a
            ? ((this.dM = this.eM.clientWidth),
              (this.lY = Te.max(Te.round((this.dM * this.dM) / this.Ly), 8)),
              (this.kY.style.width = this.lY + 'px'))
            : ((this.cP = this.dP.clientHeight),
              (this.t0 = Te.max(Te.round((this.cP * this.cP) / this.Sp), 8)),
              (this.s0.style.height = this.t0 + 'px')),
          this.EB(a, o))
        : this[a + 'ScrollbarWrapper'] &&
          (mf && (this[a + 'ScrollbarIndicator'].style[bf] = ''),
          this[a + 'ScrollbarWrapper'].parentNode.removeChild(
            this[a + 'ScrollbarWrapper']
          ),
          (this[a + 'ScrollbarWrapper'] = p),
          (this[a + 'ScrollbarIndicator'] = p))
    },
    DB: function() {
      var a = this
      setTimeout(
        function() {
          a.refresh()
        },
        oe ? 200 : 0
      )
    },
    Ir: function(a, b) {
      this.cl ||
        ((a = this.qp ? a : 0),
        (b = this.Cn ? b : 0),
        this.options.$k
          ? (this.Nb.style[bf] =
              'translate(' +
              a +
              'px,' +
              b +
              'px) scale(' +
              this.scale +
              ')' +
              wf)
          : ((a = Te.round(a)),
            (b = Te.round(b)),
            (this.Nb.style.left = a + 'px'),
            (this.Nb.style.top = b + 'px')),
        (this.x = a),
        (this.y = b),
        this.EB('h'),
        this.EB('v'))
    },
    EB: function(a, b) {
      var c = 'h' == a ? this.x : this.y
      this[a + 'Scrollbar'] &&
        ((c *= this[a + 'ScrollbarProp']),
        0 > c
          ? (this.options.GD ||
              ((c = this[a + 'ScrollbarIndicatorSize'] + Te.round(3 * c)),
              8 > c && (c = 8),
              (this[a + 'ScrollbarIndicator'].style[
                'h' == a ? 'width' : 'height'
              ] = c + 'px')),
            (c = 0))
          : c > this[a + 'ScrollbarMaxScroll'] &&
            (this.options.GD
              ? (c = this[a + 'ScrollbarMaxScroll'])
              : ((c =
                  this[a + 'ScrollbarIndicatorSize'] -
                  Te.round(3 * (c - this[a + 'ScrollbarMaxScroll']))),
                8 > c && (c = 8),
                (this[a + 'ScrollbarIndicator'].style[
                  'h' == a ? 'width' : 'height'
                ] = c + 'px'),
                (c =
                  this[a + 'ScrollbarMaxScroll'] +
                  (this[a + 'ScrollbarIndicatorSize'] - c)))),
        (this[a + 'ScrollbarWrapper'].style[gf] = '0'),
        (this[a + 'ScrollbarWrapper'].style.opacity =
          b && this.options.Rx ? '0' : '1'),
        (this[a + 'ScrollbarIndicator'].style[bf] =
          'translate(' + ('h' == a ? c + 'px,0)' : '0,' + c + 'px)') + wf))
    },
    VQ: function(a) {
      if (a.RR === o) return (this.bC = a.target), (this.sx = Date.now()), o
      if (this.bC && this.sx) {
        if (600 < Date.now() - this.sx) return (this.sx = this.bC = p), o
      } else {
        for (var b = a.target; b != this.Nb && b != document.body; )
          b = b.parentNode
        if (b == document.body) return o
      }
      for (b = a.target; 1 != b.nodeType; ) b = b.parentNode
      b = b.tagName.toLowerCase()
      if ('select' != b && 'input' != b && 'textarea' != b)
        return (
          a.stopImmediatePropagation
            ? a.stopImmediatePropagation()
            : (a.CZ = o),
          a.stopPropagation(),
          a.preventDefault(),
          (this.sx = this.bC = p),
          q
        )
    },
    $v: function(a) {
      var b = lf ? a.touches[0] : a,
        c,
        d
      if (this.enabled) {
        this.options.qN && this.options.qN.call(this, a)
        ;(this.options.Ei || this.options.zoom) && this.GJ(0)
        this.cl = this.dm = this.th = q
        this.WC = this.VC = this.uw = this.tw = this.bD = this.aD = 0
        this.options.zoom &&
          lf &&
          1 < a.touches.length &&
          ((d = Te.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (c = Te.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.a0 = Te.sqrt(d * d + c * c)),
          (this.vy =
            Te.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.kG) / 2 -
            this.x),
          (this.wy =
            Te.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.lG) / 2 -
            this.y),
          this.options.Hp && this.options.Hp.call(this, a))
        if (
          this.options.ly &&
          (this.options.$k
            ? ((c = getComputedStyle(this.Nb, p)
                [bf].replace(/[^0-9\-.,]/g, '')
                .split(',')),
              (d = +(c[12] || c[4])),
              (c = +(c[13] || c[5])))
            : ((d = +getComputedStyle(this.Nb, p).left.replace(/[^0-9-]/g, '')),
              (c = +getComputedStyle(this.Nb, p).top.replace(/[^0-9-]/g, ''))),
          d != this.x || c != this.y)
        )
          this.options.Ei ? this.$d(tf) : vf(this.jC),
            (this.Ej = []),
            this.Ir(d, c),
            this.options.ty && this.options.ty.call(this)
        this.vw = this.x
        this.ww = this.y
        this.pu = this.x
        this.qu = this.y
        this.wh = b.pageX
        this.xh = b.pageY
        this.startTime = a.timeStamp || Date.now()
        this.options.BN && this.options.BN.call(this, a)
        this.ca(qf, window)
        this.ca(rf, window)
        this.ca(sf, window)
      }
    },
    tT: function(a) {
      var b = lf ? a.touches[0] : a,
        c = b.pageX - this.wh,
        d = b.pageY - this.xh,
        e = this.x + c,
        f = this.y + d,
        g = a.timeStamp || Date.now()
      this.options.pN && this.options.pN.call(this, a)
      if (this.options.zoom && lf && 1 < a.touches.length)
        (e = Te.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (f = Te.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.$_ = Te.sqrt(e * e + f * f)),
          (this.cl = o),
          (b = (1 / this.a0) * this.$_ * this.scale),
          b < this.options.bl
            ? (b = 0.5 * this.options.bl * Math.pow(2, b / this.options.bl))
            : b > this.options.iq &&
              (b = 2 * this.options.iq * Math.pow(0.5, this.options.iq / b)),
          (this.Bp = b / this.scale),
          (e = this.vy - this.vy * this.Bp + this.x),
          (f = this.wy - this.wy * this.Bp + this.y),
          (this.Nb.style[bf] =
            'translate(' + e + 'px,' + f + 'px) scale(' + b + ')' + wf),
          this.options.DN && this.options.DN.call(this, a)
      else {
        this.wh = b.pageX
        this.xh = b.pageY
        if (0 < e || e < this.je)
          e = this.options.Lo
            ? this.x + c / 2
            : 0 <= e || 0 <= this.je
            ? 0
            : this.je
        if (f > this.sf || f < this.od)
          f = this.options.Lo
            ? this.y + d / 2
            : f >= this.sf || 0 <= this.od
            ? this.sf
            : this.od
        this.aD += c
        this.bD += d
        this.tw = Te.abs(this.aD)
        this.uw = Te.abs(this.bD)
        ;(6 > this.tw && 6 > this.uw) ||
          (this.options.TE &&
            (this.tw > this.uw + 5
              ? ((f = this.y), (d = 0))
              : this.uw > this.tw + 5 && ((e = this.x), (c = 0))),
          (this.th = o),
          this.Ir(e, f),
          (this.VC = 0 < c ? -1 : 0 > c ? 1 : 0),
          (this.WC = 0 < d ? -1 : 0 > d ? 1 : 0),
          300 < g - this.startTime &&
            ((this.startTime = g), (this.pu = this.x), (this.qu = this.y)),
          this.options.AN && this.options.AN.call(this, a))
      }
    },
    lv: function(a) {
      if (!(lf && 0 !== a.touches.length)) {
        var b = this,
          c = lf ? a.changedTouches[0] : a,
          d,
          e,
          f = { Ca: 0, time: 0 },
          g = { Ca: 0, time: 0 },
          i = (a.timeStamp || Date.now()) - b.startTime
        d = b.x
        e = b.y
        b.$d(qf, window)
        b.$d(rf, window)
        b.$d(sf, window)
        b.options.oN && b.options.oN.call(b, a)
        if (b.cl)
          (d = b.scale * b.Bp),
            (d = Math.max(b.options.bl, d)),
            (d = Math.min(b.options.iq, d)),
            (b.Bp = d / b.scale),
            (b.scale = d),
            (b.x = b.vy - b.vy * b.Bp + b.x),
            (b.y = b.wy - b.wy * b.Bp + b.y),
            (b.Nb.style[df] = '200ms'),
            (b.Nb.style[bf] =
              'translate(' +
              b.x +
              'px,' +
              b.y +
              'px) scale(' +
              b.scale +
              ')' +
              wf),
            (b.cl = q),
            b.refresh(),
            b.options.Gp && b.options.Gp.call(b, a)
        else {
          if (b.th) {
            if (300 > i && b.options.ly) {
              f = d
                ? b.DI(
                    d - b.pu,
                    i,
                    -b.x,
                    b.Ly - b.Du + b.x,
                    b.options.Lo ? b.Du : 0
                  )
                : f
              g = e
                ? b.DI(
                    e - b.qu,
                    i,
                    -b.y,
                    0 > b.od ? b.Sp - b.Fn + b.y - b.sf : 0,
                    b.options.Lo ? b.Fn : 0
                  )
                : g
              d = b.x + f.Ca
              e = b.y + g.Ca
              if ((0 < b.x && 0 < d) || (b.x < b.je && d < b.je))
                f = { Ca: 0, time: 0 }
              if ((b.y > b.sf && e > b.sf) || (b.y < b.od && e < b.od))
                g = { Ca: 0, time: 0 }
            }
            f.Ca || g.Ca
              ? ((c = Te.max(Te.max(f.time, g.time), 10)),
                b.options.lu &&
                  ((f = d - b.vw),
                  (g = e - b.ww),
                  Te.abs(f) < b.options.Xy && Te.abs(g) < b.options.Xy
                    ? b.scrollTo(b.vw, b.ww, 200)
                    : ((f = b.xJ(d, e)),
                      (d = f.x),
                      (e = f.y),
                      (c = Te.max(f.time, c)))),
                b.scrollTo(Te.round(d), Te.round(e), c))
              : b.options.lu
              ? ((f = d - b.vw),
                (g = e - b.ww),
                Te.abs(f) < b.options.Xy && Te.abs(g) < b.options.Xy
                  ? b.scrollTo(b.vw, b.ww, 200)
                  : ((f = b.xJ(b.x, b.y)),
                    (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time)))
              : b.ro(200)
          } else {
            if (lf)
              if (b.WK && b.options.zoom)
                clearTimeout(b.WK),
                  (b.WK = p),
                  b.options.Hp && b.options.Hp.call(b, a),
                  b.zoom(b.wh, b.xh, 1 == b.scale ? b.options.FW : 1),
                  b.options.Gp &&
                    setTimeout(function() {
                      b.options.Gp.call(b, a)
                    }, 200)
              else if (this.options.Ox) {
                for (d = c.target; 1 != d.nodeType; ) d = d.parentNode
                e = d.tagName.toLowerCase()
                'select' != e && 'input' != e && 'textarea' != e
                  ? ((e = Se.createEvent('MouseEvents')),
                    e.initMouseEvent(
                      'click',
                      o,
                      o,
                      a.view,
                      1,
                      c.screenX,
                      c.screenY,
                      c.clientX,
                      c.clientY,
                      a.ctrlKey,
                      a.altKey,
                      a.shiftKey,
                      a.metaKey,
                      0,
                      p
                    ),
                    (e.RR = o),
                    d.dispatchEvent(e))
                  : d.focus()
              }
            b.ro(400)
          }
          b.options.CN && b.options.CN.call(b, a)
        }
      }
    },
    ro: function(a) {
      var b = 0 <= this.x ? 0 : this.x < this.je ? this.je : this.x,
        c =
          this.y >= this.sf || 0 < this.od
            ? this.sf
            : this.y < this.od
            ? this.od
            : this.y
      if (b == this.x && c == this.y) {
        if (
          (this.th &&
            ((this.th = q), this.options.ty && this.options.ty.call(this)),
          this.qi &&
            this.options.Rx &&
            ('webkit' == Ve && (this.eM.style[gf] = '300ms'),
            (this.eM.style.opacity = '0')),
          this.Fi && this.options.Rx)
        )
          'webkit' == Ve && (this.dP.style[gf] = '300ms'),
            (this.dP.style.opacity = '0')
      } else this.scrollTo(b, c, a || 0)
    },
    YU: function(a) {
      var b = this,
        c,
        d
      if ('wheelDeltaX' in a) (c = a.wheelDeltaX / 12), (d = a.wheelDeltaY / 12)
      else if ('wheelDelta' in a) c = d = a.wheelDelta / 12
      else if ('detail' in a) c = d = 3 * -a.detail
      else return
      if ('zoom' == b.options.lP) {
        if (
          ((d = b.scale * Math.pow(2, (1 / 3) * (d ? d / Math.abs(d) : 0))),
          d < b.options.bl && (d = b.options.bl),
          d > b.options.iq && (d = b.options.iq),
          d != b.scale)
        )
          !b.iz && b.options.Hp && b.options.Hp.call(b, a),
            b.iz++,
            b.zoom(a.pageX, a.pageY, d, 400),
            setTimeout(function() {
              b.iz--
              !b.iz && b.options.Gp && b.options.Gp.call(b, a)
            }, 400)
      } else
        (c = b.x + c),
          (d = b.y + d),
          0 < c ? (c = 0) : c < b.je && (c = b.je),
          d > b.sf ? (d = b.sf) : d < b.od && (d = b.od),
          0 > b.od && b.scrollTo(c, d, 0)
    },
    UU: function(a) {
      a.target == this.Nb && (this.$d(tf), this.QB())
    },
    QB: function() {
      var a = this,
        b = a.x,
        c = a.y,
        d = Date.now(),
        e,
        f,
        g
      a.dm ||
        (a.Ej.length
          ? ((e = a.Ej.shift()),
            e.x == b && e.y == c && (e.time = 0),
            (a.dm = o),
            (a.th = o),
            a.options.Ei)
            ? (a.GJ(e.time),
              a.Ir(e.x, e.y),
              (a.dm = q),
              e.time ? a.ca(tf) : a.ro(0))
            : ((g = function() {
                var i = Date.now(),
                  k
                if (i >= d + e.time) {
                  a.Ir(e.x, e.y)
                  a.dm = q
                  a.options.lZ && a.options.lZ.call(a)
                  a.QB()
                } else {
                  i = (i - d) / e.time - 1
                  f = Te.sqrt(1 - i * i)
                  i = (e.x - b) * f + b
                  k = (e.y - c) * f + c
                  a.Ir(i, k)
                  if (a.dm) a.jC = uf(g)
                }
              }),
              g())
          : a.ro(400))
    },
    GJ: function(a) {
      a += 'ms'
      this.Nb.style[df] = a
      this.qi && (this.kY.style[df] = a)
      this.Fi && (this.s0.style[df] = a)
    },
    DI: function(a, b, c, d, e) {
      var b = Te.abs(a) / b,
        f = (b * b) / 0.0012
      0 < a && f > c
        ? ((c += e / (6 / (6.0e-4 * (f / b)))), (b = (b * c) / f), (f = c))
        : 0 > a &&
          f > d &&
          ((d += e / (6 / (6.0e-4 * (f / b)))), (b = (b * d) / f), (f = d))
      return { Ca: f * (0 > a ? -1 : 1), time: Te.round(b / 6.0e-4) }
    },
    ek: function(a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; (a = a.offsetParent); )
        (b -= a.offsetLeft), (c -= a.offsetTop)
      a != this.En && ((b *= this.scale), (c *= this.scale))
      return { left: b, top: c }
    },
    xJ: function(a, b) {
      var c, d, e
      e = this.Ve.length - 1
      c = 0
      for (d = this.Ve.length; c < d; c++)
        if (a >= this.Ve[c]) {
          e = c
          break
        }
      e == this.MC && 0 < e && 0 > this.VC && e--
      a = this.Ve[e]
      d = (d = Te.abs(a - this.Ve[this.MC]))
        ? 500 * (Te.abs(this.x - a) / d)
        : 0
      this.MC = e
      e = this.vf.length - 1
      for (c = 0; c < e; c++)
        if (b >= this.vf[c]) {
          e = c
          break
        }
      e == this.NC && 0 < e && 0 > this.WC && e--
      b = this.vf[e]
      c = (c = Te.abs(b - this.vf[this.NC]))
        ? 500 * (Te.abs(this.y - b) / c)
        : 0
      this.NC = e
      e = Te.round(Te.max(d, c)) || 200
      return { x: a, y: b, time: e }
    },
    ca: function(a, b, c) {
      ;(b || this.Nb).addEventListener(a, this, !!c)
    },
    $d: function(a, b, c) {
      ;(b || this.Nb).removeEventListener(a, this, !!c)
    },
    SC: ha(2),
    refresh: function() {
      var a,
        b,
        c,
        d = 0
      b = 0
      this.scale < this.options.bl && (this.scale = this.options.bl)
      this.Du = this.En.clientWidth || 1
      this.Fn = this.En.clientHeight || 1
      this.sf = -this.options.Z_ || 0
      this.Ly = Te.round(this.Nb.offsetWidth * this.scale)
      this.Sp = Te.round((this.Nb.offsetHeight + this.sf) * this.scale)
      this.je = this.Du - this.Ly
      this.od = this.Fn - this.Sp + this.sf
      this.WC = this.VC = 0
      this.options.yN && this.options.yN.call(this)
      this.qp = this.options.qp && 0 > this.je
      this.Cn =
        this.options.Cn && ((!this.options.CV && !this.qp) || this.Sp > this.Fn)
      this.qi = this.qp && this.options.qi
      this.Fi = this.Cn && this.options.Fi && this.Sp > this.Fn
      a = this.ek(this.En)
      this.kG = -a.left
      this.lG = -a.top
      if ('string' == typeof this.options.lu) {
        this.Ve = []
        this.vf = []
        c = this.Nb.querySelectorAll(this.options.lu)
        a = 0
        for (b = c.length; a < b; a++)
          (d = this.ek(c[a])),
            (d.left += this.kG),
            (d.top += this.lG),
            (this.Ve[a] = d.left < this.je ? this.je : d.left * this.scale),
            (this.vf[a] = d.top < this.od ? this.od : d.top * this.scale)
      } else if (this.options.lu) {
        for (this.Ve = []; d >= this.je; ) (this.Ve[b] = d), (d -= this.Du), b++
        this.je % this.Du &&
          (this.Ve[this.Ve.length] =
            this.je - this.Ve[this.Ve.length - 1] + this.Ve[this.Ve.length - 1])
        b = d = 0
        for (this.vf = []; d >= this.od; ) (this.vf[b] = d), (d -= this.Fn), b++
        this.od % this.Fn &&
          (this.vf[this.vf.length] =
            this.od - this.vf[this.vf.length - 1] + this.vf[this.vf.length - 1])
      }
      this.Rv('h')
      this.Rv('v')
      this.cl || ((this.Nb.style[df] = '0'), this.ro(400))
    },
    scrollTo: function(a, b, c, d) {
      var e = a
      this.stop()
      e.length || (e = [{ x: a, y: b, time: c, EZ: d }])
      a = 0
      for (b = e.length; a < b; a++)
        e[a].EZ && ((e[a].x = this.x - e[a].x), (e[a].y = this.y - e[a].y)),
          this.Ej.push({ x: e[a].x, y: e[a].y, time: e[a].time || 0 })
      this.QB()
    },
    disable: function() {
      this.stop()
      this.ro(0)
      this.enabled = q
      this.$d(qf, window)
      this.$d(rf, window)
      this.$d(sf, window)
    },
    enable: function() {
      this.enabled = o
    },
    stop: function() {
      this.options.Ei ? this.$d(tf) : vf(this.jC)
      this.Ej = []
      this.dm = this.th = q
    },
    zoom: function(a, b, c, d) {
      var e = c / this.scale
      this.options.$k &&
        ((this.cl = o),
        (d = d === j ? 200 : d),
        (a = a - this.kG - this.x),
        (b = b - this.lG - this.y),
        (this.x = a - a * e + this.x),
        (this.y = b - b * e + this.y),
        (this.scale = c),
        this.refresh(),
        (this.x = 0 < this.x ? 0 : this.x < this.je ? this.je : this.x),
        (this.y =
          this.y > this.sf ? this.sf : this.y < this.od ? this.od : this.y),
        (this.Nb.style[df] = d + 'ms'),
        (this.Nb.style[bf] =
          'translate(' + this.x + 'px,' + this.y + 'px) scale(' + c + ')' + wf),
        (this.cl = q))
    }
  }
  function af(a) {
    if ('' === Ve) return a
    a = a.charAt(0).toUpperCase() + a.substr(1)
    return Ve + a
  }
  Ue = p
  function yf(a) {
    this.k = {
      anchor: Hc,
      offset: new L(0, 0),
      maxWidth: '100%',
      imageHeight: 80
    }
    var a = a || {},
      b
    for (b in a) this.k[b] = a[b]
    this.Ql = new Oc(p, { of: 'api' })
    this.fk = []
    this.P = p
    this.eg = { height: this.k.imageHeight, width: this.k.imageHeight * zf }
    this.Pc = this.FB = this.im = this.Xc = p
  }
  var Af = [
      0,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      5,
      5,
      5,
      6,
      6,
      7,
      8,
      8,
      8,
      9,
      10
    ],
    Bf = '\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd'.split(
      ' '
    )
  z.an(function(a) {
    var b = p
    a.addEventListener('position_changed', function() {
      a.k.visible &&
        a.k.albumsControl === o &&
        (b ? b.Fy(a.Yb()) : ((b = new yf(a.k.albumsControlOptions)), b.ra(a)))
    })
    a.addEventListener('albums_visible_changed', function() {
      a.k.albumsControl === o
        ? (b ? b.Fy(a.Yb()) : ((b = new yf(a.k.albumsControlOptions)), b.ra(a)),
          b.show())
        : b.U()
    })
    a.addEventListener('albums_options_changed', function() {
      b && b.Rk(a.k.albumsControlOptions)
    })
    a.addEventListener('visible_changed', function() {
      b &&
        (a.oE()
          ? a.k.albumsControl === o && (b.C.style.visibility = 'visible')
          : (b.C.style.visibility = 'hidden'))
    })
  })
  var zf = 1.8
  H() && (zf = 1)
  x.extend(yf.prototype, {
    Rk: function(a) {
      for (var b in a) this.k[b] = a[b]
      a = this.k.imageHeight + 'px'
      this.qc(this.k.anchor)
      this.C.style.width =
        isNaN(Number(this.k.maxWidth)) === o
          ? this.k.maxWidth
          : this.k.maxWidth + 'px'
      this.C.style.height = a
      this.kk.style.height = a
      this.$h.style.height = a
      this.eg = { height: this.k.imageHeight, width: this.k.imageHeight * zf }
      this.jk.style.height = this.eg.height - 6 + 'px'
      this.jk.style.width = this.eg.width - 6 + 'px'
      this.Fy(this.P.Yb(), o)
    },
    ra: function(a) {
      this.P = a
      this.qs()
      this.tQ()
      this.zY()
      this.Fy(a.Yb())
    },
    qs: function() {
      var a = this.k.imageHeight + 'px'
      this.C = F('div')
      var b = this.C.style
      b.cssText = 'background:rgb(37,37,37);background:rgba(37,37,37,0.9);'
      b.position = 'absolute'
      b.zIndex = '2000'
      b.width =
        isNaN(Number(this.k.maxWidth)) === o
          ? this.k.maxWidth
          : this.k.maxWidth + 'px'
      b.padding = '8px 0'
      b.visibility = 'hidden'
      b.height = a
      this.kk = F('div')
      b = this.kk.style
      b.position = 'absolute'
      b.overflow = 'hidden'
      b.width = '100%'
      b.height = a
      this.$h = F('div')
      b = this.$h.style
      b.height = a
      this.kk.appendChild(this.$h)
      this.C.appendChild(this.kk)
      this.P.C.appendChild(this.C)
      this.jk = F('div', { class: 'pano_photo_item_seleted' })
      this.jk.style.height = this.eg.height - 6 + 'px'
      this.jk.style.width = this.eg.width - 6 + 'px'
      this.qc(this.k.anchor)
    },
    UH: function(a) {
      for (var b = this.fk, c = b.length - 1; 0 <= c; c--)
        if (b[c].panoId == a) return c
      return -1
    },
    Fy: function(a, b) {
      if (
        b ||
        !this.fk[this.Xc] ||
        !(this.fk[this.Xc].panoId == a && 3 !== this.fk[this.Xc].recoType)
      ) {
        var c = this,
          d = this.UH(a)
        !b && -1 !== d && this.fk[d] && 3 !== this.fk[d].recoType
          ? this.Wp(d)
          : this.RX(function(a) {
              for (
                var b = {}, d, i, k = q, l = [], m = 0, n = a.length;
                m < n;
                m++
              )
                (d = a[m].catlog),
                  (i = a[m].floor),
                  j !== d &&
                    ('' === d && j !== i
                      ? ((k = o), b[i] || (b[i] = []), b[i].push(a[m]))
                      : (b[Af[d]] || (b[Af[d]] = []), b[Af[d]].push(a[m])))
              for (var s in b)
                k
                  ? l.push({ data: s + 'F', index: s })
                  : l.push({ data: Bf[s], index: s })
              c.kH = b
              c.Ri = l
              c.Ml(a)
              0 == a.length ? c.U() : c.show()
            })
      }
    },
    kW: function() {
      if (!this.Oi) {
        var a = this.FX(this.Ri),
          b = F('div')
        b.style.cssText = [
          'width:' + 134 * this.Ri.length + 'px;',
          'overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;'
        ].join('')
        b.innerHTML = a
        a = F('div')
        a.appendChild(b)
        a.style.cssText =
          'position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0'
        new xf(a, { Lo: q, ly: o, qi: q, Fi: q, Cn: q, TE: o, Ow: o, Ox: o })
        this.C.appendChild(a)
        for (
          var c = this, d = b.getElementsByTagName('span'), e = 0, f = d.length;
          e < f;
          e++
        )
          (b = d[e]),
            x.M(b, 'click', function() {
              if (this.getAttribute('dataindex')) {
                c.Ml(c.kH[this.getAttribute('dataindex')])
                for (var a = 0, b = d.length; a < b; a++)
                  d[a].style.color = '#FFFFFF'
                this.style.color = '#3383FF'
              }
            })
        this.Oi = a
      }
    },
    hW: function() {
      if (this.Oi) (a = this.CL(this.Ri)), (this.JQ.innerHTML = a)
      else {
        var a = this.CL(this.Ri),
          b = F('ul'),
          c = this
        b.style.cssText =
          'list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px'
        b.innerHTML = a
        x.M(b, 'click', function(a) {
          if ((a = (a.srcElement || a.target).getAttribute('dataindex'))) {
            c.Ml(c.kH[a])
            for (
              var d = b.getElementsByTagName('li'), e = 0, f = d.length;
              e < f;
              e++
            )
              d[e].childNodes[0].getAttribute('dataindex') === a
                ? x.K.Ta(d[e], 'pano_catlogLiActive')
                : x.K.Tb(d[e], 'pano_catlogLiActive')
          }
        })
        var a = F('div'),
          d = F('a'),
          e = F('span'),
          f = F('a'),
          g = F('span'),
          i = [
            'background:url(' + G.qa + 'panorama/catlog_icon.png) no-repeat;',
            'display:block;width:10px;height:7px;margin:0 auto;'
          ].join('')
        e.style.cssText = i + 'background-position:-18px 0;'
        d.style.cssText =
          'background:#1C1C1C;display:block;position:absolute;width:58px;'
        g.style.cssText = i + 'background-position:0 0;'
        f.style.cssText =
          'background:#1C1C1C;display:block;position:absolute;width:58px;'
        f.style.top = this.k.imageHeight - 7 + 'px'
        a.style.cssText = 'position:absolute;top:0px;left:0px;width:60px;'
        d.appendChild(e)
        f.appendChild(g)
        x.M(d, 'mouseover', function() {
          var a = parseInt(b.style.top, 10)
          7 !== a && (e.style.backgroundPosition = '-27px 0')
          new ub({
            Hc: 60,
            hc: vb.Ns,
            duration: 300,
            va: function(c) {
              b.style.top = a + (7 - a) * c + 'px'
            }
          })
        })
        x.M(d, 'mouseout', function() {
          e.style.backgroundPosition = '-18px 0'
        })
        x.M(f, 'mouseover', function() {
          var a = parseInt(b.style.top, 10),
            d = c.k.imageHeight - 14
          if (!(parseInt(b.offsetHeight, 10) < d)) {
            var e = d - parseInt(b.offsetHeight, 10) + 7
            e !== a && (g.style.backgroundPosition = '-9px 0')
            new ub({
              Hc: 60,
              hc: vb.Ns,
              duration: 300,
              va: function(c) {
                b.style.top = a + (e - a) * c + 'px'
              }
            })
          }
        })
        x.M(f, 'mouseout', function() {
          g.style.backgroundPosition = '0 0'
        })
        a.appendChild(d)
        a.appendChild(f)
        d = F('div')
        d.style.cssText = [
          'position:absolute;z-index:2001;left:20px;',
          'height:' + this.k.imageHeight + 'px;',
          'width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);'
        ].join('')
        d.appendChild(b)
        d.appendChild(a)
        this.Oi = d
        this.JQ = b
        this.C.appendChild(d)
      }
    },
    iW: function() {
      if (this.Ri && !(0 >= this.Ri.length)) {
        var a = F('div')
        a.innerHTML = this.nA
        a.style.cssText = 'position:absolute;background:#252525'
        this.C.appendChild(a)
        this.Rs = a
        this.Pc.fg.style.left = this.eg.width + 8 + 'px'
        this.Oi &&
          (this.Oi.style.left =
            parseInt(this.Oi.style.left, 10) + this.eg.width + 8 + 'px')
        var b = this
        x.M(a, 'click', function() {
          b.P.rc(b.UW)
        })
      }
    },
    Ml: function(a) {
      this.fk = a
      this.k.showCatalog &&
        (0 < this.Ri.length
          ? (Wa() ? this.hW() : this.kW(), (this.Pc.offsetLeft = 60))
          : (this.Rs &&
              (this.C.removeChild(this.Rs),
              (this.Rs = p),
              (this.Pc.fg.style.left = '0px')),
            this.Oi && (this.C.removeChild(this.Oi), (this.Oi = p)),
            (this.Pc.offsetLeft = 0)))
      var b = this.zX(a)
      Wa() &&
        this.Ri &&
        0 < this.Ri.length &&
        this.k.showExit &&
        this.nA &&
        ((this.Pc.offsetLeft += this.eg.width + 8),
        this.Rs ? (this.Rs.innerHTML = this.nA) : this.iW())
      this.$h.innerHTML = b
      this.$h.style.width = (this.eg.width + 8) * a.length + 8 + 'px'
      a = this.C.offsetWidth
      b = this.$h.offsetWidth
      this.Pc.Ys && (b += this.Pc.Ys())
      b < a - 2 * this.Pc.Ii - this.Pc.offsetLeft
        ? (this.C.style.width = b + this.Pc.offsetLeft + 'px')
        : ((this.C.style.width =
            isNaN(Number(this.k.maxWidth)) === o
              ? this.k.maxWidth
              : this.k.maxWidth + 'px'),
          b < this.C.offsetWidth - 2 * this.Pc.Ii - this.Pc.offsetLeft &&
            (this.C.style.width = b + this.Pc.offsetLeft + 'px'))
      this.Pc.refresh()
      this.FB = this.$h.children
      this.$h.appendChild(this.jk)
      this.jk.style.left = '-100000px'
      a = this.UH(this.P.Yb(), this.C1)
      ;-1 !== a && this.Wp(a)
    },
    FX: function(a) {
      for (var b = '', c, d = 0, e = a.length; d < e; d++)
        (c =
          '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' +
          a[d].index +
          '">' +
          a[d].data +
          '</span></div>'),
          (b += c)
      return b
    },
    CL: function(a) {
      for (var b = '', c, d = 0, e = a.length; d < e; d++)
        (c =
          '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' +
          a[d].index +
          '">' +
          a[d].data +
          '</span></li>'),
          (b += c)
      return b
    },
    zX: function(a) {
      for (
        var b, c, d, e, f = [], g = this.eg.height, i = this.eg.width, k = 0;
        k < a.length;
        k++
      )
        (b = a[k]),
          (recoType = b.recoType),
          (d = b.panoId),
          (e = b.name),
          (c = b.heading),
          (b = b.pitch),
          (c = Re.OL(d, c, b, 198, 108)),
          (b =
            '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
            k +
            '"><img style="width:' +
            (i - 2) +
            'px;height:' +
            (g - 2) +
            'px;" data-index="' +
            k +
            '" name="' +
            e +
            '" src="' +
            c +
            '" alt="' +
            e +
            '"/><span class="pano_photo_decs" data-index="' +
            k +
            '" style="width:' +
            i +
            'px;font-size:' +
            Math.floor(g / 6) +
            'px; line-height:' +
            Math.floor(g / 6) +
            'px;"><em class="pano_poi_' +
            recoType +
            '"></em>' +
            e +
            '</span></a>'),
          3 === recoType
            ? Wa()
              ? ((this.nA = b), (this.UW = d), a.splice(k, 1), k--)
              : ((b =
                  '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
                  k +
                  '"><img style="width:' +
                  (i - 2) +
                  'px;height:' +
                  (g - 2) +
                  'px;" data-index="' +
                  k +
                  '" name="' +
                  e +
                  '" src="' +
                  c +
                  '" alt="' +
                  e +
                  '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
                  this.k.imageHeight +
                  'px;" data-index="' +
                  k +
                  '"><img src="' +
                  G.qa +
                  'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' +
                  k +
                  '" alt=""/></div></a>'),
                f.push(b))
            : f.push(b)
      return f.join('')
    },
    RX: function(a) {
      var b = this,
        c = this.P.Yb()
      c &&
        this.Ql.Lx(c, function(d) {
          b.P.Yb() === c && a(d)
        })
    },
    qc: function(a) {
      if (!Ya(a) || isNaN(a) || a < Fc || 3 < a) a = this.defaultAnchor
      var b = this.C,
        c = this.k.offset.width,
        d = this.k.offset.height
      b.style.left = b.style.top = b.style.right = b.style.bottom = 'auto'
      switch (a) {
        case Fc:
          b.style.top = d + 'px'
          b.style.left = c + 'px'
          break
        case Gc:
          b.style.top = d + 'px'
          b.style.right = c + 'px'
          break
        case Hc:
          b.style.bottom = d + 'px'
          b.style.left = c + 'px'
          break
        case 3:
          ;(b.style.bottom = d + 'px'), (b.style.right = c + 'px')
      }
    },
    tQ: function() {
      this.rQ()
    },
    rQ: function() {
      var a = this
      x.M(this.C, 'touchstart', function(a) {
        a.stopPropagation()
      })
      x.M(this.kk, 'click', function(b) {
        if (
          (b = (b.srcElement || b.target).getAttribute('data-index')) &&
          b != a.Xc
        )
          a.Wp(b), a.P.rc(a.fk[b].panoId)
      })
      x.M(this.$h, 'mouseover', function(b) {
        b = (b.srcElement || b.target).getAttribute('data-index')
        b !== p && a.CK(b, o)
      })
      this.P.addEventListener('size_changed', function() {
        isNaN(Number(a.k.maxWidth)) && a.Rk({ maxWidth: a.k.maxWidth })
      })
    },
    Wp: function(a) {
      this.jk.style.left = this.FB[a].offsetLeft + 8 + 'px'
      this.jk.setAttribute('data-index', this.FB[a].getAttribute('data-index'))
      this.Xc = a
      this.CK(a)
    },
    CK: function(a, b) {
      var c = this.eg.width + 8,
        d = 0
      this.Pc.Ys && (d = this.Pc.Ys() / 2)
      var e = this.kk.offsetWidth - 2 * d,
        f = this.$h.offsetLeft || this.Pc.x,
        f = f - d,
        g = -a * c
      g > f && this.Pc.scrollTo(g + d)
      c = g - c
      f -= e
      c < f && (!b || (b && 8 < g - f)) && this.Pc.scrollTo(c + e + d)
    },
    zY: function() {
      this.Pc = H()
        ? new xf(this.kk, {
            Lo: q,
            ly: o,
            qi: q,
            Fi: q,
            Cn: q,
            TE: o,
            Ow: o,
            Ox: o
          })
        : new Cf(this.kk)
    },
    U: function() {
      this.C.style.visibility = 'hidden'
    },
    show: function() {
      this.C.style.visibility = 'visible'
    }
  })
  function Cf(a) {
    this.C = a
    this.Wg = a.children[0]
    this.Wr = p
    this.Ii = 20
    this.offsetLeft = 0
    this.ra()
  }
  Cf.prototype = {
    ra: function() {
      this.Wg.style.position = 'relative'
      this.refresh()
      this.qs()
      this.gm()
    },
    refresh: function() {
      this.no = this.C.offsetWidth - this.Ys()
      this.eB = -(this.Wg.offsetWidth - this.no - this.Ii)
      this.Dv = this.Ii + this.offsetLeft
      this.Wg.style.left = this.Dv + 'px'
      this.Wg.children[0] && (this.Wr = this.Wg.children[0].offsetWidth)
      this.fg &&
        (this.fg.children[0].style.marginTop = this.Or.children[0].style.marginTop =
          this.fg.offsetHeight / 2 -
          this.fg.children[0].offsetHeight / 2 +
          'px')
    },
    Ys: function() {
      return 2 * this.Ii
    },
    qs: function() {
      this.Sv = F('div')
      this.Sv.innerHTML =
        '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>'
      this.fg = this.Sv.children[0]
      this.Or = this.Sv.children[1]
      this.C.appendChild(this.Sv)
      this.fg.children[0].style.marginTop = this.Or.children[0].style.marginTop =
        this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + 'px'
    },
    gm: function() {
      var a = this
      x.M(this.fg, 'click', function() {
        a.scrollTo(a.Wg.offsetLeft + a.no)
      })
      x.M(this.Or, 'click', function() {
        a.scrollTo(a.Wg.offsetLeft - a.no)
      })
    },
    VU: function() {
      x.K.Tb(this.fg, 'pano_arrow_disable')
      x.K.Tb(this.Or, 'pano_arrow_disable')
      var a = this.Wg.offsetLeft
      a >= this.Dv && x.K.Ta(this.fg, 'pano_arrow_disable')
      a - this.no <= this.eB && x.K.Ta(this.Or, 'pano_arrow_disable')
    },
    scrollTo: function(a) {
      a =
        a < this.Wg.offsetLeft
          ? Math.ceil((a - this.Ii - this.no) / this.Wr) * this.Wr +
            this.no +
            this.Ii -
            8
          : Math.ceil((a - this.Ii) / this.Wr) * this.Wr + this.Ii
      a < this.eB ? (a = this.eB) : a > this.Dv && (a = this.Dv)
      var b = this.Wg.offsetLeft,
        c = this
      new ub({
        Hc: 60,
        hc: vb.Ns,
        duration: 300,
        va: function(d) {
          c.Wg.style.left = b + (a - b) * d + 'px'
        },
        finish: function() {
          c.VU()
        }
      })
    }
  }
  z.Map = Ma
  z.Hotspot = kb
  z.MapType = Hd
  z.Point = N
  z.Pixel = S
  z.Size = L
  z.Bounds = hb
  z.TileLayer = ud
  z.Projection = Uc
  z.MercatorProjection = T
  z.PerspectiveProjection = jb
  z.Copyright = function(a, b, c) {
    this.id = a
    this.$a = b
    this.content = c
  }
  z.Overlay = Xc
  z.Label = ed
  z.GroundOverlay = fd
  z.PointCollection = jd
  z.Marker = V
  z.Icon = ad
  z.IconSequence = cd
  z.Symbol = bd
  z.Polyline = qd
  z.Polygon = pd
  z.InfoWindow = dd
  z.Circle = rd
  z.Control = Ec
  z.NavigationControl = lb
  z.GeolocationControl = Ic
  z.OverviewMapControl = nb
  z.CopyrightControl = Jc
  z.ScaleControl = mb
  z.MapTypeControl = ob
  z.CityListControl = Kc
  z.PanoramaControl = Mc
  z.TrafficLayer = Dd
  z.CustomLayer = pb
  z.ContextMenu = Pc
  z.MenuItem = Sc
  z.LocalSearch = db
  z.TransitRoute = ge
  z.DrivingRoute = je
  z.WalkingRoute = ke
  z.Autocomplete = ve
  z.RouteSearch = pe
  z.Geocoder = qe
  z.LocalCity = se
  z.Geolocation = Geolocation
  z.Convertor = Wc
  z.BusLineSearch = ue
  z.Boundary = te
  z.VectorCloudLayer = Bd
  z.VectorTrafficLayer = Cd
  z.Panorama = Pa
  z.PanoramaLabel = Be
  z.PanoramaService = Oc
  z.PanoramaCoverageLayer = Nc
  z.PanoramaFlashInterface = Pe
  function U(a, b) {
    for (var c in b) a[c] = b[c]
  }
  U(window, {
    BMap: z,
    _jsload2: function(a, b) {
      ja.$y.JY && ja.$y.set(a, b)
      K.MV(a, b)
    },
    BMAP_API_VERSION: '2.0'
  })
  var Df = Ma.prototype
  U(Df, {
    getBounds: Df.Id,
    getCenter: Df.pc,
    getMapType: Df.oa,
    getSize: Df.vb,
    setSize: Df.Ce,
    getViewport: Df.jt,
    getZoom: Df.ga,
    centerAndZoom: Df.Ed,
    panTo: Df.yi,
    panBy: Df.yg,
    setCenter: Df.Wf,
    setCurrentCity: Df.GF,
    setMapType: Df.Eg,
    setViewport: Df.Dh,
    setZoom: Df.Oc,
    highResolutionEnabled: Df.Tx,
    zoomTo: Df.Hg,
    zoomIn: Df.mG,
    zoomOut: Df.nG,
    addHotspot: Df.Aw,
    removeHotspot: Df.GZ,
    clearHotspots: Df.km,
    checkResize: Df.PV,
    addControl: Df.gs,
    removeControl: Df.SN,
    getContainer: Df.Ka,
    addContextMenu: Df.Eo,
    removeContextMenu: Df.Mp,
    addOverlay: Df.Ja,
    removeOverlay: Df.Ub,
    clearOverlays: Df.zK,
    openInfoWindow: Df.Mb,
    closeInfoWindow: Df.Wc,
    pointToOverlayPixel: Df.We,
    overlayPixelToPoint: Df.FN,
    getInfoWindow: Df.lh,
    getOverlays: Df.Ix,
    getPanes: function() {
      return {
        floatPane: this.Yd.HD,
        markerMouseTarget: this.Yd.WE,
        floatShadow: this.Yd.uL,
        labelPane: this.Yd.OE,
        markerPane: this.Yd.$M,
        markerShadow: this.Yd.aN,
        mapPane: this.Yd.Gt,
        vertexPane: this.Yd.hP
      }
    },
    addTileLayer: Df.$g,
    removeTileLayer: Df.Ah,
    pixelToPoint: Df.zg,
    pointToPixel: Df.Kp,
    setFeatureStyle: Df.Vp,
    selectBaseElement: Df.y4,
    setMapStyle: Df.au,
    enable3DBuilding: Df.Wo,
    disable3DBuilding: Df.yW,
    getPanorama: Df.Cm,
    setBrowserContextmenu: Df.f_
  })
  var Gf = Hd.prototype
  U(Gf, {
    getTileLayer: Gf.bY,
    getMinZoom: Gf.gp,
    getMaxZoom: Gf.Bm,
    getProjection: Gf.Fm,
    getTextColor: Gf.Im,
    getTips: Gf.it
  })
  U(window, {
    BMAP_NORMAL_MAP: Na,
    BMAP_PERSPECTIVE_MAP: Qa,
    BMAP_SATELLITE_MAP: ab,
    BMAP_HYBRID_MAP: Ta
  })
  var Hf = T.prototype
  U(Hf, { lngLatToPoint: Hf.fy, pointToLngLat: Hf.Dj })
  var If = jb.prototype
  U(If, { lngLatToPoint: If.fy, pointToLngLat: If.Dj })
  var Jf = hb.prototype
  U(Jf, {
    equals: Jf.ab,
    containsPoint: Jf.Vw,
    containsBounds: Jf.$V,
    intersects: Jf.xt,
    extend: Jf.extend,
    getCenter: Jf.pc,
    isEmpty: Jf.Bj,
    getSouthWest: Jf.xe,
    getNorthEast: Jf.pf,
    toSpan: Jf.aG
  })
  var Kf = Xc.prototype
  U(Kf, { isVisible: Kf.oh, show: Kf.show, hide: Kf.U })
  Xc.getZIndex = Xc.Km
  var Lf = ib.prototype
  U(Lf, {
    openInfoWindow: Lf.Mb,
    closeInfoWindow: Lf.Wc,
    enableMassClear: Lf.qj,
    disableMassClear: Lf.AW,
    show: Lf.show,
    hide: Lf.U,
    getMap: Lf.Dx,
    addContextMenu: Lf.Eo,
    removeContextMenu: Lf.Mp
  })
  var Mf = V.prototype
  U(Mf, {
    setIcon: Mf.Vb,
    getIcon: Mf.fp,
    setPosition: Mf.ta,
    getPosition: Mf.ia,
    setOffset: Mf.Ye,
    getOffset: Mf.Qf,
    getLabel: Mf.aE,
    setLabel: Mf.nn,
    setTitle: Mf.Dc,
    setTop: Mf.Ci,
    enableDragging: Mf.Gb,
    disableDragging: Mf.YC,
    setZIndex: Mf.fu,
    getMap: Mf.Dx,
    setAnimation: Mf.mn,
    setShadow: Mf.Ry,
    hide: Mf.U,
    setRotation: Mf.Py,
    getRotation: Mf.SL
  })
  U(window, { BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2 })
  var Nf = ed.prototype
  U(Nf, {
    setStyle: Nf.Nd,
    setStyles: Nf.Bi,
    setContent: Nf.ad,
    setPosition: Nf.ta,
    getPosition: Nf.ia,
    setOffset: Nf.Ye,
    getOffset: Nf.Qf,
    setTitle: Nf.Dc,
    setZIndex: Nf.fu,
    getMap: Nf.Dx,
    getContent: Nf.zk
  })
  var Of = ad.prototype
  U(Of, {
    setImageUrl: Of.hO,
    setSize: Of.Ce,
    setAnchor: Of.qc,
    setImageOffset: Of.$t,
    setImageSize: Of.l_,
    setInfoWindowAnchor: Of.o_,
    setPrintImageUrl: Of.y_
  })
  var Pf = dd.prototype
  U(Pf, {
    redraw: Pf.ke,
    setTitle: Pf.Dc,
    setContent: Pf.ad,
    getContent: Pf.zk,
    getPosition: Pf.ia,
    enableMaximize: Pf.fh,
    disableMaximize: Pf.kx,
    isOpen: Pf.Va,
    setMaxContent: Pf.bu,
    maximize: Pf.jy,
    enableAutoPan: Pf.Os
  })
  var Qf = Zc.prototype
  U(Qf, {
    getPath: Qf.ve,
    setPath: Qf.le,
    setPositionAt: Qf.tn,
    getStrokeColor: Qf.XX,
    setStrokeWeight: Qf.$p,
    getStrokeWeight: Qf.VL,
    setStrokeOpacity: Qf.Yp,
    getStrokeOpacity: Qf.YX,
    setFillOpacity: Qf.Zt,
    getFillOpacity: Qf.uX,
    setStrokeStyle: Qf.Zp,
    getStrokeStyle: Qf.UL,
    getFillColor: Qf.tX,
    getBounds: Qf.Id,
    enableEditing: Qf.mf,
    disableEditing: Qf.zW,
    getEditing: Qf.qX
  })
  var Rf = rd.prototype
  U(Rf, {
    setCenter: Rf.Wf,
    getCenter: Rf.pc,
    getRadius: Rf.QL,
    setRadius: Rf.wf
  })
  var Sf = pd.prototype
  U(Sf, { getPath: Sf.ve, setPath: Sf.le, setPositionAt: Sf.tn })
  var Tf = kb.prototype
  U(Tf, {
    getPosition: Tf.ia,
    setPosition: Tf.ta,
    getText: Tf.kE,
    setText: Tf.eu
  })
  N.prototype.equals = N.prototype.ab
  S.prototype.equals = S.prototype.ab
  L.prototype.equals = L.prototype.ab
  U(window, {
    BMAP_ANCHOR_TOP_LEFT: Fc,
    BMAP_ANCHOR_TOP_RIGHT: Gc,
    BMAP_ANCHOR_BOTTOM_LEFT: Hc,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3
  })
  var Uf = Ec.prototype
  U(Uf, {
    setAnchor: Uf.qc,
    getAnchor: Uf.OD,
    setOffset: Uf.Ye,
    getOffset: Uf.Qf,
    show: Uf.show,
    hide: Uf.U,
    isVisible: Uf.oh,
    toString: Uf.toString
  })
  var Vf = lb.prototype
  U(Vf, { getType: Vf.op, setType: Vf.vn })
  U(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3
  })
  var Wf = nb.prototype
  U(Wf, { changeView: Wf.se, setSize: Wf.Ce, getSize: Wf.vb })
  var Xf = mb.prototype
  U(Xf, { getUnit: Xf.fY, setUnit: Xf.OF })
  U(window, { BMAP_UNIT_METRIC: 'metric', BMAP_UNIT_IMPERIAL: 'us' })
  var Yf = Jc.prototype
  U(Yf, {
    addCopyright: Yf.zw,
    removeCopyright: Yf.rF,
    getCopyright: Yf.ym,
    getCopyrightCollection: Yf.VD
  })
  U(window, {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: Lc,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2
  })
  var Zf = ud.prototype
  U(Zf, { getMapType: Zf.oa, getCopyright: Zf.ym, isTransparentPng: Zf.Dt })
  var $f = Pc.prototype
  U($f, { addItem: $f.Bw, addSeparator: $f.fC, removeSeparator: $f.tF })
  var ag = Sc.prototype
  U(ag, { setText: ag.eu })
  var cg = X.prototype
  U(cg, {
    getStatus: cg.Gm,
    setSearchCompleteCallback: cg.MF,
    getPageCapacity: cg.qf,
    setPageCapacity: cg.Xp,
    setLocation: cg.qn,
    disableFirstResultSelection: cg.ZC,
    enableFirstResultSelection: cg.wD,
    gotoPage: cg.Lm,
    searchNearby: cg.Tp,
    searchInBounds: cg.ln,
    search: cg.search
  })
  U(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: 2,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: 6,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: 8
  })
  U(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4
  })
  U(window, {
    BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2
  })
  var dg = fe.prototype
  U(dg, { clearResults: dg.Qe })
  he = ge.prototype
  U(he, { setPolicy: he.du, toString: he.toString, setPageCapacity: he.Xp })
  U(window, {
    BMAP_DRIVING_POLICY_LEAST_TIME: 0,
    BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
  })
  U(window, {
    BMAP_MODE_DRIVING: 'driving',
    BMAP_MODE_TRANSIT: 'transit',
    BMAP_MODE_WALKING: 'walking',
    BMAP_MODE_NAVIGATION: 'navigation'
  })
  var eg = pe.prototype
  U(eg, { routeCall: eg.cO })
  U(window, { BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2 })
  U(window, { BMAP_ROUTE_TYPE_DRIVING: Sd, BMAP_ROUTE_TYPE_WALKING: Rd })
  U(window, {
    BMAP_ROUTE_STATUS_NORMAL: Td,
    BMAP_ROUTE_STATUS_EMPTY: 1,
    BMAP_ROUTE_STATUS_ADDRESS: 2
  })
  var fg = je.prototype
  U(fg, { setPolicy: fg.du })
  var gg = ve.prototype
  U(gg, {
    show: gg.show,
    hide: gg.U,
    setTypes: gg.NF,
    setLocation: gg.qn,
    search: gg.search,
    setInputValue: gg.My
  })
  U(pb.prototype, {})
  var hg = te.prototype
  U(hg, { get: hg.get })
  U(Nc.prototype, {})
  U(eb.prototype, {})
  U(window, {
    BMAP_POINT_DENSITY_HIGH: 200,
    BMAP_POINT_DENSITY_MEDIUM: Gd,
    BMAP_POINT_DENSITY_LOW: 50
  })
  U(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: gd,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5
  })
  U(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: hd,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7
  })
  U(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
  })
  U(window, {
    BMAP_CONTEXT_MENU_ICON_ZOOMIN: Qc,
    BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Rc
  })
  U(window, {
    BMAP_SYS_DRAWER: Ka,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4
  })
  z.nV()
})()
