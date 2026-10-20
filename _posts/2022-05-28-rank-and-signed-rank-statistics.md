---
layout: "post"
title: "Rank and Signed-Rank Statistics"
date: "2022-05-28"
tags: ["statistics", "asymptotic theory"]
excerpt: "The technical lemma allows us to investigate the asymptotics without needing to verify Lindeberg condition (in)directly."
note_series: "Projections, U-statistics, and ranks"
note_source: "assets/notes/Overleaf Projects (32 items)/Projections and U- and Sign-Statistics (Chapters 11-13)/main.tex"
redirect_from: ["/2022/05/28/rank-statistics-and-their-asymptotic-distribution/", "/2022/07/09/constructing-rank-statistics/", "/2022/08/20/signed-rank-statistics/"]
---

<div class="note-content" markdown="0">

<p>Ranks discard the numerical spacing between observations while retaining their order. Under a continuous common distribution, their permutation law is known, which makes them useful for testing. To study power and large-sample behavior, we approximate a rank statistic by a sum of independent terms through its projection. The choice of score then determines which alternatives the test is sensitive to.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. A projection replaces a statistic by its first-order conditional-expectation terms; for a U-statistic, these terms are obtained from its symmetric kernel. The <a href="{% post_url 2022-03-05-projection-methods-and-u-statistics %}">projection identities</a> fix the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} interpretation.</p>

<div id="basics-of-rank-statistics" data-note-section="title"></div>

<p>Let {% raw %}<span class="math inline">\(X_{N(1)}&lt;\cdots&lt;X_{N(N)}\)</span>{% endraw %} be the order statistics of an i.i.d. real sample from a continuous cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. There are no ties almost surely. The rank {% raw %}<span class="math inline">\(R_{Ni}\)</span>{% endraw %} is determined by {% raw %}<span class="math inline">\(X_i=X_{N(R_{Ni})}\)</span>{% endraw %}. Continuity suffices for the rank laws below; a density is needed only for the density formulas.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1.</strong> A rank statistic is any measurable function of the vector {% raw %}<span class="math inline">\(R_N=(R_{N1},\ldots,R_{NN})\)</span>{% endraw %}.</p>
</div>

<span id="Eq:LinearRankStat"></span>

<p>A general linear rank statistic is {% raw %}<span class="math inline">\(\sum_i a_N(i,R_{Ni})\)</span>{% endraw %}, for an array {% raw %}<span class="math inline">\(a_N\)</span>{% endraw %}. We focus on simple linear rank statistics, whose array factors into deterministic coefficients and scores:
</p>
{% raw %}<div class="math display">\[T_N=\sum_{i=1}^NC_{Ni}a_{N,R_{Ni}}.\]</div>{% endraw %}
<p>
Write {% raw %}<span class="math inline">\(\overline C_N=N^{-1}\sum_iC_{Ni}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline a_N=N^{-1}\sum_ka_{Nk}\)</span>{% endraw %}.</p>

