var ny = Object.defineProperty
var ry = (n, e, t) =>
	e in n ? ny(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t)
var ht = (n, e, t) => ry(n, typeof e != 'symbol' ? e + '' : e, t)
import { a0 as Mi } from './app-B_7CxFr0.js'
import {
	b5 as qt,
	m as s,
	N as be,
	z as F,
	ab as Kc,
	a1 as iy,
	y as Yt,
	by as ps,
	q as Th,
	aL as ms,
} from './mermaid.esm.min-mOeGQeJH.js'
import {
	Z as $,
	o as ke,
	p as Ue,
	q as le,
	_ as ne,
	k as Yi,
	J as I,
	r as J,
	R as ae,
	D as yi,
	X as Q,
	u as Fe,
	f as L,
	v as Xi,
	K as Ti,
	Q as we,
	z as Ee,
	s as et,
	U as Me,
	w as Bo,
	x as vh,
	y as ay,
	A as sy,
	B as Se,
	C as tt,
	M as ee,
	N as Vo,
	E as gs,
	F as Wc,
	c as Ie,
	G as ys,
	H as ua,
	V as oy,
} from './chunk-5ZJXQJOJ-BLPz1OP7.js'
var Rh = ms((n) => {
		Object.defineProperty(n, '__esModule', { value: !0 })
		var e
		function t() {
			if (e === void 0) throw new Error('No runtime abstraction layer installed')
			return e
		}
		s(t, 'RAL'),
			(function (r) {
				function i(a) {
					if (a === void 0) throw new Error('No runtime abstraction layer provided')
					e = a
				}
				s(i, 'install'), (r.install = i)
			})(t || (t = {})),
			(n.default = t)
	}),
	ly = ms((n) => {
		Object.defineProperty(n, '__esModule', { value: !0 }),
			(n.stringArray = n.array = n.func = n.error = n.number = n.string = n.boolean = void 0)
		function e(u) {
			return u === !0 || u === !1
		}
		s(e, 'boolean'), (n.boolean = e)
		function t(u) {
			return typeof u == 'string' || u instanceof String
		}
		s(t, 'string'), (n.string = t)
		function r(u) {
			return typeof u == 'number' || u instanceof Number
		}
		s(r, 'number'), (n.number = r)
		function i(u) {
			return u instanceof Error
		}
		s(i, 'error'), (n.error = i)
		function a(u) {
			return typeof u == 'function'
		}
		s(a, 'func'), (n.func = a)
		function o(u) {
			return Array.isArray(u)
		}
		s(o, 'array'), (n.array = o)
		function l(u) {
			return o(u) && u.every((c) => t(c))
		}
		s(l, 'stringArray'), (n.stringArray = l)
	}),
	Ah = ms((n) => {
		var a, o
		Object.defineProperty(n, '__esModule', { value: !0 }), (n.Emitter = n.Event = void 0)
		var e = Rh(),
			t
		;(function (l) {
			let u = { dispose() {} }
			l.None = function () {
				return u
			}
		})(t || (n.Event = t = {}))
		var r =
				((a = class {
					add(u, c = null, d) {
						this._callbacks || ((this._callbacks = []), (this._contexts = [])),
							this._callbacks.push(u),
							this._contexts.push(c),
							Array.isArray(d) && d.push({ dispose: s(() => this.remove(u, c), 'dispose') })
					}
					remove(u, c = null) {
						if (!this._callbacks) return
						let d = !1
						for (let h = 0, f = this._callbacks.length; h < f; h++)
							if (this._callbacks[h] === u)
								if (this._contexts[h] === c) {
									this._callbacks.splice(h, 1), this._contexts.splice(h, 1)
									return
								} else d = !0
						if (d)
							throw new Error(
								'When adding a listener with a context, you should remove it with the same context'
							)
					}
					invoke(...u) {
						if (!this._callbacks) return []
						let c = [],
							d = this._callbacks.slice(0),
							h = this._contexts.slice(0)
						for (let f = 0, p = d.length; f < p; f++)
							try {
								c.push(d[f].apply(h[f], u))
							} catch (g) {
								;(0, e.default)().console.error(g)
							}
						return c
					}
					isEmpty() {
						return !this._callbacks || this._callbacks.length === 0
					}
					dispose() {
						;(this._callbacks = void 0), (this._contexts = void 0)
					}
				}),
				s(a, 'CallbackList'),
				a),
			i =
				((o = class {
					constructor(u) {
						this._options = u
					}
					get event() {
						return (
							this._event ||
								(this._event = (u, c, d) => {
									this._callbacks || (this._callbacks = new r()),
										this._options &&
											this._options.onFirstListenerAdd &&
											this._callbacks.isEmpty() &&
											this._options.onFirstListenerAdd(this),
										this._callbacks.add(u, c)
									let h = {
										dispose: s(() => {
											this._callbacks &&
												(this._callbacks.remove(u, c),
												(h.dispose = o._noop),
												this._options &&
													this._options.onLastListenerRemove &&
													this._callbacks.isEmpty() &&
													this._options.onLastListenerRemove(this))
										}, 'dispose'),
									}
									return Array.isArray(d) && d.push(h), h
								}),
							this._event
						)
					}
					fire(u) {
						this._callbacks && this._callbacks.invoke.call(this._callbacks, u)
					}
					dispose() {
						this._callbacks && (this._callbacks.dispose(), (this._callbacks = void 0))
					}
				}),
				s(o, 'Emitter'),
				o)
		;(n.Emitter = i), (i._noop = function () {})
	}),
	uy = ms((n) => {
		var u, c
		Object.defineProperty(n, '__esModule', { value: !0 }),
			(n.CancellationTokenSource = n.CancellationToken = void 0)
		var e = Rh(),
			t = ly(),
			r = Ah(),
			i
		;(function (d) {
			;(d.None = Object.freeze({
				isCancellationRequested: !1,
				onCancellationRequested: r.Event.None,
			})),
				(d.Cancelled = Object.freeze({
					isCancellationRequested: !0,
					onCancellationRequested: r.Event.None,
				}))
			function h(f) {
				let p = f
				return (
					p &&
					(p === d.None ||
						p === d.Cancelled ||
						(t.boolean(p.isCancellationRequested) && !!p.onCancellationRequested))
				)
			}
			s(h, 'is'), (d.is = h)
		})(i || (n.CancellationToken = i = {}))
		var a = Object.freeze(function (d, h) {
				let f = (0, e.default)().timer.setTimeout(d.bind(h), 0)
				return {
					dispose() {
						f.dispose()
					},
				}
			}),
			o =
				((u = class {
					constructor() {
						this._isCancelled = !1
					}
					cancel() {
						this._isCancelled ||
							((this._isCancelled = !0),
							this._emitter && (this._emitter.fire(void 0), this.dispose()))
					}
					get isCancellationRequested() {
						return this._isCancelled
					}
					get onCancellationRequested() {
						return this._isCancelled
							? a
							: (this._emitter || (this._emitter = new r.Emitter()), this._emitter.event)
					}
					dispose() {
						this._emitter && (this._emitter.dispose(), (this._emitter = void 0))
					}
				}),
				s(u, 'MutableToken'),
				u),
			l =
				((c = class {
					get token() {
						return this._token || (this._token = new o()), this._token
					}
					cancel() {
						this._token ? this._token.cancel() : (this._token = i.Cancelled)
					}
					dispose() {
						this._token ? this._token instanceof o && this._token.dispose() : (this._token = i.None)
					}
				}),
				s(c, 'CancellationTokenSource'),
				c)
		n.CancellationTokenSource = l
	}),
	Eh = {}
qt(Eh, {
	AbstractAstReflection: () => Wo,
	AbstractCstNode: () => nc,
	AbstractLangiumParser: () => ic,
	AbstractParserErrorMessageProvider: () => Dm,
	AbstractThreadedAsyncParser: () => uT,
	AstUtils: () => ru,
	BiMap: () => cs,
	Cancellation: () => W,
	CompositeCstNodeImpl: () => Hs,
	ContextCache: () => Ys,
	CstNodeBuilder: () => Pm,
	CstUtils: () => jo,
	DONE_RESULT: () => ce,
	DatatypeSymbol: () => ss,
	DefaultAstNodeDescriptionProvider: () => ug,
	DefaultAstNodeLocator: () => dg,
	DefaultAsyncParser: () => $g,
	DefaultCommentProvider: () => Ng,
	DefaultConfigurationProvider: () => hg,
	DefaultDocumentBuilder: () => fg,
	DefaultDocumentValidator: () => lg,
	DefaultHydrator: () => bg,
	DefaultIndexManager: () => pg,
	DefaultJsonSerializer: () => ag,
	DefaultLangiumDocumentFactory: () => Xm,
	DefaultLangiumDocuments: () => Jm,
	DefaultLexer: () => gg,
	DefaultLinker: () => Qm,
	DefaultNameProvider: () => Zm,
	DefaultReferenceDescriptionProvider: () => cg,
	DefaultReferences: () => eg,
	DefaultScopeComputation: () => tg,
	DefaultScopeProvider: () => ig,
	DefaultServiceRegistry: () => sg,
	DefaultTokenBuilder: () => fc,
	DefaultValueConverter: () => pc,
	DefaultWorkspaceLock: () => Lg,
	DefaultWorkspaceManager: () => mg,
	Deferred: () => ot,
	Disposable: () => Ci,
	DisposableCache: () => qs,
	DocumentCache: () => rg,
	DocumentState: () => U,
	DocumentValidator: () => Je,
	EMPTY_SCOPE: () => aT,
	EMPTY_STREAM: () => vs,
	EmptyFileSystem: () => tn,
	EmptyFileSystemProvider: () => wg,
	ErrorWithLocation: () => As,
	GrammarAST: () => Lh,
	GrammarUtils: () => el,
	JSDocDocumentationProvider: () => xg,
	LangiumCompletionParser: () => Mm,
	LangiumParser: () => _m,
	LangiumParserErrorMessageProvider: () => ac,
	LeafCstNodeImpl: () => as,
	MapScope: () => ng,
	Module: () => Fo,
	MultiMap: () => Ra,
	OperationCancelled: () => Tt,
	ParserWorker: () => cT,
	Reduction: () => Qi,
	RegExpUtils: () => ou,
	RootCstNodeImpl: () => rc,
	SimpleCache: () => Rc,
	StreamImpl: () => Ke,
	StreamScope: () => Oo,
	TextDocument: () => ls,
	TreeStreamImpl: () => vi,
	URI: () => vt,
	UriUtils: () => ze,
	ValidationCategory: () => oa,
	ValidationRegistry: () => og,
	ValueConverter: () => Ve,
	WorkspaceCache: () => Ac,
	assertUnreachable: () => Jt,
	createCompletionParser: () => cc,
	createDefaultCoreModule: () => Et,
	createDefaultSharedCoreModule: () => kt,
	createGrammarConfig: () => Iu,
	createLangiumParser: () => dc,
	delayNextTick: () => zs,
	diagnosticData: () => ds,
	eagerLoad: () => wc,
	getDiagnosticRange: () => kc,
	inject: () => ge,
	interruptAndCheck: () => fe,
	isAstNode: () => Y,
	isAstNodeDescription: () => Ko,
	isAstNodeWithComment: () => Ec,
	isCompositeCstNode: () => He,
	isIMultiModeLexerDefinition: () => Xs,
	isJSDoc: () => Ic,
	isLeafCstNode: () => Xt,
	isLinkingError: () => on,
	isNamed: () => vc,
	isOperationCancelled: () => Oi,
	isReference: () => de,
	isRootCstNode: () => Ts,
	isTokenTypeArray: () => Sc,
	isTokenTypeDictionary: () => hs,
	loadGrammarFromJson: () => St,
	parseJSDoc: () => Cc,
	prepareLangiumParser: () => hc,
	setInterruptionPeriod: () => gc,
	startCancelableOperation: () => mc,
	stream: () => q,
	toDiagnosticSeverity: () => qi,
})
var jo = {}
qt(jo, {
	DefaultNameRegexp: () => Yo,
	RangeComparison: () => Qe,
	compareRange: () => zo,
	findCommentNode: () => Xo,
	findDeclarationNodeAtOffset: () => Ch,
	findLeafNodeAtOffset: () => Rs,
	findLeafNodeBeforeOffset: () => Jo,
	flattenCst: () => Sh,
	getInteriorNodes: () => Nh,
	getNextNode: () => Ih,
	getPreviousNode: () => Zo,
	getStartlineNode: () => xh,
	inRange: () => qo,
	isChildNode: () => Ho,
	isCommentNode: () => _a,
	streamCst: () => Ri,
	toDocumentSegment: () => Ai,
	tokenToRange: () => Zi,
})
function Y(n) {
	return typeof n == 'object' && n !== null && typeof n.$type == 'string'
}
s(Y, 'isAstNode')
function de(n) {
	return typeof n == 'object' && n !== null && typeof n.$refText == 'string'
}
s(de, 'isReference')
function Ko(n) {
	return (
		typeof n == 'object' &&
		n !== null &&
		typeof n.name == 'string' &&
		typeof n.type == 'string' &&
		typeof n.path == 'string'
	)
}
s(Ko, 'isAstNodeDescription')
function on(n) {
	return (
		typeof n == 'object' &&
		n !== null &&
		Y(n.container) &&
		de(n.reference) &&
		typeof n.message == 'string'
	)
}
s(on, 'isLinkingError')
var ln,
	Wo =
		((ln = class {
			constructor() {
				;(this.subtypes = {}), (this.allSubtypes = {})
			}
			isInstance(e, t) {
				return Y(e) && this.isSubtype(e.$type, t)
			}
			isSubtype(e, t) {
				if (e === t) return !0
				let r = this.subtypes[e]
				r || (r = this.subtypes[e] = {})
				let i = r[t]
				if (i !== void 0) return i
				{
					let a = this.computeIsSubtype(e, t)
					return (r[t] = a), a
				}
			}
			getAllSubTypes(e) {
				let t = this.allSubtypes[e]
				if (t) return t
				{
					let r = this.getAllTypes(),
						i = []
					for (let a of r) this.isSubtype(a, e) && i.push(a)
					return (this.allSubtypes[e] = i), i
				}
			}
		}),
		s(ln, 'AbstractAstReflection'),
		ln)
function He(n) {
	return typeof n == 'object' && n !== null && Array.isArray(n.content)
}
s(He, 'isCompositeCstNode')
function Xt(n) {
	return typeof n == 'object' && n !== null && typeof n.tokenType == 'object'
}
s(Xt, 'isLeafCstNode')
function Ts(n) {
	return He(n) && typeof n.fullText == 'string'
}
s(Ts, 'isRootCstNode')
var Ae,
	Ke =
		((Ae = class {
			constructor(e, t) {
				;(this.startFn = e), (this.nextFn = t)
			}
			iterator() {
				let e = {
					state: this.startFn(),
					next: s(() => this.nextFn(e.state), 'next'),
					[Symbol.iterator]: () => e,
				}
				return e
			}
			[Symbol.iterator]() {
				return this.iterator()
			}
			isEmpty() {
				return !!this.iterator().next().done
			}
			count() {
				let e = this.iterator(),
					t = 0,
					r = e.next()
				for (; !r.done; ) t++, (r = e.next())
				return t
			}
			toArray() {
				let e = [],
					t = this.iterator(),
					r
				do (r = t.next()), r.value !== void 0 && e.push(r.value)
				while (!r.done)
				return e
			}
			toSet() {
				return new Set(this)
			}
			toMap(e, t) {
				let r = this.map((i) => [e ? e(i) : i, t ? t(i) : i])
				return new Map(r)
			}
			toString() {
				return this.join()
			}
			concat(e) {
				let t = e[Symbol.iterator]()
				return new Ae(
					() => ({ first: this.startFn(), firstDone: !1 }),
					(r) => {
						let i
						if (!r.firstDone) {
							do if (((i = this.nextFn(r.first)), !i.done)) return i
							while (!i.done)
							r.firstDone = !0
						}
						do if (((i = t.next()), !i.done)) return i
						while (!i.done)
						return ce
					}
				)
			}
			join(e = ',') {
				let t = this.iterator(),
					r = '',
					i,
					a = !1
				do (i = t.next()), i.done || (a && (r += e), (r += kh(i.value))), (a = !0)
				while (!i.done)
				return r
			}
			indexOf(e, t = 0) {
				let r = this.iterator(),
					i = 0,
					a = r.next()
				for (; !a.done; ) {
					if (i >= t && a.value === e) return i
					;(a = r.next()), i++
				}
				return -1
			}
			every(e) {
				let t = this.iterator(),
					r = t.next()
				for (; !r.done; ) {
					if (!e(r.value)) return !1
					r = t.next()
				}
				return !0
			}
			some(e) {
				let t = this.iterator(),
					r = t.next()
				for (; !r.done; ) {
					if (e(r.value)) return !0
					r = t.next()
				}
				return !1
			}
			forEach(e) {
				let t = this.iterator(),
					r = 0,
					i = t.next()
				for (; !i.done; ) e(i.value, r), (i = t.next()), r++
			}
			map(e) {
				return new Ae(this.startFn, (t) => {
					let { done: r, value: i } = this.nextFn(t)
					return r ? ce : { done: !1, value: e(i) }
				})
			}
			filter(e) {
				return new Ae(this.startFn, (t) => {
					let r
					do if (((r = this.nextFn(t)), !r.done && e(r.value))) return r
					while (!r.done)
					return ce
				})
			}
			nonNullable() {
				return this.filter((e) => e != null)
			}
			reduce(e, t) {
				let r = this.iterator(),
					i = t,
					a = r.next()
				for (; !a.done; ) i === void 0 ? (i = a.value) : (i = e(i, a.value)), (a = r.next())
				return i
			}
			reduceRight(e, t) {
				return this.recursiveReduce(this.iterator(), e, t)
			}
			recursiveReduce(e, t, r) {
				let i = e.next()
				if (i.done) return r
				let a = this.recursiveReduce(e, t, r)
				return a === void 0 ? i.value : t(a, i.value)
			}
			find(e) {
				let t = this.iterator(),
					r = t.next()
				for (; !r.done; ) {
					if (e(r.value)) return r.value
					r = t.next()
				}
			}
			findIndex(e) {
				let t = this.iterator(),
					r = 0,
					i = t.next()
				for (; !i.done; ) {
					if (e(i.value)) return r
					;(i = t.next()), r++
				}
				return -1
			}
			includes(e) {
				let t = this.iterator(),
					r = t.next()
				for (; !r.done; ) {
					if (r.value === e) return !0
					r = t.next()
				}
				return !1
			}
			flatMap(e) {
				return new Ae(
					() => ({ this: this.startFn() }),
					(t) => {
						do {
							if (t.iterator) {
								let a = t.iterator.next()
								if (a.done) t.iterator = void 0
								else return a
							}
							let { done: r, value: i } = this.nextFn(t.this)
							if (!r) {
								let a = e(i)
								if (Ji(a)) t.iterator = a[Symbol.iterator]()
								else return { done: !1, value: a }
							}
						} while (t.iterator)
						return ce
					}
				)
			}
			flat(e) {
				if ((e === void 0 && (e = 1), e <= 0)) return this
				let t = e > 1 ? this.flat(e - 1) : this
				return new Ae(
					() => ({ this: t.startFn() }),
					(r) => {
						do {
							if (r.iterator) {
								let o = r.iterator.next()
								if (o.done) r.iterator = void 0
								else return o
							}
							let { done: i, value: a } = t.nextFn(r.this)
							if (!i)
								if (Ji(a)) r.iterator = a[Symbol.iterator]()
								else return { done: !1, value: a }
						} while (r.iterator)
						return ce
					}
				)
			}
			head() {
				let e = this.iterator().next()
				if (!e.done) return e.value
			}
			tail(e = 1) {
				return new Ae(() => {
					let t = this.startFn()
					for (let r = 0; r < e; r++) if (this.nextFn(t).done) return t
					return t
				}, this.nextFn)
			}
			limit(e) {
				return new Ae(
					() => ({ size: 0, state: this.startFn() }),
					(t) => (t.size++, t.size > e ? ce : this.nextFn(t.state))
				)
			}
			distinct(e) {
				let t = new Set()
				return this.filter((r) => {
					let i = e ? e(r) : r
					return t.has(i) ? !1 : (t.add(i), !0)
				})
			}
			exclude(e, t) {
				let r = new Set()
				for (let i of e) {
					let a = t ? t(i) : i
					r.add(a)
				}
				return this.filter((i) => {
					let a = t ? t(i) : i
					return !r.has(a)
				})
			}
		}),
		s(Ae, 'StreamImpl'),
		Ae)
function kh(n) {
	return typeof n == 'string'
		? n
		: typeof n > 'u'
		? 'undefined'
		: typeof n.toString == 'function'
		? n.toString()
		: Object.prototype.toString.call(n)
}
s(kh, 'toString')
function Ji(n) {
	return !!n && typeof n[Symbol.iterator] == 'function'
}
s(Ji, 'isIterable')
var vs = new Ke(
		() => {},
		() => ce
	),
	ce = Object.freeze({ done: !0, value: void 0 })
function q(...n) {
	if (n.length === 1) {
		let e = n[0]
		if (e instanceof Ke) return e
		if (Ji(e))
			return new Ke(
				() => e[Symbol.iterator](),
				(t) => t.next()
			)
		if (typeof e.length == 'number')
			return new Ke(
				() => ({ index: 0 }),
				(t) => (t.index < e.length ? { done: !1, value: e[t.index++] } : ce)
			)
	}
	return n.length > 1
		? new Ke(
				() => ({ collIndex: 0, arrIndex: 0 }),
				(e) => {
					do {
						if (e.iterator) {
							let t = e.iterator.next()
							if (!t.done) return t
							e.iterator = void 0
						}
						if (e.array) {
							if (e.arrIndex < e.array.length) return { done: !1, value: e.array[e.arrIndex++] }
							;(e.array = void 0), (e.arrIndex = 0)
						}
						if (e.collIndex < n.length) {
							let t = n[e.collIndex++]
							Ji(t)
								? (e.iterator = t[Symbol.iterator]())
								: t && typeof t.length == 'number' && (e.array = t)
						}
					} while (e.iterator || e.array || e.collIndex < n.length)
					return ce
				}
		  )
		: vs
}
s(q, 'stream')
var un,
	vi =
		((un = class extends Ke {
			constructor(e, t, r) {
				super(
					() => ({
						iterators:
							r != null && r.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
						pruned: !1,
					}),
					(i) => {
						for (i.pruned && (i.iterators.pop(), (i.pruned = !1)); i.iterators.length > 0; ) {
							let a = i.iterators[i.iterators.length - 1].next()
							if (a.done) i.iterators.pop()
							else return i.iterators.push(t(a.value)[Symbol.iterator]()), a
						}
						return ce
					}
				)
			}
			iterator() {
				let e = {
					state: this.startFn(),
					next: s(() => this.nextFn(e.state), 'next'),
					prune: s(() => {
						e.state.pruned = !0
					}, 'prune'),
					[Symbol.iterator]: () => e,
				}
				return e
			}
		}),
		s(un, 'TreeStreamImpl'),
		un),
	Qi
;(function (n) {
	function e(a) {
		return a.reduce((o, l) => o + l, 0)
	}
	s(e, 'sum'), (n.sum = e)
	function t(a) {
		return a.reduce((o, l) => o * l, 0)
	}
	s(t, 'product'), (n.product = t)
	function r(a) {
		return a.reduce((o, l) => Math.min(o, l))
	}
	s(r, 'min'), (n.min = r)
	function i(a) {
		return a.reduce((o, l) => Math.max(o, l))
	}
	s(i, 'max'), (n.max = i)
})(Qi || (Qi = {}))
function Ri(n) {
	return new vi(n, (e) => (He(e) ? e.content : []), { includeRoot: !0 })
}
s(Ri, 'streamCst')
function Sh(n) {
	return Ri(n).filter(Xt)
}
s(Sh, 'flattenCst')
function Ho(n, e) {
	for (; n.container; ) if (((n = n.container), n === e)) return !0
	return !1
}
s(Ho, 'isChildNode')
function Zi(n) {
	return {
		start: { character: n.startColumn - 1, line: n.startLine - 1 },
		end: { character: n.endColumn, line: n.endLine - 1 },
	}
}
s(Zi, 'tokenToRange')
function Ai(n) {
	if (!n) return
	let { offset: e, end: t, range: r } = n
	return { range: r, offset: e, end: t, length: t - e }
}
s(Ai, 'toDocumentSegment')
var Qe
;(function (n) {
	;(n[(n.Before = 0)] = 'Before'),
		(n[(n.After = 1)] = 'After'),
		(n[(n.OverlapFront = 2)] = 'OverlapFront'),
		(n[(n.OverlapBack = 3)] = 'OverlapBack'),
		(n[(n.Inside = 4)] = 'Inside')
})(Qe || (Qe = {}))
function zo(n, e) {
	if (
		n.end.line < e.start.line ||
		(n.end.line === e.start.line && n.end.character < n.start.character)
	)
		return Qe.Before
	if (
		n.start.line > e.end.line ||
		(n.start.line === e.end.line && n.start.character > e.end.character)
	)
		return Qe.After
	let t =
			n.start.line > e.start.line ||
			(n.start.line === e.start.line && n.start.character >= e.start.character),
		r = n.end.line < e.end.line || (n.end.line === e.end.line && n.end.character <= e.end.character)
	return t && r ? Qe.Inside : t ? Qe.OverlapBack : Qe.OverlapFront
}
s(zo, 'compareRange')
function qo(n, e) {
	return zo(n, e) > Qe.After
}
s(qo, 'inRange')
var Yo = /^[\w\p{L}]$/u
function Ch(n, e, t = Yo) {
	if (n) {
		if (e > 0) {
			let r = e - n.offset,
				i = n.text.charAt(r)
			t.test(i) || e--
		}
		return Rs(n, e)
	}
}
s(Ch, 'findDeclarationNodeAtOffset')
function Xo(n, e) {
	if (n) {
		let t = Zo(n, !0)
		if (t && _a(t, e)) return t
		if (Ts(n)) {
			let r = n.content.findIndex((i) => !i.hidden)
			for (let i = r - 1; i >= 0; i--) {
				let a = n.content[i]
				if (_a(a, e)) return a
			}
		}
	}
}
s(Xo, 'findCommentNode')
function _a(n, e) {
	return Xt(n) && e.includes(n.tokenType.name)
}
s(_a, 'isCommentNode')
function Rs(n, e) {
	if (Xt(n)) return n
	if (He(n)) {
		let t = Qo(n, e, !1)
		if (t) return Rs(t, e)
	}
}
s(Rs, 'findLeafNodeAtOffset')
function Jo(n, e) {
	if (Xt(n)) return n
	if (He(n)) {
		let t = Qo(n, e, !0)
		if (t) return Jo(t, e)
	}
}
s(Jo, 'findLeafNodeBeforeOffset')
function Qo(n, e, t) {
	let r = 0,
		i = n.content.length - 1,
		a
	for (; r <= i; ) {
		let o = Math.floor((r + i) / 2),
			l = n.content[o]
		if (l.offset <= e && l.end > e) return l
		l.end <= e ? ((a = t ? l : void 0), (r = o + 1)) : (i = o - 1)
	}
	return a
}
s(Qo, 'binarySearch')
function Zo(n, e = !0) {
	for (; n.container; ) {
		let t = n.container,
			r = t.content.indexOf(n)
		for (; r > 0; ) {
			r--
			let i = t.content[r]
			if (e || !i.hidden) return i
		}
		n = t
	}
}
s(Zo, 'getPreviousNode')
function Ih(n, e = !0) {
	for (; n.container; ) {
		let t = n.container,
			r = t.content.indexOf(n),
			i = t.content.length - 1
		for (; r < i; ) {
			r++
			let a = t.content[r]
			if (e || !a.hidden) return a
		}
		n = t
	}
}
s(Ih, 'getNextNode')
function xh(n) {
	if (n.range.start.character === 0) return n
	let e = n.range.start.line,
		t = n,
		r
	for (; n.container; ) {
		let i = n.container,
			a = r ?? i.content.indexOf(n)
		if (
			(a === 0 ? ((n = i), (r = void 0)) : ((r = a - 1), (n = i.content[r])),
			n.range.start.line !== e)
		)
			break
		t = n
	}
	return t
}
s(xh, 'getStartlineNode')
function Nh(n, e) {
	let t = $h(n, e)
	return t ? t.parent.content.slice(t.a + 1, t.b) : []
}
s(Nh, 'getInteriorNodes')
function $h(n, e) {
	let t = to(n),
		r = to(e),
		i
	for (let a = 0; a < t.length && a < r.length; a++) {
		let o = t[a],
			l = r[a]
		if (o.parent === l.parent) i = { parent: o.parent, a: o.index, b: l.index }
		else break
	}
	return i
}
s($h, 'getCommonParent')
function to(n) {
	let e = []
	for (; n.container; ) {
		let t = n.container,
			r = t.content.indexOf(n)
		e.push({ parent: t, index: r }), (n = t)
	}
	return e.reverse()
}
s(to, 'getParentChain')
var el = {}
qt(el, {
	findAssignment: () => vu,
	findNameAssignment: () => _s,
	findNodeForKeyword: () => Tu,
	findNodeForProperty: () => ws,
	findNodesForKeyword: () => tf,
	findNodesForKeywordInternal: () => Os,
	findNodesForProperty: () => yu,
	getActionAtElement: () => Au,
	getActionType: () => ku,
	getAllReachableRules: () => bs,
	getCrossReferenceTerminal: () => mu,
	getEntryRule: () => hu,
	getExplicitRuleType: () => Ds,
	getHiddenRules: () => fu,
	getRuleType: () => Su,
	getTypeName: () => Ni,
	isArrayCardinality: () => rf,
	isArrayOperator: () => af,
	isCommentTerminal: () => gu,
	isDataType: () => sf,
	isDataTypeRule: () => pa,
	isOptionalCardinality: () => nf,
	terminalRegex: () => ma,
})
var cn,
	As =
		((cn = class extends Error {
			constructor(e, t) {
				super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t)
			}
		}),
		s(cn, 'ErrorWithLocation'),
		cn)
function Jt(n) {
	throw new Error('Error! The input value was not handled.')
}
s(Jt, 'assertUnreachable')
var Lh = {}
qt(Lh, {
	AbstractElement: () => rl,
	AbstractRule: () => Ki,
	AbstractType: () => Wi,
	Action: () => bl,
	Alternatives: () => wl,
	ArrayLiteral: () => il,
	ArrayType: () => al,
	Assignment: () => Pl,
	BooleanLiteral: () => ol,
	CharacterRange: () => Ol,
	Condition: () => Da,
	Conjunction: () => ul,
	CrossReference: () => Dl,
	Disjunction: () => dl,
	EndOfFile: () => Ml,
	Grammar: () => fl,
	GrammarImport: () => Uh,
	Group: () => Ul,
	InferredType: () => pl,
	Interface: () => ml,
	Keyword: () => Gl,
	LangiumGrammarAstReflection: () => nu,
	LangiumGrammarTerminals: () => cy,
	NamedArgument: () => Bh,
	NegatedToken: () => Bl,
	Negation: () => gl,
	NumberLiteral: () => Tl,
	Parameter: () => vl,
	ParameterReference: () => Rl,
	ParserRule: () => El,
	ReferenceType: () => kl,
	RegexToken: () => jl,
	ReturnType: () => Wh,
	RuleCall: () => Wl,
	SimpleType: () => Il,
	StringLiteral: () => xl,
	TerminalAlternatives: () => Hl,
	TerminalGroup: () => ql,
	TerminalRule: () => Fa,
	TerminalRuleCall: () => Xl,
	Type: () => Nl,
	TypeAttribute: () => zh,
	TypeDefinition: () => nl,
	UnionType: () => $l,
	UnorderedGroup: () => Jl,
	UntilToken: () => Ql,
	ValueLiteral: () => Ma,
	Wildcard: () => eu,
	isAbstractElement: () => Es,
	isAbstractRule: () => bh,
	isAbstractType: () => wh,
	isAction: () => pt,
	isAlternatives: () => Is,
	isArrayLiteral: () => Mh,
	isArrayType: () => sl,
	isAssignment: () => nt,
	isBooleanLiteral: () => ll,
	isCharacterRange: () => _l,
	isCondition: () => Ph,
	isConjunction: () => cl,
	isCrossReference: () => da,
	isDisjunction: () => hl,
	isEndOfFile: () => Fl,
	isFeatureName: () => Oh,
	isGrammar: () => Fh,
	isGrammarImport: () => Gh,
	isGroup: () => Qt,
	isInferredType: () => ks,
	isInterface: () => Ss,
	isKeyword: () => rt,
	isNamedArgument: () => Vh,
	isNegatedToken: () => Vl,
	isNegation: () => yl,
	isNumberLiteral: () => jh,
	isParameter: () => Kh,
	isParameterReference: () => Al,
	isParserRule: () => pe,
	isPrimitiveType: () => tl,
	isReferenceType: () => Sl,
	isRegexToken: () => Kl,
	isReturnType: () => Cl,
	isRuleCall: () => it,
	isSimpleType: () => Cs,
	isStringLiteral: () => Hh,
	isTerminalAlternatives: () => zl,
	isTerminalGroup: () => Yl,
	isTerminalRule: () => lt,
	isTerminalRuleCall: () => xs,
	isType: () => ca,
	isTypeAttribute: () => qh,
	isTypeDefinition: () => _h,
	isUnionType: () => Ll,
	isUnorderedGroup: () => Ns,
	isUntilToken: () => Zl,
	isValueLiteral: () => Dh,
	isWildcard: () => tu,
	reflection: () => w,
})
var cy = {
		ID: /\^?[_a-zA-Z][\w_]*/,
		STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
		NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
		RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
		WS: /\s+/,
		ML_COMMENT: /\/\*[\s\S]*?\*\//,
		SL_COMMENT: /\/\/[^\n\r]*/,
	},
	Ki = 'AbstractRule'
function bh(n) {
	return w.isInstance(n, Ki)
}
s(bh, 'isAbstractRule')
var Wi = 'AbstractType'
function wh(n) {
	return w.isInstance(n, Wi)
}
s(wh, 'isAbstractType')
var Da = 'Condition'
function Ph(n) {
	return w.isInstance(n, Da)
}
s(Ph, 'isCondition')
function Oh(n) {
	return (
		tl(n) ||
		n === 'current' ||
		n === 'entry' ||
		n === 'extends' ||
		n === 'false' ||
		n === 'fragment' ||
		n === 'grammar' ||
		n === 'hidden' ||
		n === 'import' ||
		n === 'interface' ||
		n === 'returns' ||
		n === 'terminal' ||
		n === 'true' ||
		n === 'type' ||
		n === 'infer' ||
		n === 'infers' ||
		n === 'with' ||
		(typeof n == 'string' && /\^?[_a-zA-Z][\w_]*/.test(n))
	)
}
s(Oh, 'isFeatureName')
function tl(n) {
	return n === 'string' || n === 'number' || n === 'boolean' || n === 'Date' || n === 'bigint'
}
s(tl, 'isPrimitiveType')
var nl = 'TypeDefinition'
function _h(n) {
	return w.isInstance(n, nl)
}
s(_h, 'isTypeDefinition')
var Ma = 'ValueLiteral'
function Dh(n) {
	return w.isInstance(n, Ma)
}
s(Dh, 'isValueLiteral')
var rl = 'AbstractElement'
function Es(n) {
	return w.isInstance(n, rl)
}
s(Es, 'isAbstractElement')
var il = 'ArrayLiteral'
function Mh(n) {
	return w.isInstance(n, il)
}
s(Mh, 'isArrayLiteral')
var al = 'ArrayType'
function sl(n) {
	return w.isInstance(n, al)
}
s(sl, 'isArrayType')
var ol = 'BooleanLiteral'
function ll(n) {
	return w.isInstance(n, ol)
}
s(ll, 'isBooleanLiteral')
var ul = 'Conjunction'
function cl(n) {
	return w.isInstance(n, ul)
}
s(cl, 'isConjunction')
var dl = 'Disjunction'
function hl(n) {
	return w.isInstance(n, dl)
}
s(hl, 'isDisjunction')
var fl = 'Grammar'
function Fh(n) {
	return w.isInstance(n, fl)
}
s(Fh, 'isGrammar')
var Uh = 'GrammarImport'
function Gh(n) {
	return w.isInstance(n, Uh)
}
s(Gh, 'isGrammarImport')
var pl = 'InferredType'
function ks(n) {
	return w.isInstance(n, pl)
}
s(ks, 'isInferredType')
var ml = 'Interface'
function Ss(n) {
	return w.isInstance(n, ml)
}
s(Ss, 'isInterface')
var Bh = 'NamedArgument'
function Vh(n) {
	return w.isInstance(n, Bh)
}
s(Vh, 'isNamedArgument')
var gl = 'Negation'
function yl(n) {
	return w.isInstance(n, gl)
}
s(yl, 'isNegation')
var Tl = 'NumberLiteral'
function jh(n) {
	return w.isInstance(n, Tl)
}
s(jh, 'isNumberLiteral')
var vl = 'Parameter'
function Kh(n) {
	return w.isInstance(n, vl)
}
s(Kh, 'isParameter')
var Rl = 'ParameterReference'
function Al(n) {
	return w.isInstance(n, Rl)
}
s(Al, 'isParameterReference')
var El = 'ParserRule'
function pe(n) {
	return w.isInstance(n, El)
}
s(pe, 'isParserRule')
var kl = 'ReferenceType'
function Sl(n) {
	return w.isInstance(n, kl)
}
s(Sl, 'isReferenceType')
var Wh = 'ReturnType'
function Cl(n) {
	return w.isInstance(n, Wh)
}
s(Cl, 'isReturnType')
var Il = 'SimpleType'
function Cs(n) {
	return w.isInstance(n, Il)
}
s(Cs, 'isSimpleType')
var xl = 'StringLiteral'
function Hh(n) {
	return w.isInstance(n, xl)
}
s(Hh, 'isStringLiteral')
var Fa = 'TerminalRule'
function lt(n) {
	return w.isInstance(n, Fa)
}
s(lt, 'isTerminalRule')
var Nl = 'Type'
function ca(n) {
	return w.isInstance(n, Nl)
}
s(ca, 'isType')
var zh = 'TypeAttribute'
function qh(n) {
	return w.isInstance(n, zh)
}
s(qh, 'isTypeAttribute')
var $l = 'UnionType'
function Ll(n) {
	return w.isInstance(n, $l)
}
s(Ll, 'isUnionType')
var bl = 'Action'
function pt(n) {
	return w.isInstance(n, bl)
}
s(pt, 'isAction')
var wl = 'Alternatives'
function Is(n) {
	return w.isInstance(n, wl)
}
s(Is, 'isAlternatives')
var Pl = 'Assignment'
function nt(n) {
	return w.isInstance(n, Pl)
}
s(nt, 'isAssignment')
var Ol = 'CharacterRange'
function _l(n) {
	return w.isInstance(n, Ol)
}
s(_l, 'isCharacterRange')
var Dl = 'CrossReference'
function da(n) {
	return w.isInstance(n, Dl)
}
s(da, 'isCrossReference')
var Ml = 'EndOfFile'
function Fl(n) {
	return w.isInstance(n, Ml)
}
s(Fl, 'isEndOfFile')
var Ul = 'Group'
function Qt(n) {
	return w.isInstance(n, Ul)
}
s(Qt, 'isGroup')
var Gl = 'Keyword'
function rt(n) {
	return w.isInstance(n, Gl)
}
s(rt, 'isKeyword')
var Bl = 'NegatedToken'
function Vl(n) {
	return w.isInstance(n, Bl)
}
s(Vl, 'isNegatedToken')
var jl = 'RegexToken'
function Kl(n) {
	return w.isInstance(n, jl)
}
s(Kl, 'isRegexToken')
var Wl = 'RuleCall'
function it(n) {
	return w.isInstance(n, Wl)
}
s(it, 'isRuleCall')
var Hl = 'TerminalAlternatives'
function zl(n) {
	return w.isInstance(n, Hl)
}
s(zl, 'isTerminalAlternatives')
var ql = 'TerminalGroup'
function Yl(n) {
	return w.isInstance(n, ql)
}
s(Yl, 'isTerminalGroup')
var Xl = 'TerminalRuleCall'
function xs(n) {
	return w.isInstance(n, Xl)
}
s(xs, 'isTerminalRuleCall')
var Jl = 'UnorderedGroup'
function Ns(n) {
	return w.isInstance(n, Jl)
}
s(Ns, 'isUnorderedGroup')
var Ql = 'UntilToken'
function Zl(n) {
	return w.isInstance(n, Ql)
}
s(Zl, 'isUntilToken')
var eu = 'Wildcard'
function tu(n) {
	return w.isInstance(n, eu)
}
s(tu, 'isWildcard')
var dn,
	nu =
		((dn = class extends Wo {
			getAllTypes() {
				return [
					'AbstractElement',
					'AbstractRule',
					'AbstractType',
					'Action',
					'Alternatives',
					'ArrayLiteral',
					'ArrayType',
					'Assignment',
					'BooleanLiteral',
					'CharacterRange',
					'Condition',
					'Conjunction',
					'CrossReference',
					'Disjunction',
					'EndOfFile',
					'Grammar',
					'GrammarImport',
					'Group',
					'InferredType',
					'Interface',
					'Keyword',
					'NamedArgument',
					'NegatedToken',
					'Negation',
					'NumberLiteral',
					'Parameter',
					'ParameterReference',
					'ParserRule',
					'ReferenceType',
					'RegexToken',
					'ReturnType',
					'RuleCall',
					'SimpleType',
					'StringLiteral',
					'TerminalAlternatives',
					'TerminalGroup',
					'TerminalRule',
					'TerminalRuleCall',
					'Type',
					'TypeAttribute',
					'TypeDefinition',
					'UnionType',
					'UnorderedGroup',
					'UntilToken',
					'ValueLiteral',
					'Wildcard',
				]
			}
			computeIsSubtype(e, t) {
				switch (e) {
					case bl:
					case wl:
					case Pl:
					case Ol:
					case Dl:
					case Ml:
					case Ul:
					case Gl:
					case Bl:
					case jl:
					case Wl:
					case Hl:
					case ql:
					case Xl:
					case Jl:
					case Ql:
					case eu:
						return this.isSubtype(rl, t)
					case il:
					case Tl:
					case xl:
						return this.isSubtype(Ma, t)
					case al:
					case kl:
					case Il:
					case $l:
						return this.isSubtype(nl, t)
					case ol:
						return this.isSubtype(Da, t) || this.isSubtype(Ma, t)
					case ul:
					case dl:
					case gl:
					case Rl:
						return this.isSubtype(Da, t)
					case pl:
					case ml:
					case Nl:
						return this.isSubtype(Wi, t)
					case El:
						return this.isSubtype(Ki, t) || this.isSubtype(Wi, t)
					case Fa:
						return this.isSubtype(Ki, t)
					default:
						return !1
				}
			}
			getReferenceType(e) {
				let t = `${e.container.$type}:${e.property}`
				switch (t) {
					case 'Action:type':
					case 'CrossReference:type':
					case 'Interface:superTypes':
					case 'ParserRule:returnType':
					case 'SimpleType:typeRef':
						return Wi
					case 'Grammar:hiddenTokens':
					case 'ParserRule:hiddenTokens':
					case 'RuleCall:rule':
						return Ki
					case 'Grammar:usedGrammars':
						return fl
					case 'NamedArgument:parameter':
					case 'ParameterReference:parameter':
						return vl
					case 'TerminalRuleCall:rule':
						return Fa
					default:
						throw new Error(`${t} is not a valid reference id.`)
				}
			}
			getTypeMetaData(e) {
				switch (e) {
					case 'AbstractElement':
						return {
							name: 'AbstractElement',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }],
						}
					case 'ArrayLiteral':
						return { name: 'ArrayLiteral', properties: [{ name: 'elements', defaultValue: [] }] }
					case 'ArrayType':
						return { name: 'ArrayType', properties: [{ name: 'elementType' }] }
					case 'BooleanLiteral':
						return { name: 'BooleanLiteral', properties: [{ name: 'true', defaultValue: !1 }] }
					case 'Conjunction':
						return { name: 'Conjunction', properties: [{ name: 'left' }, { name: 'right' }] }
					case 'Disjunction':
						return { name: 'Disjunction', properties: [{ name: 'left' }, { name: 'right' }] }
					case 'Grammar':
						return {
							name: 'Grammar',
							properties: [
								{ name: 'definesHiddenTokens', defaultValue: !1 },
								{ name: 'hiddenTokens', defaultValue: [] },
								{ name: 'imports', defaultValue: [] },
								{ name: 'interfaces', defaultValue: [] },
								{ name: 'isDeclared', defaultValue: !1 },
								{ name: 'name' },
								{ name: 'rules', defaultValue: [] },
								{ name: 'types', defaultValue: [] },
								{ name: 'usedGrammars', defaultValue: [] },
							],
						}
					case 'GrammarImport':
						return { name: 'GrammarImport', properties: [{ name: 'path' }] }
					case 'InferredType':
						return { name: 'InferredType', properties: [{ name: 'name' }] }
					case 'Interface':
						return {
							name: 'Interface',
							properties: [
								{ name: 'attributes', defaultValue: [] },
								{ name: 'name' },
								{ name: 'superTypes', defaultValue: [] },
							],
						}
					case 'NamedArgument':
						return {
							name: 'NamedArgument',
							properties: [
								{ name: 'calledByName', defaultValue: !1 },
								{ name: 'parameter' },
								{ name: 'value' },
							],
						}
					case 'Negation':
						return { name: 'Negation', properties: [{ name: 'value' }] }
					case 'NumberLiteral':
						return { name: 'NumberLiteral', properties: [{ name: 'value' }] }
					case 'Parameter':
						return { name: 'Parameter', properties: [{ name: 'name' }] }
					case 'ParameterReference':
						return { name: 'ParameterReference', properties: [{ name: 'parameter' }] }
					case 'ParserRule':
						return {
							name: 'ParserRule',
							properties: [
								{ name: 'dataType' },
								{ name: 'definesHiddenTokens', defaultValue: !1 },
								{ name: 'definition' },
								{ name: 'entry', defaultValue: !1 },
								{ name: 'fragment', defaultValue: !1 },
								{ name: 'hiddenTokens', defaultValue: [] },
								{ name: 'inferredType' },
								{ name: 'name' },
								{ name: 'parameters', defaultValue: [] },
								{ name: 'returnType' },
								{ name: 'wildcard', defaultValue: !1 },
							],
						}
					case 'ReferenceType':
						return { name: 'ReferenceType', properties: [{ name: 'referenceType' }] }
					case 'ReturnType':
						return { name: 'ReturnType', properties: [{ name: 'name' }] }
					case 'SimpleType':
						return {
							name: 'SimpleType',
							properties: [{ name: 'primitiveType' }, { name: 'stringType' }, { name: 'typeRef' }],
						}
					case 'StringLiteral':
						return { name: 'StringLiteral', properties: [{ name: 'value' }] }
					case 'TerminalRule':
						return {
							name: 'TerminalRule',
							properties: [
								{ name: 'definition' },
								{ name: 'fragment', defaultValue: !1 },
								{ name: 'hidden', defaultValue: !1 },
								{ name: 'name' },
								{ name: 'type' },
							],
						}
					case 'Type':
						return { name: 'Type', properties: [{ name: 'name' }, { name: 'type' }] }
					case 'TypeAttribute':
						return {
							name: 'TypeAttribute',
							properties: [
								{ name: 'defaultValue' },
								{ name: 'isOptional', defaultValue: !1 },
								{ name: 'name' },
								{ name: 'type' },
							],
						}
					case 'UnionType':
						return { name: 'UnionType', properties: [{ name: 'types', defaultValue: [] }] }
					case 'Action':
						return {
							name: 'Action',
							properties: [
								{ name: 'cardinality' },
								{ name: 'feature' },
								{ name: 'inferredType' },
								{ name: 'lookahead' },
								{ name: 'operator' },
								{ name: 'type' },
							],
						}
					case 'Alternatives':
						return {
							name: 'Alternatives',
							properties: [
								{ name: 'cardinality' },
								{ name: 'elements', defaultValue: [] },
								{ name: 'lookahead' },
							],
						}
					case 'Assignment':
						return {
							name: 'Assignment',
							properties: [
								{ name: 'cardinality' },
								{ name: 'feature' },
								{ name: 'lookahead' },
								{ name: 'operator' },
								{ name: 'terminal' },
							],
						}
					case 'CharacterRange':
						return {
							name: 'CharacterRange',
							properties: [
								{ name: 'cardinality' },
								{ name: 'left' },
								{ name: 'lookahead' },
								{ name: 'right' },
							],
						}
					case 'CrossReference':
						return {
							name: 'CrossReference',
							properties: [
								{ name: 'cardinality' },
								{ name: 'deprecatedSyntax', defaultValue: !1 },
								{ name: 'lookahead' },
								{ name: 'terminal' },
								{ name: 'type' },
							],
						}
					case 'EndOfFile':
						return {
							name: 'EndOfFile',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }],
						}
					case 'Group':
						return {
							name: 'Group',
							properties: [
								{ name: 'cardinality' },
								{ name: 'elements', defaultValue: [] },
								{ name: 'guardCondition' },
								{ name: 'lookahead' },
							],
						}
					case 'Keyword':
						return {
							name: 'Keyword',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }, { name: 'value' }],
						}
					case 'NegatedToken':
						return {
							name: 'NegatedToken',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }, { name: 'terminal' }],
						}
					case 'RegexToken':
						return {
							name: 'RegexToken',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }, { name: 'regex' }],
						}
					case 'RuleCall':
						return {
							name: 'RuleCall',
							properties: [
								{ name: 'arguments', defaultValue: [] },
								{ name: 'cardinality' },
								{ name: 'lookahead' },
								{ name: 'rule' },
							],
						}
					case 'TerminalAlternatives':
						return {
							name: 'TerminalAlternatives',
							properties: [
								{ name: 'cardinality' },
								{ name: 'elements', defaultValue: [] },
								{ name: 'lookahead' },
							],
						}
					case 'TerminalGroup':
						return {
							name: 'TerminalGroup',
							properties: [
								{ name: 'cardinality' },
								{ name: 'elements', defaultValue: [] },
								{ name: 'lookahead' },
							],
						}
					case 'TerminalRuleCall':
						return {
							name: 'TerminalRuleCall',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }, { name: 'rule' }],
						}
					case 'UnorderedGroup':
						return {
							name: 'UnorderedGroup',
							properties: [
								{ name: 'cardinality' },
								{ name: 'elements', defaultValue: [] },
								{ name: 'lookahead' },
							],
						}
					case 'UntilToken':
						return {
							name: 'UntilToken',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }, { name: 'terminal' }],
						}
					case 'Wildcard':
						return {
							name: 'Wildcard',
							properties: [{ name: 'cardinality' }, { name: 'lookahead' }],
						}
					default:
						return { name: e, properties: [] }
				}
			}
		}),
		s(dn, 'LangiumGrammarAstReflection'),
		dn),
	w = new nu(),
	ru = {}
qt(ru, {
	assignMandatoryProperties: () => au,
	copyAstNode: () => Ga,
	findLocalReferences: () => Xh,
	findRootNode: () => iu,
	getContainerOfType: () => Ii,
	getDocument: () => Ce,
	hasContainerOfType: () => Yh,
	linkContentToContainer: () => $s,
	streamAllContents: () => Rt,
	streamAst: () => Ze,
	streamContents: () => ha,
	streamReferences: () => fa,
})
function $s(n) {
	for (let [e, t] of Object.entries(n))
		e.startsWith('$') ||
			(Array.isArray(t)
				? t.forEach((r, i) => {
						Y(r) && ((r.$container = n), (r.$containerProperty = e), (r.$containerIndex = i))
				  })
				: Y(t) && ((t.$container = n), (t.$containerProperty = e)))
}
s($s, 'linkContentToContainer')
function Ii(n, e) {
	let t = n
	for (; t; ) {
		if (e(t)) return t
		t = t.$container
	}
}
s(Ii, 'getContainerOfType')
function Yh(n, e) {
	let t = n
	for (; t; ) {
		if (e(t)) return !0
		t = t.$container
	}
	return !1
}
s(Yh, 'hasContainerOfType')
function Ce(n) {
	let e = iu(n).$document
	if (!e) throw new Error('AST node has no document.')
	return e
}
s(Ce, 'getDocument')
function iu(n) {
	for (; n.$container; ) n = n.$container
	return n
}
s(iu, 'findRootNode')
function ha(n, e) {
	if (!n) throw new Error('Node must be an AstNode.')
	let t = e == null ? void 0 : e.range
	return new Ke(
		() => ({ keys: Object.keys(n), keyIndex: 0, arrayIndex: 0 }),
		(r) => {
			for (; r.keyIndex < r.keys.length; ) {
				let i = r.keys[r.keyIndex]
				if (!i.startsWith('$')) {
					let a = n[i]
					if (Y(a)) {
						if ((r.keyIndex++, Ua(a, t))) return { done: !1, value: a }
					} else if (Array.isArray(a)) {
						for (; r.arrayIndex < a.length; ) {
							let o = r.arrayIndex++,
								l = a[o]
							if (Y(l) && Ua(l, t)) return { done: !1, value: l }
						}
						r.arrayIndex = 0
					}
				}
				r.keyIndex++
			}
			return ce
		}
	)
}
s(ha, 'streamContents')
function Rt(n, e) {
	if (!n) throw new Error('Root node must be an AstNode.')
	return new vi(n, (t) => ha(t, e))
}
s(Rt, 'streamAllContents')
function Ze(n, e) {
	if (n) {
		if (e != null && e.range && !Ua(n, e.range)) return new vi(n, () => [])
	} else throw new Error('Root node must be an AstNode.')
	return new vi(n, (t) => ha(t, e), { includeRoot: !0 })
}
s(Ze, 'streamAst')
function Ua(n, e) {
	var t
	if (!e) return !0
	let r = (t = n.$cstNode) === null || t === void 0 ? void 0 : t.range
	return r ? qo(r, e) : !1
}
s(Ua, 'isAstNodeInRange')
function fa(n) {
	return new Ke(
		() => ({ keys: Object.keys(n), keyIndex: 0, arrayIndex: 0 }),
		(e) => {
			for (; e.keyIndex < e.keys.length; ) {
				let t = e.keys[e.keyIndex]
				if (!t.startsWith('$')) {
					let r = n[t]
					if (de(r))
						return e.keyIndex++, { done: !1, value: { reference: r, container: n, property: t } }
					if (Array.isArray(r)) {
						for (; e.arrayIndex < r.length; ) {
							let i = e.arrayIndex++,
								a = r[i]
							if (de(a))
								return { done: !1, value: { reference: a, container: n, property: t, index: i } }
						}
						e.arrayIndex = 0
					}
				}
				e.keyIndex++
			}
			return ce
		}
	)
}
s(fa, 'streamReferences')
function Xh(n, e = Ce(n).parseResult.value) {
	let t = []
	return (
		Ze(e).forEach((r) => {
			fa(r).forEach((i) => {
				i.reference.ref === n && t.push(i.reference)
			})
		}),
		q(t)
	)
}
s(Xh, 'findLocalReferences')
function au(n, e) {
	let t = n.getTypeMetaData(e.$type),
		r = e
	for (let i of t.properties)
		i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = su(i.defaultValue))
}
s(au, 'assignMandatoryProperties')
function su(n) {
	return Array.isArray(n) ? [...n.map(su)] : n
}
s(su, 'copyDefaultValue')
function Ga(n, e) {
	let t = { $type: n.$type }
	for (let [r, i] of Object.entries(n))
		if (!r.startsWith('$'))
			if (Y(i)) t[r] = Ga(i, e)
			else if (de(i)) t[r] = e(t, r, i.$refNode, i.$refText)
			else if (Array.isArray(i)) {
				let a = []
				for (let o of i)
					Y(o) ? a.push(Ga(o, e)) : de(o) ? a.push(e(t, r, o.$refNode, o.$refText)) : a.push(o)
				t[r] = a
			} else t[r] = i
	return $s(t), t
}
s(Ga, 'copyAstNode')
var ou = {}
qt(ou, {
	NEWLINE_REGEXP: () => Qh,
	escapeRegExp: () => xi,
	getCaseInsensitivePattern: () => uu,
	getTerminalParts: () => ef,
	isMultilineComment: () => lu,
	isWhitespace: () => ja,
	partialMatches: () => cu,
	partialRegExp: () => du,
})
function b(n) {
	return n.charCodeAt(0)
}
s(b, 'cc')
function Ca(n, e) {
	Array.isArray(n)
		? n.forEach(function (t) {
				e.push(t)
		  })
		: e.push(n)
}
s(Ca, 'insertToSet')
function rn(n, e) {
	if (n[e] === !0) throw 'duplicate flag ' + e
	n[e], (n[e] = !0)
}
s(rn, 'addFlag')
function It(n) {
	if (n === void 0) throw Error('Internal Error - Should never get here!')
	return !0
}
s(It, 'ASSERT_EXISTS')
function Ui() {
	throw Error('Internal Error - Should never get here!')
}
s(Ui, 'ASSERT_NEVER_REACH_HERE')
function no(n) {
	return n.type === 'Character'
}
s(no, 'isCharacter')
var Ba = []
for (let n = b('0'); n <= b('9'); n++) Ba.push(n)
var Va = [b('_')].concat(Ba)
for (let n = b('a'); n <= b('z'); n++) Va.push(n)
for (let n = b('A'); n <= b('Z'); n++) Va.push(n)
var Hc = [
		b(' '),
		b('\f'),
		b(`
`),
		b('\r'),
		b('	'),
		b('\v'),
		b('	'),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b(' '),
		b('\u2028'),
		b('\u2029'),
		b(' '),
		b(' '),
		b('　'),
		b('\uFEFF'),
	],
	dy = /[0-9a-fA-F]/,
	Ea = /[0-9]/,
	hy = /[1-9]/,
	hn,
	Jh =
		((hn = class {
			constructor() {
				;(this.idx = 0), (this.input = ''), (this.groupIdx = 0)
			}
			saveState() {
				return { idx: this.idx, input: this.input, groupIdx: this.groupIdx }
			}
			restoreState(e) {
				;(this.idx = e.idx), (this.input = e.input), (this.groupIdx = e.groupIdx)
			}
			pattern(e) {
				;(this.idx = 0), (this.input = e), (this.groupIdx = 0), this.consumeChar('/')
				let t = this.disjunction()
				this.consumeChar('/')
				let r = {
					type: 'Flags',
					loc: { begin: this.idx, end: e.length },
					global: !1,
					ignoreCase: !1,
					multiLine: !1,
					unicode: !1,
					sticky: !1,
				}
				for (; this.isRegExpFlag(); )
					switch (this.popChar()) {
						case 'g':
							rn(r, 'global')
							break
						case 'i':
							rn(r, 'ignoreCase')
							break
						case 'm':
							rn(r, 'multiLine')
							break
						case 'u':
							rn(r, 'unicode')
							break
						case 'y':
							rn(r, 'sticky')
							break
					}
				if (this.idx !== this.input.length)
					throw Error('Redundant input: ' + this.input.substring(this.idx))
				return { type: 'Pattern', flags: r, value: t, loc: this.loc(0) }
			}
			disjunction() {
				let e = [],
					t = this.idx
				for (e.push(this.alternative()); this.peekChar() === '|'; )
					this.consumeChar('|'), e.push(this.alternative())
				return { type: 'Disjunction', value: e, loc: this.loc(t) }
			}
			alternative() {
				let e = [],
					t = this.idx
				for (; this.isTerm(); ) e.push(this.term())
				return { type: 'Alternative', value: e, loc: this.loc(t) }
			}
			term() {
				return this.isAssertion() ? this.assertion() : this.atom()
			}
			assertion() {
				let e = this.idx
				switch (this.popChar()) {
					case '^':
						return { type: 'StartAnchor', loc: this.loc(e) }
					case '$':
						return { type: 'EndAnchor', loc: this.loc(e) }
					case '\\':
						switch (this.popChar()) {
							case 'b':
								return { type: 'WordBoundary', loc: this.loc(e) }
							case 'B':
								return { type: 'NonWordBoundary', loc: this.loc(e) }
						}
						throw Error('Invalid Assertion Escape')
					case '(':
						this.consumeChar('?')
						let t
						switch (this.popChar()) {
							case '=':
								t = 'Lookahead'
								break
							case '!':
								t = 'NegativeLookahead'
								break
						}
						It(t)
						let r = this.disjunction()
						return this.consumeChar(')'), { type: t, value: r, loc: this.loc(e) }
				}
				return Ui()
			}
			quantifier(e = !1) {
				let t,
					r = this.idx
				switch (this.popChar()) {
					case '*':
						t = { atLeast: 0, atMost: 1 / 0 }
						break
					case '+':
						t = { atLeast: 1, atMost: 1 / 0 }
						break
					case '?':
						t = { atLeast: 0, atMost: 1 }
						break
					case '{':
						let i = this.integerIncludingZero()
						switch (this.popChar()) {
							case '}':
								t = { atLeast: i, atMost: i }
								break
							case ',':
								let a
								this.isDigit()
									? ((a = this.integerIncludingZero()), (t = { atLeast: i, atMost: a }))
									: (t = { atLeast: i, atMost: 1 / 0 }),
									this.consumeChar('}')
								break
						}
						if (e === !0 && t === void 0) return
						It(t)
						break
				}
				if (!(e === !0 && t === void 0) && It(t))
					return (
						this.peekChar(0) === '?' ? (this.consumeChar('?'), (t.greedy = !1)) : (t.greedy = !0),
						(t.type = 'Quantifier'),
						(t.loc = this.loc(r)),
						t
					)
			}
			atom() {
				let e,
					t = this.idx
				switch (this.peekChar()) {
					case '.':
						e = this.dotAll()
						break
					case '\\':
						e = this.atomEscape()
						break
					case '[':
						e = this.characterClass()
						break
					case '(':
						e = this.group()
						break
				}
				return (
					e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()),
					It(e)
						? ((e.loc = this.loc(t)), this.isQuantifier() && (e.quantifier = this.quantifier()), e)
						: Ui()
				)
			}
			dotAll() {
				return (
					this.consumeChar('.'),
					{
						type: 'Set',
						complement: !0,
						value: [
							b(`
`),
							b('\r'),
							b('\u2028'),
							b('\u2029'),
						],
					}
				)
			}
			atomEscape() {
				switch ((this.consumeChar('\\'), this.peekChar())) {
					case '1':
					case '2':
					case '3':
					case '4':
					case '5':
					case '6':
					case '7':
					case '8':
					case '9':
						return this.decimalEscapeAtom()
					case 'd':
					case 'D':
					case 's':
					case 'S':
					case 'w':
					case 'W':
						return this.characterClassEscape()
					case 'f':
					case 'n':
					case 'r':
					case 't':
					case 'v':
						return this.controlEscapeAtom()
					case 'c':
						return this.controlLetterEscapeAtom()
					case '0':
						return this.nulCharacterAtom()
					case 'x':
						return this.hexEscapeSequenceAtom()
					case 'u':
						return this.regExpUnicodeEscapeSequenceAtom()
					default:
						return this.identityEscapeAtom()
				}
			}
			decimalEscapeAtom() {
				return { type: 'GroupBackReference', value: this.positiveInteger() }
			}
			characterClassEscape() {
				let e,
					t = !1
				switch (this.popChar()) {
					case 'd':
						e = Ba
						break
					case 'D':
						;(e = Ba), (t = !0)
						break
					case 's':
						e = Hc
						break
					case 'S':
						;(e = Hc), (t = !0)
						break
					case 'w':
						e = Va
						break
					case 'W':
						;(e = Va), (t = !0)
						break
				}
				return It(e) ? { type: 'Set', value: e, complement: t } : Ui()
			}
			controlEscapeAtom() {
				let e
				switch (this.popChar()) {
					case 'f':
						e = b('\f')
						break
					case 'n':
						e = b(`
`)
						break
					case 'r':
						e = b('\r')
						break
					case 't':
						e = b('	')
						break
					case 'v':
						e = b('\v')
						break
				}
				return It(e) ? { type: 'Character', value: e } : Ui()
			}
			controlLetterEscapeAtom() {
				this.consumeChar('c')
				let e = this.popChar()
				if (/[a-zA-Z]/.test(e) === !1) throw Error('Invalid ')
				return { type: 'Character', value: e.toUpperCase().charCodeAt(0) - 64 }
			}
			nulCharacterAtom() {
				return this.consumeChar('0'), { type: 'Character', value: b('\0') }
			}
			hexEscapeSequenceAtom() {
				return this.consumeChar('x'), this.parseHexDigits(2)
			}
			regExpUnicodeEscapeSequenceAtom() {
				return this.consumeChar('u'), this.parseHexDigits(4)
			}
			identityEscapeAtom() {
				let e = this.popChar()
				return { type: 'Character', value: b(e) }
			}
			classPatternCharacterAtom() {
				switch (this.peekChar()) {
					case `
`:
					case '\r':
					case '\u2028':
					case '\u2029':
					case '\\':
					case ']':
						throw Error('TBD')
					default:
						let e = this.popChar()
						return { type: 'Character', value: b(e) }
				}
			}
			characterClass() {
				let e = [],
					t = !1
				for (
					this.consumeChar('['), this.peekChar(0) === '^' && (this.consumeChar('^'), (t = !0));
					this.isClassAtom();

				) {
					let r = this.classAtom()
					if ((r.type, no(r) && this.isRangeDash())) {
						this.consumeChar('-')
						let i = this.classAtom()
						if ((i.type, no(i))) {
							if (i.value < r.value) throw Error('Range out of order in character class')
							e.push({ from: r.value, to: i.value })
						} else Ca(r.value, e), e.push(b('-')), Ca(i.value, e)
					} else Ca(r.value, e)
				}
				return this.consumeChar(']'), { type: 'Set', complement: t, value: e }
			}
			classAtom() {
				switch (this.peekChar()) {
					case ']':
					case `
`:
					case '\r':
					case '\u2028':
					case '\u2029':
						throw Error('TBD')
					case '\\':
						return this.classEscape()
					default:
						return this.classPatternCharacterAtom()
				}
			}
			classEscape() {
				switch ((this.consumeChar('\\'), this.peekChar())) {
					case 'b':
						return this.consumeChar('b'), { type: 'Character', value: b('\b') }
					case 'd':
					case 'D':
					case 's':
					case 'S':
					case 'w':
					case 'W':
						return this.characterClassEscape()
					case 'f':
					case 'n':
					case 'r':
					case 't':
					case 'v':
						return this.controlEscapeAtom()
					case 'c':
						return this.controlLetterEscapeAtom()
					case '0':
						return this.nulCharacterAtom()
					case 'x':
						return this.hexEscapeSequenceAtom()
					case 'u':
						return this.regExpUnicodeEscapeSequenceAtom()
					default:
						return this.identityEscapeAtom()
				}
			}
			group() {
				let e = !0
				switch ((this.consumeChar('('), this.peekChar(0))) {
					case '?':
						this.consumeChar('?'), this.consumeChar(':'), (e = !1)
						break
					default:
						this.groupIdx++
						break
				}
				let t = this.disjunction()
				this.consumeChar(')')
				let r = { type: 'Group', capturing: e, value: t }
				return e && (r.idx = this.groupIdx), r
			}
			positiveInteger() {
				let e = this.popChar()
				if (hy.test(e) === !1) throw Error('Expecting a positive integer')
				for (; Ea.test(this.peekChar(0)); ) e += this.popChar()
				return parseInt(e, 10)
			}
			integerIncludingZero() {
				let e = this.popChar()
				if (Ea.test(e) === !1) throw Error('Expecting an integer')
				for (; Ea.test(this.peekChar(0)); ) e += this.popChar()
				return parseInt(e, 10)
			}
			patternCharacter() {
				let e = this.popChar()
				switch (e) {
					case `
`:
					case '\r':
					case '\u2028':
					case '\u2029':
					case '^':
					case '$':
					case '\\':
					case '.':
					case '*':
					case '+':
					case '?':
					case '(':
					case ')':
					case '[':
					case '|':
						throw Error('TBD')
					default:
						return { type: 'Character', value: b(e) }
				}
			}
			isRegExpFlag() {
				switch (this.peekChar(0)) {
					case 'g':
					case 'i':
					case 'm':
					case 'u':
					case 'y':
						return !0
					default:
						return !1
				}
			}
			isRangeDash() {
				return this.peekChar() === '-' && this.isClassAtom(1)
			}
			isDigit() {
				return Ea.test(this.peekChar(0))
			}
			isClassAtom(e = 0) {
				switch (this.peekChar(e)) {
					case ']':
					case `
`:
					case '\r':
					case '\u2028':
					case '\u2029':
						return !1
					default:
						return !0
				}
			}
			isTerm() {
				return this.isAtom() || this.isAssertion()
			}
			isAtom() {
				if (this.isPatternCharacter()) return !0
				switch (this.peekChar(0)) {
					case '.':
					case '\\':
					case '[':
					case '(':
						return !0
					default:
						return !1
				}
			}
			isAssertion() {
				switch (this.peekChar(0)) {
					case '^':
					case '$':
						return !0
					case '\\':
						switch (this.peekChar(1)) {
							case 'b':
							case 'B':
								return !0
							default:
								return !1
						}
					case '(':
						return (
							this.peekChar(1) === '?' && (this.peekChar(2) === '=' || this.peekChar(2) === '!')
						)
					default:
						return !1
				}
			}
			isQuantifier() {
				let e = this.saveState()
				try {
					return this.quantifier(!0) !== void 0
				} catch {
					return !1
				} finally {
					this.restoreState(e)
				}
			}
			isPatternCharacter() {
				switch (this.peekChar()) {
					case '^':
					case '$':
					case '\\':
					case '.':
					case '*':
					case '+':
					case '?':
					case '(':
					case ')':
					case '[':
					case '|':
					case '/':
					case `
`:
					case '\r':
					case '\u2028':
					case '\u2029':
						return !1
					default:
						return !0
				}
			}
			parseHexDigits(e) {
				let t = ''
				for (let r = 0; r < e; r++) {
					let i = this.popChar()
					if (dy.test(i) === !1) throw Error('Expecting a HexDecimal digits')
					t += i
				}
				return { type: 'Character', value: parseInt(t, 16) }
			}
			peekChar(e = 0) {
				return this.input[this.idx + e]
			}
			popChar() {
				let e = this.peekChar(0)
				return this.consumeChar(void 0), e
			}
			consumeChar(e) {
				if (e !== void 0 && this.input[this.idx] !== e)
					throw Error(
						"Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx
					)
				if (this.idx >= this.input.length) throw Error('Unexpected end of input')
				this.idx++
			}
			loc(e) {
				return { begin: e, end: this.idx }
			}
		}),
		s(hn, 'RegExpParser'),
		hn),
	fn,
	Ls =
		((fn = class {
			visitChildren(e) {
				for (let t in e) {
					let r = e[t]
					e.hasOwnProperty(t) &&
						(r.type !== void 0
							? this.visit(r)
							: Array.isArray(r) &&
							  r.forEach((i) => {
									this.visit(i)
							  }, this))
				}
			}
			visit(e) {
				switch (e.type) {
					case 'Pattern':
						this.visitPattern(e)
						break
					case 'Flags':
						this.visitFlags(e)
						break
					case 'Disjunction':
						this.visitDisjunction(e)
						break
					case 'Alternative':
						this.visitAlternative(e)
						break
					case 'StartAnchor':
						this.visitStartAnchor(e)
						break
					case 'EndAnchor':
						this.visitEndAnchor(e)
						break
					case 'WordBoundary':
						this.visitWordBoundary(e)
						break
					case 'NonWordBoundary':
						this.visitNonWordBoundary(e)
						break
					case 'Lookahead':
						this.visitLookahead(e)
						break
					case 'NegativeLookahead':
						this.visitNegativeLookahead(e)
						break
					case 'Character':
						this.visitCharacter(e)
						break
					case 'Set':
						this.visitSet(e)
						break
					case 'Group':
						this.visitGroup(e)
						break
					case 'GroupBackReference':
						this.visitGroupBackReference(e)
						break
					case 'Quantifier':
						this.visitQuantifier(e)
						break
				}
				this.visitChildren(e)
			}
			visitPattern(e) {}
			visitFlags(e) {}
			visitDisjunction(e) {}
			visitAlternative(e) {}
			visitStartAnchor(e) {}
			visitEndAnchor(e) {}
			visitWordBoundary(e) {}
			visitNonWordBoundary(e) {}
			visitLookahead(e) {}
			visitNegativeLookahead(e) {}
			visitCharacter(e) {}
			visitSet(e) {}
			visitGroup(e) {}
			visitGroupBackReference(e) {}
			visitQuantifier(e) {}
		}),
		s(fn, 'BaseRegExpVisitor'),
		fn),
	Qh = /\r?\n/gm,
	Zh = new Jh(),
	pn,
	fy =
		((pn = class extends Ls {
			constructor() {
				super(...arguments),
					(this.isStarting = !0),
					(this.endRegexpStack = []),
					(this.multiline = !1)
			}
			get endRegex() {
				return this.endRegexpStack.join('')
			}
			reset(e) {
				;(this.multiline = !1),
					(this.regex = e),
					(this.startRegexp = ''),
					(this.isStarting = !0),
					(this.endRegexpStack = [])
			}
			visitGroup(e) {
				e.quantifier && ((this.isStarting = !1), (this.endRegexpStack = []))
			}
			visitCharacter(e) {
				let t = String.fromCharCode(e.value)
				if (
					(!this.multiline &&
						t ===
							`
` &&
						(this.multiline = !0),
					e.quantifier)
				)
					(this.isStarting = !1), (this.endRegexpStack = [])
				else {
					let r = xi(t)
					this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r)
				}
			}
			visitSet(e) {
				if (!this.multiline) {
					let t = this.regex.substring(e.loc.begin, e.loc.end),
						r = new RegExp(t)
					this.multiline = !!`
`.match(r)
				}
				if (e.quantifier) (this.isStarting = !1), (this.endRegexpStack = [])
				else {
					let t = this.regex.substring(e.loc.begin, e.loc.end)
					this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t)
				}
			}
			visitChildren(e) {
				;(e.type === 'Group' && e.quantifier) || super.visitChildren(e)
			}
		}),
		s(pn, 'TerminalRegExpVisitor'),
		pn),
	Nt = new fy()
function ef(n) {
	try {
		typeof n != 'string' && (n = n.source), (n = `/${n}/`)
		let e = Zh.pattern(n),
			t = []
		for (let r of e.value.value)
			Nt.reset(n), Nt.visit(r), t.push({ start: Nt.startRegexp, end: Nt.endRegex })
		return t
	} catch {
		return []
	}
}
s(ef, 'getTerminalParts')
function lu(n) {
	try {
		return (
			typeof n == 'string' && (n = new RegExp(n)),
			(n = n.toString()),
			Nt.reset(n),
			Nt.visit(Zh.pattern(n)),
			Nt.multiline
		)
	} catch {
		return !1
	}
}
s(lu, 'isMultilineComment')
function ja(n) {
	return (typeof n == 'string' ? new RegExp(n) : n).test(' ')
}
s(ja, 'isWhitespace')
function xi(n) {
	return n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
s(xi, 'escapeRegExp')
function uu(n) {
	return Array.prototype.map
		.call(n, (e) => (/\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : xi(e)))
		.join('')
}
s(uu, 'getCaseInsensitivePattern')
function cu(n, e) {
	let t = du(n),
		r = e.match(t)
	return !!r && r[0].length > 0
}
s(cu, 'partialMatches')
function du(n) {
	typeof n == 'string' && (n = new RegExp(n))
	let e = n,
		t = n.source,
		r = 0
	function i() {
		let a = '',
			o
		function l(c) {
			;(a += t.substr(r, c)), (r += c)
		}
		s(l, 'appendRaw')
		function u(c) {
			;(a += '(?:' + t.substr(r, c) + '|$)'), (r += c)
		}
		for (s(u, 'appendOptional'); r < t.length; )
			switch (t[r]) {
				case '\\':
					switch (t[r + 1]) {
						case 'c':
							u(3)
							break
						case 'x':
							u(4)
							break
						case 'u':
							e.unicode ? (t[r + 2] === '{' ? u(t.indexOf('}', r) - r + 1) : u(6)) : u(2)
							break
						case 'p':
						case 'P':
							e.unicode ? u(t.indexOf('}', r) - r + 1) : u(2)
							break
						case 'k':
							u(t.indexOf('>', r) - r + 1)
							break
						default:
							u(2)
							break
					}
					break
				case '[':
					;(o = /\[(?:\\.|.)*?\]/g), (o.lastIndex = r), (o = o.exec(t) || []), u(o[0].length)
					break
				case '|':
				case '^':
				case '$':
				case '*':
				case '+':
				case '?':
					l(1)
					break
				case '{':
					;(o = /\{\d+,?\d*\}/g), (o.lastIndex = r), (o = o.exec(t)), o ? l(o[0].length) : u(1)
					break
				case '(':
					if (t[r + 1] === '?')
						switch (t[r + 2]) {
							case ':':
								;(a += '(?:'), (r += 3), (a += i() + '|$)')
								break
							case '=':
								;(a += '(?='), (r += 3), (a += i() + ')')
								break
							case '!':
								;(o = r), (r += 3), i(), (a += t.substr(o, r - o))
								break
							case '<':
								switch (t[r + 3]) {
									case '=':
									case '!':
										;(o = r), (r += 4), i(), (a += t.substr(o, r - o))
										break
									default:
										l(t.indexOf('>', r) - r + 1), (a += i() + '|$)')
										break
								}
								break
						}
					else l(1), (a += i() + '|$)')
					break
				case ')':
					return ++r, a
				default:
					u(1)
					break
			}
		return a
	}
	return s(i, 'process'), new RegExp(i(), n.flags)
}
s(du, 'partialRegExp')
function hu(n) {
	return n.rules.find((e) => pe(e) && e.entry)
}
s(hu, 'getEntryRule')
function fu(n) {
	return n.rules.filter((e) => lt(e) && e.hidden)
}
s(fu, 'getHiddenRules')
function bs(n, e) {
	let t = new Set(),
		r = hu(n)
	if (!r) return new Set(n.rules)
	let i = [r].concat(fu(n))
	for (let o of i) pu(o, t, e)
	let a = new Set()
	for (let o of n.rules) (t.has(o.name) || (lt(o) && o.hidden)) && a.add(o)
	return a
}
s(bs, 'getAllReachableRules')
function pu(n, e, t) {
	e.add(n.name),
		Rt(n).forEach((r) => {
			if (it(r) || (t && xs(r))) {
				let i = r.rule.ref
				i && !e.has(i.name) && pu(i, e, t)
			}
		})
}
s(pu, 'ruleDfs')
function mu(n) {
	if (n.terminal) return n.terminal
	if (n.type.ref) {
		let e = _s(n.type.ref)
		return e == null ? void 0 : e.terminal
	}
}
s(mu, 'getCrossReferenceTerminal')
function gu(n) {
	return n.hidden && !ma(n).test(' ')
}
s(gu, 'isCommentTerminal')
function yu(n, e) {
	return !n || !e ? [] : Ps(n, e, n.astNode, !0)
}
s(yu, 'findNodesForProperty')
function ws(n, e, t) {
	if (!n || !e) return
	let r = Ps(n, e, n.astNode, !0)
	if (r.length !== 0)
		return t !== void 0 ? (t = Math.max(0, Math.min(t, r.length - 1))) : (t = 0), r[t]
}
s(ws, 'findNodeForProperty')
function Ps(n, e, t, r) {
	if (!r) {
		let i = Ii(n.grammarSource, nt)
		if (i && i.feature === e) return [n]
	}
	return He(n) && n.astNode === t ? n.content.flatMap((i) => Ps(i, e, t, !1)) : []
}
s(Ps, 'findNodesForPropertyInternal')
function tf(n, e) {
	return n ? Os(n, e, n == null ? void 0 : n.astNode) : []
}
s(tf, 'findNodesForKeyword')
function Tu(n, e, t) {
	if (!n) return
	let r = Os(n, e, n == null ? void 0 : n.astNode)
	if (r.length !== 0)
		return t !== void 0 ? (t = Math.max(0, Math.min(t, r.length - 1))) : (t = 0), r[t]
}
s(Tu, 'findNodeForKeyword')
function Os(n, e, t) {
	if (n.astNode !== t) return []
	if (rt(n.grammarSource) && n.grammarSource.value === e) return [n]
	let r = Ri(n).iterator(),
		i,
		a = []
	do
		if (((i = r.next()), !i.done)) {
			let o = i.value
			o.astNode === t ? rt(o.grammarSource) && o.grammarSource.value === e && a.push(o) : r.prune()
		}
	while (!i.done)
	return a
}
s(Os, 'findNodesForKeywordInternal')
function vu(n) {
	var e
	let t = n.astNode
	for (; t === ((e = n.container) === null || e === void 0 ? void 0 : e.astNode); ) {
		let r = Ii(n.grammarSource, nt)
		if (r) return r
		n = n.container
	}
}
s(vu, 'findAssignment')
function _s(n) {
	let e = n
	return (
		ks(e) &&
			(pt(e.$container)
				? (e = e.$container.$container)
				: pe(e.$container)
				? (e = e.$container)
				: Jt(e.$container)),
		Ru(n, e, new Map())
	)
}
s(_s, 'findNameAssignment')
function Ru(n, e, t) {
	var r
	function i(a, o) {
		let l
		return Ii(a, nt) || (l = Ru(o, o, t)), t.set(n, l), l
	}
	if ((s(i, 'go'), t.has(n))) return t.get(n)
	t.set(n, void 0)
	for (let a of Rt(e)) {
		if (nt(a) && a.feature.toLowerCase() === 'name') return t.set(n, a), a
		if (it(a) && pe(a.rule.ref)) return i(a, a.rule.ref)
		if (Cs(a) && !((r = a.typeRef) === null || r === void 0) && r.ref) return i(a, a.typeRef.ref)
	}
}
s(Ru, 'findNameAssignmentInternal')
function Au(n) {
	let e = n.$container
	if (Qt(e)) {
		let t = e.elements,
			r = t.indexOf(n)
		for (let i = r - 1; i >= 0; i--) {
			let a = t[i]
			if (pt(a)) return a
			{
				let o = Rt(t[i]).find(pt)
				if (o) return o
			}
		}
	}
	if (Es(e)) return Au(e)
}
s(Au, 'getActionAtElement')
function nf(n, e) {
	return n === '?' || n === '*' || (Qt(e) && !!e.guardCondition)
}
s(nf, 'isOptionalCardinality')
function rf(n) {
	return n === '*' || n === '+'
}
s(rf, 'isArrayCardinality')
function af(n) {
	return n === '+='
}
s(af, 'isArrayOperator')
function pa(n) {
	return Eu(n, new Set())
}
s(pa, 'isDataTypeRule')
function Eu(n, e) {
	if (e.has(n)) return !0
	e.add(n)
	for (let t of Rt(n))
		if (it(t)) {
			if (!t.rule.ref || (pe(t.rule.ref) && !Eu(t.rule.ref, e))) return !1
		} else if (nt(t) || pt(t)) return !1
	return !!n.definition
}
s(Eu, 'isDataTypeRuleInternal')
function sf(n) {
	return Ka(n.type, new Set())
}
s(sf, 'isDataType')
function Ka(n, e) {
	if (e.has(n)) return !0
	if ((e.add(n), sl(n) || Sl(n))) return !1
	if (Ll(n)) return n.types.every((t) => Ka(t, e))
	if (Cs(n)) {
		if (n.primitiveType !== void 0 || n.stringType !== void 0) return !0
		if (n.typeRef !== void 0) {
			let t = n.typeRef.ref
			return ca(t) ? Ka(t.type, e) : !1
		} else return !1
	} else return !1
}
s(Ka, 'isDataTypeInternal')
function Ds(n) {
	if (n.inferredType) return n.inferredType.name
	if (n.dataType) return n.dataType
	if (n.returnType) {
		let e = n.returnType.ref
		if (e && (pe(e) || Ss(e) || ca(e))) return e.name
	}
}
s(Ds, 'getExplicitRuleType')
function Ni(n) {
	var e
	if (pe(n)) return pa(n) ? n.name : (e = Ds(n)) !== null && e !== void 0 ? e : n.name
	if (Ss(n) || ca(n) || Cl(n)) return n.name
	if (pt(n)) {
		let t = ku(n)
		if (t) return t
	} else if (ks(n)) return n.name
	throw new Error('Cannot get name of Unknown Type')
}
s(Ni, 'getTypeName')
function ku(n) {
	var e
	if (n.inferredType) return n.inferredType.name
	if (!((e = n.type) === null || e === void 0) && e.ref) return Ni(n.type.ref)
}
s(ku, 'getActionType')
function Su(n) {
	var e, t, r
	return lt(n)
		? (t = (e = n.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0
			? t
			: 'string'
		: pa(n)
		? n.name
		: (r = Ds(n)) !== null && r !== void 0
		? r
		: n.name
}
s(Su, 'getRuleType')
function ma(n) {
	let e = { s: !1, i: !1, u: !1 },
		t = Zt(n.definition, e),
		r = Object.entries(e)
			.filter(([, i]) => i)
			.map(([i]) => i)
			.join('')
	return new RegExp(t, r)
}
s(ma, 'terminalRegex')
var Cu = /[\s\S]/.source
function Zt(n, e) {
	if (zl(n)) return of(n)
	if (Yl(n)) return lf(n)
	if (_l(n)) return df(n)
	if (xs(n)) {
		let t = n.rule.ref
		if (!t) throw new Error('Missing rule reference.')
		return We(Zt(t.definition), { cardinality: n.cardinality, lookahead: n.lookahead })
	} else {
		if (Vl(n)) return cf(n)
		if (Zl(n)) return uf(n)
		if (Kl(n)) {
			let t = n.regex.lastIndexOf('/'),
				r = n.regex.substring(1, t),
				i = n.regex.substring(t + 1)
			return (
				e && ((e.i = i.includes('i')), (e.s = i.includes('s')), (e.u = i.includes('u'))),
				We(r, { cardinality: n.cardinality, lookahead: n.lookahead, wrap: !1 })
			)
		} else {
			if (tu(n)) return We(Cu, { cardinality: n.cardinality, lookahead: n.lookahead })
			throw new Error(`Invalid terminal element: ${n == null ? void 0 : n.$type}`)
		}
	}
}
s(Zt, 'abstractElementToRegex')
function of(n) {
	return We(n.elements.map((e) => Zt(e)).join('|'), {
		cardinality: n.cardinality,
		lookahead: n.lookahead,
	})
}
s(of, 'terminalAlternativesToRegex')
function lf(n) {
	return We(n.elements.map((e) => Zt(e)).join(''), {
		cardinality: n.cardinality,
		lookahead: n.lookahead,
	})
}
s(lf, 'terminalGroupToRegex')
function uf(n) {
	return We(`${Cu}*?${Zt(n.terminal)}`, { cardinality: n.cardinality, lookahead: n.lookahead })
}
s(uf, 'untilTokenToRegex')
function cf(n) {
	return We(`(?!${Zt(n.terminal)})${Cu}*?`, { cardinality: n.cardinality, lookahead: n.lookahead })
}
s(cf, 'negateTokenToRegex')
function df(n) {
	return n.right
		? We(`[${Ia(n.left)}-${Ia(n.right)}]`, {
				cardinality: n.cardinality,
				lookahead: n.lookahead,
				wrap: !1,
		  })
		: We(Ia(n.left), { cardinality: n.cardinality, lookahead: n.lookahead, wrap: !1 })
}
s(df, 'characterRangeToRegex')
function Ia(n) {
	return xi(n.value)
}
s(Ia, 'keywordToRegex')
function We(n, e) {
	var t
	return (
		(e.wrap !== !1 || e.lookahead) &&
			(n = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ''}${n})`),
		e.cardinality ? `${n}${e.cardinality}` : n
	)
}
s(We, 'withCardinality')
function Iu(n) {
	let e = [],
		t = n.Grammar
	for (let r of t.rules) lt(r) && gu(r) && lu(ma(r)) && e.push(r.name)
	return { multilineCommentRules: e, nameRegexp: Yo }
}
s(Iu, 'createGrammarConfig')
function Wa(n) {
	console && console.error && console.error(`Error: ${n}`)
}
s(Wa, 'PRINT_ERROR')
function xu(n) {
	console && console.warn && console.warn(`Warning: ${n}`)
}
s(xu, 'PRINT_WARNING')
function Nu(n) {
	let e = new Date().getTime(),
		t = n()
	return { time: new Date().getTime() - e, value: t }
}
s(Nu, 'timer')
function $u(n) {
	function e() {}
	s(e, 'FakeConstructor'), (e.prototype = n)
	let t = new e()
	function r() {
		return typeof t.bar
	}
	return s(r, 'fakeAccess'), r(), r(), n
}
s($u, 'toFastProperties')
function hf(n) {
	return ff(n) ? n.LABEL : n.name
}
s(hf, 'tokenLabel')
function ff(n) {
	return Se(n.LABEL) && n.LABEL !== ''
}
s(ff, 'hasTokenLabel')
var mn,
	qe =
		((mn = class {
			get definition() {
				return this._definition
			}
			set definition(e) {
				this._definition = e
			}
			constructor(e) {
				this._definition = e
			}
			accept(e) {
				e.visit(this),
					$(this.definition, (t) => {
						t.accept(e)
					})
			}
		}),
		s(mn, 'AbstractProduction'),
		mn),
	gn,
	se =
		((gn = class extends qe {
			constructor(e) {
				super([]),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
			set definition(e) {}
			get definition() {
				return this.referencedRule !== void 0 ? this.referencedRule.definition : []
			}
			accept(e) {
				e.visit(this)
			}
		}),
		s(gn, 'NonTerminal'),
		gn),
	yn,
	$i =
		((yn = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.orgText = ''),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(yn, 'Rule'),
		yn),
	Tn,
	me =
		((Tn = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.ignoreAmbiguities = !1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(Tn, 'Alternative'),
		Tn),
	vn,
	te =
		((vn = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(vn, 'Option'),
		vn),
	Rn,
	xe =
		((Rn = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(Rn, 'RepetitionMandatory'),
		Rn),
	An,
	Ne =
		((An = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(An, 'RepetitionMandatoryWithSeparator'),
		An),
	En,
	j =
		((En = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(En, 'Repetition'),
		En),
	kn,
	ye =
		((kn = class extends qe {
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(kn, 'RepetitionWithSeparator'),
		kn),
	Sn,
	Te =
		((Sn = class extends qe {
			get definition() {
				return this._definition
			}
			set definition(e) {
				this._definition = e
			}
			constructor(e) {
				super(e.definition),
					(this.idx = 1),
					(this.ignoreAmbiguities = !1),
					(this.hasPredicates = !1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
		}),
		s(Sn, 'Alternation'),
		Sn),
	Cn,
	G =
		((Cn = class {
			constructor(e) {
				;(this.idx = 1),
					ke(
						this,
						Ue(e, (t) => t !== void 0)
					)
			}
			accept(e) {
				e.visit(this)
			}
		}),
		s(Cn, 'Terminal'),
		Cn)
function pf(n) {
	return I(n, Hi)
}
s(pf, 'serializeGrammar')
function Hi(n) {
	function e(t) {
		return I(t, Hi)
	}
	if ((s(e, 'convertDefinition'), n instanceof se)) {
		let t = { type: 'NonTerminal', name: n.nonTerminalName, idx: n.idx }
		return Se(n.label) && (t.label = n.label), t
	} else {
		if (n instanceof me) return { type: 'Alternative', definition: e(n.definition) }
		if (n instanceof te) return { type: 'Option', idx: n.idx, definition: e(n.definition) }
		if (n instanceof xe)
			return { type: 'RepetitionMandatory', idx: n.idx, definition: e(n.definition) }
		if (n instanceof Ne)
			return {
				type: 'RepetitionMandatoryWithSeparator',
				idx: n.idx,
				separator: Hi(new G({ terminalType: n.separator })),
				definition: e(n.definition),
			}
		if (n instanceof ye)
			return {
				type: 'RepetitionWithSeparator',
				idx: n.idx,
				separator: Hi(new G({ terminalType: n.separator })),
				definition: e(n.definition),
			}
		if (n instanceof j) return { type: 'Repetition', idx: n.idx, definition: e(n.definition) }
		if (n instanceof Te) return { type: 'Alternation', idx: n.idx, definition: e(n.definition) }
		if (n instanceof G) {
			let t = { type: 'Terminal', name: n.terminalType.name, label: hf(n.terminalType), idx: n.idx }
			Se(n.label) && (t.terminalLabel = n.label)
			let r = n.terminalType.PATTERN
			return n.terminalType.PATTERN && (t.pattern = tt(r) ? r.source : r), t
		} else {
			if (n instanceof $i)
				return { type: 'Rule', name: n.name, orgText: n.orgText, definition: e(n.definition) }
			throw Error('non exhaustive match')
		}
	}
}
s(Hi, 'serializeProduction')
var In,
	Li =
		((In = class {
			visit(e) {
				let t = e
				switch (t.constructor) {
					case se:
						return this.visitNonTerminal(t)
					case me:
						return this.visitAlternative(t)
					case te:
						return this.visitOption(t)
					case xe:
						return this.visitRepetitionMandatory(t)
					case Ne:
						return this.visitRepetitionMandatoryWithSeparator(t)
					case ye:
						return this.visitRepetitionWithSeparator(t)
					case j:
						return this.visitRepetition(t)
					case Te:
						return this.visitAlternation(t)
					case G:
						return this.visitTerminal(t)
					case $i:
						return this.visitRule(t)
					default:
						throw Error('non exhaustive match')
				}
			}
			visitNonTerminal(e) {}
			visitAlternative(e) {}
			visitOption(e) {}
			visitRepetition(e) {}
			visitRepetitionMandatory(e) {}
			visitRepetitionMandatoryWithSeparator(e) {}
			visitRepetitionWithSeparator(e) {}
			visitAlternation(e) {}
			visitTerminal(e) {}
			visitRule(e) {}
		}),
		s(In, 'GAstVisitor'),
		In)
function mf(n) {
	return (
		n instanceof me ||
		n instanceof te ||
		n instanceof j ||
		n instanceof xe ||
		n instanceof Ne ||
		n instanceof ye ||
		n instanceof G ||
		n instanceof $i
	)
}
s(mf, 'isSequenceProd')
function ea(n, e = []) {
	return n instanceof te || n instanceof j || n instanceof ye
		? !0
		: n instanceof Te
		? vh(n.definition, (t) => ea(t, e))
		: n instanceof se && le(e, n)
		? !1
		: n instanceof qe
		? (n instanceof se && e.push(n), Me(n.definition, (t) => ea(t, e)))
		: !1
}
s(ea, 'isOptionalProd')
function gf(n) {
	return n instanceof Te
}
s(gf, 'isBranchingProd')
function De(n) {
	if (n instanceof se) return 'SUBRULE'
	if (n instanceof te) return 'OPTION'
	if (n instanceof Te) return 'OR'
	if (n instanceof xe) return 'AT_LEAST_ONE'
	if (n instanceof Ne) return 'AT_LEAST_ONE_SEP'
	if (n instanceof ye) return 'MANY_SEP'
	if (n instanceof j) return 'MANY'
	if (n instanceof G) return 'CONSUME'
	throw Error('non exhaustive match')
}
s(De, 'getProductionDslName')
var xn,
	Ms =
		((xn = class {
			walk(e, t = []) {
				$(e.definition, (r, i) => {
					let a = ee(e.definition, i + 1)
					if (r instanceof se) this.walkProdRef(r, a, t)
					else if (r instanceof G) this.walkTerminal(r, a, t)
					else if (r instanceof me) this.walkFlat(r, a, t)
					else if (r instanceof te) this.walkOption(r, a, t)
					else if (r instanceof xe) this.walkAtLeastOne(r, a, t)
					else if (r instanceof Ne) this.walkAtLeastOneSep(r, a, t)
					else if (r instanceof ye) this.walkManySep(r, a, t)
					else if (r instanceof j) this.walkMany(r, a, t)
					else if (r instanceof Te) this.walkOr(r, a, t)
					else throw Error('non exhaustive match')
				})
			}
			walkTerminal(e, t, r) {}
			walkProdRef(e, t, r) {}
			walkFlat(e, t, r) {
				let i = t.concat(r)
				this.walk(e, i)
			}
			walkOption(e, t, r) {
				let i = t.concat(r)
				this.walk(e, i)
			}
			walkAtLeastOne(e, t, r) {
				let i = [new te({ definition: e.definition })].concat(t, r)
				this.walk(e, i)
			}
			walkAtLeastOneSep(e, t, r) {
				let i = ro(e, t, r)
				this.walk(e, i)
			}
			walkMany(e, t, r) {
				let i = [new te({ definition: e.definition })].concat(t, r)
				this.walk(e, i)
			}
			walkManySep(e, t, r) {
				let i = ro(e, t, r)
				this.walk(e, i)
			}
			walkOr(e, t, r) {
				let i = t.concat(r)
				$(e.definition, (a) => {
					let o = new me({ definition: [a] })
					this.walk(o, i)
				})
			}
		}),
		s(xn, 'RestWalker'),
		xn)
function ro(n, e, t) {
	return [
		new te({ definition: [new G({ terminalType: n.separator })].concat(n.definition) }),
	].concat(e, t)
}
s(ro, 'restForRepetitionWithSeparator')
function bi(n) {
	if (n instanceof se) return bi(n.referencedRule)
	if (n instanceof G) return vf(n)
	if (mf(n)) return yf(n)
	if (gf(n)) return Tf(n)
	throw Error('non exhaustive match')
}
s(bi, 'first')
function yf(n) {
	let e = [],
		t = n.definition,
		r = 0,
		i = t.length > r,
		a,
		o = !0
	for (; i && o; ) (a = t[r]), (o = ea(a)), (e = e.concat(bi(a))), (r = r + 1), (i = t.length > r)
	return Bo(e)
}
s(yf, 'firstForSequence')
function Tf(n) {
	let e = I(n.definition, (t) => bi(t))
	return Bo(we(e))
}
s(Tf, 'firstForBranching')
function vf(n) {
	return [n.terminalType]
}
s(vf, 'firstForTerminal')
var Rf = '_~IN~_',
	Nn,
	py =
		((Nn = class extends Ms {
			constructor(e) {
				super(), (this.topProd = e), (this.follows = {})
			}
			startWalking() {
				return this.walk(this.topProd), this.follows
			}
			walkTerminal(e, t, r) {}
			walkProdRef(e, t, r) {
				let i = Ef(e.referencedRule, e.idx) + this.topProd.name,
					a = t.concat(r),
					o = new me({ definition: a }),
					l = bi(o)
				this.follows[i] = l
			}
		}),
		s(Nn, 'ResyncFollowsWalker'),
		Nn)
function Af(n) {
	let e = {}
	return (
		$(n, (t) => {
			let r = new py(t).startWalking()
			ke(e, r)
		}),
		e
	)
}
s(Af, 'computeAllProdsFollows')
function Ef(n, e) {
	return n.name + e + Rf
}
s(Ef, 'buildBetweenProdsFollowPrefix')
var xa = {},
	my = new Jh()
function ga(n) {
	let e = n.toString()
	if (xa.hasOwnProperty(e)) return xa[e]
	{
		let t = my.pattern(e)
		return (xa[e] = t), t
	}
}
s(ga, 'getRegExpAst')
function kf() {
	xa = {}
}
s(kf, 'clearRegExpParserCache')
var Sf = 'Complement Sets are not supported for first char optimization',
	Ha = `Unable to use "first char" lexer optimizations:
`
function Cf(n, e = !1) {
	try {
		let t = ga(n)
		return za(t.value, {}, t.flags.ignoreCase)
	} catch (t) {
		if (t.message === Sf)
			e &&
				xu(`${Ha}	Unable to optimize: < ${n.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#COMPLEMENT for details.`)
		else {
			let r = ''
			e &&
				(r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),
				Wa(
					`${Ha}
	Failed parsing: < ${n.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r
				)
		}
	}
	return []
}
s(Cf, 'getOptimizedStartCodesIndices')
function za(n, e, t) {
	switch (n.type) {
		case 'Disjunction':
			for (let i = 0; i < n.value.length; i++) za(n.value[i], e, t)
			break
		case 'Alternative':
			let r = n.value
			for (let i = 0; i < r.length; i++) {
				let a = r[i]
				switch (a.type) {
					case 'EndAnchor':
					case 'GroupBackReference':
					case 'Lookahead':
					case 'NegativeLookahead':
					case 'StartAnchor':
					case 'WordBoundary':
					case 'NonWordBoundary':
						continue
				}
				let o = a
				switch (o.type) {
					case 'Character':
						Gi(o.value, e, t)
						break
					case 'Set':
						if (o.complement === !0) throw Error(Sf)
						$(o.value, (u) => {
							if (typeof u == 'number') Gi(u, e, t)
							else {
								let c = u
								if (t === !0) for (let d = c.from; d <= c.to; d++) Gi(d, e, t)
								else {
									for (let d = c.from; d <= c.to && d < Vi; d++) Gi(d, e, t)
									if (c.to >= Vi) {
										let d = c.from >= Vi ? c.from : Vi,
											h = c.to,
											f = at(d),
											p = at(h)
										for (let g = f; g <= p; g++) e[g] = g
									}
								}
							}
						})
						break
					case 'Group':
						za(o.value, e, t)
						break
					default:
						throw Error('Non Exhaustive Match')
				}
				let l = o.quantifier !== void 0 && o.quantifier.atLeast === 0
				if ((o.type === 'Group' && qa(o) === !1) || (o.type !== 'Group' && l === !1)) break
			}
			break
		default:
			throw Error('non exhaustive match!')
	}
	return Q(e)
}
s(za, 'firstCharOptimizedIndices')
function Gi(n, e, t) {
	let r = at(n)
	;(e[r] = r), t === !0 && If(n, e)
}
s(Gi, 'addOptimizedIdxToResult')
function If(n, e) {
	let t = String.fromCharCode(n),
		r = t.toUpperCase()
	if (r !== t) {
		let i = at(r.charCodeAt(0))
		e[i] = i
	} else {
		let i = t.toLowerCase()
		if (i !== t) {
			let a = at(i.charCodeAt(0))
			e[a] = a
		}
	}
}
s(If, 'handleIgnoreCase')
function io(n, e) {
	return Ti(n.value, (t) => {
		if (typeof t == 'number') return le(e, t)
		{
			let r = t
			return Ti(e, (i) => r.from <= i && i <= r.to) !== void 0
		}
	})
}
s(io, 'findCode')
function qa(n) {
	let e = n.quantifier
	return e && e.atLeast === 0 ? !0 : n.value ? (be(n.value) ? Me(n.value, qa) : qa(n.value)) : !1
}
s(qa, 'isWholeOptional')
var $n,
	gy =
		(($n = class extends Ls {
			constructor(e) {
				super(), (this.targetCharCodes = e), (this.found = !1)
			}
			visitChildren(e) {
				if (this.found !== !0) {
					switch (e.type) {
						case 'Lookahead':
							this.visitLookahead(e)
							return
						case 'NegativeLookahead':
							this.visitNegativeLookahead(e)
							return
					}
					super.visitChildren(e)
				}
			}
			visitCharacter(e) {
				le(this.targetCharCodes, e.value) && (this.found = !0)
			}
			visitSet(e) {
				e.complement
					? io(e, this.targetCharCodes) === void 0 && (this.found = !0)
					: io(e, this.targetCharCodes) !== void 0 && (this.found = !0)
			}
		}),
		s($n, 'CharCodeFinder'),
		$n)
function Fs(n, e) {
	if (e instanceof RegExp) {
		let t = ga(e),
			r = new gy(n)
		return r.visit(t), r.found
	} else return Ti(e, (t) => le(n, t.charCodeAt(0))) !== void 0
}
s(Fs, 'canMatchCharCode')
var Ht = 'PATTERN',
	Bi = 'defaultMode',
	ka = 'modes',
	xf = typeof new RegExp('(?:)').sticky == 'boolean'
function Nf(n, e) {
	e = Vo(e, {
		useSticky: xf,
		debug: !1,
		safeMode: !1,
		positionTracking: 'full',
		lineTerminatorCharacters: [
			'\r',
			`
`,
		],
		tracer: s((E, v) => v(), 'tracer'),
	})
	let t = e.tracer
	t('initCharCodeToOptimizedIndexMap', () => {
		qf()
	})
	let r
	t('Reject Lexer.NA', () => {
		r = gs(n, (E) => E[Ht] === he.NA)
	})
	let i = !1,
		a
	t('Transform Patterns', () => {
		;(i = !1),
			(a = I(r, (E) => {
				let v = E[Ht]
				if (tt(v)) {
					let N = v.source
					return N.length === 1 && N !== '^' && N !== '$' && N !== '.' && !v.ignoreCase
						? N
						: N.length === 2 &&
						  N[0] === '\\' &&
						  !le(
								['d', 'D', 's', 'S', 't', 'r', 'n', 't', '0', 'c', 'b', 'B', 'f', 'v', 'w', 'W'],
								N[1]
						  )
						? N[1]
						: e.useSticky
						? so(v)
						: ao(v)
				} else {
					if (Yt(v)) return (i = !0), { exec: v }
					if (typeof v == 'object') return (i = !0), v
					if (typeof v == 'string') {
						if (v.length === 1) return v
						{
							let N = v.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'),
								B = new RegExp(N)
							return e.useSticky ? so(B) : ao(B)
						}
					} else throw Error('non exhaustive match')
				}
			}))
	})
	let o, l, u, c, d
	t('misc mapping', () => {
		;(o = I(r, (E) => E.tokenTypeIdx)),
			(l = I(r, (E) => {
				let v = E.GROUP
				if (v !== he.SKIPPED) {
					if (Se(v)) return v
					if (et(v)) return !1
					throw Error('non exhaustive match')
				}
			})),
			(u = I(r, (E) => {
				let v = E.LONGER_ALT
				if (v) return be(v) ? I(v, (N) => Wc(r, N)) : [Wc(r, v)]
			})),
			(c = I(r, (E) => E.PUSH_MODE)),
			(d = I(r, (E) => L(E, 'POP_MODE')))
	})
	let h
	t('Line Terminator Handling', () => {
		let E = wu(e.lineTerminatorCharacters)
		;(h = I(r, (v) => !1)),
			e.positionTracking !== 'onlyOffset' &&
				(h = I(r, (v) =>
					L(v, 'LINE_BREAKS') ? !!v.LINE_BREAKS : bu(v, E) === !1 && Fs(E, v.PATTERN)
				))
	})
	let f, p, g, y
	t('Misc Mapping #2', () => {
		;(f = I(r, Lu)),
			(p = I(a, Hf)),
			(g = ae(
				r,
				(E, v) => {
					let N = v.GROUP
					return Se(N) && N !== he.SKIPPED && (E[N] = []), E
				},
				{}
			)),
			(y = I(a, (E, v) => ({
				pattern: a[v],
				longerAlt: u[v],
				canLineTerminator: h[v],
				isCustom: f[v],
				short: p[v],
				group: l[v],
				push: c[v],
				pop: d[v],
				tokenTypeIdx: o[v],
				tokenType: r[v],
			})))
	})
	let k = !0,
		R = []
	return (
		e.safeMode ||
			t('First Char Optimization', () => {
				R = ae(
					r,
					(E, v, N) => {
						if (typeof v.PATTERN == 'string') {
							let B = v.PATTERN.charCodeAt(0),
								Z = at(B)
							Na(E, Z, y[N])
						} else if (be(v.START_CHARS_HINT)) {
							let B
							$(v.START_CHARS_HINT, (Z) => {
								let Pe = typeof Z == 'string' ? Z.charCodeAt(0) : Z,
									ve = at(Pe)
								B !== ve && ((B = ve), Na(E, ve, y[N]))
							})
						} else if (tt(v.PATTERN))
							if (v.PATTERN.unicode)
								(k = !1),
									e.ensureOptimizations &&
										Wa(`${Ha}	Unable to analyze < ${v.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`)
							else {
								let B = Cf(v.PATTERN, e.ensureOptimizations)
								F(B) && (k = !1),
									$(B, (Z) => {
										Na(E, Z, y[N])
									})
							}
						else
							e.ensureOptimizations &&
								Wa(`${Ha}	TokenType: <${v.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),
								(k = !1)
						return E
					},
					[]
				)
			}),
		{
			emptyGroups: g,
			patternIdxToConfig: y,
			charCodeToPatternIdxToConfig: R,
			hasCustom: i,
			canBeOptimized: k,
		}
	)
}
s(Nf, 'analyzeTokenTypes')
function $f(n, e) {
	let t = [],
		r = bf(n)
	t = t.concat(r.errors)
	let i = wf(r.valid),
		a = i.valid
	return (
		(t = t.concat(i.errors)),
		(t = t.concat(Lf(a))),
		(t = t.concat(Ff(a))),
		(t = t.concat(Uf(a, e))),
		(t = t.concat(Gf(a))),
		t
	)
}
s($f, 'validatePatterns')
function Lf(n) {
	let e = [],
		t = Ie(n, (r) => tt(r[Ht]))
	return (
		(e = e.concat(Pf(t))),
		(e = e.concat(_f(t))),
		(e = e.concat(Df(t))),
		(e = e.concat(Mf(t))),
		(e = e.concat(Of(t))),
		e
	)
}
s(Lf, 'validateRegExpPattern')
function bf(n) {
	let e = Ie(n, (i) => !L(i, Ht)),
		t = I(e, (i) => ({
			message: 'Token Type: ->' + i.name + "<- missing static 'PATTERN' property",
			type: K.MISSING_PATTERN,
			tokenTypes: [i],
		})),
		r = ys(n, e)
	return { errors: t, valid: r }
}
s(bf, 'findMissingPatterns')
function wf(n) {
	let e = Ie(n, (i) => {
			let a = i[Ht]
			return !tt(a) && !Yt(a) && !L(a, 'exec') && !Se(a)
		}),
		t = I(e, (i) => ({
			message:
				'Token Type: ->' +
				i.name +
				"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
			type: K.INVALID_PATTERN,
			tokenTypes: [i],
		})),
		r = ys(n, e)
	return { errors: t, valid: r }
}
s(wf, 'findInvalidPatterns')
var yy = /[^\\][$]/
function Pf(n) {
	const r = class r extends Ls {
		constructor() {
			super(...arguments), (this.found = !1)
		}
		visitEndAnchor(a) {
			this.found = !0
		}
	}
	s(r, 'EndAnchorFinder')
	let e = r,
		t = Ie(n, (i) => {
			let a = i.PATTERN
			try {
				let o = ga(a),
					l = new e()
				return l.visit(o), l.found
			} catch {
				return yy.test(a.source)
			}
		})
	return I(t, (i) => ({
		message:
			`Unexpected RegExp Anchor Error:
	Token Type: ->` +
			i.name +
			`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
		type: K.EOI_ANCHOR_FOUND,
		tokenTypes: [i],
	}))
}
s(Pf, 'findEndOfInputAnchor')
function Of(n) {
	let e = Ie(n, (t) => t.PATTERN.test(''))
	return I(e, (t) => ({
		message: 'Token Type: ->' + t.name + "<- static 'PATTERN' must not match an empty string",
		type: K.EMPTY_MATCH_PATTERN,
		tokenTypes: [t],
	}))
}
s(Of, 'findEmptyMatchRegExps')
var Ty = /[^\\[][\^]|^\^/
function _f(n) {
	const r = class r extends Ls {
		constructor() {
			super(...arguments), (this.found = !1)
		}
		visitStartAnchor(a) {
			this.found = !0
		}
	}
	s(r, 'StartAnchorFinder')
	let e = r,
		t = Ie(n, (i) => {
			let a = i.PATTERN
			try {
				let o = ga(a),
					l = new e()
				return l.visit(o), l.found
			} catch {
				return Ty.test(a.source)
			}
		})
	return I(t, (i) => ({
		message:
			`Unexpected RegExp Anchor Error:
	Token Type: ->` +
			i.name +
			`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
		type: K.SOI_ANCHOR_FOUND,
		tokenTypes: [i],
	}))
}
s(_f, 'findStartOfInputAnchor')
function Df(n) {
	let e = Ie(n, (t) => {
		let r = t[Ht]
		return r instanceof RegExp && (r.multiline || r.global)
	})
	return I(e, (t) => ({
		message:
			'Token Type: ->' +
			t.name +
			"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
		type: K.UNSUPPORTED_FLAGS_FOUND,
		tokenTypes: [t],
	}))
}
s(Df, 'findUnsupportedFlags')
function Mf(n) {
	let e = [],
		t = I(n, (i) =>
			ae(
				n,
				(a, o) => (
					i.PATTERN.source === o.PATTERN.source &&
						!le(e, o) &&
						o.PATTERN !== he.NA &&
						(e.push(o), a.push(o)),
					a
				),
				[]
			)
		)
	t = ua(t)
	let r = Ie(t, (i) => i.length > 1)
	return I(r, (i) => {
		let a = I(i, (o) => o.name)
		return {
			message: `The same RegExp pattern ->${
				Fe(i).PATTERN
			}<-has been used in all of the following Token Types: ${a.join(', ')} <-`,
			type: K.DUPLICATE_PATTERNS_FOUND,
			tokenTypes: i,
		}
	})
}
s(Mf, 'findDuplicatePatterns')
function Ff(n) {
	let e = Ie(n, (t) => {
		if (!L(t, 'GROUP')) return !1
		let r = t.GROUP
		return r !== he.SKIPPED && r !== he.NA && !Se(r)
	})
	return I(e, (t) => ({
		message:
			'Token Type: ->' + t.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
		type: K.INVALID_GROUP_TYPE_FOUND,
		tokenTypes: [t],
	}))
}
s(Ff, 'findInvalidGroupType')
function Uf(n, e) {
	let t = Ie(n, (r) => r.PUSH_MODE !== void 0 && !le(e, r.PUSH_MODE))
	return I(t, (r) => ({
		message: `Token Type: ->${r.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${r.PUSH_MODE}<-which does not exist`,
		type: K.PUSH_MODE_DOES_NOT_EXIST,
		tokenTypes: [r],
	}))
}
s(Uf, 'findModesThatDoNotExist')
function Gf(n) {
	let e = [],
		t = ae(
			n,
			(r, i, a) => {
				let o = i.PATTERN
				return (
					o === he.NA ||
						(Se(o)
							? r.push({ str: o, idx: a, tokenType: i })
							: tt(o) && Vf(o) && r.push({ str: o.source, idx: a, tokenType: i })),
					r
				)
			},
			[]
		)
	return (
		$(n, (r, i) => {
			$(t, ({ str: a, idx: o, tokenType: l }) => {
				if (i < o && Bf(a, r.PATTERN)) {
					let u = `Token: ->${l.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#UNREACHABLE`
					e.push({ message: u, type: K.UNREACHABLE_PATTERN, tokenTypes: [r, l] })
				}
			})
		}),
		e
	)
}
s(Gf, 'findUnreachablePatterns')
function Bf(n, e) {
	if (tt(e)) {
		let t = e.exec(n)
		return t !== null && t.index === 0
	} else {
		if (Yt(e)) return e(n, 0, [], {})
		if (L(e, 'exec')) return e.exec(n, 0, [], {})
		if (typeof e == 'string') return e === n
		throw Error('non exhaustive match')
	}
}
s(Bf, 'testTokenType')
function Vf(n) {
	return (
		Ti(
			['.', '\\', '[', ']', '|', '^', '$', '(', ')', '?', '*', '+', '{'],
			(e) => n.source.indexOf(e) !== -1
		) === void 0
	)
}
s(Vf, 'noMetaChar')
function ao(n) {
	let e = n.ignoreCase ? 'i' : ''
	return new RegExp(`^(?:${n.source})`, e)
}
s(ao, 'addStartOfInput')
function so(n) {
	let e = n.ignoreCase ? 'iy' : 'y'
	return new RegExp(`${n.source}`, e)
}
s(so, 'addStickyFlag')
function jf(n, e, t) {
	let r = []
	return (
		L(n, Bi) ||
			r.push({
				message:
					'A MultiMode Lexer cannot be initialized without a <' +
					Bi +
					`> property in its definition
`,
				type: K.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE,
			}),
		L(n, ka) ||
			r.push({
				message:
					'A MultiMode Lexer cannot be initialized without a <' +
					ka +
					`> property in its definition
`,
				type: K.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY,
			}),
		L(n, ka) &&
			L(n, Bi) &&
			!L(n.modes, n.defaultMode) &&
			r.push({
				message: `A MultiMode Lexer cannot be initialized with a ${Bi}: <${n.defaultMode}>which does not exist
`,
				type: K.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST,
			}),
		L(n, ka) &&
			$(n.modes, (i, a) => {
				$(i, (o, l) => {
					if (et(o))
						r.push({
							message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${l}>
`,
							type: K.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED,
						})
					else if (L(o, 'LONGER_ALT')) {
						let u = be(o.LONGER_ALT) ? o.LONGER_ALT : [o.LONGER_ALT]
						$(u, (c) => {
							!et(c) &&
								!le(i, c) &&
								r.push({
									message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${o.name}> outside of mode <${a}>
`,
									type: K.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE,
								})
						})
					}
				})
			}),
		r
	)
}
s(jf, 'performRuntimeChecks')
function Kf(n, e, t) {
	let r = [],
		i = !1,
		a = ua(we(Q(n.modes))),
		o = gs(a, (u) => u[Ht] === he.NA),
		l = wu(t)
	return (
		e &&
			$(o, (u) => {
				let c = bu(u, l)
				if (c !== !1) {
					let d = { message: zf(u, c), type: c.issue, tokenType: u }
					r.push(d)
				} else L(u, 'LINE_BREAKS') ? u.LINE_BREAKS === !0 && (i = !0) : Fs(l, u.PATTERN) && (i = !0)
			}),
		e &&
			!i &&
			r.push({
				message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
				type: K.NO_LINE_BREAKS_FLAGS,
			}),
		r
	)
}
s(Kf, 'performWarningRuntimeChecks')
function Wf(n) {
	let e = {},
		t = Yi(n)
	return (
		$(t, (r) => {
			let i = n[r]
			if (be(i)) e[r] = []
			else throw Error('non exhaustive match')
		}),
		e
	)
}
s(Wf, 'cloneEmptyGroups')
function Lu(n) {
	let e = n.PATTERN
	if (tt(e)) return !1
	if (Yt(e) || L(e, 'exec')) return !0
	if (Se(e)) return !1
	throw Error('non exhaustive match')
}
s(Lu, 'isCustomPattern')
function Hf(n) {
	return Se(n) && n.length === 1 ? n.charCodeAt(0) : !1
}
s(Hf, 'isShortPattern')
var vy = {
	test: s(function (n) {
		let e = n.length
		for (let t = this.lastIndex; t < e; t++) {
			let r = n.charCodeAt(t)
			if (r === 10) return (this.lastIndex = t + 1), !0
			if (r === 13)
				return n.charCodeAt(t + 1) === 10 ? (this.lastIndex = t + 2) : (this.lastIndex = t + 1), !0
		}
		return !1
	}, 'test'),
	lastIndex: 0,
}
function bu(n, e) {
	if (L(n, 'LINE_BREAKS')) return !1
	if (tt(n.PATTERN)) {
		try {
			Fs(e, n.PATTERN)
		} catch (t) {
			return { issue: K.IDENTIFY_TERMINATOR, errMsg: t.message }
		}
		return !1
	} else {
		if (Se(n.PATTERN)) return !1
		if (Lu(n)) return { issue: K.CUSTOM_LINE_BREAK }
		throw Error('non exhaustive match')
	}
}
s(bu, 'checkLineBreaksIssues')
function zf(n, e) {
	if (e.issue === K.IDENTIFY_TERMINATOR)
		return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${n.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`
	if (e.issue === K.CUSTOM_LINE_BREAK)
		return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${n.name}> Token Type
	For details See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`
	throw Error('non exhaustive match')
}
s(zf, 'buildLineBreakIssueMessage')
function wu(n) {
	return I(n, (e) => (Se(e) ? e.charCodeAt(0) : e))
}
s(wu, 'getCharCodes')
function Na(n, e, t) {
	n[e] === void 0 ? (n[e] = [t]) : n[e].push(t)
}
s(Na, 'addToMapOfArrays')
var Vi = 256,
	$a = []
function at(n) {
	return n < Vi ? n : $a[n]
}
s(at, 'charCodeToOptimizedIndex')
function qf() {
	if (F($a)) {
		$a = new Array(65536)
		for (let n = 0; n < 65536; n++) $a[n] = n > 255 ? 255 + ~~(n / 255) : n
	}
}
s(qf, 'initCharCodeToOptimizedIndexMap')
function wi(n, e) {
	let t = n.tokenTypeIdx
	return t === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[t] === !0
}
s(wi, 'tokenStructuredMatcher')
function ta(n, e) {
	return n.tokenTypeIdx === e.tokenTypeIdx
}
s(ta, 'tokenStructuredMatcherNoCategories')
var zc = 1,
	Yf = {}
function Pi(n) {
	let e = Xf(n)
	Jf(e),
		Zf(e),
		Qf(e),
		$(e, (t) => {
			t.isParent = t.categoryMatches.length > 0
		})
}
s(Pi, 'augmentTokenTypes')
function Xf(n) {
	let e = ne(n),
		t = n,
		r = !0
	for (; r; ) {
		t = ua(we(I(t, (a) => a.CATEGORIES)))
		let i = ys(t, e)
		;(e = e.concat(i)), F(i) ? (r = !1) : (t = i)
	}
	return e
}
s(Xf, 'expandCategories')
function Jf(n) {
	$(n, (e) => {
		Ou(e) || ((Yf[zc] = e), (e.tokenTypeIdx = zc++)),
			oo(e) && !be(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]),
			oo(e) || (e.CATEGORIES = []),
			ep(e) || (e.categoryMatches = []),
			tp(e) || (e.categoryMatchesMap = {})
	})
}
s(Jf, 'assignTokenDefaultProps')
function Qf(n) {
	$(n, (e) => {
		;(e.categoryMatches = []),
			$(e.categoryMatchesMap, (t, r) => {
				e.categoryMatches.push(Yf[r].tokenTypeIdx)
			})
	})
}
s(Qf, 'assignCategoriesTokensProp')
function Zf(n) {
	$(n, (e) => {
		Pu([], e)
	})
}
s(Zf, 'assignCategoriesMapProp')
function Pu(n, e) {
	$(n, (t) => {
		e.categoryMatchesMap[t.tokenTypeIdx] = !0
	}),
		$(e.CATEGORIES, (t) => {
			let r = n.concat(e)
			le(r, t) || Pu(r, t)
		})
}
s(Pu, 'singleAssignCategoriesToksMap')
function Ou(n) {
	return L(n, 'tokenTypeIdx')
}
s(Ou, 'hasShortKeyProperty')
function oo(n) {
	return L(n, 'CATEGORIES')
}
s(oo, 'hasCategoriesProperty')
function ep(n) {
	return L(n, 'categoryMatches')
}
s(ep, 'hasExtendingTokensTypesProperty')
function tp(n) {
	return L(n, 'categoryMatchesMap')
}
s(tp, 'hasExtendingTokensTypesMapProperty')
function np(n) {
	return L(n, 'tokenTypeIdx')
}
s(np, 'isTokenType')
var Ry = {
		buildUnableToPopLexerModeMessage(n) {
			return `Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`
		},
		buildUnexpectedCharactersMessage(n, e, t, r, i) {
			return `unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`
		},
	},
	K
;(function (n) {
	;(n[(n.MISSING_PATTERN = 0)] = 'MISSING_PATTERN'),
		(n[(n.INVALID_PATTERN = 1)] = 'INVALID_PATTERN'),
		(n[(n.EOI_ANCHOR_FOUND = 2)] = 'EOI_ANCHOR_FOUND'),
		(n[(n.UNSUPPORTED_FLAGS_FOUND = 3)] = 'UNSUPPORTED_FLAGS_FOUND'),
		(n[(n.DUPLICATE_PATTERNS_FOUND = 4)] = 'DUPLICATE_PATTERNS_FOUND'),
		(n[(n.INVALID_GROUP_TYPE_FOUND = 5)] = 'INVALID_GROUP_TYPE_FOUND'),
		(n[(n.PUSH_MODE_DOES_NOT_EXIST = 6)] = 'PUSH_MODE_DOES_NOT_EXIST'),
		(n[(n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7)] = 'MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE'),
		(n[(n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8)] =
			'MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY'),
		(n[(n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9)] =
			'MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST'),
		(n[(n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10)] =
			'LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED'),
		(n[(n.SOI_ANCHOR_FOUND = 11)] = 'SOI_ANCHOR_FOUND'),
		(n[(n.EMPTY_MATCH_PATTERN = 12)] = 'EMPTY_MATCH_PATTERN'),
		(n[(n.NO_LINE_BREAKS_FLAGS = 13)] = 'NO_LINE_BREAKS_FLAGS'),
		(n[(n.UNREACHABLE_PATTERN = 14)] = 'UNREACHABLE_PATTERN'),
		(n[(n.IDENTIFY_TERMINATOR = 15)] = 'IDENTIFY_TERMINATOR'),
		(n[(n.CUSTOM_LINE_BREAK = 16)] = 'CUSTOM_LINE_BREAK'),
		(n[(n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17)] =
			'MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE')
})(K || (K = {}))
var ji = {
	deferDefinitionErrorsHandling: !1,
	positionTracking: 'full',
	lineTerminatorsPattern: /\n|\r\n?/g,
	lineTerminatorCharacters: [
		`
`,
		'\r',
	],
	ensureOptimizations: !1,
	safeMode: !1,
	errorMessageProvider: Ry,
	traceInitPerf: !1,
	skipValidations: !1,
	recoveryEnabled: !0,
}
Object.freeze(ji)
var Ln,
	he =
		((Ln = class {
			constructor(e, t = ji) {
				if (
					((this.lexerDefinition = e),
					(this.lexerDefinitionErrors = []),
					(this.lexerDefinitionWarning = []),
					(this.patternIdxToConfig = {}),
					(this.charCodeToPatternIdxToConfig = {}),
					(this.modes = []),
					(this.emptyGroups = {}),
					(this.trackStartLines = !0),
					(this.trackEndLines = !0),
					(this.hasCustom = !1),
					(this.canModeBeOptimized = {}),
					(this.TRACE_INIT = (i, a) => {
						if (this.traceInitPerf === !0) {
							this.traceInitIndent++
							let o = new Array(this.traceInitIndent + 1).join('	')
							this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o}--> <${i}>`)
							let { time: l, value: u } = Nu(a),
								c = l > 10 ? console.warn : console.log
							return (
								this.traceInitIndent < this.traceInitMaxIdent && c(`${o}<-- <${i}> time: ${l}ms`),
								this.traceInitIndent--,
								u
							)
						} else return a()
					}),
					typeof t == 'boolean')
				)
					throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`)
				this.config = ke({}, ji, t)
				let r = this.config.traceInitPerf
				r === !0
					? ((this.traceInitMaxIdent = 1 / 0), (this.traceInitPerf = !0))
					: typeof r == 'number' && ((this.traceInitMaxIdent = r), (this.traceInitPerf = !0)),
					(this.traceInitIndent = -1),
					this.TRACE_INIT('Lexer Constructor', () => {
						let i,
							a = !0
						this.TRACE_INIT('Lexer Config handling', () => {
							if (this.config.lineTerminatorsPattern === ji.lineTerminatorsPattern)
								this.config.lineTerminatorsPattern = vy
							else if (this.config.lineTerminatorCharacters === ji.lineTerminatorCharacters)
								throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/blog/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`)
							if (t.safeMode && t.ensureOptimizations)
								throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.')
							;(this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking)),
								(this.trackEndLines = /full/i.test(this.config.positionTracking)),
								be(e)
									? (i = { modes: { defaultMode: ne(e) }, defaultMode: Bi })
									: ((a = !1), (i = ne(e)))
						}),
							this.config.skipValidations === !1 &&
								(this.TRACE_INIT('performRuntimeChecks', () => {
									this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(
										jf(i, this.trackStartLines, this.config.lineTerminatorCharacters)
									)
								}),
								this.TRACE_INIT('performWarningRuntimeChecks', () => {
									this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(
										Kf(i, this.trackStartLines, this.config.lineTerminatorCharacters)
									)
								})),
							(i.modes = i.modes ? i.modes : {}),
							$(i.modes, (l, u) => {
								i.modes[u] = gs(l, (c) => et(c))
							})
						let o = Yi(i.modes)
						if (
							($(i.modes, (l, u) => {
								this.TRACE_INIT(`Mode: <${u}> processing`, () => {
									if (
										(this.modes.push(u),
										this.config.skipValidations === !1 &&
											this.TRACE_INIT('validatePatterns', () => {
												this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat($f(l, o))
											}),
										F(this.lexerDefinitionErrors))
									) {
										Pi(l)
										let c
										this.TRACE_INIT('analyzeTokenTypes', () => {
											c = Nf(l, {
												lineTerminatorCharacters: this.config.lineTerminatorCharacters,
												positionTracking: t.positionTracking,
												ensureOptimizations: t.ensureOptimizations,
												safeMode: t.safeMode,
												tracer: this.TRACE_INIT,
											})
										}),
											(this.patternIdxToConfig[u] = c.patternIdxToConfig),
											(this.charCodeToPatternIdxToConfig[u] = c.charCodeToPatternIdxToConfig),
											(this.emptyGroups = ke({}, this.emptyGroups, c.emptyGroups)),
											(this.hasCustom = c.hasCustom || this.hasCustom),
											(this.canModeBeOptimized[u] = c.canBeOptimized)
									}
								})
							}),
							(this.defaultMode = i.defaultMode),
							!F(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling)
						) {
							let l = I(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`)
							throw new Error(
								`Errors detected in definition of Lexer:
` + l
							)
						}
						$(this.lexerDefinitionWarning, (l) => {
							xu(l.message)
						}),
							this.TRACE_INIT('Choosing sub-methods implementations', () => {
								if (
									(xf
										? ((this.chopInput = Kc), (this.match = this.matchWithTest))
										: ((this.updateLastIndex = J), (this.match = this.matchWithExec)),
									a && (this.handleModes = J),
									this.trackStartLines === !1 && (this.computeNewColumn = Kc),
									this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = J),
									/full/i.test(this.config.positionTracking))
								)
									this.createTokenInstance = this.createFullToken
								else if (/onlyStart/i.test(this.config.positionTracking))
									this.createTokenInstance = this.createStartOnlyToken
								else if (/onlyOffset/i.test(this.config.positionTracking))
									this.createTokenInstance = this.createOffsetOnlyToken
								else
									throw Error(
										`Invalid <positionTracking> config option: "${this.config.positionTracking}"`
									)
								this.hasCustom
									? ((this.addToken = this.addTokenUsingPush),
									  (this.handlePayload = this.handlePayloadWithCustom))
									: ((this.addToken = this.addTokenUsingMemberAccess),
									  (this.handlePayload = this.handlePayloadNoCustom))
							}),
							this.TRACE_INIT('Failed Optimization Warnings', () => {
								let l = ae(this.canModeBeOptimized, (u, c, d) => (c === !1 && u.push(d), u), [])
								if (t.ensureOptimizations && !F(l))
									throw Error(`Lexer Modes: < ${l.join(', ')} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)
							}),
							this.TRACE_INIT('clearRegExpParserCache', () => {
								kf()
							}),
							this.TRACE_INIT('toFastProperties', () => {
								$u(this)
							})
					})
			}
			tokenize(e, t = this.defaultMode) {
				if (!F(this.lexerDefinitionErrors)) {
					let r = I(this.lexerDefinitionErrors, (i) => i.message).join(`-----------------------
`)
					throw new Error(
						`Unable to Tokenize because Errors detected in definition of Lexer:
` + r
					)
				}
				return this.tokenizeInternal(e, t)
			}
			tokenizeInternal(e, t) {
				let r,
					i,
					a,
					o,
					l,
					u,
					c,
					d,
					h,
					f,
					p,
					g,
					y,
					k,
					R,
					E = e,
					v = E.length,
					N = 0,
					B = 0,
					Z = this.hasCustom ? 0 : Math.floor(e.length / 10),
					Pe = new Array(Z),
					ve = [],
					Be = this.trackStartLines ? 1 : void 0,
					$e = this.trackStartLines ? 1 : void 0,
					Oe = Wf(this.emptyGroups),
					Di = this.trackStartLines,
					S = this.config.lineTerminatorsPattern,
					T = 0,
					A = [],
					C = [],
					D = [],
					O = []
				Object.freeze(O)
				let P
				function ue() {
					return A
				}
				s(ue, 'getPossiblePatternsSlow')
				function re(ie) {
					let Le = at(ie),
						nn = C[Le]
					return nn === void 0 ? O : nn
				}
				s(re, 'getPossiblePatternsOptimized')
				let H = s((ie) => {
					if (D.length === 1 && ie.tokenType.PUSH_MODE === void 0) {
						let Le = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ie)
						ve.push({
							offset: ie.startOffset,
							line: ie.startLine,
							column: ie.startColumn,
							length: ie.image.length,
							message: Le,
						})
					} else {
						D.pop()
						let Le = yi(D)
						;(A = this.patternIdxToConfig[Le]),
							(C = this.charCodeToPatternIdxToConfig[Le]),
							(T = A.length)
						let nn = this.canModeBeOptimized[Le] && this.config.safeMode === !1
						C && nn ? (P = re) : (P = ue)
					}
				}, 'pop_mode')
				function ct(ie) {
					D.push(ie),
						(C = this.charCodeToPatternIdxToConfig[ie]),
						(A = this.patternIdxToConfig[ie]),
						(T = A.length),
						(T = A.length)
					let Le = this.canModeBeOptimized[ie] && this.config.safeMode === !1
					C && Le ? (P = re) : (P = ue)
				}
				s(ct, 'push_mode'), ct.call(this, t)
				let _e,
					Vc = this.config.recoveryEnabled
				for (; N < v; ) {
					u = null
					let ie = E.charCodeAt(N),
						Le = P(ie),
						nn = Le.length
					for (r = 0; r < nn; r++) {
						_e = Le[r]
						let Re = _e.pattern
						c = null
						let Ye = _e.short
						if (
							(Ye !== !1
								? ie === Ye && (u = Re)
								: _e.isCustom === !0
								? ((R = Re.exec(E, N, Pe, Oe)),
								  R !== null ? ((u = R[0]), R.payload !== void 0 && (c = R.payload)) : (u = null))
								: (this.updateLastIndex(Re, N), (u = this.match(Re, e, N))),
							u !== null)
						) {
							if (((l = _e.longerAlt), l !== void 0)) {
								let dt = l.length
								for (a = 0; a < dt; a++) {
									let Xe = A[l[a]],
										Ct = Xe.pattern
									if (
										((d = null),
										Xe.isCustom === !0
											? ((R = Ct.exec(E, N, Pe, Oe)),
											  R !== null
													? ((o = R[0]), R.payload !== void 0 && (d = R.payload))
													: (o = null))
											: (this.updateLastIndex(Ct, N), (o = this.match(Ct, e, N))),
										o && o.length > u.length)
									) {
										;(u = o), (c = d), (_e = Xe)
										break
									}
								}
							}
							break
						}
					}
					if (u !== null) {
						if (
							((h = u.length),
							(f = _e.group),
							f !== void 0 &&
								((p = _e.tokenTypeIdx),
								(g = this.createTokenInstance(u, N, p, _e.tokenType, Be, $e, h)),
								this.handlePayload(g, c),
								f === !1 ? (B = this.addToken(Pe, B, g)) : Oe[f].push(g)),
							(e = this.chopInput(e, h)),
							(N = N + h),
							($e = this.computeNewColumn($e, h)),
							Di === !0 && _e.canLineTerminator === !0)
						) {
							let Re = 0,
								Ye,
								dt
							S.lastIndex = 0
							do (Ye = S.test(u)), Ye === !0 && ((dt = S.lastIndex - 1), Re++)
							while (Ye === !0)
							Re !== 0 &&
								((Be = Be + Re),
								($e = h - dt),
								this.updateTokenEndLineColumnLocation(g, f, dt, Re, Be, $e, h))
						}
						this.handleModes(_e, H, ct, g)
					} else {
						let Re = N,
							Ye = Be,
							dt = $e,
							Xe = Vc === !1
						for (; Xe === !1 && N < v; )
							for (e = this.chopInput(e, 1), N++, i = 0; i < T; i++) {
								let Ct = A[i],
									Qs = Ct.pattern,
									jc = Ct.short
								if (
									(jc !== !1
										? E.charCodeAt(N) === jc && (Xe = !0)
										: Ct.isCustom === !0
										? (Xe = Qs.exec(E, N, Pe, Oe) !== null)
										: (this.updateLastIndex(Qs, N), (Xe = Qs.exec(e) !== null)),
									Xe === !0)
								)
									break
							}
						if (
							((y = N - Re),
							($e = this.computeNewColumn($e, y)),
							(k = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(
								E,
								Re,
								y,
								Ye,
								dt
							)),
							ve.push({ offset: Re, line: Ye, column: dt, length: y, message: k }),
							Vc === !1)
						)
							break
					}
				}
				return this.hasCustom || (Pe.length = B), { tokens: Pe, groups: Oe, errors: ve }
			}
			handleModes(e, t, r, i) {
				if (e.pop === !0) {
					let a = e.push
					t(i), a !== void 0 && r.call(this, a)
				} else e.push !== void 0 && r.call(this, e.push)
			}
			chopInput(e, t) {
				return e.substring(t)
			}
			updateLastIndex(e, t) {
				e.lastIndex = t
			}
			updateTokenEndLineColumnLocation(e, t, r, i, a, o, l) {
				let u, c
				t !== void 0 &&
					((u = r === l - 1),
					(c = u ? -1 : 0),
					(i === 1 && u === !0) || ((e.endLine = a + c), (e.endColumn = o - 1 + -c)))
			}
			computeNewColumn(e, t) {
				return e + t
			}
			createOffsetOnlyToken(e, t, r, i) {
				return { image: e, startOffset: t, tokenTypeIdx: r, tokenType: i }
			}
			createStartOnlyToken(e, t, r, i, a, o) {
				return {
					image: e,
					startOffset: t,
					startLine: a,
					startColumn: o,
					tokenTypeIdx: r,
					tokenType: i,
				}
			}
			createFullToken(e, t, r, i, a, o, l) {
				return {
					image: e,
					startOffset: t,
					endOffset: t + l - 1,
					startLine: a,
					endLine: a,
					startColumn: o,
					endColumn: o + l - 1,
					tokenTypeIdx: r,
					tokenType: i,
				}
			}
			addTokenUsingPush(e, t, r) {
				return e.push(r), t
			}
			addTokenUsingMemberAccess(e, t, r) {
				return (e[t] = r), t++, t
			}
			handlePayloadNoCustom(e, t) {}
			handlePayloadWithCustom(e, t) {
				t !== null && (e.payload = t)
			}
			matchWithTest(e, t, r) {
				return e.test(t) === !0 ? t.substring(r, e.lastIndex) : null
			}
			matchWithExec(e, t) {
				let r = e.exec(t)
				return r !== null ? r[0] : null
			}
		}),
		s(Ln, 'Lexer'),
		Ln)
he.SKIPPED =
	'This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.'
he.NA = /NOT_APPLICABLE/
function Lt(n) {
	return _u(n) ? n.LABEL : n.name
}
s(Lt, 'tokenLabel')
function _u(n) {
	return Se(n.LABEL) && n.LABEL !== ''
}
s(_u, 'hasTokenLabel')
var Ay = 'parent',
	qc = 'categories',
	Yc = 'label',
	Xc = 'group',
	Jc = 'push_mode',
	Qc = 'pop_mode',
	Zc = 'longer_alt',
	ed = 'line_breaks',
	td = 'start_chars_hint'
function Du(n) {
	return rp(n)
}
s(Du, 'createToken')
function rp(n) {
	let e = n.pattern,
		t = {}
	if (((t.name = n.name), et(e) || (t.PATTERN = e), L(n, Ay)))
		throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`
	return (
		L(n, qc) && (t.CATEGORIES = n[qc]),
		Pi([t]),
		L(n, Yc) && (t.LABEL = n[Yc]),
		L(n, Xc) && (t.GROUP = n[Xc]),
		L(n, Qc) && (t.POP_MODE = n[Qc]),
		L(n, Jc) && (t.PUSH_MODE = n[Jc]),
		L(n, Zc) && (t.LONGER_ALT = n[Zc]),
		L(n, ed) && (t.LINE_BREAKS = n[ed]),
		L(n, td) && (t.START_CHARS_HINT = n[td]),
		t
	)
}
s(rp, 'createTokenInternal')
var mt = Du({ name: 'EOF', pattern: he.NA })
Pi([mt])
function Us(n, e, t, r, i, a, o, l) {
	return {
		image: e,
		startOffset: t,
		endOffset: r,
		startLine: i,
		endLine: a,
		startColumn: o,
		endColumn: l,
		tokenTypeIdx: n.tokenTypeIdx,
		tokenType: n,
	}
}
s(Us, 'createTokenInstance')
function Mu(n, e) {
	return wi(n, e)
}
s(Mu, 'tokenMatcher')
var sn = {
	buildMismatchTokenMessage({ expected: n, actual: e, previous: t, ruleName: r }) {
		return `Expecting ${
			_u(n) ? `--> ${Lt(n)} <--` : `token of type --> ${n.name} <--`
		} but found --> '${e.image}' <--`
	},
	buildNotAllInputParsedMessage({ firstRedundant: n, ruleName: e }) {
		return 'Redundant input, expecting EOF but found: ' + n.image
	},
	buildNoViableAltMessage({
		expectedPathsPerAlt: n,
		actual: e,
		previous: t,
		customUserDescription: r,
		ruleName: i,
	}) {
		let a = 'Expecting: ',
			o =
				`
but found: '` +
				Fe(e).image +
				"'"
		if (r) return a + r + o
		{
			let l = ae(n, (d, h) => d.concat(h), []),
				u = I(l, (d) => `[${I(d, (h) => Lt(h)).join(', ')}]`),
				c = `one of these possible Token sequences:
${I(u, (d, h) => `  ${h + 1}. ${d}`).join(`
`)}`
			return a + c + o
		}
	},
	buildEarlyExitMessage({
		expectedIterationPaths: n,
		actual: e,
		customUserDescription: t,
		ruleName: r,
	}) {
		let i = 'Expecting: ',
			a =
				`
but found: '` +
				Fe(e).image +
				"'"
		if (t) return i + t + a
		{
			let o = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${I(n, (l) => `[${I(l, (u) => Lt(u)).join(',')}]`).join(' ,')}>`
			return i + o + a
		}
	},
}
Object.freeze(sn)
var Ey = {
		buildRuleNotFoundError(n, e) {
			return (
				'Invalid grammar, reference to a rule which is not defined: ->' +
				e.nonTerminalName +
				`<-
inside top level rule: ->` +
				n.name +
				'<-'
			)
		},
	},
	$t = {
		buildDuplicateFoundError(n, e) {
			function t(d) {
				return d instanceof G ? d.terminalType.name : d instanceof se ? d.nonTerminalName : ''
			}
			s(t, 'getExtraProductionArgument')
			let r = n.name,
				i = Fe(e),
				a = i.idx,
				o = De(i),
				l = t(i),
				u = a > 0,
				c = `->${o}${u ? a : ''}<- ${l ? `with argument: ->${l}<-` : ''}
                  appears more than once (${
										e.length
									} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `
			return (
				(c = c.replace(/[ \t]+/g, ' ')),
				(c = c.replace(
					/\s\s+/g,
					`
`
				)),
				c
			)
		},
		buildNamespaceConflictError(n) {
			return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`
		},
		buildAlternationPrefixAmbiguityError(n) {
			let e = I(n.prefixPath, (r) => Lt(r)).join(', '),
				t = n.alternation.idx === 0 ? '' : n.alternation.idx
			return `Ambiguous alternatives: <${n.ambiguityIndices.join(
				' ,'
			)}> due to common lookahead prefix
in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/blog/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`
		},
		buildAlternationAmbiguityError(n) {
			let e = I(n.prefixPath, (i) => Lt(i)).join(', '),
				t = n.alternation.idx === 0 ? '' : n.alternation.idx,
				r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(
					' ,'
				)}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`
			return (
				(r =
					r +
					`See: https://chevrotain.io/docs/blog/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`),
				r
			)
		},
		buildEmptyRepetitionError(n) {
			let e = De(n.repetition)
			return (
				n.repetition.idx !== 0 && (e += n.repetition.idx),
				`The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`
			)
		},
		buildTokenNameError(n) {
			return 'deprecated'
		},
		buildEmptyAlternationError(n) {
			return `Ambiguous empty alternative: <${n.emptyChoiceIdx + 1}> in <OR${
				n.alternation.idx
			}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`
		},
		buildTooManyAlternativesError(n) {
			return `An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length + 1} alternatives.`
		},
		buildLeftRecursionError(n) {
			let e = n.topLevelRule.name,
				t = I(n.leftRecursionPath, (i) => i.name),
				r = `${e} --> ${t.concat([e]).join(' --> ')}`
			return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`
		},
		buildInvalidRuleNameError(n) {
			return 'deprecated'
		},
		buildDuplicateRuleNameError(n) {
			let e
			return (
				n.topLevelRule instanceof $i ? (e = n.topLevelRule.name) : (e = n.topLevelRule),
				`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`
			)
		},
	}
function ip(n, e) {
	let t = new ky(n, e)
	return t.resolveRefs(), t.errors
}
s(ip, 'resolveGrammar')
var bn,
	ky =
		((bn = class extends Li {
			constructor(e, t) {
				super(), (this.nameToTopRule = e), (this.errMsgProvider = t), (this.errors = [])
			}
			resolveRefs() {
				$(Q(this.nameToTopRule), (e) => {
					;(this.currTopLevel = e), e.accept(this)
				})
			}
			visitNonTerminal(e) {
				let t = this.nameToTopRule[e.nonTerminalName]
				if (t) e.referencedRule = t
				else {
					let r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e)
					this.errors.push({
						message: r,
						type: oe.UNRESOLVED_SUBRULE_REF,
						ruleName: this.currTopLevel.name,
						unresolvedRefName: e.nonTerminalName,
					})
				}
			}
		}),
		s(bn, 'GastRefResolverVisitor'),
		bn),
	wn,
	Sy =
		((wn = class extends Ms {
			constructor(e, t) {
				super(),
					(this.topProd = e),
					(this.path = t),
					(this.possibleTokTypes = []),
					(this.nextProductionName = ''),
					(this.nextProductionOccurrence = 0),
					(this.found = !1),
					(this.isAtEndOfPath = !1)
			}
			startWalking() {
				if (((this.found = !1), this.path.ruleStack[0] !== this.topProd.name))
					throw Error("The path does not start with the walker's top Rule!")
				return (
					(this.ruleStack = ne(this.path.ruleStack).reverse()),
					(this.occurrenceStack = ne(this.path.occurrenceStack).reverse()),
					this.ruleStack.pop(),
					this.occurrenceStack.pop(),
					this.updateExpectedNext(),
					this.walk(this.topProd),
					this.possibleTokTypes
				)
			}
			walk(e, t = []) {
				this.found || super.walk(e, t)
			}
			walkProdRef(e, t, r) {
				if (
					e.referencedRule.name === this.nextProductionName &&
					e.idx === this.nextProductionOccurrence
				) {
					let i = t.concat(r)
					this.updateExpectedNext(), this.walk(e.referencedRule, i)
				}
			}
			updateExpectedNext() {
				F(this.ruleStack)
					? ((this.nextProductionName = ''),
					  (this.nextProductionOccurrence = 0),
					  (this.isAtEndOfPath = !0))
					: ((this.nextProductionName = this.ruleStack.pop()),
					  (this.nextProductionOccurrence = this.occurrenceStack.pop()))
			}
		}),
		s(wn, 'AbstractNextPossibleTokensWalker'),
		wn),
	Pn,
	Cy =
		((Pn = class extends Sy {
			constructor(e, t) {
				super(e, t),
					(this.path = t),
					(this.nextTerminalName = ''),
					(this.nextTerminalOccurrence = 0),
					(this.nextTerminalName = this.path.lastTok.name),
					(this.nextTerminalOccurrence = this.path.lastTokOccurrence)
			}
			walkTerminal(e, t, r) {
				if (
					this.isAtEndOfPath &&
					e.terminalType.name === this.nextTerminalName &&
					e.idx === this.nextTerminalOccurrence &&
					!this.found
				) {
					let i = t.concat(r),
						a = new me({ definition: i })
					;(this.possibleTokTypes = bi(a)), (this.found = !0)
				}
			}
		}),
		s(Pn, 'NextAfterTokenWalker'),
		Pn),
	On,
	Gs =
		((On = class extends Ms {
			constructor(e, t) {
				super(),
					(this.topRule = e),
					(this.occurrence = t),
					(this.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 })
			}
			startWalking() {
				return this.walk(this.topRule), this.result
			}
		}),
		s(On, 'AbstractNextTerminalAfterProductionWalker'),
		On),
	_n,
	Iy =
		((_n = class extends Gs {
			walkMany(e, t, r) {
				if (e.idx === this.occurrence) {
					let i = Fe(t.concat(r))
					;(this.result.isEndOfRule = i === void 0),
						i instanceof G &&
							((this.result.token = i.terminalType), (this.result.occurrence = i.idx))
				} else super.walkMany(e, t, r)
			}
		}),
		s(_n, 'NextTerminalAfterManyWalker'),
		_n),
	Dn,
	nd =
		((Dn = class extends Gs {
			walkManySep(e, t, r) {
				if (e.idx === this.occurrence) {
					let i = Fe(t.concat(r))
					;(this.result.isEndOfRule = i === void 0),
						i instanceof G &&
							((this.result.token = i.terminalType), (this.result.occurrence = i.idx))
				} else super.walkManySep(e, t, r)
			}
		}),
		s(Dn, 'NextTerminalAfterManySepWalker'),
		Dn),
	Mn,
	xy =
		((Mn = class extends Gs {
			walkAtLeastOne(e, t, r) {
				if (e.idx === this.occurrence) {
					let i = Fe(t.concat(r))
					;(this.result.isEndOfRule = i === void 0),
						i instanceof G &&
							((this.result.token = i.terminalType), (this.result.occurrence = i.idx))
				} else super.walkAtLeastOne(e, t, r)
			}
		}),
		s(Mn, 'NextTerminalAfterAtLeastOneWalker'),
		Mn),
	Fn,
	rd =
		((Fn = class extends Gs {
			walkAtLeastOneSep(e, t, r) {
				if (e.idx === this.occurrence) {
					let i = Fe(t.concat(r))
					;(this.result.isEndOfRule = i === void 0),
						i instanceof G &&
							((this.result.token = i.terminalType), (this.result.occurrence = i.idx))
				} else super.walkAtLeastOneSep(e, t, r)
			}
		}),
		s(Fn, 'NextTerminalAfterAtLeastOneSepWalker'),
		Fn)
function Ya(n, e, t = []) {
	t = ne(t)
	let r = [],
		i = 0
	function a(l) {
		return l.concat(ee(n, i + 1))
	}
	s(a, 'remainingPathWith')
	function o(l) {
		let u = Ya(a(l), e, t)
		return r.concat(u)
	}
	for (s(o, 'getAlternativesForProd'); t.length < e && i < n.length; ) {
		let l = n[i]
		if (l instanceof me || l instanceof se) return o(l.definition)
		if (l instanceof te) r = o(l.definition)
		else if (l instanceof xe) {
			let u = l.definition.concat([new j({ definition: l.definition })])
			return o(u)
		} else if (l instanceof Ne) {
			let u = [
				new me({ definition: l.definition }),
				new j({ definition: [new G({ terminalType: l.separator })].concat(l.definition) }),
			]
			return o(u)
		} else if (l instanceof ye) {
			let u = l.definition.concat([
				new j({ definition: [new G({ terminalType: l.separator })].concat(l.definition) }),
			])
			r = o(u)
		} else if (l instanceof j) {
			let u = l.definition.concat([new j({ definition: l.definition })])
			r = o(u)
		} else {
			if (l instanceof Te)
				return (
					$(l.definition, (u) => {
						F(u.definition) === !1 && (r = o(u.definition))
					}),
					r
				)
			if (l instanceof G) t.push(l.terminalType)
			else throw Error('non exhaustive match')
		}
		i++
	}
	return r.push({ partialPath: t, suffixDef: ee(n, i) }), r
}
s(Ya, 'possiblePathsFrom')
function Fu(n, e, t, r) {
	let i = 'EXIT_NONE_TERMINAL',
		a = [i],
		o = 'EXIT_ALTERNATIVE',
		l = !1,
		u = e.length,
		c = u - r - 1,
		d = [],
		h = []
	for (h.push({ idx: -1, def: n, ruleStack: [], occurrenceStack: [] }); !F(h); ) {
		let f = h.pop()
		if (f === o) {
			l && yi(h).idx <= c && h.pop()
			continue
		}
		let p = f.def,
			g = f.idx,
			y = f.ruleStack,
			k = f.occurrenceStack
		if (F(p)) continue
		let R = p[0]
		if (R === i) {
			let E = { idx: g, def: ee(p), ruleStack: Xi(y), occurrenceStack: Xi(k) }
			h.push(E)
		} else if (R instanceof G)
			if (g < u - 1) {
				let E = g + 1,
					v = e[E]
				if (t(v, R.terminalType)) {
					let N = { idx: E, def: ee(p), ruleStack: y, occurrenceStack: k }
					h.push(N)
				}
			} else if (g === u - 1)
				d.push({
					nextTokenType: R.terminalType,
					nextTokenOccurrence: R.idx,
					ruleStack: y,
					occurrenceStack: k,
				}),
					(l = !0)
			else throw Error('non exhaustive match')
		else if (R instanceof se) {
			let E = ne(y)
			E.push(R.nonTerminalName)
			let v = ne(k)
			v.push(R.idx)
			let N = { idx: g, def: R.definition.concat(a, ee(p)), ruleStack: E, occurrenceStack: v }
			h.push(N)
		} else if (R instanceof te) {
			let E = { idx: g, def: ee(p), ruleStack: y, occurrenceStack: k }
			h.push(E), h.push(o)
			let v = { idx: g, def: R.definition.concat(ee(p)), ruleStack: y, occurrenceStack: k }
			h.push(v)
		} else if (R instanceof xe) {
			let E = new j({ definition: R.definition, idx: R.idx }),
				v = R.definition.concat([E], ee(p)),
				N = { idx: g, def: v, ruleStack: y, occurrenceStack: k }
			h.push(N)
		} else if (R instanceof Ne) {
			let E = new G({ terminalType: R.separator }),
				v = new j({ definition: [E].concat(R.definition), idx: R.idx }),
				N = R.definition.concat([v], ee(p)),
				B = { idx: g, def: N, ruleStack: y, occurrenceStack: k }
			h.push(B)
		} else if (R instanceof ye) {
			let E = { idx: g, def: ee(p), ruleStack: y, occurrenceStack: k }
			h.push(E), h.push(o)
			let v = new G({ terminalType: R.separator }),
				N = new j({ definition: [v].concat(R.definition), idx: R.idx }),
				B = R.definition.concat([N], ee(p)),
				Z = { idx: g, def: B, ruleStack: y, occurrenceStack: k }
			h.push(Z)
		} else if (R instanceof j) {
			let E = { idx: g, def: ee(p), ruleStack: y, occurrenceStack: k }
			h.push(E), h.push(o)
			let v = new j({ definition: R.definition, idx: R.idx }),
				N = R.definition.concat([v], ee(p)),
				B = { idx: g, def: N, ruleStack: y, occurrenceStack: k }
			h.push(B)
		} else if (R instanceof Te)
			for (let E = R.definition.length - 1; E >= 0; E--) {
				let v = R.definition[E],
					N = { idx: g, def: v.definition.concat(ee(p)), ruleStack: y, occurrenceStack: k }
				h.push(N), h.push(o)
			}
		else if (R instanceof me)
			h.push({ idx: g, def: R.definition.concat(ee(p)), ruleStack: y, occurrenceStack: k })
		else if (R instanceof $i) h.push(ap(R, g, y, k))
		else throw Error('non exhaustive match')
	}
	return d
}
s(Fu, 'nextPossibleTokensAfter')
function ap(n, e, t, r) {
	let i = ne(t)
	i.push(n.name)
	let a = ne(r)
	return a.push(1), { idx: e, def: n.definition, ruleStack: i, occurrenceStack: a }
}
s(ap, 'expandTopLevelRule')
var V
;(function (n) {
	;(n[(n.OPTION = 0)] = 'OPTION'),
		(n[(n.REPETITION = 1)] = 'REPETITION'),
		(n[(n.REPETITION_MANDATORY = 2)] = 'REPETITION_MANDATORY'),
		(n[(n.REPETITION_MANDATORY_WITH_SEPARATOR = 3)] = 'REPETITION_MANDATORY_WITH_SEPARATOR'),
		(n[(n.REPETITION_WITH_SEPARATOR = 4)] = 'REPETITION_WITH_SEPARATOR'),
		(n[(n.ALTERNATION = 5)] = 'ALTERNATION')
})(V || (V = {}))
function Bs(n) {
	if (n instanceof te || n === 'Option') return V.OPTION
	if (n instanceof j || n === 'Repetition') return V.REPETITION
	if (n instanceof xe || n === 'RepetitionMandatory') return V.REPETITION_MANDATORY
	if (n instanceof Ne || n === 'RepetitionMandatoryWithSeparator')
		return V.REPETITION_MANDATORY_WITH_SEPARATOR
	if (n instanceof ye || n === 'RepetitionWithSeparator') return V.REPETITION_WITH_SEPARATOR
	if (n instanceof Te || n === 'Alternation') return V.ALTERNATION
	throw Error('non exhaustive match')
}
s(Bs, 'getProdType')
function lo(n) {
	let { occurrence: e, rule: t, prodType: r, maxLookahead: i } = n,
		a = Bs(r)
	return a === V.ALTERNATION ? ya(e, t, i) : Ta(e, t, a, i)
}
s(lo, 'getLookaheadPaths')
function sp(n, e, t, r, i, a) {
	let o = ya(n, e, t),
		l = Gu(o) ? ta : wi
	return a(o, r, l, i)
}
s(sp, 'buildLookaheadFuncForOr')
function op(n, e, t, r, i, a) {
	let o = Ta(n, e, i, t),
		l = Gu(o) ? ta : wi
	return a(o[0], l, r)
}
s(op, 'buildLookaheadFuncForOptionalProd')
function lp(n, e, t, r) {
	let i = n.length,
		a = Me(n, (o) => Me(o, (l) => l.length === 1))
	if (e)
		return function (o) {
			let l = I(o, (u) => u.GATE)
			for (let u = 0; u < i; u++) {
				let c = n[u],
					d = c.length,
					h = l[u]
				if (!(h !== void 0 && h.call(this) === !1))
					e: for (let f = 0; f < d; f++) {
						let p = c[f],
							g = p.length
						for (let y = 0; y < g; y++) {
							let k = this.LA(y + 1)
							if (t(k, p[y]) === !1) continue e
						}
						return u
					}
			}
		}
	if (a && !r) {
		let o = I(n, (u) => we(u)),
			l = ae(
				o,
				(u, c, d) => (
					$(c, (h) => {
						L(u, h.tokenTypeIdx) || (u[h.tokenTypeIdx] = d),
							$(h.categoryMatches, (f) => {
								L(u, f) || (u[f] = d)
							})
					}),
					u
				),
				{}
			)
		return function () {
			let u = this.LA(1)
			return l[u.tokenTypeIdx]
		}
	} else
		return function () {
			for (let o = 0; o < i; o++) {
				let l = n[o],
					u = l.length
				e: for (let c = 0; c < u; c++) {
					let d = l[c],
						h = d.length
					for (let f = 0; f < h; f++) {
						let p = this.LA(f + 1)
						if (t(p, d[f]) === !1) continue e
					}
					return o
				}
			}
		}
}
s(lp, 'buildAlternativesLookAheadFunc')
function up(n, e, t) {
	let r = Me(n, (a) => a.length === 1),
		i = n.length
	if (r && !t) {
		let a = we(n)
		if (a.length === 1 && F(a[0].categoryMatches)) {
			let o = a[0].tokenTypeIdx
			return function () {
				return this.LA(1).tokenTypeIdx === o
			}
		} else {
			let o = ae(
				a,
				(l, u, c) => (
					(l[u.tokenTypeIdx] = !0),
					$(u.categoryMatches, (d) => {
						l[d] = !0
					}),
					l
				),
				[]
			)
			return function () {
				let l = this.LA(1)
				return o[l.tokenTypeIdx] === !0
			}
		}
	} else
		return function () {
			e: for (let a = 0; a < i; a++) {
				let o = n[a],
					l = o.length
				for (let u = 0; u < l; u++) {
					let c = this.LA(u + 1)
					if (e(c, o[u]) === !1) continue e
				}
				return !0
			}
			return !1
		}
}
s(up, 'buildSingleAlternativeLookaheadFunction')
var Un,
	Ny =
		((Un = class extends Ms {
			constructor(e, t, r) {
				super(), (this.topProd = e), (this.targetOccurrence = t), (this.targetProdType = r)
			}
			startWalking() {
				return this.walk(this.topProd), this.restDef
			}
			checkIsTarget(e, t, r, i) {
				return e.idx === this.targetOccurrence && this.targetProdType === t
					? ((this.restDef = r.concat(i)), !0)
					: !1
			}
			walkOption(e, t, r) {
				this.checkIsTarget(e, V.OPTION, t, r) || super.walkOption(e, t, r)
			}
			walkAtLeastOne(e, t, r) {
				this.checkIsTarget(e, V.REPETITION_MANDATORY, t, r) || super.walkOption(e, t, r)
			}
			walkAtLeastOneSep(e, t, r) {
				this.checkIsTarget(e, V.REPETITION_MANDATORY_WITH_SEPARATOR, t, r) ||
					super.walkOption(e, t, r)
			}
			walkMany(e, t, r) {
				this.checkIsTarget(e, V.REPETITION, t, r) || super.walkOption(e, t, r)
			}
			walkManySep(e, t, r) {
				this.checkIsTarget(e, V.REPETITION_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r)
			}
		}),
		s(Un, 'RestDefinitionFinderWalker'),
		Un),
	Gn,
	cp =
		((Gn = class extends Li {
			constructor(e, t, r) {
				super(),
					(this.targetOccurrence = e),
					(this.targetProdType = t),
					(this.targetRef = r),
					(this.result = [])
			}
			checkIsTarget(e, t) {
				e.idx === this.targetOccurrence &&
					this.targetProdType === t &&
					(this.targetRef === void 0 || e === this.targetRef) &&
					(this.result = e.definition)
			}
			visitOption(e) {
				this.checkIsTarget(e, V.OPTION)
			}
			visitRepetition(e) {
				this.checkIsTarget(e, V.REPETITION)
			}
			visitRepetitionMandatory(e) {
				this.checkIsTarget(e, V.REPETITION_MANDATORY)
			}
			visitRepetitionMandatoryWithSeparator(e) {
				this.checkIsTarget(e, V.REPETITION_MANDATORY_WITH_SEPARATOR)
			}
			visitRepetitionWithSeparator(e) {
				this.checkIsTarget(e, V.REPETITION_WITH_SEPARATOR)
			}
			visitAlternation(e) {
				this.checkIsTarget(e, V.ALTERNATION)
			}
		}),
		s(Gn, 'InsideDefinitionFinderVisitor'),
		Gn)
function uo(n) {
	let e = new Array(n)
	for (let t = 0; t < n; t++) e[t] = []
	return e
}
s(uo, 'initializeArrayOfArrays')
function La(n) {
	let e = ['']
	for (let t = 0; t < n.length; t++) {
		let r = n[t],
			i = []
		for (let a = 0; a < e.length; a++) {
			let o = e[a]
			i.push(o + '_' + r.tokenTypeIdx)
			for (let l = 0; l < r.categoryMatches.length; l++) {
				let u = '_' + r.categoryMatches[l]
				i.push(o + u)
			}
		}
		e = i
	}
	return e
}
s(La, 'pathToHashKeys')
function dp(n, e, t) {
	for (let r = 0; r < n.length; r++) {
		if (r === t) continue
		let i = n[r]
		for (let a = 0; a < e.length; a++) {
			let o = e[a]
			if (i[o] === !0) return !1
		}
	}
	return !0
}
s(dp, 'isUniquePrefixHash')
function Uu(n, e) {
	let t = I(n, (o) => Ya([o], 1)),
		r = uo(t.length),
		i = I(t, (o) => {
			let l = {}
			return (
				$(o, (u) => {
					let c = La(u.partialPath)
					$(c, (d) => {
						l[d] = !0
					})
				}),
				l
			)
		}),
		a = t
	for (let o = 1; o <= e; o++) {
		let l = a
		a = uo(l.length)
		for (let u = 0; u < l.length; u++) {
			let c = l[u]
			for (let d = 0; d < c.length; d++) {
				let h = c[d].partialPath,
					f = c[d].suffixDef,
					p = La(h)
				if (dp(i, p, u) || F(f) || h.length === e) {
					let g = r[u]
					if (Xa(g, h) === !1) {
						g.push(h)
						for (let y = 0; y < p.length; y++) {
							let k = p[y]
							i[u][k] = !0
						}
					}
				} else {
					let g = Ya(f, o + 1, h)
					;(a[u] = a[u].concat(g)),
						$(g, (y) => {
							let k = La(y.partialPath)
							$(k, (R) => {
								i[u][R] = !0
							})
						})
				}
			}
		}
	}
	return r
}
s(Uu, 'lookAheadSequenceFromAlternatives')
function ya(n, e, t, r) {
	let i = new cp(n, V.ALTERNATION, r)
	return e.accept(i), Uu(i.result, t)
}
s(ya, 'getLookaheadPathsForOr')
function Ta(n, e, t, r) {
	let i = new cp(n, t)
	e.accept(i)
	let a = i.result,
		o = new Ny(e, n, t).startWalking(),
		l = new me({ definition: a }),
		u = new me({ definition: o })
	return Uu([l, u], r)
}
s(Ta, 'getLookaheadPathsForOptionalProd')
function Xa(n, e) {
	e: for (let t = 0; t < n.length; t++) {
		let r = n[t]
		if (r.length === e.length) {
			for (let i = 0; i < r.length; i++) {
				let a = e[i],
					o = r[i]
				if (!(a === o || o.categoryMatchesMap[a.tokenTypeIdx] !== void 0)) continue e
			}
			return !0
		}
	}
	return !1
}
s(Xa, 'containsPath')
function hp(n, e) {
	return (
		n.length < e.length &&
		Me(n, (t, r) => {
			let i = e[r]
			return t === i || i.categoryMatchesMap[t.tokenTypeIdx]
		})
	)
}
s(hp, 'isStrictPrefixOfPath')
function Gu(n) {
	return Me(n, (e) => Me(e, (t) => Me(t, (r) => F(r.categoryMatches))))
}
s(Gu, 'areTokenCategoriesNotUsed')
function fp(n) {
	let e = n.lookaheadStrategy.validate({
		rules: n.rules,
		tokenTypes: n.tokenTypes,
		grammarName: n.grammarName,
	})
	return I(e, (t) => Object.assign({ type: oe.CUSTOM_LOOKAHEAD_VALIDATION }, t))
}
s(fp, 'validateLookahead')
function pp(n, e, t, r) {
	let i = Ee(n, (u) => mp(u, t)),
		a = Cp(n, e, t),
		o = Ee(n, (u) => Ap(u, t)),
		l = Ee(n, (u) => yp(u, n, r, t))
	return i.concat(a, o, l)
}
s(pp, 'validateGrammar')
function mp(n, e) {
	let t = new $y()
	n.accept(t)
	let r = t.allProductions,
		i = oy(r, gp),
		a = Ue(i, (o) => o.length > 1)
	return I(Q(a), (o) => {
		let l = Fe(o),
			u = e.buildDuplicateFoundError(n, o),
			c = De(l),
			d = {
				message: u,
				type: oe.DUPLICATE_PRODUCTIONS,
				ruleName: n.name,
				dslName: c,
				occurrence: l.idx,
			},
			h = Bu(l)
		return h && (d.parameter = h), d
	})
}
s(mp, 'validateDuplicateProductions')
function gp(n) {
	return `${De(n)}_#_${n.idx}_#_${Bu(n)}`
}
s(gp, 'identifyProductionForDuplicates')
function Bu(n) {
	return n instanceof G ? n.terminalType.name : n instanceof se ? n.nonTerminalName : ''
}
s(Bu, 'getExtraProductionArgument')
var Bn,
	$y =
		((Bn = class extends Li {
			constructor() {
				super(...arguments), (this.allProductions = [])
			}
			visitNonTerminal(e) {
				this.allProductions.push(e)
			}
			visitOption(e) {
				this.allProductions.push(e)
			}
			visitRepetitionWithSeparator(e) {
				this.allProductions.push(e)
			}
			visitRepetitionMandatory(e) {
				this.allProductions.push(e)
			}
			visitRepetitionMandatoryWithSeparator(e) {
				this.allProductions.push(e)
			}
			visitRepetition(e) {
				this.allProductions.push(e)
			}
			visitAlternation(e) {
				this.allProductions.push(e)
			}
			visitTerminal(e) {
				this.allProductions.push(e)
			}
		}),
		s(Bn, 'OccurrenceValidationCollector'),
		Bn)
function yp(n, e, t, r) {
	let i = []
	if (ae(e, (a, o) => (o.name === n.name ? a + 1 : a), 0) > 1) {
		let a = r.buildDuplicateRuleNameError({ topLevelRule: n, grammarName: t })
		i.push({ message: a, type: oe.DUPLICATE_RULE_NAME, ruleName: n.name })
	}
	return i
}
s(yp, 'validateRuleDoesNotAlreadyExist')
function Tp(n, e, t) {
	let r = [],
		i
	return (
		le(e, n) ||
			((i = `Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `),
			r.push({ message: i, type: oe.INVALID_RULE_OVERRIDE, ruleName: n })),
		r
	)
}
s(Tp, 'validateRuleIsOverridden')
function Vu(n, e, t, r = []) {
	let i = [],
		a = zi(e.definition)
	if (F(a)) return []
	{
		let o = n.name
		le(a, n) &&
			i.push({
				message: t.buildLeftRecursionError({ topLevelRule: n, leftRecursionPath: r }),
				type: oe.LEFT_RECURSION,
				ruleName: o,
			})
		let l = ys(a, r.concat([n])),
			u = Ee(l, (c) => {
				let d = ne(r)
				return d.push(c), Vu(n, c, t, d)
			})
		return i.concat(u)
	}
}
s(Vu, 'validateNoLeftRecursion')
function zi(n) {
	let e = []
	if (F(n)) return e
	let t = Fe(n)
	if (t instanceof se) e.push(t.referencedRule)
	else if (
		t instanceof me ||
		t instanceof te ||
		t instanceof xe ||
		t instanceof Ne ||
		t instanceof ye ||
		t instanceof j
	)
		e = e.concat(zi(t.definition))
	else if (t instanceof Te) e = we(I(t.definition, (a) => zi(a.definition)))
	else if (!(t instanceof G)) throw Error('non exhaustive match')
	let r = ea(t),
		i = n.length > 1
	if (r && i) {
		let a = ee(n)
		return e.concat(zi(a))
	} else return e
}
s(zi, 'getFirstNoneTerminal')
var Vn,
	ju =
		((Vn = class extends Li {
			constructor() {
				super(...arguments), (this.alternations = [])
			}
			visitAlternation(e) {
				this.alternations.push(e)
			}
		}),
		s(Vn, 'OrCollector'),
		Vn)
function vp(n, e) {
	let t = new ju()
	n.accept(t)
	let r = t.alternations
	return Ee(r, (i) => {
		let a = Xi(i.definition)
		return Ee(a, (o, l) => {
			let u = Fu([o], [], wi, 1)
			return F(u)
				? [
						{
							message: e.buildEmptyAlternationError({
								topLevelRule: n,
								alternation: i,
								emptyChoiceIdx: l,
							}),
							type: oe.NONE_LAST_EMPTY_ALT,
							ruleName: n.name,
							occurrence: i.idx,
							alternative: l + 1,
						},
				  ]
				: []
		})
	})
}
s(vp, 'validateEmptyOrAlternative')
function Rp(n, e, t) {
	let r = new ju()
	n.accept(r)
	let i = r.alternations
	return (
		(i = gs(i, (a) => a.ignoreAmbiguities === !0)),
		Ee(i, (a) => {
			let o = a.idx,
				l = a.maxLookahead || e,
				u = ya(o, n, l, a),
				c = kp(u, a, n, t),
				d = Sp(u, a, n, t)
			return c.concat(d)
		})
	)
}
s(Rp, 'validateAmbiguousAlternationAlternatives')
var jn,
	Ly =
		((jn = class extends Li {
			constructor() {
				super(...arguments), (this.allProductions = [])
			}
			visitRepetitionWithSeparator(e) {
				this.allProductions.push(e)
			}
			visitRepetitionMandatory(e) {
				this.allProductions.push(e)
			}
			visitRepetitionMandatoryWithSeparator(e) {
				this.allProductions.push(e)
			}
			visitRepetition(e) {
				this.allProductions.push(e)
			}
		}),
		s(jn, 'RepetitionCollector'),
		jn)
function Ap(n, e) {
	let t = new ju()
	n.accept(t)
	let r = t.alternations
	return Ee(r, (i) =>
		i.definition.length > 255
			? [
					{
						message: e.buildTooManyAlternativesError({ topLevelRule: n, alternation: i }),
						type: oe.TOO_MANY_ALTS,
						ruleName: n.name,
						occurrence: i.idx,
					},
			  ]
			: []
	)
}
s(Ap, 'validateTooManyAlts')
function Ep(n, e, t) {
	let r = []
	return (
		$(n, (i) => {
			let a = new Ly()
			i.accept(a)
			let o = a.allProductions
			$(o, (l) => {
				let u = Bs(l),
					c = l.maxLookahead || e,
					d = l.idx,
					h = Ta(d, i, u, c)[0]
				if (F(we(h))) {
					let f = t.buildEmptyRepetitionError({ topLevelRule: i, repetition: l })
					r.push({ message: f, type: oe.NO_NON_EMPTY_LOOKAHEAD, ruleName: i.name })
				}
			})
		}),
		r
	)
}
s(Ep, 'validateSomeNonEmptyLookaheadPath')
function kp(n, e, t, r) {
	let i = [],
		a = ae(
			n,
			(o, l, u) => (
				e.definition[u].ignoreAmbiguities === !0 ||
					$(l, (c) => {
						let d = [u]
						$(n, (h, f) => {
							u !== f && Xa(h, c) && e.definition[f].ignoreAmbiguities !== !0 && d.push(f)
						}),
							d.length > 1 && !Xa(i, c) && (i.push(c), o.push({ alts: d, path: c }))
					}),
				o
			),
			[]
		)
	return I(a, (o) => {
		let l = I(o.alts, (u) => u + 1)
		return {
			message: r.buildAlternationAmbiguityError({
				topLevelRule: t,
				alternation: e,
				ambiguityIndices: l,
				prefixPath: o.path,
			}),
			type: oe.AMBIGUOUS_ALTS,
			ruleName: t.name,
			occurrence: e.idx,
			alternatives: o.alts,
		}
	})
}
s(kp, 'checkAlternativesAmbiguities')
function Sp(n, e, t, r) {
	let i = ae(
		n,
		(a, o, l) => {
			let u = I(o, (c) => ({ idx: l, path: c }))
			return a.concat(u)
		},
		[]
	)
	return ua(
		Ee(i, (a) => {
			if (e.definition[a.idx].ignoreAmbiguities === !0) return []
			let o = a.idx,
				l = a.path,
				u = Ie(i, (c) => e.definition[c.idx].ignoreAmbiguities !== !0 && c.idx < o && hp(c.path, l))
			return I(u, (c) => {
				let d = [c.idx + 1, o + 1],
					h = e.idx === 0 ? '' : e.idx
				return {
					message: r.buildAlternationPrefixAmbiguityError({
						topLevelRule: t,
						alternation: e,
						ambiguityIndices: d,
						prefixPath: c.path,
					}),
					type: oe.AMBIGUOUS_PREFIX_ALTS,
					ruleName: t.name,
					occurrence: h,
					alternatives: d,
				}
			})
		})
	)
}
s(Sp, 'checkPrefixAlternativesAmbiguities')
function Cp(n, e, t) {
	let r = [],
		i = I(e, (a) => a.name)
	return (
		$(n, (a) => {
			let o = a.name
			if (le(i, o)) {
				let l = t.buildNamespaceConflictError(a)
				r.push({ message: l, type: oe.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: o })
			}
		}),
		r
	)
}
s(Cp, 'checkTerminalAndNoneTerminalsNameSpace')
function Ip(n) {
	let e = Vo(n, { errMsgProvider: Ey }),
		t = {}
	return (
		$(n.rules, (r) => {
			t[r.name] = r
		}),
		ip(t, e.errMsgProvider)
	)
}
s(Ip, 'resolveGrammar')
function xp(n) {
	return (
		(n = Vo(n, { errMsgProvider: $t })), pp(n.rules, n.tokenTypes, n.errMsgProvider, n.grammarName)
	)
}
s(xp, 'validateGrammar')
var Np = 'MismatchedTokenException',
	$p = 'NoViableAltException',
	Lp = 'EarlyExitException',
	bp = 'NotAllInputParsedException',
	wp = [Np, $p, Lp, bp]
Object.freeze(wp)
function na(n) {
	return le(wp, n.name)
}
s(na, 'isRecognitionException')
var Kn,
	Vs =
		((Kn = class extends Error {
			constructor(e, t) {
				super(e),
					(this.token = t),
					(this.resyncedTokens = []),
					Object.setPrototypeOf(this, new.target.prototype),
					Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
			}
		}),
		s(Kn, 'RecognitionException'),
		Kn),
	Wn,
	Pp =
		((Wn = class extends Vs {
			constructor(e, t, r) {
				super(e, t), (this.previousToken = r), (this.name = Np)
			}
		}),
		s(Wn, 'MismatchedTokenException'),
		Wn),
	Hn,
	by =
		((Hn = class extends Vs {
			constructor(e, t, r) {
				super(e, t), (this.previousToken = r), (this.name = $p)
			}
		}),
		s(Hn, 'NoViableAltException'),
		Hn),
	zn,
	wy =
		((zn = class extends Vs {
			constructor(e, t) {
				super(e, t), (this.name = bp)
			}
		}),
		s(zn, 'NotAllInputParsedException'),
		zn),
	qn,
	Py =
		((qn = class extends Vs {
			constructor(e, t, r) {
				super(e, t), (this.previousToken = r), (this.name = Lp)
			}
		}),
		s(qn, 'EarlyExitException'),
		qn),
	Zs = {},
	Op = 'InRuleRecoveryException',
	Yn,
	Oy =
		((Yn = class extends Error {
			constructor(e) {
				super(e), (this.name = Op)
			}
		}),
		s(Yn, 'InRuleRecoveryException'),
		Yn),
	Xn,
	_y =
		((Xn = class {
			initRecoverable(e) {
				;(this.firstAfterRepMap = {}),
					(this.resyncFollows = {}),
					(this.recoveryEnabled = L(e, 'recoveryEnabled') ? e.recoveryEnabled : st.recoveryEnabled),
					this.recoveryEnabled && (this.attemptInRepetitionRecovery = _p)
			}
			getTokenToInsert(e) {
				let t = Us(e, '', NaN, NaN, NaN, NaN, NaN, NaN)
				return (t.isInsertedInRecovery = !0), t
			}
			canTokenTypeBeInsertedInRecovery(e) {
				return !0
			}
			canTokenTypeBeDeletedInRecovery(e) {
				return !0
			}
			tryInRepetitionRecovery(e, t, r, i) {
				let a = this.findReSyncTokenType(),
					o = this.exportLexerState(),
					l = [],
					u = !1,
					c = this.LA(1),
					d = this.LA(1),
					h = s(() => {
						let f = this.LA(0),
							p = this.errorMessageProvider.buildMismatchTokenMessage({
								expected: i,
								actual: c,
								previous: f,
								ruleName: this.getCurrRuleFullName(),
							}),
							g = new Pp(p, c, this.LA(0))
						;(g.resyncedTokens = Xi(l)), this.SAVE_ERROR(g)
					}, 'generateErrorMessage')
				for (; !u; )
					if (this.tokenMatcher(d, i)) {
						h()
						return
					} else if (r.call(this)) {
						h(), e.apply(this, t)
						return
					} else
						this.tokenMatcher(d, a)
							? (u = !0)
							: ((d = this.SKIP_TOKEN()), this.addToResyncTokens(d, l))
				this.importLexerState(o)
			}
			shouldInRepetitionRecoveryBeTried(e, t, r) {
				return !(
					r === !1 ||
					this.tokenMatcher(this.LA(1), e) ||
					this.isBackTracking() ||
					this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t))
				)
			}
			getFollowsForInRuleRecovery(e, t) {
				let r = this.getCurrentGrammarPath(e, t)
				return this.getNextPossibleTokenTypes(r)
			}
			tryInRuleRecovery(e, t) {
				if (this.canRecoverWithSingleTokenInsertion(e, t)) return this.getTokenToInsert(e)
				if (this.canRecoverWithSingleTokenDeletion(e)) {
					let r = this.SKIP_TOKEN()
					return this.consumeToken(), r
				}
				throw new Oy('sad sad panda')
			}
			canPerformInRuleRecovery(e, t) {
				return (
					this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e)
				)
			}
			canRecoverWithSingleTokenInsertion(e, t) {
				if (!this.canTokenTypeBeInsertedInRecovery(e) || F(t)) return !1
				let r = this.LA(1)
				return Ti(t, (i) => this.tokenMatcher(r, i)) !== void 0
			}
			canRecoverWithSingleTokenDeletion(e) {
				return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1
			}
			isInCurrentRuleReSyncSet(e) {
				let t = this.getCurrFollowKey(),
					r = this.getFollowSetFromFollowKey(t)
				return le(r, e)
			}
			findReSyncTokenType() {
				let e = this.flattenFollowSet(),
					t = this.LA(1),
					r = 2
				for (;;) {
					let i = Ti(e, (a) => Mu(t, a))
					if (i !== void 0) return i
					;(t = this.LA(r)), r++
				}
			}
			getCurrFollowKey() {
				if (this.RULE_STACK.length === 1) return Zs
				let e = this.getLastExplicitRuleShortName(),
					t = this.getLastExplicitRuleOccurrenceIndex(),
					r = this.getPreviousExplicitRuleShortName()
				return {
					ruleName: this.shortRuleNameToFullName(e),
					idxInCallingRule: t,
					inRule: this.shortRuleNameToFullName(r),
				}
			}
			buildFullFollowKeyStack() {
				let e = this.RULE_STACK,
					t = this.RULE_OCCURRENCE_STACK
				return I(e, (r, i) =>
					i === 0
						? Zs
						: {
								ruleName: this.shortRuleNameToFullName(r),
								idxInCallingRule: t[i],
								inRule: this.shortRuleNameToFullName(e[i - 1]),
						  }
				)
			}
			flattenFollowSet() {
				let e = I(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t))
				return we(e)
			}
			getFollowSetFromFollowKey(e) {
				if (e === Zs) return [mt]
				let t = e.ruleName + e.idxInCallingRule + Rf + e.inRule
				return this.resyncFollows[t]
			}
			addToResyncTokens(e, t) {
				return this.tokenMatcher(e, mt) || t.push(e), t
			}
			reSyncTo(e) {
				let t = [],
					r = this.LA(1)
				for (; this.tokenMatcher(r, e) === !1; )
					(r = this.SKIP_TOKEN()), this.addToResyncTokens(r, t)
				return Xi(t)
			}
			attemptInRepetitionRecovery(e, t, r, i, a, o, l) {}
			getCurrentGrammarPath(e, t) {
				let r = this.getHumanReadableRuleStack(),
					i = ne(this.RULE_OCCURRENCE_STACK)
				return { ruleStack: r, occurrenceStack: i, lastTok: e, lastTokOccurrence: t }
			}
			getHumanReadableRuleStack() {
				return I(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e))
			}
		}),
		s(Xn, 'Recoverable'),
		Xn)
function _p(n, e, t, r, i, a, o) {
	let l = this.getKeyForAutomaticLookahead(r, i),
		u = this.firstAfterRepMap[l]
	if (u === void 0) {
		let f = this.getCurrRuleFullName(),
			p = this.getGAstProductions()[f]
		;(u = new a(p, i).startWalking()), (this.firstAfterRepMap[l] = u)
	}
	let c = u.token,
		d = u.occurrence,
		h = u.isEndOfRule
	this.RULE_STACK.length === 1 && h && c === void 0 && ((c = mt), (d = 1)),
		!(c === void 0 || d === void 0) &&
			this.shouldInRepetitionRecoveryBeTried(c, d, o) &&
			this.tryInRepetitionRecovery(n, e, t, c)
}
s(_p, 'attemptInRepetitionRecovery')
function ba(n, e, t) {
	return t | e | n
}
s(ba, 'getKeyForAutomaticLookahead')
var Jn,
	Ku =
		((Jn = class {
			constructor(e) {
				var t
				this.maxLookahead =
					(t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : st.maxLookahead
			}
			validate(e) {
				let t = this.validateNoLeftRecursion(e.rules)
				if (F(t)) {
					let r = this.validateEmptyOrAlternatives(e.rules),
						i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead),
						a = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead)
					return [...t, ...r, ...i, ...a]
				}
				return t
			}
			validateNoLeftRecursion(e) {
				return Ee(e, (t) => Vu(t, t, $t))
			}
			validateEmptyOrAlternatives(e) {
				return Ee(e, (t) => vp(t, $t))
			}
			validateAmbiguousAlternationAlternatives(e, t) {
				return Ee(e, (r) => Rp(r, t, $t))
			}
			validateSomeNonEmptyLookaheadPath(e, t) {
				return Ep(e, t, $t)
			}
			buildLookaheadForAlternation(e) {
				return sp(
					e.prodOccurrence,
					e.rule,
					e.maxLookahead,
					e.hasPredicates,
					e.dynamicTokensEnabled,
					lp
				)
			}
			buildLookaheadForOptional(e) {
				return op(
					e.prodOccurrence,
					e.rule,
					e.maxLookahead,
					e.dynamicTokensEnabled,
					Bs(e.prodType),
					up
				)
			}
		}),
		s(Jn, 'LLkLookaheadStrategy'),
		Jn),
	Qn,
	Dy =
		((Qn = class {
			initLooksAhead(e) {
				;(this.dynamicTokensEnabled = L(e, 'dynamicTokensEnabled')
					? e.dynamicTokensEnabled
					: st.dynamicTokensEnabled),
					(this.maxLookahead = L(e, 'maxLookahead') ? e.maxLookahead : st.maxLookahead),
					(this.lookaheadStrategy = L(e, 'lookaheadStrategy')
						? e.lookaheadStrategy
						: new Ku({ maxLookahead: this.maxLookahead })),
					(this.lookAheadFuncsCache = new Map())
			}
			preComputeLookaheadFunctions(e) {
				$(e, (t) => {
					this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
						let {
							alternation: r,
							repetition: i,
							option: a,
							repetitionMandatory: o,
							repetitionMandatoryWithSeparator: l,
							repetitionWithSeparator: u,
						} = Dp(t)
						$(r, (c) => {
							let d = c.idx === 0 ? '' : c.idx
							this.TRACE_INIT(`${De(c)}${d}`, () => {
								let h = this.lookaheadStrategy.buildLookaheadForAlternation({
										prodOccurrence: c.idx,
										rule: t,
										maxLookahead: c.maxLookahead || this.maxLookahead,
										hasPredicates: c.hasPredicates,
										dynamicTokensEnabled: this.dynamicTokensEnabled,
									}),
									f = ba(this.fullRuleNameToShort[t.name], 256, c.idx)
								this.setLaFuncCache(f, h)
							})
						}),
							$(i, (c) => {
								this.computeLookaheadFunc(t, c.idx, 768, 'Repetition', c.maxLookahead, De(c))
							}),
							$(a, (c) => {
								this.computeLookaheadFunc(t, c.idx, 512, 'Option', c.maxLookahead, De(c))
							}),
							$(o, (c) => {
								this.computeLookaheadFunc(
									t,
									c.idx,
									1024,
									'RepetitionMandatory',
									c.maxLookahead,
									De(c)
								)
							}),
							$(l, (c) => {
								this.computeLookaheadFunc(
									t,
									c.idx,
									1536,
									'RepetitionMandatoryWithSeparator',
									c.maxLookahead,
									De(c)
								)
							}),
							$(u, (c) => {
								this.computeLookaheadFunc(
									t,
									c.idx,
									1280,
									'RepetitionWithSeparator',
									c.maxLookahead,
									De(c)
								)
							})
					})
				})
			}
			computeLookaheadFunc(e, t, r, i, a, o) {
				this.TRACE_INIT(`${o}${t === 0 ? '' : t}`, () => {
					let l = this.lookaheadStrategy.buildLookaheadForOptional({
							prodOccurrence: t,
							rule: e,
							maxLookahead: a || this.maxLookahead,
							dynamicTokensEnabled: this.dynamicTokensEnabled,
							prodType: i,
						}),
						u = ba(this.fullRuleNameToShort[e.name], r, t)
					this.setLaFuncCache(u, l)
				})
			}
			getKeyForAutomaticLookahead(e, t) {
				let r = this.getLastExplicitRuleShortName()
				return ba(r, e, t)
			}
			getLaFuncFromCache(e) {
				return this.lookAheadFuncsCache.get(e)
			}
			setLaFuncCache(e, t) {
				this.lookAheadFuncsCache.set(e, t)
			}
		}),
		s(Qn, 'LooksAhead'),
		Qn),
	Zn,
	My =
		((Zn = class extends Li {
			constructor() {
				super(...arguments),
					(this.dslMethods = {
						option: [],
						alternation: [],
						repetition: [],
						repetitionWithSeparator: [],
						repetitionMandatory: [],
						repetitionMandatoryWithSeparator: [],
					})
			}
			reset() {
				this.dslMethods = {
					option: [],
					alternation: [],
					repetition: [],
					repetitionWithSeparator: [],
					repetitionMandatory: [],
					repetitionMandatoryWithSeparator: [],
				}
			}
			visitOption(e) {
				this.dslMethods.option.push(e)
			}
			visitRepetitionWithSeparator(e) {
				this.dslMethods.repetitionWithSeparator.push(e)
			}
			visitRepetitionMandatory(e) {
				this.dslMethods.repetitionMandatory.push(e)
			}
			visitRepetitionMandatoryWithSeparator(e) {
				this.dslMethods.repetitionMandatoryWithSeparator.push(e)
			}
			visitRepetition(e) {
				this.dslMethods.repetition.push(e)
			}
			visitAlternation(e) {
				this.dslMethods.alternation.push(e)
			}
		}),
		s(Zn, 'DslMethodsCollectorVisitor'),
		Zn),
	Sa = new My()
function Dp(n) {
	Sa.reset(), n.accept(Sa)
	let e = Sa.dslMethods
	return Sa.reset(), e
}
s(Dp, 'collectMethods')
function co(n, e) {
	isNaN(n.startOffset) === !0
		? ((n.startOffset = e.startOffset), (n.endOffset = e.endOffset))
		: n.endOffset < e.endOffset && (n.endOffset = e.endOffset)
}
s(co, 'setNodeLocationOnlyOffset')
function ho(n, e) {
	isNaN(n.startOffset) === !0
		? ((n.startOffset = e.startOffset),
		  (n.startColumn = e.startColumn),
		  (n.startLine = e.startLine),
		  (n.endOffset = e.endOffset),
		  (n.endColumn = e.endColumn),
		  (n.endLine = e.endLine))
		: n.endOffset < e.endOffset &&
		  ((n.endOffset = e.endOffset), (n.endColumn = e.endColumn), (n.endLine = e.endLine))
}
s(ho, 'setNodeLocationFull')
function Mp(n, e, t) {
	n.children[t] === void 0 ? (n.children[t] = [e]) : n.children[t].push(e)
}
s(Mp, 'addTerminalToCst')
function Fp(n, e, t) {
	n.children[e] === void 0 ? (n.children[e] = [t]) : n.children[e].push(t)
}
s(Fp, 'addNoneTerminalToCst')
var Fy = 'name'
function Wu(n, e) {
	Object.defineProperty(n, Fy, { enumerable: !1, configurable: !0, writable: !1, value: e })
}
s(Wu, 'defineNameProp')
function Up(n, e) {
	let t = Yi(n),
		r = t.length
	for (let i = 0; i < r; i++) {
		let a = t[i],
			o = n[a],
			l = o.length
		for (let u = 0; u < l; u++) {
			let c = o[u]
			c.tokenTypeIdx === void 0 && this[c.name](c.children, e)
		}
	}
}
s(Up, 'defaultVisit')
function Gp(n, e) {
	let t = s(function () {}, 'derivedConstructor')
	Wu(t, n + 'BaseSemantics')
	let r = {
		visit: s(function (i, a) {
			if ((be(i) && (i = i[0]), !et(i))) return this[i.name](i.children, a)
		}, 'visit'),
		validateVisitor: s(function () {
			let i = Vp(this, e)
			if (!F(i)) {
				let a = I(i, (o) => o.msg)
				throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a
		.join(
			`

`
		)
		.replace(
			/\n/g,
			`
	`
		)}`)
			}
		}, 'validateVisitor'),
	}
	return (t.prototype = r), (t.prototype.constructor = t), (t._RULE_NAMES = e), t
}
s(Gp, 'createBaseSemanticVisitorConstructor')
function Bp(n, e, t) {
	let r = s(function () {}, 'derivedConstructor')
	Wu(r, n + 'BaseSemanticsWithDefaults')
	let i = Object.create(t.prototype)
	return (
		$(e, (a) => {
			i[a] = Up
		}),
		(r.prototype = i),
		(r.prototype.constructor = r),
		r
	)
}
s(Bp, 'createBaseVisitorConstructorWithDefaults')
var fo
;(function (n) {
	;(n[(n.REDUNDANT_METHOD = 0)] = 'REDUNDANT_METHOD'),
		(n[(n.MISSING_METHOD = 1)] = 'MISSING_METHOD')
})(fo || (fo = {}))
function Vp(n, e) {
	return jp(n, e)
}
s(Vp, 'validateVisitor')
function jp(n, e) {
	let t = Ie(e, (i) => Yt(n[i]) === !1),
		r = I(t, (i) => ({
			msg: `Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
			type: fo.MISSING_METHOD,
			methodName: i,
		}))
	return ua(r)
}
s(jp, 'validateMissingCstMethods')
var er,
	Uy =
		((er = class {
			initTreeBuilder(e) {
				if (
					((this.CST_STACK = []),
					(this.outputCst = e.outputCst),
					(this.nodeLocationTracking = L(e, 'nodeLocationTracking')
						? e.nodeLocationTracking
						: st.nodeLocationTracking),
					!this.outputCst)
				)
					(this.cstInvocationStateUpdate = J),
						(this.cstFinallyStateUpdate = J),
						(this.cstPostTerminal = J),
						(this.cstPostNonTerminal = J),
						(this.cstPostRule = J)
				else if (/full/i.test(this.nodeLocationTracking))
					this.recoveryEnabled
						? ((this.setNodeLocationFromToken = ho),
						  (this.setNodeLocationFromNode = ho),
						  (this.cstPostRule = J),
						  (this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery))
						: ((this.setNodeLocationFromToken = J),
						  (this.setNodeLocationFromNode = J),
						  (this.cstPostRule = this.cstPostRuleFull),
						  (this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular))
				else if (/onlyOffset/i.test(this.nodeLocationTracking))
					this.recoveryEnabled
						? ((this.setNodeLocationFromToken = co),
						  (this.setNodeLocationFromNode = co),
						  (this.cstPostRule = J),
						  (this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery))
						: ((this.setNodeLocationFromToken = J),
						  (this.setNodeLocationFromNode = J),
						  (this.cstPostRule = this.cstPostRuleOnlyOffset),
						  (this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular))
				else if (/none/i.test(this.nodeLocationTracking))
					(this.setNodeLocationFromToken = J),
						(this.setNodeLocationFromNode = J),
						(this.cstPostRule = J),
						(this.setInitialNodeLocation = J)
				else
					throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)
			}
			setInitialNodeLocationOnlyOffsetRecovery(e) {
				e.location = { startOffset: NaN, endOffset: NaN }
			}
			setInitialNodeLocationOnlyOffsetRegular(e) {
				e.location = { startOffset: this.LA(1).startOffset, endOffset: NaN }
			}
			setInitialNodeLocationFullRecovery(e) {
				e.location = {
					startOffset: NaN,
					startLine: NaN,
					startColumn: NaN,
					endOffset: NaN,
					endLine: NaN,
					endColumn: NaN,
				}
			}
			setInitialNodeLocationFullRegular(e) {
				let t = this.LA(1)
				e.location = {
					startOffset: t.startOffset,
					startLine: t.startLine,
					startColumn: t.startColumn,
					endOffset: NaN,
					endLine: NaN,
					endColumn: NaN,
				}
			}
			cstInvocationStateUpdate(e) {
				let t = { name: e, children: Object.create(null) }
				this.setInitialNodeLocation(t), this.CST_STACK.push(t)
			}
			cstFinallyStateUpdate() {
				this.CST_STACK.pop()
			}
			cstPostRuleFull(e) {
				let t = this.LA(0),
					r = e.location
				r.startOffset <= t.startOffset
					? ((r.endOffset = t.endOffset), (r.endLine = t.endLine), (r.endColumn = t.endColumn))
					: ((r.startOffset = NaN), (r.startLine = NaN), (r.startColumn = NaN))
			}
			cstPostRuleOnlyOffset(e) {
				let t = this.LA(0),
					r = e.location
				r.startOffset <= t.startOffset ? (r.endOffset = t.endOffset) : (r.startOffset = NaN)
			}
			cstPostTerminal(e, t) {
				let r = this.CST_STACK[this.CST_STACK.length - 1]
				Mp(r, t, e), this.setNodeLocationFromToken(r.location, t)
			}
			cstPostNonTerminal(e, t) {
				let r = this.CST_STACK[this.CST_STACK.length - 1]
				Fp(r, t, e), this.setNodeLocationFromNode(r.location, e.location)
			}
			getBaseCstVisitorConstructor() {
				if (et(this.baseCstVisitorConstructor)) {
					let e = Gp(this.className, Yi(this.gastProductionsCache))
					return (this.baseCstVisitorConstructor = e), e
				}
				return this.baseCstVisitorConstructor
			}
			getBaseCstVisitorConstructorWithDefaults() {
				if (et(this.baseCstVisitorWithDefaultsConstructor)) {
					let e = Bp(
						this.className,
						Yi(this.gastProductionsCache),
						this.getBaseCstVisitorConstructor()
					)
					return (this.baseCstVisitorWithDefaultsConstructor = e), e
				}
				return this.baseCstVisitorWithDefaultsConstructor
			}
			getLastExplicitRuleShortName() {
				let e = this.RULE_STACK
				return e[e.length - 1]
			}
			getPreviousExplicitRuleShortName() {
				let e = this.RULE_STACK
				return e[e.length - 2]
			}
			getLastExplicitRuleOccurrenceIndex() {
				let e = this.RULE_OCCURRENCE_STACK
				return e[e.length - 1]
			}
		}),
		s(er, 'TreeBuilder'),
		er),
	tr,
	Gy =
		((tr = class {
			initLexerAdapter() {
				;(this.tokVector = []), (this.tokVectorLength = 0), (this.currIdx = -1)
			}
			set input(e) {
				if (this.selfAnalysisDone !== !0)
					throw Error(
						"Missing <performSelfAnalysis> invocation at the end of the Parser's constructor."
					)
				this.reset(), (this.tokVector = e), (this.tokVectorLength = e.length)
			}
			get input() {
				return this.tokVector
			}
			SKIP_TOKEN() {
				return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Ja
			}
			LA(e) {
				let t = this.currIdx + e
				return t < 0 || this.tokVectorLength <= t ? Ja : this.tokVector[t]
			}
			consumeToken() {
				this.currIdx++
			}
			exportLexerState() {
				return this.currIdx
			}
			importLexerState(e) {
				this.currIdx = e
			}
			resetLexerState() {
				this.currIdx = -1
			}
			moveToTerminatedState() {
				this.currIdx = this.tokVector.length - 1
			}
			getLexerPosition() {
				return this.exportLexerState()
			}
		}),
		s(tr, 'LexerAdapter'),
		tr),
	nr,
	By =
		((nr = class {
			ACTION(e) {
				return e.call(this)
			}
			consume(e, t, r) {
				return this.consumeInternal(t, e, r)
			}
			subrule(e, t, r) {
				return this.subruleInternal(t, e, r)
			}
			option(e, t) {
				return this.optionInternal(t, e)
			}
			or(e, t) {
				return this.orInternal(t, e)
			}
			many(e, t) {
				return this.manyInternal(e, t)
			}
			atLeastOne(e, t) {
				return this.atLeastOneInternal(e, t)
			}
			CONSUME(e, t) {
				return this.consumeInternal(e, 0, t)
			}
			CONSUME1(e, t) {
				return this.consumeInternal(e, 1, t)
			}
			CONSUME2(e, t) {
				return this.consumeInternal(e, 2, t)
			}
			CONSUME3(e, t) {
				return this.consumeInternal(e, 3, t)
			}
			CONSUME4(e, t) {
				return this.consumeInternal(e, 4, t)
			}
			CONSUME5(e, t) {
				return this.consumeInternal(e, 5, t)
			}
			CONSUME6(e, t) {
				return this.consumeInternal(e, 6, t)
			}
			CONSUME7(e, t) {
				return this.consumeInternal(e, 7, t)
			}
			CONSUME8(e, t) {
				return this.consumeInternal(e, 8, t)
			}
			CONSUME9(e, t) {
				return this.consumeInternal(e, 9, t)
			}
			SUBRULE(e, t) {
				return this.subruleInternal(e, 0, t)
			}
			SUBRULE1(e, t) {
				return this.subruleInternal(e, 1, t)
			}
			SUBRULE2(e, t) {
				return this.subruleInternal(e, 2, t)
			}
			SUBRULE3(e, t) {
				return this.subruleInternal(e, 3, t)
			}
			SUBRULE4(e, t) {
				return this.subruleInternal(e, 4, t)
			}
			SUBRULE5(e, t) {
				return this.subruleInternal(e, 5, t)
			}
			SUBRULE6(e, t) {
				return this.subruleInternal(e, 6, t)
			}
			SUBRULE7(e, t) {
				return this.subruleInternal(e, 7, t)
			}
			SUBRULE8(e, t) {
				return this.subruleInternal(e, 8, t)
			}
			SUBRULE9(e, t) {
				return this.subruleInternal(e, 9, t)
			}
			OPTION(e) {
				return this.optionInternal(e, 0)
			}
			OPTION1(e) {
				return this.optionInternal(e, 1)
			}
			OPTION2(e) {
				return this.optionInternal(e, 2)
			}
			OPTION3(e) {
				return this.optionInternal(e, 3)
			}
			OPTION4(e) {
				return this.optionInternal(e, 4)
			}
			OPTION5(e) {
				return this.optionInternal(e, 5)
			}
			OPTION6(e) {
				return this.optionInternal(e, 6)
			}
			OPTION7(e) {
				return this.optionInternal(e, 7)
			}
			OPTION8(e) {
				return this.optionInternal(e, 8)
			}
			OPTION9(e) {
				return this.optionInternal(e, 9)
			}
			OR(e) {
				return this.orInternal(e, 0)
			}
			OR1(e) {
				return this.orInternal(e, 1)
			}
			OR2(e) {
				return this.orInternal(e, 2)
			}
			OR3(e) {
				return this.orInternal(e, 3)
			}
			OR4(e) {
				return this.orInternal(e, 4)
			}
			OR5(e) {
				return this.orInternal(e, 5)
			}
			OR6(e) {
				return this.orInternal(e, 6)
			}
			OR7(e) {
				return this.orInternal(e, 7)
			}
			OR8(e) {
				return this.orInternal(e, 8)
			}
			OR9(e) {
				return this.orInternal(e, 9)
			}
			MANY(e) {
				this.manyInternal(0, e)
			}
			MANY1(e) {
				this.manyInternal(1, e)
			}
			MANY2(e) {
				this.manyInternal(2, e)
			}
			MANY3(e) {
				this.manyInternal(3, e)
			}
			MANY4(e) {
				this.manyInternal(4, e)
			}
			MANY5(e) {
				this.manyInternal(5, e)
			}
			MANY6(e) {
				this.manyInternal(6, e)
			}
			MANY7(e) {
				this.manyInternal(7, e)
			}
			MANY8(e) {
				this.manyInternal(8, e)
			}
			MANY9(e) {
				this.manyInternal(9, e)
			}
			MANY_SEP(e) {
				this.manySepFirstInternal(0, e)
			}
			MANY_SEP1(e) {
				this.manySepFirstInternal(1, e)
			}
			MANY_SEP2(e) {
				this.manySepFirstInternal(2, e)
			}
			MANY_SEP3(e) {
				this.manySepFirstInternal(3, e)
			}
			MANY_SEP4(e) {
				this.manySepFirstInternal(4, e)
			}
			MANY_SEP5(e) {
				this.manySepFirstInternal(5, e)
			}
			MANY_SEP6(e) {
				this.manySepFirstInternal(6, e)
			}
			MANY_SEP7(e) {
				this.manySepFirstInternal(7, e)
			}
			MANY_SEP8(e) {
				this.manySepFirstInternal(8, e)
			}
			MANY_SEP9(e) {
				this.manySepFirstInternal(9, e)
			}
			AT_LEAST_ONE(e) {
				this.atLeastOneInternal(0, e)
			}
			AT_LEAST_ONE1(e) {
				return this.atLeastOneInternal(1, e)
			}
			AT_LEAST_ONE2(e) {
				this.atLeastOneInternal(2, e)
			}
			AT_LEAST_ONE3(e) {
				this.atLeastOneInternal(3, e)
			}
			AT_LEAST_ONE4(e) {
				this.atLeastOneInternal(4, e)
			}
			AT_LEAST_ONE5(e) {
				this.atLeastOneInternal(5, e)
			}
			AT_LEAST_ONE6(e) {
				this.atLeastOneInternal(6, e)
			}
			AT_LEAST_ONE7(e) {
				this.atLeastOneInternal(7, e)
			}
			AT_LEAST_ONE8(e) {
				this.atLeastOneInternal(8, e)
			}
			AT_LEAST_ONE9(e) {
				this.atLeastOneInternal(9, e)
			}
			AT_LEAST_ONE_SEP(e) {
				this.atLeastOneSepFirstInternal(0, e)
			}
			AT_LEAST_ONE_SEP1(e) {
				this.atLeastOneSepFirstInternal(1, e)
			}
			AT_LEAST_ONE_SEP2(e) {
				this.atLeastOneSepFirstInternal(2, e)
			}
			AT_LEAST_ONE_SEP3(e) {
				this.atLeastOneSepFirstInternal(3, e)
			}
			AT_LEAST_ONE_SEP4(e) {
				this.atLeastOneSepFirstInternal(4, e)
			}
			AT_LEAST_ONE_SEP5(e) {
				this.atLeastOneSepFirstInternal(5, e)
			}
			AT_LEAST_ONE_SEP6(e) {
				this.atLeastOneSepFirstInternal(6, e)
			}
			AT_LEAST_ONE_SEP7(e) {
				this.atLeastOneSepFirstInternal(7, e)
			}
			AT_LEAST_ONE_SEP8(e) {
				this.atLeastOneSepFirstInternal(8, e)
			}
			AT_LEAST_ONE_SEP9(e) {
				this.atLeastOneSepFirstInternal(9, e)
			}
			RULE(e, t, r = Qa) {
				if (le(this.definedRulesNames, e)) {
					let a = {
						message: $t.buildDuplicateRuleNameError({
							topLevelRule: e,
							grammarName: this.className,
						}),
						type: oe.DUPLICATE_RULE_NAME,
						ruleName: e,
					}
					this.definitionErrors.push(a)
				}
				this.definedRulesNames.push(e)
				let i = this.defineRule(e, t, r)
				return (this[e] = i), i
			}
			OVERRIDE_RULE(e, t, r = Qa) {
				let i = Tp(e, this.definedRulesNames, this.className)
				this.definitionErrors = this.definitionErrors.concat(i)
				let a = this.defineRule(e, t, r)
				return (this[e] = a), a
			}
			BACKTRACK(e, t) {
				return function () {
					this.isBackTrackingStack.push(1)
					let r = this.saveRecogState()
					try {
						return e.apply(this, t), !0
					} catch (i) {
						if (na(i)) return !1
						throw i
					} finally {
						this.reloadRecogState(r), this.isBackTrackingStack.pop()
					}
				}
			}
			getGAstProductions() {
				return this.gastProductionsCache
			}
			getSerializedGastProductions() {
				return pf(Q(this.gastProductionsCache))
			}
		}),
		s(nr, 'RecognizerApi'),
		nr),
	rr,
	Vy =
		((rr = class {
			initRecognizerEngine(e, t) {
				if (
					((this.className = this.constructor.name),
					(this.shortRuleNameToFull = {}),
					(this.fullRuleNameToShort = {}),
					(this.ruleShortNameIdx = 256),
					(this.tokenMatcher = ta),
					(this.subruleIdx = 0),
					(this.definedRulesNames = []),
					(this.tokensMap = {}),
					(this.isBackTrackingStack = []),
					(this.RULE_STACK = []),
					(this.RULE_OCCURRENCE_STACK = []),
					(this.gastProductionsCache = {}),
					L(t, 'serializedGrammar'))
				)
					throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`)
				if (be(e)) {
					if (F(e))
						throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`)
					if (typeof e[0].startOffset == 'number')
						throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)
				}
				if (be(e)) this.tokensMap = ae(e, (a, o) => ((a[o.name] = o), a), {})
				else if (L(e, 'modes') && Me(we(Q(e.modes)), np)) {
					let a = we(Q(e.modes)),
						o = Bo(a)
					this.tokensMap = ae(o, (l, u) => ((l[u.name] = u), l), {})
				} else if (iy(e)) this.tokensMap = ne(e)
				else
					throw new Error(
						'<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition'
					)
				this.tokensMap.EOF = mt
				let r = L(e, 'modes') ? we(Q(e.modes)) : Q(e),
					i = Me(r, (a) => F(a.categoryMatches))
				;(this.tokenMatcher = i ? ta : wi), Pi(Q(this.tokensMap))
			}
			defineRule(e, t, r) {
				if (this.selfAnalysisDone)
					throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`)
				let i = L(r, 'resyncEnabled') ? r.resyncEnabled : Qa.resyncEnabled,
					a = L(r, 'recoveryValueFunc') ? r.recoveryValueFunc : Qa.recoveryValueFunc,
					o = this.ruleShortNameIdx << 12
				this.ruleShortNameIdx++,
					(this.shortRuleNameToFull[o] = e),
					(this.fullRuleNameToShort[e] = o)
				let l
				return (
					this.outputCst === !0
						? (l = s(function (...u) {
								try {
									this.ruleInvocationStateUpdate(o, e, this.subruleIdx), t.apply(this, u)
									let c = this.CST_STACK[this.CST_STACK.length - 1]
									return this.cstPostRule(c), c
								} catch (c) {
									return this.invokeRuleCatch(c, i, a)
								} finally {
									this.ruleFinallyStateUpdate()
								}
						  }, 'invokeRuleWithTry'))
						: (l = s(function (...u) {
								try {
									return this.ruleInvocationStateUpdate(o, e, this.subruleIdx), t.apply(this, u)
								} catch (c) {
									return this.invokeRuleCatch(c, i, a)
								} finally {
									this.ruleFinallyStateUpdate()
								}
						  }, 'invokeRuleWithTryCst')),
					Object.assign(l, { ruleName: e, originalGrammarAction: t })
				)
			}
			invokeRuleCatch(e, t, r) {
				let i = this.RULE_STACK.length === 1,
					a = t && !this.isBackTracking() && this.recoveryEnabled
				if (na(e)) {
					let o = e
					if (a) {
						let l = this.findReSyncTokenType()
						if (this.isInCurrentRuleReSyncSet(l))
							if (((o.resyncedTokens = this.reSyncTo(l)), this.outputCst)) {
								let u = this.CST_STACK[this.CST_STACK.length - 1]
								return (u.recoveredNode = !0), u
							} else return r(e)
						else {
							if (this.outputCst) {
								let u = this.CST_STACK[this.CST_STACK.length - 1]
								;(u.recoveredNode = !0), (o.partialCstResult = u)
							}
							throw o
						}
					} else {
						if (i) return this.moveToTerminatedState(), r(e)
						throw o
					}
				} else throw e
			}
			optionInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(512, t)
				return this.optionInternalLogic(e, t, r)
			}
			optionInternalLogic(e, t, r) {
				let i = this.getLaFuncFromCache(r),
					a
				if (typeof e != 'function') {
					a = e.DEF
					let o = e.GATE
					if (o !== void 0) {
						let l = i
						i = s(() => o.call(this) && l.call(this), 'lookAheadFunc')
					}
				} else a = e
				if (i.call(this) === !0) return a.call(this)
			}
			atLeastOneInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(1024, e)
				return this.atLeastOneInternalLogic(e, t, r)
			}
			atLeastOneInternalLogic(e, t, r) {
				let i = this.getLaFuncFromCache(r),
					a
				if (typeof t != 'function') {
					a = t.DEF
					let o = t.GATE
					if (o !== void 0) {
						let l = i
						i = s(() => o.call(this) && l.call(this), 'lookAheadFunc')
					}
				} else a = t
				if (i.call(this) === !0) {
					let o = this.doSingleRepetition(a)
					for (; i.call(this) === !0 && o === !0; ) o = this.doSingleRepetition(a)
				} else throw this.raiseEarlyExitException(e, V.REPETITION_MANDATORY, t.ERR_MSG)
				this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, 1024, e, xy)
			}
			atLeastOneSepFirstInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(1536, e)
				this.atLeastOneSepFirstInternalLogic(e, t, r)
			}
			atLeastOneSepFirstInternalLogic(e, t, r) {
				let i = t.DEF,
					a = t.SEP
				if (this.getLaFuncFromCache(r).call(this) === !0) {
					i.call(this)
					let o = s(() => this.tokenMatcher(this.LA(1), a), 'separatorLookAheadFunc')
					for (; this.tokenMatcher(this.LA(1), a) === !0; ) this.CONSUME(a), i.call(this)
					this.attemptInRepetitionRecovery(
						this.repetitionSepSecondInternal,
						[e, a, o, i, rd],
						o,
						1536,
						e,
						rd
					)
				} else
					throw this.raiseEarlyExitException(e, V.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG)
			}
			manyInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(768, e)
				return this.manyInternalLogic(e, t, r)
			}
			manyInternalLogic(e, t, r) {
				let i = this.getLaFuncFromCache(r),
					a
				if (typeof t != 'function') {
					a = t.DEF
					let l = t.GATE
					if (l !== void 0) {
						let u = i
						i = s(() => l.call(this) && u.call(this), 'lookaheadFunction')
					}
				} else a = t
				let o = !0
				for (; i.call(this) === !0 && o === !0; ) o = this.doSingleRepetition(a)
				this.attemptInRepetitionRecovery(this.manyInternal, [e, t], i, 768, e, Iy, o)
			}
			manySepFirstInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(1280, e)
				this.manySepFirstInternalLogic(e, t, r)
			}
			manySepFirstInternalLogic(e, t, r) {
				let i = t.DEF,
					a = t.SEP
				if (this.getLaFuncFromCache(r).call(this) === !0) {
					i.call(this)
					let o = s(() => this.tokenMatcher(this.LA(1), a), 'separatorLookAheadFunc')
					for (; this.tokenMatcher(this.LA(1), a) === !0; ) this.CONSUME(a), i.call(this)
					this.attemptInRepetitionRecovery(
						this.repetitionSepSecondInternal,
						[e, a, o, i, nd],
						o,
						1280,
						e,
						nd
					)
				}
			}
			repetitionSepSecondInternal(e, t, r, i, a) {
				for (; r(); ) this.CONSUME(t), i.call(this)
				this.attemptInRepetitionRecovery(
					this.repetitionSepSecondInternal,
					[e, t, r, i, a],
					r,
					1536,
					e,
					a
				)
			}
			doSingleRepetition(e) {
				let t = this.getLexerPosition()
				return e.call(this), this.getLexerPosition() > t
			}
			orInternal(e, t) {
				let r = this.getKeyForAutomaticLookahead(256, t),
					i = be(e) ? e : e.DEF,
					a = this.getLaFuncFromCache(r).call(this, i)
				if (a !== void 0) return i[a].ALT.call(this)
				this.raiseNoAltException(t, e.ERR_MSG)
			}
			ruleFinallyStateUpdate() {
				if (
					(this.RULE_STACK.pop(),
					this.RULE_OCCURRENCE_STACK.pop(),
					this.cstFinallyStateUpdate(),
					this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1)
				) {
					let e = this.LA(1),
						t = this.errorMessageProvider.buildNotAllInputParsedMessage({
							firstRedundant: e,
							ruleName: this.getCurrRuleFullName(),
						})
					this.SAVE_ERROR(new wy(t, e))
				}
			}
			subruleInternal(e, t, r) {
				let i
				try {
					let a = r !== void 0 ? r.ARGS : void 0
					return (
						(this.subruleIdx = t),
						(i = e.apply(this, a)),
						this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName),
						i
					)
				} catch (a) {
					throw this.subruleInternalError(a, r, e.ruleName)
				}
			}
			subruleInternalError(e, t, r) {
				throw (
					(na(e) &&
						e.partialCstResult !== void 0 &&
						(this.cstPostNonTerminal(
							e.partialCstResult,
							t !== void 0 && t.LABEL !== void 0 ? t.LABEL : r
						),
						delete e.partialCstResult),
					e)
				)
			}
			consumeInternal(e, t, r) {
				let i
				try {
					let a = this.LA(1)
					this.tokenMatcher(a, e) === !0
						? (this.consumeToken(), (i = a))
						: this.consumeInternalError(e, a, r)
				} catch (a) {
					i = this.consumeInternalRecovery(e, t, a)
				}
				return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i
			}
			consumeInternalError(e, t, r) {
				let i,
					a = this.LA(0)
				throw (
					(r !== void 0 && r.ERR_MSG
						? (i = r.ERR_MSG)
						: (i = this.errorMessageProvider.buildMismatchTokenMessage({
								expected: e,
								actual: t,
								previous: a,
								ruleName: this.getCurrRuleFullName(),
						  })),
					this.SAVE_ERROR(new Pp(i, t, a)))
				)
			}
			consumeInternalRecovery(e, t, r) {
				if (
					this.recoveryEnabled &&
					r.name === 'MismatchedTokenException' &&
					!this.isBackTracking()
				) {
					let i = this.getFollowsForInRuleRecovery(e, t)
					try {
						return this.tryInRuleRecovery(e, i)
					} catch (a) {
						throw a.name === Op ? r : a
					}
				} else throw r
			}
			saveRecogState() {
				let e = this.errors,
					t = ne(this.RULE_STACK)
				return {
					errors: e,
					lexerState: this.exportLexerState(),
					RULE_STACK: t,
					CST_STACK: this.CST_STACK,
				}
			}
			reloadRecogState(e) {
				;(this.errors = e.errors),
					this.importLexerState(e.lexerState),
					(this.RULE_STACK = e.RULE_STACK)
			}
			ruleInvocationStateUpdate(e, t, r) {
				this.RULE_OCCURRENCE_STACK.push(r),
					this.RULE_STACK.push(e),
					this.cstInvocationStateUpdate(t)
			}
			isBackTracking() {
				return this.isBackTrackingStack.length !== 0
			}
			getCurrRuleFullName() {
				let e = this.getLastExplicitRuleShortName()
				return this.shortRuleNameToFull[e]
			}
			shortRuleNameToFullName(e) {
				return this.shortRuleNameToFull[e]
			}
			isAtEndOfInput() {
				return this.tokenMatcher(this.LA(1), mt)
			}
			reset() {
				this.resetLexerState(),
					(this.subruleIdx = 0),
					(this.isBackTrackingStack = []),
					(this.errors = []),
					(this.RULE_STACK = []),
					(this.CST_STACK = []),
					(this.RULE_OCCURRENCE_STACK = [])
			}
		}),
		s(rr, 'RecognizerEngine'),
		rr),
	ir,
	jy =
		((ir = class {
			initErrorHandler(e) {
				;(this._errors = []),
					(this.errorMessageProvider = L(e, 'errorMessageProvider')
						? e.errorMessageProvider
						: st.errorMessageProvider)
			}
			SAVE_ERROR(e) {
				if (na(e))
					return (
						(e.context = {
							ruleStack: this.getHumanReadableRuleStack(),
							ruleOccurrenceStack: ne(this.RULE_OCCURRENCE_STACK),
						}),
						this._errors.push(e),
						e
					)
				throw Error('Trying to save an Error which is not a RecognitionException')
			}
			get errors() {
				return ne(this._errors)
			}
			set errors(e) {
				this._errors = e
			}
			raiseEarlyExitException(e, t, r) {
				let i = this.getCurrRuleFullName(),
					a = this.getGAstProductions()[i],
					o = Ta(e, a, t, this.maxLookahead)[0],
					l = []
				for (let c = 1; c <= this.maxLookahead; c++) l.push(this.LA(c))
				let u = this.errorMessageProvider.buildEarlyExitMessage({
					expectedIterationPaths: o,
					actual: l,
					previous: this.LA(0),
					customUserDescription: r,
					ruleName: i,
				})
				throw this.SAVE_ERROR(new Py(u, this.LA(1), this.LA(0)))
			}
			raiseNoAltException(e, t) {
				let r = this.getCurrRuleFullName(),
					i = this.getGAstProductions()[r],
					a = ya(e, i, this.maxLookahead),
					o = []
				for (let c = 1; c <= this.maxLookahead; c++) o.push(this.LA(c))
				let l = this.LA(0),
					u = this.errorMessageProvider.buildNoViableAltMessage({
						expectedPathsPerAlt: a,
						actual: o,
						previous: l,
						customUserDescription: t,
						ruleName: this.getCurrRuleFullName(),
					})
				throw this.SAVE_ERROR(new by(u, this.LA(1), l))
			}
		}),
		s(ir, 'ErrorHandler'),
		ir),
	ar,
	Ky =
		((ar = class {
			initContentAssist() {}
			computeContentAssist(e, t) {
				let r = this.gastProductionsCache[e]
				if (et(r)) throw Error(`Rule ->${e}<- does not exist in this grammar.`)
				return Fu([r], t, this.tokenMatcher, this.maxLookahead)
			}
			getNextPossibleTokenTypes(e) {
				let t = Fe(e.ruleStack),
					r = this.getGAstProductions()[t]
				return new Cy(r, e).startWalking()
			}
		}),
		s(ar, 'ContentAssist'),
		ar),
	js = { description: 'This Object indicates the Parser is during Recording Phase' }
Object.freeze(js)
var id = !0,
	ad = Math.pow(2, 8) - 1,
	Kp = Du({ name: 'RECORDING_PHASE_TOKEN', pattern: he.NA })
Pi([Kp])
var Wp = Us(
	Kp,
	`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/blog/guide/internals.html#grammar-recording for details`,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1
)
Object.freeze(Wp)
var Wy = {
		name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/blog/guide/internals.html#grammar-recording for details`,
		children: {},
	},
	sr,
	Hy =
		((sr = class {
			initGastRecorder(e) {
				;(this.recordingProdStack = []), (this.RECORDING_PHASE = !1)
			}
			enableRecording() {
				;(this.RECORDING_PHASE = !0),
					this.TRACE_INIT('Enable Recording', () => {
						for (let e = 0; e < 10; e++) {
							let t = e > 0 ? e : ''
							;(this[`CONSUME${t}`] = function (r, i) {
								return this.consumeInternalRecord(r, e, i)
							}),
								(this[`SUBRULE${t}`] = function (r, i) {
									return this.subruleInternalRecord(r, e, i)
								}),
								(this[`OPTION${t}`] = function (r) {
									return this.optionInternalRecord(r, e)
								}),
								(this[`OR${t}`] = function (r) {
									return this.orInternalRecord(r, e)
								}),
								(this[`MANY${t}`] = function (r) {
									this.manyInternalRecord(e, r)
								}),
								(this[`MANY_SEP${t}`] = function (r) {
									this.manySepFirstInternalRecord(e, r)
								}),
								(this[`AT_LEAST_ONE${t}`] = function (r) {
									this.atLeastOneInternalRecord(e, r)
								}),
								(this[`AT_LEAST_ONE_SEP${t}`] = function (r) {
									this.atLeastOneSepFirstInternalRecord(e, r)
								})
						}
						;(this.consume = function (e, t, r) {
							return this.consumeInternalRecord(t, e, r)
						}),
							(this.subrule = function (e, t, r) {
								return this.subruleInternalRecord(t, e, r)
							}),
							(this.option = function (e, t) {
								return this.optionInternalRecord(t, e)
							}),
							(this.or = function (e, t) {
								return this.orInternalRecord(t, e)
							}),
							(this.many = function (e, t) {
								this.manyInternalRecord(e, t)
							}),
							(this.atLeastOne = function (e, t) {
								this.atLeastOneInternalRecord(e, t)
							}),
							(this.ACTION = this.ACTION_RECORD),
							(this.BACKTRACK = this.BACKTRACK_RECORD),
							(this.LA = this.LA_RECORD)
					})
			}
			disableRecording() {
				;(this.RECORDING_PHASE = !1),
					this.TRACE_INIT('Deleting Recording methods', () => {
						let e = this
						for (let t = 0; t < 10; t++) {
							let r = t > 0 ? t : ''
							delete e[`CONSUME${r}`],
								delete e[`SUBRULE${r}`],
								delete e[`OPTION${r}`],
								delete e[`OR${r}`],
								delete e[`MANY${r}`],
								delete e[`MANY_SEP${r}`],
								delete e[`AT_LEAST_ONE${r}`],
								delete e[`AT_LEAST_ONE_SEP${r}`]
						}
						delete e.consume,
							delete e.subrule,
							delete e.option,
							delete e.or,
							delete e.many,
							delete e.atLeastOne,
							delete e.ACTION,
							delete e.BACKTRACK,
							delete e.LA
					})
			}
			ACTION_RECORD(e) {}
			BACKTRACK_RECORD(e, t) {
				return () => !0
			}
			LA_RECORD(e) {
				return Ja
			}
			topLevelRuleRecord(e, t) {
				try {
					let r = new $i({ definition: [], name: e })
					return (
						(r.name = e),
						this.recordingProdStack.push(r),
						t.call(this),
						this.recordingProdStack.pop(),
						r
					)
				} catch (r) {
					if (r.KNOWN_RECORDER_ERROR !== !0)
						try {
							r.message =
								r.message +
								`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/blog/guide/internals.html#grammar-recording`
						} catch {
							throw r
						}
					throw r
				}
			}
			optionInternalRecord(e, t) {
				return an.call(this, te, e, t)
			}
			atLeastOneInternalRecord(e, t) {
				an.call(this, xe, t, e)
			}
			atLeastOneSepFirstInternalRecord(e, t) {
				an.call(this, Ne, t, e, id)
			}
			manyInternalRecord(e, t) {
				an.call(this, j, t, e)
			}
			manySepFirstInternalRecord(e, t) {
				an.call(this, ye, t, e, id)
			}
			orInternalRecord(e, t) {
				return Hp.call(this, e, t)
			}
			subruleInternalRecord(e, t, r) {
				if ((ra(t), !e || L(e, 'ruleName') === !1)) {
					let l = new Error(`<SUBRULE${po(
						t
					)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(
						e
					)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`)
					throw ((l.KNOWN_RECORDER_ERROR = !0), l)
				}
				let i = yi(this.recordingProdStack),
					a = e.ruleName,
					o = new se({
						idx: t,
						nonTerminalName: a,
						label: r == null ? void 0 : r.LABEL,
						referencedRule: void 0,
					})
				return i.definition.push(o), this.outputCst ? Wy : js
			}
			consumeInternalRecord(e, t, r) {
				if ((ra(t), !Ou(e))) {
					let o = new Error(`<CONSUME${po(
						t
					)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`)
					throw ((o.KNOWN_RECORDER_ERROR = !0), o)
				}
				let i = yi(this.recordingProdStack),
					a = new G({ idx: t, terminalType: e, label: r == null ? void 0 : r.LABEL })
				return i.definition.push(a), Wp
			}
		}),
		s(sr, 'GastRecorder'),
		sr)
function an(n, e, t, r = !1) {
	ra(t)
	let i = yi(this.recordingProdStack),
		a = Yt(e) ? e : e.DEF,
		o = new n({ definition: [], idx: t })
	return (
		r && (o.separator = e.SEP),
		L(e, 'MAX_LOOKAHEAD') && (o.maxLookahead = e.MAX_LOOKAHEAD),
		this.recordingProdStack.push(o),
		a.call(this),
		i.definition.push(o),
		this.recordingProdStack.pop(),
		js
	)
}
s(an, 'recordProd')
function Hp(n, e) {
	ra(e)
	let t = yi(this.recordingProdStack),
		r = be(n) === !1,
		i = r === !1 ? n : n.DEF,
		a = new Te({ definition: [], idx: e, ignoreAmbiguities: r && n.IGNORE_AMBIGUITIES === !0 })
	L(n, 'MAX_LOOKAHEAD') && (a.maxLookahead = n.MAX_LOOKAHEAD)
	let o = vh(i, (l) => Yt(l.GATE))
	return (
		(a.hasPredicates = o),
		t.definition.push(a),
		$(i, (l) => {
			let u = new me({ definition: [] })
			a.definition.push(u),
				L(l, 'IGNORE_AMBIGUITIES')
					? (u.ignoreAmbiguities = l.IGNORE_AMBIGUITIES)
					: L(l, 'GATE') && (u.ignoreAmbiguities = !0),
				this.recordingProdStack.push(u),
				l.ALT.call(this),
				this.recordingProdStack.pop()
		}),
		js
	)
}
s(Hp, 'recordOrProd')
function po(n) {
	return n === 0 ? '' : `${n}`
}
s(po, 'getIdxSuffix')
function ra(n) {
	if (n < 0 || n > ad) {
		let e = new Error(`Invalid DSL Method idx value: <${n}>
	Idx value must be a none negative value smaller than ${ad + 1}`)
		throw ((e.KNOWN_RECORDER_ERROR = !0), e)
	}
}
s(ra, 'assertMethodIdxIsValid')
var or,
	zy =
		((or = class {
			initPerformanceTracer(e) {
				if (L(e, 'traceInitPerf')) {
					let t = e.traceInitPerf,
						r = typeof t == 'number'
					;(this.traceInitMaxIdent = r ? t : 1 / 0), (this.traceInitPerf = r ? t > 0 : t)
				} else (this.traceInitMaxIdent = 0), (this.traceInitPerf = st.traceInitPerf)
				this.traceInitIndent = -1
			}
			TRACE_INIT(e, t) {
				if (this.traceInitPerf === !0) {
					this.traceInitIndent++
					let r = new Array(this.traceInitIndent + 1).join('	')
					this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`)
					let { time: i, value: a } = Nu(t),
						o = i > 10 ? console.warn : console.log
					return (
						this.traceInitIndent < this.traceInitMaxIdent && o(`${r}<-- <${e}> time: ${i}ms`),
						this.traceInitIndent--,
						a
					)
				} else return t()
			}
		}),
		s(or, 'PerformanceTracer'),
		or)
function zp(n, e) {
	e.forEach((t) => {
		let r = t.prototype
		Object.getOwnPropertyNames(r).forEach((i) => {
			if (i === 'constructor') return
			let a = Object.getOwnPropertyDescriptor(r, i)
			a && (a.get || a.set)
				? Object.defineProperty(n.prototype, i, a)
				: (n.prototype[i] = t.prototype[i])
		})
	})
}
s(zp, 'applyMixins')
var Ja = Us(mt, '', NaN, NaN, NaN, NaN, NaN, NaN)
Object.freeze(Ja)
var st = Object.freeze({
		recoveryEnabled: !1,
		maxLookahead: 3,
		dynamicTokensEnabled: !1,
		outputCst: !0,
		errorMessageProvider: sn,
		nodeLocationTracking: 'none',
		traceInitPerf: !1,
		skipValidations: !1,
	}),
	Qa = Object.freeze({ recoveryValueFunc: s(() => {}, 'recoveryValueFunc'), resyncEnabled: !0 }),
	oe
;(function (n) {
	;(n[(n.INVALID_RULE_NAME = 0)] = 'INVALID_RULE_NAME'),
		(n[(n.DUPLICATE_RULE_NAME = 1)] = 'DUPLICATE_RULE_NAME'),
		(n[(n.INVALID_RULE_OVERRIDE = 2)] = 'INVALID_RULE_OVERRIDE'),
		(n[(n.DUPLICATE_PRODUCTIONS = 3)] = 'DUPLICATE_PRODUCTIONS'),
		(n[(n.UNRESOLVED_SUBRULE_REF = 4)] = 'UNRESOLVED_SUBRULE_REF'),
		(n[(n.LEFT_RECURSION = 5)] = 'LEFT_RECURSION'),
		(n[(n.NONE_LAST_EMPTY_ALT = 6)] = 'NONE_LAST_EMPTY_ALT'),
		(n[(n.AMBIGUOUS_ALTS = 7)] = 'AMBIGUOUS_ALTS'),
		(n[(n.CONFLICT_TOKENS_RULES_NAMESPACE = 8)] = 'CONFLICT_TOKENS_RULES_NAMESPACE'),
		(n[(n.INVALID_TOKEN_NAME = 9)] = 'INVALID_TOKEN_NAME'),
		(n[(n.NO_NON_EMPTY_LOOKAHEAD = 10)] = 'NO_NON_EMPTY_LOOKAHEAD'),
		(n[(n.AMBIGUOUS_PREFIX_ALTS = 11)] = 'AMBIGUOUS_PREFIX_ALTS'),
		(n[(n.TOO_MANY_ALTS = 12)] = 'TOO_MANY_ALTS'),
		(n[(n.CUSTOM_LOOKAHEAD_VALIDATION = 13)] = 'CUSTOM_LOOKAHEAD_VALIDATION')
})(oe || (oe = {}))
function mo(n = void 0) {
	return function () {
		return n
	}
}
s(mo, 'EMPTY_ALT')
var bt,
	Hu =
		((bt = class {
			static performSelfAnalysis(e) {
				throw Error(
					'The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.'
				)
			}
			performSelfAnalysis() {
				this.TRACE_INIT('performSelfAnalysis', () => {
					let e
					this.selfAnalysisDone = !0
					let t = this.className
					this.TRACE_INIT('toFastProps', () => {
						$u(this)
					}),
						this.TRACE_INIT('Grammar Recording', () => {
							try {
								this.enableRecording(),
									$(this.definedRulesNames, (i) => {
										let a = this[i].originalGrammarAction,
											o
										this.TRACE_INIT(`${i} Rule`, () => {
											o = this.topLevelRuleRecord(i, a)
										}),
											(this.gastProductionsCache[i] = o)
									})
							} finally {
								this.disableRecording()
							}
						})
					let r = []
					if (
						(this.TRACE_INIT('Grammar Resolving', () => {
							;(r = Ip({ rules: Q(this.gastProductionsCache) })),
								(this.definitionErrors = this.definitionErrors.concat(r))
						}),
						this.TRACE_INIT('Grammar Validations', () => {
							if (F(r) && this.skipValidations === !1) {
								let i = xp({
										rules: Q(this.gastProductionsCache),
										tokenTypes: Q(this.tokensMap),
										errMsgProvider: $t,
										grammarName: t,
									}),
									a = fp({
										lookaheadStrategy: this.lookaheadStrategy,
										rules: Q(this.gastProductionsCache),
										tokenTypes: Q(this.tokensMap),
										grammarName: t,
									})
								this.definitionErrors = this.definitionErrors.concat(i, a)
							}
						}),
						F(this.definitionErrors) &&
							(this.recoveryEnabled &&
								this.TRACE_INIT('computeAllProdsFollows', () => {
									let i = Af(Q(this.gastProductionsCache))
									this.resyncFollows = i
								}),
							this.TRACE_INIT('ComputeLookaheadFunctions', () => {
								var i, a
								;(a = (i = this.lookaheadStrategy).initialize) === null ||
									a === void 0 ||
									a.call(i, { rules: Q(this.gastProductionsCache) }),
									this.preComputeLookaheadFunctions(Q(this.gastProductionsCache))
							})),
						!bt.DEFER_DEFINITION_ERRORS_HANDLING && !F(this.definitionErrors))
					)
						throw (
							((e = I(this.definitionErrors, (i) => i.message)),
							new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`))
						)
				})
			}
			constructor(e, t) {
				;(this.definitionErrors = []), (this.selfAnalysisDone = !1)
				let r = this
				if (
					(r.initErrorHandler(t),
					r.initLexerAdapter(),
					r.initLooksAhead(t),
					r.initRecognizerEngine(e, t),
					r.initRecoverable(t),
					r.initTreeBuilder(t),
					r.initContentAssist(),
					r.initGastRecorder(t),
					r.initPerformanceTracer(t),
					L(t, 'ignoredIssues'))
				)
					throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/blog/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`)
				this.skipValidations = L(t, 'skipValidations') ? t.skipValidations : st.skipValidations
			}
		}),
		s(bt, 'Parser'),
		bt)
Hu.DEFER_DEFINITION_ERRORS_HANDLING = !1
zp(Hu, [_y, Dy, Uy, Gy, Vy, By, jy, Ky, Hy, zy])
var lr,
	qy =
		((lr = class extends Hu {
			constructor(e, t = st) {
				let r = ne(t)
				;(r.outputCst = !1), super(e, r)
			}
		}),
		s(lr, 'EmbeddedActionsParser'),
		lr)
function zt(n, e, t) {
	return `${n.name}_${e}_${t}`
}
s(zt, 'buildATNKey')
var gt = 1,
	Yy = 2,
	qp = 4,
	Yp = 5,
	va = 7,
	Xy = 8,
	Jy = 9,
	Qy = 10,
	Zy = 11,
	Xp = 12,
	ur,
	zu =
		((ur = class {
			constructor(e) {
				this.target = e
			}
			isEpsilon() {
				return !1
			}
		}),
		s(ur, 'AbstractTransition'),
		ur),
	cr,
	qu =
		((cr = class extends zu {
			constructor(e, t) {
				super(e), (this.tokenType = t)
			}
		}),
		s(cr, 'AtomTransition'),
		cr),
	dr,
	Jp =
		((dr = class extends zu {
			constructor(e) {
				super(e)
			}
			isEpsilon() {
				return !0
			}
		}),
		s(dr, 'EpsilonTransition'),
		dr),
	hr,
	Yu =
		((hr = class extends zu {
			constructor(e, t, r) {
				super(e), (this.rule = t), (this.followState = r)
			}
			isEpsilon() {
				return !0
			}
		}),
		s(hr, 'RuleTransition'),
		hr)
function Qp(n) {
	let e = {
		decisionMap: {},
		decisionStates: [],
		ruleToStartState: new Map(),
		ruleToStopState: new Map(),
		states: [],
	}
	Zp(e, n)
	let t = n.length
	for (let r = 0; r < t; r++) {
		let i = n[r],
			a = At(e, i, i)
		a !== void 0 && cm(e, i, a)
	}
	return e
}
s(Qp, 'createATN')
function Zp(n, e) {
	let t = e.length
	for (let r = 0; r < t; r++) {
		let i = e[r],
			a = X(n, i, void 0, { type: Yy }),
			o = X(n, i, void 0, { type: va })
		;(a.stop = o), n.ruleToStartState.set(i, a), n.ruleToStopState.set(i, o)
	}
}
s(Zp, 'createRuleStartAndStopATNStates')
function Xu(n, e, t) {
	return t instanceof G
		? Ks(n, e, t.terminalType, t)
		: t instanceof se
		? um(n, e, t)
		: t instanceof Te
		? im(n, e, t)
		: t instanceof te
		? am(n, e, t)
		: t instanceof j
		? em(n, e, t)
		: t instanceof ye
		? tm(n, e, t)
		: t instanceof xe
		? nm(n, e, t)
		: t instanceof Ne
		? rm(n, e, t)
		: At(n, e, t)
}
s(Xu, 'atom')
function em(n, e, t) {
	let r = X(n, e, t, { type: Yp })
	ut(n, r)
	let i = en(n, e, r, t, At(n, e, t))
	return Qu(n, e, t, i)
}
s(em, 'repetition')
function tm(n, e, t) {
	let r = X(n, e, t, { type: Yp })
	ut(n, r)
	let i = en(n, e, r, t, At(n, e, t)),
		a = Ks(n, e, t.separator, t)
	return Qu(n, e, t, i, a)
}
s(tm, 'repetitionSep')
function nm(n, e, t) {
	let r = X(n, e, t, { type: qp })
	ut(n, r)
	let i = en(n, e, r, t, At(n, e, t))
	return Ju(n, e, t, i)
}
s(nm, 'repetitionMandatory')
function rm(n, e, t) {
	let r = X(n, e, t, { type: qp })
	ut(n, r)
	let i = en(n, e, r, t, At(n, e, t)),
		a = Ks(n, e, t.separator, t)
	return Ju(n, e, t, i, a)
}
s(rm, 'repetitionMandatorySep')
function im(n, e, t) {
	let r = X(n, e, t, { type: gt })
	ut(n, r)
	let i = I(t.definition, (a) => Xu(n, e, a))
	return en(n, e, r, t, ...i)
}
s(im, 'alternation')
function am(n, e, t) {
	let r = X(n, e, t, { type: gt })
	ut(n, r)
	let i = en(n, e, r, t, At(n, e, t))
	return sm(n, e, t, i)
}
s(am, 'option')
function At(n, e, t) {
	let r = Ie(
		I(t.definition, (i) => Xu(n, e, i)),
		(i) => i !== void 0
	)
	return r.length === 1 ? r[0] : r.length === 0 ? void 0 : lm(n, r)
}
s(At, 'block')
function Ju(n, e, t, r, i) {
	let a = r.left,
		o = r.right,
		l = X(n, e, t, { type: Zy })
	ut(n, l)
	let u = X(n, e, t, { type: Xp })
	return (
		(a.loopback = l),
		(u.loopback = l),
		(n.decisionMap[zt(e, i ? 'RepetitionMandatoryWithSeparator' : 'RepetitionMandatory', t.idx)] =
			l),
		z(o, l),
		i === void 0 ? (z(l, a), z(l, u)) : (z(l, u), z(l, i.left), z(i.right, a)),
		{ left: a, right: u }
	)
}
s(Ju, 'plus')
function Qu(n, e, t, r, i) {
	let a = r.left,
		o = r.right,
		l = X(n, e, t, { type: Qy })
	ut(n, l)
	let u = X(n, e, t, { type: Xp }),
		c = X(n, e, t, { type: Jy })
	return (
		(l.loopback = c),
		(u.loopback = c),
		z(l, a),
		z(l, u),
		z(o, c),
		i !== void 0 ? (z(c, u), z(c, i.left), z(i.right, a)) : z(c, l),
		(n.decisionMap[zt(e, i ? 'RepetitionWithSeparator' : 'Repetition', t.idx)] = l),
		{ left: l, right: u }
	)
}
s(Qu, 'star')
function sm(n, e, t, r) {
	let i = r.left,
		a = r.right
	return z(i, a), (n.decisionMap[zt(e, 'Option', t.idx)] = i), r
}
s(sm, 'optional')
function ut(n, e) {
	return n.decisionStates.push(e), (e.decision = n.decisionStates.length - 1), e.decision
}
s(ut, 'defineDecisionState')
function en(n, e, t, r, ...i) {
	let a = X(n, e, r, { type: Xy, start: t })
	t.end = a
	for (let l of i) l !== void 0 ? (z(t, l.left), z(l.right, a)) : z(t, a)
	let o = { left: t, right: a }
	return (n.decisionMap[zt(e, om(r), r.idx)] = t), o
}
s(en, 'makeAlts')
function om(n) {
	if (n instanceof Te) return 'Alternation'
	if (n instanceof te) return 'Option'
	if (n instanceof j) return 'Repetition'
	if (n instanceof ye) return 'RepetitionWithSeparator'
	if (n instanceof xe) return 'RepetitionMandatory'
	if (n instanceof Ne) return 'RepetitionMandatoryWithSeparator'
	throw new Error('Invalid production type encountered')
}
s(om, 'getProdType')
function lm(n, e) {
	let t = e.length
	for (let a = 0; a < t - 1; a++) {
		let o = e[a],
			l
		o.left.transitions.length === 1 && (l = o.left.transitions[0])
		let u = l instanceof Yu,
			c = l,
			d = e[a + 1].left
		o.left.type === gt &&
		o.right.type === gt &&
		l !== void 0 &&
		((u && c.followState === o.right) || l.target === o.right)
			? (u ? (c.followState = d) : (l.target = d), dm(n, o.right))
			: z(o.right, d)
	}
	let r = e[0],
		i = e[t - 1]
	return { left: r.left, right: i.right }
}
s(lm, 'makeBlock')
function Ks(n, e, t, r) {
	let i = X(n, e, r, { type: gt }),
		a = X(n, e, r, { type: gt })
	return Ws(i, new qu(a, t)), { left: i, right: a }
}
s(Ks, 'tokenRef')
function um(n, e, t) {
	let r = t.referencedRule,
		i = n.ruleToStartState.get(r),
		a = X(n, e, t, { type: gt }),
		o = X(n, e, t, { type: gt }),
		l = new Yu(i, r, o)
	return Ws(a, l), { left: a, right: o }
}
s(um, 'ruleRef')
function cm(n, e, t) {
	let r = n.ruleToStartState.get(e)
	z(r, t.left)
	let i = n.ruleToStopState.get(e)
	return z(t.right, i), { left: r, right: i }
}
s(cm, 'buildRuleHandle')
function z(n, e) {
	let t = new Jp(e)
	Ws(n, t)
}
s(z, 'epsilon')
function X(n, e, t, r) {
	let i = Object.assign(
		{
			atn: n,
			production: t,
			epsilonOnlyTransitions: !1,
			rule: e,
			transitions: [],
			nextTokenWithinRule: [],
			stateNumber: n.states.length,
		},
		r
	)
	return n.states.push(i), i
}
s(X, 'newState')
function Ws(n, e) {
	n.transitions.length === 0 && (n.epsilonOnlyTransitions = e.isEpsilon()), n.transitions.push(e)
}
s(Ws, 'addTransition')
function dm(n, e) {
	n.states.splice(n.states.indexOf(e), 1)
}
s(dm, 'removeState')
var Za = {},
	fr,
	go =
		((fr = class {
			constructor() {
				;(this.map = {}), (this.configs = [])
			}
			get size() {
				return this.configs.length
			}
			finalize() {
				this.map = {}
			}
			add(e) {
				let t = Zu(e)
				t in this.map || ((this.map[t] = this.configs.length), this.configs.push(e))
			}
			get elements() {
				return this.configs
			}
			get alts() {
				return I(this.configs, (e) => e.alt)
			}
			get key() {
				let e = ''
				for (let t in this.map) e += t + ':'
				return e
			}
		}),
		s(fr, 'ATNConfigSet'),
		fr)
function Zu(n, e = !0) {
	return `${e ? `a${n.alt}` : ''}s${n.state.stateNumber}:${n.stack
		.map((t) => t.stateNumber.toString())
		.join('_')}`
}
s(Zu, 'getATNConfigKey')
function hm(n, e) {
	let t = {}
	return (r) => {
		let i = r.toString(),
			a = t[i]
		return a !== void 0 || ((a = { atnStartState: n, decision: e, states: {} }), (t[i] = a)), a
	}
}
s(hm, 'createDFACache')
var pr,
	fm =
		((pr = class {
			constructor() {
				this.predicates = []
			}
			is(e) {
				return e >= this.predicates.length || this.predicates[e]
			}
			set(e, t) {
				this.predicates[e] = t
			}
			toString() {
				let e = '',
					t = this.predicates.length
				for (let r = 0; r < t; r++) e += this.predicates[r] === !0 ? '1' : '0'
				return e
			}
		}),
		s(pr, 'PredicateSet'),
		pr),
	sd = new fm(),
	mr,
	eT =
		((mr = class extends Ku {
			constructor(e) {
				var t
				super(),
					(this.logging =
						(t = e == null ? void 0 : e.logging) !== null && t !== void 0
							? t
							: (r) => console.log(r))
			}
			initialize(e) {
				;(this.atn = Qp(e.rules)), (this.dfas = pm(this.atn))
			}
			validateAmbiguousAlternationAlternatives() {
				return []
			}
			validateEmptyOrAlternatives() {
				return []
			}
			buildLookaheadForAlternation(e) {
				let { prodOccurrence: t, rule: r, hasPredicates: i, dynamicTokensEnabled: a } = e,
					o = this.dfas,
					l = this.logging,
					u = zt(r, 'Alternation', t),
					c = this.atn.decisionMap[u].decision,
					d = I(lo({ maxLookahead: 1, occurrence: t, prodType: 'Alternation', rule: r }), (h) =>
						I(h, (f) => f[0])
					)
				if (yo(d, !1) && !a) {
					let h = ae(
						d,
						(f, p, g) => (
							$(p, (y) => {
								y &&
									((f[y.tokenTypeIdx] = g),
									$(y.categoryMatches, (k) => {
										f[k] = g
									}))
							}),
							f
						),
						{}
					)
					return i
						? function (f) {
								var p
								let g = this.LA(1),
									y = h[g.tokenTypeIdx]
								if (f !== void 0 && y !== void 0) {
									let k = (p = f[y]) === null || p === void 0 ? void 0 : p.GATE
									if (k !== void 0 && k.call(this) === !1) return
								}
								return y
						  }
						: function () {
								let f = this.LA(1)
								return h[f.tokenTypeIdx]
						  }
				} else
					return i
						? function (h) {
								let f = new fm(),
									p = h === void 0 ? 0 : h.length
								for (let y = 0; y < p; y++) {
									let k = h == null ? void 0 : h[y].GATE
									f.set(y, k === void 0 || k.call(this))
								}
								let g = wa.call(this, o, c, f, l)
								return typeof g == 'number' ? g : void 0
						  }
						: function () {
								let h = wa.call(this, o, c, sd, l)
								return typeof h == 'number' ? h : void 0
						  }
			}
			buildLookaheadForOptional(e) {
				let { prodOccurrence: t, rule: r, prodType: i, dynamicTokensEnabled: a } = e,
					o = this.dfas,
					l = this.logging,
					u = zt(r, i, t),
					c = this.atn.decisionMap[u].decision,
					d = I(lo({ maxLookahead: 1, occurrence: t, prodType: i, rule: r }), (h) =>
						I(h, (f) => f[0])
					)
				if (yo(d) && d[0][0] && !a) {
					let h = d[0],
						f = we(h)
					if (f.length === 1 && F(f[0].categoryMatches)) {
						let p = f[0].tokenTypeIdx
						return function () {
							return this.LA(1).tokenTypeIdx === p
						}
					} else {
						let p = ae(
							f,
							(g, y) => (
								y !== void 0 &&
									((g[y.tokenTypeIdx] = !0),
									$(y.categoryMatches, (k) => {
										g[k] = !0
									})),
								g
							),
							{}
						)
						return function () {
							let g = this.LA(1)
							return p[g.tokenTypeIdx] === !0
						}
					}
				}
				return function () {
					let h = wa.call(this, o, c, sd, l)
					return typeof h == 'object' ? !1 : h === 0
				}
			}
		}),
		s(mr, 'LLStarLookaheadStrategy'),
		mr)
function yo(n, e = !0) {
	let t = new Set()
	for (let r of n) {
		let i = new Set()
		for (let a of r) {
			if (a === void 0) {
				if (e) break
				return !1
			}
			let o = [a.tokenTypeIdx].concat(a.categoryMatches)
			for (let l of o)
				if (t.has(l)) {
					if (!i.has(l)) return !1
				} else t.add(l), i.add(l)
		}
	}
	return !0
}
s(yo, 'isLL1Sequence')
function pm(n) {
	let e = n.decisionStates.length,
		t = Array(e)
	for (let r = 0; r < e; r++) t[r] = hm(n.decisionStates[r], r)
	return t
}
s(pm, 'initATNSimulator')
function wa(n, e, t, r) {
	let i = n[e](t),
		a = i.start
	if (a === void 0) {
		let o = Cm(i.atnStartState)
		;(a = tc(i, ec(o))), (i.start = a)
	}
	return mm.apply(this, [i, a, t, r])
}
s(wa, 'adaptivePredict')
function mm(n, e, t, r) {
	let i = e,
		a = 1,
		o = [],
		l = this.LA(a++)
	for (;;) {
		let u = Am(i, l)
		if ((u === void 0 && (u = gm.apply(this, [n, i, l, a, t, r])), u === Za)) return Rm(o, i, l)
		if (u.isAcceptState === !0) return u.prediction
		;(i = u), o.push(l), (l = this.LA(a++))
	}
}
s(mm, 'performLookahead')
function gm(n, e, t, r, i, a) {
	let o = Em(e.configs, t, i)
	if (o.size === 0) return To(n, e, t, Za), Za
	let l = ec(o),
		u = Sm(o, i)
	if (u !== void 0) (l.isAcceptState = !0), (l.prediction = u), (l.configs.uniqueAlt = u)
	else if ($m(o)) {
		let c = ay(o.alts)
		;(l.isAcceptState = !0),
			(l.prediction = c),
			(l.configs.uniqueAlt = c),
			ym.apply(this, [n, r, o.alts, a])
	}
	return (l = To(n, e, t, l)), l
}
s(gm, 'computeLookaheadTarget')
function ym(n, e, t, r) {
	let i = []
	for (let c = 1; c <= e; c++) i.push(this.LA(c).tokenType)
	let a = n.atnStartState,
		o = a.rule,
		l = a.production,
		u = Tm({ topLevelRule: o, ambiguityIndices: t, production: l, prefixPath: i })
	r(u)
}
s(ym, 'reportLookaheadAmbiguity')
function Tm(n) {
	let e = I(n.prefixPath, (i) => Lt(i)).join(', '),
		t = n.production.idx === 0 ? '' : n.production.idx,
		r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(', ')}> in <${vm(
			n.production
		)}${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`
	return (
		(r =
			r +
			`See: https://chevrotain.io/docs/blog/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`),
		r
	)
}
s(Tm, 'buildAmbiguityError')
function vm(n) {
	if (n instanceof se) return 'SUBRULE'
	if (n instanceof te) return 'OPTION'
	if (n instanceof Te) return 'OR'
	if (n instanceof xe) return 'AT_LEAST_ONE'
	if (n instanceof Ne) return 'AT_LEAST_ONE_SEP'
	if (n instanceof ye) return 'MANY_SEP'
	if (n instanceof j) return 'MANY'
	if (n instanceof G) return 'CONSUME'
	throw Error('non exhaustive match')
}
s(vm, 'getProductionDslName')
function Rm(n, e, t) {
	let r = Ee(e.configs.elements, (a) => a.state.transitions),
		i = sy(
			r.filter((a) => a instanceof qu).map((a) => a.tokenType),
			(a) => a.tokenTypeIdx
		)
	return { actualToken: t, possibleTokenTypes: i, tokenPath: n }
}
s(Rm, 'buildAdaptivePredictError')
function Am(n, e) {
	return n.edges[e.tokenTypeIdx]
}
s(Am, 'getExistingTargetState')
function Em(n, e, t) {
	let r = new go(),
		i = []
	for (let o of n.elements) {
		if (t.is(o.alt) === !1) continue
		if (o.state.type === va) {
			i.push(o)
			continue
		}
		let l = o.state.transitions.length
		for (let u = 0; u < l; u++) {
			let c = o.state.transitions[u],
				d = km(c, e)
			d !== void 0 && r.add({ state: d, alt: o.alt, stack: o.stack })
		}
	}
	let a
	if ((i.length === 0 && r.size === 1 && (a = r), a === void 0)) {
		a = new go()
		for (let o of r.elements) ia(o, a)
	}
	if (i.length > 0 && !xm(a)) for (let o of i) a.add(o)
	return a
}
s(Em, 'computeReachSet')
function km(n, e) {
	if (n instanceof qu && Mu(e, n.tokenType)) return n.target
}
s(km, 'getReachableTarget')
function Sm(n, e) {
	let t
	for (let r of n.elements)
		if (e.is(r.alt) === !0) {
			if (t === void 0) t = r.alt
			else if (t !== r.alt) return
		}
	return t
}
s(Sm, 'getUniqueAlt')
function ec(n) {
	return { configs: n, edges: {}, isAcceptState: !1, prediction: -1 }
}
s(ec, 'newDFAState')
function To(n, e, t, r) {
	return (r = tc(n, r)), (e.edges[t.tokenTypeIdx] = r), r
}
s(To, 'addDFAEdge')
function tc(n, e) {
	if (e === Za) return e
	let t = e.configs.key,
		r = n.states[t]
	return r !== void 0 ? r : (e.configs.finalize(), (n.states[t] = e), e)
}
s(tc, 'addDFAState')
function Cm(n) {
	let e = new go(),
		t = n.transitions.length
	for (let r = 0; r < t; r++) {
		let i = { state: n.transitions[r].target, alt: r, stack: [] }
		ia(i, e)
	}
	return e
}
s(Cm, 'computeStartState')
function ia(n, e) {
	let t = n.state
	if (t.type === va) {
		if (n.stack.length > 0) {
			let i = [...n.stack],
				a = { state: i.pop(), alt: n.alt, stack: i }
			ia(a, e)
		} else e.add(n)
		return
	}
	t.epsilonOnlyTransitions || e.add(n)
	let r = t.transitions.length
	for (let i = 0; i < r; i++) {
		let a = t.transitions[i],
			o = Im(n, a)
		o !== void 0 && ia(o, e)
	}
}
s(ia, 'closure')
function Im(n, e) {
	if (e instanceof Jp) return { state: e.target, alt: n.alt, stack: n.stack }
	if (e instanceof Yu) {
		let t = [...n.stack, e.followState]
		return { state: e.target, alt: n.alt, stack: t }
	}
}
s(Im, 'getEpsilonTarget')
function xm(n) {
	for (let e of n.elements) if (e.state.type === va) return !0
	return !1
}
s(xm, 'hasConfigInRuleStopState')
function Nm(n) {
	for (let e of n.elements) if (e.state.type !== va) return !1
	return !0
}
s(Nm, 'allConfigsInRuleStopStates')
function $m(n) {
	if (Nm(n)) return !0
	let e = Lm(n.elements)
	return bm(e) && !wm(e)
}
s($m, 'hasConflictTerminatingPrediction')
function Lm(n) {
	let e = new Map()
	for (let t of n) {
		let r = Zu(t, !1),
			i = e.get(r)
		i === void 0 && ((i = {}), e.set(r, i)), (i[t.alt] = !0)
	}
	return e
}
s(Lm, 'getConflictingAltSets')
function bm(n) {
	for (let e of Array.from(n.values())) if (Object.keys(e).length > 1) return !0
	return !1
}
s(bm, 'hasConflictingAltSet')
function wm(n) {
	for (let e of Array.from(n.values())) if (Object.keys(e).length === 1) return !0
	return !1
}
s(wm, 'hasStateAssociatedWithOneAlt')
var od
;(function (n) {
	function e(t) {
		return typeof t == 'string'
	}
	s(e, 'is'), (n.is = e)
})(od || (od = {}))
var vo
;(function (n) {
	function e(t) {
		return typeof t == 'string'
	}
	s(e, 'is'), (n.is = e)
})(vo || (vo = {}))
var ld
;(function (n) {
	;(n.MIN_VALUE = -2147483648), (n.MAX_VALUE = 2147483647)
	function e(t) {
		return typeof t == 'number' && n.MIN_VALUE <= t && t <= n.MAX_VALUE
	}
	s(e, 'is'), (n.is = e)
})(ld || (ld = {}))
var es
;(function (n) {
	;(n.MIN_VALUE = 0), (n.MAX_VALUE = 2147483647)
	function e(t) {
		return typeof t == 'number' && n.MIN_VALUE <= t && t <= n.MAX_VALUE
	}
	s(e, 'is'), (n.is = e)
})(es || (es = {}))
var M
;(function (n) {
	function e(r, i) {
		return (
			r === Number.MAX_VALUE && (r = es.MAX_VALUE),
			i === Number.MAX_VALUE && (i = es.MAX_VALUE),
			{ line: r, character: i }
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.objectLiteral(i) && m.uinteger(i.line) && m.uinteger(i.character)
	}
	s(t, 'is'), (n.is = t)
})(M || (M = {}))
var _
;(function (n) {
	function e(r, i, a, o) {
		if (m.uinteger(r) && m.uinteger(i) && m.uinteger(a) && m.uinteger(o))
			return { start: M.create(r, i), end: M.create(a, o) }
		if (M.is(r) && M.is(i)) return { start: r, end: i }
		throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${a}, ${o}]`)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.objectLiteral(i) && M.is(i.start) && M.is(i.end)
	}
	s(t, 'is'), (n.is = t)
})(_ || (_ = {}))
var ts
;(function (n) {
	function e(r, i) {
		return { uri: r, range: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.objectLiteral(i) && _.is(i.range) && (m.string(i.uri) || m.undefined(i.uri))
	}
	s(t, 'is'), (n.is = t)
})(ts || (ts = {}))
var ud
;(function (n) {
	function e(r, i, a, o) {
		return { targetUri: r, targetRange: i, targetSelectionRange: a, originSelectionRange: o }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			_.is(i.targetRange) &&
			m.string(i.targetUri) &&
			_.is(i.targetSelectionRange) &&
			(_.is(i.originSelectionRange) || m.undefined(i.originSelectionRange))
		)
	}
	s(t, 'is'), (n.is = t)
})(ud || (ud = {}))
var Ro
;(function (n) {
	function e(r, i, a, o) {
		return { red: r, green: i, blue: a, alpha: o }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			m.numberRange(i.red, 0, 1) &&
			m.numberRange(i.green, 0, 1) &&
			m.numberRange(i.blue, 0, 1) &&
			m.numberRange(i.alpha, 0, 1)
		)
	}
	s(t, 'is'), (n.is = t)
})(Ro || (Ro = {}))
var cd
;(function (n) {
	function e(r, i) {
		return { range: r, color: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.objectLiteral(i) && _.is(i.range) && Ro.is(i.color)
	}
	s(t, 'is'), (n.is = t)
})(cd || (cd = {}))
var dd
;(function (n) {
	function e(r, i, a) {
		return { label: r, textEdit: i, additionalTextEdits: a }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			m.string(i.label) &&
			(m.undefined(i.textEdit) || ki.is(i)) &&
			(m.undefined(i.additionalTextEdits) || m.typedArray(i.additionalTextEdits, ki.is))
		)
	}
	s(t, 'is'), (n.is = t)
})(dd || (dd = {}))
var hd
;(function (n) {
	;(n.Comment = 'comment'), (n.Imports = 'imports'), (n.Region = 'region')
})(hd || (hd = {}))
var fd
;(function (n) {
	function e(r, i, a, o, l, u) {
		let c = { startLine: r, endLine: i }
		return (
			m.defined(a) && (c.startCharacter = a),
			m.defined(o) && (c.endCharacter = o),
			m.defined(l) && (c.kind = l),
			m.defined(u) && (c.collapsedText = u),
			c
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			m.uinteger(i.startLine) &&
			m.uinteger(i.startLine) &&
			(m.undefined(i.startCharacter) || m.uinteger(i.startCharacter)) &&
			(m.undefined(i.endCharacter) || m.uinteger(i.endCharacter)) &&
			(m.undefined(i.kind) || m.string(i.kind))
		)
	}
	s(t, 'is'), (n.is = t)
})(fd || (fd = {}))
var Ao
;(function (n) {
	function e(r, i) {
		return { location: r, message: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && ts.is(i.location) && m.string(i.message)
	}
	s(t, 'is'), (n.is = t)
})(Ao || (Ao = {}))
var pd
;(function (n) {
	;(n.Error = 1), (n.Warning = 2), (n.Information = 3), (n.Hint = 4)
})(pd || (pd = {}))
var md
;(function (n) {
	;(n.Unnecessary = 1), (n.Deprecated = 2)
})(md || (md = {}))
var gd
;(function (n) {
	function e(t) {
		let r = t
		return m.objectLiteral(r) && m.string(r.href)
	}
	s(e, 'is'), (n.is = e)
})(gd || (gd = {}))
var ns
;(function (n) {
	function e(r, i, a, o, l, u) {
		let c = { range: r, message: i }
		return (
			m.defined(a) && (c.severity = a),
			m.defined(o) && (c.code = o),
			m.defined(l) && (c.source = l),
			m.defined(u) && (c.relatedInformation = u),
			c
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		var i
		let a = r
		return (
			m.defined(a) &&
			_.is(a.range) &&
			m.string(a.message) &&
			(m.number(a.severity) || m.undefined(a.severity)) &&
			(m.integer(a.code) || m.string(a.code) || m.undefined(a.code)) &&
			(m.undefined(a.codeDescription) ||
				m.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) &&
			(m.string(a.source) || m.undefined(a.source)) &&
			(m.undefined(a.relatedInformation) || m.typedArray(a.relatedInformation, Ao.is))
		)
	}
	s(t, 'is'), (n.is = t)
})(ns || (ns = {}))
var Ei
;(function (n) {
	function e(r, i, ...a) {
		let o = { title: r, command: i }
		return m.defined(a) && a.length > 0 && (o.arguments = a), o
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && m.string(i.title) && m.string(i.command)
	}
	s(t, 'is'), (n.is = t)
})(Ei || (Ei = {}))
var ki
;(function (n) {
	function e(a, o) {
		return { range: a, newText: o }
	}
	s(e, 'replace'), (n.replace = e)
	function t(a, o) {
		return { range: { start: a, end: a }, newText: o }
	}
	s(t, 'insert'), (n.insert = t)
	function r(a) {
		return { range: a, newText: '' }
	}
	s(r, 'del'), (n.del = r)
	function i(a) {
		let o = a
		return m.objectLiteral(o) && m.string(o.newText) && _.is(o.range)
	}
	s(i, 'is'), (n.is = i)
})(ki || (ki = {}))
var Eo
;(function (n) {
	function e(r, i, a) {
		let o = { label: r }
		return i !== void 0 && (o.needsConfirmation = i), a !== void 0 && (o.description = a), o
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			m.string(i.label) &&
			(m.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) &&
			(m.string(i.description) || i.description === void 0)
		)
	}
	s(t, 'is'), (n.is = t)
})(Eo || (Eo = {}))
var Si
;(function (n) {
	function e(t) {
		let r = t
		return m.string(r)
	}
	s(e, 'is'), (n.is = e)
})(Si || (Si = {}))
var yd
;(function (n) {
	function e(a, o, l) {
		return { range: a, newText: o, annotationId: l }
	}
	s(e, 'replace'), (n.replace = e)
	function t(a, o, l) {
		return { range: { start: a, end: a }, newText: o, annotationId: l }
	}
	s(t, 'insert'), (n.insert = t)
	function r(a, o) {
		return { range: a, newText: '', annotationId: o }
	}
	s(r, 'del'), (n.del = r)
	function i(a) {
		let o = a
		return ki.is(o) && (Eo.is(o.annotationId) || Si.is(o.annotationId))
	}
	s(i, 'is'), (n.is = i)
})(yd || (yd = {}))
var ko
;(function (n) {
	function e(r, i) {
		return { textDocument: r, edits: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && No.is(i.textDocument) && Array.isArray(i.edits)
	}
	s(t, 'is'), (n.is = t)
})(ko || (ko = {}))
var So
;(function (n) {
	function e(r, i, a) {
		let o = { kind: 'create', uri: r }
		return (
			i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i),
			a !== void 0 && (o.annotationId = a),
			o
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i &&
			i.kind === 'create' &&
			m.string(i.uri) &&
			(i.options === void 0 ||
				((i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) &&
					(i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists)))) &&
			(i.annotationId === void 0 || Si.is(i.annotationId))
		)
	}
	s(t, 'is'), (n.is = t)
})(So || (So = {}))
var Co
;(function (n) {
	function e(r, i, a, o) {
		let l = { kind: 'rename', oldUri: r, newUri: i }
		return (
			a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (l.options = a),
			o !== void 0 && (l.annotationId = o),
			l
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i &&
			i.kind === 'rename' &&
			m.string(i.oldUri) &&
			m.string(i.newUri) &&
			(i.options === void 0 ||
				((i.options.overwrite === void 0 || m.boolean(i.options.overwrite)) &&
					(i.options.ignoreIfExists === void 0 || m.boolean(i.options.ignoreIfExists)))) &&
			(i.annotationId === void 0 || Si.is(i.annotationId))
		)
	}
	s(t, 'is'), (n.is = t)
})(Co || (Co = {}))
var Io
;(function (n) {
	function e(r, i, a) {
		let o = { kind: 'delete', uri: r }
		return (
			i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i),
			a !== void 0 && (o.annotationId = a),
			o
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i &&
			i.kind === 'delete' &&
			m.string(i.uri) &&
			(i.options === void 0 ||
				((i.options.recursive === void 0 || m.boolean(i.options.recursive)) &&
					(i.options.ignoreIfNotExists === void 0 || m.boolean(i.options.ignoreIfNotExists)))) &&
			(i.annotationId === void 0 || Si.is(i.annotationId))
		)
	}
	s(t, 'is'), (n.is = t)
})(Io || (Io = {}))
var xo
;(function (n) {
	function e(t) {
		let r = t
		return (
			r &&
			(r.changes !== void 0 || r.documentChanges !== void 0) &&
			(r.documentChanges === void 0 ||
				r.documentChanges.every((i) =>
					m.string(i.kind) ? So.is(i) || Co.is(i) || Io.is(i) : ko.is(i)
				))
		)
	}
	s(e, 'is'), (n.is = e)
})(xo || (xo = {}))
var Td
;(function (n) {
	function e(r) {
		return { uri: r }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && m.string(i.uri)
	}
	s(t, 'is'), (n.is = t)
})(Td || (Td = {}))
var vd
;(function (n) {
	function e(r, i) {
		return { uri: r, version: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && m.string(i.uri) && m.integer(i.version)
	}
	s(t, 'is'), (n.is = t)
})(vd || (vd = {}))
var No
;(function (n) {
	function e(r, i) {
		return { uri: r, version: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && m.string(i.uri) && (i.version === null || m.integer(i.version))
	}
	s(t, 'is'), (n.is = t)
})(No || (No = {}))
var Rd
;(function (n) {
	function e(r, i, a, o) {
		return { uri: r, languageId: i, version: a, text: o }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.defined(i) &&
			m.string(i.uri) &&
			m.string(i.languageId) &&
			m.integer(i.version) &&
			m.string(i.text)
		)
	}
	s(t, 'is'), (n.is = t)
})(Rd || (Rd = {}))
var $o
;(function (n) {
	;(n.PlainText = 'plaintext'), (n.Markdown = 'markdown')
	function e(t) {
		let r = t
		return r === n.PlainText || r === n.Markdown
	}
	s(e, 'is'), (n.is = e)
})($o || ($o = {}))
var aa
;(function (n) {
	function e(t) {
		let r = t
		return m.objectLiteral(t) && $o.is(r.kind) && m.string(r.value)
	}
	s(e, 'is'), (n.is = e)
})(aa || (aa = {}))
var Ad
;(function (n) {
	;(n.Text = 1),
		(n.Method = 2),
		(n.Function = 3),
		(n.Constructor = 4),
		(n.Field = 5),
		(n.Variable = 6),
		(n.Class = 7),
		(n.Interface = 8),
		(n.Module = 9),
		(n.Property = 10),
		(n.Unit = 11),
		(n.Value = 12),
		(n.Enum = 13),
		(n.Keyword = 14),
		(n.Snippet = 15),
		(n.Color = 16),
		(n.File = 17),
		(n.Reference = 18),
		(n.Folder = 19),
		(n.EnumMember = 20),
		(n.Constant = 21),
		(n.Struct = 22),
		(n.Event = 23),
		(n.Operator = 24),
		(n.TypeParameter = 25)
})(Ad || (Ad = {}))
var Ed
;(function (n) {
	;(n.PlainText = 1), (n.Snippet = 2)
})(Ed || (Ed = {}))
var kd
;(function (n) {
	n.Deprecated = 1
})(kd || (kd = {}))
var Sd
;(function (n) {
	function e(r, i, a) {
		return { newText: r, insert: i, replace: a }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return i && m.string(i.newText) && _.is(i.insert) && _.is(i.replace)
	}
	s(t, 'is'), (n.is = t)
})(Sd || (Sd = {}))
var Cd
;(function (n) {
	;(n.asIs = 1), (n.adjustIndentation = 2)
})(Cd || (Cd = {}))
var Id
;(function (n) {
	function e(t) {
		let r = t
		return (
			r &&
			(m.string(r.detail) || r.detail === void 0) &&
			(m.string(r.description) || r.description === void 0)
		)
	}
	s(e, 'is'), (n.is = e)
})(Id || (Id = {}))
var xd
;(function (n) {
	function e(t) {
		return { label: t }
	}
	s(e, 'create'), (n.create = e)
})(xd || (xd = {}))
var Nd
;(function (n) {
	function e(t, r) {
		return { items: t || [], isIncomplete: !!r }
	}
	s(e, 'create'), (n.create = e)
})(Nd || (Nd = {}))
var rs
;(function (n) {
	function e(r) {
		return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
	}
	s(e, 'fromPlainText'), (n.fromPlainText = e)
	function t(r) {
		let i = r
		return m.string(i) || (m.objectLiteral(i) && m.string(i.language) && m.string(i.value))
	}
	s(t, 'is'), (n.is = t)
})(rs || (rs = {}))
var $d
;(function (n) {
	function e(t) {
		let r = t
		return (
			!!r &&
			m.objectLiteral(r) &&
			(aa.is(r.contents) || rs.is(r.contents) || m.typedArray(r.contents, rs.is)) &&
			(t.range === void 0 || _.is(t.range))
		)
	}
	s(e, 'is'), (n.is = e)
})($d || ($d = {}))
var Ld
;(function (n) {
	function e(t, r) {
		return r ? { label: t, documentation: r } : { label: t }
	}
	s(e, 'create'), (n.create = e)
})(Ld || (Ld = {}))
var bd
;(function (n) {
	function e(t, r, ...i) {
		let a = { label: t }
		return (
			m.defined(r) && (a.documentation = r),
			m.defined(i) ? (a.parameters = i) : (a.parameters = []),
			a
		)
	}
	s(e, 'create'), (n.create = e)
})(bd || (bd = {}))
var wd
;(function (n) {
	;(n.Text = 1), (n.Read = 2), (n.Write = 3)
})(wd || (wd = {}))
var Pd
;(function (n) {
	function e(t, r) {
		let i = { range: t }
		return m.number(r) && (i.kind = r), i
	}
	s(e, 'create'), (n.create = e)
})(Pd || (Pd = {}))
var Od
;(function (n) {
	;(n.File = 1),
		(n.Module = 2),
		(n.Namespace = 3),
		(n.Package = 4),
		(n.Class = 5),
		(n.Method = 6),
		(n.Property = 7),
		(n.Field = 8),
		(n.Constructor = 9),
		(n.Enum = 10),
		(n.Interface = 11),
		(n.Function = 12),
		(n.Variable = 13),
		(n.Constant = 14),
		(n.String = 15),
		(n.Number = 16),
		(n.Boolean = 17),
		(n.Array = 18),
		(n.Object = 19),
		(n.Key = 20),
		(n.Null = 21),
		(n.EnumMember = 22),
		(n.Struct = 23),
		(n.Event = 24),
		(n.Operator = 25),
		(n.TypeParameter = 26)
})(Od || (Od = {}))
var _d
;(function (n) {
	n.Deprecated = 1
})(_d || (_d = {}))
var Dd
;(function (n) {
	function e(t, r, i, a, o) {
		let l = { name: t, kind: r, location: { uri: a, range: i } }
		return o && (l.containerName = o), l
	}
	s(e, 'create'), (n.create = e)
})(Dd || (Dd = {}))
var Md
;(function (n) {
	function e(t, r, i, a) {
		return a !== void 0
			? { name: t, kind: r, location: { uri: i, range: a } }
			: { name: t, kind: r, location: { uri: i } }
	}
	s(e, 'create'), (n.create = e)
})(Md || (Md = {}))
var Fd
;(function (n) {
	function e(r, i, a, o, l, u) {
		let c = { name: r, detail: i, kind: a, range: o, selectionRange: l }
		return u !== void 0 && (c.children = u), c
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i &&
			m.string(i.name) &&
			m.number(i.kind) &&
			_.is(i.range) &&
			_.is(i.selectionRange) &&
			(i.detail === void 0 || m.string(i.detail)) &&
			(i.deprecated === void 0 || m.boolean(i.deprecated)) &&
			(i.children === void 0 || Array.isArray(i.children)) &&
			(i.tags === void 0 || Array.isArray(i.tags))
		)
	}
	s(t, 'is'), (n.is = t)
})(Fd || (Fd = {}))
var Ud
;(function (n) {
	;(n.Empty = ''),
		(n.QuickFix = 'quickfix'),
		(n.Refactor = 'refactor'),
		(n.RefactorExtract = 'refactor.extract'),
		(n.RefactorInline = 'refactor.inline'),
		(n.RefactorRewrite = 'refactor.rewrite'),
		(n.Source = 'source'),
		(n.SourceOrganizeImports = 'source.organizeImports'),
		(n.SourceFixAll = 'source.fixAll')
})(Ud || (Ud = {}))
var is
;(function (n) {
	;(n.Invoked = 1), (n.Automatic = 2)
})(is || (is = {}))
var Gd
;(function (n) {
	function e(r, i, a) {
		let o = { diagnostics: r }
		return i != null && (o.only = i), a != null && (o.triggerKind = a), o
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.defined(i) &&
			m.typedArray(i.diagnostics, ns.is) &&
			(i.only === void 0 || m.typedArray(i.only, m.string)) &&
			(i.triggerKind === void 0 || i.triggerKind === is.Invoked || i.triggerKind === is.Automatic)
		)
	}
	s(t, 'is'), (n.is = t)
})(Gd || (Gd = {}))
var Bd
;(function (n) {
	function e(r, i, a) {
		let o = { title: r },
			l = !0
		return (
			typeof i == 'string' ? ((l = !1), (o.kind = i)) : Ei.is(i) ? (o.command = i) : (o.edit = i),
			l && a !== void 0 && (o.kind = a),
			o
		)
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i &&
			m.string(i.title) &&
			(i.diagnostics === void 0 || m.typedArray(i.diagnostics, ns.is)) &&
			(i.kind === void 0 || m.string(i.kind)) &&
			(i.edit !== void 0 || i.command !== void 0) &&
			(i.command === void 0 || Ei.is(i.command)) &&
			(i.isPreferred === void 0 || m.boolean(i.isPreferred)) &&
			(i.edit === void 0 || xo.is(i.edit))
		)
	}
	s(t, 'is'), (n.is = t)
})(Bd || (Bd = {}))
var Vd
;(function (n) {
	function e(r, i) {
		let a = { range: r }
		return m.defined(i) && (a.data = i), a
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && _.is(i.range) && (m.undefined(i.command) || Ei.is(i.command))
	}
	s(t, 'is'), (n.is = t)
})(Vd || (Vd = {}))
var jd
;(function (n) {
	function e(r, i) {
		return { tabSize: r, insertSpaces: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && m.uinteger(i.tabSize) && m.boolean(i.insertSpaces)
	}
	s(t, 'is'), (n.is = t)
})(jd || (jd = {}))
var Kd
;(function (n) {
	function e(r, i, a) {
		return { range: r, target: i, data: a }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && _.is(i.range) && (m.undefined(i.target) || m.string(i.target))
	}
	s(t, 'is'), (n.is = t)
})(Kd || (Kd = {}))
var Wd
;(function (n) {
	function e(r, i) {
		return { range: r, parent: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.objectLiteral(i) && _.is(i.range) && (i.parent === void 0 || n.is(i.parent))
	}
	s(t, 'is'), (n.is = t)
})(Wd || (Wd = {}))
var Hd
;(function (n) {
	;(n.namespace = 'namespace'),
		(n.type = 'type'),
		(n.class = 'class'),
		(n.enum = 'enum'),
		(n.interface = 'interface'),
		(n.struct = 'struct'),
		(n.typeParameter = 'typeParameter'),
		(n.parameter = 'parameter'),
		(n.variable = 'variable'),
		(n.property = 'property'),
		(n.enumMember = 'enumMember'),
		(n.event = 'event'),
		(n.function = 'function'),
		(n.method = 'method'),
		(n.macro = 'macro'),
		(n.keyword = 'keyword'),
		(n.modifier = 'modifier'),
		(n.comment = 'comment'),
		(n.string = 'string'),
		(n.number = 'number'),
		(n.regexp = 'regexp'),
		(n.operator = 'operator'),
		(n.decorator = 'decorator')
})(Hd || (Hd = {}))
var zd
;(function (n) {
	;(n.declaration = 'declaration'),
		(n.definition = 'definition'),
		(n.readonly = 'readonly'),
		(n.static = 'static'),
		(n.deprecated = 'deprecated'),
		(n.abstract = 'abstract'),
		(n.async = 'async'),
		(n.modification = 'modification'),
		(n.documentation = 'documentation'),
		(n.defaultLibrary = 'defaultLibrary')
})(zd || (zd = {}))
var qd
;(function (n) {
	function e(t) {
		let r = t
		return (
			m.objectLiteral(r) &&
			(r.resultId === void 0 || typeof r.resultId == 'string') &&
			Array.isArray(r.data) &&
			(r.data.length === 0 || typeof r.data[0] == 'number')
		)
	}
	s(e, 'is'), (n.is = e)
})(qd || (qd = {}))
var Yd
;(function (n) {
	function e(r, i) {
		return { range: r, text: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return i != null && _.is(i.range) && m.string(i.text)
	}
	s(t, 'is'), (n.is = t)
})(Yd || (Yd = {}))
var Xd
;(function (n) {
	function e(r, i, a) {
		return { range: r, variableName: i, caseSensitiveLookup: a }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			i != null &&
			_.is(i.range) &&
			m.boolean(i.caseSensitiveLookup) &&
			(m.string(i.variableName) || i.variableName === void 0)
		)
	}
	s(t, 'is'), (n.is = t)
})(Xd || (Xd = {}))
var Jd
;(function (n) {
	function e(r, i) {
		return { range: r, expression: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return i != null && _.is(i.range) && (m.string(i.expression) || i.expression === void 0)
	}
	s(t, 'is'), (n.is = t)
})(Jd || (Jd = {}))
var Qd
;(function (n) {
	function e(r, i) {
		return { frameId: r, stoppedLocation: i }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return m.defined(i) && _.is(r.stoppedLocation)
	}
	s(t, 'is'), (n.is = t)
})(Qd || (Qd = {}))
var Lo
;(function (n) {
	;(n.Type = 1), (n.Parameter = 2)
	function e(t) {
		return t === 1 || t === 2
	}
	s(e, 'is'), (n.is = e)
})(Lo || (Lo = {}))
var bo
;(function (n) {
	function e(r) {
		return { value: r }
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			m.objectLiteral(i) &&
			(i.tooltip === void 0 || m.string(i.tooltip) || aa.is(i.tooltip)) &&
			(i.location === void 0 || ts.is(i.location)) &&
			(i.command === void 0 || Ei.is(i.command))
		)
	}
	s(t, 'is'), (n.is = t)
})(bo || (bo = {}))
var Zd
;(function (n) {
	function e(r, i, a) {
		let o = { position: r, label: i }
		return a !== void 0 && (o.kind = a), o
	}
	s(e, 'create'), (n.create = e)
	function t(r) {
		let i = r
		return (
			(m.objectLiteral(i) &&
				M.is(i.position) &&
				(m.string(i.label) || m.typedArray(i.label, bo.is)) &&
				(i.kind === void 0 || Lo.is(i.kind)) &&
				i.textEdits === void 0) ||
			(m.typedArray(i.textEdits, ki.is) &&
				(i.tooltip === void 0 || m.string(i.tooltip) || aa.is(i.tooltip)) &&
				(i.paddingLeft === void 0 || m.boolean(i.paddingLeft)) &&
				(i.paddingRight === void 0 || m.boolean(i.paddingRight)))
		)
	}
	s(t, 'is'), (n.is = t)
})(Zd || (Zd = {}))
var eh
;(function (n) {
	function e(t) {
		return { kind: 'snippet', value: t }
	}
	s(e, 'createSnippet'), (n.createSnippet = e)
})(eh || (eh = {}))
var th
;(function (n) {
	function e(t, r, i, a) {
		return { insertText: t, filterText: r, range: i, command: a }
	}
	s(e, 'create'), (n.create = e)
})(th || (th = {}))
var nh
;(function (n) {
	function e(t) {
		return { items: t }
	}
	s(e, 'create'), (n.create = e)
})(nh || (nh = {}))
var rh
;(function (n) {
	;(n.Invoked = 0), (n.Automatic = 1)
})(rh || (rh = {}))
var ih
;(function (n) {
	function e(t, r) {
		return { range: t, text: r }
	}
	s(e, 'create'), (n.create = e)
})(ih || (ih = {}))
var ah
;(function (n) {
	function e(t, r) {
		return { triggerKind: t, selectedCompletionInfo: r }
	}
	s(e, 'create'), (n.create = e)
})(ah || (ah = {}))
var sh
;(function (n) {
	function e(t) {
		let r = t
		return m.objectLiteral(r) && vo.is(r.uri) && m.string(r.name)
	}
	s(e, 'is'), (n.is = e)
})(sh || (sh = {}))
var oh
;(function (n) {
	function e(a, o, l, u) {
		return new tT(a, o, l, u)
	}
	s(e, 'create'), (n.create = e)
	function t(a) {
		let o = a
		return !!(
			m.defined(o) &&
			m.string(o.uri) &&
			(m.undefined(o.languageId) || m.string(o.languageId)) &&
			m.uinteger(o.lineCount) &&
			m.func(o.getText) &&
			m.func(o.positionAt) &&
			m.func(o.offsetAt)
		)
	}
	s(t, 'is'), (n.is = t)
	function r(a, o) {
		let l = a.getText(),
			u = i(o, (d, h) => {
				let f = d.range.start.line - h.range.start.line
				return f === 0 ? d.range.start.character - h.range.start.character : f
			}),
			c = l.length
		for (let d = u.length - 1; d >= 0; d--) {
			let h = u[d],
				f = a.offsetAt(h.range.start),
				p = a.offsetAt(h.range.end)
			if (p <= c) l = l.substring(0, f) + h.newText + l.substring(p, l.length)
			else throw new Error('Overlapping edit')
			c = f
		}
		return l
	}
	s(r, 'applyEdits'), (n.applyEdits = r)
	function i(a, o) {
		if (a.length <= 1) return a
		let l = (a.length / 2) | 0,
			u = a.slice(0, l),
			c = a.slice(l)
		i(u, o), i(c, o)
		let d = 0,
			h = 0,
			f = 0
		for (; d < u.length && h < c.length; )
			o(u[d], c[h]) <= 0 ? (a[f++] = u[d++]) : (a[f++] = c[h++])
		for (; d < u.length; ) a[f++] = u[d++]
		for (; h < c.length; ) a[f++] = c[h++]
		return a
	}
	s(i, 'mergeSort')
})(oh || (oh = {}))
var gr,
	tT =
		((gr = class {
			constructor(e, t, r, i) {
				;(this._uri = e),
					(this._languageId = t),
					(this._version = r),
					(this._content = i),
					(this._lineOffsets = void 0)
			}
			get uri() {
				return this._uri
			}
			get languageId() {
				return this._languageId
			}
			get version() {
				return this._version
			}
			getText(e) {
				if (e) {
					let t = this.offsetAt(e.start),
						r = this.offsetAt(e.end)
					return this._content.substring(t, r)
				}
				return this._content
			}
			update(e, t) {
				;(this._content = e.text), (this._version = t), (this._lineOffsets = void 0)
			}
			getLineOffsets() {
				if (this._lineOffsets === void 0) {
					let e = [],
						t = this._content,
						r = !0
					for (let i = 0; i < t.length; i++) {
						r && (e.push(i), (r = !1))
						let a = t.charAt(i)
						;(r =
							a === '\r' ||
							a ===
								`
`),
							a === '\r' &&
								i + 1 < t.length &&
								t.charAt(i + 1) ===
									`
` &&
								i++
					}
					r && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
				}
				return this._lineOffsets
			}
			positionAt(e) {
				e = Math.max(Math.min(e, this._content.length), 0)
				let t = this.getLineOffsets(),
					r = 0,
					i = t.length
				if (i === 0) return M.create(0, e)
				for (; r < i; ) {
					let o = Math.floor((r + i) / 2)
					t[o] > e ? (i = o) : (r = o + 1)
				}
				let a = r - 1
				return M.create(a, e - t[a])
			}
			offsetAt(e) {
				let t = this.getLineOffsets()
				if (e.line >= t.length) return this._content.length
				if (e.line < 0) return 0
				let r = t[e.line],
					i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
				return Math.max(Math.min(r + e.character, i), r)
			}
			get lineCount() {
				return this.getLineOffsets().length
			}
		}),
		s(gr, 'FullTextDocument'),
		gr),
	m
;(function (n) {
	let e = Object.prototype.toString
	function t(p) {
		return typeof p < 'u'
	}
	s(t, 'defined'), (n.defined = t)
	function r(p) {
		return typeof p > 'u'
	}
	s(r, 'undefined'), (n.undefined = r)
	function i(p) {
		return p === !0 || p === !1
	}
	s(i, 'boolean'), (n.boolean = i)
	function a(p) {
		return e.call(p) === '[object String]'
	}
	s(a, 'string'), (n.string = a)
	function o(p) {
		return e.call(p) === '[object Number]'
	}
	s(o, 'number'), (n.number = o)
	function l(p, g, y) {
		return e.call(p) === '[object Number]' && g <= p && p <= y
	}
	s(l, 'numberRange'), (n.numberRange = l)
	function u(p) {
		return e.call(p) === '[object Number]' && -2147483648 <= p && p <= 2147483647
	}
	s(u, 'integer'), (n.integer = u)
	function c(p) {
		return e.call(p) === '[object Number]' && 0 <= p && p <= 2147483647
	}
	s(c, 'uinteger'), (n.uinteger = c)
	function d(p) {
		return e.call(p) === '[object Function]'
	}
	s(d, 'func'), (n.func = d)
	function h(p) {
		return p !== null && typeof p == 'object'
	}
	s(h, 'objectLiteral'), (n.objectLiteral = h)
	function f(p, g) {
		return Array.isArray(p) && p.every(g)
	}
	s(f, 'typedArray'), (n.typedArray = f)
})(m || (m = {}))
var yr,
	Pm =
		((yr = class {
			constructor() {
				this.nodeStack = []
			}
			get current() {
				return this.nodeStack[this.nodeStack.length - 1]
			}
			buildRootNode(e) {
				return (
					(this.rootNode = new rc(e)),
					(this.rootNode.root = this.rootNode),
					(this.nodeStack = [this.rootNode]),
					this.rootNode
				)
			}
			buildCompositeNode(e) {
				let t = new Hs()
				return (
					(t.grammarSource = e),
					(t.root = this.rootNode),
					this.current.content.push(t),
					this.nodeStack.push(t),
					t
				)
			}
			buildLeafNode(e, t) {
				let r = new as(e.startOffset, e.image.length, Zi(e), e.tokenType, !1)
				return (r.grammarSource = t), (r.root = this.rootNode), this.current.content.push(r), r
			}
			removeNode(e) {
				let t = e.container
				if (t) {
					let r = t.content.indexOf(e)
					r >= 0 && t.content.splice(r, 1)
				}
			}
			construct(e) {
				let t = this.current
				typeof e.$type == 'string' && (this.current.astNode = e), (e.$cstNode = t)
				let r = this.nodeStack.pop()
				;(r == null ? void 0 : r.content.length) === 0 && this.removeNode(r)
			}
			addHiddenTokens(e) {
				for (let t of e) {
					let r = new as(t.startOffset, t.image.length, Zi(t), t.tokenType, !0)
					;(r.root = this.rootNode), this.addHiddenToken(this.rootNode, r)
				}
			}
			addHiddenToken(e, t) {
				let { offset: r, end: i } = t
				for (let a = 0; a < e.content.length; a++) {
					let o = e.content[a],
						{ offset: l, end: u } = o
					if (He(o) && r > l && i < u) {
						this.addHiddenToken(o, t)
						return
					} else if (i <= l) {
						e.content.splice(a, 0, t)
						return
					}
				}
				e.content.push(t)
			}
		}),
		s(yr, 'CstNodeBuilder'),
		yr),
	Tr,
	nc =
		((Tr = class {
			get parent() {
				return this.container
			}
			get feature() {
				return this.grammarSource
			}
			get hidden() {
				return !1
			}
			get astNode() {
				var e, t
				let r =
					typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == 'string'
						? this._astNode
						: (t = this.container) === null || t === void 0
						? void 0
						: t.astNode
				if (!r) throw new Error('This node has no associated AST element')
				return r
			}
			set astNode(e) {
				this._astNode = e
			}
			get element() {
				return this.astNode
			}
			get text() {
				return this.root.fullText.substring(this.offset, this.end)
			}
		}),
		s(Tr, 'AbstractCstNode'),
		Tr),
	vr,
	as =
		((vr = class extends nc {
			get offset() {
				return this._offset
			}
			get length() {
				return this._length
			}
			get end() {
				return this._offset + this._length
			}
			get hidden() {
				return this._hidden
			}
			get tokenType() {
				return this._tokenType
			}
			get range() {
				return this._range
			}
			constructor(e, t, r, i, a = !1) {
				super(),
					(this._hidden = a),
					(this._offset = e),
					(this._tokenType = i),
					(this._length = t),
					(this._range = r)
			}
		}),
		s(vr, 'LeafCstNodeImpl'),
		vr),
	Rr,
	Hs =
		((Rr = class extends nc {
			constructor() {
				super(...arguments), (this.content = new nT(this))
			}
			get children() {
				return this.content
			}
			get offset() {
				var e, t
				return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !==
					null && t !== void 0
					? t
					: 0
			}
			get length() {
				return this.end - this.offset
			}
			get end() {
				var e, t
				return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !==
					null && t !== void 0
					? t
					: 0
			}
			get range() {
				let e = this.firstNonHiddenNode,
					t = this.lastNonHiddenNode
				if (e && t) {
					if (this._rangeCache === void 0) {
						let { range: r } = e,
							{ range: i } = t
						this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end }
					}
					return this._rangeCache
				} else return { start: M.create(0, 0), end: M.create(0, 0) }
			}
			get firstNonHiddenNode() {
				for (let e of this.content) if (!e.hidden) return e
				return this.content[0]
			}
			get lastNonHiddenNode() {
				for (let e = this.content.length - 1; e >= 0; e--) {
					let t = this.content[e]
					if (!t.hidden) return t
				}
				return this.content[this.content.length - 1]
			}
		}),
		s(Rr, 'CompositeCstNodeImpl'),
		Rr),
	wt,
	nT =
		((wt = class extends Array {
			constructor(e) {
				super(), (this.parent = e), Object.setPrototypeOf(this, wt.prototype)
			}
			push(...e) {
				return this.addParents(e), super.push(...e)
			}
			unshift(...e) {
				return this.addParents(e), super.unshift(...e)
			}
			splice(e, t, ...r) {
				return this.addParents(r), super.splice(e, t, ...r)
			}
			addParents(e) {
				for (let t of e) t.container = this.parent
			}
		}),
		s(wt, 'CstNodeContainer'),
		wt),
	Ar,
	rc =
		((Ar = class extends Hs {
			get text() {
				return this._text.substring(this.offset, this.end)
			}
			get fullText() {
				return this._text
			}
			constructor(e) {
				super(), (this._text = ''), (this._text = e ?? '')
			}
		}),
		s(Ar, 'RootCstNodeImpl'),
		Ar),
	ss = Symbol('Datatype')
function Pa(n) {
	return n.$type === ss
}
s(Pa, 'isDataTypeNode')
var lh = '​',
	Om = s((n) => (n.endsWith(lh) ? n : n + lh), 'withRuleSuffix'),
	Er,
	ic =
		((Er = class {
			constructor(e) {
				;(this._unorderedGroups = new Map()), (this.lexer = e.parser.Lexer)
				let t = this.lexer.definition
				this.wrapper = new iT(
					t,
					Object.assign(Object.assign({}, e.parser.ParserConfig), {
						errorMessageProvider: e.parser.ParserErrorMessageProvider,
					})
				)
			}
			alternatives(e, t) {
				this.wrapper.wrapOr(e, t)
			}
			optional(e, t) {
				this.wrapper.wrapOption(e, t)
			}
			many(e, t) {
				this.wrapper.wrapMany(e, t)
			}
			atLeastOne(e, t) {
				this.wrapper.wrapAtLeastOne(e, t)
			}
			isRecording() {
				return this.wrapper.IS_RECORDING
			}
			get unorderedGroups() {
				return this._unorderedGroups
			}
			getRuleStack() {
				return this.wrapper.RULE_STACK
			}
			finalize() {
				this.wrapper.wrapSelfAnalysis()
			}
		}),
		s(Er, 'AbstractLangiumParser'),
		Er),
	kr,
	_m =
		((kr = class extends ic {
			get current() {
				return this.stack[this.stack.length - 1]
			}
			constructor(e) {
				super(e),
					(this.nodeBuilder = new Pm()),
					(this.stack = []),
					(this.assignmentMap = new Map()),
					(this.linker = e.references.Linker),
					(this.converter = e.parser.ValueConverter),
					(this.astReflection = e.shared.AstReflection)
			}
			rule(e, t) {
				let r = e.fragment ? void 0 : pa(e) ? ss : Ni(e),
					i = this.wrapper.DEFINE_RULE(Om(e.name), this.startImplementation(r, t).bind(this))
				return e.entry && (this.mainRule = i), i
			}
			parse(e) {
				this.nodeBuilder.buildRootNode(e)
				let t = this.lexer.tokenize(e)
				this.wrapper.input = t.tokens
				let r = this.mainRule.call(this.wrapper, {})
				return (
					this.nodeBuilder.addHiddenTokens(t.hidden),
					this.unorderedGroups.clear(),
					{ value: r, lexerErrors: t.errors, parserErrors: this.wrapper.errors }
				)
			}
			startImplementation(e, t) {
				return (r) => {
					if (!this.isRecording()) {
						let a = { $type: e }
						this.stack.push(a), e === ss && (a.value = '')
					}
					let i
					try {
						i = t(r)
					} catch {
						i = void 0
					}
					return !this.isRecording() && i === void 0 && (i = this.construct()), i
				}
			}
			consume(e, t, r) {
				let i = this.wrapper.wrapConsume(e, t)
				if (!this.isRecording() && this.isValidToken(i)) {
					let a = this.nodeBuilder.buildLeafNode(i, r),
						{ assignment: o, isCrossRef: l } = this.getAssignment(r),
						u = this.current
					if (o) {
						let c = rt(r) ? i.image : this.converter.convert(i.image, a)
						this.assign(o.operator, o.feature, c, a, l)
					} else if (Pa(u)) {
						let c = i.image
						rt(r) || (c = this.converter.convert(c, a).toString()), (u.value += c)
					}
				}
			}
			isValidToken(e) {
				return (
					!e.isInsertedInRecovery &&
					!isNaN(e.startOffset) &&
					typeof e.endOffset == 'number' &&
					!isNaN(e.endOffset)
				)
			}
			subrule(e, t, r, i) {
				let a
				this.isRecording() || (a = this.nodeBuilder.buildCompositeNode(r))
				let o = this.wrapper.wrapSubrule(e, t, i)
				!this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, r, a)
			}
			performSubruleAssignment(e, t, r) {
				let { assignment: i, isCrossRef: a } = this.getAssignment(t)
				if (i) this.assign(i.operator, i.feature, e, r, a)
				else if (!i) {
					let o = this.current
					if (Pa(o)) o.value += e.toString()
					else if (typeof e == 'object' && e) {
						let l = e.$type,
							u = this.assignWithoutOverride(e, o)
						l && (u.$type = l)
						let c = u
						this.stack.pop(), this.stack.push(c)
					}
				}
			}
			action(e, t) {
				if (!this.isRecording()) {
					let r = this.current
					if (!r.$cstNode && t.feature && t.operator) {
						r = this.construct(!1)
						let a = r.$cstNode.feature
						this.nodeBuilder.buildCompositeNode(a)
					}
					let i = { $type: e }
					this.stack.pop(),
						this.stack.push(i),
						t.feature && t.operator && this.assign(t.operator, t.feature, r, r.$cstNode, !1)
				}
			}
			construct(e = !0) {
				if (this.isRecording()) return
				let t = this.current
				return (
					$s(t),
					this.nodeBuilder.construct(t),
					e && this.stack.pop(),
					Pa(t) ? this.converter.convert(t.value, t.$cstNode) : (au(this.astReflection, t), t)
				)
			}
			getAssignment(e) {
				if (!this.assignmentMap.has(e)) {
					let t = Ii(e, nt)
					this.assignmentMap.set(e, { assignment: t, isCrossRef: t ? da(t.terminal) : !1 })
				}
				return this.assignmentMap.get(e)
			}
			assign(e, t, r, i, a) {
				let o = this.current,
					l
				switch (
					(a && typeof r == 'string' ? (l = this.linker.buildReference(o, t, i, r)) : (l = r), e)
				) {
					case '=': {
						o[t] = l
						break
					}
					case '?=': {
						o[t] = !0
						break
					}
					case '+=':
						Array.isArray(o[t]) || (o[t] = []), o[t].push(l)
				}
			}
			assignWithoutOverride(e, t) {
				for (let [r, i] of Object.entries(t)) {
					let a = e[r]
					a === void 0
						? (e[r] = i)
						: Array.isArray(a) && Array.isArray(i) && (i.push(...a), (e[r] = i))
				}
				return e
			}
			get definitionErrors() {
				return this.wrapper.definitionErrors
			}
		}),
		s(kr, 'LangiumParser'),
		kr),
	Sr,
	Dm =
		((Sr = class {
			buildMismatchTokenMessage(e) {
				return sn.buildMismatchTokenMessage(e)
			}
			buildNotAllInputParsedMessage(e) {
				return sn.buildNotAllInputParsedMessage(e)
			}
			buildNoViableAltMessage(e) {
				return sn.buildNoViableAltMessage(e)
			}
			buildEarlyExitMessage(e) {
				return sn.buildEarlyExitMessage(e)
			}
		}),
		s(Sr, 'AbstractParserErrorMessageProvider'),
		Sr),
	Cr,
	ac =
		((Cr = class extends Dm {
			buildMismatchTokenMessage({ expected: e, actual: t }) {
				return `Expecting ${
					e.LABEL
						? '`' + e.LABEL + '`'
						: e.name.endsWith(':KW')
						? `keyword '${e.name.substring(0, e.name.length - 3)}'`
						: `token of type '${e.name}'`
				} but found \`${t.image}\`.`
			}
			buildNotAllInputParsedMessage({ firstRedundant: e }) {
				return `Expecting end of file but found \`${e.image}\`.`
			}
		}),
		s(Cr, 'LangiumParserErrorMessageProvider'),
		Cr),
	Ir,
	Mm =
		((Ir = class extends ic {
			constructor() {
				super(...arguments),
					(this.tokens = []),
					(this.elementStack = []),
					(this.lastElementStack = []),
					(this.nextTokenIndex = 0),
					(this.stackSize = 0)
			}
			action() {}
			construct() {}
			parse(e) {
				this.resetState()
				let t = this.lexer.tokenize(e)
				return (
					(this.tokens = t.tokens),
					(this.wrapper.input = [...this.tokens]),
					this.mainRule.call(this.wrapper, {}),
					this.unorderedGroups.clear(),
					{
						tokens: this.tokens,
						elementStack: [...this.lastElementStack],
						tokenIndex: this.nextTokenIndex,
					}
				)
			}
			rule(e, t) {
				let r = this.wrapper.DEFINE_RULE(Om(e.name), this.startImplementation(t).bind(this))
				return e.entry && (this.mainRule = r), r
			}
			resetState() {
				;(this.elementStack = []),
					(this.lastElementStack = []),
					(this.nextTokenIndex = 0),
					(this.stackSize = 0)
			}
			startImplementation(e) {
				return (t) => {
					let r = this.keepStackSize()
					try {
						e(t)
					} finally {
						this.resetStackSize(r)
					}
				}
			}
			removeUnexpectedElements() {
				this.elementStack.splice(this.stackSize)
			}
			keepStackSize() {
				let e = this.elementStack.length
				return (this.stackSize = e), e
			}
			resetStackSize(e) {
				this.removeUnexpectedElements(), (this.stackSize = e)
			}
			consume(e, t, r) {
				this.wrapper.wrapConsume(e, t),
					this.isRecording() ||
						((this.lastElementStack = [...this.elementStack, r]),
						(this.nextTokenIndex = this.currIdx + 1))
			}
			subrule(e, t, r, i) {
				this.before(r), this.wrapper.wrapSubrule(e, t, i), this.after(r)
			}
			before(e) {
				this.isRecording() || this.elementStack.push(e)
			}
			after(e) {
				if (!this.isRecording()) {
					let t = this.elementStack.lastIndexOf(e)
					t >= 0 && this.elementStack.splice(t)
				}
			}
			get currIdx() {
				return this.wrapper.currIdx
			}
		}),
		s(Ir, 'LangiumCompletionParser'),
		Ir),
	rT = {
		recoveryEnabled: !0,
		nodeLocationTracking: 'full',
		skipValidations: !0,
		errorMessageProvider: new ac(),
	},
	xr,
	iT =
		((xr = class extends qy {
			constructor(e, t) {
				let r = t && 'maxLookahead' in t
				super(
					e,
					Object.assign(
						Object.assign(Object.assign({}, rT), {
							lookaheadStrategy: r ? new Ku({ maxLookahead: t.maxLookahead }) : new eT(),
						}),
						t
					)
				)
			}
			get IS_RECORDING() {
				return this.RECORDING_PHASE
			}
			DEFINE_RULE(e, t) {
				return this.RULE(e, t)
			}
			wrapSelfAnalysis() {
				this.performSelfAnalysis()
			}
			wrapConsume(e, t) {
				return this.consume(e, t)
			}
			wrapSubrule(e, t, r) {
				return this.subrule(e, t, { ARGS: [r] })
			}
			wrapOr(e, t) {
				this.or(e, t)
			}
			wrapOption(e, t) {
				this.option(e, t)
			}
			wrapMany(e, t) {
				this.many(e, t)
			}
			wrapAtLeastOne(e, t) {
				this.atLeastOne(e, t)
			}
		}),
		s(xr, 'ChevrotainWrapper'),
		xr)
function sc(n, e, t) {
	return Fm({ parser: e, tokens: t, rules: new Map(), ruleNames: new Map() }, n), e
}
s(sc, 'createParser')
function Fm(n, e) {
	let t = bs(e, !1),
		r = q(e.rules)
			.filter(pe)
			.filter((i) => t.has(i))
	for (let i of r) {
		let a = Object.assign(Object.assign({}, n), {
			consume: 1,
			optional: 1,
			subrule: 1,
			many: 1,
			or: 1,
		})
		a.rules.set(i.name, n.parser.rule(i, yt(a, i.definition)))
	}
}
s(Fm, 'buildRules')
function yt(n, e, t = !1) {
	let r
	if (rt(e)) r = Wm(n, e)
	else if (pt(e)) r = Um(n, e)
	else if (nt(e)) r = yt(n, e.terminal)
	else if (da(e)) r = oc(n, e)
	else if (it(e)) r = Gm(n, e)
	else if (Is(e)) r = Vm(n, e)
	else if (Ns(e)) r = jm(n, e)
	else if (Qt(e)) r = Km(n, e)
	else if (Fl(e)) {
		let i = n.consume++
		r = s(() => n.parser.consume(i, mt, e), 'method')
	} else throw new As(e.$cstNode, `Unexpected element type: ${e.$type}`)
	return lc(n, t ? void 0 : sa(e), r, e.cardinality)
}
s(yt, 'buildElement')
function Um(n, e) {
	let t = Ni(e)
	return () => n.parser.action(t, e)
}
s(Um, 'buildAction')
function Gm(n, e) {
	let t = e.rule.ref
	if (pe(t)) {
		let r = n.subrule++,
			i = e.arguments.length > 0 ? Bm(t, e.arguments) : () => ({})
		return (a) => n.parser.subrule(r, uc(n, t), e, i(a))
	} else if (lt(t)) {
		let r = n.consume++,
			i = os(n, t.name)
		return () => n.parser.consume(r, i, e)
	} else if (t) Jt()
	else throw new As(e.$cstNode, `Undefined rule type: ${e.$type}`)
}
s(Gm, 'buildRuleCall')
function Bm(n, e) {
	let t = e.map((r) => je(r.value))
	return (r) => {
		let i = {}
		for (let a = 0; a < t.length; a++) {
			let o = n.parameters[a],
				l = t[a]
			i[o.name] = l(r)
		}
		return i
	}
}
s(Bm, 'buildRuleCallPredicate')
function je(n) {
	if (hl(n)) {
		let e = je(n.left),
			t = je(n.right)
		return (r) => e(r) || t(r)
	} else if (cl(n)) {
		let e = je(n.left),
			t = je(n.right)
		return (r) => e(r) && t(r)
	} else if (yl(n)) {
		let e = je(n.value)
		return (t) => !e(t)
	} else if (Al(n)) {
		let e = n.parameter.ref.name
		return (t) => t !== void 0 && t[e] === !0
	} else if (ll(n)) {
		let e = !!n.true
		return () => e
	}
	Jt()
}
s(je, 'buildPredicate')
function Vm(n, e) {
	if (e.elements.length === 1) return yt(n, e.elements[0])
	{
		let t = []
		for (let i of e.elements) {
			let a = { ALT: yt(n, i, !0) },
				o = sa(i)
			o && (a.GATE = je(o)), t.push(a)
		}
		let r = n.or++
		return (i) =>
			n.parser.alternatives(
				r,
				t.map((a) => {
					let o = { ALT: s(() => a.ALT(i), 'ALT') },
						l = a.GATE
					return l && (o.GATE = () => l(i)), o
				})
			)
	}
}
s(Vm, 'buildAlternatives')
function jm(n, e) {
	if (e.elements.length === 1) return yt(n, e.elements[0])
	let t = []
	for (let l of e.elements) {
		let u = { ALT: yt(n, l, !0) },
			c = sa(l)
		c && (u.GATE = je(c)), t.push(u)
	}
	let r = n.or++,
		i = s((l, u) => {
			let c = u.getRuleStack().join('-')
			return `uGroup_${l}_${c}`
		}, 'idFunc'),
		a = s(
			(l) =>
				n.parser.alternatives(
					r,
					t.map((u, c) => {
						let d = { ALT: s(() => !0, 'ALT') },
							h = n.parser
						d.ALT = () => {
							if ((u.ALT(l), !h.isRecording())) {
								let p = i(r, h)
								h.unorderedGroups.get(p) || h.unorderedGroups.set(p, [])
								let g = h.unorderedGroups.get(p)
								typeof (g == null ? void 0 : g[c]) > 'u' && (g[c] = !0)
							}
						}
						let f = u.GATE
						return (
							f
								? (d.GATE = () => f(l))
								: (d.GATE = () => {
										let p = h.unorderedGroups.get(i(r, h))
										return !(p != null && p[c])
								  }),
							d
						)
					})
				),
			'alternatives'
		),
		o = lc(n, sa(e), a, '*')
	return (l) => {
		o(l), n.parser.isRecording() || n.parser.unorderedGroups.delete(i(r, n.parser))
	}
}
s(jm, 'buildUnorderedGroup')
function Km(n, e) {
	let t = e.elements.map((r) => yt(n, r))
	return (r) => t.forEach((i) => i(r))
}
s(Km, 'buildGroup')
function sa(n) {
	if (Qt(n)) return n.guardCondition
}
s(sa, 'getGuardCondition')
function oc(n, e, t = e.terminal) {
	if (t)
		if (it(t) && pe(t.rule.ref)) {
			let r = n.subrule++
			return (i) => n.parser.subrule(r, uc(n, t.rule.ref), e, i)
		} else if (it(t) && lt(t.rule.ref)) {
			let r = n.consume++,
				i = os(n, t.rule.ref.name)
			return () => n.parser.consume(r, i, e)
		} else if (rt(t)) {
			let r = n.consume++,
				i = os(n, t.value)
			return () => n.parser.consume(r, i, e)
		} else throw new Error('Could not build cross reference parser')
	else {
		if (!e.type.ref) throw new Error('Could not resolve reference to type: ' + e.type.$refText)
		let r = _s(e.type.ref),
			i = r == null ? void 0 : r.terminal
		if (!i) throw new Error('Could not find name assignment for type: ' + Ni(e.type.ref))
		return oc(n, e, i)
	}
}
s(oc, 'buildCrossReference')
function Wm(n, e) {
	let t = n.consume++,
		r = n.tokens[e.value]
	if (!r) throw new Error('Could not find token for keyword: ' + e.value)
	return () => n.parser.consume(t, r, e)
}
s(Wm, 'buildKeyword')
function lc(n, e, t, r) {
	let i = e && je(e)
	if (!r)
		if (i) {
			let a = n.or++
			return (o) =>
				n.parser.alternatives(a, [
					{ ALT: s(() => t(o), 'ALT'), GATE: s(() => i(o), 'GATE') },
					{ ALT: mo(), GATE: s(() => !i(o), 'GATE') },
				])
		} else return t
	if (r === '*') {
		let a = n.many++
		return (o) => n.parser.many(a, { DEF: s(() => t(o), 'DEF'), GATE: i ? () => i(o) : void 0 })
	} else if (r === '+') {
		let a = n.many++
		if (i) {
			let o = n.or++
			return (l) =>
				n.parser.alternatives(o, [
					{
						ALT: s(() => n.parser.atLeastOne(a, { DEF: s(() => t(l), 'DEF') }), 'ALT'),
						GATE: s(() => i(l), 'GATE'),
					},
					{ ALT: mo(), GATE: s(() => !i(l), 'GATE') },
				])
		} else return (o) => n.parser.atLeastOne(a, { DEF: s(() => t(o), 'DEF') })
	} else if (r === '?') {
		let a = n.optional++
		return (o) => n.parser.optional(a, { DEF: s(() => t(o), 'DEF'), GATE: i ? () => i(o) : void 0 })
	} else Jt()
}
s(lc, 'wrap')
function uc(n, e) {
	let t = Hm(n, e),
		r = n.rules.get(t)
	if (!r) throw new Error(`Rule "${t}" not found."`)
	return r
}
s(uc, 'getRule')
function Hm(n, e) {
	if (pe(e)) return e.name
	if (n.ruleNames.has(e)) return n.ruleNames.get(e)
	{
		let t = e,
			r = t.$container,
			i = e.$type
		for (; !pe(r); )
			(Qt(r) || Is(r) || Ns(r)) && (i = r.elements.indexOf(t).toString() + ':' + i),
				(t = r),
				(r = r.$container)
		return (i = r.name + ':' + i), n.ruleNames.set(e, i), i
	}
}
s(Hm, 'getRuleName')
function os(n, e) {
	let t = n.tokens[e]
	if (!t) throw new Error(`Token "${e}" not found."`)
	return t
}
s(os, 'getToken')
function cc(n) {
	let e = n.Grammar,
		t = n.parser.Lexer,
		r = new Mm(n)
	return sc(e, r, t.definition), r.finalize(), r
}
s(cc, 'createCompletionParser')
function dc(n) {
	let e = hc(n)
	return e.finalize(), e
}
s(dc, 'createLangiumParser')
function hc(n) {
	let e = n.Grammar,
		t = n.parser.Lexer,
		r = new _m(n)
	return sc(e, r, t.definition)
}
s(hc, 'prepareLangiumParser')
var Nr,
	fc =
		((Nr = class {
			buildTokens(e, t) {
				let r = q(bs(e, !1)),
					i = this.buildTerminalTokens(r),
					a = this.buildKeywordTokens(r, i, t)
				return (
					i.forEach((o) => {
						let l = o.PATTERN
						typeof l == 'object' && l && 'test' in l && ja(l) ? a.unshift(o) : a.push(o)
					}),
					a
				)
			}
			buildTerminalTokens(e) {
				return e
					.filter(lt)
					.filter((t) => !t.fragment)
					.map((t) => this.buildTerminalToken(t))
					.toArray()
			}
			buildTerminalToken(e) {
				let t = ma(e),
					r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t,
					i = { name: e.name, PATTERN: r, LINE_BREAKS: !0 }
				return e.hidden && (i.GROUP = ja(t) ? he.SKIPPED : 'hidden'), i
			}
			requiresCustomPattern(e) {
				return e.flags.includes('u') ? !0 : !!(e.source.includes('?<=') || e.source.includes('?<!'))
			}
			regexPatternFunction(e) {
				let t = new RegExp(e, e.flags + 'y')
				return (r, i) => ((t.lastIndex = i), t.exec(r))
			}
			buildKeywordTokens(e, t, r) {
				return e
					.filter(pe)
					.flatMap((i) => Rt(i).filter(rt))
					.distinct((i) => i.value)
					.toArray()
					.sort((i, a) => a.value.length - i.value.length)
					.map((i) => this.buildKeywordToken(i, t, !!(r != null && r.caseInsensitive)))
			}
			buildKeywordToken(e, t, r) {
				return {
					name: e.value,
					PATTERN: this.buildKeywordPattern(e, r),
					LONGER_ALT: this.findLongerAlt(e, t),
				}
			}
			buildKeywordPattern(e, t) {
				return t ? new RegExp(uu(e.value)) : e.value
			}
			findLongerAlt(e, t) {
				return t.reduce((r, i) => {
					let a = i == null ? void 0 : i.PATTERN
					return a != null && a.source && cu('^' + a.source + '$', e.value) && r.push(i), r
				}, [])
			}
		}),
		s(Nr, 'DefaultTokenBuilder'),
		Nr),
	$r,
	pc =
		(($r = class {
			convert(e, t) {
				let r = t.grammarSource
				if ((da(r) && (r = mu(r)), it(r))) {
					let i = r.rule.ref
					if (!i) throw new Error('This cst node was not parsed by a rule.')
					return this.runConverter(i, e, t)
				}
				return e
			}
			runConverter(e, t, r) {
				var i
				switch (e.name.toUpperCase()) {
					case 'INT':
						return Ve.convertInt(t)
					case 'STRING':
						return Ve.convertString(t)
					case 'ID':
						return Ve.convertID(t)
				}
				switch ((i = Su(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
					case 'number':
						return Ve.convertNumber(t)
					case 'boolean':
						return Ve.convertBoolean(t)
					case 'bigint':
						return Ve.convertBigint(t)
					case 'date':
						return Ve.convertDate(t)
					default:
						return t
				}
			}
		}),
		s($r, 'DefaultValueConverter'),
		$r),
	Ve
;(function (n) {
	function e(c) {
		let d = ''
		for (let h = 1; h < c.length - 1; h++) {
			let f = c.charAt(h)
			if (f === '\\') {
				let p = c.charAt(++h)
				d += t(p)
			} else d += f
		}
		return d
	}
	s(e, 'convertString'), (n.convertString = e)
	function t(c) {
		switch (c) {
			case 'b':
				return '\b'
			case 'f':
				return '\f'
			case 'n':
				return `
`
			case 'r':
				return '\r'
			case 't':
				return '	'
			case 'v':
				return '\v'
			case '0':
				return '\0'
			default:
				return c
		}
	}
	s(t, 'convertEscapeCharacter')
	function r(c) {
		return c.charAt(0) === '^' ? c.substring(1) : c
	}
	s(r, 'convertID'), (n.convertID = r)
	function i(c) {
		return parseInt(c)
	}
	s(i, 'convertInt'), (n.convertInt = i)
	function a(c) {
		return BigInt(c)
	}
	s(a, 'convertBigint'), (n.convertBigint = a)
	function o(c) {
		return new Date(c)
	}
	s(o, 'convertDate'), (n.convertDate = o)
	function l(c) {
		return Number(c)
	}
	s(l, 'convertNumber'), (n.convertNumber = l)
	function u(c) {
		return c.toLowerCase() === 'true'
	}
	s(u, 'convertBoolean'), (n.convertBoolean = u)
})(Ve || (Ve = {}))
var W = {}
ps(W, Th(uy()))
function zs() {
	return new Promise((n) => {
		typeof setImmediate > 'u' ? setTimeout(n, 0) : setImmediate(n)
	})
}
s(zs, 'delayNextTick')
var wo = 0,
	zm = 10
function mc() {
	return (wo = Date.now()), new W.CancellationTokenSource()
}
s(mc, 'startCancelableOperation')
function gc(n) {
	zm = n
}
s(gc, 'setInterruptionPeriod')
var Tt = Symbol('OperationCancelled')
function Oi(n) {
	return n === Tt
}
s(Oi, 'isOperationCancelled')
async function fe(n) {
	if (n === W.CancellationToken.None) return
	let e = Date.now()
	if ((e - wo >= zm && ((wo = e), await zs()), n.isCancellationRequested)) throw Tt
}
s(fe, 'interruptAndCheck')
var Lr,
	ot =
		((Lr = class {
			constructor() {
				this.promise = new Promise((e, t) => {
					;(this.resolve = (r) => (e(r), this)), (this.reject = (r) => (t(r), this))
				})
			}
		}),
		s(Lr, 'Deferred'),
		Lr),
	ft,
	uh =
		((ft = class {
			constructor(e, t, r, i) {
				;(this._uri = e),
					(this._languageId = t),
					(this._version = r),
					(this._content = i),
					(this._lineOffsets = void 0)
			}
			get uri() {
				return this._uri
			}
			get languageId() {
				return this._languageId
			}
			get version() {
				return this._version
			}
			getText(e) {
				if (e) {
					let t = this.offsetAt(e.start),
						r = this.offsetAt(e.end)
					return this._content.substring(t, r)
				}
				return this._content
			}
			update(e, t) {
				for (let r of e)
					if (ft.isIncremental(r)) {
						let i = Tc(r.range),
							a = this.offsetAt(i.start),
							o = this.offsetAt(i.end)
						this._content =
							this._content.substring(0, a) +
							r.text +
							this._content.substring(o, this._content.length)
						let l = Math.max(i.start.line, 0),
							u = Math.max(i.end.line, 0),
							c = this._lineOffsets,
							d = Po(r.text, !1, a)
						if (u - l === d.length) for (let f = 0, p = d.length; f < p; f++) c[f + l + 1] = d[f]
						else
							d.length < 1e4
								? c.splice(l + 1, u - l, ...d)
								: (this._lineOffsets = c = c.slice(0, l + 1).concat(d, c.slice(u + 1)))
						let h = r.text.length - (o - a)
						if (h !== 0) for (let f = l + 1 + d.length, p = c.length; f < p; f++) c[f] = c[f] + h
					} else if (ft.isFull(r)) (this._content = r.text), (this._lineOffsets = void 0)
					else throw new Error('Unknown change event received')
				this._version = t
			}
			getLineOffsets() {
				return (
					this._lineOffsets === void 0 && (this._lineOffsets = Po(this._content, !0)),
					this._lineOffsets
				)
			}
			positionAt(e) {
				e = Math.max(Math.min(e, this._content.length), 0)
				let t = this.getLineOffsets(),
					r = 0,
					i = t.length
				if (i === 0) return { line: 0, character: e }
				for (; r < i; ) {
					let o = Math.floor((r + i) / 2)
					t[o] > e ? (i = o) : (r = o + 1)
				}
				let a = r - 1
				return (e = this.ensureBeforeEOL(e, t[a])), { line: a, character: e - t[a] }
			}
			offsetAt(e) {
				let t = this.getLineOffsets()
				if (e.line >= t.length) return this._content.length
				if (e.line < 0) return 0
				let r = t[e.line]
				if (e.character <= 0) return r
				let i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length,
					a = Math.min(r + e.character, i)
				return this.ensureBeforeEOL(a, r)
			}
			ensureBeforeEOL(e, t) {
				for (; e > t && yc(this._content.charCodeAt(e - 1)); ) e--
				return e
			}
			get lineCount() {
				return this.getLineOffsets().length
			}
			static isIncremental(e) {
				let t = e
				return (
					t != null &&
					typeof t.text == 'string' &&
					t.range !== void 0 &&
					(t.rangeLength === void 0 || typeof t.rangeLength == 'number')
				)
			}
			static isFull(e) {
				let t = e
				return (
					t != null && typeof t.text == 'string' && t.range === void 0 && t.rangeLength === void 0
				)
			}
		}),
		s(ft, 'FullTextDocument'),
		ft),
	ls
;(function (n) {
	function e(i, a, o, l) {
		return new uh(i, a, o, l)
	}
	s(e, 'create'), (n.create = e)
	function t(i, a, o) {
		if (i instanceof uh) return i.update(a, o), i
		throw new Error('TextDocument.update: document must be created by TextDocument.create')
	}
	s(t, 'update'), (n.update = t)
	function r(i, a) {
		let o = i.getText(),
			l = us(a.map(qm), (d, h) => {
				let f = d.range.start.line - h.range.start.line
				return f === 0 ? d.range.start.character - h.range.start.character : f
			}),
			u = 0,
			c = []
		for (let d of l) {
			let h = i.offsetAt(d.range.start)
			if (h < u) throw new Error('Overlapping edit')
			h > u && c.push(o.substring(u, h)),
				d.newText.length && c.push(d.newText),
				(u = i.offsetAt(d.range.end))
		}
		return c.push(o.substr(u)), c.join('')
	}
	s(r, 'applyEdits'), (n.applyEdits = r)
})(ls || (ls = {}))
function us(n, e) {
	if (n.length <= 1) return n
	let t = (n.length / 2) | 0,
		r = n.slice(0, t),
		i = n.slice(t)
	us(r, e), us(i, e)
	let a = 0,
		o = 0,
		l = 0
	for (; a < r.length && o < i.length; ) e(r[a], i[o]) <= 0 ? (n[l++] = r[a++]) : (n[l++] = i[o++])
	for (; a < r.length; ) n[l++] = r[a++]
	for (; o < i.length; ) n[l++] = i[o++]
	return n
}
s(us, 'mergeSort')
function Po(n, e, t = 0) {
	let r = e ? [t] : []
	for (let i = 0; i < n.length; i++) {
		let a = n.charCodeAt(i)
		yc(a) && (a === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1))
	}
	return r
}
s(Po, 'computeLineOffsets')
function yc(n) {
	return n === 13 || n === 10
}
s(yc, 'isEOL')
function Tc(n) {
	let e = n.start,
		t = n.end
	return e.line > t.line || (e.line === t.line && e.character > t.character)
		? { start: t, end: e }
		: n
}
s(Tc, 'getWellformedRange')
function qm(n) {
	let e = Tc(n.range)
	return e !== n.range ? { newText: n.newText, range: e } : n
}
s(qm, 'getWellformedEdit')
var Ym
;(() => {
	var n = {
			470: (i) => {
				function a(u) {
					if (typeof u != 'string')
						throw new TypeError('Path must be a string. Received ' + JSON.stringify(u))
				}
				s(a, 'e')
				function o(u, c) {
					for (var d, h = '', f = 0, p = -1, g = 0, y = 0; y <= u.length; ++y) {
						if (y < u.length) d = u.charCodeAt(y)
						else {
							if (d === 47) break
							d = 47
						}
						if (d === 47) {
							if (!(p === y - 1 || g === 1))
								if (p !== y - 1 && g === 2) {
									if (
										h.length < 2 ||
										f !== 2 ||
										h.charCodeAt(h.length - 1) !== 46 ||
										h.charCodeAt(h.length - 2) !== 46
									) {
										if (h.length > 2) {
											var k = h.lastIndexOf('/')
											if (k !== h.length - 1) {
												k === -1
													? ((h = ''), (f = 0))
													: (f = (h = h.slice(0, k)).length - 1 - h.lastIndexOf('/')),
													(p = y),
													(g = 0)
												continue
											}
										} else if (h.length === 2 || h.length === 1) {
											;(h = ''), (f = 0), (p = y), (g = 0)
											continue
										}
									}
									c && (h.length > 0 ? (h += '/..') : (h = '..'), (f = 2))
								} else
									h.length > 0 ? (h += '/' + u.slice(p + 1, y)) : (h = u.slice(p + 1, y)),
										(f = y - p - 1)
							;(p = y), (g = 0)
						} else d === 46 && g !== -1 ? ++g : (g = -1)
					}
					return h
				}
				s(o, 'r')
				var l = {
					resolve: s(function () {
						for (var u, c = '', d = !1, h = arguments.length - 1; h >= -1 && !d; h--) {
							var f
							h >= 0 ? (f = arguments[h]) : (u === void 0 && (u = process.cwd()), (f = u)),
								a(f),
								f.length !== 0 && ((c = f + '/' + c), (d = f.charCodeAt(0) === 47))
						}
						return (c = o(c, !d)), d ? (c.length > 0 ? '/' + c : '/') : c.length > 0 ? c : '.'
					}, 'resolve'),
					normalize: s(function (u) {
						if ((a(u), u.length === 0)) return '.'
						var c = u.charCodeAt(0) === 47,
							d = u.charCodeAt(u.length - 1) === 47
						return (
							(u = o(u, !c)).length !== 0 || c || (u = '.'),
							u.length > 0 && d && (u += '/'),
							c ? '/' + u : u
						)
					}, 'normalize'),
					isAbsolute: s(function (u) {
						return a(u), u.length > 0 && u.charCodeAt(0) === 47
					}, 'isAbsolute'),
					join: s(function () {
						if (arguments.length === 0) return '.'
						for (var u, c = 0; c < arguments.length; ++c) {
							var d = arguments[c]
							a(d), d.length > 0 && (u === void 0 ? (u = d) : (u += '/' + d))
						}
						return u === void 0 ? '.' : l.normalize(u)
					}, 'join'),
					relative: s(function (u, c) {
						if ((a(u), a(c), u === c || (u = l.resolve(u)) === (c = l.resolve(c)))) return ''
						for (var d = 1; d < u.length && u.charCodeAt(d) === 47; ++d);
						for (var h = u.length, f = h - d, p = 1; p < c.length && c.charCodeAt(p) === 47; ++p);
						for (var g = c.length - p, y = f < g ? f : g, k = -1, R = 0; R <= y; ++R) {
							if (R === y) {
								if (g > y) {
									if (c.charCodeAt(p + R) === 47) return c.slice(p + R + 1)
									if (R === 0) return c.slice(p + R)
								} else f > y && (u.charCodeAt(d + R) === 47 ? (k = R) : R === 0 && (k = 0))
								break
							}
							var E = u.charCodeAt(d + R)
							if (E !== c.charCodeAt(p + R)) break
							E === 47 && (k = R)
						}
						var v = ''
						for (R = d + k + 1; R <= h; ++R)
							(R !== h && u.charCodeAt(R) !== 47) || (v.length === 0 ? (v += '..') : (v += '/..'))
						return v.length > 0
							? v + c.slice(p + k)
							: ((p += k), c.charCodeAt(p) === 47 && ++p, c.slice(p))
					}, 'relative'),
					_makeLong: s(function (u) {
						return u
					}, '_makeLong'),
					dirname: s(function (u) {
						if ((a(u), u.length === 0)) return '.'
						for (
							var c = u.charCodeAt(0), d = c === 47, h = -1, f = !0, p = u.length - 1;
							p >= 1;
							--p
						)
							if ((c = u.charCodeAt(p)) === 47) {
								if (!f) {
									h = p
									break
								}
							} else f = !1
						return h === -1 ? (d ? '/' : '.') : d && h === 1 ? '//' : u.slice(0, h)
					}, 'dirname'),
					basename: s(function (u, c) {
						if (c !== void 0 && typeof c != 'string')
							throw new TypeError('"ext" argument must be a string')
						a(u)
						var d,
							h = 0,
							f = -1,
							p = !0
						if (c !== void 0 && c.length > 0 && c.length <= u.length) {
							if (c.length === u.length && c === u) return ''
							var g = c.length - 1,
								y = -1
							for (d = u.length - 1; d >= 0; --d) {
								var k = u.charCodeAt(d)
								if (k === 47) {
									if (!p) {
										h = d + 1
										break
									}
								} else
									y === -1 && ((p = !1), (y = d + 1)),
										g >= 0 && (k === c.charCodeAt(g) ? --g == -1 && (f = d) : ((g = -1), (f = y)))
							}
							return h === f ? (f = y) : f === -1 && (f = u.length), u.slice(h, f)
						}
						for (d = u.length - 1; d >= 0; --d)
							if (u.charCodeAt(d) === 47) {
								if (!p) {
									h = d + 1
									break
								}
							} else f === -1 && ((p = !1), (f = d + 1))
						return f === -1 ? '' : u.slice(h, f)
					}, 'basename'),
					extname: s(function (u) {
						a(u)
						for (var c = -1, d = 0, h = -1, f = !0, p = 0, g = u.length - 1; g >= 0; --g) {
							var y = u.charCodeAt(g)
							if (y !== 47)
								h === -1 && ((f = !1), (h = g + 1)),
									y === 46 ? (c === -1 ? (c = g) : p !== 1 && (p = 1)) : c !== -1 && (p = -1)
							else if (!f) {
								d = g + 1
								break
							}
						}
						return c === -1 || h === -1 || p === 0 || (p === 1 && c === h - 1 && c === d + 1)
							? ''
							: u.slice(c, h)
					}, 'extname'),
					format: s(function (u) {
						if (u === null || typeof u != 'object')
							throw new TypeError(
								'The "pathObject" argument must be of type Object. Received type ' + typeof u
							)
						return (function (c, d) {
							var h = d.dir || d.root,
								f = d.base || (d.name || '') + (d.ext || '')
							return h ? (h === d.root ? h + f : h + '/' + f) : f
						})(0, u)
					}, 'format'),
					parse: s(function (u) {
						a(u)
						var c = { root: '', dir: '', base: '', ext: '', name: '' }
						if (u.length === 0) return c
						var d,
							h = u.charCodeAt(0),
							f = h === 47
						f ? ((c.root = '/'), (d = 1)) : (d = 0)
						for (var p = -1, g = 0, y = -1, k = !0, R = u.length - 1, E = 0; R >= d; --R)
							if ((h = u.charCodeAt(R)) !== 47)
								y === -1 && ((k = !1), (y = R + 1)),
									h === 46 ? (p === -1 ? (p = R) : E !== 1 && (E = 1)) : p !== -1 && (E = -1)
							else if (!k) {
								g = R + 1
								break
							}
						return (
							p === -1 || y === -1 || E === 0 || (E === 1 && p === y - 1 && p === g + 1)
								? y !== -1 && (c.base = c.name = g === 0 && f ? u.slice(1, y) : u.slice(g, y))
								: (g === 0 && f
										? ((c.name = u.slice(1, p)), (c.base = u.slice(1, y)))
										: ((c.name = u.slice(g, p)), (c.base = u.slice(g, y))),
								  (c.ext = u.slice(p, y))),
							g > 0 ? (c.dir = u.slice(0, g - 1)) : f && (c.dir = '/'),
							c
						)
					}, 'parse'),
					sep: '/',
					delimiter: ':',
					win32: null,
					posix: null,
				}
				;(l.posix = l), (i.exports = l)
			},
		},
		e = {}
	function t(i) {
		var a = e[i]
		if (a !== void 0) return a.exports
		var o = (e[i] = { exports: {} })
		return n[i](o, o.exports, t), o.exports
	}
	s(t, 'r'),
		(t.d = (i, a) => {
			for (var o in a)
				t.o(a, o) && !t.o(i, o) && Object.defineProperty(i, o, { enumerable: !0, get: a[o] })
		}),
		(t.o = (i, a) => Object.prototype.hasOwnProperty.call(i, a)),
		(t.r = (i) => {
			typeof Symbol < 'u' &&
				Symbol.toStringTag &&
				Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(i, '__esModule', { value: !0 })
		})
	var r = {}
	;(() => {
		let i
		t.r(r),
			t.d(r, { URI: s(() => f, 'URI'), Utils: s(() => $e, 'Utils') }),
			typeof process == 'object'
				? (i = process.platform === 'win32')
				: typeof navigator == 'object' && (i = navigator.userAgent.indexOf('Windows') >= 0)
		let a = /^\w[\w\d+.-]*$/,
			o = /^\//,
			l = /^\/\//
		function u(S, T) {
			if (!S.scheme && T)
				throw new Error(
					`[UriError]: Scheme is missing: {scheme: "", authority: "${S.authority}", path: "${S.path}", query: "${S.query}", fragment: "${S.fragment}"}`
				)
			if (S.scheme && !a.test(S.scheme))
				throw new Error('[UriError]: Scheme contains illegal characters.')
			if (S.path) {
				if (S.authority) {
					if (!o.test(S.path))
						throw new Error(
							'[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
						)
				} else if (l.test(S.path))
					throw new Error(
						'[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
					)
			}
		}
		s(u, 's')
		let c = '',
			d = '/',
			h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
		const Oe = class Oe {
			constructor(T, A, C, D, O, P = !1) {
				ht(this, 'scheme')
				ht(this, 'authority')
				ht(this, 'path')
				ht(this, 'query')
				ht(this, 'fragment')
				typeof T == 'object'
					? ((this.scheme = T.scheme || c),
					  (this.authority = T.authority || c),
					  (this.path = T.path || c),
					  (this.query = T.query || c),
					  (this.fragment = T.fragment || c))
					: ((this.scheme = (function (ue, re) {
							return ue || re ? ue : 'file'
					  })(T, P)),
					  (this.authority = A || c),
					  (this.path = (function (ue, re) {
							switch (ue) {
								case 'https':
								case 'http':
								case 'file':
									re ? re[0] !== d && (re = d + re) : (re = d)
							}
							return re
					  })(this.scheme, C || c)),
					  (this.query = D || c),
					  (this.fragment = O || c),
					  u(this, P))
			}
			static isUri(T) {
				return (
					T instanceof Oe ||
					(!!T &&
						typeof T.authority == 'string' &&
						typeof T.fragment == 'string' &&
						typeof T.path == 'string' &&
						typeof T.query == 'string' &&
						typeof T.scheme == 'string' &&
						typeof T.fsPath == 'string' &&
						typeof T.with == 'function' &&
						typeof T.toString == 'function')
				)
			}
			get fsPath() {
				return E(this, !1)
			}
			with(T) {
				if (!T) return this
				let { scheme: A, authority: C, path: D, query: O, fragment: P } = T
				return (
					A === void 0 ? (A = this.scheme) : A === null && (A = c),
					C === void 0 ? (C = this.authority) : C === null && (C = c),
					D === void 0 ? (D = this.path) : D === null && (D = c),
					O === void 0 ? (O = this.query) : O === null && (O = c),
					P === void 0 ? (P = this.fragment) : P === null && (P = c),
					A === this.scheme &&
					C === this.authority &&
					D === this.path &&
					O === this.query &&
					P === this.fragment
						? this
						: new g(A, C, D, O, P)
				)
			}
			static parse(T, A = !1) {
				let C = h.exec(T)
				return C
					? new g(C[2] || c, Z(C[4] || c), Z(C[5] || c), Z(C[7] || c), Z(C[9] || c), A)
					: new g(c, c, c, c, c)
			}
			static file(T) {
				let A = c
				if ((i && (T = T.replace(/\\/g, d)), T[0] === d && T[1] === d)) {
					let C = T.indexOf(d, 2)
					C === -1
						? ((A = T.substring(2)), (T = d))
						: ((A = T.substring(2, C)), (T = T.substring(C) || d))
				}
				return new g('file', A, T, c, c)
			}
			static from(T) {
				let A = new g(T.scheme, T.authority, T.path, T.query, T.fragment)
				return u(A, !0), A
			}
			toString(T = !1) {
				return v(this, T)
			}
			toJSON() {
				return this
			}
			static revive(T) {
				if (T) {
					if (T instanceof Oe) return T
					{
						let A = new g(T)
						return (A._formatted = T.external), (A._fsPath = T._sep === p ? T.fsPath : null), A
					}
				}
				return T
			}
		}
		s(Oe, 'f')
		let f = Oe,
			p = i ? 1 : void 0
		const Di = class Di extends f {
			constructor() {
				super(...arguments)
				ht(this, '_formatted', null)
				ht(this, '_fsPath', null)
			}
			get fsPath() {
				return this._fsPath || (this._fsPath = E(this, !1)), this._fsPath
			}
			toString(A = !1) {
				return A
					? v(this, !0)
					: (this._formatted || (this._formatted = v(this, !1)), this._formatted)
			}
			toJSON() {
				let A = { $mid: 1 }
				return (
					this._fsPath && ((A.fsPath = this._fsPath), (A._sep = p)),
					this._formatted && (A.external = this._formatted),
					this.path && (A.path = this.path),
					this.scheme && (A.scheme = this.scheme),
					this.authority && (A.authority = this.authority),
					this.query && (A.query = this.query),
					this.fragment && (A.fragment = this.fragment),
					A
				)
			}
		}
		s(Di, 'l')
		let g = Di,
			y = {
				58: '%3A',
				47: '%2F',
				63: '%3F',
				35: '%23',
				91: '%5B',
				93: '%5D',
				64: '%40',
				33: '%21',
				36: '%24',
				38: '%26',
				39: '%27',
				40: '%28',
				41: '%29',
				42: '%2A',
				43: '%2B',
				44: '%2C',
				59: '%3B',
				61: '%3D',
				32: '%20',
			}
		function k(S, T, A) {
			let C,
				D = -1
			for (let O = 0; O < S.length; O++) {
				let P = S.charCodeAt(O)
				if (
					(P >= 97 && P <= 122) ||
					(P >= 65 && P <= 90) ||
					(P >= 48 && P <= 57) ||
					P === 45 ||
					P === 46 ||
					P === 95 ||
					P === 126 ||
					(T && P === 47) ||
					(A && P === 91) ||
					(A && P === 93) ||
					(A && P === 58)
				)
					D !== -1 && ((C += encodeURIComponent(S.substring(D, O))), (D = -1)),
						C !== void 0 && (C += S.charAt(O))
				else {
					C === void 0 && (C = S.substr(0, O))
					let ue = y[P]
					ue !== void 0
						? (D !== -1 && ((C += encodeURIComponent(S.substring(D, O))), (D = -1)), (C += ue))
						: D === -1 && (D = O)
				}
			}
			return D !== -1 && (C += encodeURIComponent(S.substring(D))), C !== void 0 ? C : S
		}
		s(k, 'd')
		function R(S) {
			let T
			for (let A = 0; A < S.length; A++) {
				let C = S.charCodeAt(A)
				C === 35 || C === 63
					? (T === void 0 && (T = S.substr(0, A)), (T += y[C]))
					: T !== void 0 && (T += S[A])
			}
			return T !== void 0 ? T : S
		}
		s(R, 'p')
		function E(S, T) {
			let A
			return (
				(A =
					S.authority && S.path.length > 1 && S.scheme === 'file'
						? `//${S.authority}${S.path}`
						: S.path.charCodeAt(0) === 47 &&
						  ((S.path.charCodeAt(1) >= 65 && S.path.charCodeAt(1) <= 90) ||
								(S.path.charCodeAt(1) >= 97 && S.path.charCodeAt(1) <= 122)) &&
						  S.path.charCodeAt(2) === 58
						? T
							? S.path.substr(1)
							: S.path[1].toLowerCase() + S.path.substr(2)
						: S.path),
				i && (A = A.replace(/\//g, '\\')),
				A
			)
		}
		s(E, 'm')
		function v(S, T) {
			let A = T ? R : k,
				C = '',
				{ scheme: D, authority: O, path: P, query: ue, fragment: re } = S
			if ((D && ((C += D), (C += ':')), (O || D === 'file') && ((C += d), (C += d)), O)) {
				let H = O.indexOf('@')
				if (H !== -1) {
					let ct = O.substr(0, H)
					;(O = O.substr(H + 1)),
						(H = ct.lastIndexOf(':')),
						H === -1
							? (C += A(ct, !1, !1))
							: ((C += A(ct.substr(0, H), !1, !1)), (C += ':'), (C += A(ct.substr(H + 1), !1, !0))),
						(C += '@')
				}
				;(O = O.toLowerCase()),
					(H = O.lastIndexOf(':')),
					H === -1 ? (C += A(O, !1, !0)) : ((C += A(O.substr(0, H), !1, !0)), (C += O.substr(H)))
			}
			if (P) {
				if (P.length >= 3 && P.charCodeAt(0) === 47 && P.charCodeAt(2) === 58) {
					let H = P.charCodeAt(1)
					H >= 65 && H <= 90 && (P = `/${String.fromCharCode(H + 32)}:${P.substr(3)}`)
				} else if (P.length >= 2 && P.charCodeAt(1) === 58) {
					let H = P.charCodeAt(0)
					H >= 65 && H <= 90 && (P = `${String.fromCharCode(H + 32)}:${P.substr(2)}`)
				}
				C += A(P, !0, !1)
			}
			return (
				ue && ((C += '?'), (C += A(ue, !1, !1))),
				re && ((C += '#'), (C += T ? re : k(re, !1, !1))),
				C
			)
		}
		s(v, 'y')
		function N(S) {
			try {
				return decodeURIComponent(S)
			} catch {
				return S.length > 3 ? S.substr(0, 3) + N(S.substr(3)) : S
			}
		}
		s(N, 'v')
		let B = /(%[0-9A-Za-z][0-9A-Za-z])+/g
		function Z(S) {
			return S.match(B) ? S.replace(B, (T) => N(T)) : S
		}
		s(Z, 'C')
		var Pe = t(470)
		let ve = Pe.posix || Pe,
			Be = '/'
		var $e
		;(function (S) {
			;(S.joinPath = function (T, ...A) {
				return T.with({ path: ve.join(T.path, ...A) })
			}),
				(S.resolvePath = function (T, ...A) {
					let C = T.path,
						D = !1
					C[0] !== Be && ((C = Be + C), (D = !0))
					let O = ve.resolve(C, ...A)
					return D && O[0] === Be && !T.authority && (O = O.substring(1)), T.with({ path: O })
				}),
				(S.dirname = function (T) {
					if (T.path.length === 0 || T.path === Be) return T
					let A = ve.dirname(T.path)
					return A.length === 1 && A.charCodeAt(0) === 46 && (A = ''), T.with({ path: A })
				}),
				(S.basename = function (T) {
					return ve.basename(T.path)
				}),
				(S.extname = function (T) {
					return ve.extname(T.path)
				})
		})($e || ($e = {}))
	})(),
		(Ym = r)
})()
var { URI: vt, Utils: Fi } = Ym,
	ze
;(function (n) {
	;(n.basename = Fi.basename),
		(n.dirname = Fi.dirname),
		(n.extname = Fi.extname),
		(n.joinPath = Fi.joinPath),
		(n.resolvePath = Fi.resolvePath)
	function e(r, i) {
		return (r == null ? void 0 : r.toString()) === (i == null ? void 0 : i.toString())
	}
	s(e, 'equals'), (n.equals = e)
	function t(r, i) {
		let a = typeof r == 'string' ? r : r.path,
			o = typeof i == 'string' ? i : i.path,
			l = a.split('/').filter((f) => f.length > 0),
			u = o.split('/').filter((f) => f.length > 0),
			c = 0
		for (; c < l.length && l[c] === u[c]; c++);
		let d = '../'.repeat(l.length - c),
			h = u.slice(c).join('/')
		return d + h
	}
	s(t, 'relative'), (n.relative = t)
})(ze || (ze = {}))
var U
;(function (n) {
	;(n[(n.Changed = 0)] = 'Changed'),
		(n[(n.Parsed = 1)] = 'Parsed'),
		(n[(n.IndexedContent = 2)] = 'IndexedContent'),
		(n[(n.ComputedScopes = 3)] = 'ComputedScopes'),
		(n[(n.Linked = 4)] = 'Linked'),
		(n[(n.IndexedReferences = 5)] = 'IndexedReferences'),
		(n[(n.Validated = 6)] = 'Validated')
})(U || (U = {}))
var br,
	Xm =
		((br = class {
			constructor(e) {
				;(this.serviceRegistry = e.ServiceRegistry),
					(this.textDocuments = e.workspace.TextDocuments),
					(this.fileSystemProvider = e.workspace.FileSystemProvider)
			}
			async fromUri(e, t = W.CancellationToken.None) {
				let r = await this.fileSystemProvider.readFile(e)
				return this.createAsync(e, r, t)
			}
			fromTextDocument(e, t, r) {
				return (t = t ?? vt.parse(e.uri)), r ? this.createAsync(t, e, r) : this.create(t, e)
			}
			fromString(e, t, r) {
				return r ? this.createAsync(t, e, r) : this.create(t, e)
			}
			fromModel(e, t) {
				return this.create(t, { $model: e })
			}
			create(e, t) {
				if (typeof t == 'string') {
					let r = this.parse(e, t)
					return this.createLangiumDocument(r, e, void 0, t)
				} else if ('$model' in t) {
					let r = { value: t.$model, parserErrors: [], lexerErrors: [] }
					return this.createLangiumDocument(r, e)
				} else {
					let r = this.parse(e, t.getText())
					return this.createLangiumDocument(r, e, t)
				}
			}
			async createAsync(e, t, r) {
				if (typeof t == 'string') {
					let i = await this.parseAsync(e, t, r)
					return this.createLangiumDocument(i, e, void 0, t)
				} else {
					let i = await this.parseAsync(e, t.getText(), r)
					return this.createLangiumDocument(i, e, t)
				}
			}
			createLangiumDocument(e, t, r, i) {
				let a
				if (r) a = { parseResult: e, uri: t, state: U.Parsed, references: [], textDocument: r }
				else {
					let o = this.createTextDocumentGetter(t, i)
					a = {
						parseResult: e,
						uri: t,
						state: U.Parsed,
						references: [],
						get textDocument() {
							return o()
						},
					}
				}
				return (e.value.$document = a), a
			}
			async update(e, t) {
				var r, i
				let a =
						(r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText,
					o = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()),
					l = o ? o.getText() : await this.fileSystemProvider.readFile(e.uri)
				if (o) Object.defineProperty(e, 'textDocument', { value: o })
				else {
					let u = this.createTextDocumentGetter(e.uri, l)
					Object.defineProperty(e, 'textDocument', { get: u })
				}
				return (
					a !== l &&
						((e.parseResult = await this.parseAsync(e.uri, l, t)),
						(e.parseResult.value.$document = e)),
					(e.state = U.Parsed),
					e
				)
			}
			parse(e, t) {
				return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t)
			}
			parseAsync(e, t, r) {
				return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r)
			}
			createTextDocumentGetter(e, t) {
				let r = this.serviceRegistry,
					i
				return () =>
					i ??
					(i = ls.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, t ?? ''))
			}
		}),
		s(br, 'DefaultLangiumDocumentFactory'),
		br),
	wr,
	Jm =
		((wr = class {
			constructor(e) {
				;(this.documentMap = new Map()),
					(this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory)
			}
			get all() {
				return q(this.documentMap.values())
			}
			addDocument(e) {
				let t = e.uri.toString()
				if (this.documentMap.has(t))
					throw new Error(`A document with the URI '${t}' is already present.`)
				this.documentMap.set(t, e)
			}
			getDocument(e) {
				let t = e.toString()
				return this.documentMap.get(t)
			}
			async getOrCreateDocument(e, t) {
				let r = this.getDocument(e)
				return r || ((r = await this.langiumDocumentFactory.fromUri(e, t)), this.addDocument(r), r)
			}
			createDocument(e, t, r) {
				if (r)
					return this.langiumDocumentFactory
						.fromString(t, e, r)
						.then((i) => (this.addDocument(i), i))
				{
					let i = this.langiumDocumentFactory.fromString(t, e)
					return this.addDocument(i), i
				}
			}
			hasDocument(e) {
				return this.documentMap.has(e.toString())
			}
			invalidateDocument(e) {
				let t = e.toString(),
					r = this.documentMap.get(t)
				return (
					r &&
						((r.state = U.Changed),
						(r.precomputedScopes = void 0),
						(r.references = []),
						(r.diagnostics = void 0)),
					r
				)
			}
			deleteDocument(e) {
				let t = e.toString(),
					r = this.documentMap.get(t)
				return r && ((r.state = U.Changed), this.documentMap.delete(t)), r
			}
		}),
		s(wr, 'DefaultLangiumDocuments'),
		wr),
	Pr,
	Qm =
		((Pr = class {
			constructor(e) {
				;(this.reflection = e.shared.AstReflection),
					(this.langiumDocuments = () => e.shared.workspace.LangiumDocuments),
					(this.scopeProvider = e.references.ScopeProvider),
					(this.astNodeLocator = e.workspace.AstNodeLocator)
			}
			async link(e, t = W.CancellationToken.None) {
				for (let r of Ze(e.parseResult.value)) await fe(t), fa(r).forEach((i) => this.doLink(i, e))
			}
			doLink(e, t) {
				let r = e.reference
				if (r._ref === void 0)
					try {
						let i = this.getCandidate(e)
						if (on(i)) r._ref = i
						else if (
							((r._nodeDescription = i), this.langiumDocuments().hasDocument(i.documentUri))
						) {
							let a = this.loadAstNode(i)
							r._ref = a ?? this.createLinkingError(e, i)
						}
					} catch (i) {
						r._ref = Object.assign(Object.assign({}, e), {
							message: `An error occurred while resolving reference to '${r.$refText}': ${i}`,
						})
					}
				t.references.push(r)
			}
			unlink(e) {
				for (let t of e.references) delete t._ref, delete t._nodeDescription
				e.references = []
			}
			getCandidate(e) {
				return (
					this.scopeProvider.getScope(e).getElement(e.reference.$refText) ??
					this.createLinkingError(e)
				)
			}
			buildReference(e, t, r, i) {
				let a = this,
					o = {
						$refNode: r,
						$refText: i,
						get ref() {
							var l
							if (Y(this._ref)) return this._ref
							if (Ko(this._nodeDescription)) {
								let u = a.loadAstNode(this._nodeDescription)
								this._ref =
									u ??
									a.createLinkingError(
										{ reference: o, container: e, property: t },
										this._nodeDescription
									)
							} else if (this._ref === void 0) {
								let u = a.getLinkedNode({ reference: o, container: e, property: t })
								if (u.error && Ce(e).state < U.ComputedScopes) return
								;(this._ref = (l = u.node) !== null && l !== void 0 ? l : u.error),
									(this._nodeDescription = u.descr)
							}
							return Y(this._ref) ? this._ref : void 0
						},
						get $nodeDescription() {
							return this._nodeDescription
						},
						get error() {
							return on(this._ref) ? this._ref : void 0
						},
					}
				return o
			}
			getLinkedNode(e) {
				try {
					let t = this.getCandidate(e)
					if (on(t)) return { error: t }
					let r = this.loadAstNode(t)
					return r ? { node: r, descr: t } : { descr: t, error: this.createLinkingError(e, t) }
				} catch (t) {
					return {
						error: Object.assign(Object.assign({}, e), {
							message: `An error occurred while resolving reference to '${e.reference.$refText}': ${t}`,
						}),
					}
				}
			}
			loadAstNode(e) {
				if (e.node) return e.node
				let t = this.langiumDocuments().getDocument(e.documentUri)
				if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e.path)
			}
			createLinkingError(e, t) {
				let r = Ce(e.container)
				r.state < U.ComputedScopes &&
					console.warn(
						`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`
					)
				let i = this.reflection.getReferenceType(e)
				return Object.assign(Object.assign({}, e), {
					message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`,
					targetDescription: t,
				})
			}
		}),
		s(Pr, 'DefaultLinker'),
		Pr)
function vc(n) {
	return typeof n.name == 'string'
}
s(vc, 'isNamed')
var Or,
	Zm =
		((Or = class {
			getName(e) {
				if (vc(e)) return e.name
			}
			getNameNode(e) {
				return ws(e.$cstNode, 'name')
			}
		}),
		s(Or, 'DefaultNameProvider'),
		Or),
	_r,
	eg =
		((_r = class {
			constructor(e) {
				;(this.nameProvider = e.references.NameProvider),
					(this.index = e.shared.workspace.IndexManager),
					(this.nodeLocator = e.workspace.AstNodeLocator)
			}
			findDeclaration(e) {
				if (e) {
					let t = vu(e),
						r = e.astNode
					if (t && r) {
						let i = r[t.feature]
						if (de(i)) return i.ref
						if (Array.isArray(i)) {
							for (let a of i)
								if (de(a) && a.$refNode && a.$refNode.offset <= e.offset && a.$refNode.end >= e.end)
									return a.ref
						}
					}
					if (r) {
						let i = this.nameProvider.getNameNode(r)
						if (i && (i === e || Ho(e, i))) return r
					}
				}
			}
			findDeclarationNode(e) {
				let t = this.findDeclaration(e)
				if (t != null && t.$cstNode) return this.nameProvider.getNameNode(t) ?? t.$cstNode
			}
			findReferences(e, t) {
				let r = []
				if (t.includeDeclaration) {
					let a = this.getReferenceToSelf(e)
					a && r.push(a)
				}
				let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e))
				return (
					t.documentUri && (i = i.filter((a) => ze.equals(a.sourceUri, t.documentUri))),
					r.push(...i),
					q(r)
				)
			}
			getReferenceToSelf(e) {
				let t = this.nameProvider.getNameNode(e)
				if (t) {
					let r = Ce(e),
						i = this.nodeLocator.getAstNodePath(e)
					return {
						sourceUri: r.uri,
						sourcePath: i,
						targetUri: r.uri,
						targetPath: i,
						segment: Ai(t),
						local: !0,
					}
				}
			}
		}),
		s(_r, 'DefaultReferences'),
		_r),
	Dr,
	Ra =
		((Dr = class {
			constructor(e) {
				if (((this.map = new Map()), e)) for (let [t, r] of e) this.add(t, r)
			}
			get size() {
				return Qi.sum(q(this.map.values()).map((e) => e.length))
			}
			clear() {
				this.map.clear()
			}
			delete(e, t) {
				if (t === void 0) return this.map.delete(e)
				{
					let r = this.map.get(e)
					if (r) {
						let i = r.indexOf(t)
						if (i >= 0) return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), !0
					}
					return !1
				}
			}
			get(e) {
				var t
				return (t = this.map.get(e)) !== null && t !== void 0 ? t : []
			}
			has(e, t) {
				if (t === void 0) return this.map.has(e)
				{
					let r = this.map.get(e)
					return r ? r.indexOf(t) >= 0 : !1
				}
			}
			add(e, t) {
				return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this
			}
			addAll(e, t) {
				return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this
			}
			forEach(e) {
				this.map.forEach((t, r) => t.forEach((i) => e(i, r, this)))
			}
			[Symbol.iterator]() {
				return this.entries().iterator()
			}
			entries() {
				return q(this.map.entries()).flatMap(([e, t]) => t.map((r) => [e, r]))
			}
			keys() {
				return q(this.map.keys())
			}
			values() {
				return q(this.map.values()).flat()
			}
			entriesGroupedByKey() {
				return q(this.map.entries())
			}
		}),
		s(Dr, 'MultiMap'),
		Dr),
	Mr,
	cs =
		((Mr = class {
			get size() {
				return this.map.size
			}
			constructor(e) {
				if (((this.map = new Map()), (this.inverse = new Map()), e))
					for (let [t, r] of e) this.set(t, r)
			}
			clear() {
				this.map.clear(), this.inverse.clear()
			}
			set(e, t) {
				return this.map.set(e, t), this.inverse.set(t, e), this
			}
			get(e) {
				return this.map.get(e)
			}
			getKey(e) {
				return this.inverse.get(e)
			}
			delete(e) {
				let t = this.map.get(e)
				return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), !0) : !1
			}
		}),
		s(Mr, 'BiMap'),
		Mr),
	Fr,
	tg =
		((Fr = class {
			constructor(e) {
				;(this.nameProvider = e.references.NameProvider),
					(this.descriptions = e.workspace.AstNodeDescriptionProvider)
			}
			async computeExports(e, t = W.CancellationToken.None) {
				return this.computeExportsForNode(e.parseResult.value, e, void 0, t)
			}
			async computeExportsForNode(e, t, r = ha, i = W.CancellationToken.None) {
				let a = []
				this.exportNode(e, a, t)
				for (let o of r(e)) await fe(i), this.exportNode(o, a, t)
				return a
			}
			exportNode(e, t, r) {
				let i = this.nameProvider.getName(e)
				i && t.push(this.descriptions.createDescription(e, i, r))
			}
			async computeLocalScopes(e, t = W.CancellationToken.None) {
				let r = e.parseResult.value,
					i = new Ra()
				for (let a of Rt(r)) await fe(t), this.processNode(a, e, i)
				return i
			}
			processNode(e, t, r) {
				let i = e.$container
				if (i) {
					let a = this.nameProvider.getName(e)
					a && r.add(i, this.descriptions.createDescription(e, a, t))
				}
			}
		}),
		s(Fr, 'DefaultScopeComputation'),
		Fr),
	Ur,
	Oo =
		((Ur = class {
			constructor(e, t, r) {
				var i
				;(this.elements = e),
					(this.outerScope = t),
					(this.caseInsensitive =
						(i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : !1)
			}
			getAllElements() {
				return this.outerScope
					? this.elements.concat(this.outerScope.getAllElements())
					: this.elements
			}
			getElement(e) {
				let t = this.caseInsensitive
					? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase())
					: this.elements.find((r) => r.name === e)
				if (t) return t
				if (this.outerScope) return this.outerScope.getElement(e)
			}
		}),
		s(Ur, 'StreamScope'),
		Ur),
	Gr,
	ng =
		((Gr = class {
			constructor(e, t, r) {
				var i
				;(this.elements = new Map()),
					(this.caseInsensitive =
						(i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : !1)
				for (let a of e) {
					let o = this.caseInsensitive ? a.name.toLowerCase() : a.name
					this.elements.set(o, a)
				}
				this.outerScope = t
			}
			getElement(e) {
				let t = this.caseInsensitive ? e.toLowerCase() : e,
					r = this.elements.get(t)
				if (r) return r
				if (this.outerScope) return this.outerScope.getElement(e)
			}
			getAllElements() {
				let e = q(this.elements.values())
				return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e
			}
		}),
		s(Gr, 'MapScope'),
		Gr),
	aT = {
		getElement() {},
		getAllElements() {
			return vs
		},
	},
	Br,
	qs =
		((Br = class {
			constructor() {
				;(this.toDispose = []), (this.isDisposed = !1)
			}
			onDispose(e) {
				this.toDispose.push(e)
			}
			dispose() {
				this.throwIfDisposed(),
					this.clear(),
					(this.isDisposed = !0),
					this.toDispose.forEach((e) => e.dispose())
			}
			throwIfDisposed() {
				if (this.isDisposed) throw new Error('This cache has already been disposed')
			}
		}),
		s(Br, 'DisposableCache'),
		Br),
	Vr,
	Rc =
		((Vr = class extends qs {
			constructor() {
				super(...arguments), (this.cache = new Map())
			}
			has(e) {
				return this.throwIfDisposed(), this.cache.has(e)
			}
			set(e, t) {
				this.throwIfDisposed(), this.cache.set(e, t)
			}
			get(e, t) {
				if ((this.throwIfDisposed(), this.cache.has(e))) return this.cache.get(e)
				if (t) {
					let r = t()
					return this.cache.set(e, r), r
				} else return
			}
			delete(e) {
				return this.throwIfDisposed(), this.cache.delete(e)
			}
			clear() {
				this.throwIfDisposed(), this.cache.clear()
			}
		}),
		s(Vr, 'SimpleCache'),
		Vr),
	jr,
	Ys =
		((jr = class extends qs {
			constructor(e) {
				super(), (this.cache = new Map()), (this.converter = e ?? ((t) => t))
			}
			has(e, t) {
				return this.throwIfDisposed(), this.cacheForContext(e).has(t)
			}
			set(e, t, r) {
				this.throwIfDisposed(), this.cacheForContext(e).set(t, r)
			}
			get(e, t, r) {
				this.throwIfDisposed()
				let i = this.cacheForContext(e)
				if (i.has(t)) return i.get(t)
				if (r) {
					let a = r()
					return i.set(t, a), a
				} else return
			}
			delete(e, t) {
				return this.throwIfDisposed(), this.cacheForContext(e).delete(t)
			}
			clear(e) {
				if ((this.throwIfDisposed(), e)) {
					let t = this.converter(e)
					this.cache.delete(t)
				} else this.cache.clear()
			}
			cacheForContext(e) {
				let t = this.converter(e),
					r = this.cache.get(t)
				return r || ((r = new Map()), this.cache.set(t, r)), r
			}
		}),
		s(jr, 'ContextCache'),
		jr),
	Kr,
	rg =
		((Kr = class extends Ys {
			constructor(e) {
				super((t) => t.toString()),
					this.onDispose(
						e.workspace.DocumentBuilder.onUpdate((t, r) => {
							let i = t.concat(r)
							for (let a of i) this.clear(a)
						})
					)
			}
		}),
		s(Kr, 'DocumentCache'),
		Kr),
	Wr,
	Ac =
		((Wr = class extends Rc {
			constructor(e) {
				super(),
					this.onDispose(
						e.workspace.DocumentBuilder.onUpdate(() => {
							this.clear()
						})
					)
			}
		}),
		s(Wr, 'WorkspaceCache'),
		Wr),
	Hr,
	ig =
		((Hr = class {
			constructor(e) {
				;(this.reflection = e.shared.AstReflection),
					(this.nameProvider = e.references.NameProvider),
					(this.descriptions = e.workspace.AstNodeDescriptionProvider),
					(this.indexManager = e.shared.workspace.IndexManager),
					(this.globalScopeCache = new Ac(e.shared))
			}
			getScope(e) {
				let t = [],
					r = this.reflection.getReferenceType(e),
					i = Ce(e.container).precomputedScopes
				if (i) {
					let o = e.container
					do {
						let l = i.get(o)
						l.length > 0 && t.push(q(l).filter((u) => this.reflection.isSubtype(u.type, r))),
							(o = o.$container)
					} while (o)
				}
				let a = this.getGlobalScope(r, e)
				for (let o = t.length - 1; o >= 0; o--) a = this.createScope(t[o], a)
				return a
			}
			createScope(e, t, r) {
				return new Oo(q(e), t, r)
			}
			createScopeForNodes(e, t, r) {
				let i = q(e)
					.map((a) => {
						let o = this.nameProvider.getName(a)
						if (o) return this.descriptions.createDescription(a, o)
					})
					.nonNullable()
				return new Oo(i, t, r)
			}
			getGlobalScope(e, t) {
				return this.globalScopeCache.get(e, () => new ng(this.indexManager.allElements(e)))
			}
		}),
		s(Hr, 'DefaultScopeProvider'),
		Hr)
function Ec(n) {
	return typeof n.$comment == 'string'
}
s(Ec, 'isAstNodeWithComment')
function _o(n) {
	return typeof n == 'object' && !!n && ('$ref' in n || '$error' in n)
}
s(_o, 'isIntermediateReference')
var zr,
	ag =
		((zr = class {
			constructor(e) {
				;(this.ignoreProperties = new Set([
					'$container',
					'$containerProperty',
					'$containerIndex',
					'$document',
					'$cstNode',
				])),
					(this.langiumDocuments = e.shared.workspace.LangiumDocuments),
					(this.astNodeLocator = e.workspace.AstNodeLocator),
					(this.nameProvider = e.references.NameProvider),
					(this.commentProvider = e.documentation.CommentProvider)
			}
			serialize(e, t = {}) {
				let r = t == null ? void 0 : t.replacer,
					i = s((o, l) => this.replacer(o, l, t), 'defaultReplacer'),
					a = r ? (o, l) => r(o, l, i) : i
				try {
					return (this.currentDocument = Ce(e)), JSON.stringify(e, a, t == null ? void 0 : t.space)
				} finally {
					this.currentDocument = void 0
				}
			}
			deserialize(e, t = {}) {
				let r = JSON.parse(e)
				return this.linkNode(r, r, t), r
			}
			replacer(e, t, { refText: r, sourceText: i, textRegions: a, comments: o, uriConverter: l }) {
				var u, c, d, h
				if (!this.ignoreProperties.has(e))
					if (de(t)) {
						let f = t.ref,
							p = r ? t.$refText : void 0
						if (f) {
							let g = Ce(f),
								y = ''
							this.currentDocument &&
								this.currentDocument !== g &&
								(l ? (y = l(g.uri, t)) : (y = g.uri.toString()))
							let k = this.astNodeLocator.getAstNodePath(f)
							return { $ref: `${y}#${k}`, $refText: p }
						} else
							return {
								$error:
									(c = (u = t.error) === null || u === void 0 ? void 0 : u.message) !== null &&
									c !== void 0
										? c
										: 'Could not resolve reference',
								$refText: p,
							}
					} else if (Y(t)) {
						let f
						if (
							(a &&
								((f = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t))),
								(!e || t.$document) &&
									f != null &&
									f.$textRegion &&
									(f.$textRegion.documentURI =
										(d = this.currentDocument) === null || d === void 0
											? void 0
											: d.uri.toString())),
							i &&
								!e &&
								(f ?? (f = Object.assign({}, t)),
								(f.$sourceText = (h = t.$cstNode) === null || h === void 0 ? void 0 : h.text)),
							o)
						) {
							f ?? (f = Object.assign({}, t))
							let p = this.commentProvider.getComment(t)
							p && (f.$comment = p.replace(/\r/g, ''))
						}
						return f ?? t
					} else return t
			}
			addAstNodeRegionWithAssignmentsTo(e) {
				let t = s(
					(r) => ({ offset: r.offset, end: r.end, length: r.length, range: r.range }),
					'createDocumentSegment'
				)
				if (e.$cstNode) {
					let r = (e.$textRegion = t(e.$cstNode)),
						i = (r.assignments = {})
					return (
						Object.keys(e)
							.filter((a) => !a.startsWith('$'))
							.forEach((a) => {
								let o = yu(e.$cstNode, a).map(t)
								o.length !== 0 && (i[a] = o)
							}),
						e
					)
				}
			}
			linkNode(e, t, r, i, a, o) {
				for (let [u, c] of Object.entries(e))
					if (Array.isArray(c))
						for (let d = 0; d < c.length; d++) {
							let h = c[d]
							_o(h)
								? (c[d] = this.reviveReference(e, u, t, h, r))
								: Y(h) && this.linkNode(h, t, r, e, u, d)
						}
					else
						_o(c)
							? (e[u] = this.reviveReference(e, u, t, c, r))
							: Y(c) && this.linkNode(c, t, r, e, u)
				let l = e
				;(l.$container = i), (l.$containerProperty = a), (l.$containerIndex = o)
			}
			reviveReference(e, t, r, i, a) {
				let o = i.$refText,
					l = i.$error
				if (i.$ref) {
					let u = this.getRefNode(r, i.$ref, a.uriConverter)
					if (Y(u)) return o || (o = this.nameProvider.getName(u)), { $refText: o ?? '', ref: u }
					l = u
				}
				if (l) {
					let u = { $refText: o ?? '' }
					return (u.error = { container: e, property: t, message: l, reference: u }), u
				} else return
			}
			getRefNode(e, t, r) {
				try {
					let i = t.indexOf('#')
					if (i === 0)
						return (
							this.astNodeLocator.getAstNode(e, t.substring(1)) || 'Could not resolve path: ' + t
						)
					if (i < 0) {
						let u = r ? r(t) : vt.parse(t),
							c = this.langiumDocuments.getDocument(u)
						return c ? c.parseResult.value : 'Could not find document for URI: ' + t
					}
					let a = r ? r(t.substring(0, i)) : vt.parse(t.substring(0, i)),
						o = this.langiumDocuments.getDocument(a)
					return o
						? i === t.length - 1
							? o.parseResult.value
							: this.astNodeLocator.getAstNode(o.parseResult.value, t.substring(i + 1)) ||
							  'Could not resolve URI: ' + t
						: 'Could not find document for URI: ' + t
				} catch (i) {
					return String(i)
				}
			}
		}),
		s(zr, 'DefaultJsonSerializer'),
		zr),
	qr,
	sg =
		((qr = class {
			register(e) {
				if (!this.singleton && !this.map) {
					this.singleton = e
					return
				}
				if (!this.map && ((this.map = {}), this.singleton)) {
					for (let t of this.singleton.LanguageMetaData.fileExtensions) this.map[t] = this.singleton
					this.singleton = void 0
				}
				for (let t of e.LanguageMetaData.fileExtensions)
					this.map[t] !== void 0 &&
						this.map[t] !== e &&
						console.warn(
							`The file extension ${t} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`
						),
						(this.map[t] = e)
			}
			getServices(e) {
				if (this.singleton !== void 0) return this.singleton
				if (this.map === void 0)
					throw new Error(
						'The service registry is empty. Use `register` to register the services of a language.'
					)
				let t = ze.extname(e),
					r = this.map[t]
				if (!r)
					throw new Error(`The service registry contains no services for the extension '${t}'.`)
				return r
			}
			get all() {
				return this.singleton !== void 0
					? [this.singleton]
					: this.map !== void 0
					? Object.values(this.map)
					: []
			}
		}),
		s(qr, 'DefaultServiceRegistry'),
		qr)
function ds(n) {
	return { code: n }
}
s(ds, 'diagnosticData')
var oa
;(function (n) {
	n.all = ['fast', 'slow', 'built-in']
})(oa || (oa = {}))
var Yr,
	og =
		((Yr = class {
			constructor(e) {
				;(this.entries = new Ra()), (this.reflection = e.shared.AstReflection)
			}
			register(e, t = this, r = 'fast') {
				if (r === 'built-in')
					throw new Error(
						"The 'built-in' category is reserved for lexer, parser, and linker errors."
					)
				for (let [i, a] of Object.entries(e)) {
					let o = a
					if (Array.isArray(o))
						for (let l of o) {
							let u = { check: this.wrapValidationException(l, t), category: r }
							this.addEntry(i, u)
						}
					else if (typeof o == 'function') {
						let l = { check: this.wrapValidationException(o, t), category: r }
						this.addEntry(i, l)
					}
				}
			}
			wrapValidationException(e, t) {
				return async (r, i, a) => {
					try {
						await e.call(t, r, i, a)
					} catch (o) {
						if (Oi(o)) throw o
						console.error('An error occurred during validation:', o)
						let l = o instanceof Error ? o.message : String(o)
						o instanceof Error && o.stack && console.error(o.stack),
							i('error', 'An error occurred during validation: ' + l, { node: r })
					}
				}
			}
			addEntry(e, t) {
				if (e === 'AstNode') {
					this.entries.add('AstNode', t)
					return
				}
				for (let r of this.reflection.getAllSubTypes(e)) this.entries.add(r, t)
			}
			getChecks(e, t) {
				let r = q(this.entries.get(e)).concat(this.entries.get('AstNode'))
				return t && (r = r.filter((i) => t.includes(i.category))), r.map((i) => i.check)
			}
		}),
		s(Yr, 'ValidationRegistry'),
		Yr),
	Xr,
	lg =
		((Xr = class {
			constructor(e) {
				;(this.validationRegistry = e.validation.ValidationRegistry),
					(this.metadata = e.LanguageMetaData)
			}
			async validateDocument(e, t = {}, r = W.CancellationToken.None) {
				let i = e.parseResult,
					a = []
				if (
					(await fe(r),
					(!t.categories || t.categories.includes('built-in')) &&
						(this.processLexingErrors(i, a, t),
						(t.stopAfterLexingErrors &&
							a.some((o) => {
								var l
								return ((l = o.data) === null || l === void 0 ? void 0 : l.code) === Je.LexingError
							})) ||
							(this.processParsingErrors(i, a, t),
							t.stopAfterParsingErrors &&
								a.some((o) => {
									var l
									return (
										((l = o.data) === null || l === void 0 ? void 0 : l.code) === Je.ParsingError
									)
								})) ||
							(this.processLinkingErrors(e, a, t),
							t.stopAfterLinkingErrors &&
								a.some((o) => {
									var l
									return (
										((l = o.data) === null || l === void 0 ? void 0 : l.code) === Je.LinkingError
									)
								}))))
				)
					return a
				try {
					a.push(...(await this.validateAst(i.value, t, r)))
				} catch (o) {
					if (Oi(o)) throw o
					console.error('An error occurred during validation:', o)
				}
				return await fe(r), a
			}
			processLexingErrors(e, t, r) {
				for (let i of e.lexerErrors) {
					let a = {
						severity: qi('error'),
						range: {
							start: { line: i.line - 1, character: i.column - 1 },
							end: { line: i.line - 1, character: i.column + i.length - 1 },
						},
						message: i.message,
						data: ds(Je.LexingError),
						source: this.getSource(),
					}
					t.push(a)
				}
			}
			processParsingErrors(e, t, r) {
				for (let i of e.parserErrors) {
					let a
					if (isNaN(i.token.startOffset)) {
						if ('previousToken' in i) {
							let o = i.previousToken
							if (isNaN(o.startOffset)) {
								let l = { line: 0, character: 0 }
								a = { start: l, end: l }
							} else {
								let l = { line: o.endLine - 1, character: o.endColumn }
								a = { start: l, end: l }
							}
						}
					} else a = Zi(i.token)
					if (a) {
						let o = {
							severity: qi('error'),
							range: a,
							message: i.message,
							data: ds(Je.ParsingError),
							source: this.getSource(),
						}
						t.push(o)
					}
				}
			}
			processLinkingErrors(e, t, r) {
				for (let i of e.references) {
					let a = i.error
					if (a) {
						let o = {
							node: a.container,
							property: a.property,
							index: a.index,
							data: {
								code: Je.LinkingError,
								containerType: a.container.$type,
								property: a.property,
								refText: a.reference.$refText,
							},
						}
						t.push(this.toDiagnostic('error', a.message, o))
					}
				}
			}
			async validateAst(e, t, r = W.CancellationToken.None) {
				let i = [],
					a = s((o, l, u) => {
						i.push(this.toDiagnostic(o, l, u))
					}, 'acceptor')
				return (
					await Promise.all(
						Ze(e).map(async (o) => {
							await fe(r)
							let l = this.validationRegistry.getChecks(o.$type, t.categories)
							for (let u of l) await u(o, a, r)
						})
					),
					i
				)
			}
			toDiagnostic(e, t, r) {
				return {
					message: t,
					range: kc(r),
					severity: qi(e),
					code: r.code,
					codeDescription: r.codeDescription,
					tags: r.tags,
					relatedInformation: r.relatedInformation,
					data: r.data,
					source: this.getSource(),
				}
			}
			getSource() {
				return this.metadata.languageId
			}
		}),
		s(Xr, 'DefaultDocumentValidator'),
		Xr)
function kc(n) {
	if (n.range) return n.range
	let e
	return (
		typeof n.property == 'string'
			? (e = ws(n.node.$cstNode, n.property, n.index))
			: typeof n.keyword == 'string' && (e = Tu(n.node.$cstNode, n.keyword, n.index)),
		e ?? (e = n.node.$cstNode),
		e ? e.range : { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } }
	)
}
s(kc, 'getDiagnosticRange')
function qi(n) {
	switch (n) {
		case 'error':
			return 1
		case 'warning':
			return 2
		case 'info':
			return 3
		case 'hint':
			return 4
		default:
			throw new Error('Invalid diagnostic severity: ' + n)
	}
}
s(qi, 'toDiagnosticSeverity')
var Je
;(function (n) {
	;(n.LexingError = 'lexing-error'),
		(n.ParsingError = 'parsing-error'),
		(n.LinkingError = 'linking-error')
})(Je || (Je = {}))
var Jr,
	ug =
		((Jr = class {
			constructor(e) {
				;(this.astNodeLocator = e.workspace.AstNodeLocator),
					(this.nameProvider = e.references.NameProvider)
			}
			createDescription(e, t, r = Ce(e)) {
				t ?? (t = this.nameProvider.getName(e))
				let i = this.astNodeLocator.getAstNodePath(e)
				if (!t) throw new Error(`Node at path ${i} has no name.`)
				let a,
					o = s(() => {
						var l
						return (
							a ??
							(a = Ai(
								(l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode
							))
						)
					}, 'nameSegmentGetter')
				return {
					node: e,
					name: t,
					get nameSegment() {
						return o()
					},
					selectionSegment: Ai(e.$cstNode),
					type: e.$type,
					documentUri: r.uri,
					path: i,
				}
			}
		}),
		s(Jr, 'DefaultAstNodeDescriptionProvider'),
		Jr),
	Qr,
	cg =
		((Qr = class {
			constructor(e) {
				this.nodeLocator = e.workspace.AstNodeLocator
			}
			async createDescriptions(e, t = W.CancellationToken.None) {
				let r = [],
					i = e.parseResult.value
				for (let a of Ze(i))
					await fe(t),
						fa(a)
							.filter((o) => !on(o))
							.forEach((o) => {
								let l = this.createDescription(o)
								l && r.push(l)
							})
				return r
			}
			createDescription(e) {
				let t = e.reference.$nodeDescription,
					r = e.reference.$refNode
				if (!t || !r) return
				let i = Ce(e.container).uri
				return {
					sourceUri: i,
					sourcePath: this.nodeLocator.getAstNodePath(e.container),
					targetUri: t.documentUri,
					targetPath: t.path,
					segment: Ai(r),
					local: ze.equals(t.documentUri, i),
				}
			}
		}),
		s(Qr, 'DefaultReferenceDescriptionProvider'),
		Qr),
	Zr,
	dg =
		((Zr = class {
			constructor() {
				;(this.segmentSeparator = '/'), (this.indexSeparator = '@')
			}
			getAstNodePath(e) {
				if (e.$container) {
					let t = this.getAstNodePath(e.$container),
						r = this.getPathSegment(e)
					return t + this.segmentSeparator + r
				}
				return ''
			}
			getPathSegment({ $containerProperty: e, $containerIndex: t }) {
				if (!e) throw new Error("Missing '$containerProperty' in AST node.")
				return t !== void 0 ? e + this.indexSeparator + t : e
			}
			getAstNode(e, t) {
				return t.split(this.segmentSeparator).reduce((r, i) => {
					if (!r || i.length === 0) return r
					let a = i.indexOf(this.indexSeparator)
					if (a > 0) {
						let o = i.substring(0, a),
							l = parseInt(i.substring(a + 1)),
							u = r[o]
						return u == null ? void 0 : u[l]
					}
					return r[i]
				}, e)
			}
		}),
		s(Zr, 'DefaultAstNodeLocator'),
		Zr),
	ei,
	hg =
		((ei = class {
			constructor(e) {
				;(this._ready = new ot()),
					(this.settings = {}),
					(this.workspaceConfig = !1),
					(this.serviceRegistry = e.ServiceRegistry)
			}
			get ready() {
				return this._ready.promise
			}
			initialize(e) {
				var t, r
				this.workspaceConfig =
					(r =
						(t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !==
						null && r !== void 0
						? r
						: !1
			}
			async initialized(e) {
				if (this.workspaceConfig) {
					if (e.register) {
						let t = this.serviceRegistry.all
						e.register({ section: t.map((r) => this.toSectionName(r.LanguageMetaData.languageId)) })
					}
					if (e.fetchConfiguration) {
						let t = this.serviceRegistry.all.map((i) => ({
								section: this.toSectionName(i.LanguageMetaData.languageId),
							})),
							r = await e.fetchConfiguration(t)
						t.forEach((i, a) => {
							this.updateSectionConfiguration(i.section, r[a])
						})
					}
				}
				this._ready.resolve()
			}
			updateConfiguration(e) {
				e.settings &&
					Object.keys(e.settings).forEach((t) => {
						this.updateSectionConfiguration(t, e.settings[t])
					})
			}
			updateSectionConfiguration(e, t) {
				this.settings[e] = t
			}
			async getConfiguration(e, t) {
				await this.ready
				let r = this.toSectionName(e)
				if (this.settings[r]) return this.settings[r][t]
			}
			toSectionName(e) {
				return `${e}`
			}
		}),
		s(ei, 'DefaultConfigurationProvider'),
		ei),
	Ci
;(function (n) {
	function e(t) {
		return { dispose: s(async () => await t(), 'dispose') }
	}
	s(e, 'create'), (n.create = e)
})(Ci || (Ci = {}))
var ti,
	fg =
		((ti = class {
			constructor(e) {
				;(this.updateBuildOptions = { validation: { categories: ['built-in', 'fast'] } }),
					(this.updateListeners = []),
					(this.buildPhaseListeners = new Ra()),
					(this.buildState = new Map()),
					(this.documentBuildWaiters = new Map()),
					(this.currentState = U.Changed),
					(this.langiumDocuments = e.workspace.LangiumDocuments),
					(this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory),
					(this.indexManager = e.workspace.IndexManager),
					(this.serviceRegistry = e.ServiceRegistry)
			}
			async build(e, t = {}, r = W.CancellationToken.None) {
				var i, a
				for (let o of e) {
					let l = o.uri.toString()
					if (o.state === U.Validated) {
						if (typeof t.validation == 'boolean' && t.validation)
							(o.state = U.IndexedReferences), (o.diagnostics = void 0), this.buildState.delete(l)
						else if (typeof t.validation == 'object') {
							let u = this.buildState.get(l),
								c =
									(i = u == null ? void 0 : u.result) === null || i === void 0
										? void 0
										: i.validationChecks
							if (c) {
								let d = (
									(a = t.validation.categories) !== null && a !== void 0 ? a : oa.all
								).filter((h) => !c.includes(h))
								d.length > 0 &&
									(this.buildState.set(l, {
										completed: !1,
										options: {
											validation: Object.assign(Object.assign({}, t.validation), { categories: d }),
										},
										result: u.result,
									}),
									(o.state = U.IndexedReferences))
							}
						}
					} else this.buildState.delete(l)
				}
				;(this.currentState = U.Changed),
					await this.emitUpdate(
						e.map((o) => o.uri),
						[]
					),
					await this.buildDocuments(e, t, r)
			}
			async update(e, t, r = W.CancellationToken.None) {
				this.currentState = U.Changed
				for (let o of t)
					this.langiumDocuments.deleteDocument(o),
						this.buildState.delete(o.toString()),
						this.indexManager.remove(o)
				for (let o of e) {
					if (!this.langiumDocuments.invalidateDocument(o)) {
						let l = this.langiumDocumentFactory.fromModel({ $type: 'INVALID' }, o)
						;(l.state = U.Changed), this.langiumDocuments.addDocument(l)
					}
					this.buildState.delete(o.toString())
				}
				let i = q(e)
					.concat(t)
					.map((o) => o.toString())
					.toSet()
				this.langiumDocuments.all
					.filter((o) => !i.has(o.uri.toString()) && this.shouldRelink(o, i))
					.forEach((o) => {
						this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o),
							(o.state = Math.min(o.state, U.ComputedScopes)),
							(o.diagnostics = void 0)
					}),
					await this.emitUpdate(e, t),
					await fe(r)
				let a = this.langiumDocuments.all
					.filter((o) => {
						var l
						return (
							o.state < U.Linked ||
							!(
								!((l = this.buildState.get(o.uri.toString())) === null || l === void 0) &&
								l.completed
							)
						)
					})
					.toArray()
				await this.buildDocuments(a, this.updateBuildOptions, r)
			}
			async emitUpdate(e, t) {
				await Promise.all(this.updateListeners.map((r) => r(e, t)))
			}
			shouldRelink(e, t) {
				return e.references.some((r) => r.error !== void 0)
					? !0
					: this.indexManager.isAffected(e, t)
			}
			onUpdate(e) {
				return (
					this.updateListeners.push(e),
					Ci.create(() => {
						let t = this.updateListeners.indexOf(e)
						t >= 0 && this.updateListeners.splice(t, 1)
					})
				)
			}
			async buildDocuments(e, t, r) {
				this.prepareBuild(e, t),
					await this.runCancelable(e, U.Parsed, r, (a) => this.langiumDocumentFactory.update(a, r)),
					await this.runCancelable(e, U.IndexedContent, r, (a) =>
						this.indexManager.updateContent(a, r)
					),
					await this.runCancelable(e, U.ComputedScopes, r, async (a) => {
						let o = this.serviceRegistry.getServices(a.uri).references.ScopeComputation
						a.precomputedScopes = await o.computeLocalScopes(a, r)
					}),
					await this.runCancelable(e, U.Linked, r, (a) =>
						this.serviceRegistry.getServices(a.uri).references.Linker.link(a, r)
					),
					await this.runCancelable(e, U.IndexedReferences, r, (a) =>
						this.indexManager.updateReferences(a, r)
					)
				let i = e.filter((a) => this.shouldValidate(a))
				await this.runCancelable(i, U.Validated, r, (a) => this.validate(a, r))
				for (let a of e) {
					let o = this.buildState.get(a.uri.toString())
					o && (o.completed = !0)
				}
			}
			prepareBuild(e, t) {
				for (let r of e) {
					let i = r.uri.toString(),
						a = this.buildState.get(i)
					;(!a || a.completed) &&
						this.buildState.set(i, {
							completed: !1,
							options: t,
							result: a == null ? void 0 : a.result,
						})
				}
			}
			async runCancelable(e, t, r, i) {
				let a = e.filter((o) => o.state < t)
				for (let o of a) await fe(r), await i(o), (o.state = t)
				await this.notifyBuildPhase(a, t, r), (this.currentState = t)
			}
			onBuildPhase(e, t) {
				return (
					this.buildPhaseListeners.add(e, t),
					Ci.create(() => {
						this.buildPhaseListeners.delete(e, t)
					})
				)
			}
			waitUntil(e, t, r) {
				let i
				if ((t && 'path' in t ? (i = t) : (r = t), r ?? (r = W.CancellationToken.None), i)) {
					let a = this.langiumDocuments.getDocument(i)
					if (a && a.state > e) return Promise.resolve(i)
				}
				return this.currentState >= e
					? Promise.resolve(void 0)
					: r.isCancellationRequested
					? Promise.reject(Tt)
					: new Promise((a, o) => {
							let l = this.onBuildPhase(e, () => {
									if ((l.dispose(), u.dispose(), i)) {
										let c = this.langiumDocuments.getDocument(i)
										a(c == null ? void 0 : c.uri)
									} else a(void 0)
								}),
								u = r.onCancellationRequested(() => {
									l.dispose(), u.dispose(), o(Tt)
								})
					  })
			}
			async notifyBuildPhase(e, t, r) {
				if (e.length === 0) return
				let i = this.buildPhaseListeners.get(t)
				for (let a of i) await fe(r), await a(e, r)
			}
			shouldValidate(e) {
				return !!this.getBuildOptions(e).validation
			}
			async validate(e, t) {
				var r, i
				let a = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,
					o = this.getBuildOptions(e).validation,
					l = typeof o == 'object' ? o : void 0,
					u = await a.validateDocument(e, l, t)
				e.diagnostics ? e.diagnostics.push(...u) : (e.diagnostics = u)
				let c = this.buildState.get(e.uri.toString())
				if (c) {
					;((r = c.result) !== null && r !== void 0) || (c.result = {})
					let d = (i = l == null ? void 0 : l.categories) !== null && i !== void 0 ? i : oa.all
					c.result.validationChecks
						? c.result.validationChecks.push(...d)
						: (c.result.validationChecks = [...d])
				}
			}
			getBuildOptions(e) {
				var t, r
				return (r =
					(t = this.buildState.get(e.uri.toString())) === null || t === void 0
						? void 0
						: t.options) !== null && r !== void 0
					? r
					: {}
			}
		}),
		s(ti, 'DefaultDocumentBuilder'),
		ti),
	ni,
	pg =
		((ni = class {
			constructor(e) {
				;(this.symbolIndex = new Map()),
					(this.symbolByTypeIndex = new Ys()),
					(this.referenceIndex = new Map()),
					(this.documents = e.workspace.LangiumDocuments),
					(this.serviceRegistry = e.ServiceRegistry),
					(this.astReflection = e.AstReflection)
			}
			findAllReferences(e, t) {
				let r = Ce(e).uri,
					i = []
				return (
					this.referenceIndex.forEach((a) => {
						a.forEach((o) => {
							ze.equals(o.targetUri, r) && o.targetPath === t && i.push(o)
						})
					}),
					q(i)
				)
			}
			allElements(e, t) {
				let r = q(this.symbolIndex.keys())
				return (
					t && (r = r.filter((i) => !t || t.has(i))),
					r.map((i) => this.getFileDescriptions(i, e)).flat()
				)
			}
			getFileDescriptions(e, t) {
				var r
				return t
					? this.symbolByTypeIndex.get(e, t, () => {
							var i
							return ((i = this.symbolIndex.get(e)) !== null && i !== void 0 ? i : []).filter((a) =>
								this.astReflection.isSubtype(a.type, t)
							)
					  })
					: (r = this.symbolIndex.get(e)) !== null && r !== void 0
					? r
					: []
			}
			remove(e) {
				let t = e.toString()
				this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t)
			}
			async updateContent(e, t = W.CancellationToken.None) {
				let r = await this.serviceRegistry
						.getServices(e.uri)
						.references.ScopeComputation.computeExports(e, t),
					i = e.uri.toString()
				this.symbolIndex.set(i, r), this.symbolByTypeIndex.clear(i)
			}
			async updateReferences(e, t = W.CancellationToken.None) {
				let r = await this.serviceRegistry
					.getServices(e.uri)
					.workspace.ReferenceDescriptionProvider.createDescriptions(e, t)
				this.referenceIndex.set(e.uri.toString(), r)
			}
			isAffected(e, t) {
				let r = this.referenceIndex.get(e.uri.toString())
				return r ? r.some((i) => !i.local && t.has(i.targetUri.toString())) : !1
			}
		}),
		s(ni, 'DefaultIndexManager'),
		ni),
	ri,
	mg =
		((ri = class {
			constructor(e) {
				;(this.initialBuildOptions = {}),
					(this._ready = new ot()),
					(this.serviceRegistry = e.ServiceRegistry),
					(this.langiumDocuments = e.workspace.LangiumDocuments),
					(this.documentBuilder = e.workspace.DocumentBuilder),
					(this.fileSystemProvider = e.workspace.FileSystemProvider),
					(this.mutex = e.workspace.WorkspaceLock)
			}
			get ready() {
				return this._ready.promise
			}
			initialize(e) {
				var t
				this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0
			}
			initialized(e) {
				return this.mutex.write((t) => {
					var r
					return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], t)
				})
			}
			async initializeWorkspace(e, t = W.CancellationToken.None) {
				let r = await this.performStartup(e)
				await fe(t), await this.documentBuilder.build(r, this.initialBuildOptions, t)
			}
			async performStartup(e) {
				let t = this.serviceRegistry.all.flatMap((a) => a.LanguageMetaData.fileExtensions),
					r = [],
					i = s((a) => {
						r.push(a),
							this.langiumDocuments.hasDocument(a.uri) || this.langiumDocuments.addDocument(a)
					}, 'collector')
				return (
					await this.loadAdditionalDocuments(e, i),
					await Promise.all(
						e
							.map((a) => [a, this.getRootFolder(a)])
							.map(async (a) => this.traverseFolder(...a, t, i))
					),
					this._ready.resolve(),
					r
				)
			}
			loadAdditionalDocuments(e, t) {
				return Promise.resolve()
			}
			getRootFolder(e) {
				return vt.parse(e.uri)
			}
			async traverseFolder(e, t, r, i) {
				let a = await this.fileSystemProvider.readDirectory(t)
				await Promise.all(
					a.map(async (o) => {
						if (this.includeEntry(e, o, r)) {
							if (o.isDirectory) await this.traverseFolder(e, o.uri, r, i)
							else if (o.isFile) {
								let l = await this.langiumDocuments.getOrCreateDocument(o.uri)
								i(l)
							}
						}
					})
				)
			}
			includeEntry(e, t, r) {
				let i = ze.basename(t.uri)
				if (i.startsWith('.')) return !1
				if (t.isDirectory) return i !== 'node_modules' && i !== 'out'
				if (t.isFile) {
					let a = ze.extname(t.uri)
					return r.includes(a)
				}
				return !1
			}
		}),
		s(ri, 'DefaultWorkspaceManager'),
		ri),
	ii,
	gg =
		((ii = class {
			constructor(e) {
				let t = e.parser.TokenBuilder.buildTokens(e.Grammar, {
					caseInsensitive: e.LanguageMetaData.caseInsensitive,
				})
				this.tokenTypes = this.toTokenTypeDictionary(t)
				let r = hs(t) ? Object.values(t) : t
				this.chevrotainLexer = new he(r, { positionTracking: 'full' })
			}
			get definition() {
				return this.tokenTypes
			}
			tokenize(e) {
				var t
				let r = this.chevrotainLexer.tokenize(e)
				return {
					tokens: r.tokens,
					errors: r.errors,
					hidden: (t = r.groups.hidden) !== null && t !== void 0 ? t : [],
				}
			}
			toTokenTypeDictionary(e) {
				if (hs(e)) return e
				let t = Xs(e) ? Object.values(e.modes).flat() : e,
					r = {}
				return t.forEach((i) => (r[i.name] = i)), r
			}
		}),
		s(ii, 'DefaultLexer'),
		ii)
function Sc(n) {
	return Array.isArray(n) && (n.length === 0 || 'name' in n[0])
}
s(Sc, 'isTokenTypeArray')
function Xs(n) {
	return n && 'modes' in n && 'defaultMode' in n
}
s(Xs, 'isIMultiModeLexerDefinition')
function hs(n) {
	return !Sc(n) && !Xs(n)
}
s(hs, 'isTokenTypeDictionary')
function Cc(n, e, t) {
	let r, i
	typeof n == 'string' ? ((i = e), (r = t)) : ((i = n.range.start), (r = e)),
		i || (i = M.create(0, 0))
	let a = xc(n),
		o = Js(r),
		l = yg({ lines: a, position: i, options: o })
	return Rg({ index: 0, tokens: l, position: i })
}
s(Cc, 'parseJSDoc')
function Ic(n, e) {
	let t = Js(e),
		r = xc(n)
	if (r.length === 0) return !1
	let i = r[0],
		a = r[r.length - 1],
		o = t.start,
		l = t.end
	return !!(o != null && o.exec(i)) && !!(l != null && l.exec(a))
}
s(Ic, 'isJSDoc')
function xc(n) {
	let e = ''
	return typeof n == 'string' ? (e = n) : (e = n.text), e.split(Qh)
}
s(xc, 'getLines')
var ch = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,
	sT = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu
function yg(n) {
	var e, t, r
	let i = [],
		a = n.position.line,
		o = n.position.character
	for (let l = 0; l < n.lines.length; l++) {
		let u = l === 0,
			c = l === n.lines.length - 1,
			d = n.lines[l],
			h = 0
		if (u && n.options.start) {
			let f = (e = n.options.start) === null || e === void 0 ? void 0 : e.exec(d)
			f && (h = f.index + f[0].length)
		} else {
			let f = (t = n.options.line) === null || t === void 0 ? void 0 : t.exec(d)
			f && (h = f.index + f[0].length)
		}
		if (c) {
			let f = (r = n.options.end) === null || r === void 0 ? void 0 : r.exec(d)
			f && (d = d.substring(0, f.index))
		}
		if (((d = d.substring(0, vg(d))), fs(d, h) >= d.length)) {
			if (i.length > 0) {
				let f = M.create(a, o)
				i.push({ type: 'break', content: '', range: _.create(f, f) })
			}
		} else {
			ch.lastIndex = h
			let f = ch.exec(d)
			if (f) {
				let p = f[0],
					g = f[1],
					y = M.create(a, o + h),
					k = M.create(a, o + h + p.length)
				i.push({ type: 'tag', content: g, range: _.create(y, k) }), (h += p.length), (h = fs(d, h))
			}
			if (h < d.length) {
				let p = d.substring(h),
					g = Array.from(p.matchAll(sT))
				i.push(...Tg(g, p, a, o + h))
			}
		}
		a++, (o = 0)
	}
	return i.length > 0 && i[i.length - 1].type === 'break' ? i.slice(0, -1) : i
}
s(yg, 'tokenize')
function Tg(n, e, t, r) {
	let i = []
	if (n.length === 0) {
		let a = M.create(t, r),
			o = M.create(t, r + e.length)
		i.push({ type: 'text', content: e, range: _.create(a, o) })
	} else {
		let a = 0
		for (let l of n) {
			let u = l.index,
				c = e.substring(a, u)
			c.length > 0 &&
				i.push({
					type: 'text',
					content: e.substring(a, u),
					range: _.create(M.create(t, a + r), M.create(t, u + r)),
				})
			let d = c.length + 1,
				h = l[1]
			if (
				(i.push({
					type: 'inline-tag',
					content: h,
					range: _.create(M.create(t, a + d + r), M.create(t, a + d + h.length + r)),
				}),
				(d += h.length),
				l.length === 4)
			) {
				d += l[2].length
				let f = l[3]
				i.push({
					type: 'text',
					content: f,
					range: _.create(M.create(t, a + d + r), M.create(t, a + d + f.length + r)),
				})
			} else
				i.push({
					type: 'text',
					content: '',
					range: _.create(M.create(t, a + d + r), M.create(t, a + d + r)),
				})
			a = u + l[0].length
		}
		let o = e.substring(a)
		o.length > 0 &&
			i.push({
				type: 'text',
				content: o,
				range: _.create(M.create(t, a + r), M.create(t, a + r + o.length)),
			})
	}
	return i
}
s(Tg, 'buildInlineTokens')
var oT = /\S/,
	lT = /\s*$/
function fs(n, e) {
	let t = n.substring(e).match(oT)
	return t ? e + t.index : n.length
}
s(fs, 'skipWhitespace')
function vg(n) {
	let e = n.match(lT)
	if (e && typeof e.index == 'number') return e.index
}
s(vg, 'lastCharacter')
function Rg(n) {
	var e, t, r, i
	let a = M.create(n.position.line, n.position.character)
	if (n.tokens.length === 0) return new dh([], _.create(a, a))
	let o = []
	for (; n.index < n.tokens.length; ) {
		let c = Ag(n, o[o.length - 1])
		c && o.push(c)
	}
	let l =
			(t = (e = o[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0
				? t
				: a,
		u =
			(i = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null &&
			i !== void 0
				? i
				: a
	return new dh(o, _.create(l, u))
}
s(Rg, 'parseJSDocComment')
function Ag(n, e) {
	let t = n.tokens[n.index]
	if (t.type === 'tag') return $c(n, !1)
	if (t.type === 'text' || t.type === 'inline-tag') return Nc(n)
	Eg(t, e), n.index++
}
s(Ag, 'parseJSDocElement')
function Eg(n, e) {
	if (e) {
		let t = new Ig('', n.range)
		'inlines' in e ? e.inlines.push(t) : e.content.inlines.push(t)
	}
}
s(Eg, 'appendEmptyLine')
function Nc(n) {
	let e = n.tokens[n.index],
		t = e,
		r = e,
		i = []
	for (; e && e.type !== 'break' && e.type !== 'tag'; )
		i.push(kg(n)), (r = e), (e = n.tokens[n.index])
	return new Do(i, _.create(t.range.start, r.range.end))
}
s(Nc, 'parseJSDocText')
function kg(n) {
	return n.tokens[n.index].type === 'inline-tag' ? $c(n, !0) : Lc(n)
}
s(kg, 'parseJSDocInline')
function $c(n, e) {
	let t = n.tokens[n.index++],
		r = t.content.substring(1),
		i = n.tokens[n.index]
	if ((i == null ? void 0 : i.type) === 'text')
		if (e) {
			let a = Lc(n)
			return new eo(r, new Do([a], a.range), e, _.create(t.range.start, a.range.end))
		} else {
			let a = Nc(n)
			return new eo(r, a, e, _.create(t.range.start, a.range.end))
		}
	else {
		let a = t.range
		return new eo(r, new Do([], a), e, a)
	}
}
s($c, 'parseJSDocTag')
function Lc(n) {
	let e = n.tokens[n.index++]
	return new Ig(e.content, e.range)
}
s(Lc, 'parseJSDocLine')
function Js(n) {
	if (!n) return Js({ start: '/**', end: '*/', line: '*' })
	let { start: e, end: t, line: r } = n
	return { start: Oa(e, !0), end: Oa(t, !1), line: Oa(r, !0) }
}
s(Js, 'normalizeOptions')
function Oa(n, e) {
	if (typeof n == 'string' || typeof n == 'object') {
		let t = typeof n == 'string' ? xi(n) : n.source
		return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`)
	} else return n
}
s(Oa, 'normalizeOption')
var ai,
	dh =
		((ai = class {
			constructor(e, t) {
				;(this.elements = e), (this.range = t)
			}
			getTag(e) {
				return this.getAllTags().find((t) => t.name === e)
			}
			getTags(e) {
				return this.getAllTags().filter((t) => t.name === e)
			}
			getAllTags() {
				return this.elements.filter((e) => 'name' in e)
			}
			toString() {
				let e = ''
				for (let t of this.elements)
					if (e.length === 0) e = t.toString()
					else {
						let r = t.toString()
						e += Mo(e) + r
					}
				return e.trim()
			}
			toMarkdown(e) {
				let t = ''
				for (let r of this.elements)
					if (t.length === 0) t = r.toMarkdown(e)
					else {
						let i = r.toMarkdown(e)
						t += Mo(t) + i
					}
				return t.trim()
			}
		}),
		s(ai, 'JSDocCommentImpl'),
		ai),
	si,
	eo =
		((si = class {
			constructor(e, t, r, i) {
				;(this.name = e), (this.content = t), (this.inline = r), (this.range = i)
			}
			toString() {
				let e = `@${this.name}`,
					t = this.content.toString()
				return (
					this.content.inlines.length === 1
						? (e = `${e} ${t}`)
						: this.content.inlines.length > 1 &&
						  (e = `${e}
${t}`),
					this.inline ? `{${e}}` : e
				)
			}
			toMarkdown(e) {
				var t, r
				return (r =
					(t = e == null ? void 0 : e.renderTag) === null || t === void 0
						? void 0
						: t.call(e, this)) !== null && r !== void 0
					? r
					: this.toMarkdownDefault(e)
			}
			toMarkdownDefault(e) {
				let t = this.content.toMarkdown(e)
				if (this.inline) {
					let a = Sg(this.name, t, e ?? {})
					if (typeof a == 'string') return a
				}
				let r = ''
				;(e == null ? void 0 : e.tag) === 'italic' || (e == null ? void 0 : e.tag) === void 0
					? (r = '*')
					: (e == null ? void 0 : e.tag) === 'bold'
					? (r = '**')
					: (e == null ? void 0 : e.tag) === 'bold-italic' && (r = '***')
				let i = `${r}@${this.name}${r}`
				return (
					this.content.inlines.length === 1
						? (i = `${i} — ${t}`)
						: this.content.inlines.length > 1 &&
						  (i = `${i}
${t}`),
					this.inline ? `{${i}}` : i
				)
			}
		}),
		s(si, 'JSDocTagImpl'),
		si)
function Sg(n, e, t) {
	var r, i
	if (n === 'linkplain' || n === 'linkcode' || n === 'link') {
		let a = e.indexOf(' '),
			o = e
		if (a > 0) {
			let l = fs(e, a)
			;(o = e.substring(l)), (e = e.substring(0, a))
		}
		return (
			(n === 'linkcode' || (n === 'link' && t.link === 'code')) && (o = `\`${o}\``),
			(i = (r = t.renderLink) === null || r === void 0 ? void 0 : r.call(t, e, o)) !== null &&
			i !== void 0
				? i
				: Cg(e, o)
		)
	}
}
s(Sg, 'renderInlineTag')
function Cg(n, e) {
	try {
		return vt.parse(n, !0), `[${e}](${n})`
	} catch {
		return n
	}
}
s(Cg, 'renderLinkDefault')
var oi,
	Do =
		((oi = class {
			constructor(e, t) {
				;(this.inlines = e), (this.range = t)
			}
			toString() {
				let e = ''
				for (let t = 0; t < this.inlines.length; t++) {
					let r = this.inlines[t],
						i = this.inlines[t + 1]
					;(e += r.toString()),
						i &&
							i.range.start.line > r.range.start.line &&
							(e += `
`)
				}
				return e
			}
			toMarkdown(e) {
				let t = ''
				for (let r = 0; r < this.inlines.length; r++) {
					let i = this.inlines[r],
						a = this.inlines[r + 1]
					;(t += i.toMarkdown(e)),
						a &&
							a.range.start.line > i.range.start.line &&
							(t += `
`)
				}
				return t
			}
		}),
		s(oi, 'JSDocTextImpl'),
		oi),
	li,
	Ig =
		((li = class {
			constructor(e, t) {
				;(this.text = e), (this.range = t)
			}
			toString() {
				return this.text
			}
			toMarkdown() {
				return this.text
			}
		}),
		s(li, 'JSDocLineImpl'),
		li)
function Mo(n) {
	return n.endsWith(`
`)
		? `
`
		: `

`
}
s(Mo, 'fillNewlines')
var ui,
	xg =
		((ui = class {
			constructor(e) {
				;(this.indexManager = e.shared.workspace.IndexManager),
					(this.commentProvider = e.documentation.CommentProvider)
			}
			getDocumentation(e) {
				let t = this.commentProvider.getComment(e)
				if (t && Ic(t))
					return Cc(t).toMarkdown({
						renderLink: s((r, i) => this.documentationLinkRenderer(e, r, i), 'renderLink'),
						renderTag: s((r) => this.documentationTagRenderer(e, r), 'renderTag'),
					})
			}
			documentationLinkRenderer(e, t, r) {
				var i
				let a =
					(i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0
						? i
						: this.findNameInGlobalScope(e, t)
				if (a && a.nameSegment) {
					let o = a.nameSegment.range.start.line + 1,
						l = a.nameSegment.range.start.character + 1,
						u = a.documentUri.with({ fragment: `L${o},${l}` })
					return `[${r}](${u.toString()})`
				} else return
			}
			documentationTagRenderer(e, t) {}
			findNameInPrecomputedScopes(e, t) {
				let r = Ce(e).precomputedScopes
				if (!r) return
				let i = e
				do {
					let a = r.get(i).find((o) => o.name === t)
					if (a) return a
					i = i.$container
				} while (i)
			}
			findNameInGlobalScope(e, t) {
				return this.indexManager.allElements().find((r) => r.name === t)
			}
		}),
		s(ui, 'JSDocDocumentationProvider'),
		ui),
	ci,
	Ng =
		((ci = class {
			constructor(e) {
				this.grammarConfig = () => e.parser.GrammarConfig
			}
			getComment(e) {
				var t
				return Ec(e)
					? e.$comment
					: (t = Xo(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null ||
					  t === void 0
					? void 0
					: t.text
			}
		}),
		s(ci, 'DefaultCommentProvider'),
		ci),
	bc = {}
ps(bc, Th(Ah()))
var di,
	$g =
		((di = class {
			constructor(e) {
				this.syncParser = e.parser.LangiumParser
			}
			parse(e) {
				return Promise.resolve(this.syncParser.parse(e))
			}
		}),
		s(di, 'DefaultAsyncParser'),
		di),
	hi,
	uT =
		((hi = class {
			constructor(e) {
				;(this.threadCount = 8),
					(this.terminationDelay = 200),
					(this.workerPool = []),
					(this.queue = []),
					(this.hydrator = e.serializer.Hydrator)
			}
			initializeWorkers() {
				for (; this.workerPool.length < this.threadCount; ) {
					let e = this.createWorker()
					e.onReady(() => {
						if (this.queue.length > 0) {
							let t = this.queue.shift()
							t && (e.lock(), t.resolve(e))
						}
					}),
						this.workerPool.push(e)
				}
			}
			async parse(e, t) {
				let r = await this.acquireParserWorker(t),
					i = new ot(),
					a,
					o = t.onCancellationRequested(() => {
						a = setTimeout(() => {
							this.terminateWorker(r)
						}, this.terminationDelay)
					})
				return (
					r
						.parse(e)
						.then((l) => {
							let u = this.hydrator.hydrate(l)
							i.resolve(u)
						})
						.catch((l) => {
							i.reject(l)
						})
						.finally(() => {
							o.dispose(), clearTimeout(a)
						}),
					i.promise
				)
			}
			terminateWorker(e) {
				e.terminate()
				let t = this.workerPool.indexOf(e)
				t >= 0 && this.workerPool.splice(t, 1)
			}
			async acquireParserWorker(e) {
				this.initializeWorkers()
				for (let r of this.workerPool) if (r.ready) return r.lock(), r
				let t = new ot()
				return (
					e.onCancellationRequested(() => {
						let r = this.queue.indexOf(t)
						r >= 0 && this.queue.splice(r, 1), t.reject(Tt)
					}),
					this.queue.push(t),
					t.promise
				)
			}
		}),
		s(hi, 'AbstractThreadedAsyncParser'),
		hi),
	fi,
	cT =
		((fi = class {
			get ready() {
				return this._ready
			}
			get onReady() {
				return this.onReadyEmitter.event
			}
			constructor(e, t, r, i) {
				;(this.onReadyEmitter = new bc.Emitter()),
					(this.deferred = new ot()),
					(this._ready = !0),
					(this._parsing = !1),
					(this.sendMessage = e),
					(this._terminate = i),
					t((a) => {
						let o = a
						this.deferred.resolve(o), this.unlock()
					}),
					r((a) => {
						this.deferred.reject(a), this.unlock()
					})
			}
			terminate() {
				this.deferred.reject(Tt), this._terminate()
			}
			lock() {
				this._ready = !1
			}
			unlock() {
				;(this._parsing = !1), (this._ready = !0), this.onReadyEmitter.fire()
			}
			parse(e) {
				if (this._parsing) throw new Error('Parser worker is busy')
				return (
					(this._parsing = !0),
					(this.deferred = new ot()),
					this.sendMessage(e),
					this.deferred.promise
				)
			}
		}),
		s(fi, 'ParserWorker'),
		fi),
	pi,
	Lg =
		((pi = class {
			constructor() {
				;(this.previousTokenSource = new W.CancellationTokenSource()),
					(this.writeQueue = []),
					(this.readQueue = []),
					(this.done = !0)
			}
			write(e) {
				this.cancelWrite()
				let t = new W.CancellationTokenSource()
				return (this.previousTokenSource = t), this.enqueue(this.writeQueue, e, t.token)
			}
			read(e) {
				return this.enqueue(this.readQueue, e)
			}
			enqueue(e, t, r) {
				let i = new ot(),
					a = { action: t, deferred: i, cancellationToken: r ?? W.CancellationToken.None }
				return e.push(a), this.performNextOperation(), i.promise
			}
			async performNextOperation() {
				if (!this.done) return
				let e = []
				if (this.writeQueue.length > 0) e.push(this.writeQueue.shift())
				else if (this.readQueue.length > 0)
					e.push(...this.readQueue.splice(0, this.readQueue.length))
				else return
				;(this.done = !1),
					await Promise.all(
						e.map(async ({ action: t, deferred: r, cancellationToken: i }) => {
							try {
								let a = await Promise.resolve().then(() => t(i))
								r.resolve(a)
							} catch (a) {
								Oi(a) ? r.resolve(void 0) : r.reject(a)
							}
						})
					),
					(this.done = !0),
					this.performNextOperation()
			}
			cancelWrite() {
				this.previousTokenSource.cancel()
			}
		}),
		s(pi, 'DefaultWorkspaceLock'),
		pi),
	mi,
	bg =
		((mi = class {
			constructor(e) {
				;(this.grammarElementIdMap = new cs()),
					(this.tokenTypeIdMap = new cs()),
					(this.grammar = e.Grammar),
					(this.lexer = e.parser.Lexer),
					(this.linker = e.references.Linker)
			}
			dehydrate(e) {
				return {
					lexerErrors: e.lexerErrors.map((t) => Object.assign({}, t)),
					parserErrors: e.parserErrors.map((t) => Object.assign({}, t)),
					value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value)),
				}
			}
			createDehyrationContext(e) {
				let t = new Map(),
					r = new Map()
				for (let i of Ze(e)) t.set(i, {})
				if (e.$cstNode) for (let i of Ri(e.$cstNode)) r.set(i, {})
				return { astNodes: t, cstNodes: r }
			}
			dehydrateAstNode(e, t) {
				let r = t.astNodes.get(e)
				;(r.$type = e.$type),
					(r.$containerIndex = e.$containerIndex),
					(r.$containerProperty = e.$containerProperty),
					e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, t))
				for (let [i, a] of Object.entries(e))
					if (!i.startsWith('$'))
						if (Array.isArray(a)) {
							let o = []
							r[i] = o
							for (let l of a)
								Y(l)
									? o.push(this.dehydrateAstNode(l, t))
									: de(l)
									? o.push(this.dehydrateReference(l, t))
									: o.push(l)
						} else
							Y(a)
								? (r[i] = this.dehydrateAstNode(a, t))
								: de(a)
								? (r[i] = this.dehydrateReference(a, t))
								: a !== void 0 && (r[i] = a)
				return r
			}
			dehydrateReference(e, t) {
				let r = {}
				return (r.$refText = e.$refText), e.$refNode && (r.$refNode = t.cstNodes.get(e.$refNode)), r
			}
			dehydrateCstNode(e, t) {
				let r = t.cstNodes.get(e)
				return (
					Ts(e)
						? (r.fullText = e.fullText)
						: (r.grammarSource = this.getGrammarElementId(e.grammarSource)),
					(r.hidden = e.hidden),
					(r.astNode = t.astNodes.get(e.astNode)),
					He(e)
						? (r.content = e.content.map((i) => this.dehydrateCstNode(i, t)))
						: Xt(e) &&
						  ((r.tokenType = e.tokenType.name),
						  (r.offset = e.offset),
						  (r.length = e.length),
						  (r.startLine = e.range.start.line),
						  (r.startColumn = e.range.start.character),
						  (r.endLine = e.range.end.line),
						  (r.endColumn = e.range.end.character)),
					r
				)
			}
			hydrate(e) {
				let t = e.value,
					r = this.createHydrationContext(t)
				return (
					'$cstNode' in t && this.hydrateCstNode(t.$cstNode, r),
					{
						lexerErrors: e.lexerErrors,
						parserErrors: e.parserErrors,
						value: this.hydrateAstNode(t, r),
					}
				)
			}
			createHydrationContext(e) {
				let t = new Map(),
					r = new Map()
				for (let a of Ze(e)) t.set(a, {})
				let i
				if (e.$cstNode)
					for (let a of Ri(e.$cstNode)) {
						let o
						'fullText' in a
							? ((o = new rc(a.fullText)), (i = o))
							: 'content' in a
							? (o = new Hs())
							: 'tokenType' in a && (o = this.hydrateCstLeafNode(a)),
							o && (r.set(a, o), (o.root = i))
					}
				return { astNodes: t, cstNodes: r }
			}
			hydrateAstNode(e, t) {
				let r = t.astNodes.get(e)
				;(r.$type = e.$type),
					(r.$containerIndex = e.$containerIndex),
					(r.$containerProperty = e.$containerProperty),
					e.$cstNode && (r.$cstNode = t.cstNodes.get(e.$cstNode))
				for (let [i, a] of Object.entries(e))
					if (!i.startsWith('$'))
						if (Array.isArray(a)) {
							let o = []
							r[i] = o
							for (let l of a)
								Y(l)
									? o.push(this.setParent(this.hydrateAstNode(l, t), r))
									: de(l)
									? o.push(this.hydrateReference(l, r, i, t))
									: o.push(l)
						} else
							Y(a)
								? (r[i] = this.setParent(this.hydrateAstNode(a, t), r))
								: de(a)
								? (r[i] = this.hydrateReference(a, r, i, t))
								: a !== void 0 && (r[i] = a)
				return r
			}
			setParent(e, t) {
				return (e.$container = t), e
			}
			hydrateReference(e, t, r, i) {
				return this.linker.buildReference(t, r, i.cstNodes.get(e.$refNode), e.$refText)
			}
			hydrateCstNode(e, t, r = 0) {
				let i = t.cstNodes.get(e)
				if (
					(typeof e.grammarSource == 'number' &&
						(i.grammarSource = this.getGrammarElement(e.grammarSource)),
					(i.astNode = t.astNodes.get(e.astNode)),
					He(i))
				)
					for (let a of e.content) {
						let o = this.hydrateCstNode(a, t, r++)
						i.content.push(o)
					}
				return i
			}
			hydrateCstLeafNode(e) {
				let t = this.getTokenType(e.tokenType),
					r = e.offset,
					i = e.length,
					a = e.startLine,
					o = e.startColumn,
					l = e.endLine,
					u = e.endColumn,
					c = e.hidden
				return new as(
					r,
					i,
					{ start: { line: a, character: o }, end: { line: l, character: u } },
					t,
					c
				)
			}
			getTokenType(e) {
				return this.lexer.definition[e]
			}
			getGrammarElementId(e) {
				return (
					this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(),
					this.grammarElementIdMap.get(e)
				)
			}
			getGrammarElement(e) {
				this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap()
				let t = this.grammarElementIdMap.getKey(e)
				if (t) return t
				throw new Error('Invalid grammar element id: ' + e)
			}
			createGrammarElementIdMap() {
				let e = 0
				for (let t of Ze(this.grammar)) Es(t) && this.grammarElementIdMap.set(t, e++)
			}
		}),
		s(mi, 'DefaultHydrator'),
		mi)
function Et(n) {
	return {
		documentation: {
			CommentProvider: s((e) => new Ng(e), 'CommentProvider'),
			DocumentationProvider: s((e) => new xg(e), 'DocumentationProvider'),
		},
		parser: {
			AsyncParser: s((e) => new $g(e), 'AsyncParser'),
			GrammarConfig: s((e) => Iu(e), 'GrammarConfig'),
			LangiumParser: s((e) => dc(e), 'LangiumParser'),
			CompletionParser: s((e) => cc(e), 'CompletionParser'),
			ValueConverter: s(() => new pc(), 'ValueConverter'),
			TokenBuilder: s(() => new fc(), 'TokenBuilder'),
			Lexer: s((e) => new gg(e), 'Lexer'),
			ParserErrorMessageProvider: s(() => new ac(), 'ParserErrorMessageProvider'),
		},
		workspace: {
			AstNodeLocator: s(() => new dg(), 'AstNodeLocator'),
			AstNodeDescriptionProvider: s((e) => new ug(e), 'AstNodeDescriptionProvider'),
			ReferenceDescriptionProvider: s((e) => new cg(e), 'ReferenceDescriptionProvider'),
		},
		references: {
			Linker: s((e) => new Qm(e), 'Linker'),
			NameProvider: s(() => new Zm(), 'NameProvider'),
			ScopeProvider: s((e) => new ig(e), 'ScopeProvider'),
			ScopeComputation: s((e) => new tg(e), 'ScopeComputation'),
			References: s((e) => new eg(e), 'References'),
		},
		serializer: {
			Hydrator: s((e) => new bg(e), 'Hydrator'),
			JsonSerializer: s((e) => new ag(e), 'JsonSerializer'),
		},
		validation: {
			DocumentValidator: s((e) => new lg(e), 'DocumentValidator'),
			ValidationRegistry: s((e) => new og(e), 'ValidationRegistry'),
		},
		shared: s(() => n.shared, 'shared'),
	}
}
s(Et, 'createDefaultCoreModule')
function kt(n) {
	return {
		ServiceRegistry: s(() => new sg(), 'ServiceRegistry'),
		workspace: {
			LangiumDocuments: s((e) => new Jm(e), 'LangiumDocuments'),
			LangiumDocumentFactory: s((e) => new Xm(e), 'LangiumDocumentFactory'),
			DocumentBuilder: s((e) => new fg(e), 'DocumentBuilder'),
			IndexManager: s((e) => new pg(e), 'IndexManager'),
			WorkspaceManager: s((e) => new mg(e), 'WorkspaceManager'),
			FileSystemProvider: s((e) => n.fileSystemProvider(e), 'FileSystemProvider'),
			WorkspaceLock: s(() => new Lg(), 'WorkspaceLock'),
			ConfigurationProvider: s((e) => new hg(e), 'ConfigurationProvider'),
		},
	}
}
s(kt, 'createDefaultSharedCoreModule')
var Fo
;(function (n) {
	n.merge = (e, t) => la(la({}, e), t)
})(Fo || (Fo = {}))
function ge(n, e, t, r, i, a, o, l, u) {
	let c = [n, e, t, r, i, a, o, l, u].reduce(la, {})
	return Pc(c)
}
s(ge, 'inject')
var Uo = Symbol('isProxy')
function wc(n) {
	if (n && n[Uo]) for (let e of Object.values(n)) wc(e)
	return n
}
s(wc, 'eagerLoad')
function Pc(n, e) {
	let t = new Proxy(
		{},
		{
			deleteProperty: s(() => !1, 'deleteProperty'),
			get: s((r, i) => Go(r, i, n, e || t), 'get'),
			getOwnPropertyDescriptor: s(
				(r, i) => (Go(r, i, n, e || t), Object.getOwnPropertyDescriptor(r, i)),
				'getOwnPropertyDescriptor'
			),
			has: s((r, i) => i in n, 'has'),
			ownKeys: s(() => [...Reflect.ownKeys(n), Uo], 'ownKeys'),
		}
	)
	return (t[Uo] = !0), t
}
s(Pc, '_inject')
var hh = Symbol()
function Go(n, e, t, r) {
	if (e in n) {
		if (n[e] instanceof Error)
			throw new Error(
				'Construction failure. Please make sure that your dependencies are constructable.',
				{ cause: n[e] }
			)
		if (n[e] === hh)
			throw new Error(
				'Cycle detected. Please make "' +
					String(e) +
					'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies'
			)
		return n[e]
	} else if (e in t) {
		let i = t[e]
		n[e] = hh
		try {
			n[e] = typeof i == 'function' ? i(r) : Pc(i, r)
		} catch (a) {
			throw ((n[e] = a instanceof Error ? a : void 0), a)
		}
		return n[e]
	} else return
}
s(Go, '_resolve')
function la(n, e) {
	if (e) {
		for (let [t, r] of Object.entries(e))
			if (r !== void 0) {
				let i = n[t]
				i !== null && r !== null && typeof i == 'object' && typeof r == 'object'
					? (n[t] = la(i, r))
					: (n[t] = r)
			}
	}
	return n
}
s(la, '_merge')
var Oc = {}
qt(Oc, {
	AstUtils: () => ru,
	BiMap: () => cs,
	Cancellation: () => W,
	ContextCache: () => Ys,
	CstUtils: () => jo,
	DONE_RESULT: () => ce,
	Deferred: () => ot,
	Disposable: () => Ci,
	DisposableCache: () => qs,
	DocumentCache: () => rg,
	EMPTY_STREAM: () => vs,
	ErrorWithLocation: () => As,
	GrammarUtils: () => el,
	MultiMap: () => Ra,
	OperationCancelled: () => Tt,
	Reduction: () => Qi,
	RegExpUtils: () => ou,
	SimpleCache: () => Rc,
	StreamImpl: () => Ke,
	TreeStreamImpl: () => vi,
	URI: () => vt,
	UriUtils: () => ze,
	WorkspaceCache: () => Ac,
	assertUnreachable: () => Jt,
	delayNextTick: () => zs,
	interruptAndCheck: () => fe,
	isOperationCancelled: () => Oi,
	loadGrammarFromJson: () => St,
	setInterruptionPeriod: () => gc,
	startCancelableOperation: () => mc,
	stream: () => q,
})
ps(Oc, bc)
var gi,
	wg =
		((gi = class {
			readFile() {
				throw new Error('No file system is available.')
			}
			async readDirectory() {
				return []
			}
		}),
		s(gi, 'EmptyFileSystemProvider'),
		gi),
	tn = { fileSystemProvider: s(() => new wg(), 'fileSystemProvider') },
	dT = {
		Grammar: s(() => {}, 'Grammar'),
		LanguageMetaData: s(
			() => ({ caseInsensitive: !1, fileExtensions: ['.langium'], languageId: 'langium' }),
			'LanguageMetaData'
		),
	},
	hT = { AstReflection: s(() => new nu(), 'AstReflection') }
function Pg() {
	let n = ge(kt(tn), hT),
		e = ge(Et({ shared: n }), dT)
	return n.ServiceRegistry.register(e), e
}
s(Pg, 'createMinimalGrammarServices')
function St(n) {
	var e
	let t = Pg(),
		r = t.serializer.JsonSerializer.deserialize(n)
	return (
		t.shared.workspace.LangiumDocumentFactory.fromModel(
			r,
			vt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : 'grammar'}.langium`)
		),
		r
	)
}
s(St, 'loadGrammarFromJson')
ps(Eh, Oc)
var fT = Object.defineProperty,
	x = s((n, e) => fT(n, 'name', { value: e, configurable: !0 }), '__name'),
	pT = 'Statement',
	mT = 'Architecture'
function Og(n) {
	return Ge.isInstance(n, mT)
}
s(Og, 'isArchitecture')
x(Og, 'isArchitecture')
var _g = 'Branch'
function Dg(n) {
	return Ge.isInstance(n, _g)
}
s(Dg, 'isBranch')
x(Dg, 'isBranch')
var gT = 'Checkout',
	yT = 'CherryPicking',
	Mg = 'Commit'
function Fg(n) {
	return Ge.isInstance(n, Mg)
}
s(Fg, 'isCommit')
x(Fg, 'isCommit')
var TT = 'Common'
function Ug(n) {
	return Ge.isInstance(n, TT)
}
s(Ug, 'isCommon')
x(Ug, 'isCommon')
var Gg = 'GitGraph'
function Bg(n) {
	return Ge.isInstance(n, Gg)
}
s(Bg, 'isGitGraph')
x(Bg, 'isGitGraph')
var vT = 'Info'
function Vg(n) {
	return Ge.isInstance(n, vT)
}
s(Vg, 'isInfo')
x(Vg, 'isInfo')
var jg = 'Merge'
function Kg(n) {
	return Ge.isInstance(n, jg)
}
s(Kg, 'isMerge')
x(Kg, 'isMerge')
var RT = 'Packet'
function Wg(n) {
	return Ge.isInstance(n, RT)
}
s(Wg, 'isPacket')
x(Wg, 'isPacket')
var AT = 'PacketBlock'
function Hg(n) {
	return Ge.isInstance(n, AT)
}
s(Hg, 'isPacketBlock')
x(Hg, 'isPacketBlock')
var ET = 'Pie'
function zg(n) {
	return Ge.isInstance(n, ET)
}
s(zg, 'isPie')
x(zg, 'isPie')
var kT = 'PieSection'
function qg(n) {
	return Ge.isInstance(n, kT)
}
s(qg, 'isPieSection')
x(qg, 'isPieSection')
var ST = 'Direction',
	Pt,
	Yg =
		((Pt = class extends Wo {
			getAllTypes() {
				return [
					'Architecture',
					'Branch',
					'Checkout',
					'CherryPicking',
					'Commit',
					'Common',
					'Direction',
					'Edge',
					'GitGraph',
					'Group',
					'Info',
					'Junction',
					'Merge',
					'Packet',
					'PacketBlock',
					'Pie',
					'PieSection',
					'Service',
					'Statement',
				]
			}
			computeIsSubtype(e, t) {
				switch (e) {
					case _g:
					case gT:
					case yT:
					case Mg:
					case jg:
						return this.isSubtype(pT, t)
					case ST:
						return this.isSubtype(Gg, t)
					default:
						return !1
				}
			}
			getReferenceType(e) {
				let t = `${e.container.$type}:${e.property}`
				switch (t) {
					default:
						throw new Error(`${t} is not a valid reference id.`)
				}
			}
			getTypeMetaData(e) {
				switch (e) {
					case 'Architecture':
						return {
							name: 'Architecture',
							properties: [
								{ name: 'accDescr' },
								{ name: 'accTitle' },
								{ name: 'edges', defaultValue: [] },
								{ name: 'groups', defaultValue: [] },
								{ name: 'junctions', defaultValue: [] },
								{ name: 'services', defaultValue: [] },
								{ name: 'title' },
							],
						}
					case 'Branch':
						return { name: 'Branch', properties: [{ name: 'name' }, { name: 'order' }] }
					case 'Checkout':
						return { name: 'Checkout', properties: [{ name: 'branch' }] }
					case 'CherryPicking':
						return {
							name: 'CherryPicking',
							properties: [{ name: 'id' }, { name: 'parent' }, { name: 'tags', defaultValue: [] }],
						}
					case 'Commit':
						return {
							name: 'Commit',
							properties: [
								{ name: 'id' },
								{ name: 'message' },
								{ name: 'tags', defaultValue: [] },
								{ name: 'type' },
							],
						}
					case 'Common':
						return {
							name: 'Common',
							properties: [{ name: 'accDescr' }, { name: 'accTitle' }, { name: 'title' }],
						}
					case 'Edge':
						return {
							name: 'Edge',
							properties: [
								{ name: 'lhsDir' },
								{ name: 'lhsGroup', defaultValue: !1 },
								{ name: 'lhsId' },
								{ name: 'lhsInto', defaultValue: !1 },
								{ name: 'rhsDir' },
								{ name: 'rhsGroup', defaultValue: !1 },
								{ name: 'rhsId' },
								{ name: 'rhsInto', defaultValue: !1 },
								{ name: 'title' },
							],
						}
					case 'GitGraph':
						return {
							name: 'GitGraph',
							properties: [
								{ name: 'accDescr' },
								{ name: 'accTitle' },
								{ name: 'statements', defaultValue: [] },
								{ name: 'title' },
							],
						}
					case 'Group':
						return {
							name: 'Group',
							properties: [{ name: 'icon' }, { name: 'id' }, { name: 'in' }, { name: 'title' }],
						}
					case 'Info':
						return {
							name: 'Info',
							properties: [{ name: 'accDescr' }, { name: 'accTitle' }, { name: 'title' }],
						}
					case 'Junction':
						return { name: 'Junction', properties: [{ name: 'id' }, { name: 'in' }] }
					case 'Merge':
						return {
							name: 'Merge',
							properties: [
								{ name: 'branch' },
								{ name: 'id' },
								{ name: 'tags', defaultValue: [] },
								{ name: 'type' },
							],
						}
					case 'Packet':
						return {
							name: 'Packet',
							properties: [
								{ name: 'accDescr' },
								{ name: 'accTitle' },
								{ name: 'blocks', defaultValue: [] },
								{ name: 'title' },
							],
						}
					case 'PacketBlock':
						return {
							name: 'PacketBlock',
							properties: [{ name: 'end' }, { name: 'label' }, { name: 'start' }],
						}
					case 'Pie':
						return {
							name: 'Pie',
							properties: [
								{ name: 'accDescr' },
								{ name: 'accTitle' },
								{ name: 'sections', defaultValue: [] },
								{ name: 'showData', defaultValue: !1 },
								{ name: 'title' },
							],
						}
					case 'PieSection':
						return { name: 'PieSection', properties: [{ name: 'label' }, { name: 'value' }] }
					case 'Service':
						return {
							name: 'Service',
							properties: [
								{ name: 'icon' },
								{ name: 'iconText' },
								{ name: 'id' },
								{ name: 'in' },
								{ name: 'title' },
							],
						}
					case 'Direction':
						return {
							name: 'Direction',
							properties: [
								{ name: 'accDescr' },
								{ name: 'accTitle' },
								{ name: 'dir' },
								{ name: 'statements', defaultValue: [] },
								{ name: 'title' },
							],
						}
					default:
						return { name: e, properties: [] }
				}
			}
		}),
		s(Pt, 'MermaidAstReflection'),
		x(Pt, 'MermaidAstReflection'),
		Pt),
	Ge = new Yg(),
	fh,
	CT = x(
		() =>
			fh ??
			(fh = St(
				'{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","name":"Info","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}'
			)),
		'InfoGrammar'
	),
	ph,
	IT = x(
		() =>
			ph ??
			(ph = St(
				`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","name":"Packet","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`
			)),
		'PacketGrammar'
	),
	mh,
	xT = x(
		() =>
			mh ??
			(mh = St(
				'{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","name":"Pie","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}'
			)),
		'PieGrammar'
	),
	gh,
	NT = x(
		() =>
			gh ??
			(gh = St(
				'{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","name":"Architecture","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","fragment":true,"definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"LeftPort","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RightPort","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Arrow","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}'
			)),
		'ArchitectureGrammar'
	),
	yh,
	$T = x(
		() =>
			yh ??
			(yh = St(
				`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","name":"TitleAndAccessibilities","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EOL","fragment":true,"dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","name":"GitGraph","entry":true,"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`
			)),
		'GitGraphGrammar'
	),
	LT = { languageId: 'info', fileExtensions: ['.mmd', '.mermaid'], caseInsensitive: !1 },
	bT = { languageId: 'packet', fileExtensions: ['.mmd', '.mermaid'], caseInsensitive: !1 },
	wT = { languageId: 'pie', fileExtensions: ['.mmd', '.mermaid'], caseInsensitive: !1 },
	PT = { languageId: 'architecture', fileExtensions: ['.mmd', '.mermaid'], caseInsensitive: !1 },
	OT = { languageId: 'gitGraph', fileExtensions: ['.mmd', '.mermaid'], caseInsensitive: !1 },
	Aa = { AstReflection: x(() => new Yg(), 'AstReflection') },
	_T = {
		Grammar: x(() => CT(), 'Grammar'),
		LanguageMetaData: x(() => LT, 'LanguageMetaData'),
		parser: {},
	},
	DT = {
		Grammar: x(() => IT(), 'Grammar'),
		LanguageMetaData: x(() => bT, 'LanguageMetaData'),
		parser: {},
	},
	MT = {
		Grammar: x(() => xT(), 'Grammar'),
		LanguageMetaData: x(() => wT, 'LanguageMetaData'),
		parser: {},
	},
	FT = {
		Grammar: x(() => NT(), 'Grammar'),
		LanguageMetaData: x(() => PT, 'LanguageMetaData'),
		parser: {},
	},
	UT = {
		Grammar: x(() => $T(), 'Grammar'),
		LanguageMetaData: x(() => OT, 'LanguageMetaData'),
		parser: {},
	},
	GT = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
	BT = /accTitle[\t ]*:([^\n\r]*)/,
	VT = /title([\t ][^\n\r]*|)/,
	jT = { ACC_DESCR: GT, ACC_TITLE: BT, TITLE: VT },
	Ot,
	_c =
		((Ot = class extends pc {
			runConverter(e, t, r) {
				let i = this.runCommonConverter(e, t, r)
				return (
					i === void 0 && (i = this.runCustomConverter(e, t, r)),
					i === void 0 ? super.runConverter(e, t, r) : i
				)
			}
			runCommonConverter(e, t, r) {
				let i = jT[e.name]
				if (i === void 0) return
				let a = i.exec(t)
				if (a !== null) {
					if (a[1] !== void 0) return a[1].trim().replace(/[\t ]{2,}/gm, ' ')
					if (a[2] !== void 0)
						return a[2]
							.replace(/^\s*/gm, '')
							.replace(/\s+$/gm, '')
							.replace(/[\t ]{2,}/gm, ' ')
							.replace(
								/[\n\r]{2,}/gm,
								`
`
							)
				}
			}
		}),
		s(Ot, 'AbstractMermaidValueConverter'),
		x(Ot, 'AbstractMermaidValueConverter'),
		Ot),
	_t,
	Dc =
		((_t = class extends _c {
			runCustomConverter(e, t, r) {}
		}),
		s(_t, 'CommonValueConverter'),
		x(_t, 'CommonValueConverter'),
		_t),
	Dt,
	_i =
		((Dt = class extends fc {
			constructor(e) {
				super(), (this.keywords = new Set(e))
			}
			buildKeywordTokens(e, t, r) {
				let i = super.buildKeywordTokens(e, t, r)
				return (
					i.forEach((a) => {
						this.keywords.has(a.name) &&
							a.PATTERN !== void 0 &&
							(a.PATTERN = new RegExp(a.PATTERN.toString() + '(?:(?=%%)|(?!\\S))'))
					}),
					i
				)
			}
		}),
		s(Dt, 'AbstractMermaidTokenBuilder'),
		x(Dt, 'AbstractMermaidTokenBuilder'),
		Dt),
	Mt
;(Mt = class extends _i {}), s(Mt, 'CommonTokenBuilder'), x(Mt, 'CommonTokenBuilder')
var xt = {},
	KT = {
		info: x(async () => {
			let { createInfoServices: n } = await Mi(() => Promise.resolve().then(() => ZT), void 0),
				e = n().Info.parser.LangiumParser
			xt.info = e
		}, 'info'),
		packet: x(async () => {
			let { createPacketServices: n } = await Mi(() => Promise.resolve().then(() => ev), void 0),
				e = n().Packet.parser.LangiumParser
			xt.packet = e
		}, 'packet'),
		pie: x(async () => {
			let { createPieServices: n } = await Mi(() => Promise.resolve().then(() => tv), void 0),
				e = n().Pie.parser.LangiumParser
			xt.pie = e
		}, 'pie'),
		architecture: x(async () => {
			let { createArchitectureServices: n } = await Mi(
					() => Promise.resolve().then(() => nv),
					void 0
				),
				e = n().Architecture.parser.LangiumParser
			xt.architecture = e
		}, 'architecture'),
		gitGraph: x(async () => {
			let { createGitGraphServices: n } = await Mi(() => Promise.resolve().then(() => rv), void 0),
				e = n().GitGraph.parser.LangiumParser
			xt.gitGraph = e
		}, 'gitGraph'),
	}
async function Xg(n, e) {
	let t = KT[n]
	if (!t) throw new Error(`Unknown diagram type: ${n}`)
	xt[n] || (await t())
	let r = xt[n].parse(e)
	if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new WT(r)
	return r.value
}
s(Xg, 'parse')
x(Xg, 'parse')
var Ft,
	WT =
		((Ft = class extends Error {
			constructor(e) {
				let t = e.lexerErrors.map((i) => i.message).join(`
`),
					r = e.parserErrors.map((i) => i.message).join(`
`)
				super(`Parsing failed: ${t} ${r}`), (this.result = e)
			}
		}),
		s(Ft, 'MermaidParseError'),
		x(Ft, 'MermaidParseError'),
		Ft),
	Ut,
	HT =
		((Ut = class extends _i {
			constructor() {
				super(['pie', 'showData'])
			}
		}),
		s(Ut, 'PieTokenBuilder'),
		x(Ut, 'PieTokenBuilder'),
		Ut),
	Gt,
	zT =
		((Gt = class extends _c {
			runCustomConverter(e, t, r) {
				if (e.name === 'PIE_SECTION_LABEL') return t.replace(/"/g, '').trim()
			}
		}),
		s(Gt, 'PieValueConverter'),
		x(Gt, 'PieValueConverter'),
		Gt),
	Jg = {
		parser: {
			TokenBuilder: x(() => new HT(), 'TokenBuilder'),
			ValueConverter: x(() => new zT(), 'ValueConverter'),
		},
	}
function Mc(n = tn) {
	let e = ge(kt(n), Aa),
		t = ge(Et({ shared: e }), MT, Jg)
	return e.ServiceRegistry.register(t), { shared: e, Pie: t }
}
s(Mc, 'createPieServices')
x(Mc, 'createPieServices')
var Bt,
	qT =
		((Bt = class extends _i {
			constructor() {
				super(['architecture'])
			}
		}),
		s(Bt, 'ArchitectureTokenBuilder'),
		x(Bt, 'ArchitectureTokenBuilder'),
		Bt),
	Vt,
	YT =
		((Vt = class extends _c {
			runCustomConverter(e, t, r) {
				if (e.name === 'ARCH_ICON') return t.replace(/[()]/g, '').trim()
				if (e.name === 'ARCH_TEXT_ICON') return t.replace(/["()]/g, '')
				if (e.name === 'ARCH_TITLE') return t.replace(/[[\]]/g, '').trim()
			}
		}),
		s(Vt, 'ArchitectureValueConverter'),
		x(Vt, 'ArchitectureValueConverter'),
		Vt),
	Qg = {
		parser: {
			TokenBuilder: x(() => new qT(), 'TokenBuilder'),
			ValueConverter: x(() => new YT(), 'ValueConverter'),
		},
	}
function Fc(n = tn) {
	let e = ge(kt(n), Aa),
		t = ge(Et({ shared: e }), FT, Qg)
	return e.ServiceRegistry.register(t), { shared: e, Architecture: t }
}
s(Fc, 'createArchitectureServices')
x(Fc, 'createArchitectureServices')
var jt,
	XT =
		((jt = class extends _i {
			constructor() {
				super(['gitGraph'])
			}
		}),
		s(jt, 'GitGraphTokenBuilder'),
		x(jt, 'GitGraphTokenBuilder'),
		jt),
	Zg = {
		parser: {
			TokenBuilder: x(() => new XT(), 'TokenBuilder'),
			ValueConverter: x(() => new Dc(), 'ValueConverter'),
		},
	}
function Uc(n = tn) {
	let e = ge(kt(n), Aa),
		t = ge(Et({ shared: e }), UT, Zg)
	return e.ServiceRegistry.register(t), { shared: e, GitGraph: t }
}
s(Uc, 'createGitGraphServices')
x(Uc, 'createGitGraphServices')
var Kt,
	JT =
		((Kt = class extends _i {
			constructor() {
				super(['info', 'showInfo'])
			}
		}),
		s(Kt, 'InfoTokenBuilder'),
		x(Kt, 'InfoTokenBuilder'),
		Kt),
	ey = {
		parser: {
			TokenBuilder: x(() => new JT(), 'TokenBuilder'),
			ValueConverter: x(() => new Dc(), 'ValueConverter'),
		},
	}
function Gc(n = tn) {
	let e = ge(kt(n), Aa),
		t = ge(Et({ shared: e }), _T, ey)
	return e.ServiceRegistry.register(t), { shared: e, Info: t }
}
s(Gc, 'createInfoServices')
x(Gc, 'createInfoServices')
var Wt,
	QT =
		((Wt = class extends _i {
			constructor() {
				super(['packet-beta'])
			}
		}),
		s(Wt, 'PacketTokenBuilder'),
		x(Wt, 'PacketTokenBuilder'),
		Wt),
	ty = {
		parser: {
			TokenBuilder: x(() => new QT(), 'TokenBuilder'),
			ValueConverter: x(() => new Dc(), 'ValueConverter'),
		},
	}
function Bc(n = tn) {
	let e = ge(kt(n), Aa),
		t = ge(Et({ shared: e }), DT, ty)
	return e.ServiceRegistry.register(t), { shared: e, Packet: t }
}
s(Bc, 'createPacketServices')
x(Bc, 'createPacketServices')
const ZT = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, InfoModule: ey, createInfoServices: Gc },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	ev = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, PacketModule: ty, createPacketServices: Bc },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	tv = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, PieModule: Jg, createPieServices: Mc },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	nv = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, ArchitectureModule: Qg, createArchitectureServices: Fc },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	rv = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, GitGraphModule: Zg, createGitGraphServices: Uc },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	)
export { Xg as p }
