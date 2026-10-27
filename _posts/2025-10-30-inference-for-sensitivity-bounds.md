---
layout: "post"
title: "Inference for Sensitivity Bounds"
date: "2025-10-30"
tags: ["econometrics", "partial identification"]
excerpt: "How to estimate sensitivity bounds and build confidence intervals."
note_series: "Sensitivity to unconfoundedness"
note_source: "assets/notes/Overleaf Projects (32 items)/Unconfoundedness (Notes)/stats.tex"
redirect_from: ["/2025/06/30/estimating-sensitivity-bounds-and-their-limit-laws/", "/2025/06/30/estimating-sensitivity-bounds-first-steps/", "/2025/07/20/estimating-bound-functions/", "/2025/08/10/limit-theory-for-the-first-step-estimators/", "/2025/08/30/limit-theory-for-cate-bounds/", "/2025/09/19/limit-theory-for-ate-bounds/", "/2025/10/10/limit-theory-for-att-bounds/", "/2025/10/30/bootstrap-confidence-bands-and-breakdown-points/", "/2025/10/30/bootstrap-inference-for-sensitivity-bounds/", "/2025/10/30/inference-for-sensitivity-bounds-limit-laws-bootstrap-and-breakdown-points/", "/2025/11/19/inference-on-potential-outcome-means/", "/2025/12/10/pointwise-confidence-sets-for-ate-bounds/", "/2025/12/30/uniform-confidence-bands-over-the-sensitivity-parameter/", "/2026/01/19/inference-on-att-bounds/", "/2026/02/09/inference-on-breakdown-points/", "/2026/03/01/when-standard-inference-applies/", "/2026/03/22/technical-conditions-for-sensitivity-inference/"]
---

<div class="note-content" markdown="0">

