---
layout: "post"
title: "Exposure Mappings and Horvitz–Thompson"
date: "2024-07-13"
tags: ["econometrics", "networks"]
excerpt: "An exposure mapping summarizes which features of the treatment vector matter for a unit's outcome."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/07/13/exposure-mappings-and-general-interference/", "/2024/07/30/estimands-and-horvitzthompson-estimation-under-interference/"]
---

<div class="note-content" markdown="0">

<p>A treatment vector has one coordinate for every unit, but an outcome may depend on only a few features of that vector. An exposure mapping records those features. If the mapping is sufficient for the outcome and each unit has a known, positive probability of the exposure of interest, inverse exposure probabilities yield an unbiased mean estimator. The analysis of <span class="citation" data-cites="aronow_estimating_2017"><a href="#ref-aronow_estimating_2017" role="doc-biblioref">Aronow and Samii (2017)</a></span> also shows why estimating its variance is a harder problem.</p>

<h3 data-note-section="1" id="10-182-the-main-identity">1. The main identity</h3>
<p>Consider a fixed population of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} units. Let {% raw %}<span class="math inline">\(D_i=f(\mathbf Z,\theta_i)\)</span>{% endraw %} be unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %}’s exposure, where {% raw %}<span class="math inline">\(\theta_i\)</span>{% endraw %} contains fixed information such as its network position. Assume assignments producing the same exposure also produce the same fixed potential outcome {% raw %}<span class="math inline">\(y_i(d)\)</span>{% endraw %}, and that the observed outcome satisfies {% raw %}<span class="math inline">\(Y_i=y_i(D_i)\)</span>{% endraw %}. All probabilities, expectations, and variances below refer to the random assignment. For each exposure being compared, require known probabilities {% raw %}<span class="math inline">\(\pi_i(d)=\Pr(D_i=d)&gt;0\)</span>{% endraw %} for every unit in the target population.</p>

<div id="exposure-ht" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. The estimator</p>

{% raw %}<div class="math display">\[
\widehat\mu(d)=\frac1N\sum_i\frac{1\{D_i=d\}Y_i}{\pi_i(d)}
\]</div>{% endraw %}
<p>is unbiased for {% raw %}<span class="math inline">\(\mu(d)=N^{-1}\sum_iy_i(d)\)</span>{% endraw %}. Differences of these estimators are unbiased for the corresponding average exposure effects, provided both exposures have positive probability for every unit in the same target population.</p>

</div>
<p>On the event {% raw %}<span class="math inline">\(D_i=d\)</span>{% endraw %}, consistency allows us to replace {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} by the fixed value {% raw %}<span class="math inline">\(y_i(d)\)</span>{% endraw %}. Taking expectation then cancels the indicator probability with the denominator. The algebra is short because the exposure assumption has already specified which potential outcome is being averaged.</p>

<p>If some units have zero probability of a target exposure, this estimator cannot recover the full-population mean without further assumptions. One option is to restrict the target to units with positive probability of every exposure being compared, adjusting the denominator to that population’s size.</p>

<h3 data-note-section="2" id="10-182-pair-probabilities-determine-the-variance">2. Pair probabilities determine the variance</h3>
<p>Put {% raw %}<span class="math inline">\(\pi_{ij}(d)=\Pr(D_i=d,D_j=d)\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(\pi_{ii}(d)=\pi_i(d)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\mu(d))
=\frac1{N^2}\sum_{i,j}
\frac{\pi_{ij}(d)-\pi_i(d)\pi_j(d)}{\pi_i(d)\pi_j(d)}y_i(d)y_j(d).
\]</div>{% endraw %}
<p>Assignments and exposures have different dependence structures. Even if the {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %} are independent, two {% raw %}<span class="math inline">\(D_i\)</span>{% endraw %} can share the same neighbors’ assignments. Their joint probabilities must therefore be calculated from the mapping.</p>

<p>For an exposure contrast, include the cross-exposure covariance as well. In particular, a single unit cannot simultaneously have two different exposures, so its joint probability for that pair is zero.</p>

