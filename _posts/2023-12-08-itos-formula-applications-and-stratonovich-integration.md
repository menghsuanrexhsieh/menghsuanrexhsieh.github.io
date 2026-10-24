---
layout: "post"
title: "Itō’s Formula, Applications, and Stratonovich Integration"
date: "2023-12-08"
tags: ["probability theory", "stochastic processes"]
excerpt: "Itō’s formula, Lévy’s characterization, Brownian time changes, and Stratonovich integration."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/12/08/itos-formula/", "/2024/01/13/application-of-itos-formula/", "/2024/04/29/stratonovich-integrals/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((\Omega,\mathcal F,(\mathcal F_t)_{t\geq0},\mathbb P)\)</span>{% endraw %} satisfy the usual conditions. All semimartingales in this article are continuous. Write {% raw %}<span class="math inline">\(X=X_0+M+A\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(M_0=A_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a local martingale, and {% raw %}<span class="math inline">\(A\)</span>{% endraw %} has finite variation on compact intervals. We use {% raw %}<span class="math inline">\(\langle X,Y\rangle\)</span>{% endraw %} for the covariation of their local-martingale parts. The integral and its covariation identity are constructed in <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}#result-9">the continuous-semimartingale article</a>.</p>


<div id="it-s-formula" data-note-section="title">

</div>
<h2 id="product-rule">The product rule</h2>
<p><strong>Proposition (integration by parts).</strong> For continuous semimartingales {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[X_tY_t=X_0Y_0+\int_0^tX_s\,dY_s+\int_0^tY_s\,dX_s+\langle X,Y\rangle_t.\]</div>{% endraw %}

<p><strong>Proof.</strong> It suffices by polarisation to prove the assertion for {% raw %}<span class="math inline">\(Y=X\)</span>{% endraw %}. For a deterministic partition {% raw %}<span class="math inline">\(0=t_0&lt;\cdots&lt;t_m=t\)</span>{% endraw %}, the algebraic identity</p>

{% raw %}<div class="math display">\[X_t^2-X_0^2=2\sum_{j=1}^mX_{t_{j-1}}(X_{t_j}-X_{t_{j-1}})+\sum_{j=1}^m(X_{t_j}-X_{t_{j-1}})^2\]</div>{% endraw %}

<p>holds pathwise. The last sum converges in probability to {% raw %}<span class="math inline">\(\langle M\rangle_t\)</span>{% endraw %}. Indeed, the martingale square sums converge by <a href="{% post_url 2023-08-23-quadratic-variation-and-the-doobmeyer-decomposition %}">the quadratic-variation construction</a>; the terms involving {% raw %}<span class="math inline">\(A\)</span>{% endraw %} tend to zero because they are bounded by the modulus of continuity of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} or {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, multiplied by the variation of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}.</p>

<p>For the first sum, let {% raw %}<span class="math inline">\(H^{\pi}_s=X_{t_{j-1}}\)</span>{% endraw %} on {% raw %}<span class="math inline">\((t_{j-1},t_j]\)</span>{% endraw %}. Localise so that {% raw %}<span class="math inline">\(|X_0|\)</span>{% endraw %}, the range of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\langle M\rangle_t\)</span>{% endraw %}, and the variation of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} are bounded by deterministic constants. Continuity gives {% raw %}<span class="math inline">\(\sup_{s\leq t}|H^{\pi}_s-X_s|\to0\)</span>{% endraw %} almost surely. The isometry and dominated convergence give</p>

{% raw %}<div class="math display">\[\mathbb E\left|\int_0^t(H^{\pi}_s-X_s)\,dM_s\right|^2
=\mathbb E\int_0^t|H^{\pi}_s-X_s|^2\,d\langle M\rangle_s\longrightarrow0.\]</div>{% endraw %}

