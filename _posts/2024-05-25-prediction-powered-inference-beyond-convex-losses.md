---
layout: "post"
title: "Prediction-Powered Inference Beyond Convex Losses"
date: "2024-05-25"
tags: ["statistics", "machine learning"]
excerpt: "A nonconvex risk can have stationary points that are not minimizers."
note_series: "Prediction-powered inference"
note_source: "assets/notes/Overleaf Projects (32 items)/prediction powered inference notes/ideas.tex"
---

<div class="note-content" markdown="0">

<p>A zero population gradient need not identify a minimizer of a nonconvex risk. We can instead compare the risk of a candidate with that of a separately chosen benchmark: a true global minimizer cannot have greater risk. <span class="citation" data-cites="angelopoulos_prediction-powered_2023">(<a href="#ref-angelopoulos_prediction-powered_2023" role="doc-biblioref">Angelopoulos et al. 2023</a>)</span> combines this inequality with prediction-error correction to construct a confidence set.</p>

<h3 data-note-section="1" id="31-29-the-coverage-statement">1. The coverage statement</h3>
<p>Write {% raw %}<span class="math inline">\(L(\theta)=\mathbb{E}[\ell_\theta(X,Y)]\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} be a population minimizer. Split the unlabeled data. Use the first part to choose a benchmark {% raw %}<span class="math inline">\(\widehat\theta^f\)</span>{% endraw %} by minimizing predicted loss, and reserve the other part for inference. Define</p>

{% raw %}<div class="math display">\[
L^f(\theta)\triangleq\mathbb{E}[\ell_\theta(X,f(X))],
\qquad \Delta(\theta)\triangleq L(\theta)-L^f(\theta).
\]</div>{% endraw %}
<p>On the held-out data, let {% raw %}<span class="math inline">\(\widetilde L^f\)</span>{% endraw %} estimate {% raw %}<span class="math inline">\(L^f\)</span>{% endraw %}. Suppose the labeled sample supplies lower and upper bounds {% raw %}<span class="math inline">\(R^l,R^u\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, and the held-out unlabeled sample supplies bounds {% raw %}<span class="math inline">\(T^l,T^u\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\widetilde L^f-L^f\)</span>{% endraw %}. All guarantees below are conditional on the first split.</p>

<div id="ppi-risk" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Assign failure probability {% raw %}<span class="math inline">\(\delta/2\)</span>{% endraw %} to each of the two rectifier bounds used below, and {% raw %}<span class="math inline">\((\alpha-\delta)/2\)</span>{% endraw %} to each imputed-risk error bound, where {% raw %}<span class="math inline">\(0&lt;\delta&lt;\alpha\)</span>{% endraw %}. Then the set</p>

{% raw %}<div class="math display">\[
\begin{split}
C_\alpha\triangleq\{\theta:\ \widetilde L^f(\theta)
\leq {}&amp;\widetilde L^f(\widehat\theta^f)
-R^l(\theta)+R^u(\widehat\theta^f)\\
&amp;+T^u(\theta)-T^l(\widehat\theta^f)\}
\end{split}
\]</div>{% endraw %}
<p>contains {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. Convexity is not required.</p>

</div>
<h3 data-note-section="2" id="31-29-deriving-the-inequality">2. Deriving the inequality</h3>
<p>First express the risk through its estimated components; this fixes the signs in the confidence bounds. Since</p>

{% raw %}<div class="math display">\[
L(\theta)=\widetilde L^f(\theta)+\Delta(\theta)
 -(\widetilde L^f(\theta)-L^f(\theta)),
\]</div>{% endraw %}
<p>a lower bound is {% raw %}<span class="math inline">\(\widetilde L^f+R^l-T^u\)</span>{% endraw %}, while an upper bound is {% raw %}<span class="math inline">\(\widetilde L^f+R^u-T^l\)</span>{% endraw %}. Keep a candidate whenever its lower bound is no larger than the benchmark’s upper bound.</p>

<p>At the true minimizer,</p>

{% raw %}<div class="math display">\[
L(\theta^*)\leq L(\widehat\theta^f).
\]</div>{% endraw %}
<p>Consequently, rejection of {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} requires at least one of four one-sided bounds to fail: the lower rectifier bound at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}, the upper rectifier bound at the benchmark, or one of the two imputed-risk error bounds. Their error probabilities sum to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>

<h3 data-note-section="3" id="31-29-why-split-the-unlabeled-sample">3. Why split the unlabeled sample?</h3>
<p>The optimizer used as benchmark is random. A bound valid at each fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} need not remain valid after optimization on the same sample. Conditioning on the first split fixes the benchmark before the held-out inference step.</p>

<p>Coverage uses only the minimizing inequality, so the benchmark need not converge to {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}. A lower-risk benchmark can exclude more false candidates, and accurate predictions can narrow the correction bounds. These affect precision without changing the coverage argument.</p>

