---
layout: "post"
title: "Graph Laplacians, Isoperimetry, and Diameter Bounds"
date: "2024-08-03"
tags: ["math", "differential geometry"]
excerpt: "The study of geometry extends to any discrete setting, where we do not necessarily (a priori) expect it."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2024/08/03/a-gentle-introduction-to-spectral-graph-theory/", "/2024/08/17/on-isoperimetric-problems/", "/2024/08/31/graph-diameters-and-eigenvalue-bounds/"]
---

<div class="note-content" markdown="0">

<div id="a-gentle-introduction-to-spectral-graph-theory" data-note-section="title">

</div>
<p>A graph has a discrete analogue of Dirichlet energy: sum the squared differences of a function across edges. The unnormalized Laplacian represents this quadratic form. We also use its degree-normalized version, whose Rayleigh quotient compares this energy with a degree-weighted norm.</p>

<p>We relate the spectral gap to two geometric quantities. The Cheeger constant measures the size of a boundary relative to the set it encloses, while the diameter measures the longest shortest path. Trial functions give one direction of the comparison; level sets of eigenfunctions give the other.</p>

<p>Let {% raw %}<span class="math inline">\(G=(V,E)\)</span>{% endraw %} be a finite simple undirected graph, with {% raw %}<span class="math inline">\(n=|V|\)</span>{% endraw %} and vertex degrees {% raw %}<span class="math inline">\(d_v\)</span>{% endraw %}. The matrix definitions below allow isolated vertices, including graphs with no edges. The subsequent variational and diameter bounds will be stated for connected graphs with at least two vertices. Define</p>

