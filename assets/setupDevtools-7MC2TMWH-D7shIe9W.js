import { p as wn } from './app-B_7CxFr0.js'
var Pn = Object.create,
	qt = Object.defineProperty,
	Vn = Object.getOwnPropertyDescriptor,
	be = Object.getOwnPropertyNames,
	xn = Object.getPrototypeOf,
	Nn = Object.prototype.hasOwnProperty,
	Fn = (e, t) =>
		function () {
			return e && (t = (0, e[be(e)[0]])((e = 0))), t
		},
	Bn = (e, t) =>
		function () {
			return t || (0, e[be(e)[0]])((t = { exports: {} }).exports, t), t.exports
		},
	Un = (e, t, n, r) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let u of be(t))
				!Nn.call(e, u) &&
					u !== n &&
					qt(e, u, { get: () => t[u], enumerable: !(r = Vn(t, u)) || r.enumerable })
		return e
	},
	Ln = (e, t, n) => (
		(n = e != null ? Pn(xn(e)) : {}), Un(qt(n, 'default', { value: e, enumerable: !0 }), e)
	),
	ee = Fn({
		'../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.0_@types+node@22.10.1__@swc+core@1.5.29_jiti@2.0.0_p_swvvp2d4pgn6xuiiec4l4x2i7a/node_modules/tsup/blog/assets/esm_shims.js'() {},
	}),
	Mn = Bn({
		'../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js'(e, t) {
			ee(), (t.exports = r)
			function n(o) {
				return o instanceof Buffer
					? Buffer.from(o)
					: new o.constructor(o.buffer.slice(), o.byteOffset, o.length)
			}
			function r(o) {
				if (((o = o || {}), o.circles)) return u(o)
				const s = new Map()
				if (
					(s.set(Date, (d) => new Date(d)),
					s.set(Map, (d, m) => new Map(p(Array.from(d), m))),
					s.set(Set, (d, m) => new Set(p(Array.from(d), m))),
					o.constructorHandlers)
				)
					for (const d of o.constructorHandlers) s.set(d[0], d[1])
				let a = null
				return o.proto ? A : h
				function p(d, m) {
					const c = Object.keys(d),
						_ = new Array(c.length)
					for (let g = 0; g < c.length; g++) {
						const f = c[g],
							E = d[f]
						typeof E != 'object' || E === null
							? (_[f] = E)
							: E.constructor !== Object && (a = s.get(E.constructor))
							? (_[f] = a(E, m))
							: ArrayBuffer.isView(E)
							? (_[f] = n(E))
							: (_[f] = m(E))
					}
					return _
				}
				function h(d) {
					if (typeof d != 'object' || d === null) return d
					if (Array.isArray(d)) return p(d, h)
					if (d.constructor !== Object && (a = s.get(d.constructor))) return a(d, h)
					const m = {}
					for (const c in d) {
						if (Object.hasOwnProperty.call(d, c) === !1) continue
						const _ = d[c]
						typeof _ != 'object' || _ === null
							? (m[c] = _)
							: _.constructor !== Object && (a = s.get(_.constructor))
							? (m[c] = a(_, h))
							: ArrayBuffer.isView(_)
							? (m[c] = n(_))
							: (m[c] = h(_))
					}
					return m
				}
				function A(d) {
					if (typeof d != 'object' || d === null) return d
					if (Array.isArray(d)) return p(d, A)
					if (d.constructor !== Object && (a = s.get(d.constructor))) return a(d, A)
					const m = {}
					for (const c in d) {
						const _ = d[c]
						typeof _ != 'object' || _ === null
							? (m[c] = _)
							: _.constructor !== Object && (a = s.get(_.constructor))
							? (m[c] = a(_, A))
							: ArrayBuffer.isView(_)
							? (m[c] = n(_))
							: (m[c] = A(_))
					}
					return m
				}
			}
			function u(o) {
				const s = [],
					a = [],
					p = new Map()
				if (
					(p.set(Date, (c) => new Date(c)),
					p.set(Map, (c, _) => new Map(A(Array.from(c), _))),
					p.set(Set, (c, _) => new Set(A(Array.from(c), _))),
					o.constructorHandlers)
				)
					for (const c of o.constructorHandlers) p.set(c[0], c[1])
				let h = null
				return o.proto ? m : d
				function A(c, _) {
					const g = Object.keys(c),
						f = new Array(g.length)
					for (let E = 0; E < g.length; E++) {
						const T = g[E],
							y = c[T]
						if (typeof y != 'object' || y === null) f[T] = y
						else if (y.constructor !== Object && (h = p.get(y.constructor))) f[T] = h(y, _)
						else if (ArrayBuffer.isView(y)) f[T] = n(y)
						else {
							const k = s.indexOf(y)
							k !== -1 ? (f[T] = a[k]) : (f[T] = _(y))
						}
					}
					return f
				}
				function d(c) {
					if (typeof c != 'object' || c === null) return c
					if (Array.isArray(c)) return A(c, d)
					if (c.constructor !== Object && (h = p.get(c.constructor))) return h(c, d)
					const _ = {}
					s.push(c), a.push(_)
					for (const g in c) {
						if (Object.hasOwnProperty.call(c, g) === !1) continue
						const f = c[g]
						if (typeof f != 'object' || f === null) _[g] = f
						else if (f.constructor !== Object && (h = p.get(f.constructor))) _[g] = h(f, d)
						else if (ArrayBuffer.isView(f)) _[g] = n(f)
						else {
							const E = s.indexOf(f)
							E !== -1 ? (_[g] = a[E]) : (_[g] = d(f))
						}
					}
					return s.pop(), a.pop(), _
				}
				function m(c) {
					if (typeof c != 'object' || c === null) return c
					if (Array.isArray(c)) return A(c, m)
					if (c.constructor !== Object && (h = p.get(c.constructor))) return h(c, m)
					const _ = {}
					s.push(c), a.push(_)
					for (const g in c) {
						const f = c[g]
						if (typeof f != 'object' || f === null) _[g] = f
						else if (f.constructor !== Object && (h = p.get(f.constructor))) _[g] = h(f, m)
						else if (ArrayBuffer.isView(f)) _[g] = n(f)
						else {
							const E = s.indexOf(f)
							E !== -1 ? (_[g] = a[E]) : (_[g] = m(f))
						}
					}
					return s.pop(), a.pop(), _
				}
			}
		},
	})
ee()
ee()
ee()
var Zt = typeof navigator < 'u',
	l =
		typeof window < 'u'
			? window
			: typeof globalThis < 'u'
			? globalThis
			: typeof global < 'u'
			? global
			: {}
typeof l.chrome < 'u' && l.chrome.devtools
Zt && (l.self, l.top)
var je
typeof navigator < 'u' &&
	((je = navigator.userAgent) == null || je.toLowerCase().includes('electron'))
ee()
var Kn = Ln(Mn()),
	Hn = /(?:^|[-_/])(\w)/g
function zn(e, t) {
	return t ? t.toUpperCase() : ''
}
function jn(e) {
	return e && `${e}`.replace(Hn, zn)
}
function $n(e, t) {
	let n = e.replace(/^[a-z]:/i, '').replace(/\\/g, '/')
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t))
	const r = n.lastIndexOf('/'),
		u = n.substring(r + 1)
	{
		const o = u.lastIndexOf(t)
		return u.substring(0, o)
	}
}
var $e = (0, Kn.default)({ circles: !0 })
const Gn = { trailing: !0 }
function M(e, t = 25, n = {}) {
	if (((n = { ...Gn, ...n }), !Number.isFinite(t)))
		throw new TypeError('Expected `wait` to be a finite number')
	let r,
		u,
		o = [],
		s,
		a
	const p = (h, A) => (
		(s = Yn(e, h, A)),
		s.finally(() => {
			if (((s = null), n.trailing && a && !u)) {
				const d = p(h, a)
				return (a = null), d
			}
		}),
		s
	)
	return function (...h) {
		return s
			? (n.trailing && (a = h), s)
			: new Promise((A) => {
					const d = !u && n.leading
					clearTimeout(u),
						(u = setTimeout(() => {
							u = null
							const m = n.leading ? r : p(this, h)
							for (const c of o) c(m)
							o = []
						}, t)),
						d ? ((r = p(this, h)), A(r)) : o.push(A)
			  })
	}
}
async function Yn(e, t, n) {
	return await e.apply(t, n)
}
function Ae(e, t = {}, n) {
	for (const r in e) {
		const u = e[r],
			o = n ? `${n}:${r}` : r
		typeof u == 'object' && u !== null ? Ae(u, t, o) : typeof u == 'function' && (t[o] = u)
	}
	return t
}
const Wn = { run: (e) => e() },
	qn = () => Wn,
	Xt = typeof console.createTask < 'u' ? console.createTask : qn