<p>For losses whose first-order condition already characterizes the minimizer, the <a href="{% post_url 2024-01-27-prediction-powered-inference-rectifiers-estimators-and-validity %}">estimating-equation construction</a> is usually simpler. Here the additional work buys a statement about the global risk minimizer.</p>

<h3 data-note-section="4" id="31-29-an-example-where-the-first-order-condition-is-insufficient">4. An example where the first-order condition is insufficient</h3>
<p>For a concrete example, take {% raw %}<span class="math inline">\(\ell_\theta(Y)=(\theta^2-Y)^2\)</span>{% endraw %}, assume a finite second outcome moment, and suppose {% raw %}<span class="math inline">\(\mu=\mathbb{E}Y&gt;0\)</span>{% endraw %}. Expanding gives</p>

{% raw %}<div class="math display">\[
L(\theta)=\theta^4-2\mu\theta^2+\mathbb{E}[Y^2],
\qquad L&#x27;(\theta)=4\theta(\theta^2-\mu).
\]</div>{% endraw %}
<p>There are three stationary points: {% raw %}<span class="math inline">\(0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\pm\sqrt\mu\)</span>{% endraw %}. Only the latter two minimize the risk. Indeed,</p>

{% raw %}<div class="math display">\[
L(0)-L(\sqrt\mu)=\mu^2&gt;0,
\qquad L&#x27;&#x27;(0)=-4\mu&lt;0.
\]</div>{% endraw %}
<p>A gradient test can retain {% raw %}<span class="math inline">\(0\)</span>{% endraw %} even with arbitrarily precise estimation. A risk comparison can exclude it once uncertainty is smaller than the gap {% raw %}<span class="math inline">\(\mu^2\)</span>{% endraw %}. If several minimizers exist, the theorem covers each specified one; covering all of them simultaneously requires simultaneous bounds.</p>

<p>The benchmark need not equal {% raw %}<span class="math inline">\(\sqrt\mu\)</span>{% endraw %}. Suppose its excess risk is {% raw %}<span class="math inline">\(\eta=L(\widehat\theta^f)-\inf_\theta L(\theta)\)</span>{% endraw %}. Even with perfect evaluation, comparison with that benchmark retains every candidate whose excess risk is at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. A poor benchmark therefore gives a broad set, although the true minimizer remains protected.</p>

<h3 data-note-section="5" id="31-29-a-finite-sample-construction-with-bounded-loss">5. A finite-sample construction with bounded loss</h3>
<p>Suppose {% raw %}<span class="math inline">\(0\leq\ell_\theta(x,y)\leq B\)</span>{% endraw %} over the parameter space and for both true and predicted outcomes. Let {% raw %}<span class="math inline">\(N_2\)</span>{% endraw %} be the size of the held-out unlabeled sample and put</p>

{% raw %}<div class="math display">\[
\widehat\Delta(\theta)
=\frac1n\sum_i(\ell_\theta(X_i,Y_i)-\ell_\theta(X_i,f(X_i))).
\]</div>{% endraw %}
<p>The summand lies in {% raw %}<span class="math inline">\([-B,B]\)</span>{% endraw %}, a range of length {% raw %}<span class="math inline">\(2B\)</span>{% endraw %}. Hoeffding’s one-sided inequality consequently gives</p>

{% raw %}<div class="math display">\[
\mathbb P\{\widehat\Delta(\theta)-\Delta(\theta)&gt;r\}
\leq\exp(-nr^2/(2B^2)).
\]</div>{% endraw %}
<p>Choose</p>

{% raw %}<div class="math display">\[
r_\Delta=B\sqrt{\frac{2\log(2/\delta)}n},
\qquad
r_f=B\sqrt{\frac{\log(2/(\alpha-\delta))}{2N_2}}.
\]</div>{% endraw %}
<p>The second radius uses the shorter range {% raw %}<span class="math inline">\([0,B]\)</span>{% endraw %} of the predicted loss. Set {% raw %}<span class="math inline">\(R^l=\widehat\Delta-r_\Delta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R^u=\widehat\Delta+r_\Delta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T^l=-r_f,T^u=r_f\)</span>{% endraw %}. Each bound used in the proof has its assigned one-sided error probability. Substituting into the theorem yields the particularly transparent set</p>

{% raw %}<div class="math display">\[
C_\alpha=\left\{\theta:
\widehat L^{\rm PP}(\theta)-
\widehat L^{\rm PP}(\widehat\theta^f)
\leq2r_\Delta+2r_f\right\},
\quad
\widehat L^{\rm PP}=\widetilde L^f+\widehat\Delta.
\]</div>{% endraw %}
<p>Both candidate and benchmark bounds contribute, producing the factor two. There is no candidate-count factor because coverage of a fixed {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} evaluates the candidate-side bound only there. The first split fixes the benchmark for its own bound.</p>

