---
layout: "post"
title: "Prediction-Powered Inference: Rectifiers, Estimators, and Validity"
date: "2024-01-27"
tags: ["statistics", "machine learning"]
excerpt: "Prediction-powered inference uses a labeled sample to correct the errors in a much larger set of predictions."
note_series: "Prediction-powered inference"
note_source: "assets/notes/Overleaf Projects (32 items)/prediction powered inference notes/ideas.tex"
redirect_from: ["/2024/01/27/prediction-powered-inference-and-the-mean-rectifier/", "/2024/02/25/prediction-powered-confidence-sets-for-convex-losses/", "/2024/03/26/prediction-powered-quantiles-and-regressions/", "/2024/04/25/proofs-for-prediction-powered-estimators/"]
---

<div class="note-content" markdown="0">

<p>Suppose predictions are cheap but outcome labels are scarce. Averaging predictions alone may estimate the wrong mean; a smaller labeled sample can estimate and subtract that prediction error. <span class="citation" data-cites="angelopoulos_prediction-powered_2023"><a href="#ref-angelopoulos_prediction-powered_2023" role="doc-biblioref">Angelopoulos et al. (2023)</a></span> extend this correction to estimating equations and confidence sets. The correction gives validity, while predictive accuracy determines the possible gain in precision.</p>

