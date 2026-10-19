---
layout: "post"
title: "Further Results on Stochastic Integrals"
date: "2024-06-04"
tags: ["probability theory", "stochastic processes"]
excerpt: "Further Results on Stochastic Integrals. Notes on stochastic processes."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
---

<div class="note-content" markdown="0">

<p>Itō’s formula becomes especially useful when we choose a function to cancel a drift term. This converts a question about a diffusion into a martingale identity, often with an ordinary differential equation determining the function. The examples below use this idea for exit probabilities and exponential functionals, then study running maxima and the local-time term that appears when the function is an absolute value.</p>

<p>Work on a filtered probability space satisfying the usual conditions. {% raw %}<span class="math inline">\(B\)</span>{% endraw %} denotes Brownian motion, and stochastic integrands are predictable with the stated integrability. A local martingale need not be a true martingale: the moment conditions in each claim are essential. See <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian motion</a> and <a href="{% post_url 2023-01-07-martingales-maximal-and-upcrossing-inequalities %}">martingale inequalities</a>.</p>

<div id="further-discussions" data-note-section="title"></div>
<h3>Scale functions and exit probabilities</h3>
<p>Suppose {% raw %}<span class="math inline">\(X_t=B_t+\int_0^t b(X_s)\,ds\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(B_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b:\mathbb R\to\mathbb R\)</span>{% endraw %} is continuous, and the adapted continuous solution is defined for all times under consideration. For {% raw %}<span class="math inline">\(F\in C^2\)</span>{% endraw %}, Itō’s formula gives</p>

{% raw %}<div class="math display">\[F(X_t)=F(0)+\int_0^tF'(X_s)\,dB_s+
\int_0^t\left(\frac12F''+bF'\right)(X_s)\,ds.\]</div>{% endraw %}

<p>We cancel the drift by solving {% raw %}<span class="math inline">\(F''+2bF'=0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(F(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F'(0)=1\)</span>{% endraw %}. These two normalisations give</p>

{% raw %}<div class="math display">\[F'(x)=\exp\left(-2\int_0^x b(z)\,dz\right),\qquad
F(x)=\int_0^x\exp\left(-2\int_0^y b(z)\,dz\right)dy.\]</div>{% endraw %}

<p>Thus {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is strictly increasing and {% raw %}<span class="math inline">\(F(X)\)</span>{% endraw %} is a continuous local martingale. Fix {% raw %}<span class="math inline">\(c&lt;0&lt;d\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(T_c=\inf\{t:X_t=c\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_d=\inf\{t:X_t=d\}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T=T_c\wedge T_d\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{T=\infty\}\)</span>{% endraw %}, every unit-time increment of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[|B_n-B_{n-1}|\leq d-c+\sup_{x\in[c,d]}|b(x)|=:K.\]</div>{% endraw %}

<p>The independent standard normal increments cannot all satisfy this bound: the probability is {% raw %}<span class="math inline">\(\lim_{n\to\infty}\mathbb P(|Z|\leq K)^n=0\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %} almost surely. Before {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F(X)\)</span>{% endraw %} is bounded by its values on {% raw %}<span class="math inline">\([c,d]\)</span>{% endraw %}, so its stopped local martingale is a bounded martingale. Optional sampling and dominated convergence give</p>

{% raw %}<div class="math display">\[0=F(c)\mathbb P(T_c&lt;T_d)+F(d)\mathbb P(T_d&lt;T_c),
\qquad\mathbb P(T_c&lt;T_d)=\frac{F(d)}{F(d)-F(c)}.\]</div>{% endraw %}

<h3>Exponential weights</h3>
<p>Let {% raw %}<span class="math inline">\(f\in C^2(\mathbb R)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g\in C(\mathbb R)\)</span>{% endraw %}, and define</p>

<span id="eq:xt-exp-generalized"></span>
{% raw %}<div class="math display">\[X_t=f(B_t)\exp\left(-\int_0^t g(B_s)\,ds\right).\tag{1}\]</div>{% endraw %}

<p>The time integral has finite variation on compact intervals because {% raw %}<span class="math inline">\(g(B_s)\)</span>{% endraw %} is continuous. If desired, its variation decomposition uses {% raw %}<span class="math inline">\(g^+=\max(g,0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g^-=\max(-g,0)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(g=g^+-g^-\)</span>{% endraw %}. Applying the product rule yields</p>

{% raw %}<div class="math display">\[dX_t=e^{-\int_0^tg(B_s)ds}f'(B_t)\,dB_t+
 e^{-\int_0^tg(B_s)ds}\left(\frac12 f''(B_t)-g(B_t)f(B_t)\right)dt.\]</div>{% endraw %}

<p>Consequently {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a local martingale if {% raw %}<span class="math inline">\(f''=2gf\)</span>{% endraw %}. The converse also holds for Brownian motion on the whole line. Uniqueness of the continuous local-martingale/finite-variation decomposition forces the displayed drift integral to vanish at every time. Its continuous integrand is therefore zero at every time outside one null set. At any fixed positive time, Brownian motion has a strictly positive density on the line, so continuity implies {% raw %}<span class="math inline">\(f''/2-gf=0\)</span>{% endraw %} everywhere.</p>

<p>For a useful expectation formula, assume now that {% raw %}<span class="math inline">\(g\geq0\)</span>{% endraw %} and that its support is contained in {% raw %}<span class="math inline">\([a,b]\subset(0,\infty)\)</span>{% endraw %}. Specify the normalisation {% raw %}<span class="math inline">\(f(x)=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x\leq a\)</span>{% endraw %}. The ordinary differential equation with {% raw %}<span class="math inline">\(f(a)=1,f'(a)=0\)</span>{% endraw %} has a unique solution; equivalently, on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[f(x)=1+2\int_a^x(x-y)g(y)f(y)\,dy.\]</div>{% endraw %}

<p>Successive substitution converges uniformly on bounded intervals (the {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-th iterated integral is bounded by a constant times {% raw %}<span class="math inline">\(C^n(x-a)^{2n}/(2n)!\)</span>{% endraw %}). It gives existence, and the same estimate applied to a difference gives uniqueness. All terms are nonnegative, hence {% raw %}<span class="math inline">\(f\geq1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f'\geq0\)</span>{% endraw %}. Beyond {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, extend by {% raw %}<span class="math inline">\(f(x)=f(b)+f'(b)(x-b)\)</span>{% endraw %}; the result is {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} and solves the equation globally.</p>

<p>For a level {% raw %}<span class="math inline">\(z&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(T_z=\inf\{t:B_t=z\}\)</span>{% endraw %}. Brownian recurrence, or the reflection identity {% raw %}<span class="math inline">\(\mathbb P(T_z\leq t)=2\mathbb P(B_t\geq z)\to1\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(T_z&lt;\infty\)</span>{% endraw %} almost surely. The stopped process {% raw %}<span class="math inline">\(X^{T_z}\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(\sup_{x\leq z}f(x)&lt;\infty\)</span>{% endraw %}, since the exponential factor is at most one. It is therefore a uniformly integrable martingale, and</p>

{% raw %}<div class="math display">\[1=\mathbb{E}X_{T_z}=f(z)\mathbb{E}\exp\left(-\int_0^{T_z}g(B_s)\,ds\right),\qquad
\mathbb{E}\exp\left(-\int_0^{T_z}g(B_s)\,ds\right)=\frac1{f(z)}.\]</div>{% endraw %}

<p>The sign condition on {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is used in this boundedness argument. Without it, the same local martingale identity alone does not justify passing to the unbounded stopping time.</p>

<h3>Running maxima and drawdowns</h3>
<p>Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a continuous local martingale with {% raw %}<span class="math inline">\(M_0=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(S_t=\sup_{s\leq t}M_s\)</span>{% endraw %}. Pathwise, the Stieltjes measure {% raw %}<span class="math inline">\(dS\)</span>{% endraw %} is supported on {% raw %}<span class="math inline">\(\{M=S\}\)</span>{% endraw %}. Indeed, if {% raw %}<span class="math inline">\(M_t&lt;S_t\)</span>{% endraw %}, continuity supplies a neighbourhood on which the previously attained maximum cannot be exceeded, so {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is locally constant there. The open set {% raw %}<span class="math inline">\(\{M&lt;S\}\)</span>{% endraw %} is a countable union of such intervals. Thus, for every locally bounded Borel function {% raw %}<span class="math inline">\(h\)</span>{% endraw %},</p>

<span id="eq:identity-borel-bouned-zero"></span>
{% raw %}<div class="math display">\[\int_0^t(S_s-M_s)h(s)\,dS_s=0.\tag{2}\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(\varphi\in C^1(\mathbb R_+)\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(\Phi(x)=\int_0^x\varphi(y)\,dy\)</span>{% endraw %}. The ordinary chain rule for {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, the product rule, and the support property give</p>

{% raw %}<div class="math display">\[d[(S-M)\varphi(S)]=\varphi(S)\,dS-\varphi(S)\,dM+(S-M)\varphi'(S)\,dS
=d\Phi(S)-\varphi(S)\,dM.\]</div>{% endraw %}

<span id="eq:bound-St-Mt-varphi"></span>
{% raw %}<div class="math display">\[(S_t-M_t)\varphi(S_t)=\Phi(S_t)-\int_0^t\varphi(S_s)\,dM_s.\tag{3}\]</div>{% endraw %}

<p>Taking {% raw %}<span class="math inline">\(\varphi(x)=\lambda e^{-\lambda x}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, gives the local martingale</p>

<span id="eq:sum-exponential-martingales-is-cts-local-martingale"></span>
{% raw %}<div class="math display">\[e^{-\lambda S_t}[1+\lambda(S_t-M_t)]
=1-\int_0^t\lambda e^{-\lambda S_s}\,dM_s.\tag{4}\]</div>{% endraw %}

<p>Assume {% raw %}<span class="math inline">\(\langle M\rangle_\infty=\infty\)</span>{% endraw %}. The Brownian time-change theorem gives {% raw %}<span class="math inline">\(M_t=\beta_{\langle M\rangle_t}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\liminf_{t\to\infty}M_t=-\infty\)</span>{% endraw %}. Therefore the drawdown time {% raw %}<span class="math inline">\(T_a=\inf\{t:S_t-M_t=a\}\)</span>{% endraw %} is finite for every {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}. Before {% raw %}<span class="math inline">\(T_a\)</span>{% endraw %}, the expression in (4) is between zero and {% raw %}<span class="math inline">\(1+\lambda a\)</span>{% endraw %}. Its stopped process is a bounded martingale. Continuity and dominated convergence give</p>

{% raw %}<div class="math display">\[1=(1+\lambda a)\mathbb{E} e^{-\lambda S_{T_a}},\qquad
\mathbb{E} e^{-\lambda S_{T_a}}=(1+\lambda a)^{-1}.\]</div>{% endraw %}

<p>This is the Laplace transform of an exponential random variable of rate {% raw %}<span class="math inline">\(1/a\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(S_{T_a}\)</span>{% endraw %} has that law. The drawdown need not be monotone; its bound before the first hitting time and its continuity are the properties used here.</p>

<h3>Squared Bessel processes</h3>
<p>Suppose {% raw %}<span class="math inline">\(X\geq0\)</span>{% endraw %} is a continuous adapted solution of {% raw %}<span class="math inline">\(dX_t=\alpha\,dt+2\sqrt{X_t}\,dB_t\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(X_0=x\geq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\alpha\geq0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(f\geq0\)</span>{% endraw %} be continuous on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. There is a unique positive solution of</p>

{% raw %}<div class="math display">\[\varphi''=2f\varphi,\qquad\varphi(0)=1,\qquad\varphi'(1)=0.\]</div>{% endraw %}

<p>For existence, solve backwards with {% raw %}<span class="math inline">\(\psi(1)=1,\psi'(1)=0\)</span>{% endraw %}. Its Volterra equation is {% raw %}<span class="math inline">\(\psi(t)=1+2\int_t^1(s-t)f(s)\psi(s)\,ds\)</span>{% endraw %}. The convergent successive-substitution argument above gives {% raw %}<span class="math inline">\(\psi\geq1\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\varphi=\psi/\psi(0)\)</span>{% endraw %}. Any solution with derivative zero at (1) is a scalar multiple of {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}, proving uniqueness. We have {% raw %}<span class="math inline">\(\varphi&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varphi'\leq0\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(u=\varphi'/(2\varphi)\)</span>{% endraw %}; direct differentiation gives</p>

{% raw %}<div class="math display">\[u'+2u^2=\frac{\varphi''}{2\varphi}=f,\qquad u\leq0,\qquad u(1)=0.\]</div>{% endraw %}

<p>Apply Itō’s formula to {% raw %}<span class="math inline">\(Y_t=u(t)X_t-\int_0^t f(s)X_s\,ds\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[dY_t=2u(t)\sqrt{X_t}\,dB_t+\left(\alpha u(t)-2u(t)^2X_t\right)dt.\]</div>{% endraw %}

<p>It follows that</p>

{% raw %}<div class="math display">\[Z_t=\exp(Y_t)\varphi(t)^{-\alpha/2}
=\exp\left(u(0)x+2\int_0^tu(s)\sqrt{X_s}\,dB_s-2\int_0^tu(s)^2X_s\,ds\right)\]</div>{% endraw %}

<p>is a local martingale. Since {% raw %}<span class="math inline">\(u\leq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f,X\geq0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\alpha\geq0\)</span>{% endraw %}, it satisfies {% raw %}<span class="math inline">\(0\leq Z_t\leq\varphi(1)^{-\alpha/2}\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. It is therefore a bounded martingale. Taking expectations at time (1) gives</p>

<span id="eq:expectation-exponential-martingale-bessel"></span>
{% raw %}<div class="math display">\[\mathbb{E}\exp\left(-\int_0^1 f(s)X_s\,ds\right)
=\varphi(1)^{\alpha/2}\exp\left(\frac{x\varphi'(0)}2\right).\tag{5}\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(f\equiv\lambda&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\varphi(t)=\cosh(\sqrt{2\lambda}(1-t))/\cosh(\sqrt{2\lambda})\)</span>{% endraw %}. Thus</p>

<span id="eq:expectation-exponential-martingale-bessel-specialized"></span>
{% raw %}<div class="math display">\[\mathbb{E}\exp\left(-\lambda\int_0^1X_s\,ds\right)
=\cosh(\sqrt{2\lambda})^{-\alpha/2}
\exp\left[-\frac{x\sqrt{2\lambda}}2\tanh(\sqrt{2\lambda})\right].\tag{6}\]</div>{% endraw %}

<p>For Brownian motion {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} starting at {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, Itō’s formula gives {% raw %}<span class="math inline">\(d(\beta_t^2)=dt+2\beta_t\,d\beta_t\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(B_t=\int_0^t\operatorname{sgn}(\beta_s)\,d\beta_s\)</span>{% endraw %}. Fubini and the Gaussian density show {% raw %}<span class="math inline">\(\int_0^t\mathbb1_{\{\beta_s=0\}}ds=0\)</span>{% endraw %} almost surely, so {% raw %}<span class="math inline">\(\langle B\rangle_t=t\)</span>{% endraw %}; Lévy’s characterization makes {% raw %}<span class="math inline">\(B\)</span>{% endraw %} Brownian. Hence {% raw %}<span class="math inline">\(\beta^2\)</span>{% endraw %} is the case {% raw %}<span class="math inline">\(x=y^2,\alpha=1\)</span>{% endraw %} of the preceding equation, which gives its integrated-square Laplace transform.</p>

<h3>Tanaka’s formula and excursion counts</h3>
<p>Let {% raw %}<span class="math inline">\(B_0=0\)</span>{% endraw %} and approximate the absolute value by {% raw %}<span class="math inline">\(g_\varepsilon(x)=\sqrt{x^2+\varepsilon^2}\)</span>{% endraw %}. Itō’s formula gives</p>

{% raw %}<div class="math display">\[g_\varepsilon(B_t)=\varepsilon+M_t^\varepsilon+A_t^\varepsilon,
\quad M_t^\varepsilon=\int_0^t\frac{B_s}{\sqrt{B_s^2+\varepsilon^2}}\,dB_s,
\quad A_t^\varepsilon=\frac12\int_0^t\frac{\varepsilon^2}{(B_s^2+\varepsilon^2)^{3/2}}\,ds.\]</div>{% endraw %}

<p>Set {% raw %}<span class="math inline">\(\operatorname{sgn}(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta_t=\int_0^t\operatorname{sgn}(B_s)\,dB_s\)</span>{% endraw %}. The bounded integrands converge pointwise to the sign function. The Itō isometry and dominated convergence, followed by Doob’s inequality, give for every {% raw %}<span class="math inline">\(T&lt;\infty\)</span>{% endraw %}</p>

{% raw %}<div class="math display">\[\mathbb{E}\sup_{t\leq T}|M_t^\varepsilon-\beta_t|^2
\leq4\mathbb{E}\int_0^T\left|\frac{B_s}{\sqrt{B_s^2+\varepsilon^2}}-\operatorname{sgn}(B_s)\right|^2ds\longrightarrow0.\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(0\leq g_\varepsilon(x)-|x|\leq\varepsilon\)</span>{% endraw %}, the increasing processes {% raw %}<span class="math inline">\(A^\varepsilon\)</span>{% endraw %} converge uniformly on compact intervals in probability to the continuous process {% raw %}<span class="math inline">\(L_t=|B_t|-\beta_t\)</span>{% endraw %}. Choose a subsequence converging uniformly almost surely on every integer-length interval. The limit is increasing, starts at zero, and satisfies Tanaka’s formula</p>

{% raw %}<div class="math display">\[|B_t|=\int_0^t\operatorname{sgn}(B_s)\,dB_s+L_t.\]</div>{% endraw %}

<p>The measure {% raw %}<span class="math inline">\(dL\)</span>{% endraw %} is supported on {% raw %}<span class="math inline">\(\{B=0\}\)</span>{% endraw %}. Indeed, on any interval {% raw %}<span class="math inline">\([u,v]\)</span>{% endraw %} where {% raw %}<span class="math inline">\(|B_s|\geq\delta&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[0\leq A_v^\varepsilon-A_u^\varepsilon\leq\frac{(v-u)\varepsilon^2}{2\delta^3}\longrightarrow0.\]</div>{% endraw %}

<p>Using rational {% raw %}<span class="math inline">\(u,v,\delta\)</span>{% endraw %}, the same almost sure subsequence proves this simultaneously on a countable family of intervals. Continuity then makes {% raw %}<span class="math inline">\(L\)</span>{% endraw %} constant on every excursion interval away from zero. Fubini gives {% raw %}<span class="math inline">\(\langle\beta\rangle_t=\int_0^t\mathbb1_{\{B_s\ne0\}}ds=t\)</span>{% endraw %}, so Lévy’s characterization makes {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} Brownian motion.</p>

<p>The identity {% raw %}<span class="math inline">\(|B|=\beta+L\geq0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(L_t\geq\sup_{s\leq t}(-\beta_s)\)</span>{% endraw %}. For the reverse inequality, let {% raw %}<span class="math inline">\(r\)</span>{% endraw %} be the last zero of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} in {% raw %}<span class="math inline">\([0,t]\)</span>{% endraw %}. Such a zero exists because {% raw %}<span class="math inline">\(B_0=0\)</span>{% endraw %}, and it is attained by continuity. If {% raw %}<span class="math inline">\(r&lt;t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L\)</span>{% endraw %} is constant on {% raw %}<span class="math inline">\((r,t]\)</span>{% endraw %}; if {% raw %}<span class="math inline">\(r=t\)</span>{% endraw %}, no constancy argument is needed. In both cases {% raw %}<span class="math inline">\(L_t=L_r=-\beta_r\leq\sup_{s\leq t}(-\beta_s)\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[L_t=\sup_{s\leq t}(-\beta_s),\qquad
\mathbb P(L_t\leq a)=2\Phi(a/\sqrt t)-1\quad(a\geq0,t&gt;0).\]</div>{% endraw %}

<p>Here {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal distribution function. The probability is zero for {% raw %}<span class="math inline">\(a&lt;0\)</span>{% endraw %}; the formula follows from the reflection principle. In particular {% raw %}<span class="math inline">\(L_t/\sqrt t\)</span>{% endraw %} has the law of {% raw %}<span class="math inline">\(|Z|\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} standard normal.</p>

<p>For an excursion-count approximation, define {% raw %}<span class="math inline">\(S_1^\varepsilon=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_n^\varepsilon=\inf\{t\geq S_n^\varepsilon:|B_t|=\varepsilon\}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(S_{n+1}^\varepsilon=\inf\{t\geq T_n^\varepsilon:B_t=0\}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(N_t^\varepsilon=\#\{n:T_n^\varepsilon\leq t\}\)</span>{% endraw %}. There are finitely many completed crossings on a compact interval: otherwise uniform continuity would be contradicted by infinitely many disjoint fluctuations of size {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. The process</p>

{% raw %}<div class="math display">\[H_s^\varepsilon=\sum_{n\geq1}\mathbb1_{(S_n^\varepsilon,T_n^\varepsilon]}(s)\]</div>{% endraw %}

<p>is predictable and bounded by one. Endpoint choices do not affect Brownian integrals. During each completed outgoing segment, Tanaka’s formula gives an increase of {% raw %}<span class="math inline">\(|B|\)</span>{% endraw %} equal to {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. During a return segment, {% raw %}<span class="math inline">\(L\)</span>{% endraw %} is constant. Summing these identities gives</p>

{% raw %}<div class="math display">\[L_t+\int_0^tH_s^\varepsilon\operatorname{sgn}(B_s)\,dB_s
=\varepsilon N_t^\varepsilon+r_t^\varepsilon,\qquad0\leq r_t^\varepsilon\leq\varepsilon.\]</div>{% endraw %}

<p>More precisely, {% raw %}<span class="math inline">\(r_t^\varepsilon=|B_t|\)</span>{% endraw %} if {% raw %}<span class="math inline">\(t\)</span>{% endraw %} lies in the next outgoing segment, and {% raw %}<span class="math inline">\(r_t^\varepsilon=0\)</span>{% endraw %} if it lies in a return segment. The latter segment can travel beyond {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}; it contributes no remainder because its stochastic integral accounts for that movement. Since {% raw %}<span class="math inline">\(H_s^\varepsilon\leq\mathbb1_{\{|B_s|\leq\varepsilon\}}\)</span>{% endraw %} apart from irrelevant endpoints, the isometry yields</p>

{% raw %}<div class="math display">\[\|\varepsilon N_t^\varepsilon-L_t\|_2
\leq\left(\int_0^t\mathbb P(|B_s|\leq\varepsilon)\,ds\right)^{1/2}+\varepsilon\longrightarrow0.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %}, the integrand tends to zero by the Gaussian density and is bounded by one; dominated convergence proves the last step. Finally, Brownian scaling gives {% raw %}<span class="math inline">\(N_t^1\stackrel d=N_1^{1/\sqrt t}\)</span>{% endraw %}. Applying this approximation at time (1), with {% raw %}<span class="math inline">\(\varepsilon=1/\sqrt t\)</span>{% endraw %}, proves</p>

{% raw %}<div class="math display">\[\frac{N_t^1}{\sqrt t}\xrightarrow[t\to\infty]{d}L_1\stackrel d=|Z|.\]</div>{% endraw %}

<h4 id="21-108-excursion-error-bound">
An explicit excursion-count error bound
</h4>
<p>The Gaussian density makes the preceding convergence quantitative. For {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb P(|B_s|\leq\varepsilon)
\leq\frac{2\varepsilon}{\sqrt{2\pi s}},\qquad
\int_0^t\mathbb P(|B_s|\leq\varepsilon)\,ds
\leq2\sqrt{\frac2\pi}\,\varepsilon\sqrt t.\]</div>{% endraw %}

<p>Consequently the isometry and {% raw %}<span class="math inline">\(0\leq r_t^\varepsilon\leq\varepsilon\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[\|\varepsilon N_t^\varepsilon-L_t\|_2
\leq\left(2\sqrt{\frac2\pi}\,\varepsilon\sqrt t\right)^{1/2}+\varepsilon.\]</div>{% endraw %}

<p>At {% raw %}<span class="math inline">\(\varepsilon=1\)</span>{% endraw %}, division by {% raw %}<span class="math inline">\(\sqrt t\)</span>{% endraw %} proves the direct comparison</p>
{% raw %}<div class="math display">\[\left\|\frac{N_t^1-L_t}{\sqrt t}\right\|_2
\leq\left(2\sqrt{\frac2\pi}\right)^{1/2}t^{-1/4}+t^{-1/2}\longrightarrow0.\]</div>{% endraw %}

<p>Because {% raw %}<span class="math inline">\(L_t/\sqrt t\)</span>{% endraw %} has the same folded-normal law for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, this gives a second proof of the displayed large-time limit by Slutsky’s lemma. The square root in the isometry estimate is essential: the expected occupation time bounds the squared {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} norm of the stochastic integral.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-le_gall_brownian_2016" class="csl-entry" role="listitem">
Le Gall, Jean-François. 2016. <em>Brownian Motion, Martingales, and Stochastic Calculus</em>. 1st ed. 2016. Graduate Texts in Mathematics 274. Cham: Springer International Publishing : Imprint: Springer. <a href="https://doi.org/10.1007/978-3-319-31089-3">https://doi.org/10.1007/978-3-319-31089-3</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-03-24-girsanovs-theorem %}">Girsanov’s Theorem</a> · Additional reading: <a href="{% post_url 2024-04-04-continuous-semimartingales-and-the-monotone-class-argument %}">Continuous Semimartingales and the Monotone-Class Argument</a></p></nav>

</div>
