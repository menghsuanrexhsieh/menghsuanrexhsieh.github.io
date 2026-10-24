---
layout: "post"
title: "Girsanov’s Theorem"
date: "2024-03-24"
tags: ["probability theory", "stochastic processes"]
excerpt: "Density processes, stochastic logarithms, and Brownian drift changes under equivalent probability measures."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Throughout, {% raw %}<span class="math inline">\((\Omega,\mathcal F,(\mathcal F_t),\mathbb P)\)</span>{% endraw %} satisfies the usual conditions. We first consider equivalent probability measures on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}, and then state the finite-horizon version used to change the drift of Brownian motion.</p>


<div id="girsanovs-theorem" data-note-section="title">

</div>
<p>A density process changes conditional expectations and hence the martingale property. The drift correction in Girsanov's theorem is determined by the covariation between the original martingale and the stochastic logarithm of the density.</p>


<h2 id="density-processes">Density processes</h2>

<p>Assume {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %} is a probability measure on {% raw %}<span class="math inline">\((\Omega, \mathcal F)\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mathbb Q\ll \mathbb P\)</span>{% endraw %} on the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t \in [0,\infty]\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D_t = \frac{\dif \mathbb Q}{\dif \mathbb P}\bigg|_{\mathcal F_t}
\end{aligned}\]</div>{% endraw %}
<p> as the Radon-Nikodym derivative of {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %} on the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}. Then, the process {% raw %}<span class="math inline">\(\{D_t\}_{t \geq 0}\)</span>{% endraw %} is a uniformly integrable martingale, and has a càdlàg modification. For this modification, using {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %} as above, we have that for every stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(D_T = \frac{\dif \mathbb Q}{\dif \mathbb P}\bigg|_{\mathcal F_T}\)</span>{% endraw %}. Then, if {% raw %}<span class="math inline">\(\mathbb Q\ll \mathbb P\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb P\ll \mathbb Q\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\inf_{t \geq 0} D_t &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-almost surely.</p>

<p><em>Proof.</em> For {% raw %}<span class="math inline">\(A\in\mathcal F_t\)</span>{% endraw %},</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb Q(A) = \mathbb{E}_{\mathbb Q} \mathbb 1_A = \mathbb{E}_{\mathbb P} [\mathbb 1_A D_\infty] = \mathbb{E}_{\mathbb P} [\mathbb 1_A \mathbb{E}_{\mathbb P}[D_\infty \mid \mathcal F_t]] ~.
\end{aligned}\]</div>{% endraw %}
<p>The Radon–Nikodym characterization gives {% raw %}<span class="math inline">\(D_t=\mathbb E_{\mathbb P}[D_\infty\mid\mathcal F_t]\)</span>{% endraw %}. Conditional expectations of one integrable variable are uniformly integrable, by <a href="{% post_url 2022-01-26-martingales %}#result-13">the uniform-integrability lemma</a>. We give the regularization and stopping arguments explicitly.</p>

<p>On each finite rational time grid, apply the <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">maximal and upcrossing inequalities</a> to the nonnegative martingale {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Increasing the grids, the maximal inequality gives {% raw %}<span class="math inline">\(\mathbb P(\sup_{q\in\mathbb Q\cap[0,N]}D_q&gt;R)\leq1/R\)</span>{% endraw %}, and the expected number of upcrossings of any rational interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} is bounded uniformly in the grid. Hence, outside one null set, the rational-time values are bounded on every compact interval and have finite upcrossing counts for every rational {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. The rational-time values therefore have finite left and right limits everywhere: failure of a one-sided limit would give infinitely many crossings of two rational levels between its lower and upper limits. The right-limit extension is right-continuous with left limits, since failure of either property would again give such an oscillating sequence of rational times.</p>

