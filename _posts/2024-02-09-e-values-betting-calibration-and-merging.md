---
layout: "post"
title: "E-Values: Betting, Calibration, and Merging"
date: "2024-02-09"
tags: ["statistics", "testing"]
excerpt: "E-values connect hypothesis tests to betting payoffs; their calibration and combination rules determine which guarantees survive reuse."
note_series: "E-values"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on e-Values/stats.tex"
redirect_from: ["/2024/05/18/e-values-betting-calibration-and-merging/", "/2024/05/18/testing-hypotheses-by-betting/", "/2024/06/10/e-values-and-p-values/", "/2024/07/03/calibrating-e-values-and-p-values/", "/2024/07/27/merging-e-values-and-p-values/"]
---

<div class="note-content" markdown="0">

<p>Consider a nonnegative test payoff whose expected value is at most one under the null. An unusually large payoff can then occur only rarely under that null, by Markov’s inequality. Formally, an {% raw %}<span class="math inline">\(e\)</span>{% endraw %}-variable is a statistic {% raw %}<span class="math inline">\(E\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(\mathbb{E}_PE\le1\)</span>{% endraw %} for every null distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The analyses of <span class="citation" data-cites="shafer_betting_2021 vovk_wang_evalues_2021">(<a href="#ref-shafer_betting_2021" role="doc-biblioref">Shafer 2021</a>; <a href="#ref-vovk_wang_evalues_2021" role="doc-biblioref">Vovk and Wang 2021</a>)</span> develop this expectation constraint into rules for calibration, combination, and sequential testing.</p>

<h3 data-note-section="1" id="25-0-the-basic-guarantee">1. The basic guarantee</h3>
<div id="e-markov" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. For any {% raw %}<span class="math inline">\(e\)</span>{% endraw %}-variable and {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sup_{P\in H_0}\Pr_P(E\ge1/\alpha)\le\alpha.
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(\min(1,1/E)\)</span>{% endraw %} is a valid {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-variable, with value one when {% raw %}<span class="math inline">\(E=0\)</span>{% endraw %}.</p>

</div>
<p>This is Markov’s inequality. A likelihood ratio {% raw %}<span class="math inline">\(dQ/dP\)</span>{% endraw %} is an example for a simple null {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, provided {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is absolutely continuous with respect to {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The expectation bound is the essential property; an arbitrary large score need not have it.</p>

<p>To see the proof without any tail approximation, use the pointwise inequality {% raw %}<span class="math inline">\(E\ge\alpha^{-1}\mathbf1\{E\ge\alpha^{-1}\}\)</span>{% endraw %}. Taking null expectations gives the result. The bound can be sharp: let {% raw %}<span class="math inline">\(E=1/\alpha\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} and zero otherwise. Its expectation is one and its rejection probability is exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Validity therefore comes from the payoff constraint, not from a normal approximation or a large sample.</p>

<p>For a likelihood ratio {% raw %}<span class="math inline">\(L=dQ/dP\)</span>{% endraw %}, the same constraint follows from {% raw %}<span class="math inline">\(\mathbb{E}_PL=\int dQ=1\)</span>{% endraw %}. A large observed ratio is evidence because an outcome that earns a large payoff under this rule must be sufficiently rare under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="25-0-calibrating-a-p-value">2. Calibrating a {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-value</h3>
<p>For a nonnegative, nonincreasing measurable function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, the condition</p>

{% raw %}<div class="math display">\[
\int_0^1f(u)\,du\le1
\]</div>{% endraw %}
<p>is necessary and sufficient for {% raw %}<span class="math inline">\(f(Q)\)</span>{% endraw %} to be an {% raw %}<span class="math inline">\(e\)</span>{% endraw %}-variable whenever {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is a valid {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-variable. Necessity follows by taking {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} uniform. For sufficiency, a valid {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-variable is stochastically no smaller than a uniform variable; applying a decreasing function reverses the order and bounds its expectation by that integral.</p>

<p>For fixed {% raw %}<span class="math inline">\(0&lt;\kappa&lt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f_\kappa(p)=\kappa p^{\kappa-1}\)</span>{% endraw %} integrates to one. Choosing {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} after seeing {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is different. Maximizing gives</p>

{% raw %}<div class="math display">\[
\sup_{0&lt;\kappa&lt;1}f_\kappa(p)=
\begin{cases}
-1/(ep\log p),&amp;p\le e^{-1},\\
1,&amp;p&gt;e^{-1}.
\end{cases}
\]</div>{% endraw %}
<p>Its integral diverges near zero, so this envelope is not a valid calibrator. A fixed mixture is valid: Tonelli’s theorem preserves the expectation bound. Uniformly mixing {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\int_0^1\kappa p^{\kappa-1}\,d\kappa
=\frac{1-p+p\log p}{p(\log p)^2},\qquad 0&lt;p&lt;1.
\]</div>{% endraw %}
<p>The value at {% raw %}<span class="math inline">\(p=1\)</span>{% endraw %} is the continuous limit {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}.</p>

<h3 data-note-section="3" id="25-0-work-out-the-calibration-calculations">3. Work out the calibration calculations</h3>
<p>Put {% raw %}<span class="math inline">\(a=-\log p&gt;0\)</span>{% endraw %}. The log of the power calibrator is {% raw %}<span class="math inline">\(\log\kappa+(1-\kappa)a\)</span>{% endraw %}, whose derivative in {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is {% raw %}<span class="math inline">\(1/\kappa-a\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(a\ge1\)</span>{% endraw %}, its maximum is attained at {% raw %}<span class="math inline">\(\kappa=1/a\)</span>{% endraw %}; when {% raw %}<span class="math inline">\(a&lt;1\)</span>{% endraw %}, the supremum occurs as {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} approaches one. Substitution gives the displayed envelope. Near zero its integral contains</p>

{% raw %}<div class="math display">\[
\int_0^{e^{-1}}\frac{dp}{e p|\log p|}
=\frac1e\int_1^\infty\frac{da}{a}=\infty.
\]</div>{% endraw %}
<p>Maximizing after observing the p-value selects the most favorable payoff separately for each outcome. The divergent integral shows that the selected payoff no longer has the required null expectation bound.</p>

<p>A mixture fixes its weights before seeing the p-value. For the uniform mixture, integration by parts gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_0^1\kappa p^{\kappa-1}\,d\kappa
&amp;=p^{-1}\int_0^1\kappa e^{-a\kappa}\,d\kappa\\
&amp;=p^{-1}\left(-\frac{e^{-a}}a+\frac{1-e^{-a}}{a^2}\right)
=\frac{1-p-pa}{pa^2}.
\end{aligned}
\]</div>{% endraw %}
<p>Substitute {% raw %}<span class="math inline">\(-\log p\)</span>{% endraw %} for {% raw %}<span class="math inline">\(a\)</span>{% endraw %} to obtain the earlier formula. Tonelli’s theorem averages the component expectation bounds and proves validity. A pointwise maximum has no corresponding expectation bound.</p>

<p>The stochastic-order argument for a general calibrator can also be made pointwise. If {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is uniform and {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is super-uniform, its generalized quantile satisfies {% raw %}<span class="math inline">\(F_Q^{-1}(U)\ge U\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is nonincreasing,</p>

{% raw %}<div class="math display">\[
f(F_Q^{-1}(U))\le f(U),
\qquad
\mathbb{E}[f(Q)]\le\int_0^1f(u)\,du.
\]</div>{% endraw %}
<p>The quantile coupling covers discrete p-values as well as continuous ones, so atoms do not invalidate this sufficiency argument.</p>

<h3 data-note-section="4" id="25-0-combining-evidence">4. Combining evidence</h3>
<p>Linearity of expectation also permits fixed convex combinations of {% raw %}<span class="math inline">\(E_1,\ldots,E_K\)</span>{% endraw %} valid for the same null, without an independence assumption:</p>

{% raw %}<div class="math display">\[
\mathbb{E}_P\!\left[\sum_kw_kE_k\right]
\le\sum_kw_k=1.
\]</div>{% endraw %}
<p>The arithmetic mean has an additional optimality property among symmetric merging rules. If a valid symmetric rule {% raw %}<span class="math inline">\(F\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(F(e_1,\ldots,e_K)&gt;1\)</span>{% endraw %}, then its output cannot exceed {% raw %}<span class="math inline">\(K^{-1}\sum_ke_k\)</span>{% endraw %}. The threshold matters: constant one is also a valid merging rule and can exceed the mean when all inputs are small.</p>

<p>Here is the argument. Fix nonnegative finite inputs {% raw %}<span class="math inline">\(e_1,\ldots,e_K\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(m=K^{-1}\sum_ke_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c=\max(1,m)\)</span>{% endraw %}. Uniformly permute the inputs and, independently, retain the entire permuted vector with probability {% raw %}<span class="math inline">\(1/c\)</span>{% endraw %}, replacing it by zero otherwise. Every coordinate of the resulting vector has expectation {% raw %}<span class="math inline">\(m/c\le1\)</span>{% endraw %}, so these are legitimate, generally dependent e-variables.</p>

<p>If a symmetric rule gave {% raw %}<span class="math inline">\(F(e)&gt;c\)</span>{% endraw %}, symmetry would make its output the same on every retained permutation. Nonnegativity then implies</p>

{% raw %}<div class="math display">\[
\mathbb{E}[F(E_1,\ldots,E_K)]\ge\frac{F(e)}c&gt;1,
\]</div>{% endraw %}
<p>contradicting validity. Thus {% raw %}<span class="math inline">\(F(e)\le\max(1,m)\)</span>{% endraw %}. Whenever {% raw %}<span class="math inline">\(F(e)&gt;1\)</span>{% endraw %}, this forces {% raw %}<span class="math inline">\(F(e)\le m\)</span>{% endraw %}. Randomly relabeling the payoffs is what turns the symmetry of the rule into a constraint on every input vector.</p>

<p>Products require more. Independence is sufficient, and sequential conditional validity {% raw %}<span class="math inline">\(\mathbb{E}[E_t\mid\mathcal F_{t-1}]\le1\)</span>{% endraw %} makes {% raw %}<span class="math inline">\(\prod_{s\le t}E_s\)</span>{% endraw %} a nonnegative supermartingale. The tower property proves this one factor at a time. Ville’s inequality then controls the probability that this process ever crosses {% raw %}<span class="math inline">\(1/\alpha\)</span>{% endraw %}; the <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale maximal-inequality argument</a> explains why stopping at the first crossing preserves the bound.</p>

<p>Multiplication uses conditional validity or independence, whereas averaging uses only marginal expectation bounds. A collection of fixed-sample {% raw %}<span class="math inline">\(e\)</span>{% endraw %}-values therefore does not automatically justify repeated inspection and stopping.</p>

<h3 data-note-section="5" id="25-0-a-sequential-betting-example">5. A sequential betting example</h3>
<p>Suppose {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} is binary and the null requires {% raw %}<span class="math inline">\(\Pr(X_t=1\mid\mathcal F_{t-1})\le p_0\)</span>{% endraw %}. Choose a predictable {% raw %}<span class="math inline">\(q_t\in[p_0,1)\)</span>{% endraw %} and define the next payoff factor by</p>

{% raw %}<div class="math display">\[
L_t\triangleq
\left(\frac{q_t}{p_0}\right)^{X_t}
\left(\frac{1-q_t}{1-p_0}\right)^{1-X_t},
\qquad K_t\triangleq\prod_{s=1}^tL_s,
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(0&lt;p_0&lt;1\)</span>{% endraw %}. If the conditional success probability is {% raw %}<span class="math inline">\(p_t\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb{E}[L_t\mid\mathcal F_{t-1}]
=1+\frac{(p_t-p_0)(q_t-p_0)}{p_0(1-p_0)}\le1.
\]</div>{% endraw %}
<p>Multiplying by the already observed {% raw %}<span class="math inline">\(K_{t-1}\)</span>{% endraw %} proves the supermartingale property. To derive the crossing bound, stop at {% raw %}<span class="math inline">\(\tau=\inf\{t:K_t\ge1/\alpha\}\)</span>{% endraw %}. For each finite {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, bounded stopping and nonnegativity give</p>

{% raw %}<div class="math display">\[
1\ge\mathbb{E}[K_{\tau\wedge N}]
\ge\alpha^{-1}\Pr(\tau\le N).
\]</div>{% endraw %}
<p>The events increase to the event of ever crossing the threshold as {% raw %}<span class="math inline">\(N\)</span>{% endraw %} tends to infinity. Continuity of probability then gives the bound for any number of inspections.</p>

<p>The power interpretation of a payoff also follows from a short calculation. Suppose, for this illustration, that outcomes are i.i.d. Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(p&gt;p_0\)</span>{% endraw %}, and use a fixed betting probability {% raw %}<span class="math inline">\(q\in(p_0,1)\)</span>{% endraw %}. The expected log increment is</p>

{% raw %}<div class="math display">\[
\mathbb{E}_p\log L_t
=p\log\left(\frac q{p_0}\right)
+(1-p)\log\left(\frac{1-q}{1-p_0}\right)
=D(p\Vert p_0)-D(p\Vert q),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(D(p\Vert q)=p\log(p/q)+(1-p)\log((1-p)/(1-q))\)</span>{% endraw %}. The equality follows by adding and subtracting {% raw %}<span class="math inline">\(p\log p+(1-p)\log(1-p)\)</span>{% endraw %}. The derivative with respect to {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is {% raw %}<span class="math inline">\((p-q)/(q(1-q))\)</span>{% endraw %}, so the expected log growth is maximized at {% raw %}<span class="math inline">\(q=p\)</span>{% endraw %}.</p>

<p>By the law of large numbers, {% raw %}<span class="math inline">\(t^{-1}\log K_t\)</span>{% endraw %} converges to this growth rate. A well-chosen alternative therefore accumulates evidence exponentially under the alternative while retaining the null expectation bound. A badly chosen {% raw %}<span class="math inline">\(q\)</span>{% endraw %} can have negative log growth even though every factor is valid. Validity and power impose different requirements.</p>

<p>The alternative specifies which outcomes receive larger payoffs. A predictable choice of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} can learn from the past because it is fixed before the next outcome, preserving the conditional expectation argument. Selecting it after observing that outcome does not. Fixed mixtures allocate the initial stake across alternatives while retaining the bound.</p>

<p>Choosing {% raw %}<span class="math inline">\(q_t\)</span>{% endraw %} from the past is permitted; choosing it after seeing {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} would invalidate the conditional expectation calculation. For example, assigning probability one to whichever outcome just occurred can create a payoff larger than one every round without providing valid evidence.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-shafer_betting_2021" class="csl-entry" role="listitem">
Shafer, Glenn. 2021. <span>“Testing by Betting: A Strategy for Statistical and Scientific Communication.”</span> <em>Journal of the Royal Statistical Society: Series A</em> 184 (2): 407–31. <a href="https://doi.org/10.1111/rssa.12647">https://doi.org/10.1111/rssa.12647</a>.
</div>
<div id="ref-vovk_wang_evalues_2021" class="csl-entry" role="listitem">
Vovk, Vladimir, and Ruodu Wang. 2021. <span>“E-Values: Calibration, Combination, and Applications.”</span> <em>The Annals of Statistics</em> 49 (3): 1736–54. <a href="https://arxiv.org/abs/1912.06116">https://arxiv.org/abs/1912.06116</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p></p></nav>

</div>
