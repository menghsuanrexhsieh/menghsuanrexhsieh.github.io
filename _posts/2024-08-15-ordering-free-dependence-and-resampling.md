---
layout: "post"
title: "Ordering-Free Dependence and Resampling"
date: "2024-08-15"
tags: ["econometrics", "networks"]
excerpt: "Randomized subsampling creates a tractable reference distribution; local dependence limits how strongly aggregation can amplify the original sample-mean error."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/08/15/ordering-free-inference-for-weakly-dependent-data/", "/2024/09/01/ordering-free-local-dependence/"]
---

<div class="note-content" markdown="0">

<p>Suppose that observations are connected through an unobserved network. Their average may estimate a population mean accurately, even though we do not know which observations move together. The difficulty is inference: estimating the variance of the average ordinarily requires information about those connections. A block bootstrap faces the same problem because the dependence structure determines which observations should be resampled together.</p>

<p><span class="citation" data-cites="song_ordering-free_2018"><a href="#ref-song_ordering-free_2018" role="doc-biblioref">Song (2018)</a></span> constructs a statistic by repeatedly drawing small random subsets. Conditional on the observed sample, the draws are independent across repetitions and their distribution is under our control. The original data still matter through the error in the sample mean. The method works when this error, after aggregation, is small relative to the variation introduced by resampling.</p>

<p>The mean construction amplifies the sample-mean error inside a squared norm. The U-type construction has a conditional mean that depends on the squared error, which permits more repetitions. Here we derive these decompositions and the dependence bounds needed for validity. The <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">next post</a> uses them to compare size and local power; the <a href="{% post_url 2024-12-09-dependence-robust-resampling-and-moment-tests %}">third post</a> proves a simpler pair-based limit theorem and extends it to moment inequalities.</p>

<h3 data-note-section="1" id="ordering-free-construction">1. Constructing the randomized statistic</h3>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\in\mathbb R^p\)</span>{% endraw %}, with fixed {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, have a common mean {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %}. We suppress the triangular-array subscript and initially work without a common shock. Define</p>

{% raw %}<div class="math display">\[
\overline X=\frac1n\sum_{i=1}^nX_i,
\qquad
\widehat\Sigma=\frac1n\sum_{i=1}^n
(X_i-\overline X)(X_i-\overline X)'.
\]</div>{% endraw %}

<p>The matrix {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} standardizes variation across observations in the empirical distribution. It does not estimate all the cross-observation covariances in</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(\sqrt n\,\overline X)
=\frac1n\sum_{i,j=1}^n\operatorname{Cov}(X_i,X_j).
\]</div>{% endraw %}

<p>That distinction is the reason to change the statistic. We will calibrate its resampling variation directly, while requiring the contribution of the original sample mean to vanish.</p>

<p>For each repetition {% raw %}<span class="math inline">\(r=1,\ldots,R\)</span>{% endraw %}, independently draw a uniform permutation {% raw %}<span class="math inline">\(\pi_r\)</span>{% endraw %} of the observation indices and retain its first {% raw %}<span class="math inline">\(b\)</span>{% endraw %} entries. Here {% raw %}<span class="math inline">\(b=b_n\)</span>{% endraw %} is the subsample size and {% raw %}<span class="math inline">\(R=R_n\)</span>{% endraw %} is the number of repetitions used to construct one statistic. Sampling is without replacement within a repetition; different repetitions can reuse observations. The permutations are independent of the data. Throughout, {% raw %}<span class="math inline">\(\mathbb E_\pi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}_\pi\)</span>{% endraw %} condition on the entire observed sample.</p>

