---
layout: "post"
title: "Network Cluster-Robust Inference"
date: "2024-03-04"
tags: ["econometrics", "dependence"]
excerpt: "Using network clusters to account for dependence in inference."
note_series: "Cluster and network inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Cluster Robust Inference and Network Dependence/stats.tex"
redirect_from: ["/2025/06/03/network-cluster-robust-inference/"]
---

<div class="note-content" markdown="0">

<p>Cluster-based inference treats a few large groups as approximately independent. In a social network, assigning people to groups does not establish that independence: outcomes can remain correlated across the proposed boundaries. <span class="citation" data-cites="leung_network_2023">Leung (<a href="#ref-leung_network_2023" role="doc-biblioref">2023</a>)</span> shows how low conductance, together with restrictions on the decay of network dependence, makes the cluster sums asymptotically independent.</p>

<div id="12-108-the-inferential-requirement">

</div>
<h3 data-note-section="1" id="12-108-cluster-sums-and-their-joint-limit">1. Cluster sums and their joint limit</h3>
<p>Consider a sequence of fixed, undirected, unweighted networks with adjacency matrix {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{1,\ldots,n\}\)</span>{% endraw %}. Network distance {% raw %}<span class="math inline">\(d_n(i,j)\)</span>{% endraw %} is shortest-path distance, with distance infinity across disconnected components. All probability statements can also be read conditionally on a network for which the following assumptions hold.</p>

