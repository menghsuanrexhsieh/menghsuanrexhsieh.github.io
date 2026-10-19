---
layout: "post"
title: "Size Control for Conditional Stochastic Dominance"
date: "2025-12-16"
tags: ["statistics", "randomization inference"]
excerpt: "A coupling with uniform observations supplies valid dominance critical values; ties and discrete ranks require separate calculations."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2026/03/07/size-control-in-the-dominance-limit-experiment/", "/2026/04/12/size-control-for-conditional-stochastic-dominance/", "/2026/04/12/technical-lemmas-for-local-stochastic-dominance/"]
---

<div class="note-content" markdown="0">

<p>Why should a critical value computed from uniforms control a test of conditional dominance? The nearest-observation argument of <span class="citation" data-cites="bugni_testing_2025">(<a href="#ref-bugni_testing_2025" role="doc-biblioref">Bugni, Canay, and Kim 2025</a>)</span> first gives a finite limit experiment. Within that experiment, a quantile coupling bounds every null statistic by the uniform statistic. The remaining task is to transfer that bound back to the observed sample when outcomes may tie.</p>

<h3 data-note-section="1" id="26-101-main-result-and-its-scope">1. Main result and its scope</h3>
<p>Use the independent samples and fixed retained sample sizes from the <a href="{% post_url 2025-12-15-conditional-stochastic-dominance-with-nearest-observations %}">nearest-observation construction</a>. At the target {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(F_Y(t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F_X(t)\)</span>{% endraw %} for the conditional cdfs. The statistic and critical value are</p>

{% raw %}<div class="math display">\[
T(S_n)\triangleq\sup_t(\widehat F_{n,Y}(t)-\widehat F_{n,X}(t)),
\qquad c_\alpha\triangleq\text{the }(1-\alpha)\text{ quantile of }T(U),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(U\)</span>{% endraw %} contains {% raw %}<span class="math inline">\(q_y+q_x\)</span>{% endraw %} independent uniforms, split into groups of sizes {% raw %}<span class="math inline">\(q_y,q_x\)</span>{% endraw %}.</p>

<div id="dominance-size" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Suppose each neighborhood of the target has positive covariate probability, both conditional cdfs vary continuously at the target in the uniform norm, and each target conditional cdf has only finitely many discontinuities. For every fixed distribution satisfying {% raw %}<span class="math inline">\(F_Y(t)\leq F_X(t)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}\mathbb P\{T(S_n)&gt;c_\alpha\}\leq\alpha.
\]</div>{% endraw %}
<p>In the limit experiment, the largest null rejection probability is attained when both groups have the same continuous cdf. Its value is</p>

{% raw %}<div class="math display">\[
\bar\alpha\triangleq\mathbb P\{T(U)&gt;c_\alpha\}\leq\alpha.
\]</div>{% endraw %}
</div>
<p>The asymptotic assertion is pointwise in the data-generating distribution. It does not, as stated, put a supremum over distributions inside the limit. Also, {% raw %}<span class="math inline">\(\bar\alpha\)</span>{% endraw %} need not equal {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}: fixed sample sizes give a discrete rank statistic, even with continuous outcomes.</p>

<h3 data-note-section="2" id="26-101-the-useful-calculation-couple-the-two-samples">2. The useful calculation: couple the two samples</h3>
<p>Let {% raw %}<span class="math inline">\(Q_Y,Q_X\)</span>{% endraw %} be generalized quantile functions and construct the limit observations as {% raw %}<span class="math inline">\(Y_j=Q_Y(U_j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_j=Q_X(U_{q_y+j})\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
A(u)\triangleq\frac1{q_y}\sum_{j=1}^{q_y}\mathbf1\{U_j\leq u\},
\qquad
B(u)\triangleq\frac1{q_x}\sum_{j=1}^{q_x}\mathbf1\{U_{q_y+j}\leq u\}.
\]</div>{% endraw %}
<p>The quantile identity gives, simultaneously in {% raw %}<span class="math inline">\(t\)</span>{% endraw %} up to null sets,</p>

{% raw %}<div class="math display">\[
\widehat F_Y(t)-\widehat F_X(t)
=A(F_Y(t))-B(F_X(t))
\leq A(F_X(t))-B(F_X(t)).
\]</div>{% endraw %}
<p>The inequality uses only the null and the monotonicity of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Taking suprema gives the pathwise bound</p>

{% raw %}<div class="math display">\[
T(S)\leq\sup_{0\leq u\leq1}(A(u)-B(u))=T(U).
\]</div>{% endraw %}
<p>This proves size control in the limit experiment. If {% raw %}<span class="math inline">\(F_Y=F_X=F\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous, its range contains {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, so both inequalities become equalities. A continuous common distribution is therefore least favorable. With atoms, the cdf can skip intervals of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, which can make the test conservative.</p>

<h3 data-note-section="3" id="26-101-why-ties-need-a-separate-argument">3. Why ties need a separate argument</h3>
<p>At tied vectors, a rank statistic can jump under an arbitrarily small perturbation. Thus {% raw %}<span class="math inline">\(S_n\Rightarrow S\)</span>{% endraw %} alone does not justify convergence of its rejection probability.</p>

<p>An almost-sure coupling deals with strict inequalities: if two limit coordinates are separated, their order eventually agrees. At an atom {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, one additionally needs the selected outcome to hit {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, rather than merely approach it. Uniform convergence of the marginal cdfs supplies this stronger conclusion.</p>

<p>To see the distinction, if {% raw %}<span class="math inline">\(V_n\to V\)</span>{% endraw %} in probability and {% raw %}<span class="math inline">\(\|F_{V_n}-F_V\|_\infty\to0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb P\{V=d,V_n\ne d\}
\leq\mathbb P\{|V_n-V|\geq\varepsilon\}
 +\mathbb P\{0&lt;|V_n-d|&lt;\varepsilon\}.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, the second probability is bounded by the corresponding punctured-neighborhood probability for {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, plus a term tending to zero. Send {% raw %}<span class="math inline">\(n\)</span>{% endraw %} to infinity and then {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} to zero. Summing over the finite set of atoms preserves all relevant ties with probability tending to one. Together with order preservation away from ties, this transfers the limit-experiment bound back to the original test.</p>

<h3 data-note-section="4" id="26-101-the-permutation-connection">4. The permutation connection</h3>
<p>Without ties, the rank patterns from label permutations have the same law as those from independent uniforms. This explains the shared critical value. Under strict dominance, the groups themselves need not be exchangeable; validity comes from the coupling inequality.</p>

<p>With ties, the equivalence can fail. If {% raw %}<span class="math inline">\(q_y=q_x=1\)</span>{% endraw %} and both observed outcomes are equal, every permutation has statistic zero. For two independent continuous uniforms, the statistic is zero or one, each with probability one half. At level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, the uniform critical value is one, while the tied-sample permutation critical value is zero. The dominance proof above remains valid; exchangeability is not a substitute for it.</p>

<h3 data-note-section="5" id="26-101-filling-in-the-atom-calculation">5. Filling in the atom calculation</h3>
<p>The distinction between approaching an atom and hitting it is easy to miss. Take {% raw %}<span class="math inline">\(V=d\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(V_n=d+1/n\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(V_n\to V\)</span>{% endraw %}, but {% raw %}<span class="math inline">\(V_n\)</span>{% endraw %} never equals {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Moreover,</p>

{% raw %}<div class="math display">\[
\|F_{V_n}-F_V\|_\infty=1.
\]</div>{% endraw %}
<p>This example converges in value but not uniformly in cdf. The uniform-cdf assumption rules out moving an entire atom a vanishing distance away.</p>

<p>Let {% raw %}<span class="math inline">\(\eta_n=\|F_{V_n}-F_V\|_\infty\)</span>{% endraw %}. The same bound holds for the left limits of the cdfs. For a fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(0&lt;|V_n-d|&lt;\varepsilon)
={}&amp;F_{V_n}(d-)-F_{V_n}(d-\varepsilon)\\
&amp;+F_{V_n}((d+\varepsilon)-)-F_{V_n}(d)\\
\leq{}&amp;\mathbb P(0&lt;|V-d|&lt;\varepsilon)+4\eta_n.
\end{aligned}
\]</div>{% endraw %}
<p>The punctured intervals shrink to the empty set as {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}, so their probability tends to zero even when {% raw %}<span class="math inline">\(d\)</span>{% endraw %} has positive mass. Combining this display with the coupling inequality above proves that the probability of losing a specified atomic value tends to zero.</p>

<p>There are only finitely many coordinates in the retained vector. For any pair whose limit values differ, convergence under the coupling eventually preserves its order. For a pair whose limit values agree, independence of the limit coordinates implies that equality can have positive probability only at a common atom. Indeed, for independent {% raw %}<span class="math inline">\(V,W\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(V=W)=\int\mathbb P(V=w)\,dF_W(w)
=\sum_d\mathbb P(V=d)\mathbb P(W=d).
\]</div>{% endraw %}
<p>A finite union bound over common atoms and coordinate pairs now preserves all ties with probability tending to one. Strict orders are preserved by the coupling as well. On that event, the grouped ranks and hence the statistic agree exactly. This proves convergence of rejection probabilities even when the critical value is an atom of the statistic’s law.</p>

<h3 data-note-section="6" id="26-101-a-complete-critical-value-calculation-with-four-observations">6. A complete critical-value calculation with four observations</h3>
<p>Suppose {% raw %}<span class="math inline">\(q_y=q_x=2\)</span>{% endraw %}. Under independent continuous uniforms, the six possible label sequences in increasing outcome order are equally likely. Reading a {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} raises the empirical-cdf difference by {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, and reading an {% raw %}<span class="math inline">\(X\)</span>{% endraw %} lowers it by {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. The statistic is the largest partial sum, including zero.</p>

<table>
<thead>
<tr>
<th>Increasing label order</th>
<th>Partial sums</th>
<th>{% raw %}<span class="math inline">\(T\)</span>{% endraw %}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{% raw %}<span class="math inline">\(YYXX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,1,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(YXYX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,0,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(YXXY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,0,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XYYX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,0,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XYXY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,0,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XXYY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,-1,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
</tbody>
</table>
<p>Counting the six paths gives</p>

{% raw %}<div class="math display">\[
\mathbb P(T=0)=\frac13,\quad
\mathbb P(T=1/2)=\frac12,\quad
\mathbb P(T=1)=\frac16.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\alpha=0.2\)</span>{% endraw %}, strict rejection above {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} has probability {% raw %}<span class="math inline">\(1/6\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, the critical value is {% raw %}<span class="math inline">\(1\)</span>{% endraw %} and strict rejection never occurs. Increasing the source sample cannot change this discreteness in the fixed retained sample.</p>

<p>One can obtain exact least-favorable size by randomizing at the boundary. If {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is a critical value, reject above {% raw %}<span class="math inline">\(c\)</span>{% endraw %} and, using an independent uniform random variable, reject at {% raw %}<span class="math inline">\(c\)</span>{% endraw %} with probability</p>

{% raw %}<div class="math display">\[
\gamma=\frac{\alpha-\mathbb P\{T(U)&gt;c\}}
 {\mathbb P\{T(U)=c\}}.
\]</div>{% endraw %}
<p>For the {% raw %}<span class="math inline">\(0.2\)</span>{% endraw %} example this is {% raw %}<span class="math inline">\((1/5-1/6)/(1/2)=1/15\)</span>{% endraw %}. The rejection probability as a function of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is nondecreasing. Applying the same extra uniform to the coupled statistics therefore preserves the dominance bound. This is an optional randomized version; the theorem above uses strict, nonrandomized rejection.</p>

<h4 data-note-section="6.1" id="26-101-count-the-reference-paths-for-arbitrary-retained-sizes">6.1. Count the reference paths for arbitrary retained sizes</h4>
<p>The four-observation calculation generalizes without simulating any outcome values. A continuous pooled sample has {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} labels {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} labels {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, with all {% raw %}<span class="math inline">\(\binom{q_y+q_x}{q_y}\)</span>{% endraw %} label orders equally likely. After reading {% raw %}<span class="math inline">\(i\)</span>{% endraw %} labels {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(j\)</span>{% endraw %} labels {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, the cdf difference is {% raw %}<span class="math inline">\(i/q_y-j/q_x\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(c\geq0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(N_c(i,j)\)</span>{% endraw %} count label paths reaching {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %} while keeping every partial difference at most {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Initialize {% raw %}<span class="math inline">\(N_c(0,0)=1\)</span>{% endraw %}, and assign zero to counts with negative indices. At every other grid point,</p>

{% raw %}<div class="math display">\[
N_c(i,j)=\mathbf1\left\{\frac{i}{q_y}-\frac{j}{q_x}\leq c\right\}
\left(N_c(i-1,j)+N_c(i,j-1)\right).
\]</div>{% endraw %}
<p>A path reaches the grid point by appending either {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} or {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. The indicator keeps it only if the new partial difference stays below the boundary. Dividing the count by the number of label orders gives</p>

{% raw %}<div class="math display">\[
\Pr(T(U)\leq c)
=\frac{N_c(q_y,q_x)}{\binom{q_y+q_x}{q_y}}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(q_y=q_x=2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c=1/2\)</span>{% endraw %}, this count is five, recovering the cdf value {% raw %}<span class="math inline">\(5/6\)</span>{% endraw %} from the table. At {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, only two paths survive. Integer counting avoids Monte Carlo error and keeps the test’s strict inequality visible when choosing a critical value.</p>

<p>The event {% raw %}<span class="math inline">\(T=1\)</span>{% endraw %} requires every {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} to appear before every {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, so its reference probability is exactly {% raw %}<span class="math inline">\(\binom{q_y+q_x}{q_y}^{-1}\)</span>{% endraw %}. If the nominal level is smaller than this probability, the critical value is one and strict rejection is impossible. This supplies a direct check when selecting fixed retained sample sizes. The source sample can grow indefinitely without changing this rank resolution.</p>

<p>The construction combines two arguments. Localization approximates conditional distributions at the specified covariate values; the coupling bounds the composite-null statistic by a finite rank experiment. Exchangeability of the two conditional outcome groups is unnecessary.</p>

<h3 data-note-section="7" id="26-101-why-size-and-power-must-be-discussed-separately">7. Why size and power must be discussed separately</h3>
<p>Imagine an alternative where every {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} outcome is smaller than every {% raw %}<span class="math inline">\(X\)</span>{% endraw %} outcome. Then {% raw %}<span class="math inline">\(T=1\)</span>{% endraw %} with probability one: the ordering is always {% raw %}<span class="math inline">\(YYXX\)</span>{% endraw %}. At level {% raw %}<span class="math inline">\(0.2\)</span>{% endraw %} the test rejects with probability one. At level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %} the same nonrandomized test has power zero because its critical value is also one. Even complete separation cannot overcome a rank resolution that makes rejection impossible.</p>

<p>For less extreme alternatives, limiting power may lie strictly between zero and one. The fixed-sample experiment continues to govern the limit as the source sample grows. Retained sample sizes therefore determine both the resolution of the test and its limiting power.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bugni_testing_2025" class="csl-entry" role="listitem">
Bugni, Federico A., Ivan A. Canay, and Deborah Kim. 2025. <span>“Testing Conditional Stochastic Dominance at Target Points.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2503.14747">https://doi.org/10.48550/arXiv.2503.14747</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-12-15-conditional-stochastic-dominance-with-nearest-observations %}">Conditional Stochastic Dominance with Nearest Observations</a> · Additional reading: <a href="{% post_url 2023-02-11-the-neymanpearson-lemma-and-unbiased-testing %}">The Neyman–Pearson Lemma and Unbiased Testing</a></p></nav>

</div>
