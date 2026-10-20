---
layout: "post"
title: "The Hot Hand: Limit Theory and Proofs"
date: "2024-04-15"
tags: ["probability theory", "dependence"]
excerpt: "The streak tests become easier to understand after expanding their ratios."
note_series: "Dependent data"
note_source: "assets/notes/Overleaf Projects (32 items)/Dependent Data Time Series/stats.tex"
redirect_from: ["/2024/05/11/the-hot-hand-limit-theory-and-proofs/"]
---

<div class="note-content" markdown="0">

<p>The <a href="{% post_url 2024-04-14-the-hot-hand-statistics-for-streaks %}">streak tests</a> are ratios of dependent counts. To obtain their limiting laws, first replace each random denominator by its probability limit and identify the error from doing so. Following <span class="citation" data-cites="ritzwoller_uncertainty_2022"><a href="#ref-ritzwoller_uncertainty_2022" role="doc-biblioref">Ritzwoller and Romano (2022)</a></span>, this note uses the first-order terms for variance and the second-order terms for bias.</p>

<h3 data-note-section="1" id="05-71-the-first-order-expansion">1. The first-order expansion</h3>
<p>Use {% raw %}<span class="math inline">\(A_t=\prod_{j=1}^kX_{t-j}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_t=\prod_{j=1}^k(1-X_{t-j})\)</span>{% endraw %}. Under i.i.d. Bernoulli sampling with {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %}, the eligible-count averages converge to {% raw %}<span class="math inline">\(p^k\)</span>{% endraw %} and {% raw %}<span class="math inline">\((1-p)^k\)</span>{% endraw %}. Consequently</p>

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

<h3 data-note-section="2" id="05-71-overlapping-streaks-do-not-require-guessing-covariances">2. Overlapping streaks do not require guessing covariances</h3>
<p>Overlapping histories do not produce covariance between these score terms under the null. The multiplier is determined by the past, whereas {% raw %}<span class="math inline">\(\mathbb{E}[X_t-p\mid\mathcal F_{t-1}]=0\)</span>{% endraw %}; conditioning on that past makes each summand a martingale difference.</p>

<p>For the first statistic,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(A_t/p^k-1)^2]=p^{-k}-1.
\]</div>{% endraw %}
<p>For the second, {% raw %}<span class="math inline">\(A_tB_t=0\)</span>{% endraw %} and hence</p>

{% raw %}<div class="math display">\[
\mathbb{E}[(A_t/p^k-B_t/(1-p)^k)^2]
=p^{-k}+(1-p)^{-k}.
\]</div>{% endraw %}
<p>Multiplying by {% raw %}<span class="math inline">\(p(1-p)\)</span>{% endraw %} gives the two null variances. A bounded, finite-memory CLT completes the argument.</p>

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

<h3 data-note-section="5" id="05-71-expanding-the-ratio-explicitly">5. Expanding the ratio explicitly</h3>
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

<h3 data-note-section="6" id="05-71-checking-the-martingale-variance-carefully">6. The martingale variance calculation</h3>
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

<p>For fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, bounded summands satisfy Lindeberg’s condition, and a finite-memory law of large numbers gives convergence of the conditional variance average. These establish the martingale CLT. If {% raw %}<span class="math inline">\(k\)</span>{% endraw %} grows, boundedness is no longer uniform: {% raw %}<span class="math inline">\(p^{-k}\)</span>{% endraw %} grows and eligible runs may become rare.</p>

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
