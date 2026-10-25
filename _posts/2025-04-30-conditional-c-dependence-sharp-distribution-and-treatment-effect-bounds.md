---
layout: "post"
title: "Conditional c-Dependence: Sharp Distribution and Treatment-Effect Bounds"
date: "2025-04-30"
tags: ["econometrics", "partial identification"]
excerpt: "Conditional c-dependence yields sharp distribution and treatment-effect bounds through restrictions on selection probabilities, with separate formulas for ATT and binary outcomes."
note_series: "Sensitivity to unconfoundedness"
note_source: "assets/notes/Overleaf Projects (32 items)/Unconfoundedness (Notes)/stats.tex"
redirect_from: ["/2025/02/08/conditional-c-dependence-and-sharp-distribution-bounds/", "/2025/02/08/conditional-partial-independence-setup/", "/2025/02/28/assumptions-for-conditional-c-dependence/", "/2025/03/20/interpreting-the-sensitivity-parameter/", "/2025/04/10/bounds-on-potential-outcome-distributions/", "/2025/04/30/conditional-distribution-bounds-under-c-dependence/", "/2025/04/30/treatment-effect-bounds-under-conditional-c-dependence/", "/2025/05/20/quantile-and-mean-treatment-effect-bounds/", "/2025/06/10/unconditional-distribution-and-quantile-bounds/"]
---

<div class="note-content" markdown="0">


