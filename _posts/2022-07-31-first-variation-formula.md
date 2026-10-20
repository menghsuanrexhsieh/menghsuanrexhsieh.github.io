---
layout: "post"
title: "First Variation Formula"
date: "2022-07-31"
tags: ["math", "differential geometry"]
excerpt: "It will be useful to understand the energy functions and its variations in the sequel."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="subsec:first-variation" data-note-section="title">

</div>
<p>A variation replaces one curve by a nearby family of curves. Differentiating the energy of that family tells us how the energy responds to an infinitesimal displacement. The first variation formula separates this response into an interior term, involving acceleration, and endpoint terms.</p>

<p>This separation explains why fixed-endpoint critical curves satisfy the geodesic equation. We first describe variations and their vector fields, then derive the formula by differentiating under the integral and integrating by parts.</p>

<div id="def:variation-of-curves" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>. A <em>variation</em> of a curve {% raw %}<span class="math inline">\(c:[a,b]\to M\)</span>{% endraw %} is a continuous map {% raw %}<span class="math inline">\(\Gamma:(-\varepsilon,\varepsilon)\times[a,b]\to M\)</span>{% endraw %}, smooth on the pieces described below, with {% raw %}<span class="math inline">\(\Gamma(0,t)=c(t)\)</span>{% endraw %}. It is <em>proper</em> when {% raw %}<span class="math inline">\(\Gamma(s,a)=c(a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Gamma(s,b)=c(b)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. It is a <em>variation through geodesics</em> when {% raw %}<span class="math inline">\(t\mapsto\Gamma(s,t)\)</span>{% endraw %} is a geodesic for each fixed {% raw %}<span class="math inline">\(s\)</span>{% endraw %}.</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  Definition <a href="#def:variation-of-curves" data-reference-type="ref" data-reference="def:variation-of-curves">1</a> requires differentiability of {% raw %}<span class="math inline">\(c(s,t)\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(t \in [a,b]\)</span>{% endraw %}. Formally, we require that there <em>exists a subdivision of {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}</em>, denoted {% raw %}<span class="math inline">\(a = t_0 &lt; t_1 &lt; \cdots &lt; t_{k+1} = b\)</span>{% endraw %} such that the restriction of {% raw %}<span class="math inline">\(c(s,t)\)</span>{% endraw %} to each {% raw %}<span class="math inline">\((-\varepsilon,\varepsilon) \times [t_i, t_{i+1}]\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(i = 0,1,\cdots,k\)</span>{% endraw %} is differentiable. Some textbooks, including <span class="citation" data-cites="carmo_riemannian_1992"><a href="#ref-carmo_riemannian_1992" role="doc-biblioref">Carmo (1992)</a></span>, follow this convention. Allowing piecewise smooth variations introduces an additional term in the variation of the energy functional.</p>

</div>
<div id="rem:variational-field-primer" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>.  Especially for studying the Jacobi fields and related topics (in Section <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}#sec:jacobi-field" data-reference-type="ref" data-reference="sec:jacobi-field">Jacobi Fields and Conjugate Points</a>, we often want to fix a point in “time”, and examine the family of curves induced by the variation of some curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. We customarily write {% raw %}<span class="math inline">\(\Gamma_t (s)\)</span>{% endraw %}, for some fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and call this a <em>transversal curve of the variation {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %}</em>. We can examine the velocity vector of a transversal curve at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %}, i.e. defined by {% raw %}<span class="math inline">\(V(t) = \pd{\Gamma}{s}(s,t)|_{s=0}\)</span>{% endraw %}, and this is a (piecewise differentiable) vector field along curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. {% raw %}<span class="math inline">\(V(t)\)</span>{% endraw %} is called the <em>variational field of {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %}</em>.</p>

</div>
<p>To use vector fields as test directions, we need to realize each one as the derivative of an actual variation. The exponential map provides such a variation by moving each point of the curve a short distance in the prescribed direction.</p>

<div id="prop:existence-variational-field-variation" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>.  Given a continuous, piecewise smooth field {% raw %}<span class="math inline">\(V(t)\)</span>{% endraw %}, along the piecewise differentiable curve {% raw %}<span class="math inline">\(c:[0,a] \to M\)</span>{% endraw %}, there exists a variation {% raw %}<span class="math inline">\(\Gamma : (-\varepsilon,\varepsilon) \times [0,a] \to M : (s,t) \mapsto \Gamma(s,t)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(V(t)\)</span>{% endraw %} is the variational field of {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %}. In addition, if {% raw %}<span class="math inline">\(V(0) = V(a) = 0\)</span>{% endraw %}, then it is possible to choose {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} as a <em>proper</em> variation.</p>

<p>The common parameter interval can be seen directly by considering {% raw %}<span class="math inline">\(F(s,t)=(c(t),sV(t))\)</span>{% endraw %}. The inverse image of the exponential domain is an open subset of {% raw %}<span class="math inline">\(\mathbb R\times[0,a]\)</span>{% endraw %} containing the compact set {% raw %}<span class="math inline">\(\{0\}\times[0,a]\)</span>{% endraw %}. A finite collection of product neighbourhoods therefore contains a strip {% raw %}<span class="math inline">\((-\varepsilon,\varepsilon)\times[0,a]\)</span>{% endraw %}. Taking a common finite subdivision for {% raw %}<span class="math inline">\(c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V\)</span>{% endraw %} ensures that the constructed variation is smooth on each required closed piece.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Assume the piecewise smooth field {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is continuous on {% raw %}<span class="math inline">\([0,a]\)</span>{% endraw %}, as is usual for a variational field. The image of {% raw %}<span class="math inline">\(t\mapsto(c(t),0)\)</span>{% endraw %} is a compact subset of the zero section of {% raw %}<span class="math inline">\(TM\)</span>{% endraw %}. The domain of the smooth exponential map is an open neighbourhood of that zero section. Compactness and continuity therefore give {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((c(t),sV(t))\)</span>{% endraw %} lies in this domain whenever {% raw %}<span class="math inline">\(|s|&lt;\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0\le t\le a\)</span>{% endraw %}. Set</p>
{% raw %}<div class="math display">\[\Gamma(s,t)=\exp_{c(t)}(sV(t)).\]</div>{% endraw %}
<p>This map is continuous and smooth on each piece, and {% raw %}<span class="math inline">\(\Gamma(0,t)=c(t)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\((\dif\exp_{c(t)})_0\)</span>{% endraw %} is the identity, {% raw %}<span class="math inline">\(\partial_s\Gamma(0,t)=V(t)\)</span>{% endraw %}. If the endpoint values of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} are zero, both endpoints of {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} are fixed. This also covers the case {% raw %}<span class="math inline">\(V\equiv0\)</span>{% endraw %}. ◻</p>

</div>
<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5</strong>.  We can study the length and energy functionals in <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}#eq:length-functional" data-reference-type="eqref" data-reference="eq:length-functional">(3)</a> and <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}#eq:energy-functional-curve" data-reference-type="eqref" data-reference="eq:energy-functional-curve">(3)</a>, respectively, as applied to the neighbourhood of curves in a variation {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} of curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. For brevity, write the functionals as functions of the variation parameter {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, i.e. let {% raw %}<span class="math inline">\(L(s)\)</span>{% endraw %} denote the length of the variational curve {% raw %}<span class="math inline">\(\Gamma_s (t)\)</span>{% endraw %}. We will express variations of both the length and energy functionals, but the energy functional is convenient for later variation formulas because its integrand is quadratic in the velocity. Again, {% raw %}<span class="math inline">\(E(s)\)</span>{% endraw %} denotes the energy functional associated with the variational curve {% raw %}<span class="math inline">\(\Gamma_s (t)\)</span>{% endraw %}.</p>

</div>
<div id="rem:length-energy-comparison" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6</strong>.  Take a curve {% raw %}<span class="math inline">\(c: [0,a] \to M\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(L(c)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E(c)\)</span>{% endraw %}, as in <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}#eq:length-functional" data-reference-type="eqref" data-reference="eq:length-functional">(3)</a> and <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}#eq:energy-functional-curve" data-reference-type="eqref" data-reference="eq:energy-functional-curve">(3)</a>, respectively. By the Cauchy-Schwarz inequality, letting {% raw %}<span class="math inline">\(f\equiv1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\equiv |\od{c}{t}|\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\left( \int_0^a fg \dif t \right)^2 \leq \left( \int_0^a f^2 \dif t \right) \left( \int_0^a g^2 \dif t \right) ~,\]</div>{% endraw %}
<p>With the convention {% raw %}<span class="math inline">\(E(c)=\frac12\int_0^a|\dot c|^2\,dt\)</span>{% endraw %}, this gives {% raw %}<span class="math inline">\(L(c)^2\le2aE(c)\)</span>{% endraw %}. Equality holds exactly when the speed is constant almost everywhere; for a continuous piecewise smooth curve this is the constant-speed parametrization condition. Here {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}.</p>

</div>
<p>As a consequence of Remark <a href="#rem:length-energy-comparison" data-reference-type="ref" data-reference="rem:length-energy-comparison">6</a>, we have the following result.</p>

<div id="result-7" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong>. Let {% raw %}<span class="math inline">\(\gamma:[0,a]\to M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, be a constant-speed minimizing geodesic from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Every continuous piecewise smooth curve {% raw %}<span class="math inline">\(c:[0,a]\to M\)</span>{% endraw %} with the same endpoints satisfies {% raw %}<span class="math inline">\(E(c)\ge E(\gamma)\)</span>{% endraw %}. Equality holds precisely when {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is a constant-speed minimizing geodesic from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}; it need not have the same image as {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The length-energy comparison gives</p>
{% raw %}<div class="math display">\[2aE(\gamma)=d(p,q)^2\le L(c)^2\le2aE(c).\]</div>{% endraw %}
<p>Equality throughout requires both {% raw %}<span class="math inline">\(L(c)=d(p,q)\)</span>{% endraw %} and constant speed. A length-minimizing curve cannot have a corner: in a convex normal neighbourhood, its short pieces must coincide with the unique minimizing radial geodesic. Thus a constant-speed minimizing piecewise smooth curve is a geodesic. Conversely, every such minimizing geodesic has energy {% raw %}<span class="math inline">\(d(p,q)^2/(2a)\)</span>{% endraw %}. Distinct minimizing geodesics can attain equality, as the semicircles between antipodal points on a sphere show. ◻</p>

</div>
<div id="prop:first-variation-energy-length-formulas" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong> (Formula for the First Variation of the Energy Functional of a Curve).  Let {% raw %}<span class="math inline">\(c:[a,b] \to M\)</span>{% endraw %} be a smooth regular curve on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\Gamma : (-\varepsilon,\varepsilon) \times [a,b] \to M\)</span>{% endraw %} denote a variation of {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(L(s)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E(s)\)</span>{% endraw %} are differentiable with respect to {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, and </p>

{% raw %}<span id="eq:length-functional-first-variation"></span><span id="eq:energy-functional-first-variation"></span><div class="math display">\[\begin{aligned}
         L&#x27;(0) &amp;= \int_a^b \left( \frac{\pd{}{t} \langle \pd{\Gamma}{s}, \pd{\Gamma}{t} \rangle}{\lVert \pd{\Gamma}{t}\rVert} - \frac{\langle \pd{\Gamma}{s}, \nabla_{\partial/\partial t} \pd{\Gamma}{t} \rangle}{\lVert \pd{\Gamma}{t}\rVert} \right) \dif t \\
         E&#x27;(0) &amp;= - \int_a^b  \left\langle V(t), \nabla_{\partial/\partial t} \dpd{\Gamma}{t} \right\rangle \dif t + \left\langle \dpd{\Gamma}{t} (0,b), V(b) \right\rangle - \left\langle \dpd{\Gamma}{t} (0,a), V(a) \right\rangle
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(V(t) = \pd{\Gamma}{s}(s,t)|_{s=0}\)</span>{% endraw %} is the variational field of {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %}, as defined in Remark <a href="#rem:variational-field-primer" data-reference-type="ref" data-reference="rem:variational-field-primer">3</a>.</p>

<p>Every term in the formulas for {% raw %}<span class="math inline">\(L\prime(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E\prime(0)\)</span>{% endraw %} is evaluated at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %}.</p>
<p>For length, regularity is used to avoid differentiating the norm at zero. Since {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is regular on a compact interval, its speed has a positive minimum; for small {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, smooth dependence keeps the nearby speeds uniformly positive on each piece. Differentiation under the integral is then justified by continuity on a compact parameter rectangle. The energy integrand is smooth even at zero velocity, so its first-variation formula does not need regularity.</p>
<p>A useful fully integrated form of the length formula is obtained by writing {% raw %}<span class="math inline">\(T=\dot c/|\dot c|\)</span>{% endraw %}:</p>
{% raw %}<div class="math display">\[L'(0)=\langle V,T\rangle\big|_a^b-\int_a^b\langle V,D_tT\rangle\,dt.\]</div>{% endraw %}
<p> Indeed the unintegrated derivative is {% raw %}<span class="math inline">\(\int\langle D_tV,T\rangle\,dt\)</span>{% endraw %}. This formula includes the derivative of the speed inside {% raw %}<span class="math inline">\(D_tT\)</span>{% endraw %}; only for constant speed can that derivative be omitted. If {% raw %}<span class="math inline">\(c\)</span>{% endraw %} has constant speed {% raw %}<span class="math inline">\(c_0&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(L'(0)=E'(0)/c_0\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Metric compatibility lets us differentiate the squared speed, and torsion-freeness interchanges the two derivatives of the variation. Integration by parts then separates the acceleration term from the boundary terms. For the energy functional, this gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dod{}{s} E(s) &amp;= \frac12 \int_a^b \dpd{}{s} \left\langle \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle \dif t \\
        &amp;= \int_a^b \left\langle \nabla_{\partial/\partial s} \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle \dif t \\
        &amp;= \int_a^b \left\langle \nabla_{\partial/\partial t} \dpd{\Gamma}{s} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle \dif t \\
        &amp;= \int_a^b \left( \dpd{}{t} \left\langle \dpd{\Gamma}{s} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle - \left\langle \dpd{\Gamma}{s} (s,t), \nabla_{\partial/\partial t} \dpd{\Gamma}{t} (s,t) \right\rangle \right) \dif t \\
        &amp;= \left\langle \dpd{\Gamma}{t} (s,b), \dpd{\Gamma}{s} (s,b) \right\rangle - \left\langle \dpd{\Gamma}{t} (s,a), \dpd{\Gamma}{s} (s,a) \right\rangle - \int_a^b  \left\langle \dpd{\Gamma}{s}, \nabla_{\partial/\partial t} \dpd{\Gamma}{t} \right\rangle \dif t  ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the second line follows from the metric property of the Levi-Civita connection, the third line follows from the torsion-free property, and the fourth and fifth lines follow from direct application of definition and direct calculation. Evaluating the last line at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %} gives <a href="#eq:energy-functional-first-variation" data-reference-type="eqref" data-reference="eq:energy-functional-first-variation">(1)</a>. For the length functional, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dod{}{s} L(s) &amp;= \int_a^b \dpd{}{s} \left\langle \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle^{\frac12} \dif t \\
        &amp;= \int_a^b \left\langle \nabla_{\partial/\partial s} \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle \left\langle \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle^{-\frac12} \dif t \\
        &amp;= \int_a^b \left\langle \nabla_{\partial/\partial t} \dpd{\Gamma}{s} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle \left\langle \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle^{-\frac12} \dif t \\
        &amp;= \int_a^b \left( \dpd{}{t} \left\langle \dpd{\Gamma}{s} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle - \left\langle \dpd{\Gamma}{s} (s,t), \nabla_{\partial/\partial t} \dpd{\Gamma}{t} (s,t) \right\rangle \right) 
        \left\langle \dpd{\Gamma}{t} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle^{-\frac12} \dif t  ~, 
    
\end{aligned}\]</div>{% endraw %}
<p> The same interchange of derivatives and integration by parts applies to length, with the speed factor from differentiating the square root. Evaluating the last line at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %} gives <a href="#eq:length-functional-first-variation" data-reference-type="eqref" data-reference="eq:length-functional-first-variation">(1)</a>, as desired. ◻</p>

</div>
<div id="result-9" class="remark" data-note-number="9" data-note-kind="Remark">
<p><strong>Remark 9</strong>.  Relaxing the smooth curve assumption in Proposition <a href="#prop:first-variation-energy-length-formulas" data-reference-type="ref" data-reference="prop:first-variation-energy-length-formulas">8</a> to {% raw %}<span class="math inline">\(c\)</span>{% endraw %} being piecewise differentiable, then the formulae include additional terms. Namely, let </p>

{% raw %}<div class="math display">\[\dot c(t_i^+)=\lim_{t\downarrow t_i}\partial_t\Gamma(0,t),\qquad \dot c(t_i^-)=\lim_{t\uparrow t_i}\partial_t\Gamma(0,t).\]</div>{% endraw %}
<p> For a piecewise smooth curve, perform the integration by parts separately on each closed interval {% raw %}<span class="math inline">\([t_i,t_{i+1}]\)</span>{% endraw %}, to obtain </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dod{}{s} E(s) &amp;= \sum_{0 \leq i \leq k}  \left\langle \dpd{\Gamma}{s} (s,t), \dpd{\Gamma}{t} (s,t) \right\rangle\bigg|_{t_i}^{t_{i+1}} - \int_a^b \left\langle \dpd{\Gamma}{s} (s,t), \nabla_{\partial/\partial t} \dpd{\Gamma}{t} (s,t) \right\rangle \dif t ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which, evaluating at {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %}, gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
        E&#x27;(0) &amp;= - \int_a^b  \left\langle V(t), \nabla_{\partial/\partial t} \dpd{\Gamma}{t} \right\rangle \dif t - \sum_{1 \leq i \leq k} \left\langle V(t_i), \dod{c}{t} (t_i^+) - \dod{c}{t} (t_i^{-}) \right\rangle \\
        &amp;\quad + \left\langle \dpd{\Gamma}{t} (0,b), V(b) \right\rangle  - \left\langle \dpd{\Gamma}{t} (0,a), V(a) \right\rangle~.
    \end{aligned}\]</div>{% endraw %}
<p> This is the first variation formula in <span class="citation" data-cites="carmo_riemannian_1992">(<a href="#ref-carmo_riemannian_1992" role="doc-biblioref">Carmo 1992</a>)</span>.</p>

<p>The analogous piecewise-regular length formula is</p>
{% raw %}<div class="math display">\[L'(0)=\langle V,T\rangle\big|_a^b-\sum_i\langle V(t_i),T(t_i^+)-T(t_i^-)\rangle-\sum_i\int_{t_i}^{t_{i+1}}\langle V,D_tT\rangle\,dt,\]</div>{% endraw %}
<p> where each one-sided speed is nonzero and {% raw %}<span class="math inline">\(T=\dot c/|\dot c|\)</span>{% endraw %} on that piece. The jump terms come from the upper endpoint of one integration interval and the lower endpoint of the next.</p>
<p>For energy with fixed endpoints, vanishing first variation for every continuous piecewise smooth {% raw %}<span class="math inline">\(V\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(D_t\dot c=0\)</span>{% endraw %} on each open piece, by testing with fields supported inside that piece. The remaining sum then tests the velocity jumps. A continuous field can be prescribed arbitrarily at any single joining time and made zero at the other joining times, so each jump must vanish. ODE uniqueness joins these segments into one smooth geodesic. Conversely a geodesic has zero acceleration and no jumps, making the proper first variation zero. Thus the piecewise formula proves the full critical-curve characterization rather than assuming absence of corners.</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-carmo_riemannian_1992" class="csl-entry" role="listitem">
Carmo, Manfredo Perdigão do. 1992. <em>Riemannian Geometry</em>. Mathematics. Theory &amp; Applications. Boston: Birkhäuser.
</div>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a>; <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}">Geodesics and the Energy Functional</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-06-07-frobenius-theorem %}">Frobenius Theorem</a> · Next: <a href="{% post_url 2022-08-14-parallel-transport %}">Parallel Transport</a></p></nav>

</div>
