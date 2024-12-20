import {
	_ as r,
	c as o,
	a as d,
	b as l,
	w as a,
	d as s,
	e as p,
	r as k,
	o as g,
} from './app-B_7CxFr0.js'
const c = {}
function m(y, i) {
	const n = k('VPIcon'),
		h = k('CodeTabs')
	return (
		g(),
		o('div', null, [
			i[46] ||
				(i[46] = d(
					'<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>npmTo 容器用于将 npm 命令行转换为 <code>pnpm / yarn / deno / bun</code> 的命令行，并它们作为 代码块组呈现在页面。</p><p>在 <code>::: npm-to</code> 容器中，只需要写 一次 npm 命令 代码块即可。</p><details class="hint-container details"><summary>为什么需要 npmTo 容器 ？</summary><p>在我编写文档时，常常需要提供 <code>pnpm / yarn / npm</code> 等不同运行环境的命令，需要写多个代码块并包装在 <code>::: code-tabs</code> 容器中。它占据了我不少的工作量，而且还占据了 markdown 内容中的很长一部分空间，体验并不友好。 因此我编写了这个 <code>::: npm-to</code> 容器以解决这个问题。</p></details><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to </span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress-theme-plume</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: </span></span></code></pre></div><p>将 包含 <code>npm</code> 命令行的代码块，包裹在 <code>::: npm-to</code> 容器中即可。</p><div class="hint-container warning"><p class="hint-container-title">npm-to 容器仅支持存在单个代码块，不能包含其他内容</p></div><p>上述代码在内部会被转换为：</p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: code-tabs</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab pnpm</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress-theme-plume</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab yarn</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress-theme-plume</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab npm</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress-theme-plume</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终会在页面中呈现为：</p>',
					11
				)),
			l(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-30' },
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[0] || (i[0] = s('span', null, 'pnpm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[1] || (i[1] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[2] || (i[2] = s('span', null, 'npm', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[3] ||
							(i[3] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[4] ||
							(i[4] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
							i[5] ||
							(i[5] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress-theme-plume'
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
			i[47] ||
				(i[47] = d(
					'<p>还可以控制 代码块组中的代码块的显示顺序，如下所示：</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to tabs=&quot;npm,yarn,pnpm,bun,deno&quot; </span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress-theme-plume</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: </span></span></code></pre></div><p><strong>输出：</strong></p>',
					4
				)),
			l(
				h,
				{
					id: '0',
					data: [{ id: 'npm' }, { id: 'yarn' }, { id: 'pnpm' }, { id: 'bun' }, { id: 'deno' }],
					'tab-id': 'npm-to-43',
				},
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[6] || (i[6] = s('span', null, 'npm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[7] || (i[7] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[8] || (i[8] = s('span', null, 'pnpm', -1)),
					]),
					title3: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-bun' }),
						i[9] || (i[9] = s('span', null, 'bun', -1)),
					]),
					title4: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-deno' }),
						i[10] || (i[10] = s('span', null, 'deno', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[11] ||
							(i[11] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[12] ||
							(i[12] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab3: a(
						({ value: e, isActive: t }) =>
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
														'bun'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab4: a(
						({ value: e, isActive: t }) =>
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
														'deno'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' add'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepressvuepress-theme-plume'
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
			i[48] ||
				(i[48] = s(
					'h2',
					{ id: '配置', tabindex: '-1' },
					[s('a', { class: 'header-anchor', href: '#配置' }, [s('span', null, '配置')])],
					-1
				)),
			i[49] ||
				(i[49] = s(
					'p',
					null,
					[p('该功能默认不启用，您需要在 '), s('code', null, 'theme'), p(' 配置中启用它。')],
					-1
				)),
			l(
				h,
				{ id: '52', data: [{ id: '.vuepress/config.ts' }] },
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-typescript' }),
						i[16] || (i[16] = s('span', null, '.vuepress/config.ts', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[17] ||
							(i[17] = [
								s(
									'div',
									{ class: 'language-ts line-numbers-mode', 'data-ext': 'ts', 'data-title': 'ts' },
									[
										s('button', { class: 'copy', title: '复制代码', 'data-copied': '已复制' }),
										s('pre', { class: 'shiki shiki-themes vitesse-light vitesse-dark vp-code' }, [
											s('code', null, [
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
														' defineUserConfig'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'  theme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'plumeTheme'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'({'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'    plugins'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'      markdownPower'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'        // npmTo: true, // 启用，并使用默认配置'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'        npmTo'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': {'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#998418', '--shiki-dark': '#B8A965' } },
														'          tabs'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														': ['
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
														'npm'
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
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'yarn'
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
														{
															style: { '--shiki-light': '#B5695977', '--shiki-dark': '#C98A7D77' },
														},
														"'"
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														'pnpm'
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
														'], '
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A0ADA0', '--shiki-dark': '#758575DD' } },
														'// 代码块组默认显示顺序'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'        }'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'      },'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'    }'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														'  })'
													),
												]),
												p(`
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
										s(
											'div',
											{
												class: 'line-numbers',
												'aria-hidden': 'true',
												style: { 'counter-reset': 'line-number 0' },
											},
											[
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
												s('div', { class: 'line-number' }),
											]
										),
									],
									-1
								),
							])
					),
					_: 1,
				}
			),
			i[50] ||
				(i[50] = d(
					'<p><code>npm-to</code> 支持将 <code>npm</code> 命令行转换为 <code>pnpm / yarn / deno / bun</code> 的命令行。可以根据需求进行配置 <code>tabs</code> 。</p><h2 id="命令行支持" tabindex="-1"><a class="header-anchor" href="#命令行支持"><span>命令行支持</span></a></h2><p><code>npmTo</code> 并不对 <code>npm</code> 的所有命令行提供支持，以下是支持的列表：</p><ul><li><code>npm install</code> / <code>npm i</code></li><li><code>npm run</code> / <code>npm run-script</code></li><li><code>npm init</code></li><li><code>npm create</code></li><li><code>npm uninstall</code> / <code>npm rm</code> / <code>npm remove</code> / <code>npm un</code> / <code>npm unlink</code></li><li><code>npm ci</code></li><li><code>npx</code></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>对于不支持的命令行，<code>npmTo</code> 不会处理它们，仅将它们复制到其他的代码块中。</p></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs:dev</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>',
					9
				)),
			l(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-118' },
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[18] || (i[18] = s('span', null, 'pnpm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[19] || (i[19] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[20] || (i[20] = s('span', null, 'npm', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[21] ||
							(i[21] = [
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
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &&'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' pnpm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' docs:dev'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[22] ||
							(i[22] = [
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &&'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' yarn'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' docs:dev'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
							i[23] ||
							(i[23] = [
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
														{ style: { '--shiki-light': '#999999', '--shiki-dark': '#666666' } },
														' &&'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														' npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' run'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' docs:dev'
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
			i[51] ||
				(i[51] = d(
					'<p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vue</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --save-peer</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vuepress</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> typescript</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>',
					3
				)),
			l(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-128' },
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[24] || (i[24] = s('span', null, 'pnpm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[25] || (i[25] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[26] || (i[26] = s('span', null, 'npm', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[27] ||
							(i[27] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vue'
													),
												]),
												p(`
`),
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --save-peer'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress'
													),
												]),
												p(`
`),
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
														' typescript'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[28] ||
							(i[28] = [
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vue'
													),
												]),
												p(`
`),
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
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --peer'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress'
													),
												]),
												p(`
`),
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
														' typescript'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
							i[29] ||
							(i[29] = [
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
														' i'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' -D'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vue'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' i'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --save-peer'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' vuepress'
													),
												]),
												p(`
`),
												s('span', { class: 'line' }, [
													s(
														'span',
														{ style: { '--shiki-light': '#59873A', '--shiki-dark': '#80A665' } },
														'npm'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' i'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' typescript'
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
			i[52] ||
				(i[52] = d(
					'<p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs:dev</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --clean-cache</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>',
					3
				)),
			l(
				h,
				{ id: '0', data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }], 'tab-id': 'npm-to-138' },
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[30] || (i[30] = s('span', null, 'pnpm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[31] || (i[31] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[32] || (i[32] = s('span', null, 'npm', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[33] ||
							(i[33] = [
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
														' docs:dev'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --clean-cache'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[34] ||
							(i[34] = [
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
														' docs:dev'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --clean-cache'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
							i[35] ||
							(i[35] = [
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
														' run'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' docs:dev'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --clean-cache'
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
			i[53] ||
				(i[53] = d(
					'<p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: npm-to tabs=&quot;pnpm,yarn,npm,bun,deno&quot;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sh</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ci</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">```</span></span>\n<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>',
					3
				)),
			l(
				h,
				{
					id: '0',
					data: [{ id: 'pnpm' }, { id: 'yarn' }, { id: 'npm' }, { id: 'bun' }, { id: 'deno' }],
					'tab-id': 'npm-to-148',
				},
				{
					title0: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-pnpm' }),
						i[36] || (i[36] = s('span', null, 'pnpm', -1)),
					]),
					title1: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-yarn' }),
						i[37] || (i[37] = s('span', null, 'yarn', -1)),
					]),
					title2: a(({ value: e, isActive: t }) => [
						l(n, { name: 'logos:npm-icon' }),
						i[38] || (i[38] = s('span', null, 'npm', -1)),
					]),
					title3: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-bun' }),
						i[39] || (i[39] = s('span', null, 'bun', -1)),
					]),
					title4: a(({ value: e, isActive: t }) => [
						l(n, { name: 'vscode-icons:file-type-light-deno' }),
						i[40] || (i[40] = s('span', null, 'deno', -1)),
					]),
					tab0: a(
						({ value: e, isActive: t }) =>
							i[41] ||
							(i[41] = [
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
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --frozen-lockfile'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab1: a(
						({ value: e, isActive: t }) =>
							i[42] ||
							(i[42] = [
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
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --immutable'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab2: a(
						({ value: e, isActive: t }) =>
							i[43] ||
							(i[43] = [
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
														' ci'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab3: a(
						({ value: e, isActive: t }) =>
							i[44] ||
							(i[44] = [
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
														'bun'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --frozen-lockfile'
													),
												]),
											]),
										]),
									],
									-1
								),
							])
					),
					tab4: a(
						({ value: e, isActive: t }) =>
							i[45] ||
							(i[45] = [
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
														'deno'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#B56959', '--shiki-dark': '#C98A7D' } },
														' install'
													),
													s(
														'span',
														{ style: { '--shiki-light': '#A65E2B', '--shiki-dark': '#C99076' } },
														' --frozen'
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
		])
	)
}
const A = r(c, [
		['render', m],
		['__file', 'index.html.vue'],
	]),
	u = JSON.parse(
		'{"path":"/blog/guide/markdown/npm-to/","title":"npmTo 容器","lang":"zh-CN","frontmatter":{"title":"npmTo 容器","icon":"gg:npm","createTime":"2024/10/08 15:54:12","permalink":"/blog/guide/markdown/npm-to/","description":"概述 npmTo 容器用于将 npm 命令行转换为 pnpm / yarn / deno / bun 的命令行，并它们作为 代码块组呈现在页面。 在 ::: npm-to 容器中，只需要写 一次 npm 命令 代码块即可。 为什么需要 npmTo 容器 ？ 在我编写文档时，常常需要提供 pnpm / yarn / npm 等不同运行环境的命令，需要写多...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/blog/guide/markdown/npm-to/"}],["meta",{"property":"og:site_name","content":"前端"}],["meta",{"property":"og:title","content":"npmTo 容器"}],["meta",{"property":"og:description","content":"概述 npmTo 容器用于将 npm 命令行转换为 pnpm / yarn / deno / bun 的命令行，并它们作为 代码块组呈现在页面。 在 ::: npm-to 容器中，只需要写 一次 npm 命令 代码块即可。 为什么需要 npmTo 容器 ？ 在我编写文档时，常常需要提供 pnpm / yarn / npm 等不同运行环境的命令，需要写多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T09:08:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T09:08:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npmTo 容器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T09:08:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.23,"words":670},"git":{"updatedTime":1734512938000,"contributors":[{"name":"王亚坡","username":"王亚坡","email":"929721152@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/6d7f6e036626c48bd70f6d964494f974b5a02c1fd139d7f4e7d75536f0cf60a0?d=retro"}],"changelog":[{"hash":"b291780c200a860e8b6acb86e50f9f124f17597f","date":1734512938000,"email":"929721152@qq.com","author":"王亚坡","message":"初始化提交","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/b291780c200a860e8b6acb86e50f9f124f17597f"}]},"autoDesc":true,"filePathRelative":"notes/theme/blog/guide/markdown/npm-to.md","bulletin":false}'
	)
export { A as comp, u as data }
