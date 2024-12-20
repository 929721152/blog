import {
	_ as g,
	c as m,
	d as s,
	e as t,
	b as n,
	w as e,
	a as k,
	r as d,
	o as y,
} from './app-B_7CxFr0.js'
const u = {},
	B = { class: 'hint-container tip' }
function c(A, i) {
	const a = d('RouteLink'),
		p = d('Icon'),
		h = d('VPIcon'),
		r = d('CodeTabs')
	return (
		y(),
		m('div', null, [
			i[27] ||
				(i[27] = s(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#概述' }, [s('span', null, '概述')])],
					-1
				)),
			i[28] ||
				(i[28] = s(
					'p',
					null,
					[
						t('主题支持 '),
						s(
							'a',
							{
								href: 'https://icon-sets.iconify.design/',
								target: '_blank',
								rel: 'noopener noreferrer',
							},
							'iconify'
						),
						t(' 的所有图标，并提供了不同的方式来使用它们：'),
					],
					-1
				)),
			s('ul', null, [
				s('li', null, [
					n(
						a,
						{
							to: '/notes/theme/config/%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%85%8D%E7%BD%AE.html#%E9%85%8D%E7%BD%AE',
						},
						{ default: e(() => i[0] || (i[0] = [t('导航栏图标')])), _: 1 }
					),
				]),
				s('li', null, [
					n(
						a,
						{
							to: '/notes/theme/blog/guide/%E7%9F%A5%E8%AF%86%E7%AC%94%E8%AE%B0.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%9B%BE%E6%A0%87',
						},
						{ default: e(() => i[1] || (i[1] = [t('侧边栏图标')])), _: 1 }
					),
				]),
				i[5] ||
					(i[5] = s(
						'li',
						null,
						[s('a', { href: '#%E5%9B%BE%E6%A0%87%E7%BB%84%E4%BB%B6' }, '图标组件')],
						-1
					)),
				s('li', null, [
					n(
						a,
						{
							to: '/notes/theme/blog/guide/markdown/%E8%BF%9B%E9%98%B6.html#iconify-%E5%9B%BE%E6%A0%87',
						},
						{ default: e(() => i[2] || (i[2] = [t('图标语法糖')])), _: 1 }
					),
				]),
				s('li', null, [
					n(
						a,
						{
							to: '/notes/theme/blog/guide/markdown/%E8%BF%9B%E9%98%B6.html#%E6%96%87%E4%BB%B6%E6%A0%91',
						},
						{ default: e(() => i[3] || (i[3] = [t('文件树图标')])), _: 1 }
					),
				]),
				s('li', null, [
					n(
						a,
						{
							to: '/notes/theme/blog/guide/%E4%BB%A3%E7%A0%81/%E4%BB%A3%E7%A0%81%E7%BB%84.html#%E5%88%86%E7%BB%84%E6%A0%87%E9%A2%98%E5%9B%BE%E6%A0%87',
						},
						{ default: e(() => i[4] || (i[4] = [t('代码分组标题图标')])), _: 1 }
					),
				]),
			]),
			i[29] ||
				(i[29] = k(
					`<div class="hint-container tip"><p class="hint-container-title">主题对图标的优化</p><p>上述的不同的使用图标的方式，主题在内部都采取了相同的解析策略，即使您在不同的位置使用了相同的图标， 也不会重复加载相同的图标资源。</p><p>图标默认是通过远程请求加载，主题也非常建议您在本地项目中安装 <code>@iconify/json</code> 包，以便主题能够将图标全部解析为本地资源， 这可以有效的提高页面的访问体验。</p></div><h2 id="图标组件" tabindex="-1"><a class="header-anchor" href="#图标组件"><span>图标组件</span></a></h2><p>通过 <code>&lt;Icon /&gt;</code> 组件来使用图标。</p><p>你可以在 markdown 文件中使用该 组件。</p><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h3><p><code>&lt;Icon /&gt;</code> 组件接受一个 <code>name</code> 属性，用于指定图标的名称。还支持传入 <code>color</code> 和 <code>size</code> 属性来设置图标的颜色和大小。 但对于 彩色图标，<code>color</code> 属性设置无效。</p><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>图标名称，在 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 可获取对应的名称</td></tr><tr><td>color</td><td><code>string</code></td><td>图标颜色，仅纯色图标支持设置颜色</td></tr><tr><td>size</td><td><code>number | string</code></td><td>设置图标大小，默认单位为 <code>px</code> ，可自定义单位</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 纯色图标：</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">octicon:smiley-16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 定义纯色图标的颜色和大小：</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">octicon:smiley-16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">red</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 彩色图标：</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">noto:smiling-face-with-open-hands</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 定义彩色图标的大小：</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">noto:smiling-face-with-open-hands</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div>`,
					9
				)),
			s('ul', null, [
				s('li', null, [i[6] || (i[6] = t('纯色图标：')), n(p, { name: 'octicon:smiley-16' })]),
				s('li', null, [
					i[7] || (i[7] = t('定义纯色图标的颜色和大小：')),
					n(p, { name: 'octicon:smiley-16', color: 'red', size: '2em' }),
				]),
				s('li', null, [
					i[8] || (i[8] = t('彩色图标：')),
					n(p, { name: 'noto:smiling-face-with-open-hands' }),
				]),
				s('li', null, [
					i[9] || (i[9] = t('定义彩色图标的大小：')),
					n(p, { name: 'noto:smiling-face-with-open-hands', size: '2em' }),
				]),
			]),
			i[30] ||
				(i[30] = k(
					'<h3 id="加载图标" tabindex="-1"><a class="header-anchor" href="#加载图标"><span>加载图标</span></a></h3><p><code>&lt;Icon /&gt;</code> 组件默认通过 远程请求 <code>CDN</code> 获取图标资源，但这可能受到网络环境的影响，出现加载失败 或者延迟显示的情况。</p><p>为了解决这一问题，主题建议 在你的站点项目中安装 <code>@iconify/json</code> 包。 主题会检查当前项目是否安装了 <code>@iconify/json</code>，如果安装了该包，则主题自动解析所使用到的图标， 并处理为本地图标资源，在构建时打包到 <code>dist</code> 目录中。</p><p>由于 <code>@iconify/json</code> 包比较大，需要手动进行安装：</p>',
					4
				)),
			n(
				r,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-149' },
				{
					title0: e(({ value: l, isActive: o }) => [
						n(h, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[10] || (i[10] = s('span', null, 'pnpm', -1)),
					]),
					title1: e(({ value: l, isActive: o }) => [
						n(h, { name: 'vscode-icons:file-type-yarn' }),
						i[11] || (i[11] = s('span', null, 'yarn', -1)),
					]),
					title2: e(({ value: l, isActive: o }) => [
						n(h, { name: 'logos:npm-icon' }),
						i[12] || (i[12] = s('span', null, 'npm', -1)),
					]),
					tab0: e(
						({ value: l, isActive: o }) =>
							i[13] ||
							(i[13] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @iconify/json'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: e(
						({ value: l, isActive: o }) =>
							i[14] ||
							(i[14] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @iconify/json'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: e(
						({ value: l, isActive: o }) =>
							i[15] ||
							(i[15] = [
								s(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' @iconify/json'
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
			i[31] ||
				(i[31] = s(
					'h2',
					{ id: 'markdown-语法糖', tabindex: '-1' },
					[
						s('a', { class: 'header-anchor', href: '#markdown-语法糖' }, [
							s('span', null, 'markdown 语法糖'),
						]),
					],
					-1
				)),
			s('p', null, [
				i[17] || (i[17] = t('相关内容请查看 ')),
				n(
					a,
					{
						to: '/notes/theme/blog/guide/markdown/%E8%BF%9B%E9%98%B6.html#iconify-%E5%9B%BE%E6%A0%87',
					},
					{ default: e(() => i[16] || (i[16] = [t('iconify-图标 语法糖')])), _: 1 }
				),
			]),
			i[32] || (i[32] = s('hr', null, null, -1)),
			s('div', B, [
				i[26] || (i[26] = s('p', { class: 'hint-container-title' }, '说明', -1)),
				s('p', null, [
					n(
						a,
						{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#navbar' },
						{ default: e(() => i[18] || (i[18] = [t('navbar')])), _: 1 }
					),
					i[20] || (i[20] = t(' 配置和 ')),
					n(
						a,
						{ to: '/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#notes' },
						{ default: e(() => i[19] || (i[19] = [t('notes')])), _: 1 }
					),
					i[21] || (i[21] = t(' 配置 中的 ')),
					i[22] || (i[22] = s('code', null, 'icon', -1)),
					i[23] || (i[23] = t(' 选项，也支持传入 iconify 图标名，并且当安装了 ')),
					i[24] || (i[24] = s('code', null, '@iconify/json', -1)),
					i[25] || (i[25] = t('，也会自动解析为本地图标资源。')),
				]),
			]),
		])
	)
}
const f = g(u, [
		['render', c],
		['__file', 'index.html.vue'],
	]),
	D = JSON.parse(
		'{"path":"/blog/guide/features/icon/","title":"图标","lang":"zh-CN","frontmatter":{"title":"图标","icon":"raphael:smile2","author":"pengzhanbo","createTime":"2024/07/22 10:45:47","permalink":"/blog/guide/features/icon/","description":"概述 主题支持 iconify 的所有图标，并提供了不同的方式来使用它们： 图标组件 主题对图标的优化 上述的不同的使用图标的方式，主题在内部都采取了相同的解析策略，即使您在不同的位置使用了相同的图标， 也不会重复加载相同的图标资源。 图标默认是通过远程请求加载，主题也非常建议您在本地项目中安装 @iconify/json 包，以便主题能够将图标全部解...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/features/icon/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"图标"}],["meta",{"property":"og:description","content":"概述 主题支持 iconify 的所有图标，并提供了不同的方式来使用它们： 图标组件 主题对图标的优化 上述的不同的使用图标的方式，主题在内部都采取了相同的解析策略，即使您在不同的位置使用了相同的图标， 也不会重复加载相同的图标资源。 图标默认是通过远程请求加载，主题也非常建议您在本地项目中安装 @iconify/json 包，以便主题能够将图标全部解..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图标\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.59,"words":777},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/功能/图标.md","bulletin":false}'
	)
export { f as comp, D as data }
