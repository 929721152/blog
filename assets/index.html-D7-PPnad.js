import {
	z,
	f as E,
	q as A,
	A as F,
	s as D,
	k as q,
	v as _,
	_ as b,
	o as k,
	c as o,
	d as t,
	j as G,
	F as $,
	h as S,
	i as T,
	a as c,
	b as a,
	e as h,
	w as U,
} from './app-B_7CxFr0.js'
var L = '#32A9C3',
	N = '#1B3C4A',
	r = 'https://img.shields.io',
	O = 'https://github.com',
	P = 'https://www.npmjs.com/package',
	w = Symbol('')
function R(p) {
	const s = z(w, E({}))
	return A(() => {
		const e = D(s),
			i = D(p),
			l = {
				name: i.name || e.name,
				repo: i.repo || e.repo,
				branch: i.branch || e.branch,
				dir: i.dir || e.dir,
				type: i.type,
				color: i.color || e.color,
				label: i.label,
				labelColor: i.labelColor || e.labelColor,
				theme: i.theme || e.theme,
			}
		return V(l)
	})
}
function j(p) {
	const s = A(() => {
		const e = D(p)
		return {
			name: e.name,
			repo: e.repo,
			branch: e.branch,
			dir: e.dir,
			color: e.color,
			labelColor: e.labelColor,
			theme: e.theme,
		}
	})
	F(w, s)
}
function V(p) {
	var f
	let {
		name: s = '',
		repo: e = '',
		branch: i = 'main',
		dir: l = '',
		type: d,
		color: m,
		label: g,
		labelColor: v,
		theme: C = '',
	} = p
	s = s || ((f = e.split('/')) == null ? void 0 : f[1]) || ''
	const y = encodeURIComponent(s),
		u = e ? `${O}/${e}${l ? `/tree/${i}/${l}` : ''}` : '',
		B = `${P}/${s}`,
		n = new URLSearchParams()
	switch (
		(d !== 'source' &&
			d !== 'stars' &&
			d !== 'forks' &&
			(n.append('style', C || 'flat'), n.append('color', m || L), n.append('labelColor', v || N)),
		d)
	) {
		case 'source':
			return (
				n.append('logo', 'github'),
				n.append('color', v || N),
				{ badgeUrl: `${r}/badge/source-a?${n.toString()}`, link: u, alt: 'github source' }
			)
		case 'stars':
		case 'forks':
			return (
				n.append('style', C || 'social'),
				{ badgeUrl: `${r}/github/${d}/${e}?${n.toString()}`, link: u, alt: `github ${d}` }
			)
		case 'license':
			return { badgeUrl: `${r}/github/license/${e}?${n.toString()}`, link: u, alt: 'license' }
		case 'version':
			return (
				n.append('label', g || s || 'npm'),
				{ badgeUrl: `${r}/npm/v/${y}?${n.toString()}`, link: B, alt: 'npm version' }
			)
		case 'dt':
		case 'd18m':
			return (
				n.append('label', g || 'downloads'),
				{ badgeUrl: `${r}/npm/d18m/${y}?${n.toString()}`, link: B, alt: 'npm downloads' }
			)
		case 'dm':
		case 'dy':
		case 'dw':
			return (
				n.append('label', g || 'downloads'),
				{ badgeUrl: `${r}/npm/${d}/${y}?${n.toString()}`, link: B, alt: 'npm downloads' }
			)
		default:
			return { badgeUrl: `${r}/badge/unknown?${n.toString()}`, alt: 'unknown' }
	}
}
const I = q({
		__name: 'NpmBadge',
		props: {
			type: {},
			label: {},
			name: {},
			repo: {},
			branch: {},
			dir: {},
			color: {},
			labelColor: {},
			theme: {},
		},
		setup(p, { expose: s }) {
			s()
			const e = p,
				i = R(_(() => e)),
				l = { props: e, info: i }
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	Z = { class: 'vp-npm-badge' },
	M = ['src', 'alt'],
	H = ['href'],
	J = ['src', 'alt']
function K(p, s, e, i, l, d) {
	return (
		k(),
		o('span', Z, [
			i.info.link
				? (k(),
				  o(
						'a',
						{ key: 1, href: i.info.link, target: '_blank', rel: 'noreferrer', class: 'no-icon' },
						[t('img', { src: i.info.badgeUrl, alt: i.info.alt }, null, 8, J)],
						8,
						H
				  ))
				: (k(), o('img', { key: 0, src: i.info.badgeUrl, alt: i.info.alt }, null, 8, M)),
		])
	)
}
const x = b(I, [
		['render', K],
		['__file', 'NpmBadge.vue'],
	]),
	Q = q({
		__name: 'NpmBadgeGroup',
		props: {
			items: {},
			name: {},
			repo: {},
			branch: {},
			dir: {},
			color: {},
			labelColor: {},
			theme: {},
		},
		setup(p, { expose: s }) {
			s()
			const e = p
			j(_(() => e))
			const i = A(() =>
					e.items
						? Array.isArray(e.items)
							? e.items
							: e.items.split(',').map((d) => d.trim())
						: []
				),
				l = { props: e, list: i, NpmBadge: x }
			return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
		},
	}),
	W = { class: 'vp-npm-badge-group' }
function X(p, s, e, i, l, d) {
	return (
		k(),
		o('p', W, [
			G(
				p.$slots,
				'default',
				{},
				() => [
					(k(!0),
					o(
						$,
						null,
						S(i.list, (m, g) => (k(), T(i.NpmBadge, { key: m + g, type: m }, null, 8, ['type']))),
						128
					)),
				],
				!0
			),
		])
	)
}
const Y = b(Q, [
		['render', X],
		['__scopeId', 'data-v-99ebfd11'],
		['__file', 'NpmBadgeGroup.vue'],
	]),
	ss = {
		__name: 'index.html',
		setup(p, { expose: s }) {
			s()
			const e = { NpmBadge: x, NpmBadgeGroup: Y }
			return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
		},
	}
function is(p, s, e, i, l, d) {
	return (
		k(),
		o('div', null, [
			s[20] ||
				(s[20] = c(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Npm 徽章组件 用于显示 npm 包信息，并提供相关的链接。</p><p>徽章由 <a href="https://shields.io" target="_blank" rel="noopener noreferrer">https://shields.io</a> 提供支持。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>使用该组件需要你手动导入 <code>NpmBadge</code> 或 <code>NpmBadgeGroup</code> 组件：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在 markdown 中导入 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> NpmBadge</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/features/NpmBadge.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> NpmBadgeGroup</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/features/NpmBadgeGroup.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入后，即可在 markdown 中使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 并排显示多个 npm badge --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadgeGroup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">version,dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div>`,
					6
				)),
			a(i.NpmBadge, { name: 'vuepress-theme-plume', type: 'dm' }),
			a(i.NpmBadgeGroup, { name: 'vuepress-theme-plume', items: 'version,dm' }),
			s[21] ||
				(s[21] = c(
					`<h2 id="npmbadge" tabindex="-1"><a class="header-anchor" href="#npmbadge"><span><code>&lt;NpmBadge /&gt;</code></span></a></h2><p>单个 npm badge</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>npm 包名，为空则从 <code>repo</code> 中获取</td></tr><tr><td>repo</td><td><code>string</code></td><td>name 为空时必填</td><td><code>&#39;&#39;</code></td><td>包 github 仓库地址, 格式为 <code>owner/repo</code></td></tr><tr><td>type</td><td><code>NpmBadgeType</code></td><td>是</td><td>-</td><td>徽章类型</td></tr><tr><td>theme</td><td><code>NpmBadgeTheme</code></td><td>否</td><td><code>&#39;flat&#39;</code></td><td>徽章主题</td></tr><tr><td>label</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>徽章标签</td></tr><tr><td>color</td><td><code>string</code></td><td>否</td><td><code>&#39;#32A9C3&#39;</code></td><td>徽章颜色</td></tr><tr><td>labelColor</td><td><code>string</code></td><td>否</td><td><code>&#39;#1B3C4A&#39;</code></td><td>徽章标签颜色</td></tr><tr><td>branch</td><td><code>string</code></td><td>否</td><td><code>&#39;main&#39;</code></td><td>仓库分支</td></tr><tr><td>dir</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>包所在仓库目录，适用于 monorepo 项目</td></tr></tbody></table><h3 id="types" tabindex="-1"><a class="header-anchor" href="#types"><span>Types</span></a></h3><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> NpmBadgeType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // github</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // github source</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stars</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // github stars</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">forks</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // github forks</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">license</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // github license</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // npm</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">version</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // npm version</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // alias d18m</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">d18m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // npm downloads last 18 months</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dw</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // npm downloads weekly</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // npm downloads monthly</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // npm downloads yearly</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> NpmBadgeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">flat</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">flat-square</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">plastic</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">for-the-badge</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">social</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>`,
					7
				)),
			t('ul', null, [
				t('li', null, [
					s[0] ||
						(s[0] = t(
							'code',
							null,
							'<NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="source" />',
							-1
						)),
					s[1] || (s[1] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'source' }),
				]),
				t('li', null, [
					s[2] ||
						(s[2] = t(
							'code',
							null,
							'<NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="stars" />',
							-1
						)),
					s[3] || (s[3] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'stars' }),
				]),
				t('li', null, [
					s[4] ||
						(s[4] = t(
							'code',
							null,
							'<NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="forks" />',
							-1
						)),
					s[5] || (s[5] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'forks' }),
				]),
				t('li', null, [
					s[6] ||
						(s[6] = t(
							'code',
							null,
							'<NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="license" />',
							-1
						)),
					s[7] || (s[7] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'license' }),
				]),
				t('li', null, [
					s[8] ||
						(s[8] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="version" />', -1)),
					s[9] || (s[9] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'version' }),
				]),
				t('li', null, [
					s[10] ||
						(s[10] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="dt" />', -1)),
					s[11] || (s[11] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'dt' }),
				]),
				t('li', null, [
					s[12] ||
						(s[12] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="d18m" />', -1)),
					s[13] || (s[13] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'd18m' }),
				]),
				t('li', null, [
					s[14] ||
						(s[14] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="dy" />', -1)),
					s[15] || (s[15] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'dy' }),
				]),
				t('li', null, [
					s[16] ||
						(s[16] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="dm" />', -1)),
					s[17] || (s[17] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'dm' }),
				]),
				t('li', null, [
					s[18] ||
						(s[18] = t('code', null, '<NpmBadge name="vuepress-theme-plume" type="dw" />', -1)),
					s[19] || (s[19] = h(' - ')),
					a(i.NpmBadge, { repo: 'pengzhanbo/vuepress-theme-plume', type: 'dw' }),
				]),
			]),
			s[22] ||
				(s[22] = c(
					`<h2 id="npmbadgegroup" tabindex="-1"><a class="header-anchor" href="#npmbadgegroup"><span><code>&lt;NpmBadgeGroup /&gt;</code></span></a></h2><p>组合多个 npm badge</p><h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>npm 包名，为空则从 <code>repo</code> 中获取</td></tr><tr><td>repo</td><td><code>string</code></td><td>name 为空时必填</td><td><code>&#39;&#39;</code></td><td>包 github 仓库地址, 格式为 <code>owner/repo</code></td></tr><tr><td>items</td><td><code>string | NpmBadgeType[]</code></td><td>否</td><td>-</td><td>徽章类型列表, 传入 <code>string</code> 时用 <code>&#39;,&#39;</code>分隔，会自动转换为 <code>NpmBadgeType[]</code></td></tr><tr><td>theme</td><td><code>NpmBadgeTheme</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>徽章主题</td></tr><tr><td>color</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>徽章颜色</td></tr><tr><td>labelColor</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>徽章标签颜色</td></tr><tr><td>branch</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>仓库分支</td></tr><tr><td>dir</td><td><code>string</code></td><td>否</td><td><code>&#39;&#39;</code></td><td>包所在仓库目录，适用于 monorepo 项目</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><p><code>&lt;NpmBadgeGroup /&gt;</code> 支持传入 多个 <code>&lt;NpmBadge /&gt;</code> 组件。</p><p><code>&lt;NpmBadgeGroup /&gt;</code> 声明的 <code>Props</code> 将被注入到 <code>&lt;NpmBadge /&gt;</code> 组件中。通过这种方式来实现和简化徽章组合。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadgeGroup</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  items</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stars,version,dm,source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">/&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					11
				)),
			a(i.NpmBadgeGroup, {
				repo: 'pengzhanbo/vuepress-theme-plume',
				items: 'stars,version,dm,source',
			}),
			s[23] ||
				(s[23] = c(
					`<p>使用 <code>&lt;slot /&gt;</code> 灵活定义徽章组合：</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadgeGroup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stars</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">version</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> label</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">npm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NpmBadgeGroup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					4
				)),
			a(
				i.NpmBadgeGroup,
				{ repo: 'pengzhanbo/vuepress-theme-plume' },
				{
					default: U(() => [
						a(i.NpmBadge, { type: 'stars' }),
						a(i.NpmBadge, { type: 'version', label: 'npm' }),
						a(i.NpmBadge, { type: 'dm' }),
						a(i.NpmBadge, { type: 'source' }),
					]),
					_: 1,
				}
			),
		])
	)
}
const ts = b(ss, [
		['render', is],
		['__file', 'index.html.vue'],
	]),
	as = JSON.parse(
		'{"path":"/blog/guide/components/npm-badge/","title":"Npm 徽章","lang":"zh-CN","frontmatter":{"title":"Npm 徽章","author":"pengzhanbo","icon":"akar-icons:npm-fill","createTime":"2024/07/26 22:07:23","permalink":"/blog/guide/components/npm-badge/","description":"概述 Npm 徽章组件 用于显示 npm 包信息，并提供相关的链接。 徽章由 https://shields.io 提供支持。 使用 使用该组件需要你手动导入 NpmBadge 或 NpmBadgeGroup 组件：","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/npm-badge/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Npm 徽章"}],["meta",{"property":"og:description","content":"概述 Npm 徽章组件 用于显示 npm 包信息，并提供相关的链接。 徽章由 https://shields.io 提供支持。 使用 使用该组件需要你手动导入 NpmBadge 或 NpmBadgeGroup 组件："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Npm 徽章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.56,"words":768},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/npmBadge.md","bulletin":false}'
	)
export { ts as comp, as as data }
