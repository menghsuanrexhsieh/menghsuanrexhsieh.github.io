---
layout: "post"
title: "Taxable-Income Elasticities and What Kinks Identify"
date: "2025-01-18"
tags: ["econometrics", "bunching"]
excerpt: "A tax kink changes the marginal return to earnings while leaving the budget set continuous."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/01/18/the-taxable-income-model/", "/2025/02/02/taxable-income-elasticities/", "/2025/02/06/bunching-at-kinks/", "/2025/03/17/what-bunching-identifies/"]
---

<div class="note-content" markdown="0">

<p>A kink in a tax schedule changes the marginal return to earnings without creating a jump in consumption. In a frictionless model, people who would have chosen different earnings levels can all choose the kink. The observed mass therefore measures how much counterfactual income lies in a compressed interval. Turning that mass into an elasticity requires both a behavioral model for the interval’s width and information about its counterfactual density <span class="citation" data-cites="saez_taxpayers_2010 kleven_bunching_2016">(<a href="#ref-saez_taxpayers_2010" role="doc-biblioref">Saez 2010</a>; <a href="#ref-kleven_bunching_2016" role="doc-biblioref">Kleven 2016</a>)</span>.</p>

<h3 data-note-section="1" id="16-0-the-structural-calculation">1. The structural calculation</h3>
<p>A simple model isolates the behavioral part. Take quasi-linear utility</p>

{% raw %}<div class="math display">\[
u(c,z;\eta)=c-\frac{\eta^{-1/\varepsilon}z^{1+1/\varepsilon}}{1+1/\varepsilon},\qquad \varepsilon&gt;0.
\]</div>{% endraw %}
<p>Under a linear tax with net-of-tax rate {% raw %}<span class="math inline">\(r=1-t\)</span>{% endraw %}, the first-order condition gives {% raw %}<span class="math inline">\(z=\eta r^\varepsilon\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\partial\log z/\partial\log r=\varepsilon\)</span>{% endraw %}; quasi-linearity removes income effects in this illustration.</p>

