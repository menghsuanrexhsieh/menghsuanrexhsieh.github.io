---
layout: "post"
title: "Finite-Sample Inference under Interference"
date: "2024-03-13"
tags: ["econometrics", "networks"]
excerpt: "Inference under interference can proceed without estimating every cross-potential-outcome covariance."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/06/10/finite-sample-inference-under-interference/"]
---

<div class="note-content" markdown="0">

<p>Under interference, the variance of an estimator can involve outcomes that are never observed together. One way to obtain a confidence bound is to avoid estimating that variance and use known outcome bounds instead. A second question is how to identify a policy mean from observational assignments. <span class="citation" data-cites="tchetgen-tchetgen_causal_2012">(<a href="#ref-tchetgen-tchetgen_causal_2012" role="doc-biblioref">Tchetgen-Tchetgen and VanderWeele 2012</a>)</span> addresses both questions through the assignment design: concentration gives conservative finite-sample bounds, while joint inverse-probability weights identify allocation-averaged outcomes under additional assumptions.</p>

<h3 data-note-section="1" id="10-141-a-finite-sample-bound">1. A finite-sample bound</h3>
<p>Start with independent groups and bounded group contributions. This case makes the concentration argument transparent. The paper also treats the two-stage design without assuming stratified interference.</p>

<div id="interference-hoeffding" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose {% raw %}<span class="math inline">\(V_g\)</span>{% endraw %} are independent unbiased group contributions to a target {% raw %}<span class="math inline">\(G^{-1}\sum_g\mathbb{E}[V_g]\)</span>{% endraw %}, with known bounds {% raw %}<span class="math inline">\(a_g\le V_g\le b_g\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\Pr\left(\left|\frac1G\sum_g(V_g-\mathbb{E} V_g)\right|&gt;t\right)
\le2\exp\left(-\frac{2G^2t^2}{\sum_g(b_g-a_g)^2}\right).
\]</div>{% endraw %}
</div>
<p>Solving for {% raw %}<span class="math inline">\(t\)</span>{% endraw %} gives a confidence radius {% raw %}<span class="math inline">\(\sqrt{\log(2/\alpha)\sum_g(b_g-a_g)^2/(2G^2)}\)</span>{% endraw %}. Within-group interference is unrestricted because it is already contained in each bounded contribution.</p>

<p>The independence assumption is specific to this example. Selecting a fixed number of groups creates dependence between their assignment indicators, so that design requires the paper’s corresponding finite-sample argument.</p>

<h3 data-note-section="2" id="10-141-weight-the-whole-allocation">2. Weight the whole allocation</h3>
<p>Let {% raw %}<span class="math inline">\(f_g(\mathbf a_g\mid L_g)\)</span>{% endraw %} be the observed joint assignment probability, and let {% raw %}<span class="math inline">\(\pi_s(\mathbf a_{g,-j})\)</span>{% endraw %} be a target distribution for peers’ assignments. Under consistency, conditional exchangeability of the entire allocation vector given {% raw %}<span class="math inline">\(L_g\)</span>{% endraw %}, and positivity on the target support,</p>

