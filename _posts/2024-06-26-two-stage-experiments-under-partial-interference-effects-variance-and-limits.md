---
layout: "post"
title: "Two-Stage Experiments under Partial Interference: Effects, Variance, and Limits"
date: "2024-06-26"
tags: ["econometrics", "networks"]
excerpt: "Two-stage experiments distinguish changing an individual's treatment from changing the treatment environment around that individual."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/05/08/partial-interference-and-two-stage-randomization/", "/2024/05/08/two-stage-randomization-and-variance-under-partial-interference/", "/2024/05/24/variance-estimation-under-partial-interference/", "/2024/06/26/large-cluster-inference-under-interference/"]
---

<div class="note-content" markdown="0">

<p>Treating a person and treating more of that person’s peers are different interventions. A two-stage experiment varies both: it assigns treatment strategies to groups, then assigns treatment to people within each group. Under partial interference, outcomes depend on assignments within their own group only. <span class="citation" data-cites="hudgens_toward_2008"><a href="#ref-hudgens_toward_2008" role="doc-biblioref">Hudgens and Halloran (2008)</a></span> define effects that match this design.</p>

<h3 data-note-section="1" id="10-104-define-the-policy-before-defining-the-effect">1. Define the policy before defining the effect</h3>
<p>Let {% raw %}<span class="math inline">\(Y_{gj}(\mathbf z_g)\)</span>{% endraw %} be unit {% raw %}<span class="math inline">\(j\)</span>{% endraw %}’s outcome in group {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. Under an allocation strategy {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\overline Y_g(a;s)\)</span>{% endraw %} by averaging over other assignments according to the strategy conditional on the focal unit receiving {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\overline Y(a;s)\)</span>{% endraw %} average these group means with the chosen group weights.</p>

<p>A direct effect at strategy {% raw %}<span class="math inline">\(s\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\overline Y(1;s)-\overline Y(0;s)\)</span>{% endraw %}. An indirect effect compares {% raw %}<span class="math inline">\(\overline Y(0;s_1)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\overline Y(0;s_0)\)</span>{% endraw %}. The total effect satisfies the accounting identity</p>

{% raw %}<div class="math display">\[
\overline Y(1;s_1)-\overline Y(0;s_0)
=(\overline Y(1;s_1)-\overline Y(0;s_1))
+(\overline Y(0;s_1)-\overline Y(0;s_0)).
\]</div>{% endraw %}
<p>The overall effect averages over each person’s own assignment as well. It answers what happens to the group as a whole when the allocation strategy changes.</p>

<h3 data-note-section="2" id="10-104-the-unbiasedness-result">2. The unbiasedness result</h3>
<div id="two-stage-unbiased" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. In the paper’s mixed two-stage design, randomly select a fixed number of groups for each strategy, then randomly select a fixed number of treated individuals within each group. The appropriate treated and untreated group means, followed by averages over randomized groups, are unbiased for the corresponding allocation-averaged potential outcomes. Their contrasts are unbiased for the direct, indirect, total, and overall effects.</p>

</div>
<p>The choice of weights is part of the definition of the effect. Equal weights give a randomly selected small group the same influence as a large group. Weighting by group size instead corresponds to selecting an individual from the population.</p>

<h3 data-note-section="3" id="10-104-why-the-expectation-works">3. Why the expectation works</h3>
<p>Unbiasedness follows by averaging in the same order as the design. First fix the group’s strategy. Conditional on a person’s own treatment, each admissible assignment to the peers has the probability used in the potential-outcome average. Then average over which groups received the strategy. The two expectations recover the two levels of the estimand.</p>

<p>This sample-mean argument uses fixed treatment counts with both arms nonempty. A Bernoulli design has random arm sizes and can produce an empty arm, so the ratio-unbiasedness conclusion requires a separate argument in that design.</p>

<h3 data-note-section="4" id="10-104-variance-needs-additional-information">4. Variance needs additional information</h3>
<p>Variance introduces a difficulty that the expectation calculation avoids. Expanding a squared estimator produces products of outcomes under different assignments. Those outcomes are never observed together, and arbitrary interference gives no relation between them. Unbiased estimation of a mean therefore leaves some variance components unidentified.</p>

<p>Stratified interference supplies such a relation: at a given treatment count, only a person’s own treatment matters, not the identities of treated peers. This gives two fixed potential-outcome vectors at that count and permits the usual sampling-without-replacement calculation.</p>

<p>The <a href="{% post_url 2024-03-13-finite-sample-inference-under-interference %}">finite-sample bounds</a> take another route by exploiting bounded outcomes and the assignment design. Large-cluster limits explain what increasing group size can achieve when the number of groups remains small.</p>

<h3 data-note-section="5" id="10-104-unbiasedness-through-both-randomization-stages">5. Unbiasedness through both randomization stages</h3>
<p>Within a group of size {% raw %}<span class="math inline">\(n_g\)</span>{% endraw %}, suppose strategy {% raw %}<span class="math inline">\(s\)</span>{% endraw %} treats exactly {% raw %}<span class="math inline">\(K_g\)</span>{% endraw %} individuals. The treated sample mean is</p>

{% raw %}<div class="math display">\[
\widehat Y_g(1;s)=\frac1{K_g}\sum_jZ_{gj}Y_{gj}(\mathbf Z_g).
\]</div>{% endraw %}
<p>Because {% raw %}<span class="math inline">\(\Pr(Z_{gj}=1\mid s)=K_g/n_g\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_s\widehat Y_g(1;s)
=\frac1{K_g}\sum_j\frac{K_g}{n_g}
\mathbb{E}_s[Y_{gj}(\mathbf Z_g)\mid Z_{gj}=1]
=\overline Y_g(1;s).
\]</div>{% endraw %}
<p>The expectation inside the sum averages over precisely the peer assignments used to define the estimand. The untreated calculation uses {% raw %}<span class="math inline">\((n_g-K_g)/n_g\)</span>{% endraw %} instead. It remains valid under arbitrary within-group interference because the entire assignment vector stays inside the potential outcome.</p>

<p>If exactly {% raw %}<span class="math inline">\(G_s\)</span>{% endraw %} of {% raw %}<span class="math inline">\(G\)</span>{% endraw %} groups receive strategy {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(I_g(s)\)</span>{% endraw %} be their indicators. Averaging their estimated means gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\frac1{G_s}\sum_gI_g(s)\widehat Y_g(a;s)\right]
=\frac1G\sum_g\overline Y_g(a;s).
\]</div>{% endraw %}
<p>At each stage, the inclusion probability cancels a fixed denominator. The resulting average gives equal weight to groups. For unequal group sizes, an individual-average target requires size weights at the group-aggregation stage.</p>