function Zn(e, t) {
	const n = t.shift(),
		r = Xt(n)
	return e.reduce((u, o) => u.then(() => r.run(() => o(...t))), Promise.resolve())
}
function Xn(e, t) {
	const n = t.shift(),
		r = Xt(n)
	return Promise.all(e.map((u) => r.run(() => u(...t))))
}
function he(e, t) {
	for (const n of [...e]) n(t)
}
class Jn {
	constructor() {
		;(this._hooks = {}),
			(this._before = void 0),
			(this._after = void 0),
			(this._deprecatedMessages = void 0),
			(this._deprecatedHooks = {}),
			(this.hook = this.hook.bind(this)),
			(this.callHook = this.callHook.bind(this)),
			(this.callHookWith = this.callHookWith.bind(this))
	}
	hook(t, n, r = {}) {
		if (!t || typeof n != 'function') return () => {}
		const u = t
		let o
		for (; this._deprecatedHooks[t]; ) (o = this._deprecatedHooks[t]), (t = o.to)
		if (o && !r.allowDeprecated) {
			let s = o.message
			s || (s = `${u} hook has been deprecated` + (o.to ? `, please use ${o.to}` : '')),
				this._deprecatedMessages || (this._deprecatedMessages = new Set()),
				this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s))
		}
		if (!n.name)
			try {
				Object.defineProperty(n, 'name', {
					get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
					configurable: !0,
				})
			} catch {}
		return (
			(this._hooks[t] = this._hooks[t] || []),
			this._hooks[t].push(n),
			() => {
				n && (this.removeHook(t, n), (n = void 0))
			}
		)
	}
	hookOnce(t, n) {
		let r,
			u = (...o) => (typeof r == 'function' && r(), (r = void 0), (u = void 0), n(...o))
		return (r = this.hook(t, u)), r
	}
	removeHook(t, n) {
		if (this._hooks[t]) {
			const r = this._hooks[t].indexOf(n)
			r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
		}
	}
	deprecateHook(t, n) {
		this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n
		const r = this._hooks[t] || []
		delete this._hooks[t]
		for (const u of r) this.hook(t, u)
	}
	deprecateHooks(t) {
		Object.assign(this._deprecatedHooks, t)
		for (const n in t) this.deprecateHook(n, t[n])
	}
	addHooks(t) {
		const n = Ae(t),
			r = Object.keys(n).map((u) => this.hook(u, n[u]))
		return () => {
			for (const u of r.splice(0, r.length)) u()
		}
	}
	removeHooks(t) {
		const n = Ae(t)
		for (const r in n) this.removeHook(r, n[r])
	}
	removeAllHooks() {
		for (const t in this._hooks) delete this._hooks[t]
	}
	callHook(t, ...n) {
		return n.unshift(t), this.callHookWith(Zn, t, ...n)
	}
	callHookParallel(t, ...n) {
		return n.unshift(t), this.callHookWith(Xn, t, ...n)
	}
	callHookWith(t, n, ...r) {
		const u = this._before || this._after ? { name: n, args: r, context: {} } : void 0
		this._before && he(this._before, u)
		const o = t(n in this._hooks ? [...this._hooks[n]] : [], r)
		return o instanceof Promise
			? o.finally(() => {
					this._after && u && he(this._after, u)
			  })
			: (this._after && u && he(this._after, u), o)
	}
	beforeEach(t) {
		return (
			(this._before = this._before || []),
			this._before.push(t),
			() => {
				if (this._before !== void 0) {
					const n = this._before.indexOf(t)
					n !== -1 && this._before.splice(n, 1)
				}
			}
		)
	}
	afterEach(t) {
		return (
			(this._after = this._after || []),
			this._after.push(t),
			() => {
				if (this._after !== void 0) {
					const n = this._after.indexOf(t)
					n !== -1 && this._after.splice(n, 1)
				}
			}
		)
	}
}
function Jt() {
	return new Jn()
}
var Qn = Object.create,
	Qt = Object.defineProperty,
	er = Object.getOwnPropertyDescriptor,
	Re = Object.getOwnPropertyNames,
	tr = Object.getPrototypeOf,
	nr = Object.prototype.hasOwnProperty,
	rr = (e, t) =>
		function () {
			return e && (t = (0, e[Re(e)[0]])((e = 0))), t
		},
	en = (e, t) =>
		function () {
			return t || (0, e[Re(e)[0]])((t = { exports: {} }).exports, t), t.exports
		},
	ur = (e, t, n, r) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let u of Re(t))
				!nr.call(e, u) &&
					u !== n &&
					Qt(e, u, { get: () => t[u], enumerable: !(r = er(t, u)) || r.enumerable })
		return e
	},
	or = (e, t, n) => (
		(n = e != null ? Qn(tr(e)) : {}), ur(Qt(n, 'default', { value: e, enumerable: !0 }), e)
	),
	i = rr({
		'../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.0_@types+node@22.10.1__@swc+core@1.5.29_jiti@2.0.0_p_swvvp2d4pgn6xuiiec4l4x2i7a/node_modules/tsup/blog/assets/esm_shims.js'() {},
	}),
	sr = en({
		'../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js'(
			e,
			t
		) {
			i(),
				(function (n) {
					var r = {
							À: 'A',
							Á: 'A',
							Â: 'A',
							Ã: 'A',
							Ä: 'Ae',
							Å: 'A',
							Æ: 'AE',
							Ç: 'C',
							È: 'E',
							É: 'E',
							Ê: 'E',
							Ë: 'E',
							Ì: 'I',
							Í: 'I',
							Î: 'I',
							Ï: 'I',
							Ð: 'D',
							Ñ: 'N',
							Ò: 'O',
							Ó: 'O',
							Ô: 'O',
							Õ: 'O',
							Ö: 'Oe',
							Ő: 'O',
							Ø: 'O',
							Ù: 'U',
							Ú: 'U',
							Û: 'U',
							Ü: 'Ue',
							Ű: 'U',
							Ý: 'Y',
							Þ: 'TH',
							ß: 'ss',
							à: 'a',
							á: 'a',
							â: 'a',
							ã: 'a',
							ä: 'ae',
							å: 'a',
							æ: 'ae',
							ç: 'c',
							è: 'e',
							é: 'e',
							ê: 'e',
							ë: 'e',
							ì: 'i',
							í: 'i',
							î: 'i',
							ï: 'i',
							ð: 'd',
							ñ: 'n',
							ò: 'o',
							ó: 'o',
							ô: 'o',
							õ: 'o',
							ö: 'oe',
							ő: 'o',
							ø: 'o',
							ù: 'u',
							ú: 'u',
							û: 'u',
							ü: 'ue',
							ű: 'u',
							ý: 'y',
							þ: 'th',
							ÿ: 'y',
							ẞ: 'SS',
							ا: 'a',
							أ: 'a',
							إ: 'i',
							آ: 'aa',
							ؤ: 'u',
							ئ: 'e',
							ء: 'a',
							ب: 'b',
							ت: 't',
							ث: 'th',
							ج: 'j',
							ح: 'h',
							خ: 'kh',
							د: 'd',
							ذ: 'th',
							ر: 'r',
							ز: 'z',
							س: 's',
							ش: 'sh',
							ص: 's',
							ض: 'dh',
							ط: 't',
							ظ: 'z',
							ع: 'a',
							غ: 'gh',
							ف: 'f',
							ق: 'q',
							ك: 'k',
							ل: 'l',
							م: 'm',
							ن: 'n',
							ه: 'h',
							و: 'w',
							ي: 'y',
							ى: 'a',
							ة: 'h',
							ﻻ: 'la',
							ﻷ: 'laa',
							ﻹ: 'lai',
							ﻵ: 'laa',
							گ: 'g',
							چ: 'ch',
							پ: 'p',
							ژ: 'zh',
							ک: 'k',
							ی: 'y',
							'َ': 'a',
							'ً': 'an',
							'ِ': 'e',
							'ٍ': 'en',
							'ُ': 'u',
							'ٌ': 'on',
							'ْ': '',
							'٠': '0',
							'١': '1',
							'٢': '2',
							'٣': '3',
							'٤': '4',
							'٥': '5',
							'٦': '6',
							'٧': '7',
							'٨': '8',
							'٩': '9',
							'۰': '0',
							'۱': '1',
							'۲': '2',
							'۳': '3',
							'۴': '4',
							'۵': '5',
							'۶': '6',
							'۷': '7',
							'۸': '8',
							'۹': '9',
							က: 'k',
							ခ: 'kh',
							ဂ: 'g',
							ဃ: 'ga',
							င: 'ng',
							စ: 's',
							ဆ: 'sa',
							ဇ: 'z',
							စျ: 'za',
							ည: 'ny',
							ဋ: 't',
							ဌ: 'ta',
							ဍ: 'd',
							ဎ: 'da',
							ဏ: 'na',
							တ: 't',
							ထ: 'ta',
							ဒ: 'd',
							ဓ: 'da',
							န: 'n',
							ပ: 'p',
							ဖ: 'pa',
							ဗ: 'b',
							ဘ: 'ba',
							မ: 'm',
							ယ: 'y',
							ရ: 'ya',
							လ: 'l',
							ဝ: 'w',
							သ: 'th',
							ဟ: 'h',
							ဠ: 'la',
							အ: 'a',
							'ြ': 'y',
							'ျ': 'ya',
							'ွ': 'w',
							'ြွ': 'yw',
							'ျွ': 'ywa',
							'ှ': 'h',
							ဧ: 'e',
							'၏': '-e',
							ဣ: 'i',
							ဤ: '-i',
							ဉ: 'u',
							ဦ: '-u',
							ဩ: 'aw',
							သြော: 'aw',
							ဪ: 'aw',
							'၀': '0',
							'၁': '1',
							'၂': '2',
							'၃': '3',
							'၄': '4',
							'၅': '5',
							'၆': '6',
							'၇': '7',
							'၈': '8',
							'၉': '9',
							'္': '',
							'့': '',
							'း': '',
							č: 'c',
							ď: 'd',
							ě: 'e',
							ň: 'n',
							ř: 'r',
							š: 's',
							ť: 't',
							ů: 'u',
							ž: 'z',
							Č: 'C',
							Ď: 'D',
							Ě: 'E',
							Ň: 'N',
							Ř: 'R',
							Š: 'S',
							Ť: 'T',
							Ů: 'U',
							Ž: 'Z',
							ހ: 'h',
							ށ: 'sh',
							ނ: 'n',
							ރ: 'r',
							ބ: 'b',
							ޅ: 'lh',
							ކ: 'k',
							އ: 'a',
							ވ: 'v',
							މ: 'm',
							ފ: 'f',
							ދ: 'dh',
							ތ: 'th',
							ލ: 'l',
							ގ: 'g',
							ޏ: 'gn',
							ސ: 's',
							ޑ: 'd',
							ޒ: 'z',
							ޓ: 't',
							ޔ: 'y',
							ޕ: 'p',
							ޖ: 'j',
							ޗ: 'ch',
							ޘ: 'tt',
							ޙ: 'hh',
							ޚ: 'kh',
							ޛ: 'th',
							ޜ: 'z',
							ޝ: 'sh',
							ޞ: 's',
							ޟ: 'd',
							ޠ: 't',
							ޡ: 'z',
							ޢ: 'a',
							ޣ: 'gh',
							ޤ: 'q',
							ޥ: 'w',
							'ަ': 'a',
							'ާ': 'aa',
							'ި': 'i',
							'ީ': 'ee',
							'ު': 'u',
							'ޫ': 'oo',
							'ެ': 'e',
							'ޭ': 'ey',
							'ޮ': 'o',
							'ޯ': 'oa',
							'ް': '',
							ა: 'a',
							ბ: 'b',
							გ: 'g',
							დ: 'd',
							ე: 'e',
							ვ: 'v',
							ზ: 'z',
							თ: 't',
							ი: 'i',
							კ: 'k',
							ლ: 'l',
							მ: 'm',
							ნ: 'n',
							ო: 'o',
							პ: 'p',
							ჟ: 'zh',
							რ: 'r',
							ს: 's',
							ტ: 't',
							უ: 'u',
							ფ: 'p',
							ქ: 'k',
							ღ: 'gh',
							ყ: 'q',
							შ: 'sh',
							ჩ: 'ch',
							ც: 'ts',
							ძ: 'dz',
							წ: 'ts',
							ჭ: 'ch',
							ხ: 'kh',
							ჯ: 'j',
							ჰ: 'h',
							α: 'a',
							β: 'v',
							γ: 'g',
							δ: 'd',
							ε: 'e',
							ζ: 'z',
							η: 'i',
							θ: 'th',
							ι: 'i',
							κ: 'k',
							λ: 'l',
							μ: 'm',
							ν: 'n',
							ξ: 'ks',
							ο: 'o',
							π: 'p',
							ρ: 'r',
							σ: 's',
							τ: 't',
							υ: 'y',
							φ: 'f',
							χ: 'x',
							ψ: 'ps',
							ω: 'o',
							ά: 'a',
							έ: 'e',
							ί: 'i',
							ό: 'o',
							ύ: 'y',
							ή: 'i',
							ώ: 'o',
							ς: 's',
							ϊ: 'i',
							ΰ: 'y',
							ϋ: 'y',
							ΐ: 'i',
							Α: 'A',
							Β: 'B',
							Γ: 'G',
							Δ: 'D',
							Ε: 'E',
							Ζ: 'Z',
							Η: 'I',
							Θ: 'TH',
							Ι: 'I',
							Κ: 'K',
							Λ: 'L',
							Μ: 'M',
							Ν: 'N',
							Ξ: 'KS',
							Ο: 'O',
							Π: 'P',
							Ρ: 'R',
							Σ: 'S',
							Τ: 'T',
							Υ: 'Y',
							Φ: 'F',
							Χ: 'X',
							Ψ: 'PS',
							Ω: 'O',
							Ά: 'A',
							Έ: 'E',
							Ί: 'I',
							Ό: 'O',
							Ύ: 'Y',
							Ή: 'I',
							Ώ: 'O',
							Ϊ: 'I',
							Ϋ: 'Y',
							ā: 'a',
							ē: 'e',
							ģ: 'g',
							ī: 'i',
							ķ: 'k',
							ļ: 'l',
							ņ: 'n',
							ū: 'u',
							Ā: 'A',
							Ē: 'E',
							Ģ: 'G',
							Ī: 'I',
							Ķ: 'k',
							Ļ: 'L',
							Ņ: 'N',
							Ū: 'U',
							Ќ: 'Kj',
							ќ: 'kj',
							Љ: 'Lj',
							љ: 'lj',
							Њ: 'Nj',
							њ: 'nj',
							Тс: 'Ts',
							тс: 'ts',
							ą: 'a',
							ć: 'c',
							ę: 'e',
							ł: 'l',
							ń: 'n',
							ś: 's',
							ź: 'z',
							ż: 'z',
							Ą: 'A',
							Ć: 'C',
							Ę: 'E',
							Ł: 'L',
							Ń: 'N',
							Ś: 'S',
							Ź: 'Z',
							Ż: 'Z',
							Є: 'Ye',
							І: 'I',
							Ї: 'Yi',
							Ґ: 'G',
							є: 'ye',
							і: 'i',
							ї: 'yi',
							ґ: 'g',
							ă: 'a',
							Ă: 'A',
							ș: 's',
							Ș: 'S',
							ț: 't',
							Ț: 'T',
							ţ: 't',
							Ţ: 'T',
							а: 'a',
							б: 'b',
							в: 'v',
							г: 'g',
							д: 'd',
							е: 'e',
							ё: 'yo',
							ж: 'zh',
							з: 'z',
							и: 'i',
							й: 'i',
							к: 'k',
							л: 'l',
							м: 'm',
							н: 'n',
							о: 'o',
							п: 'p',
							р: 'r',
							с: 's',
							т: 't',
							у: 'u',
							ф: 'f',
							х: 'kh',
							ц: 'c',
							ч: 'ch',
							ш: 'sh',
							щ: 'sh',
							ъ: '',
							ы: 'y',
							ь: '',
							э: 'e',
							ю: 'yu',
							я: 'ya',
							А: 'A',
							Б: 'B',
							В: 'V',
							Г: 'G',
							Д: 'D',
							Е: 'E',
							Ё: 'Yo',
							Ж: 'Zh',
							З: 'Z',
							И: 'I',
							Й: 'I',
							К: 'K',
							Л: 'L',
							М: 'M',
							Н: 'N',
							О: 'O',
							П: 'P',
							Р: 'R',
							С: 'S',
							Т: 'T',
							У: 'U',
							Ф: 'F',
							Х: 'Kh',
							Ц: 'C',
							Ч: 'Ch',
							Ш: 'Sh',
							Щ: 'Sh',
							Ъ: '',
							Ы: 'Y',
							Ь: '',
							Э: 'E',
							Ю: 'Yu',
							Я: 'Ya',
							ђ: 'dj',
							ј: 'j',
							ћ: 'c',
							џ: 'dz',
							Ђ: 'Dj',
							Ј: 'j',
							Ћ: 'C',
							Џ: 'Dz',
							ľ: 'l',
							ĺ: 'l',
							ŕ: 'r',
							Ľ: 'L',
							Ĺ: 'L',
							Ŕ: 'R',
							ş: 's',
							Ş: 'S',
							ı: 'i',
							İ: 'I',
							ğ: 'g',
							Ğ: 'G',
							ả: 'a',
							Ả: 'A',
							ẳ: 'a',
							Ẳ: 'A',
							ẩ: 'a',
							Ẩ: 'A',
							đ: 'd',
							Đ: 'D',
							ẹ: 'e',
							Ẹ: 'E',
							ẽ: 'e',
							Ẽ: 'E',
							ẻ: 'e',
							Ẻ: 'E',
							ế: 'e',
							Ế: 'E',
							ề: 'e',
							Ề: 'E',
							ệ: 'e',
							Ệ: 'E',
							ễ: 'e',
							Ễ: 'E',
							ể: 'e',
							Ể: 'E',
							ỏ: 'o',
							ọ: 'o',
							Ọ: 'o',
							ố: 'o',
							Ố: 'O',
							ồ: 'o',
							Ồ: 'O',
							ổ: 'o',
							Ổ: 'O',
							ộ: 'o',
							Ộ: 'O',
							ỗ: 'o',
							Ỗ: 'O',
							ơ: 'o',
							Ơ: 'O',
							ớ: 'o',
							Ớ: 'O',
							ờ: 'o',
							Ờ: 'O',
							ợ: 'o',
							Ợ: 'O',
							ỡ: 'o',
							Ỡ: 'O',
							Ở: 'o',
							ở: 'o',
							ị: 'i',
							Ị: 'I',
							ĩ: 'i',
							Ĩ: 'I',
							ỉ: 'i',
							Ỉ: 'i',
							ủ: 'u',
							Ủ: 'U',
							ụ: 'u',
							Ụ: 'U',
							ũ: 'u',
							Ũ: 'U',
							ư: 'u',
							Ư: 'U',
							ứ: 'u',
							Ứ: 'U',
							ừ: 'u',
							Ừ: 'U',
							ự: 'u',
							Ự: 'U',
							ữ: 'u',
							Ữ: 'U',
							ử: 'u',
							Ử: 'ư',
							ỷ: 'y',
							Ỷ: 'y',
							ỳ: 'y',
							Ỳ: 'Y',
							ỵ: 'y',
							Ỵ: 'Y',
							ỹ: 'y',
							Ỹ: 'Y',
							ạ: 'a',
							Ạ: 'A',
							ấ: 'a',
							Ấ: 'A',
							ầ: 'a',
							Ầ: 'A',
							ậ: 'a',
							Ậ: 'A',
							ẫ: 'a',
							Ẫ: 'A',
							ắ: 'a',
							Ắ: 'A',
							ằ: 'a',
							Ằ: 'A',
							ặ: 'a',
							Ặ: 'A',
							ẵ: 'a',
							Ẵ: 'A',
							'⓪': '0',
							'①': '1',
							'②': '2',
							'③': '3',
							'④': '4',
							'⑤': '5',
							'⑥': '6',
							'⑦': '7',
							'⑧': '8',
							'⑨': '9',
							'⑩': '10',
							'⑪': '11',
							'⑫': '12',
							'⑬': '13',
							'⑭': '14',
							'⑮': '15',
							'⑯': '16',
							'⑰': '17',
							'⑱': '18',
							'⑲': '18',
							'⑳': '18',
							'⓵': '1',
							'⓶': '2',
							'⓷': '3',
							'⓸': '4',
							'⓹': '5',
							'⓺': '6',
							'⓻': '7',
							'⓼': '8',
							'⓽': '9',
							'⓾': '10',
							'⓿': '0',
							'⓫': '11',
							'⓬': '12',
							'⓭': '13',
							'⓮': '14',
							'⓯': '15',
							'⓰': '16',
							'⓱': '17',
							'⓲': '18',
							'⓳': '19',
							'⓴': '20',
							'Ⓐ': 'A',
							'Ⓑ': 'B',
							'Ⓒ': 'C',
							'Ⓓ': 'D',
							'Ⓔ': 'E',
							'Ⓕ': 'F',
							'Ⓖ': 'G',
							'Ⓗ': 'H',
							'Ⓘ': 'I',
							'Ⓙ': 'J',
							'Ⓚ': 'K',
							'Ⓛ': 'L',
							'Ⓜ': 'M',
							'Ⓝ': 'N',
							'Ⓞ': 'O',
							'Ⓟ': 'P',
							'Ⓠ': 'Q',
							'Ⓡ': 'R',
							'Ⓢ': 'S',
							'Ⓣ': 'T',
							'Ⓤ': 'U',
							'Ⓥ': 'V',
							'Ⓦ': 'W',
							'Ⓧ': 'X',
							'Ⓨ': 'Y',
							'Ⓩ': 'Z',
							'ⓐ': 'a',
							'ⓑ': 'b',
							'ⓒ': 'c',
							'ⓓ': 'd',
							'ⓔ': 'e',
							'ⓕ': 'f',
							'ⓖ': 'g',
							'ⓗ': 'h',
							'ⓘ': 'i',
							'ⓙ': 'j',
							'ⓚ': 'k',
							'ⓛ': 'l',
							'ⓜ': 'm',
							'ⓝ': 'n',
							'ⓞ': 'o',
							'ⓟ': 'p',
							'ⓠ': 'q',
							'ⓡ': 'r',
							'ⓢ': 's',
							'ⓣ': 't',
							'ⓤ': 'u',
							'ⓦ': 'v',
							'ⓥ': 'w',
							'ⓧ': 'x',
							'ⓨ': 'y',
							'ⓩ': 'z',
							'“': '"',
							'”': '"',
							'‘': "'",
							'’': "'",
							'∂': 'd',
							ƒ: 'f',
							'™': '(TM)',
							'©': '(C)',
							œ: 'oe',
							Œ: 'OE',
							'®': '(R)',
							'†': '+',
							'℠': '(SM)',
							'…': '...',
							'˚': 'o',
							º: 'o',
							ª: 'a',
							'•': '*',
							'၊': ',',
							'။': '.',
							$: 'USD',
							'€': 'EUR',
							'₢': 'BRN',
							'₣': 'FRF',
							'£': 'GBP',
							'₤': 'ITL',
							'₦': 'NGN',
							'₧': 'ESP',
							'₩': 'KRW',
							'₪': 'ILS',
							'₫': 'VND',
							'₭': 'LAK',
							'₮': 'MNT',
							'₯': 'GRD',
							'₱': 'ARS',
							'₲': 'PYG',
							'₳': 'ARA',
							'₴': 'UAH',
							'₵': 'GHS',
							'¢': 'cent',
							'¥': 'CNY',
							元: 'CNY',
							円: 'YEN',
							'﷼': 'IRR',
							'₠': 'EWE',
							'฿': 'THB',
							'₨': 'INR',
							'₹': 'INR',
							'₰': 'PF',
							'₺': 'TRY',
							'؋': 'AFN',
							'₼': 'AZN',
							лв: 'BGN',
							'៛': 'KHR',
							'₡': 'CRC',
							'₸': 'KZT',
							ден: 'MKD',
							zł: 'PLN',
							'₽': 'RUB',
							'₾': 'GEL',
						},
						u = ['်', 'ް'],
						o = {
							'ာ': 'a',
							'ါ': 'a',
							'ေ': 'e',
							'ဲ': 'e',
							'ိ': 'i',
							'ီ': 'i',
							'ို': 'o',
							'ု': 'u',
							'ူ': 'u',
							'ေါင်': 'aung',
							'ော': 'aw',
							'ော်': 'aw',
							'ေါ': 'aw',
							'ေါ်': 'aw',
							'်': '်',
							က်: 'et',
							'ိုက်': 'aik',
							'ောက်': 'auk',
							င်: 'in',
							'ိုင်': 'aing',
							'ောင်': 'aung',
							စ်: 'it',
							ည်: 'i',
							တ်: 'at',
							'ိတ်': 'eik',
							'ုတ်': 'ok',
							'ွတ်': 'ut',
							'ေတ်': 'it',
							ဒ်: 'd',
							'ိုဒ်': 'ok',
							'ုဒ်': 'ait',
							န်: 'an',
							'ာန်': 'an',
							'ိန်': 'ein',
							'ုန်': 'on',
							'ွန်': 'un',
							ပ်: 'at',
							'ိပ်': 'eik',
							'ုပ်': 'ok',
							'ွပ်': 'ut',
							န်ုပ်: 'nub',
							မ်: 'an',
							'ိမ်': 'ein',
							'ုမ်': 'on',
							'ွမ်': 'un',
							ယ်: 'e',
							'ိုလ်': 'ol',
							ဉ်: 'in',
							'ံ': 'an',
							'ိံ': 'ein',
							'ုံ': 'on',
							'ައް': 'ah',
							'ަށް': 'ah',
						},
						s = {
							en: {},
							az: {
								ç: 'c',
								ə: 'e',
								ğ: 'g',
								ı: 'i',
								ö: 'o',
								ş: 's',
								ü: 'u',
								Ç: 'C',
								Ə: 'E',
								Ğ: 'G',
								İ: 'I',
								Ö: 'O',
								Ş: 'S',
								Ü: 'U',
							},
							cs: {
								č: 'c',
								ď: 'd',
								ě: 'e',
								ň: 'n',
								ř: 'r',
								š: 's',
								ť: 't',
								ů: 'u',
								ž: 'z',
								Č: 'C',
								Ď: 'D',
								Ě: 'E',
								Ň: 'N',
								Ř: 'R',
								Š: 'S',
								Ť: 'T',
								Ů: 'U',
								Ž: 'Z',
							},
							fi: { ä: 'a', Ä: 'A', ö: 'o', Ö: 'O' },
							hu: { ä: 'a', Ä: 'A', ö: 'o', Ö: 'O', ü: 'u', Ü: 'U', ű: 'u', Ű: 'U' },
							lt: {
								ą: 'a',
								č: 'c',
								ę: 'e',
								ė: 'e',
								į: 'i',
								š: 's',
								ų: 'u',
								ū: 'u',
								ž: 'z',
								Ą: 'A',
								Č: 'C',
								Ę: 'E',
								Ė: 'E',
								Į: 'I',
								Š: 'S',
								Ų: 'U',
								Ū: 'U',
							},
							lv: {
								ā: 'a',
								č: 'c',
								ē: 'e',
								ģ: 'g',
								ī: 'i',
								ķ: 'k',
								ļ: 'l',
								ņ: 'n',
								š: 's',
								ū: 'u',
								ž: 'z',
								Ā: 'A',
								Č: 'C',
								Ē: 'E',
								Ģ: 'G',
								Ī: 'i',
								Ķ: 'k',
								Ļ: 'L',
								Ņ: 'N',
								Š: 'S',
								Ū: 'u',
								Ž: 'Z',
							},
							pl: {
								ą: 'a',
								ć: 'c',
								ę: 'e',
								ł: 'l',
								ń: 'n',
								ó: 'o',
								ś: 's',
								ź: 'z',
								ż: 'z',
								Ą: 'A',
								Ć: 'C',
								Ę: 'e',
								Ł: 'L',
								Ń: 'N',
								Ó: 'O',
								Ś: 'S',
								Ź: 'Z',
								Ż: 'Z',
							},
							sv: { ä: 'a', Ä: 'A', ö: 'o', Ö: 'O' },
							sk: { ä: 'a', Ä: 'A' },
							sr: { љ: 'lj', њ: 'nj', Љ: 'Lj', Њ: 'Nj', đ: 'dj', Đ: 'Dj' },
							tr: { Ü: 'U', Ö: 'O', ü: 'u', ö: 'o' },
						},
						a = {
							ar: {
								'∆': 'delta',
								'∞': 'la-nihaya',
								'♥': 'hob',
								'&': 'wa',
								'|': 'aw',
								'<': 'aqal-men',
								'>': 'akbar-men',
								'∑': 'majmou',
								'¤': 'omla',
							},
							az: {},
							ca: {
								'∆': 'delta',
								'∞': 'infinit',
								'♥': 'amor',
								'&': 'i',
								'|': 'o',
								'<': 'menys que',
								'>': 'mes que',
								'∑': 'suma dels',
								'¤': 'moneda',
							},
							cs: {
								'∆': 'delta',
								'∞': 'nekonecno',
								'♥': 'laska',
								'&': 'a',
								'|': 'nebo',
								'<': 'mensi nez',
								'>': 'vetsi nez',
								'∑': 'soucet',
								'¤': 'mena',
							},
							de: {
								'∆': 'delta',
								'∞': 'unendlich',
								'♥': 'Liebe',
								'&': 'und',
								'|': 'oder',
								'<': 'kleiner als',
								'>': 'groesser als',
								'∑': 'Summe von',
								'¤': 'Waehrung',
							},
							dv: {
								'∆': 'delta',
								'∞': 'kolunulaa',
								'♥': 'loabi',
								'&': 'aai',
								'|': 'noonee',
								'<': 'ah vure kuda',
								'>': 'ah vure bodu',
								'∑': 'jumula',
								'¤': 'faisaa',
							},
							en: {
								'∆': 'delta',
								'∞': 'infinity',
								'♥': 'love',
								'&': 'and',
								'|': 'or',
								'<': 'less than',
								'>': 'greater than',
								'∑': 'sum',
								'¤': 'currency',
							},
							es: {
								'∆': 'delta',
								'∞': 'infinito',
								'♥': 'amor',
								'&': 'y',
								'|': 'u',
								'<': 'menos que',
								'>': 'mas que',
								'∑': 'suma de los',
								'¤': 'moneda',
							},
							fa: {
								'∆': 'delta',
								'∞': 'bi-nahayat',
								'♥': 'eshgh',
								'&': 'va',
								'|': 'ya',
								'<': 'kamtar-az',
								'>': 'bishtar-az',
								'∑': 'majmooe',
								'¤': 'vahed',
							},
							fi: {
								'∆': 'delta',
								'∞': 'aarettomyys',
								'♥': 'rakkaus',
								'&': 'ja',
								'|': 'tai',
								'<': 'pienempi kuin',
								'>': 'suurempi kuin',
								'∑': 'summa',
								'¤': 'valuutta',
							},
							fr: {
								'∆': 'delta',
								'∞': 'infiniment',
								'♥': 'Amour',
								'&': 'et',
								'|': 'ou',
								'<': 'moins que',
								'>': 'superieure a',
								'∑': 'somme des',
								'¤': 'monnaie',
							},
							ge: {
								'∆': 'delta',
								'∞': 'usasruloba',
								'♥': 'siqvaruli',
								'&': 'da',
								'|': 'an',
								'<': 'naklebi',
								'>': 'meti',
								'∑': 'jami',
								'¤': 'valuta',
							},
							gr: {},
							hu: {
								'∆': 'delta',
								'∞': 'vegtelen',
								'♥': 'szerelem',
								'&': 'es',
								'|': 'vagy',
								'<': 'kisebb mint',
								'>': 'nagyobb mint',
								'∑': 'szumma',
								'¤': 'penznem',
							},
							it: {
								'∆': 'delta',
								'∞': 'infinito',
								'♥': 'amore',
								'&': 'e',
								'|': 'o',
								'<': 'minore di',
								'>': 'maggiore di',
								'∑': 'somma',
								'¤': 'moneta',
							},
							lt: {
								'∆': 'delta',
								'∞': 'begalybe',
								'♥': 'meile',
								'&': 'ir',
								'|': 'ar',
								'<': 'maziau nei',
								'>': 'daugiau nei',
								'∑': 'suma',
								'¤': 'valiuta',
							},
							lv: {
								'∆': 'delta',
								'∞': 'bezgaliba',
								'♥': 'milestiba',
								'&': 'un',
								'|': 'vai',
								'<': 'mazak neka',
								'>': 'lielaks neka',
								'∑': 'summa',
								'¤': 'valuta',
							},
							my: {
								'∆': 'kwahkhyaet',
								'∞': 'asaonasme',
								'♥': 'akhyait',
								'&': 'nhin',
								'|': 'tho',
								'<': 'ngethaw',
								'>': 'kyithaw',
								'∑': 'paungld',
								'¤': 'ngwekye',
							},
							mk: {},
							nl: {
								'∆': 'delta',
								'∞': 'oneindig',
								'♥': 'liefde',
								'&': 'en',
								'|': 'of',
								'<': 'kleiner dan',
								'>': 'groter dan',
								'∑': 'som',
								'¤': 'valuta',
							},
							pl: {
								'∆': 'delta',
								'∞': 'nieskonczonosc',
								'♥': 'milosc',
								'&': 'i',
								'|': 'lub',
								'<': 'mniejsze niz',
								'>': 'wieksze niz',
								'∑': 'suma',
								'¤': 'waluta',
							},
							pt: {
								'∆': 'delta',
								'∞': 'infinito',
								'♥': 'amor',
								'&': 'e',
								'|': 'ou',
								'<': 'menor que',
								'>': 'maior que',
								'∑': 'soma',
								'¤': 'moeda',
							},
							ro: {
								'∆': 'delta',
								'∞': 'infinit',
								'♥': 'dragoste',
								'&': 'si',
								'|': 'sau',
								'<': 'mai mic ca',
								'>': 'mai mare ca',
								'∑': 'suma',
								'¤': 'valuta',
							},
							ru: {
								'∆': 'delta',
								'∞': 'beskonechno',
								'♥': 'lubov',
								'&': 'i',
								'|': 'ili',
								'<': 'menshe',
								'>': 'bolshe',
								'∑': 'summa',
								'¤': 'valjuta',
							},
							sk: {
								'∆': 'delta',
								'∞': 'nekonecno',
								'♥': 'laska',
								'&': 'a',
								'|': 'alebo',
								'<': 'menej ako',
								'>': 'viac ako',
								'∑': 'sucet',
								'¤': 'mena',
							},
							sr: {},
							tr: {
								'∆': 'delta',
								'∞': 'sonsuzluk',
								'♥': 'ask',
								'&': 've',
								'|': 'veya',
								'<': 'kucuktur',
								'>': 'buyuktur',
								'∑': 'toplam',
								'¤': 'para birimi',
							},
							uk: {
								'∆': 'delta',
								'∞': 'bezkinechnist',
								'♥': 'lubov',
								'&': 'i',
								'|': 'abo',
								'<': 'menshe',
								'>': 'bilshe',
								'∑': 'suma',
								'¤': 'valjuta',
							},
							vn: {
								'∆': 'delta',
								'∞': 'vo cuc',
								'♥': 'yeu',
								'&': 'va',
								'|': 'hoac',
								'<': 'nho hon',
								'>': 'lon hon',
								'∑': 'tong',
								'¤': 'tien te',
							},
						},
						p = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'].join(''),
						h = [';', '?', ':', '@', '&', '=', '+', '$', ','].join(''),
						A = ['.', '!', '~', '*', "'", '(', ')'].join(''),
						d = function (f, E) {
							var T = '-',
								y = '',
								k = '',
								fe = !0,
								w = {},
								Me,
								te,
								$,
								de,
								Ee,
								Ke,
								G,
								B,
								He,
								P,
								v,
								ne,
								b,
								U,
								V = ''
							if (typeof f != 'string') return ''
							if ((typeof E == 'string' && (T = E), (G = a.en), (B = s.en), typeof E == 'object')) {
								;(Me = E.maintainCase || !1),
									(w = E.custom && typeof E.custom == 'object' ? E.custom : w),
									($ = (+E.truncate > 1 && E.truncate) || !1),
									(de = E.uric || !1),
									(Ee = E.uricNoSlash || !1),
									(Ke = E.mark || !1),
									(fe = !(E.symbols === !1 || E.lang === !1)),
									(T = E.separator || T),
									de && (V += p),
									Ee && (V += h),
									Ke && (V += A),
									(G = E.lang && a[E.lang] && fe ? a[E.lang] : fe ? a.en : {}),
									(B =
										E.lang && s[E.lang] ? s[E.lang] : E.lang === !1 || E.lang === !0 ? {} : s.en),
									E.titleCase &&
									typeof E.titleCase.length == 'number' &&
									Array.prototype.toString.call(E.titleCase)
										? (E.titleCase.forEach(function (I) {
												w[I + ''] = I + ''
										  }),
										  (te = !0))
										: (te = !!E.titleCase),
									E.custom &&
										typeof E.custom.length == 'number' &&
										Array.prototype.toString.call(E.custom) &&
										E.custom.forEach(function (I) {
											w[I + ''] = I + ''
										}),
									Object.keys(w).forEach(function (I) {
										var Y
										I.length > 1
											? (Y = new RegExp('\\b' + c(I) + '\\b', 'gi'))
											: (Y = new RegExp(c(I), 'gi')),
											(f = f.replace(Y, w[I]))
									})
								for (v in w) V += v
							}
							for (
								V += T,
									V = c(V),
									f = f.replace(/(^\s+|\s+$)/g, ''),
									b = !1,
									U = !1,
									P = 0,
									ne = f.length;
								P < ne;
								P++
							)
								(v = f[P]),
									_(v, w)
										? (b = !1)
										: B[v]
										? ((v = b && B[v].match(/[A-Za-z0-9]/) ? ' ' + B[v] : B[v]), (b = !1))
										: v in r
										? (P + 1 < ne && u.indexOf(f[P + 1]) >= 0
												? ((k += v), (v = ''))
												: U === !0
												? ((v = o[k] + r[v]), (k = ''))
												: (v = b && r[v].match(/[A-Za-z0-9]/) ? ' ' + r[v] : r[v]),
										  (b = !1),
										  (U = !1))
										: v in o
										? ((k += v), (v = ''), P === ne - 1 && (v = o[k]), (U = !0))
										: G[v] && !(de && p.indexOf(v) !== -1) && !(Ee && h.indexOf(v) !== -1)
										? ((v = b || y.substr(-1).match(/[A-Za-z0-9]/) ? T + G[v] : G[v]),
										  (v += f[P + 1] !== void 0 && f[P + 1].match(/[A-Za-z0-9]/) ? T : ''),
										  (b = !0))
										: (U === !0
												? ((v = o[k] + v), (k = ''), (U = !1))
												: b &&
												  (/[A-Za-z0-9]/.test(v) || y.substr(-1).match(/A-Za-z0-9]/)) &&
												  (v = ' ' + v),
										  (b = !1)),
									(y += v.replace(new RegExp('[^\\w\\s' + V + '_-]', 'g'), T))
							return (
								te &&
									(y = y.replace(/(\w)(\S*)/g, function (I, Y, ze) {
										var pe = Y.toUpperCase() + (ze !== null ? ze : '')
										return Object.keys(w).indexOf(pe.toLowerCase()) < 0 ? pe : pe.toLowerCase()
									})),
								(y = y
									.replace(/\s+/g, T)
									.replace(new RegExp('\\' + T + '+', 'g'), T)
									.replace(new RegExp('(^\\' + T + '+|\\' + T + '+$)', 'g'), '')),
								$ &&
									y.length > $ &&
									((He = y.charAt($) === T),
									(y = y.slice(0, $)),
									He || (y = y.slice(0, y.lastIndexOf(T)))),
								!Me && !te && (y = y.toLowerCase()),
								y
							)
						},
						m = function (f) {
							return function (T) {
								return d(T, f)
							}
						},
						c = function (f) {
							return f.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&')
						},
						_ = function (g, f) {
							for (var E in f) if (f[E] === g) return !0
						}
					if (typeof t < 'u' && t.exports) (t.exports = d), (t.exports.createSlug = m)
					else if (typeof define < 'u' && define.amd)
						define([], function () {
							return d
						})
					else
						try {
							if (n.getSlug || n.createSlug)
								throw 'speakingurl: globals exists /(getSlug|createSlug)/'
							;(n.getSlug = d), (n.createSlug = m)
						} catch {}
				})(e)
		},
	}),
	ir = en({
		'../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js'(e, t) {
			i(), (t.exports = sr())
		},
	})
