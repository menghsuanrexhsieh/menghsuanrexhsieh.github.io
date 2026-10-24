---
layout: "post"
title: "Graph Laplacians, Isoperimetry, and Diameter Bounds"
date: "2024-08-03"
tags: ["math", "differential geometry"]
excerpt: "Cheeger inequalities and polynomial estimates relate the normalized graph Laplacian to edge expansion, vertex expansion, and diameter."
note_series: "Differential geometry"
note_manuscript: "scripts/notes/topic-notes/02-1057.md"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2024/08/03/a-gentle-introduction-to-spectral-graph-theory/", "/2024/08/17/on-isoperimetric-problems/", "/2024/08/31/graph-diameters-and-eigenvalue-bounds/"]
---

<div class="note-content" markdown="0">

<p>The normalized Laplacian relates the variation of a function across edges to the geometry of a graph. Its first positive eigenvalue controls a weighted Poincaré inequality. Cut indicators and level sets then relate this eigenvalue to edge expansion, while polynomials in the Laplacian give bounds on distances between vertex sets. Vertex expansion requires a separate argument because several edges can meet the same boundary vertex.</p>

<p>The main text develops these arguments for finite simple graphs. The appendices give the flow proof for vertex expansion, the comparison with the unnormalized Laplacian, a trace estimate, and a refinement of the diameter bound using Chebyshev polynomials. All edge sums count each unordered edge once.</p>

