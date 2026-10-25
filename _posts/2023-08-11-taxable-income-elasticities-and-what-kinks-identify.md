---
layout: "post"
title: "Taxable-Income Elasticities and What Kinks Identify"
date: "2023-08-11"
tags: ["econometrics", "bunching"]
excerpt: "A higher marginal tax rate above an earnings threshold can make the threshold itself optimal for many taxpayers."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/01/18/taxable-income-elasticities-and-what-kinks-identify/", "/2025/01/18/the-taxable-income-model/", "/2025/02/02/taxable-income-elasticities/", "/2025/02/06/bunching-at-kinks/", "/2025/03/17/what-bunching-identifies/"]
---

<div class="note-content" markdown="0">

<p>A higher marginal tax rate above an earnings threshold can make the threshold itself optimal for many taxpayers. The size of this pile-up depends on how far their earnings move and how many people would otherwise have earned just above the threshold. <span class="citation" data-cites="saez_taxpayers_2010">Saez (<a href="#ref-saez_taxpayers_2010" role="doc-biblioref">2010</a>)</span> uses this relationship to recover a taxable-income elasticity from bunching at a tax kink. This note derives the earnings response, the finite-change formula, and the local interpretation when elasticities differ across people.</p>

<div id="16-0-the-structural-calculation">

</div>
<div id="16-0-why-the-kink-compresses-an-interval-to-one-point">

</div>
<div id="kink-mass">

</div>
<h3 data-note-section="1" id="16-0-preferences-and-a-continuous-tax-schedule">1. Preferences and a continuous tax schedule</h3>
<p>Let {% raw %}<span class="math inline">\(z\geq0\)</span>{% endraw %} be taxable earnings and {% raw %}<span class="math inline">\(c\)</span>{% endraw %} consumption. A taxpayer of type {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %} has preferences</p>

{% raw %}<div class="math display">\[
u(c,z;\eta)=c-\frac{\eta^{-1/\varepsilon}z^{1+1/\varepsilon}}{1+1/\varepsilon},\qquad \varepsilon&gt;0.
\]</div>{% endraw %}
<p>Under a constant net-of-tax rate {% raw %}<span class="math inline">\(r=1-t&gt;0\)</span>{% endraw %}, the budget is {% raw %}<span class="math inline">\(c=A+rz\)</span>{% endraw %}. The first-order condition is</p>

