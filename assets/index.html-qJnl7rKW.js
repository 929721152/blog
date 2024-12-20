import {
	u as B,
	q as _,
	f as C,
	p as R,
	s as x,
	k as w,
	v as E,
	_ as A,
	o as g,
	c as u,
	d as s,
	t as p,
	x as F,
	y as m,
	a as D,
	b as r,
	w as f,
	r as v,
	e as l,
} from './app-B_7CxFr0.js'
var b = B('github-repo', {})
function q(h) {
	const a = _(() => {
			const t = x(h),
				[n = '', d = ''] = t.split('/')
			return { owner: n, name: d }
		}),
		e = C(null),
		i = C(!1)
	async function o() {
		const { owner: t, name: n } = a.value
		if (!t || !n) return
		const d = `${t}/${n}`,
			k = b.value[`${t}/${n}`]
		if (k && Date.now() - k.updatedAt <= 216e5) {
			;(e.value = k.info), (i.value = !0)
			return
		}
		i.value = !1
		const c = await fetch(`https://api.pengzhanbo.cn/github/repo/${t}/${n}`).then((y) => y.json())
		;(e.value = c), (i.value = !0), (b.value[d] = { info: c, updatedAt: Date.now() })
	}
	return R(a, o, { immediate: !0 }), { data: e, loaded: i }
}
const z = w({
		__name: 'RepoCard',
		props: { repo: {} },
		setup(h, { expose: a }) {
			a()
			const e = h,
				{ loaded: i, data: o } = q(E(e, 'repo')),
				t = { props: e, loaded: i, data: o }
			return Object.defineProperty(t, '__isScriptSetup', { enumerable: !1, value: !0 }), t
		},
	}),
	T = { key: 0, class: 'vp-repo-card' },
	G = { class: 'repo-name' },
	N = { class: 'repo-link' },
	P = ['href'],
	S = { class: 'repo-visibility' },
	V = { class: 'repo-desc' },
	j = { class: 'repo-info' },
	O = { key: 0 },
	H = { key: 1 }
function I(h, a, e, i, o, t) {
	return i.loaded && i.data
		? (g(),
		  u('div', T, [
				s('p', G, [
					a[0] || (a[0] = s('span', { class: 'vpi-github-repo' }, null, -1)),
					s('span', N, [
						s(
							'a',
							{ href: i.data.url, target: '_blank', rel: 'noopener noreferrer', class: 'no-icon' },
							p(i.data.ownerType === 'Organization' ? i.data.fullName : i.data.name),
							9,
							P
						),
					]),
					s('span', S, p(i.data.visibility + (i.data.template ? ' Template' : '')), 1),
				]),
				s('p', V, p(i.data.description), 1),
				s('div', j, [
					i.data.language
						? (g(),
						  u('p', O, [
								s(
									'span',
									{
										class: 'repo-language',
										style: F({ 'background-color': i.data.languageColor }),
									},
									null,
									4
								),
								s('span', null, p(i.data.language), 1),
						  ]))
						: m('', !0),
					s('p', null, [
						a[1] || (a[1] = s('span', { class: 'vpi-github-star' }, null, -1)),
						s('span', null, p(i.data.stars), 1),
					]),
					s('p', null, [
						a[2] || (a[2] = s('span', { class: 'vpi-github-fork' }, null, -1)),
						s('span', null, p(i.data.forks), 1),
					]),
					i.data.license
						? (g(),
						  u('p', H, [
								a[3] || (a[3] = s('span', { class: 'vpi-github-license' }, null, -1)),
								s('span', null, p(i.data.license.name), 1),
						  ]))
						: m('', !0),
				]),
		  ]))
		: m('', !0)
}
const Z = A(z, [
		['render', I],
		['__scopeId', 'data-v-4f940217'],
		['__file', 'RepoCard.vue'],
	]),
	J = {
		__name: 'index.html',
		setup(h, { expose: a }) {
			a()
			const e = { RepoCard: Z }
			return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
		},
	}
