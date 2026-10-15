---
layout: "post"
title: "Post-Double Selection: Orthogonality, Assumptions, and Inference"
date: "2024-03-02"
tags: ["econometrics", "machine learning"]
excerpt: "The difficulty with selecting controls is that a variable can be easy to miss in the outcome regression and still matter for the treatment coefficient."
note_series: "Post-double-selection lasso"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Post-Double-Selection Lasso/stats.tex"
redirect_from: ["/2024/03/02/post-double-selection-setup-and-orthogonal-moments/", "/2024/04/10/approximate-sparsity-and-design-conditions/", "/2024/05/20/post-double-selection-asymptotic-normality/"]
---

<div class="note-content" markdown="0">

<p>A control can contribute little to outcome prediction and still affect inference for a treatment coefficient. If it strongly predicts treatment, omitting even a small outcome effect can shift the coefficient on the confidence-interval scale. Post-double selection <span class="citation" data-cites="belloni_inference_2014">(<a href="#ref-belloni_inference_2014" role="doc-biblioref">Belloni, Chernozhukov, and Hansen 2014</a>)</span> gives such a control two opportunities to enter: through the outcome regression and through the treatment regression.</p>

<h3 data-note-section="1" id="19-0-the-result-and-its-scope">1. The result and its scope</h3>
<p>The partially linear model separates the treatment coefficient from two nuisance functions:</p>

{% raw %}<div class="math display">\[
Y=\alpha_0D+g(Z)+\zeta,\qquad D=m(Z)+v,
\qquad \mathbb{E}[\zeta\mid D,Z]=0,\quad \mathbb{E}[v\mid Z]=0.
\]</div>{% endraw %}
<p>A large dictionary {% raw %}<span class="math inline">\(X=p(Z)\)</span>{% endraw %} approximates both nuisance functions using at most {% raw %}<span class="math inline">\(s\)</span>{% endraw %} terms. Run Lasso of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and of {% raw %}<span class="math inline">\(D\)</span>{% endraw %} on {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, take the union of the selected controls, and regress {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} on {% raw %}<span class="math inline">\(D\)</span>{% endraw %} and that union.</p>

<div id="double-selection-limit" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s approximate-sparsity, sparse-eigenvalue, moment, and penalty conditions, including {% raw %}<span class="math inline">\(s^2\log^2(p\vee n)/n\to0\)</span>{% endraw %}, the resulting estimator satisfies</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\alpha-\alpha_0)/\sigma\Rightarrow \mathcal{N}(0,1),
\qquad
\sigma^2=\frac{\mathbb{E}[v^2\zeta^2]}{\mathbb{E}[v^2]^2}.
\]</div>{% endraw %}
<p>The residual-based variance estimator is consistent under the accompanying conditions. The result is uniform over the specified approximately sparse class; exact recovery of a particular model is not required.</p>

</div>
<p>The sparsity rate states how fast approximation errors must shrink. It must be accompanied by moment and design assumptions: treatment needs residual variation, and the relevant sparse submodels need well-conditioned quadratic forms.</p>

<h3 data-note-section="2" id="19-0-why-two-selections-help">2. Why two selections help</h3>
<p>Suppose a control has a small outcome coefficient but strongly predicts {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Outcome selection may discard it because its contribution to prediction error is small. Its omission can nevertheless change the coefficient of {% raw %}<span class="math inline">\(D\)</span>{% endraw %} appreciably. The treatment regression gives this control a second route into the final model.</p>

<p>For a direct calculation, let {% raw %}<span class="math inline">\(D=\pi Z+v\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y=\alpha_0D+\beta Z+\zeta\)</span>{% endraw %}, and normalize {% raw %}<span class="math inline">\(\operatorname{Var}(Z)=1\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is uncorrelated with {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\zeta\)</span>{% endraw %} is uncorrelated with both. Regressing {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} only on {% raw %}<span class="math inline">\(D\)</span>{% endraw %} targets</p>

{% raw %}<div class="math display">\[
\frac{\operatorname{Cov}(D,Y)}{\operatorname{Var}(D)}
=\alpha_0+\frac{\beta\pi}{\pi^2+\operatorname{Var}(v)}.
\]</div>{% endraw %}
<p>Even {% raw %}<span class="math inline">\(\beta=c/\sqrt n\)</span>{% endraw %} gives a nonvanishing displacement on the scale of a confidence interval, although the omitted term’s prediction loss is only {% raw %}<span class="math inline">\(c^2/n\)</span>{% endraw %}. Selection based only on predictive fit need not distinguish this error from noise. A strong coefficient {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} in the treatment equation makes the same control easier to retain there.</p>

<p>To understand why two approximations help, consider a moment that residualizes both treatment and outcome:</p>

{% raw %}<div class="math display">\[
\psi(\alpha,g,m)=(D-m(Z))(Y-\alpha D-g(Z)).
\]</div>{% endraw %}
<p>Replace {% raw %}<span class="math inline">\(m\)</span>{% endraw %} by {% raw %}<span class="math inline">\(m+a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %} by {% raw %}<span class="math inline">\(g+b\)</span>{% endraw %}. At the true treatment coefficient,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\psi(\alpha_0,g+b,m+a)]
=\mathbb{E}[(v-a)(\zeta-b)]=\mathbb{E}[ab].
\]</div>{% endraw %}
<p>Conditional mean zero eliminates both terms linear in a nuisance error. The remaining product is bounded by {% raw %}<span class="math inline">\(\|a\|_2\|b\|_2\)</span>{% endraw %}. Prediction errors of order {% raw %}<span class="math inline">\(\sqrt{s\log(p\vee n)/n}\)</span>{% endraw %} therefore give a bias smaller than {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} under the stated sparsity rate.</p>

