import{_ as t,o as e,c as d,O as l}from"./chunks/framework.786f5604.js";const y=JSON.parse('{"title":"框架特性","description":"","frontmatter":{},"headers":[],"relativePath":"docs/quick-start/features.md","filePath":"docs/quick-start/features.md"}'),r={name:"docs/quick-start/features.md"},a=l('<h1 id="框架特性" tabindex="-1">框架特性 <a class="header-anchor" href="#框架特性" aria-label="Permalink to &quot;框架特性&quot;">​</a></h1><h2 id="一、集成" tabindex="-1">一、集成 <a class="header-anchor" href="#一、集成" aria-label="Permalink to &quot;一、集成&quot;">​</a></h2><ul><li>[x] 支持通过简单配置，快速完成 Nebula Graph 与 Springboot 的整合</li></ul><h2 id="二、单表-vertex、edge-操作-无需写-ngql-cypher" tabindex="-1">二、单表（Vertex、Edge）操作，无需写 <code>nGQL | cypher</code> <a class="header-anchor" href="#二、单表-vertex、edge-操作-无需写-ngql-cypher" aria-label="Permalink to &quot;二、单表（Vertex、Edge）操作，无需写  `nGQL | cypher`&quot;">​</a></h2><blockquote><p>用法参见【<a href="./../dev-example/dao-basic.html">使用基类编写</a>】</p></blockquote><table><thead><tr><th>API</th><th>用法说明</th></tr></thead><tbody><tr><td>selectById(ID id)</td><td>通过主键获取节点</td></tr><tr><td>selectByIds(Collection&lt;I&gt; ids)</td><td>根据 id 集合获取节点</td></tr><tr><td>selectBySelective(T entity)</td><td>按实体属性值查询</td></tr><tr><td>selectIdBySelectiveStringLike(T entity)</td><td>根据实体属性值查询，字符串属性使用模糊查询</td></tr><tr><td>selectByMap(Map&lt;String, Object&gt; param)</td><td>根据 map 参数查询</td></tr><tr><td>countByMap(Map&lt;String, Object&gt; param)</td><td>根据 map 参数统计条数</td></tr><tr><td>selectPage(Page&lt;T&gt; page)</td><td>分页查询</td></tr><tr><td>insert(T entity)</td><td>插入 Vertex，空值覆盖</td></tr><tr><td>insertSelective(T entity)</td><td>插入 Vertex，空值跳过</td></tr><tr><td>insertBatch(List&lt;T&gt; list)</td><td>批量插入 Vertex</td></tr><tr><td>updateById(T entity)</td><td>根据 id 值进行更新，空值覆盖</td></tr><tr><td>updateByIdSelective(T entity)</td><td>根据 id 值进行更新，空值跳过，保留数据库原值</td></tr><tr><td>updateByIdBatchSelective(List&lt;T&gt; entities)</td><td>批量更新，属性空值跳过，保留数据库原值</td></tr><tr><td>deleteWithEdgeById(I id)</td><td>根据 id 值，删除节点与关系</td></tr><tr><td>deleteById(I id)</td><td>根据 id 值，删除节点（保留悬挂边）</td></tr><tr><td>insertEdge(S startNode, R edge, E endNode)</td><td>插入关系</td></tr><tr><td>existsEdge(ID startId, Class edgeType, ID endId)</td><td>判断两个节点是否有关系</td></tr><tr><td>listStartNodes(Class edgeType, ID endId)</td><td>查找一个节点某种关系中的所有上游节点</td></tr><tr><td>listStartNodes(Class&lt;E&gt; startType, Class edgeType, ID endId)</td><td>查找一个节点某种关系中的特定类型的上游节点</td></tr><tr><td>startNode(Class edgeType, ID endId)</td><td>查找一个节点中，某种关系的唯一一个上游节点</td></tr><tr><td>startNode(Class&lt;E&gt; startType, Class edgeType, ID endId)</td><td>查找查找一个节点特定类型的上游节点</td></tr></tbody></table><h2 id="三、使用-xml-的方式-集中管理-ngql-cypher" tabindex="-1">三、使用 xml 的方式，集中管理 <code>nGQL | cypher</code> <a class="header-anchor" href="#三、使用-xml-的方式-集中管理-ngql-cypher" aria-label="Permalink to &quot;三、使用 xml 的方式，集中管理  `nGQL | cypher`&quot;">​</a></h2><blockquote><p>用法参见【<a href="./../dev-example/custom-crud.html">自定义nGQL</a>】</p></blockquote><p>扫描指定资源包，并获得 <code>nGQL | cypher</code> 模板，在模板的基础上做操作。</p><h3 id="一-参数替换" tabindex="-1">(一) 参数替换 <a class="header-anchor" href="#一-参数替换" aria-label="Permalink to &quot;(一) 参数替换&quot;">​</a></h3><ul><li>[x] 使用占位符为 <code>nGQL | cypher</code> 替换参数，并执行到数据库; <ul><li>编写查询脚本模板，搭配参数控制，实现动态查询</li><li>通过参数循环，实现批量操作</li></ul></li></ul><h3 id="二-通过-dao-接口的方法签名信息-对-resultset-进行处理-形成业务所需类型" tabindex="-1">(二) 通过 Dao 接口的方法签名信息，对 ResultSet 进行处理，形成业务所需类型 <a class="header-anchor" href="#二-通过-dao-接口的方法签名信息-对-resultset-进行处理-形成业务所需类型" aria-label="Permalink to &quot;(二) 通过 Dao 接口的方法签名信息，对 ResultSet 进行处理，形成业务所需类型&quot;">​</a></h3><ul><li>[x] 集合类型 <ul><li>Collection&lt;基本类型&gt;</li><li>Collection&lt;对象类型&gt; <code>Object类型参考下述Object的支持</code></li></ul></li><li>[x] 基本类型 <ul><li>String</li><li>Boolean</li><li>Number （Integer、Long、Float、Double、Byte、Short）。<strong>暂时只支持包装类</strong></li></ul></li><li>[x] 对象类型 <ul><li>Object</li><li>多列return值转换成 Map</li><li>多列return值转换成 POJO</li><li>支持Vertex类型转换成 POJO</li><li>支持Edge类型转换成 POJO</li></ul></li><li>[x] ResultSet 如不需要使用框架自带的结果处理，可直接在接口声明返回值 ResultSet 并自行处理</li></ul><h2 id="四、主键生成策略接口" tabindex="-1">四、主键生成策略接口 <a class="header-anchor" href="#四、主键生成策略接口" aria-label="Permalink to &quot;四、主键生成策略接口&quot;">​</a></h2><ul><li>[x] 提供主键生成器的埋点，开发者可自定义主键生成器。</li></ul>',15),i=[a];function o(s,c,n,h,u,p){return e(),d("div",null,i)}const b=t(r,[["render",o]]);export{y as __pageData,b as default};