function L(h, a, e, i, o, t) {
	const n = v('VPIcon'),
		d = v('CodeTabs'),
		k = v('CardGrid')
	return (
		g(),
		u('div', null, [
			a[2] ||
				(a[2] = D(
					`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Repo 卡片组件 用于显示 GitHub 仓库信息。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>使用该组件需要你手动导入 <code>RepoCard</code> 组件：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 在 markdown 中导入 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> RepoCard</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/features/RepoCard.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入后，即可在 markdown 中使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RepoCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p>注册为全局组件：</p>`,
					6
				)),
			r(
				d,
				{ id: '17', data: [{ id: '.vuepress/client.ts' }] },
				{
					title0: f(({ value: c, isActive: y }) => [
						r(n, { name: 'vscode-icons:file-type-typescript' }),
						a[0] || (a[0] = s('span', null, '.vuepress/client.ts', -1)),
					]),
					tab0: f(
						({ value: c, isActive: y }) =>
							a[1] ||
							(a[1] = [
								s(
									'div',
									{ class: 'language-ts', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' RepoCard'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress-theme-plume/features/RepoCard.vue'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'import'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' {'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														' defineClientConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' from'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														" '"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'vuepress/client'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
												]),
												l(`
`),
												s('span', { class: 'line' }),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														'export'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#1E754F', '--shiki-dark': '#4D9375' } },
														' default'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' defineClientConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'  enhance'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({ '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'app'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' }) {'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'    app'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'.'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'component'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'('
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'RepoCard'
													),
													s(
														'span',
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														', '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B07D48', '--shiki-dark': '#BD976A' } },
														'RepoCard'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														')'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  },'
													),
												]),
												l(`
`),
												s('span', { class: 'line' }, [
													s(
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
			a[3] ||
				(a[3] = D(
					'<p>全局组件可在 其他任意 markdown 文件中使用</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RepoCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><p><code>RepoCard</code> 组件的 接收一个 <code>repo</code> 参数，传入的是仓库的地址，格式为 <code>owner/repo</code>。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="单卡片" tabindex="-1"><a class="header-anchor" href="#单卡片"><span>单卡片</span></a></h3><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RepoCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>',
					9
				)),
			r(i.RepoCard, { repo: 'pengzhanbo/vuepress-theme-plume' }),
			a[4] ||
				(a[4] = D(
					`<h3 id="多卡片" tabindex="-1"><a class="header-anchor" href="#多卡片"><span>多卡片</span></a></h3><p>如果希望以紧凑的方式并排展示多个卡片，可以使用 <code>CardGrid</code> 组件。</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RepoCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RepoCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress/ecosystem</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,
					5
				)),
			r(k, null, {
				default: f(() => [
					r(i.RepoCard, { repo: 'vuepress/core' }),
					r(i.RepoCard, { repo: 'vuepress/ecosystem' }),
				]),
				_: 1,
			}),
		])
	)
}
const U = A(J, [
		['render', L],
		['__file', 'index.html.vue'],
	]),
	K = JSON.parse(
		'{"path":"/blog/guide/components/github-repo-card/","title":"Repo 卡片","lang":"zh-CN","frontmatter":{"title":"Repo 卡片","author":"pengzhanbo","icon":"octicon:repo-16","createTime":"2024/07/26 21:11:56","permalink":"/blog/guide/components/github-repo-card/","description":"概述 Repo 卡片组件 用于显示 GitHub 仓库信息。 使用 使用该组件需要你手动导入 RepoCard 组件： 注册为全局组件： 全局组件可在 其他任意 markdown 文件中使用 Props RepoCard 组件的 接收一个 repo 参数，传入的是仓库的地址，格式为 owner/repo。 示例 单卡片 输入： 输出：","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/components/github-repo-card/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"Repo 卡片"}],["meta",{"property":"og:description","content":"概述 Repo 卡片组件 用于显示 GitHub 仓库信息。 使用 使用该组件需要你手动导入 RepoCard 组件： 注册为全局组件： 全局组件可在 其他任意 markdown 文件中使用 Props RepoCard 组件的 接收一个 repo 参数，传入的是仓库的地址，格式为 owner/repo。 示例 单卡片 输入： 输出："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Repo 卡片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.83,"words":248},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/组件/repoCard.md","bulletin":false}'
	)
export { U as comp, K as data }
