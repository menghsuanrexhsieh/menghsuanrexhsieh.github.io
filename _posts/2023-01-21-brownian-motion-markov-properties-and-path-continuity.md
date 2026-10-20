---
layout: "post"
title: "Brownian Motion: Markov Properties and Path Continuity"
date: "2023-01-21"
tags: ["probability theory", "stochastic processes"]
excerpt: "Brownian Motion: Markov Properties and Path Continuity. Notes on stochastic processes."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/01/21/brownian-motion/", "/2023/02/25/markov-properties/", "/2023/04/02/continuity-of-paths/"]
---

<div class="note-content" markdown="0">

<p>Brownian motion combines a simple distributional rule with a strong path requirement: increments over disjoint intervals are independent Gaussian variables, and the paths are continuous. These properties lead to two kinds of questions. How does the process restart after an observation time, and how rapidly can a continuous path fluctuate? The Markov property and the continuity estimates below answer these questions.</p>

<div id="brownian-motion" data-note-section="title">

</div>
<p>We begin with the probability space and filtration against which adaptation and independence are measured. Fix a probability space {% raw %}<span class="math inline">\((\Omega, \mathcal F, \mathop{\mathrm{\mathbf{P}\!\,}})\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a sigma-field on {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{\mathcal F_t\}_{t \geq 0}\)</span>{% endraw %} be a filtration.</p>

<p>A process {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is jointly measurable if {% raw %}<span class="math inline">\((\omega,t)\mapsto X_t(\omega)\)</span>{% endraw %} is measurable for {% raw %}<span class="math inline">\(\mathcal F\otimes\mathscr B(\mathbb R_+)\)</span>{% endraw %}. It is progressively measurable if, for each {% raw %}<span class="math inline">\(T\geq0\)</span>{% endraw %}, its restriction to {% raw %}<span class="math inline">\(\Omega\times[0,T]\)</span>{% endraw %} is measurable for {% raw %}<span class="math inline">\(\mathcal F_T\otimes\mathscr B([0,T])\)</span>{% endraw %}. These are different requirements. An adapted process with continuous paths is progressive: its left-endpoint step approximations on each finite interval are measurable for this smaller product sigma-field and converge pointwise.</p>

<p>A process {% raw %}<span class="math inline">\(\{B_t\}_{t \geq0}\)</span>{% endraw %} is called an <em>one-dimensional Brownian motion</em> if</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(B_t\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_t\)</span>{% endraw %}-measurable for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t-B_s \perp \!\!\! \perp\mathcal F_s\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s \leq t\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t - B_s \sim \mathcal{N}(0,t-s)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s \leq t\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(B_0 = 0\)</span>{% endraw %} almost surely,</p></li>
<li><p>{% raw %}<span class="math inline">\(B_t\)</span>{% endraw %} has continuous paths for all {% raw %}<span class="math inline">\(t\geq0\)</span>{% endraw %}.</p></li>
</ol>
<p>We can extend this definition to any dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}: {% raw %}<span class="math inline">\((B^{(1)}, \dots, B^{(d)})\)</span>{% endraw %} is a <em>{% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional Brownian motion</em> if each coordinate {% raw %}<span class="math inline">\(B^{(i)}\)</span>{% endraw %} is a one-dimensional Brownian motion, and the coordinate processes are mutually independent. The natural terminal sigma-field is {% raw %}<span class="math inline">\(\mathcal F^{B}_\infty=\sigma(B_t:t\geq0)\)</span>{% endraw %}. For a general filtration, {% raw %}<span class="math inline">\(\mathcal F_\infty=\sigma(\bigcup_{t\geq0}\mathcal F_t)\)</span>{% endraw %} can be larger; independent information may also be available. These sigma-fields coincide when we use the natural filtration, with the corresponding completion when null sets are added.</p>

<p>The following properties follow from the definition of Brownian motion. If {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is a Brownian motion starting at zero, then, for {% raw %}<span class="math inline">\(a &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_t = a B_{t/a^2}\)</span>{% endraw %} is also a Brownian motion starting at zero. To see this, we fix {% raw %}<span class="math inline">\(\{\mathcal F_t\}_{t \geq 0}\)</span>{% endraw %} to be a filtration for {% raw %}<span class="math inline">\(\{B_t\}_{t \geq 0}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal G_t = \mathcal F_{t/a^2}\)</span>{% endraw %} be a filtration for {% raw %}<span class="math inline">\(\{Y_t\}\)</span>{% endraw %}. Clearly, {% raw %}<span class="math inline">\(\{Y_t\}\)</span>{% endraw %} by definition has continuous sample paths, is {% raw %}<span class="math inline">\(\mathcal G_t\)</span>{% endraw %}-measurable for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Y_0 = 0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(s&lt;t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_t - Y_s = a(B_{t/a^2} - B_{s/a^2}) \sim \mathcal{N}(0,t-s)\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(\mathop{\mathrm{Var}}(Y_t - Y_s) = a^2 \left( \frac{t-s}{a^2} \right) = t-s\)</span>{% endraw %}. The independence {% raw %}<span class="math inline">\(Y_t-Y_s \perp \!\!\! \perp\mathcal F_{s/a^2}\)</span>{% endraw %} follows from definition.</p>

<p>Brownian motion is a Gaussian process. For {% raw %}<span class="math inline">\(0=t_0&lt;t_1&lt;\cdots&lt;t_n\)</span>{% endraw %}, the variables</p>

{% raw %}<div class="math display">\[Z_i=\frac{B_{t_i}-B_{t_{i-1}}}{\sqrt{t_i-t_{i-1}}},\qquad 1\leq i\leq n,\]</div>{% endraw %}

<p>are independent standard normals. Since {% raw %}<span class="math inline">\(B_{t_j}=\sum_{i=1}^j\sqrt{t_i-t_{i-1}}Z_i\)</span>{% endraw %}, every finite-dimensional vector is jointly Gaussian.</p>

<p>Conversely, suppose {% raw %}<span class="math inline">\(B\)</span>{% endraw %} has continuous paths, all finite-dimensional vectors are jointly Gaussian, {% raw %}<span class="math inline">\(\mathbb{E}B_t=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Cov}(B_s,B_t)=\min(s,t)\)</span>{% endraw %}. Use its natural filtration {% raw %}<span class="math inline">\(\mathcal F_t=\sigma(B_r:r\leq t)\)</span>{% endraw %}. The covariance formula gives {% raw %}<span class="math inline">\(B_0=0\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(B_t-B_s\sim\mathcal{N}(0,t-s)\)</span>{% endraw %}. Its covariance with every finite vector {% raw %}<span class="math inline">\((B_{r_1},\ldots,B_{r_m})\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_j\leq s\)</span>{% endraw %}, is zero. Joint Gaussianity therefore gives independence from that entire vector. A generating-class argument extends this to independence from {% raw %}<span class="math inline">\(\mathcal F_s\)</span>{% endraw %}, proving the Brownian property.</p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1.</strong> The completed natural Brownian filtration is already right-continuous. Let {% raw %}<span class="math inline">\(\mathcal F_t^{00}=\sigma(B_s:s\leq t)\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\mathcal{N}\)</span>{% endraw %} contain all subsets of null sets in {% raw %}<span class="math inline">\(\mathcal F_\infty^{00}\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\mathcal F_t^0=\sigma(\mathcal F_t^{00}\cup\mathcal{N})\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\bigcap_{\varepsilon&gt;0}\mathcal F_{t+\varepsilon}^0=\mathcal F_t^0\)</span>{% endraw %}. One way to verify this is to start with a bounded continuous function {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} of finitely many Brownian coordinates. Independent Gaussian increments give its conditional expectation at time {% raw %}<span class="math inline">\(s\)</span>{% endraw %} by keeping the coordinates already observed and integrating the future increments against their Gaussian law. As {% raw %}<span class="math inline">\(s\downarrow t\)</span>{% endraw %}, path continuity and continuity of these Gaussian expectations give {% raw %}<span class="math inline">\(\mathbb{E}[Y\mid\mathcal F_s^0]\to\mathbb{E}[Y\mid\mathcal F_t^0]\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Bounded cylinder functions are dense in {% raw %}<span class="math inline">\(L^1(\mathcal F_\infty^0)\)</span>{% endraw %}, and conditional expectation is an {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} contraction, so the same limit holds for every integrable {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. The reverse martingale convergence theorem identifies the limit as the conditional expectation on {% raw %}<span class="math inline">\(\bigcap_{s&gt;t}\mathcal F_s^0\)</span>{% endraw %}. Applying this to indicators in that intersection proves equality modulo null sets, hence equality after completion. Completion does not change independence, so {% raw %}<span class="math inline">\(B\)</span>{% endraw %} remains Brownian for this filtration.</p>

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

<p>For the upper bound at infinity, fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(q&gt;1\)</span>{% endraw %} close enough to one that {% raw %}<span class="math inline">\((1+\varepsilon)^2/q&gt;1\)</span>{% endraw %}. For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the maximal estimate above gives</p>

{% raw %}<div class="math display">\[\mathbb P\left(\sup_{s\leq q^n}|B_s|&gt;(1+\varepsilon)
\sqrt{2q^{n-1}\log\log q^{n-1}}\right)
\leq2\bigl((n-1)\log q\bigr)^{-(1+\varepsilon)^2/q}.\]</div>{% endraw %}

<p>The probabilities are summable. On {% raw %}<span class="math inline">\(q^{n-1}\leq t\leq q^n\)</span>{% endraw %}, the denominator {% raw %}<span class="math inline">\(\sqrt{2t\log\log t}\)</span>{% endraw %} is at least its value at the left endpoint, so Borel–Cantelli gives an eventual upper bound of {% raw %}<span class="math inline">\(1+\varepsilon\)</span>{% endraw %} for the ratio.</p>

<p>For the lower bound, take {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %} and now choose a new, sufficiently large {% raw %}<span class="math inline">\(q\)</span>{% endraw %} so that</p>

{% raw %}<div class="math display">\[a=\frac{(1-\varepsilon)^2}{1-q^{-1}}&lt;1,
\qquad 2q^{-1/2}&lt;\frac{\varepsilon}{2}.\]</div>{% endraw %}

<p>The events</p>

{% raw %}<div class="math display">\[E_n=\left\{B_{q^{n+1}}-B_{q^n}&gt;(1-\varepsilon)
\sqrt{2q^{n+1}\log\log q^{n+1}}\right\}\]</div>{% endraw %}

<p>are independent. For a standard normal variable {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x\geq1\)</span>{% endraw %}, integrating its density over {% raw %}<span class="math inline">\([x,x+1/x]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb P(Z&gt;x)\geq c x^{-1}e^{-x^2/2}\)</span>{% endraw %}, with an absolute {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}. Standardizing the increment therefore yields, for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb P(E_n)\geq c_q\frac{(n+1)^{-a}}{\sqrt{\log(n+1)}}.\]</div>{% endraw %}

<p>This series diverges because {% raw %}<span class="math inline">\(a&lt;1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(E_n\)</span>{% endraw %} occurs infinitely often. The already proved upper bound gives eventually</p>

{% raw %}<div class="math display">\[|B_{q^n}|\leq2\sqrt{2q^n\log\log q^n}
\leq\frac{\varepsilon}{2}\sqrt{2q^{n+1}\log\log q^{n+1}}.\]</div>{% endraw %}

<p>On infinitely many of the events {% raw %}<span class="math inline">\(E_n\)</span>{% endraw %}, subtraction now gives</p>

{% raw %}<div class="math display">\[B_{q^{n+1}}\geq\left(1-\frac{3\varepsilon}{2}\right)
\sqrt{2q^{n+1}\log\log q^{n+1}}.\]</div>{% endraw %}

<p>Taking a countable sequence {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves the assertion at infinity. For the assertion at zero, define {% raw %}<span class="math inline">\(\widehat B_t=tB_{1/t}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat B_0=0\)</span>{% endraw %}. The upper bound just proved implies continuity at zero. Its covariance is {% raw %}<span class="math inline">\(\min(s,t)\)</span>{% endraw %}, and it is centered Gaussian, so the Gaussian characterization above makes it Brownian motion. Apply the result at infinity to {% raw %}<span class="math inline">\(\widehat B\)</span>{% endraw %} and substitute {% raw %}<span class="math inline">\(t=1/u\)</span>{% endraw %}. This proves the second assertion. ◻</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-le_gall_brownian_2016" class="csl-entry" role="listitem">
Le Gall, Jean-François. 2016. <em>Brownian Motion, Martingales, and Stochastic Calculus</em>. 1st ed. 2016. Graduate Texts in Mathematics 274. Cham: Springer International Publishing : Imprint: Springer. <a href="https://doi.org/10.1007/978-3-319-31089-3">https://doi.org/10.1007/978-3-319-31089-3</a>.
</div>
</div>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-05-08-brownian-path-oscillations-and-continuity-bounds %}">Brownian Path Oscillations and Continuity Bounds</a></p></nav>

</div>
