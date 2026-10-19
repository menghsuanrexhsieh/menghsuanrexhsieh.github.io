---
layout: "post"
title: "Ordering-Free Dependence and Resampling"
date: "2024-08-15"
tags: ["econometrics", "networks"]
excerpt: "When the ordering of dependence is unknown, a block bootstrap may be impossible to implement: there is no reliable way to choose blocks that preserve the dependence."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/08/15/ordering-free-inference-for-weakly-dependent-data/", "/2024/09/01/ordering-free-local-dependence/"]
---

<div class="note-content" markdown="0">

<p>A block bootstrap needs to know which observations belong together. If dependence has no observed ordering, that choice may be unavailable. <span class="citation" data-cites="song_ordering-free_2018">(<a href="#ref-song_ordering-free_2018" role="doc-biblioref">Song 2018</a>)</span> instead draws small random subsets and builds a statistic whose randomization law can be controlled when dependence is weak on average.</p>

<h3 data-note-section="1" id="10-235-measure-how-often-dependence-matters">1. Measure how often dependence matters</h3>
<p>The dependence coefficients average over index sets, so relabeling observations changes none of them. This allows assumptions about the frequency of dependence without locating each dependent pair. A time-series mixing coefficient uses different information: separation in a known temporal order.</p>

<p>Write {% raw %}<span class="math inline">\(X_1,\ldots,X_n\in\mathbb R^p\)</span>{% endraw %}, suppressing the triangular-array subscript. Start with the case without a common shock. For disjoint nonempty sets {% raw %}<span class="math inline">\(A_1,A_2\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
c_n(A_1,A_2)\triangleq
\sup_{f\in\mathcal F_{|A_1|},\,g\in\mathcal F_{|A_2|}}
\left|\operatorname{Corr}(f(X_{A_1}),g(X_{A_2}))\right|.
\]</div>{% endraw %}
<p>The function classes specify which forms of dependence matter. Take them to be invariant under permutations of their arguments, with square-integrable evaluations; a zero-variance correlation is assigned value zero. The paper uses coordinate monomials up to a fixed degree for its moment arguments.</p>

