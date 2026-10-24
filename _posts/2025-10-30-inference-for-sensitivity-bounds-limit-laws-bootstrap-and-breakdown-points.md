---
layout: "post"
title: "Inference for Sensitivity Bounds: Limit Laws, Bootstrap, and Breakdown Points"
date: "2025-10-30"
tags: ["econometrics", "partial identification"]
excerpt: "Sensitivity-bound estimators have directional limit laws; derivative bootstrap draws and simultaneous finite-grid bands account for estimation error and changes in the active constraints."
note_series: "Sensitivity to unconfoundedness"
note_source: "assets/notes/Overleaf Projects (32 items)/Unconfoundedness (Notes)/stats.tex"
redirect_from: ["/2025/06/30/estimating-sensitivity-bounds-and-their-limit-laws/", "/2025/06/30/estimating-sensitivity-bounds-first-steps/", "/2025/07/20/estimating-bound-functions/", "/2025/08/10/limit-theory-for-the-first-step-estimators/", "/2025/08/30/limit-theory-for-cate-bounds/", "/2025/09/19/limit-theory-for-ate-bounds/", "/2025/10/10/limit-theory-for-att-bounds/", "/2025/10/30/bootstrap-confidence-bands-and-breakdown-points/", "/2025/10/30/bootstrap-inference-for-sensitivity-bounds/", "/2025/11/19/inference-on-potential-outcome-means/", "/2025/12/10/pointwise-confidence-sets-for-ate-bounds/", "/2025/12/30/uniform-confidence-bands-over-the-sensitivity-parameter/", "/2026/01/19/inference-on-att-bounds/", "/2026/02/09/inference-on-breakdown-points/", "/2026/03/01/when-standard-inference-applies/", "/2026/03/22/technical-conditions-for-sensitivity-inference/"]
---

<div class="note-content" markdown="0">