{% raw %}<div class="math display">\[
r=\left(\frac z\eta\right)^{1/\varepsilon},\qquad z=\eta r^\varepsilon,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(\varepsilon=\partial\log z/\partial\log r\)</span>{% endraw %}. Quasi-linearity removes income effects: changing {% raw %}<span class="math inline">\(A\)</span>{% endraw %} does not change earnings.</p>

<p>Now introduce a threshold {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}, with net-of-tax rates {% raw %}<span class="math inline">\(r_0&gt;r_1&gt;0\)</span>{% endraw %} below and above it. The budget must be continuous:</p>

{% raw %}<div class="math display">\[
c(z)=
\begin{cases}
A+r_0z,&amp;z\leq K,\\
A+(r_0-r_1)K+r_1z,&amp;z&gt;K.
\end{cases}
\]</div>{% endraw %}
<p>The term {% raw %}<span class="math inline">\((r_0-r_1)K\)</span>{% endraw %} makes the two pieces meet at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. The kink changes the slope of the budget; it does not impose a discrete loss of consumption. A discontinuity would produce a <a href="{% post_url 2024-01-15-bunching-at-notches-and-extensive-responses %}">notch</a> and a different earnings response.</p>

<p>Write {% raw %}<span class="math inline">\(Z_0=\eta r_0^\varepsilon\)</span>{% endraw %} for earnings under the counterfactual schedule that keeps the lower tax rate at all earnings, and define</p>

{% raw %}<div class="math display">\[
s\triangleq\left(\frac{r_0}{r_1}\right)^\varepsilon&gt;1.
\]</div>{% endraw %}
<div id="kink-response" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Optimal earnings under the kink are</p>

{% raw %}<div class="math display">\[
Z=
\begin{cases}
Z_0,&amp;Z_0&lt;K,\\
K,&amp;K\leq Z_0\leq Ks,\\
Z_0/s,&amp;Z_0&gt;Ks.
\end{cases}
\]</div>{% endraw %}
<p>Consequently, if {% raw %}<span class="math inline">\(Z_0\)</span>{% endraw %} has distribution function {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} and a continuous density {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} near {% raw %}<span class="math inline">\([K,Ks]\)</span>{% endraw %}, the mass at the kink is</p>

{% raw %}<div class="math display">\[
B=P(Z=K)=H_0(Ks)-H_0(K)=\int_K^{Ks}h_0(z)\,dz.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The objective is strictly concave: the budget is concave and the disutility of earnings is strictly convex. Below the kink its unconstrained optimum is {% raw %}<span class="math inline">\(Z_0\)</span>{% endraw %}; above the kink it is {% raw %}<span class="math inline">\(Z_0/s\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Z_0&lt;K\)</span>{% endraw %}, the first optimum is feasible and the derivative remains negative after crossing the kink. If {% raw %}<span class="math inline">\(Z_0&gt;Ks\)</span>{% endraw %}, the second optimum exceeds {% raw %}<span class="math inline">\(K\)</span>{% endraw %} and is feasible. In the remaining case, the left derivative at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is nonnegative and the right derivative is nonpositive:</p>

{% raw %}<div class="math display">\[
r_0-\left(\frac K\eta\right)^{1/\varepsilon}\geq0,
\qquad
r_1-\left(\frac K\eta\right)^{1/\varepsilon}\leq0.
\]</div>{% endraw %}
<p>These inequalities are equivalent to {% raw %}<span class="math inline">\(K\leq Z_0\leq Ks\)</span>{% endraw %}. Strict concavity makes {% raw %}<span class="math inline">\(K\)</span>{% endraw %} the unique optimum. Integrating the counterfactual density over these types gives {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>

</div>
<p>For a fixed elasticity, a larger tax-rate change widens the interval of counterfactual earnings that moves to the kink. For a fixed interval, a larger counterfactual density produces more bunching. Thus {% raw %}<span class="math inline">\(B\)</span>{% endraw %} alone cannot determine {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}.</p>

<div id="16-0-the-finite-change-formula-and-its-approximation-error">

</div>
<h3 data-note-section="2" id="16-0-from-bunching-and-endpoint-densities-to-an-elasticity">2. From bunching and endpoint densities to an elasticity</h3>
<p>Let {% raw %}<span class="math inline">\(h\)</span>{% endraw %} denote the continuous part of the observed earnings density away from the atom at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. The earnings map implies</p>

{% raw %}<div class="math display">\[
h(z)=h_0(z)\quad(z&lt;K),\qquad
h(z)=s h_0(sz)\quad(z&gt;K).
\]</div>{% endraw %}
<p>The second formula includes the Jacobian {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. In particular,</p>

{% raw %}<div class="math display">\[
h_0(K)=h(K^-),\qquad h_0(Ks)=\frac{h(K^+)}s.
\]</div>{% endraw %}
<p>Approximating {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} by a straight line between these endpoints gives Saez’s finite-change bunching equation:</p>

{% raw %}<div class="math display">\[
B\approx \frac{K(s-1)}2\left(h(K^-)+\frac{h(K^+)}s\right),
\qquad s=\left(\frac{r_0}{r_1}\right)^\varepsilon.
\]</div>{% endraw %}
<p>The equation is exact if {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} is affine on {% raw %}<span class="math inline">\([K,Ks]\)</span>{% endraw %}. More generally, if {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} is twice continuously differentiable there and {% raw %}<span class="math inline">\(|h_0&#x27;&#x27;|\leq M\)</span>{% endraw %}, the trapezoidal-rule error satisfies</p>

{% raw %}<div class="math display">\[
\left|B-\frac{K(s-1)}2\left(h(K^-)+\frac{h(K^+)}s\right)\right|
\leq\frac{M K^3(s-1)^3}{12}.
\]</div>{% endraw %}
<p>To see the bound, subtract the linear interpolant {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. The interpolation remainder has absolute value at most {% raw %}<span class="math inline">\(M(z-K)(Ks-z)/2\)</span>{% endraw %}; integration gives {% raw %}<span class="math inline">\(M(Ks-K)^3/12\)</span>{% endraw %}.</p>

<p>The finite-change equation can be solved before taking logarithms. Put {% raw %}<span class="math inline">\(a=h(K^-)&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=h(K^+)&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(b_K=B/K\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
a s^2+(b-a-2b_K)s-b=0.
\]</div>{% endraw %}
<p>There is one positive root because the product of the roots is {% raw %}<span class="math inline">\(-b/a&lt;0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(B\geq0\)</span>{% endraw %} the positive root is at least one, and the associated estimate is</p>

{% raw %}<div class="math display">\[
s=\frac{a+2b_K-b+\sqrt{(b-a-2b_K)^2+4ab}}{2a},
\qquad
\varepsilon=\frac{\log s}{\log(r_0/r_1)}.
\]</div>{% endraw %}
<p>This calculation makes the density approximation explicit. Treating both observed endpoint densities as counterfactual densities would omit the Jacobian and change the equation.</p>

<div id="16-0-the-familiar-elasticity-formula">

</div>
<h3 data-note-section="3" id="16-0-the-small-kink-formula">3. The small-kink formula</h3>
<p>Let the increase in the marginal tax rate be {% raw %}<span class="math inline">\(dt=r_0-r_1\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(x=dt/r_0\)</span>{% endraw %}. Keep the counterfactual earnings distribution fixed while {% raw %}<span class="math inline">\(x\downarrow0\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[
s=(1-x)^{-\varepsilon}=1+\varepsilon x+O(x^2),
\]</div>{% endraw %}
<p>the interval of bunching types has width {% raw %}<span class="math inline">\(K\varepsilon x+O(x^2)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} is continuous at {% raw %}<span class="math inline">\(K\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
B=h_0(K)K\varepsilon x+o(x),\qquad
\lim_{x\downarrow0}\frac{B}{K h_0(K)x}=\varepsilon.
\]</div>{% endraw %}
<p>Thus the familiar approximation is</p>

{% raw %}<div class="math display">\[
\varepsilon\approx\frac{B}{K h_0(K)}\frac{1-t_0}{dt}.
\]</div>{% endraw %}
<p>A finite tax change need not be well approximated by this limit. The finite-change equation retains the nonlinear earnings response and allows the counterfactual density to differ at the two endpoints.</p>

<p>Saez’s small-kink argument also applies to general smooth preferences with income effects. Write {% raw %}<span class="math inline">\(z(r,A)\)</span>{% endraw %} for optimal earnings under a linear budget {% raw %}<span class="math inline">\(c=A+rz\)</span>{% endraw %}. The upper segment of the kinked budget has parameters {% raw %}<span class="math inline">\((r_0-dt,A+Kdt)\)</span>{% endraw %}, so its unconstrained optimum changes by</p>

{% raw %}<div class="math display">\[
z(r_0-dt,A+Kdt)-z(r_0,A)
=-dt\left(\frac{\partial z}{\partial r}-K\frac{\partial z}{\partial A}\right)+o(dt).
\]</div>{% endraw %}
<p>At a type whose baseline earnings equal {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, a compensated increase in {% raw %}<span class="math inline">\(r\)</span>{% endraw %} requires an intercept change {% raw %}<span class="math inline">\(dA=-K\,dr\)</span>{% endraw %}: the envelope theorem gives {% raw %}<span class="math inline">\(du=u_c(dA+K\,dr)\)</span>{% endraw %}. The compensated earnings derivative and elasticity are therefore</p>

{% raw %}<div class="math display">\[
\frac{\partial z^c}{\partial r}
=\frac{\partial z}{\partial r}-K\frac{\partial z}{\partial A},
\qquad
e^c=\frac{r_0}{K}\frac{\partial z^c}{\partial r}.
\]</div>{% endraw %}
<p>Under the corresponding smooth local response, the marginal buncher’s counterfactual earnings exceed {% raw %}<span class="math inline">\(K\)</span>{% endraw %} by {% raw %}<span class="math inline">\(K e^c dt/r_0+o(dt)\)</span>{% endraw %}. Substituting this width in the mass integral gives the local bunching formula with {% raw %}<span class="math inline">\(e^c\)</span>{% endraw %}. Thus the small-kink result identifies a compensated elasticity. In the quasi-linear model above, the income derivative is zero and the compensated and uncompensated elasticities both equal {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. For a finite kink with income effects, the isoelastic finite-change equation need not apply.</p>

<div id="16-0-which-elasticity-is-averaged-under-heterogeneity">

</div>
<h3 data-note-section="4" id="16-0-what-heterogeneous-elasticities-identify">4. What heterogeneous elasticities identify</h3>
<p>Suppose each taxpayer has elasticity {% raw %}<span class="math inline">\(e\in(0,\bar e]\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\bar e&lt;\infty\)</span>{% endraw %}, and the same quasi-linear preference form with {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(e\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(h_0(z,e)\)</span>{% endraw %} be the joint density of counterfactual earnings and elasticity. The earnings argument above applies separately to every {% raw %}<span class="math inline">\(e\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
B(x)=\int_0^{\bar e}\int_K^{K(1-x)^{-e}}h_0(z,e)\,dz\,de.
\]</div>{% endraw %}
<div id="heterogeneous-kink" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. Suppose {% raw %}<span class="math inline">\(h_0(z,e)\to h_0(K,e)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(z\downarrow K\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(e\)</span>{% endraw %}. Assume that for some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} there is a nonnegative function {% raw %}<span class="math inline">\(M(e)\)</span>{% endraw %} with</p>

{% raw %}<div class="math display">\[
\sup_{K\leq z\leq K+\delta}h_0(z,e)\leq M(e),\qquad
\int_0^{\bar e}eM(e)\,de&lt;\infty.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(h_Z(K)=\int_0^{\bar e}h_0(K,e)\,de\)</span>{% endraw %} is finite and positive, then</p>

{% raw %}<div class="math display">\[
\lim_{x\downarrow0}\frac{B(x)}{K h_Z(K)x}
=\frac{\int_0^{\bar e}e h_0(K,e)\,de}{h_Z(K)}
=\mathbb{E}[e\mid Z_0=K],
\]</div>{% endraw %}
<p>where the last expression denotes the conditional mean defined by the density at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(w_e(x)=K((1-x)^{-e}-1)\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(e\)</span>{% endraw %}, {% raw %}<span class="math inline">\(w_e(x)/(Kx)\to e\)</span>{% endraw %}. Boundedness of {% raw %}<span class="math inline">\(e\)</span>{% endraw %} ensures {% raw %}<span class="math inline">\(w_e(x)\leq\delta\)</span>{% endraw %} for all sufficiently small {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, uniformly over {% raw %}<span class="math inline">\(e\)</span>{% endraw %}. The mean value theorem gives, for {% raw %}<span class="math inline">\(0&lt;x\leq x_0&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{w_e(x)}{Kx}=e(1-\xi)^{-e-1}\leq e(1-x_0)^{-\bar e-1}
\]</div>{% endraw %}
<p>for some {% raw %}<span class="math inline">\(\xi\in(0,x)\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\frac1{Kx}\int_K^{K+w_e(x)}h_0(z,e)\,dz
\longrightarrow e h_0(K,e)
\]</div>{% endraw %}
<p>and the integrand is dominated by {% raw %}<span class="math inline">\((1-x_0)^{-\bar e-1}eM(e)\)</span>{% endraw %}. Dominated convergence and division by {% raw %}<span class="math inline">\(h_Z(K)\)</span>{% endraw %} prove the result.</p>

</div>
<p>The small-kink elasticity is a local mean among people whose counterfactual earnings lie at the threshold. At a finite kink, different elasticities draw taxpayers from intervals of different widths. A single bunching mass then depends on the joint distribution of earnings and elasticities over an entire region; it does not generally identify the population average elasticity.</p>

<div id="16-0-what-a-density-estimate-must-supply">

</div>
<div id="16-0-what-still-has-to-be-identified">

</div>
<h3 data-note-section="5" id="16-0-what-the-empirical-calculation-has-to-recover">5. What the empirical calculation has to recover</h3>
<p>Saez’s application estimates excess mass near tax thresholds relative to a smooth counterfactual earnings distribution. In actual data, rounding, reporting choices, and adjustment costs can spread a theoretical point mass across several bins. Estimation therefore requires a bunching window and a method for recovering the distribution that would have prevailed without the kink.</p>

<p>The equations above state what that counterfactual must represent. The mass {% raw %}<span class="math inline">\(B\)</span>{% endraw %} and density {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} must use the same population and units; the tax change must be a continuous kink; and the behavioral calculation assumes a frictionless response. The finite-change model used here additionally rules out income effects. <span class="citation" data-cites="kleven_bunching_2016">Kleven (<a href="#ref-kleven_bunching_2016" role="doc-biblioref">2016</a>)</span> discusses how these modeling and measurement choices enter applied bunching analysis. They determine whether the observed excess mass can be interpreted through Saez’s elasticity formula.</p>

<p>The companion notes discuss <a href="{% post_url 2024-02-03-bunching-identification-density-bounds-and-control-groups %}">identification when the counterfactual density is less restricted</a> and <a href="{% post_url 2024-06-10-estimating-elasticities-under-nonlinear-budget-sets %}">estimation under general nonlinear budget sets</a>.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kleven_bunching_2016" class="csl-entry" role="listitem">
Kleven, Henrik Jacobsen. 2016. <span>“Bunching.”</span> <em>Annual Review of Economics</em> 8 (1): 435–64. <a href="https://doi.org/10.1146/annurev-economics-080315-015234">https://doi.org/10.1146/annurev-economics-080315-015234</a>.
</div>
<div id="ref-saez_taxpayers_2010" class="csl-entry" role="listitem">
Saez, Emmanuel. 2010. <span>“Do Taxpayers Bunch at Kink Points?”</span> <em>American Economic Journal: Economic Policy</em> 2 (3): 180–212. <a href="https://doi.org/10.1257/pol.2.3.180">https://doi.org/10.1257/pol.2.3.180</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-01-15-bunching-at-notches-and-extensive-responses %}">Bunching at Notches and Extensive Responses</a></p></nav>

</div>
