---
layout: "post"
title: "Itō’s Formula, Applications, and Stratonovich Integration"
date: "2023-12-08"
tags: ["probability theory", "stochastic processes"]
excerpt: "Itō’s formula is extremely useful, and there are a few direct applications."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/12/08/itos-formula/", "/2024/01/13/application-of-itos-formula/", "/2024/04/29/stratonovich-integrals/"]
---

<div class="note-content" markdown="0">

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="it-s-formula" data-note-section="title">

</div>
<p>The ordinary chain rule comes from the first-order term in a Taylor expansion. For stochastic integrals, the second-order term may survive summation. To see where the difference enters, first consider a smooth path. Suppose {% raw %}<span class="math inline">\(f: \mathbb R \to \mathbb R\)</span>{% endraw %} is smooth, and {% raw %}<span class="math inline">\(x : \mathbb R \to \mathbb R\)</span>{% endraw %} is a continuously differentiable path. Heuristically, we ought to have, for small {% raw %}<span class="math inline">\(\Delta t &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(x_{t+\Delta t}) = f(x_t + (x_{t+\Delta t} - x_t)) \approx f(x_t) + f&#x27;(x_t) (x_{t+\Delta t} - x_t) \approx f(x_t) + f&#x27;(x_t) \dif x_t ~.
\end{aligned}\]</div>{% endraw %}
<p> This suggests, by summation, the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(x_t) = f(x_0) + \int_0^t f&#x27;(x_s) \dif x_s ~.
\end{aligned}\]</div>{% endraw %}
<p> For a Brownian motion, since the quadratic variation is not zero, {% raw %}<span class="math inline">\(\langle B \rangle_t = t\)</span>{% endraw %}, so a Taylor expansion needs to be of order two. As such, heuristically, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(B_{t+\Delta t}) &amp;= f(B_t + (B_{t+\Delta t} - B_t)) \\
    &amp;\approx f(B_t) + f&#x27;(B_t) (B_{t+\Delta t} - B_t) + \frac{f&#x27;&#x27;(B_t)}{2} (B_{t+\Delta t} - B_t)^2 \\
    &amp;= f(B_t) + f&#x27;(B_t) \dif B_t + \frac{f&#x27;&#x27;(B_t)}{2} \dif t ~.
\end{aligned}\]</div>{% endraw %}
<p> Again, by summation, we have the formula </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(B_t) = f(B_0) + \int_0^t f&#x27;(B_s) \dif B_s + \frac{1}{2} \int_0^t f&#x27;&#x27;(B_s) \dif s ~.
\end{aligned}\]</div>{% endraw %}
<p>The Taylor expansion explains the extra term, but a proof must also justify the limit of the remainder. We establish the product rule first and then use polynomial approximation to obtain the change-of-variables formula.</p>

