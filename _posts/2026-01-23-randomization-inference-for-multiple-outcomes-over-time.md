---
layout: "post"
title: "Randomization Inference for Multiple Outcomes over Time"
date: "2026-01-23"
tags: ["econometrics", "causal inference"]
excerpt: "A before-and-after comparison with many units still has only one common intervention date."
note_series: "Testing mechanisms"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Testing Mechanisms/stats.tex"
redirect_from: ["/2026/02/21/combining-outcome-statistics-in-randomization-tests/"]
---

<div class="note-content" markdown="0">

<p>Many units observed around one intervention date still share the same calendar comparison. To obtain a randomization distribution, one must specify which alternative assignments are regarded as possible. <span class="citation" data-cites="cattaneo_randomization_2024">(<a href="#ref-cattaneo_randomization_2024" role="doc-biblioref">Cattaneo, Diaz, and Titiunik 2024</a>)</span> studies short-window inference through a local assignment model and restrictions on the time variation of potential outcomes. The calculations below keep those two assumptions explicit.</p>

<h3 data-note-section="1" id="23-94-the-assignment-model-must-be-stated">1. The assignment model must be stated</h3>
<p>Choose a window with {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} periods on either side of the intervention. For unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(Z_i=1\)</span>{% endraw %} assign the post-period block to treatment and {% raw %}<span class="math inline">\(Z_i=0\)</span>{% endraw %} assign the pre-period block to treatment. The simple design considered here takes independent fair assignments, so every vector {% raw %}<span class="math inline">\(z\in\{0,1\}^n\)</span>{% endraw %} has probability {% raw %}<span class="math inline">\(2^{-n}\)</span>{% endraw %}.</p>

<p>The potential outcomes are fixed. The local stability condition equates each unit’s average potential outcome across the two blocks under each treatment state. The observed intervention corresponds to the assignment with every {% raw %}<span class="math inline">\(Z_i=1\)</span>{% endraw %}.</p>

<p>The hypothetical assignment law is an identifying assumption. For a synchronized reform, independent timing assignments across units do not arise from the calendar design itself.</p>

<h3 data-note-section="2" id="23-94-the-finite-sample-result">2. The finite-sample result</h3>
<div id="before-after-randomization" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the stipulated assignment mechanism, a sharp null imputes all outcomes needed to evaluate a statistic under every possible assignment. Comparing the observed statistic with that assignment distribution gives a finite-sample valid randomization test, with randomized treatment of ties giving exact size when needed. Inverting tests of constant additive effects produces a confidence set under that effect model.</p>

</div>
<p>An average-effect null leaves individual missing outcomes unspecified. It therefore does not supply the imputation used in this sharp-null proof.</p>

<h3 data-note-section="3" id="23-94-the-sign-flip-calculation">3. The sign-flip calculation</h3>
<p>Let {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %} be the difference between the observed post- and pre-block averages. Under a sharp zero-effect null, swapping the assigned treatment block changes unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %}’s treated-minus-control contrast from {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %} to {% raw %}<span class="math inline">\(-d_i\)</span>{% endraw %}. The reference statistic for the average contrast is therefore</p>

{% raw %}<div class="math display">\[
T(z)=\frac1n\sum_i(2z_i-1)d_i.
\]</div>{% endraw %}
<p>Its assignment expectation is zero and its variance is {% raw %}<span class="math inline">\(n^{-2}\sum_id_i^2\)</span>{% endraw %} under independent fair flips. Enumerating the sign vectors gives the exact reference distribution; random draws can approximate it with an appropriate Monte Carlo test construction.</p>

<p>For several outcomes, use the same assignment vector in each draw. The resulting maximum of standardized contrasts retains dependence between outcomes and can test their joint sharp null. Independent flips for different outcomes would correspond to a different experiment.</p>

<h3 data-note-section="4" id="23-94-why-the-window-matters">4. Why the window matters</h3>
<p>A shorter window can make the no-local-trend restriction more plausible but uses fewer observations to construct each block average. Placebo dates and pre-intervention comparisons can probe the restriction; they do not prove it at the actual intervention.</p>

<p>A contemporaneous shock can move all units in the same direction. Increasing their number need not remove its contribution to the calendar contrast. The finite-sample result is conditional on the assignment law and potential-outcome restrictions.</p>

<p>The same principle underlies the <a href="{% post_url 2024-03-30-the-hot-hand-statistics-for-streaks %}">streak permutation test</a>: exactness comes from a justified invariance or assignment law, not from the act of rearranging observations.</p>

