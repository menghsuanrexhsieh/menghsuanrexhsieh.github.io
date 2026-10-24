---
layout: "post"
title: "Novelty Detection: Mixture Identification and Statistical Guarantees"
date: "2024-08-28"
tags: ["statistics", "machine learning"]
excerpt: "Novelty detection starts with labeled examples of ordinary observations and an unlabeled sample containing both ordinary and novel observations."
note_series: "Novelty detection"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on ML Novelty Detection/stats.tex"
redirect_from: ["/2024/07/06/novelty-detection-and-statistical-guarantees/", "/2024/07/06/novelty-detection-as-positiveunlabeled-learning/", "/2024/07/29/statistical-guarantees/", "/2024/08/21/estimating-the-class-proportion-in-novelty-detection/", "/2024/08/21/mixture-proportions-identification-and-limits-to-estimation/", "/2024/08/21/novelty-detection-mixture-identification-and-statistical-guarantees/", "/2024/09/14/why-the-class-proportion-has-no-distribution-free-upper-bound/"]
---

<div class="note-content" markdown="0">

<p>Suppose we have labeled examples of an ordinary class and an unlabeled sample that also contains novel observations. The novel distribution is unknown, so its likelihood ratio cannot be estimated directly from labeled examples. <span class="citation" data-cites="blanchard_semi-supervised_2010"><a href="#ref-blanchard_semi-supervised_2010" role="doc-biblioref">Blanchard, Lee, and Scott (2010)</a></span> show that comparing the ordinary distribution with the mixture can nevertheless recover the same optimal rejection ordering.</p>

<h3 data-note-section="1" id="15-0-the-population-result">1. The population result</h3>
<p>Let {% raw %}<span class="math inline">\(P_X=(1-\pi)P_0+\pi P_1\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\pi&gt;0\)</span>{% endraw %}. A classifier {% raw %}<span class="math inline">\(f=1\)</span>{% endraw %} declares novelty. Write</p>

{% raw %}<div class="math display">\[
R_0(f)=P_0(f=1),\quad R_1(f)=P_1(f=0),\quad
R_X(f)=P_X(f=0).
\]</div>{% endraw %}
<p>Acceptance in the mixture is acceptance in either latent class, weighted by that class’s proportion. Hence</p>

{% raw %}<div class="math display">\[
R_X(f)=(1-\pi)(1-R_0(f))+\pi R_1(f).
\]</div>{% endraw %}
<div id="novelty-reduction" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose the minimum false-negative risk over {% raw %}<span class="math inline">\(R_0(f)\le\alpha\)</span>{% endraw %} is attained by a classifier {% raw %}<span class="math inline">\(f^*\)</span>{% endraw %} with {% raw %}<span class="math inline">\(R_0(f^*)=\alpha\)</span>{% endraw %}. Minimizing {% raw %}<span class="math inline">\(R_X\)</span>{% endraw %} under the same constraint attains the same optimum, with the constraint binding when {% raw %}<span class="math inline">\(0&lt;\pi&lt;1\)</span>{% endraw %}.</p>

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

<p>With novelty fraction {% raw %}<span class="math inline">\(\pi=0.2\)</span>{% endraw %}, the mixture probabilities are {% raw %}<span class="math inline">\((0.64,0.26,0.10)\)</span>{% endraw %} and its likelihood ratios are {% raw %}<span class="math inline">\((16/15,13/15,1)\)</span>{% endraw %}. The mixture likelihood ratios recover exactly the useful ordering without labeled novelties or knowledge of {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}. This is the statistical gain from the mixture reduction: estimating a relative ranking can solve the constrained classification problem even when decomposition of the mixture into its latent classes remains unidentified.</p>

<h3 data-note-section="3" id="15-0-from-population-to-sample">3. From population to sample</h3>
<p>Suppose uniform deviations of the empirical risks are bounded by {% raw %}<span class="math inline">\(\epsilon_m\)</span>{% endraw %} on the nominal sample and {% raw %}<span class="math inline">\(\epsilon_n\)</span>{% endraw %} on the mixture sample. Minimize empirical mixture acceptance subject to an empirical false-positive constraint with slack {% raw %}<span class="math inline">\(\epsilon_m\)</span>{% endraw %}. On the simultaneous deviation event, {% raw %}<span class="math inline">\(f^*\)</span>{% endraw %} is feasible and</p>

{% raw %}<div class="math display">\[
R_0(\widehat f)\le\alpha+2\epsilon_m,\qquad
R_X(\widehat f)-R_X(f^*)\le2\epsilon_n.
\]</div>{% endraw %}
<p>Solving the mixture-risk identity for novel-class risk transfers these two empirical-error bounds:</p>

