---
layout: "post"
title: "When to Cluster: Sampling, Assignment, and Fixed Effects"
date: "2023-05-21"
tags: ["econometrics", "dependence"]
excerpt: "Whether standard errors should be clustered depends on the sampling and treatment-assignment design."
note_series: "Cluster and network inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Cluster Robust Inference and Network Dependence/stats.tex"
redirect_from: ["/2025/03/13/when-should-standard-errors-be-clustered/", "/2025/03/13/when-to-cluster-sampling-assignment-and-fixed-effects/", "/2025/04/03/limits-of-robust-and-cluster-variance-estimators/", "/2025/04/23/causal-cluster-variance-and-the-two-stage-bootstrap/", "/2025/05/14/fixed-effects-under-clustered-sampling-and-assignment/", "/2025/08/04/a-central-limit-theorem-for-clustered-ols/", "/2025/08/24/convergence-of-the-cluster-variance-estimator/", "/2025/09/14/a-central-limit-theorem-for-clustered-fixed-effects/", "/2025/10/04/convergence-of-the-robust-variance-estimator/", "/2025/10/25/consistency-of-causal-cluster-variance/", "/2025/11/15/supporting-limits-for-clustered-inference/"]
---

<div class="note-content" markdown="0">

<p>A variance describes how an estimator changes when data are collected again. To decide whether to cluster, one must specify what is sampled again and how treatment is reassigned. Holding potential outcomes fixed, <span class="citation" data-cites="abadie_when_2022">(<a href="#ref-abadie_when_2022" role="doc-biblioref">Abadie et al. 2022</a>)</span> separates these sources of randomness and shows why residual correlation alone cannot determine the answer.</p>