<h3 data-note-section="6" id="31-29-why-paired-risk-differences-can-be-more-precise">6. Why paired risk differences can be more precise</h3>
<p>One can also apply concentration directly to a risk difference. Conditional on the first split, fix {% raw %}<span class="math inline">\(b=\widehat\theta^f\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[
\begin{aligned}
D_\theta(X,Y)&amp;=\ell_\theta(X,Y)-\ell_b(X,Y),\\
D_\theta^f(X)&amp;=\ell_\theta(X,f(X))-\ell_b(X,f(X)).
\end{aligned}
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(L(\theta)-L(b)=\mathbb{E}(D_\theta-D_\theta^f)+\mathbb{E}D_\theta^f\)</span>{% endraw %}. The corresponding corrected average has variance</p>

{% raw %}<div class="math display">\[
\frac{\operatorname{Var}(D_\theta-D_\theta^f)}n
+\frac{\operatorname{Var}(D_\theta^f)}{N_2}.
\]</div>{% endraw %}
<p>For example, the first term includes</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(D_\theta-D_\theta^f)
=\operatorname{Var}(E_\theta)+\operatorname{Var}(E_b)
 -2\operatorname{Cov}(E_\theta,E_b),
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(E_a=\ell_a(X,Y)-\ell_a(X,f(X))\)</span>{% endraw %}. Common prediction errors cancel in a paired comparison, reducing variance when the covariance is positive. Retain {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} whenever a valid lower bound for the risk difference is nonpositive. At {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}, that difference is nonpositive, so rejection requires a coverage failure. A normal approximation for this version still needs moment and variance conditions.</p>

<p>In the nonconvex quartic example, the cancellation can be carried through exactly. For a benchmark {% raw %}<span class="math inline">\(b\)</span>{% endraw %} held fixed by the first split,</p>

{% raw %}<div class="math display">\[
\ell_\theta(Y)-\ell_b(Y)
=(\theta^2-b^2)(\theta^2+b^2-2Y).
\]</div>{% endraw %}
<p>Subtracting its predicted-outcome counterpart gives</p>

{% raw %}<div class="math display">\[
D_\theta-D_\theta^f
=-2(\theta^2-b^2)(Y-f(X)).
\]</div>{% endraw %}
<p>The {% raw %}<span class="math inline">\(Y^2-f(X)^2\)</span>{% endraw %} term present in each separate rectifier cancels from the difference. Consequently the corrected empirical risk difference is</p>

{% raw %}<div class="math display">\[
\widehat L^{\rm PP}(\theta)-\widehat L^{\rm PP}(b)
=(\theta^2-b^2)(\theta^2+b^2-2\widehat\mu^{\rm PP}),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\widehat\mu^{\rm PP}\)</span>{% endraw %} uses the labeled sample and the held-out unlabeled sample. Its variance, conditional on the benchmark and predictor, is</p>

{% raw %}<div class="math display">\[
4(\theta^2-b^2)^2\left(
\frac{\operatorname{Var}(Y-f(X))}{n}
+\frac{\operatorname{Var}(f(X))}{N_2}\right).
\]</div>{% endraw %}
<p>Squaring outcomes in separate risk estimates can demand stronger moments for their variance. The paired difference cancels those terms and reduces to the corrected mean calculation. Retaining covariance between candidates therefore has a concrete benefit.</p>

<p>When {% raw %}<span class="math inline">\(b^2=\mu\)</span>{% endraw %}, the excess risk is {% raw %}<span class="math inline">\((\theta^2-\mu)^2\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %} it is {% raw %}<span class="math inline">\(\mu^2\)</span>{% endraw %}, although the population gradient vanishes there. The risk inequality excludes this nonglobal stationary point as evaluation becomes precise.</p>

<p>An approximate numerical benchmark is enough, since {% raw %}<span class="math inline">\(L(\theta^*)\leq L(b)\)</span>{% endraw %} for every admissible {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. A finite candidate grid is a separate approximation: it may omit the true minimizer. Inference must then concern the grid-restricted target or account for the loss approximation error.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-angelopoulos_prediction-powered_2023" class="csl-entry" role="listitem">
Angelopoulos, Anastasios N., Stephen Bates, Clara Fannjiang, Michael I. Jordan, and Tijana Zrnic. 2023. <span>“Prediction-Powered Inference.”</span> arXiv. <a href="http://arxiv.org/abs/2301.09633">http://arxiv.org/abs/2301.09633</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-01-27-prediction-powered-inference-rectifiers-estimators-and-validity %}">Prediction-Powered Inference: Rectifiers, Estimators, and Validity</a></p></nav>

</div>
