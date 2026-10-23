---
layout: "post"
title: "Martingales"
date: "2022-01-26"
tags: ["probability theory", "statistics"]
excerpt: "Martingale convergence, uniform integrability, and optional sampling, with proofs and counterexamples."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="martingales" data-note-section="title">

</div>
<p>Let {% raw %}<span class="math inline">\((\Omega,\mathcal F,\mathbb P)\)</span>{% endraw %} be a probability space. A filtration {% raw %}<span class="math inline">\((\mathcal F_n)_{n\geq1}\)</span>{% endraw %} is an increasing sequence of sub-{% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. A martingale is an integrable adapted process whose conditional expectation at a later time equals its present value. Conditional expectations of a fixed integrable random variable provide the basic example.</p>


<div id="def:martingales" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1 (Martingale).</strong> A sequence {% raw %}<span class="math inline">\((X_n,\mathcal F_n)_{n\geq1}\)</span>{% endraw %} is a martingale if:</p>


<ol>
<li><p>({% raw %}<span class="math inline">\(\{\mathcal F_n\}\)</span>{% endraw %} form a <em>filtration</em>) {% raw %}<span class="math inline">\(\mathcal F_n \subset \mathcal F_{n+1}\)</span>{% endraw %};</p></li>
<li><p>({% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is <em>adapted to the filtration</em>) {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}|X_n| &lt; \infty\)</span>{% endraw %}; and</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathcal F_n] = X_n\)</span>{% endraw %} with probability one.</p></li>
</ol>
</div>
<p>If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a martingale for {% raw %}<span class="math inline">\((\mathcal F_n)\)</span>{% endraw %}, it is also a martingale for its natural filtration {% raw %}<span class="math inline">\(\mathcal H_n=\sigma(X_1,\ldots,X_n)\)</span>{% endraw %}. Indeed, {% raw %}<span class="math inline">\(\mathcal H_n\subseteq\mathcal F_n\)</span>{% endraw %}, so the tower property gives</p>

{% raw %}<div class="math display">\[\mathbb E[X_{n+1}\mid\mathcal H_n]
=\mathbb E[\mathbb E[X_{n+1}\mid\mathcal F_n]\mid\mathcal H_n]
=\mathbb E[X_n\mid\mathcal H_n]=X_n.\]</div>{% endraw %}

<p>Thus the martingale property passes to a smaller filtration to which the process remains adapted. Enlarging the filtration requires a separate check.</p>


