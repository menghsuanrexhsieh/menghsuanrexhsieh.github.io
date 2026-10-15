---
layout: "post"
title: "Nonparametric Least Squares and Rates of Convergence"
date: "2022-12-10"
tags: ["statistics", "empirical processes"]
excerpt: "The following result gives us an explicit description of the natural connection between localized empirical Gaussian complexity and Gaussian process."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/12/10/nonparametric-least-squares/", "/2022/12/13/application-rates-of-convergence/", "/2026/06/16/nonparametric-least-squares/"]
---

<div class="note-content" markdown="0">

<p>Least squares chooses a function that fits the observations, but the fitted function also responds to the noise. The basic inequality compares its error with a noise inner product. Bounding that inner product over functions near the truth leads to localized Gaussian complexity and a critical radius. We derive this connection for fixed design and use it to calculate prediction rates for several classes.</p>

<span id="sec:nonpar-ls"></span>
<p>Fix design points {% raw %}<span class="math inline">\(x_1,\ldots,x_n\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(Y_i=f^*(x_i)+\sigma g_i\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(g_i\)</span>{% endraw %} are independent standard normals and {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\|h\|_n^2=n^{-1}\sum_i h(x_i)^2\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(f^*\in\mathcal F\)</span>{% endraw %} and that a measurable least-squares minimizer exists. It is enough to work with the evaluation vectors in {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}; closed prediction sets attain the minimum. For convex closed prediction sets the fitted vector is unique. The bounds concern prediction at the given design, not automatically the population {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} error.</p>

<div id="result-1" class="example" data-note-number="1" data-note-kind="Example">
<p>Example 1 (Linear regression). For {% raw %}<span class="math inline">\(f_\beta(x)=\langle\beta,x\rangle\)</span>{% endraw %} and a compact coefficient set {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, minimizing empirical loss is exactly minimizing {% raw %}<span class="math inline">\(n^{-1}\|Y-X\beta\|_2^2\)</span>{% endraw %} over {% raw %}<span class="math inline">\(C\)</span>{% endraw %}. Compactness guarantees attainment; convexity of {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, when assumed, makes {% raw %}<span class="math inline">\(\mathcal F-f^*\)</span>{% endraw %} star-shaped. Unrestricted linear regression instead works on the closed subspace {% raw %}<span class="math inline">\(\operatorname{range}(X)\)</span>{% endraw %}, whether or not the coefficient representation is unique.</p>
</div>

<div id="result-2" class="example" data-note-number="2" data-note-kind="Example">
<p>Example 2 (Kernel ridge regression). In an RKHS {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} with kernel {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, minimize</p>

{% raw %}<div class="math display">\[n^{-1}\sum_i(Y_i-f(x_i))^2+\lambda\|f\|_{\mathcal H}^2,\qquad \lambda&gt;0.\]</div>{% endraw %}

<p>Decompose {% raw %}<span class="math inline">\(f=f_0+f_\perp\)</span>{% endraw %} with {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} in the span of {% raw %}<span class="math inline">\(K(x_i,\cdot)\)</span>{% endraw %}. The reproducing identity gives {% raw %}<span class="math inline">\(f_\perp(x_i)=0\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(\|f\|_{\mathcal H}^2=\|f_0\|_{\mathcal H}^2+\|f_\perp\|_{\mathcal H}^2\)</span>{% endraw %}. Therefore the unique minimizer lies in this finite span. If {% raw %}<span class="math inline">\(K_n=(K(x_i,x_j))\)</span>{% endraw %}, one representation is {% raw %}<span class="math inline">\(\widehat f=\sum_i\alpha_iK(x_i,\cdot)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\alpha=(K_n+n\lambda I)^{-1}Y\)</span>{% endraw %}. Substitution verifies the normal equation {% raw %}<span class="math inline">\(K_n(K_n+n\lambda I)\alpha=K_nY\)</span>{% endraw %}, including singular {% raw %}<span class="math inline">\(K_n\)</span>{% endraw %}. This is a penalized estimator; Theorem 5 below concerns the constrained estimator with the displayed basic inequality.</p>
</div>

<div id="result-3" class="example" data-note-number="3" data-note-kind="Example">
<p>Example 3 (Cubic smoothing splines). On {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, take the Sobolev space {% raw %}<span class="math inline">\(W^{2,2}\)</span>{% endraw %} and minimize</p>

{% raw %}<div class="math display">\[n^{-1}\sum_i(Y_i-f(x_i))^2+\lambda\int_0^1(f''(x))^2\,dx,\qquad\lambda&gt;0.\]</div>{% endraw %}

<p>Assume at least two distinct design points. Values at those points together with {% raw %}<span class="math inline">\(\|f''\|_2\)</span>{% endraw %} control the {% raw %}<span class="math inline">\(W^{2,2}\)</span>{% endraw %} norm: integrate {% raw %}<span class="math inline">\(f''\)</span>{% endraw %} twice and solve for the two affine coefficients. A bounded minimizing sequence thus has a weakly convergent subsequence; evaluations are continuous linear functionals and the squared derivative norm is weakly lower semicontinuous. This proves existence. A direction with zero quadratic curvature must be affine and vanish at two distinct points, hence zero, proving uniqueness.</p>

<p>For every variation {% raw %}<span class="math inline">\(h\in W^{2,2}\)</span>{% endraw %}, the first-order equation is</p>

{% raw %}<div class="math display">\[\lambda\int f''h''=n^{-1}\sum_i(Y_i-f(x_i))h(x_i).\]</div>{% endraw %}

<p>On an interval containing no observation, compactly supported variations give {% raw %}<span class="math inline">\(f^{(4)}=0\)</span>{% endraw %} in the distributional sense, so {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is cubic there. The Sobolev representative has continuous {% raw %}<span class="math inline">\(f,f'\)</span>{% endraw %}. Integrating by parts on adjacent intervals, the arbitrary values of {% raw %}<span class="math inline">\(h'\)</span>{% endraw %} at a knot force continuity of {% raw %}<span class="math inline">\(f''\)</span>{% endraw %}; the coefficients of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} permit jumps in {% raw %}<span class="math inline">\(f^{(3)}\)</span>{% endraw %}. Endpoint variations impose {% raw %}<span class="math inline">\(f''(0)=f''(1)=0\)</span>{% endraw %}; on any exterior interval with no observations they also force {% raw %}<span class="math inline">\(f^{(3)}=0\)</span>{% endraw %}, giving linear tails. Thus the solution is a natural cubic spline, whose third derivative may jump at the distinct observations.</p>

<p>The constrained version {% raw %}<span class="math inline">\(\int(f'')^2\le R\)</span>{% endraw %} approaches affine least squares as {% raw %}<span class="math inline">\(R\downarrow0\)</span>{% endraw %}; the penalized version does so as {% raw %}<span class="math inline">\(\lambda\to\infty\)</span>{% endraw %}. To see the latter, compare with the best affine fit: its objective is bounded independently of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\int(\widehat f'')^2\to0\)</span>{% endraw %}, and the same two-point control identifies the affine least-squares limit. These are two different tuning parameters.</p>
</div>

<div id="result-4" class="example" data-note-number="4" data-note-kind="Example">
<p>Example 4 (Convex regression). For a finite convex function on an open convex domain {% raw %}<span class="math inline">\(D\)</span>{% endraw %}, each design point {% raw %}<span class="math inline">\(x_i\in D\)</span>{% endraw %} has a supporting subgradient {% raw %}<span class="math inline">\(z_i\)</span>{% endraw %}. Its values {% raw %}<span class="math inline">\(a_i=f(x_i)\)</span>{% endraw %} therefore satisfy</p>

{% raw %}<div class="math display">\[a_j\ge a_i+\langle z_i,x_j-x_i\rangle\qquad(i,j=1,\ldots,n).\]</div>{% endraw %}

<p>Conversely, any feasible values and subgradients define {% raw %}<span class="math inline">\(f(x)=\max_i\{a_i+\langle z_i,x-x_i\rangle\}\)</span>{% endraw %}. This function is convex and satisfies {% raw %}<span class="math inline">\(f(x_j)=a_j\)</span>{% endraw %}: every plane is at most {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %}, and the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th plane attains it. Thus minimizing {% raw %}<span class="math inline">\(n^{-1}\sum_i(Y_i-a_i)^2\)</span>{% endraw %} under these linear constraints is exactly the original problem on the observed points. This is a finite-dimensional representation, rather than a claim that the function away from the observations is uniquely determined. The feasible value set is a nonempty closed convex polyhedron (a linear projection of this finite system of inequalities), so its least-squares projection exists.</p>
</div>

<p>Set {% raw %}<span class="math inline">\(\mathcal F^*=\mathcal F-f^*\)</span>{% endraw %}, and define the normalized empirical local complexity by</p>

{% raw %}<div class="math display">\[\mathcal G_n(\delta)=\mathbb E_g\sup_{h\in\mathcal F^*,\ \|h\|_n\le\delta}\left|\frac1n\sum_i g_i h(x_i)\right|.\]</div>{% endraw %}

<p>Both the factor {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %} and the empirical norm are required. For random design, a population-localized complexity could instead restrict {% raw %}<span class="math inline">\(\|h\|_{P,2}\)</span>{% endraw %} and average over the design; it is a different quantity. We retain fixed design throughout. The critical inequality is</p>

<span id="eq:critical-radius-gaussian"></span>
{% raw %}<div class="math display">\[\sigma\mathcal G_n(\delta)\le\delta^2/2.\]</div>{% endraw %}

<p>Expanding the least-squares comparison with the feasible truth gives the pathwise basic inequality</p>

{% raw %}<div class="math display">\[\frac12\|\widehat\Delta\|_n^2\le\frac\sigma n\sum_i g_i\widehat\Delta(x_i),\qquad\widehat\Delta=\widehat f-f^*.\]</div>{% endraw %}

<p>The error radius is random and depends on these same Gaussian variables. Replacing the right side by an expectation at that random radius is not justified. The next uniform event resolves that dependence.</p>

<div id="thm:nonpar-ls-tail-bound" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p>Theorem 5. Suppose {% raw %}<span class="math inline">\(\mathcal F^*\)</span>{% endraw %} is star-shaped about zero and {% raw %}<span class="math inline">\(\delta_n&gt;0\)</span>{% endraw %} solves the critical inequality. For every {% raw %}<span class="math inline">\(t\ge\delta_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(\|\widehat f-f^*\|_n^2\ge16t\delta_n)\le\exp\{-nt\delta_n/(2\sigma^2)\}.\]</div>{% endraw %}
</div>

<div id="result-6" class="remark" data-note-number="6" data-note-kind="Remark">
<p>Remark 6. For {% raw %}<span class="math inline">\(0&lt;r&lt;s\)</span>{% endraw %}, star-shapedness implies {% raw %}<span class="math inline">\((r/s)(\mathcal F^*\cap B_s)\subset\mathcal F^*\cap B_r\)</span>{% endraw %}; hence {% raw %}<span class="math inline">\(\mathcal G_n(s)/s\le\mathcal G_n(r)/r\)</span>{% endraw %}. Also Cauchy–Schwarz gives {% raw %}<span class="math inline">\(\mathcal G_n(r)\le r\mathbb E\|g\|_2/\sqrt n\le r\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(r=2\sigma\)</span>{% endraw %} is always an admissible radius. Existence does not require an attained smallest positive radius; any admissible positive one suffices.</p>
</div>

<p>Proof of Theorem 5. For fixed {% raw %}<span class="math inline">\(s\ge\delta_n\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[A_s(g)=\sup_{h\in\mathcal F^*,\|h\|_n\le s}\left|\frac\sigma n\langle g,h\rangle\right|.\]</div>{% endraw %}

<p>It is {% raw %}<span class="math inline">\(\sigma s/\sqrt n\)</span>{% endraw %}-Lipschitz, and {% raw %}<span class="math inline">\(\mathbb EA_s=\sigma\mathcal G_n(s)\le s\delta_n/2\le s^2/2\)</span>{% endraw %}. Gaussian concentration implies</p>

{% raw %}<div class="math display">\[P(A_s\ge2s^2)\le P(A_s\ge\mathbb EA_s+s^2)\le e^{-ns^2/(2\sigma^2)}.\]</div>{% endraw %}

<p>If any {% raw %}<span class="math inline">\(h\in\mathcal F^*\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\|h\|_n\ge s\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(|\sigma\langle g,h\rangle/n|\ge2s\|h\|_n\)</span>{% endraw %}, the rescaled function {% raw %}<span class="math inline">\(sh/\|h\|_n\)</span>{% endraw %} belongs to the radius-{% raw %}<span class="math inline">\(s\)</span>{% endraw %} class and forces {% raw %}<span class="math inline">\(A_s\ge2s^2\)</span>{% endraw %}. On the complement of this event every such {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, including the data-dependent error, obeys the strict reverse inequality. If {% raw %}<span class="math inline">\(\|\widehat\Delta\|_n&lt;s\)</span>{% endraw %}, the desired bound already holds. Otherwise the basic inequality gives {% raw %}<span class="math inline">\(\|\widehat\Delta\|_n^2/2&lt;2s\|\widehat\Delta\|_n\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(\|\widehat\Delta\|_n&lt;4s\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(s=\sqrt{t\delta_n}\)</span>{% endraw %}. This proves the tail bound, including the zero-error case. All local suprema are continuous Lipschitz functions of {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, since the local evaluation vectors are bounded subsets of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}.</p>

<p>Integrating the tail also gives {% raw %}<span class="math inline">\(\mathbb E\|\widehat\Delta\|_n^2\le16\delta_n^2+32\sigma^2/n\)</span>{% endraw %}. Indeed, above {% raw %}<span class="math inline">\(16\delta_n^2\)</span>{% endraw %} the tail is bounded by {% raw %}<span class="math inline">\(\exp\{-nu/(32\sigma^2)\}\)</span>{% endraw %}. The constants and possible {% raw %}<span class="math inline">\(\sigma^2/n\)</span>{% endraw %} remainder cannot be dropped merely by the heuristic preceding the theorem. ◻</p>

<div id="prop:nonpar-ls-tail-bound" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p>Proposition 7 (Truncated entropy bound). Let {% raw %}<span class="math inline">\(B_\delta=\{h\in\mathcal F^*:\|h\|_n\le\delta\}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(C\)</span>{% endraw %} be a universal constant. For {% raw %}<span class="math inline">\(0&lt;a&lt;\delta/2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathcal G_n(\delta)\le2a+\frac C{\sqrt n}\int_{a/2}^{\delta}\sqrt{\log(2N(u,B_\delta,\|\cdot\|_n))}\,du.\]</div>{% endraw %}

<p>Consequently, if {% raw %}<span class="math inline">\(0&lt;\delta\le\sigma\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(a=\delta^2/(8\sigma)\)</span>{% endraw %}. An upper bound {% raw %}<span class="math inline">\(\delta^2/(4\sigma)\)</span>{% endraw %} on the integral term is sufficient for the critical inequality. The universal constant and cutoff replace the unsupported exact constant in the source.</p>
</div>

<p>Proof. Use internal nets at radii {% raw %}<span class="math inline">\(r_j=\delta2^{-j}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\pi_0h=0\)</span>{% endraw %}, and stop at the first {% raw %}<span class="math inline">\(K\)</span>{% endraw %} for which {% raw %}<span class="math inline">\(r_K\le2a\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(a&lt;r_K\le2a\)</span>{% endraw %}. In normalized Gaussian inner products, an increment between two net points at level {% raw %}<span class="math inline">\(j\)</span>{% endraw %} has standard deviation at most {% raw %}<span class="math inline">\(3r_j/\sqrt n\)</span>{% endraw %}, and there are at most {% raw %}<span class="math inline">\(N(r_j)N(r_{j-1})\)</span>{% endraw %} possibilities. The finite Gaussian maximum bound therefore bounds its expected absolute maximum by {% raw %}<span class="math inline">\(Cr_j\sqrt{\log(2N(r_j))}/\sqrt n\)</span>{% endraw %}. Because entropy is nonincreasing,</p>

{% raw %}<div class="math display">\[r_j\sqrt{\log(2N(r_j))}\le2\int_{r_j/2}^{r_j}\sqrt{\log(2N(u))}\,du.\]</div>{% endraw %}

<p>The intervals are disjoint and lie in {% raw %}<span class="math inline">\([a/2,\delta]\)</span>{% endraw %}. The remaining approximation error is bounded by {% raw %}<span class="math inline">\(r_K\|g\|_2/\sqrt n\)</span>{% endraw %}, whose expectation is at most {% raw %}<span class="math inline">\(2a\)</span>{% endraw %}. Summing proves the claim. Letting {% raw %}<span class="math inline">\(a\downarrow0\)</span>{% endraw %} also gives the full entropy-integral bound when finite. The covariance metric is {% raw %}<span class="math inline">\(\|h-k\|_n/\sqrt n\)</span>{% endraw %} for the normalized sums; its square is not the unsquared norm. ◻</p>

<div id="rem:lower-bound-critical-inequality" class="remark" data-note-number="8" data-note-kind="Remark">
<p>Remark 8. The bound {% raw %}<span class="math inline">\(\mathcal G_n(\delta)\le\delta\)</span>{% endraw %} gives the admissible radius {% raw %}<span class="math inline">\(2\sigma\)</span>{% endraw %}. Conversely, if the star-shaped error class contains the constant function one, then for {% raw %}<span class="math inline">\(0&lt;\delta\le1\)</span>{% endraw %} it contains the constant function {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\mathcal G_n(\delta)\ge\frac\delta n\mathbb E|\sum_i g_i|=\sqrt{2/\pi}\,\delta/\sqrt n.\]</div>{% endraw %}

<p>An admissible radius in this range must satisfy {% raw %}<span class="math inline">\(\delta^2\ge8\sigma^2/(\pi n)\)</span>{% endraw %}. Every admissible positive radius therefore obeys {% raw %}<span class="math inline">\(\delta^2\ge\min\{1,8\sigma^2/(\pi n)\}\)</span>{% endraw %}. Convexity beyond star-shapedness is unnecessary for this particular argument.</p>
</div>

<h3 data-note-section="1" id="application-rates-of-convergence">1. Application: Rates of Convergence</h3>
<p>We apply the same normalized complexity throughout the examples below.</p>

<h4 data-note-section="1.1" id="parametric-problem-linear-regressions">1.1. Parametric problem: linear regressions</h4>
<p>For linear regression put {% raw %}<span class="math inline">\(S=\operatorname{range}(X)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r=\dim S\)</span>{% endraw %}. Euclidean volume comparison gives {% raw %}<span class="math inline">\(\log N(u,S\cap B_\delta,\|\cdot\|_n)\le r\log(1+2\delta/u)\)</span>{% endraw %}. The entropy integral becomes {% raw %}<span class="math inline">\(\delta\sqrt{r/n}\int_0^1\sqrt{\log(1+2/v)}\,dv\)</span>{% endraw %}, which is finite. More directly,</p>

{% raw %}<div class="math display">\[\mathcal G_n(\delta)=\frac\delta{\sqrt n}\mathbb E\|\Pi_Sg\|_2\le\delta\sqrt{r/n}.\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(\delta_n=2\sigma\sqrt{r/n}\)</span>{% endraw %} works for {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}. The fitted vector is {% raw %}<span class="math inline">\(\Pi_SY\)</span>{% endraw %}, giving exact mean squared prediction error {% raw %}<span class="math inline">\(\sigma^2r/n\)</span>{% endraw %}; no inverse of {% raw %}<span class="math inline">\(X^\top X\)</span>{% endraw %} is needed. This risk is minimax over the full subspace: a centered Gaussian prior with covariance {% raw %}<span class="math inline">\(\tau^2I_r\)</span>{% endraw %} on orthonormal subspace coordinates has Bayes risk {% raw %}<span class="math inline">\(r\sigma^2\tau^2/[n(\sigma^2+\tau^2)]\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(\tau\to\infty\)</span>{% endraw %} proves the matching lower bound. If {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %}, prediction is exact.</p>

<div id="result-9" class="remark" data-note-number="9" data-note-kind="Remark"><p><strong>Remark 9 (Polynomial regression).</strong> Fix design points {% raw %}<span class="math inline">\(x_1,\ldots,x_n\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\phi(x)=(1,x,\ldots,x^{d-1})\)</span>{% endraw %}, and form the design matrix {% raw %}<span class="math inline">\(\Phi\in\mathbb R^{n\times d}\)</span>{% endraw %} with rows {% raw %}<span class="math inline">\(\phi(x_i)^\top\)</span>{% endraw %}. The vectors of polynomial evaluations form the linear subspace {% raw %}<span class="math inline">\(S=\operatorname{range}(\Phi)\)</span>{% endraw %}, of dimension {% raw %}<span class="math inline">\(r=\operatorname{rank}(\Phi)\le\min(n,d)\)</span>{% endraw %}. They are generally an uncountable set. The <a href="{% post_url 2022-11-08-vc-dimension-and-uniform-entropy-bounds %}#lem:sauer-shelah">Sauer–Shelah lemma</a> counts Boolean traces and cannot bound the cardinality of these real-valued vectors.</p>
<p>Projection onto {% raw %}<span class="math inline">\(S\)</span>{% endraw %} gives the local Gaussian complexity exactly. For a standard Gaussian vector {% raw %}<span class="math inline">\(g\in\mathbb R^n\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathcal C_n(\delta):=\mathbb{E}_g\sup_{v\in S:\|v\|_2\le\sqrt n\delta}\frac{\langle g,v\rangle}{n}=\frac\delta{\sqrt n}\mathbb{E}\|\Pi_Sg\|_2\le\delta\sqrt{r/n}.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\delta_n=2\sigma\sqrt{r/n}\)</span>{% endraw %} satisfies the critical inequality for this normalized complexity {% raw %}<span class="math inline">\(\sigma\mathcal C_n(\delta_n)\le\delta_n^2/2\)</span>{% endraw %} when {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}. This calculation needs no logarithmic factor and remains valid when the design matrix has dependent columns.</p>
<p>For unrestricted least squares in the well-specified Gaussian model {% raw %}<span class="math inline">\(Y=\Phi\beta^*+\sigma g\)</span>{% endraw %}, the fitted vector is {% raw %}<span class="math inline">\(\Pi_SY\)</span>{% endraw %}, regardless of whether the coefficient vector is unique. Hence</p>
{% raw %}<div class="math display">\[\|\widehat f-f^*\|_{\widehat P_n,2}^2=\frac{\sigma^2}{n}\|\Pi_Sg\|_2^2,\qquad \mathbb{E}\|\widehat f-f^*\|_{\widehat P_n,2}^2=\frac{\sigma^2r}{n}.\]</div>{% endraw %}
<p>The squared projected norm has the chi-square law with {% raw %}<span class="math inline">\(r\)</span>{% endraw %} degrees of freedom. For every {% raw %}<span class="math inline">\(u&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P\!\left\{\|\widehat f-f^*\|_{\widehat P_n,2}^2&gt;\frac{\sigma^2}{n}(r+2\sqrt{ru}+2u)\right\}\le e^{-u}.\]</div>{% endraw %}
<p>To verify the tail bound, for {% raw %}<span class="math inline">\(0&lt;t&lt;1/2\)</span>{% endraw %} its centered log moment generating function is {% raw %}<span class="math inline">\(-r\log(1-2t)/2-rt\le rt^2/(1-2t)\)</span>{% endraw %}; Chernoff optimization gives the displayed threshold. Taking {% raw %}<span class="math inline">\(u=d\log(n+1)\)</span>{% endraw %} recovers a bound of order {% raw %}<span class="math inline">\(\sigma^2d\log(n+1)/n\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-(n+1)^{-d}\)</span>{% endraw %}. The logarithm here records the chosen confidence level, rather than a combinatorial count of polynomial evaluation vectors. If {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %}, the prediction error is identically zero.</p></div>

<h4 data-note-section="1.2" id="nonparametric-least-squares-twice-differentiable-functions">1.2. Nonparametric Least Squares: Twice-Differentiable Functions</h4>
<p>For a fixed constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, consider functions with {% raw %}<span class="math inline">\(\|f\|_\infty,\|f'\|_\infty\le C\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f'\)</span>{% endraw %} Lipschitz with constant at most {% raw %}<span class="math inline">\(C\)</span>{% endraw %}. This closed {% raw %}<span class="math inline">\(C^{1,1}\)</span>{% endraw %} class contains the source's twice continuously differentiable class with these bounds. It is convex and compact in {% raw %}<span class="math inline">\(C^1\)</span>{% endraw %} by Arzelà–Ascoli, so its prediction set is compact and least squares exists. Alternatively one may retain the original {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} class if existence of its minimizer is assumed. In either case assume the truth belongs to the fitted class.</p>

<p>The uniform entropy bound is {% raw %}<span class="math inline">\(\log N(u,\mathcal F_C,\|\cdot\|_\infty)\le C_Cu^{-1/2}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;u\le1\)</span>{% endraw %}. Here is a constructive proof. Take a regular mesh of spacing {% raw %}<span class="math inline">\(h\asymp\sqrt u\)</span>{% endraw %}. At each mesh point round {% raw %}<span class="math inline">\(f\)</span>{% endraw %} to a multiple of {% raw %}<span class="math inline">\(h^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f'\)</span>{% endraw %} to a multiple of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The initial pair has only polynomially many possibilities in {% raw %}<span class="math inline">\(1/h\)</span>{% endraw %}. Given one rounded pair, the next derivative differs by at most {% raw %}<span class="math inline">\(Ch\)</span>{% endraw %}, up to rounding, and Taylor's remainder gives</p>

{% raw %}<div class="math display">\[|f(x+h)-f(x)-hf'(x)|\le Ch^2/2.\]</div>{% endraw %}

<p>Thus there are only a bounded number, depending on {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, of next rounded pairs. Over {% raw %}<span class="math inline">\(O(1/h)\)</span>{% endraw %} intervals the logarithm of the number of codes is {% raw %}<span class="math inline">\(O_C(1/h)+O_C(\log(1/h))\)</span>{% endraw %}. Piecewise affine reconstruction from the code has uniform error {% raw %}<span class="math inline">\(O_C(h^2)\)</span>{% endraw %}. Choosing {% raw %}<span class="math inline">\(h\)</span>{% endraw %} by a sufficiently small constant multiple of {% raw %}<span class="math inline">\(\sqrt u\)</span>{% endraw %} gives the stated bound; selecting a function from each nonempty coding cell gives internal centers at twice the radius.</p>

<p>The difference class has the same bound with {% raw %}<span class="math inline">\(2C\)</span>{% endraw %}. Restricting a cover to a local ball costs at most a factor two in radius. Since {% raw %}<span class="math inline">\(\|\cdot\|_n\le\|\cdot\|_\infty\)</span>{% endraw %}, Proposition 7 gives, for {% raw %}<span class="math inline">\(0&lt;\delta\le1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathcal G_n(\delta)\le\frac{C_C}{\sqrt n}\int_0^\delta u^{-1/4}\,du\le\frac{C_C'\delta^{3/4}}{\sqrt n}.\]</div>{% endraw %}

<p>Solving {% raw %}<span class="math inline">\(\sigma C_C'\delta^{3/4}/\sqrt n\le\delta^2/2\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\delta_n=A_C(\sigma^2/n)^{2/5}\)</span>{% endraw %}. In the regime where this radius is at most one, Theorem 5 with {% raw %}<span class="math inline">\(t=\delta_n\)</span>{% endraw %} proves</p>

{% raw %}<div class="math display">\[P\left(\|\widehat f-f^*\|_n^2&gt; C_C(\sigma^2/n)^{4/5}\right)\le\exp\{-c_C(n/\sigma^2)^{1/5}\}.\]</div>{% endraw %}

<p>The squared-error exponent is {% raw %}<span class="math inline">\(4/5\)</span>{% endraw %}; {% raw %}<span class="math inline">\(2/5\)</span>{% endraw %} is the exponent for the unsquared radius. For larger noise levels the general radius {% raw %}<span class="math inline">\(2\sigma\)</span>{% endraw %} and the bounded diameter remain available. The entropy exponent depends on smoothness two, not on the envelope constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %}.</p>

<h4 data-note-section="1.3" id="nonparametric-problem-orthogonal-series-expansions">1.3. Nonparametric Problem: Orthogonal Series Expansions</h4>
<p>Let {% raw %}<span class="math inline">\(\phi_j\)</span>{% endraw %} be orthonormal in population {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, and fit {% raw %}<span class="math inline">\(f_\beta=\sum_{j=1}^T\beta_j\phi_j\)</span>{% endraw %} under {% raw %}<span class="math inline">\(\|\beta\|_2\le1\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(\Phi_{ij}=\phi_j(x_i)\)</span>{% endraw %}, empirical orthonormality is the additional condition {% raw %}<span class="math inline">\(\Phi^\top\Phi/n=I_T\)</span>{% endraw %}, not a consequence of population orthonormality. In this special case, setting {% raw %}<span class="math inline">\(z=\Phi^\top Y/n\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[n^{-1}\|Y-\Phi\beta\|_2^2=\|\beta-z\|_2^2+\text{constant},\qquad \widehat\beta=\frac z{\max\{1,\|z\|_2\}}.\]</div>{% endraw %}

<p>The penalized objective with penalty {% raw %}<span class="math inline">\(\lambda\|\beta\|_2^2\)</span>{% endraw %} has solution {% raw %}<span class="math inline">\(z/(1+\lambda)\)</span>{% endraw %}; the matching nonnegative parameter is {% raw %}<span class="math inline">\(\lambda=(\|z\|_2-1)_+\)</span>{% endraw %}. For a general design, convex optimality gives</p>

{% raw %}<div class="math display">\[(\Phi^\top\Phi/n+\lambda I)\widehat\beta=\Phi^\top Y/n,\quad\lambda\ge0,\quad\lambda(\|\widehat\beta\|_2^2-1)=0.\]</div>{% endraw %}

<p>These conditions are sufficient by convexity and necessary since the unit ball has an interior feasible point. If the unconstrained minimum-norm least-squares coefficient lies in the ball, choose {% raw %}<span class="math inline">\(\lambda=0\)</span>{% endraw %}; otherwise {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %} and the norm of the ridge solution decreases continuously and crosses one as {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} increases. Thus singular designs cause no difficulty.</p>

<p>For {% raw %}<span class="math inline">\(f^*=\sum_{j\ge1}\beta_j^*\phi_j\in L^2(P)\)</span>{% endraw %}, Parseval gives</p>

{% raw %}<div class="math display">\[\|f^*-f_\beta\|_{P,2}^2=\|\beta^*_{1:T}-\beta\|_2^2+\sum_{j&gt;T}(\beta_j^*)^2.\]</div>{% endraw %}

<p>Consequently the best approximation under the coefficient ball is</p>

{% raw %}<div class="math display">\[\inf_{\|\beta\|_2\le1}\|f^*-f_\beta\|_{P,2}^2=(\|\beta^*_{1:T}\|_2-1)_+^2+\sum_{j&gt;T}(\beta_j^*)^2.\]</div>{% endraw %}

<p>The first term vanishes only if the truncated truth is feasible. This is a population approximation identity; a misspecified empirical-risk bound needs a separate approximation argument, since Theorem 5 assumes a feasible truth.</p>

<h4 data-note-section="1.4" id="nonparametric-problem-additive-models">1.4. Nonparametric Problem: Additive Models</h4>
<p>For each coordinate let {% raw %}<span class="math inline">\(\mathcal H_j\)</span>{% endraw %} be a convex symmetric class containing zero, such as the unit ball of a normed function space. These are properties of the class, not assertions that each univariate function is convex and even. Fit sums {% raw %}<span class="math inline">\(f(x)=\sum_{j=1}^d h_j(x_j)\)</span>{% endraw %}, with a feasible decomposition {% raw %}<span class="math inline">\(f^*=\sum_jh_j^*\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\Delta_j=\widehat h_j-h_j^*\in2\mathcal H_j\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Delta=\sum_j\Delta_j\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[\mathcal G_{n,j}(r)=\mathbb E\sup_{h\in2\mathcal H_j,\ \|h\|_n\le r}\left|n^{-1}\sum_i g_i h(x_{ij})\right|.\]</div>{% endraw %}

<p>Choose any positive {% raw %}<span class="math inline">\(\delta_j\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(\sigma\mathcal G_{n,j}(\delta_j)\le\delta_j^2/2\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\delta_{\max}=\max_j\delta_j\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(t\ge\delta_{\max}\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(Z_{j,t}\)</span>{% endraw %} be the corresponding random supremum at radius {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, including the factor {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. Its mean is at most {% raw %}<span class="math inline">\(t\delta_j/2\le t^2/2\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(\mathcal G_{n,j}(r)/r\)</span>{% endraw %} is nonincreasing, and its Lipschitz constant is {% raw %}<span class="math inline">\(\sigma t/\sqrt n\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[P(Z_{j,t}&gt;t^2)\le e^{-nt^2/(8\sigma^2)}.\]</div>{% endraw %}

<p>On the simultaneous event for all coordinates, star-shaped rescaling gives, for every {% raw %}<span class="math inline">\(h\in2\mathcal H_j\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\left|\frac\sigma n\sum_i g_i h(x_{ij})\right|\le t^2+t\|h\|_n.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(\|h\|_n\le t\)</span>{% endraw %} use the local bound; otherwise scale to radius {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. This event is uniform in {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, so it applies to the random fitted components. A union bound and the basic inequality imply, with probability at least {% raw %}<span class="math inline">\(1-de^{-nt^2/(8\sigma^2)}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\frac12\|\Delta\|_n^2\le dt^2+t\sum_j\|\Delta_j\|_n.\]</div>{% endraw %}

<p>To express the right side in terms of the total prediction error, impose the empirical compatibility condition</p>

{% raw %}<div class="math display">\[\sum_j\|h_j\|_n^2\le K\left\|\sum_jh_j\right\|_n^2\quad\text{for all relevant }h_j\in2\mathcal H_j,\qquad K\ge1.\]</div>{% endraw %}

<p>This is an assumption on the design and component classes. It cannot be deduced from convexity: two components equal to constants {% raw %}<span class="math inline">\(1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} already contradict it. Empirically orthogonal component spaces satisfy it with {% raw %}<span class="math inline">\(K=1\)</span>{% endraw %}; centering alone does not establish empirical orthogonality.</p>

<p>Under this condition, Cauchy–Schwarz gives {% raw %}<span class="math inline">\(\sum_j\|\Delta_j\|_n\le\sqrt{dK}\|\Delta\|_n\)</span>{% endraw %}. Using {% raw %}<span class="math inline">\(t\sqrt{dK}\|\Delta\|_n\le\|\Delta\|_n^2/4+dKt^2\)</span>{% endraw %} then yields</p>

{% raw %}<div class="math display">\[\|\widehat f-f^*\|_n^2\le4d(1+K)t^2\le8Kdt^2.\]</div>{% endraw %}

<p>For a specified failure probability {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(t=\max\{\delta_{\max},\sigma\sqrt{8\log(d/\eta)/n}\}\)</span>{% endraw %}. The same inequality then holds with probability at least {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %}. No independence between the coordinatewise noise suprema was assumed.</p>
<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-11-05-localization-and-the-uniform-law %}">Localization and the Uniform Law</a>; <a href="{% post_url 2022-11-08-vc-dimension-and-uniform-entropy-bounds %}">VC Dimension and Uniform Entropy Bounds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-12-03-rademacher-and-gaussian-complexity %}">Rademacher and Gaussian Complexity</a> · Next: <a href="{% post_url 2022-12-17-random-matrices-eigenvalue-and-operator-norm-bounds %}">Random Matrices: Eigenvalue and Operator-Norm Bounds</a></p></nav>

</div>
