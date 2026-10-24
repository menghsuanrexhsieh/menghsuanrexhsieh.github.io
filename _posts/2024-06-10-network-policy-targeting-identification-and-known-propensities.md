---
layout: "post"
title: "Network Policy Targeting: Identification and Known Propensities"
date: "2024-06-10"
tags: ["econometrics", "networks"]
excerpt: "A treatment rule changes both a person's own treatment and the treatments received by their neighbors."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2025/06/10/policy-targeting-under-network-interference/", "/2025/06/26/network-welfare-and-policy-rules/", "/2025/07/13/welfare-estimation-with-known-propensities/", "/2025/11/23/a-numerical-illustration-of-network-welfare/", "/2025/12/09/network-welfare-regret-and-identification-results/", "/2025/12/26/proofs-of-network-welfare-bounds/", "/2026/01/12/decomposing-network-welfare-estimation-error/", "/2026/01/28/bounding-network-empirical-processes/", "/2026/02/14/further-proofs-for-network-welfare/", "/2026/03/02/auxiliary-lemmas-for-network-welfare/", "/2026/03/19/identifying-network-welfare/", "/2026/04/05/proofs-for-network-welfare-extensions/", "/2025/06/10/network-policy-targeting-identification-and-known-propensities/"]
---

<div class="note-content" markdown="0">

<p>Choosing whom to treat in a network requires counting gains to the recipient and to other people. A rule that looks best using direct effects alone can therefore be suboptimal once spillovers are included. The policy-learning problem in <span class="citation" data-cites="viviano_policy_2025"><a href="#ref-viviano_policy_2025" role="doc-biblioref">Viviano (2025)</a></span> first identifies welfare for each candidate rule, then bounds the loss from choosing a rule using estimated welfare.</p>

<h3 data-note-section="1" id="10-556-identify-welfare-under-a-rule">1. Identify welfare under a rule</h3>
<p>Let {% raw %}<span class="math inline">\(\pi(X_i)\in\{0,1\}\)</span>{% endraw %} be an individualized rule. Outcomes depend on own treatment {% raw %}<span class="math inline">\(D_i\)</span>{% endraw %}, a specified summary {% raw %}<span class="math inline">\(T_i\)</span>{% endraw %} of neighboring treatments, covariates {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %}, and degree. Write {% raw %}<span class="math inline">\(T_i(\pi)\)</span>{% endraw %} for the exposure induced by applying {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} to the population.</p>

