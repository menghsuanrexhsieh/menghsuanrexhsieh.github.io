---
layout: "post"
title: "Missing Network Links and Spillover Bias"
date: "2025-05-08"
tags: ["econometrics", "networks"]
excerpt: "Missing network links change both the measured number of neighbors and their measured treatment exposure."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2025/05/08/spillover-effects-with-missing-network-links/", "/2025/05/24/bias-from-missing-network-links/"]
---

<div class="note-content" markdown="0">

<p>Suppose treatment is randomized but the observed network omits some links. A person recorded as having no treated neighbors may in fact have several. Randomization identifies the assignment probabilities; it does not reveal these missing exposures. <span class="citation" data-cites="zhang_spillovers_2024"><a href="#ref-zhang_spillovers_2024" role="doc-biblioref">Zhang (2024)</a></span> expresses the observed response as a mixture over the true network and derives the implications for spillover estimates.</p>

<h3 data-note-section="1" id="10-520-the-latent-and-observed-regressions">1. The latent and observed regressions</h3>
<p>Let {% raw %}<span class="math inline">\(N_i^*\)</span>{% endraw %} be true degree and {% raw %}<span class="math inline">\(S_i^*\)</span>{% endraw %} the number of treated true neighbors. Write the structural conditional mean as {% raw %}<span class="math inline">\(m^*(d,s^*,n^*,z)\)</span>{% endraw %}. We instead observe degree {% raw %}<span class="math inline">\(N_i\)</span>{% endraw %} and treated-neighbor count {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %}.</p>

<div id="missing-link-mixture" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s randomized-treatment, network-unconfoundedness, nondifferential-missing-link, and common-distribution conditions,</p>

{% raw %}<div class="math display">\[
m(d,s,n,z)=\sum_{s^*,n^*}m^*(d,s^*,n^*,z)
P(S_i^*=s^*,N_i^*=n^*\mid S_i=s,N_i=n,Z_i=z).
\]</div>{% endraw %}

</div>
<p><em>Remark.</em> Under the assumptions of <a href="#missing-link-mixture">Theorem 1</a>, an own-treatment comparison holds the latent-exposure mixture fixed. A comparison between observed spillover cells changes that mixture. These two contrasts therefore need not have the same interpretation.</p>
<p>Iterated expectations gives a mixture in any case. The substantive step is using the assumptions to show that its component mean is still {% raw %}<span class="math inline">\(m^*\)</span>{% endraw %} after conditioning on the incomplete network.</p>