<div id="Lem:RankStatistics_Analysis" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2.</strong> The rank vector is uniform on the {% raw %}<span class="math inline">\(N!\)</span>{% endraw %} permutations of {% raw %}<span class="math inline">\(1,\ldots,N\)</span>{% endraw %}, and is independent of the ordered sample. If {% raw %}<span class="math inline">\(F\)</span>{% endraw %} has density {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, the ordered sample has joint density {% raw %}<span class="math inline">\(N!\prod_if(x_i)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(x_1&lt;\cdots&lt;x_N\)</span>{% endraw %}, and its {% raw %}<span class="math inline">\(k\)</span>{% endraw %}th coordinate has density
</p>
{% raw %}<div class="math display">\[\frac{N!}{(k-1)!(N-k)!}F(x)^{k-1}(1-F(x))^{N-k}f(x).\]</div>{% endraw %}
<p>
For uniform order statistics {% raw %}<span class="math inline">\(U_{N(k)}\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[EU_{N(k)}=\frac{k}{N+1},\qquad \operatorname{Var}U_{N(k)}=\frac{k(N-k+1)}{(N+1)^2(N+2)}.\]</div>{% endraw %}
<p>
For any integrable {% raw %}<span class="math inline">\(H\)</span>{% endraw %} and permutation {% raw %}<span class="math inline">\(r\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[E[H(X_1,\ldots,X_N)\mid R_N=r]=E H(X_{N(r_1)},\ldots,X_{N(r_N)}).\]</div>{% endraw %}
<p>
Finally, for {% raw %}<span class="math inline">\(N\ge2\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[ET_N=N\overline C_N\overline a_N,\qquad \operatorname{Var}T_N=\frac{\sum_i(C_{Ni}-\overline C_N)^2\sum_k(a_{Nk}-\overline a_N)^2}{N-1}.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Exchangeability assigns the same probability to each ordering even after restricting the ordered values to any measurable set. The ordering events partition the sample space, so each has conditional probability {% raw %}<span class="math inline">\(1/N!\)</span>{% endraw %}. This proves uniformity, independence, and the conditional identity. With a density, summing the {% raw %}<span class="math inline">\(N!\)</span>{% endraw %} permuted joint densities gives the ordered joint density. For the marginal, choose which observation is at {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, which {% raw %}<span class="math inline">\(k-1\)</span>{% endraw %} lie below it, and integrate the remaining coordinates above it. For uniforms, integrating powers against this beta density yields {% raw %}<span class="math inline">\(EU_{N(k)}=k/(N+1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(EU_{N(k)}^2=k(k+1)/[(N+1)(N+2)]\)</span>{% endraw %}, giving the variance.</p>

<p>Put {% raw %}<span class="math inline">\(v_a=N^{-1}\sum_k(a_{Nk}-\overline a_N)^2\)</span>{% endraw %}. A single random score has variance {% raw %}<span class="math inline">\(v_a\)</span>{% endraw %}. Two scores at distinct positions have covariance {% raw %}<span class="math inline">\(-v_a/(N-1)\)</span>{% endraw %}, since they are drawn without replacement, or because their total is constant. Expanding the variance of {% raw %}<span class="math inline">\(\sum_i(C_{Ni}-\overline C_N)a_{N,R_{Ni}}\)</span>{% endraw %} and using {% raw %}<span class="math inline">\(\sum_i(C_{Ni}-\overline C_N)=0\)</span>{% endraw %} gives the stated formula. ◻</p>
</div>

<div id="result-3" class="example" data-note-number="3" data-note-kind="Example">
<p><strong>Example 3.</strong> Pool independent samples {% raw %}<span class="math inline">\(X_1,\ldots,X_m,Y_1,\ldots,Y_n\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(N=m+n\)</span>{% endraw %}. Under equality of their continuous distributions the pooled ranks have the preceding permutation law. Large values of the Wilcoxon rank sum {% raw %}<span class="math inline">\(W=\sum_{j=1}^nR_{N,Y_j}\)</span>{% endraw %} provide evidence that the second distribution is stochastically larger. Stochastic ordering does not require every second-sample rank to exceed every first-sample rank. Without ties,
</p>
{% raw %}<div class="math display">\[W=\frac{n(n+1)}2+\sum_{i=1}^m\sum_{j=1}^n\mathbf1\{X_i&lt;Y_j\};\]</div>{% endraw %}
<p>
the within-second-sample ranks always sum to {% raw %}<span class="math inline">\(n(n+1)/2\)</span>{% endraw %}. This connects the rank sum with the Mann–Whitney U-statistic.</p>
</div>

<span id="Eq:Score_type1"></span>

<span id="Eq:Score_type2"></span>

<p>A score-generating function {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} gives exact scores or grid scores, respectively:
</p>
{% raw %}<div class="math display">\[a_{Nk}=E\varphi(U_{N(k)}),\qquad b_{Nk}=\varphi\left(\frac{k}{N+1}\right).\]</div>{% endraw %}
<p>
Here {% raw %}<span class="math inline">\(U_{N(k)}\)</span>{% endraw %} is the {% raw %}<span class="math inline">\(k\)</span>{% endraw %}th order statistic of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} independent uniforms, not a single uniform variable. Local optimality requires a particular score function determined by the alternative model; arbitrary exact scores are not automatically optimal.</p>

<div id="result-4" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4.</strong> Suppose {% raw %}<span class="math inline">\(\varphi\in L^2(0,1)\)</span>{% endraw %} is not constant almost everywhere, and {% raw %}<span class="math inline">\(A_N=\sum_i(C_{Ni}-\overline C_N)^2&gt;0\)</span>{% endraw %}. For either score sequence {% raw %}<span class="math inline">\(d_{Nk}\)</span>{% endraw %}, define
</p>
{% raw %}<div class="math display">\[T_N=\sum_iC_{Ni}d_{N,R_{Ni}},\qquad \widetilde T_N=N\overline C_N\overline d_N+\sum_i(C_{Ni}-\overline C_N)\varphi(F(X_i)).\]</div>{% endraw %}
<p>
For exact scores {% raw %}<span class="math inline">\(d=a\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[ET_N=E\widetilde T_N,\qquad\frac{E(T_N-\widetilde T_N)^2}{\operatorname{Var}T_N}\longrightarrow0.\]</div>{% endraw %}
<p>
The same conclusion holds for grid scores {% raw %}<span class="math inline">\(d=b\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is continuous almost everywhere and
</p>
{% raw %}<div class="math display">\[\frac1N\sum_{k=1}^N\varphi^2\left(\frac{k}{N+1}\right)\longrightarrow\int_0^1\varphi^2(u)\,du.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof for exact scores.</em> Set {% raw %}<span class="math inline">\(U_i=F(X_i)\)</span>{% endraw %}; these are independent uniforms and their ranks agree with those of {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} almost surely. The preceding conditional identity gives {% raw %}<span class="math inline">\(a_{N,R_{Ni}}=E[\varphi(U_i)\mid R_N]\)</span>{% endraw %}, whence {% raw %}<span class="math inline">\(T_N=E[\widetilde T_N\mid R_N]\)</span>{% endraw %}. This already proves equality of means.</p>

<p>The sigma-fields {% raw %}<span class="math inline">\(\mathcal G_N=\sigma(R_N)\)</span>{% endraw %} increase: deleting the last label from a rank vector recovers the earlier vector. Also,
</p>
{% raw %}<div class="math display">\[\frac{R_{N1}}N=\frac1N+\frac1N\sum_{j=2}^N\mathbf1\{U_j\le U_1\}\longrightarrow U_1\quad\text{almost surely}.\]</div>{% endraw %}
<p>
For each fixed value {% raw %}<span class="math inline">\(u\)</span>{% endraw %} of {% raw %}<span class="math inline">\(U_1\)</span>{% endraw %}, the ordinary strong law gives this limit with probability one; integrating over {% raw %}<span class="math inline">\(u\)</span>{% endraw %} justifies the assertion jointly. Thus {% raw %}<span class="math inline">\(U_1\)</span>{% endraw %}, and hence {% raw %}<span class="math inline">\(\varphi(U_1)\)</span>{% endraw %}, is measurable in {% raw %}<span class="math inline">\(\mathcal G_\infty\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} martingale convergence theorem yields
</p>
{% raw %}<div class="math display">\[E\left[a_{N,R_{N1}}-\varphi(U_1)\right]^2\longrightarrow0.\]</div>{% endraw %}
<p>
The limit is the variable {% raw %}<span class="math inline">\(\varphi(U_1)\)</span>{% endraw %} itself, not its expectation. In particular {% raw %}<span class="math inline">\(\operatorname{Var}(a_{N,R_{N1}})\to\sigma_\varphi^2=\operatorname{Var}\varphi(U_1)&gt;0\)</span>{% endraw %}. The exact variance formula gives
</p>
{% raw %}<div class="math display">\[\frac{\operatorname{Var}T_N}{\operatorname{Var}\widetilde T_N}=\frac{N}{N-1}\frac{\operatorname{Var}(a_{N,R_{N1}})}{\sigma_\varphi^2}\longrightarrow1.\]</div>{% endraw %}
<p>
Since {% raw %}<span class="math inline">\(T_N\)</span>{% endraw %} is a projection of {% raw %}<span class="math inline">\(\widetilde T_N\)</span>{% endraw %}, its mean square error is the difference of these variances. This proves the first assertion. ◻</p>

<p><em>Proof for grid scores.</em> The rank convergence, almost-everywhere continuity, and the assumed second moments imply {% raw %}<span class="math inline">\(b_{N,R_{N1}}\to\varphi(U_1)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. Explicitly, convergence in probability together with convergence of the squared expectations gives uniform integrability of the squares; then {% raw %}<span class="math inline">\(|b_{N,R_{N1}}-\varphi(U_1)|^2\le2b_{N,R_{N1}}^2+2\varphi(U_1)^2\)</span>{% endraw %} and truncation give convergence of the mean square error. Combining this with the exact-score limit gives
</p>
{% raw %}<div class="math display">\[\frac1N\sum_k(b_{Nk}-a_{Nk})^2\longrightarrow0.\]</div>{% endraw %}
<p>
Apply Lemma 2 to the centered difference of the two rank statistics. Its variance is at most {% raw %}<span class="math inline">\(A_N(N-1)^{-1}\sum_k(b_{Nk}-a_{Nk})^2=o(A_N)\)</span>{% endraw %}, while either statistic has variance asymptotic to {% raw %}<span class="math inline">\(A_N\sigma_\varphi^2\)</span>{% endraw %}. Their centered independent approximations coincide. The triangle inequality in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} therefore proves the assertion for grid scores, including the respective deterministic means. ◻</p>
</div>

<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5.</strong> The approximation theorem alone does not give a normal limit. If additionally
</p>
{% raw %}<div class="math display">\[\frac{\max_i(C_{Ni}-\overline C_N)^2}{A_N}\longrightarrow0,\]</div>{% endraw %}
<p>
then {% raw %}<span class="math inline">\((T_N-ET_N)/\sqrt{\operatorname{Var}T_N}\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}. To verify Lindeberg, put {% raw %}<span class="math inline">\(d_{Ni}=(C_{Ni}-\overline C_N)/\sqrt{A_N}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_i=(\varphi(U_i)-E\varphi(U_i))/\sigma_\varphi\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\sum_i d_{Ni}^2=1\)</span>{% endraw %}, the Lindeberg sum is bounded by
</p>
{% raw %}<div class="math display">\[E\left[Z_1^2\mathbf1\left\{|Z_1|&gt;\frac\varepsilon{\max_i|d_{Ni}|}\right\}\right]\longrightarrow0.\]</div>{% endraw %}
<p>
The independent-array CLT and Theorem 4 now apply.</p>
</div>

<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6.</strong> For a nonnegative nondecreasing {% raw %}<span class="math inline">\(\varphi\in L^2(0,1)\)</span>{% endraw %}, monotonicity gives
</p>
{% raw %}<div class="math display">\[\frac1N\sum_{k=1}^N\varphi^2\left(\frac{k}{N+1}\right)\le\frac{N+1}{N}\int_0^1\varphi^2(u)\,du.\]</div>{% endraw %}
<p>
Indeed each sampled value is bounded by the average over the interval immediately to its right. Monotone functions are continuous almost everywhere; Fatou applied to {% raw %}<span class="math inline">\(\varphi^2(R_{N1}/(N+1))\)</span>{% endraw %} gives the matching lower limit. For a nonnegative nonincreasing function, use intervals to the left. A signed monotone function splits into its positive and negative parts; apply these bounds to their squares separately. Thus any monotone square-integrable score satisfies the grid condition. Bounded-variation functions on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} also satisfy it, since their squares are bounded and Riemann integrable. Nonnegativity alone would not justify the displayed inequality.</p>
</div>

<div id="result-7" class="example" data-note-number="7" data-note-kind="Example">
<p><strong>Example 7.</strong> For two samples, take {% raw %}<span class="math inline">\(C_{Ni}=0\)</span>{% endraw %} on the first {% raw %}<span class="math inline">\(m\)</span>{% endraw %} observations and {% raw %}<span class="math inline">\(C_{Ni}=1\)</span>{% endraw %} on the last {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\overline C_N=n/N\)</span>{% endraw %} and
</p>
{% raw %}<div class="math display">\[A_N=m(n/N)^2+n(m/N)^2=\frac{mn}{N}.\]</div>{% endraw %}
<p>
If {% raw %}<span class="math inline">\(m/N\to\lambda\in(0,1)\)</span>{% endraw %}, the maximal squared centered coefficient divided by {% raw %}<span class="math inline">\(A_N\)</span>{% endraw %} is {% raw %}<span class="math inline">\(O(N^{-1})\)</span>{% endraw %}, proving the CLT condition.</p>
</div>

<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8.</strong> For {% raw %}<span class="math inline">\(\varphi(u)=u\)</span>{% endraw %}, exact and grid scores coincide: {% raw %}<span class="math inline">\(a_{Nk}=k/(N+1)\)</span>{% endraw %}. The normalized Wilcoxon rank sum {% raw %}<span class="math inline">\(W_N=\sum_{j=1}^nR_{N,Y_j}/(N+1)\)</span>{% endraw %}, used to test equality of two distributions, has independent approximation
</p>
{% raw %}<div class="math display">\[\widetilde W_N=\frac n2-\frac nN\sum_{i=1}^mF(X_i)+\frac mN\sum_{j=1}^nF(Y_j).\]</div>{% endraw %}
<p>
Under the continuous common null cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, both means are {% raw %}<span class="math inline">\(n/2\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[\operatorname{Var}W_N=\frac{mn}{12(N+1)},\qquad\operatorname{Var}\widetilde W_N=\frac{mn}{12N}.\]</div>{% endraw %}
<p>
For example, {% raw %}<span class="math inline">\(\sum_k(k/(N+1)-1/2)^2=N(N-1)/[12(N+1)]\)</span>{% endraw %}; substituting in Lemma 2 yields the first variance. Independence of the uniform transforms gives the second. This is a two-sample distribution test, not a test of independence between paired coordinates.</p>
</div>

<h3 data-note-section="1" id="general-prescription-for-constructing-rank-statistics">1. General Prescription for Constructing Rank Statistics</h3>

<p>For fixed {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, suppose independent observations have densities {% raw %}<span class="math inline">\(f_{C_{Ni}\theta}\)</span>{% endraw %}, with common density {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} under the null. Assume the model is differentiable in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} at zero:
</p>
{% raw %}<div class="math display">\[\|f_t-f_0-tf_0\ell_0\|_1=o(|t|),\qquad E_0|\ell_0(X)|&lt;\infty.\]</div>{% endraw %}
<p>
The integral of the derivative is zero, so {% raw %}<span class="math inline">\(E_0\ell_0=0\)</span>{% endraw %}. Telescoping the finite product of densities gives its {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} derivative {% raw %}<span class="math inline">\(\prod_i f_0(x_i)\sum_i C_{Ni}\ell_0(x_i)\)</span>{% endraw %}. Integrating this derivative on the event {% raw %}<span class="math inline">\(R_N=r\)</span>{% endraw %} yields
</p>
{% raw %}<div class="math display">\[P_\theta(R_N=r)=\frac1{N!}\left[1+\theta\sum_iC_{Ni}E_0\{\ell_0(X_i)\mid R_N=r\}\right]+o(|\theta|).\]</div>{% endraw %}
<p>
The remainder is uniform over the finitely many rank vectors. Thus the derivative of the power of a rank test {% raw %}<span class="math inline">\(\psi(R_N)\)</span>{% endraw %} at zero is {% raw %}<span class="math inline">\(E_0[\psi(R_N)S(R_N)]\)</span>{% endraw %}, where
</p>
{% raw %}<div class="math display">\[S(R_N)=\sum_i C_{Ni}a_{N,R_{Ni}},\qquad a_{Nk}=E_0\ell_0(X_{N(k)}).\]</div>{% endraw %}
<p>
Among tests of a given null rejection probability, rejecting at large {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, with boundary randomization if needed, maximizes this linear functional: integrate {% raw %}<span class="math inline">\((\psi^*-\psi)(S-c)\ge0\)</span>{% endraw %}. This is local most powerfulness for positive {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, not exact optimality at every fixed alternative. With the generalized quantile {% raw %}<span class="math inline">\(F_0^{-1}\)</span>{% endraw %}, the generating function is {% raw %}<span class="math inline">\(\varphi=\ell_0\circ F_0^{-1}\)</span>{% endraw %}.</p>

<div id="result-9" class="example" data-note-number="9" data-note-kind="Example">
<p><strong>Example 9.</strong> For the uncensored proportional-hazards family {% raw %}<span class="math inline">\(1-F_\theta=(1-F_0)^\theta\)</span>{% endraw %}, the null parameter is {% raw %}<span class="math inline">\(\theta=1\)</span>{% endraw %}. Its cumulative hazard is {% raw %}<span class="math inline">\(\Lambda_\theta=\theta\Lambda_0\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[f_\theta(x)=\theta f_0(x)(1-F_0(x))^{\theta-1},\qquad\left.\partial_\theta\log f_\theta(x)\right|_{\theta=1}=1+\log(1-F_0(x)).\]</div>{% endraw %}
<p>
Hence the local score is {% raw %}<span class="math inline">\(\varphi(u)=1+\log(1-u)\)</span>{% endraw %}. Its integral is zero and its square integral is finite. The sign in front of the logarithm matters: increasing the hazard makes lifetimes smaller.</p>

<p>The positive Savage scores are
</p>
{% raw %}<div class="math display">\[s_{Nk}=E[-\log(1-U_{N(k)})]=\sum_{j=N-k+1}^N\frac1j.\]</div>{% endraw %}
<p>
For a derivation, {% raw %}<span class="math inline">\(-\log(1-U_i)\)</span>{% endraw %} are independent rate-one exponentials. Their first minimum has mean {% raw %}<span class="math inline">\(1/N\)</span>{% endraw %}; by memorylessness each subsequent spacing has mean {% raw %}<span class="math inline">\(1/(N-1),1/(N-2),\ldots\)</span>{% endraw %}. Summing the first {% raw %}<span class="math inline">\(k\)</span>{% endraw %} spacings gives the formula. The exact likelihood scores are {% raw %}<span class="math inline">\(1-s_{Nk}\)</span>{% endraw %}. Adding a constant to all scores changes a linear rank statistic by a deterministic constant; negating them reverses the rejection direction. These are the complete-data scores associated with the log-rank construction; a censored-data test additionally requires the censoring model and risk sets.</p>
</div>

<h3 data-note-section="2" id="constructing-signed-rank-statistics">2. Constructing Signed Rank Statistics</h3>

<p>Write {% raw %}<span class="math inline">\(R_{Ni}^+\)</span>{% endraw %} for the rank of {% raw %}<span class="math inline">\(|X_i|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\epsilon_i=\operatorname{sgn}(X_i)\)</span>{% endraw %}. A signed-rank statistic is {% raw %}<span class="math inline">\(T_N=\sum_i a_{N,R_{Ni}^+}\epsilon_i\)</span>{% endraw %}.</p>

<div id="result-10" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10.</strong> Under i.i.d. sampling from a continuous distribution symmetric about zero, the sign vector consists of independent uniform signs and is independent of the absolute sample and its ranks. The absolute-rank vector is uniform on the {% raw %}<span class="math inline">\(N!\)</span>{% endraw %} permutations, and
</p>
{% raw %}<div class="math display">\[ET_N=0,\qquad\operatorname{Var}T_N=\sum_{k=1}^Na_{Nk}^2.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For any measurable {% raw %}<span class="math inline">\(B\subset(0,\infty)\)</span>{% endraw %}, symmetry gives {% raw %}<span class="math inline">\(P(|X|\in B,X&gt;0)=P(|X|\in B,X&lt;0)=P(|X|\in B)/2\)</span>{% endraw %}. There is no mass at zero. This proves independence of sign and magnitude; independence across observations gives the vector statement. The magnitude distribution is continuous, so Lemma 2 gives the rank permutation law. Conditional on the magnitudes, the signs are independent, centered, and have variance one. Thus the conditional variance is {% raw %}<span class="math inline">\(\sum_i a_{N,R_{Ni}^+}^2=\sum_ka_{Nk}^2\)</span>{% endraw %}, a deterministic quantity. ◻</p>
</div>

<div id="result-11" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11.</strong> Let {% raw %}<span class="math inline">\(F^+\)</span>{% endraw %} be the cdf of {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %} under the continuous symmetric null, and {% raw %}<span class="math inline">\(\varphi\in L^2(0,1)\)</span>{% endraw %}. For exact scores {% raw %}<span class="math inline">\(a_{Nk}=E\varphi(U_{N(k)})\)</span>{% endraw %}, define
</p>
{% raw %}<div class="math display">\[\widetilde T_N=\sum_i\varphi(F^+(|X_i|))\epsilon_i.\]</div>{% endraw %}
<p>
Then {% raw %}<span class="math inline">\(N^{-1}E(T_N-\widetilde T_N)^2\to0\)</span>{% endraw %} and
</p>
{% raw %}<div class="math display">\[\frac{T_N}{\sqrt N}\Rightarrow N\left(0,\int_0^1\varphi^2(u)\,du\right).\]</div>{% endraw %}
<p>
The same holds for grid scores if {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is continuous almost everywhere and satisfies the grid second-moment condition in Theorem 4.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The score errors are functions of the magnitudes. Conditioning on them, all cross terms involving distinct signs vanish. Exchangeability then gives
</p>
{% raw %}<div class="math display">\[\frac1NE(T_N-\widetilde T_N)^2=E\{a_{N,R_{N1}^+}-\varphi(F^+(|X_1|))\}^2\longrightarrow0\]</div>{% endraw %}
<p>
by the scalar score convergence proved in Theorem 4; its argument does not require the score to be nonconstant. The summands of {% raw %}<span class="math inline">\(\widetilde T_N\)</span>{% endraw %} are i.i.d., centered, with variance {% raw %}<span class="math inline">\(\int\varphi^2\)</span>{% endraw %}. The ordinary CLT and the mean-square approximation prove the assertion. The same scalar convergence for grid scores proves their version. ◻</p>
</div>

<div id="result-12" class="example" data-note-number="12" data-note-kind="Example">
<p><strong>Example 12.</strong> For {% raw %}<span class="math inline">\(\varphi(u)=u\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(W_N=\sum_iR_{Ni}^+\epsilon_i\)</span>{% endraw %}. Since the theorem applies to {% raw %}<span class="math inline">\(W_N/(N+1)\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[N^{-3/2}W_N\Rightarrow \mathcal{N}(0,1/3),\qquad \operatorname{Var}W_N=\sum_{k=1}^Nk^2=\frac{N(N+1)(2N+1)}6.\]</div>{% endraw %}
<p>
This centered signed version equals {% raw %}<span class="math inline">\(2W^+-N(N+1)/2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(W^+=\sum_iR_{Ni}^+\mathbf1\{X_i&gt;0\}\)</span>{% endraw %}. The two conventions therefore give equivalent tests after their respective centering and scaling.</p>
</div>

<p>For local power, take the location model {% raw %}<span class="math inline">\(f(x-\theta)\)</span>{% endraw %}, with a positive symmetric density {% raw %}<span class="math inline">\(f\)</span>{% endraw %} that is absolutely continuous and has integrable derivative. Translation is differentiable in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}: {% raw %}<span class="math inline">\([f(\cdot-\theta)-f]/\theta\to-f'\)</span>{% endraw %}, which follows by integrating translates of {% raw %}<span class="math inline">\(f'\)</span>{% endraw %} and their {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} continuity. Thus the preceding derivative argument applies. Symmetry makes {% raw %}<span class="math inline">\(f'/f\)</span>{% endraw %} odd, so the full-sample score is
</p>
{% raw %}<div class="math display">\[-\sum_i\frac{f'(X_i)}{f(X_i)}=-\sum_i\epsilon_i\frac{f'(|X_i|)}{f(|X_i|)}.\]</div>{% endraw %}
<p>
For a sign vector {% raw %}<span class="math inline">\(s\)</span>{% endraw %} and rank permutation {% raw %}<span class="math inline">\(r\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[P_\theta(\epsilon=s,R_N^+=r)-P_0(\epsilon=s,R_N^+=r)=\frac\theta{2^NN!}\sum_i s_i a_{N,r_i}+o(|\theta|),\]</div>{% endraw %}
<p>
where
</p>
{% raw %}<div class="math display">\[a_{Nk}=-E\left[\frac{f'}f\left((F^+)^{-1}(U_{N(k)})\right)\right].\]</div>{% endraw %}
<p>
The independence in Lemma 10 gives the factor {% raw %}<span class="math inline">\(1/(2^NN!)\)</span>{% endraw %}. These scores maximize the derivative of power among signed-rank tests of a fixed size. If one also wants the square-integrable score CLT, assume finite location Fisher information {% raw %}<span class="math inline">\(\int(f'/f)^2f&lt;\infty\)</span>{% endraw %}. This derivative calculation concerns local alternatives; it is not a full finite-alternative power formula.</p>

<div id="result-13" class="example" data-note-number="13" data-note-kind="Example">
<p><strong>Example 13.</strong> For i.i.d. paired observations {% raw %}<span class="math inline">\((X_i,Y_i)\)</span>{% endraw %} with continuous marginal distributions, let {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_i\)</span>{% endraw %} be their respective ranks. Each rank vector is marginally a uniform permutation, but the two vectors need not be independent. The empirical rank means are both {% raw %}<span class="math inline">\((N+1)/2\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[\sum_i(R_i-(N+1)/2)^2=\sum_i(S_i-(N+1)/2)^2=\frac{N(N^2-1)}{12}.\]</div>{% endraw %}
<p>
Consequently Spearman's coefficient is
</p>
{% raw %}<div class="math display">\[\rho_N=\frac{12}{N(N^2-1)}\sum_iR_iS_i-3\frac{N+1}{N-1}.\]</div>{% endraw %}
<p>
To check the constant, expanding the centered numerator subtracts exactly {% raw %}<span class="math inline">\(N(N+1)^2/4\)</span>{% endraw %}.</p>

<p>Under independence of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, condition on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. The remaining ranks are uniform, so Lemma 2 gives {% raw %}<span class="math inline">\(E\rho_N=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}\rho_N=1/(N-1)\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, use scores {% raw %}<span class="math inline">\(k/(N+1)\)</span>{% endraw %} and coefficients {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %} in Theorem 4 and Remark 5. Their maximal centered square divided by their sum is {% raw %}<span class="math inline">\(O(N^{-1})\)</span>{% endraw %}. The conditional law does not depend on the particular permutation {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, so the resulting CLT is also unconditional: {% raw %}<span class="math inline">\(\sqrt N\rho_N\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}.</p>
</div>

<p>A smooth-score approximation also works for independent observations with different continuous cdfs {% raw %}<span class="math inline">\(F_1,\ldots,F_N\)</span>{% endraw %}. Define
</p>
{% raw %}<div class="math display">\[\overline F_N=\frac1N\sum_iF_i,\qquad\overline F_N^C=\frac1N\sum_iC_{Ni}F_i,\qquad T_N=\sum_iC_{Ni}\varphi\left(\frac{R_{Ni}}{N+1}\right),\]</div>{% endraw %}
{% raw %}<div class="math display">\[\widetilde T_N=\sum_i\left[C_{Ni}\varphi(\overline F_N(X_i))+\int_{X_i}^\infty\varphi'(\overline F_N(x))\,d\overline F_N^C(x)\right].\]</div>{% endraw %}
<p>
The integrals are Stieltjes integrals against a finite signed measure. The approximation is a sum of independent single-observation functions; its expectation need not equal {% raw %}<span class="math inline">\(ET_N\)</span>{% endraw %}.</p>

<div id="result-14" class="lemma" data-note-number="14" data-note-kind="Lemma">
<p><strong>Lemma 14.</strong> For {% raw %}<span class="math inline">\(\varphi\in C^2[0,1]\)</span>{% endraw %}, a universal constant {% raw %}<span class="math inline">\(K\)</span>{% endraw %} satisfies
</p>
{% raw %}<div class="math display">\[\operatorname{Var}(T_N-\widetilde T_N)\le\frac KN\sum_i(C_{Ni}-\overline C_N)^2\left(\|\varphi'\|_\infty^2+\|\varphi''\|_\infty^2\right).\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Suppress the {% raw %}<span class="math inline">\(N\)</span>{% endraw %} subscripts, and replace {% raw %}<span class="math inline">\(C_i\)</span>{% endraw %} by {% raw %}<span class="math inline">\(c_i=C_i-\overline C\)</span>{% endraw %}. This changes {% raw %}<span class="math inline">\(T\)</span>{% endraw %} by a constant. It also changes {% raw %}<span class="math inline">\(\widetilde T\)</span>{% endraw %} by a constant, since continuity of {% raw %}<span class="math inline">\(\overline F\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int_x^\infty\varphi'(\overline F(t))\,d\overline F(t)=\varphi(1)-\varphi(\overline F(x))\)</span>{% endraw %}. Thus we may assume {% raw %}<span class="math inline">\(\sum_i c_i=0\)</span>{% endraw %}.</p>

<p>Set {% raw %}<span class="math inline">\(\delta_i=R_i/(N+1)-\overline F(X_i)\)</span>{% endraw %}. The rank identity and independence give
</p>
{% raw %}<div class="math display">\[E(\delta_i\mid X_i)=b_i=\frac{1-F_i(X_i)-\overline F(X_i)}{N+1},\qquad |b_i|\le\frac1{N+1}.\]</div>{% endraw %}
<p>
Conditional on {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, the remaining part of {% raw %}<span class="math inline">\((N+1)\delta_i\)</span>{% endraw %} is a sum of {% raw %}<span class="math inline">\(N-1\)</span>{% endraw %} independent centered variables bounded by one. Expanding its fourth power leaves only single fourth moments and paired second moments, bounded by {% raw %}<span class="math inline">\(N+3N^2\)</span>{% endraw %}. Including the bounded bias therefore gives {% raw %}<span class="math inline">\(E\delta_i^4\le K/N^2\)</span>{% endraw %}.</p>

<p>Taylor expansion yields {% raw %}<span class="math inline">\(T=T_0+T_1+T_2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(T_0=\sum_i c_i\varphi(\overline F(X_i))\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_1=\sum_i c_i\varphi'(\overline F(X_i))\delta_i\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[ET_2^2\le\frac{\|\varphi''\|_\infty^2}4\left(\sum_i c_i^2\right)\sum_iE\delta_i^4\le\frac KN\|\varphi''\|_\infty^2\sum_i c_i^2.\]</div>{% endraw %}
<p>
Write {% raw %}<span class="math inline">\(d_i=\varphi'(\overline F(X_i))\)</span>{% endraw %}. The bias part {% raw %}<span class="math inline">\(\sum_i c_i d_i b_i\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T_1\)</span>{% endraw %} has second moment at most {% raw %}<span class="math inline">\(\|\varphi'\|_\infty^2\sum_i c_i^2/N\)</span>{% endraw %}, by Cauchy–Schwarz. The remaining term is
</p>
{% raw %}<div class="math display">\[Q=\frac1{N+1}\sum_{i\ne j}c_id_i\{\mathbf1(X_j\le X_i)-F_j(X_i)\}.\]</div>{% endraw %}
<p>
Let {% raw %}<span class="math inline">\(A_i(x)=\int_x^\infty\varphi'(\overline F(t))\,dF_i(t)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(|A_i|\le M=\|\varphi'\|_\infty\)</span>{% endraw %}. Conditional expectation on {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} makes the corresponding summand zero; conditioning on {% raw %}<span class="math inline">\(X_j\)</span>{% endraw %} gives its other first-order projection. Hence
</p>
{% raw %}<div class="math display">\[\widehat Q=\frac1{N+1}\sum_j\sum_{i\ne j}c_i\{A_i(X_j)-EA_i(X_j)\}.\]</div>{% endraw %}
<p>
The centered second term of {% raw %}<span class="math inline">\(\widetilde T\)</span>{% endraw %} is
</p>
{% raw %}<div class="math display">\[B-EB=\frac1N\sum_j\sum_i c_i\{A_i(X_j)-EA_i(X_j)\}.\]</div>{% endraw %}
<p>
Subtracting {% raw %}<span class="math inline">\(\widehat Q\)</span>{% endraw %} changes the denominator and adds diagonal terms. Independence across {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|A_i-EA_i|\le2M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\((\sum_i|c_i|)^2\le N\sum_i c_i^2\)</span>{% endraw %} bound the variance of this difference by {% raw %}<span class="math inline">\(KM^2\sum_i c_i^2/N^2\)</span>{% endraw %}.</p>

<p>Finally, {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} consists only of two-coordinate terms. Its remainder after the Hájek projection is the orthogonal sum of its canonical pair components. For the pair {% raw %}<span class="math inline">\(\{i,j\}\)</span>{% endraw %}, the projection norm is at most the norm of
</p>
{% raw %}<div class="math display">\[\frac{c_i d_i\mathbf1(X_j\le X_i)+c_jd_j\mathbf1(X_i\le X_j)}{N+1};\]</div>{% endraw %}
<p>
the omitted {% raw %}<span class="math inline">\(F_j(X_i)\)</span>{% endraw %} terms depend on a single coordinate and have zero pair projection. Thus
</p>
{% raw %}<div class="math display">\[E(Q-\widehat Q)^2\le\frac{2M^2}{(N+1)^2}\sum_{i&lt;j}(c_i^2+c_j^2)\le\frac{2M^2}{N}\sum_i c_i^2.\]</div>{% endraw %}
<p>
Combining the four bounds, using {% raw %}<span class="math inline">\(\operatorname{Var}(\sum_{j=1}^4Z_j)\le4\sum_j\operatorname{Var}Z_j\)</span>{% endraw %}, proves the lemma. ◻</p>
</div>
<p>To use it for a CLT, the error bound must be small relative to the relevant variance, and the independent approximation must satisfy an appropriate CLT condition. Smoothness alone does not remove the need for Lindeberg or another sufficient normality condition.</p>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-03-05-projection-methods-and-u-statistics %}">Projection Methods and U-Statistics</a></p></nav>

</div>
