---
layout: "post"
title: "Application: Cartan’s Theorem"
date: "2023-03-19"
tags: ["math", "differential geometry"]
excerpt: "Application: Cartan’s Theorem. Notes on differential geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold, with Levi–Civita connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}. For an immersed submanifold, the tangent and normal parts of {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} give the induced connection and second fundamental form. See the <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">connection notes</a> for the notation.</p>

<div id="application-cartans-theorem" data-note-section="title">

</div>
<p>The differential of the exponential map is described by Jacobi fields, and the Jacobi equation is determined by curvature along radial geodesics. This suggests a way to compare two metrics: identify their tangent spaces at chosen base points, extend that identification by parallel transport, and compare their curvature tensors.</p>

<p>Cartan’s theorem makes this precise. Under the stated curvature compatibility, the map obtained by matching exponential coordinates is a local isometry. The proof compares Jacobi fields with corresponding initial data.</p>

<span id="eq:cartan-condition"></span>
<div id="thm:cartan" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1 (Cartan's local isometry theorem).</strong> Let {% raw %}<span class="math inline">\((M,g),(\widetilde M,\widetilde g)\)</span>{% endraw %} have the same dimension, and let {% raw %}<span class="math inline">\(i:T_pM\to T_{\widetilde p}\widetilde M\)</span>{% endraw %} be a linear isometry. Let {% raw %}<span class="math inline">\(U\subset T_pM\)</span>{% endraw %} be an open star-shaped neighborhood of zero such that {% raw %}<span class="math inline">\(\exp_p:U\to V\)</span>{% endraw %} is a diffeomorphism and {% raw %}<span class="math inline">\(\exp_{\widetilde p}\)</span>{% endraw %} is defined on {% raw %}<span class="math inline">\(i(U)\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(f=\exp_{\widetilde p}\circ i\circ\exp_p^{-1}\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(v\in U\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\gamma_v(t)=\exp_p(tv)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde\gamma_v(t)=\exp_{\widetilde p}(tiv)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\leq t\leq1\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(P_t,\widetilde P_t\)</span>{% endraw %} be parallel transports from their initial points, and define</p>
<p> {% raw %}<div class="math display">\[A_{v,t}=\widetilde P_t\circ i\circ P_t^{-1}:T_{\gamma_v(t)}M\longrightarrow T_{\widetilde\gamma_v(t)}\widetilde M.\]</div>{% endraw %}</p>
<p> Suppose for every such radial segment, every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and all {% raw %}<span class="math inline">\(x,y,u,w\in T_{\gamma_v(t)}M\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\langle R(x,y)u,w\rangle=\langle\widetilde R(A_{v,t}x,A_{v,t}y)A_{v,t}u,A_{v,t}w\rangle.\tag{1}\]</div>{% endraw %}</p>
<p> Then {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is a local isometry and {% raw %}<span class="math inline">\(df_p=i\)</span>{% endraw %}. It suffices to impose (1) at the endpoint of every radial segment, since the truncated segments give the intermediate conditions.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(v\in U\)</span>{% endraw %} and abbreviate {% raw %}<span class="math inline">\(A_t=A_{v,t}\)</span>{% endraw %}. It is a linear isometry by construction, and parallel transport of the initial velocity gives {% raw %}<span class="math inline">\(A_t\gamma_v'=\widetilde\gamma_v'\)</span>{% endraw %}. It also commutes with covariant differentiation along these curves: in parallel frames both operations merely differentiate the same coefficient functions.</p>
<p>For any {% raw %}<span class="math inline">\(w\in T_pM\)</span>{% endraw %}, varying the initial velocity yields the Jacobi field</p>
<p> {% raw %}<div class="math display">\[J_w(t)=(d\exp_p)_{tv}(tw),\qquad J_w(0)=0,\quad J_w'(0)=w.\]</div>{% endraw %}</p>
<p> The curvature hypothesis and nondegeneracy of the inner product imply the vector identity</p>
<p> {% raw %}<div class="math display">\[A_t R(\gamma_v',J_w)\gamma_v'=\widetilde R(\widetilde\gamma_v',A_tJ_w)\widetilde\gamma_v'.\]</div>{% endraw %}</p>
<p> Thus {% raw %}<span class="math inline">\(A_tJ_w\)</span>{% endraw %} satisfies the target Jacobi equation, with initial data {% raw %}<span class="math inline">\(0,iw\)</span>{% endraw %}. By uniqueness it equals {% raw %}<span class="math inline">\(\widetilde J_w(t)=(d\exp_{\widetilde p})_{tiv}(tiw)\)</span>{% endraw %}.</p>
<p>For clarity, in parallel orthonormal frames {% raw %}<span class="math inline">\(E_j,\widetilde E_j=A_tE_j\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(J_w=y^jE_j\)</span>{% endraw %}. Both equations are precisely</p>
<p> {% raw %}<div class="math display">\[(y^j)''+\sum_i\langle R(\gamma_v',E_i)\gamma_v',E_j\rangle y^i=0,\]</div>{% endraw %}</p>
<p> with corresponding initial coefficients. This states explicitly why matching curvature and parallel transport, rather than only curvature at the base point, determine the metrics here.</p>
<p>At {% raw %}<span class="math inline">\(t=1\)</span>{% endraw %}, the equality of Jacobi fields gives</p>
<p> {% raw %}<div class="math display">\[(d\exp_{\widetilde p})_{iv}\,i=A_1(d\exp_p)_v.\]</div>{% endraw %}</p>
<p> The source differential is invertible on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, so the chain rule yields</p>
<p> {% raw %}<div class="math display">\[df_{\exp_p(v)}=(d\exp_{\widetilde p})_{iv}\,i\,(d\exp_p)_v^{-1}=A_1.\]</div>{% endraw %}</p>
<p> Therefore {% raw %}<span class="math inline">\(df\)</span>{% endraw %} preserves all inner products and is invertible; the inverse function theorem gives a local diffeomorphism preserving the metric. At {% raw %}<span class="math inline">\(v=0\)</span>{% endraw %}, both exponential differentials are identities, so {% raw %}<span class="math inline">\(df_p=i\)</span>{% endraw %}. No nonsingularity of the target exponential was assumed—it follows from this calculation. ◻</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  The argument extends globally when both exponential maps provide global coordinates. In that case the proof of Theorem <a href="#thm:cartan" data-reference-type="ref" data-reference="thm:cartan">1</a> shows that if {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\exp_{\widetilde p}\)</span>{% endraw %} are diffeomorphisms, then {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is defined on all of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and is an isometry.</p>

<p>The curvature compatibility must then hold along every complete radial segment. The composition of the two global exponential diffeomorphisms and {% raw %}<span class="math inline">\(i\)</span>{% endraw %} is bijective with smooth inverse {% raw %}<span class="math inline">\(\exp_p\circ i^{-1}\circ\exp_{\widetilde p}^{-1}\)</span>{% endraw %}. The already proved equality of metrics therefore makes it a global Riemannian isometry, and hence a distance isometry because lengths of all curves are preserved in both directions.</p>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-02-20-second-variation-and-minimizing-geodesics %}">Second Variation and Minimizing Geodesics</a> · Next: <a href="{% post_url 2023-04-02-application-morse-index-theorem %}">Application: Morse Index Theorem</a></p></nav>

</div>