<h3 data-note-section="1" id="31-0-the-result-for-an-estimating-equation">1. The result for an estimating equation</h3>
<p>Let {% raw %}<span class="math inline">\(\theta^*\in\mathbb R^m\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(\mathbb{E}[g_{\theta^*}(X,Y)]=0\)</span>{% endraw %}. For a convex loss, this is the population first-order condition, provided the target is an interior minimizer with an appropriate zero-mean gradient or subgradient. Define</p>

{% raw %}<div class="math display">\[
\Delta_\theta\triangleq\mathbb{E}[g_\theta(X,Y)-g_\theta(X,f(X))],
\qquad g_\theta^f\triangleq\mathbb{E}[g_\theta(X,f(X))].
\]</div>{% endraw %}
<div id="ppi-convex" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose {% raw %}<span class="math inline">\(R_\delta(\theta)\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(\Delta_\theta\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\delta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T_{\alpha-\delta}(\theta)\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(g_\theta^f\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-(\alpha-\delta)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
C_\alpha\triangleq\{\theta:0\in R_\delta(\theta)+T_{\alpha-\delta}(\theta)\}
\]</div>{% endraw %}
<p>covers {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. The sum here is the Minkowski sum of sets.</p>

</div>
<p>It suffices to check coverage at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}. If both component sets cover, their sum contains {% raw %}<span class="math inline">\(\Delta_{\theta^*}+g_{\theta^*}^f=0\)</span>{% endraw %}, so the candidate is retained. The union bound controls failure without requiring simultaneous bands over {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}.</p>

<p>For the usual normal approximation, take independent labeled and unlabeled samples from the same population, of sizes {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Condition on a predictor trained independently of both. Average the gradient differences in the labeled sample and the imputed gradients in the unlabeled sample. With fixed dimension, finite second moments, nonzero coordinate variances, and {% raw %}<span class="math inline">\(n/N\to p\in(0,1)\)</span>{% endraw %}, retain {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} when, for every coordinate {% raw %}<span class="math inline">\(j\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
|\widehat\Delta_{\theta,j}+\widehat g^f_{\theta,j}|
\leq z_{1-\alpha/(2m)}
\sqrt{s^2_{\Delta,j}(\theta)/n+s^2_{g,j}(\theta)/N}.
\]</div>{% endraw %}
<p>A CLT for the two independent averages and a union bound across coordinates give asymptotic coverage at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="31-0-the-mean-check-the-sign-and-the-variance">2. The mean: check the sign and the variance</h3>
<p>For {% raw %}<span class="math inline">\(g_\theta(y)=\theta-y\)</span>{% endraw %}, the estimator is</p>

{% raw %}<div class="math display">\[
\widehat\theta^{\rm PP}
=\frac1N\sum_{i=1}^N f(\widetilde X_i)
 +\frac1n\sum_{i=1}^n(Y_i-f(X_i)).
\]</div>{% endraw %}
<p>Its expectation is {% raw %}<span class="math inline">\(\mathbb{E}Y\)</span>{% endraw %}, even if {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is biased. Independence gives the exact variance decomposition</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\theta^{\rm PP})
=\frac{\operatorname{Var}(f(X))}{N}
 +\frac{\operatorname{Var}(Y-f(X))}{n}.
\]</div>{% endraw %}
<p>For large {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, prediction-error variance in the labeled sample determines most of the interval width. Accurate predictions can reduce this variance; inaccurate ones can increase it. Coverage alone gives no efficiency guarantee.</p>

<h3 data-note-section="3" id="31-0-quantiles-and-regressions-use-the-same-correction">3. Quantiles and regressions use the same correction</h3>
<p>For a continuous outcome distribution at its {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}-quantile, use {% raw %}<span class="math inline">\(g_\theta(y)=\mathbf1\{y\leq\theta\}-\tau\)</span>{% endraw %}. Correcting the predicted cdf gives</p>

{% raw %}<div class="math display">\[
\widehat F^{\rm PP}(\theta)
=\frac1N\sum_i\mathbf1\{f(\widetilde X_i)\leq\theta\}
 +\frac1n\sum_i\left[\mathbf1\{Y_i\leq\theta\}-\mathbf1\{f(X_i)\leq\theta\}\right].
\]</div>{% endraw %}
<p>Invert the test that this expression equals {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. A numerical grid should cover the parameter range of interest; the range of the predictions can miss the true quantile.</p>

<p>For logistic regression, {% raw %}<span class="math inline">\(g_\theta(x,y)=x(\mu_\theta(x)-y)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mu_\theta(x)=(1+e^{-x&#x27;\theta})^{-1}\)</span>{% endraw %}. The terms involving {% raw %}<span class="math inline">\(\mu_\theta\)</span>{% endraw %} cancel in the rectifier, leaving {% raw %}<span class="math inline">\(\Delta_\theta=\mathbb{E}[X(f(X)-Y)]\)</span>{% endraw %}, which does not depend on {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Poisson regression has the same cancellation with {% raw %}<span class="math inline">\(\mu_\theta(x)=e^{x&#x27;\theta}\)</span>{% endraw %}.</p>

<p>For linear regression, let {% raw %}<span class="math inline">\(\Sigma=\mathbb{E}[XX&#x27;]\)</span>{% endraw %} be nonsingular. Linearity gives the population identity</p>

{% raw %}<div class="math display">\[
\theta^*=\Sigma^{-1}\mathbb{E}[Xf(X)]
       +\Sigma^{-1}\mathbb{E}[X(Y-f(X))].
\]</div>{% endraw %}
<p>Estimate the two terms on the two samples. Each is an OLS coefficient, so the corresponding sandwich covariance matrices add after division by {% raw %}<span class="math inline">\(N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Finite moments, full rank, and the usual OLS linearization conditions give asymptotically valid coordinate intervals. The common-population assumption matters: otherwise the two terms need not cancel the prediction error.</p>

<p>The <a href="{% post_url 2024-05-25-prediction-powered-inference-beyond-convex-losses %}">nonconvex extension</a> replaces first-order conditions with comparisons of population risks.</p>

<h3 data-note-section="4" id="31-0-how-much-can-predictions-help">4. How much can predictions help?</h3>
<p>The mean calculation can be pushed further. Replace {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\lambda f\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} is fixed before looking at the inference samples. This gives the unbiased estimator</p>

{% raw %}<div class="math display">\[
\widehat\mu_\lambda=\overline Y_n+\lambda(\overline f_N-\overline f_n).
\]</div>{% endraw %}
<p>The added difference of prediction averages has mean zero. It is therefore a control variate. With {% raw %}<span class="math inline">\(V_f=\operatorname{Var}(f(X))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C=\operatorname{Cov}(Y,f(X))\)</span>{% endraw %}, the estimator’s variance is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Var}(\widehat\mu_\lambda)
&amp;=\frac{\operatorname{Var}(Y)}n
 -\frac{2\lambda C}n
 +\lambda^2V_f\left(\frac1n+\frac1N\right),\\
\lambda^*&amp;=\frac{C}{V_f(1+n/N)}\quad (V_f&gt;0).
\end{aligned}
\]</div>{% endraw %}
<p>Substitution yields</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\mu_{\lambda^*})
=\frac{\operatorname{Var}(Y)}n
 -\frac{C^2}{nV_f(1+n/N)}.
\]</div>{% endraw %}
<p>This is a useful supplementary derivation, rather than an extra assumption in the coverage theorem. Correlation with the outcome determines the possible gain. A prediction can have a large constant bias and still be useful, because the labeled residual average removes that constant. Conversely, a highly variable prediction uncorrelated with {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} adds noise when its coefficient is fixed at one. Estimating {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} on an independent pilot preserves the conditional calculation; estimating it on the inference sample requires a separate asymptotic argument.</p>

<p>Writing {% raw %}<span class="math inline">\(\rho_{Y,f}=\operatorname{Corr}(Y,f(X))\)</span>{% endraw %}, the variance ratio at the optimal fixed coefficient is</p>

{% raw %}<div class="math display">\[
\frac{\operatorname{Var}(\widehat\mu_{\lambda^*})}
     {\operatorname{Var}(\overline Y_n)}
=1-\frac{\rho_{Y,f}^2}{1+n/N}.
\]</div>{% endraw %}
<p>As {% raw %}<span class="math inline">\(N\)</span>{% endraw %} grows, the optimal variance reduction approaches the squared correlation. Constant prediction bias disappears under the labeled correction and hence does not enter this efficiency calculation.</p>

<p>For the original coefficient-one estimator, let {% raw %}<span class="math inline">\(V_r=\operatorname{Var}(Y-f)\)</span>{% endraw %} and suppose acquiring a labeled observation costs {% raw %}<span class="math inline">\(c_L\)</span>{% endraw %} while an unlabeled one costs {% raw %}<span class="math inline">\(c_U\)</span>{% endraw %}. With the predictor held fixed and a budget {% raw %}<span class="math inline">\(c_Ln+c_UN=B\)</span>{% endraw %}, minimizing {% raw %}<span class="math inline">\(V_r/n+V_f/N\)</span>{% endraw %} in positive real sample sizes gives</p>

{% raw %}<div class="math display">\[
\frac{V_r}{c_Ln^2}=\frac{V_f}{c_UN^2},
\qquad
\frac nN=\sqrt{\frac{V_rc_U}{V_fc_L}}.
\]</div>{% endraw %}
<p>This allocation holds the predictor fixed and treats sample sizes as positive real numbers. Small residual variance reduces the labels needed for a given precision, subject to the sample requirements of the inference method. High prediction variance or costly unlabeled data can favor a less extreme allocation.</p>

<p>The two samples estimate complementary terms in the target equation. Labels measure the correction; unlabeled observations estimate the predicted part. Both sampling errors remain in the variance, regardless of how the samples are allocated.</p>

<p>The common-population assumption also becomes concrete here. If labeled observations follow {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and unlabeled observations follow {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb{E}\widehat\mu_\lambda-\mathbb{E}_PY
=\lambda(\mathbb{E}_Qf(X)-\mathbb{E}_Pf(X)).
\]</div>{% endraw %}
<p>Increasing the unlabeled sample estimates its population’s prediction mean more precisely, without removing the mismatch. Cancellation requires the same prediction mean or an explicit adjustment for population change.</p>

<h3 data-note-section="5" id="31-0-quantile-uncertainty-comes-from-classification-errors-near-the-quantile">5. Quantile uncertainty comes from classification errors near the quantile</h3>
<p>Let {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(F_Y(q_\tau)=\tau\)</span>{% endraw %}, with density {% raw %}<span class="math inline">\(h_Y(q_\tau)&gt;0\)</span>{% endraw %}. At this point write</p>

{% raw %}<div class="math display">\[
A=\mathbf1\{Y\leq q_\tau\},\qquad
B=\mathbf1\{f(X)\leq q_\tau\}.
\]</div>{% endraw %}
<p>The corrected cdf has variance</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat F^{\rm PP}(q_\tau))
=\frac{\operatorname{Var}(A-B)}n+
 \frac{\operatorname{Var}(B)}N.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\((A-B)^2=\mathbf1\{A\ne B\}\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(A-B)
=\mathbb P(A\ne B)-(\mathbb{E}A-\mathbb{E}B)^2.
\]</div>{% endraw %}
<p>For quantile inference, prediction matters through agreement about which side of the target quantile contains the outcome. Squared-error accuracy may help, but the variance here is determined directly by that classification error.</p>

<p>Under local differentiability and the stochastic equicontinuity needed to invert the estimated equation, a consistent approximate root obeys</p>

{% raw %}<div class="math display">\[
\widehat q_\tau-q_\tau
=-\frac{\widehat F^{\rm PP}(q_\tau)-\tau}{h_Y(q_\tau)}
 +o_p(n^{-1/2}+N^{-1/2}).
\]</div>{% endraw %}
<p>To obtain the sign, expand {% raw %}<span class="math inline">\(0=\widehat F^{\rm PP}(\widehat q_\tau)-\tau\)</span>{% endraw %} around {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} and move the empirical error to the other side. A low density amplifies cdf uncertainty into quantile uncertainty. The corrected empirical cdf need not itself be monotone, because one empirical cdf is subtracted. Test inversion at each candidate remains meaningful even in that case; an arbitrary numerical root need not have the asserted expansion.</p>

<h3 data-note-section="6" id="31-0-regression-the-cancellation-and-the-linearization">6. Regression: the cancellation and the linearization</h3>
<p>For logistic regression the empirical corrected score can be written</p>

{% raw %}<div class="math display">\[
\widehat\Psi(\theta)
=\frac1N\sum_i\widetilde X_i
 (\mu_\theta(\widetilde X_i)-f(\widetilde X_i))
 +\frac1n\sum_iX_i(f(X_i)-Y_i).
\]</div>{% endraw %}
<p>Only the first average changes with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Its population derivative at the target is</p>

{% raw %}<div class="math display">\[
H=\mathbb{E}[XX&#x27;\mu_{\theta^*}(X)(1-\mu_{\theta^*}(X))].
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is nonsingular and the usual local uniform convergence holds, integrate the sample derivative along the segment from {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} to a consistent root. The score equation gives</p>

{% raw %}<div class="math display">\[
\widehat\theta-\theta^*
=-H^{-1}\widehat\Psi(\theta^*)
 +o_p(n^{-1/2}+N^{-1/2}).
\]</div>{% endraw %}
<p>The two independent score averages contribute additive covariance terms, each divided by its own sample size. Because correction recovers the population score before linearization, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} need not equal the conditional mean.</p>

<p>For the two-OLS construction above, define {% raw %}<span class="math inline">\(\beta_f=\Sigma^{-1}\mathbb{E}[Xf]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta_r=\Sigma^{-1}\mathbb{E}[X(Y-f)]\)</span>{% endraw %}. Its influence terms are</p>

{% raw %}<div class="math display">\[
\Sigma^{-1}X(f-X&#x27;\beta_f),\qquad
\Sigma^{-1}X(Y-f-X&#x27;\beta_r).
\]</div>{% endraw %}
<p>Each OLS fit estimates its own second-moment matrix, so its influence function contains a fitted projection residual. Using only raw predictions and residual outcomes would omit that variation. The distinction is relevant when prediction is nonlinear in {% raw %}<span class="math inline">\(X\)</span>{% endraw %}.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-angelopoulos_prediction-powered_2023" class="csl-entry" role="listitem">
Angelopoulos, Anastasios N., Stephen Bates, Clara Fannjiang, Michael I. Jordan, and Tijana Zrnic. 2023. <span>“Prediction-Powered Inference.”</span> arXiv. <a href="http://arxiv.org/abs/2301.09633">http://arxiv.org/abs/2301.09633</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-05-25-prediction-powered-inference-beyond-convex-losses %}">Prediction-Powered Inference Beyond Convex Losses</a></p></nav>

</div>
