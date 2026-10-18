---
layout: "post"
title: "Skorokhod Representation and Tightness on Path Space"
date: "2023-05-29"
tags: ["probability theory", "stochastic processes"]
excerpt: "A major question in the study of stochastic processes is how weak convergence can be used to characterize convergence in law almost surely."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2024/10/25/skorokhod-representation-and-tightness-on-path-space/", "/2024/10/25/skorokhod-representation/", "/2024/11/30/tightness/"]
---

<div class="note-content" markdown="0">

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="skorokhod-representation" data-note-section="title">

</div>
<p>Weak convergence concerns distributions and does not specify how random variables are coupled. Skorokhod’s representation theorem supplies a new coupling, on a common probability space, under which convergence is almost sure. The original joint distribution need not be preserved.</p>

<p>Let {% raw %}<span class="math inline">\((S,d)\)</span>{% endraw %} be a complete separable metric space, and let {% raw %}<span class="math inline">\(\mu_n\Rightarrow\mu\)</span>{% endraw %} be Borel probability measures on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. We construct measurable {% raw %}<span class="math inline">\(\widetilde X_n,\widetilde X:[0,1]\to S\)</span>{% endraw %}, with their respective laws {% raw %}<span class="math inline">\(\mu_n,\mu\)</span>{% endraw %} under Lebesgue measure, such that {% raw %}<span class="math inline">\(\widetilde X_n\to\widetilde X\)</span>{% endraw %} almost surely. This is Skorokhod’s representation theorem.</p>