i()
i()
i()
i()
i()
i()
i()
i()
function ar(e) {
	var t
	const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name
	return n === 'index' && (t = e.__file) != null && t.endsWith('index.vue') ? '' : n
}
function lr(e) {
	const t = e.__file
	if (t) return jn($n(t, '.vue'))
}
function Ge(e, t) {
	return (e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t), t
}
function ae(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__
}
async function cr(e) {
	const { app: t, uid: n, instance: r } = e
	try {
		if (r.__VUE_DEVTOOLS_NEXT_UID__) return r.__VUE_DEVTOOLS_NEXT_UID__
		const u = await ae(t)
		if (!u) return null
		const o = u.rootInstance === r
		return `${u.id}:${o ? 'root' : n}`
	} catch {}
}
function tn(e) {
	var t, n
	const r = (t = e.subTree) == null ? void 0 : t.type,
		u = ae(e)
	return u ? ((n = u == null ? void 0 : u.types) == null ? void 0 : n.Fragment) === r : !1
}
function le(e) {
	var t, n, r
	const u = ar((e == null ? void 0 : e.type) || {})
	if (u) return u
	if ((e == null ? void 0 : e.root) === e) return 'Root'
	for (const s in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
		if (e.parent.type.components[s] === (e == null ? void 0 : e.type)) return Ge(e, s)
	for (const s in (r = e.appContext) == null ? void 0 : r.components)
		if (e.appContext.components[s] === (e == null ? void 0 : e.type)) return Ge(e, s)
	const o = lr((e == null ? void 0 : e.type) || {})
	return o || 'Anonymous Component'
}
function ye(e, t) {
	return (t = t || `${e.id}:root`), e.instanceMap.get(t) || e.instanceMap.get(':root')
}
function _r() {
	const e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left
		},
		get height() {
			return e.bottom - e.top
		},
	}
	return e
}
var re
function fr(e) {
	return re || (re = document.createRange()), re.selectNode(e), re.getBoundingClientRect()
}
function dr(e) {
	const t = _r()
	if (!e.children) return t
	for (let n = 0, r = e.children.length; n < r; n++) {
		const u = e.children[n]
		let o
		if (u.component) o = F(u.component)
		else if (u.el) {
			const s = u.el
			s.nodeType === 1 || s.getBoundingClientRect
				? (o = s.getBoundingClientRect())
				: s.nodeType === 3 && s.data.trim() && (o = fr(s))
		}
		o && Er(t, o)
	}
	return t
}
function Er(e, t) {
	return (
		(!e.top || t.top < e.top) && (e.top = t.top),
		(!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom),
		(!e.left || t.left < e.left) && (e.left = t.left),
		(!e.right || t.right > e.right) && (e.right = t.right),
		e
	)
}
var Ye = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }
function F(e) {
	const t = e.subTree.el
	return typeof window > 'u'
		? Ye
		: tn(e)
		? dr(e.subTree)
		: (t == null ? void 0 : t.nodeType) === 1
		? t == null
			? void 0
			: t.getBoundingClientRect()
		: e.subTree.component
		? F(e.subTree.component)
		: Ye
}
i()
function we(e) {
	return tn(e) ? pr(e.subTree) : e.subTree ? [e.subTree.el] : []
}
function pr(e) {
	if (!e.children) return []
	const t = []
	return (
		e.children.forEach((n) => {
			n.component ? t.push(...we(n.component)) : n != null && n.el && t.push(n.el)
		}),
		t
	)
}
var nn = '__vue-devtools-component-inspector__',
	rn = '__vue-devtools-component-inspector__card__',
	un = '__vue-devtools-component-inspector__name__',
	on = '__vue-devtools-component-inspector__indicator__',
	sn = {
		display: 'block',
		zIndex: 2147483640,
		position: 'fixed',
		backgroundColor: '#42b88325',
		border: '1px solid #42b88350',
		borderRadius: '5px',
		transition: 'all 0.1s ease-in',
		pointerEvents: 'none',
	},
	hr = {
		fontFamily: 'Arial, Helvetica, sans-serif',
		padding: '5px 8px',
		borderRadius: '4px',
		textAlign: 'left',
		position: 'absolute',
		left: 0,
		color: '#e9e9e9',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '24px',
		backgroundColor: '#42b883',
		boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
	},
	gr = {
		display: 'inline-block',
		fontWeight: 400,
		fontStyle: 'normal',
		fontSize: '12px',
		opacity: 0.7,
	}
