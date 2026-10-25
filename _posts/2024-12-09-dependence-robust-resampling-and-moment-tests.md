---
layout: "post"
title: "Dependence-Robust Resampling and Moment Tests"
date: "2024-12-09"
tags: ["econometrics", "networks"]
excerpt: "Conditional resampling limits yield moment-inequality tests whose inversion covers each admissible parameter uniformly under sequencewise conditions."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2023/10/07/pointwise-and-uniform-coverage-in-moment-inequality-models/", "/2024/12/09/dependence-robust-moment-tests/", "/2024/12/26/resampled-moment-inequality-tests/", "/2025/01/12/limit-theory-for-dependence-robust-tests/", "/2025/01/28/technical-bounds-for-dependence-robust-inference/"]
---

<div class="note-content" markdown="0">

<span id="10-356-identified-set-inversion"></span>
<span id="moment-inversion-coverage"></span>
<p>Resampling one observation or one distinct pair at a time gives a conditional central limit theorem under empirical moment conditions. Dependence in the original sample enters through the convergence rate of its mean. The construction in <span class="citation" data-cites="leung_dependencerobust_2022">(<a href="#ref-leung_dependencerobust_2022" role="doc-biblioref">Leung 2022</a>)</span> uses this separation to test means and moment inequalities.</p>
<!-- original-paper-scope: supplementary-inversion-introduction
Introduction to the general partial-identification extension commented out below.

Inverting those tests gives confidence sets for parameters defined by moment restrictions.
-->
<!-- original-paper-scope: cross-paper-introduction
An introductory comparison with separate posts, corresponding to the normalization comparison commented out below.