<p>Let the marginal tax rate rise from {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(t_1\)</span>{% endraw %} at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(r_0&gt;r_1\)</span>{% endraw %}. Individuals bunch if their preferred earnings under the lower rate exceed {% raw %}<span class="math inline">\(K\)</span>{% endraw %} but their preferred earnings under the higher rate fall below it:</p>

{% raw %}<div class="math display">\[
\eta r_0^\varepsilon\ge K\ge\eta r_1^\varepsilon.
\]</div>{% endraw %}
<div id="kink-mass" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Writing counterfactual earnings under the lower rate as {% raw %}<span class="math inline">\(Z_0=\eta r_0^\varepsilon\)</span>{% endraw %}, the bunching interval is</p>

{% raw %}<div class="math display">\[
K\le Z_0\le K(r_0/r_1)^\varepsilon.
\]</div>{% endraw %}
<p>If its counterfactual density is {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %}, the bunching mass is</p>

{% raw %}<div class="math display">\[
B=\int_K^{K(r_0/r_1)^\varepsilon}h_0(z)\,dz.
\]</div>{% endraw %}
</div>
<p>The kink maps every counterfactual choice in this interval to the threshold. Integrating the counterfactual density over the interval gives the mass of the resulting atom.</p>

<h3 data-note-section="2" id="16-0-the-familiar-elasticity-formula">2. The familiar elasticity formula</h3>
<p>For a small rate change {% raw %}<span class="math inline">\(dt=t_1-t_0\)</span>{% endraw %}, a first-order expansion gives</p>

{% raw %}<div class="math display">\[
\Delta z\approx\varepsilon K\frac{dt}{1-t_0},\qquad
B\approx h_0(K)\varepsilon K\frac{dt}{1-t_0}.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(B/h_0(K)\)</span>{% endraw %} estimates a response width, which becomes an elasticity after dividing by {% raw %}<span class="math inline">\(K\,dt/(1-t_0)\)</span>{% endraw %}. For a finite kink under the isoelastic model, use the exact relation {% raw %}<span class="math inline">\(\varepsilon=\log(1+\Delta z/K)/\log(r_0/r_1)\)</span>{% endraw %}.</p>

<p>With heterogeneous elasticities, integrate the small-kink response width against the joint counterfactual density of earnings and elasticity. The resulting coefficient is the mean local compensated elasticity at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, under the smoothness and behavioral conditions supporting that local expansion.</p>

<h3 data-note-section="3" id="16-0-what-still-has-to-be-identified">3. What still has to be identified</h3>
<p>The density outside the kink cannot directly reveal the density over the interval that has been compressed. To recover it, one must impose extrapolation or distributional restrictions, or use comparable control observations. Smoothness without a quantitative restriction need not determine the missing area.</p>

<p>Measurement error or incomplete adjustment can also spread the observed peak. Its visible width need not equal the response interval’s width. The <a href="{% post_url 2025-04-24-bunching-identification-density-bounds-and-control-groups %}">identification bounds</a> state what information is needed about the missing density; the <a href="{% post_url 2025-09-07-estimating-elasticities-under-nonlinear-budget-sets %}">nonlinear-budget likelihood</a> specifies how latent bunching is spread into observed earnings.</p>

<h3 data-note-section="4" id="16-0-why-the-kink-compresses-an-interval-to-one-point">4. Why the kink compresses an interval to one point</h3>
<p>On a smooth budget segment with net rate {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, substitute {% raw %}<span class="math inline">\(c=rz+A\)</span>{% endraw %} into utility. Differentiating with respect to earnings gives</p>

{% raw %}<div class="math display">\[
\frac{\partial u}{\partial z}=r-\eta^{-1/\varepsilon}z^{1/\varepsilon},
\qquad
\frac{\partial^2u}{\partial z^2}
=-\frac1\varepsilon\eta^{-1/\varepsilon}z^{1/\varepsilon-1}&lt;0.
\]</div>{% endraw %}
<p>Strict concavity makes the first-order condition sufficient on that segment. At a downward kink in the budget slope, a maximum at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} requires the left derivative to be nonnegative and the right derivative to be nonpositive:</p>

{% raw %}<div class="math display">\[
r_0-\eta^{-1/\varepsilon}K^{1/\varepsilon}\geq0,
\qquad
r_1-\eta^{-1/\varepsilon}K^{1/\varepsilon}\leq0.
\]</div>{% endraw %}
<p>Solving for {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(K/r_0^\varepsilon\leq\eta\leq K/r_1^\varepsilon\)</span>{% endraw %}. Multiplication by {% raw %}<span class="math inline">\(r_0^\varepsilon\)</span>{% endraw %} gives the counterfactual earnings interval in the proposition. The bunching atom is the probability of this entire interval of types. It is not evidence that the latent type distribution itself has an atom.</p>

<p>The budget’s continuity matters. The virtual income on the upper segment must offset its lower slope at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Otherwise the utility comparison includes a discrete loss or gain and becomes a <a href="{% post_url 2025-02-25-bunching-at-notches-and-extensive-responses %}">notch problem</a>.</p>

<h3 data-note-section="5" id="16-0-the-finite-change-formula-and-its-approximation-error">5. The finite-change formula and its approximation error</h3>
<p>Let {% raw %}<span class="math inline">\(x=dt/r_0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(r_1=r_0(1-x)\)</span>{% endraw %}. The exact response width is</p>

{% raw %}<div class="math display">\[
\Delta z=K((1-x)^{-\varepsilon}-1).
\]</div>{% endraw %}
<p>Expanding the response width in the relative tax change gives</p>

{% raw %}<div class="math display">\[
\frac{\Delta z}{K}
=\varepsilon x+\frac{\varepsilon(\varepsilon+1)}2x^2+O(x^3).
\]</div>{% endraw %}
<p>The usual formula keeps only the first term. There is also an approximation in converting mass into width. If the counterfactual density is differentiable near {% raw %}<span class="math inline">\(K\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
B=h_0(K)\Delta z+\frac12h_0&#x27;(K)(\Delta z)^2+o((\Delta z)^2).
\]</div>{% endraw %}
<p>There are two approximations: linearizing the response to the tax change, and replacing the density over an interval by its endpoint value. Even under exact isoelastic preferences, density variation can make the second approximation inaccurate.</p>

<p>Combining the two expansions explicitly, with {% raw %}<span class="math inline">\(h=h_0(K)&gt;0\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[
\frac{B}{hKx}
=\varepsilon+x\left(
\frac{\varepsilon(\varepsilon+1)}2
+\frac{Kh_0&#x27;(K)}{2h}\varepsilon^2\right)+o(x).
\]</div>{% endraw %}
<p>The finite-tax-change term is positive for {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. The density-slope term can have either sign. Thus even if {% raw %}<span class="math inline">\(B\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h\)</span>{% endraw %} were known exactly, the usual first-order elasticity formula could overstate or understate the structural elasticity, depending on the density slope. A sampling standard error around that approximation does not account for this approximation error.</p>

<p>If the full counterfactual cdf {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} is known instead, recover {% raw %}<span class="math inline">\(z_0^*=H_0^{-1}(H_0(K)+B)\)</span>{% endraw %} and use {% raw %}<span class="math inline">\(\varepsilon=\log(z_0^*/K)/\log(r_0/r_1)\)</span>{% endraw %}. At a point with {% raw %}<span class="math inline">\(h_0(z_0^*)&gt;0\)</span>{% endraw %}, implicit differentiation gives</p>

{% raw %}<div class="math display">\[
\frac{\partial\varepsilon}{\partial B}
=\frac1{z_0^*h_0(z_0^*)\log(r_0/r_1)}.
\]</div>{% endraw %}
<p>The derivative is large when the tax change is small or the endpoint density is low. In either case, a modest error in estimated bunching mass can produce a large error in the recovered elasticity. The mass supplies an area; the density and tax change are needed to convert that area into a behavioral response.</p>

<p>For example, if the relevant counterfactual density really is constant at {% raw %}<span class="math inline">\(h\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B/h=0.1K\)</span>{% endraw %}, the exact elasticity is {% raw %}<span class="math inline">\(\log(1.1)/\log(r_0/r_1)\)</span>{% endraw %}. Replacing {% raw %}<span class="math inline">\(\log(1.1)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %} and the log rate ratio by {% raw %}<span class="math inline">\(dt/r_0\)</span>{% endraw %} are separate approximations. Their errors need not offset.</p>

<h3 data-note-section="6" id="16-0-which-elasticity-is-averaged-under-heterogeneity">6. Which elasticity is averaged under heterogeneity?</h3>
<p>Let {% raw %}<span class="math inline">\(e\)</span>{% endraw %} denote a heterogeneous elasticity and let {% raw %}<span class="math inline">\(h(z,e)\)</span>{% endraw %} be the joint density of counterfactual earnings and elasticity. For a small kink with {% raw %}<span class="math inline">\(x=dt/r_0\)</span>{% endraw %}, the response width for type {% raw %}<span class="math inline">\(e\)</span>{% endraw %} is approximately {% raw %}<span class="math inline">\(eKx\)</span>{% endraw %}. Integrating over the affected types gives</p>

{% raw %}<div class="math display">\[
B=\int\int_K^{K+eKx+o(x)}h(z,e)\,dz\,de.
\]</div>{% endraw %}
<p>Under domination and local smoothness allowing the expansion through the integral,</p>

{% raw %}<div class="math display">\[
\frac{B}{Kx}\longrightarrow\int e\,h(K,e)\,de
=h_Z(K)\,\mathbb{E}[e\mid Z_0=K].
\]</div>{% endraw %}
<p>The density normalization therefore produces a local average elasticity among individuals whose counterfactual earnings are at the kink. It does not generally produce the population average elasticity. Individuals far from {% raw %}<span class="math inline">\(K\)</span>{% endraw %} contribute no first-order bunching mass for a small change at that threshold.</p>

<p>In this illustration, quasi-linearity removes wealth effects, so the response has a compensated interpretation. With income effects, the budget adjustment and the compensated parameter must be specified explicitly before using the same formula.</p>

<h3 data-note-section="7" id="16-0-what-a-density-estimate-must-supply">7. What a density estimate must supply</h3>
<p>Suppose an empirical procedure estimates an excess mass {% raw %}<span class="math inline">\(\widehat B\)</span>{% endraw %} and a counterfactual density {% raw %}<span class="math inline">\(\widehat h_0(K)\)</span>{% endraw %}. Even in the small-kink approximation,</p>

{% raw %}<div class="math display">\[
\widehat\varepsilon\approx
\frac{r_0\widehat B}{K\,dt\,\widehat h_0(K)}.
\]</div>{% endraw %}
<p>Estimating the excess mass also requires estimating what would have occurred in its place. A smooth fitted curve supplies the missing density only under an extrapolation assumption. Thus uncertainty about the counterfactual affects both parts of the ratio.</p>

<p>The frictionless model conserves mass: the atom at the kink equals the probability removed from the counterfactual interval. Measurement error can spread the atom, and incomplete adjustment can reduce it. A chosen spike window need not recover {% raw %}<span class="math inline">\(B\)</span>{% endraw %} until those effects are modeled or bounded.</p>

<p>The <a href="{% post_url 2025-04-24-bunching-identification-density-bounds-and-control-groups %}">density-bound note</a> addresses the missing counterfactual with explicit restrictions. The <a href="{% post_url 2025-09-07-estimating-elasticities-under-nonlinear-budget-sets %}">likelihood note</a> instead specifies heterogeneity and measurement error jointly. These are different routes to the quantities in the elasticity formula.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kleven_bunching_2016" class="csl-entry" role="listitem">
Kleven, Henrik Jacobsen. 2016. <span>“Bunching.”</span> <em>Annual Review of Economics</em> 8 (1): 435–64. <a href="https://doi.org/10.1146/annurev-economics-080315-015234">https://doi.org/10.1146/annurev-economics-080315-015234</a>.
</div>
<div id="ref-saez_taxpayers_2010" class="csl-entry" role="listitem">
Saez, Emmanuel. 2010. <span>“Do Taxpayers Bunch at Kink Points?”</span> <em>American Economic Journal: Economic Policy</em> 2 (3): 180–212. <a href="https://doi.org/10.1257/pol.2.3.180">https://doi.org/10.1257/pol.2.3.180</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2025-02-25-bunching-at-notches-and-extensive-responses %}">Bunching at Notches and Extensive Responses</a></p></nav>

</div>
