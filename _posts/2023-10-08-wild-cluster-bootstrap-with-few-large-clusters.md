---
layout: "post"
title: "Wild Cluster Bootstrap with Few Large Clusters"
date: "2023-10-08"
tags: ["econometrics", "dependence"]
excerpt: "With a fixed number of clusters, increasing the number of observations inside each cluster does not justify a many-cluster normal approximation."
note_series: "Cluster and network inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Cluster Robust Inference and Network Dependence/stats.tex"
redirect_from: ["/2025/01/11/wild-cluster-bootstrap-with-few-large-clusters/"]
---

<div class="note-content" markdown="0">

<p>Suppose an experiment has only a few clusters, each containing many observations. More observations can improve the approximation to each cluster’s score, but do not create more independent clusters. The result of <span class="citation" data-cites="canay_wild_2021"><a href="#ref-canay_wild_2021" role="doc-biblioref">Canay, Santos, and Shaikh (2021)</a></span> uses the approximate sign symmetry of those few scores to construct a wild-bootstrap test.</p>

<h3 data-note-section="1" id="12-0-the-test-and-its-guarantee">1. The test and its guarantee</h3>
<p>Consider {% raw %}<span class="math inline">\(Y_{ij}=Z_{ij}&#x27;\beta+W_{ij}&#x27;\gamma+\varepsilon_{ij}\)</span>{% endraw %} in clusters {% raw %}<span class="math inline">\(j=1,\ldots,q\)</span>{% endraw %}, and test {% raw %}<span class="math inline">\(c&#x27;\beta=\lambda\)</span>{% endraw %}. Fit the restricted regression, obtaining fitted values and residuals {% raw %}<span class="math inline">\(\widehat\varepsilon^r_{ij}\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(g\in\{-1,1\}^q\)</span>{% endraw %}, form</p>

{% raw %}<div class="math display">\[
Y^*_{ij}(g)=Z_{ij}&#x27;\widehat\beta^r+W_{ij}&#x27;\widehat\gamma^r
+g_j\widehat\varepsilon^r_{ij}.
\]</div>{% endraw %}
<p>Refit and compare {% raw %}<span class="math inline">\(T_n=|\sqrt n(c&#x27;\widehat\beta-\lambda)|\)</span>{% endraw %} with the empirical {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} quantile of {% raw %}<span class="math inline">\(|\sqrt n c&#x27;(\widehat\beta^*(g)-\widehat\beta^r)|\)</span>{% endraw %} over all signs.</p>

<div id="few-cluster-signs" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s fixed-{% raw %}<span class="math inline">\(q\)</span>{% endraw %}, large-cluster conditions, the null rejection probability has limiting bounds</p>

{% raw %}<div class="math display">\[
\alpha-2^{-(q-1)}\le\liminf P(\text{reject})
\le\limsup P(\text{reject})\le\alpha.
\]</div>{% endraw %}
<p>These conditions include independent Gaussian limits for cluster scores, positive limiting cluster proportions, proportional residualized-regressor covariance matrices across clusters, and compatibility of pooled and cluster-specific nuisance projections. The paper also establishes power tending to one as the local-alternative parameter becomes large, subject to the sign-grid resolution condition.</p>

</div>
<h3 data-note-section="2" id="12-0-where-the-approximation-comes-from">2. Where the approximation comes from</h3>
<p>Partialling out {% raw %}<span class="math inline">\(W\)</span>{% endraw %} makes the leading estimation error a linear transformation of the cluster sums {% raw %}<span class="math inline">\(\sum_i\widetilde Z_{ij}\varepsilon_{ij}\)</span>{% endraw %}. Each large cluster supplies a Gaussian limit. Independence across clusters makes the joint limit invariant under changing any subset of their signs.</p>

<p>Under the null, changing the signs of restricted residuals must reproduce the signed-score experiment after the regression is refitted. The design restrictions establish this connection. Sign symmetry of an abstract score vector alone would not justify the regression procedure.</p>

<p>The procedure then ranks the observed statistic among its sign transformations. There are only {% raw %}<span class="math inline">\(2^q\)</span>{% endraw %} transformations. Because the statistic is absolute, {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-g\)</span>{% endraw %} give the same value, leaving at most {% raw %}<span class="math inline">\(2^{q-1}\)</span>{% endraw %} distinct ranks. That is the source of the discreteness term in the size bound.</p>

<h3 data-note-section="3" id="12-0-what-this-does-and-does-not-establish">3. What this does and does not establish</h3>
<p>The source of validity is symmetry of a finite limiting score vector. Large cluster sizes help establish that limit only under the within-cluster CLT and design assumptions. A different failure occurs when the number of clusters grows but extreme scores remain influential, as in the <a href="{% post_url 2024-04-17-heavy-tailed-cluster-inference-bootstrap-failure-and-score-subsampling %}">heavy-tailed cluster note</a>.</p>

<p>For network-based groups, independence of cluster scores is an additional mathematical question. The <a href="{% post_url 2024-03-04-network-cluster-robust-inference %}">conductance and network separation</a> conditions address whether the proposed boundaries separate enough dependence for the sign argument.</p>

<h3 data-note-section="4" id="12-0-the-score-experiment-in-a-scalar-example">4. The score experiment in a scalar example</h3>
<p>A model with only an intercept makes the mechanism visible. Let {% raw %}<span class="math inline">\(Y_{ij}=\beta+\varepsilon_{ij}\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(n_j/n\to\xi_j&gt;0\)</span>{% endraw %}, and suppose</p>

{% raw %}<div class="math display">\[
Z_{n,j}\triangleq n_j^{-1/2}\sum_{i=1}^{n_j}\varepsilon_{ij}
\Rightarrow Z_j\sim \mathcal{N}(0,\sigma_j^2)
\]</div>{% endraw %}
<p>jointly, with independent limits. The pooled estimator satisfies</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta-\beta)
=\sum_{j=1}^q\sqrt{n_j/n}\,Z_{n,j}
\Rightarrow\sum_{j=1}^q\sqrt{\xi_j}Z_j.
\]</div>{% endraw %}
<p>Under {% raw %}<span class="math inline">\(H_0:\beta=\beta_0\)</span>{% endraw %}, restricted residuals are {% raw %}<span class="math inline">\(Y_{ij}-\beta_0\)</span>{% endraw %}. Their cluster sign changes give</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta^*(g)-\beta_0)
=\sum_{j=1}^qg_j\sqrt{n_j/n}\,Z_{n,j}.
\]</div>{% endraw %}
<p>In this example the bootstrap and the desired signed-score experiment coincide exactly under the null. The Gaussian approximation is needed only to justify independent sign symmetry of the limits. Unequal {% raw %}<span class="math inline">\(\sigma_j^2\)</span>{% endraw %} do not spoil that symmetry: each centered Gaussian coordinate is symmetric separately.</p>