<span id="30-66-appendix-a-regular-crossing"></span>
<p>The <a href="{% post_url 2025-04-30-conditional-c-dependence %}">sensitivity bounds</a> depend on minima and maxima of functions of the propensity score. Estimating that score can change which function determines an endpoint. The resulting limit distribution can be nonnormal even when the first-stage estimates are asymptotically normal.</p>
<p><span class="citation" data-cites="masten_assessing_2024">Masten, Poirier, and Zhang (<a href="#ref-masten_assessing_2024" role="doc-biblioref">2024</a>)</span> obtain the endpoint limit by applying a directional derivative to the joint limit of the first-stage estimation errors. Their bootstrap estimates this derivative and evaluates it at resampled first-stage errors. For marginal endpoints, the same resample also captures the error from averaging over covariates and its dependence on the first-stage estimates.</p>
<h3 data-note-section="1" id="30-66-the-estimators-and-their-limits">1. The estimators and their limits</h3>
<p>Let {% raw %}<span class="math inline">\(O_i=(Y_i,X_i,W_i)\)</span>{% endraw %} be independent observations from {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} is the outcome, {% raw %}<span class="math inline">\(X_i\in\{0,1\}\)</span>{% endraw %} is treatment status, and {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %} is a vector of covariates. Write {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_i f(O_i)\)</span>{% endraw %} for the sample average and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %} for its scaled deviation from the population mean. For {% raw %}<span class="math inline">\(x\in\{0,1\}\)</span>{% endraw %}, suppose the propensity score and conditional quantile function have the forms</p>
{% raw %}<div class="math display">\[
p_x(w)=P(X=x\mid W=w)=p_x(w;\beta_0),
\qquad Q_{Y\mid X,W}(u\mid x,w)=q(x,w)&#x27;\gamma_0(u).
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(q(x,w)\)</span>{% endraw %} is a vector of regressors, and {% raw %}<span class="math inline">\(\gamma_0(u)\)</span>{% endraw %} gives their coefficients at quantile index {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. The sensitivity parameter {% raw %}<span class="math inline">\(c\in[0,1]\)</span>{% endraw %} indexes the bounds. Fix a finite set of sensitivity values {% raw %}<span class="math inline">\(\mathcal C=\{c_1&lt;\cdots&lt;c_J\}\subset[0,1]\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(m(\tau)=\min\{\tau,1-\tau\}\)</span>{% endraw %} and define the full-range probability indices</p>
{% raw %}<div class="math display">\[
t_x^+(\tau,w;c)=\min\left\{\tau+\frac{c}{p_x(w)}m(\tau),\frac{\tau}{p_x(w)},1\right\},
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
t_x^-(\tau,w;c)=\max\left\{\tau-\frac{c}{p_x(w)}m(\tau),1+\frac{\tau-1}{p_x(w)},0\right\}.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is large relative to the propensity score, the second or third argument can determine the minimum or maximum. To keep the quantile evaluations away from zero and one, fix {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1/2\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(C_\varepsilon(t)=\max\{\varepsilon,\min(t,1-\varepsilon)\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_x^\pm=C_\varepsilon(t_x^\pm)\)</span>{% endraw %}. This clipping map moves indices below {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} and those above {% raw %}<span class="math inline">\(1-\varepsilon\)</span>{% endraw %} to {% raw %}<span class="math inline">\(1-\varepsilon\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(\theta=(\beta,\gamma)\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
g_x^\pm(w;\theta,c)=\int_0^1q(x,w)&#x27;\gamma(s_x^\pm(\tau,w;\beta,c))\,d\tau,
\qquad \mu_x^\pm(c)=Pg_x^\pm(W;\theta_0,c).
\]</div>{% endraw %}
<p>Integrating the conditional quantile bound gives the trimmed conditional-mean endpoint {% raw %}<span class="math inline">\(g_x^\pm(w;\theta_0,c)\)</span>{% endraw %}. Averaging over the population distribution of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives the marginal endpoint {% raw %}<span class="math inline">\(\mu_x^\pm(c)\)</span>{% endraw %}. The trimmed average treatment effect (ATE) endpoints and the estimators of the marginal means are</p>
{% raw %}<div class="math display">\[
L_\varepsilon=\mu_1^- -\mu_0^+,
\qquad U_\varepsilon=\mu_1^+ -\mu_0^-,
\qquad \widehat\mu_x^\pm=P_ng_x^\pm(W;\widehat\theta,c).
\]</div>{% endraw %}
<p>The trimming level {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} remains fixed as the sample size grows. All limits, confidence bands, and breakdown-point statements below concern the resulting trimmed targets.</p>
<p>The endpoint argument uses the following three conditions. Condition 1 imposes a uniform overlap bound, which is stronger than the paper’s overlap moment conditions. Conditions 2 and 3 state the first-stage approximation and empirical-process requirements used in the proof.</p>
<ol type="1">
<li>There is {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\delta\le p_1(W;\beta)\le1-\delta\)</span>{% endraw %} almost surely for {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} in a neighborhood of {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %}. The propensity is continuously differentiable there with uniformly bounded derivative. Also {% raw %}<span class="math inline">\(E\|q(x,W)\|^2&lt;\infty\)</span>{% endraw %}.</li>
<li>On a compact interval {% raw %}<span class="math inline">\(I\subset(0,1)\)</span>{% endraw %} containing {% raw %}<span class="math inline">\([\varepsilon,1-\varepsilon]\)</span>{% endraw %} in its interior, {% raw %}<span class="math inline">\(\gamma_0\)</span>{% endraw %} is continuously differentiable. The joint first-stage expansion is
{% raw %}<div class="math display">\[
\sqrt n(\widehat\beta-\beta_0)=\mathbb G_n\psi_\beta+o_P(1),\qquad
\sqrt n(\widehat\gamma-\gamma_0)=\mathbb G_n\psi_\gamma+o_P(1)
\]</div>{% endraw %}
 in {% raw %}<span class="math inline">\(\mathbb R^{d_\beta}\times\ell^\infty(I)^{d_\gamma}\)</span>{% endraw %}. The influence functions are centered, square integrable, and form a {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker class. The limit {% raw %}<span class="math inline">\(Z=(Z_\beta,Z_\gamma)\)</span>{% endraw %} has continuous quantile-index paths.</li>
<li>For each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, sign, and {% raw %}<span class="math inline">\(c\in\mathcal C\)</span>{% endraw %}, the random functions {% raw %}<span class="math inline">\(g_x^\pm(\cdot;\widehat\theta,c)\)</span>{% endraw %} belong, with probability tending to one, to a fixed {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker class with square-integrable envelope. They converge in {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} to {% raw %}<span class="math inline">\(g_x^\pm(\cdot;\theta_0,c)\)</span>{% endraw %}.</li>
</ol>
<p>A {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker class is a collection of functions on which the centered empirical process converges to a tight Gaussian process. Condition 3 controls the error introduced by using the same observations to estimate the nuisance parameters and average the estimated conditional endpoints over {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. Its Donsker and {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} convergence requirements make the interaction remainder {% raw %}<span class="math inline">\(\mathbb G_n\{g(\widehat\theta)-g(\theta_0)\}\)</span>{% endraw %} converge to zero in probability. The two remaining terms describe sampling variation in the covariate distribution and estimation error in the propensity score and conditional quantile function. Section 3 gives this decomposition explicitly.</p>
<p>For a correctly specified logit with regressors {% raw %}<span class="math inline">\(r(W)\)</span>{% endraw %}, the usual likelihood expansion has</p>
{% raw %}<div class="math display">\[
\psi_\beta(O)=I_\beta^{-1}r(W)\{X-p_1(W)\},
\quad I_\beta=E[r(W)r(W)&#x27;p_1(W)\{1-p_1(W)\}].
\]</div>{% endraw %}
<p>For linear quantile regression with {% raw %}<span class="math inline">\(q=q(X,W)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\psi_\gamma(O;u)=J(u)^{-1}q\{u-1[Y\le q&#x27;\gamma_0(u)]\},
\quad J(u)=E[f_{Y\mid X,W}(q&#x27;\gamma_0(u)\mid X,W)qq&#x27;].
\]</div>{% endraw %}
<p>The likelihood and quantile-regression expansions use nonsingularity of {% raw %}<span class="math inline">\(I_\beta\)</span>{% endraw %} and uniform nonsingularity of {% raw %}<span class="math inline">\(J(u)\)</span>{% endraw %}, positive continuous conditional densities, and suitable regressor moments. Uniformity in {% raw %}<span class="math inline">\(u\)</span>{% endraw %} and control of the empirical process require further regularity. Appendix A of the <a href="https://arxiv.org/pdf/2012.15716v1">December 2020 author preprint</a> establishes the first-stage and averaging results under its stated assumptions. Theorem 1 takes conditions 1–3 as its hypotheses.</p>
<div id="sensitivity-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under conditions 1–3, the vector of estimated trimmed conditional-mean endpoints at any fixed finite collection of covariate values, and of marginal-mean and ATE endpoints on {% raw %}<span class="math inline">\(\mathcal C\)</span>{% endraw %}, has a root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} limit. At fixed {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, the limit of {% raw %}<span class="math inline">\(\widehat g_x^\pm(w)-g_x^\pm(w)\)</span>{% endraw %}, multiplied by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %}, is {% raw %}<span class="math inline">\(Dg_x^\pm(w)[Z]\)</span>{% endraw %}. For a marginal mean the limit is</p>
{% raw %}<div class="math display">\[
R_x^\pm(c)=\mathbb G g_x^\pm(\cdot;\theta_0,c)+P Dg_x^\pm(W;c)[Z],
\]</div>{% endraw %}
<p>where the derivative is defined below and {% raw %}<span class="math inline">\((\mathbb G,Z)\)</span>{% endraw %} is the joint Gaussian limit of the empirical and first-stage processes. The ATE limits are {% raw %}<span class="math inline">\(R_1^- -R_0^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_1^+ -R_0^-\)</span>{% endraw %}. Conditions 1–2 must also hold at each fixed covariate value used in the conditional statements.</p>
</div>
<p>At fixed {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, the conditional average treatment effect (CATE) endpoint limits are</p>
{% raw %}<div class="math display">\[
Dg_1^-(w;c)[Z]-Dg_0^+(w;c)[Z],\qquad
Dg_1^+(w;c)[Z]-Dg_0^-(w;c)[Z].
\]</div>{% endraw %}
<p>The derivatives are positively homogeneous. Their possible nonlinearity allows non-Gaussian endpoint limits even though {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is Gaussian.</p>
<h3 data-note-section="2" id="30-66-differentiate-the-active-branch">2. Differentiate the active branch</h3>
<p>For {% raw %}<span class="math inline">\(a=(a_1,\ldots,a_k)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(A(a)=\{j:a_j=\min_l a_l\}\)</span>{% endraw %} for the indices attaining the minimum. The directional derivative of a minimum in direction {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is</p>
{% raw %}<div class="math display">\[
D\min(a)[h]=\min_{j\in A(a)}h_j.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %} is the unique minimum, it remains the smallest argument under sufficiently small perturbations, so the derivative is {% raw %}<span class="math inline">\(h_j\)</span>{% endraw %}. When several arguments attain the minimum, their initial values are equal, and the smallest perturbation among them determines the derivative. Thus the derivative is {% raw %}<span class="math inline">\(\min_{j\in A(a)}h_j\)</span>{% endraw %}, which is generally nonlinear in {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. For a maximum, the derivative is the largest perturbation among the arguments attaining the maximum. These minimizing or maximizing arguments are called active.</p>
<p><span id="30-66-a-derivative-calculation-inside-a-quantile-bound"></span></p>
<p>Let {% raw %}<span class="math inline">\(h=(h_\beta,h_\gamma)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e_x(w)=\partial_\beta p_x(w;\beta_0)&#x27;h_\beta\)</span>{% endraw %}, the first-order change in the propensity score in direction {% raw %}<span class="math inline">\(h_\beta\)</span>{% endraw %}. The derivatives of the three arguments of {% raw %}<span class="math inline">\(t_x^+\)</span>{% endraw %}, in their displayed order, are</p>
{% raw %}<div class="math display">\[
-\frac{cm(\tau)}{p_x(w)^2}e_x(w),\qquad
-\frac{\tau}{p_x(w)^2}e_x(w),\qquad 0.
\]</div>{% endraw %}
<p>Those of {% raw %}<span class="math inline">\(t_x^-\)</span>{% endraw %} are</p>
{% raw %}<div class="math display">\[
\frac{cm(\tau)}{p_x(w)^2}e_x(w),\qquad
\frac{1-\tau}{p_x(w)^2}e_x(w),\qquad 0.
\]</div>{% endraw %}
<p>Taking the minimum or maximum of the derivatives over the active arguments gives {% raw %}<span class="math inline">\(Dt_x^\pm[h]\)</span>{% endraw %}. The clipping map has derivative</p>
{% raw %}<div class="math display">\[
DC_\varepsilon(t)[v]=
\begin{cases}
0,&amp;t&lt;\varepsilon\text{ or }t&gt;1-\varepsilon,\\
\max(v,0),&amp;t=\varepsilon,\\
v,&amp;\varepsilon&lt;t&lt;1-\varepsilon,\\
\min(v,0),&amp;t=1-\varepsilon.
\end{cases}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(Ds_x^\pm[h]=DC_\varepsilon(t_x^\pm)[Dt_x^\pm[h]]\)</span>{% endraw %} and</p>
{% raw %}<div class="math display">\[
Dg_x^\pm(w;c)[h]
=\int_0^1q(x,w)&#x27;\left\{h_\gamma(s_x^\pm)
+\gamma_0&#x27;(s_x^\pm)Ds_x^\pm[h]\right\}\,d\tau.
\]</div>{% endraw %}
<p>The term {% raw %}<span class="math inline">\(h_\gamma(s_x^\pm)\)</span>{% endraw %} describes a perturbation of the quantile coefficients at the original evaluation index. The term {% raw %}<span class="math inline">\(\gamma_0&#x27;(s_x^\pm)Ds_x^\pm[h]\)</span>{% endraw %} accounts for the change in that index caused by perturbing the propensity score. In a scalar quantile model, {% raw %}<span class="math inline">\(Q&#x27;(u)=1/f_Y(Q(u))\)</span>{% endraw %}, so a low density at the evaluation quantile amplifies the effect of a change in its index. The appendix obtains the derivative at each fixed {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} and then uses an integrable bound to pass the limit through the integrals by dominated convergence.</p>
<h3 data-note-section="3" id="30-66-averaging-adds-another-source-of-noise">3. Averaging adds another source of noise</h3>
<p>Suppress {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, the sign, and {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. The expansion starts from the exact decomposition</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat\mu-\mu)
=\mathbb G_ng(\theta_0)
+\sqrt nP\{g(\widehat\theta)-g(\theta_0)\}
+\mathbb G_n\{g(\widehat\theta)-g(\theta_0)\}.
\]</div>{% endraw %}
<p>The first term is the sampling error from averaging the true conditional endpoint over the observed covariates. The second term records the effect of estimating the propensity score and quantile coefficients; directional differentiability gives its limit {% raw %}<span class="math inline">\(PDg[Z]\)</span>{% endraw %}. Condition 3 makes the last term {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %}. The first-stage estimates use these same observations, so the limiting averaging error is generally correlated with {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}. Their joint distribution enters the endpoint limit.</p>
<p>For the average treatment effect on the treated (ATT), let {% raw %}<span class="math inline">\(p=P(X=1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_d=E(Y\mid X=d)\)</span>{% endraw %}. The population identity is</p>
{% raw %}<div class="math display">\[
T(M,p,m_0,m_1)=m_1-\frac{M-(1-p)m_0}{p},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(M=E(Y_0)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(T\)</span>{% endraw %} decreases with {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, the lower ATT bound uses {% raw %}<span class="math inline">\(M=\mu_0^+\)</span>{% endraw %}, and the upper bound uses {% raw %}<span class="math inline">\(M=\mu_0^-\)</span>{% endraw %}. Differentiating {% raw %}<span class="math inline">\(T\)</span>{% endraw %} with respect to the potential-outcome mean, treatment share, and two observed group means gives</p>
{% raw %}<div class="math display">\[
DT[h_M,h_p,h_0,h_1]
=h_1+\frac{1-p}{p}h_0-\frac{h_M}{p}
+\frac{M-m_0}{p^2}h_p.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(E(Y^2)&lt;\infty\)</span>{% endraw %}, the sample treatment share and within-group means have influence functions {% raw %}<span class="math inline">\(X-p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1[X=d](Y-m_d)/P(X=d)\)</span>{% endraw %}. Adjoining these functions to the empirical process gives their joint limit with the estimated potential-outcome endpoints. Substitution into {% raw %}<span class="math inline">\(DT\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(h_M=R_0^\pm\)</span>{% endraw %} for the appropriate endpoint, gives the trimmed ATT limits. This is the ordinary chain rule applied to the directional mean expansion, retaining the dependence among all the estimated quantities.</p>
<h3 data-note-section="4" id="30-66-a-direct-demonstration-of-ordinary-bootstrap-failure">4. A direct demonstration of ordinary bootstrap failure</h3>
<p>Let {% raw %}<span class="math inline">\(h(\theta)=\min(\theta_1,\theta_2)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta=(0,0)\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(\sqrt n\widehat\theta\Rightarrow(Z_1,Z_2)\)</span>{% endraw %}, with independent standard normal coordinates. The limiting minimum {% raw %}<span class="math inline">\(\min(Z_1,Z_2)\)</span>{% endraw %} is at most zero unless both coordinates are positive, so its cdf at zero is {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %}.</p>
<p>For the ordinary bootstrap, the centered minimum has the conditional limiting expression</p>
{% raw %}<div class="math display">\[
\min(Z_1+Z_1^*,Z_2+Z_2^*)-\min(Z_1,Z_2),
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(Z^*\)</span>{% endraw %} an independent copy of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}. The conditional law holds {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} fixed and varies the bootstrap draw {% raw %}<span class="math inline">\(Z^*\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Z_1\le Z_2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d=Z_2-Z_1\)</span>{% endraw %}, its conditional cdf at zero is</p>
{% raw %}<div class="math display">\[
1-P(Z_1^*&gt;0,Z_2^*&gt;-d)=1-\frac12\Phi(d).
\]</div>{% endraw %}
<p>The same expression holds with {% raw %}<span class="math inline">\(d=|Z_2-Z_1|\)</span>{% endraw %} in the other ordering. Since {% raw %}<span class="math inline">\(d&gt;0\)</span>{% endraw %} almost surely, the limiting conditional probability is strictly below {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %} and depends on the random gap {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. The estimated gap and the bootstrap perturbation have the same order, so the randomness in the gap remains in the conditional bootstrap law.</p>
<!-- original-paper-scope: minimum-mean-and-clipping-atom
Additional distributional consequences of the illustrative Gaussian minimum. The calculation showing failure of the ordinary bootstrap remains as a derivation of the obstruction used in the paper.

The identity

$$
\min(Z_1,Z_2)=\frac{Z_1+Z_2-|Z_1-Z_2|}{2}
$$

also gives $E\min(Z_1,Z_2)=-1/\sqrt\pi$, since $Z_1-Z_2\sim N(0,2)$. Choosing an extreme noisy branch changes the mean at root-$n$ order. A clipping derivative $v\mapsto\max(v,0)$ instead produces an atom at zero when $v$ has a continuous symmetric law.
-->
<h3 data-note-section="5" id="30-66-estimate-the-directional-derivative-before-applying-it">5. Estimate the directional derivative before applying it</h3>
<p>They use each resample of the observations to compute both the centered first-stage fluctuation {% raw %}<span class="math inline">\(Z_n^*=\sqrt n(\widehat\theta^*-\widehat\theta)\)</span>{% endraw %} and the empirical-process fluctuation {% raw %}<span class="math inline">\(\mathbb G_n^*=\sqrt n(P_n^*-P_n)\)</span>{% endraw %}. The derivative bootstrap for a marginal endpoint combines these as</p>
{% raw %}<div class="math display">\[
R_{x,n}^{\pm *}(c)=\mathbb G_n^*g_x^\pm(\cdot;\widehat\theta,c)
+\widehat D\mu_x^\pm(c)[Z_n^*].
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\widehat D\mu_x^\pm(c)\)</span>{% endraw %} estimates the derivative obtained by integrating {% raw %}<span class="math inline">\(Dg_x^\pm\)</span>{% endraw %} over the covariate distribution. The shared resample preserves the dependence between the averaging error and the first-stage error. Taking ATE differences and applying the ATT derivative to this joint vector gives the corresponding bootstrap draws for treatment-effect endpoints.</p>
<div id="sensitivity-derivative-bootstrap" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Suppose conditions 1–3 hold, the resampled empirical and first-stage vector converges conditionally in bounded-Lipschitz distance to its joint Gaussian limit, and the derivative estimator converges in probability to {% raw %}<span class="math inline">\(D\mu_x^\pm\)</span>{% endraw %} uniformly on every compact set of the tangent space. Assume also that the derivative estimates are asymptotically equicontinuous in neighborhoods of compact tangent sets, the bootstrap directions are asymptotically tight about that space, and the empirical replacement {% raw %}<span class="math inline">\(\mathbb G_n^*\{g(\widehat\theta)-g(\theta_0)\}\)</span>{% endraw %} is conditionally {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %}. Then the vector {% raw %}<span class="math inline">\(R_{x,n}^{\pm *}(c)\)</span>{% endraw %} consistently estimates the joint endpoint limit law on {% raw %}<span class="math inline">\(\mathcal C\)</span>{% endraw %}.</p>
</div>
<p>In their analytical derivative estimator, <span class="citation" data-cites="masten_assessing_2024">Masten, Poirier, and Zhang (<a href="#ref-masten_assessing_2024" role="doc-biblioref">2024</a>)</span> retain every argument within {% raw %}<span class="math inline">\(\kappa_n\)</span>{% endraw %} of the estimated minimum or maximum, where {% raw %}<span class="math inline">\(\kappa_n\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt n\kappa_n\to\infty\)</span>{% endraw %}. At a fixed evaluation point, this tolerance excludes arguments separated from the population extremum by a fixed positive gap with probability tending to one. Because the tolerance shrinks more slowly than the estimation error, it also retains population ties with probability tending to one.</p>
<p>They estimate {% raw %}<span class="math inline">\(\gamma_0&#x27;\)</span>{% endraw %} using a separate finite-difference step {% raw %}<span class="math inline">\(\eta_n\to0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sqrt n\eta_n\to\infty\)</span>{% endraw %}. This rate makes root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} estimation noise negligible after division by the step size. The consistency proof also uses uniform smoothness and control of the integrated derivative estimator, as specified in the paper.</p>
<!-- original-paper-scope: numerical-derivative-alternative
A separately developed numerical-delta implementation. The paper mentions this alternative but proves and implements its analytical derivative estimator; that estimator and its supporting calculations remain visible.

An alternative, when the integrated functional $\mu$ can be evaluated, is a numerical directional derivative,

$$
\widehat D\mu[h]=\frac{\mu(\widehat\theta+t_nh)-\mu(\widehat\theta)}{t_n},
\qquad t_n\to0,\quad\sqrt n t_n\to\infty.
$$

The appendix states the local Lipschitz and compact-uniform differentiability conditions that justify this alternative. Replacing $P$ inside $\mu$ by $P_n$ requires the corresponding derivative empirical-process error to vanish; the step-size restriction alone does not establish that fact. The analytical construction in the paper and the numerical delta method are distinct ways of estimating the derivative [@fang_inference_2018].
-->
<p>Integration can yield a linear derivative when the ties responsible for pointwise nonlinearity occur only on a set of integration measure zero. For fixed {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, they give the sufficient condition</p>
{% raw %}<div class="math display">\[
P\{p_1(W)\in\{c,1-c\}\}=0
\]</div>{% endraw %}
<p>for ordinary-bootstrap validity for ATE endpoints under the paper’s other regularity conditions. For ATT endpoints, they give {% raw %}<span class="math inline">\(P\{p_1(W)=c\}=0\)</span>{% endraw %} as a sufficient condition together with the stated moment conditions.</p>
<h3 data-note-section="6" id="30-66-confidence-bands-and-breakdown-points">6. Confidence bands and breakdown points</h3>
<p>Let {% raw %}<span class="math inline">\((Z_{L,j},Z_{U,j})_{j=1}^J\)</span>{% endraw %} be the joint limit of the scaled lower- and upper-endpoint estimation errors in Theorem 1. To cover both endpoints at every grid value, define</p>
{% raw %}<div class="math display">\[
V=\max_{1\le j\le J}\{Z_{L,j},-Z_{U,j}\}.
\]</div>{% endraw %}
<p>Suppose its cdf is continuous and strictly increasing at its {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %} quantile {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\widehat k\)</span>{% endraw %} be the corresponding bootstrap quantile. Then</p>
{% raw %}<div class="math display">\[
\ell_j=\widehat L_\varepsilon(c_j)-\widehat k/\sqrt n,
\qquad u_j=\widehat U_\varepsilon(c_j)+\widehat k/\sqrt n
\]</div>{% endraw %}
<p>satisfy</p>
{% raw %}<div class="math display">\[
P\{\ell_j\le L_\varepsilon(c_j),\ U_\varepsilon(c_j)\le u_j\text{ for every }j\}
\longrightarrow1-\alpha.
\]</div>{% endraw %}
<p>Rearranging the endpoint inequalities shows that simultaneous coverage is equivalent to the sample counterpart of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} being at most {% raw %}<span class="math inline">\(\widehat k\)</span>{% endraw %}. Bootstrap consistency and the stated quantile conditions therefore give the coverage limit. With positive, consistently estimated coordinate scales, the same construction divides each error by its scale in the maximum and multiplies the corresponding endpoint correction by that scale.</p>
<p>The population lower endpoint is nonincreasing in {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and the upper endpoint is nondecreasing. Assume {% raw %}<span class="math inline">\(c_1=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(c\in[0,c_J]\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
\ell(c)=\max_{j:c_j\ge c}\ell_j,
\qquad u(c)=\min_{j:c_j\ge c}u_j.
\]</div>{% endraw %}
<p>On the simultaneous grid-coverage event, each lower confidence bound at a grid value to the right of {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(L_\varepsilon(c)\)</span>{% endraw %}, because the population lower endpoint is nonincreasing. Each upper confidence bound at such a grid value is at least {% raw %}<span class="math inline">\(U_\varepsilon(c)\)</span>{% endraw %}, because the population upper endpoint is nondecreasing. Taking the displayed maximum and minimum preserves these inequalities, so the step functions cover throughout the interval. Section 5.2.2 of the authors’ preprint uses this argument to obtain interval coverage from joint inference on a finite grid and population monotonicity.</p>
<p>The lower band also gives a confidence bound for the sensitivity value up to which the trimmed effect remains positive. Define</p>
{% raw %}<div class="math display">\[
c_\varepsilon^*=\sup\bigl(\{0\}\cup\{c\in[0,c_J]:L_\varepsilon(c)&gt;0\}\bigr),
\qquad \underline c_\varepsilon=\sup\bigl(\{0\}\cup\{c:\ell(c)&gt;0\}\bigr).
\]</div>{% endraw %}
<p>On the coverage event, every sensitivity value at which the lower band is positive also has a positive population lower endpoint. Thus {% raw %}<span class="math inline">\(\{c:\ell(c)&gt;0\}\subseteq\{c:L_\varepsilon(c)&gt;0\}\)</span>{% endraw %} and hence {% raw %}<span class="math inline">\(\underline c_\varepsilon\le c_\varepsilon^*\)</span>{% endraw %}. Taking suprema converts the lower band into a lower confidence bound for the breakdown point. When the lower band is nowhere positive, the convention {% raw %}<span class="math inline">\(\underline c_\varepsilon=0\)</span>{% endraw %} records that no positive range has been certified, including at zero.</p>
<!-- original-paper-scope: untrimmed-support-width-correction
An added support-width correction and inference procedure for untrimmed targets; the source paper centers its asymptotic results at fixed-trimming functionals.

To infer the untrimmed endpoints $L,U$, account for trimming. If the observed conditional support for outcome $x$ has known finite width $D_x(w)$, then

$$
|\mu_x^\pm(c)-\mu_{x,\mathrm{untrimmed}}^\pm(c)|
\le B_x^\pm(c)
:=E\left[D_x(W)\int_0^1 1\{t_x^\pm(\tau,W;c)\notin[\varepsilon,1-\varepsilon]\}\,d\tau\right].
$$

Consequently $|L_\varepsilon-L|\le B_1^-+B_0^+$ and $|U_\varepsilon-U|\le B_1^++B_0^-$. For ATT, the mixture identity similarly bounds the lower- and upper-endpoint trimming errors by $B_0^+/p$ and $B_0^-/p$, respectively. Known upper bounds for these quantities can be subtracted from $\ell_j$ and added to $u_j$ before monotone extension and inversion. Estimated corrections need their own simultaneous upper confidence bounds. At large $c$, clipping can affect a positive interval of quantile indices even as $\varepsilon\downarrow0$, and an unbounded support requires tail assumptions in place of this support-width calculation.
-->
<!-- original-paper-scope: regular-crossing-asymptotics
Additional point-estimator asymptotics and a cubic-crossing example. The paper's confidence-band inversion for breakdown points remains visible.

For comparison, a unique interior crossing $L(c^*)=0$ with $L'(c^*)<0$ permits

$$
\sqrt n(\widehat c^*-c^*)
=-\frac{\sqrt n\{\widehat L(c^*)-L(c^*)\}}{L'(c^*)}+o_P(1)
$$

under the local uniform conditions in the appendix. With $L(c)=-(c-c^*)^3$ and an additive error $n^{-1/2}Z$, the crossing is instead $c^*+n^{-1/6}\sqrt[3]{Z}$. Band inversion remains valid without a nonzero derivative at the crossing.
-->
<h3 data-note-section="7" id="30-66-appendix-differentiation-and-stochastic-remainders">7. Appendix: differentiation and stochastic remainders</h3>
<p>For a finite minimum, each nonactive argument exceeds the minimum by a fixed positive amount. If the step size tends to zero and the perturbation directions converge, these arguments eventually remain above the perturbed minimum. The active arguments start at the same value. Subtracting that value and dividing by the positive step size leaves the minimum of their perturbations. Taking limits gives the stated Hadamard directional derivative. As a finite minimum of coordinates, the derivative is continuous in the direction.</p>
<p>Take {% raw %}<span class="math inline">\(a_n\downarrow0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb R^{d_\beta}\times\ell^\infty(I)^{d_\gamma}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(h_\gamma\)</span>{% endraw %} continuous. At fixed {% raw %}<span class="math inline">\((\tau,w)\)</span>{% endraw %}, the minimum, maximum, and clipping rules give the derivative of {% raw %}<span class="math inline">\(s_x^\pm\)</span>{% endraw %}. Uniform overlap bounds the difference quotients for these indices by a constant times {% raw %}<span class="math inline">\(\|h_{\beta,n}\|\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(s_n\)</span>{% endraw %} for the index evaluated at {% raw %}<span class="math inline">\(\beta_0+a_nh_{\beta,n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_0\)</span>{% endraw %} for its population value, suppressing the treatment, sign, and sensitivity indices. Taylor expansion of {% raw %}<span class="math inline">\(\gamma_0\)</span>{% endraw %} and uniform continuity of {% raw %}<span class="math inline">\(h_\gamma\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[
\frac{\gamma_0(s_n)+a_nh_{\gamma,n}(s_n)-\gamma_0(s_0)}{a_n}
\longrightarrow h_\gamma(s_0)+\gamma_0&#x27;(s_0)Ds[h].
\]</div>{% endraw %}
<p>After multiplication by {% raw %}<span class="math inline">\(q(x,w)\)</span>{% endraw %}, the norm of the difference quotient is bounded by {% raw %}<span class="math inline">\(C\|q(x,w)\|\sup_n\|h_n\|\)</span>{% endraw %}. The moment condition on the regressors makes this bound integrable over {% raw %}<span class="math inline">\(d\tau\,dP_W\)</span>{% endraw %}. Dominated convergence then gives the derivative formulas for {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Pg\)</span>{% endraw %}. The same bound gives continuity of the derivatives in the tangent direction and {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} continuity of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}.</p>
<p>For the stochastic remainder, condition 3 and {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} convergence imply</p>
{% raw %}<div class="math display">\[
\mathbb G_n\{g(\widehat\theta)-g(\theta_0)\}=o_P(1)
\]</div>{% endraw %}
<p>by asymptotic equicontinuity of a Donsker empirical process. Applying the directional delta method to {% raw %}<span class="math inline">\(Pg(\widehat\theta)\)</span>{% endraw %} jointly with the finite vector {% raw %}<span class="math inline">\(\mathbb G_ng(\theta_0)\)</span>{% endraw %} proves Theorem 1. For ATT, {% raw %}<span class="math inline">\(p\in(0,1)\)</span>{% endraw %} ensures differentiability of the ratio in {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Differentiating the equivalent expression {% raw %}<span class="math inline">\(m_1-m_0-(M-m_0)/p\)</span>{% endraw %} gives the displayed ATT derivative.</p>
<!-- original-paper-scope: numerical-derivative-proof
Proof of the additional numerical-delta implementation commented out above.

For completeness, a locally Lipschitz map $\mu$ with Hadamard directional derivative, uniformly approximated on compact sets of directions, admits the numerical estimate above. If $\|\widehat\theta-\theta_0\|=O_P(n^{-1/2})$, the difference between the numerical quotient at $\widehat\theta$ and the quotient at $\theta_0$ is at most

$$
2K\|\widehat\theta-\theta_0\|/t_n=o_P(1).
$$

The quotient at $\theta_0$ converges compact-uniformly to $D\mu$. Local Lipschitz continuity also supplies the required equicontinuity in the direction. The domain must contain the perturbed functions at which the quotients are evaluated. For the integrated formula here, it suffices to extend its definition to bounded coefficient functions on $I$; monotonicity of every perturbed quantile curve is not needed to evaluate that formula.
-->
<!-- original-paper-scope: regular-crossing-proof
Proof of the additional crossing-estimator result commented out above.

## Appendix: a regular crossing

Suppose $c^*$ is the unique zero of a continuous nonincreasing $L$ on a compact interval, lies in its interior, and $L'(c^*)<0$. Suppose $\widehat L$ is uniformly consistent and

$$
\widehat L(c)=L(c)+n^{-1/2}Z_n(c)+o_P(n^{-1/2})
$$

uniformly on a fixed neighborhood of $c^*$. Assume $Z_n$ is locally bounded in probability and stochastically equicontinuous at $c^*$. Let $\widehat c^*\xrightarrow{P}c^*$ satisfy $\widehat L(\widehat c^*)=o_P(n^{-1/2})$; a sufficiently accurate root or crossing interpolation has this property. The nonzero derivative bounds $|L(c)|$ below by a positive multiple of $|c-c^*|$ near $c^*$. The approximate-root equation first gives $\widehat c^*-c^*=O_P(n^{-1/2})$. Taylor expansion and equicontinuity then give

$$
0=L'(c^*)(\widehat c^*-c^*)+n^{-1/2}Z_n(c^*)+o_P(n^{-1/2}),
$$

which yields the stated expansion.
-->
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-fang_inference_2018" class="csl-entry" role="listitem">
Fang, Zheng, and Andres Santos. 2018. <span>“Inference on Directionally Differentiable Functions.”</span> <em>The Review of Economic Studies</em>, September. <a href="https://doi.org/10.1093/restud/rdy049">https://doi.org/10.1093/restud/rdy049</a>.
</div>
<div id="ref-masten_assessing_2024" class="csl-entry" role="listitem">
Masten, Matthew A., Alexandre Poirier, and Linqi Zhang. 2024. <span>“Assessing Sensitivity to Unconfoundedness: Estimation and Inference.”</span> <em>Journal of Business &amp; Economic Statistics</em> 42 (1): 1–13. <a href="https://doi.org/10.1080/07350015.2023.2183212">https://doi.org/10.1080/07350015.2023.2183212</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-04-30-conditional-c-dependence %}">Conditional c-Dependence</a></p></nav>
</div>
