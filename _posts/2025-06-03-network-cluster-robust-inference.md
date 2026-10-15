---
layout: "post"
title: "Network Cluster-Robust Inference"
date: "2025-06-03"
tags: ["econometrics", "dependence"]
excerpt: "Partitioning a network does not make the resulting groups independent."
note_series: "Cluster and network inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Cluster Robust Inference and Network Dependence/stats.tex"
---

<div class="note-content" markdown="0">

<p>A cluster test needs group scores that are approximately independent. Dividing a network into named groups does not ensure this: links crossing a boundary may transmit dependence between their averages. <span class="citation" data-cites="leung_network_2023">(<a href="#ref-leung_network_2023" role="doc-biblioref">Leung 2023</a>)</span> gives conditions connecting the geometry of a partition to the stochastic independence needed for inference.</p>

<h3 data-note-section="1" id="12-108-the-inferential-requirement">1. The inferential requirement</h3>
<p>Let {% raw %}<span class="math inline">\(g(W_i,\theta_0)\)</span>{% endraw %} be a centered moment function on an observed network, and let {% raw %}<span class="math inline">\(\mathcal C_1,\ldots,\mathcal C_L\)</span>{% endraw %} be a partition. Define {% raw %}<span class="math inline">\(\widehat G_\ell=n_\ell^{-1}\sum_{i\in\mathcal C_\ell}g(W_i,\theta_0)\)</span>{% endraw %}.</p>

<div id="network-cluster-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s network dependence, moment, and neighborhood-growth conditions, the vector of normalized cluster moments has a joint Gaussian limit. The additional conductance and summability conditions make its off-diagonal covariance blocks vanish. With nondegenerate cluster variances and the other requirements of the chosen few-cluster procedure, this supplies the asymptotic independence needed for inference.</p>

</div>
<p>A joint Gaussian approximation is only the first step. If its off-diagonal covariances remain nonzero, changing one cluster’s sign need not preserve the joint law required by a <a href="{% post_url 2025-01-11-wild-cluster-bootstrap-with-few-large-clusters %}">few-cluster randomization test</a>.</p>

<h3 data-note-section="2" id="12-108-conductance-measures-the-boundary">2. Conductance measures the boundary</h3>
<p>For a set {% raw %}<span class="math inline">\(C\)</span>{% endraw %} with positive volume, write</p>

{% raw %}<div class="math display">\[
|\partial C|=\sum_{i\in C,j\notin C}A_{ij},\qquad
\operatorname{vol}(C)=\sum_{i\in C,j}A_{ij},\qquad
\phi(C)=\frac{|\partial C|}{\operatorname{vol}(C)}.
\]</div>{% endraw %}
<p>Low conductance means that relatively few edges leave the group. One condition in the paper combines the largest cluster conductance with average graph degree: {% raw %}<span class="math inline">\(\max_\ell\phi(\mathcal C_\ell)\delta(A)\to0\)</span>{% endraw %}. Additional restrictions control neighborhood growth and the decay of dependence with network distance.</p>

<p>The reason for controlling both graph geometry and dependence decay is visible in the cross-cluster covariance:</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}\!\left(\frac{\sum_{i\in C}g_i}{\sqrt{|C|}},
\frac{\sum_{j\in D}g_j}{\sqrt{|D|}}\right)
=\frac{\sum_{i\in C,j\in D}\operatorname{Cov}(g_i,g_j)}{\sqrt{|C||D|}}.
\]</div>{% endraw %}
<p>Split this sum into pairs near and far from the boundary. Nearby pairs may have large covariance, so their number must be small. Farther pairs may be numerous, so their covariance must decay sufficiently fast. Edges alone count only distance-one connections; the neighborhood bounds also account for longer paths.</p>