<p>Adding covariates changes the comparison. Estimated design matrices multiply the cluster scores, and restricted residuals include nuisance-estimation errors. The proportional-design and projection conditions make the resulting terms cancel in the tested direction. The intercept example has no such terms and therefore does not establish validity for arbitrary designs.</p>

<h3 data-note-section="5" id="12-0-why-independent-signs-give-a-randomization-test">5. Why independent signs give a randomization test</h3>
<p>For independent centered normal {% raw %}<span class="math inline">\(Z_j\)</span>{% endraw %} with positive variances, each sign is a fair coin conditional on the vector of magnitudes. Therefore, conditional on {% raw %}<span class="math inline">\((|Z_1|,\ldots,|Z_q|)\)</span>{% endraw %}, every sign vector has probability {% raw %}<span class="math inline">\(2^{-q}\)</span>{% endraw %}. For any statistic computed consistently across this orbit, its observed value has a uniform rank after appropriate treatment of ties.</p>

<p>For the absolute weighted sum,</p>

{% raw %}<div class="math display">\[
T(gZ)=\left|\sum_j\sqrt{\xi_j}\,g_jZ_j\right|
=T(-gZ).
\]</div>{% endraw %}
<p>Apart from these paired signs, additional ties have probability zero under nondegenerate continuous limits and nonzero weights. There are then {% raw %}<span class="math inline">\(M=2^{q-1}\)</span>{% endraw %} equally likely distinct ranks. Strict rejection at the empirical {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %} quantile has probability</p>