The [individual-observation construction]({post:10-235}) and [local-power comparison]({post:10-266}) use related normalizations.
-->
<p>The calculations below retain the finite-population correction and the sign correction needed for inequality tests.</p>
<h3 data-note-section="1" id="10-356-the-main-limit-theorem">1. From subsamples to individual observations and pairs</h3>
<p>Let {% raw %}<span class="math inline">\(\mathbf X=(X_1,\ldots,X_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X_i\in\mathbb R^p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is fixed. The observations may be dependent, and their distribution may vary with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Write</p>
{% raw %}<div class="math display">\[
\overline X=\frac1n\sum_{i=1}^nX_i,
\qquad
\widehat\Sigma=\frac1n\sum_{i=1}^n
(X_i-\overline X)(X_i-\overline X)&#x27;.
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(R=R_n\)</span>{% endraw %} for the number of resampling repetitions, as in the preceding posts. For each {% raw %}<span class="math inline">\(r=1,\ldots,R\)</span>{% endraw %}, draw a uniform random permutation {% raw %}<span class="math inline">\(\pi_r\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\{1,\ldots,n\}\)</span>{% endraw %}, independently across repetitions and independently of the data. Set {% raw %}<span class="math inline">\(I_r=\pi_r(1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_r=\pi_r(1)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(K_r=\pi_r(2)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(I_r\)</span>{% endraw %} is a uniform observation index and {% raw %}<span class="math inline">\((J_r,K_r)\)</span>{% endraw %} is a uniform ordered pair of distinct indices. Observations and pairs can be drawn again at another repetition. There is no requirement that {% raw %}<span class="math inline">\(R\leq n\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathbb{E}_\pi\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Var}_\pi\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(P_\pi\)</span>{% endraw %} for expectation, variance, and probability over these draws conditional on {% raw %}<span class="math inline">\(\mathbf X\)</span>{% endraw %}.</p>
<p>For a hypothesized mean {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, the mean-type and U-type statistics are</p>
{% raw %}<div class="math display">\[
\widetilde T_M(\mu)
=\frac1{\sqrt{R}}\sum_{r=1}^{R}
\widehat\Sigma^{-1/2}(X_{I_r}-\mu),
\qquad
T_M(\mu)=\|\widetilde T_M(\mu)\|^2,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
T_U(\mu)
=\frac1{\sqrt{pR}}\sum_{r=1}^{R}
(X_{J_r}-\mu)&#x27;\widehat\Sigma^{-1}(X_{K_r}-\mu).
\]</div>{% endraw %}
<!-- original-paper-scope: cross-paper-normalization-comparison
A comparison with separate Song posts, rather than a derivation needed for Leung's results. Leung's statistic definitions and limit calculations remain visible.

These use a different normalization from Song's unadjusted statistics in the earlier posts. With the same draws and covariance estimator, the exact relations are

$$
T_M(\mu)=p\,S_M^{\mathrm{Song}}(\mu;b=1),
\qquad
T_U(\mu)=\sqrt p\,S_U^{\mathrm{Song}}(\mu;b=2).
$$
-->
<p>The mean statistic has a {% raw %}<span class="math inline">\(\chi_p^2\)</span>{% endraw %} limit and the pair statistic has unit limiting variance. The finite-population mean of the pair statistic is retained in the expansion below.</p>
<p>Here and below, {% raw %}<span class="math inline">\(\|\cdot\|\)</span>{% endraw %} denotes the Euclidean norm for vectors and the induced operator norm for matrices; the inverse square root is symmetric. All expressions involving {% raw %}<span class="math inline">\(\widehat\Sigma^{-1}\)</span>{% endraw %} are defined on its nonsingularity event; the assumptions below make this event have probability tending to one.</p>
<div id="dependence-resampling" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose that, for some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and a positive definite matrix {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\sqrt n(\overline X-\mu_0)=O_p(1),
\qquad \widehat\Sigma\xrightarrow{P}\Sigma,
\qquad \frac1n\sum_{i=1}^n\|X_i\|^{2+\delta}=O_p(1).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R/n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\widetilde T_M(\mu_0)\Rightarrow\mathcal{N}(0,I_p)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_M(\mu_0)\Rightarrow\chi_p^2\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt{R}/n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T_U(\mu_0)\Rightarrow\mathcal{N}(0,1)\)</span>{% endraw %}. The corresponding limits also hold with {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}. For each scalar statistic, its conditional CDF converges in probability, uniformly over the evaluation point, to the stated continuous limit CDF.</p>
</div>
<p>The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#ordering-free-proof-techniques">graph bounds</a> give one way to verify root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} consistency of the original mean. Its asymptotic normality is unnecessary here; {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} estimates marginal variation, and resampling supplies the conditional Gaussian limit.</p>
<p><span id="10-356-whiten-the-empirical-distribution-first"></span></p>
<p>Define the empirically centered and standardized observations:</p>
{% raw %}<div class="math display">\[
Z_i=\widehat\Sigma^{-1/2}(X_i-\overline X),
\qquad
\frac1n\sum_iZ_i=0,
\qquad
\frac1n\sum_iZ_iZ_i&#x27;=I_p.
\]</div>{% endraw %}
<p>These are exact identities for the realized data. Consequently, a uniform draw {% raw %}<span class="math inline">\(Z_I\)</span>{% endraw %} has conditional mean zero and covariance {% raw %}<span class="math inline">\(I_p\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(q=2+\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_{q,n}=n^{-1}\sum_i\|Z_i\|^q\)</span>{% endraw %}. The moment and covariance assumptions imply {% raw %}<span class="math inline">\(M_{q,n}=O_p(1)\)</span>{% endraw %}: Jensen’s inequality bounds {% raw %}<span class="math inline">\(\|\overline X\|^q\)</span>{% endraw %} by the empirical {% raw %}<span class="math inline">\(q\)</span>{% endraw %}th moment, and {% raw %}<span class="math inline">\(\|\widehat\Sigma^{-1/2}\|=O_p(1)\)</span>{% endraw %}. The conditional Lyapunov bound is therefore</p>
{% raw %}<div class="math display">\[
\sum_{r=1}^{R}\mathbb{E}_\pi
\left\|\frac{Z_{I_r}}{\sqrt{R}}\right\|^{2+\delta}
=R^{-\delta/2}M_{2+\delta,n}=o_p(1).
\]</div>{% endraw %}
<p>The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#ordering-free-mean-limit">conditional Lyapunov argument</a> therefore applies: {% raw %}<span class="math inline">\(R^{-1/2}\sum_r Z_{I_r}\)</span>{% endraw %} converges conditionally in probability to {% raw %}<span class="math inline">\(\mathcal{N}(0,I_p)\)</span>{% endraw %}. Taking expectations of its bounded conditional characteristic function gives unconditional convergence.</p>
<p><span id="10-356-the-mean-statistic-in-one-line"></span></p>
<p>It remains to replace the empirical center by the hypothesized population mean. Adding and subtracting {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\widetilde T_M(\mu_0)
=\underbracket{\frac1{\sqrt{R}}\sum_{r=1}^{R}Z_{I_r}}_{\text{centered resampling sum}}
+\underbracket{\sqrt{R}\,\widehat\Sigma^{-1/2}
(\overline X-\mu_0)}_{\text{conditional mean}}.
\]</div>{% endraw %}
<p>The second term is {% raw %}<span class="math inline">\(O_p(\sqrt{R/n})\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(R/n\to0\)</span>{% endraw %} completes the mean-statistic proof. Squaring the norm gives the chi-square limit. Continuity of the limit CDF also gives uniformity over its evaluation point: a finite grid controls the central region by monotonicity, and two tail points control the rest. This does not establish uniformity over data-generating processes; Section 3 addresses that question.</p>
<p>For a scalar mean, test inversion gives the interval</p>
{% raw %}<div class="math display">\[
\overline X^*\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{\widehat\Sigma}{R}},
\qquad
\overline X^*=\frac1{R}\sum_{r=1}^{R}X_{I_r}.
\]</div>{% endraw %}
<p>Its center is the resampled mean. Replacing that center by {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} would remove the resampling variation on which the stated coverage result depends.</p>
<h3 data-note-section="2" id="10-356-why-pairs-allow-more-repetitions">2. The pair statistic: variance, moments, and local power</h3>
<p>Use {% raw %}<span class="math inline">\(a=a(\mu)=\widehat\Sigma^{-1/2}(\overline X-\mu)\)</span>{% endraw %}, as in the earlier posts. A resampled product is</p>
{% raw %}<div class="math display">\[
(X_J-\mu)&#x27;\widehat\Sigma^{-1}(X_K-\mu)
=Z_J&#x27;Z_K+a&#x27;(Z_J+Z_K)+\|a\|^2.
\]</div>{% endraw %}
<p>The conditional mean of the linear term is zero. To prove the pair limit, we must also control the variance and higher moments of {% raw %}<span class="math inline">\(Z_J&#x27;Z_K\)</span>{% endraw %}. Both can be calculated directly from the empirical distribution.</p>
<p>For {% raw %}<span class="math inline">\(H=Z_J&#x27;Z_K\)</span>{% endraw %}, centering and standardization give</p>
{% raw %}<div class="math display">\[
E_\pi H=-\frac{p}{n-1},\qquad
E_\pi H^2=\frac{n^2p-\sum_i\|Z_i\|^4}{n(n-1)}.
\]</div>{% endraw %}
<p>The {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} empirical moment bound implies {% raw %}<span class="math inline">\(n^{-2}\sum_i\|Z_i\|^4=o_P(1)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\operatorname{Var}_\pi(H)\xrightarrow{P}p\)</span>{% endraw %}. It also bounds the conditional {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Conditional independence across repetitions then gives</p>
{% raw %}<div class="math display">\[
V_n=\frac1{\sqrt{pR}}\sum_{r=1}^R
\left(Z_{J_r}&#x27;Z_{K_r}+\frac{p}{n-1}\right)
\Rightarrow N(0,1)
\]</div>{% endraw %}
<p>conditionally in probability. The <a href="#10-356-appendix-pair-moments">appendix</a> proves the diagonal and Lyapunov bounds using only the stated {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment condition.</p>
<p><span id="10-356-add-back-a-candidate-mean"></span></p>
<p>Substituting the centered pair sum gives the exact decomposition</p>
{% raw %}<div class="math display">\[
\begin{aligned}
T_U(\mu)
&amp;=V_n+L_n(a)
+\sqrt{\frac{R}{p}}
\left(\|a\|^2-\frac{p}{n-1}\right),\\
L_n(a)
&amp;=\frac1{\sqrt{pR}}\sum_{r=1}^{R}
a&#x27;(Z_{J_r}+Z_{K_r}).
\end{aligned}
\]</div>{% endraw %}
<p>For the linear term, {% raw %}<span class="math inline">\(\mathbb{E}_\pi[Z_JZ_K&#x27;]=-I_p/(n-1)\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\operatorname{Var}_\pi\{L_n(a)\}
=\frac{2(n-2)}{p(n-1)}\|a\|^2.
\]</div>{% endraw %}
<p>Under the null, {% raw %}<span class="math inline">\(a=O_p(n^{-1/2})\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(L_n(a)=o_p(1)\)</span>{% endraw %}. The conditional mean is {% raw %}<span class="math inline">\(O_p(\sqrt{R}/n)\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\sqrt{R}/n\to0\)</span>{% endraw %} completes the U-type proof, including the statistic evaluated at {% raw %}<span class="math inline">\(\mu=\overline X\)</span>{% endraw %}, for which {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}.</p>
<p>One must retain the conditional mean when using an uncentered resampled sum. In particular,</p>
{% raw %}<div class="math display">\[
\frac1{\sqrt{R}}\sum_{r=1}^{R}(X_{I_r}-\mu_0)
=O_p(1)+\sqrt{R}(\overline X-\mu_0)
=O_p(1)+O_p\!\left(\sqrt{R/n}\right).
\]</div>{% endraw %}
<p>The second term may diverge under the U-type restriction. Multiplying by the sample-mean error gives {% raw %}<span class="math inline">\(O_p(n^{-1/2})+O_p(\sqrt R/n)=o_p(1)\)</span>{% endraw %}. Thus the recentering remainder vanishes under {% raw %}<span class="math inline">\(\sqrt R/n\to0\)</span>{% endraw %}.</p>
<p><span id="10-356-a-scalar-numerical-identity"></span></p>
<!-- original-paper-scope: two-observation-example
An added degenerate numerical example. The general conditional variance and moment calculations remain visible.

At $p=1$ and $n=2$, the empirically standardized observations are $1$ and $-1$. Every distinct-pair product equals $-1$, so its conditional variance is zero. The diagonal bound is what excludes such degeneracy asymptotically.
-->
<p><strong>Local power and the choice of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}.</strong> Suppose the hypotheses of the theorem continue to hold along local alternatives. If {% raw %}<span class="math inline">\(\mu_0-\mu=hR^{-1/2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde T_M(\mu)\)</span>{% endraw %} converges in distribution to {% raw %}<span class="math inline">\(\mathcal{N}(\Sigma^{-1/2}h,I_p)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T_M(\mu)\)</span>{% endraw %} has a noncentral chi-square limit with noncentrality {% raw %}<span class="math inline">\(h&#x27;\Sigma^{-1}h\)</span>{% endraw %}. For the pair statistic, take {% raw %}<span class="math inline">\(\mu_0-\mu=hR^{-1/4}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(R^{1/4}/\sqrt n\to0\)</span>{% endraw %}, the original sample error is negligible at this scale, and the decomposition gives</p>
{% raw %}<div class="math display">\[
T_U(\mu)\Rightarrow
\mathcal{N}\left(\frac{h&#x27;\Sigma^{-1}h}{\sqrt p},1\right).
\]</div>{% endraw %}
<p>The quadratic form {% raw %}<span class="math inline">\(h&#x27;\Sigma^{-1}h\)</span>{% endraw %} is positive for every {% raw %}<span class="math inline">\(h\ne0\)</span>{% endraw %}, so the pair test rejects in the upper tail, {% raw %}<span class="math inline">\(T_U(\mu)&gt;z_{1-\alpha}\)</span>{% endraw %}, even for a two-sided equality hypothesis. The mean test uses {% raw %}<span class="math inline">\(T_M(\mu)&gt;\chi^2_{p,1-\alpha}\)</span>{% endraw %}.</p>
<!-- original-paper-scope: cross-paper-local-power-comparison
A comparison with the separate September post; Leung's local-power calculation remains visible.

For $b=2$, September writes the U-type shift as $hR^{-1/4}/\sqrt2$; the expression here uses $hR^{-1/4}$. This difference and the factor $\sqrt p$ in the statistic account for the local-limit constants.
-->
<p>The detection rates are {% raw %}<span class="math inline">\(R^{-1/2}\)</span>{% endraw %} for M and {% raw %}<span class="math inline">\(R^{-1/4}\)</span>{% endraw %} for U. Leung’s practical rule chooses the counts separately by minimizing the following sums of a null-drift order and a detection scale:</p>
{% raw %}<div class="math display">\[
g_M(R)=\sqrt{R/n}+R^{-1/2},
\qquad
g_U(R)=\frac{\sqrt{R}}n+R^{-1/4}.
\]</div>{% endraw %}
<p>Treating {% raw %}<span class="math inline">\(R\)</span>{% endraw %} as a positive real variable, minimizing these expressions, and rounding the minimizers to integers gives</p>
{% raw %}<div class="math display">\[
R^M\approx\sqrt n,
\qquad
R^U\approx(n/2)^{4/3}.
\]</div>{% endraw %}
<p>The resulting detection rates are {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-1/3}\)</span>{% endraw %}. These counts balance the displayed drift and detection orders.</p>
<!-- original-paper-scope: cross-paper-repetition-comparison
Comparison with a separate repetition-count criterion; the source paper's practical rule and its derivation remain visible.

A criterion based on size error, such as the [earlier comparison]({post:10-266}#resampling-matched-size-comparison), balances different quantities and can select different counts.
-->
<p><span id="moment-inequalities"></span></p>
<h3 data-note-section="3" id="10-356-uniform-moment-tests">3. Moment inequalities and uniform asymptotic size</h3>
<p>Throughout this section, retain the empirical moment and covariance conditions, with {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt R/n\to0\)</span>{% endraw %}. The original mean remains root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} consistent along the sequences considered.</p>
<p>Consider first the scalar null {% raw %}<span class="math inline">\(H_0:\mu_0\leq0\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(\widehat\sigma^2=\widehat\Sigma\)</span>{% endraw %}. The leading term in the conditional mean of {% raw %}<span class="math inline">\(T_U(0)\)</span>{% endraw %} is proportional to {% raw %}<span class="math inline">\(\sqrt{R}\mu_0^2\)</span>{% endraw %}, so it increases under fixed positive and fixed negative means. Means {% raw %}<span class="math inline">\(\mu_0=-c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_0=c\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, produce the same leading quadratic term. The correction replaces {% raw %}<span class="math inline">\(T_U(0)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\overline X&lt;0\)</span>{% endraw %}.</p>
<p>The correction is easiest to understand as an exact difference between two statistics computed from the same pairs:</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\widehat\lambda
&amp;=T_U(0)-T_U(\overline X)\\
&amp;=\frac{\overline X}{\widehat\sigma^2\sqrt{R}}
\sum_{r=1}^{R}(X_{J_r}+X_{K_r})
-\frac{\sqrt{R}\,\overline X^2}{\widehat\sigma^2}.
\end{aligned}
\]</div>{% endraw %}
<p>Define</p>
{% raw %}<div class="math display">\[
\begin{aligned}
Q_n
&amp;=T_U(0)-\widehat\lambda\,\mathbf1\{\overline X&lt;0\}\\
&amp;=T_U(\overline X)+\widehat\lambda\,\mathbf1\{\overline X\geq0\}\\
&amp;=\begin{cases}
T_U(\overline X),&amp;\overline X&lt;0,\\
T_U(0),&amp;\overline X\geq0.
\end{cases}
\end{aligned}
\]</div>{% endraw %}
<p>For the scalar test, reject when {% raw %}<span class="math inline">\(Q_n&gt;z_{1-\alpha}\)</span>{% endraw %}, or use the conditional quantile of {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %}.</p>
<p>The sign may remain uncertain when the mean is close to zero. To see why this is harmless, center the resampled sum in the correction. With</p>
{% raw %}<div class="math display">\[
S_n=\frac1{\widehat\sigma\sqrt{R}}
\sum_{r=1}^{R}
\{(X_{J_r}-\overline X)+(X_{K_r}-\overline X)\},
\]</div>{% endraw %}
<p>we have {% raw %}<span class="math inline">\(\mathbb{E}_\pi S_n=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Var}_\pi(S_n)=2(n-2)/(n-1)\)</span>{% endraw %}, and the exact identity</p>
{% raw %}<div class="math display">\[
\widehat\lambda
=\frac{\sqrt{R}\,\overline X^2}{\widehat\sigma^2}
+\frac{\overline X}{\widehat\sigma}S_n.
\]</div>{% endraw %}
<p>For a sequence of population means satisfying {% raw %}<span class="math inline">\(R^{1/4}\mu_0\to d\in\mathbb R\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-consistency gives</p>
{% raw %}<div class="math display">\[
R^{1/4}\overline X
=R^{1/4}\mu_0
+\frac{R^{1/4}}{\sqrt n}\sqrt n(\overline X-\mu_0)
=d+o_p(1).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(d&lt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P(\overline X&lt;0)\to1\)</span>{% endraw %}, so the procedure uses {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %} with probability tending to one. If {% raw %}<span class="math inline">\(d=0\)</span>{% endraw %}, the sign may remain uncertain, but {% raw %}<span class="math inline">\(\widehat\lambda=o_p(1)\)</span>{% endraw %}: the two statistics differ by {% raw %}<span class="math inline">\(o_p(1)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(d&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P(\overline X&gt;0)\to1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\lambda\xrightarrow{P}d^2/\sigma^2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\widehat\sigma^2\xrightarrow{P}\sigma^2\)</span>{% endraw %}. The test then has limiting rejection probability</p>
{% raw %}<div class="math display">\[
1-\Phi\left(z_{1-\alpha}-\frac{d^2}{\sigma^2}\right)&gt;\alpha.
\]</div>{% endraw %}
<p>A fixed positive mean gives power tending to one. At a fixed negative mean, the procedure uses the centered statistic with probability tending to one, so rejection tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} even in the interior of the null.</p>
<p>The boundary argument can also be checked directly. Under {% raw %}<span class="math inline">\(\mu_0\leq0\)</span>{% endraw %}, on the event {% raw %}<span class="math inline">\(\overline X\geq0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
0\leq\overline X\leq|\overline X-\mu_0|.
\]</div>{% endraw %}
<p>Substituting this inequality into the correction identity gives</p>
{% raw %}<div class="math display">\[
|\widehat\lambda|\mathbf1\{\overline X\geq0\}
\leq\frac{\sqrt{R}}{\widehat\sigma^2}
|\overline X-\mu_0|^2
+\frac{|\overline X-\mu_0|}{\widehat\sigma}|S_n|
=o_p(1).
\]</div>{% endraw %}
<p>The bound controls the error on the event where the sign rule could select the wrong center. It therefore proves validity without requiring consistent sign estimation near zero.</p>
<p><strong>Several inequalities and uniform size.</strong> Now test {% raw %}<span class="math inline">\(\mu_{0k}\leq0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(k=1,\ldots,p\)</span>{% endraw %}. Standardize each coordinate by {% raw %}<span class="math inline">\(\widehat\sigma_k^2=\widehat\Sigma_{kk}\)</span>{% endraw %}. A general whitening transformation need not preserve the componentwise restriction {% raw %}<span class="math inline">\(\mu_0\leq0\)</span>{% endraw %}. To make the normalization explicit, use the scalar U-type statistic separately for each coordinate:</p>
{% raw %}<div class="math display">\[
U_{n,k}(t)=\frac1{\widehat\sigma_k^2\sqrt{R}}
\sum_{r=1}^{R}(X_{J_r,k}-t)(X_{K_r,k}-t).
\]</div>{% endraw %}
<p>All coordinates use the same pairs. This convention gives unit limiting marginal variance; including a common factor {% raw %}<span class="math inline">\(p^{-1/2}\)</span>{% endraw %} in every coordinate statistic, correction, and critical value gives the same rejection event. Let</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\widehat\lambda_k&amp;=U_{n,k}(0)-U_{n,k}(\overline X_k),\\
Q_n&amp;=\max_{1\leq k\leq p}
\{U_{n,k}(\overline X_k)
+\widehat\lambda_k\mathbf1\{\overline X_k\geq0\}\},\\
\widetilde Q_n&amp;=\max_{1\leq k\leq p}U_{n,k}(\overline X_k).
\end{aligned}
\]</div>{% endraw %}
<p>Reject when {% raw %}<span class="math inline">\(Q_n&gt;c_{n,1-\alpha}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(c_{n,1-\alpha}\)</span>{% endraw %} is the conditional {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %}-quantile of {% raw %}<span class="math inline">\(\widetilde Q_n\)</span>{% endraw %}. The argument below uses this ideal quantile. For implementation, estimate it from {% raw %}<span class="math inline">\(L\)</span>{% endraw %} independent batches of {% raw %}<span class="math inline">\(R\)</span>{% endraw %} pairs each, keeping the pairs common across coordinates within a batch; {% raw %}<span class="math inline">\(L\to\infty\)</span>{% endraw %} removes simulation error as in the <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#ordering-free-calibration-and-power">earlier calibration procedure</a>.</p>
<p>The covariance matrix of the joint Gaussian limit characterizes the asymptotic dependence between the coordinate statistics. Put {% raw %}<span class="math inline">\(Z_{i,k}^{\mathrm{s}}=(X_{i,k}-\overline X_k)/\widehat\sigma_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\rho_{k\ell}=n^{-1}\sum_i Z_{i,k}^{\mathrm{s}}Z_{i,\ell}^{\mathrm{s}}\)</span>{% endraw %}. The all-pairs calculation gives</p>
{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\mathbb{E}_\pi
\big[(Z_{J,k}^{\mathrm{s}}Z_{K,k}^{\mathrm{s}})
(Z_{J,\ell}^{\mathrm{s}}Z_{K,\ell}^{\mathrm{s}})\big]\\
&amp;\qquad=\frac{n^2\widehat\rho_{k\ell}^{2}
-\sum_i(Z_{i,k}^{\mathrm{s}}Z_{i,\ell}^{\mathrm{s}})^2}{n(n-1)}.
\end{aligned}
\]</div>{% endraw %}
<p>The normalized diagonal contribution vanishes by the same maximum bound used above. Thus the centered coordinate vector converges conditionally to {% raw %}<span class="math inline">\(G\sim\mathcal{N}(0,\Omega)\)</span>{% endraw %}, where</p>
{% raw %}<div class="math display">\[
\Omega_{k\ell}=\rho_{k\ell}^2,
\qquad
\rho_{k\ell}=\frac{\Sigma_{k\ell}}{\sqrt{\Sigma_{kk}\Sigma_{\ell\ell}}}.
\]</div>{% endraw %}
<p>The limit need not have independent coordinates. Positive definiteness of the correlation matrix implies positive definiteness of its entrywise square {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and the Gaussian maximum has a continuous, strictly increasing CDF. Using the same resampled pairs across coordinates yields the limiting covariance matrix {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. Resampling each coordinate independently would instead remove the off-diagonal entries of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}.</p>
<p>Under any null sequence for which the assumptions hold, the scalar correction bound applies to every coordinate. Since {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is fixed,</p>
{% raw %}<div class="math display">\[
|Q_n-\widetilde Q_n|
\leq\max_k\left\{|\widehat\lambda_k|
\mathbf1\{\overline X_k\geq0\}\right\}
=o_p(1).
\]</div>{% endraw %}
<p>Conditional CDF convergence gives convergence of the reference quantile. Continuity of the Gaussian maximum’s distribution implies that replacing {% raw %}<span class="math inline">\(\widetilde Q_n\)</span>{% endraw %} by {% raw %}<span class="math inline">\(Q_n=\widetilde Q_n+o_p(1)\)</span>{% endraw %} does not change the limiting rejection probability. Hence the rejection probability tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Along alternatives with {% raw %}<span class="math inline">\(R^{1/4}\mu_{0k}\to d_k\in\mathbb R\)</span>{% endraw %}, the limit becomes</p>
{% raw %}<div class="math display">\[
\max_k\left\{G_k+
\frac{d_k^2}{\Sigma_{kk}}\mathbf1\{d_k&gt;0\}\right\}.
\]</div>{% endraw %}
<p>Any strictly positive {% raw %}<span class="math inline">\(d_k\)</span>{% endraw %} produces power above {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. A fixed positive coordinate gives consistency. Means converging to the boundary from the negative side contribute no limiting shift.</p>
<p>For uniform size over a nonempty null class {% raw %}<span class="math inline">\(\mathcal P_0\)</span>{% endraw %}, the assumptions must hold along every sequence {% raw %}<span class="math inline">\(P_n\in\mathcal P_0\)</span>{% endraw %}. Require {% raw %}<span class="math inline">\(\sqrt n(\overline X-\mu_0(P_n))=O_{P_n}(1)\)</span>{% endraw %}, the empirical {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment bound for a common {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and covariance convergence to a positive definite limit along that sequence, with common lower and upper eigenvalue bounds. These are the sequencewise premises of <a href="https://arxiv.org/html/2002.02097v4#S5.SS2">Leung’s Theorem 2</a>. If uniform size control failed, some sequence would have rejection probabilities exceeding {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} by a fixed amount. The preceding proof applies along that sequence and gives a contradiction. A fixed member of the class has limiting rejection probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, so</p>
{% raw %}<div class="math display">\[
\sup_{P\in\mathcal P_0}P\{Q_n&gt;c_{n,1-\alpha}\}
\longrightarrow\alpha.
\]</div>{% endraw %}
<p>The correction bound also covers null sequences approaching zero too quickly for consistent sign estimation.</p>
<!-- original-paper-scope: general-partial-identification-inversion
An additional parameter-indexed inversion theorem, whole-set coverage discussion, and grid Bonferroni procedure. The paper's mean confidence interval and moment-inequality test remain visible.

## Inverting the test in a partially identified model {#identified-set-inversion}

Let $W_i$ denote the observations and let $m(W_i,\vartheta)\in\mathbb R^p$ be a measurable moment vector with common mean $\mu_P(\vartheta)=E_Pm(W_i,\vartheta)$. The parameter is restricted by

$$
\Theta_I(P)=\{\vartheta\in\Theta:\mu_P(\vartheta)\leq0\},
$$

where inequalities hold coordinatewise. This is the identified set for a model whose observable implications are exactly these moment restrictions. If the restrictions are only necessary implications of a richer model, it is an outer set instead.

At each $\vartheta$, set $X_i=m(W_i,\vartheta)$, compute the corrected statistic $Q_n(\vartheta)$ and its conditional critical value, and define

$$
C_n=\{\vartheta\in\Theta:Q_n(\vartheta)\leq c_{n,1-\alpha}(\vartheta)\}.
$$

Assume the procedure and the events below are measurable. The randomization used for resampling is included in all probabilities.

::: {.proposition #moment-inversion-coverage}
Suppose the empirical-moment, covariance, and original-mean conditions of the uniform-size argument hold along every sequence $P_n$ and $\vartheta_n\in\Theta_I(P_n)$, with fixed dimension, a common moment exponent, and covariance eigenvalues bounded above and away from zero. Then

$$
\liminf_{n\to\infty}\inf_P\inf_{\vartheta\in\Theta_I(P)}
P\{\vartheta\in C_n\}\geq1-\alpha,
$$

where $P$ ranges over the specified class with nonempty identified set.
:::

For each fixed $P$ and $\vartheta\in\Theta_I(P)$, noncoverage is exactly rejection of a true moment-inequality hypothesis. If the displayed uniform bound failed, a sequence $(P_n,\vartheta_n)$ would have rejection probabilities exceeding $\alpha$ by a fixed amount. Applying the sequencewise size argument to $m(W_i,\vartheta_n)$ contradicts that excess.

This conclusion covers each true parameter uniformly over the model class. Coverage of the entire set would instead require

$$
\liminf_n\inf_P P\{\Theta_I(P)\subseteq C_n\}\geq1-\alpha.
$$

The latter event requires all true parameter values to pass their tests simultaneously. Two independent tests, each rejecting its true hypothesis with probability $\alpha$, already give probability $1-(1-\alpha)^2>\alpha$ of at least one rejection. Pointwise inversion therefore does not establish whole-set coverage. For a finite prespecified parameter grid of size $N$, testing each value at level $\alpha/N$ gives simultaneous coverage on that grid by a union bound. A continuum requires an additional simultaneous calibration argument over $\vartheta$.
-->
<h3 data-note-section="4" id="10-356-extensions-and-limits">4. Estimated scores and alternative convergence rates</h3>
<p>The conditional calculations depend on empirical moments and the sample-mean error, so they can also be applied to estimated scores. Suppose an estimator admits</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta-\beta_0)
=\frac1{\sqrt n}\sum_{i=1}^n
\psi(W_i;\beta_0,\widehat\theta)+o_p(1).
\]</div>{% endraw %}
<p>To test {% raw %}<span class="math inline">\(H_0:\beta_0=\beta\)</span>{% endraw %}, form {% raw %}<span class="math inline">\(X_i(\beta)=\psi(W_i;\beta,\widehat\theta)\)</span>{% endraw %} and apply the resampling test with hypothesized mean zero. At the true parameter, the displayed expansion and {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-consistency imply that the normalized score sum {% raw %}<span class="math inline">\(n^{-1/2}\sum_i\psi(W_i;\beta_0,\widehat\theta)\)</span>{% endraw %} is {% raw %}<span class="math inline">\(O_p(1)\)</span>{% endraw %}. One must also verify convergence of the empirical score covariance and its {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment bound after estimating {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Smoothness and control of the first-stage error can establish these conditions; consistency of the nuisance estimator alone does not establish all of them.</p>
<p>For example, write {% raw %}<span class="math inline">\(\widehat Q=n^{-1}\sum_iD_iD_i&#x27;\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(e_j\)</span>{% endraw %} select regression coefficient {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(w_{ji}=e_j&#x27;\widehat Q^{-1}D_i\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
\widehat\beta_j=\frac1n\sum_iw_{ji}Y_i,
\qquad
X_i(\beta_j)=w_{ji}Y_i-\beta_j,
\qquad
\overline X(\beta_j)=\widehat\beta_j-\beta_j.
\]</div>{% endraw %}
<p>This is the paper’s regression construction. The weights use the full sample, and the resampling is applied to the resulting contributions. The same principle applies to the paper’s spillover example, where a contrast of exposure-cell means can be estimated from observed local neighborhoods even when the path distances needed for a conventional variance estimate are unavailable. That application requires identification of the contrast and verification of the exposure-cell probability conditions needed for the estimator’s convergence rate and moment bounds.</p>
<p><span id="10-356-what-slower-original-sample-rates-would-require"></span></p>
<p>For a slower known rate, write {% raw %}<span class="math inline">\(\|\overline X-\mu_0\|=O_p(\rho_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\rho_n\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\rho_n\ge n^{-1/2}\)</span>{% endraw %}. Retain the covariance and empirical moment assumptions. The fixed-draw restrictions are</p>
{% raw %}<div class="math display">\[
R\rho_n^2\to0\quad\text{for M},
\qquad
R\rho_n^4\to0\quad\text{for U}.
\]</div>{% endraw %}
<p>Leung’s Remark 4 allows a known slower convergence rate; the restrictions above follow by substituting that rate into the mean and pair remainders. For U, the second condition and {% raw %}<span class="math inline">\(\rho_n\ge n^{-1/2}\)</span>{% endraw %} also imply {% raw %}<span class="math inline">\(\sqrt R/n\to0\)</span>{% endraw %}, which removes the finite-population mean. Consistency removes the random linear term.</p>
<!-- original-paper-scope: external-common-shock-example
Reference to an independently added counterexample in another post. The consistency requirement and the known-rate remainder calculation remain visible.

A persistent additive common shock fails this consistency requirement, as the [August example]({post:10-235}#10-235-what-ordering-free-does-not-mean) shows.
-->
<p>The resampling draws remain part of the test. Under a null, independent runs need not agree asymptotically: conditional rejection probabilities tend to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. A fixed seed makes a run reproducible. Combining runs requires a separately calibrated rule, such as the confidence-function procedure discussed by Leung and Song; it is distinct from simulating a critical value more accurately.</p>
<h3 data-note-section="5" id="10-356-appendix-pair-moments">5. Appendix: the distinct-pair moment calculation</h3>
<p><span id="10-356-the-distinct-pair-second-moment"></span></p>
<p>Let {% raw %}<span class="math inline">\(H=Z_J&#x27;Z_K\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(J\ne K\)</span>{% endraw %}. Since the centered observations sum to zero,</p>
{% raw %}<div class="math display">\[
\sum_{j\ne k}Z_j&#x27;Z_k
=\left\|\sum_jZ_j\right\|^2-\sum_j\|Z_j\|^2
=-np,
\qquad
\mathbb{E}_\pi H=-\frac{p}{n-1}.
\]</div>{% endraw %}
<p>The centered product has a nonzero finite-population mean. For its second moment, sum over all ordered pairs and then subtract the diagonal. The all-pairs sum is</p>
{% raw %}<div class="math display">\[
\sum_{j,k}(Z_j&#x27;Z_k)^2
=\operatorname{tr}\left\{
\left(\sum_jZ_jZ_j&#x27;\right)^2\right\}
=n^2p.
\]</div>{% endraw %}
<p>There are {% raw %}<span class="math inline">\(n(n-1)\)</span>{% endraw %} ordered distinct pairs, so</p>
{% raw %}<div class="math display">\[
\mathbb{E}_\pi H^2
=\frac{n^2p-\sum_j\|Z_j\|^4}{n(n-1)}.
\]</div>{% endraw %}
<p>A fourth power appears here, although the theorem assumes only a {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment. We can bound {% raw %}<span class="math inline">\(n^{-2}\sum_j\|Z_j\|^4\)</span>{% endraw %} using the maximum squared norm and the empirical second moment. It suffices to rule out a single observation contributing a nonvanishing proportion of {% raw %}<span class="math inline">\(\sum_j\|Z_j\|^2\)</span>{% endraw %}. Indeed,</p>
{% raw %}<div class="math display">\[
\frac{\max_j\|Z_j\|^2}{n}
\leq n^{-\delta/(2+\delta)}
M_{2+\delta,n}^{2/(2+\delta)}=o_p(1),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\frac1{n^2}\sum_j\|Z_j\|^4
\leq\frac{\max_j\|Z_j\|^2}{n}
\left(\frac1n\sum_j\|Z_j\|^2\right)
=p\frac{\max_j\|Z_j\|^2}{n}=o_p(1).
\]</div>{% endraw %}
<p>It follows that {% raw %}<span class="math inline">\(\operatorname{Var}_\pi(H)\xrightarrow{P}p\)</span>{% endraw %}. This explains the normalization {% raw %}<span class="math inline">\(\sqrt{pR}\)</span>{% endraw %}.</p>
<p><span id="10-356-the-moment-bound-needed-for-the-pair-clt"></span></p>
<p>The same moment condition also gives the CLT. Cauchy–Schwarz bounds each inner product by a product of norms. Including the diagonal terms then gives an upper bound that factors into a product of empirical moments:</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}_\pi|H|^q
&amp;\leq\frac1{n(n-1)}\sum_{j\ne k}\|Z_j\|^q\|Z_k\|^q\\
&amp;\leq\frac{n}{n-1}M_{q,n}^2=O_p(1),
\qquad q=2+\delta.
\end{aligned}
\]</div>{% endraw %}
<p>Centering {% raw %}<span class="math inline">\(H\)</span>{% endraw %} preserves this bound. Its conditional Lyapunov ratio is {% raw %}<span class="math inline">\(O_p(R^{-\delta/2})\)</span>{% endraw %}, so</p>
{% raw %}<div class="math display">\[
V_n=\frac1{\sqrt{pR}}\sum_{r=1}^{R}
\left(Z_{J_r}&#x27;Z_{K_r}+\frac{p}{n-1}\right)
\Rightarrow\mathcal{N}(0,1)
\]</div>{% endraw %}
<p>The convergence holds conditionally in probability. The CLT uses conditional independence across repetitions; the two indices within each pair are sampled without replacement.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-leung_dependencerobust_2022" class="csl-entry" role="listitem">
Leung, Michael P. 2022. <span>“Dependence‐robust Inference Using Resampled Statistics.”</span> <em>Journal of Applied Econometrics</em> 37 (2): 270–85. <a href="https://doi.org/10.1002/jae.2865">https://doi.org/10.1002/jae.2865</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Resampled Statistics: Size and Local Power</a> · Additional reading: <a href="{% post_url 2024-07-29-randomized-saturation-designs-and-their-optimal-allocation %}">Randomized Saturation Designs and Their Optimal Allocation</a></p></nav>
</div>
