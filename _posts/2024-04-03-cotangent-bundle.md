---
layout: "post"
title: "Cotangent Bundle"
date: "2024-04-03"
tags: ["math", "differential geometry"]
excerpt: "By the ongoing discussion, it is not difficult to see the following."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<div id="cotangent-bundle" data-note-section="title">

</div>
<p>A tangent vector acts on a smooth function by directional differentiation. The differential of the function, in turn, is a linear functional on tangent vectors: a covector. Cotangent spaces collect these functionals, and the cotangent bundle lets them vary smoothly over the manifold.</p>

<p>We begin with duality in linear algebra, then construct the bundle and describe covector fields in local coordinates. Pullback will be the natural operation for transporting them along a smooth map.</p>

<p>As in linear algebra, let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a finite-dimensional real vector space. A <em>covector on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}</em> is a real-valued linear function on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. The space of all covectors on {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a real vector space, under pointwise scalar multiplication and addition. We call this space the <em>dual space of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}</em>, denoted {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}.</p>

<div id="lem:dual-basis-exists-kronecker" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a finite-dimensional real vector space. Let {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %} be a basis for {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(E^1,\cdots,E^n \in V^*\)</span>{% endraw %} be the covectors defined by {% raw %}<span class="math inline">\(E^i(e_j) = \delta_{ij}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\delta_{ij}\)</span>{% endraw %} is the Kronecker delta symbol. Then, {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %} is a basis for {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}. This is called the <em>dual basis to {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %}</em>. As such, {% raw %}<span class="math inline">\(\dim V^* = \dim V\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> It follows from assuming {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %} is a basis for {% raw %}<span class="math inline">\(V\)</span>{% endraw %} that, for all {% raw %}<span class="math inline">\(x \in V\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        x = \sum_{1 \leq k \leq n} e_k^* (x) e_k ~,
    
\end{aligned}\]</div>{% endraw %}
<p> for some functions {% raw %}<span class="math inline">\(e_1^*,\cdots,e_n^* : V \to \mathbb R\)</span>{% endraw %}. Clearly, {% raw %}<span class="math inline">\(e_k^* (e_i) = \delta_{ik}\)</span>{% endraw %} by inspection, and {% raw %}<span class="math inline">\(e_k^*\)</span>{% endraw %} is linear, so {% raw %}<span class="math inline">\(e_k^* \in V^*\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. It follows that, for any {% raw %}<span class="math inline">\(f \in V^*\)</span>{% endraw %} and by linearity of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        f(x) = f\left(\sum_{1 \leq k \leq n} e_k^*(x) e_k\right) = \sum_{1 \leq k \leq n} f(e_k) e_k^*(x)  ~,
    
\end{aligned}\]</div>{% endraw %}
<p> so these covectors span the dual. They are linearly independent because evaluating a zero linear combination at each basis vector gives every coefficient equal to zero. Thus {% raw %}<span class="math inline">\(\{e_1^*, \cdots, e_n^*\}\)</span>{% endraw %} forms a basis for {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}. ◻</p>

</div>
<p>Note that in general, any vector {% raw %}<span class="math inline">\(v = v^i e_i \in V\)</span>{% endraw %} can be written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    E^i (v) = v^j E^i (e_j) = v^j \delta_{ij} = v^i ~.
\end{aligned}\]</div>{% endraw %}
<p> Any covector {% raw %}<span class="math inline">\(\omega \in V^*\)</span>{% endraw %} can be written in terms of the dual basis as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \omega = \omega_i E^i ~, \text{where } \omega_i = \omega(e_i) ~.
\end{aligned}\]</div>{% endraw %}
<p> Therefore, it follows that {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} acts on {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %} via the formula {% raw %}<span class="math inline">\(\omega(v) = \omega_i v^i\)</span>{% endraw %}.</p>

<p>Between vector spaces {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, suppose {% raw %}<span class="math inline">\(A : V \to W\)</span>{% endraw %} is a linear map. We define the <em>dual map</em> {% raw %}<span class="math inline">\(A^* : W^* \to V^*\)</span>{% endraw %} via the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (A^* \omega)(v) = \omega(Av) ~~ \text{for any } \omega \in W^* \text{ and } v \in V ~.
\end{aligned}\]</div>{% endraw %}
<p> It remains to verify that {% raw %}<span class="math inline">\(A^*\omega\)</span>{% endraw %} is a linear functional on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. The verification is routine. Note that {% raw %}<span class="math inline">\(A^* \omega\)</span>{% endraw %} is a composition of linear maps {% raw %}<span class="math inline">\(\omega \circ A\)</span>{% endraw %}, therefore it is linear as a map from {% raw %}<span class="math inline">\(V \to \mathbb R\)</span>{% endraw %}. Take any {% raw %}<span class="math inline">\(\omega_1,\omega_2 \in W^*\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a, b \in \mathbb R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %}; then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (A^* (a \omega_1 + b \omega_2))(v) = (a \omega_1 + b \omega_2)(Av) = a \omega_1(Av) + b \omega_2(Av) ~,
\end{aligned}\]</div>{% endraw %}
<p> and </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (a A^* (\omega_1) + b A^* (\omega_2))(v) = a A^* (\omega_1)(v) + b A^* (\omega_2)(v) = a \omega_1(Av) + b \omega_2 (Av) ~,
\end{aligned}\]</div>{% endraw %}
<p> as desired.</p>

<div id="result-2" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  The dual map satisfies the properties</p>

