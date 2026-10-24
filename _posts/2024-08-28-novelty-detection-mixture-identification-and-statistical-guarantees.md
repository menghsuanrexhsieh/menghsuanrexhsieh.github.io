---
layout: "post"
title: "Novelty Detection: Mixture Identification and Statistical Guarantees"
date: "2024-08-28"
tags: ["statistics", "machine learning"]
excerpt: "A nominal sample and an unlabeled mixture identify optimal rejection rankings and a lower endpoint for the novelty fraction; the full fraction remains set identified without irreducibility."
note_series: "Novelty detection"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on ML Novelty Detection/stats.tex"
redirect_from: ["/2024/07/06/novelty-detection-and-statistical-guarantees/", "/2024/07/06/novelty-detection-as-positiveunlabeled-learning/", "/2024/07/29/statistical-guarantees/", "/2024/08/21/estimating-the-class-proportion-in-novelty-detection/", "/2024/08/21/mixture-proportions-identification-and-limits-to-estimation/", "/2024/08/21/novelty-detection-mixture-identification-and-statistical-guarantees/", "/2024/09/14/why-the-class-proportion-has-no-distribution-free-upper-bound/"]
---

<div class="note-content" markdown="0">


<p>Suppose we have labeled examples of an ordinary class and an unlabeled sample that also contains novel observations. The novel distribution is unknown, so its likelihood ratio cannot be estimated directly from labeled examples. <span class="citation" data-cites="blanchard_semi-supervised_2010">(<a href="#ref-blanchard_semi-supervised_2010" role="doc-biblioref">Blanchard, Lee, and Scott 2010</a>)</span> show that comparing the ordinary distribution with the mixture can nevertheless recover the same optimal rejection ordering.</p>
<h3 data-note-section="1" id="15-0-the-population-result">1. The population result</h3>
<p>Let {% raw %}<span class="math inline">\(P_X=(1-\pi)P_0+\pi P_1\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(0&lt;\pi\leq1\)</span>{% endraw %}. A measurable rule {% raw %}<span class="math inline">\(f\)</span>{% endraw %} takes values in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(f(x)\)</span>{% endraw %} the probability of declaring novelty at {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Deterministic rules take only the values zero and one. Write</p>
{% raw %}<div class="math display">\[
R_0(f)=E_{P_0}f,\quad R_1(f)=E_{P_1}(1-f),\quad
R_X(f)=E_{P_X}(1-f).
\]</div>{% endraw %}
<p>Acceptance in the mixture is acceptance in either latent class, weighted by that class’s proportion. Hence</p>
{% raw %}<div class="math display">\[
R_X(f)=(1-\pi)(1-R_0(f))+\pi R_1(f).
\]</div>{% endraw %}
<div id="novelty-reduction" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose the minimum false-negative risk over {% raw %}<span class="math inline">\(R_0(f)\le\alpha\)</span>{% endraw %} is attained by a classifier {% raw %}<span class="math inline">\(f^*\)</span>{% endraw %} with {% raw %}<span class="math inline">\(R_0(f^*)=\alpha\)</span>{% endraw %}. Minimizing {% raw %}<span class="math inline">\(R_X\)</span>{% endraw %} under the same constraint attains the same false-negative optimum. Every minimizer of {% raw %}<span class="math inline">\(R_X\)</span>{% endraw %} also minimizes {% raw %}<span class="math inline">\(R_1\)</span>{% endraw %}; when {% raw %}<span class="math inline">\(0&lt;\pi&lt;1\)</span>{% endraw %}, its false-positive constraint binds.</p>
</div>
<p>Indeed, for any feasible {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
R_X(f)-R_X(f^*)
=\pi(R_1(f)-R_1(f^*))+(1-\pi)(\alpha-R_0(f))\ge0.
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(\pi=1\)</span>{% endraw %}, the two objectives coincide directly; binding of the false-positive constraint need not follow. Randomization can help attain an exact false-positive level in a discrete model.</p>
<h3 data-note-section="2" id="15-0-a-likelihood-ratio-interpretation">2. A likelihood-ratio interpretation</h3>
<p>When densities exist,</p>
{% raw %}<div class="math display">\[
\frac{f_X(x)}{f_0(x)}=(1-\pi)+\pi\frac{f_1(x)}{f_0(x)}.
\]</div>{% endraw %}
<p>The mixture likelihood ratio is a positive affine transformation of the novel-to-nominal ratio. It therefore preserves its ordering. A Neyman–Pearson comparison with the unlabeled mixture can select the same rejection sets as a comparison with labeled novel observations.</p>
<p>Low nominal density alone does not give this ordering. It is appropriate for a uniform alternative in the corresponding setting, but a novel class may put substantial mass where ordinary observations are also common. The finite example below separates these rules.</p>
<p>For a finite support, this ranking can be derived as a budget-allocation calculation. Let {% raw %}<span class="math inline">\(r_j\in[0,1]\)</span>{% endraw %} be the probability of rejecting at point {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(p_{0j}&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_{1j}\)</span>{% endraw %} be the two class probabilities. Maximizing novel-class power subject to false-positive level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} means</p>
{% raw %}<div class="math display">\[
\max_{0\leq r_j\leq1}\sum_jp_{1j}r_j
\quad\text{subject to}\quad
\sum_jp_{0j}r_j\leq\alpha.
\]</div>{% endraw %}
<p>Moving an amount {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} of false-positive budget from point {% raw %}<span class="math inline">\(a\)</span>{% endraw %} to point {% raw %}<span class="math inline">\(b\)</span>{% endraw %} changes power by {% raw %}<span class="math inline">\(\varepsilon(p_{1b}/p_{0b}-p_{1a}/p_{0a})\)</span>{% endraw %}. An optimum therefore fills points in decreasing likelihood-ratio order, randomizing at a boundary point if needed. Replacing {% raw %}<span class="math inline">\(p_{1j}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(p_{Xj}\)</span>{% endraw %} adds the same constant {% raw %}<span class="math inline">\(1-\pi\)</span>{% endraw %} to every ratio and multiplies its remaining part by {% raw %}<span class="math inline">\(\pi&gt;0\)</span>{% endraw %}, preserving that order.</p>
<p>For example, take nominal probabilities {% raw %}<span class="math inline">\((0.6,0.3,0.1)\)</span>{% endraw %} and novel probabilities {% raw %}<span class="math inline">\((0.8,0.1,0.1)\)</span>{% endraw %}. The likelihood ratios are {% raw %}<span class="math inline">\((4/3,1/3,1)\)</span>{% endraw %}. At false-positive level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, randomizing with probability {% raw %}<span class="math inline">\(1/6\)</span>{% endraw %} at the first point gives power {% raw %}<span class="math inline">\(0.8/6=2/15\)</span>{% endraw %}. Rejecting the least common nominal point gives power only {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}. Novelty can be concentrated where nominal observations are common.</p>
<p>With novelty fraction {% raw %}<span class="math inline">\(\pi=0.2\)</span>{% endraw %}, the mixture probabilities are {% raw %}<span class="math inline">\((0.64,0.26,0.10)\)</span>{% endraw %} and its likelihood ratios are {% raw %}<span class="math inline">\((16/15,13/15,1)\)</span>{% endraw %}. Both ratios give the order first point, third point, second point. The mixture therefore identifies the same optimal rule at each false-positive level, although its decomposition remains unidentified.</p>
<h3 data-note-section="3" id="15-0-from-population-to-sample">3. From population to sample</h3>
<p>Fix a measurable class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} containing a population minimizer {% raw %}<span class="math inline">\(f^*\)</span>{% endraw %} with {% raw %}<span class="math inline">\(R_0(f^*)=\alpha\)</span>{% endraw %}. Assume independent iid nominal and mixture samples of sizes {% raw %}<span class="math inline">\(m,n\)</span>{% endraw %}. The bounds below hold on a simultaneous uniform-deviation event; measurability of the suprema and an empirical minimizer, or a measurable approximate minimizer, is assumed.</p>
<p><span id="15-0-the-empirical-risk-bound-step-by-step"></span></p>
<p>Let {% raw %}<span class="math inline">\(\widehat R_0\)</span>{% endraw %} use {% raw %}<span class="math inline">\(m\)</span>{% endraw %} nominal observations and {% raw %}<span class="math inline">\(\widehat R_X\)</span>{% endraw %} use {% raw %}<span class="math inline">\(n\)</span>{% endraw %} mixture observations. On the event</p>
{% raw %}<div class="math display">\[
\sup_f|\widehat R_0(f)-R_0(f)|\leq\epsilon_m,
\qquad
\sup_f|\widehat R_X(f)-R_X(f)|\leq\epsilon_n,
\]</div>{% endraw %}
<p>choose {% raw %}<span class="math inline">\(\widehat f\)</span>{% endraw %} to minimize {% raw %}<span class="math inline">\(\widehat R_X\)</span>{% endraw %} subject to {% raw %}<span class="math inline">\(\widehat R_0\leq\alpha+\epsilon_m\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(R_0(f^*)=\alpha\)</span>{% endraw %}, the population comparator is empirically feasible. Therefore</p>
{% raw %}<div class="math display">\[
R_X(\widehat f)
\leq\widehat R_X(\widehat f)+\epsilon_n
\leq\widehat R_X(f^*)+\epsilon_n
\leq R_X(f^*)+2\epsilon_n.
\]</div>{% endraw %}
<p>The constraint also gives {% raw %}<span class="math inline">\(R_0(\widehat f)\leq\alpha+2\epsilon_m\)</span>{% endraw %}. Rearranging the population mixture identity,</p>
{% raw %}<div class="math display">\[
\pi(R_1(\widehat f)-R_1(f^*))
=R_X(\widehat f)-R_X(f^*)
 +(1-\pi)(R_0(\widehat f)-\alpha),
\]</div>{% endraw %}
<p>gives</p>
{% raw %}<div class="math display">\[
R_1(\widehat f)-R_1(f^*)
\leq\frac{2\epsilon_n+2(1-\pi)\epsilon_m}{\pi}.
\]</div>{% endraw %}
<p>The factor {% raw %}<span class="math inline">\(1/\pi\)</span>{% endraw %} records how a small mixture-risk difference can correspond to a larger novel-class difference when novelties are rare. An approximate empirical minimizer adds its optimization gap divided by {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}. If exact false-positive control is preferred, tightening the empirical constraint to {% raw %}<span class="math inline">\(\alpha-\epsilon_m\)</span>{% endraw %} ensures {% raw %}<span class="math inline">\(R_0(\widehat f)\leq\alpha\)</span>{% endraw %}, but the comparator must then be feasible at a lower population level. The difference between the two population optima requires a continuity or approximation argument; it cannot simply be omitted.</p>
<p>For a finite class of size {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, Hoeffding and a union bound give, for example,</p>
{% raw %}<div class="math display">\[
\epsilon_m=\sqrt{\frac{\log(4K/\delta)}{2m}},
\qquad
\epsilon_n=\sqrt{\frac{\log(4K/\delta)}{2n}},
\]</div>{% endraw %}
<p>with simultaneous probability at least {% raw %}<span class="math inline">\(1-\delta\)</span>{% endraw %}. A VC argument replaces the finite-class count by a complexity bound. Uniformity over the class is essential, since the data select the classifier as well as estimate its risk.</p>
<h3 data-note-section="4" id="15-0-what-fraction-of-the-mixture-is-identifiable">4. What fraction of the mixture is identifiable?</h3>
<p>Recovering the rejection ordering requires less information than recovering the novelty fraction. To see what can be identified about the fraction, define</p>
{% raw %}<div class="math display">\[
\kappa^*\triangleq\inf_{A:P_0(A)&gt;0}\frac{P_X(A)}{P_0(A)},
\qquad \pi^*\triangleq1-\kappa^*.
\]</div>{% endraw %}
<div id="novelty-mixture-identification" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. <strong>Identified mixing fractions.</strong> If {% raw %}<span class="math inline">\(P_X\ne P_0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(0&lt;\pi^*\leq1\)</span>{% endraw %}, and the set of mixing fractions in decompositions {% raw %}<span class="math inline">\(P_X=(1-\pi)P_0+\pi P_1\)</span>{% endraw %} with unrestricted probability law {% raw %}<span class="math inline">\(P_1\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\([\pi^*,1]\)</span>{% endraw %}. At each feasible {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}, the residual is uniquely</p>
{% raw %}<div class="math display">\[
P_{1,\pi}=\frac{P_X-(1-\pi)P_0}{\pi}.
\]</div>{% endraw %}
<p>The residual {% raw %}<span class="math inline">\(P_1^*=P_{1,\pi^*}\)</span>{% endraw %} is irreducible with respect to {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}: it contains no positive mixture component of {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}. Imposing irreducibility identifies {% raw %}<span class="math inline">\(\pi=\pi^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P_1=P_1^*\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P_X=P_0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\pi^*=0\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(\pi\in(0,1]\)</span>{% endraw %} is feasible with {% raw %}<span class="math inline">\(P_1=P_0\)</span>{% endraw %}. Allowing {% raw %}<span class="math inline">\(\pi=0\)</span>{% endraw %} adds that endpoint, at which the novel law is unrestricted.</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> A nominal weight {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is feasible only if {% raw %}<span class="math inline">\(P_X(A)\geq\kappa P_0(A)\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(\kappa\leq\kappa^*\)</span>{% endraw %}. The definition of the infimum also implies this measure inequality at {% raw %}<span class="math inline">\(\kappa=\kappa^*\)</span>{% endraw %}, including sets with {% raw %}<span class="math inline">\(P_0(A)=0\)</span>{% endraw %}. The difference is therefore a nonnegative measure of mass {% raw %}<span class="math inline">\(1-\kappa^*\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\kappa^*=1\)</span>{% endraw %}, the difference has zero total mass, giving {% raw %}<span class="math inline">\(P_X=P_0\)</span>{% endraw %}. Otherwise it can be normalized to obtain {% raw %}<span class="math inline">\(P_1^*\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(\pi\geq\pi^*\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
P_{1,\pi}=\frac{\pi^*}{\pi}P_1^*
+\left(1-\frac{\pi^*}{\pi}\right)P_0,
\]</div>{% endraw %}
<p>so every fraction in the interval is feasible. If {% raw %}<span class="math inline">\(P_1^*\)</span>{% endraw %} contained a nominal component of weight {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, removing it would yield a nominal weight {% raw %}<span class="math inline">\(\kappa^*+(1-\kappa^*)\eta&gt;\kappa^*\)</span>{% endraw %} in {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %}, a contradiction. Conversely, every {% raw %}<span class="math inline">\(\pi&gt;\pi^*\)</span>{% endraw %} in the displayed decomposition has a positive nominal component in its residual. The case {% raw %}<span class="math inline">\(P_X=P_0\)</span>{% endraw %} follows directly from the mixture identity.</p>
</div>
<p>An example shows why the restriction is needed. Suppose {% raw %}<span class="math inline">\(P_1=\eta P_0+(1-\eta)Q\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(0&lt;\eta&lt;1\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
P_X=(1-\pi(1-\eta))P_0+\pi(1-\eta)Q.
\]</div>{% endraw %}
<p>Both decompositions give the same observed mixture: one has fraction {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} and a novel class containing nominal mass; the other has fraction {% raw %}<span class="math inline">\(\pi(1-\eta)\)</span>{% endraw %} and novel distribution {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. Irreducibility excludes the hidden nominal component and makes the fraction identifiable.</p>
<h3 data-note-section="5" id="15-0-classifiers-give-honest-lower-bounds-on-novelty-mass">5. Classifiers give honest lower bounds on novelty mass</h3>
<p>For a deterministic acceptance set {% raw %}<span class="math inline">\(A=\{f=0\}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P_0(A)&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\frac{P_X(A)}{P_0(A)}
=\frac{R_X(f)}{1-R_0(f)}\geq\kappa^*.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(1-R_X(f)/(1-R_0(f))\leq\pi^*\leq\pi\)</span>{% endraw %}. Optimizing over all measurable acceptance sets recovers {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %}. For a randomized rule, integrate the nonnegative weight {% raw %}<span class="math inline">\(1-f\)</span>{% endraw %} against {% raw %}<span class="math inline">\(P_X\geq\kappa^*P_0\)</span>{% endraw %} to obtain the same inequality whenever {% raw %}<span class="math inline">\(1-R_0(f)&gt;0\)</span>{% endraw %}. A restricted class can give a smaller lower bound.</p>
<p>On the earlier uniform-deviation event, a feasible confidence lower bound is</p>
{% raw %}<div class="math display">\[
\underline\pi=\max\left(0,
1-\inf_{f:\,1-\widehat R_0(f)-\epsilon_m&gt;0}
\frac{\widehat R_X(f)+\epsilon_n}
 {1-\widehat R_0(f)-\epsilon_m}\right).
\]</div>{% endraw %}
<p>Use an upper bound for the numerator and a lower bound for the positive denominator. Each empirical ratio then bounds its population ratio from above, so the infimum is at least {% raw %}<span class="math inline">\(\kappa^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\underline\pi\leq\pi^*\)</span>{% endraw %} follows. If the eligible class is empty, the available lower bound is zero.</p>
<h3 data-note-section="6" id="15-0-why-no-unrestricted-estimation-rate-follows">6. Why no unrestricted estimation rate follows</h3>
<p>The identified lower endpoint {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %} is discontinuous in total variation. Let {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(Q_\varepsilon\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\([\varepsilon,1]\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %}. Their total variation distance is {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Yet {% raw %}<span class="math inline">\(\pi^*(P_0)=0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\pi^*(Q_\varepsilon)=1\)</span>{% endraw %}, because the interval {% raw %}<span class="math inline">\([0,\varepsilon)\)</span>{% endraw %} has positive nominal probability and zero mixture probability.</p>
<p>For any estimator based on {% raw %}<span class="math inline">\(m\)</span>{% endraw %} nominal and {% raw %}<span class="math inline">\(n\)</span>{% endraw %} mixture observations,</p>
{% raw %}<div class="math display">\[
\max_{P_X\in\{P_0,Q_\varepsilon\}}
P\{|\widehat\pi^*-\pi^*(P_X)|\geq1/2\}
\geq\frac{1-n\varepsilon}{2}.
\]</div>{% endraw %}
<p>The appendix proves this using a coupling of the two experiments. Taking {% raw %}<span class="math inline">\(\varepsilon=o(1/n)\)</span>{% endraw %} rules out uniform consistency over unrestricted mixture distributions, even though {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %} is identified from the population distributions. Pointwise consistency at a fixed law under the paper’s growing-class approximation conditions is compatible with this lower bound.</p>
<p>A uniformly valid upper confidence bound is similarly uninformative at the nominal law. If {% raw %}<span class="math inline">\(U_n\in[0,1]\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(P\{\pi^*(P_X)\leq U_n\}\geq1-\alpha\)</span>{% endraw %} for every mixture law, then</p>
{% raw %}<div class="math display">\[
P_{P_X=P_0}(U_n=1)\geq1-\alpha.
\]</div>{% endraw %}
<p>Useful upper bounds therefore need restrictions that prevent an arbitrarily small region from determining the infimum. The lower confidence bound derived above does not require such a restriction.</p>
<h3 data-note-section="7" id="15-0-a-finite-sample-form-of-the-nonidentification-obstruction">7. Appendix: indistinguishable mixture samples</h3>
<p>The common part of {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_\varepsilon\)</span>{% endraw %} has mass {% raw %}<span class="math inline">\(1-\varepsilon\)</span>{% endraw %}. Couple one draw to agree with that probability, and independently repeat this construction {% raw %}<span class="math inline">\(n\)</span>{% endraw %} times. The two mixture samples differ with probability at most {% raw %}<span class="math inline">\(n\varepsilon\)</span>{% endraw %}. The nominal samples have the same law and can be coupled identically. Thus, for every test {% raw %}<span class="math inline">\(\varphi\in[0,1]\)</span>{% endraw %} based on both samples,</p>
{% raw %}<div class="math display">\[
E_{P_X=P_0}\varphi+E_{P_X=Q_\varepsilon}(1-\varphi)
\geq1-n\varepsilon.
\]</div>{% endraw %}
<p>Take {% raw %}<span class="math inline">\(\varphi=1\{\widehat\pi^*&gt;1/2\}\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(P_X=P_0\)</span>{% endraw %}, rejection implies estimation error at least {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}; under {% raw %}<span class="math inline">\(P_X=Q_\varepsilon\)</span>{% endraw %}, failure to reject has the same implication. At least one error probability is therefore at least {% raw %}<span class="math inline">\((1-n\varepsilon)/2\)</span>{% endraw %}.</p>
<p>For the upper bound, coverage at {% raw %}<span class="math inline">\(Q_\varepsilon\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(P_{Q_\varepsilon}(U_n=1)\geq1-\alpha\)</span>{% endraw %}. Coupling transfers this inequality to</p>
{% raw %}<div class="math display">\[
P_{P_0}(U_n=1)\geq1-\alpha-n\varepsilon.
\]</div>{% endraw %}
<p>Letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} at the fixed sample size gives the claim. Both arguments remain valid if {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} is known exactly, since the nominal sample contributes no distinction between the experiments.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-blanchard_semi-supervised_2010" class="csl-entry" role="listitem">
Blanchard, Gilles, Gyemin Lee, and Clayton Scott. 2010. <span>“Semi-Supervised Novelty Detection.”</span> <em>J. Mach. Learn. Res.</em> 11 (December): 2973–3009.
</div>
</div>


</div>