<p>Let {% raw %}<span class="math inline">\(g_i=g(W_i,\theta_0)\in\mathbb R^q\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb{E}[g_i]=0\)</span>{% endraw %}, and partition the vertices into a fixed number {% raw %}<span class="math inline">\(L\)</span>{% endraw %} of clusters {% raw %}<span class="math inline">\(C_1,\ldots,C_L\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[
n_\ell=|C_\ell|,\qquad
\widehat G_\ell=\frac1{n_\ell}\sum_{i\in C_\ell}g_i,\qquad
S_{n,\ell}=\frac1{\sqrt n}\sum_{i\in C_\ell}g_i.
\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(n_\ell/n\to\rho_\ell\in[0,1]\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(\sqrt{n_\ell}\widehat G_\ell,
\sqrt{n_m}\widehat G_m)\longrightarrow\Sigma_{\ell m},
\]</div>{% endraw %}
<p>where the limits are finite and each {% raw %}<span class="math inline">\(\Sigma_{\ell\ell}\)</span>{% endraw %} is positive definite. The covariance limit of the vector {% raw %}<span class="math inline">\(S_n=(S_{n,1}^\top,\ldots,S_{n,L}^\top)^\top\)</span>{% endraw %} has blocks</p>

{% raw %}<div class="math display">\[
\Gamma_{\ell m}=\sqrt{\rho_\ell\rho_m}\,\Sigma_{\ell m}.
\]</div>{% endraw %}
<p>The distinction between {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} matters when a cluster occupies a vanishing fraction of the graph. Its {% raw %}<span class="math inline">\(S_{n,\ell}\)</span>{% endraw %} component then converges to zero in mean square, although its normalization by {% raw %}<span class="math inline">\(\sqrt{n_\ell}\)</span>{% endraw %} can have nonzero variance.</p>

<h3 data-note-section="2" id="12-108-the-dependence-and-neighborhood-assumptions">2. The dependence and neighborhood assumptions</h3>
<p>The paper uses {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}-dependence. For vertex sets {% raw %}<span class="math inline">\(H,H&#x27;\)</span>{% endraw %} of sizes {% raw %}<span class="math inline">\(h,h&#x27;\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(G_H=(g_i)_{i\in H}\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(d_n(H,H&#x27;)\)</span>{% endraw %} be their minimum distance. There are a constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %} and uniformly bounded coefficients {% raw %}<span class="math inline">\(\psi_n(s)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\psi_n(0)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sup_n\psi_n(s)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(s\to\infty\)</span>{% endraw %}, such that</p>

{% raw %}<div class="math display">\[
|\operatorname{Cov}(f(G_H),f&#x27;(G_{H&#x27;}))|
\leq Chh&#x27;(\|f\|_\infty+\operatorname{Lip}(f))
(\|f&#x27;\|_\infty+\operatorname{Lip}(f&#x27;))\psi_n(s)
\]</div>{% endraw %}
<p>whenever {% raw %}<span class="math inline">\(d_n(H,H&#x27;)\geq s&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f,f&#x27;\)</span>{% endraw %} are bounded Lipschitz functions. This is a restriction on dependence between collections of observations, not just pairwise covariances.</p>

<p>Define the ball and shell</p>

{% raw %}<div class="math display">\[
N_n(i,s)=\{j:d_n(i,j)\leq s\},\qquad
N_n^\partial(i,s)=\{j:d_n(i,j)=s\},
\]</div>{% endraw %}
<p>and the graph quantities</p>

{% raw %}<div class="math display">\[
\delta_n^\partial(s;k)=\frac1n\sum_i|N_n^\partial(i,s)|^k,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\Delta_n(s,m;k)=\frac1n\sum_i
\max_{j\in N_n^\partial(i,s)}
|N_n(i,m)\setminus N_n(j,s-1)|^k,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
c_n(s,m;k)=\inf_{a&gt;1}
\Delta_n(s,m;ka)^{1/a}
\delta_n^\partial\left(s;\frac a{a-1}\right)^{1-1/a}.
\]</div>{% endraw %}
<p>Take a maximum over an empty shell to be zero and {% raw %}<span class="math inline">\(N_n(j,-1)=\varnothing\)</span>{% endraw %}. Leung’s Assumptions 2–3 require some {% raw %}<span class="math inline">\(p&gt;4\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_n\to\infty\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\sup_n\max_i\mathbb{E}\|g_i\|^p&lt;\infty,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
n^{-k/2}\sum_{s=0}^\infty c_n(s,m_n;k)
\psi_n(s)^{1-(2+k)/p}\longrightarrow0\quad(k=1,2),
\qquad
n^{3/2}\psi_n(m_n)^{1-1/p}\longrightarrow0.
\]</div>{% endraw %}
<p>These conditions compare the decay of dependence with the growth of neighborhoods. A network ball can grow exponentially in its radius, so a distance-decay condition alone is insufficient.</p>

<div id="network-cluster-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the cluster-size, covariance-limit, moment, and {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}-dependence assumptions above,</p>

{% raw %}<div class="math display">\[
S_n\xrightarrow{d}\mathcal{N}(0,\Gamma).
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> This is Proposition 2 of Leung, using the scalar network CLT of Kojevnikov, Marmer, and Song. That CLT is the probability result imported here; the displayed neighborhood and dependence conditions are its hypotheses in the paper.</p>

<p>For completeness, the passage to the cluster vector is as follows. For fixed vectors {% raw %}<span class="math inline">\(a_1,\ldots,a_L\)</span>{% endraw %}, assign each vertex in {% raw %}<span class="math inline">\(C_\ell\)</span>{% endraw %} the scalar moment {% raw %}<span class="math inline">\(a_\ell^\top g_i\)</span>{% endraw %}. There are finitely many bounded coefficients, so the moment and dependence bounds remain valid up to constants. The variance of the normalized scalar sum converges to {% raw %}<span class="math inline">\(a^\top\Gamma a\)</span>{% endraw %}. If this limit is positive, the scalar CLT applies. If it is zero, the sum converges to zero in mean square. The Cramér–Wold theorem gives the joint limit, including its possibly degenerate coordinates.</p>

</div>
<p>Joint Gaussianity does not yet give independence. The remaining question is whether {% raw %}<span class="math inline">\(\Gamma_{\ell m}=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\ell\ne m\)</span>{% endraw %}.</p>

<div id="12-108-conductance-measures-the-boundary">

</div>
<div id="12-108-a-concrete-boundary-calculation">

</div>
<div id="12-108-why-average-degree-appears-with-conductance">

</div>
<div id="12-108-why-zero-limiting-covariance-is-enough-only-after-the-clt">

</div>
<h3 data-note-section="3" id="12-108-conductance-and-the-covariance-between-clusters">3. Conductance and the covariance between clusters</h3>
<p>For a vertex set {% raw %}<span class="math inline">\(C\)</span>{% endraw %} with positive volume, define</p>

{% raw %}<div class="math display">\[
\operatorname{cut}(C)=\sum_{i\in C,j\notin C}A_{ij},\qquad
\operatorname{vol}(C)=\sum_{i\in C,j}A_{ij},\qquad
\phi(C)=\frac{\operatorname{cut}(C)}{\operatorname{vol}(C)}.
\]</div>{% endraw %}
<p>Each crossing edge is counted once in the cut. Internal edges contribute twice to the volume. Write {% raw %}<span class="math inline">\(\delta_n=n^{-1}\sum_{i,j}A_{ij}\)</span>{% endraw %} for average degree, and define</p>

{% raw %}<div class="math display">\[
a_n=\delta_n\max_{1\leq\ell\leq L}\phi(C_\ell),\qquad
M_n(s,k)=\frac1n\sum_i|N_n(i,s)|^k.
\]</div>{% endraw %}
<div id="conductance-sufficiency" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. In addition to the joint-limit assumptions, suppose {% raw %}<span class="math inline">\(a_n\to0\)</span>{% endraw %} and, for some {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_{s=1}^n s\,M_n(s,2(1+\epsilon))^{1/(1+\epsilon)}
\psi_n(s)^{1-2/p}=O(1).
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\Gamma_{\ell m}=0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(\ell\ne m\)</span>{% endraw %}. Consequently, the nondegenerate cluster blocks in the joint Gaussian limit are independent.</p>

</div>
<div class="proof">
<p><em>Proof.</em> First, the dependence and moment assumptions imply the coordinatewise covariance bound</p>

{% raw %}<div class="math display">\[
\|\operatorname{Cov}(g_i,g_j)\|_{\max}
\leq C_1\psi_n(d_n(i,j))^{1-2/p}.
\]</div>{% endraw %}
<p>One way to obtain the exponent is to clip each scalar coordinate at magnitude {% raw %}<span class="math inline">\(T\geq1\)</span>{% endraw %}. The clipped covariance is at most a constant times {% raw %}<span class="math inline">\(T^2\psi_n(s)\)</span>{% endraw %} because clipping is Lipschitz. Hölder’s inequality and the uniform {% raw %}<span class="math inline">\(p\)</span>{% endraw %}th moments bound the difference from the original covariance by a constant times {% raw %}<span class="math inline">\(T^{-(p-2)}\)</span>{% endraw %}. Choosing {% raw %}<span class="math inline">\(T=\psi_n(s)^{-1/p}\)</span>{% endraw %} when {% raw %}<span class="math inline">\(0&lt;\psi_n(s)\leq1\)</span>{% endraw %} gives the display. Zero coefficients follow by taking {% raw %}<span class="math inline">\(T\to\infty\)</span>{% endraw %}, and larger bounded coefficients are absorbed into the constant. Vertices in distinct connected components have zero covariance by letting {% raw %}<span class="math inline">\(s\to\infty\)</span>{% endraw %}.</p>

<p>Let {% raw %}<span class="math inline">\(B(C_\ell)=\{k\in C_\ell:A_{kj}=1\text{ for some }j\notin C_\ell\}\)</span>{% endraw %} be the boundary vertices. If {% raw %}<span class="math inline">\(i\in C_\ell\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j\in C_m\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(d_n(i,j)=s\)</span>{% endraw %}, a shortest path crosses a boundary vertex {% raw %}<span class="math inline">\(k\)</span>{% endraw %} of {% raw %}<span class="math inline">\(C_\ell\)</span>{% endraw %}. For some {% raw %}<span class="math inline">\(d\in\{0,\ldots,s-1\}\)</span>{% endraw %}, its distances to the endpoints are {% raw %}<span class="math inline">\(d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s-d\)</span>{% endraw %}. Therefore the number {% raw %}<span class="math inline">\(Q_s\)</span>{% endraw %} of such ordered pairs satisfies</p>

{% raw %}<div class="math display">\[
\frac{Q_s}{n}
\leq\sum_{d=0}^{s-1}\frac1n\sum_{k=1}^n
\mathbf1\{k\in B(C_\ell)\}|N_n(k,d)|\,|N_n(k,s-d)|.
\]</div>{% endraw %}
<p>Hölder’s inequality, followed by inclusion of both balls in {% raw %}<span class="math inline">\(N_n(k,s)\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[
\frac{Q_s}{n}
\leq s\,M_n(s,2(1+\epsilon))^{1/(1+\epsilon)}
\left(\frac{|B(C_\ell)|}{n}\right)^{\epsilon/(1+\epsilon)}.
\]</div>{% endraw %}
<p>Every boundary vertex has a crossing edge, so</p>

{% raw %}<div class="math display">\[
\frac{|B(C_\ell)|}{n}
\leq\frac{\operatorname{cut}(C_\ell)}n
=\phi(C_\ell)\frac{\operatorname{vol}(C_\ell)}n
\leq a_n.
\]</div>{% endraw %}
<p>Expanding the covariance of the two sums and grouping pairs by distance now yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\|\operatorname{Cov}(S_{n,\ell},S_{n,m})\|_{\max}
&amp;\leq C_1\sum_{s=1}^n\psi_n(s)^{1-2/p}\frac{Q_s}{n}\\
&amp;\leq C_1 a_n^{\epsilon/(1+\epsilon)}
\sum_{s=1}^n s\,M_n(s,2(1+\epsilon))^{1/(1+\epsilon)}
\psi_n(s)^{1-2/p}\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>The limit is {% raw %}<span class="math inline">\(\Gamma_{\ell m}\)</span>{% endraw %}, so the off-diagonal blocks vanish. Gaussian blocks with zero cross-covariance are independent.</p>

</div>
<p>The proof controls all path lengths. Low conductance limits the number of pairs whose connecting paths cross a boundary; the summability condition controls their accumulated dependence as neighborhoods grow. The number of crossing edges may itself diverge, provided the stated normalized bound tends to zero.</p>

<div id="12-108-two-graph-sequences-with-different-implications">

</div>
<h3 data-note-section="4" id="12-108-why-conductance-cannot-be-dropped-from-a-general-guarantee">4. Why conductance cannot be dropped from a general guarantee</h3>
<p>Leung’s necessity result is an existence statement. It does not say every process on a high-conductance partition produces correlated cluster sums; independent outcomes would not. It says that the other assumptions allow processes for which substantial boundaries preserve cross-cluster covariance.</p>

<p>Here is an explicit realization of the covariance construction in the paper’s proof. On a graph with maximum degree at most a constant {% raw %}<span class="math inline">\(D\)</span>{% endraw %}, assign independent, centered, variance-one, bounded shocks {% raw %}<span class="math inline">\(\eta_i\)</span>{% endraw %} to vertices and {% raw %}<span class="math inline">\(\xi_e\)</span>{% endraw %} to undirected edges. Set</p>

{% raw %}<div class="math display">\[
g_i=\eta_i+\sum_{e\ni i}\xi_e.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(g_i)=1+d_i,\qquad
\operatorname{Cov}(g_i,g_j)=A_{ij}\quad(i\ne j).
\]</div>{% endraw %}
<p>Separated vertex sets with no edge between them use disjoint shocks and are independent. Thus the process has bounded moments and dependence range one. The neighborhood conditions hold: choose {% raw %}<span class="math inline">\(m_n\to\infty\)</span>{% endraw %} slowly enough that bounded-degree balls of radius {% raw %}<span class="math inline">\(m_n\)</span>{% endraw %} have size {% raw %}<span class="math inline">\(n^{o(1)}\)</span>{% endraw %}; only shells {% raw %}<span class="math inline">\(s=0,1\)</span>{% endraw %} have nonzero dependence coefficients. The normalized variances are bounded above, and the independent vertex shocks bound them below. Covariance limits can be obtained along a subsequence.</p>

<p>For disjoint clusters,</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(S_{n,\ell},S_{n,m})
=\frac1n\sum_{i\in C_\ell,j\in C_m}A_{ij}.
\]</div>{% endraw %}
<p>Suppose all cluster shares are bounded below and all cluster average degrees are bounded away from zero. If {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %} fails to converge to zero, bounded average degree implies that along a subsequence some fixed cluster has conductance bounded away from zero. Its volume is of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, hence so is its cut. There are only {% raw %}<span class="math inline">\(L-1\)</span>{% endraw %} other clusters, so after taking another subsequence a fixed pair has order-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} crossing edges. The last covariance is then bounded away from zero. This construction supplies the failure of asymptotic independence asserted by the necessity result.</p>

<div id="12-108-can-suitable-clusters-exist">

</div>
<div id="12-108-the-spectral-calculation-behind-a-graph-cut">

</div>
<h3 data-note-section="5" id="12-108-the-laplacian-and-the-existence-of-suitable-partitions">5. The Laplacian and the existence of suitable partitions</h3>
<p>For positive vertex degrees, let {% raw %}<span class="math inline">\(D\)</span>{% endraw %} be the diagonal degree matrix and</p>

{% raw %}<div class="math display">\[
\mathcal L=I-D^{-1/2}AD^{-1/2}.
\]</div>{% endraw %}
<p>Isolated vertices can be handled separately. The identity</p>

{% raw %}<div class="math display">\[
x^\top\mathcal Lx
=\frac12\sum_{i,j}A_{ij}
\left(\frac{x_i}{\sqrt{d_i}}-\frac{x_j}{\sqrt{d_j}}\right)^2
\]</div>{% endraw %}
<p>follows by expanding the square and summing degrees. With {% raw %}<span class="math inline">\(x=D^{1/2}\mathbf1_C\)</span>{% endraw %}, it gives</p>

{% raw %}<div class="math display">\[
\frac{x^\top\mathcal Lx}{x^\top x}
=\frac{\operatorname{cut}(C)}{\operatorname{vol}(C)}=\phi(C).
\]</div>{% endraw %}
<p>This connects low conductance to vectors with small Laplacian energy. Let {% raw %}<span class="math inline">\(0\leq\lambda_1\leq\cdots\leq\lambda_n\)</span>{% endraw %} be the eigenvalues and define the partition constant</p>

{% raw %}<div class="math display">\[
h_L(A)=\min_{\{C_1,\ldots,C_L\}\text{ partition}}
\max_\ell\phi(C_\ell).
\]</div>{% endraw %}
<p>The higher-order Cheeger inequality used in Leung’s Proposition 1 gives, for a universal constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{\lambda_L}{2}\leq h_L(A)\leq C L^2\sqrt{\lambda_L}.
\]</div>{% endraw %}
<p>This spectral inequality is an external graph-theoretic result used by the paper. Its consequence here is immediate: for fixed {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h_L(A_n)\to0\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(\lambda_L(A_n)\to0\)</span>{% endraw %}. If average degree is uniformly bounded, a sequence of partitions attaining vanishing {% raw %}<span class="math inline">\(h_L\)</span>{% endraw %} also satisfies {% raw %}<span class="math inline">\(a_n\to0\)</span>{% endraw %}.</p>

<p>The spectral result does not impose a lower bound on cluster sizes. Small eigenvalues can reflect tiny separated sets, while useful inference may require several clusters containing substantial fractions of the observations. After spectral clustering, one therefore checks the actual conductances and cluster sizes as well as the stochastic assumptions above. For a <a href="{% post_url 2023-10-08-wild-cluster-bootstrap-with-few-large-clusters %}">few-cluster randomization test</a>, the independent Gaussian limit supplies the required sign symmetry; the test’s remaining conditions still concern its statistic and parameter estimator.</p>

<p>When the graph cannot supply substantial low-conductance clusters, the <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">notes on dependence and resampling</a> discuss inference that does not begin by imposing such a partition.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-leung_network_2023" class="csl-entry" role="listitem">
Leung, Michael P. 2023. <span>“Network Cluster‐Robust Inference.”</span> <em>Econometrica</em> 91 (2): 641–67. <a href="https://doi.org/10.3982/ECTA19816">https://doi.org/10.3982/ECTA19816</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-05-21-when-to-cluster %}">When to Cluster</a></p></nav>

</div>
