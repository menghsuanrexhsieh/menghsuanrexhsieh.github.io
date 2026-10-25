---
layout: "post"
title: "Randomized Saturation Designs and Their Optimal Allocation"
date: "2024-07-29"
tags: ["econometrics", "networks"]
excerpt: "An experiment can vary both who receives treatment and how common treatment is in each community."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2025/02/14/randomized-saturation-designs/", "/2025/03/02/optimal-saturation-and-combining-clusters/", "/2025/02/14/randomized-saturation-designs-and-their-optimal-allocation/"]
---

<div class="note-content" markdown="0">

<p>An experiment can vary both who receives treatment and how common treatment is in each community. This makes it possible to distinguish effects on treated people from spillovers to untreated people. It also divides the sample among more comparisons. <span class="citation" data-cites="baird_optimal_2018">Baird et al. (<a href="#ref-baird_optimal_2018" role="doc-biblioref">2018</a>)</span> derive the resulting standard errors and studies which saturation designs minimize them for different estimands.</p>

<div id="10-406-separate-the-effects">

</div>
<h3 data-note-section="1" id="10-406-assignment-outcomes-and-estimands">1. Assignment, outcomes, and estimands</h3>
<p>There are {% raw %}<span class="math inline">\(C\)</span>{% endraw %} sampled clusters, each containing {% raw %}<span class="math inline">\(n\)</span>{% endraw %} individuals. The first stage assigns fraction {% raw %}<span class="math inline">\(f(p)\)</span>{% endraw %} of clusters to saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %} in a finite set {% raw %}<span class="math inline">\(\Pi\subset[0,1]\)</span>{% endraw %}. Within a cluster assigned {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, the second stage chooses exactly {% raw %}<span class="math inline">\(np\)</span>{% endraw %} individuals uniformly for treatment. Counts are integers in an implemented experiment; the paper first optimizes a continuous relaxation.</p>

<p>As in a <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">two-stage experiment under partial interference</a>, potential outcomes may depend on the treatment vector within an individual’s cluster, but not on assignments in other clusters. The paper assumes their population means depend on own assignment {% raw %}<span class="math inline">\(d\in\{0,1\}\)</span>{% endraw %} and saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %} through {% raw %}<span class="math inline">\(\overline Y(d,p)\)</span>{% endraw %}. This restriction on means is weaker than requiring each realized potential outcome to depend only on {% raw %}<span class="math inline">\((d,p)\)</span>{% endraw %}.</p>

<p>Write {% raw %}<span class="math inline">\(\psi=f(0)\)</span>{% endraw %} for the pure-control share. The treated effect and the spillover on untreated individuals are</p>

{% raw %}<div class="math display">\[
\mathrm{ITT}(p)=\overline Y(1,p)-\overline Y(0,0),\qquad
\mathrm{SNT}(p)=\overline Y(0,p)-\overline Y(0,0).
\]</div>{% endraw %}
<p>Their difference is the value of own treatment at saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and their weighted average is the total causal effect:</p>

{% raw %}<div class="math display">\[
\mathrm{VT}(p)=\mathrm{ITT}(p)-\mathrm{SNT}(p),\qquad
\mathrm{TCE}(p)=p\,\mathrm{ITT}(p)+(1-p)\,\mathrm{SNT}(p).
\]</div>{% endraw %}
<p>For two interior saturations {% raw %}<span class="math inline">\(p&lt;q\)</span>{% endraw %}, the slope estimands are</p>

{% raw %}<div class="math display">\[
\mathrm{DT}(p,q)=\frac{\overline Y(1,q)-\overline Y(1,p)}{q-p},\qquad
\mathrm{DNT}(p,q)=\frac{\overline Y(0,q)-\overline Y(0,p)}{q-p}.
\]</div>{% endraw %}
<p>These are secant slopes; they equal derivatives only under additional restrictions on the response functions. Pure controls identify the level effects, but are unnecessary for the slope comparisons because the common baseline cancels.</p>

<div id="10-406-derive-the-precision-cost">

</div>
<div id="10-406-start-with-the-variance-of-one-cluster-mean">

</div>
<h3 data-note-section="2" id="10-406-the-covariance-model-and-the-standard-errors">2. The covariance model and the standard errors</h3>
<p>The paper’s Assumption 2 specifies individual variance {% raw %}<span class="math inline">\(\tau^2+\sigma^2\)</span>{% endraw %}, covariance {% raw %}<span class="math inline">\(\tau^2\)</span>{% endraw %} between distinct individuals in the same cluster under a given assignment, and zero covariance across clusters. Here {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\tau^2\geq0\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\rho=\frac{\tau^2}{\tau^2+\sigma^2}.
\]</div>{% endraw %}
<p>Comparisons involving both treated and untreated people require {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %}; a fully treated cluster supplies only a treated mean. The limiting case {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %} means the idiosyncratic component vanishes. The variance calculations use these second moments; they do not require a normal random-effects model.</p>

<p>A cell of {% raw %}<span class="math inline">\(m\)</span>{% endraw %} individuals in one cluster has average-error variance</p>

{% raw %}<div class="math display">\[
\frac{m(\tau^2+\sigma^2)+m(m-1)\tau^2}{m^2}
=\tau^2+\frac{\sigma^2}{m}.
\]</div>{% endraw %}
<p>Thus define</p>

{% raw %}<div class="math display">\[
A_T(p)=\tau^2+\frac{\sigma^2}{np},\qquad
A_U(p)=\tau^2+\frac{\sigma^2}{n(1-p)},\qquad
A_0=\tau^2+\frac{\sigma^2}{n}.
\]</div>{% endraw %}
<div id="saturation-variances" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. For fixed positive arm counts, differences of sample cell means have variances</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat{\mathrm{ITT}}(p))
=\frac1C\left(\frac{A_T(p)}{f(p)}+\frac{A_0}{\psi}\right),
\qquad
\operatorname{Var}(\widehat{\mathrm{SNT}}(p))
=\frac1C\left(\frac{A_U(p)}{f(p)}+\frac{A_0}{\psi}\right),
\]</div>{% endraw %}
<p>and</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\widehat{\mathrm{DT}}(p,q))
=\frac1{C(q-p)^2}
\left(\frac{A_T(p)}{f(p)}+\frac{A_T(q)}{f(q)}\right).
\]</div>{% endraw %}
<p>Replace {% raw %}<span class="math inline">\(A_T\)</span>{% endraw %} by {% raw %}<span class="math inline">\(A_U\)</span>{% endraw %} for the untreated slope.</p>

