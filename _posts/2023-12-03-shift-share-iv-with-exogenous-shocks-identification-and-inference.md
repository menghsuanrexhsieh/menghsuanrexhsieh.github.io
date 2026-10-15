---
layout: "post"
title: "Shift-Share IV with Exogenous Shocks: Identification and Inference"
date: "2023-12-03"
tags: ["econometrics", "instrumental variables"]
excerpt: "The shock-based argument for shift-share IV allows exposure shares to be correlated with outcome errors."
note_series: "Shift-share designs"
note_source: "assets/notes/Shift-Share - Old and New/ss-on.tex"
redirect_from: ["/2023/09/22/exogenous-shocks-and-shock-level-iv-equivalence/", "/2023/09/22/exogenous-shocks-in-shift-share-designs/", "/2023/10/16/shock-level-equivalence-for-shift-share-iv/", "/2023/12/03/shift-share-standard-errors-and-shock-level-inference/", "/2023/12/03/why-conventional-shift-share-standard-errors-fail/", "/2023/12/27/shock-level-standard-errors/", "/2024/01/20/proofs-of-shift-share-equivalence/"]
---

<div class="note-content" markdown="0">

<p>The same shift-share IV ratio admits a different identifying argument: hold exposure shares fixed and regard the aggregate shocks as quasi-random. Shares may then be correlated with outcome errors. <span class="citation" data-cites="borusyak_quasi-experimental_2022">(<a href="#ref-borusyak_quasi-experimental_2022" role="doc-biblioref">Borusyak, Hull, and Jaravel 2022</a>)</span> rewrites the location-level moment as a shock-level sum, making clear why shock dispersion matters for both consistency and inference.</p>

<h3 data-note-section="1" id="34-48-aggregate-the-moment-not-the-estimated-coefficient">1. Aggregate the moment, not the estimated coefficient</h3>
<p>Let {% raw %}<span class="math inline">\(e_\ell\)</span>{% endraw %} be observation weights, {% raw %}<span class="math inline">\(s_{\ell k}\ge0\)</span>{% endraw %} exposure shares, and {% raw %}<span class="math inline">\(B_\ell=\sum_ks_{\ell k}g_k\)</span>{% endraw %}. Residualize {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} against the same controls using weights {% raw %}<span class="math inline">\(e_\ell\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
s_k\triangleq\sum_\ell e_\ell s_{\ell k},\qquad
\overline Y_k^\perp\triangleq\frac{\sum_\ell e_\ell s_{\ell k}Y_\ell^\perp}{s_k},
\]</div>{% endraw %}
<p>and define {% raw %}<span class="math inline">\(\overline X_k^\perp\)</span>{% endraw %} similarly. Ignore shocks with zero aggregate exposure.</p>

<div id="shock-equivalence" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. The location-level IV ratio is exactly</p>

{% raw %}<div class="math display">\[
\widehat\beta_B
=\frac{\sum_\ell e_\ell B_\ell Y_\ell^\perp}
{\sum_\ell e_\ell B_\ell X_\ell^\perp}
=\frac{\sum_ks_kg_k\overline Y_k^\perp}
{\sum_ks_kg_k\overline X_k^\perp}.
\]</div>{% endraw %}
<p>The last ratio is weighted shock-level IV. Intercepts and shock-level controls must correspond to the exposure-weighted controls included in the original regression.</p>

</div>
<p>Switching the order of summation proves the identity for any data array. Identification requires assumptions on the shocks beyond this algebra.</p>

