import{e as a,o as t,G as n}from"./vendor.9cc7b6f2.js";const p={class:"markdown-body"},l=n(`<h1>Progress \u8FDB\u5EA6\u6761</h1><h3>\u4ECB\u7ECD</h3><p>\u5C55\u793A\u64CD\u4F5C\u6216\u4EFB\u52A1\u7684\u5F53\u524D\u8FDB\u5EA6\uFF0C\u6BD4\u5982\u4E0A\u4F20\u6587\u4EF6\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Progress,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Progress,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Progress);
app.use(Icon);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u9AD8\u5EA6\u548C\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;pink&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u767E\u5206\u6BD4\u4E0D\u663E\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:show-text</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u767E\u5206\u6BD4\u5916\u663E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">stroke-height</span>=<span class="hljs-string">&quot;24&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u767E\u5206\u6BD4\u5185\u663E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;24&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h2>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h2><p>\u5185\u7F6E <strong>small</strong>\uFF0C<strong>base</strong>\uFF0C<strong>large</strong> \u4E09\u79CD\u89C4\u683C\u4F9B\u4F7F\u7528\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">text-inside</span>=<span class="hljs-string">&quot;true&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;base&quot;</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">text-inside</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;70&quot;</span>  <span class="hljs-attr">text-inside</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u72B6\u6001\u663E\u793A</h3><pre><code class="language-html">//\u52A8\u6001\u5C55\u793A
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> 
   <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;30&quot;</span> 
   <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)&quot;</span> 
   <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
// \u5C55\u793Aicon
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;#f30&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;15&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;#1890ff&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;15&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>percentage</td><td>\u767E\u5206\u6BD4</td><td>Number</td><td>0</td></tr><tr><td>stroke-color</td><td>\u8FDB\u5EA6\u6761\u80CC\u666F\u8272</td><td>String</td><td>#f30</td></tr><tr><td>stroke-width</td><td>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>size</td><td>\u8FDB\u5EA6\u6761\u53CA\u6587\u5B57\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503Csmall/base/large</td><td>String</td><td>-</td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6761\u6587\u5B57\u5185\u5BB9</td><td>Boolean</td><td>true</td></tr><tr><td>text-inside</td><td>\u8FDB\u5EA6\u6761\u6587\u5B57\u663E\u793A\u4F4D\u7F6E(false:\u5916\u663E\uFF0Ctrue:\u5185\u663E)</td><td>Boolean</td><td>false</td></tr><tr><td>text-color</td><td>\u8FDB\u5EA6\u6761\u6587\u5B57\u989C\u8272\u8BBE\u7F6E</td><td>String</td><td>#333</td></tr><tr><td>status</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001,active(\u5C55\u793A\u52A8\u753B\u6548\u679C)/icon(\u5C55\u793Aicon\u6807\u7B7E)</td><td>String</td><td>text</td></tr><tr><td>icon-name</td><td>icon\u540D\u79F0</td><td>String</td><td>checked</td></tr><tr><td>icon-color</td><td>icon\u989C\u8272</td><td>String</td><td>#439422</td></tr></tbody></table>`,22),r=[l],d={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(t(),a("div",p,r))}};export{d as default};
