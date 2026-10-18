---
layout: "post"
title: "Conditional Stochastic Dominance with Nearest Observations"
date: "2025-12-15"
tags: ["statistics", "randomization inference"]
excerpt: "Conditional stochastic dominance can be tested using only a fixed number of observations nearest each target covariate value."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2026/01/03/conditional-stochastic-dominance-with-nearest-observations/", "/2026/01/03/testing-conditional-stochastic-dominance/", "/2026/01/24/induced-order-statistics-at-target-points/", "/2026/02/14/the-limit-distribution-of-a-local-dominance-statistic/"]
---

<div class="note-content" markdown="0">

<p>Suppose we want to compare two outcome distributions at one covariate value. A growing sample supplies observations ever closer to that value, even if we retain only a fixed number of them. <span class="citation" data-cites="bugni_testing_2025">(<a href="#ref-bugni_testing_2025" role="doc-biblioref">Bugni, Canay, and Kim 2025</a>)</span> uses this observation to reduce conditional stochastic dominance to a finite-sample limit experiment.</p>

<h3 data-note-section="1" id="26-77-the-result">1. The result</h3>
<p>Observe independent i.i.d. samples from {% raw %}<span class="math inline">\((Y,Z)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((X,Z)\)</span>{% endraw %}. At distinct, fixed points {% raw %}<span class="math inline">\(z_1,\ldots,z_L\)</span>{% endraw %}, the null is</p>

{% raw %}<div class="math display">\[
F_Y(t\mid z_\ell)\leq F_X(t\mid z_\ell)
\quad\text{for every }t\in\mathbb R,\ \ell=1,\ldots,L.
\]</div>{% endraw %}
<p>Thus larger outcomes are preferred, and the null says that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} dominates {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Keep fixed positive numbers {% raw %}<span class="math inline">\(q_y^\ell,q_x^\ell\)</span>{% endraw %} of outcomes whose covariates are nearest {% raw %}<span class="math inline">\(z_\ell\)</span>{% endraw %}, breaking covariate ties by an outcome-independent rule. Write {% raw %}<span class="math inline">\(S_n^\ell\)</span>{% endraw %} for the resulting vector, with the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} observations first.</p>

<div id="nearest-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose every neighborhood of each target has positive probability in each sample, and the conditional cdfs are continuous at the target in the uniform norm:</p>

{% raw %}<div class="math display">\[
\sup_t|F_a(t\mid z)-F_a(t\mid z_\ell)|\longrightarrow0,
\qquad z\to z_\ell,\quad a\in\{X,Y\}.
\]</div>{% endraw %}
<p>As both original sample sizes diverge, {% raw %}<span class="math inline">\((S_n^1,\ldots,S_n^L)\)</span>{% endraw %} converges jointly to independent vectors {% raw %}<span class="math inline">\((S^1,\ldots,S^L)\)</span>{% endraw %}. The coordinates of {% raw %}<span class="math inline">\(S^\ell\)</span>{% endraw %} are independent, with the first {% raw %}<span class="math inline">\(q_y^\ell\)</span>{% endraw %} distributed as {% raw %}<span class="math inline">\(Y\mid Z=z_\ell\)</span>{% endraw %} and the remaining {% raw %}<span class="math inline">\(q_x^\ell\)</span>{% endraw %} as {% raw %}<span class="math inline">\(X\mid Z=z_\ell\)</span>{% endraw %}.</p>

</div>
<p>The target may be an atom of the covariate distribution. What stays fixed is the number of retained outcomes; a growing retained sample would require additional control of the approximation.</p>