<h3 data-note-section="2" id="10-520-why-spillover-bias-has-no-automatic-sign">2. Why spillover bias has no automatic sign</h3>
<p>Let {% raw %}<span class="math inline">\(w_s(s^*,n^*)\)</span>{% endraw %} denote the mixture weights at observed exposure {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
m(d,s,n,z)-m(d,s&#x27;,n,z)
=\sum_{s^*,n^*}m^*(d,s^*,n^*,z)
(w_s(s^*,n^*)-w_{s&#x27;}(s^*,n^*)).
\]</div>{% endraw %}
<p>Each set of mixture weights sums to one. Their difference is signed and shifts weight across latent exposures and degrees, so the contrast need not equal the structural spillover at {% raw %}<span class="math inline">\((s,s&#x27;)\)</span>{% endraw %}. In particular, missing links need not attenuate every spillover estimate.</p>

<h3 data-note-section="3" id="10-520-what-randomization-identifies">3. What randomization identifies</h3>
<p>Suppose links are missing but not spuriously added, and treatment is independently assigned with common probability {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(N_i^*=n^*\)</span>{% endraw %} and observed degree {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, there are {% raw %}<span class="math inline">\(n^*-n\)</span>{% endraw %} missing neighbors. Nondifferential missingness leaves their treatment assignments independent Bernoulli draws, so</p>

{% raw %}<div class="math display">\[
S_i^*-S_i\mid N_i^*-N_i=n^*-n
\sim\operatorname{Binomial}(n^*-n,p).
\]</div>{% endraw %}
<p>Randomization supplies the binomial law of treatment among a given number of missing neighbors. The number itself remains unknown. This separates the known part of the mixture kernel from the unknown true-degree distribution.</p>

<p>Validation data, repeated measurement, or assumptions on link observation can identify that distribution. Recovering the response then requires enough distinct mixture equations, expressed as a rank or completeness condition. A written mixture equation alone does not establish that its components can be recovered.</p>

<h3 data-note-section="4" id="10-520-implications-for-exposure-choices">4. Implications for exposure choices</h3>
<p>Using the treated-neighbor share {% raw %}<span class="math inline">\(S_i/N_i\)</span>{% endraw %} introduces error in both numerator and denominator. Dropping individuals with observed degree zero may additionally select on true degree and the missingness process.</p>

<p>The <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">exposure-mapping estimator</a> presumes the stated exposure is sufficient for outcomes. When the network is incomplete, that presumption needs an argument about the latent network or an explicit sensitivity analysis. Random treatment assignment by itself cannot certify that the measured exposure is the causal one.</p>

<h3 data-note-section="5" id="10-520-factor-the-mixture-under-independent-assignment">5. Factor the mixture under independent assignment</h3>
<p>Fix observed degree {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and true degree {% raw %}<span class="math inline">\(n^*\geq n\)</span>{% endraw %}. Under independent treatment with common probability {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and link observation independent of treatment, the observed and missing neighbors’ treatment counts are independent binomials conditional on the neighbor sets:</p>

{% raw %}<div class="math display">\[
S\sim\operatorname{Binomial}(n,p),\qquad
B\triangleq S^*-S\sim\operatorname{Binomial}(n^*-n,p).
\]</div>{% endraw %}
<p>In this stronger simple design, {% raw %}<span class="math inline">\(S\)</span>{% endraw %} gives no additional information about {% raw %}<span class="math inline">\(N^*\)</span>{% endraw %} once {% raw %}<span class="math inline">\(N=n\)</span>{% endraw %} and the relevant baseline covariates are fixed. Write {% raw %}<span class="math inline">\(q_n(n^*)=P(N^*=n^*\mid N=n,Z=z)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
m(d,s,n,z)
=\sum_{n^*\geq n}q_n(n^*)
\sum_{b=0}^{n^*-n}&amp;m^*(d,s+b,n^*,z)\\
&amp;\times\binom{n^*-n}{b}p^b(1-p)^{n^*-n-b}.
\end{aligned}
\]</div>{% endraw %}
<p>The treatment design fixes the binomial kernel, while the observation model determines how much weight to put on each missing-neighbor count. If assignments or missingness follow a different model, this factorization must be derived again.</p>

<h3 data-note-section="6" id="10-520-linear-counts-need-not-attenuate-at-all">6. Linear counts need not attenuate at all</h3>
<p>Suppose the latent mean is {% raw %}<span class="math inline">\(m^*(d,s^*,n^*)=a+\tau d+\beta s^*+\gamma n^*\)</span>{% endraw %}. Applying the mixture formula gives</p>

{% raw %}<div class="math display">\[
m(d,s,n)=a+\tau d+\beta s
+\beta p(\mathbb{E}[N^*\mid N=n]-n)
+\gamma\mathbb{E}[N^*\mid N=n].
\]</div>{% endraw %}
<p>At fixed observed degree, the contrast between {% raw %}<span class="math inline">\(s+1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. Missing neighbors change the intercept of this conditional regression but not its slope in the observed count. This is one reason that a blanket attenuation claim is wrong.</p>

<p>If the latent response is instead {% raw %}<span class="math inline">\((s^*)^2\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(s+B)^2\mid n]
=s^2+2s\mathbb{E}[B\mid n]+\mathbb{E}[B^2\mid n],
\]</div>{% endraw %}
<p>and the observed one-neighbor contrast is {% raw %}<span class="math inline">\(2s+1+2\mathbb{E}[B\mid n]\)</span>{% endraw %}. It exceeds the latent contrast {% raw %}<span class="math inline">\(2s+1\)</span>{% endraw %} evaluated at the observed count whenever missing treated neighbors have positive expected number. Curvature turns the omitted exposure into an upward shift in the contrast.</p>

<p>These examples keep latent degree composition fixed across the observed exposure cells. Allowing that composition to change creates another contribution to the contrast. Its sign depends on the response and observation models, which is why the linear-count example cannot justify a general attenuation rule.</p>

<h3 data-note-section="7" id="10-520-shares-give-a-different-calculation">7. Shares give a different calculation</h3>
<p>Suppose true degree is positive and {% raw %}<span class="math inline">\(m^*=a+\beta S^*/N^*\)</span>{% endraw %}. For fixed observed degree {% raw %}<span class="math inline">\(n&gt;0\)</span>{% endraw %}, independent assignment gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}\left[\frac{S^*}{N^*}\,\middle|\,S=s,N=n\right]
=s\mathbb{E}[1/N^*\mid n]+p(1-n\mathbb{E}[1/N^*\mid n]).
\]</div>{% endraw %}
<p>For the observed treated share {% raw %}<span class="math inline">\(s/n\)</span>{% endraw %}, the attenuation factor is {% raw %}<span class="math inline">\(n\mathbb{E}[1/N^*\mid n]\in(0,1]\)</span>{% endraw %}, multiplying the structural slope. Thus attenuation does hold in this linear-share model. It follows from the ratio exposure and the stated independence assumptions; it does not extend automatically to the count and nonlinear examples above.</p>

<p>Observed degree zero needs separate handling: {% raw %}<span class="math inline">\(S/N\)</span>{% endraw %} is undefined there, yet the individual may have positive true degree and substantial exposure. Dropping these individuals changes the population under study and can distort a policy target.</p>

<h3 data-note-section="8" id="10-520-what-an-observation-model-can-identify">8. What an observation model can identify</h3>
<p>For illustration, suppose each true link is observed independently with known probability {% raw %}<span class="math inline">\(q&gt;0\)</span>{% endraw %}. Conditional on true degree, {% raw %}<span class="math inline">\(N\mid N^*=k\)</span>{% endraw %} is binomial{% raw %}<span class="math inline">\((k,q)\)</span>{% endraw %}. The probability-generating functions satisfy</p>

{% raw %}<div class="math display">\[
G_N(t)=\mathbb{E}[(1-q+qt)^{N^*}]
=G_{N^*}(1-q+qt).
\]</div>{% endraw %}
<p>For a known finite maximum degree, this is a triangular linear system in the true-degree probabilities, with diagonal entries {% raw %}<span class="math inline">\(q^k&gt;0\)</span>{% endraw %}. It is therefore algebraically invertible. If {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is unknown, one observed degree distribution generally cannot separate degree heterogeneity from observation probability without additional information.</p>

<p>For a maximum true degree of two, write {% raw %}<span class="math inline">\(a_j=P(N=j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u_j=P(N^*=j)\)</span>{% endraw %}. Binomial thinning gives</p>

{% raw %}<div class="math display">\[
a_2=q^2u_2,\qquad
a_1=qu_1+2q(1-q)u_2,\qquad
a_0=u_0+(1-q)u_1+(1-q)^2u_2.
\]</div>{% endraw %}
<p>Back substitution gives the explicit inverse</p>

{% raw %}<div class="math display">\[
u_2=\frac{a_2}{q^2},\qquad
u_1=\frac{a_1}{q}-\frac{2(1-q)a_2}{q^2},\qquad
u_0=1-u_1-u_2.
\]</div>{% endraw %}
<p>An error in the observed frequency {% raw %}<span class="math inline">\(a_2\)</span>{% endraw %} is amplified by {% raw %}<span class="math inline">\(q^{-2}\)</span>{% endraw %} and also enters the estimate of {% raw %}<span class="math inline">\(u_1\)</span>{% endraw %} with the opposite sign. Population probabilities generated by this observation model give a nonnegative inverse. Empirical frequencies can produce negative estimates, signaling sampling error or model incompatibility rather than negative latent probabilities.</p>

<p>The implied posterior used in the spillover mixture is then</p>

{% raw %}<div class="math display">\[
P(N^*=k\mid N=n)
=\frac{\binom{k}{n}q^n(1-q)^{k-n}u_k}{a_n},
\qquad a_n&gt;0.
\]</div>{% endraw %}
<p>The observation model now supplies the posterior weights needed in the spillover mixture. There are still two recovery problems: infer the missing-neighbor distribution, then infer responses at latent exposures. Solving the first does not ensure that the second system has enough independent equations.</p>

<p>Even with known {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, small diagonal entries can make inversion unstable for large degrees. Identification and statistical precision are separate issues. A validation sample or repeated network measurements can help estimate the observation law and constrain the latent distribution, but the rank and compatibility conditions must still be checked.</p>

<h3 data-note-section="9" id="10-520-own-treatment-effects-and-policy-evaluation">9. Own-treatment effects and policy evaluation</h3>
<p>Under randomized own treatment and the stipulated nondifferential observation mechanism, the mixture weights do not change with {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
m(1,s,n,z)-m(0,s,n,z)
=\sum_{s^*,n^*}w_s(s^*,n^*)
(m^*(1,s^*,n^*,z)-m^*(0,s^*,n^*,z)).
\]</div>{% endraw %}
<p>The own-treatment effect is therefore averaged with nonnegative weights summing to one. Changing {% raw %}<span class="math inline">\(s\)</span>{% endraw %} changes the exposure mixture itself, so a spillover contrast also compares different latent configurations. This is the source of the difference between the two comparisons.</p>

<p>For a policy that changes neighbor assignments, the latent distribution induced by that policy is needed to evaluate welfare. Substituting the observed network into the rule can miss both neighbors and their induced outcomes. The <a href="{% post_url 2024-06-10-network-policy-targeting-identification-and-known-propensities %}">network-policy notes</a> presume the exposure information needed by their identifying model; incomplete networks require this additional observation-model step.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-zhang_spillovers_2024" class="csl-entry" role="listitem">
Zhang, Lina. 2024. <span>“Spillovers of Program Benefits with Missing Network Links.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2009.09614">https://doi.org/10.48550/arXiv.2009.09614</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-02-18-network-formation-and-identification-with-missing-links %}">Network Formation and Identification with Missing Links</a> · Additional reading: <a href="{% post_url 2024-06-10-network-policy-targeting-identification-and-known-propensities %}">Network Policy Targeting: Identification and Known Propensities</a></p></nav>

</div>