<p>The finite-variation integral is bounded in absolute value by {% raw %}<span class="math inline">\(\sup|H^{\pi}-X|\operatorname{Var}_{[0,t]}(A)\)</span>{% endraw %}, which tends to zero almost surely. Removing the localisation proves the identity at each fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Intersecting the probability-one events for rational {% raw %}<span class="math inline">\(t\)</span>{% endraw %} and using continuity proves it simultaneously for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Polarisation completes the proof. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<h2 id="change-of-variables">Itō’s formula</h2>
<p><strong>Theorem (Itō).</strong> If {% raw %}<span class="math inline">\(f\in C^2(\mathbb R)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f(X)\)</span>{% endraw %} is a continuous semimartingale and, almost surely for every {% raw %}<span class="math inline">\(t\geq0\)</span>{% endraw %},</p>
<span id="eq:ito-formula"></span>
{% raw %}<div class="math display">\[f(X_t)=f(X_0)+\int_0^tf'(X_s)\,dX_s+\frac12\int_0^tf''(X_s)\,d\langle X\rangle_s.\tag{1}\]</div>{% endraw %}

<p><strong>Proof.</strong> First restrict to a bounded range of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} be the class of {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} functions for which (1) holds. Constants and the identity belong to {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} is a vector space. If {% raw %}<span class="math inline">\(f,g\in\mathcal A\)</span>{% endraw %}, the product rule gives</p>
<span id="eq:prelim-ito"></span>
{% raw %}<div class="math display">\[f(X_t)g(X_t)=f(X_0)g(X_0)+\int_0^tf(X_s)\,d[g(X_s)]+\int_0^tg(X_s)\,d[f(X_s)]+\langle f(X),g(X)\rangle_t.\tag{2}\]</div>{% endraw %}

