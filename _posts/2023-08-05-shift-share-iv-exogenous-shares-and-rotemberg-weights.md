---
layout: "post"
title: "Shift-Share IV: Exogenous Shares and Rotemberg Weights"
date: "2023-08-05"
tags: ["econometrics", "instrumental variables"]
excerpt: "A shift-share instrument combines exposure shares with aggregate shocks."
note_series: "Shift-share designs"
note_source: "assets/notes/Shift-Share - Old and New/ss-on.tex"
redirect_from: ["/2023/08/05/shift-share-instruments-setup-and-panel-structure/", "/2023/08/29/exogenous-shares-and-the-bartik-estimator/", "/2023/11/09/rotemberg-weights-as-a-diagnostic/"]
---

<div class="note-content" markdown="0">

<p>A shift-share instrument adds exposure shares multiplied by aggregate shocks. Which part supplies the identifying variation? In the share-exogeneity argument of <span class="citation" data-cites="goldsmith-pinkham_bartik_2020">(<a href="#ref-goldsmith-pinkham_bartik_2020" role="doc-biblioref">Goldsmith-Pinkham, Sorkin, and Swift 2020</a>)</span>, the shares are the excluded instruments and the shocks determine their combination. Decomposing the IV ratio makes the resulting weights explicit.</p>

<h3 data-note-section="1" id="34-0-two-exact-decompositions">1. Two exact decompositions</h3>
<p>After partialling out controls, write the endogenous regressor and outcome as {% raw %}<span class="math inline">\(X^\perp,Y^\perp\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} collect the share vectors and let {% raw %}<span class="math inline">\(g\)</span>{% endraw %} collect the shocks, so the Bartik instrument is {% raw %}<span class="math inline">\(B=Zg\)</span>{% endraw %}.</p>

<div id="shares-equivalence" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Whenever the denominator is nonzero,</p>