<p>The <a href="{% post_url 2025-04-30-conditional-c-dependence-sharp-distribution-and-treatment-effect-bounds %}">sensitivity bounds</a> depend on minima and maxima of functions of the propensity score. Estimating that score can change which function determines an endpoint. The resulting limit distribution can be nonnormal even when the first-stage estimates are asymptotically normal. This note derives the endpoint expansion, explains the derivative bootstrap of <span class="citation" data-cites="masten_assessing_2024">Masten, Poirier, and Zhang (<a href="#ref-masten_assessing_2024" role="doc-biblioref">2024</a>)</span>, and constructs confidence bands and robustness thresholds on a finite sensitivity grid.</p>
<h3 data-note-section="1" id="30-66-the-estimators-and-their-limits">1. The estimators and their limits</h3>
<p>Let {% raw %}<span class="math inline">\(O_i=(Y_i,X_i,W_i)\)</span>{% endraw %} be independent observations from {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(X_i\in\{0,1\}\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_i f(O_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(x\in\{0,1\}\)</span>{% endraw %}, suppose</p>
{% raw %}<div class="math display">\[
p_x(w)=P(X=x\mid W=w)=p_x(w;\beta_0),
\qquad Q_{Y\mid X,W}(u\mid x,w)=q(x,w)&#x27;\gamma_0(u).
\]</div>{% endraw %}
<p>Fix a finite set {% raw %}<span class="math inline">\(\mathcal C=\{c_1&lt;\cdots&lt;c_J\}\subset[0,1]\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(m(\tau)=\min\{\tau,1-\tau\}\)</span>{% endraw %} and define the full-range probability indices</p>
{% raw %}<div class="math display">\[
t_x^+(\tau,w;c)=\min\left\{\tau+\frac{c}{p_x(w)}m(\tau),\frac{\tau}{p_x(w)},1\right\},
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
t_x^-(\tau,w;c)=\max\left\{\tau-\frac{c}{p_x(w)}m(\tau),1+\frac{\tau-1}{p_x(w)},0\right\}.
\]</div>{% endraw %}
<p>The second and third arguments matter when {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is large relative to the propensity score. For fixed {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1/2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(C_\varepsilon(t)=\max\{\varepsilon,\min(t,1-\varepsilon)\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_x^\pm=C_\varepsilon(t_x^\pm)\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(\theta=(\beta,\gamma)\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
g_x^\pm(w;\theta,c)=\int_0^1q(x,w)&#x27;\gamma(s_x^\pm(\tau,w;\beta,c))\,d\tau,
\qquad \mu_x^\pm(c)=Pg_x^\pm(W;\theta_0,c).
\]</div>{% endraw %}
<p>These are the trimmed conditional and marginal potential-outcome mean endpoints. The trimmed ATE endpoints and their estimates are</p>
{% raw %}<div class="math display">\[
L_\varepsilon=\mu_1^- -\mu_0^+,
\qquad U_\varepsilon=\mu_1^+ -\mu_0^-,
\qquad \widehat\mu_x^\pm=P_ng_x^\pm(W;\widehat\theta,c).
\]</div>{% endraw %}
<p>Every limit below is centered at these fixed-trimming functionals. The relation to untrimmed bounds is given after the confidence-band construction.</p>
<p>The following conditions state the inputs to the endpoint argument. They are stronger in overlap than the moment conditions used in the paper, but make the derivative and empirical-process steps explicit.</p>
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
<p>Here a {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker class is one on which the centered empirical process converges to a tight Gaussian process. Condition 3 is the stochastic-equicontinuity requirement for using the same observations to estimate the nuisance parameters and average over {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. A uniform consistency argument alone does not establish it.</p>
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
<p>Nonsingularity of {% raw %}<span class="math inline">\(I_\beta\)</span>{% endraw %} and uniform nonsingularity of {% raw %}<span class="math inline">\(J(u)\)</span>{% endraw %}, positive continuous conditional densities, and suitable regressor moments enter the first-stage expansion. Uniformity in {% raw %}<span class="math inline">\(u\)</span>{% endraw %} and the empirical-process condition require additional regularity; Appendix A of the <a href="https://arxiv.org/pdf/2012.15716">author’s preprint</a> supplies the first-stage and averaging results under its stated assumptions. The endpoint theorem below takes conditions 1–3 as its high-level hypotheses.</p>
<div id="sensitivity-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under conditions 1–3, the vector of estimated trimmed conditional-mean endpoints at any fixed finite collection of covariate values, and of marginal-mean and ATE endpoints on {% raw %}<span class="math inline">\(\mathcal C\)</span>{% endraw %}, has a root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} limit. At fixed {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, the limit of {% raw %}<span class="math inline">\(\widehat g_x^\pm(w)-g_x^\pm(w)\)</span>{% endraw %}, multiplied by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %}, is {% raw %}<span class="math inline">\(Dg_x^\pm(w)[Z]\)</span>{% endraw %}. For a marginal mean the limit is</p>
{% raw %}<div class="math display">\[
R_x^\pm(c)=\mathbb G g_x^\pm(\cdot;\theta_0,c)+P Dg_x^\pm(W;c)[Z],
\]</div>{% endraw %}
<p>where the derivative is defined below and {% raw %}<span class="math inline">\((\mathbb G,Z)\)</span>{% endraw %} is the joint Gaussian limit of the empirical and first-stage processes. The ATE limits are {% raw %}<span class="math inline">\(R_1^- -R_0^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_1^+ -R_0^-\)</span>{% endraw %}. Conditions 1–2 must also hold at each fixed covariate value used in the conditional statements.</p>
</div>
<p>At fixed {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, the CATE endpoint limits are</p>
{% raw %}<div class="math display">\[
Dg_1^-(w;c)[Z]-Dg_0^+(w;c)[Z],\qquad
Dg_1^+(w;c)[Z]-Dg_0^-(w;c)[Z].
\]</div>{% endraw %}
<p>The derivatives are positively homogeneous but can be nonlinear, so these limits need not be Gaussian.</p>
<h3 data-note-section="2" id="30-66-differentiate-the-active-branch">2. Differentiate the active branch</h3>
<p>For {% raw %}<span class="math inline">\(a=(a_1,\ldots,a_k)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(A(a)=\{j:a_j=\min_l a_l\}\)</span>{% endraw %}. The directional derivative of a minimum is</p>
{% raw %}<div class="math display">\[
D\min(a)[h]=\min_{j\in A(a)}h_j.
\]</div>{% endraw %}
<p>For a maximum, replace both minima by maxima and use the maximizing indices. A unique active argument gives a linear derivative; a tie retains all active perturbations.</p>
<p><span id="30-66-a-derivative-calculation-inside-a-quantile-bound"></span></p>
<p>Let {% raw %}<span class="math inline">\(h=(h_\beta,h_\gamma)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e_x(w)=\partial_\beta p_x(w;\beta_0)&#x27;h_\beta\)</span>{% endraw %}. The derivatives of the three arguments of {% raw %}<span class="math inline">\(t_x^+\)</span>{% endraw %} are</p>
{% raw %}<div class="math display">\[
-\frac{cm(\tau)}{p_x(w)^2}e_x(w),\qquad
-\frac{\tau}{p_x(w)^2}e_x(w),\qquad 0.
\]</div>{% endraw %}
<p>Those of {% raw %}<span class="math inline">\(t_x^-\)</span>{% endraw %} are</p>
{% raw %}<div class="math display">\[
\frac{cm(\tau)}{p_x(w)^2}e_x(w),\qquad
\frac{1-\tau}{p_x(w)^2}e_x(w),\qquad 0.
\]</div>{% endraw %}
<p>Apply the minimum or maximum rule to obtain {% raw %}<span class="math inline">\(Dt_x^\pm[h]\)</span>{% endraw %}. Clipping has derivative</p>
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
<p>The first term estimates the quantile function; the second changes its evaluation index. In a scalar quantile model, {% raw %}<span class="math inline">\(Q&#x27;(u)=1/f_Y(Q(u))\)</span>{% endraw %}, so a low outcome density increases the effect of propensity estimation. The appendix justifies differentiation under the integrals. It uses dominated convergence in the integration variables; uniform differentiability in {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} across moving ties is unnecessary.</p>
<h3 data-note-section="3" id="30-66-averaging-adds-another-source-of-noise">3. Averaging adds another source of noise</h3>
<p>Suppress {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, the sign, and {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. The expansion starts from the exact decomposition</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat\mu-\mu)
=\mathbb G_ng(\theta_0)
+\sqrt nP\{g(\widehat\theta)-g(\theta_0)\}
+\mathbb G_n\{g(\widehat\theta)-g(\theta_0)\}.
\]</div>{% endraw %}
<p>Condition 3 makes the last term {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %}. Directional differentiability gives the limit {% raw %}<span class="math inline">\(PDg[Z]\)</span>{% endraw %} for the second term. The first term remains in the limit and is generally correlated with {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}.</p>
<p>For ATT, let {% raw %}<span class="math inline">\(p=P(X=1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_d=E(Y\mid X=d)\)</span>{% endraw %}. The population identity is</p>
{% raw %}<div class="math display">\[
T(M,p,m_0,m_1)=m_1-\frac{M-(1-p)m_0}{p},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(M=E(Y_0)\)</span>{% endraw %}. Its lower bound uses {% raw %}<span class="math inline">\(M=\mu_0^+\)</span>{% endraw %}, and its upper bound uses {% raw %}<span class="math inline">\(M=\mu_0^-\)</span>{% endraw %}. Its derivative is</p>
{% raw %}<div class="math display">\[
DT[h_M,h_p,h_0,h_1]
=h_1+\frac{1-p}{p}h_0-\frac{h_M}{p}
+\frac{M-m_0}{p^2}h_p.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(E(Y^2)&lt;\infty\)</span>{% endraw %}, the sample treatment share and within-group means have influence functions {% raw %}<span class="math inline">\(X-p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1[X=d](Y-m_d)/P(X=d)\)</span>{% endraw %}. Append these to the same empirical process and substitute {% raw %}<span class="math inline">\(h_M=R_0^\pm\)</span>{% endraw %}. The corresponding trimmed ATT limits follow from the ordinary chain rule applied after the directional mean expansion.</p>
<h3 data-note-section="4" id="30-66-a-direct-demonstration-of-ordinary-bootstrap-failure">4. A direct demonstration of ordinary bootstrap failure</h3>
<p>Let {% raw %}<span class="math inline">\(h(\theta)=\min(\theta_1,\theta_2)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta=(0,0)\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(\sqrt n\widehat\theta\Rightarrow(Z_1,Z_2)\)</span>{% endraw %}, with independent standard normal coordinates. The limit {% raw %}<span class="math inline">\(\min(Z_1,Z_2)\)</span>{% endraw %} has cdf {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %} at zero.</p>
<p>The ordinary bootstrap instead has the conditional limiting expression</p>
{% raw %}<div class="math display">\[
\min(Z_1+Z_1^*,Z_2+Z_2^*)-\min(Z_1,Z_2),
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(Z^*\)</span>{% endraw %} an independent copy. If {% raw %}<span class="math inline">\(Z_1\le Z_2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d=Z_2-Z_1\)</span>{% endraw %}, its conditional cdf at zero is</p>
{% raw %}<div class="math display">\[
1-P(Z_1^*&gt;0,Z_2^*&gt;-d)=1-\frac12\Phi(d).
\]</div>{% endraw %}
<p>The same expression holds with {% raw %}<span class="math inline">\(d=|Z_2-Z_1|\)</span>{% endraw %} in the other ordering. Since {% raw %}<span class="math inline">\(d&gt;0\)</span>{% endraw %} almost surely, this conditional probability does not converge to {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %}. The estimated gap is of the same order as the perturbation used by the bootstrap.</p>
<p>The identity</p>
{% raw %}<div class="math display">\[
\min(Z_1,Z_2)=\frac{Z_1+Z_2-|Z_1-Z_2|}{2}
\]</div>{% endraw %}
<p>also gives {% raw %}<span class="math inline">\(E\min(Z_1,Z_2)=-1/\sqrt\pi\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(Z_1-Z_2\sim \mathcal{N}(0,2)\)</span>{% endraw %}. Choosing an extreme noisy branch changes the mean at root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} order. A clipping derivative {% raw %}<span class="math inline">\(v\mapsto\max(v,0)\)</span>{% endraw %} instead produces an atom at zero when {% raw %}<span class="math inline">\(v\)</span>{% endraw %} has a continuous symmetric law.</p>
<h3 data-note-section="5" id="30-66-estimate-the-directional-derivative-before-applying-it">5. Estimate the directional derivative before applying it</h3>
<p>Resample observations jointly, obtaining the centered first-stage fluctuation {% raw %}<span class="math inline">\(Z_n^*=\sqrt n(\widehat\theta^*-\widehat\theta)\)</span>{% endraw %} and empirical-process fluctuation {% raw %}<span class="math inline">\(\mathbb G_n^*=\sqrt n(P_n^*-P_n)\)</span>{% endraw %}. A derivative bootstrap for a marginal endpoint is</p>
{% raw %}<div class="math display">\[
R_{x,n}^{\pm *}(c)=\mathbb G_n^*g_x^\pm(\cdot;\widehat\theta,c)
+\widehat D\mu_x^\pm(c)[Z_n^*].
\]</div>{% endraw %}
<p>Using the same resample preserves the covariance between the two terms. ATE differences and the ATT derivative are then formed from this joint vector.</p>
<div id="sensitivity-derivative-bootstrap" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Suppose conditions 1–3 hold, the resampled empirical and first-stage vector converges conditionally in bounded-Lipschitz distance to its joint Gaussian limit, and the derivative estimator converges in probability to {% raw %}<span class="math inline">\(D\mu_x^\pm\)</span>{% endraw %} uniformly on every compact set of the tangent space. Assume also that the derivative estimates are asymptotically equicontinuous in neighborhoods of compact tangent sets, the bootstrap directions are asymptotically tight about that space, and the empirical replacement {% raw %}<span class="math inline">\(\mathbb G_n^*\{g(\widehat\theta)-g(\theta_0)\}\)</span>{% endraw %} is conditionally {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %}. Then the vector {% raw %}<span class="math inline">\(R_{x,n}^{\pm *}(c)\)</span>{% endraw %} consistently estimates the joint endpoint limit law on {% raw %}<span class="math inline">\(\mathcal C\)</span>{% endraw %}.</p>
</div>
<p>The analytical derivative estimator in <span class="citation" data-cites="masten_assessing_2024">(<a href="#ref-masten_assessing_2024" role="doc-biblioref">Masten, Poirier, and Zhang 2024</a>)</span> retains arguments whose estimated distance from the extreme is at most {% raw %}<span class="math inline">\(\kappa_n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\kappa_n\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt n\kappa_n\to\infty\)</span>{% endraw %}. Its estimate of {% raw %}<span class="math inline">\(\gamma_0&#x27;\)</span>{% endraw %} uses a separate finite-difference step {% raw %}<span class="math inline">\(\eta_n\to0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sqrt n\eta_n\to\infty\)</span>{% endraw %}. The first condition resolves ties; the second makes root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} estimation noise negligible relative to the difference quotient. Uniform smoothness and the paper’s derivative-consistency argument are also required.</p>
<p>An alternative, when the integrated functional {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} can be evaluated, is a numerical directional derivative,</p>
{% raw %}<div class="math display">\[
\widehat D\mu[h]=\frac{\mu(\widehat\theta+t_nh)-\mu(\widehat\theta)}{t_n},
\qquad t_n\to0,\quad\sqrt n t_n\to\infty.
\]</div>{% endraw %}
<p>The appendix states the local Lipschitz and compact-uniform differentiability conditions that justify this alternative. Replacing {% raw %}<span class="math inline">\(P\)</span>{% endraw %} inside {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} by {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} requires the corresponding derivative empirical-process error to vanish; the step-size restriction alone does not establish that fact. The analytical construction in the paper and the numerical delta method are distinct ways of estimating the derivative <span class="citation" data-cites="fang_inference_2018">(<a href="#ref-fang_inference_2018" role="doc-biblioref">Fang and Santos 2018</a>)</span>.</p>
<p>A nonlinear pointwise formula can become linear after integration if ties occur only on a set of integration measure zero. For fixed {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, the paper gives the sufficient condition</p>
{% raw %}<div class="math display">\[
P\{p_1(W)\in\{c,1-c\}\}=0
\]</div>{% endraw %}
<p>for ordinary-bootstrap validity for ATE endpoints, under its other regularity conditions. Its ATT result uses {% raw %}<span class="math inline">\(P\{p_1(W)=c\}=0\)</span>{% endraw %} and the stated moment conditions. These are sufficient conditions, not characterizations of every case in which the bootstrap works.</p>
<h3 data-note-section="6" id="30-66-confidence-bands-and-breakdown-points">6. Confidence bands and breakdown points</h3>
<p>Let {% raw %}<span class="math inline">\((Z_{L,j},Z_{U,j})_{j=1}^J\)</span>{% endraw %} be the joint endpoint limit from the theorem and put</p>
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
<p>This follows because the displayed event is exactly the event that the sample counterpart of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(\widehat k\)</span>{% endraw %}. Positive, consistently estimated coordinate scales may also be used in both the maximum and the endpoint corrections.</p>
<p>The population lower endpoint is nonincreasing in {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and the upper endpoint is nondecreasing. Assume {% raw %}<span class="math inline">\(c_1=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(c\in[0,c_J]\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
\ell(c)=\max_{j:c_j\ge c}\ell_j,
\qquad u(c)=\min_{j:c_j\ge c}u_j.
\]</div>{% endraw %}
<p>On the simultaneous grid-coverage event, every term in the first maximum is at most {% raw %}<span class="math inline">\(L_\varepsilon(c)\)</span>{% endraw %}, and every term in the second minimum is at least {% raw %}<span class="math inline">\(U_\varepsilon(c)\)</span>{% endraw %}. The step functions therefore cover throughout the interval. This is the finite-grid and monotonicity argument used in Section 5.2.2 of the author’s preprint. It does not require a limiting process indexed by every {% raw %}<span class="math inline">\(c\in[0,1]\)</span>{% endraw %}.</p>
<p>For a positive-effect claim, define</p>
{% raw %}<div class="math display">\[
c_\varepsilon^*=\sup\bigl(\{0\}\cup\{c\in[0,c_J]:L_\varepsilon(c)&gt;0\}\bigr),
\qquad \underline c_\varepsilon=\sup\bigl(\{0\}\cup\{c:\ell(c)&gt;0\}\bigr).
\]</div>{% endraw %}
<p>On the coverage event, {% raw %}<span class="math inline">\(\{c:\ell(c)&gt;0\}\subseteq\{c:L_\varepsilon(c)&gt;0\}\)</span>{% endraw %} and hence {% raw %}<span class="math inline">\(\underline c_\varepsilon\le c_\varepsilon^*\)</span>{% endraw %}. If the first set is empty, report that no positive range was certified; the numerical convention {% raw %}<span class="math inline">\(\underline c_\varepsilon=0\)</span>{% endraw %} does not certify positivity at zero.</p>
<p>To infer the untrimmed endpoints {% raw %}<span class="math inline">\(L,U\)</span>{% endraw %}, account for trimming. If the observed conditional support for outcome {% raw %}<span class="math inline">\(x\)</span>{% endraw %} has known finite width {% raw %}<span class="math inline">\(D_x(w)\)</span>{% endraw %}, then</p>
{% raw %}<div class="math display">\[
|\mu_x^\pm(c)-\mu_{x,\mathrm{untrimmed}}^\pm(c)|
\le B_x^\pm(c)
:=E\left[D_x(W)\int_0^1 1\{t_x^\pm(\tau,W;c)\notin[\varepsilon,1-\varepsilon]\}\,d\tau\right].
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(|L_\varepsilon-L|\le B_1^-+B_0^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|U_\varepsilon-U|\le B_1^++B_0^-\)</span>{% endraw %}. For ATT, the mixture identity similarly bounds the lower- and upper-endpoint trimming errors by {% raw %}<span class="math inline">\(B_0^+/p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_0^-/p\)</span>{% endraw %}, respectively. Known upper bounds for these quantities can be subtracted from {% raw %}<span class="math inline">\(\ell_j\)</span>{% endraw %} and added to {% raw %}<span class="math inline">\(u_j\)</span>{% endraw %} before monotone extension and inversion. Estimated corrections need their own simultaneous upper confidence bounds. At large {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, clipping can affect a positive interval of quantile indices even as {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}, and an unbounded support requires tail assumptions in place of this support-width calculation.</p>
<p>For comparison, a unique interior crossing {% raw %}<span class="math inline">\(L(c^*)=0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(L&#x27;(c^*)&lt;0\)</span>{% endraw %} permits</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat c^*-c^*)
=-\frac{\sqrt n\{\widehat L(c^*)-L(c^*)\}}{L&#x27;(c^*)}+o_P(1)
\]</div>{% endraw %}
<p>under the local uniform conditions in the appendix. With {% raw %}<span class="math inline">\(L(c)=-(c-c^*)^3\)</span>{% endraw %} and an additive error {% raw %}<span class="math inline">\(n^{-1/2}Z\)</span>{% endraw %}, the crossing is instead {% raw %}<span class="math inline">\(c^*+n^{-1/6}\sqrt[3]{Z}\)</span>{% endraw %}. Band inversion remains valid without a nonzero derivative at the crossing.</p>
<h3 data-note-section="7" id="30-66-appendix-differentiation-and-stochastic-remainders">7. Appendix: differentiation and stochastic remainders</h3>
<p>For a finite minimum, nonactive arguments have a fixed positive gap. Along any sequence of positive steps tending to zero and converging perturbations, they are eventually excluded. Among the active arguments, subtracting their common value and dividing by the step leaves the minimum of the perturbations. This proves the Hadamard directional derivative and its continuity in the direction.</p>
<p>Now take {% raw %}<span class="math inline">\(a_n\downarrow0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb R^{d_\beta}\times\ell^\infty(I)^{d_\gamma}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(h_\gamma\)</span>{% endraw %} continuous. At fixed {% raw %}<span class="math inline">\((\tau,w)\)</span>{% endraw %}, the finite minimum, maximum, and clipping rules give the derivative of {% raw %}<span class="math inline">\(s_x^\pm\)</span>{% endraw %}. Uniform overlap bounds their difference quotients by a constant times {% raw %}<span class="math inline">\(\|h_{\beta,n}\|\)</span>{% endraw %}. Taylor expansion of {% raw %}<span class="math inline">\(\gamma_0\)</span>{% endraw %} and uniform continuity of {% raw %}<span class="math inline">\(h_\gamma\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[
\frac{\gamma_0(s_n)+a_nh_{\gamma,n}(s_n)-\gamma_0(s_0)}{a_n}
\longrightarrow h_\gamma(s_0)+\gamma_0&#x27;(s_0)Ds[h].
\]</div>{% endraw %}
<p>The norm of the integrand after multiplication by {% raw %}<span class="math inline">\(q(x,w)\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(C\|q(x,w)\|\sup_n\|h_n\|\)</span>{% endraw %}. This envelope is integrable over {% raw %}<span class="math inline">\(d\tau\,dP_W\)</span>{% endraw %}, so dominated convergence proves the derivative formula for {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Pg\)</span>{% endraw %}. The same bound proves continuity of these derivatives in the tangent direction and {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} continuity of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}.</p>
<p>For the stochastic remainder, condition 3 and {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} convergence imply</p>
{% raw %}<div class="math display">\[
\mathbb G_n\{g(\widehat\theta)-g(\theta_0)\}=o_P(1)
\]</div>{% endraw %}
<p>by asymptotic equicontinuity of a Donsker empirical process. Apply the directional delta method to {% raw %}<span class="math inline">\(Pg(\widehat\theta)\)</span>{% endraw %} jointly with the finite vector {% raw %}<span class="math inline">\(\mathbb G_ng(\theta_0)\)</span>{% endraw %} to obtain the theorem. In the ATT expansion, the ratio identities are differentiable because {% raw %}<span class="math inline">\(p\in(0,1)\)</span>{% endraw %}; the displayed derivative follows by differentiating {% raw %}<span class="math inline">\(m_1-m_0-(M-m_0)/p\)</span>{% endraw %}.</p>
<h3 data-note-section="8" id="30-66-appendix-derivative-bootstrap-consistency">8. Appendix: derivative-bootstrap consistency</h3>
<p>Tightness places the resampled tangent directions in an arbitrarily small neighborhood of a compact set with arbitrarily high conditional probability. Uniform consistency of {% raw %}<span class="math inline">\(\widehat D\mu\)</span>{% endraw %} on compact sets, together with the corresponding asymptotic equicontinuity in their neighborhoods, then makes replacing {% raw %}<span class="math inline">\(\widehat D\mu\)</span>{% endraw %} by {% raw %}<span class="math inline">\(D\mu\)</span>{% endraw %} negligible. The derivative is continuous and the resampled input has the correct conditional joint law. The conditional continuous mapping theorem and the negligible empirical replacement term give the asserted bootstrap limit. These are the estimated-derivative hypotheses of <span class="citation" data-cites="fang_inference_2018">(<a href="#ref-fang_inference_2018" role="doc-biblioref">Fang and Santos 2018</a>)</span>.</p>
<p>For completeness, a locally Lipschitz map {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} with Hadamard directional derivative, uniformly approximated on compact sets of directions, admits the numerical estimate above. If {% raw %}<span class="math inline">\(\|\widehat\theta-\theta_0\|=O_P(n^{-1/2})\)</span>{% endraw %}, the difference between the numerical quotient at {% raw %}<span class="math inline">\(\widehat\theta\)</span>{% endraw %} and the quotient at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} is at most</p>
{% raw %}<div class="math display">\[
2K\|\widehat\theta-\theta_0\|/t_n=o_P(1).
\]</div>{% endraw %}
<p>The quotient at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} converges compact-uniformly to {% raw %}<span class="math inline">\(D\mu\)</span>{% endraw %}. Local Lipschitz continuity also supplies the required equicontinuity in the direction. The domain must contain the perturbed functions at which the quotients are evaluated. For the integrated formula here, it suffices to extend its definition to bounded coefficient functions on {% raw %}<span class="math inline">\(I\)</span>{% endraw %}; monotonicity of every perturbed quantile curve is not needed to evaluate that formula.</p>
<h3 data-note-section="9" id="30-66-appendix-a-regular-crossing">9. Appendix: a regular crossing</h3>
<p>Suppose {% raw %}<span class="math inline">\(c^*\)</span>{% endraw %} is the unique zero of a continuous nonincreasing {% raw %}<span class="math inline">\(L\)</span>{% endraw %} on a compact interval, lies in its interior, and {% raw %}<span class="math inline">\(L&#x27;(c^*)&lt;0\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\widehat L\)</span>{% endraw %} is uniformly consistent and</p>
{% raw %}<div class="math display">\[
\widehat L(c)=L(c)+n^{-1/2}Z_n(c)+o_P(n^{-1/2})
\]</div>{% endraw %}
<p>uniformly on a fixed neighborhood of {% raw %}<span class="math inline">\(c^*\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} is locally bounded in probability and stochastically equicontinuous at {% raw %}<span class="math inline">\(c^*\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\widehat c^*\xrightarrow{P}c^*\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(\widehat L(\widehat c^*)=o_P(n^{-1/2})\)</span>{% endraw %}; a sufficiently accurate root or crossing interpolation has this property. The nonzero derivative bounds {% raw %}<span class="math inline">\(|L(c)|\)</span>{% endraw %} below by a positive multiple of {% raw %}<span class="math inline">\(|c-c^*|\)</span>{% endraw %} near {% raw %}<span class="math inline">\(c^*\)</span>{% endraw %}. The approximate-root equation first gives {% raw %}<span class="math inline">\(\widehat c^*-c^*=O_P(n^{-1/2})\)</span>{% endraw %}. Taylor expansion and equicontinuity then give</p>
{% raw %}<div class="math display">\[
0=L&#x27;(c^*)(\widehat c^*-c^*)+n^{-1/2}Z_n(c^*)+o_P(n^{-1/2}),
\]</div>{% endraw %}
<p>which yields the stated expansion.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-fang_inference_2018" class="csl-entry" role="listitem">
Fang, Zheng, and Andres Santos. 2018. <span>“Inference on Directionally Differentiable Functions.”</span> <em>The Review of Economic Studies</em>, September. <a href="https://doi.org/10.1093/restud/rdy049">https://doi.org/10.1093/restud/rdy049</a>.
</div>
<div id="ref-masten_assessing_2024" class="csl-entry" role="listitem">
Masten, Matthew A., Alexandre Poirier, and Linqi Zhang. 2024. <span>“Assessing Sensitivity to Unconfoundedness: Estimation and Inference.”</span> <em>Journal of Business &amp; Economic Statistics</em> 42 (1): 1–13. <a href="https://doi.org/10.1080/07350015.2023.2183212">https://doi.org/10.1080/07350015.2023.2183212</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-04-30-conditional-c-dependence-sharp-distribution-and-treatment-effect-bounds %}">Conditional c-Dependence: Sharp Distribution and Treatment-Effect Bounds</a></p></nav>
</div>
