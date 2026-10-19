---
layout: "post"
title: "Hessian and Laplacian Comparison"
date: "2023-08-29"
tags: ["math", "differential geometry"]
excerpt: "To begin the discussion, we first illustrate a remark about the Hessian operator."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2023/08/29/hessian-comparison-theorem/", "/2023/09/12/laplacian-comparison-theorem/", "/2024/06/10/the-bochner-formula/"]
---

<div class="note-content" markdown="0">

<p>Throughout, manifolds and maps are smooth unless stated otherwise. On a Riemannian manifold, {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} denotes the Levi–Civita connection. The needed local constructions start with <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}">coordinate charts</a>.</p>

<div id="hessian-comparison-theorem" data-note-section="title">

</div>
<p>Away from the base point and the cut locus, the distance function is smooth and its gradient follows radial geodesics. Its Hessian measures how this radial field changes in transverse directions. Jacobi fields relate that derivative to the index form, so curvature comparison gives Hessian comparison.</p>

<p>Taking a trace leads to the Laplacian. We first establish the Hessian identity, then explain why comparison with a constant-curvature model can use a Ricci bound.</p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1</strong> (Hessian Operator on Manifolds).  The Hessian operator associated with the smooth function {% raw %}<span class="math inline">\(u : M \to \mathbb R\)</span>{% endraw %} is a symmetric, bilinear {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-tensor that associates a pair of vector fields with a smooth function. By definition, {% raw %}<span class="math inline">\(\operatorname{grad} u\)</span>{% endraw %} is a vector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} defined through </p>

{% raw %}<div class="math display">\[\langle \operatorname{grad} u, v \rangle = \dif u_p (v) ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %}. Then, the Hessian is defined as the covariant derivative of {% raw %}<span class="math inline">\(\operatorname{grad} u\)</span>{% endraw %}, i.e. </p>

{% raw %}<span id="eq:hessian-function"></span><div class="math display">\[
        \begin{aligned}
            \operatorname{Hess} u &amp;:&amp; T_p M &amp;\to&amp; &amp; T_p M \\
            &amp;:&amp; X &amp;\mapsto&amp; &amp; \nabla_X \operatorname{grad} u ~.
        \end{aligned}\tag{1}\]</div>{% endraw %}
<p> Metric compatibility and torsion-freeness imply symmetry. Indeed, </p>

