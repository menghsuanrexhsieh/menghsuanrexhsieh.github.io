---
layout: "post"
title: "Moment Inequalities and Random Series"
date: "2022-06-29"
tags: ["probability theory", "statistics"]
excerpt: "Moment Inequalities and Random Series. Notes on probability and statistics."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
redirect_from: ["/2022/06/29/useful-deterministic-inequalities/", "/2022/07/19/moment-bounds-and-tail-integrals/", "/2022/08/07/bounds-on-moments-of-random-variables/", "/2022/08/27/bounds-on-moments-of-random-series/"]
---

<div class="note-content" markdown="0">

<p>Moment estimates let us control both individual sums and entire sequences of partial sums. The first tools below concern deterministic inequalities and approximation. We then use first-crossing events for maximal inequalities and conditional symmetry for sharper moment bounds. In each case, the assumption on dependence determines which cancellations are available.</p>

<div id="useful-non-probabilistic-inequalities" data-note-section="title">

</div>
<div id="lem:complex-products-difference-bound" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(\{x_1,\dots,x_n\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{y_1,\dots,y_n\}\)</span>{% endraw %} denote sequences of complex numbers with modulus at most one. Then, </p>

{% raw %}<div class="math display">\[|x_1 \cdots x_n - y_1 \cdots y_n| \leq \sum_{1 \leq k \leq n} |x_k - y_k| ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Replace the factors one at a time:</p>
{% raw %}<div class="math display">\[\prod_{j=1}^nx_j-\prod_{j=1}^ny_j=\sum_{k=1}^n\left(\prod_{j&lt;k}x_j\right)(x_k-y_k)\left(\prod_{j&gt;k}y_j\right).\]</div>{% endraw %}
<p>Empty products equal one. Every surrounding product has modulus at most one, so the triangle inequality gives the bound. ◻</p>
</div>
<div id="lem:clarkson" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong> (Clarkson).  Let {% raw %}<span class="math inline">\(x, y \in \mathbb R^n\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\mathbb C^n\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(p \in [1,2]\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[|x+y|^p + |x-y|^p \leq 2 (|x|^p + |y|^p) ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(r=p/2\in[1/2,1]\)</span>{% endraw %}. Concavity of {% raw %}<span class="math inline">\(u\mapsto u^r\)</span>{% endraw %}, the parallelogram identity, and subadditivity for the exponent {% raw %}<span class="math inline">\(r\leq1\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[\frac{|x+y|^p+|x-y|^p}{2}\leq\left(\frac{|x+y|^2+|x-y|^2}{2}\right)^r=(|x|^2+|y|^2)^r\leq |x|^p+|y|^p.\]</div>{% endraw %}
<p>The subadditivity used in the last step is proved in Lemma 3. The argument works for both real and complex Euclidean vectors. ◻</p>
</div>
<p>Here absolute values of vectors denote the Euclidean norm.</p>

<div id="lem:cr-inequality-real-numbers" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>. For {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %} and real {% raw %}<span class="math inline">\(a_1,\ldots,a_n\)</span>{% endraw %}, the following inequality holds with {% raw %}<span class="math inline">\(c_r=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;r\leq1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c_r=n^{r-1}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(r\geq1\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\left| \sum_{1 \leq k \leq n} a_k \right|^r \leq c_r \sum_{1 \leq k \leq n} |a_k|^r ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The triangle inequality reduces the claim to nonnegative {% raw %}<span class="math inline">\(a_k\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(r\geq1\)</span>{% endraw %}, convexity gives {% raw %}<span class="math inline">\((n^{-1}\sum_k a_k)^r\leq n^{-1}\sum_k a_k^r\)</span>{% endraw %}, and multiplying by {% raw %}<span class="math inline">\(n^r\)</span>{% endraw %} proves the claim. If {% raw %}<span class="math inline">\(0&lt;r\leq1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A=\sum_k a_k&gt;0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(b_k=a_k/A\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(0\leq b_k\leq1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\sum_k b_k^r\geq\sum_k b_k=1\)</span>{% endraw %}. Multiplication by {% raw %}<span class="math inline">\(A^r\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(A^r\leq\sum_k a_k^r\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A=0\)</span>{% endraw %}, all terms vanish and no division is needed. ◻</p>
</div>
<div id="lem:fact-pth-moment-expansion" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>. For {% raw %}<span class="math inline">\(0&lt;p&lt;2\)</span>{% endraw %} and real {% raw %}<span class="math inline">\(x\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[|x|^p = K(p) \int_{-\infty}^{\infty} \frac{1 - \cos xt}{|t|^{p+1}} \dif t\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(K(p) \triangleq (\int_{-\infty}^{\infty} \frac{1 - \cos u}{|u|^{p+1}} \dif u)^{-1} = \frac{\Gamma(p+1)}{\pi} \sin \frac{p\pi}{2}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Gamma(x)\)</span>{% endraw %} is the Gamma function.</p>

</div>
<div class="proof">
<p><em>Evaluation of the constant.</em> For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, the defining gamma integral gives {% raw %}<span class="math inline">\(t^{-p-1}=\Gamma(p+1)^{-1}\int_0^\infty s^p e^{-st}\,ds\)</span>{% endraw %}. Tonelli applies because {% raw %}<span class="math inline">\(1-\cos t\geq0\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\int_0^\infty e^{-st}(1-\cos t)\,dt=1/s-s/(s^2+1)\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[\begin{aligned}
\int_{\mathbb R}\frac{1-\cos t}{|t|^{p+1}}\,dt
&amp;=\frac{2}{\Gamma(p+1)}\int_0^\infty\frac{s^{p-1}}{1+s^2}\,ds\\
&amp;=\frac{1}{\Gamma(p+1)}\int_0^\infty\frac{u^{p/2-1}}{1+u}\,du
=\frac{\Gamma(p/2)\Gamma(1-p/2)}{\Gamma(p+1)}
=\frac{\pi}{\Gamma(p+1)\sin(\pi p/2)}.
\end{aligned}\]</div>{% endraw %}
<p>The substitution is {% raw %}<span class="math inline">\(u=s^2\)</span>{% endraw %}. The last two identities are <a href="https://dlmf.nist.gov/5.12.E3">Euler’s beta integral</a> and <a href="https://dlmf.nist.gov/5.5.E3">the gamma reflection formula</a>, applied with {% raw %}<span class="math inline">\(0&lt;p/2&lt;1\)</span>{% endraw %}. Taking the reciprocal gives the stated {% raw %}<span class="math inline">\(K(p)\)</span>{% endraw %}.</p>
</div>
<p>The range of exponents is essential. Near zero, {% raw %}<span class="math inline">\(1-\cos t=O(t^2)\)</span>{% endraw %}, so the defining integral for {% raw %}<span class="math inline">\(K(p)\)</span>{% endraw %} is finite exactly when {% raw %}<span class="math inline">\(p&lt;2\)</span>{% endraw %} at that endpoint. At infinity, boundedness of the numerator gives integrability when {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}. Substitution {% raw %}<span class="math inline">\(u=|x|t\)</span>{% endraw %} proves the identity for {% raw %}<span class="math inline">\(x\ne0\)</span>{% endraw %}; the case {% raw %}<span class="math inline">\(x=0\)</span>{% endraw %} is immediate.</p>

<h3 data-note-section="1" id="applications">1. Applications</h3>
<div id="thm:bernstein-polynomial-convergence" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong> (Bernstein).  Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a function on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Define the <em>Bernstein polynomial of degree {% raw %}<span class="math inline">\(n\)</span>{% endraw %}</em> as </p>

{% raw %}<div class="math display">\[B_n (x) = \sum_{0 \leq k \leq n} f \left( \frac{k}{n} \right) \binom{n}{k} x^k (1-x)^{n-k} ~.\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is continuous, then {% raw %}<span class="math inline">\(B_n (x)\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(f(x)\)</span>{% endraw %} <em>uniformly</em> on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Interpret the Bernstein polynomial as an expectation under a binomial law. Concentration of the sample proportion near its mean then turns uniform continuity into uniform approximation. Let {% raw %}<span class="math inline">\(M = \sup_{x \in [0,1]} |f(x)|\)</span>{% endraw %}. Fix some {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\delta = \delta(\varepsilon) = \sup \{ |f(x) - f(y)| : |x-y| \leq \varepsilon \}\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(n \geq 1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x \in [0,1]\)</span>{% endraw %}; let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be independent random variables, with respect to some probability space, such that {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(X_i = 1)=x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(X_i = 0)=1-x\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(S_n = X_1 + \dots + X_n\)</span>{% endraw %}. Then, since {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(S_n = k) = \binom{n}{k} x^k (1-x)^{n-k}\)</span>{% endraw %} by independence, we have that {% raw %}<span class="math inline">\(\mathbb{E} f(\frac{S_n}{n}) = B_n (x)\)</span>{% endraw %}. So, the task is to bound the probability that {% raw %}<span class="math inline">\(|f(\frac{S_n}{n}) - f(x)|\)</span>{% endraw %} is small (this is random, as the first term is random).</p>

<p>To do so, note that {% raw %}<span class="math inline">\(|f(\frac{S_n}{n}) - f(x)| \leq \delta\)</span>{% endraw %} on the set {% raw %}<span class="math inline">\(\{|\frac{S_n}{n} - x| &lt; \varepsilon\}\)</span>{% endraw %}. Furthermore, {% raw %}<span class="math inline">\(|f(\frac{S_n}{n}) - f(x)| \leq 2M\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{|\frac{S_n}{n} - x| &lt; \varepsilon\}^c\)</span>{% endraw %}, by the boundedness of a continuous function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on a compact set. Therefore, we have </p>

{% raw %}<span id="eq:III-3"></span><div class="math display">\[\begin{aligned}
        |B_n (x) - f(x)| &amp;= \left|\mathbb{E}\left[f\left(\frac{S_n}{n}\right) - f(x)\right] \right| \leq \mathbb{E}\left|f\left(\frac{S_n}{n}\right) - f(x)\right| \\
        &amp; \leq \mathop{\mathrm{\mathbf{P}}}\left(\left|\frac{S_n}{n} - x\right| &lt; \varepsilon\right) \delta + 2 \mathop{\mathrm{\mathbf{P}}}\left(\left|\frac{S_n}{n} - x\right| \geq \varepsilon\right) M \leq \delta + \frac{2M \mathop{\mathrm{Var}}(S_n)}{n^2 \varepsilon^2} ~,
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p>For every fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the preceding bound gives {% raw %}<span class="math inline">\(\limsup_n\|B_n-f\|_\infty\leq\delta(\varepsilon)\)</span>{% endraw %}. Now let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. Uniform continuity gives {% raw %}<span class="math inline">\(\delta(\varepsilon)\to0\)</span>{% endraw %}, proving uniform convergence. ◻</p>

</div>
<h2 data-note-section="2" id="useful-probabilistic-inequalities">2. Probabilistic inequalities and identities</h2>
<h3 data-note-section="2.1" id="useful-preliminary-facts">2.1. Useful Preliminary Facts</h3>
<div id="result-6" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong>.  If {% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is a sequence of uniformly bounded random variables and {% raw %}<span class="math inline">\(X = \lim\limits_{n\to\infty} X_n\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E} X = \lim\limits_{n\to\infty} \mathbb{E} X_n\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>If {% raw %}<span class="math inline">\(|X_n|\leq C\)</span>{% endraw %} almost surely for all {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|X|\leq C\)</span>{% endraw %} almost surely. For {% raw %}<span class="math inline">\(A_n=\{|X_n-X|&gt;\varepsilon\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb{E}|X_n-X|\leq2CP(A_n)+\varepsilon.\]</div>{% endraw %}<p>Almost sure convergence implies {% raw %}<span class="math inline">\(P(A_n)\to0\)</span>{% endraw %}. Take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}; the inequality {% raw %}<span class="math inline">\(|\mathbb{E}X_n-\mathbb{E}X|\leq \mathbb{E}|X_n-X|\)</span>{% endraw %} finishes the proof.</p>

<p>◻</p>

</div>
<div id="lem:bonferroni-bound-distribution-function" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong>.  For any {% raw %}<span class="math inline">\(b \geq 0\)</span>{% endraw %} and random variables {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:prob-inequality"></span><div class="math display">\[
        \mathop{\mathrm{\mathbf{P}}}(X + Y \leq a-b) - \mathop{\mathrm{\mathbf{P}}}(|Y| &gt; b) \leq \mathop{\mathrm{\mathbf{P}}}(X \leq a) \leq \mathop{\mathrm{\mathbf{P}}}(X + Y \leq a+b) + \mathop{\mathrm{\mathbf{P}}}(|Y| &gt; b) ~.\tag{2}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> On {% raw %}<span class="math inline">\(\{|Y|\leq b\}\)</span>{% endraw %}, the implication {% raw %}<span class="math inline">\(X+Y\leq a-b\Rightarrow X\leq a\)</span>{% endraw %} follows from {% raw %}<span class="math inline">\(X=(X+Y)-Y\leq a\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(X\leq a\Rightarrow X+Y\leq a+b\)</span>{% endraw %}. Thus</p>
{% raw %}<div class="math display">\[\{X+Y\leq a-b\}\setminus\{|Y|&gt;b\}\subseteq\{X\leq a\}\subseteq\{X+Y\leq a+b\}\cup\{|Y|&gt;b\}.\]</div>{% endraw %}
<p>Taking probabilities proves both inequalities, including {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %}. ◻</p>
</div>

<div id="lem:limsup-events-independent-enough" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>. Let {% raw %}<span class="math inline">\((X_i)_{i\geq1}\)</span>{% endraw %} be independent random variables. Suppose {% raw %}<span class="math inline">\(k_n\to\infty\)</span>{% endraw %} are integers and {% raw %}<span class="math inline">\(A_n\in\sigma(X_j:j\geq k_n)\)</span>{% endraw %}. For every fixed event {% raw %}<span class="math inline">\(A\)</span>{% endraw %} in the underlying probability space,</p>

</div>
{% raw %}<div class="math display">\[P(A\cap A_n)-P(A)P(A_n)\longrightarrow0.\]</div>{% endraw %}<p>If {% raw %}<span class="math inline">\(P(A)&gt;0\)</span>{% endraw %}, this gives {% raw %}<span class="math inline">\(P(A_n\mid A)-P(A_n)\to0\)</span>{% endraw %}. Without independence of the observations, the assertion is false: take every {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} equal to the same nonconstant Bernoulli variable.</p>

<div class="proof">
<p><em>Proof.</em></p>

<p>Let {% raw %}<span class="math inline">\(\mathscr F_K=\sigma(X_1,\ldots,X_K)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathscr F_\infty=\sigma(X_i:i\geq1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U=\mathbb{E}[1_A\mid\mathscr F_\infty]\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(U_K=\mathbb{E}[1_A\mid\mathscr F_K]\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\mathbb{E}|U-U_K|\to0\)</span>{% endraw %} by martingale convergence (equivalently, by approximation of integrable {% raw %}<span class="math inline">\(\mathscr F_\infty\)</span>{% endraw %}-measurable functions by finite-coordinate simple functions). For {% raw %}<span class="math inline">\(k_n&gt;K\)</span>{% endraw %}, independence gives {% raw %}<span class="math inline">\(\mathbb{E}[U_K1_{A_n}]=P(A)P(A_n)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\mathbb{E}[1_A1_{A_n}]=\mathbb{E}[U1_{A_n}]\)</span>{% endraw %}, the absolute difference is bounded by {% raw %}<span class="math inline">\(\mathbb{E}|U-U_K|\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}.</p>

<p>◻</p>

</div>
<h3 data-note-section="2.2" id="bounds-on-moments-of-random-variables">2.2. Bounds on Moments of Random Variables</h3>
<div id="lem:markov" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong> (Markov).  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a nonnegative random variable. Then, for {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}(X \geq \varepsilon) \leq \frac{\mathbb{E} X}{\varepsilon} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The pointwise inequality {% raw %}<span class="math inline">\(\varepsilon1_{\{X\geq\varepsilon\}}\leq X\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\varepsilon\mathbb{P}(X\geq\varepsilon)\leq\mathbb{E}X\)</span>{% endraw %} after integration. This also holds if the expectation is infinite. ◻</p>
</div>
<div id="lem:chebyshev" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong> (Chebyshev). Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a real random variable with finite variance. Then, for {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}(|X-\mathbb{E} X| \geq \varepsilon) \leq \frac{\mathop{\mathrm{Var}}X}{\varepsilon^2} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Apply Markov to the nonnegative variable {% raw %}<span class="math inline">\((X-\mathbb{E}X)^2\)</span>{% endraw %} at threshold {% raw %}<span class="math inline">\(\varepsilon^2\)</span>{% endraw %}. Nonnegativity of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} itself is not required. ◻</p>
</div>
<div id="lem:jensen" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong> (Jensen).  For an integrable real random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and a finite convex function {% raw %}<span class="math inline">\(\varphi:\mathbb R\to\mathbb R\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\varphi(\mathbb{E} X) \leq \mathbb{E} \varphi(X) ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> At {% raw %}<span class="math inline">\(m=\mathbb{E}X\)</span>{% endraw %}, a finite convex function has a supporting slope {% raw %}<span class="math inline">\(a\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\varphi(x)\geq\varphi(m)+a(x-m)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. This follows by choosing {% raw %}<span class="math inline">\(a\)</span>{% endraw %} between the left and right derivatives at {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. The affine lower bound is integrable, so the negative part of {% raw %}<span class="math inline">\(\varphi(X)\)</span>{% endraw %} is integrable and its expectation is well defined, possibly {% raw %}<span class="math inline">\(+\infty\)</span>{% endraw %}. Taking expectations of the supporting-line inequality proves Jensen. ◻</p>
</div>
<div id="lem:holder" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong> (Hölder).  For random variables {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E}|XY| \leq (\mathbb{E}|X|^p)^{\frac1p} (\mathbb{E}|Y|^q)^{\frac1q} ~,\]</div>{% endraw %}
<p> provided {% raw %}<span class="math inline">\(1&lt;p,q&lt;\infty,\quad 1/p+1/q=1\)</span>{% endraw %}, with finite displayed moments.</p>

</div>
<div class="proof">
<p><em>Proof.</em> If either norm is zero, the corresponding variable vanishes almost surely. Otherwise divide {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|Y|\)</span>{% endraw %} by {% raw %}<span class="math inline">\(A=(\mathbb{E}|X|^p)^{1/p}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=(\mathbb{E}|Y|^q)^{1/q}\)</span>{% endraw %}. Young’s inequality {% raw %}<span class="math inline">\(uv\leq u^p/p+v^q/q\)</span>{% endraw %} follows by minimizing {% raw %}<span class="math inline">\(u^p/p-uv\)</span>{% endraw %} over {% raw %}<span class="math inline">\(u\geq0\)</span>{% endraw %}. Integrating it for these normalized variables gives {% raw %}<span class="math inline">\(\mathbb{E}|XY|/(AB)\leq1/p+1/q=1\)</span>{% endraw %}. The endpoint version {% raw %}<span class="math inline">\(\mathbb{E}|XY|\leq\mathbb{E}|X|\,\|Y\|_\infty\)</span>{% endraw %} follows directly from the essential-supremum bound. ◻</p>
</div>
<div id="cor:holder-consequences" class="corollary" data-note-number="13" data-note-kind="Corollary">
<p><strong>Corollary 13</strong> (Cauchy-Schwarz and Lyapounov).  </p>

<ol>
<li><p>(Cauchy-Schwarz) </p>

{% raw %}<div class="math display">\[\mathbb{E}|XY| \leq (\mathbb{E}|X|^2)^{\frac12} (\mathbb{E}|Y|^2)^{\frac12} ~.\]</div>{% endraw %}</li>
<li><p>(Lyapounov) </p>

{% raw %}<div class="math display">\[(\mathbb{E}|X|^p)^{\frac1p} \leq (\mathbb{E}|X|^q)^{\frac1q}\]</div>{% endraw %}
<p> for {% raw %}<span class="math inline">\(0 &lt; p &lt; q\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Cauchy–Schwarz is Hölder with both exponents equal to two. For {% raw %}<span class="math inline">\(0&lt;p&lt;q\)</span>{% endraw %}, apply Hölder to {% raw %}<span class="math inline">\(|X|^p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, with conjugate exponents {% raw %}<span class="math inline">\(q/p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q/(q-p)\)</span>{% endraw %}. This gives {% raw %}<span class="math inline">\(\mathbb{E}|X|^p\leq(\mathbb{E}|X|^q)^{p/q}\)</span>{% endraw %}; taking the positive {% raw %}<span class="math inline">\(p\)</span>{% endraw %}th root proves Lyapunov’s inequality. ◻</p>
</div>
<div id="lem:minkowski" class="lemma" data-note-number="14" data-note-kind="Lemma">
<p><strong>Lemma 14</strong> (Minkowski).  For {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[(\mathbb{E}|X+Y|^p)^{\frac1p} \leq (\mathbb{E}|X|^p)^{\frac1p} + (\mathbb{E}|Y|^p)^{\frac1p} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> It suffices to consider finite right-hand side. At {% raw %}<span class="math inline">\(p=1\)</span>{% endraw %} this is the integrated triangle inequality. For {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}, the elementary bound {% raw %}<span class="math inline">\(|X+Y|^p\leq2^{p-1}(|X|^p+|Y|^p)\)</span>{% endraw %} first establishes integrability. Hölder then gives</p>
{% raw %}<div class="math display">\[\mathbb{E}|X+Y|^p\leq\mathbb{E}[(|X|+|Y|)|X+Y|^{p-1}]\leq(\|X\|_p+\|Y\|_p)\|X+Y\|_p^{p-1}.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|X+Y\|_p=0\)</span>{% endraw %} the result is immediate; otherwise divide by its {% raw %}<span class="math inline">\((p-1)\)</span>{% endraw %}st power. ◻</p>
</div>
<h3 data-note-section="2.3" id="maximal-inequalities">2.3. Maximal Inequalities</h3>
<div id="thm:kolmogorov-maximal" class="theorem" data-note-number="15" data-note-kind="Theorem">
<p><strong>Theorem 15</strong> (Kolmogorov’s Maximal Inequality).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be independent random variables with mean zero and finite variances. Then, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{\mathbf{P}}}\left( \max_{1 \leq k \leq n} |S_k| \geq \varepsilon \right) \leq \frac{\mathop{\mathrm{Var}}(S_n)}{\varepsilon^2} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>Note that this strengthens the result that one can obtain from applying Chebyshev’s inequality to estimating {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(|S_n| \geq \varepsilon)\)</span>{% endraw %}. The proof separates paths by their first threshold crossing. Independence makes the later increment orthogonal to the value at that crossing; it does not require that {% raw %}<span class="math inline">\(|S_n|\)</span>{% endraw %} remain large on each such path.</p>

<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(A_k\)</span>{% endraw %} be the set where {% raw %}<span class="math inline">\(|S_k| \geq \varepsilon\)</span>{% endraw %}, but where {% raw %}<span class="math inline">\(|S_j| &lt; \varepsilon\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j &lt; k\)</span>{% endraw %}. Clearly, {% raw %}<span class="math inline">\(\{A_k\}\)</span>{% endraw %} is a disjoint collection of sets, hence </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} S_n^2 &amp;\geq \sum_{1 \leq k \leq n} \int_{A_k} S_n^2 \dif \mathop{\mathrm{\mathbf{P}}}\\
        &amp;= \sum_{1 \leq k \leq n} \int_{A_k} (S_k^2 + 2 S_k (S_n - S_k) + (S_n - S_k)^2) \dif \mathop{\mathrm{\mathbf{P}}}\\
        &amp;\geq \sum_{1 \leq k \leq n} \int_{A_k} S_k^2 + 2 S_k (S_n - S_k) \dif \mathop{\mathrm{\mathbf{P}}}~.
    
\end{aligned}\]</div>{% endraw %}
<p> Note that {% raw %}<span class="math inline">\(A_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_k\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\sigma(X_1,\dots,X_k)\)</span>{% endraw %}-measurable, and {% raw %}<span class="math inline">\(S_n - S_k\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sigma(X_{k+1},\dots,X_n)\)</span>{% endraw %}-measurable. Furthermore, these are mean zero random variables. Therefore, by independence and integrability, we have {% raw %}<span class="math inline">\(\int_{A_k} S_k(S_n-S_k) \dif \mathop{\mathrm{\mathbf{P}}}= \mathbb{E}[S_n-S_k] (\int_{A_k} S_k) = 0\)</span>{% endraw %}. Therefore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} S_n^2 &amp;\geq \sum_{1 \leq k \leq n} \int_{A_k} S_k^2 \dif \mathop{\mathrm{\mathbf{P}}}\\
        &amp;\geq \sum_{1 \leq k \leq n} \varepsilon^2 \mathop{\mathrm{\mathbf{P}}}(A_k) = \varepsilon^2 \mathop{\mathrm{\mathbf{P}}}\left( \max_{1 \leq k \leq n} |S_k| \geq \varepsilon \right) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which concludes the proof. ◻</p>

</div>
<span id="eq:etemadi-max-ineq"></span>
<div id="thm:etemadi-max-inequality" class="theorem" data-note-number="16" data-note-kind="Theorem">
<p><strong>Theorem 16</strong>. (Etemadi). For independent {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %}, partial sums {% raw %}<span class="math inline">\(S_k\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

</div>
{% raw %}<div class="math display">\[P\left(\max_{k\leq n}|S_k|\geq3\varepsilon\right)\leq3\max_{k\leq n}P(|S_k|\geq\varepsilon).\tag{3}\]</div>{% endraw %}<div class="proof">
<p><em>Proof.</em></p>

<p>Let {% raw %}<span class="math inline">\(A_k\)</span>{% endraw %} be the disjoint first-crossing events for {% raw %}<span class="math inline">\(|S_k|\geq3\varepsilon\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(A_k\cap\{|S_n|&lt;\varepsilon\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|S_n-S_k|&gt;2\varepsilon\)</span>{% endraw %}. This future increment is independent of {% raw %}<span class="math inline">\(A_k\)</span>{% endraw %}. Writing {% raw %}<span class="math inline">\(q=\max_{j\leq n}P(|S_j|\geq\varepsilon)\)</span>{% endraw %}, we obtain</p>

{% raw %}<div class="math display">\[P(\max_{k\leq n}|S_k|\geq3\varepsilon)\leq P(|S_n|\geq\varepsilon)+\sum_{k&lt;n}P(A_k)P(|S_n-S_k|&gt;2\varepsilon)\leq q+2q\sum_{k&lt;n}P(A_k)\leq3q.\]</div>{% endraw %}<p>The penultimate bound uses {% raw %}<span class="math inline">\(\{|S_n-S_k|&gt;2\varepsilon\}\subseteq\{|S_n|&gt;\varepsilon\}\cup\{|S_k|&gt;\varepsilon\}\)</span>{% endraw %}.</p>

<p>◻</p>

</div>
<h3 data-note-section="2.4" id="bounds-on-moments-of-random-series">2.4. Bounds on Moments of Random Series</h3>
<p>We next compare moments of a sum with moments of its summands. A bound with no assumptions on dependence comes first. Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} denote random variables (not assumed to be independent or identically distributed). Set {% raw %}<span class="math inline">\(S_m \triangleq \sum_{1 \leq i \leq m} X_i\)</span>{% endraw %} for {% raw %}<span class="math inline">\(m \leq n\)</span>{% endraw %} to be the {% raw %}<span class="math inline">\(m\)</span>{% endraw %}th partial sum of random variables.</p>

<p>We begin with a preliminary bound, called the {% raw %}<span class="math inline">\(c_r\)</span>{% endraw %} inequality (due to Loève).</p>

<div id="lem:cr-inequality" class="lemma" data-note-number="17" data-note-kind="Lemma">
<p><strong>Lemma 17</strong> ({% raw %}<span class="math inline">\(c_r\)</span>{% endraw %} inequality).  For any {% raw %}<span class="math inline">\(r &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E} \left| \sum_{1 \leq k \leq n} X_k \right|^r \leq c_r \sum_{1 \leq k \leq n} \mathbb{E} |X_k|^r ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(c_r = 1\)</span>{% endraw %} if {% raw %}<span class="math inline">\(r \leq 1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(c_r = n^{r-1}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(r \geq 1\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Follows from substituting random variables {% raw %}<span class="math inline">\(\{X_1,\dots,X_n\}\)</span>{% endraw %} into the hypothesis of Lemma <a href="#lem:cr-inequality-real-numbers" data-reference-type="ref" data-reference="lem:cr-inequality-real-numbers">3</a>, and applying expectations to the inequality therein. ◻</p>

</div>
<p>To summarize, by writing {% raw %}<span class="math inline">\(S_n \triangleq \sum_{1\leq k \leq n} X_k\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\mathbb{E} |S_n|^p \leq \begin{cases}
        n^{p-1} \sum_{1 \leq i \leq n} \mathbb{E} |X_i|^p &amp; \text{ if } p &gt; 1 ~, \\
        \sum_{1 \leq i \leq n} \mathbb{E} |X_i|^p &amp; \text{ if } p \leq 1 ~.
    \end{cases}\]</div>{% endraw %}
<p>Cancellation improves the bound for {% raw %}<span class="math inline">\(1\leq p\leq2\)</span>{% endraw %}. The estimates below do not extend unchanged to {% raw %}<span class="math inline">\(p&gt;2\)</span>{% endraw %}: for independent standard normal summands, {% raw %}<span class="math inline">\(\mathbb{E}|S_n|^p=n^{p/2}\mathbb{E}|X_1|^p\)</span>{% endraw %}, which cannot be bounded by a fixed constant times {% raw %}<span class="math inline">\(\sum_i\mathbb{E}|X_i|^p=n\mathbb{E}|X_1|^p\)</span>{% endraw %} when {% raw %}<span class="math inline">\(p&gt;2\)</span>{% endraw %}.</p>

<div id="result-18" class="definition" data-note-number="18" data-note-kind="Definition">
<p><strong>Definition 18</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} be random variables. {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} conditional on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is <em>symmetric</em> (about {% raw %}<span class="math inline">\(0\)</span>{% endraw %}) if, for all {% raw %}<span class="math inline">\(a \geq 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}(Y &gt; a \mid X) = \mathop{\mathrm{\mathbf{P}}}(Y &lt; -a \mid X) \quad \mathop{\mathrm{\mathrm{a.s.}}}\]</div>{% endraw %}
</div>
<div id="lem:prelim-expectation-subadditivity-bound" class="lemma" data-note-number="19" data-note-kind="Lemma">
<p><strong>Lemma 19</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} be random variables such that {% raw %}<span class="math inline">\(\mathbb{E}|X|^p, \mathbb{E}|Y|^p &lt; \infty\)</span>{% endraw %} for {% raw %}<span class="math inline">\(p \in [1,2]\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is symmetric about {% raw %}<span class="math inline">\(0\)</span>{% endraw %} conditional on {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E}|X+Y|^p \leq \mathbb{E}|X|^p + \mathbb{E}|Y|^p\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Since </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E}|X+Y|^p = \mathbb{E}[\mathbb{E}[|X+Y|^p \mid X]] = \mathbb{E}[\mathbb{E}[|X-Y|^p \mid X]] = \mathbb{E}|X-Y|^p ~,
    
\end{aligned}\]</div>{% endraw %}
<p> applying Lemma <a href="#lem:clarkson" data-reference-type="ref" data-reference="lem:clarkson">2</a> to the calculation above concludes the proof. ◻</p>

</div>
<div id="prop:preliminary-bound-on-expected-sum" class="proposition" data-note-number="20" data-note-kind="Proposition">
<p><strong>Proposition 20</strong>.  Let {% raw %}<span class="math inline">\(\{X_1,\dots,X_n\}\)</span>{% endraw %} be random variables such that {% raw %}<span class="math inline">\(\mathbb{E}|X_i|^p &lt; \infty\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i \in \{1,\dots,n\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p \in [1,2]\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(X_{m+1} | S_m\)</span>{% endraw %} is symmetric for all {% raw %}<span class="math inline">\(1 \leq m \leq n-1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E}|S_n|^p \leq \sum_{1 \leq i \leq n} \mathbb{E}|X_i|^p\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Result follows from induction and applications of Lemma <a href="#lem:prelim-expectation-subadditivity-bound" data-reference-type="ref" data-reference="lem:prelim-expectation-subadditivity-bound">19</a>. ◻</p>

</div>
<div id="lem:pth-moment-integral-expression" class="lemma" data-note-number="21" data-note-kind="Lemma">
<p><strong>Lemma 21</strong>. Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} have characteristic function {% raw %}<span class="math inline">\(f(t)=Ee^{itX}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;p&lt;2\)</span>{% endraw %}, the following identity holds (also with value {% raw %}<span class="math inline">\(+\infty\)</span>{% endraw %}):</p>

{% raw %}<div class="math display">\[\mathbb{E}|X|^p = K(p) \int_{-\infty}^{\infty} \frac{1 - \Re f(t)}{|t|^{p+1}} \dif t ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The integrand is nonnegative, so Tonelli’s theorem permits the exchange of integrals, even if the moment is infinite: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E}|X|^p &amp;= K(p) \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1 - \cos xt}{|t|^{p+1}} \dif t \dif F(x) = K(p) \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1 - \cos xt}{|t|^{p+1}} \dif F(x) \dif t  \\
        &amp;= K(p) \int_{-\infty}^{\infty} \frac{1 - \Re f(t)}{|t|^{p+1}} \dif t ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<p>For {% raw %}<span class="math inline">\(1\leq p&lt;2\)</span>{% endraw %}, there is also a characteristic-function proof. Conditional symmetry makes the conditional characteristic function real, so the fractional-moment identity applies. The endpoint {% raw %}<span class="math inline">\(p=2\)</span>{% endraw %} follows directly by expanding the square and using conditional mean zero. Define</p>

{% raw %}<div class="math display">\[f_m (t) = \mathbb{E}[\exp(itX_{m+1}) \mid S_m] ~.\]</div>{% endraw %}
<p> This is the characteristic function of the random variable {% raw %}<span class="math inline">\(X_{m+1}\)</span>{% endraw %} conditional on {% raw %}<span class="math inline">\(S_m\)</span>{% endraw %}, for all {% raw %}<span class="math inline">\(1 \leq m \leq n-1\)</span>{% endraw %}. By assumptions, it is clear that {% raw %}<span class="math inline">\(f_m (t)\)</span>{% endraw %} is real. Therefore, the characteristic function of {% raw %}<span class="math inline">\(S_{m+1}\)</span>{% endraw %} conditional on {% raw %}<span class="math inline">\(S_m\)</span>{% endraw %} is given by {% raw %}<span class="math inline">\(\exp(it S_m) f_m(t)\)</span>{% endraw %}. From the arguments above, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}[|S_{m+1}|^p \mid S_m] = K(p) \int_{-\infty}^{\infty} \frac{1 - \Re \exp(itS_m) f_m(t)}{|t|^{p+1}} \dif t ~.
\end{aligned}\]</div>{% endraw %}
<p> By direct calculations, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    1 - \Re \exp(itS_m) f_m(t) &amp;= 1 - f_m(t) \cos tS_m \\
    &amp;= (1 - \cos tS_m) + (1 - f_m (t)) - (1 - \cos tS_m)(1 - f_m (t)) \\
    &amp;\leq (1 - \cos tS_m) + (1 - f_m (t)) ~.
\end{aligned}\]</div>{% endraw %}
<p> It then follows that </p>

{% raw %}<span id="eq:1-14"></span><span id="eq:1-15"></span><div class="math display">\[\begin{aligned}
     \mathbb{E}[|S_{m+1}|^p \mid S_m] &amp;\leq K(p) \int_{-\infty}^{\infty} \frac{(1 - \cos tS_m) + (1 - f_m (t))}{|t|^{p+1}} \dif t \\
     &amp;= |S_m|^p + \mathbb{E}[|X_{m+1}|^p \mid S_m] ~.
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> Therefore, Proposition <a href="#prop:preliminary-bound-on-expected-sum" data-reference-type="ref" data-reference="prop:preliminary-bound-on-expected-sum">20</a> follows by taking expectations of the conditional inequality and iterating from {% raw %}<span class="math inline">\(m=1\)</span>{% endraw %}.</p>

<div id="result-22" class="remark" data-note-number="22" data-note-kind="Remark">
<p><strong>Remark 22</strong>.  Let {% raw %}<span class="math inline">\(X_1,X_2\)</span>{% endraw %} be random variables such that {% raw %}<span class="math inline">\(X_2\)</span>{% endraw %} is an independent copy of {% raw %}<span class="math inline">\(X_1\)</span>{% endraw %}. Suppose these are identically distributed. Then, if {% raw %}<span class="math inline">\(f(t)\)</span>{% endraw %} is the characteristic function of {% raw %}<span class="math inline">\(X_1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X_1 - X_2\)</span>{% endraw %} has the characteristic function {% raw %}<span class="math inline">\(|f(t)|^2\)</span>{% endraw %}. Applying the identity {% raw %}<span class="math inline">\(2(1 - \Re f(t)) = (1-|f(t)|^2) + |1-f(t)|^2\)</span>{% endraw %} and Lemma <a href="#lem:pth-moment-integral-expression" data-reference-type="ref" data-reference="lem:pth-moment-integral-expression">21</a>, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E}|X_1|^p = \frac12 \mathbb{E}|X_1 - X_2|^p + \frac12 K(p) \int_{-\infty}^{\infty} \frac{|1-f(t)|^2}{|t|^{p+1}} \dif t ~,~~\text{for } 0 &lt; p &lt; 2 ~.
    
\end{aligned}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(1\leq p&lt;2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}X_1=0\)</span>{% endraw %}, the left inequality below follows from the nonnegative integral term; the right follows from Jensen conditional on {% raw %}<span class="math inline">\(X_1\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(p=2\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(\mathbb{E}|X_1-X_2|^2=2\mathbb{E}|X_1|^2\)</span>{% endraw %}. Thus for {% raw %}<span class="math inline">\(1\leq p\leq2\)</span>{% endraw %} and finite {% raw %}<span class="math inline">\(p\)</span>{% endraw %}th moments,</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac12 \mathbb{E}|X_1 - X_2|^p \leq \mathbb{E} |X_1|^p \leq \mathbb{E} |X_1 - X_2|^p ~.
    
\end{aligned}\]</div>{% endraw %}
<p>Symmetrisation compares a centred variable with the difference of two copies. The next theorem uses this to bound the {% raw %}<span class="math inline">\(p\)</span>{% endraw %}th moment of a partial sum by the sum of the individual moments.</p>

</div>
<div id="thm:von-bahr-esseen" class="theorem" data-note-number="23" data-note-kind="Theorem">
<p><strong>Theorem 23</strong> (von Bahr-Esseen).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be random variables such that {% raw %}<span class="math inline">\(\mathbb{E}|X_i|^p &lt; \infty\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p \in [1,2]\)</span>{% endraw %}.</p>

<ol>
<li><p>Assume </p>

{% raw %}<div class="math display">\[\mathbb{E}[X_{m+1} \mid S_m] = 0 ~ \mathop{\mathrm{\mathrm{a.s.}}}\text{ for } 1 \leq m \leq n-1 ~.\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(\mathbb{E} |S_n|^p \leq 2 \sum_{1 \leq i \leq n} \mathbb{E}|X_i|^p\)</span>{% endraw %}.</p></li>
<li><p>Assume </p>

{% raw %}<div class="math display">\[\mathbb{E}\left[X_i\mid\sum_{j\in J\setminus\{i\}}X_j\right]=0\quad\text{for every nonempty }J\subseteq\{1,\ldots,n\},\ i\in J.\]</div>{% endraw %}<p>This assumption holds for independent centered variables and is inherited by every subcollection. In the proof put {% raw %}<span class="math inline">\(R_{mi}=\sum_{1\leq j\leq m+1,\ j\ne i}X_j\)</span>{% endraw %}.</p>


<p> Then, {% raw %}<span class="math inline">\(\mathbb{E} |S_n|^p \leq (2 - \frac1n) \sum_{1 \leq i \leq n} \mathbb{E}|X_i|^p\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p>The conditional-copy construction uses a regular conditional law {% raw %}<span class="math inline">\(K(s,\cdot)\)</span>{% endraw %} of the next real-valued summand given the real sum {% raw %}<span class="math inline">\(S_m=s\)</span>{% endraw %}. On an enlarged space, attach an independent uniform variable and use the quantile of {% raw %}<span class="math inline">\(K(S_m,\cdot)\)</span>{% endraw %} to draw {% raw %}<span class="math inline">\(\tilde X_{m+1}\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(S_m\)</span>{% endraw %}, the two copies are independent and identically distributed. Thus their difference is conditionally symmetric. Moreover, conditional centering implies {% raw %}<span class="math inline">\(\mathbb{E}[\tilde X_{m+1}\mid S_m,X_{m+1}]=0\)</span>{% endraw %}; this is the hypothesis needed for the first Jensen inequality in the proof.</p>
<div class="proof">
<p><em>Proof.</em> For the first estimate, introduce a conditional copy to obtain a symmetric difference. For (a), for a fixed {% raw %}<span class="math inline">\(1 \leq m \leq n-1\)</span>{% endraw %}, we can introduce {% raw %}<span class="math inline">\(\tilde X_{m+1}\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(S_m\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(\tilde X_{m+1}\)</span>{% endraw %} independent of {% raw %}<span class="math inline">\(X_{m+1}\)</span>{% endraw %} with the same conditional distribution. Such a copy can be constructed on an enlarged probability space. Applying Lemmas <a href="#lem:prelim-expectation-subadditivity-bound" data-reference-type="ref" data-reference="lem:prelim-expectation-subadditivity-bound">19</a> and <a href="#lem:pth-moment-integral-expression" data-reference-type="ref" data-reference="lem:pth-moment-integral-expression">21</a>, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E}|S_{m+1}|^p &amp;= \mathbb{E}|S_m + X_{m+1}|^p \\
        &amp;\leq \mathbb{E}|S_m + X_{m+1} - \tilde X_{m+1}|^p \\
        &amp;\leq \mathbb{E}|S_m|^p + \mathbb{E} |X_{m+1} - \tilde X_{m+1}|^p \leq \mathbb{E}|S_m|^p + 2 \mathbb{E}|X_{m+1}|^p ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Apply induction to conclude.</p>

<p>For the second estimate, repeat the conditional-copy argument with each summand singled out, then average the resulting inequalities. For (b), for a fixed {% raw %}<span class="math inline">\(i\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(1 \leq i \leq m+1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S_{m+1} = R_{mi} + X_i\)</span>{% endraw %}. Again, let {% raw %}<span class="math inline">\(\tilde X_i\)</span>{% endraw %} be a random variable such that, conditional on {% raw %}<span class="math inline">\(R_{mi}\)</span>{% endraw %}, is an i.i.d. copy of {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}. Applying the same arguments as those for part (a), we have </p>

{% raw %}<span id="eq:1-25"></span><div class="math display">\[\begin{aligned}
        \mathbb{E}|S_{m+1}|^p &amp;= \mathbb{E}|R_{mi} + X_i|^p \\
        &amp;\leq \mathbb{E}|R_{mi} + X_i - \tilde X_i|^p \\
         &amp;\leq \mathbb{E}|R_{mi}|^p + \mathbb{E} |X_i - \tilde X_i|^p ~ \leq \left( 2 - \frac1m \right) \sum_{1 \leq j \leq m+1 : j \neq i} \mathbb{E}|X_j|^p + 2 \mathbb{E}|X_i|^p ~.
    
\end{aligned}\tag{5}\]</div>{% endraw %}
<p> Sum <a href="#eq:1-25" data-reference-type="eqref" data-reference="eq:1-25">(5)</a> over all {% raw %}<span class="math inline">\(1 \leq i \leq m+1\)</span>{% endraw %}, we have the inequality </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (m+1) \mathbb{E}|S_{m+1}|^p \leq (2m+1) \sum_{1 \leq i \leq m+1} \mathbb{E}|X_i|^p ~,
    
\end{aligned}\]</div>{% endraw %}
<p> and the claim follows from induction. ◻</p>

</div>

<div id="result-24" class="remark" data-note-number="24" data-note-kind="Remark">
<p><strong>Remark 24</strong>. For {% raw %}<span class="math inline">\(0&lt;p&lt;q\)</span>{% endraw %}, Lyapunov’s inequality gives {% raw %}<span class="math inline">\(\mathbb{E}|S_n|^p\leq(\mathbb{E}|S_n|^q)^{p/q}\)</span>{% endraw %}. A bound on the higher moment can therefore give a bound on the lower one, though it need not be sharper than a direct estimate. The exponent is {% raw %}<span class="math inline">\(p/q\)</span>{% endraw %}.</p>

</div>
<div id="result-25" class="remark" data-note-number="25" data-note-kind="Remark">
<p><strong>Remark 25</strong>.  The conditions of Theorem <a href="#thm:von-bahr-esseen" data-reference-type="ref" data-reference="thm:von-bahr-esseen">23</a> hold when {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} are independent and have mean zero, i.e. {% raw %}<span class="math inline">\(\mathbb{E} X_i = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}.</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-06-10-nonparametric-inference-for-the-mean %}">Nonparametric Inference for the Mean</a></p></nav>

</div>
