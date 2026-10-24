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

<p>Suppose we want to compare two outcome distributions at a specified covariate value. If every neighborhood of that value has positive probability, a growing sample contains observations whose covariates are arbitrarily close to it. <span class="citation" data-cites="bugni_testing_2025"><a href="#ref-bugni_testing_2025" role="doc-biblioref">Bugni, Canay, and Kim (2025)</a></span> select a fixed number of these observations from each sample. Under continuity of the conditional cdfs in the covariate, the selected outcomes converge jointly to independent draws from the two target conditional distributions. The limiting test therefore compares two samples of fixed size.</p>

<h3 data-note-section="1" id="26-77-the-result">1. The joint limit of the selected observations</h3>
<p>Observe two independent samples from {% raw %}<span class="math inline">\((Y,Z^Y)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((X,Z^X)\)</span>{% endraw %}, with i.i.d. observations within each sample. The outcomes and covariates are real-valued. Write {% raw %}<span class="math inline">\(n_y,n_x\)</span>{% endraw %} for the sample sizes and {% raw %}<span class="math inline">\(n=\min\{n_y,n_x\}\)</span>{% endraw %}. The covariate distributions may differ between samples. Define the conditional cdfs</p>

{% raw %}<div class="math display">\[
F_Y(t\mid z)=P(Y\leq t\mid Z^Y=z),
\qquad
F_X(t\mid z)=P(X\leq t\mid Z^X=z).
\]</div>{% endraw %}
<p>At finitely many distinct, fixed points {% raw %}<span class="math inline">\(z_1,\ldots,z_L\)</span>{% endraw %}, the null hypothesis is</p>

{% raw %}<div class="math display">\[
F_Y(t\mid z_\ell)\leq F_X(t\mid z_\ell)
\quad\text{for every }t\in\mathbb R,\ \ell=1,\ldots,L.
\]</div>{% endraw %}
<p>With larger outcomes preferred, this says that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} stochastically dominates {% raw %}<span class="math inline">\(X\)</span>{% endraw %} at every target. Fix positive integers {% raw %}<span class="math inline">\(q_y^\ell,q_x^\ell\)</span>{% endraw %}, and select that many outcomes from the respective samples whose covariates are nearest {% raw %}<span class="math inline">\(z_\ell\)</span>{% endraw %}. Order them by covariate distance, resolving equal distances by the original observation order. This rule uses no outcomes. The selected vector is</p>

{% raw %}<div class="math display">\[
S_n^\ell=(Y^\ell_{n,[1]},\ldots,Y^\ell_{n,[q_y^\ell]},
          X^\ell_{n,[1]},\ldots,X^\ell_{n,[q_x^\ell]}),
\qquad q^\ell=q_y^\ell+q_x^\ell.
\]</div>{% endraw %}

<div id="nearest-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose every neighborhood of each target has positive probability in each sample, and the conditional cdfs are continuous at the target in the uniform norm:</p>

{% raw %}<div class="math display">\[
\sup_t|F_a(t\mid z)-F_a(t\mid z_\ell)|\longrightarrow0,
\qquad z\to z_\ell,\quad a\in\{X,Y\}.
\]</div>{% endraw %}
<p>Here the limit is taken within the corresponding covariate support. As both original sample sizes diverge, {% raw %}<span class="math inline">\((S_n^1,\ldots,S_n^L)\)</span>{% endraw %} converges jointly in distribution to independent vectors {% raw %}<span class="math inline">\((S^1,\ldots,S^L)\)</span>{% endraw %}. The coordinates of {% raw %}<span class="math inline">\(S^\ell\)</span>{% endraw %} are independent, with the first {% raw %}<span class="math inline">\(q_y^\ell\)</span>{% endraw %} distributed as {% raw %}<span class="math inline">\(Y\mid Z^Y=z_\ell\)</span>{% endraw %} and the remaining {% raw %}<span class="math inline">\(q_x^\ell\)</span>{% endraw %} as {% raw %}<span class="math inline">\(X\mid Z^X=z_\ell\)</span>{% endraw %}.</p>

