---
layout: "post"
title: "The Second Fundamental Form and the Gauss Equations"
date: "2022-12-14"
tags: ["math", "differential geometry"]
excerpt: "We recap a number of concepts before studying submanifolds and how to characterize their intrinsic geometric properties."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/12/14/second-fundamental-form/", "/2022/12/28/second-fundamental-tensor-and-form/", "/2023/01/10/fundamental-equations/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold, with Levi–Civita connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}. For an immersed submanifold, the tangent and normal parts of {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} give the induced connection and second fundamental form. See the <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">connection notes</a> for the notation.</p>

<div id="sec:second-fundamental" data-note-section="title">

</div>
<p>An immersed submanifold has two notions of differentiation: differentiation using its own metric and differentiation in the ambient manifold. Orthogonal projection relates them. The tangential part of the ambient derivative gives the induced connection, while the normal part measures how the submanifold bends.</p>

<p>After recalling covering metrics, we define this normal contribution and derive the Gauss equation. It expresses the intrinsic curvature in terms of ambient curvature and the second fundamental form.</p>

<div id="def:covering-map" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  Let {% raw %}<span class="math inline">\(M, \widetilde M\)</span>{% endraw %} be differentiable manifolds. Then, {% raw %}<span class="math inline">\(p : \widetilde M \to M\)</span>{% endraw %} is a <em>covering map</em> if {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is smooth and surjective, and for all {% raw %}<span class="math inline">\(m \in M\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(U = U_m \subset M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(p^{-1} (U) = \bigsqcup_{i \in I} U_i\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(p|_{U_i}: U_i \to U\)</span>{% endraw %} is a diffeomorphism.</p>

</div>
<p>A recap of basic facts from algebraic topology can be found in Appendix <a href="{% post_url 2024-04-17-covering-spaces-and-the-fundamental-group-of-the-circle %}#app:algebraic-topology" data-reference-type="ref" data-reference="app:algebraic-topology">Covering Spaces and the Fundamental Group of the Circle</a>.</p>

<figure id="fig:covering-map">
<div class="note-diagram" style="--diagram-width: 524px; --diagram-min-width: 393px">
<div class="note-diagram__canvas" tabindex="0" role="region" aria-label="A covering map p from M-tilde onto M: the preimage of an evenly covered neighbourhood U of a point m is a stack of disjoint sheets, each mapped homeomorphically onto U."><a href="{{ '/assets/images/notes/02/covering-map.svg' | relative_url }}?v=b120db83bbd1" title="Open diagram at full size"><img src="{{ '/assets/images/notes/02/covering-map.svg' | relative_url }}?v=b120db83bbd1" alt="A covering map p from M-tilde onto M: the preimage of an evenly covered neighbourhood U of a point m is a stack of disjoint sheets, each mapped homeomorphically onto U." loading="lazy" decoding="async"></a></div>
</div>
<figcaption>Covering map.</figcaption>
</figure>
<div id="result-2" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  Let {% raw %}<span class="math inline">\(M, \widetilde M\)</span>{% endraw %} be differentiable manifolds. Then, {% raw %}<span class="math inline">\(p : \widetilde M \to M\)</span>{% endraw %} is a <em>Riemann covering map</em> if {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is a smooth covering map, and is additionally a local isometry.</p>

</div>
<div id="result-3" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3.</strong> If {% raw %}<span class="math inline">\(p:N\to M\)</span>{% endraw %} is a smooth covering and {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is a Riemannian metric on the <em>base</em> {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, there is a unique metric {% raw %}<span class="math inline">\(h=p^*g\)</span>{% endraw %} on {% raw %}<span class="math inline">\(N\)</span>{% endraw %} making {% raw %}<span class="math inline">\(p\)</span>{% endraw %} a Riemannian covering.</p>
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(h_n(v,w)=g_{p(n)}(dp_n v,dp_n w)\)</span>{% endraw %}. Smoothness follows in covering charts, and positive definiteness follows because {% raw %}<span class="math inline">\(dp_n\)</span>{% endraw %} is an isomorphism. The local-isometry condition is exactly this formula, so uniqueness follows. An arbitrary metric upstairs need not descend: that requires agreement of these inner products over all sheets. ◻</p>
</div>
<div id="result-4" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4.</strong> Suppose a discrete group {% raw %}<span class="math inline">\(G\)</span>{% endraw %} acts freely and properly on a smooth Riemannian manifold {% raw %}<span class="math inline">\((N,h)\)</span>{% endraw %} by isometries. Then {% raw %}<span class="math inline">\(M=N/G\)</span>{% endraw %} has a unique quotient smooth structure and metric {% raw %}<span class="math inline">\(g\)</span>{% endraw %} for which the projection {% raw %}<span class="math inline">\(p:N\to M\)</span>{% endraw %} is a Riemannian covering. Here properness is for the discrete action; equivalently, only finitely many translates of one compact set can meet another.</p>
</div>
<span id="eq:unique-metric-quotient"></span>
<div class="proof">
<p><em>Proof.</em> The free proper discrete quotient construction gives smooth covering charts, as proved in the manifold examples. Define for {% raw %}<span class="math inline">\(n\in p^{-1}(m)\)</span>{% endraw %}</p>
<p> {% raw %}<div class="math display">\[g_m(u,v)=h_n((dp_n)^{-1}u,(dp_n)^{-1}v).\tag{1}\]</div>{% endraw %}</p>
<p> If {% raw %}<span class="math inline">\(n'=f(n)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(f\in G\)</span>{% endraw %}, differentiating {% raw %}<span class="math inline">\(p\circ f=p\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(dp_{n'}\circ df_n=dp_n\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\((dp_{n'})^{-1}=df_n\circ(dp_n)^{-1}\)</span>{% endraw %}. The isometry property of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} therefore makes the displayed value independent of the lift {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. In a covering chart it is the pullback of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} by a smooth inverse sheet, so it is smooth and positive definite. This formula is forced by local isometry and proves uniqueness. Discreteness is needed: a positive-dimensional free proper group action generally has positive-dimensional fibers and is not a covering. ◻</p>
</div>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5 (Flat tori).</strong> Let {% raw %}<span class="math inline">\(e_1,\ldots,e_n\)</span>{% endraw %} be a basis of Euclidean {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\Gamma=\{\sum_j k_je_j:k_j\in\mathbb Z\}\)</span>{% endraw %}. Translation by {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} acts freely and properly: a compact difference set intersects the discrete lattice in only finitely many points. The quotient inherits a flat metric by Proposition 4.</p>
<p>Write {% raw %}<span class="math inline">\(x=\sum_j a_je_j\)</span>{% endraw %} with real coefficients. The map {% raw %}<span class="math inline">\(x\mapsto(e^{2\pi i a_1},\ldots,e^{2\pi i a_n})\)</span>{% endraw %} has precisely the lattice cosets as fibers, and induces a continuous bijection {% raw %}<span class="math inline">\(\mathbb R^n/\Gamma\to(S^1)^n\)</span>{% endraw %}. The quotient is compact, since it is the image of the closed fundamental parallelepiped {% raw %}<span class="math inline">\(0\leq a_j\leq1\)</span>{% endraw %}, so this is a homeomorphism. On a product of open intervals of length one in the {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %}, the map is a smooth parametrization of its <em>open image</em>, not a bijection onto the whole torus. Its inverse is a local chart, and chart changes add integer constants.</p>
<p>To see the descended metric directly, for {% raw %}<span class="math inline">\(y=p(x)\)</span>{% endraw %} define</p>
<p> {% raw %}<div class="math display">\[g_{\Gamma,y}(v,w)=\langle(dp_x)^{-1}v,(dp_x)^{-1}w\rangle.\]</div>{% endraw %}</p>
<p> For another lift {% raw %}<span class="math inline">\(x'=x+\gamma\)</span>{% endraw %}, the translation {% raw %}<span class="math inline">\(\tau_\gamma\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(dp_{x'}d\tau_\gamma=dp_x\)</span>{% endraw %} and is an isometry, proving lift independence. The differential, not a pointwise inverse of the covering map, acts on the vectors here. In the local coefficient coordinates,</p>
<p> {% raw %}<div class="math display">\[g_\Gamma=\sum_{i,j}\langle e_i,e_j\rangle\,da_i\otimes da_j.\]</div>{% endraw %}</p>
<p> Its coefficients are constant, so its Christoffel symbols and curvature vanish. This proves flatness for any lattice basis; if the basis is orthonormal the coefficients are {% raw %}<span class="math inline">\(\delta_{ij}\)</span>{% endraw %}. The displayed product-of-circles identification transports this metric; it does not assert equality with the standard unit-circle product metric, which has a {% raw %}<span class="math inline">\(4\pi^2\)</span>{% endraw %} scale factor in these coordinates.</p>
</div>
<div id="result-6" class="definition" data-note-number="6" data-note-kind="Definition">
<p><strong>Definition 6</strong>. A submanifold {% raw %}<span class="math inline">\(N\subset M\)</span>{% endraw %}, with the induced Riemannian metric, is <em>totally geodesic</em> if, for every {% raw %}<span class="math inline">\(p\in N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v\in T_pN\)</span>{% endraw %}, the ambient geodesic with initial data {% raw %}<span class="math inline">\((p,v)\)</span>{% endraw %} remains in {% raw %}<span class="math inline">\(N\)</span>{% endraw %} for all sufficiently small times. Equivalently, each geodesic of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is an ambient geodesic on its interval of definition. The local condition is necessary when {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is an open part of a larger totally geodesic submanifold.</p>
</div>
<div id="result-7" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>.  Let {% raw %}<span class="math inline">\((N,h)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} denote differentiable manifolds. Let {% raw %}<span class="math inline">\(p: N \to M\)</span>{% endraw %} be a Riemann covering map. Then, the geodesics of {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} are the projection of geodesics of {% raw %}<span class="math inline">\((N,h)\)</span>{% endraw %}. On the other hand, geodesics of {% raw %}<span class="math inline">\((N,h)\)</span>{% endraw %} are liftings of geodesics of {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %}.</p>

<p><em>Proof.</em> A local isometry preserves the Levi–Civita connection by its metric and torsion characterization. Thus on each covering sheet</p>
<p> {% raw %}<div class="math display">\[dp\left(\nabla^N_{\dot\gamma}\dot\gamma\right)=\nabla^M_{(p\circ\gamma)'}(p\circ\gamma)'.\]</div>{% endraw %}</p>
<p> This proves that projections of geodesics are geodesics. Conversely a base geodesic on an interval has a unique lift after a point of its initial fiber is chosen. On each inverse sheet this lift is smooth and satisfies the geodesic equation, so it is a geodesic throughout its interval. No completeness assumption is needed for this interval-wise statement. ◻</p>
</div>
<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8</strong> (Totally geodesic submanifolds). </p>

<ol>
<li><p>Affine subspaces and their open sets are totally geodesic submanifolds of {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}.</p></li>
<li><p>Great circles of {% raw %}<span class="math inline">\(\mathbb S^2\)</span>{% endraw %}.</p></li>
</ol>
<p>Totally geodesic submanifolds can have any dimension allowed by the ambient manifold: affine planes in Euclidean space already give examples of dimension greater than one. Indeed, the straight line {% raw %}<span class="math inline">\(p+tv\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(p\)</span>{% endraw %} in an affine subspace and {% raw %}<span class="math inline">\(v\)</span>{% endraw %} tangent to it, remains in that subspace; for an open subset this holds for sufficiently small times.</p>

<p>For the unit sphere, a great circle parametrized by {% raw %}<span class="math inline">\(\gamma(t)=\cos t\,u+\sin t\,v\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %} orthonormal, satisfies {% raw %}<span class="math inline">\(\gamma''=-\gamma\)</span>{% endraw %}. Its Euclidean acceleration is normal to the sphere, so its intrinsic acceleration vanishes by Proposition 9. Every circle-tangent initial vector produces a reparametrization of this curve, proving total geodesicity.</p>
</div>
<h3 data-note-section="1" id="second-fundamental-tensor-and-form">1. Second Fundamental Tensor and Form</h3>
<p>We now split ambient derivatives into tangent and normal components. This will distinguish the connection of the induced metric from the bending of the immersion. In what follows, let {% raw %}<span class="math inline">\(N \subset M\)</span>{% endraw %} denote a submanifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\langle\cdot,\cdot\rangle_M\)</span>{% endraw %} denote the metric on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} (and likewise for other manifolds).</p>

<div id="prop:tangent-projection-connection-submanifold-formula" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>. Let {% raw %}<span class="math inline">\(\nabla^N\)</span>{% endraw %} be the Levi-Civita connection of the metric induced on {% raw %}<span class="math inline">\(N\subset M\)</span>{% endraw %}. For tangent vector fields {% raw %}<span class="math inline">\(X,Y\in\Gamma(TN)\)</span>{% endraw %},</p>

{% raw %}<span id="eq:connection-submanifold"></span><div class="math display">\[
        \nabla_X^N Y = (\nabla_X^M Y)^{\top} ~,\tag{2}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\((\cdot)^\top\)</span>{% endraw %} denotes the orthogonal projection from {% raw %}<span class="math inline">\(T M\)</span>{% endraw %} to {% raw %}<span class="math inline">\(T N\)</span>{% endraw %}.</p>

<p>The independence of extensions can also be checked in coordinates: if two extensions of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} differ by {% raw %}<span class="math inline">\(W\)</span>{% endraw %} vanishing along {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, then every tangent directional derivative of each coefficient of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} vanishes on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, and the Christoffel terms contain {% raw %}<span class="math inline">\(W(p)=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\nabla_X^MW(p)=0\)</span>{% endraw %}. This works locally on each branch of an immersion; for a general immersion the ambient tangent bundle is understood as pulled back to its domain.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(D_XY=(\nabla_X^MY)^\top\)</span>{% endraw %}, extending the fields locally to the ambient manifold. This is independent of the extensions: differentiation in a tangent direction depends only on the restriction of a field to {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Projection preserves the connection rules. Since {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} is tangent to {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, the ambient torsion identity gives {% raw %}<span class="math inline">\(D_XY-D_YX=[X,Y]\)</span>{% endraw %}. For a third tangent field {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, metric compatibility gives</p>
{% raw %}<div class="math display">\[X\langle Y,Z\rangle=\langle D_XY,Z\rangle+\langle Y,D_XZ\rangle.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is torsion-free and compatible with the induced metric. Uniqueness of the Levi-Civita connection yields {% raw %}<span class="math inline">\(D=\nabla^N\)</span>{% endraw %}. ◻</p>

</div>
<div id="rem:normal-bundle" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong>.  Let {% raw %}<span class="math inline">\(\eta(p)\)</span>{% endraw %} denote a vector field in a neighbourhood {% raw %}<span class="math inline">\(p \in N \subset M\)</span>{% endraw %}, which is orthogonal to {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\langle \eta(p), X\rangle = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(X \in T_p N\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\((T_p N)^\perp\)</span>{% endraw %} denote the orthogonal complement of {% raw %}<span class="math inline">\(T_p N\)</span>{% endraw %} in {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}, and the bundle {% raw %}<span class="math inline">\((TN)^\perp\)</span>{% endraw %} (with the usual construction, i.e. whose fibre at {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is {% raw %}<span class="math inline">\((T_p N)^{\perp}\)</span>{% endraw %}) is called the <em>normal bundle</em>. In other words, {% raw %}<span class="math inline">\(\eta(p) \in (T_p N)^{\perp}\)</span>{% endraw %}. We will need this to describe the <em>Codazzi equation</em>.</p>

</div>
<div id="result-11" class="proposition" data-note-number="11" data-note-kind="Proposition">
<p><strong>Proposition 11</strong>. For tangent {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and normal {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} along {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, the value {% raw %}<span class="math inline">\((\nabla_X^M\eta)^\top(p)\)</span>{% endraw %} depends only on {% raw %}<span class="math inline">\(X(p)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta(p)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The connection is linear over smooth functions in {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. In the other variable,</p>
{% raw %}<div class="math display">\[(\nabla_X^M(f\eta))^\top=X(f)\eta^\top+f(\nabla_X^M\eta)^\top=f(\nabla_X^M\eta)^\top.\]</div>{% endraw %}
<p>Expand a normal field in a local frame of the normal bundle. This identity shows that its derivative's tangent projection at {% raw %}<span class="math inline">\(p\)</span>{% endraw %} depends only on the frame coefficients at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, hence only on {% raw %}<span class="math inline">\(\eta(p)\)</span>{% endraw %}. ◻</p>

</div>
<p>The preceding proposition defines a tensor on tangent and normal vectors. We retain the sign convention {% raw %}<span class="math inline">\(S(X,\eta)=(\nabla_X^M\eta)^\top\)</span>{% endraw %}. With this convention, its scalar form is the negative of the pairing of the normal acceleration with {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}.</p>

<div id="def:second-fundamental-tensor" class="definition" data-note-number="12" data-note-kind="Definition">
<p><strong>Definition 12</strong>. At {% raw %}<span class="math inline">\(p\in N\subset M\)</span>{% endraw %}, the <em>second fundamental tensor</em> in the convention used here is</p>
{% raw %}<div class="math display">\[S:T_pN\times(T_pN)^\perp\longrightarrow T_pN,\qquad S(X,\eta)=(\nabla_X^M\eta)^\top.\]</div>{% endraw %}
</div>
<div id="def:second-fundamental-form" class="definition" data-note-number="13" data-note-kind="Definition">
<p><strong>Definition 13</strong>.  The <em>second fundamental form</em> of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, in the normal direction {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, is defined as </p>

{% raw %}<span id="eq:second-fundamental-form"></span><div class="math display">\[
        \mathop{\mathrm{\mathrm{II}}}_\eta (X,Y) \triangleq \langle S(X,\eta), Y \rangle ~.\tag{3}\]</div>{% endraw %}
</div>
<div id="result-14" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14</strong>. The second fundamental form {% raw %}<span class="math inline">\(\mathrm{II}_\eta(X,Y)\)</span>{% endraw %} is symmetric in {% raw %}<span class="math inline">\(X,Y\in T_pN\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Extend {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} as tangent fields and {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} as a normal field along {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Metric compatibility and the ambient torsion identity give</p>
{% raw %}<div class="math display">\[\begin{aligned}
\mathrm{II}_\eta(X,Y)&amp;=\langle\nabla_X^M\eta,Y\rangle=-\langle\eta,\nabla_X^MY\rangle\\
&amp;=-\langle\eta,\nabla_Y^MX+[X,Y]\rangle\\
&amp;=-\langle\eta,\nabla_Y^MX\rangle=\langle\nabla_Y^M\eta,X\rangle=\mathrm{II}_\eta(Y,X).
\end{aligned}\]</div>{% endraw %}
<p>The bracket term vanishes because {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} is tangent and {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} is normal. ◻</p>

</div>
<div id="rem:gauss-kronecker-mean-curvatures" class="remark" data-note-number="15" data-note-kind="Remark">
<p><strong>Remark 15</strong> (Notions of Curvatures).  Fix a normal field {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, and vary only the tangent vector {% raw %}<span class="math inline">\(X \in T_p N\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(S_\eta : T_p N \to T_p N : X \mapsto S(X,\eta)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(S_\eta\)</span>{% endraw %} is self-adjoint with respect to the metric. If {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} is a unit normal field, then the {% raw %}<span class="math inline">\(n=\dim N\)</span>{% endraw %} eigenvalues of {% raw %}<span class="math inline">\(S_\eta\)</span>{% endraw %} are all real, by self-adjointness. These eigenvalues are called the <em>principal curvatures of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} in the direction {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}</em>; the corresponding eigenvectors are called <em>principal curvature vectors</em>. Furthermore,</p>

<ol>
<li><p>The <em>mean curvature of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} in the direction {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}</em> is {% raw %}<span class="math inline">\(H_\eta \triangleq \frac{1}{n} \mathrm{tr} S_\eta\)</span>{% endraw %}.</p></li>
<li><p>The <em>Gauss-Kronecker curvature of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} in the direction {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}</em> is {% raw %}<span class="math inline">\(K_\eta \triangleq \det (S)_\eta\)</span>{% endraw %}. This is often stated as <em>Gauss curvature</em>, in short. Equivalently, for an orthonormal basis {% raw %}<span class="math inline">\(e_1,\cdots,e_n \in T_p N\)</span>{% endraw %}, {% raw %}<span class="math inline">\(K_\eta = \det(\langle S_\eta e_i,e_j\rangle)_{i,j=1}^n\)</span>{% endraw %}.</p></li>
</ol>
<p>As explored in Theorem <a href="{% post_url 2022-09-10-planar-geometry-and-gauss-bonnet %}#thm:sectional-gauss-M2" data-reference-type="ref" data-reference="thm:sectional-gauss-M2">1</a>, for a surface in Euclidean three-space, the sectional curvature of the induced metric equals the product of its two principal curvatures. In a curved ambient manifold the ambient sectional curvature also contributes, as the Gauss equation below shows.</p>

<p>The definitions use {% raw %}<span class="math inline">\(n\geq1\)</span>{% endraw %}. Replacing the unit normal by its negative sends {% raw %}<span class="math inline">\(S_\eta\)</span>{% endraw %}, every principal curvature, and {% raw %}<span class="math inline">\(H_\eta\)</span>{% endraw %} to their negatives, while {% raw %}<span class="math inline">\(K_\eta\)</span>{% endraw %} acquires {% raw %}<span class="math inline">\((-1)^n\)</span>{% endraw %}. Thus for hypersurfaces of dimension two the determinant is normal-independent. In higher codimension a single normal direction's determinant is not the intrinsic sectional curvature.</p>
</div>
<p>The second fundamental form also tests whether intrinsic geodesics remain geodesics of the ambient manifold. For an intrinsic geodesic, the tangential acceleration vanishes; its ambient acceleration is therefore the normal contribution.</p>

<div id="thm:submanifold-second-fundamental" class="theorem" data-note-number="16" data-note-kind="Theorem">
<p><strong>Theorem 16</strong>. Let {% raw %}<span class="math inline">\(N\subset(M,g)\)</span>{% endraw %} be a submanifold with the induced metric {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The following statements are equivalent:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(N\)</span>{% endraw %} is a totally geodesic submanifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(h\)</span>{% endraw %}-geodesic in {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(g\)</span>{% endraw %}-geodesic in {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p></li>
<li><p>All second fundamental forms vanish identically.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(B(X,Y)=(\nabla_X^MY)^\perp\)</span>{% endraw %} for tangent vectors {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}. The connection rules make {% raw %}<span class="math inline">\(B\)</span>{% endraw %} bilinear, and the torsion identity makes it symmetric. Proposition 9 gives the Gauss formula</p>
{% raw %}<div class="math display">\[\nabla^M_{\dot\gamma}\dot\gamma=\nabla^N_{\dot\gamma}\dot\gamma+B(\dot\gamma,\dot\gamma).\]</div>{% endraw %}
<p>Suppose first that {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is totally geodesic in the local sense of Definition 6. Given {% raw %}<span class="math inline">\(p\in N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v\in T_pN\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} be the intrinsic geodesic with this initial data, and let {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} be the ambient geodesic with the same initial data. By assumption, {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(N\)</span>{% endraw %} for sufficiently small times. Taking the tangential part of the Gauss formula gives</p>
{% raw %}<div class="math display">\[\nabla^N_{\dot\eta}\dot\eta=(\nabla^M_{\dot\eta}\dot\eta)^\top=0.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} is also an intrinsic geodesic there. Uniqueness of the intrinsic geodesic equation implies {% raw %}<span class="math inline">\(\gamma=\eta\)</span>{% endraw %} near the initial time. Applying the same argument at every point of any intrinsic geodesic shows that its ambient acceleration vanishes on its whole interval of definition. This proves (a) implies (b).</p>
<p>Now both accelerations of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} vanish, so {% raw %}<span class="math inline">\(B(v,v)=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(v\)</span>{% endraw %} was arbitrary, symmetry and polarization give {% raw %}<span class="math inline">\(B(v,w)=0\)</span>{% endraw %} for all tangent vectors. Conversely, if {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}, the Gauss formula says that each intrinsic geodesic has zero ambient acceleration. Uniqueness for the ambient geodesic equation then gives the local condition in Definition 6.</p>
<p>Finally, metric compatibility gives {% raw %}<span class="math inline">\(\mathrm{II}_\eta(X,Y)=-\langle B(X,Y),\eta\rangle\)</span>{% endraw %} with the sign convention of Definition 13. All these scalar forms vanish exactly when {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}, since a normal vector orthogonal to every normal vector is zero. This proves the equivalence of all three statements. ◻</p>

</div>
<h3 data-note-section="2" id="fundamental-equations">2. Fundamental Equations</h3>
<p>Apply the same tangent-normal decomposition to the curvature operators. The Gauss equation compares the Riemann curvature tensors on {% raw %}<span class="math inline">\(N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is a submanifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<span id="eq:gauss-equation"></span>
<div id="thm:gauss-equation" class="theorem" data-note-number="17" data-note-kind="Theorem">
<p><strong>Theorem 17 (Gauss equation).</strong> Let {% raw %}<span class="math inline">\(N^n\subset M^m\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p\in N\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\eta_1,\ldots,\eta_{m-n}\)</span>{% endraw %} be an orthonormal basis of {% raw %}<span class="math inline">\((T_pN)^\perp\subset T_pM\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathrm{II}_\alpha=\mathrm{II}_{\eta_\alpha}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S_\alpha=S_{\eta_\alpha}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(X,Y,Z\in T_pN\)</span>{% endraw %}, with the curvature convention {% raw %}<span class="math inline">\(R(X,Y)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ+\nabla_{[X,Y]}Z\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[R^N(X,Y)Z-(R^M(X,Y)Z)^\top=\sum_\alpha\left(\mathrm{II}_\alpha(X,Z)S_\alpha Y-\mathrm{II}_\alpha(Y,Z)S_\alpha X\right).\tag{4}\]</div>{% endraw %}</p>
</div>
<div class="proof">
<p><em>Proof.</em> Extend the tangent vectors and orthonormal normal basis <em>locally along {% raw %}<span class="math inline">\(N\)</span>{% endraw %}</em>; no global normal frame is required. From {% raw %}<span class="math inline">\(\mathrm{II}_\alpha(Y,Z)=-\langle\nabla_Y^MZ,\eta_\alpha\rangle\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\nabla_Y^MZ=\nabla_Y^NZ-\sum_\alpha\mathrm{II}_\alpha(Y,Z)\eta_\alpha.\]</div>{% endraw %}</p>
<p> Differentiate with {% raw %}<span class="math inline">\(\nabla_X^M\)</span>{% endraw %} and project tangentially. Derivatives of the scalar coefficients multiply normal vectors and disappear, leaving</p>
<p> {% raw %}<div class="math display">\[(\nabla_X^M\nabla_Y^MZ)^\top=\nabla_X^N\nabla_Y^NZ-\sum_\alpha\mathrm{II}_\alpha(Y,Z)S_\alpha X.\]</div>{% endraw %}</p>
<p> The analogous formula with {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} interchanged and {% raw %}<span class="math inline">\((\nabla^M_{[X,Y]}Z)^\top=\nabla^N_{[X,Y]}Z\)</span>{% endraw %} give</p>
<p> {% raw %}<div class="math display">\[(R^M(X,Y)Z)^\top=R^N(X,Y)Z-\sum_\alpha\mathrm{II}_\alpha(X,Z)S_\alpha Y+\sum_\alpha\mathrm{II}_\alpha(Y,Z)S_\alpha X.\]</div>{% endraw %}</p>
<p> Rearranging proves (4). This sign is tied to the explicitly stated convention for {% raw %}<span class="math inline">\(R\)</span>{% endraw %} and the retained convention {% raw %}<span class="math inline">\(S_\eta X=(\nabla_X\eta)^\top\)</span>{% endraw %}. ◻</p>
</div>
<span id="eq:gauss-equation-tensorial"></span>
<div id="thm:gauss-equation-tensorial" class="corollary" data-note-number="18" data-note-kind="Corollary">
<p><strong>Corollary 18 (Metric Gauss equation).</strong> Under the hypotheses of Theorem 17, for {% raw %}<span class="math inline">\(X,Y,Z,W\in T_pN\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\langle R^N(X,Y)Z,W\rangle-\langle R^M(X,Y)Z,W\rangle=\sum_\alpha\left(\mathrm{II}_\alpha(X,Z)\mathrm{II}_\alpha(Y,W)-\mathrm{II}_\alpha(Y,Z)\mathrm{II}_\alpha(X,W)\right).\tag{5}\]</div>{% endraw %}</p>
<p> For an orthonormal pair {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, setting {% raw %}<span class="math inline">\(Z=X,W=Y\)</span>{% endraw %} gives</p>
<p> {% raw %}<div class="math display">\[K_N(X,Y)=K_M(X,Y)+\langle B(X,X),B(Y,Y)\rangle-|B(X,Y)|^2.\]</div>{% endraw %}</p>
<p> In a Euclidean hypersurface and a principal orthonormal pair this is the product of the corresponding principal curvatures.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Pair (4) with {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is tangent, the ambient curvature's normal projection pairs to zero, and {% raw %}<span class="math inline">\(\langle S_\alpha V,W\rangle=\mathrm{II}_\alpha(V,W)\)</span>{% endraw %}. For the sectional formula, use {% raw %}<span class="math inline">\(\mathrm{II}_\alpha(U,V)=-\langle B(U,V),\eta_\alpha\rangle\)</span>{% endraw %} and sum over the orthonormal normal basis. The two minus signs in each product cancel. ◻</p>
</div>
<p>To clarify, many texts state Corollary <a href="#thm:gauss-equation-tensorial" data-reference-type="ref" data-reference="thm:gauss-equation-tensorial">18</a> as the Gauss equation, i.e. the form expressed in terms of Riemann curvature tensor.</p>

<p>The promised Codazzi equation uses the normal connection {% raw %}<span class="math inline">\(\nabla_X^\perp\eta=(\nabla_X^M\eta)^\perp\)</span>{% endraw %}. Define</p>
<p> {% raw %}<div class="math display">\[(\nabla_XB)(Y,Z)=\nabla_X^\perp(B(Y,Z))-B(\nabla_X^NY,Z)-B(Y,\nabla_X^NZ).\]</div>{% endraw %}</p>
<p> With the same reversed curvature convention, its form is</p>
<p> {% raw %}<div class="math display">\[(R^M(X,Y)Z)^\perp=(\nabla_YB)(X,Z)-(\nabla_XB)(Y,Z).\]</div>{% endraw %}</p>
<p> Indeed the normal part of {% raw %}<span class="math inline">\(\nabla_Y^M\nabla_X^MZ\)</span>{% endraw %} is {% raw %}<span class="math inline">\(B(Y,\nabla_X^NZ)+\nabla_Y^\perp(B(X,Z))\)</span>{% endraw %}. Subtract the analogous term in the other order and add {% raw %}<span class="math inline">\(B([X,Y],Z)\)</span>{% endraw %}; inserting {% raw %}<span class="math inline">\([X,Y]=\nabla_X^NY-\nabla_Y^NX\)</span>{% endraw %} gives exactly the displayed covariant derivatives. In Euclidean ambient space the left side vanishes, so the covariant derivative of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is symmetric in its first two arguments.</p>


<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-04-17-covering-spaces-and-the-fundamental-group-of-the-circle %}">Covering Spaces and the Fundamental Group of the Circle</a>; <a href="{% post_url 2022-09-10-planar-geometry-and-gauss-bonnet %}">Planar Geometry and Gauss-Bonnet</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-10-21-lie-subgroups-the-exponential-map-and-cartans-theorem %}">Lie Subgroups, the Exponential Map, and Cartan’s Theorem</a> · Next: <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a></p></nav>

</div>