<h3 data-note-section="6" id="10-104-the-finite-population-variance-under-stratified-interference">6. The finite-population variance under stratified interference</h3>
<p>Fix a strategy and write {% raw %}<span class="math inline">\(n=n_g\)</span>{% endraw %}, {% raw %}<span class="math inline">\(K=K_g\)</span>{% endraw %}. Under stratified interference, the two potential-outcome vectors {% raw %}<span class="math inline">\(y_j(1;s),y_j(0;s)\)</span>{% endraw %} are fixed at the specified total count. Complete randomization implies</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(Z_j)=\frac Kn\left(1-\frac Kn\right),
\qquad
\operatorname{Cov}(Z_j,Z_l)
=-\frac{K(n-K)}{n^2(n-1)},\quad j\ne l.
\]</div>{% endraw %}
<p>The negative covariance follows from the fixed sum {% raw %}<span class="math inline">\(\sum_jZ_j=K\)</span>{% endraw %}: its variance is zero, so the off-diagonal terms must offset the diagonal terms.</p>

<p>Rewrite the direct-effect estimator as</p>

{% raw %}<div class="math display">\[
\widehat\tau_g=\sum_jZ_jv_j-
\frac1{n-K}\sum_jy_j(0;s),
\qquad
v_j=\frac{y_j(1;s)}K+\frac{y_j(0;s)}{n-K}.
\]</div>{% endraw %}
<p>For finite-population variance {% raw %}<span class="math inline">\(S_v^2=(n-1)^{-1}\sum_j(v_j-\overline v)^2\)</span>{% endraw %}, the indicator covariances give {% raw %}<span class="math inline">\(\operatorname{Var}(\sum_jZ_jv_j)=K(n-K)S_v^2/n\)</span>{% endraw %}. Expanding {% raw %}<span class="math inline">\(S_v^2\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\tau_g\mid s)
=\frac{S_1^2}{K}+\frac{S_0^2}{n-K}-\frac{S_\tau^2}{n},
\]</div>{% endraw %}
<p>because {% raw %}<span class="math inline">\(S_\tau^2=S_1^2+S_0^2-2S_{10}\)</span>{% endraw %}. The unobserved covariance {% raw %}<span class="math inline">\(S_{10}\)</span>{% endraw %} has been collected into the treatment-effect variance. Dropping its negative contribution yields a conservative target, estimable from within-arm sample variances under the stated design.</p>

<h3 data-note-section="7" id="10-104-what-a-large-group-makes-approximately-normal">7. What a large group makes approximately normal</h3>
<div id="two-stage-large-group" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Under the finite-population variance and negligibility conditions in <span class="citation" data-cites="liu_large_2014">(<a href="#ref-liu_large_2014" role="doc-biblioref">Liu and Hudgens 2014</a>)</span>, with both treatment-arm counts growing, the direct-effect estimator centered at its group estimand and divided by its true conditional standard deviation converges to a standard normal variable. Corresponding results hold for allocation-specific means and overall group means.</p>

</div>
<p>The transformed {% raw %}<span class="math inline">\(v_j\)</span>{% endraw %} above turns the proof into a finite-population CLT for a simple-random-sample sum. One must rule out a few {% raw %}<span class="math inline">\(v_j\)</span>{% endraw %} carrying a nonnegligible fraction of its variance and ensure a nondegenerate denominator. Conditions only on one potential-outcome vector need not control a contrast whose two components nearly cancel.</p>

