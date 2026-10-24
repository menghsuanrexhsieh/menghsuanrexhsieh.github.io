---
layout: "post"
title: "Learning Network Policies: Nuisance Estimation, Regret, and Transport"
date: "2024-09-01"
tags: ["econometrics", "networks"]
excerpt: "Estimated outcome regressions can improve network-policy evaluation, and estimated exposure probabilities are needed outside a fully known experiment."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2025/07/30/learning-network-policies-with-estimated-nuisance-functions/", "/2025/07/30/welfare-estimation-with-estimated-nuisance-functions/", "/2025/08/15/computing-network-treatment-policies/", "/2025/09/01/network-policy-regret-overlap-dependence-and-transport/", "/2025/09/01/trimming-for-network-overlap/", "/2025/09/17/regret-under-higher-order-dependence/", "/2025/10/04/welfare-in-a-different-target-population/", "/2025/10/21/structural-equations-for-network-welfare/", "/2025/11/06/extensions-of-network-policy-targeting/", "/2025/09/01/learning-network-policies-nuisance-estimation-regret-and-transport/"]
---

<div class="note-content" markdown="0">

<p>When exposure probabilities are estimated, inverse weighting inherits their estimation error. An outcome regression can reduce that error, provided the correction uses both estimates in the right combination. For the network-policy score in <span class="citation" data-cites="viviano_policy_2025"><a href="#ref-viviano_policy_2025" role="doc-biblioref">Viviano (2025)</a></span>, the leading bias is a product of the two errors. Learning a policy requires this cancellation to hold uniformly over the exposures that candidate rules can induce.</p>

<h3 data-note-section="1" id="10-628-the-augmented-score">1. The augmented score</h3>
<p>For a rule {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(m_i(\pi)\)</span>{% endraw %} be the conditional mean outcome at its induced own treatment and peer exposure. Define</p>

{% raw %}<div class="math display">\[
\widehat W(\pi)=\frac1{n_e}\sum_iR_i
\left[\widehat m_i(\pi)+\frac{I_i(\pi)}{\widehat e_i(\pi)}
(Y_i-\widehat m_i(\pi))\right].
\]</div>{% endraw %}
<p>For each candidate rule, first calculate the exposure it would induce. Evaluate both nuisance functions at that exposure. Evaluating them only at the observed exposure would fail to evaluate the candidate intervention.</p>

<div id="network-policy-nuisance" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s interference, sampling, local-dependence, overlap, boundedness, and network cross-fitting conditions, the learned policy has expected regret</p>

{% raw %}<div class="math display">\[
O\left(n_e^{-\xi}+\sqrt{\mathcal R_n\mathcal B_n}\right).
\]</div>{% endraw %}

</div>
<p><em>Remark.</em> In the bound of <a href="#network-policy-nuisance">Theorem 1</a>, {% raw %}<span class="math inline">\(n_e^{-\xi}\)</span>{% endraw %} is the oracle policy-learning rate, and {% raw %}<span class="math inline">\(\sqrt{\mathcal R_n\mathcal B_n}\)</span>{% endraw %} combines the paper’s outcome- and exposure-model error measures. The paper’s sufficient rate conditions make the nuisance-error term no larger than the oracle term.</p>
<h3 data-note-section="2" id="10-628-derive-double-robustness">2. Derive double robustness</h3>
<p>Condition on baseline information and on nuisance estimates trained using suitably separated observations. For one exposure cell, {% raw %}<span class="math inline">\(\mathbb{E}[IY]=em\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[I]=e\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\widehat m+\frac I{\widehat e}(Y-\widehat m)\right]-m
=\frac{\widehat e-e}{\widehat e}(\widehat m-m).
\]</div>{% endraw %}
<p>If either fitted nuisance equals its population value, one factor on the right vanishes. Otherwise, averaging the product and applying Cauchy–Schwarz bounds the bias by the product of two error norms, with overlap controlling the denominator.</p>

<p>The conditioning is essential. A fitted regression can contain information about an evaluation unit’s disturbance if training observations are dependent on that unit. Then the two conditional expectation identities need not hold.</p>

<h3 data-note-section="3" id="10-628-why-ordinary-random-folds-are-insufficient">3. Why ordinary random folds are insufficient</h3>
<p>Withholding a person’s row does not necessarily withhold information about that person. A training observation may be a neighbor or share a disturbance through a common neighbor. Network cross-fitting arranges training and evaluation sets to obtain the conditional separation used in the bias calculation.</p>