<h3 data-note-section="3" id="12-108-can-suitable-clusters-exist">3. Can suitable clusters exist?</h3>
<p>The normalized graph Laplacian is {% raw %}<span class="math inline">\(\mathcal L=I-D^{-1/2}AD^{-1/2}\)</span>{% endraw %}, with isolated vertices handled separately. Its small eigenvalues indicate weak connections between large pieces of the graph. For fixed {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, higher-order Cheeger inequalities relate the {% raw %}<span class="math inline">\(L\)</span>{% endraw %}th eigenvalue to the best achievable multiway conductance.</p>

<p>Small eigenvalues can guide the search for a low-conductance partition. The selected partition must still have suitable sizes and actual conductances, and the outcome model must satisfy the dependence and moment assumptions. The spectral calculation addresses only the graph part.</p>

<p>Some graphs have no suitable separation into the required number of substantial groups. A community algorithm will still return labels, but those labels do not establish independent cluster scores. In that setting the <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">dependence and resampling notes</a> discuss other approaches, each with its own dependence assumptions.</p>

<h3 data-note-section="4" id="12-108-a-concrete-boundary-calculation">4. A concrete boundary calculation</h3>
<p>Consider a simple special case: centered scalar {% raw %}<span class="math inline">\(g_i\)</span>{% endraw %} with uniformly bounded variances, maximum graph degree at most {% raw %}<span class="math inline">\(D\)</span>{% endraw %}, and covariance zero whenever graph distance exceeds a fixed integer {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(B_r\)</span>{% endraw %} bound the number of vertices within distance {% raw %}<span class="math inline">\(r\)</span>{% endraw %} of any vertex; for bounded degree and fixed {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B_r\)</span>{% endraw %} is bounded uniformly in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(i\in C\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j\notin C\)</span>{% endraw %}, and their distance is at most {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, a connecting path crosses an edge in {% raw %}<span class="math inline">\(\partial C\)</span>{% endraw %}. Both endpoints of the pair lie within distance {% raw %}<span class="math inline">\(r\)</span>{% endraw %} of an endpoint of that edge. A crude but sufficient count is therefore</p>

{% raw %}<div class="math display">\[
\#\{(i,j):i\in C,j\notin C,d(i,j)\leq r\}
\leq |\partial C|B_r^2.
\]</div>{% endraw %}
<p>Cauchy–Schwarz bounds each covariance by a constant {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|C|,|D|\geq cn\)</span>{% endraw %}, the normalized cross-cluster covariance satisfies</p>

{% raw %}<div class="math display">\[
\left|\operatorname{Cov}\left(\frac{\sum_{i\in C}g_i}{\sqrt{|C|}},
\frac{\sum_{j\in D}g_j}{\sqrt{|D|}}\right)\right|
\leq\frac{K|\partial C|B_r^2}{cn}.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(|\partial C|=o(n)\)</span>{% endraw %} is enough in this special case. It captures the argument’s geometry: strong cross-cluster dependence is confined to a negligible boundary region. A separate CLT is still required to conclude that the limiting vectors are independent Gaussian variables.</p>

<p>For dependence that decays rather than vanishes, choose a radius {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %} and split the covariance sum into near and far pairs. A crude far-pair bound, if {% raw %}<span class="math inline">\(|\operatorname{Cov}(g_i,g_j)|\leq\beta(r_n)\)</span>{% endraw %} beyond that radius, is of order {% raw %}<span class="math inline">\(n\beta(r_n)\)</span>{% endraw %} after normalization. One sufficient condition is therefore</p>

{% raw %}<div class="math display">\[
\frac{|\partial C|B_{r_n}^2}{n}+n\beta(r_n)\longrightarrow0.
\]</div>{% endraw %}
<p>This bound is deliberately coarser than the paper’s summability conditions. It displays the choice of radius: a larger radius reduces the far-pair covariance bound and increases the number of pairs counted near the boundary. Both terms must vanish.</p>

<p>The near/far split can be made quantitative on a graph with polynomial ball growth. Suppose {% raw %}<span class="math inline">\(B_r\leq C(1+r)^d\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\partial C|\leq Cn^a\)</span>{% endraw %} with {% raw %}<span class="math inline">\(0\leq a&lt;1\)</span>{% endraw %}, and covariance decays exponentially, {% raw %}<span class="math inline">\(\beta(r)\leq Ce^{-cr}\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(r_n=K\log n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(K&gt;1/c\)</span>{% endraw %}. The sufficient bound becomes</p>

{% raw %}<div class="math display">\[
\frac{|\partial C|B_{r_n}^2}{n}+n\beta(r_n)
\lesssim n^{a-1}(\log n)^{2d}+n^{1-cK}\longrightarrow0.
\]</div>{% endraw %}
<p>For a rectangular cluster in a {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional lattice, its volume is of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and its boundary is of order {% raw %}<span class="math inline">\(n^{(d-1)/d}\)</span>{% endraw %}, so this argument applies. The logarithmic neighborhood around the boundary still occupies a negligible fraction of the cluster. It gives an explicit route from local dependence to vanishing cross-cluster covariance.</p>

<p>If the balls instead grow exponentially, {% raw %}<span class="math inline">\(B_r\leq Ce^{\gamma r}\)</span>{% endraw %}, this same bound requires both {% raw %}<span class="math inline">\(K&gt;1/c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a-1+2\gamma K&lt;0\)</span>{% endraw %}. Such a {% raw %}<span class="math inline">\(K\)</span>{% endraw %} exists only when {% raw %}<span class="math inline">\(c&gt;2\gamma/(1-a)\)</span>{% endraw %}. This is a sufficient condition from a deliberately coarse count, not a necessary condition from the paper. It shows why the rate at which neighborhoods grow must be compared with the rate at which dependence decays. Community labels and a small conductance number cannot make that comparison on their own.</p>

<p>These calculations identify the step needed before applying a cluster test: show that the proposed averages have asymptotically independent limits. The graph must permit a partition for which the dependence bounds actually give that conclusion.</p>

<h3 data-note-section="5" id="12-108-why-average-degree-appears-with-conductance">5. Why average degree appears with conductance</h3>
<p>The identity {% raw %}<span class="math inline">\(|\partial C|=\phi(C)\operatorname{vol}(C)\)</span>{% endraw %} connects the graph partition to the covariance count. Summing over a fixed number of clusters,</p>

{% raw %}<div class="math display">\[
\frac1n\sum_\ell|\partial\mathcal C_\ell|
\leq\max_\ell\phi(\mathcal C_\ell)\,
\frac1n\sum_\ell\operatorname{vol}(\mathcal C_\ell)
=\max_\ell\phi(\mathcal C_\ell)\,\delta(A).
\]</div>{% endraw %}
<p>The average degree is {% raw %}<span class="math inline">\(\delta(A)=n^{-1}\sum_i d_i\)</span>{% endraw %}. When it grows, even a small fraction of crossing edges can be a large number. The conductance-degree product controls that count; moment and neighborhood restrictions then bound the covariance it can produce.</p>

<h3 data-note-section="6" id="12-108-the-spectral-calculation-behind-a-graph-cut">6. The spectral calculation behind a graph cut</h3>
<p>For an undirected graph without isolated vertices, let {% raw %}<span class="math inline">\(v=D^{1/2}h\)</span>{% endraw %}. Then the normalized-Laplacian quadratic form is</p>

{% raw %}<div class="math display">\[
v&#x27;\mathcal Lv
=\frac12\sum_{i,j}A_{ij}(h_i-h_j)^2,
\qquad v&#x27;v=\sum_i d_i h_i^2.
\]</div>{% endraw %}
<p>Take {% raw %}<span class="math inline">\(h=\mathbf1_C\)</span>{% endraw %}. Only crossing edges contribute, and the Rayleigh quotient is {% raw %}<span class="math inline">\(|\partial C|/\operatorname{vol}(C)=\phi(C)\)</span>{% endraw %}. To compare with the second eigenvalue, remove the constant direction by taking</p>

{% raw %}<div class="math display">\[
h_i=\begin{cases}
1/\operatorname{vol}(C),&amp;i\in C,\\
-1/\operatorname{vol}(C^c),&amp;i\notin C.
\end{cases}
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\sum_i d_ih_i=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is orthogonal to the zero-eigenvalue vector {% raw %}<span class="math inline">\(D^{1/2}\mathbf1\)</span>{% endraw %}. Substitution gives</p>

{% raw %}<div class="math display">\[
\frac{v&#x27;\mathcal Lv}{v&#x27;v}
=|\partial C|\left(\frac1{\operatorname{vol}(C)}
+\frac1{\operatorname{vol}(C^c)}\right)
=\phi(C)+\phi(C^c).
\]</div>{% endraw %}
<p>The variational characterization of {% raw %}<span class="math inline">\(\lambda_2\)</span>{% endraw %} therefore bounds it above by this quotient. A good two-way cut produces a small eigenvalue. The converse, and the extension to several clusters, require Cheeger-type inequalities rather than this one calculation alone.</p>

<h3 data-note-section="7" id="12-108-two-graph-sequences-with-different-implications">7. Two graph sequences with different implications</h3>
<p>A path split into a fixed number of contiguous segments has only a bounded number of crossing edges per segment and segment volumes of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Its conductances vanish. Under finite-range dependence and suitable moment conditions, the preceding covariance bound also vanishes.</p>

<p>For a bounded-degree expander, every substantial subset has conductance bounded below. The required partition cannot exist. An algorithm’s choice of cluster labels does not alter this obstruction.</p>

<p>Conversely, disconnected graph components could still share an unobserved common shock. The graph supports the inference argument only when the stochastic model links graph distance to decay of dependence. That assumption, together with the partition bounds, is needed for the <a href="{% post_url 2025-01-11-wild-cluster-bootstrap-with-few-large-clusters %}">few-cluster sign argument</a>.</p>

<h3 id="12-108-why-zero-limiting-covariance-is-enough-only-after-the-clt">Why zero limiting covariance is enough only after the CLT</h3>
<p>Suppose the normalized cluster vector converges jointly to a centered Gaussian vector {% raw %}<span class="math inline">\(Z=(Z_1&#39;,\ldots,Z_L&#39;)&#39;\)</span>{% endraw %} with block covariance {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}. If the boundary calculation makes every off-diagonal block zero, its characteristic function factorizes:</p>
<p>{% raw %}<div class="math display">\[\mathbb E e^{i\sum_\ell t_\ell&#39;Z_\ell}
=\exp\left(-\frac12\sum_\ell t_\ell&#39;\Sigma_{\ell\ell}t_\ell\right)
=\prod_\ell\mathbb E e^{it_\ell&#39;Z_\ell}.\]</div>{% endraw %}</p>
<p>This factorization proves independence of the limiting blocks. Centered Gaussian blocks are separately invariant under sign changes, giving the limiting symmetry required by a cluster sign test. Without joint Gaussian convergence, covariance zero alone is insufficient: if {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is standard normal, {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U^2-1\)</span>{% endraw %} are uncorrelated but dependent. The partition argument must therefore be combined with the joint CLT, not substituted for it.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-leung_network_2023" class="csl-entry" role="listitem">
Leung, Michael P. 2023. <span>“Network Cluster‐Robust Inference.”</span> <em>Econometrica</em> 91 (2): 641–67. <a href="https://doi.org/10.3982/ECTA19816">https://doi.org/10.3982/ECTA19816</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-03-13-when-to-cluster-sampling-assignment-and-fixed-effects %}">When to Cluster: Sampling, Assignment, and Fixed Effects</a></p></nav>

</div>