<ol>
<li><p>{% raw %}<span class="math inline">\((A \circ B)^* = B^* \circ A^*\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\((\operatorname{id}_V)^*: V^* \to V^*\)</span>{% endraw %} is the identity map of {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p><strong>Proof of Lemma 2.</strong> For composable maps {% raw %}<span class="math inline">\(B:U\to V\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A:V\to W\)</span>{% endraw %}, a covector {% raw %}<span class="math inline">\(\omega\in W^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u\in U\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[((A\circ B)^*\omega)(u)=\omega(A(Bu))=(B^*(A^*\omega))(u).\]</div>{% endraw %}

<p>Evaluation at every {% raw %}<span class="math inline">\(u\)</span>{% endraw %} proves the first identity. Likewise {% raw %}<span class="math inline">\(((\operatorname{id}_V)^*\eta)(v)=\eta(v)\)</span>{% endraw %} proves the second. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>There is also the notion of a second dual space, defined simply as {% raw %}<span class="math inline">\(V^{**} = (V^*)^*\)</span>{% endraw %}. There is a natural, basis-independent map {% raw %}<span class="math inline">\(\xi(v) : V^* \to \mathbb R\)</span>{% endraw %}, defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \xi(v)(\omega) = \omega(v) ~~\text{for } \omega \in V^* ~.
\end{aligned}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a vector space, then {% raw %}<span class="math inline">\(\xi(v)(\omega)\)</span>{% endraw %} depends linearly on {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %}. To show this, let {% raw %}<span class="math inline">\(\omega_1, \omega_2 \in V^*\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \xi(v)(\omega_1+\omega_2) = (\omega_1+\omega_2)(v) = \omega_{1}(e_i) v^i + \omega_{2}(e_i) v^i ~.
\end{aligned}\]</div>{% endraw %}
<p>The same evaluation formula gives homogeneity in the covector, so {% raw %}<span class="math inline">\(\xi(v)\in V^{**}\)</span>{% endraw %}. Linearity in the vector follows directly: for real {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\xi(av+bw)(\omega)=\omega(av+bw)=a\xi(v)(\omega)+b\xi(w)(\omega).\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(\xi:V\to V^{**}\)</span>{% endraw %} is linear, independently of any chosen basis.</p>

<div id="result-3" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>.  For any finite-dimensional vector space {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, the map {% raw %}<span class="math inline">\(\xi : V \to V^{**}\)</span>{% endraw %} is an isomorphism.</p>

</div>
<div class="proof">
<p><em>Proof.</em> It suffices to verify that {% raw %}<span class="math inline">\(\xi\)</span>{% endraw %} is injective, because {% raw %}<span class="math inline">\(\dim V = \dim V^{**}\)</span>{% endraw %}. Take a nonzero element {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %}. Extend {% raw %}<span class="math inline">\(v\)</span>{% endraw %} to a basis for {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %} be the dual basis for {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\xi(v)(E^1)=E^1(v)=E^1(e_1)=1\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\xi(v)\neq 0\)</span>{% endraw %}. ◻</p>

</div>
<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4</strong>.  There is a canonical identification of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} with its second dual, when {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is finite-dimensional. There is no such canonical identification between {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V^*\)</span>{% endraw %}.</p>

</div>
<p>Apply the dual-space construction separately to each tangent space. Coordinate changes determine how the resulting covectors fit together.</p>

<div id="result-5" class="definition" data-note-number="5" data-note-kind="Definition">
<p><strong>Definition 5</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. The <em>cotangent space at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}</em> is defined as </p>

{% raw %}<div class="math display">\[T_p^* M = (T_p M)^* ~.\]</div>{% endraw %}
<p> Elements of {% raw %}<span class="math inline">\(T_p^* M\)</span>{% endraw %} are called <em>tangent covectors at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}</em>.</p>

</div>
<p>Given smooth local coordinates on an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %}, at each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\{\pd{}{{x^i}}\big|_p\}\)</span>{% endraw %} gives rise to a dual basis for {% raw %}<span class="math inline">\(T_p^* M\)</span>{% endraw %}. Call this dual basis {% raw %}<span class="math inline">\(\{d^{\: i}\}\)</span>{% endraw %}. As such, any covector {% raw %}<span class="math inline">\(\omega \in T_p^* M\)</span>{% endraw %} has the unique representation as </p>

{% raw %}<div class="math display">\[\omega = \omega_i d^{\:i}\big|_p ~,~ \text{where } \omega_i = \omega \left( \dpd{}{{x^i}}\bigg|_p \right) ~.\]</div>{% endraw %}
<p> We can now speak of transitioning between different coordinate systems whose domains contain {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\{{\widetilde x}^j\}\)</span>{% endraw %} denote another coordinate system. Then, straightforward calculations show that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dpd{}{{x^i}}\bigg|_p = \dpd{{\widetilde{x}^j}}{{x^i}} (p) \dpd{}{{\widetilde{x}^j}}\bigg|_p ~.
\end{aligned}\]</div>{% endraw %}
<p> This means for {% raw %}<span class="math inline">\(\omega \in T^*_p M\)</span>{% endraw %}, we have the representations {% raw %}<span class="math inline">\(\omega = \omega_i d^{\: i}\big|_p = \widetilde \omega_j \widetilde d^j\big|_p\)</span>{% endraw %}, and </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \omega_i = \omega \left( \dpd{{\widetilde x}^j}{{x^i}} (p) \dpd{}{{\widetilde x}^j}\bigg|_p \right) = \dpd{{\widetilde x}^j}{{x^i}} (p) \omega \left( \dpd{}{{\widetilde x}^j}\bigg|_p \right) = \dpd{{\widetilde x}^j}{{x^i}} (p) \widetilde \omega_j ~.
\end{aligned}\]</div>{% endraw %}
<p>On an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}, given any smooth local coordinates {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %}, we have the basis dual to {% raw %}<span class="math inline">\(\{\pd{}{{x^i}}\}\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\{d^{\: i}\}\)</span>{% endraw %}. This defines maps {% raw %}<span class="math inline">\(d^1,\cdots,d^n : U \to T^* M\)</span>{% endraw %}. These are called <em>coordinate covector fields</em>. The following result is standard.</p>