<h3 data-note-section="2" id="26-77-why-the-selected-outcomes-have-this-limit">2. Why the selected outcomes have this limit</h3>
<p><strong>First, the covariates get close.</strong> For a radius {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(B_n\)</span>{% endraw %} count observations within that radius of a target. If the neighborhood probability is {% raw %}<span class="math inline">\(p_\varepsilon&gt;0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb P\{|Z_{[q]}-z_\ell|&gt;\varepsilon\}
\leq\mathbb P\{B_n&lt;q\}\longrightarrow0,
\qquad B_n\sim\operatorname{Binomial}(n,p_\varepsilon).
\]</div>{% endraw %}
<p>Once the ball contains enough observations, all retained neighbors lie inside it. The law of large numbers gives {% raw %}<span class="math inline">\(B_n/n\to p_\varepsilon\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(q/n\to0\)</span>{% endraw %}, proving this for all retained positions at once.</p>

<p><strong>Second, condition on the covariates.</strong> Selection now amounts to choosing fixed observation indices. Their outcomes are conditionally independent. For one target, the joint conditional cdf is therefore a product of terms such as {% raw %}<span class="math inline">\(F_Y(s_j\mid Z_{[j]})\)</span>{% endraw %}. Uniform continuity replaces each term by {% raw %}<span class="math inline">\(F_Y(s_j\mid z_\ell)\)</span>{% endraw %}. With finitely many factors, the total error is bounded by the sum of the factor errors.</p>

<p><strong>Third, separate the targets.</strong> Finitely many distinct targets have pairwise disjoint neighborhoods. With probability tending to one, each neighborhood contains its target’s retained observations. Their index sets are then pairwise disjoint, so conditioning on the covariates gives the required product across targets.</p>

<h3 data-note-section="3" id="26-77-constructing-the-test">3. Constructing the test</h3>
<p>At one target, form the empirical cdfs from the retained observations and use</p>

{% raw %}<div class="math display">\[
T(S_n)\triangleq\sup_t(\widehat F_{n,Y}(t)-\widehat F_{n,X}(t)).
\]</div>{% endraw %}
<p>Large positive values contradict the null. Let {% raw %}<span class="math inline">\(U_1,\ldots,U_q\)</span>{% endraw %} be independent uniforms, where {% raw %}<span class="math inline">\(q=q_y+q_x\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(c_\alpha(q_y,q)\)</span>{% endraw %} be the {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %} quantile of the same statistic computed from these uniforms. Reject when {% raw %}<span class="math inline">\(T(S_n)&gt;c_\alpha(q_y,q)\)</span>{% endraw %}.</p>

<p>We still need to justify the uniform critical value for the composite dominance null. The <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">least-favorable-distribution argument</a> supplies that step, including the treatment of tied outcomes. Convergence of the selected vector by itself is insufficient.</p>

<p>For {% raw %}<span class="math inline">\(L\)</span>{% endraw %} targets, the joint limit permits the per-target level</p>

{% raw %}<div class="math display">\[
\alpha_L\triangleq1-(1-\alpha)^{1/L}.
\]</div>{% endraw %}
<p>Reject if any target rejects at level {% raw %}<span class="math inline">\(\alpha_L\)</span>{% endraw %}. Independence in the limit gives an overall rejection probability at most {% raw %}<span class="math inline">\(1-(1-\alpha_L)^L=\alpha\)</span>{% endraw %}. This correction uses the disjoint-neighborhood argument above, not an assumption that finite-sample tests are independent.</p>

<h3 data-note-section="4" id="26-77-a-quantitative-look-at-the-nearest-neighbor-step">4. A quantitative look at the nearest-neighbor step</h3>
<p>The binomial argument also shows what determines localization. For one sample let {% raw %}<span class="math inline">\(p(r)=\mathbb P(\|Z-z_0\|\leq r)\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(R_{n,q}\)</span>{% endraw %} be the distance of the {% raw %}<span class="math inline">\(q\)</span>{% endraw %}th retained covariate. Whenever {% raw %}<span class="math inline">\(q\leq np(r)/2\)</span>{% endraw %}, a binomial lower-tail bound gives</p>

{% raw %}<div class="math display">\[
\mathbb P(R_{n,q}&gt;r)
\leq\mathbb P\{B_n\leq np(r)/2\}
\leq e^{-np(r)/8}.
\]</div>{% endraw %}
<p>For completeness, apply Markov’s inequality to {% raw %}<span class="math inline">\(e^{-tB_n}\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\mathbb P(B_n\leq np/2)
\leq e^{tnp/2}(1-p+pe^{-t})^n
\leq\exp(np(t/2+e^{-t}-1)).
\]</div>{% endraw %}
<p>Taking {% raw %}<span class="math inline">\(t=\log2\)</span>{% endraw %} makes the exponent at most {% raw %}<span class="math inline">\(-np/8\)</span>{% endraw %}. This avoids any requirement that a covariate density exist.</p>

<p>If the stronger local-mass condition {% raw %}<span class="math inline">\(p(r)\geq cr^d\)</span>{% endraw %} holds for small {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(r=M n^{-1/d}\)</span>{% endraw %}. For sufficiently large {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, the displayed bound is at most {% raw %}<span class="math inline">\(\exp(-cM^d/8)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(R_{n,q}=O_p(n^{-1/d})\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. This is a tightness statement: the bound becomes small as {% raw %}<span class="math inline">\(M\)</span>{% endraw %} increases, not necessarily as {% raw %}<span class="math inline">\(n\)</span>{% endraw %} increases with {% raw %}<span class="math inline">\(M\)</span>{% endraw %} fixed. It also shows the cost of conditioning on many continuously distributed covariates. The original theorem needs only convergence to the target, not this rate.</p>

<p>At a covariate atom the picture is simpler. If {% raw %}<span class="math inline">\(p_0=\mathbb P(Z=z_0)&gt;0\)</span>{% endraw %}, the number of exact matches is binomial with mean {% raw %}<span class="math inline">\(np_0\)</span>{% endraw %}. With probability tending to one there are at least {% raw %}<span class="math inline">\(q\)</span>{% endraw %} exact matches, and all selected covariates equal {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. Conditional on their indices, their outcomes already have the desired product distribution. Outcome-independent tie breaking is essential: choosing the largest outcomes among the exact matches would change that distribution.</p>

<h3 data-note-section="5" id="26-77-the-product-calculation-behind-asymptotic-independence">5. The product calculation behind asymptotic independence</h3>
<p>To quantify the conditional product approximation, telescope the difference. For {% raw %}<span class="math inline">\(a_j,b_j\in[0,1]\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\prod_{j=1}^qa_j-\prod_{j=1}^qb_j
=\sum_{j=1}^q(a_j-b_j)
 \left(\prod_{k&lt;j}a_k\right)
 \left(\prod_{k&gt;j}b_k\right).
\]</div>{% endraw %}
<p>Hence the absolute difference is no larger than {% raw %}<span class="math inline">\(\sum_j|a_j-b_j|\)</span>{% endraw %}. Given all covariates, set {% raw %}<span class="math inline">\(a_j=F_Y(s_j\mid Z_{[j]})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b_j=F_Y(s_j\mid z_0)\)</span>{% endraw %}, with the corresponding {% raw %}<span class="math inline">\(X\)</span>{% endraw %} factors appended. The conditional joint-cdf error is bounded by</p>

{% raw %}<div class="math display">\[
\sum_{j=1}^{q_y}\sup_t|F_Y(t\mid Z_{[j]})-F_Y(t\mid z_0)|
+\sum_{j=1}^{q_x}\sup_t|F_X(t\mid Z_{[j]})-F_X(t\mid z_0)|.
\]</div>{% endraw %}
<p>Localization and continuity make each summand converge to zero in probability. Since the errors are bounded, their expectations also tend to zero. Taking expectations of the conditional product gives the limiting unconditional joint cdf at continuity points.</p>

<p>Conditional independence alone would not give unconditional independence. Here each conditional cdf approaches a fixed, nonrandom cdf, so the limiting product contains no shared mixing variable. Across targets, the event of overlapping selected index sets contributes at most its vanishing probability.</p>

<p>Suppose more quantitatively that each conditional cdf satisfies a local Hölder bound</p>

{% raw %}<div class="math display">\[
\sup_t|F_a(t\mid z)-F_a(t\mid z_0)|\leq L\|z-z_0\|^\beta
\]</div>{% endraw %}
<p>and the covariate small-ball probability is at least {% raw %}<span class="math inline">\(cr^d\)</span>{% endraw %}. For a fixed total of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} retained observations at this target, let {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} be their largest covariate distance. On {% raw %}<span class="math inline">\(R_n\leq r\)</span>{% endraw %}, the product-cdf calculation bounds the conditional joint-cdf error by {% raw %}<span class="math inline">\(qLr^\beta\)</span>{% endraw %}. On its complement the error is at most one. With two samples of size at least {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and enough expected observations in each ball,</p>

{% raw %}<div class="math display">\[
\sup_{s\in\mathbb{R}^q}|F_{S_n}(s)-F_S(s)|
\leq qLr^\beta+2e^{-cnr^d/8}.
\]</div>{% endraw %}
<p>Choosing {% raw %}<span class="math inline">\(r=(A\log n/n)^{1/d}\)</span>{% endraw %} makes the second term at most {% raw %}<span class="math inline">\(2n^{-cA/8}\)</span>{% endraw %} and the first of order {% raw %}<span class="math inline">\((\log n/n)^{\beta/d}\)</span>{% endraw %}. This is an illustrative bound under stronger smoothness and local-mass conditions, not the rate asserted by the original fixed-{% raw %}<span class="math inline">\(q\)</span>{% endraw %} theorem.</p>

<p>A larger source sample improves the approximation to the target conditional laws. The limiting comparison still uses only {% raw %}<span class="math inline">\(q\)</span>{% endraw %} outcomes, so its sampling variability remains. Covariate dimension affects the localization rate even when the outcomes are scalar.</p>

<p>The joint-cdf bound controls lower rectangles. It does not directly control every rank event, particularly one sensitive to ties. The <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">atom-preservation calculation</a> completes that part of the validity proof.</p>

<h3 data-note-section="6" id="26-77-what-is-actually-computed-and-what-more-data-buy">6. What is actually computed, and what more data buy</h3>
<p>To compute {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, sort the distinct retained outcomes {% raw %}<span class="math inline">\(v_1&lt;\cdots&lt;v_K\)</span>{% endraw %}. Both empirical cdfs are constant between these values, so</p>

{% raw %}<div class="math display">\[
T=\max\left(0,\max_{1\leq k\leq K}
\left[\frac{\#\{Y_j\leq v_k\}}{q_y}
-\frac{\#\{X_j\leq v_k\}}{q_x}\right]\right).
\]</div>{% endraw %}
<p>All observations tied at {% raw %}<span class="math inline">\(v_k\)</span>{% endraw %} enter together. Breaking outcome ties by arbitrarily ordering labels computes a different statistic. The zero in the maximum accounts for thresholds below all observations and also makes the direction of the test clear.</p>

<p>The original sample size and the retained sample size play different roles. Increasing the former makes the selected conditional distributions closer to those at {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. It does not increase the number of outcomes used in the limiting comparison. Thus the limiting power at an alternative is the power of the fixed-{% raw %}<span class="math inline">\(q\)</span>{% endraw %} experiment, not automatically one. Increasing {% raw %}<span class="math inline">\(q\)</span>{% endraw %} might improve that experiment, but a theorem allowing {% raw %}<span class="math inline">\(q\)</span>{% endraw %} to increase must also control how far the additional observations lie from the target.</p>

<p>For multiple targets, let {% raw %}<span class="math inline">\(p_\ell\)</span>{% endraw %} be each limiting rejection probability after the tie argument in the companion note. Joint convergence to independent limit experiments gives</p>

{% raw %}<div class="math display">\[
\mathbb P(\text{at least one rejection})\longrightarrow
1-\prod_{\ell=1}^L(1-p_\ell)
\leq1-(1-\alpha_L)^L.
\]</div>{% endraw %}
<p>Thus the level correction depends on fixed, prespecified targets and their independent limit experiments. Choosing targets from the observed outcomes would add a selection problem.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bugni_testing_2025" class="csl-entry" role="listitem">
Bugni, Federico A., Ivan A. Canay, and Deborah Kim. 2025. <span>“Testing Conditional Stochastic Dominance at Target Points.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2503.14747">https://doi.org/10.48550/arXiv.2503.14747</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-03-25-randomization-tests-invariance-ties-and-validity %}">Randomization Tests: Invariance, Ties, and Validity</a> · Next: <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">Size Control for Conditional Stochastic Dominance</a></p></nav>

</div>
