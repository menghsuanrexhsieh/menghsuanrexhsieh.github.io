---
layout: "post"
title: "Burkholder-Davis-Gundy inequalities"
date: "2024-02-18"
tags: ["probability theory", "stochastic processes"]
excerpt: "Burkholder-Davis-Gundy inequalities. Notes on stochastic processes."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="burckholder-davis-gundy-inequalities" data-note-section="title">

</div>
<p>The Burkholder–Davis–Gundy inequalities compare the size of a continuous local martingale path with its quadratic variation.</p>

<div id="thm:continuous-bdg-p-ge-2" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Let {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M_t^*=\sup_{s\leq t}|M_s|\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A_t=\langle M\rangle_t\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(2\leq p&lt;\infty\)</span>{% endraw %} and every finite stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, we will prove</p>

{% raw %}<div class="math display">\[\mathbb{E}(M_T^*)^p\leq c_p\mathbb{E} A_T^{p/2},
\qquad \mathbb{E} A_T^{p/2}\leq C_p\mathbb{E}(M_T^*)^p.\]</div>{% endraw %}
</div>

<p>First stop at {% raw %}<span class="math inline">\(\tau_K=\inf\{t\geq0:M_t^*+A_t\geq K\}\wedge K\)</span>{% endraw %}. Continuity makes both the stopped maximum and bracket bounded, so every stochastic integral below is a true square-integrable martingale. Write {% raw %}<span class="math inline">\(S=T\wedge\tau_K\)</span>{% endraw %}. Doob’s inequality and Itō’s formula give</p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb{E}(M_S^*)^p&amp;\leq\left(\frac p{p-1}\right)^p\mathbb{E}|M_S|^p,\\
|M_S|^p&amp;=p\int_0^S |M_s|^{p-1}\operatorname{sgn}(M_s)\,\mathrm dM_s
+\frac{p(p-1)}2\int_0^S|M_s|^{p-2}\,\mathrm dA_s.
\end{aligned}\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(p=2\)</span>{% endraw %}, the last integrand is one. Taking expectations and applying Hölder when {% raw %}<span class="math inline">\(p&gt;2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb{E}(M_S^*)^p\leq c_p\mathbb{E}[(M_S^*)^{p-2}A_S]
\leq c_p\bigl(\mathbb{E}(M_S^*)^p\bigr)^{(p-2)/p}
\bigl(\mathbb{E} A_S^{p/2}\bigr)^{2/p}.\]</div>{% endraw %}

<p>If the maximum has zero moment, the claim is immediate; otherwise divide and raise to the power {% raw %}<span class="math inline">\(p/2\)</span>{% endraw %}. The same result follows directly from the preceding identity at {% raw %}<span class="math inline">\(p=2\)</span>{% endraw %}. This proves the first estimate uniformly in {% raw %}<span class="math inline">\(K\)</span>{% endraw %}.</p>

<p>For the reverse estimate put {% raw %}<span class="math inline">\(r=p/2\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(r=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E} A_S=\mathbb{E} M_S^2\leq\mathbb{E}(M_S^*)^2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(r&gt;1\)</span>{% endraw %}, integrate the identity {% raw %}<span class="math inline">\(\mathrm d(M^2)=2M\,\mathrm dM+\mathrm dA\)</span>{% endraw %} against the adapted finite-variation process {% raw %}<span class="math inline">\(A^{r-1}\)</span>{% endraw %}. Its stochastic-integral term has mean zero, and integration by parts gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb{E} A_S^r
&amp;=r\mathbb{E}\int_0^S A_s^{r-1}\,\mathrm d(M_s^2)\\
&amp;=r\mathbb{E}\left[A_S^{r-1}M_S^2-\int_0^S M_s^2\,\mathrm d(A_s^{r-1})\right]\\
&amp;\leq r\mathbb{E}[A_S^{r-1}(M_S^*)^2]\\
&amp;\leq r\bigl(\mathbb{E} A_S^r\bigr)^{(r-1)/r}
\bigl(\mathbb{E}(M_S^*)^{2r}\bigr)^{1/r}.
\end{aligned}\]</div>{% endraw %}

<p>Division yields {% raw %}<span class="math inline">\(\mathbb{E} A_S^r\leq r^r\mathbb{E}(M_S^*)^{2r}\)</span>{% endraw %}, also covering the zero case. Finally {% raw %}<span class="math inline">\(\tau_K\uparrow\infty\)</span>{% endraw %} almost surely, and both stopped maxima and stopped brackets increase to their values at {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Monotone convergence gives both estimates without any boundedness assumption. No limit in the fixed stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is needed.</p>

<p>The following discrete estimates explain a complementary method based on tail comparisons. They are proved in full below, using the stopped square-sum estimate in <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}#lem:stopping-time-sq-diff">Lemma 1 of the square-function notes</a>. In this discrete discussion set {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_i=X_i-X_{i-1}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S_m=(\sum_{i=1}^mY_i^2)^{1/2}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_m^*=\max_{i\leq m}|X_i|\)</span>{% endraw %}.</p>

<div id="lem:max-inequality-truncated-submartingale" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong> (Maximal inequality; truncated submartingales). Suppose {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a nonnegative submartingale. For {% raw %}<span class="math inline">\(\theta&gt;0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(M=\max(\theta S_n,X_n^*)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta=\sqrt{1+2\theta^2}\)</span>{% endraw %}. Then, for every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>

</div>
{% raw %}<div class="math display">\[\lambda\mathbb P(M&gt;\beta\lambda)\leq3\mathbb{E}[X_n\mathbb1_{\{M&gt;\lambda\}}].\]</div>{% endraw %}

<span id="eq:maximal-inequality-truncated-submartingale"></span>
<p>Consequently, if {% raw %}<span class="math inline">\(1&lt;p&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q=p/(p-1)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\|S_n\|_p\leq9\sqrt p\,q\|X_n\|_p.\tag{1}\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Since {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %},</p>

<span id="eq:term1"></span>
{% raw %}<div class="math display">\[\lambda\mathbb P(M&gt;\beta\lambda)
\leq\lambda\mathbb P(X_n^*&gt;\lambda)
+\lambda\mathbb P(\theta S_n&gt;\beta\lambda,\ X_n^*\leq\lambda).\tag{2}\]</div>{% endraw %}

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

<p>Adding the two estimates proves the tail bound. Integrate it against {% raw %}<span class="math inline">\(p\lambda^{p-2}\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(X_n\in L^p\)</span>{% endraw %}, every {% raw %}<span class="math inline">\(X_i\in L^p\)</span>{% endraw %} by conditional Jensen, so all moments below are finite:</p>

{% raw %}<div class="math display">\[\mathbb{E} M^p\leq3q\beta^p\mathbb{E}[X_nM^{p-1}]
\leq3q\beta^p\|X_n\|_p\|M\|_p^{p-1}.\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(\theta\|S_n\|_p\leq\|M\|_p\leq3q\beta^p\|X_n\|_p\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(\theta=p^{-1/2}\)</span>{% endraw %}; then {% raw %}<span class="math inline">\(\beta^p=(1+2/p)^{p/2}&lt;e&lt;3\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\|X_n\|_p=\infty\)</span>{% endraw %}, the asserted upper bound is automatic. ◻</p>

</div>

<p>A good-lambda inequality compares a large excursion of one variable with a smaller excursion of another. Integrating the tail estimate gives a comparison of moments.</p>

<div id="lem:moment-comparison-bounds" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong> (Good lambda inequality). Let {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} be nonnegative random variables. Suppose constants {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} satisfy, for every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>

</div>
<span id="eq:moment-comparison-hypothesis"></span>
{% raw %}<div class="math display">\[\mathbb P(X&gt;\beta\lambda,Y\leq\delta\lambda)\leq\varepsilon\mathbb P(X&gt;\lambda).\tag{3}\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon\beta^p&lt;1\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\mathbb{E} X^p\leq\frac{\beta^p\delta^{-p}}{1-\varepsilon\beta^p}\mathbb{E} Y^p.\]</div>{% endraw %}

<div class="proof">
<p><em>Proof.</em> Split according to whether {% raw %}<span class="math inline">\(Y\leq\delta\lambda\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(\mathbb P(X&gt;\beta\lambda)\leq\varepsilon\mathbb P(X&gt;\lambda)+\mathbb P(Y&gt;\delta\lambda)\)</span>{% endraw %}. Integrating only up to {% raw %}<span class="math inline">\(R\)</span>{% endraw %} avoids assuming the conclusion’s finiteness:</p>

{% raw %}<div class="math display">\[\mathbb{E}(X\wedge\beta R)^p
\leq\varepsilon\beta^p\mathbb{E}(X\wedge R)^p
+\beta^p\delta^{-p}\mathbb{E}(Y\wedge\delta R)^p.\]</div>{% endraw %}

<p>The first truncated moment on the right is at most the one on the left. Absorb it and let {% raw %}<span class="math inline">\(R\uparrow\infty\)</span>{% endraw %} by monotone convergence. This proves the estimate in <a href="#ref-bass_probabilistic_1995">Bass (1995), Lemma 6.9</a> directly. ◻</p>

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

<p>The lower estimate just proved also applies to a sequence started at index one with a possibly nonzero mean; its proof used only the nonnegative conditional-expectation submartingales. This justifies its use for {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. Zero norms are immediate. If {% raw %}<span class="math inline">\(S_n\in L^p\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|X_n|\leq\sqrt n S_n\)</span>{% endraw %}, so the finiteness assumption needed for duality holds; otherwise the upper bound is automatic. We may take {% raw %}<span class="math inline">\(C_1=(18\sqrt p\,q)^{-p}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C_2=(18\sqrt q\,p)^p\)</span>{% endraw %}. ◻</p>

</div>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_probabilistic_1995" class="csl-entry" role="listitem">
Bass, Richard F. 1995. <em>Probabilistic Techniques in Analysis</em>. Springer Series in Statistics. New York: Springer-Verlag.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-12-08-itos-formula-applications-and-stratonovich-integration %}">Itō’s Formula, Applications, and Stratonovich Integration</a> · Next: <a href="{% post_url 2024-03-24-girsanovs-theorem %}">Girsanov’s Theorem</a></p></nav>

</div>
