const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'assets/index.html-DvF_RP53.js',
			'assets/custom-hero-Bd1pmfWn.js',
			'assets/index.html-BrFDRrcS.js',
		])
) => i.map((i) => d[i])
const Hv = 'modulepreload',
	zv = function (e) {
		return '/' + e
	},
	Sc = {},
	L = function (t, n, o) {
		let r = Promise.resolve()
		if (n && n.length > 0) {
			document.getElementsByTagName('link')
			const s = document.querySelector('meta[property=csp-nonce]'),
				a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute('nonce'))
			r = Promise.allSettled(
				n.map((l) => {
					if (((l = zv(l)), l in Sc)) return
					Sc[l] = !0
					const c = l.endsWith('.css'),
						u = c ? '[rel="stylesheet"]' : ''
					if (document.querySelector(`link[href="${l}"]${u}`)) return
					const d = document.createElement('link')
					if (
						((d.rel = c ? 'stylesheet' : Hv),
						c || (d.as = 'script'),
						(d.crossOrigin = ''),
						(d.href = l),
						a && d.setAttribute('nonce', a),
						document.head.appendChild(d),
						c)
					)
						return new Promise((f, p) => {
							d.addEventListener('load', f),
								d.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${l}`)))
						})
				})
			)
		}
		function i(s) {
			const a = new Event('vite:preloadError', { cancelable: !0 })
			if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented)) throw s
		}
		return r.then((s) => {
			for (const a of s || []) a.status === 'rejected' && i(a.reason)
			return t().catch(i)
		})
	}
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function nr(e) {
	const t = Object.create(null)
	for (const n of e.split(',')) t[n] = 1
	return (n) => n in t
}
const Le = {},
	Ro = [],
	nn = () => {},
	qv = () => !1,
	ni = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	_l = (e) => e.startsWith('onUpdate:'),
	Ke = Object.assign,
	bl = (e, t) => {
		const n = e.indexOf(t)
		n > -1 && e.splice(n, 1)
	},
	Uv = Object.prototype.hasOwnProperty,
	Be = (e, t) => Uv.call(e, t),
	fe = Array.isArray,
	Do = (e) => oi(e) === '[object Map]',
	or = (e) => oi(e) === '[object Set]',
	Cc = (e) => oi(e) === '[object Date]',
	_e = (e) => typeof e == 'function',
	Ve = (e) => typeof e == 'string',
	Wt = (e) => typeof e == 'symbol',
	$e = (e) => e !== null && typeof e == 'object',
	yf = (e) => ($e(e) || _e(e)) && _e(e.then) && _e(e.catch),
	wf = Object.prototype.toString,
	oi = (e) => wf.call(e),
	Wv = (e) => oi(e).slice(8, -1),
	kf = (e) => oi(e) === '[object Object]',
	yl = (e) => Ve(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	Mo = nr(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
	),
	ms = (e) => {
		const t = Object.create(null)
		return (n) => t[n] || (t[n] = e(n))
	},
	Gv = /-(\w)/g,
	ft = ms((e) => e.replace(Gv, (t, n) => (n ? n.toUpperCase() : ''))),
	Kv = /\B([A-Z])/g,
	fn = ms((e) => e.replace(Kv, '-$1').toLowerCase()),
	ri = ms((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	Ri = ms((e) => (e ? `on${ri(e)}` : '')),
	mt = (e, t) => !Object.is(e, t),
	Di = (e, ...t) => {
		for (let n = 0; n < e.length; n++) e[n](...t)
	},
	Go = (e, t, n, o = !1) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: o, value: n })
	},
	Ki = (e) => {
		const t = parseFloat(e)
		return isNaN(t) ? e : t
	},
	Yv = (e) => {
		const t = Ve(e) ? Number(e) : NaN
		return isNaN(t) ? e : t
	}
let Tc
const vs = () =>
	Tc ||
	(Tc =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
			? self
			: typeof window < 'u'
			? window
			: typeof global < 'u'
			? global
			: {})
function xe(e) {
	if (fe(e)) {
		const t = {}
		for (let n = 0; n < e.length; n++) {
			const o = e[n],
				r = Ve(o) ? Zv(o) : xe(o)
			if (r) for (const i in r) t[i] = r[i]
		}
		return t
	} else if (Ve(e) || $e(e)) return e
}
const Qv = /;(?![^(]*\))/g,
	Jv = /:([^]+)/,
	Xv = /\/\*[^]*?\*\//g
function Zv(e) {
	const t = {}
	return (
		e
			.replace(Xv, '')
			.split(Qv)
			.forEach((n) => {
				if (n) {
					const o = n.split(Jv)
					o.length > 1 && (t[o[0].trim()] = o[1].trim())
				}
			}),
		t
	)
}
function eg(e) {
	if (!e) return ''
	if (Ve(e)) return e
	let t = ''
	for (const n in e) {
		const o = e[n]
		if (Ve(o) || typeof o == 'number') {
			const r = n.startsWith('--') ? n : fn(n)
			t += `${r}:${o};`
		}
	}
	return t
}
function J(e) {
	let t = ''
	if (Ve(e)) t = e
	else if (fe(e))
		for (let n = 0; n < e.length; n++) {
			const o = J(e[n])
			o && (t += o + ' ')
		}
	else if ($e(e)) for (const n in e) e[n] && (t += n + ' ')
	return t.trim()
}
function Ef(e) {
	if (!e) return null
	let { class: t, style: n } = e
	return t && !Ve(t) && (e.class = J(t)), n && (e.style = xe(n)), e
}
const xf = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	tg = nr(xf),
	Ac = nr(
		xf +
			',async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected'
	)
function wl(e) {
	return !!e || e === ''
}
const ng = nr(
		'accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap'
	),
	og = nr(
		'xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan'
	)
function rg(e) {
	if (e == null) return !1
	const t = typeof e
	return t === 'string' || t === 'number' || t === 'boolean'
}
const ig = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g
function sg(e, t) {
	return e.replace(ig, (n) => `\\${n}`)
}
function ag(e, t) {
	if (e.length !== t.length) return !1
	let n = !0
	for (let o = 0; n && o < e.length; o++) n = _o(e[o], t[o])
	return n
}
function _o(e, t) {
	if (e === t) return !0
	let n = Cc(e),
		o = Cc(t)
	if (n || o) return n && o ? e.getTime() === t.getTime() : !1
	if (((n = Wt(e)), (o = Wt(t)), n || o)) return e === t
	if (((n = fe(e)), (o = fe(t)), n || o)) return n && o ? ag(e, t) : !1
	if (((n = $e(e)), (o = $e(t)), n || o)) {
		if (!n || !o) return !1
		const r = Object.keys(e).length,
			i = Object.keys(t).length
		if (r !== i) return !1
		for (const s in e) {
			const a = e.hasOwnProperty(s),
				l = t.hasOwnProperty(s)
			if ((a && !l) || (!a && l) || !_o(e[s], t[s])) return !1
		}
	}
	return String(e) === String(t)
}
function kl(e, t) {
	return e.findIndex((n) => _o(n, t))
}
const Pf = (e) => !!(e && e.__v_isRef === !0),
	D = (e) =>
		Ve(e)
			? e
			: e == null
			? ''
			: fe(e) || ($e(e) && (e.toString === wf || !_e(e.toString)))
			? Pf(e)
				? D(e.value)
				: JSON.stringify(e, Sf, 2)
			: String(e),
	Sf = (e, t) =>
		Pf(t)
			? Sf(e, t.value)
			: Do(t)
			? {
					[`Map(${t.size})`]: [...t.entries()].reduce(
						(n, [o, r], i) => ((n[Fs(o, i) + ' =>'] = r), n),
						{}
					),
			  }
			: or(t)
			? { [`Set(${t.size})`]: [...t.values()].map((n) => Fs(n)) }
			: Wt(t)
			? Fs(t)
			: $e(t) && !fe(t) && !kf(t)
			? String(t)
			: t,
	Fs = (e, t = '') => {
		var n
		return Wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
	}
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ut
class lg {
	constructor(t = !1) {
		;(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this._isPaused = !1),
			(this.parent = ut),
			!t && ut && (this.index = (ut.scopes || (ut.scopes = [])).push(this) - 1)
	}
	get active() {
		return this._active
	}
	pause() {
		if (this._active) {
			this._isPaused = !0
			let t, n
			if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1
			let t, n
			if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
		}
	}
	run(t) {
		if (this._active) {
			const n = ut
			try {
				return (ut = this), t()
			} finally {
				ut = n
			}
		}
	}
	on() {
		ut = this
	}
	off() {
		ut = this.parent
	}
	stop(t) {
		if (this._active) {
			this._active = !1
			let n, o
			for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop()
			for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]()
			if (((this.cleanups.length = 0), this.scopes)) {
				for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0)
				this.scopes.length = 0
			}
			if (!this.detached && this.parent && !t) {
				const r = this.parent.scopes.pop()
				r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
			}
			this.parent = void 0
		}
	}
}
function Cf() {
	return ut
}
function cg(e, t = !1) {
	ut && ut.cleanups.push(e)
}
let Ne
const js = new WeakSet()
class Tf {
	constructor(t) {
		;(this.fn = t),
			(this.deps = void 0),
			(this.depsTail = void 0),
			(this.flags = 5),
			(this.next = void 0),
			(this.cleanup = void 0),
			(this.scheduler = void 0),
			ut && ut.active && ut.effects.push(this)
	}
	pause() {
		this.flags |= 64
	}
	resume() {
		this.flags & 64 && ((this.flags &= -65), js.has(this) && (js.delete(this), this.trigger()))
	}
	notify() {
		;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Lf(this)
	}
	run() {
		if (!(this.flags & 1)) return this.fn()
		;(this.flags |= 2), Lc(this), Bf(this)
		const t = Ne,
			n = jt
		;(Ne = this), (jt = !0)
		try {
			return this.fn()
		} finally {
			Of(this), (Ne = t), (jt = n), (this.flags &= -3)
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let t = this.deps; t; t = t.nextDep) Pl(t)
			;(this.deps = this.depsTail = void 0),
				Lc(this),
				this.onStop && this.onStop(),
				(this.flags &= -2)
		}
	}
	trigger() {
		this.flags & 64 ? js.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
	}
	runIfDirty() {
		xa(this) && this.run()
	}
	get dirty() {
		return xa(this)
	}
}
let Af = 0,
	xr,
	Pr
function Lf(e, t = !1) {
	if (((e.flags |= 8), t)) {
		;(e.next = Pr), (Pr = e)
		return
	}
	;(e.next = xr), (xr = e)
}
function El() {
	Af++
}
function xl() {
	if (--Af > 0) return
	if (Pr) {
		let t = Pr
		for (Pr = void 0; t; ) {
			const n = t.next
			;(t.next = void 0), (t.flags &= -9), (t = n)
		}
	}
	let e
	for (; xr; ) {
		let t = xr
		for (xr = void 0; t; ) {
			const n = t.next
			if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
				try {
					t.trigger()
				} catch (o) {
					e || (e = o)
				}
			t = n
		}
	}
	if (e) throw e
}
function Bf(e) {
	for (let t = e.deps; t; t = t.nextDep)
		(t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function Of(e) {
	let t,
		n = e.depsTail,
		o = n
	for (; o; ) {
		const r = o.prevDep
		o.version === -1 ? (o === n && (n = r), Pl(o), ug(o)) : (t = o),
			(o.dep.activeLink = o.prevActiveLink),
			(o.prevActiveLink = void 0),
			(o = r)
	}
	;(e.deps = t), (e.depsTail = n)
}
function xa(e) {
	for (let t = e.deps; t; t = t.nextDep)
		if (
			t.dep.version !== t.version ||
			(t.dep.computed && (Vf(t.dep.computed) || t.dep.version !== t.version))
		)
			return !0
	return !!e._dirty
}
function Vf(e) {
	if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Nr)) return
	e.globalVersion = Nr
	const t = e.dep
	if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !xa(e))) {
		e.flags &= -3
		return
	}
	const n = Ne,
		o = jt
	;(Ne = e), (jt = !0)
	try {
		Bf(e)
		const r = e.fn(e._value)
		;(t.version === 0 || mt(r, e._value)) && ((e._value = r), t.version++)
	} catch (r) {
		throw (t.version++, r)
	} finally {
		;(Ne = n), (jt = o), Of(e), (e.flags &= -3)
	}
}
function Pl(e, t = !1) {
	const { dep: n, prevSub: o, nextSub: r } = e
	if (
		(o && ((o.nextSub = r), (e.prevSub = void 0)),
		r && ((r.prevSub = o), (e.nextSub = void 0)),
		n.subs === e && ((n.subs = o), !o && n.computed))
	) {
		n.computed.flags &= -5
		for (let i = n.computed.deps; i; i = i.nextDep) Pl(i, !0)
	}
	!t && !--n.sc && n.map && n.map.delete(n.key)
}
function ug(e) {
	const { prevDep: t, nextDep: n } = e
	t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
let jt = !0
const $f = []
function On() {
	$f.push(jt), (jt = !1)
}
function Vn() {
	const e = $f.pop()
	jt = e === void 0 ? !0 : e
}
function Lc(e) {
	const { cleanup: t } = e
	if (((e.cleanup = void 0), t)) {
		const n = Ne
		Ne = void 0
		try {
			t()
		} finally {
			Ne = n
		}
	}
}
let Nr = 0
class dg {
	constructor(t, n) {
		;(this.sub = t),
			(this.dep = n),
			(this.version = n.version),
			(this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
	}
}
class gs {
	constructor(t) {
		;(this.computed = t),
			(this.version = 0),
			(this.activeLink = void 0),
			(this.subs = void 0),
			(this.map = void 0),
			(this.key = void 0),
			(this.sc = 0)
	}
	track(t) {
		if (!Ne || !jt || Ne === this.computed) return
		let n = this.activeLink
		if (n === void 0 || n.sub !== Ne)
			(n = this.activeLink = new dg(Ne, this)),
				Ne.deps
					? ((n.prevDep = Ne.depsTail), (Ne.depsTail.nextDep = n), (Ne.depsTail = n))
					: (Ne.deps = Ne.depsTail = n),
				If(n)
		else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
			const o = n.nextDep
			;(o.prevDep = n.prevDep),
				n.prevDep && (n.prevDep.nextDep = o),
				(n.prevDep = Ne.depsTail),
				(n.nextDep = void 0),
				(Ne.depsTail.nextDep = n),
				(Ne.depsTail = n),
				Ne.deps === n && (Ne.deps = o)
		}
		return n
	}
	trigger(t) {
		this.version++, Nr++, this.notify(t)
	}
	notify(t) {
		El()
		try {
			for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
		} finally {
			xl()
		}
	}
}
function If(e) {
	if ((e.dep.sc++, e.sub.flags & 4)) {
		const t = e.dep.computed
		if (t && !e.dep.subs) {
			t.flags |= 20
			for (let o = t.deps; o; o = o.nextDep) If(o)
		}
		const n = e.dep.subs
		n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
	}
}
const Yi = new WeakMap(),
	vo = Symbol(''),
	Pa = Symbol(''),
	Fr = Symbol('')
function rt(e, t, n) {
	if (jt && Ne) {
		let o = Yi.get(e)
		o || Yi.set(e, (o = new Map()))
		let r = o.get(n)
		r || (o.set(n, (r = new gs())), (r.map = o), (r.key = n)), r.track()
	}
}
function Pn(e, t, n, o, r, i) {
	const s = Yi.get(e)
	if (!s) {
		Nr++
		return
	}
	const a = (l) => {
		l && l.trigger()
	}
	if ((El(), t === 'clear')) s.forEach(a)
	else {
		const l = fe(e),
			c = l && yl(n)
		if (l && n === 'length') {
			const u = Number(o)
			s.forEach((d, f) => {
				;(f === 'length' || f === Fr || (!Wt(f) && f >= u)) && a(d)
			})
		} else
			switch (((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Fr)), t)) {
				case 'add':
					l ? c && a(s.get('length')) : (a(s.get(vo)), Do(e) && a(s.get(Pa)))
					break
				case 'delete':
					l || (a(s.get(vo)), Do(e) && a(s.get(Pa)))
					break
				case 'set':
					Do(e) && a(s.get(vo))
					break
			}
	}
	xl()
}
function fg(e, t) {
	const n = Yi.get(e)
	return n && n.get(t)
}
function To(e) {
	const t = Ee(e)
	return t === e ? t : (rt(t, 'iterate', Fr), Vt(e) ? t : t.map(it))
}
function _s(e) {
	return rt((e = Ee(e)), 'iterate', Fr), e
}
const pg = {
	__proto__: null,
	[Symbol.iterator]() {
		return Hs(this, Symbol.iterator, it)
	},
	concat(...e) {
		return To(this).concat(...e.map((t) => (fe(t) ? To(t) : t)))
	},
	entries() {
		return Hs(this, 'entries', (e) => ((e[1] = it(e[1])), e))
	},
	every(e, t) {
		return gn(this, 'every', e, t, void 0, arguments)
	},
	filter(e, t) {
		return gn(this, 'filter', e, t, (n) => n.map(it), arguments)
	},
	find(e, t) {
		return gn(this, 'find', e, t, it, arguments)
	},
	findIndex(e, t) {
		return gn(this, 'findIndex', e, t, void 0, arguments)
	},
	findLast(e, t) {
		return gn(this, 'findLast', e, t, it, arguments)
	},
	findLastIndex(e, t) {
		return gn(this, 'findLastIndex', e, t, void 0, arguments)
	},
	forEach(e, t) {
		return gn(this, 'forEach', e, t, void 0, arguments)
	},
	includes(...e) {
		return zs(this, 'includes', e)
	},
	indexOf(...e) {
		return zs(this, 'indexOf', e)
	},
	join(e) {
		return To(this).join(e)
	},
	lastIndexOf(...e) {
		return zs(this, 'lastIndexOf', e)
	},
	map(e, t) {
		return gn(this, 'map', e, t, void 0, arguments)
	},
	pop() {
		return dr(this, 'pop')
	},
	push(...e) {
		return dr(this, 'push', e)
	},
	reduce(e, ...t) {
		return Bc(this, 'reduce', e, t)
	},
	reduceRight(e, ...t) {
		return Bc(this, 'reduceRight', e, t)
	},
	shift() {
		return dr(this, 'shift')
	},
	some(e, t) {
		return gn(this, 'some', e, t, void 0, arguments)
	},
	splice(...e) {
		return dr(this, 'splice', e)
	},
	toReversed() {
		return To(this).toReversed()
	},
	toSorted(e) {
		return To(this).toSorted(e)
	},
	toSpliced(...e) {
		return To(this).toSpliced(...e)
	},
	unshift(...e) {
		return dr(this, 'unshift', e)
	},
	values() {
		return Hs(this, 'values', it)
	},
}
function Hs(e, t, n) {
	const o = _s(e),
		r = o[t]()
	return (
		o !== e &&
			!Vt(e) &&
			((r._next = r.next),
			(r.next = () => {
				const i = r._next()
				return i.value && (i.value = n(i.value)), i
			})),
		r
	)
}
const hg = Array.prototype
function gn(e, t, n, o, r, i) {
	const s = _s(e),
		a = s !== e && !Vt(e),
		l = s[t]
	if (l !== hg[t]) {
		const d = l.apply(e, i)
		return a ? it(d) : d
	}
	let c = n
	s !== e &&
		(a
			? (c = function (d, f) {
					return n.call(this, it(d), f, e)
			  })
			: n.length > 2 &&
			  (c = function (d, f) {
					return n.call(this, d, f, e)
			  }))
	const u = l.call(s, c, o)
	return a && r ? r(u) : u
}
function Bc(e, t, n, o) {
	const r = _s(e)
	let i = n
	return (
		r !== e &&
			(Vt(e)
				? n.length > 3 &&
				  (i = function (s, a, l) {
						return n.call(this, s, a, l, e)
				  })
				: (i = function (s, a, l) {
						return n.call(this, s, it(a), l, e)
				  })),
		r[t](i, ...o)
	)
}
function zs(e, t, n) {
	const o = Ee(e)
	rt(o, 'iterate', Fr)
	const r = o[t](...n)
	return (r === -1 || r === !1) && Tl(n[0]) ? ((n[0] = Ee(n[0])), o[t](...n)) : r
}
function dr(e, t, n = []) {
	On(), El()
	const o = Ee(e)[t].apply(e, n)
	return xl(), Vn(), o
}
const mg = nr('__proto__,__v_isRef,__isVue'),
	Rf = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((e) => e !== 'arguments' && e !== 'caller')
			.map((e) => Symbol[e])
			.filter(Wt)
	)
function vg(e) {
	Wt(e) || (e = String(e))
	const t = Ee(this)
	return rt(t, 'has', e), t.hasOwnProperty(e)
}
class Df {
	constructor(t = !1, n = !1) {
		;(this._isReadonly = t), (this._isShallow = n)
	}
	get(t, n, o) {
		if (n === '__v_skip') return t.__v_skip
		const r = this._isReadonly,
			i = this._isShallow
		if (n === '__v_isReactive') return !r
		if (n === '__v_isReadonly') return r
		if (n === '__v_isShallow') return i
		if (n === '__v_raw')
			return o === (r ? (i ? Sg : jf) : i ? Ff : Nf).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0
		const s = fe(t)
		if (!r) {
			let l
			if (s && (l = pg[n])) return l
			if (n === 'hasOwnProperty') return vg
		}
		const a = Reflect.get(t, n, He(t) ? t : o)
		return (Wt(n) ? Rf.has(n) : mg(n)) || (r || rt(t, 'get', n), i)
			? a
			: He(a)
			? s && yl(n)
				? a
				: a.value
			: $e(a)
			? r
				? on(a)
				: ii(a)
			: a
	}
}
class Mf extends Df {
	constructor(t = !1) {
		super(!1, t)
	}
	set(t, n, o, r) {
		let i = t[n]
		if (!this._isShallow) {
			const l = bo(i)
			if ((!Vt(o) && !bo(o) && ((i = Ee(i)), (o = Ee(o))), !fe(t) && He(i) && !He(o)))
				return l ? !1 : ((i.value = o), !0)
		}
		const s = fe(t) && yl(n) ? Number(n) < t.length : Be(t, n),
			a = Reflect.set(t, n, o, He(t) ? t : r)
		return t === Ee(r) && (s ? mt(o, i) && Pn(t, 'set', n, o) : Pn(t, 'add', n, o)), a
	}
	deleteProperty(t, n) {
		const o = Be(t, n)
		t[n]
		const r = Reflect.deleteProperty(t, n)
		return r && o && Pn(t, 'delete', n, void 0), r
	}
	has(t, n) {
		const o = Reflect.has(t, n)
		return (!Wt(n) || !Rf.has(n)) && rt(t, 'has', n), o
	}
	ownKeys(t) {
		return rt(t, 'iterate', fe(t) ? 'length' : vo), Reflect.ownKeys(t)
	}
}
class gg extends Df {
	constructor(t = !1) {
		super(!0, t)
	}
	set(t, n) {
		return !0
	}
	deleteProperty(t, n) {
		return !0
	}
}
const _g = new Mf(),
	bg = new gg(),
	yg = new Mf(!0)
const Sa = (e) => e,
	_i = (e) => Reflect.getPrototypeOf(e)
function wg(e, t, n) {
	return function (...o) {
		const r = this.__v_raw,
			i = Ee(r),
			s = Do(i),
			a = e === 'entries' || (e === Symbol.iterator && s),
			l = e === 'keys' && s,
			c = r[e](...o),
			u = n ? Sa : t ? Ca : it
		return (
			!t && rt(i, 'iterate', l ? Pa : vo),
			{
				next() {
					const { value: d, done: f } = c.next()
					return f ? { value: d, done: f } : { value: a ? [u(d[0]), u(d[1])] : u(d), done: f }
				},
				[Symbol.iterator]() {
					return this
				},
			}
		)
	}
}
function bi(e) {
	return function (...t) {
		return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
	}
}
function kg(e, t) {
	const n = {
		get(r) {
			const i = this.__v_raw,
				s = Ee(i),
				a = Ee(r)
			e || (mt(r, a) && rt(s, 'get', r), rt(s, 'get', a))
			const { has: l } = _i(s),
				c = t ? Sa : e ? Ca : it
			if (l.call(s, r)) return c(i.get(r))
			if (l.call(s, a)) return c(i.get(a))
			i !== s && i.get(r)
		},
		get size() {
			const r = this.__v_raw
			return !e && rt(Ee(r), 'iterate', vo), Reflect.get(r, 'size', r)
		},
		has(r) {
			const i = this.__v_raw,
				s = Ee(i),
				a = Ee(r)
			return (
				e || (mt(r, a) && rt(s, 'has', r), rt(s, 'has', a)),
				r === a ? i.has(r) : i.has(r) || i.has(a)
			)
		},
		forEach(r, i) {
			const s = this,
				a = s.__v_raw,
				l = Ee(a),
				c = t ? Sa : e ? Ca : it
			return !e && rt(l, 'iterate', vo), a.forEach((u, d) => r.call(i, c(u), c(d), s))
		},
	}
	return (
		Ke(
			n,
			e
				? { add: bi('add'), set: bi('set'), delete: bi('delete'), clear: bi('clear') }
				: {
						add(r) {
							!t && !Vt(r) && !bo(r) && (r = Ee(r))
							const i = Ee(this)
							return _i(i).has.call(i, r) || (i.add(r), Pn(i, 'add', r, r)), this
						},
						set(r, i) {
							!t && !Vt(i) && !bo(i) && (i = Ee(i))
							const s = Ee(this),
								{ has: a, get: l } = _i(s)
							let c = a.call(s, r)
							c || ((r = Ee(r)), (c = a.call(s, r)))
							const u = l.call(s, r)
							return s.set(r, i), c ? mt(i, u) && Pn(s, 'set', r, i) : Pn(s, 'add', r, i), this
						},
						delete(r) {
							const i = Ee(this),
								{ has: s, get: a } = _i(i)
							let l = s.call(i, r)
							l || ((r = Ee(r)), (l = s.call(i, r))), a && a.call(i, r)
							const c = i.delete(r)
							return l && Pn(i, 'delete', r, void 0), c
						},
						clear() {
							const r = Ee(this),
								i = r.size !== 0,
								s = r.clear()
							return i && Pn(r, 'clear', void 0, void 0), s
						},
				  }
		),
		['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
			n[r] = wg(r, e, t)
		}),
		n
	)
}
function Sl(e, t) {
	const n = kg(e, t)
	return (o, r, i) =>
		r === '__v_isReactive'
			? !e
			: r === '__v_isReadonly'
			? e
			: r === '__v_raw'
			? o
			: Reflect.get(Be(n, r) && r in o ? n : o, r, i)
}
const Eg = { get: Sl(!1, !1) },
	xg = { get: Sl(!1, !0) },
	Pg = { get: Sl(!0, !1) }
const Nf = new WeakMap(),
	Ff = new WeakMap(),
	jf = new WeakMap(),
	Sg = new WeakMap()
function Cg(e) {
	switch (e) {
		case 'Object':
		case 'Array':
			return 1
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2
		default:
			return 0
	}
}
function Tg(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Cg(Wv(e))
}
function ii(e) {
	return bo(e) ? e : Cl(e, !1, _g, Eg, Nf)
}
function Hf(e) {
	return Cl(e, !1, yg, xg, Ff)
}
function on(e) {
	return Cl(e, !0, bg, Pg, jf)
}
function Cl(e, t, n, o, r) {
	if (!$e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
	const i = r.get(e)
	if (i) return i
	const s = Tg(e)
	if (s === 0) return e
	const a = new Proxy(e, s === 2 ? o : n)
	return r.set(e, a), a
}
function No(e) {
	return bo(e) ? No(e.__v_raw) : !!(e && e.__v_isReactive)
}
function bo(e) {
	return !!(e && e.__v_isReadonly)
}
function Vt(e) {
	return !!(e && e.__v_isShallow)
}
function Tl(e) {
	return e ? !!e.__v_raw : !1
}
function Ee(e) {
	const t = e && e.__v_raw
	return t ? Ee(t) : e
}
function zf(e) {
	return !Be(e, '__v_skip') && Object.isExtensible(e) && Go(e, '__v_skip', !0), e
}
const it = (e) => ($e(e) ? ii(e) : e),
	Ca = (e) => ($e(e) ? on(e) : e)
function He(e) {
	return e ? e.__v_isRef === !0 : !1
}
function R(e) {
	return qf(e, !1)
}
function Ie(e) {
	return qf(e, !0)
}
function qf(e, t) {
	return He(e) ? e : new Ag(e, t)
}
class Ag {
	constructor(t, n) {
		;(this.dep = new gs()),
			(this.__v_isRef = !0),
			(this.__v_isShallow = !1),
			(this._rawValue = n ? t : Ee(t)),
			(this._value = n ? t : it(t)),
			(this.__v_isShallow = n)
	}
	get value() {
		return this.dep.track(), this._value
	}
	set value(t) {
		const n = this._rawValue,
			o = this.__v_isShallow || Vt(t) || bo(t)
		;(t = o ? t : Ee(t)),
			mt(t, n) && ((this._rawValue = t), (this._value = o ? t : it(t)), this.dep.trigger())
	}
}
function Tn(e) {
	return He(e) ? e.value : e
}
function Et(e) {
	return _e(e) ? e() : Tn(e)
}
const Lg = {
	get: (e, t, n) => (t === '__v_raw' ? e : Tn(Reflect.get(e, t, n))),
	set: (e, t, n, o) => {
		const r = e[t]
		return He(r) && !He(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o)
	},
}
function Uf(e) {
	return No(e) ? e : new Proxy(e, Lg)
}
class Bg {
	constructor(t) {
		;(this.__v_isRef = !0), (this._value = void 0)
		const n = (this.dep = new gs()),
			{ get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n))
		;(this._get = o), (this._set = r)
	}
	get value() {
		return (this._value = this._get())
	}
	set value(t) {
		this._set(t)
	}
}
function bs(e) {
	return new Bg(e)
}
function Al(e) {
	const t = fe(e) ? new Array(e.length) : {}
	for (const n in e) t[n] = Wf(e, n)
	return t
}
class Og {
	constructor(t, n, o) {
		;(this._object = t),
			(this._key = n),
			(this._defaultValue = o),
			(this.__v_isRef = !0),
			(this._value = void 0)
	}
	get value() {
		const t = this._object[this._key]
		return (this._value = t === void 0 ? this._defaultValue : t)
	}
	set value(t) {
		this._object[this._key] = t
	}
	get dep() {
		return fg(Ee(this._object), this._key)
	}
}
class Vg {
	constructor(t) {
		;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0)
	}
	get value() {
		return (this._value = this._getter())
	}
}
function yo(e, t, n) {
	return He(e) ? e : _e(e) ? new Vg(e) : $e(e) && arguments.length > 1 ? Wf(e, t, n) : R(e)
}
function Wf(e, t, n) {
	const o = e[t]
	return He(o) ? o : new Og(e, t, n)
}
class $g {
	constructor(t, n, o) {
		;(this.fn = t),
			(this.setter = n),
			(this._value = void 0),
			(this.dep = new gs(this)),
			(this.__v_isRef = !0),
			(this.deps = void 0),
			(this.depsTail = void 0),
			(this.flags = 16),
			(this.globalVersion = Nr - 1),
			(this.next = void 0),
			(this.effect = this),
			(this.__v_isReadonly = !n),
			(this.isSSR = o)
	}
	notify() {
		if (((this.flags |= 16), !(this.flags & 8) && Ne !== this)) return Lf(this, !0), !0
	}
	get value() {
		const t = this.dep.track()
		return Vf(this), t && (t.version = this.dep.version), this._value
	}
	set value(t) {
		this.setter && this.setter(t)
	}
}
function Ig(e, t, n = !1) {
	let o, r
	return _e(e) ? (o = e) : ((o = e.get), (r = e.set)), new $g(o, r, n)
}
const yi = {},
	Qi = new WeakMap()
let uo
function Rg(e, t = !1, n = uo) {
	if (n) {
		let o = Qi.get(n)
		o || Qi.set(n, (o = [])), o.push(e)
	}
}
function Dg(e, t, n = Le) {
	const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: a, call: l } = n,
		c = (S) => (r ? S : Vt(S) || r === !1 || r === 0 ? Sn(S, 1) : Sn(S))
	let u,
		d,
		f,
		p,
		m = !1,
		v = !1
	if (
		(He(e)
			? ((d = () => e.value), (m = Vt(e)))
			: No(e)
			? ((d = () => c(e)), (m = !0))
			: fe(e)
			? ((v = !0),
			  (m = e.some((S) => No(S) || Vt(S))),
			  (d = () =>
					e.map((S) => {
						if (He(S)) return S.value
						if (No(S)) return c(S)
						if (_e(S)) return l ? l(S, 2) : S()
					})))
			: _e(e)
			? t
				? (d = l ? () => l(e, 2) : e)
				: (d = () => {
						if (f) {
							On()
							try {
								f()
							} finally {
								Vn()
							}
						}
						const S = uo
						uo = u
						try {
							return l ? l(e, 3, [p]) : e(p)
						} finally {
							uo = S
						}
				  })
			: (d = nn),
		t && r)
	) {
		const S = d,
			I = r === !0 ? 1 / 0 : r
		d = () => Sn(S(), I)
	}
	const b = Cf(),
		w = () => {
			u.stop(), b && b.active && bl(b.effects, u)
		}
	if (i && t) {
		const S = t
		t = (...I) => {
			S(...I), w()
		}
	}
	let P = v ? new Array(e.length).fill(yi) : yi
	const y = (S) => {
		if (!(!(u.flags & 1) || (!u.dirty && !S)))
			if (t) {
				const I = u.run()
				if (r || m || (v ? I.some((j, U) => mt(j, P[U])) : mt(I, P))) {
					f && f()
					const j = uo
					uo = u
					try {
						const U = [I, P === yi ? void 0 : v && P[0] === yi ? [] : P, p]
						l ? l(t, 3, U) : t(...U), (P = I)
					} finally {
						uo = j
					}
				}
			} else u.run()
	}
	return (
		a && a(y),
		(u = new Tf(d)),
		(u.scheduler = s ? () => s(y, !1) : y),
		(p = (S) => Rg(S, !1, u)),
		(f = u.onStop =
			() => {
				const S = Qi.get(u)
				if (S) {
					if (l) l(S, 4)
					else for (const I of S) I()
					Qi.delete(u)
				}
			}),
		t ? (o ? y(!0) : (P = u.run())) : s ? s(y.bind(null, !0), !0) : u.run(),
		(w.pause = u.pause.bind(u)),
		(w.resume = u.resume.bind(u)),
		(w.stop = w),
		w
	)
}
function Sn(e, t = 1 / 0, n) {
	if (t <= 0 || !$e(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
	if ((n.add(e), t--, He(e))) Sn(e.value, t, n)
	else if (fe(e)) for (let o = 0; o < e.length; o++) Sn(e[o], t, n)
	else if (or(e) || Do(e))
		e.forEach((o) => {
			Sn(o, t, n)
		})
	else if (kf(e)) {
		for (const o in e) Sn(e[o], t, n)
		for (const o of Object.getOwnPropertySymbols(e))
			Object.prototype.propertyIsEnumerable.call(e, o) && Sn(e[o], t, n)
	}
	return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Sr = []
let qs = !1
function Hn(e, ...t) {
	if (qs) return
	;(qs = !0), On()
	const n = Sr.length ? Sr[Sr.length - 1].component : null,
		o = n && n.appContext.config.warnHandler,
		r = Mg()
	if (o)
		rr(o, n, 11, [
			e +
				t
					.map((i) => {
						var s, a
						return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null
							? a
							: JSON.stringify(i)
					})
					.join(''),
			n && n.proxy,
			r.map(({ vnode: i }) => `at <${Up(n, i.type)}>`).join(`
`),
			r,
		])
	else {
		const i = [`[Vue warn]: ${e}`, ...t]
		r.length &&
			i.push(
				`
`,
				...Ng(r)
			),
			console.warn(...i)
	}
	Vn(), (qs = !1)
}
function Mg() {
	let e = Sr[Sr.length - 1]
	if (!e) return []
	const t = []
	for (; e; ) {
		const n = t[0]
		n && n.vnode === e ? n.recurseCount++ : t.push({ vnode: e, recurseCount: 0 })
		const o = e.component && e.component.parent
		e = o && o.vnode
	}
	return t
}
function Ng(e) {
	const t = []
	return (
		e.forEach((n, o) => {
			t.push(
				...(o === 0
					? []
					: [
							`
`,
					  ]),
				...Fg(n)
			)
		}),
		t
	)
}
function Fg({ vnode: e, recurseCount: t }) {
	const n = t > 0 ? `... (${t} recursive calls)` : '',
		o = e.component ? e.component.parent == null : !1,
		r = ` at <${Up(e.component, e.type, o)}`,
		i = '>' + n
	return e.props ? [r, ...jg(e.props), i] : [r + i]
}
function jg(e) {
	const t = [],
		n = Object.keys(e)
	return (
		n.slice(0, 3).forEach((o) => {
			t.push(...Gf(o, e[o]))
		}),
		n.length > 3 && t.push(' ...'),
		t
	)
}
function Gf(e, t, n) {
	return Ve(t)
		? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
		: typeof t == 'number' || typeof t == 'boolean' || t == null
		? n
			? t
			: [`${e}=${t}`]
		: He(t)
		? ((t = Gf(e, Ee(t.value), !0)), n ? t : [`${e}=Ref<`, t, '>'])
		: _e(t)
		? [`${e}=fn${t.name ? `<${t.name}>` : ''}`]
		: ((t = Ee(t)), n ? t : [`${e}=`, t])
}
function rr(e, t, n, o) {
	try {
		return o ? e(...o) : e()
	} catch (r) {
		si(r, t, n)
	}
}
function Gt(e, t, n, o) {
	if (_e(e)) {
		const r = rr(e, t, n, o)
		return (
			r &&
				yf(r) &&
				r.catch((i) => {
					si(i, t, n)
				}),
			r
		)
	}
	if (fe(e)) {
		const r = []
		for (let i = 0; i < e.length; i++) r.push(Gt(e[i], t, n, o))
		return r
	}
}
function si(e, t, n, o = !0) {
	const r = t ? t.vnode : null,
		{ errorHandler: i, throwUnhandledErrorInProduction: s } = (t && t.appContext.config) || Le
	if (t) {
		let a = t.parent
		const l = t.proxy,
			c = `https://vuejs.org/error-reference/#runtime-${n}`
		for (; a; ) {
			const u = a.ec
			if (u) {
				for (let d = 0; d < u.length; d++) if (u[d](e, l, c) === !1) return
			}
			a = a.parent
		}
		if (i) {
			On(), rr(i, null, 10, [e, l, c]), Vn()
			return
		}
	}
	Hg(e, n, r, o, s)
}
function Hg(e, t, n, o = !0, r = !1) {
	if (r) throw e
	console.error(e)
}
const dt = []
let Xt = -1
const Fo = []
let Un = null,
	Oo = 0
const Kf = Promise.resolve()
let Ji = null
function ht(e) {
	const t = Ji || Kf
	return e ? t.then(this ? e.bind(this) : e) : t
}
function zg(e) {
	let t = Xt + 1,
		n = dt.length
	for (; t < n; ) {
		const o = (t + n) >>> 1,
			r = dt[o],
			i = jr(r)
		i < e || (i === e && r.flags & 2) ? (t = o + 1) : (n = o)
	}
	return t
}
function Ll(e) {
	if (!(e.flags & 1)) {
		const t = jr(e),
			n = dt[dt.length - 1]
		!n || (!(e.flags & 2) && t >= jr(n)) ? dt.push(e) : dt.splice(zg(t), 0, e), (e.flags |= 1), Yf()
	}
}
function Yf() {
	Ji || (Ji = Kf.then(Qf))
}
function qg(e) {
	fe(e)
		? Fo.push(...e)
		: Un && e.id === -1
		? Un.splice(Oo + 1, 0, e)
		: e.flags & 1 || (Fo.push(e), (e.flags |= 1)),
		Yf()
}
function Oc(e, t, n = Xt + 1) {
	for (; n < dt.length; n++) {
		const o = dt[n]
		if (o && o.flags & 2) {
			if (e && o.id !== e.uid) continue
			dt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
		}
	}
}
function Xi(e) {
	if (Fo.length) {
		const t = [...new Set(Fo)].sort((n, o) => jr(n) - jr(o))
		if (((Fo.length = 0), Un)) {
			Un.push(...t)
			return
		}
		for (Un = t, Oo = 0; Oo < Un.length; Oo++) {
			const n = Un[Oo]
			n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
		}
		;(Un = null), (Oo = 0)
	}
}
const jr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Qf(e) {
	try {
		for (Xt = 0; Xt < dt.length; Xt++) {
			const t = dt[Xt]
			t &&
				!(t.flags & 8) &&
				(t.flags & 4 && (t.flags &= -2), rr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
		}
	} finally {
		for (; Xt < dt.length; Xt++) {
			const t = dt[Xt]
			t && (t.flags &= -2)
		}
		;(Xt = -1), (dt.length = 0), Xi(), (Ji = null), (dt.length || Fo.length) && Qf()
	}
}
let tn,
	yr = [],
	Ta = !1
function ys(e, ...t) {
	tn ? tn.emit(e, ...t) : Ta || yr.push({ event: e, args: t })
}
function Jf(e, t) {
	var n, o
	;(tn = e),
		tn
			? ((tn.enabled = !0), yr.forEach(({ event: r, args: i }) => tn.emit(r, ...i)), (yr = []))
			: typeof window < 'u' &&
			  window.HTMLElement &&
			  !(
					(o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes('jsdom')
			  )
			? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
					Jf(i, t)
			  }),
			  setTimeout(() => {
					tn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Ta = !0), (yr = []))
			  }, 3e3))
			: ((Ta = !0), (yr = []))
}
function Ug(e, t) {
	ys('app:init', e, t, { Fragment: K, Text: Qn, Comment: Ze, Static: Ho })
}
function Wg(e) {
	ys('app:unmount', e)
}
const Gg = Bl('component:added'),
	Xf = Bl('component:updated'),
	Kg = Bl('component:removed'),
	Yg = (e) => {
		tn && typeof tn.cleanupBuffer == 'function' && !tn.cleanupBuffer(e) && Kg(e)
	}
/*! #__NO_SIDE_EFFECTS__ */ function Bl(e) {
	return (t) => {
		ys(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t)
	}
}
function Qg(e, t, n) {
	ys('component:emit', e.appContext.app, e, t, n)
}
let Je = null,
	ws = null
function Zi(e) {
	const t = Je
	return (Je = e), (ws = (e && e.type.__scopeId) || null), t
}
function Jg(e) {
	ws = e
}
function Xg() {
	ws = null
}
const Zg = (e) => T
function T(e, t = Je, n) {
	if (!t || e._n) return e
	const o = (...r) => {
		o._d && Kc(-1)
		const i = Zi(t)
		let s
		try {
			s = e(...r)
		} finally {
			Zi(i), o._d && Kc(1)
		}
		return Xf(t), s
	}
	return (o._n = !0), (o._c = !0), (o._d = !0), o
}
function Ft(e, t) {
	if (Je === null) return e
	const n = Ps(Je),
		o = e.dirs || (e.dirs = [])
	for (let r = 0; r < t.length; r++) {
		let [i, s, a, l = Le] = t[r]
		i &&
			(_e(i) && (i = { mounted: i, updated: i }),
			i.deep && Sn(s),
			o.push({ dir: i, instance: n, value: s, oldValue: void 0, arg: a, modifiers: l }))
	}
	return e
}
function Zt(e, t, n, o) {
	const r = e.dirs,
		i = t && t.dirs
	for (let s = 0; s < r.length; s++) {
		const a = r[s]
		i && (a.oldValue = i[s].value)
		let l = a.dir[o]
		l && (On(), Gt(l, n, 8, [e.el, a, e, t]), Vn())
	}
}
const Zf = Symbol('_vte'),
	ep = (e) => e.__isTeleport,
	Cr = (e) => e && (e.disabled || e.disabled === ''),
	Vc = (e) => e && (e.defer || e.defer === ''),
	$c = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
	Ic = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
	Aa = (e, t) => {
		const n = e && e.to
		return Ve(n) ? (t ? t(n) : null) : n
	},
	tp = {
		name: 'Teleport',
		__isTeleport: !0,
		process(e, t, n, o, r, i, s, a, l, c) {
			const {
					mc: u,
					pc: d,
					pbc: f,
					o: { insert: p, querySelector: m, createText: v, createComment: b },
				} = c,
				w = Cr(t.props)
			let { shapeFlag: P, children: y, dynamicChildren: S } = t
			if (e == null) {
				const I = (t.el = v('')),
					j = (t.anchor = v(''))
				p(I, n, o), p(j, n, o)
				const U = (q, V) => {
						P & 16 && (r && r.isCE && (r.ce._teleportTarget = q), u(y, q, V, r, i, s, a, l))
					},
					Z = () => {
						const q = (t.target = Aa(t.props, m)),
							V = np(q, t, v, p)
						q &&
							(s !== 'svg' && $c(q) ? (s = 'svg') : s !== 'mathml' && Ic(q) && (s = 'mathml'),
							w || (U(q, V), Mi(t, !1)))
					}
				w && (U(n, j), Mi(t, !0)),
					Vc(t.props)
						? ct(() => {
								Z(), (t.el.__isMounted = !0)
						  }, i)
						: Z()
			} else {
				if (Vc(t.props) && !e.el.__isMounted) {
					ct(() => {
						tp.process(e, t, n, o, r, i, s, a, l, c), delete e.el.__isMounted
					}, i)
					return
				}
				;(t.el = e.el), (t.targetStart = e.targetStart)
				const I = (t.anchor = e.anchor),
					j = (t.target = e.target),
					U = (t.targetAnchor = e.targetAnchor),
					Z = Cr(e.props),
					q = Z ? n : j,
					V = Z ? I : U
				if (
					(s === 'svg' || $c(j) ? (s = 'svg') : (s === 'mathml' || Ic(j)) && (s = 'mathml'),
					S
						? (f(e.dynamicChildren, S, q, r, i, s, a), Rl(e, t, !0))
						: l || d(e, t, q, V, r, i, s, a, !1),
					w)
				)
					Z
						? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
						: wi(t, n, I, c, 1)
				else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					const W = (t.target = Aa(t.props, m))
					W && wi(t, W, null, c, 0)
				} else Z && wi(t, j, U, c, 1)
				Mi(t, w)
			}
		},
		remove(e, t, n, { um: o, o: { remove: r } }, i) {
			const {
				shapeFlag: s,
				children: a,
				anchor: l,
				targetStart: c,
				targetAnchor: u,
				target: d,
				props: f,
			} = e
			if ((d && (r(c), r(u)), i && r(l), s & 16)) {
				const p = i || !Cr(f)
				for (let m = 0; m < a.length; m++) {
					const v = a[m]
					o(v, t, n, p, !!v.dynamicChildren)
				}
			}
		},
		move: wi,
		hydrate: e1,
	}
function wi(e, t, n, { o: { insert: o }, m: r }, i = 2) {
	i === 0 && o(e.targetAnchor, t, n)
	const { el: s, anchor: a, shapeFlag: l, children: c, props: u } = e,
		d = i === 2
	if ((d && o(s, t, n), (!d || Cr(u)) && l & 16))
		for (let f = 0; f < c.length; f++) r(c[f], t, n, 2)
	d && o(a, t, n)
}
function e1(
	e,
	t,
	n,
	o,
	r,
	i,
	{ o: { nextSibling: s, parentNode: a, querySelector: l, insert: c, createText: u } },
	d
) {
	const f = (t.target = Aa(t.props, l))
	if (f) {
		const p = Cr(t.props),
			m = f._lpa || f.firstChild
		if (t.shapeFlag & 16)
			if (p)
				(t.anchor = d(s(e), t, a(e), n, o, r, i)), (t.targetStart = m), (t.targetAnchor = m && s(m))
			else {
				t.anchor = s(e)
				let v = m
				for (; v; ) {
					if (v && v.nodeType === 8) {
						if (v.data === 'teleport start anchor') t.targetStart = v
						else if (v.data === 'teleport anchor') {
							;(t.targetAnchor = v), (f._lpa = t.targetAnchor && s(t.targetAnchor))
							break
						}
					}
					v = s(v)
				}
				t.targetAnchor || np(f, t, u, c), d(m && s(m), t, f, n, o, r, i)
			}
		Mi(t, p)
	}
	return t.anchor && s(t.anchor)
}
const gO = tp
function Mi(e, t) {
	const n = e.ctx
	if (n && n.ut) {
		let o, r
		for (
			t ? ((o = e.el), (r = e.anchor)) : ((o = e.targetStart), (r = e.targetAnchor));
			o && o !== r;

		)
			o.nodeType === 1 && o.setAttribute('data-v-owner', n.uid), (o = o.nextSibling)
		n.ut()
	}
}
function np(e, t, n, o) {
	const r = (t.targetStart = n('')),
		i = (t.targetAnchor = n(''))
	return (r[Zf] = i), e && (o(r, e), o(i, e)), i
}
const Wn = Symbol('_leaveCb'),
	ki = Symbol('_enterCb')
function t1() {
	const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
	return (
		ke(() => {
			e.isMounted = !0
		}),
		Vl(() => {
			e.isUnmounting = !0
		}),
		e
	)
}
const Ct = [Function, Array],
	op = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: Ct,
		onEnter: Ct,
		onAfterEnter: Ct,
		onEnterCancelled: Ct,
		onBeforeLeave: Ct,
		onLeave: Ct,
		onAfterLeave: Ct,
		onLeaveCancelled: Ct,
		onBeforeAppear: Ct,
		onAppear: Ct,
		onAfterAppear: Ct,
		onAppearCancelled: Ct,
	},
	rp = (e) => {
		const t = e.subTree
		return t.component ? rp(t.component) : t
	},
	n1 = {
		name: 'BaseTransition',
		props: op,
		setup(e, { slots: t }) {
			const n = pn(),
				o = t1()
			return () => {
				const r = t.default && ap(t.default(), !0)
				if (!r || !r.length) return
				const i = ip(r),
					s = Ee(e),
					{ mode: a } = s
				if (o.isLeaving) return Us(i)
				const l = Rc(i)
				if (!l) return Us(i)
				let c = La(l, s, o, n, (d) => (c = d))
				l.type !== Ze && Hr(l, c)
				let u = n.subTree && Rc(n.subTree)
				if (u && u.type !== Ze && !ho(l, u) && rp(n).type !== Ze) {
					let d = La(u, s, o, n)
					if ((Hr(u, d), a === 'out-in' && l.type !== Ze))
						return (
							(o.isLeaving = !0),
							(d.afterLeave = () => {
								;(o.isLeaving = !1),
									n.job.flags & 8 || n.update(),
									delete d.afterLeave,
									(u = void 0)
							}),
							Us(i)
						)
					a === 'in-out' && l.type !== Ze
						? (d.delayLeave = (f, p, m) => {
								const v = sp(o, u)
								;(v[String(u.key)] = u),
									(f[Wn] = () => {
										p(), (f[Wn] = void 0), delete c.delayedLeave, (u = void 0)
									}),
									(c.delayedLeave = () => {
										m(), delete c.delayedLeave, (u = void 0)
									})
						  })
						: (u = void 0)
				} else u && (u = void 0)
				return i
			}
		},
	}
function ip(e) {
	let t = e[0]
	if (e.length > 1) {
		for (const n of e)
			if (n.type !== Ze) {
				t = n
				break
			}
	}
	return t
}
const o1 = n1
function sp(e, t) {
	const { leavingVNodes: n } = e
	let o = n.get(t.type)
	return o || ((o = Object.create(null)), n.set(t.type, o)), o
}
function La(e, t, n, o, r) {
	const {
			appear: i,
			mode: s,
			persisted: a = !1,
			onBeforeEnter: l,
			onEnter: c,
			onAfterEnter: u,
			onEnterCancelled: d,
			onBeforeLeave: f,
			onLeave: p,
			onAfterLeave: m,
			onLeaveCancelled: v,
			onBeforeAppear: b,
			onAppear: w,
			onAfterAppear: P,
			onAppearCancelled: y,
		} = t,
		S = String(e.key),
		I = sp(n, e),
		j = (q, V) => {
			q && Gt(q, o, 9, V)
		},
		U = (q, V) => {
			const W = V[1]
			j(q, V), fe(q) ? q.every((z) => z.length <= 1) && W() : q.length <= 1 && W()
		},
		Z = {
			mode: s,
			persisted: a,
			beforeEnter(q) {
				let V = l
				if (!n.isMounted)
					if (i) V = b || l
					else return
				q[Wn] && q[Wn](!0)
				const W = I[S]
				W && ho(e, W) && W.el[Wn] && W.el[Wn](), j(V, [q])
			},
			enter(q) {
				let V = c,
					W = u,
					z = d
				if (!n.isMounted)
					if (i) (V = w || c), (W = P || u), (z = y || d)
					else return
				let oe = !1
				const me = (q[ki] = (we) => {
					oe ||
						((oe = !0),
						we ? j(z, [q]) : j(W, [q]),
						Z.delayedLeave && Z.delayedLeave(),
						(q[ki] = void 0))
				})
				V ? U(V, [q, me]) : me()
			},
			leave(q, V) {
				const W = String(e.key)
				if ((q[ki] && q[ki](!0), n.isUnmounting)) return V()
				j(f, [q])
				let z = !1
				const oe = (q[Wn] = (me) => {
					z ||
						((z = !0), V(), me ? j(v, [q]) : j(m, [q]), (q[Wn] = void 0), I[W] === e && delete I[W])
				})
				;(I[W] = e), p ? U(p, [q, oe]) : oe()
			},
			clone(q) {
				const V = La(q, t, n, o, r)
				return r && r(V), V
			},
		}
	return Z
}
function Us(e) {
	if (ai(e)) return (e = Bn(e)), (e.children = null), e
}
function Rc(e) {
	if (!ai(e)) return ep(e.type) && e.children ? ip(e.children) : e
	const { shapeFlag: t, children: n } = e
	if (n) {
		if (t & 16) return n[0]
		if (t & 32 && _e(n.default)) return n.default()
	}
}
function Hr(e, t) {
	e.shapeFlag & 6 && e.component
		? ((e.transition = t), Hr(e.component.subTree, t))
		: e.shapeFlag & 128
		? ((e.ssContent.transition = t.clone(e.ssContent)),
		  (e.ssFallback.transition = t.clone(e.ssFallback)))
		: (e.transition = t)
}
function ap(e, t = !1, n) {
	let o = [],
		r = 0
	for (let i = 0; i < e.length; i++) {
		let s = e[i]
		const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i)
		s.type === K
			? (s.patchFlag & 128 && r++, (o = o.concat(ap(s.children, t, a))))
			: (t || s.type !== Ze) && o.push(a != null ? Bn(s, { key: a }) : s)
	}
	if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2
	return o
}
/*! #__NO_SIDE_EFFECTS__ */ function $(e, t) {
	return _e(e) ? Ke({ name: e.name }, t, { setup: e }) : e
}
function r1() {
	const e = pn()
	return e ? (e.appContext.config.idPrefix || 'v') + '-' + e.ids[0] + e.ids[1]++ : ''
}
function Ol(e) {
	e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function zr(e, t, n, o, r = !1) {
	if (fe(e)) {
		e.forEach((m, v) => zr(m, t && (fe(t) ? t[v] : t), n, o, r))
		return
	}
	if (go(o) && !r) {
		o.shapeFlag & 512 &&
			o.type.__asyncResolved &&
			o.component.subTree.component &&
			zr(e, t, n, o.component.subTree)
		return
	}
	const i = o.shapeFlag & 4 ? Ps(o.component) : o.el,
		s = r ? null : i,
		{ i: a, r: l } = e,
		c = t && t.r,
		u = a.refs === Le ? (a.refs = {}) : a.refs,
		d = a.setupState,
		f = Ee(d),
		p = d === Le ? () => !1 : (m) => Be(f, m)
	if (
		(c != null &&
			c !== l &&
			(Ve(c) ? ((u[c] = null), p(c) && (d[c] = null)) : He(c) && (c.value = null)),
		_e(l))
	)
		rr(l, a, 12, [s, u])
	else {
		const m = Ve(l),
			v = He(l)
		if (m || v) {
			const b = () => {
				if (e.f) {
					const w = m ? (p(l) ? d[l] : u[l]) : l.value
					r
						? fe(w) && bl(w, i)
						: fe(w)
						? w.includes(i) || w.push(i)
						: m
						? ((u[l] = [i]), p(l) && (d[l] = u[l]))
						: ((l.value = [i]), e.k && (u[e.k] = l.value))
				} else m ? ((u[l] = s), p(l) && (d[l] = s)) : v && ((l.value = s), e.k && (u[e.k] = s))
			}
			s ? ((b.id = -1), ct(b, n)) : b()
		}
	}
}
let Dc = !1
const ro = () => {
		Dc || (console.error('Hydration completed but contains mismatches.'), (Dc = !0))
	},
	i1 = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
	s1 = (e) => e.namespaceURI.includes('MathML'),
	Ei = (e) => {
		if (e.nodeType === 1) {
			if (i1(e)) return 'svg'
			if (s1(e)) return 'mathml'
		}
	},
	po = (e) => e.nodeType === 8
function a1(e) {
	const {
			mt: t,
			p: n,
			o: {
				patchProp: o,
				createText: r,
				nextSibling: i,
				parentNode: s,
				remove: a,
				insert: l,
				createComment: c,
			},
		} = e,
		u = (y, S) => {
			if (!S.hasChildNodes()) {
				Hn(
					'Attempting to hydrate existing markup but container is empty. Performing full mount instead.'
				),
					n(null, y, S),
					Xi(),
					(S._vnode = y)
				return
			}
			d(S.firstChild, y, null, null, null), Xi(), (S._vnode = y)
		},
		d = (y, S, I, j, U, Z = !1) => {
			Z = Z || !!S.dynamicChildren
			const q = po(y) && y.data === '[',
				V = () => v(y, S, I, j, U, q),
				{ type: W, ref: z, shapeFlag: oe, patchFlag: me } = S
			let we = y.nodeType
			;(S.el = y),
				Go(y, '__vnode', S, !0),
				Go(y, '__vueParentComponent', I, !0),
				me === -2 && ((Z = !1), (S.dynamicChildren = null))
			let re = null
			switch (W) {
				case Qn:
					we !== 3
						? S.children === ''
							? (l((S.el = r('')), s(y), y), (re = y))
							: (re = V())
						: (y.data !== S.children &&
								(Hn(
									'Hydration text mismatch in',
									y.parentNode,
									`
  - rendered on server: ${JSON.stringify(y.data)}
  - expected on client: ${JSON.stringify(S.children)}`
								),
								ro(),
								(y.data = S.children)),
						  (re = i(y)))
					break
				case Ze:
					P(y)
						? ((re = i(y)), w((S.el = y.content.firstChild), y, I))
						: we !== 8 || q
						? (re = V())
						: (re = i(y))
					break
				case Ho:
					if ((q && ((y = i(y)), (we = y.nodeType)), we === 1 || we === 3)) {
						re = y
						const de = !S.children.length
						for (let le = 0; le < S.staticCount; le++)
							de && (S.children += re.nodeType === 1 ? re.outerHTML : re.data),
								le === S.staticCount - 1 && (S.anchor = re),
								(re = i(re))
						return q ? i(re) : re
					} else V()
					break
				case K:
					q ? (re = m(y, S, I, j, U, Z)) : (re = V())
					break
				default:
					if (oe & 1)
						(we !== 1 || S.type.toLowerCase() !== y.tagName.toLowerCase()) && !P(y)
							? (re = V())
							: (re = f(y, S, I, j, U, Z))
					else if (oe & 6) {
						S.slotScopeIds = U
						const de = s(y)
						if (
							(q
								? (re = b(y))
								: po(y) && y.data === 'teleport start'
								? (re = b(y, y.data, 'teleport end'))
								: (re = i(y)),
							t(S, de, null, I, j, Ei(de), Z),
							go(S) && !S.type.__asyncResolved)
						) {
							let le
							q
								? ((le = O(K)), (le.anchor = re ? re.previousSibling : de.lastChild))
								: (le = y.nodeType === 3 ? Te('') : O('div')),
								(le.el = y),
								(S.component.subTree = le)
						}
					} else
						oe & 64
							? we !== 8
								? (re = V())
								: (re = S.type.hydrate(y, S, I, j, U, Z, e, p))
							: oe & 128
							? (re = S.type.hydrate(y, S, I, j, Ei(s(y)), U, Z, e, d))
							: Hn('Invalid HostVNode type:', W, `(${typeof W})`)
			}
			return z != null && zr(z, null, j, S), re
		},
		f = (y, S, I, j, U, Z) => {
			Z = Z || !!S.dynamicChildren
			const { type: q, props: V, patchFlag: W, shapeFlag: z, dirs: oe, transition: me } = S,
				we = q === 'input' || q === 'option'
			if (we || W !== -1) {
				oe && Zt(S, null, I, 'created')
				let re = !1
				if (P(y)) {
					re = Lp(null, me) && I && I.vnode.props && I.vnode.props.appear
					const le = y.content.firstChild
					re && me.beforeEnter(le), w(le, y, I), (S.el = y = le)
				}
				if (z & 16 && !(V && (V.innerHTML || V.textContent))) {
					let le = p(y.firstChild, S, y, I, j, U, Z),
						ye = !1
					for (; le; ) {
						wr(y, 1) ||
							(ye ||
								(Hn(
									'Hydration children mismatch on',
									y,
									`
Server rendered element contains more child nodes than client vdom.`
								),
								(ye = !0)),
							ro())
						const tt = le
						;(le = le.nextSibling), a(tt)
					}
				} else if (z & 8) {
					let le = S.children
					le[0] ===
						`
` &&
						(y.tagName === 'PRE' || y.tagName === 'TEXTAREA') &&
						(le = le.slice(1)),
						y.textContent !== le &&
							(wr(y, 0) ||
								(Hn(
									'Hydration text content mismatch on',
									y,
									`
  - rendered on server: ${y.textContent}
  - expected on client: ${S.children}`
								),
								ro()),
							(y.textContent = S.children))
				}
				if (V) {
					const le = y.tagName.includes('-')
					for (const ye in V)
						!(oe && oe.some((tt) => tt.dir.created)) && l1(y, ye, V[ye], S, I) && ro(),
							((we && (ye.endsWith('value') || ye === 'indeterminate')) ||
								(ni(ye) && !Mo(ye)) ||
								ye[0] === '.' ||
								le) &&
								o(y, ye, null, V[ye], void 0, I)
				}
				let de
				;(de = V && V.onVnodeBeforeMount) && Tt(de, I, S),
					oe && Zt(S, null, I, 'beforeMount'),
					((de = V && V.onVnodeMounted) || oe || re) &&
						Mp(() => {
							de && Tt(de, I, S), re && me.enter(y), oe && Zt(S, null, I, 'mounted')
						}, j)
			}
			return y.nextSibling
		},
		p = (y, S, I, j, U, Z, q) => {
			q = q || !!S.dynamicChildren
			const V = S.children,
				W = V.length
			let z = !1
			for (let oe = 0; oe < W; oe++) {
				const me = q ? V[oe] : (V[oe] = Lt(V[oe])),
					we = me.type === Qn
				y
					? (we &&
							!q &&
							oe + 1 < W &&
							Lt(V[oe + 1]).type === Qn &&
							(l(r(y.data.slice(me.children.length)), I, i(y)), (y.data = me.children)),
					  (y = d(y, me, j, U, Z, q)))
					: we && !me.children
					? l((me.el = r('')), I)
					: (wr(I, 1) ||
							(z ||
								(Hn(
									'Hydration children mismatch on',
									I,
									`
Server rendered element contains fewer child nodes than client vdom.`
								),
								(z = !0)),
							ro()),
					  n(null, me, I, null, j, U, Ei(I), Z))
			}
			return y
		},
		m = (y, S, I, j, U, Z) => {
			const { slotScopeIds: q } = S
			q && (U = U ? U.concat(q) : q)
			const V = s(y),
				W = p(i(y), S, V, I, j, U, Z)
			return W && po(W) && W.data === ']'
				? i((S.anchor = W))
				: (ro(), l((S.anchor = c(']')), V, W), W)
		},
		v = (y, S, I, j, U, Z) => {
			if (
				(wr(y.parentElement, 1) ||
					(Hn(
						`Hydration node mismatch:
- rendered on server:`,
						y,
						y.nodeType === 3 ? '(text)' : po(y) && y.data === '[' ? '(start of fragment)' : '',
						`
- expected on client:`,
						S.type
					),
					ro()),
				(S.el = null),
				Z)
			) {
				const W = b(y)
				for (;;) {
					const z = i(y)
					if (z && z !== W) a(z)
					else break
				}
			}
			const q = i(y),
				V = s(y)
			return a(y), n(null, S, V, q, I, j, Ei(V), U), I && ((I.vnode.el = S.el), Rp(I, S.el)), q
		},
		b = (y, S = '[', I = ']') => {
			let j = 0
			for (; y; )
				if (((y = i(y)), y && po(y) && (y.data === S && j++, y.data === I))) {
					if (j === 0) return i(y)
					j--
				}
			return y
		},
		w = (y, S, I) => {
			const j = S.parentNode
			j && j.replaceChild(y, S)
			let U = I
			for (; U; ) U.vnode.el === S && (U.vnode.el = U.subTree.el = y), (U = U.parent)
		},
		P = (y) => y.nodeType === 1 && y.tagName === 'TEMPLATE'
	return [u, d]
}
function l1(e, t, n, o, r) {
	let i, s, a, l
	if (t === 'class')
		(a = e.getAttribute('class')), (l = J(n)), c1(Mc(a || ''), Mc(l)) || ((i = 2), (s = 'class'))
	else if (t === 'style') {
		;(a = e.getAttribute('style') || ''), (l = Ve(n) ? n : eg(xe(n)))
		const c = Nc(a),
			u = Nc(l)
		if (o.dirs)
			for (const { dir: d, value: f } of o.dirs) d.name === 'show' && !f && u.set('display', 'none')
		r && lp(r, o, u), u1(c, u) || ((i = 3), (s = 'style'))
	} else
		((e instanceof SVGElement && og(t)) || (e instanceof HTMLElement && (Ac(t) || ng(t)))) &&
			(Ac(t)
				? ((a = e.hasAttribute(t)), (l = wl(n)))
				: n == null
				? ((a = e.hasAttribute(t)), (l = !1))
				: (e.hasAttribute(t)
						? (a = e.getAttribute(t))
						: t === 'value' && e.tagName === 'TEXTAREA'
						? (a = e.value)
						: (a = !1),
				  (l = rg(n) ? String(n) : !1)),
			a !== l && ((i = 4), (s = t)))
	if (i != null && !wr(e, i)) {
		const c = (f) => (f === !1 ? '(not rendered)' : `${s}="${f}"`),
			u = `Hydration ${cp[i]} mismatch on`,
			d = `
  - rendered on server: ${c(a)}
  - expected on client: ${c(l)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`
		return Hn(u, e, d), !0
	}
	return !1
}
function Mc(e) {
	return new Set(e.trim().split(/\s+/))
}
function c1(e, t) {
	if (e.size !== t.size) return !1
	for (const n of e) if (!t.has(n)) return !1
	return !0
}
function Nc(e) {
	const t = new Map()
	for (const n of e.split(';')) {
		let [o, r] = n.split(':')
		;(o = o.trim()), (r = r && r.trim()), o && r && t.set(o, r)
	}
	return t
}
function u1(e, t) {
	if (e.size !== t.size) return !1
	for (const [n, o] of e) if (o !== t.get(n)) return !1
	return !0
}
function lp(e, t, n) {
	const o = e.subTree
	if (e.getCssVars && (t === o || (o && o.type === K && o.children.includes(t)))) {
		const r = e.getCssVars()
		for (const i in r) n.set(`--${sg(i)}`, String(r[i]))
	}
	t === o && e.parent && lp(e.parent, e.vnode, n)
}
const Fc = 'data-allow-mismatch',
	cp = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function wr(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(Fc); ) e = e.parentElement
	const n = e && e.getAttribute(Fc)
	if (n == null) return !1
	if (n === '') return !0
	{
		const o = n.split(',')
		return t === 0 && o.includes('children') ? !0 : n.split(',').includes(cp[t])
	}
}
vs().requestIdleCallback
vs().cancelIdleCallback
function d1(e, t) {
	if (po(e) && e.data === '[') {
		let n = 1,
			o = e.nextSibling
		for (; o; ) {
			if (o.nodeType === 1) {
				if (t(o) === !1) break
			} else if (po(o))
				if (o.data === ']') {
					if (--n === 0) break
				} else o.data === '[' && n++
			o = o.nextSibling
		}
	} else t(e)
}
const go = (e) => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function ks(e) {
	_e(e) && (e = { loader: e })
	const {
		loader: t,
		loadingComponent: n,
		errorComponent: o,
		delay: r = 200,
		hydrate: i,
		timeout: s,
		suspensible: a = !0,
		onError: l,
	} = e
	let c = null,
		u,
		d = 0
	const f = () => (d++, (c = null), p()),
		p = () => {
			let m
			return (
				c ||
				(m = c =
					t()
						.catch((v) => {
							if (((v = v instanceof Error ? v : new Error(String(v))), l))
								return new Promise((b, w) => {
									l(
										v,
										() => b(f()),
										() => w(v),
										d + 1
									)
								})
							throw v
						})
						.then((v) =>
							m !== c && c
								? c
								: (v && (v.__esModule || v[Symbol.toStringTag] === 'Module') && (v = v.default),
								  (u = v),
								  v)
						))
			)
		}
	return $({
		name: 'AsyncComponentWrapper',
		__asyncLoader: p,
		__asyncHydrate(m, v, b) {
			const w = i
				? () => {
						const P = i(b, (y) => d1(m, y))
						P && (v.bum || (v.bum = [])).push(P)
				  }
				: b
			u ? w() : p().then(() => !v.isUnmounted && w())
		},
		get __asyncResolved() {
			return u
		},
		setup() {
			const m = Qe
			if ((Ol(m), u)) return () => Ws(u, m)
			const v = (y) => {
				;(c = null), si(y, m, 13, !o)
			}
			if ((a && m.suspense) || Ko)
				return p()
					.then((y) => () => Ws(y, m))
					.catch((y) => (v(y), () => (o ? O(o, { error: y }) : null)))
			const b = R(!1),
				w = R(),
				P = R(!!r)
			return (
				r &&
					setTimeout(() => {
						P.value = !1
					}, r),
				s != null &&
					setTimeout(() => {
						if (!b.value && !w.value) {
							const y = new Error(`Async component timed out after ${s}ms.`)
							v(y), (w.value = y)
						}
					}, s),
				p()
					.then(() => {
						;(b.value = !0), m.parent && ai(m.parent.vnode) && m.parent.update()
					})
					.catch((y) => {
						v(y), (w.value = y)
					}),
				() => {
					if (b.value && u) return Ws(u, m)
					if (w.value && o) return O(o, { error: w.value })
					if (n && !P.value) return O(n)
				}
			)
		},
	})
}
function Ws(e, t) {
	const { ref: n, props: o, children: r, ce: i } = t.vnode,
		s = O(e, o, r)
	return (s.ref = n), (s.ce = i), delete t.vnode.ce, s
}
const ai = (e) => e.type.__isKeepAlive
function f1(e, t) {
	up(e, 'a', t)
}
function p1(e, t) {
	up(e, 'da', t)
}
function up(e, t, n = Qe) {
	const o =
		e.__wdc ||
		(e.__wdc = () => {
			let r = n
			for (; r; ) {
				if (r.isDeactivated) return
				r = r.parent
			}
			return e()
		})
	if ((Es(t, o, n), n)) {
		let r = n.parent
		for (; r && r.parent; ) ai(r.parent.vnode) && h1(o, t, n, r), (r = r.parent)
	}
}
function h1(e, t, n, o) {
	const r = Es(t, e, o, !0)
	gt(() => {
		bl(o[t], r)
	}, n)
}
function Es(e, t, n = Qe, o = !1) {
	if (n) {
		const r = n[e] || (n[e] = []),
			i =
				t.__weh ||
				(t.__weh = (...s) => {
					On()
					const a = ui(n),
						l = Gt(t, n, e, s)
					return a(), Vn(), l
				})
		return o ? r.unshift(i) : r.push(i), i
	}
}
const $n =
		(e) =>
		(t, n = Qe) => {
			;(!Ko || e === 'sp') && Es(e, (...o) => t(...o), n)
		},
	m1 = $n('bm'),
	ke = $n('m'),
	v1 = $n('bu'),
	dp = $n('u'),
	Vl = $n('bum'),
	gt = $n('um'),
	g1 = $n('sp'),
	_1 = $n('rtg'),
	b1 = $n('rtc')
function y1(e, t = Qe) {
	Es('ec', e, t)
}
const fp = 'components'
function Re(e, t) {
	return hp(fp, e, !0, t) || e
}
const pp = Symbol.for('v-ndc')
function Ht(e) {
	return Ve(e) ? hp(fp, e, !1) || e : e || pp
}
function hp(e, t, n = !0, o = !1) {
	const r = Je || Qe
	if (r) {
		const i = r.type
		{
			const a = qp(i, !1)
			if (a && (a === t || a === ft(t) || a === ri(ft(t)))) return i
		}
		const s = jc(r[e] || i[e], t) || jc(r.appContext[e], t)
		return !s && o ? i : s
	}
}
function jc(e, t) {
	return e && (e[t] || e[ft(t)] || e[ri(ft(t))])
}
function he(e, t, n, o) {
	let r
	const i = n,
		s = fe(e)
	if (s || Ve(e)) {
		const a = s && No(e)
		let l = !1
		a && ((l = !Vt(e)), (e = _s(e))), (r = new Array(e.length))
		for (let c = 0, u = e.length; c < u; c++) r[c] = t(l ? it(e[c]) : e[c], c, void 0, i)
	} else if (typeof e == 'number') {
		r = new Array(e)
		for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, i)
	} else if ($e(e))
		if (e[Symbol.iterator]) r = Array.from(e, (a, l) => t(a, l, void 0, i))
		else {
			const a = Object.keys(e)
			r = new Array(a.length)
			for (let l = 0, c = a.length; l < c; l++) {
				const u = a[l]
				r[l] = t(e[u], u, l, i)
			}
		}
	else r = []
	return r
}
function C(e, t, n = {}, o, r) {
	if (Je.ce || (Je.parent && go(Je.parent) && Je.parent.ce))
		return t !== 'default' && (n.name = t), h(), N(K, null, [O('slot', n, o && o())], 64)
	let i = e[t]
	i && i._c && (i._d = !1), h()
	const s = i && mp(i(n)),
		a = n.key || (s && s.key),
		l = N(
			K,
			{ key: (a && !Wt(a) ? a : `_${t}`) + (!s && o ? '_fb' : '') },
			s || (o ? o() : []),
			s && e._ === 1 ? 64 : -2
		)
	return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l
}
function mp(e) {
	return e.some((t) => (Ur(t) ? !(t.type === Ze || (t.type === K && !mp(t.children))) : !0))
		? e
		: null
}
function w1(e, t) {
	const n = {}
	for (const o in e) n[/[A-Z]/.test(o) ? `on:${o}` : Ri(o)] = e[o]
	return n
}
const Ba = (e) => (e ? (jp(e) ? Ps(e) : Ba(e.parent)) : null),
	Tr = Ke(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => Ba(e.parent),
		$root: (e) => Ba(e.root),
		$host: (e) => e.ce,
		$emit: (e) => e.emit,
		$options: (e) => $l(e),
		$forceUpdate: (e) =>
			e.f ||
			(e.f = () => {
				Ll(e.update)
			}),
		$nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)),
		$watch: (e) => z1.bind(e),
	}),
	Gs = (e, t) => e !== Le && !e.__isScriptSetup && Be(e, t),
	k1 = {
		get({ _: e }, t) {
			if (t === '__v_skip') return !0
			const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: a, appContext: l } = e
			let c
			if (t[0] !== '$') {
				const p = s[t]
				if (p !== void 0)
					switch (p) {
						case 1:
							return o[t]
						case 2:
							return r[t]
						case 4:
							return n[t]
						case 3:
							return i[t]
					}
				else {
					if (Gs(o, t)) return (s[t] = 1), o[t]
					if (r !== Le && Be(r, t)) return (s[t] = 2), r[t]
					if ((c = e.propsOptions[0]) && Be(c, t)) return (s[t] = 3), i[t]
					if (n !== Le && Be(n, t)) return (s[t] = 4), n[t]
					Oa && (s[t] = 0)
				}
			}
			const u = Tr[t]
			let d, f
			if (u) return t === '$attrs' && rt(e.attrs, 'get', ''), u(e)
			if ((d = a.__cssModules) && (d = d[t])) return d
			if (n !== Le && Be(n, t)) return (s[t] = 4), n[t]
			if (((f = l.config.globalProperties), Be(f, t))) return f[t]
		},
		set({ _: e }, t, n) {
			const { data: o, setupState: r, ctx: i } = e
			return Gs(r, t)
				? ((r[t] = n), !0)
				: o !== Le && Be(o, t)
				? ((o[t] = n), !0)
				: Be(e.props, t) || (t[0] === '$' && t.slice(1) in e)
				? !1
				: ((i[t] = n), !0)
		},
		has(
			{ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i } },
			s
		) {
			let a
			return (
				!!n[s] ||
				(e !== Le && Be(e, s)) ||
				Gs(t, s) ||
				((a = i[0]) && Be(a, s)) ||
				Be(o, s) ||
				Be(Tr, s) ||
				Be(r.config.globalProperties, s)
			)
		},
		defineProperty(e, t, n) {
			return (
				n.get != null ? (e._.accessCache[t] = 0) : Be(n, 'value') && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			)
		},
	}
function vp() {
	return E1().slots
}
function E1() {
	const e = pn()
	return e.setupContext || (e.setupContext = zp(e))
}
function es(e) {
	return fe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
function gp(e, t) {
	return !e || !t ? e || t : fe(e) && fe(t) ? e.concat(t) : Ke({}, es(e), es(t))
}
let Oa = !0
function x1(e) {
	const t = $l(e),
		n = e.proxy,
		o = e.ctx
	;(Oa = !1), t.beforeCreate && Hc(t.beforeCreate, e, 'bc')
	const {
		data: r,
		computed: i,
		methods: s,
		watch: a,
		provide: l,
		inject: c,
		created: u,
		beforeMount: d,
		mounted: f,
		beforeUpdate: p,
		updated: m,
		activated: v,
		deactivated: b,
		beforeDestroy: w,
		beforeUnmount: P,
		destroyed: y,
		unmounted: S,
		render: I,
		renderTracked: j,
		renderTriggered: U,
		errorCaptured: Z,
		serverPrefetch: q,
		expose: V,
		inheritAttrs: W,
		components: z,
		directives: oe,
		filters: me,
	} = t
	if ((c && P1(c, o, null), s))
		for (const de in s) {
			const le = s[de]
			_e(le) && (o[de] = le.bind(n))
		}
	if (r) {
		const de = r.call(n, n)
		$e(de) && (e.data = ii(de))
	}
	if (((Oa = !0), i))
		for (const de in i) {
			const le = i[de],
				ye = _e(le) ? le.bind(n, n) : _e(le.get) ? le.get.bind(n, n) : nn,
				tt = !_e(le) && _e(le.set) ? le.set.bind(n) : nn,
				St = E({ get: ye, set: tt })
			Object.defineProperty(o, de, {
				enumerable: !0,
				configurable: !0,
				get: () => St.value,
				set: (Ye) => (St.value = Ye),
			})
		}
	if (a) for (const de in a) _p(a[de], o, n, de)
	if (l) {
		const de = _e(l) ? l.call(n) : l
		Reflect.ownKeys(de).forEach((le) => {
			rn(le, de[le])
		})
	}
	u && Hc(u, e, 'c')
	function re(de, le) {
		fe(le) ? le.forEach((ye) => de(ye.bind(n))) : le && de(le.bind(n))
	}
	if (
		(re(m1, d),
		re(ke, f),
		re(v1, p),
		re(dp, m),
		re(f1, v),
		re(p1, b),
		re(y1, Z),
		re(b1, j),
		re(_1, U),
		re(Vl, P),
		re(gt, S),
		re(g1, q),
		fe(V))
	)
		if (V.length) {
			const de = e.exposed || (e.exposed = {})
			V.forEach((le) => {
				Object.defineProperty(de, le, { get: () => n[le], set: (ye) => (n[le] = ye) })
			})
		} else e.exposed || (e.exposed = {})
	I && e.render === nn && (e.render = I),
		W != null && (e.inheritAttrs = W),
		z && (e.components = z),
		oe && (e.directives = oe),
		q && Ol(e)
}
function P1(e, t, n = nn) {
	fe(e) && (e = Va(e))
	for (const o in e) {
		const r = e[o]
		let i
		$e(r)
			? 'default' in r
				? (i = qe(r.from || o, r.default, !0))
				: (i = qe(r.from || o))
			: (i = qe(r)),
			He(i)
				? Object.defineProperty(t, o, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: (s) => (i.value = s),
				  })
				: (t[o] = i)
	}
}
function Hc(e, t, n) {
	Gt(fe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function _p(e, t, n, o) {
	let r = o.includes('.') ? Vp(n, o) : () => n[o]
	if (Ve(e)) {
		const i = t[e]
		_e(i) && ve(r, i)
	} else if (_e(e)) ve(r, e.bind(n))
	else if ($e(e))
		if (fe(e)) e.forEach((i) => _p(i, t, n, o))
		else {
			const i = _e(e.handler) ? e.handler.bind(n) : t[e.handler]
			_e(i) && ve(r, i, e)
		}
}
function $l(e) {
	const t = e.type,
		{ mixins: n, extends: o } = t,
		{
			mixins: r,
			optionsCache: i,
			config: { optionMergeStrategies: s },
		} = e.appContext,
		a = i.get(t)
	let l
	return (
		a
			? (l = a)
			: !r.length && !n && !o
			? (l = t)
			: ((l = {}), r.length && r.forEach((c) => ts(l, c, s, !0)), ts(l, t, s)),
		$e(t) && i.set(t, l),
		l
	)
}
function ts(e, t, n, o = !1) {
	const { mixins: r, extends: i } = t
	i && ts(e, i, n, !0), r && r.forEach((s) => ts(e, s, n, !0))
	for (const s in t)
		if (!(o && s === 'expose')) {
			const a = S1[s] || (n && n[s])
			e[s] = a ? a(e[s], t[s]) : t[s]
		}
	return e
}
const S1 = {
	data: zc,
	props: qc,
	emits: qc,
	methods: kr,
	computed: kr,
	beforeCreate: lt,
	created: lt,
	beforeMount: lt,
	mounted: lt,
	beforeUpdate: lt,
	updated: lt,
	beforeDestroy: lt,
	beforeUnmount: lt,
	destroyed: lt,
	unmounted: lt,
	activated: lt,
	deactivated: lt,
	errorCaptured: lt,
	serverPrefetch: lt,
	components: kr,
	directives: kr,
	watch: T1,
	provide: zc,
	inject: C1,
}
function zc(e, t) {
	return t
		? e
			? function () {
					return Ke(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t)
			  }
			: t
		: e
}
function C1(e, t) {
	return kr(Va(e), Va(t))
}
function Va(e) {
	if (fe(e)) {
		const t = {}
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
		return t
	}
	return e
}
function lt(e, t) {
	return e ? [...new Set([].concat(e, t))] : t
}
function kr(e, t) {
	return e ? Ke(Object.create(null), e, t) : t
}
function qc(e, t) {
	return e
		? fe(e) && fe(t)
			? [...new Set([...e, ...t])]
			: Ke(Object.create(null), es(e), es(t ?? {}))
		: t
}
function T1(e, t) {
	if (!e) return t
	if (!t) return e
	const n = Ke(Object.create(null), e)
	for (const o in t) n[o] = lt(e[o], t[o])
	return n
}
function bp() {
	return {
		app: null,
		config: {
			isNativeTag: qv,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	}
}
let A1 = 0
function L1(e, t) {
	return function (o, r = null) {
		_e(o) || (o = Ke({}, o)), r != null && !$e(r) && (r = null)
		const i = bp(),
			s = new WeakSet(),
			a = []
		let l = !1
		const c = (i.app = {
			_uid: A1++,
			_component: o,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Xc,
			get config() {
				return i.config
			},
			set config(u) {},
			use(u, ...d) {
				return (
					s.has(u) ||
						(u && _e(u.install) ? (s.add(u), u.install(c, ...d)) : _e(u) && (s.add(u), u(c, ...d))),
					c
				)
			},
			mixin(u) {
				return i.mixins.includes(u) || i.mixins.push(u), c
			},
			component(u, d) {
				return d ? ((i.components[u] = d), c) : i.components[u]
			},
			directive(u, d) {
				return d ? ((i.directives[u] = d), c) : i.directives[u]
			},
			mount(u, d, f) {
				if (!l) {
					const p = c._ceVNode || O(o, r)
					return (
						(p.appContext = i),
						f === !0 ? (f = 'svg') : f === !1 && (f = void 0),
						d && t ? t(p, u) : e(p, u, f),
						(l = !0),
						(c._container = u),
						(u.__vue_app__ = c),
						(c._instance = p.component),
						Ug(c, Xc),
						Ps(p.component)
					)
				}
			},
			onUnmount(u) {
				a.push(u)
			},
			unmount() {
				l &&
					(Gt(a, c._instance, 16),
					e(null, c._container),
					(c._instance = null),
					Wg(c),
					delete c._container.__vue_app__)
			},
			provide(u, d) {
				return (i.provides[u] = d), c
			},
			runWithContext(u) {
				const d = jo
				jo = c
				try {
					return u()
				} finally {
					jo = d
				}
			},
		})
		return c
	}
}
let jo = null
function rn(e, t) {
	if (Qe) {
		let n = Qe.provides
		const o = Qe.parent && Qe.parent.provides
		o === n && (n = Qe.provides = Object.create(o)), (n[e] = t)
	}
}
function qe(e, t, n = !1) {
	const o = Qe || Je
	if (o || jo) {
		const r = jo
			? jo._context.provides
			: o
			? o.parent == null
				? o.vnode.appContext && o.vnode.appContext.provides
				: o.parent.provides
			: void 0
		if (r && e in r) return r[e]
		if (arguments.length > 1) return n && _e(t) ? t.call(o && o.proxy) : t
	}
}
const yp = {},
	wp = () => Object.create(yp),
	kp = (e) => Object.getPrototypeOf(e) === yp
function B1(e, t, n, o = !1) {
	const r = {},
		i = wp()
	;(e.propsDefaults = Object.create(null)), Ep(e, t, r, i)
	for (const s in e.propsOptions[0]) s in r || (r[s] = void 0)
	n ? (e.props = o ? r : Hf(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i)
}
function O1(e, t, n, o) {
	const {
			props: r,
			attrs: i,
			vnode: { patchFlag: s },
		} = e,
		a = Ee(r),
		[l] = e.propsOptions
	let c = !1
	if ((o || s > 0) && !(s & 16)) {
		if (s & 8) {
			const u = e.vnode.dynamicProps
			for (let d = 0; d < u.length; d++) {
				let f = u[d]
				if (xs(e.emitsOptions, f)) continue
				const p = t[f]
				if (l)
					if (Be(i, f)) p !== i[f] && ((i[f] = p), (c = !0))
					else {
						const m = ft(f)
						r[m] = $a(l, a, m, p, e, !1)
					}
				else p !== i[f] && ((i[f] = p), (c = !0))
			}
		}
	} else {
		Ep(e, t, r, i) && (c = !0)
		let u
		for (const d in a)
			(!t || (!Be(t, d) && ((u = fn(d)) === d || !Be(t, u)))) &&
				(l
					? n && (n[d] !== void 0 || n[u] !== void 0) && (r[d] = $a(l, a, d, void 0, e, !0))
					: delete r[d])
		if (i !== a) for (const d in i) (!t || !Be(t, d)) && (delete i[d], (c = !0))
	}
	c && Pn(e.attrs, 'set', '')
}
function Ep(e, t, n, o) {
	const [r, i] = e.propsOptions
	let s = !1,
		a
	if (t)
		for (let l in t) {
			if (Mo(l)) continue
			const c = t[l]
			let u
			r && Be(r, (u = ft(l)))
				? !i || !i.includes(u)
					? (n[u] = c)
					: ((a || (a = {}))[u] = c)
				: xs(e.emitsOptions, l) || ((!(l in o) || c !== o[l]) && ((o[l] = c), (s = !0)))
		}
	if (i) {
		const l = Ee(n),
			c = a || Le
		for (let u = 0; u < i.length; u++) {
			const d = i[u]
			n[d] = $a(r, l, d, c[d], e, !Be(c, d))
		}
	}
	return s
}
function $a(e, t, n, o, r, i) {
	const s = e[n]
	if (s != null) {
		const a = Be(s, 'default')
		if (a && o === void 0) {
			const l = s.default
			if (s.type !== Function && !s.skipFactory && _e(l)) {
				const { propsDefaults: c } = r
				if (n in c) o = c[n]
				else {
					const u = ui(r)
					;(o = c[n] = l.call(null, t)), u()
				}
			} else o = l
			r.ce && r.ce._setProp(n, o)
		}
		s[0] && (i && !a ? (o = !1) : s[1] && (o === '' || o === fn(n)) && (o = !0))
	}
	return o
}
const V1 = new WeakMap()
function xp(e, t, n = !1) {
	const o = n ? V1 : t.propsCache,
		r = o.get(e)
	if (r) return r
	const i = e.props,
		s = {},
		a = []
	let l = !1
	if (!_e(e)) {
		const u = (d) => {
			l = !0
			const [f, p] = xp(d, t, !0)
			Ke(s, f), p && a.push(...p)
		}
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u)
	}
	if (!i && !l) return $e(e) && o.set(e, Ro), Ro
	if (fe(i))
		for (let u = 0; u < i.length; u++) {
			const d = ft(i[u])
			Uc(d) && (s[d] = Le)
		}
	else if (i)
		for (const u in i) {
			const d = ft(u)
			if (Uc(d)) {
				const f = i[u],
					p = (s[d] = fe(f) || _e(f) ? { type: f } : Ke({}, f)),
					m = p.type
				let v = !1,
					b = !0
				if (fe(m))
					for (let w = 0; w < m.length; ++w) {
						const P = m[w],
							y = _e(P) && P.name
						if (y === 'Boolean') {
							v = !0
							break
						} else y === 'String' && (b = !1)
					}
				else v = _e(m) && m.name === 'Boolean'
				;(p[0] = v), (p[1] = b), (v || Be(p, 'default')) && a.push(d)
			}
		}
	const c = [s, a]
	return $e(e) && o.set(e, c), c
}
function Uc(e) {
	return e[0] !== '$' && !Mo(e)
}
const Pp = (e) => e[0] === '_' || e === '$stable',
	Il = (e) => (fe(e) ? e.map(Lt) : [Lt(e)]),
	$1 = (e, t, n) => {
		if (t._n) return t
		const o = T((...r) => Il(t(...r)), n)
		return (o._c = !1), o
	},
	Sp = (e, t, n) => {
		const o = e._ctx
		for (const r in e) {
			if (Pp(r)) continue
			const i = e[r]
			if (_e(i)) t[r] = $1(r, i, o)
			else if (i != null) {
				const s = Il(i)
				t[r] = () => s
			}
		}
	},
	Cp = (e, t) => {
		const n = Il(t)
		e.slots.default = () => n
	},
	Tp = (e, t, n) => {
		for (const o in t) (n || o !== '_') && (e[o] = t[o])
	},
	I1 = (e, t, n) => {
		const o = (e.slots = wp())
		if (e.vnode.shapeFlag & 32) {
			const r = t._
			r ? (Tp(o, t, n), n && Go(o, '_', r, !0)) : Sp(t, o)
		} else t && Cp(e, t)
	},
	R1 = (e, t, n) => {
		const { vnode: o, slots: r } = e
		let i = !0,
			s = Le
		if (o.shapeFlag & 32) {
			const a = t._
			a ? (n && a === 1 ? (i = !1) : Tp(r, t, n)) : ((i = !t.$stable), Sp(t, r)), (s = t)
		} else t && (Cp(e, t), (s = { default: 1 }))
		if (i) for (const a in r) !Pp(a) && s[a] == null && delete r[a]
	},
	ct = Mp
function D1(e) {
	return Ap(e)
}
function M1(e) {
	return Ap(e, a1)
}
function Ap(e, t) {
	const n = vs()
	;(n.__VUE__ = !0), Jf(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n)
	const {
			insert: o,
			remove: r,
			patchProp: i,
			createElement: s,
			createText: a,
			createComment: l,
			setText: c,
			setElementText: u,
			parentNode: d,
			nextSibling: f,
			setScopeId: p = nn,
			insertStaticContent: m,
		} = e,
		v = (
			k,
			x,
			B,
			G = null,
			H = null,
			Y = null,
			ne = void 0,
			ee = null,
			X = !!x.dynamicChildren
		) => {
			if (k === x) return
			k && !ho(k, x) && ((G = F(k)), Ye(k, H, Y, !0), (k = null)),
				x.patchFlag === -2 && ((X = !1), (x.dynamicChildren = null))
			const { type: Q, ref: ge, shapeFlag: ae } = x
			switch (Q) {
				case Qn:
					b(k, x, B, G)
					break
				case Ze:
					w(k, x, B, G)
					break
				case Ho:
					k == null && P(x, B, G, ne)
					break
				case K:
					z(k, x, B, G, H, Y, ne, ee, X)
					break
				default:
					ae & 1
						? I(k, x, B, G, H, Y, ne, ee, X)
						: ae & 6
						? oe(k, x, B, G, H, Y, ne, ee, X)
						: (ae & 64 || ae & 128) && Q.process(k, x, B, G, H, Y, ne, ee, X, ue)
			}
			ge != null && H && zr(ge, k && k.ref, Y, x || k, !x)
		},
		b = (k, x, B, G) => {
			if (k == null) o((x.el = a(x.children)), B, G)
			else {
				const H = (x.el = k.el)
				x.children !== k.children && c(H, x.children)
			}
		},
		w = (k, x, B, G) => {
			k == null ? o((x.el = l(x.children || '')), B, G) : (x.el = k.el)
		},
		P = (k, x, B, G) => {
			;[k.el, k.anchor] = m(k.children, x, B, G, k.el, k.anchor)
		},
		y = ({ el: k, anchor: x }, B, G) => {
			let H
			for (; k && k !== x; ) (H = f(k)), o(k, B, G), (k = H)
			o(x, B, G)
		},
		S = ({ el: k, anchor: x }) => {
			let B
			for (; k && k !== x; ) (B = f(k)), r(k), (k = B)
			r(x)
		},
		I = (k, x, B, G, H, Y, ne, ee, X) => {
			x.type === 'svg' ? (ne = 'svg') : x.type === 'math' && (ne = 'mathml'),
				k == null ? j(x, B, G, H, Y, ne, ee, X) : q(k, x, H, Y, ne, ee, X)
		},
		j = (k, x, B, G, H, Y, ne, ee) => {
			let X, Q
			const { props: ge, shapeFlag: ae, transition: pe, dirs: be } = k
			if (
				((X = k.el = s(k.type, Y, ge && ge.is, ge)),
				ae & 8 ? u(X, k.children) : ae & 16 && Z(k.children, X, null, G, H, Ks(k, Y), ne, ee),
				be && Zt(k, null, G, 'created'),
				U(X, k, k.scopeId, ne, G),
				ge)
			) {
				for (const Me in ge) Me !== 'value' && !Mo(Me) && i(X, Me, null, ge[Me], Y, G)
				'value' in ge && i(X, 'value', null, ge.value, Y),
					(Q = ge.onVnodeBeforeMount) && Tt(Q, G, k)
			}
			Go(X, '__vnode', k, !0),
				Go(X, '__vueParentComponent', G, !0),
				be && Zt(k, null, G, 'beforeMount')
			const Pe = Lp(H, pe)
			Pe && pe.beforeEnter(X),
				o(X, x, B),
				((Q = ge && ge.onVnodeMounted) || Pe || be) &&
					ct(() => {
						Q && Tt(Q, G, k), Pe && pe.enter(X), be && Zt(k, null, G, 'mounted')
					}, H)
		},
		U = (k, x, B, G, H) => {
			if ((B && p(k, B), G)) for (let Y = 0; Y < G.length; Y++) p(k, G[Y])
			if (H) {
				let Y = H.subTree
				if (x === Y || (Dp(Y.type) && (Y.ssContent === x || Y.ssFallback === x))) {
					const ne = H.vnode
					U(k, ne, ne.scopeId, ne.slotScopeIds, H.parent)
				}
			}
		},
		Z = (k, x, B, G, H, Y, ne, ee, X = 0) => {
			for (let Q = X; Q < k.length; Q++) {
				const ge = (k[Q] = ee ? Gn(k[Q]) : Lt(k[Q]))
				v(null, ge, x, B, G, H, Y, ne, ee)
			}
		},
		q = (k, x, B, G, H, Y, ne) => {
			const ee = (x.el = k.el)
			ee.__vnode = x
			let { patchFlag: X, dynamicChildren: Q, dirs: ge } = x
			X |= k.patchFlag & 16
			const ae = k.props || Le,
				pe = x.props || Le
			let be
			if (
				(B && io(B, !1),
				(be = pe.onVnodeBeforeUpdate) && Tt(be, B, x, k),
				ge && Zt(x, k, B, 'beforeUpdate'),
				B && io(B, !0),
				((ae.innerHTML && pe.innerHTML == null) || (ae.textContent && pe.textContent == null)) &&
					u(ee, ''),
				Q
					? V(k.dynamicChildren, Q, ee, B, G, Ks(x, H), Y)
					: ne || le(k, x, ee, null, B, G, Ks(x, H), Y, !1),
				X > 0)
			) {
				if (X & 16) W(ee, ae, pe, B, H)
				else if (
					(X & 2 && ae.class !== pe.class && i(ee, 'class', null, pe.class, H),
					X & 4 && i(ee, 'style', ae.style, pe.style, H),
					X & 8)
				) {
					const Pe = x.dynamicProps
					for (let Me = 0; Me < Pe.length; Me++) {
						const Oe = Pe[Me],
							bt = ae[Oe],
							ot = pe[Oe]
						;(ot !== bt || Oe === 'value') && i(ee, Oe, bt, ot, H, B)
					}
				}
				X & 1 && k.children !== x.children && u(ee, x.children)
			} else !ne && Q == null && W(ee, ae, pe, B, H)
			;((be = pe.onVnodeUpdated) || ge) &&
				ct(() => {
					be && Tt(be, B, x, k), ge && Zt(x, k, B, 'updated')
				}, G)
		},
		V = (k, x, B, G, H, Y, ne) => {
			for (let ee = 0; ee < x.length; ee++) {
				const X = k[ee],
					Q = x[ee],
					ge = X.el && (X.type === K || !ho(X, Q) || X.shapeFlag & 70) ? d(X.el) : B
				v(X, Q, ge, null, G, H, Y, ne, !0)
			}
		},
		W = (k, x, B, G, H) => {
			if (x !== B) {
				if (x !== Le) for (const Y in x) !Mo(Y) && !(Y in B) && i(k, Y, x[Y], null, H, G)
				for (const Y in B) {
					if (Mo(Y)) continue
					const ne = B[Y],
						ee = x[Y]
					ne !== ee && Y !== 'value' && i(k, Y, ee, ne, H, G)
				}
				'value' in B && i(k, 'value', x.value, B.value, H)
			}
		},
		z = (k, x, B, G, H, Y, ne, ee, X) => {
			const Q = (x.el = k ? k.el : a('')),
				ge = (x.anchor = k ? k.anchor : a(''))
			let { patchFlag: ae, dynamicChildren: pe, slotScopeIds: be } = x
			be && (ee = ee ? ee.concat(be) : be),
				k == null
					? (o(Q, B, G), o(ge, B, G), Z(x.children || [], B, ge, H, Y, ne, ee, X))
					: ae > 0 && ae & 64 && pe && k.dynamicChildren
					? (V(k.dynamicChildren, pe, B, H, Y, ne, ee),
					  (x.key != null || (H && x === H.subTree)) && Rl(k, x, !0))
					: le(k, x, B, ge, H, Y, ne, ee, X)
		},
		oe = (k, x, B, G, H, Y, ne, ee, X) => {
			;(x.slotScopeIds = ee),
				k == null
					? x.shapeFlag & 512
						? H.ctx.activate(x, B, G, ne, X)
						: me(x, B, G, H, Y, ne, X)
					: we(k, x, X)
		},
		me = (k, x, B, G, H, Y, ne) => {
			const ee = (k.component = Z1(k, G, H))
			if ((ai(k) && (ee.ctx.renderer = ue), e_(ee, !1, ne), ee.asyncDep)) {
				if ((H && H.registerDep(ee, re, ne), !k.el)) {
					const X = (ee.subTree = O(Ze))
					w(null, X, x, B)
				}
			} else re(ee, k, x, B, H, Y, ne)
		},
		we = (k, x, B) => {
			const G = (x.component = k.component)
			if (G1(k, x, B))
				if (G.asyncDep && !G.asyncResolved) {
					de(G, x, B)
					return
				} else (G.next = x), G.update()
			else (x.el = k.el), (G.vnode = x)
		},
		re = (k, x, B, G, H, Y, ne) => {
			const ee = () => {
				if (k.isMounted) {
					let { next: ae, bu: pe, u: be, parent: Pe, vnode: Me } = k
					{
						const yt = Bp(k)
						if (yt) {
							ae && ((ae.el = Me.el), de(k, ae, ne)),
								yt.asyncDep.then(() => {
									k.isUnmounted || ee()
								})
							return
						}
					}
					let Oe = ae,
						bt
					io(k, !1),
						ae ? ((ae.el = Me.el), de(k, ae, ne)) : (ae = Me),
						pe && Di(pe),
						(bt = ae.props && ae.props.onVnodeBeforeUpdate) && Tt(bt, Pe, ae, Me),
						io(k, !0)
					const ot = Ys(k),
						Dt = k.subTree
					;(k.subTree = ot),
						v(Dt, ot, d(Dt.el), F(Dt), k, H, Y),
						(ae.el = ot.el),
						Oe === null && Rp(k, ot.el),
						be && ct(be, H),
						(bt = ae.props && ae.props.onVnodeUpdated) && ct(() => Tt(bt, Pe, ae, Me), H),
						Xf(k)
				} else {
					let ae
					const { el: pe, props: be } = x,
						{ bm: Pe, m: Me, parent: Oe, root: bt, type: ot } = k,
						Dt = go(x)
					if (
						(io(k, !1),
						Pe && Di(Pe),
						!Dt && (ae = be && be.onVnodeBeforeMount) && Tt(ae, Oe, x),
						io(k, !0),
						pe && De)
					) {
						const yt = () => {
							;(k.subTree = Ys(k)), De(pe, k.subTree, k, H, null)
						}
						Dt && ot.__asyncHydrate ? ot.__asyncHydrate(pe, k, yt) : yt()
					} else {
						bt.ce && bt.ce._injectChildStyle(ot)
						const yt = (k.subTree = Ys(k))
						v(null, yt, B, G, k, H, Y), (x.el = yt.el)
					}
					if ((Me && ct(Me, H), !Dt && (ae = be && be.onVnodeMounted))) {
						const yt = x
						ct(() => Tt(ae, Oe, yt), H)
					}
					;(x.shapeFlag & 256 || (Oe && go(Oe.vnode) && Oe.vnode.shapeFlag & 256)) &&
						k.a &&
						ct(k.a, H),
						(k.isMounted = !0),
						Gg(k),
						(x = B = G = null)
				}
			}
			k.scope.on()
			const X = (k.effect = new Tf(ee))
			k.scope.off()
			const Q = (k.update = X.run.bind(X)),
				ge = (k.job = X.runIfDirty.bind(X))
			;(ge.i = k), (ge.id = k.uid), (X.scheduler = () => Ll(ge)), io(k, !0), Q()
		},
		de = (k, x, B) => {
			x.component = k
			const G = k.vnode.props
			;(k.vnode = x), (k.next = null), O1(k, x.props, G, B), R1(k, x.children, B), On(), Oc(k), Vn()
		},
		le = (k, x, B, G, H, Y, ne, ee, X = !1) => {
			const Q = k && k.children,
				ge = k ? k.shapeFlag : 0,
				ae = x.children,
				{ patchFlag: pe, shapeFlag: be } = x
			if (pe > 0) {
				if (pe & 128) {
					tt(Q, ae, B, G, H, Y, ne, ee, X)
					return
				} else if (pe & 256) {
					ye(Q, ae, B, G, H, Y, ne, ee, X)
					return
				}
			}
			be & 8
				? (ge & 16 && nt(Q, H, Y), ae !== Q && u(B, ae))
				: ge & 16
				? be & 16
					? tt(Q, ae, B, G, H, Y, ne, ee, X)
					: nt(Q, H, Y, !0)
				: (ge & 8 && u(B, ''), be & 16 && Z(ae, B, G, H, Y, ne, ee, X))
		},
		ye = (k, x, B, G, H, Y, ne, ee, X) => {
			;(k = k || Ro), (x = x || Ro)
			const Q = k.length,
				ge = x.length,
				ae = Math.min(Q, ge)
			let pe
			for (pe = 0; pe < ae; pe++) {
				const be = (x[pe] = X ? Gn(x[pe]) : Lt(x[pe]))
				v(k[pe], be, B, null, H, Y, ne, ee, X)
			}
			Q > ge ? nt(k, H, Y, !0, !1, ae) : Z(x, B, G, H, Y, ne, ee, X, ae)
		},
		tt = (k, x, B, G, H, Y, ne, ee, X) => {
			let Q = 0
			const ge = x.length
			let ae = k.length - 1,
				pe = ge - 1
			for (; Q <= ae && Q <= pe; ) {
				const be = k[Q],
					Pe = (x[Q] = X ? Gn(x[Q]) : Lt(x[Q]))
				if (ho(be, Pe)) v(be, Pe, B, null, H, Y, ne, ee, X)
				else break
				Q++
			}
			for (; Q <= ae && Q <= pe; ) {
				const be = k[ae],
					Pe = (x[pe] = X ? Gn(x[pe]) : Lt(x[pe]))
				if (ho(be, Pe)) v(be, Pe, B, null, H, Y, ne, ee, X)
				else break
				ae--, pe--
			}
			if (Q > ae) {
				if (Q <= pe) {
					const be = pe + 1,
						Pe = be < ge ? x[be].el : G
					for (; Q <= pe; ) v(null, (x[Q] = X ? Gn(x[Q]) : Lt(x[Q])), B, Pe, H, Y, ne, ee, X), Q++
				}
			} else if (Q > pe) for (; Q <= ae; ) Ye(k[Q], H, Y, !0), Q++
			else {
				const be = Q,
					Pe = Q,
					Me = new Map()
				for (Q = Pe; Q <= pe; Q++) {
					const wt = (x[Q] = X ? Gn(x[Q]) : Lt(x[Q]))
					wt.key != null && Me.set(wt.key, Q)
				}
				let Oe,
					bt = 0
				const ot = pe - Pe + 1
				let Dt = !1,
					yt = 0
				const ur = new Array(ot)
				for (Q = 0; Q < ot; Q++) ur[Q] = 0
				for (Q = be; Q <= ae; Q++) {
					const wt = k[Q]
					if (bt >= ot) {
						Ye(wt, H, Y, !0)
						continue
					}
					let Jt
					if (wt.key != null) Jt = Me.get(wt.key)
					else
						for (Oe = Pe; Oe <= pe; Oe++)
							if (ur[Oe - Pe] === 0 && ho(wt, x[Oe])) {
								Jt = Oe
								break
							}
					Jt === void 0
						? Ye(wt, H, Y, !0)
						: ((ur[Jt - Pe] = Q + 1),
						  Jt >= yt ? (yt = Jt) : (Dt = !0),
						  v(wt, x[Jt], B, null, H, Y, ne, ee, X),
						  bt++)
				}
				const xc = Dt ? N1(ur) : Ro
				for (Oe = xc.length - 1, Q = ot - 1; Q >= 0; Q--) {
					const wt = Pe + Q,
						Jt = x[wt],
						Pc = wt + 1 < ge ? x[wt + 1].el : G
					ur[Q] === 0
						? v(null, Jt, B, Pc, H, Y, ne, ee, X)
						: Dt && (Oe < 0 || Q !== xc[Oe] ? St(Jt, B, Pc, 2) : Oe--)
				}
			}
		},
		St = (k, x, B, G, H = null) => {
			const { el: Y, type: ne, transition: ee, children: X, shapeFlag: Q } = k
			if (Q & 6) {
				St(k.component.subTree, x, B, G)
				return
			}
			if (Q & 128) {
				k.suspense.move(x, B, G)
				return
			}
			if (Q & 64) {
				ne.move(k, x, B, ue)
				return
			}
			if (ne === K) {
				o(Y, x, B)
				for (let ae = 0; ae < X.length; ae++) St(X[ae], x, B, G)
				o(k.anchor, x, B)
				return
			}
			if (ne === Ho) {
				y(k, x, B)
				return
			}
			if (G !== 2 && Q & 1 && ee)
				if (G === 0) ee.beforeEnter(Y), o(Y, x, B), ct(() => ee.enter(Y), H)
				else {
					const { leave: ae, delayLeave: pe, afterLeave: be } = ee,
						Pe = () => o(Y, x, B),
						Me = () => {
							ae(Y, () => {
								Pe(), be && be()
							})
						}
					pe ? pe(Y, Pe, Me) : Me()
				}
			else o(Y, x, B)
		},
		Ye = (k, x, B, G = !1, H = !1) => {
			const {
				type: Y,
				props: ne,
				ref: ee,
				children: X,
				dynamicChildren: Q,
				shapeFlag: ge,
				patchFlag: ae,
				dirs: pe,
				cacheIndex: be,
			} = k
			if (
				(ae === -2 && (H = !1),
				ee != null && zr(ee, null, B, k, !0),
				be != null && (x.renderCache[be] = void 0),
				ge & 256)
			) {
				x.ctx.deactivate(k)
				return
			}
			const Pe = ge & 1 && pe,
				Me = !go(k)
			let Oe
			if ((Me && (Oe = ne && ne.onVnodeBeforeUnmount) && Tt(Oe, x, k), ge & 6))
				Qt(k.component, B, G)
			else {
				if (ge & 128) {
					k.suspense.unmount(B, G)
					return
				}
				Pe && Zt(k, null, x, 'beforeUnmount'),
					ge & 64
						? k.type.remove(k, x, B, ue, G)
						: Q && !Q.hasOnce && (Y !== K || (ae > 0 && ae & 64))
						? nt(Q, x, B, !1, !0)
						: ((Y === K && ae & 384) || (!H && ge & 16)) && nt(X, x, B),
					G && _t(k)
			}
			;((Me && (Oe = ne && ne.onVnodeUnmounted)) || Pe) &&
				ct(() => {
					Oe && Tt(Oe, x, k), Pe && Zt(k, null, x, 'unmounted')
				}, B)
		},
		_t = (k) => {
			const { type: x, el: B, anchor: G, transition: H } = k
			if (x === K) {
				vn(B, G)
				return
			}
			if (x === Ho) {
				S(k)
				return
			}
			const Y = () => {
				r(B), H && !H.persisted && H.afterLeave && H.afterLeave()
			}
			if (k.shapeFlag & 1 && H && !H.persisted) {
				const { leave: ne, delayLeave: ee } = H,
					X = () => ne(B, Y)
				ee ? ee(k.el, Y, X) : X()
			} else Y()
		},
		vn = (k, x) => {
			let B
			for (; k !== x; ) (B = f(k)), r(k), (k = B)
			r(x)
		},
		Qt = (k, x, B) => {
			const { bum: G, scope: H, job: Y, subTree: ne, um: ee, m: X, a: Q } = k
			Wc(X),
				Wc(Q),
				G && Di(G),
				H.stop(),
				Y && ((Y.flags |= 8), Ye(ne, k, x, B)),
				ee && ct(ee, x),
				ct(() => {
					k.isUnmounted = !0
				}, x),
				x &&
					x.pendingBranch &&
					!x.isUnmounted &&
					k.asyncDep &&
					!k.asyncResolved &&
					k.suspenseId === x.pendingId &&
					(x.deps--, x.deps === 0 && x.resolve()),
				Yg(k)
		},
		nt = (k, x, B, G = !1, H = !1, Y = 0) => {
			for (let ne = Y; ne < k.length; ne++) Ye(k[ne], x, B, G, H)
		},
		F = (k) => {
			if (k.shapeFlag & 6) return F(k.component.subTree)
			if (k.shapeFlag & 128) return k.suspense.next()
			const x = f(k.anchor || k.el),
				B = x && x[Zf]
			return B ? f(B) : x
		}
	let ie = !1
	const te = (k, x, B) => {
			k == null
				? x._vnode && Ye(x._vnode, null, null, !0)
				: v(x._vnode || null, k, x, null, null, null, B),
				(x._vnode = k),
				ie || ((ie = !0), Oc(), Xi(), (ie = !1))
		},
		ue = { p: v, um: Ye, m: St, r: _t, mt: me, mc: Z, pc: le, pbc: V, n: F, o: e }
	let Ce, De
	return t && ([Ce, De] = t(ue)), { render: te, hydrate: Ce, createApp: L1(te, Ce) }
}
function Ks({ type: e, props: t }, n) {
	return (n === 'svg' && e === 'foreignObject') ||
		(n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
		? void 0
		: n
}
function io({ effect: e, job: t }, n) {
	n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Lp(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Rl(e, t, n = !1) {
	const o = e.children,
		r = t.children
	if (fe(o) && fe(r))
		for (let i = 0; i < o.length; i++) {
			const s = o[i]
			let a = r[i]
			a.shapeFlag & 1 &&
				!a.dynamicChildren &&
				((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = r[i] = Gn(r[i])), (a.el = s.el)),
				!n && a.patchFlag !== -2 && Rl(s, a)),
				a.type === Qn && (a.el = s.el)
		}
}
function N1(e) {
	const t = e.slice(),
		n = [0]
	let o, r, i, s, a
	const l = e.length
	for (o = 0; o < l; o++) {
		const c = e[o]
		if (c !== 0) {
			if (((r = n[n.length - 1]), e[r] < c)) {
				;(t[o] = r), n.push(o)
				continue
			}
			for (i = 0, s = n.length - 1; i < s; ) (a = (i + s) >> 1), e[n[a]] < c ? (i = a + 1) : (s = a)
			c < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o))
		}
	}
	for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s])
	return n
}
function Bp(e) {
	const t = e.subTree.component
	if (t) return t.asyncDep && !t.asyncResolved ? t : Bp(t)
}
function Wc(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const F1 = Symbol.for('v-scx'),
	j1 = () => qe(F1)
function ir(e, t) {
	return li(e, null, t)
}
function Op(e, t) {
	return li(e, null, { flush: 'post' })
}
function H1(e, t) {
	return li(e, null, { flush: 'sync' })
}
function ve(e, t, n) {
	return li(e, t, n)
}
function li(e, t, n = Le) {
	const { immediate: o, deep: r, flush: i, once: s } = n,
		a = Ke({}, n),
		l = (t && o) || (!t && i !== 'post')
	let c
	if (Ko) {
		if (i === 'sync') {
			const p = j1()
			c = p.__watcherHandles || (p.__watcherHandles = [])
		} else if (!l) {
			const p = () => {}
			return (p.stop = nn), (p.resume = nn), (p.pause = nn), p
		}
	}
	const u = Qe
	a.call = (p, m, v) => Gt(p, u, m, v)
	let d = !1
	i === 'post'
		? (a.scheduler = (p) => {
				ct(p, u && u.suspense)
		  })
		: i !== 'sync' &&
		  ((d = !0),
		  (a.scheduler = (p, m) => {
				m ? p() : Ll(p)
		  })),
		(a.augmentJob = (p) => {
			t && (p.flags |= 4), d && ((p.flags |= 2), u && ((p.id = u.uid), (p.i = u)))
		})
	const f = Dg(e, t, a)
	return Ko && (c ? c.push(f) : l && f()), f
}
function z1(e, t, n) {
	const o = this.proxy,
		r = Ve(e) ? (e.includes('.') ? Vp(o, e) : () => o[e]) : e.bind(o, o)
	let i
	_e(t) ? (i = t) : ((i = t.handler), (n = t))
	const s = ui(this),
		a = li(r, i.bind(o), n)
	return s(), a
}
function Vp(e, t) {
	const n = t.split('.')
	return () => {
		let o = e
		for (let r = 0; r < n.length && o; r++) o = o[n[r]]
		return o
	}
}
function ci(e, t, n = Le) {
	const o = pn(),
		r = ft(t),
		i = fn(t),
		s = $p(e, r),
		a = bs((l, c) => {
			let u,
				d = Le,
				f
			return (
				H1(() => {
					const p = e[r]
					mt(u, p) && ((u = p), c())
				}),
				{
					get() {
						return l(), n.get ? n.get(u) : u
					},
					set(p) {
						const m = n.set ? n.set(p) : p
						if (!mt(m, u) && !(d !== Le && mt(p, d))) return
						const v = o.vnode.props
						;(v &&
							(t in v || r in v || i in v) &&
							(`onUpdate:${t}` in v || `onUpdate:${r}` in v || `onUpdate:${i}` in v)) ||
							((u = p), c()),
							o.emit(`update:${t}`, m),
							mt(p, m) && mt(p, d) && !mt(m, f) && c(),
							(d = p),
							(f = m)
					},
				}
			)
		})
	return (
		(a[Symbol.iterator] = () => {
			let l = 0
			return {
				next() {
					return l < 2 ? { value: l++ ? s || Le : a, done: !1 } : { done: !0 }
				},
			}
		}),
		a
	)
}
const $p = (e, t) =>
	t === 'modelValue' || t === 'model-value'
		? e.modelModifiers
		: e[`${t}Modifiers`] || e[`${ft(t)}Modifiers`] || e[`${fn(t)}Modifiers`]
function q1(e, t, ...n) {
	if (e.isUnmounted) return
	const o = e.vnode.props || Le
	let r = n
	const i = t.startsWith('update:'),
		s = i && $p(o, t.slice(7))
	s && (s.trim && (r = n.map((u) => (Ve(u) ? u.trim() : u))), s.number && (r = n.map(Ki))),
		Qg(e, t, r)
	let a,
		l = o[(a = Ri(t))] || o[(a = Ri(ft(t)))]
	!l && i && (l = o[(a = Ri(fn(t)))]), l && Gt(l, e, 6, r)
	const c = o[a + 'Once']
	if (c) {
		if (!e.emitted) e.emitted = {}
		else if (e.emitted[a]) return
		;(e.emitted[a] = !0), Gt(c, e, 6, r)
	}
}
function Ip(e, t, n = !1) {
	const o = t.emitsCache,
		r = o.get(e)
	if (r !== void 0) return r
	const i = e.emits
	let s = {},
		a = !1
	if (!_e(e)) {
		const l = (c) => {
			const u = Ip(c, t, !0)
			u && ((a = !0), Ke(s, u))
		}
		!n && t.mixins.length && t.mixins.forEach(l),
			e.extends && l(e.extends),
			e.mixins && e.mixins.forEach(l)
	}
	return !i && !a
		? ($e(e) && o.set(e, null), null)
		: (fe(i) ? i.forEach((l) => (s[l] = null)) : Ke(s, i), $e(e) && o.set(e, s), s)
}
function xs(e, t) {
	return !e || !ni(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, '')),
		  Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, fn(t)) || Be(e, t))
}
function Ys(e) {
	const {
			type: t,
			vnode: n,
			proxy: o,
			withProxy: r,
			propsOptions: [i],
			slots: s,
			attrs: a,
			emit: l,
			render: c,
			renderCache: u,
			props: d,
			data: f,
			setupState: p,
			ctx: m,
			inheritAttrs: v,
		} = e,
		b = Zi(e)
	let w, P
	try {
		if (n.shapeFlag & 4) {
			const S = r || o,
				I = S
			;(w = Lt(c.call(I, S, u, d, p, f, m))), (P = a)
		} else {
			const S = t
			;(w = Lt(S.length > 1 ? S(d, { attrs: a, slots: s, emit: l }) : S(d, null))),
				(P = t.props ? a : U1(a))
		}
	} catch (S) {
		;(Ar.length = 0), si(S, e, 1), (w = O(Ze))
	}
	let y = w
	if (P && v !== !1) {
		const S = Object.keys(P),
			{ shapeFlag: I } = y
		S.length && I & 7 && (i && S.some(_l) && (P = W1(P, i)), (y = Bn(y, P, !1, !0)))
	}
	return (
		n.dirs && ((y = Bn(y, null, !1, !0)), (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
		n.transition && Hr(y, n.transition),
		(w = y),
		Zi(b),
		w
	)
}
const U1 = (e) => {
		let t
		for (const n in e) (n === 'class' || n === 'style' || ni(n)) && ((t || (t = {}))[n] = e[n])
		return t
	},
	W1 = (e, t) => {
		const n = {}
		for (const o in e) (!_l(o) || !(o.slice(9) in t)) && (n[o] = e[o])
		return n
	}
function G1(e, t, n) {
	const { props: o, children: r, component: i } = e,
		{ props: s, children: a, patchFlag: l } = t,
		c = i.emitsOptions
	if (t.dirs || t.transition) return !0
	if (n && l >= 0) {
		if (l & 1024) return !0
		if (l & 16) return o ? Gc(o, s, c) : !!s
		if (l & 8) {
			const u = t.dynamicProps
			for (let d = 0; d < u.length; d++) {
				const f = u[d]
				if (s[f] !== o[f] && !xs(c, f)) return !0
			}
		}
	} else
		return (r || a) && (!a || !a.$stable) ? !0 : o === s ? !1 : o ? (s ? Gc(o, s, c) : !0) : !!s
	return !1
}
function Gc(e, t, n) {
	const o = Object.keys(t)
	if (o.length !== Object.keys(e).length) return !0
	for (let r = 0; r < o.length; r++) {
		const i = o[r]
		if (t[i] !== e[i] && !xs(n, i)) return !0
	}
	return !1
}
function Rp({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const o = t.subTree
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = n), (t = t.parent)
		else break
	}
}
const Dp = (e) => e.__isSuspense
function Mp(e, t) {
	t && t.pendingBranch ? (fe(e) ? t.effects.push(...e) : t.effects.push(e)) : qg(e)
}
const K = Symbol.for('v-fgt'),
	Qn = Symbol.for('v-txt'),
	Ze = Symbol.for('v-cmt'),
	Ho = Symbol.for('v-stc'),
	Ar = []
let xt = null
function h(e = !1) {
	Ar.push((xt = e ? null : []))
}
function K1() {
	Ar.pop(), (xt = Ar[Ar.length - 1] || null)
}
let qr = 1
function Kc(e, t = !1) {
	;(qr += e), e < 0 && xt && t && (xt.hasOnce = !0)
}
function Np(e) {
	return (e.dynamicChildren = qr > 0 ? xt || Ro : null), K1(), qr > 0 && xt && xt.push(e), e
}
function _(e, t, n, o, r, i) {
	return Np(g(e, t, n, o, r, i, !0))
}
function N(e, t, n, o, r) {
	return Np(O(e, t, n, o, r, !0))
}
function Ur(e) {
	return e ? e.__v_isVNode === !0 : !1
}
function ho(e, t) {
	return e.type === t.type && e.key === t.key
}
const Fp = ({ key: e }) => e ?? null,
	Ni = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == 'number' && (e = '' + e),
		e != null ? (Ve(e) || He(e) || _e(e) ? { i: Je, r: e, k: t, f: !!n } : e) : null
	)
function g(e, t = null, n = null, o = 0, r = null, i = e === K ? 0 : 1, s = !1, a = !1) {
	const l = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Fp(t),
		ref: t && Ni(t),
		scopeId: ws,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: i,
		patchFlag: o,
		dynamicProps: r,
		dynamicChildren: null,
		appContext: null,
		ctx: Je,
	}
	return (
		a ? (Ml(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16),
		qr > 0 && !s && xt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && xt.push(l),
		l
	)
}
const O = Y1
function Y1(e, t = null, n = null, o = 0, r = null, i = !1) {
	if (((!e || e === pp) && (e = Ze), Ur(e))) {
		const a = Bn(e, t, !0)
		return (
			n && Ml(a, n),
			qr > 0 && !i && xt && (a.shapeFlag & 6 ? (xt[xt.indexOf(e)] = a) : xt.push(a)),
			(a.patchFlag = -2),
			a
		)
	}
	if ((i_(e) && (e = e.__vccOpts), t)) {
		t = Dl(t)
		let { class: a, style: l } = t
		a && !Ve(a) && (t.class = J(a)),
			$e(l) && (Tl(l) && !fe(l) && (l = Ke({}, l)), (t.style = xe(l)))
	}
	const s = Ve(e) ? 1 : Dp(e) ? 128 : ep(e) ? 64 : $e(e) ? 4 : _e(e) ? 2 : 0
	return g(e, t, n, o, r, s, i, !0)
}
function Dl(e) {
	return e ? (Tl(e) || kp(e) ? Ke({}, e) : e) : null
}
function Bn(e, t, n = !1, o = !1) {
	const { props: r, ref: i, patchFlag: s, children: a, transition: l } = e,
		c = t ? zt(r || {}, t) : r,
		u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e.type,
			props: c,
			key: c && Fp(c),
			ref: t && t.ref ? (n && i ? (fe(i) ? i.concat(Ni(t)) : [i, Ni(t)]) : Ni(t)) : i,
			scopeId: e.scopeId,
			slotScopeIds: e.slotScopeIds,
			children: a,
			target: e.target,
			targetStart: e.targetStart,
			targetAnchor: e.targetAnchor,
			staticCount: e.staticCount,
			shapeFlag: e.shapeFlag,
			patchFlag: t && e.type !== K ? (s === -1 ? 16 : s | 16) : s,
			dynamicProps: e.dynamicProps,
			dynamicChildren: e.dynamicChildren,
			appContext: e.appContext,
			dirs: e.dirs,
			transition: l,
			component: e.component,
			suspense: e.suspense,
			ssContent: e.ssContent && Bn(e.ssContent),
			ssFallback: e.ssFallback && Bn(e.ssFallback),
			el: e.el,
			anchor: e.anchor,
			ctx: e.ctx,
			ce: e.ce,
		}
	return l && o && Hr(u, l.clone(u)), u
}
function Te(e = ' ', t = 0) {
	return O(Qn, null, e, t)
}
function Q1(e, t) {
	const n = O(Ho, null, e)
	return (n.staticCount = t), n
}
function A(e = '', t = !1) {
	return t ? (h(), N(Ze, null, e)) : O(Ze, null, e)
}
function Lt(e) {
	return e == null || typeof e == 'boolean'
		? O(Ze)
		: fe(e)
		? O(K, null, e.slice())
		: Ur(e)
		? Gn(e)
		: O(Qn, null, String(e))
}
function Gn(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Bn(e)
}
function Ml(e, t) {
	let n = 0
	const { shapeFlag: o } = e
	if (t == null) t = null
	else if (fe(t)) n = 16
	else if (typeof t == 'object')
		if (o & 65) {
			const r = t.default
			r && (r._c && (r._d = !1), Ml(e, r()), r._c && (r._d = !0))
			return
		} else {
			n = 32
			const r = t._
			!r && !kp(t)
				? (t._ctx = Je)
				: r === 3 && Je && (Je.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
		}
	else
		_e(t)
			? ((t = { default: t, _ctx: Je }), (n = 32))
			: ((t = String(t)), o & 64 ? ((n = 16), (t = [Te(t)])) : (n = 8))
	;(e.children = t), (e.shapeFlag |= n)
}
function zt(...e) {
	const t = {}
	for (let n = 0; n < e.length; n++) {
		const o = e[n]
		for (const r in o)
			if (r === 'class') t.class !== o.class && (t.class = J([t.class, o.class]))
			else if (r === 'style') t.style = xe([t.style, o.style])
			else if (ni(r)) {
				const i = t[r],
					s = o[r]
				s && i !== s && !(fe(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s)
			} else r !== '' && (t[r] = o[r])
	}
	return t
}
function Tt(e, t, n, o = null) {
	Gt(e, t, 7, [n, o])
}
const J1 = bp()
let X1 = 0
function Z1(e, t, n) {
	const o = e.type,
		r = (t ? t.appContext : e.appContext) || J1,
		i = {
			uid: X1++,
			vnode: e,
			type: o,
			parent: t,
			appContext: r,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			job: null,
			scope: new lg(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(r.provides),
			ids: t ? t.ids : ['', 0, 0],
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: xp(o, r),
			emitsOptions: Ip(o, r),
			emit: null,
			emitted: null,
			propsDefaults: Le,
			inheritAttrs: o.inheritAttrs,
			ctx: Le,
			data: Le,
			props: Le,
			attrs: Le,
			slots: Le,
			refs: Le,
			setupState: Le,
			setupContext: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		}
	return (
		(i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = q1.bind(null, i)), e.ce && e.ce(i), i
	)
}
let Qe = null
const pn = () => Qe || Je
let ns, Ia
{
	const e = vs(),
		t = (n, o) => {
			let r
			return (
				(r = e[n]) || (r = e[n] = []),
				r.push(o),
				(i) => {
					r.length > 1 ? r.forEach((s) => s(i)) : r[0](i)
				}
			)
		}
	;(ns = t('__VUE_INSTANCE_SETTERS__', (n) => (Qe = n))),
		(Ia = t('__VUE_SSR_SETTERS__', (n) => (Ko = n)))
}
const ui = (e) => {
		const t = Qe
		return (
			ns(e),
			e.scope.on(),
			() => {
				e.scope.off(), ns(t)
			}
		)
	},
	Yc = () => {
		Qe && Qe.scope.off(), ns(null)
	}
function jp(e) {
	return e.vnode.shapeFlag & 4
}
let Ko = !1
function e_(e, t = !1, n = !1) {
	t && Ia(t)
	const { props: o, children: r } = e.vnode,
		i = jp(e)
	B1(e, o, i, t), I1(e, r, n)
	const s = i ? t_(e, t) : void 0
	return t && Ia(!1), s
}
function t_(e, t) {
	const n = e.type
	;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, k1))
	const { setup: o } = n
	if (o) {
		On()
		const r = (e.setupContext = o.length > 1 ? zp(e) : null),
			i = ui(e),
			s = rr(o, e, 0, [e.props, r]),
			a = yf(s)
		if ((Vn(), i(), (a || e.sp) && !go(e) && Ol(e), a)) {
			if ((s.then(Yc, Yc), t))
				return s
					.then((l) => {
						Qc(e, l, t)
					})
					.catch((l) => {
						si(l, e, 0)
					})
			e.asyncDep = s
		} else Qc(e, s, t)
	} else Hp(e, t)
}
function Qc(e, t, n) {
	_e(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: $e(t) && ((e.devtoolsRawSetupState = t), (e.setupState = Uf(t))),
		Hp(e, n)
}
let Jc
function Hp(e, t, n) {
	const o = e.type
	if (!e.render) {
		if (!t && Jc && !o.render) {
			const r = o.template || $l(e).template
			if (r) {
				const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
					{ delimiters: a, compilerOptions: l } = o,
					c = Ke(Ke({ isCustomElement: i, delimiters: a }, s), l)
				o.render = Jc(r, c)
			}
		}
		e.render = o.render || nn
	}
	{
		const r = ui(e)
		On()
		try {
			x1(e)
		} finally {
			Vn(), r()
		}
	}
}
const n_ = {
	get(e, t) {
		return rt(e, 'get', ''), e[t]
	},
}
function zp(e) {
	const t = (n) => {
		e.exposed = n || {}
	}
	return { attrs: new Proxy(e.attrs, n_), slots: e.slots, emit: e.emit, expose: t }
}
function Ps(e) {
	return e.exposed
		? e.exposeProxy ||
				(e.exposeProxy = new Proxy(Uf(zf(e.exposed)), {
					get(t, n) {
						if (n in t) return t[n]
						if (n in Tr) return Tr[n](e)
					},
					has(t, n) {
						return n in t || n in Tr
					},
				}))
		: e.proxy
}
const o_ = /(?:^|[-_])(\w)/g,
	r_ = (e) => e.replace(o_, (t) => t.toUpperCase()).replace(/[-_]/g, '')
function qp(e, t = !0) {
	return _e(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Up(e, t, n = !1) {
	let o = qp(t)
	if (!o && t.__file) {
		const r = t.__file.match(/([^/\\]+)\.\w+$/)
		r && (o = r[1])
	}
	if (!o && e && e.parent) {
		const r = (i) => {
			for (const s in i) if (i[s] === t) return s
		}
		o = r(e.components || e.parent.type.components) || r(e.appContext.components)
	}
	return o ? r_(o) : n ? 'App' : 'Anonymous'
}
function i_(e) {
	return _e(e) && '__vccOpts' in e
}
const E = (e, t) => Ig(e, t, Ko)
function ce(e, t, n) {
	const o = arguments.length
	return o === 2
		? $e(t) && !fe(t)
			? Ur(t)
				? O(e, null, [t])
				: O(e, t)
			: O(e, null, t)
		: (o > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : o === 3 && Ur(n) && (n = [n]),
		  O(e, t, n))
}
const Xc = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ra
const Zc = typeof window < 'u' && window.trustedTypes
if (Zc)
	try {
		Ra = Zc.createPolicy('vue', { createHTML: (e) => e })
	} catch {}
const Wp = Ra ? (e) => Ra.createHTML(e) : (e) => e,
	s_ = 'http://www.w3.org/2000/svg',
	a_ = 'http://www.w3.org/1998/Math/MathML',
	kn = typeof document < 'u' ? document : null,
	eu = kn && kn.createElement('template'),
	l_ = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null)
		},
		remove: (e) => {
			const t = e.parentNode
			t && t.removeChild(e)
		},
		createElement: (e, t, n, o) => {
			const r =
				t === 'svg'
					? kn.createElementNS(s_, e)
					: t === 'mathml'
					? kn.createElementNS(a_, e)
					: n
					? kn.createElement(e, { is: n })
					: kn.createElement(e)
			return e === 'select' && o && o.multiple != null && r.setAttribute('multiple', o.multiple), r
		},
		createText: (e) => kn.createTextNode(e),
		createComment: (e) => kn.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t
		},
		setElementText: (e, t) => {
			e.textContent = t
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => kn.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, '')
		},
		insertStaticContent(e, t, n, o, r, i) {
			const s = n ? n.previousSibling : t.lastChild
			if (r && (r === i || r.nextSibling))
				for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
			else {
				eu.innerHTML = Wp(
					o === 'svg' ? `<svg>${e}</svg>` : o === 'mathml' ? `<math>${e}</math>` : e
				)
				const a = eu.content
				if (o === 'svg' || o === 'mathml') {
					const l = a.firstChild
					for (; l.firstChild; ) a.appendChild(l.firstChild)
					a.removeChild(l)
				}
				t.insertBefore(a, n)
			}
			return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
		},
	},
	Nn = 'transition',
	fr = 'animation',
	Wr = Symbol('_vtc'),
	Gp = {
		name: String,
		type: String,
		css: { type: Boolean, default: !0 },
		duration: [String, Number, Object],
		enterFromClass: String,
		enterActiveClass: String,
		enterToClass: String,
		appearFromClass: String,
		appearActiveClass: String,
		appearToClass: String,
		leaveFromClass: String,
		leaveActiveClass: String,
		leaveToClass: String,
	},
	c_ = Ke({}, op, Gp),
	u_ = (e) => ((e.displayName = 'Transition'), (e.props = c_), e),
	no = u_((e, { slots: t }) => ce(o1, d_(e), t)),
	so = (e, t = []) => {
		fe(e) ? e.forEach((n) => n(...t)) : e && e(...t)
	},
	tu = (e) => (e ? (fe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function d_(e) {
	const t = {}
	for (const z in e) z in Gp || (t[z] = e[z])
	if (e.css === !1) return t
	const {
			name: n = 'v',
			type: o,
			duration: r,
			enterFromClass: i = `${n}-enter-from`,
			enterActiveClass: s = `${n}-enter-active`,
			enterToClass: a = `${n}-enter-to`,
			appearFromClass: l = i,
			appearActiveClass: c = s,
			appearToClass: u = a,
			leaveFromClass: d = `${n}-leave-from`,
			leaveActiveClass: f = `${n}-leave-active`,
			leaveToClass: p = `${n}-leave-to`,
		} = e,
		m = f_(r),
		v = m && m[0],
		b = m && m[1],
		{
			onBeforeEnter: w,
			onEnter: P,
			onEnterCancelled: y,
			onLeave: S,
			onLeaveCancelled: I,
			onBeforeAppear: j = w,
			onAppear: U = P,
			onAppearCancelled: Z = y,
		} = t,
		q = (z, oe, me, we) => {
			;(z._enterCancelled = we), ao(z, oe ? u : a), ao(z, oe ? c : s), me && me()
		},
		V = (z, oe) => {
			;(z._isLeaving = !1), ao(z, d), ao(z, p), ao(z, f), oe && oe()
		},
		W = (z) => (oe, me) => {
			const we = z ? U : P,
				re = () => q(oe, z, me)
			so(we, [oe, re]),
				nu(() => {
					ao(oe, z ? l : i), _n(oe, z ? u : a), tu(we) || ou(oe, o, v, re)
				})
		}
	return Ke(t, {
		onBeforeEnter(z) {
			so(w, [z]), _n(z, i), _n(z, s)
		},
		onBeforeAppear(z) {
			so(j, [z]), _n(z, l), _n(z, c)
		},
		onEnter: W(!1),
		onAppear: W(!0),
		onLeave(z, oe) {
			z._isLeaving = !0
			const me = () => V(z, oe)
			_n(z, d),
				z._enterCancelled ? (_n(z, f), su()) : (su(), _n(z, f)),
				nu(() => {
					z._isLeaving && (ao(z, d), _n(z, p), tu(S) || ou(z, o, b, me))
				}),
				so(S, [z, me])
		},
		onEnterCancelled(z) {
			q(z, !1, void 0, !0), so(y, [z])
		},
		onAppearCancelled(z) {
			q(z, !0, void 0, !0), so(Z, [z])
		},
		onLeaveCancelled(z) {
			V(z), so(I, [z])
		},
	})
}
function f_(e) {
	if (e == null) return null
	if ($e(e)) return [Qs(e.enter), Qs(e.leave)]
	{
		const t = Qs(e)
		return [t, t]
	}
}
function Qs(e) {
	return Yv(e)
}
function _n(e, t) {
	t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Wr] || (e[Wr] = new Set())).add(t)
}
function ao(e, t) {
	t.split(/\s+/).forEach((o) => o && e.classList.remove(o))
	const n = e[Wr]
	n && (n.delete(t), n.size || (e[Wr] = void 0))
}
function nu(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e)
	})
}
let p_ = 0
function ou(e, t, n, o) {
	const r = (e._endId = ++p_),
		i = () => {
			r === e._endId && o()
		}
	if (n != null) return setTimeout(i, n)
	const { type: s, timeout: a, propCount: l } = h_(e, t)
	if (!s) return o()
	const c = s + 'end'
	let u = 0
	const d = () => {
			e.removeEventListener(c, f), i()
		},
		f = (p) => {
			p.target === e && ++u >= l && d()
		}
	setTimeout(() => {
		u < l && d()
	}, a + 1),
		e.addEventListener(c, f)
}
function h_(e, t) {
	const n = window.getComputedStyle(e),
		o = (m) => (n[m] || '').split(', '),
		r = o(`${Nn}Delay`),
		i = o(`${Nn}Duration`),
		s = ru(r, i),
		a = o(`${fr}Delay`),
		l = o(`${fr}Duration`),
		c = ru(a, l)
	let u = null,
		d = 0,
		f = 0
	t === Nn
		? s > 0 && ((u = Nn), (d = s), (f = i.length))
		: t === fr
		? c > 0 && ((u = fr), (d = c), (f = l.length))
		: ((d = Math.max(s, c)),
		  (u = d > 0 ? (s > c ? Nn : fr) : null),
		  (f = u ? (u === Nn ? i.length : l.length) : 0))
	const p = u === Nn && /\b(transform|all)(,|$)/.test(o(`${Nn}Property`).toString())
	return { type: u, timeout: d, propCount: f, hasTransform: p }
}
function ru(e, t) {
	for (; e.length < t.length; ) e = e.concat(e)
	return Math.max(...t.map((n, o) => iu(n) + iu(e[o])))
}
function iu(e) {
	return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function su() {
	return document.body.offsetHeight
}
function m_(e, t, n) {
	const o = e[Wr]
	o && (t = (t ? [t, ...o] : [...o]).join(' ')),
		t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const os = Symbol('_vod'),
	Kp = Symbol('_vsh'),
	Ss = {
		beforeMount(e, { value: t }, { transition: n }) {
			;(e[os] = e.style.display === 'none' ? '' : e.style.display),
				n && t ? n.beforeEnter(e) : pr(e, t)
		},
		mounted(e, { value: t }, { transition: n }) {
			n && t && n.enter(e)
		},
		updated(e, { value: t, oldValue: n }, { transition: o }) {
			!t != !n &&
				(o
					? t
						? (o.beforeEnter(e), pr(e, !0), o.enter(e))
						: o.leave(e, () => {
								pr(e, !1)
						  })
					: pr(e, t))
		},
		beforeUnmount(e, { value: t }) {
			pr(e, t)
		},
	}
function pr(e, t) {
	;(e.style.display = t ? e[os] : 'none'), (e[Kp] = !t)
}
const v_ = Symbol(''),
	g_ = /(^|;)\s*display\s*:/
function __(e, t, n) {
	const o = e.style,
		r = Ve(n)
	let i = !1
	if (n && !r) {
		if (t)
			if (Ve(t))
				for (const s of t.split(';')) {
					const a = s.slice(0, s.indexOf(':')).trim()
					n[a] == null && Fi(o, a, '')
				}
			else for (const s in t) n[s] == null && Fi(o, s, '')
		for (const s in n) s === 'display' && (i = !0), Fi(o, s, n[s])
	} else if (r) {
		if (t !== n) {
			const s = o[v_]
			s && (n += ';' + s), (o.cssText = n), (i = g_.test(n))
		}
	} else t && e.removeAttribute('style')
	os in e && ((e[os] = i ? o.display : ''), e[Kp] && (o.display = 'none'))
}
const au = /\s*!important$/
function Fi(e, t, n) {
	if (fe(n)) n.forEach((o) => Fi(e, t, o))
	else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
	else {
		const o = b_(e, t)
		au.test(n) ? e.setProperty(fn(o), n.replace(au, ''), 'important') : (e[o] = n)
	}
}
const lu = ['Webkit', 'Moz', 'ms'],
	Js = {}
function b_(e, t) {
	const n = Js[t]
	if (n) return n
	let o = ft(t)
	if (o !== 'filter' && o in e) return (Js[t] = o)
	o = ri(o)
	for (let r = 0; r < lu.length; r++) {
		const i = lu[r] + o
		if (i in e) return (Js[t] = i)
	}
	return t
}
const cu = 'http://www.w3.org/1999/xlink'
function uu(e, t, n, o, r, i = tg(t)) {
	o && t.startsWith('xlink:')
		? n == null
			? e.removeAttributeNS(cu, t.slice(6, t.length))
			: e.setAttributeNS(cu, t, n)
		: n == null || (i && !wl(n))
		? e.removeAttribute(t)
		: e.setAttribute(t, i ? '' : Wt(n) ? String(n) : n)
}
function du(e, t, n, o, r) {
	if (t === 'innerHTML' || t === 'textContent') {
		n != null && (e[t] = t === 'innerHTML' ? Wp(n) : n)
		return
	}
	const i = e.tagName
	if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
		const a = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
			l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
		;(a !== l || !('_value' in e)) && (e.value = l),
			n == null && e.removeAttribute(t),
			(e._value = n)
		return
	}
	let s = !1
	if (n === '' || n == null) {
		const a = typeof e[t]
		a === 'boolean'
			? (n = wl(n))
			: n == null && a === 'string'
			? ((n = ''), (s = !0))
			: a === 'number' && ((n = 0), (s = !0))
	}
	try {
		e[t] = n
	} catch {}
	s && e.removeAttribute(r || t)
}
function Cn(e, t, n, o) {
	e.addEventListener(t, n, o)
}
function y_(e, t, n, o) {
	e.removeEventListener(t, n, o)
}
const fu = Symbol('_vei')
function w_(e, t, n, o, r = null) {
	const i = e[fu] || (e[fu] = {}),
		s = i[t]
	if (o && s) s.value = o
	else {
		const [a, l] = k_(t)
		if (o) {
			const c = (i[t] = P_(o, r))
			Cn(e, a, c, l)
		} else s && (y_(e, a, s, l), (i[t] = void 0))
	}
}
const pu = /(?:Once|Passive|Capture)$/
function k_(e) {
	let t
	if (pu.test(e)) {
		t = {}
		let o
		for (; (o = e.match(pu)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0)
	}
	return [e[2] === ':' ? e.slice(3) : fn(e.slice(2)), t]
}
let Xs = 0
const E_ = Promise.resolve(),
	x_ = () => Xs || (E_.then(() => (Xs = 0)), (Xs = Date.now()))
function P_(e, t) {
	const n = (o) => {
		if (!o._vts) o._vts = Date.now()
		else if (o._vts <= n.attached) return
		Gt(S_(o, n.value), t, 5, [o])
	}
	return (n.value = e), (n.attached = x_()), n
}
function S_(e, t) {
	if (fe(t)) {
		const n = e.stopImmediatePropagation
		return (
			(e.stopImmediatePropagation = () => {
				n.call(e), (e._stopped = !0)
			}),
			t.map((o) => (r) => !r._stopped && o && o(r))
		)
	} else return t
}
const hu = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	C_ = (e, t, n, o, r, i) => {
		const s = r === 'svg'
		t === 'class'
			? m_(e, o, s)
			: t === 'style'
			? __(e, n, o)
			: ni(t)
			? _l(t) || w_(e, t, n, o, i)
			: (
					t[0] === '.'
						? ((t = t.slice(1)), !0)
						: t[0] === '^'
						? ((t = t.slice(1)), !1)
						: T_(e, t, o, s)
			  )
			? (du(e, t, o),
			  !e.tagName.includes('-') &&
					(t === 'value' || t === 'checked' || t === 'selected') &&
					uu(e, t, o, s, i, t !== 'value'))
			: e._isVueCE && (/[A-Z]/.test(t) || !Ve(o))
			? du(e, ft(t), o, i, t)
			: (t === 'true-value' ? (e._trueValue = o) : t === 'false-value' && (e._falseValue = o),
			  uu(e, t, o, s))
	}
function T_(e, t, n, o) {
	if (o) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && hu(t) && _e(n)))
	if (
		t === 'spellcheck' ||
		t === 'draggable' ||
		t === 'translate' ||
		t === 'form' ||
		(t === 'list' && e.tagName === 'INPUT') ||
		(t === 'type' && e.tagName === 'TEXTAREA')
	)
		return !1
	if (t === 'width' || t === 'height') {
		const r = e.tagName
		if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
	}
	return hu(t) && Ve(n) ? !1 : t in e
}
const Zn = (e) => {
	const t = e.props['onUpdate:modelValue'] || !1
	return fe(t) ? (n) => Di(t, n) : t
}
function A_(e) {
	e.target.composing = !0
}
function mu(e) {
	const t = e.target
	t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const $t = Symbol('_assign'),
	Da = {
		created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
			e[$t] = Zn(r)
			const i = o || (r.props && r.props.type === 'number')
			Cn(e, t ? 'change' : 'input', (s) => {
				if (s.target.composing) return
				let a = e.value
				n && (a = a.trim()), i && (a = Ki(a)), e[$t](a)
			}),
				n &&
					Cn(e, 'change', () => {
						e.value = e.value.trim()
					}),
				t || (Cn(e, 'compositionstart', A_), Cn(e, 'compositionend', mu), Cn(e, 'change', mu))
		},
		mounted(e, { value: t }) {
			e.value = t ?? ''
		},
		beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: i } }, s) {
			if (((e[$t] = Zn(s)), e.composing)) return
			const a = (i || e.type === 'number') && !/^0\d/.test(e.value) ? Ki(e.value) : e.value,
				l = t ?? ''
			a !== l &&
				((document.activeElement === e &&
					e.type !== 'range' &&
					((o && t === n) || (r && e.value.trim() === l))) ||
					(e.value = l))
		},
	},
	L_ = {
		deep: !0,
		created(e, t, n) {
			;(e[$t] = Zn(n)),
				Cn(e, 'change', () => {
					const o = e._modelValue,
						r = Yo(e),
						i = e.checked,
						s = e[$t]
					if (fe(o)) {
						const a = kl(o, r),
							l = a !== -1
						if (i && !l) s(o.concat(r))
						else if (!i && l) {
							const c = [...o]
							c.splice(a, 1), s(c)
						}
					} else if (or(o)) {
						const a = new Set(o)
						i ? a.add(r) : a.delete(r), s(a)
					} else s(Yp(e, i))
				})
		},
		mounted: vu,
		beforeUpdate(e, t, n) {
			;(e[$t] = Zn(n)), vu(e, t, n)
		},
	}
function vu(e, { value: t, oldValue: n }, o) {
	e._modelValue = t
	let r
	if (fe(t)) r = kl(t, o.props.value) > -1
	else if (or(t)) r = t.has(o.props.value)
	else {
		if (t === n) return
		r = _o(t, Yp(e, !0))
	}
	e.checked !== r && (e.checked = r)
}
const B_ = {
		created(e, { value: t }, n) {
			;(e.checked = _o(t, n.props.value)),
				(e[$t] = Zn(n)),
				Cn(e, 'change', () => {
					e[$t](Yo(e))
				})
		},
		beforeUpdate(e, { value: t, oldValue: n }, o) {
			;(e[$t] = Zn(o)), t !== n && (e.checked = _o(t, o.props.value))
		},
	},
	gu = {
		deep: !0,
		created(e, { value: t, modifiers: { number: n } }, o) {
			const r = or(t)
			Cn(e, 'change', () => {
				const i = Array.prototype.filter
					.call(e.options, (s) => s.selected)
					.map((s) => (n ? Ki(Yo(s)) : Yo(s)))
				e[$t](e.multiple ? (r ? new Set(i) : i) : i[0]),
					(e._assigning = !0),
					ht(() => {
						e._assigning = !1
					})
			}),
				(e[$t] = Zn(o))
		},
		mounted(e, { value: t }) {
			_u(e, t)
		},
		beforeUpdate(e, t, n) {
			e[$t] = Zn(n)
		},
		updated(e, { value: t }) {
			e._assigning || _u(e, t)
		},
	}
function _u(e, t) {
	const n = e.multiple,
		o = fe(t)
	if (!(n && !o && !or(t))) {
		for (let r = 0, i = e.options.length; r < i; r++) {
			const s = e.options[r],
				a = Yo(s)
			if (n)
				if (o) {
					const l = typeof a
					l === 'string' || l === 'number'
						? (s.selected = t.some((c) => String(c) === String(a)))
						: (s.selected = kl(t, a) > -1)
				} else s.selected = t.has(a)
			else if (_o(Yo(s), t)) {
				e.selectedIndex !== r && (e.selectedIndex = r)
				return
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
	}
}
function Yo(e) {
	return '_value' in e ? e._value : e.value
}
function Yp(e, t) {
	const n = t ? '_trueValue' : '_falseValue'
	return n in e ? e[n] : t
}
const O_ = ['ctrl', 'shift', 'alt', 'meta'],
	V_ = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => 'button' in e && e.button !== 0,
		middle: (e) => 'button' in e && e.button !== 1,
		right: (e) => 'button' in e && e.button !== 2,
		exact: (e, t) => O_.some((n) => e[`${n}Key`] && !t.includes(n)),
	},
	Qp = (e, t) => {
		const n = e._withMods || (e._withMods = {}),
			o = t.join('.')
		return (
			n[o] ||
			(n[o] = (r, ...i) => {
				for (let s = 0; s < t.length; s++) {
					const a = V_[t[s]]
					if (a && a(r, t)) return
				}
				return e(r, ...i)
			})
		)
	},
	$_ = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	Nl = (e, t) => {
		const n = e._withKeys || (e._withKeys = {}),
			o = t.join('.')
		return (
			n[o] ||
			(n[o] = (r) => {
				if (!('key' in r)) return
				const i = fn(r.key)
				if (t.some((s) => s === i || $_[s] === i)) return e(r)
			})
		)
	},
	Jp = Ke({ patchProp: C_ }, l_)
let Lr,
	bu = !1
function I_() {
	return Lr || (Lr = D1(Jp))
}
function R_() {
	return (Lr = bu ? Lr : M1(Jp)), (bu = !0), Lr
}
const D_ = (...e) => {
		const t = I_().createApp(...e),
			{ mount: n } = t
		return (
			(t.mount = (o) => {
				const r = Zp(o)
				if (!r) return
				const i = t._component
				!_e(i) && !i.render && !i.template && (i.template = r.innerHTML),
					r.nodeType === 1 && (r.textContent = '')
				const s = n(r, !1, Xp(r))
				return (
					r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
					s
				)
			}),
			t
		)
	},
	M_ = (...e) => {
		const t = R_().createApp(...e),
			{ mount: n } = t
		return (
			(t.mount = (o) => {
				const r = Zp(o)
				if (r) return n(r, !0, Xp(r))
			}),
			t
		)
	}
function Xp(e) {
	if (e instanceof SVGElement) return 'svg'
	if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Zp(e) {
	return Ve(e) ? document.querySelector(e) : e
}
var eh = (e) => /^[a-z][a-z0-9+.-]*:/.test(e) || e.startsWith('//'),
	N_ = /.md((\?|#).*)?$/,
	F_ = (e, t = '/') => eh(e) || (e.startsWith('/') && !e.startsWith(t) && !N_.test(e)),
	It = (e) => /^(https?:)?\/\//.test(e),
	yu = (e) => {
		if (!e || e.endsWith('/')) return e
		let t = e.replace(/(^|\/)README.md$/i, '$1index.html')
		return (
			t.endsWith('.md')
				? (t = `${t.substring(0, t.length - 3)}.html`)
				: t.endsWith('.html') || (t = `${t}.html`),
			t.endsWith('/index.html') && (t = t.substring(0, t.length - 10)),
			t
		)
	},
	j_ = 'http://.',
	H_ = (e, t) => {
		if (!e.startsWith('/') && t) {
			const n = t.slice(0, t.lastIndexOf('/'))
			return yu(new URL(`${n}/${e}`, j_).pathname)
		}
		return yu(e)
	},
	z_ = (e, t) => {
		const n = Object.keys(e).sort((o, r) => {
			const i = r.split('/').length - o.split('/').length
			return i !== 0 ? i : r.length - o.length
		})
		for (const o of n) if (t.startsWith(o)) return o
		return '/'
	},
	q_ = /(#|\?)/,
	th = (e) => {
		const [t, ...n] = e.split(q_)
		return { pathname: t, hashAndQueries: n.join('') }
	},
	U_ = ['link', 'meta', 'script', 'style', 'noscript', 'template'],
	W_ = ['title', 'base'],
	G_ = ([e, t, n]) =>
		W_.includes(e)
			? e
			: U_.includes(e)
			? e === 'meta' && t.name
				? `${e}.${t.name}`
				: e === 'template' && t.id
				? `${e}.${t.id}`
				: JSON.stringify([
						e,
						Object.entries(t)
							.map(([o, r]) => (typeof r == 'boolean' ? (r ? [o, ''] : null) : [o, r]))
							.filter((o) => o != null)
							.sort(([o], [r]) => o.localeCompare(r)),
						n,
				  ])
			: null,
	K_ = (e) => {
		const t = new Set(),
			n = []
		return (
			e.forEach((o) => {
				const r = G_(o)
				r && !t.has(r) && (t.add(r), n.push(o))
			}),
			n
		)
	},
	nh = (e) => (e.startsWith('/') ? e : `/${e}`),
	oh = (e) => (e.endsWith('/') || e.endsWith('.html') ? e : `${e}/`),
	rh = (e) => (e.endsWith('/') ? e.slice(0, -1) : e),
	Fl = (e) => (e.startsWith('/') ? e.slice(1) : e),
	ih = (e) => typeof e == 'function',
	Kt = (e) => Object.prototype.toString.call(e) === '[object Object]',
	sn = (e) => typeof e == 'string'
const Y_ = JSON.parse(
		'{"/changelog.html":"/changelog/","/contributing.html":"/contributing/","/demos.html":"/demos/","/friends.html":"/friends/","/questions.html":"/faq/","/sponsor.html":"/sponsor/","/1.%E7%A4%BA%E4%BE%8B/markdown%E5%9F%BA%E7%A1%80.html":"/article/mcz1csb4/","/1.%E7%A4%BA%E4%BE%8B/markdown%E6%89%A9%E5%B1%95.html":"/article/mcgayb5w/","/1.%E7%A4%BA%E4%BE%8B/%E5%85%A8%E5%B1%8F%E6%B0%B4%E5%8D%B0.html":"/article/97s6ha1e/","/1.%E7%A4%BA%E4%BE%8B/%E5%86%85%E5%AE%B9%E6%B0%B4%E5%8D%B0.html":"/article/2z59hh8g/","/1.%E7%A4%BA%E4%BE%8B/%E5%8A%A0%E5%AF%86%E6%96%87%E7%AB%A0.html":"/article/enx7c9s/","/1.%E7%A4%BA%E4%BE%8B/%E5%9B%BE%E7%89%87%E6%B0%B4%E5%8D%B0.html":"/article/i4cuuonn/","/1.%E7%A4%BA%E4%BE%8B/%E7%85%A7%E7%89%87%E7%B1%BB%E4%BD%9C%E5%93%81%E7%A4%BA%E4%BE%8B.html":"/article/30995vcd/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A0.html":"/article/xld23tu1/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A02.html":"/article/elac3ddb/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A03.html":"/article/9eh4d6ao/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A04.html":"/article/qk81wscb/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A05.html":"/article/2seng2ou/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A06.html":"/article/v9fejej9/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A07.html":"/article/5xbhl125/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A08.html":"/article/m4gen76w/","/1.%E7%A4%BA%E4%BE%8B/%E7%A4%BA%E4%BE%8B%E6%96%87%E7%AB%A09.html":"/article/z8zvx0ru/","/2.preview/%E4%B8%BB%E9%A2%98%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88.html":"/article/0lk24ty5/","/4.%E6%95%99%E7%A8%8B/frontmatter.html":"/article/ecxnxxd0/","/3.%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E/102-103.html":"/article/6pa64b1n/","/3.%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E/120.html":"/article/r532eavn/","/3.%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E/73-77.html":"/article/5vjshyi9/","/notes/tools/":"/tools/","/notes/tools/caniuse.html":"/tools/caniuse/","/notes/tools/custom-theme.html":"/tools/theme-colors/","/notes/tools/home-hero-tint-plate.html":"/tools/home-hero-tint-plate/","/en/1.FE/1.Node/english_blog.html":"/en/article/xw0awouo/","/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html":"/config/notes/","/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html":"/config/basic/","/notes/theme/config/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E9%85%8D%E7%BD%AE.html":"/config/sidebar/","/notes/theme/config/%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE.html":"/config/locales/","/notes/theme/config/%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%85%8D%E7%BD%AE.html":"/config/navigation/","/notes/theme/config/%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.html":"/config/intro/","/notes/theme/frontend/notes.html":"/frontend/not/","/notes/theme/frontend/%E4%B8%BB%E9%A2%98.html":"/frontend/ba/","/notes/theme/frontend/%E4%BD%BF%E7%94%A8%20ref%20%E5%92%8C%20defineExpose%20%E8%AE%A9%E7%88%B6%E7%BB%84%E4%BB%B6%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95.html":"/frontend/refAndDefineExpose/","/notes/theme/frontend/%E4%BE%A7%E8%BE%B9.html":"/frontend/side/","/notes/theme/frontend/%E5%90%8C%E7%BA%A7%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E9%80%9A%E4%BF%A1%EF%BC%88%E5%85%84%E5%BC%9F%E7%BB%84%E4%BB%B6%EF%BC%89.html":"/frontend/brotherComponents/","/notes/theme/frontend/%E5%A4%9A%E8%AF%AD%E8%A8%80.html":"/frontend/loca/","/notes/theme/frontend/%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82%E7%BB%99%E7%88%B6%E7%BB%84%E4%BB%B6.html":"/frontend/sonToFather/","/notes/theme/frontend/%E5%AF%BC%E8%88%AA.html":"/frontend/na/","/notes/theme/frontend/%E6%8F%92%E6%A7%BD.html":"/frontend/Slot/","/notes/theme/frontend/%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0.html":"/frontend/ParentChildComponents/","/notes/theme/frontend/%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82%E7%BB%99%E5%AD%90%E7%BB%84%E4%BB%B6.html":"/frontend/fatherToSon/","/notes/theme/frontend/%E7%BB%84%E4%BB%B6%E8%B7%A8%E5%B1%82%E7%BA%A7%E4%BC%A0%E9%80%92.html":"/frontend/CrossLevel/","/notes/theme/frontend/%E8%AF%B4%E6%98%8E.html":"/frontend/int/","/notes/theme/blog/guide/api-node.html":"/blog/guide/api/node/","/notes/theme/blog/guide/api-%E5%AE%A2%E6%88%B7%E7%AB%AF.html":"/blog/guide/api/client/","/notes/theme/blog/guide/%E4%BB%8B%E7%BB%8D.html":"/blog/guide/intro/","/notes/theme/blog/guide/%E5%8D%9A%E5%AE%A2.html":"/blog/guide/blog/","/notes/theme/blog/guide/%E5%9B%BD%E9%99%85%E5%8C%96.html":"/blog/guide/international/","/notes/theme/blog/guide/%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.html":"/blog/guide/quick-start/","/notes/theme/blog/guide/%E5%B8%83%E5%B1%80%E6%8F%92%E6%A7%BD.html":"/blog/guide/layout-slots/","/notes/theme/blog/guide/%E6%9E%84%E5%BB%BA%E4%BC%98%E5%8C%96.html":"/blog/guide/optimize-build/","/notes/theme/blog/guide/%E7%9F%A5%E8%AF%86%E7%AC%94%E8%AE%B0.html":"/blog/guide/document/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6%E8%A6%86%E5%86%99.html":"/blog/guide/component-overrides/","/notes/theme/blog/guide/%E7%BC%96%E5%86%99%E6%96%87%E7%AB%A0.html":"/blog/guide/write/","/notes/theme/blog/guide/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F.html":"/blog/guide/custom-style/","/notes/theme/blog/guide/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A6%96%E9%A1%B5.html":"/blog/guide/custom-home/","/notes/theme/blog/guide/%E9%83%A8%E7%BD%B2.html":"/blog/guide/deployment/","/notes/theme/blog/guide/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.html":"/blog/guide/project-structure/","/notes/theme/config/frontmatter/basic.html":"/config/frontmatter/basic/","/notes/theme/config/frontmatter/friend.html":"/config/frontmatter/friends/","/notes/theme/config/frontmatter/home.html":"/config/frontmatter/home/","/notes/theme/config/frontmatter/post.html":"/config/frontmatter/article/","/notes/theme/config/plugins/":"/config/plugins/","/notes/theme/config/plugins/markdownImage.html":"/config/plugins/markdown-image/","/notes/theme/config/plugins/markdownInclude.html":"/config/plugins/markdown-include/","/notes/theme/config/plugins/markdownMath.html":"/config/plugins/markdown-math/","/notes/theme/config/plugins/markdownPower.html":"/config/plugins/markdown-power/","/notes/theme/config/plugins/markdown%E5%A2%9E%E5%BC%BA.html":"/config/plugins/markdown-enhance/","/notes/theme/config/plugins/%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE.html":"/config/plugins/code-highlight/","/notes/theme/config/plugins/%E6%90%9C%E7%B4%A2.html":"/config/plugins/search/","/notes/theme/config/plugins/%E6%B0%B4%E5%8D%B0.html":"/config/watermark/","/notes/theme/config/plugins/%E9%98%85%E8%AF%BB%E7%BB%9F%E8%AE%A1.html":"/config/plugins/reading-time/","/notes/theme/blog/guide/markdown/caniuse.html":"/blog/guide/markdown/caniuse/","/notes/theme/blog/guide/markdown/npm-to.html":"/blog/guide/markdown/npm-to/","/notes/theme/blog/guide/markdown/%E5%8D%A1%E7%89%87.html":"/blog/guide/markdown/card/","/notes/theme/blog/guide/markdown/%E5%9B%BE%E6%A0%87.html":"/blog/guide/markdown/iconify/","/notes/theme/blog/guide/markdown/%E5%9F%BA%E7%A1%80.html":"/blog/guide/markdown/basic/","/notes/theme/blog/guide/markdown/%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6.html":"/blog/guide/markdown/include/","/notes/theme/blog/guide/markdown/%E6%89%A9%E5%B1%95.html":"/blog/guide/markdown/extensions/","/notes/theme/blog/guide/markdown/%E6%96%87%E4%BB%B6%E6%A0%91.html":"/blog/guide/markdown/file-tree/","/notes/theme/blog/guide/markdown/%E6%AD%A5%E9%AA%A4.html":"/blog/guide/markdown/steps/","/notes/theme/blog/guide/markdown/%E7%A4%BA%E4%BE%8B%E5%AE%B9%E5%99%A8.html":"/blog/guide/markdown/demo-wrapper/","/notes/theme/blog/guide/markdown/%E9%80%89%E9%A1%B9%E7%BB%84.html":"/blog/guide/markdown/tabs/","/notes/theme/blog/guide/markdown/%E9%9A%90%E7%A7%98%E6%96%87%E6%9C%AC.html":"/blog/guide/markdown/plot/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/twoslash.html":"/blog/guide/markdown/twoslash/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E4%BB%8B%E7%BB%8D.html":"/blog/guide/code/intro/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E4%BB%A3%E7%A0%81%E7%BB%84.html":"/blog/guide/code/group/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81.html":"/blog/guide/code/import/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E7%89%B9%E6%80%A7%E6%94%AF%E6%8C%81.html":"/blog/guide/code/features/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/codeSandbox.html":"/blog/guide/code/code-sandbox/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/codepen.html":"/blog/guide/code/code-pen/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/golang.html":"/blog/guide/repl/golang/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/jsFiddle.html":"/blog/guide/code/jsfiddle/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/kotlin.html":"/blog/guide/repl/kotlin/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/replit.html":"/blog/guide/code/replit/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/rust.html":"/blog/guide/repl/rust/","/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA/%E5%89%8D%E7%AB%AF.html":"/blog/guide/repl/frontend/","/notes/theme/blog/guide/%E5%B5%8C%E5%85%A5/bilibili.html":"/blog/guide/embed/video/bilibili/","/notes/theme/blog/guide/%E5%B5%8C%E5%85%A5/pdf.html":"/blog/guide/embed/pdf/","/notes/theme/blog/guide/%E5%B5%8C%E5%85%A5/youtube.html":"/blog/guide/embed/video/youtube/","/notes/theme/blog/guide/%E5%9B%BE%E8%A1%A8/chart.html":"/blog/guide/chart/chartjs/","/notes/theme/blog/guide/%E5%9B%BE%E8%A1%A8/echarts.html":"/blog/guide/chart/echarts/","/notes/theme/blog/guide/%E5%9B%BE%E8%A1%A8/flowchart.html":"/blog/guide/chart/flowchart/","/notes/theme/blog/guide/%E5%9B%BE%E8%A1%A8/mermaid.html":"/blog/guide/chart/mermaid/","/en/notes/theme/config/intro.html":"/en/config/intro/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/npmBadge.html":"/blog/guide/components/npm-badge/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/repoCard.html":"/blog/guide/components/github-repo-card/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87.html":"/blog/guide/components/cark/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E5%8D%A1%E7%89%87%E5%AE%B9%E5%99%A8.html":"/blog/guide/components/card-grid/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E5%9B%BE%E6%A0%87.html":"/blog/guide/components/icon/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E5%9B%BE%E7%89%87%E5%8D%A1%E7%89%87.html":"/blog/guide/components/image-card/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E5%BE%BD%E7%AB%A0.html":"/blog/guide/components/badge/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E7%80%91%E5%B8%83%E6%B5%81%E5%AE%B9%E5%99%A8.html":"/blog/guide/components/card-masonry/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E8%BD%AE%E6%92%AD%E5%9B%BE.html":"/blog/guide/components/swiper/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E9%93%BE%E6%8E%A5%E5%8D%A1%E7%89%87.html":"/blog/guide/components/link-card/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E9%9A%90%E7%A7%98%E6%96%87%E6%9C%AC.html":"/blog/guide/components/plot/","/notes/theme/blog/guide/%E7%BB%84%E4%BB%B6/%E9%A6%96%E9%A1%B5%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8.html":"/blog/guide/components/home-box/","/en/notes/theme/blog/guide/intro.html":"/en/blog/guide/intro/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/seo.html":"/blog/guide/seo/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/sitemap.html":"/blog/guide/sitemap/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E4%BB%A3%E7%A0%81%E5%A4%8D%E5%88%B6.html":"/blog/guide/features/copy-code/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E5%85%AC%E5%91%8A%E6%9D%BF.html":"/blog/guide/features/bulletin/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E5%86%85%E5%AE%B9%E6%90%9C%E7%B4%A2.html":"/blog/guide/features/content-search/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E5%8A%A0%E5%AF%86.html":"/blog/guide/features/encryption/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5%E9%A1%B5.html":"/blog/guide/friend-links/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E5%9B%BE%E6%A0%87.html":"/blog/guide/features/icon/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E5%8F%98%E6%9B%B4%E5%8E%86%E5%8F%B2.html":"/blog/guide/features/changelog/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E6%B0%B4%E5%8D%B0.html":"/blog/guide/features/watermark/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E7%89%88%E6%9D%83%E6%89%80%E6%9C%89.html":"/blog/guide/features/copyright/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E6%96%87%E7%AB%A0%E8%B4%A1%E7%8C%AE%E8%80%85.html":"/blog/guide/features/contributors/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E7%BB%84%E4%BB%B6.html":"/blog/guide/features/component/","/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E8%AF%84%E8%AE%BA.html":"/blog/guide/features/comments/"}'
	),
	Q_ = Object.fromEntries([
		['/', { loader: () => L(() => import('./index.html-CZjUIFNR.js'), []), meta: { title: '' } }],
		[
			'/changelog/',
			{
				loader: () => L(() => import('./index.html-BGoFK0J3.js'), []),
				meta: { title: 'Changelog' },
			},
		],
		[
			'/contributing/',
			{
				loader: () => L(() => import('./index.html-Cn7wu5U2.js'), []),
				meta: { title: '贡献指南' },
			},
		],
		[
			'/demos/',
			{ loader: () => L(() => import('./index.html-BEFD5vdX.js'), []), meta: { title: '案例' } },
		],
		[
			'/friends/',
			{
				loader: () => L(() => import('./index.html-Bt8HciSF.js'), []),
				meta: { title: '友情链接' },
			},
		],
		[
			'/faq/',
			{
				loader: () => L(() => import('./index.html-DFc0WQVQ.js'), []),
				meta: { title: '常见问题' },
			},
		],
		[
			'/sponsor/',
			{
				loader: () => L(() => import('./index.html-CEhDvtoU.js'), []),
				meta: { title: '喝杯奶茶' },
			},
		],
		[
			'/article/mcz1csb4/',
			{
				loader: () => L(() => import('./index.html-CEGz6cNt.js'), []),
				meta: { title: 'Markdown 基础' },
			},
		],
		[
			'/article/mcgayb5w/',
			{
				loader: () => L(() => import('./index.html-D-buZB8r.js'), []),
				meta: { title: 'markdown 扩展' },
			},
		],
		[
			'/article/97s6ha1e/',
			{
				loader: () => L(() => import('./index.html-C_H_HKPq.js'), []),
				meta: { title: '全屏水印' },
			},
		],
		[
			'/article/2z59hh8g/',
			{
				loader: () => L(() => import('./index.html-BRUTSVeT.js'), []),
				meta: { title: '内容水印' },
			},
		],
		[
			'/article/enx7c9s/',
			{
				loader: () => L(() => import('./index.html-C43DQquk.js'), []),
				meta: { title: '加密文章，密码：123456' },
			},
		],
		[
			'/article/i4cuuonn/',
			{
				loader: () => L(() => import('./index.html-CRX6yHDv.js'), []),
				meta: { title: '图片水印' },
			},
		],
		[
			'/article/30995vcd/',
			{
				loader: () => L(() => import('./index.html-COH9oBwl.js'), []),
				meta: { title: '照片类作品示例' },
			},
		],
		[
			'/article/xld23tu1/',
			{
				loader: () => L(() => import('./index.html-LmqM0jkF.js'), []),
				meta: { title: '示例文章' },
			},
		],
		[
			'/article/elac3ddb/',
			{
				loader: () => L(() => import('./index.html-DlLt8gMo.js'), []),
				meta: { title: '示例文章2' },
			},
		],
		[
			'/article/9eh4d6ao/',
			{
				loader: () => L(() => import('./index.html-LwlsNo1P.js'), []),
				meta: { title: '示例文章3' },
			},
		],
		[
			'/article/qk81wscb/',
			{
				loader: () => L(() => import('./index.html-Ck5V3YHD.js'), []),
				meta: { title: '示例文章4' },
			},
		],
		[
			'/article/2seng2ou/',
			{
				loader: () => L(() => import('./index.html-BGdlFT4j.js'), []),
				meta: { title: '示例文章5' },
			},
		],
		[
			'/article/v9fejej9/',
			{
				loader: () => L(() => import('./index.html-i4XcPJgP.js'), []),
				meta: { title: '示例文章6' },
			},
		],
		[
			'/article/5xbhl125/',
			{
				loader: () => L(() => import('./index.html-C66v024s.js'), []),
				meta: { title: '示例文章7' },
			},
		],
		[
			'/article/m4gen76w/',
			{
				loader: () => L(() => import('./index.html-Do5CIMJh.js'), []),
				meta: { title: '示例文章8' },
			},
		],
		[
			'/article/z8zvx0ru/',
			{
				loader: () => L(() => import('./index.html-DNVvYcGR.js'), []),
				meta: { title: '示例文章9' },
			},
		],
		[
			'/article/0lk24ty5/',
			{
				loader: () => L(() => import('./index.html-1EkAGN3p.js'), []),
				meta: { title: '主题效果预览' },
			},
		],
		[
			'/article/ecxnxxd0/',
			{
				loader: () => L(() => import('./index.html-CeHl_OJw.js'), []),
				meta: { title: '如何使用 frontmatter' },
			},
		],
		[
			'/article/6pa64b1n/',
			{
				loader: () => L(() => import('./index.html-fUIGKMf7.js'), []),
				meta: { title: '1.0.0-rc.102 至 rc.103 更新说明' },
			},
		],
		[
			'/article/r532eavn/',
			{
				loader: () => L(() => import('./index.html-D8X64u-O.js'), []),
				meta: { title: '1.0.0-rc.120 更新说明' },
			},
		],
		[
			'/article/5vjshyi9/',
			{
				loader: () => L(() => import('./index.html-CragPzBp.js'), []),
				meta: { title: '1.0.0-rc.73 至 rc.77 更新说明' },
			},
		],
		[
			'/en/',
			{ loader: () => L(() => import('./index.html-Dc_l4ik2.js'), []), meta: { title: '' } },
		],
		[
			'/tools/',
			{
				loader: () => L(() => import('./index.html-DSlgywa5.js'), []),
				meta: { title: '主题工具包' },
			},
		],
		[
			'/tools/caniuse/',
			{
				loader: () => L(() => import('./index.html-CiYMWokJ.js'), []),
				meta: { title: 'caniuse 特性搜索', icon: 'fa-brands:css3' },
			},
		],
		[
			'/tools/theme-colors/',
			{
				loader: () => L(() => import('./index.html-if0Zpz9E.js'), []),
				meta: { title: '主题颜色工具', icon: 'unjs:theme-colors' },
			},
		],
		[
			'/tools/home-hero-tint-plate/',
			{
				loader: () => L(() => import('./index.html-C9qJRiJq.js'), []),
				meta: { title: '首页背景色板配置', icon: 'icon-park-outline:hand-painted-plate' },
			},
		],
		[
			'/en/article/xw0awouo/',
			{
				loader: () => L(() => import('./index.html-BafwY68u.js'), []),
				meta: { title: 'english_blog' },
			},
		],
		[
			'/config/notes/',
			{
				loader: () => L(() => import('./index.html-_H-mSkby.js'), []),
				meta: { title: 'notes配置' },
			},
		],
		[
			'/config/basic/',
			{
				loader: () => L(() => import('./index.html-EIgFEJTS.js'), []),
				meta: { title: '主题配置' },
			},
		],
		[
			'/config/sidebar/',
			{
				loader: () => L(() => import('./index.html-DriSBjO6.js'), []),
				meta: { title: '侧边栏配置' },
			},
		],
		[
			'/config/locales/',
			{
				loader: () => L(() => import('./index.html-CaInf5fn.js'), []),
				meta: { title: '多语言配置' },
			},
		],
		[
			'/config/navigation/',
			{
				loader: () => L(() => import('./index.html-CTQtHbBV.js'), []),
				meta: { title: '导航栏配置' },
			},
		],
		[
			'/config/intro/',
			{
				loader: () => L(() => import('./index.html-CAqaiZNT.js'), []),
				meta: { title: '配置说明' },
			},
		],
		[
			'/frontend/not/',
			{ loader: () => L(() => import('./index.html-Cn27Vaby.js'), []), meta: { title: 'notes' } },
		],
		[
			'/frontend/ba/',
			{ loader: () => L(() => import('./index.html-CDWa8nmF.js'), []), meta: { title: '主题' } },
		],
		[
			'/frontend/refAndDefineExpose/',
			{
				loader: () => L(() => import('./index.html-DoJuW4-f.js'), []),
				meta: { title: '使用 ref 和 defineExpose 让父组件访问子组件方法' },
			},
		],
		[
			'/frontend/side/',
			{ loader: () => L(() => import('./index.html-CzY623Mr.js'), []), meta: { title: '侧' } },
		],
		[
			'/frontend/brotherComponents/',
			{
				loader: () => L(() => import('./index.html-BUiCfrmo.js'), []),
				meta: { title: '同级组件之间的通信（兄弟组件）' },
			},
		],
		[
			'/frontend/loca/',
			{ loader: () => L(() => import('./index.html-CIt8FM22.js'), []), meta: { title: '多语言' } },
		],
		[
			'/frontend/sonToFather/',
			{
				loader: () => L(() => import('./index.html-CSIJKwXz.js'), []),
				meta: { title: '子组件传参给父组件' },
			},
		],
		[
			'/frontend/na/',
			{ loader: () => L(() => import('./index.html-ZopsR1p5.js'), []), meta: { title: '导航' } },
		],
		[
			'/frontend/Slot/',
			{ loader: () => L(() => import('./index.html-DcuBLV3v.js'), []), meta: { title: '插槽' } },
		],
		[
			'/frontend/ParentChildComponents/',
			{
				loader: () => L(() => import('./index.html-Dd9Wp_Ce.js'), []),
				meta: { title: '父子组件之间传递函数' },
			},
		],
		[
			'/frontend/fatherToSon/',
			{
				loader: () => L(() => import('./index.html-Bpa6K8AD.js'), []),
				meta: { title: '父组件传参给子组件' },
			},
		],
		[
			'/frontend/CrossLevel/',
			{
				loader: () => L(() => import('./index.html-CSfp1QMt.js'), []),
				meta: { title: '组件跨层级传递' },
			},
		],
		[
			'/frontend/int/',
			{ loader: () => L(() => import('./index.html-BunDF8R_.js'), []), meta: { title: '说明' } },
		],
		[
			'/blog/guide/api/node/',
			{
				loader: () => L(() => import('./index.html-RKGntr6b.js'), []),
				meta: { title: 'Node', icon: 'fa6-brands:node' },
			},
		],
		[
			'/blog/guide/api/client/',
			{
				loader: () => L(() => import('./index.html-OZHPezVc.js'), []),
				meta: { title: '客户端', icon: 'nimbus:browser' },
			},
		],
		[
			'/blog/guide/intro/',
			{
				loader: () => L(() => import('./index.html-DsTpDSjm.js'), []),
				meta: { title: '主题介绍', icon: 'mdi:tooltip-text-outline' },
			},
		],
		[
			'/blog/guide/blog/',
			{
				loader: () => L(() => import('./index.html-aHtBn4K7.js'), []),
				meta: { title: '博客', icon: 'material-symbols:article-outline' },
			},
		],
		[
			'/blog/guide/international/',
			{
				loader: () => L(() => import('./index.html-CZBx7hvP.js'), []),
				meta: { title: '国际化', icon: 'material-symbols-light:language' },
			},
		],
		[
			'/blog/guide/quick-start/',
			{
				loader: () => L(() => import('./index.html-D1hqatA9.js'), []),
				meta: { title: '安装/使用', icon: 'grommet-icons:install' },
			},
		],
		[
			'/blog/guide/layout-slots/',
			{
				loader: () => L(() => import('./index.html-BzumQFH6.js'), []),
				meta: { title: '布局插槽', icon: 'ph:layout-duotone' },
			},
		],
		[
			'/blog/guide/optimize-build/',
			{
				loader: () => L(() => import('./index.html-D3gm8U4A.js'), []),
				meta: { title: '构建优化', icon: 'clarity:bundle-solid' },
			},
		],
		[
			'/blog/guide/document/',
			{
				loader: () => L(() => import('./index.html-TD3YJSci.js'), []),
				meta: { title: '文档/知识笔记', icon: 'teenyicons:doc-outline' },
			},
		],
		[
			'/blog/guide/component-overrides/',
			{
				loader: () => L(() => import('./index.html-CIZpFuvO.js'), []),
				meta: { title: '组件覆写', icon: 'carbon:cics-sit-overrides' },
			},
		],
		[
			'/blog/guide/write/',
			{
				loader: () => L(() => import('./index.html-ClaP37jc.js'), []),
				meta: { title: '编写文章', icon: 'mingcute:edit-4-line' },
			},
		],
		[
			'/blog/guide/custom-style/',
			{
				loader: () => L(() => import('./index.html-DMddafLP.js'), []),
				meta: { title: '自定义样式', icon: 'icon-park-outline:theme' },
			},
		],
		[
			'/blog/guide/custom-home/',
			{
				loader: () => L(() => import('./index.html-DvF_RP53.js'), __vite__mapDeps([0, 1])),
				meta: { title: '自定义首页', icon: 'material-symbols:home-outline' },
			},
		],
		[
			'/blog/guide/deployment/',
			{
				loader: () => L(() => import('./index.html-CHvRLpsC.js'), []),
				meta: { title: '部署', icon: 'material-symbols:deployed-code-outline' },
			},
		],
		[
			'/blog/guide/project-structure/',
			{
				loader: () => L(() => import('./index.html-DmccnZZi.js'), []),
				meta: { title: '项目结构', icon: 'ph:tree-structure-bold' },
			},
		],
		[
			'/config/frontmatter/basic/',
			{
				loader: () => L(() => import('./index.html-BY0JpbcE.js'), []),
				meta: { title: '通用配置' },
			},
		],
		[
			'/config/frontmatter/friends/',
			{
				loader: () => L(() => import('./index.html-DwV1GjHy.js'), []),
				meta: { title: '友情链接页' },
			},
		],
		[
			'/config/frontmatter/home/',
			{ loader: () => L(() => import('./index.html-B0rmwoQj.js'), []), meta: { title: '首页' } },
		],
		[
			'/config/frontmatter/article/',
			{
				loader: () => L(() => import('./index.html-Dv_7eY_I.js'), []),
				meta: { title: '博客文章' },
			},
		],
		[
			'/config/plugins/',
			{ loader: () => L(() => import('./index.html-CljopZeq.js'), []), meta: { title: '介绍' } },
		],
		[
			'/config/plugins/markdown-image/',
			{
				loader: () => L(() => import('./index.html-BlWD-xeU.js'), []),
				meta: { title: 'Markdown Image' },
			},
		],
		[
			'/config/plugins/markdown-include/',
			{
				loader: () => L(() => import('./index.html-6bGgH7Ed.js'), []),
				meta: { title: 'Markdown Include' },
			},
		],
		[
			'/config/plugins/markdown-math/',
			{
				loader: () => L(() => import('./index.html-aHRjCgr-.js'), []),
				meta: { title: 'Markdown Math' },
			},
		],
		[
			'/config/plugins/markdown-power/',
			{
				loader: () => L(() => import('./index.html-C_32KJ39.js'), []),
				meta: { title: 'Markdown Power' },
			},
		],
		[
			'/config/plugins/markdown-enhance/',
			{
				loader: () => L(() => import('./index.html-EsP05rJB.js'), []),
				meta: { title: 'Markdown Enhance' },
			},
		],
		[
			'/config/plugins/code-highlight/',
			{
				loader: () => L(() => import('./index.html-CUD_UN0-.js'), []),
				meta: { title: '代码高亮' },
			},
		],
		[
			'/config/plugins/search/',
			{
				loader: () => L(() => import('./index.html-CSUUOa_p.js'), []),
				meta: { title: '内容搜索' },
			},
		],
		[
			'/config/watermark/',
			{ loader: () => L(() => import('./index.html-BYwtglKy.js'), []), meta: { title: '水印' } },
		],
		[
			'/config/plugins/reading-time/',
			{
				loader: () => L(() => import('./index.html-ChYuuESv.js'), []),
				meta: { title: '阅读统计' },
			},
		],
		[
			'/blog/guide/markdown/caniuse/',
			{
				loader: () => L(() => import('./index.html-DqlaaFuj.js'), []),
				meta: { title: 'Can I Use', icon: 'streamline:desktop-help' },
			},
		],
		[
			'/blog/guide/markdown/npm-to/',
			{
				loader: () => L(() => import('./index.html-D8r3cuHb.js'), []),
				meta: { title: 'npmTo 容器', icon: 'gg:npm' },
			},
		],
		[
			'/blog/guide/markdown/card/',
			{
				loader: () => L(() => import('./index.html-_b1M0nJA.js'), []),
				meta: { title: '卡片', icon: 'solar:card-broken' },
			},
		],
		[
			'/blog/guide/markdown/iconify/',
			{
				loader: () => L(() => import('./index.html-ETuPeF0P.js'), []),
				meta: { title: '图标', icon: 'grommet-icons:emoji' },
			},
		],
		[
			'/blog/guide/markdown/basic/',
			{
				loader: () => L(() => import('./index.html-IizEtAF8.js'), []),
				meta: { title: '基础', icon: 'fluent:markdown-20-filled' },
			},
		],
		[
			'/blog/guide/markdown/include/',
			{
				loader: () => L(() => import('./index.html-DFUGHhpg.js'), []),
				meta: { title: '导入文件', icon: 'fluent:table-simple-include-16-regular' },
			},
		],
		[
			'/blog/guide/markdown/extensions/',
			{
				loader: () => L(() => import('./index.html-CbX0b_jS.js'), []),
				meta: { title: '扩展', icon: 'fluent-mdl2:auto-enhance-on' },
			},
		],
		[
			'/blog/guide/markdown/file-tree/',
			{
				loader: () => L(() => import('./index.html-BCNlrT1e.js'), []),
				meta: { title: '文件树', icon: 'mdi:file-tree' },
			},
		],
		[
			'/blog/guide/markdown/steps/',
			{
				loader: () => L(() => import('./index.html-BV-qTYNn.js'), []),
				meta: { title: '步骤', icon: 'streamline:steps-number' },
			},
		],
		[
			'/blog/guide/markdown/demo-wrapper/',
			{
				loader: () => L(() => import('./index.html-BrFDRrcS.js'), __vite__mapDeps([2, 1])),
				meta: { title: '示例容器', icon: 'icon-park-outline:eyes' },
			},
		],
		[
			'/blog/guide/markdown/tabs/',
			{
				loader: () => L(() => import('./index.html-DA8An01L.js'), []),
				meta: { title: '选项组', icon: 'vaadin:tabs' },
			},
		],
		[
			'/blog/guide/markdown/plot/',
			{
				loader: () => L(() => import('./index.html-CAKtKwpx.js'), []),
				meta: { title: '隐秘文本', icon: 'weui:eyes-off-outlined' },
			},
		],
		[
			'/blog/guide/markdown/twoslash/',
			{
				loader: () => L(() => import('./index.html-jpZMUlfY.js'), []),
				meta: { title: 'Two Slash', icon: 'material-symbols:experiment-outline' },
			},
		],
		[
			'/blog/guide/code/intro/',
			{
				loader: () => L(() => import('./index.html-DjdAAajR.js'), []),
				meta: { title: '介绍', icon: 'ic:outline-code' },
			},
		],
		[
			'/blog/guide/code/group/',
			{
				loader: () => L(() => import('./index.html-f-SBsGA_.js'), []),
				meta: { title: '代码组', icon: 'fluent:group-list-20-filled' },
			},
		],
		[
			'/blog/guide/code/import/',
			{
				loader: () => L(() => import('./index.html-I4c0G4ll.js'), []),
				meta: { title: '导入代码', icon: 'mdi:import' },
			},
		],
		[
			'/blog/guide/code/features/',
			{
				loader: () => L(() => import('./index.html-CVaVe4Ru.js'), []),
				meta: { title: '特性支持', icon: 'majesticons:code-block-line' },
			},
		],
		[
			'/blog/guide/code/code-sandbox/',
			{
				loader: () => L(() => import('./index.html-CKFOoXuS.js'), []),
				meta: { title: 'Code Sandbox', icon: 'lucide:codesandbox' },
			},
		],
		[
			'/blog/guide/code/code-pen/',
			{
				loader: () => L(() => import('./index.html-8u2HsrVQ.js'), []),
				meta: { title: 'Code Pen', icon: 'mingcute:codepen-line' },
			},
		],
		[
			'/blog/guide/repl/golang/',
			{
				loader: () => L(() => import('./index.html-C2JrkxI5.js'), []),
				meta: { title: 'Golang', icon: 'devicon-plain:go' },
			},
		],
		[
			'/blog/guide/code/jsfiddle/',
			{
				loader: () => L(() => import('./index.html-D_6o_GvY.js'), []),
				meta: { title: 'Js Fiddle', icon: 'bxl:jsfiddle' },
			},
		],
		[
			'/blog/guide/repl/kotlin/',
			{
				loader: () => L(() => import('./index.html-CiTuGSez.js'), []),
				meta: { title: 'Kotlin', icon: 'tabler:brand-kotlin' },
			},
		],
		[
			'/blog/guide/code/replit/',
			{
				loader: () => L(() => import('./index.html-Fj-hoePM.js'), []),
				meta: { title: 'Replit', icon: 'simple-icons:replit' },
			},
		],
		[
			'/blog/guide/repl/rust/',
			{
				loader: () => L(() => import('./index.html-CNY7TYWz.js'), []),
				meta: { title: 'Rust', icon: 'logos:rust' },
			},
		],
		[
			'/blog/guide/repl/frontend/',
			{
				loader: () => L(() => import('./index.html-CfOsctvs.js'), []),
				meta: { title: '前端', icon: 'icon-park-outline:html-five' },
			},
		],
		[
			'/blog/guide/embed/video/bilibili/',
			{
				loader: () => L(() => import('./index.html-DjduOy7R.js'), []),
				meta: { title: 'Bilibili 视频', icon: 'ri:bilibili-fill' },
			},
		],
		[
			'/blog/guide/embed/pdf/',
			{
				loader: () => L(() => import('./index.html-DGfiKKWA.js'), []),
				meta: { title: 'PDF 阅读', icon: 'teenyicons:pdf-outline' },
			},
		],
		[
			'/blog/guide/embed/video/youtube/',
			{
				loader: () => L(() => import('./index.html-2KuiwX2T.js'), []),
				meta: { title: 'Youtube 视频', icon: 'mdi:youtube' },
			},
		],
		[
			'/blog/guide/chart/chartjs/',
			{
				loader: () => L(() => import('./index.html-ZWi8wvTE.js'), []),
				meta: { title: 'chart.js', icon: 'solar:chart-bold' },
			},
		],
		[
			'/blog/guide/chart/echarts/',
			{
				loader: () => L(() => import('./index.html-BwcS1sEl.js'), []),
				meta: { title: 'ECharts', icon: 'raphael:piechart' },
			},
		],
		[
			'/blog/guide/chart/flowchart/',
			{
				loader: () => L(() => import('./index.html-DTIUeWXr.js'), []),
				meta: { title: 'flowchart', icon: 'f7:flowchart' },
			},
		],
		[
			'/blog/guide/chart/mermaid/',
			{
				loader: () => L(() => import('./index.html-D-20XC0R.js'), []),
				meta: { title: 'mermaid', icon: 'file-icons:mermaid' },
			},
		],
		[
			'/en/config/intro/',
			{
				loader: () => L(() => import('./index.html-CtLB6kEm.js'), []),
				meta: { title: 'Configuration' },
			},
		],
		[
			'/blog/guide/components/npm-badge/',
			{
				loader: () => L(() => import('./index.html-D7-PPnad.js'), []),
				meta: { title: 'Npm 徽章', icon: 'akar-icons:npm-fill' },
			},
		],
		[
			'/blog/guide/components/github-repo-card/',
			{
				loader: () => L(() => import('./index.html-qJnl7rKW.js'), []),
				meta: { title: 'Repo 卡片', icon: 'octicon:repo-16' },
			},
		],
		[
			'/blog/guide/components/cark/',
			{
				loader: () => L(() => import('./index.html-0dzbuegN.js'), []),
				meta: { title: '卡片', icon: 'solar:card-broken' },
			},
		],
		[
			'/blog/guide/components/card-grid/',
			{
				loader: () => L(() => import('./index.html-tPm5b1jO.js'), []),
				meta: { title: '卡片容器', icon: 'vaadin:grid-h' },
			},
		],
		[
			'/blog/guide/components/icon/',
			{
				loader: () => L(() => import('./index.html-Co1h7zk3.js'), []),
				meta: { title: '图标', icon: 'grommet-icons:emoji' },
			},
		],
		[
			'/blog/guide/components/image-card/',
			{
				loader: () => L(() => import('./index.html-eezRGU9t.js'), []),
				meta: { title: '图片卡片', icon: 'fa:photo' },
			},
		],
		[
			'/blog/guide/components/badge/',
			{
				loader: () => L(() => import('./index.html-BeBKaFKv.js'), []),
				meta: { title: '徽章', icon: 'iconamoon:badge-light' },
			},
		],
		[
			'/blog/guide/components/card-masonry/',
			{
				loader: () => L(() => import('./index.html-mL4wpGGi.js'), []),
				meta: { title: '瀑布流容器', icon: 'ri:layout-masonry-line' },
			},
		],
		[
			'/blog/guide/components/swiper/',
			{
				loader: () => L(() => import('./index.html-BsN_Yfia.js'), []),
				meta: { title: '轮播图', icon: 'dashicons:images-alt2' },
			},
		],
		[
			'/blog/guide/components/link-card/',
			{
				loader: () => L(() => import('./index.html-DEZC4QRo.js'), []),
				meta: { title: '链接卡片', icon: 'solar:card-send-linear' },
			},
		],
		[
			'/blog/guide/components/plot/',
			{
				loader: () => L(() => import('./index.html-BZr-mfn9.js'), []),
				meta: { title: '“隐秘”文本', icon: 'lets-icons:hide-eye' },
			},
		],
		[
			'/blog/guide/components/home-box/',
			{
				loader: () => L(() => import('./index.html-CqQBivvi.js'), []),
				meta: { title: '首页布局容器', icon: 'tabler:container' },
			},
		],
		[
			'/en/blog/guide/intro/',
			{
				loader: () => L(() => import('./index.html-BnAkdVjv.js'), []),
				meta: { title: 'Theme Introduction' },
			},
		],
		[
			'/blog/guide/seo/',
			{
				loader: () => L(() => import('./index.html-BT7d6keh.js'), []),
				meta: { title: 'SEO', icon: 'tabler:seo' },
			},
		],
		[
			'/blog/guide/sitemap/',
			{
				loader: () => L(() => import('./index.html-BDVJB9mL.js'), []),
				meta: { title: 'sitemap', icon: 'mdi:sitemap-outline' },
			},
		],
		[
			'/blog/guide/features/copy-code/',
			{
				loader: () => L(() => import('./index.html-20z3ZtL1.js'), []),
				meta: { title: '代码复制', icon: 'ph:code' },
			},
		],
		[
			'/blog/guide/features/bulletin/',
			{
				loader: () => L(() => import('./index.html-Cku5iDiF.js'), []),
				meta: { title: '公告板', icon: 'mingcute:announcement-line' },
			},
		],
		[
			'/blog/guide/features/content-search/',
			{
				loader: () => L(() => import('./index.html-5rsWDGej.js'), []),
				meta: { title: '内容搜索', icon: 'material-symbols:search' },
			},
		],
		[
			'/blog/guide/features/encryption/',
			{
				loader: () => L(() => import('./index.html-BvgKNWM0.js'), []),
				meta: { title: '加密', icon: 'mdi:encryption-outline' },
			},
		],
		[
			'/blog/guide/friend-links/',
			{
				loader: () => L(() => import('./index.html-CyAiGYKR.js'), []),
				meta: { title: '友情链接页', icon: 'carbon:friendship' },
			},
		],
		[
			'/blog/guide/features/icon/',
			{
				loader: () => L(() => import('./index.html-BcGgV0PC.js'), []),
				meta: { title: '图标', icon: 'raphael:smile2' },
			},
		],
		[
			'/blog/guide/features/changelog/',
			{
				loader: () => L(() => import('./index.html-z3tQhmIn.js'), []),
				meta: { title: '文章变更历史', icon: 'radix-icons:activity-log' },
			},
		],
		[
			'/blog/guide/features/watermark/',
			{
				loader: () => L(() => import('./index.html-CX8Yi5_p.js'), []),
				meta: { title: '文章水印', icon: 'material-symbols-light:branding-watermark-outline' },
			},
		],
		[
			'/blog/guide/features/copyright/',
			{
				loader: () => L(() => import('./index.html-CPAg-uxc.js'), []),
				meta: { title: '文章版权所有', icon: 'lucide:creative-commons' },
			},
		],
		[
			'/blog/guide/features/contributors/',
			{
				loader: () => L(() => import('./index.html-DvyvcnfA.js'), []),
				meta: { title: '文章贡献者', icon: 'simple-icons:contributorcovenant' },
			},
		],
		[
			'/blog/guide/features/component/',
			{
				loader: () => L(() => import('./index.html-D-NoRhi3.js'), []),
				meta: { title: '组件', icon: 'radix-icons:component-2' },
			},
		],
		[
			'/blog/guide/features/comments/',
			{
				loader: () => L(() => import('./index.html-CEAHocUm.js'), []),
				meta: { title: '评论', icon: 'la:comment' },
			},
		],
		[
			'/404.html',
			{ loader: () => L(() => import('./404.html-mvwuaS29.js'), []), meta: { title: '' } },
		],
		[
			'/blog/',
			{ loader: () => L(() => import('./index.html-PQvyYGTk.js'), []), meta: { title: '博客' } },
		],
		[
			'/blog/tags/',
			{ loader: () => L(() => import('./index.html-B0FdyfkD.js'), []), meta: { title: '标签' } },
		],
		[
			'/blog/archives/',
			{ loader: () => L(() => import('./index.html-DiiHP-Ih.js'), []), meta: { title: '归档' } },
		],
		[
			'/blog/categories/',
			{ loader: () => L(() => import('./index.html-ChzGcck2.js'), []), meta: { title: '分类' } },
		],
	])
function J_() {
	return sh().__VUE_DEVTOOLS_GLOBAL_HOOK__
}
function sh() {
	return typeof navigator < 'u' && typeof window < 'u'
		? window
		: typeof globalThis < 'u'
		? globalThis
		: {}
}
const X_ = typeof Proxy == 'function',
	Z_ = 'devtools-plugin:setup',
	e0 = 'plugin:settings:set'
let Ao, Ma
function t0() {
	var e
	return (
		Ao !== void 0 ||
			(typeof window < 'u' && window.performance
				? ((Ao = !0), (Ma = window.performance))
				: typeof globalThis < 'u' &&
				  !((e = globalThis.perf_hooks) === null || e === void 0) &&
				  e.performance
				? ((Ao = !0), (Ma = globalThis.perf_hooks.performance))
				: (Ao = !1)),
		Ao
	)
}
function n0() {
	return t0() ? Ma.now() : Date.now()
}
class o0 {
	constructor(t, n) {
		;(this.target = null),
			(this.targetQueue = []),
			(this.onQueue = []),
			(this.plugin = t),
			(this.hook = n)
		const o = {}
		if (t.settings)
			for (const s in t.settings) {
				const a = t.settings[s]
				o[s] = a.defaultValue
			}
		const r = `__vue-devtools-plugin-settings__${t.id}`
		let i = Object.assign({}, o)
		try {
			const s = localStorage.getItem(r),
				a = JSON.parse(s)
			Object.assign(i, a)
		} catch {}
		;(this.fallbacks = {
			getSettings() {
				return i
			},
			setSettings(s) {
				try {
					localStorage.setItem(r, JSON.stringify(s))
				} catch {}
				i = s
			},
			now() {
				return n0()
			},
		}),
			n &&
				n.on(e0, (s, a) => {
					s === this.plugin.id && this.fallbacks.setSettings(a)
				}),
			(this.proxiedOn = new Proxy(
				{},
				{
					get: (s, a) =>
						this.target
							? this.target.on[a]
							: (...l) => {
									this.onQueue.push({ method: a, args: l })
							  },
				}
			)),
			(this.proxiedTarget = new Proxy(
				{},
				{
					get: (s, a) =>
						this.target
							? this.target[a]
							: a === 'on'
							? this.proxiedOn
							: Object.keys(this.fallbacks).includes(a)
							? (...l) => (
									this.targetQueue.push({ method: a, args: l, resolve: () => {} }),
									this.fallbacks[a](...l)
							  )
							: (...l) =>
									new Promise((c) => {
										this.targetQueue.push({ method: a, args: l, resolve: c })
									}),
				}
			))
	}
	async setRealTarget(t) {
		this.target = t
		for (const n of this.onQueue) this.target.on[n.method](...n.args)
		for (const n of this.targetQueue) n.resolve(await this.target[n.method](...n.args))
	}
}
function r0(e, t) {
	const n = e,
		o = sh(),
		r = J_(),
		i = X_ && n.enableEarlyProxy
	if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i)) r.emit(Z_, e, t)
	else {
		const s = i ? new o0(n, r) : null
		;(o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: s,
		}),
			s && t(s.proxiedTarget)
	}
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const En = typeof document < 'u'
function ah(e) {
	return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function i0(e) {
	return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && ah(e.default))
}
const Ae = Object.assign
function Zs(e, t) {
	const n = {}
	for (const o in t) {
		const r = t[o]
		n[o] = Pt(r) ? r.map(e) : e(r)
	}
	return n
}
const Br = () => {},
	Pt = Array.isArray,
	lh = /#/g,
	s0 = /&/g,
	a0 = /\//g,
	l0 = /=/g,
	c0 = /\?/g,
	ch = /\+/g,
	u0 = /%5B/g,
	d0 = /%5D/g,
	uh = /%5E/g,
	f0 = /%60/g,
	dh = /%7B/g,
	p0 = /%7C/g,
	fh = /%7D/g,
	h0 = /%20/g
function jl(e) {
	return encodeURI('' + e)
		.replace(p0, '|')
		.replace(u0, '[')
		.replace(d0, ']')
}
function m0(e) {
	return jl(e).replace(dh, '{').replace(fh, '}').replace(uh, '^')
}
function Na(e) {
	return jl(e)
		.replace(ch, '%2B')
		.replace(h0, '+')
		.replace(lh, '%23')
		.replace(s0, '%26')
		.replace(f0, '`')
		.replace(dh, '{')
		.replace(fh, '}')
		.replace(uh, '^')
}
function v0(e) {
	return Na(e).replace(l0, '%3D')
}
function g0(e) {
	return jl(e).replace(lh, '%23').replace(c0, '%3F')
}
function _0(e) {
	return e == null ? '' : g0(e).replace(a0, '%2F')
}
function Qo(e) {
	try {
		return decodeURIComponent('' + e)
	} catch {}
	return '' + e
}
const b0 = /\/$/,
	y0 = (e) => e.replace(b0, '')
function ea(e, t, n = '/') {
	let o,
		r = {},
		i = '',
		s = ''
	const a = t.indexOf('#')
	let l = t.indexOf('?')
	return (
		a < l && a >= 0 && (l = -1),
		l > -1 && ((o = t.slice(0, l)), (i = t.slice(l + 1, a > -1 ? a : t.length)), (r = e(i))),
		a > -1 && ((o = o || t.slice(0, a)), (s = t.slice(a, t.length))),
		(o = x0(o ?? t, n)),
		{ fullPath: o + (i && '?') + i + s, path: o, query: r, hash: Qo(s) }
	)
}
function w0(e, t) {
	const n = t.query ? e(t.query) : ''
	return t.path + (n && '?') + n + (t.hash || '')
}
function wu(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function k0(e, t, n) {
	const o = t.matched.length - 1,
		r = n.matched.length - 1
	return (
		o > -1 &&
		o === r &&
		eo(t.matched[o], n.matched[r]) &&
		ph(t.params, n.params) &&
		e(t.query) === e(n.query) &&
		t.hash === n.hash
	)
}
function eo(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t)
}
function ph(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1
	for (const n in e) if (!E0(e[n], t[n])) return !1
	return !0
}
function E0(e, t) {
	return Pt(e) ? ku(e, t) : Pt(t) ? ku(t, e) : e === t
}
function ku(e, t) {
	return Pt(t)
		? e.length === t.length && e.every((n, o) => n === t[o])
		: e.length === 1 && e[0] === t
}
function x0(e, t) {
	if (e.startsWith('/')) return e
	if (!e) return t
	const n = t.split('/'),
		o = e.split('/'),
		r = o[o.length - 1]
	;(r === '..' || r === '.') && o.push('')
	let i = n.length - 1,
		s,
		a
	for (s = 0; s < o.length; s++)
		if (((a = o[s]), a !== '.'))
			if (a === '..') i > 1 && i--
			else break
	return n.slice(0, i).join('/') + '/' + o.slice(s).join('/')
}
const wn = {
	path: '/',
	name: void 0,
	params: {},
	query: {},
	hash: '',
	fullPath: '/',
	matched: [],
	meta: {},
	redirectedFrom: void 0,
}
var Gr
;(function (e) {
	;(e.pop = 'pop'), (e.push = 'push')
})(Gr || (Gr = {}))
var Or
;(function (e) {
	;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Or || (Or = {}))
function P0(e) {
	if (!e)
		if (En) {
			const t = document.querySelector('base')
			;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
		} else e = '/'
	return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), y0(e)
}
const S0 = /^[^#]+#/
function C0(e, t) {
	return e.replace(S0, '#') + t
}
function T0(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		o = e.getBoundingClientRect()
	return {
		behavior: t.behavior,
		left: o.left - n.left - (t.left || 0),
		top: o.top - n.top - (t.top || 0),
	}
}
const Cs = () => ({ left: window.scrollX, top: window.scrollY })
function A0(e) {
	let t
	if ('el' in e) {
		const n = e.el,
			o = typeof n == 'string' && n.startsWith('#'),
			r =
				typeof n == 'string'
					? o
						? document.getElementById(n.slice(1))
						: document.querySelector(n)
					: n
		if (!r) return
		t = T0(r, e)
	} else t = e
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.scrollX,
				t.top != null ? t.top : window.scrollY
		  )
}
function Eu(e, t) {
	return (history.state ? history.state.position - t : -1) + e
}
const Fa = new Map()
function L0(e, t) {
	Fa.set(e, t)
}
function B0(e) {
	const t = Fa.get(e)
	return Fa.delete(e), t
}
let O0 = () => location.protocol + '//' + location.host
function hh(e, t) {
	const { pathname: n, search: o, hash: r } = t,
		i = e.indexOf('#')
	if (i > -1) {
		let a = r.includes(e.slice(i)) ? e.slice(i).length : 1,
			l = r.slice(a)
		return l[0] !== '/' && (l = '/' + l), wu(l, '')
	}
	return wu(n, e) + o + r
}
function V0(e, t, n, o) {
	let r = [],
		i = [],
		s = null
	const a = ({ state: f }) => {
		const p = hh(e, location),
			m = n.value,
			v = t.value
		let b = 0
		if (f) {
			if (((n.value = p), (t.value = f), s && s === m)) {
				s = null
				return
			}
			b = v ? f.position - v.position : 0
		} else o(p)
		r.forEach((w) => {
			w(n.value, m, {
				delta: b,
				type: Gr.pop,
				direction: b ? (b > 0 ? Or.forward : Or.back) : Or.unknown,
			})
		})
	}
	function l() {
		s = n.value
	}
	function c(f) {
		r.push(f)
		const p = () => {
			const m = r.indexOf(f)
			m > -1 && r.splice(m, 1)
		}
		return i.push(p), p
	}
	function u() {
		const { history: f } = window
		f.state && f.replaceState(Ae({}, f.state, { scroll: Cs() }), '')
	}
	function d() {
		for (const f of i) f()
		;(i = []),
			window.removeEventListener('popstate', a),
			window.removeEventListener('beforeunload', u)
	}
	return (
		window.addEventListener('popstate', a),
		window.addEventListener('beforeunload', u, { passive: !0 }),
		{ pauseListeners: l, listen: c, destroy: d }
	)
}
function xu(e, t, n, o = !1, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: o,
		position: window.history.length,
		scroll: r ? Cs() : null,
	}
}
function $0(e) {
	const { history: t, location: n } = window,
		o = { value: hh(e, n) },
		r = { value: t.state }
	r.value ||
		i(
			o.value,
			{
				back: null,
				current: o.value,
				forward: null,
				position: t.length - 1,
				replaced: !0,
				scroll: null,
			},
			!0
		)
	function i(l, c, u) {
		const d = e.indexOf('#'),
			f = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : O0() + e + l
		try {
			t[u ? 'replaceState' : 'pushState'](c, '', f), (r.value = c)
		} catch (p) {
			console.error(p), n[u ? 'replace' : 'assign'](f)
		}
	}
	function s(l, c) {
		const u = Ae({}, t.state, xu(r.value.back, l, r.value.forward, !0), c, {
			position: r.value.position,
		})
		i(l, u, !0), (o.value = l)
	}
	function a(l, c) {
		const u = Ae({}, r.value, t.state, { forward: l, scroll: Cs() })
		i(u.current, u, !0)
		const d = Ae({}, xu(o.value, l, null), { position: u.position + 1 }, c)
		i(l, d, !1), (o.value = l)
	}
	return { location: o, state: r, push: a, replace: s }
}
function I0(e) {
	e = P0(e)
	const t = $0(e),
		n = V0(e, t.state, t.location, t.replace)
	function o(i, s = !0) {
		s || n.pauseListeners(), history.go(i)
	}
	const r = Ae({ location: '', base: e, go: o, createHref: C0.bind(null, e) }, t, n)
	return (
		Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
		Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
		r
	)
}
function mh(e) {
	return typeof e == 'string' || (e && typeof e == 'object')
}
function vh(e) {
	return typeof e == 'string' || typeof e == 'symbol'
}
const gh = Symbol('')
var Pu
;(function (e) {
	;(e[(e.aborted = 4)] = 'aborted'),
		(e[(e.cancelled = 8)] = 'cancelled'),
		(e[(e.duplicated = 16)] = 'duplicated')
})(Pu || (Pu = {}))
function Jo(e, t) {
	return Ae(new Error(), { type: e, [gh]: !0 }, t)
}
function bn(e, t) {
	return e instanceof Error && gh in e && (t == null || !!(e.type & t))
}
const Su = '[^/]+?',
	R0 = { sensitive: !1, strict: !1, start: !0, end: !0 },
	D0 = /[.+*?^${}()[\]/\\]/g
function M0(e, t) {
	const n = Ae({}, R0, t),
		o = []
	let r = n.start ? '^' : ''
	const i = []
	for (const c of e) {
		const u = c.length ? [] : [90]
		n.strict && !c.length && (r += '/')
		for (let d = 0; d < c.length; d++) {
			const f = c[d]
			let p = 40 + (n.sensitive ? 0.25 : 0)
			if (f.type === 0) d || (r += '/'), (r += f.value.replace(D0, '\\$&')), (p += 40)
			else if (f.type === 1) {
				const { value: m, repeatable: v, optional: b, regexp: w } = f
				i.push({ name: m, repeatable: v, optional: b })
				const P = w || Su
				if (P !== Su) {
					p += 10
					try {
						new RegExp(`(${P})`)
					} catch (S) {
						throw new Error(`Invalid custom RegExp for param "${m}" (${P}): ` + S.message)
					}
				}
				let y = v ? `((?:${P})(?:/(?:${P}))*)` : `(${P})`
				d || (y = b && c.length < 2 ? `(?:/${y})` : '/' + y),
					b && (y += '?'),
					(r += y),
					(p += 20),
					b && (p += -8),
					v && (p += -20),
					P === '.*' && (p += -50)
			}
			u.push(p)
		}
		o.push(u)
	}
	if (n.strict && n.end) {
		const c = o.length - 1
		o[c][o[c].length - 1] += 0.7000000000000001
	}
	n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)')
	const s = new RegExp(r, n.sensitive ? '' : 'i')
	function a(c) {
		const u = c.match(s),
			d = {}
		if (!u) return null
		for (let f = 1; f < u.length; f++) {
			const p = u[f] || '',
				m = i[f - 1]
			d[m.name] = p && m.repeatable ? p.split('/') : p
		}
		return d
	}
	function l(c) {
		let u = '',
			d = !1
		for (const f of e) {
			;(!d || !u.endsWith('/')) && (u += '/'), (d = !1)
			for (const p of f)
				if (p.type === 0) u += p.value
				else if (p.type === 1) {
					const { value: m, repeatable: v, optional: b } = p,
						w = m in c ? c[m] : ''
					if (Pt(w) && !v)
						throw new Error(
							`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
						)
					const P = Pt(w) ? w.join('/') : w
					if (!P)
						if (b) f.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (d = !0))
						else throw new Error(`Missing required param "${m}"`)
					u += P
				}
		}
		return u || '/'
	}
	return { re: s, score: o, keys: i, parse: a, stringify: l }
}
function N0(e, t) {
	let n = 0
	for (; n < e.length && n < t.length; ) {
		const o = t[n] - e[n]
		if (o) return o
		n++
	}
	return e.length < t.length
		? e.length === 1 && e[0] === 80
			? -1
			: 1
		: e.length > t.length
		? t.length === 1 && t[0] === 80
			? 1
			: -1
		: 0
}
function _h(e, t) {
	let n = 0
	const o = e.score,
		r = t.score
	for (; n < o.length && n < r.length; ) {
		const i = N0(o[n], r[n])
		if (i) return i
		n++
	}
	if (Math.abs(r.length - o.length) === 1) {
		if (Cu(o)) return 1
		if (Cu(r)) return -1
	}
	return r.length - o.length
}
function Cu(e) {
	const t = e[e.length - 1]
	return e.length > 0 && t[t.length - 1] < 0
}
const F0 = { type: 0, value: '' },
	j0 = /[a-zA-Z0-9_]/
function H0(e) {
	if (!e) return [[]]
	if (e === '/') return [[F0]]
	if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
	function t(p) {
		throw new Error(`ERR (${n})/"${c}": ${p}`)
	}
	let n = 0,
		o = n
	const r = []
	let i
	function s() {
		i && r.push(i), (i = [])
	}
	let a = 0,
		l,
		c = '',
		u = ''
	function d() {
		c &&
			(n === 0
				? i.push({ type: 0, value: c })
				: n === 1 || n === 2 || n === 3
				? (i.length > 1 &&
						(l === '*' || l === '+') &&
						t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
				  i.push({
						type: 1,
						value: c,
						regexp: u,
						repeatable: l === '*' || l === '+',
						optional: l === '*' || l === '?',
				  }))
				: t('Invalid state to consume buffer'),
			(c = ''))
	}
	function f() {
		c += l
	}
	for (; a < e.length; ) {
		if (((l = e[a++]), l === '\\' && n !== 2)) {
			;(o = n), (n = 4)
			continue
		}
		switch (n) {
			case 0:
				l === '/' ? (c && d(), s()) : l === ':' ? (d(), (n = 1)) : f()
				break
			case 4:
				f(), (n = o)
				break
			case 1:
				l === '('
					? (n = 2)
					: j0.test(l)
					? f()
					: (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--)
				break
			case 2:
				l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l)
				break
			case 3:
				d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '')
				break
			default:
				t('Unknown state')
				break
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), r
}
function z0(e, t, n) {
	const o = M0(H0(e.path), n),
		r = Ae(o, { record: e, parent: t, children: [], alias: [] })
	return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function q0(e, t) {
	const n = [],
		o = new Map()
	t = Bu({ strict: !1, end: !0, sensitive: !1 }, t)
	function r(d) {
		return o.get(d)
	}
	function i(d, f, p) {
		const m = !p,
			v = Au(d)
		v.aliasOf = p && p.record
		const b = Bu(t, d),
			w = [v]
		if ('alias' in d) {
			const S = typeof d.alias == 'string' ? [d.alias] : d.alias
			for (const I of S)
				w.push(
					Au(
						Ae({}, v, {
							components: p ? p.record.components : v.components,
							path: I,
							aliasOf: p ? p.record : v,
						})
					)
				)
		}
		let P, y
		for (const S of w) {
			const { path: I } = S
			if (f && I[0] !== '/') {
				const j = f.record.path,
					U = j[j.length - 1] === '/' ? '' : '/'
				S.path = f.record.path + (I && U + I)
			}
			if (
				((P = z0(S, f, b)),
				p
					? p.alias.push(P)
					: ((y = y || P), y !== P && y.alias.push(P), m && d.name && !Lu(P) && s(d.name)),
				bh(P) && l(P),
				v.children)
			) {
				const j = v.children
				for (let U = 0; U < j.length; U++) i(j[U], P, p && p.children[U])
			}
			p = p || P
		}
		return y
			? () => {
					s(y)
			  }
			: Br
	}
	function s(d) {
		if (vh(d)) {
			const f = o.get(d)
			f && (o.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(s), f.alias.forEach(s))
		} else {
			const f = n.indexOf(d)
			f > -1 &&
				(n.splice(f, 1),
				d.record.name && o.delete(d.record.name),
				d.children.forEach(s),
				d.alias.forEach(s))
		}
	}
	function a() {
		return n
	}
	function l(d) {
		const f = G0(d, n)
		n.splice(f, 0, d), d.record.name && !Lu(d) && o.set(d.record.name, d)
	}
	function c(d, f) {
		let p,
			m = {},
			v,
			b
		if ('name' in d && d.name) {
			if (((p = o.get(d.name)), !p)) throw Jo(1, { location: d })
			;(b = p.record.name),
				(m = Ae(
					Tu(
						f.params,
						p.keys
							.filter((y) => !y.optional)
							.concat(p.parent ? p.parent.keys.filter((y) => y.optional) : [])
							.map((y) => y.name)
					),
					d.params &&
						Tu(
							d.params,
							p.keys.map((y) => y.name)
						)
				)),
				(v = p.stringify(m))
		} else if (d.path != null)
			(v = d.path), (p = n.find((y) => y.re.test(v))), p && ((m = p.parse(v)), (b = p.record.name))
		else {
			if (((p = f.name ? o.get(f.name) : n.find((y) => y.re.test(f.path))), !p))
				throw Jo(1, { location: d, currentLocation: f })
			;(b = p.record.name), (m = Ae({}, f.params, d.params)), (v = p.stringify(m))
		}
		const w = []
		let P = p
		for (; P; ) w.unshift(P.record), (P = P.parent)
		return { name: b, path: v, params: m, matched: w, meta: W0(w) }
	}
	e.forEach((d) => i(d))
	function u() {
		;(n.length = 0), o.clear()
	}
	return {
		addRoute: i,
		resolve: c,
		removeRoute: s,
		clearRoutes: u,
		getRoutes: a,
		getRecordMatcher: r,
	}
}
function Tu(e, t) {
	const n = {}
	for (const o of t) o in e && (n[o] = e[o])
	return n
}
function Au(e) {
	const t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: U0(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set(),
		updateGuards: new Set(),
		enterCallbacks: {},
		components: 'components' in e ? e.components || null : e.component && { default: e.component },
	}
	return Object.defineProperty(t, 'mods', { value: {} }), t
}
function U0(e) {
	const t = {},
		n = e.props || !1
	if ('component' in e) t.default = n
	else for (const o in e.components) t[o] = typeof n == 'object' ? n[o] : n
	return t
}
function Lu(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0
		e = e.parent
	}
	return !1
}
function W0(e) {
	return e.reduce((t, n) => Ae(t, n.meta), {})
}
function Bu(e, t) {
	const n = {}
	for (const o in e) n[o] = o in t ? t[o] : e[o]
	return n
}
function G0(e, t) {
	let n = 0,
		o = t.length
	for (; n !== o; ) {
		const i = (n + o) >> 1
		_h(e, t[i]) < 0 ? (o = i) : (n = i + 1)
	}
	const r = K0(e)
	return r && (o = t.lastIndexOf(r, o - 1)), o
}
function K0(e) {
	let t = e
	for (; (t = t.parent); ) if (bh(t) && _h(e, t) === 0) return t
}
function bh({ record: e }) {
	return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function Y0(e) {
	const t = {}
	if (e === '' || e === '?') return t
	const o = (e[0] === '?' ? e.slice(1) : e).split('&')
	for (let r = 0; r < o.length; ++r) {
		const i = o[r].replace(ch, ' '),
			s = i.indexOf('='),
			a = Qo(s < 0 ? i : i.slice(0, s)),
			l = s < 0 ? null : Qo(i.slice(s + 1))
		if (a in t) {
			let c = t[a]
			Pt(c) || (c = t[a] = [c]), c.push(l)
		} else t[a] = l
	}
	return t
}
function Ou(e) {
	let t = ''
	for (let n in e) {
		const o = e[n]
		if (((n = v0(n)), o == null)) {
			o !== void 0 && (t += (t.length ? '&' : '') + n)
			continue
		}
		;(Pt(o) ? o.map((i) => i && Na(i)) : [o && Na(o)]).forEach((i) => {
			i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
		})
	}
	return t
}
function Q0(e) {
	const t = {}
	for (const n in e) {
		const o = e[n]
		o !== void 0 &&
			(t[n] = Pt(o) ? o.map((r) => (r == null ? null : '' + r)) : o == null ? o : '' + o)
	}
	return t
}
const J0 = Symbol(''),
	Vu = Symbol(''),
	Ts = Symbol(''),
	Hl = Symbol(''),
	ja = Symbol('')
function hr() {
	let e = []
	function t(o) {
		return (
			e.push(o),
			() => {
				const r = e.indexOf(o)
				r > -1 && e.splice(r, 1)
			}
		)
	}
	function n() {
		e = []
	}
	return { add: t, list: () => e.slice(), reset: n }
}
function Kn(e, t, n, o, r, i = (s) => s()) {
	const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || [])
	return () =>
		new Promise((a, l) => {
			const c = (f) => {
					f === !1
						? l(Jo(4, { from: n, to: t }))
						: f instanceof Error
						? l(f)
						: mh(f)
						? l(Jo(2, { from: t, to: f }))
						: (s && o.enterCallbacks[r] === s && typeof f == 'function' && s.push(f), a())
				},
				u = i(() => e.call(o && o.instances[r], t, n, c))
			let d = Promise.resolve(u)
			e.length < 3 && (d = d.then(c)), d.catch((f) => l(f))
		})
}
function ta(e, t, n, o, r = (i) => i()) {
	const i = []
	for (const s of e)
		for (const a in s.components) {
			let l = s.components[a]
			if (!(t !== 'beforeRouteEnter' && !s.instances[a]))
				if (ah(l)) {
					const u = (l.__vccOpts || l)[t]
					u && i.push(Kn(u, n, o, s, a, r))
				} else {
					let c = l()
					i.push(() =>
						c.then((u) => {
							if (!u) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`)
							const d = i0(u) ? u.default : u
							;(s.mods[a] = u), (s.components[a] = d)
							const p = (d.__vccOpts || d)[t]
							return p && Kn(p, n, o, s, a, r)()
						})
					)
				}
		}
	return i
}
function $u(e) {
	const t = qe(Ts),
		n = qe(Hl),
		o = E(() => {
			const l = Tn(e.to)
			return t.resolve(l)
		}),
		r = E(() => {
			const { matched: l } = o.value,
				{ length: c } = l,
				u = l[c - 1],
				d = n.matched
			if (!u || !d.length) return -1
			const f = d.findIndex(eo.bind(null, u))
			if (f > -1) return f
			const p = Iu(l[c - 2])
			return c > 1 && Iu(u) === p && d[d.length - 1].path !== p
				? d.findIndex(eo.bind(null, l[c - 2]))
				: f
		}),
		i = E(() => r.value > -1 && nb(n.params, o.value.params)),
		s = E(() => r.value > -1 && r.value === n.matched.length - 1 && ph(n.params, o.value.params))
	function a(l = {}) {
		if (tb(l)) {
			const c = t[Tn(e.replace) ? 'replace' : 'push'](Tn(e.to)).catch(Br)
			return (
				e.viewTransition &&
					typeof document < 'u' &&
					'startViewTransition' in document &&
					document.startViewTransition(() => c),
				c
			)
		}
		return Promise.resolve()
	}
	if (En) {
		const l = pn()
		if (l) {
			const c = { route: o.value, isActive: i.value, isExactActive: s.value, error: null }
			;(l.__vrl_devtools = l.__vrl_devtools || []),
				l.__vrl_devtools.push(c),
				ir(
					() => {
						;(c.route = o.value),
							(c.isActive = i.value),
							(c.isExactActive = s.value),
							(c.error = mh(Tn(e.to)) ? null : 'Invalid "to" value')
					},
					{ flush: 'post' }
				)
		}
	}
	return { route: o, href: E(() => o.value.href), isActive: i, isExactActive: s, navigate: a }
}
function X0(e) {
	return e.length === 1 ? e[0] : e
}
const Z0 = $({
		name: 'RouterLink',
		compatConfig: { MODE: 3 },
		props: {
			to: { type: [String, Object], required: !0 },
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: { type: String, default: 'page' },
		},
		useLink: $u,
		setup(e, { slots: t }) {
			const n = ii($u(e)),
				{ options: o } = qe(Ts),
				r = E(() => ({
					[Ru(e.activeClass, o.linkActiveClass, 'router-link-active')]: n.isActive,
					[Ru(e.exactActiveClass, o.linkExactActiveClass, 'router-link-exact-active')]:
						n.isExactActive,
				}))
			return () => {
				const i = t.default && X0(t.default(n))
				return e.custom
					? i
					: ce(
							'a',
							{
								'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
								href: n.href,
								onClick: n.navigate,
								class: r.value,
							},
							i
					  )
			}
		},
	}),
	eb = Z0
function tb(e) {
	if (
		!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
		!e.defaultPrevented &&
		!(e.button !== void 0 && e.button !== 0)
	) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute('target')
			if (/\b_blank\b/i.test(t)) return
		}
		return e.preventDefault && e.preventDefault(), !0
	}
}
function nb(e, t) {
	for (const n in t) {
		const o = t[n],
			r = e[n]
		if (typeof o == 'string') {
			if (o !== r) return !1
		} else if (!Pt(r) || r.length !== o.length || o.some((i, s) => i !== r[s])) return !1
	}
	return !0
}
function Iu(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Ru = (e, t, n) => e ?? t ?? n,
	ob = $({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: n }) {
			const o = qe(ja),
				r = E(() => e.route || o.value),
				i = qe(Vu, 0),
				s = E(() => {
					let c = Tn(i)
					const { matched: u } = r.value
					let d
					for (; (d = u[c]) && !d.components; ) c++
					return c
				}),
				a = E(() => r.value.matched[s.value])
			rn(
				Vu,
				E(() => s.value + 1)
			),
				rn(J0, a),
				rn(ja, r)
			const l = R()
			return (
				ve(
					() => [l.value, a.value, e.name],
					([c, u, d], [f, p, m]) => {
						u &&
							((u.instances[d] = c),
							p &&
								p !== u &&
								c &&
								c === f &&
								(u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
								u.updateGuards.size || (u.updateGuards = p.updateGuards))),
							c && u && (!p || !eo(u, p) || !f) && (u.enterCallbacks[d] || []).forEach((v) => v(c))
					},
					{ flush: 'post' }
				),
				() => {
					const c = r.value,
						u = e.name,
						d = a.value,
						f = d && d.components[u]
					if (!f) return Du(n.default, { Component: f, route: c })
					const p = d.props[u],
						m = p ? (p === !0 ? c.params : typeof p == 'function' ? p(c) : p) : null,
						b = ce(
							f,
							Ae({}, m, t, {
								onVnodeUnmounted: (w) => {
									w.component.isUnmounted && (d.instances[u] = null)
								},
								ref: l,
							})
						)
					if (En && b.ref) {
						const w = { depth: s.value, name: d.name, path: d.path, meta: d.meta }
						;(Pt(b.ref) ? b.ref.map((y) => y.i) : [b.ref.i]).forEach((y) => {
							y.__vrv_devtools = w
						})
					}
					return Du(n.default, { Component: b, route: c }) || b
				}
			)
		},
	})
function Du(e, t) {
	if (!e) return null
	const n = e(t)
	return n.length === 1 ? n[0] : n
}
const rb = ob
function mr(e, t) {
	const n = Ae({}, e, {
		matched: e.matched.map((o) => mb(o, ['instances', 'children', 'aliasOf'])),
	})
	return { _custom: { type: null, readOnly: !0, display: e.fullPath, tooltip: t, value: n } }
}
function xi(e) {
	return { _custom: { display: e } }
}
let ib = 0
function sb(e, t, n) {
	if (t.__hasDevtools) return
	t.__hasDevtools = !0
	const o = ib++
	r0(
		{
			id: 'org.vuejs.router' + (o ? '.' + o : ''),
			label: 'Vue Router',
			packageName: 'vue-router',
			homepage: 'https://router.vuejs.org',
			logo: 'https://router.vuejs.org/logo.png',
			componentStateTypes: ['Routing'],
			app: e,
		},
		(r) => {
			typeof r.now != 'function' &&
				console.warn(
					'[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/blog/guide/installation.html.'
				),
				r.on.inspectComponent((u, d) => {
					u.instanceData &&
						u.instanceData.state.push({
							type: 'Routing',
							key: '$route',
							editable: !1,
							value: mr(t.currentRoute.value, 'Current Route'),
						})
				}),
				r.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
					if (d.__vrv_devtools) {
						const f = d.__vrv_devtools
						u.tags.push({
							label: (f.name ? `${f.name.toString()}: ` : '') + f.path,
							textColor: 0,
							tooltip: 'This component is rendered by &lt;router-view&gt;',
							backgroundColor: yh,
						})
					}
					Pt(d.__vrl_devtools) &&
						((d.__devtoolsApi = r),
						d.__vrl_devtools.forEach((f) => {
							let p = f.route.path,
								m = Eh,
								v = '',
								b = 0
							f.error
								? ((p = f.error), (m = db), (b = fb))
								: f.isExactActive
								? ((m = kh), (v = 'This is exactly active'))
								: f.isActive && ((m = wh), (v = 'This link is active')),
								u.tags.push({ label: p, textColor: b, tooltip: v, backgroundColor: m })
						}))
				}),
				ve(t.currentRoute, () => {
					l(), r.notifyComponentUpdate(), r.sendInspectorTree(a), r.sendInspectorState(a)
				})
			const i = 'router:navigations:' + o
			r.addTimelineLayer({ id: i, label: `Router${o ? ' ' + o : ''} Navigations`, color: 4237508 }),
				t.onError((u, d) => {
					r.addTimelineEvent({
						layerId: i,
						event: {
							title: 'Error during Navigation',
							subtitle: d.fullPath,
							logType: 'error',
							time: r.now(),
							data: { error: u },
							groupId: d.meta.__navigationId,
						},
					})
				})
			let s = 0
			t.beforeEach((u, d) => {
				const f = {
					guard: xi('beforeEach'),
					from: mr(d, 'Current Location during this navigation'),
					to: mr(u, 'Target location'),
				}
				Object.defineProperty(u.meta, '__navigationId', { value: s++ }),
					r.addTimelineEvent({
						layerId: i,
						event: {
							time: r.now(),
							title: 'Start of navigation',
							subtitle: u.fullPath,
							data: f,
							groupId: u.meta.__navigationId,
						},
					})
			}),
				t.afterEach((u, d, f) => {
					const p = { guard: xi('afterEach') }
					f
						? ((p.failure = {
								_custom: {
									type: Error,
									readOnly: !0,
									display: f ? f.message : '',
									tooltip: 'Navigation Failure',
									value: f,
								},
						  }),
						  (p.status = xi('❌')))
						: (p.status = xi('✅')),
						(p.from = mr(d, 'Current Location during this navigation')),
						(p.to = mr(u, 'Target location')),
						r.addTimelineEvent({
							layerId: i,
							event: {
								title: 'End of navigation',
								subtitle: u.fullPath,
								time: r.now(),
								data: p,
								logType: f ? 'warning' : 'default',
								groupId: u.meta.__navigationId,
							},
						})
				})
			const a = 'router-inspector:' + o
			r.addInspector({
				id: a,
				label: 'Routes' + (o ? ' ' + o : ''),
				icon: 'book',
				treeFilterPlaceholder: 'Search routes',
			})
			function l() {
				if (!c) return
				const u = c
				let d = n.getRoutes().filter((f) => !f.parent || !f.parent.record.components)
				d.forEach(Sh),
					u.filter && (d = d.filter((f) => Ha(f, u.filter.toLowerCase()))),
					d.forEach((f) => Ph(f, t.currentRoute.value)),
					(u.rootNodes = d.map(xh))
			}
			let c
			r.on.getInspectorTree((u) => {
				;(c = u), u.app === e && u.inspectorId === a && l()
			}),
				r.on.getInspectorState((u) => {
					if (u.app === e && u.inspectorId === a) {
						const f = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId)
						f && (u.state = { options: lb(f) })
					}
				}),
				r.sendInspectorTree(a),
				r.sendInspectorState(a)
		}
	)
}
function ab(e) {
	return e.optional ? (e.repeatable ? '*' : '?') : e.repeatable ? '+' : ''
}
function lb(e) {
	const { record: t } = e,
		n = [{ editable: !1, key: 'path', value: t.path }]
	return (
		t.name != null && n.push({ editable: !1, key: 'name', value: t.name }),
		n.push({ editable: !1, key: 'regexp', value: e.re }),
		e.keys.length &&
			n.push({
				editable: !1,
				key: 'keys',
				value: {
					_custom: {
						type: null,
						readOnly: !0,
						display: e.keys.map((o) => `${o.name}${ab(o)}`).join(' '),
						tooltip: 'Param keys',
						value: e.keys,
					},
				},
			}),
		t.redirect != null && n.push({ editable: !1, key: 'redirect', value: t.redirect }),
		e.alias.length &&
			n.push({ editable: !1, key: 'aliases', value: e.alias.map((o) => o.record.path) }),
		Object.keys(e.record.meta).length &&
			n.push({ editable: !1, key: 'meta', value: e.record.meta }),
		n.push({
			key: 'score',
			editable: !1,
			value: {
				_custom: {
					type: null,
					readOnly: !0,
					display: e.score.map((o) => o.join(', ')).join(' | '),
					tooltip: 'Score used to sort routes',
					value: e.score,
				},
			},
		}),
		n
	)
}
const yh = 15485081,
	wh = 2450411,
	kh = 8702998,
	cb = 2282478,
	Eh = 16486972,
	ub = 6710886,
	db = 16704226,
	fb = 12131356
function xh(e) {
	const t = [],
		{ record: n } = e
	n.name != null && t.push({ label: String(n.name), textColor: 0, backgroundColor: cb }),
		n.aliasOf && t.push({ label: 'alias', textColor: 0, backgroundColor: Eh }),
		e.__vd_match && t.push({ label: 'matches', textColor: 0, backgroundColor: yh }),
		e.__vd_exactActive && t.push({ label: 'exact', textColor: 0, backgroundColor: kh }),
		e.__vd_active && t.push({ label: 'active', textColor: 0, backgroundColor: wh }),
		n.redirect &&
			t.push({
				label: typeof n.redirect == 'string' ? `redirect: ${n.redirect}` : 'redirects',
				textColor: 16777215,
				backgroundColor: ub,
			})
	let o = n.__vd_id
	return (
		o == null && ((o = String(pb++)), (n.__vd_id = o)),
		{ id: o, label: n.path, tags: t, children: e.children.map(xh) }
	)
}
let pb = 0
const hb = /^\/(.*)\/([a-z]*)$/
function Ph(e, t) {
	const n = t.matched.length && eo(t.matched[t.matched.length - 1], e.record)
	;(e.__vd_exactActive = e.__vd_active = n),
		n || (e.__vd_active = t.matched.some((o) => eo(o, e.record))),
		e.children.forEach((o) => Ph(o, t))
}
function Sh(e) {
	;(e.__vd_match = !1), e.children.forEach(Sh)
}
function Ha(e, t) {
	const n = String(e.re).match(hb)
	if (((e.__vd_match = !1), !n || n.length < 3)) return !1
	if (new RegExp(n[1].replace(/\$$/, ''), n[2]).test(t))
		return (
			e.children.forEach((s) => Ha(s, t)),
			e.record.path !== '/' || t === '/' ? ((e.__vd_match = e.re.test(t)), !0) : !1
		)
	const r = e.record.path.toLowerCase(),
		i = Qo(r)
	return (!t.startsWith('/') && (i.includes(t) || r.includes(t))) ||
		i.startsWith(t) ||
		r.startsWith(t) ||
		(e.record.name && String(e.record.name).includes(t))
		? !0
		: e.children.some((s) => Ha(s, t))
}
function mb(e, t) {
	const n = {}
	for (const o in e) t.includes(o) || (n[o] = e[o])
	return n
}
function vb(e) {
	const t = q0(e.routes, e),
		n = e.parseQuery || Y0,
		o = e.stringifyQuery || Ou,
		r = e.history,
		i = hr(),
		s = hr(),
		a = hr(),
		l = Ie(wn)
	let c = wn
	En && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
	const u = Zs.bind(null, (F) => '' + F),
		d = Zs.bind(null, _0),
		f = Zs.bind(null, Qo)
	function p(F, ie) {
		let te, ue
		return vh(F) ? ((te = t.getRecordMatcher(F)), (ue = ie)) : (ue = F), t.addRoute(ue, te)
	}
	function m(F) {
		const ie = t.getRecordMatcher(F)
		ie && t.removeRoute(ie)
	}
	function v() {
		return t.getRoutes().map((F) => F.record)
	}
	function b(F) {
		return !!t.getRecordMatcher(F)
	}
	function w(F, ie) {
		if (((ie = Ae({}, ie || l.value)), typeof F == 'string')) {
			const x = ea(n, F, ie.path),
				B = t.resolve({ path: x.path }, ie),
				G = r.createHref(x.fullPath)
			return Ae(x, B, { params: f(B.params), hash: Qo(x.hash), redirectedFrom: void 0, href: G })
		}
		let te
		if (F.path != null) te = Ae({}, F, { path: ea(n, F.path, ie.path).path })
		else {
			const x = Ae({}, F.params)
			for (const B in x) x[B] == null && delete x[B]
			;(te = Ae({}, F, { params: d(x) })), (ie.params = d(ie.params))
		}
		const ue = t.resolve(te, ie),
			Ce = F.hash || ''
		ue.params = u(f(ue.params))
		const De = w0(o, Ae({}, F, { hash: m0(Ce), path: ue.path })),
			k = r.createHref(De)
		return Ae({ fullPath: De, hash: Ce, query: o === Ou ? Q0(F.query) : F.query || {} }, ue, {
			redirectedFrom: void 0,
			href: k,
		})
	}
	function P(F) {
		return typeof F == 'string' ? ea(n, F, l.value.path) : Ae({}, F)
	}
	function y(F, ie) {
		if (c !== F) return Jo(8, { from: ie, to: F })
	}
	function S(F) {
		return U(F)
	}
	function I(F) {
		return S(Ae(P(F), { replace: !0 }))
	}
	function j(F) {
		const ie = F.matched[F.matched.length - 1]
		if (ie && ie.redirect) {
			const { redirect: te } = ie
			let ue = typeof te == 'function' ? te(F) : te
			return (
				typeof ue == 'string' &&
					((ue = ue.includes('?') || ue.includes('#') ? (ue = P(ue)) : { path: ue }),
					(ue.params = {})),
				Ae({ query: F.query, hash: F.hash, params: ue.path != null ? {} : F.params }, ue)
			)
		}
	}
	function U(F, ie) {
		const te = (c = w(F)),
			ue = l.value,
			Ce = F.state,
			De = F.force,
			k = F.replace === !0,
			x = j(te)
		if (x)
			return U(
				Ae(P(x), { state: typeof x == 'object' ? Ae({}, Ce, x.state) : Ce, force: De, replace: k }),
				ie || te
			)
		const B = te
		B.redirectedFrom = ie
		let G
		return (
			!De && k0(o, ue, te) && ((G = Jo(16, { to: B, from: ue })), St(ue, ue, !0, !1)),
			(G ? Promise.resolve(G) : V(B, ue))
				.catch((H) => (bn(H) ? (bn(H, 2) ? H : tt(H)) : le(H, B, ue)))
				.then((H) => {
					if (H) {
						if (bn(H, 2))
							return U(
								Ae({ replace: k }, P(H.to), {
									state: typeof H.to == 'object' ? Ae({}, Ce, H.to.state) : Ce,
									force: De,
								}),
								ie || B
							)
					} else H = z(B, ue, !0, k, Ce)
					return W(B, ue, H), H
				})
		)
	}
	function Z(F, ie) {
		const te = y(F, ie)
		return te ? Promise.reject(te) : Promise.resolve()
	}
	function q(F) {
		const ie = vn.values().next().value
		return ie && typeof ie.runWithContext == 'function' ? ie.runWithContext(F) : F()
	}
	function V(F, ie) {
		let te
		const [ue, Ce, De] = gb(F, ie)
		te = ta(ue.reverse(), 'beforeRouteLeave', F, ie)
		for (const x of ue)
			x.leaveGuards.forEach((B) => {
				te.push(Kn(B, F, ie))
			})
		const k = Z.bind(null, F, ie)
		return (
			te.push(k),
			nt(te)
				.then(() => {
					te = []
					for (const x of i.list()) te.push(Kn(x, F, ie))
					return te.push(k), nt(te)
				})
				.then(() => {
					te = ta(Ce, 'beforeRouteUpdate', F, ie)
					for (const x of Ce)
						x.updateGuards.forEach((B) => {
							te.push(Kn(B, F, ie))
						})
					return te.push(k), nt(te)
				})
				.then(() => {
					te = []
					for (const x of De)
						if (x.beforeEnter)
							if (Pt(x.beforeEnter)) for (const B of x.beforeEnter) te.push(Kn(B, F, ie))
							else te.push(Kn(x.beforeEnter, F, ie))
					return te.push(k), nt(te)
				})
				.then(
					() => (
						F.matched.forEach((x) => (x.enterCallbacks = {})),
						(te = ta(De, 'beforeRouteEnter', F, ie, q)),
						te.push(k),
						nt(te)
					)
				)
				.then(() => {
					te = []
					for (const x of s.list()) te.push(Kn(x, F, ie))
					return te.push(k), nt(te)
				})
				.catch((x) => (bn(x, 8) ? x : Promise.reject(x)))
		)
	}
	function W(F, ie, te) {
		a.list().forEach((ue) => q(() => ue(F, ie, te)))
	}
	function z(F, ie, te, ue, Ce) {
		const De = y(F, ie)
		if (De) return De
		const k = ie === wn,
			x = En ? history.state : {}
		te &&
			(ue || k
				? r.replace(F.fullPath, Ae({ scroll: k && x && x.scroll }, Ce))
				: r.push(F.fullPath, Ce)),
			(l.value = F),
			St(F, ie, te, k),
			tt()
	}
	let oe
	function me() {
		oe ||
			(oe = r.listen((F, ie, te) => {
				if (!Qt.listening) return
				const ue = w(F),
					Ce = j(ue)
				if (Ce) {
					U(Ae(Ce, { replace: !0, force: !0 }), ue).catch(Br)
					return
				}
				c = ue
				const De = l.value
				En && L0(Eu(De.fullPath, te.delta), Cs()),
					V(ue, De)
						.catch((k) =>
							bn(k, 12)
								? k
								: bn(k, 2)
								? (U(Ae(P(k.to), { force: !0 }), ue)
										.then((x) => {
											bn(x, 20) && !te.delta && te.type === Gr.pop && r.go(-1, !1)
										})
										.catch(Br),
								  Promise.reject())
								: (te.delta && r.go(-te.delta, !1), le(k, ue, De))
						)
						.then((k) => {
							;(k = k || z(ue, De, !1)),
								k &&
									(te.delta && !bn(k, 8)
										? r.go(-te.delta, !1)
										: te.type === Gr.pop && bn(k, 20) && r.go(-1, !1)),
								W(ue, De, k)
						})
						.catch(Br)
			}))
	}
	let we = hr(),
		re = hr(),
		de
	function le(F, ie, te) {
		tt(F)
		const ue = re.list()
		return ue.length ? ue.forEach((Ce) => Ce(F, ie, te)) : console.error(F), Promise.reject(F)
	}
	function ye() {
		return de && l.value !== wn
			? Promise.resolve()
			: new Promise((F, ie) => {
					we.add([F, ie])
			  })
	}
	function tt(F) {
		return (
			de || ((de = !F), me(), we.list().forEach(([ie, te]) => (F ? te(F) : ie())), we.reset()), F
		)
	}
	function St(F, ie, te, ue) {
		const { scrollBehavior: Ce } = e
		if (!En || !Ce) return Promise.resolve()
		const De =
			(!te && B0(Eu(F.fullPath, 0))) ||
			((ue || !te) && history.state && history.state.scroll) ||
			null
		return ht()
			.then(() => Ce(F, ie, De))
			.then((k) => k && A0(k))
			.catch((k) => le(k, F, ie))
	}
	const Ye = (F) => r.go(F)
	let _t
	const vn = new Set(),
		Qt = {
			currentRoute: l,
			listening: !0,
			addRoute: p,
			removeRoute: m,
			clearRoutes: t.clearRoutes,
			hasRoute: b,
			getRoutes: v,
			resolve: w,
			options: e,
			push: S,
			replace: I,
			go: Ye,
			back: () => Ye(-1),
			forward: () => Ye(1),
			beforeEach: i.add,
			beforeResolve: s.add,
			afterEach: a.add,
			onError: re.add,
			isReady: ye,
			install(F) {
				const ie = this
				F.component('RouterLink', eb),
					F.component('RouterView', rb),
					(F.config.globalProperties.$router = ie),
					Object.defineProperty(F.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => Tn(l),
					}),
					En && !_t && l.value === wn && ((_t = !0), S(r.location).catch((Ce) => {}))
				const te = {}
				for (const Ce in wn)
					Object.defineProperty(te, Ce, { get: () => l.value[Ce], enumerable: !0 })
				F.provide(Ts, ie), F.provide(Hl, Hf(te)), F.provide(ja, l)
				const ue = F.unmount
				vn.add(F),
					(F.unmount = function () {
						vn.delete(F),
							vn.size < 1 &&
								((c = wn), oe && oe(), (oe = null), (l.value = wn), (_t = !1), (de = !1)),
							ue()
					}),
					En && sb(F, ie, t)
			},
		}
	function nt(F) {
		return F.reduce((ie, te) => ie.then(() => q(te)), Promise.resolve())
	}
	return Qt
}
function gb(e, t) {
	const n = [],
		o = [],
		r = [],
		i = Math.max(t.matched.length, e.matched.length)
	for (let s = 0; s < i; s++) {
		const a = t.matched[s]
		a && (e.matched.find((c) => eo(c, a)) ? o.push(a) : n.push(a))
		const l = e.matched[s]
		l && (t.matched.find((c) => eo(c, l)) || r.push(l))
	}
	return [n, o, r]
}
function sr() {
	return qe(Ts)
}
function at(e) {
	return qe(Hl)
}
var zl = Symbol(''),
	In = () => {
		const e = qe(zl)
		if (!e) throw new Error('useClientData() is called without provider.')
		return e
	},
	Ch = () => In().pageComponent,
	ql = () => In().pageData,
	ar = () => In().pageFrontmatter,
	_b = () => In().pageHead,
	oo = () => In().pageLang,
	bb = () => In().pageLayout,
	Rn = () => In().routeLocale,
	Th = () => In().routePath,
	Ah = () => In().siteLocaleData,
	yb = Symbol(''),
	za = Ie(Y_),
	zo = Ie(Q_),
	Lh = (e, t) => {
		const n = H_(e, t)
		if (zo.value[n]) return n
		const o = encodeURI(n)
		if (zo.value[o]) return o
		const r = za.value[n] || za.value[o]
		return r || n
	},
	Xo = (e, t) => {
		const { pathname: n, hashAndQueries: o } = th(e),
			r = Lh(n, t),
			i = r + o
		return zo.value[r]
			? { ...zo.value[r], path: i, notFound: !1 }
			: { ...zo.value['/404.html'], path: i, notFound: !0 }
	},
	Dn = (e, t) => {
		const { pathname: n, hashAndQueries: o } = th(e)
		return Lh(n, t) + o
	},
	wb = (e) => {
		if (
			!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
			!e.defaultPrevented &&
			!(e.button !== void 0 && e.button !== 0)
		) {
			if (e.currentTarget) {
				const t = e.currentTarget.getAttribute('target')
				if (t != null && t.match(/\b_blank\b/i)) return
			}
			return e.preventDefault(), !0
		}
	},
	kb = $({
		name: 'RouteLink',
		props: {
			to: { type: String, required: !0 },
			active: Boolean,
			activeClass: { type: String, default: 'route-link-active' },
		},
		slots: Object,
		setup(e, { slots: t }) {
			const n = sr(),
				o = at(),
				r = E(() =>
					e.to.startsWith('#') || e.to.startsWith('?') ? e.to : `/${Dn(e.to, o.path).substring(1)}`
				)
			return () =>
				ce(
					'a',
					{
						class: ['route-link', { [e.activeClass]: e.active }],
						href: r.value,
						onClick: (i = {}) => {
							wb(i) && n.push(e.to).catch()
						},
					},
					t.default()
				)
		},
	}),
	Eb = $({
		name: 'ClientOnly',
		setup(e, t) {
			const n = R(!1)
			return (
				ke(() => {
					n.value = !0
				}),
				() => {
					var o, r
					return n.value ? ((r = (o = t.slots).default) == null ? void 0 : r.call(o)) : null
				}
			)
		},
	}),
	Bh = $({
		name: 'Content',
		props: { path: { type: String, required: !1, default: '' } },
		setup(e) {
			const t = Ch(),
				n = E(() => {
					if (!e.path) return t.value
					const o = Xo(e.path)
					return ks(async () => o.loader().then(({ comp: r }) => r))
				})
			return () => ce(n.value)
		},
	}),
	xb = 'Layout',
	Pb = 'en-US',
	lo = ii({
		resolveLayouts: (e) => e.reduce((t, n) => ({ ...t, ...n.layouts }), {}),
		resolvePageHead: (e, t, n) => {
			const o = sn(t.description) ? t.description : n.description,
				r = [
					...(Array.isArray(t.head) ? t.head : []),
					...n.head,
					['title', {}, e],
					['meta', { name: 'description', content: o }],
				]
			return K_(r)
		},
		resolvePageHeadTitle: (e, t) => [e.title, t.title].filter((n) => !!n).join(' | '),
		resolvePageLang: (e, t) => e.lang || t.lang || Pb,
		resolvePageLayout: (e, t) => {
			const n = sn(e.frontmatter.layout) ? e.frontmatter.layout : xb
			if (!t[n]) throw new Error(`[vuepress] Cannot resolve layout: ${n}`)
			return t[n]
		},
		resolveRouteLocale: (e, t) => z_(e, decodeURI(t)),
		resolveSiteLocaleData: ({ base: e, locales: t, ...n }, o) => {
			var r
			return { ...n, ...t[o], head: [...(((r = t[o]) == null ? void 0 : r.head) ?? []), ...n.head] }
		},
	}),
	Mn = (e = {}) => e,
	et = (e) => (It(e) ? e : `/${Fl(e)}`),
	Sb = {}
const Cb = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Sb }, Symbol.toStringTag, { value: 'Module' })
)
var ji = []
function Tb(e) {
	ji.push(e),
		gt(() => {
			ji = ji.filter((t) => t !== e)
		})
}
function na(e) {
	ji.forEach((t) => t(e))
}
var Ab = $({
		name: 'Content',
		props: { path: { type: String, required: !1, default: '' } },
		setup(e) {
			const t = Ch(),
				n = E(() => {
					if (!e.path) return t.value
					const o = Xo(e.path)
					return ks(() => o.loader().then(({ comp: r }) => r))
				})
			return () =>
				ce(n.value, {
					onVnodeMounted: () => na({ mounted: !0 }),
					onVnodeUpdated: () => na({ updated: !0 }),
					onVnodeBeforeUnmount: () => na({ beforeUnmount: !0 }),
				})
		},
	}),
	Lb = Mn({
		enhance({ app: e }) {
			e._context.components.Content && delete e._context.components.Content,
				e.component('Content', Ab)
		},
	})
const Bb = Object.freeze(
		Object.defineProperty({ __proto__: null, default: Lb }, Symbol.toStringTag, { value: 'Module' })
	),
	xo = ({ size: e = 48, stroke: t = 4, wrapper: n = !0, height: o = 2 * e }) => {
		const r = ce(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				width: e,
				height: e,
				preserveAspectRatio: 'xMidYMid',
				viewBox: '25 25 50 50',
			},
			[
				ce('animateTransform', {
					attributeName: 'transform',
					type: 'rotate',
					dur: '2s',
					keyTimes: '0;1',
					repeatCount: 'indefinite',
					values: '0;360',
				}),
				ce(
					'circle',
					{
						cx: '50',
						cy: '50',
						r: '20',
						fill: 'none',
						stroke: 'currentColor',
						'stroke-width': t,
						'stroke-linecap': 'round',
					},
					[
						ce('animate', {
							attributeName: 'stroke-dasharray',
							dur: '1.5s',
							keyTimes: '0;0.5;1',
							repeatCount: 'indefinite',
							values: '1,200;90,200;1,200',
						}),
						ce('animate', {
							attributeName: 'stroke-dashoffset',
							dur: '1.5s',
							keyTimes: '0;0.5;1',
							repeatCount: 'indefinite',
							values: '0;-35px;-125px',
						}),
					]
				),
			]
		)
		return n
			? ce(
					'div',
					{
						class: 'loading-icon-wrapper',
						style: `display:flex;align-items:center;justify-content:center;height:${o}px`,
					},
					r
			  )
			: r
	}
xo.displayName = 'LoadingIcon'
function hn(e) {
	return Cf() ? (cg(e), !0) : !1
}
function ze(e) {
	return typeof e == 'function' ? e() : Tn(e)
}
const di = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const Ob = (e) => e != null,
	Vb = Object.prototype.toString,
	$b = (e) => Vb.call(e) === '[object Object]',
	an = () => {},
	Ib = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
	qa = Rb()
function Rb() {
	var e, t
	return (
		di &&
		((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
		(/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
			(((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
				/iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
	)
}
function Ul(e, t) {
	function n(...o) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o }))
				.then(r)
				.catch(i)
		})
	}
	return n
}
const Oh = (e) => e()
function Vh(e, t = {}) {
	let n,
		o,
		r = an
	const i = (a) => {
		clearTimeout(a), r(), (r = an)
	}
	return (a) => {
		const l = ze(e),
			c = ze(t.maxWait)
		return (
			n && i(n),
			l <= 0 || (c !== void 0 && c <= 0)
				? (o && (i(o), (o = null)), Promise.resolve(a()))
				: new Promise((u, d) => {
						;(r = t.rejectOnCancel ? d : u),
							c &&
								!o &&
								(o = setTimeout(() => {
									n && i(n), (o = null), u(a())
								}, c)),
							(n = setTimeout(() => {
								o && i(o), (o = null), u(a())
							}, l))
				  })
		)
	}
}
function Db(...e) {
	let t = 0,
		n,
		o = !0,
		r = an,
		i,
		s,
		a,
		l,
		c
	!He(e[0]) && typeof e[0] == 'object'
		? ({ delay: s, trailing: a = !0, leading: l = !0, rejectOnCancel: c = !1 } = e[0])
		: ([s, a = !0, l = !0, c = !1] = e)
	const u = () => {
		n && (clearTimeout(n), (n = void 0), r(), (r = an))
	}
	return (f) => {
		const p = ze(s),
			m = Date.now() - t,
			v = () => (i = f())
		return (
			u(),
			p <= 0
				? ((t = Date.now()), v())
				: (m > p && (l || !o)
						? ((t = Date.now()), v())
						: a &&
						  (i = new Promise((b, w) => {
								;(r = c ? w : b),
									(n = setTimeout(() => {
										;(t = Date.now()), (o = !0), b(v()), u()
									}, Math.max(0, p - m)))
						  })),
				  !l && !n && (n = setTimeout(() => (o = !0), p)),
				  (o = !1),
				  i)
		)
	}
}
function Mb(e = Oh) {
	const t = R(!0)
	function n() {
		t.value = !1
	}
	function o() {
		t.value = !0
	}
	const r = (...i) => {
		t.value && e(...i)
	}
	return { isActive: on(t), pause: n, resume: o, eventFilter: r }
}
function Nb(e) {
	let t
	function n() {
		return t || (t = e()), t
	}
	return (
		(n.reset = async () => {
			const o = t
			;(t = void 0), o && (await o)
		}),
		n
	)
}
function Fb(e) {
	return pn()
}
function $h(...e) {
	if (e.length !== 1) return yo(...e)
	const t = e[0]
	return typeof t == 'function' ? on(bs(() => ({ get: t, set: an }))) : R(t)
}
function As(e, t = 200, n = {}) {
	return Ul(Vh(t, n), e)
}
function jb(e, t = 200, n = !1, o = !0, r = !1) {
	return Ul(Db(t, n, o, r), e)
}
function Ih(e, t, n = {}) {
	const { eventFilter: o = Oh, ...r } = n
	return ve(e, Ul(o, t), r)
}
function Hb(e, t, n = {}) {
	const { eventFilter: o, ...r } = n,
		{ eventFilter: i, pause: s, resume: a, isActive: l } = Mb(o)
	return { stop: Ih(e, t, { ...r, eventFilter: i }), pause: s, resume: a, isActive: l }
}
function fi(e, t = !0, n) {
	Fb() ? ke(e, n) : t ? e() : ht(e)
}
function zb(e, t, n = {}) {
	const { immediate: o = !0 } = n,
		r = R(!1)
	let i = null
	function s() {
		i && (clearTimeout(i), (i = null))
	}
	function a() {
		;(r.value = !1), s()
	}
	function l(...c) {
		s(),
			(r.value = !0),
			(i = setTimeout(() => {
				;(r.value = !1), (i = null), e(...c)
			}, ze(t)))
	}
	return o && ((r.value = !0), di && l()), hn(a), { isPending: on(r), start: l, stop: a }
}
function Rh(e = !1, t = {}) {
	const { truthyValue: n = !0, falsyValue: o = !1 } = t,
		r = He(e),
		i = R(e)
	function s(a) {
		if (arguments.length) return (i.value = a), i.value
		{
			const l = ze(n)
			return (i.value = i.value === l ? ze(o) : l), i.value
		}
	}
	return r ? s : [i, s]
}
function qb(e, t, n = {}) {
	const { debounce: o = 0, maxWait: r = void 0, ...i } = n
	return Ih(e, t, { ...i, eventFilter: Vh(o, { maxWait: r }) })
}
function _O(e, t, n) {
	let o
	He(n) ? (o = { evaluating: n }) : (o = {})
	const { lazy: r = !1, evaluating: i = void 0, shallow: s = !0, onError: a = an } = o,
		l = R(!r),
		c = s ? Ie(t) : R(t)
	let u = 0
	return (
		ir(async (d) => {
			if (!l.value) return
			u++
			const f = u
			let p = !1
			i &&
				Promise.resolve().then(() => {
					i.value = !0
				})
			try {
				const m = await e((v) => {
					d(() => {
						i && (i.value = !1), p || v()
					})
				})
				f === u && (c.value = m)
			} catch (m) {
				a(m)
			} finally {
				i && f === u && (i.value = !1), (p = !0)
			}
		}),
		r ? E(() => ((l.value = !0), c.value)) : c
	)
}
const pt = di ? window : void 0,
	Dh = di ? window.document : void 0,
	Mh = di ? window.navigator : void 0
function st(e) {
	var t
	const n = ze(e)
	return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Fe(...e) {
	let t, n, o, r
	if (
		(typeof e[0] == 'string' || Array.isArray(e[0])
			? (([n, o, r] = e), (t = pt))
			: ([t, n, o, r] = e),
		!t)
	)
		return an
	Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o])
	const i = [],
		s = () => {
			i.forEach((u) => u()), (i.length = 0)
		},
		a = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)),
		l = ve(
			() => [st(t), ze(r)],
			([u, d]) => {
				if ((s(), !u)) return
				const f = $b(d) ? { ...d } : d
				i.push(...n.flatMap((p) => o.map((m) => a(u, p, m, f))))
			},
			{ immediate: !0, flush: 'post' }
		),
		c = () => {
			l(), s()
		}
	return hn(c), c
}
let Mu = !1
function Wl(e, t, n = {}) {
	const { window: o = pt, ignore: r = [], capture: i = !0, detectIframe: s = !1 } = n
	if (!o) return an
	qa &&
		!Mu &&
		((Mu = !0),
		Array.from(o.document.body.children).forEach((v) => v.addEventListener('click', an)),
		o.document.documentElement.addEventListener('click', an))
	let a = !0
	const l = (v) =>
		ze(r).some((b) => {
			if (typeof b == 'string')
				return Array.from(o.document.querySelectorAll(b)).some(
					(w) => w === v.target || v.composedPath().includes(w)
				)
			{
				const w = st(b)
				return w && (v.target === w || v.composedPath().includes(w))
			}
		})
	function c(v) {
		const b = ze(v)
		return b && b.$.subTree.shapeFlag === 16
	}
	function u(v, b) {
		const w = ze(v),
			P = w.$.subTree && w.$.subTree.children
		return P == null || !Array.isArray(P)
			? !1
			: P.some((y) => y.el === b.target || b.composedPath().includes(y.el))
	}
	const d = (v) => {
		const b = st(e)
		if (
			v.target != null &&
			!(!(b instanceof Element) && c(e) && u(e, v)) &&
			!(!b || b === v.target || v.composedPath().includes(b))
		) {
			if ((v.detail === 0 && (a = !l(v)), !a)) {
				a = !0
				return
			}
			t(v)
		}
	}
	let f = !1
	const p = [
		Fe(
			o,
			'click',
			(v) => {
				f ||
					((f = !0),
					setTimeout(() => {
						f = !1
					}, 0),
					d(v))
			},
			{ passive: !0, capture: i }
		),
		Fe(
			o,
			'pointerdown',
			(v) => {
				const b = st(e)
				a = !l(v) && !!(b && !v.composedPath().includes(b))
			},
			{ passive: !0 }
		),
		s &&
			Fe(o, 'blur', (v) => {
				setTimeout(() => {
					var b
					const w = st(e)
					;((b = o.document.activeElement) == null ? void 0 : b.tagName) === 'IFRAME' &&
						!(w != null && w.contains(o.document.activeElement)) &&
						t(v)
				}, 0)
			}),
	].filter(Boolean)
	return () => p.forEach((v) => v())
}
function Ub(e) {
	return typeof e == 'function'
		? e
		: typeof e == 'string'
		? (t) => t.key === e
		: Array.isArray(e)
		? (t) => e.includes(t.key)
		: () => !0
}
function Nu(...e) {
	let t,
		n,
		o = {}
	e.length === 3
		? ((t = e[0]), (n = e[1]), (o = e[2]))
		: e.length === 2
		? typeof e[1] == 'object'
			? ((t = !0), (n = e[0]), (o = e[1]))
			: ((t = e[0]), (n = e[1]))
		: ((t = !0), (n = e[0]))
	const { target: r = pt, eventName: i = 'keydown', passive: s = !1, dedupe: a = !1 } = o,
		l = Ub(t)
	return Fe(
		r,
		i,
		(u) => {
			;(u.repeat && ze(a)) || (l(u) && n(u))
		},
		s
	)
}
function Wb() {
	const e = R(!1),
		t = pn()
	return (
		t &&
			ke(() => {
				e.value = !0
			}, t),
		e
	)
}
function lr(e) {
	const t = Wb()
	return E(() => (t.value, !!e()))
}
function Gl(e, t, n = {}) {
	const { window: o = pt, ...r } = n
	let i
	const s = lr(() => o && 'MutationObserver' in o),
		a = () => {
			i && (i.disconnect(), (i = void 0))
		},
		l = E(() => {
			const f = ze(e),
				p = (Array.isArray(f) ? f : [f]).map(st).filter(Ob)
			return new Set(p)
		}),
		c = ve(
			() => l.value,
			(f) => {
				a(), s.value && f.size && ((i = new MutationObserver(t)), f.forEach((p) => i.observe(p, r)))
			},
			{ immediate: !0, flush: 'post' }
		),
		u = () => (i == null ? void 0 : i.takeRecords()),
		d = () => {
			c(), a()
		}
	return hn(d), { isSupported: s, stop: d, takeRecords: u }
}
function Rt(e, t = {}) {
	const { window: n = pt } = t,
		o = lr(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
	let r
	const i = R(!1),
		s = (c) => {
			i.value = c.matches
		},
		a = () => {
			r && ('removeEventListener' in r ? r.removeEventListener('change', s) : r.removeListener(s))
		},
		l = ir(() => {
			o.value &&
				(a(),
				(r = n.matchMedia(ze(e))),
				'addEventListener' in r ? r.addEventListener('change', s) : r.addListener(s),
				(i.value = r.matches))
		})
	return (
		hn(() => {
			l(), a(), (r = void 0)
		}),
		i
	)
}
function Fu(e, t = {}) {
	const { controls: n = !1, navigator: o = Mh } = t,
		r = lr(() => o && 'permissions' in o),
		i = Ie(),
		s = typeof e == 'string' ? { name: e } : e,
		a = Ie(),
		l = () => {
			var u, d
			a.value = (d = (u = i.value) == null ? void 0 : u.state) != null ? d : 'prompt'
		}
	Fe(i, 'change', l)
	const c = Nb(async () => {
		if (r.value) {
			if (!i.value)
				try {
					i.value = await o.permissions.query(s)
				} catch {
					i.value = void 0
				} finally {
					l()
				}
			if (n) return Ee(i.value)
		}
	})
	return c(), n ? { state: a, isSupported: r, query: c } : a
}
function Gb(e = {}) {
	const { navigator: t = Mh, read: n = !1, source: o, copiedDuring: r = 1500, legacy: i = !1 } = e,
		s = lr(() => t && 'clipboard' in t),
		a = Fu('clipboard-read'),
		l = Fu('clipboard-write'),
		c = E(() => s.value || i),
		u = R(''),
		d = R(!1),
		f = zb(() => (d.value = !1), r)
	function p() {
		s.value && w(a.value)
			? t.clipboard.readText().then((P) => {
					u.value = P
			  })
			: (u.value = b())
	}
	c.value && n && Fe(['copy', 'cut'], p)
	async function m(P = ze(o)) {
		c.value &&
			P != null &&
			(s.value && w(l.value) ? await t.clipboard.writeText(P) : v(P),
			(u.value = P),
			(d.value = !0),
			f.start())
	}
	function v(P) {
		const y = document.createElement('textarea')
		;(y.value = P ?? ''),
			(y.style.position = 'absolute'),
			(y.style.opacity = '0'),
			document.body.appendChild(y),
			y.select(),
			document.execCommand('copy'),
			y.remove()
	}
	function b() {
		var P, y, S
		return (S =
			(y =
				(P = document == null ? void 0 : document.getSelection) == null
					? void 0
					: P.call(document)) == null
				? void 0
				: y.toString()) != null
			? S
			: ''
	}
	function w(P) {
		return P === 'granted' || P === 'prompt'
	}
	return { isSupported: c, text: u, copied: d, copy: m }
}
const Pi =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
			? window
			: typeof global < 'u'
			? global
			: typeof self < 'u'
			? self
			: {},
	Si = '__vueuse_ssr_handlers__',
	Kb = Yb()
function Yb() {
	return Si in Pi || (Pi[Si] = Pi[Si] || {}), Pi[Si]
}
function Nh(e, t) {
	return Kb[e] || t
}
function Qb(e) {
	return Rt('(prefers-color-scheme: dark)', e)
}
function Jb(e) {
	return e == null
		? 'any'
		: e instanceof Set
		? 'set'
		: e instanceof Map
		? 'map'
		: e instanceof Date
		? 'date'
		: typeof e == 'boolean'
		? 'boolean'
		: typeof e == 'string'
		? 'string'
		: typeof e == 'object'
		? 'object'
		: Number.isNaN(e)
		? 'any'
		: 'number'
}
const Xb = {
		boolean: { read: (e) => e === 'true', write: (e) => String(e) },
		object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
		number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
		any: { read: (e) => e, write: (e) => String(e) },
		string: { read: (e) => e, write: (e) => String(e) },
		map: {
			read: (e) => new Map(JSON.parse(e)),
			write: (e) => JSON.stringify(Array.from(e.entries())),
		},
		set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
		date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
	},
	ju = 'vueuse-storage'
function pi(e, t, n, o = {}) {
	var r
	const {
			flush: i = 'pre',
			deep: s = !0,
			listenToStorageChanges: a = !0,
			writeDefaults: l = !0,
			mergeDefaults: c = !1,
			shallow: u,
			window: d = pt,
			eventFilter: f,
			onError: p = (V) => {
				console.error(V)
			},
			initOnMounted: m,
		} = o,
		v = (u ? Ie : R)(typeof t == 'function' ? t() : t)
	if (!n)
		try {
			n = Nh('getDefaultStorage', () => {
				var V
				return (V = pt) == null ? void 0 : V.localStorage
			})()
		} catch (V) {
			p(V)
		}
	if (!n) return v
	const b = ze(t),
		w = Jb(b),
		P = (r = o.serializer) != null ? r : Xb[w],
		{ pause: y, resume: S } = Hb(v, () => j(v.value), { flush: i, deep: s, eventFilter: f })
	d &&
		a &&
		fi(() => {
			n instanceof Storage ? Fe(d, 'storage', Z) : Fe(d, ju, q), m && Z()
		}),
		m || Z()
	function I(V, W) {
		if (d) {
			const z = { key: e, oldValue: V, newValue: W, storageArea: n }
			d.dispatchEvent(
				n instanceof Storage ? new StorageEvent('storage', z) : new CustomEvent(ju, { detail: z })
			)
		}
	}
	function j(V) {
		try {
			const W = n.getItem(e)
			if (V == null) I(W, null), n.removeItem(e)
			else {
				const z = P.write(V)
				W !== z && (n.setItem(e, z), I(W, z))
			}
		} catch (W) {
			p(W)
		}
	}
	function U(V) {
		const W = V ? V.newValue : n.getItem(e)
		if (W == null) return l && b != null && n.setItem(e, P.write(b)), b
		if (!V && c) {
			const z = P.read(W)
			return typeof c == 'function'
				? c(z, b)
				: w === 'object' && !Array.isArray(z)
				? { ...b, ...z }
				: z
		} else return typeof W != 'string' ? W : P.read(W)
	}
	function Z(V) {
		if (!(V && V.storageArea !== n)) {
			if (V && V.key == null) {
				v.value = b
				return
			}
			if (!(V && V.key !== e)) {
				y()
				try {
					;(V == null ? void 0 : V.newValue) !== P.write(v.value) && (v.value = U(V))
				} catch (W) {
					p(W)
				} finally {
					V ? ht(S) : S()
				}
			}
		}
	}
	function q(V) {
		Z(V.detail)
	}
	return v
}
const Zb =
	'*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function ey(e = {}) {
	const {
			selector: t = 'html',
			attribute: n = 'class',
			initialValue: o = 'auto',
			window: r = pt,
			storage: i,
			storageKey: s = 'vueuse-color-scheme',
			listenToStorageChanges: a = !0,
			storageRef: l,
			emitAuto: c,
			disableTransition: u = !0,
		} = e,
		d = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
		f = Qb({ window: r }),
		p = E(() => (f.value ? 'dark' : 'light')),
		m = l || (s == null ? $h(o) : pi(s, o, i, { window: r, listenToStorageChanges: a })),
		v = E(() => (m.value === 'auto' ? p.value : m.value)),
		b = Nh('updateHTMLAttrs', (S, I, j) => {
			const U = typeof S == 'string' ? (r == null ? void 0 : r.document.querySelector(S)) : st(S)
			if (!U) return
			const Z = new Set(),
				q = new Set()
			let V = null
			if (I === 'class') {
				const z = j.split(/\s/g)
				Object.values(d)
					.flatMap((oe) => (oe || '').split(/\s/g))
					.filter(Boolean)
					.forEach((oe) => {
						z.includes(oe) ? Z.add(oe) : q.add(oe)
					})
			} else V = { key: I, value: j }
			if (Z.size === 0 && q.size === 0 && V === null) return
			let W
			u &&
				((W = r.document.createElement('style')),
				W.appendChild(document.createTextNode(Zb)),
				r.document.head.appendChild(W))
			for (const z of Z) U.classList.add(z)
			for (const z of q) U.classList.remove(z)
			V && U.setAttribute(V.key, V.value),
				u && (r.getComputedStyle(W).opacity, document.head.removeChild(W))
		})
	function w(S) {
		var I
		b(t, n, (I = d[S]) != null ? I : S)
	}
	function P(S) {
		e.onChanged ? e.onChanged(S, w) : w(S)
	}
	ve(v, P, { flush: 'post', immediate: !0 }), fi(() => P(v.value))
	const y = E({
		get() {
			return c ? m.value : v.value
		},
		set(S) {
			m.value = S
		},
	})
	return Object.assign(y, { store: m, system: p, state: v })
}
function ty(e, t, n = {}) {
	const { window: o = pt, initialValue: r, observe: i = !1 } = n,
		s = R(r),
		a = E(() => {
			var c
			return st(t) || ((c = o == null ? void 0 : o.document) == null ? void 0 : c.documentElement)
		})
	function l() {
		var c
		const u = ze(e),
			d = ze(a)
		if (d && o && u) {
			const f = (c = o.getComputedStyle(d).getPropertyValue(u)) == null ? void 0 : c.trim()
			s.value = f || r
		}
	}
	return (
		i && Gl(a, l, { attributeFilter: ['style', 'class'], window: o }),
		ve(
			[a, () => ze(e)],
			(c, u) => {
				u[0] && u[1] && u[0].style.removeProperty(u[1]), l()
			},
			{ immediate: !0 }
		),
		ve(s, (c) => {
			var u
			const d = ze(e)
			;(u = a.value) != null &&
				u.style &&
				d &&
				(c == null ? a.value.style.removeProperty(d) : a.value.style.setProperty(d, c))
		}),
		s
	)
}
function ny(e = {}) {
	const { valueDark: t = 'dark', valueLight: n = '' } = e,
		o = ey({
			...e,
			onChanged: (s, a) => {
				var l
				e.onChanged ? (l = e.onChanged) == null || l.call(e, s === 'dark', a, s) : a(s)
			},
			modes: { dark: t, light: n },
		}),
		r = E(() => o.system.value)
	return E({
		get() {
			return o.value === 'dark'
		},
		set(s) {
			const a = s ? 'dark' : 'light'
			r.value === a ? (o.value = 'auto') : (o.value = a)
		},
	})
}
function Fh(e, t, n = {}) {
	const { window: o = pt, ...r } = n
	let i
	const s = lr(() => o && 'ResizeObserver' in o),
		a = () => {
			i && (i.disconnect(), (i = void 0))
		},
		l = E(() => {
			const d = ze(e)
			return Array.isArray(d) ? d.map((f) => st(f)) : [st(d)]
		}),
		c = ve(
			l,
			(d) => {
				if ((a(), s.value && o)) {
					i = new ResizeObserver(t)
					for (const f of d) f && i.observe(f, r)
				}
			},
			{ immediate: !0, flush: 'post' }
		),
		u = () => {
			a(), c()
		}
	return hn(u), { isSupported: s, stop: u }
}
function oy(e, t = { width: 0, height: 0 }, n = {}) {
	const { window: o = pt, box: r = 'content-box' } = n,
		i = E(() => {
			var d, f
			return (f = (d = st(e)) == null ? void 0 : d.namespaceURI) == null
				? void 0
				: f.includes('svg')
		}),
		s = R(t.width),
		a = R(t.height),
		{ stop: l } = Fh(
			e,
			([d]) => {
				const f =
					r === 'border-box'
						? d.borderBoxSize
						: r === 'content-box'
						? d.contentBoxSize
						: d.devicePixelContentBoxSize
				if (o && i.value) {
					const p = st(e)
					if (p) {
						const m = p.getBoundingClientRect()
						;(s.value = m.width), (a.value = m.height)
					}
				} else if (f) {
					const p = Array.isArray(f) ? f : [f]
					;(s.value = p.reduce((m, { inlineSize: v }) => m + v, 0)),
						(a.value = p.reduce((m, { blockSize: v }) => m + v, 0))
				} else (s.value = d.contentRect.width), (a.value = d.contentRect.height)
			},
			n
		)
	fi(() => {
		const d = st(e)
		d &&
			((s.value = 'offsetWidth' in d ? d.offsetWidth : t.width),
			(a.value = 'offsetHeight' in d ? d.offsetHeight : t.height))
	})
	const c = ve(
		() => st(e),
		(d) => {
			;(s.value = d ? t.width : 0), (a.value = d ? t.height : 0)
		}
	)
	function u() {
		l(), c()
	}
	return { width: s, height: a, stop: u }
}
const Hu = [
	'fullscreenchange',
	'webkitfullscreenchange',
	'webkitendfullscreen',
	'mozfullscreenchange',
	'MSFullscreenChange',
]
function ry(e, t = {}) {
	const { document: n = Dh, autoExit: o = !1 } = t,
		r = E(() => {
			var w
			return (w = st(e)) != null ? w : n == null ? void 0 : n.querySelector('html')
		}),
		i = R(!1),
		s = E(() =>
			[
				'requestFullscreen',
				'webkitRequestFullscreen',
				'webkitEnterFullscreen',
				'webkitEnterFullScreen',
				'webkitRequestFullScreen',
				'mozRequestFullScreen',
				'msRequestFullscreen',
			].find((w) => (n && w in n) || (r.value && w in r.value))
		),
		a = E(() =>
			[
				'exitFullscreen',
				'webkitExitFullscreen',
				'webkitExitFullScreen',
				'webkitCancelFullScreen',
				'mozCancelFullScreen',
				'msExitFullscreen',
			].find((w) => (n && w in n) || (r.value && w in r.value))
		),
		l = E(() =>
			[
				'fullScreen',
				'webkitIsFullScreen',
				'webkitDisplayingFullscreen',
				'mozFullScreen',
				'msFullscreenElement',
			].find((w) => (n && w in n) || (r.value && w in r.value))
		),
		c = [
			'fullscreenElement',
			'webkitFullscreenElement',
			'mozFullScreenElement',
			'msFullscreenElement',
		].find((w) => n && w in n),
		u = lr(() => r.value && n && s.value !== void 0 && a.value !== void 0 && l.value !== void 0),
		d = () => (c ? (n == null ? void 0 : n[c]) === r.value : !1),
		f = () => {
			if (l.value) {
				if (n && n[l.value] != null) return n[l.value]
				{
					const w = r.value
					if ((w == null ? void 0 : w[l.value]) != null) return !!w[l.value]
				}
			}
			return !1
		}
	async function p() {
		if (!(!u.value || !i.value)) {
			if (a.value)
				if ((n == null ? void 0 : n[a.value]) != null) await n[a.value]()
				else {
					const w = r.value
					;(w == null ? void 0 : w[a.value]) != null && (await w[a.value]())
				}
			i.value = !1
		}
	}
	async function m() {
		if (!u.value || i.value) return
		f() && (await p())
		const w = r.value
		s.value && (w == null ? void 0 : w[s.value]) != null && (await w[s.value](), (i.value = !0))
	}
	async function v() {
		await (i.value ? p() : m())
	}
	const b = () => {
		const w = f()
		;(!w || (w && d())) && (i.value = w)
	}
	return (
		Fe(n, Hu, b, !1),
		Fe(() => st(r), Hu, b, !1),
		o && hn(p),
		{ isSupported: u, isFullscreen: i, enter: m, exit: p, toggle: v }
	)
}
function oa(e) {
	return typeof Window < 'u' && e instanceof Window
		? e.document.documentElement
		: typeof Document < 'u' && e instanceof Document
		? e.documentElement
		: e
}
function Ua(e, t, n = {}) {
	const { window: o = pt } = n
	return pi(e, t, o == null ? void 0 : o.localStorage, n)
}
function jh(e) {
	const t = window.getComputedStyle(e)
	if (
		t.overflowX === 'scroll' ||
		t.overflowY === 'scroll' ||
		(t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
		(t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
	)
		return !0
	{
		const n = e.parentNode
		return !n || n.tagName === 'BODY' ? !1 : jh(n)
	}
}
function iy(e) {
	const t = e || window.event,
		n = t.target
	return jh(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
}
const ra = new WeakMap()
function Kl(e, t = !1) {
	const n = R(t)
	let o = null,
		r = ''
	ve(
		$h(e),
		(a) => {
			const l = oa(ze(a))
			if (l) {
				const c = l
				if (
					(ra.get(c) || ra.set(c, c.style.overflow),
					c.style.overflow !== 'hidden' && (r = c.style.overflow),
					c.style.overflow === 'hidden')
				)
					return (n.value = !0)
				if (n.value) return (c.style.overflow = 'hidden')
			}
		},
		{ immediate: !0 }
	)
	const i = () => {
			const a = oa(ze(e))
			!a ||
				n.value ||
				(qa &&
					(o = Fe(
						a,
						'touchmove',
						(l) => {
							iy(l)
						},
						{ passive: !1 }
					)),
				(a.style.overflow = 'hidden'),
				(n.value = !0))
		},
		s = () => {
			const a = oa(ze(e))
			!a ||
				!n.value ||
				(qa && (o == null || o()), (a.style.overflow = r), ra.delete(a), (n.value = !1))
		}
	return (
		hn(s),
		E({
			get() {
				return n.value
			},
			set(a) {
				a ? i() : s()
			},
		})
	)
}
function rs(e, t, n = {}) {
	const { window: o = pt } = n
	return pi(e, t, o == null ? void 0 : o.sessionStorage, n)
}
let sy = 0
function ay(e, t = {}) {
	const n = R(!1),
		{ document: o = Dh, immediate: r = !0, manual: i = !1, id: s = `vueuse_styletag_${++sy}` } = t,
		a = R(e)
	let l = () => {}
	const c = () => {
			if (!o) return
			const d = o.getElementById(s) || o.createElement('style')
			d.isConnected || ((d.id = s), t.media && (d.media = t.media), o.head.appendChild(d)),
				!n.value &&
					((l = ve(
						a,
						(f) => {
							d.textContent = f
						},
						{ immediate: !0 }
					)),
					(n.value = !0))
		},
		u = () => {
			!o || !n.value || (l(), o.head.removeChild(o.getElementById(s)), (n.value = !1))
		}
	return r && !i && fi(c), i || hn(u), { id: s, css: a, unload: u, load: c, isLoaded: on(n) }
}
function Yl(e = {}) {
	const { window: t = pt, behavior: n = 'auto' } = e
	if (!t) return { x: R(0), y: R(0) }
	const o = R(t.scrollX),
		r = R(t.scrollY),
		i = E({
			get() {
				return o.value
			},
			set(a) {
				scrollTo({ left: a, behavior: n })
			},
		}),
		s = E({
			get() {
				return r.value
			},
			set(a) {
				scrollTo({ top: a, behavior: n })
			},
		})
	return (
		Fe(
			t,
			'scroll',
			() => {
				;(o.value = t.scrollX), (r.value = t.scrollY)
			},
			{ capture: !1, passive: !0 }
		),
		{ x: i, y: s }
	)
}
function ly(e = {}) {
	const {
			window: t = pt,
			initialWidth: n = Number.POSITIVE_INFINITY,
			initialHeight: o = Number.POSITIVE_INFINITY,
			listenOrientation: r = !0,
			includeScrollbar: i = !0,
			type: s = 'inner',
		} = e,
		a = R(n),
		l = R(o),
		c = () => {
			t &&
				(s === 'outer'
					? ((a.value = t.outerWidth), (l.value = t.outerHeight))
					: i
					? ((a.value = t.innerWidth), (l.value = t.innerHeight))
					: ((a.value = t.document.documentElement.clientWidth),
					  (l.value = t.document.documentElement.clientHeight)))
		}
	if ((c(), fi(c), Fe('resize', c, { passive: !0 }), r)) {
		const u = Rt('(orientation: portrait)')
		ve(u, () => c())
	}
	return { width: a, height: l }
}
var kt = Uint8Array,
	Io = Uint16Array,
	cy = Int32Array,
	Hh = new kt([
		0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
	]),
	zh = new kt([
		0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
		13, 0, 0,
	]),
	uy = new kt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
	qh = function (e, t) {
		for (var n = new Io(31), o = 0; o < 31; ++o) n[o] = t += 1 << e[o - 1]
		for (var r = new cy(n[30]), o = 1; o < 30; ++o)
			for (var i = n[o]; i < n[o + 1]; ++i) r[i] = ((i - n[o]) << 5) | o
		return { b: n, r }
	},
	Uh = qh(Hh, 2),
	Wh = Uh.b,
	dy = Uh.r
;(Wh[28] = 258), (dy[258] = 28)
var fy = qh(zh, 0),
	py = fy.b,
	Wa = new Io(32768)
for (var je = 0; je < 32768; ++je) {
	var Fn = ((je & 43690) >> 1) | ((je & 21845) << 1)
	;(Fn = ((Fn & 52428) >> 2) | ((Fn & 13107) << 2)),
		(Fn = ((Fn & 61680) >> 4) | ((Fn & 3855) << 4)),
		(Wa[je] = (((Fn & 65280) >> 8) | ((Fn & 255) << 8)) >> 1)
}
var Vr = function (e, t, n) {
		for (var o = e.length, r = 0, i = new Io(t); r < o; ++r) e[r] && ++i[e[r] - 1]
		var s = new Io(t)
		for (r = 1; r < t; ++r) s[r] = (s[r - 1] + i[r - 1]) << 1
		var a
		if (n) {
			a = new Io(1 << t)
			var l = 15 - t
			for (r = 0; r < o; ++r)
				if (e[r])
					for (
						var c = (r << 4) | e[r], u = t - e[r], d = s[e[r] - 1]++ << u, f = d | ((1 << u) - 1);
						d <= f;
						++d
					)
						a[Wa[d] >> l] = c
		} else for (a = new Io(o), r = 0; r < o; ++r) e[r] && (a[r] = Wa[s[e[r] - 1]++] >> (15 - e[r]))
		return a
	},
	hi = new kt(288)
for (var je = 0; je < 144; ++je) hi[je] = 8
for (var je = 144; je < 256; ++je) hi[je] = 9
for (var je = 256; je < 280; ++je) hi[je] = 7
for (var je = 280; je < 288; ++je) hi[je] = 8
var Gh = new kt(32)
for (var je = 0; je < 32; ++je) Gh[je] = 5
var hy = Vr(hi, 9, 1),
	my = Vr(Gh, 5, 1),
	ia = function (e) {
		for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n])
		return t
	},
	Mt = function (e, t, n) {
		var o = (t / 8) | 0
		return ((e[o] | (e[o + 1] << 8)) >> (t & 7)) & n
	},
	sa = function (e, t) {
		var n = (t / 8) | 0
		return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (t & 7)
	},
	vy = function (e) {
		return ((e + 7) / 8) | 0
	},
	Kh = function (e, t, n) {
		return (
			(t == null || t < 0) && (t = 0),
			(n == null || n > e.length) && (n = e.length),
			new kt(e.subarray(t, n))
		)
	},
	gy = [
		'unexpected EOF',
		'invalid block type',
		'invalid length/literal',
		'invalid distance',
		'stream finished',
		'no stream handler',
		,
		'no callback',
		'invalid UTF-8 data',
		'extra field too long',
		'date not in range 1980-2099',
		'filename too long',
		'stream finishing',
		'invalid zip data',
	],
	At = function (e, t, n) {
		var o = new Error(t || gy[e])
		if (((o.code = e), Error.captureStackTrace && Error.captureStackTrace(o, At), !n)) throw o
		return o
	},
	_y = function (e, t, n, o) {
		var r = e.length,
			i = 0
		if (!r || (t.f && !t.l)) return n || new kt(0)
		var s = !n,
			a = s || t.i != 2,
			l = t.i
		s && (n = new kt(r * 3))
		var c = function (Ce) {
				var De = n.length
				if (Ce > De) {
					var k = new kt(Math.max(De * 2, Ce))
					k.set(n), (n = k)
				}
			},
			u = t.f || 0,
			d = t.p || 0,
			f = t.b || 0,
			p = t.l,
			m = t.d,
			v = t.m,
			b = t.n,
			w = r * 8
		do {
			if (!p) {
				u = Mt(e, d, 1)
				var P = Mt(e, d + 1, 3)
				if (((d += 3), P))
					if (P == 1) (p = hy), (m = my), (v = 9), (b = 5)
					else if (P == 2) {
						var j = Mt(e, d, 31) + 257,
							U = Mt(e, d + 10, 15) + 4,
							Z = j + Mt(e, d + 5, 31) + 1
						d += 14
						for (var q = new kt(Z), V = new kt(19), W = 0; W < U; ++W)
							V[uy[W]] = Mt(e, d + W * 3, 7)
						d += U * 3
						for (var z = ia(V), oe = (1 << z) - 1, me = Vr(V, z, 1), W = 0; W < Z; ) {
							var we = me[Mt(e, d, oe)]
							d += we & 15
							var y = we >> 4
							if (y < 16) q[W++] = y
							else {
								var re = 0,
									de = 0
								for (
									y == 16
										? ((de = 3 + Mt(e, d, 3)), (d += 2), (re = q[W - 1]))
										: y == 17
										? ((de = 3 + Mt(e, d, 7)), (d += 3))
										: y == 18 && ((de = 11 + Mt(e, d, 127)), (d += 7));
									de--;

								)
									q[W++] = re
							}
						}
						var le = q.subarray(0, j),
							ye = q.subarray(j)
						;(v = ia(le)), (b = ia(ye)), (p = Vr(le, v, 1)), (m = Vr(ye, b, 1))
					} else At(1)
				else {
					var y = vy(d) + 4,
						S = e[y - 4] | (e[y - 3] << 8),
						I = y + S
					if (I > r) {
						l && At(0)
						break
					}
					a && c(f + S), n.set(e.subarray(y, I), f), (t.b = f += S), (t.p = d = I * 8), (t.f = u)
					continue
				}
				if (d > w) {
					l && At(0)
					break
				}
			}
			a && c(f + 131072)
			for (var tt = (1 << v) - 1, St = (1 << b) - 1, Ye = d; ; Ye = d) {
				var re = p[sa(e, d) & tt],
					_t = re >> 4
				if (((d += re & 15), d > w)) {
					l && At(0)
					break
				}
				if ((re || At(2), _t < 256)) n[f++] = _t
				else if (_t == 256) {
					;(Ye = d), (p = null)
					break
				} else {
					var vn = _t - 254
					if (_t > 264) {
						var W = _t - 257,
							Qt = Hh[W]
						;(vn = Mt(e, d, (1 << Qt) - 1) + Wh[W]), (d += Qt)
					}
					var nt = m[sa(e, d) & St],
						F = nt >> 4
					nt || At(3), (d += nt & 15)
					var ye = py[F]
					if (F > 3) {
						var Qt = zh[F]
						;(ye += sa(e, d) & ((1 << Qt) - 1)), (d += Qt)
					}
					if (d > w) {
						l && At(0)
						break
					}
					a && c(f + 131072)
					var ie = f + vn
					if (f < ye) {
						var te = i - ye,
							ue = Math.min(ye, ie)
						for (te + f < 0 && At(3); f < ue; ++f) n[f] = o[te + f]
					}
					for (; f < ie; ++f) n[f] = n[f - ye]
				}
			}
			;(t.l = p), (t.p = Ye), (t.b = f), (t.f = u), p && ((u = 1), (t.m = v), (t.d = m), (t.n = b))
		} while (!u)
		return f != n.length && s ? Kh(n, 0, f) : n.subarray(0, f)
	},
	by = new kt(0),
	yy = function (e, t) {
		return (
			((e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31) &&
				At(6, 'invalid zlib data'),
			((e[1] >> 5) & 1) == +!t &&
				At(6, 'invalid zlib data: ' + (e[1] & 32 ? 'need' : 'unexpected') + ' dictionary'),
			((e[1] >> 3) & 4) + 2
		)
	}
function wy(e, t) {
	return _y(e.subarray(yy(e, t), -4), { i: 2 }, t, t)
}
var Ga = typeof TextDecoder < 'u' && new TextDecoder(),
	ky = 0
try {
	Ga.decode(by, { stream: !0 }), (ky = 1)
} catch {}
var Ey = function (e) {
	for (var t = '', n = 0; ; ) {
		var o = e[n++],
			r = (o > 127) + (o > 223) + (o > 239)
		if (n + r > e.length) return { s: t, r: Kh(e, n - 1) }
		r
			? r == 3
				? ((o =
						(((o & 15) << 18) | ((e[n++] & 63) << 12) | ((e[n++] & 63) << 6) | (e[n++] & 63)) -
						65536),
				  (t += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
				: r & 1
				? (t += String.fromCharCode(((o & 31) << 6) | (e[n++] & 63)))
				: (t += String.fromCharCode(((o & 15) << 12) | ((e[n++] & 63) << 6) | (e[n++] & 63)))
			: (t += String.fromCharCode(o))
	}
}
function xy(e, t) {
	{
		for (var n = new kt(e.length), o = 0; o < e.length; ++o) n[o] = e.charCodeAt(o)
		return n
	}
	for (var r = e.length, o = 0; o < r; ++o);
}
function Py(e, t) {
	var n
	if (Ga) return Ga.decode(e)
	var o = Ey(e),
		r = o.s,
		n = o.r
	return n.length && At(8), r
}
const wo = (e) => {
		const t = atob(e)
		return Py(wy(xy(t)))
	},
	Ka = (e, t) => {
		var o
		const n = (o = pn()) == null ? void 0 : o.appContext.components
		return n ? e in n || ft(e) in n || ri(ft(e)) in n : !1
	},
	cr = (e) =>
		new Promise((t) => {
			setTimeout(t, e)
		}),
	Yh = (e) => {
		const t = Rn()
		return E(() => e[t.value] ?? {})
	},
	Qh = (e) => typeof e < 'u',
	{ isArray: is } = Array,
	Sy = (e, t) => sn(e) && e.startsWith(t),
	{ keys: Jh } = Object,
	Xh = (e) => Sy(e, '/')
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */ const zu = (e, t) => {
		e.classList.add(t)
	},
	qu = (e, t) => {
		e.classList.remove(t)
	},
	Cy = (e) => {
		var t
		;(t = e == null ? void 0 : e.parentNode) == null || t.removeChild(e)
	},
	aa = (e, t, n) => (e < t ? t : e > n ? n : e),
	Uu = (e) => (-1 + e) * 100,
	Ty = (() => {
		const e = [],
			t = () => {
				const n = e.shift()
				n && n(t)
			}
		return (n) => {
			e.push(n), e.length === 1 && t()
		}
	})(),
	Ay = (e) => e.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, (t, n) => n.toUpperCase()),
	Ci = (() => {
		const e = ['Webkit', 'O', 'Moz', 'ms'],
			t = {},
			n = (i) => {
				const { style: s } = document.body
				if (i in s) return i
				const a = i.charAt(0).toUpperCase() + i.slice(1)
				let l = e.length
				for (; l--; ) {
					const c = `${e[l]}${a}`
					if (c in s) return c
				}
				return i
			},
			o = (i) => {
				const s = Ay(i)
				return t[s] ?? (t[s] = n(s))
			},
			r = (i, s, a) => {
				i.style[o(s)] = a
			}
		return (i, s) => {
			for (const a in s) {
				const l = s[a]
				Object.hasOwn(s, a) && Qh(l) && r(i, a, l)
			}
		}
	})(),
	yn = {
		minimum: 0.08,
		easing: 'ease',
		speed: 200,
		trickle: !0,
		trickleRate: 0.02,
		trickleSpeed: 800,
		barSelector: '[role="bar"]',
		parent: 'body',
		template: '<div class="bar" role="bar"></div>',
	},
	Ue = {
		percent: null,
		isRendered: () => !!document.getElementById('nprogress'),
		set: (e) => {
			const { speed: t, easing: n } = yn,
				o = Ue.isStarted(),
				r = aa(e, yn.minimum, 1)
			Ue.percent = r === 1 ? null : r
			const i = Ue.render(!o),
				s = i.querySelector(yn.barSelector)
			return (
				i.offsetWidth,
				Ty((a) => {
					Ci(s, { transform: `translate3d(${Uu(r)}%,0,0)`, transition: `all ${t}ms ${n}` }),
						r === 1
							? (Ci(i, { transition: 'none', opacity: '1' }),
							  i.offsetWidth,
							  setTimeout(() => {
									Ci(i, { transition: `all ${t}ms linear`, opacity: '0' }),
										setTimeout(() => {
											Ue.remove(), a()
										}, t)
							  }, t))
							: setTimeout(() => {
									a()
							  }, t)
				}),
				Ue
			)
		},
		isStarted: () => typeof Ue.percent == 'number',
		start: () => {
			Ue.percent || Ue.set(0)
			const e = () => {
				setTimeout(() => {
					Ue.percent && (Ue.trickle(), e())
				}, yn.trickleSpeed)
			}
			return e(), Ue
		},
		done: (e) => (!e && !Ue.percent ? Ue : Ue.increase(0.3 + 0.5 * Math.random()).set(1)),
		increase: (e) => {
			let { percent: t } = Ue
			return t
				? ((t = aa(
						t + (typeof e == 'number' ? e : (1 - t) * aa(Math.random() * t, 0.1, 0.95)),
						0,
						0.994
				  )),
				  Ue.set(t))
				: Ue.start()
		},
		trickle: () => Ue.increase(Math.random() * yn.trickleRate),
		render: (e) => {
			if (Ue.isRendered()) return document.getElementById('nprogress')
			zu(document.documentElement, 'nprogress-busy')
			const t = document.createElement('div')
			;(t.id = 'nprogress'), (t.innerHTML = yn.template)
			const n = t.querySelector(yn.barSelector),
				o = document.querySelector(yn.parent),
				r = e ? '-100' : Uu(Ue.percent ?? 0)
			return (
				Ci(n, { transition: 'all 0 linear', transform: `translate3d(${r}%,0,0)` }),
				o && (o !== document.body && zu(o, 'nprogress-custom-parent'), o.appendChild(t)),
				t
			)
		},
		remove: () => {
			qu(document.documentElement, 'nprogress-busy'),
				qu(document.querySelector(yn.parent), 'nprogress-custom-parent'),
				Cy(document.getElementById('nprogress'))
		},
	},
	Ly = () => {
		ke(() => {
			const e = sr(),
				t = new Set()
			t.add(e.currentRoute.value.path),
				e.beforeEach((n) => {
					t.has(n.path) || Ue.start()
				}),
				e.afterEach((n) => {
					t.add(n.path), Ue.done()
				})
		})
	},
	By = Mn({
		setup() {
			Ly()
		},
	}),
	Oy = Object.freeze(
		Object.defineProperty({ __proto__: null, default: By }, Symbol.toStringTag, { value: 'Module' })
	),
	Vy = R({}),
	Zh = Symbol(''),
	$y = () => qe(Zh),
	Iy = (e) => {
		e.provide(Zh, Vy)
	},
	Ya = (e) =>
		new Promise((t, n) => {
			e.complete
				? t({
						type: 'image',
						element: e,
						src: e.src,
						width: e.naturalWidth,
						height: e.naturalHeight,
						alt: e.alt,
						msrc: e.src,
				  })
				: ((e.onload = () => {
						t(Ya(e))
				  }),
				  (e.onerror = () => {
						n()
				  }))
		}),
	Ry =
		'<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',
	Dy = (e, { download: t = !0, fullscreen: n = !0 } = {}) => {
		e.on('uiRegister', () => {
			if (
				(e.ui.registerElement({
					name: 'bulletsIndicator',
					className: 'photo-swipe-bullets-indicator',
					appendTo: 'wrapper',
					onInit: (o) => {
						const r = []
						let i = -1
						for (let s = 0; s < e.getNumItems(); s++) {
							const a = document.createElement('div')
							;(a.className = 'photo-swipe-bullet'),
								(a.onclick = (l) => {
									e.goTo(r.indexOf(l.target))
								}),
								r.push(a),
								o.appendChild(a)
						}
						e.on('change', () => {
							i >= 0 && r[i].classList.remove('active'),
								r[e.currIndex].classList.add('active'),
								(i = e.currIndex)
						})
					},
				}),
				n)
			) {
				const { isSupported: o, toggle: r } = ry()
				o.value &&
					e.ui.registerElement({
						name: 'fullscreen',
						order: 7,
						isButton: !0,
						html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',
						onClick: () => {
							r()
						},
					})
			}
			t &&
				e.ui.registerElement({
					name: 'download',
					order: 8,
					isButton: !0,
					tagName: 'a',
					html: {
						isCustomSVG: !0,
						inner:
							'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',
						outlineID: 'pswp__icn-download',
					},
					onInit: (o) => {
						o.setAttribute('download', ''),
							o.setAttribute('target', '_blank'),
							o.setAttribute('rel', 'noopener'),
							e.on('change', () => {
								o.setAttribute('href', e.currSlide.data.src)
							})
					},
				})
		})
	},
	My = ({
		selector: e,
		locales: t,
		download: n = !0,
		fullscreen: o = !0,
		scrollToClose: r = !0,
	}) => {
		const i = $y(),
			s = Yh(t),
			a = ar(),
			l = E(() => {
				const { photoSwipe: p } = a.value
				return p === !1 ? null : sn(p) ? p : is(e) ? e.join(', ') : e
			}),
			c = E(() => ({ ...i.value, ...s.value, download: n, fullscreen: o, scrollToClose: r }))
		let u = 0,
			d = null
		const f = async (p) => {
			const m = p.target
			if (l.value && m.matches(l.value)) {
				d == null || d.destroy()
				const { default: v } = await L(async () => {
						const { default: S } = await import('./photoswipe.esm-GXRgw7eJ.js')
						return { default: S }
					}, []),
					b = Array.from(document.querySelectorAll(l.value)),
					w = b.findIndex((S) => S === m),
					P = b.map((S) => ({ html: Ry, element: S, msrc: S.src }))
				P.splice(w, 1, await Ya(m))
				const y = Date.now()
				;(u = y),
					(d = new v({
						preloaderDelay: 0,
						showHideAnimationType: 'zoom',
						...c,
						dataSource: P,
						index: w,
						...(r ? { closeOnVerticalDrag: !0, wheelToZoom: !1 } : {}),
					})),
					Dy(d, { download: n, fullscreen: o }),
					d.init(),
					d.on('destroy', () => {
						;(d = null), (u = 0)
					}),
					b.forEach((S, I) => {
						I === w ||
							u !== y ||
							Ya(S).then((j) => {
								P.splice(I, 1, j), d == null || d.refreshSlideContent(I)
							})
					})
			}
		}
		ke(() => {
			Fe('click', f),
				Fe('wheel', () => {
					c.value.scrollToClose && (d == null || d.close())
				})
		}),
			gt(() => {
				d == null || d.destroy()
			})
	}
var Ny = {
	'/': {
		closeTitle: '关闭',
		downloadTitle: '下载图片',
		fullscreenTitle: '切换全屏',
		zoomTitle: '缩放',
		arrowPrevTitle: '上一个 (左箭头)',
		arrowNextTitle: '下一个 (右箭头)',
	},
}
const Fy = '.plume-content > img, .plume-content :not(a) > img',
	jy = Ny,
	Hy = !0,
	zy = !0,
	qy = !0
var Uy = Mn({
	enhance: ({ app: e }) => {
		Iy(e)
	},
	setup: () => {
		My({ selector: Fy, locales: jy, download: Hy, fullscreen: zy, scrollToClose: qy })
	},
})
const Wy = Object.freeze(
		Object.defineProperty({ __proto__: null, default: Uy }, Symbol.toStringTag, { value: 'Module' })
	),
	Gy = { '/': () => L(() => import('./searchBox-default-B1e2GLcD.js'), []) }
var Wu = {
	'/': {
		placeholder: 'Search',
		resetButtonTitle: 'Reset search',
		backButtonTitle: 'Close search',
		noResultsText: 'No results for',
		footer: {
			selectText: 'to select',
			selectKeyAriaLabel: 'enter',
			navigateText: 'to navigate',
			navigateUpKeyAriaLabel: 'up arrow',
			navigateDownKeyAriaLabel: 'down arrow',
			closeText: 'to close',
			closeKeyAriaLabel: 'escape',
		},
	},
}
function Ky(e) {
	const t = yo(e),
		n = Rn()
	return E(() => t.value[n.value] ?? Wu[n.value] ?? Wu['/'])
}
var Yy = Ie(Gy)
function bO() {
	return Yy
}
const Qy = $({
		__name: 'SearchButton',
		props: { locales: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = Ky(yo(n.locales)),
				r = { props: n, locale: o }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	M = (e, t) => {
		const n = e.__vccOpts || e
		for (const [o, r] of t) n[o] = r
		return n
	},
	Jy = ['aria-label'],
	Xy = { class: 'mini-search-button-container' },
	Zy = { class: 'mini-search-button-placeholder' }
function e2(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'button',
			{
				type: 'button',
				class: 'mini-search mini-search-button',
				'aria-label': o.locale.placeholder,
			},
			[
				g('span', Xy, [
					t[0] ||
						(t[0] = g(
							'svg',
							{
								class: 'mini-search-search-icon',
								width: '20',
								height: '20',
								viewBox: '0 0 20 20',
								'aria-label': 'search icon',
							},
							[
								g('path', {
									d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
									stroke: 'currentColor',
									fill: 'none',
									'fill-rule': 'evenodd',
									'stroke-linecap': 'round',
									'stroke-linejoin': 'round',
								}),
							],
							-1
						)),
					g('span', Zy, D(o.locale.placeholder), 1),
				]),
				t[1] ||
					(t[1] = g(
						'span',
						{ class: 'mini-search-button-keys' },
						[
							g('kbd', { class: 'mini-search-button-key' }),
							g('kbd', { class: 'mini-search-button-key' }, 'K'),
						],
						-1
					)),
			],
			8,
			Jy
		)
	)
}
const t2 = M(Qy, [
		['render', e2],
		['__file', 'SearchButton.vue'],
	]),
	n2 = $({
		__name: 'Search',
		props: { locales: {}, options: {} },
		setup(e, { expose: t }) {
			t()
			const n = ks(() => L(() => import('./SearchBox-CJnFKNGn.js'), [])),
				o = R(!1)
			Nu('k', (s) => {
				;(s.ctrlKey || s.metaKey) && (s.preventDefault(), (o.value = !0))
			}),
				Nu('/', (s) => {
					r(s) || (s.preventDefault(), (o.value = !0))
				})
			function r(s) {
				const a = s.target,
					l = a.tagName
				return a.isContentEditable || l === 'INPUT' || l === 'SELECT' || l === 'TEXTAREA'
			}
			const i = { SearchBox: n, showSearch: o, isEditingContent: r, SearchButton: t2 }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	o2 = { class: 'search-wrapper' },
	r2 = { id: 'local-search' }
function i2(e, t, n, o, r, i) {
	return (
		h(),
		_('div', o2, [
			o.showSearch
				? (h(),
				  N(
						o.SearchBox,
						{
							key: 0,
							locales: n.locales,
							options: n.options,
							onClose: t[0] || (t[0] = (s) => (o.showSearch = !1)),
						},
						null,
						8,
						['locales', 'options']
				  ))
				: A('', !0),
			g('div', r2, [
				O(
					o.SearchButton,
					{ locales: n.locales, onClick: t[1] || (t[1] = (s) => (o.showSearch = !0)) },
					null,
					8,
					['locales']
				),
			]),
		])
	)
}
const s2 = M(n2, [
	['render', i2],
	['__scopeId', 'data-v-62419745'],
	['__file', 'Search.vue'],
])
var a2 = {
		'/': {
			placeholder: '搜索文档',
			resetButtonTitle: '重置搜索',
			backButtonTitle: '关闭',
			noResultsText: '无搜索结果：',
			footer: {
				selectText: '选择',
				selectKeyAriaLabel: '输入',
				navigateText: '切换',
				navigateUpKeyAriaLabel: '向上',
				navigateDownKeyAriaLabel: '向下',
				closeText: '关闭',
				closeKeyAriaLabel: '退出',
			},
		},
	},
	l2 = {},
	c2 = a2,
	u2 = l2,
	d2 = Mn({
		enhance({ app: e }) {
			e.component('SearchBox', (t) => ce(s2, { locales: c2, options: u2, ...t }))
		},
	})
const f2 = Object.freeze(
		Object.defineProperty({ __proto__: null, default: d2 }, Symbol.toStringTag, { value: 'Module' })
	),
	p2 = ['top', 'right', 'bottom', 'left'],
	Gu = ['start', 'end'],
	Ku = p2.reduce((e, t) => e.concat(t, t + '-' + Gu[0], t + '-' + Gu[1]), []),
	Kr = Math.min,
	fo = Math.max,
	h2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	m2 = { start: 'end', end: 'start' }
function Qa(e, t, n) {
	return fo(e, Kr(t, n))
}
function Po(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function un(e) {
	return e.split('-')[0]
}
function qt(e) {
	return e.split('-')[1]
}
function em(e) {
	return e === 'x' ? 'y' : 'x'
}
function Ql(e) {
	return e === 'y' ? 'height' : 'width'
}
function ko(e) {
	return ['top', 'bottom'].includes(un(e)) ? 'y' : 'x'
}
function Jl(e) {
	return em(ko(e))
}
function tm(e, t, n) {
	n === void 0 && (n = !1)
	const o = qt(e),
		r = Jl(e),
		i = Ql(r)
	let s =
		r === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top'
	return t.reference[i] > t.floating[i] && (s = as(s)), [s, as(s)]
}
function v2(e) {
	const t = as(e)
	return [ss(e), t, ss(t)]
}
function ss(e) {
	return e.replace(/start|end/g, (t) => m2[t])
}
function g2(e, t, n) {
	const o = ['left', 'right'],
		r = ['right', 'left'],
		i = ['top', 'bottom'],
		s = ['bottom', 'top']
	switch (e) {
		case 'top':
		case 'bottom':
			return n ? (t ? r : o) : t ? o : r
		case 'left':
		case 'right':
			return t ? i : s
		default:
			return []
	}
}
function _2(e, t, n, o) {
	const r = qt(e)
	let i = g2(un(e), n === 'start', o)
	return r && ((i = i.map((s) => s + '-' + r)), t && (i = i.concat(i.map(ss)))), i
}
function as(e) {
	return e.replace(/left|right|bottom|top/g, (t) => h2[t])
}
function b2(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function nm(e) {
	return typeof e != 'number' ? b2(e) : { top: e, right: e, bottom: e, left: e }
}
function $r(e) {
	const { x: t, y: n, width: o, height: r } = e
	return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n }
}
function Yu(e, t, n) {
	let { reference: o, floating: r } = e
	const i = ko(t),
		s = Jl(t),
		a = Ql(s),
		l = un(t),
		c = i === 'y',
		u = o.x + o.width / 2 - r.width / 2,
		d = o.y + o.height / 2 - r.height / 2,
		f = o[a] / 2 - r[a] / 2
	let p
	switch (l) {
		case 'top':
			p = { x: u, y: o.y - r.height }
			break
		case 'bottom':
			p = { x: u, y: o.y + o.height }
			break
		case 'right':
			p = { x: o.x + o.width, y: d }
			break
		case 'left':
			p = { x: o.x - r.width, y: d }
			break
		default:
			p = { x: o.x, y: o.y }
	}
	switch (qt(t)) {
		case 'start':
			p[s] -= f * (n && c ? -1 : 1)
			break
		case 'end':
			p[s] += f * (n && c ? -1 : 1)
			break
	}
	return p
}
const y2 = async (e, t, n) => {
	const { placement: o = 'bottom', strategy: r = 'absolute', middleware: i = [], platform: s } = n,
		a = i.filter(Boolean),
		l = await (s.isRTL == null ? void 0 : s.isRTL(t))
	let c = await s.getElementRects({ reference: e, floating: t, strategy: r }),
		{ x: u, y: d } = Yu(c, o, l),
		f = o,
		p = {},
		m = 0
	for (let v = 0; v < a.length; v++) {
		const { name: b, fn: w } = a[v],
			{
				x: P,
				y,
				data: S,
				reset: I,
			} = await w({
				x: u,
				y: d,
				initialPlacement: o,
				placement: f,
				strategy: r,
				middlewareData: p,
				rects: c,
				platform: s,
				elements: { reference: e, floating: t },
			})
		;(u = P ?? u),
			(d = y ?? d),
			(p = { ...p, [b]: { ...p[b], ...S } }),
			I &&
				m <= 50 &&
				(m++,
				typeof I == 'object' &&
					(I.placement && (f = I.placement),
					I.rects &&
						(c =
							I.rects === !0
								? await s.getElementRects({ reference: e, floating: t, strategy: r })
								: I.rects),
					({ x: u, y: d } = Yu(c, f, l))),
				(v = -1))
	}
	return { x: u, y: d, placement: f, strategy: r, middlewareData: p }
}
async function Ls(e, t) {
	var n
	t === void 0 && (t = {})
	const { x: o, y: r, platform: i, rects: s, elements: a, strategy: l } = e,
		{
			boundary: c = 'clippingAncestors',
			rootBoundary: u = 'viewport',
			elementContext: d = 'floating',
			altBoundary: f = !1,
			padding: p = 0,
		} = Po(t, e),
		m = nm(p),
		b = a[f ? (d === 'floating' ? 'reference' : 'floating') : d],
		w = $r(
			await i.getClippingRect({
				element:
					(n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n
						? b
						: b.contextElement ||
						  (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
				boundary: c,
				rootBoundary: u,
				strategy: l,
			})
		),
		P =
			d === 'floating'
				? { x: o, y: r, width: s.floating.width, height: s.floating.height }
				: s.reference,
		y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
		S = (await (i.isElement == null ? void 0 : i.isElement(y)))
			? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		I = $r(
			i.convertOffsetParentRelativeRectToViewportRelativeRect
				? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: a,
						rect: P,
						offsetParent: y,
						strategy: l,
				  })
				: P
		)
	return {
		top: (w.top - I.top + m.top) / S.y,
		bottom: (I.bottom - w.bottom + m.bottom) / S.y,
		left: (w.left - I.left + m.left) / S.x,
		right: (I.right - w.right + m.right) / S.x,
	}
}
const w2 = (e) => ({
	name: 'arrow',
	options: e,
	async fn(t) {
		const { x: n, y: o, placement: r, rects: i, platform: s, elements: a, middlewareData: l } = t,
			{ element: c, padding: u = 0 } = Po(e, t) || {}
		if (c == null) return {}
		const d = nm(u),
			f = { x: n, y: o },
			p = Jl(r),
			m = Ql(p),
			v = await s.getDimensions(c),
			b = p === 'y',
			w = b ? 'top' : 'left',
			P = b ? 'bottom' : 'right',
			y = b ? 'clientHeight' : 'clientWidth',
			S = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
			I = f[p] - i.reference[p],
			j = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c))
		let U = j ? j[y] : 0
		;(!U || !(await (s.isElement == null ? void 0 : s.isElement(j)))) &&
			(U = a.floating[y] || i.floating[m])
		const Z = S / 2 - I / 2,
			q = U / 2 - v[m] / 2 - 1,
			V = Kr(d[w], q),
			W = Kr(d[P], q),
			z = V,
			oe = U - v[m] - W,
			me = U / 2 - v[m] / 2 + Z,
			we = Qa(z, me, oe),
			re =
				!l.arrow &&
				qt(r) != null &&
				me !== we &&
				i.reference[m] / 2 - (me < z ? V : W) - v[m] / 2 < 0,
			de = re ? (me < z ? me - z : me - oe) : 0
		return {
			[p]: f[p] + de,
			data: { [p]: we, centerOffset: me - we - de, ...(re && { alignmentOffset: de }) },
			reset: re,
		}
	},
})
function k2(e, t, n) {
	return (
		e
			? [...n.filter((r) => qt(r) === e), ...n.filter((r) => qt(r) !== e)]
			: n.filter((r) => un(r) === r)
	).filter((r) => (e ? qt(r) === e || (t ? ss(r) !== r : !1) : !0))
}
const E2 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'autoPlacement',
				options: e,
				async fn(t) {
					var n, o, r
					const { rects: i, middlewareData: s, placement: a, platform: l, elements: c } = t,
						{
							crossAxis: u = !1,
							alignment: d,
							allowedPlacements: f = Ku,
							autoAlignment: p = !0,
							...m
						} = Po(e, t),
						v = d !== void 0 || f === Ku ? k2(d || null, p, f) : f,
						b = await Ls(t, m),
						w = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0,
						P = v[w]
					if (P == null) return {}
					const y = tm(P, i, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)))
					if (a !== P) return { reset: { placement: v[0] } }
					const S = [b[un(P)], b[y[0]], b[y[1]]],
						I = [
							...(((o = s.autoPlacement) == null ? void 0 : o.overflows) || []),
							{ placement: P, overflows: S },
						],
						j = v[w + 1]
					if (j) return { data: { index: w + 1, overflows: I }, reset: { placement: j } }
					const U = I.map((V) => {
							const W = qt(V.placement)
							return [
								V.placement,
								W && u ? V.overflows.slice(0, 2).reduce((z, oe) => z + oe, 0) : V.overflows[0],
								V.overflows,
							]
						}).sort((V, W) => V[1] - W[1]),
						q =
							((r = U.filter((V) => V[2].slice(0, qt(V[0]) ? 2 : 3).every((W) => W <= 0))[0]) ==
							null
								? void 0
								: r[0]) || U[0][0]
					return q !== a ? { data: { index: w + 1, overflows: I }, reset: { placement: q } } : {}
				},
			}
		)
	},
	x2 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var n, o
					const {
							placement: r,
							middlewareData: i,
							rects: s,
							initialPlacement: a,
							platform: l,
							elements: c,
						} = t,
						{
							mainAxis: u = !0,
							crossAxis: d = !0,
							fallbackPlacements: f,
							fallbackStrategy: p = 'bestFit',
							fallbackAxisSideDirection: m = 'none',
							flipAlignment: v = !0,
							...b
						} = Po(e, t)
					if ((n = i.arrow) != null && n.alignmentOffset) return {}
					const w = un(r),
						P = ko(a),
						y = un(a) === a,
						S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
						I = f || (y || !v ? [as(a)] : v2(a)),
						j = m !== 'none'
					!f && j && I.push(..._2(a, v, m, S))
					const U = [a, ...I],
						Z = await Ls(t, b),
						q = []
					let V = ((o = i.flip) == null ? void 0 : o.overflows) || []
					if ((u && q.push(Z[w]), d)) {
						const me = tm(r, s, S)
						q.push(Z[me[0]], Z[me[1]])
					}
					if (((V = [...V, { placement: r, overflows: q }]), !q.every((me) => me <= 0))) {
						var W, z
						const me = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1,
							we = U[me]
						if (we) return { data: { index: me, overflows: V }, reset: { placement: we } }
						let re =
							(z = V.filter((de) => de.overflows[0] <= 0).sort(
								(de, le) => de.overflows[1] - le.overflows[1]
							)[0]) == null
								? void 0
								: z.placement
						if (!re)
							switch (p) {
								case 'bestFit': {
									var oe
									const de =
										(oe = V.filter((le) => {
											if (j) {
												const ye = ko(le.placement)
												return ye === P || ye === 'y'
											}
											return !0
										})
											.map((le) => [
												le.placement,
												le.overflows.filter((ye) => ye > 0).reduce((ye, tt) => ye + tt, 0),
											])
											.sort((le, ye) => le[1] - ye[1])[0]) == null
											? void 0
											: oe[0]
									de && (re = de)
									break
								}
								case 'initialPlacement':
									re = a
									break
							}
						if (r !== re) return { reset: { placement: re } }
					}
					return {}
				},
			}
		)
	}
async function P2(e, t) {
	const { placement: n, platform: o, elements: r } = e,
		i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
		s = un(n),
		a = qt(n),
		l = ko(n) === 'y',
		c = ['left', 'top'].includes(s) ? -1 : 1,
		u = i && l ? -1 : 1,
		d = Po(t, e)
	let {
		mainAxis: f,
		crossAxis: p,
		alignmentAxis: m,
	} = typeof d == 'number'
		? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis }
	return (
		a && typeof m == 'number' && (p = a === 'end' ? m * -1 : m),
		l ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
	)
}
const S2 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var n, o
					const { x: r, y: i, placement: s, middlewareData: a } = t,
						l = await P2(t, e)
					return s === ((n = a.offset) == null ? void 0 : n.placement) &&
						(o = a.arrow) != null &&
						o.alignmentOffset
						? {}
						: { x: r + l.x, y: i + l.y, data: { ...l, placement: s } }
				},
			}
		)
	},
	C2 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: n, y: o, placement: r } = t,
						{
							mainAxis: i = !0,
							crossAxis: s = !1,
							limiter: a = {
								fn: (b) => {
									let { x: w, y: P } = b
									return { x: w, y: P }
								},
							},
							...l
						} = Po(e, t),
						c = { x: n, y: o },
						u = await Ls(t, l),
						d = ko(un(r)),
						f = em(d)
					let p = c[f],
						m = c[d]
					if (i) {
						const b = f === 'y' ? 'top' : 'left',
							w = f === 'y' ? 'bottom' : 'right',
							P = p + u[b],
							y = p - u[w]
						p = Qa(P, p, y)
					}
					if (s) {
						const b = d === 'y' ? 'top' : 'left',
							w = d === 'y' ? 'bottom' : 'right',
							P = m + u[b],
							y = m - u[w]
						m = Qa(P, m, y)
					}
					const v = a.fn({ ...t, [f]: p, [d]: m })
					return { ...v, data: { x: v.x - n, y: v.y - o, enabled: { [f]: i, [d]: s } } }
				},
			}
		)
	},
	T2 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					var n, o
					const { placement: r, rects: i, platform: s, elements: a } = t,
						{ apply: l = () => {}, ...c } = Po(e, t),
						u = await Ls(t, c),
						d = un(r),
						f = qt(r),
						p = ko(r) === 'y',
						{ width: m, height: v } = i.floating
					let b, w
					d === 'top' || d === 'bottom'
						? ((b = d),
						  (w =
								f === ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating))) ? 'start' : 'end')
									? 'left'
									: 'right'))
						: ((w = d), (b = f === 'end' ? 'top' : 'bottom'))
					const P = v - u.top - u.bottom,
						y = m - u.left - u.right,
						S = Kr(v - u[b], P),
						I = Kr(m - u[w], y),
						j = !t.middlewareData.shift
					let U = S,
						Z = I
					if (
						((n = t.middlewareData.shift) != null && n.enabled.x && (Z = y),
						(o = t.middlewareData.shift) != null && o.enabled.y && (U = P),
						j && !f)
					) {
						const V = fo(u.left, 0),
							W = fo(u.right, 0),
							z = fo(u.top, 0),
							oe = fo(u.bottom, 0)
						p
							? (Z = m - 2 * (V !== 0 || W !== 0 ? V + W : fo(u.left, u.right)))
							: (U = v - 2 * (z !== 0 || oe !== 0 ? z + oe : fo(u.top, u.bottom)))
					}
					await l({ ...t, availableWidth: Z, availableHeight: U })
					const q = await s.getDimensions(a.floating)
					return m !== q.width || v !== q.height ? { reset: { rects: !0 } } : {}
				},
			}
		)
	}
function Ot(e) {
	var t
	return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function ln(e) {
	return Ot(e).getComputedStyle(e)
}
const Qu = Math.min,
	Ir = Math.max,
	ls = Math.round
function om(e) {
	const t = ln(e)
	let n = parseFloat(t.width),
		o = parseFloat(t.height)
	const r = e.offsetWidth,
		i = e.offsetHeight,
		s = ls(n) !== r || ls(o) !== i
	return s && ((n = r), (o = i)), { width: n, height: o, fallback: s }
}
function to(e) {
	return im(e) ? (e.nodeName || '').toLowerCase() : ''
}
let Ti
function rm() {
	if (Ti) return Ti
	const e = navigator.userAgentData
	return e && Array.isArray(e.brands)
		? ((Ti = e.brands.map((t) => t.brand + '/' + t.version).join(' ')), Ti)
		: navigator.userAgent
}
function cn(e) {
	return e instanceof Ot(e).HTMLElement
}
function Jn(e) {
	return e instanceof Ot(e).Element
}
function im(e) {
	return e instanceof Ot(e).Node
}
function Ju(e) {
	return typeof ShadowRoot > 'u' ? !1 : e instanceof Ot(e).ShadowRoot || e instanceof ShadowRoot
}
function Bs(e) {
	const { overflow: t, overflowX: n, overflowY: o, display: r } = ln(e)
	return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !['inline', 'contents'].includes(r)
}
function A2(e) {
	return ['table', 'td', 'th'].includes(to(e))
}
function Ja(e) {
	const t = /firefox/i.test(rm()),
		n = ln(e),
		o = n.backdropFilter || n.WebkitBackdropFilter
	return (
		n.transform !== 'none' ||
		n.perspective !== 'none' ||
		(!!o && o !== 'none') ||
		(t && n.willChange === 'filter') ||
		(t && !!n.filter && n.filter !== 'none') ||
		['transform', 'perspective'].some((r) => n.willChange.includes(r)) ||
		['paint', 'layout', 'strict', 'content'].some((r) => {
			const i = n.contain
			return i != null && i.includes(r)
		})
	)
}
function sm() {
	return !/^((?!chrome|android).)*safari/i.test(rm())
}
function Xl(e) {
	return ['html', 'body', '#document'].includes(to(e))
}
function am(e) {
	return Jn(e) ? e : e.contextElement
}
const lm = { x: 1, y: 1 }
function qo(e) {
	const t = am(e)
	if (!cn(t)) return lm
	const n = t.getBoundingClientRect(),
		{ width: o, height: r, fallback: i } = om(t)
	let s = (i ? ls(n.width) : n.width) / o,
		a = (i ? ls(n.height) : n.height) / r
	return (s && Number.isFinite(s)) || (s = 1), (a && Number.isFinite(a)) || (a = 1), { x: s, y: a }
}
function Yr(e, t, n, o) {
	var r, i
	t === void 0 && (t = !1), n === void 0 && (n = !1)
	const s = e.getBoundingClientRect(),
		a = am(e)
	let l = lm
	t && (o ? Jn(o) && (l = qo(o)) : (l = qo(e)))
	const c = a ? Ot(a) : window,
		u = !sm() && n
	let d = (s.left + ((u && ((r = c.visualViewport) == null ? void 0 : r.offsetLeft)) || 0)) / l.x,
		f = (s.top + ((u && ((i = c.visualViewport) == null ? void 0 : i.offsetTop)) || 0)) / l.y,
		p = s.width / l.x,
		m = s.height / l.y
	if (a) {
		const v = Ot(a),
			b = o && Jn(o) ? Ot(o) : o
		let w = v.frameElement
		for (; w && o && b !== v; ) {
			const P = qo(w),
				y = w.getBoundingClientRect(),
				S = getComputedStyle(w)
			;(y.x += (w.clientLeft + parseFloat(S.paddingLeft)) * P.x),
				(y.y += (w.clientTop + parseFloat(S.paddingTop)) * P.y),
				(d *= P.x),
				(f *= P.y),
				(p *= P.x),
				(m *= P.y),
				(d += y.x),
				(f += y.y),
				(w = Ot(w).frameElement)
		}
	}
	return { width: p, height: m, top: f, right: d + p, bottom: f + m, left: d, x: d, y: f }
}
function Xn(e) {
	return ((im(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Os(e) {
	return Jn(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
}
function cm(e) {
	return Yr(Xn(e)).left + Os(e).scrollLeft
}
function Qr(e) {
	if (to(e) === 'html') return e
	const t = e.assignedSlot || e.parentNode || (Ju(e) && e.host) || Xn(e)
	return Ju(t) ? t.host : t
}
function um(e) {
	const t = Qr(e)
	return Xl(t) ? t.ownerDocument.body : cn(t) && Bs(t) ? t : um(t)
}
function cs(e, t) {
	var n
	t === void 0 && (t = [])
	const o = um(e),
		r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
		i = Ot(o)
	return r ? t.concat(i, i.visualViewport || [], Bs(o) ? o : []) : t.concat(o, cs(o))
}
function Xu(e, t, n) {
	return t === 'viewport'
		? $r(
				(function (o, r) {
					const i = Ot(o),
						s = Xn(o),
						a = i.visualViewport
					let l = s.clientWidth,
						c = s.clientHeight,
						u = 0,
						d = 0
					if (a) {
						;(l = a.width), (c = a.height)
						const f = sm()
						;(f || (!f && r === 'fixed')) && ((u = a.offsetLeft), (d = a.offsetTop))
					}
					return { width: l, height: c, x: u, y: d }
				})(e, n)
		  )
		: Jn(t)
		? $r(
				(function (o, r) {
					const i = Yr(o, !0, r === 'fixed'),
						s = i.top + o.clientTop,
						a = i.left + o.clientLeft,
						l = cn(o) ? qo(o) : { x: 1, y: 1 }
					return {
						width: o.clientWidth * l.x,
						height: o.clientHeight * l.y,
						x: a * l.x,
						y: s * l.y,
					}
				})(t, n)
		  )
		: $r(
				(function (o) {
					const r = Xn(o),
						i = Os(o),
						s = o.ownerDocument.body,
						a = Ir(r.scrollWidth, r.clientWidth, s.scrollWidth, s.clientWidth),
						l = Ir(r.scrollHeight, r.clientHeight, s.scrollHeight, s.clientHeight)
					let c = -i.scrollLeft + cm(o)
					const u = -i.scrollTop
					return (
						ln(s).direction === 'rtl' && (c += Ir(r.clientWidth, s.clientWidth) - a),
						{ width: a, height: l, x: c, y: u }
					)
				})(Xn(e))
		  )
}
function Zu(e) {
	return cn(e) && ln(e).position !== 'fixed' ? e.offsetParent : null
}
function ed(e) {
	const t = Ot(e)
	let n = Zu(e)
	for (; n && A2(n) && ln(n).position === 'static'; ) n = Zu(n)
	return n && (to(n) === 'html' || (to(n) === 'body' && ln(n).position === 'static' && !Ja(n)))
		? t
		: n ||
				(function (o) {
					let r = Qr(o)
					for (; cn(r) && !Xl(r); ) {
						if (Ja(r)) return r
						r = Qr(r)
					}
					return null
				})(e) ||
				t
}
function L2(e, t, n) {
	const o = cn(t),
		r = Xn(t),
		i = Yr(e, !0, n === 'fixed', t)
	let s = { scrollLeft: 0, scrollTop: 0 }
	const a = { x: 0, y: 0 }
	if (o || (!o && n !== 'fixed'))
		if (((to(t) !== 'body' || Bs(r)) && (s = Os(t)), cn(t))) {
			const l = Yr(t, !0)
			;(a.x = l.x + t.clientLeft), (a.y = l.y + t.clientTop)
		} else r && (a.x = cm(r))
	return {
		x: i.left + s.scrollLeft - a.x,
		y: i.top + s.scrollTop - a.y,
		width: i.width,
		height: i.height,
	}
}
const B2 = {
		getClippingRect: function (e) {
			let { element: t, boundary: n, rootBoundary: o, strategy: r } = e
			const i =
					n === 'clippingAncestors'
						? (function (c, u) {
								const d = u.get(c)
								if (d) return d
								let f = cs(c).filter((b) => Jn(b) && to(b) !== 'body'),
									p = null
								const m = ln(c).position === 'fixed'
								let v = m ? Qr(c) : c
								for (; Jn(v) && !Xl(v); ) {
									const b = ln(v),
										w = Ja(v)
									;(
										m
											? w || p
											: w ||
											  b.position !== 'static' ||
											  !p ||
											  !['absolute', 'fixed'].includes(p.position)
									)
										? (p = b)
										: (f = f.filter((P) => P !== v)),
										(v = Qr(v))
								}
								return u.set(c, f), f
						  })(t, this._c)
						: [].concat(n),
				s = [...i, o],
				a = s[0],
				l = s.reduce((c, u) => {
					const d = Xu(t, u, r)
					return (
						(c.top = Ir(d.top, c.top)),
						(c.right = Qu(d.right, c.right)),
						(c.bottom = Qu(d.bottom, c.bottom)),
						(c.left = Ir(d.left, c.left)),
						c
					)
				}, Xu(t, a, r))
			return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }
		},
		convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
			let { rect: t, offsetParent: n, strategy: o } = e
			const r = cn(n),
				i = Xn(n)
			if (n === i) return t
			let s = { scrollLeft: 0, scrollTop: 0 },
				a = { x: 1, y: 1 }
			const l = { x: 0, y: 0 }
			if ((r || (!r && o !== 'fixed')) && ((to(n) !== 'body' || Bs(i)) && (s = Os(n)), cn(n))) {
				const c = Yr(n)
				;(a = qo(n)), (l.x = c.x + n.clientLeft), (l.y = c.y + n.clientTop)
			}
			return {
				width: t.width * a.x,
				height: t.height * a.y,
				x: t.x * a.x - s.scrollLeft * a.x + l.x,
				y: t.y * a.y - s.scrollTop * a.y + l.y,
			}
		},
		isElement: Jn,
		getDimensions: function (e) {
			return cn(e) ? om(e) : e.getBoundingClientRect()
		},
		getOffsetParent: ed,
		getDocumentElement: Xn,
		getScale: qo,
		async getElementRects(e) {
			let { reference: t, floating: n, strategy: o } = e
			const r = this.getOffsetParent || ed,
				i = this.getDimensions
			return { reference: L2(t, await r(n), o), floating: { x: 0, y: 0, ...(await i(n)) } }
		},
		getClientRects: (e) => Array.from(e.getClientRects()),
		isRTL: (e) => ln(e).direction === 'rtl',
	},
	O2 = (e, t, n) => {
		const o = new Map(),
			r = { platform: B2, ...n },
			i = { ...r.platform, _c: o }
		return y2(e, t, { ...r, platform: i })
	}
function dm(e, t) {
	for (const n in t)
		Object.prototype.hasOwnProperty.call(t, n) &&
			(typeof t[n] == 'object' && e[n] ? dm(e[n], t[n]) : (e[n] = t[n]))
}
const Ut = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: 'body',
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: 'absolute',
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: 'top',
			triggers: ['hover', 'focus', 'touch'],
			hideTriggers: (e) => [...e, 'click'],
			delay: { show: 200, hide: 0 },
			handleResize: !1,
			html: !1,
			loadingContent: '...',
		},
		dropdown: {
			placement: 'bottom',
			triggers: ['click'],
			delay: 0,
			handleResize: !0,
			autoHide: !0,
		},
		menu: {
			$extend: 'dropdown',
			triggers: ['hover', 'focus'],
			popperTriggers: ['hover'],
			delay: { show: 0, hide: 400 },
		},
	},
}
function Jr(e, t) {
	let n = Ut.themes[e] || {},
		o
	do
		(o = n[t]),
			typeof o > 'u'
				? n.$extend
					? (n = Ut.themes[n.$extend] || {})
					: ((n = null), (o = Ut[t]))
				: (n = null)
	while (n)
	return o
}
function V2(e) {
	const t = [e]
	let n = Ut.themes[e] || {}
	do n.$extend && !n.$resetCss ? (t.push(n.$extend), (n = Ut.themes[n.$extend] || {})) : (n = null)
	while (n)
	return t.map((o) => `v-popper--theme-${o}`)
}
function td(e) {
	const t = [e]
	let n = Ut.themes[e] || {}
	do n.$extend ? (t.push(n.$extend), (n = Ut.themes[n.$extend] || {})) : (n = null)
	while (n)
	return t
}
let Zo = !1
if (typeof window < 'u') {
	Zo = !1
	try {
		const e = Object.defineProperty({}, 'passive', {
			get() {
				Zo = !0
			},
		})
		window.addEventListener('test', null, e)
	} catch {}
}
let fm = !1
typeof window < 'u' &&
	typeof navigator < 'u' &&
	(fm = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
const pm = ['auto', 'top', 'bottom', 'left', 'right'].reduce(
		(e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
		[]
	),
	nd = {
		hover: 'mouseenter',
		focus: 'focus',
		click: 'click',
		touch: 'touchstart',
		pointer: 'pointerdown',
	},
	od = {
		hover: 'mouseleave',
		focus: 'blur',
		click: 'click',
		touch: 'touchend',
		pointer: 'pointerup',
	}
function rd(e, t) {
	const n = e.indexOf(t)
	n !== -1 && e.splice(n, 1)
}
function la() {
	return new Promise((e) =>
		requestAnimationFrame(() => {
			requestAnimationFrame(e)
		})
	)
}
const Nt = []
let co = null
const id = {}
function sd(e) {
	let t = id[e]
	return t || (t = id[e] = []), t
}
let Xa = function () {}
typeof window < 'u' && (Xa = window.Element)
function Se(e) {
	return function (t) {
		return Jr(t.theme, e)
	}
}
const ca = '__floating-vue__popper',
	hm = () =>
		$({
			name: 'VPopper',
			provide() {
				return { [ca]: { parentPopper: this } }
			},
			inject: { [ca]: { default: null } },
			props: {
				theme: { type: String, required: !0 },
				targetNodes: { type: Function, required: !0 },
				referenceNode: { type: Function, default: null },
				popperNode: { type: Function, required: !0 },
				shown: { type: Boolean, default: !1 },
				showGroup: { type: String, default: null },
				ariaId: { default: null },
				disabled: { type: Boolean, default: Se('disabled') },
				positioningDisabled: { type: Boolean, default: Se('positioningDisabled') },
				placement: { type: String, default: Se('placement'), validator: (e) => pm.includes(e) },
				delay: { type: [String, Number, Object], default: Se('delay') },
				distance: { type: [Number, String], default: Se('distance') },
				skidding: { type: [Number, String], default: Se('skidding') },
				triggers: { type: Array, default: Se('triggers') },
				showTriggers: { type: [Array, Function], default: Se('showTriggers') },
				hideTriggers: { type: [Array, Function], default: Se('hideTriggers') },
				popperTriggers: { type: Array, default: Se('popperTriggers') },
				popperShowTriggers: { type: [Array, Function], default: Se('popperShowTriggers') },
				popperHideTriggers: { type: [Array, Function], default: Se('popperHideTriggers') },
				container: { type: [String, Object, Xa, Boolean], default: Se('container') },
				boundary: { type: [String, Xa], default: Se('boundary') },
				strategy: {
					type: String,
					validator: (e) => ['absolute', 'fixed'].includes(e),
					default: Se('strategy'),
				},
				autoHide: { type: [Boolean, Function], default: Se('autoHide') },
				handleResize: { type: Boolean, default: Se('handleResize') },
				instantMove: { type: Boolean, default: Se('instantMove') },
				eagerMount: { type: Boolean, default: Se('eagerMount') },
				popperClass: { type: [String, Array, Object], default: Se('popperClass') },
				computeTransformOrigin: { type: Boolean, default: Se('computeTransformOrigin') },
				autoMinSize: { type: Boolean, default: Se('autoMinSize') },
				autoSize: { type: [Boolean, String], default: Se('autoSize') },
				autoMaxSize: { type: Boolean, default: Se('autoMaxSize') },
				autoBoundaryMaxSize: { type: Boolean, default: Se('autoBoundaryMaxSize') },
				preventOverflow: { type: Boolean, default: Se('preventOverflow') },
				overflowPadding: { type: [Number, String], default: Se('overflowPadding') },
				arrowPadding: { type: [Number, String], default: Se('arrowPadding') },
				arrowOverflow: { type: Boolean, default: Se('arrowOverflow') },
				flip: { type: Boolean, default: Se('flip') },
				shift: { type: Boolean, default: Se('shift') },
				shiftCrossAxis: { type: Boolean, default: Se('shiftCrossAxis') },
				noAutoFocus: { type: Boolean, default: Se('noAutoFocus') },
				disposeTimeout: { type: Number, default: Se('disposeTimeout') },
			},
			emits: {
				show: () => !0,
				hide: () => !0,
				'update:shown': (e) => !0,
				'apply-show': () => !0,
				'apply-hide': () => !0,
				'close-group': () => !0,
				'close-directive': () => !0,
				'auto-hide': () => !0,
				resize: () => !0,
			},
			data() {
				return {
					isShown: !1,
					isMounted: !1,
					skipTransition: !1,
					classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
					result: {
						x: 0,
						y: 0,
						placement: '',
						strategy: this.strategy,
						arrow: { x: 0, y: 0, centerOffset: 0 },
						transformOrigin: null,
					},
					randomId: `popper_${[Math.random(), Date.now()]
						.map((e) => e.toString(36).substring(2, 10))
						.join('_')}`,
					shownChildren: new Set(),
					lastAutoHide: !0,
					pendingHide: !1,
					containsGlobalTarget: !1,
					isDisposed: !0,
					mouseDownContains: !1,
				}
			},
			computed: {
				popperId() {
					return this.ariaId != null ? this.ariaId : this.randomId
				},
				shouldMountContent() {
					return this.eagerMount || this.isMounted
				},
				slotData() {
					return {
						popperId: this.popperId,
						isShown: this.isShown,
						shouldMountContent: this.shouldMountContent,
						skipTransition: this.skipTransition,
						autoHide: typeof this.autoHide == 'function' ? this.lastAutoHide : this.autoHide,
						show: this.show,
						hide: this.hide,
						handleResize: this.handleResize,
						onResize: this.onResize,
						classes: { ...this.classes, popperClass: this.popperClass },
						result: this.positioningDisabled ? null : this.result,
						attrs: this.$attrs,
					}
				},
				parentPopper() {
					var e
					return (e = this[ca]) == null ? void 0 : e.parentPopper
				},
				hasPopperShowTriggerHover() {
					var e, t
					return (
						((e = this.popperTriggers) == null ? void 0 : e.includes('hover')) ||
						((t = this.popperShowTriggers) == null ? void 0 : t.includes('hover'))
					)
				},
			},
			watch: {
				shown: '$_autoShowHide',
				disabled(e) {
					e ? this.dispose() : this.init()
				},
				async container() {
					this.isShown && (this.$_ensureTeleport(), await this.$_computePosition())
				},
				triggers: { handler: '$_refreshListeners', deep: !0 },
				positioningDisabled: '$_refreshListeners',
				...[
					'placement',
					'distance',
					'skidding',
					'boundary',
					'strategy',
					'overflowPadding',
					'arrowPadding',
					'preventOverflow',
					'shift',
					'shiftCrossAxis',
					'flip',
				].reduce((e, t) => ((e[t] = '$_computePosition'), e), {}),
			},
			created() {
				this.autoMinSize &&
					console.warn(
						'[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
					),
					this.autoMaxSize &&
						console.warn(
							'[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.'
						)
			},
			mounted() {
				this.init(), this.$_detachPopperNode()
			},
			activated() {
				this.$_autoShowHide()
			},
			deactivated() {
				this.hide()
			},
			beforeUnmount() {
				this.dispose()
			},
			methods: {
				show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
					var o, r
					;((o = this.parentPopper) != null &&
						o.lockedChild &&
						this.parentPopper.lockedChild !== this) ||
						((this.pendingHide = !1),
						(n || !this.disabled) &&
							(((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this &&
								(this.parentPopper.lockedChild = null),
							this.$_scheduleShow(e, t),
							this.$emit('show'),
							(this.$_showFrameLocked = !0),
							requestAnimationFrame(() => {
								this.$_showFrameLocked = !1
							})),
						this.$emit('update:shown', !0))
				},
				hide({ event: e = null, skipDelay: t = !1 } = {}) {
					var n
					if (!this.$_hideInProgress) {
						if (this.shownChildren.size > 0) {
							this.pendingHide = !0
							return
						}
						if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
							this.parentPopper &&
								((this.parentPopper.lockedChild = this),
								clearTimeout(this.parentPopper.lockedChildTimer),
								(this.parentPopper.lockedChildTimer = setTimeout(() => {
									this.parentPopper.lockedChild === this &&
										(this.parentPopper.lockedChild.hide({ skipDelay: t }),
										(this.parentPopper.lockedChild = null))
								}, 1e3)))
							return
						}
						;((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this &&
							(this.parentPopper.lockedChild = null),
							(this.pendingHide = !1),
							this.$_scheduleHide(e, t),
							this.$emit('hide'),
							this.$emit('update:shown', !1)
					}
				},
				init() {
					var e
					this.isDisposed &&
						((this.isDisposed = !1),
						(this.isMounted = !1),
						(this.$_events = []),
						(this.$_preventShow = !1),
						(this.$_referenceNode =
							((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el),
						(this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE)),
						(this.$_popperNode = this.popperNode()),
						(this.$_innerNode = this.$_popperNode.querySelector('.v-popper__inner')),
						(this.$_arrowNode = this.$_popperNode.querySelector('.v-popper__arrow-container')),
						this.$_swapTargetAttrs('title', 'data-original-title'),
						this.$_detachPopperNode(),
						this.triggers.length && this.$_addEventListeners(),
						this.shown && this.show())
				},
				dispose() {
					this.isDisposed ||
						((this.isDisposed = !0),
						this.$_removeEventListeners(),
						this.hide({ skipDelay: !0 }),
						this.$_detachPopperNode(),
						(this.isMounted = !1),
						(this.isShown = !1),
						this.$_updateParentShownChildren(!1),
						this.$_swapTargetAttrs('data-original-title', 'title'))
				},
				async onResize() {
					this.isShown && (await this.$_computePosition(), this.$emit('resize'))
				},
				async $_computePosition() {
					if (this.isDisposed || this.positioningDisabled) return
					const e = { strategy: this.strategy, middleware: [] }
					;(this.distance || this.skidding) &&
						e.middleware.push(S2({ mainAxis: this.distance, crossAxis: this.skidding }))
					const t = this.placement.startsWith('auto')
					if (
						(t
							? e.middleware.push(E2({ alignment: this.placement.split('-')[1] ?? '' }))
							: (e.placement = this.placement),
						this.preventOverflow &&
							(this.shift &&
								e.middleware.push(
									C2({
										padding: this.overflowPadding,
										boundary: this.boundary,
										crossAxis: this.shiftCrossAxis,
									})
								),
							!t &&
								this.flip &&
								e.middleware.push(x2({ padding: this.overflowPadding, boundary: this.boundary }))),
						e.middleware.push(w2({ element: this.$_arrowNode, padding: this.arrowPadding })),
						this.arrowOverflow &&
							e.middleware.push({
								name: 'arrowOverflow',
								fn: ({ placement: o, rects: r, middlewareData: i }) => {
									let s
									const { centerOffset: a } = i.arrow
									return (
										o.startsWith('top') || o.startsWith('bottom')
											? (s = Math.abs(a) > r.reference.width / 2)
											: (s = Math.abs(a) > r.reference.height / 2),
										{ data: { overflow: s } }
									)
								},
							}),
						this.autoMinSize || this.autoSize)
					) {
						const o = this.autoSize ? this.autoSize : this.autoMinSize ? 'min' : null
						e.middleware.push({
							name: 'autoSize',
							fn: ({ rects: r, placement: i, middlewareData: s }) => {
								var a
								if ((a = s.autoSize) != null && a.skip) return {}
								let l, c
								return (
									i.startsWith('top') || i.startsWith('bottom')
										? (l = r.reference.width)
										: (c = r.reference.height),
									(this.$_innerNode.style[
										o === 'min' ? 'minWidth' : o === 'max' ? 'maxWidth' : 'width'
									] = l != null ? `${l}px` : null),
									(this.$_innerNode.style[
										o === 'min' ? 'minHeight' : o === 'max' ? 'maxHeight' : 'height'
									] = c != null ? `${c}px` : null),
									{ data: { skip: !0 }, reset: { rects: !0 } }
								)
							},
						})
					}
					;(this.autoMaxSize || this.autoBoundaryMaxSize) &&
						((this.$_innerNode.style.maxWidth = null),
						(this.$_innerNode.style.maxHeight = null),
						e.middleware.push(
							T2({
								boundary: this.boundary,
								padding: this.overflowPadding,
								apply: ({ availableWidth: o, availableHeight: r }) => {
									;(this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null),
										(this.$_innerNode.style.maxHeight = r != null ? `${r}px` : null)
								},
							})
						))
					const n = await O2(this.$_referenceNode, this.$_popperNode, e)
					Object.assign(this.result, {
						x: n.x,
						y: n.y,
						placement: n.placement,
						strategy: n.strategy,
						arrow: { ...n.middlewareData.arrow, ...n.middlewareData.arrowOverflow },
					})
				},
				$_scheduleShow(e, t = !1) {
					if (
						(this.$_updateParentShownChildren(!0),
						(this.$_hideInProgress = !1),
						clearTimeout(this.$_scheduleTimer),
						co && this.instantMove && co.instantMove && co !== this.parentPopper)
					) {
						co.$_applyHide(!0), this.$_applyShow(!0)
						return
					}
					t
						? this.$_applyShow()
						: (this.$_scheduleTimer = setTimeout(
								this.$_applyShow.bind(this),
								this.$_computeDelay('show')
						  ))
				},
				$_scheduleHide(e, t = !1) {
					if (this.shownChildren.size > 0) {
						this.pendingHide = !0
						return
					}
					this.$_updateParentShownChildren(!1),
						(this.$_hideInProgress = !0),
						clearTimeout(this.$_scheduleTimer),
						this.isShown && (co = this),
						t
							? this.$_applyHide()
							: (this.$_scheduleTimer = setTimeout(
									this.$_applyHide.bind(this),
									this.$_computeDelay('hide')
							  ))
				},
				$_computeDelay(e) {
					const t = this.delay
					return parseInt((t && t[e]) || t || 0)
				},
				async $_applyShow(e = !1) {
					clearTimeout(this.$_disposeTimer),
						clearTimeout(this.$_scheduleTimer),
						(this.skipTransition = e),
						!this.isShown &&
							(this.$_ensureTeleport(),
							await la(),
							await this.$_computePosition(),
							await this.$_applyShowEffect(),
							this.positioningDisabled ||
								this.$_registerEventListeners(
									[...cs(this.$_referenceNode), ...cs(this.$_popperNode)],
									'scroll',
									() => {
										this.$_computePosition()
									}
								))
				},
				async $_applyShowEffect() {
					if (this.$_hideInProgress) return
					if (this.computeTransformOrigin) {
						const t = this.$_referenceNode.getBoundingClientRect(),
							n = this.$_popperNode.querySelector('.v-popper__wrapper'),
							o = n.parentNode.getBoundingClientRect(),
							r = t.x + t.width / 2 - (o.left + n.offsetLeft),
							i = t.y + t.height / 2 - (o.top + n.offsetTop)
						this.result.transformOrigin = `${r}px ${i}px`
					}
					;(this.isShown = !0),
						this.$_applyAttrsToTarget({
							'aria-describedby': this.popperId,
							'data-popper-shown': '',
						})
					const e = this.showGroup
					if (e) {
						let t
						for (let n = 0; n < Nt.length; n++)
							(t = Nt[n]), t.showGroup !== e && (t.hide(), t.$emit('close-group'))
					}
					Nt.push(this), document.body.classList.add('v-popper--some-open')
					for (const t of td(this.theme))
						sd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`)
					this.$emit('apply-show'),
						(this.classes.showFrom = !0),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !1),
						await la(),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !0),
						this.noAutoFocus || this.$_popperNode.focus()
				},
				async $_applyHide(e = !1) {
					if (this.shownChildren.size > 0) {
						;(this.pendingHide = !0), (this.$_hideInProgress = !1)
						return
					}
					if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return
					;(this.skipTransition = e),
						rd(Nt, this),
						Nt.length === 0 && document.body.classList.remove('v-popper--some-open')
					for (const n of td(this.theme)) {
						const o = sd(n)
						rd(o, this),
							o.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
					}
					co === this && (co = null),
						(this.isShown = !1),
						this.$_applyAttrsToTarget({ 'aria-describedby': void 0, 'data-popper-shown': void 0 }),
						clearTimeout(this.$_disposeTimer)
					const t = this.disposeTimeout
					t !== null &&
						(this.$_disposeTimer = setTimeout(() => {
							this.$_popperNode && (this.$_detachPopperNode(), (this.isMounted = !1))
						}, t)),
						this.$_removeEventListeners('scroll'),
						this.$emit('apply-hide'),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !0),
						(this.classes.hideTo = !1),
						await la(),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !0)
				},
				$_autoShowHide() {
					this.shown ? this.show() : this.hide()
				},
				$_ensureTeleport() {
					if (this.isDisposed) return
					let e = this.container
					if (
						(typeof e == 'string'
							? (e = window.document.querySelector(e))
							: e === !1 && (e = this.$_targetNodes[0].parentNode),
						!e)
					)
						throw new Error('No container for popover: ' + this.container)
					e.appendChild(this.$_popperNode), (this.isMounted = !0)
				},
				$_addEventListeners() {
					const e = (n) => {
						;(this.isShown && !this.$_hideInProgress) ||
							((n.usedByTooltip = !0), !this.$_preventShow && this.show({ event: n }))
					}
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						nd,
						this.triggers,
						this.showTriggers,
						e
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							nd,
							this.popperTriggers,
							this.popperShowTriggers,
							e
						)
					const t = (n) => {
						n.usedByTooltip || this.hide({ event: n })
					}
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						od,
						this.triggers,
						this.hideTriggers,
						t
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							od,
							this.popperTriggers,
							this.popperHideTriggers,
							t
						)
				},
				$_registerEventListeners(e, t, n) {
					this.$_events.push({ targetNodes: e, eventType: t, handler: n }),
						e.forEach((o) => o.addEventListener(t, n, Zo ? { passive: !0 } : void 0))
				},
				$_registerTriggerListeners(e, t, n, o, r) {
					let i = n
					o != null && (i = typeof o == 'function' ? o(i) : o),
						i.forEach((s) => {
							const a = t[s]
							a && this.$_registerEventListeners(e, a, r)
						})
				},
				$_removeEventListeners(e) {
					const t = []
					this.$_events.forEach((n) => {
						const { targetNodes: o, eventType: r, handler: i } = n
						!e || e === r ? o.forEach((s) => s.removeEventListener(r, i)) : t.push(n)
					}),
						(this.$_events = t)
				},
				$_refreshListeners() {
					this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners())
				},
				$_handleGlobalClose(e, t = !1) {
					this.$_showFrameLocked ||
						(this.hide({ event: e }),
						e.closePopover ? this.$emit('close-directive') : this.$emit('auto-hide'),
						t &&
							((this.$_preventShow = !0),
							setTimeout(() => {
								this.$_preventShow = !1
							}, 300)))
				},
				$_detachPopperNode() {
					this.$_popperNode.parentNode &&
						this.$_popperNode.parentNode.removeChild(this.$_popperNode)
				},
				$_swapTargetAttrs(e, t) {
					for (const n of this.$_targetNodes) {
						const o = n.getAttribute(e)
						o && (n.removeAttribute(e), n.setAttribute(t, o))
					}
				},
				$_applyAttrsToTarget(e) {
					for (const t of this.$_targetNodes)
						for (const n in e) {
							const o = e[n]
							o == null ? t.removeAttribute(n) : t.setAttribute(n, o)
						}
				},
				$_updateParentShownChildren(e) {
					let t = this.parentPopper
					for (; t; )
						e
							? t.shownChildren.add(this.randomId)
							: (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()),
							(t = t.parentPopper)
				},
				$_isAimingPopper() {
					const e = this.$_referenceNode.getBoundingClientRect()
					if (Rr >= e.left && Rr <= e.right && Dr >= e.top && Dr <= e.bottom) {
						const t = this.$_popperNode.getBoundingClientRect(),
							n = Rr - zn,
							o = Dr - qn,
							r = t.left + t.width / 2 - zn + (t.top + t.height / 2) - qn + t.width + t.height,
							i = zn + n * r,
							s = qn + o * r
						return (
							Ai(zn, qn, i, s, t.left, t.top, t.left, t.bottom) ||
							Ai(zn, qn, i, s, t.left, t.top, t.right, t.top) ||
							Ai(zn, qn, i, s, t.right, t.top, t.right, t.bottom) ||
							Ai(zn, qn, i, s, t.left, t.bottom, t.right, t.bottom)
						)
					}
					return !1
				},
			},
			render() {
				return this.$slots.default(this.slotData)
			},
		})
if (typeof document < 'u' && typeof window < 'u') {
	if (fm) {
		const e = Zo ? { passive: !0, capture: !0 } : !0
		document.addEventListener('touchstart', (t) => ad(t, !0), e),
			document.addEventListener('touchend', (t) => ld(t, !0), e)
	} else
		window.addEventListener('mousedown', (e) => ad(e, !1), !0),
			window.addEventListener('click', (e) => ld(e, !1), !0)
	window.addEventListener('resize', vm)
}
function ad(e, t) {
	if (Ut.autoHideOnMousedown) mm(e, t)
	else
		for (let n = 0; n < Nt.length; n++) {
			const o = Nt[n]
			try {
				o.mouseDownContains = o.popperNode().contains(e.target)
			} catch {}
		}
}
function ld(e, t) {
	Ut.autoHideOnMousedown || mm(e, t)
}
function mm(e, t) {
	const n = {}
	for (let o = Nt.length - 1; o >= 0; o--) {
		const r = Nt[o]
		try {
			const i = (r.containsGlobalTarget = r.mouseDownContains || r.popperNode().contains(e.target))
			;(r.pendingHide = !1),
				requestAnimationFrame(() => {
					if (((r.pendingHide = !1), !n[r.randomId] && cd(r, i, e))) {
						if ((r.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i)) {
							let a = r.parentPopper
							for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper)
							return
						}
						let s = r.parentPopper
						for (; s && cd(s, s.containsGlobalTarget, e); )
							s.$_handleGlobalClose(e, t), (s = s.parentPopper)
					}
				})
		} catch {}
	}
}
function cd(e, t, n) {
	return n.closeAllPopover || (n.closePopover && t) || ($2(e, n) && !t)
}
function $2(e, t) {
	if (typeof e.autoHide == 'function') {
		const n = e.autoHide(t)
		return (e.lastAutoHide = n), n
	}
	return e.autoHide
}
function vm() {
	for (let e = 0; e < Nt.length; e++) Nt[e].$_computePosition()
}
let zn = 0,
	qn = 0,
	Rr = 0,
	Dr = 0
typeof window < 'u' &&
	window.addEventListener(
		'mousemove',
		(e) => {
			;(zn = Rr), (qn = Dr), (Rr = e.clientX), (Dr = e.clientY)
		},
		Zo ? { passive: !0 } : void 0
	)
function Ai(e, t, n, o, r, i, s, a) {
	const l = ((s - r) * (t - i) - (a - i) * (e - r)) / ((a - i) * (n - e) - (s - r) * (o - t)),
		c = ((n - e) * (t - i) - (o - t) * (e - r)) / ((a - i) * (n - e) - (s - r) * (o - t))
	return l >= 0 && l <= 1 && c >= 0 && c <= 1
}
const I2 = { extends: hm() },
	Vs = (e, t) => {
		const n = e.__vccOpts || e
		for (const [o, r] of t) n[o] = r
		return n
	}
function R2(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ ref: 'reference', class: J(['v-popper', { 'v-popper--shown': e.slotData.isShown }]) },
			[C(e.$slots, 'default', Ef(Dl(e.slotData)))],
			2
		)
	)
}
const D2 = Vs(I2, [['render', R2]])
function M2() {
	var e = window.navigator.userAgent,
		t = e.indexOf('MSIE ')
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10)
	var n = e.indexOf('Trident/')
	if (n > 0) {
		var o = e.indexOf('rv:')
		return parseInt(e.substring(o + 3, e.indexOf('.', o)), 10)
	}
	var r = e.indexOf('Edge/')
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf('.', r)), 10) : -1
}
let Hi
function Za() {
	Za.init || ((Za.init = !0), (Hi = M2() !== -1))
}
var $s = {
	name: 'ResizeObserver',
	props: {
		emitOnMount: { type: Boolean, default: !1 },
		ignoreWidth: { type: Boolean, default: !1 },
		ignoreHeight: { type: Boolean, default: !1 },
	},
	emits: ['notify'],
	mounted() {
		Za(),
			ht(() => {
				;(this._w = this.$el.offsetWidth),
					(this._h = this.$el.offsetHeight),
					this.emitOnMount && this.emitSize()
			})
		const e = document.createElement('object')
		;(this._resizeObject = e),
			e.setAttribute('aria-hidden', 'true'),
			e.setAttribute('tabindex', -1),
			(e.onload = this.addResizeHandlers),
			(e.type = 'text/html'),
			Hi && this.$el.appendChild(e),
			(e.data = 'about:blank'),
			Hi || this.$el.appendChild(e)
	},
	beforeUnmount() {
		this.removeResizeHandlers()
	},
	methods: {
		compareAndNotify() {
			;((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
				(!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
				((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.emitSize())
		},
		emitSize() {
			this.$emit('notify', { width: this._w, height: this._h })
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener(
				'resize',
				this.compareAndNotify
			),
				this.compareAndNotify()
		},
		removeResizeHandlers() {
			this._resizeObject &&
				this._resizeObject.onload &&
				(!Hi &&
					this._resizeObject.contentDocument &&
					this._resizeObject.contentDocument.defaultView.removeEventListener(
						'resize',
						this.compareAndNotify
					),
				this.$el.removeChild(this._resizeObject),
				(this._resizeObject.onload = null),
				(this._resizeObject = null))
		},
	},
}
const N2 = Zg()
Jg('data-v-b329ee4c')
const F2 = { class: 'resize-observer', tabindex: '-1' }
Xg()
const j2 = N2((e, t, n, o, r, i) => (h(), N('div', F2)))
$s.render = j2
$s.__scopeId = 'data-v-b329ee4c'
$s.__file = 'src/components/ResizeObserver.vue'
const gm = (e = 'theme') => ({
		computed: {
			themeClass() {
				return V2(this[e])
			},
		},
	}),
	H2 = $({
		name: 'VPopperContent',
		components: { ResizeObserver: $s },
		mixins: [gm()],
		props: {
			popperId: String,
			theme: String,
			shown: Boolean,
			mounted: Boolean,
			skipTransition: Boolean,
			autoHide: Boolean,
			handleResize: Boolean,
			classes: Object,
			result: Object,
		},
		emits: ['hide', 'resize'],
		methods: {
			toPx(e) {
				return e != null && !isNaN(e) ? `${e}px` : null
			},
		},
	}),
	z2 = ['id', 'aria-hidden', 'tabindex', 'data-popper-placement'],
	q2 = { ref: 'inner', class: 'v-popper__inner' },
	U2 = g('div', { class: 'v-popper__arrow-outer' }, null, -1),
	W2 = g('div', { class: 'v-popper__arrow-inner' }, null, -1),
	G2 = [U2, W2]
function K2(e, t, n, o, r, i) {
	const s = Re('ResizeObserver')
	return (
		h(),
		_(
			'div',
			{
				id: e.popperId,
				ref: 'popover',
				class: J([
					'v-popper__popper',
					[
						e.themeClass,
						e.classes.popperClass,
						{
							'v-popper__popper--shown': e.shown,
							'v-popper__popper--hidden': !e.shown,
							'v-popper__popper--show-from': e.classes.showFrom,
							'v-popper__popper--show-to': e.classes.showTo,
							'v-popper__popper--hide-from': e.classes.hideFrom,
							'v-popper__popper--hide-to': e.classes.hideTo,
							'v-popper__popper--skip-transition': e.skipTransition,
							'v-popper__popper--arrow-overflow': e.result && e.result.arrow.overflow,
							'v-popper__popper--no-positioning': !e.result,
						},
					],
				]),
				style: xe(
					e.result
						? {
								position: e.result.strategy,
								transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`,
						  }
						: void 0
				),
				'aria-hidden': e.shown ? 'false' : 'true',
				tabindex: e.autoHide ? 0 : void 0,
				'data-popper-placement': e.result ? e.result.placement : void 0,
				onKeyup: t[2] || (t[2] = Nl((a) => e.autoHide && e.$emit('hide'), ['esc'])),
			},
			[
				g('div', {
					class: 'v-popper__backdrop',
					onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit('hide')),
				}),
				g(
					'div',
					{
						class: 'v-popper__wrapper',
						style: xe(e.result ? { transformOrigin: e.result.transformOrigin } : void 0),
					},
					[
						g(
							'div',
							q2,
							[
								e.mounted
									? (h(),
									  _(
											K,
											{ key: 0 },
											[
												g('div', null, [C(e.$slots, 'default')]),
												e.handleResize
													? (h(),
													  N(s, {
															key: 0,
															onNotify: t[1] || (t[1] = (a) => e.$emit('resize', a)),
													  }))
													: A('', !0),
											],
											64
									  ))
									: A('', !0),
							],
							512
						),
						g(
							'div',
							{
								ref: 'arrow',
								class: 'v-popper__arrow-container',
								style: xe(
									e.result
										? { left: e.toPx(e.result.arrow.x), top: e.toPx(e.result.arrow.y) }
										: void 0
								),
							},
							G2,
							4
						),
					],
					4
				),
			],
			46,
			z2
		)
	)
}
const _m = Vs(H2, [['render', K2]]),
	bm = {
		methods: {
			show(...e) {
				return this.$refs.popper.show(...e)
			},
			hide(...e) {
				return this.$refs.popper.hide(...e)
			},
			dispose(...e) {
				return this.$refs.popper.dispose(...e)
			},
			onResize(...e) {
				return this.$refs.popper.onResize(...e)
			},
		},
	}
let el = function () {}
typeof window < 'u' && (el = window.Element)
const Y2 = $({
	name: 'VPopperWrapper',
	components: { Popper: D2, PopperContent: _m },
	mixins: [bm, gm('finalTheme')],
	props: {
		theme: { type: String, default: null },
		referenceNode: { type: Function, default: null },
		shown: { type: Boolean, default: !1 },
		showGroup: { type: String, default: null },
		ariaId: { default: null },
		disabled: { type: Boolean, default: void 0 },
		positioningDisabled: { type: Boolean, default: void 0 },
		placement: { type: String, default: void 0 },
		delay: { type: [String, Number, Object], default: void 0 },
		distance: { type: [Number, String], default: void 0 },
		skidding: { type: [Number, String], default: void 0 },
		triggers: { type: Array, default: void 0 },
		showTriggers: { type: [Array, Function], default: void 0 },
		hideTriggers: { type: [Array, Function], default: void 0 },
		popperTriggers: { type: Array, default: void 0 },
		popperShowTriggers: { type: [Array, Function], default: void 0 },
		popperHideTriggers: { type: [Array, Function], default: void 0 },
		container: { type: [String, Object, el, Boolean], default: void 0 },
		boundary: { type: [String, el], default: void 0 },
		strategy: { type: String, default: void 0 },
		autoHide: { type: [Boolean, Function], default: void 0 },
		handleResize: { type: Boolean, default: void 0 },
		instantMove: { type: Boolean, default: void 0 },
		eagerMount: { type: Boolean, default: void 0 },
		popperClass: { type: [String, Array, Object], default: void 0 },
		computeTransformOrigin: { type: Boolean, default: void 0 },
		autoMinSize: { type: Boolean, default: void 0 },
		autoSize: { type: [Boolean, String], default: void 0 },
		autoMaxSize: { type: Boolean, default: void 0 },
		autoBoundaryMaxSize: { type: Boolean, default: void 0 },
		preventOverflow: { type: Boolean, default: void 0 },
		overflowPadding: { type: [Number, String], default: void 0 },
		arrowPadding: { type: [Number, String], default: void 0 },
		arrowOverflow: { type: Boolean, default: void 0 },
		flip: { type: Boolean, default: void 0 },
		shift: { type: Boolean, default: void 0 },
		shiftCrossAxis: { type: Boolean, default: void 0 },
		noAutoFocus: { type: Boolean, default: void 0 },
		disposeTimeout: { type: Number, default: void 0 },
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		'update:shown': (e) => !0,
		'apply-show': () => !0,
		'apply-hide': () => !0,
		'close-group': () => !0,
		'close-directive': () => !0,
		'auto-hide': () => !0,
		resize: () => !0,
	},
	computed: {
		finalTheme() {
			return this.theme ?? this.$options.vPopperTheme
		},
	},
	methods: {
		getTargetNodes() {
			return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el)
		},
	},
})
function Q2(e, t, n, o, r, i) {
	const s = Re('PopperContent'),
		a = Re('Popper')
	return (
		h(),
		N(
			a,
			zt({ ref: 'popper' }, e.$props, {
				theme: e.finalTheme,
				'target-nodes': e.getTargetNodes,
				'popper-node': () => e.$refs.popperContent.$el,
				class: [e.themeClass],
				onShow: t[0] || (t[0] = () => e.$emit('show')),
				onHide: t[1] || (t[1] = () => e.$emit('hide')),
				'onUpdate:shown': t[2] || (t[2] = (l) => e.$emit('update:shown', l)),
				onApplyShow: t[3] || (t[3] = () => e.$emit('apply-show')),
				onApplyHide: t[4] || (t[4] = () => e.$emit('apply-hide')),
				onCloseGroup: t[5] || (t[5] = () => e.$emit('close-group')),
				onCloseDirective: t[6] || (t[6] = () => e.$emit('close-directive')),
				onAutoHide: t[7] || (t[7] = () => e.$emit('auto-hide')),
				onResize: t[8] || (t[8] = () => e.$emit('resize')),
			}),
			{
				default: T(
					({
						popperId: l,
						isShown: c,
						shouldMountContent: u,
						skipTransition: d,
						autoHide: f,
						show: p,
						hide: m,
						handleResize: v,
						onResize: b,
						classes: w,
						result: P,
					}) => [
						C(e.$slots, 'default', { shown: c, show: p, hide: m }),
						O(
							s,
							{
								ref: 'popperContent',
								'popper-id': l,
								theme: e.finalTheme,
								shown: c,
								mounted: u,
								'skip-transition': d,
								'auto-hide': f,
								'handle-resize': v,
								classes: w,
								result: P,
								onHide: m,
								onResize: b,
							},
							{ default: T(() => [C(e.$slots, 'popper', { shown: c, hide: m })]), _: 2 },
							1032,
							[
								'popper-id',
								'theme',
								'shown',
								'mounted',
								'skip-transition',
								'auto-hide',
								'handle-resize',
								'classes',
								'result',
								'onHide',
								'onResize',
							]
						),
					]
				),
				_: 3,
			},
			16,
			['theme', 'target-nodes', 'popper-node', 'class']
		)
	)
}
const Zl = Vs(Y2, [['render', Q2]]),
	J2 = { ...Zl, name: 'VDropdown', vPopperTheme: 'dropdown' },
	X2 = { ...Zl, name: 'VMenu', vPopperTheme: 'menu' },
	Z2 = { ...Zl, name: 'VTooltip', vPopperTheme: 'tooltip' },
	e3 = $({
		name: 'VTooltipDirective',
		components: { Popper: hm(), PopperContent: _m },
		mixins: [bm],
		inheritAttrs: !1,
		props: {
			theme: { type: String, default: 'tooltip' },
			html: { type: Boolean, default: (e) => Jr(e.theme, 'html') },
			content: { type: [String, Number, Function], default: null },
			loadingContent: { type: String, default: (e) => Jr(e.theme, 'loadingContent') },
			targetNodes: { type: Function, required: !0 },
		},
		data() {
			return { asyncContent: null }
		},
		computed: {
			isContentAsync() {
				return typeof this.content == 'function'
			},
			loading() {
				return this.isContentAsync && this.asyncContent == null
			},
			finalContent() {
				return this.isContentAsync
					? this.loading
						? this.loadingContent
						: this.asyncContent
					: this.content
			},
		},
		watch: {
			content: {
				handler() {
					this.fetchContent(!0)
				},
				immediate: !0,
			},
			async finalContent() {
				await this.$nextTick(), this.$refs.popper.onResize()
			},
		},
		created() {
			this.$_fetchId = 0
		},
		methods: {
			fetchContent(e) {
				if (
					typeof this.content == 'function' &&
					this.$_isShown &&
					(e || (!this.$_loading && this.asyncContent == null))
				) {
					;(this.asyncContent = null), (this.$_loading = !0)
					const t = ++this.$_fetchId,
						n = this.content(this)
					n.then ? n.then((o) => this.onResult(t, o)) : this.onResult(t, n)
				}
			},
			onResult(e, t) {
				e === this.$_fetchId && ((this.$_loading = !1), (this.asyncContent = t))
			},
			onShow() {
				;(this.$_isShown = !0), this.fetchContent()
			},
			onHide() {
				this.$_isShown = !1
			},
		},
	}),
	t3 = ['innerHTML'],
	n3 = ['textContent']
function o3(e, t, n, o, r, i) {
	const s = Re('PopperContent'),
		a = Re('Popper')
	return (
		h(),
		N(
			a,
			zt({ ref: 'popper' }, e.$attrs, {
				theme: e.theme,
				'target-nodes': e.targetNodes,
				'popper-node': () => e.$refs.popperContent.$el,
				onApplyShow: e.onShow,
				onApplyHide: e.onHide,
			}),
			{
				default: T(
					({
						popperId: l,
						isShown: c,
						shouldMountContent: u,
						skipTransition: d,
						autoHide: f,
						hide: p,
						handleResize: m,
						onResize: v,
						classes: b,
						result: w,
					}) => [
						O(
							s,
							{
								ref: 'popperContent',
								class: J({ 'v-popper--tooltip-loading': e.loading }),
								'popper-id': l,
								theme: e.theme,
								shown: c,
								mounted: u,
								'skip-transition': d,
								'auto-hide': f,
								'handle-resize': m,
								classes: b,
								result: w,
								onHide: p,
								onResize: v,
							},
							{
								default: T(() => [
									e.html
										? (h(), _('div', { key: 0, innerHTML: e.finalContent }, null, 8, t3))
										: (h(), _('div', { key: 1, textContent: D(e.finalContent) }, null, 8, n3)),
								]),
								_: 2,
							},
							1032,
							[
								'class',
								'popper-id',
								'theme',
								'shown',
								'mounted',
								'skip-transition',
								'auto-hide',
								'handle-resize',
								'classes',
								'result',
								'onHide',
								'onResize',
							]
						),
					]
				),
				_: 1,
			},
			16,
			['theme', 'target-nodes', 'popper-node', 'onApplyShow', 'onApplyHide']
		)
	)
}
const r3 = Vs(e3, [['render', o3]]),
	ym = 'v-popper--has-tooltip'
function i3(e, t) {
	let n = e.placement
	if (!n && t) for (const o of pm) t[o] && (n = o)
	return n || (n = Jr(e.theme || 'tooltip', 'placement')), n
}
function wm(e, t, n) {
	let o
	const r = typeof t
	return (
		r === 'string' ? (o = { content: t }) : t && r === 'object' ? (o = t) : (o = { content: !1 }),
		(o.placement = i3(o, n)),
		(o.targetNodes = () => [e]),
		(o.referenceNode = () => e),
		o
	)
}
let ua,
	Xr,
	s3 = 0
function a3() {
	if (ua) return
	;(Xr = R([])),
		(ua = D_({
			name: 'VTooltipDirectiveApp',
			setup() {
				return { directives: Xr }
			},
			render() {
				return this.directives.map((t) =>
					ce(r3, { ...t.options, shown: t.shown || t.options.shown, key: t.id })
				)
			},
			devtools: { hide: !0 },
		}))
	const e = document.createElement('div')
	document.body.appendChild(e), ua.mount(e)
}
function l3(e, t, n) {
	a3()
	const o = R(wm(e, t, n)),
		r = R(!1),
		i = { id: s3++, options: o, shown: r }
	return (
		Xr.value.push(i),
		e.classList && e.classList.add(ym),
		(e.$_popper = {
			options: o,
			item: i,
			show() {
				r.value = !0
			},
			hide() {
				r.value = !1
			},
		})
	)
}
function km(e) {
	if (e.$_popper) {
		const t = Xr.value.indexOf(e.$_popper.item)
		t !== -1 && Xr.value.splice(t, 1),
			delete e.$_popper,
			delete e.$_popperOldShown,
			delete e.$_popperMountTarget
	}
	e.classList && e.classList.remove(ym)
}
function ud(e, { value: t, modifiers: n }) {
	const o = wm(e, t, n)
	if (!o.content || Jr(o.theme || 'tooltip', 'disabled')) km(e)
	else {
		let r
		e.$_popper ? ((r = e.$_popper), (r.options.value = o)) : (r = l3(e, t, n)),
			typeof t.shown < 'u' &&
				t.shown !== e.$_popperOldShown &&
				((e.$_popperOldShown = t.shown), t.shown ? r.show() : r.hide())
	}
}
const c3 = {
	beforeMount: ud,
	updated: ud,
	beforeUnmount(e) {
		km(e)
	},
}
function dd(e) {
	e.addEventListener('mousedown', us),
		e.addEventListener('click', us),
		e.addEventListener('touchstart', Em, Zo ? { passive: !0 } : !1)
}
function fd(e) {
	e.removeEventListener('mousedown', us),
		e.removeEventListener('click', us),
		e.removeEventListener('touchstart', Em),
		e.removeEventListener('touchend', xm),
		e.removeEventListener('touchcancel', Pm)
}
function us(e) {
	const t = e.currentTarget
	;(e.closePopover = !t.$_vclosepopover_touch),
		(e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all)
}
function Em(e) {
	if (e.changedTouches.length === 1) {
		const t = e.currentTarget
		t.$_vclosepopover_touch = !0
		const n = e.changedTouches[0]
		;(t.$_vclosepopover_touchPoint = n),
			t.addEventListener('touchend', xm),
			t.addEventListener('touchcancel', Pm)
	}
}
function xm(e) {
	const t = e.currentTarget
	if (((t.$_vclosepopover_touch = !1), e.changedTouches.length === 1)) {
		const n = e.changedTouches[0],
			o = t.$_vclosepopover_touchPoint
		;(e.closePopover =
			Math.abs(n.screenY - o.screenY) < 20 && Math.abs(n.screenX - o.screenX) < 20),
			(e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all)
	}
}
function Pm(e) {
	const t = e.currentTarget
	t.$_vclosepopover_touch = !1
}
const u3 = {
	beforeMount(e, { value: t, modifiers: n }) {
		;(e.$_closePopoverModifiers = n), (typeof t > 'u' || t) && dd(e)
	},
	updated(e, { value: t, oldValue: n, modifiers: o }) {
		;(e.$_closePopoverModifiers = o), t !== n && (typeof t > 'u' || t ? dd(e) : fd(e))
	},
	beforeUnmount(e) {
		fd(e)
	},
}
function d3(e, t = {}) {
	e.$_vTooltipInstalled ||
		((e.$_vTooltipInstalled = !0),
		dm(Ut, t),
		e.directive('tooltip', c3),
		e.directive('close-popper', u3),
		e.component('VTooltip', Z2),
		e.component('VDropdown', J2),
		e.component('VMenu', X2))
}
const f3 = { version: '5.2.2', install: d3, options: Ut }
var pd =
	typeof navigator < 'u' &&
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
function p3(e) {
	typeof window < 'u' &&
		window.addEventListener(
			'click',
			(t) => {
				t.composedPath().some((o) => {
					var r, i, s, a
					return (
						((i = (r = o == null ? void 0 : o.classList) == null ? void 0 : r.contains) == null
							? void 0
							: i.call(r, 'vp-code-group')) ||
						((a = (s = o == null ? void 0 : o.classList) == null ? void 0 : s.contains) == null
							? void 0
							: a.call(s, 'tabs'))
					)
				}) && vm()
			},
			{ passive: !0 }
		),
		e.use(f3, {
			themes: {
				twoslash: {
					$extend: 'dropdown',
					triggers: pd ? ['touch'] : ['hover', 'touch'],
					popperTriggers: pd ? ['touch'] : ['hover', 'touch'],
					placement: 'bottom-start',
					overflowPadding: 10,
					delay: 0,
					handleResize: !1,
					autoHide: !0,
					instantMove: !0,
					flip: !1,
					arrowPadding: 8,
					autoBoundaryMaxSize: !0,
				},
				'twoslash-query': {
					$extend: 'twoslash',
					triggers: ['click'],
					popperTriggers: ['click'],
					autoHide: !1,
				},
				'twoslash-completion': {
					$extend: 'twoslash-query',
					triggers: ['click'],
					popperTriggers: ['click'],
					autoHide: !1,
					distance: 0,
					arrowOverflow: !0,
				},
			},
		})
}
var h3 = /language-(?:shellscript|shell|bash|sh|zsh)/,
	m3 = ['.vp-copy-ignore', '.diff.remove']
function v3({ selector: e = 'div[class*="language-"] > button.copy', duration: t = 2e3 } = {}) {
	const n = new WeakMap(),
		{ copy: o } = Gb({ legacy: !0 })
	Fe('click', (r) => {
		const i = r.target
		if (i.matches(e)) {
			const s = i.parentElement,
				a = i.nextElementSibling
			if (!s || !a) return
			const l = h3.test(s.className),
				c = a.cloneNode(!0)
			c.querySelectorAll(m3.join(',')).forEach((d) => d.remove())
			let u = c.textContent || ''
			l && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
				o(u).then(() => {
					if (t <= 0) return
					i.classList.add('copied'), clearTimeout(n.get(i))
					const d = setTimeout(() => {
						i.classList.remove('copied'), i.blur(), n.delete(i)
					}, t)
					n.set(i, d)
				})
		}
	})
}
function g3({ selector: e = 'div[class*="language-"] > .collapsed-lines' } = {}) {
	Fe('click', (t) => {
		const n = t.target
		if (n.matches(e)) {
			const o = n.parentElement
			o != null &&
				o.classList.toggle('collapsed') &&
				o.scrollIntoView({ block: 'center', behavior: 'instant' })
		}
	})
}
const _3 = {
		enhance({ app: e }) {
			p3(e)
		},
		setup() {
			v3({ selector: 'div[class*="language-"] > button.copy', duration: 2e3 }), g3()
		},
	},
	b3 = Object.freeze(
		Object.defineProperty({ __proto__: null, default: _3 }, Symbol.toStringTag, { value: 'Module' })
	),
	y3 = Object.freeze(
		Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })
	),
	ds = () => {
		const e = document.documentElement
		return e.classList.contains('dark') || e.getAttribute('data-theme') === 'dark'
	},
	w3 = (e, t) =>
		t === 'json'
			? JSON.parse(e)
			: new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)()
var k3 = $({
	name: 'ChartJS',
	props: {
		config: { type: String, required: !0 },
		id: { type: String, required: !0 },
		title: { type: String, default: '' },
		type: { type: String, default: 'json' },
	},
	setup(e) {
		const t = Ie(),
			n = Ie(),
			o = R(!1),
			r = R(!0),
			i = E(() => wo(e.config))
		let s = !1,
			a
		const l = async (c) => {
			const [{ default: u }] = await Promise.all([
				L(() => import('./auto-B3LeIVTm.js'), []),
				s ? Promise.resolve() : ((s = !0), cr(800)),
			])
			;(u.defaults.borderColor = c ? '#ccc' : '#36A2EB'),
				(u.defaults.color = c ? '#fff' : '#000'),
				(u.defaults.maintainAspectRatio = !1)
			const d = w3(i.value, e.type),
				f = n.value.getContext('2d')
			a == null || a.destroy(), (a = new u(f, d)), (r.value = !1)
		}
		return (
			ke(() => {
				;(o.value = ds()),
					Gl(
						document.documentElement,
						() => {
							o.value = ds()
						},
						{ attributeFilter: ['class', 'data-theme'], attributes: !0 }
					),
					ve(o, (c) => l(c), { immediate: !0 })
			}),
			gt(() => {
				a == null || a.destroy(), (a = null)
			}),
			() => [
				e.title ? ce('div', { class: 'chartjs-title' }, decodeURIComponent(e.title)) : null,
				r.value ? ce(xo, { class: 'chartjs-loading', height: 192 }) : null,
				ce(
					'div',
					{
						ref: t,
						class: 'chartjs-wrapper',
						id: e.id,
						style: { display: r.value ? 'none' : 'block' },
					},
					ce('canvas', { ref: n, height: 400 })
				),
			]
		)
	},
})
const E3 =
		'<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',
	x3 =
		'<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>'
var P3 = {
	useBabel: !1,
	jsLib: [],
	cssLib: [],
	codepenLayout: 'left',
	codepenEditors: '101',
	babel: 'https://unpkg.com/@babel/standalone/babel.min.js',
	vue: 'https://unpkg.com/vue/dist/vue.global.prod.js',
	react: 'https://unpkg.com/react/umd/react.production.min.js',
	reactDOM: 'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
}
const da = P3,
	hd = {
		html: {
			types: ['html', 'slim', 'haml', 'md', 'markdown', 'vue'],
			map: { html: 'none', vue: 'none', md: 'markdown' },
		},
		js: {
			types: ['js', 'javascript', 'coffee', 'coffeescript', 'ts', 'typescript', 'ls', 'livescript'],
			map: {
				js: 'none',
				javascript: 'none',
				coffee: 'coffeescript',
				ls: 'livescript',
				ts: 'typescript',
			},
		},
		css: {
			types: ['css', 'less', 'sass', 'scss', 'stylus', 'styl'],
			map: { css: 'none', styl: 'stylus' },
		},
	},
	S3 = (e, t, n) => {
		const o = document.createElement(e)
		return (
			Kt(t) &&
				Jh(t).forEach((r) => {
					if (r.indexOf('data')) o[r] = t[r]
					else {
						const i = r.replace('data', '')
						o.dataset[i] = t[r]
					}
				}),
			o
		)
	},
	ec = (e) => ({
		...da,
		...e,
		jsLib: Array.from(new Set([da.jsLib, e.jsLib ?? []].flat())),
		cssLib: Array.from(new Set([da.cssLib, e.cssLib ?? []].flat())),
	}),
	Uo = (e, t) => {
		if (Qh(e[t])) return e[t]
		const n = new Promise((o) => {
			var i
			const r = document.createElement('script')
			;(r.src = t),
				(i = document.querySelector('body')) == null || i.appendChild(r),
				(r.onload = () => {
					o()
				})
		})
		return (e[t] = n), n
	},
	C3 = (e, t) => {
		if (t.css && Array.from(e.childNodes).every((n) => n.nodeName !== 'STYLE')) {
			const n = S3('style', { innerHTML: t.css })
			e.appendChild(n)
		}
	},
	T3 = (e, t, n) => {
		const o = n.getScript()
		if (o && Array.from(t.childNodes).every((r) => r.nodeName !== 'SCRIPT')) {
			const r = document.createElement('script')
			r.appendChild(
				document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${o}}`)
			),
				t.appendChild(r)
		}
	},
	A3 = ['html', 'js', 'css'],
	L3 = (e) => {
		const t = Jh(e),
			n = { html: [], js: [], css: [], isLegal: !1 }
		return (
			A3.forEach((o) => {
				const r = t.filter((i) => hd[o].types.includes(i))
				if (r.length) {
					const i = r[0]
					n[o] = [e[i].replace(/^\n|\n$/g, ''), hd[o].map[i] ?? i]
				}
			}),
			(n.isLegal =
				(!n.html.length || n.html[1] === 'none') &&
				(!n.js.length || n.js[1] === 'none') &&
				(!n.css.length || n.css[1] === 'none')),
			n
		)
	},
	Sm = (e) => e.replace(/<br \/>/g, '<br>').replace(/<((\S+)[^<]*?)\s+\/>/g, '<$1></$2>'),
	Cm = (e) => `<div id="app">
${Sm(e)}
</div>`,
	B3 = (e) => `${e
		.replace('export default ', 'const $reactApp = ')
		.replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '')};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,
	O3 = (e) =>
		e
			.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')")
			.replace(
				/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,
				"Vue.createApp({$1}).mount('#app')"
			)
			.trim(),
	Tm = (e) =>
		`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?exports.default:module.exports;})({})`,
	V3 = (e, t) => {
		const n = ec(t),
			o = e.js[0] ?? ''
		return {
			...n,
			html: Sm(e.html[0] ?? ''),
			js: o,
			css: e.css[0] ?? '',
			isLegal: e.isLegal,
			getScript: () => {
				var r, i
				return n.useBabel
					? ((i = (r = window.Babel) == null ? void 0 : r.transform(o, { presets: ['es2015'] })) ==
					  null
							? void 0
							: i.code) ?? ''
					: o
			},
		}
	},
	$3 = /<template>([\s\S]+)<\/template>/u,
	I3 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,
	R3 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,
	D3 = (e, t) => {
		const n = ec(t),
			o = e.html[0] ?? '',
			r = $3.exec(o),
			i = I3.exec(o),
			s = R3.exec(o),
			a = (r == null ? void 0 : r[1].replace(/^\n|\n$/g, '')) ?? '',
			[l = '', c = ''] = i ? [i[4].replace(/^\n|\n$/g, ''), i[3]] : [],
			[u = '', d = ''] = s ? [s[4].replace(/^\n|\n$/g, ''), s[3]] : [],
			f = c === '' && (d === '' || d === 'css')
		return {
			...n,
			html: Cm(a),
			js: O3(l),
			css: u,
			isLegal: f,
			jsLib: [n.vue, ...n.jsLib],
			getScript: () => {
				var m, v
				const p = t.useBabel
					? ((v = (m = window.Babel) == null ? void 0 : m.transform(l, { presets: ['es2015'] })) ==
					  null
							? void 0
							: v.code) ?? ''
					: l.replace(/export\s+default/u, 'return')
				return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Tm(
					p
				)};appOptions.template=\`${a.replace(
					'`',
					'\\`"'
				)}\`;window.Vue.createApp(appOptions).mount(app);`
			},
		}
	},
	M3 = (e, t) => {
		var r
		const n = ec(t),
			o = e.js[0] ?? ''
		return {
			...n,
			html: Cm(''),
			js: B3(o),
			css:
				e.css[0] ??
				((r = e.js[0]) == null
					? void 0
					: r.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, '$1').trim()) ??
				'',
			isLegal: e.isLegal,
			jsLib: [n.react, n.reactDOM, ...n.jsLib],
			jsx: !0,
			getScript: () => {
				var s, a
				const i =
					((a =
						(s = window.Babel) == null
							? void 0
							: s.transform(o, { presets: ['es2015', 'react'] })) == null
						? void 0
						: a.code) ?? ''
				return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Tm(
					i
				)}))`
			},
		}
	},
	Wo = {},
	N3 = (e) => Promise.all([Uo(Wo, e.babel), Uo(Wo, e.react), Uo(Wo, e.reactDOM)]),
	F3 = (e) => {
		const t = [Uo(Wo, e.vue)]
		return e.useBabel && t.push(Uo(Wo, e.babel)), Promise.all(t)
	},
	j3 = (e) => (e.useBabel ? Uo(Wo, e.babel) : Promise.resolve())
var H3 = $({
		name: 'CodeDemo',
		props: {
			id: { type: String, required: !0 },
			type: { type: String, default: 'normal' },
			title: { type: String, default: '' },
			config: { type: String, default: '' },
			code: { type: String, required: !0 },
		},
		slots: Object,
		setup(e, { slots: t }) {
			const [n, o] = Rh(!1),
				r = Ie(),
				i = Ie(),
				s = R('0'),
				a = R(!1),
				l = E(() => JSON.parse(e.config ? wo(e.config) : '{}')),
				c = E(() => {
					const m = JSON.parse(wo(e.code))
					return L3(m)
				}),
				u = E(() =>
					e.type === 'react'
						? M3(c.value, l.value)
						: e.type === 'vue'
						? D3(c.value, l.value)
						: V3(c.value, l.value)
				),
				d = E(() => u.value.isLegal),
				f = (m = !1) => {
					const v = r.value.attachShadow({ mode: 'open' }),
						b = document.createElement('div')
					b.classList.add('code-demo-app'),
						v.appendChild(b),
						d.value
							? (m && (b.innerHTML = u.value.html),
							  C3(v, u.value),
							  T3(e.id, v, u.value),
							  (s.value = '0'))
							: (s.value = 'auto'),
						(a.value = !0)
				},
				p = () => {
					switch (e.type) {
						case 'react':
							return N3(u.value).then(() => {
								f()
							})
						case 'vue':
							return F3(u.value).then(() => {
								f()
							})
						default:
							return j3(u.value).then(() => {
								f(!0)
							})
					}
				}
			return (
				Fe('beforeprint', () => {
					o(!0)
				}),
				ke(async () => {
					await cr(800), await p()
				}),
				() =>
					ce('div', { class: 'vp-container vp-code-demo', id: e.id }, [
						ce('div', { class: 'vp-container-header' }, [
							u.value.isLegal
								? ce('button', {
										type: 'button',
										title: 'toggle',
										'aria-hidden': !0,
										class: ['vp-code-demo-toggle-button', n.value ? 'down' : 'end'],
										onClick: () => {
											;(s.value = n.value ? '0' : `${i.value.clientHeight + 13.8}px`), o()
										},
								  })
								: null,
							e.title
								? ce('span', { class: 'vp-container-title' }, decodeURIComponent(e.title))
								: null,
							u.value.isLegal && u.value.jsfiddle !== !1
								? ce(
										'form',
										{
											class: 'code-demo-jsfiddle',
											target: '_blank',
											action: 'https://jsfiddle.net/api/post/library/pure/',
											method: 'post',
										},
										[
											ce('input', { type: 'hidden', name: 'html', value: u.value.html }),
											ce('input', { type: 'hidden', name: 'js', value: u.value.js }),
											ce('input', { type: 'hidden', name: 'css', value: u.value.css }),
											ce('input', { type: 'hidden', name: 'wrap', value: '1' }),
											ce('input', { type: 'hidden', name: 'panel_js', value: '3' }),
											ce('input', {
												type: 'hidden',
												name: 'resources',
												value: [...u.value.cssLib, ...u.value.jsLib].join(','),
											}),
											ce('button', {
												type: 'submit',
												class: 'jsfiddle-button',
												innerHTML: x3,
												'aria-label': 'JSFiddle',
												'data-balloon-pos': 'down',
											}),
										]
								  )
								: null,
							!u.value.isLegal || u.value.codepen !== !1
								? ce(
										'form',
										{
											class: 'code-demo-codepen',
											target: '_blank',
											action: 'https://codepen.io/pen/define',
											method: 'post',
										},
										[
											ce('input', {
												type: 'hidden',
												name: 'data',
												value: JSON.stringify({
													html: u.value.html,
													js: u.value.js,
													css: u.value.css,
													js_external: u.value.jsLib.join(';'),
													css_external: u.value.cssLib.join(';'),
													layout: u.value.codepenLayout,
													html_pre_processor: c.value.html[1] ?? 'none',
													js_pre_processor: c.value.js[1] ?? (u.value.jsx ? 'babel' : 'none'),
													css_pre_processor: c.value.css[1] ?? 'none',
													editors: u.value.codepenEditors,
												}),
											}),
											ce('button', {
												type: 'submit',
												innerHTML: E3,
												class: 'codepen-button',
												'aria-label': 'Codepen',
												'data-balloon-pos': 'down',
											}),
										]
								  )
								: null,
						]),
						a.value ? null : ce(xo, { class: 'vp-code-demo-loading' }),
						ce('div', {
							ref: r,
							class: 'vp-code-demo-display',
							style: { display: d.value && a.value ? 'block' : 'none' },
						}),
						ce(
							'div',
							{ class: 'vp-code-demo-code-wrapper', style: { height: s.value } },
							ce('div', { ref: i, class: 'vp-code-demo-codes' }, t.default())
						),
					])
			)
		},
	}),
	z3 = $({
		name: 'MdDemo',
		props: { id: { type: String, required: !0 }, title: { type: String, default: '' } },
		slots: Object,
		setup(e, { slots: t }) {
			const [n, o] = Rh(!1),
				r = Ie(),
				i = R('0')
			return (
				Fe('beforeprint', () => {
					o(!0)
				}),
				() =>
					ce('div', { class: 'vp-container vp-md-demo', id: e.id }, [
						ce('div', { class: 'vp-container-header' }, [
							ce('button', {
								type: 'button',
								title: 'toggle',
								'aria-hidden': !0,
								class: ['vp-md-demo-toggle-button', n.value ? 'down' : 'end'],
								onClick: () => {
									;(i.value = n.value ? '0' : `${r.value.clientHeight + 13.8}px`), o()
								},
							}),
							e.title
								? ce('div', { class: 'vp-container-title' }, decodeURIComponent(e.title))
								: null,
						]),
						ce('div', { class: 'vp-md-demo-display' }, t.default()),
						ce(
							'div',
							{ class: 'vp-md-demo-code-wrapper', style: { height: i.value } },
							ce('div', { ref: r, class: 'vp-md-demo-codes' }, t.code())
						),
					])
			)
		},
	})
let q3 = {}
const U3 = () => q3,
	W3 = (async () => {}).constructor,
	G3 = (e, t, n) =>
		t === 'js'
			? W3(
					'myChart',
					`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`
			  )(n)
			: Promise.resolve({ option: JSON.parse(e) })
var K3 = $({
		name: 'ECharts',
		props: {
			config: { type: String, required: !0 },
			id: { type: String, required: !0 },
			title: { type: String, default: '' },
			type: { type: String, default: 'json' },
		},
		setup(e) {
			const t = U3(),
				n = R(!0),
				o = Ie()
			let r = null
			return (
				Fe(
					'resize',
					As(() => {
						r == null || r.resize()
					}, 100)
				),
				ke(() => {
					Promise.all([L(() => import('./index-AN989yVn.js'), []), cr(800)]).then(async ([i]) => {
						var l
						await ((l = t.setup) == null ? void 0 : l.call(t)), (r = i.init(o.value))
						const { option: s, ...a } = await G3(wo(e.config), e.type, r)
						r.resize(a), r.setOption({ ...t.option, ...s }), (n.value = !1)
					})
				}),
				gt(() => {
					r == null || r.dispose()
				}),
				() => [
					e.title ? ce('div', { class: 'echarts-title' }, decodeURIComponent(e.title)) : null,
					ce('div', { class: 'echarts-wrapper' }, [
						ce('div', { ref: o, class: 'echarts-container', id: e.id }),
						n.value ? ce(xo, { class: 'echarts-loading', height: 360 }) : null,
					]),
				]
			)
		},
	}),
	tc = {
		x: 0,
		y: 0,
		'line-width': 2,
		'line-length': 40,
		'text-margin': 8,
		'font-size': 14,
		'font-color': '#8DA1AC',
		'line-color': '#8DA1AC',
		'element-color': 'black',
		fill: 'white',
		'yes-text': 'Yes',
		'no-text': 'No',
		'arrow-end': 'block',
		scale: 1,
	},
	Y3 = {
		...tc,
		symbols: {
			start: { class: 'start-element', 'font-color': '#fff', fill: '#595959', 'line-width': '0px' },
			end: { class: 'end-element', 'font-color': '#fff', fill: '#595959', 'line-width': '0px' },
			operation: {
				class: 'operation-element',
				'font-color': '#fff',
				fill: '#1890ff',
				'line-width': '0px',
			},
			inputoutput: {
				class: 'inputoutput-element',
				'font-color': '#fff',
				fill: '#1890ff',
				'line-width': '0px',
			},
			subroutine: {
				class: 'subroutine-element',
				'font-color': '#fff',
				fill: '#FF485E',
				'element-color': '#fff',
				'line-color': 'red',
			},
			condition: {
				class: 'condition-element',
				'font-color': '#fff',
				fill: '#FF485E',
				'line-width': '0px',
			},
			parallel: {
				class: 'parallel-element',
				'font-color': '#fff',
				fill: '#1890ff',
				'line-width': '0px',
			},
		},
	},
	Q3 = {
		...tc,
		'line-width': 1,
		symbols: {
			start: {
				class: 'start-element',
				fill: '#ccc',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
			end: { class: 'end-element', fill: '#ccc', 'line-color': '#5c6ac4', 'font-color': '#000' },
			operation: {
				class: 'operation-element',
				fill: '#f1f1f1',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
			inputoutput: {
				class: 'inputoutput-element',
				fill: '#f1f1f1',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
			subroutine: {
				class: 'subroutine-element',
				fill: '#f1f1f1',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
			condition: {
				class: 'condition-element',
				fill: '#f1f1f1',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
			parallel: {
				class: 'parallel-element',
				fill: '#f1f1f1',
				'line-color': '#5c6ac4',
				'font-color': '#000',
			},
		},
	},
	J3 = {
		...tc,
		symbols: {
			start: { class: 'start-element', 'font-color': '#fff', fill: '#2F495F', 'line-width': '0px' },
			end: { class: 'end-element', 'font-color': '#fff', fill: '#2F495F', 'line-width': '0px' },
			operation: {
				class: 'operation-element',
				'font-color': '#fff',
				fill: '#00BC7D',
				'line-width': '0px',
			},
			inputoutput: {
				class: 'inputoutput-element',
				'font-color': '#fff',
				fill: '#EB4D5D',
				'line-width': '0px',
			},
			subroutine: {
				class: 'subroutine-element',
				'font-color': '#fff',
				fill: '#937AC4',
				'element-color': '#fff',
				'line-color': 'red',
			},
			condition: {
				class: 'condition-element',
				'font-color': '#fff',
				fill: '#FFB500',
				'line-width': '0px',
			},
			parallel: {
				class: 'parallel-element',
				'font-color': '#fff',
				fill: '#2F495F',
				'line-width': '0px',
			},
		},
	}
const X3 = { ant: Y3, vue: J3, pie: Q3 }
var Z3 = $({
	name: 'FlowChart',
	props: {
		code: { type: String, required: !0 },
		id: { type: String, required: !0 },
		preset: { type: String, default: 'vue' },
	},
	setup(e) {
		let t = null
		const n = Ie(),
			o = R(!0),
			r = R(1),
			i = E(() => X3[e.preset]),
			s = (a) => (a < 419 ? 0.8 : a > 1280 ? 1 : 0.9)
		return (
			ke(() => {
				Promise.all([L(() => import('./flowchart-CTwbLKUk.js'), []), cr(800)]).then(
					([{ parse: a }]) => {
						;(t = a(wo(e.code))),
							(r.value = s(window.innerWidth)),
							(o.value = !1),
							t.draw(e.id, { ...i.value, scale: r.value })
					}
				),
					Fe(
						'resize',
						As(() => {
							if (t) {
								const a = s(window.innerWidth)
								r.value !== a && ((r.value = a), t.draw(e.id, { ...i.value, scale: a }))
							}
						}, 100)
					)
			}),
			gt(() => {
				t == null || t.clean(), (t = null)
			}),
			() => [
				o.value ? ce(xo, { class: 'flowchart-loading', height: 192 }) : null,
				ce('div', {
					ref: n,
					class: ['flowchart-wrapper', e.preset],
					id: e.id,
					style: { display: o.value ? 'none' : 'block' },
				}),
			]
		)
	},
})
let e8 = {}
const t8 = () => e8,
	Lo = { useMaxWidth: !1 },
	n8 = (e) => ({
		dark: e,
		background: e ? '#1e1e1e' : '#fff',
		primaryColor: e ? '#389d70' : '#4abf8a',
		primaryBorderColor: e ? '#389d70' : '#4abf8a',
		primaryTextColor: e ? '#fff' : '#000',
		secondaryColor: '#ffb500',
		secondaryBorderColor: e ? '#fff' : '#000',
		secondaryTextColor: e ? '#ddd' : '#333',
		tertiaryColor: e ? '#282828' : '#efeef4',
		tertiaryBorderColor: e ? '#bbb' : '#242424',
		tertiaryTextColor: e ? '#ddd' : '#333',
		noteBkgColor: e ? '#f6d365' : '#fff5ad',
		noteTextColor: '#242424',
		noteBorderColor: e ? '#f6d365' : '#333',
		lineColor: e ? '#d3d3d3' : '#333',
		textColor: e ? '#fff' : '#242424',
		mainBkg: e ? '#389d70' : '#4abf8a',
		errorBkgColor: '#eb4d5d',
		errorTextColor: '#fff',
		nodeBorder: e ? '#389d70' : '#4abf8a',
		nodeTextColor: e ? '#fff' : '#242424',
		signalTextColor: e ? '#9e9e9e' : '#242424',
		classText: '#fff',
		labelColor: '#fff',
		attributeBackgroundColorEven: e ? '#0d1117' : '#fff',
		attributeBackgroundColorOdd: e ? '#161b22' : '#f8f8f8',
		fillType0: e ? '#cf1322' : '#f1636e',
		fillType1: '#f39c12',
		fillType2: '#2ecc71',
		fillType3: '#fa541c',
		fillType4: '#25a55b',
		fillType5: '#13c2c2',
		fillType6: '#096dd9',
		fillType7: '#aa6fe9',
	})
var o8 = $({
	name: 'Mermaid',
	props: {
		id: { type: String, required: !0 },
		code: { type: String, required: !0 },
		title: { type: String, default: '' },
	},
	setup(e) {
		const { themeVariables: t, ...n } = t8(),
			o = Ie(),
			r = E(() => wo(e.code)),
			i = R(''),
			s = R(!1)
		let a = !1
		const l = async () => {
				const [{ default: d }] = await Promise.all([
					L(() => import('./mermaid.esm.min-mOeGQeJH.js').then((f) => f.bz), []),
					a ? Promise.resolve() : ((a = !0), cr(800)),
				])
				d.initialize({
					theme: 'base',
					themeVariables: { ...n8(s.value), ...(ih(t) ? t(s.value) : t) },
					flowchart: Lo,
					sequence: Lo,
					journey: Lo,
					gantt: Lo,
					er: Lo,
					pie: Lo,
					...n,
					startOnLoad: !1,
				}),
					(i.value = (await d.render(e.id, r.value)).svg)
			},
			c = () => {
				const { body: d } = document,
					f = document.createElement('div')
				f.classList.add('mermaid-preview'),
					(f.innerHTML = i.value),
					d.appendChild(f),
					f.addEventListener('click', () => {
						d.removeChild(f)
					})
			},
			u = () => {
				const d = `data:image/svg+xml;charset=utf8,${i.value
						.replace(/<br>/g, '<br />')
						.replace(/%/g, '%25')
						.replace(/"/g, '%22')
						.replace(/'/g, '%27')
						.replace(/&/g, '%26')
						.replace(/#/g, '%23')
						.replace(/{/g, '%7B')
						.replace(/}/g, '%7D')
						.replace(/</g, '%3C')
						.replace(/>/g, '%3E')}`,
					f = document.createElement('a')
				f.setAttribute('href', d),
					f.setAttribute('download', `${e.title ? wo(e.title) : e.id}.svg`),
					f.click()
			}
		return (
			ke(() => {
				;(s.value = ds()),
					l(),
					Gl(
						document.documentElement,
						() => {
							s.value = ds()
						},
						{ attributeFilter: ['class', 'data-theme'], attributes: !0 }
					),
					ve(s, () => l())
			}),
			() => [
				ce('div', { class: 'mermaid-actions' }, [
					ce('button', {
						class: 'preview-button',
						onClick: () => {
							c()
						},
						title: 'preview',
						innerHTML:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>',
					}),
					ce('button', {
						class: 'download-button',
						onClick: () => {
							u()
						},
						title: 'download',
						innerHTML:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>',
					}),
				]),
				ce(
					'div',
					{ ref: o, class: 'mermaid-wrapper' },
					i.value
						? ce('div', { class: 'mermaid-content', innerHTML: i.value })
						: ce(xo, { class: 'mermaid-loading', height: 96 })
				),
			]
		)
	},
})
const r8 = {
		enhance: ({ app: e }) => {
			e.component('ChartJS', k3),
				e.component('CodeDemo', H3),
				e.component('MdDemo', z3),
				e.component('ECharts', K3),
				e.component('FlowChart', Z3),
				e.component('Mermaid', o8)
		},
	},
	i8 = Object.freeze(
		Object.defineProperty({ __proto__: null, default: r8 }, Symbol.toStringTag, { value: 'Module' })
	),
	md = 'VUEPRESS_TAB_STORE',
	s8 = $({
		__name: 'Tabs',
		props: { id: {}, tabId: { default: '' }, active: { default: 0 }, data: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = pi(md, {}),
				r = R(n.active),
				i = Ie([])
			function s() {
				n.tabId && (o.value[n.tabId] = n.data[r.value].id)
			}
			function a(p = r.value) {
				;(r.value = p < i.value.length - 1 ? p + 1 : 0), i.value[r.value].focus()
			}
			function l(p = r.value) {
				;(r.value = p > 0 ? p - 1 : i.value.length - 1), i.value[r.value].focus()
			}
			function c(p, m) {
				p.key === ' ' || p.key === 'Enter'
					? (p.preventDefault(), (r.value = m))
					: p.key === 'ArrowRight'
					? (p.preventDefault(), a())
					: p.key === 'ArrowLeft' && (p.preventDefault(), l()),
					s()
			}
			function u() {
				if (n.tabId) {
					const p = n.data.findIndex(({ id: m }) => o.value[n.tabId] === m)
					if (p !== -1) return p
				}
				return n.active
			}
			ke(() => {
				;(r.value = u()),
					ve(
						() => o.value[n.tabId],
						(p, m) => {
							if (n.tabId && p !== m) {
								const v = n.data.findIndex(({ id: b }) => b === p)
								v !== -1 && (r.value = v)
							}
						}
					)
			})
			function d(p) {
				;(r.value = p), s()
			}
			const f = {
				props: n,
				TAB_STORE_NAME: md,
				tabStore: o,
				activeIndex: r,
				tabRefs: i,
				updateStore: s,
				activateNext: a,
				activatePrev: l,
				keyboardHandler: c,
				getInitialIndex: u,
				onTabNavClick: d,
			}
			return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
		},
	}),
	a8 = { key: 0, class: 'vp-tabs' },
	l8 = { class: 'vp-tabs-nav', role: 'tablist' },
	c8 = ['aria-controls', 'aria-selected', 'onClick', 'onKeydown'],
	u8 = ['id', 'aria-expanded'],
	d8 = { class: 'vp-tab-title' }
function f8(e, t, n, o, r, i) {
	return n.data.length
		? (h(),
		  _('div', a8, [
				g('div', l8, [
					(h(!0),
					_(
						K,
						null,
						he(
							n.data,
							(s, a) => (
								h(),
								_(
									'button',
									{
										key: a,
										ref_for: !0,
										ref: (l) => l && (o.tabRefs[a] = l),
										class: J(['vp-tab-nav', { active: a === o.activeIndex }]),
										type: 'button',
										role: 'tab',
										'aria-controls': `tab-${n.id}-${a}`,
										'aria-selected': a === o.activeIndex,
										onClick: () => o.onTabNavClick(a),
										onKeydown: (l) => o.keyboardHandler(l, a),
									},
									[C(e.$slots, `title${a}`, { value: s.id, isActive: a === o.activeIndex })],
									42,
									c8
								)
							)
						),
						128
					)),
				]),
				(h(!0),
				_(
					K,
					null,
					he(
						n.data,
						(s, a) => (
							h(),
							_(
								'div',
								{
									id: `tab-${n.id}-${a}`,
									key: a,
									class: J(['vp-tab', { active: a === o.activeIndex }]),
									role: 'tabpanel',
									'aria-expanded': a === o.activeIndex,
								},
								[
									g('div', d8, [
										C(e.$slots, `title${a}`, { value: s.id, isActive: a === o.activeIndex }),
									]),
									C(e.$slots, `tab${a}`, { value: s.id, isActive: a === o.activeIndex }),
								],
								10,
								u8
							)
						)
					),
					128
				)),
		  ]))
		: A('', !0)
}
const p8 = M(s8, [
		['render', f8],
		['__file', 'Tabs.vue'],
	]),
	vd = 'VUEPRESS_CODE_TAB_STORE',
	h8 = $({
		__name: 'CodeTabs',
		props: { id: {}, tabId: { default: '' }, active: { default: 0 }, data: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = pi(vd, {}),
				r = R(n.active),
				i = Ie([])
			function s() {
				n.tabId && (o.value[n.tabId] = n.data[r.value].id)
			}
			function a(p = r.value) {
				;(r.value = p < i.value.length - 1 ? p + 1 : 0), i.value[r.value].focus()
			}
			function l(p = r.value) {
				;(r.value = p > 0 ? p - 1 : i.value.length - 1), i.value[r.value].focus()
			}
			function c(p, m) {
				p.key === ' ' || p.key === 'Enter'
					? (p.preventDefault(), (r.value = m))
					: p.key === 'ArrowRight'
					? (p.preventDefault(), a())
					: p.key === 'ArrowLeft' && (p.preventDefault(), l()),
					n.tabId && (o.value[n.tabId] = n.data[r.value].id)
			}
			function u() {
				if (n.tabId) {
					const p = n.data.findIndex(({ id: m }) => o.value[n.tabId] === m)
					if (p !== -1) return p
				}
				return n.active
			}
			ke(() => {
				;(r.value = u()),
					ve(
						() => o.value[n.tabId],
						(p, m) => {
							if (n.tabId && p !== m) {
								const v = n.data.findIndex(({ id: b }) => b === p)
								v !== -1 && (r.value = v)
							}
						}
					)
			})
			function d(p) {
				;(r.value = p), s()
			}
			const f = {
				props: n,
				CODE_TAB_STORE_NAME: vd,
				codeTabStore: o,
				activeIndex: r,
				tabRefs: i,
				updateStore: s,
				activateNext: a,
				activatePrev: l,
				keyboardHandler: c,
				getInitialIndex: u,
				onTabNavClick: d,
			}
			return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
		},
	}),
	m8 = { key: 0, class: 'vp-code-tabs' },
	v8 = { class: 'vp-code-tabs-nav', role: 'tablist' },
	g8 = ['aria-controls', 'aria-selected', 'onClick', 'onKeydown'],
	_8 = ['id', 'aria-expanded'],
	b8 = { class: 'vp-code-tab-title' }
function y8(e, t, n, o, r, i) {
	return n.data.length
		? (h(),
		  _('div', m8, [
				g('div', v8, [
					(h(!0),
					_(
						K,
						null,
						he(
							n.data,
							(s, a) => (
								h(),
								_(
									'button',
									{
										key: a,
										ref_for: !0,
										ref: (l) => l && (o.tabRefs[a] = l),
										class: J(['vp-code-tab-nav', { active: a === o.activeIndex }]),
										type: 'button',
										role: 'tab',
										'aria-controls': `codetab-${n.id}-${a}`,
										'aria-selected': a === o.activeIndex,
										onClick: () => o.onTabNavClick(a),
										onKeydown: (l) => o.keyboardHandler(l, a),
									},
									[C(e.$slots, `title${a}`, { value: s.id, isActive: a === o.activeIndex })],
									42,
									g8
								)
							)
						),
						128
					)),
				]),
				(h(!0),
				_(
					K,
					null,
					he(
						n.data,
						(s, a) => (
							h(),
							_(
								'div',
								{
									id: `codetab-${n.id}-${a}`,
									key: a,
									class: J(['vp-code-tab', { active: a === o.activeIndex }]),
									role: 'tabpanel',
									'aria-expanded': a === o.activeIndex,
								},
								[
									g('div', b8, [
										C(e.$slots, `title${a}`, { value: s.id, isActive: a === o.activeIndex }),
									]),
									C(e.$slots, `tab${a}`, { value: s.id, isActive: a === o.activeIndex }),
								],
								10,
								_8
							)
						)
					),
					128
				)),
		  ]))
		: A('', !0)
}
const w8 = M(h8, [
	['render', y8],
	['__file', 'CodeTabs.vue'],
])
function k8(e) {
	return /\b(?:Android|iPhone)/i.test(e)
}
function E8(e) {
	return /version\/[\w.]+ .*(?:mobile ?safari|safari)/i.test(e)
}
function x8(e) {
	return [
		/\((ipad);[-\w),; ]+apple/i,
		/applecoremedia\/[\w.]+ \((ipad)/i,
		/\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
	].some((t) => t.test(e))
}
function P8(e) {
	const { page: t, noToolbar: n, zoom: o } = e
	let i = [`page=${t}`, `toolbar=${n ? 0 : 1}`, `zoom=${o}`].join('&')
	return i && (i = `#${i}`), i
}
function gd(e, t, n, o) {
	t = It(t) ? t : new URL(et(t), typeof location < 'u' ? location.href : '').toString()
	const r = {}
	r.pdfjsUrl ?? (r.pdfjsUrl = 'https://static.pengzhanbo.cn/pdfjs/')
	const i = `${oh(et(r.pdfjsUrl))}web/viewer.html`,
		s = P8(o),
		a = n === 'pdfjs' ? `${i}?file=${t}${s}` : `${t}${s}`,
		l = n === 'pdfjs' || n === 'iframe' ? 'iframe' : 'embed'
	e.innerHTML = ''
	const c = document.createElement(l)
	;(c.className = 'pdf-viewer'),
		(c.type = 'application/pdf'),
		(c.title = o.title || 'PDF Viewer'),
		(c.src = a),
		c instanceof HTMLIFrameElement && (c.allow = 'fullscreen'),
		e.appendChild(c)
}
function S8(e, t, n) {
	var u
	if (
		typeof window > 'u' ||
		!((u = window == null ? void 0 : window.navigator) != null && u.userAgent)
	)
		return
	const { navigator: o } = window,
		{ userAgent: r } = o,
		i = typeof window.Promise == 'function',
		s = x8(r) || k8(r),
		a = !s && E8(r),
		l =
			!s && /firefox/iu.test(r) && r.split('rv:').length > 1
				? Number.parseInt(r.split('rv:')[1].split('.')[0], 10) > 18
				: !1,
		c = !s && (i || l)
	if (t) return c || !s ? gd(e, t, a ? 'iframe' : 'embed', n) : gd(e, t, 'pdfjs', n)
}
function nc(e, t = 0) {
	const n = Ie(),
		o = E(() => Et(e.width) || '100%'),
		r = R('auto'),
		i = (a) => {
			const l = Et(e.height),
				c = C8(Et(e.ratio))
			return l || `${Number(a) / c + Et(t)}px`
		},
		s = () => {
			n.value && (r.value = i(n.value.offsetWidth))
		}
	return (
		ke(() => {
			s(), He(t) && ve(t, s), Fe('orientationchange', s), Fe('resize', s)
		}),
		{ el: n, width: o, height: r, resize: s }
	)
}
function C8(e) {
	if (typeof e == 'string') {
		const [t, n] = e.split(':'),
			o = Number(t) / Number(n)
		if (!Number.isNaN(o)) return o
	}
	return typeof e == 'number' ? e : 16 / 9
}
const T8 = $({
	__name: 'PDFViewer',
	props: {
		page: {},
		noToolbar: { type: Boolean },
		zoom: {},
		src: {},
		title: {},
		width: {},
		height: {},
		ratio: {},
	},
	setup(e, { expose: t }) {
		t()
		const n = e,
			o = Al(n),
			{ el: r, width: i, height: s, resize: a } = nc(o)
		ke(() => {
			r.value && (S8(r.value, n.src, { page: n.page, zoom: n.zoom, noToolbar: n.noToolbar }), a())
		})
		const l = { props: n, options: o, el: r, width: i, height: s, resize: a }
		return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
	},
})
function A8(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ ref: 'el', class: 'pdf-viewer-wrapper', style: xe({ width: o.width, height: o.height }) },
			null,
			4
		)
	)
}
const L8 = M(T8, [
		['render', A8],
		['__file', 'PDFViewer.vue'],
	]),
	B8 =
		'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture',
	O8 = $({
		__name: 'Bilibili',
		props: { src: {}, title: {}, width: {}, height: {}, ratio: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = Al(n),
				{ el: r, width: i, height: s, resize: a } = nc(o)
			function l() {
				a()
			}
			const c = {
				props: n,
				IFRAME_ALLOW: B8,
				options: o,
				el: r,
				width: i,
				height: s,
				resize: a,
				onLoad: l,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	}),
	V8 = ['src', 'title']
function $8(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		N(s, null, {
			default: T(() => [
				g(
					'iframe',
					{
						ref: 'el',
						class: 'video_bilibili_iframe',
						src: n.src,
						title: n.title || 'Bilibili',
						style: xe({ width: o.width, height: o.height }),
						allow: o.IFRAME_ALLOW,
						onLoad: o.onLoad,
					},
					null,
					44,
					V8
				),
			]),
			_: 1,
		})
	)
}
const I8 = M(O8, [
		['render', $8],
		['__file', 'Bilibili.vue'],
	]),
	R8 =
		'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture',
	D8 = $({
		__name: 'Youtube',
		props: { src: {}, title: {}, width: {}, height: {}, ratio: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = Al(n),
				{ el: r, width: i, height: s, resize: a } = nc(o),
				l = { props: n, IFRAME_ALLOW: R8, options: o, el: r, width: i, height: s, resize: a }
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	M8 = ['src', 'title']
function N8(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		N(s, null, {
			default: T(() => [
				g(
					'iframe',
					{
						ref: 'el',
						class: 'video-youtube-iframe',
						src: n.src,
						title: n.title || 'Youtube',
						style: xe({ width: o.width, height: o.height }),
						allow: o.IFRAME_ALLOW,
						onLoad: t[0] || (t[0] = (...a) => o.resize && o.resize(...a)),
					},
					null,
					44,
					M8
				),
			]),
			_: 1,
		})
	)
}
const F8 = M(D8, [
		['render', N8],
		['__file', 'Youtube.vue'],
	]),
	j8 = $({
		__name: 'Loading',
		props: { absolute: { type: Boolean }, height: {} },
		setup(e, { expose: t }) {
			t()
			const n = {}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	})
function H8(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['md-power-loading', { absolute: n.absolute }]), style: xe({ height: n.height }) },
			t[0] ||
				(t[0] = [
					g(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: '1em',
							height: '1em',
							viewBox: '0 0 24 24',
						},
						[
							g(
								'path',
								{
									fill: 'none',
									stroke: 'currentColor',
									'stroke-dasharray': '15',
									'stroke-dashoffset': '15',
									'stroke-linecap': 'round',
									'stroke-width': '2',
									d: 'M12 3C16.9706 3 21 7.02944 21 12',
								},
								[
									g('animate', {
										fill: 'freeze',
										attributeName: 'stroke-dashoffset',
										dur: '0.3s',
										values: '15;0',
									}),
									g('animateTransform', {
										attributeName: 'transform',
										dur: '1.5s',
										repeatCount: 'indefinite',
										type: 'rotate',
										values: '0 12 12;360 12 12',
									}),
								]
							),
						],
						-1
					),
				]),
			6
		)
	)
}
const Am = M(j8, [
		['render', H8],
		['__file', 'Loading.vue'],
	]),
	_d = 'https://replit.com/',
	z8 = $({
		__name: 'Replit',
		props: { title: {}, source: {}, theme: {}, width: {}, height: {}, ratio: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = pn(),
				r = R('47px'),
				i = R(!1),
				s = E(() => (o == null ? void 0 : o.appContext.config.globalProperties.$isDark.value)),
				a = E(() => {
					const u = new URL(`/${n.source}`, _d)
					u.searchParams.set('embed', 'true')
					const d = n.theme || (s.value ? 'dark' : 'light')
					return u.searchParams.set('theme', d), u.toString()
				})
			function l() {
				;(i.value = !0), (r.value = n.height || '450px')
			}
			const c = {
				props: n,
				current: o,
				height: r,
				loaded: i,
				REPLIT_LINK: _d,
				isDark: s,
				link: a,
				onload: l,
				Loading: Am,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	}),
	q8 = ['src', 'title']
function U8(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		N(s, null, {
			default: T(() => [
				g(
					'iframe',
					{
						class: 'replit-iframe-wrapper',
						src: o.link,
						title: n.title || 'Replit',
						style: xe({ width: n.width, height: o.height }),
						allowtransparency: 'true',
						allowfullscree: 'true',
						onLoad: o.onload,
					},
					null,
					44,
					q8
				),
				o.loaded ? A('', !0) : (h(), N(o.Loading, { key: 0 })),
			]),
			_: 1,
		})
	)
}
const W8 = M(z8, [
		['render', U8],
		['__file', 'Replit.vue'],
	]),
	bd = 'https://codesandbox.io/embed/',
	yd = 'https://codesandbox.io/p/sandbox/',
	G8 =
		'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking',
	K8 = 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
	Y8 = $({
		__name: 'CodeSandbox',
		props: {
			user: {},
			id: {},
			layout: {},
			type: {},
			title: {},
			filepath: {},
			navbar: { type: Boolean },
			console: { type: Boolean },
			width: {},
			height: {},
			ratio: {},
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() => {
					const i = new URLSearchParams()
					n.filepath &&
						i.set(n.type === 'embed' ? 'module' : 'file', encodeURIComponent(n.filepath)),
						n.type === 'embed'
							? (i.set('view', n.layout ? n.layout.replace(/,/g, '+') : 'Editor+Preview'),
							  n.console && i.set('expanddevtools', '1'),
							  n.navbar === !1 && i.set('hidenavigation', '1'))
							: i.set('from-embed', '')
					const s = n.type === 'embed' ? bd : yd,
						a = n.type !== 'embed' && n.user ? `${n.user}-${n.id}` : n.id
					return `${s}${a}?${i.toString()}`
				}),
				r = { props: n, EMBED_LINK: bd, SHARE_LINK: yd, ALLOW: G8, SANDBOX: K8, source: o }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	Q8 = ['src', 'title'],
	J8 = { key: 1 },
	X8 = ['href', 'aria-label']
function Z8(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return n.type === 'embed'
		? (h(),
		  N(
				s,
				{ key: 0 },
				{
					default: T(() => [
						g(
							'iframe',
							{
								src: o.source,
								class: 'code-sandbox-iframe',
								title: n.title || 'CodeSandbox',
								allow: o.ALLOW,
								sandbox: o.SANDBOX,
								style: xe({ width: n.width, height: n.height }),
							},
							null,
							12,
							Q8
						),
					]),
					_: 1,
				}
		  ))
		: (h(),
		  _('p', J8, [
				g(
					'a',
					{
						class: 'code-sandbox-link no-icon',
						href: o.source,
						target: '_blank',
						rel: 'noopener noreferrer',
						'aria-label': n.title || 'CodeSandbox',
					},
					t[0] ||
						(t[0] = [
							Q1(
								'<svg xmlns="http://www.w3.org/2000/svg" width="165" height="32" viewBox="0 0 165 32" fill="none"><rect width="165" height="32" rx="4" fill="#E3FF73"></rect><rect x="0.5" y="0.5" width="164" height="31" rx="3.5" stroke="black" stroke-opacity="0.1"></rect><line x1="31.5" y1="2.18557e-08" x2="31.5" y2="32" stroke="black" stroke-opacity="0.1"></line><path fill-rule="evenodd" clip-rule="evenodd" d="M10 10L23 10V23H10V10ZM21.6705 11.3295V21.6705H11.3295V11.3295H21.6705Z" fill="#191919"></path><path d="M38.9988 21H44.7516V19.8192H40.3704V17.036H44.4009V15.8597H40.3704V13.0898H44.6983V11.9091H38.9988V21ZM48.6013 21.1332C49.8442 21.1332 50.3325 20.3741 50.5722 19.9391H50.6832V21H51.9794V11.9091H50.6521V15.2871H50.5722C50.3325 14.8654 49.8797 14.093 48.6102 14.093C46.9634 14.093 45.7516 15.3936 45.7516 17.6042C45.7516 19.8104 46.9456 21.1332 48.6013 21.1332ZM48.8943 20.0012C47.7091 20.0012 47.0921 18.9581 47.0921 17.5909C47.0921 16.237 47.6958 15.2205 48.8943 15.2205C50.0529 15.2205 50.6743 16.166 50.6743 17.5909C50.6743 19.0247 50.0396 20.0012 48.8943 20.0012ZM53.4987 21H54.8259V14.1818H53.4987V21ZM54.1689 13.1298C54.6262 13.1298 55.0079 12.7747 55.0079 12.3397C55.0079 11.9047 54.6262 11.5451 54.1689 11.5451C53.7073 11.5451 53.33 11.9047 53.33 12.3397C53.33 12.7747 53.7073 13.1298 54.1689 13.1298ZM59.4192 14.1818H58.0209V12.5483H56.6937V14.1818H55.6949V15.2472H56.6937V19.2733C56.6892 20.5117 57.6347 21.111 58.6823 21.0888C59.104 21.0843 59.3881 21.0044 59.5435 20.9467L59.3038 19.8503C59.215 19.8681 59.0507 19.908 58.8377 19.908C58.4071 19.908 58.0209 19.766 58.0209 18.998V15.2472H59.4192V14.1818ZM63.4454 21H64.7727V14.1818H63.4454V21ZM64.1157 13.1298C64.5729 13.1298 64.9547 12.7747 64.9547 12.3397C64.9547 11.9047 64.5729 11.5451 64.1157 11.5451C63.6541 11.5451 63.2768 11.9047 63.2768 12.3397C63.2768 12.7747 63.6541 13.1298 64.1157 13.1298ZM67.5105 16.9517C67.5105 15.8642 68.1763 15.2427 69.0996 15.2427C70.0007 15.2427 70.5467 15.8331 70.5467 16.823V21H71.8739V16.6632C71.8739 14.9764 70.9462 14.093 69.5524 14.093C68.527 14.093 67.8567 14.568 67.5415 15.2915H67.4572V14.1818H66.1832V21H67.5105V16.9517ZM83.8692 14.8654C83.5585 12.9212 82.0359 11.7848 80.1139 11.7848C77.7612 11.7848 76.0256 13.5471 76.0256 16.4545C76.0256 19.362 77.7524 21.1243 80.1139 21.1243C82.1114 21.1243 83.5718 19.8725 83.8692 18.0748L82.4842 18.0703C82.249 19.2333 81.2724 19.8725 80.1227 19.8725C78.5647 19.8725 77.3884 18.6784 77.3884 16.4545C77.3884 14.2484 78.5602 13.0366 80.1272 13.0366C81.2857 13.0366 82.2579 13.6891 82.4842 14.8654H83.8692ZM87.9009 21.1376C89.823 21.1376 91.0792 19.7305 91.0792 17.622C91.0792 15.5002 89.823 14.093 87.9009 14.093C85.9789 14.093 84.7227 15.5002 84.7227 17.622C84.7227 19.7305 85.9789 21.1376 87.9009 21.1376ZM87.9054 20.0234C86.6491 20.0234 86.0632 18.927 86.0632 17.6175C86.0632 16.3125 86.6491 15.2028 87.9054 15.2028C89.1527 15.2028 89.7386 16.3125 89.7386 17.6175C89.7386 18.927 89.1527 20.0234 87.9054 20.0234ZM94.7381 21.1332C95.981 21.1332 96.4692 20.3741 96.7089 19.9391H96.8199V21H98.1161V11.9091H96.7888V15.2871H96.7089C96.4692 14.8654 96.0165 14.093 94.7469 14.093C93.1001 14.093 91.8883 15.3936 91.8883 17.6042C91.8883 19.8104 93.0823 21.1332 94.7381 21.1332ZM95.031 20.0012C93.8458 20.0012 93.2288 18.9581 93.2288 17.5909C93.2288 16.237 93.8325 15.2205 95.031 15.2205C96.1896 15.2205 96.811 16.166 96.811 17.5909C96.811 19.0247 96.1763 20.0012 95.031 20.0012ZM102.574 21.1376C104.061 21.1376 105.113 20.4052 105.415 19.2955L104.159 19.0691C103.919 19.7127 103.342 20.0412 102.587 20.0412C101.451 20.0412 100.687 19.3043 100.652 17.9904H105.499V17.5199C105.499 15.0563 104.025 14.093 102.481 14.093C100.581 14.093 99.3291 15.5401 99.3291 17.6353C99.3291 19.7527 100.563 21.1376 102.574 21.1376ZM100.656 16.9961C100.71 16.0284 101.411 15.1895 102.49 15.1895C103.519 15.1895 104.194 15.9529 104.199 16.9961H100.656ZM111.662 14.2972H112.984C112.944 12.8413 111.657 11.7848 109.811 11.7848C107.986 11.7848 106.588 12.8279 106.588 14.3949C106.588 15.66 107.493 16.4013 108.954 16.7963L110.028 17.0893C111 17.3468 111.75 17.6664 111.75 18.4743C111.75 19.362 110.903 19.948 109.735 19.948C108.679 19.948 107.8 19.4775 107.72 18.4876H106.344C106.433 20.1344 107.707 21.1509 109.744 21.1509C111.879 21.1509 113.109 20.0279 113.109 18.4876C113.109 16.8496 111.648 16.2148 110.494 15.9308L109.606 15.6999C108.896 15.5179 107.951 15.185 107.955 14.315C107.955 13.5426 108.661 12.97 109.78 12.97C110.823 12.97 111.564 13.4583 111.662 14.2972ZM116.25 21.1509C117.378 21.1509 118.013 20.5783 118.266 20.0678H118.319V21H119.615V16.4723C119.615 14.4881 118.053 14.093 116.97 14.093C115.736 14.093 114.599 14.5902 114.155 15.8331L115.403 16.1172C115.598 15.6333 116.095 15.1673 116.987 15.1673C117.844 15.1673 118.283 15.6156 118.283 16.388V16.419C118.283 16.9029 117.786 16.894 116.561 17.036C115.269 17.187 113.947 17.5243 113.947 19.0735C113.947 20.4141 114.954 21.1509 116.25 21.1509ZM116.539 20.0856C115.789 20.0856 115.247 19.7482 115.247 19.0913C115.247 18.381 115.878 18.128 116.646 18.0259C117.076 17.9682 118.097 17.8528 118.288 17.6619V18.5408C118.288 19.3487 117.644 20.0856 116.539 20.0856ZM122.335 16.9517C122.335 15.8642 123.001 15.2427 123.924 15.2427C124.825 15.2427 125.371 15.8331 125.371 16.823V21H126.699V16.6632C126.699 14.9764 125.771 14.093 124.377 14.093C123.352 14.093 122.681 14.568 122.366 15.2915H122.282V14.1818H121.008V21H122.335V16.9517ZM130.656 21.1332C131.899 21.1332 132.387 20.3741 132.627 19.9391H132.738V21H134.034V11.9091H132.707V15.2871H132.627C132.387 14.8654 131.934 14.093 130.665 14.093C129.018 14.093 127.806 15.3936 127.806 17.6042C127.806 19.8104 129 21.1332 130.656 21.1332ZM130.949 20.0012C129.764 20.0012 129.147 18.9581 129.147 17.5909C129.147 16.237 129.75 15.2205 130.949 15.2205C132.108 15.2205 132.729 16.166 132.729 17.5909C132.729 19.0247 132.094 20.0012 130.949 20.0012ZM135.66 21H136.956V19.9391H137.067C137.307 20.3741 137.795 21.1332 139.038 21.1332C140.689 21.1332 141.888 19.8104 141.888 17.6042C141.888 15.3936 140.671 14.093 139.025 14.093C137.759 14.093 137.302 14.8654 137.067 15.2871H136.987V11.9091H135.66V21ZM136.96 17.5909C136.96 16.166 137.582 15.2205 138.741 15.2205C139.943 15.2205 140.547 16.237 140.547 17.5909C140.547 18.9581 139.926 20.0012 138.741 20.0012C137.6 20.0012 136.96 19.0247 136.96 17.5909ZM145.875 21.1376C147.797 21.1376 149.053 19.7305 149.053 17.622C149.053 15.5002 147.797 14.093 145.875 14.093C143.953 14.093 142.697 15.5002 142.697 17.622C142.697 19.7305 143.953 21.1376 145.875 21.1376ZM145.879 20.0234C144.623 20.0234 144.037 18.927 144.037 17.6175C144.037 16.3125 144.623 15.2028 145.879 15.2028C147.127 15.2028 147.713 16.3125 147.713 17.6175C147.713 18.927 147.127 20.0234 145.879 20.0234ZM150.927 14.1818H149.471L151.566 17.5909L149.444 21H150.9L152.431 18.4521L153.967 21H155.419L153.275 17.5909L155.401 14.1818H153.95L152.431 16.8363L150.927 14.1818Z" fill="#191919"></path></svg>',
								1
							),
						]),
					8,
					X8
				),
		  ]))
}
const e4 = M(Y8, [
		['render', Z8],
		['__file', 'CodeSandbox.vue'],
	]),
	t4 = $({
		__name: 'Plot',
		props: { mask: {}, color: {}, trigger: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = ar(),
				r = E(() => {
					const d = {}
					return {
						trigger: n.trigger || o.value.plotTrigger || d.trigger || 'hover',
						color: n.color || d.color,
						mask: n.mask || d.mask,
					}
				}),
				i = E(() => {
					const d = r.value
					if (!d.color && !d.mask) return {}
					const f = {}
					return (
						d.color &&
							(typeof d.color == 'string'
								? (f['--vp-c-plot-light'] = d.color)
								: ((f['--vp-c-plot-light'] = d.color.light),
								  (f['--vp-c-plot-dark'] = d.color.dark))),
						d.mask &&
							(typeof d.mask == 'string'
								? (f['--vp-c-bg-plot-light'] = d.mask)
								: ((f['--vp-c-bg-plot-light'] = d.mask.light),
								  (f['--vp-c-bg-plot-dark'] = d.mask.dark))),
						f
					)
				}),
				s = Rt('(max-width: 768px)'),
				a = R(!1),
				l = Ie()
			Wl(l, () => {
				;(r.value.trigger === 'click' || s.value) && (a.value = !1)
			})
			function c() {
				;(n.trigger === 'click' || s.value) && (a.value = !a.value)
			}
			const u = {
				props: n,
				matter: o,
				options: r,
				styles: i,
				isMobile: s,
				active: a,
				el: l,
				onClick: c,
			}
			return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
		},
	})
function n4(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'span',
			{
				ref: 'el',
				class: J(['vp-plot', { hover: o.options.trigger !== 'click', active: o.active }]),
				style: xe(o.styles),
				onClick: o.onClick,
			},
			[C(e.$slots, 'default')],
			6
		)
	)
}
const o4 = M(t4, [
	['render', n4],
	['__file', 'Plot.vue'],
])
var wd = {
	get: async (e, t) => {
		const n = new URL(e)
		if (t) for (const [r, i] of Object.entries(t)) n.searchParams.append(r, i)
		return await (await fetch(n.toString())).json()
	},
	post: async (e, t) =>
		await (
			await fetch(e, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: t ? JSON.stringify(t) : void 0,
			})
		).json(),
}
function r4(e) {
	return new Promise((t) => {
		setTimeout(t, e)
	})
}
var i4 = 'wss://play.rust-lang.org/websocket',
	mo = {
		connected: 'websocket/connected',
		request: 'output/execute/wsExecuteRequest',
		execute: {
			begin: 'output/execute/wsExecuteBegin',
			stderr: 'output/execute/wsExecuteStderr',
			stdout: 'output/execute/wsExecuteStdout',
			end: 'output/execute/wsExecuteEnd',
		},
	},
	We = null,
	fa = !1,
	tl = 0
function s4() {
	return fa
		? Promise.resolve()
		: ((We = new WebSocket(i4)),
		  (tl = 0),
		  We.addEventListener('open', () => {
				;(fa = !0),
					Lm(
						mo.connected,
						{ iAcceptThisIsAnUnsupportedApi: !0 },
						{ websocket: !0, sequenceNumber: tl }
					)
		  }),
		  We.addEventListener('close', () => {
				;(fa = !1), (We = null)
		  }),
		  hn(() => (We == null ? void 0 : We.close())),
		  new Promise((e) => {
				function t(n) {
					JSON.parse(n.data).type === mo.connected &&
						(We == null || We.removeEventListener('message', t), e())
				}
				We == null || We.addEventListener('message', t)
		  }))
}
function Lm(e, t, n) {
	const o = { type: e, meta: n, payload: t }
	We == null || We.send(JSON.stringify(o))
}
async function a4(e, { onEnd: t, onError: n, onStderr: o, onStdout: r, onBegin: i }) {
	await s4()
	const s = { sequenceNumber: tl++ },
		a = {
			backtrace: !1,
			channel: 'stable',
			crateType: 'bin',
			edition: '2021',
			mode: 'release',
			tests: !1,
			code: e,
		}
	Lm(mo.request, a, s)
	let l = '',
		c = ''
	function u(d) {
		const f = JSON.parse(d.data),
			{ type: p, payload: m, meta: v = {} } = f
		if (v.sequenceNumber === s.sequenceNumber) {
			if (
				(p === mo.execute.begin && (i == null || i()),
				p === mo.execute.stdout &&
					((l += m),
					l.endsWith(`
`) && (r == null || r(l), (l = ''))),
				p === mo.execute.stderr &&
					((c += m),
					c.endsWith(`
`)))
			) {
				if (c.startsWith('error:')) {
					const b = c.indexOf(`
`)
					o == null || o(c.slice(0, b)), o == null || o(c.slice(b + 1))
				} else o == null || o(c)
				c = ''
			}
			p === mo.execute.end &&
				(m.success === !1 && (n == null || n(m.exitDetail)),
				We == null || We.removeEventListener('message', u),
				t == null || t())
		}
	}
	We == null || We.addEventListener('message', u)
}
var l4 = ['.diff.remove', '.vp-copy-ignore'],
	c4 = /language-(\w+)/,
	kd = {
		go: 'https://api.pengzhanbo.cn/repl/golang/run',
		kotlin: 'https://api.pengzhanbo.cn/repl/kotlin/run',
	},
	u4 = { kt: 'kotlin', kotlin: 'kotlin', go: 'go', rust: 'rust', rs: 'rust' },
	d4 = ['kotlin', 'go', 'rust']
function f4(e) {
	return e ? u4[e] || e : ''
}
function p4(e) {
	const t = e.cloneNode(!0)
	return t.querySelectorAll(l4.join(',')).forEach((n) => n.remove()), t.textContent || ''
}
function Ed(e) {
	var i
	const t = e.querySelector('div[class*=language-]'),
		n = (i = t == null ? void 0 : t.className.match(c4)) == null ? void 0 : i[1],
		o = t == null ? void 0 : t.querySelector('pre')
	let r = ''
	return o && (r = p4(o)), { lang: f4(n), code: r }
}
function h4(e) {
	const t = R(),
		n = R(!0),
		o = R(!0),
		r = R(!0),
		i = R([]),
		s = R([]),
		a = R(''),
		l = R('')
	ke(() => {
		if (e.value) {
			const v = Ed(e.value)
			t.value = v.lang
		}
	})
	const c = { kotlin: p, go: f, rust: m }
	function u() {
		;(n.value = !1),
			(r.value = !1),
			(i.value = []),
			(s.value = []),
			(a.value = ''),
			(o.value = !0),
			(l.value = '')
	}
	async function d() {
		var b
		if (!e.value || !n.value) return
		const v = Ed(e.value)
		;(t.value = v.lang),
			!(!t.value || !v.code || !d4.includes(t.value)) &&
				(o.value && (o.value = !1),
				(n.value = !1),
				(r.value = !1),
				(i.value = []),
				(s.value = []),
				(a.value = ''),
				await ((b = c[t.value]) == null ? void 0 : b.call(c, v.code)))
	}
	async function f(v) {
		const b = await wd.post(kd.go, { code: v })
		if (((l.value = `v${b.version}`), (n.value = !0), b.error)) {
			;(a.value = b.error), (r.value = !0)
			return
		}
		const w = b.events || []
		for (const P of w)
			P.kind === 'stdout'
				? (P.delay && (await r4(P.delay / 1e6)), i.value.push(P.message))
				: P.kind === 'stderr' && s.value.push(P.message)
		r.value = !0
	}
	async function p(v) {
		const b = 'File.kt',
			w = await wd.post(kd.kotlin, { args: '', files: [{ name: b, publicId: '', text: v }] })
		if (((l.value = `v${w.version}`), (n.value = !0), w.errors)) {
			const P = Array.isArray(w.errors[b]) ? w.errors[b] : [w.errors[b]]
			P.length && P.forEach(({ message: y, severity: S }) => S === 'ERROR' && s.value.push(y))
		}
		i.value.push(w.text), (r.value = !0)
	}
	async function m(v) {
		await a4(v, {
			onBegin: () => {
				;(n.value = !0),
					(r.value = !1),
					(i.value = []),
					(s.value = []),
					(a.value = ''),
					(l.value = 'release')
			},
			onError(b) {
				a.value = b
			},
			onStdout(b) {
				i.value.push(b)
			},
			onStderr(b) {
				s.value.push(b)
			},
			onEnd: () => {
				r.value = !0
			},
		})
	}
	return {
		onRunCode: d,
		onCleanRun: u,
		lang: t,
		backendVersion: l,
		firstRun: o,
		stderr: s,
		stdout: i,
		loaded: n,
		finished: r,
		error: a,
	}
}
const m4 = {},
	v4 = { xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', viewBox: '0 0 24 24' }
function g4(e, t) {
	return (
		h(),
		_(
			'svg',
			v4,
			t[0] ||
				(t[0] = [
					g(
						'path',
						{
							fill: 'currentColor',
							d: 'M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z',
						},
						null,
						-1
					),
				])
		)
	)
}
const _4 = M(m4, [
		['render', g4],
		['__file', 'IconClose.vue'],
	]),
	b4 = {},
	y4 = { xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', viewBox: '0 0 24 24' }
function w4(e, t) {
	return (
		h(),
		_(
			'svg',
			y4,
			t[0] ||
				(t[0] = [
					g(
						'path',
						{
							fill: 'currentColor',
							d: 'M20 19V7H4v12zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7 14v-2h5v2zm-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59z',
						},
						null,
						-1
					),
				])
		)
	)
}
const k4 = M(b4, [
		['render', w4],
		['__file', 'IconConsole.vue'],
	]),
	E4 = {},
	x4 = { xmlns: 'http://www.w3.org/2000/svg', width: '1em', height: '1em', viewBox: '0 0 24 24' }
function P4(e, t) {
	return (
		h(),
		_(
			'svg',
			x4,
			t[0] ||
				(t[0] = [
					g(
						'path',
						{
							fill: 'currentColor',
							d: 'M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z',
						},
						null,
						-1
					),
				])
		)
	)
}
const S4 = M(E4, [
		['render', P4],
		['__file', 'IconRun.vue'],
	]),
	C4 = $({
		__name: 'CodeRepl',
		props: { editable: { type: Boolean }, title: {} },
		setup(e, { expose: t }) {
			t()
			const n = ks(() => L(() => import('./CodeEditor-CJjgi5gA.js'), [])),
				o = Ie(null),
				r = Ie(null),
				{
					onRunCode: i,
					onCleanRun: s,
					firstRun: a,
					stderr: l,
					stdout: c,
					error: u,
					loaded: d,
					finished: f,
					lang: p,
					backendVersion: m,
				} = h4(o)
			function v() {
				var w, P
				i(),
					r.value &&
						((P = (w = r.value).scrollIntoView) == null ||
							P.call(w, { behavior: 'smooth', block: 'center' }))
			}
			const b = {
				Editor: n,
				replEl: o,
				outputEl: r,
				onRunCode: i,
				onCleanRun: s,
				firstRun: a,
				stderr: l,
				stdout: c,
				error: u,
				loaded: d,
				finished: f,
				lang: p,
				backendVersion: m,
				runCode: v,
				IconClose: _4,
				IconConsole: k4,
				IconRun: S4,
				Loading: Am,
			}
			return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
		},
	}),
	T4 = { ref: 'replEl', class: 'code-repl' },
	A4 = { class: 'code-repl-title' },
	L4 = { ref: 'outputEl', class: 'code-repl-pin' },
	B4 = { key: 2, class: 'code-repl-output' },
	O4 = { class: 'output-head' },
	V4 = { key: 0, class: 'output-version' },
	$4 = { key: 0, class: 'output-content' },
	I4 = { key: 0, class: 'error' },
	R4 = { key: 1, class: 'stderr' },
	D4 = { key: 2, class: 'stdout' },
	M4 = { key: 0 }
function N4(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			T4,
			[
				g('div', A4, [
					g('h4', null, D(n.title), 1),
					Ft(
						g(
							'span',
							{ class: 'icon-run', title: 'Run Code', onClick: o.runCode },
							[O(o.IconRun)],
							512
						),
						[[Ss, o.loaded && o.finished]]
					),
				]),
				n.editable
					? (h(),
					  N(
							o.Editor,
							{ key: 0 },
							{ default: T(() => [C(e.$slots, 'default', {}, void 0, !0)]), _: 3 }
					  ))
					: C(e.$slots, 'default', { key: 1 }, void 0, !0),
				g('div', L4, null, 512),
				o.firstRun
					? A('', !0)
					: (h(),
					  _('div', B4, [
							g('div', O4, [
								O(o.IconConsole, { class: 'icon-console' }),
								t[0] || (t[0] = g('span', { class: 'title' }, 'console', -1)),
								o.lang && o.backendVersion
									? (h(),
									  _('span', V4, [
											Te(' Running on: ' + D(o.lang) + ' ', 1),
											g('i', null, D(o.backendVersion), 1),
									  ]))
									: A('', !0),
								O(o.IconClose, { class: 'icon-close', onClick: o.onCleanRun }, null, 8, [
									'onClick',
								]),
							]),
							o.loaded
								? (h(),
								  _(
										'div',
										{ key: 1, class: J(['output-content', o.lang]) },
										[
											o.error ? (h(), _('p', I4, D(o.error), 1)) : A('', !0),
											o.stderr.length
												? (h(),
												  _('div', R4, [
														t[1] || (t[1] = g('h4', null, 'Stderr:', -1)),
														(h(!0),
														_(
															K,
															null,
															he(
																o.stderr,
																(s, a) => (
																	h(),
																	_(
																		'pre',
																		{
																			key: a,
																			class: J({
																				error: o.lang === 'rust' && s.startsWith('error'),
																			}),
																		},
																		D(s),
																		3
																	)
																)
															),
															128
														)),
												  ]))
												: A('', !0),
											o.stdout.length
												? (h(),
												  _('div', D4, [
														o.stderr.length ? (h(), _('h4', M4, ' Stdout: ')) : A('', !0),
														(h(!0),
														_(
															K,
															null,
															he(o.stdout, (s, a) => (h(), _('pre', { key: a }, D(s), 1))),
															128
														)),
												  ]))
												: A('', !0),
										],
										2
								  ))
								: (h(), _('div', $4, [O(o.Loading)])),
					  ])),
			],
			512
		)
	)
}
const F4 = M(C4, [
		['render', N4],
		['__scopeId', 'data-v-e32d10d4'],
		['__file', 'CodeRepl.vue'],
	]),
	xd = 'https://caniuse.pengzhanbo.cn/',
	j4 = $({
		__name: 'CanIUse',
		props: { feature: {}, past: { default: '2' }, future: { default: '1' }, meta: { default: '' } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = pn(),
				r = R('330px'),
				i = E(() => (o == null ? void 0 : o.appContext.config.globalProperties.$isDark.value)),
				s = E(
					() =>
						`${xd}${n.feature}#past=${n.past}&future=${n.future}&meta=${n.meta}&theme=${
							i.value ? 'dark' : 'light'
						}`
				)
			Fe('message', (c) => {
				const u = a(c.data),
					{ type: d, payload: f } = u
				d === 'ciu_embed' &&
					f &&
					f.feature === n.feature &&
					f.meta === n.meta &&
					(r.value = `${Math.ceil(f.height)}px`)
			})
			function a(c) {
				if (typeof c == 'string')
					try {
						return JSON.parse(c)
					} catch {
						return { type: '' }
					}
				return c
			}
			const l = { props: n, url: xd, current: o, height: r, isDark: i, source: s, parseData: a }
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	H4 = ['data-feature', 'data-meta', 'data-past', 'data-future'],
	z4 = ['src', 'title']
function q4(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{
				class: 'ciu_embed',
				'data-feature': n.feature,
				'data-meta': n.meta,
				'data-past': n.past,
				'data-future': n.future,
			},
			[
				g(
					'iframe',
					{ src: o.source, style: xe({ height: o.height }), title: `Can I use ${n.feature}` },
					null,
					12,
					z4
				),
			],
			8,
			H4
		)
	)
}
const U4 = M(j4, [
		['render', q4],
		['__file', 'CanIUse.vue'],
	]),
	W4 = $({
		__name: 'FileTreeItem',
		props: { type: {}, expanded: { type: Boolean }, empty: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = R(!!n.expanded),
				r = R()
			function i(a) {
				const l = a.target
				l.matches('.comment') || a.currentTarget === l || (o.value = !o.value)
			}
			ke(() => {
				var a
				!r.value ||
					n.type !== 'folder' ||
					(a = r.value.querySelector('.tree-node.folder')) == null ||
					a.addEventListener('click', i)
			}),
				gt(() => {
					var a
					!r.value ||
						n.type !== 'folder' ||
						(a = r.value.querySelector('.tree-node.folder')) == null ||
						a.removeEventListener('click', i)
				})
			const s = { props: n, active: o, el: r, toggle: i }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	G4 = { key: 0 }
function K4(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'li',
			{ ref: 'el', class: J(['file-tree-item', { expanded: o.active }]) },
			[
				C(e.$slots, 'default'),
				o.props.type === 'folder' && o.props.empty
					? (h(),
					  _(
							'ul',
							G4,
							t[0] ||
								(t[0] = [
									g(
										'li',
										{ class: 'file-tree-item' },
										[g('span', { class: 'tree-node file' }, [g('span', { class: 'name' }, '…')])],
										-1
									),
								])
					  ))
					: A('', !0),
			],
			2
		)
	)
}
const Y4 = M(W4, [
		['render', K4],
		['__file', 'FileTreeItem.vue'],
	]),
	Q4 = Mn({
		enhance({ router: e, app: t }) {
			t.component('Tabs', p8),
				t.component('CodeTabs', w8),
				t.component('PDFViewer', L8),
				t.component('VideoBilibili', I8),
				t.component('VideoYoutube', F8),
				t.component('ReplitViewer', W8),
				t.component('CodeSandboxViewer', e4),
				t.component('Plot', o4),
				t.component('CodeRepl', F4),
				t.component('CanIUseViewer', U4),
				t.component('FileTreeItem', Y4)
		},
	}),
	J4 = Object.freeze(
		Object.defineProperty({ __proto__: null, default: Q4 }, Symbol.toStringTag, { value: 'Module' })
	),
	X4 = Object.freeze(
		Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })
	)
/*!
 * watermark-js-plus v1.5.7
 * (c) 2022-2024 Michael Sun
 * Released under the MIT License.
 */ function Z4(e, t) {
	t === void 0 && (t = {})
	var n = t.insertAt
	if (!(typeof document > 'u')) {
		var o = document.head || document.getElementsByTagName('head')[0],
			r = document.createElement('style')
		;(r.type = 'text/css'),
			n === 'top' && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r),
			r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
	}
}
var e5 =
	'@keyframes watermark{0%{background-position:0 0}25%{background-position:100% 100%}50%{background-position:0 0}75%{background-position:100% -100%}to{background-position:0 0}}'
Z4(e5)
var nl = function (e, t) {
	return (
		(nl =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (n, o) {
					n.__proto__ = o
				}) ||
			function (n, o) {
				for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
			}),
		nl(e, t)
	)
}
function t5(e, t) {
	if (typeof t != 'function' && t !== null)
		throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
	nl(e, t)
	function n() {
		this.constructor = e
	}
	e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n())
}
var Yn = function () {
	return (
		(Yn =
			Object.assign ||
			function (t) {
				for (var n, o = 1, r = arguments.length; o < r; o++) {
					n = arguments[o]
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
				}
				return t
			}),
		Yn.apply(this, arguments)
	)
}
function xn(e, t, n, o) {
	function r(i) {
		return i instanceof n
			? i
			: new n(function (s) {
					s(i)
			  })
	}
	return new (n || (n = Promise))(function (i, s) {
		function a(u) {
			try {
				c(o.next(u))
			} catch (d) {
				s(d)
			}
		}
		function l(u) {
			try {
				c(o.throw(u))
			} catch (d) {
				s(d)
			}
		}
		function c(u) {
			u.done ? i(u.value) : r(u.value).then(a, l)
		}
		c((o = o.apply(e, t || [])).next())
	})
}
function en(e, t) {
	var n = {
			label: 0,
			sent: function () {
				if (i[0] & 1) throw i[1]
				return i[1]
			},
			trys: [],
			ops: [],
		},
		o,
		r,
		i,
		s
	return (
		(s = { next: a(0), throw: a(1), return: a(2) }),
		typeof Symbol == 'function' &&
			(s[Symbol.iterator] = function () {
				return this
			}),
		s
	)
	function a(c) {
		return function (u) {
			return l([c, u])
		}
	}
	function l(c) {
		if (o) throw new TypeError('Generator is already executing.')
		for (; s && ((s = 0), c[0] && (n = 0)), n; )
			try {
				if (
					((o = 1),
					r &&
						(i =
							c[0] & 2 ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
						!(i = i.call(r, c[1])).done)
				)
					return i
				switch (((r = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
					case 0:
					case 1:
						i = c
						break
					case 4:
						return n.label++, { value: c[1], done: !1 }
					case 5:
						n.label++, (r = c[1]), (c = [0])
						continue
					case 7:
						;(c = n.ops.pop()), n.trys.pop()
						continue
					default:
						if (
							((i = n.trys), !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2))
						) {
							n = 0
							continue
						}
						if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
							n.label = c[1]
							break
						}
						if (c[0] === 6 && n.label < i[1]) {
							;(n.label = i[1]), (i = c)
							break
						}
						if (i && n.label < i[2]) {
							;(n.label = i[2]), n.ops.push(c)
							break
						}
						i[2] && n.ops.pop(), n.trys.pop()
						continue
				}
				c = t.call(e, n)
			} catch (u) {
				;(c = [6, u]), (r = 0)
			} finally {
				o = i = 0
			}
		if (c[0] & 5) throw c[1]
		return { value: c[0] ? c[1] : void 0, done: !0 }
	}
}
var Bm = function (e) {
		return e.toDataURL('image/png', 1)
	},
	Om = function (e) {
		return typeof e == 'function'
	},
	Bt = function (e) {
		return e === void 0
	},
	n5 = function (e) {
		return typeof e == 'string'
	},
	Pd = function (e, t, n) {
		t === void 0 && (t = {}), n === void 0 && (n = 'http://www.w3.org/2000/svg')
		var o = document.createElementNS(n, e)
		for (var r in t) o.setAttribute(r, t[r])
		return o
	},
	o5 = function (e, t, n) {
		for (var o = [], r = '', i = '', s = 0, a = t.length; s < a; s++) {
			if (
				((i = t.charAt(s)),
				i ===
					`
`)
			) {
				o.push(r), (r = '')
				continue
			}
			;(r += i), e.measureText(r).width > n && (o.push(r.substring(0, r.length - 1)), (r = ''), s--)
		}
		return o.push(r), o
	},
	r5 = function (e, t) {
		return xn(void 0, void 0, void 0, function () {
			var n, o, r, i, s, a, l, c, u
			return en(this, function (d) {
				switch (d.label) {
					case 0:
						return (
							(n = Pd('svg', { xmlns: 'http://www.w3.org/2000/svg' })),
							(o = document.createElement('div')),
							o.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'),
							(o.style.cssText = `
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: `
								.concat(
									e.font,
									`;
  color: `
								)
								.concat(
									t.fontColor,
									`;
`
								)),
							(o.innerHTML = "<div class='rich-text-content'>".concat(t.content, '</div>')),
							document.body.appendChild(o),
							[4, i5(o)]
						)
					case 1:
						return (
							d.sent(),
							(r =
								(u = o.querySelector('.rich-text-content')) === null || u === void 0
									? void 0
									: u.getBoundingClientRect()),
							(i = r == null ? void 0 : r.width),
							(s = r == null ? void 0 : r.height),
							document.body.removeChild(o),
							(a = t.richTextWidth || i || t.width),
							(l = t.richTextHeight || s || t.height),
							n.setAttribute('width', a.toString()),
							n.setAttribute('height', l.toString()),
							(c = Pd('foreignObject', { width: a.toString(), height: l.toString() })),
							c.appendChild(o),
							n.appendChild(c),
							[2, { element: n, width: a, height: l }]
						)
				}
			})
		})
	}
function i5(e) {
	return xn(this, void 0, void 0, function () {
		var t, n, o, r, i
		return en(this, function (s) {
			switch (s.label) {
				case 0:
					;(t = e.querySelectorAll('img')),
						(n = function (a) {
							var l, c, u, d, f
							return en(this, function (p) {
								switch (p.label) {
									case 0:
										if (((l = a.getAttribute('src')), !l)) return [3, 6]
										p.label = 1
									case 1:
										return p.trys.push([1, 5, , 6]), [4, fetch(l)]
									case 2:
										return (c = p.sent()), [4, c.blob()]
									case 3:
										return (
											(u = p.sent()),
											[
												4,
												new Promise(function (m, v) {
													var b = new FileReader()
													;(b.onloadend = function () {
														return m(b.result)
													}),
														(b.onerror = v),
														b.readAsDataURL(u)
												}),
											]
										)
									case 4:
										return (d = p.sent()), n5(d) && a.setAttribute('src', d), [3, 6]
									case 5:
										return (
											(f = p.sent()),
											console.error('Error converting '.concat(l, ' to base64:'), f),
											[3, 6]
										)
									case 6:
										return [2]
								}
							})
						}),
						(o = 0),
						(r = Array.from(t)),
						(s.label = 1)
				case 1:
					return o < r.length ? ((i = r[o]), [5, n(i)]) : [3, 4]
				case 2:
					s.sent(), (s.label = 3)
				case 3:
					return o++, [3, 1]
				case 4:
					return [2]
			}
		})
	})
}
var s5 = function (e) {
		var t = e.outerHTML
			.replace(/<(img|br|input|hr|embed)(.*?)>/g, '<$1$2/>')
			.replace(/\n/g, '')
			.replace(/\t/g, '')
			.replace(/#/g, '%23')
		return 'data:image/svg+xml;charset=utf-8,'.concat(t)
	},
	Xe = function (e, t) {
		return Bt(e) ? t : e
	},
	Sd = function (e, t, n) {
		t === void 0 && (t = void 0), n === void 0 && (n = void 0)
		var o = new Image()
		return (
			o.setAttribute('crossOrigin', 'Anonymous'),
			!Bt(t) && (o.width = t),
			!Bt(n) && (o.height = n),
			(o.src = e),
			new Promise(function (r) {
				o.onload = function () {
					r(o)
				}
			})
		)
	},
	a5 = function (e, t, n) {
		return Array.from({ length: e }, function () {
			return new Array(t).fill(n)
		})
	},
	Cd = {
		width: 300,
		height: 300,
		rotate: 45,
		layout: 'default',
		auxiliaryLine: !1,
		translatePlacement: 'middle',
		contentType: 'text',
		content: 'hello watermark-js-plus',
		textType: 'fill',
		imageWidth: 0,
		imageHeight: 0,
		lineHeight: 30,
		zIndex: 2147483647,
		backgroundPosition: '0 0',
		backgroundRepeat: 'repeat',
		fontSize: '20px',
		fontFamily: 'sans-serif',
		fontStyle: '',
		fontVariant: '',
		fontColor: '#000',
		fontWeight: 'normal',
		filter: 'none',
		letterSpacing: '0px',
		wordSpacing: '0px',
		globalAlpha: 0.5,
		mode: 'default',
		mutationObserve: !0,
		monitorProtection: !1,
		movable: !1,
		parent: 'body',
		onSuccess: function () {},
		onBeforeDestroy: function () {},
		onDestroyed: function () {},
		onObserveError: function () {},
	},
	l5 = function (e, t, n) {
		var o = e.getContext('2d')
		if (o === null) throw new Error('get context error')
		;(o.font = ''
			.concat(t.fontStyle, ' ')
			.concat(t.fontVariant, ' ')
			.concat(t.fontWeight, ' ')
			.concat(t.fontSize, ' ')
			.concat(t.fontFamily)),
			(o.filter = t.filter),
			(o.letterSpacing = t.letterSpacing),
			(o.wordSpacing = t.wordSpacing),
			t != null && t.rotate && (t.rotate = (360 - (t.rotate % 360)) * (Math.PI / 180)),
			Bt(n.textRowMaxWidth) && (t.textRowMaxWidth = t.width)
		var r = {
			image: { rect: { width: t.imageWidth, height: t.imageHeight }, position: { x: 0, y: 0 } },
			textLine: { data: [], yOffsetValue: 0 },
			advancedStyleParams: {
				linear: { x0: 0, x1: 0 },
				radial: { x0: 0, y0: 0, r0: 0, x1: 0, y1: 0, r1: 0 },
				conic: { x: 0, y: 0, startAngle: 0 },
				pattern: {},
			},
		}
		switch (t.contentType) {
			case 'text':
				r.textLine.data = [t.content]
				break
			case 'multi-line-text':
				r.textLine.data = o5(o, t.content, t.textRowMaxWidth)
				break
		}
		var i = t.width / 2,
			s = t.height / 2,
			a = 'middle',
			l = 'center'
		switch (
			(!Bt(n == null ? void 0 : n.translateX) && !Bt(n == null ? void 0 : n.translateY)
				? ((i = n == null ? void 0 : n.translateX),
				  (s = n == null ? void 0 : n.translateY),
				  (a = 'top'),
				  (l = 'left'))
				: ((r.advancedStyleParams.linear.x0 = -t.width / 2),
				  (r.advancedStyleParams.linear.x1 = t.width / 2),
				  (r.advancedStyleParams.radial.r0 = 0),
				  (r.advancedStyleParams.radial.r1 = t.width / 2)),
			n.translatePlacement)
		) {
			case 'top':
				;(i = t.width / 2),
					(s = 0),
					(a = 'top'),
					(r.advancedStyleParams.linear.x0 = -t.width / 2),
					(r.advancedStyleParams.linear.x1 = t.width / 2),
					(r.advancedStyleParams.radial.y0 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.y1 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.y = (r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'top-start':
				;(i = 0),
					(s = 0),
					(a = 'top'),
					(l = 'start'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = t.width),
					(r.advancedStyleParams.radial.x0 = t.width / 2),
					(r.advancedStyleParams.radial.y0 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.x1 = t.width / 2),
					(r.advancedStyleParams.radial.y1 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.x = t.width / 2),
					(r.advancedStyleParams.conic.y = (r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'top-end':
				;(i = t.width),
					(s = 0),
					(a = 'top'),
					(l = 'end'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = -t.width),
					(r.advancedStyleParams.radial.x0 = -t.width / 2),
					(r.advancedStyleParams.radial.y0 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.x1 = -t.width / 2),
					(r.advancedStyleParams.radial.y1 = (r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.x = -t.width / 2),
					(r.advancedStyleParams.conic.y = (r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'bottom':
				;(i = t.width / 2),
					(s = t.height),
					(a = 'bottom'),
					(r.advancedStyleParams.linear.x0 = -t.width / 2),
					(r.advancedStyleParams.linear.x1 = t.width / 2),
					(r.advancedStyleParams.radial.y0 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.y1 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.x = 0),
					(r.advancedStyleParams.conic.y = (-r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'bottom-start':
				;(i = 0),
					(s = t.height),
					(a = 'bottom'),
					(l = 'start'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = t.width),
					(r.advancedStyleParams.radial.x0 = t.width / 2),
					(r.advancedStyleParams.radial.y0 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.x1 = t.width / 2),
					(r.advancedStyleParams.radial.y1 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.x = t.width / 2),
					(r.advancedStyleParams.conic.y = (-r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'bottom-end':
				;(i = t.width),
					(s = t.height),
					(a = 'bottom'),
					(l = 'end'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = -t.width),
					(r.advancedStyleParams.radial.x0 = -t.width / 2),
					(r.advancedStyleParams.radial.y0 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.radial.x1 = -t.width / 2),
					(r.advancedStyleParams.radial.y1 = (-r.textLine.data.length * t.lineHeight) / 2),
					(r.advancedStyleParams.conic.x = -t.width / 2),
					(r.advancedStyleParams.conic.y = (-r.textLine.data.length * t.lineHeight) / 2)
				break
			case 'left':
				;(i = 0),
					(s = t.height / 2),
					(l = 'start'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = t.width),
					(r.advancedStyleParams.radial.x0 = t.width / 2),
					(r.advancedStyleParams.radial.x1 = t.width / 2),
					(r.advancedStyleParams.conic.x = t.width / 2),
					(r.advancedStyleParams.conic.y = 0)
				break
			case 'right':
				;(i = t.width),
					(s = t.height / 2),
					(l = 'end'),
					(r.advancedStyleParams.linear.x0 = 0),
					(r.advancedStyleParams.linear.x1 = -t.width),
					(r.advancedStyleParams.radial.x0 = -t.width / 2),
					(r.advancedStyleParams.radial.x1 = -t.width / 2),
					(r.advancedStyleParams.conic.x = -t.width / 2),
					(r.advancedStyleParams.conic.y = 0)
				break
		}
		if (
			((t.translateX = i),
			(t.translateY = s),
			Bt(n == null ? void 0 : n.textBaseline) && (t.textBaseline = a),
			Bt(n == null ? void 0 : n.textAlign) && (t.textAlign = l),
			['text', 'multi-line-text'].includes(t.contentType))
		)
			switch (t.textBaseline) {
				case 'middle':
					r.textLine.yOffsetValue = ((r.textLine.data.length - 1) * t.lineHeight) / 2
					break
				case 'bottom':
				case 'alphabetic':
				case 'ideographic':
					r.textLine.yOffsetValue =
						(r.textLine.data.length - 1) * t.lineHeight + (t.lineHeight - parseInt(t.fontSize)) / 2
					break
				case 'top':
				case 'hanging':
					r.textLine.yOffsetValue = -t.lineHeight / 2 + parseInt(t.fontSize) / 2
					break
			}
		return r
	},
	Td = function (e) {
		typeof window > 'u' ||
			(e &&
				(Object.defineProperty(window, 'MutationObserver', { writable: !1, configurable: !1 }),
				Object.defineProperty(window, 'requestAnimationFrame', { writable: !1, configurable: !1 })))
	},
	fs = (function () {
		function e(t, n) {
			;(this.props = t),
				(this.options = n),
				(this.canvas = e.createCanvas(this.options.width, this.options.height)),
				(this.recommendOptions = l5(this.canvas, this.options, this.props))
		}
		return (
			(e.createCanvas = function (t, n) {
				var o,
					r = window.devicePixelRatio || 1,
					i = document.createElement('canvas')
				return (
					(i.width = t * r),
					(i.height = n * r),
					(i.style.width = ''.concat(t, 'px')),
					(i.style.height = ''.concat(n, 'px')),
					(o = i.getContext('2d')) === null || o === void 0 || o.setTransform(r, 0, 0, r, 0, 0),
					i
				)
			}),
			(e.clearCanvas = function (t) {
				var n = t.getContext('2d')
				if (n === null) throw new Error('get context error')
				n.restore(), n.resetTransform(), n.clearRect(0, 0, t.width, t.height)
				var o = window.devicePixelRatio || 1
				n.setTransform(o, 0, 0, o, 0, 0)
			}),
			(e.prototype.getCanvas = function () {
				return this.canvas
			}),
			(e.prototype.clear = function () {
				e.clearCanvas(this.canvas)
			}),
			(e.prototype.draw = function () {
				var t = this,
					n = this.canvas.getContext('2d')
				if (n === null) throw new Error('get context error')
				return (
					this.options.auxiliaryLine &&
						(n.beginPath(),
						n.rect(0, 0, this.options.width, this.options.height),
						(n.lineWidth = 1),
						(n.strokeStyle = '#000'),
						n.stroke(),
						n.closePath(),
						n.beginPath(),
						n.rect(this.options.translateX, this.options.translateY, 1, 1),
						(n.lineWidth = 1),
						(n.strokeStyle = '#f00'),
						n.stroke(),
						n.closePath()),
					this.setStyle(n),
					n.save(),
					n.translate(this.options.translateX, this.options.translateY),
					n.rotate(this.options.rotate),
					new Promise(function (o) {
						switch (t.options.contentType) {
							case 'text':
								t.drawText(n, o)
								break
							case 'image':
								t.drawImage(n, o)
								break
							case 'multi-line-text':
								t.drawMultiLineText(n, o)
								break
							case 'rich-text':
								t.drawRichText(n, o)
								break
						}
					})
				)
			}),
			(e.prototype.setStyle = function (t) {
				var n,
					o = 'fillStyle'
				this.options.textType === 'stroke' && (o = 'strokeStyle')
				var r = this.options.fontColor
				if (!((n = this.options) === null || n === void 0) && n.advancedStyle)
					switch (this.options.advancedStyle.type) {
						case 'linear':
							r = this.createLinearGradient(t)
							break
						case 'radial':
							r = this.createRadialGradient(t)
							break
						case 'conic':
							r = this.createConicGradient(t)
							break
						case 'pattern':
							r = this.createPattern(t)
							break
					}
				t[o] && r && (t[o] = r),
					this.options.textAlign && (t.textAlign = this.options.textAlign),
					this.options.textBaseline && (t.textBaseline = this.options.textBaseline),
					(t.globalAlpha = this.options.globalAlpha),
					this.options.shadowStyle &&
						((t.shadowBlur = Xe(this.options.shadowStyle.shadowBlur, 0)),
						(t.shadowColor = Xe(this.options.shadowStyle.shadowColor, '#00000000')),
						(t.shadowOffsetX = Xe(this.options.shadowStyle.shadowOffsetX, 0)),
						(t.shadowOffsetY = Xe(this.options.shadowStyle.shadowOffsetY, 0))),
					Om(this.options.extraDrawFunc) && this.options.extraDrawFunc(t)
			}),
			(e.prototype.createLinearGradient = function (t) {
				var n,
					o,
					r,
					i,
					s,
					a,
					l,
					c,
					u,
					d,
					f,
					p,
					m,
					v,
					b,
					w = t.createLinearGradient(
						Xe(
							(r =
								(o =
									(n = this.options.advancedStyle) === null || n === void 0 ? void 0 : n.params) ===
									null || o === void 0
									? void 0
									: o.linear) === null || r === void 0
								? void 0
								: r.x0,
							this.recommendOptions.advancedStyleParams.linear.x0
						),
						Xe(
							(a =
								(s =
									(i = this.options.advancedStyle) === null || i === void 0 ? void 0 : i.params) ===
									null || s === void 0
									? void 0
									: s.linear) === null || a === void 0
								? void 0
								: a.y0,
							0
						),
						Xe(
							(u =
								(c =
									(l = this.options.advancedStyle) === null || l === void 0 ? void 0 : l.params) ===
									null || c === void 0
									? void 0
									: c.linear) === null || u === void 0
								? void 0
								: u.x1,
							this.recommendOptions.advancedStyleParams.linear.x1
						),
						Xe(
							(p =
								(f =
									(d = this.options.advancedStyle) === null || d === void 0 ? void 0 : d.params) ===
									null || f === void 0
									? void 0
									: f.linear) === null || p === void 0
								? void 0
								: p.y1,
							0
						)
					)
				return (
					(b =
						(v = (m = this.options) === null || m === void 0 ? void 0 : m.advancedStyle) === null ||
						v === void 0
							? void 0
							: v.colorStops) === null ||
						b === void 0 ||
						b.forEach(function (P) {
							w.addColorStop(P.offset, P.color)
						}),
					w
				)
			}),
			(e.prototype.createConicGradient = function (t) {
				var n,
					o,
					r,
					i,
					s,
					a,
					l,
					c,
					u,
					d,
					f,
					p,
					m,
					v,
					b,
					w = t.createConicGradient(
						Xe(
							(i =
								(r =
									(o = (n = this.options) === null || n === void 0 ? void 0 : n.advancedStyle) ===
										null || o === void 0
										? void 0
										: o.params) === null || r === void 0
									? void 0
									: r.conic) === null || i === void 0
								? void 0
								: i.startAngle,
							0
						),
						Xe(
							(c =
								(l =
									(a = (s = this.options) === null || s === void 0 ? void 0 : s.advancedStyle) ===
										null || a === void 0
										? void 0
										: a.params) === null || l === void 0
									? void 0
									: l.conic) === null || c === void 0
								? void 0
								: c.x,
							this.recommendOptions.advancedStyleParams.conic.x
						),
						Xe(
							(p =
								(f =
									(d = (u = this.options) === null || u === void 0 ? void 0 : u.advancedStyle) ===
										null || d === void 0
										? void 0
										: d.params) === null || f === void 0
									? void 0
									: f.conic) === null || p === void 0
								? void 0
								: p.y,
							this.recommendOptions.advancedStyleParams.conic.y
						)
					)
				return (
					(b =
						(v = (m = this.options) === null || m === void 0 ? void 0 : m.advancedStyle) === null ||
						v === void 0
							? void 0
							: v.colorStops) === null ||
						b === void 0 ||
						b.forEach(function (P) {
							w.addColorStop(P.offset, P.color)
						}),
					w
				)
			}),
			(e.prototype.createRadialGradient = function (t) {
				var n,
					o,
					r,
					i,
					s,
					a,
					l,
					c,
					u,
					d,
					f,
					p,
					m,
					v,
					b,
					w,
					P,
					y,
					S,
					I,
					j,
					U,
					Z,
					q,
					V,
					W,
					z,
					oe = t.createRadialGradient(
						Xe(
							(i =
								(r =
									(o = (n = this.options) === null || n === void 0 ? void 0 : n.advancedStyle) ===
										null || o === void 0
										? void 0
										: o.params) === null || r === void 0
									? void 0
									: r.radial) === null || i === void 0
								? void 0
								: i.x0,
							this.recommendOptions.advancedStyleParams.radial.x0
						),
						Xe(
							(c =
								(l =
									(a = (s = this.options) === null || s === void 0 ? void 0 : s.advancedStyle) ===
										null || a === void 0
										? void 0
										: a.params) === null || l === void 0
									? void 0
									: l.radial) === null || c === void 0
								? void 0
								: c.y0,
							this.recommendOptions.advancedStyleParams.radial.y0
						),
						Xe(
							(p =
								(f =
									(d = (u = this.options) === null || u === void 0 ? void 0 : u.advancedStyle) ===
										null || d === void 0
										? void 0
										: d.params) === null || f === void 0
									? void 0
									: f.radial) === null || p === void 0
								? void 0
								: p.r0,
							this.recommendOptions.advancedStyleParams.radial.r0
						),
						Xe(
							(w =
								(b =
									(v = (m = this.options) === null || m === void 0 ? void 0 : m.advancedStyle) ===
										null || v === void 0
										? void 0
										: v.params) === null || b === void 0
									? void 0
									: b.radial) === null || w === void 0
								? void 0
								: w.x1,
							this.recommendOptions.advancedStyleParams.radial.x1
						),
						Xe(
							(I =
								(S =
									(y = (P = this.options) === null || P === void 0 ? void 0 : P.advancedStyle) ===
										null || y === void 0
										? void 0
										: y.params) === null || S === void 0
									? void 0
									: S.radial) === null || I === void 0
								? void 0
								: I.y1,
							this.recommendOptions.advancedStyleParams.radial.y1
						),
						Xe(
							(q =
								(Z =
									(U = (j = this.options) === null || j === void 0 ? void 0 : j.advancedStyle) ===
										null || U === void 0
										? void 0
										: U.params) === null || Z === void 0
									? void 0
									: Z.radial) === null || q === void 0
								? void 0
								: q.r1,
							this.recommendOptions.advancedStyleParams.radial.r1
						)
					)
				return (
					(z =
						(W = (V = this.options) === null || V === void 0 ? void 0 : V.advancedStyle) === null ||
						W === void 0
							? void 0
							: W.colorStops) === null ||
						z === void 0 ||
						z.forEach(function (me) {
							oe.addColorStop(me.offset, me.color)
						}),
					oe
				)
			}),
			(e.prototype.createPattern = function (t) {
				var n, o, r, i, s, a, l, c
				return t.createPattern(
					(i =
						(r =
							(o = (n = this.options) === null || n === void 0 ? void 0 : n.advancedStyle) ===
								null || o === void 0
								? void 0
								: o.params) === null || r === void 0
							? void 0
							: r.pattern) === null || i === void 0
						? void 0
						: i.image,
					((c =
						(l =
							(a = (s = this.options) === null || s === void 0 ? void 0 : s.advancedStyle) ===
								null || a === void 0
								? void 0
								: a.params) === null || l === void 0
							? void 0
							: l.pattern) === null || c === void 0
						? void 0
						: c.repetition) || ''
				)
			}),
			(e.prototype.setText = function (t, n) {
				var o = 'fillText'
				this.options.textType === 'stroke' && (o = 'strokeText'),
					t[o] && t[o](n.text, n.x, n.y, n.maxWidth)
			}),
			(e.prototype.drawText = function (t, n) {
				this.setText(t, {
					text: this.options.content,
					x: 0,
					y: 0 - this.recommendOptions.textLine.yOffsetValue,
					maxWidth: this.options.textRowMaxWidth || this.options.width,
				}),
					n(t.canvas)
			}),
			(e.prototype.drawImage = function (t, n) {
				var o = this
				Sd(this.options.image).then(function (r) {
					var i = o.getImageRect(r),
						s = i.width,
						a = i.height,
						l = o.getDrawImagePosition(s, a)
					t.drawImage(r, l.x, l.y, s, a), n(t.canvas)
				})
			}),
			(e.prototype.drawMultiLineText = function (t, n) {
				var o = this,
					r = this.recommendOptions.textLine.data,
					i = this.recommendOptions.textLine.yOffsetValue
				r.forEach(function (s, a) {
					o.setText(t, {
						text: s,
						x: 0,
						y: o.options.lineHeight * a - i,
						maxWidth: o.options.textRowMaxWidth || o.options.width,
					})
				}),
					n(t.canvas)
			}),
			(e.prototype.drawRichText = function (t, n) {
				return xn(this, void 0, void 0, function () {
					var o,
						r = this
					return en(this, function (i) {
						switch (i.label) {
							case 0:
								return [4, r5(t, this.options)]
							case 1:
								return (
									(o = i.sent()),
									Sd(s5(o.element), o.width, o.height).then(function (s) {
										var a = r.getDrawImagePosition(s.width, s.height)
										t.drawImage(s, a.x, a.y, s.width, s.height), n(t.canvas)
									}),
									[2]
								)
						}
					})
				})
			}),
			(e.prototype.getImageRect = function (t) {
				var n = { width: this.options.imageWidth || 0, height: this.options.imageHeight || 0 }
				switch (!0) {
					case n.width !== 0 && n.height === 0:
						n.height = (n.width * t.height) / t.width
						break
					case n.width === 0 && n.height !== 0:
						n.width = (n.height * t.width) / t.height
						break
					case n.width === 0 && n.height === 0:
						;(n.width = t.width), (n.height = t.height)
						break
				}
				return n
			}),
			(e.prototype.getDrawImagePosition = function (t, n) {
				var o,
					r,
					i = { x: -t / 2, y: -n / 2 }
				switch (this.options.translatePlacement) {
					case 'top':
						;(i.x = -t / 2), (i.y = 0)
						break
					case 'top-start':
						;(i.x = 0), (i.y = 0)
						break
					case 'top-end':
						;(i.x = -t), (i.y = 0)
						break
					case 'bottom':
						;(i.x = -t / 2), (i.y = -n)
						break
					case 'bottom-start':
						;(i.x = 0), (i.y = -n)
						break
					case 'bottom-end':
						;(i.x = -t), (i.y = -n)
						break
					case 'left':
						;(i.x = 0), (i.y = -n / 2)
						break
					case 'right':
						;(i.x = -t), (i.y = -n / 2)
						break
				}
				return (
					!Bt((o = this.props) === null || o === void 0 ? void 0 : o.translateX) && (i.x = 0),
					!Bt((r = this.props) === null || r === void 0 ? void 0 : r.translateY) && (i.y = 0),
					i
				)
			}),
			e
		)
	})(),
	c5 = (function () {
		function e(t, n) {
			var o, r, i, s
			;(this.options = t),
				(this.partialWidth = this.options.width),
				(this.partialHeight = this.options.height),
				(this.rows =
					((o = this.options.gridLayoutOptions) === null || o === void 0 ? void 0 : o.rows) || 1),
				(this.cols =
					((r = this.options.gridLayoutOptions) === null || r === void 0 ? void 0 : r.cols) || 1),
				(this.matrix =
					((i = this.options.gridLayoutOptions) === null || i === void 0 ? void 0 : i.matrix) ||
					a5(this.rows, this.cols, 1)),
				(this.gap = ((s = this.options.gridLayoutOptions) === null || s === void 0
					? void 0
					: s.gap) || [0, 0]),
				(this.partialCanvas = n)
		}
		return (
			(e.prototype.draw = function () {
				var t,
					n,
					o,
					r,
					i,
					s,
					a,
					l,
					c = fs.createCanvas(
						((t = this.options.gridLayoutOptions) === null || t === void 0 ? void 0 : t.width) ||
							this.partialWidth * this.cols + this.gap[0] * this.cols,
						((n = this.options.gridLayoutOptions) === null || n === void 0 ? void 0 : n.height) ||
							this.partialHeight * this.rows + this.gap[1] * this.rows
					),
					u = c.getContext('2d')
				!((o = this.options.gridLayoutOptions) === null || o === void 0) &&
					o.backgroundImage &&
					(u == null ||
						u.drawImage(
							(r = this.options.gridLayoutOptions) === null || r === void 0
								? void 0
								: r.backgroundImage,
							0,
							0,
							(i = this.options.gridLayoutOptions) === null || i === void 0 ? void 0 : i.width,
							(s = this.options.gridLayoutOptions) === null || s === void 0 ? void 0 : s.height
						))
				for (var d = 0; d < this.rows; d++)
					for (var f = 0; f < this.cols; f++)
						!(
							(l = (a = this.matrix) === null || a === void 0 ? void 0 : a[d]) === null ||
							l === void 0
						) &&
							l[f] &&
							(u == null ||
								u.drawImage(
									this.partialCanvas,
									this.partialWidth * f + this.gap[0] * f,
									this.partialHeight * d + this.gap[1] * d,
									this.partialWidth,
									this.partialHeight
								))
				return c
			}),
			e
		)
	})(),
	u5 = function (e, t) {
		switch (e.layout) {
			case 'grid':
				return new c5(e, t).draw()
			default:
				return t
		}
	},
	d5 = function (e) {
		var t, n, o
		switch (e.layout) {
			case 'grid': {
				var r = ((t = e.gridLayoutOptions) === null || t === void 0 ? void 0 : t.cols) || 1,
					i = ((n = e.gridLayoutOptions) === null || n === void 0 ? void 0 : n.rows) || 1,
					s = ((o = e.gridLayoutOptions) === null || o === void 0 ? void 0 : o.gap) || [0, 0]
				return [e.width * r + s[0] * r, e.height * i + s[1] * i]
			}
			default:
				return [e.width, e.height]
		}
	},
	Vm = (function () {
		function e(t) {
			t === void 0 && (t = {}),
				(this.parentElement = document.body),
				(this.isCreating = !1),
				(this.props = t),
				(this.options = Yn(Yn({}, Cd), t)),
				this.changeParentElement(this.options.parent),
				(this.watermarkCanvas = new fs(this.props, this.options)),
				Td(this.options.monitorProtection)
		}
		return (
			(e.prototype.changeOptions = function () {
				return xn(this, arguments, void 0, function (t, n, o) {
					return (
						t === void 0 && (t = {}),
						n === void 0 && (n = 'overwrite'),
						o === void 0 && (o = !0),
						en(this, function (r) {
							switch (r.label) {
								case 0:
									return (
										this.initConfigData(t, n),
										Td(this.options.monitorProtection),
										o ? (this.remove(), [4, this.create()]) : [3, 2]
									)
								case 1:
									r.sent(), (r.label = 2)
								case 2:
									return [2]
							}
						})
					)
				})
			}),
			(e.prototype.create = function () {
				return xn(this, void 0, void 0, function () {
					var t, n, o, r, i, s, a, l, c, u, d, f
					return en(this, function (p) {
						switch (p.label) {
							case 0:
								return this.isCreating
									? [2]
									: ((this.isCreating = !0),
									  this.validateUnique()
											? this.validateContent()
												? ((t = Bt(this.watermarkDom)),
												  [
														4,
														(s = this.watermarkCanvas) === null || s === void 0 ? void 0 : s.draw(),
												  ])
												: ((this.isCreating = !1), [2])
											: ((this.isCreating = !1), [2]))
							case 1:
								if (
									(p.sent(),
									(this.layoutCanvas = u5(
										this.options,
										(a = this.watermarkCanvas) === null || a === void 0 ? void 0 : a.getCanvas()
									)),
									(n = Bm(this.layoutCanvas)),
									(l = this.watermarkCanvas) === null || l === void 0 || l.clear(),
									(this.watermarkDom = document.createElement('div')),
									(o = document.createElement('div')),
									(this.watermarkDom.__WATERMARK__ = 'watermark'),
									(this.watermarkDom.__WATERMARK__INSTANCE__ = this),
									(r = this.checkParentElementType()),
									(this.watermarkDom.style.cssText = `
      z-index:`
										.concat(
											this.options.zIndex,
											`!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      `
										)
										.concat(
											r === 'custom'
												? 'top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;'
												: 'position:relative!important;',
											`
    `
										)),
									(i = d5(this.options)),
									(o.style.cssText = `
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:`
										.concat(
											r === 'root' ? 'fixed' : 'absolute',
											`!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:`
										)
										.concat(this.options.zIndex, '!important;background-image:url(')
										.concat(n, ')!important;background-repeat:')
										.concat(
											this.options.backgroundRepeat,
											`!important;
      background-size:`
										)
										.concat(i[0], 'px ')
										.concat(i[1], 'px!important;background-position:')
										.concat(
											this.options.backgroundPosition,
											`;
      `
										)
										.concat(
											this.options.movable
												? 'animation: 200s ease 0s infinite normal none running watermark !important;'
												: '',
											`
    `
										)),
									this.watermarkDom.appendChild(o),
									this.parentElement.appendChild(this.watermarkDom),
									this.options.mutationObserve)
								)
									try {
										this.bindMutationObserve()
									} catch {
										;(u = (c = this.options).onObserveError) === null || u === void 0 || u.call(c)
									}
								return (
									t && ((f = (d = this.options).onSuccess) === null || f === void 0 || f.call(d)),
									(this.isCreating = !1),
									[2]
								)
						}
					})
				})
			}),
			(e.prototype.destroy = function () {
				this.remove(), (this.watermarkDom = void 0)
			}),
			(e.prototype.check = function () {
				return xn(this, void 0, void 0, function () {
					return en(this, function (t) {
						return [2, this.parentElement.contains(this.watermarkDom)]
					})
				})
			}),
			(e.prototype.remove = function () {
				var t, n, o, r, i, s, a, l
				;(n = (t = this.options).onBeforeDestroy) === null || n === void 0 || n.call(t),
					(o = this.observer) === null || o === void 0 || o.disconnect(),
					(r = this.parentObserve) === null || r === void 0 || r.disconnect(),
					this.unbindCheckWatermarkElementEvent(),
					(s = (i = this.watermarkDom) === null || i === void 0 ? void 0 : i.parentNode) === null ||
						s === void 0 ||
						s.removeChild(this.watermarkDom),
					(l = (a = this.options).onDestroyed) === null || l === void 0 || l.call(a)
			}),
			(e.prototype.initConfigData = function (t, n) {
				var o = this
				n === void 0 && (n = 'overwrite'),
					n === 'append'
						? Object.keys(t).forEach(function (r) {
								o.props && (o.props[r] = t[r])
						  })
						: (this.props = t),
					(this.options = Yn(Yn({}, Cd), this.props)),
					this.changeParentElement(this.options.parent),
					(this.watermarkCanvas = new fs(this.props, this.options))
			}),
			(e.prototype.changeParentElement = function (t) {
				if (typeof t == 'string') {
					var n = document.querySelector(t)
					n && (this.parentElement = n)
				} else this.parentElement = t
				this.parentElement ||
					console.error('[WatermarkJsPlus]: please pass a valid parent element.')
			}),
			(e.prototype.validateUnique = function () {
				var t = !0
				return (
					Array.from(this.parentElement.childNodes).forEach(function (n) {
						t && Object.hasOwnProperty.call(n, '__WATERMARK__') && (t = !1)
					}),
					t
				)
			}),
			(e.prototype.validateContent = function () {
				switch (this.options.contentType) {
					case 'image':
						return Object.hasOwnProperty.call(this.options, 'image')
					case 'multi-line-text':
					case 'rich-text':
					case 'text':
						return this.options.content.length > 0
				}
			}),
			(e.prototype.checkParentElementType = function () {
				return ['html', 'body'].includes(this.parentElement.tagName.toLocaleLowerCase())
					? 'root'
					: 'custom'
			}),
			(e.prototype.checkWatermarkElement = function () {
				return xn(this, void 0, void 0, function () {
					return en(this, function (t) {
						switch (t.label) {
							case 0:
								return this.parentElement.contains(this.watermarkDom)
									? [3, 2]
									: (this.remove(), [4, this.create()])
							case 1:
								t.sent(), (t.label = 2)
							case 2:
								return this.bindCheckWatermarkElementEvent(), [2]
						}
					})
				})
			}),
			(e.prototype.bindMutationObserve = function () {
				var t = this
				this.watermarkDom &&
					(this.bindCheckWatermarkElementEvent(),
					(this.observer = new MutationObserver(function (n) {
						return xn(t, void 0, void 0, function () {
							return en(this, function (o) {
								switch (o.label) {
									case 0:
										return n.length > 0 ? (this.remove(), [4, this.create()]) : [3, 2]
									case 1:
										o.sent(), (o.label = 2)
									case 2:
										return [2]
								}
							})
						})
					})),
					this.observer.observe(this.watermarkDom, {
						attributes: !0,
						childList: !0,
						subtree: !0,
						characterData: !0,
					}),
					(this.parentObserve = new MutationObserver(function (n) {
						return xn(t, void 0, void 0, function () {
							var o, r, i, s
							return en(this, function (a) {
								switch (a.label) {
									case 0:
										;(o = 0), (r = n), (a.label = 1)
									case 1:
										return o < r.length
											? ((i = r[o]),
											  (i == null ? void 0 : i.target) === this.watermarkDom ||
											  ((s = i == null ? void 0 : i.removedNodes) === null || s === void 0
													? void 0
													: s[0]) === this.watermarkDom ||
											  (i.type === 'childList' &&
													i.target === this.parentElement &&
													i.target.lastChild !== this.watermarkDom)
													? (this.remove(), [4, this.create()])
													: [3, 3])
											: [3, 4]
									case 2:
										a.sent(), (a.label = 3)
									case 3:
										return o++, [3, 1]
									case 4:
										return [2]
								}
							})
						})
					})),
					this.parentObserve.observe(this.parentElement, {
						attributes: !0,
						childList: !0,
						subtree: !0,
						characterData: !0,
					}))
			}),
			(e.prototype.bindCheckWatermarkElementEvent = function () {
				this.unbindCheckWatermarkElementEvent(),
					(this.checkWatermarkElementRequestID = requestAnimationFrame(
						this.checkWatermarkElement.bind(this)
					))
			}),
			(e.prototype.unbindCheckWatermarkElementEvent = function () {
				Bt(this.checkWatermarkElementRequestID) ||
					cancelAnimationFrame(this.checkWatermarkElementRequestID)
			}),
			e
		)
	})()
;(function (e) {
	t5(t, e)
	function t(n) {
		n === void 0 && (n = {})
		var o = { globalAlpha: 0.005, mode: 'blind' }
		return e.call(this, Yn(Yn({}, n), o)) || this
	}
	return (
		(t.decode = function (n) {
			var o = n.url,
				r = o === void 0 ? '' : o,
				i = n.fillColor,
				s = i === void 0 ? '#000' : i,
				a = n.compositeOperation,
				l = a === void 0 ? 'color-burn' : a,
				c = n.mode,
				u = c === void 0 ? 'canvas' : c,
				d = n.compositeTimes,
				f = d === void 0 ? 3 : d,
				p = n.onSuccess
			if (r && u === 'canvas') {
				var m = new Image()
				;(m.src = r),
					m.addEventListener('load', function () {
						var v = m.width,
							b = m.height,
							w = fs.createCanvas(v, b),
							P = w.getContext('2d')
						if (!P) throw new Error('get context error')
						P.drawImage(m, 0, 0, v, b), (P.globalCompositeOperation = l), (P.fillStyle = s)
						for (var y = 0; y < f; y++) P.fillRect(0, 0, v, b)
						var S = Bm(w)
						Om(p) && (p == null || p(S))
					})
			}
		}),
		t
	)
})(Vm)
const f5 = (e, t, n = 500) => {
		const o = Th(),
			r = Ah()
		ke(() => {
			const i = new Vm(),
				s = (a) => {
					var c
					const l = {
						content: r.value.title,
						fontColor: '#76747f',
						globalAlpha: a.mode === 'blind' ? 0.005 : 0.165,
						...a,
					}
					;(c = l.image) != null && c.startsWith('/') && (l.image = et(l.image)),
						Et(t) && i.changeOptions(l)
				}
			ve(
				[t, o],
				() =>
					ht(() => {
						t.value
							? cr(n).then(() => {
									s(Et(e))
							  })
							: i.destroy()
					}),
				{ immediate: !0 }
			),
				He(e) && ve(e, s)
		})
	},
	$m = Symbol(''),
	zi = R({}),
	p5 = (e) => {
		He(e)
			? ve(
					e,
					(t) => {
						zi.value = t
					},
					{ immediate: !0 }
			  )
			: ih(e)
			? ve(e, (t) => {
					zi.value = t
			  })
			: (zi.value = e)
	},
	h5 = (e) => {
		const t = qe($m),
			n = ar()
		return E(() => {
			const { watermark: o } = n.value
			return { ...Et(e), ...t.value, ...(Kt(o) ? o : {}) }
		})
	},
	m5 = (e) => {
		e.provide($m, zi)
	}
var v5 = { content: 'vuepress-theme-plume' },
	g5 = Mn({
		enhance({ app: e }) {
			m5(e)
		},
		setup() {
			const e = ar(),
				t = h5(
					E(() => {
						const { watermark: o } = e.value
						return Kt(o) ? {} : v5
					})
				),
				n = E(() => {
					const { watermark: o } = e.value
					return !!(o ?? !1)
				})
			f5(t, n, 300)
		},
	})
const _5 = Object.freeze(
	Object.defineProperty({ __proto__: null, default: g5 }, Symbol.toStringTag, { value: 'Module' })
)
var b5 = {
	provider: 'Giscus',
	comment: !0,
	repo: 'pengzhanbo/vuepress-theme-plume',
	repoId: 'R_kgDOG_ebNA',
	category: 'docs-comment',
	categoryId: 'DIC_kwDOG_ebNM4Cd0uF',
	mapping: 'pathname',
	reactionsEnabled: !0,
	inputPosition: 'top',
	darkTheme: 'dark_protanopia',
	lightTheme: 'light_protanopia',
}
const y5 = b5,
	w5 = R(y5),
	Im = Symbol(''),
	Rm = () => qe(Im),
	k5 = Rm,
	E5 = (e) => {
		e.provide(Im, w5)
	},
	Ad = [
		'ar',
		'ca',
		'da',
		'de',
		'en',
		'eo',
		'es',
		'fa',
		'fr',
		'he',
		'id',
		'it',
		'ja',
		'ko',
		'nl',
		'pl',
		'pt',
		'ro',
		'ru',
		'th',
		'tr',
		'uk',
		'uz',
		'vi',
		'zh-CN',
		'zh-TW',
	]
var x5 = $({
		name: 'GiscusComment',
		props: { identifier: { type: String, required: !0 }, darkmode: Boolean },
		setup(e) {
			const t = k5(),
				n = oo(),
				o = E(() => !!(t.value.repo && t.value.repoId && t.value.category && t.value.categoryId)),
				r = R(!1),
				i = E(() => {
					if (Ad.includes(n.value)) return n.value
					const a = n.value.split('-')[0]
					return Ad.includes(a) ? a : 'en'
				}),
				s = E(() => ({
					repo: t.value.repo,
					repoId: t.value.repoId,
					category: t.value.category,
					categoryId: t.value.categoryId,
					lang: i.value,
					theme: e.darkmode ? t.value.darkTheme || 'dark' : t.value.lightTheme || 'light',
					mapping: t.value.mapping || 'pathname',
					term: e.identifier,
					inputPosition: t.value.inputPosition || 'top',
					reactionsEnabled: t.value.reactionsEnabled === !1 ? '0' : '1',
					strict: t.value.strict === !1 ? '0' : '1',
					loading: t.value.lazyLoading === !1 ? 'eager' : 'lazy',
					emitMetadata: '0',
				}))
			return (
				ke(async () => {
					await L(() => import('./giscus-C26m1eXs.js'), []), (r.value = !0)
				}),
				() =>
					o.value
						? ce(
								'div',
								{
									id: 'comment',
									class: ['giscus-wrapper', { 'input-top': t.value.inputPosition !== 'bottom' }],
								},
								r.value ? ce('giscus-widget', s.value) : ce(xo)
						  )
						: null
			)
		},
	}),
	P5 = $({
		name: 'CommentService',
		props: { darkmode: Boolean },
		setup(e) {
			const t = Rm(),
				n = ql(),
				o = ar(),
				r = E(() => o.value.comment ?? t.value.comment !== !1)
			return () =>
				ce(x5, {
					class: 'vp-comment',
					'vp-comment': '',
					identifier: o.value.commentID ?? n.value.path,
					darkmode: e.darkmode,
					style: { display: r.value ? 'block' : 'none' },
				})
		},
	}),
	S5 = Mn({
		enhance: ({ app: e }) => {
			E5(e), e.component('CommentService', P5)
		},
	})
const C5 = Object.freeze(
		Object.defineProperty({ __proto__: null, default: S5 }, Symbol.toStringTag, { value: 'Module' })
	),
	T5 = {
		'/': {
			'/blog/guide/': {
				items: [
					{
						text: '从这里开始',
						collapsed: !1,
						icon: 'carbon:idea',
						items: [
							'介绍',
							'安装与使用',
							'项目结构',
							'编写文章',
							'博客',
							'知识笔记',
							'国际化',
							'部署',
							'构建优化',
						],
					},
					{
						text: '写作',
						icon: 'fluent-mdl2:edit-create',
						collapsed: !1,
						items: [
							{
								text: 'markdown',
								icon: 'material-symbols:markdown-outline',
								prefix: 'markdown',
								collapsed: !0,
								items: [
									'基础',
									'扩展',
									'图标',
									'卡片',
									'步骤',
									'文件树',
									'选项组',
									'隐秘文本',
									'示例容器',
									'npm-to',
									'caniuse',
									'导入文件',
								],
							},
							{
								text: '代码块',
								prefix: '代码',
								icon: 'ph:code-bold',
								collapsed: !0,
								items: ['介绍', '特性支持', '代码组', '导入代码', 'twoslash'],
							},
							{
								text: '代码演示',
								prefix: '代码演示',
								icon: 'carbon:demo',
								collapsed: !0,
								items: [
									'前端',
									'rust',
									'golang',
									'kotlin',
									'codepen',
									'jsFiddle',
									'codeSandbox',
									'replit',
								],
							},
							{
								text: '图表',
								icon: 'mdi:chart-line',
								prefix: '图表',
								collapsed: !0,
								items: ['chart', 'echarts', 'mermaid', 'flowchart'],
							},
							{
								text: '资源嵌入',
								icon: 'dashicons:embed-video',
								prefix: '嵌入',
								collapsed: !0,
								items: ['pdf', 'bilibili', 'youtube'],
							},
						],
					},
					{
						text: '功能',
						icon: 'lucide:box',
						collapsed: !1,
						prefix: '功能',
						items: [
							'图标',
							'代码复制',
							'内容搜索',
							'评论',
							'公告板',
							'加密',
							'文章贡献者',
							'文章变更历史',
							'文章版权所有',
							'文章水印',
							'友情链接页',
							'seo',
							'sitemap',
						],
					},
					{
						text: '组件',
						prefix: '组件',
						icon: 'uiw:component',
						collapsed: !1,
						items: [
							'徽章',
							'图标',
							'隐秘文本',
							'卡片',
							'链接卡片',
							'图片卡片',
							'卡片容器',
							'瀑布流容器',
							'首页布局容器',
							'repoCard',
							'npmBadge',
							'轮播图',
						],
					},
					{
						text: '自定义',
						icon: 'material-symbols:dashboard-customize-outline-rounded',
						collapsed: !1,
						items: ['自定义首页', '自定义样式', '布局插槽', '组件覆写'],
					},
					{ text: 'API', icon: 'mdi:api', collapsed: !1, items: ['api-客户端', 'api-node'] },
				],
				prefix: '/notes/theme/blog/guide/',
			},
			'/config/': {
				items: [
					{
						text: '配置',
						collapsed: !1,
						items: ['配置说明', '主题配置', '多语言配置', '导航栏配置', 'notes配置', '侧边栏配置'],
					},
					{
						text: 'frontmatter',
						prefix: 'frontmatter',
						collapsed: !1,
						items: ['basic', 'home', 'post', 'friend'],
					},
					{
						text: '内置插件',
						prefix: 'plugins',
						collapsed: !1,
						items: [
							'',
							'代码高亮',
							'搜索',
							'阅读统计',
							'markdown增强',
							'markdownPower',
							'markdownImage',
							'markdownMath',
							'markdownInclude',
							'水印',
						],
					},
				],
				prefix: '/notes/theme/config/',
			},
			'/tools/': {
				items: [
					{
						text: '工具',
						icon: 'tabler:tools',
						items: ['custom-theme', 'home-hero-tint-plate', 'caniuse'],
					},
				],
				prefix: '/notes/tools/',
			},
			'/frontend/': {
				items: [
					{
						text: 'VUE常用',
						collapsed: !1,
						items: [
							'父组件传参给子组件',
							'子组件传参给父组件',
							'父子组件之间传递函数',
							'同级组件之间的通信（兄弟组件）',
							'组件跨层级传递',
							'使用 ref 和 defineExpose 让父组件访问子组件方法',
							'插槽',
						],
					},
				],
				prefix: '/notes/theme/frontend/',
			},
		},
		__auto__: {},
		__home__: {},
	}
function A5(e) {
	return !It(e) || /github\.com/.test(e)
		? 'GitHub'
		: /bitbucket\.org/.test(e)
		? 'Bitbucket'
		: /gitlab\.com/.test(e)
		? 'GitLab'
		: /gitee\.com/.test(e)
		? 'Gitee'
		: null
}
var L5 = {
	GitHub: ':repo/edit/:branch/:path',
	GitLab: ':repo/-/edit/:branch/:path',
	Gitee: ':repo/edit/:branch/:path',
	Bitbucket: ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default',
}
function B5({ docsRepo: e, editLinkPattern: t }) {
	if (t) return t
	const n = A5(e)
	return n !== null ? L5[n] : null
}
function O5({ docsRepo: e, docsBranch: t, docsDir: n, filePathRelative: o, editLinkPattern: r }) {
	if (!o) return null
	const i = B5({ docsRepo: e, editLinkPattern: r })
	return i
		? i
				.replace(/:repo/, It(e) ? e : `https://github.com/${e}`)
				.replace(/:branch/, t)
				.replace(/:path/, Fl(`${rh(n)}/${o}`))
		: null
}
function Mr(e) {
	const { notFound: t, meta: n, path: o } = Xo(e)
	return t ? { text: o, link: o } : { text: n.title || o, link: o, icon: n.icon }
}
function Ln(e = '', t = '') {
	return Xh(t) || eh(t) ? t : nh(`${e}/${t}`.replace(/\/+/g, '/'))
}
function Dm(e, t = '') {
	return oh(Ln(e, t))
}
var Mm = /#.*$/,
	V5 = /(index|README)?\.(md|html)$/,
	dn = typeof document < 'u'
function Ld(e) {
	return Array.isArray(e) ? e : [e]
}
function er(e, t, n = !1) {
	if (t === void 0) return !1
	if (((e = Bd(`/${e.replace(/^\//, '')}`)), n)) return new RegExp(t).test(e)
	if (Bd(t) !== e) return !1
	const o = t.match(Mm)
	return o ? (dn ? location.hash : '') === o[0] : !0
}
function Bd(e) {
	return decodeURI(e).replace(Mm, '').replace(V5, '')
}
const $5 = {
	locales: {
		'/': {
			selectLanguageName: '简体中文',
			selectLanguageText: '选择语言',
			appearanceText: '外观',
			lightModeSwitchTitle: '切换为浅色主题',
			darkModeSwitchTitle: '切换为深色主题',
			outlineLabel: '此页内容',
			returnToTopLabel: '返回顶部',
			editLinkText: '编辑此页',
			contributorsText: '贡献者',
			prevPageLabel: '上一页',
			nextPageLabel: '下一页',
			lastUpdatedText: '最后更新于',
			changelogText: '变更历史',
			changelogOnText: '于',
			changelogButtonText: '查看全部变更历史',
			copyrightText: '版权所有',
			copyrightAuthorText: '版权归属：',
			copyrightCreationOriginalText: '本文链接：',
			copyrightCreationTranslateText: '本文翻译自：',
			copyrightCreationReprintText: '本文转载自：',
			copyrightLicenseText: '许可证：',
			notFound: {
				code: '404',
				title: '页面未找到',
				quote: '但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。',
				linkText: '返回首页',
			},
			homeText: '首页',
			blogText: '博客',
			tagText: '标签',
			archiveText: '归档',
			categoryText: '分类',
			archiveTotalText: '{count} 篇',
			encryptButtonText: '确认',
			encryptPlaceholder: '请输入密码',
			encryptGlobalText: '本站只允许密码访问',
			encryptPageText: '本页面只允许密码访问',
			footer: {
				message:
					'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
				copyright: 'Copyright © 2021-present pengzhanbo',
			},
			docsRepo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
			docsDir: 'docs',
			changelog: { maxCount: 10 },
			contributors: { mode: 'block' },
			logo: '/plume.png',
			profile: {
				avatar: '/plume.png',
				name: 'Plume Theme',
				description: 'The Theme for Vuepress 2.0',
				location: 'GuangZhou, China',
				organization: 'pengzhanbo',
				originalWidth: 256,
				originalHeight: 256,
			},
			social: [
				{ icon: 'github', link: 'https://github.com/pengzhanbo/vuepress-theme-plume' },
				{ icon: 'qq', link: 'https://qm.qq.com/q/FbPPoOIscE' },
			],
			navbarSocialInclude: ['github', 'qq'],
			bulletin: {
				layout: 'top-right',
				lifetime: 'always',
				id: '6ac7edd2',
				content: `<div style="text-align:center"><p><strong>QQ 交流群：</strong> <a href="https://qm.qq.com/q/FbPPoOIscE" target="_blank" rel="noopener noreferrer">792882761</a></p>
<p><img src="/images/qq_qrcode.png" alt="QQ qr_code" width="618" height="616" style="width: 200px"></p>
<p>您在使用过程中遇到任何问题，欢迎通过 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/new/choose" target="_blank" rel="noopener noreferrer">issue</a> 反馈。也欢迎加入我们的 QQ 交流群一起讨论。</p>
</div>`,
			},
			navbar: [
				{
					text: '前端',
					icon: 'iconamoon:heart-fill',
					link: '/notes/theme/frontend/父组件传参给子组件.md',
					activeMatch: '^/frontend/',
				},
				{
					text: '指南',
					icon: 'icon-park-outline:guide-board',
					link: '/notes/theme/blog/guide/介绍.md',
					activeMatch: '^/blog/guide/',
				},
				{
					text: '配置',
					icon: 'icon-park-outline:setting-two',
					link: '/notes/theme/config/配置说明.md',
					activeMatch: '^/config/',
				},
				{
					text: '博客',
					link: '/blog/',
					icon: 'material-symbols:article-outline',
					activeMatch: '^/(blog|article)/',
				},
				{ text: '案例', link: '/demos/', icon: 'map:wind-surfing' },
			],
		},
	},
	appearance: !0,
	blog: {
		pagination: 15,
		postList: !0,
		tags: !0,
		archives: !0,
		categories: !0,
		link: '/blog/',
		tagsLink: '/blog/tags/',
		archivesLink: '/blog/archives/',
		categoriesLink: '/blog/categories/',
	},
	navbarSocialInclude: ['github', 'qq'],
	aside: !0,
	outline: [2, 3],
	externalLinkIcon: !0,
	editLink: !0,
	contributors: { mode: 'block' },
	changelog: { maxCount: 10 },
	prevPage: !0,
	nextPage: !0,
	footer: {
		message:
			'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
		copyright: 'Copyright © 2021-present pengzhanbo',
	},
	docsRepo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
	docsDir: 'docs',
	logo: '/plume.png',
	profile: {
		avatar: '/plume.png',
		name: 'Plume Theme',
		description: 'The Theme for Vuepress 2.0',
		location: 'GuangZhou, China',
		organization: 'pengzhanbo',
		originalWidth: 256,
		originalHeight: 256,
	},
	social: [
		{ icon: 'github', link: 'https://github.com/pengzhanbo/vuepress-theme-plume' },
		{ icon: 'qq', link: 'https://qm.qq.com/q/FbPPoOIscE' },
	],
	bulletin: {
		layout: 'top-right',
		lifetime: 'always',
		id: '6ac7edd2',
		content: `<div style="text-align:center"><p><strong>QQ 交流群：</strong> <a href="https://qm.qq.com/q/FbPPoOIscE" target="_blank" rel="noopener noreferrer">792882761</a></p>
<p><img src="/images/qq_qrcode.png" alt="QQ qr_code" width="618" height="616" style="width: 200px"></p>
<p>您在使用过程中遇到任何问题，欢迎通过 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/new/choose" target="_blank" rel="noopener noreferrer">issue</a> 反馈。也欢迎加入我们的 QQ 交流群一起讨论。</p>
</div>`,
	},
}
var I5 = {}
const Bo = './ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
	pa = Array.from({ length: 64 }, (e, t) => t),
	Li = (e) => Array(e).fill(-1),
	jn = [
		...Li(46),
		0,
		1,
		...pa.slice(54, 64),
		...Li(7),
		...pa.slice(2, 28),
		...Li(6),
		...pa.slice(28, 54),
		...Li(5),
	],
	Od = [
		608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569,
		1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479,
		2450970073, 2306472731,
	],
	Vd = [
		3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305,
		614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238,
		227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379,
		3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486,
		3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
		1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050,
		732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927,
		999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402,
		4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033,
		772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088,
		1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656,
		2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502,
		3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909,
		936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567,
		3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531,
		1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577,
		3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531,
		1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056,
		1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610,
		2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459,
		1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851,
		2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624,
		4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592,
		3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540,
		1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193,
		3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313,
		375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143,
		3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935,
		610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733,
		2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269,
		3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613,
		3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946,
		1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590,
		3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022,
		1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673,
		1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761,
		1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
		2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981,
		3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255,
		2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289,
		1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655,
		3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711,
		2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066,
		4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781,
		1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769,
		4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603,
		1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202,
		3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456,
		1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576,
		3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780,
		354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879,
		3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
		1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511,
		2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233,
		238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670,
		3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347,
		1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240,
		3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488,
		3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533,
		157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097,
		863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190,
		2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
		2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456,
		3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055,
		3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728,
		3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640,
		1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444,
		2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035,
		1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102,
		2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499,
		499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395,
		4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547,
		1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748,
		4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548,
		133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820,
		628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701,
		1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824,
		3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846,
		172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
		3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403,
		1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131,
		926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300,
		1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537,
		1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
		2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100,
		2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297,
		1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929,
		2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396,
		3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
		3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185,
		3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375,
		2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386,
		300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742,
		1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620,
		3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668,
		1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504,
		976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686,
		3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180,
		1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814,
		691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050,
		3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
		673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353,
		2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145,
		2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132,
		3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136,
		2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309,
		3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361,
		1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263,
		1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738,
		2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246,
		3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891,
		3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903,
		3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381,
		1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488,
		1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877,
		2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
		445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343,
		4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221,
		4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506,
		3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142,
		453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637,
		3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529,
		4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580,
		3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474,
		3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507,
		1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296,
		2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033,
		2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462,
	],
	Nm = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892],
	ol = (e, t) => {
		if (t <= 0 || t > e.length) throw Error(`Illegal len: ${t}`)
		let n = 0,
			o,
			r
		const i = []
		for (; n < t; ) {
			if (((o = e[n++] & 255), i.push(Bo[(o >> 2) & 63]), (o = (o & 3) << 4), n >= t)) {
				i.push(Bo[o & 63])
				break
			}
			if (
				((r = e[n++] & 255), (o |= (r >> 4) & 15), i.push(Bo[o & 63]), (o = (r & 15) << 2), n >= t)
			) {
				i.push(Bo[o & 63])
				break
			}
			;(r = e[n++] & 255), (o |= (r >> 6) & 3), i.push(Bo[o & 63]), i.push(Bo[r & 63])
		}
		return i.join('')
	},
	R5 = (e, t) => {
		const n = e.length
		let o = 0,
			r = 0,
			i,
			s,
			a,
			l,
			c,
			u
		const d = []
		for (
			;
			o < n - 1 &&
			r < t &&
			((u = e.charCodeAt(o++)),
			(i = u < jn.length ? jn[u] : -1),
			(u = e.charCodeAt(o++)),
			(s = u < jn.length ? jn[u] : -1),
			!(
				i == -1 ||
				s == -1 ||
				((c = (i << 2) >>> 0),
				(c |= (s & 48) >> 4),
				d.push(String.fromCharCode(c)),
				++r >= t || o >= n) ||
				((u = e.charCodeAt(o++)), (a = u < jn.length ? jn[u] : -1), a == -1) ||
				((c = ((s & 15) << 4) >>> 0),
				(c |= (a & 60) >> 2),
				d.push(String.fromCharCode(c)),
				++r >= t || o >= n)
			));

		)
			(u = e.charCodeAt(o++)),
				(l = u < jn.length ? jn[u] : -1),
				(c = ((a & 3) << 6) >>> 0),
				(c |= l),
				d.push(String.fromCharCode(c)),
				++r
		return d.map((f) => f.charCodeAt(0))
	},
	D5 = (e, t) => {
		let n = null
		for (typeof e == 'number' && ((n = e), (e = () => null)); n !== null || (n = e()) !== null; )
			n < 128
				? t(n & 127)
				: n < 2048
				? (t(((n >> 6) & 31) | 192), t((n & 63) | 128))
				: n < 65536
				? (t(((n >> 12) & 15) | 224), t(((n >> 6) & 63) | 128), t((n & 63) | 128))
				: (t(((n >> 18) & 7) | 240),
				  t(((n >> 12) & 63) | 128),
				  t(((n >> 6) & 63) | 128),
				  t((n & 63) | 128)),
				(n = null)
	},
	M5 = (e, t) => {
		let n,
			o = null
		for (; (n = o !== null ? o : e()) !== null; ) {
			if (n >= 55296 && n <= 57343 && (o = e()) !== null && o >= 56320 && o <= 57343) {
				t((n - 55296) * 1024 + o - 56320 + 65536), (o = null)
				continue
			}
			t(n)
		}
		o !== null && t(o)
	},
	N5 = (e, t) =>
		M5(e, (n) => {
			D5(n, t)
		}),
	ps =
		typeof process == 'object' && I5.NEXT_RUNTIME === 'edge'
			? setTimeout
			: typeof setImmediate == 'function'
			? setImmediate
			: typeof process == 'object' && typeof process.nextTick == 'function'
			? process.nextTick
			: setTimeout,
	F5 = (e) => {
		let t = 0
		const n = []
		return (
			N5(
				() => (t < e.length ? e.charCodeAt(t++) : null),
				(o) => {
					n.push(o)
				}
			),
			n
		)
	},
	Zr = (e, t, n, o) => {
		let r,
			i = e[t],
			s = e[t + 1]
		return (
			(i ^= n[0]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[1]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[2]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[3]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[4]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[5]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[6]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[7]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[8]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[9]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[10]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[11]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[12]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[13]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[14]),
			(r = o[i >>> 24]),
			(r += o[256 | ((i >> 16) & 255)]),
			(r ^= o[512 | ((i >> 8) & 255)]),
			(r += o[768 | (i & 255)]),
			(s ^= r ^ n[15]),
			(r = o[s >>> 24]),
			(r += o[256 | ((s >> 16) & 255)]),
			(r ^= o[512 | ((s >> 8) & 255)]),
			(r += o[768 | (s & 255)]),
			(i ^= r ^ n[16]),
			(e[t] = s ^ n[17]),
			(e[t + 1] = i),
			e
		)
	},
	Vo = (e, t) => {
		let n = 0
		for (let o = 0; o < 4; ++o) (n = (n << 8) | (e[t] & 255)), (t = (t + 1) % e.length)
		return { key: n, offp: t }
	},
	$d = (e, t, n) => {
		const o = t.length,
			r = n.length
		let i = 0,
			s = [0, 0],
			a
		for (let l = 0; l < o; l++) (a = Vo(e, i)), (i = a.offp), (t[l] = t[l] ^ a.key)
		for (let l = 0; l < o; l += 2) (s = Zr(s, 0, t, n)), (t[l] = s[0]), (t[l + 1] = s[1])
		for (let l = 0; l < r; l += 2) (s = Zr(s, 0, t, n)), (n[l] = s[0]), (n[l + 1] = s[1])
	},
	j5 = (e, t, n, o) => {
		const r = n.length,
			i = o.length
		let s = 0,
			a = [0, 0],
			l
		for (let c = 0; c < r; c++) (l = Vo(t, s)), (s = l.offp), (n[c] = n[c] ^ l.key)
		s = 0
		for (let c = 0; c < r; c += 2)
			(l = Vo(e, s)),
				(s = l.offp),
				(a[0] ^= l.key),
				(l = Vo(e, s)),
				(s = l.offp),
				(a[1] ^= l.key),
				(a = Zr(a, 0, n, o)),
				(n[c] = a[0]),
				(n[c + 1] = a[1])
		for (let c = 0; c < i; c += 2)
			(l = Vo(e, s)),
				(s = l.offp),
				(a[0] ^= l.key),
				(l = Vo(e, s)),
				(s = l.offp),
				(a[1] ^= l.key),
				(a = Zr(a, 0, n, o)),
				(o[c] = a[0]),
				(o[c + 1] = a[1])
	},
	Id = (e, t, n, o, r) => {
		const i = Nm.slice(),
			s = i.length
		if (n < 4 || n > 31) {
			const f = new Error(`Illegal number of rounds (4-31): ${n}`)
			if (o === !1) return Promise.reject(f)
			throw f
		}
		if (t.length !== 16) {
			const f = new Error(`Illegal salt length: ${t.length} != 16`)
			if (o === !1) return Promise.reject(f)
			throw f
		}
		n = (1 << n) >>> 0
		let a,
			l,
			c = 0,
			u
		Int32Array
			? ((a = new Int32Array(Od)), (l = new Int32Array(Vd)))
			: ((a = Od.slice()), (l = Vd.slice())),
			j5(t, e, a, l)
		const d = () => {
			if (c < n) {
				const f = Date.now()
				for (; c < n && ((c = c + 1), $d(e, a, l), $d(t, a, l), !(Date.now() - f > 100)); );
			} else {
				for (c = 0; c < 64; c++) for (u = 0; u < s >> 1; u++) Zr(i, u << 1, a, l)
				const f = []
				for (c = 0; c < s; c++)
					f.push(((i[c] >> 24) & 255) >>> 0),
						f.push(((i[c] >> 16) & 255) >>> 0),
						f.push(((i[c] >> 8) & 255) >>> 0),
						f.push((i[c] & 255) >>> 0)
				return o === !1 ? Promise.resolve(f) : f
			}
			if (o === !1)
				return new Promise((f) =>
					ps(() => {
						d().then(f)
					})
				)
		}
		if (o === !1) return d()
		{
			let f
			for (;;) if (typeof (f = d()) < 'u') return f || []
		}
	},
	H5 = (e) => {
		try {
			let t
			typeof window < 'u' ? (t = window.crypto ?? window.msCrypto) : (t = globalThis.crypto)
			const n = new Uint32Array(e)
			return t == null || t.getRandomValues(n), Array.from(n)
		} catch {
			throw Error('WebCryptoAPI is not available')
		}
	},
	rl = (e = 10) => {
		if (typeof e != 'number') throw Error('Illegal arguments: ' + typeof e)
		e < 4 ? (e = 4) : e > 31 && (e = 31)
		const t = []
		return (
			t.push('$2a$'),
			e < 10 && t.push('0'),
			t.push(e.toString()),
			t.push('$'),
			t.push(ol(H5(16), 16)),
			t.join('')
		)
	},
	z5 = (e = 10) => {
		if (typeof e != 'number') throw Error('illegal arguments: ' + typeof e)
		return new Promise((t, n) =>
			ps(() => {
				try {
					t(rl(e))
				} catch (o) {
					n(o)
				}
			})
		)
	}
function Rd(e, t, n, o) {
	if (typeof e != 'string' || typeof t != 'string') {
		const p = new Error('Invalid string / salt: Not a string')
		if (n === !1) return Promise.reject(p)
		throw p
	}
	let r, i
	if (t.charAt(0) !== '$' || t.charAt(1) !== '2') {
		const p = new Error('Invalid salt version: ' + t.substring(0, 2))
		if (n === !1) return Promise.reject(p)
		throw p
	}
	if (t.charAt(2) === '$') (r = '\0'), (i = 3)
	else {
		if (((r = t.charAt(2)), (r !== 'a' && r !== 'b' && r !== 'y') || t.charAt(3) !== '$')) {
			const p = Error('Invalid salt revision: ' + t.substring(2, 4))
			if (n === !1) return Promise.reject(p)
			throw p
		}
		i = 4
	}
	if (t.charAt(i + 2) > '$') {
		const p = new Error('Missing salt rounds')
		if (n === !1) return Promise.reject(p)
		throw p
	}
	const s = parseInt(t.substring(i, i + 1), 10) * 10,
		a = parseInt(t.substring(i + 1, i + 2), 10),
		l = s + a,
		c = t.substring(i + 3, i + 25)
	e += r >= 'a' ? '\0' : ''
	const u = F5(e),
		d = R5(c, 16),
		f = (p) => {
			const m = []
			return (
				m.push('$2'),
				r >= 'a' && m.push(r),
				m.push('$'),
				l < 10 && m.push('0'),
				m.push(l.toString()),
				m.push('$'),
				m.push(ol(d, d.length)),
				m.push(ol(p, Nm.length * 4 - 1)),
				m.join('')
			)
		}
	return n === !1 ? Id(u, d, l, !1).then((p) => f(p)) : f(Id(u, d, l, !0))
}
const q5 = function (e, t, n) {
		return typeof e == 'string' && typeof t == 'number'
			? z5(t).then((o) => Rd(e, o, !1))
			: typeof e == 'string' && typeof t == 'string'
			? Rd(e, t, !1)
			: Promise.reject(new Error(`Illegal arguments: ${typeof e}, ${typeof t}`))
	},
	U5 = (e, t, n) =>
		new Promise((o, r) => {
			if (typeof e != 'string' || typeof t != 'string') {
				ps(() => r(new Error(`Illegal arguments: ${typeof e}, ${typeof t}`)))
				return
			}
			if (t.length !== 60) {
				ps(() => r(new Error('Illegal hash: hash length should be 60')))
				return
			}
			q5(e, t.substring(0, 29))
				.then((i) => o(i === t))
				.catch((i) => r(i))
		}),
	W5 = [
		!1,
		':',
		'',
		['/article/enx7c9s/'],
		{ 0: '$2a$14$4NMaIiKI0OD6d4yLk67aRe7YhvwKY8uP53eMilWGaplab0VAJwtgm' },
	],
	G5 = [
		{
			path: '/article/r532eavn/',
			title: '1.0.0-rc.120 更新说明',
			categoryList: [{ id: '7a3973', sort: 3, name: '更新说明' }],
			sticky: 3,
			createTime: '2024/12/08 12:16:05',
			lang: 'zh-CN',
			excerpt: `<p>当前版本包含了一些破坏性的更新，因此做一些说明。</p>
`,
		},
		{
			path: '/article/6pa64b1n/',
			title: '1.0.0-rc.102 至 rc.103 更新说明',
			categoryList: [{ id: '7a3973', sort: 3, name: '更新说明' }],
			createTime: '2024/09/24 23:45:49',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/ecxnxxd0/',
			title: '如何使用 frontmatter',
			categoryList: [{ id: '65f30c', sort: 4, name: '教程' }],
			createTime: '2024/09/18 09:19:36',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/30995vcd/',
			title: '照片类作品示例',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/08/17 14:30:23',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/5vjshyi9/',
			title: '1.0.0-rc.73 至 rc.77 更新说明',
			categoryList: [{ id: '7a3973', sort: 3, name: '更新说明' }],
			createTime: '2024/07/11 09:18:48',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/i4cuuonn/',
			title: '图片水印',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/04/11 06:07:50',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/2z59hh8g/',
			title: '内容水印',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/04/10 20:28:32',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/97s6ha1e/',
			title: '全屏水印',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/04/10 20:28:18',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/mcz1csb4/',
			title: 'Markdown 基础',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			tags: ['markdown', '教程'],
			createTime: '2024/03/06 22:43:52',
			lang: 'zh-CN',
			excerpt: `<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。</p>
`,
		},
		{
			path: '/article/mcgayb5w/',
			title: 'markdown 扩展',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			tags: ['markdown', '教程'],
			createTime: '2024/03/05 22:49:39',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/en/blog/guide/intro/',
			title: 'Theme Introduction',
			categoryList: [
				{ id: '9cfefe', sort: 1e4, name: 'en' },
				{ id: 'cbbb6b', sort: 10001, name: 'notes' },
				{ id: '7090a6', sort: 10002, name: 'theme' },
				{ id: '5777fd', sort: 10004, name: 'guide' },
			],
			createTime: '2024/03/04 11:06:24',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/en/config/intro/',
			title: 'Configuration',
			categoryList: [
				{ id: '9cfefe', sort: 1e4, name: 'en' },
				{ id: 'cbbb6b', sort: 10001, name: 'notes' },
				{ id: '7090a6', sort: 10002, name: 'theme' },
				{ id: '209a3a', sort: 10003, name: 'config' },
			],
			createTime: '2024/03/02 10:48:14',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/z8zvx0ru/',
			title: '示例文章9',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:56:03',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/m4gen76w/',
			title: '示例文章8',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:55:56',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/5xbhl125/',
			title: '示例文章7',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:55:49',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/v9fejej9/',
			title: '示例文章6',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:55:35',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/2seng2ou/',
			title: '示例文章5',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:55:23',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/qk81wscb/',
			title: '示例文章4',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:53:58',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/9eh4d6ao/',
			title: '示例文章3',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:53:34',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/elac3ddb/',
			title: '示例文章2',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			createTime: '2024/03/01 22:52:43',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/0lk24ty5/',
			title: '主题效果预览',
			categoryList: [{ id: 'cdc1cf', sort: 2, name: 'preview' }],
			tags: ['预览', '标签'],
			sticky: !0,
			createTime: '2023/12/25 01:28:29',
			lang: 'zh-CN',
			excerpt: '',
		},
		{
			path: '/article/xld23tu1/',
			title: '示例文章',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			tags: ['预览', '标签'],
			createTime: '2023/12/25 01:28:29',
			lang: 'zh-CN',
			excerpt: `<p>这是一篇 示例文章。</p>
`,
		},
		{
			path: '/article/enx7c9s/',
			title: '加密文章，密码：123456',
			categoryList: [{ id: '7e4ecf', sort: 1, name: '示例' }],
			tags: ['预览', '标签'],
			createTime: '2023/12/25 01:28:29',
			lang: 'zh-CN',
			excerpt: '',
			encrypt: !0,
		},
		{
			path: '/en/article/xw0awouo/',
			title: 'english_blog',
			categoryList: [
				{ id: '9cfefe', sort: 1e4, name: 'en' },
				{ id: '1c0f3d', sort: 1, name: 'FE' },
				{ id: '2a2120', sort: 1, name: 'Node' },
			],
			createTime: '2023/06/15 08:51:31',
			lang: 'zh-CN',
			excerpt: '',
		},
	],
	K5 = {
		markdown: 'upb6',
		教程: '4w9b',
		预览: 'd8vu',
		标签: 'yled',
		指南: 'd8vu',
		快速开始: 'cvid',
		i18n: 'mnfk',
		部署: 'm4di',
	},
	Y5 = {
		'fa:wechat': 'vpi-4uwwvxcx',
		'fa:photo': 'vpi-lzn9gex7',
		'unjs:theme-colors': 'vpi-k9o4j6ma bg',
		'fa6-brands:node': 'vpi-ikehprqo',
		'grommet-icons:install': 'vpi-2wkjzjur',
		'grommet-icons:emoji': 'vpi-43cv7xy9',
		'nimbus:browser': 'vpi-clwck2lo',
		'fa-brands:css3': 'vpi-aygj8p97',
		'flat-color-icons:info': 'vpi-i2m86yil bg',
		'teenyicons:doc-outline': 'vpi-jsm6kcnd',
		'teenyicons:pdf-outline': 'vpi-9zjoe2vo',
		'vaadin:tabs': 'vpi-82vz1551',
		'vaadin:grid-h': 'vpi-n3hz7d66',
		'majesticons:code-block-line': 'vpi-16vlliri',
		'lucide:codesandbox': 'vpi-98a5t11u',
		'lucide:creative-commons': 'vpi-48bsnozt',
		'lucide:box': 'vpi-5xjhy1fe',
		'gg:npm': 'vpi-jf1hy6hb',
		'bxl:jsfiddle': 'vpi-pwmmyqsy',
		'weui:eyes-off-outlined': 'vpi-adhgflch',
		'octicon:repo-16': 'vpi-8a8be04q',
		'octicon:smiley-16': 'vpi-7bgx04cg',
		'dashicons:images-alt2': 'vpi-nckor7ei',
		'dashicons:embed-video': 'vpi-zgcizgqj',
		'akar-icons:npm-fill': 'vpi-axfld3wf',
		'map:wind-surfing': 'vpi-s73cb8ty',
		'raphael:piechart': 'vpi-3wjcjagd',
		'raphael:smile2': 'vpi-jsel8s1f',
		'radix-icons:activity-log': 'vpi-cgorv5a7',
		'radix-icons:component-2': 'vpi-68zs30hw',
		'uiw:component': 'vpi-wzasgkip',
		'clarity:bundle-solid': 'vpi-byu6cpq6',
		'tdesign:logo-github-filled': 'vpi-u85xehia',
		'fluent-mdl2:auto-enhance-on': 'vpi-ns6ocu4y',
		'fluent-mdl2:edit-create': 'vpi-v03z8bzq',
		'lets-icons:hide-eye': 'vpi-rlcz8z1w',
		'bi:alipay': 'vpi-eg9n1lhd',
		'icon-park-outline:hand-painted-plate': 'vpi-wucwjoz5',
		'icon-park-outline:theme': 'vpi-ozdhu60o',
		'icon-park-outline:eyes': 'vpi-hainc7tr',
		'icon-park-outline:html-five': 'vpi-q76o7znk',
		'icon-park-outline:guide-board': 'vpi-c8qu2lnr',
		'icon-park-outline:setting-two': 'vpi-tfzluypt',
		'ri:bilibili-fill': 'vpi-zgyo5nuo',
		'ri:layout-masonry-line': 'vpi-8fx7sbs5',
		'iconamoon:badge-light': 'vpi-wftat5en',
		'iconamoon:heart-fill': 'vpi-9mpyizuk',
		'streamline:desktop-help': 'vpi-2o46pj31',
		'streamline:steps-number': 'vpi-gggcgb77',
		'carbon:cics-sit-overrides': 'vpi-xfj4l888',
		'carbon:friendship': 'vpi-oy15g61v',
		'carbon:idea': 'vpi-sx9048o6',
		'carbon:demo': 'vpi-mnareqyb',
		'ion:logo-markdown': 'vpi-kcpq4udz',
		'f7:flowchart': 'vpi-s76rwkio',
		'file-icons:mermaid': 'vpi-e3hehpxj',
		'la:comment': 'vpi-li4secuh',
		'skill-icons:vscode-dark': 'vpi-iyn5fvjf bg',
		'skill-icons:twitter': 'vpi-onmkq50b bg',
		'tabler:brand-kotlin': 'vpi-7zloo6t0',
		'tabler:container': 'vpi-tgoun8bz',
		'tabler:seo': 'vpi-801g84j8',
		'tabler:tools': 'vpi-s92zs76m',
		'devicon-plain:go': 'vpi-imbmwe0i',
		'vscode-icons:file-type-light-pnpm': 'vpi-jtjrpx8q bg',
		'vscode-icons:file-type-yarn': 'vpi-sad3u1fh bg',
		'vscode-icons:file-type-js': 'vpi-8cbzb2j3 bg',
		'vscode-icons:file-type-typescript': 'vpi-60slog9u bg',
		'vscode-icons:folder-type-docs': 'vpi-oai19t0e bg',
		'vscode-icons:default-folder': 'vpi-6vd39ljd bg',
		'vscode-icons:folder-type-public': 'vpi-copcv84t bg',
		'vscode-icons:folder-type-images': 'vpi-sm734ph2 bg',
		'vscode-icons:file-type-image': 'vpi-javwer4j bg',
		'vscode-icons:file-type-markdown': 'vpi-opjl3vv9 bg',
		'vscode-icons:file-type-node': 'vpi-4scs5crs bg',
		'vscode-icons:file-type-git': 'vpi-x2gh4z8w bg',
		'vscode-icons:file-type-shell': 'vpi-vxwlhrq7 bg',
		'vscode-icons:file-type-vue': 'vpi-zgtgr4cp bg',
		'vscode-icons:folder-type-config': 'vpi-4cnk7d99 bg',
		'vscode-icons:folder-type-typings': 'vpi-9v7xow6k bg',
		'vscode-icons:file-type-css': 'vpi-sxph9bu5 bg',
		'vscode-icons:folder-type-git': 'vpi-nnm0u2cv bg',
		'vscode-icons:file-type-bun': 'vpi-5r0f3sss bg',
		'vscode-icons:file-type-light-deno': 'vpi-b6fnk65q bg',
		'vscode-icons:file-type-html': 'vpi-39rh0grn bg',
		'vscode-icons:file-type-typescript-official': 'vpi-xm03hnot bg',
		'vscode-icons:file-type-js-official': 'vpi-3q8co9mp bg',
		'vscode-icons:file-type-less': 'vpi-txd1ltg0 bg',
		'vscode-icons:file-type-sass': 'vpi-64sdsqpm bg',
		'vscode-icons:file-type-java': 'vpi-w0k3gqlk bg',
		'vscode-icons:file-type-python': 'vpi-dq9cwsju bg',
		'vscode-icons:folder-type-theme': 'vpi-dq80u20g bg',
		'vscode-icons:folder-type-client': 'vpi-kx47c2ds bg',
		'vscode-icons:folder-type-component': 'vpi-ig086wkt bg',
		'vscode-icons:folder-type-hook': 'vpi-gd376365 bg',
		'vscode-icons:folder-type-style': 'vpi-al92ntfo bg',
		'vscode-icons:default-file': 'vpi-93dbys28 bg',
		'vscode-icons:file-type-tsconfig': 'vpi-9um94gml bg',
		'vscode-icons:file-type-c': 'vpi-kkcsf8n3 bg',
		'vscode-icons:file-type-cpp': 'vpi-9i7nke68 bg',
		'vscode-icons:file-type-kotlin': 'vpi-b08m7xjz bg',
		'vscode-icons:file-type-go-gopher': 'vpi-fprvjxfw bg',
		'vscode-icons:file-type-ruby': 'vpi-b6xt0brq bg',
		'vscode-icons:file-type-makefile': 'vpi-l81z2tf9 bg',
		'vscode-icons:file-type-objectivec': 'vpi-u5dz25qf bg',
		'vscode-icons:file-type-swift': 'vpi-orax9bml bg',
		'vscode-icons:file-type-php3': 'vpi-x34aah1r bg',
		'vscode-icons:file-type-rust': 'vpi-nk95gfje bg',
		'vscode-icons:file-type-sql': 'vpi-o4tc2asd bg',
		'vscode-icons:file-type-xml': 'vpi-1964ptpx bg',
		'vscode-icons:file-type-zig': 'vpi-jlxzdasl bg',
		'vscode-icons:file-type-scss': 'vpi-ns3pwcve bg',
		'vscode-icons:file-type-light-stylus': 'vpi-43e40j11 bg',
		'vscode-icons:file-type-light-astro': 'vpi-qf4hggw6 bg',
		'vscode-icons:file-type-svelte': 'vpi-h20vxj1m bg',
		'vscode-icons:file-type-wasm': 'vpi-5aqy9bsu bg',
		'mdi:tooltip-text-outline': 'vpi-zf7xw5jv',
		'mdi:file-tree': 'vpi-izpb6i2u',
		'mdi:import': 'vpi-xjgdwb3s',
		'mdi:youtube': 'vpi-zilkemok',
		'mdi:sitemap-outline': 'vpi-mek7t6is',
		'mdi:encryption-outline': 'vpi-ctqwbj8j',
		'mdi:chart-line': 'vpi-h8ncrf46',
		'mdi:api': 'vpi-fe21sldv',
		'mingcute:edit-4-line': 'vpi-io9m7pom',
		'mingcute:codepen-line': 'vpi-4ieapbje',
		'mingcute:announcement-line': 'vpi-45n3v93n',
		'ph:layout-duotone': 'vpi-cz9x17r9',
		'ph:tree-structure-bold': 'vpi-f6t6e4gt',
		'ph:code': 'vpi-7vs7044k',
		'ph:code-bold': 'vpi-zwa9t2li',
		'ic:outline-code': 'vpi-n2r0attd',
		'simple-icons:replit': 'vpi-0oexi07o',
		'simple-icons:contributorcovenant': 'vpi-exl1htpt',
		'solar:card-broken': 'vpi-4v5exx8f',
		'solar:chart-bold': 'vpi-dsok2nay',
		'solar:card-send-linear': 'vpi-db4qp8k7',
		'logos:npm-icon': 'vpi-01xhz8iw bg',
		'logos:rust': 'vpi-lz801ubw bg',
		'material-symbols:home': 'vpi-fprqhstb',
		'material-symbols:article-outline': 'vpi-e7k13322',
		'material-symbols:home-outline': 'vpi-k7okwrph',
		'material-symbols:deployed-code-outline': 'vpi-0k6mf5yk',
		'material-symbols:experiment-outline': 'vpi-gzcy1dkl',
		'material-symbols:search': 'vpi-4sj3mii9',
		'material-symbols:markdown-outline': 'vpi-r76mbdw8',
		'material-symbols:dashboard-customize-outline-rounded': 'vpi-pybxfggx',
		'material-symbols-light:language': 'vpi-p3svx5dw',
		'material-symbols-light:branding-watermark-outline': 'vpi-fm4az04w',
		'twemoji:astonished-face': 'vpi-1pe04y8l bg',
		'fluent:markdown-20-filled': 'vpi-od4dc85u',
		'fluent:table-simple-include-16-regular': 'vpi-do46ikpo',
		'fluent:group-list-20-filled': 'vpi-3e15o986',
		'noto:smiling-face-with-open-hands': 'vpi-gxfx0am6 bg',
	}
var Q5 = {
		'/': {
			CC0: 'CC0 1.0 通用',
			'CC-BY-4.0': '署名 4.0 国际',
			'CC-BY-NC-4.0': '署名-非商业性 4.0 国际',
			'CC-BY-NC-SA-4.0': '署名-非商业性-相同方式共享 4.0 国际',
			'CC-BY-NC-ND-4.0': '署名-非商业性-禁止演绎 4.0 国际',
			'CC-BY-ND-4.0': '署名-禁止演绎 4.0 国际',
			'CC-BY-SA-4.0': '署名-相同方式共享 4.0 国际',
		},
	},
	Fm = Symbol(''),
	J5 = R($5)
function Yt() {
	return J5
}
function X5() {
	const e = qe(Fm)
	if (!e) throw new Error('useThemeLocaleData() is called without provider.')
	return e
}
function Z5(e, t) {
	const { locales: n, ...o } = e
	return { ...o, ...(n == null ? void 0 : n[t]) }
}
function e6(e) {
	const t = Yt(),
		n = e._context.provides[zl],
		o = E(() => Z5(t.value, n.routeLocale.value))
	e.provide(Fm, o),
		Object.defineProperties(e.config.globalProperties, {
			$theme: {
				get() {
					return t.value
				},
			},
			$themeLocale: {
				get() {
					return o.value
				},
			},
		})
}
var jm = Symbol('')
function Hm() {
	return typeof document > 'u'
		? !1
		: 'startViewTransition' in document &&
				window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}
function t6(e) {
	const t = Yt(),
		n = t.value.transition,
		o = Hm() || (typeof n == 'object' ? n.appearance === !1 : n === !1),
		r = t.value.appearance,
		i =
			r === 'force-dark'
				? R(!0)
				: r
				? ny({
						storageKey: 'vuepress-theme-appearance',
						attribute: 'data-theme',
						valueLight: 'light',
						valueDark: 'dark',
						disableTransition: o,
						initialValue: () => (typeof r == 'string' ? r : 'auto'),
						...(typeof r == 'object' ? r : {}),
				  })
				: R(!1)
	e.provide(jm, i), Object.defineProperty(e.config.globalProperties, '$isDark', { get: () => i })
}
function mi() {
	const e = qe(jm)
	if (!e) throw new Error('useDarkMode() is called without provider.')
	return e
}
function se() {
	const e = Yt(),
		t = X5(),
		n = ql(),
		o = ar(),
		r = Ah(),
		i = mi(),
		s = oo(),
		a = E(() => e.value.blog || {})
	return { theme: t, page: n, frontmatter: o, lang: s, site: r, isDark: i, blog: a }
}
var n6 = R(o6(W5))
function zm() {
	return n6
}
function o6([e, t, n, o, r]) {
	return {
		global: e,
		separator: t,
		matches: o,
		admins: n.split(t),
		ruleList: Object.keys(r).map((i) => ({ key: i, match: o[i], rules: r[i].split(t) })),
	}
}
var qm = Symbol(''),
	An = rs('2a0a3d6afb2fdf1f', () => ({ s: [rl(10), rl(10)], g: '', p: {} }))
function Dd(e) {
	const [t, n] = An.value.s
	return t + e + n
}
function ha(e) {
	const [t, n] = An.value.s
	return !e.startsWith(t) || !e.endsWith(n) ? '' : e.slice(t.length, e.length - n.length)
}
var Bi = new Map()
async function Md(e, t, n = ':') {
	const o = [e, t].join(n)
	if (Bi.has(o)) return Bi.get(o)
	try {
		const r = await U5(e, t)
		return Bi.set(o, r), r
	} catch {
		return Bi.set(o, !1), !1
	}
}
var ma = new Map()
function r6(e) {
	if (ma.has(e)) return ma.get(e)
	const t = new RegExp(e)
	return ma.set(e, t), t
}
function il(e, t, n) {
	const o = n || ''
	if (e[0] === '^') {
		const r = r6(e)
		return r.test(t) || (o && r.test(o))
	}
	return e.endsWith('.md') ? o && o.endsWith(e) : t.startsWith(e) || o.startsWith(e)
}
function i6() {
	const { page: e } = se(),
		t = at(),
		n = zm(),
		o = E(() => {
			const a = t.path,
				l = e.value.filePathRelative
			return n.value.ruleList.length ? n.value.matches.some((c) => il(c, a, l)) : !1
		}),
		r = E(() => {
			if (!n.value.global) return !0
			const a = ha(An.value.g)
			return !!a && n.value.admins.includes(a)
		}),
		i = E(() => {
			const a = t.path,
				l = e.value.filePathRelative
			return n.value.ruleList.length ? n.value.ruleList.filter((c) => il(c.match, a, l)) : []
		}),
		s = E(() => {
			if (!o.value) return !0
			const a = ha(An.value.p.__GLOBAL__ || '')
			if (a && n.value.admins.includes(a)) return !0
			for (const { key: l, rules: c } of i.value)
				if (Ib(An.value.p, l)) {
					const u = ha(An.value.p[l])
					if (u && c.includes(u)) return !0
				}
			return !1
		})
	rn(qm, { hasPageEncrypt: o, isGlobalDecrypted: r, isPageDecrypted: s, hashList: i })
}
function Is() {
	const e = qe(qm)
	if (!e) throw new Error('useEncrypt() is called without setup')
	return e
}
function s6() {
	const e = zm(),
		{ page: t } = se(),
		n = at(),
		{ hashList: o } = Is()
	async function r(s) {
		if (!s) return !1
		for (const a of e.value.admins)
			if (await Md(s, a, e.value.separator)) return (An.value.g = Dd(a)), !0
		return !1
	}
	async function i(s) {
		if (!s) return !1
		const a = n.path,
			l = t.value.filePathRelative
		let c = !1
		for (const { match: u, key: d, rules: f } of o.value)
			if (il(u, a, l)) {
				for (const p of f)
					if (await Md(s, p, e.value.separator)) {
						;(c = !0), (An.value.p = { ...An.value.p, [d]: Dd(p) })
						break
					}
				if (c) break
			}
		return c || (c = await r(s)), c
	}
	return { compareGlobal: r, comparePage: i }
}
var { __auto__: a6, __home__: l6, ...c6 } = T5,
	Um = R(c6),
	qi = R(a6),
	Nd = R(l6),
	Wm = Symbol('')
function u6() {
	const { page: e, frontmatter: t } = se(),
		n = Rn(),
		o = E(
			() =>
				t.value.pageLayout !== 'home' &&
				t.value.pageLayout !== 'friends' &&
				t.value.sidebar !== !1 &&
				t.value.layout !== 'NotFound'
		),
		r = E(() =>
			o.value
				? d6(typeof t.value.sidebar == 'string' ? t.value.sidebar : e.value.path, n.value)
				: []
		)
	rn(Wm, r)
}
function Gm() {
	const e = qe(Wm)
	if (!e) throw new Error('useSidebarData() is called without provider.')
	return e
}
function d6(e, t) {
	const n = Um.value[t]
	if (n === 'auto') return $o(qi.value[t])
	if (is(n)) return $o(n, t)
	if (Kt(n)) {
		e = decodeURIComponent(e)
		const o =
				Object.keys(n)
					.sort((i, s) => s.split('/').length - i.split('/').length)
					.find((i) => e.startsWith(`${t}${Fl(i)}`)) || '',
			r = o ? n[o] : void 0
		if (r === 'auto') return $o(o ? qi.value[o] : [], t)
		if (is(r)) return $o(r, o)
		if (Kt(r)) {
			const i = Dm(o, r.prefix)
			return $o(r.items === 'auto' ? qi.value[i] : r.items, i)
		}
	}
	return []
}
function $o(e, t = '') {
	const n = []
	return (
		e.forEach((o) => {
			if (sn(o)) n.push(Mr(Ln(t, o)))
			else {
				const { link: r, items: i, prefix: s, dir: a, ...l } = o,
					c = { ...l }
				if (r) {
					c.link = Ln(t, r)
					const d = Mr(c.link)
					c.icon = d.icon || c.icon
				}
				const u = Dm(t, s || a)
				if (i === 'auto') {
					if (((c.items = qi.value[u]), !c.link && Nd.value[u])) {
						c.link = Ln(Nd.value[u])
						const d = Mr(c.link)
						c.icon = d.icon || c.icon
					}
				} else c.items = i != null && i.length ? $o(i, u) : void 0
				n.push(c)
			}
		}),
		n
	)
}
function f6(e) {
	const t = []
	let n = 0
	for (const o in e) {
		const r = e[o]
		if (r.items) {
			n = t.push(r)
			continue
		}
		t[n] || t.push({ items: [] }), t[n].items.push(r)
	}
	return t
}
function sl(e, t) {
	return Array.isArray(t)
		? t.some((n) => sl(e, n))
		: er(e, t.link ? Dn(t.link) : void 0)
		? !0
		: t.items
		? sl(e, t.items)
		: !1
}
var p6 = sl
function mn() {
	const { theme: e, frontmatter: t, page: n } = se(),
		o = Rn(),
		r = Rt('(min-width: 960px)'),
		{ isPageDecrypted: i } = Is(),
		s = R(!1),
		a = E(() => {
			const w = Um.value[o.value]
			return !w || w === 'auto' || is(w)
				? o.value
				: Object.keys(w)
						.sort((P, y) => y.split('/').length - P.split('/').length)
						.find((P) => n.value.path.startsWith(nh(P))) || ''
		}),
		l = Gm(),
		c = E(() => t.value.sidebar !== !1 && l.value.length > 0 && t.value.pageLayout !== 'home'),
		u = E(() =>
			t.value.pageLayout === 'home' ||
			t.value.home ||
			t.value.pageLayout === 'friends' ||
			t.value.friends ||
			!i.value
				? !1
				: t.value.aside != null
				? !!t.value.aside
				: e.value.aside !== !1
		),
		d = E(() =>
			u.value ? (t.value.aside == null ? e.value.aside === 'left' : t.value.aside === 'left') : !1
		),
		f = E(() => c.value && r.value),
		p = E(() => (c.value ? f6(l.value) : [])),
		m = () => {
			s.value = !0
		},
		v = () => {
			s.value = !1
		}
	return {
		isOpen: s,
		sidebar: l,
		sidebarKey: a,
		sidebarGroups: p,
		hasSidebar: c,
		hasAside: u,
		leftAside: d,
		isSidebarEnabled: f,
		open: m,
		close: v,
		toggle: () => {
			s.value ? v() : m()
		},
	}
}
function h6(e, t) {
	let n
	ir(() => {
		n = e.value ? document.activeElement : void 0
	}),
		ke(() => {
			window.addEventListener('keyup', o)
		}),
		gt(() => {
			window.removeEventListener('keyup', o)
		})
	function o(r) {
		r.key === 'Escape' && e.value && (t(), n == null || n.focus())
	}
}
function m6(e) {
	const { page: t } = se(),
		n = at(),
		o = R(!1),
		r = E(() => e.value.collapsed != null),
		i = E(() => !!e.value.link),
		s = R(!1),
		a = () => {
			s.value = er(t.value.path, e.value.link ? Dn(e.value.link) : void 0)
		}
	ve([() => t.value.path, e, () => n.hash], a), ke(a)
	const l = E(() => (s.value ? !0 : e.value.items ? p6(t.value.path, e.value.items) : !1)),
		c = E(() => !!(e.value.items && e.value.items.length))
	return (
		ve(
			() => [r.value, e.value.collapsed],
			(d, f) => {
				;(d[0] !== (f == null ? void 0 : f[0]) || d[1] !== (f == null ? void 0 : f[1])) &&
					(o.value = !!(r.value && e.value.collapsed))
			},
			{ immediate: !0 }
		),
		ve(
			() => [t.value.path, s.value, l.value],
			() => {
				;(s.value || l.value) && (o.value = !1)
			},
			{ immediate: !0, flush: 'post' }
		),
		{
			collapsed: o,
			collapsible: r,
			isLink: i,
			isActiveLink: s,
			hasActiveLink: l,
			hasChildren: c,
			toggle: () => {
				r.value && (o.value = !o.value)
			},
		}
	)
}
function v6() {
	const { hasSidebar: e } = mn(),
		t = Rt('(min-width: 960px)'),
		n = Rt('(min-width: 1280px)')
	return { isAsideEnabled: E(() => (!n.value && !t.value ? !1 : e.value ? n.value : t.value)) }
}
var Km = R(G5)
function Ym() {
	return Km
}
function vi() {
	const e = oo()
	return E(() => Km.value.filter((t) => t.lang === e.value))
}
function g6() {
	const e = Yt(),
		t = vi(),
		{ theme: n } = se()
	return {
		archives: E(() => {
			const r = [],
				i = n.value.archiveTotalText || e.value.archiveTotalText
			return (
				t.value.forEach((s) => {
					var u
					const a = ((u = s.createTime) == null ? void 0 : u.split(/\s|T/)[0]) || '',
						l = a.split('/')[0]
					let c = r.find((d) => d.title === l)
					c || ((c = { title: l, list: [], label: '' }), r.push(c)),
						c.list.push({
							title: s.title,
							path: s.path,
							createTime: a.slice(l.length + 1).replace(/\//g, '-'),
						})
				}),
				r.forEach((s) => {
					s.label = (i == null ? void 0 : i.replace('{count}', s.list.length.toString())) || ''
				}),
				r
			)
		}),
	}
}
function Qm() {
	const e = vi()
	return {
		categories: E(() => {
			const n = []
			return (
				e.value.forEach((o) => {
					const r = o.categoryList
					if (!r || r.length === 0) n.push({ type: 'post', title: o.title, path: o.path })
					else {
						let i = n,
							s = 0
						for (; s < r.length; ) {
							const { id: a, name: l, sort: c } = r[s],
								u = i.find((d) => d.type === 'category' && d.id === a)
							if (u) i = u.items
							else {
								const d = []
								i.push({ type: 'category', title: l, id: a, sort: c, items: d }), (i = d)
							}
							s++
						}
						i.push({ type: 'post', title: o.title, path: o.path })
					}
				}),
				Jm(n)
			)
		}),
	}
}
function Jm(e) {
	for (const t of e) t.type === 'category' && t.items.length && (t.items = Jm(t.items))
	return e.sort((t, n) =>
		t.type === 'category' && n.type === 'category'
			? t.sort < n.sort
				? -1
				: 1
			: t.type === 'category' && n.type === 'post'
			? -1
			: t.type === 'post' && n.type === 'category'
			? 1
			: 0
	)
}
var va = new WeakMap()
function Xm(e, t, n = {}) {
	const { mode: o = 'replace', route: r = at(), router: i = sr(), transform: s = (d) => d } = n
	va.has(i) || va.set(i, new Map())
	const a = va.get(i)
	let l = r.query[e]
	hn(() => {
		l = void 0
	})
	let c
	const u = bs(
		(d, f) => (
			(c = f),
			{
				get() {
					return d(), s(l !== void 0 ? l : Et(t))
				},
				set(p) {
					l !== p &&
						((l = p),
						a.set(e, p),
						f(),
						ht(() => {
							if (a.size === 0) return
							const m = Object.fromEntries(a.entries())
							a.clear()
							const { query: v, hash: b, path: w } = r
							i[Et(o)]({ path: w, query: { ...v, ...m }, hash: b })
						}))
				},
			}
		)
	)
	return (
		ve(
			() => r.query[e],
			(d) => {
				;(l = d), c()
			},
			{ flush: 'sync' }
		),
		u
	)
}
var _6 = R(K5),
	oc = () => _6
function Zm() {
	const { blog: e } = se(),
		t = vi(),
		n = oc(),
		o = E(() => {
			const a = e.value.tagsTheme ?? 'colored',
				l = {}
			return (
				t.value.forEach((c) => {
					c.tags &&
						Ld(c.tags).forEach((u) => {
							l[u] ? (l[u] += 1) : (l[u] = 1)
						})
				}),
				Object.keys(l).map((c) => ({
					name: c,
					count: l[c] > 99 ? '99+' : l[c],
					className: n.value[c] ? `vp-tag-${n.value[c]}` : `tag-${a}`,
				}))
			)
		}),
		r = Xm('tag'),
		i = E(() =>
			r.value
				? t.value
						.filter((a) => (a.tags ? Ld(a.tags).includes(r.value) : !1))
						.map((a) => ({
							title: a.title,
							path: a.path,
							createTime: a.createTime.split(' ')[0].replace(/\//g, '-'),
						}))
				: []
		)
	return {
		tags: o,
		currentTag: r,
		postList: i,
		handleTagClick: (a) => {
			r.value = a
		},
	}
}
function So() {
	const { blog: e, theme: t } = se(),
		n = Yt(),
		o = Rn()
	function r(u, d) {
		return {
			link: (o.value + d).replace(/\/+/g, '/'),
			text: t.value[`${u}Text`] || n.value[`${u}Text`],
		}
	}
	const i = E(() => r('home', '/')),
		s = E(() => (e.value.postList !== !1 ? r('blog', e.value.link || 'blog/') : i.value)),
		a = E(() => (e.value.tags !== !1 ? r('tag', e.value.tagsLink || 'blog/tags/') : void 0)),
		l = E(() =>
			e.value.archives !== !1 ? r('archive', e.value.archivesLink || 'blog/archives/') : void 0
		),
		c = E(() =>
			e.value.categories !== !1
				? r('category', e.value.categoriesLink || 'blog/categories/')
				: void 0
		)
	return { home: i, blog: s, tags: a, archive: l, categories: c }
}
function ev() {
	const { blog: e } = se(),
		t = vi(),
		{ tags: n } = Zm(),
		{ categories: o } = Qm(),
		r = So(),
		i = E(() => e.value.archives !== !1 || e.value.tags !== !1 || e.value.categories !== !1),
		s = E(() => {
			var c, u
			return {
				link: (c = r.tags.value) == null ? void 0 : c.link,
				text: (u = r.tags.value) == null ? void 0 : u.text,
				total: n.value.length,
			}
		}),
		a = E(() => {
			var c, u
			return {
				link: (c = r.archive.value) == null ? void 0 : c.link,
				text: (u = r.archive.value) == null ? void 0 : u.text,
				total: t.value.length,
			}
		}),
		l = E(() => {
			var c, u
			return {
				link: (c = r.categories.value) == null ? void 0 : c.link,
				text: (u = r.categories.value) == null ? void 0 : u.text,
				total: tv(o.value),
			}
		})
	return { hasBlogExtract: i, tags: s, archives: a, categories: l }
}
function tv(e) {
	let t = 0
	for (const n of e) n.type === 'category' && ((t += 1), n.items.length && (t += tv(n.items)))
	return t
}
var b6 = 15
function y6(e) {
	const { blog: t } = se(),
		n = vi(),
		o = Rt('(max-width: 960px)'),
		r = E(() => {
			const m = n.value.filter((b) => b.sticky === !0 || typeof b.sticky == 'number'),
				v = n.value.filter((b) => b.sticky === void 0 || b.sticky === !1)
			return [
				...m.sort((b, w) =>
					w.sticky === !0 && b.sticky === !0 ? 0 : w.sticky > b.sticky ? 1 : -1
				),
				...v,
			]
		}),
		i = Xm('p', 1, {
			mode: 'push',
			transform(m) {
				const v = Number(m)
				return !Number.isNaN(v) && v > 0 ? v : 1
			},
		}),
		s = E(() => {
			var m
			return t.value.pagination === !1
				? 0
				: typeof t.value.pagination == 'number'
				? t.value.pagination
				: ((m = t.value.pagination) == null ? void 0 : m.perPage) || b6
		}),
		a = E(() => (t.value.pagination === !1 ? 0 : Math.ceil(r.value.length / s.value))),
		l = E(() => i.value >= a.value),
		c = E(() => i.value <= 1),
		u = E(() => t.value.pagination !== !1 && a.value > 1),
		d = E(() =>
			t.value.pagination === !1 || r.value.length <= s.value
				? r.value
				: r.value.slice((i.value - 1) * s.value, i.value * s.value)
		),
		f = E(() => {
			let m = []
			const v = a.value,
				b = i.value,
				w = o.value ? 4 : 5
			if (v <= 0) return m
			if (v <= 10) m = Array.from({ length: v }, (P, y) => ({ value: y + 1 }))
			else {
				let P = 1,
					y = !1
				for (; P <= v; )
					(b <= w && P <= w) || (b >= v - (w - 1) && P >= v - (w - 1))
						? ((y = !1), m.push({ value: P }))
						: P <= 2 || P >= v - 1
						? ((y = !1), m.push({ value: P }))
						: (b > w + 1 || b < v - (w + 1)) && b - P < w - 2 && P - b < w - 2
						? ((y = !1), m.push({ value: P }))
						: y || ((y = !0), m.push({ value: P, more: !0 })),
						P++
			}
			return m
		})
	return {
		postList: d,
		page: i,
		totalPage: a,
		pageRange: f,
		isLastPage: l,
		isFirstPage: c,
		isPaginationEnabled: u,
		changePage: (m) => {
			i.value !== m &&
				((i.value = m),
				setTimeout(() => {
					var b
					let v = 0
					e.value &&
						((v =
							((b = document.querySelector('.vp-blog')) == null
								? void 0
								: b.getBoundingClientRect().top) || 0),
						(v += window.scrollY - 64)),
						window.scrollTo({ top: v, behavior: 'instant' })
				}, 0))
		},
	}
}
var vr = R(!1)
function w6() {
	const { theme: e } = se()
	return E(() => (e.value.bulletin === !0 ? {} : e.value.bulletin))
}
function k6() {
	const e = rs('plume:bulletin', ''),
		t = Ua('plume:bulletin', ''),
		{ page: n } = se(),
		o = w6(),
		r = E(() => n.value.bulletin ?? !0)
	ve(
		() => {
			var s
			return (s = o.value) == null ? void 0 : s.lifetime
		},
		(s) => {
			var l
			const a = (l = o.value) == null ? void 0 : l.id
			s === 'session'
				? (vr.value = e.value !== a)
				: s === 'once'
				? (vr.value = t.value !== a)
				: (vr.value = !0)
		},
		{ immediate: !0 }
	)
	function i() {
		var l, c
		vr.value = !1
		const s = (l = o.value) == null ? void 0 : l.lifetime,
			a = (c = o.value) == null ? void 0 : c.id
		s === 'session' ? (e.value = a) : s === 'once' && (t.value = a)
	}
	return { bulletin: o, enableBulletin: r, showBulletin: vr, close: i }
}
function rc() {
	const { page: e, frontmatter: t } = se(),
		n = Yt(),
		o = E(() => {
			const i = n.value.contributors
			return (Kt(i) && i.mode) || 'inline'
		}),
		r = E(() => {
			var s
			return (t.value.contributors ?? !!n.value.contributors) === !1
				? []
				: (((s = e.value.git) == null ? void 0 : s.contributors) ?? []).reverse()
		})
	return { mode: o, contributors: r }
}
var Fd = Q5
function E6(e, t) {
	var n
	return ((n = Fd[e]) == null ? void 0 : n[t]) || Fd['/'][t]
}
var x6 = {
	CC0: { url: 'https://creativecommons.org/publicdomain/zero/1.0/', icons: ['zero'] },
	'CC-BY-4.0': { url: 'https://creativecommons.org/licenses/by/4.0/', icons: ['cc', 'by'] },
	'CC-BY-NC-4.0': {
		url: 'https://creativecommons.org/licenses/by-nc/4.0/',
		icons: ['cc', 'by', 'nc'],
	},
	'CC-BY-NC-SA-4.0': {
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
		icons: ['cc', 'by', 'nc', 'sa'],
	},
	'CC-BY-NC-ND-4.0': {
		url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
		icons: ['cc', 'by', 'nc', 'nd'],
	},
	'CC-BY-ND-4.0': {
		url: 'https://creativecommons.org/licenses/by-nd/4.0/',
		icons: ['cc', 'by', 'nd'],
	},
	'CC-BY-SA-4.0': {
		url: 'https://creativecommons.org/licenses/by-sa/4.0/',
		icons: ['cc', 'by', 'sa'],
	},
}
function P6(e) {
	const { theme: t } = se()
	at()
	const n = Rn(),
		{ contributors: o } = rc(),
		r = E(() => !!e.value),
		i = E(() => e.value.creation || 'original'),
		s = E(() => S6(e.value.license, n.value)),
		a = E(() => C6(e.value.author, i.value, o.value)),
		l = E(() => (i.value === 'original' ? location.href.split('#')[0] : e.value.source)),
		c = E(() => {
			const u = e.value.creation
			return u === 'translate'
				? t.value.copyrightCreationTranslateText || 'This article is translated from'
				: u === 'reprint'
				? t.value.copyrightCreationReprintText || 'This article is reprint from'
				: t.value.copyrightCreationOriginalText || 'This article link: '
		})
	return { license: s, author: a, hasCopyright: r, creation: i, creationText: c, sourceUrl: l }
}
function S6(e = 'CC-BY-4.0', t) {
	const n = typeof e == 'string' ? { name: e } : { ...e },
		o = x6[n.name],
		r = E6(t, n.name)
	return (
		r && (n.name = `${r} (${n.name})`),
		n.url || (n.url = o == null ? void 0 : o.url),
		(n.icons = o == null ? void 0 : o.icons),
		n
	)
}
function C6(e, t, n) {
	const o = n[0],
		r = typeof e == 'string' ? { name: e } : e
	if (r && !r.url) {
		const i = n.find((s) => s.name === r.name)
		i && (r.url = i.url)
	}
	return t === 'original' && o ? o : r
}
function nv() {
	const { theme: e, page: t, frontmatter: n } = se(),
		o = Yt()
	return E(() => {
		if (!(n.value.editLink ?? o.value.editLink ?? !0)) return null
		const { docsRepo: i, docsBranch: s = 'main', docsDir: a = '' } = o.value,
			{ editLinkText: l } = e.value
		if (!i) return null
		const c = O5({
			docsRepo: i,
			docsBranch: s,
			docsDir: a,
			filePathRelative: t.value.filePathRelative,
			editLinkPattern: n.value.editLinkPattern ?? e.value.editLinkPattern,
		})
		return c ? { text: l ?? 'Edit this page', link: c } : null
	})
}
var ic = R(),
	ov = !1,
	ga = 0
function T6(e) {
	const t = R(!1)
	if (dn) {
		ov || A6(), ga++
		const n = ve(ic, (o) => {
			var r, i, s
			o === e.el.value || ((r = e.el.value) != null && r.contains(o))
				? ((t.value = !0), (i = e.onFocus) == null || i.call(e))
				: ((t.value = !1), (s = e.onBlur) == null || s.call(e))
		})
		gt(() => {
			n(), ga--, ga || L6()
		})
	}
	return on(t)
}
function A6() {
	document.addEventListener('focusin', rv), (ov = !0), (ic.value = document.activeElement)
}
function L6() {
	document.removeEventListener('focusin', rv)
}
function rv() {
	ic.value = document.activeElement
}
var Oi = {
		r: { value: 200, offset: 36 },
		g: { value: 200, offset: 36 },
		b: { value: 200, offset: 36 },
	},
	_a = { r: { value: 32, offset: 36 }, g: { value: 32, offset: 36 }, b: { value: 32, offset: 36 } }
function B6(e, t, n) {
	const o = mi()
	let r = null,
		i = 0,
		s
	const a = E(() => {
		const p = o.value ? _a : Oi
		if (!n.value) return p
		const m = n.value
		if (typeof m == 'string' || typeof m == 'number') {
			if (o.value) return _a
			const v = jd(m)
			return v.length !== 3 ? Oi : Hd(v)
		}
		if (typeof m == 'object') {
			if ('r' in m) return o.value ? _a : zd({ ...Oi, ...m })
			const v = o.value ? 'dark' : 'light'
			if (v in m) {
				const b = m[v]
				if (typeof b == 'string' || typeof b == 'number') {
					const w = jd(b)
					return w.length !== 3 ? Oi : Hd(w)
				}
				return zd({ ...p, ...m })
			}
		}
		return p
	})
	ke(() => {
		e.value && t.value && ((r = e.value.getContext('2d')), s && window.cancelAnimationFrame(s), l())
	}),
		gt(() => {
			s && window.cancelAnimationFrame(s)
		})
	function l() {
		for (let p = 0; p <= 35; p++)
			for (let m = 0; m <= 35; m++) c(p, m, u(p, m, i), d(p, m, i), f(p, m, i))
		;(i = i + 0.02), (s = window.requestAnimationFrame(l))
	}
	function c(p, m, v, b, w) {
		r && ((r.fillStyle = `rgb(${v},${b},${w})`), r.fillRect(p, m, 1, 1))
	}
	function u(p, m, v) {
		const b = a.value.r
		return Math.floor(b.value + b.offset * Math.cos((p * p - m * m) / 300 + v))
	}
	function d(p, m, v) {
		const b = a.value.g
		return Math.floor(
			b.value + b.offset * Math.sin((p * p * Math.cos(v / 4) + m * m * Math.sin(v / 3)) / 300)
		)
	}
	function f(p, m, v) {
		const b = a.value.b
		return Math.floor(
			b.value +
				b.offset *
					Math.sin(5 * Math.sin(v / 9) + ((p - 100) * (p - 100) + (m - 100) * (m - 100)) / 1100)
		)
	}
}
function jd(e) {
	return typeof e == 'number' || Number(e) === Number.parseInt(e)
		? [e, e, e].map((t) => Number(t))
		: e.includes(',')
		? e
				.replace(/\s/g, '')
				.split(',')
				.map((t) => Number(t))
		: []
}
function Hd([e, t, n]) {
	return { r: ba(e), g: ba(t), b: ba(n) }
}
function ba(e) {
	const t = 256 - e
	return { value: e, offset: t > 64 ? 64 : t }
}
function zd(e) {
	return (
		Object.keys(e).forEach((t) => {
			const n = e[t]
			;(n.value = Number(n.value)), (n.offset = Number(n.offset))
		}),
		e
	)
}
var O6 = R(Y5),
	V6 = () => O6
function Co() {
	const { page: e } = se(),
		t = Ym(),
		n = E(() => t.value.some((r) => r.path === e.value.path)),
		o = E(() => {
			const r = e.value.type
			return r === 'blog' || r === 'blog-archives' || r === 'blog-tags' || r === 'blog-categories'
		})
	return { isBlogPost: n, isBlogLayout: o }
}
function sc({ removeCurrent: e = !0 } = {}) {
	const t = Yt(),
		{ page: n } = se(),
		o = Rn(),
		{ isBlogPost: r } = Co(),
		i = E(() => {
			var c, u
			const l = o.value
			return {
				label:
					(u = (c = t.value.locales) == null ? void 0 : c[l]) == null
						? void 0
						: u.selectLanguageName,
				link: l,
			}
		}),
		s = (l) => {
			const u = (n.value.filePathRelative ? `/${n.value.filePathRelative}` : n.value.path).slice(
					o.value.length
				),
				d = Ln(l, u),
				{ notFound: f, path: p } = Xo(d)
			if (!f) return p
			const m = t.value.blog
			if (r.value && m !== !1) return et((m == null ? void 0 : m.link) || Ln(l, 'blog/'))
			const v = et(t.value.home || '/'),
				b = Xo(et(l))
			return b.notFound ? v : b.path
		}
	return {
		localeLinks: E(() =>
			Object.entries(t.value.locales || {}).flatMap(([l, c]) =>
				e && i.value.label === c.selectLanguageName
					? []
					: { text: c.selectLanguageName, link: s(l) }
			)
		),
		currentLang: i,
	}
}
function iv() {
	const { theme: e, page: t, frontmatter: n } = se(),
		o = Yt(),
		r = oo(),
		i = E(() => {
			var c
			return (c = t.value.git) != null && c.updatedTime ? new Date(t.value.git.updatedTime) : null
		}),
		s = E(() => {
			var c
			return (c = i.value) == null ? void 0 : c.toISOString()
		}),
		a = R(''),
		l = E(() => (o.value.lastUpdated === !1 ? '' : e.value.lastUpdatedText || 'Last updated'))
	return (
		ke(() => {
			ir(() => {
				var c, u, d
				n.value.lastUpdated === !1 ||
					o.value.lastUpdated === !1 ||
					(a.value = i.value
						? new Intl.DateTimeFormat(
								(u = (c = o.value.lastUpdated) == null ? void 0 : c.formatOptions) != null &&
								u.forceLocale
									? r.value
									: void 0,
								((d = o.value.lastUpdated) == null ? void 0 : d.formatOptions) ?? {
									dateStyle: 'short',
									timeStyle: 'short',
								}
						  ).format(i.value)
						: '')
			})
		}),
		{ datetime: a, isoDatetime: s, lastUpdatedText: l }
	)
}
var $6 = /\.md(?:(?:#|\?).*)?$/
function sv(e, t) {
	const n = at(),
		{ page: o } = se(),
		r = E(() => {
			const s = Et(e),
				a = Et(t)
			return (s && F_(s)) || a === '_blank'
		}),
		i = E(() => {
			const s = Et(e)
			if (!s) return
			if (r.value) return s
			const a = s.startsWith('./') && $6.test(s) ? `/${o.value.filePathRelative}` : n.path,
				l = Dn(s, a)
			return l.includes('#') && l.slice(0, l.indexOf('#')) === n.path ? l.slice(l.indexOf('#')) : l
		})
	return { isExternal: r, link: i }
}
function av() {
	const { theme: e } = se()
	return E(() => lv(e.value.navbar || []))
}
function lv(e, t = '') {
	const n = []
	return (
		e.forEach((o) => {
			if (typeof o == 'string') n.push(Mr(Ln(t, o)))
			else {
				const { items: r, prefix: i, ...s } = o,
					a = { ...s }
				'link' in a && (a.link = Ln(t, a.link)),
					r != null && r.length && (a.items = lv(r, Ln(t, i))),
					n.push(a)
			}
		}),
		n
	)
}
function I6() {
	const e = R(!1)
	function t() {
		;(e.value = !0), window.addEventListener('resize', r)
	}
	function n() {
		;(e.value = !1), window.removeEventListener('resize', r)
	}
	function o() {
		e.value ? n() : t()
	}
	function r() {
		window.outerWidth >= 768 && n()
	}
	const i = at()
	return ve(() => i.path, n), { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: o }
}
var al = [],
	cv = Symbol('')
function R6() {
	const { frontmatter: e, theme: t } = se(),
		n = R([])
	return (
		Tb(() => {
			n.value = D6(e.value.outline ?? t.value.outline)
		}),
		rn(cv, n),
		n
	)
}
function ac() {
	const e = qe(cv)
	if (!e) throw new Error('useHeaders() is called without provider.')
	return e
}
function D6(e) {
	const t = Array.from(document.querySelectorAll('.vp-doc :where(h1,h2,h3,h4,h5,h6)'))
		.filter((n) => n.id && n.hasChildNodes())
		.map((n) => {
			const o = Number(n.tagName[1])
			return { element: n, title: M6(n), link: `#${n.id}`, level: o }
		})
	return N6(t, e)
}
function M6(e) {
	const t = e.firstChild,
		n = t == null ? void 0 : t.firstChild
	let o = ''
	for (const i of Array.from((n == null ? void 0 : n.childNodes) ?? []))
		if (i.nodeType === 1) {
			if (i.classList.contains('vp-badge') || i.classList.contains('ignore-header')) continue
			o += i.textContent
		} else i.nodeType === 3 && (o += i.textContent)
	let r = t == null ? void 0 : t.nextSibling
	for (; r; ) (r.nodeType === 1 || r.nodeType === 3) && (o += r.textContent), (r = r.nextSibling)
	return o.trim()
}
function N6(e, t) {
	if (t === !1) return []
	const n = t || 2,
		[o, r] = typeof n == 'number' ? [n, n] : n === 'deep' ? [2, 6] : n
	;(e = e.filter((s) => s.level >= o && s.level <= r)), (al.length = 0)
	for (const { element: s, link: a } of e) al.push({ element: s, link: a })
	const i = []
	e: for (let s = 0; s < e.length; s++) {
		const a = e[s]
		if (s === 0) i.push(a)
		else {
			for (let l = s - 1; l >= 0; l--) {
				const c = e[l]
				if (c.level < a.level) {
					;(c.children || (c.children = [])).push(a)
					continue e
				}
			}
			i.push(a)
		}
	}
	return i
}
function F6(e, t) {
	const { isAsideEnabled: n } = v6(),
		o = sr(),
		r = R(o.currentRoute.value.hash)
	let i = null
	const s = () => {
		if (!n.value) return
		const c = window.scrollY,
			u = window.innerHeight,
			d = document.body.offsetHeight,
			f = Math.abs(c + u - d) < 1,
			p = al
				.map(({ element: v, link: b }) => ({ link: b, top: j6(v) }))
				.filter(({ top: v }) => !Number.isNaN(v))
				.sort((v, b) => v.top - b.top)
		if (!p.length) {
			a(null)
			return
		}
		if (c < 1) {
			a(null)
			return
		}
		if (f) {
			a(p[p.length - 1].link)
			return
		}
		let m = null
		for (const { link: v, top: b } of p) {
			if (b > c + 88) break
			m = v
		}
		a(m)
	}
	function a(c) {
		var d
		;(r.value = c || ''),
			i && i.classList.remove('active'),
			c == null
				? (i = null)
				: (i =
						((d = e.value) == null
							? void 0
							: d.querySelector(`a[href="${decodeURIComponent(c)}"]`)) ?? null)
		const u = i
		u
			? (u.classList.add('active'),
			  t.value && ((t.value.style.top = `${u.offsetTop + 39}px`), (t.value.style.opacity = '1')))
			: t.value && ((t.value.style.top = '33px'), (t.value.style.opacity = '0'))
	}
	const l = jb(s, 100)
	qb(
		r,
		() => {
			H6(o, r.value)
		},
		{ debounce: 500 }
	),
		ke(() => {
			requestAnimationFrame(s), window.addEventListener('scroll', l)
		}),
		dp(() => {
			a(location.hash)
		}),
		gt(() => {
			window.removeEventListener('scroll', l)
		})
}
function j6(e) {
	let t = 0
	for (; e !== document.body; ) {
		if (e === null) return Number.NaN
		;(t += e.offsetTop), (e = e.offsetParent)
	}
	return t
}
async function H6(e, t) {
	const { path: n, query: o } = e.currentRoute.value,
		{ scrollBehavior: r } = e.options
	;(e.options.scrollBehavior = void 0),
		await e.replace({ path: n, query: o, hash: t }),
		(e.options.scrollBehavior = r)
}
function z6() {
	const e = at(),
		{ frontmatter: t, theme: n } = se(),
		{ sidebar: o } = mn(),
		r = Ym(),
		i = oo(),
		{ isBlogPost: s } = Co(),
		a = E(() => {
			if (n.value.prevPage === !1) return null
			const c = qd(t.value.prev)
			return c !== !1
				? c
				: s.value
				? Wd(
						r.value.filter((u) => u.lang === i.value),
						e.path,
						-1
				  )
				: Ud(ll(o.value), e.path, -1)
		}),
		l = E(() => {
			if (n.value.nextPage === !1) return null
			const c = qd(t.value.next)
			return c !== !1
				? c
				: s.value
				? Wd(
						r.value.filter((u) => u.lang === i.value),
						e.path,
						1
				  )
				: Ud(ll(o.value), e.path, 1)
		})
	return { prev: a, next: l }
}
function qd(e) {
	return e === !1 ? null : sn(e) ? Mr(e) : Kt(e) ? e : !1
}
function ll(e, t = []) {
	for (const n of e)
		n.link && t.push({ link: n.link, text: n.text || n.dir || '' }),
			Array.isArray(n.items) && n.items.length && ll(n.items, t)
	return t
}
function Ud(e, t, n) {
	const o = e.findIndex((r) => Dn(r.link) === t)
	if (o !== -1) {
		const r = e[o + n]
		if (r != null && r.link) return { link: r.link, text: r.text }
	}
	return null
}
function Wd(e, t, n) {
	const o = e.findIndex((r) => r.path === t)
	if (o !== -1) {
		const r = e[o + n]
		return r != null && r.path ? { link: r.path, text: r.title } : null
	}
	return null
}
var ya = null,
	gr = null,
	q6 = {
		wait: () => ya,
		pending: () => {
			ya = new Promise((e) => (gr = e))
		},
		resolve: () => {
			gr == null || gr(), (ya = null), (gr = null)
		},
	},
	uv = () => q6
function U6(e) {
	;(e.options.scrollBehavior = async (t, n, o) => (
		await uv().wait(), o || (t.hash ? { el: t.hash, top: 64 } : { top: 0 })
	)),
		e.beforeEach(() => {
			dn && document.documentElement.classList.remove('smooth')
		}),
		e.afterEach(() =>
			ht(() => {
				dn && document.documentElement.classList.add('smooth')
			})
		)
}
function W6() {
	const { frontmatter: e } = se()
	p5(
		E(() => ({
			parent:
				typeof e.value.watermark == 'object' && e.value.watermark.fullPage === !1
					? '.vp-doc'
					: 'body',
		}))
	)
}
const G6 = $({
	__name: 'VPBadge',
	props: { text: { default: void 0 }, type: { default: 'tip' } },
	setup(e, { expose: t }) {
		t()
		const n = {}
		return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
	},
})
function K6(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'span',
			{ class: J(['vp-badge', n.type]) },
			[C(e.$slots, 'default', {}, () => [Te(D(n.text), 1)], !0)],
			2
		)
	)
}
const cl = M(G6, [
		['render', K6],
		['__scopeId', 'data-v-faa8fa16'],
		['__file', 'VPBadge.vue'],
	]),
	dv = /^[a-z0-9]+(-[a-z0-9]+)*$/,
	Rs = (e, t, n, o = '') => {
		const r = e.split(':')
		if (e.slice(0, 1) === '@') {
			if (r.length < 2 || r.length > 3) return null
			o = r.shift().slice(1)
		}
		if (r.length > 3 || !r.length) return null
		if (r.length > 1) {
			const a = r.pop(),
				l = r.pop(),
				c = { provider: r.length > 0 ? r[0] : o, prefix: l, name: a }
			return t && !Ui(c) ? null : c
		}
		const i = r[0],
			s = i.split('-')
		if (s.length > 1) {
			const a = { provider: o, prefix: s.shift(), name: s.join('-') }
			return t && !Ui(a) ? null : a
		}
		if (n && o === '') {
			const a = { provider: o, prefix: '', name: i }
			return t && !Ui(a, n) ? null : a
		}
		return null
	},
	Ui = (e, t) => (e ? !!(((t && e.prefix === '') || e.prefix) && e.name) : !1),
	fv = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
	hs = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
	lc = Object.freeze({ ...fv, ...hs }),
	ul = Object.freeze({ ...lc, body: '', hidden: !1 })
function Y6(e, t) {
	const n = {}
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0)
	const o = ((e.rotate || 0) + (t.rotate || 0)) % 4
	return o && (n.rotate = o), n
}
function Gd(e, t) {
	const n = Y6(e, t)
	for (const o in ul)
		o in hs
			? o in e && !(o in n) && (n[o] = hs[o])
			: o in t
			? (n[o] = t[o])
			: o in e && (n[o] = e[o])
	return n
}
function Q6(e, t) {
	const n = e.icons,
		o = e.aliases || Object.create(null),
		r = Object.create(null)
	function i(s) {
		if (n[s]) return (r[s] = [])
		if (!(s in r)) {
			r[s] = null
			const a = o[s] && o[s].parent,
				l = a && i(a)
			l && (r[s] = [a].concat(l))
		}
		return r[s]
	}
	return Object.keys(n).concat(Object.keys(o)).forEach(i), r
}
function J6(e, t, n) {
	const o = e.icons,
		r = e.aliases || Object.create(null)
	let i = {}
	function s(a) {
		i = Gd(o[a] || r[a], i)
	}
	return s(t), n.forEach(s), Gd(e, i)
}
function pv(e, t) {
	const n = []
	if (typeof e != 'object' || typeof e.icons != 'object') return n
	e.not_found instanceof Array &&
		e.not_found.forEach((r) => {
			t(r, null), n.push(r)
		})
	const o = Q6(e)
	for (const r in o) {
		const i = o[r]
		i && (t(r, J6(e, r, i)), n.push(r))
	}
	return n
}
const X6 = { provider: '', aliases: {}, not_found: {}, ...fv }
function wa(e, t) {
	for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1
	return !0
}
function hv(e) {
	if (typeof e != 'object' || e === null) return null
	const t = e
	if (typeof t.prefix != 'string' || !e.icons || typeof e.icons != 'object' || !wa(e, X6))
		return null
	const n = t.icons
	for (const r in n) {
		const i = n[r]
		if (!r || typeof i.body != 'string' || !wa(i, ul)) return null
	}
	const o = t.aliases || Object.create(null)
	for (const r in o) {
		const i = o[r],
			s = i.parent
		if (!r || typeof s != 'string' || (!n[s] && !o[s]) || !wa(i, ul)) return null
	}
	return t
}
const Kd = Object.create(null)
function Z6(e, t) {
	return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() }
}
function Eo(e, t) {
	const n = Kd[e] || (Kd[e] = Object.create(null))
	return n[t] || (n[t] = Z6(e, t))
}
function cc(e, t) {
	return hv(t)
		? pv(t, (n, o) => {
				o ? (e.icons[n] = o) : e.missing.add(n)
		  })
		: []
}
function e7(e, t, n) {
	try {
		if (typeof n.body == 'string') return (e.icons[t] = { ...n }), !0
	} catch {}
	return !1
}
let ei = !1
function mv(e) {
	return typeof e == 'boolean' && (ei = e), ei
}
function t7(e) {
	const t = typeof e == 'string' ? Rs(e, !0, ei) : e
	if (t) {
		const n = Eo(t.provider, t.prefix),
			o = t.name
		return n.icons[o] || (n.missing.has(o) ? null : void 0)
	}
}
function n7(e, t) {
	const n = Rs(e, !0, ei)
	if (!n) return !1
	const o = Eo(n.provider, n.prefix)
	return t ? e7(o, n.name, t) : (o.missing.add(n.name), !0)
}
function o7(e, t) {
	if (typeof e != 'object') return !1
	if ((typeof t != 'string' && (t = e.provider || ''), ei && !t && !e.prefix)) {
		let r = !1
		return (
			hv(e) &&
				((e.prefix = ''),
				pv(e, (i, s) => {
					n7(i, s) && (r = !0)
				})),
			r
		)
	}
	const n = e.prefix
	if (!Ui({ provider: t, prefix: n, name: 'a' })) return !1
	const o = Eo(t, n)
	return !!cc(o, e)
}
const r7 = Object.freeze({ width: null, height: null }),
	i7 = Object.freeze({ ...r7, ...hs })
'' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16)
const dl = Object.create(null)
function s7(e, t) {
	dl[e] = t
}
function fl(e) {
	return dl[e] || dl['']
}
function uc(e) {
	let t
	if (typeof e.resources == 'string') t = [e.resources]
	else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null
	return {
		resources: t,
		path: e.path || '/',
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1,
	}
}
const dc = Object.create(null),
	_r = ['https://api.simplesvg.com', 'https://api.unisvg.com'],
	Wi = []
for (; _r.length > 0; )
	_r.length === 1 || Math.random() > 0.5 ? Wi.push(_r.shift()) : Wi.push(_r.pop())
dc[''] = uc({ resources: ['https://api.iconify.design'].concat(Wi) })
function a7(e, t) {
	const n = uc(t)
	return n === null ? !1 : ((dc[e] = n), !0)
}
function fc(e) {
	return dc[e]
}
const l7 = () => {
	let e
	try {
		if (((e = fetch), typeof e == 'function')) return e
	} catch {}
}
let Yd = l7()
function c7(e, t) {
	const n = fc(e)
	if (!n) return 0
	let o
	if (!n.maxURL) o = 0
	else {
		let r = 0
		n.resources.forEach((s) => {
			r = Math.max(r, s.length)
		})
		const i = t + '.json?icons='
		o = n.maxURL - r - n.path.length - i.length
	}
	return o
}
function u7(e) {
	return e === 404
}
const d7 = (e, t, n) => {
	const o = [],
		r = c7(e, t),
		i = 'icons'
	let s = { type: i, provider: e, prefix: t, icons: [] },
		a = 0
	return (
		n.forEach((l, c) => {
			;(a += l.length + 1),
				a >= r &&
					c > 0 &&
					(o.push(s), (s = { type: i, provider: e, prefix: t, icons: [] }), (a = l.length)),
				s.icons.push(l)
		}),
		o.push(s),
		o
	)
}
function f7(e) {
	if (typeof e == 'string') {
		const t = fc(e)
		if (t) return t.path
	}
	return '/'
}
const p7 = (e, t, n) => {
		if (!Yd) {
			n('abort', 424)
			return
		}
		let o = f7(t.provider)
		switch (t.type) {
			case 'icons': {
				const i = t.prefix,
					a = t.icons.join(','),
					l = new URLSearchParams({ icons: a })
				o += i + '.json?' + l.toString()
				break
			}
			case 'custom': {
				const i = t.uri
				o += i.slice(0, 1) === '/' ? i.slice(1) : i
				break
			}
			default:
				n('abort', 400)
				return
		}
		let r = 503
		Yd(e + o)
			.then((i) => {
				const s = i.status
				if (s !== 200) {
					setTimeout(() => {
						n(u7(s) ? 'abort' : 'next', s)
					})
					return
				}
				return (r = 501), i.json()
			})
			.then((i) => {
				if (typeof i != 'object' || i === null) {
					setTimeout(() => {
						i === 404 ? n('abort', i) : n('next', r)
					})
					return
				}
				setTimeout(() => {
					n('success', i)
				})
			})
			.catch(() => {
				n('next', r)
			})
	},
	h7 = { prepare: d7, send: p7 }
function m7(e) {
	const t = { loaded: [], missing: [], pending: [] },
		n = Object.create(null)
	e.sort((r, i) =>
		r.provider !== i.provider
			? r.provider.localeCompare(i.provider)
			: r.prefix !== i.prefix
			? r.prefix.localeCompare(i.prefix)
			: r.name.localeCompare(i.name)
	)
	let o = { provider: '', prefix: '', name: '' }
	return (
		e.forEach((r) => {
			if (o.name === r.name && o.prefix === r.prefix && o.provider === r.provider) return
			o = r
			const i = r.provider,
				s = r.prefix,
				a = r.name,
				l = n[i] || (n[i] = Object.create(null)),
				c = l[s] || (l[s] = Eo(i, s))
			let u
			a in c.icons
				? (u = t.loaded)
				: s === '' || c.missing.has(a)
				? (u = t.missing)
				: (u = t.pending)
			const d = { provider: i, prefix: s, name: a }
			u.push(d)
		}),
		t
	)
}
function vv(e, t) {
	e.forEach((n) => {
		const o = n.loaderCallbacks
		o && (n.loaderCallbacks = o.filter((r) => r.id !== t))
	})
}
function v7(e) {
	e.pendingCallbacksFlag ||
		((e.pendingCallbacksFlag = !0),
		setTimeout(() => {
			e.pendingCallbacksFlag = !1
			const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : []
			if (!t.length) return
			let n = !1
			const o = e.provider,
				r = e.prefix
			t.forEach((i) => {
				const s = i.icons,
					a = s.pending.length
				;(s.pending = s.pending.filter((l) => {
					if (l.prefix !== r) return !0
					const c = l.name
					if (e.icons[c]) s.loaded.push({ provider: o, prefix: r, name: c })
					else if (e.missing.has(c)) s.missing.push({ provider: o, prefix: r, name: c })
					else return (n = !0), !0
					return !1
				})),
					s.pending.length !== a &&
						(n || vv([e], i.id),
						i.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), i.abort))
			})
		}))
}
let g7 = 0
function _7(e, t, n) {
	const o = g7++,
		r = vv.bind(null, n, o)
	if (!t.pending.length) return r
	const i = { id: o, icons: t, callback: e, abort: r }
	return (
		n.forEach((s) => {
			;(s.loaderCallbacks || (s.loaderCallbacks = [])).push(i)
		}),
		r
	)
}
function b7(e, t = !0, n = !1) {
	const o = []
	return (
		e.forEach((r) => {
			const i = typeof r == 'string' ? Rs(r, t, n) : r
			i && o.push(i)
		}),
		o
	)
}
var y7 = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 }
function w7(e, t, n, o) {
	const r = e.resources.length,
		i = e.random ? Math.floor(Math.random() * r) : e.index
	let s
	if (e.random) {
		let j = e.resources.slice(0)
		for (s = []; j.length > 1; ) {
			const U = Math.floor(Math.random() * j.length)
			s.push(j[U]), (j = j.slice(0, U).concat(j.slice(U + 1)))
		}
		s = s.concat(j)
	} else s = e.resources.slice(i).concat(e.resources.slice(0, i))
	const a = Date.now()
	let l = 'pending',
		c = 0,
		u,
		d = null,
		f = [],
		p = []
	typeof o == 'function' && p.push(o)
	function m() {
		d && (clearTimeout(d), (d = null))
	}
	function v() {
		l === 'pending' && (l = 'aborted'),
			m(),
			f.forEach((j) => {
				j.status === 'pending' && (j.status = 'aborted')
			}),
			(f = [])
	}
	function b(j, U) {
		U && (p = []), typeof j == 'function' && p.push(j)
	}
	function w() {
		return {
			startTime: a,
			payload: t,
			status: l,
			queriesSent: c,
			queriesPending: f.length,
			subscribe: b,
			abort: v,
		}
	}
	function P() {
		;(l = 'failed'),
			p.forEach((j) => {
				j(void 0, u)
			})
	}
	function y() {
		f.forEach((j) => {
			j.status === 'pending' && (j.status = 'aborted')
		}),
			(f = [])
	}
	function S(j, U, Z) {
		const q = U !== 'success'
		switch (((f = f.filter((V) => V !== j)), l)) {
			case 'pending':
				break
			case 'failed':
				if (q || !e.dataAfterTimeout) return
				break
			default:
				return
		}
		if (U === 'abort') {
			;(u = Z), P()
			return
		}
		if (q) {
			;(u = Z), f.length || (s.length ? I() : P())
			return
		}
		if ((m(), y(), !e.random)) {
			const V = e.resources.indexOf(j.resource)
			V !== -1 && V !== e.index && (e.index = V)
		}
		;(l = 'completed'),
			p.forEach((V) => {
				V(Z)
			})
	}
	function I() {
		if (l !== 'pending') return
		m()
		const j = s.shift()
		if (j === void 0) {
			if (f.length) {
				d = setTimeout(() => {
					m(), l === 'pending' && (y(), P())
				}, e.timeout)
				return
			}
			P()
			return
		}
		const U = {
			status: 'pending',
			resource: j,
			callback: (Z, q) => {
				S(U, Z, q)
			},
		}
		f.push(U), c++, (d = setTimeout(I, e.rotate)), n(j, t, U.callback)
	}
	return setTimeout(I), w
}
function gv(e) {
	const t = { ...y7, ...e }
	let n = []
	function o() {
		n = n.filter((a) => a().status === 'pending')
	}
	function r(a, l, c) {
		const u = w7(t, a, l, (d, f) => {
			o(), c && c(d, f)
		})
		return n.push(u), u
	}
	function i(a) {
		return n.find((l) => a(l)) || null
	}
	return {
		query: r,
		find: i,
		setIndex: (a) => {
			t.index = a
		},
		getIndex: () => t.index,
		cleanup: o,
	}
}
function Qd() {}
const ka = Object.create(null)
function k7(e) {
	if (!ka[e]) {
		const t = fc(e)
		if (!t) return
		const n = gv(t),
			o = { config: t, redundancy: n }
		ka[e] = o
	}
	return ka[e]
}
function E7(e, t, n) {
	let o, r
	if (typeof e == 'string') {
		const i = fl(e)
		if (!i) return n(void 0, 424), Qd
		r = i.send
		const s = k7(e)
		s && (o = s.redundancy)
	} else {
		const i = uc(e)
		if (i) {
			o = gv(i)
			const s = e.resources ? e.resources[0] : '',
				a = fl(s)
			a && (r = a.send)
		}
	}
	return !o || !r ? (n(void 0, 424), Qd) : o.query(t, r, n)().abort
}
const Jd = 'iconify2',
	ti = 'iconify',
	_v = ti + '-count',
	Xd = ti + '-version',
	bv = 36e5,
	x7 = 168,
	P7 = 50
function pl(e, t) {
	try {
		return e.getItem(t)
	} catch {}
}
function pc(e, t, n) {
	try {
		return e.setItem(t, n), !0
	} catch {}
}
function Zd(e, t) {
	try {
		e.removeItem(t)
	} catch {}
}
function hl(e, t) {
	return pc(e, _v, t.toString())
}
function ml(e) {
	return parseInt(pl(e, _v)) || 0
}
const Ds = { local: !0, session: !0 },
	yv = { local: new Set(), session: new Set() }
let hc = !1
function S7(e) {
	hc = e
}
let Vi = typeof window > 'u' ? {} : window
function wv(e) {
	const t = e + 'Storage'
	try {
		if (Vi && Vi[t] && typeof Vi[t].length == 'number') return Vi[t]
	} catch {}
	Ds[e] = !1
}
function kv(e, t) {
	const n = wv(e)
	if (!n) return
	const o = pl(n, Xd)
	if (o !== Jd) {
		if (o) {
			const a = ml(n)
			for (let l = 0; l < a; l++) Zd(n, ti + l.toString())
		}
		pc(n, Xd, Jd), hl(n, 0)
		return
	}
	const r = Math.floor(Date.now() / bv) - x7,
		i = (a) => {
			const l = ti + a.toString(),
				c = pl(n, l)
			if (typeof c == 'string') {
				try {
					const u = JSON.parse(c)
					if (
						typeof u == 'object' &&
						typeof u.cached == 'number' &&
						u.cached > r &&
						typeof u.provider == 'string' &&
						typeof u.data == 'object' &&
						typeof u.data.prefix == 'string' &&
						t(u, a)
					)
						return !0
				} catch {}
				Zd(n, l)
			}
		}
	let s = ml(n)
	for (let a = s - 1; a >= 0; a--) i(a) || (a === s - 1 ? (s--, hl(n, s)) : yv[e].add(a))
}
function Ev() {
	if (!hc) {
		S7(!0)
		for (const e in Ds)
			kv(e, (t) => {
				const n = t.data,
					o = t.provider,
					r = n.prefix,
					i = Eo(o, r)
				if (!cc(i, n).length) return !1
				const s = n.lastModified || -1
				return (
					(i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s), !0
				)
			})
	}
}
function C7(e, t) {
	const n = e.lastModifiedCached
	if (n && n >= t) return n === t
	if (((e.lastModifiedCached = t), n))
		for (const o in Ds)
			kv(o, (r) => {
				const i = r.data
				return r.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t
			})
	return !0
}
function T7(e, t) {
	hc || Ev()
	function n(o) {
		let r
		if (!Ds[o] || !(r = wv(o))) return
		const i = yv[o]
		let s
		if (i.size) i.delete((s = Array.from(i).shift()))
		else if (((s = ml(r)), s >= P7 || !hl(r, s + 1))) return
		const a = { cached: Math.floor(Date.now() / bv), provider: e.provider, data: t }
		return pc(r, ti + s.toString(), JSON.stringify(a))
	}
	;(t.lastModified && !C7(e, t.lastModified)) ||
		(Object.keys(t.icons).length &&
			(t.not_found && ((t = Object.assign({}, t)), delete t.not_found), n('local') || n('session')))
}
function ef() {}
function A7(e) {
	e.iconsLoaderFlag ||
		((e.iconsLoaderFlag = !0),
		setTimeout(() => {
			;(e.iconsLoaderFlag = !1), v7(e)
		}))
}
function L7(e) {
	const t = [],
		n = []
	return (
		e.forEach((o) => {
			;(o.match(dv) ? t : n).push(o)
		}),
		{ valid: t, invalid: n }
	)
}
function br(e, t, n, o) {
	function r() {
		const i = e.pendingIcons
		t.forEach((s) => {
			i && i.delete(s), e.icons[s] || e.missing.add(s)
		})
	}
	if (n && typeof n == 'object')
		try {
			if (!cc(e, n).length) {
				r()
				return
			}
			o && T7(e, n)
		} catch (i) {
			console.error(i)
		}
	r(), A7(e)
}
function tf(e, t) {
	e instanceof Promise
		? e
				.then((n) => {
					t(n)
				})
				.catch(() => {
					t(null)
				})
		: t(e)
}
function B7(e, t) {
	e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
		e.iconsQueueFlag ||
			((e.iconsQueueFlag = !0),
			setTimeout(() => {
				e.iconsQueueFlag = !1
				const { provider: n, prefix: o } = e,
					r = e.iconsToLoad
				if ((delete e.iconsToLoad, !r || !r.length)) return
				const i = e.loadIcon
				if (e.loadIcons && (r.length > 1 || !i)) {
					tf(e.loadIcons(r, o, n), (u) => {
						br(e, r, u, !1)
					})
					return
				}
				if (i) {
					r.forEach((u) => {
						const d = i(u, o, n)
						tf(d, (f) => {
							const p = f ? { prefix: o, icons: { [u]: f } } : null
							br(e, [u], p, !1)
						})
					})
					return
				}
				const { valid: s, invalid: a } = L7(r)
				if ((a.length && br(e, a, null, !1), !s.length)) return
				const l = o.match(dv) ? fl(n) : null
				if (!l) {
					br(e, s, null, !1)
					return
				}
				l.prepare(n, o, s).forEach((u) => {
					E7(n, u, (d) => {
						br(e, u.icons, d, !0)
					})
				})
			}))
}
const O7 = (e, t) => {
		const n = b7(e, !0, mv()),
			o = m7(n)
		if (!o.pending.length) {
			let l = !0
			return (
				t &&
					setTimeout(() => {
						l && t(o.loaded, o.missing, o.pending, ef)
					}),
				() => {
					l = !1
				}
			)
		}
		const r = Object.create(null),
			i = []
		let s, a
		return (
			o.pending.forEach((l) => {
				const { provider: c, prefix: u } = l
				if (u === a && c === s) return
				;(s = c), (a = u), i.push(Eo(c, u))
				const d = r[c] || (r[c] = Object.create(null))
				d[u] || (d[u] = [])
			}),
			o.pending.forEach((l) => {
				const { provider: c, prefix: u, name: d } = l,
					f = Eo(c, u),
					p = f.pendingIcons || (f.pendingIcons = new Set())
				p.has(d) || (p.add(d), r[c][u].push(d))
			}),
			i.forEach((l) => {
				const c = r[l.provider][l.prefix]
				c.length && B7(l, c)
			}),
			t ? _7(t, o, i) : ef
		)
	},
	V7 = (e) =>
		new Promise((t, n) => {
			const o = typeof e == 'string' ? Rs(e, !0) : e
			if (!o) {
				n(e)
				return
			}
			O7([o || e], (r) => {
				if (r.length && o) {
					const i = t7(o)
					if (i) {
						t({ ...lc, ...i })
						return
					}
				}
				n(e)
			})
		})
;({ ...i7 })
const nf = { backgroundColor: 'currentColor' },
	$7 = { backgroundColor: 'transparent' },
	of = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
	rf = { webkitMask: nf, mask: nf, background: $7 }
for (const e in rf) {
	const t = rf[e]
	for (const n in of) t[e + n] = of[n]
}
const Ea = {}
;['horizontal', 'vertical'].forEach((e) => {
	const t = e.slice(0, 1) + 'Flip'
	;(Ea[e + '-flip'] = t), (Ea[e.slice(0, 1) + '-flip'] = t), (Ea[e + 'Flip'] = t)
})
mv(!0)
s7('', h7)
if (typeof document < 'u' && typeof window < 'u') {
	Ev()
	const e = window
	if (e.IconifyPreload !== void 0) {
		const t = e.IconifyPreload,
			n = 'Invalid IconifyPreload syntax.'
		typeof t == 'object' &&
			t !== null &&
			(t instanceof Array ? t : [t]).forEach((o) => {
				try {
					;(typeof o != 'object' ||
						o === null ||
						o instanceof Array ||
						typeof o.icons != 'object' ||
						typeof o.prefix != 'string' ||
						!o7(o)) &&
						console.error(n)
				} catch {
					console.error(n)
				}
			})
	}
	if (e.IconifyProviders !== void 0) {
		const t = e.IconifyProviders
		if (typeof t == 'object' && t !== null)
			for (let n in t) {
				const o = 'IconifyProviders[' + n + '] is invalid.'
				try {
					const r = t[n]
					if (typeof r != 'object' || !r || r.resources === void 0) continue
					a7(n, r) || console.error(o)
				} catch {
					console.error(o)
				}
			}
	}
}
;({ ...lc })
const xv = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
	Pv = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
	mc = Object.freeze({ ...xv, ...Pv })
Object.freeze({ ...mc, body: '', hidden: !1 })
;({ ...xv })
const Sv = Object.freeze({ width: null, height: null }),
	Cv = Object.freeze({ ...Sv, ...Pv })
function I7(e, t) {
	const n = { ...e }
	for (const o in t) {
		const r = t[o],
			i = typeof r
		o in Sv
			? (r === null || (r && (i === 'string' || i === 'number'))) && (n[o] = r)
			: i === typeof n[o] && (n[o] = o === 'rotate' ? r % 4 : r)
	}
	return n
}
const R7 = /[\s,]+/
function D7(e, t) {
	t.split(R7).forEach((n) => {
		switch (n.trim()) {
			case 'horizontal':
				e.hFlip = !0
				break
			case 'vertical':
				e.vFlip = !0
				break
		}
	})
}
function M7(e, t = 0) {
	const n = e.replace(/^-?[0-9.]*/, '')
	function o(r) {
		for (; r < 0; ) r += 4
		return r % 4
	}
	if (n === '') {
		const r = parseInt(e)
		return isNaN(r) ? 0 : o(r)
	} else if (n !== e) {
		let r = 0
		switch (n) {
			case '%':
				r = 25
				break
			case 'deg':
				r = 90
		}
		if (r) {
			let i = parseFloat(e.slice(0, e.length - n.length))
			return isNaN(i) ? 0 : ((i = i / r), i % 1 === 0 ? o(i) : 0)
		}
	}
	return t
}
const N7 = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
	F7 = /^-?[0-9.]*[0-9]+[0-9.]*$/g
function sf(e, t, n) {
	if (t === 1) return e
	if (((n = n || 100), typeof e == 'number')) return Math.ceil(e * t * n) / n
	if (typeof e != 'string') return e
	const o = e.split(N7)
	if (o === null || !o.length) return e
	const r = []
	let i = o.shift(),
		s = F7.test(i)
	for (;;) {
		if (s) {
			const a = parseFloat(i)
			isNaN(a) ? r.push(i) : r.push(Math.ceil(a * t * n) / n)
		} else r.push(i)
		if (((i = o.shift()), i === void 0)) return r.join('')
		s = !s
	}
}
function j7(e, t = 'defs') {
	let n = ''
	const o = e.indexOf('<' + t)
	for (; o >= 0; ) {
		const r = e.indexOf('>', o),
			i = e.indexOf('</' + t)
		if (r === -1 || i === -1) break
		const s = e.indexOf('>', i)
		if (s === -1) break
		;(n += e.slice(r + 1, i).trim()), (e = e.slice(0, o).trim() + e.slice(s + 1))
	}
	return { defs: n, content: e }
}
function H7(e, t) {
	return e ? '<defs>' + e + '</defs>' + t : t
}
function z7(e, t, n) {
	const o = j7(e)
	return H7(o.defs, t + o.content + n)
}
const q7 = (e) => e === 'unset' || e === 'undefined' || e === 'none'
function U7(e, t) {
	const n = { ...mc, ...e },
		o = { ...Cv, ...t },
		r = { left: n.left, top: n.top, width: n.width, height: n.height }
	let i = n.body
	;[n, o].forEach((v) => {
		const b = [],
			w = v.hFlip,
			P = v.vFlip
		let y = v.rotate
		w
			? P
				? (y += 2)
				: (b.push(
						'translate(' + (r.width + r.left).toString() + ' ' + (0 - r.top).toString() + ')'
				  ),
				  b.push('scale(-1 1)'),
				  (r.top = r.left = 0))
			: P &&
			  (b.push('translate(' + (0 - r.left).toString() + ' ' + (r.height + r.top).toString() + ')'),
			  b.push('scale(1 -1)'),
			  (r.top = r.left = 0))
		let S
		switch ((y < 0 && (y -= Math.floor(y / 4) * 4), (y = y % 4), y)) {
			case 1:
				;(S = r.height / 2 + r.top),
					b.unshift('rotate(90 ' + S.toString() + ' ' + S.toString() + ')')
				break
			case 2:
				b.unshift(
					'rotate(180 ' +
						(r.width / 2 + r.left).toString() +
						' ' +
						(r.height / 2 + r.top).toString() +
						')'
				)
				break
			case 3:
				;(S = r.width / 2 + r.left),
					b.unshift('rotate(-90 ' + S.toString() + ' ' + S.toString() + ')')
				break
		}
		y % 2 === 1 &&
			(r.left !== r.top && ((S = r.left), (r.left = r.top), (r.top = S)),
			r.width !== r.height && ((S = r.width), (r.width = r.height), (r.height = S))),
			b.length && (i = z7(i, '<g transform="' + b.join(' ') + '">', '</g>'))
	})
	const s = o.width,
		a = o.height,
		l = r.width,
		c = r.height
	let u, d
	s === null
		? ((d = a === null ? '1em' : a === 'auto' ? c : a), (u = sf(d, l / c)))
		: ((u = s === 'auto' ? l : s), (d = a === null ? sf(u, c / l) : a === 'auto' ? c : a))
	const f = {},
		p = (v, b) => {
			q7(b) || (f[v] = b.toString())
		}
	p('width', u), p('height', d)
	const m = [r.left, r.top, l, c]
	return (f.viewBox = m.join(' ')), { attributes: f, viewBox: m, body: i }
}
const W7 = /\sid="(\S+)"/g,
	G7 = 'IconifyId' + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16)
let K7 = 0
function Y7(e, t = G7) {
	const n = []
	let o
	for (; (o = W7.exec(e)); ) n.push(o[1])
	if (!n.length) return e
	const r = 'suffix' + ((Math.random() * 16777216) | Date.now()).toString(16)
	return (
		n.forEach((i) => {
			const s = typeof t == 'function' ? t(i) : t + (K7++).toString(),
				a = i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
			e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', 'g'), '$1' + s + r + '$3')
		}),
		(e = e.replace(new RegExp(r, 'g'), '')),
		e
	)
}
function Q7(e, t) {
	let n = e.indexOf('xlink:') === -1 ? '' : ' xmlns:xlink="http://www.w3.org/1999/xlink"'
	for (const o in t) n += ' ' + o + '="' + t[o] + '"'
	return '<svg xmlns="http://www.w3.org/2000/svg"' + n + '>' + e + '</svg>'
}
function J7(e) {
	return e
		.replace(/"/g, "'")
		.replace(/%/g, '%25')
		.replace(/#/g, '%23')
		.replace(/</g, '%3C')
		.replace(/>/g, '%3E')
		.replace(/\s+/g, ' ')
}
function X7(e) {
	return 'data:image/svg+xml,' + J7(e)
}
function Z7(e) {
	return 'url("' + X7(e) + '")'
}
const af = { ...Cv, inline: !1 },
	ew = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		'aria-hidden': !0,
		role: 'img',
	},
	tw = { display: 'inline-block' },
	vl = { backgroundColor: 'currentColor' },
	Tv = { backgroundColor: 'transparent' },
	lf = { Image: 'var(--svg)', Repeat: 'no-repeat', Size: '100% 100%' },
	cf = { webkitMask: vl, mask: vl, background: Tv }
for (const e in cf) {
	const t = cf[e]
	for (const n in lf) t[e + n] = lf[n]
}
const Gi = {}
;['horizontal', 'vertical'].forEach((e) => {
	const t = e.slice(0, 1) + 'Flip'
	;(Gi[e + '-flip'] = t), (Gi[e.slice(0, 1) + '-flip'] = t), (Gi[e + 'Flip'] = t)
})
function uf(e) {
	return e + (e.match(/^[-0-9.]+$/) ? 'px' : '')
}
const nw = (e, t) => {
		const n = I7(af, t),
			o = { ...ew },
			r = t.mode || 'svg',
			i = {},
			s = t.style,
			a = typeof s == 'object' && !(s instanceof Array) ? s : {}
		for (let v in t) {
			const b = t[v]
			if (b !== void 0)
				switch (v) {
					case 'icon':
					case 'style':
					case 'onLoad':
					case 'mode':
					case 'ssr':
						break
					case 'inline':
					case 'hFlip':
					case 'vFlip':
						n[v] = b === !0 || b === 'true' || b === 1
						break
					case 'flip':
						typeof b == 'string' && D7(n, b)
						break
					case 'color':
						i.color = b
						break
					case 'rotate':
						typeof b == 'string' ? (n[v] = M7(b)) : typeof b == 'number' && (n[v] = b)
						break
					case 'ariaHidden':
					case 'aria-hidden':
						b !== !0 && b !== 'true' && delete o['aria-hidden']
						break
					default: {
						const w = Gi[v]
						w
							? (b === !0 || b === 'true' || b === 1) && (n[w] = !0)
							: af[v] === void 0 && (o[v] = b)
					}
				}
		}
		const l = U7(e, n),
			c = l.attributes
		if ((n.inline && (i.verticalAlign = '-0.125em'), r === 'svg')) {
			;(o.style = { ...i, ...a }), Object.assign(o, c)
			let v = 0,
				b = t.id
			return (
				typeof b == 'string' && (b = b.replace(/-/g, '_')),
				(o.innerHTML = Y7(l.body, b ? () => b + 'ID' + v++ : 'iconifyVue')),
				ce('svg', o)
			)
		}
		const { body: u, width: d, height: f } = e,
			p = r === 'mask' || (r === 'bg' ? !1 : u.indexOf('currentColor') !== -1),
			m = Q7(u, { ...c, width: d + '', height: f + '' })
		return (
			(o.style = {
				...i,
				'--svg': Z7(m),
				width: uf(c.width),
				height: uf(c.height),
				...tw,
				...(p ? vl : Tv),
				...a,
			}),
			ce('span', o)
		)
	},
	ow = Object.create(null),
	rw = $({
		inheritAttrs: !1,
		render() {
			const e = this.$attrs,
				t = e.icon,
				n = typeof t == 'string' ? ow[t] : typeof t == 'object' ? t : null
			return n === null || typeof n != 'object' || typeof n.body != 'string'
				? this.$slots.default
					? this.$slots.default()
					: null
				: nw({ ...mc, ...n }, e)
		},
	}),
	iw = $({
		__name: 'VPIconify',
		props: { name: { default: '' }, size: { default: '' }, color: { default: '' } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = R(null),
				r = R(!1)
			async function i() {
				if (!o.value)
					try {
						;(r.value = !1), (o.value = await V7(n.name))
					} finally {
						r.value = !0
					}
			}
			ve(() => n.name, i, { immediate: !0 })
			const s = E(() => {
					const u = n.size || '1em'
					return String(Number(u)) === u ? `${u}px` : u
				}),
				a = E(() => n.color || 'currentColor'),
				l = E(() => ({ icon: o.value, color: n.color, height: s.value })),
				c = {
					props: n,
					icon: o,
					loaded: r,
					loadIconComponent: i,
					size: s,
					color: a,
					bind: l,
					get OfflineIcon() {
						return rw
					},
				}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	})
function sw(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		N(s, null, {
			default: T(() => [
				o.loaded
					? o.icon
						? (h(), N(o.OfflineIcon, zt({ key: 1, class: 'vp-icon iconify' }, o.bind), null, 16))
						: A('', !0)
					: (h(),
					  _(
							'span',
							{
								key: 0,
								class: 'vp-icon iconify',
								style: xe({ color: o.color, width: o.size, height: o.size }),
							},
							null,
							4
					  )),
			]),
			_: 1,
		})
	)
}
const aw = M(iw, [
		['render', sw],
		['__file', 'VPIconify.vue'],
	]),
	lw = $({
		__name: 'VPIcon',
		props: { name: {}, size: {}, color: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = V6(),
				r = E(() =>
					typeof n.name == 'string' && (It(n.name) || n.name[0] === '/')
						? 'link'
						: typeof n.name == 'object' && n.name.svg
						? 'svg'
						: typeof n.name == 'string' && o.value[n.name]
						? 'local'
						: 'remote'
				),
				i = E(() => (r.value === 'svg' ? n.name.svg : '')),
				s = E(() => {
					if (r.value === 'link') {
						const d = n.name
						return It(d) ? d : et(d)
					}
					return ''
				}),
				a = E(() => {
					if (r.value === 'local') {
						const d = n.name
						return o.value[d] || ''
					}
					return ''
				}),
				l = E(() => {
					const d = n.size
					if (d) return String(Number(d)) === d ? `${d}px` : d
				}),
				c = E(() => ({ 'background-color': n.color, width: l.value, height: l.value })),
				u = {
					props: n,
					iconsData: o,
					type: r,
					svg: i,
					link: s,
					className: a,
					size: l,
					style: c,
					VPIconify: aw,
				}
			return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
		},
	}),
	cw = { key: 0, class: 'vp-icon-img' },
	uw = ['src'],
	dw = ['innerHTML']
function fw(e, t, n, o, r, i) {
	return o.type === 'link'
		? (h(),
		  _('span', cw, [
				g('img', { src: o.link, alt: '', style: xe({ height: o.size }) }, null, 12, uw),
		  ]))
		: o.type === 'svg'
		? (h(),
		  _('span', { key: 1, class: 'vp-icon', style: xe(o.style), innerHTML: o.svg }, null, 12, dw))
		: o.type === 'local' && o.className
		? (h(),
		  _('span', { key: 2, class: J(['vp-icon', [o.className]]), style: xe(o.style) }, null, 6))
		: (h(),
		  N(o.VPIconify, { key: 3, name: n.name, size: o.size, color: n.color }, null, 8, [
				'name',
				'size',
				'color',
		  ]))
}
const vt = M(lw, [
		['render', fw],
		['__scopeId', 'data-v-b735d204'],
		['__file', 'VPIcon.vue'],
	]),
	pw = $({
		__name: 'VPCard',
		props: { title: {}, icon: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() => {
					var i
					if (((i = n.icon) == null ? void 0 : i[0]) === '{')
						try {
							return JSON.parse(o)
						} catch {}
					return n.icon
				}),
				r = { props: n, icon: o, VPIcon: vt }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	hw = { class: 'vp-card-wrapper' },
	mw = { key: 0, class: 'title' },
	vw = ['innerHTML'],
	gw = { class: 'body' }
function _w(e, t, n, o, r, i) {
	return (
		h(),
		_('article', hw, [
			C(
				e.$slots,
				'title',
				{},
				() => [
					n.title || o.icon
						? (h(),
						  _('p', mw, [
								o.icon
									? (h(), N(o.VPIcon, { key: 0, name: o.icon }, null, 8, ['name']))
									: A('', !0),
								n.title ? (h(), _('span', { key: 1, innerHTML: n.title }, null, 8, vw)) : A('', !0),
						  ]))
						: A('', !0),
				],
				!0
			),
			g('div', gw, [C(e.$slots, 'default', {}, void 0, !0)]),
		])
	)
}
const df = M(pw, [
		['render', _w],
		['__scopeId', 'data-v-ece4a05c'],
		['__file', 'VPCard.vue'],
	]),
	bw = $({
		__name: 'VPCardGrid',
		props: { cols: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = Rt('(min-width: 768px)'),
				r = Rt('(min-width: 960px)'),
				i = R(1)
			function s() {
				const c = { sm: 1, md: 2, lg: 2 }
				if (!n.cols) return c
				if (typeof n.cols == 'number' || typeof n.cols == 'string') {
					const u = Number(n.cols)
					return { sm: u, md: u, lg: u }
				}
				return { ...c, ...Et(n.cols) }
			}
			function a() {
				const c = s()
				return r.value ? c.lg : o.value ? c.md : c.sm
			}
			ve(
				() => [o.value, r.value, n.cols],
				() => {
					i.value = a()
				}
			),
				ke(() => {
					i.value = a()
				})
			const l = { props: n, md: o, lg: r, repeat: i, resolveCols: s, getRepeat: a }
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	})
function yw(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{
				class: J(['vp-card-grid', [`cols-${o.repeat}`]]),
				style: xe({ gridTemplateColumns: `repeat(${o.repeat}, 1fr)` }),
			},
			[C(e.$slots, 'default', {}, void 0, !0)],
			6
		)
	)
}
const ff = M(bw, [
		['render', yw],
		['__scopeId', 'data-v-9eb44161'],
		['__file', 'VPCardGrid.vue'],
	]),
	ww = $({
		__name: 'VPCardMasonry',
		props: { cols: { default: () => ({ sm: 2, md: 2, lg: 3 }) }, gap: { default: 16 } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = vp(),
				r = r1(),
				i = Rt('(min-width: 640px)'),
				s = Rt('(min-width: 960px)'),
				a = E(() => {
					var m
					const p = (m = o.default) == null ? void 0 : m.call(o)
					return (Array.isArray(p) ? p : [p]).map((v, b) =>
						zf(Bn(v, zt(v.props ?? {}, { class: `masonry-${r}-${b}` })))
					)
				}),
				l = E(() => {
					let p = 1
					return (
						typeof n.cols == 'number'
							? (p = n.cols)
							: typeof n.cols == 'object' &&
							  (s.value
									? (p = n.cols.lg || 3)
									: i.value
									? (p = n.cols.md || 2)
									: (p = n.cols.sm || 2)),
						(p = a.value.length < p ? a.value.length : p),
						Number(p)
					)
				}),
				c = Ie([]),
				u = Ie()
			async function d() {
				if (a.value.length <= 1) {
					c.value = []
					return
				}
				if ((await ht(), !u.value)) return
				const p = Array.from({ length: l.value }, () => []),
					m = Array.from({ length: l.value }, () => 0)
				for (let v = 0; v < a.value.length; v++) {
					const b = a.value[v],
						w = u.value.querySelector(`.masonry-${r}-${v}`),
						P = (w == null ? void 0 : w.offsetHeight) ?? 0,
						y = m.indexOf(Math.min(...m))
					p[y].push(b), (m[y] += P + n.gap)
				}
				c.value = p
			}
			ke(() => {
				d()
				const p = As(d)
				ve([a, l], p, { flush: 'post' }), Fh(u, p)
			})
			const f = {
				props: n,
				slots: o,
				uuid: r,
				isMd: i,
				isLg: s,
				rawList: a,
				columnsLength: l,
				columnsList: c,
				masonry: u,
				drawColumns: d,
			}
			return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
		},
	})
function kw(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		_(
			'div',
			{
				ref: 'masonry',
				class: J(['vp-card-masonry', [`cols-${o.columnsLength}`]]),
				style: xe({ gap: `${o.props.gap}px` }),
				'data-allow-mismatch': '',
			},
			[
				O(s, null, {
					default: T(() => [
						o.rawList.length <= 1
							? (h(),
							  _(
									'div',
									{ key: 0, class: 'card-masonry-item', style: xe({ gap: `${o.props.gap}px` }) },
									[C(e.$slots, 'default')],
									4
							  ))
							: (h(!0),
							  _(
									K,
									{ key: 1 },
									he(
										o.columnsList,
										(a, l) => (
											h(),
											_(
												'div',
												{
													key: `${o.uuid}-${l}`,
													class: 'card-masonry-item',
													style: xe({ gap: `${o.props.gap}px` }),
												},
												[
													(h(!0),
													_(
														K,
														null,
														he(a, (c) => (h(), N(Ht(c), { key: c.props.class }))),
														128
													)),
												],
												4
											)
										)
									),
									128
							  )),
					]),
					_: 3,
				}),
			],
			6
		)
	)
}
const pf = M(ww, [
		['render', kw],
		['__file', 'VPCardMasonry.vue'],
	]),
	Ew = $({
		__name: 'VPImageCard',
		props: {
			image: {},
			title: {},
			description: {},
			href: {},
			author: {},
			date: {},
			width: {},
			center: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = oo(),
				r = E(() => {
					if (!n.date) return ''
					const a = n.date instanceof Date ? n.date : new Date(n.date)
					return new Intl.DateTimeFormat(o.value, {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					}).format(a)
				}),
				i = E(() => ({
					width: n.width
						? String(Number(n.width)) === String(n.width)
							? `${n.width}px`
							: n.width
						: void 0,
				})),
				s = { props: n, lang: o, date: r, styles: i }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	xw = { class: 'image-container' },
	Pw = ['src', 'alt'],
	Sw = { key: 0, class: 'image-info' },
	Cw = { key: 0, class: 'title' },
	Tw = ['href'],
	Aw = { key: 1 },
	Lw = { key: 1, class: 'copyright' },
	Bw = { key: 0 },
	Ow = { key: 1 },
	Vw = { key: 2 },
	$w = { key: 2, class: 'description' }
function Iw(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-image-card', { center: n.center }]), style: xe(o.styles) },
			[
				g('div', xw, [
					g('img', { src: n.image, alt: n.title, loading: 'lazy' }, null, 8, Pw),
					n.title || n.author || o.date || n.description
						? (h(),
						  _('div', Sw, [
								n.title
									? (h(),
									  _('h3', Cw, [
											n.href
												? (h(),
												  _(
														'a',
														{
															key: 0,
															href: n.href,
															target: '_blank',
															rel: 'noopener noreferrer',
															class: 'no-icon',
														},
														D(n.title),
														9,
														Tw
												  ))
												: (h(), _('span', Aw, D(n.title), 1)),
									  ]))
									: A('', !0),
								n.author || o.date
									? (h(),
									  _('p', Lw, [
											n.author ? (h(), _('span', Bw, D(n.author), 1)) : A('', !0),
											n.author && o.date ? (h(), _('span', Ow, ' | ')) : A('', !0),
											o.date ? (h(), _('span', Vw, D(o.date), 1)) : A('', !0),
									  ]))
									: A('', !0),
								n.description ? (h(), _('p', $w, D(n.description), 1)) : A('', !0),
						  ]))
						: A('', !0),
				]),
			],
			6
		)
	)
}
const hf = M(Ew, [
		['render', Iw],
		['__scopeId', 'data-v-26ec8493'],
		['__file', 'VPImageCard.vue'],
	]),
	Rw = $({
		__name: 'VPLink',
		props: { tag: {}, href: {}, text: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = sr(),
				r = E(() => n.tag ?? (n.href ? 'a' : 'span')),
				{ link: i, isExternal: s } = sv(yo(n, 'href'), yo(n, 'target'))
			function a(c) {
				s.value || (c.preventDefault(), i.value && o.push(i.value))
			}
			const l = {
				props: n,
				router: o,
				tag: r,
				link: i,
				isExternal: s,
				linkTo: a,
				get withBase() {
					return et
				},
			}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	Dw = { key: 0, class: 'vpi-external-link icon' }
function Mw(e, t, n, o, r, i) {
	return (
		h(),
		N(
			Ht(o.tag),
			{
				class: J(['vp-link no-icon', { link: o.link }]),
				href: o.withBase(o.link || ''),
				target: n.target ?? (o.isExternal ? '_blank' : void 0),
				rel: n.rel ?? (o.isExternal ? 'noreferrer' : void 0),
				onClick: t[0] || (t[0] = (s) => o.linkTo(s)),
			},
			{
				default: T(() => [
					C(e.$slots, 'default', {}, () => [Te(D(n.text || n.href), 1)], !0),
					o.isExternal && !n.noIcon ? (h(), _('span', Dw)) : A('', !0),
				]),
				_: 3,
			},
			8,
			['class', 'href', 'target', 'rel']
		)
	)
}
const Ge = M(Rw, [
		['render', Mw],
		['__scopeId', 'data-v-9db33856'],
		['__file', 'VPLink.vue'],
	]),
	Nw = $({
		__name: 'VPLinkCard',
		props: { href: {}, title: {}, icon: {}, description: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPIcon: vt, VPLink: Ge }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	Fw = { class: 'vp-link-card' },
	jw = { class: 'body' },
	Hw = ['innerHTML'],
	zw = ['innerHTML']
function qw(e, t, n, o, r, i) {
	return (
		h(),
		_('div', Fw, [
			g('span', jw, [
				O(
					o.VPLink,
					{ href: n.href, 'no-icon': '', class: 'link no-icon' },
					{
						default: T(() => [
							C(
								e.$slots,
								'title',
								{},
								() => [
									n.icon
										? (h(), N(o.VPIcon, { key: 0, name: n.icon }, null, 8, ['name']))
										: A('', !0),
									n.title
										? (h(), _('span', { key: 1, innerHTML: n.title }, null, 8, Hw))
										: A('', !0),
								],
								!0
							),
						]),
						_: 3,
					},
					8,
					['href']
				),
				C(
					e.$slots,
					'default',
					{},
					() => [
						n.description
							? (h(), _('p', { key: 0, innerHTML: n.description }, null, 8, zw))
							: A('', !0),
					],
					!0
				),
			]),
			t[0] || (t[0] = g('span', { class: 'vpi-arrow-right' }, null, -1)),
		])
	)
}
const mf = M(Nw, [
		['render', qw],
		['__scopeId', 'data-v-d40875fe'],
		['__file', 'VPLinkCard.vue'],
	]),
	Uw = $({
		__name: 'VPHomeBox',
		props: {
			type: {},
			full: { type: Boolean },
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
			containerClass: {},
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = mi(),
				r = E(() => {
					if (!n.backgroundImage) return null
					const a =
						typeof n.backgroundImage == 'string'
							? n.backgroundImage
							: n.backgroundImage[o.value ? 'dark' : 'light'] ?? n.backgroundImage.light
					return {
						'background-image': `url(${It(a) ? n.backgroundImage : et(a)})`,
						'background-size': 'cover',
						'background-position': 'center',
						'background-repeat': 'no-repeat',
						'background-attachment': n.backgroundAttachment || '',
					}
				}),
				i = E(() => J(n.containerClass || '')),
				s = { props: n, isDark: o, styles: r, containerClass: i }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	})
function Ww(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-home-box', { full: o.props.full }]), style: xe(o.styles) },
			[
				C(e.$slots, 'before'),
				g('div', { class: J(['container', o.containerClass]) }, [C(e.$slots, 'default')], 2),
				C(e.$slots, 'after'),
			],
			6
		)
	)
}
const tr = M(Uw, [
		['render', Ww],
		['__file', 'VPHomeBox.vue'],
	]),
	Gw = {},
	Kw = { class: 'vp-switch', type: 'button', role: 'switch' },
	Yw = { class: 'check' },
	Qw = { key: 0, class: 'icon' }
function Jw(e, t) {
	return (
		h(),
		_('button', Kw, [
			g('span', Yw, [
				e.$slots.default
					? (h(), _('span', Qw, [C(e.$slots, 'default', {}, void 0, !0)]))
					: A('', !0),
			]),
		])
	)
}
const Xw = M(Gw, [
		['render', Jw],
		['__scopeId', 'data-v-ec51cb35'],
		['__file', 'VPSwitch.vue'],
	]),
	Zw = $({
		__name: 'VPSwitchAppearance',
		setup(e, { expose: t }) {
			t()
			const n = R(!1),
				{ theme: o, isDark: r } = se(),
				i = E(() => {
					const c = o.value.transition,
						u = typeof c == 'object' ? c : {}
					return c === !1 || u.appearance === !1
						? !1
						: typeof u.appearance == 'string'
						? u.appearance
						: 'fade'
				}),
				s = qe('toggle-appearance', async ({ clientX: c, clientY: u }) => {
					if (!Hm() || i.value === !1) {
						r.value = !r.value
						return
					}
					await document.startViewTransition(async () => {
						;(r.value = !r.value), await ht()
					}).ready
					const d = {},
						f = i.value
					let p = 400
					if (f === 'circle-clip') {
						const m = [
							`circle(0px at ${c}px ${u}px)`,
							`circle(${Math.hypot(
								Math.max(c, innerWidth - c),
								Math.max(u, innerHeight - u)
							)}px at ${c}px ${u}px)`,
						]
						d.clipPath = r.value ? m.reverse() : m
					} else if (f === 'horizontal-clip') {
						const m = [`inset(0px ${innerWidth}px 0px 0px)`, 'inset(0px 0px 0px 0px)']
						d.clipPath = r.value ? m.reverse() : m
					} else if (f === 'vertical-clip') {
						const m = [`inset(0px 0px ${innerHeight}px 0px)`, 'inset(0px 0px 0px 0px)']
						d.clipPath = r.value ? m.reverse() : m
					} else if (f === 'skew-clip') {
						const m = [
							'polygon(0px 0px, 0px 0px, 0px 0px)',
							`polygon(0px 0px, ${innerWidth * 2}px 0px, 0px ${innerHeight * 2}px)`,
						]
						d.clipPath = r.value ? m.reverse() : m
					} else (d.opacity = r.value ? [1, 0] : [0, 1]), (p = 300)
					document.documentElement.animate(d, {
						duration: p,
						easing: 'ease-in',
						pseudoElement: `::view-transition-${r.value ? 'old' : 'new'}(root)`,
					})
				}),
				a = R('')
			Op(() => {
				a.value = r.value
					? o.value.lightModeSwitchTitle || 'Switch to light theme'
					: o.value.darkModeSwitchTitle || 'Switch to dark theme'
			})
			const l = {
				checked: n,
				theme: o,
				isDark: r,
				transitionMode: i,
				toggleAppearance: s,
				switchTitle: a,
				VPSwitch: Xw,
			}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	})
function e9(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPSwitch,
			{
				class: 'vp-switch-appearance',
				title: o.switchTitle,
				'aria-checked': o.checked,
				onClick: o.toggleAppearance,
			},
			{
				default: T(
					() =>
						t[0] ||
						(t[0] = [
							g('span', { class: 'vpi-sun sun' }, null, -1),
							g('span', { class: 'vpi-moon moon' }, null, -1),
						])
				),
				_: 1,
			},
			8,
			['title', 'aria-checked', 'onClick']
		)
	)
}
const vc = M(Zw, [
		['render', e9],
		['__scopeId', 'data-v-e95f130c'],
		['__file', 'VPSwitchAppearance.vue'],
	]),
	t9 = $({
		__name: 'VPNavBarAppearance',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = { theme: n, VPSwitchAppearance: vc }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	n9 = { key: 0, class: 'vp-navbar-appearance' }
function o9(e, t, n, o, r, i) {
	return o.theme.appearance && o.theme.appearance !== 'force-dark'
		? (h(), _('div', n9, [O(o.VPSwitchAppearance)]))
		: A('', !0)
}
const r9 = M(t9, [
		['render', o9],
		['__scopeId', 'data-v-17780d44'],
		['__file', 'VPNavBarAppearance.vue'],
	]),
	i9 = $({
		__name: 'VPMenuLink',
		props: { item: {} },
		setup(e, { expose: t }) {
			t()
			const { page: n } = se(),
				o = {
					page: n,
					VPIcon: vt,
					VPLink: Ge,
					get resolveRouteFullPath() {
						return Dn
					},
					get isActive() {
						return er
					},
				}
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	s9 = { class: 'vp-menu-link' }
function a9(e, t, n, o, r, i) {
	return (
		h(),
		_('div', s9, [
			O(
				o.VPLink,
				{
					class: J({
						active: o.isActive(
							o.page.path,
							n.item.activeMatch || o.resolveRouteFullPath(n.item.link),
							!!n.item.activeMatch
						),
					}),
					href: n.item.link,
				},
				{
					default: T(() => [
						n.item.icon
							? (h(), N(o.VPIcon, { key: 0, name: n.item.icon }, null, 8, ['name']))
							: A('', !0),
						Te(' ' + D(n.item.text), 1),
					]),
					_: 1,
				},
				8,
				['class', 'href']
			),
		])
	)
}
const Ms = M(i9, [
		['render', a9],
		['__scopeId', 'data-v-d59787e1'],
		['__file', 'VPMenuLink.vue'],
	]),
	l9 = $({
		__name: 'VPMenuGroup',
		props: { text: {}, icon: {}, items: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPIcon: vt, VPMenuLink: Ms }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	c9 = { class: 'vp-menu-group' },
	u9 = { key: 0, class: 'title' },
	d9 = ['textContent']
function f9(e, t, n, o, r, i) {
	return (
		h(),
		_('div', c9, [
			n.text
				? (h(),
				  _('p', u9, [
						n.icon ? (h(), N(o.VPIcon, { key: 0, name: n.icon }, null, 8, ['name'])) : A('', !0),
						g('span', { textContent: D(n.text) }, null, 8, d9),
				  ]))
				: A('', !0),
			(h(!0),
			_(
				K,
				null,
				he(
					n.items,
					(s) => (
						h(),
						_(
							K,
							null,
							[
								'link' in s
									? (h(),
									  N(o.VPMenuLink, { key: s == null ? void 0 : s.link, item: s }, null, 8, [
											'item',
									  ]))
									: A('', !0),
							],
							64
						)
					)
				),
				256
			)),
		])
	)
}
const p9 = M(l9, [
		['render', f9],
		['__scopeId', 'data-v-f589b7f7'],
		['__file', 'VPMenuGroup.vue'],
	]),
	h9 = $({
		__name: 'VPMenu',
		props: { items: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPMenuGroup: p9, VPMenuLink: Ms }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	m9 = { class: 'vp-menu' },
	v9 = { key: 0, class: 'items' }
function g9(e, t, n, o, r, i) {
	return (
		h(),
		_('div', m9, [
			n.items
				? (h(),
				  _('div', v9, [
						(h(!0),
						_(
							K,
							null,
							he(
								n.items,
								(s) => (
									h(),
									_(
										K,
										{ key: s.text },
										[
											'link' in s
												? (h(), N(o.VPMenuLink, { key: 0, item: s }, null, 8, ['item']))
												: (h(),
												  N(
														o.VPMenuGroup,
														{ key: 1, text: s.text, items: s.items, icon: s.icon },
														null,
														8,
														['text', 'items', 'icon']
												  )),
										],
										64
									)
								)
							),
							128
						)),
				  ]))
				: A('', !0),
			C(e.$slots, 'default', {}, void 0, !0),
		])
	)
}
const _9 = M(h9, [
		['render', g9],
		['__scopeId', 'data-v-ecb5c0af'],
		['__file', 'VPMenu.vue'],
	]),
	b9 = $({
		__name: 'VPFlyout',
		props: { prefixIcon: {}, icon: {}, button: {}, label: {}, items: {} },
		setup(e, { expose: t }) {
			t()
			const n = R(!1),
				o = R()
			T6({ el: o, onBlur: r })
			function r() {
				n.value = !1
			}
			const i = { open: n, el: o, onBlur: r, VPIcon: vt, VPMenu: _9 }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	y9 = ['aria-expanded', 'aria-label'],
	w9 = { key: 0, class: 'text' },
	k9 = ['innerHTML'],
	E9 = { key: 1, class: 'vpi-more-horizontal icon' },
	x9 = { class: 'menu' }
function P9(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{
				ref: 'el',
				class: 'vp-flyout',
				onMouseenter: t[1] || (t[1] = (s) => (o.open = !0)),
				onMouseleave: t[2] || (t[2] = (s) => (o.open = !1)),
			},
			[
				g(
					'button',
					{
						type: 'button',
						class: 'button',
						'aria-haspopup': 'true',
						'aria-expanded': o.open,
						'aria-label': n.label,
						onClick: t[0] || (t[0] = (s) => (o.open = !o.open)),
					},
					[
						n.button || n.icon
							? (h(),
							  _('span', w9, [
									n.prefixIcon
										? (h(), N(o.VPIcon, { key: 0, name: n.prefixIcon }, null, 8, ['name']))
										: A('', !0),
									n.icon
										? (h(), _('span', { key: 1, class: J(['option-icon', [n.icon]]) }, null, 2))
										: A('', !0),
									n.button
										? (h(), _('span', { key: 2, innerHTML: n.button }, null, 8, k9))
										: A('', !0),
									t[3] || (t[3] = g('span', { class: 'vpi-chevron-down text-icon' }, null, -1)),
							  ]))
							: (h(), _('span', E9)),
					],
					8,
					y9
				),
				g('div', x9, [
					O(
						o.VPMenu,
						{ items: n.items },
						{ default: T(() => [C(e.$slots, 'default', {}, void 0, !0)]), _: 3 },
						8,
						['items']
					),
				]),
			],
			544
		)
	)
}
const gc = M(b9, [
		['render', P9],
		['__scopeId', 'data-v-5973fd6d'],
		['__file', 'VPFlyout.vue'],
	]),
	S9 = $({
		__name: 'VPSocialLink',
		props: { icon: {}, link: {}, ariaLabel: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() =>
					typeof n.icon == 'object' ? n.icon.svg : `<span class="vpi-social-${n.icon}" />`
				),
				r = { props: n, svg: o }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	C9 = ['href', 'aria-label', 'innerHTML']
function T9(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'a',
			{
				class: 'vp-social-link no-icon',
				href: n.link,
				'aria-label': n.ariaLabel ?? (typeof n.icon == 'string' ? n.icon : ''),
				target: '_blank',
				rel: 'noopener',
				innerHTML: o.svg,
			},
			null,
			8,
			C9
		)
	)
}
const A9 = M(S9, [
		['render', T9],
		['__scopeId', 'data-v-95fa8e4e'],
		['__file', 'VPSocialLink.vue'],
	]),
	L9 = $({
		__name: 'VPSocialLinks',
		props: { links: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPSocialLink: A9 }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	B9 = { class: 'vp-social-links' }
function O9(e, t, n, o, r, i) {
	return (
		h(),
		_('div', B9, [
			(h(!0),
			_(
				K,
				null,
				he(
					n.links,
					({ link: s, icon: a }) => (
						h(), N(o.VPSocialLink, { key: s, icon: a, link: s }, null, 8, ['icon', 'link'])
					)
				),
				128
			)),
		])
	)
}
const gi = M(L9, [
		['render', O9],
		['__scopeId', 'data-v-21e3c4af'],
		['__file', 'VPSocialLinks.vue'],
	]),
	V9 = $({
		__name: 'VPNavBarExtra',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				{ localeLinks: o, currentLang: r } = sc(),
				i = E(() => {
					var c
					const l = n.value.navbarSocialInclude ?? []
					return l.length
						? (c = n.value.social) == null
							? void 0
							: c.filter(({ icon: u }) =>
									typeof u == 'string' ? l.includes(u) : u.name ? l.includes(u.name) : !1
							  )
						: n.value.social
				}),
				s = E(() => {
					var l
					return (
						(o.value.length && r.value.label) ||
						n.value.appearance ||
						((l = i.value) == null ? void 0 : l.length)
					)
				}),
				a = {
					theme: n,
					localeLinks: o,
					currentLang: r,
					social: i,
					hasExtraContent: s,
					VPFlyout: gc,
					VPMenuLink: Ms,
					VPSocialLinks: gi,
					VPSwitchAppearance: vc,
				}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	}),
	$9 = { key: 0, class: 'group translations' },
	I9 = { class: 'trans-title' },
	R9 = { key: 1, class: 'group' },
	D9 = { class: 'item appearance' },
	M9 = { class: 'label' },
	N9 = { class: 'appearance-action' },
	F9 = { key: 2, class: 'group' },
	j9 = { class: 'item social-links' }
function H9(e, t, n, o, r, i) {
	return o.hasExtraContent
		? (h(),
		  N(
				o.VPFlyout,
				{ key: 0, class: 'vp-navbar-extra', label: 'extra navigation' },
				{
					default: T(() => [
						o.localeLinks.length && o.currentLang.label
							? (h(),
							  _('div', $9, [
									g('p', I9, D(o.currentLang.label), 1),
									(h(!0),
									_(
										K,
										null,
										he(
											o.localeLinks,
											(s) => (h(), N(o.VPMenuLink, { key: s.link, item: s }, null, 8, ['item']))
										),
										128
									)),
							  ]))
							: A('', !0),
						o.theme.appearance && o.theme.appearance !== 'force-dark'
							? (h(),
							  _('div', R9, [
									g('div', D9, [
										g('p', M9, D(o.theme.appearanceText || 'Appearance'), 1),
										g('div', N9, [O(o.VPSwitchAppearance)]),
									]),
							  ]))
							: A('', !0),
						o.social
							? (h(),
							  _('div', F9, [
									g('div', j9, [
										O(o.VPSocialLinks, { class: 'social-links-list', links: o.social }, null, 8, [
											'links',
										]),
									]),
							  ]))
							: A('', !0),
					]),
					_: 1,
				}
		  ))
		: A('', !0)
}
const z9 = M(V9, [
		['render', H9],
		['__scopeId', 'data-v-6b8332e1'],
		['__file', 'VPNavBarExtra.vue'],
	]),
	q9 = $({
		__name: 'VPNavBarHamburger',
		props: { active: { type: Boolean } },
		emits: ['click'],
		setup(e, { expose: t }) {
			t()
			const n = {}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	U9 = ['aria-expanded']
function W9(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'button',
			{
				type: 'button',
				class: J(['vp-navbar-hamburger', { active: n.active }]),
				'aria-label': 'mobile navigation',
				'aria-expanded': n.active,
				'aria-controls': 'nav-screen',
				onClick: t[0] || (t[0] = (s) => e.$emit('click')),
			},
			t[1] ||
				(t[1] = [
					g(
						'span',
						{ class: 'container' },
						[
							g('span', { class: 'top' }),
							g('span', { class: 'middle' }),
							g('span', { class: 'bottom' }),
						],
						-1
					),
				]),
			10,
			U9
		)
	)
}
const G9 = M(q9, [
		['render', W9],
		['__scopeId', 'data-v-41d7b175'],
		['__file', 'VPNavBarHamburger.vue'],
	]),
	K9 = $({
		__name: 'VPNavBarMenuGroup',
		props: { item: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ page: o } = se()
			function r(a) {
				return 'link' in a ? er(o.value.path, Dn(a.link), !!n.item.activeMatch) : a.items.some(r)
			}
			const i = E(() => r(n.item)),
				s = {
					props: n,
					page: o,
					isChildActive: r,
					childrenActive: i,
					VPFlyout: gc,
					get isActive() {
						return er
					},
				}
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	})
function Y9(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPFlyout,
			{
				class: J([
					'vp-navbar-menu-group',
					{
						active:
							o.isActive(o.page.path, n.item.activeMatch, !!n.item.activeMatch) || o.childrenActive,
					},
				]),
				button: n.item.text,
				items: n.item.items,
				'prefix-icon': n.item.icon,
			},
			null,
			8,
			['class', 'button', 'items', 'prefix-icon']
		)
	)
}
const Q9 = M(K9, [
		['render', Y9],
		['__file', 'VPNavBarMenuGroup.vue'],
	]),
	J9 = $({
		__name: 'VPNavBarMenuLink',
		props: { item: {} },
		setup(e, { expose: t }) {
			t()
			const { page: n } = se(),
				o = {
					page: n,
					VPIcon: vt,
					VPLink: Ge,
					get resolveRouteFullPath() {
						return Dn
					},
					get isActive() {
						return er
					},
				}
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	X9 = ['innerHTML']
function Z9(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPLink,
			{
				class: J([
					'navbar-menu-link',
					{
						active: o.isActive(
							o.page.path,
							n.item.activeMatch || o.resolveRouteFullPath(n.item.link),
							!!n.item.activeMatch
						),
					},
				]),
				href: n.item.link,
				'no-icon': n.item.noIcon,
				target: n.item.target,
				rel: n.item.rel,
				tabindex: '0',
			},
			{
				default: T(() => [
					n.item.icon
						? (h(), N(o.VPIcon, { key: 0, name: n.item.icon }, null, 8, ['name']))
						: A('', !0),
					g('span', { innerHTML: n.item.text }, null, 8, X9),
				]),
				_: 1,
			},
			8,
			['class', 'href', 'no-icon', 'target', 'rel']
		)
	)
}
const ek = M(J9, [
		['render', Z9],
		['__scopeId', 'data-v-97128b4f'],
		['__file', 'VPNavBarMenuLink.vue'],
	]),
	tk = $({
		__name: 'VPNavBarMenu',
		setup(e, { expose: t }) {
			t()
			const o = { navbar: av(), VPNavBarMenuGroup: Q9, VPNavBarMenuLink: ek }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	nk = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'vp-navbar-menu' }
function ok(e, t, n, o, r, i) {
	return o.navbar.length
		? (h(),
		  _('nav', nk, [
				t[0] ||
					(t[0] = g(
						'span',
						{ id: 'main-nav-aria-label', class: 'visually-hidden' },
						'Main Navigation',
						-1
					)),
				(h(!0),
				_(
					K,
					null,
					he(
						o.navbar,
						(s) => (
							h(),
							_(
								K,
								{ key: s.text },
								[
									'link' in s
										? (h(), N(o.VPNavBarMenuLink, { key: 0, item: s }, null, 8, ['item']))
										: (h(), N(o.VPNavBarMenuGroup, { key: 1, item: s }, null, 8, ['item'])),
								],
								64
							)
						)
					),
					128
				)),
		  ]))
		: A('', !0)
}
const rk = M(tk, [
		['render', ok],
		['__scopeId', 'data-v-b42927e7'],
		['__file', 'VPNavBarMenu.vue'],
	]),
	ik = {},
	sk = { class: 'vp-navbar-search' }
function ak(e, t) {
	const n = Re('SearchBox')
	return h(), _('div', sk, [O(n)])
}
const lk = M(ik, [
		['render', ak],
		['__file', 'VPNavBarSearch.vue'],
	]),
	ck = $({
		__name: 'VPNavBarSocialLinks',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = E(() => {
					var s
					const i = n.value.navbarSocialInclude ?? []
					return i.length
						? (s = n.value.social) == null
							? void 0
							: s.filter(({ icon: a }) =>
									typeof a == 'string' ? i.includes(a) : a.name ? i.includes(a.name) : !1
							  )
						: n.value.social
				}),
				r = { theme: n, social: o, VPSocialLinks: gi }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	})
function uk(e, t, n, o, r, i) {
	return o.social
		? (h(),
		  N(o.VPSocialLinks, { key: 0, class: 'vp-navbar-social-links', links: o.social }, null, 8, [
				'links',
		  ]))
		: A('', !0)
}
const dk = M(ck, [
		['render', uk],
		['__scopeId', 'data-v-ba70645a'],
		['__file', 'VPNavBarSocialLinks.vue'],
	]),
	fk = { inheritAttrs: !1 },
	pk = $({
		...fk,
		__name: 'VPImage',
		props: { image: {}, alt: {} },
		setup(e, { expose: t }) {
			t()
			const n = {
				get withBase() {
					return et
				},
			}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	hk = ['src', 'alt']
function mk(e, t, n, o, r, i) {
	const s = Re('VPImage', !0)
	return n.image
		? (h(),
		  _(
				K,
				{ key: 0 },
				[
					typeof n.image == 'string' || 'src' in n.image
						? (h(),
						  _(
								'img',
								zt(
									{ key: 0, class: 'vp-image' },
									typeof n.image == 'string' ? e.$attrs : { ...n.image, ...e.$attrs },
									{
										src: o.withBase(typeof n.image == 'string' ? n.image : n.image.src),
										alt: n.alt ?? (typeof n.image == 'string' ? '' : n.image.alt || ''),
									}
								),
								null,
								16,
								hk
						  ))
						: (h(),
						  _(
								K,
								{ key: 1 },
								[
									O(
										s,
										zt({ class: 'dark', image: n.image.dark, alt: n.image.alt }, e.$attrs),
										null,
										16,
										['image', 'alt']
									),
									O(
										s,
										zt({ class: 'light', image: n.image.light, alt: n.image.alt }, e.$attrs),
										null,
										16,
										['image', 'alt']
									),
								],
								64
						  )),
				],
				64
		  ))
		: A('', !0)
}
const Ns = M(pk, [
		['render', mk],
		['__scopeId', 'data-v-c031a8dd'],
		['__file', 'VPImage.vue'],
	]),
	vk = $({
		__name: 'VPNavBarTitle',
		setup(e, { expose: t }) {
			t()
			const { theme: n, site: o } = se(),
				{ hasSidebar: r } = mn(),
				i = Rn(),
				s = { theme: n, site: o, hasSidebar: r, routeLocale: i, VPImage: Ns, VPLink: Ge }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	})
function gk(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-navbar-title', { 'has-sidebar': o.hasSidebar }]) },
			[
				O(
					o.VPLink,
					{ class: 'title', href: o.theme.home ?? o.routeLocale },
					{
						default: T(() => [
							C(e.$slots, 'nav-bar-title-before', {}, void 0, !0),
							o.theme.logo
								? (h(),
								  N(
										o.VPImage,
										{
											key: 0,
											class: 'logo',
											image: { light: o.theme.logo, dark: o.theme.logoDark || o.theme.logo },
										},
										null,
										8,
										['image']
								  ))
								: A('', !0),
							g('span', null, D(o.site.title), 1),
							C(e.$slots, 'nav-bar-title-after', {}, void 0, !0),
						]),
						_: 3,
					},
					8,
					['href']
				),
			],
			2
		)
	)
}
const _k = M(vk, [
		['render', gk],
		['__scopeId', 'data-v-3c7d5de5'],
		['__file', 'VPNavBarTitle.vue'],
	]),
	bk = $({
		__name: 'VPNavBarTranslations',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				{ currentLang: o, localeLinks: r } = sc(),
				i = { theme: n, currentLang: o, localeLinks: r, VPFlyout: gc, VPMenuLink: Ms }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	yk = { class: 'items' },
	wk = { class: 'title' }
function kk(e, t, n, o, r, i) {
	return o.localeLinks.length && o.currentLang.label
		? (h(),
		  N(
				o.VPFlyout,
				{
					key: 0,
					class: 'vp-navbar-translations',
					icon: 'vpi-languages',
					label: o.theme.selectLanguageText || 'Change Language',
				},
				{
					default: T(() => [
						g('div', yk, [
							g('p', wk, D(o.currentLang.label), 1),
							(h(!0),
							_(
								K,
								null,
								he(
									o.localeLinks,
									(s) => (h(), N(o.VPMenuLink, { key: s.link, item: s }, null, 8, ['item']))
								),
								128
							)),
						]),
					]),
					_: 1,
				},
				8,
				['label']
		  ))
		: A('', !0)
}
const Ek = M(bk, [
		['render', kk],
		['__scopeId', 'data-v-85a15296'],
		['__file', 'VPNavBarTranslations.vue'],
	]),
	xk = $({
		__name: 'VPNavBar',
		props: { isScreenOpen: { type: Boolean } },
		emits: ['toggleScreen'],
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ frontmatter: o } = se(),
				{ y: r } = Yl(),
				{ hasSidebar: i } = mn(),
				s = R({})
			Op(() => {
				s.value = {
					'has-sidebar': i.value,
					home: o.value.pageLayout === 'home',
					top: r.value === 0,
					'screen-open': n.isScreenOpen,
				}
			})
			const a = {
				props: n,
				frontmatter: o,
				y: r,
				hasSidebar: i,
				classes: s,
				VPNavBarAppearance: r9,
				VPNavBarExtra: z9,
				VPNavBarHamburger: G9,
				VPNavBarMenu: rk,
				VPNavBarSearch: lk,
				VPNavBarSocialLinks: dk,
				VPNavBarTitle: _k,
				VPNavBarTranslations: Ek,
			}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	}),
	Pk = { class: 'wrapper' },
	Sk = { class: 'container' },
	Ck = { class: 'title' },
	Tk = { class: 'content' },
	Ak = { class: 'content-body' }
function Lk(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-navbar', o.classes]), 'vp-navbar': '' },
			[
				g('div', Pk, [
					g('div', Sk, [
						g('div', Ck, [
							O(o.VPNavBarTitle, null, {
								'nav-bar-title-before': T(() => [
									C(e.$slots, 'nav-bar-title-before', {}, void 0, !0),
								]),
								'nav-bar-title-after': T(() => [
									C(e.$slots, 'nav-bar-title-after', {}, void 0, !0),
								]),
								_: 3,
							}),
						]),
						g('div', Tk, [
							g('div', Ak, [
								C(e.$slots, 'nav-bar-content-before', {}, void 0, !0),
								O(o.VPNavBarSearch, { class: 'search' }),
								O(o.VPNavBarMenu, { class: 'menu' }),
								O(o.VPNavBarTranslations, { class: 'translations' }),
								O(o.VPNavBarAppearance, { class: 'appearance' }),
								O(o.VPNavBarSocialLinks, { class: 'social-links' }),
								O(o.VPNavBarExtra, { class: 'extra' }),
								C(e.$slots, 'nav-bar-content-after', {}, void 0, !0),
								O(
									o.VPNavBarHamburger,
									{
										class: 'hamburger',
										active: n.isScreenOpen,
										onClick: t[0] || (t[0] = (s) => e.$emit('toggleScreen')),
									},
									null,
									8,
									['active']
								),
							]),
						]),
					]),
				]),
				t[1] || (t[1] = g('div', { class: 'divider' }, [g('div', { class: 'divider-line' })], -1)),
			],
			2
		)
	)
}
const Bk = M(xk, [
		['render', Lk],
		['__scopeId', 'data-v-bb404a1a'],
		['__file', 'VPNavBar.vue'],
	]),
	Ok = $({
		__name: 'VPNavScreenAppearance',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = { theme: n, VPSwitchAppearance: vc }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	Vk = { key: 0, class: 'vp-nav-screen-appearance' },
	$k = { class: 'text' }
function Ik(e, t, n, o, r, i) {
	return o.theme.appearance && o.theme.appearance !== 'force-dark'
		? (h(),
		  _('div', Vk, [
				g('p', $k, D(o.theme.appearanceText ?? 'Appearance'), 1),
				O(o.VPSwitchAppearance),
		  ]))
		: A('', !0)
}
const Rk = M(Ok, [
		['render', Ik],
		['__scopeId', 'data-v-a92985c2'],
		['__file', 'VPNavScreenAppearance.vue'],
	]),
	Dk = $({
		__name: 'VPNavScreenMenuGroupLink',
		props: { item: {} },
		setup(e, { expose: t }) {
			t()
			const o = { closeScreen: qe('close-screen'), VPIcon: vt, VPLink: Ge }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	Mk = ['innerHTML']
function Nk(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPLink,
			{
				class: 'vp-nav-screen-menu-group-link',
				href: n.item.link,
				target: n.item.target,
				rel: n.item.rel,
				'no-icon': n.item.noIcon,
				onClick: o.closeScreen,
			},
			{
				default: T(() => [
					n.item.icon
						? (h(), N(o.VPIcon, { key: 0, name: n.item.icon }, null, 8, ['name']))
						: A('', !0),
					g('span', { innerHTML: n.item.text }, null, 8, Mk),
				]),
				_: 1,
			},
			8,
			['href', 'target', 'rel', 'no-icon', 'onClick']
		)
	)
}
const Av = M(Dk, [
		['render', Nk],
		['__scopeId', 'data-v-0202af89'],
		['__file', 'VPNavScreenMenuGroupLink.vue'],
	]),
	Fk = $({
		__name: 'VPNavScreenMenuGroupSection',
		props: { icon: {}, text: {}, items: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPNavScreenMenuGroupLink: Av, VPIcon: vt }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	jk = { class: 'vp-nav-screen-menu-group-section' },
	Hk = { key: 0, class: 'title' }
function zk(e, t, n, o, r, i) {
	return (
		h(),
		_('div', jk, [
			n.text
				? (h(),
				  _('p', Hk, [
						n.icon ? (h(), N(o.VPIcon, { key: 0, name: n.icon }, null, 8, ['name'])) : A('', !0),
						Te(' ' + D(n.text), 1),
				  ]))
				: A('', !0),
			(h(!0),
			_(
				K,
				null,
				he(
					n.items,
					(s) => (h(), N(o.VPNavScreenMenuGroupLink, { key: s.text, item: s }, null, 8, ['item']))
				),
				128
			)),
		])
	)
}
const qk = M(Fk, [
		['render', zk],
		['__scopeId', 'data-v-fa53ddb3'],
		['__file', 'VPNavScreenMenuGroupSection.vue'],
	]),
	Uk = $({
		__name: 'VPNavScreenMenuGroup',
		props: { text: {}, icon: {}, items: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = R(!1),
				r = E(() => `nav-screen-menu-group-${n.text.replace(' ', '-').toLowerCase()}`)
			function i() {
				o.value = !o.value
			}
			const s = {
				props: n,
				isOpen: o,
				groupId: r,
				toggle: i,
				VPNavScreenMenuGroupLink: Av,
				VPNavScreenMenuGroupSection: qk,
				VPIcon: vt,
			}
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	Wk = ['aria-controls', 'aria-expanded'],
	Gk = { class: 'button-text' },
	Kk = ['innerHTML'],
	Yk = ['id'],
	Qk = { key: 1, class: 'group' }
function Jk(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-nav-screen-menu-group', { open: o.isOpen }]) },
			[
				g(
					'button',
					{
						class: 'button',
						'aria-controls': o.groupId,
						'aria-expanded': o.isOpen,
						onClick: o.toggle,
					},
					[
						g('span', Gk, [
							n.icon ? (h(), N(o.VPIcon, { key: 0, name: n.icon }, null, 8, ['name'])) : A('', !0),
							g('span', { innerHTML: n.text }, null, 8, Kk),
						]),
						t[0] || (t[0] = g('span', { class: 'vpi-plus button-icon' }, null, -1)),
					],
					8,
					Wk
				),
				g(
					'div',
					{ id: o.groupId, class: 'items' },
					[
						(h(!0),
						_(
							K,
							null,
							he(
								n.items,
								(s) => (
									h(),
									_(
										K,
										{ key: s.text },
										[
											'link' in s
												? (h(),
												  _('div', { key: s.text, class: 'item' }, [
														O(o.VPNavScreenMenuGroupLink, { item: s }, null, 8, ['item']),
												  ]))
												: (h(),
												  _('div', Qk, [
														O(
															o.VPNavScreenMenuGroupSection,
															{ text: s.text, items: s.items, icon: s.icon },
															null,
															8,
															['text', 'items', 'icon']
														),
												  ])),
										],
										64
									)
								)
							),
							128
						)),
					],
					8,
					Yk
				),
			],
			2
		)
	)
}
const Xk = M(Uk, [
		['render', Jk],
		['__scopeId', 'data-v-2289ea94'],
		['__file', 'VPNavScreenMenuGroup.vue'],
	]),
	Zk = $({
		__name: 'VPNavScreenMenuLink',
		props: { item: {} },
		setup(e, { expose: t }) {
			t()
			const o = { closeScreen: qe('close-screen'), VPIcon: vt, VPLink: Ge }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	eE = ['innerHTML']
function tE(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPLink,
			{
				class: 'vp-nav-screen-menu-link',
				href: n.item.link,
				target: n.item.target,
				rel: n.item.rel,
				'no-icon': n.item.noIcon,
				onClick: o.closeScreen,
			},
			{
				default: T(() => [
					n.item.icon
						? (h(), N(o.VPIcon, { key: 0, name: n.item.icon }, null, 8, ['name']))
						: A('', !0),
					g('span', { innerHTML: n.item.text }, null, 8, eE),
				]),
				_: 1,
			},
			8,
			['href', 'target', 'rel', 'no-icon', 'onClick']
		)
	)
}
const nE = M(Zk, [
		['render', tE],
		['__scopeId', 'data-v-79b117f5'],
		['__file', 'VPNavScreenMenuLink.vue'],
	]),
	oE = $({
		__name: 'VPNavScreenMenu',
		setup(e, { expose: t }) {
			t()
			const o = { navbar: av(), VPNavScreenMenuGroup: Xk, VPNavScreenMenuLink: nE }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	rE = { key: 0, class: 'vp-nav-screen-menu' }
function iE(e, t, n, o, r, i) {
	return o.navbar.length
		? (h(),
		  _('nav', rE, [
				(h(!0),
				_(
					K,
					null,
					he(
						o.navbar,
						(s) => (
							h(),
							_(
								K,
								{ key: s.text },
								[
									'link' in s
										? (h(), N(o.VPNavScreenMenuLink, { key: 0, item: s }, null, 8, ['item']))
										: (h(),
										  N(
												o.VPNavScreenMenuGroup,
												{ key: 1, text: s.text || '', items: s.items, icon: s.icon },
												null,
												8,
												['text', 'items', 'icon']
										  )),
								],
								64
							)
						)
					),
					128
				)),
		  ]))
		: A('', !0)
}
const sE = M(oE, [
		['render', iE],
		['__file', 'VPNavScreenMenu.vue'],
	]),
	aE = $({
		__name: 'VPNavScreenSocialLinks',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = { theme: n, VPSocialLinks: gi }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	})
function lE(e, t, n, o, r, i) {
	return o.theme.social
		? (h(),
		  N(
				o.VPSocialLinks,
				{ key: 0, class: 'vp-nav-screen-social-links', links: o.theme.social },
				null,
				8,
				['links']
		  ))
		: A('', !0)
}
const cE = M(aE, [
		['render', lE],
		['__file', 'VPNavScreenSocialLinks.vue'],
	]),
	uE = $({
		__name: 'VPNavScreenTranslations',
		setup(e, { expose: t }) {
			t()
			const { localeLinks: n, currentLang: o } = sc(),
				r = R(!1)
			function i() {
				r.value = !r.value
			}
			const s = { localeLinks: n, currentLang: o, isOpen: r, toggle: i, VPLink: Ge }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	dE = { class: 'list' }
function fE(e, t, n, o, r, i) {
	return o.localeLinks.length && o.currentLang.label
		? (h(),
		  _(
				'div',
				{ key: 0, class: J(['vp-nav-screen-translations', { open: o.isOpen }]) },
				[
					g('button', { class: 'title', onClick: o.toggle }, [
						t[0] || (t[0] = g('span', { class: 'vpi-languages icon lang' }, null, -1)),
						Te(' ' + D(o.currentLang.label) + ' ', 1),
						t[1] || (t[1] = g('span', { class: 'vpi-chevron-down icon chevron' }, null, -1)),
					]),
					g('ul', dE, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.localeLinks,
								(s) => (
									h(),
									_('li', { key: s.link, class: 'item' }, [
										O(
											o.VPLink,
											{ class: 'link', href: s.link },
											{ default: T(() => [Te(D(s.text), 1)]), _: 2 },
											1032,
											['href']
										),
									])
								)
							),
							128
						)),
					]),
				],
				2
		  ))
		: A('', !0)
}
const pE = M(uE, [
		['render', fE],
		['__scopeId', 'data-v-380c61a1'],
		['__file', 'VPNavScreenTranslations.vue'],
	]),
	hE = $({
		__name: 'VPNavScreen',
		props: { open: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const o = {
				isLocked: Kl(dn ? document.body : null),
				VPNavScreenAppearance: Rk,
				VPNavScreenMenu: sE,
				VPNavScreenSocialLinks: cE,
				VPNavScreenTranslates: pE,
			}
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	mE = { key: 0, id: 'navScreen', class: 'vp-nav-screen' },
	vE = { class: 'container' }
function gE(e, t, n, o, r, i) {
	return (
		h(),
		N(
			no,
			{
				name: 'fade',
				onEnter: t[0] || (t[0] = (s) => (o.isLocked = !0)),
				onAfterLeave: t[1] || (t[1] = (s) => (o.isLocked = !1)),
			},
			{
				default: T(() => [
					n.open
						? (h(),
						  _('div', mE, [
								g('div', vE, [
									C(e.$slots, 'nav-screen-content-before', {}, void 0, !0),
									O(o.VPNavScreenMenu, { class: 'menu' }),
									O(o.VPNavScreenTranslates, { class: 'translations' }),
									O(o.VPNavScreenAppearance, { class: 'appearance' }),
									O(o.VPNavScreenSocialLinks, { class: 'social-links' }),
									C(e.$slots, 'nav-screen-content-after', {}, void 0, !0),
								]),
						  ]))
						: A('', !0),
				]),
				_: 3,
			}
		)
	)
}
const _E = M(hE, [
		['render', gE],
		['__scopeId', 'data-v-01e77088'],
		['__file', 'VPNavScreen.vue'],
	]),
	bE = $({
		__name: 'VPNav',
		setup(e, { expose: t }) {
			t()
			const { page: n, frontmatter: o } = se(),
				{ isScreenOpen: r, closeScreen: i, toggleScreen: s } = I6(),
				a = ['blog', 'friends', 'blog-archives', 'blog-tags', 'blog-categories'],
				l = E(() => a.includes(n.value.type)),
				c = E(() => o.value.navbar !== !1)
			rn('close-screen', i),
				ir(() => {
					dn && document.documentElement.classList.toggle('hide-nav', !c.value)
				})
			const u = {
				page: n,
				frontmatter: o,
				isScreenOpen: r,
				closeScreen: i,
				toggleScreen: s,
				fixedInclude: a,
				fixed: l,
				hasNavbar: c,
				VPNavbar: Bk,
				VPNavScreen: _E,
			}
			return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
		},
	})
function yE(e, t, n, o, r, i) {
	return o.hasNavbar
		? (h(),
		  _(
				'header',
				{ key: 0, class: J(['vp-nav', { fixed: o.fixed }]) },
				[
					O(
						o.VPNavbar,
						{ 'is-screen-open': o.isScreenOpen, onToggleScreen: o.toggleScreen },
						{
							'nav-bar-title-before': T(() => [
								C(e.$slots, 'nav-bar-title-before', {}, void 0, !0),
							]),
							'nav-bar-title-after': T(() => [C(e.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
							'nav-bar-content-before': T(() => [
								C(e.$slots, 'nav-bar-content-before', {}, void 0, !0),
							]),
							'nav-bar-content-after': T(() => [
								C(e.$slots, 'nav-bar-content-after', {}, void 0, !0),
							]),
							_: 3,
						},
						8,
						['is-screen-open', 'onToggleScreen']
					),
					O(
						o.VPNavScreen,
						{ open: o.isScreenOpen },
						{
							'nav-screen-content-before': T(() => [
								C(e.$slots, 'nav-screen-content-before', {}, void 0, !0),
							]),
							'nav-screen-content-after': T(() => [
								C(e.$slots, 'nav-screen-content-after', {}, void 0, !0),
							]),
							_: 3,
						},
						8,
						['open']
					),
				],
				2
		  ))
		: A('', !0)
}
const Lv = M(bE, [
		['render', yE],
		['__scopeId', 'data-v-86ed89ca'],
		['__file', 'VPNav.vue'],
	]),
	wE = $({
		__name: 'VPBackdrop',
		props: { show: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = {}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	kE = { key: 0, class: 'vp-backdrop' }
function EE(e, t, n, o, r, i) {
	return (
		h(),
		N(no, { name: 'fade' }, { default: T(() => [n.show ? (h(), _('div', kE)) : A('', !0)]), _: 1 })
	)
}
const xE = M(wE, [
		['render', EE],
		['__scopeId', 'data-v-ededec9c'],
		['__file', 'VPBackdrop.vue'],
	]),
	PE = $({
		__name: 'VPBackToTop',
		setup(e, { expose: t }) {
			t()
			const n = Ie(),
				{ height: o } = oy(n),
				{ height: r } = ly()
			ke(() => {
				n.value = document.body
			})
			const { page: i } = se(),
				{ y: s } = Yl(),
				a = R(!1),
				l = E(() => (s.value / (o.value - r.value)) * 100),
				c = E(() => `${Math.min(Math.round(l.value), 100) || 0}%`),
				u = E(
					() =>
						`calc(${Math.PI * l.value}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${
							4 * Math.PI
						}px)`
				),
				d = E(
					() =>
						i.value.frontmatter.backToTop === !1 ||
						(i.value.frontmatter.pageLayout === 'home' &&
							i.value.frontmatter.config &&
							i.value.frontmatter.config.length <= 1)
				),
				f = E(() => (o.value < r.value ? !1 : s.value > r.value / 2))
			let p = null
			function m() {
				p && clearTimeout(p),
					(p = setTimeout(() => {
						a.value = !1
					}, 1e3))
			}
			ve(s, () => {
				;(a.value = !0), m()
			})
			function v() {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}
			const b = {
				body: n,
				bodyHeight: o,
				windowHeight: r,
				page: i,
				y: s,
				isScrolling: a,
				progress: l,
				percent: c,
				stroke: u,
				mustHidden: d,
				show: f,
				get timer() {
					return p
				},
				set timer(w) {
					p = w
				},
				resetScrolling: m,
				handleClick: v,
			}
			return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
		},
	}),
	SE = { 'aria-hidden': 'true' }
function CE(e, t, n, o, r, i) {
	return (
		h(),
		N(
			no,
			{ name: 'fade' },
			{
				default: T(() => [
					Ft(
						g(
							'button',
							{
								type: 'button',
								class: 'vp-back-to-top',
								'aria-label': 'back to top',
								onClick: o.handleClick,
							},
							[
								g(
									'span',
									{ class: J(['percent', { show: o.isScrolling }]), 'data-allow-mismatch': '' },
									D(o.percent),
									3
								),
								g(
									'span',
									{ class: J(['icon vpi-back-to-top', { show: !o.isScrolling }]) },
									null,
									2
								),
								(h(),
								_('svg', SE, [
									g(
										'circle',
										{
											cx: '50%',
											cy: '50%',
											'data-allow-mismatch': '',
											style: xe({ 'stroke-dasharray': o.stroke }),
										},
										null,
										4
									),
								])),
							],
							512
						),
						[[Ss, !o.mustHidden && (o.show || o.isScrolling)]]
					),
				]),
				_: 1,
			}
		)
	)
}
const TE = M(PE, [
		['render', CE],
		['__scopeId', 'data-v-c058e5e1'],
		['__file', 'VPBackToTop.vue'],
	]),
	AE = $({
		__name: 'VPBulletin',
		setup(e, { expose: t }) {
			t()
			const n = Ka('Bulletin') ? Re('Bulletin') : null,
				o = Ka('BulletinContent') ? Re('BulletinContent') : null,
				{ bulletin: r, showBulletin: i, enableBulletin: s, close: a } = k6(),
				l = {
					UserBulletin: n,
					UserBulletinContent: o,
					bulletin: r,
					showBulletin: i,
					enableBulletin: s,
					close: a,
				}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	LE = ['innerHTML'],
	BE = { class: 'container' },
	OE = ['innerHTML']
function VE(e, t, n, o, r, i) {
	return o.UserBulletin && o.enableBulletin && o.showBulletin
		? (h(), N(Ht(o.UserBulletin), { key: 0, class: 'vp-bulletin' }))
		: o.bulletin && o.enableBulletin && o.showBulletin
		? (h(),
		  _(
				'div',
				{
					key: 1,
					class: J([
						'vp-bulletin preset',
						{ border: o.bulletin.border ?? !0, [o.bulletin.layout ?? 'top-right']: !0 },
					]),
				},
				[
					g(
						'button',
						{
							type: 'button',
							class: 'close',
							onClick: t[0] || (t[0] = (...s) => o.close && o.close(...s)),
						},
						t[1] || (t[1] = [g('span', { class: 'vpi-close' }, null, -1)])
					),
					C(e.$slots, 'bulletin-content', {}, () => [
						o.bulletin.title
							? (h(), _('h2', { key: 0, innerHTML: o.bulletin.title }, null, 8, LE))
							: A('', !0),
						g('div', BE, [
							o.UserBulletinContent
								? (h(), N(Ht(o.UserBulletinContent), { key: 0, class: 'content vp-doc' }))
								: o.bulletin.content
								? (h(),
								  _(
										'div',
										{ key: 1, class: 'content vp-doc', innerHTML: o.bulletin.content },
										null,
										8,
										OE
								  ))
								: A('', !0),
						]),
					]),
				],
				2
		  ))
		: A('', !0)
}
const Bv = M(AE, [
		['render', VE],
		['__file', 'VPBulletin.vue'],
	]),
	$E = $({
		__name: 'VPShortPostList',
		props: { postList: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPLink: Ge }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	IE = { class: 'vp-blog-short-post-list' },
	RE = { class: 'post-title' },
	DE = { class: 'post-time' }
function ME(e, t, n, o, r, i) {
	return (
		h(),
		_('ul', IE, [
			(h(!0),
			_(
				K,
				null,
				he(
					n.postList,
					(s) => (
						h(),
						_('li', { key: s.path }, [
							g('p', RE, [
								O(
									o.VPLink,
									{ class: 'post-link', href: s.path },
									{ default: T(() => [Te(D(s.title), 1)]), _: 2 },
									1032,
									['href']
								),
							]),
							g('span', DE, D(s.createTime), 1),
						])
					)
				),
				128
			)),
		])
	)
}
const Ov = M($E, [
		['render', ME],
		['__scopeId', 'data-v-ae32fadb'],
		['__file', 'VPShortPostList.vue'],
	]),
	NE = $({
		__name: 'VPBlogArchives',
		setup(e, { expose: t }) {
			t()
			const { archive: n } = So(),
				{ archives: o } = g6(),
				r = { archiveLink: n, archives: o, VPShortPostList: Ov }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	FE = { class: 'vp-blog-archives' },
	jE = { class: 'archives-title' },
	HE = { key: 0, class: 'archives' },
	zE = { class: 'archive-title' },
	qE = { class: 'total' }
function UE(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_('div', FE, [
			C(e.$slots, 'blog-archives-before', {}, void 0, !0),
			g('h2', jE, [
				t[0] || (t[0] = g('span', { class: 'vpi-archive icon' }, null, -1)),
				g('span', null, D(((s = o.archiveLink) == null ? void 0 : s.text) ?? 'Archives'), 1),
			]),
			o.archives.length
				? (h(),
				  _('div', HE, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.archives,
								(a) => (
									h(),
									_('div', { key: a.label, class: 'archive' }, [
										g('h3', zE, [Te(D(a.title) + ' ', 1), g('span', qE, D(a.label), 1)]),
										O(o.VPShortPostList, { 'post-list': a.list }, null, 8, ['post-list']),
									])
								)
							),
							128
						)),
				  ]))
				: A('', !0),
			C(e.$slots, 'blog-archives-after', {}, void 0, !0),
		])
	)
}
const WE = M(NE, [
		['render', UE],
		['__scopeId', 'data-v-29c18446'],
		['__file', 'VPBlogArchives.vue'],
	]),
	GE = $({
		__name: 'VPBlogNav',
		props: { isLocal: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = at(),
				{ hasBlogExtract: r, tags: i, archives: s, categories: a } = ev(),
				l = {
					props: n,
					route: o,
					hasBlogExtract: r,
					tags: i,
					archives: s,
					categories: a,
					VPLink: Ge,
				}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	KE = { class: 'text' },
	YE = { class: 'total' },
	QE = { class: 'text' },
	JE = { class: 'total' },
	XE = { class: 'text' },
	ZE = { class: 'total' }
function ex(e, t, n, o, r, i) {
	return o.hasBlogExtract
		? (h(),
		  _(
				'div',
				{ key: 0, class: J(['vp-blog-nav', { local: o.props.isLocal }]) },
				[
					o.tags.link
						? (h(),
						  N(
								o.VPLink,
								{
									key: 0,
									class: J(['nav-link', { active: o.route.path === o.tags.link }]),
									href: o.tags.link,
								},
								{
									default: T(() => [
										t[0] || (t[0] = g('span', { class: 'icon icon-logo vpi-tag' }, null, -1)),
										g('span', KE, D(o.tags.text), 1),
										g('span', YE, D(o.tags.total), 1),
										t[1] || (t[1] = g('span', { class: 'icon vpi-chevron-right' }, null, -1)),
									]),
									_: 1,
								},
								8,
								['class', 'href']
						  ))
						: A('', !0),
					o.categories.link
						? (h(),
						  N(
								o.VPLink,
								{
									key: 1,
									class: J(['nav-link', { active: o.route.path === o.categories.link }]),
									href: o.categories.link,
								},
								{
									default: T(() => [
										t[2] || (t[2] = g('span', { class: 'icon icon-logo vpi-category' }, null, -1)),
										g('span', QE, D(o.categories.text), 1),
										g('span', JE, D(o.categories.total), 1),
										t[3] || (t[3] = g('span', { class: 'icon vpi-chevron-right' }, null, -1)),
									]),
									_: 1,
								},
								8,
								['class', 'href']
						  ))
						: A('', !0),
					o.archives.link
						? (h(),
						  N(
								o.VPLink,
								{
									key: 2,
									class: J(['nav-link', { active: o.route.path === o.archives.link }]),
									href: o.archives.link,
								},
								{
									default: T(() => [
										t[4] || (t[4] = g('span', { class: 'icon icon-logo vpi-archive' }, null, -1)),
										g('span', XE, D(o.archives.text), 1),
										g('span', ZE, D(o.archives.total), 1),
										t[5] || (t[5] = g('span', { class: 'icon vpi-chevron-right' }, null, -1)),
									]),
									_: 1,
								},
								8,
								['class', 'href']
						  ))
						: A('', !0),
				],
				2
		  ))
		: A('', !0)
}
const Vv = M(GE, [
		['render', ex],
		['__scopeId', 'data-v-208cfa92'],
		['__file', 'VPBlogNav.vue'],
	]),
	tx = $({
		__name: 'VPBlogProfile',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = E(() => n.value.profile),
				r = E(() => {
					var a, l
					const s =
						((a = o.value) == null ? void 0 : a.avatar) ?? ((l = o.value) == null ? void 0 : l.url)
					return s ? (It(s) ? s : et(s)) : ''
				}),
				i = { theme: n, profile: o, imageUrl: r, VPSocialLinks: gi }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	nx = { key: 0, class: 'vp-blog-profile' },
	ox = ['src', 'alt', 'width', 'height'],
	rx = { class: 'profile-info' },
	ix = ['innerHTML'],
	sx = { key: 1, class: 'profile-location' },
	ax = ['innerHTML'],
	lx = { key: 2, class: 'profile-organization' },
	cx = ['innerHTML'],
	ux = { key: 1, class: 'profile-social' }
function dx(e, t, n, o, r, i) {
	return o.profile
		? (h(),
		  _('div', nx, [
				o.imageUrl
					? (h(),
					  _(
							'p',
							{ key: 0, class: J({ circle: !!o.profile.circle }) },
							[
								g(
									'img',
									{
										src: o.imageUrl,
										alt: o.profile.name,
										width: o.profile.originalWidth,
										height: o.profile.originalHeight,
									},
									null,
									8,
									ox
								),
							],
							2
					  ))
					: A('', !0),
				g('div', rx, [
					g('h3', null, D(o.profile.name), 1),
					o.profile.description
						? (h(), _('p', { key: 0, innerHTML: o.profile.description }, null, 8, ix))
						: A('', !0),
					o.profile.location
						? (h(),
						  _('div', sx, [
								t[0] || (t[0] = g('span', { class: 'vpi-location' }, null, -1)),
								o.profile.location
									? (h(), _('p', { key: 0, innerHTML: o.profile.location }, null, 8, ax))
									: A('', !0),
						  ]))
						: A('', !0),
					o.profile.organization
						? (h(),
						  _('div', lx, [
								t[1] || (t[1] = g('span', { class: 'vpi-organization' }, null, -1)),
								o.profile.organization
									? (h(), _('p', { key: 0, innerHTML: o.profile.organization }, null, 8, cx))
									: A('', !0),
						  ]))
						: A('', !0),
				]),
				o.theme.social
					? (h(), _('div', ux, [O(o.VPSocialLinks, { links: o.theme.social }, null, 8, ['links'])]))
					: A('', !0),
		  ]))
		: A('', !0)
}
const fx = M(tx, [
		['render', dx],
		['__scopeId', 'data-v-ff6b7399'],
		['__file', 'VPBlogProfile.vue'],
	]),
	px = $({
		__name: 'VPBlogAside',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = { theme: n, VPBlogNav: Vv, VPBlogProfile: fx }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	hx = { key: 0, class: 'vp-blog-aside' }
function mx(e, t, n, o, r, i) {
	return o.theme.profile
		? (h(),
		  _('div', hx, [
				C(e.$slots, 'blog-aside-top', {}, void 0, !0),
				O(o.VPBlogProfile),
				O(o.VPBlogNav),
				C(e.$slots, 'blog-aside-bottom', {}, void 0, !0),
		  ]))
		: A('', !0)
}
const vx = M(px, [
		['render', mx],
		['__scopeId', 'data-v-e43d09a6'],
		['__file', 'VPBlogAside.vue'],
	]),
	gx = $({
		__name: 'VPCategoriesGroup',
		props: { item: {}, depth: { default: 0 } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ blog: o } = se(),
				r = at(),
				i = R(null),
				s = R(!0),
				a = R(!1),
				l = E(() => {
					const f = o.value.categoriesExpand ?? 'deep'
					if (f === 'deep') return 1 / 0
					const p = Number(f)
					return Number.isNaN(p) ? 1 / 0 : p
				})
			ve(
				() => [r.query, n.item, l.value],
				() => {
					const f = r.query.id
					f ? (s.value = c(n.item, f)) : (s.value = n.depth <= l.value),
						(a.value = f ? n.item.id === f : !1)
				},
				{ immediate: !0 }
			)
			function c(f, p) {
				return f.id === p || f.items.filter((m) => m.type === 'category').some((m) => c(m, p))
			}
			function u() {
				s.value = !s.value
			}
			ke(() => {
				i.value && a.value && i.value.scrollIntoView({ block: 'center' })
			})
			const d = {
				props: n,
				blog: o,
				route: r,
				el: i,
				expand: s,
				isExpand: a,
				expandDepth: l,
				hasExpand: c,
				toggle: u,
				VPCategories: $v,
			}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	})
function _x(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ ref: 'el', class: J(['vp-category-group', { expand: o.expand }]) },
			[
				g('p', { class: 'folder', onClick: o.toggle }, [
					g('span', { class: J(['icon', [o.expand ? 'vpi-folder-open' : 'vpi-folder']]) }, null, 2),
					g('span', null, D(n.item.title), 1),
				]),
				n.item.items.length
					? (h(),
					  N(
							o.VPCategories,
							{ key: 0, class: 'group', items: n.item.items, depth: n.depth },
							null,
							8,
							['items', 'depth']
					  ))
					: A('', !0),
			],
			2
		)
	)
}
const bx = M(gx, [
		['render', _x],
		['__scopeId', 'data-v-3573d34c'],
		['__file', 'VPCategoriesGroup.vue'],
	]),
	yx = $({
		__name: 'VPCategories',
		props: { items: {}, depth: { default: 0 } },
		setup(e, { expose: t }) {
			t()
			const n = { VPCategoriesGroup: bx, VPLink: Ge }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	wx = { class: 'vp-categories' },
	kx = { key: 0, class: 'post' }
function Ex(e, t, n, o, r, i) {
	return (
		h(),
		_('ul', wx, [
			(h(!0),
			_(
				K,
				null,
				he(
					n.items,
					(s) => (
						h(),
						_('li', { key: s.path || s.id, class: 'vp-categories-item' }, [
							s.type === 'post'
								? (h(),
								  _('p', kx, [
										t[0] || (t[0] = g('span', { class: 'vpi-post' }, null, -1)),
										O(o.VPLink, { href: s.path, text: s.title }, null, 8, ['href', 'text']),
								  ]))
								: (h(),
								  N(o.VPCategoriesGroup, { key: 1, item: s, depth: n.depth + 1 }, null, 8, [
										'item',
										'depth',
								  ])),
						])
					)
				),
				128
			)),
		])
	)
}
const $v = M(yx, [
		['render', Ex],
		['__scopeId', 'data-v-0ed117d6'],
		['__file', 'VPCategories.vue'],
	]),
	xx = $({
		__name: 'VPBlogCategories',
		setup(e, { expose: t }) {
			t()
			const { categories: n } = So(),
				{ categories: o } = Qm(),
				r = { categoriesLink: n, categories: o, VPCategories: $v }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	Px = { class: 'vp-blog-categories' },
	Sx = { class: 'categories-title' },
	Cx = { class: 'content' }
function Tx(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_('div', Px, [
			C(e.$slots, 'blog-categories-before', {}, void 0, !0),
			g('h2', Sx, [
				t[0] || (t[0] = g('span', { class: 'vpi-category icon' }, null, -1)),
				g('span', null, D(((s = o.categoriesLink) == null ? void 0 : s.text) ?? 'Categories'), 1),
			]),
			C(e.$slots, 'blog-categories-content-before', {}, void 0, !0),
			g('div', Cx, [O(o.VPCategories, { items: o.categories, depth: 0 }, null, 8, ['items'])]),
			C(e.$slots, 'blog-categories-after', {}, void 0, !0),
		])
	)
}
const Ax = M(xx, [
		['render', Tx],
		['__scopeId', 'data-v-72b47c4e'],
		['__file', 'VPBlogCategories.vue'],
	]),
	Lx = $({
		__name: 'VPBlogExtract',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = at(),
				r = E(() => n.value.profile),
				i = E(() => {
					var b, w
					const v =
						((b = r.value) == null ? void 0 : b.avatar) ?? ((w = r.value) == null ? void 0 : w.url)
					return v ? (It(v) ? v : et(v)) : ''
				}),
				{ hasBlogExtract: s, tags: a, archives: l, categories: c } = ev(),
				u = R(!1),
				d = R(!1),
				f = Kl(dn ? document.body : null)
			ve(
				() => o.path,
				() => {
					u.value = !1
				}
			),
				ve(u, async () => {
					u.value
						? setTimeout(() => {
								d.value = !0
						  }, 200)
						: (d.value = !1)
				}),
				ve(
					[() => u.value],
					() => {
						u.value ? (f.value = !0) : (f.value = !1)
					},
					{ immediate: !0, flush: 'post' }
				)
			const p = E(() => r.value || s.value),
				m = {
					theme: n,
					route: o,
					profile: r,
					imageUrl: i,
					hasBlogExtract: s,
					tags: a,
					archives: l,
					categories: c,
					open: u,
					lazyOpen: d,
					isLocked: f,
					showBlogExtract: p,
					VPLink: Ge,
				}
			return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
		},
	}),
	Bx = { key: 0, class: 'profile' },
	Ox = { key: 0, class: 'avatar' },
	Vx = ['src', 'alt'],
	$x = { class: 'desc' },
	Ix = { class: 'profile-info' },
	Rx = { key: 0, class: 'profile-location' },
	Dx = ['innerHTML'],
	Mx = { key: 1, class: 'profile-organization' },
	Nx = ['innerHTML']
function Fx(e, t, n, o, r, i) {
	return o.showBlogExtract
		? (h(),
		  _(
				K,
				{ key: 0 },
				[
					g(
						'div',
						{ class: 'vp-blog-extract', onClick: t[0] || (t[0] = (s) => (o.open = !o.open)) },
						t[2] || (t[2] = [g('span', { class: 'vpi-blog-ext icon' }, null, -1)])
					),
					O(
						no,
						{ name: 'fade' },
						{
							default: T(() => [
								Ft(
									g(
										'div',
										{
											class: 'blog-modal',
											onClick: t[1] || (t[1] = Qp((s) => (o.open = !1), ['self'])),
										},
										[
											g(
												'div',
												{ class: J(['blog-modal-container', { open: o.lazyOpen }]) },
												[
													C(e.$slots, 'blog-extract-before', {}, void 0, !0),
													o.profile
														? (h(),
														  _('div', Bx, [
																o.imageUrl
																	? (h(),
																	  _('p', Ox, [
																			g(
																				'img',
																				{ src: o.imageUrl, alt: o.profile.name },
																				null,
																				8,
																				Vx
																			),
																	  ]))
																	: A('', !0),
																g('div', null, [
																	g('h3', null, D(o.profile.name), 1),
																	g('p', $x, D(o.profile.description), 1),
																	g('div', Ix, [
																		o.profile.location
																			? (h(),
																			  _('div', Rx, [
																					t[3] ||
																						(t[3] = g('span', { class: 'vpi-location' }, null, -1)),
																					o.profile.location
																						? (h(),
																						  _(
																								'p',
																								{ key: 0, innerHTML: o.profile.location },
																								null,
																								8,
																								Dx
																						  ))
																						: A('', !0),
																			  ]))
																			: A('', !0),
																		o.profile.organization
																			? (h(),
																			  _('div', Mx, [
																					t[4] ||
																						(t[4] = g(
																							'span',
																							{ class: 'vpi-organization' },
																							null,
																							-1
																						)),
																					o.profile.organization
																						? (h(),
																						  _(
																								'p',
																								{ key: 0, innerHTML: o.profile.organization },
																								null,
																								8,
																								Nx
																						  ))
																						: A('', !0),
																			  ]))
																			: A('', !0),
																	]),
																]),
														  ]))
														: A('', !0),
													o.hasBlogExtract
														? (h(),
														  _(
																'div',
																{ key: 1, class: J(['blog-nav', { 'no-profile': !o.profile }]) },
																[
																	O(
																		o.VPLink,
																		{ class: 'nav-link', href: o.tags.link, 'no-icon': '' },
																		{
																			default: T(() => [
																				t[5] ||
																					(t[5] = g('span', { class: 'vpi-tag icon' }, null, -1)),
																				g('span', null, D(o.tags.text), 1),
																			]),
																			_: 1,
																		},
																		8,
																		['href']
																	),
																	O(
																		o.VPLink,
																		{ class: 'nav-link', href: o.categories.link, 'no-icon': '' },
																		{
																			default: T(() => [
																				t[6] ||
																					(t[6] = g(
																						'span',
																						{ class: 'vpi-category icon' },
																						null,
																						-1
																					)),
																				g('span', null, D(o.categories.text), 1),
																			]),
																			_: 1,
																		},
																		8,
																		['href']
																	),
																	O(
																		o.VPLink,
																		{ class: 'nav-link', href: o.archives.link, 'no-icon': '' },
																		{
																			default: T(() => [
																				t[7] ||
																					(t[7] = g(
																						'span',
																						{ class: 'vpi-archive icon' },
																						null,
																						-1
																					)),
																				g('span', null, D(o.archives.text), 1),
																			]),
																			_: 1,
																		},
																		8,
																		['href']
																	),
																],
																2
														  ))
														: A('', !0),
													C(e.$slots, 'blog-extract-after', {}, void 0, !0),
												],
												2
											),
										],
										512
									),
									[[Ss, o.open]]
								),
							]),
							_: 3,
						}
					),
				],
				64
		  ))
		: A('', !0)
}
const jx = M(Lx, [
		['render', Fx],
		['__scopeId', 'data-v-58009e95'],
		['__file', 'VPBlogExtract.vue'],
	]),
	Hx = $({
		__name: 'VPBlogTags',
		setup(e, { expose: t }) {
			t()
			const { tags: n } = So(),
				{ tags: o, currentTag: r, postList: i, handleTagClick: s } = Zm(),
				a = {
					tagsLink: n,
					tags: o,
					currentTag: r,
					postList: i,
					handleTagClick: s,
					VPShortPostList: Ov,
				}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	}),
	zx = { class: 'tags-nav' },
	qx = { class: 'tags-title' },
	Ux = { class: 'tags' },
	Wx = ['onClick'],
	Gx = { class: 'tag-name' },
	Kx = { class: 'tag-count' },
	Yx = { key: 0, class: 'tags-container' },
	Qx = { class: 'tag-title' }
function Jx(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-blog-tags', { 'has-list': o.postList.length > 0 }]) },
			[
				C(e.$slots, 'blog-tags-before', {}, void 0, !0),
				g('div', zx, [
					g('h2', qx, [
						t[0] || (t[0] = g('span', { class: 'vpi-tag icon' }, null, -1)),
						g('span', null, D(((s = o.tagsLink) == null ? void 0 : s.text) ?? 'Tags'), 1),
					]),
					C(e.$slots, 'blog-tags-title-after', {}, void 0, !0),
					g('div', Ux, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.tags,
								(a) => (
									h(),
									_(
										'p',
										{
											key: a.name,
											class: J(['tag', { active: a.name === o.currentTag, [a.className]: !0 }]),
											onClick: (l) => o.handleTagClick(a.name),
										},
										[g('span', Gx, D(a.name), 1), g('span', Kx, D(a.count), 1)],
										10,
										Wx
									)
								)
							),
							128
						)),
					]),
				]),
				C(e.$slots, 'blog-tags-content-before', {}, void 0, !0),
				o.currentTag
					? (h(),
					  _('div', Yx, [
							g('h3', Qx, D(o.currentTag), 1),
							o.postList.length
								? (h(),
								  N(o.VPShortPostList, { key: 0, 'post-list': o.postList }, null, 8, ['post-list']))
								: A('', !0),
					  ]))
					: A('', !0),
				C(e.$slots, 'blog-tags-after', {}, void 0, !0),
			],
			2
		)
	)
}
const Xx = M(Hx, [
		['render', Jx],
		['__scopeId', 'data-v-d7b97022'],
		['__file', 'VPBlogTags.vue'],
	]),
	Zx = $({
		__name: 'VPPagination',
		props: {
			page: {},
			totalPage: {},
			isFirstPage: { type: Boolean },
			isLastPage: { type: Boolean },
			pageRange: {},
		},
		emits: ['change'],
		setup(e, { expose: t, emit: n }) {
			t()
			const o = n,
				{ theme: r } = se(),
				i = { emit: o, theme: r }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	eP = { class: 'vp-blog-pagination' },
	tP = ['disabled'],
	nP = { class: 'page-range' },
	oP = ['disabled', 'onClick'],
	rP = ['disabled']
function iP(e, t, n, o, r, i) {
	return (
		h(),
		_('div', eP, [
			g(
				'button',
				{
					type: 'button',
					class: 'btn prev',
					disabled: n.isFirstPage,
					onClick: t[0] || (t[0] = () => o.emit('change', n.page - 1)),
				},
				D(o.theme.prevPageLabel || 'Prev'),
				9,
				tP
			),
			g('div', nP, [
				(h(!0),
				_(
					K,
					null,
					he(
						n.pageRange,
						({ value: s, more: a }) => (
							h(),
							_(
								'button',
								{
									key: s,
									class: J(['btn', { more: a, active: s === n.page }]),
									disabled: a,
									type: 'button',
									onClick: () => !a && o.emit('change', s),
								},
								D(a ? '...' : s),
								11,
								oP
							)
						)
					),
					128
				)),
			]),
			g(
				'button',
				{
					type: 'button',
					class: 'btn next',
					disabled: n.isLastPage,
					onClick: t[1] || (t[1] = () => o.emit('change', n.page + 1)),
				},
				D(o.theme.nextPageLabel || 'Next'),
				9,
				rP
			),
		])
	)
}
const sP = M(Zx, [
		['render', iP],
		['__scopeId', 'data-v-ddb16f43'],
		['__file', 'VPPagination.vue'],
	]),
	aP = $({
		__name: 'VPPostItem',
		props: { post: {}, index: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ blog: o } = se(),
				r = oc(),
				{ categories: i, tags: s } = So(),
				a = E(() => {
					var w
					return (w = n.post.createTime) == null ? void 0 : w.split(/\s|T/)[0].replace(/\//g, '-')
				}),
				l = E(() => n.post.categoryList ?? []),
				c = E(() =>
					typeof n.post.sticky == 'boolean'
						? n.post.sticky
						: typeof n.post.sticky == 'number'
						? n.post.sticky >= 0
						: !1
				),
				u = E(() => {
					const w = o.value.tagsTheme ?? 'colored'
					return (n.post.tags ?? [])
						.slice(0, 4)
						.map((P) => ({ name: P, className: r.value[P] ? `vp-tag-${r.value[P]}` : `tag-${w}` }))
				}),
				d = E(() => {
					if (!n.post.cover) return null
					const w = o.value.postCover ?? 'right',
						P = typeof w == 'string' ? { layout: w } : w,
						y = typeof n.post.cover == 'string' ? { url: n.post.cover } : n.post.cover
					return { layout: 'right', ratio: '4:3', ...P, ...y }
				}),
				f = Rt('(max-width: 496px)'),
				p = E(() => {
					var y
					if (f.value) return 'top'
					const w = ((y = d.value) == null ? void 0 : y.layout) ?? 'right',
						P = (n.index + 1) % 2 === 1
					return w === 'odd-left'
						? P
							? 'left'
							: 'right'
						: w === 'odd-right'
						? P
							? 'right'
							: 'left'
						: w
				}),
				m = E(() => {
					var w
					return n.post.excerpt || p.value === 'top'
						? !1
						: ((w = d.value) == null ? void 0 : w.compact) ?? !1
				}),
				v = E(() => {
					if (!d.value) return null
					let w
					if (typeof d.value.ratio == 'number') w = d.value.ratio
					else {
						const [P, y] = d.value.ratio.split(/[:/]/).map(Number)
						w = y / P
					}
					if (p.value === 'left' || p.value === 'right') {
						const P = d.value.width ?? 240
						return { width: `${P}px`, height: `${P * w}px` }
					}
					return { height: 0, paddingBottom: `${w * 100}%` }
				}),
				b = {
					props: n,
					blog: o,
					colors: r,
					categoriesLink: i,
					tagsLink: s,
					createTime: a,
					categoryList: l,
					sticky: c,
					tags: u,
					cover: d,
					isMobile: f,
					coverLayout: p,
					coverCompact: m,
					coverStyles: v,
					VPLink: Ge,
				}
			return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
		},
	}),
	lP = ['src', 'alt'],
	cP = { class: 'blog-post-item-content' },
	uP = { key: 0, class: 'sticky' },
	dP = { key: 1, class: 'icon-lock vpi-lock' },
	fP = { class: 'post-meta' },
	pP = { key: 0, class: 'category-list' },
	hP = { key: 0 },
	mP = { key: 1, class: 'tag-list' },
	vP = { key: 2, class: 'create-time' },
	gP = ['innerHTML']
function _P(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{
				class: J(['vp-blog-post-item', { 'has-cover': o.cover, [o.coverLayout]: o.cover }]),
				'data-allow-mismatch': '',
			},
			[
				o.cover
					? (h(),
					  _(
							'div',
							{
								key: 0,
								class: J(['post-cover', { compact: o.coverCompact }]),
								'data-allow-mismatch': '',
								style: xe(o.coverStyles),
							},
							[g('img', { src: o.cover.url, alt: n.post.title, loading: 'lazy' }, null, 8, lP)],
							6
					  ))
					: A('', !0),
				g('div', cP, [
					g('h3', null, [
						o.sticky ? (h(), _('span', uP, 'TOP')) : A('', !0),
						n.post.encrypt ? (h(), _('span', dP)) : A('', !0),
						O(o.VPLink, { href: n.post.path, text: n.post.title }, null, 8, ['href', 'text']),
					]),
					g('div', fP, [
						o.categoryList.length
							? (h(),
							  _('div', pP, [
									t[0] || (t[0] = g('span', { class: 'icon vpi-folder' }, null, -1)),
									(h(!0),
									_(
										K,
										null,
										he(
											o.categoryList,
											(s, a) => (
												h(),
												_(
													K,
													{ key: a },
													[
														O(
															o.VPLink,
															{
																href: o.categoriesLink
																	? `${o.categoriesLink.link}?id=${s.id}`
																	: void 0,
															},
															{ default: T(() => [Te(D(s.name), 1)]), _: 2 },
															1032,
															['href']
														),
														a !== o.categoryList.length - 1 ? (h(), _('span', hP, '/')) : A('', !0),
													],
													64
												)
											)
										),
										128
									)),
							  ]))
							: A('', !0),
						o.tags.length
							? (h(),
							  _('div', mP, [
									t[1] || (t[1] = g('span', { class: 'icon vpi-tag' }, null, -1)),
									(h(!0),
									_(
										K,
										null,
										he(
											o.tags,
											(s) => (
												h(),
												N(
													o.VPLink,
													{
														key: s.name,
														class: J(['tag', s.className]),
														href: o.tagsLink ? `${o.tagsLink.link}?tag=${s.name}` : void 0,
													},
													{ default: T(() => [Te(D(s.name), 1)]), _: 2 },
													1032,
													['class', 'href']
												)
											)
										),
										128
									)),
							  ]))
							: A('', !0),
						o.createTime
							? (h(),
							  _('div', vP, [
									t[2] || (t[2] = g('span', { class: 'icon vpi-clock' }, null, -1)),
									g('span', null, D(o.createTime), 1),
							  ]))
							: A('', !0),
					]),
					n.post.excerpt
						? (h(),
						  _('div', { key: 0, class: 'vp-doc excerpt', innerHTML: n.post.excerpt }, null, 8, gP))
						: A('', !0),
				]),
			],
			2
		)
	)
}
const bP = M(aP, [
		['render', _P],
		['__scopeId', 'data-v-1f187785'],
		['__file', 'VPPostItem.vue'],
	]),
	yP = $({
		__name: 'VPTransitionDrop',
		props: { delay: { default: 0 }, duration: { default: 0.25 }, appear: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				r = E(() => {
					const u = o.value.transition
					return typeof u == 'object' ? u.postList !== !1 : u !== !1
				})
			let i = ''
			function s(u) {
				const d = u
				;(d.style.transform = 'translateY(-20px)'), (d.style.opacity = '0')
			}
			function a(u) {
				var f
				const d = u
				if (!i) {
					const p =
						typeof window < 'u'
							? (f = window.getComputedStyle) == null
								? void 0
								: f.call(window, d).transition
							: ''
					i = p && !p.includes('all') ? `${p || ''}, ` : ' '
				}
				d.style.transition = `${i}transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`
			}
			function l(u) {
				const d = u
				;(d.style.transform = 'translateY(0)'), (d.style.opacity = '1'), (d.style.transition = i)
			}
			const c = {
				props: n,
				theme: o,
				enabledTransition: r,
				get _transition() {
					return i
				},
				set _transition(u) {
					i = u
				},
				beforeAppear: s,
				setStyle: a,
				unsetStyle: l,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	})
function wP(e, t, n, o, r, i) {
	return o.enabledTransition
		? (h(),
		  N(
				no,
				{
					key: 0,
					name: 'drop',
					mode: 'out-in',
					appear: n.appear,
					onAppear: o.setStyle,
					onBeforeAppear: o.beforeAppear,
					onAfterAppear: o.unsetStyle,
					onEnter: o.setStyle,
					onAfterEnter: o.unsetStyle,
					onBeforeLeave: o.setStyle,
				},
				{ default: T(() => [C(e.$slots, 'default')]), _: 3 },
				8,
				['appear']
		  ))
		: C(e.$slots, 'default', { key: 1 })
}
const kP = M(yP, [
		['render', wP],
		['__file', 'VPTransitionDrop.vue'],
	]),
	EP = $({
		__name: 'VPPostList',
		props: { homeBlog: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{
					postList: o,
					page: r,
					totalPage: i,
					pageRange: s,
					isLastPage: a,
					isFirstPage: l,
					isPaginationEnabled: c,
					changePage: u,
				} = y6(E(() => !!n.homeBlog)),
				d = {
					props: n,
					postList: o,
					page: r,
					totalPage: i,
					pageRange: s,
					isLastPage: a,
					isFirstPage: l,
					isPaginationEnabled: c,
					changePage: u,
					VPPagination: sP,
					VPPostItem: bP,
					VPTransitionDrop: kP,
				}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	xP = { class: 'vp-blog-post-list' }
function PP(e, t, n, o, r, i) {
	return (
		h(),
		_('div', xP, [
			C(e.$slots, 'blog-post-list-before', {}, void 0, !0),
			(h(!0),
			_(
				K,
				null,
				he(
					o.postList,
					(s, a) => (
						h(),
						N(
							o.VPTransitionDrop,
							{ key: s.path, appear: '', delay: a * 0.025 },
							{
								default: T(() => [
									(h(),
									N(o.VPPostItem, { key: s.path, post: s, index: a }, null, 8, ['post', 'index'])),
								]),
								_: 2,
							},
							1032,
							['delay']
						)
					)
				),
				128
			)),
			C(e.$slots, 'blog-post-list-after', {}, void 0, !0),
			o.isPaginationEnabled
				? (h(),
				  N(
						o.VPPagination,
						{
							key: 0,
							page: o.page,
							'total-page': o.totalPage,
							'page-range': o.pageRange,
							'is-last-page': o.isLastPage,
							'is-first-page': o.isFirstPage,
							onChange: o.changePage,
						},
						null,
						8,
						['page', 'total-page', 'page-range', 'is-last-page', 'is-first-page', 'onChange']
				  ))
				: A('', !0),
			C(e.$slots, 'blog-post-list-pagination-after', {}, void 0, !0),
		])
	)
}
const SP = M(EP, [
		['render', PP],
		['__scopeId', 'data-v-92c3acd7'],
		['__file', 'VPPostList.vue'],
	]),
	CP = $({
		__name: 'VPTransitionFadeSlideY',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				{ resolve: o, pending: r } = uv(),
				i = E(() => {
					const a = n.value.transition
					return typeof a == 'object' ? a.page !== !1 : a !== !1
				}),
				s = { theme: n, onBeforeEnter: o, onBeforeLeave: r, enabledTransition: i }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	})
function TP(e, t, n, o, r, i) {
	return o.enabledTransition
		? (h(),
		  N(
				no,
				{
					key: 0,
					name: 'fade-slide-y',
					mode: 'out-in',
					onAfterEnter: o.onBeforeEnter,
					onBeforeLeave: o.onBeforeLeave,
				},
				{ default: T(() => [C(e.$slots, 'default')]), _: 3 },
				8,
				['onAfterEnter', 'onBeforeLeave']
		  ))
		: C(e.$slots, 'default', { key: 1 })
}
const _c = M(CP, [
		['render', TP],
		['__file', 'VPTransitionFadeSlideY.vue'],
	]),
	AP = $({
		__name: 'VPBlog',
		props: { homeBlog: { type: Boolean }, type: {}, onlyOnce: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const { theme: n, page: o } = se(),
				r = {
					theme: n,
					page: o,
					VPBlogArchives: WE,
					VPBlogAside: vx,
					VPBlogCategories: Ax,
					VPBlogExtract: jx,
					VPBlogNav: Vv,
					VPBlogTags: Xx,
					VPPostList: SP,
					VPTransitionFadeSlideY: _c,
				}
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	})
function LP(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-blog', { 'home-blog': n.homeBlog }]), 'vp-blog': '' },
			[
				C(e.$slots, 'blog-top', {}, void 0, !0),
				g(
					'div',
					{
						class: J([
							'blog-container',
							{
								'no-profile': !o.theme.profile,
								left: ((s = o.theme.profile) == null ? void 0 : s.layout) === 'left',
							},
						]),
					},
					[
						o.theme.profile ? A('', !0) : (h(), N(o.VPBlogNav, { key: 0, 'is-local': '' })),
						O(o.VPTransitionFadeSlideY, null, {
							default: T(() => [
								o.page.type === 'blog-archives'
									? (h(),
									  N(
											o.VPBlogArchives,
											{ key: 0 },
											{
												'blog-archives-before': T(() => [
													C(e.$slots, 'blog-archives-before', {}, void 0, !0),
												]),
												'blog-archives-after': T(() => [
													C(e.$slots, 'blog-archives-after', {}, void 0, !0),
												]),
												_: 3,
											}
									  ))
									: o.page.type === 'blog-tags'
									? (h(),
									  N(
											o.VPBlogTags,
											{ key: 1 },
											{
												'blog-tags-before': T(() => [
													C(e.$slots, 'blog-tags-before', {}, void 0, !0),
												]),
												'blog-tags-after': T(() => [
													C(e.$slots, 'blog-tags-after', {}, void 0, !0),
												]),
												'blog-tags-title-after': T(() => [
													C(e.$slots, 'blog-tags-title-after', {}, void 0, !0),
												]),
												'blog-tags-content-before': T(() => [
													C(e.$slots, 'blog-tags-content-before', {}, void 0, !0),
												]),
												_: 3,
											}
									  ))
									: o.page.type === 'blog-categories'
									? (h(),
									  N(
											o.VPBlogCategories,
											{ key: 2 },
											{
												'blog-categories-before': T(() => [
													C(e.$slots, 'blog-categories-before', {}, void 0, !0),
												]),
												'blog-categories-after': T(() => [
													C(e.$slots, 'blog-categories-after', {}, void 0, !0),
												]),
												'blog-categories-content-before': T(() => [
													C(e.$slots, 'blog-categories-content-before', {}, void 0, !0),
												]),
												_: 3,
											}
									  ))
									: (h(),
									  N(
											o.VPPostList,
											{ key: 3, 'home-blog': n.homeBlog },
											{
												'blog-post-list-before': T(() => [
													C(e.$slots, 'blog-post-list-before', {}, void 0, !0),
												]),
												'blog-post-list-after': T(() => [
													C(e.$slots, 'blog-post-list-after', {}, void 0, !0),
												]),
												'blog-post-list-pagination-after': T(() => [
													C(e.$slots, 'blog-post-list-pagination-after', {}, void 0, !0),
												]),
												_: 3,
											},
											8,
											['home-blog']
									  )),
							]),
							_: 3,
						}),
						O(o.VPBlogAside, null, {
							'blog-aside-top': T(() => [C(e.$slots, 'blog-aside-top', {}, void 0, !0)]),
							'blog-aside-bottom': T(() => [C(e.$slots, 'blog-aside-bottom', {}, void 0, !0)]),
							_: 3,
						}),
						O(o.VPBlogExtract, null, {
							'blog-extract-before': T(() => [C(e.$slots, 'blog-extract-before', {}, void 0, !0)]),
							'blog-extract-after': T(() => [C(e.$slots, 'blog-extract-after', {}, void 0, !0)]),
							_: 3,
						}),
					],
					2
				),
				C(e.$slots, 'blog-bottom', {}, void 0, !0),
			],
			2
		)
	)
}
const Iv = M(AP, [
		['render', LP],
		['__scopeId', 'data-v-f9793772'],
		['__file', 'VPBlog.vue'],
	]),
	BP = $({
		__name: 'VPButton',
		props: {
			tag: { default: void 0 },
			size: { default: 'medium' },
			theme: { default: 'brand' },
			text: {},
			href: { default: void 0 },
			target: { default: void 0 },
			rel: { default: void 0 },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = sr(),
				r = E(() => (n.tag || n.href ? 'a' : 'button')),
				{ link: i, isExternal: s } = sv(yo(n, 'href'), yo(n, 'target'))
			function a(c) {
				var u
				!s.value &&
					((u = i.value) == null ? void 0 : u[0]) !== '#' &&
					(c.preventDefault(), i.value && o.push(i.value))
			}
			const l = {
				props: n,
				router: o,
				component: r,
				link: i,
				isExternal: s,
				linkTo: a,
				get withBase() {
					return et
				},
			}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	})
function OP(e, t, n, o, r, i) {
	var s
	return (
		h(),
		N(
			Ht(o.component),
			{
				class: J(['vp-button', [n.size, n.theme]]),
				href: ((s = o.link) == null ? void 0 : s[0]) === '#' ? o.link : o.withBase(o.link || ''),
				target: n.target ?? (o.isExternal ? '_blank' : void 0),
				rel: n.rel ?? (o.isExternal ? 'noreferrer' : void 0),
				onClick: t[0] || (t[0] = (a) => o.linkTo(a)),
			},
			{ default: T(() => [Te(D(n.text), 1)]), _: 1 },
			8,
			['class', 'href', 'target', 'rel']
		)
	)
}
const bc = M(BP, [
		['render', OP],
		['__scopeId', 'data-v-013bd42f'],
		['__file', 'VPButton.vue'],
	]),
	vf = 'https://api.pengzhanbo.cn/wallpaper/bing',
	VP = $({
		__name: 'VPHomeBanner',
		props: {
			type: {},
			banner: {},
			bannerMask: {},
			hero: {},
			onlyOnce: { type: Boolean },
			full: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ isDark: o, frontmatter: r } = se(),
				i = E(() => {
					const f = n.bannerMask ?? r.value.bannerMask
					return typeof f != 'object' ? f || 0 : (o.value ? f.dark : f.light) || 0
				}),
				s = E(() => {
					const f = n.banner ?? r.value.banner
					return { 'background-image': `url(${f ? (It(f) ? f : et(f)) : vf})` }
				}),
				a = E(() => {
					var f, p
					return (
						((f = n.hero) == null ? void 0 : f.name) ??
						((p = r.value.hero) == null ? void 0 : p.name) ??
						'Plume'
					)
				}),
				l = E(() => {
					var f, p
					return (
						((f = n.hero) == null ? void 0 : f.tagline) ??
						((p = r.value.hero) == null ? void 0 : p.tagline) ??
						'A VuePress Theme'
					)
				}),
				c = E(() => {
					var f, p
					return (
						((f = n.hero) == null ? void 0 : f.text) ??
						((p = r.value.hero) == null ? void 0 : p.text)
					)
				}),
				u = E(() => {
					var f, p
					return (
						((f = n.hero) == null ? void 0 : f.actions) ??
						((p = r.value.hero) == null ? void 0 : p.actions) ??
						[]
					)
				}),
				d = {
					props: n,
					DEFAULT_BANNER: vf,
					isDark: o,
					matter: r,
					mask: i,
					bannerStyle: s,
					name: a,
					tagline: l,
					text: c,
					actions: u,
					VPButton: bc,
				}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	$P = { class: 'container' },
	IP = { class: 'content' },
	RP = { key: 0, class: 'hero-name' },
	DP = { key: 1, class: 'hero-tagline' },
	MP = { key: 2, class: 'hero-text' },
	NP = { key: 3, class: 'actions' }
function FP(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: 'vp-home-banner', style: xe(o.bannerStyle) },
			[
				g('div', { class: 'banner-mask', style: xe({ opacity: o.mask }) }, null, 4),
				g('div', $P, [
					g('div', IP, [
						o.name ? (h(), _('h2', RP, D(o.name), 1)) : A('', !0),
						o.tagline
							? (h(),
							  _('p', DP, [
									t[0] || (t[0] = g('span', { class: 'line' }, null, -1)),
									t[1] || (t[1] = Te()),
									g('span', null, D(o.tagline), 1),
							  ]))
							: A('', !0),
						o.text ? (h(), _('p', MP, D(o.text), 1)) : A('', !0),
						o.actions.length
							? (h(),
							  _('div', NP, [
									(h(!0),
									_(
										K,
										null,
										he(
											o.actions,
											(s) => (
												h(),
												_('div', { key: s.link, class: 'action' }, [
													O(
														o.VPButton,
														{
															tag: 'a',
															size: 'medium',
															theme: s.theme,
															text: s.text,
															href: s.link,
														},
														null,
														8,
														['theme', 'text', 'href']
													),
												])
											)
										),
										128
									)),
							  ]))
							: A('', !0),
					]),
				]),
			],
			4
		)
	)
}
const jP = M(VP, [
		['render', FP],
		['__scopeId', 'data-v-f84a6c62'],
		['__file', 'VPHomeBanner.vue'],
	]),
	HP = $({
		__name: 'VPHomeCustom',
		props: {
			type: {},
			full: { type: Boolean },
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const o = {
				props: e,
				VPHomeBox: tr,
				get Content() {
					return Bh
				},
			}
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	})
function zP(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPHomeBox,
			zt({ class: 'vp-home-custom' }, o.props),
			{ default: T(() => [O(o.Content, { class: 'vp-doc', 'vp-content': '' })]), _: 1 },
			16
		)
	)
}
const qP = M(HP, [
		['render', zP],
		['__file', 'VPHomeCustom.vue'],
	]),
	UP = $({
		__name: 'VPHomeFeature',
		props: { icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {}, target: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = /^[\w-]+:[\w-]+$/,
				r = E(() => (typeof n.icon != 'string' || Xh(n.icon) || It(n.icon) ? !1 : o.test(n.icon))),
				i = { props: n, ICONIFY_NAME: o, isIconify: r, VPIcon: vt, VPImage: Ns, VPLink: Ge }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	WP = { class: 'box' },
	GP = { key: 0, class: 'icon' },
	KP = { key: 2, class: 'icon' },
	YP = ['innerHTML'],
	QP = ['innerHTML'],
	JP = ['innerHTML'],
	XP = { key: 5, class: 'link-text' },
	ZP = { class: 'link-text-value' }
function eS(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPLink,
			{
				class: 'vp-home-feature',
				href: n.link,
				rel: n.rel,
				target: n.target,
				'no-icon': '',
				tag: n.link ? 'a' : 'div',
			},
			{
				default: T(() => [
					g('article', WP, [
						typeof n.icon == 'object' && n.icon.wrap
							? (h(),
							  _('div', GP, [
									O(
										o.VPImage,
										{
											image: n.icon,
											alt: n.icon.alt,
											height: n.icon.height || 48,
											width: n.icon.width || 48,
										},
										null,
										8,
										['image', 'alt', 'height', 'width']
									),
							  ]))
							: typeof n.icon == 'object'
							? (h(),
							  N(
									o.VPImage,
									{
										key: 1,
										image: n.icon,
										alt: n.icon.alt,
										height: n.icon.height || 48,
										width: n.icon.width || 48,
									},
									null,
									8,
									['image', 'alt', 'height', 'width']
							  ))
							: n.icon && o.isIconify
							? (h(), _('div', KP, [O(o.VPIcon, { name: n.icon }, null, 8, ['name'])]))
							: n.icon
							? (h(), _('div', { key: 3, class: 'icon', innerHTML: n.icon }, null, 8, YP))
							: A('', !0),
						g('h2', { class: 'title', innerHTML: n.title }, null, 8, QP),
						n.details
							? (h(), _('p', { key: 4, class: 'details', innerHTML: n.details }, null, 8, JP))
							: A('', !0),
						n.linkText
							? (h(),
							  _('div', XP, [
									g('p', ZP, [
										Te(D(n.linkText) + ' ', 1),
										t[0] ||
											(t[0] = g('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1)),
									]),
							  ]))
							: A('', !0),
					]),
				]),
				_: 1,
			},
			8,
			['href', 'rel', 'target', 'tag']
		)
	)
}
const tS = M(UP, [
		['render', eS],
		['__scopeId', 'data-v-cb0139bb'],
		['__file', 'VPHomeFeature.vue'],
	]),
	nS = $({
		__name: 'VPHomeFeatures',
		props: {
			type: {},
			title: {},
			description: {},
			features: {},
			full: { type: Boolean },
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() => {
					var s
					const i = (s = n.features) == null ? void 0 : s.length
					if (i) {
						if (i === 2) return 'grid-2'
						if (i === 3) return 'grid-3'
						if (i % 3 === 0) return 'grid-6'
						if (i > 3) return 'grid-4'
					} else return
				}),
				r = { props: n, grid: o, VPHomeBox: tr, VPHomeFeature: tS }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	oS = ['innerHTML'],
	rS = ['innerHTML'],
	iS = { class: 'items' }
function sS(e, t, n, o, r, i) {
	return n.features
		? (h(),
		  N(
				o.VPHomeBox,
				{
					key: 0,
					class: 'vp-home-features',
					type: n.type,
					'background-image': n.backgroundImage,
					'background-attachment': n.backgroundAttachment,
					full: n.full,
				},
				{
					default: T(() => [
						n.title
							? (h(), _('h2', { key: 0, class: 'title', innerHTML: n.title }, null, 8, oS))
							: A('', !0),
						n.description
							? (h(),
							  _('p', { key: 1, class: 'description', innerHTML: n.description }, null, 8, rS))
							: A('', !0),
						g('div', iS, [
							(h(!0),
							_(
								K,
								null,
								he(
									n.features,
									(s) => (
										h(),
										_(
											'div',
											{ key: s.title, class: J(['item', [o.grid]]) },
											[
												O(
													o.VPHomeFeature,
													{
														icon: s.icon,
														title: s.title,
														details: s.details,
														link: s.link,
														'link-text': s.linkText,
														rel: s.rel,
														target: s.target,
													},
													null,
													8,
													['icon', 'title', 'details', 'link', 'link-text', 'rel', 'target']
												),
											],
											2
										)
									)
								),
								128
							)),
						]),
					]),
					_: 1,
				},
				8,
				['type', 'background-image', 'background-attachment', 'full']
		  ))
		: A('', !0)
}
const aS = M(nS, [
		['render', sS],
		['__scopeId', 'data-v-b245debb'],
		['__file', 'VPHomeFeatures.vue'],
	]),
	lS = $({
		__name: 'VPHomeHero',
		props: {
			type: {},
			hero: {},
			full: { type: Boolean },
			background: {},
			tintPlate: {},
			filter: {},
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ isDark: o, frontmatter: r } = se(),
				i = E(() => {
					if (n.background === 'tint-plate') return null
					const d =
						(n.backgroundImage
							? typeof n.backgroundImage == 'string'
								? n.backgroundImage
								: n.backgroundImage[o.value ? 'dark' : 'light'] ?? n.backgroundImage.light
							: '') || n.background
					return d
						? {
								'background-image': `url(${It(d) ? d : et(d)})`,
								'background-attachment': n.backgroundAttachment || '',
								'--vp-hero-bg-filter': n.filter,
						  }
						: null
				}),
				s = E(() => n.hero ?? r.value.hero ?? {}),
				a = E(() => s.value.actions ?? []),
				l = R()
			B6(
				l,
				E(() => n.background === 'tint-plate'),
				E(() => n.tintPlate)
			)
			const c = {
				props: n,
				isDark: o,
				matter: r,
				heroBackground: i,
				hero: s,
				actions: a,
				canvas: l,
				VPButton: bc,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	}),
	cS = { key: 1, class: 'bg-filter' },
	uS = { ref: 'canvas', width: '32', height: '32' },
	dS = { class: 'container' },
	fS = { class: 'content' },
	pS = ['innerHTML'],
	hS = ['innerHTML'],
	mS = ['innerHTML'],
	vS = { key: 3, class: 'actions' },
	gS = { class: 'action' }
function _S(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(['vp-home-hero', { full: o.props.full, once: o.props.onlyOnce }]) },
			[
				o.heroBackground
					? (h(), _('div', { key: 0, class: 'home-hero-bg', style: xe(o.heroBackground) }, null, 4))
					: A('', !0),
				n.background === 'tint-plate'
					? (h(), _('div', cS, [g('canvas', uS, null, 512)]))
					: A('', !0),
				g('div', dS, [
					g('div', fS, [
						o.hero.name
							? (h(), _('h1', { key: 0, class: 'hero-name', innerHTML: o.hero.name }, null, 8, pS))
							: A('', !0),
						o.hero.tagline
							? (h(),
							  _('p', { key: 1, class: 'hero-tagline', innerHTML: o.hero.tagline }, null, 8, hS))
							: A('', !0),
						o.hero.text
							? (h(), _('p', { key: 2, class: 'hero-text', innerHTML: o.hero.text }, null, 8, mS))
							: A('', !0),
						o.actions.length
							? (h(),
							  _('div', vS, [
									g('div', gS, [
										(h(!0),
										_(
											K,
											null,
											he(
												o.actions,
												(s) => (
													h(),
													N(
														o.VPButton,
														{
															key: s.link,
															tag: 'a',
															size: 'medium',
															theme: s.theme,
															text: s.text,
															href: s.link,
															target: s.target,
															rel: s.rel,
														},
														null,
														8,
														['theme', 'text', 'href', 'target', 'rel']
													)
												)
											),
											128
										)),
									]),
							  ]))
							: A('', !0),
					]),
				]),
			],
			2
		)
	)
}
const Rv = M(lS, [
		['render', _S],
		['__scopeId', 'data-v-65e137a2'],
		['__file', 'VPHomeHero.vue'],
	]),
	bS = $({
		__name: 'VPHomeProfile',
		props: {
			type: {},
			name: {},
			description: {},
			avatar: {},
			circle: { type: Boolean },
			full: { type: Boolean },
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				r = E(() => o.value.profile),
				i = E(() => {
					var a, l, c, u, d
					return {
						name: n.name || ((a = r.value) == null ? void 0 : a.name),
						description: n.description || ((l = r.value) == null ? void 0 : l.description),
						avatar:
							n.avatar ||
							((c = r.value) == null ? void 0 : c.avatar) ||
							((u = r.value) == null ? void 0 : u.url),
						circle: n.circle || ((d = r.value) == null ? void 0 : d.circle),
					}
				}),
				s = { props: n, theme: o, rawProfile: r, profile: i, VPHomeBox: tr, VPImage: Ns }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	yS = ['innerHTML'],
	wS = ['innerHTML']
function kS(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPHomeBox,
			{
				class: 'vp-home-profile',
				type: n.type,
				'background-image': n.backgroundImage,
				'background-attachment': n.backgroundAttachment,
				full: n.full,
			},
			{
				default: T(() => [
					o.profile.avatar
						? (h(),
						  N(
								o.VPImage,
								{ key: 0, image: o.profile.avatar, class: J({ circle: o.profile.circle }) },
								null,
								8,
								['image', 'class']
						  ))
						: A('', !0),
					o.profile.name
						? (h(), _('h3', { key: 1, innerHTML: o.profile.name }, null, 8, yS))
						: A('', !0),
					o.profile.description
						? (h(), _('p', { key: 2, innerHTML: o.profile.description }, null, 8, wS))
						: A('', !0),
				]),
				_: 1,
			},
			8,
			['type', 'background-image', 'background-attachment', 'full']
		)
	)
}
const ES = M(bS, [
		['render', kS],
		['__scopeId', 'data-v-daa013e2'],
		['__file', 'VPHomeProfile.vue'],
	]),
	xS = $({
		__name: 'VPHomeTextImage',
		props: {
			type: {},
			image: {},
			width: {},
			title: {},
			description: {},
			list: {},
			full: { type: Boolean },
			backgroundImage: {},
			backgroundAttachment: {},
			onlyOnce: { type: Boolean },
		},
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() => {
					const i = n.width
					return typeof i == 'number' ? `${i}px` : i
				}),
				r = { props: n, maxWidth: o, VPHomeBox: tr, VPImage: Ns }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	PS = { class: 'content-image' },
	SS = { class: 'content-text vp-doc' },
	CS = { key: 0, class: 'title' },
	TS = ['innerHTML'],
	AS = { key: 2, class: 'list' },
	LS = ['innerHTML'],
	BS = ['innerHTML'],
	OS = ['innerHTML']
function VS(e, t, n, o, r, i) {
	return (
		h(),
		N(
			o.VPHomeBox,
			{
				class: 'vp-home-text-image',
				type: n.type,
				'background-image': n.backgroundImage,
				'background-attachment': n.backgroundAttachment,
				full: n.full,
				'container-class': { reverse: n.type === 'text-image' },
			},
			{
				default: T(() => [
					g('div', PS, [
						O(o.VPImage, { image: n.image, style: xe({ maxWidth: o.maxWidth }) }, null, 8, [
							'image',
							'style',
						]),
					]),
					g('div', SS, [
						g('section', null, [
							n.title ? (h(), _('h2', CS, D(n.title), 1)) : A('', !0),
							n.description
								? (h(),
								  _('p', { key: 1, class: 'description', innerHTML: n.description }, null, 8, TS))
								: A('', !0),
							n.list && n.list.length
								? (h(),
								  _('ul', AS, [
										(h(!0),
										_(
											K,
											null,
											he(
												n.list,
												(s, a) => (
													h(),
													_('li', { key: a }, [
														typeof s == 'object'
															? (h(),
															  _(
																	K,
																	{ key: 0 },
																	[
																		s.title
																			? (h(), _('h3', { key: 0, innerHTML: s.title }, null, 8, LS))
																			: A('', !0),
																		s.description
																			? (h(),
																			  _('p', { key: 1, innerHTML: s.description }, null, 8, BS))
																			: A('', !0),
																	],
																	64
															  ))
															: (h(), _('p', { key: 1, innerHTML: s }, null, 8, OS)),
													])
												)
											),
											128
										)),
								  ]))
								: A('', !0),
						]),
					]),
				]),
				_: 1,
			},
			8,
			['type', 'background-image', 'background-attachment', 'full', 'container-class']
		)
	)
}
const gf = M(xS, [
		['render', VS],
		['__scopeId', 'data-v-999b9823'],
		['__file', 'VPHomeTextImage.vue'],
	]),
	$S = $({
		__name: 'VPHome',
		setup(e, { expose: t }) {
			t()
			const n = vp()
			function o() {
				return ce(
					Iv,
					{ homeBlog: !0 },
					{
						'blog-top': () => {
							var f
							return (f = n['blog-top']) == null ? void 0 : f.call(n)
						},
						'blog-bottom': () => {
							var f
							return (f = n['blog-bottom']) == null ? void 0 : f.call(n)
						},
						'blog-post-list-before': () => {
							var f
							return (f = n['blog-post-list-before']) == null ? void 0 : f.call(n)
						},
						'blog-post-list-after': () => {
							var f
							return (f = n['blog-post-list-after']) == null ? void 0 : f.call(n)
						},
						'blog-post-list-pagination-after': () => {
							var f
							return (f = n['blog-post-list-pagination-after']) == null ? void 0 : f.call(n)
						},
					}
				)
			}
			const r = {
					banner: jP,
					hero: Rv,
					features: aS,
					'text-image': gf,
					'image-text': gf,
					profile: ES,
					blog: o,
					custom: qP,
				},
				i = {
					name: 'Theme Plume',
					tagline: 'VuePress Next Theme',
					text: '一个简约的，功能丰富的 vuepress 文档&博客 主题',
				},
				{ frontmatter: s } = se(),
				a = E(() => {
					const f = s.value.config
					return f && f.length
						? f
						: s.value.banner
						? [
								{
									type: 'banner',
									banner: s.value.banner,
									bannerMask: s.value.bannerMask,
									hero: s.value.hero ?? i,
								},
						  ]
						: [{ type: 'hero', full: !0, background: 'tint-plate', hero: s.value.hero ?? i }]
				}),
				l = E(() => a.value.length === 1)
			function c(f) {
				return r[f] ?? Re(f)
			}
			let u = null
			ve(
				() => l.value,
				(f) =>
					ht(() => {
						typeof document < 'u' &&
							(u ?? (u = document.querySelector('.vp-layout')),
							u == null || u.classList.toggle('footer-no-border', f))
					}),
				{ immediate: !0 }
			),
				gt(() => {
					u == null || u.classList.remove('footer-no-border')
				})
			const d = {
				slots: n,
				VPHomeBlog: o,
				components: r,
				DEFAULT_HERO: i,
				matter: s,
				config: a,
				onlyOnce: l,
				resolveComponentName: c,
				get el() {
					return u
				},
				set el(f) {
					u = f
				},
			}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	IS = { class: 'vp-home' }
function RS(e, t, n, o, r, i) {
	return (
		h(),
		_('div', IS, [
			(h(!0),
			_(
				K,
				null,
				he(
					o.config,
					(s, a) => (
						h(),
						_(
							'div',
							{
								key: s.type + a,
								class: J({ layout: a > 0 && s.type !== 'features' && s.type !== 'custom' }),
							},
							[
								(h(),
								N(
									Ht(o.resolveComponentName(s.type)),
									zt({ ref_for: !0 }, s, { 'only-once': o.onlyOnce }),
									null,
									16,
									['only-once']
								)),
							],
							2
						)
					)
				),
				128
			)),
		])
	)
}
const DS = M($S, [
		['render', RS],
		['__scopeId', 'data-v-364b2681'],
		['__file', 'VPHome.vue'],
	]),
	MS = $({
		__name: 'VPDocOutlineItem',
		props: { headers: {}, root: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			function n({ target: r }) {
				const i = `#${r.href.split('#')[1]}`,
					s = document.querySelector(decodeURIComponent(i))
				s == null || s.focus({ preventScroll: !0 })
			}
			const o = { handleClick: n }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	NS = ['href']
function FS(e, t, n, o, r, i) {
	const s = Re('VPDocOutlineItem', !0)
	return (
		h(),
		_(
			'ul',
			{ class: J(n.root ? 'root' : 'nested') },
			[
				(h(!0),
				_(
					K,
					null,
					he(
						n.headers,
						({ children: a, link: l, title: c }) => (
							h(),
							_('li', { key: l }, [
								g('a', { class: 'outline-link', href: l, onClick: o.handleClick }, D(c), 9, NS),
								a != null && a.length
									? (h(), N(s, { key: 0, headers: a }, null, 8, ['headers']))
									: A('', !0),
							])
						)
					),
					128
				)),
			],
			2
		)
	)
}
const Dv = M(MS, [
		['render', FS],
		['__scopeId', 'data-v-d81fcbdb'],
		['__file', 'VPDocOutlineItem.vue'],
	]),
	jS = $({
		__name: 'VPDocAsideOutline',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = ac(),
				r = E(() => o.value.length > 0),
				i = R(),
				s = R()
			F6(i, s)
			function a() {
				window.print()
			}
			const l = {
				theme: n,
				headers: o,
				hasOutline: r,
				container: i,
				marker: s,
				handlePrint: a,
				VPDocOutlineItem: Dv,
			}
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	HS = { class: 'content' },
	zS = { ref: 'marker', class: 'outline-marker' },
	qS = { id: 'doc-outline-aria-label', 'aria-level': '2', class: 'outline-title', role: 'heading' }
function US(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'nav',
			{
				ref: 'container',
				'aria-labelledby': 'doc-outline-aria-label',
				class: J(['vp-doc-aside-outline', { 'has-outline': o.hasOutline }]),
				role: 'navigation',
			},
			[
				g('div', HS, [
					g('div', zS, null, 512),
					g('div', qS, [
						g('span', null, D(o.theme.outlineLabel || 'On this page'), 1),
						g('span', { class: 'vpi-print icon', onClick: o.handlePrint }),
					]),
					O(o.VPDocOutlineItem, { headers: o.headers, root: !0 }, null, 8, ['headers']),
				]),
			],
			2
		)
	)
}
const WS = M(jS, [
		['render', US],
		['__scopeId', 'data-v-c71a8a7e'],
		['__file', 'VPDocAsideOutline.vue'],
	]),
	GS = $({
		__name: 'VPDocAside',
		setup(e, { expose: t }) {
			t()
			const n = { VPDocAsideOutline: WS }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	KS = { class: 'vp-doc-aside' }
function YS(e, t, n, o, r, i) {
	return (
		h(),
		_('div', KS, [
			C(e.$slots, 'aside-top', {}, void 0, !0),
			C(e.$slots, 'aside-outline-before', {}, void 0, !0),
			O(o.VPDocAsideOutline),
			C(e.$slots, 'aside-outline-after', {}, void 0, !0),
			t[0] || (t[0] = g('div', { class: 'spacer' }, null, -1)),
			C(e.$slots, 'aside-bottom', {}, void 0, !0),
		])
	)
}
const QS = M(GS, [
		['render', YS],
		['__scopeId', 'data-v-8e9ccc00'],
		['__file', 'VPDocAside.vue'],
	]),
	JS = $({
		__name: 'VPDocBreadcrumbs',
		setup(e, { expose: t }) {
			t()
			const { page: n, blog: o } = se(),
				{ isBlogPost: r } = Co(),
				{ home: i, blog: s, categories: a } = So(),
				l = Gm(),
				c = E(() =>
					r.value && n.value.categoryList ? n.value.categoryList.length > 0 : l.value.length > 0
				),
				u = E(() => {
					if (!c.value) return []
					const p = [{ text: i.value.text, link: i.value.link }]
					if (r.value) {
						;(o.value.postList ?? !0) && p.push({ text: s.value.text, link: s.value.link })
						const m = n.value.categoryList ?? []
						for (const v of m)
							p.push({ text: v.name, link: a.value ? `${a.value.link}?id=${v.id}` : void 0 })
					} else l.value.length > 0 && p.push(...(d(l.value) || []))
					return p.push({ text: n.value.title, link: n.value.path, current: !0 }), p
				})
			function d(p, m = []) {
				for (const v of p) {
					if ((v.link ? Dn(v.link) : void 0) === n.value.path) return m
					if (v.items) {
						const w = d(v.items, [...m, { text: v.text, link: v.link }])
						if (w) return w
					}
				}
				return null
			}
			const f = {
				page: n,
				blog: o,
				isBlogPost: r,
				home: i,
				blogLink: s,
				categories: a,
				sidebar: l,
				hasBreadcrumb: c,
				breadcrumbList: u,
				resolveSidebar: d,
				VPLink: Ge,
			}
			return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
		},
	}),
	XS = { key: 0, class: 'vp-breadcrumb' },
	ZS = { vocab: 'https://schema.org/', typeof: 'BreadcrumbList' },
	eC = { key: 0, class: 'vpi-chevron-right' },
	tC = ['content'],
	nC = ['content']
function oC(e, t, n, o, r, i) {
	return o.hasBreadcrumb
		? (h(),
		  _('nav', XS, [
				g('ol', ZS, [
					(h(!0),
					_(
						K,
						null,
						he(
							o.breadcrumbList,
							({ text: s, link: a, current: l }, c) => (
								h(),
								_('li', { key: a, property: 'itemListElement', typeof: 'ListItem' }, [
									O(
										o.VPLink,
										{
											href: a,
											class: J(['breadcrumb', { current: l }]),
											property: 'item',
											typeof: 'WebPage',
											text: s,
										},
										null,
										8,
										['href', 'class', 'text']
									),
									c !== o.breadcrumbList.length - 1 ? (h(), _('span', eC)) : A('', !0),
									g('meta', { property: 'name', content: s }, null, 8, tC),
									g('meta', { property: 'position', content: `${c + 1}` }, null, 8, nC),
								])
							)
						),
						128
					)),
				]),
		  ]))
		: A('', !0)
}
const rC = M(JS, [
		['render', oC],
		['__scopeId', 'data-v-6b88aebb'],
		['__file', 'VPDocBreadcrumbs.vue'],
	]),
	iC = $({
		__name: 'VPDocHeader',
		props: { title: {}, anchor: {} },
		setup(e, { expose: t }) {
			t()
			const { theme: n, frontmatter: o } = se(),
				r = E(() => {
					const s = o.value.outline ?? n.value.outline
					return `h${Array.isArray(s) ? s[0] : s === 'deep' ? 2 : s || 2}`
				}),
				i = { theme: n, frontmatter: o, header: r }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	sC = ['href']
function aC(e, t, n, o, r, i) {
	return (
		h(),
		N(
			Ht(o.header),
			{ id: n.anchor, tabindex: '-1', class: 'vp-doc-header' },
			{
				default: T(() => [
					g(
						'a',
						{ href: `#${n.anchor}`, class: 'header-anchor' },
						[g('span', null, [C(e.$slots, 'default', {}, () => [Te(D(n.title), 1)], !0)])],
						8,
						sC
					),
				]),
				_: 3,
			},
			8,
			['id']
		)
	)
}
const yc = M(iC, [
		['render', aC],
		['__scopeId', 'data-v-d9c83a4c'],
		['__file', 'VPDocHeader.vue'],
	]),
	lC = $({
		__name: 'VPDocChangelog',
		setup(e, { expose: t }) {
			t()
			const { theme: n, frontmatter: o, page: r } = se(),
				i = Yt(),
				s = oo(),
				{ datetime: a, lastUpdatedText: l } = iv(),
				c = E(() => {
					var m
					const f = ((m = r.value.git) == null ? void 0 : m.changelog) || [],
						p = new Intl.DateTimeFormat(s.value, { dateStyle: 'short' })
					return f.map(({ date: v, ...b }) => ({ datetime: p.format(v), ...b }))
				}),
				u = E(() => c.value.length && (o.value.changelog ?? !!i.value.changelog)),
				d = {
					theme: n,
					frontmatter: o,
					page: r,
					themeData: i,
					lang: s,
					datetime: a,
					lastUpdatedText: l,
					list: c,
					hasChangelog: u,
					VPDocHeader: yc,
					VPLink: Ge,
				}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	cC = { key: 0, class: 'vp-doc-changelog' },
	uC = { class: 'hint-container details' },
	dC = { class: 'changelog-header' },
	fC = { class: 'changelog-button' },
	pC = { class: 'changelog-list' },
	hC = { key: 0, class: 'changelog release-tag' },
	mC = { class: 'datetime' },
	vC = { key: 1, class: 'changelog commit' },
	gC = ['innerHTML'],
	_C = { class: 'datetime' }
function bC(e, t, n, o, r, i) {
	return o.hasChangelog
		? (h(),
		  _('div', cC, [
				O(
					o.VPDocHeader,
					{ anchor: 'doc-changelog' },
					{ default: T(() => [Te(D(o.theme.changelogText || 'Changelog'), 1)]), _: 1 }
				),
				g('details', uC, [
					g('summary', dC, [
						g('span', null, [
							t[0] || (t[0] = g('span', { class: 'vpi-changelog' }, null, -1)),
							g('span', null, D(o.lastUpdatedText) + ':', 1),
							t[1] || (t[1] = Te()),
							g('span', null, D(o.datetime), 1),
						]),
						g('span', fC, [
							t[2] || (t[2] = g('span', { class: 'vpi-menu' }, null, -1)),
							g('span', null, D(o.theme.changelogButtonText || 'View All Changelog'), 1),
						]),
					]),
					g('ul', pC, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.list,
								(s) => (
									h(),
									_(
										K,
										{ key: s.hash },
										[
											s.tag
												? (h(),
												  _('li', hC, [
														g('div', null, [
															O(
																o.VPLink,
																{ href: s.tagUrl, 'no-icon': '', class: 'release-tag' },
																{ default: T(() => [g('code', null, D(s.tag), 1)]), _: 2 },
																1032,
																['href']
															),
															g('span', mC, D(o.theme.changelogOnText) + ' ' + D(s.datetime), 1),
														]),
												  ]))
												: (h(),
												  _('li', vC, [
														g('div', null, [
															O(
																o.VPLink,
																{ href: s.commitUrl, 'no-icon': '', class: 'hash' },
																{
																	default: T(() => [g('code', null, D(s.hash.slice(0, 5)), 1)]),
																	_: 2,
																},
																1032,
																['href']
															),
															t[3] || (t[3] = g('span', { class: 'divider' }, '-', -1)),
														]),
														g('div', null, [
															g('p', { class: 'message', innerHTML: s.message }, null, 8, gC),
															g('span', _C, D(o.theme.changelogOnText) + ' ' + D(s.datetime), 1),
														]),
												  ])),
										],
										64
									)
								)
							),
							128
						)),
					]),
				]),
		  ]))
		: A('', !0)
}
const yC = M(lC, [
		['render', bC],
		['__scopeId', 'data-v-5a83b74b'],
		['__file', 'VPDocChangelog.vue'],
	]),
	wC = $({
		__name: 'VPDocContributor',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				{ contributors: o, mode: r } = rc(),
				i = E(() => !!o.value.length && r.value === 'block'),
				s = { theme: n, contributors: o, mode: r, hasContributors: i, VPDocHeader: yc, VPLink: Ge }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	kC = { key: 0, class: 'vp-doc-contributor' },
	EC = { class: 'contributor-list' },
	xC = ['src', 'alt']
function PC(e, t, n, o, r, i) {
	return o.hasContributors
		? (h(),
		  _('div', kC, [
				O(
					o.VPDocHeader,
					{ anchor: 'doc-contributors' },
					{ default: T(() => [Te(D(o.theme.contributorsText || 'Contributors'), 1)]), _: 1 }
				),
				g('ul', EC, [
					(h(!0),
					_(
						K,
						null,
						he(
							o.contributors,
							(s) => (
								h(),
								_('li', { key: s.name + s.email, class: 'contributor' }, [
									O(
										o.VPLink,
										{ href: s.url, 'no-icon': '' },
										{
											default: T(() => [
												s.avatar
													? (h(), _('img', { key: 0, src: s.avatar, alt: s.name }, null, 8, xC))
													: A('', !0),
												g('span', null, D(s.name), 1),
											]),
											_: 2,
										},
										1032,
										['href']
									),
								])
							)
						),
						128
					)),
				]),
		  ]))
		: A('', !0)
}
const SC = M(wC, [
		['render', PC],
		['__scopeId', 'data-v-515e1ad3'],
		['__file', 'VPDocContributor.vue'],
	]),
	CC = $({
		__name: 'VPCopyright',
		props: { author: {}, creation: {}, source: {}, license: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				{ author: r, creation: i, creationText: s, license: a, sourceUrl: l } = P6(E(() => n)),
				c = {
					props: n,
					theme: o,
					author: r,
					creation: i,
					creationText: s,
					license: a,
					sourceUrl: l,
					VPLink: Ge,
				}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	}),
	TC = { class: 'hint-container tip copyright-container' },
	AC = { key: 0 },
	LC = { key: 1 },
	BC = { key: 2 }
function OC(e, t, n, o, r, i) {
	return (
		h(),
		_('div', TC, [
			o.author
				? (h(),
				  _('p', AC, [
						g('span', null, D(o.theme.copyrightAuthorText || 'Copyright Ownership:'), 1),
						O(
							o.VPLink,
							{ href: o.author.url, 'no-icon': '' },
							{ default: T(() => [Te(D(o.author.name), 1)]), _: 1 },
							8,
							['href']
						),
				  ]))
				: A('', !0),
			o.sourceUrl
				? (h(),
				  _('p', LC, [
						g('span', null, D(o.creationText), 1),
						O(
							o.VPLink,
							{
								href: o.sourceUrl,
								'no-icon': o.creation === 'original',
								'data-allow-mismatch': '',
							},
							{ default: T(() => [Te(D(o.sourceUrl), 1)]), _: 1 },
							8,
							['href', 'no-icon']
						),
				  ]))
				: A('', !0),
			o.license
				? (h(),
				  _('p', BC, [
						g('span', null, D(o.theme.copyrightLicenseText || 'License under'), 1),
						O(
							o.VPLink,
							{ href: o.license.url, 'no-icon': '' },
							{ default: T(() => [Te(D(o.license.name), 1)]), _: 1 },
							8,
							['href']
						),
						o.license.icons
							? (h(!0),
							  _(
									K,
									{ key: 0 },
									he(
										o.license.icons,
										(s) => (h(), _('span', { key: s, class: J(`vpi-license-${s}`) }, null, 2))
									),
									128
							  ))
							: A('', !0),
				  ]))
				: A('', !0),
		])
	)
}
const VC = M(CC, [
		['render', OC],
		['__scopeId', 'data-v-b63fc4cc'],
		['__file', 'VPCopyright.vue'],
	]),
	$C = $({
		__name: 'VPDocCopyright',
		setup(e, { expose: t }) {
			t()
			const { theme: n, frontmatter: o } = se(),
				r = E(() => {
					if ((o.value.copyright ?? n.value.copyright ?? !1) === !1) return null
					const s = Kt(o.value.copyright)
						? o.value.copyright
						: { license: o.value.copyright === !0 ? '' : o.value.copyright }
					if (!n.value.copyright) return s
					const a = Kt(n.value.copyright)
						? n.value.copyright
						: { license: n.value.copyright === !0 ? void 0 : n.value.copyright }
					return s.license ?? (s.license = a.license), s
				}),
				i = { theme: n, frontmatter: o, copyright: r, VPCopyright: VC, VPDocHeader: yc }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	IC = { key: 0, class: 'vp-doc-copyright' }
function RC(e, t, n, o, r, i) {
	return o.copyright
		? (h(),
		  _('div', IC, [
				O(
					o.VPDocHeader,
					{ anchor: 'doc-copyright' },
					{ default: T(() => [Te(D(o.theme.copyrightText || 'Copyright'), 1)]), _: 1 }
				),
				O(o.VPCopyright, Ef(Dl(o.copyright)), null, 16),
		  ]))
		: A('', !0)
}
const DC = M($C, [
		['render', RC],
		['__file', 'VPDocCopyright.vue'],
	]),
	MC = $({
		__name: 'VPDocFooter',
		setup(e, { expose: t }) {
			t()
			const { theme: n, frontmatter: o, page: r } = se(),
				i = Yt(),
				s = nv(),
				{ datetime: a, isoDatetime: l, lastUpdatedText: c } = iv(),
				{ contributors: u, mode: d } = rc(),
				{ prev: f, next: p } = z6(),
				m = E(() => {
					var S, I
					return (
						((I = (S = r.value.git) == null ? void 0 : S.changelog) == null ? void 0 : I.length) &&
						(o.value.changelog ?? !!i.value.changelog)
					)
				}),
				v = E(() => !!(i.value.editLink && o.value.editLink !== !1 && s.value)),
				b = E(
					() => !!(i.value.lastUpdated !== !1 && o.value.lastUpdated !== !1 && a.value) && !m.value
				),
				w = E(() => !!u.value.length && d.value === 'inline'),
				P = E(() => {
					var S, I
					return (
						v.value ||
						b.value ||
						w.value ||
						((S = f.value) == null ? void 0 : S.link) ||
						((I = p.value) == null ? void 0 : I.link)
					)
				}),
				y = {
					theme: n,
					frontmatter: o,
					page: r,
					themeData: i,
					editLink: s,
					lastUpdated: a,
					isoDatetime: l,
					lastUpdatedText: c,
					contributors: u,
					mode: d,
					prev: f,
					next: p,
					hasChangelog: m,
					hasEditLink: v,
					hasLastUpdated: b,
					hasContributors: w,
					showFooter: P,
					VPLink: Ge,
				}
			return Object.defineProperty(y, '__isScriptSetup', { enumerable: !1, value: !0 }), y
		},
	}),
	NC = { key: 0, class: 'vp-doc-footer' },
	FC = { key: 0, class: 'edit-info' },
	jC = { key: 0, class: 'edit-link' },
	HC = { key: 1, class: 'last-updated', 'aria-label': 'Last updated' },
	zC = { class: 'last-updated-text' },
	qC = ['datetime'],
	UC = { class: 'contributors-label' },
	WC = { class: 'contributors-info' },
	GC = { class: 'contributor' },
	KC = { key: 2, class: 'prev-next' },
	YC = { class: 'pager' },
	QC = ['innerHTML'],
	JC = ['innerHTML'],
	XC = { class: 'pager' },
	ZC = ['innerHTML'],
	eT = ['innerHTML']
function tT(e, t, n, o, r, i) {
	var s, a, l, c, u
	return o.showFooter
		? (h(),
		  _('footer', NC, [
				C(e.$slots, 'doc-footer-before', {}, void 0, !0),
				o.hasEditLink || o.hasLastUpdated
					? (h(),
					  _('div', FC, [
							o.hasEditLink && o.editLink
								? (h(),
								  _('div', jC, [
										O(
											o.VPLink,
											{ class: 'edit-link-button', href: o.editLink.link, 'no-icon': '' },
											{
												default: T(() => [
													t[0] ||
														(t[0] = g(
															'span',
															{ class: 'vpi-square-pen edit-link-icon', 'aria-label': 'edit icon' },
															null,
															-1
														)),
													Te(' ' + D(o.editLink.text), 1),
												]),
												_: 1,
											},
											8,
											['href']
										),
								  ]))
								: A('', !0),
							o.hasLastUpdated
								? (h(),
								  _('div', HC, [
										g('p', zC, [
											Te(D(o.lastUpdatedText) + ': ', 1),
											g(
												'time',
												{ datetime: o.isoDatetime, class: 'last-updated-time' },
												D(o.lastUpdated),
												9,
												qC
											),
										]),
								  ]))
								: A('', !0),
					  ]))
					: A('', !0),
				o.hasContributors && (s = o.contributors) != null && s.length
					? (h(),
					  _(
							'div',
							{
								key: 1,
								class: J(['contributors', { right: o.hasLastUpdated }]),
								'aria-label': 'Contributors',
							},
							[
								g('span', UC, D(o.theme.contributorsText || 'Contributors') + ': ', 1),
								g('span', WC, [
									(h(!0),
									_(
										K,
										null,
										he(
											o.contributors,
											(d, f) => (
												h(),
												_(
													K,
													{ key: d.name + f },
													[
														g('span', GC, D(d.name), 1),
														f !== o.contributors.length - 1
															? (h(), _(K, { key: 0 }, [Te(', ')], 64))
															: A('', !0),
													],
													64
												)
											)
										),
										128
									)),
								]),
							],
							2
					  ))
					: A('', !0),
				((a = o.prev) != null && a.link) || ((l = o.next) != null && l.link)
					? (h(),
					  _('nav', KC, [
							g('div', YC, [
								(c = o.prev) != null && c.link
									? (h(),
									  N(
											o.VPLink,
											{ key: 0, class: 'pager-link prev', href: o.prev.link },
											{
												default: T(() => [
													g(
														'span',
														{ class: 'desc', innerHTML: o.theme.prevPageLabel || 'Previous page' },
														null,
														8,
														QC
													),
													g('span', { class: 'title', innerHTML: o.prev.text }, null, 8, JC),
												]),
												_: 1,
											},
											8,
											['href']
									  ))
									: A('', !0),
							]),
							g('div', XC, [
								(u = o.next) != null && u.link
									? (h(),
									  N(
											o.VPLink,
											{ key: 0, class: 'pager-link next', href: o.next.link },
											{
												default: T(() => [
													g(
														'span',
														{ class: 'desc', innerHTML: o.theme.nextPageLabel || 'Next page' },
														null,
														8,
														ZC
													),
													g('span', { class: 'title', innerHTML: o.next.text }, null, 8, eT),
												]),
												_: 1,
											},
											8,
											['href']
									  ))
									: A('', !0),
							]),
					  ]))
					: A('', !0),
		  ]))
		: A('', !0)
}
const nT = M(MC, [
	['render', tT],
	['__scopeId', 'data-v-e19be2a4'],
	['__file', 'VPDocFooter.vue'],
])
var _f = { '/': { word: '$word字', less1Minute: '小于1分钟', time: '约$time分钟' } }
const oT = () => {
		const e = ql()
		return E(() => e.value.readingTime ?? null)
	},
	rT = (e, t) => {
		const { minutes: n, words: o } = e,
			{ less1Minute: r, word: i, time: s } = t
		return {
			time: n < 1 ? r : s.replace('$time', Math.round(n).toString()),
			words: i.replace('$word', o.toString()),
		}
	},
	bf = { words: '', time: '' },
	gl = typeof _f > 'u' ? null : _f,
	iT = () => (gl ? Yh(gl) : E(() => null)),
	sT = () => {
		if (typeof gl > 'u') return E(() => bf)
		const e = oT(),
			t = iT()
		return E(() => (e.value && t.value ? rT(e.value, t.value) : bf))
	},
	aT = $({
		__name: 'VPDocMeta',
		setup(e, { expose: t }) {
			t()
			const { page: n, frontmatter: o, theme: r, blog: i } = se(),
				s = oc(),
				a = sT(),
				{ tags: l } = So(),
				{ isBlogPost: c } = Co(),
				u = E(() => {
					const v = r.value.createTime ?? !0
					return !v || (v === 'only-blog' && !c.value)
						? ''
						: o.value.createTime
						? o.value.createTime.split(/\s|T/)[0].replace(/\//g, '-')
						: ''
				}),
				d = E(() => {
					const v = i.value.tagsTheme ?? 'colored'
					return o.value.tags
						? o.value.tags
								.slice(0, 4)
								.map((b) => ({
									name: b,
									className: s.value[b] ? `vp-tag-${s.value[b]}` : `tag-${v}`,
								}))
						: []
				}),
				f = E(() =>
					o.value.badge
						? typeof o.value.badge == 'string'
							? { text: o.value.badge }
							: o.value.badge
						: !1
				),
				p = E(() => a.value.time || d.value.length || u.value),
				m = {
					page: n,
					matter: o,
					theme: r,
					blog: i,
					colors: s,
					readingTime: a,
					tagsLink: l,
					isBlogPost: c,
					createTime: u,
					tags: d,
					badge: f,
					hasMeta: p,
					VPBadge: cl,
					VPLink: Ge,
				}
			return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
		},
	}),
	lT = { key: 0, class: 'vp-doc-meta' },
	cT = { key: 0, class: 'reading-time' },
	uT = { key: 1 },
	dT = { key: 2, class: 'create-time' }
function fT(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				g(
					'h1',
					{ class: J(['vp-doc-title page-title', { padding: !o.hasMeta }]) },
					[
						Te(D(o.page.title) + ' ', 1),
						o.badge
							? (h(),
							  N(o.VPBadge, { key: 0, type: o.badge.type || 'tip', text: o.badge.text }, null, 8, [
									'type',
									'text',
							  ]))
							: A('', !0),
					],
					2
				),
				o.hasMeta
					? (h(),
					  _('div', lT, [
							o.readingTime.time && o.matter.readingTime !== !1
								? (h(),
								  _('p', cT, [
										t[0] || (t[0] = g('span', { class: 'vpi-books icon' }, null, -1)),
										g('span', null, D(o.readingTime.words), 1),
										g('span', null, D(o.readingTime.time), 1),
								  ]))
								: A('', !0),
							o.tags.length > 0
								? (h(),
								  _('p', uT, [
										t[1] || (t[1] = g('span', { class: 'vpi-tag icon' }, null, -1)),
										(h(!0),
										_(
											K,
											null,
											he(o.tags, (s) => {
												var a
												return (
													h(),
													N(
														o.VPLink,
														{
															key: s.name,
															class: J(['tag', s.className]),
															href:
																(a = o.tagsLink) != null && a.link && o.isBlogPost
																	? `${o.tagsLink.link}?tag=${s.name}`
																	: void 0,
														},
														{ default: T(() => [Te(D(s.name), 1)]), _: 2 },
														1032,
														['class', 'href']
													)
												)
											}),
											128
										)),
								  ]))
								: A('', !0),
							o.createTime
								? (h(),
								  _('p', dT, [
										t[2] || (t[2] = g('span', { class: 'vpi-clock icon' }, null, -1)),
										g('span', null, D(o.createTime), 1),
								  ]))
								: A('', !0),
					  ]))
					: A('', !0),
			],
			64
		)
	)
}
const pT = M(aT, [
		['render', fT],
		['__scopeId', 'data-v-9a3f253a'],
		['__file', 'VPDocMeta.vue'],
	]),
	hT = $({
		__name: 'VPEncryptForm',
		props: { global: { type: Boolean }, info: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				{ compareGlobal: r, comparePage: i } = s6(),
				s = R(''),
				a = R(0),
				l = R(!1)
			async function c() {
				if (l.value) return
				const d = n.global ? r : i
				l.value = !0
				const f = await d(s.value)
				;(l.value = !1), f ? ((a.value = 0), (s.value = '')) : (a.value = 1)
			}
			const u = {
				props: n,
				theme: o,
				compareGlobal: r,
				comparePage: i,
				password: s,
				errorCode: a,
				unlocking: l,
				onSubmit: c,
			}
			return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
		},
	}),
	mT = { class: 'vp-encrypt-form' },
	vT = ['innerHTML'],
	gT = { class: 'encrypt-input-wrapper' },
	_T = ['placeholder'],
	bT = { key: 0 },
	yT = { key: 1, class: 'vpi-loading' }
function wT(e, t, n, o, r, i) {
	return (
		h(),
		_('div', mT, [
			g(
				'p',
				{ class: 'encrypt-text', innerHTML: n.info ?? 'Only Password can access this site' },
				null,
				8,
				vT
			),
			g('p', gT, [
				t[2] || (t[2] = g('span', { class: 'vpi-lock icon-lock' }, null, -1)),
				Ft(
					g(
						'input',
						{
							'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.password = s)),
							class: J(['encrypt-input', { error: o.errorCode === 1 }]),
							type: 'password',
							placeholder: o.theme.encryptPlaceholder ?? 'Enter Password',
							onKeyup: Nl(o.onSubmit, ['enter']),
							onInput: t[1] || (t[1] = (s) => o.password && (o.errorCode = 0)),
						},
						null,
						42,
						_T
					),
					[[Da, o.password]]
				),
			]),
			g(
				'button',
				{ class: J(['encrypt-button', { unlocking: o.unlocking }]), onClick: o.onSubmit },
				[
					o.unlocking
						? (h(), _('span', yT))
						: (h(), _('span', bT, D(o.theme.encryptButtonText ?? 'Confirm'), 1)),
				],
				2
			),
		])
	)
}
const Mv = M(hT, [
		['render', wT],
		['__scopeId', 'data-v-902dc7c3'],
		['__file', 'VPEncryptForm.vue'],
	]),
	kT = $({
		__name: 'VPEncryptPage',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				o = { theme: n, VPEncryptForm: Mv }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	ET = { class: 'vp-page-encrypt' }
function xT(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		N(s, null, {
			default: T(() => [
				g('div', ET, [
					t[0] ||
						(t[0] = g(
							'div',
							{ class: 'logo' },
							[g('span', { class: 'vpi-lock icon-lock-head' })],
							-1
						)),
					O(o.VPEncryptForm, { info: o.theme.encryptPageText }, null, 8, ['info']),
				]),
			]),
			_: 1,
		})
	)
}
const PT = M(kT, [
		['render', xT],
		['__scopeId', 'data-v-930fe5d2'],
		['__file', 'VPEncryptPage.vue'],
	]),
	ST = $({
		__name: 'VPDoc',
		setup(e, { expose: t }) {
			t()
			const { page: n, theme: o, frontmatter: r, isDark: i } = se(),
				s = at(),
				{ hasSidebar: a, hasAside: l, leftAside: c } = mn(),
				{ isBlogPost: u } = Co(),
				d = ac(),
				{ isPageDecrypted: f } = Is(),
				p = E(
					() =>
						Re('CommentService') !== 'CommentService' &&
						n.value.frontmatter.comments !== !1 &&
						f.value
				),
				m = E(() => (l.value ? (u.value ? d.value.length > 0 : !0) : !1)),
				v = E(() => s.path.replace(/[./]+/g, '_').replace(/_html$/, '')),
				b = E(() => o.value.externalLinkIcon && r.value.externalLinkIcon !== !1),
				w = R()
			ve(
				() => s.hash,
				(y) =>
					ht(() => {
						if (!w.value) return
						const S = w.value.querySelector(`.outline-link[href="${y}"]`)
						if (!S || !y) {
							w.value.scrollTop = 0
							return
						}
						const { top: I, height: j } = w.value.getBoundingClientRect(),
							{ top: U, height: Z } = S.getBoundingClientRect()
						;(U < I || U + Z > I + j) && S.scrollIntoView({ block: 'center' })
					}),
				{ immediate: !0 }
			)
			const P = {
				page: n,
				theme: o,
				frontmatter: r,
				isDark: i,
				route: s,
				hasSidebar: a,
				hasAside: l,
				leftAside: c,
				isBlogPost: u,
				headers: d,
				isPageDecrypted: f,
				hasComments: p,
				enableAside: m,
				pageName: v,
				enabledExternalLinkIcon: b,
				asideEl: w,
				VPDocAside: QS,
				VPDocBreadcrumbs: rC,
				VPDocChangelog: yC,
				VPDocContributor: SC,
				VPDocCopyright: DC,
				VPDocFooter: nT,
				VPDocMeta: pT,
				VPEncryptPage: PT,
				VPTransitionFadeSlideY: _c,
			}
			return Object.defineProperty(P, '__isScriptSetup', { enumerable: !1, value: !0 }), P
		},
	}),
	CT = { class: 'container' },
	TT = { ref: 'asideEl', class: 'aside-container' },
	AT = { class: 'aside-content' },
	LT = { class: 'content' },
	BT = { class: 'content-container' },
	OT = { class: 'main' }
function VT(e, t, n, o, r, i) {
	const s = Re('Content'),
		a = Re('DocComment')
	return (
		h(),
		N(o.VPTransitionFadeSlideY, null, {
			default: T(() => [
				(h(),
				_(
					'div',
					{
						key: o.page.path,
						class: J([
							'vp-doc-container',
							{
								'has-sidebar': o.hasSidebar,
								'has-aside': o.enableAside,
								'is-blog': o.isBlogPost,
								'with-encrypt': !o.isPageDecrypted,
							},
						]),
					},
					[
						C(e.$slots, 'doc-top', {}, void 0, !0),
						g('div', CT, [
							o.enableAside
								? (h(),
								  _(
										'div',
										{
											key: 0,
											class: J(['aside', { 'left-aside': o.leftAside }]),
											'vp-outline': '',
										},
										[
											t[0] || (t[0] = g('div', { class: 'aside-curtain' }, null, -1)),
											g(
												'div',
												TT,
												[
													g('div', AT, [
														O(o.VPDocAside, null, {
															'aside-top': T(() => [C(e.$slots, 'aside-top', {}, void 0, !0)]),
															'aside-bottom': T(() => [
																C(e.$slots, 'aside-bottom', {}, void 0, !0),
															]),
															'aside-outline-before': T(() => [
																C(e.$slots, 'aside-outline-before', {}, void 0, !0),
															]),
															'aside-outline-after': T(() => [
																C(e.$slots, 'aside-outline-after', {}, void 0, !0),
															]),
															'aside-ads-before': T(() => [
																C(e.$slots, 'aside-ads-before', {}, void 0, !0),
															]),
															'aside-ads-after': T(() => [
																C(e.$slots, 'aside-ads-after', {}, void 0, !0),
															]),
															_: 3,
														}),
													]),
												],
												512
											),
										],
										2
								  ))
								: A('', !0),
							g('div', LT, [
								g('div', BT, [
									C(e.$slots, 'doc-before', {}, void 0, !0),
									g('main', OT, [
										O(o.VPDocBreadcrumbs),
										O(o.VPDocMeta),
										o.isPageDecrypted
											? (h(),
											  _(
													'div',
													{
														key: 1,
														class: J([
															'vp-doc plume-content',
															[
																o.pageName,
																o.enabledExternalLinkIcon && 'external-link-icon-enabled',
															],
														]),
														'vp-content': '',
													},
													[O(s), O(o.VPDocContributor), O(o.VPDocChangelog), O(o.VPDocCopyright)],
													2
											  ))
											: (h(), N(o.VPEncryptPage, { key: 0 })),
									]),
									o.isPageDecrypted
										? (h(),
										  N(
												o.VPDocFooter,
												{ key: 0 },
												{
													'doc-footer-before': T(() => [
														C(e.$slots, 'doc-footer-before', {}, void 0, !0),
													]),
													_: 3,
												}
										  ))
										: A('', !0),
									o.hasComments
										? (h(),
										  N(a, { key: 1, darkmode: o.isDark, 'vp-comment': '' }, null, 8, ['darkmode']))
										: A('', !0),
									C(e.$slots, 'doc-after', {}, void 0, !0),
								]),
							]),
						]),
						C(e.$slots, 'doc-bottom', {}, void 0, !0),
					],
					2
				)),
			]),
			_: 3,
		})
	)
}
const $T = M(ST, [
		['render', VT],
		['__scopeId', 'data-v-52dab5ea'],
		['__file', 'VPDoc.vue'],
	]),
	IT = $({
		__name: 'VPFriendsItem',
		props: { friend: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = mi()
			function r(a, l) {
				if (!l) return {}
				const c = Kt(l) ? (o.value ? l.dark : l.light) : l
				return c ? { [a]: c } : {}
			}
			const i = E(() => ({
					...r('--vp-friends-text-color', n.friend.color),
					...r('--vp-friends-bg-color', n.friend.backgroundColor),
					...r('--vp-friends-name-color', n.friend.nameColor),
				})),
				s = { props: n, isDark: o, getStyle: r, friendStyle: i, VPLink: Ge, VPSocialLinks: gi }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	RT = { class: 'avatar' },
	DT = ['src', 'alt'],
	MT = { class: 'content' },
	NT = { key: 0, class: 'location' },
	FT = { key: 1, class: 'organization' }
function jT(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_(
			'div',
			{
				class: J([
					'vp-friend',
					{
						'only-title':
							!n.friend.desc &&
							!((s = n.friend.socials) != null && s.length) &&
							!n.friend.location &&
							!n.friend.organization,
						'no-desc': !n.friend.desc,
					},
				]),
				style: xe(o.friendStyle),
			},
			[
				g('div', RT, [g('img', { src: n.friend.avatar, alt: n.friend.name }, null, 8, DT)]),
				g('div', MT, [
					O(
						o.VPLink,
						{ class: 'title', href: n.friend.link, 'no-icon': '', text: n.friend.name },
						null,
						8,
						['href', 'text']
					),
					n.friend.location
						? (h(),
						  _('p', NT, [
								t[0] || (t[0] = g('span', { class: 'vpi-location' }, null, -1)),
								g('span', null, D(n.friend.location), 1),
						  ]))
						: A('', !0),
					n.friend.organization
						? (h(),
						  _('p', FT, [
								t[1] || (t[1] = g('span', { class: 'vpi-organization' }, null, -1)),
								g('span', null, D(n.friend.organization), 1),
						  ]))
						: A('', !0),
					n.friend.desc
						? (h(),
						  _(
								'p',
								{
									key: 2,
									class: J(['desc', { offset: n.friend.location && n.friend.organization }]),
								},
								D(n.friend.desc),
								3
						  ))
						: A('', !0),
					n.friend.socials
						? (h(), N(o.VPSocialLinks, { key: 3, links: n.friend.socials }, null, 8, ['links']))
						: A('', !0),
				]),
			],
			6
		)
	)
}
const Nv = M(IT, [
		['render', jT],
		['__scopeId', 'data-v-e1b32ea2'],
		['__file', 'VPFriendsItem.vue'],
	]),
	HT = $({
		__name: 'VPFriendsGroup',
		props: { group: {} },
		setup(e, { expose: t }) {
			t()
			const n = { VPFriendsItem: Nv }
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	zT = { class: 'vp-friends-group' },
	qT = { class: 'title' },
	UT = { key: 0, class: 'description' },
	WT = { key: 1, class: 'friends-list' }
function GT(e, t, n, o, r, i) {
	var s
	return (
		h(),
		_('div', zT, [
			g('h3', qT, D(n.group.title || 'My Friends'), 1),
			n.group.desc ? (h(), _('p', UT, D(n.group.desc), 1)) : A('', !0),
			(s = n.group.list) != null && s.length
				? (h(),
				  _('section', WT, [
						(h(!0),
						_(
							K,
							null,
							he(
								n.group.list,
								(a, l) => (
									h(), N(o.VPFriendsItem, { key: a.name + l, friend: a }, null, 8, ['friend'])
								)
							),
							128
						)),
				  ]))
				: A('', !0),
		])
	)
}
const KT = M(HT, [
		['render', GT],
		['__scopeId', 'data-v-056e30f1'],
		['__file', 'VPFriendsGroup.vue'],
	]),
	YT = $({
		__name: 'VPFriends',
		setup(e, { expose: t }) {
			t()
			const n = nv(),
				{ frontmatter: o } = se(),
				r = E(() => o.value.list || []),
				i = E(() => o.value.groups || []),
				s = {
					editLink: n,
					matter: o,
					list: r,
					groups: i,
					VPFriendsGroup: KT,
					VPFriendsItem: Nv,
					VPLink: Ge,
				}
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	QT = { class: 'vp-friends' },
	JT = { class: 'title' },
	XT = { key: 0, class: 'description' },
	ZT = { key: 1, class: 'friends-list' },
	eA = { key: 2, class: 'edit-link' }
function tA(e, t, n, o, r, i) {
	return (
		h(),
		_('div', QT, [
			g('h2', JT, D(o.matter.title || 'My Friends'), 1),
			o.matter.description ? (h(), _('p', XT, D(o.matter.description), 1)) : A('', !0),
			o.list.length
				? (h(),
				  _('section', ZT, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.list,
								(s, a) => (
									h(), N(o.VPFriendsItem, { key: s.name + a, friend: s }, null, 8, ['friend'])
								)
							),
							128
						)),
				  ]))
				: A('', !0),
			(h(!0),
			_(
				K,
				null,
				he(
					o.groups,
					(s, a) => (h(), N(o.VPFriendsGroup, { key: a, group: s }, null, 8, ['group']))
				),
				128
			)),
			o.editLink
				? (h(),
				  _('div', eA, [
						O(
							o.VPLink,
							{ class: 'edit-link-button', href: o.editLink.link, 'no-icon': !0 },
							{
								default: T(() => [
									t[0] ||
										(t[0] = g(
											'span',
											{ class: 'vpi-square-pen edit-link-icon', 'aria-label': 'edit icon' },
											null,
											-1
										)),
									Te(' ' + D(o.editLink.text), 1),
								]),
								_: 1,
							},
							8,
							['href']
						),
				  ]))
				: A('', !0),
		])
	)
}
const nA = M(YT, [
		['render', tA],
		['__scopeId', 'data-v-3cdefaf9'],
		['__file', 'VPFriends.vue'],
	]),
	oA = {},
	rA = { class: 'vp-page' }
function iA(e, t) {
	const n = Re('Content')
	return (
		h(),
		_('div', rA, [
			C(e.$slots, 'page-top'),
			O(n, { class: 'vp-doc plume-content', 'vp-content': '' }),
			C(e.$slots, 'page-bottom'),
		])
	)
}
const sA = M(oA, [
		['render', iA],
		['__file', 'VPPage.vue'],
	]),
	aA = $({
		__name: 'VPContent',
		props: { isNotFound: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ hasSidebar: o } = mn(),
				{ frontmatter: r } = se(),
				{ isBlogLayout: i } = Co(),
				s = at()
			ve(
				[i, () => r.value.pageLayout, () => s.path],
				() =>
					ht(() => {
						var l
						if (dn) {
							document.documentElement.classList.toggle('bg-gray', i.value)
							const c =
								(l = document.documentElement.className.match(/(?:^|\s)(layout-\S+)(?:$|\s)/)) ==
								null
									? void 0
									: l[1]
							c && document.documentElement.classList.remove(c),
								document.documentElement.classList.add(
									`layout-${i.value ? 'blog' : r.value.pageLayout || 'doc'}`
								)
						}
					}),
				{ immediate: !0 }
			)
			const a = {
				props: n,
				hasSidebar: o,
				frontmatter: r,
				isBlogLayout: i,
				route: s,
				VPBlog: Iv,
				VPHome: DS,
				VPDoc: $T,
				VPFriends: nA,
				VPPage: sA,
			}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	})
function lA(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{
				id: 'VPContent',
				'vp-content': '',
				class: J([
					'vp-content',
					{
						'has-sidebar': o.hasSidebar && !o.props.isNotFound,
						'is-home': o.frontmatter.pageLayout === 'home',
					},
				]),
			},
			[
				o.isBlogLayout
					? (h(),
					  N(
							o.VPBlog,
							{ key: 0 },
							{
								'blog-top': T(() => [C(e.$slots, 'blog-top', {}, void 0, !0)]),
								'blog-bottom': T(() => [C(e.$slots, 'blog-bottom', {}, void 0, !0)]),
								'blog-archives-before': T(() => [
									C(e.$slots, 'blog-archives-before', {}, void 0, !0),
								]),
								'blog-archives-after': T(() => [
									C(e.$slots, 'blog-archives-after', {}, void 0, !0),
								]),
								'blog-tags-before': T(() => [C(e.$slots, 'blog-tags-before', {}, void 0, !0)]),
								'blog-tags-after': T(() => [C(e.$slots, 'blog-tags-after', {}, void 0, !0)]),
								'blog-tags-title-after': T(() => [
									C(e.$slots, 'blog-tags-title-after', {}, void 0, !0),
								]),
								'blog-tags-content-before': T(() => [
									C(e.$slots, 'blog-tags-content-before', {}, void 0, !0),
								]),
								'blog-categories-before': T(() => [
									C(e.$slots, 'blog-categories-before', {}, void 0, !0),
								]),
								'blog-categories-after': T(() => [
									C(e.$slots, 'blog-categories-after', {}, void 0, !0),
								]),
								'blog-categories-content-before': T(() => [
									C(e.$slots, 'blog-categories-content-before', {}, void 0, !0),
								]),
								'blog-post-list-before': T(() => [
									C(e.$slots, 'blog-post-list-before', {}, void 0, !0),
								]),
								'blog-post-list-after': T(() => [
									C(e.$slots, 'blog-post-list-after', {}, void 0, !0),
								]),
								'blog-post-list-pagination-after': T(() => [
									C(e.$slots, 'blog-post-list-pagination-after', {}, void 0, !0),
								]),
								'blog-aside-top': T(() => [C(e.$slots, 'blog-aside-top', {}, void 0, !0)]),
								'blog-aside-bottom': T(() => [C(e.$slots, 'blog-aside-bottom', {}, void 0, !0)]),
								'blog-extract-before': T(() => [
									C(e.$slots, 'blog-extract-before', {}, void 0, !0),
								]),
								'blog-extract-after': T(() => [C(e.$slots, 'blog-extract-after', {}, void 0, !0)]),
								_: 3,
							}
					  ))
					: o.frontmatter.pageLayout === 'page'
					? (h(),
					  N(
							o.VPPage,
							{ key: 1 },
							{
								'page-top': T(() => [C(e.$slots, 'page-top', {}, void 0, !0)]),
								'page-bottom': T(() => [C(e.$slots, 'page-bottom', {}, void 0, !0)]),
								_: 3,
							}
					  ))
					: o.frontmatter.pageLayout === 'friends'
					? (h(), N(o.VPFriends, { key: 2 }))
					: o.frontmatter.pageLayout === 'home'
					? (h(),
					  N(
							o.VPHome,
							{ key: 3 },
							{
								'blog-top': T(() => [C(e.$slots, 'blog-top', {}, void 0, !0)]),
								'blog-bottom': T(() => [C(e.$slots, 'blog-bottom', {}, void 0, !0)]),
								'blog-post-list-before': T(() => [
									C(e.$slots, 'blog-post-list-before', {}, void 0, !0),
								]),
								'blog-post-list-after': T(() => [
									C(e.$slots, 'blog-post-list-after', {}, void 0, !0),
								]),
								'blog-post-list-pagination-after': T(() => [
									C(e.$slots, 'blog-post-list-pagination-after', {}, void 0, !0),
								]),
								_: 3,
							}
					  ))
					: o.frontmatter.pageLayout && o.frontmatter.pageLayout !== 'doc'
					? (h(), N(Ht(o.frontmatter.pageLayout), { key: 4 }))
					: (h(),
					  N(
							o.VPDoc,
							{ key: 5 },
							{
								'doc-top': T(() => [C(e.$slots, 'doc-top', {}, void 0, !0)]),
								'doc-bottom': T(() => [C(e.$slots, 'doc-bottom', {}, void 0, !0)]),
								'doc-footer-before': T(() => [C(e.$slots, 'doc-footer-before', {}, void 0, !0)]),
								'doc-before': T(() => [C(e.$slots, 'doc-before', {}, void 0, !0)]),
								'doc-after': T(() => [C(e.$slots, 'doc-after', {}, void 0, !0)]),
								'aside-top': T(() => [C(e.$slots, 'aside-top', {}, void 0, !0)]),
								'aside-outline-before': T(() => [
									C(e.$slots, 'aside-outline-before', {}, void 0, !0),
								]),
								'aside-outline-after': T(() => [
									C(e.$slots, 'aside-outline-after', {}, void 0, !0),
								]),
								'aside-ads-before': T(() => [C(e.$slots, 'aside-ads-before', {}, void 0, !0)]),
								'aside-ads-after': T(() => [C(e.$slots, 'aside-ads-after', {}, void 0, !0)]),
								'aside-bottom': T(() => [C(e.$slots, 'aside-bottom', {}, void 0, !0)]),
								_: 3,
							}
					  )),
			],
			2
		)
	)
}
const cA = M(aA, [
		['render', lA],
		['__scopeId', 'data-v-0b75b8ac'],
		['__file', 'VPContent.vue'],
	]),
	uA = $({
		__name: 'VPFooter',
		setup(e, { expose: t }) {
			t()
			const { theme: n } = se(),
				{ hasSidebar: o } = mn(),
				r = ty('--vp-footer-height', dn ? document.body : null),
				i = R(null)
			ke(() => {
				n.value.footer && i.value && (r.value = `${i.value.offsetHeight}px`)
			})
			const s = { theme: n, hasSidebar: o, footerHeight: r, footer: i }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	dA = { class: 'container' },
	fA = ['innerHTML'],
	pA = ['innerHTML']
function hA(e, t, n, o, r, i) {
	return o.theme.footer
		? (h(),
		  _(
				'footer',
				{
					key: 0,
					ref: 'footer',
					class: J(['vp-footer', { 'has-sidebar': o.hasSidebar }]),
					'vp-footer': '',
				},
				[
					C(
						e.$slots,
						'footer-content',
						{},
						() => [
							g('div', dA, [
								o.theme.footer.message
									? (h(),
									  _(
											'p',
											{ key: 0, class: 'message', innerHTML: o.theme.footer.message },
											null,
											8,
											fA
									  ))
									: A('', !0),
								o.theme.footer.copyright
									? (h(),
									  _(
											'p',
											{ key: 1, class: 'copyright', innerHTML: o.theme.footer.copyright },
											null,
											8,
											pA
									  ))
									: A('', !0),
							]),
						],
						!0
					),
				],
				2
		  ))
		: A('', !0)
}
const wc = M(uA, [
		['render', hA],
		['__scopeId', 'data-v-5d44b372'],
		['__file', 'VPFooter.vue'],
	]),
	mA = $({
		__name: 'VPEncryptGlobal',
		setup(e, { expose: t }) {
			t()
			const { theme: n, site: o } = se(),
				r = E(() => n.value.profile),
				i = E(() => {
					var a
					return ((a = r.value) == null ? void 0 : a.name) || o.value.title
				}),
				s = { theme: n, site: o, profile: r, title: i, VPEncryptForm: Mv, VPFooter: wc }
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	vA = { class: 'vp-global-encrypt' },
	gA = { class: 'global-encrypt-container' },
	_A = { key: 0, class: 'profile' },
	bA = ['src', 'alt'],
	yA = { key: 1 }
function wA(e, t, n, o, r, i) {
	const s = Re('ClientOnly')
	return (
		h(),
		_(
			K,
			null,
			[
				O(s, null, {
					default: T(() => [
						g('div', vA, [
							g('div', gA, [
								o.profile || o.title
									? (h(),
									  _('div', _A, [
											o.profile
												? (h(),
												  _(
														'p',
														{ key: 0, class: J(['avatar', { circle: o.profile.circle }]) },
														[
															g(
																'img',
																{ src: o.profile.avatar ?? o.profile.url, alt: o.profile.name },
																null,
																8,
																bA
															),
														],
														2
												  ))
												: A('', !0),
											o.title ? (h(), _('h3', yA, D(o.title), 1)) : A('', !0),
									  ]))
									: A('', !0),
								O(o.VPEncryptForm, { global: '', info: o.theme.encryptGlobalText }, null, 8, [
									'info',
								]),
							]),
						]),
					]),
					_: 1,
				}),
				O(o.VPFooter),
			],
			64
		)
	)
}
const kA = M(mA, [
		['render', wA],
		['__scopeId', 'data-v-f927787e'],
		['__file', 'VPEncryptGlobal.vue'],
	]),
	EA = $({
		__name: 'VPLocalNavOutlineDropdown',
		props: { headers: {}, navHeight: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				r = R(!1),
				i = R(0),
				s = R(),
				a = R()
			ve(
				() => n.headers,
				() => {
					r.value = !1
				}
			),
				Wl(
					s,
					() => {
						r.value = !1
					},
					{ ignore: [a] }
				)
			function l() {
				;(r.value = !r.value),
					(i.value = window.innerHeight + Math.min(window.scrollY - n.navHeight, 0))
			}
			function c(f) {
				f.target.classList.contains('outline-link') &&
					(s.value && (s.value.style.transition = 'none'),
					ht(() => {
						r.value = !1
					}))
			}
			function u() {
				;(r.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
			}
			const d = {
				props: n,
				theme: o,
				open: r,
				vh: i,
				items: s,
				btn: a,
				toggle: l,
				onItemClick: c,
				scrollToTop: u,
				VPDocOutlineItem: Dv,
			}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	xA = { class: 'header' },
	PA = { class: 'outline' }
function SA(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: 'vp-local-nav-outline-dropdown', style: xe({ '--vp-vh': `${o.vh}px` }) },
			[
				n.headers.length > 0
					? (h(),
					  _(
							'button',
							{ key: 0, ref: 'btn', class: J({ open: o.open }), onClick: o.toggle },
							[
								Te(D(o.theme.outlineLabel || 'On this page') + ' ', 1),
								t[0] || (t[0] = g('span', { class: 'vpi-chevron-right icon' }, null, -1)),
							],
							2
					  ))
					: (h(),
					  _(
							'button',
							{ key: 1, onClick: o.scrollToTop },
							D(o.theme.returnToTopLabel || 'Return to top'),
							1
					  )),
				O(
					no,
					{ name: 'flyout' },
					{
						default: T(() => [
							o.open
								? (h(),
								  _(
										'div',
										{ key: 0, ref: 'items', class: 'items', onClick: o.onItemClick },
										[
											g('div', xA, [
												g(
													'a',
													{ class: 'top-link', href: '#', onClick: o.scrollToTop },
													D(o.theme.returnToTopLabel || 'Return to top'),
													1
												),
											]),
											g('div', PA, [
												O(o.VPDocOutlineItem, { headers: n.headers }, null, 8, ['headers']),
											]),
										],
										512
								  ))
								: A('', !0),
						]),
						_: 1,
					}
				),
			],
			4
		)
	)
}
const CA = M(EA, [
		['render', SA],
		['__scopeId', 'data-v-d5cd1d6f'],
		['__file', 'VPLocalNavOutlineDropdown.vue'],
	]),
	TA = $({
		__name: 'VPLocalNav',
		props: { open: { type: Boolean }, showOutline: { type: Boolean } },
		emits: ['openMenu'],
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ theme: o } = se(),
				{ isBlogPost: r } = Co(),
				{ hasSidebar: i } = mn(),
				{ y: s } = Yl(),
				a = R(0),
				l = ac(),
				c = E(() => l.value.length === 0 && !i.value)
			ke(() => {
				a.value = Number.parseInt(
					getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')
				)
			})
			const u = E(() => ({
					'vp-local-nav': !0,
					fixed: c.value,
					'reached-top': s.value >= a.value,
					'is-blog': r,
					'with-outline': !n.showOutline,
				})),
				d = E(() => (i.value || r.value) && (!c.value || s.value >= a.value)),
				f = {
					props: n,
					theme: o,
					isBlogPost: r,
					hasSidebar: i,
					y: s,
					navHeight: a,
					headers: l,
					empty: c,
					classes: u,
					showLocalNav: d,
					VPLocalNavOutlineDropdown: CA,
				}
			return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
		},
	}),
	AA = ['disabled', 'aria-expanded'],
	LA = { class: 'menu-text' }
function BA(e, t, n, o, r, i) {
	return o.showLocalNav
		? (h(),
		  _(
				'div',
				{ key: 0, class: J(o.classes) },
				[
					g(
						'button',
						{
							class: J(['menu', { hidden: o.isBlogPost }]),
							disabled: o.isBlogPost,
							'aria-expanded': n.open,
							'aria-controls': 'SidebarNav',
							onClick: t[0] || (t[0] = (s) => e.$emit('openMenu')),
						},
						[
							t[1] || (t[1] = g('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
							g('span', LA, D(o.theme.sidebarMenuLabel || 'Menu'), 1),
						],
						10,
						AA
					),
					n.showOutline
						? (h(),
						  N(
								o.VPLocalNavOutlineDropdown,
								{ key: 0, headers: o.headers, 'nav-height': o.navHeight },
								null,
								8,
								['headers', 'nav-height']
						  ))
						: A('', !0),
				],
				2
		  ))
		: A('', !0)
}
const OA = M(TA, [
		['render', BA],
		['__scopeId', 'data-v-8271fb14'],
		['__file', 'VPLocalNav.vue'],
	]),
	VA = $({
		__name: 'VPSidebarItem',
		props: { item: {}, depth: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{
					collapsed: o,
					collapsible: r,
					isLink: i,
					isActiveLink: s,
					hasActiveLink: a,
					hasChildren: l,
					toggle: c,
				} = m6(E(() => n.item)),
				u = E(() => (l.value ? 'section' : 'div')),
				d = E(() => (i.value ? 'a' : 'div')),
				f = E(() => (l.value ? (n.depth + 2 === 7 ? 'p' : `h${n.depth + 2}`) : 'p')),
				p = E(() => (i.value ? void 0 : 'button')),
				m = E(() => [
					[`level-${n.depth}`],
					{ collapsible: r.value },
					{ collapsed: o.value },
					{ 'is-link': i.value },
					{ 'is-active': s.value },
					{ 'has-active': a.value },
				])
			function v(P) {
				;('key' in P && P.key !== 'Enter') || n.item.link || c()
			}
			function b() {
				n.item.link && c()
			}
			const w = {
				props: n,
				collapsed: o,
				collapsible: r,
				isLink: i,
				isActiveLink: s,
				hasActiveLink: a,
				hasChildren: l,
				toggle: c,
				sectionTag: u,
				linkTag: d,
				textTag: f,
				itemRole: p,
				classes: m,
				onItemInteraction: v,
				onCaretClick: b,
				VPIcon: vt,
				VPLink: Ge,
			}
			return Object.defineProperty(w, '__isScriptSetup', { enumerable: !1, value: !0 }), w
		},
	}),
	$A = ['role', 'tabindex'],
	IA = { key: 1, class: 'items' }
function RA(e, t, n, o, r, i) {
	const s = Re('VPSidebarItem', !0)
	return (
		h(),
		N(
			Ht(o.sectionTag),
			{ class: J(['vp-sidebar-item sidebar-item', o.classes]) },
			{
				default: T(() => [
					n.item.text
						? (h(),
						  _(
								'div',
								zt(
									{ key: 0, class: 'item', role: o.itemRole, tabindex: n.item.items && 0 },
									w1(
										n.item.items
											? { click: o.onItemInteraction, keydown: o.onItemInteraction }
											: {},
										!0
									)
								),
								[
									t[1] || (t[1] = g('div', { class: 'indicator' }, null, -1)),
									n.item.icon
										? (h(), N(o.VPIcon, { key: 0, name: n.item.icon }, null, 8, ['name']))
										: A('', !0),
									n.item.link
										? (h(),
										  N(
												o.VPLink,
												{ key: 1, tag: o.linkTag, class: 'link', href: n.item.link },
												{
													default: T(() => [
														(h(),
														N(Ht(o.textTag), { class: 'text', innerHTML: n.item.text }, null, 8, [
															'innerHTML',
														])),
													]),
													_: 1,
												},
												8,
												['tag', 'href']
										  ))
										: (h(),
										  N(Ht(o.textTag), { key: 2, class: 'text', innerHTML: n.item.text }, null, 8, [
												'innerHTML',
										  ])),
									n.item.collapsed != null
										? (h(),
										  _(
												'div',
												{
													key: 3,
													class: 'caret',
													role: 'button',
													'aria-label': 'toggle section',
													tabindex: '0',
													onClick: o.onCaretClick,
													onKeydown: Nl(o.onCaretClick, ['enter']),
												},
												t[0] ||
													(t[0] = [g('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)]),
												32
										  ))
										: A('', !0),
								],
								16,
								$A
						  ))
						: A('', !0),
					n.item.items && n.item.items.length
						? (h(),
						  _('div', IA, [
								n.depth < 5
									? (h(!0),
									  _(
											K,
											{ key: 0 },
											he(
												n.item.items,
												(a) => (
													h(),
													N(s, { key: a.text, item: a, depth: n.depth + 1 }, null, 8, [
														'item',
														'depth',
													])
												)
											),
											128
									  ))
									: A('', !0),
						  ]))
						: A('', !0),
				]),
				_: 1,
			},
			8,
			['class']
		)
	)
}
const DA = M(VA, [
		['render', RA],
		['__scopeId', 'data-v-0f4f53e1'],
		['__file', 'VPSidebarItem.vue'],
	]),
	MA = $({
		__name: 'VPSidebarGroup',
		props: { items: {} },
		setup(e, { expose: t }) {
			t()
			const n = R(!0)
			let o = null
			ke(() => {
				o = setTimeout(() => {
					;(o = null), (n.value = !1)
				}, 300)
			}),
				Vl(() => {
					o != null && (clearTimeout(o), (o = null))
				})
			const r = {
				disableTransition: n,
				get timer() {
					return o
				},
				set timer(i) {
					o = i
				},
				VPSidebarItem: DA,
			}
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	})
function NA(e, t, n, o, r, i) {
	return (
		h(!0),
		_(
			K,
			null,
			he(
				n.items,
				(s) => (
					h(),
					_(
						'div',
						{ key: s.text, class: J(['group', { 'no-transition': o.disableTransition }]) },
						[O(o.VPSidebarItem, { item: s, depth: 0 }, null, 8, ['item'])],
						2
					)
				)
			),
			128
		)
	)
}
const FA = M(MA, [
		['render', NA],
		['__scopeId', 'data-v-0df86cfa'],
		['__file', 'VPSidebarGroup.vue'],
	]),
	jA = $({
		__name: 'VPSidebar',
		props: { open: { type: Boolean } },
		setup(e, { expose: t }) {
			t()
			const n = e,
				{ sidebarGroups: o, hasSidebar: r, sidebarKey: i } = mn(),
				s = Th(),
				a = R(null),
				l = Kl(dn ? document.body : null)
			ve(
				[() => n.open, a],
				() => {
					var u
					n.open ? ((l.value = !0), (u = a.value) == null || u.focus()) : (l.value = !1)
				},
				{ immediate: !0, flush: 'post' }
			),
				ke(() => {
					const u = document.querySelector(`.vp-sidebar .vp-link[href*="${s.value}"]`)
					if (!u || !a.value) return
					const { top: d, height: f } = a.value.getBoundingClientRect(),
						{ top: p, height: m } = u.getBoundingClientRect()
					;(p < d || p + m > d + f) && u.scrollIntoView({ block: 'center' })
				})
			const c = {
				props: n,
				sidebarGroups: o,
				hasSidebar: r,
				sidebarKey: i,
				routePath: s,
				navEl: a,
				isLocked: l,
				VPSidebarGroup: FA,
				VPTransitionFadeSlideY: _c,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	})
function HA(e, t, n, o, r, i) {
	return (
		h(),
		N(
			no,
			{ name: 'fade-slide-x', mode: 'out-in' },
			{
				default: T(() => [
					o.hasSidebar
						? (h(),
						  _(
								'aside',
								{
									key: 0,
									ref: 'navEl',
									class: J(['vp-sidebar', { open: n.open }]),
									'vp-sidebar': '',
									onClick: t[0] || (t[0] = Qp(() => {}, ['stop'])),
								},
								[
									t[2] || (t[2] = g('div', { class: 'curtain' }, null, -1)),
									O(o.VPTransitionFadeSlideY, null, {
										default: T(() => [
											(h(),
											_(
												'nav',
												{
													id: 'SidebarNav',
													key: o.sidebarKey,
													class: 'nav',
													'aria-labelledby': 'sidebar-aria-label',
													tabindex: '-1',
												},
												[
													t[1] ||
														(t[1] = g(
															'span',
															{ id: 'sidebar-aria-label', class: 'visually-hidden' },
															' Sidebar Navigation ',
															-1
														)),
													C(e.$slots, 'sidebar-nav-before', {}, void 0, !0),
													O(o.VPSidebarGroup, { items: o.sidebarGroups }, null, 8, ['items']),
													C(e.$slots, 'sidebar-nav-after', {}, void 0, !0),
												]
											)),
										]),
										_: 3,
									}),
								],
								2
						  ))
						: A('', !0),
				]),
				_: 3,
			}
		)
	)
}
const zA = M(jA, [
		['render', HA],
		['__scopeId', 'data-v-4ad4ec84'],
		['__file', 'VPSidebar.vue'],
	]),
	qA = $({
		__name: 'VPSkipLink',
		setup(e, { expose: t }) {
			t()
			const n = at(),
				o = R()
			ve(
				() => n.path,
				() => o.value.focus()
			)
			function r({ target: s }) {
				const a = document.getElementById(decodeURIComponent(s.hash).slice(1))
				if (a) {
					const l = () => {
						a.removeAttribute('tabindex'), a.removeEventListener('blur', l)
					}
					a.setAttribute('tabindex', '-1'),
						a.addEventListener('blur', l),
						a.focus(),
						window.scrollTo(0, 0)
				}
			}
			const i = { route: n, backToTop: o, focusOnTargetAnchor: r }
			return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
		},
	}),
	UA = { ref: 'backToTop', tabindex: '-1' }
function WA(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				g('span', UA, null, 512),
				g(
					'a',
					{
						href: '#VPContent',
						class: 'vp-skip-link visually-hidden',
						onClick: o.focusOnTargetAnchor,
					},
					' Skip to content '
				),
			],
			64
		)
	)
}
const Fv = M(qA, [
		['render', WA],
		['__scopeId', 'data-v-1282d13d'],
		['__file', 'VPSkipLink.vue'],
	]),
	GA = $({
		__name: 'Layout',
		setup(e, { expose: t }) {
			t()
			const { isOpen: n, open: o, close: r } = mn(),
				{ frontmatter: i } = se(),
				{ isGlobalDecrypted: s, isPageDecrypted: a } = Is(),
				l = at()
			ve(() => l.path, r), h6(n, r)
			const c = {
				isSidebarOpen: n,
				openSidebar: o,
				closeSidebar: r,
				frontmatter: i,
				isGlobalDecrypted: s,
				isPageDecrypted: a,
				route: l,
				VPNav: Lv,
				VPBackdrop: xE,
				VPBackToTop: TE,
				VPBulletin: Bv,
				VPContent: cA,
				VPEncryptGlobal: kA,
				VPFooter: wc,
				VPLocalNav: OA,
				VPSidebar: zA,
				VPSkipLink: Fv,
			}
			return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
		},
	})
function KA(e, t, n, o, r, i) {
	const s = Re('Content')
	return (
		h(),
		_(
			K,
			null,
			[
				o.frontmatter.pageLayout !== !1 && o.frontmatter.pageLayout !== 'custom'
					? (h(),
					  _(
							'div',
							{
								key: 0,
								class: J(['theme-plume vp-layout', o.frontmatter.pageClass]),
								'vp-container': '',
							},
							[
								o.isGlobalDecrypted
									? (h(),
									  _(
											K,
											{ key: 1 },
											[
												C(e.$slots, 'layout-top', {}, void 0, !0),
												O(o.VPSkipLink),
												O(
													o.VPBackdrop,
													{ show: o.isSidebarOpen, onClick: o.closeSidebar },
													null,
													8,
													['show', 'onClick']
												),
												O(o.VPNav, null, {
													'nav-bar-title-before': T(() => [
														C(e.$slots, 'nav-bar-title-before', {}, void 0, !0),
													]),
													'nav-bar-title-after': T(() => [
														C(e.$slots, 'nav-bar-title-after', {}, void 0, !0),
													]),
													'nav-bar-content-before': T(() => [
														C(e.$slots, 'nav-bar-content-before', {}, void 0, !0),
													]),
													'nav-bar-content-after': T(() => [
														C(e.$slots, 'nav-bar-content-after', {}, void 0, !0),
													]),
													'nav-screen-content-before': T(() => [
														C(e.$slots, 'nav-screen-content-before', {}, void 0, !0),
													]),
													'nav-screen-content-after': T(() => [
														C(e.$slots, 'nav-screen-content-after', {}, void 0, !0),
													]),
													_: 3,
												}),
												O(
													o.VPLocalNav,
													{
														open: o.isSidebarOpen,
														'show-outline': o.isPageDecrypted,
														onOpenMenu: o.openSidebar,
													},
													null,
													8,
													['open', 'show-outline', 'onOpenMenu']
												),
												O(
													o.VPSidebar,
													{ open: o.isSidebarOpen },
													{
														'sidebar-nav-before': T(() => [
															C(e.$slots, 'sidebar-nav-before', {}, void 0, !0),
														]),
														'sidebar-nav-after': T(() => [
															C(e.$slots, 'sidebar-nav-after', {}, void 0, !0),
														]),
														_: 3,
													},
													8,
													['open']
												),
												C(
													e.$slots,
													'custom-content',
													{},
													() => [
														O(o.VPContent, null, {
															'page-top': T(() => [C(e.$slots, 'page-top', {}, void 0, !0)]),
															'page-bottom': T(() => [C(e.$slots, 'page-bottom', {}, void 0, !0)]),
															'doc-footer-before': T(() => [
																C(e.$slots, 'doc-footer-before', {}, void 0, !0),
															]),
															'doc-before': T(() => [C(e.$slots, 'doc-before', {}, void 0, !0)]),
															'doc-after': T(() => [C(e.$slots, 'doc-after', {}, void 0, !0)]),
															'doc-top': T(() => [C(e.$slots, 'doc-top', {}, void 0, !0)]),
															'doc-bottom': T(() => [C(e.$slots, 'doc-bottom', {}, void 0, !0)]),
															'aside-top': T(() => [C(e.$slots, 'aside-top', {}, void 0, !0)]),
															'aside-bottom': T(() => [
																C(e.$slots, 'aside-bottom', {}, void 0, !0),
															]),
															'aside-outline-before': T(() => [
																C(e.$slots, 'aside-outline-before', {}, void 0, !0),
															]),
															'aside-outline-after': T(() => [
																C(e.$slots, 'aside-outline-after', {}, void 0, !0),
															]),
															'blog-top': T(() => [C(e.$slots, 'blog-top', {}, void 0, !0)]),
															'blog-bottom': T(() => [C(e.$slots, 'blog-bottom', {}, void 0, !0)]),
															'blog-archives-before': T(() => [
																C(e.$slots, 'blog-archives-before', {}, void 0, !0),
															]),
															'blog-archives-after': T(() => [
																C(e.$slots, 'blog-archives-after', {}, void 0, !0),
															]),
															'blog-tags-before': T(() => [
																C(e.$slots, 'blog-tags-before', {}, void 0, !0),
															]),
															'blog-tags-after': T(() => [
																C(e.$slots, 'blog-tags-after', {}, void 0, !0),
															]),
															'blog-tags-title-after': T(() => [
																C(e.$slots, 'blog-tags-title-after', {}, void 0, !0),
															]),
															'blog-tags-content-before': T(() => [
																C(e.$slots, 'blog-tags-content-before', {}, void 0, !0),
															]),
															'blog-categories-before': T(() => [
																C(e.$slots, 'blog-categories-before', {}, void 0, !0),
															]),
															'blog-categories-after': T(() => [
																C(e.$slots, 'blog-categories-after', {}, void 0, !0),
															]),
															'blog-categories-content-before': T(() => [
																C(e.$slots, 'blog-categories-content-before', {}, void 0, !0),
															]),
															'blog-post-list-before': T(() => [
																C(e.$slots, 'blog-post-list-before', {}, void 0, !0),
															]),
															'blog-post-list-after': T(() => [
																C(e.$slots, 'blog-post-list-after', {}, void 0, !0),
															]),
															'blog-post-list-pagination-after': T(() => [
																C(e.$slots, 'blog-post-list-pagination-after', {}, void 0, !0),
															]),
															'blog-aside-top': T(() => [
																C(e.$slots, 'blog-aside-top', {}, void 0, !0),
															]),
															'blog-aside-bottom': T(() => [
																C(e.$slots, 'blog-aside-bottom', {}, void 0, !0),
															]),
															'blog-extract-before': T(() => [
																C(e.$slots, 'blog-extract-before', {}, void 0, !0),
															]),
															'blog-extract-after': T(() => [
																C(e.$slots, 'blog-extract-after', {}, void 0, !0),
															]),
															_: 3,
														}),
													],
													!0
												),
												O(o.VPBackToTop),
												O(o.VPFooter, null, {
													'footer-content': T(() => [
														C(e.$slots, 'footer-content', {}, void 0, !0),
													]),
													_: 3,
												}),
												C(e.$slots, 'layout-bottom', {}, void 0, !0),
											],
											64
									  ))
									: (h(), N(o.VPEncryptGlobal, { key: 0 })),
							],
							2
					  ))
					: (h(), N(s, { key: 1, 'vp-container': '', 'vp-content': '' })),
				O(o.VPBulletin, null, {
					'bulletin-content': T(() => [C(e.$slots, 'bulletin-content', {}, void 0, !0)]),
					_: 3,
				}),
			],
			64
		)
	)
}
const YA = M(GA, [
		['render', KA],
		['__scopeId', 'data-v-64fa3676'],
		['__file', 'Layout.vue'],
	]),
	QA = $({
		__name: 'NotFound',
		setup(e, { expose: t }) {
			t()
			const n = Rn(),
				{ theme: o } = se(),
				r = {
					root: n,
					theme: o,
					VPNav: Lv,
					VPBulletin: Bv,
					VPFooter: wc,
					VPSkipLink: Fv,
					get withBase() {
						return et
					},
				}
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	JA = { 'vp-not-found': '', class: 'theme-plume vp-layout' },
	XA = { id: 'VPContent', class: 'vp-content' },
	ZA = { class: 'vp-not-found' },
	eL = { class: 'code' },
	tL = { class: 'title' },
	nL = { class: 'quote' },
	oL = { class: 'action' },
	rL = ['href', 'aria-label']
function iL(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				g('div', JA, [
					C(e.$slots, 'layout-top', {}, void 0, !0),
					O(o.VPSkipLink),
					O(o.VPNav, null, {
						'nav-bar-title-before': T(() => [C(e.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
						'nav-bar-title-after': T(() => [C(e.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
						'nav-bar-content-before': T(() => [
							C(e.$slots, 'nav-bar-content-before', {}, void 0, !0),
						]),
						'nav-bar-content-after': T(() => [
							C(e.$slots, 'nav-bar-content-after', {}, void 0, !0),
						]),
						'nav-screen-content-before': T(() => [
							C(e.$slots, 'nav-screen-content-before', {}, void 0, !0),
						]),
						'nav-screen-content-after': T(() => [
							C(e.$slots, 'nav-screen-content-after', {}, void 0, !0),
						]),
						_: 3,
					}),
					g('div', XA, [
						C(
							e.$slots,
							'not-found',
							{},
							() => {
								var s, a, l, c, u
								return [
									g('div', ZA, [
										g('p', eL, D(((s = o.theme.notFound) == null ? void 0 : s.code) ?? '404'), 1),
										g(
											'h1',
											tL,
											D(((a = o.theme.notFound) == null ? void 0 : a.title) ?? 'PAGE NOT FOUND'),
											1
										),
										t[0] || (t[0] = g('div', { class: 'divider' }, null, -1)),
										g(
											'blockquote',
											nL,
											D(
												((l = o.theme.notFound) == null ? void 0 : l.quote) ??
													"But if you don't change your direction, and if you keep looking, you may end up where you are heading."
											),
											1
										),
										g('div', oL, [
											g(
												'a',
												{
													class: 'link',
													href: o.withBase(o.root),
													'aria-label':
														((c = o.theme.notFound) == null ? void 0 : c.linkLabel) ?? 'go to home',
												},
												D(((u = o.theme.notFound) == null ? void 0 : u.linkText) ?? 'Take me home'),
												9,
												rL
											),
										]),
									]),
								]
							},
							!0
						),
					]),
					O(o.VPFooter, null, {
						'footer-content': T(() => [C(e.$slots, 'footer-content', {}, void 0, !0)]),
						_: 3,
					}),
					C(e.$slots, 'layout-bottom', {}, void 0, !0),
				]),
				O(o.VPBulletin, null, {
					'bulletin-content': T(() => [C(e.$slots, 'bulletin-content', {}, void 0, !0)]),
					_: 3,
				}),
			],
			64
		)
	)
}
const sL = M(QA, [
	['render', iL],
	['__scopeId', 'data-v-a4c8eee2'],
	['__file', 'NotFound.vue'],
])
function aL(e) {
	e.component('Badge', cl),
		e.component('VPBadge', cl),
		e.component('VPCard', df),
		e.component('Card', df),
		e.component('VPCardGrid', ff),
		e.component('CardGrid', ff),
		e.component('VPLinkCard', mf),
		e.component('LinkCard', mf),
		e.component('VPImageCard', hf),
		e.component('ImageCard', hf),
		e.component('VPCardMasonry', pf),
		e.component('CardMasonry', pf),
		e.component('Icon', vt),
		e.component('VPIcon', vt),
		e.component('HomeBox', tr),
		e.component('VPHomeBox', tr),
		e.component('DocComment', (t) => (Ka('CommentService') ? ce(Re('CommentService'), t) : null))
}
var lL = Mn({
	enhance({ app: e, router: t }) {
		e6(e), t6(e), U6(t), aL(e)
	},
	setup() {
		u6(), R6(), i6(), W6()
	},
	layouts: { Layout: YA, NotFound: sL },
})
const cL = Object.freeze(
		Object.defineProperty({ __proto__: null, default: lL }, Symbol.toStringTag, { value: 'Module' })
	),
	uL = 'https://caniuse.pengzhanbo.cn/features.json',
	dL = [
		{ label: '不显示旧版本', value: '0' },
		...Array.from({ length: 5 })
			.fill(0)
			.map((e, t) => ({ label: `旧版本（当前版本 - ${t + 1}）`, value: `${t + 1}` })),
	],
	fL = [
		{ label: '不显示未来版本', value: '0' },
		...Array.from({ length: 3 })
			.fill(0)
			.map((e, t) => ({ label: `未来版本（当前版本 + ${t + 1}）`, value: `${t + 1}` })),
	],
	pL = [
		{ label: 'iframe', value: '' },
		{ label: 'image', value: 'image' },
	]
function hL() {
	const e = R('2'),
		t = R('1'),
		n = R(''),
		o = on(dL),
		r = on(fL),
		i = on(pL)
	return { past: e, future: t, pastList: o, futureList: r, embedType: n, embedTypeList: i }
}
function mL(e, t) {
	const n = Ua('plume:caniuse-feature-list', []),
		o = Ua('plume:caniuse-feature-list-updated', Date.now()),
		r = 1e3 * 60 * 60 * 24 * 3
	ke(async () => {
		if (typeof document > 'u' || (n.value.length && Date.now() - o.value < r)) return
		const u = await fetch(uL).then((d) => d.json())
		n.value = u || n.value || []
	})
	const i = R(''),
		s = R(!1),
		a = R(),
		l = R(null)
	ve(
		() => [n.value, s.value],
		() => {
			s.value || (a.value = n.value)
		},
		{ immediate: !0 }
	),
		Wl(
			t,
			() => {
				s.value = !1
			},
			{ ignore: [e] }
		),
		Fe(
			e,
			'input',
			As(() => {
				var u
				;(l.value = null),
					(i.value = ((u = e.value) == null ? void 0 : u.value) || ''),
					i.value
						? ((a.value = n.value.filter(
								(d) => d.label.includes(i.value) || d.value.includes(i.value)
						  )),
						  a.value.length === 1 && (l.value = a.value[0]))
						: (a.value = n.value)
			}, 500)
		),
		Fe(e, 'focus', () => {
			s.value = !0
		})
	function c(u) {
		;(l.value = u), (s.value = !1), e.value && (e.value.value = u.label)
	}
	return {
		featureList: a,
		isFocus: s,
		onSelect: c,
		feature: E(() => {
			var u
			return ((u = l.value) == null ? void 0 : u.value) || ''
		}),
	}
}
function vL({ feature: e, embedType: t, past: n, future: o }) {
	const r = E(() => {
			let s = '@[caniuse'
			return (
				t.value && (s += ` ${t.value}`),
				(n.value !== '-2' || o.value !== '1') &&
					(n.value === '0' && o.value === '0' ? (s += '{0}') : (s += `{-${n.value},${o.value}}`)),
				(s += ']('),
				e.value && (s += e.value),
				`${s})`
			)
		}),
		i = E(() => (!e.value || !t.value ? '' : gL(e.value)))
	return { output: r, rendered: i }
}
function gL(e) {
	const t = 'https://caniuse.bitsofco.de/image/',
		n = `Data on support for the ${e} feature across the major browsers from caniuse.com`
	return `<p><picture>
    <source type="image/webp" srcset="${t}${e}.webp">
    <source type="image/png" srcset="${t}${e}.png">
    <img src="${t}${e}.jpg" alt="${n}" width="100%">
  </picture></p>`
}
const _L = $({
		__name: 'CodeViewer',
		props: { content: {}, lang: {} },
		setup(e, { expose: t }) {
			t()
			const n = {}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	bL = ['data-title'],
	yL = ['data-lang'],
	wL = { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }
function kL(e, t, n, o, r, i) {
	return (
		h(),
		_(
			'div',
			{ class: J(`code-viewer language-${n.lang}`), 'data-title': n.lang },
			[
				g(
					'button',
					{ class: 'copy', 'data-lang': n.lang, title: 'Copy code', 'data-copied': '已复制' },
					null,
					8,
					yL
				),
				g('pre', wL, [g('code', null, D(n.content), 1)]),
			],
			10,
			bL
		)
	)
}
const kc = M(_L, [
		['render', kL],
		['__file', 'CodeViewer.vue'],
	]),
	EL = $({
		__name: 'CanIUseConfig',
		setup(e, { expose: t }) {
			t()
			const n = Ie(null),
				o = Ie(null),
				{ feature: r, featureList: i, onSelect: s, isFocus: a } = mL(o, n),
				{ past: l, pastList: c, future: u, futureList: d, embedType: f, embedTypeList: p } = hL(),
				{ output: m, rendered: v } = vL({ feature: r, embedType: f, past: l, future: u }),
				b = {
					listEl: n,
					inputEl: o,
					feature: r,
					featureList: i,
					onSelect: s,
					isFocus: a,
					past: l,
					pastList: c,
					future: u,
					futureList: d,
					embedType: f,
					embedTypeList: p,
					output: m,
					rendered: v,
					CodeViewer: kc,
				}
			return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
		},
	}),
	xL = { class: 'caniuse-config-wrapper' },
	PL = { class: 'caniuse-form-item' },
	SL = { class: 'feature-input' },
	CL = {
		ref: 'inputEl',
		class: 'feature-input__input',
		type: 'text',
		name: 'feature',
		placeholder: '输入特性',
	},
	TL = { ref: 'listEl', class: 'feature-list' },
	AL = ['onClick'],
	LL = { class: 'caniuse-form-item' },
	BL = { class: 'caniuse-embed-type' },
	OL = ['value'],
	VL = { key: 0, class: 'caniuse-form-item' },
	$L = { class: 'caniuse-browser-version' },
	IL = ['value'],
	RL = ['value'],
	DL = { class: 'caniuse-output' },
	ML = ['innerHTML']
function NL(e, t, n, o, r, i) {
	const s = Re('Badge'),
		a = Re('CanIUseViewer')
	return (
		h(),
		_('div', xL, [
			g('form', null, [
				g('div', PL, [
					t[4] || (t[4] = g('label', { for: 'feature' }, '选择特性：', -1)),
					g('div', SL, [
						g('input', CL, null, 512),
						t[3] || (t[3] = g('span', { class: 'vpi-chevron-down' }, null, -1)),
						Ft(
							g(
								'ul',
								TL,
								[
									(h(!0),
									_(
										K,
										null,
										he(
											o.featureList,
											(l) => (
												h(),
												_('li', { key: l.value, onClick: (c) => o.onSelect(l) }, D(l.label), 9, AL)
											)
										),
										128
									)),
								],
								512
							),
							[[Ss, o.isFocus]]
						),
					]),
				]),
				g('div', LL, [
					t[5] || (t[5] = g('label', { for: 'embedType' }, '嵌入方式：', -1)),
					g('div', BL, [
						(h(!0),
						_(
							K,
							null,
							he(
								o.embedTypeList,
								(l) => (
									h(),
									_('label', { key: l.label }, [
										Ft(
											g(
												'input',
												{
													'onUpdate:modelValue': t[0] || (t[0] = (c) => (o.embedType = c)),
													type: 'radio',
													name: 'embedType',
													value: l.value,
												},
												null,
												8,
												OL
											),
											[[B_, o.embedType]]
										),
										g('span', null, D(l.label), 1),
										l.value === 'image'
											? (h(), N(s, { key: 0, type: 'warning', text: '不推荐' }))
											: A('', !0),
									])
								)
							),
							128
						)),
					]),
				]),
				o.embedType
					? A('', !0)
					: (h(),
					  _('div', VL, [
							t[7] || (t[7] = g('span', null, '浏览器版本：', -1)),
							g('div', $L, [
								Ft(
									g(
										'select',
										{ 'onUpdate:modelValue': t[1] || (t[1] = (l) => (o.past = l)), name: 'past' },
										[
											(h(!0),
											_(
												K,
												null,
												he(
													o.pastList,
													(l) => (
														h(), _('option', { key: l.value, value: l.value }, D(l.label), 9, IL)
													)
												),
												128
											)),
										],
										512
									),
									[[gu, o.past]]
								),
								t[6] || (t[6] = g('span', null, '-', -1)),
								Ft(
									g(
										'select',
										{
											'onUpdate:modelValue': t[2] || (t[2] = (l) => (o.future = l)),
											name: 'future',
										},
										[
											(h(!0),
											_(
												K,
												null,
												he(
													o.futureList,
													(l) => (
														h(), _('option', { key: l.value, value: l.value }, D(l.label), 9, RL)
													)
												),
												128
											)),
										],
										512
									),
									[[gu, o.future]]
								),
							]),
					  ])),
			]),
			g('div', DL, [
				t[8] || (t[8] = g('h4', null, '输出：', -1)),
				O(o.CodeViewer, { lang: 'md', content: o.output }, null, 8, ['content']),
			]),
			o.embedType === 'image'
				? (h(), _('div', { key: 0, innerHTML: o.rendered }, null, 8, ML))
				: o.feature
				? (h(),
				  N(a, { key: 1, feature: o.feature, past: o.past, future: o.future }, null, 8, [
						'feature',
						'past',
						'future',
				  ]))
				: A('', !0),
		])
	)
}
const FL = M(EL, [
		['render', NL],
		['__scopeId', 'data-v-b08b8b1e'],
		['__file', 'CanIUseConfig.vue'],
	]),
	jL = $({
		__name: 'Contributors',
		props: { contributors: {} },
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = E(() => n.contributors.map((i) => (typeof i == 'string' ? { github: i, name: i } : i))),
				r = { props: n, list: o }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	HL = { class: 'contributors' },
	zL = ['src', 'alt'],
	qL = ['href']
function UL(e, t, n, o, r, i) {
	return (
		h(),
		_('div', HL, [
			(h(!0),
			_(
				K,
				null,
				he(
					o.list,
					(s) => (
						h(),
						_('div', { key: s.github, class: 'contributor' }, [
							g(
								'img',
								{ src: `https://avatars.githubusercontent.com/${s.github}?v=4`, alt: s.name },
								null,
								8,
								zL
							),
							g(
								'a',
								{
									href: `https://github.com/${s.github}`,
									target: '_blank',
									rel: 'noopener noreferrer',
								},
								D(s.name),
								9,
								qL
							),
						])
					)
				),
				128
			)),
		])
	)
}
const WL = M(jL, [
		['render', UL],
		['__scopeId', 'data-v-db2be91a'],
		['__file', 'Contributors.vue'],
	]),
	GL = $({
		__name: 'Demos',
		props: { list: {} },
		setup(e, { expose: t }) {
			t()
			const n = {}
			return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
		},
	}),
	KL = { class: 'demos' },
	YL = { class: 'demo-img' },
	QL = ['href'],
	JL = ['src', 'alt'],
	XL = { class: 'demo-content' },
	ZL = { class: 'demo-title' },
	eB = { class: 'title' },
	tB = ['href', 'aria-label', 'title'],
	nB = ['href'],
	oB = ['title']
function rB(e, t, n, o, r, i) {
	return (
		h(),
		_('div', KL, [
			(h(!0),
			_(
				K,
				null,
				he(
					n.list,
					(s) => (
						h(),
						_('div', { key: s.url, class: 'demo-item' }, [
							g('div', YL, [
								g(
									'a',
									{ href: s.url, target: '_blank', rel: 'noopener noreferrer' },
									[g('img', { src: s.preview, alt: s.name, loading: 'lazy' }, null, 8, JL)],
									8,
									QL
								),
							]),
							g('div', XL, [
								g('h3', ZL, [
									s.logo
										? (h(),
										  _(
												'span',
												{ key: 0, class: 'logo', style: xe(`background-image: url(${s.logo})`) },
												null,
												4
										  ))
										: A('', !0),
									g('span', eB, [
										g(
											'a',
											{
												href: s.url,
												target: '_blank',
												rel: 'noopener noreferrer',
												'aria-label': s.name,
												title: s.name,
											},
											D(s.name),
											9,
											tB
										),
									]),
									s.repo
										? (h(),
										  _(
												'a',
												{
													key: 1,
													href: s.repo,
													class: 'github',
													target: '_blank',
													rel: 'noopener noreferrer',
												},
												t[0] || (t[0] = [g('span', { class: 'vpi-social-github' }, null, -1)]),
												8,
												nB
										  ))
										: A('', !0),
								]),
								g('p', { title: s.desc }, D(s.desc), 9, oB),
							]),
						])
					)
				),
				128
			)),
		])
	)
}
const iB = M(GL, [
		['render', rB],
		['__scopeId', 'data-v-2cadba3a'],
		['__file', 'Demos.vue'],
	]),
	sB = $({
		__name: 'InputRange',
		props: gp(
			{ min: { default: 0 }, max: {}, step: { default: 1 } },
			{ modelValue: { required: !0 }, modelModifiers: {} }
		),
		emits: ['update:modelValue'],
		setup(e, { expose: t }) {
			t()
			const n = e,
				o = ci(e, 'modelValue', {
					set(i) {
						return Math.min(Math.max(i, n.min), n.max)
					},
				}),
				r = { props: n, value: o }
			return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
		},
	}),
	aB = ['min', 'max', 'step'],
	lB = ['min', 'max', 'step']
function cB(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				Ft(
					g(
						'input',
						{
							'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.value = s)),
							type: 'range',
							min: n.min,
							max: n.max,
							step: n.step,
						},
						null,
						8,
						aB
					),
					[[Da, o.value]]
				),
				Ft(
					g(
						'input',
						{
							'onUpdate:modelValue': t[1] || (t[1] = (s) => (o.value = s)),
							type: 'number',
							min: n.min,
							max: n.max,
							step: n.step,
						},
						null,
						8,
						lB
					),
					[[Da, o.value]]
				),
			],
			64
		)
	)
}
const Ec = M(sB, [
		['render', cB],
		['__scopeId', 'data-v-dd830431'],
		['__file', 'InputRange.vue'],
	]),
	uB = 20,
	dB = 240,
	fB = $({
		__name: 'CustomTintPlate',
		props: { modelValue: { required: !0 }, modelModifiers: {} },
		emits: ['update:modelValue'],
		setup(e, { expose: t }) {
			t()
			const n = ci(e, 'modelValue'),
				o = E(() => 256 - n.value.r.value),
				r = E(() => 256 - n.value.g.value),
				i = E(() => 256 - n.value.b.value)
			function s(l) {
				return ve(
					() => n.value[l].value,
					(c) => {
						const u = 256 - c
						n.value[l].offset > u && (n.value[l].offset = u)
					}
				)
			}
			s('r'), s('g'), s('b')
			const a = {
				min: uB,
				max: dB,
				tintPlate: n,
				offsetRMax: o,
				offsetGMax: r,
				offsetBMax: i,
				addWatch: s,
				InputRange: Ec,
			}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	}),
	pB = { class: 'custom-tint-plate' },
	hB = { class: 'custom-tint-plate' },
	mB = { class: 'custom-tint-plate' }
function vB(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				t[12] ||
					(t[12] = g(
						'p',
						null,
						'浅色模式建议使用 "150 ~ 240" 之间的值， 深色模式建议使用 "20 ~ 80" 之间的值：',
						-1
					)),
				g('div', pB, [
					t[6] || (t[6] = g('span', null, 'R:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.r.value,
							'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.tintPlate.r.value = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
					t[7] || (t[7] = g('span', { class: 'offset' }, 'offset', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.r.offset,
							'onUpdate:modelValue': t[1] || (t[1] = (s) => (o.tintPlate.r.offset = s)),
							max: o.offsetRMax,
						},
						null,
						8,
						['modelValue', 'max']
					),
				]),
				g('div', hB, [
					t[8] || (t[8] = g('span', null, 'G:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.g.value,
							'onUpdate:modelValue': t[2] || (t[2] = (s) => (o.tintPlate.g.value = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
					t[9] || (t[9] = g('span', { class: 'offset' }, 'offset', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.g.offset,
							'onUpdate:modelValue': t[3] || (t[3] = (s) => (o.tintPlate.g.offset = s)),
							max: o.offsetGMax,
						},
						null,
						8,
						['modelValue', 'max']
					),
				]),
				g('div', mB, [
					t[10] || (t[10] = g('span', null, 'B:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.b.value,
							'onUpdate:modelValue': t[4] || (t[4] = (s) => (o.tintPlate.b.value = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
					t[11] || (t[11] = g('span', { class: 'offset' }, 'offset', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate.b.offset,
							'onUpdate:modelValue': t[5] || (t[5] = (s) => (o.tintPlate.b.offset = s)),
							max: o.offsetBMax,
						},
						null,
						8,
						['modelValue', 'max']
					),
				]),
			],
			64
		)
	)
}
const gB = M(fB, [
		['render', vB],
		['__scopeId', 'data-v-27c81fad'],
		['__file', 'CustomTintPlate.vue'],
	]),
	_B = {},
	bB = { class: 'demo-wrapper no-padding has-title' },
	yB = { class: 'demo-container' }
function wB(e, t) {
	return (
		h(),
		_('div', bB, [
			t[0] ||
				(t[0] = g(
					'div',
					{ class: 'demo-head' },
					[g('div', { class: 'demo-ctrl' }, [g('i'), g('i'), g('i')])],
					-1
				)),
			g('div', yB, [C(e.$slots, 'default')]),
		])
	)
}
const kB = M(_B, [
		['render', wB],
		['__file', 'DemoWrapper.vue'],
	]),
	EB = $({
		__name: 'SingleTintPlate',
		props: { modelValue: { required: !0 }, modelModifiers: {} },
		emits: ['update:modelValue'],
		setup(e, { expose: t }) {
			t()
			const o = { tintPlate: ci(e, 'modelValue'), InputRange: Ec }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	xB = { class: 'single-tint-plate' }
function PB(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				t[2] ||
					(t[2] = g(
						'p',
						null,
						'浅色模式建议使用 "150 ~ 240" 之间的值， 深色模式建议使用 "20 ~ 80" 之间的值：',
						-1
					)),
				g('div', xB, [
					t[1] || (t[1] = g('span', null, 'RGB:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate,
							'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.tintPlate = s)),
							max: 240,
							min: 20,
						},
						null,
						8,
						['modelValue']
					),
				]),
			],
			64
		)
	)
}
const SB = M(EB, [
		['render', PB],
		['__scopeId', 'data-v-23f2c9af'],
		['__file', 'SingleTintPlate.vue'],
	]),
	CB = 20,
	TB = 240,
	AB = $({
		__name: 'TripletTintPlate',
		props: { modelValue: { required: !0 }, modelModifiers: {} },
		emits: ['update:modelValue'],
		setup(e, { expose: t }) {
			t()
			const n = ci(e, 'modelValue'),
				o = { min: CB, max: TB, tintPlate: n, InputRange: Ec }
			return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
		},
	}),
	LB = { class: 'triplet-tint-plate' },
	BB = { class: 'triplet-tint-plate' },
	OB = { class: 'triplet-tint-plate' }
function VB(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				t[6] ||
					(t[6] = g(
						'p',
						null,
						'浅色模式建议使用 "150 ~ 240" 之间的值， 深色模式建议使用 "20 ~ 80" 之间的值：',
						-1
					)),
				g('div', LB, [
					t[3] || (t[3] = g('span', null, 'R:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate[0],
							'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.tintPlate[0] = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
				]),
				g('div', BB, [
					t[4] || (t[4] = g('span', null, 'G:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate[1],
							'onUpdate:modelValue': t[1] || (t[1] = (s) => (o.tintPlate[1] = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
				]),
				g('div', OB, [
					t[5] || (t[5] = g('span', null, 'B:', -1)),
					O(
						o.InputRange,
						{
							modelValue: o.tintPlate[2],
							'onUpdate:modelValue': t[2] || (t[2] = (s) => (o.tintPlate[2] = s)),
							min: o.min,
							max: o.max,
						},
						null,
						8,
						['modelValue']
					),
				]),
			],
			64
		)
	)
}
const $B = M(AB, [
		['render', VB],
		['__scopeId', 'data-v-6f6e3343'],
		['__file', 'TripletTintPlate.vue'],
	]),
	IB = $({
		__name: 'HeroTintPlateConfig',
		setup(e, { expose: t }) {
			t()
			const n = {
					name: 'Theme Plume',
					tagline: 'Next Theme',
					text: '简约的，功能丰富',
					actions: [],
				},
				o = [
					{ value: 'single', label: '单色' },
					{ value: 'triplet', label: '三色' },
					{ value: 'custom', label: '三色+偏移' },
				],
				r = R('single'),
				i = R(220),
				s = R([220, 220, 220]),
				a = R({
					r: { value: 220, offset: 36 },
					g: { value: 220, offset: 36 },
					b: { value: 220, offset: 36 },
				}),
				l = E(() => {
					switch (r.value) {
						case 'single':
							return i.value
						case 'triplet':
							return s.value.join(',')
						case 'custom':
							return a.value
						default:
							return ''
					}
				}),
				c = R(!1)
			ve(
				mi(),
				(f) => {
					c.value = f
				},
				{ immediate: !0 }
			)
			const u = E(() => {
					const f = l.value
					let p = `---
home: true
config:
  -
    type: hero
    background: tint-plate
    tintPlate:`
					return (
						(typeof f == 'number' || typeof f == 'string') && (p += `  ${f}`),
						typeof f == 'object' &&
							(p += `
      r:
        value: ${f.r.value}
        offset: ${f.r.offset}
      g:
        value: ${f.g.value}
        offset: ${f.g.offset}
      b:
        value: ${f.b.value}
        offset: ${f.b.offset}`),
						`${p}
---`
					)
				}),
				d = {
					hero: n,
					modeList: o,
					mode: r,
					singleTintPlate: i,
					tripletTintPlate: s,
					customTintPlate: a,
					tintPlate: l,
					isDark: c,
					output: u,
					VPHomeHero: Rv,
					CodeViewer: kc,
					CustomTintPlate: gB,
					DemoWrapper: kB,
					SingleTintPlate: SB,
					TripletTintPlate: $B,
				}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	RB = { class: 'hero-tint-plate-wrapper' },
	DB = { class: 'mode-content' },
	MB = ['onClick'],
	NB = { class: 'tint-plate-' },
	FB = { class: 'hero-tint-plate-output' }
function jB(e, t, n, o, r, i) {
	return (
		h(),
		_('div', RB, [
			t[6] || (t[6] = g('h4', null, '效果预览：', -1)),
			g(
				'div',
				{ class: J({ dark: o.isDark }) },
				[
					O(o.DemoWrapper, null, {
						default: T(() => [
							O(
								o.VPHomeHero,
								{ type: 'hero', background: 'tint-plate', 'tint-plate': o.tintPlate, hero: o.hero },
								null,
								8,
								['tint-plate']
							),
						]),
						_: 1,
					}),
				],
				2
			),
			g('p', null, [
				g('label', null, [
					Ft(
						g(
							'input',
							{ 'onUpdate:modelValue': t[0] || (t[0] = (s) => (o.isDark = s)), type: 'checkbox' },
							null,
							512
						),
						[[L_, o.isDark]]
					),
					t[4] || (t[4] = Te(' 深色模式 ')),
				]),
			]),
			g('div', DB, [
				(h(),
				_(
					K,
					null,
					he(o.modeList, (s) =>
						g(
							'div',
							{
								key: s.value,
								class: J(['mode', { active: o.mode === s.value }]),
								onClick: (a) => (o.mode = s.value),
							},
							D(s.label),
							11,
							MB
						)
					),
					64
				)),
			]),
			g('div', NB, [
				o.mode === 'single'
					? (h(),
					  N(
							o.SingleTintPlate,
							{
								key: 0,
								modelValue: o.singleTintPlate,
								'onUpdate:modelValue': t[1] || (t[1] = (s) => (o.singleTintPlate = s)),
							},
							null,
							8,
							['modelValue']
					  ))
					: A('', !0),
				o.mode === 'triplet'
					? (h(),
					  N(
							o.TripletTintPlate,
							{
								key: 1,
								modelValue: o.tripletTintPlate,
								'onUpdate:modelValue': t[2] || (t[2] = (s) => (o.tripletTintPlate = s)),
							},
							null,
							8,
							['modelValue']
					  ))
					: A('', !0),
				o.mode === 'custom'
					? (h(),
					  N(
							o.CustomTintPlate,
							{
								key: 2,
								modelValue: o.customTintPlate,
								'onUpdate:modelValue': t[3] || (t[3] = (s) => (o.customTintPlate = s)),
							},
							null,
							8,
							['modelValue']
					  ))
					: A('', !0),
			]),
			g('div', FB, [
				t[5] || (t[5] = g('h4', null, '输出：', -1)),
				O(o.CodeViewer, { lang: 'text', content: o.output }, null, 8, ['content']),
			]),
		])
	)
}
const HB = M(IB, [
		['render', jB],
		['__scopeId', 'data-v-c24eb876'],
		['__file', 'HeroTintPlateConfig.vue'],
	]),
	zB = {
		light: {
			'--vp-c-brand-1': '#5086a1',
			'--vp-c-brand-2': '#6aa1b7',
			'--vp-c-brand-3': '#8cccd5',
			'--vp-c-brand-soft': 'rgba(131, 208, 218, 0.314)',
			'--vp-c-text-1': 'rgba(60, 60, 67)',
			'--vp-c-text-2': 'rgba(60, 60, 67, 0.78)',
			'--vp-c-text-3': 'rgba(60, 60, 67, 0.56)',
			'--vp-c-bg': '#fff',
			'--vp-nav-bg-color': '#fff',
			'--vp-nav-screen-bg-color': '#fff',
			'--vp-local-nav-bg-color': '#fff',
			'--vp-sidebar-bg-color': '#f6f6f7',
			'--vp-code-block-bg': '#f6f8fa',
		},
		dark: {
			'--vp-c-brand-1': '#8cccd5',
			'--vp-c-brand-2': '#6aa1b7',
			'--vp-c-brand-3': '#5086a1',
			'--vp-c-brand-soft': 'rgba(131, 208, 218, 0.314)',
			'--vp-c-text-1': 'rgba(255, 255, 245, 0.86)',
			'--vp-c-text-2': 'rgba(235, 235, 245, 0.6)',
			'--vp-c-text-3': 'rgba(235, 235, 245, 0.38)',
			'--vp-c-bg': '#1b1b1f',
			'--vp-nav-bg-color': '#1b1b1f',
			'--vp-nav-screen-bg-color': '#1b1b1f',
			'--vp-local-nav-bg-color': '#1b1b1f',
			'--vp-sidebar-bg-color': '#161618',
			'--vp-code-block-bg': '#202127',
		},
	},
	qB = [
		{
			name: '主题色',
			group: [
				{ name: 'brand-1', key: '--vp-c-brand-1', value: '', desc: '链接颜色、强调色' },
				{ name: 'brand-2', key: '--vp-c-brand-2', value: '', desc: '链接、按钮 hover 颜色' },
				{ name: 'brand-3', key: '--vp-c-brand-3', value: '', desc: '背景色、边框色' },
				{ name: 'brand-soft', key: '--vp-c-brand-soft', value: '', desc: '辅助色' },
			],
		},
		{
			name: '文本颜色',
			group: [
				{ name: 'text-1', key: '--vp-c-text-1', value: '', desc: '主要文本' },
				{ name: 'text-2', key: '--vp-c-text-2', value: '', desc: '次要文本' },
				{ name: 'text-3', key: '--vp-c-text-3', value: '', desc: '辅助文本' },
			],
		},
		{
			name: '背景色',
			group: [
				{ name: 'bg', key: '--vp-c-bg', value: '', desc: '主体背景' },
				{ name: 'nav-bg', key: '--vp-nav-bg-color', value: '', desc: '导航栏背景' },
				{ name: 'nav-screen-bg', key: '--vp-nav-screen-bg-color', value: '', desc: '移动端导航栏' },
				{ name: 'local-nav-bg', key: '--vp-local-nav-bg-color', value: '', desc: '页面内导航栏' },
				{ name: 'sidebar-bg', key: '--vp-sidebar-bg-color', value: '', desc: '侧边栏背景' },
				{ name: 'code-block-bg', key: '--vp-code-block-bg', value: '', desc: '代码块背景' },
			],
		},
	],
	jv = Symbol('')
function UB() {
	const e = rs('custom-theme-colors-light', $i('light')),
		t = rs('custom-theme-colors-dark', $i('dark')),
		{ css: n, load: o } = ay('')
	ve(
		[e, t],
		() => {
			const s = `${r(e.value, 'light')}
${r(t.value, 'dark')}`
			;(n.value = s), o()
		},
		{ deep: !0, immediate: !0 }
	)
	function r(s, a) {
		let c = `${a === 'light' ? ':root' : '[data-theme="dark"]'} {
`
		return (
			s.forEach(({ name: u, group: d }) => {
				;(c += `
  /**
   * ${u}
   * -------------------------------------------------------------------------- */

`),
					d.forEach((f) => {
						const p = `  ${f.key}: ${f.value};`
						c += `${p}${' '.repeat(54 - p.length)}/* ${f.desc} */
`
					})
			}),
			(c += `}
`),
			c
		)
	}
	function i() {
		;(e.value = $i('light')), (t.value = $i('dark'))
	}
	rn(jv, { lightColors: e, darkColors: t, css: n, reset: i })
}
function $i(e) {
	return qB.map((t) => ({
		name: t.name,
		group: t.group.map((n) => ({ ...n, value: zB[e][n.key] })),
	}))
}
function WB() {
	const e = qe(jv)
	if (!e) throw new Error('useThemeColors() can only be used inside `setupThemeColors()`.')
	return e
}
const GB = $({
		__name: 'ColorPick',
		props: { modelValue: { default: 'rgba(0,0,0,1)' }, modelModifiers: {} },
		emits: gp(['update:modelValue'], ['update:modelValue']),
		setup(e, { expose: t, emit: n }) {
			t()
			const o = n,
				r = ci(e, 'modelValue'),
				i = R()
			let s
			ke(async () => {
				if (!i.value || s) return
				const { default: l } = await L(async () => {
					const { default: c } = await import('./pickr.min-DoZ7_gfX.js').then((u) => u.p)
					return { default: c }
				}, [])
				;(s = l.create({
					el: i.value,
					theme: 'nano',
					default: r.value,
					defaultRepresentation: 'RGBA',
					showAlways: !1,
					components: { preview: !0, opacity: !0, hue: !0, interaction: { input: !0 } },
				})),
					s.on('change', (c) => {
						o('update:modelValue', c.toRGBA().toString(0))
					}),
					ve(r, () => {
						s == null || s.setColor(r.value)
					})
			}),
				gt(() => {
					s == null || s.destroyAndRemove(), (s = null)
				})
			const a = {
				emit: o,
				color: r,
				pickerEl: i,
				get picker() {
					return s
				},
				set picker(l) {
					s = l
				},
			}
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	}),
	KB = { class: 'color-picker' },
	YB = { ref: 'pickerEl' }
function QB(e, t, n, o, r, i) {
	return h(), _('div', KB, [g('div', YB, null, 512)])
}
const JB = M(GB, [
		['render', QB],
		['__file', 'ColorPick.vue'],
	]),
	XB = $({
		__name: 'ThemeColors',
		setup(e, { expose: t }) {
			t()
			const { lightColors: n, darkColors: o, css: r, reset: i } = WB(),
				s = {
					lightColors: n,
					darkColors: o,
					css: r,
					reset: i,
					VPButton: bc,
					CodeViewer: kc,
					ColorPick: JB,
				}
			return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
		},
	}),
	ZB = { class: 'theme-colors-wrapper' },
	eO = { class: 'desc' },
	tO = { class: 'theme-colors-wrapper' },
	nO = { class: 'desc' }
function oO(e, t, n, o, r, i) {
	return (
		h(),
		_(
			K,
			null,
			[
				O(o.VPButton, { theme: 'alt', text: '重置', onClick: o.reset }, null, 8, ['onClick']),
				t[0] || (t[0] = g('h2', null, '浅色主题', -1)),
				g('div', ZB, [
					(h(!0),
					_(
						K,
						null,
						he(
							o.lightColors,
							({ name: s, group: a }, l) => (
								h(),
								_('div', { key: l, class: 'group' }, [
									g('h4', null, D(s), 1),
									(h(!0),
									_(
										K,
										null,
										he(
											a,
											(c) => (
												h(),
												_('section', { key: c.key, class: 'theme-color' }, [
													O(
														o.ColorPick,
														{ modelValue: c.value, 'onUpdate:modelValue': (u) => (c.value = u) },
														null,
														8,
														['modelValue', 'onUpdate:modelValue']
													),
													g('div', null, [
														g('h5', null, D(c.name), 1),
														g('span', eO, D(c.desc), 1),
													]),
												])
											)
										),
										128
									)),
								])
							)
						),
						128
					)),
				]),
				t[1] || (t[1] = g('h2', null, '深色主题', -1)),
				g('div', tO, [
					(h(!0),
					_(
						K,
						null,
						he(
							o.darkColors,
							({ name: s, group: a }, l) => (
								h(),
								_('div', { key: l, class: 'group' }, [
									g('h4', null, D(s), 1),
									(h(!0),
									_(
										K,
										null,
										he(
											a,
											(c) => (
												h(),
												_('section', { key: c.key, class: 'theme-color' }, [
													O(
														o.ColorPick,
														{ modelValue: c.value, 'onUpdate:modelValue': (u) => (c.value = u) },
														null,
														8,
														['modelValue', 'onUpdate:modelValue']
													),
													g('div', null, [
														g('h5', null, D(c.name), 1),
														g('span', nO, D(c.desc), 1),
													]),
												])
											)
										),
										128
									)),
								])
							)
						),
						128
					)),
				]),
				t[2] ||
					(t[2] = g(
						'p',
						null,
						[
							Te('复制下方的代码到您的项目中，请参考 '),
							g('a', { href: '/blog/guide/custom-style/' }, '主题定制'),
						],
						-1
					)),
				O(o.CodeViewer, { content: o.css, lang: 'css' }, null, 8, ['content']),
			],
			64
		)
	)
}
const rO = M(XB, [
		['render', oO],
		['__scopeId', 'data-v-6ddfcb22'],
		['__file', 'ThemeColors.vue'],
	]),
	iO = Mn({
		enhance({ app: e }) {
			e.component('HeroTintPlateConfig', HB),
				e.component('CanIUseConfig', FL),
				e.component('Demos', iB),
				e.component('ThemeColors', rO),
				e.component('Contributors', WL)
		},
		setup() {
			UB()
		},
	}),
	sO = Object.freeze(
		Object.defineProperty({ __proto__: null, default: iO }, Symbol.toStringTag, { value: 'Module' })
	),
	Ii = [Cb, Bb, Oy, Wy, f2, b3, y3, i8, J4, X4, _5, C5, cL, sO]
		.map((e) => e.default)
		.filter(Boolean),
	aO = JSON.parse(
		'{"base":"/","lang":"zh-CN","title":"","description":"","head":[["link",{"rel":"icon","type":"image/png","sizes":"32x32","href":"/favicon-32x32.png"}],["link",{"rel":"icon","type":"image/png","sizes":"16x16","href":"/favicon-16x16.png"}],["meta",{"name":"google-site-verification","content":"X5YSaTDn-pKqQBUKD_05_dQcxVItzEq7Rlbg2ZEU7AM"}]],"locales":{"/":{"title":"前端","lang":"zh-CN"}}}'
	)
var Er = Ie(aO),
	lO = I0,
	cO = () => {
		const e = vb({
			history: lO(rh('/')),
			routes: [{ name: 'vuepress-route', path: '/:catchAll(.*)', components: {} }],
			scrollBehavior: (t, n, o) => o || (t.hash ? { el: t.hash } : { top: 0 }),
		})
		return (
			e.beforeResolve(async (t, n) => {
				if (t.path !== n.path || n === wn) {
					const o = Xo(t.fullPath)
					if (o.path !== t.fullPath) return o.path
					const r = await o.loader()
					t.meta = { ...o.meta, _pageChunk: r }
				} else t.path === n.path && (t.meta = n.meta)
			}),
			e
		)
	},
	uO = (e) => {
		e.component('ClientOnly', Eb), e.component('Content', Bh), e.component('RouteLink', kb)
	},
	dO = (e, t, n) => {
		const o = E(() => t.currentRoute.value.path),
			r = bs((b, w) => ({
				get() {
					return b(), t.currentRoute.value.meta._pageChunk
				},
				set(P) {
					;(t.currentRoute.value.meta._pageChunk = P), w()
				},
			})),
			i = E(() => lo.resolveLayouts(n)),
			s = E(() => lo.resolveRouteLocale(Er.value.locales, o.value)),
			a = E(() => lo.resolveSiteLocaleData(Er.value, s.value)),
			l = E(() => r.value.comp),
			c = E(() => r.value.data),
			u = E(() => c.value.frontmatter),
			d = E(() => lo.resolvePageHeadTitle(c.value, a.value)),
			f = E(() => lo.resolvePageHead(d.value, u.value, a.value)),
			p = E(() => lo.resolvePageLang(c.value, a.value)),
			m = E(() => lo.resolvePageLayout(c.value, i.value)),
			v = {
				layouts: i,
				pageData: c,
				pageComponent: l,
				pageFrontmatter: u,
				pageHead: f,
				pageHeadTitle: d,
				pageLang: p,
				pageLayout: m,
				redirects: za,
				routeLocale: s,
				routePath: o,
				routes: zo,
				siteData: Er,
				siteLocaleData: a,
			}
		return (
			e.provide(zl, v),
			Object.defineProperties(e.config.globalProperties, {
				$frontmatter: { get: () => u.value },
				$head: { get: () => f.value },
				$headTitle: { get: () => d.value },
				$lang: { get: () => p.value },
				$page: { get: () => c.value },
				$routeLocale: { get: () => s.value },
				$site: { get: () => Er.value },
				$siteLocale: { get: () => a.value },
				$withBase: { get: () => et },
			}),
			v
		)
	},
	fO = ([e, t, n = '']) => {
		const o = Object.entries(t)
				.map(([a, l]) => (sn(l) ? `[${a}=${JSON.stringify(l)}]` : l ? `[${a}]` : ''))
				.join(''),
			r = `head > ${e}${o}`
		return Array.from(document.querySelectorAll(r)).find((a) => a.innerText === n) ?? null
	},
	pO = ([e, t, n]) => {
		if (!sn(e)) return null
		const o = document.createElement(e)
		return (
			Kt(t) &&
				Object.entries(t).forEach(([r, i]) => {
					sn(i) ? o.setAttribute(r, i) : i && o.setAttribute(r, '')
				}),
			sn(n) && o.appendChild(document.createTextNode(n)),
			o
		)
	},
	hO = () => {
		const e = _b(),
			t = oo()
		let n = []
		const o = () => {
				e.value.forEach((s) => {
					const a = fO(s)
					a && n.push(a)
				})
			},
			r = () => {
				const s = []
				return (
					e.value.forEach((a) => {
						const l = pO(a)
						l && s.push(l)
					}),
					s
				)
			},
			i = () => {
				document.documentElement.lang = t.value
				const s = r()
				n.forEach((a, l) => {
					const c = s.findIndex((u) => a.isEqualNode(u))
					c === -1 ? (a.remove(), delete n[l]) : s.splice(c, 1)
				}),
					s.forEach((a) => document.head.appendChild(a)),
					(n = [...n.filter((a) => !!a), ...s])
			}
		rn(yb, i),
			ke(() => {
				o(), ve(e, i, { immediate: !1 })
			})
	},
	mO = M_,
	vO = async () => {
		var o
		const e = mO({
				name: 'Vuepress',
				setup() {
					var s
					hO()
					for (const a of Ii) (s = a.setup) == null || s.call(a)
					const r = Ii.flatMap(({ rootComponents: a = [] }) => a.map((l) => ce(l))),
						i = bb()
					return () => [ce(i.value), r]
				},
			}),
			t = cO()
		uO(e)
		const n = dO(e, t, Ii)
		{
			const { setupDevtools: r } = await L(async () => {
				const { setupDevtools: i } = await import('./setupDevtools-7MC2TMWH-D7shIe9W.js')
				return { setupDevtools: i }
			}, [])
			r(e, n)
		}
		for (const r of Ii)
			await ((o = r.enhance) == null ? void 0 : o.call(r, { app: e, router: t, siteData: Er }))
		return e.use(t), { app: e, router: t }
	}
vO().then(({ app: e, router: t }) => {
	t.isReady().then(() => {
		e.mount('#app')
	})
})
export {
	gO as $,
	rn as A,
	ze as B,
	st as C,
	Ob as D,
	hn as E,
	K as F,
	Rn as G,
	Ky as H,
	Ie as I,
	_O as J,
	rs as K,
	qb as L,
	ht as M,
	Nu as N,
	sr as O,
	Fe as P,
	Kl as Q,
	Vl as R,
	et as S,
	bO as T,
	zf as U,
	fx as V,
	Qp as W,
	Ft as X,
	Da as Y,
	J as Z,
	M as _,
	Q1 as a,
	L as a0,
	dp as a1,
	ce as a2,
	v1 as a3,
	Ed as a4,
	gt as a5,
	O as b,
	_ as c,
	vO as createVueApp,
	g as d,
	Te as e,
	R as f,
	ke as g,
	he as h,
	N as i,
	C as j,
	$ as k,
	bP as l,
	zt as m,
	VC as n,
	h as o,
	ve as p,
	E as q,
	Re as r,
	Et as s,
	D as t,
	Ua as u,
	yo as v,
	T as w,
	xe as x,
	A as y,
	qe as z,
}
