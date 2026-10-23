---
layout: "post"
title: "Burkholder-Davis-Gundy inequalities"
date: "2024-02-18"
tags: ["probability theory", "stochastic processes"]
excerpt: "Continuous-time Burkholder–Davis–Gundy inequalities for every positive moment order."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale on a filtered probability space satisfying the usual conditions, with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[M_t^*=\sup_{0\leq s\leq t}|M_s|,\qquad A_t=\langle M\rangle_t.\]</div>{% endraw %}

<p>The Burkholder–Davis–Gundy inequalities compare {% raw %}<span class="math inline">\(\mathbb E(M_T^*)^p\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb E A_T^{p/2}\)</span>{% endraw %}, with constants depending only on {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}. Expectations may be infinite. We first prove the estimates for {% raw %}<span class="math inline">\(p\geq2\)</span>{% endraw %} using Itō's formula, and then prove the full range by two tail comparisons.</p>


<div id="burckholder-davis-gundy-inequalities" data-note-section="title">

</div>
<p>The maximal inequalities used below are <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}#doob-lp-maximal-inequality">Doob's inequalities</a>. Quadratic variation and its stopped-square identity are constructed in <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}#thm:cts-semimartingale-limit-characterization">Theorem 2 of the continuous-semimartingale notes</a>.</p>


<div id="thm:continuous-bdg-p-ge-2" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1.</strong> For {% raw %}<span class="math inline">\(2\leq p&lt;\infty\)</span>{% endraw %}, there are finite constants {% raw %}<span class="math inline">\(c_p,C_p\)</span>{% endraw %}, depending only on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, such that every almost surely finite stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %} satisfies</p>


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

<h2 id="discrete-comparisons">Discrete square-function estimates</h2>
<p>The following discrete results are proved in the <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}#square-functions-inequalities">square-function post</a>. They distinguish the realized square function from predictable quadratic variation and provide the tail-integration lemma used below.</p>
<div id="lem:max-inequality-truncated-submartingale" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2.</strong> For a nonnegative submartingale with {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(S_n^2=\sum_{i=1}^n(X_i-X_{i-1})^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_n^*=\max_{i\leq n}X_i\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(U=\max(\theta S_n,X_n^*)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\theta&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta=(1+2\theta^2)^{1/2}\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\lambda\mathbb P(U&gt;\beta\lambda)\leq3\mathbb E[X_n\mathbf1_{\{U&gt;\lambda\}}].\]</div>{% endraw %}

<span id="eq:maximal-inequality-truncated-submartingale"></span>
<p>Consequently, for {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\|S_n\|_p\leq9\sqrt p\,p(p-1)^{-1}\|X_n\|_p.\tag{1}\]</div>{% endraw %}

<span id="eq:term1"></span>
<p>The proof separates the two contributions by</p>

{% raw %}<div class="math display">\[\lambda\mathbb P(U&gt;\beta\lambda)\leq\lambda\mathbb P(X_n^*&gt;\lambda)
+\lambda\mathbb P(\theta S_n&gt;\beta\lambda,\ X_n^*\leq\lambda).\tag{2}\]</div>{% endraw %}
<span id="eq:term2"></span>
<p>The first term is controlled by the first-crossing inequality. The second is controlled by the stopped square-function estimate in <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}#eq:term2">the proof of Lemma 2</a>.</p>

</div>

<div id="lem:moment-comparison-bounds" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3.</strong> Let {% raw %}<span class="math inline">\(U,V\geq0\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon\geq0\)</span>{% endraw %} satisfy</p>

<span id="eq:moment-comparison-hypothesis"></span>
{% raw %}<div class="math display">\[\mathbb P(U&gt;\beta\lambda,V\leq\delta\lambda)\leq\varepsilon\mathbb P(U&gt;\lambda)\qquad(\lambda&gt;0).\tag{3}\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon\beta^p&lt;1\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\mathbb E U^p\leq\frac{\beta^p\delta^{-p}}{1-\varepsilon\beta^p}\mathbb E V^p.\]</div>{% endraw %}

<p>The same conclusion holds when the right-hand event is {% raw %}<span class="math inline">\(U\geq\lambda\)</span>{% endraw %}, since the tail integrals with {% raw %}<span class="math inline">\(&gt;\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\geq\)</span>{% endraw %} agree.</p>
<p>Proof: <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}#lem:moment-comparison-bounds">Lemma 3</a>.</p>
</div>

