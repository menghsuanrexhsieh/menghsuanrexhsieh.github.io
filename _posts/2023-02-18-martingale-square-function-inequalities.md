---
layout: "post"
title: "Martingale Square-Function Inequalities"
date: "2023-02-18"
tags: ["probability theory", "martingales"]
excerpt: "A useful result for proving the theorem to follow is the following inequality."
note_series: "Martingale inequalities"
note_source: "assets/notes/Overleaf Projects (32 items)/Martingales - Prob and Statistics/stats.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M_n,\mathcal F_n)\)</span>{% endraw %} be a discrete-time martingale, {% raw %}<span class="math inline">\(d_n=M_n-M_{n-1}\)</span>{% endraw %} its differences, and {% raw %}<span class="math inline">\(M_n^*=\max_{k\leq n}|M_k|\)</span>{% endraw %} its running maximum. The <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">maximal inequalities</a> give the first comparison between the terminal value and the path maximum.</p>

<div id="square-functions-inequalities" data-note-section="title">

</div>
<p>To measure the accumulated size of a martingale’s increments, we add their squares and take a square root. The inequalities below compare this square function with the terminal value and the running maximum. Set {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_i=X_i-X_{i-1}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S_m=(\sum_{i=1}^mY_i^2)^{1/2}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_m^*=\max_{0\leq i\leq m}|X_i|\)</span>{% endraw %}. Martingales are indexed from zero with respect to {% raw %}<span class="math inline">\((\mathscr F_i)\)</span>{% endraw %}. Nonnegative submartingales can be extended to time zero by setting their initial value to zero.</p>

<div id="lem:stopping-time-sq-diff" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (Stopping time and squared differences). Let {% raw %}<span class="math inline">\(X_0,\ldots,X_n\)</span>{% endraw %} be an integrable martingale or a nonnegative submartingale, with {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\tau=\inf\{1\leq i\leq n:|X_i|&gt;\varepsilon\}\)</span>{% endraw %}, using {% raw %}<span class="math inline">\(\tau=n+1\)</span>{% endraw %} if there is no crossing. Then</p>