<h3 data-note-section="3" id="10-182-zero-pair-probabilities-are-an-identification-issue">3. Zero pair probabilities are an identification issue</h3>
<p>The inverse-probability construction works for a product only if that pair can be observed together. A zero joint probability leaves a variance term that this construction cannot estimate. Without additional restrictions on the potential outcomes, an unbiased variance estimator is generally unavailable in this case.</p>

<p>A conservative correction can bound such products using</p>

{% raw %}<div class="math display">\[
2|ab|\le a^2+b^2,
\]</div>{% endraw %}
<p>The square terms on the right can each be estimated from a marginal exposure event with positive probability. Replacing missing variance contributions by suitable upper bounds gives an estimator whose expectation is at least the true variance. This does not guarantee that the estimate exceeds the true variance in every realized assignment.</p>

<p>For a known design, exposure probabilities can be found by enumerating assignments or approximated by independent simulations. Rare events need enough simulated draws to control the error in their inverse probabilities. Structural zeros should be checked from the design, since simulation alone cannot distinguish zero probability from an event too rare to appear.</p>

<h3 data-note-section="4" id="10-182-if-the-mapping-is-misspecified">4. If the mapping is misspecified</h3>
<p>Without the sufficiency condition, the weighted estimator still averages outcomes over assignments conditional on the reported exposure. That average can depend on the assignment design, so it is no longer the fixed {% raw %}<span class="math inline">\(y_i(d)\)</span>{% endraw %} estimand originally claimed.</p>

<p>A finer mapping can capture additional features of interference, but it need not be sufficient and can create rare exposure cells and unstable weights. The <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">two-stage allocation approach</a> defines effects averaged over a specified distribution of peer assignments.</p>

<h3 data-note-section="5" id="10-182-computing-exposure-probabilities-on-a-small-graph">5. Computing exposure probabilities on a small graph</h3>
<p>Take a three-vertex path {% raw %}<span class="math inline">\(1-2-3\)</span>{% endraw %} with independent Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %} treatment assignment, where {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N=3\)</span>{% endraw %}. For illustration, suppose each outcome depends on treatment assignments only through whether the unit has at least one treated neighbor. Then</p>

{% raw %}<div class="math display">\[
D_1=Z_2,\qquad D_3=Z_2,\qquad
D_2=\mathbf1\{Z_1+Z_3\geq1\}.
\]</div>{% endraw %}
<p>The exposure probabilities are</p>

{% raw %}<div class="math display">\[
\pi_1(1)=\pi_3(1)=p,\qquad
\pi_2(1)=1-(1-p)^2.
\]</div>{% endraw %}
<p>The two leaves always have the same exposure, so {% raw %}<span class="math inline">\(\pi_{13}(1)=p\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(p^2\)</span>{% endraw %}. Their contribution to the two ordered off-diagonal terms in the variance of {% raw %}<span class="math inline">\(\widehat\mu(1)\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
\frac2{N^2}\frac{p-p^2}{p^2}y_1(1)y_3(1)
=\frac{2(1-p)}{N^2p}y_1(1)y_3(1).
\]</div>{% endraw %}
<p>Both leaves use the same middle vertex’s treatment, which explains their perfect exposure dependence. If their outcomes also depend on their own treatment, the exposure label must include it. Otherwise the proposed outcome model is not sufficient, regardless of whether the probabilities have been computed correctly.</p>

<p>For a unit with {% raw %}<span class="math inline">\(k\)</span>{% endraw %} independently assigned neighbors, the probability of no treated neighbor is {% raw %}<span class="math inline">\((1-p)^k\)</span>{% endraw %}. Thus a high-degree unit can have an extremely rare unexposed cell even though its own treatment probability is well away from zero and one. Fine exposure definitions create a precision issue through their design probabilities.</p>

<h3 data-note-section="6" id="10-182-deriving-the-covariance-formula">6. Deriving the covariance formula</h3>
<p>Let {% raw %}<span class="math inline">\(I_i(d)=\mathbf1\{D_i=d\}\)</span>{% endraw %}. Conditional on the fixed potential outcomes, the covariance between two weighted terms is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}\left(\frac{I_i(d)y_i(d)}{\pi_i(d)},
\frac{I_j(d)y_j(d)}{\pi_j(d)}\right)
&amp;=\frac{y_i(d)y_j(d)}{\pi_i(d)\pi_j(d)}
(\mathbb{E}[I_i(d)I_j(d)]-\mathbb{E}I_i(d)\mathbb{E}I_j(d))\\
&amp;=\frac{\pi_{ij}(d)-\pi_i(d)\pi_j(d)}{\pi_i(d)\pi_j(d)}
y_i(d)y_j(d).
\end{aligned}
\]</div>{% endraw %}
<p>Summing and dividing by {% raw %}<span class="math inline">\(N^2\)</span>{% endraw %} gives the result. For two distinct exposures {% raw %}<span class="math inline">\(d,e\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\pi_{ij}(d,e)=\Pr(D_i=d,D_j=e)\)</span>{% endraw %}. The same calculation gives</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(\widehat\mu(d),\widehat\mu(e))
=\frac1{N^2}\sum_{i,j}
\frac{\pi_{ij}(d,e)-\pi_i(d)\pi_j(e)}{\pi_i(d)\pi_j(e)}y_i(d)y_j(e).
\]</div>{% endraw %}
<p>The variance of a contrast is the sum of its two variances minus twice this covariance.</p>

