---
layout: "post"
title: "Resampled Statistics: Size and Local Power"
date: "2024-09-17"
tags: ["econometrics", "networks"]
excerpt: "The M-type test detects smaller shifts at a fixed repetition count; the U-type test can gain power when repetitions are chosen to match size accuracy."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/10/04/weak-dependence-lemmas-for-resampled-statistics/", "/2024/10/21/rates-for-resampled-statistics/", "/2024/11/06/limit-theorems-for-ordering-free-inference/", "/2024/11/23/comparing-u-type-and-m-type-resampled-statistics/"]
---

<div class="note-content" markdown="0">

<p>The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">preceding post</a> derived the conditional reference distributions and the error introduced by replacing the empirical mean with a tested mean. The remaining choice is how far to increase the subsample size {% raw %}<span class="math inline">\(b\)</span>{% endraw %} and repetition count {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. Both strengthen the response to a population shift; both can also magnify the original estimation error.</p>

<p>This creates two different comparisons between the M-type and U-type procedures. At the same subsample size and repetition count, the M-type statistic detects smaller mean shifts. <span class="citation" data-cites="song_ordering-free_2018"><a href="#ref-song_ordering-free_2018" role="doc-biblioref">Song (2018)</a></span> instead compares the tests at a common rate of size error, the discrepancy between null rejection probability and the nominal level. Each test can choose its own subsample size and repetition count. The U-type construction can then detect smaller shifts because its leading conditional drift accumulates more slowly.</p>

<h3 data-note-section="1" id="10-266-conditional-randomness-and-full-sample-error-enter-separately">1. The error inherited from the original sample</h3>

