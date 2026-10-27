---
layout: "post"
title: "The Hot Hand"
date: "2024-04-14"
tags: ["probability theory", "dependence"]
excerpt: "Measuring whether success becomes more likely after a streak."
note_series: "Dependent data"
note_source: "assets/notes/Overleaf Projects (32 items)/Dependent Data Time Series/stats.tex"
redirect_from: ["/2024/03/30/the-hot-hand-statistics-for-streaks/", "/2024/04/14/the-hot-hand-statistics-for-streaks/"]
---

<div class="note-content" markdown="0">

<p>After several successes, is the next attempt more likely to succeed? A natural statistic divides the number of successful continuations by the number of eligible streaks. Both counts depend on the same sequence, and their ratio need not be unbiased even for independent coin tosses. These notes follow <span class="citation" data-cites="ritzwoller_uncertainty_2022"><a href="#ref-ritzwoller_uncertainty_2022" role="doc-biblioref">Ritzwoller and Romano (2022)</a></span> for inference and <span class="citation" data-cites="miller_surprised_2018"><a href="#ref-miller_surprised_2018" role="doc-biblioref">Miller and Sanjurjo (2018)</a></span> for the finite-sample selection problem.</p>

<h3 data-note-section="1" id="05-36-define-the-comparison">1. Define the comparison</h3>
<p>For a binary sequence {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} and fixed streak length {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, let</p>

{% raw %}<div class="math display">\[
A_t=\prod_{j=1}^kX_{t-j},\qquad B_t=\prod_{j=1}^k(1-X_{t-j}).
\]</div>{% endraw %}
<p>Over {% raw %}<span class="math inline">\(t=k+1,\ldots,n\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\widehat P_k=\sum_tA_tX_t/\sum_tA_t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widehat Q_k=\sum_tB_tX_t/\sum_tB_t\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat D_k=\widehat P_k-\widehat Q_k\)</span>{% endraw %}. A second statistic is {% raw %}<span class="math inline">\(\widehat P_k-\overline X\)</span>{% endraw %}. A convention is needed when an eligible-count denominator is zero, including in permutations.</p>

<div id="streak-null" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. For i.i.d. Bernoulli observations with fixed {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %} and fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat P_k-\overline X)\Rightarrow
\mathcal{N}\bigl(0,p^{1-k}(1-p)(1-p^k)\bigr),
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
\sqrt n\widehat D_k\Rightarrow
\mathcal{N}\bigl(0,p(1-p)(p^{-k}+(1-p)^{-k})\bigr).
\]</div>{% endraw %}
<p>The corresponding permutation distributions converge to these null limits. Permuting the sequence also gives a finite-sample valid test of the i.i.d. Bernoulli null, with randomization at ties if exact size is desired.</p>

</div>
<p>The normal limits describe first-order fluctuations, not finite-sample expectations. A random eligibility count can bias the ratio. The <a href="{% post_url 2024-04-15-the-hot-hand %}">companion derivation</a> calculates the leading fluctuation and then the smaller-order term responsible for that bias.</p>

<h3 data-note-section="2" id="05-36-why-permutation-removes-the-unknown-success-rate">2. Why permutation removes the unknown success rate</h3>
<p>Conditional on {% raw %}<span class="math inline">\(\sum_tX_t=a\)</span>{% endraw %}, every binary sequence with {% raw %}<span class="math inline">\(a\)</span>{% endraw %} successes has the same probability under the null. Its conditional distribution is therefore uniform over permutations, independently of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Ranking the observed statistic within that distribution controls conditional size, hence unconditional size.</p>

