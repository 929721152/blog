import {
	f as $,
	a1 as Re,
	A as je,
	p as dt,
	M as ut,
	g as We,
	R as Xe,
	a2 as j,
	a3 as pt,
	q as ne,
	k as Ye,
	_ as Ue,
	r as Ae,
	o as z,
	i as N,
	w as X,
	b as se,
	m as ct,
	c as me,
	F as ft,
	h as ht,
	d as D,
	e as W,
	a as G,
	y as R,
} from './app-B_7CxFr0.js'
function Le(s) {
	return s !== null && typeof s == 'object' && 'constructor' in s && s.constructor === Object
}
function Oe(s, e) {
	s === void 0 && (s = {}),
		e === void 0 && (e = {}),
		Object.keys(e).forEach((t) => {
			typeof s[t] > 'u'
				? (s[t] = e[t])
				: Le(e[t]) && Le(s[t]) && Object.keys(e[t]).length > 0 && Oe(s[t], e[t])
		})
}
const Ke = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: '' },
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return { initEvent() {} }
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			},
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: '',
	},
}
function Q() {
	const s = typeof document < 'u' ? document : {}
	return Oe(s, Ke), s
}
const mt = {
	document: Ke,
	navigator: { userAgent: '' },
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: '',
	},
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ''
			},
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(s) {
		return typeof setTimeout > 'u' ? (s(), null) : setTimeout(s, 0)
	},
	cancelAnimationFrame(s) {
		typeof setTimeout > 'u' || clearTimeout(s)
	},
}
function V() {
	const s = typeof window < 'u' ? window : {}
	return Oe(s, mt), s
}
function gt(s) {
	return (
		s === void 0 && (s = ''),
		s
			.trim()
			.split(' ')
			.filter((e) => !!e.trim())
	)
}
function vt(s) {
	const e = s
	Object.keys(e).forEach((t) => {
		try {
			e[t] = null
		} catch {}
		try {
			delete e[t]
		} catch {}
	})
}
function ue(s, e) {
	return e === void 0 && (e = 0), setTimeout(s, e)
}
function Z() {
	return Date.now()
}
function yt(s) {
	const e = V()
	let t
	return (
		e.getComputedStyle && (t = e.getComputedStyle(s, null)),
		!t && s.currentStyle && (t = s.currentStyle),
		t || (t = s.style),
		t
	)
}
function wt(s, e) {
	e === void 0 && (e = 'x')
	const t = V()
	let i, a, n
	const o = yt(s)
	return (
		t.WebKitCSSMatrix
			? ((a = o.transform || o.webkitTransform),
			  a.split(',').length > 6 &&
					(a = a
						.split(', ')
						.map((l) => l.replace(',', '.'))
						.join(', ')),
			  (n = new t.WebKitCSSMatrix(a === 'none' ? '' : a)))
			: ((n =
					o.MozTransform ||
					o.OTransform ||
					o.MsTransform ||
					o.msTransform ||
					o.transform ||
					o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
			  (i = n.toString().split(','))),
		e === 'x' &&
			(t.WebKitCSSMatrix
				? (a = n.m41)
				: i.length === 16
				? (a = parseFloat(i[12]))
				: (a = parseFloat(i[4]))),
		e === 'y' &&
			(t.WebKitCSSMatrix
				? (a = n.m42)
				: i.length === 16
				? (a = parseFloat(i[13]))
				: (a = parseFloat(i[5]))),
		a || 0
	)
}
function fe(s) {
	return (
		typeof s == 'object' &&
		s !== null &&
		s.constructor &&
		Object.prototype.toString.call(s).slice(8, -1) === 'Object'
	)
}
function kt(s) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u'
		? s instanceof HTMLElement
		: s && (s.nodeType === 1 || s.nodeType === 11)
}
function H() {
	const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		e = ['__proto__', 'constructor', 'prototype']
	for (let t = 1; t < arguments.length; t += 1) {
		const i = t < 0 || arguments.length <= t ? void 0 : arguments[t]
		if (i != null && !kt(i)) {
			const a = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0)
			for (let n = 0, o = a.length; n < o; n += 1) {
				const l = a[n],
					r = Object.getOwnPropertyDescriptor(i, l)
				r !== void 0 &&
					r.enumerable &&
					(fe(s[l]) && fe(i[l])
						? i[l].__swiper__
							? (s[l] = i[l])
							: H(s[l], i[l])
						: !fe(s[l]) && fe(i[l])
						? ((s[l] = {}), i[l].__swiper__ ? (s[l] = i[l]) : H(s[l], i[l]))
						: (s[l] = i[l]))
			}
		}
	}
	return s
}
function he(s, e, t) {
	s.style.setProperty(e, t)
}
function Ze(s) {
	let { swiper: e, targetPosition: t, side: i } = s
	const a = V(),
		n = -e.translate
	let o = null,
		l
	const r = e.params.speed
	;(e.wrapperEl.style.scrollSnapType = 'none'), a.cancelAnimationFrame(e.cssModeFrameID)
	const u = t > n ? 'next' : 'prev',
		d = (m, g) => (u === 'next' && m >= g) || (u === 'prev' && m <= g),
		p = () => {
			;(l = new Date().getTime()), o === null && (o = l)
			const m = Math.max(Math.min((l - o) / r, 1), 0),
				g = 0.5 - Math.cos(m * Math.PI) / 2
			let h = n + g * (t - n)
			if ((d(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), d(h, t))) {
				;(e.wrapperEl.style.overflow = 'hidden'),
					(e.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [i]: h })
					}),
					a.cancelAnimationFrame(e.cssModeFrameID)
				return
			}
			e.cssModeFrameID = a.requestAnimationFrame(p)
		}
	p()
}
function ae(s) {
	return (
		s.querySelector('.swiper-slide-transform') ||
		(s.shadowRoot && s.shadowRoot.querySelector('.swiper-slide-transform')) ||
		s
	)
}
function U(s, e) {
	e === void 0 && (e = '')
	const t = [...s.children]
	return (
		s instanceof HTMLSlotElement && t.push(...s.assignedElements()),
		e ? t.filter((i) => i.matches(e)) : t
	)
}
function St(s, e) {
	const t = e.contains(s)
	return !t && e instanceof HTMLSlotElement ? [...e.assignedElements()].includes(s) : t
}
function ve(s) {
	try {
		console.warn(s)
		return
	} catch {}
}
function J(s, e) {
	e === void 0 && (e = [])
	const t = document.createElement(s)
	return t.classList.add(...(Array.isArray(e) ? e : gt(e))), t
}
function bt(s, e) {
	const t = []
	for (; s.previousElementSibling; ) {
		const i = s.previousElementSibling
		e ? i.matches(e) && t.push(i) : t.push(i), (s = i)
	}
	return t
}
function Et(s, e) {
	const t = []
	for (; s.nextElementSibling; ) {
		const i = s.nextElementSibling
		e ? i.matches(e) && t.push(i) : t.push(i), (s = i)
	}
	return t
}
function ee(s, e) {
	return V().getComputedStyle(s, null).getPropertyValue(e)
}
function ye(s) {
	let e = s,
		t
	if (e) {
		for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1)
		return t
	}
}
function Je(s, e) {
	const t = []
	let i = s.parentElement
	for (; i; ) e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement)
	return t
}
function Tt(s, e) {
	function t(i) {
		i.target === s && (e.call(s, i), s.removeEventListener('transitionend', t))
	}
	e && s.addEventListener('transitionend', t)
}
function Me(s, e, t) {
	const i = V()
	return (
		s[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
		parseFloat(
			i.getComputedStyle(s, null).getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')
		) +
		parseFloat(
			i.getComputedStyle(s, null).getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')
		)
	)
}
function _(s) {
	return (Array.isArray(s) ? s : [s]).filter((e) => !!e)
}
function we(s) {
	return (e) =>
		Math.abs(e) > 0 && s.browser && s.browser.need3dFix && Math.abs(e) % 90 === 0 ? e + 0.001 : e
}
function xt(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const n = V()
	t({
		mousewheel: {
			enabled: !1,
			releaseOnEdges: !1,
			invert: !1,
			forceToAxis: !1,
			sensitivity: 1,
			eventsTarget: 'container',
			thresholdDelta: null,
			thresholdTime: null,
			noMousewheelClass: 'swiper-no-mousewheel',
		},
	}),
		(e.mousewheel = { enabled: !1 })
	let o,
		l = Z(),
		r
	const u = []
	function d(c) {
		let A = 0,
			B = 0,
			k = 0,
			b = 0
		return (
			'detail' in c && (B = c.detail),
			'wheelDelta' in c && (B = -c.wheelDelta / 120),
			'wheelDeltaY' in c && (B = -c.wheelDeltaY / 120),
			'wheelDeltaX' in c && (A = -c.wheelDeltaX / 120),
			'axis' in c && c.axis === c.HORIZONTAL_AXIS && ((A = B), (B = 0)),
			(k = A * 10),
			(b = B * 10),
			'deltaY' in c && (b = c.deltaY),
			'deltaX' in c && (k = c.deltaX),
			c.shiftKey && !k && ((k = b), (b = 0)),
			(k || b) &&
				c.deltaMode &&
				(c.deltaMode === 1 ? ((k *= 40), (b *= 40)) : ((k *= 800), (b *= 800))),
			k && !A && (A = k < 1 ? -1 : 1),
			b && !B && (B = b < 1 ? -1 : 1),
			{ spinX: A, spinY: B, pixelX: k, pixelY: b }
		)
	}
	function p() {
		e.enabled && (e.mouseEntered = !0)
	}
	function m() {
		e.enabled && (e.mouseEntered = !1)
	}
	function g(c) {
		return (e.params.mousewheel.thresholdDelta && c.delta < e.params.mousewheel.thresholdDelta) ||
			(e.params.mousewheel.thresholdTime && Z() - l < e.params.mousewheel.thresholdTime)
			? !1
			: c.delta >= 6 && Z() - l < 60
			? !0
			: (c.direction < 0
					? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), a('scroll', c.raw))
					: (!e.isBeginning || e.params.loop) &&
					  !e.animating &&
					  (e.slidePrev(), a('scroll', c.raw)),
			  (l = new n.Date().getTime()),
			  !1)
	}
	function h(c) {
		const v = e.params.mousewheel
		if (c.direction < 0) {
			if (e.isEnd && !e.params.loop && v.releaseOnEdges) return !0
		} else if (e.isBeginning && !e.params.loop && v.releaseOnEdges) return !0
		return !1
	}
	function y(c) {
		let v = c,
			S = !0
		if (!e.enabled || c.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return
		const C = e.params.mousewheel
		e.params.cssMode && v.preventDefault()
		let A = e.el
		e.params.mousewheel.eventsTarget !== 'container' &&
			(A = document.querySelector(e.params.mousewheel.eventsTarget))
		const B = A && A.contains(v.target)
		if (!e.mouseEntered && !B && !C.releaseOnEdges) return !0
		v.originalEvent && (v = v.originalEvent)
		let k = 0
		const b = e.rtlTranslate ? -1 : 1,
			x = d(v)
		if (C.forceToAxis)
			if (e.isHorizontal())
				if (Math.abs(x.pixelX) > Math.abs(x.pixelY)) k = -x.pixelX * b
				else return !0
			else if (Math.abs(x.pixelY) > Math.abs(x.pixelX)) k = -x.pixelY
			else return !0
		else k = Math.abs(x.pixelX) > Math.abs(x.pixelY) ? -x.pixelX * b : -x.pixelY
		if (k === 0) return !0
		C.invert && (k = -k)
		let P = e.getTranslate() + k * C.sensitivity
		if (
			(P >= e.minTranslate() && (P = e.minTranslate()),
			P <= e.maxTranslate() && (P = e.maxTranslate()),
			(S = e.params.loop ? !0 : !(P === e.minTranslate() || P === e.maxTranslate())),
			S && e.params.nested && v.stopPropagation(),
			!e.params.freeMode || !e.params.freeMode.enabled)
		) {
			const T = { time: Z(), delta: Math.abs(k), direction: Math.sign(k), raw: c }
			u.length >= 2 && u.shift()
			const M = u.length ? u[u.length - 1] : void 0
			if (
				(u.push(T),
				M
					? (T.direction !== M.direction || T.delta > M.delta || T.time > M.time + 150) && g(T)
					: g(T),
				h(T))
			)
				return !0
		} else {
			const T = { time: Z(), delta: Math.abs(k), direction: Math.sign(k) },
				M = r && T.time < r.time + 500 && T.delta <= r.delta && T.direction === r.direction
			if (!M) {
				r = void 0
				let F = e.getTranslate() + k * C.sensitivity
				const I = e.isBeginning,
					Y = e.isEnd
				if (
					(F >= e.minTranslate() && (F = e.minTranslate()),
					F <= e.maxTranslate() && (F = e.maxTranslate()),
					e.setTransition(0),
					e.setTranslate(F),
					e.updateProgress(),
					e.updateActiveIndex(),
					e.updateSlidesClasses(),
					((!I && e.isBeginning) || (!Y && e.isEnd)) && e.updateSlidesClasses(),
					e.params.loop &&
						e.loopFix({ direction: T.direction < 0 ? 'next' : 'prev', byMousewheel: !0 }),
					e.params.freeMode.sticky)
				) {
					clearTimeout(o), (o = void 0), u.length >= 15 && u.shift()
					const O = u.length ? u[u.length - 1] : void 0,
						q = u[0]
					if ((u.push(T), O && (T.delta > O.delta || T.direction !== O.direction))) u.splice(0)
					else if (
						u.length >= 15 &&
						T.time - q.time < 500 &&
						q.delta - T.delta >= 1 &&
						T.delta <= 6
					) {
						const L = k > 0 ? 0.8 : 0.2
						;(r = T),
							u.splice(0),
							(o = ue(() => {
								e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, L)
							}, 0))
					}
					o ||
						(o = ue(() => {
							if (e.destroyed || !e.params) return
							const L = 0.5
							;(r = T), u.splice(0), e.slideToClosest(e.params.speed, !0, void 0, L)
						}, 500))
				}
				if (
					(M || a('scroll', v),
					e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
					C.releaseOnEdges && (F === e.minTranslate() || F === e.maxTranslate()))
				)
					return !0
			}
		}
		return v.preventDefault ? v.preventDefault() : (v.returnValue = !1), !1
	}
	function E(c) {
		let v = e.el
		e.params.mousewheel.eventsTarget !== 'container' &&
			(v = document.querySelector(e.params.mousewheel.eventsTarget)),
			v[c]('mouseenter', p),
			v[c]('mouseleave', m),
			v[c]('wheel', y)
	}
	function w() {
		return e.params.cssMode
			? (e.wrapperEl.removeEventListener('wheel', y), !0)
			: e.mousewheel.enabled
			? !1
			: (E('addEventListener'), (e.mousewheel.enabled = !0), !0)
	}
	function f() {
		return e.params.cssMode
			? (e.wrapperEl.addEventListener(event, y), !0)
			: e.mousewheel.enabled
			? (E('removeEventListener'), (e.mousewheel.enabled = !1), !0)
			: !1
	}
	i('init', () => {
		!e.params.mousewheel.enabled && e.params.cssMode && f(), e.params.mousewheel.enabled && w()
	}),
		i('destroy', () => {
			e.params.cssMode && w(), e.mousewheel.enabled && f()
		}),
		Object.assign(e.mousewheel, { enable: w, disable: f })
}
function Qe(s, e, t, i) {
	return (
		s.params.createElements &&
			Object.keys(i).forEach((a) => {
				if (!t[a] && t.auto === !0) {
					let n = U(s.el, `.${i[a]}`)[0]
					n || ((n = J('div', i[a])), (n.className = i[a]), s.el.append(n)), (t[a] = n), (e[a] = n)
				}
			}),
		t
	)
}
function ze(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	t({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: 'swiper-button-disabled',
			hiddenClass: 'swiper-button-hidden',
			lockClass: 'swiper-button-lock',
			navigationDisabledClass: 'swiper-navigation-disabled',
		},
	}),
		(e.navigation = { nextEl: null, prevEl: null })
	function n(h) {
		let y
		return h &&
			typeof h == 'string' &&
			e.isElement &&
			((y = e.el.querySelector(h) || e.hostEl.querySelector(h)), y)
			? y
			: (h &&
					(typeof h == 'string' && (y = [...document.querySelectorAll(h)]),
					e.params.uniqueNavElements &&
					typeof h == 'string' &&
					y &&
					y.length > 1 &&
					e.el.querySelectorAll(h).length === 1
						? (y = e.el.querySelector(h))
						: y && y.length === 1 && (y = y[0])),
			  h && !y ? h : y)
	}
	function o(h, y) {
		const E = e.params.navigation
		;(h = _(h)),
			h.forEach((w) => {
				w &&
					(w.classList[y ? 'add' : 'remove'](...E.disabledClass.split(' ')),
					w.tagName === 'BUTTON' && (w.disabled = y),
					e.params.watchOverflow &&
						e.enabled &&
						w.classList[e.isLocked ? 'add' : 'remove'](E.lockClass))
			})
	}
	function l() {
		const { nextEl: h, prevEl: y } = e.navigation
		if (e.params.loop) {
			o(y, !1), o(h, !1)
			return
		}
		o(y, e.isBeginning && !e.params.rewind), o(h, e.isEnd && !e.params.rewind)
	}
	function r(h) {
		h.preventDefault(),
			!(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a('navigationPrev'))
	}
	function u(h) {
		h.preventDefault(),
			!(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a('navigationNext'))
	}
	function d() {
		const h = e.params.navigation
		if (
			((e.params.navigation = Qe(e, e.originalParams.navigation, e.params.navigation, {
				nextEl: 'swiper-button-next',
				prevEl: 'swiper-button-prev',
			})),
			!(h.nextEl || h.prevEl))
		)
			return
		let y = n(h.nextEl),
			E = n(h.prevEl)
		Object.assign(e.navigation, { nextEl: y, prevEl: E }), (y = _(y)), (E = _(E))
		const w = (f, c) => {
			f && f.addEventListener('click', c === 'next' ? u : r),
				!e.enabled && f && f.classList.add(...h.lockClass.split(' '))
		}
		y.forEach((f) => w(f, 'next')), E.forEach((f) => w(f, 'prev'))
	}
	function p() {
		let { nextEl: h, prevEl: y } = e.navigation
		;(h = _(h)), (y = _(y))
		const E = (w, f) => {
			w.removeEventListener('click', f === 'next' ? u : r),
				w.classList.remove(...e.params.navigation.disabledClass.split(' '))
		}
		h.forEach((w) => E(w, 'next')), y.forEach((w) => E(w, 'prev'))
	}
	i('init', () => {
		e.params.navigation.enabled === !1 ? g() : (d(), l())
	}),
		i('toEdge fromEdge lock unlock', () => {
			l()
		}),
		i('destroy', () => {
			p()
		}),
		i('enable disable', () => {
			let { nextEl: h, prevEl: y } = e.navigation
			if (((h = _(h)), (y = _(y)), e.enabled)) {
				l()
				return
			}
			;[...h, ...y]
				.filter((E) => !!E)
				.forEach((E) => E.classList.add(e.params.navigation.lockClass))
		}),
		i('click', (h, y) => {
			let { nextEl: E, prevEl: w } = e.navigation
			;(E = _(E)), (w = _(w))
			const f = y.target
			let c = w.includes(f) || E.includes(f)
			if (e.isElement && !c) {
				const v = y.path || (y.composedPath && y.composedPath())
				v && (c = v.find((S) => E.includes(S) || w.includes(S)))
			}
			if (e.params.navigation.hideOnClick && !c) {
				if (
					e.pagination &&
					e.params.pagination &&
					e.params.pagination.clickable &&
					(e.pagination.el === f || e.pagination.el.contains(f))
				)
					return
				let v
				E.length
					? (v = E[0].classList.contains(e.params.navigation.hiddenClass))
					: w.length && (v = w[0].classList.contains(e.params.navigation.hiddenClass)),
					a(v === !0 ? 'navigationShow' : 'navigationHide'),
					[...E, ...w]
						.filter((S) => !!S)
						.forEach((S) => S.classList.toggle(e.params.navigation.hiddenClass))
			}
		})
	const m = () => {
			e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), d(), l()
		},
		g = () => {
			e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), p()
		}
	Object.assign(e.navigation, { enable: m, disable: g, update: l, init: d, destroy: p })
}
function de(s) {
	return (
		s === void 0 && (s = ''),
		`.${s
			.trim()
			.replace(/([\.:!+\/])/g, '\\$1')
			.replace(/ /g, '.')}`
	)
}
function _e(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const n = 'swiper-pagination'
	t({
		pagination: {
			el: null,
			bulletElement: 'span',
			clickable: !1,
			hideOnClick: !1,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: !1,
			type: 'bullets',
			dynamicBullets: !1,
			dynamicMainBullets: 1,
			formatFractionCurrent: (f) => f,
			formatFractionTotal: (f) => f,
			bulletClass: `${n}-bullet`,
			bulletActiveClass: `${n}-bullet-active`,
			modifierClass: `${n}-`,
			currentClass: `${n}-current`,
			totalClass: `${n}-total`,
			hiddenClass: `${n}-hidden`,
			progressbarFillClass: `${n}-progressbar-fill`,
			progressbarOppositeClass: `${n}-progressbar-opposite`,
			clickableClass: `${n}-clickable`,
			lockClass: `${n}-lock`,
			horizontalClass: `${n}-horizontal`,
			verticalClass: `${n}-vertical`,
			paginationDisabledClass: `${n}-disabled`,
		},
	}),
		(e.pagination = { el: null, bullets: [] })
	let o,
		l = 0
	function r() {
		return (
			!e.params.pagination.el ||
			!e.pagination.el ||
			(Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
		)
	}
	function u(f, c) {
		const { bulletActiveClass: v } = e.params.pagination
		f &&
			((f = f[`${c === 'prev' ? 'previous' : 'next'}ElementSibling`]),
			f &&
				(f.classList.add(`${v}-${c}`),
				(f = f[`${c === 'prev' ? 'previous' : 'next'}ElementSibling`]),
				f && f.classList.add(`${v}-${c}-${c}`)))
	}
	function d(f, c, v) {
		if (((f = f % v), (c = c % v), c === f + 1)) return 'next'
		if (c === f - 1) return 'previous'
	}
	function p(f) {
		const c = f.target.closest(de(e.params.pagination.bulletClass))
		if (!c) return
		f.preventDefault()
		const v = ye(c) * e.params.slidesPerGroup
		if (e.params.loop) {
			if (e.realIndex === v) return
			const S = d(e.realIndex, v, e.slides.length)
			S === 'next' ? e.slideNext() : S === 'previous' ? e.slidePrev() : e.slideToLoop(v)
		} else e.slideTo(v)
	}
	function m() {
		const f = e.rtl,
			c = e.params.pagination
		if (r()) return
		let v = e.pagination.el
		v = _(v)
		let S, C
		const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
			B = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length
		if (
			(e.params.loop
				? ((C = e.previousRealIndex || 0),
				  (S =
						e.params.slidesPerGroup > 1
							? Math.floor(e.realIndex / e.params.slidesPerGroup)
							: e.realIndex))
				: typeof e.snapIndex < 'u'
				? ((S = e.snapIndex), (C = e.previousSnapIndex))
				: ((C = e.previousIndex || 0), (S = e.activeIndex || 0)),
			c.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
		) {
			const k = e.pagination.bullets
			let b, x, P
			if (
				(c.dynamicBullets &&
					((o = Me(k[0], e.isHorizontal() ? 'width' : 'height')),
					v.forEach((T) => {
						T.style[e.isHorizontal() ? 'width' : 'height'] = `${o * (c.dynamicMainBullets + 4)}px`
					}),
					c.dynamicMainBullets > 1 &&
						C !== void 0 &&
						((l += S - (C || 0)),
						l > c.dynamicMainBullets - 1 ? (l = c.dynamicMainBullets - 1) : l < 0 && (l = 0)),
					(b = Math.max(S - l, 0)),
					(x = b + (Math.min(k.length, c.dynamicMainBullets) - 1)),
					(P = (x + b) / 2)),
				k.forEach((T) => {
					const M = [
						...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
							(F) => `${c.bulletActiveClass}${F}`
						),
					]
						.map((F) => (typeof F == 'string' && F.includes(' ') ? F.split(' ') : F))
						.flat()
					T.classList.remove(...M)
				}),
				v.length > 1)
			)
				k.forEach((T) => {
					const M = ye(T)
					M === S
						? T.classList.add(...c.bulletActiveClass.split(' '))
						: e.isElement && T.setAttribute('part', 'bullet'),
						c.dynamicBullets &&
							(M >= b && M <= x && T.classList.add(...`${c.bulletActiveClass}-main`.split(' ')),
							M === b && u(T, 'prev'),
							M === x && u(T, 'next'))
				})
			else {
				const T = k[S]
				if (
					(T && T.classList.add(...c.bulletActiveClass.split(' ')),
					e.isElement &&
						k.forEach((M, F) => {
							M.setAttribute('part', F === S ? 'bullet-active' : 'bullet')
						}),
					c.dynamicBullets)
				) {
					const M = k[b],
						F = k[x]
					for (let I = b; I <= x; I += 1)
						k[I] && k[I].classList.add(...`${c.bulletActiveClass}-main`.split(' '))
					u(M, 'prev'), u(F, 'next')
				}
			}
			if (c.dynamicBullets) {
				const T = Math.min(k.length, c.dynamicMainBullets + 4),
					M = (o * T - o) / 2 - P * o,
					F = f ? 'right' : 'left'
				k.forEach((I) => {
					I.style[e.isHorizontal() ? F : 'top'] = `${M}px`
				})
			}
		}
		v.forEach((k, b) => {
			if (
				(c.type === 'fraction' &&
					(k.querySelectorAll(de(c.currentClass)).forEach((x) => {
						x.textContent = c.formatFractionCurrent(S + 1)
					}),
					k.querySelectorAll(de(c.totalClass)).forEach((x) => {
						x.textContent = c.formatFractionTotal(B)
					})),
				c.type === 'progressbar')
			) {
				let x
				c.progressbarOpposite
					? (x = e.isHorizontal() ? 'vertical' : 'horizontal')
					: (x = e.isHorizontal() ? 'horizontal' : 'vertical')
				const P = (S + 1) / B
				let T = 1,
					M = 1
				x === 'horizontal' ? (T = P) : (M = P),
					k.querySelectorAll(de(c.progressbarFillClass)).forEach((F) => {
						;(F.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${M})`),
							(F.style.transitionDuration = `${e.params.speed}ms`)
					})
			}
			c.type === 'custom' && c.renderCustom
				? ((k.innerHTML = c.renderCustom(e, S + 1, B)), b === 0 && a('paginationRender', k))
				: (b === 0 && a('paginationRender', k), a('paginationUpdate', k)),
				e.params.watchOverflow &&
					e.enabled &&
					k.classList[e.isLocked ? 'add' : 'remove'](c.lockClass)
		})
	}
	function g() {
		const f = e.params.pagination
		if (r()) return
		const c =
			e.virtual && e.params.virtual.enabled
				? e.virtual.slides.length
				: e.grid && e.params.grid.rows > 1
				? e.slides.length / Math.ceil(e.params.grid.rows)
				: e.slides.length
		let v = e.pagination.el
		v = _(v)
		let S = ''
		if (f.type === 'bullets') {
			let C = e.params.loop ? Math.ceil(c / e.params.slidesPerGroup) : e.snapGrid.length
			e.params.freeMode && e.params.freeMode.enabled && C > c && (C = c)
			for (let A = 0; A < C; A += 1)
				f.renderBullet
					? (S += f.renderBullet.call(e, A, f.bulletClass))
					: (S += `<${f.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${
							f.bulletClass
					  }"></${f.bulletElement}>`)
		}
		f.type === 'fraction' &&
			(f.renderFraction
				? (S = f.renderFraction.call(e, f.currentClass, f.totalClass))
				: (S = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
			f.type === 'progressbar' &&
				(f.renderProgressbar
					? (S = f.renderProgressbar.call(e, f.progressbarFillClass))
					: (S = `<span class="${f.progressbarFillClass}"></span>`)),
			(e.pagination.bullets = []),
			v.forEach((C) => {
				f.type !== 'custom' && (C.innerHTML = S || ''),
					f.type === 'bullets' &&
						e.pagination.bullets.push(...C.querySelectorAll(de(f.bulletClass)))
			}),
			f.type !== 'custom' && a('paginationRender', v[0])
	}
	function h() {
		e.params.pagination = Qe(e, e.originalParams.pagination, e.params.pagination, {
			el: 'swiper-pagination',
		})
		const f = e.params.pagination
		if (!f.el) return
		let c
		typeof f.el == 'string' && e.isElement && (c = e.el.querySelector(f.el)),
			!c && typeof f.el == 'string' && (c = [...document.querySelectorAll(f.el)]),
			c || (c = f.el),
			!(!c || c.length === 0) &&
				(e.params.uniqueNavElements &&
					typeof f.el == 'string' &&
					Array.isArray(c) &&
					c.length > 1 &&
					((c = [...e.el.querySelectorAll(f.el)]),
					c.length > 1 && (c = c.filter((v) => Je(v, '.swiper')[0] === e.el)[0])),
				Array.isArray(c) && c.length === 1 && (c = c[0]),
				Object.assign(e.pagination, { el: c }),
				(c = _(c)),
				c.forEach((v) => {
					f.type === 'bullets' &&
						f.clickable &&
						v.classList.add(...(f.clickableClass || '').split(' ')),
						v.classList.add(f.modifierClass + f.type),
						v.classList.add(e.isHorizontal() ? f.horizontalClass : f.verticalClass),
						f.type === 'bullets' &&
							f.dynamicBullets &&
							(v.classList.add(`${f.modifierClass}${f.type}-dynamic`),
							(l = 0),
							f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)),
						f.type === 'progressbar' &&
							f.progressbarOpposite &&
							v.classList.add(f.progressbarOppositeClass),
						f.clickable && v.addEventListener('click', p),
						e.enabled || v.classList.add(f.lockClass)
				}))
	}
	function y() {
		const f = e.params.pagination
		if (r()) return
		let c = e.pagination.el
		c &&
			((c = _(c)),
			c.forEach((v) => {
				v.classList.remove(f.hiddenClass),
					v.classList.remove(f.modifierClass + f.type),
					v.classList.remove(e.isHorizontal() ? f.horizontalClass : f.verticalClass),
					f.clickable &&
						(v.classList.remove(...(f.clickableClass || '').split(' ')),
						v.removeEventListener('click', p))
			})),
			e.pagination.bullets &&
				e.pagination.bullets.forEach((v) => v.classList.remove(...f.bulletActiveClass.split(' ')))
	}
	i('changeDirection', () => {
		if (!e.pagination || !e.pagination.el) return
		const f = e.params.pagination
		let { el: c } = e.pagination
		;(c = _(c)),
			c.forEach((v) => {
				v.classList.remove(f.horizontalClass, f.verticalClass),
					v.classList.add(e.isHorizontal() ? f.horizontalClass : f.verticalClass)
			})
	}),
		i('init', () => {
			e.params.pagination.enabled === !1 ? w() : (h(), g(), m())
		}),
		i('activeIndexChange', () => {
			typeof e.snapIndex > 'u' && m()
		}),
		i('snapIndexChange', () => {
			m()
		}),
		i('snapGridLengthChange', () => {
			g(), m()
		}),
		i('destroy', () => {
			y()
		}),
		i('enable disable', () => {
			let { el: f } = e.pagination
			f &&
				((f = _(f)),
				f.forEach((c) => c.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)))
		}),
		i('lock unlock', () => {
			m()
		}),
		i('click', (f, c) => {
			const v = c.target,
				S = _(e.pagination.el)
			if (
				e.params.pagination.el &&
				e.params.pagination.hideOnClick &&
				S &&
				S.length > 0 &&
				!v.classList.contains(e.params.pagination.bulletClass)
			) {
				if (
					e.navigation &&
					((e.navigation.nextEl && v === e.navigation.nextEl) ||
						(e.navigation.prevEl && v === e.navigation.prevEl))
				)
					return
				const C = S[0].classList.contains(e.params.pagination.hiddenClass)
				a(C === !0 ? 'paginationShow' : 'paginationHide'),
					S.forEach((A) => A.classList.toggle(e.params.pagination.hiddenClass))
			}
		})
	const E = () => {
			e.el.classList.remove(e.params.pagination.paginationDisabledClass)
			let { el: f } = e.pagination
			f &&
				((f = _(f)),
				f.forEach((c) => c.classList.remove(e.params.pagination.paginationDisabledClass))),
				h(),
				g(),
				m()
		},
		w = () => {
			e.el.classList.add(e.params.pagination.paginationDisabledClass)
			let { el: f } = e.pagination
			f &&
				((f = _(f)),
				f.forEach((c) => c.classList.add(e.params.pagination.paginationDisabledClass))),
				y()
		}
	Object.assign(e.pagination, { enable: E, disable: w, render: g, update: m, init: h, destroy: y })
}
function qe(s) {
	let { swiper: e, extendParams: t, on: i, emit: a, params: n } = s
	;(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
		t({
			autoplay: {
				enabled: !1,
				delay: 3e3,
				waitForTransition: !0,
				disableOnInteraction: !1,
				stopOnLastSlide: !1,
				reverseDirection: !1,
				pauseOnMouseEnter: !1,
			},
		})
	let o,
		l,
		r = n && n.autoplay ? n.autoplay.delay : 3e3,
		u = n && n.autoplay ? n.autoplay.delay : 3e3,
		d,
		p = new Date().getTime(),
		m,
		g,
		h,
		y,
		E,
		w,
		f
	function c(O) {
		!e ||
			e.destroyed ||
			!e.wrapperEl ||
			(O.target === e.wrapperEl &&
				(e.wrapperEl.removeEventListener('transitionend', c),
				!(f || (O.detail && O.detail.bySwiperTouchMove)) && b()))
	}
	const v = () => {
			if (e.destroyed || !e.autoplay.running) return
			e.autoplay.paused ? (m = !0) : m && ((u = d), (m = !1))
			const O = e.autoplay.paused ? d : p + u - new Date().getTime()
			;(e.autoplay.timeLeft = O),
				a('autoplayTimeLeft', O, O / r),
				(l = requestAnimationFrame(() => {
					v()
				}))
		},
		S = () => {
			let O
			return (
				e.virtual && e.params.virtual.enabled
					? (O = e.slides.filter((L) => L.classList.contains('swiper-slide-active'))[0])
					: (O = e.slides[e.activeIndex]),
				O ? parseInt(O.getAttribute('data-swiper-autoplay'), 10) : void 0
			)
		},
		C = (O) => {
			if (e.destroyed || !e.autoplay.running) return
			cancelAnimationFrame(l), v()
			let q = typeof O > 'u' ? e.params.autoplay.delay : O
			;(r = e.params.autoplay.delay), (u = e.params.autoplay.delay)
			const L = S()
			!Number.isNaN(L) && L > 0 && typeof O > 'u' && ((q = L), (r = L), (u = L)), (d = q)
			const te = e.params.speed,
				ce = () => {
					!e ||
						e.destroyed ||
						(e.params.autoplay.reverseDirection
							? !e.isBeginning || e.params.loop || e.params.rewind
								? (e.slidePrev(te, !0, !0), a('autoplay'))
								: e.params.autoplay.stopOnLastSlide ||
								  (e.slideTo(e.slides.length - 1, te, !0, !0), a('autoplay'))
							: !e.isEnd || e.params.loop || e.params.rewind
							? (e.slideNext(te, !0, !0), a('autoplay'))
							: e.params.autoplay.stopOnLastSlide || (e.slideTo(0, te, !0, !0), a('autoplay')),
						e.params.cssMode &&
							((p = new Date().getTime()),
							requestAnimationFrame(() => {
								C()
							})))
				}
			return (
				q > 0
					? (clearTimeout(o),
					  (o = setTimeout(() => {
							ce()
					  }, q)))
					: requestAnimationFrame(() => {
							ce()
					  }),
				q
			)
		},
		A = () => {
			;(p = new Date().getTime()), (e.autoplay.running = !0), C(), a('autoplayStart')
		},
		B = () => {
			;(e.autoplay.running = !1), clearTimeout(o), cancelAnimationFrame(l), a('autoplayStop')
		},
		k = (O, q) => {
			if (e.destroyed || !e.autoplay.running) return
			clearTimeout(o), O || (w = !0)
			const L = () => {
				a('autoplayPause'),
					e.params.autoplay.waitForTransition
						? e.wrapperEl.addEventListener('transitionend', c)
						: b()
			}
			if (((e.autoplay.paused = !0), q)) {
				E && (d = e.params.autoplay.delay), (E = !1), L()
				return
			}
			;(d = (d || e.params.autoplay.delay) - (new Date().getTime() - p)),
				!(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), L())
		},
		b = () => {
			;(e.isEnd && d < 0 && !e.params.loop) ||
				e.destroyed ||
				!e.autoplay.running ||
				((p = new Date().getTime()),
				w ? ((w = !1), C(d)) : C(),
				(e.autoplay.paused = !1),
				a('autoplayResume'))
		},
		x = () => {
			if (e.destroyed || !e.autoplay.running) return
			const O = Q()
			O.visibilityState === 'hidden' && ((w = !0), k(!0)), O.visibilityState === 'visible' && b()
		},
		P = (O) => {
			O.pointerType === 'mouse' &&
				((w = !0), (f = !0), !(e.animating || e.autoplay.paused) && k(!0))
		},
		T = (O) => {
			O.pointerType === 'mouse' && ((f = !1), e.autoplay.paused && b())
		},
		M = () => {
			e.params.autoplay.pauseOnMouseEnter &&
				(e.el.addEventListener('pointerenter', P), e.el.addEventListener('pointerleave', T))
		},
		F = () => {
			e.el &&
				typeof e.el != 'string' &&
				(e.el.removeEventListener('pointerenter', P), e.el.removeEventListener('pointerleave', T))
		},
		I = () => {
			Q().addEventListener('visibilitychange', x)
		},
		Y = () => {
			Q().removeEventListener('visibilitychange', x)
		}
	i('init', () => {
		e.params.autoplay.enabled && (M(), I(), A())
	}),
		i('destroy', () => {
			F(), Y(), e.autoplay.running && B()
		}),
		i('_freeModeStaticRelease', () => {
			;(h || w) && b()
		}),
		i('_freeModeNoMomentumRelease', () => {
			e.params.autoplay.disableOnInteraction ? B() : k(!0, !0)
		}),
		i('beforeTransitionStart', (O, q, L) => {
			e.destroyed ||
				!e.autoplay.running ||
				(L || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : B())
		}),
		i('sliderFirstMove', () => {
			if (!(e.destroyed || !e.autoplay.running)) {
				if (e.params.autoplay.disableOnInteraction) {
					B()
					return
				}
				;(g = !0),
					(h = !1),
					(w = !1),
					(y = setTimeout(() => {
						;(w = !0), (h = !0), k(!0)
					}, 200))
			}
		}),
		i('touchEnd', () => {
			if (!(e.destroyed || !e.autoplay.running || !g)) {
				if ((clearTimeout(y), clearTimeout(o), e.params.autoplay.disableOnInteraction)) {
					;(h = !1), (g = !1)
					return
				}
				h && e.params.cssMode && b(), (h = !1), (g = !1)
			}
		}),
		i('slideChange', () => {
			e.destroyed || !e.autoplay.running || (E = !0)
		}),
		Object.assign(e.autoplay, { start: A, stop: B, pause: k, resume: b })
}
function oe(s) {
	const {
		effect: e,
		swiper: t,
		on: i,
		setTranslate: a,
		setTransition: n,
		overwriteParams: o,
		perspective: l,
		recreateShadows: r,
		getEffectParams: u,
	} = s
	i('beforeInit', () => {
		if (t.params.effect !== e) return
		t.classNames.push(`${t.params.containerModifierClass}${e}`),
			l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`)
		const p = o ? o() : {}
		Object.assign(t.params, p), Object.assign(t.originalParams, p)
	}),
		i('setTranslate', () => {
			t.params.effect === e && a()
		}),
		i('setTransition', (p, m) => {
			t.params.effect === e && n(m)
		}),
		i('transitionEnd', () => {
			if (t.params.effect === e && r) {
				if (!u || !u().slideShadows) return
				t.slides.forEach((p) => {
					p.querySelectorAll(
						'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
					).forEach((m) => m.remove())
				}),
					r()
			}
		})
	let d
	i('virtualUpdate', () => {
		t.params.effect === e &&
			(t.slides.length || (d = !0),
			requestAnimationFrame(() => {
				d && t.slides && t.slides.length && (a(), (d = !1))
			}))
	})
}
function pe(s, e) {
	const t = ae(e)
	return (
		t !== e &&
			((t.style.backfaceVisibility = 'hidden'),
			(t.style['-webkit-backface-visibility'] = 'hidden')),
		t
	)
}
function ke(s) {
	let { swiper: e, duration: t, transformElements: i, allSlides: a } = s
	const { activeIndex: n } = e,
		o = (l) =>
			l.parentElement
				? l.parentElement
				: e.slides.filter((u) => u.shadowRoot && u.shadowRoot === l.parentNode)[0]
	if (e.params.virtualTranslate && t !== 0) {
		let l = !1,
			r
		a
			? (r = i)
			: (r = i.filter((u) => {
					const d = u.classList.contains('swiper-slide-transform') ? o(u) : u
					return e.getSlideIndex(d) === n
			  })),
			r.forEach((u) => {
				Tt(u, () => {
					if (l || !e || e.destroyed) return
					;(l = !0), (e.animating = !1)
					const d = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 })
					e.wrapperEl.dispatchEvent(d)
				})
			})
	}
}
function Ct(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ fadeEffect: { crossFade: !1 } }),
		oe({
			effect: 'fade',
			swiper: e,
			on: i,
			setTranslate: () => {
				const { slides: o } = e,
					l = e.params.fadeEffect
				for (let r = 0; r < o.length; r += 1) {
					const u = e.slides[r]
					let p = -u.swiperSlideOffset
					e.params.virtualTranslate || (p -= e.translate)
					let m = 0
					e.isHorizontal() || ((m = p), (p = 0))
					const g = e.params.fadeEffect.crossFade
							? Math.max(1 - Math.abs(u.progress), 0)
							: 1 + Math.min(Math.max(u.progress, -1), 0),
						h = pe(l, u)
					;(h.style.opacity = g), (h.style.transform = `translate3d(${p}px, ${m}px, 0px)`)
				}
			},
			setTransition: (o) => {
				const l = e.slides.map((r) => ae(r))
				l.forEach((r) => {
					r.style.transitionDuration = `${o}ms`
				}),
					ke({ swiper: e, duration: o, transformElements: l, allSlides: !0 })
			},
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !e.params.cssMode,
			}),
		})
}
function Dt(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } })
	const a = (r, u, d) => {
		let p = d
				? r.querySelector('.swiper-slide-shadow-left')
				: r.querySelector('.swiper-slide-shadow-top'),
			m = d
				? r.querySelector('.swiper-slide-shadow-right')
				: r.querySelector('.swiper-slide-shadow-bottom')
		p ||
			((p = J(
				'div',
				`swiper-slide-shadow-cube swiper-slide-shadow-${d ? 'left' : 'top'}`.split(' ')
			)),
			r.append(p)),
			m ||
				((m = J(
					'div',
					`swiper-slide-shadow-cube swiper-slide-shadow-${d ? 'right' : 'bottom'}`.split(' ')
				)),
				r.append(m)),
			p && (p.style.opacity = Math.max(-u, 0)),
			m && (m.style.opacity = Math.max(u, 0))
	}
	oe({
		effect: 'cube',
		swiper: e,
		on: i,
		setTranslate: () => {
			const {
					el: r,
					wrapperEl: u,
					slides: d,
					width: p,
					height: m,
					rtlTranslate: g,
					size: h,
					browser: y,
				} = e,
				E = we(e),
				w = e.params.cubeEffect,
				f = e.isHorizontal(),
				c = e.virtual && e.params.virtual.enabled
			let v = 0,
				S
			w.shadow &&
				(f
					? ((S = e.wrapperEl.querySelector('.swiper-cube-shadow')),
					  S || ((S = J('div', 'swiper-cube-shadow')), e.wrapperEl.append(S)),
					  (S.style.height = `${p}px`))
					: ((S = r.querySelector('.swiper-cube-shadow')),
					  S || ((S = J('div', 'swiper-cube-shadow')), r.append(S))))
			for (let A = 0; A < d.length; A += 1) {
				const B = d[A]
				let k = A
				c && (k = parseInt(B.getAttribute('data-swiper-slide-index'), 10))
				let b = k * 90,
					x = Math.floor(b / 360)
				g && ((b = -b), (x = Math.floor(-b / 360)))
				const P = Math.max(Math.min(B.progress, 1), -1)
				let T = 0,
					M = 0,
					F = 0
				k % 4 === 0
					? ((T = -x * 4 * h), (F = 0))
					: (k - 1) % 4 === 0
					? ((T = 0), (F = -x * 4 * h))
					: (k - 2) % 4 === 0
					? ((T = h + x * 4 * h), (F = h))
					: (k - 3) % 4 === 0 && ((T = -h), (F = 3 * h + h * 4 * x)),
					g && (T = -T),
					f || ((M = T), (T = 0))
				const I = `rotateX(${E(f ? 0 : -b)}deg) rotateY(${E(
					f ? b : 0
				)}deg) translate3d(${T}px, ${M}px, ${F}px)`
				P <= 1 && P > -1 && ((v = k * 90 + P * 90), g && (v = -k * 90 - P * 90)),
					(B.style.transform = I),
					w.slideShadows && a(B, P, f)
			}
			if (
				((u.style.transformOrigin = `50% 50% -${h / 2}px`),
				(u.style['-webkit-transform-origin'] = `50% 50% -${h / 2}px`),
				w.shadow)
			)
				if (f)
					S.style.transform = `translate3d(0px, ${p / 2 + w.shadowOffset}px, ${
						-p / 2
					}px) rotateX(89.99deg) rotateZ(0deg) scale(${w.shadowScale})`
				else {
					const A = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
						B =
							1.5 - (Math.sin((A * 2 * Math.PI) / 360) / 2 + Math.cos((A * 2 * Math.PI) / 360) / 2),
						k = w.shadowScale,
						b = w.shadowScale / B,
						x = w.shadowOffset
					S.style.transform = `scale3d(${k}, 1, ${b}) translate3d(0px, ${m / 2 + x}px, ${
						-m / 2 / b
					}px) rotateX(-89.99deg)`
				}
			const C = (y.isSafari || y.isWebView) && y.needPerspectiveFix ? -h / 2 : 0
			;(u.style.transform = `translate3d(0px,0,${C}px) rotateX(${E(
				e.isHorizontal() ? 0 : v
			)}deg) rotateY(${E(e.isHorizontal() ? -v : 0)}deg)`),
				u.style.setProperty('--swiper-cube-translate-z', `${C}px`)
		},
		setTransition: (r) => {
			const { el: u, slides: d } = e
			if (
				(d.forEach((p) => {
					;(p.style.transitionDuration = `${r}ms`),
						p
							.querySelectorAll(
								'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
							)
							.forEach((m) => {
								m.style.transitionDuration = `${r}ms`
							})
				}),
				e.params.cubeEffect.shadow && !e.isHorizontal())
			) {
				const p = u.querySelector('.swiper-cube-shadow')
				p && (p.style.transitionDuration = `${r}ms`)
			}
		},
		recreateShadows: () => {
			const r = e.isHorizontal()
			e.slides.forEach((u) => {
				const d = Math.max(Math.min(u.progress, 1), -1)
				a(u, d, r)
			})
		},
		getEffectParams: () => e.params.cubeEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			resistanceRatio: 0,
			spaceBetween: 0,
			centeredSlides: !1,
			virtualTranslate: !0,
		}),
	})
}
function le(s, e, t) {
	const i = `swiper-slide-shadow${t ? `-${t}` : ''}${s ? ` swiper-slide-shadow-${s}` : ''}`,
		a = ae(e)
	let n = a.querySelector(`.${i.split(' ').join('.')}`)
	return n || ((n = J('div', i.split(' '))), a.append(n)), n
}
function Bt(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ flipEffect: { slideShadows: !0, limitRotation: !0 } })
	const a = (r, u) => {
		let d = e.isHorizontal()
				? r.querySelector('.swiper-slide-shadow-left')
				: r.querySelector('.swiper-slide-shadow-top'),
			p = e.isHorizontal()
				? r.querySelector('.swiper-slide-shadow-right')
				: r.querySelector('.swiper-slide-shadow-bottom')
		d || (d = le('flip', r, e.isHorizontal() ? 'left' : 'top')),
			p || (p = le('flip', r, e.isHorizontal() ? 'right' : 'bottom')),
			d && (d.style.opacity = Math.max(-u, 0)),
			p && (p.style.opacity = Math.max(u, 0))
	}
	oe({
		effect: 'flip',
		swiper: e,
		on: i,
		setTranslate: () => {
			const { slides: r, rtlTranslate: u } = e,
				d = e.params.flipEffect,
				p = we(e)
			for (let m = 0; m < r.length; m += 1) {
				const g = r[m]
				let h = g.progress
				e.params.flipEffect.limitRotation && (h = Math.max(Math.min(g.progress, 1), -1))
				const y = g.swiperSlideOffset
				let w = -180 * h,
					f = 0,
					c = e.params.cssMode ? -y - e.translate : -y,
					v = 0
				e.isHorizontal() ? u && (w = -w) : ((v = c), (c = 0), (f = -w), (w = 0)),
					(g.style.zIndex = -Math.abs(Math.round(h)) + r.length),
					d.slideShadows && a(g, h)
				const S = `translate3d(${c}px, ${v}px, 0px) rotateX(${p(f)}deg) rotateY(${p(w)}deg)`,
					C = pe(d, g)
				C.style.transform = S
			}
		},
		setTransition: (r) => {
			const u = e.slides.map((d) => ae(d))
			u.forEach((d) => {
				;(d.style.transitionDuration = `${r}ms`),
					d
						.querySelectorAll(
							'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
						)
						.forEach((p) => {
							p.style.transitionDuration = `${r}ms`
						})
			}),
				ke({ swiper: e, duration: r, transformElements: u })
		},
		recreateShadows: () => {
			e.params.flipEffect,
				e.slides.forEach((r) => {
					let u = r.progress
					e.params.flipEffect.limitRotation && (u = Math.max(Math.min(r.progress, 1), -1)), a(r, u)
				})
		},
		getEffectParams: () => e.params.flipEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			spaceBetween: 0,
			virtualTranslate: !e.params.cssMode,
		}),
	})
}
function At(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			scale: 1,
			modifier: 1,
			slideShadows: !0,
		},
	}),
		oe({
			effect: 'coverflow',
			swiper: e,
			on: i,
			setTranslate: () => {
				const { width: o, height: l, slides: r, slidesSizesGrid: u } = e,
					d = e.params.coverflowEffect,
					p = e.isHorizontal(),
					m = e.translate,
					g = p ? -m + o / 2 : -m + l / 2,
					h = p ? d.rotate : -d.rotate,
					y = d.depth,
					E = we(e)
				for (let w = 0, f = r.length; w < f; w += 1) {
					const c = r[w],
						v = u[w],
						S = c.swiperSlideOffset,
						C = (g - S - v / 2) / v,
						A = typeof d.modifier == 'function' ? d.modifier(C) : C * d.modifier
					let B = p ? h * A : 0,
						k = p ? 0 : h * A,
						b = -y * Math.abs(A),
						x = d.stretch
					typeof x == 'string' && x.indexOf('%') !== -1 && (x = (parseFloat(d.stretch) / 100) * v)
					let P = p ? 0 : x * A,
						T = p ? x * A : 0,
						M = 1 - (1 - d.scale) * Math.abs(A)
					Math.abs(T) < 0.001 && (T = 0),
						Math.abs(P) < 0.001 && (P = 0),
						Math.abs(b) < 0.001 && (b = 0),
						Math.abs(B) < 0.001 && (B = 0),
						Math.abs(k) < 0.001 && (k = 0),
						Math.abs(M) < 0.001 && (M = 0)
					const F = `translate3d(${T}px,${P}px,${b}px)  rotateX(${E(k)}deg) rotateY(${E(
							B
						)}deg) scale(${M})`,
						I = pe(d, c)
					if (
						((I.style.transform = F),
						(c.style.zIndex = -Math.abs(Math.round(A)) + 1),
						d.slideShadows)
					) {
						let Y = p
								? c.querySelector('.swiper-slide-shadow-left')
								: c.querySelector('.swiper-slide-shadow-top'),
							O = p
								? c.querySelector('.swiper-slide-shadow-right')
								: c.querySelector('.swiper-slide-shadow-bottom')
						Y || (Y = le('coverflow', c, p ? 'left' : 'top')),
							O || (O = le('coverflow', c, p ? 'right' : 'bottom')),
							Y && (Y.style.opacity = A > 0 ? A : 0),
							O && (O.style.opacity = -A > 0 ? -A : 0)
					}
				}
			},
			setTransition: (o) => {
				e.slides
					.map((r) => ae(r))
					.forEach((r) => {
						;(r.style.transitionDuration = `${o}ms`),
							r
								.querySelectorAll(
									'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
								)
								.forEach((u) => {
									u.style.transitionDuration = `${o}ms`
								})
					})
			},
			perspective: () => !0,
			overwriteParams: () => ({ watchSlidesProgress: !0 }),
		})
}
function Mt(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		creativeEffect: {
			limitProgress: 1,
			shadowPerProgress: !1,
			progressMultiplier: 1,
			perspective: !0,
			prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
			next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
		},
	})
	const a = (l) => (typeof l == 'string' ? l : `${l}px`)
	oe({
		effect: 'creative',
		swiper: e,
		on: i,
		setTranslate: () => {
			const { slides: l, wrapperEl: r, slidesSizesGrid: u } = e,
				d = e.params.creativeEffect,
				{ progressMultiplier: p } = d,
				m = e.params.centeredSlides,
				g = we(e)
			if (m) {
				const h = u[0] / 2 - e.params.slidesOffsetBefore || 0
				r.style.transform = `translateX(calc(50% - ${h}px))`
			}
			for (let h = 0; h < l.length; h += 1) {
				const y = l[h],
					E = y.progress,
					w = Math.min(Math.max(y.progress, -d.limitProgress), d.limitProgress)
				let f = w
				m || (f = Math.min(Math.max(y.originalProgress, -d.limitProgress), d.limitProgress))
				const c = y.swiperSlideOffset,
					v = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
					S = [0, 0, 0]
				let C = !1
				e.isHorizontal() || ((v[1] = v[0]), (v[0] = 0))
				let A = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 }
				w < 0 ? ((A = d.next), (C = !0)) : w > 0 && ((A = d.prev), (C = !0)),
					v.forEach((M, F) => {
						v[F] = `calc(${M}px + (${a(A.translate[F])} * ${Math.abs(w * p)}))`
					}),
					S.forEach((M, F) => {
						let I = A.rotate[F] * Math.abs(w * p)
						S[F] = I
					}),
					(y.style.zIndex = -Math.abs(Math.round(E)) + l.length)
				const B = v.join(', '),
					k = `rotateX(${g(S[0])}deg) rotateY(${g(S[1])}deg) rotateZ(${g(S[2])}deg)`,
					b = f < 0 ? `scale(${1 + (1 - A.scale) * f * p})` : `scale(${1 - (1 - A.scale) * f * p})`,
					x = f < 0 ? 1 + (1 - A.opacity) * f * p : 1 - (1 - A.opacity) * f * p,
					P = `translate3d(${B}) ${k} ${b}`
				if ((C && A.shadow) || !C) {
					let M = y.querySelector('.swiper-slide-shadow')
					if ((!M && A.shadow && (M = le('creative', y)), M)) {
						const F = d.shadowPerProgress ? w * (1 / d.limitProgress) : w
						M.style.opacity = Math.min(Math.max(Math.abs(F), 0), 1)
					}
				}
				const T = pe(d, y)
				;(T.style.transform = P),
					(T.style.opacity = x),
					A.origin && (T.style.transformOrigin = A.origin)
			}
		},
		setTransition: (l) => {
			const r = e.slides.map((u) => ae(u))
			r.forEach((u) => {
				;(u.style.transitionDuration = `${l}ms`),
					u.querySelectorAll('.swiper-slide-shadow').forEach((d) => {
						d.style.transitionDuration = `${l}ms`
					})
			}),
				ke({ swiper: e, duration: l, transformElements: r, allSlides: !0 })
		},
		perspective: () => e.params.creativeEffect.perspective,
		overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
	})
}
function Pt(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
		oe({
			effect: 'cards',
			swiper: e,
			on: i,
			setTranslate: () => {
				const { slides: o, activeIndex: l, rtlTranslate: r } = e,
					u = e.params.cardsEffect,
					{ startTranslate: d, isTouched: p } = e.touchEventsData,
					m = r ? -e.translate : e.translate
				for (let g = 0; g < o.length; g += 1) {
					const h = o[g],
						y = h.progress,
						E = Math.min(Math.max(y, -4), 4)
					let w = h.swiperSlideOffset
					e.params.centeredSlides &&
						!e.params.cssMode &&
						(e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
						e.params.centeredSlides && e.params.cssMode && (w -= o[0].swiperSlideOffset)
					let f = e.params.cssMode ? -w - e.translate : -w,
						c = 0
					const v = -100 * Math.abs(E)
					let S = 1,
						C = -u.perSlideRotate * E,
						A = u.perSlideOffset - Math.abs(E) * 0.75
					const B = e.virtual && e.params.virtual.enabled ? e.virtual.from + g : g,
						k = (B === l || B === l - 1) && E > 0 && E < 1 && (p || e.params.cssMode) && m < d,
						b = (B === l || B === l + 1) && E < 0 && E > -1 && (p || e.params.cssMode) && m > d
					if (k || b) {
						const M = (1 - Math.abs((Math.abs(E) - 0.5) / 0.5)) ** 0.5
						;(C += -28 * E * M), (S += -0.5 * M), (A += 96 * M), (c = `${-25 * M * Math.abs(E)}%`)
					}
					if (
						(E < 0
							? (f = `calc(${f}px ${r ? '-' : '+'} (${A * Math.abs(E)}%))`)
							: E > 0
							? (f = `calc(${f}px ${r ? '-' : '+'} (-${A * Math.abs(E)}%))`)
							: (f = `${f}px`),
						!e.isHorizontal())
					) {
						const M = c
						;(c = f), (f = M)
					}
					const x = E < 0 ? `${1 + (1 - S) * E}` : `${1 - (1 - S) * E}`,
						P = `
        translate3d(${f}, ${c}, ${v}px)
        rotateZ(${u.rotate ? (r ? -C : C) : 0}deg)
        scale(${x})
      `
					if (u.slideShadows) {
						let M = h.querySelector('.swiper-slide-shadow')
						M || (M = le('cards', h)),
							M && (M.style.opacity = Math.min(Math.max((Math.abs(E) - 0.5) / 0.5, 0), 1))
					}
					h.style.zIndex = -Math.abs(Math.round(y)) + o.length
					const T = pe(u, h)
					T.style.transform = P
				}
			},
			setTransition: (o) => {
				const l = e.slides.map((r) => ae(r))
				l.forEach((r) => {
					;(r.style.transitionDuration = `${o}ms`),
						r.querySelectorAll('.swiper-slide-shadow').forEach((u) => {
							u.style.transitionDuration = `${o}ms`
						})
				}),
					ke({ swiper: e, duration: o, transformElements: l })
			},
			perspective: () => !0,
			overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
		})
}
let Se
function Ft() {
	const s = V(),
		e = Q()
	return {
		smoothScroll:
			e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
		touch: !!('ontouchstart' in s || (s.DocumentTouch && e instanceof s.DocumentTouch)),
	}
}
function et() {
	return Se || (Se = Ft()), Se
}
let be
function Ot(s) {
	let { userAgent: e } = s === void 0 ? {} : s
	const t = et(),
		i = V(),
		a = i.navigator.platform,
		n = e || i.navigator.userAgent,
		o = { ios: !1, android: !1 },
		l = i.screen.width,
		r = i.screen.height,
		u = n.match(/(Android);?[\s\/]+([\d.]+)?/)
	let d = n.match(/(iPad).*OS\s([\d_]+)/)
	const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
		m = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		g = a === 'Win32'
	let h = a === 'MacIntel'
	const y = [
		'1024x1366',
		'1366x1024',
		'834x1194',
		'1194x834',
		'834x1112',
		'1112x834',
		'768x1024',
		'1024x768',
		'820x1180',
		'1180x820',
		'810x1080',
		'1080x810',
	]
	return (
		!d &&
			h &&
			t.touch &&
			y.indexOf(`${l}x${r}`) >= 0 &&
			((d = n.match(/(Version)\/([\d.]+)/)), d || (d = [0, 1, '13_0_0']), (h = !1)),
		u && !g && ((o.os = 'android'), (o.android = !0)),
		(d || m || p) && ((o.os = 'ios'), (o.ios = !0)),
		o
	)
}
function tt(s) {
	return s === void 0 && (s = {}), be || (be = Ot(s)), be
}
let Ee
function It() {
	const s = V(),
		e = tt()
	let t = !1
	function i() {
		const l = s.navigator.userAgent.toLowerCase()
		return l.indexOf('safari') >= 0 && l.indexOf('chrome') < 0 && l.indexOf('android') < 0
	}
	if (i()) {
		const l = String(s.navigator.userAgent)
		if (l.includes('Version/')) {
			const [r, u] = l
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map((d) => Number(d))
			t = r < 16 || (r === 16 && u < 2)
		}
	}
	const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
		n = i(),
		o = n || (a && e.ios)
	return { isSafari: t || n, needPerspectiveFix: t, need3dFix: o, isWebView: a }
}
function Lt() {
	return Ee || (Ee = It()), Ee
}
function zt(s) {
	let { swiper: e, on: t, emit: i } = s
	const a = V()
	let n = null,
		o = null
	const l = () => {
			!e || e.destroyed || !e.initialized || (i('beforeResize'), i('resize'))
		},
		r = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((n = new ResizeObserver((p) => {
					o = a.requestAnimationFrame(() => {
						const { width: m, height: g } = e
						let h = m,
							y = g
						p.forEach((E) => {
							let { contentBoxSize: w, contentRect: f, target: c } = E
							;(c && c !== e.el) ||
								((h = f ? f.width : (w[0] || w).inlineSize),
								(y = f ? f.height : (w[0] || w).blockSize))
						}),
							(h !== m || y !== g) && l()
					})
				})),
				n.observe(e.el))
		},
		u = () => {
			o && a.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), (n = null))
		},
		d = () => {
			!e || e.destroyed || !e.initialized || i('orientationchange')
		}
	t('init', () => {
		if (e.params.resizeObserver && typeof a.ResizeObserver < 'u') {
			r()
			return
		}
		a.addEventListener('resize', l), a.addEventListener('orientationchange', d)
	}),
		t('destroy', () => {
			u(), a.removeEventListener('resize', l), a.removeEventListener('orientationchange', d)
		})
}
function _t(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const n = [],
		o = V(),
		l = function (d, p) {
			p === void 0 && (p = {})
			const m = o.MutationObserver || o.WebkitMutationObserver,
				g = new m((h) => {
					if (e.__preventObserver__) return
					if (h.length === 1) {
						a('observerUpdate', h[0])
						return
					}
					const y = function () {
						a('observerUpdate', h[0])
					}
					o.requestAnimationFrame ? o.requestAnimationFrame(y) : o.setTimeout(y, 0)
				})
			g.observe(d, {
				attributes: typeof p.attributes > 'u' ? !0 : p.attributes,
				childList: e.isElement || (typeof p.childList > 'u' ? !0 : p).childList,
				characterData: typeof p.characterData > 'u' ? !0 : p.characterData,
			}),
				n.push(g)
		},
		r = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const d = Je(e.hostEl)
					for (let p = 0; p < d.length; p += 1) l(d[p])
				}
				l(e.hostEl, { childList: e.params.observeSlideChildren }),
					l(e.wrapperEl, { attributes: !1 })
			}
		},
		u = () => {
			n.forEach((d) => {
				d.disconnect()
			}),
				n.splice(0, n.length)
		}
	t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), i('init', r), i('destroy', u)
}
var qt = {
	on(s, e, t) {
		const i = this
		if (!i.eventsListeners || i.destroyed || typeof e != 'function') return i
		const a = t ? 'unshift' : 'push'
		return (
			s.split(' ').forEach((n) => {
				i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][a](e)
			}),
			i
		)
	},
	once(s, e, t) {
		const i = this
		if (!i.eventsListeners || i.destroyed || typeof e != 'function') return i
		function a() {
			i.off(s, a), a.__emitterProxy && delete a.__emitterProxy
			for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
			e.apply(i, o)
		}
		return (a.__emitterProxy = e), i.on(s, a, t)
	},
	onAny(s, e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || typeof s != 'function') return t
		const i = e ? 'unshift' : 'push'
		return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t
	},
	offAny(s) {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
		const t = e.eventsAnyListeners.indexOf(s)
		return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
	},
	off(s, e) {
		const t = this
		return (
			!t.eventsListeners ||
				t.destroyed ||
				!t.eventsListeners ||
				s.split(' ').forEach((i) => {
					typeof e > 'u'
						? (t.eventsListeners[i] = [])
						: t.eventsListeners[i] &&
						  t.eventsListeners[i].forEach((a, n) => {
								;(a === e || (a.__emitterProxy && a.__emitterProxy === e)) &&
									t.eventsListeners[i].splice(n, 1)
						  })
				}),
			t
		)
	},
	emit() {
		const s = this
		if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s
		let e, t, i
		for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o]
		return (
			typeof n[0] == 'string' || Array.isArray(n[0])
				? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
				: ((e = n[0].events), (t = n[0].data), (i = n[0].context || s)),
			t.unshift(i),
			(Array.isArray(e) ? e : e.split(' ')).forEach((r) => {
				s.eventsAnyListeners &&
					s.eventsAnyListeners.length &&
					s.eventsAnyListeners.forEach((u) => {
						u.apply(i, [r, ...t])
					}),
					s.eventsListeners &&
						s.eventsListeners[r] &&
						s.eventsListeners[r].forEach((u) => {
							u.apply(i, t)
						})
			}),
			s
		)
	},
}
function $t() {
	const s = this
	let e, t
	const i = s.el
	typeof s.params.width < 'u' && s.params.width !== null
		? (e = s.params.width)
		: (e = i.clientWidth),
		typeof s.params.height < 'u' && s.params.height !== null
			? (t = s.params.height)
			: (t = i.clientHeight),
		!((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
			((e =
				e - parseInt(ee(i, 'padding-left') || 0, 10) - parseInt(ee(i, 'padding-right') || 0, 10)),
			(t =
				t - parseInt(ee(i, 'padding-top') || 0, 10) - parseInt(ee(i, 'padding-bottom') || 0, 10)),
			Number.isNaN(e) && (e = 0),
			Number.isNaN(t) && (t = 0),
			Object.assign(s, { width: e, height: t, size: s.isHorizontal() ? e : t }))
}
function Gt() {
	const s = this
	function e(b, x) {
		return parseFloat(b.getPropertyValue(s.getDirectionLabel(x)) || 0)
	}
	const t = s.params,
		{ wrapperEl: i, slidesEl: a, size: n, rtlTranslate: o, wrongRTL: l } = s,
		r = s.virtual && t.virtual.enabled,
		u = r ? s.virtual.slides.length : s.slides.length,
		d = U(a, `.${s.params.slideClass}, swiper-slide`),
		p = r ? s.virtual.slides.length : d.length
	let m = []
	const g = [],
		h = []
	let y = t.slidesOffsetBefore
	typeof y == 'function' && (y = t.slidesOffsetBefore.call(s))
	let E = t.slidesOffsetAfter
	typeof E == 'function' && (E = t.slidesOffsetAfter.call(s))
	const w = s.snapGrid.length,
		f = s.slidesGrid.length
	let c = t.spaceBetween,
		v = -y,
		S = 0,
		C = 0
	if (typeof n > 'u') return
	typeof c == 'string' && c.indexOf('%') >= 0
		? (c = (parseFloat(c.replace('%', '')) / 100) * n)
		: typeof c == 'string' && (c = parseFloat(c)),
		(s.virtualSize = -c),
		d.forEach((b) => {
			o ? (b.style.marginLeft = '') : (b.style.marginRight = ''),
				(b.style.marginBottom = ''),
				(b.style.marginTop = '')
		}),
		t.centeredSlides &&
			t.cssMode &&
			(he(i, '--swiper-centered-offset-before', ''), he(i, '--swiper-centered-offset-after', ''))
	const A = t.grid && t.grid.rows > 1 && s.grid
	A ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides()
	let B
	const k =
		t.slidesPerView === 'auto' &&
		t.breakpoints &&
		Object.keys(t.breakpoints).filter((b) => typeof t.breakpoints[b].slidesPerView < 'u').length > 0
	for (let b = 0; b < p; b += 1) {
		B = 0
		let x
		if (
			(d[b] && (x = d[b]), A && s.grid.updateSlide(b, x, d), !(d[b] && ee(x, 'display') === 'none'))
		) {
			if (t.slidesPerView === 'auto') {
				k && (d[b].style[s.getDirectionLabel('width')] = '')
				const P = getComputedStyle(x),
					T = x.style.transform,
					M = x.style.webkitTransform
				if (
					(T && (x.style.transform = 'none'),
					M && (x.style.webkitTransform = 'none'),
					t.roundLengths)
				)
					B = s.isHorizontal() ? Me(x, 'width') : Me(x, 'height')
				else {
					const F = e(P, 'width'),
						I = e(P, 'padding-left'),
						Y = e(P, 'padding-right'),
						O = e(P, 'margin-left'),
						q = e(P, 'margin-right'),
						L = P.getPropertyValue('box-sizing')
					if (L && L === 'border-box') B = F + O + q
					else {
						const { clientWidth: te, offsetWidth: ce } = x
						B = F + I + Y + O + q + (ce - te)
					}
				}
				T && (x.style.transform = T),
					M && (x.style.webkitTransform = M),
					t.roundLengths && (B = Math.floor(B))
			} else
				(B = (n - (t.slidesPerView - 1) * c) / t.slidesPerView),
					t.roundLengths && (B = Math.floor(B)),
					d[b] && (d[b].style[s.getDirectionLabel('width')] = `${B}px`)
			d[b] && (d[b].swiperSlideSize = B),
				h.push(B),
				t.centeredSlides
					? ((v = v + B / 2 + S / 2 + c),
					  S === 0 && b !== 0 && (v = v - n / 2 - c),
					  b === 0 && (v = v - n / 2 - c),
					  Math.abs(v) < 1 / 1e3 && (v = 0),
					  t.roundLengths && (v = Math.floor(v)),
					  C % t.slidesPerGroup === 0 && m.push(v),
					  g.push(v))
					: (t.roundLengths && (v = Math.floor(v)),
					  (C - Math.min(s.params.slidesPerGroupSkip, C)) % s.params.slidesPerGroup === 0 &&
							m.push(v),
					  g.push(v),
					  (v = v + B + c)),
				(s.virtualSize += B + c),
				(S = B),
				(C += 1)
		}
	}
	if (
		((s.virtualSize = Math.max(s.virtualSize, n) + E),
		o &&
			l &&
			(t.effect === 'slide' || t.effect === 'coverflow') &&
			(i.style.width = `${s.virtualSize + c}px`),
		t.setWrapperSize && (i.style[s.getDirectionLabel('width')] = `${s.virtualSize + c}px`),
		A && s.grid.updateWrapperSize(B, m),
		!t.centeredSlides)
	) {
		const b = []
		for (let x = 0; x < m.length; x += 1) {
			let P = m[x]
			t.roundLengths && (P = Math.floor(P)), m[x] <= s.virtualSize - n && b.push(P)
		}
		;(m = b),
			Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 && m.push(s.virtualSize - n)
	}
	if (r && t.loop) {
		const b = h[0] + c
		if (t.slidesPerGroup > 1) {
			const x = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup),
				P = b * t.slidesPerGroup
			for (let T = 0; T < x; T += 1) m.push(m[m.length - 1] + P)
		}
		for (let x = 0; x < s.virtual.slidesBefore + s.virtual.slidesAfter; x += 1)
			t.slidesPerGroup === 1 && m.push(m[m.length - 1] + b),
				g.push(g[g.length - 1] + b),
				(s.virtualSize += b)
	}
	if ((m.length === 0 && (m = [0]), c !== 0)) {
		const b = s.isHorizontal() && o ? 'marginLeft' : s.getDirectionLabel('marginRight')
		d.filter((x, P) => (!t.cssMode || t.loop ? !0 : P !== d.length - 1)).forEach((x) => {
			x.style[b] = `${c}px`
		})
	}
	if (t.centeredSlides && t.centeredSlidesBounds) {
		let b = 0
		h.forEach((P) => {
			b += P + (c || 0)
		}),
			(b -= c)
		const x = b > n ? b - n : 0
		m = m.map((P) => (P <= 0 ? -y : P > x ? x + E : P))
	}
	if (t.centerInsufficientSlides) {
		let b = 0
		h.forEach((P) => {
			b += P + (c || 0)
		}),
			(b -= c)
		const x = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0)
		if (b + x < n) {
			const P = (n - b - x) / 2
			m.forEach((T, M) => {
				m[M] = T - P
			}),
				g.forEach((T, M) => {
					g[M] = T + P
				})
		}
	}
	if (
		(Object.assign(s, { slides: d, snapGrid: m, slidesGrid: g, slidesSizesGrid: h }),
		t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
	) {
		he(i, '--swiper-centered-offset-before', `${-m[0]}px`),
			he(i, '--swiper-centered-offset-after', `${s.size / 2 - h[h.length - 1] / 2}px`)
		const b = -s.snapGrid[0],
			x = -s.slidesGrid[0]
		;(s.snapGrid = s.snapGrid.map((P) => P + b)), (s.slidesGrid = s.slidesGrid.map((P) => P + x))
	}
	if (
		(p !== u && s.emit('slidesLengthChange'),
		m.length !== w && (s.params.watchOverflow && s.checkOverflow(), s.emit('snapGridLengthChange')),
		g.length !== f && s.emit('slidesGridLengthChange'),
		t.watchSlidesProgress && s.updateSlidesOffset(),
		s.emit('slidesUpdated'),
		!r && !t.cssMode && (t.effect === 'slide' || t.effect === 'fade'))
	) {
		const b = `${t.containerModifierClass}backface-hidden`,
			x = s.el.classList.contains(b)
		p <= t.maxBackfaceHiddenSlides ? x || s.el.classList.add(b) : x && s.el.classList.remove(b)
	}
}
function Nt(s) {
	const e = this,
		t = [],
		i = e.virtual && e.params.virtual.enabled
	let a = 0,
		n
	typeof s == 'number' ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed)
	const o = (l) => (i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l])
	if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)
			(e.visibleSlides || []).forEach((l) => {
				t.push(l)
			})
		else
			for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
				const l = e.activeIndex + n
				if (l > e.slides.length && !i) break
				t.push(o(l))
			}
	else t.push(o(e.activeIndex))
	for (n = 0; n < t.length; n += 1)
		if (typeof t[n] < 'u') {
			const l = t[n].offsetHeight
			a = l > a ? l : a
		}
	;(a || a === 0) && (e.wrapperEl.style.height = `${a}px`)
}
function Vt() {
	const s = this,
		e = s.slides,
		t = s.isElement ? (s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop) : 0
	for (let i = 0; i < e.length; i += 1)
		e[i].swiperSlideOffset =
			(s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment()
}
const $e = (s, e, t) => {
	e && !s.classList.contains(t)
		? s.classList.add(t)
		: !e && s.classList.contains(t) && s.classList.remove(t)
}
function Ht(s) {
	s === void 0 && (s = (this && this.translate) || 0)
	const e = this,
		t = e.params,
		{ slides: i, rtlTranslate: a, snapGrid: n } = e
	if (i.length === 0) return
	typeof i[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
	let o = -s
	a && (o = s), (e.visibleSlidesIndexes = []), (e.visibleSlides = [])
	let l = t.spaceBetween
	typeof l == 'string' && l.indexOf('%') >= 0
		? (l = (parseFloat(l.replace('%', '')) / 100) * e.size)
		: typeof l == 'string' && (l = parseFloat(l))
	for (let r = 0; r < i.length; r += 1) {
		const u = i[r]
		let d = u.swiperSlideOffset
		t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset)
		const p = (o + (t.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + l),
			m = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + l),
			g = -(o - d),
			h = g + e.slidesSizesGrid[r],
			y = g >= 0 && g <= e.size - e.slidesSizesGrid[r],
			E = (g >= 0 && g < e.size - 1) || (h > 1 && h <= e.size) || (g <= 0 && h >= e.size)
		E && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(r)),
			$e(u, E, t.slideVisibleClass),
			$e(u, y, t.slideFullyVisibleClass),
			(u.progress = a ? -p : p),
			(u.originalProgress = a ? -m : m)
	}
}
function Rt(s) {
	const e = this
	if (typeof s > 'u') {
		const d = e.rtlTranslate ? -1 : 1
		s = (e && e.translate && e.translate * d) || 0
	}
	const t = e.params,
		i = e.maxTranslate() - e.minTranslate()
	let { progress: a, isBeginning: n, isEnd: o, progressLoop: l } = e
	const r = n,
		u = o
	if (i === 0) (a = 0), (n = !0), (o = !0)
	else {
		a = (s - e.minTranslate()) / i
		const d = Math.abs(s - e.minTranslate()) < 1,
			p = Math.abs(s - e.maxTranslate()) < 1
		;(n = d || a <= 0), (o = p || a >= 1), d && (a = 0), p && (a = 1)
	}
	if (t.loop) {
		const d = e.getSlideIndexByData(0),
			p = e.getSlideIndexByData(e.slides.length - 1),
			m = e.slidesGrid[d],
			g = e.slidesGrid[p],
			h = e.slidesGrid[e.slidesGrid.length - 1],
			y = Math.abs(s)
		y >= m ? (l = (y - m) / h) : (l = (y + h - g) / h), l > 1 && (l -= 1)
	}
	Object.assign(e, { progress: a, progressLoop: l, isBeginning: n, isEnd: o }),
		(t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && e.updateSlidesProgress(s),
		n && !r && e.emit('reachBeginning toEdge'),
		o && !u && e.emit('reachEnd toEdge'),
		((r && !n) || (u && !o)) && e.emit('fromEdge'),
		e.emit('progress', a)
}
const Te = (s, e, t) => {
	e && !s.classList.contains(t)
		? s.classList.add(t)
		: !e && s.classList.contains(t) && s.classList.remove(t)
}
function jt() {
	const s = this,
		{ slides: e, params: t, slidesEl: i, activeIndex: a } = s,
		n = s.virtual && t.virtual.enabled,
		o = s.grid && t.grid && t.grid.rows > 1,
		l = (p) => U(i, `.${t.slideClass}${p}, swiper-slide${p}`)[0]
	let r, u, d
	if (n)
		if (t.loop) {
			let p = a - s.virtual.slidesBefore
			p < 0 && (p = s.virtual.slides.length + p),
				p >= s.virtual.slides.length && (p -= s.virtual.slides.length),
				(r = l(`[data-swiper-slide-index="${p}"]`))
		} else r = l(`[data-swiper-slide-index="${a}"]`)
	else
		o
			? ((r = e.filter((p) => p.column === a)[0]),
			  (d = e.filter((p) => p.column === a + 1)[0]),
			  (u = e.filter((p) => p.column === a - 1)[0]))
			: (r = e[a])
	r &&
		(o ||
			((d = Et(r, `.${t.slideClass}, swiper-slide`)[0]),
			t.loop && !d && (d = e[0]),
			(u = bt(r, `.${t.slideClass}, swiper-slide`)[0]),
			t.loop && !u === 0 && (u = e[e.length - 1]))),
		e.forEach((p) => {
			Te(p, p === r, t.slideActiveClass),
				Te(p, p === d, t.slideNextClass),
				Te(p, p === u, t.slidePrevClass)
		}),
		s.emitSlidesClasses()
}
const ge = (s, e) => {
		if (!s || s.destroyed || !s.params) return
		const t = () => (s.isElement ? 'swiper-slide' : `.${s.params.slideClass}`),
			i = e.closest(t())
		if (i) {
			let a = i.querySelector(`.${s.params.lazyPreloaderClass}`)
			!a &&
				s.isElement &&
				(i.shadowRoot
					? (a = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							i.shadowRoot &&
								((a = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`)),
								a && a.remove())
					  })),
				a && a.remove()
		}
	},
	xe = (s, e) => {
		if (!s.slides[e]) return
		const t = s.slides[e].querySelector('[loading="lazy"]')
		t && t.removeAttribute('loading')
	},
	Pe = (s) => {
		if (!s || s.destroyed || !s.params) return
		let e = s.params.lazyPreloadPrevNext
		const t = s.slides.length
		if (!t || !e || e < 0) return
		e = Math.min(e, t)
		const i =
				s.params.slidesPerView === 'auto'
					? s.slidesPerViewDynamic()
					: Math.ceil(s.params.slidesPerView),
			a = s.activeIndex
		if (s.params.grid && s.params.grid.rows > 1) {
			const o = a,
				l = [o - e]
			l.push(...Array.from({ length: e }).map((r, u) => o + i + u)),
				s.slides.forEach((r, u) => {
					l.includes(r.column) && xe(s, u)
				})
			return
		}
		const n = a + i - 1
		if (s.params.rewind || s.params.loop)
			for (let o = a - e; o <= n + e; o += 1) {
				const l = ((o % t) + t) % t
				;(l < a || l > n) && xe(s, l)
			}
		else
			for (let o = Math.max(a - e, 0); o <= Math.min(n + e, t - 1); o += 1)
				o !== a && (o > n || o < a) && xe(s, o)
	}
function Wt(s) {
	const { slidesGrid: e, params: t } = s,
		i = s.rtlTranslate ? s.translate : -s.translate
	let a
	for (let n = 0; n < e.length; n += 1)
		typeof e[n + 1] < 'u'
			? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2
				? (a = n)
				: i >= e[n] && i < e[n + 1] && (a = n + 1)
			: i >= e[n] && (a = n)
	return t.normalizeSlideIndex && (a < 0 || typeof a > 'u') && (a = 0), a
}
function Xt(s) {
	const e = this,
		t = e.rtlTranslate ? e.translate : -e.translate,
		{ snapGrid: i, params: a, activeIndex: n, realIndex: o, snapIndex: l } = e
	let r = s,
		u
	const d = (g) => {
		let h = g - e.virtual.slidesBefore
		return (
			h < 0 && (h = e.virtual.slides.length + h),
			h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
			h
		)
	}
	if ((typeof r > 'u' && (r = Wt(e)), i.indexOf(t) >= 0)) u = i.indexOf(t)
	else {
		const g = Math.min(a.slidesPerGroupSkip, r)
		u = g + Math.floor((r - g) / a.slidesPerGroup)
	}
	if ((u >= i.length && (u = i.length - 1), r === n && !e.params.loop)) {
		u !== l && ((e.snapIndex = u), e.emit('snapIndexChange'))
		return
	}
	if (r === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
		e.realIndex = d(r)
		return
	}
	const p = e.grid && a.grid && a.grid.rows > 1
	let m
	if (e.virtual && a.virtual.enabled && a.loop) m = d(r)
	else if (p) {
		const g = e.slides.filter((y) => y.column === r)[0]
		let h = parseInt(g.getAttribute('data-swiper-slide-index'), 10)
		Number.isNaN(h) && (h = Math.max(e.slides.indexOf(g), 0)), (m = Math.floor(h / a.grid.rows))
	} else if (e.slides[r]) {
		const g = e.slides[r].getAttribute('data-swiper-slide-index')
		g ? (m = parseInt(g, 10)) : (m = r)
	} else m = r
	Object.assign(e, {
		previousSnapIndex: l,
		snapIndex: u,
		previousRealIndex: o,
		realIndex: m,
		previousIndex: n,
		activeIndex: r,
	}),
		e.initialized && Pe(e),
		e.emit('activeIndexChange'),
		e.emit('snapIndexChange'),
		(e.initialized || e.params.runCallbacksOnInit) &&
			(o !== m && e.emit('realIndexChange'), e.emit('slideChange'))
}
function Yt(s, e) {
	const t = this,
		i = t.params
	let a = s.closest(`.${i.slideClass}, swiper-slide`)
	!a &&
		t.isElement &&
		e &&
		e.length > 1 &&
		e.includes(s) &&
		[...e.slice(e.indexOf(s) + 1, e.length)].forEach((l) => {
			!a && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (a = l)
		})
	let n = !1,
		o
	if (a) {
		for (let l = 0; l < t.slides.length; l += 1)
			if (t.slides[l] === a) {
				;(n = !0), (o = l)
				break
			}
	}
	if (a && n)
		(t.clickedSlide = a),
			t.virtual && t.params.virtual.enabled
				? (t.clickedIndex = parseInt(a.getAttribute('data-swiper-slide-index'), 10))
				: (t.clickedIndex = o)
	else {
		;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
		return
	}
	i.slideToClickedSlide &&
		t.clickedIndex !== void 0 &&
		t.clickedIndex !== t.activeIndex &&
		t.slideToClickedSlide()
}
var Ut = {
	updateSize: $t,
	updateSlides: Gt,
	updateAutoHeight: Nt,
	updateSlidesOffset: Vt,
	updateSlidesProgress: Ht,
	updateProgress: Rt,
	updateSlidesClasses: jt,
	updateActiveIndex: Xt,
	updateClickedSlide: Yt,
}
function Kt(s) {
	s === void 0 && (s = this.isHorizontal() ? 'x' : 'y')
	const e = this,
		{ params: t, rtlTranslate: i, translate: a, wrapperEl: n } = e
	if (t.virtualTranslate) return i ? -a : a
	if (t.cssMode) return a
	let o = wt(n, s)
	return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0
}
function Zt(s, e) {
	const t = this,
		{ rtlTranslate: i, params: a, wrapperEl: n, progress: o } = t
	let l = 0,
		r = 0
	const u = 0
	t.isHorizontal() ? (l = i ? -s : s) : (r = s),
		a.roundLengths && ((l = Math.floor(l)), (r = Math.floor(r))),
		(t.previousTranslate = t.translate),
		(t.translate = t.isHorizontal() ? l : r),
		a.cssMode
			? (n[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal() ? -l : -r)
			: a.virtualTranslate ||
			  (t.isHorizontal() ? (l -= t.cssOverflowAdjustment()) : (r -= t.cssOverflowAdjustment()),
			  (n.style.transform = `translate3d(${l}px, ${r}px, ${u}px)`))
	let d
	const p = t.maxTranslate() - t.minTranslate()
	p === 0 ? (d = 0) : (d = (s - t.minTranslate()) / p),
		d !== o && t.updateProgress(s),
		t.emit('setTranslate', t.translate, e)
}
function Jt() {
	return -this.snapGrid[0]
}
function Qt() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function es(s, e, t, i, a) {
	s === void 0 && (s = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		i === void 0 && (i = !0)
	const n = this,
		{ params: o, wrapperEl: l } = n
	if (n.animating && o.preventInteractionOnTransition) return !1
	const r = n.minTranslate(),
		u = n.maxTranslate()
	let d
	if ((i && s > r ? (d = r) : i && s < u ? (d = u) : (d = s), n.updateProgress(d), o.cssMode)) {
		const p = n.isHorizontal()
		if (e === 0) l[p ? 'scrollLeft' : 'scrollTop'] = -d
		else {
			if (!n.support.smoothScroll)
				return Ze({ swiper: n, targetPosition: -d, side: p ? 'left' : 'top' }), !0
			l.scrollTo({ [p ? 'left' : 'top']: -d, behavior: 'smooth' })
		}
		return !0
	}
	return (
		e === 0
			? (n.setTransition(0),
			  n.setTranslate(d),
			  t && (n.emit('beforeTransitionStart', e, a), n.emit('transitionEnd')))
			: (n.setTransition(e),
			  n.setTranslate(d),
			  t && (n.emit('beforeTransitionStart', e, a), n.emit('transitionStart')),
			  n.animating ||
					((n.animating = !0),
					n.onTranslateToWrapperTransitionEnd ||
						(n.onTranslateToWrapperTransitionEnd = function (m) {
							!n ||
								n.destroyed ||
								(m.target === this &&
									(n.wrapperEl.removeEventListener(
										'transitionend',
										n.onTranslateToWrapperTransitionEnd
									),
									(n.onTranslateToWrapperTransitionEnd = null),
									delete n.onTranslateToWrapperTransitionEnd,
									(n.animating = !1),
									t && n.emit('transitionEnd')))
						}),
					n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
		!0
	)
}
var ts = { getTranslate: Kt, setTranslate: Zt, minTranslate: Jt, maxTranslate: Qt, translateTo: es }
function ss(s, e) {
	const t = this
	t.params.cssMode ||
		((t.wrapperEl.style.transitionDuration = `${s}ms`),
		(t.wrapperEl.style.transitionDelay = s === 0 ? '0ms' : '')),
		t.emit('setTransition', s, e)
}
function st(s) {
	let { swiper: e, runCallbacks: t, direction: i, step: a } = s
	const { activeIndex: n, previousIndex: o } = e
	let l = i
	if (
		(l || (n > o ? (l = 'next') : n < o ? (l = 'prev') : (l = 'reset')),
		e.emit(`transition${a}`),
		t && n !== o)
	) {
		if (l === 'reset') {
			e.emit(`slideResetTransition${a}`)
			return
		}
		e.emit(`slideChangeTransition${a}`),
			l === 'next' ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
	}
}
function is(s, e) {
	s === void 0 && (s = !0)
	const t = this,
		{ params: i } = t
	i.cssMode ||
		(i.autoHeight && t.updateAutoHeight(),
		st({ swiper: t, runCallbacks: s, direction: e, step: 'Start' }))
}
function as(s, e) {
	s === void 0 && (s = !0)
	const t = this,
		{ params: i } = t
	;(t.animating = !1),
		!i.cssMode &&
			(t.setTransition(0), st({ swiper: t, runCallbacks: s, direction: e, step: 'End' }))
}
var ns = { setTransition: ss, transitionStart: is, transitionEnd: as }
function rs(s, e, t, i, a) {
	s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == 'string' && (s = parseInt(s, 10))
	const n = this
	let o = s
	o < 0 && (o = 0)
	const {
		params: l,
		snapGrid: r,
		slidesGrid: u,
		previousIndex: d,
		activeIndex: p,
		rtlTranslate: m,
		wrapperEl: g,
		enabled: h,
	} = n
	if ((!h && !i && !a) || n.destroyed || (n.animating && l.preventInteractionOnTransition))
		return !1
	typeof e > 'u' && (e = n.params.speed)
	const y = Math.min(n.params.slidesPerGroupSkip, o)
	let E = y + Math.floor((o - y) / n.params.slidesPerGroup)
	E >= r.length && (E = r.length - 1)
	const w = -r[E]
	if (l.normalizeSlideIndex)
		for (let S = 0; S < u.length; S += 1) {
			const C = -Math.floor(w * 100),
				A = Math.floor(u[S] * 100),
				B = Math.floor(u[S + 1] * 100)
			typeof u[S + 1] < 'u'
				? C >= A && C < B - (B - A) / 2
					? (o = S)
					: C >= A && C < B && (o = S + 1)
				: C >= A && (o = S)
		}
	if (
		n.initialized &&
		o !== p &&
		((!n.allowSlideNext &&
			(m ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) ||
			(!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== o))
	)
		return !1
	o !== (d || 0) && t && n.emit('beforeSlideChangeStart'), n.updateProgress(w)
	let f
	o > p ? (f = 'next') : o < p ? (f = 'prev') : (f = 'reset')
	const c = n.virtual && n.params.virtual.enabled
	if (!(c && a) && ((m && -w === n.translate) || (!m && w === n.translate)))
		return (
			n.updateActiveIndex(o),
			l.autoHeight && n.updateAutoHeight(),
			n.updateSlidesClasses(),
			l.effect !== 'slide' && n.setTranslate(w),
			f !== 'reset' && (n.transitionStart(t, f), n.transitionEnd(t, f)),
			!1
		)
	if (l.cssMode) {
		const S = n.isHorizontal(),
			C = m ? w : -w
		if (e === 0)
			c && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
				c && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
					? ((n._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							g[S ? 'scrollLeft' : 'scrollTop'] = C
					  }))
					: (g[S ? 'scrollLeft' : 'scrollTop'] = C),
				c &&
					requestAnimationFrame(() => {
						;(n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1)
					})
		else {
			if (!n.support.smoothScroll)
				return Ze({ swiper: n, targetPosition: C, side: S ? 'left' : 'top' }), !0
			g.scrollTo({ [S ? 'left' : 'top']: C, behavior: 'smooth' })
		}
		return !0
	}
	return (
		n.setTransition(e),
		n.setTranslate(w),
		n.updateActiveIndex(o),
		n.updateSlidesClasses(),
		n.emit('beforeTransitionStart', e, i),
		n.transitionStart(t, f),
		e === 0
			? n.transitionEnd(t, f)
			: n.animating ||
			  ((n.animating = !0),
			  n.onSlideToWrapperTransitionEnd ||
					(n.onSlideToWrapperTransitionEnd = function (C) {
						!n ||
							n.destroyed ||
							(C.target === this &&
								(n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
								(n.onSlideToWrapperTransitionEnd = null),
								delete n.onSlideToWrapperTransitionEnd,
								n.transitionEnd(t, f)))
					}),
			  n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
		!0
	)
}
function ls(s, e, t, i) {
	s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == 'string' && (s = parseInt(s, 10))
	const a = this
	if (a.destroyed) return
	typeof e > 'u' && (e = a.params.speed)
	const n = a.grid && a.params.grid && a.params.grid.rows > 1
	let o = s
	if (a.params.loop)
		if (a.virtual && a.params.virtual.enabled) o = o + a.virtual.slidesBefore
		else {
			let l
			if (n) {
				const m = o * a.params.grid.rows
				l = a.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === m)[0].column
			} else l = a.getSlideIndexByData(o)
			const r = n ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
				{ centeredSlides: u } = a.params
			let d = a.params.slidesPerView
			d === 'auto'
				? (d = a.slidesPerViewDynamic())
				: ((d = Math.ceil(parseFloat(a.params.slidesPerView, 10))), u && d % 2 === 0 && (d = d + 1))
			let p = r - l < d
			if (
				(u && (p = p || l < Math.ceil(d / 2)),
				i && u && a.params.slidesPerView !== 'auto' && !n && (p = !1),
				p)
			) {
				const m = u
					? l < a.activeIndex
						? 'prev'
						: 'next'
					: l - a.activeIndex - 1 < a.params.slidesPerView
					? 'next'
					: 'prev'
				a.loopFix({
					direction: m,
					slideTo: !0,
					activeSlideIndex: m === 'next' ? l + 1 : l - r + 1,
					slideRealIndex: m === 'next' ? a.realIndex : void 0,
				})
			}
			if (n) {
				const m = o * a.params.grid.rows
				o = a.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === m)[0].column
			} else o = a.getSlideIndexByData(o)
		}
	return (
		requestAnimationFrame(() => {
			a.slideTo(o, e, t, i)
		}),
		a
	)
}
function os(s, e, t) {
	e === void 0 && (e = !0)
	const i = this,
		{ enabled: a, params: n, animating: o } = i
	if (!a || i.destroyed) return i
	typeof s > 'u' && (s = i.params.speed)
	let l = n.slidesPerGroup
	n.slidesPerView === 'auto' &&
		n.slidesPerGroup === 1 &&
		n.slidesPerGroupAuto &&
		(l = Math.max(i.slidesPerViewDynamic('current', !0), 1))
	const r = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
		u = i.virtual && n.virtual.enabled
	if (n.loop) {
		if (o && !u && n.loopPreventsSliding) return !1
		if (
			(i.loopFix({ direction: 'next' }),
			(i._clientLeft = i.wrapperEl.clientLeft),
			i.activeIndex === i.slides.length - 1 && n.cssMode)
		)
			return (
				requestAnimationFrame(() => {
					i.slideTo(i.activeIndex + r, s, e, t)
				}),
				!0
			)
	}
	return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + r, s, e, t)
}
function ds(s, e, t) {
	e === void 0 && (e = !0)
	const i = this,
		{ params: a, snapGrid: n, slidesGrid: o, rtlTranslate: l, enabled: r, animating: u } = i
	if (!r || i.destroyed) return i
	typeof s > 'u' && (s = i.params.speed)
	const d = i.virtual && a.virtual.enabled
	if (a.loop) {
		if (u && !d && a.loopPreventsSliding) return !1
		i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft)
	}
	const p = l ? i.translate : -i.translate
	function m(w) {
		return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
	}
	const g = m(p),
		h = n.map((w) => m(w))
	let y = n[h.indexOf(g) - 1]
	if (typeof y > 'u' && a.cssMode) {
		let w
		n.forEach((f, c) => {
			g >= f && (w = c)
		}),
			typeof w < 'u' && (y = n[w > 0 ? w - 1 : w])
	}
	let E = 0
	if (
		(typeof y < 'u' &&
			((E = o.indexOf(y)),
			E < 0 && (E = i.activeIndex - 1),
			a.slidesPerView === 'auto' &&
				a.slidesPerGroup === 1 &&
				a.slidesPerGroupAuto &&
				((E = E - i.slidesPerViewDynamic('previous', !0) + 1), (E = Math.max(E, 0)))),
		a.rewind && i.isBeginning)
	) {
		const w =
			i.params.virtual && i.params.virtual.enabled && i.virtual
				? i.virtual.slides.length - 1
				: i.slides.length - 1
		return i.slideTo(w, s, e, t)
	} else if (a.loop && i.activeIndex === 0 && a.cssMode)
		return (
			requestAnimationFrame(() => {
				i.slideTo(E, s, e, t)
			}),
			!0
		)
	return i.slideTo(E, s, e, t)
}
function us(s, e, t) {
	e === void 0 && (e = !0)
	const i = this
	if (!i.destroyed) return typeof s > 'u' && (s = i.params.speed), i.slideTo(i.activeIndex, s, e, t)
}
function ps(s, e, t, i) {
	e === void 0 && (e = !0), i === void 0 && (i = 0.5)
	const a = this
	if (a.destroyed) return
	typeof s > 'u' && (s = a.params.speed)
	let n = a.activeIndex
	const o = Math.min(a.params.slidesPerGroupSkip, n),
		l = o + Math.floor((n - o) / a.params.slidesPerGroup),
		r = a.rtlTranslate ? a.translate : -a.translate
	if (r >= a.snapGrid[l]) {
		const u = a.snapGrid[l],
			d = a.snapGrid[l + 1]
		r - u > (d - u) * i && (n += a.params.slidesPerGroup)
	} else {
		const u = a.snapGrid[l - 1],
			d = a.snapGrid[l]
		r - u <= (d - u) * i && (n -= a.params.slidesPerGroup)
	}
	return (n = Math.max(n, 0)), (n = Math.min(n, a.slidesGrid.length - 1)), a.slideTo(n, s, e, t)
}
function cs() {
	const s = this
	if (s.destroyed) return
	const { params: e, slidesEl: t } = s,
		i = e.slidesPerView === 'auto' ? s.slidesPerViewDynamic() : e.slidesPerView
	let a = s.clickedIndex,
		n
	const o = s.isElement ? 'swiper-slide' : `.${e.slideClass}`
	if (e.loop) {
		if (s.animating) return
		;(n = parseInt(s.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			e.centeredSlides
				? a < s.loopedSlides - i / 2 || a > s.slides.length - s.loopedSlides + i / 2
					? (s.loopFix(),
					  (a = s.getSlideIndex(U(t, `${o}[data-swiper-slide-index="${n}"]`)[0])),
					  ue(() => {
							s.slideTo(a)
					  }))
					: s.slideTo(a)
				: a > s.slides.length - i
				? (s.loopFix(),
				  (a = s.getSlideIndex(U(t, `${o}[data-swiper-slide-index="${n}"]`)[0])),
				  ue(() => {
						s.slideTo(a)
				  }))
				: s.slideTo(a)
	} else s.slideTo(a)
}
var fs = {
	slideTo: rs,
	slideToLoop: ls,
	slideNext: os,
	slidePrev: ds,
	slideReset: us,
	slideToClosest: ps,
	slideToClickedSlide: cs,
}
function hs(s) {
	const e = this,
		{ params: t, slidesEl: i } = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	const a = () => {
			U(i, `.${t.slideClass}, swiper-slide`).forEach((p, m) => {
				p.setAttribute('data-swiper-slide-index', m)
			})
		},
		n = e.grid && t.grid && t.grid.rows > 1,
		o = t.slidesPerGroup * (n ? t.grid.rows : 1),
		l = e.slides.length % o !== 0,
		r = n && e.slides.length % t.grid.rows !== 0,
		u = (d) => {
			for (let p = 0; p < d; p += 1) {
				const m = e.isElement
					? J('swiper-slide', [t.slideBlankClass])
					: J('div', [t.slideClass, t.slideBlankClass])
				e.slidesEl.append(m)
			}
		}
	if (l) {
		if (t.loopAddBlankSlides) {
			const d = o - (e.slides.length % o)
			u(d), e.recalcSlides(), e.updateSlides()
		} else
			ve(
				'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		a()
	} else if (r) {
		if (t.loopAddBlankSlides) {
			const d = t.grid.rows - (e.slides.length % t.grid.rows)
			u(d), e.recalcSlides(), e.updateSlides()
		} else
			ve(
				'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		a()
	} else a()
	e.loopFix({ slideRealIndex: s, direction: t.centeredSlides ? void 0 : 'next' })
}
function ms(s) {
	let {
		slideRealIndex: e,
		slideTo: t = !0,
		direction: i,
		setTranslate: a,
		activeSlideIndex: n,
		byController: o,
		byMousewheel: l,
	} = s === void 0 ? {} : s
	const r = this
	if (!r.params.loop) return
	r.emit('beforeLoopFix')
	const { slides: u, allowSlidePrev: d, allowSlideNext: p, slidesEl: m, params: g } = r,
		{ centeredSlides: h } = g
	if (((r.allowSlidePrev = !0), (r.allowSlideNext = !0), r.virtual && g.virtual.enabled)) {
		t &&
			(!g.centeredSlides && r.snapIndex === 0
				? r.slideTo(r.virtual.slides.length, 0, !1, !0)
				: g.centeredSlides && r.snapIndex < g.slidesPerView
				? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0)
				: r.snapIndex === r.snapGrid.length - 1 && r.slideTo(r.virtual.slidesBefore, 0, !1, !0)),
			(r.allowSlidePrev = d),
			(r.allowSlideNext = p),
			r.emit('loopFix')
		return
	}
	let y = g.slidesPerView
	y === 'auto'
		? (y = r.slidesPerViewDynamic())
		: ((y = Math.ceil(parseFloat(g.slidesPerView, 10))), h && y % 2 === 0 && (y = y + 1))
	const E = g.slidesPerGroupAuto ? y : g.slidesPerGroup
	let w = E
	w % E !== 0 && (w += E - (w % E)), (w += g.loopAdditionalSlides), (r.loopedSlides = w)
	const f = r.grid && g.grid && g.grid.rows > 1
	u.length < y + w
		? ve(
				'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
		  )
		: f &&
		  g.grid.fill === 'row' &&
		  ve('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`')
	const c = [],
		v = []
	let S = r.activeIndex
	typeof n > 'u'
		? (n = r.getSlideIndex(u.filter((T) => T.classList.contains(g.slideActiveClass))[0]))
		: (S = n)
	const C = i === 'next' || !i,
		A = i === 'prev' || !i
	let B = 0,
		k = 0
	const b = f ? Math.ceil(u.length / g.grid.rows) : u.length,
		P = (f ? u[n].column : n) + (h && typeof a > 'u' ? -y / 2 + 0.5 : 0)
	if (P < w) {
		B = Math.max(w - P, E)
		for (let T = 0; T < w - P; T += 1) {
			const M = T - Math.floor(T / b) * b
			if (f) {
				const F = b - M - 1
				for (let I = u.length - 1; I >= 0; I -= 1) u[I].column === F && c.push(I)
			} else c.push(b - M - 1)
		}
	} else if (P + y > b - w) {
		k = Math.max(P - (b - w * 2), E)
		for (let T = 0; T < k; T += 1) {
			const M = T - Math.floor(T / b) * b
			f
				? u.forEach((F, I) => {
						F.column === M && v.push(I)
				  })
				: v.push(M)
		}
	}
	if (
		((r.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			r.__preventObserver__ = !1
		}),
		A &&
			c.forEach((T) => {
				;(u[T].swiperLoopMoveDOM = !0), m.prepend(u[T]), (u[T].swiperLoopMoveDOM = !1)
			}),
		C &&
			v.forEach((T) => {
				;(u[T].swiperLoopMoveDOM = !0), m.append(u[T]), (u[T].swiperLoopMoveDOM = !1)
			}),
		r.recalcSlides(),
		g.slidesPerView === 'auto'
			? r.updateSlides()
			: f &&
			  ((c.length > 0 && A) || (v.length > 0 && C)) &&
			  r.slides.forEach((T, M) => {
					r.grid.updateSlide(M, T, r.slides)
			  }),
		g.watchSlidesProgress && r.updateSlidesOffset(),
		t)
	) {
		if (c.length > 0 && A) {
			if (typeof e > 'u') {
				const T = r.slidesGrid[S],
					F = r.slidesGrid[S + B] - T
				l
					? r.setTranslate(r.translate - F)
					: (r.slideTo(S + Math.ceil(B), 0, !1, !0),
					  a &&
							((r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - F),
							(r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - F)))
			} else if (a) {
				const T = f ? c.length / g.grid.rows : c.length
				r.slideTo(r.activeIndex + T, 0, !1, !0), (r.touchEventsData.currentTranslate = r.translate)
			}
		} else if (v.length > 0 && C)
			if (typeof e > 'u') {
				const T = r.slidesGrid[S],
					F = r.slidesGrid[S - k] - T
				l
					? r.setTranslate(r.translate - F)
					: (r.slideTo(S - k, 0, !1, !0),
					  a &&
							((r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - F),
							(r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - F)))
			} else {
				const T = f ? v.length / g.grid.rows : v.length
				r.slideTo(r.activeIndex - T, 0, !1, !0)
			}
	}
	if (
		((r.allowSlidePrev = d), (r.allowSlideNext = p), r.controller && r.controller.control && !o)
	) {
		const T = {
			slideRealIndex: e,
			direction: i,
			setTranslate: a,
			activeSlideIndex: n,
			byController: !0,
		}
		Array.isArray(r.controller.control)
			? r.controller.control.forEach((M) => {
					!M.destroyed &&
						M.params.loop &&
						M.loopFix({ ...T, slideTo: M.params.slidesPerView === g.slidesPerView ? t : !1 })
			  })
			: r.controller.control instanceof r.constructor &&
			  r.controller.control.params.loop &&
			  r.controller.control.loopFix({
					...T,
					slideTo: r.controller.control.params.slidesPerView === g.slidesPerView ? t : !1,
			  })
	}
	r.emit('loopFix')
}
function gs() {
	const s = this,
		{ params: e, slidesEl: t } = s
	if (!e.loop || (s.virtual && s.params.virtual.enabled)) return
	s.recalcSlides()
	const i = []
	s.slides.forEach((a) => {
		const n =
			typeof a.swiperSlideIndex > 'u'
				? a.getAttribute('data-swiper-slide-index') * 1
				: a.swiperSlideIndex
		i[n] = a
	}),
		s.slides.forEach((a) => {
			a.removeAttribute('data-swiper-slide-index')
		}),
		i.forEach((a) => {
			t.append(a)
		}),
		s.recalcSlides(),
		s.slideTo(s.realIndex, 0)
}
var vs = { loopCreate: hs, loopFix: ms, loopDestroy: gs }
function ys(s) {
	const e = this
	if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return
	const t = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
	e.isElement && (e.__preventObserver__ = !0),
		(t.style.cursor = 'move'),
		(t.style.cursor = s ? 'grabbing' : 'grab'),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			})
}
function ws() {
	const s = this
	;(s.params.watchOverflow && s.isLocked) ||
		s.params.cssMode ||
		(s.isElement && (s.__preventObserver__ = !0),
		(s[s.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
		s.isElement &&
			requestAnimationFrame(() => {
				s.__preventObserver__ = !1
			}))
}
var ks = { setGrabCursor: ys, unsetGrabCursor: ws }
function Ss(s, e) {
	e === void 0 && (e = this)
	function t(i) {
		if (!i || i === Q() || i === V()) return null
		i.assignedSlot && (i = i.assignedSlot)
		const a = i.closest(s)
		return !a && !i.getRootNode ? null : a || t(i.getRootNode().host)
	}
	return t(e)
}
function Ge(s, e, t) {
	const i = V(),
		{ params: a } = s,
		n = a.edgeSwipeDetection,
		o = a.edgeSwipeThreshold
	return n && (t <= o || t >= i.innerWidth - o)
		? n === 'prevent'
			? (e.preventDefault(), !0)
			: !1
		: !0
}
function bs(s) {
	const e = this,
		t = Q()
	let i = s
	i.originalEvent && (i = i.originalEvent)
	const a = e.touchEventsData
	if (i.type === 'pointerdown') {
		if (a.pointerId !== null && a.pointerId !== i.pointerId) return
		a.pointerId = i.pointerId
	} else
		i.type === 'touchstart' &&
			i.targetTouches.length === 1 &&
			(a.touchId = i.targetTouches[0].identifier)
	if (i.type === 'touchstart') {
		Ge(e, i, i.targetTouches[0].pageX)
		return
	}
	const { params: n, touches: o, enabled: l } = e
	if (
		!l ||
		(!n.simulateTouch && i.pointerType === 'mouse') ||
		(e.animating && n.preventInteractionOnTransition)
	)
		return
	!e.animating && n.cssMode && n.loop && e.loopFix()
	let r = i.target
	if (
		(n.touchEventsTarget === 'wrapper' && !St(r, e.wrapperEl)) ||
		('which' in i && i.which === 3) ||
		('button' in i && i.button > 0) ||
		(a.isTouched && a.isMoved)
	)
		return
	const u = !!n.noSwipingClass && n.noSwipingClass !== '',
		d = i.composedPath ? i.composedPath() : i.path
	u && i.target && i.target.shadowRoot && d && (r = d[0])
	const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
		m = !!(i.target && i.target.shadowRoot)
	if (n.noSwiping && (m ? Ss(p, r) : r.closest(p))) {
		e.allowClick = !0
		return
	}
	if (n.swipeHandler && !r.closest(n.swipeHandler)) return
	;(o.currentX = i.pageX), (o.currentY = i.pageY)
	const g = o.currentX,
		h = o.currentY
	if (!Ge(e, i, g)) return
	Object.assign(a, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0,
	}),
		(o.startX = g),
		(o.startY = h),
		(a.touchStartTime = Z()),
		(e.allowClick = !0),
		e.updateSize(),
		(e.swipeDirection = void 0),
		n.threshold > 0 && (a.allowThresholdMove = !1)
	let y = !0
	r.matches(a.focusableElements) && ((y = !1), r.nodeName === 'SELECT' && (a.isTouched = !1)),
		t.activeElement &&
			t.activeElement.matches(a.focusableElements) &&
			t.activeElement !== r &&
			(i.pointerType === 'mouse' ||
				(i.pointerType !== 'mouse' && !r.matches(a.focusableElements))) &&
			t.activeElement.blur()
	const E = y && e.allowTouchMove && n.touchStartPreventDefault
	;(n.touchStartForcePreventDefault || E) && !r.isContentEditable && i.preventDefault(),
		n.freeMode &&
			n.freeMode.enabled &&
			e.freeMode &&
			e.animating &&
			!n.cssMode &&
			e.freeMode.onTouchStart(),
		e.emit('touchStart', i)
}
function Es(s) {
	const e = Q(),
		t = this,
		i = t.touchEventsData,
		{ params: a, touches: n, rtlTranslate: o, enabled: l } = t
	if (!l || (!a.simulateTouch && s.pointerType === 'mouse')) return
	let r = s
	if (
		(r.originalEvent && (r = r.originalEvent),
		r.type === 'pointermove' && (i.touchId !== null || r.pointerId !== i.pointerId))
	)
		return
	let u
	if (r.type === 'touchmove') {
		if (
			((u = [...r.changedTouches].filter((C) => C.identifier === i.touchId)[0]),
			!u || u.identifier !== i.touchId)
		)
			return
	} else u = r
	if (!i.isTouched) {
		i.startMoving && i.isScrolling && t.emit('touchMoveOpposite', r)
		return
	}
	const d = u.pageX,
		p = u.pageY
	if (r.preventedByNestedSwiper) {
		;(n.startX = d), (n.startY = p)
		return
	}
	if (!t.allowTouchMove) {
		r.target.matches(i.focusableElements) || (t.allowClick = !1),
			i.isTouched &&
				(Object.assign(n, { startX: d, startY: p, currentX: d, currentY: p }),
				(i.touchStartTime = Z()))
		return
	}
	if (a.touchReleaseOnEdges && !a.loop) {
		if (t.isVertical()) {
			if (
				(p < n.startY && t.translate <= t.maxTranslate()) ||
				(p > n.startY && t.translate >= t.minTranslate())
			) {
				;(i.isTouched = !1), (i.isMoved = !1)
				return
			}
		} else if (
			(d < n.startX && t.translate <= t.maxTranslate()) ||
			(d > n.startX && t.translate >= t.minTranslate())
		)
			return
	}
	if (
		(e.activeElement &&
			e.activeElement.matches(i.focusableElements) &&
			e.activeElement !== r.target &&
			r.pointerType !== 'mouse' &&
			e.activeElement.blur(),
		e.activeElement && r.target === e.activeElement && r.target.matches(i.focusableElements))
	) {
		;(i.isMoved = !0), (t.allowClick = !1)
		return
	}
	i.allowTouchCallbacks && t.emit('touchMove', r),
		(n.previousX = n.currentX),
		(n.previousY = n.currentY),
		(n.currentX = d),
		(n.currentY = p)
	const m = n.currentX - n.startX,
		g = n.currentY - n.startY
	if (t.params.threshold && Math.sqrt(m ** 2 + g ** 2) < t.params.threshold) return
	if (typeof i.isScrolling > 'u') {
		let C
		;(t.isHorizontal() && n.currentY === n.startY) || (t.isVertical() && n.currentX === n.startX)
			? (i.isScrolling = !1)
			: m * m + g * g >= 25 &&
			  ((C = (Math.atan2(Math.abs(g), Math.abs(m)) * 180) / Math.PI),
			  (i.isScrolling = t.isHorizontal() ? C > a.touchAngle : 90 - C > a.touchAngle))
	}
	if (
		(i.isScrolling && t.emit('touchMoveOpposite', r),
		typeof i.startMoving > 'u' &&
			(n.currentX !== n.startX || n.currentY !== n.startY) &&
			(i.startMoving = !0),
		i.isScrolling || (r.type === 'touchmove' && i.preventTouchMoveFromPointerMove))
	) {
		i.isTouched = !1
		return
	}
	if (!i.startMoving) return
	;(t.allowClick = !1),
		!a.cssMode && r.cancelable && r.preventDefault(),
		a.touchMoveStopPropagation && !a.nested && r.stopPropagation()
	let h = t.isHorizontal() ? m : g,
		y = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY
	a.oneWayMovement && ((h = Math.abs(h) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
		(n.diff = h),
		(h *= a.touchRatio),
		o && ((h = -h), (y = -y))
	const E = t.touchesDirection
	;(t.swipeDirection = h > 0 ? 'prev' : 'next'), (t.touchesDirection = y > 0 ? 'prev' : 'next')
	const w = t.params.loop && !a.cssMode,
		f =
			(t.touchesDirection === 'next' && t.allowSlideNext) ||
			(t.touchesDirection === 'prev' && t.allowSlidePrev)
	if (!i.isMoved) {
		if (
			(w && f && t.loopFix({ direction: t.swipeDirection }),
			(i.startTranslate = t.getTranslate()),
			t.setTransition(0),
			t.animating)
		) {
			const C = new window.CustomEvent('transitionend', {
				bubbles: !0,
				cancelable: !0,
				detail: { bySwiperTouchMove: !0 },
			})
			t.wrapperEl.dispatchEvent(C)
		}
		;(i.allowMomentumBounce = !1),
			a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
			t.emit('sliderFirstMove', r)
	}
	let c
	if (
		(new Date().getTime(),
		i.isMoved && i.allowThresholdMove && E !== t.touchesDirection && w && f && Math.abs(h) >= 1)
	) {
		Object.assign(n, {
			startX: d,
			startY: p,
			currentX: d,
			currentY: p,
			startTranslate: i.currentTranslate,
		}),
			(i.loopSwapReset = !0),
			(i.startTranslate = i.currentTranslate)
		return
	}
	t.emit('sliderMove', r), (i.isMoved = !0), (i.currentTranslate = h + i.startTranslate)
	let v = !0,
		S = a.resistanceRatio
	if (
		(a.touchReleaseOnEdges && (S = 0),
		h > 0
			? (w &&
					f &&
					!c &&
					i.allowThresholdMove &&
					i.currentTranslate >
						(a.centeredSlides
							? t.minTranslate() -
							  t.slidesSizesGrid[t.activeIndex + 1] -
							  (a.slidesPerView !== 'auto' && t.slides.length - a.slidesPerView >= 2
									? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween
									: 0) -
							  t.params.spaceBetween
							: t.minTranslate()) &&
					t.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
			  i.currentTranslate > t.minTranslate() &&
					((v = !1),
					a.resistance &&
						(i.currentTranslate =
							t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + h) ** S)))
			: h < 0 &&
			  (w &&
					f &&
					!c &&
					i.allowThresholdMove &&
					i.currentTranslate <
						(a.centeredSlides
							? t.maxTranslate() +
							  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
							  t.params.spaceBetween +
							  (a.slidesPerView !== 'auto' && t.slides.length - a.slidesPerView >= 2
									? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween
									: 0)
							: t.maxTranslate()) &&
					t.loopFix({
						direction: 'next',
						setTranslate: !0,
						activeSlideIndex:
							t.slides.length -
							(a.slidesPerView === 'auto'
								? t.slidesPerViewDynamic()
								: Math.ceil(parseFloat(a.slidesPerView, 10))),
					}),
			  i.currentTranslate < t.maxTranslate() &&
					((v = !1),
					a.resistance &&
						(i.currentTranslate =
							t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - h) ** S))),
		v && (r.preventedByNestedSwiper = !0),
		!t.allowSlideNext &&
			t.swipeDirection === 'next' &&
			i.currentTranslate < i.startTranslate &&
			(i.currentTranslate = i.startTranslate),
		!t.allowSlidePrev &&
			t.swipeDirection === 'prev' &&
			i.currentTranslate > i.startTranslate &&
			(i.currentTranslate = i.startTranslate),
		!t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
		a.threshold > 0)
	)
		if (Math.abs(h) > a.threshold || i.allowThresholdMove) {
			if (!i.allowThresholdMove) {
				;(i.allowThresholdMove = !0),
					(n.startX = n.currentX),
					(n.startY = n.currentY),
					(i.currentTranslate = i.startTranslate),
					(n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
				return
			}
		} else {
			i.currentTranslate = i.startTranslate
			return
		}
	!a.followFinger ||
		a.cssMode ||
		(((a.freeMode && a.freeMode.enabled && t.freeMode) || a.watchSlidesProgress) &&
			(t.updateActiveIndex(), t.updateSlidesClasses()),
		a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
		t.updateProgress(i.currentTranslate),
		t.setTranslate(i.currentTranslate))
}
function Ts(s) {
	const e = this,
		t = e.touchEventsData
	let i = s
	i.originalEvent && (i = i.originalEvent)
	let a
	if (i.type === 'touchend' || i.type === 'touchcancel') {
		if (
			((a = [...i.changedTouches].filter((S) => S.identifier === t.touchId)[0]),
			!a || a.identifier !== t.touchId)
		)
			return
	} else {
		if (t.touchId !== null || i.pointerId !== t.pointerId) return
		a = i
	}
	if (
		['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(i.type) &&
		!(
			['pointercancel', 'contextmenu'].includes(i.type) &&
			(e.browser.isSafari || e.browser.isWebView)
		)
	)
		return
	;(t.pointerId = null), (t.touchId = null)
	const { params: o, touches: l, rtlTranslate: r, slidesGrid: u, enabled: d } = e
	if (!d || (!o.simulateTouch && i.pointerType === 'mouse')) return
	if (
		(t.allowTouchCallbacks && e.emit('touchEnd', i), (t.allowTouchCallbacks = !1), !t.isTouched)
	) {
		t.isMoved && o.grabCursor && e.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	o.grabCursor &&
		t.isMoved &&
		t.isTouched &&
		(e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
		e.setGrabCursor(!1)
	const p = Z(),
		m = p - t.touchStartTime
	if (e.allowClick) {
		const S = i.path || (i.composedPath && i.composedPath())
		e.updateClickedSlide((S && S[0]) || i.target, S),
			e.emit('tap click', i),
			m < 300 && p - t.lastClickTime < 300 && e.emit('doubleTap doubleClick', i)
	}
	if (
		((t.lastClickTime = Z()),
		ue(() => {
			e.destroyed || (e.allowClick = !0)
		}),
		!t.isTouched ||
			!t.isMoved ||
			!e.swipeDirection ||
			(l.diff === 0 && !t.loopSwapReset) ||
			(t.currentTranslate === t.startTranslate && !t.loopSwapReset))
	) {
		;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
	let g
	if (
		(o.followFinger ? (g = r ? e.translate : -e.translate) : (g = -t.currentTranslate), o.cssMode)
	)
		return
	if (o.freeMode && o.freeMode.enabled) {
		e.freeMode.onTouchEnd({ currentPos: g })
		return
	}
	const h = g >= -e.maxTranslate() && !e.params.loop
	let y = 0,
		E = e.slidesSizesGrid[0]
	for (let S = 0; S < u.length; S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
		const C = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
		typeof u[S + C] < 'u'
			? (h || (g >= u[S] && g < u[S + C])) && ((y = S), (E = u[S + C] - u[S]))
			: (h || g >= u[S]) && ((y = S), (E = u[u.length - 1] - u[u.length - 2]))
	}
	let w = null,
		f = null
	o.rewind &&
		(e.isBeginning
			? (f =
					o.virtual && o.virtual.enabled && e.virtual
						? e.virtual.slides.length - 1
						: e.slides.length - 1)
			: e.isEnd && (w = 0))
	const c = (g - u[y]) / E,
		v = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
	if (m > o.longSwipesMs) {
		if (!o.longSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.swipeDirection === 'next' &&
			(c >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? w : y + v) : e.slideTo(y)),
			e.swipeDirection === 'prev' &&
				(c > 1 - o.longSwipesRatio
					? e.slideTo(y + v)
					: f !== null && c < 0 && Math.abs(c) > o.longSwipesRatio
					? e.slideTo(f)
					: e.slideTo(y))
	} else {
		if (!o.shortSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
			? i.target === e.navigation.nextEl
				? e.slideTo(y + v)
				: e.slideTo(y)
			: (e.swipeDirection === 'next' && e.slideTo(w !== null ? w : y + v),
			  e.swipeDirection === 'prev' && e.slideTo(f !== null ? f : y))
	}
}
function Ne() {
	const s = this,
		{ params: e, el: t } = s
	if (t && t.offsetWidth === 0) return
	e.breakpoints && s.setBreakpoint()
	const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = s,
		o = s.virtual && s.params.virtual.enabled
	;(s.allowSlideNext = !0),
		(s.allowSlidePrev = !0),
		s.updateSize(),
		s.updateSlides(),
		s.updateSlidesClasses()
	const l = o && e.loop
	;(e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
	s.isEnd &&
	!s.isBeginning &&
	!s.params.centeredSlides &&
	!l
		? s.slideTo(s.slides.length - 1, 0, !1, !0)
		: s.params.loop && !o
		? s.slideToLoop(s.realIndex, 0, !1, !0)
		: s.slideTo(s.activeIndex, 0, !1, !0),
		s.autoplay &&
			s.autoplay.running &&
			s.autoplay.paused &&
			(clearTimeout(s.autoplay.resizeTimeout),
			(s.autoplay.resizeTimeout = setTimeout(() => {
				s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
			}, 500))),
		(s.allowSlidePrev = a),
		(s.allowSlideNext = i),
		s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow()
}
function xs(s) {
	const e = this
	e.enabled &&
		(e.allowClick ||
			(e.params.preventClicks && s.preventDefault(),
			e.params.preventClicksPropagation &&
				e.animating &&
				(s.stopPropagation(), s.stopImmediatePropagation())))
}
function Cs() {
	const s = this,
		{ wrapperEl: e, rtlTranslate: t, enabled: i } = s
	if (!i) return
	;(s.previousTranslate = s.translate),
		s.isHorizontal() ? (s.translate = -e.scrollLeft) : (s.translate = -e.scrollTop),
		s.translate === 0 && (s.translate = 0),
		s.updateActiveIndex(),
		s.updateSlidesClasses()
	let a
	const n = s.maxTranslate() - s.minTranslate()
	n === 0 ? (a = 0) : (a = (s.translate - s.minTranslate()) / n),
		a !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
		s.emit('setTranslate', s.translate, !1)
}
function Ds(s) {
	const e = this
	ge(e, s.target),
		!(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update()
}
function Bs() {
	const s = this
	s.documentTouchHandlerProceeded ||
		((s.documentTouchHandlerProceeded = !0),
		s.params.touchReleaseOnEdges && (s.el.style.touchAction = 'auto'))
}
const it = (s, e) => {
	const t = Q(),
		{ params: i, el: a, wrapperEl: n, device: o } = s,
		l = !!i.nested,
		r = e === 'on' ? 'addEventListener' : 'removeEventListener',
		u = e
	!a ||
		typeof a == 'string' ||
		(t[r]('touchstart', s.onDocumentTouchStart, { passive: !1, capture: l }),
		a[r]('touchstart', s.onTouchStart, { passive: !1 }),
		a[r]('pointerdown', s.onTouchStart, { passive: !1 }),
		t[r]('touchmove', s.onTouchMove, { passive: !1, capture: l }),
		t[r]('pointermove', s.onTouchMove, { passive: !1, capture: l }),
		t[r]('touchend', s.onTouchEnd, { passive: !0 }),
		t[r]('pointerup', s.onTouchEnd, { passive: !0 }),
		t[r]('pointercancel', s.onTouchEnd, { passive: !0 }),
		t[r]('touchcancel', s.onTouchEnd, { passive: !0 }),
		t[r]('pointerout', s.onTouchEnd, { passive: !0 }),
		t[r]('pointerleave', s.onTouchEnd, { passive: !0 }),
		t[r]('contextmenu', s.onTouchEnd, { passive: !0 }),
		(i.preventClicks || i.preventClicksPropagation) && a[r]('click', s.onClick, !0),
		i.cssMode && n[r]('scroll', s.onScroll),
		i.updateOnWindowResize
			? s[u](
					o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
					Ne,
					!0
			  )
			: s[u]('observerUpdate', Ne, !0),
		a[r]('load', s.onLoad, { capture: !0 }))
}
function As() {
	const s = this,
		{ params: e } = s
	;(s.onTouchStart = bs.bind(s)),
		(s.onTouchMove = Es.bind(s)),
		(s.onTouchEnd = Ts.bind(s)),
		(s.onDocumentTouchStart = Bs.bind(s)),
		e.cssMode && (s.onScroll = Cs.bind(s)),
		(s.onClick = xs.bind(s)),
		(s.onLoad = Ds.bind(s)),
		it(s, 'on')
}
function Ms() {
	it(this, 'off')
}
var Ps = { attachEvents: As, detachEvents: Ms }
const Ve = (s, e) => s.grid && e.grid && e.grid.rows > 1
function Fs() {
	const s = this,
		{ realIndex: e, initialized: t, params: i, el: a } = s,
		n = i.breakpoints
	if (!n || (n && Object.keys(n).length === 0)) return
	const o = s.getBreakpoint(n, s.params.breakpointsBase, s.el)
	if (!o || s.currentBreakpoint === o) return
	const r = (o in n ? n[o] : void 0) || s.originalParams,
		u = Ve(s, i),
		d = Ve(s, r),
		p = s.params.grabCursor,
		m = r.grabCursor,
		g = i.enabled
	u && !d
		? (a.classList.remove(
				`${i.containerModifierClass}grid`,
				`${i.containerModifierClass}grid-column`
		  ),
		  s.emitContainerClasses())
		: !u &&
		  d &&
		  (a.classList.add(`${i.containerModifierClass}grid`),
		  ((r.grid.fill && r.grid.fill === 'column') || (!r.grid.fill && i.grid.fill === 'column')) &&
				a.classList.add(`${i.containerModifierClass}grid-column`),
		  s.emitContainerClasses()),
		p && !m ? s.unsetGrabCursor() : !p && m && s.setGrabCursor(),
		['navigation', 'pagination', 'scrollbar'].forEach((c) => {
			if (typeof r[c] > 'u') return
			const v = i[c] && i[c].enabled,
				S = r[c] && r[c].enabled
			v && !S && s[c].disable(), !v && S && s[c].enable()
		})
	const h = r.direction && r.direction !== i.direction,
		y = i.loop && (r.slidesPerView !== i.slidesPerView || h),
		E = i.loop
	h && t && s.changeDirection(), H(s.params, r)
	const w = s.params.enabled,
		f = s.params.loop
	Object.assign(s, {
		allowTouchMove: s.params.allowTouchMove,
		allowSlideNext: s.params.allowSlideNext,
		allowSlidePrev: s.params.allowSlidePrev,
	}),
		g && !w ? s.disable() : !g && w && s.enable(),
		(s.currentBreakpoint = o),
		s.emit('_beforeBreakpoint', r),
		t &&
			(y
				? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
				: !E && f
				? (s.loopCreate(e), s.updateSlides())
				: E && !f && s.loopDestroy()),
		s.emit('breakpoint', r)
}
function Os(s, e, t) {
	if ((e === void 0 && (e = 'window'), !s || (e === 'container' && !t))) return
	let i = !1
	const a = V(),
		n = e === 'window' ? a.innerHeight : t.clientHeight,
		o = Object.keys(s).map((l) => {
			if (typeof l == 'string' && l.indexOf('@') === 0) {
				const r = parseFloat(l.substr(1))
				return { value: n * r, point: l }
			}
			return { value: l, point: l }
		})
	o.sort((l, r) => parseInt(l.value, 10) - parseInt(r.value, 10))
	for (let l = 0; l < o.length; l += 1) {
		const { point: r, value: u } = o[l]
		e === 'window'
			? a.matchMedia(`(min-width: ${u}px)`).matches && (i = r)
			: u <= t.clientWidth && (i = r)
	}
	return i || 'max'
}
var Is = { setBreakpoint: Fs, getBreakpoint: Os }
function Ls(s, e) {
	const t = []
	return (
		s.forEach((i) => {
			typeof i == 'object'
				? Object.keys(i).forEach((a) => {
						i[a] && t.push(e + a)
				  })
				: typeof i == 'string' && t.push(e + i)
		}),
		t
	)
}
function zs() {
	const s = this,
		{ classNames: e, params: t, rtl: i, el: a, device: n } = s,
		o = Ls(
			[
				'initialized',
				t.direction,
				{ 'free-mode': s.params.freeMode && t.freeMode.enabled },
				{ autoheight: t.autoHeight },
				{ rtl: i },
				{ grid: t.grid && t.grid.rows > 1 },
				{ 'grid-column': t.grid && t.grid.rows > 1 && t.grid.fill === 'column' },
				{ android: n.android },
				{ ios: n.ios },
				{ 'css-mode': t.cssMode },
				{ centered: t.cssMode && t.centeredSlides },
				{ 'watch-progress': t.watchSlidesProgress },
			],
			t.containerModifierClass
		)
	e.push(...o), a.classList.add(...e), s.emitContainerClasses()
}
function _s() {
	const s = this,
		{ el: e, classNames: t } = s
	!e || typeof e == 'string' || (e.classList.remove(...t), s.emitContainerClasses())
}
var qs = { addClasses: zs, removeClasses: _s }
function $s() {
	const s = this,
		{ isLocked: e, params: t } = s,
		{ slidesOffsetBefore: i } = t
	if (i) {
		const a = s.slides.length - 1,
			n = s.slidesGrid[a] + s.slidesSizesGrid[a] + i * 2
		s.isLocked = s.size > n
	} else s.isLocked = s.snapGrid.length === 1
	t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
		t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
		e && e !== s.isLocked && (s.isEnd = !1),
		e !== s.isLocked && s.emit(s.isLocked ? 'lock' : 'unlock')
}
var Gs = { checkOverflow: $s },
	Fe = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		swiperElementNodeName: 'SWIPER-CONTAINER',
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: 'swiper',
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-blank',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideFullyVisibleClass: 'swiper-slide-fully-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	}
function Ns(s, e) {
	return function (i) {
		i === void 0 && (i = {})
		const a = Object.keys(i)[0],
			n = i[a]
		if (typeof n != 'object' || n === null) {
			H(e, i)
			return
		}
		if (
			(s[a] === !0 && (s[a] = { enabled: !0 }),
			a === 'navigation' &&
				s[a] &&
				s[a].enabled &&
				!s[a].prevEl &&
				!s[a].nextEl &&
				(s[a].auto = !0),
			['pagination', 'scrollbar'].indexOf(a) >= 0 &&
				s[a] &&
				s[a].enabled &&
				!s[a].el &&
				(s[a].auto = !0),
			!(a in s && 'enabled' in n))
		) {
			H(e, i)
			return
		}
		typeof s[a] == 'object' && !('enabled' in s[a]) && (s[a].enabled = !0),
			s[a] || (s[a] = { enabled: !1 }),
			H(e, i)
	}
}
const Ce = {
		eventsEmitter: qt,
		update: Ut,
		translate: ts,
		transition: ns,
		slide: fs,
		loop: vs,
		grabCursor: ks,
		events: Ps,
		breakpoints: Is,
		checkOverflow: Gs,
		classes: qs,
	},
	De = {}
let Ie = class K {
	constructor() {
		let e, t
		for (var i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n]
		a.length === 1 &&
		a[0].constructor &&
		Object.prototype.toString.call(a[0]).slice(8, -1) === 'Object'
			? (t = a[0])
			: ([e, t] = a),
			t || (t = {}),
			(t = H({}, t)),
			e && !t.el && (t.el = e)
		const o = Q()
		if (t.el && typeof t.el == 'string' && o.querySelectorAll(t.el).length > 1) {
			const d = []
			return (
				o.querySelectorAll(t.el).forEach((p) => {
					const m = H({}, t, { el: p })
					d.push(new K(m))
				}),
				d
			)
		}
		const l = this
		;(l.__swiper__ = !0),
			(l.support = et()),
			(l.device = tt({ userAgent: t.userAgent })),
			(l.browser = Lt()),
			(l.eventsListeners = {}),
			(l.eventsAnyListeners = []),
			(l.modules = [...l.__modules__]),
			t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules)
		const r = {}
		l.modules.forEach((d) => {
			d({
				params: t,
				swiper: l,
				extendParams: Ns(t, r),
				on: l.on.bind(l),
				once: l.once.bind(l),
				off: l.off.bind(l),
				emit: l.emit.bind(l),
			})
		})
		const u = H({}, Fe, r)
		return (
			(l.params = H({}, u, De, t)),
			(l.originalParams = H({}, l.params)),
			(l.passedParams = H({}, t)),
			l.params &&
				l.params.on &&
				Object.keys(l.params.on).forEach((d) => {
					l.on(d, l.params.on[d])
				}),
			l.params && l.params.onAny && l.onAny(l.params.onAny),
			Object.assign(l, {
				enabled: l.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return l.params.direction === 'horizontal'
				},
				isVertical() {
					return l.params.direction === 'vertical'
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: l.params.allowSlideNext,
				allowSlidePrev: l.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: l.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null,
				},
				allowClick: !0,
				allowTouchMove: l.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			l.emit('_swiper'),
			l.params.init && l.init(),
			l
		)
	}
	getDirectionLabel(e) {
		return this.isHorizontal()
			? e
			: {
					width: 'height',
					'margin-top': 'margin-left',
					'margin-bottom ': 'margin-right',
					'margin-left': 'margin-top',
					'margin-right': 'margin-bottom',
					'padding-left': 'padding-top',
					'padding-right': 'padding-bottom',
					marginRight: 'marginBottom',
			  }[e]
	}
	getSlideIndex(e) {
		const { slidesEl: t, params: i } = this,
			a = U(t, `.${i.slideClass}, swiper-slide`),
			n = ye(a[0])
		return ye(e) - n
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(
			this.slides.filter((t) => t.getAttribute('data-swiper-slide-index') * 1 === e)[0]
		)
	}
	recalcSlides() {
		const e = this,
			{ slidesEl: t, params: i } = e
		e.slides = U(t, `.${i.slideClass}, swiper-slide`)
	}
	enable() {
		const e = this
		e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'))
	}
	disable() {
		const e = this
		e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'))
	}
	setProgress(e, t) {
		const i = this
		e = Math.min(Math.max(e, 0), 1)
		const a = i.minTranslate(),
			o = (i.maxTranslate() - a) * e + a
		i.translateTo(o, typeof t > 'u' ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
	}
	emitContainerClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = e.el.className
			.split(' ')
			.filter((i) => i.indexOf('swiper') === 0 || i.indexOf(e.params.containerModifierClass) === 0)
		e.emit('_containerClasses', t.join(' '))
	}
	getSlideClasses(e) {
		const t = this
		return t.destroyed
			? ''
			: e.className
					.split(' ')
					.filter((i) => i.indexOf('swiper-slide') === 0 || i.indexOf(t.params.slideClass) === 0)
					.join(' ')
	}
	emitSlidesClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = []
		e.slides.forEach((i) => {
			const a = e.getSlideClasses(i)
			t.push({ slideEl: i, classNames: a }), e.emit('_slideClass', i, a)
		}),
			e.emit('_slideClasses', t)
	}
	slidesPerViewDynamic(e, t) {
		e === void 0 && (e = 'current'), t === void 0 && (t = !1)
		const i = this,
			{ params: a, slides: n, slidesGrid: o, slidesSizesGrid: l, size: r, activeIndex: u } = i
		let d = 1
		if (typeof a.slidesPerView == 'number') return a.slidesPerView
		if (a.centeredSlides) {
			let p = n[u] ? Math.ceil(n[u].swiperSlideSize) : 0,
				m
			for (let g = u + 1; g < n.length; g += 1)
				n[g] && !m && ((p += Math.ceil(n[g].swiperSlideSize)), (d += 1), p > r && (m = !0))
			for (let g = u - 1; g >= 0; g -= 1)
				n[g] && !m && ((p += n[g].swiperSlideSize), (d += 1), p > r && (m = !0))
		} else if (e === 'current')
			for (let p = u + 1; p < n.length; p += 1)
				(t ? o[p] + l[p] - o[u] < r : o[p] - o[u] < r) && (d += 1)
		else for (let p = u - 1; p >= 0; p -= 1) o[u] - o[p] < r && (d += 1)
		return d
	}
	update() {
		const e = this
		if (!e || e.destroyed) return
		const { snapGrid: t, params: i } = e
		i.breakpoints && e.setBreakpoint(),
			[...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
				o.complete && ge(e, o)
			}),
			e.updateSize(),
			e.updateSlides(),
			e.updateProgress(),
			e.updateSlidesClasses()
		function a() {
			const o = e.rtlTranslate ? e.translate * -1 : e.translate,
				l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate())
			e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
		}
		let n
		if (i.freeMode && i.freeMode.enabled && !i.cssMode) a(), i.autoHeight && e.updateAutoHeight()
		else {
			if ((i.slidesPerView === 'auto' || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
				const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides
				n = e.slideTo(o.length - 1, 0, !1, !0)
			} else n = e.slideTo(e.activeIndex, 0, !1, !0)
			n || a()
		}
		i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update')
	}
	changeDirection(e, t) {
		t === void 0 && (t = !0)
		const i = this,
			a = i.params.direction
		return (
			e || (e = a === 'horizontal' ? 'vertical' : 'horizontal'),
			e === a ||
				(e !== 'horizontal' && e !== 'vertical') ||
				(i.el.classList.remove(`${i.params.containerModifierClass}${a}`),
				i.el.classList.add(`${i.params.containerModifierClass}${e}`),
				i.emitContainerClasses(),
				(i.params.direction = e),
				i.slides.forEach((n) => {
					e === 'vertical' ? (n.style.width = '') : (n.style.height = '')
				}),
				i.emit('changeDirection'),
				t && i.update()),
			i
		)
	}
	changeLanguageDirection(e) {
		const t = this
		;(t.rtl && e === 'rtl') ||
			(!t.rtl && e === 'ltr') ||
			((t.rtl = e === 'rtl'),
			(t.rtlTranslate = t.params.direction === 'horizontal' && t.rtl),
			t.rtl
				? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
				: (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
			t.update())
	}
	mount(e) {
		const t = this
		if (t.mounted) return !0
		let i = e || t.params.el
		if ((typeof i == 'string' && (i = document.querySelector(i)), !i)) return !1
		;(i.swiper = t),
			i.parentNode &&
				i.parentNode.host &&
				i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() &&
				(t.isElement = !0)
		const a = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
		let o =
			i && i.shadowRoot && i.shadowRoot.querySelector
				? i.shadowRoot.querySelector(a())
				: U(i, a())[0]
		return (
			!o &&
				t.params.createElements &&
				((o = J('div', t.params.wrapperClass)),
				i.append(o),
				U(i, `.${t.params.slideClass}`).forEach((l) => {
					o.append(l)
				})),
			Object.assign(t, {
				el: i,
				wrapperEl: o,
				slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
				hostEl: t.isElement ? i.parentNode.host : i,
				mounted: !0,
				rtl: i.dir.toLowerCase() === 'rtl' || ee(i, 'direction') === 'rtl',
				rtlTranslate:
					t.params.direction === 'horizontal' &&
					(i.dir.toLowerCase() === 'rtl' || ee(i, 'direction') === 'rtl'),
				wrongRTL: ee(o, 'display') === '-webkit-box',
			}),
			!0
		)
	}
	init(e) {
		const t = this
		if (t.initialized || t.mount(e) === !1) return t
		t.emit('beforeInit'),
			t.params.breakpoints && t.setBreakpoint(),
			t.addClasses(),
			t.updateSize(),
			t.updateSlides(),
			t.params.watchOverflow && t.checkOverflow(),
			t.params.grabCursor && t.enabled && t.setGrabCursor(),
			t.params.loop && t.virtual && t.params.virtual.enabled
				? t.slideTo(
						t.params.initialSlide + t.virtual.slidesBefore,
						0,
						t.params.runCallbacksOnInit,
						!1,
						!0
				  )
				: t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
			t.params.loop && t.loopCreate(),
			t.attachEvents()
		const a = [...t.el.querySelectorAll('[loading="lazy"]')]
		return (
			t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
			a.forEach((n) => {
				n.complete
					? ge(t, n)
					: n.addEventListener('load', (o) => {
							ge(t, o.target)
					  })
			}),
			Pe(t),
			(t.initialized = !0),
			Pe(t),
			t.emit('init'),
			t.emit('afterInit'),
			t
		)
	}
	destroy(e, t) {
		e === void 0 && (e = !0), t === void 0 && (t = !0)
		const i = this,
			{ params: a, el: n, wrapperEl: o, slides: l } = i
		return (
			typeof i.params > 'u' ||
				i.destroyed ||
				(i.emit('beforeDestroy'),
				(i.initialized = !1),
				i.detachEvents(),
				a.loop && i.loopDestroy(),
				t &&
					(i.removeClasses(),
					n && typeof n != 'string' && n.removeAttribute('style'),
					o && o.removeAttribute('style'),
					l &&
						l.length &&
						l.forEach((r) => {
							r.classList.remove(
								a.slideVisibleClass,
								a.slideFullyVisibleClass,
								a.slideActiveClass,
								a.slideNextClass,
								a.slidePrevClass
							),
								r.removeAttribute('style'),
								r.removeAttribute('data-swiper-slide-index')
						})),
				i.emit('destroy'),
				Object.keys(i.eventsListeners).forEach((r) => {
					i.off(r)
				}),
				e !== !1 && (i.el && typeof i.el != 'string' && (i.el.swiper = null), vt(i)),
				(i.destroyed = !0)),
			null
		)
	}
	static extendDefaults(e) {
		H(De, e)
	}
	static get extendedDefaults() {
		return De
	}
	static get defaults() {
		return Fe
	}
	static installModule(e) {
		K.prototype.__modules__ || (K.prototype.__modules__ = [])
		const t = K.prototype.__modules__
		typeof e == 'function' && t.indexOf(e) < 0 && t.push(e)
	}
	static use(e) {
		return Array.isArray(e) ? (e.forEach((t) => K.installModule(t)), K) : (K.installModule(e), K)
	}
}
Object.keys(Ce).forEach((s) => {
	Object.keys(Ce[s]).forEach((e) => {
		Ie.prototype[e] = Ce[s][e]
	})
})
Ie.use([zt, _t])
const at = [
	'eventsPrefix',
	'injectStyles',
	'injectStylesUrls',
	'modules',
	'init',
	'_direction',
	'oneWayMovement',
	'swiperElementNodeName',
	'touchEventsTarget',
	'initialSlide',
	'_speed',
	'cssMode',
	'updateOnWindowResize',
	'resizeObserver',
	'nested',
	'focusableElements',
	'_enabled',
	'_width',
	'_height',
	'preventInteractionOnTransition',
	'userAgent',
	'url',
	'_edgeSwipeDetection',
	'_edgeSwipeThreshold',
	'_freeMode',
	'_autoHeight',
	'setWrapperSize',
	'virtualTranslate',
	'_effect',
	'breakpoints',
	'breakpointsBase',
	'_spaceBetween',
	'_slidesPerView',
	'maxBackfaceHiddenSlides',
	'_grid',
	'_slidesPerGroup',
	'_slidesPerGroupSkip',
	'_slidesPerGroupAuto',
	'_centeredSlides',
	'_centeredSlidesBounds',
	'_slidesOffsetBefore',
	'_slidesOffsetAfter',
	'normalizeSlideIndex',
	'_centerInsufficientSlides',
	'_watchOverflow',
	'roundLengths',
	'touchRatio',
	'touchAngle',
	'simulateTouch',
	'_shortSwipes',
	'_longSwipes',
	'longSwipesRatio',
	'longSwipesMs',
	'_followFinger',
	'allowTouchMove',
	'_threshold',
	'touchMoveStopPropagation',
	'touchStartPreventDefault',
	'touchStartForcePreventDefault',
	'touchReleaseOnEdges',
	'uniqueNavElements',
	'_resistance',
	'_resistanceRatio',
	'_watchSlidesProgress',
	'_grabCursor',
	'preventClicks',
	'preventClicksPropagation',
	'_slideToClickedSlide',
	'_loop',
	'loopAdditionalSlides',
	'loopAddBlankSlides',
	'loopPreventsSliding',
	'_rewind',
	'_allowSlidePrev',
	'_allowSlideNext',
	'_swipeHandler',
	'_noSwiping',
	'noSwipingClass',
	'noSwipingSelector',
	'passiveListeners',
	'containerModifierClass',
	'slideClass',
	'slideActiveClass',
	'slideVisibleClass',
	'slideFullyVisibleClass',
	'slideNextClass',
	'slidePrevClass',
	'slideBlankClass',
	'wrapperClass',
	'lazyPreloaderClass',
	'lazyPreloadPrevNext',
	'runCallbacksOnInit',
	'observer',
	'observeParents',
	'observeSlideChildren',
	'a11y',
	'_autoplay',
	'_controller',
	'coverflowEffect',
	'cubeEffect',
	'fadeEffect',
	'flipEffect',
	'creativeEffect',
	'cardsEffect',
	'hashNavigation',
	'history',
	'keyboard',
	'mousewheel',
	'_navigation',
	'_pagination',
	'parallax',
	'_scrollbar',
	'_thumbs',
	'virtual',
	'zoom',
	'control',
]
function ie(s) {
	return (
		typeof s == 'object' &&
		s !== null &&
		s.constructor &&
		Object.prototype.toString.call(s).slice(8, -1) === 'Object' &&
		!s.__swiper__
	)
}
function re(s, e) {
	const t = ['__proto__', 'constructor', 'prototype']
	Object.keys(e)
		.filter((i) => t.indexOf(i) < 0)
		.forEach((i) => {
			typeof s[i] > 'u'
				? (s[i] = e[i])
				: ie(e[i]) && ie(s[i]) && Object.keys(e[i]).length > 0
				? e[i].__swiper__
					? (s[i] = e[i])
					: re(s[i], e[i])
				: (s[i] = e[i])
		})
}
function nt(s) {
	return (
		s === void 0 && (s = {}),
		s.navigation && typeof s.navigation.nextEl > 'u' && typeof s.navigation.prevEl > 'u'
	)
}
function rt(s) {
	return s === void 0 && (s = {}), s.pagination && typeof s.pagination.el > 'u'
}
function lt(s) {
	return s === void 0 && (s = {}), s.scrollbar && typeof s.scrollbar.el > 'u'
}
function ot(s) {
	s === void 0 && (s = '')
	const e = s
			.split(' ')
			.map((i) => i.trim())
			.filter((i) => !!i),
		t = []
	return (
		e.forEach((i) => {
			t.indexOf(i) < 0 && t.push(i)
		}),
		t.join(' ')
	)
}
function Vs(s) {
	return (
		s === void 0 && (s = ''),
		s ? (s.includes('swiper-wrapper') ? s : `swiper-wrapper ${s}`) : 'swiper-wrapper'
	)
}
function Hs(s) {
	let {
		swiper: e,
		slides: t,
		passedParams: i,
		changedParams: a,
		nextEl: n,
		prevEl: o,
		scrollbarEl: l,
		paginationEl: r,
	} = s
	const u = a.filter((k) => k !== 'children' && k !== 'direction' && k !== 'wrapperClass'),
		{ params: d, pagination: p, navigation: m, scrollbar: g, virtual: h, thumbs: y } = e
	let E, w, f, c, v, S, C, A
	a.includes('thumbs') &&
		i.thumbs &&
		i.thumbs.swiper &&
		!i.thumbs.swiper.destroyed &&
		d.thumbs &&
		(!d.thumbs.swiper || d.thumbs.swiper.destroyed) &&
		(E = !0),
		a.includes('controller') &&
			i.controller &&
			i.controller.control &&
			d.controller &&
			!d.controller.control &&
			(w = !0),
		a.includes('pagination') &&
			i.pagination &&
			(i.pagination.el || r) &&
			(d.pagination || d.pagination === !1) &&
			p &&
			!p.el &&
			(f = !0),
		a.includes('scrollbar') &&
			i.scrollbar &&
			(i.scrollbar.el || l) &&
			(d.scrollbar || d.scrollbar === !1) &&
			g &&
			!g.el &&
			(c = !0),
		a.includes('navigation') &&
			i.navigation &&
			(i.navigation.prevEl || o) &&
			(i.navigation.nextEl || n) &&
			(d.navigation || d.navigation === !1) &&
			m &&
			!m.prevEl &&
			!m.nextEl &&
			(v = !0)
	const B = (k) => {
		e[k] &&
			(e[k].destroy(),
			k === 'navigation'
				? (e.isElement && (e[k].prevEl.remove(), e[k].nextEl.remove()),
				  (d[k].prevEl = void 0),
				  (d[k].nextEl = void 0),
				  (e[k].prevEl = void 0),
				  (e[k].nextEl = void 0))
				: (e.isElement && e[k].el.remove(), (d[k].el = void 0), (e[k].el = void 0)))
	}
	a.includes('loop') &&
		e.isElement &&
		(d.loop && !i.loop ? (S = !0) : !d.loop && i.loop ? (C = !0) : (A = !0)),
		u.forEach((k) => {
			if (ie(d[k]) && ie(i[k]))
				Object.assign(d[k], i[k]),
					(k === 'navigation' || k === 'pagination' || k === 'scrollbar') &&
						'enabled' in i[k] &&
						!i[k].enabled &&
						B(k)
			else {
				const b = i[k]
				;(b === !0 || b === !1) && (k === 'navigation' || k === 'pagination' || k === 'scrollbar')
					? b === !1 && B(k)
					: (d[k] = i[k])
			}
		}),
		u.includes('controller') &&
			!w &&
			e.controller &&
			e.controller.control &&
			d.controller &&
			d.controller.control &&
			(e.controller.control = d.controller.control),
		a.includes('children') && t && h && d.virtual.enabled
			? ((h.slides = t), h.update(!0))
			: a.includes('virtual') && h && d.virtual.enabled && (t && (h.slides = t), h.update(!0)),
		a.includes('children') && t && d.loop && (A = !0),
		E && y.init() && y.update(!0),
		w && (e.controller.control = d.controller.control),
		f &&
			(e.isElement &&
				(!r || typeof r == 'string') &&
				((r = document.createElement('div')),
				r.classList.add('swiper-pagination'),
				r.part.add('pagination'),
				e.el.appendChild(r)),
			r && (d.pagination.el = r),
			p.init(),
			p.render(),
			p.update()),
		c &&
			(e.isElement &&
				(!l || typeof l == 'string') &&
				((l = document.createElement('div')),
				l.classList.add('swiper-scrollbar'),
				l.part.add('scrollbar'),
				e.el.appendChild(l)),
			l && (d.scrollbar.el = l),
			g.init(),
			g.updateSize(),
			g.setTranslate()),
		v &&
			(e.isElement &&
				((!n || typeof n == 'string') &&
					((n = document.createElement('div')),
					n.classList.add('swiper-button-next'),
					(n.innerHTML = e.hostEl.constructor.nextButtonSvg),
					n.part.add('button-next'),
					e.el.appendChild(n)),
				(!o || typeof o == 'string') &&
					((o = document.createElement('div')),
					o.classList.add('swiper-button-prev'),
					(o.innerHTML = e.hostEl.constructor.prevButtonSvg),
					o.part.add('button-prev'),
					e.el.appendChild(o))),
			n && (d.navigation.nextEl = n),
			o && (d.navigation.prevEl = o),
			m.init(),
			m.update()),
		a.includes('allowSlideNext') && (e.allowSlideNext = i.allowSlideNext),
		a.includes('allowSlidePrev') && (e.allowSlidePrev = i.allowSlidePrev),
		a.includes('direction') && e.changeDirection(i.direction, !1),
		(S || A) && e.loopDestroy(),
		(C || A) && e.loopCreate(),
		e.update()
}
function He(s, e) {
	s === void 0 && (s = {})
	const t = { on: {} },
		i = {},
		a = {}
	re(t, Fe), (t._emitClasses = !0), (t.init = !1)
	const n = {},
		o = at.map((r) => r.replace(/_/, '')),
		l = Object.assign({}, s)
	return (
		Object.keys(l).forEach((r) => {
			typeof s[r] > 'u' ||
				(o.indexOf(r) >= 0
					? ie(s[r])
						? ((t[r] = {}), (a[r] = {}), re(t[r], s[r]), re(a[r], s[r]))
						: ((t[r] = s[r]), (a[r] = s[r]))
					: r.search(/on[A-Z]/) === 0 && typeof s[r] == 'function'
					? (t.on[`${r[2].toLowerCase()}${r.substr(3)}`] = s[r])
					: (n[r] = s[r]))
		}),
		['navigation', 'pagination', 'scrollbar'].forEach((r) => {
			t[r] === !0 && (t[r] = {}), t[r] === !1 && delete t[r]
		}),
		{ params: t, passedParams: a, rest: n, events: i }
	)
}
function Rs(s, e) {
	let { el: t, nextEl: i, prevEl: a, paginationEl: n, scrollbarEl: o, swiper: l } = s
	nt(e) &&
		i &&
		a &&
		((l.params.navigation.nextEl = i),
		(l.originalParams.navigation.nextEl = i),
		(l.params.navigation.prevEl = a),
		(l.originalParams.navigation.prevEl = a)),
		rt(e) && n && ((l.params.pagination.el = n), (l.originalParams.pagination.el = n)),
		lt(e) && o && ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
		l.init(t)
}
function js(s, e, t, i, a) {
	const n = []
	if (!e) return n
	const o = (r) => {
		n.indexOf(r) < 0 && n.push(r)
	}
	if (t && i) {
		const r = i.map(a),
			u = t.map(a)
		r.join('') !== u.join('') && o('children'), i.length !== t.length && o('children')
	}
	return (
		at
			.filter((r) => r[0] === '_')
			.map((r) => r.replace(/_/, ''))
			.forEach((r) => {
				if (r in s && r in e)
					if (ie(s[r]) && ie(e[r])) {
						const u = Object.keys(s[r]),
							d = Object.keys(e[r])
						u.length !== d.length
							? o(r)
							: (u.forEach((p) => {
									s[r][p] !== e[r][p] && o(r)
							  }),
							  d.forEach((p) => {
									s[r][p] !== e[r][p] && o(r)
							  }))
					} else s[r] !== e[r] && o(r)
			}),
		n
	)
}
const Ws = (s) => {
	!s ||
		s.destroyed ||
		!s.params.virtual ||
		(s.params.virtual && !s.params.virtual.enabled) ||
		(s.updateSlides(),
		s.updateProgress(),
		s.updateSlidesClasses(),
		s.parallax && s.params.parallax && s.params.parallax.enabled && s.parallax.setTranslate())
}
function Be(s, e, t) {
	s === void 0 && (s = {})
	const i = [],
		a = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] },
		n = (o, l) => {
			Array.isArray(o) &&
				o.forEach((r) => {
					const u = typeof r.type == 'symbol'
					l === 'default' && (l = 'container-end'),
						u && r.children
							? n(r.children, l)
							: (r.type &&
									(r.type.name === 'SwiperSlide' || r.type.name === 'AsyncComponentWrapper')) ||
							  (r.componentOptions && r.componentOptions.tag === 'SwiperSlide')
							? i.push(r)
							: a[l] && a[l].push(r)
				})
		}
	return (
		Object.keys(s).forEach((o) => {
			if (typeof s[o] != 'function') return
			const l = s[o]()
			n(l, o)
		}),
		(t.value = e.value),
		(e.value = i),
		{ slides: i, slots: a }
	)
}
function Xs(s, e, t) {
	if (!t) return null
	const i = (d) => {
			let p = d
			return d < 0 ? (p = e.length + d) : p >= e.length && (p = p - e.length), p
		},
		a = s.value.isHorizontal()
			? { [s.value.rtlTranslate ? 'right' : 'left']: `${t.offset}px` }
			: { top: `${t.offset}px` },
		{ from: n, to: o } = t,
		l = s.value.params.loop ? -e.length : 0,
		r = s.value.params.loop ? e.length * 2 : e.length,
		u = []
	for (let d = l; d < r; d += 1) d >= n && d <= o && u.length < e.length && u.push(e[i(d)])
	return u.map((d) => {
		if (
			(d.props || (d.props = {}),
			d.props.style || (d.props.style = {}),
			(d.props.swiperRef = s),
			(d.props.style = a),
			d.type)
		)
			return j(d.type, { ...d.props }, d.children)
		if (d.componentOptions)
			return j(d.componentOptions.Ctor, { ...d.props }, d.componentOptions.children)
	})
}
const Ys = {
		name: 'Swiper',
		props: {
			tag: { type: String, default: 'div' },
			wrapperTag: { type: String, default: 'div' },
			modules: { type: Array, default: void 0 },
			init: { type: Boolean, default: void 0 },
			direction: { type: String, default: void 0 },
			oneWayMovement: { type: Boolean, default: void 0 },
			swiperElementNodeName: { type: String, default: 'SWIPER-CONTAINER' },
			touchEventsTarget: { type: String, default: void 0 },
			initialSlide: { type: Number, default: void 0 },
			speed: { type: Number, default: void 0 },
			cssMode: { type: Boolean, default: void 0 },
			updateOnWindowResize: { type: Boolean, default: void 0 },
			resizeObserver: { type: Boolean, default: void 0 },
			nested: { type: Boolean, default: void 0 },
			focusableElements: { type: String, default: void 0 },
			width: { type: Number, default: void 0 },
			height: { type: Number, default: void 0 },
			preventInteractionOnTransition: { type: Boolean, default: void 0 },
			userAgent: { type: String, default: void 0 },
			url: { type: String, default: void 0 },
			edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
			edgeSwipeThreshold: { type: Number, default: void 0 },
			autoHeight: { type: Boolean, default: void 0 },
			setWrapperSize: { type: Boolean, default: void 0 },
			virtualTranslate: { type: Boolean, default: void 0 },
			effect: { type: String, default: void 0 },
			breakpoints: { type: Object, default: void 0 },
			breakpointsBase: { type: String, default: void 0 },
			spaceBetween: { type: [Number, String], default: void 0 },
			slidesPerView: { type: [Number, String], default: void 0 },
			maxBackfaceHiddenSlides: { type: Number, default: void 0 },
			slidesPerGroup: { type: Number, default: void 0 },
			slidesPerGroupSkip: { type: Number, default: void 0 },
			slidesPerGroupAuto: { type: Boolean, default: void 0 },
			centeredSlides: { type: Boolean, default: void 0 },
			centeredSlidesBounds: { type: Boolean, default: void 0 },
			slidesOffsetBefore: { type: Number, default: void 0 },
			slidesOffsetAfter: { type: Number, default: void 0 },
			normalizeSlideIndex: { type: Boolean, default: void 0 },
			centerInsufficientSlides: { type: Boolean, default: void 0 },
			watchOverflow: { type: Boolean, default: void 0 },
			roundLengths: { type: Boolean, default: void 0 },
			touchRatio: { type: Number, default: void 0 },
			touchAngle: { type: Number, default: void 0 },
			simulateTouch: { type: Boolean, default: void 0 },
			shortSwipes: { type: Boolean, default: void 0 },
			longSwipes: { type: Boolean, default: void 0 },
			longSwipesRatio: { type: Number, default: void 0 },
			longSwipesMs: { type: Number, default: void 0 },
			followFinger: { type: Boolean, default: void 0 },
			allowTouchMove: { type: Boolean, default: void 0 },
			threshold: { type: Number, default: void 0 },
			touchMoveStopPropagation: { type: Boolean, default: void 0 },
			touchStartPreventDefault: { type: Boolean, default: void 0 },
			touchStartForcePreventDefault: { type: Boolean, default: void 0 },
			touchReleaseOnEdges: { type: Boolean, default: void 0 },
			uniqueNavElements: { type: Boolean, default: void 0 },
			resistance: { type: Boolean, default: void 0 },
			resistanceRatio: { type: Number, default: void 0 },
			watchSlidesProgress: { type: Boolean, default: void 0 },
			grabCursor: { type: Boolean, default: void 0 },
			preventClicks: { type: Boolean, default: void 0 },
			preventClicksPropagation: { type: Boolean, default: void 0 },
			slideToClickedSlide: { type: Boolean, default: void 0 },
			loop: { type: Boolean, default: void 0 },
			loopedSlides: { type: Number, default: void 0 },
			loopPreventsSliding: { type: Boolean, default: void 0 },
			rewind: { type: Boolean, default: void 0 },
			allowSlidePrev: { type: Boolean, default: void 0 },
			allowSlideNext: { type: Boolean, default: void 0 },
			swipeHandler: { type: Boolean, default: void 0 },
			noSwiping: { type: Boolean, default: void 0 },
			noSwipingClass: { type: String, default: void 0 },
			noSwipingSelector: { type: String, default: void 0 },
			passiveListeners: { type: Boolean, default: void 0 },
			containerModifierClass: { type: String, default: void 0 },
			slideClass: { type: String, default: void 0 },
			slideActiveClass: { type: String, default: void 0 },
			slideVisibleClass: { type: String, default: void 0 },
			slideFullyVisibleClass: { type: String, default: void 0 },
			slideBlankClass: { type: String, default: void 0 },
			slideNextClass: { type: String, default: void 0 },
			slidePrevClass: { type: String, default: void 0 },
			wrapperClass: { type: String, default: void 0 },
			lazyPreloaderClass: { type: String, default: void 0 },
			lazyPreloadPrevNext: { type: Number, default: void 0 },
			runCallbacksOnInit: { type: Boolean, default: void 0 },
			observer: { type: Boolean, default: void 0 },
			observeParents: { type: Boolean, default: void 0 },
			observeSlideChildren: { type: Boolean, default: void 0 },
			a11y: { type: [Boolean, Object], default: void 0 },
			autoplay: { type: [Boolean, Object], default: void 0 },
			controller: { type: Object, default: void 0 },
			coverflowEffect: { type: Object, default: void 0 },
			cubeEffect: { type: Object, default: void 0 },
			fadeEffect: { type: Object, default: void 0 },
			flipEffect: { type: Object, default: void 0 },
			creativeEffect: { type: Object, default: void 0 },
			cardsEffect: { type: Object, default: void 0 },
			hashNavigation: { type: [Boolean, Object], default: void 0 },
			history: { type: [Boolean, Object], default: void 0 },
			keyboard: { type: [Boolean, Object], default: void 0 },
			mousewheel: { type: [Boolean, Object], default: void 0 },
			navigation: { type: [Boolean, Object], default: void 0 },
			pagination: { type: [Boolean, Object], default: void 0 },
			parallax: { type: [Boolean, Object], default: void 0 },
			scrollbar: { type: [Boolean, Object], default: void 0 },
			thumbs: { type: Object, default: void 0 },
			virtual: { type: [Boolean, Object], default: void 0 },
			zoom: { type: [Boolean, Object], default: void 0 },
			grid: { type: [Object], default: void 0 },
			freeMode: { type: [Boolean, Object], default: void 0 },
			enabled: { type: Boolean, default: void 0 },
		},
		emits: [
			'_beforeBreakpoint',
			'_containerClasses',
			'_slideClass',
			'_slideClasses',
			'_swiper',
			'_freeModeNoMomentumRelease',
			'activeIndexChange',
			'afterInit',
			'autoplay',
			'autoplayStart',
			'autoplayStop',
			'autoplayPause',
			'autoplayResume',
			'autoplayTimeLeft',
			'beforeDestroy',
			'beforeInit',
			'beforeLoopFix',
			'beforeResize',
			'beforeSlideChangeStart',
			'beforeTransitionStart',
			'breakpoint',
			'changeDirection',
			'click',
			'disable',
			'doubleTap',
			'doubleClick',
			'destroy',
			'enable',
			'fromEdge',
			'hashChange',
			'hashSet',
			'init',
			'keyPress',
			'lock',
			'loopFix',
			'momentumBounce',
			'navigationHide',
			'navigationShow',
			'navigationPrev',
			'navigationNext',
			'observerUpdate',
			'orientationchange',
			'paginationHide',
			'paginationRender',
			'paginationShow',
			'paginationUpdate',
			'progress',
			'reachBeginning',
			'reachEnd',
			'realIndexChange',
			'resize',
			'scroll',
			'scrollbarDragEnd',
			'scrollbarDragMove',
			'scrollbarDragStart',
			'setTransition',
			'setTranslate',
			'slidesUpdated',
			'slideChange',
			'slideChangeTransitionEnd',
			'slideChangeTransitionStart',
			'slideNextTransitionEnd',
			'slideNextTransitionStart',
			'slidePrevTransitionEnd',
			'slidePrevTransitionStart',
			'slideResetTransitionStart',
			'slideResetTransitionEnd',
			'sliderMove',
			'sliderFirstMove',
			'slidesLengthChange',
			'slidesGridLengthChange',
			'snapGridLengthChange',
			'snapIndexChange',
			'swiper',
			'tap',
			'toEdge',
			'touchEnd',
			'touchMove',
			'touchMoveOpposite',
			'touchStart',
			'transitionEnd',
			'transitionStart',
			'unlock',
			'update',
			'virtualUpdate',
			'zoomChange',
		],
		setup(s, e) {
			let { slots: t, emit: i } = e
			const { tag: a, wrapperTag: n } = s,
				o = $('swiper'),
				l = $(null),
				r = $(!1),
				u = $(!1),
				d = $(null),
				p = $(null),
				m = $(null),
				g = { value: [] },
				h = { value: [] },
				y = $(null),
				E = $(null),
				w = $(null),
				f = $(null),
				{ params: c, passedParams: v } = He(s)
			Be(t, g, h), (m.value = v), (h.value = g.value)
			const S = () => {
				Be(t, g, h), (r.value = !0)
			}
			;(c.onAny = function (B) {
				for (var k = arguments.length, b = new Array(k > 1 ? k - 1 : 0), x = 1; x < k; x++)
					b[x - 1] = arguments[x]
				i(B, ...b)
			}),
				Object.assign(c.on, {
					_beforeBreakpoint: S,
					_containerClasses(B, k) {
						o.value = k
					},
				})
			const C = { ...c }
			if (
				(delete C.wrapperClass,
				(p.value = new Ie(C)),
				p.value.virtual && p.value.params.virtual.enabled)
			) {
				p.value.virtual.slides = g.value
				const B = {
					cache: !1,
					slides: g.value,
					renderExternal: (k) => {
						l.value = k
					},
					renderExternalUpdate: !1,
				}
				re(p.value.params.virtual, B), re(p.value.originalParams.virtual, B)
			}
			Re(() => {
				!u.value && p.value && (p.value.emitSlidesClasses(), (u.value = !0))
				const { passedParams: B } = He(s),
					k = js(B, m.value, g.value, h.value, (b) => b.props && b.props.key)
				;(m.value = B),
					(k.length || r.value) &&
						p.value &&
						!p.value.destroyed &&
						Hs({
							swiper: p.value,
							slides: g.value,
							passedParams: B,
							changedParams: k,
							nextEl: y.value,
							prevEl: E.value,
							scrollbarEl: f.value,
							paginationEl: w.value,
						}),
					(r.value = !1)
			}),
				je('swiper', p),
				dt(l, () => {
					ut(() => {
						Ws(p.value)
					})
				}),
				We(() => {
					d.value &&
						(Rs(
							{
								el: d.value,
								nextEl: y.value,
								prevEl: E.value,
								paginationEl: w.value,
								scrollbarEl: f.value,
								swiper: p.value,
							},
							c
						),
						i('swiper', p.value))
				}),
				Xe(() => {
					p.value && !p.value.destroyed && p.value.destroy(!0, !1)
				})
			function A(B) {
				return c.virtual
					? Xs(p, B, l.value)
					: (B.forEach((k, b) => {
							k.props || (k.props = {}), (k.props.swiperRef = p), (k.props.swiperSlideIndex = b)
					  }),
					  B)
			}
			return () => {
				const { slides: B, slots: k } = Be(t, g, h)
				return j(a, { ref: d, class: ot(o.value) }, [
					k['container-start'],
					j(n, { class: Vs(c.wrapperClass) }, [k['wrapper-start'], A(B), k['wrapper-end']]),
					nt(s) && [
						j('div', { ref: E, class: 'swiper-button-prev' }),
						j('div', { ref: y, class: 'swiper-button-next' }),
					],
					lt(s) && j('div', { ref: f, class: 'swiper-scrollbar' }),
					rt(s) && j('div', { ref: w, class: 'swiper-pagination' }),
					k['container-end'],
				])
			}
		},
	},
	Us = {
		name: 'SwiperSlide',
		props: {
			tag: { type: String, default: 'div' },
			swiperRef: { type: Object, required: !1 },
			swiperSlideIndex: { type: Number, default: void 0, required: !1 },
			zoom: { type: Boolean, default: void 0, required: !1 },
			lazy: { type: Boolean, default: !1, required: !1 },
			virtualIndex: { type: [String, Number], default: void 0 },
		},
		setup(s, e) {
			let { slots: t } = e,
				i = !1
			const { swiperRef: a } = s,
				n = $(null),
				o = $('swiper-slide'),
				l = $(!1)
			function r(p, m, g) {
				m === n.value && (o.value = g)
			}
			We(() => {
				!a || !a.value || (a.value.on('_slideClass', r), (i = !0))
			}),
				pt(() => {
					i || !a || !a.value || (a.value.on('_slideClass', r), (i = !0))
				}),
				Re(() => {
					!n.value ||
						!a ||
						!a.value ||
						(typeof s.swiperSlideIndex < 'u' && (n.value.swiperSlideIndex = s.swiperSlideIndex),
						a.value.destroyed && o.value !== 'swiper-slide' && (o.value = 'swiper-slide'))
				}),
				Xe(() => {
					!a || !a.value || a.value.off('_slideClass', r)
				})
			const u = ne(() => ({
				isActive: o.value.indexOf('swiper-slide-active') >= 0,
				isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
				isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
				isNext: o.value.indexOf('swiper-slide-next') >= 0,
			}))
			je('swiperSlide', u)
			const d = () => {
				l.value = !0
			}
			return () =>
				j(
					s.tag,
					{
						class: ot(`${o.value}`),
						ref: n,
						'data-swiper-slide-index':
							typeof s.virtualIndex > 'u' && a && a.value && a.value.params.loop
								? s.swiperSlideIndex
								: s.virtualIndex,
						onLoadCapture: d,
					},
					s.zoom
						? j(
								'div',
								{
									class: 'swiper-zoom-container',
									'data-swiper-zoom': typeof s.zoom == 'number' ? s.zoom : void 0,
								},
								[
									t.default && t.default(u.value),
									s.lazy && !l.value && j('div', { class: 'swiper-lazy-preloader' }),
								]
						  )
						: [
								t.default && t.default(u.value),
								s.lazy && !l.value && j('div', { class: 'swiper-lazy-preloader' }),
						  ]
				)
		},
	},
	Ks = Ye({
		__name: 'Swiper',
		props: {
			items: {},
			width: { default: '100%' },
			height: { default: '100%' },
			mode: { default: 'banner' },
			navigation: { type: Boolean, default: !0 },
			effect: { default: 'slide' },
			delay: { default: 3e3 },
			speed: { default: 300 },
			loop: { type: Boolean, default: !0 },
			pauseOnMouseEnter: { type: Boolean, default: !1 },
			swipe: { type: Boolean, default: !0 },
		},
		setup(s, { expose: e }) {
			e()
			const t = s,
				i = ne(() => {
					var p
					return (
						((p = t.items) == null
							? void 0
							: p.map((m) => (typeof m == 'string' ? { link: m } : m))) ?? []
					)
				})
			function a(p) {
				return typeof p == 'number' ? `${p}px` : p
			}
			const n = ne(() => ({ width: a(t.width), height: a(t.height) })),
				o = ne(() => {
					if (t.mode === 'carousel') return [qe]
					if (t.mode === 'broadcast') return [ze, _e, xt]
					const p = [ze, _e, qe],
						m = { fade: Ct, cube: Dt, flip: Bt, coverflow: At, cards: Pt, creative: Mt }
					return t.effect !== 'slide' && p.push(m[t.effect]), p
				}),
				l = ne(() =>
					t.mode === 'banner'
						? { delay: t.delay, disableOnInteraction: !1, pauseOnMouseEnter: t.pauseOnMouseEnter }
						: t.mode === 'carousel'
						? { delay: 0, disableOnInteraction: !1 }
						: !1
				),
				r = ne(() => (t.mode === 'banner' || t.mode === 'broadcast' ? t.navigation : !1))
			function u(p) {
				t.mode === 'carousel' &&
					t.pauseOnMouseEnter &&
					((p.el.onmouseenter = () => p.autoplay.stop()),
					(p.el.onmouseleave = () => p.autoplay.start()))
			}
			const d = {
				props: t,
				slideList: i,
				parseSize: a,
				styles: n,
				modules: o,
				autoplay: l,
				hasNavigation: r,
				onSwiper: u,
				get Swiper() {
					return Ys
				},
				get SwiperSlide() {
					return Us
				},
			}
			return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d
		},
	}),
	Zs = ['href'],
	Js = ['src', 'alt'],
	Qs = ['src', 'alt']
function ei(s, e, t, i, a, n) {
	const o = Ae('ClientOnly')
	return (
		z(),
		N(o, null, {
			default: X(() => [
				se(
					i.Swiper,
					ct(
						{
							class: [
								'vp-swiper',
								{ 'swiper-no-swiping': t.mode === 'banner' ? !t.swipe : t.mode === 'carousel' },
							],
							style: i.styles,
							modules: i.modules,
							autoplay: i.autoplay,
							navigation: i.hasNavigation,
							pagination: i.props.mode !== 'carousel' ? { dynamicBullets: !0, clickable: !0 } : !1,
							speed: t.speed,
							loop: t.loop,
							effect: t.mode === 'banner' ? t.effect : 'slide',
							lazy: '',
						},
						s.$attrs,
						{ onSwiper: i.onSwiper }
					),
					{
						default: X(() => [
							(z(!0),
							me(
								ft,
								null,
								ht(
									i.slideList,
									(l, r) => (
										z(),
										N(
											i.SwiperSlide,
											{ key: l.link + r },
											{
												default: X(() => [
													l.href
														? (z(),
														  me(
																'a',
																{
																	key: 0,
																	href: l.href,
																	target: '_blank',
																	rel: 'noopener noreferrer',
																	class: 'swiper-slide-link no-icon',
																},
																[
																	D(
																		'img',
																		{
																			class: 'swiper-slide-img',
																			src: l.link,
																			alt: l.alt,
																			loading: 'lazy',
																		},
																		null,
																		8,
																		Js
																	),
																],
																8,
																Zs
														  ))
														: (z(),
														  me(
																'img',
																{
																	key: 1,
																	class: 'swiper-slide-img',
																	src: l.link,
																	alt: l.alt,
																	loading: 'lazy',
																},
																null,
																8,
																Qs
														  )),
												]),
												_: 2,
											},
											1024
										)
									)
								),
								128
							)),
						]),
						_: 1,
					},
					16,
					[
						'class',
						'style',
						'modules',
						'autoplay',
						'navigation',
						'pagination',
						'speed',
						'loop',
						'effect',
					]
				),
			]),
			_: 1,
		})
	)
}
const ti = Ue(Ks, [
		['render', ei],
		['__file', 'Swiper.vue'],
	]),
	si = Ye({
		__name: 'index.html',
		setup(s, { expose: e }) {
			e()
			const t = $([])
			async function i() {
				const n = await fetch('https://api.pengzhanbo.cn/wallpaper/bing/list/zh/').then((o) =>
					o.json()
				)
				t.value = n.map((o) => ({ name: o.title, link: o.url }))
			}
			i()
			const a = { images: t, fetchImage: i, Swiper: ti }
			return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
		},
	})
function ii(s, e, t, i, a, n) {
	const o = Ae('VPIcon'),
		l = Ae('CodeTabs')
	return (
		z(),
		me('div', null, [
			e[8] ||
				(e[8] = D(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[D('a', { class: 'header-anchor', href: '#概述' }, [D('span', null, '概述')])],
					-1
				)),
			e[9] ||
				(e[9] = D(
					'p',
					null,
					[W('使用 '), D('code', null, '<Swiper>'), W(' 组件在 页面中显示轮播图片。')],
					-1
				)),
			e[10] ||
				(e[10] = D(
					'h2',
					{ id: '使用', tabindex: '-1' },
					[D('a', { class: 'header-anchor', href: '#使用' }, [D('span', null, '使用')])],
					-1
				)),
			e[11] ||
				(e[11] = D(
					'p',
					null,
					[W('使用该组件，首先需要手动安装 '), D('code', null, 'swiper'), W(' 库：')],
					-1
				)),
			se(
				l,
				{ id: '12', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }] },
				{
					title0: X(({ value: r, isActive: u }) => [
						se(o, { name: 'vscode-icons:file-type-light-pnpm' }),
						e[0] || (e[0] = D('span', null, 'pnpm', -1)),
					]),
					title1: X(({ value: r, isActive: u }) => [
						se(o, { name: 'vscode-icons:file-type-yarn' }),
						e[1] || (e[1] = D('span', null, 'yarn', -1)),
					]),
					title2: X(({ value: r, isActive: u }) => [
						se(o, { name: 'logos:npm-icon' }),
						e[2] || (e[2] = D('span', null, 'npm', -1)),
					]),
					tab0: X(
						({ value: r, isActive: u }) =>
							e[3] ||
							(e[3] = [
								D(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										D('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										D('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											D('code', null, [
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' swiper'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: X(
						({ value: r, isActive: u }) =>
							e[4] ||
							(e[4] = [
								D(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										D('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										D('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											D('code', null, [
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' swiper'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: X(
						({ value: r, isActive: u }) =>
							e[5] ||
							(e[5] = [
								D(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										D('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										D('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											D('code', null, [
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' swiper'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			e[12] ||
				(e[12] = G(
					`<p>然后，手动导入 <code>Swiper</code> 组件：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在 markdown 中导入 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Swiper</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/features/Swiper.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入后，即可在 markdown 中使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[&#39;img_link1&#39;, &#39;img_link2&#39;]</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p>注册为全局组件：</p>`,
					3
				)),
			se(
				l,
				{ id: '30', data: [{ id: '.vuepress/client.ts' }] },
				{
					title0: X(({ value: r, isActive: u }) => [
						se(o, { name: 'vscode-icons:file-type-typescript' }),
						e[6] || (e[6] = D('span', null, '.vuepress/client.ts', -1)),
					]),
					tab0: X(
						({ value: r, isActive: u }) =>
							e[7] ||
							(e[7] = [
								D(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										D('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										D('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											D('code', null, [
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' Swiper'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume/features/Swiper.vue'
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineClientConfig'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress/client'
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												W(`
`),
												D('span', { class: 'line' }),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'export'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' default'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineClientConfig'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  enhance'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({ '
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'app'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }) {'
													),
												]),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    app'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'component'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'Swiper'
													),
													D(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													D(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'Swiper'
													),
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
												]),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  },'
													),
												]),
												W(`
`),
												D('span', { class: 'line' }, [
													D(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'})'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			e[13] ||
				(e[13] = G(
					'<p>全局组件可在 其他任意 markdown 文件中使用</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[&#39;img_link1&#39;, &#39;img_link2&#39;]</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p><strong>示例:</strong></p>',
					3
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 0, items: i.images }, null, 8, ['items']))
				: R('', !0),
			e[14] ||
				(e[14] = G(
					'<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>items</td><td><code>string | { link: string; href?: string; alt?: string}[]</code></td><td><code>[]</code></td><td>图片链接数组，传入对象时，<code>link</code>表示图片链接，<code>href</code>表示跳转链接，<code>alt</code>表示图片描述</td></tr><tr><td>width</td><td><code>number | string</code></td><td><code>100%</code></td><td>轮播区域宽度</td></tr><tr><td>height</td><td><code>number | string</code></td><td><code>100%</code></td><td>轮播区域高度</td></tr><tr><td>mode</td><td><code>&#39;banner&#39; | &#39;carousel&#39; | &#39;broadcast&#39;</code></td><td><code>&#39;banner&#39;</code></td><td>轮播模式, <code>banner</code>: 轮播图; <code>carousel</code>: 走马灯; <code>broadcast</code>: 信息展播</td></tr><tr><td>navigation</td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示导航按钮</td></tr><tr><td>effect</td><td><code>&#39;slide&#39; | &#39;fade&#39; | &#39;cube&#39; | &#39;coverflow&#39; | &#39;flip&#39; | &#39;cards&#39; | &#39;creative&#39;</code></td><td><code>&#39;slide&#39;</code></td><td>轮播效果</td></tr><tr><td>delay</td><td><code>number</code></td><td><code>3000</code></td><td>轮播间隔时间, 仅当 <code>mode: &#39;banner&#39;</code> 时生效，单位 <code>ms</code></td></tr><tr><td>speed</td><td><code>number</code></td><td><code>300</code></td><td>动画持续时间，单位 <code>ms</code></td></tr><tr><td>loop</td><td><code>boolean</code></td><td><code>true</code></td><td>是否循环</td></tr><tr><td>pauseOnMouseEnter</td><td><code>boolean</code></td><td><code>false</code></td><td>是否鼠标悬停时暂停轮播</td></tr><tr><td>swipe</td><td><code>boolean</code></td><td><code>true</code></td><td>是否开启手势滑动</td></tr></tbody></table><p>更多 props 请参考 <a href="https://swiperjs.com/swiper-api#parameters" target="_blank" rel="noopener noreferrer">Swiper 文档</a></p><h2 id="参考示例" tabindex="-1"><a class="header-anchor" href="#参考示例"><span>参考示例</span></a></h2><h3 id="预设动画效果" tabindex="-1"><a class="header-anchor" href="#预设动画效果"><span>预设动画效果</span></a></h3><p><strong>cube:</strong></p>',
					6
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 1, items: i.images, effect: 'cube' }, null, 8, ['items']))
				: R('', !0),
			e[15] ||
				(e[15] = G(
					'<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cube</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div></details><p><strong>fade:</strong></p>',
					2
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 2, items: i.images, effect: 'fade' }, null, 8, ['items']))
				: R('', !0),
			e[16] ||
				(e[16] = G(
					'<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fade</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div></details><p><strong>coverflow:</strong></p>',
					2
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 3, items: i.images, effect: 'coverflow' }, null, 8, ['items']))
				: R('', !0),
			e[17] ||
				(e[17] = G(
					'<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">coverflow</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div></details><p><strong>flip:</strong></p>',
					2
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 4, items: i.images, effect: 'flip' }, null, 8, ['items']))
				: R('', !0),
			e[18] ||
				(e[18] = G(
					'<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">flip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div></details><p><strong>cards:</strong></p>',
					2
				)),
			i.images.length
				? (z(), N(i.Swiper, { key: 5, items: i.images, effect: 'cards' }, null, 8, ['items']))
				: R('', !0),
			e[19] ||
				(e[19] = G(
					'<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cards</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div></details><h3 id="自定义动画效果" tabindex="-1"><a class="header-anchor" href="#自定义动画效果"><span>自定义动画效果</span></a></h3><p><strong>示例 1：</strong></p>',
					3
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 6,
							items: i.images,
							effect: 'creative',
							creativeEffect: {
								prev: { shadow: !0, translate: [0, 0, -400] },
								next: { translate: ['100%', 0, 0] },
							},
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[20] ||
				(e[20] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">creative</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :creativeEffect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  prev: { shadow: true, translate: [0, 0, -400] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  next: { translate: [&#39;100%&#39;, 0, 0] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details><p><strong>示例 2：</strong></p>`,
					2
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 7,
							items: i.images,
							effect: 'creative',
							creativeEffect: {
								prev: { shadow: !0, translate: [0, 0, -800], rotate: [180, 0, 0] },
								next: { shadow: !0, translate: [0, 0, -800], rotate: [-180, 0, 0] },
							},
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[21] ||
				(e[21] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">creative</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :creativeEffect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  prev: { shadow: true,  translate: [0, 0, -800], rotate: [180, 0, 0] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  next: { shadow: true, translate: [0, 0, -800], rotate: [-180, 0, 0] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details><p><strong>示例 3：</strong></p>`,
					2
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 8,
							items: i.images,
							effect: 'creative',
							creativeEffect: {
								prev: { shadow: !0, translate: ['-125%', 0, -800], rotate: [0, 0, -90] },
								next: { shadow: !0, translate: ['125%', 0, -800], rotate: [0, 0, 90] },
							},
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[22] ||
				(e[22] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">creative</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :creativeEffect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  prev: { shadow: true, translate: [&#39;-125%&#39;, 0, -800], rotate: [0, 0, -90] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  next: { shadow: true, translate: [&#39;125%&#39;, 0, -800], rotate: [0, 0, 90] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details><p><strong>示例 4：</strong></p>`,
					2
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 9,
							items: i.images,
							effect: 'creative',
							creativeEffect: {
								prev: {
									shadow: !0,
									origin: 'left center',
									translate: ['-5%', 0, -200],
									rotate: [0, 100, 0],
								},
								next: { origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0] },
							},
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[23] ||
				(e[23] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> effect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">creative</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> :creativeEffect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  prev: { shadow: true, origin: &#39;left center&#39;, translate: [&#39;-5%&#39;, 0, -200], rotate: [0, 100, 0] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  next: { origin: &#39;right center&#39;, translate: [&#39;5%&#39;, 0, -200], rotate: [0, -100, 0] },</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details><h3 id="走马灯" tabindex="-1"><a class="header-anchor" href="#走马灯"><span>走马灯</span></a></h3>`,
					2
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 10,
							items: i.images,
							mode: 'carousel',
							height: 200,
							'slides-per-view': 3,
							'space-between': 20,
							speed: 5500,
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[24] ||
				(e[24] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">carousel</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :slides-per-view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :space-between</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">20</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :speed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">5500</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details><h3 id="信息展播" tabindex="-1"><a class="header-anchor" href="#信息展播"><span>信息展播</span></a></h3>`,
					2
				)),
			i.images.length
				? (z(),
				  N(
						i.Swiper,
						{
							key: 11,
							items: i.images,
							mode: 'broadcast',
							height: 200,
							'slides-per-view': 3,
							'space-between': 20,
							mousewheel: '',
						},
						null,
						8,
						['items']
				  ))
				: R('', !0),
			e[25] ||
				(e[25] = G(
					`<details class="hint-container details"><summary>查看代码</summary><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Swiper</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">images</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  mode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">broadcast</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :slides-per-view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  :space-between</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">20</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  mousewheel</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div></details>`,
					1
				)),
		])
	)
}
const ni = Ue(si, [
		['render', ii],
		['__file', 'index.html.vue'],
	]),
	ri = JSON.parse(
		'{"path":"/blog/guide/components/swiper/","title":"轮播图","lang":"zh-CN","frontmatter":{"title":"轮播图","icon":"dashicons:images-alt2","createTime":"2024/09/12 22:00:22","permalink":"/blog/guide/components/swiper/","badge":"v1.0.0-rc.98 +","description":"概述 使用 <Swiper> 组件在 页面中显示轮播图片。 使用 使用该组件，首先需要手动安装 swiper 库： 然后，手动导入 Swiper 组件： 注册为全局组件： 全局组件可在 其他任意 markdown 文件中使用 示例:","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/swiper/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"轮播图"}],["meta",{"property":"og:description","content":"概述 使用 <Swiper> 组件在 页面中显示轮播图片。 使用 使用该组件，首先需要手动安装 swiper 库： 然后，手动导入 Swiper 组件： 注册为全局组件： 全局组件可在 其他任意 markdown 文件中使用 示例:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"轮播图\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.98,"words":894},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/轮播图.md","bulletin":false}'
	)
export { ni as comp, ri as data }
