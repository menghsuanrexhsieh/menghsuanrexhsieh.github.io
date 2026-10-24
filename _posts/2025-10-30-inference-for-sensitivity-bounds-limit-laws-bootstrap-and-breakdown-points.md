---
layout: "post"
title: "Inference for Sensitivity Bounds: Limit Laws, Bootstrap, and Breakdown Points"
date: "2025-10-30"
tags: ["econometrics", "partial identification"]
excerpt: "Plug-in estimation of the population sensitivity bounds looks straightforward until an estimated propensity score changes which branch of a minimum or maximum is active."
note_series: "Sensitivity to unconfoundedness"
note_source: "assets/notes/Overleaf Projects (32 items)/Unconfoundedness (Notes)/stats.tex"
redirect_from: ["/2025/06/30/estimating-sensitivity-bounds-and-their-limit-laws/", "/2025/06/30/estimating-sensitivity-bounds-first-steps/", "/2025/07/20/estimating-bound-functions/", "/2025/08/10/limit-theory-for-the-first-step-estimators/", "/2025/08/30/limit-theory-for-cate-bounds/", "/2025/09/19/limit-theory-for-ate-bounds/", "/2025/10/10/limit-theory-for-att-bounds/", "/2025/10/30/bootstrap-confidence-bands-and-breakdown-points/", "/2025/10/30/bootstrap-inference-for-sensitivity-bounds/", "/2025/11/19/inference-on-potential-outcome-means/", "/2025/12/10/pointwise-confidence-sets-for-ate-bounds/", "/2025/12/30/uniform-confidence-bands-over-the-sensitivity-parameter/", "/2026/01/19/inference-on-att-bounds/", "/2026/02/09/inference-on-breakdown-points/", "/2026/03/01/when-standard-inference-applies/", "/2026/03/22/technical-conditions-for-sensitivity-inference/"]
---

<div class="note-content" markdown="0">

<p>The <a href="{% post_url 2025-04-30-conditional-c-dependence-sharp-distribution-and-treatment-effect-bounds %}">population sensitivity bounds</a> contain minima and maxima. If two branches agree in the population, sampling noise determines which branch the plug-in estimate selects. The limit can therefore be non-Gaussian even when the inputs have Gaussian limits. <span class="citation" data-cites="masten_assessing_2024"><a href="#ref-masten_assessing_2024" role="doc-biblioref">Masten, Poirier, and Zhang (2024)</a></span> treat this problem with directional derivatives.</p>

<h3 data-note-section="1" id="30-66-the-estimators-and-their-limits">1. The estimators and their limits</h3>
<p>Estimate the propensity score by a correctly specified parametric model and the conditional quantile function by the paper’s quantile-regression specification. Evaluate the bound formulas at those estimates and integrate to obtain mean-effect bounds.</p>

<div id="sensitivity-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s sampling, specification, smoothness, overlap/moment, and nonsingularity conditions, the estimated CATE, ATE, and ATT bound endpoints have root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} limiting distributions. The limits are directional derivatives of the bound maps applied to the joint first-stage Gaussian limit, together with the empirical averaging term for marginal effects. They need not be Gaussian.</p>

</div>
<p>The implementation trims probability indices to {% raw %}<span class="math inline">\([\varepsilon,1-\varepsilon]\)</span>{% endraw %}. With fixed trimming, the limit is centered at the corresponding trimmed population bound. Claiming a CLT centered at the untrimmed bound would require an additional argument controlling trimming bias.</p>