<p>When {% raw %}<span class="math inline">\(\pi_{ij}(d,e)&gt;0\)</span>{% endraw %}, an unbiased estimator of the potential-outcome product is</p>

{% raw %}<div class="math display">\[
\frac{I_i(d)I_j(e)Y_iY_j}{\pi_{ij}(d,e)}.
\]</div>{% endraw %}
<p>Substituting these estimates into the covariance expansion gives the usual inverse-joint-probability construction for observable pairs. The diagonal case with the same exposure reduces to {% raw %}<span class="math inline">\(I_i(d)Y_i^2/\pi_i(d)\)</span>{% endraw %}.</p>

<h3 data-note-section="7" id="10-182-why-some-variance-terms-lack-an-unbiased-estimator">7. Why some variance terms lack an unbiased estimator</h3>
<p>For the same individual and distinct exposures, {% raw %}<span class="math inline">\(I_i(d)I_i(e)=0\)</span>{% endraw %} always, so {% raw %}<span class="math inline">\(\pi_{ii}(d,e)=0\)</span>{% endraw %}. The two potential outcomes are never observed together. Some cross-individual pairs can also be impossible under constrained randomization or the graph mapping.</p>

<p>To obtain a conservative bound, consider an unobservable contribution with magnitude {% raw %}<span class="math inline">\(2|y_i(d)y_j(e)|\)</span>{% endraw %}. Young’s inequality gives</p>

{% raw %}<div class="math display">\[
2|y_i(d)y_j(e)|\leq y_i(d)^2+y_j(e)^2.
\]</div>{% endraw %}
<p>For a missing term {% raw %}<span class="math inline">\(c\,y_i(d)y_j(e)\)</span>{% endraw %}, use the upper bound {% raw %}<span class="math inline">\(\lvert c\rvert\{y_i(d)^2+y_j(e)^2\}/2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(c\)</span>{% endraw %} includes the term’s coefficient in the variance expansion. Estimate each square with its marginal inverse-probability weight. The absolute value of the coefficient makes this an upper bound for either sign. The bound can be loose when the design rules out many exposure pairs.</p>

<p>For the contrast {% raw %}<span class="math inline">\(\widehat\mu(d)-\widehat\mu(e)\)</span>{% endraw %}, the same-unit missing product has an especially useful interpretation. The covariance of the two weighted contributions from unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %} is {% raw %}<span class="math inline">\(-y_i(d)y_i(e)\)</span>{% endraw %}, because the exposure indicators cannot both equal one. Subtracting twice that covariance contributes</p>

{% raw %}<div class="math display">\[
\frac{2}{N^2}y_i(d)y_i(e)
\]</div>{% endraw %}
<p>to the contrast variance. Replacing it by {% raw %}<span class="math inline">\(N^{-2}(y_i(d)^2+y_i(e)^2)\)</span>{% endraw %} overestimates this particular term by</p>