<p>Let {% raw %}<span class="math inline">\(I_i(\pi)=1\{D_i=\pi(X_i),T_i=T_i(\pi)\}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(e_i(\pi)\)</span>{% endraw %} be the probability of this exposure event under the experiment, conditional on the required network, covariate, and sampling information. If {% raw %}<span class="math inline">\(R_i\)</span>{% endraw %} indicates experimental participation and {% raw %}<span class="math inline">\(n_e=\mathbb{E}\sum_iR_i\)</span>{% endraw %}, the paper identifies conditional welfare by</p>

{% raw %}<div class="math display">\[
W_{A,Z}(\pi)=\frac1{n_e}\sum_i
\mathbb{E}\left[\frac{R_iI_i(\pi)Y_i}{e_i(\pi)}\mid A,Z\right].
\]</div>{% endraw %}
<p>Identification requires that candidate rules induce exposures supported by the experiment. It also uses the specified participation and assignment mechanisms, consistency, and the restriction describing which assignments affect each outcome.</p>

<h3 data-note-section="2" id="10-556-the-oracle-regret-result">2. The oracle regret result</h3>
<div id="network-policy-oracle" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. With known exposure probabilities and a bounded outcome adjustment independent of the experiment conditional on baseline information, the empirical welfare maximizer satisfies a bound on conditional expected regret of order</p>

{% raw %}<div class="math display">\[
\frac{\Gamma\mathcal{N}_n^{3/2}}{\gamma\delta_n}
\sqrt{\frac{\log(\mathcal{N}_n)\operatorname{VC}(\Pi)}{n_e}},
\]</div>{% endraw %}
<p>under the paper’s local-dependence, moment, sampling, and policy-class conditions. Here {% raw %}<span class="math inline">\(\mathcal{N}_n\)</span>{% endraw %} is the degree bound used in the theorem, {% raw %}<span class="math inline">\(\gamma\delta_n\)</span>{% endraw %} controls exposure overlap, and {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} bounds the relevant outcome scale. With bounded degree, fixed complexity, and overlap bounded away from zero, this gives the usual {% raw %}<span class="math inline">\(n_e^{-1/2}\)</span>{% endraw %} regret rate. The paper also gives minimax lower bounds for its specified class.</p>

</div>
<p>Use the degree convention in the theorem, bounded below by a positive constant greater than one when writing its logarithmic factor. A literal {% raw %}<span class="math inline">\(\log0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\log1\)</span>{% endraw %} is not a meaningful rate for an empty or degree-one network.</p>

<h3 data-note-section="3" id="10-556-the-whole-regret-argument-starts-with-one-inequality">3. The whole regret argument starts with one inequality</h3>
<p>Let {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %} maximize population welfare and let {% raw %}<span class="math inline">\(\widehat\pi\)</span>{% endraw %} maximize estimated welfare {% raw %}<span class="math inline">\(\widehat W\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
W(\pi^*)-W(\widehat\pi)
\le2\sup_{\pi\in\Pi}|\widehat W(\pi)-W(\pi)|.
\]</div>{% endraw %}
<p>Add and subtract estimated welfare at the population and empirical optimizers. Empirical optimality makes the middle difference nonpositive, leaving two estimation errors. Both are bounded by the same supremum, so the learning problem reduces to controlling welfare estimation uniformly over the policy class.</p>

<h3 data-note-section="4" id="10-556-why-exposure-overlap-can-be-harder-than-treatment-overlap">4. Why exposure overlap can be harder than treatment overlap</h3>
<p>Overlap must be checked for the exposure that a rule induces. Moderate individual treatment probabilities can still make a particular treated-neighbor count rare. Those cells receive large inverse weights. Coarsening the summary helps only when outcomes depend on assignments through the coarser summary.</p>

<p>Individualized rules can be deployed using observed characteristics, while the objective still accounts for spillovers. More flexible rules using the whole target adjacency matrix require more network information and a different complexity analysis. The next note handles <a href="{% post_url 2024-09-01-learning-network-policies-nuisance-estimation-regret-and-transport %}">estimated nuisance functions</a>; the same note also develops trimming and transport.</p>

<h3 data-note-section="5" id="10-556-a-rule-determines-a-whole-exposure-pattern">5. A rule determines a whole exposure pattern</h3>
<p>Suppose the exposure summary is the number of treated neighbors. Conditional on the baseline network and covariates,</p>

{% raw %}<div class="math display">\[
T_i(\pi)=\sum_{j\in N_i}\pi(X_j).
\]</div>{% endraw %}
<p>Assigning treatment to person {% raw %}<span class="math inline">\(i\)</span>{% endraw %} changes that person’s own treatment and the exposure counts used by nearby outcomes. To evaluate a rule, apply it to the relevant neighbors first, then evaluate each outcome contribution under the resulting assignments.</p>

<p>For example, take two connected people and conditional mean {% raw %}<span class="math inline">\(m_i(d,t)=\tau_i d+\beta_i t\)</span>{% endraw %}. The total welfare gain from treating only person one is {% raw %}<span class="math inline">\(\tau_1+\beta_2\)</span>{% endraw %}, not just {% raw %}<span class="math inline">\(\tau_1\)</span>{% endraw %}. Under a one-person budget, comparing only own-treatment effects can choose the wrong recipient. The policy objective sums the effects on every person’s outcome, which is why local decisions are coupled in the optimization.</p>

<h3 data-note-section="6" id="10-556-exact-count-overlap-can-be-much-weaker-than-own-treatment-overlap">6. Exact-count overlap can be much weaker than own-treatment overlap</h3>
<p>If experimental assignments are independent Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %}, a unit with {% raw %}<span class="math inline">\(k\)</span>{% endraw %} neighbors has probability</p>

