---
layout: "post"
title: "Heavy-Tailed Cluster Inference: Bootstrap Failure and Score Subsampling"
date: "2024-04-17"
tags: ["econometrics", "dependence"]
excerpt: "A cluster-robust standard error adds squared cluster scores."
note_series: "Cluster and network inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Cluster Robust Inference and Network Dependence/stats.tex"
redirect_from: ["/2025/01/31/heavy-tailed-clusters-and-bootstrap-failure/", "/2025/01/31/heavy-tailed-clusters-and-inconsistent-inference/", "/2025/02/21/heavy-tailed-cluster-inference-bootstrap-failure-and-score-subsampling/", "/2025/02/21/uniform-cluster-inference-and-score-subsampling/", "/2025/02/21/uniformity-in-cluster-robust-inference/", "/2025/06/24/technical-bounds-for-cluster-inference/", "/2025/07/14/why-the-wild-cluster-bootstrap-fails-with-heavy-tails/"]
---

<div class="note-content" markdown="0">

<p>Studentization divides a score sum by an estimate based on its squared scores. It produces a normal limit only when the score distribution permits that approximation. In <span class="citation" data-cites="chiang_inconsistency_2024">(<a href="#ref-chiang_inconsistency_2024" role="doc-biblioref">Chiang, Sasaki, and Wang 2024</a>)</span>, the number of clusters grows but a few extreme scores remain influential in both numerator and denominator. This differs from the <a href="{% post_url 2023-10-08-wild-cluster-bootstrap-with-few-large-clusters %}">few-large-cluster sign argument</a>, which starts from a finite collection of well-behaved score limits.</p>

