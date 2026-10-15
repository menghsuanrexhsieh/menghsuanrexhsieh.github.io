---
layout: "post"
title: "Bunching Identification: Density Bounds and Control Groups"
date: "2025-04-24"
tags: ["econometrics", "bunching"]
excerpt: "A bunching mass is an integral over an unobserved counterfactual interval, as in the kink response calculation."
note_series: "Bunching"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/bunching_elasticities.tex"
redirect_from: ["/2025/04/05/identification-limits-and-bounds-for-bunching-elasticities/", "/2025/04/05/partial-identification-of-bunching-elasticities/", "/2025/04/24/control-groups-in-bunching-designs/", "/2025/07/30/nonidentification-in-the-standard-kink-model/"]
---

<div class="note-content" markdown="0">

<p>The <a href="{% post_url 2025-01-18-taxable-income-elasticities-and-what-kinks-identify %}">kink response calculation</a> expresses bunching mass as the area under an unobserved counterfactual density. A wide interval with low density can have the same area as a narrow interval with high density. This ambiguity underlies the nonidentification result in <span class="citation" data-cites="blomquist_bunching_2021">(<a href="#ref-blomquist_bunching_2021" role="doc-biblioref">Blomquist et al. 2021</a>)</span>. Quantitative density restrictions, such as those in <span class="citation" data-cites="bertanha_bunching_2023">(<a href="#ref-bertanha_bunching_2023" role="doc-biblioref">Bertanha et al. 2023</a>)</span>, limit the possible areas and hence the elasticities.</p>

