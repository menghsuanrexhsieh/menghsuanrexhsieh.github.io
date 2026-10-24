---
layout: "post"
title: "Probability Bounds Behind Post-Double Selection"
date: "2024-06-29"
tags: ["econometrics", "machine learning"]
excerpt: "The proof of post-double selection needs more than a prediction-error bound."
note_series: "Post-double-selection lasso"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Post-Double-Selection Lasso/stats.tex"
---

<div class="note-content" markdown="0">

<p>The selected controls depend on the data, so a probability bound for one fixed regression does not suffice for <a href="{% post_url 2024-03-02-post-double-selection-orthogonality-assumptions-and-inference %}">post-double selection</a>. The proof in <span class="citation" data-cites="belloni_inference_2014"><a href="#ref-belloni_inference_2014" role="doc-biblioref">Belloni, Chernozhukov, and Hansen (2014)</a></span> constructs events that control all relevant scores and sparse submodels at once. On those events, the selected model has both a small prediction error and a controlled size.</p>

<h3 data-note-section="1" id="19-22-the-bounds-we-need">1. The bounds we need</h3>
<p>Write {% raw %}<span class="math inline">\(Y_i=f(Z_i)+\epsilon_i\)</span>{% endraw %} and approximate {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by {% raw %}<span class="math inline">\(X_i&#x27;\beta_0\)</span>{% endraw %}, with at most {% raw %}<span class="math inline">\(s\)</span>{% endraw %} nonzero coefficients. Under the paper’s regularity conditions, feasible Lasso and post-Lasso give</p>

{% raw %}<div class="math display">\[
|\widehat T|=O_P(s),\qquad
\|X(\widetilde\beta-\beta_0)\|_{2,n}
=O_P\!\left(\sqrt{\frac{s\log(p\vee n)}n}\right),
\]</div>{% endraw %}
<p>with approximation error included at the same order. A restricted eigenvalue condition converts prediction control into coefficient control on the relevant sparse sets. It does not control arbitrary dense directions.</p>

<h3 data-note-section="2" id="19-22-why-the-penalty-contains-a-gaussian-quantile">2. Why the penalty contains a Gaussian quantile</h3>
<p>For coordinate {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, the relevant random score is a sum of {% raw %}<span class="math inline">\(U_{ij}=X_{ij}\epsilon_i\)</span>{% endraw %}. Studentizing it gives</p>

{% raw %}<div class="math display">\[
S_j\triangleq\frac{\sum_iU_{ij}}{\sqrt{\sum_iU_{ij}^2}}.
\]</div>{% endraw %}
<p>Self-normalized moderate deviations approximate each tail by a Gaussian tail over a range determined by the third moments. With {% raw %}<span class="math inline">\(z=\Phi^{-1}(1-\gamma/(2p))\)</span>{% endraw %} in that range, a union bound yields</p>

{% raw %}<div class="math display">\[
P\!\left(\max_{j\le p}|S_j|&gt;z\right)
\le \gamma(1+o(1)).
\]</div>{% endraw %}
<p>The denominator adapts to heteroskedasticity. The union bound explains the {% raw %}<span class="math inline">\(\log p\)</span>{% endraw %} cost: {% raw %}<span class="math inline">\(z\)</span>{% endraw %} is of order {% raw %}<span class="math inline">\(\sqrt{\log(p/\gamma)}\)</span>{% endraw %}. This approximation is not valid for unrestricted growth of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}; its moment-dependent range must cover that quantile.</p>

<h3 data-note-section="3" id="19-22-from-the-score-event-to-prediction-error">3. From the score event to prediction error</h3>
<p>On the event that the penalty dominates all noise scores, the basic Lasso inequality compares the fitted objective with the objective at {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %}. Splitting the coefficient error into the true support and its complement gives a cone restriction. The restricted eigenvalue then changes an {% raw %}<span class="math inline">\(\ell_1\)</span>{% endraw %} error bound into</p>

{% raw %}<div class="math display">\[
\|X(\widehat\beta-\beta_0)\|_{2,n}
\lesssim \sqrt{s}\,\sqrt{\log(p\vee n)/n}
+\text{approximation error}.
\]</div>{% endraw %}
<p>Prediction control does not by itself bound the selected size. A separate argument using the first-order optimality equations does that. Least-squares refitting can then remove shrinkage while retaining the prediction rate.</p>

<h3 data-note-section="4" id="19-22-work-through-the-basic-inequality">4. Work through the basic inequality</h3>
<p>First take an exact sparse model {% raw %}<span class="math inline">\(Y=X\beta_0+\epsilon\)</span>{% endraw %}, with support {% raw %}<span class="math inline">\(T\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, and unweighted columns normalized to empirical second moment one. Define Lasso by</p>

{% raw %}<div class="math display">\[
\widehat\beta\in\arg\min_\beta
\left(\frac1{2n}\|Y-X\beta\|^2+\lambda\|\beta\|_1\right).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\delta=\widehat\beta-\beta_0\)</span>{% endraw %}. Comparing the objective at {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %}, then cancelling {% raw %}<span class="math inline">\(\|\epsilon\|^2/(2n)\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[
\frac12\|X\delta\|_{2,n}^2
\le\frac{\epsilon&#x27;X\delta}{n}
+\lambda(\|\beta_0\|_1-\|\beta_0+\delta\|_1).
\]</div>{% endraw %}
<p>On the score event {% raw %}<span class="math inline">\(\|X&#x27;\epsilon/n\|_\infty\le\lambda/2\)</span>{% endraw %}, Hölder’s inequality bounds the first term by {% raw %}<span class="math inline">\(\lambda\|\delta\|_1/2\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\beta_{0,T^c}=0\)</span>{% endraw %}, the penalty difference is at most {% raw %}<span class="math inline">\(\|\delta_T\|_1-\|\delta_{T^c}\|_1\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\frac12\|X\delta\|_{2,n}^2
+\frac\lambda2\|\delta_{T^c}\|_1
\le\frac{3\lambda}2\|\delta_T\|_1.
\]</div>{% endraw %}
<p>Dropping the nonnegative prediction term yields the cone {% raw %}<span class="math inline">\(\|\delta_{T^c}\|_1\le3\|\delta_T\|_1\)</span>{% endraw %}. Define a restricted eigenvalue {% raw %}<span class="math inline">\(\kappa&gt;0\)</span>{% endraw %} by requiring {% raw %}<span class="math inline">\(\|X\delta\|_{2,n}\ge\kappa\|\delta_T\|_2\)</span>{% endraw %} on that cone. Cauchy–Schwarz now gives</p>

{% raw %}<div class="math display">\[
\|X\delta\|_{2,n}^2
\le3\lambda\sqrt s\|\delta_T\|_2
\le\frac{3\lambda\sqrt s}{\kappa}\|X\delta\|_{2,n}.
\]</div>{% endraw %}
<p>If the prediction norm is positive, divide both sides by it to obtain {% raw %}<span class="math inline">\(3\lambda\sqrt s/\kappa\)</span>{% endraw %}. If it is zero, the bound already holds. The score event supplies the cone, sparsity supplies the square-root factor, and the restricted eigenvalue connects coefficient error to prediction error.</p>

<p>With approximation error {% raw %}<span class="math inline">\(r=f-X\beta_0\)</span>{% endraw %}, the basic inequality gains {% raw %}<span class="math inline">\(r&#x27;X\delta/n\)</span>{% endraw %}, bounded by {% raw %}<span class="math inline">\(\|r\|_{2,n}\|X\delta\|_{2,n}\)</span>{% endraw %}. For an oracle approximation with {% raw %}<span class="math inline">\(\|r\|_{2,n}\)</span>{% endraw %} of the target prediction order, the paper’s approximate-sparsity argument absorbs this term at that order. The exact-model cone calculation alone is not a proof for unrestricted approximation errors.</p>

<h3 data-note-section="5" id="19-22-why-the-selected-model-stays-small">5. Why the selected model stays small</h3>
<p>For every selected coordinate, the KKT equations give {% raw %}<span class="math inline">\(|X_j&#x27;(Y-X\widehat\beta)/n|=\lambda\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\widehat s\)</span>{% endraw %} coordinates are selected, the Euclidean norm of these selected scores is {% raw %}<span class="math inline">\(\lambda\sqrt{\widehat s}\)</span>{% endraw %}. On the score event, at least half of that norm must be explained by the fitted-error component. Thus, in the exact model,</p>

{% raw %}<div class="math display">\[
\frac\lambda2\sqrt{\widehat s}
\le\left\|\frac{X_{\widehat T}&#x27;X\delta}{n}\right\|_2
\le\sqrt{\phi_{\max}(\widehat s)}\,\|X\delta\|_{2,n},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\phi_{\max}(q)\)</span>{% endraw %} is the largest empirical eigenvalue among {% raw %}<span class="math inline">\(q\)</span>{% endraw %}-column submodels. Substituting the prediction bound gives</p>

{% raw %}<div class="math display">\[
\widehat s\le\frac{36\phi_{\max}(\widehat s)}{\kappa^2}s.
\]</div>{% endraw %}
<p>The inequality contains the selected size on both sides. A suitable sparse-eigenvalue assumption must resolve it before concluding {% raw %}<span class="math inline">\(\widehat s=O_p(s)\)</span>{% endraw %}. Assuming a bound only at size {% raw %}<span class="math inline">\(s\)</span>{% endraw %} would leave the random selected size uncontrolled.</p>

<h3 data-note-section="6" id="19-22-a-loading-calculation">6. A loading calculation</h3>
<p>To see the maximum-over-coordinates issue explicitly, let {% raw %}<span class="math inline">\(V_{ij}\)</span>{% endraw %} be independent across observations and centered, and let {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} be independent random signs. Symmetrization gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}\max_j\left|\frac1n\sum_iV_{ij}\right|
\le2\mathbb{E}\max_j\left|\frac1n\sum_i\varepsilon_iV_{ij}\right|.
\]</div>{% endraw %}
<p>Conditional on the data, {% raw %}<span class="math inline">\(\mathbb{E}_\varepsilon e^{t\sum_i\varepsilon_iV_{ij}}\le\exp(t^2\sum_iV_{ij}^2/2)\)</span>{% endraw %}. Apply the exponential bound to both signs and all {% raw %}<span class="math inline">\(p\)</span>{% endraw %} coordinates, then optimize {% raw %}<span class="math inline">\(t\)</span>{% endraw %} to obtain</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\varepsilon\max_j\left|\sum_i\varepsilon_iV_{ij}\right|
\le\sqrt{2\log(2p)}\max_j\sqrt{\sum_iV_{ij}^2}.
\]</div>{% endraw %}
<p>This conditional bound still contains a random scale, which must be bounded using moments or an envelope. For penalty loadings, squared regressor–error products require more moment control than a single score mean. The <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">empirical-process symmetrization argument</a> develops the same random-sign method more generally.</p>

<p>The logarithm comes from summing exponential bounds over coordinates. To derive it directly, set {% raw %}<span class="math inline">\(V=\max_j\sum_iV_{ij}^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M=\max_j|\sum_i\varepsilon_iV_{ij}|\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, the two signs of every coordinate give</p>

{% raw %}<div class="math display">\[
\mathbb{E}_\varepsilon e^{tM}\leq2p\,e^{t^2V/2},
\qquad
\mathbb{E}_\varepsilon M
\leq\frac{\log(2p)}t+\frac{tV}{2}.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(V&gt;0\)</span>{% endraw %}, the derivative of the right side vanishes at {% raw %}<span class="math inline">\(t=\sqrt{2\log(2p)/V}\)</span>{% endraw %}, yielding {% raw %}<span class="math inline">\(\sqrt{2V\log(2p)}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(V=0\)</span>{% endraw %}, every summand vanishes. Independence across dictionary coordinates is unnecessary: only the conditional sign bound for each coordinate and the sum over coordinates were used.</p>

<p>This separates two effects of correlated dictionary columns. The maximum-score bound uses a sum over coordinates, with a logarithmic cost in their number; it does not require independent columns. Distinguishing sparse coefficient vectors from their predictions is the separate task of the restricted-eigenvalue condition.</p>

<h3 data-note-section="7" id="19-22-two-less-visible-steps">7. Two less visible steps</h3>
<p>Estimated penalty loadings involve averages of {% raw %}<span class="math inline">\(X_{ij}^2\epsilon_i^2\)</span>{% endraw %}. Symmetrization introduces independent random signs; conditional maximal inequalities then bound the largest fluctuation across coordinates. Fourth moments or suitable tail restrictions keep the resulting random envelope under control.</p>

<p>For a single mean, much less is needed. If independent centered {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(n^{-1}\sum_i\mathbb{E}|V_i|^r\le C\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1\le r\le2\)</span>{% endraw %}, the von Bahr–Esseen inequality and Markov’s inequality give</p>

{% raw %}<div class="math display">\[
P\left(\left|n^{-1}\sum_iV_i\right|&gt;
\ell n^{-(1-1/r)}\right)\le 2C\ell^{-r}.
\]</div>{% endraw %}
<p>A law of large numbers for one mean and a uniform bound over a growing dictionary solve different problems. The double-selection proof uses a uniform dictionary bound when a data-dependent choice of regressors must be covered.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-belloni_inference_2014" class="csl-entry" role="listitem">
Belloni, A., V. Chernozhukov, and C. Hansen. 2014. <span>“Inference on Treatment Effects After Selection Among High-Dimensional Controls.”</span> <em>The Review of Economic Studies</em> 81 (2): 608–50. <a href="https://doi.org/10.1093/restud/rdt044">https://doi.org/10.1093/restud/rdt044</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-02-post-double-selection-orthogonality-assumptions-and-inference %}">Post-Double Selection: Orthogonality, Assumptions, and Inference</a></p></nav>

</div>