function z() {
	return document.getElementById(nn)
}
function mr() {
	return document.getElementById(rn)
}
function vr() {
	return document.getElementById(on)
}
function Ar() {
	return document.getElementById(un)
}
function Pe(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`,
	}
}
function Ve(e) {
	var t
	const n = document.createElement('div')
	;(n.id = (t = e.elementId) != null ? t : nn),
		Object.assign(n.style, { ...sn, ...Pe(e.bounds), ...e.style })
	const r = document.createElement('span')
	;(r.id = rn), Object.assign(r.style, { ...hr, top: e.bounds.top < 35 ? 0 : '-35px' })
	const u = document.createElement('span')
	;(u.id = un), (u.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`)
	const o = document.createElement('i')
	return (
		(o.id = on),
		(o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${
			Math.round(e.bounds.height * 100) / 100
		}`),
		Object.assign(o.style, gr),
		r.appendChild(u),
		r.appendChild(o),
		n.appendChild(r),
		document.body.appendChild(n),
		n
	)
}
function xe(e) {
	const t = z(),
		n = mr(),
		r = Ar(),
		u = vr()
	t &&
		(Object.assign(t.style, { ...sn, ...Pe(e.bounds) }),
		Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : '-35px' }),
		(r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`),
		(u.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${
			Math.round(e.bounds.height * 100) / 100
		}`))
}
function yr(e) {
	const t = F(e)
	if (!t.width && !t.height) return
	const n = le(e)
	z() ? xe({ bounds: t, name: n }) : Ve({ bounds: t, name: n })
}
function an() {
	const e = z()
	e && (e.style.display = 'none')
}
var Oe = null
function Te(e) {
	const t = e.target
	if (t) {
		const n = t.__vueParentComponent
		if (n && ((Oe = n), n.vnode.el)) {
			const u = F(n),
				o = le(n)
			z() ? xe({ bounds: u, name: o }) : Ve({ bounds: u, name: o })
		}
	}
}
function Or(e, t) {
	var n
	if ((e.preventDefault(), e.stopPropagation(), Oe)) {
		const r = (n = D.value) == null ? void 0 : n.app
		cr({ app: r, uid: r.uid, instance: Oe }).then((u) => {
			t(u)
		})
	}
}
var ie = null
function Tr() {
	an(),
		window.removeEventListener('mouseover', Te),
		window.removeEventListener('click', ie, !0),
		(ie = null)
}
function Cr() {
	return (
		window.addEventListener('mouseover', Te),
		new Promise((e) => {
			function t(n) {
				n.preventDefault(),
					n.stopPropagation(),
					Or(n, (r) => {
						window.removeEventListener('click', t, !0),
							(ie = null),
							window.removeEventListener('mouseover', Te)
						const u = z()
						u && (u.style.display = 'none'), e(JSON.stringify({ id: r }))
					})
			}
			;(ie = t), window.addEventListener('click', t, !0)
		})
	)
}
function Dr(e) {
	const t = ye(D.value, e.id)
	if (t) {
		const [n] = we(t)
		if (typeof n.scrollIntoView == 'function') n.scrollIntoView({ behavior: 'smooth' })
		else {
			const r = F(t),
				u = document.createElement('div'),
				o = { ...Pe(r), position: 'absolute' }
			Object.assign(u.style, o),
				document.body.appendChild(u),
				u.scrollIntoView({ behavior: 'smooth' }),
				setTimeout(() => {
					document.body.removeChild(u)
				}, 2e3)
		}
		setTimeout(() => {
			const r = F(t)
			if (r.width || r.height) {
				const u = le(t),
					o = z()
				o ? xe({ ...e, name: u, bounds: r }) : Ve({ ...e, name: u, bounds: r }),
					setTimeout(() => {
						o && (o.style.display = 'none')
					}, 1500)
			}
		}, 1200)
	}
}
i()
var We, qe
;(qe = (We = l).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null ||
	(We.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0)
function Sr(e) {
	let t = 0
	const n = setInterval(() => {
		l.__VUE_INSPECTOR__ && (clearInterval(n), (t += 30), e()), t >= 5e3 && clearInterval(n)
	}, 30)
}
function Ir() {
	const e = l.__VUE_INSPECTOR__,
		t = e.openInEditor
	e.openInEditor = async (...n) => {
		e.disable(), t(...n)
	}
}
function kr() {
	return new Promise((e) => {
		function t() {
			Ir(), e(l.__VUE_INSPECTOR__)
		}
		l.__VUE_INSPECTOR__
			? t()
			: Sr(() => {
					t()
			  })
	})
}
i()
i()
function br(e) {
	return !!(e && e.__v_isReadonly)
}
function ln(e) {
	return br(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ge(e) {
	return !!(e && e.__v_isRef === !0)
}
function W(e) {
	const t = e && e.__v_raw
	return t ? W(t) : e
}
var Rr = class {
		constructor() {
			this.refEditor = new wr()
		}
		set(e, t, n, r) {
			const u = Array.isArray(t) ? t : t.split('.')
			for (; u.length > 1; ) {
				const a = u.shift()
				e instanceof Map && (e = e.get(a)),
					e instanceof Set ? (e = Array.from(e.values())[a]) : (e = e[a]),
					this.refEditor.isRef(e) && (e = this.refEditor.get(e))
			}
			const o = u[0],
				s = this.refEditor.get(e)[o]
			r ? r(e, o, n) : this.refEditor.isRef(s) ? this.refEditor.set(s, n) : (e[o] = n)
		}
		get(e, t) {
			const n = Array.isArray(t) ? t : t.split('.')
			for (let r = 0; r < n.length; r++)
				if (
					(e instanceof Map ? (e = e.get(n[r])) : (e = e[n[r]]),
					this.refEditor.isRef(e) && (e = this.refEditor.get(e)),
					!e)
				)
					return
			return e
		}
		has(e, t, n = !1) {
			if (typeof e > 'u') return !1
			const r = Array.isArray(t) ? t.slice() : t.split('.'),
				u = n ? 2 : 1
			for (; e && r.length > u; ) {
				const o = r.shift()
				;(e = e[o]), this.refEditor.isRef(e) && (e = this.refEditor.get(e))
			}
			return e != null && Object.prototype.hasOwnProperty.call(e, r[0])
		}
		createDefaultSetCallback(e) {
			return (t, n, r) => {
				if (
					((e.remove || e.newKey) &&
						(Array.isArray(t)
							? t.splice(n, 1)
							: W(t) instanceof Map
							? t.delete(n)
							: W(t) instanceof Set
							? t.delete(Array.from(t.values())[n])
							: Reflect.deleteProperty(t, n)),
					!e.remove)
				) {
					const u = t[e.newKey || n]
					this.refEditor.isRef(u)
						? this.refEditor.set(u, r)
						: W(t) instanceof Map
						? t.set(e.newKey || n, r)
						: W(t) instanceof Set
						? t.add(r)
						: (t[e.newKey || n] = r)
				}
			}
		}
	},
	wr = class {
		set(e, t) {
			if (ge(e)) e.value = t
			else {
				if (e instanceof Set && Array.isArray(t)) {
					e.clear(), t.forEach((u) => e.add(u))
					return
				}
				const n = Object.keys(t)
				if (e instanceof Map) {
					const u = new Set(e.keys())
					n.forEach((o) => {
						e.set(o, Reflect.get(t, o)), u.delete(o)
					}),
						u.forEach((o) => e.delete(o))
					return
				}
				const r = new Set(Object.keys(e))
				n.forEach((u) => {
					Reflect.set(e, u, Reflect.get(t, u)), r.delete(u)
				}),
					r.forEach((u) => Reflect.deleteProperty(e, u))
			}
		}
		get(e) {
			return ge(e) ? e.value : e
		}
		isRef(e) {
			return ge(e) || ln(e)
		}
	}
i()
i()
i()
var Pr = '__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__'
function Vr() {
	if (!Zt || typeof localStorage > 'u' || localStorage === null)
		return {
			recordingState: !1,
			mouseEventEnabled: !1,
			keyboardEventEnabled: !1,
			componentEventEnabled: !1,
			performanceEventEnabled: !1,
			selected: '',
		}
	const e = localStorage.getItem(Pr)
	return e
		? JSON.parse(e)
		: {
				recordingState: !1,
				mouseEventEnabled: !1,
				keyboardEventEnabled: !1,
				componentEventEnabled: !1,
				performanceEventEnabled: !1,
				selected: '',
		  }
}
i()
i()
i()
var Ze, Xe
;(Xe = (Ze = l).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null ||
	(Ze.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = [])
var xr = new Proxy(l.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
	get(e, t, n) {
		return Reflect.get(e, t, n)
	},
})
function Nr(e, t) {
	;(C.timelineLayersState[t.id] = !1), xr.push({ ...e, descriptorId: t.id, appRecord: ae(t.app) })
}
var Je, Qe
;(Qe = (Je = l).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Je.__VUE_DEVTOOLS_KIT_INSPECTOR__ = [])
var Ne = new Proxy(l.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
		get(e, t, n) {
			return Reflect.get(e, t, n)
		},
	}),
	cn = M(() => {
		j.hooks.callHook('sendInspectorToClient', _n())
	})
function Fr(e, t) {
	var n, r
	Ne.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : 'Search tree...',
		stateFilterPlaceholder: (r = e.stateFilterPlaceholder) != null ? r : 'Search state...',
		treeFilter: '',
		selectedNodeId: '',
		appRecord: ae(t.app),
	}),
		cn()
}
function _n() {
	return Ne.filter((e) => e.descriptor.app === D.value.app)
		.filter((e) => e.descriptor.id !== 'components')
		.map((e) => {
			var t
			const n = e.descriptor,
				r = e.options
			return {
				id: r.id,
				label: r.label,
				logo: n.logo,
				icon: `custom-ic-baseline-${
					(t = r == null ? void 0 : r.icon) == null ? void 0 : t.replace(/_/g, '-')
				}`,
				packageName: n.packageName,
				homepage: n.homepage,
				pluginId: n.id,
			}
		})
}
function oe(e, t) {
	return Ne.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0))
}
function Br() {
	const e = Jt()
	e.hook('addInspector', ({ inspector: r, plugin: u }) => {
		Fr(r, u.descriptor)
	})
	const t = M(async ({ inspectorId: r, plugin: u }) => {
		var o
		if (!r || !((o = u == null ? void 0 : u.descriptor) != null && o.app) || C.highPerfModeEnabled)
			return
		const s = oe(r, u.descriptor.app),
			a = {
				app: u.descriptor.app,
				inspectorId: r,
				filter: (s == null ? void 0 : s.treeFilter) || '',
				rootNodes: [],
			}
		await new Promise((p) => {
			e.callHookWith(async (h) => {
				await Promise.all(h.map((A) => A(a))), p()
			}, 'getInspectorTree')
		}),
			e.callHookWith(async (p) => {
				await Promise.all(p.map((h) => h({ inspectorId: r, rootNodes: a.rootNodes })))
			}, 'sendInspectorTreeToClient')
	}, 120)
	e.hook('sendInspectorTree', t)
	const n = M(async ({ inspectorId: r, plugin: u }) => {
		var o
		if (!r || !((o = u == null ? void 0 : u.descriptor) != null && o.app) || C.highPerfModeEnabled)
			return
		const s = oe(r, u.descriptor.app),
			a = {
				app: u.descriptor.app,
				inspectorId: r,
				nodeId: (s == null ? void 0 : s.selectedNodeId) || '',
				state: null,
			},
			p = { currentTab: `custom-inspector:${r}` }
		a.nodeId &&
			(await new Promise((h) => {
				e.callHookWith(async (A) => {
					await Promise.all(A.map((d) => d(a, p))), h()
				}, 'getInspectorState')
			})),
			e.callHookWith(async (h) => {
				await Promise.all(h.map((A) => A({ inspectorId: r, nodeId: a.nodeId, state: a.state })))
			}, 'sendInspectorStateToClient')
	}, 120)
	return (
		e.hook('sendInspectorState', n),
		e.hook('customInspectorSelectNode', ({ inspectorId: r, nodeId: u, plugin: o }) => {
			const s = oe(r, o.descriptor.app)
			s && (s.selectedNodeId = u)
		}),
		e.hook('timelineLayerAdded', ({ options: r, plugin: u }) => {
			Nr(r, u.descriptor)
		}),
		e.hook('timelineEventAdded', ({ options: r, plugin: u }) => {
			var o
			const s = ['performance', 'component-event', 'keyboard', 'mouse']
			C.highPerfModeEnabled ||
				(!((o = C.timelineLayersState) != null && o[u.descriptor.id]) && !s.includes(r.layerId)) ||
				e.callHookWith(async (a) => {
					await Promise.all(a.map((p) => p(r)))
				}, 'sendTimelineEventToClient')
		}),
		e.hook('getComponentInstances', async ({ app: r }) => {
			const u = r.__VUE_DEVTOOLS_NEXT_APP_RECORD__
			if (!u) return null
			const o = u.id.toString()
			return [...u.instanceMap].filter(([a]) => a.split(':')[0] === o).map(([, a]) => a)
		}),
		e.hook('getComponentBounds', async ({ instance: r }) => F(r)),
		e.hook('getComponentName', ({ instance: r }) => le(r)),
		e.hook('componentHighlight', ({ uid: r }) => {
			const u = D.value.instanceMap.get(r)
			u && yr(u)
		}),
		e.hook('componentUnhighlight', () => {
			an()
		}),
		e
	)
}
var et, tt
;(tt = (et = l).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null ||
	(et.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = [])
var nt, rt
;(rt = (nt = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null ||
	(nt.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {})
var ut, ot
;(ot = (ut = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null ||
	(ut.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = '')
var st, it
;(it = (st = l).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null ||
	(st.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = [])
var at, lt
;(lt = (at = l).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null ||
	(at.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = [])
var N = '__VUE_DEVTOOLS_KIT_GLOBAL_STATE__'
function Ur() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: '',
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: Vr(),
	}
}
var ct, _t
;(_t = (ct = l)[N]) != null || (ct[N] = Ur())
var Lr = M((e) => {
	j.hooks.callHook('devtoolsStateUpdated', { state: e })
})
M((e, t) => {
	j.hooks.callHook('devtoolsConnectedUpdated', { state: e, oldState: t })
})
var ce = new Proxy(l.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
		get(e, t, n) {
			return t === 'value'
				? l.__VUE_DEVTOOLS_KIT_APP_RECORDS__
				: l.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t]
		},
	}),
	D = new Proxy(l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
		get(e, t, n) {
			return t === 'value'
				? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__
				: t === 'id'
				? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__
				: l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t]
		},
	})
function fn() {
	Lr({
		...l[N],
		appRecords: ce.value,
		activeAppRecordId: D.id,
		tabs: l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__,
	})
}
function Mr(e) {
	;(l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e), fn()
}
function Kr(e) {
	;(l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e), fn()
}
var C = new Proxy(l[N], {
	get(e, t) {
		return t === 'appRecords'
			? ce
			: t === 'activeAppRecordId'
			? D.id
			: t === 'tabs'
			? l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__
			: t === 'commands'
			? l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
			: l[N][t]
	},
	deleteProperty(e, t) {
		return delete e[t], !0
	},
	set(e, t, n) {
		return { ...l[N] }, (e[t] = n), (l[N][t] = n), !0
	},
})
function Hr(e = {}) {
	var t, n, r
	const { file: u, host: o, baseUrl: s = window.location.origin, line: a = 0, column: p = 0 } = e
	if (u) {
		if (o === 'chrome-extension') {
			const h = u.replace(/\\/g, '\\\\'),
				A =
					(n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null
						? n
						: '/'
			fetch(`${A}__open-in-editor?file=${encodeURI(u)}`).then((d) => {
				if (!d.ok) {
					const m = `Opening component ${h} failed`
					console.log(`%c${m}`, 'color:red')
				}
			})
		} else if (C.vitePluginDetected) {
			const h = (r = l.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? r : s
			l.__VUE_INSPECTOR__.openInEditor(h, u, a, p)
		}
	}
}
i()
i()
i()
i()
i()
var ft, dt
;(dt = (ft = l).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null ||
	(ft.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = [])
var Fe = new Proxy(l.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
	get(e, t, n) {
		return Reflect.get(e, t, n)
	},
})
function Ce(e) {
	const t = {}
	return (
		Object.keys(e).forEach((n) => {
			t[n] = e[n].defaultValue
		}),
		t
	)
}
function Be(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`
}
function zr(e) {
	var t, n, r
	const u =
		(n =
			(t = Fe.find((o) => {
				var s
				return o[0].id === e && !!((s = o[0]) != null && s.settings)
			})) == null
				? void 0
				: t[0]) != null
			? n
			: null
	return (r = u == null ? void 0 : u.settings) != null ? r : null
}
function dn(e, t) {
	var n, r, u
	const o = Be(e)
	if (o) {
		const s = localStorage.getItem(o)
		if (s) return JSON.parse(s)
	}
	if (e) {
		const s = (r = (n = Fe.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? r : null
		return Ce((u = s == null ? void 0 : s.settings) != null ? u : {})
	}
	return Ce(t)
}
function jr(e, t) {
	const n = Be(e)
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ce(t)))
}
function $r(e, t, n) {
	const r = Be(e),
		u = localStorage.getItem(r),
		o = JSON.parse(u || '{}'),
		s = { ...o, [t]: n }
	localStorage.setItem(r, JSON.stringify(s)),
		j.hooks.callHookWith((a) => {
			a.forEach((p) => p({ pluginId: e, key: t, oldValue: o[t], newValue: n, settings: s }))
		}, 'setPluginSettings')
}
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
var Et,
	pt,
	S = (pt = (Et = l).__VUE_DEVTOOLS_HOOK) != null ? pt : (Et.__VUE_DEVTOOLS_HOOK = Jt()),
	Gr = {
		vueAppInit(e) {
			S.hook('app:init', e)
		},
		vueAppUnmount(e) {
			S.hook('app:unmount', e)
		},
		vueAppConnected(e) {
			S.hook('app:connected', e)
		},
		componentAdded(e) {
			return S.hook('component:added', e)
		},
		componentEmit(e) {
			return S.hook('component:emit', e)
		},
		componentUpdated(e) {
			return S.hook('component:updated', e)
		},
		componentRemoved(e) {
			return S.hook('component:removed', e)
		},
		setupDevtoolsPlugin(e) {
			S.hook('devtools-plugin:setup', e)
		},
		perfStart(e) {
			return S.hook('perf:start', e)
		},
		perfEnd(e) {
			return S.hook('perf:end', e)
		},
	},
	En = {
		on: Gr,
		setupDevToolsPlugin(e, t) {
			return S.callHook('devtools-plugin:setup', e, t)
		},
	},
	Yr = class {
		constructor({ plugin: e, ctx: t }) {
			;(this.hooks = t.hooks), (this.plugin = e)
		}
		get on() {
			return {
				visitComponentTree: (e) => {
					this.hooks.hook('visitComponentTree', e)
				},
				inspectComponent: (e) => {
					this.hooks.hook('inspectComponent', e)
				},
				editComponentState: (e) => {
					this.hooks.hook('editComponentState', e)
				},
				getInspectorTree: (e) => {
					this.hooks.hook('getInspectorTree', e)
				},
				getInspectorState: (e) => {
					this.hooks.hook('getInspectorState', e)
				},
				editInspectorState: (e) => {
					this.hooks.hook('editInspectorState', e)
				},
				inspectTimelineEvent: (e) => {
					this.hooks.hook('inspectTimelineEvent', e)
				},
				timelineCleared: (e) => {
					this.hooks.hook('timelineCleared', e)
				},
				setPluginSettings: (e) => {
					this.hooks.hook('setPluginSettings', e)
				},
			}
		}
		notifyComponentUpdate(e) {
			var t
			if (C.highPerfModeEnabled) return
			const n = _n().find((r) => r.packageName === this.plugin.descriptor.packageName)
			if (n != null && n.id) {
				if (e) {
					const r = [e.appContext.app, e.uid, (t = e.parent) == null ? void 0 : t.uid, e]
					S.callHook('component:updated', ...r)
				} else S.callHook('component:updated')
				this.hooks.callHook('sendInspectorState', { inspectorId: n.id, plugin: this.plugin })
			}
		}
		addInspector(e) {
			this.hooks.callHook('addInspector', { inspector: e, plugin: this.plugin }),
				this.plugin.descriptor.settings && jr(e.id, this.plugin.descriptor.settings)
		}
		sendInspectorTree(e) {
			C.highPerfModeEnabled ||
				this.hooks.callHook('sendInspectorTree', { inspectorId: e, plugin: this.plugin })
		}
		sendInspectorState(e) {
			C.highPerfModeEnabled ||
				this.hooks.callHook('sendInspectorState', { inspectorId: e, plugin: this.plugin })
		}
		selectInspectorNode(e, t) {
			this.hooks.callHook('customInspectorSelectNode', {
				inspectorId: e,
				nodeId: t,
				plugin: this.plugin,
			})
		}
		visitComponentTree(e) {
			return this.hooks.callHook('visitComponentTree', e)
		}
		now() {
			return C.highPerfModeEnabled ? 0 : Date.now()
		}
		addTimelineLayer(e) {
			this.hooks.callHook('timelineLayerAdded', { options: e, plugin: this.plugin })
		}
		addTimelineEvent(e) {
			C.highPerfModeEnabled ||
				this.hooks.callHook('timelineEventAdded', { options: e, plugin: this.plugin })
		}
		getSettings(e) {
			return dn(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings)
		}
		getComponentInstances(e) {
			return this.hooks.callHook('getComponentInstances', { app: e })
		}
		getComponentBounds(e) {
			return this.hooks.callHook('getComponentBounds', { instance: e })
		}
		getComponentName(e) {
			return this.hooks.callHook('getComponentName', { instance: e })
		}
		highlightElement(e) {
			const t = e.__VUE_DEVTOOLS_NEXT_UID__
			return this.hooks.callHook('componentHighlight', { uid: t })
		}
		unhighlightElement() {
			return this.hooks.callHook('componentUnhighlight')
		}
	},
	Wr = Yr
i()
i()
i()
i()
var qr = '__vue_devtool_undefined__',
	Zr = '__vue_devtool_infinity__',
	Xr = '__vue_devtool_negative_infinity__',
	Jr = '__vue_devtool_nan__'
i()
i()
var Qr = { [qr]: 'undefined', [Jr]: 'NaN', [Zr]: 'Infinity', [Xr]: '-Infinity' }
Object.entries(Qr).reduce((e, [t, n]) => ((e[n] = t), e), {})
i()
i()
i()
i()
i()
var ht, gt
;(gt = (ht = l).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null ||
	(ht.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = new Set())
function eu(e, t) {
	return En.setupDevToolsPlugin(e, t)
}
function tu(e, t) {
	const [n, r] = e
	if (n.app !== t) return
	const u = new Wr({ plugin: { setupFn: r, descriptor: n }, ctx: j })
	n.packageName === 'vuex' &&
		u.on.editInspectorState((o) => {
			u.sendInspectorState(o.inspectorId)
		}),
		r(u)
}
function pn(e) {
	l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) ||
		C.highPerfModeEnabled ||
		(l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e),
		Fe.forEach((t) => {
			tu(t, e)
		}))
}
i()
i()
var Z = '__VUE_DEVTOOLS_ROUTER__',
	K = '__VUE_DEVTOOLS_ROUTER_INFO__',
	mt,
	vt
