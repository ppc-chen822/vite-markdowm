import{_ as l,o as a,c as e,Q as o}from"./chunks/framework.2c66badb.js";const y=JSON.parse('{"title":"前端面经【八股文合集】","description":"","frontmatter":{"title":"前端面经【八股文合集】"},"headers":[],"relativePath":"1-skills/interview.md","filePath":"1-skills/interview.md","lastUpdated":null}'),s={name:"1-skills/interview.md"},t=o(`<h1 id="前端面经【八股文合集】" tabindex="-1">前端面经【八股文合集】 <a class="header-anchor" href="#前端面经【八股文合集】" aria-label="Permalink to &quot;前端面经【八股文合集】&quot;">​</a></h1><h2 id="javascript基础" tabindex="-1">javaScript基础 <a class="header-anchor" href="#javascript基础" aria-label="Permalink to &quot;javaScript基础&quot;">​</a></h2><h3 id="说一说javascript的数据类型" tabindex="-1">说一说javascript的数据类型 <a class="header-anchor" href="#说一说javascript的数据类型" aria-label="Permalink to &quot;说一说javascript的数据类型&quot;">​</a></h3><p>基本数据类型：string,number,boolean,null,undefined</p><ul><li>String: 文本字符串.</li><li>Number: 整数和浮点数.</li><li>Boolean: 表示 真 (true) / 伪 (false) 的两个特殊值.</li><li>Null: 表示空值.</li><li>Undefined: 表示未定义或者不存在.</li><li>Symbol: 表示独一无二的值, 可以保证不会与其他属性名产生冲突.</li><li>BigInt: 能够支持比 Number 类型的范围更大的整数值类型.</li></ul><p>引用数据类型：object</p><h3 id="如何判断一个变量是数组" tabindex="-1">如何判断一个变量是数组？ <a class="header-anchor" href="#如何判断一个变量是数组" aria-label="Permalink to &quot;如何判断一个变量是数组？&quot;">​</a></h3><ul><li>Array.isArray(arr)</li><li>arr instanceof Array</li><li>Object.prototype.toString.call(arr) === &#39;[object Array]&#39;</li><li>对象原型（通过原型链判断是否具有和数组同一原型链的顶端。） <ul><li><code>arr.__proto__ === Array.prototype</code></li></ul></li></ul><h3 id="数组去重如何实现" tabindex="-1">数组去重如何实现？ <a class="header-anchor" href="#数组去重如何实现" aria-label="Permalink to &quot;数组去重如何实现？&quot;">​</a></h3><ul><li>利用Set()+Array.from()</li><li>利用两层循环+数组的splice方法</li><li>利用数组的indexOf方法\\includes方法</li><li>利用数组的filter()+indexOf()</li></ul><blockquote><p><a href="https://juejin.cn/post/7048619686497353764" target="_blank" rel="noreferrer">JS数组去重的方式详细总结（7种）</a></p></blockquote><h3 id="javascript中的类型转换机制" tabindex="-1">JavaScript中的类型转换机制 <a class="header-anchor" href="#javascript中的类型转换机制" aria-label="Permalink to &quot;JavaScript中的类型转换机制&quot;">​</a></h3><ul><li>显示转换 <ul><li>Number、parselnt、String、Boolean</li></ul></li><li>隐式转换 <ul><li>比较运算符</li><li>算术运算符</li></ul></li></ul><h3 id="深拷贝与浅拷贝" tabindex="-1">深拷贝与浅拷贝 <a class="header-anchor" href="#深拷贝与浅拷贝" aria-label="Permalink to &quot;深拷贝与浅拷贝&quot;">​</a></h3><ul><li>基本类型数据保存在在栈内存中</li><li>引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中</li><li>实现浅拷贝<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  slice</span></span>
<span class="line"><span style="color:#E1E4E8;">  concat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  slice</span></span>
<span class="line"><span style="color:#24292E;">  concat</span></span></code></pre></div></li><li>实现深拷贝<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//弊端：会忽略undefined、symbol和函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  _.</span><span style="color:#B392F0;">cloneDeep</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//弊端：会忽略undefined、symbol和函数</span></span>
<span class="line"><span style="color:#24292E;">  _.</span><span style="color:#6F42C1;">cloneDeep</span><span style="color:#24292E;">()</span></span></code></pre></div><blockquote><p><a href="https://juejin.cn/post/68449037672202891534" target="_blank" rel="noreferrer">JavaScript深拷贝和浅拷贝看这篇就够了</a></p></blockquote></li></ul><h3 id="说一说javascript中的原型和原型链" tabindex="-1">说一说javaScript中的原型和原型链 <a class="header-anchor" href="#说一说javascript中的原型和原型链" aria-label="Permalink to &quot;说一说javaScript中的原型和原型链&quot;">​</a></h3><ul><li>原型：每一个构造函数都有一个<code>prototype</code>属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。</li><li>原型链：任何一个对象，都有原型对象，原型对象本身又是一个对象，所以原型对象也有自己的原型对象，这样一环扣一环就形成了一个链式结构，我们把这个链式结构称为：原型链。</li></ul><h3 id="prototype和-proto-区别是什么" tabindex="-1">prototype和<code>__proto__</code>区别是什么？ <a class="header-anchor" href="#prototype和-proto-区别是什么" aria-label="Permalink to &quot;prototype和\`__proto__\`区别是什么？&quot;">​</a></h3><ul><li>prototype是构造函数的属性。</li><li><code>__proto__ </code>是每个实例都有的属性，可以访问 [[prototype]] 属性。</li><li>实例的<code>__proto__</code> 与其构造函数的<code>prototype</code>指向的是同一个对象。</li></ul><h3 id="说一说javascript中的作用域和作用域链" tabindex="-1">说一说JavaScript中的作用域和作用域链 <a class="header-anchor" href="#说一说javascript中的作用域和作用域链" aria-label="Permalink to &quot;说一说JavaScript中的作用域和作用域链&quot;">​</a></h3><ul><li>作用域：作用域就是一个独立的地盘，让变量不会外泄、暴露出去。 <ul><li>全局作用域、函数作用域、块级作用域</li></ul></li><li>作用域链：当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域。</li></ul><h3 id="说一说javascript中的闭包" tabindex="-1">说一说JavaScript中的闭包 <a class="header-anchor" href="#说一说javascript中的闭包" aria-label="Permalink to &quot;说一说JavaScript中的闭包&quot;">​</a></h3><ul><li>闭包就是能够读取其他函数内部变量的函数。由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成&quot;定义在一个函数内部的函数&quot;。所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。</li><li>闭包会包含其他函数的作用域，会比其他函数占据更多的内存空间，不会在调用结束之后被垃圾回收机制回收，过度使用闭包会过度占用内存，造成内存泄漏。</li></ul><h3 id="typeof与instanceof" tabindex="-1">typeof与instanceof <a class="header-anchor" href="#typeof与instanceof" aria-label="Permalink to &quot;typeof与instanceof&quot;">​</a></h3><ul><li><code>typeof</code>会返回一个变量的基本类型，<code>instanceof</code>返回的是一个布尔值</li><li><code>instanceof</code>可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型</li><li><code>typeof</code>也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了function 类型以外，其他的也无法判断</li><li>如果需要通用检测数据类型，可以采用<code>Object.prototype.toString.cell()</code>，调用该方法，统一返回格式“[object xxx]”的字符串</li></ul><h3 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-label="Permalink to &quot;事件循环&quot;">​</a></h3><p>概念：事件循环是JavaScript执行上下文中的一种机制，用于处理异步操作。它的核心思想是将所有的异步任务放入一个队列中，然后按照队列中的顺序依次执行，直到队列为空为止。主线程从&quot;任务队列&quot;中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为<code>EventLoop</code>（事件循环）。</p><ol><li>宏任务,微任务:按照代码的书写顺序逐行执行,不需要耗时的代码，(耗时是相对的)，我们称为同步代码. 需要耗时的代码我们称为异步代码,异步代码分为，宏任务与微任务</li></ol><ul><li>宏任务：script(整体代码),setTimeout,setInterval,setImmediate(Node.js 环境),I/O,UI rendering</li><li>微任务：Promise.then,process.nextTick(Node.js 环境)</li></ul><ol start="2"><li>事件循环的顺序：(微任务在宏任务之前的执行)</li></ol><ul><li>首先执行所有的初始化同步代码；</li><li>执行过程中同步代码执行完毕后，执行所有的微任务；</li><li>执行宏任务中的一个任务，执行过程中同步代码执行完毕后，执行所有的微任务；</li><li>重复执行步骤3和步骤4，直到宏任务和微任务队列都为空。</li></ul><blockquote><p><a href="https://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noreferrer">事件循环</a><a href="https://juejin.cn/post/7344993022075469874" target="_blank" rel="noreferrer">javaScript没有微任务与宏任务</a></p></blockquote><h2 id="ecmascript6" tabindex="-1">ECMAScript6 <a class="header-anchor" href="#ecmascript6" aria-label="Permalink to &quot;ECMAScript6&quot;">​</a></h2><h3 id="var-let和const的区别" tabindex="-1">var,let和const的区别？ <a class="header-anchor" href="#var-let和const的区别" aria-label="Permalink to &quot;var,let和const的区别？&quot;">​</a></h3><ol><li>块级作用域： 块作用域由 <code>{ }</code>包括，<code>let</code> 和 <code>const</code> 具有块级作用域，<code>var</code> 不存在块级作用域。块级作用域解决了 <code>ES5</code> 中的两个问题： <ul><li>内层变量可能覆盖外层变量</li><li>用来计数的循环变量泄露为全局变量</li></ul></li><li>变量提升：<code>var</code> 存在变量提升，<code>let</code> 和 <code>const</code> 不存在变量提升，即在变量只能在声明之后使用，否在会报错。</li><li>给全局添加属性：浏览器的全局对象是 <code>window</code>，<code>Node</code> 的全局对象是 <code>global</code>。<code>var</code> 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 <code>let</code> 和 <code>const</code> 不会。</li><li>重复声明：<code>var</code> 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。<code>const</code> 和 <code>let</code> 不允许重复声明变量。</li><li>暂时性死区：在使用 <code>let</code>、<code>const</code> 命令声明变量之前，该变量都是不可用的。这在语法上，称为<strong>暂时性死区</strong>。使用 <code>var</code> 声明的变量不存在暂时性死区</li><li>初始值设置：在变量声明时，<code>var</code> 和 <code>let</code> 可以不用设置初始值。而 <code>const</code> 声明变量必须设置初始值。</li></ol><h3 id="javascript中处理异步的几种方法" tabindex="-1">javaScript中处理异步的几种方法？ <a class="header-anchor" href="#javascript中处理异步的几种方法" aria-label="Permalink to &quot;javaScript中处理异步的几种方法？&quot;">​</a></h3><ul><li>回调函数</li><li>Promise</li><li>Async/Await</li><li>Generator</li></ul><h3 id="说一说promise" tabindex="-1">说一说Promise <a class="header-anchor" href="#说一说promise" aria-label="Permalink to &quot;说一说Promise&quot;">​</a></h3><p>概念：Promise是异步编程的一种解决方案更加合理和更加强大</p><ul><li>状态 <ul><li><code>pending</code>（进行中） <code>fulfilled</code>（已成功）<code>rejected</code> （已失败）</li></ul></li><li>实例方法 <ul><li><code>then()</code> <code>catch()</code> <code>finally()</code></li></ul></li><li>构造函数的方法 <ol><li>all() 用于将多个 Promise实例，包装成一个新的 Promise实例 <ul><li>只有p1、p2、p3的状态都变成fulfilled,p的状态才会变成fulfilled</li><li>只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected</li></ul></li><li>race() 同样是将多个 Promise 实例，包装成一个新的 Promise 实例 <ul><li>只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变</li></ul></li><li>allSettled() 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例 <ul><li>只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束</li></ul></li><li>reject() Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected</li><li>resolve() 将现有对象转为 Promise对象</li></ol></li></ul><h3 id="说一说箭头函数" tabindex="-1">说一说箭头函数 <a class="header-anchor" href="#说一说箭头函数" aria-label="Permalink to &quot;说一说箭头函数&quot;">​</a></h3><ul><li>相比普通函数，箭头函数有更加简洁的语法。</li><li>箭头函数不绑定this，会捕获其所在上下文的this，作为自己的this。</li><li>使用call,apply,bind并不会改变箭头函数中的this指向。</li><li>箭头函数是匿名函数，不能作为构造函数，不可以使用new命令，否则抛出错误。</li><li>箭头函数没有原型对象prototype这个属性</li></ul><blockquote><p><a href="https://juejin.cn/post/7041055543984652319" target="_blank" rel="noreferrer">这一次，彻底搞懂箭头函数</a></p></blockquote><h2 id="vue系列" tabindex="-1">VUE系列 <a class="header-anchor" href="#vue系列" aria-label="Permalink to &quot;VUE系列&quot;">​</a></h2><h3 id="v-model双向绑定原理" tabindex="-1">v-model双向绑定原理 <a class="header-anchor" href="#v-model双向绑定原理" aria-label="Permalink to &quot;v-model双向绑定原理&quot;">​</a></h3><ul><li>通过 v-bind:value 绑定变量，每次输入内容的时候触发input事件</li><li>通过事件对象参数 event.target.value 获得输入的内容，并且把这个内容赋值变量</li></ul><h3 id="vue响应式原理" tabindex="-1">vue响应式原理 <a class="header-anchor" href="#vue响应式原理" aria-label="Permalink to &quot;vue响应式原理&quot;">​</a></h3><ul><li>Vue2.0实现MVVM(双向数据绑定)的原理是通过 Object.defineProperty 来劫持各个属性的setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</li><li>Vue 3.0实现响应式基于ES6的Proxy 区别： <ol><li>VUE2</li></ol><ul><li>基于Object.defineProperty，不具备监听数组的能力，需要重新定义数组的原型来达到响应式。</li><li>Object.defineProperty 无法检测到对象属性的添加和删除 。</li><li>由于Vue会在初始化实例时对属性执行getter/setter转化，所有属性必须在data对象上存在才能让Vue将它转换为响应式。</li><li>深度监听需要一次性递归，对性能影响比较大。</li></ul><ol start="2"><li>VUE3</li></ol><ul><li>基于Proxy和Reflect，可以原生监听数组，可以监听对象属性的添加和删除。</li><li>不需要一次性遍历data的属性，可以显著提高性能。</li><li>因为Proxy是ES6新增的属性，有些浏览器还不支持,只能兼容到IE11 。</li></ul><ol start="3"><li>生命周期的区别</li></ol><ul><li>Vue2.0 生命周期钩子函数执行顺序 <ul><li>beforeCreate -&gt; created -&gt; beforeMount -&gt; mounted -&gt; beforeUpdate -&gt; updated -&gt; beforeDestroy -&gt; destroyed</li></ul></li><li>Vue3.0 生命周期钩子函数执行顺序 <ul><li>setup -&gt; onBeforeMount -&gt; onMounted -&gt; onBeforeUpdate -&gt; onUpdated -&gt; onBeforeUnmount -&gt; onUnmounted</li></ul></li></ul></li></ul><h3 id="vue-router" tabindex="-1">Vue Router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;Vue Router&quot;">​</a></h3><ol><li>路由有几种模式？说说它们的区别？ <ol><li>hash模式：在浏览器中符号#，#以及#后面的字符称之为hash，用window.location.hash读取； <ul><li>特点：hash虽然在URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。</li></ul></li><li>history模式：history采用HTML5的新特性；提供六种修改Url 不刷新页面的方法 <ul><li>pushState(),使用新路径</li><li>replaceState()替换原来的路径</li><li>popState() 路径的回退</li><li>go() 向前或者向后改变路径</li><li>forward() 向前改变路径</li><li>back() 向后改变路径</li></ul></li></ol></li><li>router-link的属性有哪些？ <ul><li>to: 跳转的路径</li><li>replace: 是否替换当前路径</li><li>tag: 渲染的标签</li><li>active-class: 激活的class</li><li>exact: 是否精确匹配</li></ul></li><li>路由懒加载是什么意思？ <ul><li>路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块，只有在这个路由被访问到的时候，才加载对应的组件。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;about&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/about&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;../Views/About.vue&quot;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;about&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/about&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;../Views/About.vue&quot;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li>路由的属性有哪些？ <ul><li>name: 路由的名称</li><li>path: 路由的路径</li><li>component: 路由的组件</li><li>children: 子路由</li><li>redirect: 重定向</li><li>alias: 别名</li></ul></li><li>NotFound<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// /:pathMatch(.*)* 解析路径</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;NotFound&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: NotFound</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// /:pathMatch(.*)* 解析路径</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;NotFound&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: NotFound</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div></li><li>动态管理路由的方法？ <ul><li>router.addRoutes(routes)</li><li>router.removeRoutes(routes)</li><li>router.hasRoute(name) 检查路由是否存在</li><li>router.addRoute(parentOrName, route) 添加路由</li><li>router.removeRoute(name) 删除路由</li></ul></li><li>路由守卫有哪些？ <ol><li>全局守卫 <ul><li>router.beforeEach(to, from, next) （next在Vue3中不推荐使用）</li><li>router.afterEach(to, from)</li></ul></li><li>路由独享的守卫 <ul><li>beforeEnter</li></ul></li><li>组件内的守卫 <ul><li>beforeRouteEnter</li><li>beforeRouteUpdate</li><li>beforeRouteLeave</li></ul></li></ol></li></ol><h2 id="http系列" tabindex="-1">http系列 <a class="header-anchor" href="#http系列" aria-label="Permalink to &quot;http系列&quot;">​</a></h2><h3 id="从输入url到页面加载的全过程" tabindex="-1">从输入URL到页面加载的全过程？ <a class="header-anchor" href="#从输入url到页面加载的全过程" aria-label="Permalink to &quot;从输入URL到页面加载的全过程？&quot;">​</a></h3><ul><li>URL解析</li><li>DNS查询</li><li>TCP连接</li><li>http请求</li><li>响应请求</li><li>页面渲染</li></ul><blockquote><p><a href="https://vue3js.cn/interview/http/after_url.html#%E4%B8%80%E3%80%81%E7%AE%80%E5%8D%95%E5%88%86%E6%9E%90" target="_blank" rel="noreferrer">URL到页面加载的全过程</a></p></blockquote><h2 id="前端性能优化" tabindex="-1">前端性能优化 <a class="header-anchor" href="#前端性能优化" aria-label="Permalink to &quot;前端性能优化&quot;">​</a></h2><ul><li>页面加载及渲染过程的优化 <ul><li>避免多层css</li><li>避免频繁操作dom</li><li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。</li><li>合理使用v-if，v-for,避免频繁操作 DOM</li><li>图片加载优化（使用webp格式图片、设置适当的分辨率、使用雪碧图、使用占位图片）</li><li>事件委托，利用JS事件冒泡机制把原本需要绑定在子元素的响应事件（click、keydown……）委托给父元素，减少内存占用，减少事件注册。</li></ul></li><li>渲染完成后的页面交互优化 <ul><li>防抖节流</li></ul></li></ul><blockquote><p><a href="https://juejin.cn/post/7326268947069534234" target="_blank" rel="noreferrer">中高级前端工程师必备14种性能优化方案</a><br><a href="https://www.cnblogs.com/liyunxi/p/16699184.html" target="_blank" rel="noreferrer">前端必会的图片懒加载(三种方式)</a><br><a href="https://juejin.cn/post/7081615656184971301" target="_blank" rel="noreferrer">事件委托</a><br><a href="https://tools.ppcgq.top/repo/1-skills/dataApi.html#_2%E3%80%81%E9%98%B2%E6%8A%96" target="_blank" rel="noreferrer">防抖节流</a><br><a href="https://juejin.cn/post/7322032390574473235" target="_blank" rel="noreferrer">图片加载优化</a><br>、</p></blockquote><h2 id="移动端相关" tabindex="-1">移动端相关 <a class="header-anchor" href="#移动端相关" aria-label="Permalink to &quot;移动端相关&quot;">​</a></h2><h3 id="h5如何唤醒app" tabindex="-1">H5如何唤醒App <a class="header-anchor" href="#h5如何唤醒app" aria-label="Permalink to &quot;H5如何唤醒App&quot;">​</a></h3><ol><li>需要判断设备系统，安卓和iOS分别处理 <ul><li>安卓：Universal Links通用链接。</li><li>iOS：通过URL Scheme/Universal Links通用链接。</li></ul></li><li>需要判断浏览器类型，微信内置浏览器和浏览器分别处理</li><li>需要判断App是否已经安装，如果已经安装，则直接打开App，否则引导用户下载App</li></ol><blockquote><p><a href="https://blog.csdn.net/wupinlong/article/details/109953480" target="_blank" rel="noreferrer">H5唤醒App方案</a></p></blockquote>`,61),i=[t];function n(r,p,c,u,d,h){return a(),e("div",null,i)}const b=l(s,[["render",n]]);export{y as __pageData,b as default};
