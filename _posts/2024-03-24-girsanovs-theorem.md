---
layout: "post"
title: "Girsanov’s Theorem"
date: "2024-03-24"
tags: ["probability theory", "stochastic processes"]
excerpt: "Girsanov’s Theorem. Notes on stochastic processes."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="girsanovs-theorem" data-note-section="title">

</div>
<p>Assume {% raw %}<span class="math inline">\(\{\mathcal F_t\}_{t \geq 0}\)</span>{% endraw %} is a complete, right-continuous filtration. A change of measure changes conditional expectations, and can therefore change a martingale into a process with drift. We ask what happens when the underlying probability measure {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} is replaced by another probability measure {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %}. The density process describes the change of measure at each time. Once it is understood, the drift correction will be expressed by covariation.</p>

<p>Assume {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %} is a probability measure on {% raw %}<span class="math inline">\((\Omega, \mathcal F)\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\ll \mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} on the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t \in [0,\infty]\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D_t = \frac{\dif \mathop{\mathrm{\mathbf{V}\!\,}}}{\dif \mathop{\mathrm{\mathbf{P}\!\,}}}\bigg|_{\mathcal F_t}
\end{aligned}\]</div>{% endraw %}
<p> as the Radon-Nikodym derivative of {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} on the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}. Then, the process {% raw %}<span class="math inline">\(\{D_t\}_{t \geq 0}\)</span>{% endraw %} is a uniformly integrable martingale, and has a càdlàg modification. For this modification, writing this using {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %} as above, we have that for every stopping time {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(D_T = \frac{\dif \mathop{\mathrm{\mathbf{V}\!\,}}}{\dif \mathop{\mathrm{\mathbf{P}\!\,}}}\bigg|_{\mathcal F_T}\)</span>{% endraw %}. Then, if {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\ll \mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\ll \mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\inf_{t \geq 0} D_t &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}-almost surely.</p>

<p>The density on the current information is obtained by conditioning the terminal density. To verify this, if {% raw %}<span class="math inline">\(A \in \mathcal F_t\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{V}\!\,}}(A) = \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} \mathbb 1_A = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_A D_\infty] = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_A \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}}[D_\infty \mid \mathcal F_t]] ~.
\end{aligned}\]</div>{% endraw %}
<p> The uniqueness of the Radon-Nikodym derivative on {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(D_t = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [D_\infty \mid \mathcal F_t]\)</span>{% endraw %} almost surely. As such, {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is a closed, uniformly integrable martingale (with the almost sure limit {% raw %}<span class="math inline">\(D_\infty\)</span>{% endraw %}). Since {% raw %}<span class="math inline">\(\{\mathcal F_t\}_{t \geq 0}\)</span>{% endraw %} is complete and right-continuous, there exists a càdlàg modification of {% raw %}<span class="math inline">\(\{D_t\}_{t \geq 0}\)</span>{% endraw %}. So, if {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is a stopping time, the optional stopping theorem implies for every {% raw %}<span class="math inline">\(A\in\mathcal F_T\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{V}\!\,}}(A) = \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} \mathbb 1_A = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_A D_\infty] = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_A \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}}[D_\infty \mid \mathcal F_T]] = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_A D_T] ~.
\end{aligned}\]</div>{% endraw %}
<p> Finally, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    T_\varepsilon = \inf \{t \geq 0 : D_t &lt; \varepsilon\} ~.
\end{aligned}\]</div>{% endraw %}
<p> Because {% raw %}<span class="math inline">\(T_\varepsilon\)</span>{% endraw %} is the first hitting time of an open set by a càdlàg process, {% raw %}<span class="math inline">\(T_\varepsilon\)</span>{% endraw %} is a stopping time. Since {% raw %}<span class="math inline">\(\{T_\varepsilon &lt; \infty\}\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_{T_\varepsilon}\)</span>{% endraw %}-measurable, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}(T_\varepsilon &lt; \infty) = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_{\{T_\varepsilon &lt; \infty\}} D_{T_\varepsilon}] \leq \varepsilon\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(D_{T_\varepsilon} \leq \varepsilon\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{T_\varepsilon &lt; \infty\}\)</span>{% endraw %} (by the right-continuity of sample paths). It then follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{V}\!\,}}\left( \bigcap_{n \geq 1} \{T_{\frac1n} &lt; \infty\} \right) = 0 ~.
\end{aligned}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\ll \mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %}, the same conclusion follows. This implies {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}-almost surely, there exists an integer {% raw %}<span class="math inline">\(n \geq 1\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(T_{\frac1n} = \infty\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<p>The stochastic logarithm gives a convenient representation of a strictly positive continuous local martingale {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Its initial value need not be one. Define the zero-started continuous local martingale</p>

{% raw %}<div class="math display">\[L_t=\int_0^tD_s^{-1}\,\mathrm dD_s,\qquad L_0=0.\]</div>{% endraw %}

<p>On each finite interval, positivity and continuity allow localization away from zero, so the reciprocal integrand is locally bounded. Itō’s formula gives</p>

{% raw %}<div class="math display">\[\log D_t-\log D_0
=L_t-\frac12\int_0^tD_s^{-2}\,\mathrm d\langle D\rangle_s
=L_t-\frac12\langle L\rangle_t.\]</div>{% endraw %}

<p>Thus the representation is</p>

{% raw %}<div class="math display">\[D_t=D_0\exp\left(L_t-\frac12\langle L\rangle_t\right)=D_0\mathcal E(L)_t.\]</div>{% endraw %}

<p>Conversely, Itō’s formula applied to the exponential gives {% raw %}<span class="math inline">\(\mathrm dD_t=D_t\,\mathrm dL_t\)</span>{% endraw %}, which recovers the displayed integral for {% raw %}<span class="math inline">\(L\)</span>{% endraw %}. This proves uniqueness among continuous local martingales starting at zero. The factor {% raw %}<span class="math inline">\(D_0\)</span>{% endraw %} disappears only when the density is normalized to one at time zero. ◻</p>

<p>Now, we can state and prove <em>Girsanov’s theorem</em>. Assume probability measures {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\((\Omega, \mathcal F)\)</span>{% endraw %} are mutually absolutely continuous on {% raw %}<span class="math inline">\(\mathcal F_\infty\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{D_t\}_{t \geq 0}\)</span>{% endraw %} be the martingale with càdlàg sample paths such that, for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(D_t = \frac{\dif \mathop{\mathrm{\mathbf{V}\!\,}}}{\dif \mathop{\mathrm{\mathbf{P}\!\,}}}\big|_{\mathcal F_t}\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(D\)</span>{% endraw %} has continuous sample paths, and {% raw %}<span class="math inline">\(L\)</span>{% endraw %} is the unique continuous local martingale such that {% raw %}<span class="math inline">\(D_t = D_0\mathcal E(L)_t\)</span>{% endraw %}. Then, if {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a continuous local martingale starting at zero under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}, the process {% raw %}<span class="math inline">\(\widetilde M = M - \langle M, L \rangle\)</span>{% endraw %} is a continuous local martingale under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %}.</p>

<p>Clearly, we’ve already shown that {% raw %}<span class="math inline">\(D_t = D_0\mathcal E(L)_t\)</span>{% endraw %}. Furthermore, that fact shows that {% raw %}<span class="math inline">\(D_t &gt; 0\)</span>{% endraw %} (because the infimum is strictly positive) almost surely. Therefore, we can let {% raw %}<span class="math inline">\(T\)</span>{% endraw %} be a stopping time and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be an adapted process with continuous sample paths.</p>

<p>The measure-change step is the following conditional-expectation identity: if {% raw %}<span class="math inline">\((XD)^T\)</span>{% endraw %} is a martingale with respect to {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X^T\)</span>{% endraw %} is a martingale under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %}. The density formula at a stopping time allows both integrability and the martingale identity to be checked under the original measure. Since {% raw %}<span class="math inline">\(\mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} |X_{T \wedge t}| = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} |X_{T \wedge t} D_{T \wedge t}| &lt; \infty\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(X^T_t \in L^1(\mathop{\mathrm{\mathbf{V}\!\,}})\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Then, for {% raw %}<span class="math inline">\(s &lt; t\)</span>{% endraw %}, pick {% raw %}<span class="math inline">\(A \in \mathcal F_s\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(A \cap \{T &gt; s\} \in \mathcal F_s\)</span>{% endraw %}, we have, because {% raw %}<span class="math inline">\((XD)^T\)</span>{% endraw %} is a martingale under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge t} D_{T \wedge t}] = \mathbb{E}_{\mathop{\mathrm{\mathbf{P}\!\,}}} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge s} D_{T \wedge s}] ~.
\end{aligned}\]</div>{% endraw %}
<p> Because </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D_{T \wedge t} = \frac{\dif \mathop{\mathrm{\mathbf{V}\!\,}}}{\dif \mathop{\mathrm{\mathbf{P}\!\,}}}\bigg|_{\mathcal F_{T \wedge t}} ~~,~~ D_{T \wedge s} = \frac{\dif \mathop{\mathrm{\mathbf{V}\!\,}}}{\dif \mathop{\mathrm{\mathbf{P}\!\,}}}\bigg|_{\mathcal F_{T \wedge s}} ~,
\end{aligned}\]</div>{% endraw %}
<p> and {% raw %}<span class="math inline">\(A \cap \{T &gt; s\} \in \mathcal F_{T \wedge s} \subset \mathcal F_{T \wedge t}\)</span>{% endraw %}, it follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge t}] = \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_{A \cap \{T &gt; s\}} X_{T \wedge s}] ~.
\end{aligned}\]</div>{% endraw %}
<p> This, combined with the straightforward fact that {% raw %}<span class="math inline">\(\mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_{A \cap \{T \leq s\}} X_{T \wedge t}] = \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_{A \cap \{T \leq s\}} X_{T \wedge s}]\)</span>{% endraw %}, implies {% raw %}<span class="math inline">\(\mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_A X_{T \wedge t}] = \mathbb{E}_{\mathop{\mathrm{\mathbf{V}\!\,}}} [\mathbb 1_A X_{T \wedge s}]\)</span>{% endraw %}. This shows the claim is true. This immediately implies that if {% raw %}<span class="math inline">\(XD\)</span>{% endraw %} is a continuous local martingale under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a continuous local martingale under {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{V}\!\,}}\)</span>{% endraw %}.</p>

<p>It remains to identify the correction that makes the product with the density a local martingale. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale under {% raw %}<span class="math inline">\(\mathbf P\)</span>{% endraw %}, starting at zero, and set {% raw %}<span class="math inline">\(\widetilde M=M-\langle M,L\rangle\)</span>{% endraw %}. The product formula uses covariation of the two factors:</p>

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

<p>The remaining integrals are continuous local martingales under {% raw %}<span class="math inline">\(\mathbf P\)</span>{% endraw %}, since their continuous integrands are locally bounded. Their sum starts at zero. The measure-change argument above therefore makes {% raw %}<span class="math inline">\(\widetilde M\)</span>{% endraw %} a continuous local martingale under {% raw %}<span class="math inline">\(\mathbf V\)</span>{% endraw %}. Starting at zero avoids an additional initial-integrability hypothesis; one may add an {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-measurable initial variable if it is integrable under both measures. ◻</p>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-02-18-burkholder-davis-gundy-inequalities %}">Burkholder-Davis-Gundy inequalities</a> · Next: <a href="{% post_url 2024-06-04-further-results-on-stochastic-integrals %}">Further Results on Stochastic Integrals</a></p></nav>

</div>