{% raw %}<div class="math display">\[
\widehat\beta_B=\frac{g&#x27;Z&#x27;Y^\perp}{g&#x27;Z&#x27;X^\perp}
=(X^{\perp\prime}Zgg&#x27;Z&#x27;X^\perp)^{-1}
X^{\perp\prime}Zgg&#x27;Z&#x27;Y^\perp.
\]</div>{% endraw %}
<p>Thus Bartik IV is numerically the GMM estimator using the shares as instruments and weighting matrix {% raw %}<span class="math inline">\(gg&#x27;\)</span>{% endraw %}. If each relevant single-share denominator is nonzero, it also satisfies</p>

{% raw %}<div class="math display">\[
\widehat\beta_B=\sum_k\widehat\alpha_k\widehat\beta_k,
\quad
\widehat\alpha_k=\frac{g_kZ_k&#x27;X^\perp}{\sum_jg_jZ_j&#x27;X^\perp},
\quad
\widehat\beta_k=\frac{Z_k&#x27;Y^\perp}{Z_k&#x27;X^\perp}.
\]</div>{% endraw %}
</div>
<p>The first identity follows by canceling one scalar factor {% raw %}<span class="math inline">\(g&#x27;Z&#x27;X^\perp\)</span>{% endraw %}. For the second, substitute each single-share estimate and cancel its denominator. The weights sum to one but can be negative. If a component denominator is zero, the original ratio remains the appropriate expression; its individual IV estimate is undefined.</p>

<h3 data-note-section="2" id="34-0-what-supplies-identification">2. What supplies identification</h3>
<p>Under share exogeneity, {% raw %}<span class="math inline">\(\mathbb{E}[Z_k\varepsilon]=0\)</span>{% endraw %} for the relevant shares after accounting for controls. A law of large numbers and a nonvanishing aggregate first stage then make the IV error</p>

{% raw %}<div class="math display">\[
\widehat\beta_B-\beta_0
=\frac{\sum_kg_kZ_k&#x27;\varepsilon}{\sum_kg_kZ_k&#x27;X^\perp}
\]</div>{% endraw %}
<p>converge to zero. The moment restriction still needs justification: a share measured before treatment can remain correlated with persistent local trends in later outcomes.</p>

<p>With two exhaustive industries and an intercept, {% raw %}<span class="math inline">\(Z_2=1-Z_1\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(B=g_2+(g_1-g_2)Z_1\)</span>{% endraw %}, and residualizing the intercept leaves a multiple of one share. This makes the identifying restriction especially transparent.</p>

<h3 data-note-section="3" id="34-0-how-to-read-rotemberg-weights">3. How to read Rotemberg weights</h3>
<p>Large absolute weights identify component moments that can strongly transmit identifying failures to the aggregate. They help direct institutional scrutiny, but neither small weights nor large weights establish instrument validity or strength.</p>

<p>Under the paper’s additional heterogeneous-effect and monotonicity restrictions, an individual share IV can average unit effects with nonnegative weights proportional to residualized-share variance times first-stage responsiveness. Combining those estimates with negative Rotemberg weights need not preserve a convex-average interpretation.</p>

<p>The alternative <a href="{% post_url 2023-12-03-shift-share-iv-with-exogenous-shocks-identification-and-inference %}">exogenous-shock argument</a> conditions on the shares and places the identifying restriction on shocks. The algebraic estimator may be identical, but the assumptions and the appropriate inference differ.</p>

<h3 data-note-section="4" id="34-0-why-the-gmm-weighting-matrix-has-rank-one">4. Why the GMM weighting matrix has rank one</h3>
<p>Let {% raw %}<span class="math inline">\(m(\beta)=Z&#x27;(Y^\perp-X^\perp\beta)\)</span>{% endraw %} be the vector of share moments. The quadratic criterion with weighting matrix {% raw %}<span class="math inline">\(gg&#x27;\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
m(\beta)&#x27;gg&#x27;m(\beta)
=(g&#x27;Z&#x27;(Y^\perp-X^\perp\beta))^2.
\]</div>{% endraw %}
<p>The criterion uses one scalar combination of share moments. If {% raw %}<span class="math inline">\(g&#x27;Z&#x27;X^\perp\ne0\)</span>{% endraw %}, setting that combination to zero gives the Bartik ratio. A singular weighting matrix is sufficient for this scalar estimate, and the individual share moments need not all vanish at its solution.</p>

<p>If the controls include an intercept and shares sum to one, residualized shares sum to zero. In the two-industry example,</p>

{% raw %}<div class="math display">\[
Z_2^\perp=-Z_1^\perp,
\qquad B^\perp=(g_1-g_2)Z_1^\perp.
\]</div>{% endraw %}
<p>The shock difference multiplies the residualized instrument and cancels from the IV ratio when nonzero. In this example, all identifying variation comes from the cross-location difference in one share.</p>

<h3 data-note-section="5" id="34-0-a-worked-example-of-negative-weights">5. A worked example of negative weights</h3>
<p>Suppose the aggregate denominator has component contributions {% raw %}<span class="math inline">\(d_1=g_1Z_1&#x27;X^\perp=2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d_2=g_2Z_2&#x27;X^\perp=-1\)</span>{% endraw %}. Their sum is one, so</p>

{% raw %}<div class="math display">\[
\widehat\alpha_1=2,\qquad\widehat\alpha_2=-1.
\]</div>{% endraw %}
<p>If the two share-IV estimates are {% raw %}<span class="math inline">\(\widehat\beta_1=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\beta_2=3\)</span>{% endraw %}, the aggregate estimate is</p>

{% raw %}<div class="math display">\[
\widehat\beta_B=2\cdot1-1\cdot3=-1.
\]</div>{% endraw %}
<p>The aggregate falls outside the component range because one weight is negative. A sum of weights equal to one gives an affine combination; a convex combination also requires nonnegative weights. Opposing shock signs or first-stage covariances can produce this distinction.</p>

<p>More generally, define the total negative mass {% raw %}<span class="math inline">\(A_-=-\sum_{\alpha_k&lt;0}\alpha_k\)</span>{% endraw %}. The positive mass is {% raw %}<span class="math inline">\(1+A_-\)</span>{% endraw %}. If all component effects lie in {% raw %}<span class="math inline">\([L,U]\)</span>{% endraw %}, their weighted sum can range as widely as</p>

{% raw %}<div class="math display">\[
L-A_-(U-L)\quad\text{to}\quad U+A_-(U-L).
\]</div>{% endraw %}
<p>To obtain the lower extreme, attach {% raw %}<span class="math inline">\(L\)</span>{% endraw %} to positive weights and {% raw %}<span class="math inline">\(U\)</span>{% endraw %} to negative weights; reverse them for the upper extreme. This gives a concrete measure of how signed aggregation can magnify heterogeneity. It is an algebraic bound, not a claim that every configuration is attainable under a particular structural model.</p>

<h3 data-note-section="6" id="34-0-which-violations-matter-for-the-aggregate-estimate">6. Which violations matter for the aggregate estimate?</h3>
<p>Let {% raw %}<span class="math inline">\(a_k\)</span>{% endraw %} denote a population share first-stage moment and {% raw %}<span class="math inline">\(\delta_k\)</span>{% endraw %} the corresponding share-error moment. In a homogeneous-effect model the aggregate bias is</p>

{% raw %}<div class="math display">\[
\beta_B-\beta_0
=\frac{\sum_kg_k\delta_k}{\sum_kg_ka_k}.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(a_k\ne0\)</span>{% endraw %}, define the component bias {% raw %}<span class="math inline">\(b_k=\delta_k/a_k\)</span>{% endraw %}. Then the bias becomes {% raw %}<span class="math inline">\(\sum_k\alpha_k b_k\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\alpha_k=g_ka_k/\sum_jg_ja_j\)</span>{% endraw %}. A component carrying a large absolute weight transmits its own identifying failure strongly to the aggregate estimate. If {% raw %}<span class="math inline">\(|b_k|\leq B\)</span>{% endraw %} for every component, then</p>

{% raw %}<div class="math display">\[
|\beta_B-\beta_0|\leq B\sum_k|\alpha_k|
=B(1+2A_-).
\]</div>{% endraw %}
<p>The bound explains why heavily weighted shares merit scrutiny, without asserting that their biases are known. It requires defined component denominators; when those vanish, the aggregate numerator formula remains the appropriate starting point.</p>

<p>Dropping one component gives another exact diagnostic. Let {% raw %}<span class="math inline">\(D=\sum_jg_ja_j\ne0\)</span>{% endraw %} and suppose both the component estimate {% raw %}<span class="math inline">\(\beta_k\)</span>{% endraw %} and the remaining aggregate estimate are defined. Since component {% raw %}<span class="math inline">\(k\)</span>{% endraw %} contributes {% raw %}<span class="math inline">\(\alpha_kD\)</span>{% endraw %} to the denominator and {% raw %}<span class="math inline">\(\alpha_kD\beta_k\)</span>{% endraw %} to the numerator,</p>

{% raw %}<div class="math display">\[
\beta_{B,-k}=\frac{\beta_B-\alpha_k\beta_k}{1-\alpha_k},
\qquad
\beta_{B,-k}-\beta_B
=\frac{\alpha_k}{1-\alpha_k}(\beta_B-\beta_k).
\]</div>{% endraw %}
<p>Deletion depends on both weight and disagreement with the aggregate. If {% raw %}<span class="math inline">\(\alpha_k\)</span>{% endraw %} is near one, the remaining denominator is small and magnifies the difference. A large deletion effect can therefore reflect disagreement between identifying moments, a weak remaining first stage, or both.</p>

<p>For a small perturbation of a nonzero shock {% raw %}<span class="math inline">\(g_k\)</span>{% endraw %}, holding the share moments fixed, differentiation gives</p>

{% raw %}<div class="math display">\[
\frac{\partial\beta_B}{\partial\log|g_k|}
=\alpha_k(\beta_k-\beta_B).
\]</div>{% endraw %}
<p>The derivative is the local version of deletion: weight multiplied by component disagreement measures sensitivity. Neither diagnostic replaces the substantive share-exogeneity assumption. Stability after removing small-weight components provides little information about it.</p>

<h3 data-note-section="7" id="34-0-predetermined-composition-and-persistent-trends">7. Predetermined composition and persistent trends</h3>
<p>Suppose the baseline share satisfies {% raw %}<span class="math inline">\(Z_{\ell k}=h_k(U_\ell)+v_{\ell k}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(U_\ell\)</span>{% endraw %} is persistent. Let the outcome error contain {% raw %}<span class="math inline">\(\lambda U_\ell\)</span>{% endraw %}, with its remaining part uncorrelated with the systematic share component. Then</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z_{\ell k},\varepsilon_\ell)
=\lambda\operatorname{Cov}(h_k(U_\ell),U_\ell)
+\operatorname{Cov}(v_{\ell k},\varepsilon_\ell).
\]</div>{% endraw %}
<p>Early measurement does not make these covariances vanish. The identifying argument must explain why baseline composition is unrelated to counterfactual outcome changes after controls. The <a href="{% post_url 2025-02-02-instrumental-variables-for-taxable-income-elasticities %}">tax-reform IV discussion</a> raises the same issue when removing contemporaneous feedback leaves correlation with earlier characteristics.</p>

<p>With heterogeneous treatment effects, each valid single-share IV may itself be a weighted response under the paper’s additional first-stage and monotonicity assumptions. The aggregate then combines those weighted responses using the Rotemberg weights. One should establish the component interpretation before assigning an interpretation to their possibly signed sum. The <a href="{% post_url 2023-12-03-shift-share-iv-with-exogenous-shocks-identification-and-inference %}">shock-based argument</a> instead conditions on shares and locates randomness at the shock level; it changes the identifying assumption even when the numerical coefficient is unchanged.</p>

<h3 id="34-0-relating-a-weight-to-a-component-first-stage-statistic">Relating a weight to a component first-stage statistic</h3>
<p>A Rotemberg weight is not itself a first-stage {% raw %}<span class="math inline">\(F\)</span>{% endraw %} statistic. To make the distinction exact, use the same residualization and sample for every variable and write {% raw %}<span class="math inline">\(S_B=B^{\perp\prime}B^\perp\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_k=Z_k^{\perp\prime}Z_k^\perp\)</span>{% endraw %}. The individual and aggregate first-stage coefficients are {% raw %}<span class="math inline">\(\widehat\pi_k=Z_k^{\perp\prime}X^\perp/S_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\pi=B^{\perp\prime}X^\perp/S_B\)</span>{% endraw %}. Thus</p>
<p>{% raw %}<div class="math display">\[
\widehat\alpha_k
=\frac{g_k\widehat\pi_kS_k}{\widehat\pi S_B}.
\]</div>{% endraw %}</p>
<p>Let {% raw %}<span class="math inline">\(\widehat v_k,\widehat v\)</span>{% endraw %} be the estimated variances of these coefficients, and define the one-coefficient Wald statistics {% raw %}<span class="math inline">\(F_k=\widehat\pi_k^2/\widehat v_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F=\widehat\pi^2/\widehat v\)</span>{% endraw %}. When the displayed denominators and {% raw %}<span class="math inline">\(g_k\)</span>{% endraw %} are nonzero,</p>
<p>{% raw %}<div class="math display">\[
\frac{F_k}{F}
=\widehat\alpha_k^2
\left(\frac{S_B}{g_kS_k}\right)^2
\frac{\widehat v}{\widehat v_k}.
\]</div>{% endraw %}</p>
<p>The exposure-variance ratio is squared because an {% raw %}<span class="math inline">\(F\)</span>{% endraw %} statistic squares its coefficient. Dropping this square would not follow from the weight identity. The formula also depends on instrument scales and coefficient uncertainty, so a large absolute Rotemberg weight alone cannot establish a strong component first stage. If an instrument has zero residual variance or its coefficient is unidentified, use the original aggregate moment rather than this decomposition.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-goldsmith-pinkham_bartik_2020" class="csl-entry" role="listitem">
Goldsmith-Pinkham, Paul, Isaac Sorkin, and Henry Swift. 2020. <span>“Bartik Instruments: What, When, Why, and How.”</span> <em>American Economic Review</em> 110 (8): 2586–2624. <a href="https://doi.org/10.1257/aer.20181047">https://doi.org/10.1257/aer.20181047</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-12-03-shift-share-iv-with-exogenous-shocks-identification-and-inference %}">Shift-Share IV with Exogenous Shocks: Identification and Inference</a></p></nav>

</div>