<h3 data-note-section="2" id="30-66-differentiate-the-active-branch">2. Differentiate the active branch</h3>
<p>For {% raw %}<span class="math inline">\(h(a,b)=\min(a,b)\)</span>{% endraw %}, the directional derivative in direction {% raw %}<span class="math inline">\((u,v)\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
h&#x27;_{a,b}(u,v)=
\begin{cases}
u,&amp;a&lt;b,\\
v,&amp;b&lt;a,\\
\min(u,v),&amp;a=b.
\end{cases}
\]</div>{% endraw %}
<p>Away from a tie, a small perturbation leaves the active branch unchanged. At a tie, the perturbation selects it. Thus a jointly Gaussian direction {% raw %}<span class="math inline">\((u,v)\)</span>{% endraw %} can yield the non-Gaussian value {% raw %}<span class="math inline">\(\min(u,v)\)</span>{% endraw %}.</p>

<p>The quantile bounds combine branch selection with smooth changes in propensities and quantile-regression coefficients. The directional chain rule follows each of these changes through to the endpoint.</p>

<h3 data-note-section="3" id="30-66-averaging-adds-another-source-of-noise">3. Averaging adds another source of noise</h3>
<p>For an ATE endpoint of the form {% raw %}<span class="math inline">\(\theta=P\Gamma(W,\eta)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} denotes nuisance functions, write</p>

{% raw %}<div class="math display">\[
\widehat\theta-\theta
=(P_n-P)\Gamma(W,\eta)
+P(\Gamma(W,\widehat\eta)-\Gamma(W,\eta))
+(P_n-P)(\Gamma(W,\widehat\eta)-\Gamma(W,\eta)).
\]</div>{% endraw %}
<p>Covariate averaging produces the first term; nuisance estimation produces the second. The third couples the two and must be negligible under the empirical-process and smoothness conditions. Omitting covariate sampling variation would drop a first-order term.</p>

<p>ATT adds the uncertainty from treated-outcome means and treatment probabilities. Those quantities must be included in the same joint expansion because they are estimated from the same observations.</p>

<p>The population interval describes the allowed departure from independence. Sampling uncertainty concerns its estimated endpoints. The derivative of the endpoint map determines how first-stage uncertainty enters the latter calculation.</p>

<h3 data-note-section="4" id="30-66-a-derivative-calculation-inside-a-quantile-bound">4. A derivative calculation inside a quantile bound</h3>
<p>In the unclipped region, write the shifted probability index as</p>

