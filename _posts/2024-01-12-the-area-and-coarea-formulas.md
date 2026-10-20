---
layout: "post"
title: "The Area and Coarea Formulas"
date: "2024-01-12"
tags: ["math", "differential geometry"]
excerpt: "Before diving into the statement and proof of the area formula, we take a slight detour to look at linear maps again in a bit more detail."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2024/01/12/area-formula/", "/2024/01/26/coarea-formula/"]
---

<div class="note-content" markdown="0">

<div id="area-formula" data-note-section="title">

</div>
<p>The change-of-variables formula must be modified when a map changes dimension or is not injective. The area formula measures the image with multiplicity; the coarea formula integrates over fibres. Both use a Jacobian that records the appropriate volume distortion.</p>

<p>We first define this Jacobian for linear maps using polar decomposition. Rademacher’s theorem then supplies the derivative of a Lipschitz map almost everywhere, allowing the same definition pointwise.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  A linear map</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(O: \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} is <strong>orthogonal</strong> if {% raw %}<span class="math inline">\((Ox) \cdot (Oy) = x \cdot y\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x,y \in \mathbb R^n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(S: \mathbb R^n \to \mathbb R^n\)</span>{% endraw %} is <strong>symmetric</strong> if {% raw %}<span class="math inline">\(x \cdot (Sy) = (Sx) \cdot y\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x,y \in \mathbb R^n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(D: \mathbb R^n \to \mathbb R^n\)</span>{% endraw %} is <strong>diagonal</strong> if there exists some vector {% raw %}<span class="math inline">\(d \in \mathbb R^n\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(Dx = (d_1 x_1, \cdots, d_n x_n)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x \in \mathbb R^n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(A: \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} has the <strong>adjoint</strong> {% raw %}<span class="math inline">\(A^* : \mathbb R^m \to \mathbb R^n\)</span>{% endraw %} defined through {% raw %}<span class="math inline">\(x \cdot (A^* y) = (Ax) \cdot y\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x \in \mathbb R^n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y \in \mathbb R^m\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div id="result-2" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Polar decomposition).  Let {% raw %}<span class="math inline">\(L: \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} be a linear map.</p>

<ol>
<li><p>If {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}, there exists a symmetric map {% raw %}<span class="math inline">\(S: \mathbb R^n \to \mathbb R^n\)</span>{% endraw %} and an orthogonal map {% raw %}<span class="math inline">\(O : \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(L = O \circ S\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(n \geq m\)</span>{% endraw %}, there exists a symmetric map {% raw %}<span class="math inline">\(S: \mathbb R^m \to \mathbb R^m\)</span>{% endraw %} and an orthogonal map {% raw %}<span class="math inline">\(O : \mathbb R^m \to \mathbb R^n\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(L = S \circ O^*\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p><strong>Proof of Theorem 2.</strong> For {% raw %}<span class="math inline">\(n\leq m\)</span>{% endraw %}, the positive semidefinite matrix {% raw %}<span class="math inline">\(L^*L\)</span>{% endraw %} has a positive semidefinite square root {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. On {% raw %}<span class="math inline">\((\ker S)^\perp\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(O(Sx)=Lx\)</span>{% endraw %}. This is well-defined and preserves inner products because {% raw %}<span class="math inline">\(\langle Lx,Ly\rangle=\langle Sx,Sy\rangle\)</span>{% endraw %}. Extend an orthonormal basis of its domain to one of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}, and extend the corresponding image basis to {% raw %}<span class="math inline">\(n\)</span>{% endraw %} orthonormal vectors in {% raw %}<span class="math inline">\(\mathbb R^m\)</span>{% endraw %}. The extended isometry satisfies {% raw %}<span class="math inline">\(L=OS\)</span>{% endraw %}, including on {% raw %}<span class="math inline">\(\ker S\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(n\geq m\)</span>{% endraw %}, apply this construction to {% raw %}<span class="math inline">\(L^*\)</span>{% endraw %} and take adjoints. Thus {% raw %}<span class="math inline">\(S\)</span>{% endraw %} can always be chosen positive semidefinite, and {% raw %}<span class="math inline">\(J(L)\)</span>{% endraw %} is the product of the {% raw %}<span class="math inline">\(\min(m,n)\)</span>{% endraw %} singular values. ◻</p>

<p>With the polar decomposition, there is no ambiguity in defining the <strong>Jacobian of a linear map {% raw %}<span class="math inline">\(L\)</span>{% endraw %}</strong> by {% raw %}<span class="math inline">\(\operatorname{Jac} (L) \triangleq |\det (S)|\)</span>{% endraw %} (regardless of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m\)</span>{% endraw %}). A straightforward calculation also shows that if {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L = O \circ S\)</span>{% endraw %} (by the polar decomposition), {% raw %}<span class="math inline">\(L^* = S^* \circ O^* = S \circ O^*\)</span>{% endraw %} (by the properties of the adjoint and the definition of a symmetric map), so {% raw %}<span class="math inline">\(L^* \circ L = S \circ O^* \circ O \circ S = S^2\)</span>{% endraw %} by the definition of an orthogonal map. As such, {% raw %}<span class="math inline">\(\det (L^* \circ L) = \det (S)^2 = (\det (S))^2 = \operatorname{Jac} (L)^2\)</span>{% endraw %}. A similar calculation applies to the other case where {% raw %}<span class="math inline">\(n \geq m\)</span>{% endraw %}.</p>

<p>To define the area formula, it is instructive to use the <em>Binet-Cauchy formula</em>. Define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \Lambda (m,n) \triangleq \{ \ell: \llbracket n \rrbracket \to \llbracket m \rrbracket : \ell \text{ is an increasing map} \}
\end{aligned}\]</div>{% endraw %}
<p> for {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}. Then, for each {% raw %}<span class="math inline">\(\ell \in \Lambda (m,n)\)</span>{% endraw %}, define the “projection map” {% raw %}<span class="math inline">\(P_\ell : \mathbb R^m \to \mathbb R^n\)</span>{% endraw %} via the formula {% raw %}<span class="math inline">\(P_\ell (x_1, \cdots, x_m) = (x_{\ell(1)}, \cdots, x_{\ell(n)})\)</span>{% endraw %}. Then, for any linear map {% raw %}<span class="math inline">\(L : \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} where {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \operatorname{Jac} (L)^2 = \sum_{\ell \in \Lambda(m,n)} (\det(P_\ell \circ L))^2 ~.
\end{aligned}\]</div>{% endraw %}
<p> Interpreting determinants as oriented volumes, the identity expresses squared volume as the sum of its squared coordinate projections. The proof of the Binet-Cauchy formula proceeds by a series of direct calculations, and can be found in introductory linear algebra texts.</p>

<p>For completeness, let {% raw %}<span class="math inline">\(v_1,\ldots,v_n\)</span>{% endraw %} be the columns of {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. Their exterior product expands in the orthonormal basis {% raw %}<span class="math inline">\(e_{\ell(1)}\wedge\cdots\wedge e_{\ell(n)}\)</span>{% endraw %}, with coefficient {% raw %}<span class="math inline">\(\det(P_\ell L)\)</span>{% endraw %}. Its squared norm is the sum of the squared coefficients. The same norm is the Gram determinant {% raw %}<span class="math inline">\(\det(\langle v_i,v_j\rangle)=\det(L^*L)\)</span>{% endraw %}. This proves the displayed identity and also handles rank-deficient {% raw %}<span class="math inline">\(L\)</span>{% endraw %}.</p>

<p>Finally, in the view of the Rademacher theorem, the gradient matrix of a Lipschitz map {% raw %}<span class="math inline">\(f: \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \Dif f = \begin{bmatrix}
        \dpd{{f^1}}{{x_1}} &amp; \cdots &amp; \dpd{{f^1}}{{x_n}} \\
        \vdots &amp; \ddots &amp; \vdots \\
        \dpd{{f^m}}{{x_1}} &amp; \cdots &amp; \dpd{{f^m}}{{x_n}} 
    \end{bmatrix} ~.
\end{aligned}\]</div>{% endraw %}
<p> The Jacobian of a Lipschitz map is therefore defined via </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J f(x) = \operatorname{Jac} (\Dif f(x)) ~,
\end{aligned}\]</div>{% endraw %}
<p> which is well-defined {% raw %}<span class="math inline">\(\lambda_n\)</span>{% endraw %}-a.e. {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. The two definitions are related directly: at a differentiability point, take the Jacobian of the linear derivative. Rademacher’s theorem guarantees that this defines the Jacobian almost everywhere.</p>

<p>The area formula equates the integral of this local volume distortion with the measure of the image, counting how many points of the domain map to each image point.</p>

<div id="thm:area-formula" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong> (Area formula).  Let {% raw %}<span class="math inline">\(f : \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} be a Lipschitz function, where {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}. Then, for each {% raw %}<span class="math inline">\(\lambda_n\)</span>{% endraw %}-measurable subset {% raw %}<span class="math inline">\(A \subset \mathbb R^n\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_A J f \dif x = \int_{\mathbb R^m} \mathcal H^0 (A \cap f^{-1} (\{y\})) \dif \mathcal H^n (y) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p><strong>Proof.</strong> Set {% raw %}<span class="math inline">\(J_nf=0\)</span>{% endraw %} on its null nondifferentiability set. That set has a null image by the Lipschitz estimate, so it contributes zero to the multiplicity integral. Exhaust {% raw %}<span class="math inline">\(A\)</span>{% endraw %} by bounded pieces to reduce to {% raw %}<span class="math inline">\(\lambda_n(A)&lt;\infty\)</span>{% endraw %}.</p>
<p>First suppose {% raw %}<span class="math inline">\(J_nf&gt;0\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. For a fixed {% raw %}<span class="math inline">\(t&gt;1\)</span>{% endraw %}, Lemma 14 of the preceding note gives disjoint Borel pieces {% raw %}<span class="math inline">\(E_k\)</span>{% endraw %} and linear maps {% raw %}<span class="math inline">\(T_k\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(G_k=A\cap E_k\)</span>{% endraw %}. On each piece the two Lipschitz estimates and linear change of variables give </p>
{% raw %}<div class="math display">\[t^{-n}\mathcal H^n(f(G_k))\leq\lambda_n(T_kG_k)=\det(T_k)\lambda_n(G_k)\leq t^n\mathcal H^n(f(G_k)).\]</div>{% endraw %}
<p> Together with the pointwise Jacobian bounds this yields </p>
{% raw %}<div class="math display">\[t^{-2n}\mathcal H^n(f(G_k))\leq\int_{G_k}J_nf\,dx\leq t^{2n}\mathcal H^n(f(G_k)).\]</div>{% endraw %}
<p> Each restriction is injective, and the pieces are disjoint in the domain. Consequently, at every {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[N(f,A,y)=\sum_k\mathbb1_{f(G_k)}(y).\]</div>{% endraw %}
<p> There is no further limiting cube argument on these injective pieces. Tonelli gives {% raw %}<span class="math inline">\(\int N\,d\mathcal H^n=\sum_k\mathcal H^n(f(G_k))\)</span>{% endraw %}. Sum the inequalities and let {% raw %}<span class="math inline">\(t\downarrow1\)</span>{% endraw %}. Lemma 13 bounds the multiplicity integral when {% raw %}<span class="math inline">\(A\)</span>{% endraw %} has finite measure, so the limiting comparison is justified.</p>
<p>Now suppose {% raw %}<span class="math inline">\(J_nf=0\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. This does <strong>not</strong> imply that {% raw %}<span class="math inline">\(A\)</span>{% endraw %} has measure zero. For {% raw %}<span class="math inline">\(0&lt;\varepsilon\leq1\)</span>{% endraw %}, introduce the injective map </p>
{% raw %}<div class="math display">\[g_\varepsilon(x)=(f(x),\varepsilon x)\in\mathbb R^{m+n}.\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(\sigma_1(x),\ldots,\sigma_n(x)\)</span>{% endraw %} are the singular values of {% raw %}<span class="math inline">\(Df(x)\)</span>{% endraw %}, then </p>
{% raw %}<div class="math display">\[J_ng_\varepsilon(x)=\prod_{i=1}^n\sqrt{\sigma_i(x)^2+\varepsilon^2}.\]</div>{% endraw %}
<p> At least one {% raw %}<span class="math inline">\(\sigma_i\)</span>{% endraw %} vanishes on {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and all are at most {% raw %}<span class="math inline">\(L=\operatorname{Lip}(f)\)</span>{% endraw %}. Hence </p>
{% raw %}<div class="math display">\[0&lt;\varepsilon^n\leq J_ng_\varepsilon(x)\leq\varepsilon(L^2+1)^{(n-1)/2}.\]</div>{% endraw %}
<p> The full-rank case already proved applies to {% raw %}<span class="math inline">\(g_\varepsilon\)</span>{% endraw %}. Its injectivity and the 1-Lipschitz projection onto the first {% raw %}<span class="math inline">\(m\)</span>{% endraw %} coordinates give </p>
{% raw %}<div class="math display">\[\mathcal H^n(f(A))\leq\mathcal H^n(g_\varepsilon(A))=\int_AJ_ng_\varepsilon\,dx\leq\varepsilon(L^2+1)^{(n-1)/2}\lambda_n(A).\]</div>{% endraw %}
<p> Let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. The multiplicity function is supported on the resulting null image, so its integral is zero, matching {% raw %}<span class="math inline">\(\int_AJ_nf=0\)</span>{% endraw %}. Splitting a general {% raw %}<span class="math inline">\(A\)</span>{% endraw %} into these parts, and then exhausting it, proves the formula. ◻</p>

<p>Applying the area formula first to simple functions and then passing to limits gives the following weighted form.</p>

<div id="thm:change-variables-Lipschitz" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>.  Let {% raw %}<span class="math inline">\(f : \mathbb R^n \to \mathbb R^m\)</span>{% endraw %} be a Lipschitz function with {% raw %}<span class="math inline">\(n \leq m\)</span>{% endraw %}. Then, for each {% raw %}<span class="math inline">\(\lambda_n\)</span>{% endraw %} summable function {% raw %}<span class="math inline">\(g: \mathbb R^n \to \mathbb R\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_{\mathbb R^n} g(x) J f(x) \dif x = \int_{\mathbb R^m} \left( \sum_{x \in f^{-1}(y)} g(x) \right) \dif \mathcal H^n (y) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p><strong>Proof of Theorem 4.</strong> Apply Theorem 3 to indicators, then to nonnegative simple functions, and use monotone convergence. For signed {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, apply this separately to {% raw %}<span class="math inline">\(g^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g^-\)</span>{% endraw %}. The condition {% raw %}<span class="math inline">\(g\in L^1\)</span>{% endraw %} suffices because {% raw %}<span class="math inline">\(J_nf\leq L^n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\int|g|J_nf&lt;\infty\)</span>{% endraw %} and the fibre sum of {% raw %}<span class="math inline">\(|g|\)</span>{% endraw %} is finite for almost every image point. More generally the formula holds for nonnegative measurable {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, allowing infinite integrals. ◻</p>

<h3 data-note-section="1" id="coarea-formula">1. Coarea Formula</h3>
<p>The coarea formula extends the slicing principle in Fubini’s theorem. It integrates over level sets of a Lipschitz map, with the Jacobian compensating for the distortion transverse to the fibres.</p>

<div id="thm:coarea" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5.</strong> Let {% raw %}<span class="math inline">\(f:\mathbb R^n\to\mathbb R^m\)</span>{% endraw %} be <strong>Lipschitz</strong>, with {% raw %}<span class="math inline">\(n\geq m\geq1\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(J_mf=\sqrt{\det(Df\,Df^*)}\)</span>{% endraw %} at differentiability points and zero elsewhere. For every Lebesgue measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\int_AJ_mf(x)\,dx=\int_{\mathbb R^m}\mathcal H^{n-m}(A\cap f^{-1}(y))\,dy.\]</div>{% endraw %}

</div>
<p><strong>Proof.</strong> Lemma 16 of the preceding note shows that a null set in the domain has null {% raw %}<span class="math inline">\((n-m)\)</span>{% endraw %}-dimensional fibres for almost every {% raw %}<span class="math inline">\(y\)</span>{% endraw %}. We may therefore discard the nondifferentiability set and work first with {% raw %}<span class="math inline">\(\lambda_n(A)&lt;\infty\)</span>{% endraw %}.</p>
<p><strong>Full rank.</strong> Suppose {% raw %}<span class="math inline">\(J_mf&gt;0\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. At each such point choose a coordinate projection {% raw %}<span class="math inline">\(P_\ell:\mathbb R^n\to\mathbb R^{n-m}\)</span>{% endraw %} that is injective on {% raw %}<span class="math inline">\(\ker Df\)</span>{% endraw %}. Then </p>
{% raw %}<div class="math display">\[h_\ell(x)=(f(x),P_\ell x)\in\mathbb R^n\]</div>{% endraw %}
<p> has invertible derivative: a vector in its kernel lies both in {% raw %}<span class="math inline">\(\ker Df\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\ker P_\ell\)</span>{% endraw %}, and so is zero. There are finitely many choices of {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}; partition {% raw %}<span class="math inline">\(A\)</span>{% endraw %} according to the first one that works.</p>
<p>Fix {% raw %}<span class="math inline">\(t&gt;1\)</span>{% endraw %}. Apply the square-map decomposition, Lemma 17, to each {% raw %}<span class="math inline">\(h_\ell\)</span>{% endraw %}. This gives disjoint pieces {% raw %}<span class="math inline">\(G_k\)</span>{% endraw %} covering {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, invertible {% raw %}<span class="math inline">\(S_k\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-bi-Lipschitz maps {% raw %}<span class="math inline">\(F_k=S_k^{-1}h_\ell\)</span>{% endraw %} on {% raw %}<span class="math inline">\(G_k\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(q(y,z)=y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_k=qS_k\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(G_k\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[f=B_kF_k,\qquad Df=B_kDF_k.\]</div>{% endraw %}
<p> Every singular value of {% raw %}<span class="math inline">\(DF_k\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\([t^{-1},t]\)</span>{% endraw %}. In the order of symmetric matrices, </p>
{% raw %}<div class="math display">\[t^{-2}B_kB_k^*\leq B_kDF_kDF_k^*B_k^*\leq t^2B_kB_k^*.\]</div>{% endraw %}
<p> Taking determinants on the {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-dimensional target yields </p>
{% raw %}<div class="math display">\[t^{-m}J_mB_k\leq J_mf\leq t^mJ_mB_k.\]</div>{% endraw %}
<p> All Jacobians here are Gram determinants; {% raw %}<span class="math inline">\(B_k\)</span>{% endraw %} is rectangular and has no ordinary determinant when {% raw %}<span class="math inline">\(n&gt;m\)</span>{% endraw %}.</p>
<p>Write {% raw %}<span class="math inline">\(Z_k=F_k(G_k)\)</span>{% endraw %} and </p>
{% raw %}<div class="math display">\[I_k=\int\mathcal H^{n-m}(G_k\cap f^{-1}(y))\,dy.\]</div>{% endraw %}
<p> On every fibre, {% raw %}<span class="math inline">\(F_k\)</span>{% endraw %} and its inverse have Lipschitz constant at most {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, so </p>
{% raw %}<div class="math display">\[t^{-(n-m)}I_k\leq\int\mathcal H^{n-m}(Z_k\cap B_k^{-1}(y))\,dy\leq t^{n-m}I_k.\]</div>{% endraw %}
<p> The middle term is {% raw %}<span class="math inline">\(J_mB_k\lambda_n(Z_k)\)</span>{% endraw %} by linear coarea. Also {% raw %}<span class="math inline">\(t^{-n}\lambda_n(G_k)\leq\lambda_n(Z_k)\leq t^n\lambda_n(G_k)\)</span>{% endraw %}. Combining these two comparisons with the pointwise Jacobian bounds gives </p>
{% raw %}<div class="math display">\[t^{-2n}I_k\leq\int_{G_k}J_mf\,dx\leq t^{2n}I_k.\]</div>{% endraw %}
<p> Tonelli sums the fibre measures over the disjoint domain pieces. Letting {% raw %}<span class="math inline">\(t\downarrow1\)</span>{% endraw %} proves the full-rank case in every pair of dimensions {% raw %}<span class="math inline">\(n\geq m\)</span>{% endraw %}.</p>
<p><strong>Rank deficient.</strong> Now suppose {% raw %}<span class="math inline">\(J_mf=0\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(E=A\times B_1^m(0)\)</span>{% endraw %} and </p>
{% raw %}<div class="math display">\[g_\varepsilon(x,w)=f(x)+\varepsilon w,\qquad p(x,w)=w.\]</div>{% endraw %}
<p> The derivative of {% raw %}<span class="math inline">\(g_\varepsilon\)</span>{% endraw %} has full target rank and </p>
{% raw %}<div class="math display">\[J_mg_\varepsilon=\sqrt{\det(DfDf^*+\varepsilon^2I_m)}\leq C_L\varepsilon\quad\text{on }E,\]</div>{% endraw %}
<p> by the same singular-value calculation as in the area proof. Applying the full-rank case in domain dimension {% raw %}<span class="math inline">\(n+m\)</span>{% endraw %} gives </p>
{% raw %}<div class="math display">\[\int_{\mathbb R^m}\mathcal H^n(E\cap g_\varepsilon^{-1}(y))\,dy=\int_EJ_mg_\varepsilon\leq C_L\varepsilon\omega_m\lambda_n(A).\]</div>{% endraw %}
<p> For almost every {% raw %}<span class="math inline">\(y\)</span>{% endraw %} these fibres have finite {% raw %}<span class="math inline">\(\mathcal H^n\)</span>{% endraw %} measure. Apply the covering inequality of Lemma 16 to the 1-Lipschitz map {% raw %}<span class="math inline">\(p\)</span>{% endraw %} on each such fibre. Its fibre over {% raw %}<span class="math inline">\(w\in B_1^m(0)\)</span>{% endraw %} is isometric to {% raw %}<span class="math inline">\(A\cap f^{-1}(y-\varepsilon w)\)</span>{% endraw %}. Tonelli and translation invariance in {% raw %}<span class="math inline">\(y\)</span>{% endraw %} therefore yield </p>
{% raw %}<div class="math display">\[\begin{aligned}
\omega_m\int\mathcal H^{n-m}(A\cap f^{-1}(y))\,dy
&amp;=\int\!\int_{B_1^m}\mathcal H^{n-m}(A\cap f^{-1}(y-\varepsilon w))\,dw\,dy\\
&amp;\leq\frac{\omega_{n-m}\omega_m}{\omega_n}\int\mathcal H^n(E\cap g_\varepsilon^{-1}(y))\,dy\\
&amp;\leq C\varepsilon\lambda_n(A).
\end{aligned}\]</div>{% endraw %}
<p> All constants are independent of {% raw %}<span class="math inline">\(\varepsilon\in(0,1]\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves zero contribution from the rank-deficient set. Split a general {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and then exhaust by finite-measure pieces. ◻</p>
<p>The argument uses the measurable-fibre covering inequality, not the coarea formula itself, on the augmented fibres, so the rank-deficient step is not circular.</p>

<p>On a Riemannian manifold, the coarea formula expresses an integral in terms of integrals over <em>level sets</em> of a function. Together with symmetrization arguments, the coarea formula is used to prove functional inequalities, such as Sobolev inequalities. For a scalar function, the formula can be read by separating the area of each level set from the distance between nearby levels.</p>

<div id="thm:coarea-formula-manifold" class="theorem" data-note-number="6" data-note-kind="Theorem">
<strong>Theorem 6.</strong> Let {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} be a smooth {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional Riemannian manifold and {% raw %}<span class="math inline">\(h:\Sigma\to\mathbb R\)</span>{% endraw %} Lipschitz. Suppose the sublevel set {% raw %}<span class="math inline">\(\{h\leq t\}\)</span>{% endraw %} is compact and {% raw %}<span class="math inline">\(f\in L^1_{\mathrm{loc}}(\Sigma)\)</span>{% endraw %}. Then
<div id="eq:coarea-formula">

</div>
{% raw %}<div class="math display">\[\int_{\{h\leq t\}}f|\nabla_\Sigma h|\,d\operatorname{Vol}_\Sigma=\int_{-\infty}^t\left(\int_{\{h=\tau\}}f\,d\mathcal H^{n-1}_\Sigma\right)d\tau.\]</div>{% endraw %}
<p> One may instead assume integrability of {% raw %}<span class="math inline">\(|f||\nabla_\Sigma h|\)</span>{% endraw %} on the sublevel set. Compactness of every sublevel is stronger than the usual definition of properness, which only requires inverse images of compact sets to be compact.</p>
</div>
<p><strong>Derivation.</strong> The Euclidean formula applies in coordinate patches, with the Riemannian volume and hypersurface Gram factors. These factors transform {% raw %}<span class="math inline">\(J_1h\)</span>{% endraw %} into the metric norm {% raw %}<span class="math inline">\(|\nabla_\Sigma h|\)</span>{% endraw %}. A countable partition of unity sums the patch identities. First use nonnegative simple functions and monotone convergence; for signed {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, apply this to its positive and negative parts. Compactness and the Lipschitz bound make the absolute integral finite under the stated local-integrability assumption. The embedded-manifold version is given in <a href="https://web.stanford.edu/class/math285/ts-gmt.pdf">Simon, Chapter 2, §6</a>. ◻</p>
<div id="thm:coarea-formula-manifold-general" class="theorem" data-note-number="7" data-note-kind="Theorem">
<strong>Theorem 7.</strong> Let {% raw %}<span class="math inline">\(O\subseteq\mathbb R^n\)</span>{% endraw %} be open, let {% raw %}<span class="math inline">\(h:O\to\mathbb R^k\)</span>{% endraw %} be Lipschitz with {% raw %}<span class="math inline">\(1\leq k\leq n\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(A\subseteq O\)</span>{% endraw %} be Lebesgue measurable. For nonnegative measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, or signed {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\int_A|f|J_kh&lt;\infty\)</span>{% endraw %},
<div id="eq:coarea-formula-general">

</div>
{% raw %}<div class="math display">\[\int_Af(x)J_kh(x)\,dx=\int_{\mathbb R^k}\left(\int_{A\cap h^{-1}(\tau)}f(x)\,d\mathcal H^{n-k}(x)\right)d\tau.\]</div>{% endraw %}
<p> In particular {% raw %}<span class="math inline">\(f\in L^1(A)\)</span>{% endraw %} suffices for a globally Lipschitz {% raw %}<span class="math inline">\(h\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Extend the Lipschitz map from {% raw %}<span class="math inline">\(O\)</span>{% endraw %} componentwise, or apply the preceding theorem on a countable open cover with disjoint measurable pieces. Its derivative agrees with the original derivative on {% raw %}<span class="math inline">\(O\)</span>{% endraw %}. Apply the set formula to indicators and then monotone convergence; separate positive and negative parts in the signed case. ◻</p>
<p>For a smooth scalar {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, we can also see the formula by slicing into thin regions between level sets. Work first in a coordinate tube where {% raw %}<span class="math inline">\(|\nabla h|&gt;0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(g\)</span>{% endraw %} be continuous with compact support in that tube. Choose a partition {% raw %}<span class="math inline">\(a=\tau_0&lt;\tau_1&lt;\cdots&lt;\tau_N=b\)</span>{% endraw %} containing the range of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} on the support. Flow along {% raw %}<span class="math inline">\(\nabla h/|\nabla h|^2\)</span>{% endraw %}. Since the derivative of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} along this field is one, an increment {% raw %}<span class="math inline">\(d\tau\)</span>{% endraw %} in the level value has normal thickness {% raw %}<span class="math inline">\(d\tau/|\nabla h|\)</span>{% endraw %}. Hence the contribution of the slab {% raw %}<span class="math inline">\(\tau_i\leq h&lt;\tau_{i+1}\)</span>{% endraw %}, to first order in {% raw %}<span class="math inline">\(\Delta\tau_i\)</span>{% endraw %}, is</p>
{% raw %}<div class="math display">\[\Delta\tau_i\int_{\{h=\tau_i\}}\frac{g}{|\nabla h|}\,d\mathcal H^{n-1}.\]</div>{% endraw %}
<p>To justify the limit, use coordinates {% raw %}<span class="math inline">\((y,\tau)\)</span>{% endraw %} given by this flow. The {% raw %}<span class="math inline">\(y\)</span>{% endraw %}-vectors are tangent to the level set and the {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}-vector is perpendicular to it, with length {% raw %}<span class="math inline">\(1/|\nabla h|\)</span>{% endraw %}. The volume Gram determinant therefore factors as the level-area Gram determinant times {% raw %}<span class="math inline">\(1/|\nabla h|^2\)</span>{% endraw %}. On the compact support these factors and {% raw %}<span class="math inline">\(g\)</span>{% endraw %} are uniformly continuous. The sum of the slab errors tends to zero with the mesh, and the Riemann sums give</p>
{% raw %}<div class="math display">\[\begin{aligned}
\int g\,d\operatorname{Vol}
&amp;=\lim_{\max\Delta\tau_i\to0}\sum_{i=0}^{N-1}\Delta\tau_i
\int_{\{h=\tau_i\}}\frac{g}{|\nabla h|}\,d\mathcal H^{n-1}\\
&amp;=\int_a^b\left(\int_{\{h=\tau\}}\frac{g}{|\nabla h|}\,d\mathcal H^{n-1}\right)d\tau.
\end{aligned}\]</div>{% endraw %}
<p>Putting {% raw %}<span class="math inline">\(g=f|\nabla h|\)</span>{% endraw %} cancels the thickness factor and gives the weighted coarea formula on the tube. A partition of unity combines such tubes on the regular set. For merely Lipschitz {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, individual levels need not be smooth hypersurfaces; the preceding measure-theoretic proof supplies the general identity.</p>
<p>The corresponding volume identity is precisely </p>
{% raw %}<div class="math display">\[\operatorname{Vol}(A\cap\{|\nabla h|&gt;0\})=\int_{\mathbb R}\int_{A\cap h^{-1}(\tau)\cap\{|\nabla h|&gt;0\}}\frac{1}{|\nabla h|}\,d\mathcal H^{n-1}\,d\tau.\]</div>{% endraw %}
<p> It follows by applying weighted coarea to {% raw %}<span class="math inline">\(f=\mathbb1_A\mathbb1_{\{|\nabla h|&gt;0\}}/|\nabla h|\)</span>{% endraw %}. The critical set must be added separately when computing all of {% raw %}<span class="math inline">\(\operatorname{Vol}(A)\)</span>{% endraw %}; for example, a constant {% raw %}<span class="math inline">\(h\)</span>{% endraw %} has zero gradient everywhere. The illustration depicts the regular-point thickness calculation.</p>

<figure id="fig:coarea">
<div class="note-diagram" style="--diagram-width: 696px; --diagram-min-width: 522px">
<div class="note-diagram__canvas" tabindex="0" role="region" aria-label="A region A in n-dimensional space is sliced by a level set f^{-1}(y); the map f sends A onto the segment f(A) in m-dimensional space, and the slice lies over the point y."><a href="{{ '/assets/images/notes/02/coarea.svg' | relative_url }}?v=038a71da1c96" title="Open diagram at full size"><img src="{{ '/assets/images/notes/02/coarea.svg' | relative_url }}?v=038a71da1c96" alt="A region A in n-dimensional space is sliced by a level set f^{-1}(y); the map f sends A onto the segment f(A) in m-dimensional space, and the slice lies over the point y." loading="lazy" decoding="async"></a></div>
</div>
<figcaption>Coarea formula.</figcaption>
</figure>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-12-16-hausdorff-measure-lipschitz-maps-and-densities %}">Hausdorff Measure, Lipschitz Maps, and Densities</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-12-16-hausdorff-measure-lipschitz-maps-and-densities %}">Hausdorff Measure, Lipschitz Maps, and Densities</a> · Next: <a href="{% post_url 2024-02-09-rectifiability %}">Rectifiability</a></p></nav>

</div>