<h3 data-note-section="1" id="a-gentle-introduction-to-spectral-graph-theory">1. Laplacians and weighted energy</h3>
<p>Throughout, let {% raw %}<span class="math inline">\(G=(V,E)\)</span>{% endraw %} be a finite, simple, connected, undirected graph with {% raw %}<span class="math inline">\(n=|V|\ge2\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(u\sim v\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\{u,v\}\in E\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(d_v\)</span>{% endraw %} be the degree of {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Put</p>

{% raw %}<div class="math display">\[
T=\operatorname{diag}(d_v:v\in V),\qquad
d_{\min}=\min_v d_v,\qquad d_{\max}=\max_v d_v.
\]</div>{% endraw %}
<p>Connectedness and {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %} imply {% raw %}<span class="math inline">\(d_{\min}&gt;0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(X\subseteq V\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\operatorname{Vol}(X)=\sum_{v\in X}d_v,\qquad
\nu=\operatorname{Vol}(V)=2|E|,\qquad
\overline X=V\setminus X.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(V\)</span>{% endraw %} always denotes the vertex set, and {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} denotes its total volume. For real functions {% raw %}<span class="math inline">\(f,h\)</span>{% endraw %} on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, use the inner product and energy</p>

{% raw %}<span id="eq:graph-energy"></span><div class="math display">\[
\langle f,h\rangle_T=\sum_vd_vf(v)h(v),\qquad
\|f\|_T^2=\langle f,f\rangle_T,\qquad
\mathcal E(f)=\sum_{\{u,v\}\in E}(f(u)-f(v))^2.

\tag{1}\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(A\)</span>{% endraw %} be the adjacency matrix. The unnormalized and normalized Laplacians are, respectively,</p>

{% raw %}<span id="eq:graph-laplacians"></span><div class="math display">\[
L=T-A,\qquad
\mathcal L=T^{-1/2}LT^{-1/2}
=I-T^{-1/2}AT^{-1/2}.

\tag{2}\]</div>{% endraw %}
<p>The identity {% raw %}<span class="math inline">\(f^\top Lf=\mathcal E(f)\)</span>{% endraw %} follows by expanding the squares. Each {% raw %}<span class="math inline">\(f(v)^2\)</span>{% endraw %} occurs once for every edge incident to {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, and each product {% raw %}<span class="math inline">\(f(u)f(v)\)</span>{% endraw %} occurs with coefficient {% raw %}<span class="math inline">\(-2\)</span>{% endraw %}.</p>

<p>An incidence matrix gives the same identity without expanding coordinates. Choose an orientation for each edge and define {% raw %}<span class="math inline">\(C\in\mathbb R^{V\times E}\)</span>{% endraw %} to have a {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} at its initial vertex, a {% raw %}<span class="math inline">\(+1\)</span>{% endraw %} at its terminal vertex, and zero elsewhere. Then</p>

{% raw %}<div class="math display">\[
L=CC^\top,\qquad
S=T^{-1/2}C,\qquad
\mathcal L=SS^\top.
\]</div>{% endraw %}
<p>Reversing an orientation multiplies one column of {% raw %}<span class="math inline">\(C\)</span>{% endraw %} by {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}, so neither Laplacian depends on this choice. The map {% raw %}<span class="math inline">\(C^\top\)</span>{% endraw %} takes vertex values to differences along oriented edges. Its adjoint {% raw %}<span class="math inline">\(C\)</span>{% endraw %} is the usual incidence boundary map; {% raw %}<span class="math inline">\(S\)</span>{% endraw %} includes the additional normalization by vertex degrees.</p>

<p>For {% raw %}<span class="math inline">\(f\ne0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(z=T^{1/2}f\)</span>{% endraw %}, the normalized Rayleigh quotient becomes</p>

{% raw %}<span id="eq:normalized-rayleigh"></span><div class="math display">\[
\frac{z^\top\mathcal Lz}{z^\top z}
=\frac{f^\top Lf}{f^\top Tf}
=\frac{\mathcal E(f)}{\|f\|_T^2}.

\tag{3}\]</div>{% endraw %}
<p>The vectors {% raw %}<span class="math inline">\(z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} therefore describe the same variational problem in different coordinates. We use {% raw %}<span class="math inline">\(z\)</span>{% endraw %} for Euclidean coordinates and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} for functions with the degree-weighted inner product.</p>

<div id="graph-spectrum" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. (Spectrum and bipartiteness.) The eigenvalues of {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %}, counted with multiplicity, satisfy</p>

{% raw %}<div class="math display">\[
0=\lambda_0&lt;\lambda_1\le\cdots\le\lambda_{n-1}\le2.
\]</div>{% endraw %}
<p>The zero eigenspace is spanned by {% raw %}<span class="math inline">\(T^{1/2}\mathbf1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\lambda_{n-1}=2\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is bipartite.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Symmetry gives an orthonormal eigenbasis. The factorization {% raw %}<span class="math inline">\(\mathcal L=SS^\top\)</span>{% endraw %} gives nonnegative eigenvalues. The energy {% raw %}<span class="math inline">\(\mathcal E(f)\)</span>{% endraw %} vanishes if and only if {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is constant along every edge. Connectedness makes such a function constant on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, proving the assertion about the kernel.</p>

<p>For every {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathcal E(f)
\le2\sum_{\{u,v\}\in E}(f(u)^2+f(v)^2)
=2\|f\|_T^2.
\]</div>{% endraw %}
<p>The largest Rayleigh quotient is therefore at most {% raw %}<span class="math inline">\(2\)</span>{% endraw %}. Equality requires {% raw %}<span class="math inline">\(f(u)=-f(v)\)</span>{% endraw %} on every edge. A nonzero function with this property has the same positive absolute value at every vertex, since the graph is connected. Its positive and negative vertices form a bipartition. Conversely, assigning {% raw %}<span class="math inline">\(+1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} to the two parts of a bipartite graph gives equality. ◻</p>

</div>
<p>If isolated vertices are allowed, define the corresponding entries of {% raw %}<span class="math inline">\(T^{-1/2}\)</span>{% endraw %} to be zero. Then {% raw %}<span class="math inline">\(\mathcal L=T^{-1/2}LT^{-1/2}\)</span>{% endraw %} still makes sense, but its diagonal entry at an isolated vertex is zero. In that setting the identity in <a href="#eq:graph-laplacians">the Laplacian definitions</a> uses {% raw %}<span class="math inline">\(\operatorname{diag}(\mathbf1_{\{d_v&gt;0\}})\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(I\)</span>{% endraw %}. The weighted norm is degenerate on isolated vertices, which is why the variational arguments below assume connectedness and at least two vertices.</p>

<h3 data-note-section="2" id="weighted-variational-principle">2. Variational characterizations of the spectral gap</h3>
<p>Define the weighted mean and variance sum by</p>

{% raw %}<div class="math display">\[
\overline f=\frac1\nu\sum_vd_vf(v),\qquad
\mathcal V_T(f)=\sum_vd_v(f(v)-\overline f)^2.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(c\in\mathbb R\)</span>{% endraw %}, expansion around {% raw %}<span class="math inline">\(\overline f\)</span>{% endraw %} gives</p>

{% raw %}<span id="eq:weighted-centering"></span><div class="math display">\[
\sum_vd_v(f(v)-c)^2
=\mathcal V_T(f)+\nu(c-\overline f)^2.

\tag{4}\]</div>{% endraw %}
<p>The cross term vanishes because {% raw %}<span class="math inline">\(\sum_vd_v(f(v)-\overline f)=0\)</span>{% endraw %}. Thus the weighted mean uniquely minimizes the sum of squared deviations. Subtracting a constant leaves {% raw %}<span class="math inline">\(\mathcal E(f)\)</span>{% endraw %} unchanged.</p>

<span id="result-2"></span>
<div id="graph-poincare" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. (Variational principle.) The first positive eigenvalue satisfies</p>

{% raw %}<span id="eq:variational-least-eigenvalue"></span><div class="math display">\[
\lambda_1
=\min_{\substack{f\ne0\\\sum_vd_vf(v)=0}}
\frac{\mathcal E(f)}{\|f\|_T^2}
=\inf_{f\text{ nonconstant}}
\frac{\mathcal E(f)}{\mathcal V_T(f)}.

\tag{5}\]</div>{% endraw %}
<p>Equivalently, {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %} is the largest constant for which</p>

{% raw %}<span id="eq:graph-poincare"></span><div class="math display">\[
\lambda_1\mathcal V_T(f)\le\mathcal E(f)
\qquad\text{for every }f:V\to\mathbb R.

\tag{6}\]</div>{% endraw %}
<p>A nonzero minimizing function with weighted mean zero satisfies</p>

{% raw %}<span id="eq:harmonic-eigenfunction"></span><div class="math display">\[
Lf=\lambda_1Tf,\qquad
\frac1{d_v}\sum_{u\sim v}(f(v)-f(u))=\lambda_1f(v)
\quad(v\in V).

\tag{7}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The unit zero eigenvector is</p>

{% raw %}<div class="math display">\[
\phi_0=\frac{T^{1/2}\mathbf1}{\sqrt\nu}.
\]</div>{% endraw %}
<p>Under {% raw %}<span class="math inline">\(z=T^{1/2}f\)</span>{% endraw %}, the condition {% raw %}<span class="math inline">\(z\perp\phi_0\)</span>{% endraw %} is precisely {% raw %}<span class="math inline">\(\sum_vd_vf(v)=0\)</span>{% endraw %}. Expanding {% raw %}<span class="math inline">\(z\)</span>{% endraw %} in an orthonormal eigenbasis shows that the minimum Rayleigh quotient on this orthogonal complement is {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %}. The minimum is attained because the weighted unit sphere in the mean-zero subspace is compact. Centering {% raw %}<span class="math inline">\(f\)</span>{% endraw %} using <a href="#eq:weighted-centering">the variance identity</a> proves the second characterization and the Poincaré inequality.</p>

<p>The eigenfunction equation can also be derived directly from constrained variation. Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a minimizer and let {% raw %}<span class="math inline">\(h\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(\sum_vd_vh(v)=0\)</span>{% endraw %}. Differentiating the quotient at {% raw %}<span class="math inline">\(f+\varepsilon h\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\sum_{\{u,v\}\in E}(f(u)-f(v))(h(u)-h(v))
=\lambda_1\sum_vd_vf(v)h(v).
\]</div>{% endraw %}
<p>The left side is {% raw %}<span class="math inline">\(h^\top Lf\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(Lf-\lambda_1Tf\)</span>{% endraw %} is orthogonal, in Euclidean coordinates, to the hyperplane orthogonal to {% raw %}<span class="math inline">\(T\mathbf1\)</span>{% endraw %}. It equals {% raw %}<span class="math inline">\(cT\mathbf1\)</span>{% endraw %} for some scalar {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Summing its coordinates gives {% raw %}<span class="math inline">\(0=c\nu\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(\mathbf1^\top L=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has weighted mean zero. Thus {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, proving the coordinate equation. ◻</p>

</div>
<p>We call such an {% raw %}<span class="math inline">\(f\)</span>{% endraw %} a weighted eigenfunction. Its normalized eigenvector is {% raw %}<span class="math inline">\(T^{1/2}f\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} itself need not be an eigenvector of the symmetric matrix {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %}.</p>

<p>The same change of coordinates gives the min–max formula for every eigenvalue:</p>

{% raw %}<span id="eq:graph-minmax"></span><div class="math display">\[
\lambda_i
=\min_{\substack{U\subseteq\mathbb R^V\\\dim U=i+1}}
\ \max_{0\ne f\in U}\frac{\mathcal E(f)}{\|f\|_T^2},
\qquad 0\le i\le n-1.

\tag{8}\]</div>{% endraw %}
<p>Indeed, {% raw %}<span class="math inline">\(T^{1/2}\)</span>{% endraw %} is invertible and maps the subspaces of each dimension bijectively to subspaces of the same dimension. This observation is needed when comparing the normalized and unnormalized spectra in <a href="#unnormalized-comparison">Appendix B</a>.</p>

<p>Let {% raw %}<span class="math inline">\(\operatorname{dist}(u,v)\)</span>{% endraw %} be the number of edges in a shortest path from {% raw %}<span class="math inline">\(u\)</span>{% endraw %} to {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(D=\max_{u,v}\operatorname{dist}(u,v)\)</span>{% endraw %}.</p>

<span id="result-1"></span>
<div id="elementary-diameter-bound" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>. (A path estimate.) The spectral gap satisfies</p>

{% raw %}<div class="math display">\[
\lambda_1\ge\frac1{D\nu}.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Choose a weighted eigenfunction {% raw %}<span class="math inline">\(f\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(v_0\)</span>{% endraw %} maximizing {% raw %}<span class="math inline">\(|f(v)|\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has weighted mean zero and is nonzero, there is a vertex {% raw %}<span class="math inline">\(u_0\)</span>{% endraw %} of the opposite sign. Let {% raw %}<span class="math inline">\(w_0=u_0,w_1,\ldots,w_\ell=v_0\)</span>{% endraw %} be a shortest path, so {% raw %}<span class="math inline">\(1\le\ell\le D\)</span>{% endraw %}. Telescoping and Cauchy–Schwarz give</p>

{% raw %}<div class="math display">\[
|f(v_0)-f(u_0)|^2
\le\ell\sum_{j=1}^{\ell}(f(w_j)-f(w_{j-1}))^2
\le D\mathcal E(f).
\]</div>{% endraw %}
<p>Also, {% raw %}<span class="math inline">\(\|f\|_T^2\le\nu f(v_0)^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|f(v_0)-f(u_0)|\ge|f(v_0)|\)</span>{% endraw %}. Dividing proves the claim. ◻</p>

</div>
<p>This estimate bounds the gap below using a known diameter. The polynomial argument in <a href="#graph-diameters-and-eigenvalue-bounds">Section 5</a> will instead bound the diameter above using the spectrum.</p>

<h3 data-note-section="3" id="on-isoperimetric-problems">3. Edge expansion and Cheeger inequalities</h3>
<p>For a nonempty proper subset {% raw %}<span class="math inline">\(X\subset V\)</span>{% endraw %}, define its edge boundary and conductance by</p>

{% raw %}<div class="math display">\[
\partial X=\{\{u,v\}\in E:u\in X,\ v\notin X\},\qquad
h(X)=\frac{|\partial X|}
{\min(\operatorname{Vol}(X),\operatorname{Vol}(\overline X))}.
\]</div>{% endraw %}
<p>The Cheeger constant is</p>

{% raw %}<span id="eq:graph-cheeger-constant"></span><div class="math display">\[
h_G=\min_{\varnothing\ne X\subsetneq V}h(X)
=\min_{0&lt;\operatorname{Vol}(X)\le\nu/2}
\frac{|\partial X|}{\operatorname{Vol}(X)}.

\tag{9}\]</div>{% endraw %}
<p>The second equality uses {% raw %}<span class="math inline">\(\partial X=\partial\overline X\)</span>{% endraw %}. Every cut contains an edge, so {% raw %}<span class="math inline">\(h_G&gt;0\)</span>{% endraw %}. Each crossing edge contributes one to the volume on either side, giving {% raw %}<span class="math inline">\(h_G\le1\)</span>{% endraw %}. For a prescribed lower volume {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the inequality {% raw %}<span class="math inline">\(|\partial X|\ge h_G\operatorname{Vol}(X)\)</span>{% endraw %} bounds the number of edges needed to separate any set with {% raw %}<span class="math inline">\(m\le\operatorname{Vol}(X)\le\nu/2\)</span>{% endraw %}. The value of {% raw %}<span class="math inline">\(h_G\)</span>{% endraw %} alone does not identify the optimal cut at every prescribed volume.</p>

<h4 data-note-section="3.1" id="graph-truncation-coarea">3.1. Truncation and coarea</h4>
<p>Choose a weighted eigenfunction {% raw %}<span class="math inline">\(f\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %}. After changing its sign if necessary, the set {% raw %}<span class="math inline">\(X=\{v:f(v)&gt;0\}\)</span>{% endraw %} has volume at most {% raw %}<span class="math inline">\(\nu/2\)</span>{% endraw %}. This is possible because the positive and negative sets are disjoint and both are nonempty. Set</p>

{% raw %}<div class="math display">\[
g=f_+=\max(f,0),\qquad
B_g=\|g\|_T^2&gt;0,\qquad W_g=\frac{\mathcal E(g)}{B_g}.
\]</div>{% endraw %}
<span id="result-5"></span>
<div id="positive-part-coarea" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>. (Positive part and level sets.) With the preceding choice,</p>

{% raw %}<span id="eq:positive-part-quotient"></span><div class="math display">\[
0&lt;W_g\le\min(\lambda_1,1).

\tag{10}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(S_t=\{v:g(v)^2&gt;t\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t\ge0\)</span>{% endraw %},</p>

{% raw %}<span id="eq:graph-coarea"></span><div class="math display">\[
\begin{aligned}
\int_0^\infty\operatorname{Vol}(S_t)\,dt&amp;=B_g,\\
\int_0^\infty|\partial S_t|\,dt
&amp;=\sum_{\{u,v\}\in E}|g(u)^2-g(v)^2|.
\end{aligned}

\tag{11}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For real numbers {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
(a-b)(a_+-b_+)\ge(a_+-b_+)^2.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} have the same sign, the assertion is immediate; if their signs differ, the extra term on the left is nonnegative. Multiplying {% raw %}<span class="math inline">\(Lf=\lambda_1Tf\)</span>{% endraw %} by {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and summing therefore gives</p>

{% raw %}<div class="math display">\[
\lambda_1B_g
=\sum_{\{u,v\}\in E}(f(u)-f(v))(g(u)-g(v))
\ge\mathcal E(g).
\]</div>{% endraw %}
<p>Because {% raw %}<span class="math inline">\(g\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathcal E(g)=B_g-2\sum_{\{u,v\}\in E}g(u)g(v)\le B_g.
\]</div>{% endraw %}
<p>The energy is positive: {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is nonzero, vanishes on the negative set of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, and cannot be constant on a connected graph. This proves the quotient bounds.</p>

<p>For each vertex, {% raw %}<span class="math inline">\(\int_0^\infty\mathbf1_{\{g(v)^2&gt;t\}}\,dt=g(v)^2\)</span>{% endraw %}. For each edge, the thresholds that put exactly one endpoint in {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} form an interval of length {% raw %}<span class="math inline">\(|g(u)^2-g(v)^2|\)</span>{% endraw %}. Summing these two identities proves the coarea formulas. All sums are finite. ◻</p>

</div>
<h4 data-note-section="3.2" id="graph-cheeger-theorem">3.2. The inequalities and a threshold cut</h4>
<span id="result-4"></span> <span id="result-6"></span>
<div id="cheeger-inequalities" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>. (Cheeger inequalities.) For the normalized Laplacian,</p>

{% raw %}<span id="eq:sharp-cheeger"></span><div class="math display">\[
1-\sqrt{1-h_G^2}\le\lambda_1\le2h_G.

\tag{12}\]</div>{% endraw %}
<p>In particular,</p>

{% raw %}<span id="eq:usual-cheeger"></span><div class="math display">\[
\frac{h_G^2}{2}\le\lambda_1\le2h_G.

\tag{13}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For the upper bound, choose a cut {% raw %}<span class="math inline">\(X\)</span>{% endraw %} attaining {% raw %}<span class="math inline">\(h_G\)</span>{% endraw %} and write {% raw %}<span class="math inline">\(x=\operatorname{Vol}(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y=\nu-x\)</span>{% endraw %}. The function</p>

{% raw %}<div class="math display">\[
f_X(v)=\begin{cases}
1/x,&amp;v\in X,\\
-1/y,&amp;v\in\overline X
\end{cases}
\]</div>{% endraw %}
<p>has weighted mean zero. Only crossing edges contribute to its energy, so</p>

{% raw %}<div class="math display">\[
\lambda_1\le
\frac{|\partial X|(1/x+1/y)^2}{1/x+1/y}
=|\partial X|\left(\frac1x+\frac1y\right)
\le2h_G.
\]</div>{% endraw %}
<p>For the lower bound, take {% raw %}<span class="math inline">\(g\)</span>{% endraw %} from <a href="#positive-part-coarea">the positive-part lemma</a> and put {% raw %}<span class="math inline">\(Q_g=\sum_E|g(u)^2-g(v)^2|\)</span>{% endraw %}. Every nonempty {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} has volume at most {% raw %}<span class="math inline">\(\nu/2\)</span>{% endraw %}. Thus coarea gives</p>

{% raw %}<div class="math display">\[
Q_g=\int_0^\infty|\partial S_t|\,dt
\ge h_G\int_0^\infty\operatorname{Vol}(S_t)\,dt
=h_GB_g.
\]</div>{% endraw %}
<p>Factoring a difference of squares and applying Cauchy–Schwarz yields</p>

{% raw %}<div class="math display">\[
Q_g^2\le\mathcal E(g)
\sum_{\{u,v\}\in E}(g(u)+g(v))^2.
\]</div>{% endraw %}
<p>Adding the plus and minus square sums gives {% raw %}<span class="math inline">\(2B_g\)</span>{% endraw %}, so the last factor is exactly {% raw %}<span class="math inline">\(2B_g-\mathcal E(g)\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
h_G^2\le W_g(2-W_g),\qquad
(1-W_g)^2\le1-h_G^2.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(0&lt;W_g\le1\)</span>{% endraw %}, this implies {% raw %}<span class="math inline">\(W_g\ge1-\sqrt{1-h_G^2}\)</span>{% endraw %}. The inequality {% raw %}<span class="math inline">\(\lambda_1\ge W_g\)</span>{% endraw %} proves the lower bound. Finally,</p>

{% raw %}<div class="math display">\[
1-\sqrt{1-h_G^2}
=\frac{h_G^2}{1+\sqrt{1-h_G^2}}
\ge\frac{h_G^2}{2}.
\]</div>{% endraw %}
<p>The rationalized expression gives the quadratic Cheeger lower bound in (13). ◻</p>

</div>
<p>The proof also produces a cut from an eigenfunction. This conclusion is useful when a small spectral gap is known but a minimizing cut is not.</p>

<div id="spectral-threshold-cut" class="corollary" data-note-number="6" data-note-kind="Corollary">
<p><strong>Corollary 6</strong>. (A threshold cut.) For the positive part {% raw %}<span class="math inline">\(g\)</span>{% endraw %} above, there is a nonempty threshold set {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} such that</p>

{% raw %}<span id="eq:sweep-cut"></span><div class="math display">\[
h(S_t)\le\sqrt{W_g(2-W_g)}\le\sqrt{2\lambda_1}.

\tag{14}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Away from the finitely many squared vertex values, the nonempty sets {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} are constant on intervals. On those intervals,</p>

{% raw %}<div class="math display">\[
\frac{Q_g}{B_g}
=\frac{\int_0^\infty h(S_t)\operatorname{Vol}(S_t)\,dt}
{\int_0^\infty\operatorname{Vol}(S_t)\,dt}
\]</div>{% endraw %}
<p>is a weighted average of their conductances; intervals on which {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} is empty contribute zero to both integrals and are omitted. At least one conductance is at most this average. The proof above gives {% raw %}<span class="math inline">\(Q_g/B_g\le\sqrt{W_g(2-W_g)}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(W_g\le\lambda_1\)</span>{% endraw %} gives the final bound. ◻</p>

</div>
<p>Thus it suffices to sort the distinct positive values of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and examine their threshold sets. Equal vertex values are included or excluded together. No choice of ordering within a tie is required.</p>

<span id="result-7"></span>
<p>For comparison, connectedness alone gives {% raw %}<span class="math inline">\(h_G\ge2/\nu\)</span>{% endraw %}: every nontrivial cut contains at least one edge and its smaller side has volume at most {% raw %}<span class="math inline">\(\nu/2\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
\lambda_1\ge\frac2{\nu^2}
\ge\frac2{n^2(n-1)^2},
\]</div>{% endraw %}
<p>where the second inequality uses simplicity of the graph. These coarse estimates require no information about the particular cuts.</p>

<h3 data-note-section="4" id="graph-vertex-expansion">4. Vertex expansion</h3>
<p>The exterior vertex boundary is</p>

{% raw %}<div class="math display">\[
\delta X=\{v\in\overline X:\text{some }u\in X\text{ satisfies }u\sim v\}.
\]</div>{% endraw %}
<p>We measure it by degree-weighted volume and define</p>

{% raw %}<span id="eq:vertex-expansion-constant"></span><div class="math display">\[
g_G=\min_{\varnothing\ne X\subsetneq V}
\frac{\operatorname{Vol}(\delta X)}
{\min(\operatorname{Vol}(X),\operatorname{Vol}(\overline X))}.

\tag{15}\]</div>{% endraw %}
<p>The numerator counts degrees of boundary vertices. The quantity {% raw %}<span class="math inline">\(|\delta X|\)</span>{% endraw %} instead counts vertices, and</p>

{% raw %}<div class="math display">\[
d_{\min}|\delta X|\le\operatorname{Vol}(\delta X)
\le d_{\max}|\delta X|.
\]</div>{% endraw %}
<p>For a regular graph the degree factors cancel from the ratio defining {% raw %}<span class="math inline">\(g_G\)</span>{% endraw %}. For an irregular graph, a statement about weighted boundary volume must be converted before it is interpreted as a bound on the number of boundary vertices.</p>

<p>The minimization in <a href="#eq:vertex-expansion-constant">the definition of {% raw %}<span class="math inline">\(g_G\)</span>{% endraw %}</a> is over all nonempty proper subsets. In contrast to the edge boundary, {% raw %}<span class="math inline">\(\operatorname{Vol}(\delta X)\)</span>{% endraw %} need not equal {% raw %}<span class="math inline">\(\operatorname{Vol}(\delta\overline X)\)</span>{% endraw %}. Restricting the minimum to sets of volume at most {% raw %}<span class="math inline">\(\nu/2\)</span>{% endraw %} defines another constant,</p>

{% raw %}<div class="math display">\[
g_G^{\mathrm{small}}
=\min_{0&lt;\operatorname{Vol}(X)\le\nu/2}
\frac{\operatorname{Vol}(\delta X)}{\operatorname{Vol}(X)},
\qquad g_G\le g_G^{\mathrm{small}}.
\]</div>{% endraw %}
<p>The expansion constants {% raw %}<span class="math inline">\(g_G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_G^{\mathrm{small}}\)</span>{% endraw %} need not agree. In {% raw %}<span class="math inline">\(K_3\)</span>{% endraw %}, a singleton has ratio {% raw %}<span class="math inline">\(4/2=2\)</span>{% endraw %}, whereas its two-vertex complement has ratio {% raw %}<span class="math inline">\(2/2=1\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(g_{K_3}=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_{K_3}^{\mathrm{small}}=2\)</span>{% endraw %}.</p>

<p>Every crossing edge ends in {% raw %}<span class="math inline">\(\delta X\)</span>{% endraw %}, and every vertex of {% raw %}<span class="math inline">\(\delta X\)</span>{% endraw %} is incident to a crossing edge. Therefore</p>

{% raw %}<div class="math display">\[
|\partial X|\le\operatorname{Vol}(\delta X)
\le d_{\max}|\delta X|
\le d_{\max}|\partial X|.
\]</div>{% endraw %}
<p>Dividing by the common denominator and taking minima gives</p>

{% raw %}<span id="eq:edge-vertex-comparison"></span><div class="math display">\[
h_G\le g_G\le d_{\max}h_G.

\tag{16}\]</div>{% endraw %}
<p>The Cheeger inequalities consequently imply {% raw %}<span class="math inline">\(\lambda_1\le2g_G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\lambda_1\ge g_G^2/(2d_{\max}^2)\)</span>{% endraw %}. The next theorem gives a bound with a different dependence on the maximum degree.</p>

<span id="result-8"></span>
<div id="vertex-flow-bound" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7</strong>. (A flow bound for vertex expansion.) With {% raw %}<span class="math inline">\(g_G\)</span>{% endraw %} defined over all nonempty proper subsets,</p>

{% raw %}<span id="eq:vertex-flow-bound"></span><div class="math display">\[
\lambda_1\ge\frac{g_G^2}{2d_{\max}(2+g_G)}.

\tag{17}\]</div>{% endraw %}
</div>
<p>The proof in <a href="#flow-appendix">Appendix A</a> constructs a transport from the positive support of an eigenfunction to its closed neighborhood. The outgoing mass at each vertex of the support exceeds its incoming mass by at least {% raw %}<span class="math inline">\(g_Gd_v\)</span>{% endraw %}. Summing this divergence against {% raw %}<span class="math inline">\(g(v)^2\)</span>{% endraw %} produces {% raw %}<span class="math inline">\(g_G\|g\|_T^2\)</span>{% endraw %}; an estimate on the transfers across each edge then bounds this quantity by the square root of the energy. The factor {% raw %}<span class="math inline">\(2d_{\max}(2+g_G)\)</span>{% endraw %} comes from that estimate. Neither this bound nor the direct Cheeger bound need dominate the other for every graph.</p>

<h3 data-note-section="5" id="graph-diameters-and-eigenvalue-bounds">5. Polynomial bounds on distance and neighborhoods</h3>
<p>For nonempty vertex sets {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, let</p>

{% raw %}<div class="math display">\[
\operatorname{dist}(X,Y)=\min_{x\in X,\ y\in Y}\operatorname{dist}(x,y).
\]</div>{% endraw %}
<p>If a matrix {% raw %}<span class="math inline">\(M\)</span>{% endraw %} has zero off-diagonal entries away from graph edges, then {% raw %}<span class="math inline">\((M^j)_{uv}=0\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\operatorname{dist}(u,v)&gt;j\)</span>{% endraw %}. Each term in the matrix product follows a sequence of {% raw %}<span class="math inline">\(j\)</span>{% endraw %} factors. An off-diagonal factor traverses an edge, and a diagonal factor stays at the current vertex. Hence a polynomial of degree at most {% raw %}<span class="math inline">\(t\)</span>{% endraw %} in {% raw %}<span class="math inline">\(M\)</span>{% endraw %} has zero {% raw %}<span class="math inline">\((u,v)\)</span>{% endraw %} entry when {% raw %}<span class="math inline">\(\operatorname{dist}(u,v)&gt;t\)</span>{% endraw %}. This applies to {% raw %}<span class="math inline">\(M=\mathcal L\)</span>{% endraw %}.</p>

<h4 data-note-section="5.1" id="polynomial-projection">5.1. Approximation to the zero-eigenspace projection</h4>
<p>Put {% raw %}<span class="math inline">\(\Pi_0=\phi_0\phi_0^\top\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\phi_0=T^{1/2}\mathbf1/\sqrt\nu\)</span>{% endraw %}. For a real polynomial {% raw %}<span class="math inline">\(p\)</span>{% endraw %} with {% raw %}<span class="math inline">\(p(0)=1\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\varepsilon(p)=\max_{1\le i\le n-1}|p(\lambda_i)|.
\]</div>{% endraw %}
<p>The spectral theorem gives</p>

{% raw %}<div class="math display">\[
p(\mathcal L)-\Pi_0
=\sum_{i=1}^{n-1}p(\lambda_i)\phi_i\phi_i^\top,
\qquad
\|p(\mathcal L)-\Pi_0\|_{2\to2}=\varepsilon(p).
\]</div>{% endraw %}
<p>The polynomial fixes {% raw %}<span class="math inline">\(\phi_0\)</span>{% endraw %} and changes each orthogonal eigenvector by a factor bounded in absolute value by {% raw %}<span class="math inline">\(\varepsilon(p)\)</span>{% endraw %}.</p>

<div id="polynomial-distance-lemma" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>. (Distance from polynomial approximation.) Let {% raw %}<span class="math inline">\(p(0)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\deg p\le t\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(t\)</span>{% endraw %} is a nonnegative integer. For nonempty disjoint sets {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(x=\operatorname{Vol}(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y=\operatorname{Vol}(Y)\)</span>{% endraw %}. If</p>

{% raw %}<span id="eq:polynomial-distance-condition"></span><div class="math display">\[
\varepsilon(p)\sqrt{\frac{(\nu-x)(\nu-y)}{xy}}&lt;1,

\tag{18}\]</div>{% endraw %}
<p>then {% raw %}<span class="math inline">\(\operatorname{dist}(X,Y)\le t\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(u_X=T^{1/2}\mathbf1_X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u_Y=T^{1/2}\mathbf1_Y\)</span>{% endraw %}. Their coefficients along {% raw %}<span class="math inline">\(\phi_0\)</span>{% endraw %} are {% raw %}<span class="math inline">\(x/\sqrt\nu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y/\sqrt\nu\)</span>{% endraw %}. Their orthogonal components have squared norms</p>

{% raw %}<div class="math display">\[
\|(I-\Pi_0)u_X\|^2=x-\frac{x^2}{\nu}
=\frac{x(\nu-x)}\nu,
\qquad
\|(I-\Pi_0)u_Y\|^2=\frac{y(\nu-y)}\nu.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(p(\mathcal L)-\Pi_0\)</span>{% endraw %} vanishes on {% raw %}<span class="math inline">\(\phi_0\)</span>{% endraw %}, Cauchy–Schwarz and the operator norm bound give</p>

{% raw %}<span id="eq:fourier-inversion-condition"></span><div class="math display">\[
\left|u_Y^\top p(\mathcal L)u_X-\frac{xy}{\nu}\right|
\le\frac{\varepsilon(p)}\nu
\sqrt{x(\nu-x)y(\nu-y)}.

\tag{19}\]</div>{% endraw %}
<p>Under the strict inequality in the statement, the inner product on the left before subtraction is positive. If {% raw %}<span class="math inline">\(\operatorname{dist}(X,Y)&gt;t\)</span>{% endraw %}, every matrix entry contributing to it would be zero by polynomial support. This contradiction proves the claim. ◻</p>

</div>
<h4 data-note-section="5.2" id="affine-spectral-rescaling">5.2. An affine rescaling of the spectrum</h4>
<p>Write {% raw %}<span class="math inline">\(a=\lambda_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=\lambda_{n-1}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\max_{a\le z\le b}|1-cz|
=\max(|1-ca|,|1-cb|).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(c\le2/(a+b)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(1-ca\ge(b-a)/(a+b)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(c\ge2/(a+b)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(cb-1\ge(b-a)/(a+b)\)</span>{% endraw %}. Equality in the minimization over {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is attained when the endpoint values have equal absolute value and opposite signs. Thus</p>

{% raw %}<span id="eq:affine-polynomial"></span><div class="math display">\[
c_* =\frac2{a+b},\qquad
q=\frac{b-a}{b+a},\qquad
p_t(z)=\left(1-\frac{2z}{a+b}\right)^t,
\qquad \varepsilon(p_t)\le q^t.

\tag{20}\]</div>{% endraw %}
<p>This chooses the best affine factor {% raw %}<span class="math inline">\(1-cz\)</span>{% endraw %} on the interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. Taking its {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-th power supplies a polynomial of degree at most {% raw %}<span class="math inline">\(t\)</span>{% endraw %}; it does not solve the optimization over all polynomials of that degree. <a href="#chebyshev-appendix">Appendix D</a> uses another polynomial to improve the estimate when the gap is small.</p>

<p>For a connected noncomplete graph, {% raw %}<span class="math inline">\(0&lt;q&lt;1\)</span>{% endraw %}. Indeed, {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(q&lt;1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(a=b\)</span>{% endraw %}, the spectral decomposition would give {% raw %}<span class="math inline">\(\mathcal L=a(I-\Pi_0)\)</span>{% endraw %}, whose off-diagonal entries are {% raw %}<span class="math inline">\(-a\sqrt{d_ud_v}/\nu&lt;0\)</span>{% endraw %} for every pair of distinct vertices. Every pair would then be an edge. Complete graphs have diameter one and are treated directly.</p>

<span id="result-10"></span>
<div id="set-distance-bound" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>. (Set distance and diameter.) For a connected noncomplete graph and nonempty disjoint {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[
R(X,Y)=\sqrt{\frac{\operatorname{Vol}(\overline X)
\operatorname{Vol}(\overline Y)}{\operatorname{Vol}(X)\operatorname{Vol}(Y)}}.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<span id="eq:set-distance-bound"></span><div class="math display">\[
\operatorname{dist}(X,Y)
\le\left\lfloor\frac{\log R(X,Y)}{\log(1/q)}\right\rfloor+1.

\tag{21}\]</div>{% endraw %}
<p>In particular,</p>

{% raw %}<span id="eq:irregular-diameter-bound"></span><div class="math display">\[
D\le\left\lfloor
\frac{\log(\nu/d_{\min}-1)}{\log(1/q)}
\right\rfloor+1.

\tag{22}\]</div>{% endraw %}
<p>For a regular graph this becomes</p>

{% raw %}<span id="eq:regular-diameter-bound"></span><div class="math display">\[
D\le\left\lfloor\frac{\log(n-1)}{\log(1/q)}\right\rfloor+1.

\tag{23}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Disjointness gives {% raw %}<span class="math inline">\(x+y\le\nu\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\((\nu-x)(\nu-y)\ge xy\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R(X,Y)\ge1\)</span>{% endraw %}. The displayed integer is strictly larger than {% raw %}<span class="math inline">\(\log R(X,Y)/\log(1/q)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(q^tR(X,Y)&lt;1\)</span>{% endraw %}. Apply <a href="#polynomial-distance-lemma">the polynomial distance lemma</a> with {% raw %}<span class="math inline">\(p_t\)</span>{% endraw %}.</p>

<p>For distinct vertices {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
R(\{u\},\{v\})
=\sqrt{\left(\frac\nu{d_u}-1\right)
\left(\frac\nu{d_v}-1\right)}
\le\frac\nu{d_{\min}}-1.
\]</div>{% endraw %}
<p>Maximizing their distances proves the diameter bound. If the graph is {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-regular, then {% raw %}<span class="math inline">\(\nu=nk\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu/d_{\min}-1=n-1\)</span>{% endraw %}. ◻</p>

</div>
<p>The floor followed by {% raw %}<span class="math inline">\(+1\)</span>{% endraw %} ensures the strict inequality required by the positivity argument, including when the logarithmic ratio is an integer. Intersecting sets have distance zero. Complementary nonempty sets have {% raw %}<span class="math inline">\(R=1\)</span>{% endraw %}, and the bound gives distance at most one, as connectedness requires.</p>

<p>The affine rescaling also works for bipartite graphs. By comparison, {% raw %}<span class="math inline">\(I-\mathcal L\)</span>{% endraw %} has eigenvalue {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} when {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is bipartite, so its powers do not tend to zero on the whole orthogonal complement of {% raw %}<span class="math inline">\(\phi_0\)</span>{% endraw %}.</p>

<h4 data-note-section="5.3" id="closed-neighborhood-expansion">5.3. Expansion of closed neighborhoods</h4>
<p>For an integer {% raw %}<span class="math inline">\(s\ge1\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\delta_sX=\{v\in\overline X:\operatorname{dist}(v,X)\le s\},
\qquad N_s[X]=X\cup\delta_sX.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(Y=V\setminus N_s[X]\)</span>{% endraw %} is nonempty, then {% raw %}<span class="math inline">\(\operatorname{dist}(X,Y)&gt;s\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(u_Y^\top p_s(\mathcal L)u_X=0\)</span>{% endraw %}, and <a href="#eq:fourier-inversion-condition">the spectral estimate</a> gives</p>

{% raw %}<span id="eq:separated-volume"></span><div class="math display">\[
\operatorname{Vol}(X)\operatorname{Vol}(Y)
\le q^{2s}\operatorname{Vol}(\overline X)
\operatorname{Vol}(\overline Y).

\tag{24}\]</div>{% endraw %}
<p>The same inequality holds if {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is empty, since its left side is then zero.</p>

<span id="result-11"></span>
<div id="spectral-neighborhood-bound" class="proposition" data-note-number="10" data-note-kind="Proposition">
<p><strong>Proposition 10</strong>. (Neighborhood expansion.) For every nonempty proper subset {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and integer {% raw %}<span class="math inline">\(s\ge1\)</span>{% endraw %},</p>

{% raw %}<span id="eq:neighborhood-bound"></span><div class="math display">\[
\frac{\operatorname{Vol}(\delta_sX)}{\operatorname{Vol}(X)}
\ge\frac{1-q^{2s}}
{q^{2s}+\operatorname{Vol}(X)/\operatorname{Vol}(\overline X)}.

\tag{25}\]</div>{% endraw %}
<p>For complete graphs the formula holds with {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %}, and equality holds.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(x=\operatorname{Vol}(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b_s=\operatorname{Vol}(\delta_sX)\)</span>{% endraw %}. The complementary set {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} has volume {% raw %}<span class="math inline">\(\nu-x-b_s\)</span>{% endraw %}. Substitution in <a href="#eq:separated-volume">the separated-volume inequality</a> gives</p>

{% raw %}<div class="math display">\[
x(\nu-x-b_s)\le q^{2s}(\nu-x)(x+b_s).
\]</div>{% endraw %}
<p>Rearranging yields</p>

{% raw %}<div class="math display">\[
x(\nu-x)(1-q^{2s})
\le b_s\bigl(x+q^{2s}(\nu-x)\bigr).
\]</div>{% endraw %}
<p>Both {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu-x\)</span>{% endraw %} are positive. Dividing gives the claim. If the graph is complete, {% raw %}<span class="math inline">\(\delta_sX=\overline X\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(s\ge1\)</span>{% endraw %}, and substitution of {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %} gives equality. ◻</p>

</div>
<span id="result-12"></span>
<p>For {% raw %}<span class="math inline">\(s=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Vol}(X)\le\nu/2\)</span>{% endraw %}, the denominator comparison gives</p>

{% raw %}<span id="eq:half-volume-expansion"></span><div class="math display">\[
\frac{\operatorname{Vol}(\delta X)}{\operatorname{Vol}(X)}
\ge\frac{1-q^2}{1+q^2}
\ge1-q
=\frac{2\lambda_1}{\lambda_1+\lambda_{n-1}}.

\tag{26}\]</div>{% endraw %}
<p>The second inequality follows from</p>

{% raw %}<div class="math display">\[
\frac{1-q^2}{1+q^2}-(1-q)
=\frac{q(1-q)^2}{1+q^2}\ge0.
\]</div>{% endraw %}
<p>The half-volume restriction is needed for this comparison. It directly bounds {% raw %}<span class="math inline">\(g_G^{\mathrm{small}}\)</span>{% endraw %}; the stated definition of {% raw %}<span class="math inline">\(g_G\)</span>{% endraw %} also involves larger sets, for which <a href="#eq:neighborhood-bound">the full neighborhood formula</a> applies.</p>

<h3 data-note-section="6" id="graph-worked-examples">6. Complete graphs, paths, and cycles</h3>
<h4 data-note-section="6.1" id="complete-graph-example">6.1. Complete graphs</h4>
<p>For {% raw %}<span class="math inline">\(K_n\)</span>{% endraw %}, every degree is {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A=\mathbf1\mathbf1^\top-I\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\mathcal L=\frac{n}{n-1}I
-\frac1{n-1}\mathbf1\mathbf1^\top.
\]</div>{% endraw %}
<p>Its eigenvalues are {% raw %}<span class="math inline">\(0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n/(n-1)\)</span>{% endraw %}, the latter with multiplicity {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D=1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|X|=k\le n/2\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|\partial X|=k(n-k)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Vol}(X)=k(n-1)\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
h_{K_n}=\min_{1\le k\le\lfloor n/2\rfloor}\frac{n-k}{n-1}
=\frac{\lceil n/2\rceil}{n-1}.
\]</div>{% endraw %}
<p>For even {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the upper Cheeger bound is an equality: {% raw %}<span class="math inline">\(2h_{K_n}=\lambda_1\)</span>{% endraw %}. Also, {% raw %}<span class="math inline">\(\delta X=\overline X\)</span>{% endraw %} for every proper nonempty {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, which verifies equality in the neighborhood formula with {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %}.</p>

<h4 data-note-section="6.2" id="three-vertex-path-example">6.2. The three-vertex path</h4>
<p>Label the path {% raw %}<span class="math inline">\(1\!\sim\!2\!\sim\!3\)</span>{% endraw %}. Its degrees are {% raw %}<span class="math inline">\((1,2,1)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
\mathcal L=
\begin{pmatrix}
1&amp;-1/\sqrt2&amp;0\\
-1/\sqrt2&amp;1&amp;-1/\sqrt2\\
0&amp;-1/\sqrt2&amp;1
\end{pmatrix}.
\]</div>{% endraw %}
<p>Eigenvectors proportional to {% raw %}<span class="math inline">\((1,\sqrt2,1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\((1,0,-1)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\((1,-\sqrt2,1)\)</span>{% endraw %} have eigenvalues {% raw %}<span class="math inline">\(0,1,2\)</span>{% endraw %}, respectively. To compute {% raw %}<span class="math inline">\(h_G\)</span>{% endraw %}, it suffices to examine singleton cuts and their complements. An endpoint has boundary size {% raw %}<span class="math inline">\(1\)</span>{% endraw %} and smaller-side volume {% raw %}<span class="math inline">\(1\)</span>{% endraw %}; the middle vertex has boundary size {% raw %}<span class="math inline">\(2\)</span>{% endraw %} and smaller-side volume {% raw %}<span class="math inline">\(2\)</span>{% endraw %}. Every ratio is {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
h_G=1,\qquad \lambda_1=1
=1-\sqrt{1-h_G^2}.
\]</div>{% endraw %}
<p>The sharper lower Cheeger inequality can therefore be attained. The weighted eigenfunction {% raw %}<span class="math inline">\(f=(1,0,-1)\)</span>{% endraw %} has positive part supported on one endpoint, and its threshold cut also has conductance {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. Here {% raw %}<span class="math inline">\(q=1/3\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\nu/d_{\min}-1=3\)</span>{% endraw %}, and the diameter bound gives {% raw %}<span class="math inline">\(D\le\lfloor1\rfloor+1=2\)</span>{% endraw %}, the actual diameter.</p>

<h4 data-note-section="6.3" id="cycle-example">6.3. Cycles and the order of the bounds</h4>
<p>Let {% raw %}<span class="math inline">\(G=C_n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(n\ge4\)</span>{% endraw %}. Every degree is {% raw %}<span class="math inline">\(2\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\mathcal L=I-A/2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(k=0,\ldots,n-1\)</span>{% endraw %}, the complex vector with {% raw %}<span class="math inline">\(j\)</span>{% endraw %}-th coordinate {% raw %}<span class="math inline">\(e^{2\pi i k j/n}\)</span>{% endraw %} is an eigenvector of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} with eigenvalue {% raw %}<span class="math inline">\(2\cos(2\pi k/n)\)</span>{% endraw %}. These vectors form a basis, and hence</p>

{% raw %}<div class="math display">\[
\operatorname{spec}(\mathcal L)
=\left\{1-\cos\left(\frac{2\pi k}{n}\right):0\le k&lt;n\right\},
\qquad
\lambda_1=1-\cos(2\pi/n)
\sim\frac{2\pi^2}{n^2}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(1\le k\le n/2\)</span>{% endraw %}, any {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-vertex subset has at least two boundary edges. A consecutive block of {% raw %}<span class="math inline">\(k\)</span>{% endraw %} vertices has exactly two. Its volume is {% raw %}<span class="math inline">\(2k\)</span>{% endraw %}, giving</p>

{% raw %}<div class="math display">\[
h_{C_n}=\frac1{\lfloor n/2\rfloor},\qquad
D(C_n)=\lfloor n/2\rfloor.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %} has the same order as {% raw %}<span class="math inline">\(h_G^2\)</span>{% endraw %}. A universal lower bound proportional to {% raw %}<span class="math inline">\(h_G\)</span>{% endraw %} with a positive constant independent of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} cannot hold.</p>

<p>For even {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lambda_{n-1}=2\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
\log(1/q)
=\log\left(\frac{2+\lambda_1}{2-\lambda_1}\right)
\sim\lambda_1.
\]</div>{% endraw %}
<p>The affine-power diameter estimate is consequently of order {% raw %}<span class="math inline">\(n^2\log n\)</span>{% endraw %}, while the actual diameter is of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The Chebyshev estimate in <a href="#chebyshev-appendix">Appendix D</a> reduces this to order {% raw %}<span class="math inline">\(n\log n\)</span>{% endraw %}.</p>

<h3 data-note-section="A" id="flow-appendix">Appendix A. The flow proof for vertex expansion</h3>
<p>We first state the finite network theorem used in the construction, then prove the estimate in <a href="#vertex-flow-bound">the vertex-expansion theorem</a>.</p>

<span id="footnotes"></span> <span id="fn1"></span> <span id="fnref1"></span>
<div id="finite-max-flow" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>. (Max-flow/min-cut.) Consider a finite directed network with source {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, sink {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, no arcs entering {% raw %}<span class="math inline">\(s\)</span>{% endraw %} or leaving {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and finite nonnegative arc capacities {% raw %}<span class="math inline">\(c_e\)</span>{% endraw %}. A feasible flow assigns {% raw %}<span class="math inline">\(F_e\in[0,c_e]\)</span>{% endraw %} to each arc and conserves flow at every vertex other than {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}. Its value is the total flow leaving {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. The maximum flow value equals the minimum capacity of a cut, where a cut consists of a set of vertices containing {% raw %}<span class="math inline">\(s\)</span>{% endraw %} and excluding {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and its capacity is the sum of capacities on arcs leaving that set.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The feasible flows form a nonempty compact subset of a finite-dimensional space: each coordinate lies in a closed bounded interval, conservation gives closed linear constraints, and the zero flow is feasible. Since the flow value is continuous, a maximizing flow exists.</p>

<p>For each original arc {% raw %}<span class="math inline">\(u\to v\)</span>{% endraw %}, its residual network has a forward arc with capacity {% raw %}<span class="math inline">\(c_{uv}-F_{uv}\)</span>{% endraw %} and a reverse arc with capacity {% raw %}<span class="math inline">\(F_{uv}\)</span>{% endraw %}, retaining only positive capacities. If a path from {% raw %}<span class="math inline">\(s\)</span>{% endraw %} to {% raw %}<span class="math inline">\(t\)</span>{% endraw %} existed in this network, a simple such path would have a positive minimum residual capacity. Increasing the original flows along forward steps and decreasing them along reverse steps by that amount would preserve feasibility and increase the value. Thus no such path exists for a maximizing flow.</p>

<p>Let {% raw %}<span class="math inline">\(U\)</span>{% endraw %} be the vertices reachable from {% raw %}<span class="math inline">\(s\)</span>{% endraw %} by residual arcs. Then {% raw %}<span class="math inline">\(s\in U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t\notin U\)</span>{% endraw %}. Every original arc leaving {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is saturated; otherwise its forward residual arc would make its endpoint reachable. Every original arc entering {% raw %}<span class="math inline">\(U\)</span>{% endraw %} carries zero flow; otherwise its reverse residual arc would have the same consequence. Summing conservation over {% raw %}<span class="math inline">\(U\setminus\{s\}\)</span>{% endraw %} shows that the flow value equals the capacity of this cut.</p>

<p>For any feasible flow and any cut, the value is outgoing flow minus incoming flow across the cut. It is therefore at most the cut capacity. The cut just constructed attains equality, proving the theorem. The argument permits arbitrary real capacities. ◻</p>

</div>
<p>This is the max-flow/min-cut theorem of <a href="#ref-ford_maximal_1956">Ford and Fulkerson (1956)</a>. The existence argument above avoids any assumption that repeated augmentations with real capacities terminate after finitely many steps.</p>

<h4 data-note-section="A.1" id="vertex-transport">A.1. Construction of the transport</h4>
<p>Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a weighted eigenfunction for {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %}, with sign chosen so that {% raw %}<span class="math inline">\(X=\{f&gt;0\}\)</span>{% endraw %} has volume at most {% raw %}<span class="math inline">\(\nu/2\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(g=f_+\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B_g=\|g\|_T^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\gamma=g_G\)</span>{% endraw %}. The positive-part lemma gives</p>

{% raw %}<div class="math display">\[
\lambda_1 B_g\ge\mathcal E(g).
\]</div>{% endraw %}
<p>Make disjoint copies {% raw %}<span class="math inline">\(X_L\)</span>{% endraw %} of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_R\)</span>{% endraw %} of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, together with a source {% raw %}<span class="math inline">\(s\)</span>{% endraw %} and sink {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. The network has the following arcs and capacities:</p>

{% raw %}<div class="math display">\[
\begin{array}{c|c|c}
\text{arc}&amp;\text{condition}&amp;\text{capacity}\\\hline
s\to u_L&amp;u\in X&amp;(1+\gamma)d_u\\
u_L\to v_R&amp;u=v\text{ or }u\sim v&amp;H\\
v_R\to t&amp;v\in V&amp;d_v
\end{array}
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is any finite number strictly larger than {% raw %}<span class="math inline">\((1+\gamma)\operatorname{Vol}(X)\)</span>{% endraw %}. The middle arcs with {% raw %}<span class="math inline">\(u=v\)</span>{% endraw %} allow mass to remain at its original vertex.</p>

<span id="fn2"></span> <span id="fnref2"></span>
<p>There is a cut of capacity {% raw %}<span class="math inline">\((1+\gamma)\operatorname{Vol}(X)\)</span>{% endraw %}, obtained by putting only {% raw %}<span class="math inline">\(s\)</span>{% endraw %} on the source side. Consequently, a minimum cut crosses no middle arc of capacity {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U\subseteq X\)</span>{% endraw %} be its left vertices on the source side. Every right vertex in {% raw %}<span class="math inline">\(U\cup\delta U\)</span>{% endraw %} must also be on that side. Its cut capacity is at least</p>

{% raw %}<span id="eq:vertex-flow-cut"></span><div class="math display">\[
\begin{aligned}
&amp;(1+\gamma)\operatorname{Vol}(X\setminus U)
+\operatorname{Vol}(U\cup\delta U)\\
&amp;\quad=(1+\gamma)\operatorname{Vol}(X)
-\gamma\operatorname{Vol}(U)+\operatorname{Vol}(\delta U)\\
&amp;\quad\ge(1+\gamma)\operatorname{Vol}(X).
\end{aligned}

\tag{27}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is nonempty, the last inequality follows from {% raw %}<span class="math inline">\(\operatorname{Vol}(U)\le\nu/2\)</span>{% endraw %} and the definition of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is empty, it is an equality. Right vertices beyond {% raw %}<span class="math inline">\(U\cup\delta U\)</span>{% endraw %}, if present on the source side, can only add nonnegative capacity.</p>

<p>The minimum cut therefore has exactly the total capacity leaving {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. By max-flow/min-cut, a flow saturates all source arcs. Let {% raw %}<span class="math inline">\(F_{uv}\)</span>{% endraw %} be its flow through {% raw %}<span class="math inline">\(u_L\to v_R\)</span>{% endraw %}, extended by zero for {% raw %}<span class="math inline">\(u\notin X\)</span>{% endraw %} and for absent middle arcs. Conservation gives</p>

{% raw %}<span id="eq:transport-marginals"></span><div class="math display">\[
\sum_v F_{uv}=(1+\gamma)d_u\quad(u\in X),
\qquad
\sum_u F_{uv}\le d_v\quad(v\in V).

\tag{28}\]</div>{% endraw %}
<p>These are statements about the outgoing and incoming mass at original vertices. In particular, each individual {% raw %}<span class="math inline">\(F_{uv}\le d_v\)</span>{% endraw %}.</p>

<h4 data-note-section="A.2" id="flow-energy-estimate">A.2. Divergence and the energy estimate</h4>
<p>Discard self-transfers. For each unordered edge {% raw %}<span class="math inline">\(e=\{u,v\}\)</span>{% endraw %}, cancel opposing transfers and set</p>

{% raw %}<div class="math display">\[
q_e=|F_{uv}-F_{vu}|.
\]</div>{% endraw %}
<p>Orient an edge with {% raw %}<span class="math inline">\(q_e&gt;0\)</span>{% endraw %} in the direction of its remaining transfer. Both operations preserve outgoing minus incoming mass at every vertex. Reindexing a finite sum gives the divergence identity</p>

{% raw %}<span id="eq:transport-divergence"></span><div class="math display">\[
\begin{aligned}
\sum_{e:u\to v}q_e(g(u)^2-g(v)^2)
&amp;=\sum_v g(v)^2\left(\sum_wF_{vw}-\sum_wF_{wv}\right)\\
&amp;\ge\gamma\sum_vd_vg(v)^2
=\gamma B_g.
\end{aligned}

\tag{29}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(v\in X\)</span>{% endraw %}, the difference of the two marginal sums is at least {% raw %}<span class="math inline">\(\gamma d_v\)</span>{% endraw %} by <a href="#eq:transport-marginals">the transport constraints</a>. Outside {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g(v)=0\)</span>{% endraw %}, so those vertices contribute nothing. The orientation is determined by the transport; individual terms in the edge sum need not be nonnegative.</p>

<p>Write {% raw %}<span class="math inline">\(d=d_{\max}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(F_{uv}\le d_v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F_{vu}\le d_u\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(q_e\le d\)</span>{% endraw %}. Also, cancellation reduces incident mass, and hence</p>

{% raw %}<div class="math display">\[
\sum_{e\ni v}q_e
\le\sum_wF_{vw}+\sum_wF_{wv}
\le(2+\gamma)d_v.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(v\notin X\)</span>{% endraw %}, the outgoing marginal is zero, so this bound also holds there. Using {% raw %}<span class="math inline">\(q_e^2\le dq_e\)</span>{% endraw %} and {% raw %}<span class="math inline">\((g(u)+g(v))^2\le2(g(u)^2+g(v)^2)\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sum_{e=\{u,v\}}q_e^2(g(u)+g(v))^2
&amp;\le2\sum_vg(v)^2\sum_{e\ni v}q_e^2\\
&amp;\le2d\sum_vg(v)^2\sum_{e\ni v}q_e\\
&amp;\le2d(2+\gamma)B_g.
\end{aligned}
\]</div>{% endraw %}
<p>Finally, factor {% raw %}<span class="math inline">\(g(u)^2-g(v)^2\)</span>{% endraw %} in <a href="#eq:transport-divergence">the divergence sum</a> and apply Cauchy–Schwarz. There is at most one remaining orientation for each unordered edge, so</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\gamma^2B_g^2
&amp;\le\left(\sum_{e:u\to v}(g(u)-g(v))^2\right)
\left(\sum_{e:u\to v}q_e^2(g(u)+g(v))^2\right)\\
&amp;\le2d(2+\gamma)B_g\mathcal E(g).
\end{aligned}
\]</div>{% endraw %}
<p>Divide by {% raw %}<span class="math inline">\(B_g^2&gt;0\)</span>{% endraw %} and use {% raw %}<span class="math inline">\(\mathcal E(g)/B_g\le\lambda_1\)</span>{% endraw %} to obtain</p>

{% raw %}<div class="math display">\[
\lambda_1\ge\frac{\gamma^2}{2d(2+\gamma)}.
\]</div>{% endraw %}
<p>This completes the proof of <a href="#vertex-flow-bound">the vertex-expansion theorem</a>.</p>

<h3 data-note-section="B" id="unnormalized-comparison">Appendix B. The unnormalized Laplacian</h3>
<span id="result-9"></span>
<p>Let {% raw %}<span class="math inline">\(0=\widetilde\lambda_0&lt;\widetilde\lambda_1\le\cdots\le\widetilde\lambda_{n-1}\)</span>{% endraw %} be the eigenvalues of {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, and define the edge-expansion constant using counting measure by</p>

{% raw %}<div class="math display">\[
\widetilde h_G
=\min_{\varnothing\ne X\subsetneq V}
\frac{|\partial X|}{\min(|X|,|\overline X|)}.
\]</div>{% endraw %}
<p>The kernel of {% raw %}<span class="math inline">\(L\)</span>{% endraw %} consists of constant functions, so its variational formula uses the ordinary mean:</p>

{% raw %}<div class="math display">\[
\widetilde\lambda_1
=\min_{\substack{f\ne0\\\sum_v f(v)=0}}
\frac{\mathcal E(f)}{\sum_v f(v)^2}
=\inf_{f\text{ nonconstant}}
\frac{\mathcal E(f)}{\min_{c\in\mathbb R}\sum_v(f(v)-c)^2}.
\]</div>{% endraw %}
<div id="normalization-comparison" class="proposition" data-note-number="12" data-note-kind="Proposition">
<p><strong>Proposition 12</strong>. (Comparison of normalizations.) For every {% raw %}<span class="math inline">\(0\le i\le n-1\)</span>{% endraw %},</p>

{% raw %}<span id="eq:normalization-comparison"></span><div class="math display">\[
d_{\min}\lambda_i\le\widetilde\lambda_i\le d_{\max}\lambda_i,
\qquad
d_{\min}h_G\le\widetilde h_G\le d_{\max}h_G.

\tag{30}\]</div>{% endraw %}
<p>The unnormalized Cheeger inequalities are</p>

{% raw %}<span id="eq:unnormalized-cheeger"></span><div class="math display">\[
\frac{\widetilde h_G^2}{2d_{\max}}
\le\widetilde\lambda_1\le2\widetilde h_G.

\tag{31}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For every nonzero {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
d_{\min}\frac{\mathcal E(f)}{\|f\|_T^2}
\le\frac{\mathcal E(f)}{\sum_vf(v)^2}
\le d_{\max}\frac{\mathcal E(f)}{\|f\|_T^2}.
\]</div>{% endraw %}
<p>Take the maximum over each subspace of dimension {% raw %}<span class="math inline">\(i+1\)</span>{% endraw %}, then the minimum over those subspaces. <a href="#eq:graph-minmax">The min–max formula</a> and its counterpart for {% raw %}<span class="math inline">\(L\)</span>{% endraw %} give the eigenvalue comparison. The two quotients are compared on the same subspaces, even though their minimizing mean-zero subspaces need not agree.</p>

<p>For every nontrivial cut,</p>

{% raw %}<div class="math display">\[
d_{\min}\min(|X|,|\overline X|)
\le\min(\operatorname{Vol}(X),\operatorname{Vol}(\overline X))
\le d_{\max}\min(|X|,|\overline X|).
\]</div>{% endraw %}
<p>Dividing the boundary size by these denominators and then taking minima proves the comparison of expansion constants.</p>

<p>For the upper Cheeger bound, choose a cut attaining {% raw %}<span class="math inline">\(\widetilde h_G\)</span>{% endraw %} and use the ordinary-mean-zero function equal to {% raw %}<span class="math inline">\(1/|X|\)</span>{% endraw %} on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-1/|\overline X|\)</span>{% endraw %} on its complement. Its Rayleigh quotient is</p>

{% raw %}<div class="math display">\[
|\partial X|\left(\frac1{|X|}+\frac1{|\overline X|}\right)
\le2\widetilde h_G.
\]</div>{% endraw %}
<p>For the lower bound, take an eigenfunction {% raw %}<span class="math inline">\(Lf=\widetilde\lambda_1 f\)</span>{% endraw %} with ordinary mean zero. Choose its sign so that {% raw %}<span class="math inline">\(X=\{f&gt;0\}\)</span>{% endraw %} has at most {% raw %}<span class="math inline">\(n/2\)</span>{% endraw %} vertices, and let {% raw %}<span class="math inline">\(g=f_+\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(B_0=\sum_vg(v)^2\)</span>{% endraw %}. The positive-part calculation gives {% raw %}<span class="math inline">\(\widetilde\lambda_1 B_0\ge\mathcal E(g)\)</span>{% endraw %}. Coarea with counting measure gives</p>

{% raw %}<div class="math display">\[
\sum_{\{u,v\}\in E}|g(u)^2-g(v)^2|
\ge\widetilde h_G B_0.
\]</div>{% endraw %}
<p>The other Cauchy–Schwarz factor is bounded by</p>

{% raw %}<div class="math display">\[
\sum_{\{u,v\}\in E}(g(u)+g(v))^2
\le2\sum_vd_vg(v)^2\le2d_{\max}B_0.
\]</div>{% endraw %}
<p>Combining these inequalities and dividing by {% raw %}<span class="math inline">\(B_0^2&gt;0\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\widetilde h_G^2\le2d_{\max}\widetilde\lambda_1\)</span>{% endraw %}. ◻</p>

</div>
<p>For a {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-regular graph, {% raw %}<span class="math inline">\(L=k\mathcal L\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde\lambda_i=k\lambda_i\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widetilde h_G=kh_G\)</span>{% endraw %}. Substitution recovers the normalized Cheeger inequalities with their stated constants.</p>

<h3 data-note-section="C" id="trace-appendix">Appendix C. A trace estimate</h3>
<span id="result-3"></span>
<p>Set {% raw %}<span class="math inline">\(B=I-\mathcal L=T^{-1/2}AT^{-1/2}\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
\rho_* =\max_{1\le i\le n-1}|1-\lambda_i|.
\]</div>{% endraw %}
<p>The eigenvalues of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} are {% raw %}<span class="math inline">\(1-\lambda_i\)</span>{% endraw %}, with the first equal to {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\operatorname{tr}(B^2)
=1+\sum_{i=1}^{n-1}(1-\lambda_i)^2
\le1+(n-1)\rho_*^2.
\]</div>{% endraw %}
<p>From the matrix entries,</p>

{% raw %}<span id="eq:trace-identity"></span><div class="math display">\[
\operatorname{tr}(B^2)
=2\sum_{\{u,v\}\in E}\frac1{d_ud_v}
=\sum_v\frac1{d_v}
-\sum_{\{u,v\}\in E}\left(\frac1{d_u}-\frac1{d_v}\right)^2.

\tag{32}\]</div>{% endraw %}
<p>To obtain the last equality, expand the square. Its two reciprocal-square terms sum to {% raw %}<span class="math inline">\(\sum_vd_v/d_v^2=\sum_v1/d_v\)</span>{% endraw %}, while its cross term is {% raw %}<span class="math inline">\(-2\sum_E1/(d_ud_v)\)</span>{% endraw %}. Combining the spectral and entrywise calculations gives</p>

{% raw %}<div class="math display">\[
\rho_*^2\ge\frac{\operatorname{tr}(B^2)-1}{n-1}.
\]</div>{% endraw %}
<p>For a {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-regular graph, {% raw %}<span class="math inline">\(|E|=nk/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{tr}(B^2)=n/k\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
\rho_*\ge\sqrt{\frac{n-k}{(n-1)k}}.
\]</div>{% endraw %}
<p>This controls the largest absolute nonconstant eigenvalue of the normalized adjacency matrix. It may reflect either a small {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %} or a large {% raw %}<span class="math inline">\(\lambda_{n-1}\)</span>{% endraw %}. For a bipartite graph, {% raw %}<span class="math inline">\(\rho_*=1\)</span>{% endraw %}.</p>

<h3 data-note-section="D" id="chebyshev-appendix">Appendix D. A Chebyshev refinement of the diameter bound</h3>
<p>The polynomial distance lemma permits any polynomial with value one at zero. Let {% raw %}<span class="math inline">\(a=\lambda_1&lt;b=\lambda_{n-1}\)</span>{% endraw %} and put</p>

{% raw %}<div class="math display">\[
\kappa=\frac{a+b}{b-a}=\frac1q&gt;1,
\qquad \theta=\operatorname{arcosh}(\kappa)&gt;0.
\]</div>{% endraw %}
<p>Define the Chebyshev polynomials by</p>

{% raw %}<div class="math display">\[
T_0(z)=1,\qquad T_1(z)=z,\qquad
T_{t+1}(z)=2zT_t(z)-T_{t-1}(z)\quad(t\ge1).
\]</div>{% endraw %}
<p>The recurrence and the cosine addition formula imply {% raw %}<span class="math inline">\(T_t(\cos u)=\cos(tu)\)</span>{% endraw %}. The same recurrence with the hyperbolic cosine gives {% raw %}<span class="math inline">\(T_t(\cosh u)=\cosh(tu)\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
|T_t(z)|\le1\quad(-1\le z\le1),
\qquad T_t(\kappa)=\cosh(t\theta)&gt;0.
\]</div>{% endraw %}
<p>Map the interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} onto {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %} and normalize at zero:</p>

{% raw %}<span id="eq:chebyshev-polynomial"></span><div class="math display">\[
r_t(z)=
\frac{T_t((a+b-2z)/(b-a))}{T_t(\kappa)}.

\tag{33}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(r_t(0)=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\deg r_t\le t\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\varepsilon(r_t)\le\frac1{\cosh(t\theta)}.
\]</div>{% endraw %}
<div id="chebyshev-distance-bound" class="proposition" data-note-number="13" data-note-kind="Proposition">
<p><strong>Proposition 13</strong>. (Chebyshev distance bound.) For a connected noncomplete graph and nonempty disjoint {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %},</p>

{% raw %}<span id="eq:chebyshev-distance-bound"></span><div class="math display">\[
\operatorname{dist}(X,Y)
\le\left\lfloor
\frac{\operatorname{arcosh}R(X,Y)}{\operatorname{arcosh}((a+b)/(b-a))}
\right\rfloor+1.

\tag{34}\]</div>{% endraw %}
<p>In particular,</p>

{% raw %}<span id="eq:chebyshev-diameter-bound"></span><div class="math display">\[
D\le\left\lfloor
\frac{\operatorname{arcosh}(\nu/d_{\min}-1)}
{\operatorname{arcosh}((a+b)/(b-a))}
\right\rfloor+1,

\tag{35}\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} in the numerator for a regular graph.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Disjointness gives {% raw %}<span class="math inline">\(R(X,Y)\ge1\)</span>{% endraw %}. The specified integer {% raw %}<span class="math inline">\(t\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(t\theta&gt;\operatorname{arcosh}R(X,Y)\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(\cosh(t\theta)&gt;R(X,Y)\)</span>{% endraw %}. The polynomial {% raw %}<span class="math inline">\(r_t\)</span>{% endraw %} therefore satisfies the strict condition of <a href="#polynomial-distance-lemma">the polynomial distance lemma</a>. The singleton estimate {% raw %}<span class="math inline">\(R(\{u\},\{v\})\le\nu/d_{\min}-1\)</span>{% endraw %} gives the diameter bound. ◻</p>

</div>
<p>For a small gap, the Chebyshev bound has a denominator of order {% raw %}<span class="math inline">\(\sqrt{a/b}\)</span>{% endraw %}. To see this, write {% raw %}<span class="math inline">\(r=a/b\in(0,1)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\log(1/q)=\log\left(\frac{1+r}{1-r}\right)\sim2r,
\]</div>{% endraw %}
<p>whereas</p>

{% raw %}<div class="math display">\[
\theta=\operatorname{arcosh}\left(\frac{1+r}{1-r}\right)
=2\operatorname{artanh}\sqrt r\sim2\sqrt r
\qquad(r\downarrow0).
\]</div>{% endraw %}
<p>The identity follows from {% raw %}<span class="math inline">\(\cosh(2u)=(1+\tanh^2u)/(1-\tanh^2u)\)</span>{% endraw %}. Also, {% raw %}<span class="math inline">\(\operatorname{arcosh}R=\log(R+\sqrt{R^2-1})\)</span>{% endraw %}. For regular graphs, these formulas change the scale of the diameter estimate from {% raw %}<span class="math inline">\(\log n/r\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\log n/\sqrt r\)</span>{% endraw %} when {% raw %}<span class="math inline">\(r\)</span>{% endraw %} is small. On even cycles, {% raw %}<span class="math inline">\(r\)</span>{% endraw %} is of order {% raw %}<span class="math inline">\(n^{-2}\)</span>{% endraw %}, giving the comparison stated in the example.</p>

<h3 id="refs">References</h3>
<p>The normalization and variational conventions follow Fan R. K. Chung, <em>Spectral Graph Theory</em>, CBMS Regional Conference Series in Mathematics 92, American Mathematical Society, 1997. The author provides <a href="https://fanchung.ucsd.edu/cbms.pdf">Chapter 1, “Eigenvalues and the Laplacian of a graph”</a>, and revised chapters on <a href="https://fanchung.ucsd.edu/research/cb/ch2.pdf">isoperimetric problems</a> and <a href="https://fanchung.ucsd.edu/research/cb/ch3.pdf">diameters and eigenvalues</a>.</p>

<span id="ref-ford_maximal_1956"></span>
<p>L. R. Ford, Jr., and D. R. Fulkerson. 1956. <a href="https://doi.org/10.4153/CJM-1956-045-5">“Maximal Flow Through a Network.”</a> <em>Canadian Journal of Mathematics</em> 8: 399–404.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-06-24-sobolev-spaces-embeddings-and-bounded-variation %}">Sobolev Spaces, Embeddings, and Bounded Variation</a></p></nav>

</div>