<h3 data-note-section="1" id="12-41-the-design">1. The design</h3>
<p>A finite population of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} units is partitioned into clusters of sizes {% raw %}<span class="math inline">\(n_m\)</span>{% endraw %}. Sample each cluster with probability {% raw %}<span class="math inline">\(q\)</span>{% endraw %} and each unit within a sampled cluster with probability {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Independently, draw a treatment probability {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %} for each cluster, with mean {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} and variance {% raw %}<span class="math inline">\(\sigma_A^2\)</span>{% endraw %}, then assign treatment independently conditional on {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %}.</p>

<p>The estimand is the population ATE {% raw %}<span class="math inline">\(\tau=\sum_m(n_m/n)\tau_m\)</span>{% endraw %}. Under the paper’s growing-cluster-count, cluster-size, bounded-outcome, and nondegeneracy conditions, the difference in means has a CLT around {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="12-41-what-the-variance-comparison-says">2. What the variance comparison says</h3>
<div id="design-cluster-variance" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. In this design, the usual heteroskedasticity-robust variance can be either too small or too large. The limiting cluster-robust variance is conservative, with excess</p>

{% raw %}<div class="math display">\[
v^{\rm cluster}-v
=\frac{pq}{n}\sum_mn_m^2(\tau_m-\tau)^2\ge0.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is the asymptotic variance for the estimator scaled by the square root of the realized sample size.</p>

</div>
<p>The comparison belongs to this sampling and assignment model. Changing which clusters are sampled or how treatments are assigned changes the covariance terms and can change the ordering of variance formulas.</p>

<h3 data-note-section="3" id="12-41-derive-the-two-sources-of-covariance">3. Derive the two sources of covariance</h3>
<p>Write sample inclusion as {% raw %}<span class="math inline">\(R_i=C_mB_i\)</span>{% endraw %} for two distinct units in cluster {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(C_m\)</span>{% endraw %} has mean {% raw %}<span class="math inline">\(q\)</span>{% endraw %} and the {% raw %}<span class="math inline">\(B_i\)</span>{% endraw %} have mean {% raw %}<span class="math inline">\(p\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(R_i,R_j)=qp^2-(qp)^2=p^2q(1-q).
\]</div>{% endraw %}
<p>Likewise, iterating over the random assignment probability gives</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(W_i,W_j)=\operatorname{Var}(A_m)=\sigma_A^2.
\]</div>{% endraw %}
<p>Both mechanisms create within-cluster cross-products in the estimator’s variance. Sampling every cluster eliminates common cluster-inclusion randomness. A fixed common treatment probability eliminates common assignment-probability randomness. These are properties of the design, whether or not a residual plot displays a pattern.</p>

<h3 data-note-section="4" id="12-41-why-the-conventional-cluster-formula-can-overshoot">4. Why the conventional cluster formula can overshoot</h3>
<p>The displayed excess variance depends on between-cluster treatment-effect heterogeneity and the fraction of the population observed. With equal cluster sizes {% raw %}<span class="math inline">\(n_m=h\)</span>{% endraw %}, it reduces to</p>

{% raw %}<div class="math display">\[
pqh\,\frac1M\sum_m(\tau_m-\tau)^2.
\]</div>{% endraw %}
<p>Thus the excess can remain large when many units per cluster are observed and the sampled clusters represent much of the population. Small {% raw %}<span class="math inline">\(p\)</span>{% endraw %} alone is not sufficient to dismiss clustering if {% raw %}<span class="math inline">\(h\)</span>{% endraw %} grows fast enough.</p>

<p>Cluster fixed effects remove cluster-specific outcome levels, but they do not remove all randomness in assignment or all treatment-effect heterogeneity. Their variance calculation uses within-cluster treatment variation, proportional in expectation to {% raw %}<span class="math inline">\(\mu(1-\mu)-\sigma_A^2\)</span>{% endraw %}. Under fully clustered assignment that quantity is zero, so a within-cluster treatment coefficient is not identified.</p>

<p>The paper’s design-based variance adjustments use this information about sampling fractions and assignment. The corresponding issue for <a href="{% post_url 2024-03-04-network-cluster-robust-inference %}">network clusters</a> is different: one must first establish that the proposed groups are sufficiently independent.</p>

<h3 data-note-section="5" id="12-41-a-score-expansion-for-the-difference-in-means">5. A score expansion for the difference in means</h3>
<p>Let {% raw %}<span class="math inline">\(\overline Y(t)=n^{-1}\sum_iY_i(t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e_i(t)=Y_i(t)-\overline Y(t)\)</span>{% endraw %}. Linearizing the treated and untreated sample means around their expected counts gives</p>

{% raw %}<div class="math display">\[
\widehat\tau-\tau
\approx\frac1{npq}\sum_iH_i,
\qquad
H_i\triangleq R_i\left(\frac{W_i}{\mu}e_i(1)
-\frac{1-W_i}{1-\mu}e_i(0)\right).
\]</div>{% endraw %}
<p>This follows from the ratio identity {% raw %}<span class="math inline">\((A+a)/(B+b)-A/B\approx(a-(A/B)b)/B\)</span>{% endraw %} for each arm. The expected treated count is {% raw %}<span class="math inline">\(npq\mu\)</span>{% endraw %} and the expected control count is {% raw %}<span class="math inline">\(npq(1-\mu)\)</span>{% endraw %}. The paper’s count and nondegeneracy conditions justify replacing the random denominators in this way.</p>

<p>Now write {% raw %}<span class="math inline">\(K_i=W_ie_i(1)/\mu-(1-W_i)e_i(0)/(1-\mu)\)</span>{% endraw %}. Since sampling and assignment are independent,</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(H_i,H_j)
=\mathbb{E}[R_iR_j]\operatorname{Cov}(K_i,K_j)
+\operatorname{Cov}(R_i,R_j)\mathbb{E}K_i\mathbb{E}K_j.
\]</div>{% endraw %}
<p>For distinct units in the same cluster, {% raw %}<span class="math inline">\(\mathbb{E}[R_iR_j]=qp^2\)</span>{% endraw %}. Also</p>

{% raw %}<div class="math display">\[
\mathbb{E}K_i=e_i(1)-e_i(0)=\tau_i-\tau,
\]</div>{% endraw %}
<p>and, because {% raw %}<span class="math inline">\(K_i\)</span>{% endraw %} is affine in {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(K_i,K_j)
=\sigma_A^2
\left(\frac{e_i(1)}\mu+\frac{e_i(0)}{1-\mu}\right)
\left(\frac{e_j(1)}\mu+\frac{e_j(0)}{1-\mu}\right).
\]</div>{% endraw %}
<p>The two cross-unit terms involve different products of fixed potential outcomes, whose signs need not agree. Deleting all off-diagonal terms can therefore make the robust formula too large or too small, depending on the design and outcomes.</p>

<h4 data-note-section="5.1" id="12-41-assemble-the-full-variance">5.1. Assemble the full variance</h4>
<p>To obtain the variance of the full score, retain diagonal and off-diagonal terms separately before summing. Define</p>

{% raw %}<div class="math display">\[
d_i\triangleq e_i(1)-e_i(0),\qquad
a_i\triangleq\frac{e_i(1)}\mu+\frac{e_i(0)}{1-\mu},\qquad
b_i\triangleq\frac{e_i(1)^2}\mu+\frac{e_i(0)^2}{1-\mu}.
\]</div>{% endraw %}
<p>For a single unit, {% raw %}<span class="math inline">\(R_i^2=R_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W_i(1-W_i)=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb{E}H_i^2=pqb_i\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\((\mathbb{E}H_i)^2=p^2q^2d_i^2\)</span>{% endraw %}. For distinct units in one cluster, the preceding calculation gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(H_i)=pqb_i-p^2q^2d_i^2,
\qquad
\operatorname{Cov}(H_i,H_j)
=qp^2\sigma_A^2a_ia_j+p^2q(1-q)d_id_j.
\]</div>{% endraw %}
<p>Different clusters are independent. Divide the variance of the total score by {% raw %}<span class="math inline">\(npq\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(D_m=\sum_{i\in m}d_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_m^{\rm score}=\sum_{i\in m}a_i\)</span>{% endraw %}. The identity {% raw %}<span class="math inline">\(\sum_{i\ne j}a_ia_j=(\sum_i a_i)^2-\sum_i a_i^2\)</span>{% endraw %} now yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
v={}&amp;\frac1n\sum_i b_i
-\frac pn\sum_i d_i^2
-\frac{p\sigma_A^2}{n}\sum_i a_i^2\\
&amp;+\frac{p(1-q)}n\sum_mD_m^2
+\frac{p\sigma_A^2}{n}\sum_m(A_m^{\rm score})^2.
\end{aligned}
\]</div>{% endraw %}
<p>The coefficient of {% raw %}<span class="math inline">\(\sum_i d_i^2\)</span>{% endraw %} is {% raw %}<span class="math inline">\(-pq-p(1-q)=-p\)</span>{% endraw %}. This is an easy term to lose if the diagonal and off-diagonal contributions are combined too quickly. The formula is exact for the variance of the linearized score. The ratio-estimation remainder is what requires the paper’s asymptotic assumptions.</p>

<p>The first term is the probability limit of the usual robust variance on this scale. The negative terms remove variability that the realized design does not generate. The two cluster-square terms add back the common variation induced by sampling clusters and drawing their assignment probabilities. In particular, when {% raw %}<span class="math inline">\(q=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_A^2=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
v^{\rm robust}-v=\frac pn\sum_i(\tau_i-\tau)^2.
\]</div>{% endraw %}
<p>Even without clustered assignment, the robust formula can be conservative for a finite-population ATE. Conversely, if {% raw %}<span class="math inline">\(d_i=0\)</span>{% endraw %} and the {% raw %}<span class="math inline">\(a_i\)</span>{% endraw %} have the same sign within a large cluster, clustered assignment creates positive cross-products and the robust formula can be too small. These are different designs applied to fixed potential outcomes. They need not have different-looking regression residuals.</p>

<p>The covariance matrix must correspond to the sampling and assignment repetitions used to define the target. A superpopulation error model introduces another source of variation, potentially including changes in cluster effects. That variation is absent when the finite population of clusters is held fixed.</p>

<h3 data-note-section="6" id="12-41-deriving-the-conservative-term">6. Deriving the conservative term</h3>
<p>A cluster variance estimator aggregates scores first and then squares. At the population linearization above, the expected cluster sum is</p>

{% raw %}<div class="math display">\[
\mathbb{E}\sum_{i\in m}H_i
=pq\sum_{i\in m}(\tau_i-\tau)
=pq\,n_m(\tau_m-\tau).
\]</div>{% endraw %}
<p>The second moment of this sum differs from its variance by the square of that expectation. Scaling the estimator by {% raw %}<span class="math inline">\(\sqrt{npq}\)</span>{% endraw %} divides the score variance by {% raw %}<span class="math inline">\(npq\)</span>{% endraw %}. Consequently the extra term is</p>

{% raw %}<div class="math display">\[
\frac1{npq}\sum_m\left(pq\,n_m(\tau_m-\tau)\right)^2
=\frac{pq}{n}\sum_mn_m^2(\tau_m-\tau)^2.
\]</div>{% endraw %}
<p>Although the total score is centered, a cluster’s score can have nonzero mean when its treatment effect differs from the population average. Squaring each cluster sum before aggregation retains the squares of these means. They give the excess variance in the proposition.</p>

<p>Equal cluster-average treatment effects remove this particular excess. Observing every cluster does not: assignment remains random, but selection of cluster effects no longer is. Sampling fractions therefore determine which components belong in the target variance.</p>

<h3 data-note-section="7" id="12-41-fixed-effects-and-the-source-of-within-cluster-variation">7. Fixed effects and the source of within-cluster variation</h3>
<p>Conditional on {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %}, individual assignments are independent Bernoulli variables. For a cluster of size {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\overline W_m=h^{-1}\sum_iW_i\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\sum_{i\in m}(W_i-\overline W_m)^2\mid A_m\right]
=(h-1)A_m(1-A_m).
\]</div>{% endraw %}
<p>To derive it, use {% raw %}<span class="math inline">\(\sum_i(W_i-\overline W_m)^2=\sum_iW_i-h\overline W_m^2\)</span>{% endraw %} and the conditional mean and variance of {% raw %}<span class="math inline">\(\overline W_m\)</span>{% endraw %}. Averaging over {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}[A_m(1-A_m)]
=\mu-\mathbb{E}[A_m^2]
=\mu(1-\mu)-\sigma_A^2.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %} is always zero or one, all treatment varies between clusters and this quantity is zero. Cluster fixed effects then absorb treatment completely. When it is positive, within-cluster variation identifies a coefficient, but the weighting and variance depend on how much such variation each cluster supplies.</p>

<p>Fixed effects specify which treatment variation remains available. They do not settle how the residualized score co-varies across observations. The clustering calculation must be performed again for that residualized design.</p>

<p>To see the weighting directly, take a census and write {% raw %}<span class="math inline">\(N_{m1}=\sum_{i\in m}W_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N_{m0}=n_m-N_{m1}\)</span>{% endraw %}. In a cluster with both arms observed,</p>

{% raw %}<div class="math display">\[
\sum_{i\in m}(W_i-\overline W_m)Y_i
=\frac{N_{m1}N_{m0}}{n_m}
 (\overline Y_{m1}-\overline Y_{m0}),\qquad
\sum_{i\in m}(W_i-\overline W_m)^2
=\frac{N_{m1}N_{m0}}{n_m}.
\]</div>{% endraw %}
<p>Frisch–Waugh–Lovell therefore makes the fixed-effect coefficient a weighted average of within-cluster differences, with weights proportional to {% raw %}<span class="math inline">\(N_{m1}N_{m0}/n_m\)</span>{% endraw %}. Clusters containing only one arm contribute zero. This identity also explains why a cluster with many observations but almost no within-cluster treatment variation contributes little to this regression.</p>

<p>For large {% raw %}<span class="math inline">\(n_m\)</span>{% endraw %}, the weight is approximately {% raw %}<span class="math inline">\(n_m A_m(1-A_m)\)</span>{% endraw %}. Under the common assignment law and suitable averaging over many clusters, its expectation is proportional to {% raw %}<span class="math inline">\(n_m\)</span>{% endraw %}, recovering the population ATE under the paper’s conditions. If assignment laws instead vary systematically with cluster treatment effects, that step fails: the coefficient can target an assignment-variance-weighted effect. The algebra exposes the extra assumption needed to interpret the fixed-effect coefficient.</p>

<h3 data-note-section="8" id="12-41-what-to-ask-of-the-design">8. What to ask of the design</h3>
<p>The formulas separate cluster sampling, sampling within clusters, and common variation in treatment probabilities. Each contributes different terms. Residuals alone cannot reveal the sampling fractions or establish which assignment mechanism generated treatment.</p>

<p>Under interference, outcomes also depend on other assignments, changing the score representation itself. Network dependence may cross the proposed cluster boundaries as well. Applying these variance calculations in either setting requires a corresponding identification model and covariance argument.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-abadie_when_2022" class="csl-entry" role="listitem">
Abadie, Alberto, Susan Athey, Guido Imbens, and Jeffrey Wooldridge. 2022. <span>“When Should You Adjust Standard Errors for Clustering?”</span> May. <a href="http://arxiv.org/abs/1710.02926">http://arxiv.org/abs/1710.02926</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Additional reading: <a href="{% post_url 2024-04-17-heavy-tailed-cluster-inference-bootstrap-failure-and-score-subsampling %}">Heavy-Tailed Cluster Inference: Bootstrap Failure and Score Subsampling</a> · Next: <a href="{% post_url 2024-03-04-network-cluster-robust-inference %}">Network Cluster-Robust Inference</a></p></nav>

</div>
