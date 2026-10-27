---
layout: "post"
title: "Prediction-Powered Inference"
date: "2024-01-27"
tags: ["statistics", "machine learning"]
excerpt: "Combining predictions with labeled data for statistical inference."
note_series: "Prediction-powered inference"
note_source: "assets/notes/Overleaf Projects (32 items)/prediction powered inference notes/ideas.tex"
redirect_from: ["/2024/01/27/prediction-powered-inference-and-the-mean-rectifier/", "/2024/01/27/prediction-powered-inference-rectifiers-estimators-and-validity/", "/2024/02/25/prediction-powered-confidence-sets-for-convex-losses/", "/2024/03/26/prediction-powered-quantiles-and-regressions/", "/2024/04/25/proofs-for-prediction-powered-estimators/"]
---

<div class="note-content" markdown="0">

<p>A large collection of predictions can describe a population precisely and still be systematically wrong about its outcomes. Prediction-powered inference uses a smaller labeled sample to estimate the resulting error in the particular statistic of interest. <span class="citation" data-cites="angelopoulos_prediction-powered_2023">Angelopoulos et al. (<a href="#ref-angelopoulos_prediction-powered_2023" role="doc-biblioref">2023</a>)</span> combine this correction with uncertainty from the unlabeled sample to obtain confidence sets for means, quantiles, and regression coefficients.</p>

<h3 data-note-section="1" id="31-0-the-two-samples-and-the-prediction-rule">1. The two samples and the prediction rule</h3>
<p>Observe labeled data {% raw %}<span class="math inline">\((X_i,Y_i)_{i=1}^n\)</span>{% endraw %} drawn independently from a distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, and an independent unlabeled sample {% raw %}<span class="math inline">\((\widetilde X_j)_{j=1}^N\)</span>{% endraw %} drawn from its feature marginal {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %}. The predictor {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is fixed, or trained independently of both inference samples. In the latter case, hold the trained rule fixed as the inference sample sizes grow; the arguments below are conditional on the training data.</p>

<p>Both samples must represent the same population for the formulas in this note. Accuracy of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is not an identification assumption. Its errors are measured on the labeled sample, and their variability determines how much precision the predictions contribute.</p>

<p>For a scalar sample {% raw %}<span class="math inline">\((a_i)_{i=1}^m\)</span>{% endraw %}, write</p>

{% raw %}<div class="math display">\[
\overline a_m=\frac1m\sum_{i=1}^m a_i,
\qquad
\widehat{\operatorname{Var}}_m(a)=\frac1m\sum_{i=1}^m(a_i-\overline a_m)^2.
\]</div>{% endraw %}
<p>The divisor {% raw %}<span class="math inline">\(m\)</span>{% endraw %} matches the paper’s algorithms; replacing it by {% raw %}<span class="math inline">\(m-1\)</span>{% endraw %} has no asymptotic effect.</p>

<div id="31-0-the-mean-check-the-sign-and-the-variance">

</div>
<div id="31-0-how-much-can-predictions-help">

</div>
<h3 data-note-section="2" id="31-0-a-mean-correction-variance-and-coverage">2. A mean: correction, variance, and coverage</h3>
<p>For {% raw %}<span class="math inline">\(\theta^*=\mathbb{E}[Y]\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\widehat\theta^{\mathrm{PP}}
=\frac1N\sum_{j=1}^N f(\widetilde X_j)
+\frac1n\sum_{i=1}^n(Y_i-f(X_i)).
\]</div>{% endraw %}
<p>The first average estimates the prediction mean. The second estimates the mean prediction error in the target population.</p>

<div id="ppi-mean" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. If {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f(X)\)</span>{% endraw %} have finite second moments, then</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\widehat\theta^{\mathrm{PP}}]=\theta^*,\qquad
\operatorname{Var}(\widehat\theta^{\mathrm{PP}})
=\frac{\sigma_f^2}{N}+\frac{\sigma_R^2}{n},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\sigma_f^2=\operatorname{Var}(f(X))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_R^2=\operatorname{Var}(Y-f(X))\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(n,N\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(n/N\to r\in(0,\infty)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sigma_R^2+r\sigma_f^2&gt;0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\frac{\widehat\theta^{\mathrm{PP}}-\theta^*}
{\sqrt{\widehat\sigma_R^2/n+\widehat\sigma_f^2/N}}
\xrightarrow{d}\mathcal{N}(0,1),
\]</div>{% endraw %}
<p>using the empirical variances from their respective samples.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Taking expectations cancels {% raw %}<span class="math inline">\(\mathbb{E}[f(X)]\)</span>{% endraw %}. Independence of the two samples makes the variance of their sum the sum of the two variances. The two central limit theorems and independence give</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\theta^{\mathrm{PP}}-\theta^*)
\xrightarrow{d}\mathcal{N}(0,\sigma_R^2+r\sigma_f^2).
\]</div>{% endraw %}
<p>The laws of large numbers for the first and second sample moments give {% raw %}<span class="math inline">\(\widehat\sigma_R^2\xrightarrow{P}\sigma_R^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\sigma_f^2\xrightarrow{P}\sigma_f^2\)</span>{% endraw %}. The denominator is therefore consistent for the positive asymptotic scale, so Slutsky’s theorem gives the result.</p>

