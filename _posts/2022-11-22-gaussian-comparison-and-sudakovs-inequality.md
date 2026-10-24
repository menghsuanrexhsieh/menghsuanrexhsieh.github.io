---
layout: "post"
title: "Gaussian Comparison and Sudakov’s Inequality"
date: "2022-11-22"
tags: ["statistics", "empirical processes"]
excerpt: "Using these tools, we can develop the following idea, called Gaussian interpolation."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/11/22/gaussian-integration-by-parts-and-interpolation/", "/2022/11/26/slepians-inequality/", "/2022/11/29/sudakovs-minorization-inequality/"]
---

<div class="note-content" markdown="0">

<p>A Gaussian maximum depends on the covariance between its coordinates. Gaussian interpolation varies that covariance continuously, and integration by parts expresses the derivative of an expectation using second derivatives. For suitable smooth approximations to a maximum, the sign of this derivative is determined by increment variances. This gives comparison inequalities and, by comparison with independent variables, Sudakov’s lower bound.</p>

<p>Here we use Gaussian integration by parts to compare expectations under different covariance structures. Recall the <a href="{% post_url 2022-11-19-gaussian-process %}">definition and basic bounds for centred Gaussian processes</a>.</p>

<span id="gaussian-integration-by-parts-and-interpolation"></span>
<p>Throughout, Gaussian vectors and processes are centered. Without centering, even a singleton index set with different means contradicts the expected-supremum comparison. For infinite index sets we interpret expected suprema as suprema of finite-dimensional expected maxima. For a separable process this agrees with the ordinary expected supremum, in the extended sense: fix one index, subtract its integrable coordinate, and apply monotone convergence to nonnegative finite maxima.</p>

<p>Interpolation uses independent copies {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z(u)=\sqrt uX+\sqrt{1-u}Y\)</span>{% endraw %}. Independence can always be imposed because the comparisons concern the two marginal laws.</p>

