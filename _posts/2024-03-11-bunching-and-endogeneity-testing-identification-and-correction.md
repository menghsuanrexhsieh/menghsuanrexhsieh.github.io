---
layout: "post"
title: "Bunching and Endogeneity: Testing, Identification, and Correction"
date: "2024-03-11"
tags: ["econometrics", "bunching"]
excerpt: "A mass point in a continuous treatment can reveal selection at the boundary."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/05/14/bunching-and-tests-for-endogeneity/", "/2025/05/14/bunching-endogeneity-and-continuous-treatment-identification/", "/2025/06/02/identification-with-bunching-in-a-continuous-treatment/", "/2025/06/22/bunching-and-endogeneity-testing-identification-and-correction/", "/2025/06/22/correcting-for-endogeneity-with-bunching/"]
---

<div class="note-content" markdown="0">

<p>At a boundary mass point, nearby observed treatment values can represent very different people. The atom may pool an entire range of latent choices, whereas positive treatment approaching the boundary selects a narrow range. The test in <span class="citation" data-cites="caetano_test_2015">(<a href="#ref-caetano_test_2015" role="doc-biblioref">Caetano 2015</a>)</span> compares their outcome means to detect a consequence of selection under maintained structural continuity.</p>

<h3 data-note-section="1" id="16-83-the-testable-implication">1. The testable implication</h3>
<p>Let {% raw %}<span class="math inline">\(Y=Y(T)\)</span>{% endraw %}, with a mass at {% raw %}<span class="math inline">\(T=0\)</span>{% endraw %} and positive treatment values arbitrarily close to zero. Conditional on covariates {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\Delta(x)\triangleq\lim_{t\downarrow0}\mathbb{E}[Y\mid T=t,X=x]
-\mathbb{E}[Y\mid T=0,X=x].
\]</div>{% endraw %}
<div id="bunching-exogeneity" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the paper’s support, continuity, and integrability conditions, {% raw %}<span class="math inline">\(\Delta(x)\)</span>{% endraw %} is identified. Conditional exogeneity of treatment, together with continuity of the structural mean response at zero, implies {% raw %}<span class="math inline">\(\Delta(x)=0\)</span>{% endraw %}. A nonzero discontinuity therefore rejects this joint implication.</p>

</div>
<p>The test rejects a joint implication of exogeneity and structural continuity. Interpreting the jump as evidence of endogeneity requires maintaining continuity, since a discontinuous causal effect could also create it.</p>

<h3 data-note-section="2" id="16-83-decompose-the-boundary-comparison">2. Decompose the boundary comparison</h3>
<p>For small {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y(t)\mid T=t,X=x]-\mathbb{E}[Y(0)\mid T=0,X=x]
\]</div>{% endraw %}
<p>Add and subtract the untreated potential-outcome mean among those with positive treatment. The first part is</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y(t)-Y(0)\mid T=t,X=x]
\]</div>{% endraw %}
<p>and the second part is</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y(0)\mid T=t,X=x]-\mathbb{E}[Y(0)\mid T=0,X=x].
\]</div>{% endraw %}
<p>Continuity and domination make the causal difference vanish as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %}. The second term remains: it compares untreated potential outcomes for people approaching the boundary with those pooled at the atom. This is the selection contrast.</p>

<p>For smoking and birthweight, for example, the maintained claim would be that an arbitrarily small amount of smoking has an arbitrarily small causal effect. The test then asks whether nonsmokers and people smoking arbitrarily little nevertheless have different expected birthweights after conditioning on the chosen controls.</p>

<h3 data-note-section="3" id="16-83-why-the-atom-is-informative">3. Why the atom is informative</h3>
<p>A censored latent choice {% raw %}<span class="math inline">\(T=\max(T^*,0)\)</span>{% endraw %} maps an entire range of latent values to the atom, while {% raw %}<span class="math inline">\(T=t&gt;0\)</span>{% endraw %} reveals {% raw %}<span class="math inline">\(T^*=t\)</span>{% endraw %}. The two groups can therefore have different unobservables even when observed treatment values are arbitrarily close.</p>