<div id="thm:burckholder" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4.</strong> For a discrete-time martingale with {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1&lt;p&lt;\infty\)</span>{% endraw %}, constants {% raw %}<span class="math inline">\(a_p,b_p&gt;0\)</span>{% endraw %} depending only on {% raw %}<span class="math inline">\(p\)</span>{% endraw %} satisfy</p>

{% raw %}<div class="math display">\[a_p\mathbb E S_n^p\leq\mathbb E|X_n|^p\leq b_p\mathbb E S_n^p.\]</div>{% endraw %}
<p>Proof: <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}#thm:burckholder">Burkholder's inequality</a>.</p>
</div>

<h2 id="continuous-bdg-all-positive-p">The full moment range</h2>
<p><strong>Theorem 5 (Burkholder–Davis–Gundy).</strong> For every {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}, there are constants {% raw %}<span class="math inline">\(0&lt;a_p\leq b_p&lt;\infty\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[a_p\mathbb E A_T^{p/2}\leq\mathbb E(M_T^*)^p
\leq b_p\mathbb E A_T^{p/2}\]</div>{% endraw %}

<p>for every almost surely finite stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. The constants do not depend on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} or {% raw %}<span class="math inline">\(T\)</span>{% endraw %}.</p>

<p><em>Proof.</em> First stop {% raw %}<span class="math inline">\(M\)</span>{% endraw %} at</p>

{% raw %}<div class="math display">\[\tau_K=\inf\{t\geq0:M_t^*+A_t\geq K\}\wedge K\]</div>{% endraw %}

