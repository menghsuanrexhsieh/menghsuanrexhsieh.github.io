---
layout: "post"
title: "The Gaussian Sequence Model and Pinsker’s Theorem"
date: "2023-07-17"
tags: ["statistics", "nonparametric estimation"]
excerpt: "This note goes over the details of asymptotic efficiency and adaptation arguments in analyzing nonparametric estimation procedures."
note_series: "Nonparametric efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Asympotic Efficiency of Nonparametric Estimators/stats.tex"
redirect_from: ["/2023/02/11/the-gaussian-sequence-model-and-pinskers-theorem/", "/2023/02/11/the-gaussian-sequence-model/", "/2023/03/12/linear-minimax-theorem/", "/2023/04/11/pinskers-theorem/"]
---

<div class="note-content" markdown="0">

<p>The Gaussian sequence model separates an estimation problem into noisy coordinates. Keeping more coordinates reduces approximation bias but adds variance; shrinking the coordinates gives a finer compromise. We solve the linear minimax problem over an ellipsoid and then prove that the resulting risk is asymptotically optimal among all estimators. The Gaussian-prior lower bound requires an explicit estimate of the mass outside the ellipsoid.</p>
<h2 data-note-section="1" id="notations">1. Notations</h2>
<p>Use the real trigonometric orthonormal basis of {% raw %}<span class="math inline">\(L^2[0,1]\)</span>{% endraw %}: {% raw %}<span class="math inline">\(\varphi_1=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varphi_{2m}(t)=\sqrt2\cos(2\pi mt)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varphi_{2m+1}(t)=\sqrt2\sin(2\pi mt)\)</span>{% endraw %}. For an integer {% raw %}<span class="math inline">\(\beta\ge1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L&gt;0\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[Q=L^2/\pi^{2\beta},\qquad a_1=0,\quad a_{2m}=a_{2m+1}=(2m)^\beta,\qquad \Theta(\beta,Q)=\{\theta\in\ell^2:\sum_j a_j^2\theta_j^2\le Q\}.\]</div>{% endraw %}

<p>Define {% raw %}<span class="math inline">\(\widetilde W(\beta,L)=\{f\in L^2[0,1]:(\langle f,\varphi_j\rangle)_j\in\Theta(\beta,Q)\}\)</span>{% endraw %}. This definition, rather than an unspecified convention for Sobolev norms, fixes the parameter class and sharp constant below. The constant coefficient is unrestricted; its estimation contributes only {% raw %}<span class="math inline">\(\varepsilon^2\)</span>{% endraw %} to risk.</p>

<p>Observe {% raw %}<span class="math inline">\(dY(t)=f(t)dt+\varepsilon dW(t)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(f\in L^2[0,1]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %}. The coordinates are</p>

{% raw %}<div class="math display">\[y_j=\int_0^1\varphi_j(t)dY(t)=\theta_j+\varepsilon\xi_j,\qquad \theta_j=\langle f,\varphi_j\rangle.\]</div>{% endraw %}

<p>The Wiener integrals {% raw %}<span class="math inline">\(\xi_j\)</span>{% endraw %} are jointly Gaussian with covariance {% raw %}<span class="math inline">\(\int\varphi_i\varphi_j=\mathbf1\{i=j\}\)</span>{% endraw %}, and hence are independent standard normals. The coordinate sequence contains the same statistical information as the path, up to completion of sigma-fields: expanding {% raw %}<span class="math inline">\(\mathbf1_{[0,t]}\)</span>{% endraw %} in the basis reconstructs {% raw %}<span class="math inline">\(Y(t)\)</span>{% endraw %} in mean square, and a subsequence reconstructs it almost surely for each rational {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Path continuity then gives all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Conversely, the integrals are measurable functions of the path, obtained as limits of deterministic step integrals.</p>

<p>The weighted projection estimator is {% raw %}<span class="math inline">\(\widehat f_\varepsilon=\sum_j\ell_j^*y_j\varphi_j\)</span>{% endraw %}, where</p>
<span id="eq:ell-star"></span><span id="eq:kappa-star"></span>{% raw %}<div class="math display">\[\ell_j^*=(1-\kappa^*a_j)_+,\qquad \kappa^*=\left(\frac{\beta}{(2\beta+1)(\beta+1)Q}\right)^{\beta/(2\beta+1)}\varepsilon^{2\beta/(2\beta+1)}.\tag{1}\]</div>{% endraw %}
<h2 data-note-section="2" id="linear-minimax-theorem">2. Linear Minimax Theorem</h2>
<p>First allow general nonnegative {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(\Theta=\{\theta\in\ell^2:\sum_j a_j^2\theta_j^2\le Q\}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(Q&gt;0\)</span>{% endraw %}. For the diagonal linear estimator {% raw %}<span class="math inline">\(\widehat\theta_j=\lambda_jy_j\)</span>{% endraw %}, Parseval and Tonelli give</p>

{% raw %}<div class="math display">\[R(\lambda,\theta)=\mathbb E_\theta\|\widehat\theta-\theta\|^2=\sum_j\{(1-\lambda_j)^2\theta_j^2+\varepsilon^2\lambda_j^2\}.\]</div>{% endraw %}

<p>The infimum over square-summable deterministic weights defines {% raw %}<span class="math inline">\(R^L=\inf_\lambda\sup_{\theta\in\Theta}R(\lambda,\theta)\)</span>{% endraw %}. Completing the square in each coordinate gives the oracle identity</p>

{% raw %}<div class="math display">\[\inf_\lambda R(\lambda,\theta)=\sum_j\frac{\varepsilon^2\theta_j^2}{\varepsilon^2+\theta_j^2}.\]</div>{% endraw %}

<p>Indeed the minimizer is {% raw %}<span class="math inline">\(\lambda_j=\theta_j^2/(\varepsilon^2+\theta_j^2)\)</span>{% endraw %}; it is square-summable because {% raw %}<span class="math inline">\(\sum_j\lambda_j^2\le\varepsilon^{-2}\sum_j\theta_j^2\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(\kappa&gt;0\)</span>{% endraw %} by</p>
<span id="eq:kappa-soln"></span>{% raw %}<div class="math display">\[\frac{\varepsilon^2}{\kappa}\sum_j a_j(1-\kappa a_j)_+=Q.\tag{2}\]</div>{% endraw %}
<div id="lem:kappa-unique-soln" class="lemma" data-note-kind="Lemma" data-note-number="1">
<p>Lemma 1 (Existence and active coordinates). If {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %} is nondecreasing and tends to infinity, (2) has a unique solution. With</p>

{% raw %}<div class="math display">\[N=\max\{j:\varepsilon^2\sum_{m\le j}a_m(a_j-a_m)&lt;Q\},\]</div>{% endraw %}

<p>it is {% raw %}<span class="math inline">\(\kappa=\varepsilon^2\sum_{m\le N}a_m/(Q+\varepsilon^2\sum_{m\le N}a_m^2)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(a_j&lt;1/\kappa\)</span>{% endraw %} exactly for {% raw %}<span class="math inline">\(j\le N\)</span>{% endraw %}.</p>
</div>
<p>Proof. The left side of (2), viewed as {% raw %}<span class="math inline">\(F(t)=\varepsilon^2\sum_j a_j(1/t-a_j)_+\)</span>{% endraw %}, has finitely many nonzero summands on every compact subinterval of {% raw %}<span class="math inline">\((0,\infty)\)</span>{% endraw %}, so it is continuous. It is strictly decreasing wherever it is positive. A fixed positive {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %} shows {% raw %}<span class="math inline">\(F(t)\to\infty\)</span>{% endraw %} as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(F(t)=0\)</span>{% endraw %} once {% raw %}<span class="math inline">\(t\ge1/\min\{a_j:a_j&gt;0\}\)</span>{% endraw %}. The continuity and monotonicity of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} prove existence and uniqueness of the cutoff parameter in (2).</p>

<p>Let {% raw %}<span class="math inline">\(S_j=\varepsilon^2\sum_{m\le j}a_m(a_j-a_m)\)</span>{% endraw %}. The sequence is nondecreasing and diverges, since any fixed positive {% raw %}<span class="math inline">\(a_m\)</span>{% endraw %} contributes {% raw %}<span class="math inline">\(\varepsilon^2a_m(a_j-a_m)\to\infty\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(S_1=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is well defined and finite. Write {% raw %}<span class="math inline">\(A=\varepsilon^2\sum_{m\le N}a_m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=\varepsilon^2\sum_{m\le N}a_m^2\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(S_N=Aa_N-B&lt;Q\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(S_{N+1}=Aa_{N+1}-B\ge Q\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(Aa_N&lt;Q+B\le Aa_{N+1}\)</span>{% endraw %}, proving the asserted active set for {% raw %}<span class="math inline">\(\kappa=A/(Q+B)\)</span>{% endraw %}. Substitution into (2) finishes the proof. Repeated values of {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %} and coordinates with {% raw %}<span class="math inline">\(a_j=0\)</span>{% endraw %} cause no problem. ◻</p>
<div id="thm:linear-minimax" class="theorem" data-note-kind="Theorem" data-note-number="2">
<p>Theorem 2 (Linear minimax theorem). Suppose there are finitely many zero {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %}, a solution {% raw %}<span class="math inline">\(\kappa&gt;0\)</span>{% endraw %} of (2) exists, and {% raw %}<span class="math inline">\(D^*=\varepsilon^2\sum_j\ell_j&lt;\infty\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\ell_j=(1-\kappa a_j)_+\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[\inf_\lambda\sup_{\theta\in\Theta}R(\lambda,\theta)=\sup_{\theta\in\Theta}\inf_\lambda R(\lambda,\theta)=\sup_{\theta\in\Theta}R(\ell,\theta)=D^*.\]</div>{% endraw %}
</div>
<p>Proof. The elementary minimax inequality has the direction</p>

{% raw %}<div class="math display">\[\sup_\theta\inf_\lambda R(\lambda,\theta)\le\inf_\lambda\sup_\theta R(\lambda,\theta)\le\sup_\theta R(\ell,\theta).\]</div>{% endraw %}

<p>We prove matching bounds on the two ends. Since {% raw %}<span class="math inline">\(0\le\ell_j\le1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_j\ell_j&lt;\infty\)</span>{% endraw %}, these are admissible square-summable weights.</p>
<span id="claim1"></span><p>For the upper bound, {% raw %}<span class="math inline">\(1-\ell_j=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(a_j=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\((1-\ell_j)/a_j\le\kappa\)</span>{% endraw %} otherwise. Hence</p>

{% raw %}<div class="math display">\[R(\ell,\theta)\le\varepsilon^2\sum_j\ell_j^2+Q\kappa^2=\varepsilon^2\sum_j\{\ell_j^2+\kappa a_j\ell_j\}=\varepsilon^2\sum_j\ell_j=D^*.\]</div>{% endraw %}

<p>The middle equality is (2) multiplied by {% raw %}<span class="math inline">\(\kappa^2\)</span>{% endraw %}. In the last equality, either {% raw %}<span class="math inline">\(\ell_j=0\)</span>{% endraw %}, or {% raw %}<span class="math inline">\(\ell_j+\kappa a_j=1\)</span>{% endraw %}.</p>
<span id="claim2"></span><p>For the lower bound, set {% raw %}<span class="math inline">\(v_j^2=\varepsilon^2\ell_j/(\kappa a_j)\)</span>{% endraw %} on positive-weight coordinates {% raw %}<span class="math inline">\(a_j&gt;0\)</span>{% endraw %}. Their weighted squared sum is {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} by (2). To avoid any summability issue, first use these coordinates only on a finite set and set all other positive-weight coordinates to zero. On the finitely many zero-weight coordinates, set {% raw %}<span class="math inline">\(v_j=M\)</span>{% endraw %}. The resulting finite vector lies in {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. Its oracle risk is</p>

{% raw %}<div class="math display">\[\sum_{j:a_j=0}\frac{\varepsilon^2M^2}{\varepsilon^2+M^2}+\varepsilon^2\sum_{j\text{ in the finite positive set}}\ell_j.\]</div>{% endraw %}

<p>Let the finite sets exhaust the positive coordinates and then let {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. Monotone convergence gives {% raw %}<span class="math inline">\(D^*\)</span>{% endraw %}, proving the lower bound. The supremum need not be attained on the unbounded zero-weight coordinates. ◻</p>
<h2 data-note-section="3" id="pinskers-theorem">3. Pinsker’s Theorem</h2>
<div id="thm:pinsker" class="theorem" data-note-kind="Theorem" data-note-number="3">
<p>Theorem 3 (Pinsker). For the trigonometric weights in Section 1, put {% raw %}<span class="math inline">\(r=4\beta/(2\beta+1)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[C^*=[Q(2\beta+1)]^{1/(2\beta+1)}\left(\frac\beta{\beta+1}\right)^{2\beta/(2\beta+1)}.\]</div>{% endraw %}

<p>Then the estimator in (1) satisfies</p>

{% raw %}<div class="math display">\[\lim_{\varepsilon\downarrow0}\varepsilon^{-r}\sup_{f\in\widetilde W(\beta,L)}\mathbb E_f\|\widehat f_\varepsilon-f\|_2^2=\lim_{\varepsilon\downarrow0}\varepsilon^{-r}\inf_{T_\varepsilon}\sup_{f\in\widetilde W(\beta,L)}\mathbb E_f\|T_\varepsilon-f\|_2^2=C^*.\]</div>{% endraw %}

<p>The infimum is over all measurable estimators based on the observed path, with squared {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} loss.</p>
</div>
<p>Proof, upper bound and constant. For a continuous function {% raw %}<span class="math inline">\(g\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, the paired weights satisfy the Riemann-sum relation</p>

{% raw %}<div class="math display">\[2\sum_{m\ge1}g(2m\kappa^{1/\beta})\mathbf1\{2m\kappa^{1/\beta}\le1\}=\kappa^{-1/\beta}\left(\int_0^1g(x)dx+o(1)\right).\]</div>{% endraw %}

<p>The endpoint term can be included or excluded when {% raw %}<span class="math inline">\(g(1)=0\)</span>{% endraw %}, as in all applications below. Equation (2) and {% raw %}<span class="math inline">\(g(x)=x^\beta(1-x^\beta)\)</span>{% endraw %} yield</p>

{% raw %}<div class="math display">\[Q=\varepsilon^2\kappa^{-2-1/\beta}(A+o(1)),\qquad A=\int_0^1x^\beta(1-x^\beta)dx=\frac\beta{(\beta+1)(2\beta+1)}.\]</div>{% endraw %}

<p>Here {% raw %}<span class="math inline">\(\kappa\to0\)</span>{% endraw %}: if it were bounded below, the left side of (2) would tend to zero. Solving gives {% raw %}<span class="math inline">\(\kappa\sim\kappa^*\)</span>{% endraw %}. Likewise</p>

{% raw %}<div class="math display">\[D^*=\varepsilon^2\left[1+\kappa^{-1/\beta}\left(\frac\beta{\beta+1}+o(1)\right)\right]\sim C^*\varepsilon^r.\]</div>{% endraw %}

<p>The constant-coordinate term {% raw %}<span class="math inline">\(\varepsilon^2=o(\varepsilon^r)\)</span>{% endraw %}. For the explicit weights {% raw %}<span class="math inline">\(\ell^*\)</span>{% endraw %}, the squared-bias and variance bound is</p>

{% raw %}<div class="math display">\[\sup_\theta R(\ell^*,\theta)\le Q(\kappa^*)^2+\varepsilon^2\left[1+(\kappa^*)^{-1/\beta}(B+o(1))\right],\quad B=\int_0^1(1-x^\beta)^2dx=2\beta A.\]</div>{% endraw %}

<p>Using {% raw %}<span class="math inline">\(Q=\varepsilon^2(\kappa^*)^{-2-1/\beta}A\)</span>{% endraw %}, its leading coefficient is {% raw %}<span class="math inline">\(A+B=(2\beta+1)A=\beta/(\beta+1)\)</span>{% endraw %}. Thus this upper bound is {% raw %}<span class="math inline">\(C^*\varepsilon^r(1+o(1))\)</span>{% endraw %}.</p>

<p>Scalar Gaussian Bayes calculation. If {% raw %}<span class="math inline">\(x=a+\varepsilon\xi\)</span>{% endraw %}, with independent {% raw %}<span class="math inline">\(a\sim \mathcal{N}(0,s^2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\xi\sim \mathcal{N}(0,1)\)</span>{% endraw %}, completing the square in the joint density gives</p>

{% raw %}<div class="math display">\[a\mid x\sim N\left(\frac{s^2}{s^2+\varepsilon^2}x,\frac{s^2\varepsilon^2}{s^2+\varepsilon^2}\right).\]</div>{% endraw %}

<p>For every estimator {% raw %}<span class="math inline">\(d(x)\)</span>{% endraw %}, conditional orthogonality gives</p>

{% raw %}<div class="math display">\[\mathbb E(d(x)-a)^2=\mathbb E(d(x)-\mathbb E[a\mid x])^2+\mathbb E\operatorname{Var}(a\mid x).\]</div>{% endraw %}

<p>The cross term is zero after conditioning on {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Consequently the posterior mean minimizes Bayes risk, and that risk is {% raw %}<span class="math inline">\(s^2\varepsilon^2/(s^2+\varepsilon^2)\)</span>{% endraw %}.</p>

<p>Finite-dimensional reduction. Let {% raw %}<span class="math inline">\(N=\max\{j:a_j&lt;1/\kappa\}\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(\theta_1=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_j=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j&gt;N\)</span>{% endraw %}, and let</p>

{% raw %}<div class="math display">\[\Theta_N=\{(\theta_2,\ldots,\theta_N):\sum_{j=2}^N a_j^2\theta_j^2\le Q\}.\]</div>{% endraw %}

<p>This is a submodel of the original class. For any {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-valued estimator, first take its coefficients {% raw %}<span class="math inline">\(2,\ldots,N\)</span>{% endraw %}; discarding the other squared errors can only reduce loss. Then project this finite vector orthogonally onto the closed convex ellipsoid {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\Pi(z)\)</span>{% endraw %} is that projection, the minimizing property gives {% raw %}<span class="math inline">\(\langle z-\Pi(z),\theta-\Pi(z)\rangle\le0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\theta\in\Theta_N\)</span>{% endraw %}, and expansion of {% raw %}<span class="math inline">\(\|z-\theta\|^2\)</span>{% endraw %} shows {% raw %}<span class="math inline">\(\|\Pi(z)-\theta\|\le\|z-\theta\|\)</span>{% endraw %}. The projection is continuous and hence measurable. We may therefore restrict the finite problem to estimators taking values in {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %}.</p>

<p>Under this finite submodel, all observed coordinates outside {% raw %}<span class="math inline">\(2,\ldots,N\)</span>{% endraw %} are independent pure noise. Conditioning an estimator on {% raw %}<span class="math inline">\((y_2,\ldots,y_N)\)</span>{% endraw %} averages over a distribution independent of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, so conditional Jensen cannot increase its risk; convexity preserves the constraint {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %}. This also follows directly in the path model: its orthogonal Gaussian residual is independent of these coordinates and parameter-free. Its finite-dimensional likelihood ratio is</p>

{% raw %}<div class="math display">\[\exp\left\{\varepsilon^{-2}\sum_{j=2}^N\theta_jy_j-(2\varepsilon^2)^{-1}\sum_{j=2}^N\theta_j^2\right\}.\]</div>{% endraw %}

<p>Thus no unrestricted path-based estimator can escape the finite Gaussian Bayes lower bound.</p>

<p>Prior and Bayes risk. Fix {% raw %}<span class="math inline">\(0&lt;\delta&lt;1/2\)</span>{% endraw %} and independently draw {% raw %}<span class="math inline">\(\theta_j\sim \mathcal{N}(0,s_j^2)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j=2,\ldots,N\)</span>{% endraw %}, with</p>

{% raw %}<div class="math display">\[v_j^2=\frac{\varepsilon^2(1-\kappa a_j)}{\kappa a_j},\qquad s_j^2=(1-\delta)v_j^2.\]</div>{% endraw %}

<p>Write {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} for this prior. It is not supported entirely on {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %}, so an outside-mass correction is essential. Its full Bayes risk factorizes by coordinates, giving exactly</p>

{% raw %}<div class="math display">\[B^*=\sum_{j=2}^N\frac{\varepsilon^2s_j^2}{\varepsilon^2+s_j^2}\ge(1-\delta)\sum_{j=2}^N\frac{\varepsilon^2v_j^2}{\varepsilon^2+v_j^2}=(1-\delta)(D^*-\varepsilon^2).\]</div>{% endraw %}

<p>For any {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %}-valued estimator {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, its worst-case risk on {% raw %}<span class="math inline">\(\Theta_N\)</span>{% endraw %} is at least its risk integrated over that set against {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} (the restricted mass is at most one). Subtract the integral over its complement from its full integrated risk. Taking infima and using a uniform bound on the complement gives</p>

{% raw %}<div class="math display">\[R_\varepsilon^*\ge B^*-r^*,\qquad r^*=\sup_{d:\ d(y)\in\Theta_N}\int_{\Theta_N^c}\mathbb E_\theta\|d(y)-\theta\|^2\,d\mu(\theta).\]</div>{% endraw %}

<p>Notice that this supremum is over estimators, not over the integration variable {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}.</p>

<p>Controlling the outside contribution. Let {% raw %}<span class="math inline">\(p_\varepsilon=\mu(\Theta_N^c)\)</span>{% endraw %}. Every constrained estimate has squared norm at most {% raw %}<span class="math inline">\(Q/a_2^2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\mathbb E_\mu\|\theta\|^4=3\sum_js_j^4+\sum_{i\ne j}s_i^2s_j^2\le3\left(\sum_js_j^2\right)^2\le3Q^2/a_2^4.\]</div>{% endraw %}

<p>Indeed {% raw %}<span class="math inline">\(\sum_ja_j^2v_j^2=Q\)</span>{% endraw %} by (2), so {% raw %}<span class="math inline">\(\sum_ja_j^2s_j^2=(1-\delta)Q\)</span>{% endraw %}. The inequality {% raw %}<span class="math inline">\(\|d-\theta\|^2\le2\|d\|^2+2\|\theta\|^2\)</span>{% endraw %} and Cauchy–Schwarz therefore imply</p>

{% raw %}<div class="math display">\[r^*\le\frac{2Q}{a_2^2}\{p_\varepsilon+\sqrt{3p_\varepsilon}\}\le\frac{6Q}{a_2^2}\sqrt{p_\varepsilon}.\]</div>{% endraw %}

<p>Put {% raw %}<span class="math inline">\(b_j^2=a_j^2s_j^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S=\sum_jb_j^2=(1-\delta)Q\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(b_{\max}^2=\max_jb_j^2\)</span>{% endraw %}. Under the prior,</p>

{% raw %}<div class="math display">\[p_\varepsilon=P\left\{\sum_{j=2}^Nb_j^2(\xi_j^2-1)&gt;\delta Q\right\}.\]</div>{% endraw %}

<p>Remark 4 below, with {% raw %}<span class="math inline">\(t=\delta/(1-\delta)&lt;1\)</span>{% endraw %}, bounds this by {% raw %}<span class="math inline">\(\exp\{-t^2S/(8b_{\max}^2)\}\)</span>{% endraw %}. For every active coordinate, {% raw %}<span class="math inline">\(u=\kappa a_j\in(0,1)\)</span>{% endraw %}, and hence</p>

{% raw %}<div class="math display">\[b_j^2=(1-\delta)\frac{\varepsilon^2}{\kappa^2}u(1-u)\le\frac{(1-\delta)\varepsilon^2}{4\kappa^2}=O(\varepsilon^{2/(2\beta+1)}).\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, it follows that {% raw %}<span class="math inline">\(p_\varepsilon\le\exp\{-c_\delta\varepsilon^{-2/(2\beta+1)}\}\)</span>{% endraw %}. This decays faster than every power of {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(r^*=o(\varepsilon^r)\)</span>{% endraw %}. We have proved {% raw %}<span class="math inline">\(\liminf\varepsilon^{-r}R_\varepsilon^*\ge(1-\delta)C^*\)</span>{% endraw %}. First take {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, and combine with the upper bound. Since the minimax risk is no larger than the risk of {% raw %}<span class="math inline">\(\widehat f_\varepsilon\)</span>{% endraw %}, both limits in the theorem follow. ◻</p>
<div id="result-4" class="remark" data-note-kind="Remark" data-note-number="4">
<p>Remark 4 (Weighted chi-square tail bound). Let {% raw %}<span class="math inline">\(Z_j=b_j^2(\xi_j^2-1)\)</span>{% endraw %}, with independent standard normal {% raw %}<span class="math inline">\(\xi_j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S=\sum_jb_j^2&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(b_{\max}^2=\max_jb_j^2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;t&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P\{\sum_jZ_j&gt;tS\}\le\exp\{-t^2S/(8b_{\max}^2)\}.\]</div>{% endraw %}

<p>Indeed Gaussian integration gives {% raw %}<span class="math inline">\(\mathbb Ee^{\gamma Z_j}=e^{-\gamma b_j^2}(1-2\gamma b_j^2)^{-1/2}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(0\le u\le1/4\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[-u-\frac12\log(1-2u)=\sum_{k\ge2}\frac{2^{k-1}}k u^k\le\sum_{k\ge2}2^{k-2}u^k=\frac{u^2}{1-2u}\le2u^2.\]</div>{% endraw %}

<p>Thus Markov and independence yield</p>

{% raw %}<div class="math display">\[P\{\sum_jZ_j&gt;x\}\le\exp\{-\gamma x+2\gamma^2\sum_jb_j^4\}\le\exp\{-\gamma x+2\gamma^2b_{\max}^2S\}.\]</div>{% endraw %}

<p>Choose {% raw %}<span class="math inline">\(x=tS\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\gamma=t/(4b_{\max}^2)\)</span>{% endraw %}; then each {% raw %}<span class="math inline">\(\gamma b_j^2&lt;1/4\)</span>{% endraw %}, and substitution gives the asserted exponent. This is why the lower-bound proof fixes {% raw %}<span class="math inline">\(\delta&lt;1/2\)</span>{% endraw %}.</p>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-07-23-steins-identity-shrinkage-and-unbiased-risk-estimation %}">Stein’s Identity, Shrinkage, and Unbiased Risk Estimation</a></p></nav>


</div>
