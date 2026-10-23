---
layout: "post"
title: "A Strict Local Martingale and the Meaning of Boundedness"
date: "2024-09-19"
tags: ["probability theory", "stochastic processes"]
excerpt: "A reciprocal three-dimensional Bessel process with strict loss of expectation, and criteria for true martingales."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\(B\)</span>{% endraw %} be Brownian motion in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %}, started at a fixed {% raw %}<span class="math inline">\(x\ne0\)</span>{% endraw %}, with its completed natural filtration. We prove that {% raw %}<span class="math inline">\(Z_t=|B_t|^{-1}\)</span>{% endraw %} is a strict local martingale although {% raw %}<span class="math inline">\(\sup_{t\geq0}\mathbb E Z_t^2&lt;\infty\)</span>{% endraw %}.</p>


<div id="sec:cts-local-martingales-are-not-automatically-martingales" data-note-section="title">

</div>
<p>The moment bound makes {% raw %}<span class="math inline">\(\{Z_t:t\geq0\}\)</span>{% endraw %} uniformly integrable. Removing a localizing sequence, however, requires control of stopped values such as {% raw %}<span class="math inline">\(Z_{t\wedge\tau_n}\)</span>{% endraw %}. The example shows that uniform integrability at deterministic times does not supply this control.</p>


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

<h2 id="strictness-at-every-positive-time">Expectation at a positive time</h2>
<p>The loss of expectation can be computed explicitly. Put {% raw %}<span class="math inline">\(r=|x|\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, and rotate coordinates so that {% raw %}<span class="math inline">\(x=(0,0,r)\)</span>{% endraw %}. Spherical coordinates in the Gaussian integral give</p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb E_x\frac1{|B_t|}
&amp;=\frac{2\pi}{(2\pi t)^{3/2}}\int_0^\infty
\rho e^{-(\rho^2+r^2)/(2t)}
\left(\int_{-1}^1e^{\rho r u/t}\,du\right)d\rho\\
&amp;=\frac1{r\sqrt{2\pi t}}\int_0^\infty
\left(e^{-(\rho-r)^2/(2t)}-e^{-(\rho+r)^2/(2t)}\right)d\rho\\
&amp;=\frac1{r\sqrt{2\pi t}}\int_{-r}^{r}e^{-u^2/(2t)}\,du
=\frac{2\Phi(r/\sqrt t)-1}{r}.
\end{aligned}\]</div>{% endraw %}

<p>All integrands in the original spherical integral are nonnegative, so Tonelli justifies the order of integration. Since {% raw %}<span class="math inline">\(2\Phi(r/\sqrt t)-1&lt;1\)</span>{% endraw %}, the expectation is strictly less than {% raw %}<span class="math inline">\(Z_0=1/r\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. Thus the process fails to be a martingale on every interval of positive length.</p>

<p>For any localizing sequence {% raw %}<span class="math inline">\(\tau_n\uparrow\infty\)</span>{% endraw %} whose stopped processes are martingales, {% raw %}<span class="math inline">\(\mathbb E Z_{t\wedge\tau_n}=1/r\)</span>{% endraw %}. The almost-sure limit is {% raw %}<span class="math inline">\(Z_t\)</span>{% endraw %}, with strictly smaller expectation. Consequently {% raw %}<span class="math inline">\(\{Z_{t\wedge\tau_n}:n\geq1\}\)</span>{% endraw %} is not uniformly integrable for any fixed {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}.</p>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}">Continuous Semimartingales and the Monotone-Class Argument</a> · Additional reading: <a href="{% post_url 2023-05-29-skorokhod-representation-and-tightness-on-path-space %}">Skorokhod Representation and Tightness on Path Space</a></p></nav>

</div>