{% raw %}<div class="math display">\[
\widehat\mu_g(a;s)=\frac1{n_g}\sum_j
\frac{1\{A_{gj}=a\}\pi_s(\mathbf A_{g,-j})}
{f_g(\mathbf A_g\mid L_g)}Y_{gj}
\]</div>{% endraw %}
<p>has expectation equal to the group mean potential outcome with own treatment fixed at {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and peers assigned according to {% raw %}<span class="math inline">\(\pi_s\)</span>{% endraw %}.</p>

<p>Expand the expectation as a sum over {% raw %}<span class="math inline">\(\mathbf A_g\)</span>{% endraw %}. For every allocation in the target support, its observed probability cancels the same factor in the denominator. The remaining sum averages potential outcomes with the target probabilities. Taking expectation over covariates then gives the stated mean.</p>

<h3 data-note-section="3" id="10-141-why-an-individual-propensity-is-generally-insufficient">3. Why an individual propensity is generally insufficient</h3>
<p>Weighting only by {% raw %}<span class="math inline">\(\Pr(A_{gj}=a\mid L_{gj})\)</span>{% endraw %} leaves the conditional distribution of peers’ assignments in the expectation. Under interference, that remaining distribution affects outcomes and need not equal the policy distribution of interest.</p>

<p>This identity requires probabilities for joint allocations, which can be difficult to estimate in large groups. An assignment model or a sufficient <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">exposure mapping</a> can reduce the dimension. Either reduction must be justified, and neither identifies outcomes at target allocations that the observed design never produces.</p>

<h3 data-note-section="4" id="10-141-deriving-the-concentration-radius">4. Deriving the concentration radius</h3>
<p>For a centered variable {% raw %}<span class="math inline">\(V_g-\mathbb{E}V_g\)</span>{% endraw %} lying in an interval of length {% raw %}<span class="math inline">\(b_g-a_g\)</span>{% endraw %}, Hoeffding’s lemma bounds its moment-generating function by</p>

{% raw %}<div class="math display">\[
\mathbb{E} e^{\lambda(V_g-\mathbb{E}V_g)}
\leq\exp(\lambda^2(b_g-a_g)^2/8).
\]</div>{% endraw %}
<p>The exponential of a sum is a product. Independence allows its expectation to factor, so the one-group bounds multiply. Applying Markov’s inequality gives</p>

{% raw %}<div class="math display">\[
\Pr\left\{\sum_g(V_g-\mathbb{E}V_g)&gt;Gt\right\}
\leq\exp\left(-\lambda Gt+
\frac{\lambda^2}8\sum_g(b_g-a_g)^2\right).
\]</div>{% endraw %}
<p>Minimizing the exponent at {% raw %}<span class="math inline">\(\lambda=4Gt/\sum_g(b_g-a_g)^2\)</span>{% endraw %} yields the upper-tail exponent in the proposition. Apply the same calculation to {% raw %}<span class="math inline">\(-V_g\)</span>{% endraw %} and add the two tail probabilities. Setting the resulting bound equal to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} gives the displayed confidence radius.</p>

<p>For contributions in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, the radius is {% raw %}<span class="math inline">\(\sqrt{\log(2/\alpha)/(2G)}\)</span>{% endraw %}. Only the number of independent groups appears. Under unrestricted interference, everyone within a group may move together, so adding people need not add independent information. A bound that improves with group size needs restrictions that rule out this possibility.</p>

<p>Known deterministic weights can also be accommodated by applying the lemma to {% raw %}<span class="math inline">\(w_gV_g\)</span>{% endraw %}, whose range has length {% raw %}<span class="math inline">\(|w_g|(b_g-a_g)\)</span>{% endraw %}. The squared weights then enter the exponent. This is useful when the target weights groups by population size rather than equally.</p>

<h3 data-note-section="5" id="10-141-the-allocation-weighting-identity-without-omitted-steps">5. The allocation-weighting identity without omitted steps</h3>
<p>Fix a group, a focal individual {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, and covariates {% raw %}<span class="math inline">\(L_g=l\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathbf a=(a,\mathbf a_{-j})\)</span>{% endraw %}. Conditional exchangeability and consistency imply</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\mathbb{E}\left[
\frac{\mathbf1\{A_{gj}=a\}\pi_s(\mathbf A_{g,-j})}
 {f_g(\mathbf A_g\mid l)}Y_{gj}\,\middle|\,L_g=l\right]\\
&amp;\quad=\sum_{\mathbf a_{-j}}
 f_g(a,\mathbf a_{-j}\mid l)
 \frac{\pi_s(\mathbf a_{-j})}{f_g(a,\mathbf a_{-j}\mid l)}
 \mathbb{E}[Y_{gj}(a,\mathbf a_{-j})\mid L_g=l]\\
&amp;\quad=\sum_{\mathbf a_{-j}}\pi_s(\mathbf a_{-j})
 \mathbb{E}[Y_{gj}(a,\mathbf a_{-j})\mid L_g=l].
\end{aligned}
\]</div>{% endraw %}
<p>The first equality uses exchangeability for the complete assignment vector. The second is algebraic cancellation on the target support. If the target peer distribution depends on covariates, replace {% raw %}<span class="math inline">\(\pi_s\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\pi_s(\cdot\mid l)\)</span>{% endraw %} throughout. Averaging this identity over individuals and {% raw %}<span class="math inline">\(L_g\)</span>{% endraw %} gives the group target.</p>