<h3 data-note-section="1" id="12-15-the-main-results">1. The main results</h3>
<p>Let {% raw %}<span class="math inline">\(S_g=X_g&#x27;\varepsilon_g\)</span>{% endraw %} be the regression score for independent, identically distributed clusters. Suppose the average design matrix converges to a positive definite {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. For a scalar contrast {% raw %}<span class="math inline">\(r&#x27;\theta\)</span>{% endraw %}, the leading score is {% raw %}<span class="math inline">\(U_g=r&#x27;Q^{-1}S_g\)</span>{% endraw %}.</p>

<div id="heavy-cluster-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s sampling and stable-domain-of-attraction conditions, with tail index {% raw %}<span class="math inline">\(a\in(1,2]\)</span>{% endraw %}, the cluster {% raw %}<span class="math inline">\(t\)</span>{% endraw %} statistic has a Gaussian limit if and only if {% raw %}<span class="math inline">\(a=2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(1&lt;a&lt;2\)</span>{% endraw %}, the Rademacher wild cluster bootstrap is inconsistent. Cluster score subsampling consistently estimates the continuous limiting distribution when {% raw %}<span class="math inline">\(b\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b/G\to0\)</span>{% endraw %}, and the number of simulated subsamples diverges.</p>

</div>
<p>The index {% raw %}<span class="math inline">\(a=2\)</span>{% endraw %} includes the normal domain of attraction; finite variance is sufficient but is not the exact boundary. The claim concerns the score distribution, not cluster size in isolation.</p>

<h3 data-note-section="2" id="12-15-why-studentization-does-not-remove-the-tail-problem">2. Why studentization does not remove the tail problem</h3>
<p>Ignoring negligible design-estimation terms, the statistic is</p>

{% raw %}<div class="math display">\[
T_G=\frac{\sum_{g=1}^GU_g}{\sqrt{\sum_{g=1}^G(U_g-\overline U)^2}}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a&lt;2\)</span>{% endraw %}, choose the tail normalization {% raw %}<span class="math inline">\(A_G\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(G\Pr(|U_g|&gt;A_G)\)</span>{% endraw %} is of constant order. Both {% raw %}<span class="math inline">\(A_G^{-1}\sum_gU_g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A_G^{-2}\sum_gU_g^2\)</span>{% endraw %} have nontrivial limits driven by the large observations. The denominator remains random at the same scale as the numerator. Their ratio is a self-normalized stable limit, rather than a standard normal variable.</p>

<p>Centering the denominator is negligible because</p>

{% raw %}<div class="math display">\[
\sum_g(U_g-\overline U)^2=\sum_gU_g^2-G\overline U^2,
\]</div>{% endraw %}
<p>and the correction is smaller by a factor of order {% raw %}<span class="math inline">\(G^{-1}\)</span>{% endraw %} relative to the squared stable normalization.</p>

<h3 data-note-section="3" id="12-15-why-the-bootstrap-and-subsampling-differ">3. Why the bootstrap and subsampling differ</h3>
<p>Conditional on the observed scores, a Rademacher bootstrap changes their signs and fixes their magnitudes. Under heavy tails, the realized extreme magnitudes continue to affect the distribution as the sample grows. The conditional bootstrap law therefore retains randomness that it would need to average out to estimate the fixed sampling law.</p>

<p>Subsampling uses subsets of {% raw %}<span class="math inline">\(b=o(G)\)</span>{% endraw %} clusters, each at its own smaller-sample tail scale. The studentized subset statistic has the same limiting ratio, while centering at the full-sample estimate becomes negligible on that scale. Averaging across many subsets then estimates its quantiles without estimating the tail index.</p>

<h3 data-note-section="4" id="12-15-the-centering-rate-in-score-subsampling">4. The centering rate in score subsampling</h3>
<p>Let the scalar score observations be {% raw %}<span class="math inline">\(S_g\)</span>{% endraw %} with mean {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(U_g=S_g-\delta\)</span>{% endraw %}. For a subset {% raw %}<span class="math inline">\(I\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, use</p>

{% raw %}<div class="math display">\[
T_I=\frac{\sum_{g\in I}(S_g-\overline S_G)}
 {\sqrt{\sum_{g\in I}(S_g-\overline S_I)^2}}.
\]</div>{% endraw %}
<p>The numerator would be centered at {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} in the population {% raw %}<span class="math inline">\(b\)</span>{% endraw %}-sample statistic. Replacing it by {% raw %}<span class="math inline">\(\overline S_G\)</span>{% endraw %} changes that numerator by {% raw %}<span class="math inline">\(b(\overline S_G-\delta)\)</span>{% endraw %}. If the stable normalization is {% raw %}<span class="math inline">\(A_m=m^{1/a}\ell(m)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\frac{b(\overline S_G-\delta)}{A_b}
=O_p\left(\frac{bA_G}{GA_b}\right)
=O_p\left((b/G)^{1-1/a}\frac{\ell(G)}{\ell(b)}\right).
\]</div>{% endraw %}
<p>For a fixed distribution in the stated domain of attraction, regular-variation bounds and {% raw %}<span class="math inline">\(a&gt;1\)</span>{% endraw %} make this tend to zero when {% raw %}<span class="math inline">\(b/G\to0\)</span>{% endraw %}. The denominator has order {% raw %}<span class="math inline">\(A_b\)</span>{% endraw %} and a nondegenerate positive limit after that normalization. Thus full-sample centering is negligible. The condition {% raw %}<span class="math inline">\(a&gt;1\)</span>{% endraw %} is doing real work: the positive power {% raw %}<span class="math inline">\(1-1/a\)</span>{% endraw %} is what offsets the centering error.</p>

<p>For the full statistic, {% raw %}<span class="math inline">\(\sum U_g=O_p(A_G)\)</span>{% endraw %} implies</p>

{% raw %}<div class="math display">\[
\frac{G\overline U^2}{A_G^2}
=\frac1G\left(\frac{\sum_gU_g}{A_G}\right)^2=O_p(G^{-1}).
\]</div>{% endraw %}
<p>This justifies removing the denominator’s centering term. The squared-score sum itself still has a random limit: {% raw %}<span class="math inline">\(\sum U_g^2/A_G^2\)</span>{% endraw %} need not approach a constant for {% raw %}<span class="math inline">\(a&lt;2\)</span>{% endraw %}.</p>

<h3 data-note-section="5" id="12-15-why-many-overlapping-subsets-still-estimate-a-distribution">5. Why many overlapping subsets still estimate a distribution</h3>
<p>First imagine centering subsets at the true {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. For a threshold {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, average the bounded kernel {% raw %}<span class="math inline">\(\mathbf1\{T_I\leq x\}\)</span>{% endraw %} over all subsets of size {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. Its expectation is the cdf of the {% raw %}<span class="math inline">\(b\)</span>{% endraw %}-sample statistic.</p>

<p>A useful variance argument avoids treating the overlapping subsets as independent. Randomly permute the {% raw %}<span class="math inline">\(G\)</span>{% endraw %} observations, form {% raw %}<span class="math inline">\(k=\lfloor G/b\rfloor\)</span>{% endraw %} disjoint blocks, and average the kernel over those blocks. Unconditionally, the blocks are independent and this average has variance at most {% raw %}<span class="math inline">\(1/(4k)\)</span>{% endraw %}. Conditional expectation over the random permutation gives the complete subsampling average. The law of total variance then implies</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat L^{\rm complete}_{G,b}(x))
\leq\frac1{4\lfloor G/b\rfloor}\longrightarrow0.
\]</div>{% endraw %}
<p>The centering calculation transfers this result to the feasible statistic at continuity points of the limit cdf. Monotonicity of cdfs and a finite grid of continuity points then give uniform-in-{% raw %}<span class="math inline">\(x\)</span>{% endraw %} convergence when the limit cdf is continuous. If only {% raw %}<span class="math inline">\(M\)</span>{% endraw %} random subsets are evaluated independently conditional on the data, their additional Monte Carlo variance is at most {% raw %}<span class="math inline">\(1/(4M)\)</span>{% endraw %}.</p>

<p>There are two errors to reduce. Increasing the subset size {% raw %}<span class="math inline">\(b\)</span>{% endraw %} makes its statistic approach the limit; increasing the number of evaluated subsets estimates that statistic’s distribution more accurately. Enumerating every subset cannot compensate for keeping the subset size too small.</p>

<h3 data-note-section="6" id="12-15-uniform-validity-requires-three-uniform-approximations">6. Uniform validity requires three uniform approximations</h3>
<p>Let {% raw %}<span class="math inline">\(J_m(x,P)\)</span>{% endraw %} be the cdf of the correctly centered {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-sample statistic. A sufficient route to uniform coverage over a class {% raw %}<span class="math inline">\(\mathcal P\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
\sup_{P\in\mathcal P}\|J_G(\cdot,P)-J_b(\cdot,P)\|_\infty\to0,
\]</div>{% endraw %}
<p>uniform consistency of the empirical subsampling cdf for {% raw %}<span class="math inline">\(J_b\)</span>{% endraw %}, and uniform control of the full-sample centering error together with regularity of the relevant quantiles. These premises allow the triangle inequality</p>

{% raw %}<div class="math display">\[
\|\widehat L_{G,b}-J_G\|_\infty
\leq\|\widehat L_{G,b}-J_b\|_\infty
+\|J_b-J_G\|_\infty.
\]</div>{% endraw %}
<p>If the cdf error is at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, the estimated {% raw %}<span class="math inline">\(u\)</span>{% endraw %}-quantile lies between population quantiles with levels near {% raw %}<span class="math inline">\(u-\eta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u+\eta\)</span>{% endraw %}. Regularity at those quantiles makes the probability between the bounds small. At a discontinuity, that last step can fail and requires different inequalities or boundary randomization.</p>

<p>These requirements are stronger than the pointwise theorem. Uniform centering control requires a bound on {% raw %}<span class="math inline">\(a-1\)</span>{% endraw %} and on the slowly varying ratio across the distribution class. Likewise, finite variance for each distribution does not supply a uniform Lindeberg condition; uniform integrability of standardized squared scores is one sufficient condition.</p>

<p>The elementary array {% raw %}<span class="math inline">\(x_{m,n}=\mathbf1\{n\leq m\}\)</span>{% endraw %} illustrates the logical problem: for every fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, {% raw %}<span class="math inline">\(x_{m,n}\to0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(x_{n,n}=1\)</span>{% endraw %}. A representation theorem for pointwise weak convergence cannot remove this diagonal obstruction. Adapting to an unknown fixed tail index and obtaining uniform coverage over an unrestricted class of tail shapes are different claims.</p>

<h3 data-note-section="7" id="12-15-why-sign-resampling-retains-the-extremes">7. Why sign resampling retains the extremes</h3>
<p>A simple diagnostic is the largest squared-score share,</p>

{% raw %}<div class="math display">\[
R_G=\frac{\max_gU_g^2}{\sum_gU_g^2}.
\]</div>{% endraw %}
<p>In an ordinary finite-variance regime, no single observation dominates and {% raw %}<span class="math inline">\(R_G\to0\)</span>{% endraw %} in probability. In the stable regime with {% raw %}<span class="math inline">\(a&lt;2\)</span>{% endraw %}, large order statistics remain important. Conditional Rademacher draws replace {% raw %}<span class="math inline">\(U_g\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\xi_gU_g\)</span>{% endraw %} but leave every {% raw %}<span class="math inline">\(U_g^2\)</span>{% endraw %} unchanged. Their distribution consequently retains the realized configuration of extreme magnitudes.</p>

<p>One can see the obstruction in a conditional fourth moment. Set {% raw %}<span class="math inline">\(w_g=U_g/(\sum_hU_h^2)^{1/2}\)</span>{% endraw %} and consider the idealized signed statistic {% raw %}<span class="math inline">\(T^*=\sum_g\xi_gw_g\)</span>{% endraw %}, holding the scores fixed. Independent fair signs give</p>

{% raw %}<div class="math display">\[
\mathbb{E}^*[(T^*)^2]=1,\qquad
\mathbb{E}^*[(T^*)^4]
=\sum_gw_g^4+6\sum_{g&lt;h}w_g^2w_h^2
=3-2\sum_gw_g^4.
\]</div>{% endraw %}
<p>Thus studentization fixes the conditional variance but leaves the conditional shape dependent on the observed concentration of squared scores. Since {% raw %}<span class="math inline">\(\sum_gw_g^4\geq(\max_gw_g^2)^2=R_G^2\)</span>{% endraw %}, an influential score prevents this fourth moment from approaching the Gaussian value. For bootstrap consistency in the stable regime, the concentration statistic itself retains a random limit. The signed reference law keeps that sample-specific randomness instead of estimating a fixed sampling distribution.</p>

<p>If one score supplied all the squared magnitude, the reference distribution would consist of two points, {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(G\)</span>{% endraw %} scores had equal magnitudes, its fourth moment would be {% raw %}<span class="math inline">\(3-2/G\)</span>{% endraw %}. These are limiting illustrations of the same formula. They do not replace the paper’s point-process proof, which relates extreme order statistics to the stable law. They explain why a standard error that grows with the largest cluster is not sufficient to repair the critical value.</p>

<p>Subsampling estimates the distribution of the ratio directly. It can therefore be useful when the squared-score sum has a random limiting scale, rather than consistently estimating a deterministic variance.</p>

<p>The fourth-moment calculation explains what fixing the observed magnitudes leaves unresolved; the paper’s point-process argument proves the bootstrap failure. Smaller subsets use their own tail scale and usually omit the full sample’s largest observations, allowing the subsampling distribution to estimate the self-normalized limit.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-chiang_inconsistency_2024" class="csl-entry" role="listitem">
Chiang, Harold D., Yuya Sasaki, and Yulong Wang. 2024. <span>“On the Inconsistency of Cluster-Robust Inference and How Subsampling Can Fix It.”</span> arXiv. <a href="https://arxiv.org/abs/2308.10138v5">https://arxiv.org/abs/2308.10138v5</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-10-08-wild-cluster-bootstrap-with-few-large-clusters %}">Wild Cluster Bootstrap with Few Large Clusters</a> · Next: <a href="{% post_url 2023-05-21-when-to-cluster-sampling-assignment-and-fixed-effects %}">When to Cluster: Sampling, Assignment, and Fixed Effects</a></p></nav>

</div>