;(vt = (mt = l)[K]) != null || (mt[K] = { currentRoute: null, routes: [] })
var At, yt
;(yt = (At = l)[Z]) != null || (At[Z] = {})
new Proxy(l[K], {
	get(e, t) {
		return l[K][t]
	},
})
new Proxy(l[Z], {
	get(e, t) {
		if (t === 'value') return l[Z]
	},
})
function nu(e) {
	const t = new Map()
	return ((e == null ? void 0 : e.getRoutes()) || []).filter(
		(n) => !t.has(n.path) && t.set(n.path, 1)
	)
}
function Ue(e) {
	return e.map((t) => {
		let { path: n, name: r, children: u, meta: o } = t
		return u != null && u.length && (u = Ue(u)), { path: n, name: r, children: u, meta: o }
	})
}
function ru(e) {
	if (e) {
		const { fullPath: t, hash: n, href: r, path: u, name: o, matched: s, params: a, query: p } = e
		return { fullPath: t, hash: n, href: r, path: u, name: o, params: a, query: p, matched: Ue(s) }
	}
	return e
}
function uu(e, t) {
	function n() {
		var r
		const u = (r = e.app) == null ? void 0 : r.config.globalProperties.$router,
			o = ru(u == null ? void 0 : u.currentRoute.value),
			s = Ue(nu(u)),
			a = console.warn
		;(console.warn = () => {}),
			(l[K] = { currentRoute: o ? $e(o) : {}, routes: $e(s) }),
			(l[Z] = u),
			(console.warn = a)
	}
	n(),
		En.on.componentUpdated(
			M(() => {
				var r
				;((r = t.value) == null ? void 0 : r.app) === e.app &&
					(n(), !C.highPerfModeEnabled && j.hooks.callHook('routerInfoUpdated', { state: l[K] }))
			}, 200)
		)
}
function ou(e) {
	return {
		async getInspectorTree(t) {
			const n = { ...t, app: D.value.app, rootNodes: [] }
			return (
				await new Promise((r) => {
					e.callHookWith(async (u) => {
						await Promise.all(u.map((o) => o(n))), r()
					}, 'getInspectorTree')
				}),
				n.rootNodes
			)
		},
		async getInspectorState(t) {
			const n = { ...t, app: D.value.app, state: null },
				r = { currentTab: `custom-inspector:${t.inspectorId}` }
			return (
				await new Promise((u) => {
					e.callHookWith(async (o) => {
						await Promise.all(o.map((s) => s(n, r))), u()
					}, 'getInspectorState')
				}),
				n.state
			)
		},
		editInspectorState(t) {
			const n = new Rr(),
				r = {
					...t,
					app: D.value.app,
					set: (u, o = t.path, s = t.state.value, a) => {
						n.set(u, o, s, a || n.createDefaultSetCallback(t.state))
					},
				}
			e.callHookWith((u) => {
				u.forEach((o) => o(r))
			}, 'editInspectorState')
		},
		sendInspectorState(t) {
			const n = oe(t)
			e.callHook('sendInspectorState', {
				inspectorId: t,
				plugin: { descriptor: n.descriptor, setupFn: () => ({}) },
			})
		},
		inspectComponentInspector() {
			return Cr()
		},
		cancelInspectComponentInspector() {
			return Tr()
		},
		getComponentRenderCode(t) {
			const n = ye(D.value, t)
			if (n)
				return (n == null ? void 0 : n.type) instanceof Function
					? n.type.toString()
					: n.render.toString()
		},
		scrollToComponent(t) {
			return Dr({ id: t })
		},
		openInEditor: Hr,
		getVueInspector: kr,
		toggleApp(t) {
			const n = ce.value.find((r) => r.id === t)
			n && (Kr(t), Mr(n), uu(n, D), cn(), pn(n.app))
		},
		inspectDOM(t) {
			const n = ye(D.value, t)
			if (n) {
				const [r] = we(n)
				r && (l.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r)
			}
		},
		updatePluginSettings(t, n, r) {
			$r(t, n, r)
		},
		getPluginSettings(t) {
			return { options: zr(t), values: dn(t) }
		},
	}
}
i()
var Ot, Tt
;(Tt = (Ot = l).__VUE_DEVTOOLS_ENV__) != null ||
	(Ot.__VUE_DEVTOOLS_ENV__ = { vitePluginDetected: !1 })
