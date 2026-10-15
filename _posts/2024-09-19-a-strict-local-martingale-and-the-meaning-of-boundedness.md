---
layout: "post"
title: "A Strict Local Martingale and the Meaning of Boundedness"
date: "2024-09-19"
tags: ["probability theory", "stochastic processes"]
excerpt: "A Strict Local Martingale and the Meaning of Boundedness. Notes on stochastic processes."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="sec:cts-local-martingales-are-not-automatically-martingales" data-note-section="title">

</div>
<p>It is tempting to think that a continuous local martingale that is uniformly integrable or bounded in {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} for {% raw %}<span class="math inline">\(p &gt; 1\)</span>{% endraw %} is automatically a martingale. The distinction is between bounds at deterministic times and bounds for the stopped variables used in localisation. A bound on the former family need not justify passing to the limit in the latter.</p>

<p>The example is the reciprocal distance of a three-dimensional Brownian motion from the origin. We first analyse radial Brownian motion in dimension {% raw %}<span class="math inline">\(d\geq2\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(B_t=(B_t^1,\ldots,B_t^d)\)</span>{% endraw %} start at {% raw %}<span class="math inline">\(x\in\mathbb R^d\setminus\{0\}\)</span>{% endraw %}. Itō’s formula gives</p>

{% raw %}<div class="math display">\[|B_t|^2=|x|^2+2\sum_{i=1}^d\int_0^tB_s^i\,\mathrm dB_s^i+dt.\]</div>{% endraw %}

<p>Each stochastic integral is square-integrable on finite horizons, since {% raw %}<span class="math inline">\(\mathbb{E}\int_0^t(B_s^i)^2\,\mathrm ds=x_i^2t+t^2/2&lt;\infty\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[\beta_t=\sum_{i=1}^d\int_0^t\frac{B_s^i}{|B_s|}\,\mathrm dB_s^i,\]</div>{% endraw %}

<p>with the fraction set to zero at the origin. The integrands are bounded. For every fixed {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %}, the Gaussian vector {% raw %}<span class="math inline">\(B_s\)</span>{% endraw %} has a density and hence {% raw %}<span class="math inline">\(\mathbb P(B_s=0)=0\)</span>{% endraw %}; Fubini gives zero Lebesgue time at the origin almost surely. Thus {% raw %}<span class="math inline">\(\langle\beta\rangle_t=\int_0^t\mathbb1_{\{B_s\ne0\}}\,\mathrm ds=t\)</span>{% endraw %}, and Lévy’s characterization makes {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} Brownian motion. In particular,</p>

{% raw %}<div class="math display">\[|B_t|^2=|x|^2+2\int_0^t|B_s|\,\mathrm d\beta_s+dt.\]</div>{% endraw %}

<p>To justify functions singular at zero, first stop inside an annulus. For {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;|x|&lt;R\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(T_\varepsilon=\inf\{t\geq0:|B_t|\leq\varepsilon\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_R=\inf\{t\geq0:|B_t|\geq R\}\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[f(r)=\begin{cases}\log r,&amp;d=2,\\r^{2-d},&amp;d\geq3,\end{cases}
\qquad F(y)=f(|y|),\quad y\in\mathbb R^d\setminus\{0\}.\]</div>{% endraw %}

<p>The derivatives are</p>

{% raw %}<div class="math display">\[\begin{aligned}
\partial_iF(y)&amp;=\begin{cases}y_i|y|^{-2},&amp;d=2,\\(2-d)y_i|y|^{-d},&amp;d\geq3,\end{cases}\\
\partial_{ii}F(y)&amp;=\begin{cases}|y|^{-2}-2y_i^2|y|^{-4},&amp;d=2,\\(2-d)(|y|^{-d}-dy_i^2|y|^{-d-2}),&amp;d\geq3.
\end{cases}
\end{aligned}\]</div>{% endraw %}

<p>Summing over {% raw %}<span class="math inline">\(i\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Delta F=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\tau=T_\varepsilon\wedge S_R\)</span>{% endraw %}, Itō’s formula therefore reads</p>

{% raw %}<div class="math display">\[F(B_{t\wedge\tau})=F(x)+\sum_{i=1}^d\int_0^{t\wedge\tau}\partial_iF(B_s)\,\mathrm dB_s^i.\]</div>{% endraw %}

<p>This is a bounded martingale because {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is bounded on the closed annulus. The exit time is finite almost surely: {% raw %}<span class="math inline">\(\mathbb P(S_R&gt;n)\leq\mathbb P(|B_n^1|&lt;R)\to0\)</span>{% endraw %}, by the Gaussian density bound. Optional stopping and bounded convergence give</p>

{% raw %}<div class="math display">\[f(|x|)=f(\varepsilon)\mathbb P(T_\varepsilon&lt;S_R)+f(R)\mathbb P(S_R&lt;T_\varepsilon),
\qquad
\mathbb P(T_\varepsilon&lt;S_R)=\frac{f(R)-f(|x|)}{f(R)-f(\varepsilon)}.\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(R&gt;|x|\)</span>{% endraw %}, this probability tends to zero as {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. A path that hits the origin before {% raw %}<span class="math inline">\(S_R\)</span>{% endraw %} must first hit every smaller sphere. Hence the probability of hitting the origin before {% raw %}<span class="math inline">\(S_R\)</span>{% endraw %} is zero. Take a countable increasing sequence of radii tending to infinity. Continuity bounds a path on every finite time interval, so any finite hit of the origin would occur before exit from one of those balls. Thus {% raw %}<span class="math inline">\(B_t\ne0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t\geq0\)</span>{% endraw %}, almost surely.</p>

<p>We may now apply Itō’s formula to the radius, first stopped in annuli and then without stopping. Since {% raw %}<span class="math inline">\(\partial_i|y|=y_i/|y|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\partial_{ii}|y|=(|y|^2-y_i^2)/|y|^3\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[|B_t|=|x|+\beta_t+\frac{d-1}{2}\int_0^t\frac{\mathrm ds}{|B_s|}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(d\geq3\)</span>{% endraw %}, the positive harmonic function {% raw %}<span class="math inline">\(F:\mathbb R^d\setminus\{0\}\to(0,\infty)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F(y)=|y|^{2-d}\)</span>{% endraw %}, similarly gives</p>

{% raw %}<div class="math display">\[|B_t|^{2-d}=|x|^{2-d}+\sum_{i=1}^d\int_0^t\frac{(2-d)B_s^i}{|B_s|^d}\,\mathrm dB_s^i.\]</div>{% endraw %}

<p>The right side defines a continuous local martingale, localized by exits from annuli. It is nonnegative, so it is a supermartingale and {% raw %}<span class="math inline">\(\mathbb{E}|B_t|^{2-d}\leq|x|^{2-d}\)</span>{% endraw %}. The nonnegative-supermartingale convergence theorem gives an almost-sure finite limit. The radius is unbounded almost surely, since every {% raw %}<span class="math inline">\(S_R\)</span>{% endraw %} is finite. Therefore that limit must be zero, and the radius itself tends to infinity.</p>

<p>Now take {% raw %}<span class="math inline">\(d=3\)</span>{% endraw %} and write {% raw %}<span class="math inline">\(Z_t=|B_t|^{-1}\)</span>{% endraw %}. We have proved that {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is a continuous local martingale and {% raw %}<span class="math inline">\(Z_t\to0\)</span>{% endraw %} almost surely. It is nevertheless bounded in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} at deterministic times. Set {% raw %}<span class="math inline">\(\delta=|x|/2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, split its second moment as</p>

{% raw %}<div class="math display">\[\mathbb{E}Z_t^2=\left(\int_{|y|&lt;\delta}+\int_{|y|\geq\delta}\right)
\frac{|y|^{-2}}{(2\pi t)^{3/2}}\exp\left(-\frac{|y-x|^2}{2t}\right)\,\mathrm dy.\]</div>{% endraw %}

<p>The second integral is at most {% raw %}<span class="math inline">\(\delta^{-2}\)</span>{% endraw %}. In the first, {% raw %}<span class="math inline">\(|y-x|\geq|x|/2\)</span>{% endraw %}, while polar coordinates give {% raw %}<span class="math inline">\(\int_{|y|&lt;\delta}|y|^{-2}\,\mathrm dy=4\pi\delta\)</span>{% endraw %}. Consequently</p>

{% raw %}<div class="math display">\[\mathbb{E}Z_t^2\leq\delta^{-2}+4\pi\delta\,(2\pi t)^{-3/2}e^{-|x|^2/(8t)}.\]</div>{% endraw %}

<p>The last function of {% raw %}<span class="math inline">\(t\)</span>{% endraw %} is continuous and tends to zero both as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %} and as {% raw %}<span class="math inline">\(t\to\infty\)</span>{% endraw %}, so its supremum is finite. Including {% raw %}<span class="math inline">\(Z_0=|x|^{-1}\)</span>{% endraw %}, this proves {% raw %}<span class="math inline">\(\sup_{t\geq0}\mathbb{E}Z_t^2&lt;\infty\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} were a true martingale, its expectations would all equal {% raw %}<span class="math inline">\(|x|^{-1}&gt;0\)</span>{% endraw %}. The deterministic-time {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} bound makes this family uniformly integrable, and its almost-sure limit is zero. Hence {% raw %}<span class="math inline">\(\mathbb{E}Z_t\to0\)</span>{% endraw %}, a contradiction. Thus {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is a strict local martingale. The example separates uniform integrability at deterministic times from the class-D control over stopped values needed to remove localization. ◻</p>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-07-10-continuous-semimartingales-and-the-monotone-class-argument %}">Continuous Semimartingales and the Monotone-Class Argument</a> · Next: <a href="{% post_url 2024-10-25-skorokhod-representation-and-tightness-on-path-space %}">Skorokhod Representation and Tightness on Path Space</a></p></nav>

</div>