{% raw %}<div class="math display">\[\begin{aligned}
    L(u,v) = \begin{cases}
        d_v &amp; \text{ if } u = v ~, \\
        -1 &amp; \text{ if } u,v \text{ are adjacent} ~, \\
        0 &amp; \text{ otherwise} ~.
    \end{cases}
\end{aligned}\]</div>{% endraw %}
<p> Define {% raw %}<span class="math inline">\(T = \operatorname{diag}(d_1, \cdots, d_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(|V| = n\)</span>{% endraw %} is assumed in this definition. The <em>Laplacian of the graph {% raw %}<span class="math inline">\(G\)</span>{% endraw %}</em> is the matrix </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal L (u,v) = \begin{cases}
        1 &amp; \text{ if } u = v \text{ and } d_v \neq 0 ~, \\
        \displaystyle -\frac{1}{\sqrt{d_u d_v}} &amp; \text{ if } u, v \text{ are adjacent} ~, \\
        0 &amp; \text{ otherwise} ~.
    \end{cases}
\end{aligned}\]</div>{% endraw %}
<p> Note that the Laplacian is equivalently written as {% raw %}<span class="math inline">\(\mathcal L = T^{-\frac12} L T^{-\frac12}\)</span>{% endraw %}. The convention is {% raw %}<span class="math inline">\(T^{-1} (v,v) = 0\)</span>{% endraw %} if {% raw %}<span class="math inline">\(d_v = 0\)</span>{% endraw %}. As such, {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %} can also be viewed as an operator on the space of functions {% raw %}<span class="math inline">\(g : V \to \mathbb R\)</span>{% endraw %}, and this satisfies </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal L g(u) = \frac{1}{\sqrt{d_u}} \sum_{v : u \sim v} \left( \frac{g(u)}{\sqrt{d_u}} - \frac{g(v)}{\sqrt{d_v}} \right) ~.
\end{aligned}\]</div>{% endraw %}
<p> Letting {% raw %}<span class="math inline">\(A\)</span>{% endraw %} be the adjacency matrix associated with {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, we then have that, in general, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal L = P - T^{-\frac12} A T^{-\frac12} ~.
\end{aligned}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(P=\operatorname{diag}(\mathbf1_{\{d_v&gt;0\}})\)</span>{% endraw %}, and every diagonal entry of {% raw %}<span class="math inline">\(T^{-1/2}\)</span>{% endraw %} at an isolated vertex is defined to be zero. Indeed, {% raw %}<span class="math inline">\(T^{-1/2}TT^{-1/2}=P\)</span>{% endraw %}. If no vertex is isolated, {% raw %}<span class="math inline">\(P=I\)</span>{% endraw %}. At an isolated vertex the operator value is zero, so the preceding coordinate formula is read with this convention.</p>

<p> Alternatively, we can define {% raw %}<span class="math inline">\(S\)</span>{% endraw %} be the matrix</p>

<ul>
<li><p>whose rows are indexed by the vertices,</p></li>
<li><p>whose columns are indexed by the edges of {% raw %}<span class="math inline">\(G\)</span>{% endraw %},</p></li>
</ul>
<p>such that each column corresponding to an edge {% raw %}<span class="math inline">\(e = (u,v)\)</span>{% endraw %} has entry {% raw %}<span class="math inline">\(\frac{1}{\sqrt{d_u}}\)</span>{% endraw %} in the row corresponding to {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(-\frac{1}{\sqrt{d_v}}\)</span>{% endraw %} in the row corresponding to {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(0\)</span>{% endraw %} otherwise. Then, by this definition, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal L = S S^* ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(S^*\)</span>{% endraw %} denotes the transpose of {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Seen this way, {% raw %}<span class="math inline">\(S\)</span>{% endraw %} can be viewed as a “boundary operator” that maps {% raw %}<span class="math inline">\(1\)</span>{% endraw %}-chains defined on the edges of a graph (denoted by {% raw %}<span class="math inline">\(C_1\)</span>{% endraw %}) to {% raw %}<span class="math inline">\(0\)</span>{% endraw %}-chains defined on vertices (denoted by {% raw %}<span class="math inline">\(C_0\)</span>{% endraw %}). {% raw %}<span class="math inline">\(S^*\)</span>{% endraw %} is correspondingly the “coboundary operator”.</p>

<p>The matrix {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %} is real symmetric, so the spectral theorem gives real eigenvalues and an orthonormal eigenbasis. Its factorization gives the additional sign information: {% raw %}<span class="math inline">\(z^T\mathcal Lz=|S^Tz|^2\ge0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, so every eigenvalue is nonnegative. From this point onward assume that {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is connected and {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %}; then all degrees are positive. For a nonzero real function {% raw %}<span class="math inline">\(g\)</span>{% endraw %} on the vertices, its Rayleigh quotient is</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \frac{\langle g, \mathcal L g \rangle}{\langle g, g \rangle} &amp;= \frac{\langle g, T^{-\frac12} L T^{-\frac12} g \rangle}{\langle g, g \rangle} = \frac{\langle f, L f \rangle}{\langle T^{\frac12} f, T^{\frac12} f \rangle} = \frac{\sum_{u \sim v} (f(u) - f(v))^2}{\sum_v f(v)^2 d_v} ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(g = T^{\frac12} f\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(u \sim v\)</span>{% endraw %} denotes the collection of all <em>unordered</em> vertex pairs such that {% raw %}<span class="math inline">\(u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v\)</span>{% endraw %} are adjacent.</p>

<p>There are {% raw %}<span class="math inline">\(n\)</span>{% endraw %} real eigenvalues counted with multiplicity, which we order as {% raw %}<span class="math inline">\(0=\lambda_0\le\lambda_1\le\cdots\le\lambda_{n-1}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(L\mathbf1=0\)</span>{% endraw %}, the vector {% raw %}<span class="math inline">\(T^{1/2}\mathbf1\)</span>{% endraw %} is a zero eigenvector of {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %}. The energy vanishes only when the function is constant on each connected component; connectedness therefore makes the zero eigenvalue simple. The least positive eigenvalue has the variational characterization</p>

{% raw %}<span id="eq:variational-least-eigenvalue"></span><div class="math display">\[\begin{aligned}
 
    \lambda_G \triangleq \lambda_1 = \inf_{\substack{f\ne0\\f\perp T\mathbf1}} \frac{\sum_{u \sim v} (f(u) - f(v))^2}{\sum_v f(v)^2 d_v} ~.
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> We call any function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} attaining the infimum in <a href="#eq:variational-least-eigenvalue" data-reference-type="eqref" data-reference="eq:variational-least-eigenvalue">(1)</a> the <em>harmonic eigenfunction of {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %}</em>. Note that <a href="#eq:variational-least-eigenvalue" data-reference-type="eqref" data-reference="eq:variational-least-eigenvalue">(1)</a> is equivalent to </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \lambda_1 &amp;= \inf_{f\ \mathrm{nonconstant}} \sup_t \frac{\sum_{u \sim v} (f(u) - f(v))^2}{\sum_v (f(v) - t)^2 d_v} ~, \\
    \lambda_1 &amp;= \inf_{f\ \mathrm{nonconstant}} \frac{\sum_{u \sim v} (f(u) - f(v))^2}{\sum_v (f(v) - \overline f)^2 d_v} ~,~ \text{where } \overline f \triangleq \frac{\sum_v f(v) d_v}{\operatorname{Vol} (G)} 
\end{aligned}\]</div>{% endraw %}
<p> and {% raw %}<span class="math inline">\(\operatorname{Vol} (G) \triangleq \sum_v d_v\)</span>{% endraw %}.</p>

<p>The spectral properties of a graph are intimately tied to a number of “geometric” properties of it. Define the <em>diameter</em> of a graph as the <em>maximum</em> distance between any two vertices of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}.</p>

<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be a connected graph, and {% raw %}<span class="math inline">\(D\)</span>{% endraw %} be the diameter of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lambda_1 \geq \frac{1}{D \operatorname{Vol} (G)} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a harmonic eigenfunction attaining the infimum in <a href="#eq:variational-least-eigenvalue" data-reference-type="eqref" data-reference="eq:variational-least-eigenvalue">(1)</a>. Let {% raw %}<span class="math inline">\(v_0\)</span>{% endraw %} be a vertex such that {% raw %}<span class="math inline">\(|f(v_0)| = \max_v |f(v)|\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\sum_v d_v f(v) = 0\)</span>{% endraw %}, it must be true that there exists a vertex {% raw %}<span class="math inline">\(u_0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(f(u_0) f(v_0) &lt; 0\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(P\)</span>{% endraw %} is the shortest path in {% raw %}<span class="math inline">\(G\)</span>{% endraw %} joining the vertices {% raw %}<span class="math inline">\(u_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v_0\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lambda_1 &amp;= \frac{\sum_{u \sim v} (f(u) - f(v))^2}{\sum_u f(u)^2 d_u} \geq \frac{\sum_{(u,v) \in P} (f(u) - f(v))^2}{f(v_0)^2 \operatorname{Vol} (G)} \\
        &amp;\geq \frac{(f(u_0) - f(v_0))^2}{D f(v_0)^2 \operatorname{Vol} (G)} \geq \frac{1}{D \operatorname{Vol} (G)} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the penultimate inequality follows from an application of the Cauchy-Schwarz inequality. ◻</p>

</div>
<p>To recover the eigenvalue equation at a vertex, perturb the minimizing function there and differentiate its Rayleigh quotient.</p>

<div id="result-2" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a harmonic eigenfunction attaining <a href="#eq:variational-least-eigenvalue" data-reference-type="eqref" data-reference="eq:variational-least-eigenvalue">(1)</a>. Then, for any vertex {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{1}{d_v} \sum_{y: y \sim v} (f(v) - f(y)) = \lambda_G f(v) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(E(f)=\sum_{\{u,v\}\in E}(f(u)-f(v))^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B(f)=\sum_vd_vf(v)^2\)</span>{% endraw %}. For every perturbation {% raw %}<span class="math inline">\(h\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(\sum_vd_vh(v)=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f+\varepsilon h\)</span>{% endraw %} remains admissible in (1). Differentiating {% raw %}<span class="math inline">\(E(f+\varepsilon h)/B(f+\varepsilon h)\)</span>{% endraw %} at its minimum gives</p>
{% raw %}<div class="math display">\[\sum_{\{u,v\}\in E}(f(u)-f(v))(h(u)-h(v))=\lambda_1\sum_vd_vf(v)h(v).\]</div>{% endraw %}
<p>The left side equals {% raw %}<span class="math inline">\(\sum_vh(v)\sum_{y\sim v}(f(v)-f(y))\)</span>{% endraw %}: each unordered edge contributes its two endpoint terms. Therefore {% raw %}<span class="math inline">\(Lf-\lambda_1Tf\)</span>{% endraw %} is orthogonal to the hyperplane {% raw %}<span class="math inline">\(\{h:\langle h,T\mathbf1\rangle=0\}\)</span>{% endraw %}, and so equals {% raw %}<span class="math inline">\(cT\mathbf1\)</span>{% endraw %} for some scalar {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Summing its coordinates gives zero, because {% raw %}<span class="math inline">\(\mathbf1^\top Lf=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_vd_vf(v)=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\operatorname{Vol}(G)&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(Lf=\lambda_1Tf\)</span>{% endraw %}, which is the asserted vertex equation. ◻</p>
</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (a trace bound).</strong> Put {% raw %}<span class="math inline">\(B=I-\mathcal L=T^{-1/2}AT^{-1/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline\lambda=\max_{i\ge1}|1-\lambda_i|\)</span>{% endraw %}. Since the eigenvalues of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} are {% raw %}<span class="math inline">\(1-\lambda_i\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\operatorname{tr}(B^2)=1+\sum_{i=1}^{n-1}(1-\lambda_i)^2\le1+(n-1)\overline\lambda^2.\]</div>{% endraw %}
<p>Directly from its entries,</p>
{% raw %}<div class="math display">\[\operatorname{tr}(B^2)=2\sum_{\{u,v\}\in E}\frac1{d_ud_v}=\sum_v\frac1{d_v}-\sum_{\{u,v\}\in E}\left(\frac1{d_u}-\frac1{d_v}\right)^2.\]</div>{% endraw %}
<p>All edge sums here are unordered. The last identity follows by expanding the square: the sum of its two reciprocal-square terms is {% raw %}<span class="math inline">\(\sum_vd_v/d_v^2\)</span>{% endraw %}. Thus</p>
{% raw %}<div class="math display">\[\overline\lambda^2\ge\frac{\operatorname{tr}(B^2)-1}{n-1}.\]</div>{% endraw %}
<p>For a {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-regular graph, {% raw %}<span class="math inline">\(\operatorname{tr}(B^2)=n/k\)</span>{% endraw %}, and consequently {% raw %}<span class="math inline">\(\overline\lambda\ge\sqrt{(n-k)/((n-1)k)}\)</span>{% endraw %}. The square root is essential when passing from the trace to {% raw %}<span class="math inline">\(\overline\lambda\)</span>{% endraw %}.</p>
</div>
<h3 data-note-section="1" id="on-isoperimetric-problems">1. On Isoperimetric Problems</h3>
<p>We next compare the spectral gap with the size of cuts. An isoperimetric problem asks how small a boundary can be when the enclosed set has prescribed size. On a graph, the boundary can be counted in edges or in vertices.</p>

<p>A useful tool to study isoperimetric problems for graphs is the <em>Cheeger constant</em> of a graph {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(S\)</span>{% endraw %} denote a subset of the vertices of graph {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Then, the <em>volume</em> of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is the sum of all degrees of the vertices in {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \operatorname{Vol} (S) = \sum_{s \in S} d_s ~.
\end{aligned}\]</div>{% endraw %}
<p> The <em>edge boundary</em> of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is the collection of all edges with exactly one endpoint in {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \partial S \triangleq \{ (u,v) \in E = E(G) : u \in S ~,~ v \notin S \} ~.
\end{aligned}\]</div>{% endraw %}
<p> The <em>vertex boundary</em> of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is the collection of all vertices {% raw %}<span class="math inline">\(v\)</span>{% endraw %} not in {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, but adjacent to some vertex in {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \delta S \triangleq \{ v \notin S : (u,v) \in E = E(G) ~,~ u \in S \} ~.
\end{aligned}\]</div>{% endraw %}
<p> These definitions give two versions of the isoperimetric problem:</p>

<ol>
<li><p>for a fixed number {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, find a subset {% raw %}<span class="math inline">\(S\)</span>{% endraw %} of vertices, with {% raw %}<span class="math inline">\(m \leq \operatorname{Vol} (S) \leq \operatorname{Vol} (\overline S)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\partial S\)</span>{% endraw %} contains as few edges as possible;</p></li>
<li><p>for a fixed number {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, find a subset {% raw %}<span class="math inline">\(S\)</span>{% endraw %} of vertices, with {% raw %}<span class="math inline">\(m \leq \operatorname{Vol} (S) \leq \operatorname{Vol} (\overline S)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\delta S\)</span>{% endraw %} contains as few vertices as possible.</p></li>
</ol>
<p>We can then begin to understand how to tackle these problems, through defining the Cheeger constant. We first define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    h_G (S) \triangleq \frac{|E(S,\overline S)|}{\min (\operatorname{Vol} (S), \operatorname{Vol} (\overline S))} ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\overline S = V \setminus S\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E(A,B)\)</span>{% endraw %} denotes the set of edges with one endpoint in {% raw %}<span class="math inline">\(A \subset V\)</span>{% endraw %} and another endpoint in {% raw %}<span class="math inline">\(B \subset V\)</span>{% endraw %}. The <em>Cheeger constant</em> is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    h_G = \min_{\varnothing\ne S\subsetneq V} ~ h_G (S) ~.
\end{aligned}\]</div>{% endraw %}
<p>For every nonempty proper {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\partial S|\ge h_G\min(\operatorname{Vol}(S),\operatorname{Vol}(\overline S))\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(|\partial S|\ge h_G\operatorname{Vol}(S)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\operatorname{Vol}(S)\le\operatorname{Vol}(G)/2\)</span>{% endraw %}. Connectedness gives {% raw %}<span class="math inline">\(h_G&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|\partial S|\le\min(\operatorname{Vol}(S),\operatorname{Vol}(\overline S))\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(h_G\le1\)</span>{% endraw %}. These are edge-expansion bounds.</p>
<p>There is an analogous definition for <em>vertex expansions of a graph {% raw %}<span class="math inline">\(G\)</span>{% endraw %}</em>, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}
    g_G (S) = \frac{\operatorname{Vol} (\delta S)}{\min ( \operatorname{Vol}(S), \operatorname{Vol}(\overline S) )} ~,
\end{aligned}\]</div>{% endraw %}
<p> and analogously define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    g_G = \min_{\varnothing\ne S\subsetneq V} ~ g_G (S) ~.
\end{aligned}\]</div>{% endraw %}
<div id="result-4" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>.  {% raw %}<span class="math inline">\(\lambda_1 \leq 2 h_G\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Choose a nonempty proper set {% raw %}<span class="math inline">\(A\)</span>{% endraw %} attaining {% raw %}<span class="math inline">\(h_G\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(B=V\setminus A\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a=\operatorname{Vol}(A)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=\operatorname{Vol}(B)\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(f=1/a\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f=-1/b\)</span>{% endraw %} on {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. Its degree-weighted mean is zero. Only crossing edges contribute to its energy, so its Rayleigh quotient is</p>
{% raw %}<div class="math display">\[\frac{|E(A,B)|(1/a+1/b)^2}{a/a^2+b/b^2}=|E(A,B)|(1/a+1/b)\le\frac{2|E(A,B)|}{\min(a,b)}=2h_G.\]</div>{% endraw %}
<p>The variational characterization proves the result. ◻</p>
</div>
<div id="result-5" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5 (Cheeger lower bound).</strong> For a connected graph, {% raw %}<span class="math inline">\(\lambda_1\ge h_G^2/2\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} satisfy the eigenfunction equation of Lemma 2. Its weighted mean is zero and it is not zero, so it takes both positive and negative values. Replacing {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by {% raw %}<span class="math inline">\(-f\)</span>{% endraw %} if necessary ensures that {% raw %}<span class="math inline">\(X=\{f&gt;0\}\)</span>{% endraw %} has volume at most half the total volume. Put {% raw %}<span class="math inline">\(g=f_+\)</span>{% endraw %}, and write</p>
{% raw %}<div class="math display">\[B=\sum_vd_vg(v)^2&gt;0,\qquad E_g=\sum_{\{u,v\}\in E}(g(u)-g(v))^2.\]</div>{% endraw %}
<p>Multiply {% raw %}<span class="math inline">\(Lf=\lambda_1Tf\)</span>{% endraw %} by {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and sum. The monotone one-Lipschitz map {% raw %}<span class="math inline">\(x\mapsto x_+\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\((a-b)(a_+-b_+)\ge(a_+-b_+)^2\)</span>{% endraw %}, hence</p>
{% raw %}<div class="math display">\[\lambda_1B=\sum_{\{u,v\}\in E}(f(u)-f(v))(g(u)-g(v))\ge E_g.\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(t\ge0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(S_t=\{v:g(v)^2&gt;t\}\)</span>{% endraw %}. Each nonempty {% raw %}<span class="math inline">\(S_t\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and therefore has volume at most half. Finite-sum layer cake gives the discrete coarea identities</p>
{% raw %}<div class="math display">\[\sum_{\{u,v\}\in E}|g(u)^2-g(v)^2|=\int_0^\infty|\partial S_t|dt\ge h_G\int_0^\infty\operatorname{Vol}(S_t)dt=h_GB.\]</div>{% endraw %}
<p>On the other hand, Cauchy–Schwarz gives</p>
{% raw %}<div class="math display">\[\left(\sum_{\{u,v\}\in E}|g(u)^2-g(v)^2|\right)^2\le E_g\sum_{\{u,v\}\in E}(g(u)+g(v))^2\le2E_gB.\]</div>{% endraw %}
<p>Combining the inequalities yields {% raw %}<span class="math inline">\(E_g/B\ge h_G^2/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\lambda_1\ge E_g/B\)</span>{% endraw %} completes the proof. This spells out the threshold argument without an undefined final vertex {% raw %}<span class="math inline">\(v_{n+1}\)</span>{% endraw %}, or a cut with zero denominator. ◻</p>
</div>
<div id="result-6" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6 (sharper Cheeger bound).</strong> Every connected graph satisfies</p>
{% raw %}<div class="math display">\[\lambda_1\ge1-\sqrt{1-h_G^2}.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Retain {% raw %}<span class="math inline">\(g,B,E_g\)</span>{% endraw %} from Lemma 5 and set {% raw %}<span class="math inline">\(W=E_g/B\)</span>{% endraw %}. Expanding the two edge sums gives the exact identity</p>
{% raw %}<div class="math display">\[\sum_{\{u,v\}\in E}(g(u)+g(v))^2=2B-E_g=(2-W)B.\]</div>{% endraw %}
<p>Because {% raw %}<span class="math inline">\(g\ge0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(E_g=B-2\sum_{\{u,v\}\in E}g(u)g(v)\le B\)</span>{% endraw %}; hence {% raw %}<span class="math inline">\(0&lt;W\le1\)</span>{% endraw %}. Use the coarea lower bound and Cauchy–Schwarz again to obtain {% raw %}<span class="math inline">\(h_G^2B^2\le E_g(2B-E_g)\)</span>{% endraw %}, or</p>
{% raw %}<div class="math display">\[(W-1)^2\le1-h_G^2.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\lambda_1\ge W\ge1-\sqrt{1-h_G^2}\)</span>{% endraw %}. This is an interval inequality for {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, not an equality with a root of the quadratic. Strictness is unavailable in general: the three-vertex path has {% raw %}<span class="math inline">\(h_G=1\)</span>{% endraw %} and normalized spectral gap {% raw %}<span class="math inline">\(\lambda_1=1\)</span>{% endraw %}. ◻</p>
</div>
<div id="result-7" class="remark" data-note-number="7" data-note-kind="Remark">
<p><strong>Remark 7.</strong> Every nontrivial cut of a connected graph contains at least one edge, and its smaller side has volume at most {% raw %}<span class="math inline">\(\operatorname{Vol}(G)/2\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(h_G\ge2/\operatorname{Vol}(G)\)</span>{% endraw %}. Since a simple graph has {% raw %}<span class="math inline">\(\operatorname{Vol}(G)\le n(n-1)\)</span>{% endraw %}, Lemma 5 gives</p>
{% raw %}<div class="math display">\[\lambda_1\ge\frac2{\operatorname{Vol}(G)^2}\ge\frac2{n^2(n-1)^2}\ge\frac2{n^4}.\]</div>{% endraw %}
</div>
<p>For each set {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, every crossing edge is incident to {% raw %}<span class="math inline">\(\delta S\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(|\partial S|\le\operatorname{Vol}(\delta S)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(d=\max_vd_v\)</span>{% endraw %}, also {% raw %}<span class="math inline">\(\operatorname{Vol}(\delta S)\le d|\partial S|\)</span>{% endraw %}. Taking minima gives {% raw %}<span class="math inline">\(h_G\le g_G\le dh_G\)</span>{% endraw %}, and hence {% raw %}<span class="math inline">\(\lambda_1\le2g_G\)</span>{% endraw %}. A flow construction gives a lower bound with only one factor of {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, as follows.</p>
<div id="result-8" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8 (a vertex-expansion bound).</strong> Let {% raw %}<span class="math inline">\(d=\max_vd_v\)</span>{% endraw %}. For the vertex-expansion constant defined above,</p>
{% raw %}<div class="math display">\[\lambda_1\ge\frac{g_G^2}{2d(2+g_G)}.\]</div>{% endraw %}
<p>The constant here is the one established by the flow estimate below.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Take {% raw %}<span class="math inline">\(g=f_+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X=\{f&gt;0\}\)</span>{% endraw %} as in Lemma 5, so {% raw %}<span class="math inline">\(\operatorname{Vol}(X)\le\operatorname{Vol}(G)/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\lambda_1\ge E_g/B\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\gamma=g_G\)</span>{% endraw %}. Make disjoint copies {% raw %}<span class="math inline">\(X_L\)</span>{% endraw %} of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_R\)</span>{% endraw %} of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, with source {% raw %}<span class="math inline">\(s\)</span>{% endraw %} and sink {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Give {% raw %}<span class="math inline">\(s\to u_L\)</span>{% endraw %} capacity {% raw %}<span class="math inline">\((1+\gamma)d_u\)</span>{% endraw %}, give {% raw %}<span class="math inline">\(v_R\to t\)</span>{% endraw %} capacity {% raw %}<span class="math inline">\(d_v\)</span>{% endraw %}, and give {% raw %}<span class="math inline">\(u_L\to v_R\)</span>{% endraw %} capacity {% raw %}<span class="math inline">\(H&gt;(1+\gamma)\operatorname{Vol}(X)\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(u=v\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\{u,v\}\in E\)</span>{% endraw %}.</p>
<p>For completeness, we prove the finite directed max-flow/min-cut theorem. Feasible flows form a compact set, so a maximum exists. Its residual network has no source-to-sink path with positive residual capacities, since augmenting along that path would increase the flow. Let the source side of the cut consist of the vertices reachable from the source in the residual network. Every original arc leaving this set is saturated and every original arc entering it has zero flow. Conservation at interior vertices therefore identifies the flow value with this cut capacity. Every feasible flow is bounded by every cut capacity, proving equality.<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a> There is a cut of capacity {% raw %}<span class="math inline">\((1+\gamma)\operatorname{Vol}(X)\)</span>{% endraw %}, namely the arcs leaving {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, so a minimum cut uses no capacity-{% raw %}<span class="math inline">\(H\)</span>{% endraw %} arc. If {% raw %}<span class="math inline">\(U\subset X\)</span>{% endraw %} is the set of left vertices on the source side, all right copies in {% raw %}<span class="math inline">\(U\cup\delta U\)</span>{% endraw %} must also be on that side. The cut therefore has capacity at least<a href="#fn2" class="footnote-ref" id="fnref2" role="doc-noteref"><sup>2</sup></a></p>
{% raw %}<div class="math display">\[(1+\gamma)\operatorname{Vol}(X\setminus U)+\operatorname{Vol}(U\cup\delta U)\ge(1+\gamma)\operatorname{Vol}(X).\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(U\ne\varnothing\)</span>{% endraw %}, the last step uses {% raw %}<span class="math inline">\(\operatorname{Vol}(U)\le\operatorname{Vol}(G)/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Vol}(\delta U)\ge\gamma\operatorname{Vol}(U)\)</span>{% endraw %}; for {% raw %}<span class="math inline">\(U=\varnothing\)</span>{% endraw %} it is immediate. Thus all source arcs can be saturated. The resulting transport numbers {% raw %}<span class="math inline">\(F_{uv}\ge0\)</span>{% endraw %}, extended by zero for {% raw %}<span class="math inline">\(u\notin X\)</span>{% endraw %}, satisfy</p>
{% raw %}<div class="math display">\[\sum_vF_{uv}=(1+\gamma)d_u\quad(u\in X),\qquad\sum_uF_{uv}\le d_v\quad(v\in V).\]</div>{% endraw %}
<p>Discard self-transfers and cancel opposing transfers on each original edge. Give the remaining net transfer {% raw %}<span class="math inline">\(q_e=|F_{uv}-F_{vu}|\)</span>{% endraw %} its positive orientation {% raw %}<span class="math inline">\(u\to v\)</span>{% endraw %}. This preserves divergence. In particular, the weighted divergence identity gives</p>
{% raw %}<div class="math display">\[\sum_{e:u\to v}q_e(g(u)^2-g(v)^2)=\sum_vg(v)^2\left(\sum_wF_{vw}-\sum_wF_{wv}\right)\ge\gamma B.\]</div>{% endraw %}
<p>Vertices outside {% raw %}<span class="math inline">\(X\)</span>{% endraw %} contribute zero because {% raw %}<span class="math inline">\(g=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(F_{uv}\le d_v\le d\)</span>{% endraw %}, each {% raw %}<span class="math inline">\(q_e\le d\)</span>{% endraw %}. Cancellation can only reduce incident transfer, so</p>
{% raw %}<div class="math display">\[\sum_{e\ni v}q_e\le\sum_wF_{vw}+\sum_wF_{wv}\le(2+\gamma)d_v.\]</div>{% endraw %}
<p>Consequently,</p>
{% raw %}<div class="math display">\[\begin{aligned}\sum_{e=\{u,v\}}q_e^2(g(u)+g(v))^2&amp;\le2\sum_vg(v)^2\sum_{e\ni v}q_e^2\\&amp;\le2d(2+\gamma)\sum_vd_vg(v)^2=2d(2+\gamma)B.\end{aligned}\]</div>{% endraw %}
<p>Apply Cauchy–Schwarz to the divergence sum, with one factor {% raw %}<span class="math inline">\(g(u)-g(v)\)</span>{% endraw %} and the other {% raw %}<span class="math inline">\(q_e(g(u)+g(v))\)</span>{% endraw %}. There is at most one net orientation per unordered edge; the first sum of squares is therefore at most {% raw %}<span class="math inline">\(E_g\)</span>{% endraw %}. We obtain {% raw %}<span class="math inline">\(\gamma^2B^2\le2d(2+\gamma)BE_g\)</span>{% endraw %}, proving the theorem. ◻</p>
</div>
<div id="result-9" class="remark" data-note-number="9" data-note-kind="Remark">
<p><strong>Remark 9 (counting vertices rather than degree-weighted volume).</strong> Define</p>
{% raw %}<div class="math display">\[\widetilde h_G=\min_{\varnothing\ne S\subsetneq V}\frac{|\partial S|}{\min(|S|,|V\setminus S|)}.\]</div>{% endraw %}
<p>Writing {% raw %}<span class="math inline">\(d_{\min}=\min_vd_v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d_{\max}=\max_vd_v\)</span>{% endraw %}, comparison of the denominators gives {% raw %}<span class="math inline">\(d_{\min}h_G\le\widetilde h_G\le d_{\max}h_G\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(0=\widetilde\lambda_0\le\cdots\le\widetilde\lambda_{n-1}\)</span>{% endraw %} are the eigenvalues of {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, then</p>
{% raw %}<div class="math display">\[\widetilde\lambda_1=\min_{f\ne0,\,\sum_vf(v)=0}\frac{E(f)}{\sum_vf(v)^2}=\inf_{f\text{ nonconstant}}\frac{E(f)}{\min_t\sum_v(f(v)-t)^2}.\]</div>{% endraw %}
<p>The min–max principle and {% raw %}<span class="math inline">\(d_{\min}\sum f^2\le\sum d_vf^2\le d_{\max}\sum f^2\)</span>{% endraw %} give {% raw %}<span class="math inline">\(d_{\min}\lambda_i\le\widetilde\lambda_i\le d_{\max}\lambda_i\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(i\)</span>{% endraw %}: apply the quotient comparison on each subspace before taking the min–max over subspaces.</p>
<p>There is also the unnormalized Cheeger inequality</p>
{% raw %}<div class="math display">\[\frac{\widetilde h_G^2}{2d_{\max}}\le\widetilde\lambda_1\le2\widetilde h_G.\]</div>{% endraw %}
<p>For the upper bound, use the cut trial function of Lemma 4 with {% raw %}<span class="math inline">\(|A|,|B|\)</span>{% endraw %} replacing volumes. For the lower bound, use an eigenfunction of {% raw %}<span class="math inline">\(L\)</span>{% endraw %} with ordinary mean zero, choosing its sign so that {% raw %}<span class="math inline">\(\{f&gt;0\}\)</span>{% endraw %} has at most {% raw %}<span class="math inline">\(n/2\)</span>{% endraw %} vertices. The proof of Lemma 5 then gives {% raw %}<span class="math inline">\(\widetilde\lambda_1\sum g^2\ge E_g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_E|g(u)^2-g(v)^2|\ge\widetilde h_G\sum g^2\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\sum_E(g(u)+g(v))^2\le2d_{\max}\sum g^2\)</span>{% endraw %}. Combining these proves the lower bound, with the squared isoperimetric constant {% raw %}<span class="math inline">\(\widetilde h_G^2\)</span>{% endraw %} in the numerator.</p>
</div>
<h3 data-note-section="2" id="graph-diameters-and-eigenvalue-bounds">2. Graph Diameters and Eigenvalue Bounds</h3>
<p>If a matrix {% raw %}<span class="math inline">\(M\)</span>{% endraw %} has zero off-diagonal entries away from graph edges, then {% raw %}<span class="math inline">\((M^j)_{uv}=0\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(d(u,v)&gt;j\)</span>{% endraw %}. Indeed, every term in the matrix product follows a sequence of at most {% raw %}<span class="math inline">\(j\)</span>{% endraw %} edges, with diagonal factors permitting stays at a vertex. Thus a polynomial of degree {% raw %}<span class="math inline">\(t\)</span>{% endraw %} in {% raw %}<span class="math inline">\(M\)</span>{% endraw %} has zero {% raw %}<span class="math inline">\((u,v)\)</span>{% endraw %} entry when {% raw %}<span class="math inline">\(d(u,v)&gt;t\)</span>{% endraw %}. We apply this to a polynomial in {% raw %}<span class="math inline">\(\mathcal L\)</span>{% endraw %}.</p>
<p>We choose the polynomial by first shifting and rescaling the nonzero spectrum. Write {% raw %}<span class="math inline">\(a=\lambda_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=\lambda_{n-1}\)</span>{% endraw %}. For a positive constant {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, the largest absolute value of {% raw %}<span class="math inline">\(1-cz\)</span>{% endraw %} on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} is</p>
{% raw %}<div class="math display">\[\max_{a\leq z\leq b}|1-cz|=\max\{|1-ca|,|1-cb|\}.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(c\leq2/(a+b)\)</span>{% endraw %}, the first endpoint gives a value at least {% raw %}<span class="math inline">\((b-a)/(a+b)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(c\geq2/(a+b)\)</span>{% endraw %}, the second endpoint gives the same lower bound. Equality is attained when the two endpoint values are negatives of one another:</p>
{% raw %}<div class="math display">\[1-ca=-(1-cb),\qquad c=\frac{2}{a+b}.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(I-2\mathcal L/(\lambda_1+\lambda_{n-1})\)</span>{% endraw %} fixes the zero-eigenspace and places every other eigenvalue in the interval {% raw %}<span class="math inline">\([-q,q]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(q=(b-a)/(a+b)\)</span>{% endraw %}. Taking its {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-th power suppresses these other eigenspaces by at most {% raw %}<span class="math inline">\(q^t\)</span>{% endraw %}, while retaining the degree-{% raw %}<span class="math inline">\(t\)</span>{% endraw %} support property.</p>
<p>For a connected noncomplete graph put</p>
{% raw %}<div class="math display">\[q=\frac{\lambda_{n-1}-\lambda_1}{\lambda_{n-1}+\lambda_1}\in(0,1),\qquad p_t(z)=\left(1-\frac{2z}{\lambda_1+\lambda_{n-1}}\right)^t.\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(p_t(0)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|p_t(\lambda_i)|\le q^t\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i\ge1\)</span>{% endraw %}. If all positive eigenvalues were equal to {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathcal L=a(I-\phi_0\phi_0^\top)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\phi_0=T^{1/2}\mathbf1/\sqrt{\operatorname{Vol}(G)}\)</span>{% endraw %}; all its off-diagonal entries would be nonzero, forcing the graph to be complete. This proves the strict positivity of the numerator defining {% raw %}<span class="math inline">\(q\)</span>{% endraw %} here. Complete graphs have diameter one and can be handled separately.</p>
<p>For nonempty sets define {% raw %}<span class="math inline">\(d(X,Y)=\min_{x\in X,y\in Y}d(x,y)\)</span>{% endraw %}. The following estimate also gives the regular-graph diameter bound</p>
{% raw %}<div class="math display">\[D\le\left\lfloor\frac{\log(n-1)}{\log(1/q)}\right\rfloor+1.\]</div>{% endraw %}
<p>The integer must be strictly larger than the displayed logarithmic ratio; using a ceiling alone does not ensure the needed strict inequality at integer endpoints.</p>
<div id="result-10" class="proposition" data-note-number="10" data-note-kind="Proposition">
<p><strong>Proposition 10 (distance between vertex sets).</strong> In a connected noncomplete graph, for nonempty disjoint {% raw %}<span class="math inline">\(X,Y\subset V\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[d(X,Y)\le\left\lfloor\frac{\log\sqrt{\operatorname{Vol}(\overline X)\operatorname{Vol}(\overline Y)/(\operatorname{Vol}(X)\operatorname{Vol}(Y))}}{\log(1/q)}\right\rfloor+1.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(X\cap Y\ne\varnothing\)</span>{% endraw %}, their distance is zero.</p>
</div>
<div class="proof">
<span id="eq:fourier-inversion-condition"></span><p><em>Proof.</em> Take an orthonormal eigenbasis {% raw %}<span class="math inline">\(\phi_0,\ldots,\phi_{n-1}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\phi_0=T^{1/2}\mathbf1/\sqrt V\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(V=\operatorname{Vol}(G)\)</span>{% endraw %} in this proof. Set {% raw %}<span class="math inline">\(x=\operatorname{Vol}(X)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(y=\operatorname{Vol}(Y)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(u_X=T^{1/2}1_X\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(u_Y=T^{1/2}1_Y\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(u_X=\sum_i a_i\phi_i\)</span>{% endraw %}, then</p>
{% raw %}<div class="math display">\[a_0=x/\sqrt V,\qquad\sum_{i\ge1}a_i^2=\|u_X\|^2-a_0^2=x(V-x)/V.\]</div>{% endraw %}
<p>Similarly {% raw %}<span class="math inline">\(b_0=y/\sqrt V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_{i\ge1}b_i^2=y(V-y)/V\)</span>{% endraw %}. The spectral expansion and Cauchy–Schwarz therefore give</p>
{% raw %}<div class="math display">\[\left|\langle u_Y,p_t(\mathcal L)u_X\rangle-\frac{xy}{V}\right|\le\frac{q^t}{V}\sqrt{x(V-x)y(V-y)}.\tag{2}\]</div>{% endraw %}
<p>The inner product is positive whenever {% raw %}<span class="math inline">\(q^t\sqrt{(V-x)(V-y)/(xy)}&lt;1\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} are disjoint, {% raw %}<span class="math inline">\(x+y\le V\)</span>{% endraw %}, so the square-root ratio is at least one. The integer in the statement is strictly larger than its logarithm divided by {% raw %}<span class="math inline">\(\log(1/q)\)</span>{% endraw %}; it therefore makes the inner product positive. If {% raw %}<span class="math inline">\(d(X,Y)&gt;t\)</span>{% endraw %}, every matrix entry contributing to the inner product would be zero by the polynomial-support observation, a contradiction.</p>
<p>For singleton sets in a regular graph the square-root ratio is {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %}, which proves the diameter bound above. More generally it is at most {% raw %}<span class="math inline">\(V/d_{\min}-1\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(D\le\lfloor\log(V/d_{\min}-1)/\log(1/q)\rfloor+1\)</span>{% endraw %}. ◻</p>
</div>
<p>For an integer {% raw %}<span class="math inline">\(s\ge1\)</span>{% endraw %}, define the exterior {% raw %}<span class="math inline">\(s\)</span>{% endraw %}-boundary {% raw %}<span class="math inline">\(\delta_sX=\{v\notin X:d(v,X)\le s\}\)</span>{% endraw %}. The set outside the <em>closed</em> neighborhood is {% raw %}<span class="math inline">\(Y=V\setminus(X\cup\delta_sX)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Y\ne\varnothing\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(d(X,Y)&gt;s\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\langle u_Y,p_s(\mathcal L)u_X\rangle=0\)</span>{% endraw %}. Formula (2) implies</p>
{% raw %}<div class="math display">\[\operatorname{Vol}(X)\operatorname{Vol}(Y)\le q^{2s}\operatorname{Vol}(\overline X)\operatorname{Vol}(\overline Y).\]</div>{% endraw %}
<p>The same non-strict inequality is automatic if {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is empty. The shifted polynomial {% raw %}<span class="math inline">\(p_s\)</span>{% endraw %}, rather than {% raw %}<span class="math inline">\((I-\mathcal L)^s\)</span>{% endraw %}, is what supplies the spectral contraction factor {% raw %}<span class="math inline">\(q^s\)</span>{% endraw %}.</p>
<div id="result-11" class="proposition" data-note-number="11" data-note-kind="Proposition">
<p><strong>Proposition 11 (spectral boundary expansion).</strong> For every nonempty proper {% raw %}<span class="math inline">\(X\subset V\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\frac{\operatorname{Vol}(\delta X)}{\operatorname{Vol}(X)}\ge\frac{1-q^2}{q^2+\operatorname{Vol}(X)/\operatorname{Vol}(\overline X)}.\]</div>{% endraw %}
<p>This also holds for a complete graph with {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(x=\operatorname{Vol}(X)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=\operatorname{Vol}(\delta X)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(V=\operatorname{Vol}(G)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(Y=V\setminus(X\cup\delta X)\)</span>{% endraw %}, the preceding inequality gives</p>
{% raw %}<div class="math display">\[x(V-x-b)\le q^2(V-x)(x+b).\]</div>{% endraw %}
<p>Move the terms not containing {% raw %}<span class="math inline">\(b\)</span>{% endraw %} to one side:</p>
{% raw %}<div class="math display">\[x(V-x)(1-q^2)\le b[x+q^2(V-x)].\]</div>{% endraw %}
<p>Divide by the positive quantity {% raw %}<span class="math inline">\(x(V-x)[q^2+x/(V-x)]\)</span>{% endraw %}. This gives the claim, including the case of an empty {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. In a complete graph {% raw %}<span class="math inline">\(\delta X=\overline X\)</span>{% endraw %}, so the {% raw %}<span class="math inline">\(q=0\)</span>{% endraw %} formula is an equality. ◻</p>
</div>
<div id="result-12" class="remark" data-note-number="12" data-note-kind="Remark">
<p><strong>Remark 12.</strong> If {% raw %}<span class="math inline">\(\operatorname{Vol}(X)\le\operatorname{Vol}(\overline X)\)</span>{% endraw %}, Proposition 11 implies</p>
{% raw %}<div class="math display">\[\frac{\operatorname{Vol}(\delta X)}{\operatorname{Vol}(X)}\ge\frac{1-q^2}{1+q^2}\ge1-q=\frac{2\lambda_1}{\lambda_1+\lambda_{n-1}}.\]</div>{% endraw %}
<p>For the last inequality, subtract {% raw %}<span class="math inline">\(1-q\)</span>{% endraw %}: the difference is {% raw %}<span class="math inline">\(q(1-q)^2/(1+q^2)\ge0\)</span>{% endraw %}. The half-volume condition is necessary for this denominator comparison; the preceding proposition remains the appropriate bound for larger sets.</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-ford_maximal_1956" class="csl-entry" role="listitem">
Ford, L. R., and D. R. Fulkerson. 1956. <span>“Maximal Flow Through a Network.”</span> <em>Canadian Journal of Mathematics</em> 8: 399–404. <a href="https://doi.org/10.4153/CJM-1956-045-5">https://doi.org/10.4153/CJM-1956-045-5</a>.
</div>
</div>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>A pipe network has a maximum flow from its source to its sink. A cut limits that flow by the total capacity of the pipes crossing it. The max-flow/min-cut theorem identifies the maximum flow with the capacity of a minimum cut. Such a cut need not be unique.<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p>A minimum cut may include right-vertex-to-sink arcs. The large capacities exclude only the middle arcs. This is why the cut calculation contains {% raw %}<span class="math inline">\(\operatorname{Vol}(U\cup\delta U)\)</span>{% endraw %}.<a href="#fnref2" class="footnote-back" role="doc-backlink">↩︎</a></p>
</li>
</ol>
</section>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-06-24-sobolev-spaces-embeddings-and-bounded-variation %}">Sobolev Spaces, Embeddings, and Bounded Variation</a></p></nav>

</div>
