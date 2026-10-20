---
layout: "post"
title: "Network TMLE: Structural Models, Dimension Reduction, and Inference"
date: "2024-01-13"
tags: ["econometrics", "networks"]
excerpt: "Network TMLE combines a causal intervention formula with a targeted update of an outcome regression."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/01/13/interference-exposure-and-causal-parameters/", "/2024/01/29/longitudinal-structural-models-under-interference/", "/2024/02/15/exchangeability-and-dimension-reduction-on-networks/", "/2024/03/02/efficient-influence-functions-and-network-tmle/"]
---

<div class="note-content" markdown="0">

<p>Suppose an intervention changes treatment across a network. To estimate its average outcome, we must account for how each person responds to the treatment of others and for the dependence between observations. Network TMLE in <span class="citation" data-cites="van_der_laan_causal_2014"><a href="#ref-van_der_laan_causal_2014" role="doc-biblioref">Van Der Laan (2014)</a></span> approaches the first problem through shared summaries of the network and a targeted correction to an outcome regression. A separate dependence argument is needed for inference.</p>

<h3 data-note-section="1" id="10-0-the-target-and-identification">1. The target and identification</h3>
<p>Let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} be baseline covariates, {% raw %}<span class="math inline">\(A\)</span>{% endraw %} the treatment vector, and {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} an outcome. Suppose known summaries {% raw %}<span class="math inline">\(C_i^Y=c_i(A,W)\)</span>{% endraw %} suffice for the conditional outcome mean, shared across units as {% raw %}<span class="math inline">\(\overline Q(C_i^Y)\)</span>{% endraw %}. For an intervention distribution {% raw %}<span class="math inline">\(g^*(a\mid w)\)</span>{% endraw %}, the target is</p>

{% raw %}<div class="math display">\[
\psi=\mathbb{E}_W\left[\frac1N\sum_i\int\overline Q(c_i(a,W))g^*(a\mid W)\,da\right].
\]</div>{% endraw %}
<p>Consistency, the stipulated causal/no-unmeasured-confounding conditions, and positivity identify this intervention mean. In a longitudinal model, the corresponding formula iterates over time-specific covariate and treatment histories.</p>

<p>Sequential exchangeability and conditional independence of different individuals’ treatment errors are distinct restrictions. Neither should be used as a synonym for the other.</p>

<h3 data-note-section="2" id="10-0-the-influence-function-result">2. The influence-function result</h3>
<div id="network-tmle-gradient" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the paper’s independent-baseline model and shared conditional mechanisms, the efficient influence function contains a baseline component and a weighted outcome-residual component. For the latter,</p>

{% raw %}<div class="math display">\[
D_Y^*=\frac1N\sum_i\frac{\overline h^*(C_i^Y)}{\overline h(C_i^Y)}
(Y_i-\overline Q(C_i^Y)),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\overline h\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline h^*\)</span>{% endraw %} are the average distributions of the outcome summary under observation and intervention. The full gradient also accounts for how each baseline covariate affects the intervention mean.</p>

</div>
<p>The weight must change the distribution of every treatment feature entering the outcome regression. When that regression includes neighbors’ treatments, an individual treatment propensity alone does not describe the required change of measure.</p>

<h3 data-note-section="3" id="10-0-why-the-residual-correction-works">3. Why the residual correction works</h3>
<p>The residual correction has two useful properties. With a correct outcome regression, the residual has conditional mean zero, and multiplying it by a function of the summary preserves that zero expectation. With a correct summary density, the weight instead transfers the residual average to the intervention distribution, where it cancels the regression error. These are the two bias cancellations behind double robustness, under the maintained baseline-distribution and causal assumptions.</p>

<p>TMLE implements that correction by fluctuating the initial regression along a submodel whose score includes the weighted residual. Fitting the fluctuation approximately solves the empirical influence equation. Evaluating the intervention formula at the updated regression yields a plug-in estimate compatible with the outcome range.</p>