<h3 data-note-section="5" id="23-94-distinguishing-calendar-contrasts-from-treatment-contrasts">5. Distinguishing calendar contrasts from treatment contrasts</h3>
<p>Write {% raw %}<span class="math inline">\(a_i(d)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b_i(d)\)</span>{% endraw %} for unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %}’s fixed pre- and post-block potential means under state {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Under assignment {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %}, observed block means are</p>

{% raw %}<div class="math display">\[
A_i=Z_i a_i(0)+(1-Z_i)a_i(1),
\qquad
B_i=Z_i b_i(1)+(1-Z_i)b_i(0).
\]</div>{% endraw %}
<p>The treated-minus-control contrast is</p>

{% raw %}<div class="math display">\[
C_i(Z_i)=(2Z_i-1)(B_i-A_i).
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(Z_i=1\)</span>{% endraw %} it is {% raw %}<span class="math inline">\(b_i(1)-a_i(0)\)</span>{% endraw %}; when {% raw %}<span class="math inline">\(Z_i=0\)</span>{% endraw %} it is {% raw %}<span class="math inline">\(a_i(1)-b_i(0)\)</span>{% endraw %}. Averaging over the fair assignment gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}_Z C_i(Z_i)
=\frac{1}{2}(b_i(1)-b_i(0)+a_i(1)-a_i(0)).
\]</div>{% endraw %}
<p>Thus the assignment expectation is the average of the two block-specific effects. Under the paper’s local stability condition {% raw %}<span class="math inline">\(a_i(d)=b_i(d)\)</span>{% endraw %}, it equals the post-block effect. In the realized all-post-treated assignment, {% raw %}<span class="math inline">\(C_i=B_i-A_i\)</span>{% endraw %}, so the estimator is the familiar calendar difference. Under hypothetical assignments, the treatment labels must travel with the contrast. Leaving the calendar sign fixed would define a different estimator.</p>

<h3 data-note-section="6" id="23-94-a-consequence-of-literal-local-stability">6. A consequence of literal local stability</h3>
<p>Exact stability for each unit and treatment state has a stronger consequence. If {% raw %}<span class="math inline">\(a_i(d)=b_i(d)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
C_i(Z_i)=b_i(1)-b_i(0)
\]</div>{% endraw %}
<p>for either assignment. Under a sharp zero-effect null, this is identically zero, and the observed pre- and post-block means must coincide unit by unit. The sign distribution of the mean contrast is then degenerate.</p>

<p>Without exact unit-level stability, fixed paired outcomes under a sharp null may have nonzero calendar differences, and the paired randomization calculation still applies under its assignment law. With exact stability, the zero-effect reference distribution is degenerate. These are different models: the assignment law justifies randomization probabilities, while time restrictions determine the effect represented by the calendar contrast.</p>

<h3 data-note-section="7" id="23-94-the-covariance-calculation-for-several-windows-or-outcomes">7. The covariance calculation for several windows or outcomes</h3>
<p>For a fixed collection of contrasts, let {% raw %}<span class="math inline">\(d_{i\ell}\)</span>{% endraw %} be unit {% raw %}<span class="math inline">\(i\)</span>{% endraw %}’s observed block difference for comparison {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(s_i=2Z_i-1\)</span>{% endraw %}. Under the sharp-null imputation, use</p>

{% raw %}<div class="math display">\[
T_\ell(s)=\frac1n\sum_i s_i d_{i\ell}.
\]</div>{% endraw %}
<p>Independent fair signs satisfy {% raw %}<span class="math inline">\(\mathbb{E} s_i=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E} s_is_j=\mathbf1\{i=j\}\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}_s(T_\ell,T_m)
=\frac1{n^2}\sum_i d_{i\ell}d_{im}.
\]</div>{% endraw %}
<p>The common signs retain the displayed covariance, including dependence from overlapping windows or associated outcomes. Separate signs for each comparison would remove these terms and change the joint reference distribution.</p>

<p>For prespecified positive scales {% raw %}<span class="math inline">\(v_\ell\)</span>{% endraw %}, one possible joint statistic is</p>

{% raw %}<div class="math display">\[
T_{\max}(s)=\max_\ell\frac{|T_\ell(s)|}{v_\ell}.
\]</div>{% endraw %}
<p>The scales may be fixed functions of the sharp-null outcome table, such as its sign-invariant second moments. If they depend on assignment, they must be recomputed under each assignment. Comparing the observed maximum with its joint randomization distribution tests the joint sharp null. It does not by itself establish strong familywise control for arbitrary configurations of true and false component nulls; that requires an appropriate multiple-testing argument.</p>