<p>Replacing the true variance by a conservative estimate requires one more step. The estimate may converge to a larger quantity, so the studentized statistic need not have variance one. Conservative normal intervals can still follow, but ratio consistency is a stronger conclusion, particularly with heterogeneous individual effects.</p>

<h3 data-note-section="8" id="10-104-a-few-randomized-groups-leave-a-mixture">8. A few randomized groups leave a mixture</h3>
<p>Suppose {% raw %}<span class="math inline">\(G\)</span>{% endraw %} remains fixed and {% raw %}<span class="math inline">\(G_s\)</span>{% endraw %} groups receive a strategy. Conditional on the selected set {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %}, independent within-group randomizations give an average centered at</p>

{% raw %}<div class="math display">\[
\mu_{\mathcal G}=\frac1{G_s}\sum_{g\in\mathcal G}\tau_g,
\]</div>{% endraw %}
<p>with conditional variance {% raw %}<span class="math inline">\(G_s^{-2}\sum_{g\in\mathcal G}\operatorname{Var}(\widehat\tau_g\mid s)\)</span>{% endraw %}. Unconditionally, its law averages over the possible sets {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %}.</p>

<p>To see what increasing group sizes can and cannot remove, separate the variance by conditioning on the selected groups:</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\tau)
=\mathbb{E}[\operatorname{Var}(\widehat\tau\mid\mathcal G)]
+\operatorname{Var}(\mu_{\mathcal G}).
\]</div>{% endraw %}
<p>If group effects are fixed and have finite-population variance {% raw %}<span class="math inline">\(S_{\tau,g}^2\)</span>{% endraw %} across groups, the second term is {% raw %}<span class="math inline">\((1-G_s/G)S_{\tau,g}^2/G_s\)</span>{% endraw %}. It need not vanish as group sizes increase. The first term can shrink while the distribution approaches a discrete mixture over different group-average effects.</p>

<p>The first term can also be evaluated. Suppose the within-group estimators are independent conditional on the selected set and have conditional variances {% raw %}<span class="math inline">\(\nu_g\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[\operatorname{Var}(\widehat\tau\mid\mathcal G)]
&amp;=\frac1{G_s^2}\sum_g\mathbb{P}(g\in\mathcal G)\nu_g\\
&amp;=\frac1{GG_s}\sum_g\nu_g,
\end{aligned}
\]</div>{% endraw %}
<p>so</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat\tau)
=\frac{1-G_s/G}{G_s}S_{\tau,g}^2
+\frac1{GG_s}\sum_g\nu_g.
\]</div>{% endraw %}
<p>In the last display, the first term measures uncertainty about which group effects were selected; the second averages the remaining within-group randomization variances. Increasing the numbers treated and untreated within each group can reduce {% raw %}<span class="math inline">\(\nu_g\)</span>{% endraw %}. A census of groups makes the group-selection term zero while leaving within-group randomization uncertainty.</p>

<p>The allocation strategy is part of each group effect {% raw %}<span class="math inline">\(\tau_g\)</span>{% endraw %}. Changing saturation can therefore change both the target and its variance. The two-stage definitions keep the same strategy in the expectation and variance calculations, so an ordinary no-interference formula cannot be carried over while changing the strategy it refers to.</p>

<p>For instance, selecting one of two groups with effects zero and two leaves an equal mixture at zero and two after within-group noise disappears. Centering at the overall effect one gives deviations of minus one and plus one, not an increasingly precise normal estimate. More individuals within a group and more randomized groups address different variance components. The <a href="{% post_url 2023-10-08-wild-cluster-bootstrap-with-few-large-clusters %}">few-cluster sign test</a> uses a different model to obtain inference from a finite collection of large-cluster scores.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-hudgens_toward_2008" class="csl-entry" role="listitem">
Hudgens, Michael G, and M. Elizabeth Halloran. 2008. <span>“Toward Causal Inference With Interference.”</span> <em>Journal of the American Statistical Association</em> 103 (482): 832–42. <a href="https://doi.org/10.1198/016214508000000292">https://doi.org/10.1198/016214508000000292</a>.
</div>
<div id="ref-liu_large_2014" class="csl-entry" role="listitem">
Liu, Lan, and Michael G. Hudgens. 2014. <span>“Large Sample Randomization Inference of Causal Effects in the Presence of Interference.”</span> <em>Journal of the American Statistical Association</em> 109 (505): 288–301. <a href="https://doi.org/10.1080/01621459.2013.844698">https://doi.org/10.1080/01621459.2013.844698</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-19-causal-inference-from-a-single-social-network %}">Causal Inference from a Single Social Network</a> · Additional reading: <a href="{% post_url 2024-03-13-finite-sample-inference-under-interference %}">Finite-Sample Inference under Interference</a></p></nav>

</div>