<p>This can reduce the number of effectively independent training observations. In the paper’s sufficient bounds, degree and overlap therefore affect nuisance rates as well as the empirical welfare fluctuation. One cannot copy the i.i.d. {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %} rule without checking these extra factors.</p>

<h3 data-note-section="4" id="10-628-optimization-is-part-of-the-result">4. Optimization is part of the result</h3>
<p>For treated-neighbor counts and suitable policy classes, the empirical objective can be represented with binary decision variables and linear constraints that track own treatment and neighbor exposure. The paper gives an equivalent mixed-integer formulation.</p>

<p>If the optimizer returns a policy within {% raw %}<span class="math inline">\(\epsilon_{\rm opt}\)</span>{% endraw %} of the empirical maximum, the basic <a href="{% post_url 2024-06-10-network-policy-targeting-identification-and-known-propensities %}">regret inequality</a> becomes</p>

{% raw %}<div class="math display">\[
W(\pi^*)-W(\widehat\pi)
\le2\sup_\pi|\widehat W(\pi)-W(\pi)|+\epsilon_{\rm opt}.
\]</div>{% endraw %}
<p>An optimization gap has a direct statistical interpretation: add it to the regret bound. A feasible policy is sufficient for that approximate guarantee only when its gap from the empirical maximum is bounded.</p>

<h3 data-note-section="5" id="10-628-from-the-conditional-identity-to-a-regret-bound">5. From the conditional identity to a regret bound</h3>
<p>Let {% raw %}<span class="math inline">\(e\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m\)</span>{% endraw %} denote the true exposure probability and mean, and suppose {% raw %}<span class="math inline">\(\widehat e\geq\kappa&gt;0\)</span>{% endraw %}. The conditional bias identity implies</p>