{% raw %}<div class="math display">\[
e_i(\pi)=p^{a_i}(1-p)^{1-a_i}
\binom{k}{t_i}p^{t_i}(1-p)^{k-t_i},
\qquad a_i=\pi(X_i),\quad t_i=T_i(\pi).
\]</div>{% endraw %}
<p>This formula presumes the outcome depends on the neighbor count rather than their identities. At {% raw %}<span class="math inline">\(p=1/2\)</span>{% endraw %}, it becomes {% raw %}<span class="math inline">\(2^{-(k+1)}\binom{k}{t_i}\)</span>{% endraw %}. A policy inducing all treated neighbors has exponentially small matching probability, while counts near {% raw %}<span class="math inline">\(k/2\)</span>{% endraw %} are much more common.</p>

<p>A full-neighbor-vector exposure requires one exact configuration, whereas a count exposure pools all configurations with that count. This accounts for the binomial coefficient in the latter probability. Pooling improves overlap only when these configurations have the same outcome under the assumed model.</p>

<h3 data-note-section="7" id="10-556-the-regret-decomposition-with-an-approximate-optimizer">7. The regret decomposition with an approximate optimizer</h3>
<p>Let {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %} maximize {% raw %}<span class="math inline">\(W\)</span>{% endraw %} over the specified class. Add and subtract empirical welfares:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
W(\pi^*)-W(\widehat\pi)
={}&amp;W(\pi^*)-\widehat W(\pi^*)
+\widehat W(\pi^*)-\widehat W(\widehat\pi)\\
&amp;+\widehat W(\widehat\pi)-W(\widehat\pi).
\end{aligned}
\]</div>{% endraw %}
<p>If the empirical optimization gap is at most {% raw %}<span class="math inline">\(\epsilon_{\rm opt}\)</span>{% endraw %}, the middle term is at most that gap. Bounding each remaining term by the same supremum proves</p>

{% raw %}<div class="math display">\[
W(\pi^*)-W(\widehat\pi)
\leq2\sup_{\pi\in\Pi}|\widehat W(\pi)-W(\pi)|
+\epsilon_{\rm opt}.
\]</div>{% endraw %}
<p>The comparator is the best rule in {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %}. Restricting the class makes uniform estimation easier, but may exclude policies with higher welfare. Enlarging it trades this approximation error against the greater sampling error in comparing more policies.</p>

