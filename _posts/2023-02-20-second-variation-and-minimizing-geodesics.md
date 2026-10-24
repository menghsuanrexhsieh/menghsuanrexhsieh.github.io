---
layout: "post"
title: "Second Variation and Minimizing Geodesics"
date: "2023-02-20"
tags: ["math", "differential geometry"]
excerpt: "Every energy minimizing curve is a geodesic; as we have noted, the first variation of the energy functional must vanish for every proper variation of such curve."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2023/02/20/second-variation-formula/", "/2023/03/06/application-geodesics-minimize-up-to-conjugate-points/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold, with Levi–Civita connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}. See the <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">connection notes</a> for the notation.</p>

<div id="second-variation-formula" data-note-section="title">

</div>
<p>Every energy minimizing curve is a geodesic; as we have noted, the first variation of the energy functional must vanish for every proper variation of such curve. From calculus, the second variation of the energy functional must be nonnegative. The second derivative measures which variations can lower the energy. Its curvature term is the source of the relation between conjugate points and the failure of a geodesic to minimize.</p>

<span id="eq:length-functional-second-variation"></span><span id="eq:energy-functional-second-variation"></span>
<div id="prop:second-variation-energy-length-formulas" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1 (Second variation).</strong> Let {% raw %}<span class="math inline">\(\gamma:[a,b]\to M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, be a geodesic of constant speed {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Gamma(s,t)\)</span>{% endraw %} a smooth variation. Set {% raw %}<span class="math inline">\(T=\gamma'\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V=\partial_s\Gamma|_{s=0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A=D_s\partial_s\Gamma|_{s=0}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(V^\perp=V-c^{-2}\langle V,T\rangle T\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(E(s)=\frac12\int_a^b|\partial_t\Gamma|^2dt\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L(s)=\int_a^b|\partial_t\Gamma|dt\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\begin{aligned}E''(0)&amp;=\int_a^b\bigl(|D_tV|^2-\langle R(T,V)T,V\rangle\bigr)dt+[\langle A,T\rangle]_a^b,\\ L''(0)&amp;=\frac1c\left\{\int_a^b\bigl(|D_tV^\perp|^2-\langle R(T,V^\perp)T,V^\perp\rangle\bigr)dt+[\langle A,T\rangle]_a^b\right\}.\end{aligned}\tag{1}\]</div>{% endraw %}
<p> These signs use {% raw %}<span class="math inline">\(R(X,Y)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ+\nabla_{[X,Y]}Z\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Compactness of {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\partial_t\Gamma(0,t)|=c&gt;0\)</span>{% endraw %} give a uniform small strip with {% raw %}<span class="math inline">\(|\partial_t\Gamma|\geq c/2\)</span>{% endraw %}. Thus the length integrand, as well as the energy integrand, is smooth there and may be differentiated under the integral. On the variation write {% raw %}<span class="math inline">\(S=\partial_s\Gamma\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_s=\partial_t\Gamma\)</span>{% endraw %}. Torsion-freeness gives {% raw %}<span class="math inline">\(D_sT_s=D_tS\)</span>{% endraw %}, hence</p>
{% raw %}<div class="math display">\[E''(s)=\int_a^b\bigl(\langle D_sD_tS,T_s\rangle+|D_tS|^2\bigr)dt.\]</div>{% endraw %}
<p> The commutator formula gives {% raw %}<span class="math inline">\(D_sD_tS=D_tD_sS-R(S,T_s)S=D_tD_sS+R(T_s,S)S\)</span>{% endraw %}. At zero, skew-adjointness gives {% raw %}<span class="math inline">\(\langle R(T,V)V,T\rangle=-\langle R(T,V)T,V\rangle\)</span>{% endraw %}. Integration by parts in the first term, using {% raw %}<span class="math inline">\(D_tT=0\)</span>{% endraw %}, yields the energy formula.</p>
<p>For length, the chain rule for the square root gives</p>
{% raw %}<div class="math display">\[\partial_s^2|T_s|=\frac{|D_tS|^2+\langle D_sD_tS,T_s\rangle}{|T_s|}-\frac{\langle D_tS,T_s\rangle^2}{|T_s|^3}.\]</div>{% endraw %}
<p> At zero the first numerator integrates to the just computed energy expression. Since {% raw %}<span class="math inline">\(T/c\)</span>{% endraw %} is parallel,</p>
{% raw %}<div class="math display">\[D_tV^\perp=(D_tV)^\perp,\qquad |D_tV|^2-c^{-2}\langle D_tV,T\rangle^2=|D_tV^\perp|^2.\]</div>{% endraw %}
<p> Finally the curvature term is unchanged when either occurrence of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is replaced by {% raw %}<span class="math inline">\(V^\perp\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(R(T,T)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle R(T,V)T,T\rangle=0\)</span>{% endraw %}. This proves the length formula with the same endpoint acceleration term. ◻</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>. For fixed endpoints, the second variation of length depends only on the normal component of the variational field. For moving endpoints, the endpoint acceleration term in the formula must also be retained. Tangential reparametrizations with fixed endpoints do not change length.</p>

</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>. In a proper variation the endpoint curves are constant, so their velocity and covariant acceleration both vanish. Thus the boundary terms in the second-variation formulas vanish. The condition {% raw %}<span class="math inline">\(V(a)=V(b)=0\)</span>{% endraw %} alone, without fixed endpoint curves, would not imply zero endpoint acceleration.</p>

</div>
<p>The interior terms in the second variation form a symmetric bilinear expression in vector fields along the geodesic. We give this expression a name so that its positivity and null space can be studied directly.</p>

<span id="eq:index-form"></span><span id="eq:index-form-alternative"></span>
<div id="def:index-form" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4.</strong> For continuous piecewise smooth vector fields along a geodesic, the index form is</p>
{% raw %}<div class="math display">\[I(X,Y)=\int_a^b\left(\langle D_tX,D_tY\rangle-\langle R(T,X)T,Y\rangle\right)dt,\qquad T=\gamma'.\tag{2}\]</div>{% endraw %}
<p> The curvature symmetries make {% raw %}<span class="math inline">\(X\mapsto R(T,X)T\)</span>{% endraw %} self-adjoint, so {% raw %}<span class="math inline">\(I\)</span>{% endraw %} is a symmetric bilinear form. Equivalently, by skew-adjointness,</p>
{% raw %}<div class="math display">\[I(X,Y)=\int_a^b\left(\langle D_tX,D_tY\rangle+\langle R(T,X)Y,T\rangle\right)dt.\tag{3}\]</div>{% endraw %}
<p> A field is called proper when it vanishes at both endpoints and normal when it is orthogonal to {% raw %}<span class="math inline">\(T\)</span>{% endraw %}.</p>
</div>
<p>For a fixed-endpoint normal variation of a unit-speed geodesic, the boundary terms disappear. The second variation of length is then given by the index form.</p>

<div id="result-5" class="corollary" data-note-number="5" data-note-kind="Corollary">
<p><strong>Corollary 5</strong>. Let {% raw %}<span class="math inline">\(\gamma:[a,b]\to M\)</span>{% endraw %} be a nonconstant geodesic of constant speed {% raw %}<span class="math inline">\(c=|\dot\gamma|&gt;0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} be a proper variation with variational field {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[E''(0)=I(V,V),\qquad L''(0)=\frac1c I(V^\perp,V^\perp).\]</div>{% endraw %}
<p>In particular, for a unit-speed geodesic and a normal variational field, {% raw %}<span class="math inline">\(L''(0)=I(V,V)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} minimizes length, then {% raw %}<span class="math inline">\(I(V,V)\ge0\)</span>{% endraw %} for every continuous piecewise smooth field {% raw %}<span class="math inline">\(V\)</span>{% endraw %} vanishing at the endpoints.</p>
<p><em>Proof.</em> Substitute the fixed endpoints into Proposition 1. A length-minimizing geodesic, with constant speed on this fixed parameter interval, also minimizes energy by the length-energy inequality. Every endpoint-vanishing field is realized by the proper variation {% raw %}<span class="math inline">\(\exp_{\gamma(t)}(sV(t))\)</span>{% endraw %}; hence the energy has a local minimum at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(I(V,V)=E''(0)\ge0\)</span>{% endraw %}. For piecewise smooth fields, apply the calculation on each smooth subinterval. The boundary terms cancel at internal partition points because {% raw %}<span class="math inline">\(\dot\gamma\)</span>{% endraw %} and the transversal acceleration are continuous there. ◻</p>
</div>
<p><em>Remark.</em> In the proof of <a href="#result-5">Corollary 5</a>, each piece of a piecewise smooth variation extends smoothly to its closed subinterval; continuity at a junction for all {% raw %}<span class="math inline">\(s\)</span>{% endraw %} makes the transversal endpoint curve and its {% raw %}<span class="math inline">\(s\)</span>{% endraw %}-acceleration agree from both sides. These are the boundary terms that cancel. The proof does not require equality of the one-sided derivatives {% raw %}<span class="math inline">\(D_tV\)</span>{% endraw %}.</p>
<div id="result-6" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong>.  If {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is a geodesic and {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a proper normal (piecewise) smooth vector field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(I(V,W)=0\)</span>{% endraw %} for every proper normal (piecewise) smooth vector field {% raw %}<span class="math inline">\(W\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a Jacobi field.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\([a, b]\)</span>{% endraw %} be the domain of the geodesic {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. Recall that a piecewise smooth vector field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is continuous everywhere on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} and smooth on each subinterval of a suitable partition of {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. Furthermore, a vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is proper if it vanishes at the endpoints, meaning {% raw %}<span class="math inline">\(X(a) = X(b) = 0\)</span>{% endraw %}, and normal if it is everywhere orthogonal to the velocity vector {% raw %}<span class="math inline">\(\dot{\gamma}\)</span>{% endraw %}.</p>

<p>Let {% raw %}<span class="math inline">\(a = t_0 &lt; t_1 &lt; \dots &lt; t_k = b\)</span>{% endraw %} be a common partition of {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} such that both {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W\)</span>{% endraw %} are smooth on each subinterval {% raw %}<span class="math inline">\([t_{i-1}, t_i]\)</span>{% endraw %}. We will denote the covariant derivative {% raw %}<span class="math inline">\(\nabla_{\dot{\gamma}} X\)</span>{% endraw %} by {% raw %}<span class="math inline">\(X'\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nabla_{\dot{\gamma}}^2 X\)</span>{% endraw %} by {% raw %}<span class="math inline">\(X''\)</span>{% endraw %}.</p>

<p>The index form {% raw %}<span class="math inline">\(I(V, W)\)</span>{% endraw %} for proper piecewise smooth vector fields {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is defined as </p>

{% raw %}<div class="math display">\[I(V, W) = \int_a^b \left( \langle V', W' \rangle - \langle R(\dot{\gamma},V)\dot{\gamma}, W \rangle \right) \dif t ~.\]</div>{% endraw %}
<p>Using integration by parts on each subinterval {% raw %}<span class="math inline">\([t_{i-1}, t_i]\)</span>{% endraw %}, we can rewrite the first term in the integral: </p>

{% raw %}<div class="math display">\[\int_{t_{i-1}}^{t_i} \langle V', W' \rangle \dif t = \langle V'(t), W(t) \rangle \Big|_{t_{i-1}^+}^{t_i^-} - \int_{t_{i-1}}^{t_i} \langle V'', W \rangle \dif t ~.\]</div>{% endraw %}
<p> Summing this expression over all {% raw %}<span class="math inline">\(k\)</span>{% endraw %} subintervals yields </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_a^b \langle V', W' \rangle \dif t &amp;= -\int_a^b \langle V'', W \rangle \dif t + \sum_{i=1}^k \left( \langle V'(t_i^-), W(t_i^-) \rangle - \langle V'(t_{i-1}^+), W(t_{i-1}^+) \rangle \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Because {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is globally continuous, {% raw %}<span class="math inline">\(W(t_i^-) = W(t_i^+) = W(t_i)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. We regroup the boundary sum at the partition points as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sum_{i=1}^k \left( \langle V'(t_i^-), W(t_i) \rangle - \langle V'(t_{i-1}^+), W(t_{i-1}) \rangle \right) 
        &amp;= -\sum_{i=1}^{k-1} \langle V'(t_i^+) - V'(t_i^-), W(t_i) \rangle \\
        &amp;\quad + \langle V'(b^-), W(b) \rangle - \langle V'(a^+), W(a) \rangle ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is a proper vector field, it vanishes at the endpoints (i.e., {% raw %}<span class="math inline">\(W(a) = W(b) = 0\)</span>{% endraw %}), so the evaluations at {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %} vanish. Let {% raw %}<span class="math inline">\(\Delta V'(t_i) = V'(t_i^+) - V'(t_i^-)\)</span>{% endraw %} denote the jump in the covariant derivative of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} at the partition point {% raw %}<span class="math inline">\(t_i\)</span>{% endraw %}. Substituting the integration-by-parts identity and the vanishing endpoint terms into the index form gives </p>

{% raw %}<span id="eq:index_parts"></span><div class="math display">\[I(V, W) = -\int_a^b \langle V&#x27;&#x27; + R(\dot{\gamma},V)\dot{\gamma}, W \rangle \dif t - \sum_{i=1}^{k-1} \langle \Delta V&#x27;(t_i), W(t_i) \rangle ~. \tag{4}\]</div>{% endraw %}
<p>({% raw %}<span class="math inline">\(\Leftarrow\)</span>{% endraw %}) Assume {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a Jacobi field. By definition, a Jacobi field is smooth everywhere on {% raw %}<span class="math inline">\([a, b]\)</span>{% endraw %}, which implies that its covariant derivative is continuous across all partition points. Thus, {% raw %}<span class="math inline">\(\Delta V'(t_i) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i = 1, \dots, k-1\)</span>{% endraw %}. Furthermore, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} identically satisfies the Jacobi equation {% raw %}<span class="math inline">\(V'' + R(\dot{\gamma},V)\dot{\gamma} = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in [a, b]\)</span>{% endraw %}. Substituting these facts into <a href="#eq:index_parts" data-reference-type="eqref" data-reference="eq:index_parts">(4)</a>, both the integral and the boundary sum vanish entirely. Hence, {% raw %}<span class="math inline">\(I(V, W) = 0\)</span>{% endraw %} for every proper normal piecewise smooth vector field {% raw %}<span class="math inline">\(W\)</span>{% endraw %}.</p>

<p>({% raw %}<span class="math inline">\(\Rightarrow\)</span>{% endraw %}) Conversely, assume that {% raw %}<span class="math inline">\(I(V, W) = 0\)</span>{% endraw %} for every proper normal piecewise smooth vector field {% raw %}<span class="math inline">\(W\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. We wish to show that {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a Jacobi field.</p>

<p>First, we show that {% raw %}<span class="math inline">\(V\)</span>{% endraw %} satisfies the Jacobi equation on the interior of each subinterval {% raw %}<span class="math inline">\((t_{i-1}, t_i)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U = V'' + R(\dot{\gamma},V)\dot{\gamma}\)</span>{% endraw %}. We claim that {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is normal to {% raw %}<span class="math inline">\(\dot{\gamma}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a normal vector field ({% raw %}<span class="math inline">\(\langle V, \dot{\gamma} \rangle = 0\)</span>{% endraw %}) and {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is a geodesic ({% raw %}<span class="math inline">\(\nabla_{\dot{\gamma}}\dot{\gamma} = 0\)</span>{% endraw %}), differentiating the inner product yields {% raw %}<span class="math inline">\(\langle V', \dot{\gamma} \rangle = 0\)</span>{% endraw %} and subsequently {% raw %}<span class="math inline">\(\langle V'', \dot{\gamma} \rangle = 0\)</span>{% endraw %}. By the skew-symmetry properties of the Riemann curvature tensor, {% raw %}<span class="math inline">\(\langle R(\dot{\gamma},V)\dot{\gamma}, \dot{\gamma} \rangle = 0\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(\langle U, \dot{\gamma} \rangle = 0\)</span>{% endraw %}, meaning {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is indeed everywhere normal to {% raw %}<span class="math inline">\(\dot{\gamma}\)</span>{% endraw %}.</p>

<p>Choose a smooth, non-negative bump function {% raw %}<span class="math inline">\(f: [a, b] \to \mathbb{R}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(f(t) &gt; 0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t \in (t_{i-1}, t_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f(t) = 0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t \notin (t_{i-1}, t_i)\)</span>{% endraw %}. Define the vector field {% raw %}<span class="math inline">\(W(t) = f(t) U(t)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. By construction, {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is proper, normal, and piecewise smooth. Since {% raw %}<span class="math inline">\(W(t_j) = 0\)</span>{% endraw %} for all partition points {% raw %}<span class="math inline">\(t_j\)</span>{% endraw %}, the boundary sum in <a href="#eq:index_parts" data-reference-type="eqref" data-reference="eq:index_parts">(4)</a> vanishes. Substituting this {% raw %}<span class="math inline">\(W\)</span>{% endraw %} into <a href="#eq:index_parts" data-reference-type="eqref" data-reference="eq:index_parts">(4)</a> gives </p>

{% raw %}<div class="math display">\[0 = I(V, W) = -\int_{t_{i-1}}^{t_i} f(t) \langle U(t), U(t) \rangle \dif t = -\int_{t_{i-1}}^{t_i} f(t) \|U(t)\|^2 \dif t ~.\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(f(t) &gt; 0\)</span>{% endraw %} on {% raw %}<span class="math inline">\((t_{i-1}, t_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|U(t)\|^2 \geq 0\)</span>{% endraw %}, we must have {% raw %}<span class="math inline">\(U(t) = 0\)</span>{% endraw %} strictly on {% raw %}<span class="math inline">\((t_{i-1}, t_i)\)</span>{% endraw %}. This holds for every subinterval, proving that {% raw %}<span class="math inline">\(V'' + R(\dot{\gamma},V)\dot{\gamma} = 0\)</span>{% endraw %} wherever {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is smooth.</p>

<p>Since {% raw %}<span class="math inline">\(U = 0\)</span>{% endraw %} uniformly on all subintervals, the integral term in <a href="#eq:index_parts" data-reference-type="eqref" data-reference="eq:index_parts">(4)</a> drops out for any {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, reducing the index form to </p>

{% raw %}<div class="math display">\[I(V, W) = - \sum_{i=1}^{k-1} \langle \Delta V'(t_i), W(t_i) \rangle = 0.\]</div>{% endraw %}
<p> We now show that {% raw %}<span class="math inline">\(V'\)</span>{% endraw %} is globally continuous, i.e., the jumps {% raw %}<span class="math inline">\(\Delta V'(t_i)\)</span>{% endraw %} are all zero. Since the one-sided limits of {% raw %}<span class="math inline">\(V'\)</span>{% endraw %} at {% raw %}<span class="math inline">\(t_j\)</span>{% endraw %} are both normal to {% raw %}<span class="math inline">\(\dot{\gamma}(t_j)\)</span>{% endraw %}, their difference {% raw %}<span class="math inline">\(\Delta V'(t_j)\)</span>{% endraw %} is also normal to {% raw %}<span class="math inline">\(\dot{\gamma}(t_j)\)</span>{% endraw %}. For any fixed {% raw %}<span class="math inline">\(j \in \{1, \dots, k-1\}\)</span>{% endraw %}, we construct a proper, normal, piecewise smooth vector field {% raw %}<span class="math inline">\(W\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(W(t_j) = \Delta V'(t_j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W(t_i) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i \neq j\)</span>{% endraw %}. To do this, let {% raw %}<span class="math inline">\(E_j(t)\)</span>{% endraw %} be the parallel transport of the vector {% raw %}<span class="math inline">\(\Delta V'(t_j)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. Since parallel transport preserves inner products and {% raw %}<span class="math inline">\(\dot{\gamma}\)</span>{% endraw %} is parallel along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, {% raw %}<span class="math inline">\(E_j(t)\)</span>{% endraw %} is orthogonal to {% raw %}<span class="math inline">\(\dot{\gamma}(t)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in [a, b]\)</span>{% endraw %}. Multiply this by a piecewise smooth scalar bump function {% raw %}<span class="math inline">\(g: [a, b] \to \mathbb{R}\)</span>{% endraw %} that equals {% raw %}<span class="math inline">\(1\)</span>{% endraw %} at {% raw %}<span class="math inline">\(t_j\)</span>{% endraw %} and has a sufficiently small support avoiding all other partition points and endpoints. Then {% raw %}<span class="math inline">\(W(t) = g(t) E_j(t)\)</span>{% endraw %} is a proper, normal, and piecewise smooth vector field.</p>

<p>Substituting this {% raw %}<span class="math inline">\(W\)</span>{% endraw %} into the reduced index form yields </p>

{% raw %}<div class="math display">\[0 = I(V, W) = -\langle \Delta V'(t_j), \Delta V'(t_j) \rangle = -\|\Delta V'(t_j)\|^2.\]</div>{% endraw %}
<p> Consequently, {% raw %}<span class="math inline">\(\Delta V'(t_j) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, proving that {% raw %}<span class="math inline">\(V'\)</span>{% endraw %} is globally continuous on {% raw %}<span class="math inline">\([a, b]\)</span>{% endraw %}.</p>

<p>At this stage, we know that {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(C^1\)</span>{% endraw %} vector field on {% raw %}<span class="math inline">\([a, b]\)</span>{% endraw %} that satisfies the linear second-order ordinary differential equation {% raw %}<span class="math inline">\(V'' + R(\dot{\gamma},V)\dot{\gamma} = 0\)</span>{% endraw %} on each subinterval. By the standard uniqueness and regularity theory for linear ODEs, a solution to this equation that is {% raw %}<span class="math inline">\(C^1\)</span>{% endraw %} must in fact be smooth everywhere. Therefore, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} extends to a globally smooth vector field on the entire interval {% raw %}<span class="math inline">\([a, b]\)</span>{% endraw %} satisfying the Jacobi equation. This makes {% raw %}<span class="math inline">\(V\)</span>{% endraw %} a Jacobi field, completing the proof. ◻</p>

</div>
<div id="lem:index-lemma" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong> (The Index Lemma).  Let {% raw %}<span class="math inline">\(\gamma:[0,a]\to M\)</span>{% endraw %} be a nonconstant geodesic with no conjugate point to {% raw %}<span class="math inline">\(\gamma(0)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, on the interval {% raw %}<span class="math inline">\((0,a]\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(J\)</span>{% endraw %} be a Jacobi field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\langle J, \gamma' \rangle = 0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a (piecewise) differentiable vector field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\langle V, \gamma' \rangle = 0\)</span>{% endraw %}. Suppose further that {% raw %}<span class="math inline">\(J(0)=V(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(t_0)=V(t_0)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t_0 \in (0,a]\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[I_{t_0} (J,J) \leq I_{t_0} (V,V)\]</div>{% endraw %}
<p> with equality if and only if {% raw %}<span class="math inline">\(V=J\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,t_0]\)</span>{% endraw %}.</p>

</div>
<span id="eq:index-sublemma-result"></span><span id="eq:f1f2expansion"></span>
<div class="proof">
<p><em>Proof.</em> Restrict to {% raw %}<span class="math inline">\([0,t_0]\)</span>{% endraw %}. Choose an orthonormal basis {% raw %}<span class="math inline">\(e_i\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\gamma'(0)^\perp\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(J_i\)</span>{% endraw %} have initial data {% raw %}<span class="math inline">\(J_i(0)=0,J_i'(0)=e_i\)</span>{% endraw %}. The Jacobi fields {% raw %}<span class="math inline">\(J_i\)</span>{% endraw %} remain normal because {% raw %}<span class="math inline">\(\langle J_i,\gamma'\rangle\)</span>{% endraw %} is affine with zero initial data. At every {% raw %}<span class="math inline">\(t\in(0,t_0]\)</span>{% endraw %} the vectors {% raw %}<span class="math inline">\(J_i(t)\)</span>{% endraw %} form a basis of the normal space: a vanishing linear combination there would be a Jacobi field vanishing at zero and {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, contrary to nonconjugacy.</p>
<p>Thus {% raw %}<span class="math inline">\(V=f^iJ_i\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. The coefficients extend piecewise smoothly to zero. To see this in a parallel frame, write the Jacobi matrix as {% raw %}<span class="math inline">\(A(t)=tB(t)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is smooth and {% raw %}<span class="math inline">\(B(0)=I\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(V(t)=t\widetilde V(t)\)</span>{% endraw %} by the one-variable integral formula {% raw %}<span class="math inline">\(V(t)/t=\int_0^1V'(ut)du\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(f=B^{-1}\widetilde V\)</span>{% endraw %} near zero. At every other point {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is invertible; the coefficients are continuous across all partition points.</p>
<p>The Wronskian satisfies</p>
{% raw %}<div class="math display">\[\frac d{dt}\bigl(\langle J_i',J_j\rangle-\langle J_i,J_j'\rangle\bigr)=-\langle R(T,J_i)T,J_j\rangle+\langle J_i,R(T,J_j)T\rangle=0,\tag{5}\]</div>{% endraw %}
<p> and its initial value is zero. Put {% raw %}<span class="math inline">\(X=f^iJ_i'\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y=(f^i)'J_i\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(V'=X+Y\)</span>{% endraw %}. Jacobi's equation and the zero Wronskians give</p>
{% raw %}<div class="math display">\[\frac d{dt}\langle V,X\rangle=|X|^2+2\langle X,Y\rangle-\langle R(T,V)T,V\rangle.\]</div>{% endraw %}
<p> Consequently, on every smooth piece,</p>
{% raw %}<div class="math display">\[|V'|^2-\langle R(T,V)T,V\rangle=\frac d{dt}\langle V,X\rangle+|Y|^2.\tag{6}\]</div>{% endraw %}
<p> Integrate and sum: {% raw %}<span class="math inline">\(V,X\)</span>{% endraw %} are continuous at the partition points, and the term at zero is zero. The Jacobi field with the same endpoints is {% raw %}<span class="math inline">\(J=f^i(t_0)J_i\)</span>{% endraw %}, so integration by parts gives {% raw %}<span class="math inline">\(I(J,J)=\langle J'(t_0),J(t_0)\rangle=\langle X(t_0),V(t_0)\rangle\)</span>{% endraw %}. Hence</p>
{% raw %}<div class="math display">\[I(V,V)-I(J,J)=\int_0^{t_0}\left|\sum_i(f^i)'J_i\right|^2dt\geq0.\]</div>{% endraw %}
<p> Equality forces every derivative {% raw %}<span class="math inline">\((f^i)'\)</span>{% endraw %} to vanish on every open piece. Continuity makes these constants agree across junctions, and the endpoint value gives {% raw %}<span class="math inline">\(V=J\)</span>{% endraw %}. Conversely {% raw %}<span class="math inline">\(V=J\)</span>{% endraw %} gives equality. ◻</p>
</div>
<p>A positive lower bound for Ricci curvature can force a long geodesic to admit a shortening variation. The next proposition applies this argument outside a compact set; completeness then converts a bound on distance into compactness.</p>

<div id="prop:ricci-index-M-compact" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a complete, connected Riemannian {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-manifold with {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(k &gt; 0\)</span>{% endraw %}. Suppose that there is a compact subset {% raw %}<span class="math inline">\(D \subset M\)</span>{% endraw %} such that for all {% raw %}<span class="math inline">\(p \notin D\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathrm{Ric}}}(U,U) \ge (n-1)k\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(U \in T_pM\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\|U\| = 1\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is compact.</p>

</div>
<div class="proof">
<p><em>Proof of Proposition <a href="#prop:ricci-index-M-compact" data-reference-type="ref" data-reference="prop:ricci-index-M-compact">8</a>.</em> Suppose, for the sake of contradiction, that {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is not compact. Because {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a complete Riemannian manifold, the Hopf-Rinow theorem dictates that {% raw %}<span class="math inline">\(M\)</span>{% endraw %} must be unbounded.</p>

<p>Fix any {% raw %}<span class="math inline">\(x_0\in M\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(D\subset B_R(x_0)\)</span>{% endraw %}; this also covers {% raw %}<span class="math inline">\(D=\varnothing\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(L&gt;\pi/\sqrt{k}\)</span>{% endraw %}. Unboundedness provides a point at distance greater than {% raw %}<span class="math inline">\(R+L\)</span>{% endraw %}; following a minimizing geodesic to it for time {% raw %}<span class="math inline">\(R+L\)</span>{% endraw %} gives a point {% raw %}<span class="math inline">\(q\)</span>{% endraw %} at exactly that distance.</p>

<p>By the Hopf-Rinow theorem, there exists a globally length-minimizing, unit-speed geodesic {% raw %}<span class="math inline">\(\gamma: [0, R+L] \to M\)</span>{% endraw %} connecting {% raw %}<span class="math inline">\(\gamma(0) = x_0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\gamma(R+L) = q\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(t \in [R, R+L]\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is globally length-minimizing, the distance from {% raw %}<span class="math inline">\(x_0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\gamma(t)\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\(t \ge R\)</span>{% endraw %}. Consequently, {% raw %}<span class="math inline">\(\gamma(t) \notin B_R(x_0)\)</span>{% endraw %}, which implies {% raw %}<span class="math inline">\(\gamma(t) \notin D\)</span>{% endraw %}. By the given hypothesis, the Ricci curvature evaluated along the velocity vector of this subsegment strictly satisfies </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathrm{Ric}}}(\gamma'(t), \gamma'(t)) \ge (n-1)k \quad \text{for all } t \in [R, R+L].\]</div>{% endraw %}
<figure class="note-diagram" id="diagram-ricci-index-geodesic" data-diagram="ricci-index-geodesic" style="--diagram-width: 705px; --diagram-min-width: 529px">
<div class="note-diagram__canvas" tabindex="0" role="region" aria-label="The minimizing geodesic leaves the compact set D. The blue curve schematically indicates the test field on the final segment used in the index-form argument."><a href="{{ '/assets/images/notes/tikz/ricci-index-geodesic.svg' | relative_url }}?v=ff20a87b870f" title="Open diagram at full size"><img src="{{ '/assets/images/notes/tikz/ricci-index-geodesic.svg' | relative_url }}?v=ff20a87b870f" alt="The minimizing geodesic leaves the compact set D. The blue curve schematically indicates the test field on the final segment used in the index-form argument." loading="lazy" decoding="async"></a></div>
<figcaption>The minimizing geodesic leaves the compact set D. The blue curve schematically indicates the test field on the final segment used in the index-form argument.</figcaption>
</figure>
<div class="center">

</div>
<p>We analyze the second variation of length (the index form) on the subsegment {% raw %}<span class="math inline">\(\sigma = \gamma|_{[R, R+L]}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(E_1(t), \dots, E_{n-1}(t)\)</span>{% endraw %} be parallel orthonormal vector fields along {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} that are everywhere orthogonal to {% raw %}<span class="math inline">\(\gamma'(t)\)</span>{% endraw %}. Define the proper variation vector fields {% raw %}<span class="math inline">\(V_i(t)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} by: </p>

{% raw %}<div class="math display">\[V_i(t) = \sin\left(\frac{\pi (t-R)}{L}\right) E_i(t) \quad \text{for } 1 \le i \le n-1.\]</div>{% endraw %}
<p> Because {% raw %}<span class="math inline">\(V_i(R) = V_i(R+L) = 0\)</span>{% endraw %}, these correspond to valid proper variations holding the endpoints of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} fixed. The sum of the index forms for these variations is exactly </p>

{% raw %}<div class="math display">\[\sum_{i=1}^{n-1} I(V_i, V_i) = \int_{R}^{R+L} \left( \sum_{i=1}^{n-1} \|\nabla_{\gamma'} V_i\|^2 - \sum_{i=1}^{n-1} \langle R(\gamma',V_i)\gamma', V_i \rangle \right) \dif t ~.\]</div>{% endraw %}
<p> Since the {% raw %}<span class="math inline">\(E_i\)</span>{% endraw %} fields are parallel, their covariant derivatives vanish, giving {% raw %}<span class="math inline">\(\nabla_{\gamma'} V_i = \frac{\pi}{L} \cos\left(\frac{\pi (t-R)}{L}\right) E_i(t)\)</span>{% endraw %}. Furthermore, tracing the Riemann curvature tensor over the orthogonal frame gives the Ricci curvature. Hence, it follows that </p>

{% raw %}<div class="math display">\[\sum_{i=1}^{n-1} I(V_i, V_i) = \int_{R}^{R+L} \left( (n-1) \frac{\pi^2}{L^2} \cos^2\left(\frac{\pi (t-R)}{L}\right) - \mathop{\mathrm{\mathrm{Ric}}}(\gamma', \gamma') \sin^2\left(\frac{\pi (t-R)}{L}\right) \right) \dif t ~.\]</div>{% endraw %}
<p> Applying the lower bound {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathrm{Ric}}}(\gamma', \gamma') \ge (n-1)k\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\sum_{i=1}^{n-1} I(V_i, V_i) \le (n-1) \int_{R}^{R+L} \left( \frac{\pi^2}{L^2} \cos^2\left(\frac{\pi (t-R)}{L}\right) - k \sin^2\left(\frac{\pi (t-R)}{L}\right) \right) \dif t ~.\]</div>{% endraw %}
<p> Integrating the squared trigonometric functions over the half-period {% raw %}<span class="math inline">\(L\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\int_R^{R+L} \cos^2\left(\frac{\pi (t-R)}{L}\right) \dif t = \int_R^{R+L} \sin^2\left(\frac{\pi (t-R)}{L}\right) \dif t = \frac{L}{2}\)</span>{% endraw %}. Thus, the inequality becomes: </p>

{% raw %}<div class="math display">\[\sum_{i=1}^{n-1} I(V_i, V_i) \le (n-1) \frac{L}{2} \left( \frac{\pi^2}{L^2} - k \right).\]</div>{% endraw %}
<p> Because we deliberately chose {% raw %}<span class="math inline">\(L &gt; \frac{\pi}{\sqrt{k}}\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\frac{\pi^2}{L^2} - k &lt; 0\)</span>{% endraw %}, which strictly forces the sum of the index forms to be negative. Therefore, {% raw %}<span class="math inline">\(I(V_j, V_j) &lt; 0\)</span>{% endraw %} for at least one {% raw %}<span class="math inline">\(j \in \{1, \dots, n-1\}\)</span>{% endraw %}.</p>

<p>Corollary 5 says that a minimizing segment must have nonnegative index on every endpoint-vanishing field. Thus the negative value just obtained directly contradicts minimality of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. Equivalently, realizing the normal field as a proper variation gives {% raw %}<span class="math inline">\(L'(0)=0,L''(0)&lt;0\)</span>{% endraw %}, and Taylor's theorem produces strictly shorter nearby curves. Hopf–Rinow then proves compactness. Connectedness and {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %} matter: in dimension one the Ricci lower bound is vacuous, and an infinite disjoint union of positively curved compact components need not be compact. ◻</p>

</div>
<h3 data-note-section="1" id="application-geodesics-minimize-up-to-conjugate-points">1. Application: Geodesics Minimize Up to Conjugate Points</h3>
<p>The second variation formula can be used to establish an important fact: no geodesic is minimizing past its first conjugate point. A standard example is the {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-sphere, where, if a geodesic starts from the North pole and travels in a given direction towards the South pole, it <em>cannot be minimizing after the South pole</em>, i.e. the conjugate point to the North pole along this given geodesic. The proof constructs a field from a Jacobi field that vanishes at the conjugate point, then perturbs it to make the index form negative.</p>

<div id="thm:geodesic-cannot-minimize-past-conjugate" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and take {% raw %}<span class="math inline">\(p, q \in M\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\gamma : [a,b] \to M\)</span>{% endraw %} is a geodesic from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, and has an interior conjugate point, i.e. there exists {% raw %}<span class="math inline">\(d \in (a,b)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\gamma(d)\)</span>{% endraw %} is conjugate to {% raw %}<span class="math inline">\(\gamma(a)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, then there exists a proper normal vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(I(X,X) &lt; 0\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Rescale the parameter to {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Choose a nonzero Jacobi field {% raw %}<span class="math inline">\(J\)</span>{% endraw %} vanishing at zero and {% raw %}<span class="math inline">\(d\in(0,1)\)</span>{% endraw %}; its tangential component is affine and vanishes at both times, so it is normal. Initial-value uniqueness gives {% raw %}<span class="math inline">\(J'(d)\ne0\)</span>{% endraw %}. Parallel transport {% raw %}<span class="math inline">\(-J'(d)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} and multiply it by a smooth bump equal to one at {% raw %}<span class="math inline">\(d\)</span>{% endraw %} and zero near both endpoints. This constructs a smooth <em>normal</em> field {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with {% raw %}<span class="math inline">\(K(0)=K(1)=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(K(d)=-J'(d)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[N_\varepsilon (t) = \begin{cases}
            J(t) + \varepsilon K(t) &amp; \quad 0 \leq t \leq d \\
            \varepsilon K(t) &amp; \quad d \leq t \leq 1
        \end{cases} ~.\]</div>{% endraw %}
<p> Clearly, this is a proper, normal, and (piecewise) smooth vector field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. A direct calculation of the index form of {% raw %}<span class="math inline">\(N_\varepsilon (t)\)</span>{% endraw %} shows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        I(N_\varepsilon, N_\varepsilon) &amp;= I(J+\varepsilon K, J+\varepsilon K)|_{[0,d]} + I(\varepsilon K, \varepsilon K)|_{[d,1]} \\
        &amp;= I(J,J)|_{[0,d]} + 2\varepsilon I(J,K)|_{[0,d]} + \varepsilon^2 I(K, K)|_{[0,1]} \\
        &amp;= 2\varepsilon \langle J'(d^-), K(d) \rangle + \varepsilon^2 I(K,K) \\
        &amp;= -2\varepsilon \lVert J'(d^-) \rVert^2 + \varepsilon^2 I(K,K) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Clearly, the linear term dominates for small enough {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, rendering the last line negative. Take {% raw %}<span class="math inline">\(X(t) = N_\varepsilon (t)\)</span>{% endraw %} to conclude. ◻</p>

</div>
<div id="prop:no-conjugate-point-minimizing-field" class="proposition" data-note-number="10" data-note-kind="Proposition">
<p><strong>Proposition 10.</strong> Suppose {% raw %}<span class="math inline">\(\gamma:[a,b]\to M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, is a nonconstant geodesic and no {% raw %}<span class="math inline">\(\gamma(t)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a&lt;t\leq b\)</span>{% endraw %}, is conjugate to {% raw %}<span class="math inline">\(\gamma(a)\)</span>{% endraw %} along it. Then for some {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, every piecewise smooth curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %} with the same endpoints and {% raw %}<span class="math inline">\(d(c(t),\gamma(t))&lt;\varepsilon\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(L(c)\geq L(\gamma)\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(I(V,V)&gt;0\)</span>{% endraw %} for every nonzero proper normal continuous piecewise smooth field {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Equivalently {% raw %}<span class="math inline">\(I(V,V)=0\)</span>{% endraw %} precisely for the proper normal Jacobi fields, which under this hypothesis consist only of zero.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The index assertion follows at once from Lemma 7 with the comparison Jacobi field {% raw %}<span class="math inline">\(J=0\)</span>{% endraw %}, after translating the parameter. Positivity of a second variation alone does not establish the asserted neighborhood minimum; we prove that separately.</p>
<p>Put {% raw %}<span class="math inline">\(p=\gamma(a)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(v_0(t)=(t-a)\gamma'(a)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(F(v)=\exp_p(v)\)</span>{% endraw %}. By the Jacobi characterization and {% raw %}<span class="math inline">\(dF_0=\mathrm{id}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(dF\)</span>{% endraw %} is nonsingular on the compact segment {% raw %}<span class="math inline">\(v_0([a,b])\)</span>{% endraw %}. Thus it remains nonsingular on an open neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of that segment. The parameter-preserving map</p>
{% raw %}<div class="math display">\[\Psi(t,v)=(t,F(v))\]</div>{% endraw %}
<p> is a local diffeomorphism near the graph {% raw %}<span class="math inline">\((t,v_0(t))\)</span>{% endraw %}, whose image is the graph {% raw %}<span class="math inline">\((t,\gamma(t))\)</span>{% endraw %}. It is injective on a sufficiently small neighborhood of this compact graph. Indeed if arbitrarily close points in its domain had the same image, their common first coordinates would converge, and their vector coordinates would both converge to the corresponding {% raw %}<span class="math inline">\(v_0(t)\)</span>{% endraw %}, contradicting local injectivity there. Its image therefore contains a uniform neighborhood {% raw %}<span class="math inline">\(d(y,\gamma(t))&lt;\varepsilon\)</span>{% endraw %}, by compactness.</p>
<p>Every curve in the statement has a unique continuous piecewise smooth lift {% raw %}<span class="math inline">\(v(t)\)</span>{% endraw %} through this chosen neighborhood, with {% raw %}<span class="math inline">\(F(v(t))=c(t)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(v(a)=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(v(b)=(b-a)\gamma'(a)\)</span>{% endraw %}. This construction does not presume that {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is globally injective or that {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} has no self-intersections. Equip {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with {% raw %}<span class="math inline">\(h=F^*g\)</span>{% endraw %}, a positive metric because {% raw %}<span class="math inline">\(dF\)</span>{% endraw %} is nonsingular. The Gauss lemma says the radial function {% raw %}<span class="math inline">\(r(v)=|v|\)</span>{% endraw %} has {% raw %}<span class="math inline">\(|dr|_h=1\)</span>{% endraw %} away from zero. Thus along the lift, {% raw %}<span class="math inline">\(|(r\circ v)'|\leq|v'|_h\)</span>{% endraw %} almost everywhere; at zero the same inequality follows by the norm's local Lipschitz property and {% raw %}<span class="math inline">\(h_0=g_p\)</span>{% endraw %}. Integrating gives</p>
{% raw %}<div class="math display">\[L(c)=\int_a^b|v'|_hdt\geq r(v(b))-r(v(a))=(b-a)|\gamma'(a)|=L(\gamma).\]</div>{% endraw %}
<p> This proves local minimization in the stated uniform topology. It need not be a global minimum: conjugate points and the cut locus are different obstructions. ◻</p>
</div>
<p>The following identities justify the integrations by parts in the proof of Proposition <a href="#prop:no-conjugate-point-minimizing-field" data-reference-type="ref" data-reference="prop:no-conjugate-point-minimizing-field">10</a>.</p>

<div id="lem:covariant-derivative-curvature-identity" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, {% raw %}<span class="math inline">\(p, q \in M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\gamma : [a,b] \to M\)</span>{% endraw %} be a geodesic from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a normal (piecewise) smooth vector field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\{a_0,\cdots,a_k\}\)</span>{% endraw %} be an admissible partition for {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Assume that {% raw %}<span class="math inline">\(V=\sum_\alpha v^\alpha J_\alpha\)</span>{% endraw %}, where the {% raw %}<span class="math inline">\(J_\alpha\)</span>{% endraw %} are Jacobi fields with zero pairwise Wronskians, and define</p>

{% raw %}<div class="math display">\[X(t) = v^\alpha(t) \nabla_{\dif/\!\dif t} J_\alpha (t) ~,~ Y(t) = \dot v^\alpha(t) J_\alpha (t) ~.\]</div>{% endraw %}
<p> Then, the following identity holds where {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is smooth: </p>

{% raw %}<div class="math display">\[\lVert \nabla_{\dif/\!\dif t} V \rVert^2 - \langle R(\gamma',V)\gamma',V \rangle = \dod{}{t} \langle V, X \rangle + \lVert Y \rVert^2 ~.\]</div>{% endraw %}
</div>
<p><em>Remark.</em> The Jacobi fields in the preceding application of <a href="#lem:covariant-derivative-curvature-identity">Lemma 11</a> all vanish at the initial time. By <a href="#lem:constant-jacobi-difference-along-geodesics">Lemma 12</a>, this implies the zero-Wronskian condition in the hypothesis. Without that condition, the displayed identity need not hold for an arbitrary family of Jacobi fields.</p>
<div class="proof">
<p><em>Proof.</em> Note that on each interval {% raw %}<span class="math inline">\((a_i,a_{i+1})\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0 \leq i \leq k-1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\nabla_{\dif/\!\dif t} V = X + Y\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in (a_i,a_{i+1})\)</span>{% endraw %}. It follows from definition that </p>

{% raw %}<div class="math display">\[\dod{}{t} \langle V,X \rangle = \langle \nabla_{\dif/\!\dif t} V, X \rangle + \langle V, \nabla_{\dif/\!\dif t} X \rangle  = \langle X + Y, X \rangle + \langle V, \nabla_{\dif/\!\dif t} X \rangle ~.\]</div>{% endraw %}
<p> Furthermore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \nabla_{\dif/\!\dif t} X &amp;= \nabla_{\dif/\!\dif t} (v^\alpha \nabla_{\dif/\!\dif t} J_\alpha) = \dot v^\alpha \nabla_{\dif/\!\dif t} J_\alpha + v^\alpha \nabla_{\dif/\!\dif t} \nabla_{\dif/\!\dif t} J_\alpha \\
        &amp;= \dot v^\alpha \nabla_{\dif/\!\dif t} J_\alpha - v^\alpha R(\gamma',J_\alpha) \gamma' = \dot v^\alpha \nabla_{\dif/\!\dif t} J_\alpha - R(\gamma',V) \gamma' ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the last equality follows from inspection and definition. It follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \langle V, \nabla_{\dif/\!\dif t} X \rangle = \langle v^\beta J_\beta, \dot v^\alpha \nabla_{\dif/\!\dif t} J_\alpha \rangle - \langle V, R(\gamma',V) \gamma' \rangle ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Apply Lemma <a href="#lem:constant-jacobi-difference-along-geodesics" data-reference-type="ref" data-reference="lem:constant-jacobi-difference-along-geodesics">12</a> to see that {% raw %}<span class="math inline">\(\langle \nabla_{\dif/\!\dif t} J_\alpha, J_\beta \rangle = \langle J_\alpha, \nabla_{\dif/\!\dif t} J_\beta \rangle\)</span>{% endraw %} along all of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, since their difference vanishes at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} (because {% raw %}<span class="math inline">\(J_\alpha(0)=0\)</span>{% endraw %}). As such, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \langle \dot v^\alpha \nabla_{\dif/\!\dif t} J_\alpha, v^\beta J_\beta \rangle &amp;= \dot v^\alpha v^\beta \langle \nabla_{\dif/\!\dif t} J_\alpha, J_\beta \rangle \\
        
        &amp;= \dot v^\alpha v^\beta \langle J_\alpha, \nabla_{\dif/\!\dif t} J_\beta \rangle =  \langle \dot v^\alpha J_\alpha, v^\beta \nabla_{\dif/\!\dif t} J_\beta \rangle = \langle Y, X \rangle ~.
    
\end{aligned}\]</div>{% endraw %}
<p> To conclude, combining everything, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dod{}{t} \langle V,X \rangle &amp;= \langle X + Y, X \rangle + \langle Y, X \rangle - \langle R(\gamma',V) \gamma', V \rangle \\
        &amp;= \lVert X+Y \rVert^2 - \lVert Y \rVert^2 - \langle R(\gamma',V) \gamma', V \rangle \\
        &amp;= \lVert \nabla_{\dif/\!\dif t} V \rVert^2 - \lVert Y \rVert^2 - \langle R(\gamma',V) \gamma', V \rangle ~,
    
\end{aligned}\]</div>{% endraw %}
<p> and rearranging everything gives the desired conclusion. ◻</p>

</div>
<div id="lem:constant-jacobi-difference-along-geodesics" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong>.  Let {% raw %}<span class="math inline">\(\gamma:[a,b]\to M\)</span>{% endraw %} be a geodesic, and let {% raw %}<span class="math inline">\(J_1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_2\)</span>{% endraw %} be Jacobi fields along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\langle \nabla_{\dif/\!\dif t} J_1, J_2 \rangle - \langle J_1, \nabla_{\dif/\!\dif t} J_2 \rangle\)</span>{% endraw %} is a constant function along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> This follows from direct calculations: let {% raw %}<span class="math inline">\(\varphi(t) = \langle \nabla_{\dif/\!\dif t} J_1 (t), J_2 (t) \rangle - \langle J_1 (t), \nabla_{\dif/\!\dif t} J_2 (t) \rangle\)</span>{% endraw %}. It follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \varphi'(t) &amp;= \langle \nabla_{\dif/\!\dif t} \nabla_{\dif/\!\dif t} J_1 (t), J_2 (t) \rangle + \langle  \nabla_{\dif/\!\dif t} J_1 (t), \nabla_{\dif/\!\dif t} J_2 (t) \rangle \\
        &amp;\quad - \left( \langle \nabla_{\dif/\!\dif t} J_1 (t), \nabla_{\dif/\!\dif t} J_2 (t) \rangle + \langle J_1 (t), \nabla_{\dif/\!\dif t} \nabla_{\dif/\!\dif t} J_2 (t) \rangle  \right) \\
        
        &amp;= - \langle R(\gamma',J_1)\gamma', J_2 (t) \rangle + \langle J_1 (t), R(\gamma',J_2)\gamma' \rangle = - \langle R(\gamma',J_2)\gamma', J_1 (t) \rangle + \langle R(\gamma',J_2)\gamma' ,  J_1 (t) \rangle = 0 ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the second equality follows from applying the Jacobi equation, and the third equality follows from symmetries of the Riemann curvature tensor. ◻</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a> · Next: <a href="{% post_url 2023-03-19-application-cartans-theorem %}">Application: Cartan’s Theorem</a></p></nav>

</div>