<p>Let {% raw %}<span class="math inline">\(\mathcal P(A)\)</span>{% endraw %} denote the partitions of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} into two nonempty sets. For {% raw %}<span class="math inline">\(|A|\ge2\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[
c_n(A)\triangleq\min_{\{A_1,A_2\}\in\mathcal P(A)}c_n(A_1,A_2),
\qquad
\lambda_n(k)\triangleq\binom nk^{-1}\sum_{|A|=k}c_n(A).
\]</div>{% endraw %}
<p>The minimum asks whether there is at least one independent split of the selected set. Such a split makes {% raw %}<span class="math inline">\(c_n(A)=0\)</span>{% endraw %}, even if some observations within {% raw %}<span class="math inline">\(A\)</span>{% endraw %} are dependent. It does not compare the set with its complement in the sample. The singleton convention is {% raw %}<span class="math inline">\(c_n(A)=1\)</span>{% endraw %}, so decay assertions begin at {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}.</p>

<p>To recover the permutation definition, each {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-element set appears as the first {% raw %}<span class="math inline">\(k\)</span>{% endraw %} entries of exactly {% raw %}<span class="math inline">\(k!(n-k)!\)</span>{% endraw %} permutations. Thus</p>

{% raw %}<div class="math display">\[
\frac1{n!}\sum_\pi c_n(\{\pi(1),\ldots,\pi(k)\})
=\frac{k!(n-k)!}{n!}\sum_{|A|=k}c_n(A)
=\lambda_n(k).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(Y_i=X_{\sigma(i)}\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(c_n^Y(A)=c_n^X(\sigma(A))\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(A\mapsto\sigma(A)\)</span>{% endraw %} is a bijection on the {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-element sets, the last average is unchanged. This is the precise sense in which the coefficient is ordering-free.</p>

<p>The conditional version replaces correlations by correlations given {% raw %}<span class="math inline">\(\mathcal C_n\)</span>{% endraw %}. Its mean-inference setup also requires {% raw %}<span class="math inline">\(\mathbb{E}[X_i\mid\mathcal C_n]=\mu_0\)</span>{% endraw %}: a common shock cannot shift the mean being tested arbitrarily.</p>

<div id="ordering-free-graph" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %} is a dependency graph: whenever two disjoint vertex sets have no edges between them, their observation vectors are independent. If its maximum degree is {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %}, then for each fixed {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %} and sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\lambda_n(k)\le C_k n^{-(k-1)}d_n^{k-1}.
\]</div>{% endraw %}
<p>The constant {% raw %}<span class="math inline">\(C_k\)</span>{% endraw %} depends only on {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The same bound holds almost surely for the conditional coefficient when the graph is a conditional dependency graph.</p>

</div>
<h3 data-note-section="2" id="10-235-count-connected-sets-correctly">2. Count connected sets correctly</h3>
<p>If {% raw %}<span class="math inline">\(G_n[A]\)</span>{% endraw %} is disconnected, its components give a partition without crossing edges. Independence across that partition implies {% raw %}<span class="math inline">\(c_n(A)=0\)</span>{% endraw %}. On connected sets, the absolute correlation bound of one gives</p>

{% raw %}<div class="math display">\[
0\le c_n(A)\le\mathbf1\{G_n[A]\text{ is connected}\}.
\]</div>{% endraw %}
<p>The selected vertices need only induce a connected subgraph; they need not form an entire connected component of {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}.</p>

<p>Now count growth orders of distinct vertices. There are {% raw %}<span class="math inline">\(n\)</span>{% endraw %} choices for the root. Once {% raw %}<span class="math inline">\(j\)</span>{% endraw %} vertices have been selected, the next vertex must be adjacent to at least one of them. There are at most {% raw %}<span class="math inline">\(jd_n\)</span>{% endraw %} choices, even before excluding repeated vertices. Therefore</p>

{% raw %}<div class="math display">\[
\#\{\text{growth orders of length }k\}
\le n\prod_{j=1}^{k-1}(jd_n)
=n(k-1)!d_n^{k-1}.
\]</div>{% endraw %}
<p>Every connected set has at least one such order: root a spanning tree and list parents before children. A connected set has {% raw %}<span class="math inline">\(k!\)</span>{% endraw %} arbitrary orderings, so the number of ordered distinct tuples inducing a connected graph is at most {% raw %}<span class="math inline">\(k!\)</span>{% endraw %} times the growth-order count. If {% raw %}<span class="math inline">\((n)_k\triangleq n(n-1)\cdots(n-k+1)\)</span>{% endraw %}, it follows that</p>

{% raw %}<div class="math display">\[
\lambda_n(k)
\le\frac{k!(k-1)!n d_n^{k-1}}{(n)_k}
=\frac{k!(k-1)!d_n^{k-1}}{(n-1)\cdots(n-k+1)}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(n\ge2k\)</span>{% endraw %}, every denominator factor is at least {% raw %}<span class="math inline">\(n/2\)</span>{% endraw %}, proving the proposition with {% raw %}<span class="math inline">\(C_k=2^{k-1}k!(k-1)!\)</span>{% endraw %}. The constant is loose; the exponent of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is what is needed.</p>

<p>A connected set need not have a path visiting all its vertices. At each stage the new vertex may attach to any earlier vertex; this includes stars and is why the spanning-tree count covers all connected sets.</p>

<p>For {% raw %}<span class="math inline">\(k=2\)</span>{% endraw %}, count edges directly to obtain the sharper bound</p>

{% raw %}<div class="math display">\[
\lambda_n(2)\le\frac{2|E_n|}{n(n-1)}\le\frac{d_n}{n-1}.
\]</div>{% endraw %}
<p>Lemma 2.2 of the paper gives the analogous {% raw %}<span class="math inline">\(n^{-(k-1)}\)</span>{% endraw %} rate for separated random fields under its spatial summability conditions. That result requires a spatial argument in addition to the graph calculation above.</p>

<h3 data-note-section="3" id="10-235-two-calculations-with-random-subsets">3. Two calculations with random subsets</h3>
<p>First consider independent clusters of sizes {% raw %}<span class="math inline">\(m_1,\ldots,m_G\)</span>{% endraw %}. A set meeting two clusters can be split across clusters, so</p>

{% raw %}<div class="math display">\[
\lambda_n(k)\le\frac{\sum_{g=1}^G(m_g)_k}{(n)_k},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\((m)_k=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(m&lt;k\)</span>{% endraw %}. This is an equality in the scalar model {% raw %}<span class="math inline">\(X_i=Z_g\)</span>{% endraw %} for every unit in cluster {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, with independent, nondegenerate, square-integrable {% raw %}<span class="math inline">\(Z_g\)</span>{% endraw %} and function classes containing coordinate projections. Within one cluster, every partition has correlation one; across clusters there is an independent split.</p>

<p>For equal cluster size {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the first two coefficients are therefore</p>

{% raw %}<div class="math display">\[
\lambda_n(2)=\frac{m-1}{n-1},
\qquad
\lambda_n(3)=\frac{(m-1)(m-2)}{(n-1)(n-2)}.
\]</div>{% endraw %}
<p>Bounded clusters give the displayed graph rate. With a fixed number of equal clusters, the coefficients instead approach {% raw %}<span class="math inline">\(G^{1-k}\)</span>{% endraw %}. Adding copies within those clusters increases the sample size without reducing the average dependence in the required way.</p>

<p>Second, let {% raw %}<span class="math inline">\(I_1,\ldots,I_b\)</span>{% endraw %} be a uniform draw of distinct indices. Count the graph edges in this subsample:</p>

{% raw %}<div class="math display">\[
N_E\triangleq\sum_{1\le j&lt;\ell\le b}
\mathbf1\{I_jI_\ell\in E_n\}.
\]</div>{% endraw %}
<p>Each pair is uniform over distinct population indices, giving</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\pi N_E
=\binom b2\frac{2|E_n|}{n(n-1)},
\qquad
\Pr_\pi(N_E\ge1)\le\frac{b(b-1)d_n}{2(n-1)}.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(b^2d_n/n\to0\)</span>{% endraw %} suffices for the selected graph to be edgeless with probability tending to one. For any fixed edgeless index set, the observations are mutually independent by the dependency-graph assumption. This calculation makes the small-subsample intuition concrete; the full inference theorem need not require every subsample to be edgeless.</p>

<h3 data-note-section="4" id="10-235-conditional-mean-and-variance-of-the-mean-statistic">4. Conditional mean and variance of the mean statistic</h3>
<p>Assume {% raw %}<span class="math inline">\(n&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1\le b&lt;n\)</span>{% endraw %}, and the sample covariance is nonsingular. Let {% raw %}<span class="math inline">\(\overline X=n^{-1}\sum_iX_i\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[
\widehat\Sigma\triangleq\frac1n\sum_{i=1}^n(X_i-\overline X)(X_i-\overline X)&#x27;,
\quad Z_i\triangleq\widehat\Sigma^{-1/2}(X_i-\overline X),
\quad a\triangleq\widehat\Sigma^{-1/2}(\overline X-\mu).
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is the candidate mean, and the inverse square root is symmetric. By construction,</p>

{% raw %}<div class="math display">\[
\sum_iZ_i=0,\qquad\frac1n\sum_iZ_iZ_i&#x27;=I_p.
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(\mathbb{E}_\pi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}_\pi\)</span>{% endraw %} for expectation and variance over the random indices conditional on the entire observed sample. For two distinct sampled positions,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}_\pi[Z_{I_1}Z_{I_2}&#x27;]
&amp;=\frac1{n(n-1)}\sum_{i\ne j}Z_iZ_j&#x27;\\
&amp;=\frac{(\sum_iZ_i)(\sum_iZ_i)&#x27;-\sum_iZ_iZ_i&#x27;}{n(n-1)}
=-\frac{I_p}{n-1}.
\end{aligned}
\]</div>{% endraw %}
<p>Sampling without replacement explains the negative conditional covariance. This identity holds for the fixed observed array and says nothing about the sign of covariance in the original sampling process.</p>

<p>For an independently drawn permutation {% raw %}<span class="math inline">\(\pi_r\)</span>{% endraw %}, the paper’s mean contribution is</p>

{% raw %}<div class="math display">\[
M_r(\mu)\triangleq\frac1{\sqrt{pb}}\sum_{j=1}^b(Z_{\pi_r(j)}+a).
\]</div>{% endraw %}
<p>Its conditional moments follow by counting the {% raw %}<span class="math inline">\(b\)</span>{% endraw %} diagonal terms and {% raw %}<span class="math inline">\(b(b-1)\)</span>{% endraw %} off-diagonal terms:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}_\pi M_r(\mu)&amp;=\sqrt{b/p}\,a,\\
\operatorname{Var}_\pi M_r(\mu)
&amp;=\frac1{pb}\left[bI_p-b(b-1)\frac{I_p}{n-1}\right]
=\frac{n-b}{p(n-1)}I_p.
\end{aligned}
\]</div>{% endraw %}
<p>These are finite-population identities conditional on the data. Dependence assumptions enter later, when controlling how far the observed sample mean is from the null mean.</p>

<h3 data-note-section="5" id="10-235-from-conditional-randomization-to-a-limit-theorem">5. From conditional randomization to a limit theorem</h3>
<p>For {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent permutations, set</p>

{% raw %}<div class="math display">\[
W_n\triangleq\frac1{\sqrt R}\sum_{r=1}^R
(M_r(\mu)-\mathbb{E}_\pi M_r(\mu)).
\]</div>{% endraw %}
<p>Then the squared-mean statistic has the exact decomposition</p>

{% raw %}<div class="math display">\[
S_M(\mu)\triangleq\left\|\frac1{\sqrt R}\sum_{r=1}^RM_r(\mu)\right\|^2
=\left\|W_n+\sqrt{Rb/p}\,a\right\|^2.
\]</div>{% endraw %}
<p>The two terms have different sources of randomness. Conditional on the data, {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} fluctuates across repeated subsampling, while {% raw %}<span class="math inline">\(a\)</span>{% endraw %} is fixed. To see the conditional CLT directly, let {% raw %}<span class="math inline">\(\widetilde M_r=M_r-\mathbb{E}_\pi M_r\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_n=(n-b)I_p/[p(n-1)]\)</span>{% endraw %}. A third-order Taylor bound gives, for fixed {% raw %}<span class="math inline">\(t\in\mathbb R^p\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\pi e^{it&#x27;\widetilde M_r/\sqrt R}
=1-\frac{t&#x27;V_nt}{2R}
+O\!\left(\frac{\|t\|^3\mathbb{E}_\pi\|\widetilde M_r\|^3}{R^{3/2}}\right).
\]</div>{% endraw %}
<p>Raise this expression to the {% raw %}<span class="math inline">\(R\)</span>{% endraw %}th power, using conditional independence. If {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b/n\to0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb{E}_\pi\|\widetilde M_r\|^3/\sqrt R\to_p0\)</span>{% endraw %}, the conditional characteristic function approaches {% raw %}<span class="math inline">\(\exp(-\|t\|^2/(2p))\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} has the conditional Gaussian limit {% raw %}<span class="math inline">\(\mathcal{N}(0,I_p/p)\)</span>{% endraw %}.</p>

<p>It remains to control the drift. Under the null, suppose {% raw %}<span class="math inline">\(\mathbb{E}X_i=\mu_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\max_i\mathbb{E}\|X_i-\mu_0\|^2\le C\)</span>{% endraw %}. A dependency graph leaves at most {% raw %}<span class="math inline">\(nd_n\)</span>{% endraw %} ordered off-diagonal covariance terms. Cauchy–Schwarz then gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}\|\overline X-\mu_0\|^2
&amp;=\frac1{n^2}\sum_{i,j}\mathbb{E}[(X_i-\mu_0)&#x27;(X_j-\mu_0)]\\
&amp;\le\frac{C n+Cnd_n}{n^2}
=\frac{C(1+d_n)}n.
\end{aligned}
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|\widehat\Sigma^{-1}\|=O_p(1)\)</span>{% endraw %}, Markov’s inequality implies</p>

{% raw %}<div class="math display">\[
\|a\|^2=O_p\!\left(\frac{1+d_n}{n}\right),
\qquad
\left\|\sqrt{Rb/p}\,a\right\|^2
=O_p\!\left(\frac{Rb(1+d_n)}n\right).
\]</div>{% endraw %}
<div id="ordering-free-mean-limit" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. For fixed {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, under the moment, covariance, and conditional-CLT premises just stated, {% raw %}<span class="math inline">\(Rb(1+d_n)/n\to0\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
T_M(\mu_0)\triangleq S_M(\mu_0)-\frac{Rb}{n}
\ \Rightarrow\ \frac{\chi_p^2}{p}.
\]</div>{% endraw %}
</div>
<p>Indeed, the drift is {% raw %}<span class="math inline">\(o_p(1)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Rb/n\to0\)</span>{% endraw %} also makes the displayed adjustment negligible. Apply the conditional CLT and the continuous mapping theorem to the squared norm. The higher-order dependence conditions in the <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">size and power analysis</a> supply primitive ways to verify the moment premises; conditional independence of the permutations alone would not prove them.</p>

<p>For example, with bounded {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b_n=\lfloor n^{1/4}\rfloor\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_n=\lfloor n^{1/2}\rfloor\)</span>{% endraw %} give {% raw %}<span class="math inline">\(R_nb_n/n\asymp n^{-1/4}\)</span>{% endraw %}. The graph bounds also give {% raw %}<span class="math inline">\(b_n^k\lambda_n(k)=O(n^{1-3k/4})\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}. These choices satisfy the dependence-rate restrictions; the data still need the moment and covariance assumptions.</p>

<p>The conditional moments also show what is learned by increasing {% raw %}<span class="math inline">\(R\)</span>{% endraw %} while holding the data fixed. Write {% raw %}<span class="math inline">\(c_{n,b}=(n-b)/(n-1)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(S_M(\mu)=\|R^{-1/2}\sum_rM_r(\mu)\|^2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\pi S_M(\mu)
=\operatorname{tr}(\operatorname{Var}_\pi W_n)
+\left\|\sqrt{Rb/p}\,a\right\|^2
=c_{n,b}+\frac{Rb}{p}\|a\|^2.
\]</div>{% endraw %}
<p>The normalization keeps the randomization fluctuation at order one, so the first term stays fixed as repetitions increase. The second term grows with {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. Under a conditional Gaussian approximation,</p>

{% raw %}<div class="math display">\[
S_M(\mu)\ \approx\ \frac{c_{n,b}}p\,
\chi_p^2\left(\frac{Rb\|a\|^2}{c_{n,b}}\right),
\]</div>{% endraw %}
<p>where the argument is the noncentrality parameter. This is a conditional approximation for the given sample, not a finite-sample chi-square identity. It makes the drift visible even under a true null: {% raw %}<span class="math inline">\(a\)</span>{% endraw %} contains the sample mean’s estimation error, which usually is not exactly zero.</p>

<p>For scalar data consisting of {% raw %}<span class="math inline">\(G\)</span>{% endraw %} independent clusters of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} identical copies of a variance-one shock, {% raw %}<span class="math inline">\(n=Gh\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(\overline X)=1/G=h/n\)</span>{% endraw %}. Using the population standardizer in this illustration, the mean drift has squared size of order {% raw %}<span class="math inline">\(Rb/G\)</span>{% endraw %}. Thus the relevant restriction becomes {% raw %}<span class="math inline">\(Rb/G\to0\)</span>{% endraw %}. Doubling the number of copied observations per cluster while holding {% raw %}<span class="math inline">\(G\)</span>{% endraw %} fixed does not help satisfy it. The average-dependence coefficient {% raw %}<span class="math inline">\((h-1)/(n-1)\)</span>{% endraw %} records precisely this lack of new information.</p>

<p>Randomization removes the need to identify where dependent pairs occur. Their overall frequency still determines the sample mean’s error and thus how many repetitions the statistic can tolerate.</p>

<h3 data-note-section="6" id="10-235-the-quadratic-term-and-the-bias-adjustments">6. The quadratic term and the bias adjustments</h3>
<p>The off-diagonal statistic makes the same drift appear quadratically. For {% raw %}<span class="math inline">\(b\ge2\)</span>{% endraw %}, use the raw contribution</p>

{% raw %}<div class="math display">\[
U_r(\mu)\triangleq\frac1{pb}\sum_{\substack{1\le j,\ell\le b\\j\ne\ell}}
(Z_{\pi_r(j)}+a)&#x27;(Z_{\pi_r(\ell)}+a),
\qquad S_U(\mu)\triangleq\frac1{\sqrt R}\sum_rU_r(\mu).
\]</div>{% endraw %}
<p>There are {% raw %}<span class="math inline">\(b(b-1)\)</span>{% endraw %} ordered pairs. The preceding covariance identity gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\pi U_r(\mu)
=(b-1)\left(\frac{\|a\|^2}{p}-\frac1{n-1}\right).
\]</div>{% endraw %}
<p>In particular, even {% raw %}<span class="math inline">\(U_r(\overline X)\)</span>{% endraw %} has conditional mean {% raw %}<span class="math inline">\(-(b-1)/(n-1)\)</span>{% endraw %}. Removing diagonal products does not make the raw statistic conditionally centered.</p>

<p>More information comes from comparing the two centerings using the same permutations. Expanding each product, every selected {% raw %}<span class="math inline">\(Z_{\pi_r(j)}\)</span>{% endraw %} appears {% raw %}<span class="math inline">\(b-1\)</span>{% endraw %} times in each cross-term, so</p>

{% raw %}<div class="math display">\[
U_r(\mu)-U_r(\overline X)
=\frac{2(b-1)}{pb}\,a&#x27;\sum_{j=1}^bZ_{\pi_r(j)}
+\frac{b-1}{p}\|a\|^2.
\]</div>{% endraw %}
<p>After summing over repetitions,</p>

{% raw %}<div class="math display">\[
S_U(\mu)-S_U(\overline X)
=\frac{2(b-1)}{\sqrt{pb}}a&#x27;W_n
+\frac{\sqrt R(b-1)}p\|a\|^2.
\]</div>{% endraw %}
<p>The linear term has conditional variance</p>

{% raw %}<div class="math display">\[
\frac{4(b-1)^2(n-b)}{p^2b(n-1)}\|a\|^2,
\]</div>{% endraw %}
<p>while the second term is a conditional drift. Under the null with bounded degree, these have orders {% raw %}<span class="math inline">\(O_p(b/n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O_p(\sqrt R\,b/n)\)</span>{% endraw %}, respectively. The second order is for the drift itself, not its variance. This explains why quadratic aggregation leads to a restriction involving {% raw %}<span class="math inline">\(Rb^2/n^2\)</span>{% endraw %}.</p>

<p>Finally, the paper subtracts {% raw %}<span class="math inline">\(Rb/n\)</span>{% endraw %} from {% raw %}<span class="math inline">\(S_M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt R(b-1)/n\)</span>{% endraw %} from {% raw %}<span class="math inline">\(S_U\)</span>{% endraw %}. To see the benchmark behind both corrections, temporarily use the population covariance {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} and independent observations with this covariance. Then</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\frac{\|\Sigma^{-1/2}(\overline X-\mu_0)\|^2}{p}\right]
=\frac1p\operatorname{tr}\left(\Sigma^{-1}\frac\Sigma n\right)
=\frac1n.
\]</div>{% endraw %}
<p>Substitution gives both benchmark adjustments. It averages over independent original observations with a population standardizer, rather than centering exactly conditional on the observed sample. Under dependence, the remaining cross-covariances must be bounded by the rate assumptions.</p>

<p>These identities concern the raw {% raw %}<span class="math inline">\(U\)</span>{% endraw %} statistic and its drift; a Gaussian limit additionally requires its variance normalization and higher-order moment control. The <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">simpler resampled mean and pair statistics</a> make a related tradeoff with a different subsampling construction.</p>

<h3 data-note-section="7" id="10-235-what-ordering-free-does-not-mean">7. What ordering-free does not mean</h3>
<p>The procedure therefore replaces knowledge of the dependence locations with a restriction on average dependence. An unrestricted common shock affecting most observations does not satisfy the information requirement merely because subsamples are drawn at random.</p>

<p>Repeated subsampling retains the same full-sample mean error. Its contribution grows with the repetition count, as the two decompositions show. Repetition can therefore improve detection of a false mean only within rates that keep this error negligible under the null.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-song_ordering-free_2018" class="csl-entry" role="listitem">
Song, Kyungchul. 2018. <span>“Ordering-Free Inference from Locally Dependent Data.”</span> arXiv. <a href="http://arxiv.org/abs/1604.00447">http://arxiv.org/abs/1604.00447</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">Exposure Mappings and Horvitz–Thompson</a> · Next: <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Resampled Statistics: Size and Local Power</a></p></nav>

</div>