<h3 data-note-section="6" id="10-141-a-two-person-example-of-the-wrong-weight">6. A two-person example of the wrong weight</h3>
<p>Let two treatments be independent Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %} and let person one’s outcome be {% raw %}<span class="math inline">\(Y_1(a_1,a_2)=a_1+2a_2\)</span>{% endraw %}. The target sets own treatment to {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and assigns the peer independently with probability {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Its mean is {% raw %}<span class="math inline">\(a+2q\)</span>{% endraw %}.</p>

<p>Weighting only by own treatment gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\frac{\mathbf1\{A_1=a\}Y_1}
 {p^a(1-p)^{1-a}}\right]=a+2p.
\]</div>{% endraw %}
<p>The peer assignment still follows the observed design. The full allocation weight adds</p>

{% raw %}<div class="math display">\[
\frac{q^{A_2}(1-q)^{1-A_2}}
 {p^{A_2}(1-p)^{1-A_2}},
\]</div>{% endraw %}
<p>which changes the peer mean from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %} and yields the desired {% raw %}<span class="math inline">\(a+2q\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(q=p\)</span>{% endraw %}, the extra factor is one. The individual propensity is sufficient in that special case because the target preserves the observed conditional peer law, not because randomization eliminates spillovers.</p>

<p>If the design instead treats exactly one of the two people, the allocations {% raw %}<span class="math inline">\((0,0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((1,1)\)</span>{% endraw %} have zero probability. A policy requiring either of them is not identified by this design without further outcome restrictions. No large inverse weight can compensate for an allocation that never occurs.</p>

<h3 data-note-section="7" id="10-141-positivity-also-controls-precision">7. Positivity also controls precision</h3>
<p>For bounded outcomes {% raw %}<span class="math inline">\(0\leq Y_{gj}\leq1\)</span>{% endraw %}, the weighted contribution can still be large when the joint assignment probability is small. If the target-to-observed weight is bounded by {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, then the group contribution lies in {% raw %}<span class="math inline">\([0,H]\)</span>{% endraw %} and the concentration radius scales with {% raw %}<span class="math inline">\(H\)</span>{% endraw %}.</p>

<p>Small full-allocation probabilities alone do not determine weight stability: the numerator may be equally small. The relevant quantity is the ratio between target and observed probabilities. The next calculation shows how a persistent difference between the two assignment laws accumulates across peers.</p>

<p>There is an exact second-moment calculation behind this concern. Suppose a focal unit has {% raw %}<span class="math inline">\(k\)</span>{% endraw %} peers, all assignments are independent Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %}, and the target sets own treatment to {% raw %}<span class="math inline">\(a\)</span>{% endraw %} while assigning peers independently with probability {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(p_a=p^a(1-p)^{1-a}\)</span>{% endraw %} and denote the full weight by</p>

{% raw %}<div class="math display">\[
W=\frac{\mathbf1\{A_j=a\}}{p_a}
\prod_{\ell\ne j}
\frac{q^{A_\ell}(1-q)^{1-A_\ell}}
     {p^{A_\ell}(1-p)^{1-A_\ell}}.
\]</div>{% endraw %}
<p>Each peer’s likelihood ratio has mean one. Squaring it and averaging over a single Bernoulli draw gives</p>

{% raw %}<div class="math display">\[
p\left(\frac qp\right)^2
+(1-p)\left(\frac{1-q}{1-p}\right)^2
=1+\frac{(q-p)^2}{p(1-p)}.
\]</div>{% endraw %}
<p>Independence therefore yields</p>

{% raw %}<div class="math display">\[
\mathbb{E}W=1,\qquad
\mathbb{E}W^2
=\frac1{p_a}\left(1+\frac{(q-p)^2}{p(1-p)}\right)^k.
\]</div>{% endraw %}
<p>For fixed assignment probabilities with a nonzero gap {% raw %}<span class="math inline">\(q-p\)</span>{% endraw %}, the second moment grows exponentially in the number of peers. Since the weight has mean one, subtracting one gives its variance; for {% raw %}<span class="math inline">\(Y=1\)</span>{% endraw %}, this is also the variance of the weighted outcome. Thus positive support everywhere can coexist with very poor precision.</p>

<p>If instead {% raw %}<span class="math inline">\(q-p\)</span>{% endraw %} is of order {% raw %}<span class="math inline">\(k^{-1/2}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} remains bounded away from zero and one, the peer factor stays bounded. The same observed network can therefore support precise evaluation of nearby policies while giving much less information about policies that change many peer assignments substantially.</p>

<p>A sufficient <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">exposure mapping</a> reduces the number of assignment configurations that must be distinguished. One must then compute probabilities for those exposure cells and their pairs. Sufficiency defines the outcome model; the resulting probabilities determine precision.</p>

<h3 id="10-141-the-bounded-variable-exponential-lemma">The bounded-variable exponential lemma</h3>
<p>The concentration calculation can be completed without taking its one-variable bound on faith. For {% raw %}<span class="math inline">\(V\in[a,b]\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(K(\lambda)=\log\mathbb E e^{\lambda(V-\mathbb EV)}\)</span>{% endraw %}. Boundedness permits differentiation under the expectation. Then {% raw %}<span class="math inline">\(K(0)=K&#39;(0)=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(K&#39;&#39;(\lambda)\)</span>{% endraw %} is the variance of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} under the probability law tilted by {% raw %}<span class="math inline">\(e^{\lambda V}\)</span>{% endraw %}. Under any law supported on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %},</p>
<p>{% raw %}<div class="math display">\[\operatorname{Var}(V)\le\mathbb E\left(V-\frac{a+b}{2}\right)^2\le\frac{(b-a)^2}{4}.\]</div>{% endraw %}</p>
<p>Integrating this second-derivative bound twice yields {% raw %}<span class="math inline">\(K(\lambda)\le\lambda^2(b-a)^2/8\)</span>{% endraw %} for either sign of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Independence across groups and the optimization already shown then prove the full two-sided inequality. If all ranges have length zero, the estimator is constant and the probability bound is replaced by the exact statement that its error is zero.</p>
<p>For a fixed selected set of groups, the same proof applies conditionally when their within-group randomizations are independent. It covers the average effect of those selected groups. Passing to the population average additionally requires the between-group selection term; conditional concentration alone does not remove that term.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-tchetgen-tchetgen_causal_2012" class="csl-entry" role="listitem">
Tchetgen-Tchetgen, Eric J Tchetgen, and Tyler J VanderWeele. 2012. <span>“On Causal Inference in the Presence of Interference.”</span> <em>Statistical Methods in Medical Research</em> 21 (1): 55–75. <a href="https://doi.org/10.1177/0962280210386779">https://doi.org/10.1177/0962280210386779</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">Two-Stage Experiments under Partial Interference: Effects, Variance, and Limits</a> · Next: <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">Exposure Mappings and Horvitz–Thompson Inference</a></p></nav>

</div>