<p>A regression containing {% raw %}<span class="math inline">\(1\{T=0\}\)</span>{% endraw %} and a sufficiently flexible continuous function of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} estimates this boundary contrast under the required specification and support conditions. An inflexible polynomial can create an apparent jump by extrapolation error, so the continuous-side fit is part of the inferential problem.</p>

<h3 data-note-section="4" id="16-83-what-nonrejection-means">4. What nonrejection means</h3>
<p>A zero contrast checks only this implication at the boundary. Selection may occur elsewhere or cancel in the conditional mean at zero. Nonrejection therefore does not establish exogeneity throughout the treatment support.</p>

<p>Correcting selection requires more information than detecting its boundary implication. The jump does not identify a full causal response curve. The <a href="{% post_url 2024-03-16-treatment-effects-at-an-overtime-notch %}">boundary-density identification argument</a> obtains a local correction under additional transformation and deconvolution assumptions.</p>

<h3 data-note-section="5" id="16-83-seeing-selection-in-a-censored-normal-model">5. Seeing selection in a censored normal model</h3>
<p>Take {% raw %}<span class="math inline">\(T^*=a+V\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T=\max(T^*,0)\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(V\sim \mathcal{N}(0,\sigma^2)\)</span>{% endraw %}. Let the conditional outcome mean be {% raw %}<span class="math inline">\(\beta T+\gamma+\delta V\)</span>{% endraw %}. At a positive treatment value {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the latent residual is observed: {% raw %}<span class="math inline">\(V=t-a\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y\mid T=t]=\beta t+\gamma+\delta(t-a).
\]</div>{% endraw %}
<p>At the atom, {% raw %}<span class="math inline">\(V\leq-a\)</span>{% endraw %}. Integration of the normal density gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}[V\mid V\leq-a]
=-\sigma\frac{\phi(a/\sigma)}{\Phi(-a/\sigma)}.
\]</div>{% endraw %}
<p>For example, when {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}, the continuous-side limit is {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, while the atom mean is {% raw %}<span class="math inline">\(\gamma-\delta\sigma\sqrt{2/\pi}\)</span>{% endraw %}. Their difference is {% raw %}<span class="math inline">\(\delta\sigma\sqrt{2/\pi}\)</span>{% endraw %}. The treatment effect {% raw %}<span class="math inline">\(\beta t\)</span>{% endraw %} vanishes as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %}, but the selection difference remains. The mass point pools a whole half of the latent residual distribution; the continuous-side limit selects residuals close to zero.</p>

<p>The normal example illustrates the mechanism rather than an assumption required for the test. Censoring creates an observable boundary difference even when selection along the positive support would be difficult to distinguish from a causal slope.</p>

<h3 data-note-section="6" id="16-83-from-a-test-to-an-identified-correction">6. From a test to an identified correction</h3>
<p>The stronger model in <span class="citation" data-cites="caetano_correcting_2023">(<a href="#ref-caetano_correcting_2023" role="doc-biblioref">Caetano, Caetano, and Nielsen 2023</a>)</span> takes</p>

