---
layout: "post"
title: "Estimating Elasticities under Nonlinear Budget Sets"
date: "2024-06-10"
tags: ["econometrics", "bunching"]
excerpt: "An observed bunching peak can spread across the kink because earnings are measured with error or choices are imperfectly adjusted."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/09/07/estimating-elasticities-under-nonlinear-budget-sets/", "/2025/09/07/nonparametric-estimation-of-the-eti/", "/2025/09/27/the-econometrics-of-nonlinear-budget-sets/"]
---

<div class="note-content" markdown="0">

<p>Latent bunchers all choose the kink, yet their observed earnings may form a broad peak because of measurement error or imperfect adjustment. Counting observations in a chosen window then misses some bunchers and includes some nonbunchers. The likelihood approach in <span class="citation" data-cites="aronsson_maximum_2024"><a href="#ref-aronsson_maximum_2024" role="doc-biblioref">Aronsson, Jenderny, and Lanot (2024)</a></span> models the peak and both tails together to recover behavioral and error parameters.</p>

<h3 data-note-section="1" id="16-188-convolve-the-optimal-choice-distribution">1. Convolve the optimal-choice distribution</h3>
<p>Let optimal earnings {% raw %}<span class="math inline">\(Z^*\)</span>{% endraw %} have continuous density {% raw %}<span class="math inline">\(f_-\)</span>{% endraw %} below {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, continuous density {% raw %}<span class="math inline">\(f_+\)</span>{% endraw %} above {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and an atom of mass {% raw %}<span class="math inline">\(B\)</span>{% endraw %} at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Suppose observed earnings are {% raw %}<span class="math inline">\(Z=Z^*E\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(E&gt;0\)</span>{% endraw %} is independent with density {% raw %}<span class="math inline">\(g\)</span>{% endraw %}.</p>

<div id="bunching-convolution" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. For {% raw %}<span class="math inline">\(z&gt;0\)</span>{% endraw %}, the observed density is</p>

{% raw %}<div class="math display">\[
h(z)=\frac{B}{K}g(z/K)
+\int_0^Kf_-(u)\frac{g(z/u)}u\,du
+\int_K^\infty f_+(u)\frac{g(z/u)}u\,du.
\]</div>{% endraw %}
</div>
<p>Conditional on {% raw %}<span class="math inline">\(Z^*=u\)</span>{% endraw %}, the density of {% raw %}<span class="math inline">\(uE\)</span>{% endraw %} is {% raw %}<span class="math inline">\(g(z/u)/u\)</span>{% endraw %}. Integrating this conditional density over the distribution of {% raw %}<span class="math inline">\(Z^*\)</span>{% endraw %} gives the formula. The atom contributes {% raw %}<span class="math inline">\(B g(z/K)/K\)</span>{% endraw %}, not an integral with a continuous density. Its Jacobian is {% raw %}<span class="math inline">\(1/K\)</span>{% endraw %}.</p>

<p>The formula combines three sources of observations: a blurred atom and two blurred continuous regions. They overlap in the observed density, even though they are distinct in the latent choice distribution.</p>

<h3 data-note-section="2" id="16-188-what-the-likelihood-adds">2. What the likelihood adds</h3>
<p>A log-linear labor-supply model gives optimal earnings on a linear budget segment as {% raw %}<span class="math inline">\(Z^*=\eta(1-t)^\varepsilon\)</span>{% endraw %}. Distributional assumptions on {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} determine the continuous components and the kink mass. A model for {% raw %}<span class="math inline">\(E\)</span>{% endraw %} determines how those components are blurred together.</p>

<p>For example, {% raw %}<span class="math inline">\(\log E\sim \mathcal{N}(-\sigma_E^2/2,\sigma_E^2)\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\mathbb{E}[E]=1\)</span>{% endraw %}. The variance is positive; the negative sign belongs only in the mean adjustment. Likelihood estimation then uses the density above to estimate behavioral and error parameters jointly, subject to identification of the chosen specification.</p>

<p>The assumptions make the likelihood model estimable only when its parameter-to-distribution map is identified. They provide restrictions on heterogeneity and error; they do not overturn <a href="{% post_url 2024-02-03-bunching-identification-density-bounds-and-control-groups %}">nonidentification under unrestricted heterogeneity</a>.</p>

<h3 data-note-section="3" id="16-188-extending-beyond-one-kink">3. Extending beyond one kink</h3>
<p>For a piecewise-linear budget, each segment has a net wage and a virtual income. A monotone scalar heterogeneity index partitions individuals into segment interiors and kink points. Expected labor supply is obtained by integrating the segment-specific choices over those regions and adding kink masses.</p>

<p>The representation in <span class="citation" data-cites="blomquist_nonparametric_2002 blomquist_econometrics_2023"><a href="#ref-blomquist_nonparametric_2002" role="doc-biblioref">Blomquist and Newey (2002)</a> and <a href="#ref-blomquist_econometrics_2023" role="doc-biblioref">Blomquist, Hausman, and Newey (2023)</a></span> reorganizes these integrals into a baseline final-segment expectation plus adjacent-segment corrections. The reason is telescoping: each interior boundary adds the contribution of the segment below it and subtracts the continuation of the segment above it.</p>

<p>The partition requires monotonicity in the type index and integrability. Zero-hours corners need an additional region unless excluded. Since type determines the chosen segment, the observed marginal rate is selected together with earnings; inserting it in a linear labor-supply regression need not recover this optimization model.</p>

<h3 data-note-section="4" id="16-188-checking-that-the-convolution-is-a-density">4. Checking that the convolution is a density</h3>
<p>For any fixed {% raw %}<span class="math inline">\(u&gt;0\)</span>{% endraw %}, substitution {% raw %}<span class="math inline">\(e=z/u\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\int_0^\infty\frac1u g(z/u)\,dz
=\int_0^\infty g(e)\,de=1.
\]</div>{% endraw %}
<p>Integrating the three components of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} therefore yields</p>

{% raw %}<div class="math display">\[
\int_0^\infty h(z)\,dz
=B+\int_0^Kf_-(u)\,du+\int_K^\infty f_+(u)\,du=1.
\]</div>{% endraw %}
<p>Normalization checks the atom term and every Jacobian simultaneously. Omitting {% raw %}<span class="math inline">\(1/u\)</span>{% endraw %} would generally change the integrated mass and misweight observations associated with different latent earnings levels.</p>

<p>In logs, the convolution is simpler. Let {% raw %}<span class="math inline">\(L=\log Z\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L^*=\log Z^*\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(E_L=\log E\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(L=L^*+E_L\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is the density of {% raw %}<span class="math inline">\(E_L\)</span>{% endraw %}, the kink atom contributes {% raw %}<span class="math inline">\(Bq(l-\log K)\)</span>{% endraw %} to the log-earnings density. Returning to levels divides that density by {% raw %}<span class="math inline">\(z\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(g(e)=q(\log e)/e\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac Bz q(\log z-\log K)=\frac BK g(z/K),
\]</div>{% endraw %}
<p>The change from logs back to levels therefore gives exactly the earlier atom term.</p>

<h3 data-note-section="5" id="16-188-deriving-the-continuous-components-from-latent-heterogeneity">5. Deriving the continuous components from latent heterogeneity</h3>
<p>Suppose {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} has density {% raw %}<span class="math inline">\(f_\eta\)</span>{% endraw %}, with net rates {% raw %}<span class="math inline">\(r_0&gt;r_1\)</span>{% endraw %} and elasticity {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. The types choosing below the kink satisfy {% raw %}<span class="math inline">\(\eta&lt;K/r_0^\varepsilon\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(Z^*=\eta r_0^\varepsilon\)</span>{% endraw %}. A change of variables gives</p>

{% raw %}<div class="math display">\[
f_-(u)=\frac1{r_0^\varepsilon}f_\eta(u/r_0^\varepsilon),
\qquad 0&lt;u&lt;K.
\]</div>{% endraw %}
<p>Above the kink the corresponding density is</p>

{% raw %}<div class="math display">\[
f_+(u)=\frac1{r_1^\varepsilon}f_\eta(u/r_1^\varepsilon),
\qquad u&gt;K,
\]</div>{% endraw %}
<p>and the bunching mass is</p>

{% raw %}<div class="math display">\[
B=F_\eta(K/r_1^\varepsilon)-F_\eta(K/r_0^\varepsilon).
\]</div>{% endraw %}
<p>One type distribution and one elasticity determine the lower branch, upper branch, and mass at the kink. Estimating them as unrelated density components would remove the restrictions that connect the likelihood to the behavioral model.</p>

<p>Error variance affects both tails as well as the peak. Their joint behavior may distinguish a larger latent bunching mass from greater dispersion under the chosen specification. Parameter identification requires that distinction in the likelihood map; convergence of an optimizer does not establish it.</p>

<h3 data-note-section="6" id="16-188-a-likelihood-score-identity-explains-how-observations-are-assigned">6. A likelihood-score identity explains how observations are assigned</h3>
<p>Write the observed density as {% raw %}<span class="math inline">\(h(z)=h_0(z)+h_-(z)+h_+(z)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} is the blurred atom. For a differentiable parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, whenever the components are positive,</p>

{% raw %}<div class="math display">\[
\partial_\theta\log h(z)
=\sum_{j\in\{0,-,+\}}w_j(z)\,
\partial_\theta\log h_j(z),
\qquad
w_j(z)=\frac{h_j(z)}{h(z)}.
\]</div>{% endraw %}
<p>The component weights are posterior probabilities and sum to one. A near-kink observation may come from a continuous branch, and a latent buncher may be observed far from the kink. The likelihood uses these probabilities instead of assigning every observation in a window to the atom.</p>

<p>This identity follows by differentiating the sum and dividing by {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Differentiating the component integrals additionally requires domination and handling parameter-dependent cutoffs consistently. If a parameter changes the latent bunching thresholds, its effect on the mass and continuous regions must both be included; holding one part fixed would give the wrong score.</p>

<p>The moving-boundary terms can be checked in latent-type coordinates. Keep {% raw %}<span class="math inline">\(K\)</span>{% endraw %} fixed, set {% raw %}<span class="math inline">\(a=K/r_0^\varepsilon\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=K/r_1^\varepsilon\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(k(z,u)=g(z/u)/u\)</span>{% endraw %}. The density is equivalently</p>

{% raw %}<div class="math display">\[
\begin{aligned}
h(z)={}&amp;\int_0^a f_\eta(v)k(z,vr_0^\varepsilon)\,dv
+k(z,K)\int_a^b f_\eta(v)\,dv\\
&amp;+\int_b^\infty f_\eta(v)k(z,vr_1^\varepsilon)\,dv.
\end{aligned}
\]</div>{% endraw %}
<p>Differentiate with respect to a behavioral parameter that moves {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %}, under conditions justifying differentiation of the integrals. The boundary terms from the lower region, atom, and upper region are, respectively,</p>

{% raw %}<div class="math display">\[
f_\eta(a)k(z,K)a&#x27;,\qquad
k(z,K)(f_\eta(b)b&#x27;-f_\eta(a)a&#x27;),\qquad
-f_\eta(b)k(z,K)b&#x27;.
\]</div>{% endraw %}
<p>They cancel. At either boundary, the smooth segment’s chosen earnings equal {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, so its measurement-error kernel agrees with the atom’s kernel. Mass moving between adjacent regions cannot create or destroy observed probability by itself. The remaining derivative comes from how choices, heterogeneity, or error densities change inside the regions.</p>

<p>For the score, all three moving-boundary terms must be considered together. Keeping only the derivative of the bunching mass gives the wrong result. Their cancellation here follows from matching kernels at the boundaries; moving-boundary terms cannot be omitted in general.</p>

<p>The same elasticity changes choices along the continuous branches and changes which types bunch. The cancellation shows how the likelihood combines these movements without creating or losing probability at a boundary.</p>

<p>For {% raw %}<span class="math inline">\(\log E\sim \mathcal{N}(-\sigma_E^2/2,\sigma_E^2)\)</span>{% endraw %}, the normal moment-generating function gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}[E]=e^{-\sigma_E^2/2+\sigma_E^2/2}=1,
\qquad
\operatorname{Var}(E)=e^{\sigma_E^2}-1.
\]</div>{% endraw %}
<p>Mean-one multiplicative error preserves {% raw %}<span class="math inline">\(\mathbb{E}[Z\mid Z^*]=Z^*\)</span>{% endraw %}, but its median is {% raw %}<span class="math inline">\(e^{-\sigma_E^2/2}&lt;1\)</span>{% endraw %}. The visible peak need not be centered exactly at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} in levels. Mean preservation does not imply preservation of modes or quantiles.</p>

<h3 data-note-section="7" id="16-188-telescoping-across-several-budget-segments">7. Telescoping across several budget segments</h3>
<p>A simple three-region representation shows the telescoping argument. Suppose a scalar type {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} selects choice functions {% raw %}<span class="math inline">\(z_1(\eta),z_2(\eta),z_3(\eta)\)</span>{% endraw %} on regions separated by thresholds {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. Then, pointwise,</p>

{% raw %}<div class="math display">\[
Z^*(\eta)=z_3(\eta)
+(z_2(\eta)-z_3(\eta))\mathbf1\{\eta\leq b\}
+(z_1(\eta)-z_2(\eta))\mathbf1\{\eta\leq a\}.
\]</div>{% endraw %}
<p>Below {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, both corrections apply and leave {% raw %}<span class="math inline">\(z_1\)</span>{% endraw %}; between {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, only the first applies and leaves {% raw %}<span class="math inline">\(z_2\)</span>{% endraw %}; above {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, neither applies. Integrating gives a final-region baseline plus adjacent-region corrections.</p>

<p>Kink regions can be included by inserting a constant choice {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %} over the corresponding interval of types. Their integrals are {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %} times the interval’s probability mass. Zero-hours corners require another region unless ruled out. The general nonlinear-budget representations organize these same cancellations under their monotonicity and integrability conditions.</p>

<p>Type determines the chosen segment, and hence the observed marginal rate. Treating that rate as externally assigned drops this selection step. Integrating the optimization model retains it.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-aronsson_maximum_2024" class="csl-entry" role="listitem">
Aronsson, Thomas, Katharina Jenderny, and Gauthier Lanot. 2024. <span>“A Maximum Likelihood Bunching Estimator of the Elasticity of Taxable Income.”</span> <em>Journal of Applied Econometrics</em> 39 (1): 200–216. <a href="https://doi.org/10.1002/jae.3015">https://doi.org/10.1002/jae.3015</a>.
</div>
<div id="ref-blomquist_econometrics_2023" class="csl-entry" role="listitem">
Blomquist, Sören, Jerry A. Hausman, and Whitney K. Newey. 2023. <span>“The Econometrics of Nonlinear Budget Sets.”</span> <em>Annual Review of Economics</em> 15 (1): 287–306. <a href="https://doi.org/10.1146/annurev-economics-082222-065323">https://doi.org/10.1146/annurev-economics-082222-065323</a>.
</div>
<div id="ref-blomquist_nonparametric_2002" class="csl-entry" role="listitem">
Blomquist, Soren, and Whitney Newey. 2002. <span>“Nonparametric Estimation with Nonlinear Budget Sets.”</span> <em>Econometrica</em> 70 (6): 2455–80. <a href="https://doi.org/10.1111/j.1468-0262.2002.00445.x">https://doi.org/10.1111/j.1468-0262.2002.00445.x</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-16-treatment-effects-at-an-overtime-notch %}">Treatment Effects at a Bunching Boundary</a></p></nav>

</div>