{% raw %}<div class="math display">\[
\frac1{N^2}(y_i(d)-y_i(e))^2.
\]</div>{% endraw %}
<p>The upper bound is valid for positive or negative outcomes because its excess is a square. Feasible marginal-square contributions are {% raw %}<span class="math inline">\(I_i(d)Y_i^2/\pi_i(d)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_i(e)Y_i^2/\pi_i(e)\)</span>{% endraw %}. For impossible pairs involving different units, apply the bound to each term with its own coefficient and exposure labels. In a same-exposure sum over ordered pairs, both {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((j,i)\)</span>{% endraw %} appear; a sum over unordered pairs instead needs a factor of two. Cross-exposure pairs need separate care: {% raw %}<span class="math inline">\(\pi_{ij}(d,e)\)</span>{% endraw %} need not equal {% raw %}<span class="math inline">\(\pi_{ji}(d,e)\)</span>{% endraw %}.</p>

<p>The difference between first and second moments is now explicit. A mean uses one potential outcome at a time; a variance uses products, some of which the design never reveals. The same obstacle arises in an ordinary randomized experiment without interference: a unit’s treated and untreated potential outcomes are never observed together. Interference can also make joint exposures impossible across different people.</p>

<p>A confidence interval based on a normal approximation additionally requires a central limit theorem and a variance estimate that converges to the true variance or a conservative bound at the relevant asymptotic scale. Conservativeness in expectation alone is insufficient. Unbiasedness of {% raw %}<span class="math inline">\(\widehat\mu\)</span>{% endraw %} controls its expectation, but says nothing by itself about the shape of its distribution.</p>

<h3 data-note-section="8" id="10-182-what-the-estimator-targets-under-a-coarser-mapping">8. What the estimator targets under a coarser mapping</h3>
<p>Without exposure sufficiency, let the full potential outcome be {% raw %}<span class="math inline">\(Y_i(\mathbf z)\)</span>{% endraw %}. The expectation of the same weighted estimator is</p>

{% raw %}<div class="math display">\[
\frac1N\sum_i\sum_{\mathbf z:f(\mathbf z,\theta_i)=d}
Y_i(\mathbf z)\frac{\Pr(\mathbf Z=\mathbf z)}{\pi_i(d)}
=\frac1N\sum_i\mathbb{E}[Y_i(\mathbf Z)\mid D_i=d].
\]</div>{% endraw %}
<p>The last expression is a design-specific conditional average. It may change when the assignment law changes, even if the label {% raw %}<span class="math inline">\(d\)</span>{% endraw %} does not. If exposure sufficiency holds over the combined support of the designs being compared, and the relevant exposure probabilities remain positive, these averages reduce to the same fixed exposure potential outcomes.</p>

<p>Simulating assignments from a known design can approximate the required probabilities. For a positive probability {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} estimated from {% raw %}<span class="math inline">\(M\)</span>{% endraw %} independent draws, the relative standard deviation of its frequency is {% raw %}<span class="math inline">\(\sqrt{(1-\pi)/(M\pi)}\)</span>{% endraw %}. Rare exposures require many draws for accurate inverse weights. Replacing exact probabilities with simulated estimates generally loses the exact unbiasedness in Proposition 1. Zero observed frequency is compatible with a small positive probability, while structural impossibility should be established from the design itself.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-aronow_estimating_2017" class="csl-entry" role="listitem">
Aronow, Peter M., and Cyrus Samii. 2017. <span>“Estimating Average Causal Effects Under General Interference, with Application to a Social Network Experiment.”</span> <em>The Annals of Applied Statistics</em> 11 (4): 1912–1947. <a href="https://doi.org/10.1214/16-AOAS1005">https://doi.org/10.1214/16-AOAS1005</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-13-finite-sample-inference-under-interference %}">Finite-Sample Inference under Interference</a> · Next: <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">Ordering-Free Dependence and Resampling</a></p></nav>

</div>
