---
layout: "post"
title: "Randomized Saturation Designs and Their Optimal Allocation"
date: "2025-02-14"
tags: ["econometrics", "networks"]
excerpt: "A randomized saturation design first assigns treatment fractions to clusters and then assigns individuals within clusters."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2025/02/14/randomized-saturation-designs/", "/2025/03/02/optimal-saturation-and-combining-clusters/"]
---

<div class="note-content" markdown="0">

<p>To learn how spillovers change with treatment intensity, an experiment can assign different treatment fractions to different clusters. Moving the fractions farther apart strengthens a slope comparison, but can leave few treated or untreated observations at an endpoint. <span class="citation" data-cites="baird_optimal_2018">(<a href="#ref-baird_optimal_2018" role="doc-biblioref">Baird et al. 2018</a>)</span> studies this tradeoff and the allocation of clusters across fractions. The causal effects are those defined by a <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">two-stage experiment under partial interference</a>.</p>

<h3 data-note-section="1" id="10-406-separate-the-effects">1. Separate the effects</h3>
<p>Write {% raw %}<span class="math inline">\(\overline Y(d,p)\)</span>{% endraw %} for the mean outcome at own treatment {% raw %}<span class="math inline">\(d\)</span>{% endraw %} and cluster saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. A pure control is in a cluster with {% raw %}<span class="math inline">\(p=0\)</span>{% endraw %}; a within-cluster control is untreated in a cluster with {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}.</p>

<p>The treated effect relative to pure controls is {% raw %}<span class="math inline">\(\mathrm{ITT}(p)=\overline Y(1,p)-\overline Y(0,0)\)</span>{% endraw %}, while the untreated spillover is {% raw %}<span class="math inline">\(\mathrm{SNT}(p)=\overline Y(0,p)-\overline Y(0,0)\)</span>{% endraw %}. The overall effect is</p>

{% raw %}<div class="math display">\[
\mathrm{TCE}(p)=p\,\mathrm{ITT}(p)+(1-p)\,\mathrm{SNT}(p).
\]</div>{% endraw %}
<p>A slope comparison divides the difference in effects by the difference in saturation. Consequently its variance is divided by the square of that gap. This explains the precision advantage of separating the saturation levels.</p>

<h3 data-note-section="2" id="10-406-derive-the-precision-cost">2. Derive the precision cost</h3>
<p>Suppose each cluster has {% raw %}<span class="math inline">\(n\)</span>{% endraw %} units, there are {% raw %}<span class="math inline">\(C\)</span>{% endraw %} clusters, {% raw %}<span class="math inline">\(f(p)\)</span>{% endraw %} is the fraction assigned saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\psi=f(0)\)</span>{% endraw %}. Under the paper’s constant individual variance {% raw %}<span class="math inline">\(\sigma^2+\tau^2\)</span>{% endraw %} and within-cluster covariance {% raw %}<span class="math inline">\(\tau^2\)</span>{% endraw %}, the variance of a treated group mean is {% raw %}<span class="math inline">\(\tau^2+\sigma^2/(np)\)</span>{% endraw %}.</p>

<p>Averaging across {% raw %}<span class="math inline">\(Cf(p)\)</span>{% endraw %} independent clusters and comparing with {% raw %}<span class="math inline">\(C\psi\)</span>{% endraw %} pure-control clusters gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat{\mathrm{ITT}}(p))
=\frac1C\left(\frac{\tau^2+\sigma^2/(np)}{f(p)}
+\frac{\tau^2+\sigma^2/n}{\psi}\right).
\]</div>{% endraw %}
<p>For untreated spillovers, replace {% raw %}<span class="math inline">\(p\)</span>{% endraw %} by {% raw %}<span class="math inline">\(1-p\)</span>{% endraw %} in the first term. For a slope across two saturations, divide the sum of their arm variances by the squared saturation gap.</p>