var Ct = Br(),
	Dt,
	St
;(St = (Dt = l).__VUE_DEVTOOLS_KIT_CONTEXT__) != null ||
	(Dt.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
		hooks: Ct,
		get state() {
			return { ...C, activeAppRecordId: D.id, activeAppRecord: D.value, appRecords: ce.value }
		},
		api: ou(Ct),
	})
var j = l.__VUE_DEVTOOLS_KIT_CONTEXT__
i()
or(ir())
var It, kt
;(kt = (It = l).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null ||
	(It.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = { id: 0, appIds: new Set() })
i()
function su(e) {
	;(C.highPerfModeEnabled = e ?? !C.highPerfModeEnabled), !e && D.value && pn(D.value.app)
}
i()
i()
i()
function iu(e) {
	C.devtoolsClientDetected = { ...C.devtoolsClientDetected, ...e }
	const t = Object.values(C.devtoolsClientDetected).some(Boolean)
	su(!t)
}
var bt, Rt
;(Rt = (bt = l).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null ||
	(bt.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = iu)
i()
i()
i()
i()
i()
i()
i()
var au = class {
		constructor() {
			;(this.keyToValue = new Map()), (this.valueToKey = new Map())
		}
		set(e, t) {
			this.keyToValue.set(e, t), this.valueToKey.set(t, e)
		}
		getByKey(e) {
			return this.keyToValue.get(e)
		}
		getByValue(e) {
			return this.valueToKey.get(e)
		}
		clear() {
			this.keyToValue.clear(), this.valueToKey.clear()
		}
	},
	hn = class {
		constructor(e) {
			;(this.generateIdentifier = e), (this.kv = new au())
		}
		register(e, t) {
			this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e))
		}
		clear() {
			this.kv.clear()
		}
		getIdentifier(e) {
			return this.kv.getByValue(e)
		}
		getValue(e) {
			return this.kv.getByKey(e)
		}
	},
	lu = class extends hn {
		constructor() {
			super((e) => e.name), (this.classToAllowedProps = new Map())
		}
		register(e, t) {
			typeof t == 'object'
				? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps),
				  super.register(e, t.identifier))
				: super.register(e, t)
		}
		getAllowedProps(e) {
			return this.classToAllowedProps.get(e)
		}
	}