<p>The local-martingale parts of {% raw %}<span class="math inline">\(f(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(X)\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\int f'(X)\,dM\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int g'(X)\,dM\)</span>{% endraw %}. The covariation and associativity identities for stochastic integrals therefore give</p>

{% raw %}<div class="math display">\[\langle f(X),g(X)\rangle_t=\int_0^tf'(X_s)g'(X_s)\,d\langle M\rangle_s.\]</div>{% endraw %}

<p>Substituting (1) for {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %} in (2), the coefficient of {% raw %}<span class="math inline">\(dX\)</span>{% endraw %} is {% raw %}<span class="math inline">\(fg'+gf'=(fg)'\)</span>{% endraw %}, and the coefficient of {% raw %}<span class="math inline">\(d\langle M\rangle\)</span>{% endraw %} is {% raw %}<span class="math inline">\((fg''+gf''+2f'g')/2=(fg)''/2\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(fg\in\mathcal A\)</span>{% endraw %}, and every polynomial belongs to {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}.</p>

<p>On {% raw %}<span class="math inline">\([-K,K]\)</span>{% endraw %}, approximate {% raw %}<span class="math inline">\(f''\)</span>{% endraw %} uniformly by polynomials {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[P_n(x)=f(0)+xf'(0)+\int_0^x(x-y)Q_n(y)\,dy.\]</div>{% endraw %}

<p>Then {% raw %}<span class="math inline">\(P_n,P_n',P_n''\)</span>{% endraw %} converge uniformly to {% raw %}<span class="math inline">\(f,f',f''\)</span>{% endraw %}, respectively. Stop so that the range of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, its bracket, and the variation of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} are bounded. The isometry bounds the squared error in the martingale integral by {% raw %}<span class="math inline">\(\|P_n'-f'\|_\infty^2\mathbb E\langle M\rangle_t\)</span>{% endraw %}. The other two integral errors are bounded by {% raw %}<span class="math inline">\(\|P_n'-f'\|_\infty\operatorname{Var}_{[0,t]}(A)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\frac12\|P_n''-f''\|_\infty\langle M\rangle_t\)</span>{% endraw %}. Every error tends to zero, so (1) passes from polynomials to {% raw %}<span class="math inline">\(f\)</span>{% endraw %}.</p>

<p>To remove the bounds, first restrict to the {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-measurable events {% raw %}<span class="math inline">\(\{|X_0|\leq m\}\)</span>{% endraw %}. On each event, stop when {% raw %}<span class="math inline">\(|X_t|+\langle M\rangle_t+\operatorname{Var}_{[0,t]}(A)\)</span>{% endraw %} reaches {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and also at time {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. These times tend to infinity. Let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}. Equality at all rational times, followed by continuity, proves the asserted simultaneous identity. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1.</strong> The proof uses the construction of quadratic variation before Itō’s formula. An alternative development proves Itō’s formula directly from Taylor expansion and deduces integration by parts; see Bass (2011, Theorem 11.1). Both arguments require control of the stochastic-integral limit after localisation.</p>


</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> Let {% raw %}<span class="math inline">\(X=M+A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=N+C\)</span>{% endraw %} be continuous semimartingales, and let deterministic partitions of {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} have mesh tending to zero. Their sums of increment products converge in probability to {% raw %}<span class="math inline">\(\langle X,Y\rangle_T=\langle M,N\rangle_T\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(X=Y\)</span>{% endraw %}, expand the square. Center the martingale part by replacing {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(M-M_0\)</span>{% endraw %} and absorbing {% raw %}<span class="math inline">\(M_0\)</span>{% endraw %} into the finite-variation part. Neither increments nor covariation change. The martingale square sum then converges to {% raw %}<span class="math inline">\(\langle M\rangle_T\)</span>{% endraw %}, as proved in <a href="{% post_url 2023-08-23-quadratic-variation-and-the-doobmeyer-decomposition %}#thm:quadratic-variation">the quadratic-variation theorem</a>. The remaining terms satisfy</p>

{% raw %}<div class="math display">\[\left|\sum_i\Delta M_i\Delta A_i\right|\leq\max_i|\Delta M_i|\operatorname{Var}_{[0,T]}(A),\qquad
\sum_i(\Delta A_i)^2\leq\max_i|\Delta A_i|\operatorname{Var}_{[0,T]}(A).\]</div>{% endraw %}

<p>Both bounds tend to zero pathwise, using continuity of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, respectively. Polarisation gives the assertion for two different processes. Only variation on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} is needed.</p>

</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (functions on an open set).</strong> For a function {% raw %}<span class="math inline">\(f\in C^2(U)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(U\subset\mathbb R\)</span>{% endraw %} is open, formula (1) holds up to the first exit of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} from {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, provided {% raw %}<span class="math inline">\(X_0\in U\)</span>{% endraw %}. Exhaust {% raw %}<span class="math inline">\(U\)</span>{% endraw %} by compact sets lying in its interior, stop on leaving each set, and extend {% raw %}<span class="math inline">\(f\)</span>{% endraw %} to a {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} function on a neighbourhood of that set. The stopped formula is independent of the extension. Increasing the compact sets proves the assertion before the exit time; equality at a finite exit time requires that the terms have limits there.</p>


</div>
<h3 data-note-section="1" id="application-of-it-s-formula">1. Application of Itō’s formula</h3>
<h2 id="levy-characterization">Lévy’s characterization</h2>

<p><strong>Theorem (Lévy’s characterization).</strong> A continuous local martingale {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle M\rangle_t=t\)</span>{% endraw %} is Brownian motion relative to {% raw %}<span class="math inline">\((\mathcal F_t)\)</span>{% endraw %}.</p>

<p><strong>Proof.</strong> For {% raw %}<span class="math inline">\(\theta\in\mathbb R\)</span>{% endraw %}, Itō’s formula, applied separately to real and imaginary parts, shows that {% raw %}<span class="math inline">\(Z_t=\exp(i\theta M_t+\theta^2t/2)\)</span>{% endraw %} is a local martingale. On every finite time interval its modulus is deterministically bounded, so it is a martingale. Consequently</p>


{% raw %}<div class="math display">\[\mathbb{E}[e^{i\theta(M_t-M_s)}\mid\mathcal F_s]
=e^{-\theta^2(t-s)/2},\qquad0\leq s\leq t.\]</div>{% endraw %}

<p>The conditional characteristic function identifies the increment as {% raw %}<span class="math inline">\(\mathcal{N}(0,t-s)\)</span>{% endraw %}, independent of {% raw %}<span class="math inline">\(\mathcal F_s\)</span>{% endraw %}. Together with continuity this proves Lévy’s characterization.</p>

<h2 id="brownian-time-change">The Brownian time change</h2>

<p><strong>Theorem (Brownian time change).</strong> Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(A_\infty=\infty\)</span>{% endraw %} almost surely, where {% raw %}<span class="math inline">\(A=\langle M\rangle\)</span>{% endraw %}. Define</p>


{% raw %}<div class="math display">\[\tau(u)=\inf\{t\geq0:A_t&gt;u\},\qquad B_u=M_{\tau(u)},\qquad\mathcal G_u=\mathcal F_{\tau(u)}.\]</div>{% endraw %}

<p>Each {% raw %}<span class="math inline">\(\tau(u)\)</span>{% endraw %} is a finite stopping time; right-continuity of the filtration handles the strict inequality in its definition. Continuity and divergence of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} imply {% raw %}<span class="math inline">\(A_{\tau(u)}=u\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is strictly increasing, its inverse is continuous. In general it may have flat intervals, so one extra fact is needed: {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is constant on every interval where {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is constant.</p>

<p>To prove constancy on flat intervals, fix rational {% raw %}<span class="math inline">\(0\leq a&lt;b\)</span>{% endraw %}. Stop {% raw %}<span class="math inline">\(M_t-M_a\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(a\leq t\leq b\)</span>{% endraw %}, when {% raw %}<span class="math inline">\(A_t-A_a\)</span>{% endraw %} first reaches {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}. The stopped bracket is at most {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, so the localised isometry and the maximal inequality bound the probability that the absolute maximum exceeds {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\delta/\varepsilon^2\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{A_b=A_a\}\)</span>{% endraw %} no bracket stop occurs. Let {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %} and intersect over rational {% raw %}<span class="math inline">\(a,b,\varepsilon\)</span>{% endraw %}. Continuity extends constancy to every flat interval and its endpoints. Hence {% raw %}<span class="math inline">\(u\mapsto M_{\tau(u)}\)</span>{% endraw %} is continuous across every jump of the inverse, and {% raw %}<span class="math inline">\(M_t=B_{A_t}\)</span>{% endraw %}.</p>


<p>The <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}#h2-martingales">square-integrability criterion</a> implies that {% raw %}<span class="math inline">\(M^{\tau(v)}\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded martingale for each {% raw %}<span class="math inline">\(v&lt;\infty\)</span>{% endraw %}, since its bracket is bounded by {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Optional sampling at {% raw %}<span class="math inline">\(\tau(u)\leq\tau(v)\)</span>{% endraw %} proves that {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is a martingale on {% raw %}<span class="math inline">\([0,v]\)</span>{% endraw %}. Also, {% raw %}<span class="math inline">\((M^{\tau(v)})^2-A^{\tau(v)}\)</span>{% endraw %} has a uniformly integrable stopped family: the square of an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-closed martingale is of class D by conditional Jensen, and {% raw %}<span class="math inline">\(A^{\tau(v)}\leq v\)</span>{% endraw %}. Optional sampling therefore shows that {% raw %}<span class="math inline">\(B_u^2-u\)</span>{% endraw %} is a martingale. Thus {% raw %}<span class="math inline">\(\langle B\rangle_u=u\)</span>{% endraw %}, and Lévy’s characterization proves that {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is Brownian motion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>


<p>The square-increment approximation has an exact integral remainder. For a continuous local martingale {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %} and a deterministic partition {% raw %}<span class="math inline">\(0=t_0&lt;\cdots&lt;t_m=T\)</span>{% endraw %}. Applying Itō’s formula on each subinterval gives</p>


{% raw %}<div class="math display">\[\sum_{j=1}^m(M_{t_j}-M_{t_{j-1}})^2-\langle M\rangle_T
=2\int_0^T(M_s-M_{\pi(s)})\,dM_s,\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(\pi(s)=t_{j-1}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t_{j-1}&lt;s\leq t_j\)</span>{% endraw %}. After stopping at {% raw %}<span class="math inline">\(\inf\{t\geq0:|M_t-M_0|\geq K\}\wedge K\)</span>{% endraw %}, the centered process is bounded and its expected bracket on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} is finite. The isometry gives</p>

{% raw %}<div class="math display">\[\mathbb{E}\left|2\int_0^T(M_s-M_{\pi(s)})\,dM_s\right|^2
=4\mathbb{E}\int_0^T|M_s-M_{\pi(s)}|^2\,d\langle M\rangle_s\longrightarrow0.\]</div>{% endraw %}

<p>Continuity gives pointwise convergence of the integrand, and boundedness provides an integrable dominating measure. Removing the stop proves convergence in probability for the original martingale. Using partitions that end exactly at {% raw %}<span class="math inline">\(T\)</span>{% endraw %} avoids an extra increment beyond the terminal time.</p>

<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4.</strong> The stopped approximation just proved converges in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. Removing the stopping yields convergence in probability; {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} convergence for the unstopped process needs an additional moment bound. Square integrability alone does not supply fourth moments of its increments.</p>

</div>
<h3 data-note-section="2" id="stratonovich-integrals">2. Stratonovich integrals</h3>
<p>For continuous semimartingales {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, define the Stratonovich integral by</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \int_0^t X_s \circ \dif Y_s = \int_0^t X_s \dif Y_s + \frac12 \langle X, Y \rangle_t ~.
\end{aligned}\]</div>{% endraw %}
<p> The resulting chain rule takes the following form. Suppose {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is three-times continuously differentiable, and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a continuous semimartingale. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(X_t) = f(X_0) + \int_0^t f&#x27;(X_s) \circ \dif X_s ~.
\end{aligned}\]</div>{% endraw %}
<p><strong>Proof.</strong> Comparing with Itō’s formula, it suffices to establish</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \langle f&#x27;(X), X \rangle_t = \int_0^t f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~.
\end{aligned}\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(f'\in C^2\)</span>{% endraw %}, Itō’s formula gives</p>


{% raw %}<div class="math display">\[\begin{aligned}
    f&#x27;(X_t) = f&#x27;(X_0) + \int_0^t f&#x27;&#x27;(X_s) \dif X_s + \frac12 \int_0^t f&#x27;&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~,
\end{aligned}\]</div>{% endraw %}
<p>The last integral has finite variation and therefore zero covariation with {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. The stochastic-integral covariation identity yields</p>


{% raw %}<div class="math display">\[\langle f'(X),X\rangle_t=\left\langle\int_0^\cdot f''(X_s)\,dM_s,M\right\rangle_t=\int_0^tf''(X_s)\,d\langle M\rangle_s.\]</div>{% endraw %}

<p>The covariation correction proves the Stratonovich chain rule. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>


<p>Applying the chain rule with {% raw %}<span class="math inline">\(f(x)=x^2\)</span>{% endraw %} to {% raw %}<span class="math inline">\(X+Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X-Y\)</span>{% endraw %} gives</p>


{% raw %}<div class="math display">\[\begin{aligned}
    (X_t + Y_t)^2 &amp;= (X_0 + Y_0)^2 + 2 \int_0^t (X_s + Y_s) \circ \dif \, (X_s + Y_s) ~, \\
    (X_t - Y_t)^2 &amp;= (X_0 - Y_0)^2 + 2 \int_0^t (X_s - Y_s) \circ \dif \, (X_s - Y_s) ~,
\end{aligned}\]</div>{% endraw %}
<p> implying </p>

{% raw %}<div class="math display">\[\begin{aligned}
    X_t Y_t = X_0 Y_0 + \int_0^t X_s \circ \dif Y_s + \int_0^t Y_s \circ \dif X_s ~.
\end{aligned}\]</div>{% endraw %}
<p> This is the <em>product formula for Stratonovich integrals</em>. The same correction also appears in symmetric approximating sums. If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H\)</span>{% endraw %} are continuous semimartingales, and {% raw %}<span class="math inline">\(t_0 &gt; 0\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \sum_{0 \leq k \leq 2^n-1} \frac{H_{k t_0 2^{-n}} + H_{(k+1) t_0 2^{-n}}}{2} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) \xrightarrow{P} \int_0^{t_0} H_s \circ \dif X_s ~.
\end{aligned}\]</div>{% endraw %}
<p> To see this, observe that </p>

{% raw %}<div class="math display">\[\begin{gathered}
    \sum_{0 \leq k \leq 2^n-1} \frac{H_{k t_0 2^{-n}} + H_{(k+1) t_0 2^{-n}}}{2} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) \\
    = \sum_{0 \leq k \leq 2^n-1} H_{k t_0 2^{-n}} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) 
    + \frac12 \sum_{0 \leq k \leq 2^n-1} (H_{(k+1) t_0 2^{-n}} - H_{k t_0 2^{-n}}) (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) ~.
\end{gathered}\]</div>{% endraw %}
<p>The first sum converges in probability to {% raw %}<span class="math inline">\(\int_0^{t_0}H_s\,dX_s\)</span>{% endraw %} by the isometry and finite-variation estimates in the product-rule proof. Remark 2 gives convergence of the second sum to {% raw %}<span class="math inline">\(\frac12\langle H,X\rangle_{t_0}\)</span>{% endraw %}. Their sum is the Stratonovich integral. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>


<h2 id="multivariate-ito">The multivariate formula</h2>
<p>Let {% raw %}<span class="math inline">\(X=(X^1,\ldots,X^d)\)</span>{% endraw %} have continuous semimartingale coordinates. For {% raw %}<span class="math inline">\(f\in C^2(\mathbb R^d)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[f(X_t)=f(X_0)+\sum_{i=1}^d\int_0^t\partial_i f(X_s)\,dX_s^i
+\frac12\sum_{i,j=1}^d\int_0^t\partial_{ij}f(X_s)\,d\langle X^i,X^j\rangle_s.\]</div>{% endraw %}

<p><strong>Proof.</strong> Localise to a compact range and bounded brackets and finite variations. Taylor expansion on a deterministic partition gives the first-order sums, the Hessian-weighted increment products, and a remainder bounded by</p>

{% raw %}<div class="math display">\[\omega\!\left(\max_k|\Delta X_k|\right)\sum_k|\Delta X_k|^2,\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(\omega(r)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(r\downarrow0\)</span>{% endraw %}, by uniform continuity of the Hessian. The first factor tends to zero almost surely; the second is bounded in probability by the coordinate quadratic-variation limits. Hence the remainder tends to zero in probability.</p>

<p>The first-order sums converge to the integrals by the same isometry and variation bounds as in the product-rule proof. For the second-order sums, first replace the continuous weight {% raw %}<span class="math inline">\(\partial_{ij}f(X_s)\)</span>{% endraw %} by its left-endpoint values on a fixed coarse partition. On each coarse interval, the unweighted increment-product limit is Remark 2. The error from replacing the weight is bounded by its uniform approximation error times {% raw %}<span class="math inline">\(\sum_k|\Delta X_k^i\Delta X_k^j|\)</span>{% endraw %}; Cauchy–Schwarz bounds this last sum by the square roots of the two coordinate square sums, which are bounded in probability. Taking the fine mesh to zero and then the coarse mesh to zero proves convergence to the weighted covariation integral. Finitely many intervals intersecting coarse endpoints have vanishing contribution by continuity. Removing localisation and using continuity in time proves the formula. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>For {% raw %}<span class="math inline">\(f\in C^2(U)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U\subset\mathbb R^d\)</span>{% endraw %} open, the same compact-exhaustion argument as in Remark 3 applies. A deterministic time coordinate has finite variation and zero covariation, so the formula also gives the usual {% raw %}<span class="math inline">\(\partial_t f\,dt\)</span>{% endraw %} term for smooth functions of time and the process.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_stochastic_2011" class="csl-entry" role="listitem">
Bass, Richard F. 2011. <em>Stochastic Processes</em>. Cambridge Series in Statistical and Probabilistic Mathematics 33. Cambridge ; New York: Cambridge University Press.
</div>
<div id="ref-le_gall_brownian_2016" class="csl-entry" role="listitem">
Le Gall, Jean-François. 2016. <em>Brownian Motion, Martingales, and Stochastic Calculus</em>. 1st ed. 2016. Graduate Texts in Mathematics 274. Cham: Springer International Publishing : Imprint: Springer. <a href="https://doi.org/10.1007/978-3-319-31089-3">https://doi.org/10.1007/978-3-319-31089-3</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}">Continuous Semimartingales and the Monotone-Class Argument</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-11-02-construction-of-the-stochastic-integral %}">Construction of the Stochastic Integral</a> · Next: <a href="{% post_url 2024-02-18-burkholder-davis-gundy-inequalities %}">Burkholder-Davis-Gundy inequalities</a></p></nav>

</div>
