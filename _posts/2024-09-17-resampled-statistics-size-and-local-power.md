---
layout: "post"
title: "Resampled Statistics: Size and Local Power"
date: "2024-09-17"
tags: ["econometrics", "networks"]
excerpt: "Randomized subsampling trades some local power for inference without an estimated dependence ordering."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/10/04/weak-dependence-lemmas-for-resampled-statistics/", "/2024/10/21/rates-for-resampled-statistics/", "/2024/11/06/limit-theorems-for-ordering-free-inference/", "/2024/11/23/comparing-u-type-and-m-type-resampled-statistics/"]
---

<div class="note-content" markdown="0">

<p>Repeated random subsamples create a reference distribution conditional on the data. Taking more draws stabilizes that distribution, but also magnifies the error already present in the original sample. The results of <span class="citation" data-cites="song_ordering-free_2018"><a href="#ref-song_ordering-free_2018" role="doc-biblioref">Song (2018)</a></span> determine how subsample size and repetition count can balance these effects, and what local power remains when dependence ordering is unknown.</p>

<h3 data-note-section="1" id="10-266-two-kinds-of-signal">1. Two kinds of signal</h3>
<p>Let {% raw %}<span class="math inline">\(b_n\)</span>{% endraw %} be the size of each random subsample, {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} the number of repetitions, and {% raw %}<span class="math inline">\(d\)</span>{% endraw %} the dimension of the tested mean. An {% raw %}<span class="math inline">\(M\)</span>{% endraw %}-type statistic aggregates standardized subsample means, producing a squared Gaussian norm after its bias correction. A {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-type statistic instead aggregates off-diagonal quadratic terms, with a normal calibration after the paper’s normalization.</p>

<div id="resampled-size-power" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Under the paper’s uniform moment, covariance-nondegeneracy, and ordering-free dependence conditions, the randomized tests have asymptotic size {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(M\)</span>{% endraw %} statistic has the corresponding {% raw %}<span class="math inline">\(\chi_d^2/d\)</span>{% endraw %} null limit; the standardized {% raw %}<span class="math inline">\(U\)</span>{% endraw %} statistic has a Gaussian null limit. Local mean shifts of order {% raw %}<span class="math inline">\((R_nb_n)^{-1/2}\)</span>{% endraw %} affect the {% raw %}<span class="math inline">\(M\)</span>{% endraw %} limit, while shifts of order {% raw %}<span class="math inline">\(R_n^{-1/4}b_n^{-1/2}\)</span>{% endraw %} affect the {% raw %}<span class="math inline">\(U\)</span>{% endraw %} limit. Under the additional higher-order conditions used for the comparison, the {% raw %}<span class="math inline">\(U\)</span>{% endraw %} procedure can detect smaller shifts at a matched rate of size error.</p>

</div>
<p>The power comparison holds size accuracy fixed. Since the procedures accumulate original-sample error at different rates, equal size accuracy may permit different repetition counts.</p>

<h3 data-note-section="2" id="10-266-derive-the-local-scales">2. Derive the local scales</h3>
<p>For the mean statistic, a population shift {% raw %}<span class="math inline">\(\Delta_n\)</span>{% endraw %} contributes a drift proportional to {% raw %}<span class="math inline">\(\sqrt{R_nb_n}\,\Sigma^{-1/2}\Delta_n\)</span>{% endraw %}. A nonvanishing drift therefore appears at the first displayed rate. Squaring the Gaussian vector yields the noncentral chi-square form.</p>

<p>For the quadratic statistic, the leading shift is proportional to</p>

{% raw %}<div class="math display">\[
\sqrt{R_n}\,b_n\,\Delta_n&#x27;\Sigma^{-1}\Delta_n.
\]</div>{% endraw %}
<p>Making this order one gives {% raw %}<span class="math inline">\(\|\Delta_n\|\asymp R_n^{-1/4}b_n^{-1/2}\)</span>{% endraw %}. The signal is quadratic, so this test detects deviations in either direction.</p>

<h3 data-note-section="3" id="10-266-dependence-limits-how-much-to-aggregate">3. Dependence limits how much to aggregate</h3>
<p>The {% raw %}<span class="math inline">\(M\)</span>{% endraw %} conditions include</p>

{% raw %}<div class="math display">\[
R_nb_n(\overline\lambda_n(2)+n^{-1})\to0.
\]</div>{% endraw %}
<p>The {% raw %}<span class="math inline">\(U\)</span>{% endraw %} conditions instead control</p>

{% raw %}<div class="math display">\[
R_nb_n^2(\overline\lambda_n(4)
+n^{-1}[\overline\lambda_n(3)+\overline\lambda_n(2)]+n^{-2})\to0,
\]</div>{% endraw %}
<p>together with bounds on higher-order dependence coefficients. The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">graph-counting result</a> supplies primitive sufficient bounds in dependency-graph examples.</p>

<p>The restrictions bound the conditional drift and higher moments left by the original data. More repetitions reduce Monte Carlo error relative to that drift. Larger subsamples also increase the chance of drawing dependent observations together. Both tuning parameters therefore enter the size calculation.</p>

<h3 data-note-section="4" id="10-266-how-to-read-the-result-in-practice">4. How to read the result in practice</h3>
<p>The procedure changes the statistic itself by introducing random subsampling. Its detectable-alternative rate describes the resulting test, and can be slower than the rate of a full-sample test whose sampling variance is known.</p>

<p>Centered resampling can approximate critical values when the simulation count grows at an admissible rate. Combining repeated tests requires the paper’s confidence-function construction or another justified rule. Choosing a seed after seeing its answer changes the rejection event and hence the test’s size.</p>

<h3 data-note-section="5" id="10-266-conditional-randomness-and-full-sample-error-enter-separately">5. Conditional randomness and full-sample error enter separately</h3>
<p>For a schematic whitened subsample-mean vector, write the aggregate as</p>

{% raw %}<div class="math display">\[
Z_{M,n}=\frac1{\sqrt{R_n}}\sum_{r=1}^{R_n}
(V_{n,r}-\mathbb{E}[V_{n,r}\mid\mathcal X_n])
+\sqrt{R_n}\,\mathbb{E}[V_{n,1}\mid\mathcal X_n].
\]</div>{% endraw %}
<p>Conditional on {% raw %}<span class="math inline">\(\mathcal X_n\)</span>{% endraw %}, the draws in the first term are independent, so their covariance and higher moments can be calculated from the permutation experiment. The second term is fixed by the original sample. Repeating the experiment cannot average that term away.</p>

<p>For a mean-based draw, its conditional mean is proportional to {% raw %}<span class="math inline">\(\sqrt{b_n}(\overline X_n-\mu_0)\)</span>{% endraw %}. Under an alternative {% raw %}<span class="math inline">\(\mathbb{E}\overline X_n=\mu_0+\Delta_n\)</span>{% endraw %}, separate</p>

{% raw %}<div class="math display">\[
\sqrt{R_nb_n}(\overline X_n-\mu_0)
=\sqrt{R_nb_n}\Delta_n
+\sqrt{R_nb_n}(\overline X_n-\mathbb{E}\overline X_n).
\]</div>{% endraw %}
<p>The same multiplier acts on the population shift and the original sample’s error. A useful test keeps the former visible while making the latter negligible relative to the artificial reference fluctuation. This imposes an upper restriction on {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}, even though more repetitions would improve Monte Carlo precision alone.</p>

<h3 data-note-section="6" id="10-266-the-noncentral-limits-explain-the-detection-scales">6. The noncentral limits explain the detection scales</h3>
<p>Suppose the mean alternative is {% raw %}<span class="math inline">\(\Delta_n=h/\sqrt{R_nb_n}\)</span>{% endraw %}. In coordinates where the limiting randomized covariance is identity, the mean vector approaches {% raw %}<span class="math inline">\(\Sigma^{-1/2}h\)</span>{% endraw %}. If the remainder and bias-correction conditions continue to hold along this alternative, the squared norm has limit</p>

{% raw %}<div class="math display">\[
\frac1d\|Z+\Sigma^{-1/2}h\|^2,
\qquad Z\sim \mathcal{N}(0,I_d).
\]</div>{% endraw %}
<p>This is a scaled noncentral chi-square law with noncentrality {% raw %}<span class="math inline">\(h&#x27;\Sigma^{-1}h\)</span>{% endraw %}. A shift smaller than {% raw %}<span class="math inline">\((R_nb_n)^{-1/2}\)</span>{% endraw %} disappears from this limit; a shift at that scale changes the rejection probability by an order-one amount.</p>

<p>For the quadratic statistic, take {% raw %}<span class="math inline">\(\Delta_n=h/(R_n^{1/4}\sqrt{b_n})\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\sqrt{R_n}b_n\Delta_n&#x27;\Sigma^{-1}\Delta_n
=h&#x27;\Sigma^{-1}h.
\]</div>{% endraw %}
<p>The quadratic shift is nonnegative after the stated variance normalization. It therefore raises the rejection probability of an upper-tail test for mean departures of either sign. Its multiplier must be calculated from the chosen normalization; an unnormalized quadratic sum need not have variance one.</p>

<p>At identical {% raw %}<span class="math inline">\(R_n,b_n\)</span>{% endraw %}, the mean statistic’s detection scale is smaller. The paper’s comparison allowing better local power for the quadratic procedure uses different admissible repetition counts at matched size accuracy. Omitting that matching would make the comparison appear contradictory.</p>

<h3 data-note-section="7" id="10-266-reading-the-tuning-restrictions-as-a-budget">7. Reading the tuning restrictions as a budget</h3>
<p>Write {% raw %}<span class="math inline">\(L_{2,n}=\overline\lambda_n(2)+n^{-1}\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
L_{4,n}=\overline\lambda_n(4)+
 n^{-1}(\overline\lambda_n(3)+\overline\lambda_n(2))+n^{-2}.
\]</div>{% endraw %}
<p>The displayed restrictions become {% raw %}<span class="math inline">\(R_nb_nL_{2,n}\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_nb_n^2L_{4,n}\to0\)</span>{% endraw %}. If one informally substitutes {% raw %}<span class="math inline">\(b_n=n^\beta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R_n=n^\gamma\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(L_{2,n}\asymp n^{-a_2}\)</span>{% endraw %}, the mean condition is</p>

{% raw %}<div class="math display">\[
\gamma+\beta&lt;a_2.
\]</div>{% endraw %}
<p>Likewise, {% raw %}<span class="math inline">\(L_{4,n}\asymp n^{-a_4}\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\gamma+2\beta&lt;a_4\)</span>{% endraw %}. Increasing either tuning exponent uses some of the room allowed by the decay of dependence. These are drift restrictions only; the conditional CLT and higher-order size approximation add further conditions.</p>

<p>Even if the original observations are independent, diagonal and repeated-index terms produce the explicit powers of {% raw %}<span class="math inline">\(n^{-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-2}\)</span>{% endraw %}. In that benchmark, the two displayed restrictions reduce to {% raw %}<span class="math inline">\(R_nb_n/n\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_nb_n^2/n^2\to0\)</span>{% endraw %}. Treating every dependence coefficient as zero and then allowing arbitrarily many repetitions would overlook these finite-sample contributions.</p>

<p>The size restriction and the local-power scale can be compared without choosing numerical tuning constants. In the independent-data benchmark, write the mean restriction as {% raw %}<span class="math inline">\(R_nb_n=n\epsilon_n\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\epsilon_n\to0\)</span>{% endraw %}. Then its detectable mean scale is</p>

{% raw %}<div class="math display">\[
(R_nb_n)^{-1/2}=n^{-1/2}\epsilon_n^{-1/2}.
\]</div>{% endraw %}
<p>For the quadratic restriction, write {% raw %}<span class="math inline">\(\sqrt{R_n}b_n=n\delta_n\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\delta_n\to0\)</span>{% endraw %}. Its detectable scale is</p>

{% raw %}<div class="math display">\[
R_n^{-1/4}b_n^{-1/2}
=n^{-1/2}\delta_n^{-1/2}.
\]</div>{% endraw %}
<p>Both are larger than {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} by a diverging factor under these sufficient drift restrictions. This explains the price of making the unknown original-sample error negligible relative to the artificial noise, even when the data happen to be independent. A conventional efficient mean test can use root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} alternatives when its sampling variance is estimable.</p>

<p>These identities do not determine which randomized statistic is better: that requires relating {% raw %}<span class="math inline">\(\epsilon_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\delta_n\)</span>{% endraw %} to the same desired size error, including the higher-order terms. They do prevent two misleading comparisons. Holding {% raw %}<span class="math inline">\(R_n,b_n\)</span>{% endraw %} equal favors the mean statistic’s linear signal; separately maximizing each repetition count without comparing size accuracy can favor a poorly calibrated procedure. The paper’s refinement compares the two after controlling that calibration cost.</p>

<p>Under a local quadratic shift with limiting drift {% raw %}<span class="math inline">\(\kappa(h)\geq0\)</span>{% endraw %}, the upper-tail power is {% raw %}<span class="math inline">\(1-\Phi(z_{1-\alpha}-\kappa(h))\)</span>{% endraw %}. Under the mean statistic it is the upper tail of a noncentral chi-square distribution. The two shapes reflect linear versus squared accumulation of the same underlying mean discrepancy, rather than different null hypotheses.</p>

<h3 data-note-section="8" id="10-266-why-centered-resampling-can-estimate-a-critical-value">8. Why centered resampling can estimate a critical value</h3>
<p>Subtracting the sample mean removes empirical drift from each artificial draw used for the reference distribution. A conditional CLT gives a limiting law. Uniform convergence of its cdf, together with continuity and a regular critical quantile, then justifies convergence of the simulated critical value.</p>

<p>The statistic being tested still contains the original sample-mean error. The size proof must show that this drift is negligible relative to the centered reference law. Centering the simulations establishes only the reference side of that comparison.</p>

<p>Repeating the whole randomized test produces a conditional acceptance probability. It does not authorize choosing the most favorable seed or averaging arbitrary p-values. A rule combining repetitions must be analyzed as a new test, as in the paper’s confidence-function construction. The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">moment calculation for ordering-free resampling</a> supplies the conditional means and variances that make these distinctions explicit.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-song_ordering-free_2018" class="csl-entry" role="listitem">
Song, Kyungchul. 2018. <span>“Ordering-Free Inference from Locally Dependent Data.”</span> arXiv. <a href="http://arxiv.org/abs/1604.00447">http://arxiv.org/abs/1604.00447</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">Ordering-Free Dependence and Resampling</a> · Next: <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">Dependence-Robust Resampling and Moment Tests</a></p></nav>

</div>