</div>
{% raw %}<div class="math display">\[\mathbb{E} S_{\tau-1}^2+\mathbb{E} X_{\tau-1}^2\leq2\varepsilon\mathbb{E}|X_n|.\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Extend the process by {% raw %}<span class="math inline">\(X_{n+1}=X_n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(Y_{n+1}=0\)</span>{% endraw %}. Summation of {% raw %}<span class="math inline">\(X_i^2-X_{i-1}^2=2X_{i-1}Y_i+Y_i^2\)</span>{% endraw %} gives, for every {% raw %}<span class="math inline">\(1\leq m\leq n+1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[S_{m-1}^2+X_{m-1}^2=2X_{m-1}X_m-2\sum_{i=1}^{m}X_{i-1}Y_i.\]</div>{% endraw %}

<p>Substitute {% raw %}<span class="math inline">\(m=\tau\)</span>{% endraw %}. The multiplier {% raw %}<span class="math inline">\(X_{i-1}\mathbb1_{\{\tau\geq i\}}\)</span>{% endraw %} is predictable and bounded in absolute value by {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Hence each summand has expectation zero for a martingale, and nonnegative expectation for a nonnegative submartingale. All products are integrable. Bounded optional sampling for {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %} now gives</p>

{% raw %}<div class="math display">\[\mathbb{E}(S_{\tau-1}^2+X_{\tau-1}^2)
\leq2\mathbb{E}[X_{\tau-1}X_\tau]
\leq2\varepsilon\mathbb{E}|X_\tau|
\leq2\varepsilon\mathbb{E}|X_n|.\]</div>{% endraw %}

<p>The constant extension includes the no-crossing case in the same argument. ◻</p>

</div>

<div id="lem:max-inequality-truncated-submartingale" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong> (Maximal inequality; truncated submartingales). Suppose {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a nonnegative submartingale. For {% raw %}<span class="math inline">\(\theta&gt;0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(M=\max(\theta S_n,X_n^*)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta=\sqrt{1+2\theta^2}\)</span>{% endraw %}. Then, for every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>

</div>
{% raw %}<div class="math display">\[\lambda\mathbb P(M&gt;\beta\lambda)\leq3\mathbb{E}[X_n\mathbb1_{\{M&gt;\lambda\}}].\]</div>{% endraw %}

<p>Consequently, if {% raw %}<span class="math inline">\(1&lt;p&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q=p/(p-1)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\|S_n\|_p\leq9\sqrt p\,q\|X_n\|_p\)</span>{% endraw %}.</p>

<div class="proof">
<p><em>Proof.</em> Since {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %},</p>

<span id="eq:term1"></span>
{% raw %}<div class="math display">\[\lambda\mathbb P(M&gt;\beta\lambda)
\leq\lambda\mathbb P(X_n^*&gt;\lambda)
+\lambda\mathbb P(\theta S_n&gt;\beta\lambda,\ X_n^*\leq\lambda).\tag{1}\]</div>{% endraw %}

<p>The first-crossing proof of Doob’s inequality bounds the first term by {% raw %}<span class="math inline">\(\mathbb{E}[X_n\mathbb1_{\{X_n^*&gt;\lambda\}}]\)</span>{% endraw %}. For the second term, activate the process only after its square function crosses the smaller threshold. Define</p>

{% raw %}<div class="math display">\[\nu=\inf\{1\leq j\leq n:\theta S_j&gt;\lambda\},\qquad
T_m=X_m\mathbb1_{\{\nu\leq m\}},\qquad T_0=0,\quad Z_i=T_i-T_{i-1}.\]</div>{% endraw %}

<p>Again an empty infimum is infinity. This activation uses information available at time {% raw %}<span class="math inline">\(m\)</span>{% endraw %}; it is not multiplication by a terminal event. Nonnegativity gives</p>

{% raw %}<div class="math display">\[\mathbb{E}[T_m\mid\mathscr F_{m-1}]
\geq\mathbb1_{\{\nu\leq m-1\}}\mathbb{E}[X_m\mid\mathscr F_{m-1}]
\geq T_{m-1}.\]</div>{% endraw %}

<p>On {% raw %}<span class="math inline">\(\{\theta S_n&gt;\beta\lambda,\ X_n^*\leq\lambda\}\)</span>{% endraw %}, the crossing time is finite, {% raw %}<span class="math inline">\(\theta^2S_{\nu-1}^2\leq\lambda^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|Y_\nu|\leq\lambda\)</span>{% endraw %} because the process is nonnegative. Also {% raw %}<span class="math inline">\(Z_i=Y_i\)</span>{% endraw %} after {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[\theta^2\sum_{i=\nu+1}^nZ_i^2
&gt;\bigl(\beta^2-1-\theta^2\bigr)\lambda^2
=\theta^2\lambda^2.\]</div>{% endraw %}

<span id="eq:term2"></span>
<p>In particular {% raw %}<span class="math inline">\(\sum_i Z_i^2&gt;\lambda^2\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\max_iT_i\leq\lambda\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} be the first crossing of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, or {% raw %}<span class="math inline">\(n+1\)</span>{% endraw %} if there is none. Markov’s inequality and Lemma 1 yield</p>

{% raw %}<div class="math display">\[\lambda\mathbb P\left(\sum_i Z_i^2&gt;\lambda^2,\ \max_iT_i\leq\lambda\right)
\leq\lambda^{-1}\mathbb{E}\sum_{i&lt;\rho}Z_i^2
\leq2\mathbb{E} T_n
\leq2\mathbb{E}[X_n\mathbb1_{\{M&gt;\lambda\}}].\]</div>{% endraw %}

<p>Adding the two estimates proves the tail bound. Suppose first that {% raw %}<span class="math inline">\(X_n\in L^p\)</span>{% endraw %}. The nonnegative submartingale inequality and conditional Jensen give {% raw %}<span class="math inline">\(X_i^p\leq(\mathbb E(X_n\mid\mathscr F_i))^p\leq\mathbb E(X_n^p\mid\mathscr F_i)\)</span>{% endraw %}. Therefore each {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, and hence the finite sums defining {% raw %}<span class="math inline">\(S_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, has a finite {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-th moment. Tonelli and the substitution {% raw %}<span class="math inline">\(t=\beta\lambda\)</span>{% endraw %} now give the full integration step:</p>
{% raw %}<div class="math display">\[\begin{aligned}
\mathbb EM^p
&amp;=p\beta^p\int_0^\infty\lambda^{p-1}\mathbb P(M&gt;\beta\lambda)\,d\lambda\\
&amp;\leq3p\beta^p\int_0^\infty\lambda^{p-2}\mathbb E(X_n\mathbf1_{\{M&gt;\lambda\}})\,d\lambda\\
&amp;=3p\beta^p\mathbb E\left(X_n\int_0^M\lambda^{p-2}\,d\lambda\right)
=3q\beta^p\mathbb E(X_nM^{p-1}).
\end{aligned}\]</div>{% endraw %}
<p>The integral at zero is finite because {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}. Hölder therefore yields</p>


{% raw %}<div class="math display">\[\mathbb{E} M^p\leq3q\beta^p\mathbb{E}[X_nM^{p-1}]
\leq3q\beta^p\|X_n\|_p\|M\|_p^{p-1}.\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(\theta\|S_n\|_p\leq\|M\|_p\leq3q\beta^p\|X_n\|_p\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(\theta=p^{-1/2}\)</span>{% endraw %}; then {% raw %}<span class="math inline">\(\beta^p=(1+2/p)^{p/2}&lt;e&lt;3\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\|X_n\|_p=\infty\)</span>{% endraw %}, the asserted upper bound is automatic. ◻</p>

</div>

<p>A good-lambda inequality compares a large excursion of one variable with a smaller excursion of another. Integrating the tail estimate gives a comparison of moments.</p>

<div id="lem:moment-comparison-bounds" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong> (Good lambda inequality). Let {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} be nonnegative random variables. Suppose constants {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} satisfy, for every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>

</div>
<span id="eq:moment-comparison-hypothesis"></span>
{% raw %}<div class="math display">\[\mathbb P(X&gt;\beta\lambda,Y\leq\delta\lambda)\leq\varepsilon\mathbb P(X&gt;\lambda).\tag{2}\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon\beta^p&lt;1\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\mathbb{E} X^p\leq\frac{\beta^p\delta^{-p}}{1-\varepsilon\beta^p}\mathbb{E} Y^p.\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Split according to whether {% raw %}<span class="math inline">\(Y\leq\delta\lambda\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(\mathbb P(X&gt;\beta\lambda)\leq\varepsilon\mathbb P(X&gt;\lambda)+\mathbb P(Y&gt;\delta\lambda)\)</span>{% endraw %}. Integrating only up to {% raw %}<span class="math inline">\(R\)</span>{% endraw %} avoids assuming the conclusion’s finiteness:</p>

{% raw %}<div class="math display">\[\mathbb{E}(X\wedge\beta R)^p
\leq\varepsilon\beta^p\mathbb{E}(X\wedge R)^p
+\beta^p\delta^{-p}\mathbb{E}(Y\wedge\delta R)^p.\]</div>{% endraw %}

<p>The first truncated moment on the right is at most the one on the left. Absorb it and let {% raw %}<span class="math inline">\(R\uparrow\infty\)</span>{% endraw %} by monotone convergence. This proves the estimate in <a href="#ref-bass_probabilistic_1995">Bass (1995)</a> directly. ◻</p>

</div>

<div id="thm:burckholder" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Burkholder). For a martingale {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1&lt;p&lt;\infty\)</span>{% endraw %}, there are positive constants depending only on {% raw %}<span class="math inline">\(p\)</span>{% endraw %} such that</p>

</div>
{% raw %}<div class="math display">\[C_1(p)\mathbb{E} S_n^p\leq\mathbb{E}|X_n|^p\leq C_2(p)\mathbb{E} S_n^p.\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(X_n^+=\max(X_n,0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_n^-=\max(-X_n,0)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(1\leq i\leq n\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(T_i=\mathbb{E}[X_n^+\mid\mathscr F_i]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U_i=\mathbb{E}[X_n^-\mid\mathscr F_i]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(T_0=U_0=0\)</span>{% endraw %}. These are nonnegative submartingales, and their differences {% raw %}<span class="math inline">\(W_i=T_i-T_{i-1}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z_i=U_i-U_{i-1}\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(Y_i=W_i-Z_i\)</span>{% endraw %}. Minkowski’s inequality and Lemma 2 give</p>

{% raw %}<div class="math display">\[\|S_n\|_p\leq\left\|\Bigl(\sum_iW_i^2\Bigr)^{1/2}\right\|_p+
\left\|\Bigl(\sum_iZ_i^2\Bigr)^{1/2}\right\|_p
\leq18\sqrt p\,q\|X_n\|_p.\]</div>{% endraw %}

<p>For the reverse bound, assume {% raw %}<span class="math inline">\(0&lt;\|X_n\|_p&lt;\infty\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(R_n=\operatorname{sgn}(X_n)|X_n|^{p-1}/\|X_n\|_p^{p-1}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\|R_n\|_q=1\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(R_i=\mathbb{E}[R_n\mid\mathscr F_i]\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i\geq1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R_0=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(D_i=R_i-R_{i-1}\)</span>{% endraw %}. Products involving differences from distinct time steps have zero expectation by conditioning just before the later difference. Thus</p>

{% raw %}<div class="math display">\[\|X_n\|_p=\mathbb{E}[R_nX_n]=\mathbb{E}\sum_iD_iY_i
\leq\left\|\Bigl(\sum_iD_i^2\Bigr)^{1/2}\right\|_q\|S_n\|_p
\leq18\sqrt q\,p\|S_n\|_p.\]</div>{% endraw %}

<p>For the orthogonality identity, expand {% raw %}<span class="math inline">\(R_nX_n=\sum_{i,j}D_iY_j\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(i&lt;j\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(D_i\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_{j-1}\)</span>{% endraw %}-measurable and {% raw %}<span class="math inline">\(\mathbb E(Y_j\mid\mathscr F_{j-1})=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\mathbb E(D_iY_j)=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(i&gt;j\)</span>{% endraw %}, condition instead on {% raw %}<span class="math inline">\(\mathscr F_{i-1}\)</span>{% endraw %}, using {% raw %}<span class="math inline">\(\mathbb E(D_i\mid\mathscr F_{i-1})=0\)</span>{% endraw %}. These products are integrable by Hölder. The first increment {% raw %}<span class="math inline">\(D_1\)</span>{% endraw %} need not have conditional mean zero at time zero; no off-diagonal term conditions on that increment, so the argument remains valid.</p>
<p>The lower estimate just proved also applies to a sequence started at index one with a possibly nonzero mean; its proof used only the nonnegative conditional-expectation submartingales. This justifies its use for {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. Zero norms are immediate. If {% raw %}<span class="math inline">\(S_n\in L^p\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|X_n|\leq\sqrt n S_n\)</span>{% endraw %}, so the finiteness assumption needed for duality holds; otherwise the upper bound is automatic. We may take {% raw %}<span class="math inline">\(C_1=(18\sqrt p\,q)^{-p}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C_2=(18\sqrt q\,p)^p\)</span>{% endraw %}. ◻</p>

</div>

<div id="thm:martingale-maximal-inequality" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong> (Maximal inequality; martingales). Let {% raw %}<span class="math inline">\(X_0=0,X_1,\ldots,X_n\)</span>{% endraw %} be an integrable martingale. For each {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %} there is {% raw %}<span class="math inline">\(C_p&lt;\infty\)</span>{% endraw %} such that</p>

</div>
{% raw %}<div class="math display">\[\mathbb{E}(X_n^*)^p\leq C_p\left[\mathbb{E}\max_{1\leq i\leq n}|Y_i|^p+
\mathbb{E}\left(\sum_{i=1}^n\mathbb{E}[Y_i^2\mid\mathscr F_{i-1}]\right)^{p/2}\right].\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(v_i=\mathbb{E}[Y_i^2\mid\mathscr F_{i-1}]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_k=\sum_{i=1}^kv_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_k=\max_{i\leq k}|Y_i|\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Q=\max(\sqrt{V_n},J_n)\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;\delta&lt;\beta-1\)</span>{% endraw %}. Define predictable indicators and a martingale transform by</p>

{% raw %}<div class="math display">\[I_k=\mathbb1_{\{\lambda&lt;X_{k-1}^*\leq\beta\lambda,\ J_{k-1}\leq\delta\lambda,\ V_k\leq\delta^2\lambda^2\}},
\qquad T_i=\sum_{k=1}^i I_kY_k.\]</div>{% endraw %}

<p>On {% raw %}<span class="math inline">\(\{X_n^*&gt;\beta\lambda,Q\leq\delta\lambda\}\)</span>{% endraw %}, take the first crossing of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, then the first crossing of {% raw %}<span class="math inline">\(\beta\lambda\)</span>{% endraw %}. The first value has absolute value at most {% raw %}<span class="math inline">\((1+\delta)\lambda\)</span>{% endraw %}. All increments between these crossings are retained in {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(T^*_n&gt;(\beta-1-\delta)\lambda\)</span>{% endraw %}. Orthogonality of martingale differences gives</p>

{% raw %}<div class="math display">\[\mathbb{E} T_n^2=\mathbb{E}\sum_{k=1}^n I_kv_k
\leq\delta^2\lambda^2\mathbb P(X_n^*&gt;\lambda).\]</div>{% endraw %}

<p>The conditional second moments {% raw %}<span class="math inline">\(v_k\)</span>{% endraw %} may take the value infinity. On the predictable set where {% raw %}<span class="math inline">\(I_k=1\)</span>{% endraw %}, however, {% raw %}<span class="math inline">\(V_k\leq\delta^2\lambda^2\)</span>{% endraw %}, so every retained {% raw %}<span class="math inline">\(v_k\)</span>{% endraw %} is finite and their sum is at most {% raw %}<span class="math inline">\(\delta^2\lambda^2\)</span>{% endraw %}. The product {% raw %}<span class="math inline">\(I_kv_k\)</span>{% endraw %} means {% raw %}<span class="math inline">\(v_k\)</span>{% endraw %} on that set and zero elsewhere. Hence the transform is square-integrable even when {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is not. No increment is retained unless {% raw %}<span class="math inline">\(X_n^*&gt;\lambda\)</span>{% endraw %}, which proves the displayed bound. Applying the weak maximal inequality to {% raw %}<span class="math inline">\(T_i^2\)</span>{% endraw %} yields</p>

{% raw %}<div class="math display">\[\mathbb P(X_n^*&gt;\beta\lambda,Q\leq\delta\lambda)
\leq\frac{\delta^2}{(\beta-1-\delta)^2}\mathbb P(X_n^*&gt;\lambda).\]</div>{% endraw %}

<p>Choose {% raw %}<span class="math inline">\(\beta=2\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} small enough for Lemma 3. Since {% raw %}<span class="math inline">\(Q^p\leq V_n^{p/2}+J_n^p\)</span>{% endraw %}, the result follows. ◻</p>

</div>

<div id="thm:rosenthal" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong> (Rosenthal). For {% raw %}<span class="math inline">\(2\leq p&lt;\infty\)</span>{% endraw %}, a martingale with {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_n\in L^p\)</span>{% endraw %} satisfies</p>

</div>
{% raw %}<div class="math display">\[C_1(p)\left[\sum_{i=1}^n\mathbb{E}|Y_i|^p+\mathbb{E} V_n^{p/2}\right]
\leq\mathbb{E}|X_n|^p
\leq C_2(p)\left[\sum_{i=1}^n\mathbb{E}|Y_i|^p+\mathbb{E} V_n^{p/2}\right].\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> The upper bound follows from Theorem 5 and {% raw %}<span class="math inline">\(\max_i|Y_i|^p\leq\sum_i|Y_i|^p\)</span>{% endraw %}. For the lower bound, put {% raw %}<span class="math inline">\(r=p/2\geq1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_k=V_k\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(B=\sum_iY_i^2\)</span>{% endraw %}. The deterministic inequality for successive increments of an increasing sequence gives</p>

{% raw %}<div class="math display">\[A_n^r\leq r\sum_{i=1}^n A_i^{r-1}(A_i-A_{i-1}).\]</div>{% endraw %}

<p>The deterministic bound follows by applying the fundamental theorem of calculus to each nonnegative increment:</p>
{% raw %}<div class="math display">\[A_i^r-A_{i-1}^r=\int_{A_{i-1}}^{A_i}r t^{r-1}\,dt
\leq r A_i^{r-1}(A_i-A_{i-1}),\]</div>{% endraw %}
<p>then summing. For {% raw %}<span class="math inline">\(r=1\)</span>{% endraw %}, the derivative is identically one, including at zero.</p>
<p>Because {% raw %}<span class="math inline">\(A_i\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_{i-1}\)</span>{% endraw %}-measurable, conditioning replaces {% raw %}<span class="math inline">\(A_i-A_{i-1}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(Y_i^2\)</span>{% endraw %} in expectation. For {% raw %}<span class="math inline">\(r&gt;1\)</span>{% endraw %}, Hölder’s inequality then gives</p>

{% raw %}<div class="math display">\[\mathbb{E} A_n^r\leq r\mathbb{E}[A_n^{r-1}B]
\leq r\|A_n\|_r^{r-1}\|B\|_r,
\qquad \|A_n\|_r\leq r\|B\|_r.\]</div>{% endraw %}

<p>All these moments are finite by conditional Jensen and the finite number of summands. For {% raw %}<span class="math inline">\(r=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E} A_n=\mathbb{E} B\)</span>{% endraw %} directly. Finally {% raw %}<span class="math inline">\(\sum_i|Y_i|^p\leq S_n^p\)</span>{% endraw %}, and Theorem 4 controls {% raw %}<span class="math inline">\(\mathbb{E} S_n^p\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\mathbb{E}|X_n|^p\)</span>{% endraw %}. Combining these bounds proves the lower estimate. ◻</p>

</div>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_probabilistic_1995" class="csl-entry" role="listitem">
Bass, Richard F. 1995. <em>Probabilistic Techniques in Analysis</em>. Probability and Its Applications. New York: Springer-Verlag.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">Martingales: Maximal and Upcrossing Inequalities</a></p></nav>

</div>