<h3 data-note-section="4" id="10-0-what-remains-for-inference">4. What remains for inference</h3>
<p>For inference, write the estimation error as an average of influence contributions plus a remainder. Nuisance rates and empirical-process bounds must make that remainder negligible. A network CLT then applies to the average, whose variance includes covariances between units with overlapping neighborhoods.</p>

<p>The <a href="{% post_url 2024-03-19-causal-inference-from-a-single-social-network %}">single-network asymptotic result</a> determines the sampling scale after targeting. It explains how growing network degree can slow convergence and when the usual {% raw %}<span class="math inline">\(\sqrt N\)</span>{% endraw %} normalization is available.</p>

<h3 data-note-section="5" id="10-0-why-the-weight-is-a-pooled-summary-density-ratio">5. Why the weight is a pooled summary-density ratio</h3>
<p>Introduce an auxiliary index {% raw %}<span class="math inline">\(I\)</span>{% endraw %} drawn uniformly from {% raw %}<span class="math inline">\(\{1,\ldots,N\}\)</span>{% endraw %}, independently of the network data, and set {% raw %}<span class="math inline">\(C=C_I^Y\)</span>{% endraw %}. Its observed density is {% raw %}<span class="math inline">\(\overline h=N^{-1}\sum_i h_i\)</span>{% endraw %}, and its intervention density is {% raw %}<span class="math inline">\(\overline h^*=N^{-1}\sum_i h_i^*\)</span>{% endraw %}. For an integrable function {% raw %}<span class="math inline">\(v\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac1N\sum_i\mathbb{E}[v(C_i^Y)]
=\int v(c)\overline h(c)\,dc.
\]</div>{% endraw %}
<p>Multiplying by the ratio of intervention density to observed density cancels the observed density in this integral:</p>

{% raw %}<div class="math display">\[
\frac1N\sum_i\mathbb{E}\left[
\frac{\overline h^*(C_i^Y)}{\overline h(C_i^Y)}v(C_i^Y)\right]
=\int v(c)\overline h^*(c)\,dc.
\]</div>{% endraw %}
<p>This calculation uses a common regression: the same function of {% raw %}<span class="math inline">\(c\)</span>{% endraw %} must describe each unit’s conditional mean. If an omitted unit characteristic changes that mean, pooling densities leaves the regression misspecified. Thus both the shared regression model and positivity are needed for this change-of-measure argument.</p>

<p>An individual propensity weight changes only the distribution of own treatment. If {% raw %}<span class="math inline">\(C_i^Y\)</span>{% endraw %} includes the number of treated neighbors, the intervention also changes that count’s distribution. The pooled ratio accounts for the whole summary entering the outcome regression.</p>

<h3 data-note-section="6" id="10-0-the-exact-bias-cancellation-in-a-simplified-subproblem">6. The exact bias cancellation in a simplified subproblem</h3>
<p>Hold the baseline distribution and intervention summary density fixed for this calculation. Let {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} be the true shared regression, {% raw %}<span class="math inline">\(\widetilde Q\)</span>{% endraw %} a candidate, and {% raw %}<span class="math inline">\(\widetilde h\)</span>{% endraw %} a candidate observed summary density. The population augmented functional is</p>