<p>Choose refining countable Borel partitions {% raw %}<span class="math inline">\(\mathcal A_k\)</span>{% endraw %} whose cells have diameter at most {% raw %}<span class="math inline">\(2^{-k}\)</span>{% endraw %} and whose boundaries have {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-measure zero. Here is the construction. Around a countable dense set of centers choose radii in {% raw %}<span class="math inline">\((2^{-k-3},2^{-k-2})\)</span>{% endraw %}. For each center, at most countably many radii have spheres of positive {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-measure, since those spheres are disjoint. We can therefore choose zero-boundary radii in this interval, and the resulting balls cover {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Disjointise the balls in their fixed enumeration, subtracting only earlier balls, and intersect with the previous partition. Boundaries of each resulting cell lie in a finite union of zero-measure boundaries from its ancestors. Discard empty cells.</p>

<p>First take any Borel probability measure {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}; the partitions need not be {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}-continuity sets for this step. Give each first-level cell a consecutive half-open interval in {% raw %}<span class="math inline">\([0,1)\)</span>{% endraw %} of length {% raw %}<span class="math inline">\(\nu(A)\)</span>{% endraw %}. Subdivide its interval among its children, in their fixed enumeration, with lengths {% raw %}<span class="math inline">\(\nu(A')\)</span>{% endraw %}, and repeat. This forms nested intervals {% raw %}<span class="math inline">\(I_A^\nu\)</span>{% endraw %}, one for each cell {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(|I_A^\nu|=\nu(A)\)</span>{% endraw %}. Ignore the countable set of all endpoints and choose one representative {% raw %}<span class="math inline">\(x_A\in A\)</span>{% endraw %} for each nonempty cell.</p>

<p>For a point {% raw %}<span class="math inline">\(u\)</span>{% endraw %} outside the endpoints, let {% raw %}<span class="math inline">\(X_\nu^k(u)=x_A\)</span>{% endraw %} when {% raw %}<span class="math inline">\(u\in I_A^\nu\)</span>{% endraw %} at level {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Nested cells imply {% raw %}<span class="math inline">\(d(X_\nu^j(u),X_\nu^k(u))\leq2^{-k}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j\geq k\)</span>{% endraw %}. Completeness gives a limit {% raw %}<span class="math inline">\(X_\nu(u)\)</span>{% endraw %}. Give all exceptional points a fixed value in {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. The approximants and their limit are measurable. For a bounded continuous function {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\int_0^1f(X_\nu^k(u))\,du
=\sum_{A\in\mathcal A_k}\nu(A)f(x_A)
=\int_S f(x_{A_k(x)})\,\nu(dx)\longrightarrow\int_Sf(x)\,\nu(dx).\]</div>{% endraw %}

<p>The last convergence follows because {% raw %}<span class="math inline">\(d(x_{A_k(x)},x)\leq2^{-k}\)</span>{% endraw %}. Bounded convergence on the unit interval also gives convergence to {% raw %}<span class="math inline">\(\int_0^1 f(X_\nu(u))du\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(X_\nu\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}. This identifies the law directly; it does not require the incorrect assertion that the probability of an arbitrary closed set tends to zero.</p>

<p>Apply the construction to {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %}, using exactly the same cell tree and ordering. For each cell {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, the continuity-set part of the Portmanteau theorem gives {% raw %}<span class="math inline">\(\mu_n(A)\to\mu(A)\)</span>{% endraw %}. Each interval endpoint also converges: at the first level it is a finite sum of earlier cell masses; at later levels it is the parent’s left endpoint plus a finite sum of earlier sibling masses. Induction on the level proves the claim. Equivalently, at each fixed level the countable mass vectors satisfy</p>

{% raw %}<div class="math display">\[\sum_{A\in\mathcal A_k}|\mu_n(A)-\mu(A)|
=2\sum_{A\in\mathcal A_k}(\mu(A)-\mu_n(A))_+\longrightarrow0,\]</div>{% endraw %}

<p>by domination by the summable masses {% raw %}<span class="math inline">\(\mu(A)\)</span>{% endraw %}. Both the absolute values and the parentheses in this identity matter.</p>

<p>Outside the countable union of interval endpoints for all measures, fix {% raw %}<span class="math inline">\(k\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(u\)</span>{% endraw %} lie in the interior of {% raw %}<span class="math inline">\(I_A^\mu\)</span>{% endraw %}. Convergence of the two endpoints puts {% raw %}<span class="math inline">\(u\)</span>{% endraw %} in {% raw %}<span class="math inline">\(I_A^{\mu_n}\)</span>{% endraw %} for every sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Both limits {% raw %}<span class="math inline">\(X_\mu(u)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_{\mu_n}(u)\)</span>{% endraw %} lie in the closure of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, so their distance is at most {% raw %}<span class="math inline">\(2^{-k}\)</span>{% endraw %}. First let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(k\to\infty\)</span>{% endraw %}. This proves the almost sure convergence of the full sequence on the newly constructed probability space.</p>

<h2 data-note-section="1" id="tightness">1. Tightness</h2>
<p>For continuous processes, the random variable is the whole path. Equip {% raw %}<span class="math inline">\(C[0,1]\)</span>{% endraw %} with the uniform metric, and write {% raw %}<span class="math inline">\(\omega_f(\delta)=\sup_{|t-s|\leq\delta}|f(t)-f(s)|\)</span>{% endraw %}. A family of laws is tight if, for every {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, one compact set carries probability at least {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %} under every law. Arzelà–Ascoli suggests controlling the starting values and a sequence of moduli of continuity.</p>

<p>Suppose that, for every {% raw %}<span class="math inline">\(\varepsilon,\eta&gt;0\)</span>{% endraw %}, some {% raw %}<span class="math inline">\(A,\delta&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n_0\)</span>{% endraw %} satisfy</p>

{% raw %}<div class="math display">\[\mathbb P(|X_n(0)|&gt;A)\leq\eta,\qquad
\mathbb P(\omega_{X_n}(\delta)&gt;\varepsilon)\leq\eta\quad(n\geq n_0).\]</div>{% endraw %}

<p>These bounds can be made uniform over all {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. There are only finitely many omitted processes; each has finite starting value almost surely and continuous paths, so increasing {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and decreasing {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} handle them. Fix {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(A\)</span>{% endraw %} with uniform starting-tail bound {% raw %}<span class="math inline">\(\eta/2\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(\delta_m\downarrow0\)</span>{% endraw %} with</p>

{% raw %}<div class="math display">\[\sup_n\mathbb P(\omega_{X_n}(\delta_m)&gt;2^{-m})\leq\eta 2^{-m-1},\qquad m\geq1.\]</div>{% endraw %}

<p>The set</p>

{% raw %}<div class="math display">\[K=\{f\in C[0,1]:|f(0)|\leq A,\ \omega_f(\delta_m)\leq2^{-m}\text{ for every }m\geq1\}\]</div>{% endraw %}

<p>is closed and equicontinuous. It is uniformly bounded as well: use finitely many intervals of length at most {% raw %}<span class="math inline">\(\delta_1\)</span>{% endraw %} to bound every value from {% raw %}<span class="math inline">\(f(0)\)</span>{% endraw %}. Arzelà–Ascoli makes {% raw %}<span class="math inline">\(K\)</span>{% endraw %} compact, and the union bound gives {% raw %}<span class="math inline">\(\sup_n\mathbb P(X_n\notin K)\leq\eta\)</span>{% endraw %}. This proves the criterion.</p>

<p>Consider now i.i.d. Rademacher variables {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb P(Y_i=1)=\mathbb P(Y_i=-1)=1/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(S_k=\sum_{i=1}^kY_i\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(Z_n(k/n)=S_k/\sqrt n\)</span>{% endraw %} and interpolate linearly between adjacent mesh points. We will prove that the laws of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(C[0,1]\)</span>{% endraw %} converge to Wiener measure.</p>

<p>The fourth moment is {% raw %}<span class="math inline">\(\mathbb{E} S_m^4=m+6\binom m2=3m^2-2m\)</span>{% endraw %}. The same calculation handles all interpolated increments at once. If {% raw %}<span class="math inline">\(s&lt;t\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[Z_n(t)-Z_n(s)=n^{-1/2}\sum_i a_iY_i,\qquad
0\leq a_i\leq1,\quad\sum_i a_i=n(t-s),\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(a_i\)</span>{% endraw %} is {% raw %}<span class="math inline">\(n\)</span>{% endraw %} times the length of the portion of the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}-th mesh interval lying in {% raw %}<span class="math inline">\([s,t]\)</span>{% endraw %}. Independence gives</p>

{% raw %}<div class="math display">\[\mathbb{E}|Z_n(t)-Z_n(s)|^4
=n^{-2}\left[3\left(\sum_i a_i^2\right)^2-2\sum_i a_i^4\right]
\leq3|t-s|^2.\]</div>{% endraw %}

<p>To see explicitly why this gives tightness, choose {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1/4\)</span>{% endraw %}. On the dyadic grid of mesh {% raw %}<span class="math inline">\(2^{-m}\)</span>{% endraw %}, Markov’s inequality and a union bound give, uniformly in {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb P\left(\max_{0\leq j&lt;2^m}|Z_n((j+1)2^{-m})-Z_n(j2^{-m})|&gt;2^{-m\alpha}\right)
\leq3\,2^{-m(1-4\alpha)}.\]</div>{% endraw %}

<p>The sum over {% raw %}<span class="math inline">\(m\geq M\)</span>{% endraw %} tends to zero. If none of these events occurs, dyadic approximation of each endpoint, followed by continuity, gives {% raw %}<span class="math inline">\(\omega_{Z_n}(2^{-M})\leq C_\alpha2^{-M\alpha}\)</span>{% endraw %}: the successive approximation errors are bounded by the geometric sum {% raw %}<span class="math inline">\(\sum_{m\geq M}2^{-m\alpha}\)</span>{% endraw %}, and the two level-{% raw %}<span class="math inline">\(M\)</span>{% endraw %} approximations are at most one mesh interval apart. Since {% raw %}<span class="math inline">\(Z_n(0)=0\)</span>{% endraw %}, the preceding criterion proves tightness.</p>

<p>It remains to identify every joint distribution, not only the one-time marginals. Fix {% raw %}<span class="math inline">\(0=t_0&lt;t_1&lt;\cdots&lt;t_r\leq1\)</span>{% endraw %}. The disjoint random-walk blocks</p>

{% raw %}<div class="math display">\[D_{n,j}=\frac{S_{\lfloor nt_j\rfloor}-S_{\lfloor nt_{j-1}\rfloor}}{\sqrt n},\qquad1\leq j\leq r,\]</div>{% endraw %}

<p>are independent, and their joint characteristic function is</p>

{% raw %}<div class="math display">\[\mathbb{E}\exp\left(i\sum_{j=1}^r\theta_jD_{n,j}\right)
=\prod_{j=1}^r\left(\cos(\theta_j/\sqrt n)\right)^{\lfloor nt_j\rfloor-\lfloor nt_{j-1}\rfloor}
\longrightarrow\exp\left[-\frac12\sum_{j=1}^r\theta_j^2(t_j-t_{j-1})\right].\]</div>{% endraw %}

<p>The limit follows from {% raw %}<span class="math inline">\(\log\cos x=-x^2/2+O(x^4)\)</span>{% endraw %}. It identifies independent centered Gaussian increments of the required variances. Each interpolated value differs from {% raw %}<span class="math inline">\(S_{\lfloor nt\rfloor}/\sqrt n\)</span>{% endraw %} by at most {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}, so the same joint convergence holds for the increments of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %}, and hence for its finite-dimensional vectors.</p>

<p>By Prokhorov’s theorem, tightness gives a weakly convergent subsubsequence of every subsequence. Evaluations at finitely many times are continuous maps on {% raw %}<span class="math inline">\(C[0,1]\)</span>{% endraw %}, so the limiting law has the Brownian finite-dimensional distributions just computed. These distributions determine the law on {% raw %}<span class="math inline">\(C[0,1]\)</span>{% endraw %}: rational-time evaluations generate its Borel sigma-field, because uniform distance between continuous functions is the supremum of their rational-time distances and the space is separable. Thus every subsequential limit is Wiener measure. If the full sequence failed to converge, a subsequence separated from that law would have a further convergent subsequence, a contradiction. Therefore the entire sequence converges weakly to Brownian motion.</p>

<p>The compactness step uses the tightness implication in <a href="https://www.cambridge.org/core/books/stochastic-processes/055A84B1EB586FE3032C0CA7D49598AC">Bass (2011, Theorem 30.4)</a>. The representation construction above proves the stronger coupling assertion separately; convergence in law by itself makes no assertion about the original sample paths.</p>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-09-19-a-strict-local-martingale-and-the-meaning-of-boundedness %}">A Strict Local Martingale and the Meaning of Boundedness</a></p></nav>

</div>
