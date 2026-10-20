---
layout: "post"
title: "The Neyman–Pearson Lemma and Unbiased Testing"
date: "2023-02-11"
tags: ["statistics", "randomization inference"]
excerpt: "It turns out this problem can be avoided, in theory, by allowing for randomization—as formalized in the Neymann-Pearson lemma."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2023/02/11/the-neymanpearson-lemma/", "/2023/04/22/unbiased-tests-and-asymptotic-efficiency/"]
---

<div class="note-content" markdown="0">

<p>For a simple null and a simple alternative, each possible sample contributes a certain amount of power for a given cost in null rejection probability. Their ratio is the likelihood ratio. The Neyman–Pearson lemma proves that rejecting at the largest ratios is optimal, with randomization used to fill any remaining probability at the boundary. We then consider what changes for composite alternatives, unbiasedness, and worst-case power.</p>

<div id="neymann-pearson-lemma" data-note-section="title"></div>

<span id="eq:critical-function-1"></span>

<span id="eq:critical-function-2"></span>

<p>A randomized test is a measurable function {% raw %}<span class="math inline">\(\phi:\mathcal X\to[0,1]\)</span>{% endraw %}, implemented by rejecting when an independent uniform variable is at most {% raw %}<span class="math inline">\(\phi(X)\)</span>{% endraw %}. Its power is {% raw %}<span class="math inline">\(\beta_\phi(\theta)=E_\theta\phi(X)\)</span>{% endraw %}; {% raw %}<span class="math inline">\(1-\beta_\phi(\theta)\)</span>{% endraw %} is its type-II error probability at an alternative. A level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test satisfies {% raw %}<span class="math inline">\(\sup_{\theta\in\Theta_0}E_\theta\phi\le\alpha\)</span>{% endraw %}. It is most powerful against a specified alternative if it maximizes power there, and uniformly most powerful if it does so simultaneously at every alternative.</p>

<span id="eq:neymann-pearson-tradeoff"></span>

<p>For simple hypotheses {% raw %}<span class="math inline">\(P_0,P_1\)</span>{% endraw %}, the likelihood ratio {% raw %}<span class="math inline">\(p_1/p_0\)</span>{% endraw %} measures power gained per unit of null rejection probability. Randomization permits partial inclusion of a boundary atom. Without randomization, the discrete optimization is a subset-selection problem; a greedy likelihood-ratio cutoff need not solve it exactly.</p>

<span id="lem:neymann-pearson-1"></span>

<span id="lem:neymann-pearson-2"></span>

<span id="lem:neymann-pearson-3"></span>

<span id="eq:n-p-power"></span>

<span id="eq:n-p-test"></span>

<span id="eq:neymann-pearson-unique-test"></span>

<div id="lem:neymann-pearson" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1.</strong> Let {% raw %}<span class="math inline">\(p_0,p_1\)</span>{% endraw %} be densities relative to a common measure, and {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}. There is a finite {% raw %}<span class="math inline">\(k\ge0\)</span>{% endraw %} and a test {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %} of null size exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} satisfying
</p>
{% raw %}<div class="math display">\[\phi^*(x)=1\text{ if }p_1(x)&gt;kp_0(x),\qquad\phi^*(x)=0\text{ if }p_1(x)&lt;kp_0(x).\]</div>{% endraw %}
<p>
Any such test is most powerful at level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Every most powerful test agrees with this rule away from {% raw %}<span class="math inline">\(\{p_1=kp_0\}\)</span>{% endraw %}, almost everywhere. A most powerful test either has size {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} or has power one.</p>