<div id="lem:gaussian-i-b-p-univariate" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p>Lemma 1 (Gaussian integration by parts). If {% raw %}<span class="math inline">\(G\sim \mathcal{N}(0,1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is continuously differentiable, and {% raw %}<span class="math inline">\(f,f'\)</span>{% endraw %} have at most polynomial growth, then {% raw %}<span class="math inline">\(\mathbb Ef'(G)=\mathbb E[Gf(G)]\)</span>{% endraw %}.</p>
</div>

<p>Proof. Since {% raw %}<span class="math inline">\(\phi'(x)=-x\phi(x)\)</span>{% endraw %}, integration by parts gives</p>

{% raw %}<div class="math display">\[\int f'(x)\phi(x)\,dx=[f(x)\phi(x)]_{-\infty}^{\infty}-\int f(x)\phi'(x)\,dx=\int xf(x)\phi(x)\,dx.\]</div>{% endraw %}

<p>Polynomial growth makes the boundary term vanish and makes both integrals absolutely convergent. More generally the same identity holds for locally absolutely continuous {% raw %}<span class="math inline">\(f\)</span>{% endraw %} whenever the relevant integrals and vanishing boundary term are justified; arbitrary differentiability alone does not ensure this. ◻</p>

<div id="lem:gaussian-i-b-p-multivariate" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p>Lemma 2 (Multivariate integration by parts). Let {% raw %}<span class="math inline">\(X\sim \mathcal{N}(0,\Sigma)\)</span>{% endraw %}, allowing singular {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(f:\mathbb R^n\to\mathbb R\)</span>{% endraw %} be continuously differentiable with {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and its first derivatives of polynomial growth. Then</p>

{% raw %}<div class="math display">\[\mathbb E[X_if(X)]=\sum_j\Sigma_{ij}\mathbb E[\partial_jf(X)].\]</div>{% endraw %}
</div>

<p>Proof. Write {% raw %}<span class="math inline">\(X=AG\)</span>{% endraw %} with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} standard normal and {% raw %}<span class="math inline">\(AA^\top=\Sigma\)</span>{% endraw %}. Conditional univariate integration by parts and the chain rule give</p>

{% raw %}<div class="math display">\[\mathbb E[G_kf(AG)]=\sum_j A_{jk}\mathbb E[\partial_jf(AG)].\]</div>{% endraw %}

<p>Multiply by {% raw %}<span class="math inline">\(A_{ik}\)</span>{% endraw %} and sum over {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The coefficient becomes {% raw %}<span class="math inline">\(\sum_kA_{ik}A_{jk}=\Sigma_{ij}\)</span>{% endraw %}. Gaussian moments justify conditioning and integration; no inverse covariance is used. ◻</p>

<div id="lem:gaussian-interpolation" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p>Lemma 3 (Gaussian interpolation). Let {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} be independent centered Gaussian vectors with covariances {% raw %}<span class="math inline">\(\Sigma^X,\Sigma^Y\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f:\mathbb R^n\to\mathbb R\)</span>{% endraw %} is {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %}, with itself and its first two derivatives of polynomial growth, then for {% raw %}<span class="math inline">\(0&lt;u&lt;1\)</span>{% endraw %},</p>
</div>

<span id="eq:gaussian-interpolation"></span>
{% raw %}<div class="math display">\[\frac d{du}\mathbb Ef(Z(u))=\frac12\sum_{i,j}(\Sigma^X_{ij}-\Sigma^Y_{ij})\mathbb E[\partial_{ij}f(Z(u))].\]</div>{% endraw %}

<p>Proof. On each closed subinterval of {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, polynomial domination permits differentiation under expectation:</p>

{% raw %}<div class="math display">\[\frac d{du}\mathbb Ef(Z(u))=\frac12\sum_i\mathbb E\left[\partial_if(Z(u))\left(\frac{X_i}{\sqrt u}-\frac{Y_i}{\sqrt{1-u}}\right)\right].\]</div>{% endraw %}

<p>Condition on {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and apply Lemma 2 to the function {% raw %}<span class="math inline">\(x\mapsto\partial_if(\sqrt ux+\sqrt{1-u}Y)\)</span>{% endraw %}. Its {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th derivative is {% raw %}<span class="math inline">\(\sqrt u\partial_{ij}f\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[\mathbb E[X_i\partial_if(Z(u))]=\sqrt u\sum_j\Sigma^X_{ij}\mathbb E[\partial_{ij}f(Z(u))].\]</div>{% endraw %}

<p>Conditioning instead on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} gives the corresponding factor {% raw %}<span class="math inline">\(\sqrt{1-u}\)</span>{% endraw %} for the {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} term. Substitution cancels both denominators. The Hessian expression is uniformly integrable up to {% raw %}<span class="math inline">\(u=0,1\)</span>{% endraw %}, by polynomial growth and Gaussian moments, and the endpoint expectations are continuous. Integrating on {% raw %}<span class="math inline">\([a,b]\subset(0,1)\)</span>{% endraw %} and then letting {% raw %}<span class="math inline">\(a\downarrow0,b\uparrow1\)</span>{% endraw %} therefore compares the endpoints. ◻</p>

<h3 data-note-section="1" id="slepians-inequality">1. Slepian’s inequality</h3>
<p>The distributional comparison needs equal coordinate variances. The comparison of expected maxima below only needs ordered increment variances.</p>

<div id="lem:slepian-prelimianry" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p>Lemma 4. Suppose {% raw %}<span class="math inline">\(\Sigma^X_{ii}=\Sigma^Y_{ii}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb E(X_i-X_j)^2\le\mathbb E(Y_i-Y_j)^2\)</span>{% endraw %}. For a function satisfying Lemma 3 and {% raw %}<span class="math inline">\(\partial_{ij}f\ge0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(i\ne j\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\mathbb Ef(X)\ge\mathbb Ef(Y)\)</span>{% endraw %}.</p>
</div>

<p>Proof. The increment inequality and equal diagonal entries imply {% raw %}<span class="math inline">\(\Sigma^X_{ij}\ge\Sigma^Y_{ij}\)</span>{% endraw %}. The diagonal terms in the interpolation derivative vanish, and every off-diagonal term is nonnegative. Integrate the derivative from the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} endpoint to the {% raw %}<span class="math inline">\(X\)</span>{% endraw %} endpoint. ◻</p>

<div id="thm:slepian" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p>Theorem 5 (Slepian). Under Lemma 4's covariance assumptions, for every real {% raw %}<span class="math inline">\(t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(\max_iX_i\ge t)\le P(\max_iY_i\ge t).\]</div>{% endraw %}
</div>

<p>Proof. Choose a smooth nonincreasing {% raw %}<span class="math inline">\(H:\mathbb R\to[0,1]\)</span>{% endraw %} equal to one on {% raw %}<span class="math inline">\(( -\infty,-1]\)</span>{% endraw %} and zero on {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(h_m(x)=H(m(x-t))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_m(x)=\prod_i h_m(x_i)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(i\ne j\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\partial_{ij}f_m(x)=h_m'(x_i)h_m'(x_j)\prod_{k\ne i,j}h_m(x_k)\ge0.\]</div>{% endraw %}

<p>Lemma 4 applies to each {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(h_m(x)\to\mathbf1\{x&lt;t\}\)</span>{% endraw %} at every {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(x=t\)</span>{% endraw %}, bounded convergence gives {% raw %}<span class="math inline">\(P(\max_iX_i&lt;t)\ge P(\max_iY_i&lt;t)\)</span>{% endraw %}. Taking complements proves the claim. This one-sided smoothing handles degenerate coordinates and possible atoms without an unstated continuity assumption. ◻</p>

<div id="thm:slepian-fernique" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p>Theorem 6 (Sudakov–Fernique, also called Slepian–Fernique). For centered Gaussian processes, suppose</p>
</div>

<span id="as:slepian-fernique"></span>
{% raw %}<div class="math display">\[\mathbb E(X_t-X_s)^2\ge\mathbb E(Y_t-Y_s)^2\qquad(s,t\in T).\]</div>{% endraw %}

<p>Then {% raw %}<span class="math inline">\(\mathbb E\sup_tX_t\ge\mathbb E\sup_tY_t\)</span>{% endraw %}, with the finite-dimensional supremum convention above.</p>

<p>Proof. First restrict to {% raw %}<span class="math inline">\(n\)</span>{% endraw %} indices. For {% raw %}<span class="math inline">\(\alpha&gt;0\)</span>{% endraw %}, the smooth maximum</p>

{% raw %}<div class="math display">\[f_\alpha(x)=\alpha^{-1}\log\sum_i e^{\alpha x_i}\]</div>{% endraw %}

<p>satisfies {% raw %}<span class="math inline">\(0\le f_\alpha(x)-\max_ix_i\le(\log n)/\alpha\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(p_i=e^{\alpha x_i}/\sum_j e^{\alpha x_j}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\partial_if_\alpha=p_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\partial_{ij}f_\alpha=\alpha(\delta_{ij}p_i-p_ip_j)\)</span>{% endraw %}. These derivatives are bounded for fixed {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f_\alpha\)</span>{% endraw %} has linear growth, so Lemma 3 applies. For every symmetric matrix {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\begin{aligned}\sum_{i,j}\Sigma_{ij}(\delta_{ij}p_i-p_ip_j)&amp;=\sum_i\Sigma_{ii}p_i-\sum_{i,j}\Sigma_{ij}p_ip_j\\&amp;=\frac12\sum_{i,j}(\Sigma_{ii}+\Sigma_{jj}-2\Sigma_{ij})p_ip_j,\end{aligned}\]</div>{% endraw %}

<p>where the second equality uses {% raw %}<span class="math inline">\(\sum_jp_j=1\)</span>{% endraw %} in each diagonal term. Consequently,</p>

<span id="eq:slepian-fernique-equivalence"></span>
{% raw %}<div class="math display">\[\frac d{du}\mathbb Ef_\alpha(Z(u))=\frac\alpha4\sum_{i,j}\left[\mathbb E(X_i-X_j)^2-\mathbb E(Y_i-Y_j)^2\right]\mathbb E[p_i(Z(u))p_j(Z(u))]\ge0.\]</div>{% endraw %}

<p>Integration compares the two smooth maxima. Their deterministic approximation error is at most {% raw %}<span class="math inline">\((\log n)/\alpha\)</span>{% endraw %}, so expectation also converges as {% raw %}<span class="math inline">\(\alpha\to\infty\)</span>{% endraw %}. The smooth-maximum approximation proves the finite-set Sudakov–Fernique inequality in <a href="#thm:slepian-fernique">Theorem 6</a>. Taking suprema over all finite subsets proves the general statement. For separable versions, take a common countable determining set and apply monotone convergence after subtracting one coordinate, as described above. ◻</p>

<h3 data-note-section="2" id="sudakovs-minorization-inequality">2. Sudakov’s minorization inequality</h3>
<p>The comparison with independent Gaussian variables now converts metric separation into a lower bound.</p>

<div id="thm:sudakov-minorization" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p>Theorem 7 (Sudakov minorization). For a nonempty centered Gaussian process, put {% raw %}<span class="math inline">\(d(s,t)^2=\mathbb E(X_s-X_t)^2\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[c\varepsilon\sqrt{\log N(\varepsilon,T,d)}\le\mathbb E\sup_{t\in T}X_t.\]</div>{% endraw %}
</div>

<p>Proof. For any finite {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-separated family {% raw %}<span class="math inline">\(t_1,\ldots,t_m\)</span>{% endraw %}, compare {% raw %}<span class="math inline">\(X_{t_i}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Y_i=(\varepsilon/\sqrt2)g_i\)</span>{% endraw %}, where the {% raw %}<span class="math inline">\(g_i\)</span>{% endraw %} are independent standard normals. Their increment variances are {% raw %}<span class="math inline">\(\varepsilon^2\)</span>{% endraw %}, so Theorem 6 and the independent-maximum lower bound give</p>

{% raw %}<div class="math display">\[\mathbb E\sup_tX_t\ge(\varepsilon/\sqrt2)\mathbb E\max_{i\le m}g_i\ge c\varepsilon\sqrt{\log m}.\]</div>{% endraw %}

<p>A greedy selection either stops at a maximal separated family, which covers {% raw %}<span class="math inline">\(T\)</span>{% endraw %} at radius {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, or yields arbitrarily large finite separated families. In the first case {% raw %}<span class="math inline">\(m\ge N(\varepsilon,T,d)\)</span>{% endraw %}. In the second the expected supremum is infinite. The packing argument proves Sudakov’s bound in <a href="#thm:sudakov-minorization">Theorem 7</a> without assuming existence of a finite maximal packing. Covering conventions using strict balls can be handled by first changing the radius by an arbitrarily small factor. ◻</p>

<div id="result-8" class="remark" data-note-number="8" data-note-kind="Remark">
<p>Remark 8 (The {% raw %}<span class="math inline">\(\ell^1\)</span>{% endraw %} ball). For {% raw %}<span class="math inline">\(T=B_1^d\)</span>{% endraw %}, the process {% raw %}<span class="math inline">\(X_t=\langle g,t\rangle\)</span>{% endraw %} has Euclidean canonical metric and</p>

{% raw %}<div class="math display">\[\mathbb E\sup_{t\in B_1^d}\langle g,t\rangle=\mathbb E\max_{i\le d}|g_i|\le\sqrt{2\log(2d)}.\]</div>{% endraw %}

<p>Indeed, exponential Markov and the Gaussian mgf bound the mean maximum by {% raw %}<span class="math inline">\(\log(2d)/\lambda+\lambda/2\)</span>{% endraw %}, minimized at {% raw %}<span class="math inline">\(\lambda=\sqrt{2\log(2d)}\)</span>{% endraw %}. Sudakov therefore gives</p>

{% raw %}<div class="math display">\[\log N(\varepsilon,B_1^d,\|\cdot\|_2)\le\frac{C\log(2d)}{\varepsilon^2}.\]</div>{% endraw %}

<p>There is no extra factor {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} on the upper bound for the width. The {% raw %}<span class="math inline">\(2d\)</span>{% endraw %} also covers {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}. Compare this estimate with the volumetric bound and use whichever is smaller at the desired scale.</p>
</div>

<div id="thm:sudakov-two-sided-Rd" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p>Theorem 9. Let {% raw %}<span class="math inline">\(T\subset\mathbb R^d\)</span>{% endraw %} be nonempty and bounded, {% raw %}<span class="math inline">\(d\ge1\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(s(T)=\sup_{\varepsilon&gt;0}\varepsilon\sqrt{\log N(\varepsilon,T,\|\cdot\|_2)}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w(T)=\mathbb E\sup_{t\in T}\langle g,t\rangle\)</span>{% endraw %}. Then</p>
</div>

<span id="eq:sudakov-two-sided-Rd"></span>
{% raw %}<div class="math display">\[cs(T)\le w(T)\le C\log(2d)\,s(T).\]</div>{% endraw %}

<p>Proof. The lower bound is Theorem 7. If the diameter {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is zero, both sides vanish. Otherwise two points at distance approaching {% raw %}<span class="math inline">\(D\)</span>{% endraw %} show {% raw %}<span class="math inline">\(N(D/3,T)\ge2\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(s(T)\ge(D/3)\sqrt{\log2}\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(t_0\in T\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(r_k=D2^{-k}\)</span>{% endraw %}, and take finite {% raw %}<span class="math inline">\(r_k\)</span>{% endraw %}-nets with maps {% raw %}<span class="math inline">\(\pi_k\)</span>{% endraw %}; let {% raw %}<span class="math inline">\(\pi_0t=t_0\)</span>{% endraw %}. A net may be chosen with at most {% raw %}<span class="math inline">\(N(r_k,T)\)</span>{% endraw %} centers (or with an arbitrarily small radius enlargement). The increments at level {% raw %}<span class="math inline">\(k\)</span>{% endraw %} have standard deviations at most {% raw %}<span class="math inline">\(r_k+r_{k-1}=3r_k\)</span>{% endraw %}, and at most {% raw %}<span class="math inline">\(N(r_k,T)N(r_{k-1},T)\)</span>{% endraw %} possible pairs. The finite Gaussian maximum bound, applied to both signs, yields</p>

{% raw %}<div class="math display">\[\mathbb E\sup_t|\langle g,\pi_kt-\pi_{k-1}t\rangle|\le Cr_k\sqrt{\log(2N(r_k,T)N(r_{k-1},T))}\le C's(T).\]</div>{% endraw %}

<p>For the last inequality use monotonicity of covering numbers, {% raw %}<span class="math inline">\(r_k\sqrt{\log N(r_k,T)}\le s(T)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r_k\le D\lesssim s(T)\)</span>{% endraw %}. The telescoping identity and Cauchy–Schwarz then give, for every integer {% raw %}<span class="math inline">\(K\ge1\)</span>{% endraw %},</p>

<span id="eq:sudakov-two-sided-final-bound"></span>
{% raw %}<div class="math display">\[w(T)\le C K s(T)+r_K\mathbb E\|g\|_2\le C K s(T)+D2^{-K}\sqrt d.\]</div>{% endraw %}

<p>Here the initial term has mean {% raw %}<span class="math inline">\(\mathbb E\langle g,t_0\rangle=0\)</span>{% endraw %}; the supremum of a sum is bounded by the sum of suprema, not equal to it. Choose {% raw %}<span class="math inline">\(K=\max\{1,\lceil\log_2\sqrt d\rceil\}\)</span>{% endraw %}. The residual is at most {% raw %}<span class="math inline">\(D\lesssim s(T)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(K\lesssim\log(2d)\)</span>{% endraw %}. This proves the upper bound with all scale factors retained. If {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is unbounded, arbitrarily distant pairs already force the extended width and {% raw %}<span class="math inline">\(s(T)\)</span>{% endraw %} to be infinite; the bounded formulation avoids undefined products at zero radius. ◻</p>
<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a>; <a href="{% post_url 2022-11-19-gaussian-process %}">Gaussian Process</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-11-19-gaussian-process %}">Gaussian Process</a> · Next: <a href="{% post_url 2022-12-03-rademacher-and-gaussian-complexity %}">Rademacher and Gaussian Complexity</a></p></nav>


</div>
