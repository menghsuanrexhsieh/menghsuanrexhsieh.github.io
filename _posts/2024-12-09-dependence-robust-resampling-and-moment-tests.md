---
layout: "post"
title: "Dependence-Robust Resampling and Moment Tests"
date: "2024-12-09"
tags: ["econometrics", "networks"]
excerpt: "Resampling produces an asymptotically normal statistic conditional on the data; the original estimation error determines the admissible growth rate of the resampling count."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2023/10/07/pointwise-and-uniform-coverage-in-moment-inequality-models/", "/2024/12/09/dependence-robust-moment-tests/", "/2024/12/26/resampled-moment-inequality-tests/", "/2025/01/12/limit-theory-for-dependence-robust-tests/", "/2025/01/28/technical-bounds-for-dependence-robust-inference/"]
---

<div class="note-content" markdown="0">

<p>Suppose that a sample mean is {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-consistent, but its sampling variance is difficult to estimate. This can happen with network data: the observations may be informative about a population mean even when the links needed to estimate their covariances are unavailable. <span class="citation" data-cites="leung_dependencerobust_2022"><a href="#ref-leung_dependencerobust_2022" role="doc-biblioref">Leung (2022)</a></span> constructs a test by drawing observations at random from the realized sample. Conditional on that sample, the draws are independent across repetitions, with conditional moments determined by the empirical distribution. The proof establishes how quickly {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} can grow while the contribution of {% raw %}<span class="math inline">\(\overline X-\mu_0\)</span>{% endraw %} remains asymptotically negligible.</p>

<p>The proof separates the resampling variation from the original estimation error. Conditional on the data, the centered resampled statistic satisfies an i.i.d. central limit theorem. The conditional mean of the original statistic depends on {% raw %}<span class="math inline">\(\overline X-\mu_0\)</span>{% endraw %}, and the restriction on {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} makes this term asymptotically negligible. For the U-type statistic, cancellation of the linear term makes this dependence quadratic, permitting a faster growth rate for {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}. The moment-inequality procedure additionally recenters each coordinate statistic when its sample mean is negative.</p>

<h3 data-note-section="1" id="10-356-the-main-limit-theorem">1. Conditional resampling and the mean-type central limit theorem</h3>

<p>Let {% raw %}<span class="math inline">\(\mathbf X=(X_1,\ldots,X_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X_i\in\mathbb R^m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m\)</span>{% endraw %} is fixed. The observations may be dependent, and their distribution may vary with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[
\overline X=\frac1n\sum_{i=1}^nX_i,
\qquad
\widehat\Sigma=\frac1n\sum_{i=1}^n
(X_i-\overline X)(X_i-\overline X)'.
\]</div>{% endraw %}

<p>Following the paper, let {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} be the number of resampling repetitions. For each {% raw %}<span class="math inline">\(r=1,\ldots,R_n\)</span>{% endraw %}, draw a uniform random permutation {% raw %}<span class="math inline">\(\pi_r\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\{1,\ldots,n\}\)</span>{% endraw %}, independently across repetitions and independently of the data. Set {% raw %}<span class="math inline">\(I_r=\pi_r(1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_r=\pi_r(1)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(K_r=\pi_r(2)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(I_r\)</span>{% endraw %} is a uniform observation index and {% raw %}<span class="math inline">\((J_r,K_r)\)</span>{% endraw %} is a uniform ordered pair of distinct indices. Observations and pairs can be drawn again at another repetition. There is no requirement that {% raw %}<span class="math inline">\(R_n\leq n\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathbb E_\pi\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Var}_\pi\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Pr_\pi\)</span>{% endraw %} for expectation, variance, and probability over these draws conditional on {% raw %}<span class="math inline">\(\mathbf X\)</span>{% endraw %}.</p>

<p>For a candidate mean {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, the mean-type and U-type statistics are</p>

{% raw %}<div class="math display">\[
\widetilde T_M(\mu)
=\frac1{\sqrt{R_n}}\sum_{r=1}^{R_n}
\widehat\Sigma^{-1/2}(X_{I_r}-\mu),
\qquad
T_M(\mu)=\|\widetilde T_M(\mu)\|^2,
\]</div>{% endraw %}

{% raw %}<div class="math display">\[
T_U(\mu)
=\frac1{\sqrt{mR_n}}\sum_{r=1}^{R_n}
(X_{J_r}-\mu)'\widehat\Sigma^{-1}(X_{K_r}-\mu).
\]</div>{% endraw %}

<p>Here and below, {% raw %}<span class="math inline">\(\|\cdot\|\)</span>{% endraw %} denotes the Euclidean norm for vectors and the induced operator norm for matrices; the inverse square root is symmetric. All expressions involving {% raw %}<span class="math inline">\(\widehat\Sigma^{-1}\)</span>{% endraw %} are defined on its nonsingularity event; the assumptions below make this event have probability tending to one.</p>

<div id="dependence-resampling" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose that, for some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and a positive definite matrix {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sqrt n(\overline X-\mu_0)=O_p(1),
\qquad \widehat\Sigma\xrightarrow{p}\Sigma,
\qquad \frac1n\sum_{i=1}^n\|X_i\|^{2+\delta}=O_p(1).
\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(R_n\to\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_n/n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\widetilde T_M(\mu_0)\Rightarrow\mathcal N(0,I_m)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_M(\mu_0)\Rightarrow\chi_m^2\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(R_n\to\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt{R_n}/n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T_U(\mu_0)\Rightarrow\mathcal N(0,1)\)</span>{% endraw %}. The corresponding limits also hold with {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}. For each scalar statistic, its conditional CDF converges in probability, uniformly over the evaluation point, to the stated continuous limit CDF.</p>
</div>

<p>The theorem only requires boundedness in probability of {% raw %}<span class="math inline">\(\sqrt n(\overline X-\mu_0)\)</span>{% endraw %}. It does not require a Gaussian limit for that mean. Nor does {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} denote its long-run covariance. The role of {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} is to standardize the observations drawn from the empirical distribution. The distinction matters because the cross-observation covariances that make conventional inference difficult are absent from this conditional variance calculation.</p>

<span id="10-356-whiten-the-empirical-distribution-first"></span>
<p>Define the empirically centered and standardized observations:</p>

{% raw %}<div class="math display">\[
Z_i=\widehat\Sigma^{-1/2}(X_i-\overline X),
\qquad
\frac1n\sum_iZ_i=0,
\qquad
\frac1n\sum_iZ_iZ_i'=I_m.
\]</div>{% endraw %}

<p>These are exact identities for the realized data. Consequently, a uniform draw {% raw %}<span class="math inline">\(Z_I\)</span>{% endraw %} has conditional mean zero and covariance {% raw %}<span class="math inline">\(I_m\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(q=2+\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_{q,n}=n^{-1}\sum_i\|Z_i\|^q\)</span>{% endraw %}. The moment and covariance assumptions imply {% raw %}<span class="math inline">\(M_{q,n}=O_p(1)\)</span>{% endraw %}: Jensen’s inequality bounds {% raw %}<span class="math inline">\(\|\overline X\|^q\)</span>{% endraw %} by the empirical {% raw %}<span class="math inline">\(q\)</span>{% endraw %}th moment, and {% raw %}<span class="math inline">\(\|\widehat\Sigma^{-1/2}\|=O_p(1)\)</span>{% endraw %}. The conditional Lyapunov bound is therefore</p>

{% raw %}<div class="math display">\[
\sum_{r=1}^{R_n}\mathbb E_\pi
\left\|\frac{Z_{I_r}}{\sqrt{R_n}}\right\|^{2+\delta}
=R_n^{-\delta/2}M_{2+\delta,n}=o_p(1).
\]</div>{% endraw %}

<p>Conditional independence across repetitions now gives the Gaussian limit for {% raw %}<span class="math inline">\(R_n^{-1/2}\sum_rZ_{I_r}\)</span>{% endraw %}. More precisely, the conditional characteristic function converges in probability to the Gaussian characteristic function. One can justify this by taking an arbitrary subsequence, extracting a further subsequence along which the Lyapunov bound tends to zero almost surely, and applying the ordinary triangular-array CLT to the resulting fixed arrays. Since conditional characteristic functions are bounded by one, taking expectations also gives the unconditional limit.</p>

<span id="10-356-the-mean-statistic-in-one-line"></span>
<p>It remains to replace the empirical center by the hypothesized population mean. Adding and subtracting {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\widetilde T_M(\mu_0)
=\underbracket{\frac1{\sqrt{R_n}}\sum_{r=1}^{R_n}Z_{I_r}}_{\text{centered resampling sum}}
+\underbracket{\sqrt{R_n}\,\widehat\Sigma^{-1/2}
(\overline X-\mu_0)}_{\text{conditional mean}}.
\]</div>{% endraw %}

<p>The second term is {% raw %}<span class="math inline">\(O_p(\sqrt{R_n/n})\)</span>{% endraw %}, which explains the restriction {% raw %}<span class="math inline">\(R_n/n\to0\)</span>{% endraw %}. This completes the mean-statistic proof. The conditionally centered term is asymptotically normal by a conditional i.i.d. CLT; the assumption about dependence enters through the order of the conditional mean. Squaring the norm gives the chi-square limit. Continuity of the limit CDF implies that pointwise convergence of the conditional CDF is uniform over its argument: a finite grid controls the central region by monotonicity, and two tail points control the rest. This uniformity over a CDF argument is distinct from uniformity over data-generating processes, which will matter for moment inequalities.</p>

<p>For a scalar mean, inversion produces the particularly simple interval</p>

{% raw %}<div class="math display">\[
\overline X^*\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{\widehat\Sigma}{R_n}},
\qquad
\overline X^*=\frac1{R_n}\sum_{r=1}^{R_n}X_{I_r}.
\]</div>{% endraw %}

<p>Its center is the resampled mean. Replacing that center by {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} would remove the resampling variation on which the stated coverage result depends.</p>

<h3 data-note-section="2" id="10-356-why-pairs-allow-more-repetitions">2. The U-type statistic: asymptotic normality and local power</h3>

<p>The following expansion explains the weaker rate restriction for the U-type statistic. For a candidate {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(b_n=\widehat\Sigma^{-1/2}(\overline X-\mu)\)</span>{% endraw %}. A resampled product is</p>

{% raw %}<div class="math display">\[
(X_J-\mu)'\widehat\Sigma^{-1}(X_K-\mu)
=Z_J'Z_K+b_n'(Z_J+Z_K)+\|b_n\|^2.
\]</div>{% endraw %}

<p>A clever feature of the U-type statistic is the cancellation of the linear term in its conditional mean. The sample-mean error therefore enters the conditional mean through the squared norm {% raw %}<span class="math inline">\(\|b_n\|^2\)</span>{% endraw %}. Under the null, the linear estimation error is {% raw %}<span class="math inline">\(O_p(n^{-1/2})\)</span>{% endraw %}, whereas its squared norm is {% raw %}<span class="math inline">\(O_p(n^{-1})\)</span>{% endraw %}. This permits a faster growth rate for {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}. To prove asymptotic normality, we need the conditional mean and variance of the product of empirically centered observations and a bound on its higher moments.</p>

<span id="10-356-the-distinct-pair-second-moment"></span>
<p>Let {% raw %}<span class="math inline">\(H=Z_J'Z_K\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(J\ne K\)</span>{% endraw %}. Since the centered observations sum to zero,</p>

{% raw %}<div class="math display">\[
\sum_{j\ne k}Z_j'Z_k
=\left\|\sum_jZ_j\right\|^2-\sum_j\|Z_j\|^2
=-nm,
\qquad
\mathbb E_\pi H=-\frac{m}{n-1}.
\]</div>{% endraw %}

<p>Thus the product of empirically centered observations has conditional mean {% raw %}<span class="math inline">\(-m/(n-1)\)</span>{% endraw %}, rather than zero. For the second moment, first sum over all ordered pairs, then subtract the diagonal terms. The sum over all ordered pairs can be evaluated using the following trace identity:</p>

{% raw %}<div class="math display">\[
\sum_{j,k}(Z_j'Z_k)^2
=\operatorname{tr}\left\{
\left(\sum_jZ_jZ_j'\right)^2\right\}
=n^2m.
\]</div>{% endraw %}

<p>There are {% raw %}<span class="math inline">\(n(n-1)\)</span>{% endraw %} ordered distinct pairs, so</p>

{% raw %}<div class="math display">\[
\mathbb E_\pi H^2
=\frac{n^2m-\sum_j\|Z_j\|^4}{n(n-1)}.
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
=m\frac{\max_j\|Z_j\|^2}{n}=o_p(1).
\]</div>{% endraw %}

<p>It follows that {% raw %}<span class="math inline">\(\operatorname{Var}_\pi(H)\xrightarrow{p}m\)</span>{% endraw %}. This explains the normalization {% raw %}<span class="math inline">\(\sqrt{mR_n}\)</span>{% endraw %}.</p>

<span id="10-356-the-moment-bound-needed-for-the-pair-clt"></span>
<p>The same moment condition also gives the CLT. Cauchy–Schwarz bounds each inner product by a product of norms. Including the diagonal terms then gives an upper bound that factors into a product of empirical moments:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb E_\pi|H|^q
&amp;\leq\frac1{n(n-1)}\sum_{j\ne k}\|Z_j\|^q\|Z_k\|^q\\
&amp;\leq\frac{n}{n-1}M_{q,n}^2=O_p(1),
\qquad q=2+\delta.
\end{aligned}
\]</div>{% endraw %}

<p>Centering {% raw %}<span class="math inline">\(H\)</span>{% endraw %} preserves this bound. Its conditional Lyapunov ratio is {% raw %}<span class="math inline">\(O_p(R_n^{-\delta/2})\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
V_n=\frac1{\sqrt{mR_n}}\sum_{r=1}^{R_n}
\left(Z_{J_r}'Z_{K_r}+\frac{m}{n-1}\right)
\Rightarrow\mathcal N(0,1)
\]</div>{% endraw %}

<p>conditionally in probability. The two indices within a pair need not be independent. The CLT uses conditional independence across resampling repetitions.</p>

<span id="10-356-add-back-a-candidate-mean"></span>
<p>We can now collect the terms in the original statistic:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
T_U(\mu)
&amp;=V_n+L_n(b_n)
+\sqrt{\frac{R_n}{m}}
\left(\|b_n\|^2-\frac{m}{n-1}\right),\\
L_n(b_n)
&amp;=\frac1{\sqrt{mR_n}}\sum_{r=1}^{R_n}
b_n'(Z_{J_r}+Z_{K_r}).
\end{aligned}
\]</div>{% endraw %}

<p>This decomposition separates the normalized sum {% raw %}<span class="math inline">\(V_n\)</span>{% endraw %} of conditionally centered products, a conditionally mean-zero linear term, and the conditional mean of the statistic. To bound the linear term, use {% raw %}<span class="math inline">\(\mathbb E_\pi[Z_JZ_K']=-I_m/(n-1)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\operatorname{Var}_\pi\{L_n(b_n)\}
=\frac{2(n-2)}{m(n-1)}\|b_n\|^2.
\]</div>{% endraw %}

<p>There is no growing factor of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} in this variance: the sum is centered and divided by {% raw %}<span class="math inline">\(\sqrt{R_n}\)</span>{% endraw %}. Under the null, {% raw %}<span class="math inline">\(b_n=O_p(n^{-1/2})\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(L_n(b_n)=o_p(1)\)</span>{% endraw %}. No independence between {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_n\)</span>{% endraw %} is needed. The conditional mean is {% raw %}<span class="math inline">\(O_p(\sqrt{R_n}/n)\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\sqrt{R_n}/n\to0\)</span>{% endraw %} completes the U-type proof, including the statistic evaluated at {% raw %}<span class="math inline">\(\mu=\overline X\)</span>{% endraw %}, for which {% raw %}<span class="math inline">\(b_n=0\)</span>{% endraw %}.</p>

<p>This decomposition also makes explicit a conditional-mean term omitted from the intermediate order calculation in the paper’s appendix. An uncentered resampled sum satisfies</p>

{% raw %}<div class="math display">\[
\frac1{\sqrt{R_n}}\sum_{r=1}^{R_n}(X_{I_r}-\mu_0)
=O_p(1)+\sqrt{R_n}(\overline X-\mu_0)
=O_p(1)+O_p\!\left(\sqrt{R_n/n}\right).
\]</div>{% endraw %}

<p>It need not be {% raw %}<span class="math inline">\(O_p(1)\)</span>{% endraw %} under the U-type restriction, which allows {% raw %}<span class="math inline">\(R_n/n\)</span>{% endraw %} to diverge. In the recentering argument it is multiplied by {% raw %}<span class="math inline">\(\overline X-\mu_0\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(O_p(n^{-1/2})+O_p(\sqrt{R_n}/n)=o_p(1)\)</span>{% endraw %}. The desired conclusion follows, but the growing conditional mean must be retained.</p>

<span id="10-356-a-scalar-numerical-identity"></span>
<p>The diagonal correction also explains the degenerate case {% raw %}<span class="math inline">\(m=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(n=2\)</span>{% endraw %}. The centered observations with empirical variance one are {% raw %}<span class="math inline">\(1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}, up to order. Every distinct-pair product is {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}, so its conditional variance is zero. As {% raw %}<span class="math inline">\(n\)</span>{% endraw %} grows, the moment condition makes the normalized diagonal contribution {% raw %}<span class="math inline">\(n^{-2}\sum_j\|Z_j\|^4\)</span>{% endraw %} vanish. The trace identity shows why this contribution must vanish for the conditional variance to converge to {% raw %}<span class="math inline">\(m\)</span>{% endraw %}.</p>

<p><strong>Local power and the choice of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}.</strong> Suppose the hypotheses of the theorem continue to hold along local alternatives. If {% raw %}<span class="math inline">\(\mu_0-\mu=hR_n^{-1/2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widetilde T_M(\mu)\)</span>{% endraw %} converges in distribution to {% raw %}<span class="math inline">\(\mathcal N(\Sigma^{-1/2}h,I_m)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T_M(\mu)\)</span>{% endraw %} has a noncentral chi-square limit with noncentrality {% raw %}<span class="math inline">\(h'\Sigma^{-1}h\)</span>{% endraw %}. For the pair statistic, take {% raw %}<span class="math inline">\(\mu_0-\mu=hR_n^{-1/4}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(R_n^{1/4}/\sqrt n\to0\)</span>{% endraw %}, the original sample error is negligible at this scale, and the decomposition gives</p>

{% raw %}<div class="math display">\[
T_U(\mu)\Rightarrow
\mathcal N\left(\frac{h'\Sigma^{-1}h}{\sqrt m},1\right).
\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive definite, {% raw %}<span class="math inline">\(h'\Sigma^{-1}h&gt;0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\ne0\)</span>{% endraw %}. Thus every nonzero local alternative increases the limiting mean of {% raw %}<span class="math inline">\(T_U(\mu)\)</span>{% endraw %}. This justifies the upper-tail rejection rule {% raw %}<span class="math inline">\(T_U(\mu)&gt;z_{1-\alpha}\)</span>{% endraw %} for the two-sided hypothesis {% raw %}<span class="math inline">\(\mu_0=\mu\)</span>{% endraw %}. The corresponding mean-type test rejects when {% raw %}<span class="math inline">\(T_M(\mu)&gt;\chi^2_{m,1-\alpha}\)</span>{% endraw %}.</p>

<p>At the same repetition count, the mean statistic has nontrivial asymptotic power against local alternatives of smaller order: {% raw %}<span class="math inline">\(R_n^{-1/2}\)</span>{% endraw %} versus {% raw %}<span class="math inline">\(R_n^{-1/4}\)</span>{% endraw %}. The U-type statistic permits a larger resampling count. The practical rule minimizes the sum of the order of the conditional mean under the null and the local-alternative rate:</p>

{% raw %}<div class="math display">\[
g_M(R_n)=\sqrt{R_n/n}+R_n^{-1/2},
\qquad
g_U(R_n)=\frac{\sqrt{R_n}}n+R_n^{-1/4}.
\]</div>{% endraw %}

<p>Treating {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} as a positive real variable, minimizing these expressions, and rounding the minimizers to integers gives</p>

{% raw %}<div class="math display">\[
R_n^M\approx\sqrt n,
\qquad
R_n^U\approx(n/2)^{4/3}.
\]</div>{% endraw %}

<p>The resulting local-alternative rates are {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-1/3}\)</span>{% endraw %}, respectively. These objectives are tuning heuristics. In particular, {% raw %}<span class="math inline">\(R_n^{-1/4}\)</span>{% endraw %} describes a mean shift that the U-type test can detect; it is not a bound on the error of its normal approximation. The comparison with <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Song’s resampled statistics</a> likewise depends on allowing different repetition counts for the two tests.</p>

<h3 data-note-section="3" id="moment-inequalities">3. Moment inequalities and uniform asymptotic size</h3>

<p>Consider first the scalar null {% raw %}<span class="math inline">\(H_0:\mu_0\leq0\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(\widehat\sigma^2=\widehat\Sigma\)</span>{% endraw %}. The leading term in the conditional mean of {% raw %}<span class="math inline">\(T_U(0)\)</span>{% endraw %} is proportional to {% raw %}<span class="math inline">\(\sqrt{R_n}\mu_0^2\)</span>{% endraw %}, so it increases under fixed positive and fixed negative means. Means {% raw %}<span class="math inline">\(\mu_0=-c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_0=c\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, produce the same leading quadratic term. The correction replaces {% raw %}<span class="math inline">\(T_U(0)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\overline X&lt;0\)</span>{% endraw %}.</p>

<p>The correction is easiest to understand as an exact difference between two statistics computed from the same pairs:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\widehat\lambda
&amp;=T_U(0)-T_U(\overline X)\\
&amp;=\frac{\overline X}{\widehat\sigma^2\sqrt{R_n}}
\sum_{r=1}^{R_n}(X_{J_r}+X_{K_r})
-\frac{\sqrt{R_n}\,\overline X^2}{\widehat\sigma^2}.
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

<p>If the observed mean is negative, evaluate the statistic at {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}; if it is nonnegative, evaluate the statistic at zero. For {% raw %}<span class="math inline">\(m=1\)</span>{% endraw %}, reject when {% raw %}<span class="math inline">\(Q_n&gt;z_{1-\alpha}\)</span>{% endraw %}, or use the conditional quantile of {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %}. The subtraction has already been made in {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}; it is applied once.</p>

<p>The sign may remain uncertain when the mean is close to zero. To see why this is harmless, center the resampled sum in the correction. With</p>

{% raw %}<div class="math display">\[
S_n=\frac1{\widehat\sigma\sqrt{R_n}}
\sum_{r=1}^{R_n}
\{(X_{J_r}-\overline X)+(X_{K_r}-\overline X)\},
\]</div>{% endraw %}

<p>we have {% raw %}<span class="math inline">\(\mathbb E_\pi S_n=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Var}_\pi(S_n)=2(n-2)/(n-1)\)</span>{% endraw %}, and the exact identity</p>

{% raw %}<div class="math display">\[
\widehat\lambda
=\frac{\sqrt{R_n}\,\overline X^2}{\widehat\sigma^2}
+\frac{\overline X}{\widehat\sigma}S_n.
\]</div>{% endraw %}

<p>For a sequence of population means satisfying {% raw %}<span class="math inline">\(R_n^{1/4}\mu_0\to d\in\mathbb R\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-consistency gives</p>

{% raw %}<div class="math display">\[
R_n^{1/4}\overline X
=R_n^{1/4}\mu_0
+\frac{R_n^{1/4}}{\sqrt n}\sqrt n(\overline X-\mu_0)
=d+o_p(1).
\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(d&lt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Pr(\overline X&lt;0)\to1\)</span>{% endraw %}, so the procedure uses {% raw %}<span class="math inline">\(T_U(\overline X)\)</span>{% endraw %} with probability tending to one. If {% raw %}<span class="math inline">\(d=0\)</span>{% endraw %}, the sign may remain uncertain, but {% raw %}<span class="math inline">\(\widehat\lambda=o_p(1)\)</span>{% endraw %}: the two statistics differ by {% raw %}<span class="math inline">\(o_p(1)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(d&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Pr(\overline X&gt;0)\to1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\lambda\xrightarrow{p}d^2/\sigma^2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\widehat\sigma^2\xrightarrow{p}\sigma^2\)</span>{% endraw %}. The test then has limiting rejection probability</p>

{% raw %}<div class="math display">\[
1-\Phi\left(z_{1-\alpha}-\frac{d^2}{\sigma^2}\right)&gt;\alpha.
\]</div>{% endraw %}

<p>A fixed positive mean makes the conditional mean diverge and gives power tending to one. A fixed negative mean gives the centered statistic with probability tending to one, so rejection still tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, even in the interior of the null. The empirically centered resampled statistic has the same nondegenerate limiting distribution at interior and boundary null values. Its exact asymptotic size throughout the null is a consequence of this construction.</p>

<p>The boundary argument can also be checked directly. Under {% raw %}<span class="math inline">\(\mu_0\leq0\)</span>{% endraw %}, on the event {% raw %}<span class="math inline">\(\overline X\geq0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
0\leq\overline X\leq|\overline X-\mu_0|.
\]</div>{% endraw %}

<p>On the event {% raw %}<span class="math inline">\(\{\overline X\geq0\}\)</span>{% endraw %}, where the procedure uses {% raw %}<span class="math inline">\(T_U(0)\)</span>{% endraw %}, the null restriction therefore bounds {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} by {% raw %}<span class="math inline">\(|\overline X-\mu_0|\)</span>{% endraw %}. The exact correction identity yields</p>

{% raw %}<div class="math display">\[
|\widehat\lambda|\mathbf1\{\overline X\geq0\}
\leq\frac{\sqrt{R_n}}{\widehat\sigma^2}
|\overline X-\mu_0|^2
+\frac{|\overline X-\mu_0|}{\widehat\sigma}|S_n|
=o_p(1).
\]</div>{% endraw %}

<p>The clever step in the moment-inequality argument is that the correction is asymptotically negligible along boundary sequences for which the sign cannot be consistently estimated. Consistent estimation of the sign is therefore unnecessary at the boundary.</p>

<p><strong>Several inequalities and uniform size.</strong> Now test {% raw %}<span class="math inline">\(\mu_{0k}\leq0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(k=1,\ldots,m\)</span>{% endraw %}. Standardize each coordinate by {% raw %}<span class="math inline">\(\widehat\sigma_k^2=\widehat\Sigma_{kk}\)</span>{% endraw %}. A general whitening transformation need not preserve the componentwise restriction {% raw %}<span class="math inline">\(\mu_0\leq0\)</span>{% endraw %}. To make the normalization explicit, use the scalar U-type statistic separately for each coordinate:</p>

{% raw %}<div class="math display">\[
U_{n,k}(a)=\frac1{\widehat\sigma_k^2\sqrt{R_n}}
\sum_{r=1}^{R_n}(X_{J_r,k}-a)(X_{K_r,k}-a).
\]</div>{% endraw %}

<p>All coordinates use the same pairs. This convention gives unit limiting marginal variance; including a common factor {% raw %}<span class="math inline">\(m^{-1/2}\)</span>{% endraw %} in every coordinate statistic, correction, and critical value gives the same rejection event. Let</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\widehat\lambda_k&amp;=U_{n,k}(0)-U_{n,k}(\overline X_k),\\
Q_n&amp;=\max_{1\leq k\leq m}
\{U_{n,k}(\overline X_k)
+\widehat\lambda_k\mathbf1\{\overline X_k\geq0\}\},\\
\widetilde Q_n&amp;=\max_{1\leq k\leq m}U_{n,k}(\overline X_k).
\end{aligned}
\]</div>{% endraw %}

<p>Reject when {% raw %}<span class="math inline">\(Q_n&gt;c_{n,1-\alpha}\)</span>{% endraw %}, the conditional {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %}-quantile of {% raw %}<span class="math inline">\(\widetilde Q_n\)</span>{% endraw %}. To approximate that quantile, draw {% raw %}<span class="math inline">\(L\)</span>{% endraw %} independent batches, each containing {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} pairs, and compute {% raw %}<span class="math inline">\(\widetilde Q_n\)</span>{% endraw %} for each batch. Increasing {% raw %}<span class="math inline">\(L\)</span>{% endraw %} improves the Monte Carlo approximation to the critical value; changing {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} changes the test statistic and its conditional mean. The size argument below uses the ideal conditional quantile; taking {% raw %}<span class="math inline">\(L\to\infty\)</span>{% endraw %} makes its simulation error vanish.</p>

<p>The covariance matrix of the joint Gaussian limit characterizes the asymptotic dependence between the coordinate statistics. Put {% raw %}<span class="math inline">\(Z_{i,k}^{\mathrm{s}}=(X_{i,k}-\overline X_k)/\widehat\sigma_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\rho_{k\ell}=n^{-1}\sum_i Z_{i,k}^{\mathrm{s}}Z_{i,\ell}^{\mathrm{s}}\)</span>{% endraw %}. The all-pairs calculation gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\mathbb E_\pi
\big[(Z_{J,k}^{\mathrm{s}}Z_{K,k}^{\mathrm{s}})
(Z_{J,\ell}^{\mathrm{s}}Z_{K,\ell}^{\mathrm{s}})\big]\\
&amp;\qquad=\frac{n^2\widehat\rho_{k\ell}^{2}
-\sum_i(Z_{i,k}^{\mathrm{s}}Z_{i,\ell}^{\mathrm{s}})^2}{n(n-1)}.
\end{aligned}
\]</div>{% endraw %}

<p>The normalized diagonal contribution vanishes by the same maximum bound used above. Thus the centered coordinate vector converges conditionally to {% raw %}<span class="math inline">\(G\sim\mathcal N(0,\Omega)\)</span>{% endraw %}, where</p>

{% raw %}<div class="math display">\[
\Omega_{k\ell}=\rho_{k\ell}^2,
\qquad
\rho_{k\ell}=\frac{\Sigma_{k\ell}}{\sqrt{\Sigma_{kk}\Sigma_{\ell\ell}}}.
\]</div>{% endraw %}

<p>The limit need not have independent coordinates. Positive definiteness of the correlation matrix implies positive definiteness of its entrywise square {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and the Gaussian maximum has a continuous, strictly increasing CDF. Using the same resampled pairs across coordinates yields the limiting covariance matrix {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. Resampling each coordinate independently would instead remove the off-diagonal entries of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}.</p>

<p>Under any null sequence for which the assumptions hold, the scalar correction bound applies to every coordinate. Since {% raw %}<span class="math inline">\(m\)</span>{% endraw %} is fixed,</p>

{% raw %}<div class="math display">\[
|Q_n-\widetilde Q_n|
\leq\max_k|\widehat\lambda_k|
\mathbf1\{\overline X_k\geq0\}
=o_p(1).
\]</div>{% endraw %}

<p>Conditional CDF convergence gives convergence of the reference quantile. Continuity of the Gaussian maximum’s distribution implies that replacing {% raw %}<span class="math inline">\(\widetilde Q_n\)</span>{% endraw %} by {% raw %}<span class="math inline">\(Q_n=\widetilde Q_n+o_p(1)\)</span>{% endraw %} does not change the limiting rejection probability. Hence the rejection probability tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Along alternatives with {% raw %}<span class="math inline">\(R_n^{1/4}\mu_{0k}\to d_k\in\mathbb R\)</span>{% endraw %}, the limit becomes</p>

{% raw %}<div class="math display">\[
\max_k\left\{G_k+
\frac{d_k^2}{\Sigma_{kk}}\mathbf1\{d_k&gt;0\}\right\}.
\]</div>{% endraw %}

<p>Any strictly positive {% raw %}<span class="math inline">\(d_k\)</span>{% endraw %} produces power above {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. A fixed positive coordinate gives consistency. Means converging to the boundary from the negative side contribute no limiting shift.</p>

<p>Uniform size requires that this argument remain valid when the data-generating process changes with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Specifically, over a nonempty null class {% raw %}<span class="math inline">\(\mathcal P_0\)</span>{% endraw %}, require {% raw %}<span class="math inline">\(\sqrt n(\overline X-\mu_0)\)</span>{% endraw %} to be uniformly bounded in probability, a common {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment bound in probability, and covariance convergence along the sequences under consideration, with eigenvalues bounded away from zero and infinity by common constants. These are the uniform premises of the paper’s size theorem. If uniform size control failed, there would be a sequence {% raw %}<span class="math inline">\(P_n\in\mathcal P_0\)</span>{% endraw %} whose rejection probability exceeded {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} by a fixed amount. The preceding argument applies along that sequence and gives a contradiction. A fixed member of the null class has limiting rejection probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\sup_{P\in\mathcal P_0}\Pr_P\{Q_n&gt;c_{n,1-\alpha}\}
\longrightarrow\alpha.
\]</div>{% endraw %}

<p>Checking only fixed negative means and the exact boundary would omit the sequences of null data-generating processes {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} needed for this conclusion. Along subsequences for which {% raw %}<span class="math inline">\(R_n^{1/4}\mu_{0k}\)</span>{% endraw %} has a limit in {% raw %}<span class="math inline">\([-\infty,0]\)</span>{% endraw %}, either {% raw %}<span class="math inline">\(\Pr(\overline X_k&lt;0)\to1\)</span>{% endraw %}, or the correction term is {% raw %}<span class="math inline">\(o_p(1)\)</span>{% endraw %}. The direct bound above establishes negligibility of the applied correction along every null sequence satisfying the assumptions.</p>

<h3 data-note-section="4" id="10-356-extensions-and-limits">4. Estimated scores and alternative convergence rates</h3>

<p>The conditional calculations depend on empirical moments and the sample-mean error, so they can also be applied to estimated scores. Suppose an estimator admits</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta-\beta_0)
=\frac1{\sqrt n}\sum_{i=1}^n
\psi(W_i;\beta_0,\widehat\theta)+o_p(1).
\]</div>{% endraw %}

<p>To test a candidate {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, form {% raw %}<span class="math inline">\(X_i(\beta)=\psi(W_i;\beta,\widehat\theta)\)</span>{% endraw %} and apply the resampling test with hypothesized mean zero. At the true parameter, the displayed expansion and {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-consistency imply that the normalized score sum {% raw %}<span class="math inline">\(n^{-1/2}\sum_i\psi(W_i;\beta_0,\widehat\theta)\)</span>{% endraw %} is {% raw %}<span class="math inline">\(O_p(1)\)</span>{% endraw %}. One must also verify convergence of the empirical score covariance and its {% raw %}<span class="math inline">\(2+\delta\)</span>{% endraw %} moment bound after estimating {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Smoothness and control of the first-stage error can establish these conditions; consistency of the nuisance estimator alone does not establish all of them.</p>

<p>For example, write {% raw %}<span class="math inline">\(\widehat Q=n^{-1}\sum_iD_iD_i'\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(e_j\)</span>{% endraw %} select regression coefficient {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(w_{ji}=e_j'\widehat Q^{-1}D_i\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\widehat\beta_j=\frac1n\sum_iw_{ji}Y_i,
\qquad
X_i(\beta_j)=w_{ji}Y_i-\beta_j,
\qquad
\overline X(\beta_j)=\widehat\beta_j-\beta_j.
\]</div>{% endraw %}

<p>This is the paper’s regression construction. The weights use the full sample, and the resampling is applied to the resulting contributions. The same principle applies to the paper’s spillover example, where a contrast of exposure-cell means can be estimated from observed local neighborhoods even when the path distances needed for a conventional variance estimate are unavailable. That application requires identification of the contrast and verification of the exposure-cell probability conditions needed for the estimator’s convergence rate and moment bounds.</p>

<span id="10-356-what-slower-original-sample-rates-would-require"></span>
<p>If the known rate is slower, write {% raw %}<span class="math inline">\(\overline X-\mu_0=O_p(a_n^{-1})\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(a_n\to\infty\)</span>{% endraw %}, retaining the covariance and empirical moment assumptions. The same decompositions give the conditions</p>

{% raw %}<div class="math display">\[
\frac{\sqrt{R_n}}{a_n}\to0
\quad\text{for the mean statistic},
\]</div>{% endraw %}

{% raw %}<div class="math display">\[
\frac{\sqrt{R_n}}{a_n^2}\to0,
\qquad
\frac{\sqrt{R_n}}n\to0
\quad\text{for the pair statistic}.
\]</div>{% endraw %}

<p>The second pair restriction makes the diagonal correction asymptotically negligible; the first does the same for the squared estimation error. Consistency makes the random linear term negligible, and the centered conditional CLT is unchanged. Thus a slower known rate can be accommodated by reducing {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}, provided the remaining empirical assumptions hold. Here {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %} denotes the original estimator’s rate and {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} the resampling count.</p>

<p>A persistent common shock illustrates the limitation. If {% raw %}<span class="math inline">\(X_i=\mu_0+U+\varepsilon_i\)</span>{% endraw %}, with a nondegenerate mean-zero common shock {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and an idiosyncratic average tending to zero, then {% raw %}<span class="math inline">\(\overline X-\mu_0\to U\)</span>{% endraw %}. The sample variance may still converge to a finite positive limit because centering removes {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, but the mean is not consistent. Increasing the number of resampling draws magnifies the resulting conditional mean. The original observations must yield a consistent estimator of the target before this method can provide inference.</p>

<p>Finally, the resampling draws are part of the test’s randomization. In particular, a null conditional rejection probability tending to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} does not make two independent runs agree with probability tending to one. A fixed seed makes a calculation reproducible; averaging rejection indicators changes the testing rule. The paper discusses a separate randomized confidence-function construction for reducing sensitivity to the draws. Ordinary critical-value simulation, controlled by {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, should be distinguished from that construction and from the choice of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}.</p>

<p>The method is useful when the original mean has an established convergence rate but its long-run variance is hard to estimate. The loss of local power is quantified by the local-alternative rates: under the suggested tuning choices, the mean-type and U-type tests have nontrivial asymptotic power against mean shifts of orders {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-1/3}\)</span>{% endraw %}. Conditional resampling produces an asymptotically pivotal statistic, subject to a restriction on {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} determined by the original estimator’s convergence rate.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-leung_dependencerobust_2022" class="csl-entry" role="listitem">
Leung, Michael P. 2022. <span>“Dependence‐robust Inference Using Resampled Statistics.”</span> <em>Journal of Applied Econometrics</em> 37 (2): 270–85. <a href="https://doi.org/10.1002/jae.2865">https://doi.org/10.1002/jae.2865</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Resampled Statistics: Size and Local Power</a> · Additional reading: <a href="{% post_url 2024-07-29-randomized-saturation-designs-and-their-optimal-allocation %}">Randomized Saturation Designs and Their Optimal Allocation</a></p></nav>

</div>