<p>To see the validity, we start with integration by parts of continuous semimartingales. Suppose {% raw %}<span class="math inline">\(\{X_t\}_{t \geq 0}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{Y_t\}_{t \geq 0}\)</span>{% endraw %} are two continuous semimartingales. The product rule isolates the covariation term that ordinary integration by parts does not have; see the <a href="{% post_url 2024-07-10-continuous-semimartingales-and-the-monotone-class-argument %}#sec:cts-semimartingales">continuous-semimartingale notes</a> for the underlying integral and covariation properties. Then, the process {% raw %}<span class="math inline">\(\{X_t Y_t\}_{t \geq 0}\)</span>{% endraw %} is a continuous semimartingale, and we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    X_t Y_t = X_0 Y_0 + \int_0^t X_s \dif Y_s + \int_0^t Y_s \dif X_s + \langle X,Y \rangle_t  \:\:, \quad \forall t \geq 0 ~.
\end{aligned}\]</div>{% endraw %}
<p> To see this, bilinearity implies we can assume {% raw %}<span class="math inline">\(X=Y\)</span>{% endraw %} without loss of generality. Let us also recentre and assume {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %} and every sequence {% raw %}<span class="math inline">\(\Delta_n[0,t]\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(|\Delta_n[0,t]| \xrightarrow{n\to\infty} 0\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \sum_{1 \leq k \leq n} \left( X_{t_k^n} - X_{t_{k-1}^n} \right)^2 = X_t^2 - 2 \sum_{1 \leq k \leq n} X_{t_{k-1}^n} \left( X_{t_k^n} - X_{t_{k-1}^n} \right) ~.
\end{aligned}\]</div>{% endraw %}
<p> Taking {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %} gives the desired statement. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<p>Itō’s formula then follows for this case. Specifically, if {% raw %}<span class="math inline">\(\{X_t\}_{t \geq 0}\)</span>{% endraw %} is a continuous, adapted semimartingale, and {% raw %}<span class="math inline">\(f: \mathbb R \to \mathbb R\)</span>{% endraw %} is a twice continuously differentiable function, then the process {% raw %}<span class="math inline">\(\{f(X_t)\}_{t \geq 0}\)</span>{% endraw %} is a semimartingale, and the following change of variable formula holds: </p>

{% raw %}<span id="eq:ito-formula"></span><div class="math display">\[\begin{aligned}
 
    f(X_t) = f(X_0) + \int_0^t f&#x27;(X_s) \dif X_s + \frac12 \int_0^t f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~.
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> To see this holds, suppose {% raw %}<span class="math inline">\(\{X_t\}_{t \geq 0}\)</span>{% endraw %} is bounded. Then, let {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} be the set of twice continuously differentiable functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %} such that <a href="#eq:ito-formula" data-reference-type="eqref" data-reference="eq:ito-formula">(1)</a> holds. Then, {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} is a vector space; we need to show that this is an algebra. If this holds, then {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} contains the identity function, so {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} contains all polynomial functions. All functions that are twice continuously differentiable (not necessarily having the expansion <a href="#eq:ito-formula" data-reference-type="eqref" data-reference="eq:ito-formula">(1)</a>) is contained in {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}; to see this, note that because {% raw %}<span class="math inline">\(\{X_t\}_{t \geq 0}\)</span>{% endraw %} is bounded by assumption, it is possible to find a sequence of polynomials {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} such that on compact sets, {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} converges uniformly to {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P&#x27;_n\)</span>{% endraw %} converges uniformly to {% raw %}<span class="math inline">\(f&#x27;\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(P&#x27;&#x27;_n\)</span>{% endraw %} converges uniformly to {% raw %}<span class="math inline">\(f&#x27;&#x27;\)</span>{% endraw %}. Passing to the limit in the formula for the polynomials gives the formula for the original function.</p>

<p>To see that {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} is an algebra, we note that for {% raw %}<span class="math inline">\(f,g \in \mathcal A\)</span>{% endraw %}, applying the integration by parts formula to semimartingales {% raw %}<span class="math inline">\(\{f(X_t)\}_{t \geq 0}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{g(X_t)\}_{t \geq 0}\)</span>{% endraw %} gives </p>

{% raw %}<span id="eq:prelim-ito"></span><div class="math display">\[\begin{aligned}
 
    f(X_t) g(X_t) = f(X_0) g(X_0) + \int_0^t f(X_s) \dif g(X_s) + \int_0^t g(X_s) \dif f(X_s) + \langle f(X), g(X) \rangle_t ~.
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(f,g \in \mathcal A\)</span>{% endraw %}, it must be that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \int_0^t f(X_s) \dif g(X_s) &amp;= \int_0^t f(X_s) g&#x27;(X_s) \dif X_s + \frac12 \int_0^t f(X_s) g&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~, \\
    \int_0^t g(X_s) \dif f(X_s) &amp;= \int_0^t g(X_s) f&#x27;(X_s) \dif X_s + \frac12 \int_0^t g(X_s) f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~, \\
    \langle f(X), g(X) \rangle_t &amp;= \int_0^t f&#x27;(X_s) g&#x27;(X_s) \dif \, \langle X \rangle_s ~.
\end{aligned}\]</div>{% endraw %}
<p> Therefore, </p>

{% raw %}<div class="math display">\[\begin{gathered}
    (2) = f(X_0) g(X_0) + \int_0^t f(X_s) g&#x27;(X_s) \dif X_s + \frac12 \int_0^t f(X_s) g&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s \\
    + \int_0^t g(X_s) f&#x27;(X_s) \dif X_s + \frac12 \int_0^t g(X_s) f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s
    + \int_0^t f&#x27;(X_s) g&#x27;(X_s) \dif \, \langle X \rangle_s \\
    = f(X_0) g(X_0) + \int_0^t (fg)&#x27;(X_s) \dif X_s + \frac12 \int_0^t (fg)&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~.
\end{gathered}\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(fg\in\mathcal A\)</span>{% endraw %}. To justify the polynomial approximation, uniformly approximate {% raw %}<span class="math inline">\(f''\)</span>{% endraw %} on the compact range by polynomials {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}, and integrate twice, choosing {% raw %}<span class="math inline">\(P_n(0)=f(0)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_n'(0)=f'(0)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(P_n,P_n',P_n''\)</span>{% endraw %} converge uniformly there. Localise {% raw %}<span class="math inline">\(X=X_0+M+A\)</span>{% endraw %} so that its range, {% raw %}<span class="math inline">\(\langle M\rangle\)</span>{% endraw %}, and the variation of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} on the time interval are bounded. The Itō isometry gives convergence of the martingale integrals; the variation bound gives convergence of the other integrals. For an unbounded initial value, first multiply by the {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-measurable indicators {% raw %}<span class="math inline">\(\{|X_0|\leq m\}\)</span>{% endraw %}. On each of these events, continuous-time hitting times of {% raw %}<span class="math inline">\(|X_t|+\langle M\rangle_t+\operatorname{Var}_{[0,t]}(A)\)</span>{% endraw %}, together with deterministic time cutoffs, provide the required bounds and tend to infinity. Let the bounds, and then {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, increase. This proves (1) simultaneously at all times by continuity.</p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1</strong>.  The change of variables formula above is contained in <span class="citation" data-cites="bass_stochastic_2011">Bass (<a href="#ref-bass_stochastic_2011" role="doc-biblioref">2011</a>, Theorem 11.1)</span>; the proof therein is substantially more complicated without the integration by parts formula (which they deduce as a consequence of Itō’s formula). <span class="citation" data-cites="bass_stochastic_2011">Bass (<a href="#ref-bass_stochastic_2011" role="doc-biblioref">2011, sec. 17.2</a> and 17.3)</span> contains a presentation of Itō’s formula in a slightly different setting: consider {% raw %}<span class="math inline">\(X_t = M_t + A_t\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(M_t\)</span>{% endraw %} is a square-integrable martingale, and {% raw %}<span class="math inline">\(A_t\)</span>{% endraw %} is a process of bounded variation and whose total variation is integrable.</p>

</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> Let {% raw %}<span class="math inline">\(X=M+A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=N+C\)</span>{% endraw %} be continuous semimartingales, and let deterministic partitions of {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} have mesh tending to zero. Their sums of increment products converge in probability to {% raw %}<span class="math inline">\(\langle X,Y\rangle_T=\langle M,N\rangle_T\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(X=Y\)</span>{% endraw %}, expand the square. Center the martingale part by replacing {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(M-M_0\)</span>{% endraw %} and absorbing {% raw %}<span class="math inline">\(M_0\)</span>{% endraw %} into the finite-variation part. Neither increments nor covariation change. The martingale square sum then converges to {% raw %}<span class="math inline">\(\langle M\rangle_T\)</span>{% endraw %}, as proved in <a href="{% post_url 2023-08-23-quadratic-variation-and-the-doobmeyer-decomposition %}#thm:quadratic-variation">the quadratic-variation theorem</a>. The remaining terms satisfy</p>

{% raw %}<div class="math display">\[\left|\sum_i\Delta M_i\Delta A_i\right|\leq\max_i|\Delta M_i|\operatorname{Var}_{[0,T]}(A),\qquad
\sum_i(\Delta A_i)^2\leq\max_i|\Delta A_i|\operatorname{Var}_{[0,T]}(A).\]</div>{% endraw %}

<p>Both bounds tend to zero pathwise, using continuity of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, respectively. Polarisation gives the assertion for two different processes. Only variation on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} is needed.</p>

</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>.  Itō’s formula is often applied to a function {% raw %}<span class="math inline">\(F\)</span>{% endraw %} that is twice continuously differentiable and defined (only) on an open subset {% raw %}<span class="math inline">\(U \subset \mathbb R^n\)</span>{% endraw %}. See <span class="citation" data-cites="le_gall_brownian_2016">Le Gall (<a href="#ref-le_gall_brownian_2016" role="doc-biblioref">2016, 117</a>)</span> for a discussion for Itō’s formula applied to this case.</p>

</div>
<h3 data-note-section="1" id="application-of-it-s-formula">1. Application of Itō’s formula</h3>
<p>Itō’s formula recognises Brownian motion from its quadratic variation. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle M\rangle_t=t\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\theta\in\mathbb R\)</span>{% endraw %}, the complex-valued process {% raw %}<span class="math inline">\(Z_t=\exp(i\theta M_t+\theta^2t/2)\)</span>{% endraw %} is a local martingale by Itō’s formula, with real and imaginary parts understood separately. On each finite time interval its modulus is deterministically bounded, so it is a true martingale. Thus</p>

{% raw %}<div class="math display">\[\mathbb{E}[e^{i\theta(M_t-M_s)}\mid\mathcal F_s]
=e^{-\theta^2(t-s)/2},\qquad0\leq s\leq t.\]</div>{% endraw %}

<p>The conditional characteristic function identifies the increment as {% raw %}<span class="math inline">\(\mathcal{N}(0,t-s)\)</span>{% endraw %}, independent of {% raw %}<span class="math inline">\(\mathcal F_s\)</span>{% endraw %}. Together with continuity this proves Lévy’s characterization.</p>

<p>A continuous local martingale with unbounded quadratic variation can therefore be viewed on a Brownian clock. Put {% raw %}<span class="math inline">\(A=\langle M\rangle\)</span>{% endraw %}, assume {% raw %}<span class="math inline">\(A_\infty=\infty\)</span>{% endraw %}, and define the continuous-time inverse</p>

{% raw %}<div class="math display">\[\tau(u)=\inf\{t\geq0:A_t&gt;u\},\qquad B_u=M_{\tau(u)},\qquad\mathcal G_u=\mathcal F_{\tau(u)}.\]</div>{% endraw %}

<p>Each {% raw %}<span class="math inline">\(\tau(u)\)</span>{% endraw %} is a finite stopping time; right-continuity of the filtration handles the strict inequality in its definition. Continuity and divergence of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} imply {% raw %}<span class="math inline">\(A_{\tau(u)}=u\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is strictly increasing, its inverse is continuous. In general it may have flat intervals, so one extra fact is needed: {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is constant on every interval where {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is constant.</p>

<p>Here is a proof of that fact. Fix rational {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %} and stop {% raw %}<span class="math inline">\(M_t-M_a\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(a\leq t\leq b\)</span>{% endraw %}, when {% raw %}<span class="math inline">\(A_t-A_a\)</span>{% endraw %} first reaches {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}. The localised isometry and the maximal inequality bound the probability that its absolute maximum exceeds {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\delta/\varepsilon^2\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{A_b=A_a\}\)</span>{% endraw %} no such bracket stop occurs. Let {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, then intersect over rational {% raw %}<span class="math inline">\(a,b,\varepsilon\)</span>{% endraw %}. Continuity extends constancy to every flat interval, including its endpoints. Consequently {% raw %}<span class="math inline">\(u\mapsto M_{\tau(u)}\)</span>{% endraw %} is continuous even across jumps of the inverse, and {% raw %}<span class="math inline">\(M_t=B_{A_t}\)</span>{% endraw %}.</p>

<p>For completeness, the stopping argument does give the required integrability. A zero-start local martingale stopped where its bracket is bounded by {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded martingale. To see this, first localise to bounded martingales. For two nested localising times, the isometry expresses the squared {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-distance of the stopped terminal values as the expected bracket increment. Dominated convergence, using the bound {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, makes these values Cauchy in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. Their limit closes the stopped martingale, and its second moment is the expected stopped bracket. Apply this to {% raw %}<span class="math inline">\(M^{\tau(v)}\)</span>{% endraw %}. Optional sampling at {% raw %}<span class="math inline">\(\tau(u)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(u\leq v\)</span>{% endraw %}, now proves that {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is a martingale on {% raw %}<span class="math inline">\([0,v]\)</span>{% endraw %}. The same argument for {% raw %}<span class="math inline">\(M^2-A\)</span>{% endraw %}, whose stopped family is uniformly integrable, proves that {% raw %}<span class="math inline">\(B_u^2-u\)</span>{% endraw %} is a martingale. Hence {% raw %}<span class="math inline">\(\langle B\rangle_u=u\)</span>{% endraw %}, and Lévy’s characterization proves the Brownian time-change theorem.</p>

<p>The integral form of the square-increment approximation is also useful. For a continuous local martingale {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %} and a deterministic partition {% raw %}<span class="math inline">\(0=t_0&lt;\cdots&lt;t_m=T\)</span>{% endraw %}. Applying Itō’s formula on each subinterval gives</p>

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
<p>The Stratonovich integral incorporates half the covariation correction into the definition of the integral. This restores the ordinary form of the chain rule, which is useful when changing coordinates. If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are continuous semimartingales, we can define the <em>Stratonovich integral</em> as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \int_0^t X_s \circ \dif Y_s = \int_0^t X_s \dif Y_s + \frac12 \langle X, Y \rangle_t ~.
\end{aligned}\]</div>{% endraw %}
<p> The resulting chain rule takes the following form. Suppose {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is three-times continuously differentiable, and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a continuous semimartingale. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f(X_t) = f(X_0) + \int_0^t f&#x27;(X_s) \circ \dif X_s ~.
\end{aligned}\]</div>{% endraw %}
<p> To see this, Itō’s formula applied to the function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} reveals that we ought to show </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \langle f&#x27;(X), X \rangle_t = \int_0^t f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~.
\end{aligned}\]</div>{% endraw %}
<p> But note that because {% raw %}<span class="math inline">\(f&#x27;\)</span>{% endraw %} is twice continuously differentiable, we can apply Itō’s formula to see that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f&#x27;(X_t) = f&#x27;(X_0) + \int_0^t f&#x27;&#x27;(X_s) \dif X_s + \frac12 \int_0^t f&#x27;&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~,
\end{aligned}\]</div>{% endraw %}
<p> and because quadratic variation processes are nondecreasing, they have finite variations. As such, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \langle f&#x27;(X), X \rangle_t = 0 + \int_0^t f&#x27;&#x27;(X_s) \dif \, \langle X,X \rangle_s + \frac12 \int_0^t f&#x27;&#x27;&#x27;(X_s) \dif \, \langle \langle X \rangle_s, X \rangle_s = \int_0^t f&#x27;&#x27;(X_s) \dif \, \langle X \rangle_s ~,
\end{aligned}\]</div>{% endraw %}
<p> as desired. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<p>As a result of this construction, if {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are continuous semimartingales, we can apply the change of variables with {% raw %}<span class="math inline">\(f(x) = x^2\)</span>{% endraw %} to {% raw %}<span class="math inline">\(X+Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X-Y\)</span>{% endraw %}, from which we can obtain an analogue to the <em>polarization identity</em>: </p>

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
    \sum_{0 \leq k \leq 2^n-1} \frac{H_{k t_0 2^{-n}} + H_{(k+1) t_0 2^{-n}}}{2} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) \xrightarrow{\mathop{\mathrm{\mathbf{P}\!\,}}} \int_0^{t_0} H_s \circ \dif X_s ~.
\end{aligned}\]</div>{% endraw %}
<p> To see this, observe that </p>

{% raw %}<div class="math display">\[\begin{gathered}
    \sum_{0 \leq k \leq 2^n-1} \frac{H_{k t_0 2^{-n}} + H_{(k+1) t_0 2^{-n}}}{2} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) \\
    = \sum_{0 \leq k \leq 2^n-1} H_{k t_0 2^{-n}} (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) 
    + \frac12 \sum_{0 \leq k \leq 2^n-1} (H_{(k+1) t_0 2^{-n}} - H_{k t_0 2^{-n}}) (X_{(k+1)t_0 2^{-n}} - X_{k t_0 2^{-n}}) ~.
\end{gathered}\]</div>{% endraw %}
<p> Clearly, the first sum converges to {% raw %}<span class="math inline">\(\int_0^{t_0} H_s \dif X_s\)</span>{% endraw %} in probability. It remains to show that the second term converges to {% raw %}<span class="math inline">\(\frac12 \langle H,X \rangle_{t_0}\)</span>{% endraw %} in probability. This is the increment-product convergence for continuous semimartingales proved in <a href="#result-2">Remark 2</a>. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_stochastic_2011" class="csl-entry" role="listitem">
Bass, Richard F. 2011. <em>Stochastic Processes</em>. Cambridge Series in Statistical and Probabilistic Mathematics 33. Cambridge ; New York: Cambridge University Press.
</div>
<div id="ref-le_gall_brownian_2016" class="csl-entry" role="listitem">
Le Gall, Jean-François. 2016. <em>Brownian Motion, Martingales, and Stochastic Calculus</em>. 1st ed. 2016. Graduate Texts in Mathematics 274. Cham: Springer International Publishing : Imprint: Springer. <a href="https://doi.org/10.1007/978-3-319-31089-3">https://doi.org/10.1007/978-3-319-31089-3</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-07-10-continuous-semimartingales-and-the-monotone-class-argument %}">Continuous Semimartingales and the Monotone-Class Argument</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-11-02-construction-of-the-stochastic-integral %}">Construction of the Stochastic Integral</a> · Next: <a href="{% post_url 2024-02-18-burkholder-davis-gundy-inequalities %}">Burkholder-Davis-Gundy inequalities</a></p></nav>

</div>