i()
i()
function cu(e) {
	if ('values' in Object) return Object.values(e)
	const t = []
	for (const n in e) e.hasOwnProperty(n) && t.push(e[n])
	return t
}
function _u(e, t) {
	const n = cu(e)
	if ('find' in n) return n.find(t)
	const r = n
	for (let u = 0; u < r.length; u++) {
		const o = r[u]
		if (t(o)) return o
	}
}
function H(e, t) {
	Object.entries(e).forEach(([n, r]) => t(r, n))
}
function se(e, t) {
	return e.indexOf(t) !== -1
}
function wt(e, t) {
	for (let n = 0; n < e.length; n++) {
		const r = e[n]
		if (t(r)) return r
	}
}
var fu = class {
	constructor() {
		this.transfomers = {}
	}
	register(e) {
		this.transfomers[e.name] = e
	}
	findApplicable(e) {
		return _u(this.transfomers, (t) => t.isApplicable(e))
	}
	findByName(e) {
		return this.transfomers[e]
	}
}
i()
i()
var du = (e) => Object.prototype.toString.call(e).slice(8, -1),
	gn = (e) => typeof e > 'u',
	Eu = (e) => e === null,
	X = (e) =>
		typeof e != 'object' || e === null || e === Object.prototype
			? !1
			: Object.getPrototypeOf(e) === null
			? !0
			: Object.getPrototypeOf(e) === Object.prototype,
	De = (e) => X(e) && Object.keys(e).length === 0,
	x = (e) => Array.isArray(e),
	pu = (e) => typeof e == 'string',
	hu = (e) => typeof e == 'number' && !isNaN(e),
	gu = (e) => typeof e == 'boolean',
	mu = (e) => e instanceof RegExp,
	J = (e) => e instanceof Map,
	Q = (e) => e instanceof Set,
	mn = (e) => du(e) === 'Symbol',
	vu = (e) => e instanceof Date && !isNaN(e.valueOf()),
	Au = (e) => e instanceof Error,
	Pt = (e) => typeof e == 'number' && isNaN(e),
	yu = (e) => gu(e) || Eu(e) || gn(e) || hu(e) || pu(e) || mn(e),
	Ou = (e) => typeof e == 'bigint',
	Tu = (e) => e === 1 / 0 || e === -1 / 0,
	Cu = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView),
	Du = (e) => e instanceof URL
i()
var vn = (e) => e.replace(/\./g, '\\.'),
	me = (e) => e.map(String).map(vn).join('.'),
	q = (e) => {
		const t = []
		let n = ''
		for (let u = 0; u < e.length; u++) {
			let o = e.charAt(u)
			if (o === '\\' && e.charAt(u + 1) === '.') {
				;(n += '.'), u++
				continue
			}
			if (o === '.') {
				t.push(n), (n = '')
				continue
			}
			n += o
		}
		const r = n
		return t.push(r), t
	}
i()
function R(e, t, n, r) {
	return { isApplicable: e, annotation: t, transform: n, untransform: r }
}
var An = [
	R(
		gn,
		'undefined',
		() => null,
		() => {}
	),
	R(
		Ou,
		'bigint',
		(e) => e.toString(),
		(e) => (typeof BigInt < 'u' ? BigInt(e) : (console.error('Please add a BigInt polyfill.'), e))
	),
	R(
		vu,
		'Date',
		(e) => e.toISOString(),
		(e) => new Date(e)
	),
	R(
		Au,
		'Error',
		(e, t) => {
			const n = { name: e.name, message: e.message }
			return (
				t.allowedErrorProps.forEach((r) => {
					n[r] = e[r]
				}),
				n
			)
		},
		(e, t) => {
			const n = new Error(e.message)
			return (
				(n.name = e.name),
				(n.stack = e.stack),
				t.allowedErrorProps.forEach((r) => {
					n[r] = e[r]
				}),
				n
			)
		}
	),
	R(
		mu,
		'regexp',
		(e) => '' + e,
		(e) => {
			const t = e.slice(1, e.lastIndexOf('/')),
				n = e.slice(e.lastIndexOf('/') + 1)
			return new RegExp(t, n)
		}
	),
	R(
		Q,
		'set',
		(e) => [...e.values()],
		(e) => new Set(e)
	),
	R(
		J,
		'map',
		(e) => [...e.entries()],
		(e) => new Map(e)
	),
	R(
		(e) => Pt(e) || Tu(e),
		'number',
		(e) => (Pt(e) ? 'NaN' : e > 0 ? 'Infinity' : '-Infinity'),
		Number
	),
	R(
		(e) => e === 0 && 1 / e === -1 / 0,
		'number',
		() => '-0',
		Number
	),
	R(
		Du,
		'URL',
		(e) => e.toString(),
		(e) => new URL(e)
	),
]
function _e(e, t, n, r) {
	return { isApplicable: e, annotation: t, transform: n, untransform: r }
}
var yn = _e(
		(e, t) => (mn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1),
		(e, t) => ['symbol', t.symbolRegistry.getIdentifier(e)],
		(e) => e.description,
		(e, t, n) => {
			const r = n.symbolRegistry.getValue(t[1])
			if (!r) throw new Error('Trying to deserialize unknown symbol')
			return r
		}
	),
	Su = [
		Int8Array,
		Uint8Array,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		Uint8ClampedArray,
	].reduce((e, t) => ((e[t.name] = t), e), {}),
	On = _e(
		Cu,
		(e) => ['typed-array', e.constructor.name],
		(e) => [...e],
		(e, t) => {
			const n = Su[t[1]]
			if (!n) throw new Error('Trying to deserialize unknown typed array')
			return new n(e)
		}
	)
