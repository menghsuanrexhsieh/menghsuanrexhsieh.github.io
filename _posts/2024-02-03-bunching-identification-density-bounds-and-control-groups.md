---
layout: "post"
title: "Bunching Identification: Density Bounds and Control Groups"
date: "2024-02-03"
tags: ["econometrics", "bunching"]
excerpt: "A known Lipschitz constant gives a sharp set of bunching elasticities by bounding the latent density inside the missing interval."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/04/05/identification-limits-and-bounds-for-bunching-elasticities/", "/2025/04/05/partial-identification-of-bunching-elasticities/", "/2025/04/24/bunching-identification-density-bounds-and-control-groups/", "/2025/04/24/control-groups-in-bunching-designs/", "/2025/07/30/nonidentification-in-the-standard-kink-model/"]
---

<div class="note-content" markdown="0">


<p>A bunching mass identifies the integral of a latent density over the interval compressed to a kink. Recovering the width of that interval requires a restriction on the density. This note derives sharp width bounds under a known Lipschitz constant and explains what a comparison group or a conditional distribution model adds. The underlying nonidentification problem is studied by <span class="citation" data-cites="blomquist_bunching_2021">(<a href="#ref-blomquist_bunching_2021" role="doc-biblioref">Blomquist et al. 2021</a>)</span>; the bunching methods are surveyed in <span class="citation" data-cites="bertanha_bunching_2023">(<a href="#ref-bertanha_bunching_2023" role="doc-biblioref">Bertanha et al. 2023</a>)</span>.</p>
<p>The calculations below expand the missing-interval argument in <a href="https://www.cemmap.ac.uk/wp-content/uploads/2020/08/CWP5319.pdf">Blomquist et al., Theorem 1</a> and the methods in Sections 2.3.1–2.3.3 of the <a href="https://www.nathanseegert.com/papers/Bunching_Chapter.pdf">August 2023 survey</a>: density-slope bounds, control groups, and conditional distribution restrictions. The conditional-normal calculation gives a sufficient special case of the last method.</p>
<h3 data-note-section="1" id="16-51-why-smoothness-is-insufficient">1. Why smoothness is insufficient</h3>
<p>In the log-linear kink model, let {% raw %}<span class="math inline">\(s_0&gt;s_1\)</span>{% endraw %} be log net-of-tax rates and let {% raw %}<span class="math inline">\(\varepsilon\geq0\)</span>{% endraw %} be the elasticity. The interval compressed to the kink has width</p>
{% raw %}<div class="math display">\[
L=\varepsilon(s_0-s_1),\qquad B=\int_0^L f(v)\,dv,
\]</div>{% endraw %}
<p>after translating its left endpoint to zero. The <a href="{% post_url 2023-08-11-taxable-income-elasticities-and-what-kinks-identify %}">behavioral derivation</a> relates this latent interval to the observed earnings distribution. Throughout the interval calculation, {% raw %}<span class="math inline">\(B&gt;0\)</span>{% endraw %} and the endpoint densities {% raw %}<span class="math inline">\(a=f(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=f(L)\)</span>{% endraw %} are treated as known population quantities.</p>
<div id="bunching-identification" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. For every {% raw %}<span class="math inline">\(L&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B&gt;0\)</span>{% endraw %}, and finite {% raw %}<span class="math inline">\(a,b\geq0\)</span>{% endraw %}, there is a nonnegative {% raw %}<span class="math inline">\(C^\infty\)</span>{% endraw %} function on {% raw %}<span class="math inline">\([0,L]\)</span>{% endraw %} with endpoint values {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} and integral {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. It can be chosen positive on {% raw %}<span class="math inline">\((0,L)\)</span>{% endraw %} and with every positive-order derivative zero at the endpoints.</p>
</div>
<p>Thus smoothness and endpoint values alone put no positive lower or finite upper bound on {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. The appendix constructs the function by placing arbitrarily narrow smooth pieces at the endpoints and adding a positive interior function of the required remaining mass. With {% raw %}<span class="math inline">\(0&lt;B&lt;1\)</span>{% endraw %}, compatible smooth tails of total mass {% raw %}<span class="math inline">\(1-B\)</span>{% endraw %} complete it to a density. This local statement isolates the missing-interval argument; the full earnings model must also reproduce the observed tails under its change of variables. Positive mass cannot be compressed from a zero-length interval by a continuous density, so {% raw %}<span class="math inline">\(L=0\)</span>{% endraw %} is excluded when {% raw %}<span class="math inline">\(B&gt;0\)</span>{% endraw %}.</p>
<h3 data-note-section="2" id="16-51-derive-the-density-envelopes">2. Derive the density envelopes</h3>
<p>Fix a known constant {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %} and define</p>
{% raw %}<div class="math display">\[
\mathcal F_L=\left\{f:[0,L]\to[0,\infty): f(0)=a,\ f(L)=b,
\ |f(v)-f(u)|\leq M|v-u|\right\}.
\]</div>{% endraw %}
<p>The endpoint inequalities imply {% raw %}<span class="math inline">\(|a-b|\leq ML\)</span>{% endraw %}. Comparing an interior value to each endpoint gives</p>
{% raw %}<div class="math display">\[
\ell_L(v)=\max\{0,a-Mv,b-M(L-v)\}\leq f(v)
\leq\min\{a+Mv,b+M(L-v)\}=u_L(v).
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(I_\ell(L)=\int_0^L\ell_L(v)\,dv\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_u(L)=\int_0^Lu_L(v)\,dv\)</span>{% endraw %}.</p>
<div id="bunching-lipschitz-set" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. There is an {% raw %}<span class="math inline">\(f\in\mathcal F_L\)</span>{% endraw %} with integral {% raw %}<span class="math inline">\(B\)</span>{% endraw %} if and only if</p>
{% raw %}<div class="math display">\[
|a-b|\leq ML,\qquad I_\ell(L)\leq B\leq I_u(L).
\]</div>{% endraw %}
<p>Consequently the sharp identified set in this interval model is</p>
{% raw %}<div class="math display">\[
\mathcal E_M=
\left\{\frac{L}{s_0-s_1}:L&gt;0,\ |a-b|\leq ML,
\ I_\ell(L)\leq B\leq I_u(L)\right\}.
\]</div>{% endraw %}
</div>
<p><span id="16-51-checking-that-the-envelopes-belong-to-the-stated-class"></span></p>
<p>Necessity follows by integration. Under endpoint compatibility, both envelopes are nonnegative, have endpoint values {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %}, and are {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz: the maximum or minimum of finitely many functions with a common Lipschitz constant has that constant. Their convex combinations remain in {% raw %}<span class="math inline">\(\mathcal F_L\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(I_\ell&lt;I_u\)</span>{% endraw %}, the choice</p>
{% raw %}<div class="math display">\[
f_\lambda=(1-\lambda)\ell_L+\lambda u_L,
\qquad \lambda=\frac{B-I_\ell}{I_u-I_\ell}
\]</div>{% endraw %}
<p>has integral {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. If the areas coincide, the common envelope suffices. This proves sufficiency and attainment of every feasible width.</p>
<p>The class in the theorem permits corners and zero-density intervals. If strict positivity or a differentiability class is imposed in addition, boundary cases may only be approached. A known Lipschitz constant is a quantitative restriction; an unspecified assertion that the density is smooth does not provide its value.</p>
<h3 data-note-section="3" id="16-51-read-the-identified-set-geometrically">3. Read the identified set geometrically</h3>
<p>The upper envelope puts as much mass as possible between two endpoints. It rises from the lower endpoint line until the two upward lines meet, then falls toward the other endpoint. The lower envelope follows the downward lines and is truncated at zero. Once its two positive pieces are separated, increasing {% raw %}<span class="math inline">\(L\)</span>{% endraw %} adds a zero-density interval and leaves the minimum required mass unchanged.</p>
<p>The observed mass {% raw %}<span class="math inline">\(B\)</span>{% endraw %} must lie between these two areas. Increasing {% raw %}<span class="math inline">\(M\)</span>{% endraw %} weakens the restriction and enlarges {% raw %}<span class="math inline">\(\mathcal E_M\)</span>{% endraw %}, because every {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz function is also {% raw %}<span class="math inline">\(M&#x27;\)</span>{% endraw %}-Lipschitz for {% raw %}<span class="math inline">\(M&#x27;\geq M\)</span>{% endraw %}.</p>
<h3 data-note-section="4" id="16-51-integrating-the-envelopes-when-endpoint-densities-agree">4. Integrating the envelopes when endpoint densities agree</h3>
<p>Suppose {% raw %}<span class="math inline">\(a=b=h&gt;0\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
u_L(v)=h+M\min(v,L-v),\qquad I_u(L)=hL+\frac{ML^2}{4},
\]</div>{% endraw %}
<p>and</p>
{% raw %}<div class="math display">\[
I_\ell(L)=
\begin{cases}
hL-ML^2/4,&amp;L\leq2h/M,\\
h^2/M,&amp;L\geq2h/M.
\end{cases}
\]</div>{% endraw %}
<p>The second line is the sum of two endpoint triangles, each of area {% raw %}<span class="math inline">\(h^2/(2M)\)</span>{% endraw %}. Solving the upper-area inequality gives</p>
{% raw %}<div class="math display">\[
L_{\min}=\frac2M(\sqrt{h^2+MB}-h).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(0&lt;B&lt;h^2/M\)</span>{% endraw %}, the lower-area inequality also gives</p>
{% raw %}<div class="math display">\[
L_{\max}=\frac2M\{h-\sqrt{h^2-MB}\},
\]</div>{% endraw %}
<p>and the feasible widths are exactly {% raw %}<span class="math inline">\([L_{\min},L_{\max}]\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(B\geq h^2/M\)</span>{% endraw %}, they are {% raw %}<span class="math inline">\([L_{\min},\infty)\)</span>{% endraw %}. Division by {% raw %}<span class="math inline">\(s_0-s_1\)</span>{% endraw %} gives the elasticity set. For fixed {% raw %}<span class="math inline">\(B,h\)</span>{% endraw %}, both finite width endpoints tend to {% raw %}<span class="math inline">\(B/h\)</span>{% endraw %} as {% raw %}<span class="math inline">\(M\downarrow0\)</span>{% endraw %}.</p>
<p>For unequal endpoints, the upper lines meet at {% raw %}<span class="math inline">\(v_u=(b-a+ML)/(2M)\)</span>{% endraw %}. Integrating on either side gives</p>
{% raw %}<div class="math display">\[
I_u(L)=\frac{(a+b)L}{2}+\frac{ML^2}{4}-\frac{(a-b)^2}{4M}.
\]</div>{% endraw %}
<p>The downward lines meet at height {% raw %}<span class="math inline">\((a+b-ML)/2\)</span>{% endraw %}. Hence</p>
{% raw %}<div class="math display">\[
I_\ell(L)=
\begin{cases}
\dfrac{(a+b)L}{2}-\dfrac{ML^2}{4}+\dfrac{(a-b)^2}{4M},&amp;ML\leq a+b,\\[4pt]
\dfrac{a^2+b^2}{2M},&amp;ML\geq a+b.
\end{cases}
\]</div>{% endraw %}
<p>These formulas apply when {% raw %}<span class="math inline">\(|a-b|\leq ML\)</span>{% endraw %}; at equality both envelopes are the line joining the endpoints. They also cover {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(M=0\)</span>{% endraw %}, feasibility instead requires {% raw %}<span class="math inline">\(a=b\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=aL\)</span>{% endraw %}: if {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, the width is {% raw %}<span class="math inline">\(B/a\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(a=b=0\)</span>{% endraw %} is inconsistent with {% raw %}<span class="math inline">\(B&gt;0\)</span>{% endraw %}.</p>
<h3 data-note-section="5" id="16-51-why-the-area-inequalities-are-sufficient-locally">5. Why the area inequalities are sufficient locally</h3>
<p>The theorem specifies the entire interval restriction, so its identified set is sharp for that problem. To extend the construction to a full density, suppose the left and right tails are nonnegative, each is {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz, their boundary values are {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %}, and their combined integral is {% raw %}<span class="math inline">\(1-B\)</span>{% endraw %}. Paste either constructed interior onto those tails. For points on opposite sides of a join, the triangle inequality through the join bounds the difference by {% raw %}<span class="math inline">\(M\)</span>{% endraw %} times the total distance. Repeating through both joins gives a global {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz density of total mass one.</p>
<p>In the earnings model, the tails must first be expressed in the same latent coordinate as {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, including the translations induced by {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. If a further shape or distribution restriction couples the two tails, it must also be imposed when computing feasible widths. The interval inequalities alone encode only the stated Lipschitz and endpoint restrictions.</p>
<h3 data-note-section="6" id="16-51-what-control-groups-add">6. What control groups add</h3>
<p>A control group whose effective local tax incentive does not change can reveal income mass inside the treated group’s missing interval. In the design discussed by <span class="citation" data-cites="coles_how_2022">(<a href="#ref-coles_how_2022" role="doc-biblioref">Coles et al. 2022</a>)</span>, loss carryforwards help create different effective kink locations under a common statutory schedule. Identification still requires comparability of counterfactual income distributions after the design’s adjustments.</p>
<p>If a comparison identifies the relevant counterfactual cdf {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}, the bunching relation becomes</p>
{% raw %}<div class="math display">\[
B=H_0(K+\Delta z)-H_0(K).
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} is strictly increasing on the interval, solve</p>
{% raw %}<div class="math display">\[
\Delta z=H_0^{-1}(H_0(K)+B)-K.
\]</div>{% endraw %}
<p>The structural response formula then converts this width into an elasticity. The comparison identifies the missing cdf increment. Differences in counterfactual income distributions between groups would enter the same inversion and change the inferred response.</p>
<h3 data-note-section="7" id="16-51-conditional-heterogeneity-as-another-identifying-restriction">7. Conditional heterogeneity as another identifying restriction</h3>
<p>The mid-censored log-earnings model writes</p>
{% raw %}<div class="math display">\[
y=\min(\varepsilon s_0+X&#x27;\beta+U,
\max(k,\varepsilon s_1+X&#x27;\beta+U)).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(a_j=k-\varepsilon s_j-X&#x27;\beta\)</span>{% endraw %}. Below the kink, {% raw %}<span class="math inline">\(U&lt;a_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y=\varepsilon s_0+X&#x27;\beta+U\)</span>{% endraw %}; at the kink, {% raw %}<span class="math inline">\(a_0\leq U\leq a_1\)</span>{% endraw %}; above it, {% raw %}<span class="math inline">\(U&gt;a_1\)</span>{% endraw %} and the other segment is observed. If {% raw %}<span class="math inline">\(U\mid X\sim N(0,\sigma^2)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}, the conditional law has the following density or mass contributions</p>
{% raw %}<div class="math display">\[
\begin{cases}
\sigma^{-1}\phi((y-\varepsilon s_0-X&#x27;\beta)/\sigma),&amp;y&lt;k,\\
\Phi(a_1/\sigma)-\Phi(a_0/\sigma),&amp;y=k,\\
\sigma^{-1}\phi((y-\varepsilon s_1-X&#x27;\beta)/\sigma),&amp;y&gt;k.
\end{cases}
\]</div>{% endraw %}
<p>The kink observations contribute the middle probability mass. The continuous tails retain the normal densities without renormalization.</p>
<div id="bunching-normal-identification" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. Suppose the displayed model holds with {% raw %}<span class="math inline">\(U\mid X\sim N(0,\sigma^2)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}, finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, known {% raw %}<span class="math inline">\(s_0&gt;s_1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon\geq0\)</span>{% endraw %}. At any covariate value where the conditional law is specified, that law identifies {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}.</p>
</div>
<p>Fix {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(\mu_j=\varepsilon s_j+x&#x27;\beta\)</span>{% endraw %}. The log density on {% raw %}<span class="math inline">\(y&lt;k\)</span>{% endraw %} has second derivative {% raw %}<span class="math inline">\(-1/\sigma^2\)</span>{% endraw %} and first derivative {% raw %}<span class="math inline">\(-(y-\mu_0)/\sigma^2\)</span>{% endraw %}. These identify {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %}. The upper-tail log density similarly identifies {% raw %}<span class="math inline">\(\mu_1\)</span>{% endraw %}, giving</p>
{% raw %}<div class="math display">\[
\varepsilon=\frac{\mu_0-\mu_1}{s_0-s_1}.
\]</div>{% endraw %}
<p>Both tails have positive density under the normal model. The argument includes {% raw %}<span class="math inline">\(\varepsilon=0\)</span>{% endraw %}, when the two locations coincide and the kink mass vanishes. Identifying the remaining coefficients from {% raw %}<span class="math inline">\(x&#x27;\beta\)</span>{% endraw %} additionally requires adequate covariate rank. The distributional restriction thus supplies the tail information that was unrestricted in the first section.</p>
<p>For censored quantile methods, the observation map is nondecreasing in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, so a suitably defined conditional latent quantile passes through the same map. Uncensored observations provide equalities for the linear index, whereas observations at {% raw %}<span class="math inline">\(k\)</span>{% endraw %} provide inequalities. Identification requires enough uncensored covariate variation to separate the elasticity from the other coefficients.</p>
<h3 data-note-section="8" id="16-51-appendix-smooth-densities-with-any-positive-interval-width">8. Appendix: smooth densities with any positive interval width</h3>
<p>Choose nonnegative {% raw %}<span class="math inline">\(C^\infty\)</span>{% endraw %} functions {% raw %}<span class="math inline">\(\chi_0,\chi_L\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,L]\)</span>{% endraw %} that equal one near their respective endpoints and vanish outside disjoint, arbitrarily short endpoint neighborhoods. Their integrals can be made small enough that</p>
{% raw %}<div class="math display">\[
A=\int_0^L\{a\chi_0(v)+b\chi_L(v)\}\,dv&lt;B.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\phi(v)=\exp\{-1/[v(L-v)]\}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;v&lt;L\)</span>{% endraw %}, with zero values at the endpoints. This function is positive in the interior, has finite positive integral {% raw %}<span class="math inline">\(J\)</span>{% endraw %}, and every derivative vanishes at zero and {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
f(v)=a\chi_0(v)+b\chi_L(v)+\frac{B-A}{J}\phi(v)
\]</div>{% endraw %}
<p>has all the claimed properties. The endpoint cutoffs are constant near their endpoints, so their positive-order derivatives vanish there as well. Smooth, nonnegative tails with the same boundary values and flat boundary derivatives can be built using the same cutoff-and-bump construction. For {% raw %}<span class="math inline">\(B&lt;1\)</span>{% endraw %}, their positive total masses may be chosen to sum to {% raw %}<span class="math inline">\(1-B\)</span>{% endraw %}. Each narrower endpoint piece has larger derivatives somewhere in its transition region, which is why this construction is excluded by a fixed sufficiently small Lipschitz constant.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bertanha_bunching_2023" class="csl-entry" role="listitem">
Bertanha, Marinho, Carolina Caetano, Hugo Jales, and Nathan Seegert. 2023. <span>“Bunching Estimation Methods.”</span> <em>Handbook of Labor, Human Resources, and Population Economics (Forthcoming)</em>.
</div>
<div id="ref-blomquist_bunching_2021" class="csl-entry" role="listitem">
Blomquist, Sören, Whitney K. Newey, Anil Kumar, and Che-Yuan Liang. 2021. <span>“On Bunching and Identification of the Taxable Income Elasticity.”</span> <em>Journal of Political Economy</em> 129 (8): 2320–43. <a href="https://doi.org/10.1086/714446">https://doi.org/10.1086/714446</a>.
</div>
<div id="ref-coles_how_2022" class="csl-entry" role="listitem">
Coles, Jeffrey L., Elena Patel, Nathan Seegert, and Matthew Smith. 2022. <span>“How Do Firms Respond to Corporate Taxes?”</span> <em>Journal of Accounting Research</em> 60 (3): 965–1006. <a href="https://doi.org/10.1111/1475-679X.12405">https://doi.org/10.1111/1475-679X.12405</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-01-15-bunching-at-notches-and-extensive-responses %}">Bunching at Notches and Extensive Responses</a> · Next: <a href="{% post_url 2024-03-11-bunching-and-endogeneity-testing-identification-and-correction %}">Bunching and Endogeneity: Testing, Identification, and Correction</a></p></nav>
</div>