<p>In derivative notation, for perturbations {% raw %}<span class="math inline">\(h_g,h_m\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\left.\frac d{dt}\mathbb{E}\psi(\alpha_0,g+th_g,m+th_m)\right|_{t=0}
=-\mathbb{E}[vh_g(Z)]-\mathbb{E}[\zeta h_m(Z)]=0.
\]</div>{% endraw %}
<p>The first equality identifies the two potentially harmful terms; the second follows by conditioning on {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}. The mixed derivative need not vanish. Orthogonality removes first-order nuisance bias, leaving a product that still has to be small.</p>

<p>Population cancellation is only part of the proof when the same observations select and fit the controls. The selected subspace depends on the noise. Model-size bounds and the <a href="{% post_url 2024-06-29-probability-bounds-behind-post-double-selection %}">probability inequalities behind the argument</a> control this additional dependence.</p>

<h3 data-note-section="3" id="19-0-reading-the-final-regression">3. Reading the final regression</h3>
<p>Frisch–Waugh–Lovell writes the final coefficient as a regression between residualized treatment and outcome. The selected union approximates both nuisance regressions, leaving</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\alpha-\alpha_0)
=(\mathbb{E}[v^2])^{-1}\frac1{\sqrt n}\sum_{i=1}^n v_i\zeta_i+o_P(1).
\]</div>{% endraw %}
<p>The CLT applies once selection errors are absent from the leading term. Establishing that reduction is most of the argument. The <a href="{% post_url 2025-05-05-the-fragility-of-sparsity-coordinates-geometry-and-specification-tests %}">fragility of sparsity</a> concerns whether a proposed dictionary admits the required approximation; the inference theorem assumes that property within its specified class.</p>