<h3 data-note-section="3" id="10-406-the-optimal-design-results">3. The optimal-design results</h3>
<div id="saturation-optima" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the paper’s mean and covariance model, the symmetric slope-precision objective is minimized by equal cluster allocations to two saturations symmetric around {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. In the continuous relaxation, their gap {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
\frac{n\rho}{2(1-\rho)}=
\frac{2\Delta^2-1}{(1-\Delta^2)^2},\qquad
\rho=\frac{\tau^2}{\sigma^2+\tau^2}.
\]</div>{% endraw %}
<p>For the stated pooled treated-and-spillover objective with constant effects across positive saturations, the optimal partial-population design uses saturation {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, with an optimally chosen pure-control fraction between {% raw %}<span class="math inline">\(\sqrt2-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}.</p>

</div>
<p>At {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}, the continuous slope-optimal gap is {% raw %}<span class="math inline">\(1/\sqrt2\)</span>{% endraw %}; as correlation rises, the optimal gap grows. But finite clusters require integer treatment counts and positive counts in both arms. The continuous answer must be compared over admissible allocations, rather than rounded without checking the objective.</p>

<h3 data-note-section="4" id="10-406-why-the-objective-matters">4. Why the objective matters</h3>
<p>The advantage has a cost: near an endpoint, one treatment cell is small. Pure-control clusters introduce another allocation choice. They improve comparisons with a common untreated baseline, but use clusters that could otherwise be assigned positive saturations.</p>

<p>The design objective must specify which effects are to be learned. Pooling positive saturations can increase precision when the target and model permit it. If effects vary with saturation, pooling changes their weights and hence the target; an allocation optimal for constant effects need not remain optimal.</p>

<h3 data-note-section="5" id="10-406-start-with-the-variance-of-one-cluster-mean">5. Start with the variance of one cluster mean</h3>
<p>Represent the covariance model as {% raw %}<span class="math inline">\(Y_{ij}=\mu_{ij}+U_j+\varepsilon_{ij}\)</span>{% endraw %}, with independent cluster shocks of variance {% raw %}<span class="math inline">\(\tau^2\)</span>{% endraw %} and independent idiosyncratic shocks of variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}. For a treatment cell containing {% raw %}<span class="math inline">\(np\)</span>{% endraw %} individuals, its average error is {% raw %}<span class="math inline">\(U_j+(np)^{-1}\sum\varepsilon_{ij}\)</span>{% endraw %}. Therefore its variance is</p>

{% raw %}<div class="math display">\[
\tau^2+\frac{\sigma^2}{np}.
\]</div>{% endraw %}
<p>A larger treatment cell averages out more individual noise, while every person still shares the same cluster shock. More independent clusters average out both components. The formula separates these two ways of increasing precision.</p>

<p>An untreated mean within the same cluster shares {% raw %}<span class="math inline">\(U_j\)</span>{% endraw %}, so its covariance with the treated mean is {% raw %}<span class="math inline">\(\tau^2\)</span>{% endraw %} in this model. A within-cluster direct contrast cancels that common shock and has variance {% raw %}<span class="math inline">\(\sigma^2(1/(np)+1/[n(1-p)])\)</span>{% endraw %}. By contrast, a comparison with pure-control clusters retains shocks from both sets of clusters. The estimand determines which variance calculation is appropriate.</p>

<h3 data-note-section="6" id="10-406-deriving-the-optimal-allocation-for-a-fixed-comparison">6. Deriving the optimal allocation for a fixed comparison</h3>
<p>Suppose two independent sets of clusters provide means with per-cluster variances {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, and allocate fraction {% raw %}<span class="math inline">\(f\)</span>{% endraw %} to the first. Apart from the common factor {% raw %}<span class="math inline">\(1/C\)</span>{% endraw %}, the difference has variance</p>

{% raw %}<div class="math display">\[
V(f)=\frac Af+\frac B{1-f}.
\]</div>{% endraw %}
<p>Differentiating gives {% raw %}<span class="math inline">\(V&#x27;(f)=-A/f^2+B/(1-f)^2\)</span>{% endraw %}. The unique interior optimum is</p>

{% raw %}<div class="math display">\[
f^*=\frac{\sqrt A}{\sqrt A+\sqrt B}.
\]</div>{% endraw %}
<p>This is the usual square-root allocation rule: assign more clusters to the noisier mean. Equal allocation follows when the two per-cluster variances coincide, as in the symmetric slope problem at symmetric saturations.</p>

<h3 data-note-section="7" id="10-406-deriving-the-symmetric-saturation-gap">7. Deriving the symmetric saturation gap</h3>
<p>Take two positive saturations {% raw %}<span class="math inline">\(p=(1-\Delta)/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q=(1+\Delta)/2\)</span>{% endraw %}, with half the available slope-design clusters at each. The variance of a slope in treated outcomes is</p>

{% raw %}<div class="math display">\[
V_{\rm slope}(\Delta)
=\frac1{C\Delta^2}\left(4\tau^2+
\frac{8\sigma^2}{n(1-\Delta^2)}\right).
\]</div>{% endraw %}
<p>To obtain the second term, use {% raw %}<span class="math inline">\(1/p+1/q=4/(1-\Delta^2)\)</span>{% endraw %}. The untreated slope has the same variance by symmetry, so summing the two objectives does not change the optimizer.</p>

<p>Let {% raw %}<span class="math inline">\(x=\Delta^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A=4\tau^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(B=8\sigma^2/n\)</span>{% endraw %}. Minimizing {% raw %}<span class="math inline">\(A/x+B/[x(1-x)]\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
-\frac A{x^2}-\frac{B(1-2x)}{x^2(1-x)^2}=0,
\qquad
\frac AB=\frac{2x-1}{(1-x)^2}.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(A/B=n\rho/[2(1-\rho)]\)</span>{% endraw %}, this reproduces the stated equation. At zero intracluster correlation, {% raw %}<span class="math inline">\(x=1/2\)</span>{% endraw %}; as the cluster component grows, the solution moves toward one. A wider gap improves the signal in a slope comparison, but creates small treatment cells whose idiosyncratic variance diverges as {% raw %}<span class="math inline">\(\Delta\uparrow1\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}.</p>

<p>The continuous solution is a guide to the finite design. Evaluate the objective at feasible integer treatment counts, retaining nonempty arms, rather than rounding a saturation without checking its variance. If all noise is at the cluster level, the endpoint behavior also needs separate consideration.</p>

<h3 data-note-section="8" id="10-406-why-the-pure-control-fraction-lies-between-two-familiar-values">8. Why the pure-control fraction lies between two familiar values</h3>
<p>For a single positive saturation of one half and a pure-control fraction {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}, the sum of treated-effect and untreated-spillover variances is proportional to</p>

{% raw %}<div class="math display">\[
\frac{\tau^2+2\sigma^2/n}{1-\psi}
+\frac{\tau^2+\sigma^2/n}{\psi}.
\]</div>{% endraw %}
<p>This objective adds two marginal variances. Although both estimated effects use the same pure-control mean, their covariance does not enter that particular sum. Applying the square-root allocation rule gives</p>

{% raw %}<div class="math display">\[
\psi^*=\frac{\sqrt{\tau^2+\sigma^2/n}}
 {\sqrt{\tau^2+2\sigma^2/n}+\sqrt{\tau^2+\sigma^2/n}}.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\tau^2=0\)</span>{% endraw %}, this is {% raw %}<span class="math inline">\(1/(1+\sqrt2)=\sqrt2-1\)</span>{% endraw %}. If idiosyncratic noise becomes negligible relative to cluster noise, it approaches {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. The positive-saturation cluster supplies two smaller cells, making it noisier than a pure-control cluster when individual noise matters.</p>

<p>The shared-control covariance can be calculated explicitly. At a single positive saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U\)</span>{% endraw %} be the treated and untreated sample means averaged over {% raw %}<span class="math inline">\(C(1-\psi)\)</span>{% endraw %} partial-population clusters, and {% raw %}<span class="math inline">\(B\)</span>{% endraw %} the mean in {% raw %}<span class="math inline">\(C\psi\)</span>{% endraw %} pure-control clusters. Under the same covariance model,</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(T,U)=\frac{\tau^2}{C(1-\psi)},\qquad
\operatorname{Var}(B)=\frac{\tau^2+\sigma^2/n}{C\psi}.
\]</div>{% endraw %}
<p>Since the two cluster groups are independent,</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(T-B,U-B)
=\frac{\tau^2}{C(1-\psi)}
+\frac{\tau^2+\sigma^2/n}{C\psi}.
\]</div>{% endraw %}
<p>Subtracting the estimated effects gives the direct contrast {% raw %}<span class="math inline">\(T-U\)</span>{% endraw %}, whose variance is</p>

{% raw %}<div class="math display">\[
\frac{\sigma^2}{Cn(1-\psi)}
\left(\frac1p+\frac1{1-p}\right).
\]</div>{% endraw %}
<p>The direct contrast removes the common pure-control mean and the common shock in the partially treated clusters. Under this model, pure-control clusters therefore provide no precision gain for the direct effect alone. They remain needed for the specified spillover and total-effect comparisons.</p>

<p>For the overall effect, combine the two estimates as {% raw %}<span class="math inline">\(p(T-B)+(1-p)(U-B)\)</span>{% endraw %}. The partial-population component has variance</p>

{% raw %}<div class="math display">\[
\frac1{C(1-\psi)}\left(
 p^2\left(\tau^2+\frac{\sigma^2}{np}\right)
 +(1-p)^2\left(\tau^2+\frac{\sigma^2}{n(1-p)}\right)
 +2p(1-p)\tau^2\right)
=\frac{\tau^2+\sigma^2/n}{C(1-\psi)}.
\]</div>{% endraw %}
<p>Adding the pure-control variance gives an allocation optimum {% raw %}<span class="math inline">\(\psi=1/2\)</span>{% endraw %} for this fixed-{% raw %}<span class="math inline">\(p\)</span>{% endraw %} comparison. The algebra cancels {% raw %}<span class="math inline">\(p\)</span>{% endraw %} from the variance under the maintained constant-covariance model, although the target effect can still depend on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The paper’s different design recommendations reflect different estimands and objectives; the covariance terms explain why they need not coincide.</p>

<p>For an overall effect, the estimates are combined before taking the variance, so their covariance must be included. This gives a different allocation problem from adding marginal variances. Likewise, if effects vary across saturations, pooling must state the weights that define the response being estimated.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-baird_optimal_2018" class="csl-entry" role="listitem">
Baird, Sarah, J. Aislinn Bohren, Craig McIntosh, and Berk Özler. 2018. <span>“Optimal Design of Experiments in the Presence of Interference.”</span> <em>The Review of Economics and Statistics</em> 100 (5): 844–60. <a href="https://doi.org/10.1162/rest_a_00716">https://doi.org/10.1162/rest_a_00716</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">Dependence-Robust Resampling and Moment Tests</a> · Next: <a href="{% post_url 2025-03-19-network-formation-and-identification-with-missing-links %}">Network Formation and Identification with Missing Links</a></p></nav>

</div>
