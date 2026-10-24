---
layout: "post"
title: "Quadratic Variation and the Doob–Meyer Decomposition"
date: "2023-08-23"
tags: ["probability theory", "stochastic processes"]
excerpt: "Construction of quadratic variation and the continuous Doob–Meyer decomposition, including class-D integrability."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/08/23/stochastic-integration-setup-and-quadratic-variation/", "/2023/09/28/prequel-doob-meyer-decomposition/"]
---

<div class="note-content" markdown="0">

<p>For a continuous local martingale {% raw %}<span class="math inline">\(X\)</span>{% endraw %} starting at zero, quadratic variation is the unique continuous increasing process {% raw %}<span class="math inline">\(\langle X\rangle\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\langle X\rangle_0=0\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(X^2-\langle X\rangle\)</span>{% endraw %} is a local martingale. We establish the stopping identities needed for this characterization and prove the continuous Doob–Meyer decomposition.</p>


<p>The filtered probability space satisfies the usual conditions: the filtration is right-continuous, and {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %} contains all subsets of {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-null sets in {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Processes are real-valued unless stated otherwise.</p>


<div id="stochastic-integration" data-note-section="title">

</div>
<p>A filtration {% raw %}<span class="math inline">\((\mathcal F_t)_{t\geq0}\)</span>{% endraw %} is an increasing family of sub-{% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Its left, right, and terminal {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields are</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal F_{t+} \triangleq \bigcap_{s&gt;t} \mathcal F_s ~~,~~ \mathcal F_{t-} \triangleq \sigma\left(\bigcup_{s&lt;t} \mathcal F_s\right) ~~,~~ \mathcal F_{\infty} \triangleq \sigma\left(\bigcup_{t \in \mathbb R_+} \mathcal F_t\right) ~.
\end{aligned}\]</div>{% endraw %}
<p>The usual conditions mean that the filtration is right-continuous and that {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %} contains every subset of every {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-null set in {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. A process {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is adapted when {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}-measurable. Its natural filtration is {% raw %}<span class="math inline">\(\mathcal F_t^X=\sigma(X_s:s\leq t)\)</span>{% endraw %}. A martingale is square-integrable if {% raw %}<span class="math inline">\(X_t\in L^2\)</span>{% endraw %} for each finite {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. We use the stronger term {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded when {% raw %}<span class="math inline">\(\sup_{t\geq0}\mathbb{E} X_t^2&lt;\infty\)</span>{% endraw %}; this is equivalent to being closed by an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} terminal variable, as follows.</p>

<p>For a continuous martingale {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, the following are equivalent: {% raw %}<span class="math inline">\(a\)</span>{% endraw %} {% raw %}<span class="math inline">\(X_t=\mathbb{E}[X_\infty\mid\mathcal F_t]\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(X_\infty\in L^2(\mathcal F_\infty)\)</span>{% endraw %}; {% raw %}<span class="math inline">\(b\)</span>{% endraw %} {% raw %}<span class="math inline">\(\sup_{t\geq0}\mathbb{E} X_t^2&lt;\infty\)</span>{% endraw %}; {% raw %}<span class="math inline">\(c\)</span>{% endraw %} {% raw %}<span class="math inline">\(\mathbb{E}\sup_{t\geq0}|X_t|^2&lt;\infty\)</span>{% endraw %}.</p>

<p>Assume (a). For {% raw %}<span class="math inline">\(s\leq t\)</span>{% endraw %}, the tower property gives {% raw %}<span class="math inline">\(\mathbb{E}[X_t\mid\mathcal F_s]=\mathbb{E}[\mathbb{E}[X_\infty\mid\mathcal F_t]\mid\mathcal F_s]=X_s\)</span>{% endraw %}. Conditional Jensen then gives the uniform bound</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}|X_t|^2 = \mathbb{E}[\mathbb{E}[X_\infty \mid \mathcal F_t]^2] \leq \mathbb{E}[\mathbb{E}[X_\infty^2 \mid \mathcal F_t]] = \mathbb{E}X_\infty^2 &lt; \infty ~.
\end{aligned}\]</div>{% endraw %}
<p> This implies (b).</p>

<p>Assume (b) holds. Then, Doob’s maximal inequality implies for all {% raw %}<span class="math inline">\(N \in \mathbb N\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}\sup_{0 \leq t \leq N} X_t^2 \leq 4 \mathbb{E}X_N^2 ~.
\end{aligned}\]</div>{% endraw %}
<p>Set {% raw %}<span class="math inline">\(Y_N=\sup_{0\leq t\leq N}|X_t|^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=\sup_{t\geq0}|X_t|^2\)</span>{% endraw %}. These variables are measurable because continuity reduces each supremum to a countable dense set. Since {% raw %}<span class="math inline">\(Y_N\uparrow Y\)</span>{% endraw %},</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}Y = \mathbb{E}\liminf_{N \to \infty} Y_N \leq \liminf_{N \to \infty} \mathbb{E}Y_N \leq \liminf_{N \to \infty} 4 \mathbb{E}X_N^2 &lt; \infty ~.
\end{aligned}\]</div>{% endraw %}
<p> This implies (c).</p>

<p>Finally, under {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, the discrete-time martingale convergence theorem gives {% raw %}<span class="math inline">\(X_n\to X_\infty\)</span>{% endraw %} almost surely. The square-integrable dominating variable {% raw %}<span class="math inline">\(\sup_t|X_t|\)</span>{% endraw %} then gives {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} convergence by dominated convergence. For any fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the martingale identity {% raw %}<span class="math inline">\(X_t=\mathbb{E}[X_n\mid\mathcal F_t]\)</span>{% endraw %}, valid for integers {% raw %}<span class="math inline">\(n\geq t\)</span>{% endraw %}, passes to the limit in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(X_t=\mathbb{E}[X_\infty\mid\mathcal F_t]\)</span>{% endraw %}, proving {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. ◻</p>

<p>For an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded continuous martingale, the identity {% raw %}<span class="math inline">\(\mathbb E X_\tau=\mathbb E X_0\)</span>{% endraw %} holds at every finite stopping time {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. Here are the approximation details. For a stopping time taking finitely many grid values, write the stopped variable as {% raw %}<span class="math inline">\(X_0\)</span>{% endraw %} plus the sum of increments multiplied by the events that stopping has not yet occurred; each multiplier is measurable before its increment, whose conditional expectation is zero. For a general finite {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, round {% raw %}<span class="math inline">\(\tau\wedge n\)</span>{% endraw %} upwards to the grid of mesh {% raw %}<span class="math inline">\(2^{-n}\)</span>{% endraw %}. The resulting finite-valued stopping times converge almost surely to {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. Continuity gives convergence of the sampled values, and domination by {% raw %}<span class="math inline">\(\sup_{t\geq0}|X_t|\in L^2\)</span>{% endraw %} gives convergence in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. This proves the expectation identity used next.</p>

<p>Now let {% raw %}<span class="math inline">\(S\leq T\)</span>{% endraw %} be finite stopping times. To prove {% raw %}<span class="math inline">\(\mathbb E[X_T\mid\mathcal F_S]=X_S\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(A\in\mathcal F_S\)</span>{% endraw %} and define</p>


{% raw %}<div class="math display">\[\begin{aligned}
    U(\omega) = S(\omega) \mathbb 1_A (\omega) + T(\omega) \mathbb 1_{A^c} (\omega) ~.
\end{aligned}\]</div>{% endraw %}
<p> Therefore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \{U \leq t\} = ( \{S \leq t\} \cap A ) \cup ( \{T \leq t\} \cap A^c ) \in \mathcal F_t ~.
\end{aligned}\]</div>{% endraw %}
<p> This means {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is itself a stopping time. The expectation identity just proved then implies </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}X_0 = \mathbb{E}X_U = \mathbb{E}[X_S ; A] + \mathbb{E}[X_T ; A^c] ~~,~~ \mathbb{E}X_0 = \mathbb{E}X_T = \mathbb{E}[X_T ; A] + \mathbb{E}[X_T ; A^c] ~.
\end{aligned}\]</div>{% endraw %}
<p>Subtracting the two identities gives {% raw %}<span class="math inline">\(\mathbb E[X_S\mathbf1_A]=\mathbb E[X_T\mathbf1_A]\)</span>{% endraw %}, which characterizes the conditional expectation. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>


<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1.</strong> Optional sampling also gives the following stopping properties:</p>


<ol>
<li><p>Suppose {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is an L²-bounded martingale and {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is a stopping time. Then, {% raw %}<span class="math inline">\(X_{t \wedge T}\)</span>{% endraw %} is a martingale with respect to the filtration {% raw %}<span class="math inline">\(\{F_{t \wedge T}\}\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(\mathbb{E}X_T = 0\)</span>{% endraw %} for every bounded stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a process adapted to {% raw %}<span class="math inline">\(\{\mathcal F_t\}_{t \geq 0}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} is integrable for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} is a martingale.</p></li>
</ol>
<p>Optional sampling lets us use the martingale identity at random times. The next calculation records the corresponding second-moment identity, which will later control stopped increments.</p>

</div>
<p>Under the same {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} assumptions, expand the stopped increment and condition on {% raw %}<span class="math inline">\(\mathcal F_S\)</span>{% endraw %}:</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}[(X_T - X_S)^2 \mid \mathcal F_S] &amp;= \mathbb{E}[X_T^2 \mid \mathcal F_S] + X_S^2 - 2 X_S E[X_T \mid \mathcal F_S] \\
    &amp;= \mathbb{E}[X_T^2 \mid \mathcal F_S] - X_S^2 = \mathbb{E}[X_T^2 - X_S^2 \mid \mathcal F_S] ~.
\end{aligned}\]</div>{% endraw %}
<p> So taking expectations again, we have {% raw %}<span class="math inline">\(\mathbb{E}[(X_T - X_S)^2] = \mathbb{E}X_T^2 - \mathbb{E}X_S^2\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> A zero-start continuous local martingale of locally finite variation is identically zero. Stop it when its total variation reaches {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and at time {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The stopped process is a bounded martingale. Orthogonality of its increments gives {% raw %}<span class="math inline">\(\mathbb{E}X_T^2=\mathbb{E}\sum_i(\Delta X_i)^2\leq\mathbb{E}[\max_i|\Delta X_i|\operatorname{Var}_{[0,T]}(X)]\to0\)</span>{% endraw %} along vanishing-mesh partitions, by continuity and the stopped bounds. Remove the stops, and then use rational times and continuity. This also proves uniqueness whenever two continuous compensators differ by a local martingale.</p>

</div>
<h3 data-note-section="1" id="prequel-doob-meyer-decomposition">1. Prequel: Doob-Meyer Decomposition</h3>
<span id="thm:quadratic-variation"></span>
<p>A continuous local martingale {% raw %}<span class="math inline">\(X\)</span>{% endraw %} starting at zero has a unique continuous adapted increasing process {% raw %}<span class="math inline">\(\langle X\rangle\)</span>{% endraw %}, starting at zero, such that {% raw %}<span class="math inline">\(X^2-\langle X\rangle\)</span>{% endraw %} is a local martingale. If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded, the compensated square is a true martingale. For Brownian motion, {% raw %}<span class="math inline">\(\langle B\rangle_t=t\)</span>{% endraw %}. Brownian motion is square-integrable at every finite time; it is not {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}-bounded over the entire half-line. Stopping at a deterministic horizon supplies the global bound used in the initial integral construction.</p>

<p>For a bounded zero-start martingale, define the left-endpoint sums {% raw %}<span class="math inline">\(Y_t^\pi=\sum_{[u,v]\in\pi}X_u(X_{t\wedge v}-X_{t\wedge u})\)</span>{% endraw %}. The construction of quadratic variation begins by showing that these sums are Cauchy in the expected squared uniform norm. On a common refinement {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, orthogonality and Cauchy–Schwarz give</p>


{% raw %}<div class="math display">\[\mathbb{E}|Y_T^\pi-Y_T^\sigma|^2\leq
\left(\mathbb{E}\max_j|D_j|^4\right)^{1/2}\left(\mathbb{E} Q_\rho^2\right)^{1/2},\qquad
Q_\rho=\sum_j(\Delta X_j)^2,\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(D_j\)</span>{% endraw %} is the difference between the two left-endpoint coefficients. If {% raw %}<span class="math inline">\(|X|\leq D\)</span>{% endraw %}, expansion and conditional orthogonality give {% raw %}<span class="math inline">\(\mathbb{E} Q_\rho^2\leq12D^4\)</span>{% endraw %}; continuity makes the first factor tend to zero. Doob’s inequality then gives a continuous martingale limit {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. The identity {% raw %}<span class="math inline">\(X_{t_i}^2-2Y_{t_i}^\pi=\sum_{j\leq i}(\Delta X_j)^2\)</span>{% endraw %} makes {% raw %}<span class="math inline">\(A=X^2-2Y\)</span>{% endraw %} increasing, by approximation of times with partition points. Remark 2 proves uniqueness. Continuous hitting times of {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %}, with deterministic cutoffs, extend the construction to local martingales. The full common-refinement estimates and the treatment of nonzero initial values appear in <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}#thm:cts-semimartingale-limit-characterization">Theorem 2 and Lemma 3</a>.</p>

<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3.</strong> The exact increment identity</p>

{% raw %}<div class="math display">\[\Delta(XY)=X_u\Delta Y+Y_u\Delta X+\Delta X\Delta Y\]</div>{% endraw %}

<p>explains quadratic covariation. For smooth paths on a partition of {% raw %}<span class="math inline">\([0,t]\)</span>{% endraw %} into {% raw %}<span class="math inline">\(n\)</span>{% endraw %} pieces of length {% raw %}<span class="math inline">\(t/n\)</span>{% endraw %}, the sum of increment products tends to zero. For {% raw %}<span class="math inline">\(X=Y=B\)</span>{% endraw %}, its expectation is {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and its variance is {% raw %}<span class="math inline">\(2t^2/n\)</span>{% endraw %}, so it converges in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} to {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. For independent Brownian motions the covariance sum instead converges to zero: its mean is zero and its variance is {% raw %}<span class="math inline">\(t^2/n\)</span>{% endraw %}. Thus nonzero individual variations do not force nonzero mutual covariation. Polarisation defines {% raw %}<span class="math inline">\(\langle X,Y\rangle=(\langle X+Y\rangle-\langle X-Y\rangle)/4\)</span>{% endraw %}.</p>

</div>
<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4 (partitions by stopping times).</strong> Let {% raw %}<span class="math inline">\(0=\tau_0^n\leq\tau_1^n\leq\cdots\)</span>{% endraw %} be locally finite partitions by stopping times, exhausting the time axis, whose maximal interval length on each compact interval tends to zero in probability. For a continuous semimartingale, the squared-increment sums, with the last increment cut at the observation time, converge uniformly on compact intervals in probability to quadratic variation. For the local-martingale part, the error is {% raw %}<span class="math inline">\(2\int_0^t(M_s-M_{\pi_n(s)})\,dM_s\)</span>{% endraw %}, by the product rule, where {% raw %}<span class="math inline">\(\pi_n(s)\)</span>{% endraw %} is the left endpoint of the partition interval containing {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. Stop so that {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and its bracket are bounded. Continuity and the mesh assumption make {% raw %}<span class="math inline">\(\sup_{s\leq T}|M_s-M_{\pi_n(s)}|\xrightarrow{P}0\)</span>{% endraw %} in probability. Boundedness then gives convergence of its second moment; the isometry and Doob’s inequality give uniform convergence of the integral error in probability. Finite-variation and mixed terms vanish by the maximum-increment times variation bound. Polarisation proves the covariation assertion.</p>


</div>
<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5 (Uniform integrability on a finite horizon).</strong> If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a càdlàg martingale and {% raw %}<span class="math inline">\(t&lt;\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X_\tau=\mathbb E[X_t\mid\mathcal F_\tau]\)</span>{% endraw %} for every stopping time {% raw %}<span class="math inline">\(\tau\leq t\)</span>{% endraw %}. Conditional expectations of a fixed integrable variable are uniformly integrable, so {% raw %}<span class="math inline">\(\{X_\tau:\tau\leq t\}\)</span>{% endraw %} is uniformly integrable. This is a statement about martingales; a local martingale need not have this property.</p>


</div>
<p>A process {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is of class D if {% raw %}<span class="math inline">\(\{Z_T:T&lt;\infty\text{ a stopping time}\}\)</span>{% endraw %} is uniformly integrable.</p>

<p><strong>Theorem (Continuous Doob–Meyer decomposition).</strong> Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} be a continuous adapted supermartingale of class D. There is a unique decomposition</p>

{% raw %}<div class="math display">\[Z=M-A,\qquad A_0=0,\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is continuous, adapted, increasing, and satisfies {% raw %}<span class="math inline">\(\mathbb E A_\infty&lt;\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a continuous uniformly integrable martingale. Without the global class-D assumption, the construction gives a local decomposition.</p>


<p><em>Proof.</em> We first construct the decomposition for a bounded process that is constant after a deterministic time. A comparison estimate makes the approximating compensators Cauchy. Localization then gives the general decomposition, and class D yields the global integrability assertions. The continuous approximation method is described in Bass (2011, Theorem 9.12).</p>


<p>We first prove a comparison estimate. Suppose {% raw %}<span class="math inline">\(A^1,A^2\)</span>{% endraw %} are continuous adapted increasing processes, start at zero, and satisfy {% raw %}<span class="math inline">\(\mathbb{E}[A^j_\infty-A^j_t\mid\mathcal F_t]\leq K\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(C=A^1+A^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B=A^1-A^2\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(V\geq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V\in L^2\)</span>{% endraw %}, with</p>

{% raw %}<div class="math display">\[\left|\mathbb{E}[B_\infty-B_t\mid\mathcal F_t]\right|\leq\mathbb{E}[V\mid\mathcal F_t].\]</div>{% endraw %}

<p>The conditional bounds extend to stopping times by approximation from above and right-continuous versions of the closed martingales. For a single {% raw %}<span class="math inline">\(A^j\)</span>{% endraw %}, apply this at its first passage above {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Continuity and Tonelli give</p>

{% raw %}<div class="math display">\[\mathbb{E}(A^j_\infty-x)_+\leq K\mathbb P(A^j_\infty&gt;x),\qquad
\frac12\mathbb{E}(A^j_\infty)^2\leq K\mathbb{E}A^j_\infty\leq K^2.\]</div>{% endraw %}

<p>In particular {% raw %}<span class="math inline">\(\|C_\infty\|_2\leq2\sqrt2K\)</span>{% endraw %}. The pathwise integration identity {% raw %}<span class="math inline">\(B_\infty^2=2\int_0^\infty(B_\infty-B_t)\,dB_t\)</span>{% endraw %} can be approximated by sums using right endpoints. Their increments are measurable at those endpoints, so conditioning at the right endpoint yields</p>

{% raw %}<div class="math display">\[\mathbb{E}B_\infty^2\leq2\mathbb{E}[V C_\infty]\leq4\sqrt2K\|V\|_2.\]</div>{% endraw %}

<p>To justify the limiting sums, first restrict to a finite horizon and refine the partition. Their absolute values are dominated by a constant times {% raw %}<span class="math inline">\(C_\infty^2\)</span>{% endraw %}, which is integrable. For the conditional bound use {% raw %}<span class="math inline">\(|\Delta B|\leq\Delta C\)</span>{% endraw %}; the corresponding expected sum equals at most {% raw %}<span class="math inline">\(\mathbb{E}[V C_\infty]\)</span>{% endraw %}. Then let the horizon increase. Finally {% raw %}<span class="math inline">\(B_t=\mathbb{E}[B_\infty\mid\mathcal F_t]-\mathbb{E}[B_\infty-B_t\mid\mathcal F_t]\)</span>{% endraw %}, so Doob’s inequality and {% raw %}<span class="math inline">\((x+y)^2\leq2x^2+2y^2\)</span>{% endraw %} give</p>

{% raw %}<div class="math display">\[\mathbb{E}\sup_{t\geq0}|B_t|^2\leq8\mathbb{E}V^2+32\sqrt2K\|V\|_2.\]</div>{% endraw %}

<p>For comparison with continuous time, the discrete decomposition has a simple form. For a supermartingale {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(a_n=Z_n-\mathbb{E}[Z_{n+1}\mid\mathcal F_n]\geq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_n=\sum_{j&lt;n}a_j\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(A_{n+1}\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_n\)</span>{% endraw %}-measurable and {% raw %}<span class="math inline">\(M_n=Z_n+A_n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\mathbb{E}[M_{n+1}\mid\mathcal F_n]=M_n\)</span>{% endraw %}.</p>

<p>Now assume first that {% raw %}<span class="math inline">\(|Z_t|\leq N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_t=Z_N\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t\geq N\)</span>{% endraw %}. Define its measurable modulus {% raw %}<span class="math inline">\(V_\delta=\sup_{|s-t|\leq\delta}|Z_s-Z_t|\)</span>{% endraw %}, with the supremum taken over nonnegative rational times. Continuity and eventual constancy give {% raw %}<span class="math inline">\(V_\delta\to0\)</span>{% endraw %} almost surely and in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(h&gt;0\)</span>{% endraw %}, take a jointly measurable adapted version {% raw %}<span class="math inline">\(Q_s^h\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\mathbb{E}[Z_{s+h}\mid\mathcal F_s]\)</span>{% endraw %}, and set</p>

{% raw %}<div class="math display">\[A_t^h=\frac1h\int_0^t(Z_s-Q_s^h)\,ds.\]</div>{% endraw %}

<p>Such a version is constructed below. Nonnegativity holds for almost every {% raw %}<span class="math inline">\((\omega,s)\)</span>{% endraw %}, by the supermartingale inequality and Fubini. Thus {% raw %}<span class="math inline">\(A^h\)</span>{% endraw %} has continuous increasing adapted paths, starts at zero, and is constant after {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Conditional Fubini and telescoping the finite time integrals give</p>

{% raw %}<div class="math display">\[\mathbb{E}[A_\infty^h-A_t^h\mid\mathcal F_t]
=\mathbb{E}\left[\frac1h\int_t^{t+h}Z_s\,ds-Z_N\,\middle|\,\mathcal F_t\right].\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(|Z|\leq N\)</span>{% endraw %}, the conditional tail is bounded by {% raw %}<span class="math inline">\(2N\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;k&lt;h\)</span>{% endraw %}, the difference of the two conditional tails is bounded in absolute value by {% raw %}<span class="math inline">\(\mathbb E[V_h\mid\mathcal F_t]\)</span>{% endraw %}. The comparison estimate therefore gives</p>


{% raw %}<div class="math display">\[\mathbb{E}\sup_{t\geq0}|A_t^h-A_t^k|^2\longrightarrow0\qquad(h,k\downarrow0).\]</div>{% endraw %}

<p>Completeness in the expected squared uniform norm gives a limit {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. A subsequence converges uniformly almost surely, so {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is continuous, increasing, adapted and starts at zero. Passing to the limit in the conditional-tail identity yields</p>

{% raw %}<div class="math display">\[\mathbb{E}[A_\infty-A_t\mid\mathcal F_t]=Z_t-\mathbb{E}[Z_N\mid\mathcal F_t],
\qquad Z_t+A_t=\mathbb{E}[Z_N+A_\infty\mid\mathcal F_t].\]</div>{% endraw %}

<p>Hence {% raw %}<span class="math inline">\(M=Z+A\)</span>{% endraw %} is a true martingale in the bounded case.</p>

<p>To construct the jointly measurable version, set {% raw %}<span class="math inline">\(Y_t=Z_{t+h}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_t^n=Y_{j2^{-n}}\)</span>{% endraw %} on {% raw %}<span class="math inline">\([j2^{-n},(j+1)2^{-n})\)</span>{% endraw %}. On each such interval choose a right-continuous version of the bounded martingale {% raw %}<span class="math inline">\(\mathbb E[Y_{j2^{-n}}\mid\mathcal F_t]\)</span>{% endraw %}, and join these versions to obtain {% raw %}<span class="math inline">\(Q^n\)</span>{% endraw %}. This process is right-continuous, adapted, and jointly measurable. Conditional domination at rational times, followed by right-continuity, gives, for {% raw %}<span class="math inline">\(n&gt;m\)</span>{% endraw %},</p>


<span id="eq:sup-comparisons"></span>
{% raw %}<div class="math display">\[\sup_t|Q_t^n-Q_t^m|\leq\sup_t\mathbb{E}[V_{2^{-m}}\mid\mathcal F_t].\tag{1}\]</div>{% endraw %}

<p>Doob’s inequality makes the right side tend to zero in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. A subsequence therefore converges uniformly almost surely to a right-continuous adapted process {% raw %}<span class="math inline">\(Q^h\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} contraction of conditional expectation identifies its limit as {% raw %}<span class="math inline">\(\mathbb{E}[Y_t\mid\mathcal F_t]\)</span>{% endraw %}. This supplies the required version. It need not be continuous: the time integral defining {% raw %}<span class="math inline">\(A^h\)</span>{% endraw %} is continuous regardless.</p>

<p>For general {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, first restrict to the {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-measurable events {% raw %}<span class="math inline">\(E_m=\{|Z_0|\leq m\}\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(E_m\)</span>{% endraw %}, stop at {% raw %}<span class="math inline">\(\tau_{m,n}=\inf\{t\geq0:|Z_t|\geq n\}\wedge n\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(n&gt;m\)</span>{% endraw %}. The process {% raw %}<span class="math inline">\(\mathbb1_{E_m}Z^{\tau_{m,n}}\)</span>{% endraw %} is a bounded continuous supermartingale, so it has the decomposition just constructed. Optional sampling is valid for the class-D process; for a merely local assertion one works with bounded finite-horizon stops. Two decompositions agree wherever their stopped original processes agree: their difference is a zero-start continuous finite-variation local martingale and vanishes by Remark 2. Thus the decompositions on {% raw %}<span class="math inline">\(E_m\)</span>{% endraw %} agree as {% raw %}<span class="math inline">\(m,n\)</span>{% endraw %} increase. Patching defines continuous {% raw %}<span class="math inline">\(A,M\)</span>{% endraw %} globally, with {% raw %}<span class="math inline">\(A_0=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(M\)</span>{% endraw %} a local martingale. For example, on {% raw %}<span class="math inline">\(E_n^c\)</span>{% endraw %} use localising time zero, and on {% raw %}<span class="math inline">\(E_n\)</span>{% endraw %} use the level {% raw %}<span class="math inline">\(n+1\)</span>{% endraw %} stop with time cutoff {% raw %}<span class="math inline">\(n\)</span>{% endraw %}; the unmodified initial value on the complement is integrable. These times increase to infinity and give integrable stopped martingales. The same finite-variation argument proves uniqueness. ◻</p>

<p>It remains to prove the global assertions under class D. Let {% raw %}<span class="math inline">\(\tau_n\uparrow\infty\)</span>{% endraw %} be a localizing sequence for the continuous local martingale {% raw %}<span class="math inline">\(M=Z+A\)</span>{% endraw %}, chosen with deterministic cutoffs. Put {% raw %}<span class="math inline">\(K=\sup_{T&lt;\infty}\mathbb E|Z_T|&lt;\infty\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t&lt;\infty\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb E A_{t\wedge\tau_n}
=\mathbb E M_0-\mathbb E Z_{t\wedge\tau_n}
\leq\mathbb E|Z_0|+K.\]</div>{% endraw %}

<p>Monotone convergence, first in {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and then in {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(\mathbb E A_\infty\leq\mathbb E|Z_0|+K\)</span>{% endraw %}. The family {% raw %}<span class="math inline">\(\{A_T:T&lt;\infty\}\)</span>{% endraw %} is dominated by {% raw %}<span class="math inline">\(A_\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\{Z_T:T&lt;\infty\}\)</span>{% endraw %} is uniformly integrable by hypothesis. Their sums {% raw %}<span class="math inline">\(\{M_T:T&lt;\infty\}\)</span>{% endraw %} are therefore uniformly integrable. Passing to the limit in the stopped conditional-martingale identities shows that {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a martingale. Its deterministic-time family is uniformly integrable, which proves the theorem's remaining assertion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bass_probabilistic_1995" class="csl-entry" role="listitem">
Bass, Richard F. 1995. <em>Probabilistic Techniques in Analysis</em>. Springer Series in Statistics. New York: Springer-Verlag.
</div>
<div id="ref-bass_stochastic_2011" class="csl-entry" role="listitem">
———. 2011. <em>Stochastic Processes</em>. Cambridge Series in Statistical and Probabilistic Mathematics 33. Cambridge ; New York: Cambridge University Press.
</div>
<div id="ref-karatzas_brownian_1996" class="csl-entry" role="listitem">
Karatzas, Ioannis, and Steven E. Shreve. 1996. <em>Brownian Motion and Stochastic Calculus</em>. 2nd ed. Graduate Texts in Mathematics 113. New York: Springer.
</div>
<div id="ref-meyer_decomposition_1962" class="csl-entry" role="listitem">
Meyer, P. A. 1962. <span>“A Decomposition Theorem for Supermartingales.”</span> <em>Illinois Journal of Mathematics</em> 6 (2). <a href="https://doi.org/10.1215/ijm/1255632318">https://doi.org/10.1215/ijm/1255632318</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a> · Next: <a href="{% post_url 2023-11-02-construction-of-the-stochastic-integral %}">Construction of the Stochastic Integral</a></p></nav>

</div>
