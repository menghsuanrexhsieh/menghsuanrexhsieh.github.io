---
layout: "post"
title: "Conditional c-Dependence: Sharp Distribution and Treatment-Effect Bounds"
date: "2025-04-30"
tags: ["econometrics", "partial identification"]
excerpt: "Conditional independence sets the probability of treatment equal to the propensity score even after conditioning on a potential outcome."
note_series: "Sensitivity to unconfoundedness"
note_source: "assets/notes/Overleaf Projects (32 items)/Unconfoundedness (Notes)/stats.tex"
redirect_from: ["/2025/02/08/conditional-c-dependence-and-sharp-distribution-bounds/", "/2025/02/08/conditional-partial-independence-setup/", "/2025/02/28/assumptions-for-conditional-c-dependence/", "/2025/03/20/interpreting-the-sensitivity-parameter/", "/2025/04/10/bounds-on-potential-outcome-distributions/", "/2025/04/30/conditional-distribution-bounds-under-c-dependence/", "/2025/04/30/treatment-effect-bounds-under-conditional-c-dependence/", "/2025/05/20/quantile-and-mean-treatment-effect-bounds/", "/2025/06/10/unconditional-distribution-and-quantile-bounds/"]
---

<div class="note-content" markdown="0">

<p>How far can treatment-effect conclusions move if conditional independence is only approximate? Conditional {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-dependence limits the change in treatment probability after conditioning on a potential outcome to {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. <span class="citation" data-cites="masten_identification_2018"><a href="#ref-masten_identification_2018" role="doc-biblioref">Masten and Poirier (2018)</a></span> derive sharp distributional bounds from this single restriction, then pass to quantiles and means.</p>

<h3 data-note-section="1" id="30-0-the-restriction">1. The restriction</h3>
<p>For treatment {% raw %}<span class="math inline">\(X\in\{0,1\}\)</span>{% endraw %}, potential outcome {% raw %}<span class="math inline">\(Y_x\)</span>{% endraw %}, and covariates {% raw %}<span class="math inline">\(W=w\)</span>{% endraw %}, impose</p>

{% raw %}<div class="math display">\[
\sup_y|P(X=1\mid Y_x=y,W=w)-p(w)|\le c,
\qquad p(w)=P(X=1\mid W=w).
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %} this is conditional independence of each potential outcome and treatment. It does not impose independence jointly on the pair {% raw %}<span class="math inline">\((Y_0,Y_1)\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="30-0-a-simpler-distribution-problem">2. A simpler distribution problem</h3>
<p>Fix {% raw %}<span class="math inline">\(w\)</span>{% endraw %} and temporarily suppose the marginal CDF {% raw %}<span class="math inline">\(F\)</span>{% endraw %} of a continuous variable {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is known. For an event {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(p_x\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(a=\max(0,p_x-c)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=\min(1,p_x+c)\)</span>{% endraw %}.</p>

<div id="cdep-cdf" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-dependence, the conditional CDF {% raw %}<span class="math inline">\(H(u)=P(U\le u\mid X=x)\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
\max\left(\frac{aF(u)}{p_x},\,1-\frac{b(1-F(u))}{p_x}\right)
\le H(u)
\]</div>{% endraw %}
<p>and</p>

{% raw %}<div class="math display">\[
H(u)\le
\min\left(\frac{bF(u)}{p_x},\,1-\frac{a(1-F(u))}{p_x}\right).
\]</div>{% endraw %}
<p>The inequalities bound each cutoff. Sharpness requires compatible distributions attaining the envelopes; the construction below addresses that additional requirement, with treatment-group compatibility supplied by the paper.</p>

</div>
<h3 data-note-section="3" id="30-0-derive-both-sides-of-the-cutoff">3. Derive both sides of the cutoff</h3>
<p>Let {% raw %}<span class="math inline">\(q(v)=P(X=x\mid U=v)\)</span>{% endraw %}. Bayes’ rule gives</p>

{% raw %}<div class="math display">\[
p_xH(u)=\int_{v\le u}q(v)\,dF(v).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(a\le q\le b\)</span>{% endraw %}, this integral lies between {% raw %}<span class="math inline">\(aF(u)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(bF(u)\)</span>{% endraw %}. But the same restriction also applies above {% raw %}<span class="math inline">\(u\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
p_x(1-H(u))=\int_{v&gt;u}q(v)\,dF(v)
\in[a(1-F(u)),b(1-F(u))].
\]</div>{% endraw %}
<p>Intersecting the lower-tail and upper-tail restrictions gives the envelopes. The second restriction enforces the marginal treatment probability {% raw %}<span class="math inline">\(p_x\)</span>{% endraw %}; the lower-tail integral alone would not do so.</p>

<p>To maximize selected mass in a lower tail, assign high selection probabilities to low outcomes and low probabilities to high outcomes. The switching point is chosen to preserve the overall treatment probability. Uniform ranks of {% raw %}<span class="math inline">\(U\)</span>{% endraw %} make this construction explicit.</p>

<p>The extremal selection rules can be written explicitly in uniform ranks. Let {% raw %}<span class="math inline">\(V=F(U)\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. To maximize the selected lower-tail mass simultaneously across cutoffs, assign selection probability {% raw %}<span class="math inline">\(b\)</span>{% endraw %} to the lowest fraction {% raw %}<span class="math inline">\(r=(p_x-a)/(b-a)\)</span>{% endraw %} of ranks and {% raw %}<span class="math inline">\(a\)</span>{% endraw %} to the rest. Its average is</p>

{% raw %}<div class="math display">\[
br+a(1-r)=p_x.
\]</div>{% endraw %}
<p>At rank {% raw %}<span class="math inline">\(v\leq r\)</span>{% endraw %}, the selected cdf is {% raw %}<span class="math inline">\(bv/p_x\)</span>{% endraw %}. Above {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, its numerator is {% raw %}<span class="math inline">\(br+a(v-r)=p_x-a(1-v)\)</span>{% endraw %}. Hence this single admissible rule generates the entire upper envelope</p>

{% raw %}<div class="math display">\[
H^{\rm upper}(v)=\min\left(\frac{bv}{p_x},\,1-\frac{a(1-v)}{p_x}\right).
\]</div>{% endraw %}
<p>To get the lower envelope, assign {% raw %}<span class="math inline">\(a\)</span>{% endraw %} below {% raw %}<span class="math inline">\(r&#x27;=(b-p_x)/(b-a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %} above it. The marginal probability is again {% raw %}<span class="math inline">\(p_x\)</span>{% endraw %}, and the same integration produces the maximum of the two lower branches. When {% raw %}<span class="math inline">\(a=b=p_x\)</span>{% endraw %}, the only rule is constant selection and both envelopes equal {% raw %}<span class="math inline">\(v\)</span>{% endraw %}.</p>

<p>One selection rule attains the entire envelope, rather than a different rule attaining each cutoff. That is the distributional sharpness argument. Compatibility between both treatment groups and the potential-outcome marginals requires the paper’s further construction.</p>

<h3 data-note-section="4" id="30-0-check-the-endpoints">4. Check the endpoints</h3>
<p>At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a=b=p_x\)</span>{% endraw %} and both envelopes equal {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Once {% raw %}<span class="math inline">\(a=0,b=1\)</span>{% endraw %}, the bounds reduce to</p>

{% raw %}<div class="math display">\[
\max(0,(F(u)-1)/p_x+1)
\le H(u)\le\min(F(u)/p_x,1),
\]</div>{% endraw %}
<p>These bounds retain only the known marginals. In the treatment-effect application the observed conditional cdf is known and the potential-outcome cdf is unknown, so we now solve the same inequalities in the opposite direction.</p>

<h3 data-note-section="5" id="30-0-inverting-the-restrictions-to-recover-potential-outcomes">5. Inverting the restrictions to recover potential outcomes</h3>
<p>Now let {% raw %}<span class="math inline">\(H(y)=P(Y\leq y\mid X=x,W=w)\)</span>{% endraw %} be the observed cdf and let {% raw %}<span class="math inline">\(F(y)=P(Y_x\leq y\mid W=w)\)</span>{% endraw %} be unknown. The four inequalities are</p>

{% raw %}<div class="math display">\[
aF\leq p_xH\leq bF,
\qquad a(1-F)\leq p_x(1-H)\leq b(1-F).
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, solving each inequality separately gives</p>

{% raw %}<div class="math display">\[
\underline F(y)=\max\left(0,\frac{p_xH(y)}b,
1-\frac{p_x(1-H(y))}a\right),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\overline F(y)=\min\left(1,\frac{p_xH(y)}a,
1-\frac{p_x(1-H(y))}b\right).
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}, omit the terms containing division by {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and use the original inequalities. The remaining bounds are {% raw %}<span class="math inline">\(p_xH/b\leq F\leq1-p_x(1-H)/b\)</span>{% endraw %}. This avoids an undefined expression at precisely the values of {% raw %}<span class="math inline">\(c\)</span>{% endraw %} where the identifying restriction becomes weak.</p>

<p>For example, take {% raw %}<span class="math inline">\(p_x=1/2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c=1/10\)</span>{% endraw %}, and an observed median {% raw %}<span class="math inline">\(y\)</span>{% endraw %} with {% raw %}<span class="math inline">\(H(y)=1/2\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(a=2/5,b=3/5\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\underline F(y)=\max(5/12,3/8)=5/12,
\qquad
\overline F(y)=\min(5/8,7/12)=7/12.
\]</div>{% endraw %}
<p>The observed median need not be a population median of {% raw %}<span class="math inline">\(Y_x\)</span>{% endraw %}. The permitted selection changes its population percentile to anywhere between these endpoints under the maintained model.</p>

<h3 data-note-section="6" id="30-0-from-cdfs-to-quantiles-and-means">6. From cdfs to quantiles and means</h3>
<div id="cdep-treatment-effects" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. Under the paper’s continuity, support, overlap, and integrability conditions, conditional quantile endpoints are</p>

{% raw %}<div class="math display">\[
\underline Q_x^c=(\overline F_x^c)^{-1},
\qquad \overline Q_x^c=(\underline F_x^c)^{-1}.
\]</div>{% endraw %}
<p>The conditional quantile treatment effect is bounded below by {% raw %}<span class="math inline">\(\underline Q_1^c-\overline Q_0^c\)</span>{% endraw %} and above by {% raw %}<span class="math inline">\(\overline Q_1^c-\underline Q_0^c\)</span>{% endraw %}. Integrating the corresponding quantile endpoints over {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} gives conditional mean endpoints; averaging their differences over {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives ATE endpoints. The compatible constructions in the paper establish sharp interiors.</p>

</div>
<p>Cdf order reverses under quantile inversion: if {% raw %}<span class="math inline">\(F_1\leq F_2\)</span>{% endraw %}, the set {% raw %}<span class="math inline">\(\{y:F_1(y)\geq\tau\}\)</span>{% endraw %} begins no earlier than {% raw %}<span class="math inline">\(\{y:F_2(y)\geq\tau\}\)</span>{% endraw %}. A lower bound on a difference then uses the smaller first term and the larger second term.</p>

<p>When {% raw %}<span class="math inline">\(c&lt;\min(p_x,1-p_x)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a=p_x-c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=p_x+c\)</span>{% endraw %}. For the lower quantile, the upper cdf must reach {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. Both branches of its minimum must therefore reach {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, requiring</p>

{% raw %}<div class="math display">\[
H(y)\geq\max\left(\frac{a\tau}{p_x},
1-\frac{b(1-\tau)}{p_x}\right)
=\tau-\frac{c}{p_x}\min(\tau,1-\tau).
\]</div>{% endraw %}
<p>Similarly, inverting the lower cdf gives an upper probability index with a plus sign. Thus</p>

{% raw %}<div class="math display">\[
Q_x^{c,\pm}(\tau\mid w)
=Q_{Y\mid X,W}\left(\tau\pm\frac{c}{p_x}\min(\tau,1-\tau)\mid x,w\right).
\]</div>{% endraw %}
<p>The probability-index change is largest at the median and grows as the treatment group becomes rarer. Once {% raw %}<span class="math inline">\(c\)</span>{% endraw %} leaves the stated range, clipping in {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} changes the branches, so the full inequalities must be inverted again.</p>

<p>For an integrable random variable, the identity {% raw %}<span class="math inline">\(\mathbb{E}Y=\int_0^1Q_Y(u)\,du\)</span>{% endraw %} converts a distributional ordering into a mean ordering. Applying it to each potential outcome and then taking expectations over {% raw %}<span class="math inline">\(W\)</span>{% endraw %} yields the mean-effect bounds. Sharpness requires admissible distributions attaining or approaching the endpoint functions, not just choosing an unrelated scalar bound at each {% raw %}<span class="math inline">\(y\)</span>{% endraw %}. This is why the paper’s compatibility argument matters.</p>

<p>For a scale check, suppose both observed treatment-group distributions are uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_x=1/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(0\leq c&lt;1/2\)</span>{% endraw %}. Their quantile endpoints are {% raw %}<span class="math inline">\(\tau\pm2c\min(\tau,1-\tau)\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[
\int_0^1\min(\tau,1-\tau)\,d\tau=\frac14,
\]</div>{% endraw %}
<p>The potential-outcome mean bounds are therefore {% raw %}<span class="math inline">\(1/2\pm c/2\)</span>{% endraw %}, and opposing endpoints give the ATE interval {% raw %}<span class="math inline">\([-c,c]\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %} the interval collapses to zero. Its linear growth comes from integrating the triangular quantile displacement. Thus the distribution, quantile, and mean bounds all follow from the same restriction on selection.</p>

<h3 data-note-section="7" id="30-0-marginal-quantiles-and-individual-treatment-effects">7. Marginal quantiles and individual treatment effects</h3>
<p>To obtain marginal quantiles, first average conditional cdfs using {% raw %}<span class="math inline">\(F_{Y_x}(y)=\mathbb{E}[F_{Y_x\mid W}(y\mid W)]\)</span>{% endraw %}, then invert. Averaging conditional quantiles reverses these operations and generally gives a different quantity.</p>

<p>For a simple illustration, let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} select two groups with probabilities {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1/4\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} be identically zero in the first and identically ten in the second. The average conditional median is {% raw %}<span class="math inline">\(5/2\)</span>{% endraw %}, while the marginal median is zero. This elementary example concerns the ordering of the operations; smooth approximations give the same discrepancy within continuous-outcome models.</p>

<p>Nor does {% raw %}<span class="math inline">\(Q_{Y_1}(\tau)-Q_{Y_0}(\tau)\)</span>{% endraw %} equal the {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} quantile of {% raw %}<span class="math inline">\(Y_1-Y_0\)</span>{% endraw %}. If both marginals are uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, their quantile difference is zero. Under {% raw %}<span class="math inline">\(Y_1=Y_0\)</span>{% endraw %}, every individual effect is zero; under {% raw %}<span class="math inline">\(Y_1=1-Y_0\)</span>{% endraw %}, individual effects range over {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %}. The marginals are identical in both cases. Separate restrictions on selection into each potential outcome leave this coupling unspecified.</p>

<p>Increasing {% raw %}<span class="math inline">\(c\)</span>{% endraw %} enlarges the set of admissible distributions, so the sharp lower effect bound cannot increase and the upper bound cannot decrease. That nesting is a useful implementation check. The next note develops <a href="{% post_url 2025-10-30-inference-for-sensitivity-bounds-limit-laws-bootstrap-and-breakdown-points %}">sampling uncertainty for these bounds</a>, including the branch changes introduced by their maxima and minima.</p>

<h3 id="30-0-completing-compatibility-in-the-strict-overlap-case">Completing compatibility in the strict-overlap case</h3>
<p>The joint-distribution step is particularly transparent when {% raw %}<span class="math inline">\(0\leq c&lt;\min(p_x,1-p_x)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(0&lt;a\leq b&lt;1\)</span>{% endraw %}. Fix the observed continuous, strictly increasing cdf {% raw %}<span class="math inline">\(H\)</span>{% endraw %} for treatment group {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, and choose either endpoint {% raw %}<span class="math inline">\(F\)</span>{% endraw %} obtained by inverting the restrictions. As a function of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, each endpoint is continuous and piecewise linear, with slope either {% raw %}<span class="math inline">\(p_x/a\)</span>{% endraw %} or {% raw %}<span class="math inline">\(p_x/b\)</span>{% endraw %}. It starts at zero and ends at one. Thus it is an admissible cdf on the same support.</p>
<p>Define the missing-treatment cdf by</p>
{% raw %}<div class="math display">\[
G(y)=\frac{F(y)-p_xH(y)}{1-p_x}.
\]</div>{% endraw %}
<p>On each branch, its slope with respect to {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is {% raw %}<span class="math inline">\((p_x/a-p_x)/(1-p_x)\)</span>{% endraw %} or {% raw %}<span class="math inline">\((p_x/b-p_x)/(1-p_x)\)</span>{% endraw %}, both strictly positive. Its endpoint values are zero and one. Hence {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is also a continuous, strictly increasing cdf, and {% raw %}<span class="math inline">\(F=p_xH+(1-p_x)G\)</span>{% endraw %} is a feasible mixture. The selection probability recovered from these measures is</p>
{% raw %}<div class="math display">\[
P(X=x\mid Y_x=y)=p_x\frac{dH}{dF}(y)\in\{a,b\}
\]</div>{% endraw %}
<p>almost everywhere; at {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %} it equals {% raw %}<span class="math inline">\(p_x\)</span>{% endraw %}. This verifies the selection restriction for the entire distribution, not merely at a chosen cutoff.</p>
<p>Carry out this construction separately for {% raw %}<span class="math inline">\(x=0,1\)</span>{% endraw %}. Draw {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with its observed propensity, then draw the two potential outcomes conditionally independently given {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, using the observed law {% raw %}<span class="math inline">\(H_x\)</span>{% endraw %} when {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %} and the constructed law {% raw %}<span class="math inline">\(G_x\)</span>{% endraw %} otherwise. This single joint distribution reproduces both observed outcome laws and both potential-outcome bounds. In particular, opposing endpoint choices for a treatment-effect bound are compatible in this strict-overlap regime. No restriction here fixes dependence between the potential outcomes beyond their separate selection restrictions.</p>
<p>If {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(b=1\)</span>{% endraw %}, the strict-increase argument can fail and an envelope may be a limiting distribution rather than an admissible endpoint under the source’s full-support conditions. The paper’s approximation construction is needed there; the strict-overlap proof does not establish endpoint attainment in that boundary regime.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-masten_identification_2018" class="csl-entry" role="listitem">
Masten, Matthew A., and Alexandre Poirier. 2018. <span>“Identification of Treatment Effects Under Conditional Partial Independence.”</span> <em>Econometrica</em> 86 (1): 317–51. <a href="https://doi.org/10.3982/ECTA14481">https://doi.org/10.3982/ECTA14481</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2025-10-30-inference-for-sensitivity-bounds-limit-laws-bootstrap-and-breakdown-points %}">Inference for Sensitivity Bounds: Limit Laws, Bootstrap, and Breakdown Points</a></p></nav>

</div>
