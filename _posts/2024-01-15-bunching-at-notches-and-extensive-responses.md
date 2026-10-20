---
layout: "post"
title: "Bunching at Notches and Extensive Responses"
date: "2024-01-15"
tags: ["econometrics", "bunching"]
excerpt: "A notch creates a discrete loss in consumption at an earnings threshold."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/02/25/bunching-at-notches-and-extensive-responses/", "/2025/02/25/bunching-at-notches/", "/2025/08/19/extensive-responses/"]
---

<div class="note-content" markdown="0">

<p>A notch imposes a discrete consumption loss when earnings cross a threshold. Some earnings choices can then require more work while delivering less consumption than staying at the threshold. <span class="citation" data-cites="kleven_using_2013"><a href="#ref-kleven_using_2013" role="doc-biblioref">Kleven and Waseem (2013)</a></span> use this dominated region together with bunching below the notch to study both behavioral responses and incomplete adjustment.</p>

<h3 data-note-section="1" id="16-25-derive-the-dominated-interval">1. Derive the dominated interval</h3>
<p>Let the tax schedule be {% raw %}<span class="math inline">\(T(z)=tz+(\Delta T+\Delta t\,z)1\{z&gt;K\}\)</span>{% endraw %}, with a positive tax jump. Put {% raw %}<span class="math inline">\(r=1-t\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r&#x27;=1-t-\Delta t&gt;0\)</span>{% endraw %}. Consumption is {% raw %}<span class="math inline">\(rz\)</span>{% endraw %} below the notch and {% raw %}<span class="math inline">\(r&#x27;z-\Delta T\)</span>{% endraw %} above it.</p>

<p>An earnings choice {% raw %}<span class="math inline">\(z&gt;K\)</span>{% endraw %} gives no more consumption than staying at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} whenever</p>