</div>
<p>This is Theorem 3 of the paper's <a href="https://arxiv.org/html/2503.14747v3">November 19, 2025 version</a>. A target may be an atom of the covariate distribution. The number of selected outcomes stays fixed as the original samples grow. The paper also studies increasing numbers of selected observations under stronger assumptions; this note concerns the fixed-size result.</p>

<h3 data-note-section="2" id="26-77-why-the-selected-outcomes-have-this-limit">2. Why the selected outcomes have this limit</h3>
<p>Consider one sample and one target. In this calculation, let {% raw %}<span class="math inline">\(m\)</span>{% endraw %} denote that sample's size, let {% raw %}<span class="math inline">\(k\)</span>{% endraw %} be the fixed number selected, and let {% raw %}<span class="math inline">\(Z_{m,[k]}\)</span>{% endraw %} be the covariate at the {% raw %}<span class="math inline">\(k\)</span>{% endraw %}th closest observation. For a radius {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(B_m\)</span>{% endraw %} count observations within that radius of the target. If the neighborhood probability is {% raw %}<span class="math inline">\(p_\varepsilon&gt;0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
P\{|Z_{m,[k]}-z_\ell|&gt;\varepsilon\}
\leq P\{B_m&lt;k\}\longrightarrow0,
\qquad B_m\sim\operatorname{Binomial}(m,p_\varepsilon).
\]</div>{% endraw %}
<p>Once the neighborhood contains at least {% raw %}<span class="math inline">\(k\)</span>{% endraw %} observations, all selected covariates lie inside it. The law of large numbers gives {% raw %}<span class="math inline">\(B_m/m\xrightarrow{P} p_\varepsilon\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(k/m\to0\)</span>{% endraw %}. Thus every selected covariate converges in probability to the target.</p>

<p>Conditional on all covariates, the selected observation indices are fixed and their outcomes are independent. For one target, the joint conditional cdf is therefore a product of conditional outcome cdfs evaluated at the selected covariates. Each factor converges in probability to its target cdf, uniformly over the outcome threshold. The difference between the two products is bounded by the sum of these errors, as shown in Section 5.</p>

<p>For several targets, choose pairwise disjoint neighborhoods around them. With probability tending to one, each neighborhood contains all covariates selected for its target. Within each sample, the selected index sets are then pairwise disjoint. Conditional on all covariates, the joint cdf factors across targets as well as observations. Since the probability of overlap tends to zero, it does not affect the joint limit.</p>

<h3 data-note-section="3" id="26-77-constructing-the-test">3. Constructing the test</h3>
<p>For the size and power statements below, suppose the assumptions of Theorem 1 hold and each target conditional cdf has only finitely many discontinuities. The extra condition limits the number of jumps as the outcome threshold varies. This is Assumption 3 of the paper; it is not part of the joint-convergence result in Theorem 1. Fix one target, call it {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(S_n,S\)</span>{% endraw %} for the selected vector and its limit, with group sizes {% raw %}<span class="math inline">\(q_y,q_x\)</span>{% endraw %}. Form the empirical cdfs from the selected observations and use</p>

{% raw %}<div class="math display">\[
T(S_n)=\sup_t(\widehat F_{n,Y}(t)-\widehat F_{n,X}(t)).
\]</div>{% endraw %}
<p>Large positive values indicate a violation of the null. Fix {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U_1,\ldots,U_q\)</span>{% endraw %} be independent {% raw %}<span class="math inline">\(U(0,1)\)</span>{% endraw %} variables, where {% raw %}<span class="math inline">\(q=q_y+q_x\)</span>{% endraw %}. Compute the same statistic from these uniforms, using the first {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} as the first sample and the remaining {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} as the second. Define</p>

{% raw %}<div class="math display">\[
c_\alpha(q_y,q)=\inf\{c:P(T(U)\leq c)\geq1-\alpha\}.
\]</div>{% endraw %}
<p>Reject when {% raw %}<span class="math inline">\(T(S_n)&gt;c_\alpha(q_y,q)\)</span>{% endraw %}. The strict inequality matters because the reference statistic is discrete even though the uniforms are continuous.</p>

<p>The <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">proof of size control</a> bounds the null statistic in the limit experiment by the uniform statistic. It also shows that the rejection probability based on the selected observations converges to that of the limit test, even when outcomes can tie. For every fixed distribution satisfying the assumptions and the null, the limiting rejection probability is at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(L\)</span>{% endraw %} targets, use the per-target level</p>

{% raw %}<div class="math display">\[
\alpha_L=1-(1-\alpha)^{1/L}.
\]</div>{% endraw %}
<p>Reject if any target rejects at level {% raw %}<span class="math inline">\(\alpha_L\)</span>{% endraw %}, using critical value {% raw %}<span class="math inline">\(c_{\alpha_L}(q_y^\ell,q^\ell)\)</span>{% endraw %} at target {% raw %}<span class="math inline">\(z_\ell\)</span>{% endraw %}. Under the joint null, the limiting probability of any rejection is at most {% raw %}<span class="math inline">\(1-(1-\alpha_L)^L=\alpha\)</span>{% endraw %}. Section 6 explains how joint convergence and the treatment of ties justify this calculation.</p>

<h3 data-note-section="4" id="26-77-a-quantitative-look-at-the-nearest-neighbor-step">4. Distance from the target</h3>
<p>We can also bound the probability that a selected covariate lies far from the target. The following calculation allows a vector covariate {% raw %}<span class="math inline">\(Z\in\mathbb R^d\)</span>{% endraw %}, with Euclidean distance. For one sample of size {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(p(r)=P(\|Z-z_0\|\leq r)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(R_{m,k}\)</span>{% endraw %} be the distance of the {% raw %}<span class="math inline">\(k\)</span>{% endraw %}th closest covariate. Let {% raw %}<span class="math inline">\(B_m\)</span>{% endraw %} count observations in this closed ball, so it is binomial with parameters {% raw %}<span class="math inline">\(m,p(r)\)</span>{% endraw %}. Whenever {% raw %}<span class="math inline">\(k\leq mp(r)/2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
P(R_{m,k}&gt;r)
\leq P\{B_m\leq mp(r)/2\}
\leq e^{-mp(r)/8}.
\]</div>{% endraw %}
<p>To obtain the last inequality, write {% raw %}<span class="math inline">\(p=p(r)\)</span>{% endraw %} and apply Markov's inequality to {% raw %}<span class="math inline">\(e^{-tB_m}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
P(B_m\leq mp/2)
\leq e^{tmp/2}(1-p+pe^{-t})^m
\leq\exp(mp(t/2+e^{-t}-1)).
\]</div>{% endraw %}
<p>Taking {% raw %}<span class="math inline">\(t=\log2\)</span>{% endraw %} makes the exponent at most {% raw %}<span class="math inline">\(-mp/8\)</span>{% endraw %}. No covariate density is required.</p>

<p>Suppose {% raw %}<span class="math inline">\(p(r)\geq cr^d\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %} and all sufficiently small positive {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. Take {% raw %}<span class="math inline">\(r=M m^{-1/d}\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} large enough that {% raw %}<span class="math inline">\(cM^d\geq2k\)</span>{% endraw %}. For all sufficiently large {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the displayed probability is at most {% raw %}<span class="math inline">\(\exp(-cM^d/8)\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(M\)</span>{% endraw %} increase proves {% raw %}<span class="math inline">\(R_{m,k}=O_p(m^{-1/d})\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The bound need not tend to zero with {% raw %}<span class="math inline">\(m\)</span>{% endraw %} when {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is fixed.</p>

<p>If {% raw %}<span class="math inline">\(p_0=P(Z=z_0)&gt;0\)</span>{% endraw %}, the number of exact matches is binomial with mean {% raw %}<span class="math inline">\(mp_0\)</span>{% endraw %}. With probability tending to one, there are at least {% raw %}<span class="math inline">\(k\)</span>{% endraw %} exact matches. On this event, all selected covariates equal {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}; conditional on all covariates, the selected outcomes are independent draws from the target conditional distribution. Resolving equal distances by observation order preserves this conclusion. Choosing the largest outcomes among the exact matches would change their distribution.</p>

<h3 data-note-section="5" id="26-77-the-product-calculation-behind-asymptotic-independence">5. Conditional cdfs and independence</h3>
<p>The product bound used in Section 2 follows from a telescoping identity. For {% raw %}<span class="math inline">\(a_j,b_j\in[0,1]\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\prod_{j=1}^qa_j-\prod_{j=1}^qb_j
=\sum_{j=1}^q(a_j-b_j)
 \left(\prod_{k&lt;j}a_k\right)
 \left(\prod_{k&gt;j}b_k\right).
\]</div>{% endraw %}
<p>Hence the absolute difference is no larger than {% raw %}<span class="math inline">\(\sum_j|a_j-b_j|\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(Z^Y_{n,[j]},Z^X_{n,[j]}\)</span>{% endraw %} for the selected covariates in the two samples. Given all covariates, set {% raw %}<span class="math inline">\(a_j=F_Y(s_j\mid Z^Y_{n,[j]})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b_j=F_Y(s_j\mid z_0)\)</span>{% endraw %} for the first sample, and use the corresponding factors for the second. Uniformly over all outcome thresholds, the difference between the conditional joint cdf and the target product cdf is bounded by</p>

{% raw %}<div class="math display">\[
\sum_{j=1}^{q_y}\sup_t|F_Y(t\mid Z^Y_{n,[j]})-F_Y(t\mid z_0)|
+\sum_{j=1}^{q_x}\sup_t|F_X(t\mid Z^X_{n,[j]})-F_X(t\mid z_0)|.
\]</div>{% endraw %}
<p>Each selected covariate approaches the target, so continuity makes each summand converge to zero in probability. Each summand is bounded by one, and there are only finitely many of them. Their expectations therefore tend to zero. Taking expectations of the conditional cdf proves uniform convergence of the unconditional joint cdf to the target product cdf, and hence convergence in distribution.</p>

<p>Conditional independence by itself does not imply unconditional independence: averaging a product of random conditional cdfs need not give the product of their averages. Here every factor converges to a nonrandom target cdf. The limiting joint cdf is therefore a product. For several targets, the same calculation applies when the selected index sets are pairwise disjoint; the remaining error is at most the probability of overlap, which tends to zero.</p>

<p>For the vector covariates in Section 4, suppose that, within each sample's covariate support and sufficiently close to the target,</p>

{% raw %}<div class="math display">\[
\sup_t|F_a(t\mid z)-F_a(t\mid z_0)|\leq C\|z-z_0\|^\beta,
\qquad a\in\{X,Y\},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(C,\beta&gt;0\)</span>{% endraw %}. Suppose also that each sample's covariate probability in a ball of radius {% raw %}<span class="math inline">\(r\)</span>{% endraw %} is at least {% raw %}<span class="math inline">\(cr^d\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %} and all sufficiently small positive radii. Here {% raw %}<span class="math inline">\(n=\min\{n_y,n_x\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q=q_y+q_x\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} be the largest distance among the selected covariates. On {% raw %}<span class="math inline">\(R_n\leq r\)</span>{% endraw %}, the conditional joint-cdf error is at most {% raw %}<span class="math inline">\(qCr^\beta\)</span>{% endraw %}. On the complement, it is at most one. For a sufficiently small radius satisfying {% raw %}<span class="math inline">\(\max\{q_y,q_x\}\leq cnr^d/2\)</span>{% endraw %}, apply the distance bound to each sample to obtain</p>

{% raw %}<div class="math display">\[
\sup_{s\in\mathbb{R}^q}|F_{S_n}(s)-F_S(s)|
\leq qCr^\beta+2e^{-cnr^d/8}.
\]</div>{% endraw %}
<p>For any fixed {% raw %}<span class="math inline">\(A&gt;0\)</span>{% endraw %}, the choice {% raw %}<span class="math inline">\(r=(A\log n/n)^{1/d}\)</span>{% endraw %} satisfies these radius conditions for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The second term is {% raw %}<span class="math inline">\(2n^{-cA/8}\)</span>{% endraw %}, and the first is of order {% raw %}<span class="math inline">\((\log n/n)^{\beta/d}\)</span>{% endraw %}. This rate bound uses the additional conditions above. Theorem 1 requires only continuity and positive probability in every neighborhood.</p>

<p>The exponent {% raw %}<span class="math inline">\(\beta/d\)</span>{% endraw %} decreases with covariate dimension. The cdf bound applies to events in which every coordinate is at or below its specified threshold. It is not a bound on the error for all events, including the test's rejection event. The <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">calculation for outcomes at atoms</a> proves convergence of rejection probabilities under the assumptions in Section 3.</p>

<h3 data-note-section="6" id="26-77-what-is-actually-computed-and-what-more-data-buy">6. Computing the statistic and the role of sample size</h3>
<p>To compute {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, sort the distinct selected outcomes {% raw %}<span class="math inline">\(v_1&lt;\cdots&lt;v_K\)</span>{% endraw %}. Both empirical cdfs are constant between these values, so</p>

{% raw %}<div class="math display">\[
T=\max\left(0,\max_{1\leq k\leq K}
\left[\frac{\#\{j:Y_{n,[j]}\leq v_k\}}{q_y}
-\frac{\#\{j:X_{n,[j]}\leq v_k\}}{q_x}\right]\right).
\]</div>{% endraw %}
<p>The counts range over the {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} selected observations, respectively. All observations tied at {% raw %}<span class="math inline">\(v_k\)</span>{% endraw %} enter their empirical cdfs together. Breaking outcome ties by arbitrarily ordering sample labels can give a different statistic. The zero in the maximum accounts for thresholds below all observations.</p>

<p>As the original samples grow, the selected conditional distributions converge to those at {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. The limiting comparison still uses only {% raw %}<span class="math inline">\(q\)</span>{% endraw %} outcomes. Under the assumptions in Section 3, the test's power at a fixed alternative converges to that of this fixed-size comparison, which can be below one. If {% raw %}<span class="math inline">\(q\)</span>{% endraw %} also grows, we need to bound the approximation error as more observations are selected. That requires a separate argument.</p>

<p>For multiple targets, joint convergence allows us to construct copies of the whole selected vector and its limit on one probability space so that the copies converge almost surely. Section 5 also gives uniform convergence of each coordinate's marginal cdf. Under the assumptions in Section 3, the argument for ties in the companion note therefore applies at each target: the coupled sample and limit statistics agree with probability tending to one. By a finite union bound, they agree at all targets with probability tending to one. The limiting decisions are independent because each depends only on its own independent limit vector.</p>

<p>Let {% raw %}<span class="math inline">\(p_\ell\)</span>{% endraw %} be the rejection probability in the limit experiment at target {% raw %}<span class="math inline">\(z_\ell\)</span>{% endraw %}, using level {% raw %}<span class="math inline">\(\alpha_L\)</span>{% endraw %}. Under the joint null, each {% raw %}<span class="math inline">\(p_\ell\leq\alpha_L\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
P(\text{at least one rejection})\longrightarrow
1-\prod_{\ell=1}^L(1-p_\ell)
\leq1-(1-\alpha_L)^L.
\]</div>{% endraw %}
<p>This is a limiting bound for each fixed distribution satisfying the null and the stated assumptions. The tests may be dependent in a finite sample. The targets must be fixed in advance; choosing them after looking at outcomes requires a separate analysis of that selection.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bugni_testing_2025" class="csl-entry" role="listitem">
Bugni, Federico A., Ivan A. Canay, and Deborah Kim. 2025. <span>“Testing Conditional Stochastic Dominance at Target Points.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2503.14747">https://doi.org/10.48550/arXiv.2503.14747</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-03-25-randomization-tests-invariance-ties-and-validity %}">Randomization Tests: Invariance, Ties, and Validity</a> · Next: <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">Size Control for Conditional Stochastic Dominance</a></p></nav>

</div>