<p>For a candidate mean {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, the mean contribution and its aggregate are</p>

{% raw %}<div class="math display">\[
M_r(\mu)=\frac1{\sqrt{pb}}\sum_{j=1}^b
\widehat\Sigma^{-1/2}(X_{\pi_r(j)}-\mu),
\qquad
S_M(\mu)=\left\|\frac1{\sqrt R}\sum_{r=1}^RM_r(\mu)\right\|^2.
\]</div>{% endraw %}

<p>The inverse square root is symmetric, and the norm is Euclidean. Expressions involving {% raw %}<span class="math inline">\(\widehat\Sigma^{-1}\)</span>{% endraw %} are defined on its nonsingularity event; the assumptions used below must make that event have probability tending to one. Song uses the adjusted statistic {% raw %}<span class="math inline">\(T_M(\mu)=S_M(\mu)-Rb/n\)</span>{% endraw %}. We return to the adjustment after explaining the main decomposition.</p>

<h3 data-note-section="2" id="10-235-conditional-mean-and-variance-of-the-mean-statistic">2. Separating resampling variation from estimation error</h3>

<p>Center at the sample mean first. Put</p>

{% raw %}<div class="math display">\[
Z_i=\widehat\Sigma^{-1/2}(X_i-\overline X),
\qquad a(\mu)=\widehat\Sigma^{-1/2}(\overline X-\mu).
\]</div>{% endraw %}

<p>The empirical centering and standardization give exact identities:</p>

{% raw %}<div class="math display">\[
\sum_iZ_i=0,
\qquad \frac1n\sum_iZ_iZ_i'=I_p,
\qquad
\mathbb E_\pi[Z_{\pi_r(1)}Z_{\pi_r(2)}']=-\frac{I_p}{n-1}.
\]</div>{% endraw %}

<p>For the last identity, sum over distinct indices and use {% raw %}<span class="math inline">\(\sum_{i\ne j}Z_iZ_j'=-\sum_iZ_iZ_i'=-nI_p\)</span>{% endraw %}. The negative covariance comes from sampling without replacement from a centered finite population. It does not describe the sign of dependence in the process that generated the data.</p>

<p>Counting the diagonal and off-diagonal terms in a subsample sum now gives</p>

{% raw %}<div class="math display">\[
\mathbb E_\pi M_r(\mu)=\sqrt{b/p}\,a(\mu),
\qquad
\operatorname{Var}_\pi M_r(\mu)=\frac{n-b}{p(n-1)}I_p.
\]</div>{% endraw %}

<span id="10-235-from-conditional-randomization-to-a-limit-theorem"></span>
<p>Define {% raw %}<span class="math inline">\(W_n=R^{-1/2}\sum_r M_r(\overline X)\)</span>{% endraw %}. Adding and subtracting the sample mean yields the central identity:</p>

{% raw %}<div class="math display">\[
S_M(\mu)
=\left\|W_n+\sqrt{Rb/p}\,a(\mu)\right\|^2.
\]</div>{% endraw %}

<p>Conditional on the data, {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} is a sum of independent, centered resampling contributions. Its covariance is known exactly. The other term is fixed by the observed sample and is multiplied by {% raw %}<span class="math inline">\(\sqrt{Rb}\)</span>{% endraw %}. Under the null it contains estimation error; under an alternative it also contains the population mean shift. Repeating the resampling cannot distinguish these two sources of drift.</p>

<div id="ordering-free-mean-limit" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1 (a sufficient mean-statistic argument)</strong>. Suppose {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is fixed, {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Rb/n\to0\)</span>{% endraw %}, and, for some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb E_\pi\|M_r(\overline X)\|^{2+\delta}=O_p(1),
\qquad
Rb\,\|a(\mu_0)\|^2\xrightarrow{P}0.
\]</div>{% endraw %}

<p>Then the conditional distribution of {% raw %}<span class="math inline">\(T_M(\mu_0)\)</span>{% endraw %} converges in probability to {% raw %}<span class="math inline">\(\chi_p^2/p\)</span>{% endraw %}, and the same limit holds unconditionally.</p>
</div>

<p>The proof has two steps. First, the conditional Lyapunov sum satisfies</p>

{% raw %}<div class="math display">\[
\sum_{r=1}^R\mathbb E_\pi
\left\|\frac{M_r(\overline X)}{\sqrt R}\right\|^{2+\delta}
=R^{-\delta/2}\mathbb E_\pi\|M_r(\overline X)\|^{2+\delta}
=o_p(1).
\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(b/n\to0\)</span>{% endraw %}, the covariance of {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(I_p/p\)</span>{% endraw %}. Apply the conditional triangular-array CLT. One justification is to take a further subsequence along which the Lyapunov sum tends to zero and the covariance converges almost surely, then apply the ordinary CLT to those fixed arrays. Second, the drift in the central identity and the adjustment {% raw %}<span class="math inline">\(Rb/n\)</span>{% endraw %} vanish. Squaring the Gaussian norm proves the result. Bounded conditional characteristic functions also give unconditional convergence after taking expectations.</p>

<p>The proposition separates the proof obligations. Independent permutations provide the conditional independence needed for a CLT. Dependence and moment assumptions on the original observations must still establish the displayed moment and drift bounds. The remainder of the post explains how local dependence supplies that control.</p>

<h3 data-note-section="3" id="10-235-the-quadratic-term-and-the-bias-adjustments">3. Why the quadratic statistic permits more repetitions</h3>

<p>The U-type construction aggregates products within each subsample. For {% raw %}<span class="math inline">\(b\ge2\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(a=a(\mu)\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[
U_r(\mu)=\frac1{pb}\sum_{\substack{1\le j,\ell\le b\\j\ne\ell}}
(Z_{\pi_r(j)}+a)'(Z_{\pi_r(\ell)}+a),
\qquad
S_U(\mu)=\frac1{\sqrt R}\sum_{r=1}^R U_r(\mu).
\]</div>{% endraw %}

<p>Removing diagonal products has a purpose. For independent, mean-zero observations, a product involving two distinct observations has expectation zero, whereas a squared observation contributes its variance. The resulting statistic responds to a departure of the mean through a quadratic term.</p>

<p>The empirical calculation also contains a finite-population correction. There are {% raw %}<span class="math inline">\(b(b-1)\)</span>{% endraw %} ordered pairs, so</p>

{% raw %}<div class="math display">\[
\mathbb E_\pi U_r(\mu)
=(b-1)\left(\frac{\|a\|^2}{p}-\frac1{n-1}\right).
\]</div>{% endraw %}

<p>The linear term cancels in this conditional expectation because {% raw %}<span class="math inline">\(\mathbb E_\pi Z_{\pi_r(j)}=0\)</span>{% endraw %}. It remains in the random statistic. To see its size, compare the two centerings using the same permutations. Each selected observation appears {% raw %}<span class="math inline">\(b-1\)</span>{% endraw %} times in each cross-term, which gives</p>

{% raw %}<div class="math display">\[
S_U(\mu)-S_U(\overline X)
=\underbracket{\frac{2(b-1)}{\sqrt{pb}}a'W_n}_{\text{centered linear term}}
+\underbracket{\frac{\sqrt R(b-1)}p\|a\|^2}_{\text{quadratic drift}}.
\]</div>{% endraw %}

<p>The linear term has conditional mean zero and variance</p>

{% raw %}<div class="math display">\[
\frac{4(b-1)^2(n-b)}{p^2b(n-1)}\|a\|^2.
\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(\|a(\mu_0)\|=O_p(n^{-1/2})\)</span>{% endraw %}, this term is {% raw %}<span class="math inline">\(O_p(\sqrt{b/n})\)</span>{% endraw %}, while the drift is {% raw %}<span class="math inline">\(O_p(\sqrt R\,b/n)\)</span>{% endraw %}. For the mean statistic the drift inside the squared norm is {% raw %}<span class="math inline">\(O_p(\sqrt{Rb/n})\)</span>{% endraw %}. Thus the quadratic construction replaces the mean restriction {% raw %}<span class="math inline">\(Rb/n\to0\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\sqrt R\,b/n\to0\)</span>{% endraw %}, provided the conditional variance and higher moments are also controlled. The centered linear term remains, but its order does not grow with the repetition count.</p>

<p>There is one normalization to keep explicit. Set {% raw %}<span class="math inline">\(v_n^2=\operatorname{Var}_\pi U_r(\overline X)\)</span>{% endraw %}. If this variance stays bounded away from zero and the conditional Lyapunov condition holds, the centered sum divided by {% raw %}<span class="math inline">\(v_n\)</span>{% endraw %} is asymptotically standard normal. The raw sum need not have unit variance. For example, for independent vectors {% raw %}<span class="math inline">\(Y_1,\ldots,Y_b\)</span>{% endraw %} with mean zero and covariance {% raw %}<span class="math inline">\(I_p\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(\frac1{pb}\sum_{j\ne\ell}Y_j'Y_\ell\right)
=\frac{2(b-1)}{pb}.
\]</div>{% endraw %}

<p>Only identical and reversed pairs contribute to this variance. This benchmark explains why a Gaussian approximation must retain its scale. Using the conditional distribution of {% raw %}<span class="math inline">\(S_U(\overline X)\)</span>{% endraw %} for critical values incorporates that scale directly. The argument here establishes the exact drift comparison; a full U-type limit additionally requires the variance and moment conditions.</p>

<h3 data-note-section="4" id="10-235-measure-how-often-dependence-matters">4. Measuring local dependence without locating it</h3>

<p>Consider independent clusters whose memberships are unobserved. Observations within a cluster can be strongly dependent. Nevertheless, a small random set will usually meet several clusters when there are many small clusters. We can then split the set into independent groups. This motivates a coefficient that asks whether a selected set admits a weakly dependent split.</p>

<p>For disjoint nonempty sets {% raw %}<span class="math inline">\(A_1,A_2\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
c_n(A_1,A_2)=
\sup_{f\in\mathcal F_{|A_1|},\,g\in\mathcal F_{|A_2|}}
\left|\operatorname{Corr}\big(f(X_{A_1}),g(X_{A_2})\big)\right|.
\]</div>{% endraw %}

<p>The function classes specify which forms of dependence the argument controls. They must be closed under permutations of their arguments and have square-integrable evaluations; a zero-variance correlation is assigned value zero. Polynomial products are useful for the moment bounds below. Let {% raw %}<span class="math inline">\(\mathcal P(A)\)</span>{% endraw %} be the partitions of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} into two nonempty sets. For {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
c_n(A)=\min_{\{A_1,A_2\}\in\mathcal P(A)}c_n(A_1,A_2),
\qquad
\lambda_n(k)=\binom nk^{-1}\sum_{|A|=k}c_n(A).
\]</div>{% endraw %}

<p>The minimum is essential: one independent split makes {% raw %}<span class="math inline">\(c_n(A)=0\)</span>{% endraw %}, even if there is substantial dependence within either part. With restricted function classes, a zero coefficient need not imply full independence. The coefficient averages over every set of size {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, so relabeling observations leaves it unchanged. Equivalently, average over uniform permutations: each set appears as the first {% raw %}<span class="math inline">\(k\)</span>{% endraw %} indices in exactly {% raw %}<span class="math inline">\(k!(n-k)!\)</span>{% endraw %} permutations. The singleton convention is {% raw %}<span class="math inline">\(c_n(A)=1\)</span>{% endraw %}, so decay statements begin at {% raw %}<span class="math inline">\(k=2\)</span>{% endraw %}.</p>

<span id="10-235-count-connected-sets-correctly"></span>
<p>A dependency graph makes this coefficient concrete. Such a graph has the property that observation vectors on disjoint vertex sets are independent whenever there is no edge between the sets. It need not be observed; here it is a device for verifying an assumption.</p>

<div id="ordering-free-graph" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2 (connected-set bound)</strong>. If a dependency graph has maximum degree {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %}, then, for each fixed {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %} and sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\lambda_n(k)\le C_k\left(\frac{d_n}{n}\right)^{k-1},
\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(C_k\)</span>{% endraw %} depends only on {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>
</div>

<p>If the graph induced by a selected set {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is disconnected, its components give an independent split. Hence {% raw %}<span class="math inline">\(c_n(A)\le\mathbf1\{G_n[A]\text{ is connected}\}\)</span>{% endraw %}. To count connected sets, choose a root in {% raw %}<span class="math inline">\(n\)</span>{% endraw %} ways and grow the set one vertex at a time. After {% raw %}<span class="math inline">\(j\)</span>{% endraw %} vertices have been selected, there are at most {% raw %}<span class="math inline">\(jd_n\)</span>{% endraw %} choices adjacent to an earlier vertex. Every connected set admits such a growth order, obtained from a rooted spanning tree. Therefore</p>

{% raw %}<div class="math display">\[
\lambda_n(k)
\le\frac{n\prod_{j=1}^{k-1}(jd_n)}{\binom nk}
=\frac{k!(k-1)!d_n^{k-1}}{(n-1)\cdots(n-k+1)}.
\]</div>{% endraw %}

<p>This proves the bound. A new vertex may attach to any earlier vertex, so the count includes stars as well as paths. For pairs, direct edge counting gives the sharper inequality {% raw %}<span class="math inline">\(\lambda_n(2)\le d_n/(n-1)\)</span>{% endraw %}.</p>

<span id="10-235-two-calculations-with-random-subsets"></span>
<p>The same counting explains the small-subsample heuristic. Let {% raw %}<span class="math inline">\(N_E\)</span>{% endraw %} be the number of graph edges among {% raw %}<span class="math inline">\(b\)</span>{% endraw %} uniformly selected distinct observations. Then</p>

{% raw %}<div class="math display">\[
\mathbb E_\pi N_E
=\binom b2\frac{2|E_n|}{n(n-1)},
\qquad
 P_\pi(N_E\ge1)\le\frac{b(b-1)d_n}{2(n-1)}.
\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(b^2d_n/n\to0\)</span>{% endraw %} suffices for a subsample to contain no dependence edges with probability tending to one. This is a useful intuition, but the formal moment argument can allow some dependent observations in a subsample. Nor does it require all {% raw %}<span class="math inline">\(R\)</span>{% endraw %} subsamples to be simultaneously edgeless: conditional independence across repetitions comes from the resampling design.</p>

<p>For independent clusters of sizes {% raw %}<span class="math inline">\(m_1,\ldots,m_G\)</span>{% endraw %}, the corresponding bound is</p>

{% raw %}<div class="math display">\[
\lambda_n(k)\le\frac{\sum_{g=1}^G(m_g)_k}{(n)_k},
\qquad (m)_k=m(m-1)\cdots(m-k+1),
\]</div>{% endraw %}

<p>with {% raw %}<span class="math inline">\((m)_k=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(m&lt;k\)</span>{% endraw %}. Equality holds in the scalar model {% raw %}<span class="math inline">\(X_i=V_g\)</span>{% endraw %} within cluster {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, where the cluster shocks are independent, nondegenerate, and square-integrable and the function classes include coordinate projections. For equal cluster size {% raw %}<span class="math inline">\(m\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\lambda_n(2)=\frac{m-1}{n-1},
\qquad
\lambda_n(3)=\frac{(m-1)(m-2)}{(n-1)(n-2)}.
\]</div>{% endraw %}

<p>Bounded cluster sizes make these coefficients small. A fixed number of growing clusters does not: the coefficients approach {% raw %}<span class="math inline">\(G^{1-k}\)</span>{% endraw %}. In the same example with variance-one cluster shocks, {% raw %}<span class="math inline">\(\operatorname{Var}(\overline X)=1/G=m/n\)</span>{% endraw %}. Increasing the number of copies within each cluster adds observations without adding independent information.</p>

<h3 data-note-section="5" id="ordering-free-proof-techniques">5. Turning local dependence into the required bounds</h3>

<p>The first task is to control the original sample mean. Suppose the dependency graph has maximum degree {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %}, the observations have mean {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\max_i\mathbb E\|X_i-\mu_0\|^2\le C\)</span>{% endraw %}. Only diagonal terms and graph edges can contribute to its variance. Cauchy–Schwarz gives</p>

{% raw %}<div class="math display">\[
\mathbb E\|\overline X-\mu_0\|^2
=\frac1{n^2}\sum_{i,j}\mathbb E[(X_i-\mu_0)'(X_j-\mu_0)]
\le\frac{C(1+d_n)}n.
\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(\|\widehat\Sigma^{-1}\|=O_p(1)\)</span>{% endraw %}, Markov's inequality yields {% raw %}<span class="math inline">\(\|a(\mu_0)\|^2=O_p((1+d_n)/n)\)</span>{% endraw %}. The mean-statistic drift therefore vanishes when</p>

{% raw %}<div class="math display">\[
\frac{Rb(1+d_n)}n\longrightarrow0.
\]</div>{% endraw %}

<p>This calculation needs a rate for the sample mean, without requiring a Gaussian limit for it or an estimate of its long-run variance. Under the same bound, the U-type comparison has a linear remainder of order {% raw %}<span class="math inline">\(O_p(\sqrt{b(1+d_n)/n})\)</span>{% endraw %} and a quadratic drift of order {% raw %}<span class="math inline">\(O_p(\sqrt R\,b(1+d_n)/n)\)</span>{% endraw %}.</p>

<p>The second task is to bound the moments needed by the conditional CLT. A proof must do more than observe that a typical pair is weakly dependent. Expanding a fourth moment of a subsample sum produces products with up to four distinct indices; a fourth moment of a quadratic contribution can involve up to eight. Repeated indices must be counted separately because powers of one observation do not become independent.</p>

<p>Song's recursive moment argument groups terms by their distinct indices and multiplicities. For each resulting product, split the distinct indices into two nonempty sets and write</p>

{% raw %}<div class="math display">\[
\mathbb E[FG]=\operatorname{Cov}(F,G)+\mathbb E[F]\mathbb E[G].
\]</div>{% endraw %}

<p>Choose a split attaining the minimum in {% raw %}<span class="math inline">\(c_n(A)\)</span>{% endraw %}. The covariance term is bounded by this coefficient times the relevant moment factors. Apply the same argument recursively to the two shorter products. Centered singleton factors vanish; products of nonzero lower-order moments remain. For example, a product involving two independent dependent pairs can have nonzero expectation even though the four-element set has coefficient zero. The recursion retains both pair factors. This is why the minimum over splits is useful, and why it cannot by itself bound every joint moment by a single coefficient.</p>

<p>Averaging over permutations converts the remaining coefficients to {% raw %}<span class="math inline">\(\lambda_n(k)\)</span>{% endraw %}. The count of terms with {% raw %}<span class="math inline">\(k\)</span>{% endraw %} distinct indices explains the conditions on {% raw %}<span class="math inline">\(b^k\lambda_n(k)\)</span>{% endraw %}: Song controls these quantities through {% raw %}<span class="math inline">\(k=4\)</span>{% endraw %} for the mean construction and through {% raw %}<span class="math inline">\(k=8\)</span>{% endraw %} for the quadratic construction, together with moment and covariance assumptions. With bounded graph degree, the connected-set bound gives {% raw %}<span class="math inline">\(b^k\lambda_n(k)=O(b^k/n^{k-1})\)</span>{% endraw %}. The restriction {% raw %}<span class="math inline">\(b^2/n=O(1)\)</span>{% endraw %} bounds these expressions for every fixed {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}. It permits more than the stronger heuristic requirement that a selected subsample be edgeless with probability approaching one.</p>

<p>The same dependence control must justify empirical standardization. With common means, bounded fourth moments, bounded graph degree, and a uniformly positive definite average marginal covariance, applying a variance bound to the entries of {% raw %}<span class="math inline">\(X_iX_i'\)</span>{% endraw %} gives a law of large numbers for the empirical second moments. Subtracting {% raw %}<span class="math inline">\(\overline X\overline X'\)</span>{% endraw %} then controls {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} and its inverse. This verifies an assumption used in the drift calculation; it does not turn {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} into an estimator of the variance of the sample mean.</p>

<h3 data-note-section="6" id="ordering-free-calibration-and-power">6. Calibrating the test</h3>

<p>To test a candidate {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, compute the adjusted statistic using one batch of {% raw %}<span class="math inline">\(R\)</span>{% endraw %} permutations. Independently generate {% raw %}<span class="math inline">\(L\)</span>{% endraw %} further batches, each containing {% raw %}<span class="math inline">\(R\)</span>{% endraw %} permutations, and compute {% raw %}<span class="math inline">\(S_M(\overline X)\)</span>{% endraw %} or {% raw %}<span class="math inline">\(S_U(\overline X)\)</span>{% endraw %} in those batches. Reject when the candidate statistic exceeds the empirical {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} quantile of the centered reference statistics. Increasing {% raw %}<span class="math inline">\(L\)</span>{% endraw %} estimates this quantile more precisely; increasing {% raw %}<span class="math inline">\(R\)</span>{% endraw %} changes the statistic and the contribution of the sample-mean error.</p>

<p>The adjustments in Song's construction are</p>

{% raw %}<div class="math display">\[
T_M(\mu)=S_M(\mu)-\frac{Rb}{n},
\qquad
T_U(\mu)=S_U(\mu)-\frac{\sqrt R(b-1)}n.
\]</div>{% endraw %}

<p>Their benchmark is the contribution of mean-estimation error under independent observations. With a population standardizer and independent observations of common covariance {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb E\left[\frac{\|\Sigma^{-1/2}(\overline X-\mu_0)\|^2}{p}\right]
=\frac1n.
\]</div>{% endraw %}

<p>Substitute this into the quadratic drift in each statistic to obtain the adjustments. They are not exact conditional centerings. In particular, {% raw %}<span class="math inline">\(\mathbb E_\pi U_r(\overline X)=-(b-1)/(n-1)\)</span>{% endraw %}. The drift restrictions make this finite-population term and the displayed adjustments asymptotically negligible, while the adjustments can affect finite-sample calibration.</p>

<p>Under the null, the tested statistic and its empirical reference approach the same continuous law: the conditional CLT gives the reference distribution, and the drift bounds justify replacing the empirical center by the null mean. The chi-square and nondegenerate normal limits are strictly increasing near their relevant quantiles, so those quantiles converge; {% raw %}<span class="math inline">\(L\to\infty\)</span>{% endraw %} removes simulation error. This gives asymptotic calibration. Relabeling invariance of the dependence coefficient supplies neither exchangeability of the observations nor an exact finite-sample permutation test. The <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}#resampling-size-approximation">next post</a> examines the stronger approximation needed to compare rates of size error.</p>

<h3 data-note-section="7" id="10-235-what-ordering-free-does-not-mean">7. What information the method still needs</h3>

<p>The dependence ordering can be unobserved, but its strength still matters. In the equal-cluster example, the mean drift is governed by {% raw %}<span class="math inline">\(Rb/G\)</span>{% endraw %}, using the population standardizer. More copies within the same clusters cannot make this quantity small.</p>

<p>A common shock can be accommodated by defining the correlations conditional on a sigma-field {% raw %}<span class="math inline">\(\mathcal C_n\)</span>{% endraw %}, provided the corresponding conditional moment and dependence conditions hold. The mean-inference setup also requires {% raw %}<span class="math inline">\(\mathbb E[X_i\mid\mathcal C_n]=\mu_0\)</span>{% endraw %}. A shock that changes variances while preserving this conditional mean can fit the framework. An additive shock {% raw %}<span class="math inline">\(X_i=\mu_0+V+\varepsilon_i\)</span>{% endraw %} generally does not: conditioning on {% raw %}<span class="math inline">\(V\)</span>{% endraw %} leaves the conditional mean {% raw %}<span class="math inline">\(\mu_0+V\)</span>{% endraw %}, and random subsampling cannot remove that shared displacement.</p>

<p>The dependence bounds above supply the moment and drift control needed by the conditional limit argument. They also limit how much signal it can accumulate. The <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">size and local-power post</a> takes up that tradeoff, keeping the null error and the response to a false null in the same calculation.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-song_ordering-free_2018" class="csl-entry" role="listitem">
Song, Kyungchul. 2018. <span>“Ordering-Free Inference from Locally Dependent Data.”</span> arXiv:1604.00447v3, June 29. <a href="https://arxiv.org/abs/1604.00447v3">https://arxiv.org/abs/1604.00447v3</a>. Sections 2.2–2.4 and the appendix and supplemental moment arguments.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-07-13-exposure-mappings-and-horvitzthompson-inference %}">Exposure Mappings and Horvitz–Thompson</a> · Next: <a href="{% post_url 2024-09-17-resampled-statistics-size-and-local-power %}">Resampled Statistics: Size and Local Power</a></p></nav>

</div>