<p>Define {% raw %}<span class="math inline">\(\overline D_t=\lim_{q\downarrow t,\ q\in\mathbb Q}D_q\)</span>{% endraw %}. Right-continuity of the filtration makes {% raw %}<span class="math inline">\(\overline D_t\)</span>{% endraw %} measurable with respect to {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}. Uniform integrability gives convergence in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} along a rational sequence decreasing to {% raw %}<span class="math inline">\(t\)</span>{% endraw %}; passing to the limit in {% raw %}<span class="math inline">\(\mathbb E[D_q\mid\mathcal F_t]=D_t\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\overline D_t=D_t\)</span>{% endraw %} almost surely. Thus this extension is a càdlàg modification. We use it from now on.</p>

<p>For a stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(T=\infty\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(T_n=2^{-n}\lceil2^nT\rceil\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(T_n=\infty\)</span>{% endraw %} when {% raw %}<span class="math inline">\(T=\infty\)</span>{% endraw %}, and use the prescribed value {% raw %}<span class="math inline">\(D_\infty\)</span>{% endraw %} there. On each dyadic grid, <a href="{% post_url 2022-01-26-martingales %}#uniform-integrability-and-stopping">optional sampling for closed discrete martingales</a> gives {% raw %}<span class="math inline">\(D_{T_n}=\mathbb E[D_\infty\mid\mathcal F_{T_n}]\)</span>{% endraw %}. The terminal field of each grid is {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}, since the filtration is increasing and the grid is unbounded. These conditional expectations are uniformly integrable. Right-continuity gives {% raw %}<span class="math inline">\(D_{T_n}\to D_T\)</span>{% endraw %} almost surely, including the event {% raw %}<span class="math inline">\(\{T=\infty\}\)</span>{% endraw %} where the values already agree. Thus convergence holds in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(A\in\mathcal F_T\subseteq\mathcal F_{T_n}\)</span>{% endraw %}, pass to the limit in {% raw %}<span class="math inline">\(\mathbb E[D_{T_n}\mathbf1_A]=\mathbb E[D_\infty\mathbf1_A]\)</span>{% endraw %}. This proves</p>



{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb Q(A) = \mathbb{E}_{\mathbb Q} \mathbb 1_A = \mathbb{E}_{\mathbb P} [\mathbb 1_A D_\infty] = \mathbb{E}_{\mathbb P} [\mathbb 1_A \mathbb{E}_{\mathbb P}[D_\infty \mid \mathcal F_T]] = \mathbb{E}_{\mathbb P} [\mathbb 1_A D_T] ~.
\end{aligned}\]</div>{% endraw %}
<p> Finally, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    T_\varepsilon = \inf \{t \geq 0 : D_t &lt; \varepsilon\} ~.
\end{aligned}\]</div>{% endraw %}
<p> Because {% raw %}<span class="math inline">\(T_\varepsilon\)</span>{% endraw %} is the first hitting time of an open set by a càdlàg process, {% raw %}<span class="math inline">\(T_\varepsilon\)</span>{% endraw %} is a stopping time. Since {% raw %}<span class="math inline">\(\{T_\varepsilon &lt; \infty\}\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_{T_\varepsilon}\)</span>{% endraw %}-measurable, {% raw %}<span class="math inline">\(\mathbb Q(T_\varepsilon &lt; \infty) = \mathbb{E}_{\mathbb P} [\mathbb 1_{\{T_\varepsilon &lt; \infty\}} D_{T_\varepsilon}] \leq \varepsilon\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(D_{T_\varepsilon} \leq \varepsilon\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{T_\varepsilon &lt; \infty\}\)</span>{% endraw %} (by the right-continuity of sample paths). It then follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb Q\left( \bigcap_{n \geq 1} \{T_{\frac1n} &lt; \infty\} \right) = 0 ~.
\end{aligned}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\mathbb P\ll \mathbb Q\)</span>{% endraw %}, the same conclusion follows. This implies {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-almost surely, there exists an integer {% raw %}<span class="math inline">\(n \geq 1\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(T_{\frac1n} = \infty\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<h2 id="stochastic-logarithm">The stochastic logarithm</h2>

<p>The stochastic logarithm gives a convenient representation of a strictly positive continuous local martingale {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Its initial value need not be one. Define the zero-started continuous local martingale</p>

{% raw %}<div class="math display">\[L_t=\int_0^tD_s^{-1}\,\mathrm dD_s,\qquad L_0=0.\]</div>{% endraw %}

<p>On each finite interval, positivity and continuity allow localization away from zero, so the reciprocal integrand is locally bounded. Itō’s formula gives</p>

{% raw %}<div class="math display">\[\log D_t-\log D_0
=L_t-\frac12\int_0^tD_s^{-2}\,\mathrm d\langle D\rangle_s
=L_t-\frac12\langle L\rangle_t.\]</div>{% endraw %}

<p>Thus the representation is</p>

{% raw %}<div class="math display">\[D_t=D_0\exp\left(L_t-\frac12\langle L\rangle_t\right)=D_0\mathcal E(L)_t.\]</div>{% endraw %}

<p>Conversely, Itō’s formula applied to the exponential gives {% raw %}<span class="math inline">\(\mathrm dD_t=D_t\,\mathrm dL_t\)</span>{% endraw %}, which recovers the displayed integral for {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. This proves uniqueness among continuous local martingales starting at zero. The factor {% raw %}<span class="math inline">\(D_0\)</span>{% endraw %} disappears only when the density is normalized to one at time zero. ◻</p>

<h2 id="girsanov-local-martingales">Change of measure</h2>

<p><strong>Theorem (Girsanov).</strong> Let {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %} be equivalent on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. Suppose their density process {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is continuous, and write {% raw %}<span class="math inline">\(D=D_0\mathcal E(L)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(L_0=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a continuous local martingale under {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\widetilde M=M-\langle M,L\rangle\]</div>{% endraw %}

<p>is a continuous local martingale under {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}.</p>


<p><em>Proof.</em> We first establish the stopped change-of-measure identity, and then apply the product rule. Equivalence makes the continuous density strictly positive, so its stochastic logarithm is defined on every finite interval.</p>


<p>The measure-change step is the following conditional-expectation identity: if {% raw %}<span class="math inline">\((XD)^T\)</span>{% endraw %} is a martingale with respect to {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X^T\)</span>{% endraw %} is a martingale under {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}. The density formula at a stopping time allows both integrability and the martingale identity to be checked under the original measure. Since {% raw %}<span class="math inline">\(\mathbb{E}_{\mathbb Q} |X_{T \wedge t}| = \mathbb{E}_{\mathbb P} |X_{T \wedge t} D_{T \wedge t}| &lt; \infty\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(X^T_t \in L^1(\mathbb Q)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Then, for {% raw %}<span class="math inline">\(s &lt; t\)</span>{% endraw %}, pick {% raw %}<span class="math inline">\(A \in \mathcal F_s\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(A \cap \{T &gt; s\} \in \mathcal F_s\)</span>{% endraw %}, we have, because {% raw %}<span class="math inline">\((XD)^T\)</span>{% endraw %} is a martingale under {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_{\mathbb P} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge t} D_{T \wedge t}] = \mathbb{E}_{\mathbb P} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge s} D_{T \wedge s}] ~.
\end{aligned}\]</div>{% endraw %}
<p> Because </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D_{T \wedge t} = \frac{\dif \mathbb Q}{\dif \mathbb P}\bigg|_{\mathcal F_{T \wedge t}} ~~,~~ D_{T \wedge s} = \frac{\dif \mathbb Q}{\dif \mathbb P}\bigg|_{\mathcal F_{T \wedge s}} ~,
\end{aligned}\]</div>{% endraw %}
<p> and {% raw %}<span class="math inline">\(A \cap \{T &gt; s\} \in \mathcal F_{T \wedge s} \subset \mathcal F_{T \wedge t}\)</span>{% endraw %}, it follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_{\mathbb Q} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge t}] = \mathbb{E}_{\mathbb Q} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge s}] ~.
\end{aligned}\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{T\leq s\}\)</span>{% endraw %}, the two stopped values coincide. Adding the identities on {% raw %}<span class="math inline">\(\{T&gt;s\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{T\leq s\}\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb E_{\mathbb Q}[X_{T\wedge t}\mathbf1_A]=\mathbb E_{\mathbb Q}[X_{T\wedge s}\mathbf1_A]\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(X^T\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}-martingale. Applying this argument to a localizing sequence shows that {% raw %}<span class="math inline">\(XD\)</span>{% endraw %} being a continuous {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-local martingale implies that {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a continuous {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}-local martingale. The localizing times tend to infinity under both measures because the measures are equivalent.</p>


<p>It remains to identify the correction that makes the product with the density a local martingale. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale under {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}, starting at zero, and set {% raw %}<span class="math inline">\(\widetilde M=M-\langle M,L\rangle\)</span>{% endraw %}. The product formula uses covariation of the two factors:</p>

{% raw %}<div class="math display">\[\widetilde M_tD_t=\int_0^t\widetilde M_s\,\mathrm dD_s+
\int_0^tD_s\,\mathrm d\widetilde M_s+\langle\widetilde M,D\rangle_t.\]</div>{% endraw %}

<p>A continuous finite-variation process has zero covariation with a continuous semimartingale, so {% raw %}<span class="math inline">\(\langle\widetilde M,D\rangle=\langle M,D\rangle\)</span>{% endraw %}. The integral definition of {% raw %}<span class="math inline">\(L\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[\mathrm d\langle M,L\rangle_s=D_s^{-1}\,\mathrm d\langle M,D\rangle_s.\]</div>{% endraw %}

<p>Substitute these two identities into the product formula:</p>

{% raw %}<div class="math display">\[\begin{aligned}
\widetilde M_tD_t
&amp;=\int_0^t\widetilde M_s\,\mathrm dD_s+\int_0^tD_s\,\mathrm dM_s
-\int_0^tD_s\,\mathrm d\langle M,L\rangle_s+\langle M,D\rangle_t\\
&amp;=\int_0^t\widetilde M_s\,\mathrm dD_s+\int_0^tD_s\,\mathrm dM_s.
\end{aligned}\]</div>{% endraw %}

<p>The remaining integrals are continuous local martingales under {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}, since their continuous integrands are locally bounded. Their sum starts at zero. The measure-change argument above therefore makes {% raw %}<span class="math inline">\(\widetilde M\)</span>{% endraw %} a continuous local martingale under {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}. Starting at zero avoids an additional initial-integrability hypothesis; one may add an {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-measurable initial variable if it is integrable under both measures. ◻</p>

<h2 id="finite-horizon-brownian-change">Brownian drift changes on a finite horizon</h2>
<p><strong>Corollary.</strong> Fix {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(B\)</span>{% endraw %} be a {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %}-Brownian motion and let {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} be predictable with {% raw %}<span class="math inline">\(\int_0^T\theta_s^2\,ds&lt;\infty\)</span>{% endraw %} almost surely. Define</p>

{% raw %}<div class="math display">\[D_t=\exp\left(\int_0^t\theta_s\,dB_s-\frac12\int_0^t\theta_s^2\,ds\right),\qquad 0\leq t\leq T.\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(\mathbb E_{\mathbb P}D_T=1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(d\mathbb Q=D_T\,d\mathbb P\)</span>{% endraw %} defines a probability measure equivalent to {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathcal F_T\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[\widetilde B_t=B_t-\int_0^t\theta_s\,ds,\qquad 0\leq t\leq T,\]</div>{% endraw %}

<p>is a Brownian motion under {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}, relative to the same filtration.</p>

<p><em>Proof.</em> The exponential is a strictly positive local martingale and therefore a supermartingale. Since its expectations at zero and {% raw %}<span class="math inline">\(T\)</span>{% endraw %} are both one, they equal one at every intermediate time. For {% raw %}<span class="math inline">\(s\leq t\)</span>{% endraw %}, the nonnegative difference {% raw %}<span class="math inline">\(D_s-\mathbb E[D_t\mid\mathcal F_s]\)</span>{% endraw %} has expectation zero, so it vanishes. Thus {% raw %}<span class="math inline">\(D_t=\mathbb E[D_T\mid\mathcal F_t]\)</span>{% endraw %}. Apply <a href="#girsanov-local-martingales">Girsanov’s theorem for continuous local martingales</a> on the stopped filtration {% raw %}<span class="math inline">\((\mathcal F_{t\wedge T})\)</span>{% endraw %}, whose terminal {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field is {% raw %}<span class="math inline">\(\mathcal F_T\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(L=\int\theta\,dB\)</span>{% endraw %}, the covariation formula gives {% raw %}<span class="math inline">\(\langle B,L\rangle_t=\int_0^t\theta_s\,ds\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(\widetilde B\)</span>{% endraw %} is a continuous {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}-local martingale. Subtracting a continuous finite-variation process does not change quadratic variation, so {% raw %}<span class="math inline">\(\langle\widetilde B\rangle_t=t\)</span>{% endraw %}. Lévy's characterization identifies {% raw %}<span class="math inline">\(\widetilde B\)</span>{% endraw %} as Brownian motion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p><strong>Sufficient condition.</strong> A deterministic bound {% raw %}<span class="math inline">\(|\theta_s|\leq C\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\mathbb E D_T=1\)</span>{% endraw %}. To prove this directly, stop {% raw %}<span class="math inline">\(D\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\tau_n=\inf\{t:D_t\geq n\}\wedge T\)</span>{% endraw %}. Itō's formula and the bounded stopped integrand give</p>

{% raw %}<div class="math display">\[\mathbb E D_{t\wedge\tau_n}^2
=1+\mathbb E\int_0^{t\wedge\tau_n}D_s^2\theta_s^2\,ds
\leq1+C^2\int_0^t\mathbb E D_{s\wedge\tau_n}^2\,ds.\]</div>{% endraw %}

<p>Gronwall's inequality yields {% raw %}<span class="math inline">\(\sup_n\mathbb E D_{\tau_n}^2\leq e^{C^2T}\)</span>{% endraw %}. These stopped densities are uniformly integrable, and path continuity gives {% raw %}<span class="math inline">\(D_{\tau_n}\to D_T\)</span>{% endraw %} almost surely. Since {% raw %}<span class="math inline">\(\mathbb E D_{\tau_n}=1\)</span>{% endraw %}, passage to the limit proves the assertion.</p>

<p><strong>Example (Constant drift).</strong> For {% raw %}<span class="math inline">\(\theta_s=\mu\)</span>{% endraw %}, the density is {% raw %}<span class="math inline">\(D_T=\exp(\mu B_T-\mu^2T/2)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(\mathbb Q\)</span>{% endraw %}, the process {% raw %}<span class="math inline">\(B_t-\mu t\)</span>{% endraw %} is Brownian motion, so {% raw %}<span class="math inline">\(B_t\)</span>{% endraw %} has mean {% raw %}<span class="math inline">\(\mu t\)</span>{% endraw %}, variance {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and independent Gaussian increments on {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %}. The sign of the drift follows from the positive sign in the stochastic integral defining {% raw %}<span class="math inline">\(D\)</span>{% endraw %}.</p>

<p>This finite-horizon result does not assert equivalence on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\mu\ne0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(B_t/t\to0\)</span>{% endraw %} almost surely under the original Brownian law, whereas a process with drift {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(B_t/t\to\mu\)</span>{% endraw %}. These disjoint events distinguish the two infinite-horizon path laws.</p>
<p>The Brownian corollary is also stated in <a href="https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf">Lalley, <em>Notes on the Itō Calculus</em>, Theorem 8</a>. The proof above uses <a href="{% post_url 2023-12-08-itos-formula-applications-and-stratonovich-integration %}#levy-characterization">Lévy's characterization</a> and gives the bounded-integrand density condition directly.</p>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-02-18-burkholder-davis-gundy-inequalities %}">Burkholder-Davis-Gundy inequalities</a> · Next: <a href="{% post_url 2024-06-04-further-results-on-stochastic-integrals %}">Further Results on Stochastic Integrals</a></p></nav>

</div>