{% raw %}<span id="eq:hessian-M"></span><div class="math display">\[\begin{aligned}
 
        \langle \nabla_X \operatorname{grad} u, Y \rangle &amp;= X \langle \operatorname{grad} u, Y \rangle - \langle \nabla_X Y, \operatorname{grad} u \rangle \\
        &amp;= X(Yu) - (\nabla_X Y) u \\
        &amp;= Y(Xu) + [X,Y]u - (\nabla_X Y) u = \langle \nabla_Y \operatorname{grad} u, X \rangle ~,
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> where the second equality follows from the fact that the Levi-Civita connection is compatible with the metric, the third equality follows from definition, the fourth through sixth equalities follow from the torsion-free property of the metric connection {% raw %}<span class="math inline">\([X,Y] = \nabla_X Y - \nabla_Y X\)</span>{% endraw %}. It follows that the Hessian operator is self-adjoint, and determines a symmetric, bilinear form </p>

{% raw %}<span id="eq:hessian-operator"></span><div class="math display">\[
        \operatorname{Hess}_u (X,Y) = \langle (\operatorname{Hess} u) X, Y \rangle ~~,~~ X,Y \in T_p M ~.\tag{3}\]</div>{% endraw %}
<p> Furthermore, we note that the bracket {% raw %}<span class="math inline">\([V,W]\)</span>{% endraw %} applied to {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [V,W] u &amp;= V(W(u)) - W(V(u)) = V \langle \operatorname{grad} u, W \rangle - W \langle \operatorname{grad}  u, V \rangle \\
        &amp;= \operatorname{Hess}_u (V,W) + \langle \nabla_V W, \operatorname{grad} u \rangle - \operatorname{Hess}_u (W,V) - \langle \nabla_W V, \operatorname{grad} u \rangle \\
        &amp;= \operatorname{Hess}_u (V,W) - \operatorname{Hess}_u (W,V) + [V,W]u ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which yields another demonstration that the Hessian operator induces a symmetric, bilinear form.</p>

<p>The notation distinguishes the self-adjoint endomorphism {% raw %}<span class="math inline">\(X\mapsto\nabla_X\operatorname{grad}u\)</span>{% endraw %} from its associated bilinear tensor {% raw %}<span class="math inline">\(\nabla^2u(X,Y)\)</span>{% endraw %}. The formula {% raw %}<span class="math inline">\(X(Yu)-(\nabla_XY)u\)</span>{% endraw %} is {% raw %}<span class="math inline">\(C^\infty\)</span>{% endraw %}-linear in each argument: the derivative of a coefficient in {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} cancels between the two terms. Thus the value depends only on {% raw %}<span class="math inline">\(X_p,Y_p\)</span>{% endraw %}, and in coordinates</p>
<p> {% raw %}<div class="math display">\[(\nabla^2u)_{ij}=\partial_i\partial_j u-\Gamma^k_{ij}\partial_k u.\]</div>{% endraw %}</p>
<p> This also makes clear why ordinary second partial derivatives alone are not an invariant Hessian away from a critical point.</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  We denote the Hessian operator not as in <a href="#eq:hessian-M" data-reference-type="eqref" data-reference="eq:hessian-M">(2)</a>, but instead use the following notation: for some function {% raw %}<span class="math inline">\(u\)</span>{% endraw %} acting on vector fields {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, we write {% raw %}<span class="math inline">\(\nabla^2 u(X,Y)\)</span>{% endraw %} for the Hessian of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}.</p>

</div>
<div id="thm:hessian-comparison" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3 (Hessian comparison).</strong> Let {% raw %}<span class="math inline">\(M,\widetilde M\)</span>{% endraw %} be complete Riemannian manifolds of dimensions at least two, and let {% raw %}<span class="math inline">\(\gamma,\widetilde\gamma:[0,b]\to M,\widetilde M\)</span>{% endraw %} be unit-speed minimizing geodesics. Put {% raw %}<span class="math inline">\(p=\gamma(0),\ \widetilde p=\widetilde\gamma(0)\)</span>{% endraw %}. Suppose every radial sectional curvature along {% raw %}<span class="math inline">\(\widetilde\gamma\)</span>{% endraw %} is no greater than every radial sectional curvature along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} at the same time:</p>
<p> {% raw %}<div class="math display">\[\widetilde K^+(t):=\max_{\widetilde\Pi\ni\widetilde\gamma'(t)}\widetilde K(\widetilde\Pi) \leq K^-(t):=\min_{\Pi\ni\gamma'(t)}K(\Pi).\]</div>{% endraw %}</p>
<p> For {% raw %}<span class="math inline">\(0&lt;a&lt;b\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(q=\gamma(a),\ \widetilde q=\widetilde\gamma(a)\)</span>{% endraw %}. If</p>
<p> {% raw %}<div class="math display">\[|X|=|\widetilde X|,\qquad \langle X,\gamma'(a)\rangle=\langle\widetilde X,\widetilde\gamma'(a)\rangle,\]</div>{% endraw %}</p>
<p> then</p>
<p> {% raw %}<div class="math display">\[\nabla^2d_p(X,X)\leq\widetilde\nabla^2\widetilde d_{\widetilde p}(\widetilde X,\widetilde X).\]</div>{% endraw %}</p>
<p> The strict interior condition {% raw %}<span class="math inline">\(0&lt;a&lt;b\)</span>{% endraw %} places both endpoints before their cut times, where these distance functions are smooth.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(T=\gamma'\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde T=\widetilde\gamma'\)</span>{% endraw %}. On a normal neighborhood along the interior segment, {% raw %}<span class="math inline">\(\operatorname{grad}d_p=T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\operatorname{grad}d_p|=1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\nabla_TT=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\nabla^2d_p(T,Y)=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}; the same is true in the model. Subtract the radial parts of {% raw %}<span class="math inline">\(X,\widetilde X\)</span>{% endraw %}, which have equal lengths. The remaining normal vectors also have equal lengths, so it suffices to consider normal vectors.</p>
<p>There are unique Jacobi fields {% raw %}<span class="math inline">\(J,\widetilde J\)</span>{% endraw %} with initial value zero and terminal values {% raw %}<span class="math inline">\(X,\widetilde X\)</span>{% endraw %}, because there is no conjugate point before the cut time. They are normal. A radial geodesic variation with endpoint derivative {% raw %}<span class="math inline">\(X\)</span>{% endraw %} realizes {% raw %}<span class="math inline">\(J\)</span>{% endraw %}. Torsion-freeness interchanges the two covariant derivatives, and differentiating the terminal unit radial vector gives</p>
<p> {% raw %}<div class="math display">\[\nabla^2d_p(X,X)=\langle J'(a),X\rangle=I_M(J,J).\]</div>{% endraw %}</p>
<p> For completeness, one may parameterize the varied geodesics on the fixed interval {% raw %}<span class="math inline">\([0,a]\)</span>{% endraw %}. The derivative of their speed at the central curve is {% raw %}<span class="math inline">\(\langle X,T(a)\rangle/a=0\)</span>{% endraw %}, so normalizing their velocities introduces no extra term. The last equality follows from integration by parts, {% raw %}<span class="math inline">\(J(0)=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(J''+R(T,J)T=0\)</span>{% endraw %}.</p>
<p>If the normal endpoint vectors vanish, both Hessians vanish and there is nothing to prove. Otherwise, let {% raw %}<span class="math inline">\(E\)</span>{% endraw %} be the parallel unit field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} with {% raw %}<span class="math inline">\(E(a)=X/|X|\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(f(t)=|\widetilde J(t)|\)</span>{% endraw %}. The field {% raw %}<span class="math inline">\(\widetilde J\)</span>{% endraw %} has no zero on {% raw %}<span class="math inline">\((0,a]\)</span>{% endraw %}, since there are no conjugate points there. In a parallel frame, {% raw %}<span class="math inline">\(\widetilde J(t)=t(w+O(t))\)</span>{% endraw %} with {% raw %}<span class="math inline">\(w\ne0\)</span>{% endraw %}; thus {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is smooth from the right at zero. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, Cauchy–Schwarz gives</p>
{% raw %}<div class="math display">\[f'(t)=\frac{\langle\widetilde J',\widetilde J\rangle}{|\widetilde J|},\qquad |f'(t)|\leq|\widetilde J'(t)|.\]</div>{% endraw %}
<p>Set {% raw %}<span class="math inline">\(V=fE\)</span>{% endraw %}. This field has the same endpoints as {% raw %}<span class="math inline">\(J\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|V|=|\widetilde J|\)</span>{% endraw %}. The index lemma, followed by the curvature hypothesis, now gives</p>
{% raw %}<div class="math display">\[\begin{aligned}I_M(J,J)&amp;\leq I_M(V,V)\\
&amp;=\int_0^a\bigl(f'^2-K_M(T,E)f^2\bigr)\,dt\\
&amp;\leq\int_0^a\bigl(|\widetilde J'|^2-\widetilde K(\widetilde T,\widetilde J)|\widetilde J|^2\bigr)\,dt
=I_{\widetilde M}(\widetilde J,\widetilde J).
\end{aligned}\]</div>{% endraw %}
<p>The curvature integrands are zero at the initial endpoint. Applying the Hessian identity on {% raw %}<span class="math inline">\(\widetilde M\)</span>{% endraw %} proves the conclusion. This comparison uses only the length of {% raw %}<span class="math inline">\(\widetilde J\)</span>{% endraw %}, so the two manifolds need not have the same dimension. ◻</p>
</div>
<p>As we move onto other comparison theorems, we need the relation between the Laplacian and the trace of the Hessian on a manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<div id="def:laplacian" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. The <em>Laplacian</em> of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is an operator, denoted {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, defined on the space of real-valued, smooth functions on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
            \Delta &amp;:&amp; \mathscr F (M) &amp;\to&amp; &amp; \mathscr F (M) \\
            &amp;:&amp; u &amp;\mapsto&amp; &amp; \operatorname{div} \operatorname{grad} u ~.
        \end{aligned}\]</div>{% endraw %}
<p>A Riemannian metric is part of this definition: it determines both the gradient and the divergence. Our sign is {% raw %}<span class="math inline">\(\Delta=\sum_i\partial_i^2\)</span>{% endraw %} on Euclidean space.</p>
</div>
<div id="lem:laplacian-formula" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a smooth function on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. In a geodesic frame at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Delta f(p) = \sum_{1 \leq i \leq n}E_i(E_i (f)) (p)\)</span>{% endraw %}.</p>

<p>All identities using {% raw %}<span class="math inline">\(\nabla_{E_i}E_j=0\)</span>{% endraw %} in the proof are evaluated at the chosen point {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. For an arbitrary local orthonormal frame the formula is</p>
<p> {% raw %}<div class="math display">\[\Delta f=\sum_i\bigl(E_i(E_if)-(\nabla_{E_i}E_i)f\bigr).\]</div>{% endraw %}</p>
<p> A geodesic orthonormal frame removes the correction only at its center, not throughout a curved neighborhood.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Pick any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{E_i\}_{1 \leq i \leq n}\)</span>{% endraw %} denote a geodesic frame at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. First, the divergence along a vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is the trace of the linear map {% raw %}<span class="math inline">\(Y \mapsto \nabla_Y X\)</span>{% endraw %}. Since the vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} admits an orthonormal expansion {% raw %}<span class="math inline">\(X = \sum_{k=1}^n f_kE_k\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \nabla_{E_i}X = \nabla_{E_i}\left(\sum_{k=1}^n f_kE_k\right) = \sum_{k=1}^n E_i(f_k)E_k + \sum_{k=1}^n f_k \nabla_{E_i}E_k ~.
    
\end{aligned}\]</div>{% endraw %}
<p> By the fact that {% raw %}<span class="math inline">\(\{E_i\}_{1 \leq i \leq n}\)</span>{% endraw %} is a geodesic frame, we have {% raw %}<span class="math inline">\((\nabla_{E_i}E_k)|_p = 0\)</span>{% endraw %}. Therefore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{div} X &amp;=\sum_{1 \leq i, j \leq n}\langle\nabla_{E_j}(f_iE_i),E_j\rangle = \sum_{1 \leq i, j \leq n}\bigl(E_j(f_i)\langle E_i,E_j\rangle + f_i\langle\nabla_{E_j}E_i,E_j\rangle\bigr)=\sum_{1 \leq i \leq n}E_i(f_i) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, by definition, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        {\operatorname{grad}} f = \sum_{1 \leq i \leq n} \langle {\operatorname{grad}} f,E_i\rangle E_i = \sum_{1 \leq i \leq n} {\rm d}f(E_i)E_i = \sum_{1 \leq i \leq n} E_i(f)E_i ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Since the Laplacian is defined as {% raw %}<span class="math inline">\(\Delta f = \operatorname{div} \operatorname{grad} f\)</span>{% endraw %} for some smooth function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, we have the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Delta f(p) = \operatorname{div} \left( \sum_{1 \leq i \leq n} E_i(f)E_i \right)(p) = \sum_{1 \leq i \leq n}E_i(E_i (f)) (p) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<div id="lem:laplacian-hessian" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(f : M \to \mathbb R\)</span>{% endraw %}. The <em>Laplacian operator</em> {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} applied to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is given by the formula {% raw %}<span class="math inline">\(\Delta f = \operatorname{Tr} \nabla^2 f\)</span>{% endraw %}.</p>

<p>Here {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is smooth and the trace is taken with respect to the Riemannian metric, so it is independent of the chosen orthonormal basis.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Pick any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\{E_i\}_{1 \leq i \leq n}\)</span>{% endraw %} be an orthonormal basis on {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Delta f &amp;= \operatorname{div}_M \operatorname{grad} f = \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \operatorname{grad} f, E_i \rangle = \sum_{1 \leq i \leq n} \langle (\nabla^2 f)E_i, E_i \rangle = \operatorname{Tr} \nabla^2 f ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<div id="cor:laplacian-comparison-prelim" class="corollary" data-note-number="7" data-note-kind="Corollary">
<p><strong>Corollary 7</strong>.  Assume in addition that the two manifolds have the same dimension. Under the assumptions of Theorem <a href="#thm:hessian-comparison" data-reference-type="ref" data-reference="thm:hessian-comparison">3</a>, {% raw %}<span class="math inline">\(\Delta d_p (q) \leq \widetilde \Delta \widetilde d_{\widetilde p} ({\widetilde q})\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Choose orthonormal bases {% raw %}<span class="math inline">\(T(a),E_2,\ldots,E_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde T(a),\widetilde E_2,\ldots,\widetilde E_n\)</span>{% endraw %}. Apply Theorem 3 to each pair {% raw %}<span class="math inline">\(E_i,\widetilde E_i\)</span>{% endraw %}. The radial entries on both sides are zero, and summing the remaining {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} inequalities gives the traces by Lemma 6. Equal dimensions ensure that the sums have the same number of terms. ◻</p>
</div>
<h3 data-note-section="1" id="laplacian-comparison-theorem">1. Laplacian Comparison Theorem</h3>
<p>There are situations where we want to obtain a Laplacian comparison as in Corollary <a href="#cor:laplacian-comparison-prelim" data-reference-type="ref" data-reference="cor:laplacian-comparison-prelim">7</a>, but would like to relax the sectional curvatures requirements in Theorem <a href="#thm:hessian-comparison" data-reference-type="ref" data-reference="thm:hessian-comparison">3</a>—namely, to imposing requirements on the Ricci curvature instead. Comparison with a constant-curvature model admits such a result. The reason is that summing the curvature terms in the index forms gives Ricci curvature.</p>

<p>We will suppress dependence on the ambient dimension below. Explicitly, when the dimension of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is known (e.g. {% raw %}<span class="math inline">\(\dim M = n\)</span>{% endraw %}), then {% raw %}<span class="math inline">\(M_k = M^n_k\)</span>{% endraw %} denotes the space of {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional space forms with constant sectional curvature {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<div id="thm:laplacian-comparison" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8 (Laplacian comparison).</strong> Let {% raw %}<span class="math inline">\(M^n\)</span>{% endraw %} be a complete connected Riemannian manifold, {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %}, with</p>
<p> {% raw %}<div class="math display">\[\operatorname{Ric}(V,V)\geq(n-1)k|V|^2\quad\text{for all }V.\]</div>{% endraw %}</p>
<p> Let {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} be unit speed from {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} strictly before the cut time along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, and also {% raw %}<span class="math inline">\(t&lt;\pi/\sqrt{k}\)</span>{% endraw %} if {% raw %}<span class="math inline">\(k&gt;0\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\Delta d_p(\gamma(t))\leq(n-1)\frac{s_k'(t)}{s_k(t)} =\Delta_{M_k^n}d_{\widetilde p}(\widetilde\gamma(t)),\]</div>{% endraw %}</p>
<p> where {% raw %}<span class="math inline">\(M_k^n\)</span>{% endraw %} is the complete simply connected space form of curvature {% raw %}<span class="math inline">\(k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde\gamma\)</span>{% endraw %} is unit speed from {% raw %}<span class="math inline">\(\widetilde p\)</span>{% endraw %}. This is a classical pointwise assertion on the smooth part of the distance function; it is not a statement about its classical derivatives at the base point or cut locus.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix such a {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and parallel transport an orthonormal frame {% raw %}<span class="math inline">\(T,E_2,\ldots,E_n\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma|_{[0,t]}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(i\geq2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(J_i(0)=0,\ J_i(t)=E_i(t)\)</span>{% endraw %} be the unique normal Jacobi field. The Hessian identity from Theorem 3 gives</p>
<p> {% raw %}<div class="math display">\[\Delta d_p(\gamma(t))=\sum_{i=2}^n I(J_i,J_i).\]</div>{% endraw %}</p>
<p> Transfer the explicit model Jacobi fields as test fields</p>
<p> {% raw %}<div class="math display">\[V_i(u)=\frac{s_k(u)}{s_k(t)}E_i(u),\qquad 0\leq u\leq t.\]</div>{% endraw %}</p>
<p> They have the same endpoints as {% raw %}<span class="math inline">\(J_i\)</span>{% endraw %}, and the denominator is positive on the stated interval. The index lemma gives {% raw %}<span class="math inline">\(I(J_i,J_i)\leq I(V_i,V_i)\)</span>{% endraw %}. Summing before estimating the curvature terms is the key step:</p>
<p> {% raw %}<div class="math display">\[\begin{aligned} \sum_{i=2}^n I(V_i,V_i) &amp;=\frac1{s_k(t)^2}\int_0^t \left((n-1)s_k'(u)^2-s_k(u)^2\operatorname{Ric}(T,T)\right)\,du\\ &amp;\leq\frac{n-1}{s_k(t)^2}\int_0^t(s_k'^2-ks_k^2)\,du\\ &amp;=(n-1)\frac{s_k'(t)}{s_k(t)}. \end{aligned}\]</div>{% endraw %}</p>
<p> Here our curvature convention gives {% raw %}<span class="math inline">\(\operatorname{Ric}(T,T)=\sum_{i=2}^n\langle R(T,E_i)T,E_i\rangle\)</span>{% endraw %}. Finally {% raw %}<span class="math inline">\((s_ks_k')'=s_k'^2-ks_k^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_k(0)=0\)</span>{% endraw %}, proving the last equality. In the model all {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} themselves are the endpoint Jacobi fields and its Ricci curvature equals {% raw %}<span class="math inline">\((n-1)k\)</span>{% endraw %}, so every inequality becomes equality there. ◻</p>
</div>
<h3 data-note-section="2" id="subapp:bochner">2. The Bochner Formula</h3>
<p>On Euclidean space {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}, partial derivatives commute, hence </p>

{% raw %}<span id="eq:bochner-Rn"></span><div class="math display">\[
    \frac12 \Delta |\nabla u|^2 = |\operatorname{Hess}_u|^2 + \langle \nabla u, \nabla \Delta u \rangle ~.\tag{4}\]</div>{% endraw %}
<p> On a Riemannian manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, derivatives do not commute. The curvature tensor measures the failure of covariant derivatives to commute. After tracing, the curvature contribution becomes the Ricci term in Bochner’s formula.</p>

<div id="prop:bochner-M" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong> (Bochner formula).  On a Riemannian manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:bochner-M"></span><div class="math display">\[
        \frac12 \Delta |\nabla u|^2 = |\operatorname{Hess}_u|^2 + \langle \nabla u, \nabla \Delta u \rangle + \operatorname{Ric}_M (\nabla u, \nabla u) ~.\tag{5}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof of Proposition <a href="#prop:bochner-M" data-reference-type="ref" data-reference="prop:bochner-M">9</a>.</em> Let {% raw %}<span class="math inline">\(\{E_i\}_{1 \leq i \leq n}\)</span>{% endraw %} denote a local orthonormal frame of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\Delta v = \sum_{1 \leq i \leq n} \nabla^2 v(E_i,E_i) = \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla v, E_i \rangle ~.\]</div>{% endraw %}
<p> Putting {% raw %}<span class="math inline">\(v = \frac12 |\nabla u|^2\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \langle \nabla v, E_j \rangle = \langle \nabla_{E_j} \nabla u, \nabla u \rangle &amp;= \operatorname{Hess}_u (E_j, \nabla u) \\
        &amp;= \operatorname{Hess}_u (\nabla u, E_j) = \langle \nabla_{\nabla u} \nabla u, E_j \rangle ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the first equality follows from compatibility with the metric, second equality follows from definition, third equality follows from symmetry, and the final equality follows from definition. Since this is true for any local coordinates {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\nabla v = \nabla_{\nabla u} \nabla u ~.\]</div>{% endraw %}
<p> A direct calculation reveals </p>

{% raw %}<span id="eq:bochner-int-1"></span><div class="math display">\[\begin{aligned}
        \nonumber \Delta v &amp;= \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla_{\nabla u} \nabla u, E_i \rangle \\
        &amp;= \sum_{1 \leq i \leq n} \langle \nabla_{\nabla u} \nabla_{E_i} \nabla u - \nabla_{[\nabla u, E_i]} \nabla u + R^M (\nabla u, E_i) \nabla u, E_i \rangle ~, 
    
\end{aligned}\tag{6}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(R^M\)</span>{% endraw %} is the Riemann curvature tensor on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Expanding <a href="#eq:bochner-int-1" data-reference-type="eqref" data-reference="eq:bochner-int-1">(6)</a>, we note that the last term {% raw %}<span class="math inline">\(\sum_{1 \leq i \leq n} \langle R^M (\nabla u, E_i) \nabla u, E_i \rangle = \operatorname{Ric}_M (\nabla u, \nabla u)\)</span>{% endraw %}, by definition. The second term, by symmetry of the connection, becomes </p>

{% raw %}<span id="eq:bochner-int-2"></span><div class="math display">\[\begin{aligned}
        \nonumber - \sum_{1 \leq i \leq n} \langle \nabla_{[\nabla u, E_i]} \nabla u, E_i \rangle &amp;= - \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u,[\nabla u, E_i] \rangle = \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{E_i} \nabla u - \nabla_{\nabla u} E_i \rangle \\
        &amp;= |\operatorname{Hess}_u|^2 - \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle ~. 
    
\end{aligned}\tag{7}\]</div>{% endraw %}
<p> The first term can be rewritten by appealing to the compatibility of the connection with the metric, and becomes </p>

{% raw %}<span id="eq:bochner-int-3"></span><div class="math display">\[\begin{aligned}
        \nonumber \sum_{1 \leq i \leq n} \langle \nabla_{\nabla u} \nabla_{E_i} \nabla u, E_i \rangle &amp;= \sum_{1 \leq i \leq n} \nabla u \langle \nabla_{E_i} \nabla u, E_i \rangle - \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle \\
        &amp;= \langle \nabla u, \nabla \Delta u \rangle - \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle ~. 
    
\end{aligned}\tag{8}\]</div>{% endraw %}
<p> Combining <a href="#eq:bochner-int-1" data-reference-type="eqref" data-reference="eq:bochner-int-1">(6)</a>, <a href="#eq:bochner-int-2" data-reference-type="eqref" data-reference="eq:bochner-int-2">(7)</a>, and <a href="#eq:bochner-int-3" data-reference-type="eqref" data-reference="eq:bochner-int-3">(8)</a>, we have </p>

{% raw %}<span id="eq:bochner-int-4"></span><div class="math display">\[\Delta v = |\operatorname{Hess}_u|^2  + \langle \nabla u, \nabla \Delta u \rangle + \operatorname{Ric}_M (\nabla u, \nabla u) - 2 \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle ~. \tag{9}\]</div>{% endraw %}
<p> To complete the proof, we claim that {% raw %}<span class="math inline">\(\sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle = 0\)</span>{% endraw %}. The claim follows from a series of direct calculations. Expanding both {% raw %}<span class="math inline">\(\nabla_{E_i} \nabla u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nabla_{\nabla u} E_i\)</span>{% endraw %} in the basis {% raw %}<span class="math inline">\(\{E_j\}_{1 \leq j \leq n}\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \nabla_{E_i} \nabla u &amp;= \sum_{1 \leq j \leq n} a_{ij} E_j \\
        \nabla_{\nabla u} E_i &amp;= \sum_{1 \leq j \leq n} b_{ij} E_j
    
\end{aligned}\]</div>{% endraw %}
<p> where </p>

{% raw %}<div class="math display">\[\begin{aligned}
        a_{ij} &amp;= \langle \nabla_{E_i} \nabla u, E_j \rangle ~, \\
        b_{ij} &amp;= \langle \nabla_{\nabla u} E_i, E_j \rangle ~.
    
\end{aligned}\]</div>{% endraw %}
<p> It follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle = \sum_{1 \leq i \leq n} \sum_{1 \leq j \leq n} a_{ij} b_{ij} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Note {% raw %}<span class="math inline">\(a_{ij}\)</span>{% endraw %} is symmetric, by the symmetry of the Hessian operator. By compatibility of the connection with the metric, {% raw %}<span class="math inline">\(b_{ij} = \langle \nabla_{\nabla u} E_i, E_j \rangle = \nabla u \langle E_i, E_j \rangle - \langle  E_i, \nabla_{\nabla u} E_j \rangle = - \langle  E_i, \nabla_{\nabla u} E_j \rangle = -b_{ji}\)</span>{% endraw %}. Finally, it follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} \langle \nabla_{E_i} \nabla u, \nabla_{\nabla u} E_i \rangle = \sum_{1 \leq i \leq n} \sum_{1 \leq j \leq n} a_{ij} b_{ij} &amp;= - \sum_{1 \leq i} \sum_{1 \leq j \leq n} a_{ij} b_{ji} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> and since {% raw %}<span class="math inline">\(b_{ij} + b_{ji} = 0\)</span>{% endraw %}, it follows that the left-most expression evaluates to zero. This concludes the proof of the Bochner formula. ◻</p>

<p>More explicitly, if {% raw %}<span class="math inline">\(S=\sum_{i,j}a_{ij}b_{ij}\)</span>{% endraw %}, then relabeling the two indices gives</p>
<p> {% raw %}<div class="math display">\[S=\sum_{i,j}a_{ji}b_{ji}=-\sum_{i,j}a_{ij}b_{ij}=-S,\]</div>{% endraw %}</p>
<p> using symmetry of {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and skew-symmetry of {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(S=0\)</span>{% endraw %}. The skew-symmetry uses a frame orthonormal on its whole domain, so {% raw %}<span class="math inline">\(\nabla u\langle E_i,E_j\rangle=0\)</span>{% endraw %}. The norm in the formula is {% raw %}<span class="math inline">\(|\operatorname{Hess}_u|^2=\sum_{i,j}a_{ij}^2\)</span>{% endraw %}. In Euclidean coordinates, the preliminary identity follows directly from {% raw %}<span class="math inline">\(\frac12\sum_{i,j}\partial_i^2(\partial_j u)^2 =\sum_{i,j}(\partial_{ij}u)^2+\sum_j(\partial_ju)\partial_j\Delta u\)</span>{% endraw %}.</p>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-05-13-the-cut-locus-and-closed-geodesics %}">The Cut Locus and Closed Geodesics</a>; <a href="{% post_url 2023-08-16-comparison-theory %}">Comparison Theory</a>; <a href="{% post_url 2023-02-20-second-variation-and-minimizing-geodesics %}">Second Variation and Minimizing Geodesics</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-08-16-comparison-theory %}">Comparison Theory</a> · Next: <a href="{% post_url 2023-09-26-toponogov-theorem %}">Toponogov Theorem</a></p></nav>

</div>
