import { _ as k, c, d as i, e, b as t, w as n, a as p, r as d, o as g } from './app-B_7CxFr0.js'
const m = {}
function u(y, s) {
	const r = d('RouteLink'),
		a = d('VPIcon'),
		h = d('CodeTabs')
	return (
		g(),
		c('div', null, [
			s[14] ||
				(s[14] = i(
					'h2',
					{ id: '概述', tabindex: '-1' },
					[i('a', { class: 'header-anchor', href: '#概述' }, [i('span', null, '概述')])],
					-1
				)),
			s[15] ||
				(s[15] = i(
					'p',
					null,
					[
						e('在 Markdown 文件中使用 '),
						i(
							'a',
							{ href: 'https://iconify.design/', target: '_blank', rel: 'noopener noreferrer' },
							'iconify'
						),
						e(' 的图标。'),
					],
					-1
				)),
			i('p', null, [
				s[1] || (s[1] = e('主题一方面提供了')),
				t(
					r,
					{
						to: '/notes/theme/blog/guide/%E5%8A%9F%E8%83%BD/%E7%BB%84%E4%BB%B6.html#%E5%9B%BE%E6%A0%87',
					},
					{ default: n(() => s[0] || (s[0] = [i('code', null, '<Icon />', -1)])), _: 1 }
				),
				s[2] ||
					(s[2] = e(
						' 组件来支持在 markdown 中使用图标； 另一方面，主题还提供了图标的 markdown 语法，以更简单的方式，在 Markdown 中使用图标。'
					)),
			]),
			s[16] ||
				(s[16] = i(
					'p',
					null,
					[
						e('为了更好的使用该功能，主题推荐你安装 '),
						i('code', null, '@iconify/json'),
						e(' 依赖。主题会自动解析 '),
						i('code', null, '@iconify/json'),
						e(' 中的图标数据， 将有使用的图标打包为本地资源，以获得更好的访问体验。'),
					],
					-1
				)),
			t(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-12' },
				{
					title0: n(({ value: l, isActive: o }) => [
						t(a, { name: 'vscode-icons:file-type-light-pnpm' }),
						s[3] || (s[3] = i('span', null, 'pnpm', -1)),
					]),
					title1: n(({ value: l, isActive: o }) => [
						t(a, { name: 'vscode-icons:file-type-yarn' }),
						s[4] || (s[4] = i('span', null, 'yarn', -1)),
					]),
					title2: n(({ value: l, isActive: o }) => [
						t(a, { name: 'logos:npm-icon' }),
						s[5] || (s[5] = i('span', null, 'npm', -1)),
					]),
					tab0: n(
						({ value: l, isActive: o }) =>
							s[6] ||
							(s[6] = [
								i(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'pnpm'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													i(
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
					tab1: n(
						({ value: l, isActive: o }) =>
							s[7] ||
							(s[7] = [
								i(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'yarn'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													i(
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
					tab2: n(
						({ value: l, isActive: o }) =>
							s[8] ||
							(s[8] = [
								i(
									'div',
									{ class: 'language-sh', 'data-ext': 'sh', 'data-title': 'sh' },
									[
										i('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										i('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											i('code', null, [
												i('span', { class: 'line' }, [
													i(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													i(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													i(
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
			s[17] ||
				(s[17] = p(
					`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">collect:name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span></code></pre></div><p>设置图标大小和颜色</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name size]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name /color]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name size/color]:</span></span></code></pre></div><p><code>iconify</code> 拥有非常多的图标，这些图标被分组为不同的 <code>collect</code>，每个 <code>collect</code> 都有自己的 图标。</p><p>你可以从 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">https://icon-sets.iconify.design/</a> 中获取 collect 和 name。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ion:logo-markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span></code></pre></div><p>输出：</p>`,
					10
				)),
			i('p', null, [t(a, { name: 'ion:logo-markdown' })]),
			s[18] ||
				(s[18] = p(
					`<p>该语法为行内语法，因此，你可以在同一行中跟其他 markdown 语法 一起使用。</p><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">github: :</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tdesign:logo-github-filled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改颜色：:[tdesign:logo-github-filled /#f00]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改大小：:[tdesign:logo-github-filled 36px]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改大小颜色：:[tdesign:logo-github-filled 36px/#f00]:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">彩色图标 :[skill-icons:vscode-dark 36px]:</span></span></code></pre></div><p>输出：</p>`,
					4
				)),
			i('p', null, [
				s[9] || (s[9] = e('github: ')),
				t(a, { name: 'tdesign:logo-github-filled' }),
				s[10] || (s[10] = e(' 修改颜色：')),
				t(a, { name: 'tdesign:logo-github-filled', color: '#f00' }),
				s[11] || (s[11] = e(' 修改大小：')),
				t(a, { name: 'tdesign:logo-github-filled', size: '36px' }),
				s[12] || (s[12] = e(' 修改大小颜色：')),
				t(a, { name: 'tdesign:logo-github-filled', size: '36px', color: '#f00' }),
			]),
			i('p', null, [
				s[13] || (s[13] = e('彩色图标 ')),
				t(a, { name: 'skill-icons:vscode-dark', size: '36px' }),
			]),
		])
	)
}
const v = k(m, [
		['render', u],
		['__file', 'index.html.vue'],
	]),
	A = JSON.parse(
		'{"path":"/blog/guide/markdown/iconify/","title":"图标","lang":"zh-CN","frontmatter":{"title":"图标","createTime":"2024/09/30 14:49:39","icon":"grommet-icons:emoji","permalink":"/blog/guide/markdown/iconify/","description":"概述 在 Markdown 文件中使用 iconify 的图标。 主题一方面提供了 组件来支持在 markdown 中使用图标； 另一方面，主题还提供了图标的 markdown 语法，以更简单的方式，在 Markdown 中使用图标。 为了更好的使用该功能，主题推荐你安装 @iconify/json 依赖。主题会自动解析 @iconify/json 中...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/iconify/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"图标"}],["meta",{"property":"og:description","content":"概述 在 Markdown 文件中使用 iconify 的图标。 主题一方面提供了 组件来支持在 markdown 中使用图标； 另一方面，主题还提供了图标的 markdown 语法，以更简单的方式，在 Markdown 中使用图标。 为了更好的使用该功能，主题推荐你安装 @iconify/json 依赖。主题会自动解析 @iconify/json 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图标\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.19,"words":358},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/图标.md","bulletin":false}'
	)
export { v as comp, A as data }