{% raw %}<div class="math display">\[
R_1(\widehat f)-R_1(f^*)
\le\frac{2\epsilon_n+2(1-\pi)\epsilon_m}{\pi}.
\]</div>{% endraw %}
<p>For a finite-VC class, these errors have the usual square-root complexity rates. The <a href="{% post_url 2024-06-29-probability-bounds-behind-post-double-selection %}">post-double-selection probability bounds</a> give related examples of controlling empirical errors uniformly over a class. The factor {% raw %}<span class="math inline">\(1/\pi\)</span>{% endraw %} has a clear meaning: when novelties are rare, a small change in mixture risk can hide a much larger change in novel-class risk.</p>

<h3 data-note-section="4" id="15-0-the-empirical-risk-bound-step-by-step">4. The empirical risk bound, step by step</h3>
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
<p>proves the stated false-negative bound. An approximate empirical minimizer adds its optimization gap divided by {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}. If exact false-positive control is preferred, tightening the empirical constraint to {% raw %}<span class="math inline">\(\alpha-\epsilon_m\)</span>{% endraw %} ensures {% raw %}<span class="math inline">\(R_0(\widehat f)\leq\alpha\)</span>{% endraw %}, but the comparator must then be feasible at a lower population level. The difference between the two population optima requires a continuity or approximation argument; it cannot simply be omitted.</p>