</div>
<p>With {% raw %}<span class="math inline">\(z_{1-\alpha/2}\)</span>{% endraw %} the standard normal quantile, the paper’s Algorithm 1 reports</p>

{% raw %}<div class="math display">\[
\widehat\theta^{\mathrm{PP}}
\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{\widehat\sigma_R^2}{n}+\frac{\widehat\sigma_f^2}{N}}.
\]</div>{% endraw %}
<p>This is an asymptotic interval. A biased prediction rule can still yield a valid interval because its average error is estimated. A poor rule can produce a larger residual variance than {% raw %}<span class="math inline">\(\operatorname{Var}(Y)\)</span>{% endraw %} and make the interval wider than the labeled-only interval. A very large {% raw %}<span class="math inline">\(N\)</span>{% endraw %} removes the first variance term, but leaves the uncertainty in estimating the prediction error.</p>

<div id="31-0-the-result-for-an-estimating-equation">

</div>
<h3 data-note-section="3" id="31-0-the-general-rectifier-and-an-exact-coverage-theorem">3. The general rectifier and an exact coverage theorem</h3>
<p>Let a target {% raw %}<span class="math inline">\(\theta^*\in\mathbb R^d\)</span>{% endraw %} satisfy</p>

{% raw %}<div class="math display">\[
\mathbb{E}[g_{\theta^*}(X,Y)]=0.
\]</div>{% endraw %}
<p>For the paper’s convex-estimation problem, {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} minimizes {% raw %}<span class="math inline">\(\mathbb{E}[\ell_\theta(X,Y)]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_\theta\)</span>{% endraw %} is a gradient or an appropriate subgradient. The zero-mean condition must hold for the chosen {% raw %}<span class="math inline">\(g_{\theta^*}\)</span>{% endraw %}; convexity by itself does not justify an arbitrary subgradient at a point of nondifferentiability.</p>

<p>Define the imputed score and its rectifier by</p>

{% raw %}<div class="math display">\[
g_\theta^f=\mathbb{E}[g_\theta(X,f(X))],\qquad
\Delta_\theta=\mathbb{E}[g_\theta(X,Y)-g_\theta(X,f(X))].
\]</div>{% endraw %}
<p>Their sum is the population score, so {% raw %}<span class="math inline">\(g_{\theta^*}^f+\Delta_{\theta^*}=0\)</span>{% endraw %}.</p>

<div id="ppi-convex" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Fix {% raw %}<span class="math inline">\(0&lt;\delta&lt;\alpha&lt;1\)</span>{% endraw %}. Suppose random sets {% raw %}<span class="math inline">\(R_\delta(\theta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_{\alpha-\delta}(\theta)\)</span>{% endraw %} satisfy, for each fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
P(\Delta_\theta\in R_\delta(\theta))\geq1-\delta,
\qquad
P(g_\theta^f\in T_{\alpha-\delta}(\theta))\geq1-(\alpha-\delta).
\]</div>{% endraw %}
<p>Then the prediction-powered set</p>