{% raw %}<div class="math display">\[
\Psi(\widetilde Q,\widetilde h)
=\int\widetilde Q(c)\overline h^*(c)\,dc
+\mathbb{E}\left[\frac{\overline h^*(C)}{\widetilde h(C)}
(Y-\widetilde Q(C))\right].
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(e(c)=\widetilde Q(c)-Q(c)\)</span>{% endraw %}. Conditioning the residual on {% raw %}<span class="math inline">\(C\)</span>{% endraw %} and subtracting the target yields</p>

{% raw %}<div class="math display">\[
\Psi(\widetilde Q,\widetilde h)-\psi
=\int\overline h^*(c)e(c)
\frac{\widetilde h(c)-\overline h(c)}{\widetilde h(c)}\,dc.
\]</div>{% endraw %}
<p>If either {% raw %}<span class="math inline">\(e=0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\widetilde h=\overline h\)</span>{% endraw %}, the bias vanishes. Otherwise it is a product of nuisance errors. With a denominator bounded away from zero and bounded change-of-measure weights, Cauchy–Schwarz bounds its magnitude by a constant times the product of the corresponding {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} errors.</p>

<p>For the full network target, baseline distributions and the induced intervention law are also estimated. Their errors contribute additional remainder terms. The calculation above isolates one cancellation that the full argument must retain.</p>

<h3 data-note-section="7" id="10-0-how-the-targeting-update-solves-the-score-equation">7. How the targeting update solves the score equation</h3>
<p>For an outcome in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, take an initial regression {% raw %}<span class="math inline">\(Q_0(c)\)</span>{% endraw %} in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and a fitted clever covariate {% raw %}<span class="math inline">\(H(c)=\widehat{\overline h}^*(c)/\widehat{\overline h}(c)\)</span>{% endraw %}. A one-dimensional fluctuation is</p>

{% raw %}<div class="math display">\[
Q_\epsilon(c)=\operatorname{expit}(\operatorname{logit}Q_0(c)+\epsilon H(c)).
\]</div>{% endraw %}
<p>For the Bernoulli log-likelihood criterion, the empirical score and curvature are</p>

{% raw %}<div class="math display">\[
\ell&#x27;(\epsilon)=\sum_iH(C_i^Y)(Y_i-Q_\epsilon(C_i^Y)),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\ell&#x27;&#x27;(\epsilon)=-\sum_iH(C_i^Y)^2
Q_\epsilon(C_i^Y)(1-Q_\epsilon(C_i^Y))\leq0.
\]</div>{% endraw %}
<p>An interior maximizer therefore sets the weighted residual sum to zero. Dependence among observations does not alter this differentiation; it changes the statistical argument for the fitted score and its variance. For bounded nonbinary outcomes, the Bernoulli loss is a working loss for the mean, rather than a claim that the outcome distribution is Bernoulli.</p>

<p>The updated regression stays in the outcome range. Evaluating the intervention mean using it gives a substitution estimator with the same range constraint. Solving an influence equation and respecting the parameter space are compatible here because the fluctuation is chosen to target the relevant residual direction.</p>

<p>The score equation also shows exactly how targeting differs from an arbitrary regression refit. At {% raw %}<span class="math inline">\(\epsilon=0\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(S_0=\sum_iH_i(Y_i-Q_{0i})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_0=\sum_iH_i^2Q_{0i}(1-Q_{0i})\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(I_0&gt;0\)</span>{% endraw %}, one Newton step is</p>

{% raw %}<div class="math display">\[
\epsilon_1=\frac{S_0}{I_0},\qquad
Q_{\epsilon_1,i}-Q_{0i}
=\epsilon_1H_iQ_{0i}(1-Q_{0i})+O(\epsilon_1^2H_i^2).
\]</div>{% endraw %}
<p>The update therefore responds to the intervention-weighted residual. Its size is divided by the curvature, which measures how quickly the score changes. An observation with a large intervention weight may have little influence on unweighted prediction error but a large influence on this update. Extremely large {% raw %}<span class="math inline">\(H_i\)</span>{% endraw %} can make a few observations dominate both quantities.</p>

<p>For the simplified fixed-baseline functional, the preceding bias identity gives a more precise orthogonality calculation. Along {% raw %}<span class="math inline">\(\widetilde Q=Q+tu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde h=\overline h+tv\)</span>{% endraw %}, with denominators positive,</p>

{% raw %}<div class="math display">\[
\Psi(Q+tu,\overline h+tv)-\psi
=t^2\int\frac{\overline h^*(c)u(c)v(c)}{\overline h(c)+tv(c)}\,dc.
\]</div>{% endraw %}
<p>The absence of a term proportional to {% raw %}<span class="math inline">\(t\)</span>{% endraw %} is the useful feature of this identity. The two nuisance errors enter as a product, which may be small enough for inference even when neither nuisance estimate has the final parameter’s convergence rate. By comparison, the uncorrected regression average has the first-order error {% raw %}<span class="math inline">\(\int(\widetilde Q-Q)\overline h^*\)</span>{% endraw %}.</p>

<p>There are therefore two arguments to complete in a network application. The pooled density identity explains the bias correction under a shared summary model. The dependence argument establishes how accurately its empirical average estimates its expectation.</p>

<h3 data-note-section="8" id="10-0-baseline-uncertainty-is-not-an-ordinary-empirical-mean-by-default">8. Baseline uncertainty is not an ordinary empirical mean by default</h3>
<p>Let {% raw %}<span class="math inline">\(G(W)\)</span>{% endraw %} denote the intervention average for a fixed baseline vector. Changing one baseline variable can change several units’ intervention outcomes through the network. In an illustrative model with separately varying independent baseline marginals, perturbing the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th marginal along a mean-zero score {% raw %}<span class="math inline">\(s_j\)</span>{% endraw %} changes the target by</p>

{% raw %}<div class="math display">\[
\mathbb{E}[G(W)s_j(W_j)]
=\mathbb{E}[(\mathbb{E}(G(W)\mid W_j)-\psi)s_j(W_j)].
\]</div>{% endraw %}
<p>This explains the conditional-expectation terms in baseline gradient calculations. Shared marginal models impose further pooling restrictions. Simply inserting {% raw %}<span class="math inline">\(G(W_j)-\psi\)</span>{% endraw %} would ignore the fact that {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a function of the entire baseline vector.</p>

<p>Finally, the nuisance-product remainder must be negligible at the actual network normalization. If the estimator fluctuates at rate {% raw %}<span class="math inline">\(C_N^{-1/2}\)</span>{% endraw %}, a schematic requirement is {% raw %}<span class="math inline">\(r_Qr_h=o(C_N^{-1/2})\)</span>{% endraw %}, alongside the other remainder and empirical-process conditions. Targeting removes a leading bias term; the <a href="{% post_url 2024-03-19-causal-inference-from-a-single-social-network %}">network dependence argument</a> still determines the sampling scale and covariance calculation.</p>

<h3 id="10-0-making-the-product-error-condition-precise">Making the product-error condition precise</h3>
<p>For the simplified functional in Section 6, a useful sufficient condition is {% raw %}<span class="math inline">\(\overline h^*/\widetilde h\le M\)</span>{% endraw %} on the common support. Write {% raw %}<span class="math inline">\(r=(\widetilde h-\overline h)/\overline h\)</span>{% endraw %} where {% raw %}<span class="math inline">\(\overline h&gt;0\)</span>{% endraw %}. The exact remainder becomes</p>
{% raw %}<div class="math display">\[R=\int \frac{\overline h^*}{\widetilde h}\,e\,r\,\overline h\,dc,
\qquad |R|\le M\|e\|_{L^2(\overline h)}\|r\|_{L^2(\overline h)}.\]</div>{% endraw %}
<p>Thus the density error is measured here as a relative error under the observed summary law. This formulation makes the measure in each norm explicit and avoids assuming that a Lebesgue density is bounded below over an unbounded support. If the two norms are {% raw %}<span class="math inline">\(O_p(r_Q)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O_p(r_h)\)</span>{% endraw %}, multiplication by the network normalization gives {% raw %}<span class="math inline">\(\sqrt{C_N}R=O_p(\sqrt{C_N}r_Qr_h)\)</span>{% endraw %}. The condition {% raw %}<span class="math inline">\(\sqrt{C_N}r_Qr_h\to0\)</span>{% endraw %} removes this term. The baseline-law and empirical-average terms described above still require separate bounds for the full estimator.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-van_der_laan_causal_2014" class="csl-entry" role="listitem">
Van Der Laan, Mark J. 2014. <span>“Causal Inference for a Population of Causally Connected Units.”</span> <em>Journal of Causal Inference</em> 2 (1): 13–74. <a href="https://doi.org/10.1515/jci-2013-0002">https://doi.org/10.1515/jci-2013-0002</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-03-19-causal-inference-from-a-single-social-network %}">Causal Inference from a Single Social Network</a></p></nav>

</div>