{% raw %}<div class="math display">\[
T^*=X&#x27;\pi+V,\quad T=\max(T^*,0),\quad
Y=\beta T+X&#x27;\gamma+U,
\qquad \mathbb{E}[U\mid T^*,X]=\delta V.
\]</div>{% endraw %}
<p>Define {% raw %}<span class="math inline">\(\psi(X)=\mathbb{E}[T^*\mid T^*\leq0,X]\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(T&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T^*=T\)</span>{% endraw %}; for {% raw %}<span class="math inline">\(T=0\)</span>{% endraw %}, only its truncated conditional mean is available. Consequently</p>

{% raw %}<div class="math display">\[
\mathbb{E}[T^*\mid T,X]=T+\psi(X)\mathbf1\{T=0\},
\]</div>{% endraw %}
<p>and iterated expectations yield</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y\mid T,X]
=(\beta+\delta)T+X&#x27;(\gamma-\delta\pi)
+\delta\psi(X)\mathbf1\{T=0\}.
\]</div>{% endraw %}
<div id="bunching-endogeneity-correction" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. If the latent-tail restrictions identify {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} and the displayed regressors have full rank, the conditional-mean model identifies {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. The paper supplies tail-symmetry and location-scale conditions for recovering the latent negative tail, together with conditions for estimation and inference.</p>

</div>
<p>In this parameterization, estimate the coefficient {% raw %}<span class="math inline">\(b_T\)</span>{% endraw %} on {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and the coefficient {% raw %}<span class="math inline">\(b_\psi\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\psi(X)\mathbf1\{T=0\}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\beta=b_T-b_\psi\)</span>{% endraw %}. Alternatively, regress on {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(H=T+\psi(X)\mathbf1\{T=0\}\)</span>{% endraw %}; the coefficient on {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is directly {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} and the coefficient on {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}.</p>

<p>Without the atom, {% raw %}<span class="math inline">\(H=T\)</span>{% endraw %}, so the regression cannot separate the two coefficients. The atom creates additional variation, and the tail assumption fixes its scale. The observed jump alone identifies neither the full control function nor that scale.</p>

<p>At a fixed covariate value, the model gives a direct relation between the boundary test and the correction. The positive-side slope is {% raw %}<span class="math inline">\(b_T=\beta+\delta\)</span>{% endraw %}, while the continuous-side limit minus the atom mean is</p>

{% raw %}<div class="math display">\[
\Delta(x)=-\delta\psi(x).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\psi(x)&lt;0\)</span>{% endraw %} is identified, these two features recover</p>

{% raw %}<div class="math display">\[
\delta=-\frac{\Delta(x)}{\psi(x)},\qquad
\beta=b_T+\frac{\Delta(x)}{\psi(x)}.
\]</div>{% endraw %}
<p>In the centered normal example, {% raw %}<span class="math inline">\(\psi=-\sigma\sqrt{2/\pi}\)</span>{% endraw %}, so the correction subtracts {% raw %}<span class="math inline">\(\Delta/(\sigma\sqrt{2/\pi})\)</span>{% endraw %} from the observed positive-side slope. The discontinuity supplies the size of a selection difference, while the latent-tail mean supplies the scale needed to turn that difference into a selection slope.</p>

<p>Without the tail restriction, the observed {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} identifies only the product {% raw %}<span class="math inline">\(-\delta\psi\)</span>{% endraw %}. Different pairs {% raw %}<span class="math inline">\((\delta,\psi)\)</span>{% endraw %} can produce the same boundary jump, and different values of {% raw %}<span class="math inline">\(\beta=b_T-\delta\)</span>{% endraw %} then fit the same positive-side slope. This is the precise missing equation that separates the endogeneity test from the identification result.</p>

<p>Under the maintained constant-{% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} model, covariate variation also imposes {% raw %}<span class="math inline">\(\Delta(x)/\psi(x)=-\delta\)</span>{% endraw %} wherever the ratio is defined. A correction estimated at one covariate value must agree with the others. That implication can diagnose the stronger specification, although satisfying it does not establish every latent-tail assumption. When {% raw %}<span class="math inline">\(|\psi(x)|\)</span>{% endraw %} is small, the division magnifies error in both the jump and the recovered tail mean.</p>

<h3 data-note-section="7" id="16-83-recovering-the-missing-negative-tail">7. Recovering the missing negative tail</h3>
<p>For an integrable latent variable,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[-T^*\mathbf1\{T^*\leq0\}\mid X=x]
=\int_{-\infty}^0F_{T^*\mid X}(t\mid x)\,dt.
\]</div>{% endraw %}
<p>To derive this, write the negative part as {% raw %}<span class="math inline">\((-T^*)_+=\int_0^\infty\mathbf1\{T^*&lt;-s\}\,ds\)</span>{% endraw %} and interchange the nonnegative integral and expectation. Therefore</p>

{% raw %}<div class="math display">\[
\psi(x)=-\frac{\int_{-\infty}^0F_{T^*\mid X}(t\mid x)\,dt}
 {\Pr(T=0\mid X=x)}.
\]</div>{% endraw %}
<p>The atom probability gives the denominator. The numerator also depends on how far the latent choices extend below zero, information removed by censoring.</p>

<p>In the normal location model with {% raw %}<span class="math inline">\(a=x&#x27;\pi\)</span>{% endraw %}, the calculation above gives</p>

{% raw %}<div class="math display">\[
\psi(x)=a-\sigma\frac{\phi(a/\sigma)}{\Phi(-a/\sigma)}.
\]</div>{% endraw %}
<p>This is negative, as a conditional mean of a nonpositive latent variable must be. A specified family can identify its parameters from the uncensored portion and the censoring probabilities under suitable support and rank conditions. Symmetry restrictions provide another route. Neither extrapolation follows from the existence of a mass point itself.</p>

<h3 data-note-section="8" id="16-83-why-the-first-stage-enters-the-standard-error">8. Why the first stage enters the standard error</h3>
<p>Use {% raw %}<span class="math inline">\(W=(T,X&#x27;,H)&#x27;\)</span>{% endraw %} with coefficient vector {% raw %}<span class="math inline">\(\vartheta=(\beta,(\gamma-\delta\pi)&#x27;,\delta)&#x27;\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(Q=\mathbb{E}[WW&#x27;]\)</span>{% endraw %}. Replacing {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\widehat\psi\)</span>{% endraw %} changes the last regressor by {% raw %}<span class="math inline">\(\mathbf1\{T=0\}(\widehat\psi-\psi)\)</span>{% endraw %}. At the true coefficients, the resulting regression error is</p>

{% raw %}<div class="math display">\[
\varepsilon-\delta\mathbf1\{T=0\}(\widehat\psi-\psi).
\]</div>{% endraw %}
<p>Under the rate and empirical-process conditions controlling the other product terms, the coefficient expansion contains</p>

{% raw %}<div class="math display">\[
Q^{-1}\frac1{\sqrt n}\sum_iW_i\varepsilon_i
-\delta Q^{-1}\sqrt n\,
\mathbb{E}[W\mathbf1\{T=0\}(\widehat\psi-\psi)].
\]</div>{% endraw %}
<p>The first-stage and outcome terms can be correlated. Treating the generated regressor as known discards the second term from the expansion. A bootstrap must re-estimate both stages, with conditions that justify their joint approximation.</p>

<p>The correction therefore needs a conditional-mean model, identification of the unobserved tail, and a rank condition. The boundary test checks a weaker observable implication. Neither rejection nor nonrejection supplies those additional assumptions.</p>

<h3 id="16-83-a-sufficient-continuity-condition-for-the-boundary-comparison">A sufficient continuity condition for the boundary comparison</h3>
<p>The vanishing causal term in Section 2 concerns changing conditional populations, so pointwise continuity of each response curve alone should not be substituted for its integrability condition. One transparent sufficient condition is</p>
<p>{% raw %}<div class="math display">\[|Y(t)-Y(0)|\le tH\quad(0&lt;t&lt;t_0),\qquad
\sup_{0&lt;t&lt;t_0}\mathbb E[H\mid T=t,X=x]&lt;\infty,\]</div>{% endraw %}</p>
<p>for a nonnegative envelope {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Then the absolute causal contribution is bounded by {% raw %}<span class="math inline">\(t\mathbb E[H\mid T=t,X=x]\to0\)</span>{% endraw %}. Conditional exogeneity gives another direct route: it replaces this conditional expectation by the common potential-outcome mean, to which dominated continuity can be applied. Either argument states explicitly why approaching the observed boundary removes the causal difference while allowing the selection contrast to remain.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-caetano_test_2015" class="csl-entry" role="listitem">
Caetano, Carolina. 2015. <span>“A Test of Exogeneity Without Instrumental Variables in Models With Bunching.”</span> <em>Econometrica</em> 83 (4): 1581–1600. <a href="https://doi.org/10.3982/ECTA11231">https://doi.org/10.3982/ECTA11231</a>.
</div>
<div id="ref-caetano_correcting_2023" class="csl-entry" role="listitem">
Caetano, Carolina, Gregorio Caetano, and Eric Nielsen. 2023. <span>“Correcting for Endogeneity in Models with Bunching.”</span> <em>Journal of Business &amp; Economic Statistics</em>, September, 1–13. <a href="https://doi.org/10.1080/07350015.2023.2252471">https://doi.org/10.1080/07350015.2023.2252471</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-02-03-bunching-identification-density-bounds-and-control-groups %}">Bunching Identification: Density Bounds and Control Groups</a> · Next: <a href="{% post_url 2024-03-16-treatment-effects-at-an-overtime-notch %}">Treatment Effects at an Overtime Notch</a></p></nav>

</div>