{% raw %}<div class="math display">\[
C_\alpha^{\mathrm{PP}}
=\{\theta:0\in R_\delta(\theta)+T_{\alpha-\delta}(\theta)\}
\]</div>{% endraw %}
<p>contains the specified target {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. Here {% raw %}<span class="math inline">\(R+T=\{u+v:u\in R,v\in T\}\)</span>{% endraw %} is the Minkowski sum.</p>

</div>
<div class="proof">
<p><em>Proof.</em> At {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}, the probability that either component misses its target is at most {% raw %}<span class="math inline">\(\delta+(\alpha-\delta)=\alpha\)</span>{% endraw %} by the union bound. On the complementary event, the sum of the two sets contains {% raw %}<span class="math inline">\(\Delta_{\theta^*}+g_{\theta^*}^f=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\theta^*\in C_\alpha^{\mathrm{PP}}\)</span>{% endraw %}.</p>

</div>
<p>This is the paper’s finite-sample set argument. It does not require independence between the two confidence sets, nor simultaneous component coverage at every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. It guarantees coverage of each specified population solution; simultaneous coverage of every solution is a stronger assertion. The normal intervals used in the practical algorithms have asymptotic component guarantees, and consequently deliver asymptotic coverage.</p>

<div id="31-0-quantiles-and-regressions-use-the-same-correction">

</div>
<div id="31-0-quantile-uncertainty-comes-from-classification-errors-near-the-quantile">

</div>
<h3 data-note-section="4" id="31-0-quantiles-invert-a-corrected-distribution-function">4. Quantiles: invert a corrected distribution function</h3>
<p>Fix {% raw %}<span class="math inline">\(\tau\in(0,1)\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} be a unique quantile satisfying {% raw %}<span class="math inline">\(P(Y\leq q_\tau)=\tau\)</span>{% endraw %}. In particular, there is no jump of the outcome distribution across {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} at {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %}. Use the quantile-loss score</p>

{% raw %}<div class="math display">\[
g_\theta(y)=\mathbf 1\{y\leq\theta\}-\tau.
\]</div>{% endraw %}
<p>For each candidate {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
A_i(\theta)=\mathbf 1\{Y_i\leq\theta\}-\mathbf 1\{f(X_i)\leq\theta\},
\qquad
B_j(\theta)=\mathbf 1\{f(\widetilde X_j)\leq\theta\}.
\]</div>{% endraw %}
<p>The corrected score is</p>

{% raw %}<div class="math display">\[
\widehat G(\theta)=\overline B_N(\theta)+\overline A_n(\theta)-\tau,
\qquad
\mathbb{E}[\widehat G(\theta)]=P(Y\leq\theta)-\tau.
\]</div>{% endraw %}
<p>Its estimated variance is</p>

{% raw %}<div class="math display">\[
\widehat v(\theta)=
\frac{\widehat{\operatorname{Var}}_n(A(\theta))}{n}
+\frac{\widehat{\operatorname{Var}}_N(B(\theta))}{N}.
\]</div>{% endraw %}
<p>Algorithm 2 inverts the tests:</p>

{% raw %}<div class="math display">\[
C_\alpha^{\mathrm{PP}}
=\{\theta:|\widehat G(\theta)|\leq z_{1-\alpha/2}\sqrt{\widehat v(\theta)}\}.
\]</div>{% endraw %}
<div id="ppi-quantile" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. Under the two-sample assumptions, {% raw %}<span class="math inline">\(n/N\to r\in(0,\infty)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(A_i(q_\tau))+r\operatorname{Var}(B_j(q_\tau))&gt;0,
\]</div>{% endraw %}
<p>the displayed set has asymptotic coverage {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> At the fixed true quantile, {% raw %}<span class="math inline">\(\widehat G(q_\tau)\)</span>{% endraw %} is the sum of two independent centered sample averages. The summands are bounded, so the two CLTs and variance consistency apply. Its studentized value converges to a standard normal variable. Membership of {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} in the set is exactly the event that this value has absolute value at most {% raw %}<span class="math inline">\(z_{1-\alpha/2}\)</span>{% endraw %}.</p>

</div>
<p>No density estimate or derivative of the outcome distribution is needed for this score-inversion proof. The correction {% raw %}<span class="math inline">\(A_i\)</span>{% endraw %} is nonzero only when the observed outcome and prediction fall on opposite sides of the candidate threshold. Thus the relevant prediction errors are threshold-crossing errors, rather than squared errors in the outcome scale.</p>

<p>The corrected function {% raw %}<span class="math inline">\(\overline B_N+\overline A_n\)</span>{% endraw %} need not be monotone, so its accepted set need not be one interval. The paper evaluates candidates on a fine grid. The coverage statement above concerns inversion over the parameter space: a fixed finite grid cannot literally contain a continuous-valued target outside that grid. A numerical implementation must approximate the accepted regions and expand their endpoints to account for grid resolution. Searching only between the smallest and largest predictions also needs a justified range; an arbitrary predictor need not bracket the outcome quantile.</p>

<h3 data-note-section="5" id="31-0-logistic-regression-correct-each-score-coordinate">5. Logistic regression: correct each score coordinate</h3>
<p>For binary {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and fixed dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\mu_\theta(x)=\frac1{1+\exp(-x^\top\theta)},
\qquad
g_\theta(x,y)=x(\mu_\theta(x)-y).
\]</div>{% endraw %}
<p>The target is a finite minimizer of population logistic risk satisfying {% raw %}<span class="math inline">\(\mathbb{E}[g_{\theta^*}(X,Y)]=0\)</span>{% endraw %}. This defines a regression target even when the true conditional mean is not logistic.</p>

<p>Here the rectifier is independent of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\Delta=\mathbb{E}[X(f(X)-Y)].
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(A_i=X_i(f(X_i)-Y_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_j(\theta)=\widetilde X_j(\mu_\theta(\widetilde X_j)-f(\widetilde X_j))\)</span>{% endraw %}. For coordinate {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, form</p>

{% raw %}<div class="math display">\[
\widehat G_k(\theta)=\overline A_{n,k}+\overline B_{N,k}(\theta),
\qquad
\widehat v_k(\theta)=
\frac{\widehat{\operatorname{Var}}_n(A_k)}n+
\frac{\widehat{\operatorname{Var}}_N(B_k(\theta))}N.
\]</div>{% endraw %}
<p>Algorithm 3 reports</p>

{% raw %}<div class="math display">\[
C_\alpha^{\mathrm{PP}}=
\bigcap_{k=1}^d\left\{\theta:
|\widehat G_k(\theta)|\leq z_{1-\alpha/(2d)}\sqrt{\widehat v_k(\theta)}\right\}.
\]</div>{% endraw %}
<p>For a fixed {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, finite second moments and positive combined variances at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} give a studentized CLT in each coordinate. Each coordinate rejects the population target with limiting probability {% raw %}<span class="math inline">\(\alpha/d\)</span>{% endraw %}. The union bound therefore gives</p>

{% raw %}<div class="math display">\[
\liminf_{n,N\to\infty}P(\theta^*\in C_\alpha^{\mathrm{PP}})\geq1-\alpha.
\]</div>{% endraw %}
<p>The coordinates may be dependent. Bonferroni coverage does not require them to be independent, and no inverse Hessian is needed because the method inverts scores rather than constructing a Wald interval around a fitted root. Numerical inversion has the same grid qualification as the quantile algorithm.</p>

<div id="31-0-regression-the-cancellation-and-the-linearization">

</div>
<h3 data-note-section="6" id="31-0-linear-regression-why-the-algorithm-uses-two-fits">6. Linear regression: why the algorithm uses two fits</h3>
<p>Let {% raw %}<span class="math inline">\(\Sigma=\mathbb{E}[XX^\top]\)</span>{% endraw %} be positive definite and define the population least-squares target</p>

{% raw %}<div class="math display">\[
\beta^*=\Sigma^{-1}\mathbb{E}[XY].
\]</div>{% endraw %}
<p>Split it into two population projections:</p>

{% raw %}<div class="math display">\[
\beta_f=\Sigma^{-1}\mathbb{E}[Xf(X)],\qquad
\beta_R=\Sigma^{-1}\mathbb{E}[X(Y-f(X))],\qquad
\beta^*=\beta_f+\beta_R.
\]</div>{% endraw %}
<p>Algorithm 4 estimates the first projection on the unlabeled sample and the second on the labeled sample:</p>

{% raw %}<div class="math display">\[
\widehat\beta_f=\widehat\Sigma_U^{-1}\frac1N\sum_{j=1}^N\widetilde X_j f(\widetilde X_j),\qquad
\widehat\beta_R=\widehat\Sigma_L^{-1}\frac1n\sum_{i=1}^nX_i(Y_i-f(X_i)),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\widehat\Sigma_U=N^{-1}\sum_j\widetilde X_j\widetilde X_j^\top\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\Sigma_L=n^{-1}\sum_iX_iX_i^\top\)</span>{% endraw %}. The estimator is {% raw %}<span class="math inline">\(\widehat\beta^{\mathrm{PP}}=\widehat\beta_f+\widehat\beta_R\)</span>{% endraw %}. The paper writes the second fit with the opposite response {% raw %}<span class="math inline">\(f(X)-Y\)</span>{% endraw %} and subtracts its coefficient; these are the same estimator.</p>

<div id="ppi-ols" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. Assume {% raw %}<span class="math inline">\(\mathbb{E}[(\|X\|+|Y|+|f(X)|)^4]&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(d\)</span>{% endraw %} is fixed, {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive definite, and {% raw %}<span class="math inline">\(n/N\to r\in(0,\infty)\)</span>{% endraw %}. Put</p>

{% raw %}<div class="math display">\[
e_f=f(X)-X^\top\beta_f,\qquad e_R=Y-f(X)-X^\top\beta_R,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
V_f=\Sigma^{-1}\mathbb{E}[XX^\top e_f^2]\Sigma^{-1},\qquad
V_R=\Sigma^{-1}\mathbb{E}[XX^\top e_R^2]\Sigma^{-1}.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta^{\mathrm{PP}}-\beta^*)
\xrightarrow{d}\mathcal{N}(0,V_R+rV_f).
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The normal equations give exact identities</p>

{% raw %}<div class="math display">\[
\widehat\beta_f-\beta_f
=\widehat\Sigma_U^{-1}\frac1N\sum_j\widetilde X_j e_{f,j},
\qquad
\widehat\beta_R-\beta_R
=\widehat\Sigma_L^{-1}\frac1n\sum_iX_i e_{R,i}.
\]</div>{% endraw %}
<p>The population projection equations give {% raw %}<span class="math inline">\(\mathbb{E}[Xe_f]=\mathbb{E}[Xe_R]=0\)</span>{% endraw %}. The moment assumption gives finite score variances and laws of large numbers for both Gram matrices. Replacing each inverse matrix by {% raw %}<span class="math inline">\(\Sigma^{-1}\)</span>{% endraw %} changes its expansion by {% raw %}<span class="math inline">\(o_P(N^{-1/2})\)</span>{% endraw %} or {% raw %}<span class="math inline">\(o_P(n^{-1/2})\)</span>{% endraw %}, respectively. Independent multivariate CLTs for the two score averages yield the displayed covariance.</p>

</div>
<p>Each covariance needs its own fitted residuals. Define</p>

{% raw %}<div class="math display">\[
\widehat V_f=\widehat\Sigma_U^{-1}
\left(\frac1N\sum_j\widetilde X_j\widetilde X_j^\top
(f(\widetilde X_j)-\widetilde X_j^\top\widehat\beta_f)^2\right)
\widehat\Sigma_U^{-1},
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\widehat V_R=\widehat\Sigma_L^{-1}
\left(\frac1n\sum_iX_iX_i^\top
(Y_i-f(X_i)-X_i^\top\widehat\beta_R)^2\right)
\widehat\Sigma_L^{-1}.
\]</div>{% endraw %}
<p>These estimates are consistent. For example, substituting {% raw %}<span class="math inline">\(\widehat\beta_f\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\beta_f\)</span>{% endraw %} in the middle matrix changes it by terms bounded by a constant times</p>

{% raw %}<div class="math display">\[
\|\widehat\beta_f-\beta_f\|\frac1N\sum_j\|\widetilde X_j\|^3|e_{f,j}|
+\|\widehat\beta_f-\beta_f\|^2\frac1N\sum_j\|\widetilde X_j\|^4,
\]</div>{% endraw %}
<p>which vanish by consistency and the fourth-moment assumption. The argument for {% raw %}<span class="math inline">\(\widehat V_R\)</span>{% endraw %} is identical. For a coordinate {% raw %}<span class="math inline">\(k\)</span>{% endraw %} with {% raw %}<span class="math inline">\((V_R+rV_f)_{kk}&gt;0\)</span>{% endraw %}, the interval is</p>

{% raw %}<div class="math display">\[
\widehat\beta_k^{\mathrm{PP}}
\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{(\widehat V_R)_{kk}}n+\frac{(\widehat V_f)_{kk}}N}.
\]</div>{% endraw %}
<p>Using one residual from the final combined coefficient would miss the separate randomness of the two fitted projections. The two sandwich matrices correspond directly to the two terms in the estimator.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-angelopoulos_prediction-powered_2023" class="csl-entry" role="listitem">
Angelopoulos, Anastasios N., Stephen Bates, Clara Fannjiang, Michael I. Jordan, and Tijana Zrnic. 2023. <span>“Prediction-Powered Inference.”</span> arXiv. <a href="http://arxiv.org/abs/2301.09633">http://arxiv.org/abs/2301.09633</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-05-25-prediction-powered-inference-beyond-convex-losses %}">Prediction-Powered Inference Beyond Convex Losses</a></p></nav>

</div>