<p>For a finite class of size {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, Hoeffding and a union bound give, for example,</p>

{% raw %}<div class="math display">\[
\epsilon_m=\sqrt{\frac{\log(4K/\delta)}{2m}},
\qquad
\epsilon_n=\sqrt{\frac{\log(4K/\delta)}{2n}},
\]</div>{% endraw %}
<p>These choices give simultaneous probability at least {% raw %}<span class="math inline">\(1-\delta\)</span>{% endraw %}. A VC argument replaces the finite-class count by a complexity bound. Uniformity over the class is essential, since the data select the classifier as well as estimate its risk.</p>

<h3 data-note-section="5" id="15-0-what-fraction-of-the-mixture-is-identifiable">5. What fraction of the mixture is identifiable?</h3>
<p>Recovering the rejection ordering requires less information than recovering the novelty fraction. To see what can be identified about the fraction, define</p>

{% raw %}<div class="math display">\[
\kappa^*\triangleq\inf_{A:P_0(A)&gt;0}\frac{P_X(A)}{P_0(A)},
\qquad \pi^*\triangleq1-\kappa^*.
\]</div>{% endraw %}
<div id="novelty-mixture-identification" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. The largest nominal component removable from {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %} has weight {% raw %}<span class="math inline">\(\kappa^*\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P_X\ne P_0\)</span>{% endraw %}, its residual distribution is uniquely given by</p>

{% raw %}<div class="math display">\[
P_1^*=\frac{P_X-\kappa^*P_0}{1-\kappa^*}.
\]</div>{% endraw %}
<p>It contains no further positive mixture component of {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}. The original {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %} if the original {% raw %}<span class="math inline">\(P_1\)</span>{% endraw %} satisfies this irreducibility condition.</p>

</div>
<p>A proposed decomposition with nominal weight {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} requires {% raw %}<span class="math inline">\(P_X(A)\geq\kappa P_0(A)\)</span>{% endraw %} for every measurable set. Thus {% raw %}<span class="math inline">\(\kappa\leq\kappa^*\)</span>{% endraw %}. Conversely, this inequality at {% raw %}<span class="math inline">\(\kappa^*\)</span>{% endraw %} makes the residual a nonnegative measure of mass {% raw %}<span class="math inline">\(1-\kappa^*\)</span>{% endraw %}, which can be normalized. If the normalized residual still contained nominal mass, removing it would contradict maximality.</p>

<p>An example shows why the restriction is needed. Suppose {% raw %}<span class="math inline">\(P_1=\eta P_0+(1-\eta)Q\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(0&lt;\eta&lt;1\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
P_X=(1-\pi(1-\eta))P_0+\pi(1-\eta)Q.
\]</div>{% endraw %}
<p>Both decompositions give the same observed mixture: one has fraction {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %} and a novel class containing nominal mass; the other has fraction {% raw %}<span class="math inline">\(\pi(1-\eta)\)</span>{% endraw %} and novel distribution {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. Irreducibility excludes the hidden nominal component and makes the fraction identifiable.</p>

<h3 data-note-section="6" id="15-0-classifiers-give-honest-lower-bounds-on-novelty-mass">6. Classifiers give honest lower bounds on novelty mass</h3>
<p>For an acceptance set {% raw %}<span class="math inline">\(A=\{f=0\}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P_0(A)&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{P_X(A)}{P_0(A)}
=\frac{R_X(f)}{1-R_0(f)}\geq\kappa^*.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(1-R_X(f)/(1-R_0(f))\leq\pi^*\leq\pi\)</span>{% endraw %}. Optimizing over all measurable acceptance sets recovers {% raw %}<span class="math inline">\(\pi^*\)</span>{% endraw %}; a restricted classifier class may give a weaker lower bound.</p>

<p>On the earlier uniform-deviation event, a feasible confidence lower bound is</p>

{% raw %}<div class="math display">\[
\underline\pi=\max\left(0,
1-\inf_{f:\,1-\widehat R_0(f)-\epsilon_m&gt;0}
\frac{\widehat R_X(f)+\epsilon_n}
 {1-\widehat R_0(f)-\epsilon_m}\right).
\]</div>{% endraw %}
<p>Use an upper bound for the numerator and a lower bound for the positive denominator. Each empirical ratio then bounds its population ratio from above, so the infimum is at least {% raw %}<span class="math inline">\(\kappa^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\underline\pi\leq\pi^*\)</span>{% endraw %} follows. If the eligible class is empty, the available lower bound is zero.</p>

<h3 data-note-section="7" id="15-0-why-no-unrestricted-estimation-rate-follows">7. Why no unrestricted estimation rate follows</h3>
<p>An essential infimum can be determined by a region having arbitrarily little probability. Changing the density ratio on that region can alter {% raw %}<span class="math inline">\(\kappa^*\)</span>{% endraw %} substantially, while a fixed finite sample is unlikely to visit it. For example, with {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, remove all mixture mass from an interval of length {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} and redistribute it uniformly over the complement. The resulting {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %} is within total variation {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} of {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}, yet {% raw %}<span class="math inline">\(\kappa^*=0\)</span>{% endraw %} because the removed interval has positive nominal mass and zero mixture mass. At {% raw %}<span class="math inline">\(P_X=P_0\)</span>{% endraw %}, by contrast, {% raw %}<span class="math inline">\(\kappa^*=1\)</span>{% endraw %}.</p>

<p>For any fixed sample size, the missing interval can be too small to distinguish these distributions reliably. Yet their identifiable novelty fractions differ drastically. This explains the obstruction to unrestricted uniform estimation and distribution-free upper bounds. Pointwise consistency under growing-class approximation conditions is compatible with that obstruction; useful upper bounds require restrictions on the regions that can determine the infimum.</p>

<h3 id="15-0-a-finite-sample-form-of-the-nonidentification-obstruction">A finite-sample form of the nonidentification obstruction</h3>
<p>Let {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(Q_\varepsilon\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\([\varepsilon,1]\)</span>{% endraw %}. Their total variation distance is {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, yet the identifiable novelty fraction is zero for mixture law {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %} and one for mixture law {% raw %}<span class="math inline">\(Q_\varepsilon\)</span>{% endraw %}. Couple one draw from the two laws to be equal with probability {% raw %}<span class="math inline">\(1-\varepsilon\)</span>{% endraw %}; independent copies give a coupling of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} observations that differs with probability at most {% raw %}<span class="math inline">\(n\varepsilon\)</span>{% endraw %}. The nominal labeled samples can be coupled identically, since their law is the same in the two experiments.</p>
<p>For any test {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} of the two mixture laws with values in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, this gives</p>
{% raw %}<div class="math display">\[\mathbb E_{P_0^n}\varphi+\mathbb E_{Q_\varepsilon^n}(1-\varphi)
\ge 1-n\varepsilon.\]</div>{% endraw %}
<p>If an estimator recovered the novelty fraction to error strictly less than {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} with uniformly high probability, thresholding it at {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} would give a test with both errors small. Choosing {% raw %}<span class="math inline">\(\varepsilon=o(1/n)\)</span>{% endraw %} contradicts the displayed inequality. This proves failure of unrestricted uniform consistency, while leaving pointwise consistency for a fixed distribution entirely possible. It also explains why a uniformly valid upper confidence bound must be nearly vacuous at the nominal law when such alternatives are allowed.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-blanchard_semi-supervised_2010" class="csl-entry" role="listitem">
Blanchard, Gilles, Gyemin Lee, and Clayton Scott. 2010. <span>“Semi-Supervised Novelty Detection.”</span> <em>J. Mach. Learn. Res.</em> 11 (December): 2973–3009.
</div>
</div>



</div>