<p>There is also a converse for tests with rejection probability exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(p\)</span>{% endraw %}: completeness of the binomial family forces their average rejection probability conditional on the count to equal {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. The unconditional requirement leaves no room to favor one success count over another.</p>

<h3 data-note-section="3" id="05-36-a-local-power-calculation">3. A local-power calculation</h3>
<p>Consider a stationary two-state Markov chain with probability {% raw %}<span class="math inline">\(1/2+\epsilon\)</span>{% endraw %} of repeating its previous outcome. Its marginal success probability is {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, while the population versions of {% raw %}<span class="math inline">\(\widehat P_1-\overline X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat D_1\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(2\epsilon\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(\epsilon=h/\sqrt n\)</span>{% endraw %}, the two statistics have limits {% raw %}<span class="math inline">\(\mathcal{N}(h,1/4)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal{N}(2h,1)\)</span>{% endraw %} after multiplication by {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %}. Thus both one-sided permutation tests have local power</p>

{% raw %}<div class="math display">\[
1-\Phi(z_{1-\alpha}-2h).
\]</div>{% endraw %}
<p>When independent individuals have different success rates, permutations must stay within individuals. Under the paper’s pooled local-alternative assumptions, the fraction exhibiting dependence contributes to the noncentrality. Rejection concerns independence of the observations; a causal effect of past success requires further assumptions about state dependence.</p>

<h3 data-note-section="4" id="05-36-a-small-example-of-the-selection-problem">4. A small example of the selection problem</h3>
<p>Consider three fair coin tosses and {% raw %}<span class="math inline">\(k=1\)</span>{% endraw %}. Conditional on having at least one eligible transition, the possible sequences and success-after-success ratios are</p>

<table>
<thead>
<tr>
<th>Sequence</th>
<th style="text-align: right;">Number of eligible transitions</th>
<th style="text-align: right;">{% raw %}<span class="math inline">\(\widehat P_1\)</span>{% endraw %}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{% raw %}<span class="math inline">\(010\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(011\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(100\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(101\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(110\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(2\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(111\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(2\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
</tr>
</tbody>
</table>
<p>Conditioning gives each of these six sequences the same probability. Averaging their ratios yields</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\widehat P_1\mid\text{at least one eligible transition}]
=\frac{0+1+0+0+1/2+1}{6}=\frac5{12}&lt;\frac12.
\]</div>{% endraw %}
<p>The next toss is fair at every fixed time. The ratio nevertheless gives the same total weight to sequences with one eligible transition and those with two. Pooling transitions across many sequences would weight them differently and recover {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. The change of weighting explains the bias.</p>

<p>A permutation test reproduces the ratio and the convention for empty counts on every rearranged sequence. Its validity does not require an unbiased statistic: the reference distribution includes the finite-sample bias.</p>

<h3 data-note-section="5" id="05-36-the-exact-conditional-test-including-ties">5. The exact conditional test, including ties</h3>
<p>Let {% raw %}<span class="math inline">\(\mathcal S_a\)</span>{% endraw %} be the set of distinct binary sequences with {% raw %}<span class="math inline">\(a\)</span>{% endraw %} successes, and let {% raw %}<span class="math inline">\(S(x)\)</span>{% endraw %} denote the statistic with a specified empty-count convention. Under the null,</p>

{% raw %}<div class="math display">\[
\mathbb P(X=x\mid\textstyle\sum_tX_t=a)
=\frac{p^a(1-p)^{n-a}}{\binom na p^a(1-p)^{n-a}}
=\binom na^{-1}.
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(c_a\)</span>{% endraw %} so that the conditional upper tail satisfies</p>

{% raw %}<div class="math display">\[
\mathbb P(S&gt;c_a\mid a)\leq\alpha
\leq\mathbb P(S\geq c_a\mid a).
\]</div>{% endraw %}
<p>Reject above {% raw %}<span class="math inline">\(c_a\)</span>{% endraw %} and reject at equality with probability</p>

{% raw %}<div class="math display">\[
\gamma_a=\frac{\alpha-\mathbb P(S&gt;c_a\mid a)}
 {\mathbb P(S=c_a\mid a)}.
\]</div>{% endraw %}
<p>The conditional rejection probability is exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} whenever the boundary mass is positive. Taking its expectation over the binomial count proves unconditional exactness for every {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Omitting boundary randomization gives a conservative test. This argument also covers counts {% raw %}<span class="math inline">\(a=0,n\)</span>{% endraw %}, provided the statistic is defined there; no asymptotic approximation is involved.</p>

<p>Here the binomial completeness argument reduces to a polynomial identity. If {% raw %}<span class="math inline">\(r_a\)</span>{% endraw %} denotes conditional rejection probability and unconditional rejection probability equals {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\sum_{a=0}^n(r_a-\alpha)\binom na p^a(1-p)^{n-a}=0.
\]</div>{% endraw %}
<p>Divide by {% raw %}<span class="math inline">\((1-p)^n\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(u=p/(1-p)\)</span>{% endraw %}. The resulting polynomial in {% raw %}<span class="math inline">\(u\)</span>{% endraw %} vanishes for every {% raw %}<span class="math inline">\(u&gt;0\)</span>{% endraw %}, so all coefficients vanish: {% raw %}<span class="math inline">\(r_a=\alpha\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. This establishes the stated converse for exact tests, not for merely conservative ones.</p>

<h3 data-note-section="6" id="05-36-deriving-the-markov-local-alternative">6. Deriving the Markov local alternative</h3>
<p>For the symmetric chain, the transition matrix, in the order failure then success, is</p>

{% raw %}<div class="math display">\[
P_\epsilon=
\begin{pmatrix}
1/2+\epsilon&amp;1/2-\epsilon\\
1/2-\epsilon&amp;1/2+\epsilon
\end{pmatrix}.
\]</div>{% endraw %}
<p>Its stationary distribution is {% raw %}<span class="math inline">\((1/2,1/2)\)</span>{% endraw %} because both columns sum to one. Therefore</p>

{% raw %}<div class="math display">\[
\mathbb P(X_t=1\mid X_{t-1}=1)-\mathbb P(X_t=1)=\epsilon,
\]</div>{% endraw %}
<p>while subtracting the success probability after failure gives {% raw %}<span class="math inline">\(2\epsilon\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(k=1,p=1/2\)</span>{% endraw %}, the null standard deviations in the theorem are {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. Dividing the local mean shifts {% raw %}<span class="math inline">\(h\)</span>{% endraw %} and {% raw %}<span class="math inline">\(2h\)</span>{% endraw %} by those standard deviations gives the same noncentrality {% raw %}<span class="math inline">\(2h\)</span>{% endraw %}.</p>

<p>The triangular-array CLT and permutation-limit result give the standardized limit {% raw %}<span class="math inline">\(\mathcal{N}(2h,1)\)</span>{% endraw %}. Hence the limiting rejection event is {% raw %}<span class="math inline">\(Z+2h&gt;z_{1-\alpha}\)</span>{% endraw %}, yielding the stated power. The alternative keeps the marginal success probability fixed and changes how successes cluster in time.</p>

<p>The same chain illustrates the cost of choosing a longer streak. Its Markov property gives {% raw %}<span class="math inline">\(\mathbb{P}(X_t=1\mid A_t=1)=1/2+\epsilon\)</span>{% endraw %} for every fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}: once the most recent outcome is known, the earlier outcomes add no predictive information. Yet at {% raw %}<span class="math inline">\(p=1/2\)</span>{% endraw %}, the null variances are</p>

{% raw %}<div class="math display">\[
\sigma_{P,k}^2=\frac{2^k-1}{4},\qquad
\sigma_{D,k}^2=2^{k-1}.
\]</div>{% endraw %}
<p>The standardized local shifts are {% raw %}<span class="math inline">\(2h/\sqrt{2^k-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(2h/\sqrt{2^{k-1}}\)</span>{% endraw %}. In this Markov model, a longer history adds no signal once the latest outcome is known, but it reduces the number of eligible transitions. The variance calculation therefore explains the loss of local power. Other dependence models may contain information in earlier outcomes and require a new comparison.</p>

<p>Conditioning on each individual’s success count gives a product of uniform permutation laws under the independent-individual null. Within-individual permutations preserve that law, so any prespecified pooled statistic can be calibrated exactly. Permuting observations between individuals would also impose equality of their baseline rates.</p>

<h3 id="05-36-from-a-permutation-cdf-to-a-power-calculation">From a permutation cdf to a power calculation</h3>
<p>Exact conditional validity and a limiting normal reference are different assertions. For the normal approximation, write {% raw %}<span class="math inline">\(F_n^\pi\)</span>{% endraw %} for the conditional permutation cdf of the appropriately standardized statistic. If {% raw %}<span class="math inline">\(F_n^\pi(x)\xrightarrow{P}\Phi(x)\)</span>{% endraw %} in probability at every real {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, its {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %} quantile {% raw %}<span class="math inline">\(c_n\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(z_{1-\alpha}\)</span>{% endraw %}. Indeed, for any {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\Phi(z_{1-\alpha}-\delta)&lt;1-\alpha&lt;\Phi(z_{1-\alpha}+\delta).\]</div>{% endraw %}
<p>With probability tending to one the same strict inequalities hold for {% raw %}<span class="math inline">\(F_n^\pi\)</span>{% endraw %} at these two points, trapping {% raw %}<span class="math inline">\(c_n\)</span>{% endraw %} between them. If the statistic under the local alternative converges to {% raw %}<span class="math inline">\(Z+2h\)</span>{% endraw %}, sandwiching its rejection event between the two fixed thresholds and then letting {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(1-\Phi(z_{1-\alpha}-2h)\)</span>{% endraw %}. Continuity of the limiting cdf makes the strict/non-strict boundary immaterial asymptotically; finite-sample exactness still uses the tie rule above.</p>
<p>The required conditional permutation limit is taken from Theorem 3.3 and Corollary 3.1 of the <a href="https://davidritzwoller.github.io/files/hot_hand.pdf">authors’ April 1, 2021 manuscript</a>; it does not follow from the ordinary CLT alone. The local Markov limit and its power consequence are Theorem 4.1, Remark 4.1, and Corollary 4.1 there.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-miller_surprised_2018" class="csl-entry" role="listitem">
Miller, Joshua B., and Adam Sanjurjo. 2018. <span>“Surprised by the Hot Hand Fallacy? A Truth in the Law of Small Numbers.”</span> <em>Econometrica</em> 86 (6): 2019–47. <a href="https://doi.org/10.3982/ECTA14943">https://doi.org/10.3982/ECTA14943</a>.
</div>
<div id="ref-ritzwoller_uncertainty_2022" class="csl-entry" role="listitem">
Ritzwoller, David M, and Joseph P Romano. 2022. <span>“Uncertainty in the Hot Hand Fallacy: Detecting Streaky Alternatives to Random Bernoulli Sequences.”</span> <em>The Review of Economic Studies</em> 89 (2): 976–1007. <a href="https://doi.org/10.1093/restud/rdab020">https://doi.org/10.1093/restud/rdab020</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-05-19-steins-method %}">Stein’s Method</a> · Next: <a href="{% post_url 2024-04-15-the-hot-hand %}">The Hot Hand</a></p></nav>

</div>