<h3 data-note-section="4" id="19-0-expand-the-regression-remainder">4. Expand the regression remainder</h3>
<p>Let {% raw %}<span class="math inline">\(P\)</span>{% endraw %} project onto the selected union, {% raw %}<span class="math inline">\(M=I-P\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(r_m=Mm\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r_g=Mg\)</span>{% endraw %}, treating the evaluated functions as sample vectors. Since {% raw %}<span class="math inline">\(D=m+v\)</span>{% endraw %}, the residualized treatment is {% raw %}<span class="math inline">\(MD=r_m+Mv\)</span>{% endraw %}. The final regression obeys the exact identity</p>

{% raw %}<div class="math display">\[
\widehat\alpha-\alpha_0
=\frac{D&#x27;M\zeta+D&#x27;Mg}{D&#x27;MD}.
\]</div>{% endraw %}
<p>Use {% raw %}<span class="math inline">\(M^2=M\)</span>{% endraw %} and the fact that {% raw %}<span class="math inline">\(r_m,r_g\)</span>{% endraw %} lie in the range of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. The numerator becomes</p>

{% raw %}<div class="math display">\[
v&#x27;\zeta-v&#x27;P\zeta+r_m&#x27;\zeta+v&#x27;r_g+r_m&#x27;r_g.
\]</div>{% endraw %}
<p>This displays the influence sum {% raw %}<span class="math inline">\(v&#x27;\zeta\)</span>{% endraw %} and four remainders. The last is the sample counterpart of the nuisance-product bias:</p>

{% raw %}<div class="math display">\[
\frac{|r_m&#x27;r_g|}{\sqrt n}
\le\sqrt n\,\|r_m\|_{2,n}\|r_g\|_{2,n}
=O_p\!\left(\frac{s\log(p\vee n)}{\sqrt n}\right).
\]</div>{% endraw %}
<p>Because selection uses the outcomes and treatments, conditioning on {% raw %}<span class="math inline">\(P\)</span>{% endraw %} does not make the errors independent of it. Instead, bound the noise scores simultaneously over all eligible sparse submodels. The event then also covers the randomly selected union.</p>

<p>The denominator has the corresponding expansion</p>

{% raw %}<div class="math display">\[
D&#x27;MD=v&#x27;v-v&#x27;Pv+2v&#x27;r_m+r_m&#x27;r_m.
\]</div>{% endraw %}
<p>Under the stated assumptions, division by {% raw %}<span class="math inline">\(n\)</span>{% endraw %} leaves {% raw %}<span class="math inline">\(\mathbb{E}[v^2]+o_p(1)\)</span>{% endraw %}. The lower bound on this expectation prevents a small denominator from magnifying otherwise negligible remainder terms. Combining numerator and denominator gives the displayed influence expansion.</p>

<h4 data-note-section="4.1" id="19-0-control-the-two-projected-noise-vectors-together">4.1. Control the two projected noise vectors together</h4>
<p>The term {% raw %}<span class="math inline">\(v&#x27;P\zeta\)</span>{% endraw %} shows why a prediction rate alone is insufficient. For any subset {% raw %}<span class="math inline">\(J\)</span>{% endraw %} of at most {% raw %}<span class="math inline">\(Cs\)</span>{% endraw %} dictionary columns, put {% raw %}<span class="math inline">\(\widehat Q_J=X_J&#x27;X_J/n\)</span>{% endraw %}, and suppose its smallest eigenvalue is at least {% raw %}<span class="math inline">\(\kappa_0&gt;0\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\frac{v&#x27;P_Jv}{n}
&amp;=(X_J&#x27;v/n)&#x27;\widehat Q_J^{-1}(X_J&#x27;v/n)\\
&amp;\leq\frac{|J|}{\kappa_0}\|X&#x27;v/n\|_\infty^2.
\end{aligned}
\]</div>{% endraw %}
<p>A simultaneous score bound of order {% raw %}<span class="math inline">\(\sqrt{\log p/n}\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\|P_Jv\|_{2,n}=O_p(\sqrt{s\log p/n})\)</span>{% endraw %}, uniformly over these subsets. The same argument applies to {% raw %}<span class="math inline">\(\zeta\)</span>{% endraw %}. Because the event holds for every eligible {% raw %}<span class="math inline">\(J\)</span>{% endraw %}, it also holds for the random selected union. Therefore</p>

{% raw %}<div class="math display">\[
\frac{|v&#x27;P\zeta|}{\sqrt n}
\leq\sqrt n\,\|Pv\|_{2,n}\|P\zeta\|_{2,n}
=O_p(s\log p/\sqrt n).
\]</div>{% endraw %}
<p>The simultaneous score event makes the bound valid for the selected model even though selection used the noise. Together with prediction and size control, it recovers the first-order influence function of the infeasible regression with known nuisance functions.</p>

<p>Double selection thus supplies two approximations, and the proof bounds their products and their correlations with noise at the inference scale. Good predictive fit in one selected regression alone does not establish those bounds.</p>

<h3 data-note-section="5" id="19-0-studentization">5. Studentization</h3>
<p>Write {% raw %}<span class="math inline">\(\widehat v_i\)</span>{% endraw %} for the final treatment residual and {% raw %}<span class="math inline">\(\widehat\zeta_i=Y_i-\widehat\alpha D_i-X_i&#x27;\widehat\beta\)</span>{% endraw %} for the outcome residual. The natural variance estimate for the limiting distribution of {% raw %}<span class="math inline">\(\sqrt n(\widehat\alpha-\alpha_0)\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
\widehat\sigma^2\triangleq
\frac{n^{-1}\sum_i\widehat v_i^2\widehat\zeta_i^2}
     {(n^{-1}\sum_i\widehat v_i^2)^2}.
\]</div>{% endraw %}
<p>Consistency of this variance estimate requires control of squared residual products as well as the coefficient. Under the stated integrability and nuisance-rate conditions, Slutsky’s theorem gives {% raw %}<span class="math inline">\(\widehat\alpha\pm z_{1-\alpha/2}\widehat\sigma/\sqrt n\)</span>{% endraw %}. The argument does not require selection of one exactly correct model.</p>

<h3 id="19-0-the-remaining-correlations-with-selected-model-errors">The remaining correlations with selected-model errors</h3>
<p>The two terms {% raw %}<span class="math inline">\(r_m&#39;\zeta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v&#39;r_g\)</span>{% endraw %} need an argument beyond the product bound. Here is one sufficient version, under independent observations, bounded conditional error variances, and the simultaneous sparse-projection bound already established. Write {% raw %}<span class="math inline">\(m=X\beta_m+a_m\)</span>{% endraw %} with oracle support of size at most {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, and suppose both {% raw %}<span class="math inline">\(\|a_m\|_{2,n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|r_m\|_{2,n}\)</span>{% endraw %} are {% raw %}<span class="math inline">\(O_p(r_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(r_n=\sqrt{s\log(p\vee n)/n}\)</span>{% endraw %}. Use the same approximation for {% raw %}<span class="math inline">\(g\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(A\)</span>{% endraw %} be the span of the selected dictionary columns together with the oracle support for {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Its dimension is {% raw %}<span class="math inline">\(O(s)\)</span>{% endraw %}. The vector {% raw %}<span class="math inline">\(MX\beta_m\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, even though the choice of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is random, and</p>
<p>{% raw %}<div class="math display">\[
\|MX\beta_m\|_{2,n}
\leq\|r_m\|_{2,n}+\|Ma_m\|_{2,n}=O_p(r_n).
\]</div>{% endraw %}</p>
<p>The score bound holds simultaneously over all such supports, so {% raw %}<span class="math inline">\(\|P_A\zeta\|_{2,n}=O_p(r_n)\)</span>{% endraw %}. Consequently</p>
<p>{% raw %}<div class="math display">\[
\frac{|(MX\beta_m)&#39;\zeta|}{\sqrt n}
\leq\sqrt n\|MX\beta_m\|_{2,n}\|P_A\zeta\|_{2,n}
=O_p(\sqrt n r_n^2)=o_p(1).
\]</div>{% endraw %}</p>
<p>For the approximation residual, decompose {% raw %}<span class="math inline">\(a_m&#39;M\zeta=a_m&#39;\zeta-a_m&#39;P\zeta\)</span>{% endraw %}. Conditional on the covariates, {% raw %}<span class="math inline">\(a_m\)</span>{% endraw %} is fixed and the first term divided by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} has mean zero and variance at most {% raw %}<span class="math inline">\(C\|a_m\|_{2,n}^2=o_p(1)\)</span>{% endraw %}. Conditional Chebyshev, restricting first to events where this norm is small, makes it {% raw %}<span class="math inline">\(o_p(1)\)</span>{% endraw %}. The second term divided by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(\sqrt n\|a_m\|_{2,n}\|P\zeta\|_{2,n}=O_p(\sqrt n r_n^2)\)</span>{% endraw %}. This proves {% raw %}<span class="math inline">\(r_m&#39;\zeta/\sqrt n=o_p(1)\)</span>{% endraw %}.</p>
<p>The identical decomposition of {% raw %}<span class="math inline">\(r_g\)</span>{% endraw %} uses {% raw %}<span class="math inline">\(\mathbb E[v\mid Z]=0\)</span>{% endraw %} and the sparse-projection bound for {% raw %}<span class="math inline">\(v\)</span>{% endraw %} to prove {% raw %}<span class="math inline">\(v&#39;r_g/\sqrt n=o_p(1)\)</span>{% endraw %}. All four numerator remainders are now controlled. These sufficient bounded-variance conditions explain the mechanism; the paper’s more general uniform theorem uses its stated moment and approximation conditions. Conditioning on the selected model itself would not justify either calculation.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-belloni_inference_2014" class="csl-entry" role="listitem">
Belloni, A., V. Chernozhukov, and C. Hansen. 2014. <span>“Inference on Treatment Effects After Selection Among High-Dimensional Controls.”</span> <em>The Review of Economic Studies</em> 81 (2): 608–50. <a href="https://doi.org/10.1093/restud/rdt044">https://doi.org/10.1093/restud/rdt044</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2024-06-29-probability-bounds-behind-post-double-selection %}">Probability Bounds Behind Post-Double Selection</a></p></nav>

</div>