{% raw %}<div class="math display">\[
\left|\mathbb{E}\left[\widehat m+\frac I{\widehat e}(Y-\widehat m)\right]-m\right|
\leq\kappa^{-1}|\widehat e-e|\,|\widehat m-m|.
\]</div>{% endraw %}
<p>Averaging and applying Cauchy–Schwarz gives a bound by {% raw %}<span class="math inline">\(\kappa^{-1}r_er_m\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(r_e,r_m\)</span>{% endraw %} are the relevant average {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} errors. For policy learning this control must hold uniformly over exposures induced by candidate rules, or through error measures strong enough to bound their supremum. Good prediction at commonly observed cells alone need not control the rare cells chosen by an optimizing rule.</p>

<p>Split estimated-welfare error into a centered empirical fluctuation and this conditional bias. The <a href="{% post_url 2024-06-10-network-policy-targeting-identification-and-known-propensities %}">oracle concentration argument</a> controls the first part under network separation and boundedness; the product bound controls the second. Inserting their sum into the basic regret inequality yields the oracle term, the nuisance-product term, and any optimization gap. The paper’s {% raw %}<span class="math inline">\(\mathcal R_n,\mathcal B_n\)</span>{% endraw %} encode the corresponding uniform error measures and network factors.</p>

<p>Zero population bias does not remove sampling fluctuation. Even with one correct nuisance, a noisy fitted score may have a larger range, variance, or complexity. Double robustness alone therefore does not imply the oracle learning rate.</p>

<h3 data-note-section="6" id="10-628-why-withholding-one-persons-row-is-not-enough">6. Why withholding one person’s row is not enough</h3>
<p>Suppose {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} and a neighbor’s outcome {% raw %}<span class="math inline">\(Y_j\)</span>{% endraw %} both contain an unobserved disturbance {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. A regression trained using {% raw %}<span class="math inline">\(Y_j\)</span>{% endraw %} contains information about {% raw %}<span class="math inline">\(U\)</span>{% endraw %} even if row {% raw %}<span class="math inline">\(i\)</span>{% endraw %} is withheld. Conditioning on that fitted regression can change the conditional mean of {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} or its exposure residual.</p>

<p>The calculation {% raw %}<span class="math inline">\(\mathbb{E}[IY\mid\text{training information}]=em\)</span>{% endraw %} requires the training information to be conditionally separated from the evaluation contribution in the stipulated model. Removing a network buffer or constructing independent color classes can supply this separation under local-dependence assumptions. It reduces the available training data, and the larger dependence neighborhood must be reflected in the rate calculation.</p>

<p>Causal exposure and disturbance dependence need not have the same radius. Outcomes may depend causally on immediate neighbors’ treatments while unobservables remain related over several graph steps. The training separation must follow the disturbance-dependence radius when it is larger. The paper’s extension to {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-step dependence adds an oracle factor of order {% raw %}<span class="math inline">\(M\mathcal{N}_n^{M/2-1}\)</span>{% endraw %}, together with its strengthened boundedness and nuisance conditions.</p>

<h3 data-note-section="7" id="10-628-trimming-trades-weight-size-against-missing-welfare">7. Trimming trades weight size against missing welfare</h3>
<p>Let {% raw %}<span class="math inline">\(W_\kappa(\pi)\)</span>{% endraw %} retain only contributions whose exposure probabilities exceed {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(|Y|\leq\Gamma\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sup_\pi|W(\pi)-W_\kappa(\pi)|
\leq\Gamma\sup_\pi P\{e_i(\pi)&lt;\kappa\},
\]</div>{% endraw %}
<p>with the probability interpreted under the target’s averaging scheme. The retained inverse weights are bounded by {% raw %}<span class="math inline">\(1/\kappa\)</span>{% endraw %}, improving the stochastic bound. Applying the regret decomposition to the trimmed target adds twice this uniform omitted-welfare bound when returning to the original target.</p>

<p>For the paper’s neighbor-count specification, the resulting rate has the form</p>

{% raw %}<div class="math display">\[
O\left(
\frac{\mathcal{N}_n^{3/2}}{\kappa_n}
\sqrt{\frac{\log(\mathcal{N}_n)\operatorname{VC}(\Pi)}{n_e}}
+P_n\{|N_i|\geq\log_\gamma\kappa_n\}
\right),\qquad0&lt;\gamma&lt;1,
\]</div>{% endraw %}
<p>The cutoff reflects configuration probabilities that can decrease like {% raw %}<span class="math inline">\(\gamma^{|N_i|}\)</span>{% endraw %}. Raising {% raw %}<span class="math inline">\(\kappa_n\)</span>{% endraw %} reduces the largest retained weight, but also decreases {% raw %}<span class="math inline">\(\log_\gamma\kappa_n\)</span>{% endraw %} because the logarithm has a base below one. The resulting larger discarded tail contributes approximation error. Both terms must be retained when choosing how much to trim.</p>

<p>A simple tail model makes the trimming choice explicit. Suppose, for this calculation, that uniformly over policies {% raw %}<span class="math inline">\(P(e_i(\pi)&lt;\kappa)\leq C\kappa^a\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}. Let the unweighted concentration scale be {% raw %}<span class="math inline">\(A_n\to0\)</span>{% endraw %}, so the retained-score error is bounded in order by {% raw %}<span class="math inline">\(A_n/\kappa\)</span>{% endraw %}. Ignoring nuisance and optimization terms, the regret bound has the form</p>

{% raw %}<div class="math display">\[
\frac{A_n}{\kappa}+2\Gamma C\kappa^a.
\]</div>{% endraw %}
<p>Differentiation gives an interior balance</p>

{% raw %}<div class="math display">\[
\kappa^{a+1}=\frac{A_n}{2\Gamma Ca},\qquad
\operatorname{Regret}=O(A_n^{a/(a+1)}).
\]</div>{% endraw %}
<p>A thinner low-overlap tail allows a higher threshold with less omitted welfare. If {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} has order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}, the balance gives {% raw %}<span class="math inline">\(n^{-a/(2a+2)}\)</span>{% endraw %}, slower than root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} for finite {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. This follows from the illustrative tail model, not from an additional theorem in the paper. It quantifies the approximation cost that would be lost by clipping weights and retaining the original oracle rate.</p>

<p>The same decomposition explains which nuisance errors matter. For an estimated exposure probability bounded below by {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}, the conditional bias costs at most {% raw %}<span class="math inline">\(r_er_m/\kappa\)</span>{% endraw %}. Trimming can improve concentration while amplifying or reducing this term depending on where the estimation errors occur. The paper’s uniform nuisance measures and overlap restrictions are designed to control the scores at the exposures that a learned policy can choose, including cells rarely used by the observed treatment rule.</p>

<h3 data-note-section="8" id="10-628-transporting-a-learned-rule-to-another-population">8. Transporting a learned rule to another population</h3>
<p>Let {% raw %}<span class="math inline">\(W_S\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W_T\)</span>{% endraw %} be source and target welfare and let {% raw %}<span class="math inline">\(\pi_T^*\)</span>{% endraw %} maximize target welfare. Add and subtract source welfare at {% raw %}<span class="math inline">\(\pi_T^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\pi\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
W_T(\pi_T^*)-W_T(\widehat\pi)
\leq{}&amp;\sup_\pi W_S(\pi)-W_S(\widehat\pi)\\
&amp;+2\sup_\pi|W_T(\pi)-W_S(\pi)|.
\end{aligned}
\]</div>{% endraw %}
<p>The best rule can change across populations. To compare the target optimizer with the source-trained rule, both welfare evaluations must be transferred, hence the uniform discrepancy and its factor of two. For a shared baseline realization, the paper instead relates expected conditional regret to expected regret.</p>

<p>If the conditional response model is stable and baseline information {% raw %}<span class="math inline">\(H\)</span>{% endraw %} has target-to-source density ratio {% raw %}<span class="math inline">\(\omega(H)\)</span>{% endraw %}, transported welfare can be written</p>

{% raw %}<div class="math display">\[
W_T(\pi)=\mathbb{E}_S[\omega(H)m_\pi(H)].
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(H\)</span>{% endraw %} must contain the baseline network and covariate information needed to determine the policy-induced exposure and outcome mean. Reweighting only a person’s own covariates can miss a change in neighbor composition. Support overlap is required, and estimating {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} introduces another estimation problem.</p>

<p>For {% raw %}<span class="math inline">\(|m_\pi(H)|\leq\Gamma\)</span>{% endraw %}, a simple discrepancy bound is</p>

{% raw %}<div class="math display">\[
\sup_\pi|W_T(\pi)-W_S(\pi)|
\leq\Gamma\mathbb{E}_S|\omega(H)-1|.
\]</div>{% endraw %}
<p>This bound covers a change in the distribution of baseline information under a stable response model. A change in the response mechanism itself requires additional assumptions; a density ratio cannot correct it.</p>

<h3 data-note-section="9" id="10-628-deployment-constraints-change-the-exposure-being-evaluated">9. Deployment constraints change the exposure being evaluated</h3>
<p>For irreversible treatment, the deployed assignment is {% raw %}<span class="math inline">\(D_i+(1-D_i)\pi(X_i)\)</span>{% endraw %}. Its neighbor count must be calculated using these constrained assignments, including previously treated neighbors. Optimizing an unconstrained rule and then modifying it afterward generally evaluates a different policy from the one deployed.</p>

<p>Under imperfect take-up, an offer policy induces a distribution of received treatments for the person and the peers. Welfare must average over that distribution using the stated compliance and outcome assumptions. Directly replacing offers by take-up would remove the randomization on which identification was based.</p>

<p>For count exposures, an optimization formulation can introduce assignment variables {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %}, count variables {% raw %}<span class="math inline">\(t_i=\sum_{j\in N_i}d_j\)</span>{% endraw %}, and indicators selecting each feasible pair {% raw %}<span class="math inline">\((d_i,t_i)\)</span>{% endraw %}. These constraints ensure that every unit’s contribution is evaluated at an exposure generated by the same global assignment. Class restrictions and budget constraints must also be imposed. A solver’s certified objective gap enters the regret bound through {% raw %}<span class="math inline">\(\epsilon_{\rm opt}\)</span>{% endraw %}; finding a feasible assignment alone does not prove empirical optimality.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-viviano_policy_2025" class="csl-entry" role="listitem">
Viviano, Davide. 2025. <span>“Policy Targeting Under Network Interference.”</span> <em>Review of Economic Studies</em> 92 (2): 1257–92. <a href="https://doi.org/10.1093/restud/rdae041">https://doi.org/10.1093/restud/rdae041</a>. First published online 10 April 2024.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-06-10-network-policy-targeting-identification-and-known-propensities %}">Network Policy Targeting: Identification and Known Propensities</a></p></nav>

</div>