<div id="prop:cotangent-bundle-2d-tangent-structure" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. With its standard projection map and the natural vector space structure on each fibre, the cotangent bundle {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} has a <em>unique</em> topology and smooth structure making it into a differentiable vector bundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %} over {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, for which all coordinate covector fields are smooth local sections.</p>

</div>
<div class="proof">
<p><em>Proof.</em> We will prove this in two parts: the existence of such a topology and smooth structure, and its uniqueness. Let {% raw %}<span class="math inline">\(\pi : T^* M \to M\)</span>{% endraw %} denote the standard projection map given by {% raw %}<span class="math inline">\(\pi(\omega) = p\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(\omega \in T_p^* M\)</span>{% endraw %}.</p>

<p><strong>Existence:</strong> Let {% raw %}<span class="math inline">\(\mathscr{A} = \{(U_\alpha, x_\alpha)\}\)</span>{% endraw %} be a smooth atlas for {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(x_\alpha(p) = (x^1(p), \cdots, x^n(p))\)</span>{% endraw %}. For each chart {% raw %}<span class="math inline">\((U_\alpha, x_\alpha)\)</span>{% endraw %}, the coordinate covector fields {% raw %}<span class="math inline">\(\{d^{\: 1}, \cdots, d^{\: n}\}\)</span>{% endraw %} form a basis for {% raw %}<span class="math inline">\(T_p^* M\)</span>{% endraw %} at every {% raw %}<span class="math inline">\(p \in U_\alpha\)</span>{% endraw %}. We define a bijection {% raw %}<span class="math inline">\(\varphi_\alpha : \pi^{-1}(U_\alpha) \to x_\alpha(U_\alpha) \times \mathbb R^n \subset \mathbb R^{2n}\)</span>{% endraw %} by mapping each covector {% raw %}<span class="math inline">\(\omega = \omega_i d^{\: i}\big|_p\)</span>{% endraw %} to its natural coordinates: </p>

{% raw %}<div class="math display">\[\varphi_\alpha \left( \omega_i d^{\: i}\big|_p \right) = (x^1(p), \cdots, x^n(p), \omega_1, \cdots, \omega_n) ~.\]</div>{% endraw %}
<p>To verify that this collection of maps forms a smooth atlas for {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %}, we must examine the transition maps between overlapping charts. Consider two charts {% raw %}<span class="math inline">\((U, \{x^i\})\)</span>{% endraw %} and {% raw %}<span class="math inline">\((V, \{\widetilde x^j\})\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with non-empty intersection, and let {% raw %}<span class="math inline">\(\varphi_U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varphi_V\)</span>{% endraw %} be their respective natural coordinate charts for {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %}. The transition map {% raw %}<span class="math inline">\(\varphi_V \circ \varphi_U^{-1}\)</span>{% endraw %} maps the coordinates {% raw %}<span class="math inline">\((x^1, \cdots, x^n, \omega_1, \cdots, \omega_n)\)</span>{% endraw %} to {% raw %}<span class="math inline">\((\widetilde x^1, \cdots, \widetilde x^n, \widetilde \omega_1, \cdots, \widetilde \omega_n)\)</span>{% endraw %}. As derived previously, the components of a covector transform as {% raw %}<span class="math inline">\(\omega_i = \dpd{{\widetilde x}^j}{{x^i}} (p) \widetilde \omega_j\)</span>{% endraw %}. Multiplying by the inverse Jacobian matrix yields the transformation for {% raw %}<span class="math inline">\(\widetilde \omega_j\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\widetilde \omega_j = \dpd{x^i}{{\widetilde x}^j} (p) \omega_i ~.\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a differentiable manifold, the coordinate transition map {% raw %}<span class="math inline">\(x \mapsto \widetilde x\)</span>{% endraw %} is a smooth diffeomorphism, meaning its partial derivatives {% raw %}<span class="math inline">\(\dpd{x^i}{{\widetilde x}^j}\)</span>{% endraw %} are smooth functions. Thus, the transition map for {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\varphi_V \circ \varphi_U^{-1} (x, \omega) = \left( \widetilde x^1(x), \cdots, \widetilde x^n(x), \dpd{x^i}{{\widetilde x}^1} (x) \omega_i, \cdots, \dpd{x^i}{{\widetilde x}^n} (x) \omega_i \right) ~.\]</div>{% endraw %}
<p> This mapping is smooth because its first {% raw %}<span class="math inline">\(n\)</span>{% endraw %} components are smooth functions of {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, and its last {% raw %}<span class="math inline">\(n\)</span>{% endraw %} components are linear in {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} with coefficients that are smoothly varying functions of {% raw %}<span class="math inline">\(x\)</span>{% endraw %}.</p>

<p>By the Vector Bundle Construction Lemma (or Chart Lemma, Lemma <a href="{% post_url 2024-03-20-vector-bundles %}#lem:vector-bundle-chart-existence" data-reference-type="ref" data-reference="lem:vector-bundle-chart-existence">4</a>), the existence of these bijective maps whose transition functions are smooth and fibre-wise linear guarantees that we can endow {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} with a unique topology and smooth structure. In this structure, {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} is smooth, {% raw %}<span class="math inline">\(\pi^{-1}(U_\alpha)\)</span>{% endraw %} are open sets, and the maps {% raw %}<span class="math inline">\(\varphi_\alpha\)</span>{% endraw %} are smooth diffeomorphisms. This makes {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} a differentiable vector bundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %} over {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<p>Furthermore, under this constructed smooth structure, the coordinate covector field {% raw %}<span class="math inline">\(d^{\: j}\)</span>{% endraw %} on {% raw %}<span class="math inline">\(U_\alpha\)</span>{% endraw %} maps to the natural coordinates {% raw %}<span class="math inline">\((x^1(p), \cdots, x^n(p), 0, \cdots, 1, \cdots, 0)\)</span>{% endraw %}, where the {% raw %}<span class="math inline">\(1\)</span>{% endraw %} is strictly in the {% raw %}<span class="math inline">\((n+j)\)</span>{% endraw %}-th position. The base coordinate functions are smooth and the fibre components are constant, so the entire coordinate representation is smooth. Therefore, the coordinate covector fields are explicitly smooth local sections.</p>

<p><strong>Uniqueness:</strong> Suppose {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} is endowed with any topology and smooth structure making it a rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %} differentiable vector bundle over {% raw %}<span class="math inline">\(M\)</span>{% endraw %} for which all coordinate covector fields {% raw %}<span class="math inline">\(\{d^{\: i}\}\)</span>{% endraw %} are smooth local sections. Let {% raw %}<span class="math inline">\((U, \{x^i\})\)</span>{% endraw %} be any coordinate chart on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. By hypothesis, {% raw %}<span class="math inline">\(\{d^{\: 1}, \cdots, d^{\: n}\}\)</span>{% endraw %} are smooth local sections over {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Since they form a basis for {% raw %}<span class="math inline">\(T_p^* M\)</span>{% endraw %} at each {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}, they form a smooth local frame for the vector bundle over {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. By the standard properties of vector bundles, any smooth local frame uniquely defines a smooth local trivialization {% raw %}<span class="math inline">\(\Psi : U \times \mathbb R^n \to \pi^{-1}(U)\)</span>{% endraw %} given by </p>

{% raw %}<div class="math display">\[\Psi(p, c_1, \cdots, c_n) = c_i d^{\: i}\big|_p ~.\]</div>{% endraw %}
<p> The inverse of this diffeomorphism, mapping into {% raw %}<span class="math inline">\(\mathbb R^{2n}\)</span>{% endraw %} via the chart on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, is precisely the natural coordinate chart {% raw %}<span class="math inline">\(\varphi_U\)</span>{% endraw %} we constructed. Because the topology and smooth structure of a manifold are determined by its maximal atlas of smooth compatible charts, and any such vector bundle structure must admit these exact natural charts as smooth diffeomorphisms, the alternative structure has the same charts as the constructed one, so the two structures agree. ◻</p>

</div>
<p>As is the case with tangent bundles, on any open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} and with any smooth local coordinates {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %}, we can write down a smooth coordinate chart for {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %}, as </p>

{% raw %}<div class="math display">\[\varphi : \pi^{-1} (U) \to \mathbb R^{2n} : \omega_i d^{\: i}\big|_p \mapsto (x^1(p), \cdots, x^n(p), \omega_1, \cdots, \omega_n) ~.\]</div>{% endraw %}
<p> We call {% raw %}<span class="math inline">\((x^i, \omega_i)\)</span>{% endraw %} the <em>natural coordinates for {% raw %}<span class="math inline">\(T^*M\)</span>{% endraw %} associated with {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %}</em>. Terminology-wise, a (local or global) section of {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} is called a <em>covector field</em>, or a <em>(differential) 1-form</em>. Following standard ideas, there are several ways to check for the smoothness of a covector field.</p>

<div id="prop:smoothness-characterization-covector-fields" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong> (Smoothness criteria for covector fields).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(\omega : M \to T^* M\)</span>{% endraw %} be a covector field. The following statements are equivalent:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth;</p></li>
<li><p>In every smooth coordinate chart, the component functions of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} are smooth;</p></li>
<li><p>Each point of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is in some coordinate chart in which {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} has smooth component functions;</p></li>
<li><p>For every smooth vector field {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}, the function {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(M\)</span>{% endraw %};</p></li>
<li><p>For every open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}, <em>and</em> every smooth vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, the function {% raw %}<span class="math inline">\(\omega(X) : U \to \mathbb R\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> We will prove the equivalence of these statements by establishing the cyclic chain of implications (a) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (b) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (c) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (d) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (e) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (a).</p>

<p><strong>(a) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (b):</strong> Suppose {% raw %}<span class="math inline">\(\omega: M \to T^* M\)</span>{% endraw %} is a smooth covector field (a smooth section). Let {% raw %}<span class="math inline">\((U, \{x^i\})\)</span>{% endraw %} be any smooth coordinate chart on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. The natural coordinates on {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} associated with {% raw %}<span class="math inline">\(U\)</span>{% endraw %} are given by the chart {% raw %}<span class="math inline">\(\varphi : \pi^{-1}(U) \to \mathbb{R}^{2n}\)</span>{% endraw %}, mapping {% raw %}<span class="math inline">\(\eta = \eta_i d^{\:i}\big|_p \mapsto (x^1(p), \dots, x^n(p), \eta_1, \dots, \eta_n)\)</span>{% endraw %}. The local representation of the section {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} mapped in these charts is {% raw %}<span class="math inline">\(\varphi \circ \omega : U \to \mathbb{R}^{2n}\)</span>{% endraw %}, given by {% raw %}<span class="math inline">\(p \mapsto (x^1(p), \dots, x^n(p), \omega_1(p), \dots, \omega_n(p))\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is a smooth map between manifolds, its coordinate representation must be smooth. Therefore, its individual component functions {% raw %}<span class="math inline">\(\omega_i : U \to \mathbb{R}\)</span>{% endraw %} are necessarily smooth.</p>

<p><strong>(b) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (c):</strong> This implication is immediate. Because {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a differentiable manifold, it is covered by an atlas of smooth coordinate charts. Thus, each point {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} is contained in at least one such coordinate chart, and by (b), the component functions of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} in this chart are smooth.</p>

<p><strong>(c) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (d):</strong> Suppose (c) holds, and let {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %} be a globally defined smooth vector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. To show that the function {% raw %}<span class="math inline">\(\omega(X): M \to \mathbb R\)</span>{% endraw %} is smooth, it suffices to establish that it is smooth in an open neighborhood of every point {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. By (c), there exists a smooth coordinate chart {% raw %}<span class="math inline">\((U, \{x^i\})\)</span>{% endraw %} containing {% raw %}<span class="math inline">\(p\)</span>{% endraw %} in which {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} can be written locally as {% raw %}<span class="math inline">\(\omega = \omega_i d^{\: i}\)</span>{% endraw %}, where each component {% raw %}<span class="math inline">\(\omega_i\)</span>{% endraw %} is a smooth function on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. In this same chart, the vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} has the local representation {% raw %}<span class="math inline">\(X = X^j \dpd{}{{x^j}}\)</span>{% endraw %}, where the components {% raw %}<span class="math inline">\(X^j\)</span>{% endraw %} are also smooth functions on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Evaluating {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(U\)</span>{% endraw %} yields </p>

{% raw %}<div class="math display">\[\omega(X) = \left( \omega_i d^{\: i} \right) \left( X^j \dpd{}{{x^j}} \right) = \omega_i X^j \delta^i_j = \omega_i X^i ~.\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\omega_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X^i\)</span>{% endraw %} are smooth functions on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, their finite sum of products {% raw %}<span class="math inline">\(\omega_i X^i\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Thus, {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} is smooth in a neighborhood of every point {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, meaning it is smooth globally on all of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<p><strong>(d) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (e):</strong> Suppose (d) holds. Let {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} be an arbitrary open subset, and let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a smooth vector field defined on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. We want to show that {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}. We can choose a smooth bump function {% raw %}<span class="math inline">\(\rho: M \to \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\rho \equiv 1\)</span>{% endraw %} on some open neighborhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\overline{V} \subset U\)</span>{% endraw %}, and with {% raw %}<span class="math inline">\(\operatorname{supp}(\rho) \subset U\)</span>{% endraw %}. We then define a global vector field {% raw %}<span class="math inline">\(\widetilde X \in \mathscr{X}(M)\)</span>{% endraw %} by </p>

{% raw %}<div class="math display">\[\widetilde X(q) = \begin{cases}
            \rho(q) X(q) &amp; \text{if } q \in U ~, \\
            0 &amp; \text{if } q \notin U ~.
        \end{cases}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} is a globally smooth vector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, assumption (d) guarantees that {% raw %}<span class="math inline">\(\omega(\widetilde X)\)</span>{% endraw %} is a globally smooth function on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. On the neighborhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\rho \equiv 1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\widetilde X = X\)</span>{% endraw %}, which implies that {% raw %}<span class="math inline">\(\omega(X) = \omega(\widetilde X)\)</span>{% endraw %} exactly on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} is smooth at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %} was chosen arbitrarily, {% raw %}<span class="math inline">\(\omega(X)\)</span>{% endraw %} is smooth everywhere on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p>

<p><strong>(e) {% raw %}<span class="math inline">\(\implies\)</span>{% endraw %} (a):</strong> Suppose (e) holds. To show that {% raw %}<span class="math inline">\(\omega : M \to T^* M\)</span>{% endraw %} is smooth globally, it suffices to show that its local representation in any natural coordinate chart {% raw %}<span class="math inline">\((x^i, \omega_i)\)</span>{% endraw %} associated with a smooth coordinate chart {% raw %}<span class="math inline">\((U, \{x^i\})\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is smooth. This holds if and only if the component functions {% raw %}<span class="math inline">\(\omega_i : U \to \mathbb R\)</span>{% endraw %} are smooth. The coordinate vector fields {% raw %}<span class="math inline">\(X_j = \dpd{}{{x^j}}\)</span>{% endraw %} are naturally smooth vector fields defined on the open subset {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. By (e), the function {% raw %}<span class="math inline">\(\omega(X_j)\)</span>{% endraw %} must be smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. However, by the definition of the dual basis, {% raw %}<span class="math inline">\(\omega(X_j) = \omega\left(\dpd{}{{x^j}}\right) = \omega_j\)</span>{% endraw %}. Thus, the component functions {% raw %}<span class="math inline">\(\omega_j\)</span>{% endraw %} are smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Consequently, the local representation of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth on every chart mapping {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, which formally establishes that {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is a smooth map. ◻</p>

</div>
<p>As before, we can build frames using an ordered tuple of covector fields. The definitions are analogous to those for frames: a <em>local coframe for {% raw %}<span class="math inline">\(M\)</span>{% endraw %} over an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}</em> is an ordered {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-tuple of covector fields, {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(\{E^i\big|_p\}\)</span>{% endraw %} form a basis for {% raw %}<span class="math inline">\(T_p^* M\)</span>{% endraw %} at each {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(U=M\)</span>{% endraw %}, then this is called a <em>global coframe</em>. The coordinate covector fields form the <em>coordinate coframe</em>. The desired smoothness property of the coordinate coframe follows from the fact that its component functions in the given chart are <em>constants</em>.</p>

<p>If we have a local frame for {% raw %}<span class="math inline">\(TM\)</span>{% endraw %}, say, {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %}, then there is a uniquely determined local coframe, {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %}, that is the dual basis to {% raw %}<span class="math inline">\(\{e_1|_p,\cdots,e_n|_p\}\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}. The equivalent formulation of this statement is {% raw %}<span class="math inline">\(E^i(e_j) = \delta_{ij}\)</span>{% endraw %}. This coframe is called the <em>coframe dual to {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %}</em>. There is an analogous definition for if we start with a local coframe; the uniquely determined local frame is called the <em>frame dual to {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %}</em>. This uniqueness in the determination of the local (co)frames gives rise to the following statement.</p>

<div id="lem:local-frame-smooth-iff-local-coframe-smooth" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. Let {% raw %}<span class="math inline">\(\{e_1,\cdots,e_n\}\)</span>{% endraw %} be a local frame over an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %} denote its dual coframe. Then, {% raw %}<span class="math inline">\(\{e_i\}\)</span>{% endraw %} is smooth if and only if {% raw %}<span class="math inline">\(\{E^i\}\)</span>{% endraw %} is smooth.</p>

</div>
<div class="proof">
<p><em>Proof.</em> To prove this statement, it suffices to show that for each {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}, the local frame {% raw %}<span class="math inline">\(\{e_i\}\)</span>{% endraw %} is smooth in a neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, if and only if {% raw %}<span class="math inline">\(\{E^i\}\)</span>{% endraw %} is. This can be done with the help of smooth local coordinate charts. Let {% raw %}<span class="math inline">\((V,\{x^i\})\)</span>{% endraw %} denote a smooth local coordinate chart around {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}, chosen such that {% raw %}<span class="math inline">\(p \in V \subset U\)</span>{% endraw %}. Then, in {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, we can write {% raw %}<span class="math inline">\(e_i = a_i^k \pd{}{{x^k}}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(E^j = b_\ell^j d^\ell\)</span>{% endraw %}. Here, {% raw %}<span class="math inline">\((a_i^k)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((b_\ell^j)\)</span>{% endraw %} are matrices of real-valued functions defined on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Note that the vector fields {% raw %}<span class="math inline">\(\{e_i\}\)</span>{% endraw %} and the covector fields {% raw %}<span class="math inline">\(\{E^i\}\)</span>{% endraw %} are smooth on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, if and only if their respective component functions are smooth. Clearly, the fact that {% raw %}<span class="math inline">\(E^i(e_j) = \delta_{ij}\)</span>{% endraw %} implies the matrices {% raw %}<span class="math inline">\((a_i^k)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((b_\ell^j)\)</span>{% endraw %} are inverses of each other. Because matrix inversion is a smooth map from {% raw %}<span class="math inline">\(\operatorname{GL}_n (\mathbb R)\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\operatorname{GL}_n (\mathbb R)\)</span>{% endraw %}, it follows that one of these matrix-valued functions is smooth if and only if the other one is smooth. ◻</p>

</div>
<div id="result-9" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} be a covector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %} denote a smooth coframe on an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %} if and only if its component functions with respect to {% raw %}<span class="math inline">\(\{E^1,\cdots, E^n\}\)</span>{% endraw %} are smooth.</p>

</div>
<p><strong>Proof of Proposition 9.</strong> Let {% raw %}<span class="math inline">\(e_j\)</span>{% endraw %} be the smooth frame dual to the coframe, using Lemma 8. If {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth, its coefficients are {% raw %}<span class="math inline">\(\omega_j=\omega(e_j)\)</span>{% endraw %} and are smooth by Proposition 7. Conversely, if each {% raw %}<span class="math inline">\(\omega_j\)</span>{% endraw %} is smooth, then {% raw %}<span class="math inline">\(\omega=\sum_j\omega_jE^j\)</span>{% endraw %} is a finite sum of smooth sections multiplied by smooth functions, hence is smooth. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>The nomenclature above comes from the same observations as before: because, given any local coframe over an open subset of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, any covector field {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} can be written as {% raw %}<span class="math inline">\(\omega = \omega_i E^i\)</span>{% endraw %}, it follows that we call {% raw %}<span class="math inline">\(\omega_1,\cdots,\omega_n : U \to \mathbb R\)</span>{% endraw %} the <em>component functions of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} with respect to the coframe {% raw %}<span class="math inline">\(\{E^1,\cdots,E^n\}\)</span>{% endraw %}</em>.</p>

<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong>.  The space of all smooth covector fields on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is denoted using {% raw %}<span class="math inline">\(\mathscr X^* (M)\)</span>{% endraw %}. Note that if {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\omega \in \mathscr X^* (M)\)</span>{% endraw %}, we have the covector field {% raw %}<span class="math inline">\(f\omega\)</span>{% endraw %} defined by the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (f\omega)_p = f(p) \omega_p ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Note that {% raw %}<span class="math inline">\(\mathscr X^* (M)\)</span>{% endraw %} is the space of smooth sections of a vector bundle, therefore it is a module over {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}.</p>

</div>
<p>The differential of a function supplies the basic example of a covector field. Its smoothness can be checked by evaluating it on the coordinate vector fields.</p>

<div id="result-11" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>.  The differential of a smooth function is a smooth covector field.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The verification is routine: for each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\((\dif f)_p (v)\)</span>{% endraw %} depends linearly on {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, hence it is a covector at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Smoothness follows from the identity {% raw %}<span class="math inline">\(\dif f(X) = Xf\)</span>{% endraw %} and Proposition <a href="#prop:smoothness-characterization-covector-fields" data-reference-type="ref" data-reference="prop:smoothness-characterization-covector-fields">7</a>. ◻</p>

</div>
<p>We can directly calculate the coordinate representation of {% raw %}<span class="math inline">\(\dif f\)</span>{% endraw %} for some smooth function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. With the notation above, i.e. {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %} as smooth local coordinates on an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{d^{\: i}\}\)</span>{% endraw %} as the corresponding coordinate coframe on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (\dif f)_p = A_i (p) d^{\: i}|_p \text{ for some functions } A_i : U \to \mathbb R ~.
\end{aligned}\]</div>{% endraw %}
<p> Then, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    A_i (p) = (\dif f)_p \left( \dpd{}{{x^i}}\bigg|_p \right) = \dpd{}{{x^i}}\bigg|_p f = \dpd{f}{{x^i}} (p) ~.
\end{aligned}\]</div>{% endraw %}
<p> We can examine a special case, i.e. if {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is a coordinate function {% raw %}<span class="math inline">\(x^k : U \to \mathbb R\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif x^k|_p = \dpd{{x^k}}{{x^i}}(p) d^{\: i}|_p = \delta_i^k d^{\: i}|_p = d^k|_p ~.
\end{aligned}\]</div>{% endraw %}
<p> This is why we can interchangeably use {% raw %}<span class="math inline">\(\dif x^j\)</span>{% endraw %} and the coordinate covector field {% raw %}<span class="math inline">\(d^j\)</span>{% endraw %}. This gives us the relation </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (\dif f)_p &amp;= \dpd{f}{{x^i}} (p) \dif x^i|_p ~, \text{or} \\
    \dif f &amp;= \dpd{f}{{x^i}} \dif x^i ~.
\end{aligned}\]</div>{% endraw %}
<p> This is why, in the main text, we use {% raw %}<span class="math inline">\(\dif x^i\)</span>{% endraw %} to mean the coordinate covector field.</p>

<p>Two consequences relate the differential to constancy and to derivatives along curves.</p>

<div id="result-12" class="proposition" data-note-number="12" data-note-kind="Proposition">
<p><strong>Proposition 12</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(f : M \to \mathbb R\)</span>{% endraw %} be a smooth function.</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\dif f = 0\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is constant on each component of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p></li>
<li><p>Let {% raw %}<span class="math inline">\(J \subset \mathbb R\)</span>{% endraw %} be an interval, and {% raw %}<span class="math inline">\(\gamma : J \to M\)</span>{% endraw %} be a differentiable curve. Then, {% raw %}<span class="math inline">\((f \circ \gamma)&#x27;(t) = (\dif f)_{\gamma(t)} (\gamma&#x27;(t))\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p><strong>Proof of Proposition 12.</strong> If {% raw %}<span class="math inline">\(df=0\)</span>{% endraw %}, the coordinate derivatives of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} vanish on every coordinate ball. The fundamental theorem of calculus along line segments in that ball makes {% raw %}<span class="math inline">\(f\)</span>{% endraw %} locally constant. On a connected component, a locally constant function is constant: a nonempty level set and its complement are both open, so connectedness forces the complement to be empty. Conversely, components of a manifold are open, and constancy on each makes {% raw %}<span class="math inline">\(df=0\)</span>{% endraw %} locally. For a differentiable curve on an interval {% raw %}<span class="math inline">\(J\)</span>{% endraw %}, the ordinary coordinate chain rule gives</p>
{% raw %}<div class="math display">\[\frac{d}{dt}f(\gamma(t))=\sum_i\partial_i f(\gamma(t))\dot\gamma^i(t)=df_{\gamma(t)}(\gamma&#39;(t)).\qquad\square\]</div>{% endraw %}


<p>Duality also explains how covectors transform under smooth maps. Composing a covector with the differential pulls it back to the source tangent space. Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} denote a smooth map between differentiable manifolds. Let {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. The differential {% raw %}<span class="math inline">\((\dif F)_p : T_p M \to T_{F(p)} N\)</span>{% endraw %} induces a dual linear map </p>

{% raw %}<div class="math display">\[(\dif F)_p^* : T_{F(p)}^* N \to T_p^* M ~.\]</div>{% endraw %}
<p> The map {% raw %}<span class="math inline">\((\dif F)_p^*\)</span>{% endraw %} is called the <em>pullback map by {% raw %}<span class="math inline">\(F\)</span>{% endraw %} at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}</em>. The preceding discussion shows that the pullback map is characterized by the formula </p>

{% raw %}<div class="math display">\[(\dif F)_p^* (\omega)(v) = \omega((\dif F)_p (v)) ~~\text{for } \omega \in T_{F(p)}^* N \text{ and } v \in T_p M ~.\]</div>{% endraw %}
<div id="result-13" class="remark" data-note-number="13" data-note-kind="Remark">
<p><strong>Remark 13.</strong> Covector fields pull back under every smooth map. A vector field on the source does not in general determine a vector field on the target: its differential images must agree at all points of a fibre and define a smooth target field. For example, under {% raw %}<span class="math inline">\(F(x,y)=x\)</span>{% endraw %}, the field {% raw %}<span class="math inline">\(y\partial_x\)</span>{% endraw %} has different differential images at different points of the same fibre. A diffeomorphism always allows pushforward; additional cases require the corresponding relatedness condition.</p>
<p>This follows from definitions. Given a smooth map {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} and a covector field {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, we can define a covector field {% raw %}<span class="math inline">\(F^* \omega\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, which we call the <em>pullback of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} by {% raw %}<span class="math inline">\(F\)</span>{% endraw %}</em>, by the formula </p>

{% raw %}<div class="math display">\[(F^* \omega)_p = \dif F_p^* (\omega_{F(p)}) ~.\]</div>{% endraw %}
<p> Its action on a tangent vector {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %} is </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (F^* \omega)_p (v) = \omega_{F(p)} (\dif F_p (v)) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> There is no ambiguity here about what point to pull back from: {% raw %}<span class="math inline">\(F^* \omega\)</span>{% endraw %} at {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is the pullback of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} at {% raw %}<span class="math inline">\(F(p)\)</span>{% endraw %}!</p>

</div>
<div id="lem:pullback-covector-field-formulae" class="lemma" data-note-number="14" data-note-kind="Lemma">
<p><strong>Lemma 14</strong>.  Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} denote a smooth map between differentiable manifolds. Let {% raw %}<span class="math inline">\(u\)</span>{% endraw %} be a continuous, real-valued function on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} be a covector field on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[F^*(u\omega) = (u \circ F) F^* \omega ~.\]</div>{% endraw %}
<p> Additionally, if {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is smooth, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
        F^* \dif u = \dif\, (u \circ F) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> These facts follow from definitions and direct calculations. For the first identity, note that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (F^*(u\omega))_p &amp;= (\dif F)_p^* ((u \omega)_{F(p)}) \\
        &amp;= (\dif F)_p^* (u(F(p)) (\omega)_{F(p)}) \\
        &amp;= u(F(p)) (\dif F)_p^* ((\omega)_{F(p)}) \\
        &amp;= u(F(p)) (F^* \omega)_p \\
        &amp;= ((u \circ F) F^* \omega)_p ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For the second identity, let {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %}; then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (F^* \dif u)_p (v) &amp;= ((\dif F)_p^* ((\dif u)_{F(p)})) (v) \\
        &amp;= (\dif u)_{F(p)} ((\dif F)_p (v)) \\
        &amp;= (\dif F)_p (v) u \\
        &amp;= v(u \circ F) \\
        &amp;= (\dif\,(u \circ F))_p (v) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<div id="result-15" class="lemma" data-note-number="15" data-note-kind="Lemma">
<p><strong>Lemma 15</strong>.  Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} denote a smooth map between differentiable manifolds, and {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} be a continuous covector field on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(F^* \omega\)</span>{% endraw %} is a continuous covector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. If, additionally, {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth, then so is {% raw %}<span class="math inline">\(F^* \omega\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Take any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Choose smooth local coordinates {% raw %}<span class="math inline">\(\{z^j\}\)</span>{% endraw %} in a neighbourhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(F(p) \in N\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U = F^{-1}(V)\)</span>{% endraw %}. Clearly, {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is a neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Writing {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} in coordinates, we have {% raw %}<span class="math inline">\(\omega = \omega_j \dif z^j\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\omega_j\)</span>{% endraw %} are continuous functions on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Applying Lemma <a href="#lem:pullback-covector-field-formulae" data-reference-type="ref" data-reference="lem:pullback-covector-field-formulae">14</a> twice, to the restriction of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} to {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        F^* \omega = F^* (\omega_j \dif z^j) = (\omega_j \circ F) F^* \dif z^j = (\omega_j \circ F) \dif\, (z^j \circ F) ~.
    
\end{aligned}\]</div>{% endraw %}
<p>The coefficient functions {% raw %}<span class="math inline">\(\omega_j\circ F\)</span>{% endraw %} are continuous, and the one-forms {% raw %}<span class="math inline">\(\dif(z^j\circ F)\)</span>{% endraw %} are smooth. Their finite sum is therefore continuous. If {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} is smooth, the coefficients are smooth as well, so the pullback is smooth. There is no converse for an arbitrary map: if {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is constant, its differential vanishes and {% raw %}<span class="math inline">\(F^*\omega=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %}. ◻</p>

</div>
<p>It is customary to write the pullback of a covector field via components of the function {% raw %}<span class="math inline">\(F\)</span>{% endraw %} in coordinates, i.e. </p>

{% raw %}<div class="math display">\[F^* \omega = (\omega_j \circ F) \dif\, (z^j \circ F) = (\omega_j \circ F) \dif F^j ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(F^j\)</span>{% endraw %} denotes the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th component function of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} in the chosen coordinates.</p>

<div id="result-16" class="remark" data-note-number="16" data-note-kind="Remark">
<p><strong>Remark 16</strong>.  We can think of changing coordinates as a pullback under the identity map. For demonstration, take {% raw %}<span class="math inline">\(H\)</span>{% endraw %} to be the right-half plane, i.e. {% raw %}<span class="math inline">\(H = \{(x,y) : x&gt;0\}\)</span>{% endraw %}, and say we use {% raw %}<span class="math inline">\((r,\theta)\)</span>{% endraw %} as the domain, and {% raw %}<span class="math inline">\((x,y)\)</span>{% endraw %} as the codomain. Consider the identity map on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Then, the pullback formula tells us that we can calculate the polar coordinate expression for a covector field by straightforward substitution and expansion. For instance, the coordinate change map is evaluated as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        x \dif y - y \dif x &amp;= (\operatorname{id})^* (x \dif y - y \dif x) \\
        &amp;= (r \cos \theta) \dif\, (r \sin \theta) - r(\sin \theta) \dif\, (r \cos \theta) \\
        &amp;= (r \cos \theta) (\sin \theta \dif r + r \cos \theta \dif \theta) - (r \sin \theta) (\cos \theta \dif r - r \sin \theta \dif \theta) \\
        &amp;= (r \cos \theta \sin \theta - r \sin \theta \cos \theta) \dif r + (r^2 \cos^2 \theta + r^2 \sin^2 \theta) \dif \theta = r^2 \dif \theta ~.
    
\end{aligned}\]</div>{% endraw %}
<p> These calculations follow from what we have shown above in the general case.</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-03-20-vector-bundles %}">Vector Bundles</a>; <a href="{% post_url 2022-10-07-lie-groups-and-their-lie-algebras %}">Lie Groups and Their Lie Algebras</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-20-vector-bundles %}">Vector Bundles</a> · Next: <a href="{% post_url 2024-04-17-covering-spaces-and-the-fundamental-group-of-the-circle %}">Covering Spaces and the Fundamental Group of the Circle</a></p></nav>

</div>
