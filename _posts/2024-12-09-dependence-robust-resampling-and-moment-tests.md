---
layout: "post"
title: "Dependence-Robust Resampling and Moment Tests"
date: "2024-12-09"
tags: ["econometrics", "networks"]
excerpt: "Random draws create a tractable reference fluctuation, while the original sample mean determines how many repetitions inference can tolerate."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2023/10/07/pointwise-and-uniform-coverage-in-moment-inequality-models/", "/2024/12/09/dependence-robust-moment-tests/", "/2024/12/26/resampled-moment-inequality-tests/", "/2025/01/12/limit-theory-for-dependence-robust-tests/", "/2025/01/28/technical-bounds-for-dependence-robust-inference/"]
---

<div class="note-content" markdown="0">

<p>Suppose a mean is root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} consistent, but estimating its long-run variance is difficult. <span class="citation" data-cites="leung_dependencerobust_2022">(<a href="#ref-leung_dependencerobust_2022" role="doc-biblioref">Leung 2022</a>)</span> adds random draws whose variance can be calculated conditional on the data. The resulting test works when the original sample’s error is small relative to this artificial fluctuation. As in <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">ordering-free resampling</a>, this requirement limits how many draws can be used.</p>

<h3 data-note-section="1" id="10-356-the-main-limit-theorem">1. The main limit theorem</h3>
<p>Let {% raw %}<span class="math inline">\(X_i\in\mathbb R^m\)</span>{% endraw %}, with sample mean {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} and sample covariance {% raw %}<span class="math inline">\(\widehat\Sigma=n^{-1}\sum_i(X_i-\overline X)(X_i-\overline X)&#x27;\)</span>{% endraw %}. Draw independent uniform indices {% raw %}<span class="math inline">\(I_r\)</span>{% endraw %} and independent ordered distinct pairs {% raw %}<span class="math inline">\((J_r,K_r)\)</span>{% endraw %}.</p>

<p>The mean statistic averages randomly selected observations. The pair statistic instead averages products from distinct pairs:</p>

{% raw %}<div class="math display">\[
Z_M(\mu)=\frac1{\sqrt R}\sum_r\widehat\Sigma^{-1/2}(X_{I_r}-\mu),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
T_U(\mu)=\frac1{\sqrt{mR}}\sum_r(X_{J_r}-\mu)&#x27;\widehat\Sigma^{-1}(X_{K_r}-\mu).
\]</div>{% endraw %}
<div id="dependence-resampling" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose {% raw %}<span class="math inline">\(\sqrt n(\overline X-\mu_0)=O_P(1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} converges to a positive definite matrix, and empirical {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moments are bounded in probability. As {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z_M(\mu_0)\Rightarrow \mathcal{N}(0,I_m)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(R/n\to0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(T_U(\mu_0)\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\sqrt R/n\to0\)</span>{% endraw %}.</p>

</div>
<h3 data-note-section="2" id="10-356-the-mean-statistic-in-one-line">2. The mean statistic in one line</h3>
<p>To locate the original-sample error, add and subtract the sample mean inside every draw:</p>

{% raw %}<div class="math display">\[
Z_M(\mu_0)=
\frac1{\sqrt R}\sum_r\widehat\Sigma^{-1/2}(X_{I_r}-\overline X)
+\sqrt R\,\widehat\Sigma^{-1/2}(\overline X-\mu_0).
\]</div>{% endraw %}
<p>The centered draws in the first term have conditional covariance equal to the identity and obey a conditional i.i.d. CLT. The remaining drift is {% raw %}<span class="math inline">\(O_P(\sqrt{R/n})\)</span>{% endraw %}, which vanishes under the theorem’s repetition restriction. Thus the sample covariance standardizes the artificial draws; it is not being used to estimate the original mean’s long-run variance.</p>

<h3 data-note-section="3" id="10-356-why-pairs-allow-more-repetitions">3. Why pairs allow more repetitions</h3>
<p>Put {% raw %}<span class="math inline">\(a=\overline X-\mu\)</span>{% endraw %}. Summing over distinct pairs gives the exact conditional expectation</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(X_J-\mu)&#x27;\widehat\Sigma^{-1}(X_K-\mu)\mid\mathbf X]
=a&#x27;\widehat\Sigma^{-1}a-\frac{m}{n-1}.
\]</div>{% endraw %}
<p>The linear terms cancel because centered observations sum to zero. Under the null, both remaining terms are order {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}, so aggregation creates a drift of order {% raw %}<span class="math inline">\(\sqrt R/n\)</span>{% endraw %}. This explains the weaker restriction on {% raw %}<span class="math inline">\(R\)</span>{% endraw %}.</p>

<p>The mean statistic detects shifts of order {% raw %}<span class="math inline">\(R^{-1/2}\)</span>{% endraw %}, and the pair statistic detects shifts of order {% raw %}<span class="math inline">\(R^{-1/4}\)</span>{% endraw %}. Balancing the paper’s leading error terms suggests {% raw %}<span class="math inline">\(R_M\asymp n^{1/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_U\asymp n^{4/3}\)</span>{% endraw %}, giving detectable scales {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-1/3}\)</span>{% endraw %}. These are tuning heuristics, not universally optimal choices.</p>

<h3 data-note-section="4" id="10-356-extensions-and-limits">4. Extensions and limits</h3>
<p>For a one-sided moment inequality, squaring creates an additional problem: large deviations on the null side also produce a large statistic. The paper subtracts an estimated null-side drift and proves uniform size control under uniform versions of the assumptions. Estimated nuisance scores need additional consistency and smoothness conditions.</p>

<p>The initial root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} consistency assumption already restricts dependence. If the known convergence rate is slower, the allowable {% raw %}<span class="math inline">\(R\)</span>{% endraw %} must shrink accordingly. The artificial draws provide a tractable reference law while retaining the information limitation of the original observations.</p>

<h3 data-note-section="5" id="10-356-whiten-the-empirical-distribution-first">5. Whiten the empirical distribution first</h3>
<p>Define {% raw %}<span class="math inline">\(Z_i=\widehat\Sigma^{-1/2}(X_i-\overline X)\)</span>{% endraw %}. Exactly, conditional on the original data,</p>

{% raw %}<div class="math display">\[
\frac1n\sum_iZ_i=0,\qquad
\frac1n\sum_iZ_iZ_i&#x27;=I_m.
\]</div>{% endraw %}
<p>A uniform draw {% raw %}<span class="math inline">\(I\)</span>{% endraw %} therefore has {% raw %}<span class="math inline">\(\mathbb{E}[Z_I\mid\mathbf X]=0\)</span>{% endraw %} and covariance {% raw %}<span class="math inline">\(I_m\)</span>{% endraw %}. With empirical {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moments bounded and a nonsingular limiting covariance, the conditional Lyapunov bound for {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent draws is of order {% raw %}<span class="math inline">\(R^{-\delta/2}\)</span>{% endraw %} times a bounded empirical moment. It vanishes as {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}.</p>

<p>This proves the normal limit of the centered artificial mean. To pass from conditional to unconditional characteristic functions, the conditional characteristic function approaches the deterministic Gaussian one in probability and is bounded by one; taking expectations preserves the limit. The remaining drift is {% raw %}<span class="math inline">\(\sqrt R\widehat\Sigma^{-1/2}(\overline X-\mu_0)\)</span>{% endraw %}, which is negligible under {% raw %}<span class="math inline">\(R/n\to0\)</span>{% endraw %} and the root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} consistency assumption.</p>

<h3 data-note-section="6" id="10-356-the-distinct-pair-second-moment">6. The distinct-pair second moment</h3>
<p>For a uniformly chosen ordered pair {% raw %}<span class="math inline">\(J\ne K\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(H=Z_J&#x27;Z_K\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\sum_iZ_i=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_{j\ne k}Z_j&#x27;Z_k
=-\sum_j\|Z_j\|^2=-nm,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(\mathbb{E}H=-m/(n-1)\)</span>{% endraw %}. For the second moment, use the trace identity</p>

{% raw %}<div class="math display">\[
\sum_{j,k}(Z_j&#x27;Z_k)^2
=\operatorname{tr}\left(\left(\sum_jZ_jZ_j&#x27;\right)^2\right)
=n^2m.
\]</div>{% endraw %}
<p>The trace identity includes all pairs. Subtract the squared diagonal contributions and divide by the number of ordered distinct pairs:</p>

{% raw %}<div class="math display">\[
\mathbb{E}[H^2\mid\mathbf X]
=\frac{n^2m-\sum_j\|Z_j\|^4}{n(n-1)}.
\]</div>{% endraw %}
<p>The empirical {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment condition implies {% raw %}<span class="math inline">\(\max_j\|Z_j\|^2/n=o_p(1)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\sum_j\|Z_j\|^2=nm\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac1{n^2}\sum_j\|Z_j\|^4
\leq\frac{\max_j\|Z_j\|^2}{n}
\left(\frac1n\sum_j\|Z_j\|^2\right)
=m\frac{\max_j\|Z_j\|^2}{n}=o_p(1).
\]</div>{% endraw %}
<p>Thus the conditional variance of {% raw %}<span class="math inline">\(H\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, explaining the factor {% raw %}<span class="math inline">\(\sqrt{mR}\)</span>{% endraw %} in {% raw %}<span class="math inline">\(T_U\)</span>{% endraw %}. Bounds on pair moments follow from {% raw %}<span class="math inline">\(|Z_j&#x27;Z_k|\leq\|Z_j\|\|Z_k\|\)</span>{% endraw %}, giving the conditional CLT for the centered pair average. The excluded diagonal produces a small negative mean, not an exactly mean-zero statistic.</p>

<h3 data-note-section="7" id="10-356-add-back-a-candidate-mean">7. Add back a candidate mean</h3>
<p>Put {% raw %}<span class="math inline">\(b=\widehat\Sigma^{-1/2}(\overline X-\mu)\)</span>{% endraw %}. A pair contribution at {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
(Z_J+b)&#x27;(Z_K+b)
=Z_J&#x27;Z_K+b&#x27;(Z_J+Z_K)+\|b\|^2.
\]</div>{% endraw %}
<p>Each centered observation has zero conditional average, so the linear terms disappear on taking expectation. The remaining terms give</p>

{% raw %}<div class="math display">\[
\mathbb{E}[T_U(\mu)\mid\mathbf X]
=\sqrt{R/m}\left(\|b\|^2-\frac{m}{n-1}\right).
\]</div>{% endraw %}
<p>Under the null, {% raw %}<span class="math inline">\(b=O_p(n^{-1/2})\)</span>{% endraw %}, so this drift is {% raw %}<span class="math inline">\(O_p(\sqrt R/n)\)</span>{% endraw %}. The random linear terms have vanishing conditional variance when {% raw %}<span class="math inline">\(b=o_p(1)\)</span>{% endraw %}, while the centered quadratic term retains variance one. These are the separate mean and variance checks behind the pair limit.</p>

<p>For a local alternative {% raw %}<span class="math inline">\(\mu_0-\mu=hR^{-1/4}\)</span>{% endraw %}, and with original-sample error negligible at that scale, the positive drift is {% raw %}<span class="math inline">\(h&#x27;\Sigma^{-1}h/\sqrt m\)</span>{% endraw %} to first order. The mean statistic instead shifts linearly at scale {% raw %}<span class="math inline">\(R^{-1/2}\)</span>{% endraw %}. As in the <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Song comparison</a>, their useful repetition counts differ because the mean and quadratic sampling drifts have different orders.</p>

<p>The variance of the random linear term can be computed exactly as well. Since {% raw %}<span class="math inline">\(J\ne K\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(Z_J+Z_K)(Z_J+Z_K)&#x27;\mid\mathbf X]
=2I_m-\frac{2I_m}{n-1}
=\frac{2(n-2)}{n-1}I_m.
\]</div>{% endraw %}
<p>Hence the linear part of {% raw %}<span class="math inline">\(T_U(\mu)\)</span>{% endraw %}, after aggregation over {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent pairs, has conditional variance</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(
\frac1{\sqrt{mR}}\sum_{r=1}^Rb&#x27;(Z_{J_r}+Z_{K_r})
\,\middle|\,\mathbf X\right)
=\frac{2(n-2)}{m(n-1)}\|b\|^2.
\]</div>{% endraw %}
<p>Its size does not grow with {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, because it is a centered sum divided by {% raw %}<span class="math inline">\(\sqrt R\)</span>{% endraw %}. The deterministic quadratic drift does grow with {% raw %}<span class="math inline">\(\sqrt R\)</span>{% endraw %}. This separates the two reasons for requiring a candidate mean close to the population mean. Consistency makes the random linear part negligible; the stronger repetition restriction controls the accumulated squared error.</p>

<p>The cross-covariance with the centered quadratic term is harmless once the latter’s variance is bounded: Cauchy–Schwarz bounds it by a constant times {% raw %}<span class="math inline">\(\|b\|\)</span>{% endraw %}. Thus no symmetry assumption on the empirical distribution is needed to remove this cross-term asymptotically.</p>

<p>Whitening works because the artificial draws are independent conditional on the data. Their covariance can differ from the original sample mean’s long-run covariance. The method avoids estimating the latter by making the artificial fluctuation large enough to dominate the original estimation error. A persistent common shock prevents that domination.</p>

<h3 data-note-section="8" id="10-356-a-scalar-numerical-identity">8. A scalar numerical identity</h3>
<p>For centered scalar observations with empirical variance one, {% raw %}<span class="math inline">\(\sum_iZ_i^2=n\)</span>{% endraw %}. With two observations they must be opposite in sign, and every distinct-pair product is {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}. The pair statistic then has no conditional variance. This does not contradict the asymptotic theorem: the diagonal correction is substantial at such a small {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and the no-dominant-observation argument has not taken effect.</p>

<p>As {% raw %}<span class="math inline">\(n\)</span>{% endraw %} grows under the moment assumptions, the discarded diagonal share {% raw %}<span class="math inline">\(\sum_iZ_i^4/n^2\)</span>{% endraw %} vanishes and the pair variance approaches one. The exact formula provides a useful finite-sample diagnostic for unusually concentrated observations, even when an asymptotic normal approximation is ultimately used.</p>

<h3 data-note-section="9" id="10-356-what-slower-original-sample-rates-would-require">9. What slower original-sample rates would require</h3>
<p>Suppose instead that {% raw %}<span class="math inline">\(\overline X-\mu_0=O_p(a_n^{-1})\)</span>{% endraw %} for a known diverging rate {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %}. The mean drift is negligible if {% raw %}<span class="math inline">\(\sqrt R/a_n\to0\)</span>{% endraw %}. The quadratic mean component is negligible if {% raw %}<span class="math inline">\(\sqrt R/a_n^2\to0\)</span>{% endraw %}, and the distinct-pair correction additionally requires {% raw %}<span class="math inline">\(\sqrt R/n\to0\)</span>{% endraw %}.</p>

<p>These bounds check the drifts in a possible slower-rate extension. Covariance convergence, empirical moments, and the conditional approximation remain to be proved. Random sampling cannot correct a persistent original-sample bias or identify a mean that the original model does not identify.</p>

<h3 id="10-356-the-moment-bound-needed-for-the-pair-clt">The moment bound needed for the pair CLT</h3>
<p>The pair argument does not require an empirical fourth moment to remain bounded. For {% raw %}<span class="math inline">\(r=2+\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_{r,n}=n^{-1}\sum_i\|Z_i\|^r=O_p(1)\)</span>{% endraw %},</p>
<p>{% raw %}<div class="math display">\[\mathbb E_\pi|Z_J&#39;Z_K|^r
\le\frac1{n(n-1)}\sum_{j\ne k}\|Z_j\|^r\|Z_k\|^r
\le\frac n{n-1}M_{r,n}^2=O_p(1).\]</div>{% endraw %}</p>
<p>Centering preserves this moment order by {% raw %}<span class="math inline">\(|x-y|^r\le2^{r-1}(|x|^r+|y|^r)\)</span>{% endraw %}. With conditional pair variance tending to {% raw %}<span class="math inline">\(m&gt;0\)</span>{% endraw %}, the Lyapunov ratio for {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent pairs is therefore {% raw %}<span class="math inline">\(O_p(R^{-\delta/2})\)</span>{% endraw %}. It tends to zero and proves the conditional centered-pair CLT used above.</p>
<p>The maximum bound in Section 6 is also explicit:</p>
<p>{% raw %}<div class="math display">\[\frac{\max_i\|Z_i\|^2}{n}
\le n^{-\delta/(2+\delta)}M_{2+\delta,n}^{2/(2+\delta)}=o_p(1).\]</div>{% endraw %}</p>
<p>Thus the same {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment assumption both eliminates the discarded diagonal share and supplies the Lyapunov bound. No independence of the original observations is used in these conditional algebraic steps; their original dependence is restricted through the sample-mean and covariance premises.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-leung_dependencerobust_2022" class="csl-entry" role="listitem">
Leung, Michael P. 2022. <span>“Dependence‐robust Inference Using Resampled Statistics.”</span> <em>Journal of Applied Econometrics</em> 37 (2): 270–85. <a href="https://doi.org/10.1002/jae.2865">https://doi.org/10.1002/jae.2865</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Resampled Statistics: Size and Local Power</a> · Additional reading: <a href="{% post_url 2024-07-29-randomized-saturation-designs-and-their-optimal-allocation %}">Randomized Saturation Designs and Their Optimal Allocation</a></p></nav>

</div>
