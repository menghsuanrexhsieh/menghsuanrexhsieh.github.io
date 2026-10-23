---
layout: "post"
title: "Brownian Motion: Markov Properties and Path Continuity"
date: "2023-01-21"
tags: ["probability theory", "stochastic processes"]
excerpt: "Brownian increments, scaling, the strong Markov property, and time inversion."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/01/21/brownian-motion/", "/2023/02/25/markov-properties/", "/2023/04/02/continuity-of-paths/"]
---

<div class="note-content" markdown="0">

<p>Brownian motion is a continuous process with independent Gaussian increments. We specify the filtration in the definition, prove the Markov and strong Markov properties, and derive path-continuity estimates from the exponential martingale. Throughout, all assertions about sample paths hold outside a single null set for the stated collection of times.</p>


<div id="brownian-motion" data-note-section="title">

</div>
<p>Fix a probability space {% raw %}<span class="math inline">\((\Omega,\mathcal F,\mathbb P)\)</span>{% endraw %} and a filtration {% raw %}<span class="math inline">\((\mathcal F_t)_{t\geq0}\)</span>{% endraw %}.</p>


<p>A process {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is jointly measurable if {% raw %}<span class="math inline">\((\omega,t)\mapsto X_t(\omega)\)</span>{% endraw %} is measurable for {% raw %}<span class="math inline">\(\mathcal F\otimes\mathscr B(\mathbb R_+)\)</span>{% endraw %}. It is progressively measurable if, for each {% raw %}<span class="math inline">\(T\geq0\)</span>{% endraw %}, its restriction to {% raw %}<span class="math inline">\(\Omega\times[0,T]\)</span>{% endraw %} is measurable for {% raw %}<span class="math inline">\(\mathcal F_T\otimes\mathscr B([0,T])\)</span>{% endraw %}. These are different requirements. An adapted process with continuous paths is progressive: its left-endpoint step approximations on each finite interval are measurable for this smaller product sigma-field and converge pointwise.</p>

<p><strong>Definition (Brownian motion).</strong> A real-valued process {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is Brownian motion with respect to {% raw %}<span class="math inline">\((\mathcal F_t)\)</span>{% endraw %} if:</p>


<ol>
<li><p>{% raw %}<span class="math inline">\(B_t\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}-measurable for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t-B_s \perp \!\!\! \perp\mathcal F_s\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s \leq t\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t - B_s \sim \mathcal{N}(0,t-s)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s \leq t\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_0 = 0\)</span>{% endraw %} almost surely,</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t\)</span>{% endraw %} has continuous paths for all {% raw %}<span class="math inline">\(t\geq0\)</span>{% endraw %}.</p></li>
</ol>
<p>A {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional Brownian motion has independent one-dimensional Brownian coordinates. Its natural terminal {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field is {% raw %}<span class="math inline">\(\mathcal F_\infty^B=\sigma(B_t:t\geq0)\)</span>{% endraw %}. For a larger filtration, {% raw %}<span class="math inline">\(\mathcal F_\infty=\sigma(\bigcup_{t\geq0}\mathcal F_t)\)</span>{% endraw %} may contain additional information. When completing a natural filtration, we include the subsets of null sets in its terminal {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field.</p>


<p><strong>Proposition (Scaling).</strong> If {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is Brownian motion and {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(Y_t=aB_{t/a^2}\)</span>{% endraw %} is Brownian motion for {% raw %}<span class="math inline">\(\mathcal G_t=\mathcal F_{t/a^2}\)</span>{% endraw %}.</p>

<p><em>Proof.</em> Continuity, adaptation, and {% raw %}<span class="math inline">\(Y_0=0\)</span>{% endraw %} follow from the definition. For {% raw %}<span class="math inline">\(s&lt;t\)</span>{% endraw %}, the increment {% raw %}<span class="math inline">\(Y_t-Y_s=a(B_{t/a^2}-B_{s/a^2})\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\mathcal G_s\)</span>{% endraw %} and is centered Gaussian with variance {% raw %}<span class="math inline">\(a^2(t-s)/a^2=t-s\)</span>{% endraw %}. These are the defining properties. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>


<p>Brownian motion is a Gaussian process. For {% raw %}<span class="math inline">\(0=t_0&lt;t_1&lt;\cdots&lt;t_n\)</span>{% endraw %}, the variables</p>

{% raw %}<div class="math display">\[Z_i=\frac{B_{t_i}-B_{t_{i-1}}}{\sqrt{t_i-t_{i-1}}},\qquad 1\leq i\leq n,\]</div>{% endraw %}

<p>are independent standard normals. Since {% raw %}<span class="math inline">\(B_{t_j}=\sum_{i=1}^j\sqrt{t_i-t_{i-1}}Z_i\)</span>{% endraw %}, every finite-dimensional vector is jointly Gaussian.</p>

<p>Conversely, suppose {% raw %}<span class="math inline">\(B\)</span>{% endraw %} has continuous paths, all finite-dimensional vectors are jointly Gaussian, {% raw %}<span class="math inline">\(\mathbb{E}B_t=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Cov}(B_s,B_t)=\min(s,t)\)</span>{% endraw %}. Use its natural filtration {% raw %}<span class="math inline">\(\mathcal F_t=\sigma(B_r:r\leq t)\)</span>{% endraw %}. The covariance formula gives {% raw %}<span class="math inline">\(B_0=0\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(B_t-B_s\sim\mathcal{N}(0,t-s)\)</span>{% endraw %}. Its covariance with every finite vector {% raw %}<span class="math inline">\((B_{r_1},\ldots,B_{r_m})\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_j\leq s\)</span>{% endraw %}, is zero. Joint Gaussianity therefore gives independence from that entire vector. A generating-class argument extends this to independence from {% raw %}<span class="math inline">\(\mathcal F_s\)</span>{% endraw %}, proving the Brownian property.</p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1.</strong> The completed natural Brownian filtration is already right-continuous. Let {% raw %}<span class="math inline">\(\mathcal F_t^{00}=\sigma(B_s:s\leq t)\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\mathcal{N}\)</span>{% endraw %} contain all subsets of null sets in {% raw %}<span class="math inline">\(\mathcal F_\infty^{00}\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\mathcal F_t^0=\sigma(\mathcal F_t^{00}\cup\mathcal{N})\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\bigcap_{\varepsilon&gt;0}\mathcal F_{t+\varepsilon}^0=\mathcal F_t^0\)</span>{% endraw %}. One way to verify this is to start with a bounded continuous function {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} of finitely many Brownian coordinates. Independent Gaussian increments give its conditional expectation at time {% raw %}<span class="math inline">\(s\)</span>{% endraw %} by keeping the coordinates already observed and integrating the future increments against their Gaussian law. As {% raw %}<span class="math inline">\(s\downarrow t\)</span>{% endraw %}, path continuity and continuity of these Gaussian expectations give {% raw %}<span class="math inline">\(\mathbb{E}[Y\mid\mathcal F_s^0]\to\mathbb{E}[Y\mid\mathcal F_t^0]\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Bounded cylinder functions are dense in {% raw %}<span class="math inline">\(L^1(\mathcal F_\infty^0)\)</span>{% endraw %}, and conditional expectation is an {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} contraction, so the same limit holds for every integrable {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. For an event {% raw %}<span class="math inline">\(A\in\bigcap_{s&gt;t}\mathcal F_s^0\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(Y=\mathbf1_A\)</span>{% endraw %}. Its conditional expectation at each {% raw %}<span class="math inline">\(s&gt;t\)</span>{% endraw %} is {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, so the limit gives {% raw %}<span class="math inline">\(Y=\mathbb E[Y\mid\mathcal F_t^0]\)</span>{% endraw %} almost surely. Completeness implies {% raw %}<span class="math inline">\(A\in\mathcal F_t^0\)</span>{% endraw %}, proving the claimed equality. Completion does not change independence, so {% raw %}<span class="math inline">\(B\)</span>{% endraw %} remains Brownian for this filtration.</p>

</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> Equality of finite-dimensional distributions does not imply that two arbitrary processes are indistinguishable, or transfer path regularity without additional hypotheses. For example, let {% raw %}<span class="math inline">\(\Omega=[0,1]\)</span>{% endraw %} with Lebesgue measure and define</p>

{% raw %}<div class="math display">\[\begin{aligned}
        X_t (\omega) &amp;= 0 ~~,~~ \forall t \,,\, \omega ~, \\
        Y_t (\omega) &amp;= \begin{cases} 1 &amp; \text{if } t=\omega ~, \\ 0 &amp; \text{otherwise} ~.\end{cases}
    
\end{aligned}\]</div>{% endraw %}
<p>For each fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_t=Y_t\)</span>{% endraw %} almost surely, and the same holds jointly at every finite collection of fixed times. Nevertheless, every path of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is continuous and every path of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} has a spike. The two processes have the same law on the cylinder sigma-field; the set of continuous functions is not determined by that sigma-field on the unrestricted space of all functions. This is not an example of two Brownian motions with different laws.</p>

</div>
<p>If instead {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are measurable random elements of {% raw %}<span class="math inline">\(\mathscr C[0,t_0]\)</span>{% endraw %} with the uniform norm, equal finite-dimensional distributions do determine the same law. Its Borel sigma-field is generated by evaluations at rational times: by continuity a uniform distance is the supremum of the distances at those times, and separability reduces open sets to countable unions of balls. Equality on finite intersections of evaluation events therefore extends to every Borel set.</p>

<h3 data-note-section="1" id="markov-properties">1. Markov Properties</h3>
<p>The Markov property describes the process after a fixed time; the strong Markov property allows that time to be chosen from the observed path. Let {% raw %}<span class="math inline">\(B\)</span>{% endraw %} be Brownian motion for a filtration satisfying the usual conditions. For a deterministic {% raw %}<span class="math inline">\(u\geq0\)</span>{% endraw %}, the process {% raw %}<span class="math inline">\(Y_t=B_{u+t}-B_u\)</span>{% endraw %} is Brownian motion for {% raw %}<span class="math inline">\(\mathcal G_t=\mathcal F_{u+t}\)</span>{% endraw %} and is independent of {% raw %}<span class="math inline">\(\mathcal F_u\)</span>{% endraw %}. This follows by applying independent increments to each finite vector of future increments.</p>

<p>Now let {% raw %}<span class="math inline">\(T\)</span>{% endraw %} be an almost surely finite stopping time. The process {% raw %}<span class="math inline">\(Y_t=B_{T+t}-B_T\)</span>{% endraw %} is Brownian motion for {% raw %}<span class="math inline">\(\mathcal G_t=\mathcal F_{T+t}\)</span>{% endraw %}, independent of {% raw %}<span class="math inline">\(\mathcal F_T\)</span>{% endraw %}. To prove the assertion, fix {% raw %}<span class="math inline">\(0&lt;t_1&lt;\cdots&lt;t_m\)</span>{% endraw %}, a bounded continuous function {% raw %}<span class="math inline">\(f:\mathbb R^m\to\mathbb R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A\in\mathcal F_T\)</span>{% endraw %}. Approximate {% raw %}<span class="math inline">\(T\)</span>{% endraw %} from above by {% raw %}<span class="math inline">\(T_n=2^{-n}(\lfloor2^nT\rfloor+1)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(A\cap\{T_n=k2^{-n}\}\in\mathcal F_{k2^{-n}}\)</span>{% endraw %}, and independent increments give</p>

{% raw %}<div class="math display">\[\begin{aligned}
&amp;\mathbb{E}\left[f(B_{T_n+t_1}-B_{T_n},\ldots,B_{T_n+t_m}-B_{T_n})\mathbb1_A\right]\\
&amp;=\sum_{k\geq1}\mathbb{E}\left[f(B_{k2^{-n}+t_1}-B_{k2^{-n}},\ldots,B_{k2^{-n}+t_m}-B_{k2^{-n}})
\mathbb1_{A\cap\{T_n=k2^{-n}\}}\right]\\
&amp;=\mathbb{E} f(B_{t_1},\ldots,B_{t_m})\,\mathbb P(A).
\end{aligned}\]</div>{% endraw %}

<p>Path continuity and bounded convergence allow {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}. A monotone-class argument extends the identity to bounded Borel functions. It identifies the finite-dimensional laws and independence from {% raw %}<span class="math inline">\(\mathcal F_T\)</span>{% endraw %}. To obtain the increment-independence condition relative to {% raw %}<span class="math inline">\(\mathcal G_s\)</span>{% endraw %}, apply the same argument to the stopping time {% raw %}<span class="math inline">\(T+s\)</span>{% endraw %}. Adaptation and continuity are inherited from {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, so all parts of the Brownian definition hold.</p>

<h4 id="21-1-reflection-at-a-level">
Reflection at a level
</h4>
<p>The strong Markov property also gives the reflection identity used in the later local-time calculations. Fix {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(T_a=\inf\{s\geq0:B_s=a\}\)</span>{% endraw %}, and fix {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{T_a&lt;t\}\)</span>{% endraw %}, the process after {% raw %}<span class="math inline">\(T_a\)</span>{% endraw %} is an independent Brownian motion. Conditional on {% raw %}<span class="math inline">\(\mathcal F_{T_a}\)</span>{% endraw %}, its value after the positive time {% raw %}<span class="math inline">\(t-T_a\)</span>{% endraw %} has a symmetric normal distribution. Formally one applies the finite-stopping-time result to {% raw %}<span class="math inline">\(T_a\wedge t\)</span>{% endraw %} and conditions on this random duration. Hence</p>
{% raw %}<div class="math display">\[\mathbb P(B_t\geq a,T_a&lt;t)=\frac12\mathbb P(T_a&lt;t).\]</div>{% endraw %}

<p>Continuity implies {% raw %}<span class="math inline">\(\{B_t\geq a\}\subseteq\{T_a\leq t\}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb P(T_a=t)=0\)</span>{% endraw %} because {% raw %}<span class="math inline">\(\{T_a=t\}\subseteq\{B_t=a\}\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[\mathbb P\left(\sup_{s\leq t}B_s\geq a\right)
=\mathbb P(T_a\leq t)=2\mathbb P(B_t\geq a)
=2\bigl[1-\Phi(a/\sqrt t)\bigr].\]</div>{% endraw %}

<p>In particular {% raw %}<span class="math inline">\(T_a&lt;\infty\)</span>{% endraw %} almost surely by letting {% raw %}<span class="math inline">\(t\uparrow\infty\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(S_t=\sup_{s\leq t}B_s\)</span>{% endraw %}, this also gives {% raw %}<span class="math inline">\(\mathbb P(S_t\leq a)=2\Phi(a/\sqrt t)-1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(a\geq0\)</span>{% endraw %}, using continuity in {% raw %}<span class="math inline">\(a\)</span>{% endraw %} at zero. Reflection of {% raw %}<span class="math inline">\(-B\)</span>{% endraw %} gives the corresponding negative-level result.</p>

<h3 data-note-section="2" id="continuity-of-paths">2. Continuity of Paths</h3>
<p>A function {% raw %}<span class="math inline">\(f:[0,1]\to\mathbb R\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}-Hölder continuous if {% raw %}<span class="math inline">\(|f(t)-f(s)|\leq C|t-s|^\alpha\)</span>{% endraw %} for some finite {% raw %}<span class="math inline">\(C\)</span>{% endraw %} and all {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}. Brownian paths have this property almost surely for every {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1/2\)</span>{% endraw %}. We prove it by controlling all dyadic intervals at once.</p>

<p>For {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, independent normal increments give</p>
{% raw %}<div class="math display">\[\mathbb E[e^{\lambda(B_t-B_s)}\mid\mathcal F_s]=e^{\lambda^2(t-s)/2},\]</div>{% endraw %}

<p>so {% raw %}<span class="math inline">\(E_t=\exp(\lambda B_t-\lambda^2t/2)\)</span>{% endraw %} is a nonnegative martingale with {% raw %}<span class="math inline">\(E_0=1\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\tau_x=\inf\{t:B_t\geq x\}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x&gt;0\)</span>{% endraw %}. Bounded-time optional sampling gives {% raw %}<span class="math inline">\(\mathbb E E_{\tau_x\wedge h}=1\)</span>{% endraw %}, while on {% raw %}<span class="math inline">\(\{\tau_x\leq h\}\)</span>{% endraw %}, continuity gives {% raw %}<span class="math inline">\(E_{\tau_x}\geq e^{\lambda x-\lambda^2h/2}\)</span>{% endraw %}. Thus</p>
{% raw %}<div class="math display">\[\mathbb P\left(\sup_{t\leq h}B_t\geq x\right)\leq e^{-\lambda x+\lambda^2h/2}.\]</div>{% endraw %}

<p>Choose {% raw %}<span class="math inline">\(\lambda=x/h\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(e^{-x^2/(2h)}\)</span>{% endraw %}. Applying the same argument to {% raw %}<span class="math inline">\(-B\)</span>{% endraw %} gives a factor two for the absolute maximum. Define</p>


{% raw %}<div class="math display">\[A_n=\bigcup_{k=0}^{2^n-1}
\left\{\sup_{k2^{-n}\leq t\leq(k+1)2^{-n}}|B_t-B_{k2^{-n}}|&gt;2^{-n\alpha}\right\}.\]</div>{% endraw %}

<p>Stationary increments and the union bound give</p>

{% raw %}<div class="math display">\[\mathbb P(A_n)\leq2^{n+1}\exp\left(-\frac12 2^{n(1-2\alpha)}\right).\]</div>{% endraw %}

<p>This sequence is summable. Borel–Cantelli therefore says that, almost surely, {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} does not occur for any sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(2^{-(n+1)}&lt;t-s\leq2^{-n}\)</span>{% endraw %}, the two times lie in the same or neighbouring dyadic intervals at level {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Comparing each value with the relevant endpoints gives</p>

{% raw %}<div class="math display">\[|B_t-B_s|\leq3\,2^{-n\alpha}\leq3\,2^\alpha|t-s|^\alpha.\]</div>{% endraw %}

<p>This handles short intervals. Boundedness of each continuous path on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} supplies a finite constant for the remaining intervals. A countable intersection over exponents approaching {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} gives all smaller positive exponents.</p>

<p>The law of the iterated logarithm gives a sharper scale at a fixed endpoint and at infinity:</p>

<span id="eq:lil-prelim"></span>
{% raw %}<div class="math display">\[\limsup_{t\to\infty}\frac{|B_t|}{\sqrt{2t\log\log t}}=1,
\qquad
\limsup_{t\downarrow0}\frac{|B_t|}{\sqrt{2t\log\log(1/t)}}=1
\quad\text{almost surely}.\tag{1}\]</div>{% endraw %}

<p>The <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}#sec:LIL">proof of the law of the iterated logarithm</a> gives the result at infinity. For the result at zero, set {% raw %}<span class="math inline">\(\widehat B_t=tB_{1/t}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat B_0=0\)</span>{% endraw %}. The upper bound at infinity implies {% raw %}<span class="math inline">\(\widehat B_t\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %}. This process is centered Gaussian and, for {% raw %}<span class="math inline">\(0&lt;s\leq t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb E[\widehat B_s\widehat B_t]=st\min(1/s,1/t)=s.\]</div>{% endraw %}

<p>The Gaussian characterization above makes {% raw %}<span class="math inline">\(\widehat B\)</span>{% endraw %} Brownian motion. Apply the LIL at infinity to {% raw %}<span class="math inline">\(\widehat B\)</span>{% endraw %} and substitute {% raw %}<span class="math inline">\(t=1/u\)</span>{% endraw %}.</p>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-le_gall_brownian_2016" class="csl-entry" role="listitem">
Le Gall, Jean-François. 2016. <em>Brownian Motion, Martingales, and Stochastic Calculus</em>. 1st ed. 2016. Graduate Texts in Mathematics 274. Cham: Springer International Publishing : Imprint: Springer. <a href="https://doi.org/10.1007/978-3-319-31089-3">https://doi.org/10.1007/978-3-319-31089-3</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a></p></nav>

</div>
