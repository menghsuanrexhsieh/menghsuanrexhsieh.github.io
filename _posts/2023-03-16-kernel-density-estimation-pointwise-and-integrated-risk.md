---
layout: "post"
title: "Kernel Density Estimation: Pointwise and Integrated Risk"
date: "2023-03-16"
tags: ["statistics", "nonparametric estimation"]
excerpt: "Kernel Density Estimation: Pointwise and Integrated Risk. Notes on nonparametric estimation."
note_series: "Nonparametric estimation"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Fundamentals of Nonparametric Estimation/nonparametric.tex"
redirect_from: ["/2023/03/29/kernel-density-estimation-bias-and-variance/", "/2023/03/29/kernel-density-estimation-pointwise-and-integrated-risk/", "/2023/05/06/mean-integrated-squared-error/", "/2023/06/12/fourier-analysis-of-kernel-density-estimators/"]
---

<div class="note-content" markdown="0">
<p>Kernel density estimation replaces each observation by a small local bump. The bandwidth determines the tradeoff between approximation bias and variance. We calculate pointwise risk, integrated risk, and then an exact Fourier representation that also identifies an oracle smoother.</p>
<div id="kernel-density-estimation"></div><p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent with density {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, and empirical cdf {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}. The Glivenko–Cantelli theorem gives {% raw %}<span class="math inline">\(\sup_x|F_n(x)-F(x)|\to0\)</span>{% endraw %} almost surely. At a continuity point of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, {% raw %}<span class="math inline">\([F(x+h)-F(x-h)]/(2h)\to p(x)\)</span>{% endraw %}. This motivates the Rosenblatt estimator</p>

{% raw %}<div class="math display">\[\widehat p_n^{\rm Rosenblatt}(x)=\frac{F_n(x+h)-F_n(x-h)}{2h}=\frac1{2nh}\sum_i\mathbf1\{x-h&lt;X_i\le x+h\}.\]</div>{% endraw %}

<p>More generally, for {% raw %}<span class="math inline">\(h&gt;0\)</span>{% endraw %}, a real kernel {% raw %}<span class="math inline">\(K\in L^1(\mathbb R)\cap L^2(\mathbb R)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\int K=1\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\widehat p_n(x)=(nh)^{-1}\sum_iK((X_i-x)/h)\)</span>{% endraw %}. Higher-order kernels may take negative values, so the estimate need not itself be a nonnegative density. The shrinking denominator means cdf consistency alone does not prove density consistency; the risk bounds below supply the needed bandwidth control.</p>
<h3 id="mean-squared-error" data-note-section="1">1. Mean Squared Error</h3>
<p>At a fixed {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, expand the square around the mean. The centered cross term has expectation zero, giving</p>

{% raw %}<div class="math display">\[\operatorname{MSE}(x)=\mathbb E_p(\widehat p_n(x)-p(x))^2=b(x)^2+\sigma^2(x),\quad b(x)=\mathbb E_p\widehat p_n(x)-p(x),\quad\sigma^2(x)=\operatorname{Var}_p\widehat p_n(x).\]</div>{% endraw %}

<p>The first term is squared bias, rather than bias itself.</p>
<h3 id="variance-of-kernel-density-estimators" data-note-section="1.1">1.1. Variance of kernel density estimators</h3>
<p>Independence eliminates the covariance terms. Changing variables {% raw %}<span class="math inline">\(z=x+hu\)</span>{% endraw %} gives the exact expression and its upper bound:</p>

{% raw %}<div class="math display">\[\sigma^2(x)=\frac1{nh^2}\left\{\mathbb E K^2((X_1-x)/h)-[\mathbb E K((X_1-x)/h)]^2\right\}\le\frac1{nh}\int K(u)^2p(x+hu)du.\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(\|p\|_\infty\le\overline p\)</span>{% endraw %}, this is at most {% raw %}<span class="math inline">\(\overline p\|K\|_2^2/(nh)\)</span>{% endraw %}. The bound is uniform in {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, and uniform over a density class only when a common {% raw %}<span class="math inline">\(\overline p\)</span>{% endraw %} is available.</p>
<h3 id="bias-of-kernel-density-estimators" data-note-section="1.2">1.2. Bias of kernel density estimators</h3>
<p>For {% raw %}<span class="math inline">\(\beta&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\ell=\lceil\beta\rceil-1\)</span>{% endraw %}, so that {% raw %}<span class="math inline">\(0&lt;\beta-\ell\le1\)</span>{% endraw %}, including integer {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. This avoids using the usual floor symbol for a different integer convention. The Hölder class {% raw %}<span class="math inline">\(\Sigma(\beta,L)\)</span>{% endraw %} consists of {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}-times continuously differentiable functions satisfying {% raw %}<span class="math inline">\(|p^{(\ell)}(x+t)-p^{(\ell)}(x)|\le L|t|^{\beta-\ell}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x,t\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\ell=0\)</span>{% endraw %}, this is a condition directly on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}.</p>

<p>A kernel of order {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} has {% raw %}<span class="math inline">\(\int K=1\)</span>{% endraw %}, finite absolute moments through order {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\int u^jK(u)du=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1\le j\le\ell\)</span>{% endraw %}. Also require {% raw %}<span class="math inline">\(M_\beta(K)=\int|u|^\beta|K(u)|du&lt;\infty\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[b(x)=\int K(u)[p(x+hu)-p(x)]du,\]</div>{% endraw %}

<p>the order-zero case immediately gives {% raw %}<span class="math inline">\(|b(x)|\le LM_\beta(K)h^\beta\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\ell\ge1\)</span>{% endraw %}, the correct integral Taylor formula is</p>

{% raw %}<div class="math display">\[p(x+t)=\sum_{j=0}^\ell\frac{t^j}{j!}p^{(j)}(x)+\frac{t^\ell}{(\ell-1)!}\int_0^1(1-v)^{\ell-1}[p^{(\ell)}(x+vt)-p^{(\ell)}(x)]dv.\]</div>{% endraw %}

<p>It follows by integrating the {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}-th derivative remainder and subtracting {% raw %}<span class="math inline">\(t^\ell p^{(\ell)}(x)/\ell!\)</span>{% endraw %}. All polynomial terms cancel upon integration against {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, except the constant {% raw %}<span class="math inline">\(p(x)\)</span>{% endraw %}, which is subtracted in the bias. Thus</p>

{% raw %}<div class="math display">\[|b(x)|\le C_\beta LM_\beta(K)h^\beta,\qquad C_\beta=\frac1{(\ell-1)!}\int_0^1(1-v)^{\ell-1}v^{\beta-\ell}dv\quad(\ell\ge1),\]</div>{% endraw %}

<p>with {% raw %}<span class="math inline">\(C_\beta=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\ell=0\)</span>{% endraw %}. This also justifies the integrability of the remainder for signed kernels.</p>

<p>Let {% raw %}<span class="math inline">\(\mathcal P(\beta,L)\)</span>{% endraw %} be the densities in this Hölder class. They have a common finite sup-norm bound. To prove the common sup-norm bound without adding an assumption, use the compact, bounded order-{% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} kernel {% raw %}<span class="math inline">\(K_0\)</span>{% endraw %} constructed in Remark 1 at bandwidth one. The bias argument gives</p>

{% raw %}<div class="math display">\[p(x)\le\left|\int K_0(u)p(x+u)du\right|+C_\beta LM_\beta(K_0)\le\|K_0\|_\infty+C_\beta LM_\beta(K_0).\]</div>{% endraw %}

<p>Here {% raw %}<span class="math inline">\(p\ge0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int p=1\)</span>{% endraw %} bound the convolution, irrespective of the signs of {% raw %}<span class="math inline">\(K_0\)</span>{% endraw %}. Therefore the pointwise bound is uniform over both {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x\)</span>{% endraw %}: {% raw %}<span class="math inline">\(\operatorname{MSE}(x)\le Ah^{2\beta}+B/(nh)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(A=[C_\beta LM_\beta(K)]^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=\overline p\|K\|_2^2\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(A,B&gt;0\)</span>{% endraw %}, the minimizer of this upper bound is</p>

{% raw %}<div class="math display">\[h_*=(B/(2\beta A))^{1/(2\beta+1)}n^{-1/(2\beta+1)}.\]</div>{% endraw %}

<p>The constants cannot be dropped when claiming an exact minimizing bandwidth. For any fixed {% raw %}<span class="math inline">\(\alpha&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h=\alpha n^{-1/(2\beta+1)}\)</span>{% endraw %} nevertheless gives {% raw %}<span class="math inline">\(\sup_{p\in\mathcal P(\beta,L)}\sup_x\operatorname{MSE}(x)\le Cn^{-2\beta/(2\beta+1)}\)</span>{% endraw %}.</p>
<div id="result-1" class="remark" data-note-kind="Remark" data-note-number="1"><p>Remark 1. An explicit compact kernel is obtained from the orthonormal Legendre polynomials</p>

{% raw %}<div class="math display">\[\varphi_m(u)=\sqrt{\frac{2m+1}2}\frac1{2^mm!}\frac{d^m}{du^m}(u^2-1)^m,\quad m\ge0,\qquad K_0(u)=\mathbf1\{|u|\le1\}\sum_{m=0}^\ell\varphi_m(0)\varphi_m(u).\]</div>{% endraw %}

<p>The constant term {% raw %}<span class="math inline">\(m=0\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\varphi_0=1/\sqrt2\)</span>{% endraw %}, is essential. For any polynomial {% raw %}<span class="math inline">\(q\)</span>{% endraw %} of degree at most {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, expand {% raw %}<span class="math inline">\(q=\sum_{m=0}^\ell b_m\varphi_m\)</span>{% endraw %}. Orthonormality gives {% raw %}<span class="math inline">\(\int q(u)K_0(u)du=\sum_mb_m\varphi_m(0)=q(0)\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(q=1,u,\ldots,u^\ell\)</span>{% endraw %} proves all moment conditions. Compact support and boundedness give every absolute moment and square integrability.</p>
</div>
<h3 id="mean-integrated-squared-error" data-note-section="2">2. Mean Integrated Squared Error</h3>
<p>Assume {% raw %}<span class="math inline">\(p\in L^2(\mathbb R)\)</span>{% endraw %}. Tonelli applied to squared errors gives {% raw %}<span class="math inline">\(\operatorname{MISE}=\|b\|_2^2+\int\sigma^2(x)dx\)</span>{% endraw %}. Unlike the pointwise variance bound, integrated variance needs no sup-norm bound on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\int\sigma^2(x)dx\le\frac1{nh^2}\int\int K^2((z-x)/h)p(z)dzdx=\frac{\|K\|_2^2}{nh}.\]</div>{% endraw %}

<p>For an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} smoothness condition, use the Nikol’ski class {% raw %}<span class="math inline">\(\mathcal H(\beta,L)\)</span>{% endraw %}: {% raw %}<span class="math inline">\(p\in L^2\)</span>{% endraw %}, with weak derivatives through order {% raw %}<span class="math inline">\(\ell=\lceil\beta\rceil-1\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\|p^{(\ell)}(\cdot+t)-p^{(\ell)}\|_2\le L|t|^{\beta-\ell}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(\ell\ge1\)</span>{% endraw %}, choose the locally absolutely continuous representatives of the lower derivatives, so the preceding integral Taylor formula is valid almost everywhere. Minkowski's integral inequality first in {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, then in {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[\|b\|_2\le\int |K(u)|\frac{|hu|^\ell}{(\ell-1)!}\int_0^1(1-v)^{\ell-1}\|p^{(\ell)}(\cdot+vhu)-p^{(\ell)}\|_2\,dv\,du\le C_\beta LM_\beta(K)h^\beta.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(\ell=0\)</span>{% endraw %}, apply Minkowski directly to {% raw %}<span class="math inline">\(b=\int K(u)[p(\cdot+hu)-p]du\)</span>{% endraw %}; no negative factorial or nonexistent derivative is needed. For integer {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, the Sobolev condition {% raw %}<span class="math inline">\(p\in W^{\beta,2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\|p^{(\beta)}\|_2\le L\)</span>{% endraw %}, implies the stated translation bound with {% raw %}<span class="math inline">\(\ell=\beta-1\)</span>{% endraw %}: integrate the last derivative over a segment and use Minkowski, obtaining {% raw %}<span class="math inline">\(\|p^{(\beta-1)}(\cdot+t)-p^{(\beta-1)}\|_2\le |t|L\)</span>{% endraw %}.</p>

<p>Consequently {% raw %}<span class="math inline">\(\operatorname{MISE}\le Ah^{2\beta}+\|K\|_2^2/(nh)\)</span>{% endraw %}. Its minimizing bandwidth includes {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, just as in the pointwise calculation. In particular,</p>
<span id="eq:mise-asymp"></span>{% raw %}<div class="math display">\[h=\alpha n^{-1/(2\beta+1)}\quad\Longrightarrow\quad\operatorname{MISE}=O(n^{-2\beta/(2\beta+1)}).\tag{1}\]</div>{% endraw %}
<h3 id="fourier-analysis-of-kernel-density-estimators" data-note-section="3">3. Fourier Analysis of Kernel Density Estimators</h3>
<p>Use the convention {% raw %}<span class="math inline">\(\mathcal F[g](\omega)=\int e^{it\omega}g(t)dt\)</span>{% endraw %}. Plancherel says {% raw %}<span class="math inline">\(\|g\|_2^2=(2\pi)^{-1}\|\mathcal Fg\|_2^2\)</span>{% endraw %}, first for {% raw %}<span class="math inline">\(L^1\cap L^2\)</span>{% endraw %}, then for all {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} by its isometric extension. Scaling and reflection/translation give</p>

{% raw %}<div class="math display">\[\mathcal F[h^{-1}g(\cdot/h)](\omega)=\mathcal Fg(h\omega),\qquad\mathcal F[g(t-\cdot)](\omega)=e^{it\omega}\mathcal Fg(-\omega).\]</div>{% endraw %}

<p>The characteristic function is {% raw %}<span class="math inline">\(\phi(\omega)=\int e^{ix\omega}p(x)dx\)</span>{% endraw %}, the transform of the density (equivalently the probability measure), not the cdf as an ordinary function. Its empirical version is {% raw %}<span class="math inline">\(\phi_n(\omega)=n^{-1}\sum_je^{iX_j\omega}\)</span>{% endraw %}. For a real symmetric kernel, {% raw %}<span class="math inline">\(\widehat K=\mathcal FK\)</span>{% endraw %} is real and even, and</p>

{% raw %}<div class="math display">\[\mathcal F\widehat p_n(\omega)=\frac1n\sum_je^{iX_j\omega}\widehat K(-h\omega)=\phi_n(\omega)\widehat K(h\omega).\]</div>{% endraw %}

<p>In this section we may enlarge the smoothing class to all real symmetric {% raw %}<span class="math inline">\(K\in L^2\)</span>{% endraw %}. The estimator is then a finite sum of {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} translates, its transform identities hold in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}, and neither {% raw %}<span class="math inline">\(\int K=1\)</span>{% endraw %} nor nonnegativity is imposed. This distinction matters for the oracle and clipping arguments below.</p>

<p>Independence gives {% raw %}<span class="math inline">\(\mathbb E\phi_n=\phi\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[\mathbb E|\phi_n|^2=\frac1{n^2}\left\{n+n(n-1)|\phi|^2\right\}=\frac1n+\frac{n-1}n|\phi|^2.\]</div>{% endraw %}

<p>For complex numbers the cross term in the variance is a real part with a conjugate, so</p>

{% raw %}<div class="math display">\[\mathbb E|\phi_n-\phi|^2=\mathbb E|\phi_n|^2+|\phi|^2-2\operatorname{Re}(\mathbb E\phi_n\overline\phi)=\frac{1-|\phi|^2}n=:e^2.\]</div>{% endraw %}

<p>Decompose {% raw %}<span class="math inline">\(\phi_n\widehat K-\phi=(\phi_n-\phi)\widehat K+(\widehat K-1)\phi\)</span>{% endraw %}. The cross term has expectation zero because the first factor is centered. Tonelli and Plancherel now yield the exact risk</p>

{% raw %}<div class="math display">\[J_n(K,h,\phi)=\operatorname{MISE}=\frac1{2\pi}\int\left\{e^2(\omega)|\widehat K(h\omega)|^2+|1-\widehat K(h\omega)|^2|\phi(\omega)|^2\right\}d\omega.\]</div>{% endraw %}

<p>All terms are integrable when {% raw %}<span class="math inline">\(p,K\in L^2\)</span>{% endraw %}: {% raw %}<span class="math inline">\(|\phi|\le1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\phi\in L^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat K(h\cdot)\in L^2\)</span>{% endraw %}. Equivalently, this is the integrated squared bias plus {% raw %}<span class="math inline">\((2\pi n)^{-1}\int|\widehat K(h\omega)|^2d\omega\)</span>{% endraw %}, minus {% raw %}<span class="math inline">\((2\pi n)^{-1}\int|\phi(\omega)\widehat K(h\omega)|^2d\omega\)</span>{% endraw %}.</p>
<div id="result-2" class="remark" data-note-kind="Remark" data-note-number="2"><p>Remark 2. At a fixed frequency write {% raw %}<span class="math inline">\(a=|\phi|^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=e^2=(1-a)/n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(w=\widehat K(h\omega)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(a+b\ge1/n&gt;0\)</span>{% endraw %}, completing the square gives</p>

{% raw %}<div class="math display">\[bw^2+a(1-w)^2=(a+b)\left(w-\frac a{a+b}\right)^2+\frac{ab}{a+b}.\]</div>{% endraw %}

<p>Thus the oracle multiplier and risk are</p>

{% raw %}<div class="math display">\[w^*(\omega)=\frac{|\phi(\omega)|^2}{e^2(\omega)+|\phi(\omega)|^2},\qquad \operatorname{MISE}^*=\frac1{2\pi}\int\frac{e^2|\phi|^2}{e^2+|\phi|^2}d\omega.\]</div>{% endraw %}

<p>This is an actual admissible {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} multiplier: it is real and even, and {% raw %}<span class="math inline">\(0\le w^*\le\min(1,n|\phi|^2)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\int|w^*|^2\le n\int|\phi|^2&lt;\infty\)</span>{% endraw %}. Its inverse transform defines a real symmetric {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} kernel at any fixed bandwidth. It depends on unknown {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and need not define a nonnegative normalized density estimator; its role is a benchmark in the enlarged linear-smoothing class.</p>
</div>
<p>Call a smoother inadmissible in this {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} class if another has no larger risk for every square-integrable density, every {% raw %}<span class="math inline">\(h&gt;0\)</span>{% endraw %}, and every integer {% raw %}<span class="math inline">\(n\ge1\)</span>{% endraw %}, and has strictly smaller risk for some density. If the set where {% raw %}<span class="math inline">\(\widehat K\notin[0,1]\)</span>{% endraw %} has positive Lebesgue measure, a dominating kernel is obtained by clipping:</p>

{% raw %}<div class="math display">\[\widehat{\widetilde K}(t)=\min(1,\max(0,\widehat K(t))).\]</div>{% endraw %}

<p>Clipping preserves reality and evenness, and {% raw %}<span class="math inline">\(|\widehat{\widetilde K}|\le|\widehat K|\)</span>{% endraw %}, so its inverse transform lies in the same {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} class. At each frequency the optimum {% raw %}<span class="math inline">\(a/(a+b)\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}; projecting {% raw %}<span class="math inline">\(w\)</span>{% endraw %} onto this interval cannot increase its squared distance from that optimum. The completed-square identity proves risk domination. For a Gaussian density, {% raw %}<span class="math inline">\(0&lt;|\phi(\omega)|^2&lt;1\)</span>{% endraw %} at every {% raw %}<span class="math inline">\(\omega\ne0\)</span>{% endraw %}, so the optimum is strictly inside {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}. On the positive-measure clipping set the decrease is strict, and integration proves a strict risk improvement for every {% raw %}<span class="math inline">\(n,h\)</span>{% endraw %}. This establishes the omitted inadmissibility argument. It does not assert that clipping preserves {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} integrability or density normalization.</p>

<p>If {% raw %}<span class="math inline">\(K\in L^1\cap L^2\)</span>{% endraw %}, its transform is continuous and {% raw %}<span class="math inline">\(\widehat K(0)=\int K\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\int K&gt;1\)</span>{% endraw %} gives a positive-measure clipping set and inadmissibility in the enlarged class. If instead {% raw %}<span class="math inline">\(\widehat K(0)\ne1\)</span>{% endraw %}, continuity gives {% raw %}<span class="math inline">\(\delta,t_0&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(|1-\widehat K(t)|\ge\delta\)</span>{% endraw %} for {% raw %}<span class="math inline">\(|t|\le t_0\)</span>{% endraw %}. Hence the squared bias obeys</p>

{% raw %}<div class="math display">\[\frac1{2\pi}\int|1-\widehat K(h\omega)|^2|\phi(\omega)|^2d\omega\ge\frac{\delta^2}{2\pi}\int_{|\omega|\le t_0/h}|\phi(\omega)|^2d\omega\longrightarrow\delta^2\|p\|_2^2&gt;0.\]</div>{% endraw %}

<p>This rules out consistency as {% raw %}<span class="math inline">\(h\downarrow0\)</span>{% endraw %}, even if {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}. For integrals strictly between zero and one, inconsistency alone does not prove the domination criterion above.</p>
<div id="result-3" class="remark" data-note-kind="Remark" data-note-number="3"><p>Remark 3. A Fourier Sobolev class is defined by {% raw %}<span class="math inline">\(p\ge0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\int p=1\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\int|\omega|^{2\beta}|\phi(\omega)|^2d\omega\le2\pi L^2.\]</div>{% endraw %}

<p>This implies {% raw %}<span class="math inline">\(\phi\in L^2\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(|\phi|\le1\)</span>{% endraw %} controls {% raw %}<span class="math inline">\(|\omega|\le1\)</span>{% endraw %}. For integer {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\in W^{\beta,2}\)</span>{% endraw %}, the weak-derivative transform is {% raw %}<span class="math inline">\(\mathcal F[p^{(\beta)}]=(-i\omega)^\beta\phi\)</span>{% endraw %}; Plancherel gives the equality {% raw %}<span class="math inline">\(\int|\omega|^{2\beta}|\phi|^2=2\pi\|p^{(\beta)}\|_2^2\)</span>{% endraw %}. For noninteger {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, the displayed Fourier condition itself defines the class.</p>
</div>
<p>Suppose {% raw %}<span class="math inline">\(A=\operatorname*{ess\,sup}_{t\ne0}|1-\widehat K(t)|/|t|^\beta&lt;\infty\)</span>{% endraw %}. Factoring {% raw %}<span class="math inline">\(|h\omega|^{2\beta}\)</span>{% endraw %} out of the bias integrand gives</p>

{% raw %}<div class="math display">\[\operatorname{MISE}\le A^2L^2h^{2\beta}+\frac{\|K\|_2^2}{nh}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(h=\alpha n^{-1/(2\beta+1)}\)</span>{% endraw %}, the constant is {% raw %}<span class="math inline">\(A^2L^2\alpha^{2\beta}+\|K\|_2^2/\alpha\)</span>{% endraw %}. The factor {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %} cancels with Plancherel's prefactor. This recovers (1) under a Fourier smoothness condition.</p>
<div id="result-4" class="remark" data-note-kind="Remark" data-note-number="4"><p>Remark 4. The global multiplier bound can be checked locally if {% raw %}<span class="math inline">\(\widehat K\)</span>{% endraw %} is essentially bounded, for example if {% raw %}<span class="math inline">\(K\in L^1\cap L^2\)</span>{% endraw %}. If the quotient is bounded by {% raw %}<span class="math inline">\(A_0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;|t|\le t_0\)</span>{% endraw %}, then for {% raw %}<span class="math inline">\(|t|&gt;t_0\)</span>{% endraw %} it is at most {% raw %}<span class="math inline">\((1+\|\widehat K\|_\infty)/t_0^\beta\)</span>{% endraw %}; the converse is immediate. The local bound lets us choose a representative with {% raw %}<span class="math inline">\(\widehat K(0)=1\)</span>{% endraw %} continuous at zero: change its values on the exceptional null set to one and use {% raw %}<span class="math inline">\(|\widehat K(t)-1|\le A_0|t|^\beta\)</span>{% endraw %}.</p>

<p>Square integrability alone does not make the local and global conditions equivalent. For example, take an even multiplier equal to one near zero and with spikes of height {% raw %}<span class="math inline">\(m\)</span>{% endraw %} on disjoint intervals of length {% raw %}<span class="math inline">\(2^{-m}m^{-4}\)</span>{% endraw %} inside {% raw %}<span class="math inline">\((2,3)\)</span>{% endraw %}, with reflected spikes in {% raw %}<span class="math inline">\((-3,-2)\)</span>{% endraw %}, and zero elsewhere. It lies in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} and satisfies the local condition, while the global essential supremum is infinite. The boundedness hypothesis is therefore substantive.</p>
</div>
<nav class="note-series" aria-label="Notes in this series"><p>Additional reading: <a href="{% post_url 2023-11-03-nonparametric-minimax-risk-and-the-varshamovgilbert-lemma %}">Nonparametric Minimax Risk and the Varshamov–Gilbert Lemma</a> · Next: <a href="{% post_url 2023-10-13-nonparametric-regression-and-local-polynomial-estimators %}">Nonparametric Regression and Local Polynomial Estimators</a></p></nav>


</div>