<p>and replace {% raw %}<span class="math inline">\(T\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T\wedge\tau_K\)</span>{% endraw %}. The process and its bracket are then bounded, and all subsequent stopping times may be capped at {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. The square-martingale identity and bounded optional sampling apply to every stopped increment used below.</p>

<p>Fix {% raw %}<span class="math inline">\(\beta&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} be the first time {% raw %}<span class="math inline">\(|M|\)</span>{% endraw %} reaches {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(E=\{\sigma\leq T\}\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, start the martingale increment at {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} and stop it at {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, or when {% raw %}<span class="math inline">\(A_t-A_\sigma\)</span>{% endraw %} reaches {% raw %}<span class="math inline">\(2\delta^2\lambda^2\)</span>{% endraw %}, whichever comes first. Set the increment process to zero on {% raw %}<span class="math inline">\(E^c\)</span>{% endraw %}. The event {% raw %}<span class="math inline">\(E\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(\mathcal F_\sigma\)</span>{% endraw %}. Its terminal squared expectation is therefore at most</p>

{% raw %}<div class="math display">\[2\delta^2\lambda^2\,\mathbb P(E).\]</div>{% endraw %}

<p>On {% raw %}<span class="math inline">\(\{M_T^*&gt;\beta\lambda,\ A_T^{1/2}\leq\delta\lambda\}\)</span>{% endraw %}, this increment reaches absolute value greater than {% raw %}<span class="math inline">\((\beta-1)\lambda\)</span>{% endraw %}. The bracket stop cannot occur on this event, since the total bracket is at most {% raw %}<span class="math inline">\(\delta^2\lambda^2\)</span>{% endraw %}. Applying the weak maximal inequality to the squared increment gives</p>

{% raw %}<div class="math display">\[\mathbb P(M_T^*&gt;\beta\lambda,\ A_T^{1/2}\leq\delta\lambda)
\leq\frac{2\delta^2}{(\beta-1)^2}\mathbb P(M_T^*\geq\lambda).\tag{4}\]</div>{% endraw %}

<p>For the reverse comparison, let {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} be the first time {% raw %}<span class="math inline">\(A\)</span>{% endraw %} reaches {% raw %}<span class="math inline">\(\lambda^2\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(E=\{\sigma\leq T\}\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, stop the increment after {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} at the first of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, the time its absolute value reaches {% raw %}<span class="math inline">\(3\delta\lambda\)</span>{% endraw %}, and the time its bracket reaches {% raw %}<span class="math inline">\((\beta^2-1)\lambda^2\)</span>{% endraw %}. Denote that time by {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(\rho=\sigma\)</span>{% endraw %} on {% raw %}<span class="math inline">\(E^c\)</span>{% endraw %}. The increment process is zero on {% raw %}<span class="math inline">\(E^c\)</span>{% endraw %}. Continuity and the isometry give</p>


{% raw %}<div class="math display">\[\mathbb E[\mathbf1_E(A_\rho-A_\sigma)]
=\mathbb E[\mathbf1_E(M_\rho-M_\sigma)^2]
\leq9\delta^2\lambda^2\mathbb P(E).\]</div>{% endraw %}

<p>On {% raw %}<span class="math inline">\(\{A_T^{1/2}&gt;\beta\lambda,\ M_T^*\leq\delta\lambda\}\)</span>{% endraw %}, every increment from {% raw %}<span class="math inline">\(M_\sigma\)</span>{% endraw %} has absolute value at most {% raw %}<span class="math inline">\(2\delta\lambda\)</span>{% endraw %}. Thus the {% raw %}<span class="math inline">\(3\delta\lambda\)</span>{% endraw %} stop cannot occur before the bracket reaches {% raw %}<span class="math inline">\((\beta^2-1)\lambda^2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\mathbb P(A_T^{1/2}&gt;\beta\lambda,\ M_T^*\leq\delta\lambda)
\leq\frac{9\delta^2}{\beta^2-1}\mathbb P(A_T^{1/2}\geq\lambda).\tag{5}\]</div>{% endraw %}

<p>Take {% raw %}<span class="math inline">\(\beta=2\)</span>{% endraw %}. For the given {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} small enough that both coefficients in (4) and (5), multiplied by {% raw %}<span class="math inline">\(2^p\)</span>{% endraw %}, are less than one. Lemma 3 applied in each direction proves the two moment inequalities for the stopped process, uniformly in {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\tau_K\uparrow\infty\)</span>{% endraw %} almost surely, {% raw %}<span class="math inline">\(M_{T\wedge\tau_K}^*\uparrow M_T^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A_{T\wedge\tau_K}\uparrow A_T\)</span>{% endraw %}. Monotone convergence removes the stop and permits infinite moments. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>For {% raw %}<span class="math inline">\(p\geq1\)</span>{% endraw %}, finiteness of {% raw %}<span class="math inline">\(\mathbb E A_T^{p/2}\)</span>{% endraw %} implies that {% raw %}<span class="math inline">\(M^T\)</span>{% endraw %} is a uniformly integrable martingale. Theorem 5 gives {% raw %}<span class="math inline">\(\mathbb E(M_T^*)^p&lt;\infty\)</span>{% endraw %}, hence an integrable dominating variable {% raw %}<span class="math inline">\(M_T^*\)</span>{% endraw %}; conditional dominated convergence removes a localizing sequence. When {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %}, a finite {% raw %}<span class="math inline">\(p\)</span>{% endraw %}-th moment of the maximum need not imply integrability.</p>

<p>The inequalities also hold for stopping times that may equal infinity, with {% raw %}<span class="math inline">\(M_\infty^*=\sup_{t\geq0}|M_t|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A_\infty=\lim_{t\to\infty}A_t\)</span>{% endraw %}. Apply Theorem 5 at {% raw %}<span class="math inline">\(T\wedge n\)</span>{% endraw %} and use monotone convergence.</p>


<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_probabilistic_1995" class="csl-entry" role="listitem">
Bass, Richard F. 1995. <em>Probabilistic Techniques in Analysis</em>. Springer Series in Statistics. New York: Springer-Verlag.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-12-08-itos-formula-applications-and-stratonovich-integration %}">Itō’s Formula, Applications, and Stratonovich Integration</a> · Next: <a href="{% post_url 2024-03-24-girsanovs-theorem %}">Girsanov’s Theorem</a></p></nav>

</div>