{% raw %}<div class="math display">\[
u_\pm(p,\tau)=\tau\pm\frac{c}{p}m(\tau),
\qquad m(\tau)=\min(\tau,1-\tau).
\]</div>{% endraw %}
<p>For a propensity perturbation {% raw %}<span class="math inline">\(p+t h_p\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
u_\pm(p+t h_p,\tau)-u_\pm(p,\tau)
=\mp t\frac{cm(\tau)}{p^2}h_p+o(t).
\]</div>{% endraw %}
<p>If the estimated conditional quantile function has directional fluctuation {% raw %}<span class="math inline">\(h_Q(u)\)</span>{% endraw %} and derivative {% raw %}<span class="math inline">\(Q&#x27;(u)\)</span>{% endraw %} in its probability argument, the quantile endpoint fluctuation is</p>

{% raw %}<div class="math display">\[
h_Q(u_\pm)\mp Q&#x27;(u_\pm)\frac{cm(\tau)}{p^2}h_p.
\]</div>{% endraw %}
<p>There are two effects: the quantile function itself is estimated, and the estimated propensity changes where it is evaluated. Under a positive conditional density, {% raw %}<span class="math inline">\(Q&#x27;(u)=1/f_Y(Q(u))\)</span>{% endraw %}, so a low density amplifies uncertainty in the probability index. Omitting the second term would treat the estimated selection correction as known.</p>

<p>Clipping the index to {% raw %}<span class="math inline">\([\varepsilon,1-\varepsilon]\)</span>{% endraw %} adds another branch calculation. Below {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} the derivative is zero; above it the derivative is the incoming perturbation; exactly at it the lower-clipping derivative is the positive part of that perturbation. The upper boundary gives the corresponding minimum with zero. These operations explain why a Gaussian first-stage limit need not produce a Gaussian endpoint limit.</p>

<h3 data-note-section="5" id="30-66-a-direct-demonstration-of-ordinary-bootstrap-failure">5. A direct demonstration of ordinary bootstrap failure</h3>
<p>Take {% raw %}<span class="math inline">\(h(\theta)=\min(\theta_1,\theta_2)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta=(0,0)\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(\sqrt n\widehat\theta\Rightarrow(Z_1,Z_2)\)</span>{% endraw %} with independent standard normal coordinates. The target limit is {% raw %}<span class="math inline">\(\min(Z_1,Z_2)\)</span>{% endraw %}, whose cdf at zero is {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %}.</p>

<p>An ordinary bootstrap with independent normal limiting increments instead produces, conditionally on {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, the limit</p>

{% raw %}<div class="math display">\[
\min(Z_1+Z_1^*,Z_2+Z_2^*)-\min(Z_1,Z_2).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(Z_1\leq Z_2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d=Z_2-Z_1\)</span>{% endraw %}, its conditional cdf at zero is</p>

{% raw %}<div class="math display">\[
1-\mathbb P(Z_1^*&gt;0,Z_2^*&gt;-d)
=1-\frac{1}{2}\Phi(d).
\]</div>{% endraw %}
<p>This equals {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %} only at {% raw %}<span class="math inline">\(d=0\)</span>{% endraw %} and approaches {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} for a large gap. The estimated root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} gap has a nondegenerate random limit, so the conditional bootstrap cdf does not approach the desired fixed cdf. This is the failure mechanism studied in the directional-delta-method theory <span class="citation" data-cites="fang_inference_2018">(<a href="#ref-fang_inference_2018" role="doc-biblioref">Fang and Santos 2018</a>)</span>.</p>

<p>The same minimum also changes first-order centering. At the tie,</p>

{% raw %}<div class="math display">\[
\min(Z_1,Z_2)=\frac{Z_1+Z_2-|Z_1-Z_2|}{2}.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(Z_1-Z_2\sim \mathcal{N}(0,2)\)</span>{% endraw %} and a centered normal with standard deviation {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} has mean absolute value {% raw %}<span class="math inline">\(\sigma\sqrt{2/\pi}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}\min(Z_1,Z_2)=-\frac1{\sqrt\pi}.
\]</div>{% endraw %}
<p>Unbiased first-stage coordinates can thus produce an endpoint whose root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} limit has a nonzero mean. This is not an omitted smooth Taylor term: choosing the smaller noisy branch creates an effect at the leading stochastic order. Likewise, a lower-clipping derivative {% raw %}<span class="math inline">\(h\mapsto\max(h,0)\)</span>{% endraw %} produces an atom at zero when {% raw %}<span class="math inline">\(h\)</span>{% endraw %} has a continuous symmetric distribution.</p>

<p>The numerical derivative’s tolerance separates population ties from sampling noise. If {% raw %}<span class="math inline">\(t_n=n^{-\gamma}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(0&lt;\gamma&lt;1/2\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(t_n\to0\)</span>{% endraw %} but {% raw %}<span class="math inline">\(n^{-1/2}/t_n\to0\)</span>{% endraw %}. A fixed branch gap is eventually much larger than {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %}; a root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} estimated gap at a true tie is much smaller. Choosing {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %} of the same order as {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} would retain the random gap in the limiting derivative calculation and reproduce the bootstrap problem.</p>

<p>The derivative calculation retains all branches tied at the population value. Selecting only the branch with the smaller estimated value would preserve sampling noise in the limiting derivative and reproduce the bootstrap failure. The full expansion also retains covariance with empirical averaging.</p>

<h3 data-note-section="6" id="30-66-estimate-the-directional-derivative-before-applying-it">6. Estimate the directional derivative before applying it</h3>
<div id="sensitivity-derivative-bootstrap" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Under the paper’s estimation and derivative-approximation conditions, bootstrapping the joint first-stage fluctuation and applying a consistent estimate of the directional derivative consistently estimates the endpoint limit law. For fixed {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, the ordinary bootstrap for ATE endpoints is also valid under the additional condition {% raw %}<span class="math inline">\(\mathbb{P}\{p(W)\in\{c,1-c\}\}=0\)</span>{% endraw %}. The corresponding ATT result uses {% raw %}<span class="math inline">\(\mathbb{P}\{p(W)=c\}=0\)</span>{% endraw %} and its additional moment conditions.</p>

</div>
<p>Use a tolerance {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(t_n\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt n\,t_n\to\infty\)</span>{% endraw %}. A population tie creates an estimated gap of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}, smaller than the tolerance with high probability; a fixed nonzero population gap eventually exceeds it. This distinguishes tied branches from separated ones without treating the sample winner as known.</p>

<p>For the minimum example, a numerical derivative is</p>

{% raw %}<div class="math display">\[
\frac{h(\widehat\theta+t_n Z^*)-h(\widehat\theta)}{t_n}.
\]</div>{% endraw %}
<p>At the true tie, {% raw %}<span class="math inline">\(\widehat\theta/t_n=o_p(1)\)</span>{% endraw %}. Positive homogeneity of the minimum then makes this expression approach {% raw %}<span class="math inline">\(\min(Z_1^*,Z_2^*)\)</span>{% endraw %}, the correct limit. For the full sensitivity functional, the same idea requires directional differentiability in the relevant function space and uniform control of the numerical approximation. The step-size restriction alone is not a complete proof.</p>

<p>For an ATE endpoint, bootstrap covariate averaging jointly with first-stage estimation, since both use the same observations. Independent noise would discard their covariance. The ATT expansion includes treated means and propensity normalization in this joint calculation as well.</p>

<h3 data-note-section="7" id="30-66-confidence-bands-and-breakdown-points">7. Confidence bands and breakdown points</h3>
<p>Let {% raw %}<span class="math inline">\(L(c)\)</span>{% endraw %} be the lower ATE endpoint and define the robustness threshold for a positive-effect claim by</p>

{% raw %}<div class="math display">\[
c^*\triangleq\sup\{c:L(c)&gt;0\}.
\]</div>{% endraw %}
<p>A simultaneous lower confidence band {% raw %}<span class="math inline">\(\ell(c)\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\ell(c)\leq L(c)\)</span>{% endraw %} throughout the specified range with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. On that event,</p>

{% raw %}<div class="math display">\[
\{c:\ell(c)&gt;0\}\subseteq\{c:L(c)&gt;0\},
\]</div>{% endraw %}
<p>Taking suprema gives a conservative certified threshold. If the first set is empty, no positive range is certified. No derivative at the crossing is needed for this argument.</p>

<p>A band can be calibrated from the bootstrap supremum of a properly standardized endpoint process, provided process-level convergence and bootstrap validity hold over the whole range. Pointwise critical values at several chosen {% raw %}<span class="math inline">\(c\)</span>{% endraw %} values do not automatically provide this guarantee.</p>

<p>For comparison, a regular crossing with {% raw %}<span class="math inline">\(L(c^*)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L&#x27;(c^*)&lt;0\)</span>{% endraw %} permits a root expansion</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat c^*-c^*)
\approx-\frac{\sqrt n(\widehat L(c^*)-L(c^*))}{L&#x27;(c^*)},
\]</div>{% endraw %}
<p>This expansion requires local uniform control and a unique regular crossing. At a flat crossing, a shape such as {% raw %}<span class="math inline">\(L(c)=-(c-c^*)^3\)</span>{% endraw %} converts bound error of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} into crossing error of order {% raw %}<span class="math inline">\(n^{-1/6}\)</span>{% endraw %}. Inverting a simultaneous band avoids assuming a regular normal limit for every such threshold.</p>

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
