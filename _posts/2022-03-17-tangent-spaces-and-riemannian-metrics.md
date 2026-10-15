---
layout: "post"
title: "Tangent Spaces and Riemannian Metrics"
date: "2022-03-17"
tags: ["math", "differential geometry"]
excerpt: "We now build the theory of tangent spaces, from that on Euclidean spaces to manifolds."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/03/17/tangent-spaces-and-derivations/", "/2022/03/31/riemannian-metric/"]
---

<div class="note-content" markdown="0">

<div id="sec:tangent" data-note-section="title">

</div>
<p>A tangent vector describes a direction in which a function can be differentiated at a point. In Euclidean space this is an ordinary directional derivative. On a manifold, a chart gives the same description locally, and the chain rule tells us how the components change when we choose another chart.</p>

<p>We use this transformation rule to construct the tangent bundle and the differential of a smooth map. A Riemannian metric then adds lengths and angles by choosing an inner product in each tangent space, smoothly in the base point.</p>

<h4 data-note-section="1" id="mathbb-rd">1. {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}</h4>
<p>Begin in an open Euclidean set, where tangent vectors and directional derivatives can be identified explicitly. Let {% raw %}<span class="math inline">\(x \in \mathbb R^d\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Omega \subset \mathbb R^d\)</span>{% endraw %} be an open set, and fix {% raw %}<span class="math inline">\(x_0 \in \Omega\)</span>{% endraw %}. Recall the usual definition of the tangent space of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} at {% raw %}<span class="math inline">\(x_0\)</span>{% endraw %}: we identify </p>