<h3 data-note-section="2" id="34-48-the-consistency-argument">2. The consistency argument</h3>
<p>Suppose the conditional mean of {% raw %}<span class="math inline">\(g_k\)</span>{% endraw %} is {% raw %}<span class="math inline">\(q_k&#x27;\mu\)</span>{% endraw %}, given exposures, shock-level controls, and aggregated outcome errors. Include {% raw %}<span class="math inline">\(\sum_ks_{\ell k}q_k\)</span>{% endraw %} among the location controls. The centered shocks {% raw %}<span class="math inline">\(\widetilde g_k=g_k-q_k&#x27;\mu\)</span>{% endraw %} then satisfy a conditional mean-zero restriction.</p>

<p>The IV numerator at the true coefficient becomes</p>

{% raw %}<div class="math display">\[
\sum_ks_k\widetilde g_k\overline\varepsilon_k.
\]</div>{% endraw %}
<p>If the centered shocks are conditionally uncorrelated, its conditional variance is</p>

{% raw %}<div class="math display">\[
\sum_ks_k^2\overline\varepsilon_k^2
\operatorname{Var}(g_k\mid\text{conditioning information}).
\]</div>{% endraw %}
<p>After normalizing {% raw %}<span class="math inline">\(\sum_ks_k=1\)</span>{% endraw %}, bounded moments and {% raw %}<span class="math inline">\(\sum_ks_k^2\to0\)</span>{% endraw %} make this variance vanish. Together with the paper’s control-estimation conditions and a first-stage denominator converging to a nonzero limit, this proves consistency.</p>

<p>The quantity {% raw %}<span class="math inline">\(1/\sum_ks_k^2\)</span>{% endraw %} is an effective number of shocks. Adding locations without dispersing aggregate exposure does not necessarily increase it. If shocks are correlated within groups, replace the dispersion requirement by one on aggregate exposure across independent shock groups, with the corresponding moment restrictions.</p>

<h3 data-note-section="3" id="34-48-heterogeneity-and-interpretation">3. Heterogeneity and interpretation</h3>
<p>In a simple reduced-form model {% raw %}<span class="math inline">\(Y_\ell=Y_\ell(0)+\sum_ks_{\ell k}g_k\theta_{\ell k}\)</span>{% endraw %}, centered independent shocks yield weights proportional to {% raw %}<span class="math inline">\(e_\ell s_{\ell k}^2\operatorname{Var}(g_k)\)</span>{% endraw %} for the regression on exposure. For an IV treatment effect, first-stage responses enter the weights as well. A convex-average interpretation therefore needs sign restrictions on those responses; it does not follow from nonnegative shares alone.</p>

<p>Conditioning on composition permits endogenous shares while placing the identifying restriction on shocks. This differs from <a href="{% post_url 2023-08-05-shift-share-iv-exogenous-shares-and-rotemberg-weights %}">share exogeneity</a>, and it changes which observations supply independent variation for the standard error.</p>

<h3 data-note-section="4" id="34-48-the-aggregation-calculation-with-controls">4. The aggregation calculation with controls</h3>
<p>For any residualized variable {% raw %}<span class="math inline">\(V_\ell^\perp\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_\ell e_\ell B_\ell V_\ell^\perp
=\sum_\ell e_\ell\sum_ks_{\ell k}g_kV_\ell^\perp
=\sum_kg_k\sum_\ell e_\ell s_{\ell k}V_\ell^\perp
=\sum_ks_kg_k\overline V_k^\perp.
\]</div>{% endraw %}
<p>The first-stage and reduced-form moments obey the same identity, so their ratio does too. Residualizing {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is unnecessary inside a moment with {% raw %}<span class="math inline">\(V^\perp\)</span>{% endraw %}, because the fitted part of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is in the control span and is orthogonal to {% raw %}<span class="math inline">\(V^\perp\)</span>{% endraw %} under the same weights.</p>

<p>If shock means depend on {% raw %}<span class="math inline">\(q_k\)</span>{% endraw %}, then their location-level mean is {% raw %}<span class="math inline">\(\sum_ks_{\ell k}q_k&#x27;\mu\)</span>{% endraw %}. Including the exposure-weighted {% raw %}<span class="math inline">\(q_k\)</span>{% endraw %} among location controls removes this term from the moment. An arbitrary location intercept only removes it when the relevant exposure sum is constant. Incomplete shares therefore require particular care with the exposure-sum control.</p>

<h3 data-note-section="5" id="34-48-why-a-shock-variance-includes-cross-location-products">5. Why a shock variance includes cross-location products</h3>
<p>Suppress weights for one display and write {% raw %}<span class="math inline">\(R_k=\sum_\ell s_{\ell k}\varepsilon_\ell\)</span>{% endraw %}. Conditional on baseline exposures and errors, the centered score is {% raw %}<span class="math inline">\(\sum_k\widetilde g_kR_k\)</span>{% endraw %}. Independent centered shocks give</p>

{% raw %}<div class="math display">\[
V=\sum_k\sigma_k^2R_k^2
=\sum_k\sigma_k^2\sum_{\ell,m}
 s_{\ell k}s_{mk}\varepsilon_\ell\varepsilon_m.
\]</div>{% endraw %}
<p>Squaring the aggregate retains every pair of locations exposed to the shock. With two equal exposures and residuals {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, the contribution is {% raw %}<span class="math inline">\(4\sigma_k^2u^2\)</span>{% endraw %}; squaring residuals separately gives {% raw %}<span class="math inline">\(2\sigma_k^2u^2\)</span>{% endraw %}. Opposite residual signs would instead give zero. The missing cross-products can therefore change the variance in either direction.</p>

<p>Equivalently, the location instruments have conditional covariance</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(B_\ell,B_m\mid\text{baseline data})
=\sum_ks_{\ell k}s_{mk}\sigma_k^2.
\]</div>{% endraw %}
<p>Similar exposures can link geographically distant locations through the same shocks. Spatial distance alone need not remove this covariance. The inference arguments in <span class="citation" data-cites="adao_shift-share_2019 borusyak_quasi-experimental_2022">(<a href="#ref-adao_shift-share_2019" role="doc-biblioref">Adão, Kolesár, and Morales 2019</a>; <a href="#ref-borusyak_quasi-experimental_2022" role="doc-biblioref">Borusyak, Hull, and Jaravel 2022</a>)</span> account for these shared contributions.</p>

<h3 data-note-section="6" id="34-48-from-dispersed-shocks-to-a-central-limit-theorem">6. From dispersed shocks to a central limit theorem</h3>
<div id="shock-level-inference" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Under the papers’ conditional many-shock CLT, moment, approximation-error, and variance-estimation conditions, with a stable nonzero first-stage denominator {% raw %}<span class="math inline">\(D=\sum_\ell e_\ell B_\ell^\perp X_\ell\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat V/V\to_p1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{\widehat\beta-\beta_0}{\sqrt{\widehat V}/|D|}
\Rightarrow \mathcal{N}(0,1).
\]</div>{% endraw %}
</div>
<p>A sufficient Lyapunov condition for the ideal independent-shock score, for some {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, is</p>

{% raw %}<div class="math display">\[
\frac{\sum_k|R_k|^{2+\eta}
\mathbb{E}[|\widetilde g_k|^{2+\eta}\mid\text{baseline data}]}
 {V^{1+\eta/2}}\longrightarrow0.
\]</div>{% endraw %}
<p>This condition controls large normalized contributions, rather than simply counting shocks. For equal aggregate shares {% raw %}<span class="math inline">\(s_k=1/K\)</span>{% endraw %}, the exposure concentration is {% raw %}<span class="math inline">\(\sum_ks_k^2=1/K\)</span>{% endraw %}. If one shock instead retains share {% raw %}<span class="math inline">\(c_0&gt;0\)</span>{% endraw %}, this concentration is at least {% raw %}<span class="math inline">\(c_0^2\)</span>{% endraw %}, however many tiny shocks are added. Increasing the number of locations exposed to that same shock cannot supply the missing independent variation.</p>

<p>Vanishing variance of the unnormalized score gives consistency under the first-stage conditions. A normal approximation also needs control after normalization by that variance. Exposure dispersion alone does not establish all required moment and nondegeneracy conditions.</p>

<p>A fourth-moment calculation links the no-dominant-shock condition to variance estimation. In the ideal conditional experiment, treat {% raw %}<span class="math inline">\(R_k\)</span>{% endraw %} as fixed and let the centered shocks be independent with variances {% raw %}<span class="math inline">\(\sigma_k^2&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde g_k^4]\leq C\sigma_k^4\)</span>{% endraw %}. The oracle variance estimate</p>

{% raw %}<div class="math display">\[
\widetilde V=\sum_kR_k^2\widetilde g_k^2
\]</div>{% endraw %}
<p>has conditional expectation {% raw %}<span class="math inline">\(V=\sum_kR_k^2\sigma_k^2\)</span>{% endraw %}. Independence yields</p>

{% raw %}<div class="math display">\[
\frac{\operatorname{Var}(\widetilde V)}{V^2}
\leq C\frac{\sum_kR_k^4\sigma_k^4}
                 {(\sum_kR_k^2\sigma_k^2)^2}
\leq C\frac{\max_k R_k^2\sigma_k^2}
                 {\sum_kR_k^2\sigma_k^2}.
\]</div>{% endraw %}
<p>When the largest shock’s variance share vanishes, Chebyshev’s inequality gives {% raw %}<span class="math inline">\(\widetilde V/V\to_p1\)</span>{% endraw %}. The displayed ratio also bounds the fourth-moment Lyapunov expression. Thus the same concentration calculation supports both the score CLT and the oracle variance estimate.</p>

<p>For the feasible residual aggregate {% raw %}<span class="math inline">\(\widehat R_k=R_k+\Delta_k\)</span>{% endraw %}, the variance difference is</p>

{% raw %}<div class="math display">\[
\widehat V-\widetilde V
=2\sum_k\widetilde g_k^2R_k\Delta_k
+\sum_k\widetilde g_k^2\Delta_k^2.
\]</div>{% endraw %}
<p>Cauchy–Schwarz bounds the first term in magnitude by {% raw %}<span class="math inline">\(2\sqrt{\widetilde V}\sqrt{\sum_k\widetilde g_k^2\Delta_k^2}\)</span>{% endraw %}. Thus a sufficient residual-estimation condition is {% raw %}<span class="math inline">\(\sum_k\widetilde g_k^2\Delta_k^2=o_p(V)\)</span>{% endraw %}, together with control of estimated shock means. Merely having each residual converge pointwise would not provide this variance-weighted bound.</p>

<p>Aggregation forms one {% raw %}<span class="math inline">\(R_k\)</span>{% endraw %} from all locations exposed to a shock before squaring. This retains their shared variation. The shocks, or independent groups of shocks, then supply the independent terms in the CLT and variance calculation.</p>

<h3 data-note-section="7" id="34-48-feasible-variance-and-correlated-shock-groups">7. Feasible variance and correlated shock groups</h3>
<p>Implementation uses exposure weights to aggregate residualized outcomes and treatments, followed by the corresponding weighted shock-level IV regression. Feasible score calculations substitute estimated residuals and centered shocks. Their total variance error must be negligible relative to {% raw %}<span class="math inline">\(V\)</span>{% endraw %}; pointwise convergence alone is insufficient.</p>

<p>If shocks are independent only across groups {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, the variance becomes</p>

{% raw %}<div class="math display">\[
V=\sum_h\operatorname{Var}\left(\sum_{k\in h}\widetilde g_kR_k
\mid\text{baseline data}\right).
\]</div>{% endraw %}
<p>The within-group covariance terms remain in this expression. Dispersion assumptions and variance estimation must therefore use independent groups as their units. Treating each shock separately would omit those terms.</p>

<p>Finally, {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is the IV first-stage moment. It equals a residualized instrument sum of squares only in a regression directly on that instrument. A Wald interval also requires {% raw %}<span class="math inline">\(D\)</span>{% endraw %} to stay away from zero at the appropriate scale. A null-imposed score test can avoid that division when inverted, connecting this issue to <a href="{% post_url 2024-09-07-weak-instruments-and-the-tf-critical-value %}">weak-instrument inference</a>. Neither standard-error construction repairs failure of the shock exogeneity condition.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-adao_shift-share_2019" class="csl-entry" role="listitem">
Adão, Rodrigo, Michal Kolesár, and Eduardo Morales. 2019. <span>“Shift-Share Designs: Theory and Inference*.”</span> <em>The Quarterly Journal of Economics</em> 134 (4): 1949–2010. <a href="https://doi.org/10.1093/qje/qjz025">https://doi.org/10.1093/qje/qjz025</a>.
</div>
<div id="ref-borusyak_quasi-experimental_2022" class="csl-entry" role="listitem">
Borusyak, Kirill, Peter Hull, and Xavier Jaravel. 2022. <span>“Quasi-Experimental Shift-Share Research Designs.”</span> Edited by Dirk Krueger. <em>The Review of Economic Studies</em> 89 (1): 181–213. <a href="https://doi.org/10.1093/restud/rdab030">https://doi.org/10.1093/restud/rdab030</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-08-05-shift-share-iv-exogenous-shares-and-rotemberg-weights %}">Shift-Share IV: Exogenous Shares and Rotemberg Weights</a></p></nav>

</div>