<h3 data-note-section="1" id="16-51-why-smoothness-is-insufficient">1. Why smoothness is insufficient</h3>
<p>In the log-linear kink model, let {% raw %}<span class="math inline">\(s_0&gt;s_1\)</span>{% endraw %} denote log net-of-tax rates and let the elasticity be {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. The latent interval compressed to the kink has width</p>

{% raw %}<div class="math display">\[
L=\varepsilon(s_0-s_1).
\]</div>{% endraw %}
<p>The observed bunching mass is {% raw %}<span class="math inline">\(B=\int_0^Lf(v)\,dv\)</span>{% endraw %} after shifting the interval to start at zero. Changing {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} changes {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, but an unrestricted latent density can change within that interval to preserve the same integral and match the observed tails.</p>

<div id="bunching-identification" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the regularity conditions of the nonidentification result, smooth observed tails and positive bunching are compatible with different elasticities and different smooth heterogeneity distributions. Smoothness without a quantitative restriction does not point identify the elasticity. A known Lipschitz bound on the latent density instead restricts the feasible widths and hence gives an identified set for {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}.</p>

</div>
<p>The zero-elasticity case needs separate treatment: a smooth continuous heterogeneity model with no behavioral response cannot create positive structural bunching merely by changing a density.</p>

<h3 data-note-section="2" id="16-51-derive-the-density-envelopes">2. Derive the density envelopes</h3>
<p>Suppose the endpoint densities are {% raw %}<span class="math inline">\(a=f(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=f(L)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|f(v)-f(u)|\le M|v-u|\)</span>{% endraw %}. Every feasible density must lie between</p>

{% raw %}<div class="math display">\[
\ell_L(v)=\max(0,a-Mv,b-M(L-v))
\]</div>{% endraw %}
<p>and</p>

{% raw %}<div class="math display">\[
u_L(v)=\min(a+Mv,b+M(L-v)).
\]</div>{% endraw %}
<p>The endpoint compatibility condition is {% raw %}<span class="math inline">\(|a-b|\le ML\)</span>{% endraw %}. Integrating gives necessary area restrictions</p>

{% raw %}<div class="math display">\[
\int_0^L\ell_L(v)\,dv\le B\le\int_0^Lu_L(v)\,dv.
\]</div>{% endraw %}
<p>For this local filling problem, the area restrictions are sufficient as well. A convex combination of the lower and upper envelopes preserves the endpoints, nonnegativity, and the Lipschitz bound. Its area varies continuously between the two extremes.</p>

<h3 data-note-section="3" id="16-51-read-the-identified-set-geometrically">3. Read the identified set geometrically</h3>
<p>To obtain the most mass at a given width, let the density rise from both endpoints as fast as allowed and meet at a tent. To obtain the least, let it fall as fast as allowed, stopping at zero. Once the lower envelope has a zero middle interval, extending that interval need not add any mass, which can leave the elasticity without a finite upper bound.</p>

<p>The identified set is therefore determined by area compatibility. Conflicting mass and endpoint information can leave no feasible density; intermediate cases bound the width on both sides; some cases allow arbitrarily wide low-density interiors.</p>

<p>The numerical bound {% raw %}<span class="math inline">\(M\)</span>{% endraw %} supplies information that the word “smooth” does not. A control group offers a different source of information by identifying counterfactual probabilities inside the missing interval.</p>

<h3 data-note-section="4" id="16-51-integrating-the-envelopes-when-endpoint-densities-agree">4. Integrating the envelopes when endpoint densities agree</h3>
<p>Take {% raw %}<span class="math inline">\(a=b=h&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}. The upper envelope is</p>

{% raw %}<div class="math display">\[
u_L(v)=h+M\min(v,L-v),
\]</div>{% endraw %}
<p>so its integral is {% raw %}<span class="math inline">\(hL+ML^2/4\)</span>{% endraw %}. The lower envelope is {% raw %}<span class="math inline">\(\max(0,h-M\min(v,L-v))\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\int_0^L\ell_L(v)\,dv=
\begin{cases}
hL-ML^2/4,&amp;L\leq2h/M,\\
h^2/M,&amp;L\geq2h/M.
\end{cases}
\]</div>{% endraw %}
<p>In the second case the lower density consists of two endpoint triangles, each of area {% raw %}<span class="math inline">\(h^2/(2M)\)</span>{% endraw %}, separated by a zero-density interval. Making that middle interval longer adds no required mass.</p>

<p>The upper-area inequality gives the smallest feasible width,</p>

{% raw %}<div class="math display">\[
L_{\min}=\frac2M(\sqrt{h^2+MB}-h).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(0&lt;B&lt;h^2/M\)</span>{% endraw %}, the lower-area inequality also gives</p>

{% raw %}<div class="math display">\[
L_{\max}=\frac2M(h-\sqrt{h^2-MB}).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(B\geq h^2/M\)</span>{% endraw %}, no finite upper width bound follows from this local interval problem. Dividing widths by {% raw %}<span class="math inline">\(s_0-s_1\)</span>{% endraw %} yields elasticity bounds. As {% raw %}<span class="math inline">\(M\downarrow0\)</span>{% endraw %}, both finite endpoints approach {% raw %}<span class="math inline">\(B/h\)</span>{% endraw %}, recovering the constant-density case.</p>

<p>Allowing a steeper slope raises the largest possible mass in a short interval and lowers the required mass in a long one. Weakening the restriction therefore enlarges the identified set.</p>

<p>The unequal-endpoint calculation makes the information in both tails visible. Assume {% raw %}<span class="math inline">\(a,b\geq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|a-b|\leq ML\)</span>{% endraw %}. The two lines defining the upper envelope cross at</p>

{% raw %}<div class="math display">\[
v_u=\frac{b-a+ML}{2M}.
\]</div>{% endraw %}
<p>Integrating {% raw %}<span class="math inline">\(a+Mv\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,v_u]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b+M(L-v)\)</span>{% endraw %} on {% raw %}<span class="math inline">\([v_u,L]\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
I_u(L)=\frac{(a+b)L}{2}+\frac{ML^2}{4}
-\frac{(a-b)^2}{4M}.
\]</div>{% endraw %}
<p>For the lower envelope, the downward endpoint lines meet at {% raw %}<span class="math inline">\(v_\ell=(a-b+ML)/(2M)\)</span>{% endraw %}, at height {% raw %}<span class="math inline">\((a+b-ML)/2\)</span>{% endraw %}. If that height is nonnegative, both lines remain above zero at their switch, and</p>

{% raw %}<div class="math display">\[
I_\ell(L)=\frac{(a+b)L}{2}-\frac{ML^2}{4}
+\frac{(a-b)^2}{4M}.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(ML\geq a+b\)</span>{% endraw %}, they hit zero before meeting. The lower area then consists of two disjoint triangles:</p>

{% raw %}<div class="math display">\[
I_\ell(L)=\frac{a^2+b^2}{2M}.
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(ML=a+b\)</span>{% endraw %} the two formulas agree. At the smallest compatible width {% raw %}<span class="math inline">\(ML=|a-b|\)</span>{% endraw %}, the upper and lower envelopes coincide with the line joining the endpoints. These boundary checks ensure that the algebra describes the stated Lipschitz class.</p>

<p>For each proposed elasticity, substitute {% raw %}<span class="math inline">\(L=\varepsilon(s_0-s_1)\)</span>{% endraw %} into {% raw %}<span class="math inline">\(I_\ell(L)\leq B\leq I_u(L)\)</span>{% endraw %}. The observations supply the mass and endpoint densities; the assumed slope bound limits the densities that can connect those endpoints. The inequalities then determine whether the proposed elasticity is feasible.</p>

<h3 data-note-section="5" id="16-51-why-the-area-inequalities-are-sufficient-locally">5. Why the area inequalities are sufficient locally</h3>
<p>Let {% raw %}<span class="math inline">\(I_\ell\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_u\)</span>{% endraw %} be the integrals of the lower and upper envelopes. If {% raw %}<span class="math inline">\(I_\ell\leq B\leq I_u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_\ell&lt;I_u\)</span>{% endraw %}, choose</p>

{% raw %}<div class="math display">\[
f_\lambda=(1-\lambda)\ell_L+\lambda u_L,
\qquad
\lambda=\frac{B-I_\ell}{I_u-I_\ell}.
\]</div>{% endraw %}
<p>This function is nonnegative, has the prescribed endpoint values and integral, and remains {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz by the triangle inequality. If the two areas coincide, their common envelope already has the required area. This proves sufficiency for filling the missing interval subject to the stated endpoint constraints.</p>

<p>This proves a local construction only. A full density must also match the observed tails, integrate to one, and satisfy any imposed global regularity. The paper combines those requirements with the interval bounds to establish sharpness.</p>

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
<p>The control group identifies a cdf increment over the missing interval. The structural response formula converts its width to an elasticity. If control and treated groups have different counterfactual distributions after adjustment, the inversion also reflects that composition difference.</p>

<h3 data-note-section="7" id="16-51-conditional-heterogeneity-as-another-identifying-restriction">7. Conditional heterogeneity as another identifying restriction</h3>
<p>The mid-censored log-earnings model writes</p>

{% raw %}<div class="math display">\[
y=\min(\varepsilon s_0+X&#x27;\beta+U,
\max(k,\varepsilon s_1+X&#x27;\beta+U)).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(a_j=k-\varepsilon s_j-X&#x27;\beta\)</span>{% endraw %}. Below the kink, {% raw %}<span class="math inline">\(U&lt;a_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y=\varepsilon s_0+X&#x27;\beta+U\)</span>{% endraw %}; at the kink, {% raw %}<span class="math inline">\(a_0\leq U\leq a_1\)</span>{% endraw %}; above it, {% raw %}<span class="math inline">\(U&gt;a_1\)</span>{% endraw %} and the other segment is observed. Conditional normality therefore contributes likelihood terms</p>

{% raw %}<div class="math display">\[
\begin{cases}
\sigma^{-1}\phi((y-\varepsilon s_0-X&#x27;\beta)/\sigma),&amp;y&lt;k,\\
\Phi(a_1/\sigma)-\Phi(a_0/\sigma),&amp;y=k,\\
\sigma^{-1}\phi((y-\varepsilon s_1-X&#x27;\beta)/\sigma),&amp;y&gt;k.
\end{cases}
\]</div>{% endraw %}
<p>The kink observations contribute probability mass, not density. Under the uniqueness and specification conditions studied in <span class="citation" data-cites="bertanha_bunching_2023">(<a href="#ref-bertanha_bunching_2023" role="doc-biblioref">Bertanha et al. 2023</a>)</span>, this censored model identifies the elasticity; the paper also gives conditions extending the result beyond literal conditional normality. Those conditions are substantive, since an arbitrary misspecified likelihood generally estimates a best approximation rather than the structural parameter.</p>

<p>The observation map is nondecreasing in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, so suitably defined latent conditional quantiles pass through it. Uncensored observations give equalities for the linear index; observations at {% raw %}<span class="math inline">\(k\)</span>{% endraw %} give inequalities. Separating the elasticity from the other coefficients requires sufficient uncensored covariate variation. The atom at the threshold alone cannot provide that rank.</p>

<h3 id="16-51-checking-that-the-envelopes-belong-to-the-stated-class">Checking that the envelopes belong to the stated class</h3>
<p>A maximum or minimum of finitely many {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz functions is {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz: for a maximum, each {% raw %}<span class="math inline">\(f_j(x)\le f_j(y)+M|x-y|\le\max_k f_k(y)+M|x-y|\)</span>{% endraw %}, and reversing {% raw %}<span class="math inline">\(x,y\)</span>{% endraw %} gives the absolute bound. Apply the same argument to negatives for a minimum. It follows that both envelopes obey the slope restriction. Endpoint compatibility makes their values at zero equal to {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and their values at {% raw %}<span class="math inline">\(L\)</span>{% endraw %} equal to {% raw %}<span class="math inline">\(b\)</span>{% endraw %}; the lower envelope is no larger than the upper one because each endpoint cone is compatible with the other. Their convex combinations therefore really are admissible fillings, not merely functions with the correct area.</p>
<p>If the fixed tails are already nonnegative, {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-Lipschitz and match those endpoint values, the filling also preserves the global Lipschitz bound. For points on opposite sides of a boundary, insert that boundary and apply the triangle inequality; the lengths add to the distance between the two points. If the tails have total mass {% raw %}<span class="math inline">\(1-B\)</span>{% endraw %}, normalization follows as well. These conditions give a complete global extension for the Lipschitz class. Requiring differentiability or a smoother class would impose additional matching conditions and is a different extension problem.</p>

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

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-02-25-bunching-at-notches-and-extensive-responses %}">Bunching at Notches and Extensive Responses</a> · Next: <a href="{% post_url 2025-06-22-bunching-and-endogeneity-testing-identification-and-correction %}">Bunching and Endogeneity: Testing, Identification, and Correction</a></p></nav>

</div>