{% raw %}<div class="math display">\[T_{x_0} \Omega \cong \{x_0\} \times E ~~,~~ \text{where } E = \operatorname{span} \left( \left\{ \dpd[]{}{x_1}, \cdots, \dpd[]{}{x_d} \right\} \right) ~.\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(\Omega, \Omega&#x27;\subset \mathbb R^d\)</span>{% endraw %} are open, then, if {% raw %}<span class="math inline">\(f: \Omega \to \Omega&#x27;\)</span>{% endraw %} is differentiable, we can define the derivative {% raw %}<span class="math inline">\(\dif f(x_0)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(x_0 \in \Omega\)</span>{% endraw %} as the induced linear map between tangent spaces (under chosen coordinate systems), namely, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif f (x_0) &amp;:&amp; T_{x_0} \Omega &amp;\to&amp;&amp; T_{f(x_0)} \Omega&#x27; \\
    &amp;&amp; v^i \dpd{}{{x^i}} = v &amp;\mapsto&amp;&amp; v^i \dpd{{f^j}}{{x^i}} (x_0) \dpd{}{{f^j}}
    \end{aligned}\]</div>{% endraw %}
<p> where the Einstein summation convention is used above. Via this calculation, we have the (formal) formula for mapping between tangent spaces, and we will use the shorthand notation </p>

{% raw %}<div class="math display">\[\dif f(x) (v) = v^i \dpd{{f^j}}{{x^i}} (x)\]</div>{% endraw %}
<p> hereafter.</p>

<p>By definition, we have {% raw %}<span class="math inline">\(T \Omega = \Omega \times E \subset \Omega \times \mathbb R^d\)</span>{% endraw %}. It follows that {% raw %}<span class="math inline">\(T \Omega\)</span>{% endraw %} is an open subset of {% raw %}<span class="math inline">\(\mathbb R^d \times \mathbb R^d\)</span>{% endraw %}, i.e. it is a differentiable manifold.</p>

<div id="def:tangent-bundle-Rn" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1.</strong> For an open set {% raw %}<span class="math inline">\(\Omega\subset\mathbb R^d\)</span>{% endraw %}, its tangent bundle is the disjoint union {% raw %}<span class="math inline">\(T\Omega=\bigsqcup_{p\in\Omega}T_p\Omega\)</span>{% endraw %}, identified with {% raw %}<span class="math inline">\(\Omega\times\mathbb R^d\)</span>{% endraw %} by {% raw %}<span class="math inline">\((p,v)\)</span>{% endraw %}. The base point is part of the data: vectors in different fibres belong to different tangent spaces.</p>
</div>
<h4 data-note-section="2" id="manifolds">2. Manifolds</h4>
<p>Now, we can speak about what it means to differentiate on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} be an open set, and take {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathrm x : U \to \mathbb R^d\)</span>{% endraw %} be a chart. It follows that we can make the following identification via the chart {% raw %}<span class="math inline">\(\rm x\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
    T_p M \cong T_{\mathrm x(p)} \mathrm x(U) ~.
\end{aligned}\]</div>{% endraw %}
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2 (Identifying tangent vectors across charts).</strong> At {% raw %}<span class="math inline">\(p\in U\cap U'\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(x:U\to\mathbb R^d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x':U'\to\mathbb R^d\)</span>{% endraw %} be charts. Coordinate vectors {% raw %}<span class="math inline">\(v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v'\)</span>{% endraw %} represent the same tangent vector when</p>
<p> {% raw %}<div class="math display">\[v'=D(x'\circ x^{-1})_{x(p)}v.\]</div>{% endraw %}</p>
<p> This is a linear isomorphism, since differentiating the inverse transition gives the inverse matrix. The chain rule makes the identification transitive through a third chart; the identity transition and inverse transition give reflexivity and symmetry. Thus equivalence classes of coordinate vectors give a well-defined vector space {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}.</p>
</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (Directional derivatives).</strong> If {% raw %}<span class="math inline">\(w\in T_pM\)</span>{% endraw %} is represented by {% raw %}<span class="math inline">\(v\)</span>{% endraw %} in chart {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, define</p>
<p> {% raw %}<div class="math display">\[w(f)=D(f\circ x^{-1})_{x(p)}v\]</div>{% endraw %}</p>
<p> for smooth functions near {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. A change of chart contributes the inverse matrix in the differential of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and the forward matrix in {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, which cancel by the chain rule. Hence this definition is independent of the chart. It is linear in {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and satisfies {% raw %}<span class="math inline">\(w(fh)=f(p)w(h)+h(p)w(f)\)</span>{% endraw %}. The differential {% raw %}<span class="math inline">\(df_p\)</span>{% endraw %} is the linear map {% raw %}<span class="math inline">\(T_pM\to T_{f(p)}\mathbb R\cong\mathbb R\)</span>{% endraw %} given by {% raw %}<span class="math inline">\(w\mapsto w(f)\)</span>{% endraw %}, not a map {% raw %}<span class="math inline">\(M\to\mathbb R\)</span>{% endraw %}.</p>
</div>
<p>Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} be a differentiable map between differentiable manifolds of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e\)</span>{% endraw %} for {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, respectively. Let {% raw %}<span class="math inline">\(\dif F\)</span>{% endraw %} denote the differential of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} in local charts. For this, let {% raw %}<span class="math inline">\(\mathrm x : U \subset M \to \mathbb R^d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathrm y : V \subset N \to \mathbb R^e\)</span>{% endraw %}, so we have the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif F = \dif\, (y \circ F \circ x^{-1}) : \mathbb R^d \to \mathbb R^e ~.
\end{aligned}\]</div>{% endraw %}
<p> The differential is represented in coordinates by the Jacobian matrix. Let {% raw %}<span class="math inline">\((x^1,\cdots,x^d)\)</span>{% endraw %} be coordinates in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, and {% raw %}<span class="math inline">\((y^1,\cdots,y^e)\)</span>{% endraw %} be those in {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. As such, we have </p>

{% raw %}<div class="math display">\[F(x) = (F^1 (x^1,\cdots,x^d), \cdots, F^e (x^1,\cdots,x^d))\]</div>{% endraw %}
<p> in local coordinates. By preceding arguments, we can define {% raw %}<span class="math inline">\(\dif F (x) : T_x M \to T_{F(x)} N\)</span>{% endraw %} as an induced linear map between vector spaces. Furthermore, we can represent the transformation (between finite-dimensional Euclidean spaces!) using the following matrix: </p>

{% raw %}<div class="math display">\[\left( \dpd{{F^{\alpha}}}{{x^{i}}} \right)_{\alpha \in \llbracket e \rrbracket, i \in \llbracket d \rrbracket} ~.\]</div>{% endraw %}
<p> Clearly, on manifolds, we can also speak about base changes between tangent spaces. Suppose, under {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (x^1,\cdots,x^d) &amp;\mapsto (\psi^1,\cdots,\psi^d) ~, \\
    
    (F^1,\cdots,F^e) &amp;\mapsto (\varphi^1,\cdots,\varphi^e) ~.
\end{aligned}\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(\dif F\)</span>{% endraw %} in new coordinates can be represented by the following <em>change of basis</em> matrix: </p>

{% raw %}<span id="eq:change-of-basis"></span><div class="math display">\[
    \dpd{{\varphi^\beta}}{{\psi^j}} = \dpd{{\varphi^\beta}}{{F^\alpha}} \dpd{{F^\alpha}}{{x^i}} \dpd{{x^i}}{{\psi^j}} ~.\tag{1}\]</div>{% endraw %}
<p>With the understanding of <a href="#eq:change-of-basis" data-reference-type="eqref" data-reference="eq:change-of-basis">(1)</a>, we can speak about tangent bundles on manifolds, which are defined up to charts.</p>

<div id="def:tangent-bundle-manifold" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4.</strong> The tangent bundle is {% raw %}<span class="math inline">\(TM=\bigsqcup_{p\in M}T_pM\)</span>{% endraw %}. Concretely, take triples {% raw %}<span class="math inline">\((p,x,v)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(x:U\to\mathbb R^d\)</span>{% endraw %} is a chart with {% raw %}<span class="math inline">\(p\in U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v\in\mathbb R^d\)</span>{% endraw %}, and identify two triples with the same base point using the derivative transition in Remark 2. The projection sends the equivalence class of {% raw %}<span class="math inline">\((p,x,v)\)</span>{% endraw %} to {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Merely listing chart-vector pairs without this identification would count the same tangent vector many times.</p>
</div>
<p>It follows that </p>

{% raw %}<div class="math display">\[\Pi : T M \to M : (p, v) \mapsto p\]</div>{% endraw %}
<p> is a natural projection map we can define. The question is when if {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} a smooth map between {% raw %}<span class="math inline">\(TM\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. We can answer that in the positive.</p>

<div id="thm:TM-natural-2d-structure" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(TM\)</span>{% endraw %} admits the natural topology and structure of {% raw %}<span class="math inline">\(2d\)</span>{% endraw %}-dimensional manifold, and {% raw %}<span class="math inline">\(\Pi: TM \to M\)</span>{% endraw %} is smooth.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For each chart {% raw %}<span class="math inline">\(x:U\to\mathbb R^d\)</span>{% endraw %}, define</p>
<p> {% raw %}<div class="math display">\[\widetilde x:\Pi^{-1}(U)\longrightarrow x(U)\times\mathbb R^d,\qquad \widetilde x(p,w)=(x(p),v),\]</div>{% endraw %}</p>
<p> where {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is the coordinate representative of {% raw %}<span class="math inline">\(w\)</span>{% endraw %}. The equivalence relation makes this a bijection. On an overlap with chart {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(F=y\circ x^{-1}\)</span>{% endraw %}. The induced transition is</p>
<p> {% raw %}<div class="math display">\[\widetilde y\circ\widetilde x^{-1}(u,v)=(F(u),DF_u v).\]</div>{% endraw %}</p>
<p> It is smooth, and its inverse is the same expression for {% raw %}<span class="math inline">\(F^{-1}\)</span>{% endraw %}. Declare the sets {% raw %}<span class="math inline">\(\widetilde x^{-1}(O)\)</span>{% endraw %}, for Euclidean-open {% raw %}<span class="math inline">\(O\)</span>{% endraw %}, to be a basis; compatibility of the transitions makes each {% raw %}<span class="math inline">\(\widetilde x\)</span>{% endraw %} a homeomorphism onto its open image.</p>
<p>For Hausdorffness, vectors with distinct base points are separated by inverse images of disjoint base neighbourhoods; vectors in the same fibre lie in one bundle chart and are separated by disjoint coordinate neighbourhoods there. A second-countable manifold has a countable subatlas: choose a countable subcover of any atlas using a countable basis. Rational balls in each of the resulting countably many bundle charts provide a countable basis for {% raw %}<span class="math inline">\(TM\)</span>{% endraw %}. Thus this atlas gives a {% raw %}<span class="math inline">\(2d\)</span>{% endraw %}-dimensional smooth manifold, not just locally compatible coordinates. In these charts {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} is {% raw %}<span class="math inline">\((u,v)\mapsto u\)</span>{% endraw %}, so it is smooth. ◻</p>
</div>
<div id="result-6" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} can be covered by a single smooth chart. Then, {% raw %}<span class="math inline">\(T M\)</span>{% endraw %} is diffeomorphic to {% raw %}<span class="math inline">\(M \times \mathbb R^d\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(x:M\to\Omega\subset\mathbb R^d\)</span>{% endraw %} be the global chart. Define</p>
<p> {% raw %}<div class="math display">\[\Theta:TM\longrightarrow M\times\mathbb R^d,\qquad \Theta(p,w)=(p,dx_p(w)).\]</div>{% endraw %}</p>
<p> Its inverse sends {% raw %}<span class="math inline">\((p,v)\)</span>{% endraw %} to {% raw %}<span class="math inline">\((p,d(x^{-1})_{x(p)}v)\)</span>{% endraw %}. Both maps are smooth in the bundle coordinates of Theorem 5, and their composites are the identity by the chain rule. Thus {% raw %}<span class="math inline">\(TM\cong M\times\mathbb R^d\)</span>{% endraw %}. The intermediate coordinate space is {% raw %}<span class="math inline">\(\Omega\times\mathbb R^d\)</span>{% endraw %}; composing its first factor with {% raw %}<span class="math inline">\(x^{-1}\)</span>{% endraw %} is what produces the asserted target. ◻</p>
</div>
<h3 data-note-section="3" id="riemannian-metric">3. Riemannian Metric</h3>
<p>The smooth structure gives each tangent space a vector space structure, but it does not choose an inner product. To measure tangent vectors, we make this additional choice smoothly at every point. This is the role of a Riemannian metric.</p>

<div id="def:riemannian-metric" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7</strong>.  A <em>Riemannian metric</em> is a symmetric inner product defined on the tangent space. Specifically, {% raw %}<span class="math inline">\(g : T_p M \times T_p M \to \mathbb R\)</span>{% endraw %} is said to be a Riemannian metric if {% raw %}<span class="math inline">\(g\)</span>{% endraw %} depends smoothly on {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}.</p>

</div>
<p>In a chart on a {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional manifold, a Riemannian metric has smooth coefficients {% raw %}<span class="math inline">\(g_{ij}(p)=g_p(\partial_i,\partial_j)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(g_{ij}=g_{ji}\)</span>{% endraw %} and</p>
<p> {% raw %}<div class="math display">\[\sum_{i,j=1}^d g_{ij}(p)\xi^i\xi^j&gt;0\qquad\text{for every nonzero }\xi\in\mathbb R^d.\]</div>{% endraw %}</p>
<p> Positive definiteness is a condition on all nonzero vectors, not on pairs of distinct indices. The coordinate-change law below shows that smoothness in one chart implies smoothness in every compatible chart.</p>

<p>Now, it makes sense to discuss how the tangent vectors {% raw %}<span class="math inline">\(v, w \in T_p M\)</span>{% endraw %} relate to each other. Let {% raw %}<span class="math inline">\((v^1,\cdots,v^d)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((w^1,\cdots,w^d)\)</span>{% endraw %} be coordinate representations of {% raw %}<span class="math inline">\(v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, respectively. So, we can define an inner product </p>

{% raw %}<div class="math display">\[\langle v, w \rangle = g_{ij} (x(p)) v^i w^j\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(v = v^i \pd{}{{x^i}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w = w^j \pd{}{{x^j}}\)</span>{% endraw %}. In particular, this means {% raw %}<span class="math inline">\(\left\langle \pd{}{{x^i}}, \pd{}{{x^j}} \right\rangle = g_{ij}\)</span>{% endraw %}. This implies we have an induced norm </p>

{% raw %}<div class="math display">\[\lVert v \rVert \triangleq \sqrt{\langle v, v \rangle} ~.\]</div>{% endraw %}
<p> We can investigate the change in coordinates behaviour under a map {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(y = f(x)\)</span>{% endraw %} denote the new coordinates. Accordingly, we have {% raw %}<span class="math inline">\(v = (\widetilde v^1, \cdots, \widetilde v^d)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w = (\widetilde w^1, \cdots, \widetilde w^d)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\widetilde v^j = v^i \pd{{f^j}}{{x^i}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde w^j = w^i \pd{{f^j}}{{x^i}}\)</span>{% endraw %}. Furthermore, the following equivalence holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \langle v, w \rangle = h_{k\ell}(f(x)) \widetilde v^k \widetilde w^\ell = g_{ij} (x) v^i w^j ~.
\end{aligned}\]</div>{% endraw %}
<p> This suggests </p>

{% raw %}<div class="math display">\[\begin{aligned}
    g_{ij} (x) = h_{k\ell} (f(x)) \dpd{{f^k}}{{x^i}} \dpd{{f^\ell}}{{x^j}}
\end{aligned}\]</div>{% endraw %}
<p> for all {% raw %}<span class="math inline">\(v, w \in T_p M\)</span>{% endraw %}.</p>

<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8</strong>.  The Euclidean metric is defined via {% raw %}<span class="math inline">\(\langle v, w \rangle = \delta_{ij} v^i w^j\)</span>{% endraw %}.</p>

</div>
<p>We will use {% raw %}<span class="math inline">\(g(\dot,\dot)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle \cdot, \cdot \rangle\)</span>{% endraw %} to denote the Riemannian metric <em>interchangeably</em>. The next construction uses partitions of unity to establish the existence of <em>a</em> Riemannian metric on differentiable manifolds.</p>

<div id="prop:existence-gij" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>.  Every differentiable manifold can be equipped with a Riemannian metric.</p>

</div>
<div class="proof">
<p><em>Proof.</em> On each chart {% raw %}<span class="math inline">\(x_\alpha:U_\alpha\to\mathbb R^d\)</span>{% endraw %}, pull back the Euclidean metric:</p>
<p> {% raw %}<div class="math display">\[(g_\alpha)_p(v,w)=\langle (dx_\alpha)_pv,(dx_\alpha)_pw\rangle_{\mathbb R^d} =\sum_{i=1}^d dx_\alpha^i(v)\,dx_\alpha^i(w).\]</div>{% endraw %}</p>
<p> The differential of a chart is an isomorphism, so this form is positive definite. Let {% raw %}<span class="math inline">\(\{p_\alpha\}\)</span>{% endraw %} be a smooth partition of unity with locally finite supports and {% raw %}<span class="math inline">\(\operatorname{spt}p_\alpha\subset U_\alpha\)</span>{% endraw %}. Extend {% raw %}<span class="math inline">\(p_\alpha g_\alpha\)</span>{% endraw %} by zero off {% raw %}<span class="math inline">\(U_\alpha\)</span>{% endraw %}. This extension is smooth: every point outside the support has a neighbourhood where {% raw %}<span class="math inline">\(p_\alpha\)</span>{% endraw %} vanishes, including points on the boundary of the chart.</p>
<p>Define {% raw %}<span class="math inline">\(g=\sum_\alpha p_\alpha g_\alpha\)</span>{% endraw %}. Locally this is a finite sum of smooth symmetric bilinear forms. If {% raw %}<span class="math inline">\(v\in T_pM\)</span>{% endraw %} is nonzero, at least one {% raw %}<span class="math inline">\(p_\alpha(p)&gt;0\)</span>{% endraw %}, and for that index {% raw %}<span class="math inline">\((g_\alpha)_p(v,v)&gt;0\)</span>{% endraw %}; all other terms are nonnegative. Hence {% raw %}<span class="math inline">\(g_p(v,v)&gt;0\)</span>{% endraw %}. This proves smoothness, symmetry, bilinearity and positive definiteness. The zero vector has value zero, as required. ◻</p>
</div>
<p>Note that the construction in the proof of Proposition <a href="#prop:existence-gij" data-reference-type="ref" data-reference="prop:existence-gij">9</a> says nothing about uniqueness; there are, in general, many Riemannian metrics on a differentiable manifold. By way of nomenclature, the Riemannian metric is the <em>first fundamental form</em> of a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, i.e. an inner product on the tangent space. The <em>second fundamental form</em>, which measures the bending of an immersed submanifold, will be the subject of Section <a href="{% post_url 2022-12-14-the-second-fundamental-form-and-the-gauss-equations %}#sec:second-fundamental" data-reference-type="ref" data-reference="sec:second-fundamental">The Second Fundamental Form and the Gauss Equations</a>.</p>

<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong>.  Regarding notation of the Riemannian metric: we use {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle\cdot,\cdot\rangle\)</span>{% endraw %} interchangeably. Whenever we need to invoke the metric coefficients, we always use {% raw %}<span class="math inline">\(g\)</span>{% endraw %} to denote the metric. Elsewhere, {% raw %}<span class="math inline">\(\langle\cdot,\cdot\rangle\)</span>{% endraw %} is used.</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-03-04-topological-tools-for-manifolds %}">Topological Tools for Manifolds</a>; <a href="{% post_url 2022-12-14-the-second-fundamental-form-and-the-gauss-equations %}">The Second Fundamental Form and the Gauss Equations</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-03-04-topological-tools-for-manifolds %}">Topological Tools for Manifolds</a> · Next: <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}">Geodesics and the Energy Functional</a></p></nav>

</div>
