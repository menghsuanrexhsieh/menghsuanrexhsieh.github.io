---
layout: "post"
title: "Nonparametric Regression and Local Polynomial Estimators"
date: "2023-10-13"
tags: ["statistics", "nonparametric estimation"]
excerpt: "This concludes the proof of the desired statement on the upper bound of the uniform risk."
note_series: "Nonparametric estimation"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Fundamentals of Nonparametric Estimation/nonparametric.tex"
redirect_from: ["/2023/07/19/nonparametric-regression-and-local-polynomial-estimators/", "/2023/07/19/nonparametric-regression-and-local-polynomials/", "/2023/08/26/local-polynomial-estimators/"]
---

<div class="note-content" markdown="0">
<p>Kernel regression fits a constant near each evaluation point. A local polynomial fit also estimates slope and higher-order terms, allowing its bias to reflect additional smoothness. We derive the weights and their exact polynomial reproduction, then prove pointwise, integrated, and uniform risk bounds. The uniform bound requires Gaussian noise and control between evaluation points.</p>
<div id="nonparametric-regression"></div><p>For a random pair {% raw %}<span class="math inline">\((X,Y)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb E|Y|&lt;\infty\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(f(x)=\mathbb E[Y\mid X=x]\)</span>{% endraw %} be a version of the regression function. Write {% raw %}<span class="math inline">\(Y_i=f(X_i)+\xi_i\)</span>{% endraw %}. Independent identically distributed pairs give {% raw %}<span class="math inline">\(\mathbb E[\xi_i\mid X_i]=0\)</span>{% endraw %}; the residual need not be independent of its design value. Below, risk calculations use a deterministic design {% raw %}<span class="math inline">\(X_i\in[0,1]\)</span>{% endraw %} and independent mean-zero errors with the stated moment bounds.</p>

<p>The Nadaraya–Watson estimate is {% raw %}<span class="math inline">\(\widehat f_n^{\rm NW}(x)=\sum_iY_iK((X_i-x)/h)/\sum_iK((X_i-x)/h)\)</span>{% endraw %} when the denominator is nonzero; define it as zero otherwise. Thus it is linear in the responses, with weights depending only on the design and {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. A zero denominator is handled by this piecewise definition, not by multiplying an undefined quotient by zero.</p>

<p>There is also a density plug-in interpretation. If the pair has joint density {% raw %}<span class="math inline">\(p(x,y)\)</span>{% endraw %} and marginal {% raw %}<span class="math inline">\(p_X(x)&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f(x)=\int yp(x,y)dy/p_X(x)\)</span>{% endraw %}. For a kernel with {% raw %}<span class="math inline">\(\int K=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\int uK(u)du=0\)</span>{% endraw %}, and finite absolute first moment, set</p>

{% raw %}<div class="math display">\[\widehat p_n(x,y)=\frac1{nh^2}\sum_iK((X_i-x)/h)K((Y_i-y)/h).\]</div>{% endraw %}

<p>The change of variable {% raw %}<span class="math inline">\(u=(Y_i-y)/h\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int K((Y_i-y)/h)dy=h\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[\int yK((Y_i-y)/h)dy=h\int(Y_i-hu)K(u)du=hY_i.\]</div>{% endraw %}

<p>Therefore {% raw %}<span class="math inline">\(\int\widehat p_n(x,y)dy=(nh)^{-1}\sum_iK((X_i-x)/h)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int y\widehat p_n(x,y)dy=(nh)^{-1}\sum_iY_iK((X_i-x)/h)\)</span>{% endraw %}. Their ratio is precisely the Nadaraya–Watson estimator.</p>
<h3 id="sec:lp-estimator" data-note-section="1">1. Local polynomial estimators</h3>
<p>For a nonnegative kernel with positive local weight sum, the Nadaraya–Watson estimate uniquely minimizes {% raw %}<span class="math inline">\(\sum_i(Y_i-t)^2K((X_i-x)/h)\)</span>{% endraw %}. Replace the constant {% raw %}<span class="math inline">\(t\)</span>{% endraw %} by a degree-{% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} polynomial in local coordinates. Put</p>

{% raw %}<div class="math display">\[U(u)=(1,u,u^2/2!,\ldots,u^\ell/\ell!)^\top,\qquad\theta(x)=(f(x),hf'(x),\ldots,h^\ell f^{(\ell)}(x))^\top.\]</div>{% endraw %}

<p>Define {% raw %}<span class="math inline">\(\widehat\theta_n(x)\)</span>{% endraw %} as the minimizer over {% raw %}<span class="math inline">\(t\in\mathbb R^{\ell+1}\)</span>{% endraw %} of</p>

{% raw %}<div class="math display">\[\sum_i[Y_i-t^\top U((X_i-x)/h)]^2K((X_i-x)/h),\qquad \widehat f_n(x)=U(0)^\top\widehat\theta_n(x).\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, the fitted function of the nearby coordinate is a polynomial. The overall map {% raw %}<span class="math inline">\(x\mapsto\widehat f_n(x)\)</span>{% endraw %} generally is not a single polynomial, because the weights and fit change with {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. The local estimator remains linear in the response vector whenever the local matrix is invertible.</p>
<h3 id="pointwise-risk" data-note-section="1.1">1.1. Pointwise Risk</h3>
<p>Let {% raw %}<span class="math inline">\(u_i=(X_i-x)/h\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[a_{nx}=\frac1{nh}\sum_iY_iU(u_i)K(u_i),\qquad B_{nx}=\frac1{nh}\sum_iU(u_i)U(u_i)^\top K(u_i).\]</div>{% endraw %}

<p>After discarding the term independent of {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the least-squares criterion divided by {% raw %}<span class="math inline">\(nh\)</span>{% endraw %} is {% raw %}<span class="math inline">\(-2t^\top a_{nx}+t^\top B_{nx}t\)</span>{% endraw %}. Its normal equation is {% raw %}<span class="math inline">\(B_{nx}\widehat\theta_n=a_{nx}\)</span>{% endraw %}. Positive definiteness makes the criterion strictly convex and gives a unique minimizer. The following assumptions refer to the bandwidth sequence under consideration.</p>
<div id="as:eigen" class="assumption" data-note-kind="Assumption" data-note-number="1"><p>Assumption 1. For some {% raw %}<span class="math inline">\(\lambda_0&gt;0\)</span>{% endraw %}, every sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\inf_{x\in[0,1]}\lambda_{\min}(B_{nx})\ge\lambda_0\)</span>{% endraw %}.</p>
</div>
<div id="as:Xi-regularity" class="assumption" data-note-kind="Assumption" data-note-number="2"><p>Assumption 2. For some {% raw %}<span class="math inline">\(a_0&gt;0\)</span>{% endraw %}, every interval {% raw %}<span class="math inline">\(A\subset[0,1]\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(n^{-1}\sum_i\mathbf1\{X_i\in A\}\le a_0\max(|A|,1/n)\)</span>{% endraw %}.</p>
</div>
<div id="as:kernel-regularity" class="assumption" data-note-kind="Assumption" data-note-number="3"><p>Assumption 3. The kernel is nonnegative, supported on {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %}, and bounded by {% raw %}<span class="math inline">\(K_{\max}\)</span>{% endraw %}. The bounds below also hold for signed kernels if the matrix in Assumption 1 remains positive definite, but nonnegativity suffices for the stated least-squares construction.</p>
</div>
<p>Solving the normal equations gives the weights</p>

{% raw %}<div class="math display">\[W_{ni}^*(x)=\frac1{nh}U(0)^\top B_{nx}^{-1}U(u_i)K(u_i),\qquad\widehat f_n(x)=\sum_iW_{ni}^*(x)Y_i.\]</div>{% endraw %}

<p>The inverse is essential. Since {% raw %}<span class="math inline">\(\|U(0)\|=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\|B_{nx}^{-1}\|\le\lambda_0^{-1}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sup_{|u|\le1}\|U(u)\|\le(\sum_{j\ge0}1/(j!)^2)^{1/2}&lt;2\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(|W_{ni}^*|\le2K_{\max}/(nh\lambda_0)\)</span>{% endraw %}. Only observations in {% raw %}<span class="math inline">\([x-h,x+h]\cap[0,1]\)</span>{% endraw %} contribute. Their number is at most {% raw %}<span class="math inline">\(a_0\max(2nh,1)=2a_0nh\)</span>{% endraw %} when {% raw %}<span class="math inline">\(h\ge1/(2n)\)</span>{% endraw %}. Therefore, with {% raw %}<span class="math inline">\(C_* =\max(2K_{\max}/\lambda_0,4a_0K_{\max}/\lambda_0)\)</span>{% endraw %},</p>
<span id="eq:sup-W"></span><span id="eq:sum-W"></span><span id="eq:W-zero"></span>{% raw %}<div class="math display">\[\sup_{i,x}|W_{ni}^*(x)|\le C_*/(nh),\qquad\sum_i|W_{ni}^*(x)|\le C_*,\qquad W_{ni}^*(x)=0\quad\text{if }|X_i-x|&gt;h.\tag{1}\]</div>{% endraw %}

<p>The other essential fact is exact polynomial reproduction. For the coordinate vector {% raw %}<span class="math inline">\(e_k\)</span>{% endraw %}, indexed from {% raw %}<span class="math inline">\(k=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\sum_iW_{ni}^*(x)\frac{u_i^k}{k!}=e_0^\top B_{nx}^{-1}\left[\frac1{nh}\sum_iU(u_i)U(u_i)^\top K(u_i)\right]e_k=\mathbf1\{k=0\}.\]</div>{% endraw %}

<p>Thus the weights sum to one and annihilate the centered monomials of degrees {% raw %}<span class="math inline">\(1,\ldots,\ell\)</span>{% endraw %}, even near the boundary.</p>

<p>Suppose {% raw %}<span class="math inline">\(f\in\Sigma(\beta,L)\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\ell=\lceil\beta\rceil-1\)</span>{% endraw %}. The Taylor remainder after degree {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(L|z-x|^\beta/\ell!\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\ell=0\)</span>{% endraw %} this is the Hölder condition; for {% raw %}<span class="math inline">\(\ell\ge1\)</span>{% endraw %}, the integral remainder from the preceding kernel-density note gives this bound since its integral constant is at most {% raw %}<span class="math inline">\(1/\ell!\)</span>{% endraw %}. Polynomial reproduction cancels all Taylor terms except {% raw %}<span class="math inline">\(f(x)\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[|b(x)|=\left|\sum_iW_{ni}^*(x)[f(X_i)-\sum_{k=0}^\ell f^{(k)}(x)(X_i-x)^k/k!]\right|\le\frac{LC_*}{\ell!}h^\beta=:q_1h^\beta.\]</div>{% endraw %}

<p>If the errors are independent, centered, and satisfy {% raw %}<span class="math inline">\(\mathbb E\xi_i^2\le\sigma_{\max}^2\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\operatorname{Var}\widehat f_n(x)=\sum_i(W_{ni}^*)^2\mathbb E\xi_i^2\le\sigma_{\max}^2\max_i|W_{ni}^*|\sum_i|W_{ni}^*|\le\frac{C_*^2\sigma_{\max}^2}{nh}=:\frac{q_2}{nh}.\]</div>{% endraw %}

<p>Hence {% raw %}<span class="math inline">\(\operatorname{MSE}(x)\le q_1^2h^{2\beta}+q_2/(nh)\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} in the class. The minimizing bandwidth for this upper bound is {% raw %}<span class="math inline">\(h_*=[q_2/(2\beta q_1^2)]^{1/(2\beta+1)}n^{-1/(2\beta+1)}\)</span>{% endraw %}. Any fixed positive multiple of this rate gives {% raw %}<span class="math inline">\(\sup_f\sup_x\mathbb E_f|\widehat f_n(x)-f(x)|^2=O(n^{-2\beta/(2\beta+1)})\)</span>{% endraw %}. Integrating this uniform bound over {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, by Tonelli, gives the same rate for expected squared {% raw %}<span class="math inline">\(L^2[0,1]\)</span>{% endraw %} error. Random designs require conditional versions of the assumptions and control of exceptional design events before these become unconditional risk bounds.</p>
<div id="result-4" class="remark" data-note-kind="Remark" data-note-number="4"><p>Remark 4. If {% raw %}<span class="math inline">\(K\ge0\)</span>{% endraw %} is positive on a set of positive measure, then {% raw %}<span class="math inline">\(B=\int U(u)U(u)^\top K(u)du\)</span>{% endraw %} is positive definite. Indeed, {% raw %}<span class="math inline">\(v^\top Bv=\int(v^\top U(u))^2K(u)du\)</span>{% endraw %}. A nonzero vector {% raw %}<span class="math inline">\(v\)</span>{% endraw %} defines a nonzero polynomial, which has only finitely many roots and cannot vanish on a positive-measure set. This proves strict positivity. It does not alone prove Assumption 1: the discrete design must approximate the appropriate integral, and at the boundary that integral is one-sided.</p>
</div>
<div id="result-5" class="remark" data-note-kind="Remark" data-note-number="5"><p>Remark 5. Here is a complete verification for the equally spaced design {% raw %}<span class="math inline">\(X_i=i/n\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(K(u)\ge K_{\min}\mathbf1\{|u|\le\Delta\}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(K_{\min},\Delta&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Delta\le1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(h\to0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(nh\to\infty\)</span>{% endraw %}. Then the rescaled design {% raw %}<span class="math inline">\(u_i=(i/n-x)/h\)</span>{% endraw %} has mesh {% raw %}<span class="math inline">\(d_n=1/(nh)\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(x\le1-h\Delta\)</span>{% endraw %}, it covers {% raw %}<span class="math inline">\([0,\Delta]\)</span>{% endraw %} up to an endpoint discrepancy of at most {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(x&gt;1-h\Delta\)</span>{% endraw %}, it covers {% raw %}<span class="math inline">\([-\Delta,0]\)</span>{% endraw %} up to the same discrepancy for all large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(1-2h\Delta&gt;1/n\)</span>{% endraw %}.</p>

<p>On either interval, {% raw %}<span class="math inline">\(q_v(u)=(v^\top U(u))^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_v'\)</span>{% endraw %} are bounded uniformly over {% raw %}<span class="math inline">\(\|v\|=1\)</span>{% endraw %}. On each mesh cell the Riemann-sum error is at most {% raw %}<span class="math inline">\(d_n\)</span>{% endraw %} times the oscillation, hence {% raw %}<span class="math inline">\(O(d_n^2)\)</span>{% endraw %}; summing cells and endpoint errors gives {% raw %}<span class="math inline">\(O(d_n)\)</span>{% endraw %}, uniformly over both {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and unit {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Consequently</p>

{% raw %}<div class="math display">\[\inf_{x,\|v\|=1}v^\top B_{nx}v\ge K_{\min}\left[\min_{I=[-\Delta,0],[0,\Delta]}\inf_{\|v\|=1}\int_Iq_v(u)du-O((nh)^{-1})\right].\]</div>{% endraw %}

<p>Each integral is positive by the polynomial argument. Its minimum over the compact unit sphere is strictly positive by continuity, and there are just two intervals. Taking half this minimum proves Assumption 1. Also the grid has at most {% raw %}<span class="math inline">\(n|A|+1\le2\max(n|A|,1)\)</span>{% endraw %} points in an interval, proving Assumption 2 with {% raw %}<span class="math inline">\(a_0=2\)</span>{% endraw %}. The requirement is {% raw %}<span class="math inline">\(nh\to\infty\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(nh\to0\)</span>{% endraw %}.</p>
</div>
<h3 id="uniform-risk" data-note-section="1.2">1.2. Uniform Risk</h3>
<p>Now assume independent Gaussian errors {% raw %}<span class="math inline">\(\xi_i\sim \mathcal{N}(0,\sigma_\xi^2)\)</span>{% endraw %}, a deterministic design satisfying Assumptions 1–2, and a kernel satisfying Assumption 3 that is globally Lipschitz. All constants may depend on the smoothness, design, noise and kernel bounds, but not on {% raw %}<span class="math inline">\(n\)</span>{% endraw %} or on {% raw %}<span class="math inline">\(f\)</span>{% endraw %} within its class. Lipschitz regularity of the kernel does not restrict the regression smoothness {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} to one.</p>

<p>We first prove the required maximum bounds. If {% raw %}<span class="math inline">\(P(|Z_i|&gt;t)\le K_i e^{-D_it^p}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p\ge1\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(C_i=((1+K_i)/D_i)^{1/p}\)</span>{% endraw %}. Tail integration gives</p>

{% raw %}<div class="math display">\[\mathbb E[e^{(|Z_i|/C_i)^p}-1]\le K_i\int_0^\infty(1+s)^{-(1+K_i)}ds=1.\]</div>{% endraw %}

<p>With {% raw %}<span class="math inline">\(C=\max_iC_i\)</span>{% endraw %}, the maximum of these nonnegative exponential transforms is at most their sum. Jensen, using convexity of {% raw %}<span class="math inline">\(z\mapsto e^{z^p}-1\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(\mathbb E\max_{i\le M}|Z_i|\le C[\log(1+M)]^{1/p}\)</span>{% endraw %}.</p>
<p><em>Remark.</em> The exponential-moment argument for the <a href="#uniform-risk">maximum bound</a> does not assume independence of the variables {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %}.</p>

<p>For centered Gaussian vectors {% raw %}<span class="math inline">\(\eta_j\in\mathbb R^d\)</span>{% endraw %}, suppose each coordinate variance is at most {% raw %}<span class="math inline">\(v^2&gt;0\)</span>{% endraw %}. Gaussian integration gives {% raw %}<span class="math inline">\(\mathbb E\exp(\eta_{jk}^2/(4v^2))\le\sqrt2\)</span>{% endraw %}. Hence Jensen and {% raw %}<span class="math inline">\(\exp(\max a_{jk})\le\sum\exp(a_{jk})\)</span>{% endraw %} give</p>

{% raw %}<div class="math display">\[\mathbb E\max_{j\le M}\|\eta_j\|^2\le d\mathbb E\max_{j,k}\eta_{jk}^2\le4dv^2\log(\sqrt2Md).\]</div>{% endraw %}

<p>Zero variance is trivial. The vectors may be dependent.</p>

<p>Let {% raw %}<span class="math inline">\(S_i(x)=U((X_i-x)/h)K((X_i-x)/h)\)</span>{% endraw %}. The compactly supported map {% raw %}<span class="math inline">\(u\mapsto U(u)K(u)\)</span>{% endraw %} is globally Lipschitz, with some constant {% raw %}<span class="math inline">\(L_S\)</span>{% endraw %}: on {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %} use the product rule bounds, and across the support endpoints use Lipschitz continuity and the fact that {% raw %}<span class="math inline">\(K\)</span>{% endraw %} vanishes there. Thus {% raw %}<span class="math inline">\(\|S_i(x)-S_i(z)\|\le L_S|x-z|/h\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[\Gamma=\sup_{x\in[0,1]}\left|\sum_i\xi_iW_{ni}^*(x)\right|\le\frac1{nh\lambda_0}\sup_x\left\|\sum_i\xi_iS_i(x)\right\|.\]</div>{% endraw %}

<p>Use the grid {% raw %}<span class="math inline">\(x_j=j/n^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j=0,\ldots,n^2\)</span>{% endraw %}, including both endpoints. Every {% raw %}<span class="math inline">\(x\)</span>{% endraw %} is within {% raw %}<span class="math inline">\(n^{-2}\)</span>{% endraw %} of a grid point. Put {% raw %}<span class="math inline">\(\eta_j=(nh)^{-1/2}\sum_i\xi_iS_i(x_j)\)</span>{% endraw %}, of dimension {% raw %}<span class="math inline">\(d=\ell+1\)</span>{% endraw %}. The grid and increment bounds give</p>

{% raw %}<div class="math display">\[\Gamma^2\le\frac{2}{nh\lambda_0^2}\max_j\|\eta_j\|^2+\frac{2L_S^2}{n^6h^4\lambda_0^2}\left(\sum_i|\xi_i|\right)^2.\]</div>{% endraw %}

<p>The normalization of {% raw %}<span class="math inline">\(\eta_j\)</span>{% endraw %} produces {% raw %}<span class="math inline">\(1/(nh)\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(1/(nh)^2\)</span>{% endraw %}, in the first term. Each coordinate variance is bounded by</p>

{% raw %}<div class="math display">\[\frac{4K_{\max}^2\sigma_\xi^2}{nh}\#\{i:|X_i-x_j|\le h\}\le8a_0K_{\max}^2\sigma_\xi^2=:v^2.\]</div>{% endraw %}

<p>Furthermore, Cauchy–Schwarz gives {% raw %}<span class="math inline">\(\mathbb E(\sum_i|\xi_i|)^2\le n\sum_i\mathbb E\xi_i^2=n^2\sigma_\xi^2\)</span>{% endraw %}. Substitution in the Gaussian maximum inequality proves</p>

{% raw %}<div class="math display">\[\mathbb E\Gamma^2\le C\frac{\log n}{nh}+\frac{C'}{n^4h^4}.\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(nh\to\infty\)</span>{% endraw %}, the remainder {% raw %}<span class="math inline">\((nh)^{-4}=o((nh)^{-1})\)</span>{% endraw %}. Continuity of the weights under these assumptions also makes the supremum measurable, since it equals a supremum over rational evaluation points. Combining with {% raw %}<span class="math inline">\(\|b\|_\infty\le q_1h^\beta\)</span>{% endraw %}, we obtain</p>

{% raw %}<div class="math display">\[\mathbb E_f\|\widehat f_n-f\|_\infty^2\le2q_1^2h^{2\beta}+C\frac{\log n}{nh}.\]</div>{% endraw %}

<p>Balancing these terms gives {% raw %}<span class="math inline">\(h=\alpha(\log n/n)^{1/(2\beta+1)}\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[\sup_{f\in\Sigma(\beta,L)}\mathbb E_f\|\widehat f_n-f\|_\infty^2=O((\log n/n)^{2\beta/(2\beta+1)}).\]</div>{% endraw %}

<p>Thus the root-risk normalization is {% raw %}<span class="math inline">\(\psi_n=(\log n/n)^{\beta/(2\beta+1)}\)</span>{% endraw %}; the bandwidth has a different exponent.</p>

<p>Why the logarithm is necessary in general. For the equally spaced Gaussian design, a matching lower bound follows from a finite testing construction. Choose a fixed smooth nonnegative bump {% raw %}<span class="math inline">\(g\)</span>{% endraw %} supported inside {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, with maximum one. On {% raw %}<span class="math inline">\(M=\lfloor1/h\rfloor\)</span>{% endraw %} disjoint intervals of length {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, place functions {% raw %}<span class="math inline">\(f_j(x)=a h^\beta g((x-t_j)/h)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(f_0=0\)</span>{% endraw %}. A sufficiently small fixed {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %} makes every {% raw %}<span class="math inline">\(f_j\)</span>{% endraw %} belong to {% raw %}<span class="math inline">\(\Sigma(\beta,L)\)</span>{% endraw %}: differentiating {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} times scales its Hölder seminorm by exactly {% raw %}<span class="math inline">\(h^{\beta-\ell}h^{-(\beta-\ell)}=1\)</span>{% endraw %}. Two distinct bumps have sup-norm distance {% raw %}<span class="math inline">\(a h^\beta\)</span>{% endraw %}.</p>

<p>The Gaussian sample laws satisfy</p>

{% raw %}<div class="math display">\[D(P_j\|P_0)=\frac1{2\sigma_\xi^2}\sum_if_j(i/n)^2\le\frac{a^2h^{2\beta}(nh+1)}{2\sigma_\xi^2}.\]</div>{% endraw %}

<p>Take {% raw %}<span class="math inline">\(h=c(\log n/n)^{1/(2\beta+1)}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %} small. Then the right side is at most {% raw %}<span class="math inline">\(\frac14\log M\)</span>{% endraw %} for all large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(\log M\sim\log n/(2\beta+1)\)</span>{% endraw %}. To see the testing consequence explicitly, let {% raw %}<span class="math inline">\(J\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\(\{1,\ldots,M\}\)</span>{% endraw %}, and draw data from {% raw %}<span class="math inline">\(P_J\)</span>{% endraw %}. Its mutual information is at most {% raw %}<span class="math inline">\(M^{-1}\sum_jD(P_j\|P_0)\)</span>{% endraw %}: subtracting the mutual information from that average gives the nonnegative divergence of the mixture from {% raw %}<span class="math inline">\(P_0\)</span>{% endraw %}. For any classifier with average error probability {% raw %}<span class="math inline">\(P_e\)</span>{% endraw %}, conditioning also on its error indicator gives {% raw %}<span class="math inline">\(H(J\mid\text{data})\le\log2+P_e\log M\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(H(J)=\log M\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P_e\ge1-\frac{M^{-1}\sum_jD(P_j\|P_0)+\log2}{\log M}\ge\frac12\]</div>{% endraw %}

<p>for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Convert any function estimator into a classifier by selecting the nearest bump in sup norm, breaking ties deterministically. If its error is below {% raw %}<span class="math inline">\(a h^\beta/2\)</span>{% endraw %}, the triangle inequality forces correct classification. Hence its maximal expected squared sup-norm error is at least {% raw %}<span class="math inline">\((a h^\beta/2)^2P_e\ge a^2h^{2\beta}/8\)</span>{% endraw %}. This proves the matching order {% raw %}<span class="math inline">\((\log n/n)^{2\beta/(2\beta+1)}\)</span>{% endraw %} for this design, and justifies the minimax claim under a concrete model. ◻</p>
<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-03-16-kernel-density-estimation-pointwise-and-integrated-risk %}">Kernel Density Estimation: Pointwise and Integrated Risk</a> · Next: <a href="{% post_url 2023-10-17-projection-estimators-and-linear-minimax-risk %}">Projection Estimators and Linear Minimax Risk</a></p></nav>


</div>
