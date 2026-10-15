---
layout: "post"
title: "Local Bracketing Bounds from Bernstein’s Inequality"
date: "2022-10-18"
tags: ["statistics", "empirical processes"]
excerpt: "Finite-class Bernstein bounds and precise local bracketing theorems separate variance control from envelope control."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/10/18/a-finite-class-maximal-inequality-bounded-bernstein/", "/2022/10/22/a-local-maximal-inequality-under-bracketing-bounded-case/", "/2022/10/25/bracketing-integrals-and-the-top-bracket-count/"]
---

<div class="note-content" markdown="0">

<p>Bernstein’s inequality distinguishes the variance of a summand from its uniform bound. This distinction is useful for a small neighborhood of functions: their variances can be small even when their common envelope is not. We first turn the one-function tail estimate into a finite-class bound, then examine how brackets at decreasing scales can control the whole neighborhood.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="a-finite-class-maximal-inequality-bounded-bernstein" class="unnumbered" data-note-section="title">

</div>
<div id="lem:bernstein-fixed" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (Bernstein tail for a fixed bounded summand).  Let {% raw %}<span class="math inline">\(Y_1,\dots,Y_n\)</span>{% endraw %} be i.i.d. mean-zero with {% raw %}<span class="math inline">\(|Y_i|\le b\)</span>{% endraw %} a.s. and {% raw %}<span class="math inline">\(\mathbb{E}[Y_i^2]\le \sigma^2\)</span>{% endraw %}. Then for all {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbf P\,\,\!\!\left(\Big|\frac1{\sqrt n}\sum_{i=1}^n Y_i\Big|\ge t\right)
\le
2\exp \left(-\frac{t^2}{2\big(\sigma^2+\frac{b}{3\sqrt n}t\big)}\right).\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Independence and the power-series estimate {% raw %}<span class="math inline">\(P|Y|^k\le b^{k-2}PY^2\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}, give</p>
{% raw %}<div class="math display">\[\log\mathbb E e^{\lambda\sum_iY_i}\le\frac{n\sigma^2\lambda^2}{2(1-\lambda b/3)},\qquad 0&lt;\lambda&lt;3/b.\]</div>{% endraw %}
<p>Here we used {% raw %}<span class="math inline">\(k!\ge2\cdot3^{k-2}\)</span>{% endraw %}. Chernoff's inequality with {% raw %}<span class="math inline">\(\lambda=x/(n\sigma^2+bx/3)\)</span>{% endraw %} bounds the upper tail by {% raw %}<span class="math inline">\(\exp\{-x^2/[2(n\sigma^2+bx/3)]\}\)</span>{% endraw %}. Apply the same estimate to {% raw %}<span class="math inline">\(-Y_i\)</span>{% endraw %}, add the two tails, and set {% raw %}<span class="math inline">\(x=t\sqrt n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\sigma=0\)</span>{% endraw %}, the summands vanish almost surely; the result is immediate. ◻</p>
</div>
<div id="lem:finite-max-bounded" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong> (Finite-class maximal inequality, bounded case).  Let {% raw %}<span class="math inline">\(\{f_1,\dots,f_N\}\)</span>{% endraw %} be a finite collection with {% raw %}<span class="math inline">\(Pf_k=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\|f_k\|_\infty\le M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\|f_k\|_{P,2}\le \delta\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Then </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\max_{1\le k\le N}|\mathbb G_n f_k|\Big]
 \lesssim 
\delta\,\sqrt{\log(2N)} + \frac{M}{\sqrt n}\log(2N).\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> For {% raw %}<span class="math inline">\(0&lt;t&lt;3\sqrt n/M\)</span>{% endraw %}, the power-series proof of Bernstein's inequality gives</p>
{% raw %}<div class="math display">\[\log\mathbb{E}e^{\pm t\mathbb G_nf_k}\le\frac{t^2\delta^2}{2(1-tM/(3\sqrt n))}.\]</div>{% endraw %}
<p>Put {% raw %}<span class="math inline">\(L=\log(2N)\)</span>{% endraw %}. Jensen and the bound of a maximum by a sum of exponentials imply</p>
{% raw %}<div class="math display">\[\mathbb{E}\max_k|\mathbb G_nf_k|\le\frac Lt+\frac{t\delta^2}{2(1-tM/(3\sqrt n))}.\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(t=\min\{\sqrt L/\delta,\sqrt n/M\}\)</span>{% endraw %}. The denominator stays at least {% raw %}<span class="math inline">\(2/3\)</span>{% endraw %}. If the first choice is smaller, both terms are bounded by a constant times {% raw %}<span class="math inline">\(\delta\sqrt L\)</span>{% endraw %}; otherwise {% raw %}<span class="math inline">\(\delta^2\sqrt n/M\le\delta\sqrt L\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L/t=ML/\sqrt n\)</span>{% endraw %}. The zero-variance case is immediate. ◻</p></div>

<h3 class="unnumbered" data-note-section="1" id="a-local-maximal-inequality-under-bracketing-bounded-case">1. A local maximal inequality under bracketing (bounded case)</h3>
<p>Write {% raw %}<span class="math inline">\(\operatorname{Log}x=\max(1,\log x)\)</span>{% endraw %}, and use the same convention as the preceding post:</p>
{% raw %}<div class="math display">\[J_{[\:]}(r,\mathcal G,\|\cdot\|)=\int_0^r\sqrt{\operatorname{Log}N_{[\:]}(u,\mathcal G\cup\{0\},\|\cdot\|)}du.\]</div>{% endraw %}
<div id="lem:local-bracketing-bounded" class="lemma" data-note-number="3" data-note-kind="Lemma"><p><strong>Lemma 3</strong> (Local bounded bracketing inequality). Let {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %} be pointwise measurable, with {% raw %}<span class="math inline">\(|g|\le1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Pg^2&lt;r^2\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. Then</p>
<span id="eq:local-bracketing-bounded"></span>
{% raw %}<div class="math display">\[\mathbb{E}\|\mathbb G_n\|_{\mathcal G}\lesssim J_{[\:]}(r)\left(1+\frac{J_{[\:]}(r)}{r^2\sqrt n}\right).\tag{1}\]</div>{% endraw %}
<p>The same bound holds for the Rademacher process {% raw %}<span class="math inline">\(n^{-1/2}\sum_i\varepsilon_i g(X_i)\)</span>{% endraw %}.</p></div>
<div class="proof">
<p><em>Proof.</em> We use the nested brackets and first-failure decomposition from <a href="/2022/10/15/maximal-inequalities-via-uniform-entropy-and-bracketing/#thm:maximal-inequality-bracketing-integral-prelim-behaviour">Theorem 6 of the preceding note</a>, but allow failure already at the coarsest scale. This supplies the extra quadratic entropy term. It also proves the bounded local theorem stated in van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.020"><em>Asymptotic Statistics</em>, Lemma 19.36, p. 288</a>.</p>
<p>Write {% raw %}<span class="math inline">\(H(u)=\operatorname{Log}N_{[\:]}(u,\mathcal G\cup\{0\},L^2(P))\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_q=4r2^{-q}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(J=\int_0^r\sqrt{H(u)}du\)</span>{% endraw %}. The case {% raw %}<span class="math inline">\(J=\infty\)</span>{% endraw %} is immediate. Refine the brackets at levels {% raw %}<span class="math inline">\(0,\ldots,q\)</span>{% endraw %} into nested cells, with at most {% raw %}<span class="math inline">\(K_q=\prod_{j=0}^qN_{[\:]}(r_j)\)</span>{% endraw %} cells. Intersect their brackets and clip endpoints to {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\Delta_q\)</span>{% endraw %} be the resulting width and choose a representative {% raw %}<span class="math inline">\(\pi_qg\in\mathcal G\cup\{0\}\)</span>{% endraw %} in each nonempty cell. Then {% raw %}<span class="math inline">\(\Delta_q\le\Delta_{q-1}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P\Delta_q^2\le r_q^2\)</span>{% endraw %}, and both {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\pi_qg\)</span>{% endraw %} lie in that bracket. Put</p>
{% raw %}<div class="math display">\[L_q=1+\sum_{j=0}^q\log N_{[\:]}(r_j),\qquad a_q=\frac{r_q}{\sqrt{L_{q+1}}},\qquad A_q=\prod_{j=0}^q1\{\Delta_j\le\sqrt n a_j\},\quad A_{-1}=1,\quad B_q=A_{q-1}-A_q.\]</div>{% endraw %}
<p>Unlike the globally truncated proof, {% raw %}<span class="math inline">\(B_0\)</span>{% endraw %} need not vanish. The exact decomposition is</p>
{% raw %}<div class="math display">\[g=\pi_0g+(g-\pi_0g)B_0+\sum_{q=1}^m(\pi_qg-\pi_{q-1}g)A_{q-1}+\sum_{q=1}^m(g-\pi_qg)B_q+(g-\pi_mg)A_m.\]</div>{% endraw %}
<p>The last term has absolute value at most {% raw %}<span class="math inline">\(\sqrt n a_m\)</span>{% endraw %}, so its centered empirical process is at most {% raw %}<span class="math inline">\(2na_m\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, and tends to zero. For every {% raw %}<span class="math inline">\(q\ge1\)</span>{% endraw %}, the same finite-class Bernstein bounds as in Theorem 6 give a bound {% raw %}<span class="math inline">\(C r_q\sqrt{L_{q+1}}\)</span>{% endraw %} for the expected supremum of the increment and stopped residual at that level. Explicitly, increments have {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} size at most {% raw %}<span class="math inline">\(2r_q\)</span>{% endraw %} and uniform bound {% raw %}<span class="math inline">\(\sqrt n a_{q-1}\)</span>{% endraw %}. For residuals use the finite majorants {% raw %}<span class="math inline">\(v_q=\Delta_qB_q\)</span>{% endraw %}, with</p>
{% raw %}<div class="math display">\[Pv_q\le\frac{P\Delta_q^2}{\sqrt n a_q}\le\frac{r_q^2}{\sqrt n a_q},\qquad |(g-\pi_qg)B_q|\le v_q,\qquad |\mathbb G_nh|\le|\mathbb G_nv_q|+2\sqrt n Pv_q\quad(|h|\le v_q).\]</div>{% endraw %}
<p>All these classes have at most {% raw %}<span class="math inline">\(K_q\)</span>{% endraw %} elements. Centering doubles their uniform bounds at most. Thus the finite-class lemma applies without assuming the functions themselves have mean zero. The geometric-scale summation proved in Theorem 6 gives</p>
{% raw %}<div class="math display">\[\sum_{q\ge1}r_q\sqrt{L_{q+1}}\le C J.\]</div>{% endraw %}
<p>It remains to control level zero. Its representatives satisfy {% raw %}<span class="math inline">\(P(\pi_0g)^2&lt;r^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\pi_0g|\le1\)</span>{% endraw %}. Its residual majorants {% raw %}<span class="math inline">\(v_0=\Delta_0B_0\)</span>{% endraw %} have {% raw %}<span class="math inline">\(Pv_0^2\le r_0^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|v_0|\le2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Pv_0\le r_0^2/(\sqrt n a_0)\)</span>{% endraw %}. Lemma 2 and the preceding majorant inequality therefore bound these two terms by</p>
{% raw %}<div class="math display">\[C\left(r\sqrt{L_0}+\frac{L_0}{\sqrt n}+\frac{r_0^2}{a_0}\right)\le C\left(r\sqrt{H(r)}+\frac{H(r)}{\sqrt n}\right)\le C\left(J+\frac{J^2}{r^2\sqrt n}\right).\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(L_0\le2H(r)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L_1\le3H(r)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r\sqrt{H(r)}\le J\)</span>{% endraw %}. Combining the coarse and fine terms proves the centered assertion. The proof bounds every supremum by finite measurable majorants and a deterministic remainder; consequently it also gives the corresponding outer-expectation bound without pointwise measurability.</p>
<p>For the symmetrized assertion, apply the same theorem on the product space with law {% raw %}<span class="math inline">\(Q=P\otimes\operatorname{Unif}\{-1,1\}\)</span>{% endraw %}, to {% raw %}<span class="math inline">\(h_g(x,e)=eg(x)\)</span>{% endraw %}. These functions have {% raw %}<span class="math inline">\(Qh_g=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Qh_g^2=Pg^2&lt;r^2\)</span>{% endraw %}, and absolute bound one. A bracket {% raw %}<span class="math inline">\([l,u]\)</span>{% endraw %} for {% raw %}<span class="math inline">\(g\)</span>{% endraw %} induces the bracket with endpoints</p>
{% raw %}<div class="math display">\[L(x,e)=\begin{cases}l(x),&amp;e=1,\\-u(x),&amp;e=-1,\end{cases}\qquad U(x,e)=\begin{cases}u(x),&amp;e=1,\\-l(x),&amp;e=-1.\end{cases}\]</div>{% endraw %}
<p>Its width is {% raw %}<span class="math inline">\(u-l\)</span>{% endraw %} for both signs, so its {% raw %}<span class="math inline">\(L^2(Q)\)</span>{% endraw %} width equals the original {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} width. Thus the product-space entropy is no larger, and its centered empirical process is exactly the Rademacher process. ◻</p></div>
<span id="eq:telescoping-sup"></span><span id="eq:remainder-eta"></span><span id="eq:coarse"></span><span id="eq:increment-bound"></span><span id="eq:sum-gaussian"></span>
<p>The stopping step is essential here. Small population bracket widths do not by themselves imply that the expected supremum of their empirical widths is small. Nor can one sum a fixed uniform Bernstein bound at every finer scale: its linear terms need not be summable. The stopped-chain proof accounts for both difficulties, and produces the quadratic entropy term {% raw %}<span class="math inline">\(J_{[\:]}(r)^2/(r^2\sqrt n)\)</span>{% endraw %} in (1).</p>

<h3 class="unnumbered" data-note-section="2" id="a-simple-inequality-connecting-j_-and-the-top-bracket-count">2. A simple inequality connecting {% raw %}<span class="math inline">\(J_{[\:]}\)</span>{% endraw %} and the top bracket count</h3>
<div id="lem:top-log-by-J" class="lemma" data-note-number="4" data-note-kind="Lemma"><p><strong>Lemma 4.</strong> With the definition above,</p>
{% raw %}<div class="math display">\[\operatorname{Log}N_{[\:]}(\delta,\mathcal F\cup\{0\},\|\cdot\|)\le\frac{J_{[\:]}(\delta,\mathcal F,\|\cdot\|)^2}{\delta^2}.\]</div>{% endraw %}
</div><div class="proof"><p><em>Proof.</em> The bracketing count is nonincreasing in its radius. Its integrand on {% raw %}<span class="math inline">\((0,\delta)\)</span>{% endraw %} is therefore at least its value at {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. Integrate and square. ◻</p></div>

<h4 class="unnumbered" data-note-section="2.1" id="proof-of-theorem-thmmaximal-inequality-bracketing-integral-uniformly-bounded-class">2.1. Proof of Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-bracketing-integral-uniformly-bounded-class" data-reference-type="ref" data-reference="thm:maximal-inequality-bracketing-integral-uniformly-bounded-class">8</a></h4>
<p>If {% raw %}<span class="math inline">\(M=0\)</span>{% endraw %}, the class is zero and the result is immediate. For {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\mathcal G=\{f/M:f\in\mathcal F\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r=\delta/M\)</span>{% endraw %}. The hypotheses of Lemma 3 hold. Scaling the bracket endpoints gives the exact identity</p>
{% raw %}<div class="math display">\[J_{[\:]}(r,\mathcal G,L^2(P))=M^{-1}J_{[\:]}(\delta,\mathcal F,L^2(P)).\]</div>{% endraw %}
<p>Multiply the bound in Lemma 3 by {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(r^2=\delta^2/M^2\)</span>{% endraw %}, the result is</p>
{% raw %}<div class="math display">\[\mathbb{E}\|\mathbb G_n\|_{\mathcal F}\lesssim J_{[\:]}(\delta)\left(1+\frac{M J_{[\:]}(\delta)}{\delta^2\sqrt n}\right),\]</div>{% endraw %}
<p>which proves Theorem 8. Lemma 4 explains why a contribution from the coarsest bracket count fits this order; the stopped-chain argument in Lemma 3 controls all finer scales.</p>

<h4 class="unnumbered" data-note-section="2.2" id="proof-of-theorem-thmmaximal-inequality-bracketing-integral-bernstein-bounded-class">2.2. Proof of Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-bracketing-integral-bernstein-bounded-class" data-reference-type="ref" data-reference="thm:maximal-inequality-bracketing-integral-bernstein-bounded-class">9</a></h4>
<p>We first prove the exponential-moment estimate, then prove its local bracketing consequence by the stopped-chain construction.</p>

<div id="def:bernstein-norm" class="definition" data-note-number="5" data-note-kind="Definition">
<p><strong>Definition 5</strong> (Bernstein size).  For a measurable {% raw %}<span class="math inline">\(f:\mathscr X\to\mathbb R\)</span>{% endraw %} define </p>

{% raw %}<div class="math display">\[\|f\|_{P,B}^2 \equiv 2\mathbf P\,\,\!\!\big(e^{|f|}-1-|f|\big).\]</div>{% endraw %}
</div>
<p>This quantity is finite only under an exponential-moment condition, and is not a norm: it is not homogeneous. Bracketing uses it as a monotone measure of the size of a nonnegative width. The scalar inequality {% raw %}<span class="math inline">\(e^{|x|}-1-|x|\ge x^2/2\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\|f\|_{P,2}\le\|f\|_{P,B}\)</span>{% endraw %}.</p>

<div id="lem:bernstein-mgf" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong> (Key exponential-moment inequality from {% raw %}<span class="math inline">\(\|\cdot\|_{P,B}\)</span>{% endraw %}).  Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be measurable and set {% raw %}<span class="math inline">\(b^2 \equiv \|f\|_{P,B}^2&lt;\infty\)</span>{% endraw %}. Then for every {% raw %}<span class="math inline">\(|t|\le1\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\log \mathbf P\,\,\!\!\exp\big(t(f-\mathbf P\,\,\!\!f)\big) \le \frac{t^2}{2}\,b^2.\]</div>{% endraw %}
<p> Consequently, for every {% raw %}<span class="math inline">\(|t|\le\sqrt n\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\log \mathbb{E}\exp\big(t\,\mathbb G_n f\big) \le \frac{t^2}{2}\,b^2.\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof of Lemma 6.</em> The finite Bernstein quantity implies integrability of the terms below.</p>
<h4 data-note-section="2.2.1" id="step-1-a-scalar-inequality.">2.2.1. Step 1: a scalar inequality.</h4>
<p>For every real {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|t|\le1\)</span>{% endraw %}, the exponential power series gives</p>
{% raw %}<div class="math display">\[e^{tx}-1-tx\le\sum_{j\ge2}\frac{|t|^j|x|^j}{j!}\le t^2(e^{|x|}-1-|x|).\]</div>{% endraw %}
<h4 data-note-section="2.2.2" id="step-2-bound-on-the-moment-generating-function.">2.2.2. Step 2: bound on the moment generating function.</h4>
<p>Integrate the scalar inequality without replacing its linear term by an absolute value:</p>
{% raw %}<div class="math display">\[Pe^{tf}\le1+tPf+\frac{t^2b^2}{2}.\]</div>{% endraw %}
<p>Using {% raw %}<span class="math inline">\(\log y\le y-1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(y&gt;0\)</span>{% endraw %}, we obtain the exact cancellation on centering:</p>
{% raw %}<div class="math display">\[\log Pe^{t(f-Pf)}=\log Pe^{tf}-tPf\le\frac{t^2b^2}{2}.\]</div>{% endraw %}
<h4 data-note-section="2.2.3" id="step-3-extend-to-mathbb-g_n-f.">2.2.3. Step 3: extend to {% raw %}<span class="math inline">\(\mathbb G_n f\)</span>{% endraw %}.</h4>
<p>For {% raw %}<span class="math inline">\(|t|\le\sqrt n\)</span>{% endraw %}, independence gives</p>
{% raw %}<div class="math display">\[\log\mathbb{E}e^{t\mathbb G_nf}=n\log Pe^{(t/\sqrt n)(f-Pf)}\le\frac{t^2b^2}{2}.\]</div>{% endraw %}
<p>This proves both signs of the mgf bound. ◻</p></div>

<div id="lem:finite-max-bernstein" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong> (Finite-class maximal inequality, Bernstein case).  Let {% raw %}<span class="math inline">\(\{f_1,\dots,f_N\}\)</span>{% endraw %} be a finite collection with {% raw %}<span class="math inline">\(\|f_k\|_{P,B}\le \delta\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Then </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\max_{1\le k\le N}|\mathbb G_n f_k|\Big]
 \lesssim 
\delta\sqrt{\log(2N)} + \frac1{\sqrt n}\log(2N).\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof of Lemma 7.</em> Put {% raw %}<span class="math inline">\(L=\log(2N)\)</span>{% endraw %}. Lemma 6 and log-sum-exp imply, for {% raw %}<span class="math inline">\(0&lt;t\le\sqrt n\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}\max_k|\mathbb G_nf_k|\le\frac Lt+\frac{t\delta^2}{2}.\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(t=\min\{\sqrt{2L}/\delta,\sqrt n\}\)</span>{% endraw %}. If the constraint is active then {% raw %}<span class="math inline">\(\delta^2\sqrt n/2\le L/\sqrt n\)</span>{% endraw %}; otherwise the two terms balance. This proves the claimed bound. ◻</p></div>

<div id="lem:local-bracketing-bernstein" class="lemma" data-note-number="8" data-note-kind="Lemma"><p><strong>Lemma 8</strong> (Local Bernstein bracketing inequality). Let {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %} be pointwise measurable and {% raw %}<span class="math inline">\(\|g\|_{P,B}&lt;r\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(J_B(r)=J_{[\:]}(r,\mathcal G,\|\cdot\|_{P,B})\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}\|\mathbb G_n\|_{\mathcal G}\lesssim J_B(r)\left(1+\frac{J_B(r)}{r^2\sqrt n}\right).\]</div>{% endraw %}
</div><div class="proof">
<p><em>Proof.</em> Use the preceding proof of Lemma 3 with {% raw %}<span class="math inline">\(H(u)=\operatorname{Log}N_{[\:]}(u,\mathcal G\cup\{0\},\|\cdot\|_{P,B})\)</span>{% endraw %}, the same scales {% raw %}<span class="math inline">\(r_q=4r2^{-q}\)</span>{% endraw %}, nested cells, and stopping thresholds. Intersections only decrease nonnegative bracket widths. Hence their Bernstein sizes remain at most {% raw %}<span class="math inline">\(r_q\)</span>{% endraw %}, and their {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} sizes are at most {% raw %}<span class="math inline">\(r_q\)</span>{% endraw %} because {% raw %}<span class="math inline">\(x^2\le2(e^{|x|}-1-|x|)\)</span>{% endraw %}. Representatives are selected from their cells, so {% raw %}<span class="math inline">\(\|\pi_0g\|_{P,B}&lt;r\)</span>{% endraw %}.</p>
<p>At every level {% raw %}<span class="math inline">\(q\ge1\)</span>{% endraw %}, the stopped increments and majorants are uniformly bounded by {% raw %}<span class="math inline">\(\sqrt n a_{q-1}\)</span>{% endraw %}. Thus the bounded finite-class inequality applies exactly as before: this part of the proof requires only their {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} widths and the stopping bound, and contributes at most {% raw %}<span class="math inline">\(CJ_B(r)\)</span>{% endraw %}. The remainder still vanishes uniformly, being bounded by {% raw %}<span class="math inline">\(2na_m\)</span>{% endraw %}.</p>
<p>At level zero the functions need not be uniformly bounded. Apply Lemma 7 instead. The representatives have Bernstein size less than {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. The majorants {% raw %}<span class="math inline">\(v_0=\Delta_0B_0\)</span>{% endraw %} have Bernstein size at most {% raw %}<span class="math inline">\(r_0\)</span>{% endraw %}, by monotonicity, and</p>
{% raw %}<div class="math display">\[Pv_0\le\frac{P\Delta_0^2}{\sqrt n a_0}\le\frac{r_0^2}{\sqrt n a_0}.\]</div>{% endraw %}
<p>Consequently their total contribution is bounded by</p>
{% raw %}<div class="math display">\[C\left(r\sqrt{L_0}+\frac{L_0}{\sqrt n}+\frac{r_0^2}{a_0}\right)\le C\left(J_B(r)+\frac{J_B(r)^2}{r^2\sqrt n}\right).\]</div>{% endraw %}
<p>This proves the result, including its outer-expectation version. No triangle inequality or homogeneity for the Bernstein size is used. The statement agrees with van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.020"><em>Asymptotic Statistics</em>, Lemma 19.37, p. 289</a>. ◻</p>
</div>
<p>To obtain Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-bracketing-integral-bernstein-bounded-class">9</a>, apply Lemma 8 with {% raw %}<span class="math inline">\(\mathcal G=\mathcal F\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r=\delta\)</span>{% endraw %}. Its moment assumption, bracket widths and entropy integral agree exactly with those in that theorem, so the displayed inequality is the required conclusion. No homogeneity of the Bernstein size is used.</p>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}">Maximal Inequalities via Uniform Entropy and Bracketing</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}">Maximal Inequalities via Uniform Entropy and Bracketing</a> · Next: <a href="{% post_url 2022-10-29-uniform-laws-via-entropy-and-symmetrization %}">Uniform Laws via Entropy and Symmetrization</a></p></nav>

</div>
