---
layout: "post"
title: "Martingales: Maximal and Upcrossing Inequalities"
date: "2023-01-07"
tags: ["probability theory", "martingales"]
excerpt: "First-crossing, upcrossing, and maximal inequalities for discrete and continuous martingales."
note_series: "Martingale inequalities"
note_source: "assets/notes/Overleaf Projects (32 items)/Martingales - Prob and Statistics/stats.tex"
---

<div class="note-content" markdown="0">

<p>We prove maximal and upcrossing inequalities for discrete-time submartingales. The maximal inequalities control the running maximum in probability and in {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %}; the upcrossing inequality yields almost-sure convergence under an {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} bound. Throughout, {% raw %}<span class="math inline">\((\mathcal F_n)_{n\geq1}\)</span>{% endraw %} is a filtration on {% raw %}<span class="math inline">\((\Omega,\mathcal F,\mathbb P)\)</span>{% endraw %}, and all martingales and submartingales are adapted and integrable.</p>


<div id="fundamental-results" data-note-section="title">

</div>
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
<p>The conditional mean in the branching example can be checked without treating the random upper summation limit as deterministic. Nonnegativity permits conditional monotone convergence:</p>
{% raw %}<div class="math display">\[\mathbb E(Z_{n+1}\mid\mathcal F_n)
=\sum_{k\geq1}\mathbf1_{\{Z_n\geq k\}}\mathbb E(N_{n+1,k}\mid\mathcal F_n)
=m\sum_{k\geq1}\mathbf1_{\{Z_n\geq k\}}=mZ_n.\]</div>{% endraw %}
<p>The entire next row is independent of {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}. Starting with {% raw %}<span class="math inline">\(Z_0=1\)</span>{% endraw %}, induction gives {% raw %}<span class="math inline">\(\mathbb EZ_n=m^n&lt;\infty\)</span>{% endraw %}, so the normalized variables satisfy all parts of the martingale definition.</p>
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
{% raw %}<div class="math display">\[\mathbb E(\varphi(X_{n+1})\mid\mathcal F_n)
\geq\varphi\bigl(\mathbb E(X_{n+1}\mid\mathcal F_n)\bigr).\]</div>{% endraw %}
<p>For a martingale the conditional mean inside {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}, proving the first assertion. For a submartingale it is at least {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}; the additional monotonicity assumption then gives the same lower bound {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %}. Convex real functions are continuous, hence Borel, so adaptedness is preserved; integrability is assumed in both statements. Without monotonicity, the second implication can fail: take {% raw %}<span class="math inline">\(X_n=n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varphi(x)=-x\)</span>{% endraw %}. ◻</p>
</div>
<p>To control a path, we often stop it the first time it enters a specified set. The stopping rule must use only information available at that time. Let {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} be a random variable taking values in the positive integers together with infinity. We say {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} is a <em>stopping time</em> with respect to {% raw %}<span class="math inline">\(\{\mathcal F_n\}\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) = k\} \in \mathcal F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Equivalently, we can rewrite the condition as {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) \leq k\} \in \mathcal F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<div id="prop:optional-sampling" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong> (Optional Sampling).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be a submartingale with respect to {% raw %}<span class="math inline">\(\mathcal F_1, \dots, \mathcal F_n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\tau_1,\tau_2\)</span>{% endraw %} be stopping times satisfying {% raw %}<span class="math inline">\(1 \leq \tau_1 \leq \tau_2 \leq n\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_{\tau_1}, X_{\tau_2}\)</span>{% endraw %} is a submartingale with respect to {% raw %}<span class="math inline">\(\mathcal F_{\tau_1}, \mathcal F_{\tau_2}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p>The <a href="{% post_url 2022-01-26-martingales %}#prop:optional-sampling">proof of bounded optional sampling</a> establishes the stopped-field inclusion, integrability, and the conditional inequality by a finite telescoping sum.</p>
</div>

<div id="thm:kolmogorov-submartingale" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong> (Kolmogorov).  Let {% raw %}<span class="math inline">\(\{(X_i,\mathcal F_i)\}_{1 \leq i \leq n}\)</span>{% endraw %} be a submartingale. Then, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb P\left( \max_{1 \leq k \leq n} X_k \geq \varepsilon \right) \leq \frac{\mathbb{E} |X_n|}{\varepsilon} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Partition the crossing event according to its first crossing time:</p>


{% raw %}<div class="math display">\[\begin{aligned}
        E = \left\{ \max_{1 \leq i \leq n} X_i \geq \varepsilon \right\} = \bigcup_{1 \leq i \leq n} \left\{ X_i \geq \varepsilon ~,~ \max_{1 \leq j &lt; i} X_j &lt; \varepsilon \right\} ~,
    
\end{aligned}\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(E_i=\{X_i\geq\varepsilon,\ X_j&lt;\varepsilon\text{ for }j&lt;i\}\)</span>{% endraw %}, with the condition on earlier indices empty for {% raw %}<span class="math inline">\(i=1\)</span>{% endraw %}. The events {% raw %}<span class="math inline">\(E_i\)</span>{% endraw %} are disjoint and belong to {% raw %}<span class="math inline">\(\mathcal F_i\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\mathbb E[X_n\mid\mathcal F_i]\geq X_i\)</span>{% endraw %},</p>


{% raw %}<div class="math display">\[\begin{aligned}
        \varepsilon \mathbb P\left( \max_{1 \leq k \leq n} X_k \geq \varepsilon \right) &amp;\leq \sum_{1 \leq i \leq n} \mathbb{E} [X_i \mathbb 1 \{E_i\}] \leq \sum_{1 \leq i \leq n} \mathbb{E} [\mathbb{E}[X_n \mid \mathcal F_i] \mathbb 1 \{E_i\}] \\
        &amp;= \sum_{1 \leq i \leq n} \mathbb{E} [\mathbb{E}[X_n \mathbb 1 \{E_i\} \mid \mathcal F_i]] \\
        &amp;= \sum_{1 \leq i \leq n} \mathbb{E} [X_n \mathbb 1\{E_i\}] = \mathbb{E} [X_n \mathbb 1 \{E\}] \leq \mathbb{E}|X_n| ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which proves the bound. ◻</p>

</div>
<div id="thm:doob-martingale-cvg-simplest" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11</strong> (Doob; Martingale Convergence).  Let {% raw %}<span class="math inline">\(X_1, X_2, \dots\)</span>{% endraw %} be a submartingale. Suppose {% raw %}<span class="math inline">\(K = \sup_{n \in \mathbb N} \mathbb{E} |X_n| &lt; \infty\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_n \xrightarrow{\rm a.s.} X\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a random variable such that {% raw %}<span class="math inline">\(\mathbb{E}|X| \leq K\)</span>{% endraw %}.</p>

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
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(Y_k=(X_k-a)^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c=b-a\)</span>{% endraw %}. Convexity and monotonicity show that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is a nonnegative submartingale; this is the second part of <a href="#prop:convex-function-martingale-submartingale">Proposition 8</a>. The same entrance times describe crossings of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} from zero to at least {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. The gain</p>

{% raw %}<div class="math display">\[G_n=\sum_{k=2}^n U_k(Y_k-Y_{k-1})\]</div>{% endraw %}

<p>is at least {% raw %}<span class="math inline">\(c\mathscr U_n\)</span>{% endraw %} on every path. Each completed holding interval begins at zero and ends at a value at least {% raw %}<span class="math inline">\(c\)</span>{% endraw %}; any unfinished interval also has nonnegative gain. Also, {% raw %}<span class="math inline">\(U_k\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_{k-1}\)</span>{% endraw %}-measurable, so the submartingale property gives</p>

{% raw %}<div class="math display">\[\mathbb{E}\sum_{k=2}^n(1-U_k)(Y_k-Y_{k-1})\geq0.
\qquad
\mathbb{E} G_n\leq\mathbb{E}(Y_n-Y_1)\leq\mathbb{E} Y_n.\]</div>{% endraw %}

<p>Consequently {% raw %}<span class="math inline">\((b-a)\mathbb{E}\mathscr U_n\leq\mathbb{E}(X_n-a)^+\leq\mathbb{E}|X_n|+|a|\)</span>{% endraw %}, which proves the bound. ◻</p>

</div>
<div class="proof">
<p><em>Proof of <a href="#thm:doob-martingale-cvg-simplest">Theorem 11</a>.</em> For each rational pair {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, monotone convergence and the upcrossing bound give {% raw %}<span class="math inline">\(\mathbb{E}\mathscr U_\infty(a,b)\leq(K+|a|)/(b-a)&lt;\infty\)</span>{% endraw %}. Thus there are only finitely many such upcrossings almost surely. Take the intersection of these probability-one events over the countably many rational pairs. On that event the lower and upper limits of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} agree; otherwise two rational numbers strictly between them would be crossed infinitely often. Hence the limit exists in the extended real line. Fatou’s lemma gives {% raw %}<span class="math inline">\(\mathbb{E}\liminf_n|X_n|\leq K\)</span>{% endraw %}, so the limit is finite almost surely and has expected absolute value at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. ◻</p>

</div>

<h2 id="doob-lp-maximal-inequality">The {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} maximal inequality</h2>
<p><strong>Theorem 13 (Doob).</strong> Let {% raw %}<span class="math inline">\(Y_1,\ldots,Y_n\)</span>{% endraw %} be a nonnegative submartingale, let {% raw %}<span class="math inline">\(Y_n^*=\max_{1\leq j\leq n}Y_j\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Y_n\in L^p\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\|Y_n^*\|_p\leq\frac{p}{p-1}\|Y_n\|_p.\]</div>{% endraw %}

<p>For a martingale {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, apply this result to {% raw %}<span class="math inline">\(Y_j=|X_j|\)</span>{% endraw %}.</p>

<p><em>Proof.</em> The first-crossing argument in Theorem 10 retains the terminal value on the crossing event and gives</p>

{% raw %}<div class="math display">\[\lambda\,\mathbb P(Y_n^*&gt;\lambda)
\leq\mathbb E[Y_n\mathbf1_{\{Y_n^*&gt;\lambda\}}].\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %}, multiply by {% raw %}<span class="math inline">\(p\lambda^{p-2}\)</span>{% endraw %}, integrate over {% raw %}<span class="math inline">\((0,R)\)</span>{% endraw %}, and use Tonelli:</p>

{% raw %}<div class="math display">\[\mathbb E(Y_n^*\wedge R)^p
\leq\frac{p}{p-1}\mathbb E[Y_n(Y_n^*\wedge R)^{p-1}]
\leq\frac{p}{p-1}\|Y_n\|_p\|Y_n^*\wedge R\|_p^{p-1}.\]</div>{% endraw %}

<p>If the truncated norm is positive, divide by its {% raw %}<span class="math inline">\((p-1)\)</span>{% endraw %}-st power; if it is zero, the desired bound already holds. Monotone convergence as {% raw %}<span class="math inline">\(R\uparrow\infty\)</span>{% endraw %} proves the theorem. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p><strong>Corollary 14 (Continuous time).</strong> Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a continuous martingale on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %} is deterministic, and suppose {% raw %}<span class="math inline">\(X_T\in L^p\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[\mathbb E\sup_{0\leq t\leq T}|X_t|^p
\leq\left(\frac{p}{p-1}\right)^p\mathbb E|X_T|^p.\]</div>{% endraw %}

<p>Indeed, apply Theorem 13 to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on nested finite grids containing {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and having dense union. Continuity and monotone convergence identify the limit of the grid maxima. The same approximation gives the weak maximal inequality for a continuous nonnegative submartingale.</p>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}">Martingale Square-Function Inequalities</a></p></nav>

</div>
