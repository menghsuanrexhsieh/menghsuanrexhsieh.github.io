---
layout: "post"
title: "Instrumental Variables for Taxable-Income Elasticities"
date: "2025-02-02"
tags: ["econometrics", "bunching"]
excerpt: "Tax reforms create variation in net-of-tax rates, but an individual's realized rate also depends on earnings."
note_series: "Taxable-income elasticities"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/stats.tex"
---

<div class="note-content" markdown="0">

<p>A tax reform changes the schedule, but a person’s realized marginal rate also changes when earnings respond. A simulated instrument holds baseline earnings fixed and applies the new schedule, removing that mechanical feedback. The remaining variation can still be related to mean reversion or differential income trends, as emphasized by <span class="citation" data-cites="gruber_elasticity_2002 weber_toward_2014"><a href="#ref-gruber_elasticity_2002" role="doc-biblioref">Gruber and Saez (2002)</a> and <a href="#ref-weber_toward_2014" role="doc-biblioref">Weber (2014)</a></span>. The calculations below separate those identification issues from heterogeneous-effect weights.</p>

<h3 data-note-section="1" id="17-15-start-with-the-population-iv-estimand">1. Start with the population IV estimand</h3>
<p>Write {% raw %}<span class="math inline">\(X=\Delta\log(1-\tau)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=\Delta\log z\)</span>{% endraw %}. In a heterogeneous-elasticity model,</p>

{% raw %}<div class="math display">\[
Y=\varepsilon_iX+U.
\]</div>{% endraw %}
<p>For a scalar instrument {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} with nonzero first-stage covariance,</p>

{% raw %}<div class="math display">\[
\beta_{IV}=\frac{\operatorname{Cov}(Z,Y)}{\operatorname{Cov}(Z,X)}
=\mathbb{E}[\varepsilon_i]
+\frac{\operatorname{Cov}(Z,(\varepsilon_i-\mathbb{E}\varepsilon_i)X)}{\operatorname{Cov}(Z,X)}
+\frac{\operatorname{Cov}(Z,U)}{\operatorname{Cov}(Z,X)}.
\]</div>{% endraw %}
<p>There are two departures from the unweighted mean elasticity: the instrument may place unequal weight on responses, and it may be correlated with the structural disturbance. A strong first stage alone eliminates neither term.</p>

<h3 data-note-section="2" id="17-15-what-a-valid-binary-instrument-averages">2. What a valid binary instrument averages</h3>
<div id="eti-weighted-response" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose a binary {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is independent of potential treatment changes, elasticities, and the structural disturbance, with exclusion and {% raw %}<span class="math inline">\(X(1)\ge X(0)\)</span>{% endraw %} almost surely. If {% raw %}<span class="math inline">\(\mathbb{E}[X(1)-X(0)]&gt;0\)</span>{% endraw %}, the Wald ratio is</p>

{% raw %}<div class="math display">\[
\beta_{IV}=\frac{\mathbb{E}[\varepsilon_i(X_i(1)-X_i(0))]}{\mathbb{E}[X_i(1)-X_i(0)]}.
\]</div>{% endraw %}
</div>
<p>Subtracting expected outcomes across instrument values leaves each person’s elasticity multiplied by the first-stage change. Dividing by the mean change normalizes these nonnegative weights. This illustrates the taxable-income weighting problem studied in <span class="citation" data-cites="kumar_estimating_2020">(<a href="#ref-kumar_estimating_2020" role="doc-biblioref">Kumar and Liang 2020</a>)</span>; exogeneity and exclusion are still required to remove disturbance terms.</p>

<h3 data-note-section="3" id="17-15-why-baseline-income-instruments-remain-delicate">3. Why baseline-income instruments remain delicate</h3>
<p>Suppose baseline log income is permanent income plus a transitory shock, {% raw %}<span class="math inline">\(y_0=a+e_0\)</span>{% endraw %}. Even if future shocks are independent, income growth contains {% raw %}<span class="math inline">\(-e_0\)</span>{% endraw %}. A simulated reform instrument that changes with {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %} can therefore correlate with untreated income growth. Flexible baseline-income controls attempt to account for this dependence, but their adequacy is a substantive identifying assumption.</p>

<p>Changing the lag changes both the relation to transitory shocks and the instrument’s relevance. Exogeneity must be justified for that choice; it does not follow from using an earlier observation.</p>

<h3 data-note-section="4" id="17-15-a-covariance-simplification-worth-keeping">4. A covariance simplification</h3>
<p>Let {% raw %}<span class="math inline">\(\overline Z(X)=\mathbb{E}[Z\mid X]\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z,Y)
=\operatorname{Cov}(\overline Z(X),Y)
+\mathbb{E}[\operatorname{Cov}(Z,Y\mid X)],
\]</div>{% endraw %}
<p>The first-stage identity remains {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,X)=\operatorname{Cov}(\overline Z(X),X)\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,X\mid X)=0\)</span>{% endraw %}. Thus the residual conditional covariance in the numerator is an additive term, not the numerator of a second IV ratio: its proposed denominator would be identically zero.</p>

