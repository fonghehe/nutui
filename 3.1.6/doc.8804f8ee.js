import{e as a,o as t,G as n}from"./vendor.9cc7b6f2.js";const l={class:"markdown-body"},p=n(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u5217\u8868\u9879\uFF0C\u53EF\u7EC4\u6210\u5217\u8868\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Cell,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Cell).use(Icon);
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">&quot;\u526F\u6807\u9898\u63CF\u8FF0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u6D4B\u8BD5&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;testClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5706\u89D2\u8BBE\u7F6E 0&quot;</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-comment">// ...</span>
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> switchChecked = ref(<span class="hljs-literal">true</span>);
      <span class="hljs-keyword">const</span> testClick = <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
        Toast.text(<span class="hljs-string">&#39;\u70B9\u51FB\u4E8B\u4EF6&#39;</span>)
      };
      <span class="hljs-keyword">return</span> { testClick,switchChecked };
  }
}
<span class="hljs-comment">// ...</span>
</code></pre><h3>\u76F4\u63A5\u4F7F\u7528\u63D2\u69FD</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>  
</code></pre><h3>\u94FE\u63A5 | \u5206\u7EC4\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u94FE\u63A5 | \u5206\u7EC4\u7528\u6CD5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u94FE\u63A5&quot;</span> <span class="hljs-attr">is-link</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL \u8DF3\u8F6C&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;https://jd.com&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://jd.com&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8DEF\u7531\u8DF3\u8F6C \u2019/\u2018 &quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u7BAD\u5934\u533A\u57DF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u53F3\u4FA7\u7BAD\u5934\u533A\u57DF&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Switch&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:link</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switchChecked&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5DE6\u4FA7 Icon \u533A\u57DF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u5DE6\u4FA7 Icon \u533A\u57DF&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u56FE\u7247&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-icon&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>
</code></pre><h3>\u5355\u5143\u683C\u5C55\u793A\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5F20\u4E09&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u53EA\u5C55\u793A desc \uFF0C\u53EF\u901A\u8FC7 desc-text-align \u8C03\u6574\u5185\u5BB9\u4F4D\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">desc-text-align</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5F20\u4E09&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u540D\u79F0</td><td>String</td><td>-</td></tr><tr><td>sub-title</td><td>\u5DE6\u4FA7\u526F\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>\u53F3\u4FA7\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>desc-text-align</td><td>\u53F3\u4FA7\u63CF\u8FF0\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F <a href="https://www.w3school.com.cn/cssref/pr_text_text-align.asp">text-align</a></td><td>String</td><td>right</td></tr><tr><td>is-link</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7 <a href="#/icon">\u56FE\u6807\u540D\u79F0</a> \u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>-</td></tr><tr><td>round-radius</td><td>\u5706\u89D2\u534A\u5F84</td><td>Number</td><td>6px</td></tr><tr><td>url <code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301</code></td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td>String</td><td>-</td></tr><tr><td>to <code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301</code></td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u540C vue-router \u7684 <a href="https://router.vuejs.org/zh/api/#to">to \u5C5E\u6027</a> \u5C5E\u6027</td><td>String\uFF5CObject</td><td>-</td></tr><tr><td>replace <code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301</code></td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u4E8B\u4EF6</td><td>event:Event</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon <code>v3.1.4</code></td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7 icon \u533A\u57DF</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>link</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7 link \u533A\u57DF</td></tr></tbody></table>`,27),c=[p],j={setup(e,{expose:s}){return s({frontmatter:{}}),(r,d)=>(t(),a("div",l,c))}};export{j as default};