<p>Existence. On {% raw %}<span class="math inline">\(\{p_0&gt;0\}\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(R=p_1/p_0\)</span>{% endraw %}; it is finite {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}-almost surely. Choose a {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %}-quantile {% raw %}<span class="math inline">\(k\)</span>{% endraw %} so that
</p>
{% raw %}<div class="math display">\[P_0(R&gt;k)\le\alpha\le P_0(R\ge k).\]</div>{% endraw %}
<p>
This includes {% raw %}<span class="math inline">\(k=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(b=P_0(R=k)&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\gamma=[\alpha-P_0(R&gt;k)]/b\)</span>{% endraw %}; otherwise the two tail probabilities agree with {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, and take any {% raw %}<span class="math inline">\(\gamma\in[0,1]\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\phi^*=1\)</span>{% endraw %} above the threshold, {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} on the boundary, and zero below it. On {% raw %}<span class="math inline">\(\{p_0=0,p_1&gt;0\}\)</span>{% endraw %}, always reject; this gains power at no null cost. Values where both densities vanish are immaterial. These definitions give exact size. The strict tail {% raw %}<span class="math inline">\(P_0(R&gt;c)\)</span>{% endraw %} is nonincreasing and right-continuous; it is not a cdf.</p>

<p>Sufficiency. For any competitor {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} of size at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, the threshold rule gives the pointwise inequality {% raw %}<span class="math inline">\((\phi^*-\psi)(p_1-kp_0)\ge0\)</span>{% endraw %}, including the boundary where the second factor is zero. Hence
</p>
{% raw %}<div class="math display">\[E_1\phi^*-E_1\psi=\int(\phi^*-\psi)(p_1-kp_0)\,d\mu+k(\alpha-E_0\psi)\ge0.\]</div>{% endraw %}
<p>
Necessity. If {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} is also most powerful, the left side is zero, so both nonnegative terms on the right vanish. A nonnegative integrand with zero integral is zero almost everywhere. On {% raw %}<span class="math inline">\(p_1&gt;kp_0\)</span>{% endraw %} this forces {% raw %}<span class="math inline">\(\psi=1\)</span>{% endraw %}, and on {% raw %}<span class="math inline">\(p_1&lt;kp_0\)</span>{% endraw %} it forces {% raw %}<span class="math inline">\(\psi=0\)</span>{% endraw %}. Finally, if {% raw %}<span class="math inline">\(E_0\psi&lt;\alpha\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E_1\psi&lt;1\)</span>{% endraw %}, the test {% raw %}<span class="math inline">\(\psi_t=\psi+t(1-\psi)\)</span>{% endraw %}, for sufficiently small {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, remains of level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} and has strictly larger power. This contradicts optimality and proves the size-or-unit-power assertion.</p>
</div>

<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> On a positive-mass likelihood-ratio boundary, many allocations can be optimal; only their required null integral matters. A constant boundary probability is a convenient choice. Away from this boundary the rule is unique almost everywhere. If both densities vanish on a set, modifying the test there changes neither size nor power, regardless of its measure under the chosen dominating measure.</p>
</div>

<div id="result-3" class="corollary" data-note-number="3" data-note-kind="Corollary">
<p><strong>Corollary 3.</strong> For {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}, the optimal power is strictly larger than {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(P_0\ne P_1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P_0=P_1\)</span>{% endraw %}, it equals {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>

<p>Proof. Distinct probability measures have a measurable set {% raw %}<span class="math inline">\(A\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P_1(A)&gt;P_0(A)\)</span>{% endraw %}. For sufficiently small {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\psi=\alpha+\varepsilon(\mathbf1_A-P_0(A))\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, has null size {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, and has power {% raw %}<span class="math inline">\(\alpha+\varepsilon(P_1(A)-P_0(A))&gt;\alpha\)</span>{% endraw %}. The optimal power is at least this value.</p>
</div>

<h3 data-note-section="1" id="unbiased-tests">1. Unbiased Tests</h3>

<p>A level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test is unbiased if {% raw %}<span class="math inline">\(E_\theta\phi\ge\alpha\)</span>{% endraw %} at every alternative. The constant test {% raw %}<span class="math inline">\(\phi\equiv\alpha\)</span>{% endraw %} has power {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} everywhere. Therefore a UMP test is unbiased, since it must dominate that competitor at each alternative. UMP-unbiased optimality instead compares only with other unbiased tests and can exist when unrestricted UMP optimality fails.</p>

<h3 data-note-section="2" id="efficiency">2. Efficiency</h3>

<p>Power limits describe local sensitivity when their convergence assumptions hold. Convergence of statistical experiments supports limit-experiment comparisons, but it does not by itself supply convergence for every arbitrarily chosen sequence of statistics or rejection rules. We first give exact Gaussian comparisons and then state the local normal assumptions needed for a sample-size calculation.</p>

<div id="ex:testing-normal-means" class="example" data-note-number="4" data-note-kind="Example">
<p><strong>Example 4.</strong> Let {% raw %}<span class="math inline">\(X\sim N_k(\theta,\Sigma)\)</span>{% endraw %}, with known positive-definite {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} and nonzero vector {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(v=c^\top\Sigma c&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(z_p=\Phi^{-1}(p)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(H_0:c^\top\theta=0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(c^\top\theta&gt;0\)</span>{% endraw %}, the test {% raw %}<span class="math inline">\(c^\top X&gt;z_{1-\alpha}\sqrt v\)</span>{% endraw %} is UMP, with power
</p>
{% raw %}<div class="math display">\[1-\Phi\left(z_{1-\alpha}-\frac{c^\top\theta}{\sqrt v}\right).\]</div>{% endraw %}
<p>
To prove this, fix an alternative {% raw %}<span class="math inline">\(\theta_1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(u=c^\top\theta_1&gt;0\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(\theta_0=\theta_1-(u/v)\Sigma c\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(c^\top\theta_0=0\)</span>{% endraw %} and
</p>
{% raw %}<div class="math display">\[\log\frac{p_{\theta_1}(X)}{p_{\theta_0}(X)}=\frac u v c^\top X-\frac{u^2}{2v}.\]</div>{% endraw %}
<p>
Neyman–Pearson gives the stated cutoff, which has level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at every point of the null hyperplane and does not depend on the chosen alternative. The same rule is level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for the larger null {% raw %}<span class="math inline">\(c^\top\theta\le0\)</span>{% endraw %}.</p>

<p>For the two-sided alternative, no unrestricted UMP test can simultaneously equal the unique most powerful upper-tail and lower-tail tests. The symmetric rule {% raw %}<span class="math inline">\(\phi^*=\mathbf1\{|c^\top X|&gt;z_{1-\alpha/2}\sqrt v\}\)</span>{% endraw %} is, however, UMP unbiased. Here is the additional argument.</p>

<p>Fix any point {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} on the null hyperplane and the submodel {% raw %}<span class="math inline">\(\theta=\theta_0+(u/v)\Sigma c\)</span>{% endraw %}. The scalar {% raw %}<span class="math inline">\(Y=c^\top X/\sqrt v\)</span>{% endraw %} has mean {% raw %}<span class="math inline">\(u/\sqrt v\)</span>{% endraw %} and variance one. The residual {% raw %}<span class="math inline">\(W=X-(\Sigma c/v)c^\top X\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, with a law independent of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. Average any competing test over {% raw %}<span class="math inline">\(W\)</span>{% endraw %} to obtain a scalar test {% raw %}<span class="math inline">\(q(Y)\)</span>{% endraw %}. Global unbiasedness of the original test implies that its submodel power is at least {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for {% raw %}<span class="math inline">\(u\ne0\)</span>{% endraw %}, and at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at zero. Smoothness of the Gaussian power function gives
</p>
{% raw %}<div class="math display">\[E_0q(Y)=\alpha,\qquad E_0[Yq(Y)]=0.\]</div>{% endraw %}
<p>
The second identity follows by differentiating at the minimum at zero; boundedness of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} and Gaussian integrability justify differentiation.</p>

<p>For any nonzero scalar mean {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, the likelihood ratio is {% raw %}<span class="math inline">\(r_\delta(y)=e^{\delta y-\delta^2/2}\)</span>{% endraw %}, a strictly convex function. Let {% raw %}<span class="math inline">\(a+by\)</span>{% endraw %} be the line through its values at {% raw %}<span class="math inline">\(\pm z_{1-\alpha/2}\)</span>{% endraw %}. Convexity makes {% raw %}<span class="math inline">\(r_\delta-a-by\)</span>{% endraw %} negative inside the two cutoffs and positive outside. Therefore {% raw %}<span class="math inline">\((\phi^*-q)(r_\delta-a-by)\ge0\)</span>{% endraw %}. Integration and the two moment constraints yield {% raw %}<span class="math inline">\(E_\delta\phi^*\ge E_\delta q\)</span>{% endraw %}. Comparing with the constant test also proves unbiasedness of {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %}. Each full-model alternative lies on one of the submodels just considered, completing the proof.</p>
</div>

<span id="eq:powerfulnes-condition-1"></span>

<span id="eq:powerfulnes-condition-2"></span>

<p>A maximin test maximizes {% raw %}<span class="math inline">\(\inf_{\theta\in\Theta_1}E_\theta\phi\)</span>{% endraw %} subject to level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\Theta_0\)</span>{% endraw %}. If power is continuous and alternative points approach a null point, a uniform power guarantee {% raw %}<span class="math inline">\(\beta&gt;\alpha\)</span>{% endraw %} over all those alternatives is impossible: take the limit along that sequence. This is a statement about adjoining parameter sets, not the measure-theoretic notion of contiguity.</p>

<div id="result-5" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5.</strong> Suppose the dominated densities {% raw %}<span class="math inline">\(p_\theta(x)\)</span>{% endraw %} are jointly measurable, and let {% raw %}<span class="math inline">\(\zeta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\xi\)</span>{% endraw %} be probability measures on the null and alternative parameter spaces. Form the mixture densities {% raw %}<span class="math inline">\(h=\int p_\theta\,d\zeta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g=\int p_\theta\,d\xi\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %} be a most powerful level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} against {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, with power {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %} is level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at every original null and its minimum original alternative power equals {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, then it is maximin. These mixtures are least favorable: every other mixture pair has optimal simple-testing power at least {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>

<p>Proof. Tonelli permits the mixture integrations. Every original level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} competitor {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} is feasible under {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, so
</p>
{% raw %}<div class="math display">\[\inf_{\theta\in\Theta_1}E_\theta\psi\le\int E_\theta\psi\,d\xi(\theta)=E_g\psi\le B.\]</div>{% endraw %}
<p>
The assumed minimum power of {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %} attains this bound. For any other null mixture {% raw %}<span class="math inline">\(h'\)</span>{% endraw %} and alternative mixture {% raw %}<span class="math inline">\(g'\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\phi^*\)</span>{% endraw %} remains feasible under {% raw %}<span class="math inline">\(h'\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(E_{g'}\phi^*\ge\inf_{\Theta_1}E_\theta\phi^*=B\)</span>{% endraw %}. Thus the optimal simple-testing power for {% raw %}<span class="math inline">\((h',g')\)</span>{% endraw %} is at least {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>

<p>If a competing test is also maximin, both inequalities in the first display must be equalities; it is consequently also most powerful for {% raw %}<span class="math inline">\((h,g)\)</span>{% endraw %}. Simple-test uniqueness gives uniqueness up to {% raw %}<span class="math inline">\((h+g)d\mu\)</span>{% endraw %}-null sets. To conclude equality almost surely under every original model distribution, that mixture measure must dominate the entire model; without this extra condition, mixture-null sets may matter elsewhere.</p>
</div>

<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6.</strong> For {% raw %}<span class="math inline">\(X\sim \mathcal{N}(\mu,1)\)</span>{% endraw %}, test {% raw %}<span class="math inline">\(\mu=0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(|\mu|\ge\varepsilon&gt;0\)</span>{% endraw %}. Mix the two alternatives {% raw %}<span class="math inline">\(\pm\varepsilon\)</span>{% endraw %} with equal weights. Their mixture likelihood ratio is {% raw %}<span class="math inline">\(e^{-\varepsilon^2/2}\cosh(\varepsilon X)\)</span>{% endraw %}, strictly increasing in {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %}. Its most powerful test is therefore {% raw %}<span class="math inline">\(|X|&gt;c\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c=z_{1-\alpha/2}\)</span>{% endraw %}.</p>

<p>To verify the missing maximin condition, its power at {% raw %}<span class="math inline">\(\mu\ge0\)</span>{% endraw %} is {% raw %}<span class="math inline">\(b(\mu)=1-\Phi(c-\mu)+\Phi(-c-\mu)\)</span>{% endraw %}. Its derivative is {% raw %}<span class="math inline">\(\varphi(c-\mu)-\varphi(c+\mu)\ge0\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(|c-\mu|\le c+\mu\)</span>{% endraw %}. Power is symmetric in {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, so its minimum on {% raw %}<span class="math inline">\(|\mu|\ge\varepsilon\)</span>{% endraw %} is attained at {% raw %}<span class="math inline">\(\pm\varepsilon\)</span>{% endraw %} and equals its mixture power. Proposition 5 proves maximin optimality.</p>
</div>

<p>For a sequence of statistics, local power measures the shift in the limiting mean relative to its standard deviation. The following statement makes explicit both the correct centering and the range over which a sample-size conclusion is justified.</p>

<div id="thm:qmd-limiting-power-asymptotic-are" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7.</strong> Assume an i.i.d. model is differentiable in quadratic mean at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with finite Fisher information. Let {% raw %}<span class="math inline">\(m(\theta)\)</span>{% endraw %} have positive right derivative {% raw %}<span class="math inline">\(d=m'_+(\theta_0)&gt;0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}. Suppose that for every sequence {% raw %}<span class="math inline">\(\theta_n\ge\theta_0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sqrt n(\theta_n-\theta_0)=O(1)\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[\sqrt n\{T_n-m(\theta_n)\}\Rightarrow \mathcal{N}(0,\sigma^2)\quad\text{under }P_{\theta_n}^{\otimes n}.\]</div>{% endraw %}
<p>
Reject when {% raw %}<span class="math inline">\(\sqrt n\{T_n-m(\theta_0)\}&gt;\widehat c_n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\widehat c_n\to_{P_{\theta_0}}z_{1-\alpha}\sigma\)</span>{% endraw %}. Then the null rejection probability tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, and for {% raw %}<span class="math inline">\(\sqrt n(\theta_n-\theta_0)\to h\ge0\)</span>{% endraw %}, the limiting power is
</p>
{% raw %}<div class="math display">\[b(h)=1-\Phi\left(z_{1-\alpha}-\frac{hd}\sigma\right).\]</div>{% endraw %}
<p>
For {% raw %}<span class="math inline">\(\alpha&lt;\beta&lt;1\)</span>{% endraw %}, if {% raw %}<span class="math inline">\(\theta_k\downarrow\theta_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(n_k\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sqrt{n_k}(\theta_k-\theta_0)=O(1)\)</span>{% endraw %}, and power tends to {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, then
</p>
{% raw %}<div class="math display">\[n_k\sim\frac{(z_{1-\alpha}-z_{1-\beta})^2\sigma^2}{d^2(\theta_k-\theta_0)^2}.\]</div>{% endraw %}
<p>
The notation {% raw %}<span class="math inline">\(\theta_k\downarrow\theta_0\)</span>{% endraw %} here can be replaced by any approach from above; monotonicity of that parameter sequence is unnecessary.</p>

<p>Proof. QMD gives the local log-likelihood expansion {% raw %}<span class="math inline">\(h\Delta_n-h^2I/2+o_P(1)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\Delta_n\Rightarrow \mathcal{N}(0,I)\)</span>{% endraw %}. The limiting likelihood ratio has expectation one, so Le Cam's first lemma gives contiguity of each convergent local alternative sequence to the null. Thus the critical-value convergence transfers to that sequence. If {% raw %}<span class="math inline">\(I=0\)</span>{% endraw %}, the likelihood ratio limit is one and the same transfer holds. The derivative gives {% raw %}<span class="math inline">\(\sqrt n[m(\theta_n)-m(\theta_0)]\to hd\)</span>{% endraw %}. Therefore the centered normal variable exceeds a threshold tending to {% raw %}<span class="math inline">\(z_{1-\alpha}\sigma-hd\)</span>{% endraw %}; continuity of the normal cdf proves the power formula, including {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}.</p>

<p>For the sample-size statement, put {% raw %}<span class="math inline">\(h_k=\sqrt{n_k}(\theta_k-\theta_0)\)</span>{% endraw %}. Every subsequence has a further subsequence with {% raw %}<span class="math inline">\(h_k\to h\)</span>{% endraw %}, by boundedness. Along it, the just-proved power formula gives {% raw %}<span class="math inline">\(b(h)=\beta\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(b\)</span>{% endraw %} is strictly increasing, its only solution is {% raw %}<span class="math inline">\(h_\beta=(z_{1-\alpha}-z_{1-\beta})\sigma/d&gt;0\)</span>{% endraw %}. Hence every convergent subsequence has the same limit, so {% raw %}<span class="math inline">\(h_k\to h_\beta\)</span>{% endraw %}, and squaring yields the formula. The same proof works for sample sizes indexed by {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, by embedding any increasing subsequence of sample sizes in the sequential hypothesis above.</p>

<p>A useful extension removes the explicit local boundedness if, additionally, the power of {% raw %}<span class="math inline">\(\phi_n\)</span>{% endraw %} is nondecreasing in {% raw %}<span class="math inline">\(n\)</span>{% endraw %} for each fixed alternative and {% raw %}<span class="math inline">\(n_k\to\infty\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(h_-&lt;h_\beta&lt;h_+\)</span>{% endraw %}, and sample sizes {% raw %}<span class="math inline">\(m_k^\pm\sim h_\pm^2/(\theta_k-\theta_0)^2\)</span>{% endraw %}. Their limiting powers bracket {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. Monotonicity then forces {% raw %}<span class="math inline">\(m_k^-&lt;n_k&lt;m_k^+\)</span>{% endraw %} eventually. Let {% raw %}<span class="math inline">\(h_-\uparrow h_\beta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h_+\downarrow h_\beta\)</span>{% endraw %}. This monotonicity assumption is needed for the sample-size comparison.</p>
</div>

<p>The QMD-to-LAN and contiguity steps used here are proved in the <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">local asymptotic normality notes</a> and the <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}">contiguity notes</a>.</p>

<p>Local normality alone cannot justify the sample-size comparison for arbitrary nonlocal sample sizes. For example, in a normal location model let {% raw %}<span class="math inline">\(Z_n=\sqrt n\overline X\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(a_n\to\infty\)</span>{% endraw %}. Use the ordinary normal statistic when {% raw %}<span class="math inline">\(|Z_n|\le a_n\)</span>{% endraw %}; outside that event, use an independent coin of success probability {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} to place the statistic just above or just below the critical value. Every bounded local alternative still has the usual normal limit, because the modification has probability tending to zero there. But along alternatives with {% raw %}<span class="math inline">\(\sqrt n\theta_n\gg a_n\)</span>{% endraw %}, the power tends to {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} regardless of the local sample-size formula. Taking {% raw %}<span class="math inline">\(a_n=n^{1/8}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\theta_n=n^{-1/4}\)</span>{% endraw %}, for example, gives {% raw %}<span class="math inline">\(n\theta_n^2\to\infty\)</span>{% endraw %}. The sample-size comparison therefore requires either the stated restriction or the additional monotonicity assumption; QMD alone is insufficient.</p>

<div id="prop:efficiency-qmd-Tn" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8.</strong> Suppose the model is QMD at an interior point {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, and for every fixed real {% raw %}<span class="math inline">\(h\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[\sqrt nT_n\Rightarrow \mathcal{N}(hm,\sigma^2)\quad\text{under }P_{\theta_0+h/\sqrt n}^{\otimes n},\qquad m&gt;0,\ \sigma&gt;0.\]</div>{% endraw %}
<p>
Then the preceding local-power result applies with {% raw %}<span class="math inline">\(m(\theta)=m(\theta-\theta_0)\)</span>{% endraw %} and a consistent normal critical value. The efficacy is {% raw %}<span class="math inline">\(m/\sigma\)</span>{% endraw %}. For two such tests, the Pitman relative efficiency of the first relative to the second is {% raw %}<span class="math inline">\((m_1/\sigma_1)^2/(m_2/\sigma_2)^2\)</span>{% endraw %}, under the sample-size conditions of Theorem 7.</p>

<p>Proof. One must first extend the fixed-{% raw %}<span class="math inline">\(h\)</span>{% endraw %} assertion to varying bounded local parameters. If {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, QMD yields
</p>
{% raw %}<div class="math display">\[\left\|\sqrt{p_{\theta_0+h_n/\sqrt n}}-\sqrt{p_{\theta_0+h/\sqrt n}}\right\|_2=o(n^{-1/2}).\]</div>{% endraw %}
<p>
Indeed subtract the two QMD expansions: their linear difference is {% raw %}<span class="math inline">\((h_n-h)\dot\ell_{\theta_0}\sqrt{p_{\theta_0}}/(2\sqrt n)\)</span>{% endraw %}, and both remainders are {% raw %}<span class="math inline">\(o(n^{-1/2})\)</span>{% endraw %}. The squared Hellinger distance between product measures is at most {% raw %}<span class="math inline">\(n\)</span>{% endraw %} times that between their one-observation laws, so their total variation distance tends to zero. Thus the fixed-{% raw %}<span class="math inline">\(h\)</span>{% endraw %} limit transfers to {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %}, and subtracting {% raw %}<span class="math inline">\(h_nm\)</span>{% endraw %} centers it. Every bounded sequence has convergent subsequences, proving the sequential centered normal assumption. A critical value {% raw %}<span class="math inline">\(z_{1-\alpha}\widehat\sigma_n\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\widehat\sigma_n\to_{P_{\theta_0}}\sigma\)</span>{% endraw %}, satisfies the remaining assumption. Finally the local power depends on {% raw %}<span class="math inline">\(hm/\sigma\)</span>{% endraw %}; solving for sample size gives the squared ratio above. This efficacy calculation does not, by itself, establish unrestricted optimality among all tests.</p>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Additional reading: <a href="{% post_url 2025-12-16-size-control-for-conditional-stochastic-dominance %}">Size Control for Conditional Stochastic Dominance</a></p></nav>

</div>