<p>The <a href="{% post_url 2023-08-11-taxable-income-elasticities-and-what-kinks-identify %}">bunching approach</a> uses local density information and faces a different counterfactual problem. Comparing its elasticity with an IV estimate requires comparing their effect weights as well as their identifying assumptions.</p>

<h3 data-note-section="5" id="17-15-deriving-the-weights-rather-than-naming-an-average">5. Deriving the IV weights</h3>
<p>For a binary instrument with {% raw %}<span class="math inline">\(\pi=\mathbb P(Z=1)\in(0,1)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z,Y)
=\pi(1-\pi)(\mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0]).
\]</div>{% endraw %}
<p>The same factor multiplies the treatment difference, so it cancels in the IV ratio. Under the assumptions of the proposition,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0]
=\mathbb{E}[\varepsilon_i(X_i(1)-X_i(0))].
\]</div>{% endraw %}
<p>Writing {% raw %}<span class="math inline">\(\Delta X_i=X_i(1)-X_i(0)\)</span>{% endraw %}, the implicit weight is {% raw %}<span class="math inline">\(w_i=\Delta X_i/\mathbb{E}\Delta X_i\)</span>{% endraw %}. Monotonicity ensures {% raw %}<span class="math inline">\(w_i\geq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}w_i=1\)</span>{% endraw %}. Individuals whose net-of-tax rates respond more to the instrument contribute more to the estimand. Even a perfectly valid instrument therefore need not recover the unweighted population elasticity.</p>

<p>If individual responses are nonlinear, replace {% raw %}<span class="math inline">\(Y_i(x)=\varepsilon_ix+U_i\)</span>{% endraw %} by a differentiable response function. The fundamental theorem of calculus gives</p>

{% raw %}<div class="math display">\[
Y_i(X_i(1))-Y_i(X_i(0))
=\int_{X_i(0)}^{X_i(1)}Y_i&#x27;(u)\,du.
\]</div>{% endraw %}
<p>For a monotone first stage, the Wald ratio averages these marginal responses over the treatment intervals moved by the instrument, divided by their expected length. This is the continuous-treatment analogue of the simple weighting result. Calling it an elasticity also requires that both variables have the stated logarithmic interpretation and that other channels of the reform are excluded.</p>

<h3 data-note-section="6" id="17-15-a-calculation-of-mean-reversion-bias">6. A calculation of mean-reversion bias</h3>
<p>Take {% raw %}<span class="math inline">\(y_0=a+e_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y_1=a+e_1\)</span>{% endraw %} in the absence of a behavioral response. Assume {% raw %}<span class="math inline">\(a,e_0,e_1\)</span>{% endraw %} are independent and centered, with variances {% raw %}<span class="math inline">\(\sigma_a^2,\sigma_e^2,\sigma_e^2\)</span>{% endraw %}. Untreated growth is {% raw %}<span class="math inline">\(U=e_1-e_0\)</span>{% endraw %}. For the illustrative instrument {% raw %}<span class="math inline">\(Z=y_0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z,U)
=\operatorname{Cov}(a+e_0,e_1-e_0)=-\sigma_e^2.
\]</div>{% endraw %}
<p>If the population first stage is {% raw %}<span class="math inline">\(X=\pi_ZZ+v\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,v)=0\)</span>{% endraw %}, a homogeneous-elasticity IV regression yields</p>

{% raw %}<div class="math display">\[
\beta_{IV}-\varepsilon
=-\frac{\sigma_e^2}{\pi_Z(\sigma_a^2+\sigma_e^2)}.
\]</div>{% endraw %}
<p>Baseline income contains a transitory shock that enters subsequent growth with the opposite sign. Independence of future shocks does not remove this correlation. Its effect on IV bias depends on the reform’s first-stage direction.</p>

<p>Under joint normality, the conditional untreated trend is explicit:</p>

{% raw %}<div class="math display">\[
\mathbb{E}[U\mid y_0]
=-\frac{\sigma_e^2}{\sigma_a^2+\sigma_e^2}\,y_0.
\]</div>{% endraw %}
<p>Baseline-income controls address the conditional trend in this example, but real trends may depend on permanent income, shock persistence, and the nonlinear schedule. There is also a relevance constraint: if the instrument is determined entirely by baseline income, unrestricted conditioning on that income removes all instrument variation. Identification then needs remaining variation, such as reform differences across groups or periods, and a restriction on their untreated trends.</p>