<p>Keep the preceding notation: {% raw %}<span class="math inline">\(X_i\in\mathbb R^p\)</span>{% endraw %} with fixed {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, empirical covariance divisor {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(R=R_n\)</span>{% endraw %} independent uniform permutations, each contributing {% raw %}<span class="math inline">\(b=b_n\)</span>{% endraw %} distinct observations. The tested mean is {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. Take {% raw %}<span class="math inline">\(1\le b&lt;n\)</span>{% endraw %} for M and {% raw %}<span class="math inline">\(2\le b&lt;n\)</span>{% endraw %} for U. Recall</p>

{% raw %}<div class="math display">\[
Z_i=\widehat\Sigma^{-1/2}(X_i-\overline X),
\qquad
 a=\widehat\Sigma^{-1/2}(\overline X-\mu),
\qquad
W_n=\frac1{\sqrt{pRb}}\sum_{r=1}^R\sum_{j=1}^b Z_{\pi_r(j)}.
\]</div>{% endraw %}

<p>The inverse square root is symmetric. All inverse-covariance expressions are understood on the nonsingularity event, which the maintained assumptions must give probability tending to one. Conditional on the data, {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} is centered and has covariance {% raw %}<span class="math inline">\((n-b)I_p/[p(n-1)]\)</span>{% endraw %}. Its variation is of order one when {% raw %}<span class="math inline">\(b/n\to0\)</span>{% endraw %}.</p>

<p>Song uses {% raw %}<span class="math inline">\(T_M(\mu)=S_M(\mu)-Rb/n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_U(\mu)=S_U(\mu)-\sqrt R(b-1)/n\)</span>{% endraw %}. Their reference distributions are generated with the empirical center {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}. To compare a candidate statistic with its reference, use the same permutations for both centerings. Expanding gives the exact identities</p>

{% raw %}<div class="math display">\[
\begin{aligned}
D_M&amp;:=T_M(\mu)-S_M(\overline X)\\
&amp;=2\sqrt{Rb/p}\,a'W_n+\frac{Rb}{p}\|a\|^2-\frac{Rb}{n},
\end{aligned}
\]</div>{% endraw %}

{% raw %}<div class="math display">\[
\begin{aligned}
D_U&amp;:=T_U(\mu)-S_U(\overline X)\\
&amp;=\frac{2(b-1)}{\sqrt{pb}}a'W_n
+\frac{\sqrt R(b-1)}p\|a\|^2
-\frac{\sqrt R(b-1)}n.
\end{aligned}
\]</div>{% endraw %}

<p>Under the null, {% raw %}<span class="math inline">\(a\)</span>{% endraw %} is the standardized sample-mean error. Its coefficient grows with {% raw %}<span class="math inline">\(R\)</span>{% endraw %} in the M comparison. In the U comparison, the centered linear term has no growing factor of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}; only the quadratic drift accumulates with repetitions.</p>

<h3 data-note-section="2" id="10-266-dependence-limits-how-much-to-aggregate">2. What the tuning restrictions control</h3>

<p>First consider a setting where {% raw %}<span class="math inline">\(a=O_p(n^{-1/2})\)</span>{% endraw %} under the null. A dependency graph of bounded maximum degree, suitable moments, and a well-behaved empirical covariance provide one such setting. A Gaussian limit for the original sample mean is unnecessary for the following calculations.</p>

<p>In the mean comparison, the linear term is {% raw %}<span class="math inline">\(O_p(\sqrt{Rb/n})\)</span>{% endraw %}, and the quadratic term and adjustment are {% raw %}<span class="math inline">\(O_p(Rb/n)\)</span>{% endraw %}. Thus, when {% raw %}<span class="math inline">\(Rb/n\to0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
D_M=O_p(r_M),
\qquad r_M=\sqrt{\frac{Rb}{n}}.
\]</div>{% endraw %}

<p>For the U-type comparison, the linear term has conditional variance proportional to {% raw %}<span class="math inline">\(b\|a\|^2\)</span>{% endraw %}, while the quadratic drift is proportional to {% raw %}<span class="math inline">\(\sqrt R\,b\|a\|^2\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
D_U=O_p(r_U),
\qquad
r_U=\frac{\sqrt R\,b}{n}+\sqrt{\frac bn}.
\]</div>{% endraw %}

<p>The first term in {% raw %}<span class="math inline">\(r_U\)</span>{% endraw %} comes from the quadratic drift and its adjustment. The second comes from the centered linear term. Increasing {% raw %}<span class="math inline">\(R\)</span>{% endraw %} does not reduce the second term, so the subsample size imposes a lower limit on this particular error bound.</p>

<p>With {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}, the sufficient restrictions making these discrepancies vanish are</p>

{% raw %}<div class="math display">\[
\frac{Rb}{n}\to0\quad\text{for M},
\qquad
\frac{Rb^2}{n^2}\to0\quad\text{for U}.
\]</div>{% endraw %}

<p>For U, the displayed restriction also implies {% raw %}<span class="math inline">\(b/n\to0\)</span>{% endraw %}, so the linear remainder vanishes. These conditions remain relevant with independent original observations: the sample mean still has estimation error, and repeatedly resampling the same observations does not create a new independent sample of size {% raw %}<span class="math inline">\(Rb\)</span>{% endraw %}.</p>

<span id="10-266-reading-the-tuning-restrictions-as-a-budget"></span>
<p>The conditional CLT also requires moment control within a subsample. The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#ordering-free-proof-techniques">moment argument in the preceding post</a> explains Song’s conditions on {% raw %}<span class="math inline">\(b^k\lambda_n(k)\)</span>{% endraw %} through orders four for M and eight for U. With bounded graph degree, {% raw %}<span class="math inline">\(b^2/n=O(1)\)</span>{% endraw %} suffices for those dependence bounds, alongside the observation-moment and covariance assumptions.</p>

<p>Writing {% raw %}<span class="math inline">\(b\asymp n^\beta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\asymp n^\gamma\)</span>{% endraw %} makes the restrictions easy to compare:</p>

{% raw %}<div class="math display">\[
\begin{array}{ll}
\text{M:}&amp;\gamma+\beta&lt;1,\\
\text{U:}&amp;\gamma+2\beta&lt;2,\\
\text{moment restrictions in the graph example:}&amp;0\le\beta\le\frac12.
\end{array}
\]</div>{% endraw %}

<p>Both constructions require {% raw %}<span class="math inline">\(\gamma&gt;0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\beta=0\)</span>{% endraw %}, use a fixed subsample size, at least two for U. These inequalities identify admissible growth rates; they do not determine finite-sample tuning constants.</p>

<p>When dependence makes the mean less accurate, the corresponding restrictions become tighter. More generally, suppose {% raw %}<span class="math inline">\(\|a\|=O_p(\rho_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\rho_n\to0\)</span>{% endraw %} is a deterministic upper rate with {% raw %}<span class="math inline">\(\rho_n\ge n^{-1/2}\)</span>{% endraw %}. The same identities give sufficient conditions</p>

{% raw %}<div class="math display">\[
Rb\rho_n^2\to0\quad\text{for M},
\qquad
Rb^2\rho_n^4\to0\quad\text{for U},
\]</div>{% endraw %}

<p>in addition to the conditional CLT conditions. For U, {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %} then also gives {% raw %}<span class="math inline">\(\sqrt b\,\rho_n\to0\)</span>{% endraw %}. In the <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#10-235-two-calculations-with-random-subsets">equal-cluster example</a> with {% raw %}<span class="math inline">\(G\to\infty\)</span>{% endraw %} independent variance-one cluster shocks, {% raw %}<span class="math inline">\(\rho_n\asymp G^{-1/2}\)</span>{% endraw %}. The allowable repetitions depend on the number of clusters, even if the recorded sample size is much larger.</p>

<h3 data-note-section="3" id="10-266-derive-the-local-scales">3. The alternatives each statistic can detect</h3>

<span id="10-266-two-kinds-of-signal"></span>
<p>Now let the common population mean be {% raw %}<span class="math inline">\(\mu+\Delta_n\)</span>{% endraw %}. The standardized discrepancy separates into</p>

{% raw %}<div class="math display">\[
a=\underbracket{\widehat\Sigma^{-1/2}
(\overline X-\mathbb E\overline X)}_{\text{estimation error}}
+\underbracket{\widehat\Sigma^{-1/2}\Delta_n}_{\text{population shift}}.
\]</div>{% endraw %}

<p>Suppose the covariance estimator converges to a deterministic positive definite marginal covariance {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, and the null error bounds continue to hold along the alternatives. The mean construction multiplies the population shift by {% raw %}<span class="math inline">\(\sqrt{Rb}\)</span>{% endraw %}. Its signal has order one when</p>

{% raw %}<div class="math display">\[
\Delta_n=h\delta_M,
\qquad
\delta_M=(Rb)^{-1/2},
\]</div>{% endraw %}

<p>for a fixed nonzero direction {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. In the quadratic construction the signal is proportional to {% raw %}<span class="math inline">\(\sqrt R\,b\,\Delta_n'\Sigma^{-1}\Delta_n\)</span>{% endraw %}. Its order-one scale is therefore</p>

{% raw %}<div class="math display">\[
\Delta_n=h\delta_U,
\qquad
\delta_U=R^{-1/4}b^{-1/2}.
\]</div>{% endraw %}

<p>These are rates for the magnitude of a mean shift, so a smaller rate means greater sensitivity. For a common choice of {% raw %}<span class="math inline">\(R,b\)</span>{% endraw %} admissible for both tests,</p>

{% raw %}<div class="math display">\[
\frac{\delta_U}{\delta_M}=R^{1/4}\longrightarrow\infty.
\]</div>{% endraw %}

<p>The M-type test has the smaller detection scale at common tuning because the U-type signal is quadratic. The matched-size comparison below allows the subsample size and repetition count to differ between tests.</p>

<span id="10-266-the-noncentral-limits-explain-the-detection-scales"></span>
<p>The local limits explain what happens at these scales. Under the conditional CLT and negligible-remainder conditions, the M-type local alternative gives</p>

{% raw %}<div class="math display">\[
T_M(\mu)\Rightarrow
\frac1p\|G+\Sigma^{-1/2}h\|^2,
\qquad G\sim\mathcal N(0,I_p).
\]</div>{% endraw %}

<p>For U, retain its variance normalization. Let {% raw %}<span class="math inline">\(v_n^2\)</span>{% endraw %} be the conditional variance of a single empirically centered U contribution, and suppose {% raw %}<span class="math inline">\(v_n\xrightarrow{P} v&gt;0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(b\to\infty\)</span>{% endraw %}, the corresponding limit is</p>

{% raw %}<div class="math display">\[
\frac{T_U(\mu)}{v_n}
\Rightarrow\mathcal N\left(\frac{h'\Sigma^{-1}h}{pv},1\right).
\]</div>{% endraw %}

<p>With a fixed {% raw %}<span class="math inline">\(b\ge2\)</span>{% endraw %}, multiply the displayed mean by {% raw %}<span class="math inline">\((b-1)/b\)</span>{% endraw %}; the detection rate is unchanged. The centered linear term caused by the population shift is {% raw %}<span class="math inline">\(O_p(R^{-1/4})\)</span>{% endraw %}, so it vanishes. The drift restrictions also remove the original estimation error and its interaction with the shift. The raw U statistic need not have unit limiting variance.</p>

<p>Put {% raw %}<span class="math inline">\(\lambda_h=h'\Sigma^{-1}h\)</span>{% endraw %}. The M-type limiting power is the upper tail of a noncentral chi-square distribution with noncentrality {% raw %}<span class="math inline">\(\lambda_h\)</span>{% endraw %}, evaluated at the usual central chi-square critical value. For U with {% raw %}<span class="math inline">\(b\to\infty\)</span>{% endraw %}, it is</p>

{% raw %}<div class="math display">\[
1-\Phi\left(z_{1-\alpha}-\frac{\lambda_h}{pv}\right),
\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal CDF and {% raw %}<span class="math inline">\(z_{1-\alpha}\)</span>{% endraw %} its quantile. Both tests detect departures in either direction. These power functions describe alternatives scaled separately by {% raw %}<span class="math inline">\(\delta_M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\delta_U\)</span>{% endraw %}; using the same {% raw %}<span class="math inline">\(h\)</span>{% endraw %} in them does not hold the population alternative fixed.</p>

<h3 data-note-section="4" id="resampling-size-approximation">4. From an error in the statistic to an error in size</h3>

<p>The calculations above establish stochastic orders for {% raw %}<span class="math inline">\(D_M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_U\)</span>{% endraw %}. A power comparison at a prescribed size accuracy requires more. A small change in a statistic changes the rejection probability according to how much probability lies near the critical value.</p>

<p>For a statistic {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, its coupled reference {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, a possibly data-dependent critical value {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\left|P(T&gt;c)-P(S&gt;c)\right|
\le P(|T-S|&gt;\varepsilon)
+P(|S-c|\le\varepsilon).
\]</div>{% endraw %}

<p>The first term requires tail control on the discrepancy. The second requires control of the reference distribution near its rejection boundary. An {% raw %}<span class="math inline">\(O_p(r_n)\)</span>{% endraw %} discrepancy alone does not imply an {% raw %}<span class="math inline">\(O(r_n)\)</span>{% endraw %} size error. Nor does a CLT, which gives convergence without necessarily supplying the required rate.</p>

<p>Symmetry can also make a remainder bound conservative. For an exactly Gaussian reference {% raw %}<span class="math inline">\(G\sim\mathcal N(0,I_p)\)</span>{% endraw %} and a deterministic shift {% raw %}<span class="math inline">\(u\to0\)</span>{% endraw %}, the rejection probability of {% raw %}<span class="math inline">\(\|G+u\|^2\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(u\)</span>{% endraw %} through {% raw %}<span class="math inline">\(\|u\|^2\)</span>{% endraw %}. At the central chi-square critical value {% raw %}<span class="math inline">\(q_{p,1-\alpha}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
P\{\|G+u\|^2>q_{p,1-\alpha}\}
=\alpha+O(\|u\|^2).
\]</div>{% endraw %}

<p>The statistic itself contains the linear term {% raw %}<span class="math inline">\(2u'G\)</span>{% endraw %}. Its order therefore need not be the sharp order of the rejection-probability error. This example explains why a comparison of exact size-error rates needs a separate argument.</p>

<p>Song's <a href="https://arxiv.org/html/1604.00447v3">Theorem 2.3 and its higher-order argument</a> use stronger regularity to compare size accuracy. The proof studies the empirical resampling law, including its behavior near critical boundaries. Because this law has finite support conditional on the data, a classical smooth-distribution Edgeworth argument cannot simply be applied to it. The paper uses an expansion under a weak Cramér condition, together with stronger moment, dependence, and nondegeneracy conditions.</p>

<p>One restriction ensures that the remaining approximation error is no larger than the error being matched:</p>

{% raw %}<div class="math display">\[
R_M^{-(2s-3)/4}=O(r_M),
\qquad
R_U^{-(2s-3)/4}=O(r_U),
\qquad s\ge3.
\]</div>{% endraw %}

<p>This gives a reason for taking enough repetitions as well as a reason for limiting them. Too few leave a poor approximation to the resampling law; too many magnify the error inherited from the data. Here {% raw %}<span class="math inline">\(s\)</span>{% endraw %} comes from the higher-order expansion and its moment assumptions, rather than being a free tuning parameter.</p>

<p>For the comparison below, take the relevant size-error bounds at orders {% raw %}<span class="math inline">\(r_M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r_U\)</span>{% endraw %} as additional inputs. If the comparison is to hold uniformly over a class of data-generating processes, these inputs and the local-power conditions must hold uniformly over that class. Uniform convergence of a CDF over its argument alone does not establish this.</p>

<h3 data-note-section="5" id="resampling-matched-size-comparison">5. Comparing power at the same size accuracy</h3>

<p>Allow separate choices {% raw %}<span class="math inline">\((R_M,b_M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((R_U,b_U)\)</span>{% endraw %}. In the root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} setting, the two error scales are</p>

{% raw %}<div class="math display">\[
r_M=\sqrt{\frac{R_Mb_M}{n}},
\qquad
r_U=\frac{\sqrt{R_U}b_U}{n}+\sqrt{\frac{b_U}{n}}.
\]</div>{% endraw %}

<p>Choose the tuning parameters so that {% raw %}<span class="math inline">\(r_M\asymp r_U\asymp\omega_n\to0\)</span>{% endraw %}. The notation {% raw %}<span class="math inline">\(x_n\asymp y_n\)</span>{% endraw %} means their ratio is bounded above and away from zero. Thus the comparison holds the order of size-error control fixed. It does not require equal repetition counts or equal computational cost.</p>

<div id="resampled-size-power" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1 (comparison of detection scales)</strong>. Suppose the local-power scales and size-error bounds described above apply. If {% raw %}<span class="math inline">\(r_M\asymp r_U\to0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R_U\to\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(R_Ub_U^2/n^2\to0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\frac{\delta_U}{\delta_M}\longrightarrow0,
\qquad
\delta_M=(R_Mb_M)^{-1/2},
\quad
\delta_U=R_U^{-1/4}b_U^{-1/2}.
\]</div>{% endraw %}
</div>

<p>The proof is a direct substitution that keeps both U-type error terms. Since {% raw %}<span class="math inline">\(\sqrt{R_Mb_M}=\sqrt n\,r_M\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\frac{\delta_U}{\delta_M}
&amp;=\frac{\sqrt n\,r_M}{R_U^{1/4}\sqrt{b_U}}\\
&amp;=\frac{r_M}{r_U}
\left\{
\left(\frac{R_Ub_U^2}{n^2}\right)^{1/4}
+R_U^{-1/4}
\right\}\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}

<p>The first term vanishes by the U-type drift restriction; the second vanishes because the repetition count grows. This proves the comparison of scales once the probabilistic inputs are established.</p>

<p>To see the magnitude of the gain, consider choices satisfying {% raw %}<span class="math inline">\(b_U/n=o(\omega_n^2)\)</span>{% endraw %}. Then the linear U remainder is smaller than the target error, leaving</p>

{% raw %}<div class="math display">\[
R_Mb_M\asymp n\omega_n^2,
\qquad
\sqrt{R_U}b_U\asymp n\omega_n.
\]</div>{% endraw %}

<p>Substituting into the detection scales gives</p>

{% raw %}<div class="math display">\[
\delta_M\asymp\frac1{\sqrt n\,\omega_n},
\qquad
\delta_U\asymp\frac1{\sqrt n\,\sqrt{\omega_n}},
\qquad
\frac{\delta_U}{\delta_M}\asymp\sqrt{\omega_n}\to0.
\]</div>{% endraw %}

<p>The matched error bound permits {% raw %}<span class="math inline">\(\sqrt{R_U}b_U\asymp n\omega_n\)</span>{% endraw %} for U, whereas M is limited to {% raw %}<span class="math inline">\(R_Mb_M\asymp n\omega_n^2\)</span>{% endraw %}. Taking square roots gives the displayed detection scales. Both remain larger than {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}, so neither recovers the sensitivity of a conventional mean test with an estimable sampling variance.</p>

<p>There is a qualification in the term “rate-dominance.” Song's definition requires the common size-error order to be sharp, as well as requiring the ratio of detection scales to vanish. The proposition proves the latter implication conditional on the stated calibration inputs. Matching two upper bounds alone does not prove that they describe the exact size errors. It also does not establish that U has greater power in every finite sample.</p>

<h3 data-note-section="6" id="10-266-how-to-read-the-result-in-practice">6. A worked tuning comparison</h3>

<p>Take bounded graph degree and choose {% raw %}<span class="math inline">\(b_M\asymp b_U\asymp n^{1/4}\)</span>{% endraw %}. Suppose the stronger moment and approximation conditions needed for the size comparison hold. The following choices match the leading error orders:</p>

<table>
<thead><tr><th>Quantity</th><th>M-type</th><th>U-type</th></tr></thead>
<tbody>
<tr><td>Subsample size</td><td>{% raw %}<span class="math inline">\(n^{1/4}\)</span>{% endraw %}</td><td>{% raw %}<span class="math inline">\(n^{1/4}\)</span>{% endraw %}</td></tr>
<tr><td>Repetitions</td><td>{% raw %}<span class="math inline">\(n^{1/2}\)</span>{% endraw %}</td><td>{% raw %}<span class="math inline">\(n^{5/4}\)</span>{% endraw %}</td></tr>
<tr><td>Error scale</td><td>{% raw %}<span class="math inline">\(n^{-1/8}\)</span>{% endraw %}</td><td>{% raw %}<span class="math inline">\(n^{-1/8}+n^{-3/8}\)</span>{% endraw %}</td></tr>
<tr><td>Detectable mean-shift scale</td><td>{% raw %}<span class="math inline">\(n^{-3/8}\)</span>{% endraw %}</td><td>{% raw %}<span class="math inline">\(n^{-7/16}\)</span>{% endraw %}</td></tr>
</tbody>
</table>

<p>Integer parts can be taken for the sample sizes and repetition counts. The U-type test uses many more repetitions, including more than {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. That is allowed because observations can be drawn again in another repetition. The two drift restrictions are {% raw %}<span class="math inline">\(R_Mb_M/n\asymp n^{-1/4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_Ub_U^2/n^2\asymp n^{-1/4}\)</span>{% endraw %}. Also, {% raw %}<span class="math inline">\(b^2/n\asymp n^{-1/2}\)</span>{% endraw %}, so the graph-based moment restrictions hold.</p>

<p>The ratio of detection scales is {% raw %}<span class="math inline">\(n^{-1/16}\to0\)</span>{% endraw %}. This gives a concrete example of the matched-error comparison. At the common count {% raw %}<span class="math inline">\(R=n^{1/2}\)</span>{% endraw %}, by contrast, U would have scale {% raw %}<span class="math inline">\(n^{-1/4}\)</span>{% endraw %}, while M would retain scale {% raw %}<span class="math inline">\(n^{-3/8}\)</span>{% endraw %}. Holding the repetition count fixed changes the conclusion.</p>

<p>These exponents illustrate the asymptotic argument; they are not a prescription for finite-sample constants. They also show why one should compare rates only after checking the approximation error. At {% raw %}<span class="math inline">\(s=3\)</span>{% endraw %}, for example, the expansion remainders in the preceding section have orders {% raw %}<span class="math inline">\(n^{-3/8}\)</span>{% endraw %} for M and {% raw %}<span class="math inline">\(n^{-15/16}\)</span>{% endraw %} for U, both smaller than the matched order {% raw %}<span class="math inline">\(n^{-1/8}\)</span>{% endraw %}.</p>

<p>Subsample size still needs a separate choice. To obtain a U-type error bound of order {% raw %}<span class="math inline">\(\omega_n\)</span>{% endraw %}, the linear term requires {% raw %}<span class="math inline">\(b_U/n=O(\omega_n^2)\)</span>{% endraw %}; choosing it smaller leaves room for the drift term. For a given product {% raw %}<span class="math inline">\(\sqrt{R_U}b_U\)</span>{% endraw %}, increasing {% raw %}<span class="math inline">\(b_U\)</span>{% endraw %} leaves the leading signal scale unchanged while increasing this linear remainder. Larger subsamples therefore have no automatic advantage. Constants, the conditional approximation, and computational cost also matter.</p>

<h3 data-note-section="7" id="10-266-why-centered-resampling-can-estimate-a-critical-value">7. Repetitions in the statistic and simulations of its critical value</h3>

<p>The <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}#ordering-free-calibration-and-power">calibration procedure</a> uses {% raw %}<span class="math inline">\(R\)</span>{% endraw %} permutations per statistic and {% raw %}<span class="math inline">\(L\)</span>{% endraw %} independent simulated statistics to estimate its critical value. These counts enter the size comparison differently.</p>

<p>For independent simulated batches, the empirical reference CDF has conditional error {% raw %}<span class="math inline">\(O_p(L^{-1/2})\)</span>{% endraw %}. If the goal is to compare the tests at the finer order {% raw %}<span class="math inline">\(\omega_n\)</span>{% endraw %}, simulation error must also be controlled at that scale. A sufficient choice is {% raw %}<span class="math inline">\(L^{-1/2}=o(\omega_n)\)</span>{% endraw %}, together with the quantile regularity required by the calibration argument. Merely sending {% raw %}<span class="math inline">\(L\to\infty\)</span>{% endraw %} is enough for first-order convergence under the usual conditions, but does not by itself preserve a particular higher-order comparison.</p>

<p>The reference simulations retain the empirical center {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %}, so increasing {% raw %}<span class="math inline">\(L\)</span>{% endraw %} cannot relax the restrictions on {% raw %}<span class="math inline">\(R,b\)</span>{% endraw %}. Repeating an entire test and combining its decisions requires a separate calibration argument; Song’s confidence-function procedure is one such construction.</p>

<p>The <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">next post</a> fixes the number of observations drawn per repetition at one for M and two for U. This makes it possible to prove the conditional limit from empirical moment conditions alone and to construct a test for moment inequalities. Its practical tuning rule balances drift against detection scale, a different criterion from matching size-error orders here.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-song_ordering-free_2018" class="csl-entry" role="listitem">
Song, Kyungchul. 2018. <span>“Ordering-Free Inference from Locally Dependent Data.”</span> arXiv. <a href="http://arxiv.org/abs/1604.00447">http://arxiv.org/abs/1604.00447</a>. Version 3, June 29; Sections 2.4.1–2.4.4 and Supplemental Note D.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-08-15-ordering-free-dependence-and-resampling %}">Ordering-Free Dependence and Resampling</a> · Next: <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">Dependence-Robust Resampling and Moment Tests</a></p></nav>

</div>