<h3 data-note-section="8" id="23-94-exact-enumeration-and-monte-carlo-ranks">8. Exact enumeration and Monte Carlo ranks</h3>
<p>Given the sharp-null table, the exact upper-tail p-value is the fraction of the {% raw %}<span class="math inline">\(2^n\)</span>{% endraw %} assignments whose statistic is at least as extreme as observed. For simulation, draw {% raw %}<span class="math inline">\(B\)</span>{% endraw %} assignments independently from the stated mechanism and use</p>

{% raw %}<div class="math display">\[
p_{\rm MC}=\frac{1+\sum_{b=1}^B\mathbf1\{T(Z^{(b)})\geq T(Z^{\rm obs})\}}{B+1}.
\]</div>{% endraw %}
<p>Under the null, the observed statistic and the simulated statistics form an exchangeable collection of {% raw %}<span class="math inline">\(B+1\)</span>{% endraw %} values. Ranking the observed value therefore gives a conservative test when ties are included. The added one prevents a zero p-value from a finite simulation. Increasing {% raw %}<span class="math inline">\(B\)</span>{% endraw %} improves simulation accuracy but supplies no new intervention dates.</p>

<p>For a constant additive candidate effect {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, subtract {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} from treated observations to impute a common untreated outcome table, then evaluate the sharp-null randomization test on that table. Inverting over {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} gives a confidence set under the constant-effect model. A null about only the average effect does not specify each missing potential outcome, so the same imputation is unavailable.</p>

<p>For the realized all-post-treated assignment, the additive-effect inversion has a particularly transparent form. Under the candidate null that every treatment effect equals {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, the adjusted paired differences are {% raw %}<span class="math inline">\(r_i(\delta)=d_i-\delta\)</span>{% endraw %}. With hypothetical fair signs {% raw %}<span class="math inline">\(s_i\)</span>{% endraw %}, the adjusted treated-minus-control statistic is</p>

{% raw %}<div class="math display">\[
T_s(\delta)=\frac1n\sum_i s_i(d_i-\delta),
\qquad
T_{\rm obs}(\delta)=\overline d-\delta.
\]</div>{% endraw %}
<p>The nonrandomized two-sided p-value is consequently</p>

{% raw %}<div class="math display">\[
p(\delta)=2^{-n}\sum_{s\in\{-1,1\}^n}
\mathbf1\left\{\left|\sum_i s_i(d_i-\delta)\right|
\geq\left|\sum_i(d_i-\delta)\right|\right\}.
\]</div>{% endraw %}
<p>Both sides of the comparison depend on the candidate {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. Keeping the reference values at {% raw %}<span class="math inline">\(\delta=0\)</span>{% endraw %} while changing only the observed contrast would invert a different test. At the true constant effect, the adjusted table satisfies the sharp zero-effect null, giving {% raw %}<span class="math inline">\(\Pr(p(\delta)\leq\alpha)\leq\alpha\)</span>{% endraw %} under the assignment model.</p>

<p>The sign distribution is discrete. For an absolute statistic, the all-positive and all-negative signs always tie with the observed value, so its exact p-value is at least {% raw %}<span class="math inline">\(2^{1-n}\)</span>{% endraw %}. More comparisons over outcomes or windows do not create more assignment patterns. They require a joint statistic calibrated on this same finite distribution.</p>

<p>These calculations describe the paired randomization experiment. If exact unit-level local stability is additionally imposed, the earlier degeneracy applies: under a true constant effect every {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %} equals that effect. Nontrivial observed variation must be reconciled with the interpretation of the stability restriction before using the procedure. The algebra gives a finite-sample guarantee conditional on a defensible experiment; it cannot supply the missing experiment for a common observational intervention date.</p>

<h3 data-note-section="9" id="23-94-window-selection-belongs-in-the-argument">9. Window selection belongs in the argument</h3>
<p>Choosing the window with the smallest p-value adds a search over tests. One can instead prespecify candidate windows and calibrate their maximum with the common assignments, or select the window using independent information. The individual level does not account for selection by the same outcomes.</p>

<p>Placebo dates can reveal calendar patterns, but they cannot determine what would have happened at the actual intervention date. A shared shock remains a possible explanation for a common movement. Applying the randomization calculation requires a substantive justification for its hypothetical assignment experiment.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-cattaneo_randomization_2024" class="csl-entry" role="listitem">
Cattaneo, Matias D., Carlos Diaz, and Rocio Titiunik. 2024. <span>“Randomization Inference for Before-and-After Studies with Multiple Units: An Application to a Criminal Procedure Reform in Uruguay.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2410.15477">https://doi.org/10.48550/arXiv.2410.15477</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-10-28-sharp-mechanism-bounds-average-effects-and-inference %}">Sharp Mechanism Bounds, Average Effects, and Inference</a></p></nav>

</div>