<h3 data-note-section="7" id="17-15-what-residualization-does-to-the-identifying-moment">7. What residualization does to the identifying moment</h3>
<p>Let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} denote included controls and, for a population calculation, define {% raw %}<span class="math inline">\(\widetilde Z=Z-\mathbb{E}[Z\mid W]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde X=X-\mathbb{E}[X\mid W]\)</span>{% endraw %}. In the homogeneous model {% raw %}<span class="math inline">\(Y=\varepsilon X+g(W)+U\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{\mathbb{E}[\widetilde ZY]}{\mathbb{E}[\widetilde Z\widetilde X]}
=\varepsilon+
\frac{\mathbb{E}[\widetilde ZU]}{\mathbb{E}[\widetilde Z\widetilde X]}.
\]</div>{% endraw %}
<p>The control function {% raw %}<span class="math inline">\(g(W)\)</span>{% endraw %} disappears because {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde Z\mid W]=0\)</span>{% endraw %}. But residualization does not force {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde ZU]=0\)</span>{% endraw %}. That is the conditional identifying restriction. In a finite-dimensional regression, the corresponding calculation uses linear projections onto the specified controls; it only removes components in that span.</p>

<p>Simulation removes post-reform earnings from the calculation of the instrument. It leaves a separate requirement: that the simulated variation remaining after controls be unrelated to {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Baseline controls, lag choices, and pre-reform trends belong to that identifying argument.</p>

<p>For a binary instrument, residualization also changes the effect weights. Let {% raw %}<span class="math inline">\(p(W)=\mathbb{P}(Z=1\mid W)\)</span>{% endraw %}, and suppose instrument independence and exclusion hold conditional on {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. Define conditional first-stage and reduced-form changes {% raw %}<span class="math inline">\(\Delta_X(W)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_Y(W)\)</span>{% endraw %}. Iterating over {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(Z-p(W))Y]
=\mathbb{E}[p(W)(1-p(W))\Delta_Y(W)],
\]</div>{% endraw %}
<p>and the analogous denominator is {% raw %}<span class="math inline">\(\mathbb{E}[p(W)(1-p(W))\Delta_X(W)]\)</span>{% endraw %}. Where {% raw %}<span class="math inline">\(\Delta_X(W)&gt;0\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(\tau_{IV}(W)=\Delta_Y(W)/\Delta_X(W)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\beta_{IV}
=\frac{\mathbb{E}[p(W)(1-p(W))\Delta_X(W)\tau_{IV}(W)]}
       {\mathbb{E}[p(W)(1-p(W))\Delta_X(W)]}.
\]</div>{% endraw %}
<p>Thus covariate groups receive more weight when the instrument varies within the group and when it moves the net-of-tax rate more strongly. Conditional monotonicity makes the weights nonnegative; groups with zero first stage contribute no denominator weight. A conditional exclusion restriction remains essential for interpreting each {% raw %}<span class="math inline">\(\tau_{IV}(W)\)</span>{% endraw %} causally.</p>

<p>Valid IV specifications can estimate different weighted elasticities. Controls change the residual instrument and the groups supplying first-stage variation; reform episodes change the income ranges moved. A comparison with a local bunching elasticity must account for these weights before interpreting differences as evidence against either design.</p>

<h3 data-note-section="8" id="17-15-keeping-the-covariance-decomposition-well-defined">8. Keeping the covariance decomposition well defined</h3>
<p>For the final identity above, decompose {% raw %}<span class="math inline">\(Z=\overline Z(X)+(Z-\overline Z(X))\)</span>{% endraw %}. The residual is orthogonal to every integrable function of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z-\overline Z(X),X)=0,
\]</div>{% endraw %}
<p>and</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z-\overline Z(X),Y)
=\mathbb{E}[\operatorname{Cov}(Z,Y\mid X)].
\]</div>{% endraw %}
<p>The split preserves one first-stage denominator. Conditioning on pre-treatment controls may express an identifying restriction; conditioning on the endogenous change {% raw %}<span class="math inline">\(X\)</span>{% endraw %} in this calculation is only algebra. It does not produce an additional instrument.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-gruber_elasticity_2002" class="csl-entry" role="listitem">
Gruber, Jon, and Emmanuel Saez. 2002. <span>“The Elasticity of Taxable Income: Evidence and Implications.”</span> <em>Journal of Public Economics</em> 84 (1): 1–32. <a href="https://doi.org/10.1016/S0047-2727(01)00085-8">https://doi.org/10.1016/S0047-2727(01)00085-8</a>.
</div>
<div id="ref-kumar_estimating_2020" class="csl-entry" role="listitem">
Kumar, Anil, and Che-Yuan Liang. 2020. <span>“Estimating Taxable Income Responses with Elasticity Heterogeneity.”</span> <em>Journal of Public Economics</em> 188 (August): 104209. <a href="https://doi.org/10.1016/j.jpubeco.2020.104209">https://doi.org/10.1016/j.jpubeco.2020.104209</a>.
</div>
<div id="ref-weber_toward_2014" class="csl-entry" role="listitem">
Weber, Caroline E. 2014. <span>“Toward Obtaining a Consistent Estimate of the Elasticity of Taxable Income Using Difference-in-Differences.”</span> <em>Journal of Public Economics</em> 117 (September): 90–103. <a href="https://doi.org/10.1016/j.jpubeco.2014.05.004">https://doi.org/10.1016/j.jpubeco.2014.05.004</a>.
</div>
</div>



</div>
