import{_ as o,o as e,c as t,b as s,d as a,e as p,a as l,r as c}from"./app.0388daed.js";const r="/docs/assets/01.5f3a703e.mp4",q=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{"title":"\u5FEB\u901F\u5F00\u59CB","sidebar":"auto"},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u5378\u8F7D","slug":"\u5378\u8F7D","link":"#\u5378\u8F7D","children":[]},{"level":2,"title":"\u66F4\u65B0","slug":"\u66F4\u65B0","link":"#\u66F4\u65B0","children":[]},{"level":2,"title":"\u5B9E\u4F8B\u4EE3\u7801","slug":"\u5B9E\u4F8B\u4EE3\u7801","link":"#\u5B9E\u4F8B\u4EE3\u7801","children":[]}],"relativePath":"components/app/start.md"}'),F={name:"components/app/start.md"},D=s("h1",{id:"\u5FEB\u901F\u5165\u95E8",tabindex:"-1"},[a("\u5FEB\u901F\u5165\u95E8 "),s("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5165\u95E8","aria-hidden":"true"},"#")],-1),y={id:"\u5B89\u88C5",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#",-1),d=l(`<div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pip install uiapp</span></span>
<span class="line"></span></code></pre></div>`,1),A={id:"\u5378\u8F7D",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#\u5378\u8F7D","aria-hidden":"true"},"#",-1),_=l(`<div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pip uninstall uiapp</span></span>
<span class="line"></span></code></pre></div><h2 id="\u66F4\u65B0" tabindex="-1">\u66F4\u65B0 <a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pip install -U uiapp</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B9E\u4F8B\u4EE3\u7801" tabindex="-1">\u5B9E\u4F8B\u4EE3\u7801 <a class="header-anchor" href="#\u5B9E\u4F8B\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u5982\u679C\u53EA\u6709\u4E00\u4E2A\u8BBE\u5907\u3001\u53EF\u4EE5\u4F7F\u7528start\u65B9\u6CD5\u5373\u53EF\u3001\u524D\u9898\u662F\u9700\u8981\u6709\u8BBE\u5907\u8FDE\u63A5\u4E14\u5FC5\u987B\u662Fdevice\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uiapp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u4E00\u4E2Aapp</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#676E95;"># \u4F20\u9012\u7684\u662Fapp\u7684package</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#676E95;"># \u4F20\u9012\u7684\u662Fapp\u7684activity</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">activity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.module_main.pad.ui.activity.NoteListActivity</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u901A\u8FC7id\u5B9A\u4F4D\u5143\u7D20\u5E76\u8FDB\u884C\u70B9\u51FB\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes:id/avatar_iv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># # \u901A\u8FC7class\u5B9A\u4F4D\u3001class\u4F1A\u6709\u5B58\u5728\u591A\u4E2A\u9ED8\u8BA4\u662F\u5B9A\u4F4D\u7B2C\u4E00\u4E2A\u627E\u5230\u7684class\u5143\u7D20\u3001\u4E00\u822C\u4E3A\u7D22\u5F150</span></span>
<span class="line"><span style="color:#676E95;"># app.element_by_class(classname=&quot;android.widget.LinearLayout&quot;).click()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_text</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BBE\u7F6E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5750\u6807\u5B9A\u4F4Dslide\u5982\u679C\u662F\u4E0B\u9762\u65B9\u5F0F\u4F7F\u7528\u5219\u65E0\u9700\u4F20\u9012\u8D77\u59CB\u5750\u6807\u3001\u76F4\u63A5\u8FDB\u884C\u4F20\u9012\u7ED3\u675F\u5750\u6807\u5373\u53EF</span></span>
<span class="line"><span style="color:#676E95;"># \u6700\u540E\u4E00\u4F4D\u662F\u6267\u884C\u6ED1\u52A8\u7684\u65F6\u95F4ms\u4E3A\u5355\u4F4D\u3001500ms\u5B8C\u6210\u6ED1\u52A8\u5230\u5750\u68071000,800</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_text</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7EB8\u5F20\u81EA\u7531\u79FB\u52A8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">slide</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ex</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">306</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">ey</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">timeout</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u76F4\u63A5\u4F7F\u7528\u5750\u6807\u8FDB\u884C\u6ED1\u52A8\u5C4F\u5E55\u64CD\u4F5C\u9700\u8981\u4F20\u9012\u56DB\u4E2A\u53C2\u6570 startX\uFF0CstartY\uFF0CendX\uFF0CendY</span></span>
<span class="line"><span style="color:#676E95;"># app.slide(sx=261,sy=671,ex=261,ey=1300,timeout=50)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7528\u5750\u6807\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u5B9A\u4F4D\u7CBE\u51C6\u4F46\u8981\u8003\u8651\u517C\u5BB9\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_coord</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">299</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">586</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5B9A\u4F4D\u7684\u5143\u7D20\u76F8\u5173\u7684\u6587\u672C</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes:id/language_ch_rb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5173\u95EDapp</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65AD\u5F00\u8BBE\u5907\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disconnect</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><video id="video" controls="" preload="none"><source id="mp4" src="`+r+'" type="video/mp4"></video>',6);function u(h,m,b,v,g,E){const n=c("Badge");return e(),t("div",null,[D,s("h2",y,[a("\u5B89\u88C5 "),p(n,{text:"\u63A8\u8350"}),a(),i]),d,s("h2",A,[a("\u5378\u8F7D"),p(n,{text:"\u63A8\u8350"}),a(),C]),_])}const f=o(F,[["render",u]]);export{q as __pageData,f as default};