<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2 (Integral characterization).</strong> Since {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable, the conditional-mean identity is equivalent to</p>


{% raw %}<div class="math display">\[\int_A X_{n+1} \dif \mathbb P= \int_A X_n \dif \mathbb P\quad \text{for all } A \in \mathcal F_n ~.\]</div>{% endraw %}
<p>Iterating the tower property gives {% raw %}<span class="math inline">\(\mathbb E[X_{n+k}\mid\mathcal F_n]=X_n\)</span>{% endraw %} almost surely for every {% raw %}<span class="math inline">\(k\geq1\)</span>{% endraw %}. Consequently the displayed integral identity also holds with {% raw %}<span class="math inline">\(X_{n+k}\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(X_{n+1}\)</span>{% endraw %}.</p>


</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (Martingale differences).</strong> Set {% raw %}<span class="math inline">\(\Delta_1=X_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_n=X_n-X_{n-1}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %}. Then the martingale identity is equivalent to {% raw %}<span class="math inline">\(\mathbb E[\Delta_{n+1}\mid\mathcal F_n]=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(X_j=\sum_{i=1}^j\Delta_i\)</span>{% endraw %}, the vectors {% raw %}<span class="math inline">\((X_1,\ldots,X_n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\Delta_1,\ldots,\Delta_n)\)</span>{% endraw %} generate the same {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field. No centering condition on {% raw %}<span class="math inline">\(\Delta_1\)</span>{% endraw %} is imposed under this indexing convention.</p>


</div>
<div id="result-4" class="example" data-note-number="4" data-note-kind="Example">
<p><strong>Example 4 (Dyadic conditional densities).</strong> Let {% raw %}<span class="math inline">\(\Omega=(0,1]\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %} be Lebesgue measure on its Borel sets, and let {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %} be generated by the intervals {% raw %}<span class="math inline">\((j2^{-n},(j+1)2^{-n}]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j=0,\ldots,2^n-1\)</span>{% endraw %}. For a finite positive Borel measure {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}, define</p>


{% raw %}<div class="math display">\[X_n(\omega) = \frac{\nu((k2^{-n}, (k+1)2^{-n}])}{2^{-n}} \quad \text{for } \omega \in (k2^{-n}, (k+1)2^{-n}] ~.\]</div>{% endraw %}
<p>The function {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable and nonnegative, with {% raw %}<span class="math inline">\(\mathbb E X_n=\nu((0,1])&lt;\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A\in\mathcal F_n\)</span>{% endraw %}, additivity over the finer dyadic cells gives {% raw %}<span class="math inline">\(\int_A X_{n+1}\,d\mathbb P=\nu(A)=\int_A X_n\,d\mathbb P\)</span>{% endraw %}. The integral characterization proves that {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a martingale.</p>


</div>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5 (Closed martingale).</strong> Let {% raw %}<span class="math inline">\(Z\in L^1(\mathbb P)\)</span>{% endraw %} and set {% raw %}<span class="math inline">\(X_n=\mathbb E[Z\mid\mathcal F_n]\)</span>{% endraw %}. Conditional Jensen gives {% raw %}<span class="math inline">\(\mathbb E|X_n|\leq\mathbb E|Z|\)</span>{% endraw %}. The tower property gives {% raw %}<span class="math inline">\(\mathbb E[X_{n+1}\mid\mathcal F_n]=X_n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a martingale.</p>


</div>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6</strong> (Branching process). Let {% raw %}<span class="math inline">\(\{N_{n,k}:n,k\geq1\}\)</span>{% endraw %} be i.i.d. nonnegative integer-valued random variables with {% raw %}<span class="math inline">\(0&lt;m=\mathbb{E} N_{1,1}&lt;\infty\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(Z_0=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_n=\sum_{k=1}^{Z_{n-1}}N_{n,k}\)</span>{% endraw %}, interpreting an empty sum as zero. With {% raw %}<span class="math inline">\(\mathcal F_n=\sigma(N_{j,k}:1\leq j\leq n,\ k\geq1)\)</span>{% endraw %}, independence of the next row gives {% raw %}<span class="math inline">\(\mathbb{E}[Z_{n+1}\mid\mathcal F_n]=mZ_n\)</span>{% endraw %}. Induction gives {% raw %}<span class="math inline">\(\mathbb{E} Z_n=m^n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(X_n=Z_n/m^n\)</span>{% endraw %} is an integrable martingale. It is also a martingale for the smaller natural filtration {% raw %}<span class="math inline">\(\sigma(Z_0,\ldots,Z_n)\)</span>{% endraw %}, by the tower property.</p>

</div>
<div class="proof">
<p>To justify the conditional mean of a random sum, write</p>
{% raw %}<div class="math display">\[Z_{n+1}=\sum_{k\geq1}1_{\{Z_n\geq k\}}N_{n+1,k}.\]</div>{% endraw %}
<p>Each indicator is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable and the next-row variable has conditional mean {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Conditional monotone convergence gives {% raw %}<span class="math inline">\(\mathbb{E}[Z_{n+1}\mid\mathcal F_n]=m\sum_{k\geq1}1_{\{Z_n\geq k\}}=mZ_n\)</span>{% endraw %}. Induction from {% raw %}<span class="math inline">\(Z_0=1\)</span>{% endraw %} proves integrability at every time, so normalization by {% raw %}<span class="math inline">\(m^n\)</span>{% endraw %} is legitimate.</p>
</div>
<div id="def:submartingales" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7 (Submartingale).</strong> A sequence {% raw %}<span class="math inline">\((X_n,\mathcal F_n)_{n\geq1}\)</span>{% endraw %} is a submartingale if:</p>


<ol>
<li><p>({% raw %}<span class="math inline">\(\{\mathcal F_n\}\)</span>{% endraw %} form a <em>filtration</em>) {% raw %}<span class="math inline">\(\mathcal F_n \subset \mathcal F_{n+1}\)</span>{% endraw %};</p></li>
<li><p>({% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is <em>adapted to the filtration</em>) {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}|X_n| &lt; \infty\)</span>{% endraw %}; and</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathcal F_n] \geq X_n\)</span>{% endraw %} with probability one.</p></li>
</ol>
</div>
<p>A sequence is called a <em>supermartingale</em> if {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathcal F_n] \leq X_n\)</span>{% endraw %} with probability one.</p>

<div id="prop:convex-function-martingale-submartingale" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>.  </p>

<ol>
<li><p><span id="prop:convex-function-martingale-submartingale-a" data-label="prop:convex-function-martingale-submartingale-a"></span> Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a martingale relative to {% raw %}<span class="math inline">\(\mathcal F_1, \mathcal F_2, \dots\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is a convex function, and {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %} are integrable, then {% raw %}<span class="math inline">\(\varphi(X_1),\varphi(X_2),\dots\)</span>{% endraw %} form a submartingale relative to {% raw %}<span class="math inline">\(\mathcal F_1, \mathcal F_2, \dots\)</span>{% endraw %}.</p></li>
<li><p><span id="prop:convex-function-martingale-submartingale-b" data-label="prop:convex-function-martingale-submartingale-b"></span> Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a submartingale relative to {% raw %}<span class="math inline">\(\mathcal F_1, \mathcal F_2, \dots\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is a nondecreasing, convex function, and {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %} are integrable, then {% raw %}<span class="math inline">\(\varphi(X_1),\varphi(X_2),\dots\)</span>{% endraw %} form a submartingale relative to {% raw %}<span class="math inline">\(\mathcal F_1, \mathcal F_2, \dots\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Conditional Jensen gives</p>
{% raw %}<div class="math display">\[\mathbb{E}[\varphi(X_{n+1})\mid\mathcal F_n]\geq\varphi(\mathbb{E}[X_{n+1}\mid\mathcal F_n]).\]</div>{% endraw %}
<p>For a martingale the right side is {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %}. For a submartingale, monotonicity of {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} gives the same lower bound. Adaptedness and the assumed integrability complete both assertions. Monotonicity in the second assertion is necessary: the deterministic submartingale {% raw %}<span class="math inline">\(X_n=n\)</span>{% endraw %} becomes a decreasing sequence under the convex function {% raw %}<span class="math inline">\(\varphi(x)=-x\)</span>{% endraw %}. ◻</p>
</div>
<p>A stopping time permits the observation time to depend on the path, provided the decision to stop uses only information already available. Let {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} be a random variable taking values in the positive integers together with infinity. We say {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} is a <em>stopping time</em> with respect to {% raw %}<span class="math inline">\(\{\mathcal F_n\}\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) = k\} \in \mathcal F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Equivalently, we can rewrite the condition as {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) \leq k\} \in \mathcal F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<div id="prop:optional-sampling" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong> (Optional Sampling).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be a submartingale with respect to {% raw %}<span class="math inline">\(\mathcal F_1, \dots, \mathcal F_n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\tau_1,\tau_2\)</span>{% endraw %} be stopping times satisfying {% raw %}<span class="math inline">\(1 \leq \tau_1 \leq \tau_2 \leq n\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_{\tau_1}, X_{\tau_2}\)</span>{% endraw %} is a submartingale with respect to {% raw %}<span class="math inline">\(\mathcal F_{\tau_1}, \mathcal F_{\tau_2}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For a bounded stopping time {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[\mathcal F_\tau=\{A\in\mathcal F_n:A\cap\{\tau\leq k\}\in\mathcal F_k\text{ for every }k\leq n\}.\]</div>{% endraw %}
<p>The inclusion {% raw %}<span class="math inline">\(\mathcal F_{\tau_1}\subset\mathcal F_{\tau_2}\)</span>{% endraw %} follows by intersecting with {% raw %}<span class="math inline">\(\{\tau_2\leq k\}\subset\{\tau_1\leq k\}\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(X_\tau\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_\tau\)</span>{% endraw %}-measurable, since its restriction to {% raw %}<span class="math inline">\(\{\tau=j\}\)</span>{% endraw %} is {% raw %}<span class="math inline">\(X_j\)</span>{% endraw %}, and it is integrable because {% raw %}<span class="math inline">\(|X_\tau|\leq\sum_{j=1}^n|X_j|\)</span>{% endraw %}.</p>
<p>Fix {% raw %}<span class="math inline">\(A\in\mathcal F_{\tau_1}\)</span>{% endraw %}. The event {% raw %}<span class="math inline">\(A\cap\{\tau_1\leq k&lt;\tau_2\}\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(\mathcal F_k\)</span>{% endraw %}. Telescoping along each stopped path gives</p>
{% raw %}<div class="math display">\[\mathbb{E}[1_A(X_{\tau_2}-X_{\tau_1})]=\sum_{k=1}^{n-1}\mathbb{E}\left[1_{A\cap\{\tau_1\leq k&lt;\tau_2\}}\mathbb{E}[X_{k+1}-X_k\mid\mathcal F_k]\right]\geq0.\]</div>{% endraw %}
<p>The defining integral characterization of conditional expectation therefore gives {% raw %}<span class="math inline">\(\mathbb{E}[X_{\tau_2}\mid\mathcal F_{\tau_1}]\geq X_{\tau_1}\)</span>{% endraw %} almost surely. For a martingale the displayed expectations are zero, giving equality. ◻</p>
</div>
<div id="thm:kolmogorov-submartingale" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong> (Kolmogorov).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be a submartingale. Then, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb P\left( \max_{1 \leq k \leq n} X_k \geq \varepsilon \right) \leq \frac{\mathbb{E} |X_n|}{\varepsilon} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Partition the crossing event into the disjoint events</p>
{% raw %}<div class="math display">\[A_k=\{X_1&lt;\varepsilon,\ldots,X_{k-1}&lt;\varepsilon,\ X_k\geq\varepsilon\}\in\mathcal F_k.\]</div>{% endraw %}
<p>Repeated conditioning gives {% raw %}<span class="math inline">\(\mathbb{E}[X_n\mid\mathcal F_k]\geq X_k\)</span>{% endraw %}, so</p>
{% raw %}<div class="math display">\[\varepsilon\sum_{k=1}^n\mathbb{P}(A_k)\leq\sum_{k=1}^n\mathbb{E}[X_k1_{A_k}]\leq\sum_{k=1}^n\mathbb{E}[X_n1_{A_k}]=\mathbb{E}[X_n1_{\cup_kA_k}]\leq\mathbb{E}X_n^+\leq\mathbb{E}|X_n|.\]</div>{% endraw %}
<p>Dividing by {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} proves the claim. ◻</p>
</div>
<div id="thm:doob-martingale-cvg-simplest" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11</strong> (Doob; Martingale Convergence).  Let {% raw %}<span class="math inline">\(X_1, X_2, \dots\)</span>{% endraw %} be a submartingale. Suppose {% raw %}<span class="math inline">\(K = \sup_{n \in \mathbb N} \mathbb{E} |X_n| &lt; \infty\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_n \xrightarrow{\rm a.s.} X\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a random variable such that {% raw %}<span class="math inline">\(\mathbb{E}|X| \leq K\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof, using the upcrossing inequality below.</em> For each rational pair {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, monotone convergence and Lemma 12 give</p>
{% raw %}<div class="math display">\[\mathbb{E}\mathscr U_\infty(a,b)=\lim_n\mathbb{E}\mathscr U_n(a,b)\leq\frac{K+|a|}{b-a}&lt;\infty.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\mathscr U_\infty(a,b)&lt;\infty\)</span>{% endraw %} almost surely. Remove the union of the exceptional sets over the countably many rational pairs. If a remaining path had {% raw %}<span class="math inline">\(\liminf X_n&lt;\limsup X_n\)</span>{% endraw %}, a rational interval strictly between these two extended-real limits would be crossed infinitely often. Therefore {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} has an extended-real limit on this event. Fatou gives {% raw %}<span class="math inline">\(\mathbb{E}\liminf_n|X_n|\leq K\)</span>{% endraw %}, which rules out infinite limits with positive probability. Defining the limit arbitrarily on the exceptional null set yields an integrable random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E}|X|\leq K\)</span>{% endraw %}. ◻</p>
</div>
<p>The proof of Doob’s martingale convergence theorem controls repeated crossings between two levels. Fix real numbers {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. Define successive entrance times by</p>

{% raw %}<div class="math display">\[\tau_1=\inf\{j\geq1:X_j\leq a\},\qquad
\tau_{2r}=\inf\{j&gt;\tau_{2r-1}:X_j\geq b\},\qquad
\tau_{2r+1}=\inf\{j&gt;\tau_{2r}:X_j\leq a\}.\]</div>{% endraw %}

<p>The infimum of an empty set is infinity, and every later entrance time is then infinity. These are stopping times: each decision at time {% raw %}<span class="math inline">\(j\)</span>{% endraw %} depends only on the observations through {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. The number of completed upcrossings by time {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr U_n=\sum_{r\geq1}\mathbb1_{\{\tau_{2r}\leq n\}}\)</span>{% endraw %}. It increases with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} consists of values of the process, not observation times.</p>

<p>For an equivalent predictable description, put {% raw %}<span class="math inline">\(U_1=0\)</span>{% endraw %} and, for {% raw %}<span class="math inline">\(k\geq2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(U_k\)</span>{% endraw %} indicate whether the increment from {% raw %}<span class="math inline">\(k-1\)</span>{% endraw %} to {% raw %}<span class="math inline">\(k\)</span>{% endraw %} is taken during an unfinished crossing:</p>

{% raw %}<div class="math display">\[U_k=\begin{cases}
0,&amp;U_{k-1}=0,\ X_{k-1}&gt;a,\quad\text{or }U_{k-1}=1,\ X_{k-1}\geq b,\\
1,&amp;U_{k-1}=0,\ X_{k-1}\leq a,\quad\text{or }U_{k-1}=1,\ X_{k-1}&lt;b.
\end{cases}\]</div>{% endraw %}

<div id="lem:upcrossing-inequality" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong> (Upcrossing Inequality).  The number of upcrossings of a submartingale {% raw %}<span class="math inline">\(\{X_n, \mathcal F_n\}_{n \in \mathbb N}\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\mathscr U_n\)</span>{% endraw %} as above, satisfies </p>

{% raw %}<div class="math display">\[\mathbb{E} \mathscr U_n \leq \frac{\mathbb{E} |X_n| + |a|}{b-a} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p>See the <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}#lem:upcrossing-inequality">proof of the upcrossing inequality</a>. It applies the predictable crossing strategy to the nonnegative submartingale {% raw %}<span class="math inline">\((X_n-a)^+\)</span>{% endraw %}, whose unfinished crossing contributes a nonnegative amount.</p>
</div>

<div id="result-13" class="lemma" data-note-number="13" data-note-kind="Lemma">
<p><strong>Lemma 13</strong>.  Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} be an integrable random variable, and {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %} be arbitrary {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields. Then, the random variables {% raw %}<span class="math inline">\(\mathbb{E}[Z \mid \mathcal F_n]\)</span>{% endraw %} are uniformly integrable.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(W_n=\mathbb{E}[Z\mid\mathcal F_n]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_{n,K}=\{|W_n|&gt;K\}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(M=\mathbb{E}|Z|\)</span>{% endraw %}. Conditional Jensen and Markov give {% raw %}<span class="math inline">\(\mathbb{E}|W_n|\leq M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{P}(A_{n,K})\leq M/K\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(A_{n,K}\in\mathcal F_n\)</span>{% endraw %}, for every {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}[|W_n|1_{A_{n,K}}]\leq\mathbb{E}[|Z|1_{A_{n,K}}]\leq\mathbb{E}[|Z|1_{\{|Z|&gt;R\}}]+\frac{RM}{K}.\]</div>{% endraw %}
<p>The bound is uniform in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. First let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(R\to\infty\)</span>{% endraw %}; integrability of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} makes the last tail expectation tend to zero. This proves uniform integrability without any nesting assumption on the sigma-fields. ◻</p>
</div>
<p>For martingales formed from conditional expectations of one integrable variable, uniform integrability identifies the limiting value. Let {% raw %}<span class="math inline">\(\{\mathcal F_n\}_{n \in \mathbb N}\)</span>{% endraw %} be {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields such that {% raw %}<span class="math inline">\(\mathcal F_1 \subset \mathcal F_2 \subset \cdots\)</span>{% endraw %}. We write {% raw %}<span class="math inline">\(\mathcal F_n \uparrow \mathcal F_\infty\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\bigcup_{n \in \mathbb N} \mathcal F_n\)</span>{% endraw %} generates the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}.</p>

<div id="result-14" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14</strong>.  Suppose {% raw %}<span class="math inline">\(\mathcal F_n \uparrow \mathcal F_\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is an integrable random variable. Then, {% raw %}<span class="math inline">\(\mathbb{E}[Z \mid \mathcal F_n] \to \mathbb{E}[Z \mid \mathcal F_\infty]\)</span>{% endraw %} with probability one.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The sequence {% raw %}<span class="math inline">\(W_n=\mathbb{E}[Z\mid\mathcal F_n]\)</span>{% endraw %} is a martingale with {% raw %}<span class="math inline">\(\sup_n\mathbb{E}|W_n|\leq\mathbb{E}|Z|\)</span>{% endraw %}. Theorem 11 gives an almost-sure limit {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, chosen {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}-measurable. Lemma 13 and almost-sure convergence also give {% raw %}<span class="math inline">\(\mathbb{E}|W_n-W|\to0\)</span>{% endraw %}: clip both variables to {% raw %}<span class="math inline">\([-K,K]\)</span>{% endraw %}, apply dominated convergence to their clipped difference, and control both clipping errors by uniform integrability and Fatou.</p>
<p>For {% raw %}<span class="math inline">\(A\in\mathcal F_m\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(n\geq m\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}[W_n1_A]=\mathbb{E}[Z1_A]\)</span>{% endraw %}. Passing to the limit in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} proves this identity with {% raw %}<span class="math inline">\(W\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %}. The collection of events satisfying {% raw %}<span class="math inline">\(\mathbb{E}[W1_A]=\mathbb{E}[Z1_A]\)</span>{% endraw %} is a Dynkin class, and contains the algebra {% raw %}<span class="math inline">\(\bigcup_m\mathcal F_m\)</span>{% endraw %}. The pi-lambda theorem extends the identity to all of {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. This is precisely the definition of {% raw %}<span class="math inline">\(W=\mathbb{E}[Z\mid\mathcal F_\infty]\)</span>{% endraw %}. The convergence holds both almost surely and in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. ◻</p>
</div>

<h2 id="uniform-integrability-and-stopping">Uniform integrability and stopping</h2>
<p><strong>Proposition 15 (Uniformly integrable martingales).</strong> For an integrable martingale {% raw %}<span class="math inline">\(X=(X_n)_{n\geq1}\)</span>{% endraw %}, the following statements are equivalent: {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is uniformly integrable; {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} converges in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}; and there is {% raw %}<span class="math inline">\(Z\in L^1\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_n=\mathbb E[Z\mid\mathcal F_n]\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. In this case {% raw %}<span class="math inline">\(X_n\to X_\infty\)</span>{% endraw %} almost surely and in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X_\infty=\mathbb E[Z\mid\mathcal F_\infty]\)</span>{% endraw %}.</p>

<p><em>Proof.</em> Uniform integrability implies {% raw %}<span class="math inline">\(\sup_n\mathbb E|X_n|&lt;\infty\)</span>{% endraw %}, so Theorem 11 gives an almost-sure limit. Truncating at a fixed level and then using uniform integrability gives convergence in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, as in Proposition 14. Conversely, if {% raw %}<span class="math inline">\(X_n\to X_\infty\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, then for {% raw %}<span class="math inline">\(m\geq n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb E[X_m\mid\mathcal F_n]=X_n.\]</div>{% endraw %}

<p>The {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} contraction of conditional expectation permits {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(X_n=\mathbb E[X_\infty\mid\mathcal F_n]\)</span>{% endraw %}. Finally, conditional expectations of one integrable variable are uniformly integrable by Lemma 13. Proposition 14 identifies their limit. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>An {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} bound alone does not give {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} convergence. Let {% raw %}<span class="math inline">\((\xi_i)\)</span>{% endraw %} be independent fair signs and set {% raw %}<span class="math inline">\(X_n=2^n\mathbf1_{\{\xi_1=\cdots=\xi_n=1\}}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\mathbb E[X_{n+1}\mid\mathcal F_n]=X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb E X_n=1\)</span>{% endraw %}, but {% raw %}<span class="math inline">\(X_n\to0\)</span>{% endraw %} almost surely. The expectations cannot converge to the expectation of the almost-sure limit.</p>

<p><strong>Proposition 16 (Optional sampling for closed martingales).</strong> Suppose {% raw %}<span class="math inline">\(X_n=\mathbb E[Z\mid\mathcal F_n]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z\in L^1\)</span>{% endraw %}. For a stopping time {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} taking values in {% raw %}<span class="math inline">\(\mathbb N\cup\{\infty\}\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(X_\infty=\mathbb E[Z\mid\mathcal F_\infty]\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{\tau=\infty\}\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[X_\tau=\mathbb E[Z\mid\mathcal F_\tau].\]</div>{% endraw %}

<p>Consequently, if {% raw %}<span class="math inline">\(\sigma\leq\tau\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb E[X_\tau\mid\mathcal F_\sigma]=X_\sigma\)</span>{% endraw %}.</p>

<p><em>Proof.</em> Here {% raw %}<span class="math inline">\(\mathcal F_\tau=\{A\in\mathcal F_\infty:A\cap\{\tau\leq n\}\in\mathcal F_n\text{ for every }n\}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(A\in\mathcal F_\tau\)</span>{% endraw %}, each {% raw %}<span class="math inline">\(A\cap\{\tau=n\}\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A\cap\{\tau=\infty\}\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. Conditional Jensen and countable additivity give</p>

{% raw %}<div class="math display">\[\mathbb E|X_\tau|
\leq\sum_{n\geq1}\mathbb E[|Z|\mathbf1_{\{\tau=n\}}]
+\mathbb E[|Z|\mathbf1_{\{\tau=\infty\}}]
=\mathbb E|Z|.\]</div>{% endraw %}

<p>The same decomposition, without absolute values and with {% raw %}<span class="math inline">\(\mathbf1_A\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(\mathbb E[X_\tau\mathbf1_A]=\mathbb E[Z\mathbf1_A]\)</span>{% endraw %}. The stopped variable is {% raw %}<span class="math inline">\(\mathcal F_\tau\)</span>{% endraw %}-measurable, so this is the asserted conditional expectation. Since {% raw %}<span class="math inline">\(\mathcal F_\sigma\subseteq\mathcal F_\tau\)</span>{% endraw %}, the final identity follows from the tower property. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-12-18-conditioning-and-conditional-expectation %}">Conditioning and Conditional Expectation</a> · Next: <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">Central Limit Theorems and Worked Examples</a></p></nav>

</div>
