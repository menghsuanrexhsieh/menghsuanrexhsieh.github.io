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

<p>A researcher may have outcomes for a small sample and predictions for a much larger sample. Averaging the predictions estimates their population mean, which can differ from the mean outcome even when the predictions are accurate. The labeled observations allow the researcher to estimate this difference and account for the uncertainty in the correction.</p>

<p>The exposition below is based on <span class="citation" data-cites="angelopoulos_prediction-powered_2023">Angelopoulos et al. (<a href="#ref-angelopoulos_prediction-powered_2023" role="doc-biblioref">2023</a>)</span>. They apply this argument to estimating equations by expressing the population score as the sum of a score evaluated at predicted outcomes and a correction estimated from labeled observations. At the target parameter, this sum is zero. A confidence set consists of the parameter values for which the estimated sum is sufficiently close to zero, with uncertainty from both samples included.</p>

<div id="31-0-the-two-samples-and-the-prediction-rule">

</div>
<h3 data-note-section="1" id="31-0-sampling-and-the-prediction-rule">1. Sampling and the prediction rule</h3>
<p>Let {% raw %}<span class="math inline">\(P\)</span>{% endraw %} be the joint distribution of a feature vector {% raw %}<span class="math inline">\(X\in\mathcal X\)</span>{% endraw %} and an outcome {% raw %}<span class="math inline">\(Y\in\mathbb R\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %} for the marginal distribution of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}\)</span>{% endraw %} for expectation under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>

<div id="ppi-sampling" class="assumption" data-note-number="1" data-note-kind="Assumption">
<p><strong>Assumption 1</strong>. (Two independent samples.) The labeled observations {% raw %}<span class="math inline">\((X_i,Y_i)_{i=1}^n\)</span>{% endraw %} are independent and identically distributed according to {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The unlabeled observations {% raw %}<span class="math inline">\((\widetilde X_j)_{j=1}^N\)</span>{% endraw %} are independent and identically distributed according to {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %}, and the two samples are independent. The measurable prediction rule {% raw %}<span class="math inline">\(f:\mathcal X\to\mathbb R\)</span>{% endraw %} is fixed independently of both samples.</p>

</div>
<p>An independently trained rule satisfies this sampling requirement after conditioning on its training data. In that interpretation, all expectations and coverage statements below are conditional on the training data, and the fitted rule is held fixed as the inference samples grow. The labeled and unlabeled observations come from the same population, so the prediction error measured in the labeled sample provides the correction needed in the unlabeled sample.</p>

<p>For the asymptotic results, take {% raw %}<span class="math inline">\(n,N\to\infty\)</span>{% endraw %} along a sequence satisfying</p>

{% raw %}<span id="eq:ppi-ratio"></span><div class="math display">\[
\frac nN\longrightarrow r\in[0,\infty).

\tag{1}\]</div>{% endraw %}
<p>The case {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %} allows the unlabeled sample to grow faster than the labeled sample. The distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and the prediction rule {% raw %}<span class="math inline">\(f\)</span>{% endraw %} remain fixed along this sequence. The results are pointwise at this distribution and rule.</p>

<p>For a scalar sample {% raw %}<span class="math inline">\(a_1,\ldots,a_m\)</span>{% endraw %}, use the notation</p>

{% raw %}<div class="math display">\[
\overline a_m\triangleq\frac1m\sum_{i=1}^m a_i,
\qquad
\widehat{\operatorname{Var}}_m(a)
\triangleq\frac1m\sum_{i=1}^m(a_i-\overline a_m)^2.
\]</div>{% endraw %}
<p>The divisor {% raw %}<span class="math inline">\(m\)</span>{% endraw %} agrees with the paper’s algorithms. Using {% raw %}<span class="math inline">\(m-1\)</span>{% endraw %} gives the same limits. Let {% raw %}<span class="math inline">\(z_u\)</span>{% endraw %} denote the {% raw %}<span class="math inline">\(u\)</span>{% endraw %} quantile of the standard normal distribution, and fix a coverage level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} with {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}.</p>

<p>A studentized statistic may be assigned any fixed value when its estimated variance is zero. Under the positive limiting variance conditions below, the probability of this event tends to zero.</p>

<div id="31-0-the-mean-check-the-sign-and-the-variance">

</div>
<div id="31-0-a-mean-correction-variance-and-coverage">

</div>
<h3 data-note-section="2" id="31-0-correcting-the-mean">2. Correcting the mean</h3>
<p>For the target {% raw %}<span class="math inline">\(\theta^*\triangleq\mathbb{E}[Y]\)</span>{% endraw %}, define the prediction error {% raw %}<span class="math inline">\(R\triangleq Y-f(X)\)</span>{% endraw %}. The identity</p>

{% raw %}<span id="eq:ppi-mean-identity"></span><div class="math display">\[
\theta^*=\mathbb{E}[f(X)]+\mathbb{E}[R]

\tag{2}\]</div>{% endraw %}
<p>suggests estimating the prediction mean with the unlabeled sample and the mean prediction error with the labeled sample. This gives the estimator in Algorithm 1 of the paper:</p>

