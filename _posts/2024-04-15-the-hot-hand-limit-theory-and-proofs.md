---
layout: "post"
title: "The Hot Hand: Limit Theory and Proofs"
date: "2024-04-15"
tags: ["probability theory", "dependence"]
excerpt: "Ratio expansions, martingale central limit theorems, and finite-sample bias for streak statistics."
note_series: "Dependent data"
note_source: "assets/notes/Overleaf Projects (32 items)/Dependent Data Time Series/stats.tex"
redirect_from: ["/2024/05/11/the-hot-hand-limit-theory-and-proofs/"]
---

<div class="note-content" markdown="0">

<p>The <a href="{% post_url 2024-04-14-the-hot-hand-statistics-for-streaks %}">streak tests</a> are ratios of dependent counts. To obtain their limiting laws, first replace each random denominator by its probability limit and identify the error from doing so. Following <span class="citation" data-cites="ritzwoller_uncertainty_2022"><a href="#ref-ritzwoller_uncertainty_2022" role="doc-biblioref">Ritzwoller and Romano (2022)</a></span>, this note uses the first-order terms for variance and the second-order terms for bias.</p>

<h3 data-note-section="1" id="05-71-the-first-order-expansion">1. The first-order expansion</h3>
<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. Bernoulli{% raw %}<span class="math inline">\((p)\)</span>{% endraw %}, with fixed {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %} and fixed integer {% raw %}<span class="math inline">\(k\geq1\)</span>{% endraw %}. All sums below run over {% raw %}<span class="math inline">\(t=k+1,\ldots,n\)</span>{% endraw %}, unless otherwise stated. Put {% raw %}<span class="math inline">\(m=n-k\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathcal F_t=\sigma(X_1,\ldots,X_t)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[A_t=\prod_{j=1}^kX_{t-j},\qquad B_t=\prod_{j=1}^k(1-X_{t-j}),\qquad
\widehat P_k=\frac{\sum_tA_tX_t}{\sum_tA_t},\quad
\widehat Q_k=\frac{\sum_tB_tX_t}{\sum_tB_t}.\]</div>{% endraw %}

<p>Set {% raw %}<span class="math inline">\(\widehat D_k=\widehat P_k-\widehat Q_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline X=n^{-1}\sum_{t=1}^nX_t\)</span>{% endraw %}. Assign any fixed bounded value to a ratio with zero denominator. Within each residue class modulo {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, the histories defining {% raw %}<span class="math inline">\(A_t\)</span>{% endraw %} are disjoint, so these indicators are independent and identically distributed. Applying the strong law in each of the finitely many classes gives {% raw %}<span class="math inline">\(m^{-1}\sum_tA_t\to p^k\)</span>{% endraw %} almost surely; the same argument gives {% raw %}<span class="math inline">\(m^{-1}\sum_tB_t\to(1-p)^k\)</span>{% endraw %}. In particular the probability of either empty count tends to zero. The ratio expansions proved below are</p>


{% raw %}<div class="math display">\[
\sqrt n(\widehat P_k-\overline X)
=\frac1{\sqrt n}\sum_t(X_t-p)(A_t/p^k-1)+o_P(1),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\sqrt n\widehat D_k
=\frac1{\sqrt n}\sum_t(X_t-p)
(A_t/p^k-B_t/(1-p)^k)+o_P(1).
\]</div>{% endraw %}
<p>Boundary observations contribute only {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="05-71-overlapping-streaks-do-not-require-guessing-covariances">2. Null limit laws</h3>
<p>For any bounded {% raw %}<span class="math inline">\(\mathcal F_{t-1}\)</span>{% endraw %}-measurable multiplier {% raw %}<span class="math inline">\(H_t\)</span>{% endraw %}, the variable {% raw %}<span class="math inline">\((X_t-p)H_t\)</span>{% endraw %} has conditional mean zero. Two such score terms at different times are therefore uncorrelated: condition their product on the history immediately before the later time. The conditional variance calculation in Section 6 gives the normal limits.</p>


<p>For the first statistic,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(A_t/p^k-1)^2]=p^{-k}-1.
\]</div>{% endraw %}
<p>For the second, {% raw %}<span class="math inline">\(A_tB_t=0\)</span>{% endraw %} and hence</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(A_t/p^k-B_t/(1-p)^k)^2]
=p^{-k}+(1-p)^{-k}.
\]</div>{% endraw %}
<p>Multiplying these second moments by {% raw %}<span class="math inline">\(p(1-p)\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[\sigma_P^2=p(1-p)(p^{-k}-1),\qquad
\sigma_D^2=p(1-p)\bigl(p^{-k}+(1-p)^{-k}\bigr).\]</div>{% endraw %}

<p>The proof in Section 6 yields {% raw %}<span class="math inline">\(\sqrt n(\widehat P_k-\overline X)\Rightarrow\mathcal N(0,\sigma_P^2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt n\widehat D_k\Rightarrow\mathcal N(0,\sigma_D^2)\)</span>{% endraw %}.</p>


<h3 data-note-section="3" id="05-71-where-finite-sample-bias-enters">3. Where finite-sample bias enters</h3>
<p>For a numerator average {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and denominator average {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, expand around {% raw %}<span class="math inline">\((u,v)\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\mathbb{E}[U/V]-u/v
\approx -\frac{\operatorname{Cov}(U,V)}{v^2}
+\frac{u\operatorname{Var}(V)}{v^3}.
\]</div>{% endraw %}
<p>Both terms are typically of order {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}. Replacing {% raw %}<span class="math inline">\(V\)</span>{% endraw %} by its expectation drops precisely the terms responsible for the selection bias. For the success-after-success ratio, the paper obtains the leading correction {% raw %}<span class="math inline">\(p(1-p^{-k})/n\)</span>{% endraw %}, which is negative. This expansion assumes fixed {% raw %}<span class="math inline">\(p,k\)</span>{% endraw %} and the specified treatment of empty streak counts; it is not a useful approximation when eligible streaks are extremely rare.</p>

<h3 data-note-section="4" id="05-71-beyond-the-i.i.d.-null">4. Beyond the i.i.d. null</h3>
<p>For a stationary dependent sequence, collect the needed run counts into a vector {% raw %}<span class="math inline">\(\Gamma_t\)</span>{% endraw %}. If a joint CLT holds with long-run covariance {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, a ratio statistic {% raw %}<span class="math inline">\(h(\overline\Gamma)\)</span>{% endraw %} has variance</p>

{% raw %}<div class="math display">\[
\nabla h(\mathbb{E}\Gamma_t)&#x27;\Omega\nabla h(\mathbb{E}\Gamma_t).
\]</div>{% endraw %}
<p>The gradient supplies the sensitivity to each count average. Contracting it with the long-run covariance gives the ratio’s variance. Finite-state irreducible, aperiodic Markov chains provide one setting in which the required count CLT holds.</p>

<p>Serial dependence alone does not identify a causal effect of success. For example, a persistent unobserved ability state may make both the previous and the next attempt more likely to succeed. A causal interpretation requires assumptions linking observed histories to potential outcomes under those histories.</p>

<h3 data-note-section="5" id="05-71-expanding-the-ratio-explicitly">5. Proof of the ratio expansion</h3>
<p>Put {% raw %}<span class="math inline">\(m=n-k\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\overline A=m^{-1}\sum_tA_t\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\overline{AX}=m^{-1}\sum_tA_tX_t\)</span>{% endraw %}. The identity</p>

{% raw %}<div class="math display">\[
\widehat P_k-p
=\frac{m^{-1}\sum_tA_t(X_t-p)}{\overline A}
\]</div>{% endraw %}
<p>is exact whenever the denominator is positive. The numerator has mean zero and is {% raw %}<span class="math inline">\(O_p(m^{-1/2})\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\overline A-p^k=O_p(m^{-1/2})\)</span>{% endraw %}, expand the reciprocal:</p>

{% raw %}<div class="math display">\[
\frac1{\overline A}=\frac1{p^k}
-\frac{\overline A-p^k}{p^{2k}}+O_p(m^{-1}).
\]</div>{% endraw %}
<p>Multiplying shows that replacing the denominator by {% raw %}<span class="math inline">\(p^k\)</span>{% endraw %} changes the ratio by {% raw %}<span class="math inline">\(O_p(m^{-1})\)</span>{% endraw %}. After subtracting the sample mean, the first influence term is therefore {% raw %}<span class="math inline">\((X_t-p)(A_t/p^k-1)\)</span>{% endraw %}. The same argument applied to the failure-run denominator gives the second expansion. For fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, replacing averages over {% raw %}<span class="math inline">\(m\)</span>{% endraw %} observations by averages over {% raw %}<span class="math inline">\(n\)</span>{% endraw %} contributes {% raw %}<span class="math inline">\(O_p(n^{-1})\)</span>{% endraw %} because the variables are bounded.</p>

<p>The omitted product has smaller stochastic order than the leading fluctuation, but its expectation can be nonzero. This is why a correct first-order normal approximation can coexist with finite-sample bias.</p>

<h3 data-note-section="6" id="05-71-checking-the-martingale-variance-carefully">6. Proof of joint normal convergence</h3>
<p>Write {% raw %}<span class="math inline">\(H_t=A_t/p^k-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W_t=(X_t-p)H_t\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(s&lt;t\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(W_s\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H_t\)</span>{% endraw %} are measurable with respect to {% raw %}<span class="math inline">\(\mathcal F_{t-1}\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[
\mathbb{E}[W_sW_t]
=\mathbb{E}\left[W_sH_t\,
 \mathbb{E}(X_t-p\mid\mathcal F_{t-1})\right]=0.
\]</div>{% endraw %}
<p>At the same time,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[W_t^2\mid\mathcal F_{t-1}]
=p(1-p)H_t^2.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(A_t^2=A_t\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}A_t=p^k\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}H_t^2
=p^{-2k}p^k-2p^{-k}p^k+1=p^{-k}-1.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(J_t=A_t/p^k-B_t/(1-p)^k\)</span>{% endraw %}, the cross-product is zero: a preceding block cannot consist entirely of successes and entirely of failures. This gives the second variance. Conditioning on the history immediately before the later outcome removes all nonzero-lag covariances despite overlap between the histories.</p>

<p>For fixed {% raw %}<span class="math inline">\(p,k\)</span>{% endraw %}, both {% raw %}<span class="math inline">\(H_t\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J_t\)</span>{% endraw %} are deterministically bounded. The normalised increments {% raw %}<span class="math inline">\(W_t/\sqrt m\)</span>{% endraw %} therefore satisfy conditional Lindeberg: for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, all tail indicators vanish once {% raw %}<span class="math inline">\(m\)</span>{% endraw %} is sufficiently large. Since {% raw %}<span class="math inline">\(H_t^2\)</span>{% endraw %} depends on a block of {% raw %}<span class="math inline">\(k\)</span>{% endraw %} preceding observations, splitting the times into residue classes modulo {% raw %}<span class="math inline">\(k\)</span>{% endraw %} and applying the strong law gives</p>

{% raw %}<div class="math display">\[\frac1m\sum_t\mathbb E[W_t^2\mid\mathcal F_{t-1}]
=p(1-p)\frac1m\sum_tH_t^2\longrightarrow\sigma_P^2
\quad\text{almost surely}.\]</div>{% endraw %}

<p>The same argument with {% raw %}<span class="math inline">\(J_t^2\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\sigma_D^2\)</span>{% endraw %}. The <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}#conditional-martingale-clt">conditional martingale central limit theorem</a> proves the two limits for the score sums. The ratio expansions in Section 5 and {% raw %}<span class="math inline">\(m/n\to1\)</span>{% endraw %} give the asserted limits for the statistics.</p>

<p>There is also a joint limit. For fixed {% raw %}<span class="math inline">\(a,b\in\mathbb R\)</span>{% endraw %}, apply the same argument to {% raw %}<span class="math inline">\((X_t-p)(aH_t+bJ_t)/\sqrt m\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(A_tB_t=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb EH_tJ_t=p^{-k}\)</span>{% endraw %}. Thus the limiting covariance matrix is</p>

{% raw %}<div class="math display">\[p(1-p)\begin{pmatrix}p^{-k}-1&amp;p^{-k}\\p^{-k}&amp;p^{-k}+(1-p)^{-k}\end{pmatrix}.\]</div>{% endraw %}

<p>The degenerate case of the same theorem covers any linear combination with zero limiting variance; Cramér–Wold then proves joint normal convergence. These arguments keep {% raw %}<span class="math inline">\(k\)</span>{% endraw %} fixed. If {% raw %}<span class="math inline">\(k\)</span>{% endraw %} increases, the bounds on the multipliers and the probabilities of eligible histories must be controlled separately.</p>


<h3 data-note-section="7" id="05-71-the-second-order-calculation-and-its-limitation">7. The second-order calculation and its limitation</h3>
<p>For {% raw %}<span class="math inline">\(h(u,v)=u/v\)</span>{% endraw %}, the nonzero second derivatives are</p>

{% raw %}<div class="math display">\[
h_{uv}=-v^{-2},\qquad h_{vv}=2u v^{-3}.
\]</div>{% endraw %}
<p>The quadratic Taylor term is half the Hessian contracted with the covariance matrix of {% raw %}<span class="math inline">\((U,V)\)</span>{% endraw %}. This yields</p>

{% raw %}<div class="math display">\[
\frac12(2h_{uv}\operatorname{Cov}(U,V)
+h_{vv}\operatorname{Var}(V))
=-\frac{\operatorname{Cov}(U,V)}{v^2}
 +\frac{u\operatorname{Var}(V)}{v^3}.
\]</div>{% endraw %}
<p>The coefficient of the bias can also be calculated. Write {% raw %}<span class="math inline">\(Z_t=A_t(X_t-p)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q=p^k\)</span>{% endraw %}, and average over the {% raw %}<span class="math inline">\(m=n-k\)</span>{% endraw %} eligible time indices. The exact ratio identity gives</p>

{% raw %}<div class="math display">\[
\widehat P_k-p=\frac{\overline Z}{q}
-\frac{\overline Z(\overline A-q)}{q^2}
+\frac{\overline Z(\overline A-q)^2}{q^2\overline A}.
\]</div>{% endraw %}
<p>The first term has expectation zero. To evaluate the second, consider {% raw %}<span class="math inline">\(\mathbb{E}[Z_tA_{t+r}]\)</span>{% endraw %}. It vanishes for {% raw %}<span class="math inline">\(r\leq0\)</span>{% endraw %} by conditioning on the past. It also vanishes for {% raw %}<span class="math inline">\(r&gt;k\)</span>{% endraw %}, when the two blocks are independent. For {% raw %}<span class="math inline">\(1\leq r\leq k\)</span>{% endraw %}, the two streak blocks together contain {% raw %}<span class="math inline">\(k+r\)</span>{% endraw %} distinct tosses, including {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %}. All must be successes in the product, so</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Z_tA_{t+r}]=p^{k+r}(1-p).
\]</div>{% endraw %}
<p>There are {% raw %}<span class="math inline">\(m-r\)</span>{% endraw %} pairs at this lag. Consequently, for {% raw %}<span class="math inline">\(m&gt;k\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\overline Z(\overline A-q)]
=\frac{1-p}{m^2}\sum_{r=1}^k(m-r)p^{k+r}.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(k,p\)</span>{% endraw %}, the leading bias is therefore</p>

{% raw %}<div class="math display">\[
-\frac{1-p}{mp^{2k}}\sum_{r=1}^kp^{k+r}
=-\frac{p(1-p^k)}{mp^k}
=\frac{p(1-p^{-k})}{m}.
\]</div>{% endraw %}
<p>A success raises today’s numerator and can create eligible transitions later. The resulting positive covariance with the denominator enters the ratio expansion with a minus sign. To turn this calculation into an expectation expansion, the final remainder still needs control.</p>

<p>Turning this formal expansion into an expectation expansion requires control of the remainder on events where {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is small. The fact that {% raw %}<span class="math inline">\(V\to v&gt;0\)</span>{% endraw %} in probability alone is insufficient for arbitrary unbounded ratios. Here fixed {% raw %}<span class="math inline">\(p,k\)</span>{% endraw %}, bounded ratios with an explicit empty-count convention, and concentration of finite-memory run counts supply the needed control. When {% raw %}<span class="math inline">\(np^k\)</span>{% endraw %} is small, the event of no success run is not negligible and this asymptotic calculation is a poor guide.</p>

<p>Permutation inference recomputes the finite-sample ratio, including small denominators and empty counts. It therefore accounts for behavior that a leading normal approximation or bias correction may approximate poorly.</p>

<h3 data-note-section="8" id="05-71-what-changes-under-serial-dependence">8. What changes under serial dependence</h3>
<p>For example, take</p>

{% raw %}<div class="math display">\[
\Gamma_t=(A_tX_t,A_t,B_tX_t,B_t)&#x27;,
\qquad h(u,v,w,z)=u/v-w/z.
\]</div>{% endraw %}
<p>At the population mean, the gradient is</p>

{% raw %}<div class="math display">\[
\nabla h=(1/v,-u/v^2,-1/z,w/z^2)&#x27;.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\sqrt n(\overline\Gamma-\mathbb{E}\Gamma_t)\Rightarrow \mathcal{N}(0,\Omega)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v,z&gt;0\)</span>{% endraw %}, the delta method gives {% raw %}<span class="math inline">\(\nabla h&#x27;\Omega\nabla h\)</span>{% endraw %}. Here</p>

{% raw %}<div class="math display">\[
\Omega=\sum_{r=-\infty}^{\infty}
\operatorname{Cov}(\Gamma_0,\Gamma_r)
\]</div>{% endraw %}
<p>when the covariance series is well defined. Under dependence, {% raw %}<span class="math inline">\(\mathbb{E}[X_t-p\mid\mathcal F_{t-1}]\)</span>{% endraw %} generally is not zero, so the earlier martingale simplification no longer applies. For a finite-state Markov model one can augment the state with the last {% raw %}<span class="math inline">\(k\)</span>{% endraw %} outcomes and compute the run-count moments from its transition matrix. This is the appropriate place for a long-run covariance calculation.</p>

<p>Consider a persistent latent state that raises success probabilities. Observing success gives information about that state and predicts another success, even if changing the previous outcome itself would have no causal effect. An independence test detects this dependence; it does not distinguish that explanation from a causal effect of success.</p>

<h3 id="05-71-completing-the-expectation-remainder">Completing the expectation remainder</h3>
<p>Here is a direct justification of the bias coefficient, with any fixed bounded value assigned when {% raw %}<span class="math inline">\(\overline A=0\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(E_m=\{|\overline A-q|\le q/2\}\)</span>{% endraw %}. Split the run indicators into their {% raw %}<span class="math inline">\(k\)</span>{% endraw %} residue classes: indicators in one class depend on disjoint blocks of tosses and are independent. A union bound and the bounded-variable exponential inequality give {% raw %}<span class="math inline">\(\mathbb P(E_m^c)\le C e^{-cm}\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(p,k\)</span>{% endraw %}, with constants depending on them. The same splitting, or expansion of a fourth moment, gives</p>
{% raw %}<div class="math display">\[\mathbb E(\overline A-q)^4=O(m^{-2}),\qquad \mathbb E\overline Z^2=O(m^{-1}).\]</div>{% endraw %}
<p>For the fourth-moment bound, expand the fourth power of a sum of centered bounded independent variables within a residue class. Only terms in which each index occurs at least twice survive, giving {% raw %}<span class="math inline">\(O(m^2)\)</span>{% endraw %} terms before division by {% raw %}<span class="math inline">\(m^4\)</span>{% endraw %}. Combining the finitely many classes preserves the order. The second-moment bound follows from the martingale covariances already computed.</p>
<p>On {% raw %}<span class="math inline">\(E_m\)</span>{% endraw %}, the absolute expectation of the exact remainder is at most</p>
{% raw %}<div class="math display">\[\frac{2}{q^3}\mathbb E\{|\overline Z|(\overline A-q)^2\}
\le \frac{2}{q^3}(\mathbb E\overline Z^2)^{1/2}
(\mathbb E(\overline A-q)^4)^{1/2}=O(m^{-3/2}).\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(E_m^c\)</span>{% endraw %}, work with the original bounded ratio minus its first two Taylor terms. All three terms are uniformly bounded for fixed {% raw %}<span class="math inline">\(q&gt;0\)</span>{% endraw %}, so their expectation over that event is {% raw %}<span class="math inline">\(O(e^{-cm})\)</span>{% endraw %}. This also covers the zero-denominator convention. Therefore</p>
{% raw %}<div class="math display">\[\mathbb E\widehat P_k-p=\frac{p(1-p^{-k})}{m}+o(m^{-1})
=\frac{p(1-p^{-k})}{n}+o(n^{-1}).\]</div>{% endraw %}
<p>This argument proves the leading term; it does not claim the stronger {% raw %}<span class="math inline">\(O(n^{-2})\)</span>{% endraw %} remainder suggested by a formal Taylor expansion. The negative covariance sign in the mixed Hessian term is essential.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-ritzwoller_uncertainty_2022" class="csl-entry" role="listitem">
Ritzwoller, David M, and Joseph P Romano. 2022. <span>“Uncertainty in the Hot Hand Fallacy: Detecting Streaky Alternatives to Random Bernoulli Sequences.”</span> <em>The Review of Economic Studies</em> 89 (2): 976–1007. <a href="https://doi.org/10.1093/restud/rdab020">https://doi.org/10.1093/restud/rdab020</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-04-14-the-hot-hand-statistics-for-streaks %}">The Hot Hand: Statistics for Streaks</a></p></nav>

</div>