<h3 data-note-section="8" id="10-556-a-finite-class-concentration-argument-showing-the-degree-cost">8. A finite-class concentration argument showing the degree cost</h3>
<p>Consider the explanatory special case with every unit participating, a finite class of {% raw %}<span class="math inline">\(K\)</span>{% endraw %} rules, and welfare contributions in an interval of length {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. Suppose their dependence graph can be colored with {% raw %}<span class="math inline">\(\chi\)</span>{% endraw %} colors so that contributions within each color class are independent. For a fixed rule, write its centered sum as {% raw %}<span class="math inline">\(S=\sum_{c=1}^\chi S_c\)</span>{% endraw %}.</p>

<p>Within each color class, independence gives a product of bounded-variable moment bounds. Hölder’s inequality combines the color classes without assuming they are independent of one another:</p>

{% raw %}<div class="math display">\[
\mathbb{E} e^{\lambda S}
\leq\prod_{c=1}^\chi
(\mathbb{E} e^{\chi\lambda S_c})^{1/\chi}
\leq\exp(\chi\lambda^2nB^2/8).
\]</div>{% endraw %}
<p>Optimizing the exponential tail bound and taking a union bound over rules yields</p>

{% raw %}<div class="math display">\[
P\left\{\sup_{\pi\in\Pi}|\widehat W(\pi)-W(\pi)|&gt;t\right\}
\leq2K\exp(-2nt^2/(\chi B^2)).
\]</div>{% endraw %}
<p>The resulting uniform error has order {% raw %}<span class="math inline">\(B\sqrt{\chi\log K/n}\)</span>{% endraw %}. Large inverse weights increase the range {% raw %}<span class="math inline">\(B\)</span>{% endraw %}; overlapping neighborhoods increase the number of colors {% raw %}<span class="math inline">\(\chi\)</span>{% endraw %}. The paper replaces this finite-class argument with its VC-class and sampling analysis, producing the stated dependence on degree and overlap.</p>

<p>The concentration bound translates directly into an implementable accuracy statement. With probability at least {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %}, in the finite-class special case,</p>

{% raw %}<div class="math display">\[
W(\pi^*)-W(\widehat\pi)
\leq B\sqrt{\frac{2\chi\log(2K/\eta)}n}
+\epsilon_{\rm opt}.
\]</div>{% endraw %}
<p>This follows by setting {% raw %}<span class="math inline">\(t=B\sqrt{\chi\log(2K/\eta)/(2n)}\)</span>{% endraw %} in the tail bound and multiplying by two in the regret inequality. If outcomes lie in {% raw %}<span class="math inline">\([0,\Gamma]\)</span>{% endraw %} and every relevant exposure has probability at least {% raw %}<span class="math inline">\(e_0\)</span>{% endraw %}, an unadjusted inverse-weighted contribution has range at most {% raw %}<span class="math inline">\(B=\Gamma/e_0\)</span>{% endraw %}. To make the stochastic part at most {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, this sufficient bound requires</p>

{% raw %}<div class="math display">\[
n\geq\frac{2\chi\Gamma^2}{e_0^2\varepsilon^2}
\log\left(\frac{2K}{\eta}\right).
\]</div>{% endraw %}
<p>The square in {% raw %}<span class="math inline">\(e_0^{-2}\)</span>{% endraw %} comes from a range-based concentration argument and can be pessimistic relative to variance-sensitive bounds. Nevertheless, it shows why enlarging the policy class to include extreme neighbor exposures can overwhelm any gain from finer targeting. The comparison is uniform because the maximizing policy was chosen using the estimated welfares themselves.</p>

<p>Uniformity is needed because the selected rule depends on the estimated welfares. A fixed-rule guarantee need not survive selecting whichever estimate is largest. The paper controls this selection through restrictions on the policy class and network sampling model.</p>

<h3 data-note-section="9" id="10-556-why-an-outcome-adjustment-can-help-even-with-known-probabilities">9. Why an outcome adjustment can help even with known probabilities</h3>
<p>For one exposure cell with probability {% raw %}<span class="math inline">\(e\)</span>{% endraw %} and conditional mean {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, take a fixed adjustment {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and score {% raw %}<span class="math inline">\(a+I(Y-a)/e\)</span>{% endraw %}. Its expectation is {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. If the conditional outcome variance in the cell is {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, direct expansion gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(a+I(Y-a)/e)
=\frac ve+\left(\frac1e-1\right)(m-a)^2.
\]</div>{% endraw %}
<p>The last expression is minimized at {% raw %}<span class="math inline">\(a=m\)</span>{% endraw %}: an accurate outcome adjustment removes variability due to exposure matching, even with known assignment probabilities. The calculation treats that adjustment as fixed under the relevant conditioning. Estimating it from dependent evaluation outcomes requires a separation argument.</p>

<p>The augmented procedure in the <a href="{% post_url 2024-09-01-learning-network-policies-nuisance-estimation-regret-and-transport %}">learning and transport note</a> permits both nuisance functions to be estimated. Its additional error term records what the oracle analysis leaves out.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-viviano_policy_2025" class="csl-entry" role="listitem">
Viviano, Davide. 2025. <span>“Policy Targeting Under Network Interference.”</span> <em>Review of Economic Studies</em> 92 (2): 1257–92. <a href="https://doi.org/10.1093/restud/rdae041">https://doi.org/10.1093/restud/rdae041</a>. First published online 10 April 2024.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Additional reading: <a href="{% post_url 2025-05-08-missing-network-links-and-spillover-bias %}">Missing Network Links and Spillover Bias</a> · Next: <a href="{% post_url 2024-09-01-learning-network-policies-nuisance-estimation-regret-and-transport %}">Learning Network Policies: Nuisance Estimation, Regret, and Transport</a></p></nav>

</div>