</div>
<div class="proof">
<p><em>Proof.</em> There are {% raw %}<span class="math inline">\(Cf(p)\)</span>{% endraw %} clusters at saturation {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, each contributing a treated cell of size {% raw %}<span class="math inline">\(np\)</span>{% endraw %}. The variance of their average is {% raw %}<span class="math inline">\(A_T(p)/(Cf(p))\)</span>{% endraw %}. The pure-control mean has variance {% raw %}<span class="math inline">\(A_0/(C\psi)\)</span>{% endraw %}. Cross-cluster covariances are zero, so their difference has the sum of these variances. The untreated calculation uses cell size {% raw %}<span class="math inline">\(n(1-p)\)</span>{% endraw %}. For a slope, subtract the independent arm means and divide by {% raw %}<span class="math inline">\(q-p\)</span>{% endraw %}, which divides variance by {% raw %}<span class="math inline">\((q-p)^2\)</span>{% endraw %}.</p>

</div>
<p>The treated and untreated means from the same cluster share covariance {% raw %}<span class="math inline">\(\tau^2\)</span>{% endraw %}. As a result, their within-cluster difference has variance</p>

{% raw %}<div class="math display">\[
\frac{\sigma^2}{n}\left(\frac1p+\frac1{1-p}\right).
\]</div>{% endraw %}
<p>A contrast against a separate pure-control cluster retains both cluster components. These different covariance calculations explain why the optimal design depends on the estimand.</p>

<div id="10-406-deriving-the-optimal-allocation-for-a-fixed-comparison">

</div>
<div id="10-406-why-the-objective-matters">

</div>
<h3 data-note-section="3" id="10-406-allocating-clusters-when-the-saturations-are-fixed">3. Allocating clusters when the saturations are fixed</h3>
<p>For one comparison, minimizing {% raw %}<span class="math inline">\(A/f+B/(1-f)\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
f^*=\frac{\sqrt A}{\sqrt A+\sqrt B}.
\]</div>{% endraw %}
<p>Indeed, the derivative is {% raw %}<span class="math inline">\(-A/f^2+B/(1-f)^2\)</span>{% endraw %}, and the second derivative is positive. The noisier arm receives more clusters.</p>

<p>For the paper’s level-effect objective, every positive saturation contributes two standard errors:</p>

{% raw %}<div class="math display">\[
J(f)=\sum_{p\in\Pi\setminus\{0\}}
\left(s_T(p)+s_U(p)\right),\qquad
s_d(p)=\sqrt{\frac1C\left(\frac{A_d(p)}{f(p)}+\frac{A_0}{\psi}\right)}.
\]</div>{% endraw %}
<p>This is a sum of standard errors, not variances. At an interior optimum, a common multiplier {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
\frac1{2C f(p)^2}\left(\frac{A_T(p)}{s_T(p)}+
\frac{A_U(p)}{s_U(p)}\right)=\lambda
\quad\text{for each }p&gt;0,
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\frac{A_0}{2C\psi^2}\sum_{p&gt;0}
\left(\frac1{s_T(p)}+\frac1{s_U(p)}\right)=\lambda.
\]</div>{% endraw %}
<p>These equations follow by differentiating {% raw %}<span class="math inline">\(J\)</span>{% endraw %} subject to {% raw %}<span class="math inline">\(\psi+\sum_{p&gt;0}f(p)=1\)</span>{% endraw %}. Each standard error is the Euclidean norm of positive multiples of {% raw %}<span class="math inline">\(f(p)^{-1/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\psi^{-1/2}\)</span>{% endraw %}, hence is convex in the allocations. The first-order conditions therefore characterize a global minimum. They also show why allocating another pure-control cluster helps every level comparison, while adding a cluster to one positive saturation helps only its two comparisons. This is the allocation problem in Proposition 1 of the paper.</p>

<div id="10-406-the-optimal-design-results">

</div>
<div id="10-406-deriving-the-symmetric-saturation-gap">

</div>
<h3 data-note-section="4" id="10-406-two-saturations-for-estimating-both-slopes">4. Two saturations for estimating both slopes</h3>
<p>Suppose only the two slope effects matter, with equal weights. The paper minimizes</p>

{% raw %}<div class="math display">\[
J_{\mathrm{slope}}(p,q,f)
=\operatorname{SE}(\widehat{\mathrm{DT}}(p,q))
+\operatorname{SE}(\widehat{\mathrm{DNT}}(p,q)),
\]</div>{% endraw %}
<p>where fraction {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is assigned to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1-f\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. A pure-control group cannot improve either comparison: moving its clusters into the two slope arms reduces both variances. Thus this optimization uses no pure controls.</p>

<div id="saturation-optima" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. Fix a gap {% raw %}<span class="math inline">\(\Delta=q-p\in(0,1)\)</span>{% endraw %}. The slope objective is minimized at</p>

{% raw %}<div class="math display">\[
f=\frac12,\qquad p=\frac{1-\Delta}{2},\qquad q=\frac{1+\Delta}{2}.
\]</div>{% endraw %}
<p>Under the variance formula above, the optimal gap for {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %} is the unique solution with {% raw %}<span class="math inline">\(\Delta\in[1/\sqrt2,1)\)</span>{% endraw %} of</p>

{% raw %}<div class="math display">\[
\frac{n\rho}{2(1-\rho)}
=\frac{2\Delta^2-1}{(1-\Delta^2)^2}.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> It is necessary to establish symmetry before reducing the problem to a single gap. Fix {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(q=p+\Delta\)</span>{% endraw %}, and omit the positive factor {% raw %}<span class="math inline">\(1/(\sqrt C\Delta)\)</span>{% endraw %}. The treated standard error is the Euclidean norm of the vector</p>

{% raw %}<div class="math display">\[
\left(
\frac{\tau}{\sqrt f},\frac{\tau}{\sqrt{1-f}},
\frac{\sigma}{\sqrt{nfp}},
\frac{\sigma}{\sqrt{n(1-f)(p+\Delta)}}
\right).
\]</div>{% endraw %}
<p>Each component is a nonnegative convex function of {% raw %}<span class="math inline">\((f,p)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(0&lt;f&lt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;p&lt;1-\Delta\)</span>{% endraw %}. For the product terms, {% raw %}<span class="math inline">\(h(x,y)=(xy)^{-1/2}\)</span>{% endraw %} has Hessian</p>

{% raw %}<div class="math display">\[
\nabla^2h=h
\begin{pmatrix}
3/(4x^2)&amp;1/(4xy)\\
1/(4xy)&amp;3/(4y^2)
\end{pmatrix},
\]</div>{% endraw %}
<p>which is positive definite for {% raw %}<span class="math inline">\(x,y&gt;0\)</span>{% endraw %}. Affine substitutions preserve convexity. The Euclidean norm is convex and increasing in each nonnegative component, so the treated standard error is convex. The untreated standard error has the same property after replacing {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p+\Delta\)</span>{% endraw %} by their complements.</p>

<p>Reflection {% raw %}<span class="math inline">\((f,p)\mapsto(1-f,1-\Delta-p)\)</span>{% endraw %} swaps the treated and untreated expressions. The sum is unchanged. By convexity, its value at the midpoint of any point and its reflection is no larger. This midpoint is {% raw %}<span class="math inline">\((1/2,(1-\Delta)/2)\)</span>{% endraw %}, proving the symmetry and allocation claims for the sum of standard errors itself.</p>

<p>At this symmetric design, the two slope variances coincide and equal</p>

{% raw %}<div class="math display">\[
V(\Delta)=\frac1{C\Delta^2}
\left(4\tau^2+\frac{8\sigma^2}{n(1-\Delta^2)}\right).
\]</div>{% endraw %}
<p>Indeed, {% raw %}<span class="math inline">\(1/p+1/q=4/(1-\Delta^2)\)</span>{% endraw %} and each arm receives half the clusters. The objective is {% raw %}<span class="math inline">\(2\sqrt{V(\Delta)}\)</span>{% endraw %}, so minimizing it is equivalent to minimizing {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(x=\Delta^2\)</span>{% endraw %}. Differentiation of</p>

{% raw %}<div class="math display">\[
\frac{4\tau^2}{x}+\frac{8\sigma^2}{n x(1-x)}
\]</div>{% endraw %}
<p>gives</p>

{% raw %}<div class="math display">\[
\frac{n\tau^2}{2\sigma^2}=\frac{2x-1}{(1-x)^2}.
\]</div>{% endraw %}
<p>The right side is zero at {% raw %}<span class="math inline">\(x=1/2\)</span>{% endraw %}, strictly increasing on {% raw %}<span class="math inline">\([1/2,1)\)</span>{% endraw %} because its derivative is {% raw %}<span class="math inline">\(2x/(1-x)^3\)</span>{% endraw %}, and diverges as {% raw %}<span class="math inline">\(x\uparrow1\)</span>{% endraw %}. The objective diverges at both endpoints of {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, so this stationary point is the global minimum.</p>

</div>
<p><strong>A discrepancy in the published formula.</strong> Proposition 2 of the published paper prints {% raw %}<span class="math inline">\(n\rho/[8(1-\rho)]\)</span>{% endraw %} on the left, and its appendix reduces the objective to a formula with the same coefficient. Substituting the symmetric design directly into its Theorem 1, equation (4), gives {% raw %}<span class="math inline">\(V(\Delta)\)</span>{% endraw %} above and the coefficient {% raw %}<span class="math inline">\(n\rho/[2(1-\rho)]\)</span>{% endraw %}. The derivation here retains that variance formula and identifies the discrepancy rather than treating the two expressions as equivalent. The qualitative conclusions agree: the gap is {% raw %}<span class="math inline">\(1/\sqrt2\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}, grows with {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, and approaches one as {% raw %}<span class="math inline">\(\rho\uparrow1\)</span>{% endraw %}.</p>

<p>When {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, variance falls as the gap increases. A finite experiment that must estimate both slopes still needs treated and untreated individuals at both saturations, giving extreme feasible values {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1-1/n\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}, cells that become too small make the idiosyncratic variance grow. Integer counts and cluster shares should be chosen by evaluating the objective over feasible designs near the continuous optimum.</p>

<h3 data-note-section="5" id="10-406-why-varying-saturation-costs-precision-for-pooled-effects">5. Why varying saturation costs precision for pooled effects</h3>
<p>The paper also studies the pooled treated and untreated effects. To isolate the variance cost of multiple saturations, assume the respective mean effects are constant across positive saturations. Otherwise pooling changes the estimands and adds the heteroskedasticity discussed in the paper.</p>

<p>Define the overall treated share and the within-cluster-control share by</p>

{% raw %}<div class="math display">\[
\mu=\sum_{p&gt;0}pf(p),\qquad \mu_U=1-\psi-\mu.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\eta_T^2\)</span>{% endraw %} be the variance of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} among positive-saturation clusters, whose mean saturation is {% raw %}<span class="math inline">\(\mu/(1-\psi)\)</span>{% endraw %}. The variance of the pooled treated mean is</p>

{% raw %}<div class="math display">\[
\frac{\tau^2}{C\mu^2}\sum_{p&gt;0}f(p)p^2+\frac{\sigma^2}{nC\mu}.
\]</div>{% endraw %}
<p>To derive it, each treated individual’s mean receives weight {% raw %}<span class="math inline">\(1/(nC\mu)\)</span>{% endraw %}; the {% raw %}<span class="math inline">\(np\)</span>{% endraw %} individuals in one cluster therefore give its common covariance component weight {% raw %}<span class="math inline">\(p/(C\mu)\)</span>{% endraw %}. Summing the cluster contributions gives the first term, while the individual variance component gives the second. Since</p>

{% raw %}<div class="math display">\[
\sum_{p&gt;0}f(p)p^2
=\frac{\mu^2}{1-\psi}+(1-\psi)\eta_T^2,
\]</div>{% endraw %}
<p>the variance of the pooled treated-versus-pure-control contrast is</p>

{% raw %}<div class="math display">\[
V_T^{\mathrm{pool}}
=\frac{\tau^2}{C(1-\psi)}
+\frac{\tau^2(1-\psi)\eta_T^2}{C\mu^2}
+\frac{\sigma^2}{nC\mu}
+\frac{A_0}{C\psi}.
\]</div>{% endraw %}
<p>The untreated formula replaces {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\mu_U\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(1-p\)</span>{% endraw %} has the same variance as {% raw %}<span class="math inline">\(p\)</span>{% endraw %} among positive-saturation clusters.</p>

<p>For fixed {% raw %}<span class="math inline">\((\mu,\psi)\)</span>{% endraw %}, both variances are minimized at {% raw %}<span class="math inline">\(\eta_T^2=0\)</span>{% endraw %}. This proves the paper’s Corollary 1: a single positive saturation {% raw %}<span class="math inline">\(p=\mu/(1-\psi)\)</span>{% endraw %}, together with pure controls, minimizes both pooled standard errors under this model. The improvement is strict when {% raw %}<span class="math inline">\(\tau^2&gt;0\)</span>{% endraw %} and the original design has positive saturation variance. If {% raw %}<span class="math inline">\(\tau^2=0\)</span>{% endraw %}, varying saturation has no variance cost at fixed group sizes in this calculation.</p>

<div id="10-406-why-the-pure-control-fraction-lies-between-two-familiar-values">

</div>
<h3 data-note-section="6" id="10-406-the-optimal-partial-population-design">6. The optimal partial-population design</h3>
<p>It remains to choose that one positive saturation and the pure-control share. The paper’s objective is the sum of the treated and untreated level-effect standard errors.</p>

<div id="partial-population-optimum" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. For this equally weighted objective, the optimal positive saturation is {% raw %}<span class="math inline">\(p^*=1/2\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\kappa=1+(n-1)\rho\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0\leq\rho&lt;1\)</span>{% endraw %}, the optimal pure-control fraction is</p>

{% raw %}<div class="math display">\[
\psi^*=\frac{-\kappa+\sqrt{\kappa^2+(1-\rho)\kappa}}{1-\rho}
=\frac{\kappa}{\kappa+\sqrt{\kappa^2+(1-\rho)\kappa}}.
\]</div>{% endraw %}
<p>It lies in {% raw %}<span class="math inline">\([\sqrt2-1,1/2)\)</span>{% endraw %}, increases with {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} and, when {% raw %}<span class="math inline">\(\rho&gt;0\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and tends to {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\rho\uparrow1\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For fixed {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}, the sum of standard errors is symmetric in {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1-p\)</span>{% endraw %} and is convex in {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, by the same nonnegative norm argument used above. Its minimum is therefore at {% raw %}<span class="math inline">\(p=1/2\)</span>{% endraw %}, where the standard errors coincide. Their common variance, multiplied by {% raw %}<span class="math inline">\(nC/(\tau^2+\sigma^2)\)</span>{% endraw %}, is</p>

{% raw %}<div class="math display">\[
F(\psi)=\frac{n\rho}{\psi(1-\psi)}
+(1-\rho)\left(\frac2{1-\psi}+\frac1\psi\right)
=\frac{\kappa+(1-\rho)\psi}{\psi(1-\psi)}.
\]</div>{% endraw %}
<p>This is a positive combination of {% raw %}<span class="math inline">\(1/\psi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1/(1-\psi)\)</span>{% endraw %}, hence is strictly convex and diverges at both endpoints. Its derivative vanishes exactly when</p>

{% raw %}<div class="math display">\[
(1-\rho)\psi^2+2\kappa\psi-\kappa=0,
\]</div>{% endraw %}
<p>which has the displayed positive root. At {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %} the root is {% raw %}<span class="math inline">\(\sqrt2-1\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %} it is {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\rho&lt;1\)</span>{% endraw %}, divide the first-order condition by {% raw %}<span class="math inline">\(1-\rho\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(b=n\rho/(1-\rho)\)</span>{% endraw %}. The equation becomes</p>

{% raw %}<div class="math display">\[
\psi^2+2(1+b)\psi-(1+b)=0.
\]</div>{% endraw %}
<p>Implicit differentiation gives {% raw %}<span class="math inline">\(d\psi/db=(1-2\psi)/(2\psi+2(1+b))&gt;0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\psi&lt;1/2\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(b\)</span>{% endraw %} increases with {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} and with {% raw %}<span class="math inline">\(n\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\rho&gt;0\)</span>{% endraw %}, the comparative statics follow.</p>

</div>
<p>The slope design and the partial-population design answer different questions. Two separated positive saturations reveal how responses change with treatment intensity. One positive saturation with pure controls concentrates precision on effects at that intensity. A study that needs both must assign value to both sets of comparisons before optimizing the design.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-baird_optimal_2018" class="csl-entry" role="listitem">
Baird, Sarah, J. Aislinn Bohren, Craig McIntosh, and Berk Özler. 2018. <span>“Optimal Design of Experiments in the Presence of Interference.”</span> <em>The Review of Economics and Statistics</em> 100 (5): 844–60. <a href="https://doi.org/10.1162/rest_a_00716">https://doi.org/10.1162/rest_a_00716</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">Dependence-Robust Resampling and Moment Tests</a> · Next: <a href="{% post_url 2025-02-18-network-formation-and-identification-with-missing-links %}">Network Formation and Identification with Missing Links</a></p></nav>

</div>