{% raw %}<span id="eq:ppi-mean-estimator"></span><div class="math display">\[
\widehat\theta^{\mathrm{PP}}
\triangleq\frac1N\sum_{j=1}^N f(\widetilde X_j)
+\frac1n\sum_{i=1}^n\{Y_i-f(X_i)\}.

\tag{3}\]</div>{% endraw %}
<p>Put {% raw %}<span class="math inline">\(\sigma_f^2\triangleq\operatorname{Var}(f(X))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_R^2\triangleq\operatorname{Var}(R)\)</span>{% endraw %}. Their estimators, {% raw %}<span class="math inline">\(\widehat\sigma_f^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\sigma_R^2\)</span>{% endraw %}, are the empirical variances in the unlabeled and labeled samples, respectively.</p>

<div id="ppi-mean" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. (Mean estimation.) Under Assumption <a href="#ppi-sampling">1</a>, suppose {% raw %}<span class="math inline">\(\mathbb{E}[Y^2+f(X)^2]&lt;\infty\)</span>{% endraw %}. Then, for every {% raw %}<span class="math inline">\(n,N\)</span>{% endraw %},</p>

{% raw %}<span id="eq:ppi-mean-variance"></span><div class="math display">\[
\mathbb{E}[\widehat\theta^{\mathrm{PP}}]=\theta^*,
\qquad
\operatorname{Var}(\widehat\theta^{\mathrm{PP}})
=\frac{\sigma_R^2}{n}+\frac{\sigma_f^2}{N}.

\tag{4}\]</div>{% endraw %}
<p>If <a href="#eq:ppi-ratio">the sample-size condition</a> holds and {% raw %}<span class="math inline">\(s^2\triangleq\sigma_R^2+r\sigma_f^2&gt;0\)</span>{% endraw %}, then</p>

{% raw %}<span id="eq:ppi-mean-clt"></span><div class="math display">\[
\frac{\widehat\theta^{\mathrm{PP}}-\theta^*}
{\sqrt{\widehat\sigma_R^2/n+\widehat\sigma_f^2/N}}
\xrightarrow{d}\mathcal{N}(0,1).

\tag{5}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Taking expectations in <a href="#eq:ppi-mean-estimator">the estimator</a> gives the population identity. Independence makes the covariance between its two averages zero, which proves the variance formula.</p>

<p>To obtain the limit distribution, center each average at its own expectation:</p>

{% raw %}<span id="eq:ppi-mean-decomposition"></span><div class="math display">\[
\sqrt n(\widehat\theta^{\mathrm{PP}}-\theta^*)
=\frac1{\sqrt n}\sum_{i=1}^n(R_i-\mathbb{E}[R])
+\sqrt{\frac nN}\frac1{\sqrt N}\sum_{j=1}^N
\{f(\widetilde X_j)-\mathbb{E}[f(X)]\}.

\tag{6}\]</div>{% endraw %}
<p>The central limit theorem applies to each sum. Their independence gives independent Gaussian limits, and the multiplier on the second sum converges to {% raw %}<span class="math inline">\(\sqrt r\)</span>{% endraw %}. Thus the right-hand side converges to {% raw %}<span class="math inline">\(\mathcal{N}(0,s^2)\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %}, the second term converges to zero in probability because the normalized sum is {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %}.</p>

<p>The laws of large numbers for the first and second moments imply</p>

{% raw %}<div class="math display">\[
\widehat\sigma_R^2+\frac nN\widehat\sigma_f^2
\xrightarrow{P}s^2.
\]</div>{% endraw %}
<p>Multiplying the numerator and denominator in <a href="#eq:ppi-mean-clt">the studentized statistic</a> by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} and applying Slutsky’s theorem proves the result. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>It follows that</p>

{% raw %}<span id="eq:ppi-mean-interval"></span><div class="math display">\[
\widehat\theta^{\mathrm{PP}}
\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{\widehat\sigma_R^2}{n}+\frac{\widehat\sigma_f^2}{N}}