{% raw %}<div class="math display">\[
\frac{\lfloor \alpha M\rfloor}{M},
\]</div>{% endraw %}
<p>which lies between {% raw %}<span class="math inline">\(\alpha-1/M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(q=5\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M=16\)</span>{% endraw %}, and a five-percent nonrandomized test cannot reject. For {% raw %}<span class="math inline">\(q=6\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M=32\)</span>{% endraw %}, and its limiting rejection probability is {% raw %}<span class="math inline">\(1/32\)</span>{% endraw %}. This is the source and practical meaning of the theorem’s discreteness term.</p>

<p>Randomizing at the boundary can fill the unused portion of a rank in an exact sign experiment. The stated theorem uses a nonrandomized test, whose rejection probability may remain below the nominal level because the sign grid is finite.</p>

<h3 data-note-section="6" id="12-0-why-large-signals-need-enough-sign-patterns">6. Why large signals need enough sign patterns</h3>
<p>In the intercept example, take {% raw %}<span class="math inline">\(\beta=\beta_0+h/\sqrt n\)</span>{% endraw %}. The original statistic has limit</p>

{% raw %}<div class="math display">\[
\left|h+\sum_j\sqrt{\xi_j}Z_j\right|,
\]</div>{% endraw %}
<p>whereas the restricted bootstrap statistic for signs {% raw %}<span class="math inline">\(g\)</span>{% endraw %} has limit</p>

{% raw %}<div class="math display">\[
\left|h\sum_jg_j\xi_j+
\sum_jg_j\sqrt{\xi_j}Z_j\right|.
\]</div>{% endraw %}
<p>Because every {% raw %}<span class="math inline">\(\xi_j&gt;0\)</span>{% endraw %} and their sum is one, any mixed sign pattern satisfies {% raw %}<span class="math inline">\(|\sum_jg_j\xi_j|&lt;1\)</span>{% endraw %}. As {% raw %}<span class="math inline">\(|h|\)</span>{% endraw %} becomes large, its bootstrap statistic grows more slowly than the observed one. Only the all-positive and all-negative patterns keep the full signal magnitude. If the upper rejection region contains at least the largest distinct rank, the test consequently detects sufficiently large local signals with probability approaching one. If the nominal level is below the sign-grid resolution, strict rejection remains impossible regardless of signal size.</p>

<p>Restricted residuals retain the deviation from the null in the bootstrap experiment. The displayed local-alternative calculation uses precisely that deviation. Another residual construction would change the comparison and require a new argument.</p>

<h4 data-note-section="6.1" id="12-0-restricted-residuals-retain-a-nuisance-estimation-term">6.1. Restricted residuals retain a nuisance-estimation term</h4>
<p>The intercept example avoids a complication that matters with covariates. To display it, let {% raw %}<span class="math inline">\(x_{ij}\)</span>{% endraw %} collect all regressors, let {% raw %}<span class="math inline">\(Q_j=n^{-1}\sum_i x_{ij}x_{ij}&#x27;\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(Q=\sum_jQ_j\)</span>{% endraw %} be nonsingular. Write {% raw %}<span class="math inline">\(S_j=n^{-1/2}\sum_i x_{ij}\varepsilon_{ij}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\Delta^r=\sqrt n(\widehat\theta^r-\theta_0)\)</span>{% endraw %}, then the signed restricted-residual score is exactly</p>

{% raw %}<div class="math display">\[
\frac1{\sqrt n}\sum_{j,i}g_jx_{ij}\widehat\varepsilon^r_{ij}
=\sum_jg_jS_j-\sum_jg_jQ_j\Delta^r.
\]</div>{% endraw %}
<p>The second term is order one; consistency of {% raw %}<span class="math inline">\(\widehat\theta^r\)</span>{% endraw %} does not make it disappear on the {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} scale. Suppose, for this calculation, that {% raw %}<span class="math inline">\(Q_j=\xi_jQ\)</span>{% endraw %}, and test a contrast {% raw %}<span class="math inline">\(c&#x27;\theta=c&#x27;\theta_0\)</span>{% endraw %}. The restriction implies {% raw %}<span class="math inline">\(c&#x27;\Delta^r=0\)</span>{% endraw %}, hence</p>

{% raw %}<div class="math display">\[
c&#x27;Q^{-1}\sum_jg_jQ_j\Delta^r
=\left(\sum_jg_j\xi_j\right)c&#x27;\Delta^r=0.
\]</div>{% endraw %}
<p>After taking the tested contrast, the bootstrap therefore reduces to the signed sum {% raw %}<span class="math inline">\(c&#x27;Q^{-1}\sum_jg_jS_j\)</span>{% endraw %}. With arbitrary {% raw %}<span class="math inline">\(Q_j\)</span>{% endraw %}, the cancellation need not occur: the signed design matrices can turn a nuisance-estimation error into movement in the tested direction. In the regression with separately partialled-out controls, the paper’s projection conditions ensure the corresponding cancellation.</p>

<p>The fixed-cluster theorem connects two steps: sign symmetry of the limiting scores and its preservation by the fitted regression. The design conditions justify the second step while allowing the score variances to differ across clusters.</p>

<h3 data-note-section="7" id="12-0-what-cluster-size-must-accomplish">7. What cluster size must accomplish</h3>
<p>The assumption that a large cluster score is approximately Gaussian is a statement about dependence within that cluster. If all its observations share the same unscaled shock, {% raw %}<span class="math inline">\(\sum_i\varepsilon_{ij}\)</span>{% endraw %} is of order {% raw %}<span class="math inline">\(n_j\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(\sqrt{n_j}\)</span>{% endraw %}. Merely increasing {% raw %}<span class="math inline">\(n_j\)</span>{% endraw %} does not verify the displayed CLT. One must justify the normalization, the score limit, and independence across clusters from the sampling model.</p>

<p>These are distinct asymptotic regimes. Here a finite score vector has well-behaved limits. In the <a href="{% post_url 2024-04-17-heavy-tailed-cluster-inference-bootstrap-failure-and-score-subsampling %}">heavy-tail analysis</a>, increasingly many clusters are observed but some extreme scores retain a substantial fraction of total variability. A count of observations by itself does not distinguish them.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-canay_wild_2021" class="csl-entry" role="listitem">
Canay, Ivan A., Andres Santos, and Azeem M. Shaikh. 2021. <span>“The Wild Bootstrap with a <span>‘Small’</span> Number of <span>‘Large’</span> Clusters.”</span> <em>The Review of Economics and Statistics</em> 103 (2): 346–63. <a href="https://doi.org/10.1162/rest_a_00887">https://doi.org/10.1162/rest_a_00887</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-04-17-heavy-tailed-cluster-inference-bootstrap-failure-and-score-subsampling %}">Heavy-Tailed Cluster Inference: Bootstrap Failure and Score Subsampling</a></p></nav>

</div>