{% raw %}<div class="math display">\[
r&#x27;z-\Delta T\le rK,
\quad\text{or}\quad
z\le\frac{rK+\Delta T}{r&#x27;}.
\]</div>{% endraw %}
<p>If work is costly and consumption desirable, these choices are dominated by {% raw %}<span class="math inline">\(K\)</span>{% endraw %}: they involve more work and weakly less consumption. This conclusion does not require an elasticity estimate.</p>

<h3 data-note-section="2" id="16-25-the-marginal-buncher">2. The marginal buncher</h3>
<p>Use the isoelastic, quasi-linear utility from the <a href="{% post_url 2023-08-11-taxable-income-elasticities-and-what-kinks-identify %}">kink model</a>. An unconstrained interior choice on the upper segment is {% raw %}<span class="math inline">\(z_H=\eta(r&#x27;)^\varepsilon\)</span>{% endraw %}, with utility</p>

{% raw %}<div class="math display">\[
V_H(\eta)=\frac{\eta(r&#x27;)^{1+\varepsilon}}{1+\varepsilon}-\Delta T.
\]</div>{% endraw %}
<p>Utility at the threshold is</p>

{% raw %}<div class="math display">\[
V_K(\eta)=rK-\frac{\eta^{-1/\varepsilon}K^{1+1/\varepsilon}}{1+1/\varepsilon}.
\]</div>{% endraw %}
<p>The marginal buncher’s type solves {% raw %}<span class="math inline">\(V_H(\eta^*)=V_K(\eta^*)\)</span>{% endraw %}, with the relevant interior/feasibility conditions. Its counterfactual earnings are {% raw %}<span class="math inline">\(z_0^*=\eta^*r^\varepsilon\)</span>{% endraw %}.</p>

<div id="notch-response" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. In the frictionless single-crossing model, types whose counterfactual earnings lie between {% raw %}<span class="math inline">\(K\)</span>{% endraw %} and {% raw %}<span class="math inline">\(z_0^*\)</span>{% endraw %} choose the notch point. Their mass is {% raw %}<span class="math inline">\(\int_K^{z_0^*}h_0(z)\,dz\)</span>{% endraw %}, and the indifference equation connects the response endpoint to {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} and the tax parameters.</p>

</div>
<p>A discrete budget loss requires a comparison of utility levels. A derivative at the threshold describes only a local slope and cannot determine whether moving across the loss is worthwhile.</p>

<h3 data-note-section="3" id="16-25-what-the-hole-adds">3. What the hole adds</h3>
<p>Frictionless optimization leaves the dominated interval empty. Observations in that interval indicate incomplete adjustment, imperfect information, measurement error, or another failure of the model. The paper combines the missing mass there with bunching, under its friction specification, to distinguish observed from structural responses.</p>

<p>Both moments require a counterfactual density, and their interpretation depends on how frictions affect choices. They describe different parts of the response; two moments cannot identify an unrestricted friction model.</p>

<p>For an upward jump in the budget set, the geometry changes. Moving across the threshold increases consumption but also requires more earnings; the dominated interval derived above no longer follows. Its indifference condition must be written afresh, with the correct sign of the transfer.</p>

<h3 data-note-section="4" id="16-25-the-tax-jump-and-the-size-of-the-dominated-region">4. The tax jump and the size of the dominated region</h3>
<p>The loss in consumption immediately above {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
J\triangleq rK-(r&#x27;K-\Delta T)=\Delta T+(r-r&#x27;)K.
\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(J&gt;0\)</span>{% endraw %}. The earnings value at which upper-segment consumption first catches up with consumption at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
z_D=K+\frac{J}{r&#x27;}.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(z\in(K,z_D]\)</span>{% endraw %}, consumption is weakly lower than at {% raw %}<span class="math inline">\(K\)</span>{% endraw %} and work is strictly higher. Under increasing utility in consumption and decreasing utility in work, the threshold strictly dominates that entire region. At {% raw %}<span class="math inline">\(z_D\)</span>{% endraw %} consumption is equal but work is still higher, so domination includes the upper endpoint.</p>

<p>The dominated region follows from the budget geometry and monotonicity of utility, without isoelastic preferences. Keep it distinct from the counterfactual interval: the former contains actual choices ruled out by optimization; the latter contains choices that bunchers would have made without the notch.</p>

<h3 data-note-section="5" id="16-25-a-dimensionless-indifference-equation">5. A dimensionless indifference equation</h3>
<p>Let {% raw %}<span class="math inline">\(v=z_H/K&gt;1\)</span>{% endraw %} be the upper-segment choice of the marginal buncher, and put {% raw %}<span class="math inline">\(\rho=r&#x27;/r\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d=\Delta T/(rK)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(z_H=\eta(r&#x27;)^\varepsilon\)</span>{% endraw %}, the type is {% raw %}<span class="math inline">\(\eta=vK/(r&#x27;)^\varepsilon\)</span>{% endraw %}. Substituting into the utility equality and dividing by {% raw %}<span class="math inline">\(rK\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\frac{\rho v}{1+\varepsilon}-d
=1-\frac{\varepsilon}{1+\varepsilon}\rho v^{-1/\varepsilon}.
\]</div>{% endraw %}
<p>Equivalently,</p>

{% raw %}<div class="math display">\[
\rho(v+\varepsilon v^{-1/\varepsilon})
=(1+\varepsilon)(1+d).
\]</div>{% endraw %}
<p>The first term is the upper-segment optimum’s utility after accounting for the fixed loss; the term in {% raw %}<span class="math inline">\(v^{-1/\varepsilon}\)</span>{% endraw %} is the work cost at the threshold for that same type. This rescaling is useful for numerical calculations because it separates the level {% raw %}<span class="math inline">\(K\)</span>{% endraw %} from the rate ratio and relative tax jump.</p>

<p>The counterfactual earnings endpoint is</p>

{% raw %}<div class="math display">\[
\frac{z_0^*}{K}=v(r/r&#x27;)^\varepsilon=v\rho^{-\varepsilon}.
\]</div>{% endraw %}
<p>The relevant root must describe a feasible upper-segment choice and satisfy the global utility comparison. A solver may also find algebraic roots outside that region. The nonconcavity introduced by the notch makes these checks necessary.</p>

<h3 data-note-section="6" id="16-25-a-pure-fixed-notch-gives-a-closed-form-example">6. A pure fixed notch gives a closed-form example</h3>
<p>Set {% raw %}<span class="math inline">\(r&#x27;=r\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(\varepsilon=1\)</span>{% endraw %}. The equation reduces to</p>

{% raw %}<div class="math display">\[
v+v^{-1}=2(1+d).
\]</div>{% endraw %}
<p>Of the two roots, the feasible one above the threshold is</p>

{% raw %}<div class="math display">\[
v=(1+d)+\sqrt{d(2+d)}.
\]</div>{% endraw %}
<p>The dominated region ends at {% raw %}<span class="math inline">\(z_D/K=1+d\)</span>{% endraw %}, while the marginal buncher’s unconstrained upper choice is {% raw %}<span class="math inline">\(v&gt;1+d\)</span>{% endraw %}. The type indifferent between the notch point and the upper optimum must earn strictly beyond the dominated region before the extra work is worthwhile.</p>

<p>For a small fixed loss, {% raw %}<span class="math inline">\(v-1=d+\sqrt{d(2+d)}\sim\sqrt{2d}\)</span>{% endraw %}. The leading response is proportional to the square root of the relative notch size in this example, rather than linear in it. Applying the small-kink formula to a notch would therefore miss even the order of the response.</p>

<p>The square-root response is not peculiar to {% raw %}<span class="math inline">\(\varepsilon=1\)</span>{% endraw %}. For a pure fixed notch, put {% raw %}<span class="math inline">\(v=1+w\)</span>{% endraw %} in {% raw %}<span class="math inline">\(v+\varepsilon v^{-1/\varepsilon}=(1+\varepsilon)(1+d)\)</span>{% endraw %}. A Taylor expansion gives</p>

{% raw %}<div class="math display">\[
(1+w)^{-1/\varepsilon}
=1-\frac w\varepsilon
+\frac{1+\varepsilon}{2\varepsilon^2}w^2+O(w^3).
\]</div>{% endraw %}
<p>After multiplication by {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} and addition of {% raw %}<span class="math inline">\(1+w\)</span>{% endraw %}, the linear terms cancel. Consequently</p>

{% raw %}<div class="math display">\[
\frac{1+\varepsilon}{2\varepsilon}w^2+O(w^3)
=(1+\varepsilon)d,
\qquad
v-1\sim\sqrt{2\varepsilon d}.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the expansion applies as {% raw %}<span class="math inline">\(d\downarrow0\)</span>{% endraw %} along the feasible root. At a smooth optimum, the first-order utility cost of displacement is zero, leaving a second-order cost. Balancing that cost against a fixed consumption loss produces the square-root response. A small kink instead changes the marginal incentive and yields a first-order displacement.</p>

<p>Since {% raw %}<span class="math inline">\(z_0^*=Kv\)</span>{% endraw %} for this pure fixed notch, a locally flat counterfactual density gives {% raw %}<span class="math inline">\(B\sim h_0(K)K\sqrt{2\varepsilon d}\)</span>{% endraw %}. The dominated interval has width {% raw %}<span class="math inline">\(Kd\)</span>{% endraw %}, a smaller order. Bunching mass and the hole above the threshold thus encode different behavioral information even for arbitrarily small notches. This is the reason the notch design can use the hole to learn about incomplete adjustment while using the bunching mass to learn about the structural response.</p>

<h3 data-note-section="7" id="16-25-what-bunching-and-missing-mass-identify-under-a-friction-model">7. What bunching and missing mass identify under a friction model</h3>
<p>For illustration, suppose a fraction {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} adjusts optimally and the remaining fraction follows the no-notch choice distribution, independently of its latent earnings within the relevant intervals. Let {% raw %}<span class="math inline">\(B^*=\int_K^{z_0^*}h_0(z)\,dz\)</span>{% endraw %} be frictionless bunching mass and {% raw %}<span class="math inline">\(H_D=\int_K^{z_D}h_0(z)\,dz\)</span>{% endraw %} the counterfactual mass in the dominated region. Then this particular mixture model gives</p>

{% raw %}<div class="math display">\[
B_{\rm obs}=\lambda B^*,\qquad
M_D=\lambda H_D,
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(M_D\)</span>{% endraw %} is missing mass in that region. If {% raw %}<span class="math inline">\(h_0\)</span>{% endraw %} is identified, {% raw %}<span class="math inline">\(M_D/H_D\)</span>{% endraw %} identifies the common adjustment fraction and {% raw %}<span class="math inline">\(B_{\rm obs}/\lambda\)</span>{% endraw %} recovers the structural mass.</p>

<p>The constant-adjustment mixture explains how the two moments can separate response and adjustment in this illustration. If adjustment depends on latent earnings, they instead integrate different weights. Measurement error may also put observed earnings inside the dominated interval despite optimal latent choices. The friction model must distinguish these possibilities.</p>

<p>An upward budget jump changes the sign of {% raw %}<span class="math inline">\(J\)</span>{% endraw %} and removes the dominance argument used above. The feasible choices and their utility levels must be compared again; the same response formula cannot be reused by changing a transfer’s sign.</p>

<h3 id="16-25-selecting-the-unique-feasible-indifference-root">Selecting the unique feasible indifference root</h3>
<p>The dimensionless equation has a unique root on the economically relevant region {% raw %}<span class="math inline">\(v&gt;1\)</span>{% endraw %} under the positive-jump condition. Define {% raw %}<span class="math inline">\(F(v)=v+\varepsilon v^{-1/\varepsilon}\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[F&#39;(v)=1-v^{-1-1/\varepsilon}&gt;0\quad(v&gt;1),\qquad
F(1)=1+\varepsilon,\qquad F(v)\to\infty.\]</div>{% endraw %}
<p>Moreover, {% raw %}<span class="math inline">\(J&gt;0\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\(1+d&gt;\rho\)</span>{% endraw %}, so {% raw %}<span class="math inline">\((1+\varepsilon)(1+d)/\rho&gt;F(1)\)</span>{% endraw %}. Continuity and strict monotonicity prove existence and uniqueness of the root {% raw %}<span class="math inline">\(v&gt;1\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(v\le z_D/K\)</span>{% endraw %}, the proposed upper choice would be dominated by {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, so it could not solve the indifference equation; thus the feasible root lies strictly above {% raw %}<span class="math inline">\(z_D/K\)</span>{% endraw %}. For the standard downward-slope case {% raw %}<span class="math inline">\(0&lt;\rho\le1\)</span>{% endraw %}, types whose upper-segment unconstrained choice is at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %} prefer the threshold to every feasible upper choice. For larger types, the utility difference has the sign of {% raw %}<span class="math inline">\(F(v)-(1+\varepsilon)(1+d)/\rho\)</span>{% endraw %}, so it crosses once. This establishes the threshold sorting used in the bunching-mass calculation.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kleven_using_2013" class="csl-entry" role="listitem">
Kleven, Henrik J., and Mazhar Waseem. 2013. <span>“Using Notches to Uncover Optimization Frictions and Structural Elasticities: Theory and Evidence from Pakistan*.”</span> <em>The Quarterly Journal of Economics</em> 128 (2): 669–723. <a href="https://doi.org/10.1093/qje/qjt004">https://doi.org/10.1093/qje/qjt004</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-08-11-taxable-income-elasticities-and-what-kinks-identify %}">Taxable-Income Elasticities and What Kinks Identify</a> · Next: <a href="{% post_url 2024-02-03-bunching-identification-density-bounds-and-control-groups %}">Bunching Identification: Density Bounds and Control Groups</a></p></nav>

</div>