<p>Conditional independence identifies a potential-outcome distribution from the observed distribution in the corresponding treatment group. Conditional {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-dependence allows treatment probabilities to change by at most {% raw %}<span class="math inline">\(c\)</span>{% endraw %} after conditioning on that potential outcome. The resulting restrictions determine bounds on distributions, quantiles, and average treatment effects. This note derives those bounds and the joint distributions needed for sharpness, following <span class="citation" data-cites="masten_identification_2018">Masten and Poirier (<a href="#ref-masten_identification_2018" role="doc-biblioref">2018</a>)</span>.</p>
<h3 data-note-section="1" id="30-0-the-restriction">1. Model and identifying restrictions</h3>
<p>Let {% raw %}<span class="math inline">\(X\in\{0,1\}\)</span>{% endraw %} denote treatment, {% raw %}<span class="math inline">\(Y_0,Y_1\)</span>{% endraw %} the potential outcomes, and {% raw %}<span class="math inline">\(W\)</span>{% endraw %} observed covariates. All variables are defined on one probability space, with</p>
{% raw %}<div class="math display">\[
Y=XY_1+(1-X)Y_0.
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(p_x(w)=P(X=x\mid W=w)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H_x(y\mid w)=P(Y\le y\mid X=x,W=w)\)</span>{% endraw %}. The distribution of {% raw %}<span class="math inline">\((Y,X,W)\)</span>{% endraw %} is taken as known in this identification analysis. Conditional laws are probability kernels on standard Borel spaces; assertions indexed by {% raw %}<span class="math inline">\(w\)</span>{% endraw %} hold for {% raw %}<span class="math inline">\(P_W\)</span>{% endraw %}-almost every {% raw %}<span class="math inline">\(w\)</span>{% endraw %} under the chosen versions.</p>
<p><strong>Assumption A1 (Overlap and outcome support).</strong> For {% raw %}<span class="math inline">\(x=0,1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;p_x(w)&lt;1\)</span>{% endraw %}. Each conditional law of {% raw %}<span class="math inline">\(Y_x\)</span>{% endraw %} given {% raw %}<span class="math inline">\((X,W)=(x&#x27;,w)\)</span>{% endraw %} has a continuous, strictly increasing cdf on the same interval {% raw %}<span class="math inline">\([\ell_x(w),u_x(w)]\)</span>{% endraw %}, for both {% raw %}<span class="math inline">\(x&#x27;=0,1\)</span>{% endraw %}. Either endpoint may be infinite. Thus {% raw %}<span class="math inline">\(H_x\)</span>{% endraw %} identifies the support endpoints of {% raw %}<span class="math inline">\(Y_x\mid W=w\)</span>{% endraw %}.</p>
<p><strong>Assumption A2 (Conditional {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-dependence).</strong> For a fixed {% raw %}<span class="math inline">\(c\in[0,1]\)</span>{% endraw %} and each {% raw %}<span class="math inline">\(x\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\left|P(X=1\mid Y_x,W)-p_1(W)\right|\le c
\quad\text{almost surely}.
\]</div>{% endraw %}
<p>The equivalent essential-supremum formulation avoids assigning restrictions to arbitrary values of a conditional probability on null sets. At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, A2 gives {% raw %}<span class="math inline">\(X\perp Y_x\mid W\)</span>{% endraw %} separately for each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Dependence between {% raw %}<span class="math inline">\(Y_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_1\)</span>{% endraw %} remains unrestricted.</p>
<p>Let {% raw %}<span class="math inline">\(\mathcal M_c(P)\)</span>{% endraw %} be the full-data laws of {% raw %}<span class="math inline">\((Y_0,Y_1,X,W)\)</span>{% endraw %} that reproduce the observed law {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and satisfy A1–A2 and consistency. For a functional {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
\Theta_c(P)=\{\theta(Q):Q\in\mathcal M_c(P)\}.
\]</div>{% endraw %}
<p>A lower bound is sharp if it equals {% raw %}<span class="math inline">\(\inf\Theta_c(P)\)</span>{% endraw %}; an upper bound is sharp if it equals {% raw %}<span class="math inline">\(\sup\Theta_c(P)\)</span>{% endraw %}. These definitions allow the extrema to be approached without being attained. Because {% raw %}<span class="math inline">\(\mathcal M_{c_1}(P)\subseteq\mathcal M_{c_2}(P)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(c_1\le c_2\)</span>{% endraw %}, sharp lower bounds decrease and sharp upper bounds increase as {% raw %}<span class="math inline">\(c\)</span>{% endraw %} grows.</p>
<h3 data-note-section="2" id="30-0-a-simpler-distribution-problem">2. Selection probabilities and distribution bounds</h3>
<p>Fix {% raw %}<span class="math inline">\(w\)</span>{% endraw %} and suppress it temporarily. For treatment group {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, put</p>
{% raw %}<div class="math display">\[
p=p_x(w),\qquad a=\max(0,p-c),\qquad b=\min(1,p+c).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is binary, A2 is equivalent to {% raw %}<span class="math inline">\(a\le P(X=x\mid Y_x,W=w)\le b\)</span>{% endraw %}. Begin with a continuous random variable {% raw %}<span class="math inline">\(U\)</span>{% endraw %} whose marginal cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is known. Let {% raw %}<span class="math inline">\(H(y)=P(U\le y\mid X=x)\)</span>{% endraw %}.</p>
<div id="cdep-cdf" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. (Conditional distribution bounds.) If {% raw %}<span class="math inline">\(P(X=x)=p\in(0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q(U)=P(X=x\mid U)\in[a,b]\)</span>{% endraw %} almost surely, then</p>
{% raw %}<div class="math display">\[
\max\left(\frac{aF(y)}p,1-\frac{b(1-F(y))}p\right)
\le H(y)\le
\min\left(\frac{bF(y)}p,1-\frac{a(1-F(y))}p\right).
\]</div>{% endraw %}
<p>In the model imposing only these selection restrictions and the marginal law {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, each envelope is attained simultaneously at every cutoff.</p>
</div>
<p><span id="30-0-derive-both-sides-of-the-cutoff"></span> <strong>Proof.</strong> Conditioning on {% raw %}<span class="math inline">\(U\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
pH(y)=\int_{(-\infty,y]}q(v)\,dF(v),\qquad
p(1-H(y))=\int_{(y,\infty)}q(v)\,dF(v).
\]</div>{% endraw %}
<p>The first integral lies between {% raw %}<span class="math inline">\(aF(y)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(bF(y)\)</span>{% endraw %}; the second lies between {% raw %}<span class="math inline">\(a(1-F(y))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b(1-F(y))\)</span>{% endraw %}. Solving all four inequalities gives the bounds.</p>
<p>For attainment, {% raw %}<span class="math inline">\(V=F(U)\)</span>{% endraw %} is uniform on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(r=(p-a)/(b-a)\)</span>{% endraw %} and assign selection probability {% raw %}<span class="math inline">\(b\)</span>{% endraw %} on {% raw %}<span class="math inline">\(V\le r\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a\)</span>{% endraw %} on {% raw %}<span class="math inline">\(V&gt;r\)</span>{% endraw %}. Its integral is {% raw %}<span class="math inline">\(br+a(1-r)=p\)</span>{% endraw %}. The selected cdf at rank {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is {% raw %}<span class="math inline">\(bv/p\)</span>{% endraw %} below {% raw %}<span class="math inline">\(r\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1-a(1-v)/p\)</span>{% endraw %} above {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, giving the upper envelope. Assigning {% raw %}<span class="math inline">\(a\)</span>{% endraw %} below {% raw %}<span class="math inline">\(r&#x27;=(b-p)/(b-a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %} above {% raw %}<span class="math inline">\(r&#x27;\)</span>{% endraw %} gives the lower envelope. A Bernoulli draw with the specified selection probability completes the joint law. If {% raw %}<span class="math inline">\(a=b=p\)</span>{% endraw %}, constant selection gives {% raw %}<span class="math inline">\(H=F\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p><span id="30-0-check-the-endpoints"></span> At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, both bounds equal {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=1\)</span>{% endraw %}, they become {% raw %}<span class="math inline">\(\max(0,(F(y)+p-1)/p)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\min(F(y)/p,1)\)</span>{% endraw %}. These are the bounds obtained from the two marginal distributions alone.</p>
<h3 data-note-section="3" id="30-0-inverting-the-restrictions-to-recover-potential-outcomes">3. Potential-outcome distributions</h3>
<p>In the treatment-effect problem, {% raw %}<span class="math inline">\(H=H_x(\cdot\mid w)\)</span>{% endraw %} is observed and {% raw %}<span class="math inline">\(F=F_{Y_x\mid W}(\cdot\mid w)\)</span>{% endraw %} is unknown. Consistency and A2 imply</p>
{% raw %}<div class="math display">\[
aF(y)\le pH(y)\le bF(y),\qquad
a(1-F(y))\le p(1-H(y))\le b(1-F(y)).
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, inversion gives</p>
{% raw %}<div class="math display">\[
\underline F_x^c(y\mid w)=\max\left(0,\frac{pH(y)}b,
1-\frac{p(1-H(y))}a\right),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\overline F_x^c(y\mid w)=\min\left(1,\frac{pH(y)}a,
1-\frac{p(1-H(y))}b\right).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}, the inequalities containing {% raw %}<span class="math inline">\(a\)</span>{% endraw %} impose no further restriction, and at interior support points the bounds are</p>
{% raw %}<div class="math display">\[
\frac{pH(y)}b\le F(y)\le 1-\frac{p(1-H(y))}b.
\]</div>{% endraw %}
<p>Cdfs equal zero below the support and one at a finite upper support endpoint. The interior formulas with {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} can have endpoint jumps when completed as cdfs on a bounded support. Under A1, those envelopes are limits of admissible cdfs.</p>
<!-- original-paper-scope: numerical-cdf-example
An added numerical illustration; the source CDF bounds and their compatibility proof remain visible.

For example, let $p=1/2$, $c=1/10$, and $H(y)=1/2$. Then $a=2/5$, $b=3/5$, and

$$
\underline F_x^c(y\mid w)=\max(5/12,3/8)=5/12,
\qquad
\overline F_x^c(y\mid w)=\min(5/8,7/12)=7/12.
$$

Thus the observed median can have any population percentile between these values.
-->
<div id="cdep-compatibility" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. (Compatibility and sharpness.) Under A1–A2, the displayed functions bound {% raw %}<span class="math inline">\(F_{Y_x\mid W}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(0\le c&lt;\min(p_0(w),p_1(w))\)</span>{% endraw %}, each envelope is an admissible potential-outcome cdf, and either envelope can be chosen for each {% raw %}<span class="math inline">\(x\)</span>{% endraw %} in one joint law reproducing both observed treatment-group distributions. For every {% raw %}<span class="math inline">\(c\in[0,1]\)</span>{% endraw %}, the interior-support bounds can be approached by such joint laws satisfying A1.</p>
</div>
<p>The construction identifies the missing conditional distribution. For {% raw %}<span class="math inline">\(0&lt;a\le b&lt;1\)</span>{% endraw %}, choose either envelope {% raw %}<span class="math inline">\(F\)</span>{% endraw %} and set</p>
{% raw %}<div class="math display">\[
G(y)=\frac{F(y)-pH(y)}{1-p}.
\]</div>{% endraw %}
<p>As a function of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, the cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %} has slopes {% raw %}<span class="math inline">\(p/a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p/b\)</span>{% endraw %}. The corresponding slopes of {% raw %}<span class="math inline">\(G\)</span>{% endraw %} are {% raw %}<span class="math inline">\(p(1/a-1)/(1-p)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p(1/b-1)/(1-p)\)</span>{% endraw %}, both positive. Hence {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a continuous, strictly increasing cdf with the required support, and {% raw %}<span class="math inline">\(F=pH+(1-p)G\)</span>{% endraw %}. Moreover,</p>
{% raw %}<div class="math display">\[
P(X=x\mid Y_x=y,W=w)=p\frac{dH}{dF}(y)\in\{a,b\}
\]</div>{% endraw %}
<p>almost everywhere, with the constant value {% raw %}<span class="math inline">\(p\)</span>{% endraw %} when {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}. The appendix completes the construction for both potential outcomes and proves the boundary approximation.</p>
<h3 data-note-section="4" id="30-0-from-cdfs-to-quantiles-and-means">4. Quantiles and average treatment effects</h3>
<p>For {% raw %}<span class="math inline">\(0&lt;\tau&lt;1\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Q_H(\tau)=\inf\{y:H(y)\ge\tau\}\)</span>{% endraw %}. Use {% raw %}<span class="math inline">\(Q_H(0)=\ell_x(w)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_H(1)=u_x(w)\)</span>{% endraw %} when an endpoint is required. Define</p>
{% raw %}<div class="math display">\[
m(\tau)=\min(\tau,1-\tau),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
t_x^-(\tau,c,w)=\max\left(\tau-\frac{c}{p_x(w)}m(\tau),
1+\frac{\tau-1}{p_x(w)},0\right),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
t_x^+(\tau,c,w)=\min\left(\tau+\frac{c}{p_x(w)}m(\tau),
\frac{\tau}{p_x(w)},1\right).
\]</div>{% endraw %}
<p>The full-range quantile endpoints are</p>
{% raw %}<div class="math display">\[
Q_x^{c,-}(\tau\mid w)=Q_{H_x}(t_x^-(\tau,c,w)\mid w),\qquad
Q_x^{c,+}(\tau\mid w)=Q_{H_x}(t_x^+(\tau,c,w)\mid w).
\]</div>{% endraw %}
<p>To derive the lower index, require every branch of {% raw %}<span class="math inline">\(\overline F_x^c(y\mid w)\)</span>{% endraw %} to be at least {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. This gives</p>
{% raw %}<div class="math display">\[
H(y)\ge\max\left(\frac{a\tau}{p},1-\frac{b(1-\tau)}p,0\right).
\]</div>{% endraw %}
<p>Substituting {% raw %}<span class="math inline">\(a=\max(0,p-c)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=\min(1,p+c)\)</span>{% endraw %} and collecting the branches gives {% raw %}<span class="math inline">\(t_x^-\)</span>{% endraw %}. For the upper index, the first branch of {% raw %}<span class="math inline">\(\underline F_x^c\)</span>{% endraw %} to reach {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\min\left(\frac{b\tau}p,1-\frac{a(1-\tau)}p,1\right)=t_x^+.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(c&lt;\min(p,1-p)\)</span>{% endraw %}, the extra support branches are inactive, and the indices reduce to {% raw %}<span class="math inline">\(\tau\pm c m(\tau)/p\)</span>{% endraw %}.</p>
<p>For means, assume</p>
{% raw %}<div class="math display">\[
\mathbb{E}\int_0^1\left(|Q_x^{c,-}(\tau\mid W)|+
|Q_x^{c,+}(\tau\mid W)|\right)d\tau&lt;\infty,
\qquad x=0,1.
\]</div>{% endraw %}
<p>Bounded outcome supports with integrable bounds imply this condition. Let</p>
{% raw %}<div class="math display">\[
\mu_x^{c,\pm}(w)=\int_0^1Q_x^{c,\pm}(\tau\mid w)\,d\tau,
\qquad M_x^{c,\pm}=\mathbb{E}[\mu_x^{c,\pm}(W)].
\]</div>{% endraw %}
<div id="cdep-treatment-effects" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. (Treatment-effect bounds.) Under A1–A2, the conditional quantile treatment effect lies between</p>
{% raw %}<div class="math display">\[
Q_1^{c,-}(\tau\mid w)-Q_0^{c,+}(\tau\mid w)
\quad\text{and}\quad
Q_1^{c,+}(\tau\mid w)-Q_0^{c,-}(\tau\mid w).
\]</div>{% endraw %}
<p>Under the stated integrability condition, CATE is bounded by {% raw %}<span class="math inline">\(\mu_1^{c,-}-\mu_0^{c,+}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_1^{c,+}-\mu_0^{c,-}\)</span>{% endraw %}, and ATE is bounded by</p>
{% raw %}<div class="math display">\[
L(c)=M_1^{c,-}-M_0^{c,+},\qquad
U(c)=M_1^{c,+}-M_0^{c,-}.
\]</div>{% endraw %}
<p>These bounds are sharp. Every value strictly between the two endpoints is attainable. Both endpoints are attained when the strict-overlap condition in the compatibility theorem holds almost everywhere.</p>
</div>
<p><strong>Proof.</strong> Cdf order reverses under generalized inversion, so {% raw %}<span class="math inline">\(\underline F\le F\le\overline F\)</span>{% endraw %} implies {% raw %}<span class="math inline">\((\overline F)^{-1}\le Q_F\le(\underline F)^{-1}\)</span>{% endraw %}. The quantile representation {% raw %}<span class="math inline">\(Q_F(V)\sim F\)</span>{% endraw %} for a uniform {% raw %}<span class="math inline">\(V\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb{E}_F Y=\int_0^1Q_F(\tau)d\tau\)</span>{% endraw %}. Integrating the quantile bounds first over {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} and then over {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives the mean bounds. The compatibility theorem permits opposing endpoint choices for {% raw %}<span class="math inline">\(Y_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_0\)</span>{% endraw %}. Its approximating distributions converge to those choices, and the integrability condition permits dominated convergence for their means. The appendix proves attainment of intermediate values. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<!-- original-paper-scope: uniform-outcome-example
An added uniform-outcome illustration, separate from the paper's quantile and mean bounds.

For example, suppose both observed conditional distributions are uniform on $[0,1]$ and $p_0=p_1=1/2$. For $0\le c<1/2$,

$$
Q_x^{c,\pm}(\tau)=\tau\pm2c\min(\tau,1-\tau),\qquad
\int_0^1\min(\tau,1-\tau)\,d\tau=\frac14.
$$

The mean endpoints are $1/2\pm c/2$, giving the ATE interval $[-c,c]$.
-->
<h3 data-note-section="5" id="30-0-att">5. Average effect on the treated</h3>
<p>Let {% raw %}<span class="math inline">\(p=P(X=1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_d=\mathbb{E}[Y\mid X=d]\)</span>{% endraw %}. Consistency gives {% raw %}<span class="math inline">\(\mathbb{E}[Y_1\mid X=1]=m_1\)</span>{% endraw %} and</p>
{% raw %}<div class="math display">\[
\mathbb{E}[Y_0]=(1-p)m_0+p\mathbb{E}[Y_0\mid X=1].
\]</div>{% endraw %}
<p>Solving for the missing treated mean yields</p>
{% raw %}<div class="math display">\[
\operatorname{ATT}=m_1-\frac{\mathbb{E}[Y_0]-(1-p)m_0}{p}.
\]</div>{% endraw %}
<div id="cdep-att" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. (ATT bounds.) Under A1–A2 and the mean integrability condition, the sharp ATT bounds are</p>
{% raw %}<div class="math display">\[
L_{\mathrm{ATT}}(c)=m_1-\frac{M_0^{c,+}-(1-p)m_0}{p},\qquad
U_{\mathrm{ATT}}(c)=m_1-\frac{M_0^{c,-}-(1-p)m_0}{p}.
\]</div>{% endraw %}
</div>
<p><strong>Proof.</strong> The ATT identity is decreasing in {% raw %}<span class="math inline">\(\mathbb{E}[Y_0]\)</span>{% endraw %}, giving the two inequalities. Choose the upper or lower feasible {% raw %}<span class="math inline">\(Y_0\)</span>{% endraw %} distribution from the compatibility theorem and complete {% raw %}<span class="math inline">\(Y_1\)</span>{% endraw %} using {% raw %}<span class="math inline">\(Y_1\perp X\mid W\)</span>{% endraw %}. This preserves its observed treated law. Attainment or approximation of the mean endpoints then gives the corresponding ATT bounds. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>For {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, the missing mean {% raw %}<span class="math inline">\(\mathbb{E}[Y_0\mid X=1,W]\)</span>{% endraw %} can differ from {% raw %}<span class="math inline">\(\mathbb{E}[Y_0\mid W]\)</span>{% endraw %}. The mixture identity above accounts for that difference; averaging CATE bounds over {% raw %}<span class="math inline">\(W\mid X=1\)</span>{% endraw %} would generally estimate another quantity.</p>
<h3 data-note-section="6" id="30-0-marginal-quantiles-and-individual-treatment-effects">6. Marginal distributions and treatment-effect distributions</h3>
<p>Marginal cdf bounds follow from</p>
{% raw %}<div class="math display">\[
F_{Y_x}(y)=\mathbb{E}[F_{Y_x\mid W}(y\mid W)].
\]</div>{% endraw %}
<p>Average the conditional cdf endpoints over {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, then invert to obtain marginal quantile endpoints.</p>
<!-- original-paper-scope: conditional-median-example
An added example comparing marginal and averaged conditional medians.

For example, if $Y=0$ in a covariate group of probability $3/4$ and $Y=10$ otherwise, the average conditional median is $5/2$ and the marginal median is zero. Continuous approximations preserve the discrepancy.
-->
<p>The quantile treatment effect {% raw %}<span class="math inline">\(Q_{Y_1}(\tau)-Q_{Y_0}(\tau)\)</span>{% endraw %} compares two marginal quantiles. The distribution of {% raw %}<span class="math inline">\(Y_1-Y_0\)</span>{% endraw %} also depends on their joint law.</p>
<!-- original-paper-scope: individual-effect-couplings
An added pair of couplings illustrating individual-effect distributions; the distinction between marginal quantiles and individual effects remains visible.

If both marginals are uniform on $[0,1]$, the quantile treatment effect is zero. The coupling $Y_1=Y_0$ gives zero effects for everyone, whereas $Y_1=1-Y_0$ gives a uniform effect on $[-1,1]$.
-->
<p>At sufficiently large {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, A2 imposes no selection restriction. If {% raw %}<span class="math inline">\(Y_x\)</span>{% endraw %} has known finite support endpoints {% raw %}<span class="math inline">\(\ell_x(w),u_x(w)\)</span>{% endraw %}, its conditional mean bounds reduce to</p>
{% raw %}<div class="math display">\[
p_x(w)\mathbb{E}[Y\mid X=x,W=w]+(1-p_x(w))\ell_x(w)
\]</div>{% endraw %}
<p>and the same expression with {% raw %}<span class="math inline">\(u_x(w)\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(\ell_x(w)\)</span>{% endraw %}. These are the missing-outcome bounds: the observed group contributes its known mean, and the unobserved group can approach either support endpoint.</p>
<h3 data-note-section="7" id="30-0-binary">7. Binary outcomes</h3>
<p>For this section, retain overlap and replace A1’s outcome-distribution assumptions by {% raw %}<span class="math inline">\(Y_x\in\{0,1\}\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\((x,w)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(h=P(Y=1\mid X=x,W=w)\)</span>{% endraw %}, and retain {% raw %}<span class="math inline">\(p,a,b\)</span>{% endraw %} as above. If {% raw %}<span class="math inline">\(t=P(Y_x=1\mid W=w)\)</span>{% endraw %}, the joint probabilities of {% raw %}<span class="math inline">\((Y_x,\mathbf1\{X=x\})\)</span>{% endraw %} are</p>
{% raw %}<div class="math display">\[
\begin{array}{c|cc}
 &amp;X=x&amp;X\ne x\\\hline
Y_x=1&amp;ph&amp;t-ph\\
Y_x=0&amp;p(1-h)&amp;1-t-p(1-h)
\end{array}.
\]</div>{% endraw %}
<p>The exact feasible interval is, for {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\max\left(0,\frac{ph}b,1-\frac{p(1-h)}a\right)
\le t\le
\min\left(1,\frac{ph}a,1-\frac{p(1-h)}b\right).
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}, omit the terms with denominator {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. To verify sufficiency, the displayed inequalities imply nonnegative table entries because {% raw %}<span class="math inline">\(b\le1\)</span>{% endraw %}. In a row of positive mass, the treatment probability is {% raw %}<span class="math inline">\(ph/t\)</span>{% endraw %} or {% raw %}<span class="math inline">\(p(1-h)/(1-t)\)</span>{% endraw %}, both in {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. A zero-mass row imposes no conditional restriction. Thus every value in the interval defines a feasible table; combining the two tables conditionally on {% raw %}<span class="math inline">\((X,W)\)</span>{% endraw %} gives one full-data law.</p>
<p>Clipping {% raw %}<span class="math inline">\(b\)</span>{% endraw %} at one retains the restrictions {% raw %}<span class="math inline">\(t\ge ph\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t\le1-p(1-h)\)</span>{% endraw %}. The formulas are equivalent to the corrected bounds in the authors’ <a href="https://mattmasten.github.io/assets/pdf/MP2018_Erratum.pdf">February 2023 erratum</a>; the original binary-outcome bounds were conservative.</p>
<h3 data-note-section="8" id="30-0-completing-compatibility-in-the-strict-overlap-case">8. Appendix: Joint distributions and boundary limits</h3>
<p>Fix {% raw %}<span class="math inline">\(w\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, choose a potential-outcome cdf {% raw %}<span class="math inline">\(F_x\)</span>{% endraw %} and its missing-group cdf {% raw %}<span class="math inline">\(G_x=(F_x-p_xH_x)/(1-p_x)\)</span>{% endraw %} as constructed in the body. Draw {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with probabilities {% raw %}<span class="math inline">\(p_0,p_1\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, draw {% raw %}<span class="math inline">\(Y_0,Y_1\)</span>{% endraw %} independently, giving {% raw %}<span class="math inline">\(Y_x\)</span>{% endraw %} law {% raw %}<span class="math inline">\(H_x\)</span>{% endraw %} if {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %} and law {% raw %}<span class="math inline">\(G_x\)</span>{% endraw %} otherwise. Then</p>
{% raw %}<div class="math display">\[
\mathcal L(Y_x\mid W=w)=p_xH_x+(1-p_x)G_x=F_x,
\qquad \mathcal L(Y\mid X=x,W=w)=H_x.
\]</div>{% endraw %}
<p>The selection restrictions hold for each potential outcome because they depend only on its joint law with {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. The conditional independence used in this construction is a choice of coupling. All formulas are measurable in {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, so the kernels can be integrated against the observed law of {% raw %}<span class="math inline">\(W\)</span>{% endraw %}.</p>
<p>For boundary values of {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(0&lt;\eta&lt;1\)</span>{% endraw %} and replace {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} by</p>
{% raw %}<div class="math display">\[
a_\eta=(1-\eta)a+\eta p,\qquad
b_\eta=(1-\eta)b+\eta p.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(0&lt;a_\eta\le p\le b_\eta&lt;1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\([a_\eta,b_\eta]\subseteq[a,b]\)</span>{% endraw %}. The strict construction applies and satisfies the original {% raw %}<span class="math inline">\(c\)</span>{% endraw %} restriction. Its lower and upper quantile indices are</p>
{% raw %}<div class="math display">\[
\max\left(\frac{a_\eta\tau}p,1-\frac{b_\eta(1-\tau)}p\right),
\qquad
\min\left(\frac{b_\eta\tau}p,1-\frac{a_\eta(1-\tau)}p\right).
\]</div>{% endraw %}
<p>As {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}, these decrease and increase, respectively, to {% raw %}<span class="math inline">\(t_x^-\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t_x^+\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(H_x^{-1}\)</span>{% endraw %} on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and its one-sided endpoint limits prove quantile convergence, allowing infinite limits when the support is unbounded. Direct substitution in the cdf formulas proves convergence at interior support points. Every approximating quantile lies between the limiting lower and upper quantiles, so the absolute-integrability condition in the body supplies a dominating function for mean convergence.</p>
<p>To obtain intermediate effect values, fix two admissible full-data laws with the same observed law and mix them with weight {% raw %}<span class="math inline">\(\lambda\in[0,1]\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, the measure inequalities</p>
{% raw %}<div class="math display">\[
aF_x(A)\le p_xH_x(A)\le bF_x(A),\qquad A\text{ measurable},
\]</div>{% endraw %}
<p>are preserved by mixing. The conditional cdfs remain continuous and strictly increasing on their common support. Mean effects are affine in {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. For a quantile, if {% raw %}<span class="math inline">\(y_\lambda\)</span>{% endraw %} is the unique solution of {% raw %}<span class="math inline">\(F_\lambda(y)=\tau\)</span>{% endraw %}, then for every {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} inside the support,</p>
{% raw %}<div class="math display">\[
F_\lambda(y_\lambda-\delta)&lt;\tau&lt;F_\lambda(y_\lambda+\delta).
\]</div>{% endraw %}
<p>The inequalities persist for nearby mixing weights because {% raw %}<span class="math inline">\(F_\lambda\)</span>{% endraw %} is affine in {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. They place the nearby quantile between {% raw %}<span class="math inline">\(y_\lambda-\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y_\lambda+\delta\)</span>{% endraw %}, proving continuity. Quantile differences are therefore continuous in {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Approximations to the lower and upper bounds bracket any strict interior value, and the intermediate value theorem supplies a law attaining it.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-masten_identification_2018" class="csl-entry" role="listitem">
Masten, Matthew A., and Alexandre Poirier. 2018. <span>“Identification of Treatment Effects Under Conditional Partial Independence.”</span> <em>Econometrica</em> 86 (1): 317–51. <a href="https://doi.org/10.3982/ECTA14481">https://doi.org/10.3982/ECTA14481</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2025-10-30-inference-for-sensitivity-bounds-limit-laws-bootstrap-and-breakdown-points %}">Inference for Sensitivity Bounds: Limit Laws, Bootstrap, and Breakdown Points</a></p></nav>
</div>