\tag{7}\]</div>{% endraw %}
<p>has coverage converging to {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. The estimator is unbiased for any fixed prediction rule with the stated moments. Its normal confidence interval uses a large-sample approximation.</p>

<p>If {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_R^2=0\)</span>{% endraw %}, the positive-scale condition in Proposition <a href="#ppi-mean">2</a> fails. Here {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is constant almost surely, so its sample average has no error. If {% raw %}<span class="math inline">\(\sigma_f^2&gt;0\)</span>{% endraw %}, the ordinary {% raw %}<span class="math inline">\(\sqrt N\)</span>{% endraw %} central limit theorem for the prediction average validates the same interval. If both variances are zero, the estimator equals {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} almost surely and the zero-width interval covers with probability one.</p>

<div id="31-0-how-much-can-predictions-help">

</div>
<h4 data-note-section="2.1" id="31-0-precision-relative-to-the-labeled-mean">2.1. Precision relative to the labeled mean</h4>
<p>The labeled sample mean has variance {% raw %}<span class="math inline">\(\operatorname{Var}(Y)/n\)</span>{% endraw %}. Expanding the residual variance gives the exact difference</p>

{% raw %}<span id="eq:ppi-efficiency"></span><div class="math display">\[
n\left\{\operatorname{Var}(\widehat\theta^{\mathrm{PP}})
-\operatorname{Var}(\overline Y_n)\right\}
=\left(1+\frac nN\right)\operatorname{Var}(f(X))
-2\operatorname{Cov}(Y,f(X)).

\tag{8}\]</div>{% endraw %}
<p>Predictions reduce variance precisely when twice their covariance with the outcome exceeds the variance term on the right. Adding a constant to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} leaves the estimator unchanged: the constant added to the prediction average is subtracted from the residual average. Thus a constant prediction bias is corrected exactly, while variation in the prediction errors determines precision.</p>

<p>For example, suppose {% raw %}<span class="math inline">\(Y=m(X)+\varepsilon\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(m(X)\triangleq\mathbb{E}[Y\mid X]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[\varepsilon\mid X]=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f(X)=m(X)+c\)</span>{% endraw %} for a constant {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\theta^{\mathrm{PP}})
=\frac{\operatorname{Var}(\varepsilon)}n
+\frac{\operatorname{Var}(m(X))}N,
\qquad
\operatorname{Var}(\overline Y_n)
=\frac{\operatorname{Var}(\varepsilon)+\operatorname{Var}(m(X))}n.
\]</div>{% endraw %}
<p>The larger sample estimates the mean of {% raw %}<span class="math inline">\(m(X)\)</span>{% endraw %}, while the labeled sample estimates the mean residual. Their variance contributions are given by the two terms above. With {% raw %}<span class="math inline">\(N&gt;n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(m(X))&gt;0\)</span>{% endraw %}, the corrected estimator has strictly smaller variance. For an arbitrary rule, <a href="#eq:ppi-efficiency">the variance comparison</a> also permits a loss of precision.</p>

<div id="31-0-the-result-for-an-estimating-equation">

</div>
<div id="31-0-the-general-rectifier-and-an-exact-coverage-theorem">

</div>
<h3 data-note-section="3" id="31-0-correcting-an-estimating-equation">3. Correcting an estimating equation</h3>
<p>Let {% raw %}<span class="math inline">\(\Theta\subseteq\mathbb R^d\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(g_\theta(x,y)\in\mathbb R^d\)</span>{% endraw %} be a measurable score. Suppose both {% raw %}<span class="math inline">\(g_\theta(X,Y)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_\theta(X,f(X))\)</span>{% endraw %} are integrable for every {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %}. The target is a specified, fixed solution of</p>

{% raw %}<span id="eq:ppi-score-target"></span><div class="math display">\[
G(\theta^*)\triangleq\mathbb{E}[g_{\theta^*}(X,Y)]=0.

\tag{9}\]</div>{% endraw %}
<p>For differentiable convex risk minimization, this equation follows when the minimizer is interior and differentiation can be passed through the expectation. Convexity then makes a zero gradient sufficient for global minimization. For a nondifferentiable loss, the chosen subgradient must satisfy <a href="#eq:ppi-score-target">the zero-mean equation</a>; the quantile calculation below verifies this condition directly.</p>

<p>Define</p>

{% raw %}<span id="eq:ppi-score-identity"></span><div class="math display">\[
g_\theta^f\triangleq\mathbb{E}[g_\theta(X,f(X))],
\qquad
\Delta_\theta\triangleq\mathbb{E}[g_\theta(X,Y)-g_\theta(X,f(X))].

\tag{10}\]</div>{% endraw %}
<p>The paper calls {% raw %}<span class="math inline">\(\Delta_\theta\)</span>{% endraw %} the <em>rectifier</em>. It measures the error from substituting predictions into this particular score. The identity {% raw %}<span class="math inline">\(G(\theta)=g_\theta^f+\Delta_\theta\)</span>{% endraw %} holds for every {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %}, and its value at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} is zero.</p>

<h4 data-note-section="3.1" id="31-0-finite-sample-confidence-sets">3.1. Finite-sample confidence sets</h4>
<p>Suppose {% raw %}<span class="math inline">\(R_\delta(\theta)\)</span>{% endraw %} is a confidence set for {% raw %}<span class="math inline">\(\Delta_\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_{\alpha-\delta}(\theta)\)</span>{% endraw %} is a confidence set for {% raw %}<span class="math inline">\(g_\theta^f\)</span>{% endraw %}. Their Minkowski sum is</p>

{% raw %}<div class="math display">\[
R_\delta(\theta)+T_{\alpha-\delta}(\theta)
\triangleq\{u+v:u\in R_\delta(\theta),\ v\in T_{\alpha-\delta}(\theta)\}.
\]</div>{% endraw %}
<div id="ppi-convex" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>. (Coverage by score inversion.) Fix {% raw %}<span class="math inline">\(0&lt;\delta&lt;\alpha&lt;1\)</span>{% endraw %}. Suppose that, for every fixed {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P\{\Delta_\theta\in R_\delta(\theta)\}\ge1-\delta,
\qquad
\mathbb P\{g_\theta^f\in T_{\alpha-\delta}(\theta)\}\ge1-(\alpha-\delta).
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<span id="eq:ppi-exact-set"></span><div class="math display">\[
C_\alpha^{\mathrm{PP}}
\triangleq\{\theta\in\Theta:0\in R_\delta(\theta)+T_{\alpha-\delta}(\theta)\}

\tag{11}\]</div>{% endraw %}
<p>satisfies {% raw %}<span class="math inline">\(\mathbb P(\theta^*\in C_\alpha^{\mathrm{PP}})\ge1-\alpha\)</span>{% endraw %} for each specified solution {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} of <a href="#eq:ppi-score-target">the population score equation</a>.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(E_R\)</span>{% endraw %} be the event that {% raw %}<span class="math inline">\(R_\delta(\theta^*)\)</span>{% endraw %} contains {% raw %}<span class="math inline">\(\Delta_{\theta^*}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(E_T\)</span>{% endraw %} be the corresponding event for {% raw %}<span class="math inline">\(g_{\theta^*}^f\)</span>{% endraw %}. On their intersection,</p>

{% raw %}<div class="math display">\[
0=\Delta_{\theta^*}+g_{\theta^*}^f
\in R_\delta(\theta^*)+T_{\alpha-\delta}(\theta^*).
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(E_R\cap E_T\subseteq\{\theta^*\in C_\alpha^{\mathrm{PP}}\}\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\mathbb P(\theta^*\notin C_\alpha^{\mathrm{PP}})
\le\mathbb P(E_R^c)+\mathbb P(E_T^c)
\le\delta+(\alpha-\delta)=\alpha.
\]</div>{% endraw %}
<p>This proves the claim. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>The proof uses the component guarantees only at the fixed target. Consequently, pointwise confidence bounds suffice even though the reported set is obtained by searching over {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. Covering all population solutions simultaneously would require a joint guarantee over those solutions. The union bound also allows dependence between the two component sets; independence enters the sampling calculations used to construct them.</p>

<h4 data-note-section="3.2" id="31-0-normal-approximation-for-the-corrected-score">3.2. Normal approximation for the corrected score</h4>
<p>The paper’s normal-approximation algorithms estimate the variance of the sum directly. Define</p>

{% raw %}<span id="eq:ppi-corrected-score"></span><div class="math display">\[
\begin{aligned}
A_i(\theta)&amp;\triangleq g_\theta(X_i,Y_i)-g_\theta(X_i,f(X_i)),\\
B_j(\theta)&amp;\triangleq g_\theta(\widetilde X_j,f(\widetilde X_j)),\\
\widehat G(\theta)&amp;\triangleq\overline A_n(\theta)+\overline B_N(\theta).
\end{aligned}

\tag{12}\]</div>{% endraw %}
<p>For coordinate {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[
\widehat v_k(\theta)\triangleq
\frac{\widehat{\operatorname{Var}}_n(A_k(\theta))}{n}
+\frac{\widehat{\operatorname{Var}}_N(B_k(\theta))}{N}.
\]</div>{% endraw %}
<div id="ppi-score-clt" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. (Normal score inversion.) Suppose Assumption <a href="#ppi-sampling">1</a> and <a href="#eq:ppi-ratio">the sample-size condition</a> hold, with fixed {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}, each coordinate of {% raw %}<span class="math inline">\(A_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_j\)</span>{% endraw %} has a finite second moment and</p>

{% raw %}<div class="math display">\[
s_k^2\triangleq\operatorname{Var}(A_{i,k}(\theta^*))
+r\operatorname{Var}(B_{j,k}(\theta^*))&gt;0.
\]</div>{% endraw %}
<p>Then the set</p>

{% raw %}<span id="eq:ppi-normal-set"></span><div class="math display">\[
C_\alpha^{\mathrm{PP}}
\triangleq\bigcap_{k=1}^d
\left\{\theta\in\Theta:
|\widehat G_k(\theta)|
\le z_{1-\alpha/(2d)}\sqrt{\widehat v_k(\theta)}\right\}

\tag{13}\]</div>{% endraw %}
<p>satisfies {% raw %}<span class="math inline">\(\liminf_{n,N\to\infty}\mathbb P(\theta^*\in C_\alpha^{\mathrm{PP}})\ge1-\alpha\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}, coverage converges to {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> At the target, {% raw %}<span class="math inline">\(\mathbb{E}[A_{i,k}]+\mathbb{E}[B_{j,k}]=0\)</span>{% endraw %}. Centering each summand therefore gives</p>

{% raw %}<div class="math display">\[
\sqrt n\,\widehat G_k(\theta^*)
=\frac1{\sqrt n}\sum_i(A_{i,k}-\mathbb{E}[A_{i,k}])
+\sqrt{\frac nN}\frac1{\sqrt N}\sum_j(B_{j,k}-\mathbb{E}[B_{j,k}]).
\]</div>{% endraw %}
<p>As in Proposition <a href="#ppi-mean">2</a>, this converges to {% raw %}<span class="math inline">\(\mathcal{N}(0,s_k^2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\widehat v_k(\theta^*)\xrightarrow{P}s_k^2\)</span>{% endraw %}. The studentized statistic converges to a standard normal variable, so coordinate {% raw %}<span class="math inline">\(k\)</span>{% endraw %} rejects with probability converging to {% raw %}<span class="math inline">\(\alpha/d\)</span>{% endraw %}. Applying the union bound to the {% raw %}<span class="math inline">\(d\)</span>{% endraw %} rejection events proves the result. For {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}, membership in the confidence set is exactly the central normal acceptance event. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>For scalar interval bounds centered at {% raw %}<span class="math inline">\(\overline A_n(\theta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline B_N(\theta)\)</span>{% endraw %}, with radii {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, <a href="#eq:ppi-exact-set">the finite-sample construction</a> accepts when {% raw %}<span class="math inline">\(|\widehat G(\theta)|\le a+b\)</span>{% endraw %}. Proposition <a href="#ppi-score-clt">4</a> instead uses the standard deviation of the sum, obtained by adding the two variance contributions. Its coverage follows from the central limit theorem and does not use an allocation {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} of the error probability.</p>

<div id="31-0-quantiles-and-regressions-use-the-same-correction">

</div>
<div id="31-0-quantile-uncertainty-comes-from-classification-errors-near-the-quantile">

</div>
<div id="31-0-quantiles-invert-a-corrected-distribution-function">

</div>
<h3 data-note-section="4" id="31-0-quantiles">4. Quantiles</h3>
<p>Write {% raw %}<span class="math inline">\(F_Y(t)\triangleq\mathbb P(Y\le t)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\tau\in(0,1)\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(q_\tau\triangleq\inf\{t:F_Y(t)\ge\tau\}\)</span>{% endraw %} be finite and suppose</p>

{% raw %}<span id="eq:ppi-quantile-target"></span><div class="math display">\[
F_Y(q_\tau)=\tau.

\tag{14}\]</div>{% endraw %}
<p>Continuity of {% raw %}<span class="math inline">\(F_Y\)</span>{% endraw %} at {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} is sufficient for this equality. The equality itself is the condition used below. In particular, it excludes a jump that places {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} strictly between {% raw %}<span class="math inline">\(F_Y(q_\tau-)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F_Y(q_\tau)\)</span>{% endraw %}.</p>

<p>The quantile loss has a subgradient</p>

{% raw %}<div class="math display">\[
g_\theta(y)\triangleq\mathbf1\{y\le\theta\}-\tau.
\]</div>{% endraw %}
<p>Its expectation vanishes at {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %} by <a href="#eq:ppi-quantile-target">the quantile condition</a>. For each {% raw %}<span class="math inline">\(\theta\in\mathbb R\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
A_i(\theta)\triangleq\mathbf1\{Y_i\le\theta\}-\mathbf1\{f(X_i)\le\theta\},
\qquad
H_j(\theta)\triangleq\mathbf1\{f(\widetilde X_j)\le\theta\}.
\]</div>{% endraw %}
<p>The predicted score is {% raw %}<span class="math inline">\(B_j(\theta)=H_j(\theta)-\tau\)</span>{% endraw %}. Consequently,</p>

{% raw %}<span id="eq:ppi-quantile-score"></span><div class="math display">\[
\begin{aligned}
\widehat G(\theta)&amp;=\overline A_n(\theta)+\overline H_N(\theta)-\tau,\\
\widehat v(\theta)&amp;=
\frac{\widehat{\operatorname{Var}}_n(A(\theta))}{n}
+\frac{\widehat{\operatorname{Var}}_N(H(\theta))}{N}.
\end{aligned}

\tag{15}\]</div>{% endraw %}
<p>The corrected distribution estimate {% raw %}<span class="math inline">\(\overline A_n(\theta)+\overline H_N(\theta)\)</span>{% endraw %} has expectation {% raw %}<span class="math inline">\(F_Y(\theta)\)</span>{% endraw %}. Algorithm 2 inverts the tests of {% raw %}<span class="math inline">\(F_Y(\theta)=\tau\)</span>{% endraw %}.</p>

<div id="ppi-quantile" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>. (Quantile coverage.) Under Assumption <a href="#ppi-sampling">1</a>, <a href="#eq:ppi-ratio">the sample-size condition</a>, and <a href="#eq:ppi-quantile-target">the quantile condition</a>, suppose</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(A_i(q_\tau))+r\operatorname{Var}(H_j(q_\tau))&gt;0.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<span id="eq:ppi-quantile-set"></span><div class="math display">\[
C_\alpha^{\mathrm{PP}}
\triangleq\{\theta\in\mathbb R:
|\widehat G(\theta)|\le z_{1-\alpha/2}\sqrt{\widehat v(\theta)}\}

\tag{16}\]</div>{% endraw %}
<p>has coverage converging to {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for {% raw %}<span class="math inline">\(q_\tau\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The correction {% raw %}<span class="math inline">\(A_i(q_\tau)\)</span>{% endraw %} is bounded by one in absolute value, and {% raw %}<span class="math inline">\(H_j(q_\tau)\)</span>{% endraw %} takes values in {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %}. Their second moments are finite. Subtracting the constant {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} from {% raw %}<span class="math inline">\(H_j\)</span>{% endraw %} leaves its variance unchanged. Proposition <a href="#ppi-score-clt">4</a>, with {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}, therefore applies. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>The labeled contribution to uncertainty depends on how often {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f(X_i)\)</span>{% endraw %} fall on different sides of the threshold. For example, a large numerical prediction error contributes zero to {% raw %}<span class="math inline">\(A_i(\theta)\)</span>{% endraw %} if both values exceed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. The coverage proof evaluates a bounded score at the fixed quantile and therefore requires no density estimate.</p>

<p>The corrected distribution estimate can decrease at a predicted value from the labeled sample, so the confidence set can have several components. It can nevertheless be computed over the full real line without approximating the parameter by a fixed grid. Sort the distinct values among {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f(\widetilde X_j)\)</span>{% endraw %}. Both the score and its estimated variance are constant on each interval between successive values. With the convention {% raw %}<span class="math inline">\(\mathbf1\{y\le\theta\}\)</span>{% endraw %}, each such interval includes its left endpoint and excludes its right endpoint. Evaluate one point per interval, including the two exterior intervals, and retain the entire accepted intervals. Taking the smallest interval containing this set preserves at least its coverage, although it can include rejected values between components.</p>

<div id="31-0-logistic-regression-correct-each-score-coordinate">

</div>
<h3 data-note-section="5" id="31-0-logistic-regression">5. Logistic regression</h3>
<p>Let {% raw %}<span class="math inline">\(Y\in\{0,1\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X\in\mathbb R^d\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f(X)\in[0,1]\)</span>{% endraw %}. Define the logistic risk and fitted probability by</p>

{% raw %}<div class="math display">\[
L(\theta)\triangleq\mathbb{E}[\log(1+\exp(X^\top\theta))-YX^\top\theta],
\qquad
\mu_\theta(x)\triangleq\frac1{1+\exp(-x^\top\theta)}.
\]</div>{% endraw %}
<p>Suppose {% raw %}<span class="math inline">\(\mathbb{E}\|X\|^2&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L\)</span>{% endraw %} has a finite minimizer {% raw %}<span class="math inline">\(\theta^*\in\mathbb R^d\)</span>{% endraw %}. The gradient of the observation-level loss is bounded in norm by {% raw %}<span class="math inline">\(\|X\|\)</span>{% endraw %}, so differentiation under the expectation is justified. The first-order condition is</p>

{% raw %}<span id="eq:ppi-logistic-target"></span><div class="math display">\[
G(\theta^*)=\mathbb{E}[X\{\mu_{\theta^*}(X)-Y\}]=0.

\tag{17}\]</div>{% endraw %}
<p>This defines the population logistic regression target. A correctly specified logistic conditional mean is a sufficient condition for interpreting {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} as its coefficient; risk minimization also defines the target under misspecification.</p>

<p>Substituting {% raw %}<span class="math inline">\(g_\theta(x,y)=x(\mu_\theta(x)-y)\)</span>{% endraw %} into <a href="#eq:ppi-score-identity">the rectifier</a> gives</p>

{% raw %}<span id="eq:ppi-logistic-rectifier"></span><div class="math display">\[
g_\theta(X,Y)-g_\theta(X,f(X))=X\{f(X)-Y\}.

\tag{18}\]</div>{% endraw %}
<p>The fitted probabilities cancel, so the same correction applies at every parameter value. In sample form,</p>

{% raw %}<div class="math display">\[
A_i=X_i\{f(X_i)-Y_i\},
\qquad
B_j(\theta)=\widetilde X_j\{\mu_\theta(\widetilde X_j)-f(\widetilde X_j)\}.
\]</div>{% endraw %}
<p>Use these vectors to form {% raw %}<span class="math inline">\(\widehat G_k(\theta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat v_k(\theta)\)</span>{% endraw %}. Algorithm 3 reports <a href="#eq:ppi-normal-set">the coordinatewise confidence set</a>.</p>

<div id="ppi-logistic" class="corollary" data-note-number="6" data-note-kind="Corollary">
<p><strong>Corollary 6</strong>. (Logistic regression coverage.) Suppose Assumption <a href="#ppi-sampling">1</a> and <a href="#eq:ppi-ratio">the sample-size condition</a> hold. Under the conditions in this section, let {% raw %}<span class="math inline">\(d\)</span>{% endraw %} be fixed and assume {% raw %}<span class="math inline">\(s_k^2&gt;0\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} for every coordinate. Then Algorithm 3 satisfies</p>

{% raw %}<div class="math display">\[
\liminf_{n,N\to\infty}\mathbb P(\theta^*\in C_\alpha^{\mathrm{PP}})\ge1-\alpha.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Because {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f(X)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mu_\theta(X)\)</span>{% endraw %} lie in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, both score vectors have norm bounded by the corresponding feature norm. The assumption {% raw %}<span class="math inline">\(\mathbb{E}\|X\|^2&lt;\infty\)</span>{% endraw %} gives the required second moments. The <a href="#eq:ppi-logistic-target">first-order condition</a> supplies the zero-mean restriction, so Proposition <a href="#ppi-score-clt">4</a> proves the claim. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>The coordinates share observations and can be dependent. Bonferroni’s inequality accounts for their joint rejection probability. The construction estimates the variance of each score coordinate and inverts the resulting tests, so it does not require estimating an inverse Hessian. To obtain a confidence set for one coefficient, project the joint accepted set onto that coordinate. Any numerical approximation used for coverage should contain the accepted set; retaining only accepted grid points can omit a parameter between them.</p>

<div id="31-0-regression-the-cancellation-and-the-linearization">

</div>
<div id="31-0-linear-regression-why-the-algorithm-uses-two-fits">

</div>
<h3 data-note-section="6" id="31-0-linear-regression">6. Linear regression</h3>
<p>Let {% raw %}<span class="math inline">\(X\in\mathbb R^d\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(\Sigma\triangleq\mathbb{E}[XX^\top]\)</span>{% endraw %} is positive definite. The population least-squares coefficient is</p>

{% raw %}<div class="math display">\[
\beta^*\triangleq\Sigma^{-1}\mathbb{E}[XY].
\]</div>{% endraw %}
<p>Linearity of the projection gives</p>

{% raw %}<span id="eq:ppi-ols-projections"></span><div class="math display">\[
\beta_f\triangleq\Sigma^{-1}\mathbb{E}[Xf(X)],
\qquad
\beta_R\triangleq\Sigma^{-1}\mathbb{E}[X\{Y-f(X)\}],
\qquad
\beta^*=\beta_f+\beta_R.

\tag{19}\]</div>{% endraw %}
<p>Algorithm 4 estimates these two projections separately. Write</p>

{% raw %}<div class="math display">\[
\widehat\Sigma_U\triangleq\frac1N\sum_j\widetilde X_j\widetilde X_j^\top,
\qquad
\widehat\Sigma_L\triangleq\frac1n\sum_iX_iX_i^\top,
\]</div>{% endraw %}
<p>and, on the event that both matrices are invertible, define</p>

{% raw %}<span id="eq:ppi-ols-estimator"></span><div class="math display">\[
\widehat\beta_f\triangleq\widehat\Sigma_U^{-1}\frac1N\sum_j\widetilde X_j f(\widetilde X_j),
\qquad
\widehat\beta_R\triangleq\widehat\Sigma_L^{-1}\frac1n\sum_iX_i\{Y_i-f(X_i)\},
\qquad
\widehat\beta^{\mathrm{PP}}\triangleq\widehat\beta_f+\widehat\beta_R.

\tag{20}\]</div>{% endraw %}
<p>The paper fits the labeled response {% raw %}<span class="math inline">\(f(X_i)-Y_i\)</span>{% endraw %} and subtracts its coefficient, which yields the same estimator. Positive definiteness of {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} and convergence of the sample Gram matrices imply that the invertibility event has probability approaching one. On its complement, the estimator may be assigned any fixed value and the reported confidence set taken to be {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}.</p>

<h4 data-note-section="6.1" id="31-0-the-two-projection-errors">6.1. The two projection errors</h4>
<p>Define the population residuals</p>

{% raw %}<div class="math display">\[
e_f\triangleq f(X)-X^\top\beta_f,
\qquad
e_R\triangleq Y-f(X)-X^\top\beta_R,
\]</div>{% endraw %}
<p>and their sandwich covariance matrices</p>

{% raw %}<div class="math display">\[
V_f\triangleq\Sigma^{-1}\mathbb{E}[XX^\top e_f^2]\Sigma^{-1},
\qquad
V_R\triangleq\Sigma^{-1}\mathbb{E}[XX^\top e_R^2]\Sigma^{-1}.
\]</div>{% endraw %}
<div id="ppi-ols" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>. (Least-squares limit.) Suppose Assumption <a href="#ppi-sampling">1</a> and <a href="#eq:ppi-ratio">the sample-size condition</a> hold, {% raw %}<span class="math inline">\(d\)</span>{% endraw %} is fixed, {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive definite, and</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(\|X\|+|Y|+|f(X)|)^4]&lt;\infty.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<span id="eq:ppi-ols-clt"></span><div class="math display">\[
\sqrt n(\widehat\beta^{\mathrm{PP}}-\beta^*)
\xrightarrow{d}\mathcal{N}(0,V_R+rV_f).

\tag{21}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The sample normal equations imply the exact identities</p>

{% raw %}<span id="eq:ppi-ols-errors"></span><div class="math display">\[
\widehat\beta_f-\beta_f
=\widehat\Sigma_U^{-1}\frac1N\sum_j\widetilde X_j e_{f,j},
\qquad
\widehat\beta_R-\beta_R
=\widehat\Sigma_L^{-1}\frac1n\sum_iX_i e_{R,i}.

\tag{22}\]</div>{% endraw %}
<p>The population normal equations give {% raw %}<span class="math inline">\(\mathbb{E}[Xe_f]=\mathbb{E}[Xe_R]=0\)</span>{% endraw %}. The fourth-moment assumption ensures that these score vectors have finite second moments and that each Gram matrix converges to {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
(\widehat\Sigma_U^{-1}-\Sigma^{-1})
\frac1{\sqrt N}\sum_j\widetilde X_j e_{f,j}=o_P(1),
\]</div>{% endraw %}
<p>because the matrix difference is {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} and the normalized score sum is {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %}. Applying the same argument to the labeled sample yields</p>

{% raw %}<span id="eq:ppi-ols-expansion"></span><div class="math display">\[
\begin{aligned}
\sqrt n(\widehat\beta^{\mathrm{PP}}-\beta^*)
={}&amp;\Sigma^{-1}\frac1{\sqrt n}\sum_iX_i e_{R,i}\\
&amp;+\sqrt{\frac nN}\Sigma^{-1}\frac1{\sqrt N}\sum_j\widetilde X_j e_{f,j}
+o_P(1).
\end{aligned}

\tag{23}\]</div>{% endraw %}
<p>Independent multivariate central limit theorems give the two covariance contributions {% raw %}<span class="math inline">\(V_R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(rV_f\)</span>{% endraw %}. This proves <a href="#eq:ppi-ols-clt">the claimed limit</a>, including {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h4 data-note-section="6.2" id="31-0-estimating-the-covariance">6.2. Estimating the covariance</h4>
<p>Use the residual from each fitted projection to estimate its covariance:</p>

{% raw %}<div class="math display">\[
\widehat V_f\triangleq\widehat\Sigma_U^{-1}
\left(\frac1N\sum_j\widetilde X_j\widetilde X_j^\top
\{f(\widetilde X_j)-\widetilde X_j^\top\widehat\beta_f\}^2\right)
\widehat\Sigma_U^{-1},
\]</div>{% endraw %}
{% raw %}<span id="eq:ppi-ols-sandwich"></span><div class="math display">\[
\widehat V_R\triangleq\widehat\Sigma_L^{-1}
\left(\frac1n\sum_iX_iX_i^\top
\{Y_i-f(X_i)-X_i^\top\widehat\beta_R\}^2\right)
\widehat\Sigma_L^{-1}.

\tag{24}\]</div>{% endraw %}
<p>To verify consistency, put {% raw %}<span class="math inline">\(h_f\triangleq\widehat\beta_f-\beta_f\)</span>{% endraw %}. The difference between the fitted and population squared residuals is</p>

{% raw %}<div class="math display">\[
\{e_{f,j}-\widetilde X_j^\top h_f\}^2-e_{f,j}^2
=-2e_{f,j}\widetilde X_j^\top h_f+(\widetilde X_j^\top h_f)^2.
\]</div>{% endraw %}
<p>Thus the operator norm of the change in the middle matrix is at most</p>

{% raw %}<div class="math display">\[
2\|h_f\|\frac1N\sum_j\|\widetilde X_j\|^3|e_{f,j}|
+\|h_f\|^2\frac1N\sum_j\|\widetilde X_j\|^4.
\]</div>{% endraw %}
<p>The sample averages are {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %} by the fourth-moment assumption and Hölder’s inequality, while {% raw %}<span class="math inline">\(h_f=o_P(1)\)</span>{% endraw %} by <a href="#eq:ppi-ols-errors">the projection expansion</a>. The displayed bound therefore converges to zero in probability. The law of large numbers applies to the matrix using population residuals, and {% raw %}<span class="math inline">\(\widehat\Sigma_U^{-1}\xrightarrow{P}\Sigma^{-1}\)</span>{% endraw %}. These facts prove {% raw %}<span class="math inline">\(\widehat V_f\xrightarrow{P}V_f\)</span>{% endraw %}. Replacing the predicted response by {% raw %}<span class="math inline">\(Y-f(X)\)</span>{% endraw %} proves {% raw %}<span class="math inline">\(\widehat V_R\xrightarrow{P}V_R\)</span>{% endraw %}.</p>

<p>For coordinate {% raw %}<span class="math inline">\(k\)</span>{% endraw %} with {% raw %}<span class="math inline">\((V_R+rV_f)_{kk}&gt;0\)</span>{% endraw %}, Slutsky’s theorem now gives the interval</p>

{% raw %}<span id="eq:ppi-ols-interval"></span><div class="math display">\[
\widehat\beta_k^{\mathrm{PP}}
\ \pm\ z_{1-\alpha/2}
\sqrt{\frac{(\widehat V_R)_{kk}}n+\frac{(\widehat V_f)_{kk}}N},

\tag{25}\]</div>{% endraw %}
<p>whose coverage converges to {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. The two covariance estimates follow from the two independent projection errors in <a href="#eq:ppi-ols-expansion">the expansion</a>. A residual formed from the final combined coefficient describes a different regression error and does not estimate these two contributions.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-angelopoulos_prediction-powered_2023" class="csl-entry" role="listitem">
Angelopoulos, Anastasios N., Stephen Bates, Clara Fannjiang, Michael I. Jordan, and Tijana Zrnic. 2023. <span>“Prediction-Powered Inference.”</span> arXiv. <a href="http://arxiv.org/abs/2301.09633">http://arxiv.org/abs/2301.09633</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-05-25-prediction-powered-inference-beyond-convex-losses %}">Prediction-Powered Inference Beyond Convex Losses</a></p></nav>

</div>