function Tn(e, t) {
	return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1
}
var Cn = _e(
		Tn,
		(e, t) => ['class', t.classRegistry.getIdentifier(e.constructor)],
		(e, t) => {
			const n = t.classRegistry.getAllowedProps(e.constructor)
			if (!n) return { ...e }
			const r = {}
			return (
				n.forEach((u) => {
					r[u] = e[u]
				}),
				r
			)
		},
		(e, t, n) => {
			const r = n.classRegistry.getValue(t[1])
			if (!r)
				throw new Error(
					'Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564'
				)
			return Object.assign(Object.create(r.prototype), e)
		}
	),
	Dn = _e(
		(e, t) => !!t.customTransformerRegistry.findApplicable(e),
		(e, t) => ['custom', t.customTransformerRegistry.findApplicable(e).name],
		(e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e),
		(e, t, n) => {
			const r = n.customTransformerRegistry.findByName(t[1])
			if (!r) throw new Error('Trying to deserialize unknown custom value')
			return r.deserialize(e)
		}
	),
	Iu = [Cn, yn, Dn, On],
	Vt = (e, t) => {
		const n = wt(Iu, (u) => u.isApplicable(e, t))
		if (n) return { value: n.transform(e, t), type: n.annotation(e, t) }
		const r = wt(An, (u) => u.isApplicable(e, t))
		if (r) return { value: r.transform(e, t), type: r.annotation }
	},
	Sn = {}
An.forEach((e) => {
	Sn[e.annotation] = e
})
var ku = (e, t, n) => {
	if (x(t))
		switch (t[0]) {
			case 'symbol':
				return yn.untransform(e, t, n)
			case 'class':
				return Cn.untransform(e, t, n)
			case 'custom':
				return Dn.untransform(e, t, n)
			case 'typed-array':
				return On.untransform(e, t, n)
			default:
				throw new Error('Unknown transformation: ' + t)
		}
	else {
		const r = Sn[t]
		if (!r) throw new Error('Unknown transformation: ' + t)
		return r.untransform(e, n)
	}
}
i()
var L = (e, t) => {
	const n = e.keys()
	for (; t > 0; ) n.next(), t--
	return n.next().value
}
function In(e) {
	if (se(e, '__proto__')) throw new Error('__proto__ is not allowed as a property')
	if (se(e, 'prototype')) throw new Error('prototype is not allowed as a property')
	if (se(e, 'constructor')) throw new Error('constructor is not allowed as a property')
}
var bu = (e, t) => {
		In(t)
		for (let n = 0; n < t.length; n++) {
			const r = t[n]
			if (Q(e)) e = L(e, +r)
			else if (J(e)) {
				const u = +r,
					o = +t[++n] == 0 ? 'key' : 'value',
					s = L(e, u)
				switch (o) {
					case 'key':
						e = s
						break
					case 'value':
						e = e.get(s)
						break
				}
			} else e = e[r]
		}
		return e
	},
	Se = (e, t, n) => {
		if ((In(t), t.length === 0)) return n(e)
		let r = e
		for (let o = 0; o < t.length - 1; o++) {
			const s = t[o]
			if (x(r)) {
				const a = +s
				r = r[a]
			} else if (X(r)) r = r[s]
			else if (Q(r)) {
				const a = +s
				r = L(r, a)
			} else if (J(r)) {
				if (o === t.length - 2) break
				const p = +s,
					h = +t[++o] == 0 ? 'key' : 'value',
					A = L(r, p)
				switch (h) {
					case 'key':
						r = A
						break
					case 'value':
						r = r.get(A)
						break
				}
			}
		}
		const u = t[t.length - 1]
		if ((x(r) ? (r[+u] = n(r[+u])) : X(r) && (r[u] = n(r[u])), Q(r))) {
			const o = L(r, +u),
				s = n(o)
			o !== s && (r.delete(o), r.add(s))
		}
		if (J(r)) {
			const o = +t[t.length - 2],
				s = L(r, o)
			switch (+u == 0 ? 'key' : 'value') {
				case 'key': {
					const p = n(s)
					r.set(p, r.get(s)), p !== s && r.delete(s)
					break
				}
				case 'value': {
					r.set(s, n(r.get(s)))
					break
				}
			}
		}
		return e
	}
function Ie(e, t, n = []) {
	if (!e) return
	if (!x(e)) {
		H(e, (o, s) => Ie(o, t, [...n, ...q(s)]))
		return
	}
	const [r, u] = e
	u &&
		H(u, (o, s) => {
			Ie(o, t, [...n, ...q(s)])
		}),
		t(r, n)
}
function Ru(e, t, n) {
	return (
		Ie(t, (r, u) => {
			e = Se(e, u, (o) => ku(o, r, n))
		}),
		e
	)
}
function wu(e, t) {
	function n(r, u) {
		const o = bu(e, q(u))
		r.map(q).forEach((s) => {
			e = Se(e, s, () => o)
		})
	}
	if (x(t)) {
		const [r, u] = t
		r.forEach((o) => {
			e = Se(e, q(o), () => e)
		}),
			u && H(u, n)
	} else H(t, n)
	return e
}
var Pu = (e, t) => X(e) || x(e) || J(e) || Q(e) || Tn(e, t)
function Vu(e, t, n) {
	const r = n.get(e)
	r ? r.push(t) : n.set(e, [t])
}
function xu(e, t) {
	const n = {}
	let r
	return (
		e.forEach((u) => {
			if (u.length <= 1) return
			t || (u = u.map((a) => a.map(String)).sort((a, p) => a.length - p.length))
			const [o, ...s] = u
			o.length === 0 ? (r = s.map(me)) : (n[me(o)] = s.map(me))
		}),
		r ? (De(n) ? [r] : [r, n]) : De(n) ? void 0 : n
	)
}
var kn = (e, t, n, r, u = [], o = [], s = new Map()) => {
	var a
	const p = yu(e)
	if (!p) {
		Vu(e, u, t)
		const _ = s.get(e)
		if (_) return r ? { transformedValue: null } : _
	}
	if (!Pu(e, n)) {
		const _ = Vt(e, n),
			g = _ ? { transformedValue: _.value, annotations: [_.type] } : { transformedValue: e }
		return p || s.set(e, g), g
	}
	if (se(o, e)) return { transformedValue: null }
	const h = Vt(e, n),
		A = (a = h == null ? void 0 : h.value) != null ? a : e,
		d = x(A) ? [] : {},
		m = {}
	H(A, (_, g) => {
		if (g === '__proto__' || g === 'constructor' || g === 'prototype')
			throw new Error(
				`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`
			)
		const f = kn(_, t, n, r, [...u, g], [...o, e], s)
		;(d[g] = f.transformedValue),
			x(f.annotations)
				? (m[g] = f.annotations)
				: X(f.annotations) &&
				  H(f.annotations, (E, T) => {
						m[vn(g) + '.' + T] = E
				  })
	})
	const c = De(m)
		? { transformedValue: d, annotations: h ? [h.type] : void 0 }
		: { transformedValue: d, annotations: h ? [h.type, m] : m }
	return p || s.set(e, c), c
}
i()
i()
function bn(e) {
	return Object.prototype.toString.call(e).slice(8, -1)
}
function xt(e) {
	return bn(e) === 'Array'
}
function Nu(e) {
	if (bn(e) !== 'Object') return !1
	const t = Object.getPrototypeOf(e)
	return !!t && t.constructor === Object && t === Object.prototype
}
function Fu(e, t, n, r, u) {
	const o = {}.propertyIsEnumerable.call(r, t) ? 'enumerable' : 'nonenumerable'
	o === 'enumerable' && (e[t] = n),
		u &&
			o === 'nonenumerable' &&
			Object.defineProperty(e, t, { value: n, enumerable: !1, writable: !0, configurable: !0 })
}
function ke(e, t = {}) {
	if (xt(e)) return e.map((u) => ke(u, t))
	if (!Nu(e)) return e
	const n = Object.getOwnPropertyNames(e),
		r = Object.getOwnPropertySymbols(e)
	return [...n, ...r].reduce((u, o) => {
		if (xt(t.props) && !t.props.includes(o)) return u
		const s = e[o],
			a = ke(s, t)
		return Fu(u, o, a, e, t.nonenumerable), u
	}, {})
}
var O = class {
	constructor({ dedupe: e = !1 } = {}) {
		;(this.classRegistry = new lu()),
			(this.symbolRegistry = new hn((t) => {
				var n
				return (n = t.description) != null ? n : ''
			})),
			(this.customTransformerRegistry = new fu()),
			(this.allowedErrorProps = []),
			(this.dedupe = e)
	}
	serialize(e) {
		const t = new Map(),
			n = kn(e, t, this, this.dedupe),
			r = { json: n.transformedValue }
		n.annotations && (r.meta = { ...r.meta, values: n.annotations })
		const u = xu(t, this.dedupe)
		return u && (r.meta = { ...r.meta, referentialEqualities: u }), r
	}
	deserialize(e) {
		const { json: t, meta: n } = e
		let r = ke(t)
		return (
			n != null && n.values && (r = Ru(r, n.values, this)),
			n != null && n.referentialEqualities && (r = wu(r, n.referentialEqualities)),
			r
		)
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e))
	}
	parse(e) {
		return this.deserialize(JSON.parse(e))
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t)
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t)
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({ name: t, ...e })
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e)
	}
}
O.defaultInstance = new O()
O.serialize = O.defaultInstance.serialize.bind(O.defaultInstance)
O.deserialize = O.defaultInstance.deserialize.bind(O.defaultInstance)
O.stringify = O.defaultInstance.stringify.bind(O.defaultInstance)
O.parse = O.defaultInstance.parse.bind(O.defaultInstance)
O.registerClass = O.defaultInstance.registerClass.bind(O.defaultInstance)
O.registerSymbol = O.defaultInstance.registerSymbol.bind(O.defaultInstance)
O.registerCustom = O.defaultInstance.registerCustom.bind(O.defaultInstance)
O.allowErrorProps = O.defaultInstance.allowErrorProps.bind(O.defaultInstance)
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
i()
var Nt, Ft
;(Ft = (Nt = l).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null ||
	(Nt.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = [])
var Bt, Ut
;(Ut = (Bt = l).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null ||
	(Bt.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null)
var Lt, Mt
;(Mt = (Lt = l).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null ||
	(Lt.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null)
var Kt, Ht
;(Ht = (Kt = l).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null ||
	(Kt.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null)
var zt, jt
;(jt = (zt = l).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null ||
	(zt.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null)
var $t, Gt
;(Gt = ($t = l).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null ||
	($t.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null)
i()
i()
i()
i()
i()
i()
i()
var Rn = 'org.vuejs.vuepress',
	Le = 'VuePress',
	Yt = Le,
	ue = Rn,
	Bu = Le,
	Wt = 'client-data',
	ve = 'Client Data',
	Lu = (e, t) => {
		eu(
			{
				app: e,
				id: Rn,
				label: Le,
				packageName: '@vuepress/client',
				homepage: 'https://vuepress.vuejs.org',
				logo: 'https://vuepress.vuejs.org/images/hero.png',
				componentStateTypes: [Yt],
			},
			(n) => {
				const r = Object.entries(t),
					u = Object.keys(t),
					o = Object.values(t)
				n.on.inspectComponent((s) => {
					s.instanceData.state.push(
						...r.map(([a, p]) => ({ type: Yt, editable: !1, key: a, value: p.value }))
					)
				}),
					n.addInspector({ id: ue, label: Bu, icon: 'article' }),
					n.on.getInspectorTree((s) => {
						s.inspectorId === ue &&
							(s.rootNodes = [{ id: Wt, label: ve, children: u.map((a) => ({ id: a, label: a })) }])
					}),
					n.on.getInspectorState((s) => {
						s.inspectorId === ue &&
							(s.nodeId === Wt &&
								(s.state = { [ve]: r.map(([a, p]) => ({ key: a, value: p.value })) }),
							u.includes(s.nodeId) &&
								(s.state = { [ve]: [{ key: s.nodeId, value: t[s.nodeId].value }] }))
					}),
					wn(o, () => {
						n.notifyComponentUpdate(), n.sendInspectorState(ue)
					})
			}
		)
	}
export { Lu as setupDevtools }
