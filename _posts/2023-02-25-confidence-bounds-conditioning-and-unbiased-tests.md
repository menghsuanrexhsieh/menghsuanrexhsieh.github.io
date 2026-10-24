---
layout: "post"
title: "Confidence Bounds, Conditioning, and Unbiased Tests"
date: "2023-02-25"
tags: ["statistics", "randomization inference"]
excerpt: "We can extend this discussion much further: uniformly most accurate confidence bounds is subsumed in the theory of unbiased confidence sets."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2023/02/25/confidence-bounds-and-uniform-accuracy/", "/2023/03/11/testing-a-normal-mean-invariance-and-conditioning/", "/2023/03/18/unbiased-confidence-sets/"]
---

<div class="note-content" markdown="0">

<p>A confidence set can be constructed by retaining every parameter value whose hypothesis test accepts the observed data. This correspondence transfers optimality questions from confidence bounds to tests. We begin with one-sided bounds, then examine how nuisance parameters change the problem and how conditioning leads to unbiased and permutation tests.</p>

<span id="eq:lower-confidence-bound"></span>

<p>Let {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}. A lower confidence bound {% raw %}<span class="math inline">\(L=L(X)\)</span>{% endraw %} for a real parameter satisfies {% raw %}<span class="math inline">\(P_\theta(L\le\theta)\ge1-\alpha\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %}. We allow extended endpoints when inversion reaches the edge of the parameter space. Randomized procedures can be represented as functions of the observations and an independent uniform variable.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1.</strong> A lower bound is uniformly most accurate if, among all bounds satisfying the coverage constraint, it minimizes {% raw %}<span class="math inline">\(P_\theta(L\le\theta')\)</span>{% endraw %} for every pair {% raw %}<span class="math inline">\(\theta'&lt;\theta\)</span>{% endraw %}. This asks for the smallest probability of including each false value below the truth.</p>
</div>

<div id="result-2" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2.</strong> A uniformly most accurate bound simultaneously minimizes expected losses of the form
</p>
{% raw %}<div class="math display">\[\mathcal L(\theta,b)=\int_{t&lt;\theta}\mathbf1\{b\le t\}\,\nu_\theta(dt),\]</div>{% endraw %}
<p>
where {% raw %}<span class="math inline">\(\nu_\theta\)</span>{% endraw %} is any nonnegative measure, subject to coverage. Conversely, minimizing all these losses implies uniform accuracy, by taking point-mass measures.</p>

<p>Proof. Tonelli gives {% raw %}<span class="math inline">\(E_\theta\mathcal L(\theta,L)=\int_{t&lt;\theta}P_\theta(L\le t)\,\nu_\theta(dt)\)</span>{% endraw %}; every integrand is minimized by the uniformly most accurate bound. The integral-loss representation includes the underestimation loss {% raw %}<span class="math inline">\((\theta-b)_+\)</span>{% endraw %} by taking Lebesgue measure. The loss-minimization conclusion of <a href="#result-2">Lemma 2</a> does not extend to arbitrary losses, and optimality for a single loss does not imply uniform optimality.</p>
</div>

<p>More generally, a measurable random set {% raw %}<span class="math inline">\(S(X)\subseteq\Theta\)</span>{% endraw %} has confidence level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} if {% raw %}<span class="math inline">\(P_\theta(\theta\in S(X))\ge1-\alpha\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. A lower bound gives {% raw %}<span class="math inline">\(S(X)=[L(X),\infty)\cap\Theta\)</span>{% endraw %}.</p>

<span id="prop:testing-prelim-confidence-level-correspondence--a"></span>

<span id="prop:testing-prelim-confidence-level-correspondence--b"></span>

<div id="prop:testing-prelim-confidence-level-correspondence" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3.</strong> Let {% raw %}<span class="math inline">\(A(\theta_0)\)</span>{% endraw %} be a level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} acceptance region for testing {% raw %}<span class="math inline">\(\theta=\theta_0\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(S(x)=\{\theta_0\in\Theta:x\in A(\theta_0)\}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(S\)</span>{% endraw %} has confidence level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. If each test is uniformly most powerful against {% raw %}<span class="math inline">\(K(\theta_0)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(S\)</span>{% endraw %} minimizes {% raw %}<span class="math inline">\(P_\theta(\theta_0\in S(X))\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\theta_0\in\Theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta\in K(\theta_0)\)</span>{% endraw %}.</p>

<p>Proof. The event {% raw %}<span class="math inline">\(\theta_0\in S(X)\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\(X\in A(\theta_0)\)</span>{% endraw %}. Setting the data-generating parameter to {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} proves coverage. Conversely, any competing confidence set {% raw %}<span class="math inline">\(S^*\)</span>{% endraw %} defines a level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test with acceptance event {% raw %}<span class="math inline">\(\theta_0\in S^*(X)\)</span>{% endraw %}. At an alternative {% raw %}<span class="math inline">\(\theta\in K(\theta_0)\)</span>{% endraw %}, UMP optimality therefore gives
</p>
{% raw %}<div class="math display">\[P_\theta(\theta_0\in S^*(X))=P_\theta(X\in A^*(\theta_0))\ge P_\theta(X\in A(\theta_0))=P_\theta(\theta_0\in S(X)).\]</div>{% endraw %}
<p>
The false value is {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, not the true parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, throughout this comparison.</p>
</div>

<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4.</strong> This is test inversion: retain precisely the parameter values whose tests accept the observed sample. The same construction applies to randomized tests by using an auxiliary uniform variable. Confidence coverage concerns repeated samples at each fixed true parameter.</p>
</div>

<span id="lem:uniqueness-in-tests-UMP--a"></span>

<span id="lem:uniqueness-in-tests-UMP--b"></span>

<span id="eq:uniqueness-in-tests-UMP"></span>

<div id="lem:uniqueness-in-tests-UMP" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5.</strong> Here is a convenient version with explicit endpoint conditions. Let {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} be an interval and assume monotone likelihood ratio in {% raw %}<span class="math inline">\(T\)</span>{% endraw %}: for {% raw %}<span class="math inline">\(\theta_1&gt;\theta_0\)</span>{% endraw %}, the density ratio is nondecreasing in {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Suppose the cdf {% raw %}<span class="math inline">\(F_\theta(t)\)</span>{% endraw %} is continuous and strictly increasing in {% raw %}<span class="math inline">\(t\)</span>{% endraw %} on a common support interval, continuous in {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, and strictly decreasing in {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} there. Then the {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %}-quantile {% raw %}<span class="math inline">\(c(\theta)\)</span>{% endraw %} is continuous and strictly increasing. Inverting the tests {% raw %}<span class="math inline">\(T&gt;c(\theta_0)\)</span>{% endraw %} gives a uniformly most accurate lower bound. Whenever a solution exists,
</p>
{% raw %}<div class="math display">\[F_{L(x)}(T(x))=1-\alpha\]</div>{% endraw %}
<p>
uniquely determines it. Outside the range of {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, use the corresponding extended boundary of {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}.</p>

<p>Proof. Neyman–Pearson applied to each {% raw %}<span class="math inline">\(\theta_1&gt;\theta_0\)</span>{% endraw %} shows that an upper-tail test of null size {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} is most powerful; the cutoff depends only on {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, hence is UMP. Strict stochastic ordering implies {% raw %}<span class="math inline">\(c(\theta_1)&gt;c(\theta_0)\)</span>{% endraw %}. For continuity at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, values just below and above {% raw %}<span class="math inline">\(c(\theta)\)</span>{% endraw %} have cdf values strictly below and above {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}; continuity in the parameter brackets all nearby quantiles between them. Thus {% raw %}<span class="math inline">\(\{\theta:T(x)\le c(\theta)\}\)</span>{% endraw %} is an upper interval, with a closed endpoint whenever that endpoint lies in {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. Proposition 3 proves accuracy. Strict monotonicity gives the unique inverse equation. Without strictness or the common-support conditions, one must retain the acceptance sets and use generalized inverses; one cannot simply assert ordinary inverse functions or finite endpoints.</p>
</div>

<h3 data-note-section="1" id="testing-the-mean-of-a-normal-distribution">1. Testing the mean of a normal distribution</h3>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent {% raw %}<span class="math inline">\(\mathcal{N}(\mu,\sigma^2)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\nu=n-1\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[R=\sum_i(X_i-\overline X)^2=\sum_iX_i^2-n\overline X^2,\qquad S^2=R/\nu.\]</div>{% endraw %}
<p>
An orthogonal transformation of the standardized Gaussian vector separates its coordinate in the direction {% raw %}<span class="math inline">\((1,\ldots,1)/\sqrt n\)</span>{% endraw %} from its {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} perpendicular coordinates. These coordinates are independent standard normals. Consequently
</p>
{% raw %}<div class="math display">\[\frac{\sqrt n(\overline X-\mu)}\sigma\sim \mathcal{N}(0,1),\qquad\frac R{\sigma^2}\sim\chi^2_\nu,\qquad\overline X\perp R.\]</div>{% endraw %}
<p>
This establishes the sampling identities directly, rather than deriving them from optimality claims.</p>

<span id="eq:confidence-interval-testing-mean-unknown-variance"></span>

<p>Under {% raw %}<span class="math inline">\(\mu=\mu_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t=\sqrt n(\overline X-\mu_0)/S\)</span>{% endraw %} has a Student {% raw %}<span class="math inline">\(t_\nu\)</span>{% endraw %} law. With {% raw %}<span class="math inline">\(t_{\nu,p}\)</span>{% endraw %} denoting its {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-quantile, the two-sided acceptance region is {% raw %}<span class="math inline">\(|t|\le t_{\nu,1-\alpha/2}\)</span>{% endraw %}; a one-sided upper rejection region is {% raw %}<span class="math inline">\(t&gt;t_{\nu,1-\alpha}\)</span>{% endraw %}.</p>

<p>To justify unbiased optimality, write the normal likelihood in exponential-family form:
</p>
{% raw %}<div class="math display">\[p_{\mu,\sigma}(x)=C(\mu,\sigma)\exp\left\{-\frac1{2\sigma^2}\sum_i x_i^2+\frac\mu{\sigma^2}\sum_i x_i\right\}.\]</div>{% endraw %}
<p>
The natural parameter space {% raw %}<span class="math inline">\(\{(\eta_1,\eta_2):\eta_1\in\mathbb R,\eta_2&lt;0\}\)</span>{% endraw %} is open and convex. The conditional exponential-family UMP-unbiased theorem applies: condition on the nuisance sufficient statistic, require conditional rejection probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at a one-sided boundary, and additionally a zero centered first moment for a two-sided point null. Completeness of the nuisance family turns the unconditional unbiased constraints into these conditional constraints. Conditional likelihood-ratio comparisons then give optimality at each conditioning value and hence after integration.</p>

<p>This optimality result is taken from <a href="https://sites.stat.washington.edu/jaw/COURSES/580s/582/HO/Lehmann_and_Romano-TestingStatisticalHypotheses.pdf">Lehmann and Romano, <em>Testing Statistical Hypotheses</em>, third edition, Theorem 4.4.1, pp. 119–123</a>; the normal-model application is in §5.2, pp. 154–156. The calculations below verify the parameters and conditional regions for this application.</p>

<p>For testing {% raw %}<span class="math inline">\(\sigma\ge\sigma_0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(\sigma&lt;\sigma_0\)</span>{% endraw %}, condition on {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}. The remaining statistic {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is independent of it, so the UMP-unbiased test rejects for
</p>
{% raw %}<div class="math display">\[R/\sigma_0^2&lt;\chi^2_{\nu,\alpha}.\]</div>{% endraw %}
<p>
For {% raw %}<span class="math inline">\(\sigma\le\sigma_0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(\sigma&gt;\sigma_0\)</span>{% endraw %}, reject for {% raw %}<span class="math inline">\(R/\sigma_0^2&gt;\chi^2_{\nu,1-\alpha}\)</span>{% endraw %}. The chi-square scale representation shows that the size is maximized at the null boundary and the power is at least {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} on the respective alternative.</p>

<p>The union null {% raw %}<span class="math inline">\(\sigma\le\sigma_0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\sigma\ge\sigma_1\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(0&lt;\sigma_0&lt;\sigma_1\)</span>{% endraw %}, is a different problem. Its UMP-unbiased rejection region is {% raw %}<span class="math inline">\(C_1&lt;R&lt;C_2\)</span>{% endraw %}, with
</p>
{% raw %}<div class="math display">\[\int_{C_1/\sigma_0^2}^{C_2/\sigma_0^2}f_{\chi^2_\nu}(z)\,dz=\int_{C_1/\sigma_1^2}^{C_2/\sigma_1^2}f_{\chi^2_\nu}(z)\,dz=\alpha.\]</div>{% endraw %}
<p>
These are the two conditional boundary constraints of the same theorem. The denominators are variances, not standard deviations.</p>

<span id="eq:variance-normal-model-acceptance-region"></span>

<p>For the point null {% raw %}<span class="math inline">\(\sigma=\sigma_0\)</span>{% endraw %}, the UMP-unbiased acceptance region is {% raw %}<span class="math inline">\(a&lt;R/\sigma_0^2&lt;b\)</span>{% endraw %}, where
</p>
{% raw %}<div class="math display">\[\int_a^bf_{\chi^2_\nu}(z)\,dz=1-\alpha,\qquad\int_a^bz f_{\chi^2_\nu}(z)\,dz=\nu(1-\alpha).\]</div>{% endraw %}
<p>
The second equation is the zero power-derivative constraint. For example the scale score at the null is proportional to {% raw %}<span class="math inline">\(z-\nu\)</span>{% endraw %}, so it requires {% raw %}<span class="math inline">\(E[(Z-\nu)\mathbf1\{a&lt;Z&lt;b\}]=0\)</span>{% endraw %}. It is not generally the equal-tailed interval. Existence can be seen by sliding an interval carrying probability {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} from its lowest possible position to its highest: its truncated first moment varies continuously from below {% raw %}<span class="math inline">\(\nu(1-\alpha)\)</span>{% endraw %} to above it. The theorem supplies the corresponding optimality.</p>

<p>For mean tests, center the observations at {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(Q=\sum_i(X_i-\mu_0)^2\)</span>{% endraw %}. Under the null, the standardized Gaussian vector has an independent radius and uniform direction on the sphere. Therefore
</p>
{% raw %}<div class="math display">\[U=\frac{\overline X-\mu_0}{\sqrt Q}\]</div>{% endraw %}
<p>
is independent of {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}, is symmetric about zero, and lies in {% raw %}<span class="math inline">\((-1/\sqrt n,1/\sqrt n)\)</span>{% endraw %} almost surely. Given {% raw %}<span class="math inline">\(Q=q\)</span>{% endraw %}, the mean natural parameter {% raw %}<span class="math inline">\(\mu/\sigma^2\)</span>{% endraw %} exponentially tilts the sum of the centered observations. The upper-tail conditional rule has constant null size; the symmetric two-tail rule also has zero conditional first moment by symmetry. The conditional theorem therefore identifies the UMP-unbiased rules. Finally,
</p>
{% raw %}<div class="math display">\[t=\frac{\sqrt{n\nu}\,U}{\sqrt{1-nU^2}},\]</div>{% endraw %}
<p>
which is strictly increasing in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, and whose absolute value increases with {% raw %}<span class="math inline">\(|U|\)</span>{% endraw %}. Thus these conditional rules are exactly the usual one- and two-sided {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-tests.</p>

<span id="eq:t-dist-n-minus-1-df"></span>

<span id="eq:snorm-pdf"></span>

<span id="eq:chi2-pdf"></span>

<span id="eq:TW-XY"></span>

<span id="eq:XY-TW"></span>

<span id="eq:XY-TW-jac"></span>

<span id="eq:f-TW-s2"></span>

<span id="eq:f-T-s1"></span>

<span id="eq:f-T-s2"></span>

<div id="result-6" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6.</strong> Here is the full density calculation, using a single degrees-of-freedom symbol {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(Z\sim \mathcal{N}(0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V\sim\chi^2_\nu\)</span>{% endraw %} be independent, with densities {% raw %}<span class="math inline">\((2\pi)^{-1/2}e^{-z^2/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v^{\nu/2-1}e^{-v/2}/[2^{\nu/2}\Gamma(\nu/2)]\)</span>{% endraw %}, respectively. Set {% raw %}<span class="math inline">\(T=Z\sqrt{\nu/V}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(W=V\)</span>{% endraw %}. The inverse transformation is {% raw %}<span class="math inline">\(Z=T\sqrt{W/\nu}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V=W\)</span>{% endraw %}, with Jacobian matrix
</p>
{% raw %}<div class="math display">\[\begin{pmatrix}\sqrt{W/\nu}&amp;T/(2\sqrt{\nu W})\\0&amp;1\end{pmatrix}\]</div>{% endraw %}
<p>
and determinant {% raw %}<span class="math inline">\(\sqrt{W/\nu}\)</span>{% endraw %}. Therefore
</p>
{% raw %}<div class="math display">\[f_{T,W}(t,w)=\frac{w^{(\nu+1)/2-1}\exp\{-w(1+t^2/\nu)/2\}}{\sqrt{2\pi\nu}\,2^{\nu/2}\Gamma(\nu/2)},\quad w&gt;0.\]</div>{% endraw %}
<p>
Using {% raw %}<span class="math inline">\(\int_0^\infty w^{a-1}e^{-bw}\,dw=\Gamma(a)b^{-a}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(a=(\nu+1)/2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=(1+t^2/\nu)/2\)</span>{% endraw %}, yields
</p>
{% raw %}<div class="math display">\[f_T(t)=\frac{\Gamma((\nu+1)/2)}{\sqrt{\pi\nu}\,\Gamma(\nu/2)}\left(1+\frac{t^2}\nu\right)^{-(\nu+1)/2}.\]</div>{% endraw %}
<p>
The denominator of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is the square root of {% raw %}<span class="math inline">\(V/\nu\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(V/\nu\)</span>{% endraw %} itself. For a noncentral numerator {% raw %}<span class="math inline">\(Z+\delta\)</span>{% endraw %}, the density is instead the exact integral {% raw %}<span class="math inline">\(\int_0^\infty\varphi(t\sqrt{v/\nu}-\delta)\sqrt{v/\nu}\,f_{\chi^2_\nu}(v)\,dv\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is the standard normal density.</p>
</div>

<div id="result-7" class="remark" data-note-number="7" data-note-kind="Remark">
<p><strong>Remark 7.</strong> Inverting the two-sided mean test gives {% raw %}<span class="math inline">\(\overline X\pm t_{\nu,1-\alpha/2}S/\sqrt n\)</span>{% endraw %}. Its expected length is
</p>
{% raw %}<div class="math display">\[\frac{2t_{\nu,1-\alpha/2}\sigma}{\sqrt n}\sqrt{\frac2\nu}\frac{\Gamma((\nu+1)/2)}{\Gamma(\nu/2)},\]</div>{% endraw %}
<p>
since {% raw %}<span class="math inline">\(S=\sigma\sqrt{V/\nu}\)</span>{% endraw %} and the chi-square moment follows from the same gamma integral. Thus expected length is proportional to {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} and decreases at the usual {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} rate. For fixed nonzero mean displacement and fixed {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}, the noncentrality {% raw %}<span class="math inline">\(\sqrt n(\mu-\mu_0)/\sigma\)</span>{% endraw %} grows with sample size. In contrast, at a fixed sample size, allowing arbitrarily large {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} makes that noncentrality approach zero, so no uniform power guarantee above {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} follows without a variance restriction.</p>
</div>

<h3 data-note-section="2" id="unbiased-confidence-sets">2. Unbiased confidence sets</h3>

<span id="eq:unbiased-type-1-error-constraint"></span>

<span id="eq:unbiased-type-2-error-constraint"></span>

<p>With nuisance parameter {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, a usable confidence procedure remains a function of observed data and any auxiliary randomization, not of the unknown {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Its coverage must hold for every nuisance value. For tests of the point hypotheses {% raw %}<span class="math inline">\(\theta=\theta'\)</span>{% endraw %}, unbiased confidence sets satisfy
</p>
{% raw %}<div class="math display">\[P_{\theta,\eta}(\theta\in S(X))\ge1-\alpha,\qquad P_{\theta,\eta}(\theta'\in S(X))\le1-\alpha\quad(\theta'\ne\theta).\]</div>{% endraw %}
<p>
A uniformly most accurate unbiased set minimizes every false-value coverage probability within this class. By the same inversion argument as Proposition 3, UMP-unbiased tests give such sets. Nuisance parameters often prevent unrestricted UMP procedures from existing, but their presence alone does not prove nonexistence.</p>

<p>For the normal variance, inversion of {% raw %}<span class="math inline">\(a&lt;R/\sigma_0^2&lt;b\)</span>{% endraw %} gives the UMA-unbiased interval {% raw %}<span class="math inline">\((R/b,R/a)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}; boundary choices do not affect continuous sampling probabilities.</p>

<div id="lem:unbiased-confidence-interval-constants" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8.</strong> Suppose real densities are positive on a common interval and have monotone likelihood ratio in {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Suppose the UMP-unbiased level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} tests of {% raw %}<span class="math inline">\(\theta=\theta_0\)</span>{% endraw %} have acceptance intervals {% raw %}<span class="math inline">\([C_1(\theta_0),C_2(\theta_0)]\)</span>{% endraw %}, and have power strictly greater than {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at every other parameter. Then both endpoints increase strictly with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Whenever ordinary inverses at {% raw %}<span class="math inline">\(x\)</span>{% endraw %} exist, the inverted interval is
</p>
{% raw %}<div class="math display">\[C_2^{-1}(x)\le\theta\le C_1^{-1}(x).\]</div>{% endraw %}
<p>
Otherwise the precise definition is {% raw %}<span class="math inline">\(\{\theta:C_1(\theta)\le x\le C_2(\theta)\}\)</span>{% endraw %}, with generalized endpoints and the boundary inclusion inherited from these inequalities.</p>

<p>Proof. Take {% raw %}<span class="math inline">\(\theta_0&lt;\theta_1\)</span>{% endraw %}, with tests {% raw %}<span class="math inline">\(\phi_0,\phi_1\)</span>{% endraw %}. Strict unbiasedness gives {% raw %}<span class="math inline">\(E_{\theta_0}(\phi_1-\phi_0)&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E_{\theta_1}(\phi_1-\phi_0)&lt;0\)</span>{% endraw %}. Hence neither acceptance interval contains the other. If the second interval were shifted to the left, {% raw %}<span class="math inline">\(d=\phi_1-\phi_0\)</span>{% endraw %} would be negative on its left excess and positive on the first interval's right excess. Choose a separating point {% raw %}<span class="math inline">\(x_*\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(k=p_{\theta_1}(x_*)/p_{\theta_0}(x_*)\)</span>{% endraw %}. Monotone likelihood ratio gives {% raw %}<span class="math inline">\(d(x)(p_{\theta_1}(x)/p_{\theta_0}(x)-k)\ge0\)</span>{% endraw %}. Integrating implies {% raw %}<span class="math inline">\(E_{\theta_1}d\ge kE_{\theta_0}d\ge0\)</span>{% endraw %}, a contradiction. Thus the second interval must shift to the right, with both endpoints strictly larger. Solving the acceptance inequalities proves the inverse formula. The optimality class here is unbiased tests; unrestricted two-sided UMP tests are not being assumed.</p>
</div>

<span id="sec:permutation-inference"></span>

<p>Permutation inference removes the normal shape assumption. For orientation, in the two-sample normal model with a common variance, the contrast {% raw %}<span class="math inline">\(\overline Y-\overline X\)</span>{% endraw %} divided by its pooled standard error has a {% raw %}<span class="math inline">\(t_{m+n-2}\)</span>{% endraw %} null law and gives the UMP-unbiased one-sided test. Orthogonally separate this contrast, the grand mean, and the within-sample residual coordinates; the conditional exponential-family argument above applies after conditioning on the grand mean and the remaining nuisance quadratic statistic. Under a common nonnormal distribution with positive finite variance and {% raw %}<span class="math inline">\(m/(m+n)\to\lambda\in(0,1)\)</span>{% endraw %}, the ordinary CLT for the two means and consistency of the pooled variance instead give asymptotic normal calibration. This is an asymptotic assertion, not finite-sample exactness.</p>

<p>For exact inference, take independent strata {% raw %}<span class="math inline">\(i=1,\ldots,a\)</span>{% endraw %}, each with {% raw %}<span class="math inline">\(m_i\)</span>{% endraw %} control and {% raw %}<span class="math inline">\(n_i\)</span>{% endraw %} treated observations, {% raw %}<span class="math inline">\(N_i=m_i+n_i\)</span>{% endraw %}. Let their joint density be
</p>
{% raw %}<div class="math display">\[p_\Delta(z)=\prod_{i=1}^a\left\{\prod_{j=1}^{m_i}f_i(x_{ij})\prod_{j=1}^{n_i}f_i(y_{ij}-\Delta)\right\}.\]</div>{% endraw %}
<p>
Thus {% raw %}<span class="math inline">\(\Delta&gt;0\)</span>{% endraw %} shifts treatment outcomes upward. The null {% raw %}<span class="math inline">\(\Delta=0\)</span>{% endraw %} is invariant under all permutations within each stratum. Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be this finite product group, of size {% raw %}<span class="math inline">\(M=\prod_iN_i!\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(T(z)\)</span>{% endraw %} collect the ordered observations within each stratum.</p>

<span id="eq:unbiasedness-permutation-implies"></span>

<p>If a level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test is unbiased for every {% raw %}<span class="math inline">\(\Delta&gt;0\)</span>{% endraw %}, then it has exact null rejection probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every collection of densities. Indeed translations are continuous in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, so the finite-product density {% raw %}<span class="math inline">\(p_\Delta\to p_0\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\Delta\downarrow0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0\le\phi\le1\)</span>{% endraw %}, power is therefore continuous at zero; power at least {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} on the alternative and at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at zero force equality.</p>

<span id="eq:equiv-condition-permutation-exactness"></span>

<span id="eq:unbiasedness-permutation-implies-fundamental"></span>

<div id="prop:permutation-test-property" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9.</strong> For the family of all probability densities continuous almost everywhere, a bounded critical function {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} has {% raw %}<span class="math inline">\(E_0\phi=\alpha\)</span>{% endraw %} for every collection {% raw %}<span class="math inline">\(f_1,\ldots,f_a\)</span>{% endraw %} if and only if
</p>
{% raw %}<div class="math display">\[\frac1M\sum_{g\in G}\phi(gz)=\alpha\quad\text{for Lebesgue-almost every }z.\]</div>{% endraw %}
<p>
Equivalently, {% raw %}<span class="math inline">\(E_0[\phi(Z)\mid T]=\alpha\)</span>{% endraw %} almost surely for every such null distribution. The group sum includes multiplicities; under the density model coordinates are distinct within strata almost surely.</p>

<p>Proof. Null invariance immediately proves sufficiency by integrating the group average. For necessity, define the bounded, separately symmetric function {% raw %}<span class="math inline">\(b(z)=M^{-1}\sum_g\phi(gz)-\alpha\)</span>{% endraw %}. Its integral against {% raw %}<span class="math inline">\(\prod_{i,j}f_i(z_{ij})\)</span>{% endraw %} is zero for every choice of {% raw %}<span class="math inline">\(f_i\)</span>{% endraw %}.</p>

<p>For one stratum of size {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(f=(\sum_{j=1}^N t_j f_j)/(\sum_jt_j)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(t_j&gt;0\)</span>{% endraw %}. Multiplying the zero integral by {% raw %}<span class="math inline">\((\sum_jt_j)^N\)</span>{% endraw %} gives a polynomial identically zero on an open orthant. The coefficient of {% raw %}<span class="math inline">\(t_1\cdots t_N\)</span>{% endraw %} is {% raw %}<span class="math inline">\(N!\int b(z)\prod_j f_j(z_j)\,dz\)</span>{% endraw %}, because symmetry makes all permutations equal. Hence every such mixed integral vanishes. Apply this coefficient argument separately to every stratum. Taking the {% raw %}<span class="math inline">\(f_j\)</span>{% endraw %}'s to be uniform densities on bounded intervals shows that the integral of {% raw %}<span class="math inline">\(b\)</span>{% endraw %} on every bounded coordinate rectangle is zero. These densities are continuous except at their endpoints and belong to the specified family. Uniqueness of the locally finite signed measure with density {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, or Lebesgue differentiation on rectangles, yields {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %} almost everywhere.</p>

<p>Finally, exchangeability makes the conditional distribution given the ordered samples uniform on the within-stratum permutations. Thus the group average is exactly the conditional expectation. The zero group-average argument proves bounded completeness of the within-stratum order statistics.</p>
</div>

<p>For a fixed alternative density {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, conditional probabilities on a permutation set with positive total alternative mass are proportional to {% raw %}<span class="math inline">\(h(gz)\)</span>{% endraw %}. Its conditional power is
</p>
{% raw %}<div class="math display">\[\frac{\sum_g\phi(gz)h(gz)}{\sum_g h(gz)}.\]</div>{% endraw %}
<p>
To maximize overall power among tests exact for every null density, maximize this quantity separately on each set, subject to {% raw %}<span class="math inline">\(\sum_g\phi(gz)=\alpha M\)</span>{% endraw %}. The finite Neyman–Pearson comparison says to assign rejection probability to the largest {% raw %}<span class="math inline">\(h(gz)\)</span>{% endraw %}, randomizing at the cutoff. Permutation sets of zero alternative mass do not affect power and can use any rule satisfying the null constraint.</p>

<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10.</strong> If all the ordered likelihood values differ, reject the largest {% raw %}<span class="math inline">\(k=\lfloor\alpha M\rfloor\)</span>{% endraw %} with probability one and the next with probability {% raw %}<span class="math inline">\(\alpha M-k\)</span>{% endraw %}. With ties, let {% raw %}<span class="math inline">\(a\)</span>{% endraw %} be the number strictly above a boundary value and {% raw %}<span class="math inline">\(b\)</span>{% endraw %} the number equal to it; use boundary probability {% raw %}<span class="math inline">\((\alpha M-a)/b\)</span>{% endraw %}. Each permutation, including repeated statistic values, retains its probability weight. The ranking generally depends on the specified alternative, so this construction by itself does not give a UMP test over all alternative densities.</p>
</div>

<div id="rem:permutation-test-against-normal-alternatives" class="remark" data-note-number="11" data-note-kind="Remark">
<p><strong>Remark 11.</strong> For normal alternatives with stratum means {% raw %}<span class="math inline">\(\mu_i\)</span>{% endraw %}, common variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}, and common positive treatment shift {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, expand the squared residuals. On a permutation set, the sums of all observations and of all their squares in each stratum are fixed, as are the treatment counts. The only varying log-likelihood term is
</p>
{% raw %}<div class="math display">\[\frac\Delta{\sigma^2}\sum_{i=1}^a\sum_{j=1}^{n_i}y_{ij}.\]</div>{% endraw %}
<p>
Thus large treatment sums are optimal against every such fixed positive normal alternative within the class exact for all null densities. One may enumerate the {% raw %}<span class="math inline">\(\prod_i\binom{N_i}{n_i}\)</span>{% endraw %} treatment assignments instead of all {% raw %}<span class="math inline">\(M\)</span>{% endraw %} coordinate permutations, since each assignment occurs the same {% raw %}<span class="math inline">\(\prod_i m_i!n_i!\)</span>{% endraw %} times. Different assignments can still produce tied sums; these must keep their multiplicities.</p>
</div>

<div id="lem:permutation-unbiased-against-alternatives" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12.</strong> Suppose a two-sample test has rejection probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} whenever the distributions agree, and is nondecreasing in every treatment observation with controls fixed. If {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is stochastically larger than {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, meaning {% raw %}<span class="math inline">\(G(t)\le F(t)\)</span>{% endraw %} for every real {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, then its power under {% raw %}<span class="math inline">\((F,G)\)</span>{% endraw %} is at least {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. The reverse ordering gives power at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>

<p>Proof. For independent uniforms {% raw %}<span class="math inline">\(V_j\)</span>{% endraw %}, generalized quantiles satisfy {% raw %}<span class="math inline">\(F^{-1}(V_j)\le G^{-1}(V_j)\)</span>{% endraw %} almost surely. Couple the controls as {% raw %}<span class="math inline">\(F^{-1}(V_1),\ldots,F^{-1}(V_m)\)</span>{% endraw %}, and compare treatment draws {% raw %}<span class="math inline">\(F^{-1}(V_{m+j})\)</span>{% endraw %} with {% raw %}<span class="math inline">\(G^{-1}(V_{m+j})\)</span>{% endraw %}. The test inequality holds pointwise, and taking expectations proves the rejection-probability inequality in <a href="#lem:permutation-unbiased-against-alternatives">Lemma 12</a>. The same proof works separately within independent strata.</p>
</div>

<p>For the treatment-sum permutation test, the required monotonicity includes randomization at ties. Fix the observed assignment {% raw %}<span class="math inline">\(A_0\)</span>{% endraw %}. For any competing assignment {% raw %}<span class="math inline">\(A\)</span>{% endraw %} of the same stratum sizes,
</p>
{% raw %}<div class="math display">\[T_{A_0}(z)-T_A(z)=\sum_{j\in A_0\setminus A}z_j-\sum_{j\in A\setminus A_0}z_j.\]</div>{% endraw %}
<p>
Increasing any observed treatment outcome can only increase this difference. Hence both the number {% raw %}<span class="math inline">\(a\)</span>{% endraw %} of competing statistics strictly greater than the observed one and the number {% raw %}<span class="math inline">\(a+b\)</span>{% endraw %} greater than or equal to it are nonincreasing. With an independent uniform {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, the randomized upper-tail rank is {% raw %}<span class="math inline">\(p=(a+Vb)/M\)</span>{% endraw %}, a convex combination of these two counts divided by {% raw %}<span class="math inline">\(M\)</span>{% endraw %}; it is nonincreasing under the same change. Rejecting for {% raw %}<span class="math inline">\(p\le\alpha\)</span>{% endraw %} is therefore coordinatewise nondecreasing, and its conditional rejection probability equals the boundary rule above. Lemma 12 proves unbiasedness for positive shifts, and more generally for the stated stratumwise stochastic order alternatives. Exact null calibration alone would not prove unbiasedness.</p>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-02-11-the-neymanpearson-lemma-and-unbiased-testing %}">The Neyman–Pearson Lemma and Unbiased Testing</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-03-25-randomization-tests-invariance-ties-and-validity %}">Randomization Tests: Invariance, Ties, and Validity</a></p></nav>

</div>
